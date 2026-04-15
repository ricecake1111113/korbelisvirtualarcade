const Cell = require('./Cell');
const Bot = require('./Bot');
const WebSocket = require('ws');

let nextId = 1;
const TEAM_COLORS = [
    '#cf5a5a', // red
    '#4f73ce', // blue
    '#58ae67', // green
    '#d7c953', // yellow
    '#8a67d2', // purple
    '#d88a47', // orange
    '#8f5f42', // brown
    '#8c919a', // grey
    '#d885b1', // pink
    '#58c6da', // cyan
    '#d8b347', // gold
    '#f1f3f6', // white
    '#23262b', // black (fallback if extended)
];
const TEAM_NAMES = [
    'Crimson',
    'Azure',
    'Emerald',
    'Sun',
    'Violet',
    'Amber',
    'Cocoa',
    'Slate',
    'Rose',
    'Cyan',
    'Gold',
    'Ivory',
];

class Game {
    constructor(config) {
        this.config = config;
        this.players = new Map();       // ws -> player
        this.cells = new Map();         // id -> cell
        this.food = new Map();          // id -> food
        this.viruses = new Map();       // id -> virus
        this.bots = [];
        this.tickInterval = null;
        this.leaderboard = [];
        this.foodSpatialHash = new Map();
        this.cellSpatialHash = new Map();
        this.cellHashCellSize = 300;
        this.lastStateBroadcastAt = 0;
        this.availableSkins = [];
        this.availableSkinSet = new Set();
        this.teamMassDistribution = [];
        this.lastBotPopulationSyncAt = 0;
        this.chatLog = [];
        this.chatSeq = 1;
        this.nextBountyPelletAt = 0;
        this.refreshRuntimeFromConfig();
    }

    start() {
        for (let i = 0; i < this.config.maxFood; i++) this.spawnFood();
        for (let i = 0; i < this.config.maxViruses; i++) this.spawnVirus();
        this.syncBotPopulation(true);
        this.ensureBotRoleMix();

        this.tickInterval = setInterval(() => this.tick(), 1000 / this.config.tickRate);
    }

    generateId() {
        return nextId++;
    }

    radiusFromMass(mass) {
        return Math.pow(Math.max(1, Number(mass) || 1), this.massRadiusExponent) * this.massRadiusScale;
    }

    shouldShowSkinForPlayer(player) {
        if (!player) return false;
        if (!player.skin) return false;
        // In teams mode, skins now show on ALL players (the team border distinguishes teams)
        return true;
    }

    refreshRuntimeFromConfig() {
        this.foodHashCellSize = this.config.foodGridCellSize ?? 140;
        this.maxFoodEntities = this.config.maxFood + (this.config.maxEjectedFood ?? Math.round(this.config.maxFood * 0.35));
        this.ejectedLifetimeMs = this.config.ejectedLifetimeMs ?? 20000;
        this.maxVisibleFoodPerPlayer = Math.max(100, Math.floor(this.config.maxVisibleFoodPerPlayer ?? this.config.maxFood));
        this.maxVisibleCellsPerPlayer = Math.max(
            100,
            Math.floor(this.config.maxVisibleCellsPerPlayer ?? ((this.config.botCount + 2) * Math.max(1, this.config.maxCells)))
        );
        this.stateIntervalMs = 1000 / (this.config.stateBroadcastRate ?? this.config.tickRate);
        this.massRadiusScale = Math.max(3.2, Math.min(8.5, this.config.massRadiusScale ?? 4.9));
        this.massRadiusExponent = Math.max(0.35, Math.min(0.65, this.config.massRadiusExponent ?? 0.46));
        this.baseFoodMass = Math.max(0.1, Math.min(3, this.config.baseFoodMass ?? 0.42));
        this.goldenFoodChance = Math.max(0, Math.min(0.15, this.config.goldenFoodChance ?? 0.014));
        this.goldenFoodMass = Math.max(this.baseFoodMass, Math.min(12, this.config.goldenFoodMass ?? 2.2));
        this.ejectedPelletMass = Math.max(1, Math.min(20, this.config.ejectedPelletMass ?? 6));
        this.ejectedPelletCost = Math.max(this.ejectedPelletMass + 1, Math.min(50, this.config.ejectedPelletCost ?? 13));
        this.ejectMinCellMass = Math.max(this.config.startMass + 4, this.ejectedPelletCost + this.config.startMass * 0.7);
        Cell.setRadiusTuning(this.massRadiusScale, this.massRadiusExponent);
        this.leaderboardSize = this.config.leaderboardSize ?? 10;
        const mode = `${this.config.gameMode || 'ffa'}`.toLowerCase();
        this.gameMode = mode === 'teams' || mode === 'experimental' ? mode : 'ffa';
        this.instaMerge = !!this.config.instaMerge;
        this.allowExperimentalInClassicModes = !!this.config.allowExperimentalInClassicModes;
        this.plasmaFoodChance = Math.max(0, Math.min(0.25, this.config.plasmaFoodChance ?? 0.018));
        this.plasmaFoodMass = Math.max(this.baseFoodMass, Math.min(12, this.config.plasmaFoodMass ?? 1.45));
        this.teamCount = Math.max(2, Math.min(12, Math.floor(this.config.teamCount ?? 3)));
        this.spawnerVirusesInFFA = !!this.config.spawnerVirusesInFFA;
        this.spawnerVirusChance = Math.max(0, Math.min(1, this.config.spawnerVirusChance ?? 0.22));
        this.forceSpawnerVirusesInTeams = this.config.forceSpawnerVirusesInTeams !== false;
        this.forceSpawnerVirusesInExperimental = this.config.forceSpawnerVirusesInExperimental !== false;
        this.normalVirusCanKill = !!this.config.normalVirusCanKill;
        this.spawnerDispenseRate = Math.max(0.1, Math.min(4, this.config.spawnerDispenseRate ?? 0.45));
        this.spawnerPassiveRatePerSec = Math.max(0, Math.min(6, this.config.spawnerPassiveRatePerSec ?? 1));
        this.spawnerPelletMass = Math.max(0.25, Math.min(6, this.config.spawnerPelletMass ?? 0.7));
        this.virusSmallCellKillRatio = Math.max(0.1, Math.min(0.95, this.config.virusSmallCellKillRatio ?? 0.52));
        this.virusHideRatio = Math.max(0.2, Math.min(1.4, this.config.virusHideRatio ?? 0.9));
        this.cellEatMassRatio = Math.max(1.05, Math.min(2.5, this.config.cellEatMassRatio ?? 1.22));
        this.cellEatCenterInsideRatio = Math.max(0.1, Math.min(0.95, this.config.cellEatCenterInsideRatio ?? 0.42));
        this.cellEatCoverageRatio = Math.max(0.45, Math.min(0.98, this.config.cellEatCoverageRatio ?? 0.75));

        this.virusBaseMass = this.config.virusBaseMass ?? 100;
        this.virusFeedMassGain = this.config.virusFeedMassGain ?? 14;
        this.virusSplitMass = this.config.virusSplitMass ?? 220;
        this.virusShotSpeed = this.config.virusShotSpeed ?? 30;
        this.virusShotFriction = this.config.virusShotFriction ?? 0.9;
        this.maxVirusEntities = this.config.maxVirusEntities ?? (this.config.maxViruses * 2);
        this.virusEatBonusMass = this.config.virusEatBonusMass ?? 18;

        this.botSenseCellScanLimit = this.config.botSenseCellScanLimit ?? 700;
        this.botSenseFoodSampleLimit = this.config.botSenseFoodSampleLimit ?? 260;
        this.botSenseVirusScanLimit = this.config.botSenseVirusScanLimit ?? 120;
        this.botBoldnessBase = Math.max(0, Math.min(1, this.config.botBoldnessBase ?? 0.45));
        this.botSmartnessScale = Math.max(0.2, Math.min(3, this.config.botSmartnessScale ?? 1));
        this.botAffectionScale = Math.max(0.2, Math.min(3, this.config.botAffectionScale ?? 1));
        this.botBoldnessScale = Math.max(0.2, Math.min(3, this.config.botBoldnessScale ?? 1));
        this.botGreedinessScale = Math.max(0.2, Math.min(3, this.config.botGreedinessScale ?? 1));
        this.botSheepishnessScale = Math.max(0.2, Math.min(3, this.config.botSheepishnessScale ?? 1));
        this.botHumanityScale = Math.max(0.2, Math.min(3, this.config.botHumanityScale ?? 1));
        this.botTrickinessScale = Math.max(0.2, Math.min(3, this.config.botTrickinessScale ?? 1));
        this.botOpportunismScale = Math.max(0.2, Math.min(3, this.config.botOpportunismScale ?? 1));
        this.botHerdResistanceScale = Math.max(0.2, Math.min(3, this.config.botHerdResistanceScale ?? 1));
        this.botBoldSplitBurstChance = Math.max(0, Math.min(1, this.config.botBoldSplitBurstChance ?? 0.1));
        this.botPanicRetreatChance = Math.max(0, Math.min(1, this.config.botPanicRetreatChance ?? 0.18));
        this.botPanicRetreatMinMass = Math.max(20, Math.min(10000, this.config.botPanicRetreatMinMass ?? 110));
        this.botPanicRetreatBurstMax = Math.max(1, Math.min(12, Math.floor(this.config.botPanicRetreatBurstMax ?? 4)));
        this.sacrificeToPlayerBots = !!this.config.sacrificeToPlayerBots;
        this.sacrificeToPlayerBotChance = Math.max(0, Math.min(1, this.config.sacrificeToPlayerBotChance ?? 0.08));
        this.sacrificeToPlayerBotMaxShare = Math.max(0, Math.min(1, this.config.sacrificeToPlayerBotMaxShare ?? 0.15));

        this.botSpawnMassMode = this.config.botSpawnMassMode ?? 'varied';
        this.botRespawnMassMode = this.config.botRespawnMassMode ?? 'player_start';
        this.botSpawnPlayerMassScale = this.config.botSpawnPlayerMassScale ?? 1;
        this.moldColonyMode = !!this.config.moldColonyMode;

        this.botKamikazeMin = this.config.botKamikazeMin ?? 1;
        this.botMergeFeederMin = this.config.botMergeFeederMin ?? 1;
        this.deferBotsUntilHumans = !!this.config.deferBotsUntilHumans;
        this.spectatorBotCount = this.config.spectatorBotCount ?? 0;
        this.botSkinChance = this.config.botSkinChance ?? 0;
        this.botHumanAssistChance = this.config.botHumanAssistChance ?? 0.2;
        this.botMaxSupportersPerHuman = this.config.botMaxSupportersPerHuman ?? 2;
        this.spectatorFollowHumanChance = this.config.spectatorFollowHumanChance ?? 0.45;
        this.botKamikazeMaxShare = this.config.botKamikazeMaxShare ?? 0.06;
        this.botMergeMaxShare = this.config.botMergeMaxShare ?? 0.08;

        this.botTeamSeekIntervalMs = this.config.botTeamSeekIntervalMs ?? 2400;
        this.botTeamAssignChance = this.config.botTeamAssignChance ?? 0.35;
        this.botTeamDurationMs = this.config.botTeamDurationMs ?? 18000;
        this.botTeamMaxDistance = this.config.botTeamMaxDistance ?? 900;
        this.botTeamWithHumanChance = this.config.botTeamWithHumanChance ?? 0.2;
        this.botTeamFeedCooldownMs = this.config.botTeamFeedCooldownMs ?? 1400;
        this.botTeamFeedChance = this.config.botTeamFeedChance ?? 0.55;
        this.botTeamFeedMinMass = this.config.botTeamFeedMinMass ?? 85;
        this.botTeamSplitCooldownMs = this.config.botTeamSplitCooldownMs ?? 7000;
        this.botTeamSplitChance = this.config.botTeamSplitChance ?? 0.24;
        this.botTeamSplitMinMass = this.config.botTeamSplitMinMass ?? 180;
        this.crossTeamTeamingChance = Math.max(0, Math.min(0.2, this.config.crossTeamTeamingChance ?? 0.001));
        this.enableBotTeaming = this.config.enableBotTeaming !== false;
        this.botTeamsStickUntilDeath = this.config.botTeamsStickUntilDeath !== false;
        this.botVirusWeaponChance = Math.max(0, Math.min(1, this.config.botVirusWeaponChance ?? 0.22));
        this.botVirusWeaponCooldownMs = Math.max(100, Math.min(20000, this.config.botVirusWeaponCooldownMs ?? 2600));
        this.botVirusWeaponMinMass = Math.max(20, Math.min(5000, this.config.botVirusWeaponMinMass ?? 80));
        this.botPopulationAdjustIntervalMs = Math.max(250, Math.min(12000, Math.floor(this.config.botPopulationAdjustIntervalMs ?? 900)));
        this.botPopulationRampPerStep = Math.max(1, Math.min(120, Math.floor(this.config.botPopulationRampPerStep ?? Math.max(2, Math.round((this.config.botCount || 0) / 18)))));
        this.botPopulationHoverMinRatio = Math.max(0.5, Math.min(1, this.config.botPopulationHoverMinRatio ?? 0.9));
        this.botPopulationHoverVariance = Math.max(0, Math.min(2000, Math.floor(this.config.botPopulationHoverVariance ?? Math.max(2, Math.round((this.config.botCount || 0) * 0.08)))));
        this.preserveAliveBots = this.config.preserveAliveBots !== false;
        this.enableBotChat = !!this.config.enableBotChat;
        this.botChatChancePerSecond = Math.max(0, Math.min(2, this.config.botChatChancePerSecond ?? 0.32));
        this.botChatMaxBacklog = Math.max(10, Math.min(400, Math.floor(this.config.botChatMaxBacklog ?? 80)));
        this.enableBountyPellets = this.config.enableBountyPellets !== false;
        this.bountyPelletIntervalMs = Math.max(1500, Math.min(30000, Math.floor(this.config.bountyPelletIntervalMs ?? 7000)));
        this.bountyPelletMass = Math.max(this.baseFoodMass, Math.min(20, this.config.bountyPelletMass ?? 3.4));
        this.bountyLeaderMinMass = Math.max(40, Math.min(25000, this.config.bountyLeaderMinMass ?? 180));

        this.botCircleSpitChancePerTick = this.config.botCircleSpitChancePerTick ?? 0.00012;
        this.botCircleSpitCooldownMs = this.config.botCircleSpitCooldownMs ?? 15000;
        this.botCircleSpitMinMass = this.config.botCircleSpitMinMass ?? 170;
        this.botCircleSpitPelletsMin = this.config.botCircleSpitPelletsMin ?? 6;
        this.botCircleSpitPelletsMax = this.config.botCircleSpitPelletsMax ?? 12;
        if (!this.nextBountyPelletAt) {
            this.nextBountyPelletAt = Date.now() + Math.round(this.bountyPelletIntervalMs * (0.55 + Math.random() * 0.7));
        }
    }

    isTeamsMode() {
        return this.gameMode === 'teams';
    }

    isExperimentalMode() {
        return this.gameMode === 'experimental';
    }

    useExperimentalMechanics() {
        return this.isExperimentalMode() || !!this.allowExperimentalInClassicModes;
    }

    canSpawnSpawnerViruses() {
        if (this.isExperimentalMode()) return !!this.forceSpawnerVirusesInExperimental;
        if (this.isTeamsMode()) return false;
        return !!this.spawnerVirusesInFFA;
    }

    forceAllSpawnerViruses() {
        if (this.isExperimentalMode()) return !!this.forceSpawnerVirusesInExperimental;
        if (this.isTeamsMode()) return false;
        return false;
    }

    getMergeDelayMs() {
        return this.instaMerge ? 130 : (this.config.mergeTime * 1000);
    }

    getActiveTeamCount() {
        return Math.max(2, Math.min(12, Math.floor(this.teamCount || 3)));
    }

    getTeamColor(teamId) {
        if (!Number.isInteger(teamId)) return this.randomColor();
        return TEAM_COLORS[teamId % TEAM_COLORS.length] || TEAM_COLORS[0];
    }

    getTeamName(teamId) {
        if (!Number.isInteger(teamId)) return 'Team';
        return TEAM_NAMES[teamId % TEAM_NAMES.length] || `Team ${teamId + 1}`;
    }

    getPlayerDisplayColor(player) {
        if (this.isTeamsMode() && Number.isInteger(player.teamId)) {
            return this.getTeamColor(player.teamId);
        }
        return player.color || this.randomColor();
    }

    getTeamCounts() {
        const teams = new Array(this.getActiveTeamCount()).fill(0);
        const allPlayers = [...this.players.values(), ...this.bots];
        for (const p of allPlayers) {
            if (!p) continue;
            if (!Number.isInteger(p.teamId)) continue;
            if (p.teamId < 0 || p.teamId >= teams.length) continue;
            teams[p.teamId] += 1;
        }
        return teams;
    }

    assignTeam(player, force = false) {
        if (!player) return null;
        const teamCount = this.getActiveTeamCount();
        if (!force && Number.isInteger(player.teamId) && player.teamId >= 0 && player.teamId < teamCount) {
            return player.teamId;
        }

        const counts = this.getTeamCounts();
        let minCount = Infinity;
        for (const c of counts) {
            if (c < minCount) minCount = c;
        }
        const candidates = [];
        for (let i = 0; i < counts.length; i++) {
            if (counts[i] === minCount) candidates.push(i);
        }
        const chosen = candidates[Math.floor(Math.random() * candidates.length)] ?? 0;
        player.teamId = chosen;
        return chosen;
    }

    ensurePlayerTeam(player) {
        if (!player) return;
        if (this.isTeamsMode()) {
            this.assignTeam(player, false);
            player.color = this.getTeamColor(player.teamId);
        } else if (!player.color) {
            player.color = this.randomColor();
        }
    }

    applyPlayerAppearance(player) {
        if (!player) return;
        if (this.isTeamsMode()) {
            this.ensurePlayerTeam(player);
        } else if (!player.color) {
            player.color = this.randomColor();
        }

        if (!player.cells) return;
        const color = this.getPlayerDisplayColor(player);
        for (const cell of player.cells) {
            cell.color = color;
            cell.teamId = this.isTeamsMode() ? player.teamId : null;
            cell.skin = this.shouldShowSkinForPlayer(player) ? (player.skin || cell.skin || null) : null;
        }
    }

    updateRuntimeConfig(nextConfig) {
        const prevTickRate = this.config.tickRate;
        const prevModeRaw = `${this.config.gameMode || 'ffa'}`.toLowerCase();
        const prevMode = prevModeRaw === 'teams' || prevModeRaw === 'experimental' ? prevModeRaw : 'ffa';
        const prevTeamCount = Math.max(2, Math.min(12, Math.floor(this.config.teamCount ?? 3)));
        const prevMapWidth = this.config.mapWidth;
        const prevMapHeight = this.config.mapHeight;
        this.config = { ...this.config, ...nextConfig };
        this.refreshRuntimeFromConfig();
        const mapSizeChanged = prevMapWidth !== this.config.mapWidth || prevMapHeight !== this.config.mapHeight;
        if (mapSizeChanged) this.clampWorldToBounds();
        this.syncBotPopulation(true);
        this.ensureBotRoleMix();
        const modeChanged = prevMode !== this.gameMode;
        const teamCountChanged = prevTeamCount !== this.teamCount;

        if (modeChanged || teamCountChanged) {
            for (const p of [...this.players.values(), ...this.bots]) {
                if (this.isTeamsMode()) {
                    this.assignTeam(p, teamCountChanged);
                } else if (modeChanged) {
                    p.color = this.randomColor();
                }
                this.applyPlayerAppearance(p);
            }
        }

        for (const bot of this.bots) {
            if (!bot) continue;
            bot.humanAssistChance = this.botHumanAssistChance;
            bot.maxSupportersPerHuman = this.botMaxSupportersPerHuman;
            bot.spectatorFollowHumanChance = this.spectatorFollowHumanChance;
            if (typeof bot.applyPersonalityScales === 'function') {
                bot.applyPersonalityScales(this, Math.random() < 0.65);
            } else {
                bot.boldness = Math.max(0, Math.min(1, (this.botBoldnessBase ?? 0.45) + (Math.random() - 0.5) * 0.2));
                if (Math.random() > 0.5) {
                    bot.likesHelpingHumans = Math.random() < this.botHumanAssistChance;
                }
                if (Math.random() > 0.5) {
                    bot.prefersHumanSpectate = Math.random() < this.spectatorFollowHumanChance;
                }
            }
            if (!this.enableBotTeaming) {
                this.clearBotTeam(bot);
            }
        }

        while (this.viruses.size < this.config.maxViruses) this.spawnVirus();
        if (this.viruses.size > this.config.maxViruses) {
            const remove = this.viruses.size - this.config.maxViruses;
            const ids = [...this.viruses.keys()].slice(0, remove);
            for (const id of ids) this.viruses.delete(id);
        }
        if (this.forceAllSpawnerViruses()) {
            for (const [, virus] of this.viruses) {
                if (virus.kind === 'spawner') continue;
                virus.kind = 'spawner';
                virus.spawnerStoredMass = Math.max(0, virus.spawnerStoredMass || 0);
                virus.spawnerDispenseAccumulator = 0;
                virus.feedCount = 0;
            }
        }
        if (!this.canSpawnSpawnerViruses()) {
            for (const [, virus] of this.viruses) {
                if (virus.kind === 'spawner') {
                    virus.kind = 'normal';
                    virus.spawnerStoredMass = 0;
                    virus.spawnerDispenseAccumulator = 0;
                    virus.mass = Math.max(this.virusBaseMass, virus.mass || this.virusBaseMass);
                }
            }
        }

        while (this.countBaseFood() > this.config.maxFood) {
            let removed = false;
            for (const [id, food] of this.food) {
                if (food.type === 'ejected') continue;
                this.food.delete(id);
                removed = true;
                break;
            }
            if (!removed) break;
        }
        while (this.countBaseFood() < this.config.maxFood && this.food.size < this.maxFoodEntities) {
            this.spawnFood();
        }
        if (this.food.size > this.maxFoodEntities) {
            const overflow = this.food.size - this.maxFoodEntities;
            const ejectedIds = [];
            const normalIds = [];
            for (const [id, food] of this.food) {
                if (food.type === 'ejected') ejectedIds.push(id);
                else normalIds.push(id);
            }
            let removed = 0;
            for (const id of ejectedIds) {
                if (removed >= overflow) break;
                this.food.delete(id);
                removed++;
            }
            for (const id of normalIds) {
                if (removed >= overflow) break;
                this.food.delete(id);
                removed++;
            }
        }

        if (!this.useExperimentalMechanics()) {
            for (const [, food] of this.food) {
                if (!food) continue;
                if (food.type === 'golden' || food.type === 'bounty' || food.type === 'plasma') {
                    food.type = 'food';
                    food.mass = this.baseFoodMass;
                    if (!food.color || food.color === '#ffd34a' || food.color === '#ff9f3f' || food.color === '#4bd4ff') {
                        food.color = this.randomColor();
                    }
                }
            }
        }

        if (this.tickInterval && prevTickRate !== this.config.tickRate) {
            clearInterval(this.tickInterval);
            this.tickInterval = setInterval(() => this.tick(), 1000 / this.config.tickRate);
        }
    }

    getRuntimeConfig() {
        return { ...this.config };
    }

    setAvailableSkins(skinNames) {
        const unique = [];
        const seen = new Set();
        for (const raw of skinNames || []) {
            if (typeof raw !== 'string') continue;
            const name = raw.trim();
            if (!name) continue;
            if (seen.has(name)) continue;
            seen.add(name);
            unique.push(name);
        }
        this.availableSkins = unique.sort((a, b) => a.localeCompare(b));
        this.availableSkinSet = new Set(this.availableSkins);
    }

    normalizeSkinName(rawName) {
        if (typeof rawName !== 'string') return null;
        const name = rawName.trim();
        if (!name) return null;
        return this.availableSkinSet.has(name) ? name : null;
    }

    pickRandomSkin() {
        if (this.availableSkins.length === 0) return null;
        return this.availableSkins[Math.floor(Math.random() * this.availableSkins.length)];
    }

    assignPlayerSkin(player, requestedSkin = null, isBot = false) {
        if (this.isTeamsMode() && isBot) {
            player.skin = null;
            return;
        }

        if (requestedSkin === null || requestedSkin === undefined) {
            if (isBot && Math.random() < this.botSkinChance) {
                player.skin = this.pickRandomSkin();
            } else if (!isBot) {
                player.skin = null;
            }
            return;
        }
        const normalized = this.normalizeSkinName(requestedSkin);
        player.skin = normalized || null;
    }

    createBot(kind = 'normal') {
        const bot = new Bot(this);
        bot.kind = kind;
        if (kind === 'spectator') {
            bot.setRole('spectator_support', this.config);
            bot.name = Math.random() < 0.5 ? `Spec${Math.floor(Math.random() * 900 + 100)}` : 'Observer';
            bot.excludeFromLeaderboard = true;
        } else {
            bot.excludeFromLeaderboard = false;
        }
        this.ensurePlayerTeam(bot);
        this.assignPlayerSkin(bot, null, true);
        this.bots.push(bot);
        this.spawnBot(bot, this.bots.length - 1, false);
        return bot;
    }

    removeBot(bot) {
        if (!bot) return;
        for (const c of bot.cells || []) {
            this.cells.delete(c.id);
        }
        bot.cells = [];
        const idx = this.bots.indexOf(bot);
        if (idx >= 0) this.bots.splice(idx, 1);
    }

    hasAliveHumans() {
        for (const [, player] of this.players) {
            if (!player || player.isBot) continue;
            if (this.isPlayerAlive(player)) return true;
        }
        return false;
    }

    getDesiredBotPopulation() {
        if (this.deferBotsUntilHumans && !this.hasAliveHumans()) {
            return {
                normal: 0,
                normalMax: 0,
                spectator: 0,
                spectatorMax: 0,
            };
        }
        const configuredNormal = Math.max(0, Math.floor(this.config.botCount || 0));
        const configuredSpectator = Math.max(0, Math.floor(this.spectatorBotCount || 0));
        const minNormal = Math.floor(configuredNormal * this.botPopulationHoverMinRatio);
        const dynamicWindow = Math.max(0, configuredNormal - minNormal);
        const jitter = dynamicWindow > 0
            ? Math.floor(Math.random() * (Math.min(dynamicWindow, this.botPopulationHoverVariance) + 1))
            : 0;
        const targetNormal = Math.max(minNormal, configuredNormal - jitter);
        return {
            normal: targetNormal,
            normalMax: configuredNormal,
            spectator: configuredSpectator,
            spectatorMax: configuredSpectator,
        };
    }

    syncBotPopulation(force = false) {
        const now = Date.now();
        if (!force && (now - this.lastBotPopulationSyncAt) < this.botPopulationAdjustIntervalMs) {
            return false;
        }
        this.lastBotPopulationSyncAt = now;

        const desired = this.getDesiredBotPopulation();
        const targetNormal = desired.normal;
        const normalHardCap = desired.normalMax;
        const targetSpectators = desired.spectator;
        const spectatorHardCap = desired.spectatorMax;

        const normalBots = this.bots.filter((b) => b.kind !== 'spectator');
        const baseStep = Math.max(1, this.botPopulationRampPerStep);
        const maxAddStep = force ? Math.max(2, baseStep * 4) : baseStep;
        const maxDropStep = force ? Math.max(2, baseStep * 6) : Math.max(2, baseStep * 2);
        const removeBotsFromPool = (pool, requestedCount) => {
            const count = Math.max(0, Math.floor(requestedCount));
            if (count <= 0 || pool.length === 0) return 0;
            const removable = this.preserveAliveBots
                ? pool.filter((b) => !this.isPlayerAlive(b))
                : pool;
            if (removable.length === 0) return 0;
            const removeCount = Math.min(count, removable.length);
            for (let i = 0; i < removeCount; i++) {
                this.removeBot(removable[removable.length - 1 - i]);
            }
            return removeCount;
        };
        let changed = false;

        if (normalBots.length > normalHardCap) {
            const removeCount = removeBotsFromPool(normalBots, Math.min(maxDropStep, normalBots.length - normalHardCap));
            changed = removeCount > 0 || changed;
        } else if (normalBots.length > targetNormal) {
            const shouldTrim = force || Math.random() < 0.55;
            if (shouldTrim) {
                const removeCount = removeBotsFromPool(normalBots, Math.min(baseStep, normalBots.length - targetNormal));
                changed = removeCount > 0 || changed;
            }
        } else if (normalBots.length < targetNormal) {
            const addCount = Math.min(maxAddStep, targetNormal - normalBots.length);
            for (let i = 0; i < addCount; i++) {
                this.createBot('normal');
            }
            changed = addCount > 0 || changed;
        }

        const spectatorsNow = this.bots.filter((b) => b.kind === 'spectator');
        if (spectatorsNow.length > spectatorHardCap) {
            const removeCount = removeBotsFromPool(spectatorsNow, Math.min(maxDropStep, spectatorsNow.length - spectatorHardCap));
            changed = removeCount > 0 || changed;
        } else if (spectatorsNow.length > targetSpectators) {
            const removeCount = removeBotsFromPool(spectatorsNow, Math.min(baseStep, spectatorsNow.length - targetSpectators));
            changed = removeCount > 0 || changed;
        } else if (spectatorsNow.length < targetSpectators) {
            const addCount = Math.min(maxAddStep, targetSpectators - spectatorsNow.length);
            for (let i = 0; i < addCount; i++) {
                this.createBot('spectator');
            }
            changed = addCount > 0 || changed;
        }
        return changed;
    }

    getBotSpawnReferenceMass(mode) {
        if (mode === 'player_current') {
            const aliveHumans = [...this.players.values()].filter((p) => this.isPlayerAlive(p));
            if (aliveHumans.length > 0) {
                const total = this.getPlayerMass(aliveHumans[0]);
                if (total > 0) return total * this.botSpawnPlayerMassScale;
            }
        }
        return this.config.startMass * this.botSpawnPlayerMassScale;
    }

    getBotSpawnMass(mode) {
        let resolvedMode = mode || 'varied';
        if (this.moldColonyMode) resolvedMode = 'player_start';

        if (resolvedMode === 'player_start') return this.getBotSpawnReferenceMass('player_start');
        if (resolvedMode === 'player_current') return this.getBotSpawnReferenceMass('player_current');

        const roll = Math.random();
        if (roll < 0.3) return 10 + Math.random() * 20;
        if (roll < 0.6) return 40 + Math.random() * 80;
        if (roll < 0.85) return 120 + Math.random() * 200;
        return 300 + Math.random() * 500;
    }

    ensureBotRoleMix() {
        const normalPool = this.bots.filter((b) => b && b.kind !== 'spectator');
        let normalBots = normalPool.filter((b) => b.role === 'normal');
        let kamikazeBots = normalPool.filter((b) => b.role === 'kamikaze_feeder');
        let mergeBots = normalPool.filter((b) => b.role === 'merge_feeder');

        const maxKamikaze = Math.max(this.botKamikazeMin, Math.floor(normalPool.length * this.botKamikazeMaxShare));
        if (kamikazeBots.length > maxKamikaze) {
            for (const overflow of kamikazeBots.slice(maxKamikaze)) {
                overflow.setRole('normal', this.config);
            }
        }

        const maxMerge = Math.max(this.botMergeFeederMin, Math.floor(normalPool.length * this.botMergeMaxShare));
        if (mergeBots.length > maxMerge) {
            for (const overflow of mergeBots.slice(maxMerge)) {
                overflow.setRole('normal', this.config);
            }
        }

        normalBots = normalPool.filter((b) => b.role === 'normal');
        kamikazeBots = normalPool.filter((b) => b.role === 'kamikaze_feeder');
        mergeBots = normalPool.filter((b) => b.role === 'merge_feeder');

        const taken = new Set();
        const assignRole = (needed, role) => {
            for (let i = 0; i < needed; i++) {
                const candidate = normalBots.find((b) => !taken.has(b.id));
                if (!candidate) break;
                candidate.setRole(role, this.config);
                taken.add(candidate.id);
            }
        };

        assignRole(Math.max(0, this.botKamikazeMin - kamikazeBots.length), 'kamikaze_feeder');
        assignRole(Math.max(0, this.botMergeFeederMin - mergeBots.length), 'merge_feeder');

        const sacrificeEnabled = !!this.sacrificeToPlayerBots;
        const maxSacrificers = sacrificeEnabled
            ? Math.max(0, Math.floor(normalPool.length * this.sacrificeToPlayerBotMaxShare))
            : 0;
        const desiredSacrificers = sacrificeEnabled
            ? Math.min(maxSacrificers, Math.floor(normalPool.length * this.sacrificeToPlayerBotChance))
            : 0;

        if (!sacrificeEnabled || maxSacrificers <= 0) {
            for (const bot of normalPool) bot.forceSacrificeToHuman = false;
            return;
        }

        const sacrificialBots = normalPool.filter((b) => b.forceSacrificeToHuman);
        if (sacrificialBots.length > maxSacrificers) {
            const overflow = sacrificialBots.length - maxSacrificers;
            for (let i = 0; i < overflow; i++) {
                sacrificialBots[i].forceSacrificeToHuman = false;
            }
        }

        const activeSacrificeCount = normalPool.filter((b) => b.forceSacrificeToHuman).length;
        if (activeSacrificeCount >= desiredSacrificers) return;

        const candidates = normalPool.filter((b) => !b.forceSacrificeToHuman && b.role === 'normal');
        for (let i = candidates.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
        }
        const needed = desiredSacrificers - activeSacrificeCount;
        for (let i = 0; i < needed && i < candidates.length; i++) {
            candidates[i].forceSacrificeToHuman = true;
        }
    }

    // Spawn bot with configurable starting mass
    spawnBot(bot, index, isRespawn = false) {
        const id = this.generateId();
        const mass = isRespawn
            ? this.config.startMass
            : (bot.kind === 'spectator'
                ? Math.max(8, this.config.startMass * (0.85 + Math.random() * 0.4))
                : this.getBotSpawnMass(this.botSpawnMassMode));
        const spawnRadius = this.radiusFromMass(mass);
        const spawnPos = this.findSafeSpawnPosition(spawnRadius);
        this.ensurePlayerTeam(bot);
        if (!this.isTeamsMode() && !bot.skin && Math.random() < this.botSkinChance) {
            bot.skin = this.pickRandomSkin();
        }
        if (!this.isTeamsMode() && bot.skin && Math.random() < 0.11) {
            const skinLabel = bot.skin.replace(/\.webp$/i, '');
            if (skinLabel) bot.name = Math.random() < 0.5 ? skinLabel : skinLabel.toLowerCase();
        }
        bot.forceSacrificeToHuman = (
            bot.kind !== 'spectator' &&
            bot.role === 'normal' &&
            this.sacrificeToPlayerBots &&
            Math.random() < this.sacrificeToPlayerBotChance
        );
        if (bot.forceSacrificeToHuman) {
            const normalCount = this.bots.filter((b) => b && b.kind !== 'spectator').length;
            const activeSacrificeCount = this.bots.filter((b) => b && b.kind !== 'spectator' && b.forceSacrificeToHuman).length;
            const maxSacrificeCount = Math.max(0, Math.floor(normalCount * this.sacrificeToPlayerBotMaxShare));
            if (activeSacrificeCount >= maxSacrificeCount) {
                bot.forceSacrificeToHuman = false;
            }
        }

        const cell = new Cell({
            id,
            x: spawnPos.x,
            y: spawnPos.y,
            mass,
            color: this.getPlayerDisplayColor(bot),
            owner: bot,
            name: bot.name
        });
        cell.skin = this.shouldShowSkinForPlayer(bot) ? (bot.skin || null) : null;
        cell.teamId = this.isTeamsMode() ? bot.teamId : null;
        bot.cells = [cell];
        bot.alive = true;
        bot.teamPartnerId = null;
        bot.teamExpiresAt = 0;
        bot.nextChatAt = 0;
        bot.nextTeamSeekAt = 0;
        bot.lastTeamFeedAt = 0;
        bot.lastTeamSplitAt = 0;
        bot.lastCircleSpitAt = 0;
        bot.betrayCooldownUntil = 0;
        bot.retreatLockUntil = 0;
        bot.retreatPolarity = Math.random() < 0.5 ? -1 : 1;
        bot.homeAnchor = {
            x: this.config.mapWidth * (0.14 + Math.random() * 0.72),
            y: this.config.mapHeight * (0.14 + Math.random() * 0.72),
        };
        bot.homeAnchorRefreshAt = Date.now() + 6000 + Math.random() * 9000;
        bot.humanAssistChance = this.botHumanAssistChance;
        bot.maxSupportersPerHuman = this.botMaxSupportersPerHuman;
        bot.spectatorFollowHumanChance = this.spectatorFollowHumanChance;
        bot.likesHelpingHumans = Math.random() < this.botHumanAssistChance;
        bot.prefersHumanSpectate = Math.random() < this.spectatorFollowHumanChance;
        if (typeof bot.applyPersonalityScales === 'function') {
            bot.applyPersonalityScales(this, true);
        }
        bot.target.x = cell.x;
        bot.target.y = cell.y;
        bot.desiredTarget.x = cell.x;
        bot.desiredTarget.y = cell.y;
        this.cells.set(id, cell);
    }

    countBaseFood() {
        let total = 0;
        for (const [, food] of this.food) {
            if (!food) continue;
            if (food.type === 'ejected' || food.type === 'spawner' || food.type === 'bounty') continue;
            total++;
        }
        return total;
    }

    clampWorldToBounds() {
        const minX = 0;
        const minY = 0;
        const maxX = Math.max(1, this.config.mapWidth);
        const maxY = Math.max(1, this.config.mapHeight);
        const clamp = (value, min, max, fallback) => {
            const v = Number(value);
            if (!Number.isFinite(v)) return fallback;
            return Math.max(min, Math.min(max, v));
        };

        for (const [, player] of this.players) {
            if (!player) continue;
            if (!player.target) player.target = { x: maxX / 2, y: maxY / 2 };
            player.target.x = clamp(player.target.x, minX, maxX, maxX / 2);
            player.target.y = clamp(player.target.y, minY, maxY, maxY / 2);
            if (!player.spectateCenter) player.spectateCenter = { x: maxX / 2, y: maxY / 2 };
            player.spectateCenter.x = clamp(player.spectateCenter.x, minX, maxX, maxX / 2);
            player.spectateCenter.y = clamp(player.spectateCenter.y, minY, maxY, maxY / 2);
        }

        for (const bot of this.bots) {
            if (!bot) continue;
            if (!bot.target) bot.target = { x: maxX / 2, y: maxY / 2 };
            if (!bot.desiredTarget) bot.desiredTarget = { x: maxX / 2, y: maxY / 2 };
            bot.target.x = clamp(bot.target.x, minX, maxX, maxX / 2);
            bot.target.y = clamp(bot.target.y, minY, maxY, maxY / 2);
            bot.desiredTarget.x = clamp(bot.desiredTarget.x, minX, maxX, bot.target.x);
            bot.desiredTarget.y = clamp(bot.desiredTarget.y, minY, maxY, bot.target.y);
        }

        for (const [id, food] of this.food) {
            if (!food) continue;
            if (!Number.isFinite(Number(food.x)) || !Number.isFinite(Number(food.y))) {
                this.food.delete(id);
                continue;
            }
            food.x = clamp(food.x, minX, maxX, maxX / 2);
            food.y = clamp(food.y, minY, maxY, maxY / 2);
        }

        for (const [id, virus] of this.viruses) {
            if (!virus) continue;
            if (!Number.isFinite(Number(virus.x)) || !Number.isFinite(Number(virus.y))) {
                this.viruses.delete(id);
                continue;
            }
            const r = this.radiusFromMass(virus.mass || this.virusBaseMass || 100);
            const virusMaxX = Math.max(r, maxX - r);
            const virusMaxY = Math.max(r, maxY - r);
            virus.x = clamp(virus.x, r, virusMaxX, maxX / 2);
            virus.y = clamp(virus.y, r, virusMaxY, maxY / 2);
            if (!Number.isFinite(Number(virus.vx))) virus.vx = 0;
            if (!Number.isFinite(Number(virus.vy))) virus.vy = 0;
        }

        for (const [id, cell] of this.cells) {
            if (!cell) continue;
            if (!Number.isFinite(Number(cell.x)) || !Number.isFinite(Number(cell.y))) {
                if (cell.owner && Array.isArray(cell.owner.cells)) {
                    const idx = cell.owner.cells.indexOf(cell);
                    if (idx >= 0) cell.owner.cells.splice(idx, 1);
                }
                this.cells.delete(id);
                continue;
            }
            const r = cell.radius();
            const cellMaxX = Math.max(r, maxX - r);
            const cellMaxY = Math.max(r, maxY - r);
            cell.x = clamp(cell.x, r, cellMaxX, maxX / 2);
            cell.y = clamp(cell.y, r, cellMaxY, maxY / 2);
        }
    }

    spawnFood() {
        const id = this.generateId();
        const useExperimentalPellets = this.useExperimentalMechanics();
        const roll = Math.random();
        const isGolden = useExperimentalPellets && roll < this.goldenFoodChance;
        const isPlasma = useExperimentalPellets && !isGolden && roll < (this.goldenFoodChance + this.plasmaFoodChance);
        let mass = this.baseFoodMass;
        let color = this.randomColor();
        let type = 'food';
        if (isGolden) {
            mass = this.goldenFoodMass;
            color = '#ffd34a';
            type = 'golden';
        } else if (isPlasma) {
            mass = this.plasmaFoodMass;
            color = '#4bd4ff';
            type = 'plasma';
        }
        const food = {
            id,
            x: Math.random() * this.config.mapWidth,
            y: Math.random() * this.config.mapHeight,
            mass,
            color,
            type,
        };
        this.food.set(id, food);
        return food;
    }

    spawnVirus(x, y, options = {}) {
        const id = this.generateId();
        const allowSpawner = this.canSpawnSpawnerViruses();
        const forceSpawner = this.forceAllSpawnerViruses();
        const kind = options.kind
            || (forceSpawner
                ? 'spawner'
                : (allowSpawner && Math.random() < this.spawnerVirusChance ? 'spawner' : 'normal'));
        const virus = {
            id,
            x: typeof x === 'number' ? x : 100 + Math.random() * (this.config.mapWidth - 200),
            y: typeof y === 'number' ? y : 100 + Math.random() * (this.config.mapHeight - 200),
            mass: typeof options.mass === 'number' ? options.mass : this.virusBaseMass,
            type: 'virus',
            kind,
            feedCount: typeof options.feedCount === 'number' ? options.feedCount : 0,
            lastFeedAngle: typeof options.lastFeedAngle === 'number' ? options.lastFeedAngle : Math.random() * Math.PI * 2,
            vx: typeof options.vx === 'number' ? options.vx : 0,
            vy: typeof options.vy === 'number' ? options.vy : 0,
            spawnerStoredMass: typeof options.spawnerStoredMass === 'number' ? options.spawnerStoredMass : 0,
            spawnerDispenseAccumulator: typeof options.spawnerDispenseAccumulator === 'number' ? options.spawnerDispenseAccumulator : 0,
            nextPassiveAt: typeof options.nextPassiveAt === 'number' ? options.nextPassiveAt : Date.now() + 1000,
            ringAngle: typeof options.ringAngle === 'number' ? options.ringAngle : (Math.random() * Math.PI * 2),
        };
        this.viruses.set(id, virus);
        return virus;
    }

    getMaxCellsForPlayer(player) {
        const hardMax = Math.max(1, Math.floor(this.config.maxCells));
        const playerCap = typeof player.maxCellsCap === 'number'
            ? Math.max(1, Math.floor(player.maxCellsCap))
            : hardMax;
        return Math.min(hardMax, playerCap);
    }

    getCircleOverlapArea(r1, r2, d) {
        const radiusA = Math.max(0, Number(r1) || 0);
        const radiusB = Math.max(0, Number(r2) || 0);
        const dist = Math.max(0, Number(d) || 0);
        if (radiusA <= 0 || radiusB <= 0) return 0;
        if (dist >= radiusA + radiusB) return 0;
        if (dist <= Math.abs(radiusA - radiusB)) {
            const inner = Math.min(radiusA, radiusB);
            return Math.PI * inner * inner;
        }
        const safeA = Math.max(-1, Math.min(1, (dist * dist + radiusA * radiusA - radiusB * radiusB) / (2 * dist * radiusA)));
        const safeB = Math.max(-1, Math.min(1, (dist * dist + radiusB * radiusB - radiusA * radiusA) / (2 * dist * radiusB)));
        const alpha = 2 * Math.acos(safeA);
        const beta = 2 * Math.acos(safeB);
        const areaA = 0.5 * radiusA * radiusA * (alpha - Math.sin(alpha));
        const areaB = 0.5 * radiusB * radiusB * (beta - Math.sin(beta));
        return areaA + areaB;
    }

    getEatCoverageRatio(eaterRadius, preyRadius, dist) {
        const overlapArea = this.getCircleOverlapArea(eaterRadius, preyRadius, dist);
        const preyArea = Math.PI * Math.max(1e-6, preyRadius * preyRadius);
        return overlapArea / preyArea;
    }

    sampleMapValues(sourceMap, maxItems, filterFn) {
        const sample = [];
        if (!maxItems || maxItems <= 0) return sample;

        let seen = 0;
        for (const [, value] of sourceMap) {
            if (filterFn && !filterFn(value)) continue;
            seen++;
            if (sample.length < maxItems) {
                sample.push(value);
                continue;
            }
            const replaceIndex = Math.floor(Math.random() * seen);
            if (replaceIndex < maxItems) sample[replaceIndex] = value;
        }
        return sample;
    }

    resolvePlayerById(id) {
        if (typeof id !== 'number') return null;

        for (const bot of this.bots) {
            if (bot.id === id) return bot;
        }
        for (const [, player] of this.players) {
            if (player.id === id) return player;
        }
        return null;
    }

    isPlayerAlive(player) {
        return !!(player && player.alive && player.cells && player.cells.length > 0);
    }

    getPlayerMass(player) {
        if (!this.isPlayerAlive(player)) return 0;
        let total = 0;
        for (const c of player.cells) total += c.mass;
        return total;
    }

    getPlayerCenter(player) {
        if (!this.isPlayerAlive(player)) return null;
        let totalMass = 0;
        let cx = 0;
        let cy = 0;
        for (const c of player.cells) {
            cx += c.x * c.mass;
            cy += c.y * c.mass;
            totalMass += c.mass;
        }
        if (totalMass <= 0) return null;
        return { x: cx / totalMass, y: cy / totalMass };
    }

    canBotSupportHumanTarget(humanId, helperMass = 0) {
        const human = this.resolvePlayerById(humanId);
        if (!human || human.isBot || !this.isPlayerAlive(human)) return false;

        const humanMass = this.getPlayerMass(human);
        const humanPos = this.getPlayerCenter(human);
        if (!humanPos || humanMass <= 0) return false;

        const earlyHelpCap = Math.max(this.config.startMass * 1.9, 42);
        if (humanMass > Math.max(earlyHelpCap, helperMass * 1.15)) return false;

        const checkRangeSq = 720 * 720;
        let contestedCount = 0;
        for (const [, cell] of this.cells) {
            if (!cell || cell.owner === human) continue;
            const dx = cell.x - humanPos.x;
            const dy = cell.y - humanPos.y;
            const distSq = dx * dx + dy * dy;
            if (distSq > checkRangeSq) continue;

            const ratio = cell.mass / Math.max(humanMass, 1);
            if (ratio > 0.5 && ratio < 2.1) {
                contestedCount++;
                if (contestedCount >= 1) return false;
            }
        }
        return contestedCount === 0;
    }

    getLargestCell(player, minMass = this.ejectMinCellMass) {
        if (!player || !player.cells || player.cells.length === 0) return null;
        let best = null;
        for (const c of player.cells) {
            if (!best || c.mass > best.mass) best = c;
        }
        if (!best || best.mass < minMass) return null;
        return best;
    }

    spawnEjectedMassFromCell(cell, angle, speed = 20) {
        if (this.food.size >= this.maxFoodEntities) return false;

        const id = this.generateId();
        const ejected = {
            id,
            x: cell.x + Math.cos(angle) * cell.radius(),
            y: cell.y + Math.sin(angle) * cell.radius(),
            mass: this.ejectedPelletMass,
            color: cell.color,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            type: 'ejected',
            bornAt: Date.now(),
            ownerId: cell.owner ? cell.owner.id : null,
        };
        this.food.set(id, ejected);
        return true;
    }

    ejectMassTowardTarget(player, target, shots = 1) {
        if (!target || !Number.isFinite(target.x) || !Number.isFinite(target.y)) return 0;

        let done = 0;
        for (let i = 0; i < shots; i++) {
            const donor = this.getLargestCell(player, this.ejectMinCellMass);
            if (!donor) break;

            const angle = Math.atan2(target.y - donor.y, target.x - donor.x);
            donor.mass -= this.ejectedPelletCost;
            if (!this.spawnEjectedMassFromCell(donor, angle, 20)) {
                donor.mass += this.ejectedPelletCost;
                break;
            }
            done++;
        }
        return done;
    }

    ejectMassInCircle(player, pellets) {
        const count = Math.max(0, Math.floor(pellets));
        if (count === 0) return 0;

        let done = 0;
        const baseAngle = Math.random() * Math.PI * 2;
        for (let i = 0; i < count; i++) {
            const donor = this.getLargestCell(player, this.ejectMinCellMass);
            if (!donor) break;

            const angle = baseAngle + (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.12;
            donor.mass -= this.ejectedPelletCost;
            if (!this.spawnEjectedMassFromCell(donor, angle, 16 + Math.random() * 6)) {
                donor.mass += this.ejectedPelletCost;
                break;
            }
            done++;
        }
        return done;
    }

    clearBotTeam(bot) {
        bot.teamPartnerId = null;
        bot.teamExpiresAt = 0;
    }

    refreshBotTeam(bot, now, aliveBots, aliveHumans, humanSupportLoad = new Map()) {
        if (this.isTeamsMode()) {
            this.clearBotTeam(bot);
            return null;
        }
        if (!this.enableBotTeaming && bot.role !== 'spectator_support') {
            this.clearBotTeam(bot);
            return null;
        }
        if (!this.isPlayerAlive(bot)) {
            this.clearBotTeam(bot);
            return null;
        }

        if (bot.teamPartnerId) {
            const partner = this.resolvePlayerById(bot.teamPartnerId);
            if (this.isPlayerAlive(partner)) {
                const stickyPair = !!(bot.isBot && partner.isBot && this.botTeamsStickUntilDeath);
                if (stickyPair) {
                    return partner;
                }
                if ((bot.teamExpiresAt || 0) <= now) {
                    this.clearBotTeam(bot);
                } else {
                    const myPos = this.getPlayerCenter(bot);
                    const partnerPos = this.getPlayerCenter(partner);
                    if (myPos && partnerPos) {
                        const dx = myPos.x - partnerPos.x;
                        const dy = myPos.y - partnerPos.y;
                        const distSq = dx * dx + dy * dy;
                        if (distSq <= (this.botTeamMaxDistance * 2.4) ** 2) {
                            return partner;
                        }
                    }
                }
            }
            this.clearBotTeam(bot);
        }

        if (now < (bot.nextTeamSeekAt || 0)) return null;
        bot.nextTeamSeekAt = now + this.botTeamSeekIntervalMs * (0.7 + Math.random() * 0.8);
        if (Math.random() > this.botTeamAssignChance) return null;

        const myPos = this.getPlayerCenter(bot);
        const myMass = this.getPlayerMass(bot);
        if (!myPos || myMass <= 0) return null;
        const teamsMode = this.isTeamsMode();
        const allowCrossTeam = teamsMode && Math.random() < this.crossTeamTeamingChance;

        let candidates = [];
        const affectionBias = Math.max(0.25, Math.min(2.2, bot.affection || 0.9));
        const canSeekHuman = !!bot.likesHelpingHumans
            && Math.random() < Math.min(1, this.botHumanAssistChance * (0.55 + affectionBias * 0.36));
        const preferHuman = canSeekHuman && aliveHumans.length > 0 && Math.random() < this.botTeamWithHumanChance;
        if (preferHuman) {
            candidates = aliveHumans.filter((human) => {
                if (teamsMode && human.teamId !== bot.teamId && !allowCrossTeam) return false;
                const currentLoad = humanSupportLoad.get(human.id) || 0;
                return currentLoad < this.botMaxSupportersPerHuman || human.id === bot.recentBenefactorId;
            });
        } else {
            candidates = aliveBots.filter((b) => {
                if (b === bot) return false;
                if (teamsMode && b.teamId !== bot.teamId && !allowCrossTeam) return false;
                return !b.teamPartnerId || b.teamExpiresAt <= now;
            });
        }

        let best = null;
        let bestScore = -Infinity;
        const hasRecentHelp = bot.recentBenefactorId && bot.recentHelpUntil > now;
        for (const c of candidates) {
            if (!this.isPlayerAlive(c)) continue;
            if (teamsMode && c.teamId !== bot.teamId && !allowCrossTeam) continue;

            const cPos = this.getPlayerCenter(c);
            if (!cPos) continue;
            const dx = cPos.x - myPos.x;
            const dy = cPos.y - myPos.y;
            const distSq = dx * dx + dy * dy;
            if (distSq > this.botTeamMaxDistance * this.botTeamMaxDistance) continue;

            const cMass = this.getPlayerMass(c);
            const ratio = cMass > 0 ? myMass / cMass : 1;
            if (ratio < 0.08 || ratio > 6.5) continue;

            let score = -Math.sqrt(distSq) + Math.random() * 80;
            if (ratio < 0.55) score += 60; // tiny helper preferring bigger partner
            if (ratio > 2.5) score += 25;  // bigger partner accepting escorts
            if (teamsMode && c.teamId !== bot.teamId) score -= 380;
            if (hasRecentHelp && c.id === bot.recentBenefactorId) {
                const gullibleBoost = (this.config.botGullibleTeamBonus ?? 0.28) * (bot.gullibility ?? 0.2);
                score += 240 + gullibleBoost * 420 + affectionBias * 75;
            }
            if (score > bestScore) {
                bestScore = score;
                best = c;
            }
        }

        if (!best) return null;

        const stickyPair = !!(bot.isBot && best.isBot && this.botTeamsStickUntilDeath);
        let expiresAt = stickyPair
            ? now + (1000 * 60 * 60 * 24 * 365 * 5)
            : now + this.botTeamDurationMs * (0.7 + Math.random() * 0.8);
        if (hasRecentHelp && best.id === bot.recentBenefactorId) {
            const memoryMs = this.config.botHelpMemoryMs ?? 26000;
            expiresAt += Math.round(memoryMs * (bot.gullibility ?? 0.2) * 0.55);
        }
        bot.teamPartnerId = best.id;
        bot.teamExpiresAt = expiresAt;
        if (!best.isBot) {
            humanSupportLoad.set(best.id, (humanSupportLoad.get(best.id) || 0) + 1);
        }

        if (best.isBot && (!best.teamPartnerId || best.teamExpiresAt <= now) && Math.random() < 0.65) {
            best.teamPartnerId = bot.id;
            best.teamExpiresAt = expiresAt;
            best.nextTeamSeekAt = now + this.botTeamSeekIntervalMs;
        }

        return best;
    }

    applyBotTeamBehavior(bot, now) {
        if (this.isTeamsMode()) {
            this.clearBotTeam(bot);
            return;
        }
        if (!this.enableBotTeaming && bot.role !== 'spectator_support') {
            this.clearBotTeam(bot);
            return;
        }
        if (!bot.teamPartnerId) return;

        const partner = this.resolvePlayerById(bot.teamPartnerId);
        if (!this.isPlayerAlive(partner)) {
            this.clearBotTeam(bot);
            return;
        }
        const stickyPair = !!(bot.isBot && partner.isBot && this.botTeamsStickUntilDeath);
        if (!stickyPair && (bot.teamExpiresAt || 0) <= now) {
            this.clearBotTeam(bot);
            return;
        }
        if (this.isTeamsMode() && partner.teamId !== bot.teamId && Math.random() > this.crossTeamTeamingChance) {
            this.clearBotTeam(bot);
            return;
        }

        const myPos = this.getPlayerCenter(bot);
        const partnerPos = this.getPlayerCenter(partner);
        if (!myPos || !partnerPos) {
            this.clearBotTeam(bot);
            return;
        }

        const dx = partnerPos.x - myPos.x;
        const dy = partnerPos.y - myPos.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (!stickyPair && dist > this.botTeamMaxDistance * 2.4) {
            this.clearBotTeam(bot);
            return;
        }

        if (dist > 240) {
            bot.desiredTarget.x = partnerPos.x + (Math.random() - 0.5) * 70;
            bot.desiredTarget.y = partnerPos.y + (Math.random() - 0.5) * 70;
            bot.targetLerp = Math.max(bot.targetLerp, 0.09);
        }

        const botMass = this.getPlayerMass(bot);
        const partnerMass = this.getPlayerMass(partner);
        const allowHumanSupport = partner.isBot
            ? true
            : this.canBotSupportHumanTarget(partner.id, botMass);

        if (allowHumanSupport && now - (bot.lastTeamFeedAt || 0) >= this.botTeamFeedCooldownMs) {
            const affectionBias = Math.max(0.25, Math.min(2.2, bot.affection || 0.9));
            const feedChance = Math.min(0.98, this.botTeamFeedChance * (0.7 + affectionBias * 0.24));
            if (botMass >= this.botTeamFeedMinMass && Math.random() < feedChance) {
                const partnerNeedsFood = partner.isBot
                    ? (partnerMass < botMass * 1.3 || partnerMass > botMass * 1.55)
                    : partnerMass < Math.min(botMass * 0.78, this.config.startMass * 2.2);
                if (partnerNeedsFood) {
                    const shots = partner.isBot
                        ? (partnerMass > botMass * 1.55 ? 1 : (Math.random() < 0.4 ? 2 : 1))
                        : 1;
                    const fed = this.ejectMassTowardTarget(bot, partnerPos, shots);
                    if (fed > 0) {
                        bot.lastTeamFeedAt = now;
                    }
                }
            }
        }

        if (partner.isBot && now - (bot.lastTeamSplitAt || 0) >= this.botTeamSplitCooldownMs) {
            const canSplit = bot.cells.length < this.getMaxCellsForPlayer(bot);
            if (canSplit && botMass >= this.botTeamSplitMinMass && dist > 220 && Math.random() < this.botTeamSplitChance) {
                bot.target.x = partnerPos.x;
                bot.target.y = partnerPos.y;
                bot.desiredTarget.x = partnerPos.x;
                bot.desiredTarget.y = partnerPos.y;
                this.splitPlayer(bot);
                bot.lastTeamSplitAt = now;
            }
        }

        if (
            partner.isBot &&
            (bot.betrayCooldownUntil || 0) <= now &&
            dist < Math.max(230, this.botTeamMaxDistance * 0.33)
        ) {
            const betrayalChance = Math.max(0, Math.min(
                0.82,
                (bot.betrayChance || 0.03) * (0.35 + (bot.opportunism || 0.75) * 0.45)
            ));
            if (botMass > partnerMass * 1.32 && Math.random() < betrayalChance) {
                this.clearBotTeam(bot);
                if (partner.teamPartnerId === bot.id && Math.random() < 0.86) {
                    this.clearBotTeam(partner);
                }
                if (Math.random() < 0.5) {
                    this.emitBotChat(bot, 'sorry not sorry');
                }
                bot.betrayCooldownUntil = now + 7000 + Math.random() * 10000;
                bot.desiredTarget.x = partnerPos.x + (Math.random() - 0.5) * 40;
                bot.desiredTarget.y = partnerPos.y + (Math.random() - 0.5) * 40;
                bot.targetLerp = Math.max(bot.targetLerp, 0.16);
            }
        }
    }

    maybeTriggerBotCircleSpit(bot, now) {
        if (!this.isPlayerAlive(bot)) return;
        if (now - (bot.lastCircleSpitAt || 0) < this.botCircleSpitCooldownMs) return;
        if (Math.random() > this.botCircleSpitChancePerTick) return;

        const mass = this.getPlayerMass(bot);
        if (mass < this.botCircleSpitMinMass) return;

        const minPellets = Math.max(1, this.botCircleSpitPelletsMin);
        const maxPellets = Math.max(minPellets, this.botCircleSpitPelletsMax);
        const pellets = minPellets + Math.floor(Math.random() * (maxPellets - minPellets + 1));
        const fired = this.ejectMassInCircle(bot, pellets);
        if (fired > 0) {
            bot.lastCircleSpitAt = now;
        }
    }

    emitBotChat(bot, text, options = {}) {
        if (!this.enableBotChat) return;
        if (!bot || !bot.isBot || !text) return;
        const now = Date.now();
        const force = !!options.force;
        const cooldownMs = Math.max(250, Math.min(20000, Math.floor(options.cooldownMs ?? 2200)));
        if (!force && now < (bot.nextChatAt || 0)) return;
        const cleaned = String(text).replace(/\s+/g, ' ').trim().slice(0, 90);
        if (!cleaned) return;
        bot.nextChatAt = now + Math.floor(cooldownMs * (0.8 + Math.random() * 0.7));
        this.chatLog.push({
            id: this.chatSeq++,
            name: (bot.name || `Bot${bot.id}`).slice(0, 24),
            text: cleaned,
            at: now,
        });
        if (this.chatLog.length > this.botChatMaxBacklog) {
            this.chatLog.splice(0, this.chatLog.length - this.botChatMaxBacklog);
        }
    }

    maybeEmitAmbientBotChat(now, aliveBots, alivePlayers) {
        if (!this.enableBotChat) return;
        if (!aliveBots || aliveBots.length === 0) return;
        const tickSec = 1 / Math.max(1, this.config.tickRate || 1);
        if (Math.random() > this.botChatChancePerSecond * tickSec) return;

        const bot = aliveBots[Math.floor(Math.random() * aliveBots.length)];
        if (!bot) return;
        const myMass = this.getPlayerMass(bot);
        const myPos = this.getPlayerCenter(bot);
        if (!myPos || myMass <= 0) return;

        let nearestBigger = null;
        let nearestBiggerDistSq = Infinity;
        for (const p of alivePlayers || []) {
            if (!p || p.id === bot.id || !p.pos || p.mass <= 0) continue;
            if (p.mass <= myMass * this.cellEatMassRatio) continue;
            const dx = p.pos.x - myPos.x;
            const dy = p.pos.y - myPos.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < nearestBiggerDistSq) {
                nearestBiggerDistSq = distSq;
                nearestBigger = p;
            }
        }

        let line = null;
        if (bot.teamPartnerId && Math.random() < 0.2) {
            line = Math.random() < 0.5 ? 'team?' : 'hold this side';
        } else if (nearestBigger && Math.sqrt(nearestBiggerDistSq) < 650) {
            const targetName = (nearestBigger.name || `P${nearestBigger.id}` || 'you').slice(0, 18);
            line = Math.random() < 0.55 ? `ugh i hate you ${targetName}` : `run run ${targetName} is huge`;
        } else if (myMass < this.config.startMass * 2.2) {
            line = Math.random() < 0.5 ? 'need food...' : 'tiny life';
        } else if (myMass > this.config.startMass * 22 && Math.random() < 0.45) {
            line = Math.random() < 0.5 ? 'hunt the big one' : 'corner time';
        } else {
            const chatter = [
                'split now?',
                'no panic',
                'flanking left',
                'baiting...',
                'watch virus',
                'who fed me',
                'eco is wild',
            ];
            line = chatter[Math.floor(Math.random() * chatter.length)];
        }
        this.emitBotChat(bot, line, { cooldownMs: 2500 });
    }

    updateViruses() {
        for (const [, virus] of this.viruses) {
            if (!virus.vx && !virus.vy) continue;

            virus.x += virus.vx;
            virus.y += virus.vy;
            virus.vx *= this.virusShotFriction;
            virus.vy *= this.virusShotFriction;

            if (Math.abs(virus.vx) < 0.05) virus.vx = 0;
            if (Math.abs(virus.vy) < 0.05) virus.vy = 0;

            const r = this.radiusFromMass(virus.mass);
            if (virus.x < r || virus.x > this.config.mapWidth - r) {
                virus.x = Math.max(r, Math.min(this.config.mapWidth - r, virus.x));
                virus.vx = 0;
            }
            if (virus.y < r || virus.y > this.config.mapHeight - r) {
                virus.y = Math.max(r, Math.min(this.config.mapHeight - r, virus.y));
                virus.vy = 0;
            }
        }
    }

    feedVirus(virus, angle) {
        virus.feedCount = (virus.feedCount || 0) + 1;
        virus.mass += this.virusFeedMassGain;
        if (typeof angle === 'number' && Number.isFinite(angle)) {
            virus.lastFeedAngle = angle;
        }

        if (virus.kind === 'spawner') {
            virus.spawnerStoredMass = (virus.spawnerStoredMass || 0) + this.virusFeedMassGain;
            return;
        }

        if (virus.mass < this.virusSplitMass) return;

        if (this.viruses.size < this.maxVirusEntities) {
            const launchAngle = typeof virus.lastFeedAngle === 'number'
                ? virus.lastFeedAngle
                : Math.random() * Math.PI * 2;
            const launchRadius = this.radiusFromMass(this.virusBaseMass);
            const launchX = virus.x + Math.cos(launchAngle) * launchRadius * 1.8;
            const launchY = virus.y + Math.sin(launchAngle) * launchRadius * 1.8;
            this.spawnVirus(
                Math.max(launchRadius, Math.min(this.config.mapWidth - launchRadius, launchX)),
                Math.max(launchRadius, Math.min(this.config.mapHeight - launchRadius, launchY)),
                {
                    mass: this.virusBaseMass,
                    vx: Math.cos(launchAngle) * this.virusShotSpeed,
                    vy: Math.sin(launchAngle) * this.virusShotSpeed,
                    lastFeedAngle: launchAngle,
                }
            );
        }

        virus.mass = this.virusBaseMass;
        virus.feedCount = 0;
    }

    spawnLooseFoodRing(x, y, totalMass, color = '#6fd06a') {
        let remaining = Math.max(1, Math.floor(totalMass));
        let spawned = 0;
        while (remaining > 0 && this.food.size < this.maxFoodEntities) {
            const id = this.generateId();
            const pelletMass = 1;
            const angle = Math.random() * Math.PI * 2;
            const speed = 5 + Math.random() * 11;
            this.food.set(id, {
                id,
                x: x + Math.cos(angle) * 20,
                y: y + Math.sin(angle) * 20,
                mass: pelletMass,
                color,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                type: 'food'
            });
            remaining -= pelletMass;
            spawned += pelletMass;
        }
        return spawned;
    }

    updateSpawnerViruses() {
        if (this.viruses.size === 0) return;
        const now = Date.now();
        const tickDelta = 1 / Math.max(1, this.config.tickRate || 1);
        const twoPi = Math.PI * 2;
        for (const [, virus] of this.viruses) {
            if (virus.kind !== 'spawner') continue;
            const radius = this.radiusFromMass(Math.max(virus.mass, this.virusBaseMass));
            if (typeof virus.ringAngle !== 'number') virus.ringAngle = Math.random() * twoPi;

            const emitPellet = (pelletMass, speedRange = [3.5, 7], fixedAngle = null, allowReplace = false, pelletType = 'food') => {
                if (this.food.size >= this.maxFoodEntities) {
                    if (!allowReplace) return false;
                    let removed = false;
                    for (const [fid, existing] of this.food) {
                        if (existing && existing.type !== 'ejected' && existing.type !== 'spawner') {
                            this.food.delete(fid);
                            removed = true;
                            break;
                        }
                    }
                    if (!removed && this.food.size >= this.maxFoodEntities) return false;
                }
                const id = this.generateId();
                const angle = typeof fixedAngle === 'number'
                    ? fixedAngle
                    : (Math.random() * twoPi);
                const speed = speedRange[0] + Math.random() * Math.max(0.01, speedRange[1] - speedRange[0]);
                this.food.set(id, {
                    id,
                    x: virus.x + Math.cos(angle) * radius * 1.14,
                    y: virus.y + Math.sin(angle) * radius * 1.14,
                    mass: pelletMass,
                    color: '#cf6666',
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    drag: 0.9,
                    type: pelletType
                });
                virus.ringAngle = (angle + 0.52) % twoPi;
                return true;
            };

            const passiveRateBase = this.isTeamsMode()
                ? Math.max(0.9, this.spawnerPassiveRatePerSec || 0)
                : this.spawnerPassiveRatePerSec;
            if (passiveRateBase > 0 && now >= (virus.nextPassiveAt || 0)) {
                const sizeRatio = Math.max(1, virus.mass / Math.max(1, this.virusBaseMass));
                const passiveRate = passiveRateBase * Math.sqrt(sizeRatio);
                const passiveIntervalMs = Math.max(780, Math.min(1300, 1000 / Math.max(0.0001, passiveRate)));
                if (emitPellet(this.spawnerPelletMass, [7.5, 12.5], null, true, 'spawner')) {
                    virus.nextPassiveAt = now + passiveIntervalMs;
                } else {
                    virus.nextPassiveAt = now + Math.min(1000, passiveIntervalMs);
                }
            }

            const stored = virus.spawnerStoredMass || 0;
            if (stored <= 0) {
                virus.mass = Math.max(this.virusBaseMass, virus.mass || this.virusBaseMass);
                continue;
            }
            if (this.food.size >= this.maxFoodEntities) continue;

            const excessMass = Math.max(0, virus.mass - this.virusBaseMass);
            const sizeBoost = 1 + (excessMass / Math.max(1, this.virusBaseMass));
            // Fed spawners should dump stored mass quickly.
            const drainRate = this.spawnerDispenseRate * (2.8 + sizeBoost * 2.4);
            virus.spawnerDispenseAccumulator = (virus.spawnerDispenseAccumulator || 0) + drainRate * tickDelta;
            const canFire = Math.floor(virus.spawnerDispenseAccumulator);
            if (canFire <= 0) continue;

            let shots = 0;
            const maxShotsPerTick = Math.min(36, Math.max(8, Math.floor(5 + sizeBoost * 8.5)));
            const maxShots = Math.min(canFire, Math.ceil(stored / this.spawnerPelletMass), maxShotsPerTick);
            for (let i = 0; i < maxShots; i++) {
                const pelletMass = this.spawnerPelletMass;
                if (!emitPellet(pelletMass, [10.5, 16.5], null, false, 'spawner')) break;
                shots++;
            }

            if (shots > 0) {
                virus.spawnerDispenseAccumulator -= shots;
                const massSpent = shots * this.spawnerPelletMass;
                virus.spawnerStoredMass = Math.max(0, stored - massSpent);
                virus.mass = Math.max(this.virusBaseMass, virus.mass - massSpent);
                if (virus.spawnerStoredMass <= 0) {
                    virus.feedCount = 0;
                    virus.mass = this.virusBaseMass;
                }
            }
        }
    }

    handleVirusFeeding() {
        if (this.viruses.size === 0) return;

        const toDelete = [];
        for (const [foodId, food] of this.food) {
            if (food.type !== 'ejected') continue;

            for (const [, virus] of this.viruses) {
                const dx = food.x - virus.x;
                const dy = food.y - virus.y;
                const virusRadius = this.radiusFromMass(virus.mass);
                const catchRadius = virusRadius + 12;
                if (dx * dx + dy * dy > catchRadius * catchRadius) continue;

                const angle = Math.atan2(food.vy || dy, food.vx || dx);
                this.feedVirus(virus, angle);
                toDelete.push(foodId);
                break;
            }
        }
        for (const id of toDelete) this.food.delete(id);
    }

    _forEachPlayer(fn) {
        for (const [, p] of this.players) fn(p);
        for (const b of this.bots) fn(b);
    }

    rebuildFoodSpatialHash() {
        this.foodSpatialHash.clear();
        const cellSize = this.foodHashCellSize;
        for (const [, f] of this.food) {
            const gx = Math.floor(f.x / cellSize);
            const gy = Math.floor(f.y / cellSize);
            const key = ((gx + 32768) << 16) | ((gy + 32768) & 0xFFFF);
            let bucket = this.foodSpatialHash.get(key);
            if (!bucket) {
                bucket = [];
                this.foodSpatialHash.set(key, bucket);
            }
            bucket.push(f);
        }
    }

    rebuildCellSpatialHash() {
        this.cellSpatialHash.clear();
        const cellSize = this.cellHashCellSize;
        for (const [, c] of this.cells) {
            const gx = Math.floor(c.x / cellSize);
            const gy = Math.floor(c.y / cellSize);
            const key = ((gx + 32768) << 16) | ((gy + 32768) & 0xFFFF);
            let bucket = this.cellSpatialHash.get(key);
            if (!bucket) {
                bucket = [];
                this.cellSpatialHash.set(key, bucket);
            }
            bucket.push(c);
        }
    }

    forEachNearbyFood(x, y, radius, iteratee) {
        const cellSize = this.foodHashCellSize;
        const minGX = Math.floor((x - radius) / cellSize);
        const maxGX = Math.floor((x + radius) / cellSize);
        const minGY = Math.floor((y - radius) / cellSize);
        const maxGY = Math.floor((y + radius) / cellSize);

        for (let gx = minGX; gx <= maxGX; gx++) {
            for (let gy = minGY; gy <= maxGY; gy++) {
                const key = ((gx + 32768) << 16) | ((gy + 32768) & 0xFFFF);
                const bucket = this.foodSpatialHash.get(key);
                if (!bucket) continue;
                for (const food of bucket) {
                    iteratee(food);
                }
            }
        }
    }

    forEachNearbyCell(x, y, radius, iteratee) {
        const cellSize = this.cellHashCellSize;
        const minGX = Math.floor((x - radius) / cellSize);
        const maxGX = Math.floor((x + radius) / cellSize);
        const minGY = Math.floor((y - radius) / cellSize);
        const maxGY = Math.floor((y + radius) / cellSize);

        for (let gx = minGX; gx <= maxGX; gx++) {
            for (let gy = minGY; gy <= maxGY; gy++) {
                const key = ((gx + 32768) << 16) | ((gy + 32768) & 0xFFFF);
                const bucket = this.cellSpatialHash.get(key);
                if (!bucket) continue;
                for (const cell of bucket) {
                    iteratee(cell);
                }
            }
        }
    }

    randomColor() {
        const colors = [
            '#FF3333', '#33FF33', '#3333FF', '#FFFF33', '#FF33FF',
            '#33FFFF', '#FF8833', '#8833FF', '#33FF88', '#FF3388',
            '#88FF33', '#3388FF', '#FF6666', '#66FF66', '#6666FF',
            '#FFAA00', '#AA00FF', '#00FFAA', '#FF0066', '#0066FF'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    getRandomSpawnPosition(radius = 0) {
        const margin = Math.max(120, Math.ceil(radius + 24));
        const maxX = Math.max(margin, this.config.mapWidth - margin);
        const maxY = Math.max(margin, this.config.mapHeight - margin);
        const x = margin + Math.random() * Math.max(0, maxX - margin);
        const y = margin + Math.random() * Math.max(0, maxY - margin);
        return { x, y };
    }

    getSpawnClearance(x, y, radius) {
        let minClearance = Infinity;
        const checkRadius = radius + 200;

        if (this.cellSpatialHash.size > 0) {
            this.forEachNearbyCell(x, y, checkRadius, (cell) => {
                const dx = x - cell.x;
                const dy = y - cell.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const clearance = dist - (radius + cell.radius());
                if (clearance < minClearance) minClearance = clearance;
            });
        } else {
            for (const [, cell] of this.cells) {
                const dx = x - cell.x;
                const dy = y - cell.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const clearance = dist - (radius + cell.radius());
                if (clearance < minClearance) minClearance = clearance;
            }
        }

        for (const [, virus] of this.viruses) {
            const vr = this.radiusFromMass(virus.mass);
            const dx = x - virus.x;
            const dy = y - virus.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const clearance = dist - (radius + vr);
            if (clearance < minClearance) minClearance = clearance;
        }
        return minClearance;
    }

    isSpawnPositionSafe(x, y, radius) {
        const buffer = Math.max(8, radius * 0.08);
        const checkRadius = radius + 200 + buffer;

        if (this.cellSpatialHash.size > 0) {
            let safe = true;
            this.forEachNearbyCell(x, y, checkRadius, (cell) => {
                const required = radius + cell.radius() + buffer;
                const dx = x - cell.x;
                const dy = y - cell.y;
                if (dx * dx + dy * dy < required * required) {
                    safe = false;
                }
            });
            if (!safe) return false;
        } else {
            for (const [, cell] of this.cells) {
                const required = radius + cell.radius() + buffer;
                const dx = x - cell.x;
                const dy = y - cell.y;
                if (dx * dx + dy * dy < required * required) return false;
            }
        }

        for (const [, virus] of this.viruses) {
            const vr = this.radiusFromMass(virus.mass);
            const required = radius + vr + buffer;
            const dx = x - virus.x;
            const dy = y - virus.y;
            if (dx * dx + dy * dy < required * required) return false;
        }
        return true;
    }

    findSafeSpawnPosition(radius, attempts = 140) {
        let bestPos = null;
        let bestClearance = -Infinity;

        for (let i = 0; i < attempts; i++) {
            const candidate = this.getRandomSpawnPosition(radius);
            if (this.isSpawnPositionSafe(candidate.x, candidate.y, radius)) {
                return candidate;
            }
            const clearance = this.getSpawnClearance(candidate.x, candidate.y, radius);
            if (clearance > bestClearance) {
                bestClearance = clearance;
                bestPos = candidate;
            }
        }

        const fallbackCandidates = [
            { x: this.config.mapWidth / 2, y: this.config.mapHeight / 2 },
            { x: this.config.mapWidth * 0.2, y: this.config.mapHeight * 0.2 },
            { x: this.config.mapWidth * 0.8, y: this.config.mapHeight * 0.2 },
            { x: this.config.mapWidth * 0.2, y: this.config.mapHeight * 0.8 },
            { x: this.config.mapWidth * 0.8, y: this.config.mapHeight * 0.8 },
        ];

        for (const candidate of fallbackCandidates) {
            const clearance = this.getSpawnClearance(candidate.x, candidate.y, radius);
            if (clearance > bestClearance) {
                bestClearance = clearance;
                bestPos = candidate;
            }
        }

        return bestPos || { x: this.config.mapWidth / 2, y: this.config.mapHeight / 2 };
    }

    spawnPlayer(player) {
        this.ensurePlayerTeam(player);
        const id = this.generateId();
        const spawnRadius = this.radiusFromMass(this.config.startMass);
        const spawnPos = this.findSafeSpawnPosition(spawnRadius);
        const cell = new Cell({
            id,
            x: spawnPos.x,
            y: spawnPos.y,
            mass: this.config.startMass,
            color: this.getPlayerDisplayColor(player),
            owner: player,
            name: player.name || ''
        });
        cell.skin = this.shouldShowSkinForPlayer(player) ? (player.skin || null) : null;
        cell.teamId = this.isTeamsMode() ? player.teamId : null;
        if (!player.cells) player.cells = [];
        player.cells.push(cell);
        player.target = { x: spawnPos.x, y: spawnPos.y };
        this.cells.set(id, cell);
        return cell;
    }

    addPlayer(ws) {
        const player = {
            ws,
            id: this.generateId(),
            name: '',
            cells: [],
            color: this.randomColor(),
            skin: null,
            teamId: null,
            teamPartnerId: null,
            teamExpiresAt: 0,
            target: { x: 0, y: 0 },
            isBot: false,
            score: 0,
            maxScore: 0,
            alive: false,
            spectating: false,
            spectateCenter: { x: this.config.mapWidth / 2, y: this.config.mapHeight / 2 },
            spectateScale: Math.max(2.4, Math.max(this.config.mapWidth / 1650, this.config.mapHeight / 930)),
        };
        this.ensurePlayerTeam(player);
        this.players.set(ws, player);
        ws.send(JSON.stringify({
            type: 'welcome',
            id: player.id,
            mapWidth: this.config.mapWidth,
            mapHeight: this.config.mapHeight,
            mode: this.gameMode,
            teamId: this.isTeamsMode() ? player.teamId : null,
            teamCount: this.getActiveTeamCount(),
        }));
    }

    removePlayer(ws) {
        const player = this.players.get(ws);
        if (player) {
            player.cells.forEach(c => this.cells.delete(c.id));
            player.cells = [];
            this.players.delete(ws);
            this.syncBotPopulation();
            this.ensureBotRoleMix();
        }
    }

    handleMessage(ws, msg) {
        const player = this.players.get(ws);
        if (!player) return;

        switch (msg.type) {
            case 'spawn':
                if (player.alive) return;
                player.spectating = false;
                player.name = (msg.name || '').substring(0, 15);
                this.assignPlayerSkin(player, msg.skin, false);
                this.ensurePlayerTeam(player);
                player.alive = true;
                player.maxScore = Math.max(player.maxScore || 0, this.config.startMass);
                player.cells = [];
                player.teamPartnerId = null;
                player.teamExpiresAt = 0;
                this.spawnPlayer(player);
                ws.send(JSON.stringify({
                    type: 'spawned',
                    skin: player.skin,
                    mode: this.gameMode,
                    teamId: this.isTeamsMode() ? player.teamId : null,
                    teamCount: this.getActiveTeamCount(),
                }));
                this.syncBotPopulation();
                this.ensureBotRoleMix();
                break;

            case 'target':
                if (player.spectating) return;
                player.target = { x: msg.x, y: msg.y };
                break;

            case 'split':
                if (player.alive) this.splitPlayer(player);
                break;

            case 'eject':
                if (player.alive) this.ejectMass(player);
                break;

            case 'return_lobby':
                if (!player.alive) return;
                player.cells.forEach((c) => this.cells.delete(c.id));
                player.cells = [];
                player.alive = false;
                player.spectating = false;
                player.spectateCenter = { x: this.config.mapWidth / 2, y: this.config.mapHeight / 2 };
                this.syncBotPopulation();
                this.ensureBotRoleMix();
                break;

            case 'spectate':
                if (msg && msg.enabled) {
                    if (player.alive) return;
                    player.spectating = true;
                    if (!player.spectateCenter) {
                        player.spectateCenter = { x: this.config.mapWidth / 2, y: this.config.mapHeight / 2 };
                    }
                    player.spectateScale = Math.max(
                        0.6,
                        Math.min(
                            8.5,
                            Number.isFinite(Number(msg.scale))
                                ? Number(msg.scale)
                                : (player.spectateScale || Math.max(2.4, Math.max(this.config.mapWidth / 1650, this.config.mapHeight / 930)))
                        )
                    );
                    ws.send(JSON.stringify({ type: 'spectate_state', enabled: true }));
                } else {
                    player.spectating = false;
                    ws.send(JSON.stringify({ type: 'spectate_state', enabled: false }));
                }
                break;

            case 'spectate_view':
                if (!player.spectating) return;
                if (!player.spectateCenter) {
                    player.spectateCenter = { x: this.config.mapWidth / 2, y: this.config.mapHeight / 2 };
                }
                if (Number.isFinite(Number(msg.x))) {
                    player.spectateCenter.x = Math.max(0, Math.min(this.config.mapWidth, Number(msg.x)));
                }
                if (Number.isFinite(Number(msg.y))) {
                    player.spectateCenter.y = Math.max(0, Math.min(this.config.mapHeight, Number(msg.y)));
                }
                if (Number.isFinite(Number(msg.scale))) {
                    player.spectateScale = Math.max(0.6, Math.min(8.5, Number(msg.scale)));
                }
                break;
        }
    }

    // ── Original agar.io split: shoots new cell towards cursor ──
    splitPlayer(player, options = {}) {
        const newCells = [];
        const maxCells = this.getMaxCellsForPlayer(player);
        // Bots should only split one cell per call (the largest eligible one),
        // otherwise each burst call can split every existing cell simultaneously.
        const splitOnlyOne = !!options.singleCell || (player.isBot && !options.allowAll);
        let eligible = [...player.cells];
        if (splitOnlyOne) {
            // Pick the cell with the most mass that faces the target
            eligible = eligible
                .filter((c) => c.mass >= this.config.minSplitMass)
                .sort((a, b) => b.mass - a.mass)
                .slice(0, 1);
        }

        for (const cell of eligible) {
            if (player.cells.length + newCells.length >= maxCells) break;
            if (cell.mass < this.config.minSplitMass) continue;

            const angle = Math.atan2(player.target.y - cell.y, player.target.x - cell.x);

            // Original: split boost is ~780 units, decays with friction
            const splitBoost = Math.min(28, 16 + 80 / Math.max(1, Math.sqrt(cell.mass)));
            const newMass = cell.mass / 2;
            cell.mass = newMass;

            const id = this.generateId();
            const r = cell.radius();
            const newCell = new Cell({
                id,
                x: cell.x + Math.cos(angle) * Math.min(r * 0.5, 40),
                y: cell.y + Math.sin(angle) * Math.min(r * 0.5, 40),
                mass: newMass,
                color: cell.color,
                owner: player,
                name: player.name
            });
            newCell.skin = this.shouldShowSkinForPlayer(player) ? (player.skin || cell.skin || null) : null;
            newCell.teamId = this.isTeamsMode() ? player.teamId : null;
            newCell.vx = Math.cos(angle) * splitBoost;
            newCell.vy = Math.sin(angle) * splitBoost;
            // Clamp to map boundaries
            newCell.x = Math.max(0, Math.min(this.config.mapWidth, newCell.x));
            newCell.y = Math.max(0, Math.min(this.config.mapHeight, newCell.y));
            const mergeDelayMs = this.getMergeDelayMs();
            newCell.mergeTime = Date.now() + mergeDelayMs;
            cell.mergeTime = Date.now() + mergeDelayMs;

            newCells.push(newCell);
            this.cells.set(id, newCell);
        }
        player.cells.push(...newCells);
    }

    ejectMass(player) {
        if (!player.target || !Number.isFinite(player.target.x) || !Number.isFinite(player.target.y)) return;
        for (const cell of player.cells) {
            if (cell.mass < this.ejectMinCellMass) continue;
            const dx = player.target.x - cell.x;
            const dy = player.target.y - cell.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const angle = dist > 0.1 ? Math.atan2(dy, dx) : Math.random() * Math.PI * 2;
            const prevMass = cell.mass;
            cell.mass -= this.ejectedPelletCost;
            if (!this.spawnEjectedMassFromCell(cell, angle, 22)) {
                cell.mass = prevMass;
            }
        }
    }

    tick() {
        const now = Date.now();
        this._tickCount = (this._tickCount || 0) + 1;
        const botPopulationChanged = this.syncBotPopulation();
        if (botPopulationChanged) this.ensureBotRoleMix();
        this.updateCells();
        this.updateFood();
        this.updateViruses();
        this.handleVirusFeeding();
        this.updateSpawnerViruses();
        this.maybeSpawnBountyPellet(now);
        this.checkCollisions();
        this.respawnFood();
        this.updateBots();
        // Throttle leaderboard rebuild: skip every other tick when many bots are alive
        // to reduce the O(n log n) sort cost. sendState still uses last computed values.
        const skipLeaderboard = this.bots.length >= 60 && (this._tickCount % 2 === 0);
        if (!skipLeaderboard) this.updateLeaderboard();
        this.sendState();
    }

    regenerateWorld() {
        this.cells.clear();
        this.food.clear();
        this.viruses.clear();

        for (const [, player] of this.players) {
            if (!player) continue;
            player.cells = [];
            player.target = { x: this.config.mapWidth / 2, y: this.config.mapHeight / 2 };
            player.spectateCenter = { x: this.config.mapWidth / 2, y: this.config.mapHeight / 2 };
            if (player.alive) {
                player.score = 0;
                player.maxScore = Math.max(player.maxScore || 0, this.config.startMass || 0);
                const cell = this.spawnPlayer(player);
                player.target = { x: cell.x, y: cell.y };
            }
        }

        for (const bot of this.bots) {
            if (!bot) continue;
            bot.cells = [];
            bot.alive = false;
        }
        this.bots = [];

        for (let i = 0; i < this.config.maxFood; i++) this.spawnFood();
        for (let i = 0; i < this.config.maxViruses; i++) this.spawnVirus();
        this.nextBountyPelletAt = Date.now() + Math.round(this.bountyPelletIntervalMs * (0.7 + Math.random() * 0.8));

        this.syncBotPopulation(true);
        this.ensureBotRoleMix();
        this.clampWorldToBounds();
        this.updateLeaderboard();
    }

    // ── Cell speed formula ──
    // Small cells: snappy. Big cells: slow but not frozen.
    // mass 10 → 2.2/tick, mass 100 → 1.2, mass 500 → 0.75, mass 1000 → 0.6
    getCellSpeed(mass) {
        return 5.25 * Math.pow(mass, -0.3);
    }

    updateCells() {
        this._forEachPlayer((player) => {
            if (!player.cells || player.cells.length === 0) return;

            // Push own cells apart ONLY while merge timer is active
            // Once merge timer expires, stop pushing so they can overlap and merge
            if (player.cells.length > 1) {
                const now = Date.now();
                for (let i = 0; i < player.cells.length; i++) {
                    for (let j = i + 1; j < player.cells.length; j++) {
                        const a = player.cells[i];
                        const b = player.cells[j];
                        // Only push apart if BOTH cells still have active merge timers
                        if (a.mergeTime <= now && b.mergeTime <= now) continue;
                        const dx = b.x - a.x;
                        const dy = b.y - a.y;
                        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                        const minDist = a.radius() + b.radius();
                        if (dist < minDist) {
                            const push = (minDist - dist) / dist * 0.3;
                            a.x -= dx * push;
                            a.y -= dy * push;
                            b.x += dx * push;
                            b.y += dy * push;
                        }
                    }
                }
            }

            for (const cell of player.cells) {
                // Movement towards target
                const dx = player.target.x - cell.x;
                const dy = player.target.y - cell.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist > 1) {
                    const speed = Math.min(this.getCellSpeed(cell.mass), dist);
                    cell.x += (dx / dist) * speed;
                    cell.y += (dy / dist) * speed;
                }

                // Apply velocity (for splits/ejects)
                if (cell.vx || cell.vy) {
                    cell.x += cell.vx;
                    cell.y += cell.vy;
                    cell.vx *= 0.85;
                    cell.vy *= 0.85;
                    if (Math.abs(cell.vx) < 0.1) cell.vx = 0;
                    if (Math.abs(cell.vy) < 0.1) cell.vy = 0;
                }

                // Boundary
                const r = cell.radius();
                cell.x = Math.max(r, Math.min(this.config.mapWidth - r, cell.x));
                cell.y = Math.max(r, Math.min(this.config.mapHeight - r, cell.y));

                // Mass decay for cells > 20
                if (cell.mass > 20) {
                    cell.mass *= (1 - this.config.decayRate / this.config.tickRate);
                    if (cell.mass < this.config.startMass) cell.mass = this.config.startMass;
                }
            }

            this.mergePlayerCells(player);
        });
    }

    mergePlayerCells(player) {
        const now = Date.now();
        for (let i = 0; i < player.cells.length; i++) {
            for (let j = i + 1; j < player.cells.length; j++) {
                const a = player.cells[i];
                const b = player.cells[j];
                if (a.mergeTime > now || b.mergeTime > now) continue;

                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist <= Math.max(a.radius(), b.radius()) + 0.5) {
                    const [big, small] = a.mass >= b.mass ? [a, b] : [b, a];
                    big.mass += small.mass;
                    player.cells.splice(player.cells.indexOf(small), 1);
                    this.cells.delete(small.id);
                    j--;
                }
            }
        }
    }

    updateFood() {
        const now = Date.now();
        for (const [id, f] of this.food) {
            if (f.type === 'ejected' && f.bornAt && now - f.bornAt > this.ejectedLifetimeMs) {
                this.food.delete(id);
                continue;
            }

            if (f.vx || f.vy) {
                f.x += f.vx;
                f.y += f.vy;
                const drag = Number.isFinite(f.drag) ? Math.max(0.75, Math.min(0.96, f.drag)) : 0.82;
                f.vx *= drag;
                f.vy *= drag;
                if (Math.abs(f.vx) < 0.05) { f.vx = 0; f.vy = 0; }
                f.x = Math.max(0, Math.min(this.config.mapWidth, f.x));
                f.y = Math.max(0, Math.min(this.config.mapHeight, f.y));
            }
        }
    }

    checkCollisions() {
        this.rebuildFoodSpatialHash();
        this.rebuildCellSpatialHash();

        this._forEachPlayer((player) => {
            for (const cell of [...player.cells]) {
                if (!player.cells.includes(cell)) continue; // already eaten
                const r = cell.radius();

                // Eat food
                this.forEachNearbyFood(cell.x, cell.y, r + 20, (food) => {
                    if (!this.food.has(food.id)) return;
                    const dx = cell.x - food.x;
                    const dy = cell.y - food.y;
                    const eatRange = r - food.mass;
                    if (eatRange <= 0) return;
                    if (dx * dx + dy * dy <= eatRange * eatRange) {
                        cell.mass += food.mass;
                        if (
                            food.type === 'ejected' &&
                            food.ownerId &&
                            cell.owner &&
                            cell.owner.isBot &&
                            food.ownerId !== cell.owner.id
                        ) {
                            const helper = this.resolvePlayerById(food.ownerId);
                            if (helper && helper.id !== cell.owner.id) {
                                const now = Date.now();
                                const botEater = cell.owner;
                                const affection = Math.max(0.2, Math.min(2.2, botEater.affection || 1));
                                const memoryMs = this.config.botHelpMemoryMs || 26000;
                                botEater.recentBenefactorId = helper.id;
                                botEater.recentHelpUntil = now + Math.round(memoryMs * (0.8 + affection * 0.35));
                                if (Math.random() < (0.16 + Math.min(0.22, affection * 0.05))) {
                                    this.emitBotChat(botEater, helper.isBot ? 'team?' : 'ty for feed');
                                }
                                const sameTeamOrAllowed = !this.isTeamsMode()
                                    || helper.teamId === botEater.teamId
                                    || Math.random() < this.crossTeamTeamingChance;
                                const trustChance = Math.min(0.96, (botEater.gullibility ?? 0.15) * (0.75 + affection * 0.55));
                                if (sameTeamOrAllowed && Math.random() < trustChance) {
                                    const allianceMs = Math.max(
                                        2500,
                                        Math.round((this.botTeamDurationMs ?? 18000) * (0.75 + affection * 0.55))
                                    );
                                    botEater.teamPartnerId = helper.id;
                                    botEater.teamExpiresAt = now + allianceMs;
                                    if (helper.isBot) {
                                        if (!helper.teamPartnerId || helper.teamPartnerId === botEater.id || (helper.teamExpiresAt || 0) <= now || Math.random() < 0.68) {
                                            helper.teamPartnerId = botEater.id;
                                            helper.teamExpiresAt = now + allianceMs;
                                            if (Math.random() < 0.35) {
                                                this.emitBotChat(helper, 'sure');
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        this.food.delete(food.id);
                    }
                });

                // Eat other cells using spatial hash
                const now_eat = Date.now();
                const cellIsSplit = cell.mergeTime > now_eat;
                this.forEachNearbyCell(cell.x, cell.y, r + 200, (otherCell) => {
                    if (otherCell.owner === player) return; // skip own cells
                    if (this.areAlliedPlayers(player, otherCell.owner)) return;
                    if (!otherCell.owner || !otherCell.owner.cells.includes(otherCell)) return; // already eaten
                    const dx = cell.x - otherCell.x;
                    const dy = cell.y - otherCell.y;
                    const distSq = dx * dx + dy * dy;
                    const dist = Math.sqrt(distSq);
                    const otherRadius = otherCell.radius();
                    const eatRange = r - otherRadius * this.cellEatCenterInsideRatio;
                    const deepOverlap = (r + otherRadius) - dist;
                    const coverageRatio = this.getEatCoverageRatio(r, otherRadius, dist);
                    const requiredCoverage = this.cellEatCoverageRatio;
                    const massCapture = cell.mass + 0.001 >= otherCell.mass * this.cellEatMassRatio;
                    const decisiveMass = cell.mass + 0.001 >= otherCell.mass * (this.cellEatMassRatio + 0.24);
                    // coverageCapture and overlapCapture require deep overlap so they are
                    // self-limiting even for split cells. classicCapture is range-based so
                    // we allow it freely — the eatRange formula already requires the eater
                    // edge to substantially cover the prey center.
                    const coverageCapture = massCapture
                        && coverageRatio >= Math.min(requiredCoverage, 0.72)
                        && dist <= Math.max(r, otherRadius) * 0.98;
                    const overlapCapture = decisiveMass
                        && deepOverlap > otherRadius * 0.45
                        && coverageRatio >= Math.max(0.9, requiredCoverage * 0.98);
                    const classicCapture = massCapture
                        && eatRange > 0
                        && distSq <= (eatRange + 0.4) * (eatRange + 0.4)
                        && coverageRatio >= Math.min(requiredCoverage, 0.72);
                    if (classicCapture || overlapCapture || coverageCapture) {
                        cell.mass += otherCell.mass;
                        const idx = otherCell.owner.cells.indexOf(otherCell);
                        if (idx >= 0) otherCell.owner.cells.splice(idx, 1);
                        this.cells.delete(otherCell.id);
                        if (otherCell.owner.cells.length === 0) {
                            this.onPlayerEliminated(otherCell.owner, player.name || 'An unnamed cell');
                        }
                        return;
                    }

                    // No additional push-separation here; allowing overlap depth keeps eat checks reliable.
                });

                // Virus collision
                for (const [vid, virus] of this.viruses) {
                    const dx = cell.x - virus.x;
                    const dy = cell.y - virus.y;
                    const distSq = dx * dx + dy * dy;
                    const virusRadius = this.radiusFromMass(virus.mass);
                    const hideRadius = virusRadius * this.virusHideRatio;
                    const engulfRadius = Math.max(4, r - virusRadius * 0.24);
                    const hideHitRadius = Math.min(r, hideRadius);

                    if (distSq < engulfRadius * engulfRadius && cell.mass > virus.mass * 1.18) {
                        cell.mass += this.virusEatBonusMass;
                        this.virusPop(player, cell);
                        this.viruses.delete(vid);
                        this.spawnVirus();
                        break;
                    }

                    const canKillSmall = virus.kind === 'spawner' || this.normalVirusCanKill;
                    if (canKillSmall && distSq < hideHitRadius * hideHitRadius && cell.mass < virus.mass * this.virusSmallCellKillRatio) {
                        const doomedMass = Math.max(1, Math.round(cell.mass));
                        const owner = cell.owner;
                        const cellIdx = owner.cells.indexOf(cell);
                        if (cellIdx >= 0) owner.cells.splice(cellIdx, 1);
                        this.cells.delete(cell.id);
                        this.spawnLooseFoodRing(virus.x, virus.y, doomedMass, owner.color || '#8bcf83');
                        if (owner.cells.length === 0) {
                            this.onPlayerEliminated(owner, 'A virus');
                        }
                        break;
                    }
                }
            }
        });
    }

    virusPop(player, cell, options = {}) {
        const forceHardCap = !!options.forceHardCap || !!(player && player.isBot);
        const playerMaxCells = forceHardCap
            ? Math.max(1, Math.floor(this.config.maxCells || 1))
            : this.getMaxCellsForPlayer(player);
        const maxSplits = Math.min(playerMaxCells - player.cells.length, 8);
        if (maxSplits <= 0) return;

        const splitMass = cell.mass / (maxSplits + 1);
        cell.mass = splitMass;

        for (let i = 0; i < maxSplits; i++) {
            const angle = (Math.PI * 2 / maxSplits) * i + (Math.random() - 0.5) * 0.3;
            const id = this.generateId();
            const newCell = new Cell({
                id, x: cell.x, y: cell.y,
                mass: splitMass,
                color: cell.color,
                owner: player,
                name: player.name
            });
            newCell.skin = this.shouldShowSkinForPlayer(player) ? (player.skin || cell.skin || null) : null;
            newCell.teamId = this.isTeamsMode() ? player.teamId : null;
            newCell.vx = Math.cos(angle) * 18;
            newCell.vy = Math.sin(angle) * 18;
            newCell.mergeTime = Date.now() + this.getMergeDelayMs();
            player.cells.push(newCell);
            this.cells.set(id, newCell);
        }
        cell.mergeTime = Date.now() + this.getMergeDelayMs();
    }

    respawnFood() {
        while (this.countBaseFood() < this.config.maxFood && this.food.size < this.maxFoodEntities) {
            this.spawnFood();
        }
    }

    getDominantPlayerSnapshot() {
        let top = null;
        let secondMass = 0;
        this._forEachPlayer((p) => {
            if (!p || !this.isPlayerAlive(p)) return;
            const mass = this.getPlayerMass(p);
            if (mass <= 0) return;
            const pos = this.getPlayerCenter(p);
            if (!pos) return;
            if (!top || mass > top.mass) {
                if (top) secondMass = Math.max(secondMass, top.mass);
                top = { player: p, mass, pos };
            } else if (mass > secondMass) {
                secondMass = mass;
            }
        });
        if (!top) return null;
        return {
            ...top,
            secondMass,
            ratio: top.mass / Math.max(1, secondMass || this.config.startMass || 1),
        };
    }

    maybeSpawnBountyPellet(now) {
        if (!this.useExperimentalMechanics()) return;
        if (!this.enableBountyPellets) return;
        if (now < (this.nextBountyPelletAt || 0)) return;
        this.nextBountyPelletAt = now + Math.round(this.bountyPelletIntervalMs * (0.75 + Math.random() * 0.8));
        if (this.food.size >= this.maxFoodEntities) return;

        const dominant = this.getDominantPlayerSnapshot();
        if (!dominant || dominant.mass < this.bountyLeaderMinMass) return;
        if (dominant.ratio < 1.3 && dominant.mass < this.bountyLeaderMinMass * 2) return;

        const id = this.generateId();
        const angle = Math.random() * Math.PI * 2;
        const spawnDist = 34 + Math.random() * 55;
        const x = Math.max(0, Math.min(this.config.mapWidth, dominant.pos.x + Math.cos(angle) * spawnDist));
        const y = Math.max(0, Math.min(this.config.mapHeight, dominant.pos.y + Math.sin(angle) * spawnDist));
        this.food.set(id, {
            id,
            x,
            y,
            mass: this.bountyPelletMass,
            color: '#ff9f3f',
            type: 'bounty',
        });
    }

    updateBots() {
        const now = Date.now();
        if (this.isTeamsMode()) {
            for (const bot of this.bots) {
                if (!bot) continue;
                this.ensurePlayerTeam(bot);
                this.applyPlayerAppearance(bot);
            }
        }
        const aliveBots = this.bots.filter((b) => this.isPlayerAlive(b));
        const aliveHumans = [...this.players.values()].filter((p) => this.isPlayerAlive(p));
        const humanSupportLoad = new Map(aliveHumans.map((h) => [h.id, 0]));

        for (const bot of aliveBots) {
            if (!bot || (bot.role !== 'kamikaze_feeder' && bot.role !== 'merge_feeder' && bot.role !== 'spectator_support')) continue;
            const botPos = this.getPlayerCenter(bot);
            if (!botPos) continue;
            let nearestHumanId = null;
            let nearestDistSq = (this.botTeamMaxDistance * 1.8) ** 2;
            for (const human of aliveHumans) {
                const humanPos = this.getPlayerCenter(human);
                if (!humanPos) continue;
                const dx = humanPos.x - botPos.x;
                const dy = humanPos.y - botPos.y;
                const distSq = dx * dx + dy * dy;
                if (distSq < nearestDistSq) {
                    nearestDistSq = distSq;
                    nearestHumanId = human.id;
                }
            }
            if (nearestHumanId !== null) {
                humanSupportLoad.set(nearestHumanId, (humanSupportLoad.get(nearestHumanId) || 0) + 1);
            }
        }
        const alivePlayers = [
            ...aliveHumans.map((human) => ({
                id: human.id,
                name: human.name || '',
                mass: this.getPlayerMass(human),
                pos: this.getPlayerCenter(human),
                isHuman: true,
                supportLoad: humanSupportLoad.get(human.id) || 0,
                teamId: human.teamId,
            })),
            ...aliveBots.map((bot) => ({
                id: bot.id,
                name: bot.name || '',
                mass: this.getPlayerMass(bot),
                pos: this.getPlayerCenter(bot),
                isHuman: false,
                supportLoad: 0,
                teamId: bot.teamId,
            })),
        ].filter((p) => p.pos);

        const dominantSorted = [...alivePlayers].sort((a, b) => b.mass - a.mass);
        const dominant = dominantSorted[0] || null;
        const second = dominantSorted[1] || null;
        const dominantRatio = dominant
            ? dominant.mass / Math.max(1, second ? second.mass : this.config.startMass)
            : 1;

        // Sleep/offload config — hoisted here so adaptive limits can reference it
        const botSleepThreshold = this.config.botSleepThreshold ?? 40;
        const botSleepDistSq = ((this.config.botSleepDistance ?? 1400) ** 2);
        const botSleepMs = this.config.botSleepMs ?? 3000;
        const shouldOffload = aliveBots.length >= botSleepThreshold;

        // Adaptively reduce scan limits when there are many bots to keep the tick budget small.
        // The scan lists are shared across all bots in a tick, so lower limits help at high counts.
        const botLoadFactor = Math.max(1, aliveBots.length / Math.max(1, botSleepThreshold));
        const adaptiveCellLimit = Math.max(80, Math.round(this.botSenseCellScanLimit / botLoadFactor));
        const adaptiveFoodLimit = Math.max(50, Math.round(this.botSenseFoodSampleLimit / botLoadFactor));
        const adaptiveVirusLimit = Math.max(20, Math.round(this.botSenseVirusScanLimit / botLoadFactor));

        // Cache the expensive sampleMapValues calls for 2 ticks when there are many bots.
        // Bots use slightly stale data but this halves the sampling cost at high counts.
        const contextCacheInterval = aliveBots.length >= 60 ? 2 : 1;
        if (!this._botContextCache || (this._tickCount % contextCacheInterval === 0)) {
            this._botContextCache = {
                cells: this.sampleMapValues(this.cells, adaptiveCellLimit),
                viruses: this.sampleMapValues(this.viruses, adaptiveVirusLimit),
                food: this.sampleMapValues(this.food, adaptiveFoodLimit),
            };
        }

        const botContext = {
            cells: this._botContextCache.cells,
            viruses: this._botContextCache.viruses,
            food: this._botContextCache.food,
            humans: aliveHumans.map((human) => ({
                id: human.id,
                mass: this.getPlayerMass(human),
                pos: this.getPlayerCenter(human),
                supportLoad: humanSupportLoad.get(human.id) || 0,
                teamId: human.teamId,
            })).filter((h) => h.pos),
            players: alivePlayers,
            dominantPlayerId: dominant ? dominant.id : null,
            dominantMass: dominant ? dominant.mass : 0,
            dominantRatio,
        };

        // ── Bot sleep/wake offloading ──────────────────────────────────────────────
        // When there are many bots (>= botSleepThreshold), bots that are far from
        // all humans enter a "sleeping" state. Sleeping bots skip think() — their
        // cells stay in the world and continue moving via the normal physics tick,
        // but no AI is computed for them. They wake when a human gets close.

        for (const bot of aliveBots) {
            const botPos = bot.cells.length > 0 ? (bot.getCenter ? bot.getCenter() : null) : null;

            if (shouldOffload && botPos) {
                // Check proximity to any human
                let nearestHumanDistSq = Infinity;
                for (const human of aliveHumans) {
                    const hPos = this.getPlayerCenter(human);
                    if (!hPos) continue;
                    const dx = hPos.x - botPos.x;
                    const dy = hPos.y - botPos.y;
                    const dsq = dx * dx + dy * dy;
                    if (dsq < nearestHumanDistSq) nearestHumanDistSq = dsq;
                }

                if (nearestHumanDistSq > botSleepDistSq) {
                    // Bot is far from all humans — put to sleep or keep sleeping
                    if (!bot._sleeping) {
                        bot._sleeping = true;
                        bot._sleepUntil = now + botSleepMs + Math.random() * botSleepMs;
                    }
                } else if (bot._sleeping && nearestHumanDistSq <= botSleepDistSq * 0.64) {
                    // Human is close enough — wake up
                    bot._sleeping = false;
                    bot._sleepUntil = 0;
                }
            } else if (bot._sleeping) {
                bot._sleeping = false;
                bot._sleepUntil = 0;
            }

            const isSleeping = bot._sleeping && now < (bot._sleepUntil || 0);
            if (isSleeping) continue; // Skip AI for sleeping bots

            if (bot.role !== 'spectator_support') {
                this.refreshBotTeam(bot, now, aliveBots, aliveHumans, humanSupportLoad);
            }
            bot.think(this, botContext);
            if (bot.role !== 'spectator_support') {
                this.applyBotTeamBehavior(bot, now);
                this.maybeTriggerBotCircleSpit(bot, now);
            }
        }
        this.maybeEmitAmbientBotChat(now, aliveBots, alivePlayers);
    }

    areTeammates(a, b) {
        if (!this.isTeamsMode()) return false;
        if (!a || !b) return false;
        if (!Number.isInteger(a.teamId) || !Number.isInteger(b.teamId)) return false;
        return a.teamId === b.teamId;
    }

    arePartnered(a, b) {
        if (!this.enableBotTeaming) return false;
        if (!a || !b) return false;
        if (a.id == null || b.id == null) return false;
        if (!(a.isBot && b.isBot)) {
            if (a.isBot && !b.isBot && a.teamPartnerId === b.id) {
                this.clearBotTeam(a);
            }
            if (b.isBot && !a.isBot && b.teamPartnerId === a.id) {
                this.clearBotTeam(b);
            }
            if (!a.isBot) {
                a.teamPartnerId = null;
                a.teamExpiresAt = 0;
            }
            if (!b.isBot) {
                b.teamPartnerId = null;
                b.teamExpiresAt = 0;
            }
            return false;
        }
        const now = Date.now();
        const bothBots = true;
        const stickyPair = !!this.botTeamsStickUntilDeath;
        const maxStickyMs = Math.max(6000, Math.floor((this.botTeamDurationMs || 18000) * 2.6));
        const maxHumanAllianceMs = Math.max(4000, Math.floor((this.botTeamDurationMs || 18000) * 4));
        const normalizePlayerLink = (p) => {
            if (p && !p.isBot) {
                p.teamPartnerId = null;
                p.teamExpiresAt = 0;
            } else if (p && p.isBot) {
                this.clearBotTeam(p);
            }
        };
        const hasValidLink = (from, to) => {
            if (!from || !to) return false;
            if (from.teamPartnerId !== to.id) return false;
            const expiry = Number(from.teamExpiresAt) || 0;
            if (stickyPair) {
                if (expiry > 0 && now <= (expiry + maxStickyMs)) return true;
                normalizePlayerLink(from);
                return false;
            }
            if (expiry <= now) {
                normalizePlayerLink(from);
                return false;
            }
            if (!bothBots && expiry - now > maxHumanAllianceMs) {
                normalizePlayerLink(from);
                return false;
            }
            return true;
        };
        const aLinked = hasValidLink(a, b);
        const bLinked = hasValidLink(b, a);
        const linked = bothBots ? (aLinked || bLinked) : (aLinked && bLinked);
        if (!linked) return false;
        const aPos = this.getPlayerCenter(a);
        const bPos = this.getPlayerCenter(b);
        if (!aPos || !bPos) return false;
        const dx = aPos.x - bPos.x;
        const dy = aPos.y - bPos.y;
        return dx * dx + dy * dy <= (this.botTeamMaxDistance * 2.8) ** 2;
    }

    areAlliedPlayers(a, b) {
        if (this.isTeamsMode()) return this.areTeammates(a, b);
        if (this.areTeammates(a, b)) return true;
        return this.arePartnered(a, b);
    }

    onPlayerEliminated(player, killerName = 'A virus') {
        player.alive = false;
        player.teamPartnerId = null;
        player.teamExpiresAt = 0;
        if (player.isBot) {
            const killerLabel = String(killerName || 'you').trim().slice(0, 18) || 'you';
            if (Math.random() < 0.55) {
                this.emitBotChat(player, `ugh i hate you ${killerLabel}`, { force: true, cooldownMs: 1000 });
            }
            if (!this.config.disableBotRespawn) {
                const respawnDelay = 2000 + Math.random() * 3000;
                setTimeout(() => {
                    if (this.bots.includes(player)) {
                        player.alive = true;
                        if (player.kind === 'spectator') {
                            player.name = Math.random() < 0.5 ? `Spec${Math.floor(Math.random() * 900 + 100)}` : 'Observer';
                            player.setRole('spectator_support', this.config);
                        } else {
                            player.name = player.pickName();
                        }
                        if (!this.isTeamsMode()) {
                            player.color = this.randomColor();
                        } else {
                            this.ensurePlayerTeam(player);
                            player.color = this.getTeamColor(player.teamId);
                        }
                        this.assignPlayerSkin(player, null, true);
                        player.cells = [];
                        this.spawnBot(player, 0, true);
                        this.ensureBotRoleMix();
                    }
                }, respawnDelay);
            }
        } else if (player.ws) {
            const peakScore = Math.round(Math.max(player.maxScore || 0, player.score || 0, this.config.startMass || 0));
            player.maxScore = Math.max(player.maxScore || 0, player.score || 0);
            try {
                player.ws.send(JSON.stringify({
                    type: 'death',
                    killer: killerName || 'An unnamed cell',
                    score: peakScore,
                    peakScore,
                    mode: this.gameMode,
                    teamId: this.isTeamsMode() ? player.teamId : null,
                }));
            } catch (e) {}
            this.syncBotPopulation(true);
            this.ensureBotRoleMix();
        }
    }

    removeCellFromOwner(owner, cell) {
        if (!owner || !cell) return;
        const idx = owner.cells.indexOf(cell);
        if (idx >= 0) owner.cells.splice(idx, 1);
        this.cells.delete(cell.id);
        if (owner.cells.length === 0) {
            this.onPlayerEliminated(owner);
        }
    }

    updateLeaderboard() {
        const teamMass = this.isTeamsMode() ? new Array(this.getActiveTeamCount()).fill(0) : null;
        const candidates = [];
        this._forEachPlayer((p) => {
            let score = 0;
            for (const c of p.cells) score += c.mass;
            p.score = score;
            p.maxScore = Math.max(p.maxScore || 0, score);
            if (teamMass && Number.isInteger(p.teamId) && p.teamId >= 0 && p.teamId < teamMass.length) {
                teamMass[p.teamId] += score;
            }
            if (p.alive && p.cells.length > 0 && !p.excludeFromLeaderboard) {
                candidates.push(p);
            }
        });
        this.teamMassDistribution = teamMass || [];
        candidates.sort((a, b) => b.score - a.score);
        this.leaderboard = candidates.slice(0, this.leaderboardSize).map((p, i) => ({
            rank: i + 1,
            name: p.name || 'An unnamed cell',
            score: Math.round(p.score),
            id: p.id,
            teamId: this.isTeamsMode() ? p.teamId : null
        }));
    }

    sendState() {
        const now = Date.now();
        if (now - this.lastStateBroadcastAt < this.stateIntervalMs) return;
        this.lastStateBroadcastAt = now;

        // Pre-build leaderboard and teamStats once outside the per-player loop
        const teamStats = this.isTeamsMode()
            ? this.teamMassDistribution
                .map((mass, teamId) => ({
                    teamId,
                    name: this.getTeamName(teamId),
                    color: this.getTeamColor(teamId),
                    mass: Math.round(mass),
                }))
                .sort((a, b) => b.mass - a.mass)
            : [];
        const chatFeed = this.enableBotChat ? this.chatLog.slice(-18) : [];
        const playerCellIds = new Map();
        for (const [ws, player] of this.players) {
            const ids = [];
            for (const c of player.cells) ids.push(c.id);
            playerCellIds.set(ws, ids);
        }

        for (const [ws, player] of this.players) {
            if (ws.readyState !== WebSocket.OPEN) continue;

            const playerIsSpectating = !!player.spectating && !player.alive;
            let cx = this.config.mapWidth / 2;
            let cy = this.config.mapHeight / 2;
            let totalMass = 0;
            let viewScale = Math.max(2.4, Math.max(this.config.mapWidth / 1650, this.config.mapHeight / 930));

            if (player.cells.length > 0) {
                cx = 0;
                cy = 0;
                for (const c of player.cells) {
                    cx += c.x * c.mass;
                    cy += c.y * c.mass;
                    totalMass += c.mass;
                }
                cx /= totalMass;
                cy /= totalMass;

                const zoom = Math.pow(Math.min(64 / Math.max(totalMass, 1), 1), 0.4);
                viewScale = Math.max(0.62, Math.min(3.7, 1.22 / zoom));
            } else if (playerIsSpectating) {
                if (!player.spectateCenter) {
                    player.spectateCenter = { x: this.config.mapWidth / 2, y: this.config.mapHeight / 2 };
                }
                cx = Math.max(0, Math.min(this.config.mapWidth, player.spectateCenter.x || this.config.mapWidth / 2));
                cy = Math.max(0, Math.min(this.config.mapHeight, player.spectateCenter.y || this.config.mapHeight / 2));
                viewScale = Math.max(0.6, Math.min(8.5, Number(player.spectateScale) || viewScale));
            }

            const viewW = 1920 * viewScale;
            const viewH = 1080 * viewScale;
            const pad = 300;
            const maxVisibleCells = Math.max(100, this.maxVisibleCellsPerPlayer || 1500);
            const maxVisibleFood = Math.max(100, this.maxVisibleFoodPerPlayer || this.config.maxFood);
            const maxVisibleViruses = 500;

            const minX = cx - viewW - pad;
            const maxX = cx + viewW + pad;
            const minY = cy - viewH - pad;
            const maxY = cy + viewH + pad;

            const visibleCells = [];
            for (const [, cell] of this.cells) {
                if (cell.x > minX && cell.x < maxX && cell.y > minY && cell.y < maxY) {
                    visibleCells.push({
                        id: cell.id,
                        x: Math.round(cell.x * 10) / 10,
                        y: Math.round(cell.y * 10) / 10,
                        mass: Math.round(cell.mass * 100) / 100,
                        color: cell.color,
                        name: cell.name,
                        mine: cell.owner === player,
                        skin: cell.skin || null,
                        ownerId: cell.owner ? cell.owner.id : null,
                        teamId: this.isTeamsMode() ? cell.teamId : null,
                    });
                    if (visibleCells.length >= maxVisibleCells) break;
                }
            }

            const visibleFood = [];
            const visibleFoodSpawner = [];
            const visibleFoodEjected = [];
            const visibleFoodBase = [];
            for (const [, f] of this.food) {
                if (!(f.x > minX && f.x < maxX && f.y > minY && f.y < maxY)) continue;
                const dx = f.x - cx;
                const dy = f.y - cy;
                const payload = {
                    id: f.id,
                    x: Math.round(f.x),
                    y: Math.round(f.y),
                    mass: f.mass,
                    color: f.color,
                    type: f.type,
                    _d: dx * dx + dy * dy,
                };
                if (f.type === 'spawner') visibleFoodSpawner.push(payload);
                else if (f.type === 'ejected') visibleFoodEjected.push(payload);
                else visibleFoodBase.push(payload);
            }
            visibleFoodSpawner.sort((a, b) => a._d - b._d);
            visibleFoodEjected.sort((a, b) => a._d - b._d);
            visibleFoodBase.sort((a, b) => a._d - b._d);

            const reservedBase = Math.min(
                visibleFoodBase.length,
                Math.max(130, Math.floor(maxVisibleFood * 0.65))
            );
            if (reservedBase > 0) {
                visibleFood.push(...visibleFoodBase.slice(0, reservedBase));
            }

            let baseIdx = reservedBase;
            let ejectedIdx = 0;
            let spawnerIdx = 0;
            while (visibleFood.length < maxVisibleFood) {
                let appended = false;
                if (spawnerIdx < visibleFoodSpawner.length) {
                    visibleFood.push(visibleFoodSpawner[spawnerIdx++]);
                    appended = true;
                    if (visibleFood.length >= maxVisibleFood) break;
                }
                if (ejectedIdx < visibleFoodEjected.length) {
                    visibleFood.push(visibleFoodEjected[ejectedIdx++]);
                    appended = true;
                    if (visibleFood.length >= maxVisibleFood) break;
                }
                if (baseIdx < visibleFoodBase.length) {
                    visibleFood.push(visibleFoodBase[baseIdx++]);
                    appended = true;
                }
                if (!appended) break;
            }
            if (visibleFood.length > maxVisibleFood) {
                visibleFood.length = maxVisibleFood;
            }
            for (const f of visibleFood) {
                delete f._d;
            }

            const visibleViruses = [];
            for (const [, v] of this.viruses) {
                if (v.x > minX && v.x < maxX && v.y > minY && v.y < maxY) {
                    visibleViruses.push({
                        id: v.id,
                        x: Math.round(v.x),
                        y: Math.round(v.y),
                        mass: Math.round(Number(v.mass || 0) * 100) / 100,
                        kind: v.kind || 'normal',
                    });
                    if (visibleViruses.length >= maxVisibleViruses) break;
                }
            }

            try {
                ws.send(JSON.stringify({
                    type: 'state',
                    cells: visibleCells,
                    food: visibleFood,
                    viruses: visibleViruses,
                    leaderboard: this.leaderboard,
                    mode: this.gameMode,
                    teamCount: this.getActiveTeamCount(),
                    teamStats,
                    chat: chatFeed,
                    playerTeamId: this.isTeamsMode() ? player.teamId : null,
                    playerCells: playerCellIds.get(ws),
                    spectating: playerIsSpectating,
                    mapWidth: this.config.mapWidth,
                    mapHeight: this.config.mapHeight,
                    massRadiusScale: this.massRadiusScale,
                    massRadiusExponent: this.massRadiusExponent,
                    viewCenter: { x: Math.round(cx * 10) / 10, y: Math.round(cy * 10) / 10 },
                    viewScale,
                }));
            } catch (e) {}
        }
    }
}

module.exports = Game;

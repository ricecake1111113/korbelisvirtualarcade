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
        this.refreshRuntimeFromConfig();
    }

    start() {
        for (let i = 0; i < this.config.maxFood; i++) this.spawnFood();
        for (let i = 0; i < this.config.maxViruses; i++) this.spawnVirus();
        this.syncBotPopulation();
        this.ensureBotRoleMix();

        this.tickInterval = setInterval(() => this.tick(), 1000 / this.config.tickRate);
    }

    generateId() {
        return nextId++;
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
        this.leaderboardSize = this.config.leaderboardSize ?? 10;
        this.gameMode = this.config.gameMode === 'teams' ? 'teams' : 'ffa';
        this.teamCount = Math.max(2, Math.min(12, Math.floor(this.config.teamCount ?? 3)));
        this.spawnerVirusesInFFA = !!this.config.spawnerVirusesInFFA;
        this.spawnerVirusChance = Math.max(0, Math.min(1, this.config.spawnerVirusChance ?? 0.22));
        this.forceSpawnerVirusesInTeams = this.config.forceSpawnerVirusesInTeams !== false;
        this.normalVirusCanKill = !!this.config.normalVirusCanKill;
        this.spawnerDispenseRate = Math.max(0.1, Math.min(4, this.config.spawnerDispenseRate ?? 0.45));
        this.spawnerPassiveRatePerSec = Math.max(0, Math.min(6, this.config.spawnerPassiveRatePerSec ?? 1));
        this.spawnerPelletMass = Math.max(0.25, Math.min(6, this.config.spawnerPelletMass ?? 0.7));
        this.virusSmallCellKillRatio = Math.max(0.1, Math.min(0.95, this.config.virusSmallCellKillRatio ?? 0.52));
        this.virusHideRatio = Math.max(0.2, Math.min(1.4, this.config.virusHideRatio ?? 0.9));

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

        this.botCircleSpitChancePerTick = this.config.botCircleSpitChancePerTick ?? 0.00012;
        this.botCircleSpitCooldownMs = this.config.botCircleSpitCooldownMs ?? 15000;
        this.botCircleSpitMinMass = this.config.botCircleSpitMinMass ?? 170;
        this.botCircleSpitPelletsMin = this.config.botCircleSpitPelletsMin ?? 6;
        this.botCircleSpitPelletsMax = this.config.botCircleSpitPelletsMax ?? 12;
    }

    isTeamsMode() {
        return this.gameMode === 'teams';
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
            player.skin = null;
        } else if (!player.color) {
            player.color = this.randomColor();
        }

        if (!player.cells) return;
        const color = this.getPlayerDisplayColor(player);
        for (const cell of player.cells) {
            cell.color = color;
            cell.teamId = this.isTeamsMode() ? player.teamId : null;
            if (this.isTeamsMode()) cell.skin = null;
        }
    }

    updateRuntimeConfig(nextConfig) {
        const prevTickRate = this.config.tickRate;
        const prevMode = this.config.gameMode === 'teams' ? 'teams' : 'ffa';
        const prevTeamCount = Math.max(2, Math.min(12, Math.floor(this.config.teamCount ?? 3)));
        const prevMapWidth = this.config.mapWidth;
        const prevMapHeight = this.config.mapHeight;
        this.config = { ...this.config, ...nextConfig };
        this.refreshRuntimeFromConfig();
        const mapSizeChanged = prevMapWidth !== this.config.mapWidth || prevMapHeight !== this.config.mapHeight;
        if (mapSizeChanged) this.clampWorldToBounds();
        this.syncBotPopulation();
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
            bot.boldness = Math.max(0, Math.min(1, (this.botBoldnessBase ?? 0.45) + (Math.random() - 0.5) * 0.2));
            if (Math.random() > 0.5) {
                bot.likesHelpingHumans = Math.random() < this.botHumanAssistChance;
            }
            if (Math.random() > 0.5) {
                bot.prefersHumanSpectate = Math.random() < this.spectatorFollowHumanChance;
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
        if (this.isTeamsMode() && this.forceSpawnerVirusesInTeams) {
            for (const [, virus] of this.viruses) {
                if (virus.kind === 'spawner') continue;
                virus.kind = 'spawner';
                virus.spawnerStoredMass = Math.max(0, virus.spawnerStoredMass || 0);
                virus.spawnerDispenseAccumulator = 0;
                virus.feedCount = 0;
            }
        }
        if (!this.isTeamsMode() && !this.spawnerVirusesInFFA) {
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
        if (this.isTeamsMode()) {
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
            return { normal: 0, spectator: 0 };
        }
        return {
            normal: Math.max(0, Math.floor(this.config.botCount || 0)),
            spectator: Math.max(0, Math.floor(this.spectatorBotCount || 0)),
        };
    }

    syncBotPopulation() {
        const desired = this.getDesiredBotPopulation();
        const targetNormal = desired.normal;
        const targetSpectators = desired.spectator;

        const normalBots = this.bots.filter((b) => b.kind !== 'spectator');
        const spectatorBots = this.bots.filter((b) => b.kind === 'spectator');

        if (normalBots.length > targetNormal) {
            const removeCount = normalBots.length - targetNormal;
            for (let i = 0; i < removeCount; i++) {
                this.removeBot(normalBots[normalBots.length - 1 - i]);
            }
        } else if (normalBots.length < targetNormal) {
            const addCount = targetNormal - normalBots.length;
            for (let i = 0; i < addCount; i++) {
                this.createBot('normal');
            }
        }

        const spectatorsNow = this.bots.filter((b) => b.kind === 'spectator');
        if (spectatorsNow.length > targetSpectators) {
            const removeCount = spectatorsNow.length - targetSpectators;
            for (let i = 0; i < removeCount; i++) {
                this.removeBot(spectatorsNow[spectatorsNow.length - 1 - i]);
            }
        } else if (spectatorsNow.length < targetSpectators) {
            const addCount = targetSpectators - spectatorsNow.length;
            for (let i = 0; i < addCount; i++) {
                this.createBot('spectator');
            }
        }
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
        const mode = isRespawn ? this.botRespawnMassMode : this.botSpawnMassMode;
        const mass = bot.kind === 'spectator'
            ? Math.max(8, this.config.startMass * (0.85 + Math.random() * 0.4))
            : this.getBotSpawnMass(mode);
        const spawnRadius = Math.sqrt(Math.max(1, mass)) * 6;
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
        cell.skin = this.isTeamsMode() ? null : (bot.skin || null);
        cell.teamId = this.isTeamsMode() ? bot.teamId : null;
        bot.cells = [cell];
        bot.alive = true;
        bot.teamPartnerId = null;
        bot.teamExpiresAt = 0;
        bot.nextTeamSeekAt = 0;
        bot.lastTeamFeedAt = 0;
        bot.lastTeamSplitAt = 0;
        bot.lastCircleSpitAt = 0;
        bot.humanAssistChance = this.botHumanAssistChance;
        bot.maxSupportersPerHuman = this.botMaxSupportersPerHuman;
        bot.spectatorFollowHumanChance = this.spectatorFollowHumanChance;
        bot.likesHelpingHumans = Math.random() < this.botHumanAssistChance;
        bot.prefersHumanSpectate = Math.random() < this.spectatorFollowHumanChance;
        bot.target.x = cell.x;
        bot.target.y = cell.y;
        bot.desiredTarget.x = cell.x;
        bot.desiredTarget.y = cell.y;
        this.cells.set(id, cell);
    }

    countBaseFood() {
        let total = 0;
        for (const [, food] of this.food) {
            if (!food || food.type === 'ejected') continue;
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
            const r = Math.sqrt(Math.max(1, virus.mass || this.virusBaseMass || 100)) * 6;
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
        const food = {
            id,
            x: Math.random() * this.config.mapWidth,
            y: Math.random() * this.config.mapHeight,
            mass: 0.7,
            color: this.randomColor(),
            type: 'food'
        };
        this.food.set(id, food);
        return food;
    }

    spawnVirus(x, y, options = {}) {
        const id = this.generateId();
        const allowSpawner = this.isTeamsMode() || this.spawnerVirusesInFFA;
        const kind = options.kind
            || (this.isTeamsMode() && this.forceSpawnerVirusesInTeams
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

    getLargestCell(player, minMass = 35) {
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
            mass: 11,
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
            const donor = this.getLargestCell(player, 35);
            if (!donor) break;

            const angle = Math.atan2(target.y - donor.y, target.x - donor.x);
            donor.mass -= 16;
            if (!this.spawnEjectedMassFromCell(donor, angle, 20)) {
                donor.mass += 16;
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
            const donor = this.getLargestCell(player, 35);
            if (!donor) break;

            const angle = baseAngle + (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.12;
            donor.mass -= 16;
            if (!this.spawnEjectedMassFromCell(donor, angle, 16 + Math.random() * 6)) {
                donor.mass += 16;
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

        if (bot.teamPartnerId && (this.botTeamsStickUntilDeath || bot.teamExpiresAt > now)) {
            const partner = this.resolvePlayerById(bot.teamPartnerId);
            if (this.isPlayerAlive(partner)) {
                if (this.botTeamsStickUntilDeath) {
                    return partner;
                }
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
        const canSeekHuman = !!bot.likesHelpingHumans && Math.random() < this.botHumanAssistChance;
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
                score += 240 + gullibleBoost * 420;
            }
            if (score > bestScore) {
                bestScore = score;
                best = c;
            }
        }

        if (!best) return null;

        let expiresAt = this.botTeamsStickUntilDeath
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
        if (!this.botTeamsStickUntilDeath && bot.teamExpiresAt <= now) return;

        const partner = this.resolvePlayerById(bot.teamPartnerId);
        if (!this.isPlayerAlive(partner)) {
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
        if (!this.botTeamsStickUntilDeath && dist > this.botTeamMaxDistance * 2.4) {
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
            if (botMass >= this.botTeamFeedMinMass && Math.random() < this.botTeamFeedChance) {
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

    updateViruses() {
        for (const [, virus] of this.viruses) {
            if (!virus.vx && !virus.vy) continue;

            virus.x += virus.vx;
            virus.y += virus.vy;
            virus.vx *= this.virusShotFriction;
            virus.vy *= this.virusShotFriction;

            if (Math.abs(virus.vx) < 0.05) virus.vx = 0;
            if (Math.abs(virus.vy) < 0.05) virus.vy = 0;

            const r = Math.sqrt(virus.mass) * 6;
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
            const launchRadius = Math.sqrt(this.virusBaseMass) * 6;
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
            const radius = Math.sqrt(Math.max(virus.mass, this.virusBaseMass)) * 6;
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
                const virusRadius = Math.sqrt(virus.mass) * 6;
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
            const vr = Math.sqrt(Math.max(1, virus.mass)) * 6;
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
            const vr = Math.sqrt(Math.max(1, virus.mass)) * 6;
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
        const spawnRadius = Math.sqrt(Math.max(1, this.config.startMass)) * 6;
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
        cell.skin = this.isTeamsMode() ? null : (player.skin || null);
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
    splitPlayer(player) {
        const newCells = [];
        const maxCells = this.getMaxCellsForPlayer(player);

        for (const cell of [...player.cells]) {
            if (player.cells.length + newCells.length >= maxCells) break;
            if (cell.mass < this.config.minSplitMass) continue;

            const angle = Math.atan2(player.target.y - cell.y, player.target.x - cell.x);

            // Original: split boost is ~780 units, decays with friction
            const splitBoost = 28;
            const newMass = cell.mass / 2;
            cell.mass = newMass;

            const id = this.generateId();
            const r = cell.radius();
            const newCell = new Cell({
                id,
                x: cell.x + Math.cos(angle) * r * 0.5,
                y: cell.y + Math.sin(angle) * r * 0.5,
                mass: newMass,
                color: cell.color,
                owner: player,
                name: player.name
            });
            newCell.skin = this.isTeamsMode() ? null : (player.skin || cell.skin || null);
            newCell.teamId = this.isTeamsMode() ? player.teamId : null;
            newCell.vx = Math.cos(angle) * splitBoost;
            newCell.vy = Math.sin(angle) * splitBoost;
            newCell.mergeTime = Date.now() + this.config.mergeTime * 1000;
            cell.mergeTime = Date.now() + this.config.mergeTime * 1000;

            newCells.push(newCell);
            this.cells.set(id, newCell);
        }
        player.cells.push(...newCells);
    }

    ejectMass(player) {
        for (const cell of player.cells) {
            if (cell.mass < 35) continue;
            const angle = Math.atan2(player.target.y - cell.y, player.target.x - cell.x);
            cell.mass -= 16;
            if (!this.spawnEjectedMassFromCell(cell, angle, 20)) {
                cell.mass += 16;
                break;
            }
        }
    }

    tick() {
        this.updateCells();
        this.updateFood();
        this.updateViruses();
        this.handleVirusFeeding();
        this.updateSpawnerViruses();
        this.checkCollisions();
        this.respawnFood();
        this.updateBots();
        this.updateLeaderboard();
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

        this.syncBotPopulation();
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

                if (dist < Math.max(a.radius(), b.radius())) {
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
                    if (dx * dx + dy * dy < eatRange * eatRange) {
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
                                cell.owner.recentBenefactorId = helper.id;
                                cell.owner.recentHelpUntil = Date.now() + (this.config.botHelpMemoryMs || 26000);
                                const sameTeamOrAllowed = !this.isTeamsMode()
                                    || helper.teamId === cell.owner.teamId
                                    || Math.random() < this.crossTeamTeamingChance;
                                if (sameTeamOrAllowed && Math.random() < (cell.owner.gullibility ?? 0.15)) {
                                    cell.owner.teamPartnerId = helper.id;
                                    cell.owner.teamExpiresAt = Date.now() + Math.round((this.config.botTeamDurationMs ?? 18000) * 0.7);
                                }
                            }
                        }
                        this.food.delete(food.id);
                    }
                });

                // Eat other cells using spatial hash
                this.forEachNearbyCell(cell.x, cell.y, r + 200, (otherCell) => {
                    if (otherCell.owner === player) return; // skip own cells
                    if (this.areAlliedPlayers(player, otherCell.owner)) return;
                    if (!otherCell.owner || !otherCell.owner.cells.includes(otherCell)) return; // already eaten
                    const dx = cell.x - otherCell.x;
                    const dy = cell.y - otherCell.y;
                    const distSq = dx * dx + dy * dy;
                    const otherRadius = otherCell.radius();
                    const eatRange = r - otherRadius * 0.25;
                    if (cell.mass > otherCell.mass * 1.2 && eatRange > 0 && distSq < eatRange * eatRange) {
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
                    const virusRadius = Math.sqrt(virus.mass) * 6;
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

    virusPop(player, cell) {
        const playerMaxCells = this.getMaxCellsForPlayer(player);
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
            newCell.skin = this.isTeamsMode() ? null : (player.skin || cell.skin || null);
            newCell.teamId = this.isTeamsMode() ? player.teamId : null;
            newCell.vx = Math.cos(angle) * 18;
            newCell.vy = Math.sin(angle) * 18;
            newCell.mergeTime = Date.now() + this.config.mergeTime * 1000;
            player.cells.push(newCell);
            this.cells.set(id, newCell);
        }
        cell.mergeTime = Date.now() + this.config.mergeTime * 1000;
    }

    respawnFood() {
        while (this.countBaseFood() < this.config.maxFood && this.food.size < this.maxFoodEntities) {
            this.spawnFood();
        }
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
                mass: this.getPlayerMass(human),
                pos: this.getPlayerCenter(human),
                isHuman: true,
                supportLoad: humanSupportLoad.get(human.id) || 0,
                teamId: human.teamId,
            })),
            ...aliveBots.map((bot) => ({
                id: bot.id,
                mass: this.getPlayerMass(bot),
                pos: this.getPlayerCenter(bot),
                isHuman: false,
                supportLoad: 0,
                teamId: bot.teamId,
            })),
        ].filter((p) => p.pos);

        const botContext = {
            cells: this.sampleMapValues(this.cells, this.botSenseCellScanLimit),
            viruses: this.sampleMapValues(this.viruses, this.botSenseVirusScanLimit),
            food: this.sampleMapValues(this.food, this.botSenseFoodSampleLimit),
            humans: aliveHumans.map((human) => ({
                id: human.id,
                mass: this.getPlayerMass(human),
                pos: this.getPlayerCenter(human),
                supportLoad: humanSupportLoad.get(human.id) || 0,
                teamId: human.teamId,
            })).filter((h) => h.pos),
            players: alivePlayers
        };

        for (const bot of aliveBots) {
            if (bot.role !== 'spectator_support') {
                this.refreshBotTeam(bot, now, aliveBots, aliveHumans, humanSupportLoad);
            }
            bot.think(this, botContext);
            if (bot.role !== 'spectator_support') {
                this.applyBotTeamBehavior(bot, now);
                this.maybeTriggerBotCircleSpit(bot, now);
            }
        }
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
        const now = Date.now();
        const aLinked = a.teamPartnerId === b.id && (this.botTeamsStickUntilDeath || (a.teamExpiresAt || 0) > now);
        const bLinked = b.teamPartnerId === a.id && (this.botTeamsStickUntilDeath || (b.teamExpiresAt || 0) > now);
        return aLinked || bLinked;
    }

    areAlliedPlayers(a, b) {
        if (this.isTeamsMode()) return this.areTeammates(a, b);
        if (this.areTeammates(a, b)) return true;
        return this.arePartnered(a, b);
    }

    onPlayerEliminated(player, killerName = 'A virus') {
        player.alive = false;
        if (player.isBot) {
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
            this.syncBotPopulation();
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
                        mass: Math.round(cell.mass),
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
            const visibleEjected = [];
            const visibleFoodBase = [];
            for (const [, f] of this.food) {
                if (!(f.x > minX && f.x < maxX && f.y > minY && f.y < maxY)) continue;
                const payload = {
                    id: f.id,
                    x: Math.round(f.x),
                    y: Math.round(f.y),
                    mass: f.mass,
                    color: f.color,
                    type: f.type,
                };
                if (f.type === 'spawner') visibleFood.push(payload);
                else if (f.type === 'ejected') visibleEjected.push(payload);
                else visibleFoodBase.push(payload);
            }
            if (visibleFood.length < maxVisibleFood) {
                const remainingAfterSpawner = maxVisibleFood - visibleFood.length;
                visibleFood.push(...visibleEjected.slice(0, remainingAfterSpawner));
            }
            if (visibleFood.length < maxVisibleFood) {
                const remainingAfterEjected = maxVisibleFood - visibleFood.length;
                visibleFood.push(...visibleFoodBase.slice(0, remainingAfterEjected));
            }
            if (visibleFood.length > maxVisibleFood) {
                visibleFood.length = maxVisibleFood;
            }

            const visibleViruses = [];
            for (const [, v] of this.viruses) {
                if (v.x > minX && v.x < maxX && v.y > minY && v.y < maxY) {
                    visibleViruses.push({
                        id: v.id,
                        x: Math.round(v.x),
                        y: Math.round(v.y),
                        mass: v.mass,
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
                    playerTeamId: this.isTeamsMode() ? player.teamId : null,
                    playerCells: playerCellIds.get(ws),
                    spectating: playerIsSpectating,
                    mapWidth: this.config.mapWidth,
                    mapHeight: this.config.mapHeight,
                    viewCenter: { x: Math.round(cx * 10) / 10, y: Math.round(cy * 10) / 10 },
                    viewScale,
                }));
            } catch (e) {}
        }
    }
}

module.exports = Game;

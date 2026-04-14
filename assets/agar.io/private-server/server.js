const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const fs = require('fs');
const Game = require('./game/Game');
const gameConfig = require('./game.config');

const PORT = process.env.PORT || 3000;
const SKINS_DIR = path.join(__dirname, 'skins');

const SETTINGS_SCHEMA = [
    { key: 'tickRate', label: 'Tick Rate', description: 'Server simulation ticks per second.', type: 'number', min: 15, max: 60, step: 1, group: 'Performance' },
    { key: 'stateBroadcastRate', label: 'Broadcast Rate', description: 'How often world state is sent to clients.', type: 'number', min: 6, max: 60, step: 1, group: 'Performance' },
    { key: 'memoryBudgetMB', label: 'Memory Budget (MB)', description: 'Approximate memory budget used for automatic tuning caps.', type: 'number', min: 128, max: 8192, step: 32, group: 'Performance' },
    { key: 'foodGridCellSize', label: 'Food Grid Cell Size', description: 'Spatial hash bucket size for food collision checks.', type: 'number', min: 80, max: 300, step: 5, group: 'Performance' },
    { key: 'maxFood', label: 'Max Food', description: 'Target number of map food pellets.', type: 'number', min: 100, max: 24000, step: 50, group: 'World' },
    { key: 'maxEjectedFood', label: 'Max Ejected Food', description: 'Maximum live ejected pellets before capping.', type: 'number', min: 100, max: 10000, step: 10, group: 'World' },
    { key: 'maxVisibleFoodPerPlayer', label: 'Visible Food Cap', description: 'Per-player cap for food entries sent each snapshot.', type: 'number', min: 100, max: 50000, step: 10, group: 'Performance' },
    { key: 'maxVisibleCellsPerPlayer', label: 'Visible Cells Cap', description: 'Per-player cap for cell entries sent each snapshot.', type: 'number', min: 100, max: 50000, step: 10, group: 'Performance' },
    { key: 'ejectedLifetimeMs', label: 'Ejected Lifetime (ms)', description: 'How long ejected pellets stay before expiring.', type: 'number', min: 1000, max: 120000, step: 250, group: 'World' },
    { key: 'gameMode', label: 'Game Mode', description: 'Choose free-for-all, team mode, or experimental mode.', type: 'enum', options: ['ffa', 'teams', 'experimental'], group: 'World' },
    { key: 'teamCount', label: 'Team Count', description: 'Number of teams when Team mode is enabled.', type: 'number', min: 2, max: 12, step: 1, group: 'World' },
    { key: 'mapWidth', label: 'Map Width', description: 'World width in game units.', type: 'number', min: 1200, max: 30000, step: 100, group: 'World' },
    { key: 'mapHeight', label: 'Map Height', description: 'World height in game units.', type: 'number', min: 1200, max: 30000, step: 100, group: 'World' },
    { key: 'maxViruses', label: 'Max Viruses', description: 'Target number of stationary viruses.', type: 'number', min: 0, max: 300, step: 1, group: 'Virus' },
    { key: 'maxVirusEntities', label: 'Max Virus Entities', description: 'Hard cap including launched viruses.', type: 'number', min: 1, max: 500, step: 1, group: 'Virus' },
    { key: 'virusBaseMass', label: 'Virus Base Mass', description: 'Base mass for a normal virus.', type: 'number', min: 40, max: 250, step: 1, group: 'Virus' },
    { key: 'virusFeedMassGain', label: 'Virus Feed Gain', description: 'Mass a virus gains per fed pellet.', type: 'number', min: 1, max: 50, step: 1, group: 'Virus' },
    { key: 'virusSplitMass', label: 'Virus Split Mass', description: 'Mass threshold where a fed virus launches a new one.', type: 'number', min: 60, max: 500, step: 1, group: 'Virus' },
    { key: 'virusShotSpeed', label: 'Virus Shot Speed', description: 'Launch speed of new viruses from feeding.', type: 'number', min: 5, max: 90, step: 1, group: 'Virus' },
    { key: 'virusShotFriction', label: 'Virus Shot Friction', description: 'How quickly launched viruses slow down.', type: 'number', min: 0.7, max: 0.98, step: 0.01, group: 'Virus' },
    { key: 'virusEatBonusMass', label: 'Virus Eat Bonus', description: 'Mass bonus when a cell pops a virus by eating it.', type: 'number', min: 0, max: 200, step: 1, group: 'Virus' },
    { key: 'spawnerVirusesInFFA', label: 'Spawner Viruses In FFA', description: 'Enable spawner viruses while in FFA mode.', type: 'boolean', group: 'Virus' },
    { key: 'spawnerVirusChance', label: 'Spawner Virus Chance', description: 'Chance that a spawned virus is a spawner type.', type: 'number', min: 0, max: 1, step: 0.01, group: 'Virus' },
    { key: 'forceSpawnerVirusesInTeams', label: 'Teams Use Pink Viruses Only', description: 'Compatibility flag (strict classic teams keeps green viruses only).', type: 'boolean', group: 'Virus' },
    { key: 'forceSpawnerVirusesInExperimental', label: 'Experimental Uses Pink Viruses', description: 'Force pink spawner viruses in experimental mode.', type: 'boolean', group: 'Virus' },
    { key: 'normalVirusCanKill', label: 'Green Virus Can Kill', description: 'Allow normal green viruses to consume small cells on contact.', type: 'boolean', group: 'Virus' },
    { key: 'spawnerDispenseRate', label: 'Spawner Dispense Rate', description: 'Pellets per second dispensed from stored fed mass.', type: 'number', min: 0.1, max: 4, step: 0.05, group: 'Virus' },
    { key: 'spawnerPassiveRatePerSec', label: 'Spawner Passive Rate', description: 'Passive pellets per second emitted by spawner viruses.', type: 'number', min: 0, max: 6, step: 0.1, group: 'Virus' },
    { key: 'spawnerPelletMass', label: 'Spawner Pellet Mass', description: 'Mass per pellet emitted by spawner viruses.', type: 'number', min: 0.25, max: 6, step: 0.05, group: 'Virus' },
    { key: 'virusSmallCellKillRatio', label: 'Virus Small Kill Ratio', description: 'Cells below this mass ratio are consumed by viruses.', type: 'number', min: 0.1, max: 0.95, step: 0.01, group: 'Virus' },
    { key: 'virusHideRatio', label: 'Virus Hide Ratio', description: 'How deeply players can hide inside a virus body.', type: 'number', min: 0.2, max: 1.4, step: 0.01, group: 'Virus' },
    { key: 'botCount', label: 'Bot Count', description: 'Normal competitive bot count.', type: 'number', min: 0, max: 2000, step: 1, group: 'Bots' },
    { key: 'botSleepThreshold', label: 'Bot Sleep Threshold', description: 'Minimum alive bot count before the sleep/offload system activates. Sleeping bots stop thinking but stay in world.', type: 'number', min: 0, max: 2000, step: 1, group: 'Performance' },
    { key: 'botSleepDistance', label: 'Bot Sleep Distance', description: 'Distance from all humans (in world units) a bot must exceed to be eligible for sleep.', type: 'number', min: 200, max: 8000, step: 50, group: 'Performance' },
    { key: 'botSleepMs', label: 'Bot Sleep Duration (ms)', description: 'Minimum milliseconds a bot stays asleep before re-evaluating wake conditions.', type: 'number', min: 500, max: 15000, step: 100, group: 'Performance' },
    { key: 'deferBotsUntilHumans', label: 'Spawn Bots Only After Player Joins', description: 'When enabled, bots stay unloaded until at least one human is alive.', type: 'boolean', group: 'Bots' },
    { key: 'spectatorBotCount', label: 'Spectator Bot Count', description: 'Support/spectator blobs that follow strong players and feed.', type: 'number', min: 0, max: 500, step: 1, group: 'Bots' },
    { key: 'leaderboardSize', label: 'Leaderboard Size', description: 'How many top players are shown in leaderboard.', type: 'number', min: 5, max: 200, step: 1, group: 'Bots' },
    { key: 'startMass', label: 'Start Mass', description: 'Spawn mass for players.', type: 'number', min: 5, max: 200, step: 1, group: 'Gameplay' },
    { key: 'decayRate', label: 'Decay Rate', description: 'Mass decay per second for larger cells.', type: 'number', min: 0, max: 0.02, step: 0.0001, group: 'Gameplay' },
    { key: 'massRadiusScale', label: 'Mass Radius Scale', description: 'Visual/physical radius multiplier for mass. Lower = smaller cells/viruses.', type: 'number', min: 3.2, max: 8.5, step: 0.01, group: 'Gameplay' },
    { key: 'massRadiusExponent', label: 'Mass Radius Exponent', description: 'How sharply size grows with mass (0.5 is classic sqrt). Lower = smoother growth.', type: 'number', min: 0.35, max: 0.65, step: 0.01, group: 'Gameplay' },
    { key: 'maxCells', label: 'Max Cells', description: 'Maximum cells a player can split into.', type: 'number', min: 2, max: 128, step: 1, group: 'Gameplay' },
    { key: 'minSplitMass', label: 'Min Split Mass', description: 'Minimum mass required to split.', type: 'number', min: 10, max: 500, step: 1, group: 'Gameplay' },
    { key: 'mergeTime', label: 'Merge Time (s)', description: 'Seconds before own split cells can merge.', type: 'number', min: 1, max: 90, step: 1, group: 'Gameplay' },
    { key: 'instaMerge', label: 'Insta-Merge', description: 'When enabled, split cells can recombine almost immediately.', type: 'boolean', group: 'Gameplay' },
    { key: 'allowExperimentalInClassicModes', label: 'Allow Experimental Mechanics In FFA/Teams', description: 'When enabled, experimental pellets/viruses can appear in classic modes too.', type: 'boolean', group: 'Gameplay' },
    { key: 'cellEatMassRatio', label: 'Cell Eat Mass Ratio', description: 'Minimum mass advantage required to consume another player cell.', type: 'number', min: 1.05, max: 2.5, step: 0.01, group: 'Gameplay' },
    { key: 'cellEatCenterInsideRatio', label: 'Cell Eat Center-Inside Ratio', description: 'How deep another cell center must be inside to be consumed (higher = stricter hitbox).', type: 'number', min: 0.1, max: 0.95, step: 0.01, group: 'Gameplay' },
    { key: 'cellEatCoverageRatio', label: 'Cell Eat Coverage Ratio', description: 'Required overlap coverage of the smaller cell before consume can happen.', type: 'number', min: 0.45, max: 0.98, step: 0.01, group: 'Gameplay' },
    { key: 'baseFoodMass', label: 'Base Food Mass', description: 'Mass gained per normal map pellet.', type: 'number', min: 0.1, max: 3, step: 0.01, group: 'Gameplay' },
    { key: 'goldenFoodChance', label: 'Golden Food Chance', description: 'Chance a spawned food pellet becomes a rare golden bonus pellet.', type: 'number', min: 0, max: 0.15, step: 0.001, group: 'Gameplay' },
    { key: 'goldenFoodMass', label: 'Golden Food Mass', description: 'Mass gained from golden food pellets.', type: 'number', min: 0.1, max: 12, step: 0.1, group: 'Gameplay' },
    { key: 'plasmaFoodChance', label: 'Plasma Food Chance', description: 'Chance for cyan plasma pellets (experimental mode by default).', type: 'number', min: 0, max: 0.25, step: 0.001, group: 'Gameplay' },
    { key: 'plasmaFoodMass', label: 'Plasma Food Mass', description: 'Mass gained from cyan plasma pellets.', type: 'number', min: 0.1, max: 12, step: 0.1, group: 'Gameplay' },
    { key: 'ejectedPelletMass', label: 'Ejected Pellet Mass', description: 'Mass value of W-ejected pellets.', type: 'number', min: 1, max: 20, step: 0.1, group: 'Gameplay' },
    { key: 'ejectedPelletCost', label: 'Ejected Pellet Cost', description: 'Mass cost paid by the cell when ejecting.', type: 'number', min: 2, max: 50, step: 0.1, group: 'Gameplay' },
    { key: 'botThinkInterval', label: 'Bot Think Interval (s)', description: 'How frequently bots run full AI thinking.', type: 'number', min: 0.08, max: 1.2, step: 0.01, group: 'Bots' },
    { key: 'botSenseCellScanLimit', label: 'Bot Cell Sense Limit', description: 'Sample size for nearby cell awareness.', type: 'number', min: 120, max: 2200, step: 10, group: 'Bots' },
    { key: 'botSenseFoodSampleLimit', label: 'Bot Food Sense Limit', description: 'Sample size for nearby food awareness.', type: 'number', min: 40, max: 1200, step: 10, group: 'Bots' },
    { key: 'botSenseVirusScanLimit', label: 'Bot Virus Sense Limit', description: 'Sample size for nearby virus awareness.', type: 'number', min: 20, max: 500, step: 5, group: 'Bots' },
    { key: 'botPopulationAdjustIntervalMs', label: 'Bot Population Adjust Interval (ms)', description: 'How frequently bot population is nudged toward target.', type: 'number', min: 250, max: 12000, step: 50, group: 'Bots' },
    { key: 'botPopulationRampPerStep', label: 'Bot Population Ramp Per Step', description: 'How many bots can be added/removed each adjustment step.', type: 'number', min: 1, max: 120, step: 1, group: 'Bots' },
    { key: 'botPopulationHoverMinRatio', label: 'Bot Hover Min Ratio', description: 'Population hovers between this ratio and full bot count target.', type: 'number', min: 0.5, max: 1, step: 0.01, group: 'Bots' },
    { key: 'botPopulationHoverVariance', label: 'Bot Hover Variance', description: 'Extra random variance for hovering bot counts below target.', type: 'number', min: 0, max: 2000, step: 1, group: 'Bots' },
    { key: 'preserveAliveBots', label: 'Preserve Alive Bots', description: 'When enabled, live bots are never despawned during target-count trims.', type: 'boolean', group: 'Bots' },
    { key: 'botSmartChance', label: 'Smart Bot Chance', description: 'Chance a newly spawned bot uses smarter routing behavior.', type: 'number', min: 0, max: 1, step: 0.01, group: 'Bots' },
    { key: 'botSwerveStrength', label: 'Smart Swerve Strength', description: 'How aggressively smart bots curve around threats.', type: 'number', min: 0, max: 1.5, step: 0.01, group: 'Bots' },
    { key: 'botSwerveThreatBuffer', label: 'Swerve Threat Buffer', description: 'Extra threat distance considered when swerving.', type: 'number', min: 20, max: 900, step: 5, group: 'Bots' },
    { key: 'botBoldnessBase', label: 'Bot Boldness Base', description: 'Base chance weight for high-risk offensive behavior.', type: 'number', min: 0, max: 1, step: 0.01, group: 'Bots' },
    { key: 'botSmartnessScale', label: 'Bot Smartness Scale', description: 'Global multiplier for bot tactical intelligence and pathing confidence.', type: 'number', min: 0.2, max: 3, step: 0.01, group: 'Bots' },
    { key: 'botAffectionScale', label: 'Bot Affection Scale', description: 'Global multiplier for social bonding, trust, and teammate loyalty.', type: 'number', min: 0.2, max: 3, step: 0.01, group: 'Bots' },
    { key: 'botBoldnessScale', label: 'Bot Boldness Scale', description: 'Global multiplier for risk-taking and aggressive commitment.', type: 'number', min: 0.2, max: 3, step: 0.01, group: 'Bots' },
    { key: 'botGreedinessScale', label: 'Bot Greediness Scale', description: 'Global multiplier for prey-chasing hunger and opportunistic eating.', type: 'number', min: 0.2, max: 3, step: 0.01, group: 'Bots' },
    { key: 'botSheepishnessScale', label: 'Bot Sheepishness Scale', description: 'Global multiplier for caution, panic, and safety-first behavior.', type: 'number', min: 0.2, max: 3, step: 0.01, group: 'Bots' },
    { key: 'botHumanityScale', label: 'Bot Humanity Scale', description: 'Global multiplier for human-like improvisation and social play.', type: 'number', min: 0.2, max: 3, step: 0.01, group: 'Bots' },
    { key: 'botTrickinessScale', label: 'Bot Trickiness Scale', description: 'Global multiplier for baiting, flanking, and deceptive behavior.', type: 'number', min: 0.2, max: 3, step: 0.01, group: 'Bots' },
    { key: 'botOpportunismScale', label: 'Bot Opportunism Scale', description: 'Global multiplier for punishing weak and split targets.', type: 'number', min: 0.2, max: 3, step: 0.01, group: 'Bots' },
    { key: 'botHerdResistanceScale', label: 'Bot Herd Resistance Scale', description: 'Global multiplier for anti-clump dispersion behavior.', type: 'number', min: 0.2, max: 3, step: 0.01, group: 'Bots' },
    { key: 'botBoldSplitBurstChance', label: 'Bold Split Burst Chance', description: 'Chance bold bots chain extra split attacks.', type: 'number', min: 0, max: 1, step: 0.01, group: 'Bots' },
    { key: 'botPanicRetreatChance', label: 'Panic Retreat Chance', description: 'Chance bots panic-retreat when cornered by threats.', type: 'number', min: 0, max: 1, step: 0.01, group: 'Bots' },
    { key: 'botPanicRetreatMinMass', label: 'Panic Retreat Min Mass', description: 'Minimum mass before panic retreat split bursts are allowed.', type: 'number', min: 20, max: 10000, step: 1, group: 'Bots' },
    { key: 'botPanicRetreatBurstMax', label: 'Panic Retreat Burst Max', description: 'Maximum split bursts used while panic retreating.', type: 'number', min: 1, max: 12, step: 1, group: 'Bots' },
    { key: 'botRiskySplitChance', label: 'Risky Split Chance', description: 'Chance a bot attempts a near-even split kill.', type: 'number', min: 0, max: 1, step: 0.01, group: 'Bots' },
    { key: 'botRiskySplitMassRatio', label: 'Risky Split Mass Ratio', description: 'Required half-mass ratio for risky split attempts.', type: 'number', min: 0.7, max: 1.4, step: 0.01, group: 'Bots' },
    { key: 'botSpawnMassMode', label: 'Bot Spawn Mass Mode', description: 'How new bots choose their spawn mass.', type: 'enum', options: ['varied', 'player_start', 'player_current'], group: 'Bots' },
    { key: 'botRespawnMassMode', label: 'Bot Respawn Mass Mode', description: 'How respawning bots choose their mass.', type: 'enum', options: ['varied', 'player_start', 'player_current'], group: 'Bots' },
    { key: 'botSpawnPlayerMassScale', label: 'Bot Player Mass Scale', description: 'Scale applied to player-referenced spawn modes.', type: 'number', min: 0.1, max: 5, step: 0.05, group: 'Bots' },
    { key: 'moldColonyMode', label: 'Mold Colony Mode', description: 'Force all bots to start at player-start mass for survival mode.', type: 'boolean', group: 'Bots' },
    { key: 'botSkinChance', label: 'Bot Skin Chance', description: 'Chance bots spawn with a random skin.', type: 'number', min: 0, max: 1, step: 0.01, group: 'Bots' },
    { key: 'botHumanAssistChance', label: 'Human Assist Chance', description: 'Chance bots are willing to actively support/feed humans.', type: 'number', min: 0, max: 1, step: 0.01, group: 'Bots' },
    { key: 'botMaxSupportersPerHuman', label: 'Max Supporters Per Human', description: 'Maximum support-role bots allowed to crowd one human target.', type: 'number', min: 1, max: 12, step: 1, group: 'Bots' },
    { key: 'botKamikazeMaxShare', label: 'Max Kamikaze Share', description: 'Maximum fraction of normal bots that can be kamikaze role.', type: 'number', min: 0, max: 1, step: 0.01, group: 'Bots' },
    { key: 'botMergeMaxShare', label: 'Max Merge-Feeder Share', description: 'Maximum fraction of normal bots that can be merge-feeder role.', type: 'number', min: 0, max: 1, step: 0.01, group: 'Bots' },
    { key: 'botGullibleChance', label: 'Gullible Bot Chance', description: 'Chance a bot is socially gullible and forms bonds from feeding.', type: 'number', min: 0, max: 1, step: 0.01, group: 'Bots' },
    { key: 'botGullibleTeamBonus', label: 'Gullible Team Bonus', description: 'Extra pull toward bots that recently fed them.', type: 'number', min: 0, max: 1, step: 0.01, group: 'Bots' },
    { key: 'botHelpMemoryMs', label: 'Help Memory (ms)', description: 'How long bots remember being fed by someone else.', type: 'number', min: 1000, max: 180000, step: 500, group: 'Bots' },
    { key: 'botTeamAssignChance', label: 'Team Assign Chance', description: 'Chance bots attempt to form temporary team bonds.', type: 'number', min: 0, max: 1, step: 0.01, group: 'Bots' },
    { key: 'botTeamDurationMs', label: 'Team Duration (ms)', description: 'How long temporary team bonds last.', type: 'number', min: 2000, max: 60000, step: 250, group: 'Bots' },
    { key: 'botTeamFeedChance', label: 'Team Feed Chance', description: 'Chance a teamed bot feeds partner when able.', type: 'number', min: 0, max: 1, step: 0.01, group: 'Bots' },
    { key: 'botTeamFeedCooldownMs', label: 'Team Feed Cooldown (ms)', description: 'Cooldown between team feeding actions.', type: 'number', min: 200, max: 12000, step: 50, group: 'Bots' },
    { key: 'botTeamSplitChance', label: 'Team Split Chance', description: 'Chance a teamed bot split-feeds partner.', type: 'number', min: 0, max: 1, step: 0.01, group: 'Bots' },
    { key: 'botTeamSplitCooldownMs', label: 'Team Split Cooldown (ms)', description: 'Cooldown between team split-feed actions.', type: 'number', min: 500, max: 30000, step: 100, group: 'Bots' },
    { key: 'crossTeamTeamingChance', label: 'Cross-Team Teaming Chance', description: 'In team mode, chance bots still form a cross-team bond (very low recommended).', type: 'number', min: 0, max: 0.2, step: 0.001, group: 'Bots' },
    { key: 'enableBotTeaming', label: 'Enable Bot Teaming', description: 'Allow bots to form intentional alliances.', type: 'boolean', group: 'Bots' },
    { key: 'botTeamsStickUntilDeath', label: 'Bot Teams Stick Until Death', description: 'Keep allied bots paired until one dies.', type: 'boolean', group: 'Bots' },
    { key: 'botCircleSpitChancePerTick', label: 'Circle Spit Chance', description: 'Random chance per tick for a bot to spit food in a circle.', type: 'number', min: 0, max: 0.02, step: 0.00001, group: 'Events' },
    { key: 'botCircleSpitCooldownMs', label: 'Circle Spit Cooldown (ms)', description: 'Cooldown between circle-spit events per bot.', type: 'number', min: 500, max: 120000, step: 100, group: 'Events' },
    { key: 'botCircleSpitMinMass', label: 'Circle Spit Min Mass', description: 'Minimum bot mass needed for circle spit.', type: 'number', min: 35, max: 15000, step: 1, group: 'Events' },
    { key: 'spectatorFollowHumanChance', label: 'Spectator Human Follow Chance', description: 'Chance spectator blobs prefer following humans over bots.', type: 'number', min: 0, max: 1, step: 0.01, group: 'Events' },
    { key: 'spectatorFeedChance', label: 'Spectator Feed Chance', description: 'Chance a spectator blob feeds its follow target.', type: 'number', min: 0, max: 1, step: 0.01, group: 'Events' },
    { key: 'spectatorFeedCooldownMs', label: 'Spectator Feed Cooldown (ms)', description: 'Cooldown between spectator support feeds.', type: 'number', min: 200, max: 12000, step: 50, group: 'Events' },
    { key: 'spectatorFeedMinMass', label: 'Spectator Feed Min Mass', description: 'Minimum spectator mass needed to feed.', type: 'number', min: 20, max: 3000, step: 1, group: 'Events' },
    { key: 'enableBotChat', label: 'Enable Bot Chat', description: 'Allow bots to send short in-match dialogue lines.', type: 'boolean', group: 'Events' },
    { key: 'botChatChancePerSecond', label: 'Bot Chat Chance/Sec', description: 'Ambient chance per second for bots to post a line.', type: 'number', min: 0, max: 2, step: 0.01, group: 'Events' },
    { key: 'botChatMaxBacklog', label: 'Bot Chat Backlog', description: 'How many recent chat lines the server keeps for clients.', type: 'number', min: 10, max: 400, step: 1, group: 'Events' },
    { key: 'enableBountyPellets', label: 'Enable Bounty Pellets', description: 'Spawn orange bounty pellets near a dominant leader as a comeback mechanic.', type: 'boolean', group: 'Events' },
    { key: 'bountyPelletIntervalMs', label: 'Bounty Interval (ms)', description: 'How often bounty pellets can spawn.', type: 'number', min: 1500, max: 30000, step: 100, group: 'Events' },
    { key: 'bountyPelletMass', label: 'Bounty Pellet Mass', description: 'Mass value of bounty pellets.', type: 'number', min: 0.1, max: 20, step: 0.1, group: 'Events' },
    { key: 'bountyLeaderMinMass', label: 'Bounty Leader Min Mass', description: 'Minimum leader mass before bounty pellets start spawning.', type: 'number', min: 40, max: 25000, step: 1, group: 'Events' },
    { key: 'botVirusWeaponChance', label: 'Virus Weapon Chance', description: 'Chance bots attempt to weaponize viruses against larger targets.', type: 'number', min: 0, max: 1, step: 0.01, group: 'Events' },
    { key: 'botVirusWeaponCooldownMs', label: 'Virus Weapon Cooldown (ms)', description: 'Cooldown between bot virus weapon attempts.', type: 'number', min: 100, max: 20000, step: 50, group: 'Events' },
    { key: 'botVirusWeaponMinMass', label: 'Virus Weapon Min Mass', description: 'Minimum bot mass to attempt virus weapon shots.', type: 'number', min: 20, max: 5000, step: 1, group: 'Events' },
    { key: 'sacrificeToPlayerBots', label: 'Sacrificial Bots', description: 'Enable some bots that hard-commit to getting eaten by human players.', type: 'boolean', group: 'Events' },
    { key: 'sacrificeToPlayerBotChance', label: 'Sacrificial Spawn Chance', description: 'Chance each normal bot spawn is marked sacrificial.', type: 'number', min: 0, max: 1, step: 0.01, group: 'Events' },
    { key: 'sacrificeToPlayerBotMaxShare', label: 'Sacrificial Max Share', description: 'Maximum fraction of normal bots that can be sacrificial.', type: 'number', min: 0, max: 1, step: 0.01, group: 'Events' },
];

const app = express();
app.use(express.json({ limit: '256kb' }));
app.use('/skins', express.static(SKINS_DIR));
app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const defaultsConfig = JSON.parse(JSON.stringify(gameConfig));
const game = new Game(gameConfig);

function listSkins() {
    if (!fs.existsSync(SKINS_DIR)) return [];
    return fs.readdirSync(SKINS_DIR)
        .filter((name) => /\.webp$/i.test(name))
        .sort((a, b) => a.localeCompare(b));
}

function enrichSchema(schema, config, defaults) {
    return schema.map((entry) => ({
        ...entry,
        value: config[entry.key],
        defaultValue: defaults[entry.key],
    }));
}

function sanitizePatch(inputPatch, currentConfig) {
    const patch = {};
    const schemaByKey = new Map(SETTINGS_SCHEMA.map((s) => [s.key, s]));

    for (const [rawKey, rawValue] of Object.entries(inputPatch || {})) {
        const schema = schemaByKey.get(rawKey);
        if (!schema) continue;

        if (schema.type === 'boolean') {
            patch[rawKey] = !!rawValue;
            continue;
        }

        if (schema.type === 'enum') {
            const v = typeof rawValue === 'string' ? rawValue : `${rawValue}`;
            if (schema.options && schema.options.includes(v)) {
                patch[rawKey] = v;
            }
            continue;
        }

        let v = Number(rawValue);
        if (!Number.isFinite(v)) continue;

        if (typeof schema.min === 'number') v = Math.max(schema.min, v);
        if (typeof schema.max === 'number') v = Math.min(schema.max, v);

        if (schema.step && schema.step >= 1) v = Math.round(v);
        patch[rawKey] = v;
    }

    if (patch.maxCells !== undefined) {
        if (currentConfig.botMaxSplitCells !== undefined && patch.maxCells < currentConfig.botMaxSplitCells) {
            patch.botMaxSplitCells = patch.maxCells;
        }
        if (currentConfig.botMinSplitCells !== undefined && patch.maxCells < currentConfig.botMinSplitCells) {
            patch.botMinSplitCells = patch.maxCells;
        }
    }

    return patch;
}

game.setAvailableSkins(listSkins());
game.start();

app.get('/api/bootstrap', (req, res) => {
    const runtime = game.getRuntimeConfig();
    const skins = listSkins();
    game.setAvailableSkins(skins);
    res.json({
        ok: true,
        config: runtime,
        defaults: defaultsConfig,
        settings: enrichSchema(SETTINGS_SCHEMA, runtime, defaultsConfig),
        skins,
    });
});

app.post('/api/config', (req, res) => {
    try {
        const current = game.getRuntimeConfig();
        const patch = sanitizePatch(req.body || {}, current);
        game.updateRuntimeConfig(patch);
        const runtime = game.getRuntimeConfig();
        res.json({
            ok: true,
            config: runtime,
            settings: enrichSchema(SETTINGS_SCHEMA, runtime, defaultsConfig),
            applied: patch,
        });
    } catch (error) {
        res.status(400).json({ ok: false, error: error && error.message ? error.message : 'Failed to update config.' });
    }
});

app.post('/api/config/reset', (req, res) => {
    try {
        game.updateRuntimeConfig(defaultsConfig);
        const runtime = game.getRuntimeConfig();
        res.json({
            ok: true,
            config: runtime,
            settings: enrichSchema(SETTINGS_SCHEMA, runtime, defaultsConfig),
        });
    } catch (error) {
        res.status(400).json({ ok: false, error: error && error.message ? error.message : 'Failed to reset config.' });
    }
});

app.post('/api/world/restart', (req, res) => {
    try {
        game.regenerateWorld();
        const runtime = game.getRuntimeConfig();
        res.json({
            ok: true,
            config: runtime,
            settings: enrichSchema(SETTINGS_SCHEMA, runtime, defaultsConfig),
        });
    } catch (error) {
        res.status(400).json({ ok: false, error: error && error.message ? error.message : 'Failed to regenerate world.' });
    }
});

wss.on('connection', (ws) => {
    game.addPlayer(ws);

    ws.on('message', (data) => {
        try {
            const msg = JSON.parse(data);
            game.handleMessage(ws, msg);
        } catch (e) {
            // ignore malformed
        }
    });

    ws.on('close', () => {
        game.removePlayer(ws);
    });
});

server.listen(PORT, () => {
    console.log(`\n  Agar.io Private Server running at:`);
    console.log(`  -> http://localhost:${PORT}\n`);
});

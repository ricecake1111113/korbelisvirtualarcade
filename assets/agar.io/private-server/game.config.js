// Edit this file to tune gameplay, then restart the server.
// Optional: set GAME_MEMORY_MB env var to match your host memory budget.
const gameConfig = {
    gameMode: 'ffa',
    teamCount: 3,
    maxFood: 2200,
    maxViruses: 20,
    botCount: 32,
    deferBotsUntilHumans: false,
    spectatorBotCount: 1,
    tickRate: 30,
    startMass: 8,
    decayRate: 0.001,
    maxCells: 64,
    minSplitMass: 35,
    mergeTime: 10,
    mapWidth: 5000,
    mapHeight: 5000,
    leaderboardSize: 100,

    // Performance tuning knobs
    memoryBudgetMB: 512,
    stateBroadcastRate: 24,
    maxEjectedFood: 300,
    ejectedLifetimeMs: 20000,
    foodGridCellSize: 140,
    maxVisibleFoodPerPlayer: 650,
    maxVisibleCellsPerPlayer: 450,

    // Bot behavior/perf knobs
    botThinkInterval: 0.28,
    botMinSplitCells: 2,
    botMaxSplitCells: 24,
    botMergeMaxCellsCap: 3,
    botKamikazeMaxCellsCap: 16,
    botSmartChance: 0.5,
    botSwerveStrength: 0.7,
    botSwerveThreatBuffer: 180,
    botBoldnessBase: 0.45,
    botBoldSplitBurstChance: 0.1,
    botPanicRetreatChance: 0.18,
    botPanicRetreatMinMass: 110,
    botPanicRetreatBurstMax: 4,
    botGullibleChance: 0.35,
    botGullibleTeamBonus: 0.28,
    botHelpMemoryMs: 26000,
    botSkinChance: 0.72,
    botHumanAssistChance: 0.08,
    botMaxSupportersPerHuman: 1,
    spectatorFollowHumanChance: 0.45,
    botKamikazeMaxShare: 0.06,
    botMergeMaxShare: 0.08,
    botRiskySplitChance: 0.18,
    botRiskySplitMassRatio: 0.95,
    botVirusHideMass: 160,
    botSenseCellScanLimit: 400,
    botSenseVirusScanLimit: 80,
    botSenseFoodSampleLimit: 150,
    botSpawnMassMode: 'varied',
    botRespawnMassMode: 'player_start',
    botSpawnPlayerMassScale: 1,
    moldColonyMode: false,
    botKamikazeChance: 0.02,
    botMergeFeederChance: 0.03,
    botKamikazeMin: 1,
    botMergeFeederMin: 1,
    botKamikazeFeedMinMass: 60,
    botKamikazeSplitMinMass: 120,
    botKamikazeSplitChance: 0.45,
    botMergeFeedMinMass: 120,
    botMergeSplitMinMass: 220,
    botMergeSplitChance: 0.15,
    botSupportActionCooldownMs: 900,
    botTeamSeekIntervalMs: 2400,
    botTeamAssignChance: 0.26,
    botTeamDurationMs: 26000,
    botTeamMaxDistance: 900,
    botTeamWithHumanChance: 0.16,
    botTeamFeedCooldownMs: 1200,
    botTeamFeedChance: 0.62,
    botTeamFeedMinMass: 70,
    botTeamSplitCooldownMs: 9000,
    botTeamSplitChance: 0.1,
    botTeamSplitMinMass: 180,
    crossTeamTeamingChance: 0.001,
    enableBotTeaming: true,
    botTeamsStickUntilDeath: true,
    botCircleSpitChancePerTick: 0.00003,
    botCircleSpitCooldownMs: 26000,
    botCircleSpitMinMass: 220,
    botCircleSpitPelletsMin: 6,
    botCircleSpitPelletsMax: 12,
    spectatorFeedCooldownMs: 2400,
    spectatorFeedChance: 0.4,
    spectatorFeedMinMass: 55,

    // Virus mechanics
    virusBaseMass: 100,
    virusFeedMassGain: 14,
    virusSplitMass: 220,
    virusShotSpeed: 30,
    virusShotFriction: 0.9,
    virusEatBonusMass: 18,
    maxVirusEntities: 60,
    spawnerVirusesInFFA: false,
    spawnerVirusChance: 0.22,
    forceSpawnerVirusesInTeams: true,
    normalVirusCanKill: false,
    spawnerDispenseRate: 0.45,
    spawnerPassiveRatePerSec: 1,
    spawnerPelletMass: 0.7,
    virusSmallCellKillRatio: 0.52,
    virusHideRatio: 0.9,
    botVirusWeaponChance: 0.22,
    botVirusWeaponCooldownMs: 2600,
    botVirusWeaponMinMass: 80,
    sacrificeToPlayerBots: false,
    sacrificeToPlayerBotChance: 0.08,
    sacrificeToPlayerBotMaxShare: 0.15,
};

const requiredKeys = [
    'maxFood',
    'maxViruses',
    'botCount',
    'tickRate',
    'startMass',
    'decayRate',
    'maxCells',
    'minSplitMass',
    'mergeTime',
    'mapWidth',
    'mapHeight',
];

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function clampInt(value, min, max) {
    return Math.round(clamp(value, min, max));
}

function valueOr(value, fallback) {
    return value === undefined || value === null ? fallback : value;
}

function applyNote(tuned, notes, key, value) {
    if (tuned[key] !== value) {
        notes.push(`${key}: ${tuned[key]} -> ${value}`);
    }
    tuned[key] = value;
}

for (const key of requiredKeys) {
    const value = gameConfig[key];
    if (typeof value !== 'number' || Number.isNaN(value)) {
        throw new Error(`[game.config] "${key}" must be a number. Received: ${value}`);
    }
}

function applyPerformanceBudget(baseConfig) {
    const tuned = { ...baseConfig };
    const notes = [];

    const envBudget = Number(process.env.GAME_MEMORY_MB);
    const rawBudget = Number.isFinite(envBudget) && envBudget > 0
        ? envBudget
        : baseConfig.memoryBudgetMB;
    const memoryBudgetMB = clampInt(rawBudget, 128, 8192);
    applyNote(tuned, notes, 'memoryBudgetMB', memoryBudgetMB);
    applyNote(tuned, notes, 'gameMode', tuned.gameMode === 'teams' ? 'teams' : 'ffa');
    applyNote(tuned, notes, 'teamCount', clampInt(valueOr(tuned.teamCount, 3), 2, 12));

    const areaScale = Math.sqrt((tuned.mapWidth * tuned.mapHeight) / (5000 * 5000));
    const budgetScale = clamp(memoryBudgetMB / 512, 0.35, 4);

    const maxFoodCap = Math.max(800, clampInt(5000 * budgetScale * areaScale, 800, 18000));
    const botCap = Math.max(12, clampInt(120 * budgetScale * areaScale, 12, 260));
    const virusCap = Math.max(10, clampInt(40 * budgetScale * areaScale, 10, 200));
    const tickCap = memoryBudgetMB < 384 ? 30 : (memoryBudgetMB < 1024 ? 40 : 50);

    applyNote(tuned, notes, 'maxFood', clampInt(tuned.maxFood, 100, maxFoodCap));
    applyNote(tuned, notes, 'botCount', clampInt(tuned.botCount, 0, botCap));
    applyNote(tuned, notes, 'deferBotsUntilHumans', !!tuned.deferBotsUntilHumans);
    applyNote(tuned, notes, 'maxViruses', clampInt(tuned.maxViruses, 0, virusCap));
    applyNote(tuned, notes, 'tickRate', clampInt(tuned.tickRate, 15, tickCap));

    const crowdScale = clamp(Math.max(1, tuned.botCount) / 40, 1, 5);
    const defaultLeaderboard = Math.max(10, Math.min(100, tuned.botCount || 10));
    const defaultBotMaxSplitCells = Math.max(6, Math.min(tuned.maxCells, Math.round(20 / crowdScale + 8)));
    const defaultCellSense = Math.round(900 / crowdScale);
    const defaultFoodSense = Math.round(280 / crowdScale);
    const defaultVirusSense = Math.round(130 / Math.sqrt(crowdScale));

    applyNote(tuned, notes, 'leaderboardSize', clampInt(tuned.leaderboardSize || defaultLeaderboard, 5, 200));
    applyNote(tuned, notes, 'stateBroadcastRate', clampInt(tuned.stateBroadcastRate || Math.min(20, tuned.tickRate), 6, tuned.tickRate));
    applyNote(tuned, notes, 'foodGridCellSize', clampInt(tuned.foodGridCellSize || 140, 80, 280));
    applyNote(tuned, notes, 'ejectedLifetimeMs', clampInt(tuned.ejectedLifetimeMs || 20000, 5000, 120000));
    applyNote(
        tuned,
        notes,
        'maxEjectedFood',
        clampInt(
            tuned.maxEjectedFood || Math.round(tuned.maxFood * 0.35),
            100,
            Math.max(300, Math.round(tuned.maxFood * 0.6))
        )
    );
    applyNote(
        tuned,
        notes,
        'maxVisibleFoodPerPlayer',
        clampInt(
            valueOr(tuned.maxVisibleFoodPerPlayer, Math.round(1800 * budgetScale)),
            200,
            Math.max(600, tuned.maxFood)
        )
    );
    applyNote(
        tuned,
        notes,
        'maxVisibleCellsPerPlayer',
        clampInt(
            valueOr(tuned.maxVisibleCellsPerPlayer, Math.round(1200 * budgetScale)),
            100,
            Math.max(300, (tuned.botCount + 1) * Math.max(1, tuned.maxCells))
        )
    );

    applyNote(tuned, notes, 'botThinkInterval', clamp(valueOr(tuned.botThinkInterval, 0.24), 0.08, 0.8));
    applyNote(tuned, notes, 'spectatorBotCount', clampInt(tuned.spectatorBotCount || 0, 0, 16));
    applyNote(tuned, notes, 'botSmartChance', clamp(valueOr(tuned.botSmartChance, 0.5), 0, 1));
    applyNote(tuned, notes, 'botSwerveStrength', clamp(valueOr(tuned.botSwerveStrength, 0.7), 0, 1.5));
    applyNote(tuned, notes, 'botSwerveThreatBuffer', clampInt(tuned.botSwerveThreatBuffer || 180, 20, 900));
    applyNote(tuned, notes, 'botBoldnessBase', clamp(valueOr(tuned.botBoldnessBase, 0.45), 0, 1));
    applyNote(tuned, notes, 'botBoldSplitBurstChance', clamp(valueOr(tuned.botBoldSplitBurstChance, 0.1), 0, 1));
    applyNote(tuned, notes, 'botPanicRetreatChance', clamp(valueOr(tuned.botPanicRetreatChance, 0.18), 0, 1));
    applyNote(tuned, notes, 'botPanicRetreatMinMass', clampInt(valueOr(tuned.botPanicRetreatMinMass, 110), 20, 10000));
    applyNote(tuned, notes, 'botPanicRetreatBurstMax', clampInt(valueOr(tuned.botPanicRetreatBurstMax, 4), 1, 12));
    applyNote(tuned, notes, 'botRiskySplitChance', clamp(valueOr(tuned.botRiskySplitChance, 0.18), 0, 1));
    applyNote(tuned, notes, 'botRiskySplitMassRatio', clamp(valueOr(tuned.botRiskySplitMassRatio, 0.95), 0.7, 1.4));
    applyNote(tuned, notes, 'botGullibleChance', clamp(valueOr(tuned.botGullibleChance, 0.35), 0, 1));
    applyNote(tuned, notes, 'botGullibleTeamBonus', clamp(valueOr(tuned.botGullibleTeamBonus, 0.28), 0, 1));
    applyNote(tuned, notes, 'botHelpMemoryMs', clampInt(tuned.botHelpMemoryMs || 26000, 1000, 180000));
    applyNote(tuned, notes, 'botSkinChance', clamp(valueOr(tuned.botSkinChance, 0.72), 0, 1));
    applyNote(tuned, notes, 'botHumanAssistChance', clamp(valueOr(tuned.botHumanAssistChance, 0.2), 0, 1));
    applyNote(tuned, notes, 'botMaxSupportersPerHuman', clampInt(valueOr(tuned.botMaxSupportersPerHuman, 2), 1, 12));
    applyNote(tuned, notes, 'spectatorFollowHumanChance', clamp(valueOr(tuned.spectatorFollowHumanChance, 0.45), 0, 1));
    applyNote(tuned, notes, 'botKamikazeMaxShare', clamp(valueOr(tuned.botKamikazeMaxShare, 0.06), 0, 1));
    applyNote(tuned, notes, 'botMergeMaxShare', clamp(valueOr(tuned.botMergeMaxShare, 0.08), 0, 1));
    applyNote(tuned, notes, 'botVirusHideMass', clampInt(tuned.botVirusHideMass || 160, 20, 1200));
    applyNote(tuned, notes, 'botSenseCellScanLimit', clampInt(tuned.botSenseCellScanLimit || defaultCellSense, 120, 2200));
    applyNote(tuned, notes, 'botSenseFoodSampleLimit', clampInt(tuned.botSenseFoodSampleLimit || defaultFoodSense, 40, 900));
    applyNote(tuned, notes, 'botSenseVirusScanLimit', clampInt(tuned.botSenseVirusScanLimit || defaultVirusSense, 20, 400));
    applyNote(tuned, notes, 'botMinSplitCells', clampInt(tuned.botMinSplitCells || 2, 1, Math.max(1, tuned.maxCells)));
    applyNote(tuned, notes, 'botMaxSplitCells', clampInt(tuned.botMaxSplitCells || defaultBotMaxSplitCells, 1, Math.max(1, tuned.maxCells)));
    applyNote(tuned, notes, 'botTeamSeekIntervalMs', clampInt(tuned.botTeamSeekIntervalMs || 2400, 300, 10000));
    applyNote(tuned, notes, 'botTeamAssignChance', clamp(valueOr(tuned.botTeamAssignChance, 0.14), 0, 1));
    applyNote(tuned, notes, 'botTeamDurationMs', clampInt(tuned.botTeamDurationMs || 18000, 2000, 60000));
    applyNote(tuned, notes, 'botTeamMaxDistance', clampInt(tuned.botTeamMaxDistance || 900, 200, Math.max(tuned.mapWidth, tuned.mapHeight)));
    applyNote(tuned, notes, 'botTeamWithHumanChance', clamp(valueOr(tuned.botTeamWithHumanChance, 0.2), 0, 1));
    applyNote(tuned, notes, 'botTeamFeedCooldownMs', clampInt(tuned.botTeamFeedCooldownMs || 1800, 200, 10000));
    applyNote(tuned, notes, 'botTeamFeedChance', clamp(valueOr(tuned.botTeamFeedChance, 0.4), 0, 1));
    applyNote(tuned, notes, 'botTeamFeedMinMass', clampInt(tuned.botTeamFeedMinMass || 85, 20, 5000));
    applyNote(tuned, notes, 'botTeamSplitCooldownMs', clampInt(tuned.botTeamSplitCooldownMs || 9000, 500, 20000));
    applyNote(tuned, notes, 'botTeamSplitChance', clamp(valueOr(tuned.botTeamSplitChance, 0.1), 0, 1));
    applyNote(tuned, notes, 'botTeamSplitMinMass', clampInt(tuned.botTeamSplitMinMass || 180, 35, 10000));
    applyNote(tuned, notes, 'crossTeamTeamingChance', clamp(valueOr(tuned.crossTeamTeamingChance, 0.001), 0, 0.2));
    applyNote(tuned, notes, 'enableBotTeaming', tuned.enableBotTeaming !== false);
    applyNote(tuned, notes, 'botTeamsStickUntilDeath', tuned.botTeamsStickUntilDeath !== false);
    applyNote(tuned, notes, 'botCircleSpitChancePerTick', clamp(valueOr(tuned.botCircleSpitChancePerTick, 0.00003), 0, 0.02));
    applyNote(tuned, notes, 'botCircleSpitCooldownMs', clampInt(tuned.botCircleSpitCooldownMs || 26000, 500, 120000));
    applyNote(tuned, notes, 'botCircleSpitMinMass', clampInt(tuned.botCircleSpitMinMass || 220, 35, 10000));
    applyNote(tuned, notes, 'botCircleSpitPelletsMin', clampInt(tuned.botCircleSpitPelletsMin || 6, 1, 32));
    applyNote(tuned, notes, 'botCircleSpitPelletsMax', clampInt(tuned.botCircleSpitPelletsMax || 12, 1, 64));
    applyNote(tuned, notes, 'spectatorFeedCooldownMs', clampInt(tuned.spectatorFeedCooldownMs || 2400, 200, 12000));
    applyNote(tuned, notes, 'spectatorFeedChance', clamp(valueOr(tuned.spectatorFeedChance, 0.4), 0, 1));
    applyNote(tuned, notes, 'spectatorFeedMinMass', clampInt(tuned.spectatorFeedMinMass || 55, 20, 2000));
    applyNote(tuned, notes, 'botMergeMaxCellsCap', clampInt(tuned.botMergeMaxCellsCap || 3, 1, Math.max(1, tuned.maxCells)));
    applyNote(tuned, notes, 'botKamikazeMaxCellsCap', clampInt(tuned.botKamikazeMaxCellsCap || tuned.maxCells, 1, Math.max(1, tuned.maxCells)));
    applyNote(tuned, notes, 'botSpawnPlayerMassScale', clamp(tuned.botSpawnPlayerMassScale || 1, 0.1, 5));
    applyNote(tuned, notes, 'botKamikazeChance', clamp(valueOr(tuned.botKamikazeChance, 0.02), 0, 1));
    applyNote(tuned, notes, 'botMergeFeederChance', clamp(valueOr(tuned.botMergeFeederChance, 0.03), 0, 1));
    applyNote(tuned, notes, 'botKamikazeMin', clampInt(tuned.botKamikazeMin || 0, 0, Math.max(0, tuned.botCount)));
    applyNote(tuned, notes, 'botMergeFeederMin', clampInt(tuned.botMergeFeederMin || 0, 0, Math.max(0, tuned.botCount)));
    applyNote(tuned, notes, 'botKamikazeFeedMinMass', clampInt(tuned.botKamikazeFeedMinMass || 60, 20, 5000));
    applyNote(tuned, notes, 'botKamikazeSplitMinMass', clampInt(tuned.botKamikazeSplitMinMass || 120, 35, 10000));
    applyNote(tuned, notes, 'botKamikazeSplitChance', clamp(valueOr(tuned.botKamikazeSplitChance, 0.45), 0, 1));
    applyNote(tuned, notes, 'sacrificeToPlayerBots', !!tuned.sacrificeToPlayerBots);
    applyNote(tuned, notes, 'sacrificeToPlayerBotChance', clamp(valueOr(tuned.sacrificeToPlayerBotChance, 0.08), 0, 1));
    applyNote(tuned, notes, 'sacrificeToPlayerBotMaxShare', clamp(valueOr(tuned.sacrificeToPlayerBotMaxShare, 0.15), 0, 1));
    applyNote(tuned, notes, 'botMergeFeedMinMass', clampInt(tuned.botMergeFeedMinMass || 120, 20, 5000));
    applyNote(tuned, notes, 'botMergeSplitMinMass', clampInt(tuned.botMergeSplitMinMass || 220, 35, 10000));
    applyNote(tuned, notes, 'botMergeSplitChance', clamp(valueOr(tuned.botMergeSplitChance, 0.15), 0, 1));
    applyNote(tuned, notes, 'botSupportActionCooldownMs', clampInt(tuned.botSupportActionCooldownMs || 900, 100, 15000));

    if (tuned.botMinSplitCells > tuned.botMaxSplitCells) {
        notes.push(`botMinSplitCells: ${tuned.botMinSplitCells} -> ${tuned.botMaxSplitCells}`);
        tuned.botMinSplitCells = tuned.botMaxSplitCells;
    }

    if (tuned.botCircleSpitPelletsMin > tuned.botCircleSpitPelletsMax) {
        notes.push(`botCircleSpitPelletsMin: ${tuned.botCircleSpitPelletsMin} -> ${tuned.botCircleSpitPelletsMax}`);
        tuned.botCircleSpitPelletsMin = tuned.botCircleSpitPelletsMax;
    }

    const allowedSpawnModes = ['varied', 'player_start', 'player_current'];
    if (!allowedSpawnModes.includes(tuned.botSpawnMassMode)) {
        notes.push(`botSpawnMassMode: ${tuned.botSpawnMassMode} -> varied`);
        tuned.botSpawnMassMode = 'varied';
    }
    if (!allowedSpawnModes.includes(tuned.botRespawnMassMode)) {
        notes.push(`botRespawnMassMode: ${tuned.botRespawnMassMode} -> player_start`);
        tuned.botRespawnMassMode = 'player_start';
    }
    tuned.moldColonyMode = !!tuned.moldColonyMode;

    applyNote(tuned, notes, 'virusBaseMass', clampInt(tuned.virusBaseMass || 100, 40, 250));
    applyNote(tuned, notes, 'virusFeedMassGain', clampInt(tuned.virusFeedMassGain || 14, 1, 50));
    applyNote(tuned, notes, 'virusShotSpeed', clamp(tuned.virusShotSpeed || 30, 5, 90));
    applyNote(tuned, notes, 'virusShotFriction', clamp(tuned.virusShotFriction || 0.9, 0.7, 0.98));
    applyNote(tuned, notes, 'virusEatBonusMass', clampInt(tuned.virusEatBonusMass || 18, 0, 120));
    applyNote(tuned, notes, 'spawnerVirusesInFFA', !!tuned.spawnerVirusesInFFA);
    applyNote(tuned, notes, 'spawnerVirusChance', clamp(valueOr(tuned.spawnerVirusChance, 0.22), 0, 1));
    applyNote(tuned, notes, 'forceSpawnerVirusesInTeams', tuned.forceSpawnerVirusesInTeams !== false);
    applyNote(tuned, notes, 'normalVirusCanKill', !!tuned.normalVirusCanKill);
    applyNote(tuned, notes, 'spawnerDispenseRate', clamp(valueOr(tuned.spawnerDispenseRate, 0.45), 0.1, 4));
    applyNote(tuned, notes, 'spawnerPassiveRatePerSec', clamp(valueOr(tuned.spawnerPassiveRatePerSec, 1), 0, 6));
    applyNote(tuned, notes, 'spawnerPelletMass', clamp(valueOr(tuned.spawnerPelletMass, 0.7), 0.25, 6));
    applyNote(tuned, notes, 'virusSmallCellKillRatio', clamp(valueOr(tuned.virusSmallCellKillRatio, 0.52), 0.1, 0.95));
    applyNote(tuned, notes, 'virusHideRatio', clamp(valueOr(tuned.virusHideRatio, 0.9), 0.2, 1.4));
    applyNote(tuned, notes, 'botVirusWeaponChance', clamp(valueOr(tuned.botVirusWeaponChance, 0.22), 0, 1));
    applyNote(tuned, notes, 'botVirusWeaponCooldownMs', clampInt(valueOr(tuned.botVirusWeaponCooldownMs, 2600), 100, 20000));
    applyNote(tuned, notes, 'botVirusWeaponMinMass', clampInt(valueOr(tuned.botVirusWeaponMinMass, 80), 20, 5000));
    applyNote(
        tuned,
        notes,
        'virusSplitMass',
        clampInt(
            tuned.virusSplitMass || 220,
            tuned.virusBaseMass + 10,
            500
        )
    );
    applyNote(
        tuned,
        notes,
        'maxVirusEntities',
        clampInt(
            tuned.maxVirusEntities || (tuned.maxViruses * 2),
            Math.max(1, tuned.maxViruses),
            Math.max(tuned.maxViruses, virusCap * 4)
        )
    );

    if (notes.length > 0) {
        console.log('[game.config] Performance tuning applied:');
        for (const note of notes) {
            console.log(`  - ${note}`);
        }
    }

    return tuned;
}

module.exports = applyPerformanceBudget(gameConfig);

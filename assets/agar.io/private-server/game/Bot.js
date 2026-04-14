const CLASSIC_NAMES = [
    'AgarMaster', 'CellFrenzy', 'Mitosis', 'GobbleKing', 'Blobfish', 'Amoeba', 'hella', 'jah pull off',
    'Jellyblob', 'Cellotape', 'Muncher', 'Gulp', 'Wobble', 'Squishy', 'Candy', 'www.sites.google.com/site/korbelisvirtualarcade/',
    'Plankton', 'Slurp', 'NomNom', 'Goliath', 'Pebble', 'Kraken', 'PETER GRIFFIN', 'IHATEAGARIO', 'smashingpumpkins',
    'Bubbles', 'Chomp', 'Nucleus', 'Membrane', 'Proteus', 'Jelly', 'nadda', 'MATH', 'Juice wrld', 'Igotracksnow',
    'Gloop', 'Titan', 'Morsel', 'Osmosis', 'Leviathan', 'Droplet', 'Agar.io', 'super8', 'team?', 'rhonda?',
    'Cytoplasm', 'Gluttony', 'Nibbles', 'Drifter', 'Orbit', 'Flux', 'agar', 'cupid', 'INDIA', 'NETTSPEND?',
    'VirusHugger', 'SplitLord', 'BaitNRun', 'LuckySpawn', 'mapControl', 'agar.io', 'motel', 'AURA', 'team?',
    'SirEatsAlot', 'HungryHippo', 'TinyTerror', 'MacroMunch', 'SneakSplit', 'retep', '10', 'anderdingus', 'fatboy',
 	   'chungus', 'bigchungus', 'okchungus',
    	'skillissue', 'justlucky', 'nottrying', 'tryhard?',
  	  'afk', 'afkbrb', 'lagging', 'lag?', 'ping999',
   	 'realplayer', 'human', 'notabot', 'definitelynotabot',
  	  'whoami', 'idk', 'whatever', 'meh',
  	  'dontsplit', 'trustme', 'feedme', 'plsno',
  	  'almost', 'so_close', 'again', 'retry',
  	  'spectator', 'queuedwrong', 'wrongserver',
 	   'alt', 'main', 'backup', 'throwaway',
 	   'void', 'ghost', 'shadow', 'drift',
 	   'lowkey', 'highkey', 'fr', 'frfr',
 	   'nah', 'nahidwin', 'maybe', 'sure', 'Bot',
	'bro', 'dude', 'man', 'guy', 'eat = gay',
 	   'npc', 'sidecharacter', 'background',
 	   'default', 'username', 'player',
 	   'eatme', 'dont', 'stop', 'wait',
 	   'tiny', 'big', 'bigger', 'small',
  	  'cell', 'blob', 'mass', 'split',
 	   'uhh', 'huh', 'what', 'why',
];

const CHARACTER_NAMES = [
    'Goku', 'Vegeta', 'Luffy', 'Zoro', 'Sasuke', 'Itachi', 'Levi', 'Mikasa',
    'Gojo', 'Megumi', 'Naruto', 'Asta', 'Rukia', 'Ichigo', 'Denji', 'Power',
    'Piccolo', 'Kratos', 'Geralt', 'Kirby', 'MewTwo', 'ZeroTwo', 'Toji', 'sonic',
];

const MULTILINGUAL_NAMES = [
    '山田太郎', 'さくら', 'ドラゴン', '海賊王', 'こんにちは',
    'Лиса', 'Волк', 'Космос', 'Призрак',
    'عابر', 'سريع', 'سلام', 'نجمة', 'مرحبا',
    'नमस्ते', 'बाज़', 'ध्रुव',
    'Δέλτα', 'Αίολος', 'SeñorBlob', 'Français',
];

const SYMBOL_NAMES = [
    '( ͡° ͜ʖ ͡°)', '¯\\_(ツ)_/¯', '༼ つ ◕_◕ ༽つ', 'ಠ_ಠ', '✧･ﾟ: *✧･ﾟ:*','👀👀👀👀👀👀👀👀👀',
    '⚡⚡⚡', '☯︎✦', '∞∞∞', '???', '.....', '______', '[[[[[]]]]]', '🏳️‍🌈🏳️‍🌈🏳️‍🌈',
    'qwertyuiop', 'asdfghjkl', 'zxcvbnm', 'lmao420', 'noob.exe', 'packet_loss',
    'xX_Destroyer_Xx', 'ctrl+alt+del', '﷽﷽ ﷽ ﷽', 'MRBREAST',
];

const THROWBACK_NAMES = [
    'SSundee', 'SkyDoes', 'DanTDM', 'AliA', 'pewdiepie', 'Vanoss', 'Wun Wun', 'slogoman', 'mrbeast', 'MrBeast',
];

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

class Bot {
    constructor(game) {
        this.id = game.generateId();
        this.name = this.pickName();
        this.cells = [];
        this.color = game.randomColor();
        this.skin = null;
        this.target = { x: 0, y: 0 };
        this.desiredTarget = { x: 0, y: 0 };
        this.isBot = true;
        this.alive = false;
        this.score = 0;
        this.ws = null;

        this.aggression = 0.25 + Math.random() * 0.75;
        this.caution = 0.25 + Math.random() * 0.75;
        this.splitThreshold = 0.22 + Math.random() * 0.38;
        this.virusAwareness = 0.4 + Math.random() * 0.6;

        const smartChance = game.config.botSmartChance ?? 0.5;
        const baseSmart = Math.random() < smartChance ? 0.6 : 0.15;
        this.smartness = baseSmart + Math.random() * 0.35;
        this.swerveStrength = (game.config.botSwerveStrength ?? 0.7) * (0.7 + Math.random() * 0.6);
        this.boldness = clamp((game.config.botBoldnessBase ?? 0.45) + (Math.random() - 0.5) * 0.25, 0, 1);

        const gullibleChance = game.config.botGullibleChance ?? 0.35;
        this.isGullible = Math.random() < gullibleChance;
        this.gullibility = this.isGullible ? (0.55 + Math.random() * 0.45) : (0.08 + Math.random() * 0.18);
        this.recentBenefactorId = null;
        this.recentHelpUntil = 0;
        this.humanAssistChance = game.config.botHumanAssistChance ?? 0.2;
        this.maxSupportersPerHuman = game.config.botMaxSupportersPerHuman ?? 2;
        this.spectatorFollowHumanChance = game.config.spectatorFollowHumanChance ?? 0.45;
        this.likesHelpingHumans = Math.random() < this.humanAssistChance;
        this.prefersHumanSpectate = Math.random() < this.spectatorFollowHumanChance;

        const minSplitCells = Math.max(1, Math.min(game.config.maxCells, game.config.botMinSplitCells ?? 2));
        const maxSplitCells = Math.max(minSplitCells, Math.min(game.config.maxCells, game.config.botMaxSplitCells ?? game.config.maxCells));
        this.maxCellsCap = minSplitCells + Math.floor(Math.random() * (maxSplitCells - minSplitCells + 1));

        this.role = 'normal';
        this.selectRole(game.config);

        this.baseAggression = this.aggression;
        this.baseCaution = this.caution;
        this.baseSplitThreshold = this.splitThreshold;
        this.baseVirusAwareness = this.virusAwareness;
        this.baseSmartness = this.smartness;
        this.baseBoldness = this.boldness;
        this.baseAffection = 0.22 + Math.random() * 0.88;
        this.baseGreediness = 0.25 + Math.random() * 0.9;
        this.baseSheepishness = 0.2 + Math.random() * 0.9;
        this.baseHumanity = 0.2 + Math.random() * 0.9;
        this.baseTrickiness = 0.12 + Math.random() * 1.05;
        this.baseOpportunism = 0.28 + Math.random() * 0.95;
        this.baseHerdResistance = 0.22 + Math.random() * 1.1;
        this.affection = this.baseAffection;
        this.greediness = this.baseGreediness;
        this.sheepishness = this.baseSheepishness;
        this.humanity = this.baseHumanity;
        this.trickiness = this.baseTrickiness;
        this.opportunism = this.baseOpportunism;
        this.herdResistance = this.baseHerdResistance;
        this.sneakiness = 0.4;
        this.betrayChance = 0.03;

        this.virusHideMass = game.config.botVirusHideMass ?? 150;
        this.hideUnderVirusChance = 0.35 + Math.random() * 0.5;

        this.wanderAngle = Math.random() * Math.PI * 2;
        this.wanderTimer = 0;
        this.thinkCooldown = 0;
        this.splitCooldown = 0;
        this.supportCooldown = 0;
        this.virusWeaponCooldown = 0;

        this.baseThinkInterval = game.config.botThinkInterval ?? 0.24;
        this.targetLerp = 0.04 + Math.random() * 0.06;

        this.teamPartnerId = null;
        this.teamExpiresAt = 0;
        this.nextTeamSeekAt = 0;
        this.lastTeamFeedAt = 0;
        this.lastTeamSplitAt = 0;
        this.lastCircleSpitAt = 0;
        this.forceSacrificeToHuman = false;
        this.betrayCooldownUntil = 0;
        this.retreatLockUntil = 0;
        this.retreatPolarity = Math.random() < 0.5 ? -1 : 1;
        this.nextChatAt = 0;
        this.escapeTarget = null;
        this.escapeTargetUntil = 0;
        this.cornerIndex = Math.floor(Math.random() * 4);
        this.cornerCampUntil = 0;
        this.cornerCampChance = 0.025 + Math.random() * 0.08;
        this.roamTarget = null;
        this.roamTargetRefreshAt = 0;
        // Spread bots across the full map on construction — bias toward the outer 60%
        // so they don't all converge on the center at spawn.
        const spreadX = Math.random() < 0.5
            ? game.config.mapWidth  * (0.06 + Math.random() * 0.38)   // left band
            : game.config.mapWidth  * (0.56 + Math.random() * 0.38);  // right band
        const spreadY = Math.random() < 0.5
            ? game.config.mapHeight * (0.06 + Math.random() * 0.38)
            : game.config.mapHeight * (0.56 + Math.random() * 0.38);
        this.homeAnchor = { x: spreadX, y: spreadY };
        this.homeAnchorRefreshAt = Date.now() + 12000 + Math.random() * 18000;

        this.applyPersonalityScales(game, true);
    }

    pickName() {
        if (Math.random() < 0.13) return '';

        const roll = Math.random();
        let pool = CLASSIC_NAMES;
        if (roll < 0.26) pool = CHARACTER_NAMES;
        else if (roll < 0.48) pool = MULTILINGUAL_NAMES;
        else if (roll < 0.74) pool = SYMBOL_NAMES;
        else if (roll < 0.82) pool = THROWBACK_NAMES;

        const base = pool[Math.floor(Math.random() * pool.length)] || '';
        if (!base) return '';

        const asciiOnly = /^[\w.\-+]+$/.test(base);
        if (asciiOnly && Math.random() < 0.25) {
            return `${base}${Math.floor(Math.random() * 90 + 10)}`;
        }
        return base;
    }

    setRole(role, config) {
        this.role = role;
        if (role === 'merge_feeder') {
            const mergeCap = Math.max(1, Math.min(config.maxCells, config.botMergeMaxCellsCap ?? 3));
            this.maxCellsCap = Math.min(this.maxCellsCap, mergeCap);
        }
        if (role === 'kamikaze_feeder') {
            const kamikazeCap = Math.max(1, Math.min(config.maxCells, config.botKamikazeMaxCellsCap ?? config.maxCells));
            this.maxCellsCap = Math.min(this.maxCellsCap, kamikazeCap);
        }
        if (role === 'spectator_support') {
            this.maxCellsCap = 1;
            this.aggression = 0.08 + Math.random() * 0.12;
            this.caution = 0.65 + Math.random() * 0.3;
            this.forceSacrificeToHuman = false;
        }
    }

    selectRole(config) {
        const kamikazeChance = Math.max(0, Math.min(1, config.botKamikazeChance ?? 0));
        const mergeChance = Math.max(0, Math.min(1, config.botMergeFeederChance ?? 0));
        const roll = Math.random();

        if (roll < kamikazeChance) {
            this.setRole('kamikaze_feeder', config);
            return;
        }
        if (roll < kamikazeChance + mergeChance) {
            this.setRole('merge_feeder', config);
            return;
        }
        this.setRole('normal', config);
    }

    applyPersonalityScales(game, refreshDisposition = false) {
        const smartScale = game.botSmartnessScale ?? game.config.botSmartnessScale ?? 1;
        const affectionScale = game.botAffectionScale ?? game.config.botAffectionScale ?? 1;
        const boldScale = game.botBoldnessScale ?? game.config.botBoldnessScale ?? 1;
        const greedScale = game.botGreedinessScale ?? game.config.botGreedinessScale ?? 1;
        const sheepScale = game.botSheepishnessScale ?? game.config.botSheepishnessScale ?? 1;
        const humanityScale = game.botHumanityScale ?? game.config.botHumanityScale ?? 1;
        const trickScale = game.botTrickinessScale ?? game.config.botTrickinessScale ?? 1;
        const opportunismScale = game.botOpportunismScale ?? game.config.botOpportunismScale ?? 1;
        const herdScale = game.botHerdResistanceScale ?? game.config.botHerdResistanceScale ?? 1;

        this.smartness = clamp((this.baseSmartness ?? this.smartness ?? 0.45) * smartScale, 0.05, 1.8);
        this.affection = clamp((this.baseAffection ?? this.affection ?? 0.7) * affectionScale, 0.05, 2.2);
        this.boldness = clamp((this.baseBoldness ?? this.boldness ?? 0.45) * boldScale, 0, 1.7);
        this.greediness = clamp((this.baseGreediness ?? this.greediness ?? 0.85) * greedScale, 0.1, 2.2);
        this.sheepishness = clamp((this.baseSheepishness ?? this.sheepishness ?? 0.7) * sheepScale, 0.1, 2.2);
        this.humanity = clamp((this.baseHumanity ?? this.humanity ?? 0.7) * humanityScale, 0.05, 2.6);
        this.trickiness = clamp((this.baseTrickiness ?? this.trickiness ?? 0.6) * trickScale, 0.05, 2.7);
        this.opportunism = clamp((this.baseOpportunism ?? this.opportunism ?? 0.8) * opportunismScale, 0.08, 2.7);
        this.herdResistance = clamp((this.baseHerdResistance ?? this.herdResistance ?? 0.75) * herdScale, 0.1, 2.8);

        this.aggression = clamp((this.baseAggression ?? this.aggression ?? 0.6) * (0.72 + this.greediness * 0.45), 0.08, 1.45);
        this.caution = clamp((this.baseCaution ?? this.caution ?? 0.55) * (0.72 + this.sheepishness * 0.52), 0.08, 1.5);
        this.splitThreshold = clamp((this.baseSplitThreshold ?? this.splitThreshold ?? 0.3) * (0.9 + this.sheepishness * 0.13), 0.08, 0.82);
        this.virusAwareness = clamp((this.baseVirusAwareness ?? this.virusAwareness ?? 0.7) * (0.86 + this.sheepishness * 0.28), 0.2, 1.45);
        this.sneakiness = clamp(
            0.16 + this.humanity * 0.22 + this.trickiness * 0.22 + this.opportunism * 0.16 - this.sheepishness * 0.1,
            0.05,
            2.6
        );
        this.betrayChance = clamp(
            0.01 + this.trickiness * 0.11 + this.opportunism * 0.06 + this.greediness * 0.05 - this.affection * 0.045,
            0.005,
            0.85
        );

        const assistBias = clamp(this.humanAssistChance * (0.55 + this.affection * 0.45), 0, 1);
        const spectateBias = clamp(this.spectatorFollowHumanChance * (0.58 + this.affection * 0.35), 0, 1);
        if (refreshDisposition || this.likesHelpingHumans === undefined) {
            this.likesHelpingHumans = Math.random() < assistBias;
        }
        if (refreshDisposition || this.prefersHumanSpectate === undefined) {
            this.prefersHumanSpectate = Math.random() < spectateBias;
        }

        const gullibleBase = this.isGullible ? 0.42 : 0.07;
        this.gullibility = clamp(gullibleBase + this.affection * (this.isGullible ? 0.34 : 0.11), 0.05, 0.95);
        this.hideUnderVirusChance = clamp(0.22 + this.sheepishness * 0.34, 0.2, 0.96);
    }

    massToRadius(game, mass) {
        const scale = Number(game.massRadiusScale || game.config.massRadiusScale || 6);
        const exponent = Number(game.massRadiusExponent || game.config.massRadiusExponent || 0.5);
        return Math.pow(Math.max(1, mass), Math.max(0.2, Math.min(0.8, exponent))) * Math.max(0.1, scale);
    }

    getNearestHumanTarget(senseContext, myPos, maxDistSq) {
        const humans = senseContext && senseContext.humans ? senseContext.humans : [];
        let nearest = null;
        let nearestDistSq = Infinity;

        for (const human of humans) {
            if (!human || !human.pos) continue;
            const load = human.supportLoad || 0;
            if (load >= this.maxSupportersPerHuman && human.id !== this.recentBenefactorId) continue;
            const dx = human.pos.x - myPos.x;
            const dy = human.pos.y - myPos.y;
            const distSq = dx * dx + dy * dy;
            if (distSq > maxDistSq) continue;
            if (distSq < nearestDistSq) {
                nearestDistSq = distSq;
                nearest = human;
            }
        }

        if (!nearest) return null;
        return {
            ...nearest,
            dist: Math.sqrt(nearestDistSq),
            distSq: nearestDistSq
        };
    }

    getBestSpectatorTarget(senseContext, myPos) {
        const players = senseContext && senseContext.players ? senseContext.players : [];
        let best = null;
        let bestScore = -Infinity;

        for (const p of players) {
            if (!p || !p.pos || p.id === this.id || p.mass <= 0) continue;
            if (p.isHuman && (p.supportLoad || 0) >= this.maxSupportersPerHuman && p.id !== this.recentBenefactorId) {
                continue;
            }
            const dx = p.pos.x - myPos.x;
            const dy = p.pos.y - myPos.y;
            const distSq = dx * dx + dy * dy;
            if (distSq > 2000 * 2000) continue;

            const dist = Math.sqrt(distSq);
            const humanBonus = p.isHuman
                ? (this.prefersHumanSpectate ? 120 : -80)
                : 30;
            const loadPenalty = (p.supportLoad || 0) * 140;
            const score = p.mass * 1.25 - dist * 0.85 + humanBonus - loadPenalty;
            if (score > bestScore) {
                bestScore = score;
                best = {
                    ...p,
                    dist,
                    distSq
                };
            }
        }

        return best;
    }

    clampTargetWithinBounds(game) {
        const margin = 250;
        const mw = game.config.mapWidth;
        const mh = game.config.mapHeight;
        if (this.desiredTarget.x < margin) this.desiredTarget.x = margin + 200;
        if (this.desiredTarget.x > mw - margin) this.desiredTarget.x = mw - margin - 200;
        if (this.desiredTarget.y < margin) this.desiredTarget.y = margin + 200;
        if (this.desiredTarget.y > mh - margin) this.desiredTarget.y = mh - margin - 200;
    }

    refreshHomeAnchor(game, now) {
        if (!this.homeAnchor || !Number.isFinite(this.homeAnchor.x) || !Number.isFinite(this.homeAnchor.y)) {
            this.homeAnchor = { x: game.config.mapWidth / 2, y: game.config.mapHeight / 2 };
        }
        if (now < (this.homeAnchorRefreshAt || 0)) return;
        this.homeAnchorRefreshAt = now + 12000 + Math.random() * 18000;
        // Bias anchors toward the map's outer zones to prevent center-clustering.
        // 70% chance to pick a point in the outer 40% of each axis.
        const pickAxis = (size) => Math.random() < 0.7
            ? (Math.random() < 0.5
                ? size * (0.05 + Math.random() * 0.35)
                : size * (0.60 + Math.random() * 0.35))
            : size * (0.20 + Math.random() * 0.60);
        this.homeAnchor.x = pickAxis(game.config.mapWidth);
        this.homeAnchor.y = pickAxis(game.config.mapHeight);
    }

    getCornerPoint(game, index, inset = 120) {
        const xMax = game.config.mapWidth;
        const yMax = game.config.mapHeight;
        const i = ((index % 4) + 4) % 4;
        if (i === 0) return { x: inset, y: inset };
        if (i === 1) return { x: xMax - inset, y: inset };
        if (i === 2) return { x: xMax - inset, y: yMax - inset };
        return { x: inset, y: yMax - inset };
    }

    maybeGetCornerCampTarget(game, now, myMass, dangerClose) {
        const minCampMass = Math.max(90, game.config.startMass * 8.5);
        if (myMass < minCampMass) {
            this.cornerCampUntil = 0;
            return null;
        }
        if (dangerClose && now >= (this.cornerCampUntil || 0)) {
            const chance = this.cornerCampChance * (0.85 + this.sheepishness * 0.22);
            if (Math.random() < chance) {
                this.cornerCampUntil = now + 14000 + Math.random() * 24000;
                this.cornerIndex = Math.floor(Math.random() * 4);
            }
        }
        if (now < (this.cornerCampUntil || 0)) {
            return this.getCornerPoint(game, this.cornerIndex, 110 + Math.random() * 40);
        }
        return null;
    }

    getDistributedEdgeEscape(game, myPos, retreatUnitX, retreatUnitY, crowdRepulsion) {
        const inset = 70 + Math.random() * 60;
        const xEdge = retreatUnitX >= 0 ? (game.config.mapWidth - inset) : inset;
        const yEdge = retreatUnitY >= 0 ? (game.config.mapHeight - inset) : inset;
        const preferCorner = Math.abs(retreatUnitX) > 0.45 || Math.abs(retreatUnitY) > 0.45;
        const cornerPoint = this.getCornerPoint(
            game,
            (this.cornerIndex + (this.retreatPolarity > 0 ? 1 : 3)) % 4,
            inset
        );
        const blend = preferCorner ? 0.65 : 0.45;
        return {
            x: myPos.x * (1 - blend) + (xEdge + cornerPoint.x) * 0.5 * blend + crowdRepulsion.x * 160,
            y: myPos.y * (1 - blend) + (yEdge + cornerPoint.y) * 0.5 * blend + crowdRepulsion.y * 160,
        };
    }

    getRoamTarget(game, now, myPos, closestThreat) {
        const old = this.roamTarget;
        const shouldRefresh = (
            !old ||
            now >= (this.roamTargetRefreshAt || 0) ||
            Math.hypot((old.x || 0) - myPos.x, (old.y || 0) - myPos.y) < 220
        );
        if (!shouldRefresh) return old;

        const corners = [
            this.getCornerPoint(game, 0, 200),
            this.getCornerPoint(game, 1, 200),
            this.getCornerPoint(game, 2, 200),
            this.getCornerPoint(game, 3, 200),
        ];
        // Generate candidates biased toward the outer 40% of the map so bots spread out
        const outerPoint = () => {
            const onX = Math.random() < 0.5
                ? game.config.mapWidth  * (0.05 + Math.random() * 0.35)
                : game.config.mapWidth  * (0.60 + Math.random() * 0.35);
            const onY = Math.random() < 0.5
                ? game.config.mapHeight * (0.05 + Math.random() * 0.35)
                : game.config.mapHeight * (0.60 + Math.random() * 0.35);
            return { x: onX, y: onY };
        };
        const midPoint = () => ({
            x: game.config.mapWidth  * (0.15 + Math.random() * 0.70),
            y: game.config.mapHeight * (0.15 + Math.random() * 0.70),
        });
        const candidates = [outerPoint(), outerPoint(), midPoint(), ...corners];

        let best = candidates[0];
        let bestScore = -Infinity;
        for (const c of candidates) {
            const fromMe = Math.hypot(c.x - myPos.x, c.y - myPos.y);
            const threatDist = closestThreat ? Math.hypot(c.x - closestThreat.x, c.y - closestThreat.y) : 1000;
            // Weight distance from self heavily so bots actually move across the map
            const score = fromMe * 0.7 + threatDist * 0.8 + Math.random() * 220;
            if (score > bestScore) {
                bestScore = score;
                best = c;
            }
        }

        this.roamTarget = best;
        this.roamTargetRefreshAt = now + 6000 + Math.random() * 10000;
        return this.roamTarget;
    }

    getCrowdRepulsion(senseContext, myPos, myMass) {
        const players = senseContext && Array.isArray(senseContext.players) ? senseContext.players : [];
        if (players.length === 0) return { x: 0, y: 0, pressure: 0 };

        const sampleLimit = 160;
        const stride = Math.max(1, Math.floor(players.length / sampleLimit));
        const start = this.id % stride;
        let vx = 0;
        let vy = 0;
        let pressure = 0;
        let samples = 0;

        for (let i = start; i < players.length; i += stride) {
            if (samples >= sampleLimit) break;
            const p = players[i];
            samples++;
            if (!p || p.id === this.id || !p.pos || p.mass <= 0) continue;
            if (p.mass < myMass * 0.35 || p.mass > myMass * 2.4) continue;

            const dx = myPos.x - p.pos.x;
            const dy = myPos.y - p.pos.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 1 || dist > 700) continue;

            const influence = ((700 - dist) / 700) * (0.7 + (p.mass / Math.max(1, myMass)) * 0.25);
            const invDist = 1 / dist;
            vx += dx * invDist * influence;
            vy += dy * invDist * influence;
            pressure += influence;
        }

        if (pressure <= 0) return { x: 0, y: 0, pressure: 0 };
        return { x: vx / pressure, y: vy / pressure, pressure };
    }

    runSupportRole(game, senseContext, myMass, myPos) {
        if (this.role !== 'kamikaze_feeder' && this.role !== 'merge_feeder' && this.role !== 'spectator_support') {
            return false;
        }
        const humanTarget = this.likesHelpingHumans
            ? this.getNearestHumanTarget(senseContext, myPos, 1600 * 1600)
            : null;
        if (
            humanTarget &&
            game.isTeamsMode &&
            game.isTeamsMode() &&
            humanTarget.teamId !== this.teamId &&
            Math.random() > (game.crossTeamTeamingChance ?? 0)
        ) {
            return false;
        }
        const humanSupportAllowed = humanTarget
            ? game.canBotSupportHumanTarget(humanTarget.id, myMass)
            : false;
        const actionCooldownSec = (game.config.botSupportActionCooldownMs ?? 900) / 1000;

        if (this.role === 'spectator_support') {
            const follow = this.getBestSpectatorTarget(senseContext, myPos);
            if (!follow) return false;
            if (
                game.isTeamsMode &&
                game.isTeamsMode() &&
                follow.teamId !== this.teamId &&
                Math.random() > (game.crossTeamTeamingChance ?? 0)
            ) {
                return false;
            }

            const orbit = 120 + Math.sqrt(Math.max(1, follow.mass)) * 2;
            const ang = Math.atan2(myPos.y - follow.pos.y, myPos.x - follow.pos.x) + (Math.random() - 0.5) * 0.5;
            this.desiredTarget.x = follow.pos.x + Math.cos(ang) * orbit;
            this.desiredTarget.y = follow.pos.y + Math.sin(ang) * orbit;
            this.targetLerp = 0.12;

            const feedCooldown = (game.config.spectatorFeedCooldownMs ?? 2400) / 1000;
            const canFeed = this.supportCooldown <= 0 && myMass >= (game.config.spectatorFeedMinMass ?? 55);
            const canSupportFollow = follow.isHuman ? game.canBotSupportHumanTarget(follow.id, myMass) : true;
            if (canSupportFollow && canFeed && follow.dist < 420 && Math.random() < (game.config.spectatorFeedChance ?? 0.4)) {
                const shots = follow.isHuman ? 1 : (Math.random() < 0.45 ? 2 : 1);
                const fed = game.ejectMassTowardTarget(this, follow.pos, shots);
                if (fed > 0) this.supportCooldown = feedCooldown;
            }

            this.clampTargetWithinBounds(game);
            return true;
        }

        if (!humanTarget || !humanSupportAllowed) return false;

        if (this.role === 'kamikaze_feeder') {
            const orbit = 110 + Math.random() * 90;
            const orbitAngle = Math.atan2(myPos.y - humanTarget.pos.y, myPos.x - humanTarget.pos.x) + (Math.random() - 0.5) * 0.8;
            this.desiredTarget.x = humanTarget.pos.x + Math.cos(orbitAngle) * orbit;
            this.desiredTarget.y = humanTarget.pos.y + Math.sin(orbitAngle) * orbit;
            this.targetLerp = 0.12;

            if (this.supportCooldown <= 0 && humanTarget.dist < 460 && myMass >= (game.config.botKamikazeFeedMinMass ?? 60)) {
                const shots = 1 + Math.floor(Math.random() * 2);
                const fed = game.ejectMassTowardTarget(this, humanTarget.pos, shots);
                if (fed > 0) this.supportCooldown = actionCooldownSec;
            }

            const splitChance = game.config.botKamikazeSplitChance ?? 0.45;
            const splitMass = game.config.botKamikazeSplitMinMass ?? 120;
            if (
                this.splitCooldown <= 0 &&
                this.cells.length < this.maxCellsCap &&
                myMass >= splitMass &&
                humanTarget.dist > 140 &&
                humanTarget.dist < 620 &&
                Math.random() < splitChance
            ) {
                this.target.x = humanTarget.pos.x;
                this.target.y = humanTarget.pos.y;
                this.desiredTarget.x = humanTarget.pos.x;
                this.desiredTarget.y = humanTarget.pos.y;
                game.splitPlayer(this);
                this.splitCooldown = 2.5 + Math.random() * 4;
            }

            this.clampTargetWithinBounds(game);
            return true;
        }

        if (this.role === 'merge_feeder') {
            if (this.cells.length > 1) {
                const center = this.getCenter();
                this.desiredTarget.x = center.x;
                this.desiredTarget.y = center.y;
                this.targetLerp = 0.12;
            } else {
                const orbit = 90 + Math.random() * 80;
                const orbitAngle = Math.atan2(myPos.y - humanTarget.pos.y, myPos.x - humanTarget.pos.x) + (Math.random() - 0.5) * 0.9;
                this.desiredTarget.x = humanTarget.pos.x + Math.cos(orbitAngle) * orbit;
                this.desiredTarget.y = humanTarget.pos.y + Math.sin(orbitAngle) * orbit;
                this.targetLerp = 0.09;
            }

            if (this.supportCooldown <= 0 && humanTarget.dist < 520 && myMass >= (game.config.botMergeFeedMinMass ?? 120)) {
                const shots = 2 + Math.floor(Math.random() * 2);
                const fed = game.ejectMassTowardTarget(this, humanTarget.pos, shots);
                if (fed > 0) this.supportCooldown = actionCooldownSec * 1.4;
            }

            const splitChance = game.config.botMergeSplitChance ?? 0.15;
            const splitMass = game.config.botMergeSplitMinMass ?? 220;
            if (
                this.cells.length === 1 &&
                this.splitCooldown <= 0 &&
                this.cells.length < this.maxCellsCap &&
                myMass >= splitMass &&
                humanTarget.dist > 240 &&
                Math.random() < splitChance
            ) {
                this.target.x = humanTarget.pos.x;
                this.target.y = humanTarget.pos.y;
                game.splitPlayer(this);
                this.splitCooldown = 4 + Math.random() * 5;
            }

            this.clampTargetWithinBounds(game);
            return true;
        }

        return false;
    }

    getSwerveTarget(game, myPos, prey, threat) {
        if (!prey || !threat || this.smartness < 0.25) return null;

        const toPreyX = prey.x - myPos.x;
        const toPreyY = prey.y - myPos.y;
        const preyDist = Math.sqrt(toPreyX * toPreyX + toPreyY * toPreyY);
        if (preyDist < 1) return null;

        const toThreatX = threat.x - myPos.x;
        const toThreatY = threat.y - myPos.y;
        const threatDist = Math.sqrt(toThreatX * toThreatX + toThreatY * toThreatY);
        const threatWindow = (game.config.botSwerveThreatBuffer ?? 180) + this.massToRadius(game, threat.mass || 1) * 0.9;
        if (threatDist > preyDist + threatWindow) return null;

        const cross = toPreyX * toThreatY - toPreyY * toThreatX;
        const side = cross >= 0 ? -1 : 1;
        const nx = -toPreyY / preyDist;
        const ny = toPreyX / preyDist;
        const pressure = Math.max(0, Math.min(1, 1 - threatDist / (preyDist + threatWindow)));
        const sway = (game.config.botSwerveThreatBuffer ?? 180) * this.swerveStrength * (0.4 + pressure * 0.9);

        return {
            x: prey.x + nx * side * sway,
            y: prey.y + ny * side * sway,
            lerp: 0.08 + this.smartness * 0.06
        };
    }

    tryVirusWeapon(game, sensedViruses, myPos, myMass, threat) {
        if (!threat) return false;
        if (this.virusWeaponCooldown > 0) return false;
        if (myMass < game.botVirusWeaponMinMass) return false;
        if (Math.random() > game.botVirusWeaponChance) return false;

        let best = null;
        let bestScore = -Infinity;
        for (const virus of sensedViruses || []) {
            if (!virus) continue;
            if ((virus.kind || 'normal') === 'spawner') continue;

            const bdx = virus.x - myPos.x;
            const bdy = virus.y - myPos.y;
            const botToVirusDist = Math.sqrt(bdx * bdx + bdy * bdy);
            if (botToVirusDist < 45 || botToVirusDist > 540) continue;

            const tdx = threat.x - virus.x;
            const tdy = threat.y - virus.y;
            const virusToThreatDist = Math.sqrt(tdx * tdx + tdy * tdy);
            if (virusToThreatDist < 120 || virusToThreatDist > 980) continue;

            const invB = 1 / Math.max(1, botToVirusDist);
            const invT = 1 / Math.max(1, virusToThreatDist);
            const dot = (bdx * tdx + bdy * tdy) * invB * invT;
            if (dot < 0.8) continue;

            const score = dot * 320 - botToVirusDist * 0.35 - virusToThreatDist * 0.16;
            if (score > bestScore) {
                bestScore = score;
                best = virus;
            }
        }

        if (!best) return false;

        const shots = myMass > game.botVirusWeaponMinMass * 2.3 ? 2 : 1;
        const fed = game.ejectMassTowardTarget(this, { x: best.x, y: best.y }, shots);
        if (fed <= 0) return false;

        this.virusWeaponCooldown = (game.botVirusWeaponCooldownMs / 1000) * (0.8 + Math.random() * 0.45);
        this.desiredTarget.x = best.x - (best.x - myPos.x) * 0.6;
        this.desiredTarget.y = best.y - (best.y - myPos.y) * 0.6;
        this.targetLerp = Math.max(this.targetLerp, 0.1);
        return true;
    }

    getVirusTrapInfo(game, sensedViruses, myPos, myMass) {
        const trapRange = 220 + this.massToRadius(game, Math.max(1, myMass)) * 1.35;
        let nearbyViruses = 0;
        let nearestDist = Infinity;
        let escapeVecX = 0;
        let escapeVecY = 0;
        let pressure = 0;

        for (const virus of sensedViruses || []) {
            if (!virus) continue;
            const vr = this.massToRadius(game, Math.max(1, virus.mass));
            const dx = myPos.x - virus.x;
            const dy = myPos.y - virus.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < nearestDist) nearestDist = dist;

            const influence = Math.max(0, trapRange + vr - dist);
            if (influence <= 0) continue;
            nearbyViruses++;
            const invDist = 1 / Math.max(1, dist);
            escapeVecX += dx * invDist * influence;
            escapeVecY += dy * invDist * influence;
            pressure += influence;
        }

        const isTrapped = nearbyViruses >= 2 && pressure > 70;
        const escapeScale = isTrapped ? (640 + Math.min(360, pressure * 1.5)) : 0;
        return {
            isTrapped,
            nearbyViruses,
            nearestDist,
            pressure,
            escapeX: myPos.x + (pressure > 0 ? (escapeVecX / pressure) * escapeScale : 0),
            escapeY: myPos.y + (pressure > 0 ? (escapeVecY / pressure) * escapeScale : 0),
        };
    }

    runSacrificeMode(game, senseContext, myMass, myPos) {
        if (!this.forceSacrificeToHuman) return false;
        const humans = (senseContext && senseContext.humans) ? senseContext.humans : [];
        if (!humans || humans.length === 0) return false;

        let nearest = null;
        let nearestDistSq = Infinity;
        for (const human of humans) {
            if (!human || !human.pos) continue;
            if (game.isTeamsMode && game.isTeamsMode() && Number.isInteger(this.teamId) && Number.isInteger(human.teamId) && this.teamId === human.teamId) {
                continue;
            }
            const dx = human.pos.x - myPos.x;
            const dy = human.pos.y - myPos.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < nearestDistSq) {
                nearestDistSq = distSq;
                nearest = human;
            }
        }

        if (!nearest) return false;
        const dist = Math.sqrt(nearestDistSq);

        this.target.x = nearest.pos.x;
        this.target.y = nearest.pos.y;
        this.desiredTarget.x = nearest.pos.x;
        this.desiredTarget.y = nearest.pos.y;
        this.targetLerp = 1;

        if (
            this.splitCooldown <= 0 &&
            this.cells.length < this.maxCellsCap &&
            myMass >= Math.max(35, game.config.minSplitMass * 1.15) &&
            dist > 120 &&
            dist < 950
        ) {
            game.splitPlayer(this);
            this.splitCooldown = 1 + Math.random() * 1.2;
        }

        return true;
    }

    think(game, senseContext) {
        const tickDelta = 1 / game.config.tickRate;
        this.thinkCooldown -= tickDelta;
        this.splitCooldown -= tickDelta;
        this.wanderTimer -= tickDelta;
        this.supportCooldown -= tickDelta;
        this.virusWeaponCooldown -= tickDelta;

        this.target.x += (this.desiredTarget.x - this.target.x) * this.targetLerp;
        this.target.y += (this.desiredTarget.y - this.target.y) * this.targetLerp;

        if (this.thinkCooldown > 0) return;
        this.thinkCooldown = this.baseThinkInterval + Math.random() * 0.2;

        if (!this.cells || this.cells.length === 0) return;

        const myMass = this.cells.reduce((sum, c) => sum + c.mass, 0);
        // Use the largest single blob mass for bravery/threat/prey decisions.
        // Total mass is misleading when split — individual blobs are what can actually eat or be eaten.
        const myLargestBlobMass = this.cells.reduce((max, c) => Math.max(max, c.mass), 0);
        // How many cells are ready to merge (merge timer expired)?
        const nowForMerge = Date.now();
        const mergeable = this.cells.filter(c => c.mergeTime <= nowForMerge);
        const mergeableMass = mergeable.reduce((s, c) => s + c.mass, 0);
        // If all our cells merged right now, what would our single-blob mass be?
        // Used for "if I merge I can eat X" decisions.
        const potentialMergedMass = myMass; // fully merged = total mass
        const myPos = this.getCenter();
        const now = Date.now();
        this.refreshHomeAnchor(game, now);

        if (this.runSacrificeMode(game, senseContext, myMass, myPos)) return;

        if (this.runSupportRole(game, senseContext, myMass, myPos)) return;

        const scanRange = 680 + this.massToRadius(game, Math.max(1, myMass)) * 2.2;
        const scanRangeSq = scanRange * scanRange;

        const sensedCells = (senseContext && senseContext.cells && senseContext.cells.length > 0)
            ? senseContext.cells
            : [...game.cells.values()];
        const sensedViruses = (senseContext && senseContext.viruses && senseContext.viruses.length > 0)
            ? senseContext.viruses
            : [...game.viruses.values()];
        const sensedFood = (senseContext && senseContext.food && senseContext.food.length > 0)
            ? senseContext.food
            : [...game.food.values()];
        const sensedPlayers = (senseContext && senseContext.players && senseContext.players.length > 0)
            ? senseContext.players
            : [];
        const dominantPlayerId = senseContext ? senseContext.dominantPlayerId : null;
        const dominantRatio = senseContext ? (senseContext.dominantRatio || 1) : 1;
        const ownerMassById = new Map();
        for (const p of sensedPlayers) {
            if (!p || p.id == null) continue;
            ownerMassById.set(p.id, Math.max(0, Number(p.mass) || 0));
        }

        let closestThreat = null;
        let closestThreatDist = Infinity;
        let threatVecX = 0;
        let threatVecY = 0;
        let threatPressure = 0;
        let bestPrey = null;
        let bestPreyScore = -1;
        let largestEdiblePlayer = null;
        const eatMassRatio = Math.max(1.05, game.cellEatMassRatio || 1.25);
        const threatMassRatio = eatMassRatio + 0.02;
        const greediness = Math.max(0.1, this.greediness || 1);
        const sheepishness = Math.max(0.1, this.sheepishness || 1);
        const effectiveAggression = clamp(this.aggression * (0.82 + greediness * 0.22), 0.08, 1.7);
        const effectiveCaution = clamp(this.caution * (0.82 + sheepishness * 0.24), 0.08, 1.8);
        const effectiveBoldness = clamp(this.boldness * (0.78 + greediness * 0.16), 0, 1.95);
        const myRadius = this.massToRadius(game, Math.max(1, myMass));

        for (const p of sensedPlayers) {
            if (!p || p.id === this.id || !p.pos || p.mass <= 0) continue;
            if (game.isTeamsMode && game.isTeamsMode() && Number.isInteger(this.teamId) && Number.isInteger(p.teamId) && this.teamId === p.teamId) {
                continue;
            }
            // Use largest blob mass for edibility check — we can only eat blobs we're big enough for
            if (!(myLargestBlobMass > p.mass * eatMassRatio)) continue;
            const dx = p.pos.x - myPos.x;
            const dy = p.pos.y - myPos.y;
            const distSq = dx * dx + dy * dy;
            if (distSq > scanRangeSq * 2.6) continue;
            if (!largestEdiblePlayer || p.mass > largestEdiblePlayer.mass) {
                largestEdiblePlayer = { id: p.id, mass: p.mass, distSq };
            }
        }

        for (const cell of sensedCells) {
            if (!cell || cell.owner === this) continue;
            if (game.isTeamsMode && game.isTeamsMode() && cell.owner && Number.isInteger(this.teamId) && this.teamId === cell.owner.teamId) {
                continue;
            }
            const dx = cell.x - myPos.x;
            const dy = cell.y - myPos.y;
            const distSq = dx * dx + dy * dy;
            if (distSq > scanRangeSq) continue;
            const dist = Math.sqrt(distSq);

            // Compare against myLargestBlobMass: a single enemy blob is a threat only if it
            // can eat one of our individual blobs, not just if it beats our total combined mass.
            if (cell.mass > myLargestBlobMass * (threatMassRatio + effectiveCaution * 0.2)) {
                const pressure = Math.max(0.05, (cell.mass / Math.max(1, myLargestBlobMass)) - threatMassRatio + 0.04);
                const invDist = 1 / Math.max(18, dist);
                threatVecX += (myPos.x - cell.x) * invDist * pressure;
                threatVecY += (myPos.y - cell.y) * invDist * pressure;
                threatPressure += pressure;
                if (dist < closestThreatDist) {
                    closestThreat = { x: cell.x, y: cell.y, mass: cell.mass };
                    closestThreatDist = dist;
                }
            } else if (myLargestBlobMass > cell.mass * eatMassRatio && cell.mass > 4) {
                // How juicy is the prey relative to us?
                const juicy = 1 + Math.min(1.2, cell.mass / Math.max(myLargestBlobMass, 1) * 2.5);
                const preyRadius = this.massToRadius(game, Math.max(1, cell.mass));
                const consumeRange = Math.max(0, myRadius - preyRadius * (game.cellEatCenterInsideRatio || 0.35));
                const approachGap = Math.max(0, dist - consumeRange);
                // Bonus for prey that's already inside our eat range — kill it NOW
                const fastEatBonus = Math.max(0, 320 - approachGap) * (0.5 + greediness * 0.6);
                // Bonus for lone small shards that we can absorb quickly
                const splitShardBonus = cell.mass <= myLargestBlobMass * 0.3 ? (60 + cell.mass * 1.2) * (0.5 + greediness * 0.6) : 0;
                const ownerCells = cell.owner && Array.isArray(cell.owner.cells) ? cell.owner.cells.length : 1;
                // Bonus for catching isolated cells (split-off from a bigger player)
                const sneakShardBonus = ownerCells > 1 ? (20 + this.sneakiness * 32) : 0;
                // Bonus for cells we can split-kill (half-mass > prey)
                const halfCanKill = (myLargestBlobMass / 2) > cell.mass * (1.1 + this.splitThreshold * 0.15);
                const splitKillBonus = halfCanKill ? (55 + cell.mass * 0.9) * (0.6 + effectiveAggression * 0.7) : 0;
                const ownerId = cell.owner && cell.owner.id != null ? cell.owner.id : null;
                const ownerMass = ownerId != null ? (ownerMassById.get(ownerId) || cell.mass) : cell.mass;
                const leaderPressureBonus = (
                    dominantPlayerId != null &&
                    ownerId === dominantPlayerId &&
                    dominantRatio > 1.7
                ) ? (70 + Math.min(260, dominantRatio * 55)) : 0;
                const largestEdibleBonus = (
                    largestEdiblePlayer &&
                    ownerId === largestEdiblePlayer.id
                ) ? (65 + Math.min(250, ownerMass * 0.46)) : 0;
                const score = (cell.mass * juicy) / (dist + 45)
                    + fastEatBonus
                    + splitShardBonus
                    + sneakShardBonus
                    + splitKillBonus
                    + largestEdibleBonus
                    + leaderPressureBonus;
                if (score > bestPreyScore) {
                    bestPreyScore = score;
                    bestPrey = {
                        x: cell.x,
                        y: cell.y,
                        mass: cell.mass,
                        dist,
                        approachGap,
                        owner: cell.owner,
                        ownerCells,
                        ownerMass,
                    };
                }
            }
        }

        let nearestVirus = null;
        let nearestVirusDist = Infinity;
        for (const virus of sensedViruses) {
            if (!virus) continue;
            const dx = virus.x - myPos.x;
            const dy = virus.y - myPos.y;
            const distSq = dx * dx + dy * dy;
            if (distSq > scanRangeSq * 1.5) continue;
            const dist = Math.sqrt(distSq);
            if (dist < nearestVirusDist) {
                nearestVirusDist = dist;
                nearestVirus = { x: virus.x, y: virus.y, radius: this.massToRadius(game, Math.max(1, virus.mass)) };
            }
        }

        let hideVirus = null;
        let hideScore = -Infinity;
        if (closestThreat && (myMass <= this.virusHideMass || closestThreat.mass > myMass * 1.28)) {
            for (const virus of sensedViruses) {
                if (!virus) continue;
                const dx = virus.x - myPos.x;
                const dy = virus.y - myPos.y;
                const distSq = dx * dx + dy * dy;
                if (distSq > scanRangeSq * 1.5) continue;
                const dist = Math.sqrt(distSq);

                const tdx = closestThreat.x - virus.x;
                const tdy = closestThreat.y - virus.y;
                const threatDist = Math.sqrt(tdx * tdx + tdy * tdy);
                if (threatDist < 120) continue;

                const score = threatDist - dist * 0.8;
                if (score > hideScore) {
                    hideScore = score;
                    hideVirus = { x: virus.x, y: virus.y, radius: this.massToRadius(game, Math.max(1, virus.mass)) };
                }
            }
        }

        if (
            closestThreat &&
            closestThreat.mass > myMass * threatMassRatio &&
            this.tryVirusWeapon(game, sensedViruses, myPos, myMass, closestThreat)
        ) {
            this.clampTargetWithinBounds(game);
            return;
        }

        // ── Food scanning ──────────────────────────────────────────────────────────
        // Use the spatial hash (forEachNearbyFood) so every bot scans its own local
        // neighbourhood rather than a global random sample.  This is the root fix for
        // bots ignoring nearby pellets — the old sample-based approach returned food
        // scattered all over the map, nearly all of which was outside scan range.
        let bestFood = null;
        let bestFoodScore = -1;
        const isSmallBot = myMass <= 60;
        // Small bots scan wider for food; large bots use standard range
        const foodRange = isSmallBot ? scanRange * 1.4 : scanRange * 1.0;
        // Baseline multiplier: tiny bots are MUCH more rewarded per pellet
        const smallBotFoodMult = isSmallBot
            ? Math.max(2.5, 8 - myMass * 0.09)  // ~8× at mass 10, ~4× at mass 50
            : 1.0;

        if (game.forEachNearbyFood) {
            game.forEachNearbyFood(myPos.x, myPos.y, foodRange, (food) => {
                if (!food) return;
                const dx = food.x - myPos.x;
                const dy = food.y - myPos.y;
                const distSq = dx * dx + dy * dy;
                if (distSq > foodRange * foodRange) return;

                const dist = Math.sqrt(distSq);
                let score = (food.mass / (dist + 25)) * smallBotFoodMult;

                // Ejected pellets from other players are especially valuable (dense clusters)
                if (food.type === 'ejected') score *= 3.5;
                // Bounty pellets are golden
                if (food.type === 'bounty') score *= 2.8;

                // Penalise pellets near viruses only when the bot is big enough to pop
                if (myMass > this.virusHideMass && nearestVirus) {
                    const vdx = food.x - nearestVirus.x;
                    const vdy = food.y - nearestVirus.y;
                    const virusDist = Math.sqrt(vdx * vdx + vdy * vdy);
                    if (virusDist < nearestVirus.radius + 120) score *= 0.45;
                }

                if (score > bestFoodScore) {
                    bestFoodScore = score;
                    bestFood = { x: food.x, y: food.y };
                }
            });
        } else {
            // Fallback: iterate shared sample (less accurate but won't crash on old builds)
            for (const food of sensedFood) {
                if (!food) continue;
                const dx = food.x - myPos.x;
                const dy = food.y - myPos.y;
                const distSq = dx * dx + dy * dy;
                if (distSq > foodRange * foodRange) continue;
                const dist = Math.sqrt(distSq);
                let score = (food.mass / (dist + 25)) * smallBotFoodMult;
                if (food.type === 'ejected') score *= 3.5;
                if (food.type === 'bounty') score *= 2.8;
                if (score > bestFoodScore) { bestFoodScore = score; bestFood = { x: food.x, y: food.y }; }
            }
        }

        // ── Virus eating ────────────────────────────────────────────────────────────
        // When small (below virusHideMass) and no threat is close, actively seek the
        // nearest virus to eat it for mass. Priority: viruses < pellets < players.
        let bestVirusEat = null;
        let bestVirusEatScore = -1;
        const canEatVirus = myMass < this.virusHideMass && !closestThreat;
        if (canEatVirus) {
            for (const virus of sensedViruses) {
                if (!virus) continue;
                const dx = virus.x - myPos.x;
                const dy = virus.y - myPos.y;
                const distSq = dx * dx + dy * dy;
                if (distSq > scanRangeSq * 1.2) continue;
                const dist = Math.sqrt(distSq);
                // Score: bigger viruses are more rewarding; prefer closer ones
                const vScore = virus.mass / (dist + 80);
                if (vScore > bestVirusEatScore) {
                    bestVirusEatScore = vScore;
                    bestVirusEat = { x: virus.x, y: virus.y, mass: virus.mass };
                }
            }
        }

        const benefactor = (this.recentBenefactorId && this.recentHelpUntil > now)
            ? game.resolvePlayerById(this.recentBenefactorId)
            : null;
        const benefactorPos = benefactor ? game.getPlayerCenter(benefactor) : null;
        const virusTrapInfo = this.getVirusTrapInfo(game, sensedViruses, myPos, myMass);
        const crowdRepulsion = this.getCrowdRepulsion(senseContext, myPos, myMass);
        const threatMagnitude = Math.sqrt(threatVecX * threatVecX + threatVecY * threatVecY);
        let retreatUnitX = 0;
        let retreatUnitY = 0;
        if (threatMagnitude > 0.0001) {
            retreatUnitX = threatVecX / threatMagnitude;
            retreatUnitY = threatVecY / threatMagnitude;
        } else if (closestThreat) {
            const awayAngle = Math.atan2(myPos.y - closestThreat.y, myPos.x - closestThreat.x);
            retreatUnitX = Math.cos(awayAngle);
            retreatUnitY = Math.sin(awayAngle);
        }
        const anchorDx = (this.homeAnchor ? this.homeAnchor.x : game.config.mapWidth / 2) - myPos.x;
        const anchorDy = (this.homeAnchor ? this.homeAnchor.y : game.config.mapHeight / 2) - myPos.y;
        const anchorDist = Math.sqrt(anchorDx * anchorDx + anchorDy * anchorDy) || 1;
        const anchorUnitX = anchorDx / anchorDist;
        const anchorUnitY = anchorDy / anchorDist;

        const canInstantChomp = !!(
            bestPrey &&
            bestPrey.approachGap < 34 &&
            myMass > bestPrey.mass * eatMassRatio * 1.08
        );
        const hardDangerClose = !!(
            closestThreat &&
            closestThreatDist < (180 + this.massToRadius(game, closestThreat.mass || 1) * 0.42)
        );
        const dangerClose = !!(
            closestThreat &&
            !canInstantChomp &&
            closestThreatDist < (340 + this.massToRadius(game, closestThreat.mass || 1) * ((3.7 + sheepishness * 0.9) / 6))
        );
        const trapFactor = virusTrapInfo.isTrapped
            ? (1.2 + Math.min(1.6, virusTrapInfo.pressure / 180))
            : 1;
        const panicChance = (game.botPanicRetreatChance ?? 0.18) * (0.7 + effectiveCaution * 0.6) * trapFactor;
        const panicMinMass = game.botPanicRetreatMinMass ?? 110;
        const panicBurstMax = Math.max(1, game.botPanicRetreatBurstMax ?? 4);
        const shouldPanic = hardDangerClose || (virusTrapInfo.isTrapped && myMass >= panicMinMass * 0.85);
        const swallowedDanger = !!(closestThreat && closestThreatDist < Math.max(22, myRadius * 0.72));
        const antiLeaderMode = (
            dominantPlayerId != null &&
            dominantPlayerId !== this.id &&
            dominantRatio > 1.9
        );
        const cornerCampTarget = this.maybeGetCornerCampTarget(game, now, myMass, dangerClose);

        if (
            shouldPanic &&
            this.splitCooldown <= 0 &&
            myMass >= panicMinMass &&
            this.cells.length < this.maxCellsCap &&
            !swallowedDanger &&
            Math.random() < panicChance
        ) {
            if (virusTrapInfo.isTrapped) {
                this.desiredTarget.x = virusTrapInfo.escapeX + (Math.random() - 0.5) * 120;
                this.desiredTarget.y = virusTrapInfo.escapeY + (Math.random() - 0.5) * 120;
            } else {
                const sideX = -retreatUnitY * this.retreatPolarity;
                const sideY = retreatUnitX * this.retreatPolarity;
                const baseEscape = {
                    x: myPos.x + retreatUnitX * 700 + sideX * 180 + crowdRepulsion.x * 260 + anchorUnitX * 120,
                    y: myPos.y + retreatUnitY * 700 + sideY * 180 + crowdRepulsion.y * 260 + anchorUnitY * 120,
                };
                const edgeEscape = this.getDistributedEdgeEscape(game, myPos, retreatUnitX, retreatUnitY, crowdRepulsion);
                this.desiredTarget.x = baseEscape.x * 0.58 + edgeEscape.x * 0.42;
                this.desiredTarget.y = baseEscape.y * 0.58 + edgeEscape.y * 0.42;
            }
            this.escapeTarget = { x: this.desiredTarget.x, y: this.desiredTarget.y };
            this.escapeTargetUntil = now + 1100 + Math.random() * 1200;
            this.targetLerp = 0.18;
            this.retreatLockUntil = now + 1100 + Math.random() * 1200;

            const bursts = Math.min(2, 1 + Math.floor(Math.random() * panicBurstMax));
            for (let i = 0; i < bursts; i++) {
                if (this.cells.length >= this.maxCellsCap) break;
                if (this.cells.reduce((sum, c) => sum + c.mass, 0) < Math.max(35, game.config.minSplitMass * 1.1)) break;
                game.splitPlayer(this);
            }
            this.splitCooldown = 2 + Math.random() * 3;
            this.clampTargetWithinBounds(game);
            return;
        }

        if (dangerClose && hideVirus && Math.random() < this.hideUnderVirusChance) {
            const hideAngle = Math.atan2(hideVirus.y - closestThreat.y, hideVirus.x - closestThreat.x);
            const hideDist = myMass <= this.virusHideMass
                ? hideVirus.radius * 0.55
                : hideVirus.radius * 1.14;
            this.desiredTarget.x = hideVirus.x + Math.cos(hideAngle) * hideDist;
            this.desiredTarget.y = hideVirus.y + Math.sin(hideAngle) * hideDist;
            this.targetLerp = 0.14;
            this.retreatLockUntil = now + 620 + Math.random() * 640;
            this.escapeTarget = { x: this.desiredTarget.x, y: this.desiredTarget.y };
            this.escapeTargetUntil = now + 820 + Math.random() * 760;
        } else if (dangerClose && effectiveCaution > 0.3) {
            if (this.retreatLockUntil > now) {
                if (this.escapeTarget && this.escapeTargetUntil > now) {
                    this.desiredTarget.x = this.escapeTarget.x;
                    this.desiredTarget.y = this.escapeTarget.y;
                }
                this.targetLerp = 0.13;
            } else {
                const sideX = -retreatUnitY * this.retreatPolarity;
                const sideY = retreatUnitX * this.retreatPolarity;
                const spread = Math.min(1.4, 0.75 + crowdRepulsion.pressure * 0.45 + this.herdResistance * 0.22);
                const baseEscape = {
                    x: myPos.x + retreatUnitX * 570 + sideX * (160 + this.humanity * 65) * spread + crowdRepulsion.x * 360 + anchorUnitX * 180,
                    y: myPos.y + retreatUnitY * 570 + sideY * (160 + this.humanity * 65) * spread + crowdRepulsion.y * 360 + anchorUnitY * 180,
                };
                const edgeEscape = this.getDistributedEdgeEscape(game, myPos, retreatUnitX, retreatUnitY, crowdRepulsion);
                const threatHeavy = closestThreat && closestThreat.mass > myMass * 1.35;
                const blend = threatHeavy ? 0.52 : 0.26;
                this.desiredTarget.x = baseEscape.x * (1 - blend) + edgeEscape.x * blend;
                this.desiredTarget.y = baseEscape.y * (1 - blend) + edgeEscape.y * blend;
                this.escapeTarget = { x: this.desiredTarget.x, y: this.desiredTarget.y };
                this.escapeTargetUntil = now + 950 + Math.random() * 1400;
                this.targetLerp = 0.13;
                this.retreatLockUntil = now + 900 + Math.random() * 1200;
                if (Math.random() < (0.08 + this.herdResistance * 0.06)) {
                    this.retreatPolarity *= -1;
                }
            }
        } else if (antiLeaderMode && (!bestPrey || (bestPrey.owner && bestPrey.owner.id !== dominantPlayerId))) {
            const dominantPlayer = sensedPlayers.find((p) => p && p.id === dominantPlayerId && p.pos);
            if (dominantPlayer && dominantPlayer.pos) {
                const dx = myPos.x - dominantPlayer.pos.x;
                const dy = myPos.y - dominantPlayer.pos.y;
                const len = Math.sqrt(dx * dx + dy * dy) || 1;
                const ux = dx / len;
                const uy = dy / len;
                const px = -uy;
                const py = ux;
                const uniquePhase = (((this.id * 0.61803398875) % 1) * Math.PI * 2) + now * 0.00008;
                const spreadBand = ((this.id % 9) - 4) * 55;
                const orbitDist = 300 + Math.min(460, dominantPlayer.mass * 0.22) + spreadBand;
                const flank = this.retreatPolarity * (95 + this.trickiness * 62);
                const ringX = ux * orbitDist + px * flank;
                const ringY = uy * orbitDist + py * flank;
                const swirlX = Math.cos(uniquePhase) * (110 + this.herdResistance * 55);
                const swirlY = Math.sin(uniquePhase) * (110 + this.herdResistance * 55);
                this.desiredTarget.x = dominantPlayer.pos.x + ringX + swirlX + crowdRepulsion.x * 180;
                this.desiredTarget.y = dominantPlayer.pos.y + ringY + swirlY + crowdRepulsion.y * 180;
                this.targetLerp = 0.08 + Math.min(0.08, this.smartness * 0.04);
            }
        } else if (cornerCampTarget) {
            this.desiredTarget.x = cornerCampTarget.x;
            this.desiredTarget.y = cornerCampTarget.y;
            this.targetLerp = 0.07;
        } else if (benefactorPos && this.isGullible && Math.random() < this.gullibility) {
            this.desiredTarget.x = benefactorPos.x + (Math.random() - 0.5) * 90;
            this.desiredTarget.y = benefactorPos.y + (Math.random() - 0.5) * 90;
            this.targetLerp = 0.08;
        } else if (bestPrey) {
            // ── Hunt: if we can eat it, we chase it — no aggression gating ──────────
            // Small bots only defer to food when food is much more accessible than prey.
            const preyWorthChasing = !isSmallBot || bestPreyScore >= bestFoodScore * 0.8;

            if (preyWorthChasing) {
                const smartTarget = this.getSwerveTarget(game, myPos, bestPrey, closestThreat);
                if (smartTarget) {
                    this.desiredTarget.x = smartTarget.x;
                    this.desiredTarget.y = smartTarget.y;
                    this.targetLerp = smartTarget.lerp;
                } else {
                    let targetX = bestPrey.x;
                    let targetY = bestPrey.y;
                    const preyOwnerCenter = bestPrey.owner ? game.getPlayerCenter(bestPrey.owner) : null;
                    if (preyOwnerCenter && bestPrey.ownerCells > 1 && this.sneakiness > 0.3) {
                        const px = bestPrey.x - preyOwnerCenter.x;
                        const py = bestPrey.y - preyOwnerCenter.y;
                        const plen = Math.sqrt(px * px + py * py) || 1;
                        const off = Math.min(180, 60 + this.sneakiness * 55);
                        targetX += (px / plen) * off + (-py / plen) * (this.retreatPolarity * (14 + this.trickiness * 18));
                        targetY += (py / plen) * off + (px / plen) * (this.retreatPolarity * (14 + this.trickiness * 18));
                    }
                    this.desiredTarget.x = targetX;
                    this.desiredTarget.y = targetY;
                    this.targetLerp = 0.09 + effectiveAggression * 0.05;
                }

                // ── Aggressive split logic ─────────────────────────────────────────
                // Bots split freely whenever they have a kill shot. No random chance
                // gate on whether to try — just whether the physics works out.
                const minSplitMass = Math.max(game.config.minSplitMass || 36, 36);
                const canSplit = this.cells.length < this.maxCellsCap
                    && this.splitCooldown <= 0
                    && myLargestBlobMass >= minSplitMass * 2;

                if (canSplit) {
                    const halfMass = myLargestBlobMass / 2;
                    const myBlobRadius = this.massToRadius(game, myLargestBlobMass);
                    // A split projectile travels roughly 2.5× the blob's radius before slowing.
                    const splitReach = myBlobRadius * 2.5 + 260;
                    const inRange = bestPrey.dist < splitReach;
                    const notTooClose = bestPrey.dist > myBlobRadius * 0.35;

                    // Will our half-mass blob beat the prey after splitting?
                    // Be aggressive: 1.05× is enough (just needs mass superiority).
                    const killRatio = 1.05 + this.splitThreshold * 0.12;
                    const canKill = halfMass > bestPrey.mass * killRatio;

                    if (canKill && inRange && notTooClose) {
                        game.splitPlayer(this);
                        // Chain-split: if our largest piece after split STILL beats prey, fire again.
                        // No random gate — keep splitting until we can't kill anymore.
                        const maxChains = Math.min(4, Math.floor(1 + effectiveBoldness * 3));
                        for (let chain = 0; chain < maxChains; chain++) {
                            if (this.cells.length >= this.maxCellsCap) break;
                            const largestNow = this.cells.reduce((mx, c) => Math.max(mx, c.mass), 0);
                            if (largestNow < minSplitMass * 2) break;
                            if ((largestNow / 2) <= bestPrey.mass * killRatio) break;
                            // Each extra split is slightly less certain — add a mild probability decay
                            if (chain > 0 && Math.random() > (0.7 - chain * 0.12)) break;
                            game.splitPlayer(this);
                        }
                        this.splitCooldown = 2.5 + Math.random() * 4;
                    }
                }
            } else {
                // Prey exists but food is much closer/better for tiny bot — eat food first
                const offset = 28;
                this.desiredTarget.x = bestFood.x + (Math.random() - 0.5) * offset;
                this.desiredTarget.y = bestFood.y + (Math.random() - 0.5) * offset;
                this.targetLerp = 0.06 + Math.random() * 0.04;
            }

            // ── Food-split: small bots blast through food clusters ─────────────────
            if (isSmallBot && bestFood && this.splitCooldown <= 0 && !closestThreat
                && myLargestBlobMass >= (game.config.minSplitMass || 36) * 2) {
                const fdx = bestFood.x - myPos.x;
                const fdy = bestFood.y - myPos.y;
                const foodDist = Math.sqrt(fdx * fdx + fdy * fdy);
                if (foodDist < 200 && bestFoodScore > 0.6 && Math.random() < 0.28 * (1 + this.greediness)) {
                    game.splitPlayer(this);
                    this.splitCooldown = 1.5 + Math.random() * 2.5;
                }
            }

        } else if (bestFood) {
            const offset = 28;
            this.desiredTarget.x = bestFood.x + (Math.random() - 0.5) * offset;
            this.desiredTarget.y = bestFood.y + (Math.random() - 0.5) * offset;
            this.targetLerp = 0.06 + Math.random() * 0.04;

            // Food-split: blast into dense food clusters to absorb fast
            if (isSmallBot && this.splitCooldown <= 0 && !closestThreat
                && myLargestBlobMass >= (game.config.minSplitMass || 36) * 2) {
                const fdx = bestFood.x - myPos.x;
                const fdy = bestFood.y - myPos.y;
                const foodDist = Math.sqrt(fdx * fdx + fdy * fdy);
                if (foodDist < 180 && bestFoodScore > 0.8 && Math.random() < 0.22 * (1 + this.greediness)) {
                    game.splitPlayer(this);
                    this.splitCooldown = 1.5 + Math.random() * 2.5;
                }
            }
        } else if (bestVirusEat) {
            // Eat a virus only as a last resort (no food or prey nearby) — lowest priority
            this.desiredTarget.x = bestVirusEat.x + (Math.random() - 0.5) * 20;
            this.desiredTarget.y = bestVirusEat.y + (Math.random() - 0.5) * 20;
            this.targetLerp = 0.05;
        } else {
            // ── Merge-awareness ───────────────────────────────────────────────────
            // If we're split into multiple cells and there's a prey that our MERGED
            // total mass could eat, converge toward the prey to merge naturally and
            // then eat it. This simulates the "merge my 16 pieces, eat the big one"
            // real player behaviour.
            let mergeChaseTarget = null;
            if (this.cells.length > 1 && bestPrey && !closestThreat) {
                const eatMassRatioMerge = Math.max(1.05, game.cellEatMassRatio || 1.25);
                if (potentialMergedMass > bestPrey.mass * eatMassRatioMerge * 1.05) {
                    // Our merged mass beats the prey — converge toward it to merge and eat
                    mergeChaseTarget = { x: bestPrey.x, y: bestPrey.y };
                }
            }

            if (mergeChaseTarget) {
                // Aim at prey so all cells converge there and naturally merge
                this.desiredTarget.x = mergeChaseTarget.x;
                this.desiredTarget.y = mergeChaseTarget.y;
                this.targetLerp = 0.09 + effectiveAggression * 0.04;
            } else {
                if (this.wanderTimer <= 0) {
                    // Larger angle delta = more decisive direction changes; avoid slow spiraling
                    this.wanderAngle += (Math.random() - 0.5) * 2.4;
                    this.wanderTimer = 1.2 + Math.random() * 2.5;
                }
                const roam = this.getRoamTarget(game, now, myPos, closestThreat);
                // Larger wander distance so bots actively sweep ground instead of circling in place
                const wanderDist = 700 + Math.random() * 400;
                const wanderX = myPos.x + Math.cos(this.wanderAngle) * wanderDist;
                const wanderY = myPos.y + Math.sin(this.wanderAngle) * wanderDist;
                // Stronger herd repulsion + anchor pull to break up center clusters
                const herdPush = Math.min(2.2, crowdRepulsion.pressure * (0.75 + this.herdResistance * 0.45));
                const anchorPull = 260;
                const roamBlend = roam ? 0.65 : 0;
                const rawX = wanderX + crowdRepulsion.x * 420 * herdPush + anchorUnitX * anchorPull;
                const rawY = wanderY + crowdRepulsion.y * 420 * herdPush + anchorUnitY * anchorPull;
                this.desiredTarget.x = rawX * (1 - roamBlend) + (roam ? roam.x : rawX) * roamBlend;
                this.desiredTarget.y = rawY * (1 - roamBlend) + (roam ? roam.y : rawY) * roamBlend;
                this.targetLerp = roam ? 0.07 : 0.045;
            }
        }

        if (this.virusAwareness > 0.4 && this.cells.length === 1 && myMass > this.virusHideMass && nearestVirus) {
            const myRadius = this.cells[0].radius();
            if (nearestVirusDist < myRadius + nearestVirus.radius + 80) {
                const away = Math.atan2(myPos.y - nearestVirus.y, myPos.x - nearestVirus.x);
                this.desiredTarget.x = myPos.x + Math.cos(away) * 420;
                this.desiredTarget.y = myPos.y + Math.sin(away) * 420;
                this.targetLerp = 0.15;
            }
        }

        this.clampTargetWithinBounds(game);
    }

    getCenter() {
        if (this.cells.length === 0) return { x: 0, y: 0 };
        let totalMass = 0;
        let cx = 0;
        let cy = 0;
        for (const c of this.cells) {
            cx += c.x * c.mass;
            cy += c.y * c.mass;
            totalMass += c.mass;
        }
        return { x: cx / totalMass, y: cy / totalMass };
    }
}

module.exports = Bot;

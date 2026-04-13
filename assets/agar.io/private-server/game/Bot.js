const CLASSIC_NAMES = [
    'AgarMaster', 'CellFrenzy', 'Mitosis', 'GobbleKing', 'Blobfish', 'Amoeba',
    'Jellyblob', 'Cellotape', 'Muncher', 'Gulp', 'Wobble', 'Squishy',
    'Plankton', 'Slurp', 'NomNom', 'Goliath', 'Pebble', 'Kraken',
    'Bubbles', 'Chomp', 'Nucleus', 'Membrane', 'Proteus', 'Jelly',
    'Gloop', 'Titan', 'Morsel', 'Osmosis', 'Leviathan', 'Droplet',
    'Cytoplasm', 'Gluttony', 'Nibbles', 'Drifter', 'Orbit', 'Flux',
    'VirusHugger', 'SplitLord', 'BaitNRun', 'LuckySpawn', 'mapControl',
    'SirEatsAlot', 'HungryHippo', 'TinyTerror', 'MacroMunch', 'SneakSplit',
];

const CHARACTER_NAMES = [
    'Goku', 'Vegeta', 'Luffy', 'Zoro', 'Sasuke', 'Itachi', 'Levi', 'Mikasa',
    'Gojo', 'Megumi', 'Naruto', 'Asta', 'Rukia', 'Ichigo', 'Denji', 'Power',
    'Piccolo', 'Kratos', 'Geralt', 'Kirby', 'MewTwo', 'ZeroTwo', 'Toji',
];

const MULTILINGUAL_NAMES = [
    '山田太郎', 'さくら', 'ドラゴン', '海賊王', 'こんにちは',
    'Лиса', 'Волк', 'Космос', 'Призрак',
    'عابر', 'سريع', 'سلام', 'نجمة', 'مرحبا',
    'नमस्ते', 'बाज़', 'ध्रुव',
    'Δέλτα', 'Αίολος', 'SeñorBlob', 'Français',
];

const SYMBOL_NAMES = [
    '( ͡° ͜ʖ ͡°)', '¯\\_(ツ)_/¯', '༼ つ ◕_◕ ༽つ', 'ಠ_ಠ', '✧･ﾟ: *✧･ﾟ:*',
    '⚡⚡⚡', '☯︎✦', '∞∞∞', '???', '.....', '______', '[[[[[]]]]]',
    'qwertyuiop', 'asdfghjkl', 'zxcvbnm', 'lmao420', 'noob.exe', 'packet_loss',
    'xX_Destroyer_Xx', 'ctrl+alt+del', '﷽﷽ ﷽ ﷽',
];

const THROWBACK_NAMES = [
    'SSundee', 'SkyDoes', 'DanTDM', 'AliA', 'PewDiePie2013', 'Vanoss',
];

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
        this.boldness = Math.max(0, Math.min(1, (game.config.botBoldnessBase ?? 0.45) + (Math.random() - 0.5) * 0.25));

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
        const threatWindow = (game.config.botSwerveThreatBuffer ?? 180) + Math.sqrt(threat.mass || 1) * 5;
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

    getVirusTrapInfo(sensedViruses, myPos, myMass) {
        const trapRange = 220 + Math.sqrt(Math.max(1, myMass)) * 8;
        let nearbyViruses = 0;
        let nearestDist = Infinity;
        let escapeVecX = 0;
        let escapeVecY = 0;
        let pressure = 0;

        for (const virus of sensedViruses || []) {
            if (!virus) continue;
            const vr = Math.sqrt(Math.max(1, virus.mass)) * 6;
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
        const myPos = this.getCenter();

        if (this.runSacrificeMode(game, senseContext, myMass, myPos)) return;

        if (this.runSupportRole(game, senseContext, myMass, myPos)) return;

        const scanRange = 520 + Math.sqrt(myMass) * 11;
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

        let closestThreat = null;
        let closestThreatDist = Infinity;
        let bestPrey = null;
        let bestPreyScore = -1;

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

            if (cell.mass > myMass * (1.22 + this.caution * 0.2)) {
                if (dist < closestThreatDist) {
                    closestThreat = { x: cell.x, y: cell.y, mass: cell.mass };
                    closestThreatDist = dist;
                }
            } else if (myMass > cell.mass * 1.2 && cell.mass > 8) {
                const juicy = 1 + Math.min(0.6, cell.mass / Math.max(myMass, 1));
                const score = (cell.mass * juicy) / (dist + 60);
                if (score > bestPreyScore) {
                    bestPreyScore = score;
                    bestPrey = { x: cell.x, y: cell.y, mass: cell.mass, dist };
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
                nearestVirus = { x: virus.x, y: virus.y, radius: Math.sqrt(virus.mass) * 6 };
            }
        }

        let hideVirus = null;
        let hideScore = -Infinity;
        if (closestThreat && myMass <= this.virusHideMass) {
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
                    hideVirus = { x: virus.x, y: virus.y, radius: Math.sqrt(virus.mass) * 6 };
                }
            }
        }

        if (
            closestThreat &&
            closestThreat.mass > myMass * 1.22 &&
            this.tryVirusWeapon(game, sensedViruses, myPos, myMass, closestThreat)
        ) {
            this.clampTargetWithinBounds(game);
            return;
        }

        let bestFood = null;
        let bestFoodScore = -1;
        const foodRange = scanRange * 0.8;
        const foodRangeSq = foodRange * foodRange;

        for (const food of sensedFood) {
            if (!food) continue;
            const dx = food.x - myPos.x;
            const dy = food.y - myPos.y;
            const distSq = dx * dx + dy * dy;
            if (distSq > foodRangeSq) continue;

            const dist = Math.sqrt(distSq);
            let score = food.mass / (dist + 40);
            if (food.type === 'ejected') {
                score *= 2.2;
            }

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
        }

        const now = Date.now();
        const benefactor = (this.recentBenefactorId && this.recentHelpUntil > now)
            ? game.resolvePlayerById(this.recentBenefactorId)
            : null;
        const benefactorPos = benefactor ? game.getPlayerCenter(benefactor) : null;
        const virusTrapInfo = this.getVirusTrapInfo(sensedViruses, myPos, myMass);

        const dangerClose = closestThreat && closestThreatDist < 340 + Math.sqrt(closestThreat.mass) * 4;
        const trapFactor = virusTrapInfo.isTrapped
            ? (1.2 + Math.min(1.6, virusTrapInfo.pressure / 180))
            : 1;
        const panicChance = (game.botPanicRetreatChance ?? 0.18) * (0.7 + this.caution * 0.6) * trapFactor;
        const panicMinMass = game.botPanicRetreatMinMass ?? 110;
        const panicBurstMax = Math.max(1, game.botPanicRetreatBurstMax ?? 4);
        const shouldPanic = dangerClose || (virusTrapInfo.isTrapped && myMass >= panicMinMass * 0.85);

        if (
            shouldPanic &&
            this.splitCooldown <= 0 &&
            myMass >= panicMinMass &&
            this.cells.length < this.maxCellsCap &&
            Math.random() < panicChance
        ) {
            if (virusTrapInfo.isTrapped) {
                this.desiredTarget.x = virusTrapInfo.escapeX + (Math.random() - 0.5) * 120;
                this.desiredTarget.y = virusTrapInfo.escapeY + (Math.random() - 0.5) * 120;
            } else {
                const fleeAngle = Math.atan2(myPos.y - closestThreat.y, myPos.x - closestThreat.x);
                this.desiredTarget.x = myPos.x + Math.cos(fleeAngle) * 760;
                this.desiredTarget.y = myPos.y + Math.sin(fleeAngle) * 760;
            }
            this.targetLerp = 0.18;

            const bursts = 1 + Math.floor(Math.random() * panicBurstMax);
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
            const hideDist = hideVirus.radius * 0.55;
            this.desiredTarget.x = hideVirus.x + Math.cos(hideAngle) * hideDist;
            this.desiredTarget.y = hideVirus.y + Math.sin(hideAngle) * hideDist;
            this.targetLerp = 0.14;
        } else if (dangerClose && this.caution > 0.3) {
            const fleeAngle = Math.atan2(myPos.y - closestThreat.y, myPos.x - closestThreat.x);
            const jitter = (Math.random() - 0.5) * 0.6;
            this.desiredTarget.x = myPos.x + Math.cos(fleeAngle + jitter) * 620;
            this.desiredTarget.y = myPos.y + Math.sin(fleeAngle + jitter) * 620;
            this.targetLerp = 0.12;
        } else if (benefactorPos && this.isGullible && Math.random() < this.gullibility) {
            this.desiredTarget.x = benefactorPos.x + (Math.random() - 0.5) * 90;
            this.desiredTarget.y = benefactorPos.y + (Math.random() - 0.5) * 90;
            this.targetLerp = 0.08;
        } else if (bestPrey && this.aggression > 0.35 && myMass > 35) {
            const smartTarget = this.getSwerveTarget(game, myPos, bestPrey, closestThreat);
            if (smartTarget) {
                this.desiredTarget.x = smartTarget.x;
                this.desiredTarget.y = smartTarget.y;
                this.targetLerp = smartTarget.lerp;
            } else {
                this.desiredTarget.x = bestPrey.x;
                this.desiredTarget.y = bestPrey.y;
                this.targetLerp = 0.06 + this.aggression * 0.04;
            }

            const canSplit = this.cells.length < this.maxCellsCap && this.splitCooldown <= 0 && myMass > 60;
            if (canSplit) {
                const halfMass = myMass / 2;
                const splitWindow = bestPrey.dist < 430 && bestPrey.dist > 90;
                const massAdvantage = 1.18 + this.splitThreshold * 0.25;
                const splitChance = (0.1 + this.aggression * 0.26) * (0.7 + this.smartness * 0.45);
                const conservativeKill = halfMass > bestPrey.mass * massAdvantage;
                const riskyWindowRatio = game.config.botRiskySplitMassRatio ?? 0.94;
                const riskyKill = halfMass > bestPrey.mass * riskyWindowRatio;
                const riskyChance = game.config.botRiskySplitChance ?? 0.14;
                const doRisky = !conservativeKill && riskyKill && Math.random() < riskyChance;
                if ((conservativeKill || doRisky) && splitWindow && Math.random() < splitChance) {
                    game.splitPlayer(this);
                    const burstChance = (game.botBoldSplitBurstChance ?? 0.1) * (0.6 + this.boldness * 0.95);
                    const burstLimit = Math.max(1, Math.floor(1 + this.boldness * 3));
                    let bursts = 0;
                    while (
                        bursts < burstLimit &&
                        this.cells.length < this.maxCellsCap &&
                        Math.random() < burstChance
                    ) {
                        const burstMass = this.cells.reduce((sum, c) => sum + c.mass, 0);
                        if (burstMass < Math.max(70, game.config.minSplitMass * 2.1)) break;
                        game.splitPlayer(this);
                        bursts++;
                    }
                    this.splitCooldown = 4 + Math.random() * 8;
                }
            }
        } else if (bestFood) {
            const offset = 34;
            this.desiredTarget.x = bestFood.x + (Math.random() - 0.5) * offset;
            this.desiredTarget.y = bestFood.y + (Math.random() - 0.5) * offset;
            this.targetLerp = 0.04 + Math.random() * 0.03;
        } else {
            if (this.wanderTimer <= 0) {
                this.wanderAngle += (Math.random() - 0.5) * 1.7;
                this.wanderTimer = 1.8 + Math.random() * 3.5;
            }
            const wanderDist = 470 + Math.random() * 240;
            this.desiredTarget.x = myPos.x + Math.cos(this.wanderAngle) * wanderDist;
            this.desiredTarget.y = myPos.y + Math.sin(this.wanderAngle) * wanderDist;
            this.targetLerp = 0.03;

            const cx = game.config.mapWidth / 2;
            const cy = game.config.mapHeight / 2;
            const distFromCenter = Math.sqrt((myPos.x - cx) ** 2 + (myPos.y - cy) ** 2);
            if (distFromCenter > game.config.mapWidth * 0.35) {
                this.desiredTarget.x = (this.desiredTarget.x + cx * 2) / 3;
                this.desiredTarget.y = (this.desiredTarget.y + cy * 2) / 3;
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

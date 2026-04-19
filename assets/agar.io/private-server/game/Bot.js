const path = require('path');

const FALLBACK_NAME_POOLS = {
    classic: ['AgarMaster', 'Blobfish', 'Muncher', 'Plankton', 'Gluttony', 'NomNom', 'CellFrenzy', 'TinyTerror'],
    character: ['Goku', 'Vegeta', 'Luffy', 'Zoro', 'Naruto', 'Gojo', 'Kirby', 'Piccolo'],
    multilingual: ['Sakura', 'Konnichiwa', 'Kosmos', 'Namaste', 'Delta', 'Aio', 'SenorBlob', 'Bonjour'],
    symbol: ['???', '.....', '______', '[[[[[]]]]]', 'xX_Destroyer_Xx', 'ctrl+alt+del', 'packet_loss'],
    throwback: ['DanTDM', 'AliA', 'Vanoss', 'slogoman', 'MrBeast', 'pewdiepie'],
};

const FALLBACK_GENERATOR = {
    baseNames: ['AgarMaster', 'NomNom', 'Gluttony', 'Muncher', 'Blobfish', 'Goku', 'Kirby', 'Drifter', 'TinyTerror'],
    prefixes: ['xX', '[CLN]', 'TUT_', 'vV', 'Pro', 'Noob', 'OG', 'Bot_'],
    suffixes: ['_bot', '_YT', 'xX', '_gg', '_tv', '_main', '_alt', '420'],
    styles: ['none', 'fullwidth', 'circled', 'bold', 'script', 'fraktur', 'smallcaps'],
    options: {
        emptyNameChance: 0.13,
        prefixChance: 0.38,
        suffixChance: 0.46,
        styleChance: 0.35,
        numberSuffixChance: 0.25,
        maxLength: 28,
    },
};

function sanitizeNamePool(pool, fallback) {
    if (!Array.isArray(pool)) return [...fallback];
    const cleaned = pool
        .map((n) => (typeof n === 'string' ? n.trim() : ''))
        .filter((n) => n.length > 0)
        .slice(0, 2000);
    return cleaned.length > 0 ? cleaned : [...fallback];
}

function sanitizeChance(value, fallback) {
    const v = Number(value);
    if (!Number.isFinite(v)) return fallback;
    return Math.max(0, Math.min(1, v));
}

function sanitizeMaxLength(value, fallback) {
    const v = Math.floor(Number(value));
    if (!Number.isFinite(v)) return fallback;
    return Math.max(8, Math.min(64, v));
}

function codepointRun(start, count) {
    let out = '';
    for (let i = 0; i < count; i++) out += String.fromCodePoint(start + i);
    return out;
}

function getBuiltinFontStyles() {
    const circledDigits = `${String.fromCodePoint(0x24EA)}${codepointRun(0x2460, 9)}`;
    const smallcapsMap = {
        a: '\u1D00', b: '\u0299', c: '\u1D04', d: '\u1D05', e: '\u1D07', f: '\uA730', g: '\u0262', h: '\u029C',
        i: '\u026A', j: '\u1D0A', k: '\u1D0B', l: '\u029F', m: '\u1D0D', n: '\u0274', o: '\u1D0F', p: '\u1D18',
        q: '\u01EB', r: '\u0280', s: 's', t: '\u1D1B', u: '\u1D1C', v: '\u1D20', w: '\u1D21', x: 'x',
        y: '\u028F', z: '\u1D22',
    };
    const smallcapsUpper = {};
    for (const [k, v] of Object.entries(smallcapsMap)) smallcapsUpper[k.toUpperCase()] = v;

    return {
        fullwidth: {
            uppercase: codepointRun(0xFF21, 26),
            lowercase: codepointRun(0xFF41, 26),
            digits: codepointRun(0xFF10, 10),
        },
        circled: {
            uppercase: codepointRun(0x24B6, 26),
            lowercase: codepointRun(0x24D0, 26),
            digits: circledDigits,
        },
        bold: {
            uppercase: codepointRun(0x1D400, 26),
            lowercase: codepointRun(0x1D41A, 26),
            digits: codepointRun(0x1D7CE, 10),
        },
        script: {
            uppercase: codepointRun(0x1D4D0, 26),
            lowercase: codepointRun(0x1D4EA, 26),
            digits: '0123456789',
        },
        fraktur: {
            uppercase: codepointRun(0x1D56C, 26),
            lowercase: codepointRun(0x1D586, 26),
            digits: codepointRun(0x1D7CE, 10),
        },
        smallcaps: {
            charMap: { ...smallcapsMap, ...smallcapsUpper },
        },
    };
}

function sanitizeFontStyle(definition, fallback = null) {
    if (!definition || typeof definition !== 'object') return fallback;
    const uppercase = typeof definition.uppercase === 'string' ? definition.uppercase : '';
    const lowercase = typeof definition.lowercase === 'string' ? definition.lowercase : '';
    const digits = typeof definition.digits === 'string' ? definition.digits : '';
    const charMapRaw = (definition.charMap && typeof definition.charMap === 'object') ? definition.charMap : {};
    const charMap = {};
    for (const [k, v] of Object.entries(charMapRaw)) {
        if (typeof k !== 'string' || k.length === 0) continue;
        if (typeof v !== 'string' || v.length === 0) continue;
        charMap[k] = v;
    }

    const upperChars = Array.from(uppercase);
    const lowerChars = Array.from(lowercase);
    const digitChars = Array.from(digits);
    const hasAlphabet = upperChars.length === 26 && lowerChars.length === 26;
    const hasDigits = digitChars.length === 10;
    const hasCharMap = Object.keys(charMap).length > 0;
    if (!hasAlphabet && !hasDigits && !hasCharMap) return fallback;

    return {
        uppercase: hasAlphabet ? upperChars : (fallback ? fallback.uppercase : null),
        lowercase: hasAlphabet ? lowerChars : (fallback ? fallback.lowercase : null),
        digits: hasDigits ? digitChars : (fallback ? fallback.digits : null),
        charMap: hasCharMap ? charMap : (fallback ? (fallback.charMap || null) : null),
    };
}

function loadFontStyles() {
    const builtins = getBuiltinFontStyles();
    const fontsPath = path.join(__dirname, '..', 'fonts.json');
    try {
        // eslint-disable-next-line global-require, import/no-dynamic-require
        const raw = require(fontsPath);
        const stylesRaw = (raw && typeof raw === 'object' && raw.styles && typeof raw.styles === 'object')
            ? raw.styles
            : {};
        const merged = { ...builtins };
        for (const [nameRaw, def] of Object.entries(stylesRaw)) {
            const name = `${nameRaw || ''}`.trim().toLowerCase();
            if (!name || name === 'none') continue;
            merged[name] = sanitizeFontStyle(def, merged[name] || null);
        }
        return merged;
    } catch (err) {
        return builtins;
    }
}

function sanitizeStyleList(styles, fallback, allowedStyleKeys) {
    const allowed = new Set(['none', ...allowedStyleKeys]);
    const src = Array.isArray(styles) ? styles : fallback;
    const cleaned = src
        .map((s) => `${s || ''}`.trim().toLowerCase())
        .filter((s) => allowed.has(s));
    return cleaned.length > 0 ? Array.from(new Set(cleaned)) : [...fallback];
}

function mapAsciiCharWithStyle(ch, styleDef) {
    const cp = ch.codePointAt(0);
    const isUpper = cp >= 65 && cp <= 90;
    const isLower = cp >= 97 && cp <= 122;
    const isDigit = cp >= 48 && cp <= 57;

    if (styleDef && styleDef.charMap && styleDef.charMap[ch]) return styleDef.charMap[ch];
    if (isUpper && styleDef && Array.isArray(styleDef.uppercase) && styleDef.uppercase.length === 26) {
        return styleDef.uppercase[cp - 65] || ch;
    }
    if (isLower && styleDef && Array.isArray(styleDef.lowercase) && styleDef.lowercase.length === 26) {
        return styleDef.lowercase[cp - 97] || ch;
    }
    if (isDigit && styleDef && Array.isArray(styleDef.digits) && styleDef.digits.length === 10) {
        return styleDef.digits[cp - 48] || ch;
    }
    return ch;
}

function stylizeName(text, style, fontStyleMap) {
    if (!style || style === 'none' || typeof text !== 'string' || text.length === 0) return text;
    const styleDef = fontStyleMap[style];
    if (!styleDef) return text;
    let out = '';
    for (const ch of text) out += mapAsciiCharWithStyle(ch, styleDef);
    return out;
}

function loadNameConfig(allowedStyleKeys = []) {
    const namesPath = path.join(__dirname, '..', 'names.json');
    try {
        // eslint-disable-next-line global-require, import/no-dynamic-require
        const raw = require(namesPath);
        const pools = {
            classic: sanitizeNamePool(raw.classic, FALLBACK_NAME_POOLS.classic),
            character: sanitizeNamePool(raw.character, FALLBACK_NAME_POOLS.character),
            multilingual: sanitizeNamePool(raw.multilingual, FALLBACK_NAME_POOLS.multilingual),
            symbol: sanitizeNamePool(raw.symbol, FALLBACK_NAME_POOLS.symbol),
            throwback: sanitizeNamePool(raw.throwback, FALLBACK_NAME_POOLS.throwback),
        };
        const fallbackBaseNames = Array.from(new Set([
            ...pools.classic,
            ...pools.character,
            ...pools.throwback,
        ]));
        const generatorRaw = raw.generator || {};
        const optionsRaw = generatorRaw.options || {};
        return {
            pools,
            baseNames: sanitizeNamePool(
                generatorRaw.baseNames || raw.baseNames,
                fallbackBaseNames.length > 0 ? fallbackBaseNames : FALLBACK_GENERATOR.baseNames
            ),
            prefixes: sanitizeNamePool(
                generatorRaw.prefixes || raw.prefixes,
                FALLBACK_GENERATOR.prefixes
            ),
            suffixes: sanitizeNamePool(
                generatorRaw.suffixes || raw.suffixes,
                FALLBACK_GENERATOR.suffixes
            ),
            styles: sanitizeStyleList(
                generatorRaw.styles || raw.styles,
                FALLBACK_GENERATOR.styles,
                allowedStyleKeys
            ),
            options: {
                emptyNameChance: sanitizeChance(optionsRaw.emptyNameChance, FALLBACK_GENERATOR.options.emptyNameChance),
                prefixChance: sanitizeChance(optionsRaw.prefixChance, FALLBACK_GENERATOR.options.prefixChance),
                suffixChance: sanitizeChance(optionsRaw.suffixChance, FALLBACK_GENERATOR.options.suffixChance),
                styleChance: sanitizeChance(optionsRaw.styleChance, FALLBACK_GENERATOR.options.styleChance),
                numberSuffixChance: sanitizeChance(optionsRaw.numberSuffixChance, FALLBACK_GENERATOR.options.numberSuffixChance),
                maxLength: sanitizeMaxLength(optionsRaw.maxLength, FALLBACK_GENERATOR.options.maxLength),
            },
        };
    } catch (err) {
        return {
            pools: { ...FALLBACK_NAME_POOLS },
            baseNames: [...FALLBACK_GENERATOR.baseNames],
            prefixes: [...FALLBACK_GENERATOR.prefixes],
            suffixes: [...FALLBACK_GENERATOR.suffixes],
            styles: [...FALLBACK_GENERATOR.styles],
            options: { ...FALLBACK_GENERATOR.options },
        };
    }
}

const FONT_STYLE_MAP = loadFontStyles();
const NAME_CONFIG = loadNameConfig(Object.keys(FONT_STYLE_MAP));

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

        this.baseThinkInterval = game.config.botThinkInterval ?? 0.12;
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
        this.foodFocus = null;
        this.foodFocusUntil = 0;
        this.cornerIndex = Math.floor(Math.random() * 4);
        this.cornerCampUntil = 0;
        this.cornerCampChance = 0.004 + Math.random() * 0.02;
        this.edgeAffinity = 0.08 + Math.random() * 0.28;
        this.lastChaseOwnerId = null;
        this.roamTarget = null;
        this.roamTargetRefreshAt = 0;
        // Keep a broad spread, but avoid over-biasing edge lanes.
        const spreadX = game.config.mapWidth * (0.18 + Math.random() * 0.64);
        const spreadY = game.config.mapHeight * (0.18 + Math.random() * 0.64);
        this.homeAnchor = { x: spreadX, y: spreadY };
        this.homeAnchorRefreshAt = Date.now() + 12000 + Math.random() * 18000;

        this.applyPersonalityScales(game, true);
    }

    pickName() {
        const opts = NAME_CONFIG.options || FALLBACK_GENERATOR.options;
        if (Math.random() < opts.emptyNameChance) return '';

        const basePool = NAME_CONFIG.baseNames && NAME_CONFIG.baseNames.length > 0
            ? NAME_CONFIG.baseNames
            : NAME_CONFIG.pools.classic;
        const base = basePool[Math.floor(Math.random() * basePool.length)] || '';
        if (!base) return '';

        const prefixPool = Array.isArray(NAME_CONFIG.prefixes) ? NAME_CONFIG.prefixes : [];
        const suffixPool = Array.isArray(NAME_CONFIG.suffixes) ? NAME_CONFIG.suffixes : [];
        const prefix = (prefixPool.length > 0 && Math.random() < opts.prefixChance)
            ? prefixPool[Math.floor(Math.random() * prefixPool.length)]
            : '';
        const suffix = (suffixPool.length > 0 && Math.random() < opts.suffixChance)
            ? suffixPool[Math.floor(Math.random() * suffixPool.length)]
            : '';

        let composed = `${prefix || ''}${base}${suffix || ''}`;
        const asciiOnly = /^[\w.\-+]+$/.test(base);
        if (asciiOnly && Math.random() < opts.numberSuffixChance) {
            composed = `${composed}${Math.floor(Math.random() * 90 + 10)}`;
        }
        const stylePool = Array.isArray(NAME_CONFIG.styles) ? NAME_CONFIG.styles : [];
        if (stylePool.length > 0 && Math.random() < opts.styleChance) {
            const style = stylePool[Math.floor(Math.random() * stylePool.length)];
            composed = stylizeName(composed, style, FONT_STYLE_MAP);
        }
        if (composed.length > opts.maxLength) {
            composed = composed.slice(0, opts.maxLength);
        }
        return composed.trim();
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

    getBestSpectatorTarget(senseContext, myPos, game = null) {
        const players = senseContext && senseContext.players ? senseContext.players : [];

        // Hack-spawned feeder bots can hard-lock to a specific player.
        if (Number.isInteger(this.forceFollowPlayerId)) {
            for (const p of players) {
                if (!p || !p.pos || p.id !== this.forceFollowPlayerId || p.mass <= 0) continue;
                const dx = p.pos.x - myPos.x;
                const dy = p.pos.y - myPos.y;
                const distSq = dx * dx + dy * dy;
                return {
                    ...p,
                    dist: Math.sqrt(distSq),
                    distSq,
                };
            }
            if (game && typeof game.resolvePlayerById === 'function') {
                const hardTarget = game.resolvePlayerById(this.forceFollowPlayerId);
                if (hardTarget && typeof game.getPlayerCenter === 'function') {
                    let pos = game.getPlayerCenter(hardTarget);
                    let mass = typeof game.getPlayerMass === 'function' ? game.getPlayerMass(hardTarget) : 0;
                    // Support following spectating/dead human targets too, so feeder bots
                    // don't stop racing when the target has no alive cells.
                    if (!pos && hardTarget.spectating && hardTarget.spectateCenter) {
                        pos = {
                            x: Number(hardTarget.spectateCenter.x) || (game.config.mapWidth / 2),
                            y: Number(hardTarget.spectateCenter.y) || (game.config.mapHeight / 2),
                        };
                        mass = Math.max(1, Number(mass) || 1);
                    }
                    if (pos && mass > 0) {
                        const dx = pos.x - myPos.x;
                        const dy = pos.y - myPos.y;
                        const distSq = dx * dx + dy * dy;
                        return {
                            id: hardTarget.id,
                            name: hardTarget.name || '',
                            mass,
                            pos,
                            isHuman: !hardTarget.isBot,
                            supportLoad: 0,
                            teamId: hardTarget.teamId,
                            dist: Math.sqrt(distSq),
                            distSq,
                        };
                    }
                }
            }
        }

        let best = null;
        let bestScore = -Infinity;
        const forceFollowAllPlayers = !!this.forceFollowAllPlayers;

        for (const p of players) {
            if (!p || !p.pos || p.id === this.id || p.mass <= 0) continue;
            if (!forceFollowAllPlayers && p.isHuman && (p.supportLoad || 0) >= this.maxSupportersPerHuman && p.id !== this.recentBenefactorId) {
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
            const score = forceFollowAllPlayers
                ? (p.mass * 0.95 - dist * 1.25 + (p.isHuman ? 80 : 20))
                : (p.mass * 1.25 - dist * 0.85 + humanBonus - loadPenalty);
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
        const mw = game.config.mapWidth;
        const mh = game.config.mapHeight;
        const maxRadius = (this.cells || []).reduce((mx, c) => {
            if (!c || !Number.isFinite(Number(c.mass))) return mx;
            return Math.max(mx, this.massToRadius(game, Math.max(1, Number(c.mass))));
        }, 0);
        // Keep targets comfortably inside the map so bots stop pressing boundaries.
        const inset = Math.max(40, Math.min(220, maxRadius + 26));
        this.desiredTarget.x = Math.max(inset, Math.min(mw - inset, this.desiredTarget.x));
        this.desiredTarget.y = Math.max(inset, Math.min(mh - inset, this.desiredTarget.y));
        // Clamp the live target too; if this drifts beyond bounds, bots can keep
        // "pushing" into walls for several ticks even when desiredTarget is valid.
        if (!this.target || !Number.isFinite(this.target.x) || !Number.isFinite(this.target.y)) {
            this.target = { x: this.desiredTarget.x, y: this.desiredTarget.y };
        }
        this.target.x = Math.max(inset, Math.min(mw - inset, this.target.x));
        this.target.y = Math.max(inset, Math.min(mh - inset, this.target.y));
    }

    refreshHomeAnchor(game, now) {
        if (!this.homeAnchor || !Number.isFinite(this.homeAnchor.x) || !Number.isFinite(this.homeAnchor.y)) {
            this.homeAnchor = { x: game.config.mapWidth / 2, y: game.config.mapHeight / 2 };
        }
        if (now < (this.homeAnchorRefreshAt || 0)) return;
        this.homeAnchorRefreshAt = now + 12000 + Math.random() * 18000;
        // Keep anchors mostly inside the playable interior so bots don't hug map edges.
        const pickAxis = (size) => size * (0.14 + Math.random() * 0.72);
        this.homeAnchor.x = pickAxis(game.config.mapWidth);
        this.homeAnchor.y = pickAxis(game.config.mapHeight);
    }

    getCornerPoint(game, index, inset = 56) {
        const xMax = game.config.mapWidth;
        const yMax = game.config.mapHeight;
        const i = ((index % 4) + 4) % 4;
        if (i === 0) return { x: inset, y: inset };
        if (i === 1) return { x: xMax - inset, y: inset };
        if (i === 2) return { x: xMax - inset, y: yMax - inset };
        return { x: inset, y: yMax - inset };
    }

    maybeGetCornerCampTarget(game, now, myMass, dangerClose) {
        const minCampMass = Math.max(40, game.config.startMass * 1.85);
        // Don't corner-camp while split; it creates prolonged edge pinning.
        if (myMass < minCampMass || (this.cells && this.cells.length > 1)) {
            this.cornerCampUntil = 0;
            return null;
        }
        const opportunisticCamp = !dangerClose && Math.random() < 0.0006;
        if ((dangerClose || opportunisticCamp) && now >= (this.cornerCampUntil || 0)) {
            const chance = this.cornerCampChance * (0.35 + this.sheepishness * 0.15);
            if (Math.random() < chance) {
                this.cornerCampUntil = now + 3500 + Math.random() * 7000;
                this.cornerIndex = Math.floor(Math.random() * 4);
            }
        }
        if (now < (this.cornerCampUntil || 0)) {
            const safeInset = Math.max(90, Math.min(260, this.massToRadius(game, Math.max(1, myMass)) + 72));
            return this.getCornerPoint(game, this.cornerIndex, safeInset + Math.random() * 18);
        }
        return null;
    }

    getDistributedEdgeEscape(game, myPos, retreatUnitX, retreatUnitY, crowdRepulsion) {
        // Intentionally avoid edge destinations: flee away from threat while pulling inward.
        const centerX = game.config.mapWidth * 0.5;
        const centerY = game.config.mapHeight * 0.5;
        const awayDist = 420 + Math.random() * 260;
        const inwardBlend = 0.62;
        const roamBiasX = this.homeAnchor ? (this.homeAnchor.x - centerX) * 0.12 : 0;
        const roamBiasY = this.homeAnchor ? (this.homeAnchor.y - centerY) * 0.12 : 0;
        return {
            x: myPos.x + retreatUnitX * awayDist + (centerX - myPos.x) * inwardBlend + crowdRepulsion.x * 120 + roamBiasX,
            y: myPos.y + retreatUnitY * awayDist + (centerY - myPos.y) * inwardBlend + crowdRepulsion.y * 120 + roamBiasY,
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

        const outerPoint = () => ({
            x: game.config.mapWidth * (0.18 + Math.random() * 0.64),
            y: game.config.mapHeight * (0.18 + Math.random() * 0.64),
        });
        const midPoint = () => ({
            x: game.config.mapWidth  * (0.26 + Math.random() * 0.48),
            y: game.config.mapHeight * (0.26 + Math.random() * 0.48),
        });
        const anchorPoint = this.homeAnchor
            ? { x: this.homeAnchor.x, y: this.homeAnchor.y }
            : { x: game.config.mapWidth * 0.5, y: game.config.mapHeight * 0.5 };
        const centerPoint = { x: game.config.mapWidth * 0.5, y: game.config.mapHeight * 0.5 };
        const candidates = [outerPoint(), outerPoint(), midPoint(), midPoint(), anchorPoint, centerPoint];

        let best = candidates[0];
        let bestScore = -Infinity;
        for (const c of candidates) {
            const fromMe = Math.hypot(c.x - myPos.x, c.y - myPos.y);
            const threatDist = closestThreat ? Math.hypot(c.x - closestThreat.x, c.y - closestThreat.y) : 1000;
            const edgeDist = Math.min(c.x, c.y, game.config.mapWidth - c.x, game.config.mapHeight - c.y);
            const interiorBias = Math.min(220, edgeDist * 0.4);
            const score = fromMe * 0.52 + threatDist * 0.86 + interiorBias + Math.random() * 120;
            if (score > bestScore) {
                bestScore = score;
                best = c;
            }
        }

        this.roamTarget = best;
        this.roamTargetRefreshAt = now + 4200 + Math.random() * 7200;
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
            const follow = this.getBestSpectatorTarget(senseContext, myPos, game);
            if (!follow) return false;
            const forceFollow = !!this.forceFollowAllPlayers
                || (Number.isInteger(this.forceFollowPlayerId) && follow.id === this.forceFollowPlayerId);
            if (
                !forceFollow &&
                game.isTeamsMode &&
                game.isTeamsMode() &&
                follow.teamId !== this.teamId &&
                Math.random() > (game.crossTeamTeamingChance ?? 0)
            ) {
                return false;
            }

            if (forceFollow) {
                // Feeder-bot hack behavior: hard-path to owner, no orbiting.
                this.desiredTarget.x = follow.pos.x;
                this.desiredTarget.y = follow.pos.y;
                this.target.x = follow.pos.x;
                this.target.y = follow.pos.y;
                // Make hack feeders sprint to their target.
                this.targetLerp = 1;
            } else {
                const orbit = 120 + Math.sqrt(Math.max(1, follow.mass)) * 2;
                const ang = Math.atan2(myPos.y - follow.pos.y, myPos.x - follow.pos.x) + (Math.random() - 0.5) * 0.5;
                this.desiredTarget.x = follow.pos.x + Math.cos(ang) * orbit;
                this.desiredTarget.y = follow.pos.y + Math.sin(ang) * orbit;
                this.targetLerp = 0.12;
            }

            const feedCooldown = (game.config.spectatorFeedCooldownMs ?? 2400) / 1000;
            const canFeed = this.supportCooldown <= 0 && myMass >= (game.config.spectatorFeedMinMass ?? 55);
            const canSupportFollow = forceFollow
                ? true
                : (follow.isHuman ? game.canBotSupportHumanTarget(follow.id, myMass) : true);
            if (canSupportFollow && canFeed && follow.dist < 420 && (forceFollow || Math.random() < (game.config.spectatorFeedChance ?? 0.4))) {
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
        this.clampTargetWithinBounds(game);

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

        const scanRange = 900 + this.massToRadius(game, Math.max(1, myMass)) * 2.8;
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
        const ownerLargestCellById = new Map();
        for (const p of sensedPlayers) {
            if (!p || p.id == null) continue;
            ownerMassById.set(p.id, Math.max(0, Number(p.mass) || 0));
        }
        for (const sensedCell of sensedCells) {
            if (!sensedCell || !sensedCell.owner || sensedCell.owner.id == null) continue;
            const prev = ownerLargestCellById.get(sensedCell.owner.id) || 0;
            if (sensedCell.mass > prev) ownerLargestCellById.set(sensedCell.owner.id, sensedCell.mass);
        }

        let closestThreat = null;
        let closestThreatDist = Infinity;
        let threatVecX = 0;
        let threatVecY = 0;
        let threatPressure = 0;
        let bestPrey = null;
        let bestPreyScore = -1;
        let largestEdiblePlayer = null;
        let bestEdiblePlayerTarget = null;
        let bestEdiblePlayerScore = -Infinity;
        const eatMassRatio = Math.max(1.05, game.cellEatMassRatio || 1.25);
        const threatMassRatio = eatMassRatio + 0.02;
        const greediness = Math.max(0.1, this.greediness || 1);
        const sheepishness = Math.max(0.1, this.sheepishness || 1);
        const effectiveAggression = clamp(this.aggression * (0.95 + greediness * 0.28), 0.1, 1.9);
        const effectiveCaution = clamp(this.caution * (0.82 + sheepishness * 0.24), 0.08, 1.8);
        const effectiveBoldness = clamp(this.boldness * (0.78 + greediness * 0.16), 0, 1.95);
        const myRadius = this.massToRadius(game, Math.max(1, myMass));

        for (const p of sensedPlayers) {
            if (!p || p.id === this.id || !p.pos || p.mass <= 0) continue;
            if (Number.isInteger(this.teamId) && Number.isInteger(p.teamId) && this.teamId === p.teamId) {
                continue;
            }
            // Use largest blob mass for edibility check — we can only eat blobs we're big enough for
            const largestEnemyCell = ownerLargestCellById.get(p.id) || p.mass;
            if (!(myLargestBlobMass > largestEnemyCell * eatMassRatio)) continue;
            const dx = p.pos.x - myPos.x;
            const dy = p.pos.y - myPos.y;
            const distSq = dx * dx + dy * dy;
            if (distSq > scanRangeSq * 2.6) continue;
            const dist = Math.sqrt(distSq);
            const edibleScore = largestEnemyCell * 2.2 - dist * 0.75;
            if (edibleScore > bestEdiblePlayerScore) {
                bestEdiblePlayerScore = edibleScore;
                bestEdiblePlayerTarget = { x: p.pos.x, y: p.pos.y, dist, mass: largestEnemyCell, id: p.id };
            }
            if (!largestEdiblePlayer || largestEnemyCell > largestEdiblePlayer.mass) {
                largestEdiblePlayer = { id: p.id, mass: largestEnemyCell, distSq };
            }
        }

        for (const cell of sensedCells) {
            if (!cell || cell.owner === this) continue;
            if (cell.owner && Number.isInteger(this.teamId) && Number.isInteger(cell.owner.teamId) && this.teamId === cell.owner.teamId) {
                continue;
            }
            const dx = cell.x - myPos.x;
            const dy = cell.y - myPos.y;
            const distSq = dx * dx + dy * dy;
            if (distSq > scanRangeSq) continue;
            const dist = Math.sqrt(distSq);

            // Compare against myLargestBlobMass: a single enemy blob is a threat only if it
            // can eat one of our individual blobs, not just if it beats our total combined mass.
            if (cell.mass > myLargestBlobMass * Math.max(1.1, threatMassRatio)) {
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
                const fastEatBonus = Math.max(0, 420 - approachGap) * (0.72 + greediness * 0.9);
                // Bonus for lone small shards that we can absorb quickly — always chase these greedily
                const splitShardBonus = cell.mass <= myLargestBlobMass * 0.5 ? (120 + cell.mass * 1.9) * (0.72 + greediness * 0.95) : 0;
                const ownerCells = cell.owner && Array.isArray(cell.owner.cells) ? cell.owner.cells.length : 1;
                // Big bonus for split-off shards — even from large players, each small cell is easy mass
                const sneakShardBonus = ownerCells > 1 ? (55 + this.sneakiness * 55 + greediness * 40) : 0;
                // Bonus for cells we can split-kill (half-mass > prey)
                const strictEatRatio = Math.max(1.02, game.cellEatMassRatio || 1.22);
                const halfCanKill = (myLargestBlobMass / 2) > cell.mass * strictEatRatio * 1.02;
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
                const freeShardBonus = (ownerCells > 1 && cell.mass <= myLargestBlobMass * 0.45)
                    ? (120 + this.opportunism * 70 + greediness * 60)
                    : 0;
                const finishBonus = (
                    ownerId != null &&
                    this.lastChaseOwnerId != null &&
                    ownerId === this.lastChaseOwnerId
                ) ? (160 + this.opportunism * 75 + greediness * 40) : 0;
                // Edge trap bonus: prey near walls/corners has fewer escape vectors.
                const preyEdgeDist = Math.min(cell.x, cell.y, game.config.mapWidth - cell.x, game.config.mapHeight - cell.y);
                const edgeTrapBonus = Math.max(0, 180 - preyEdgeDist) * (0.22 + this.smartness * 0.22 + this.edgeAffinity * 0.58);
                const score = (cell.mass * juicy) / (dist + 45)
                    + fastEatBonus
                    + splitShardBonus
                    + sneakShardBonus
                    + splitKillBonus
                    + freeShardBonus
                    + finishBonus
                    + largestEdibleBonus
                    + leaderPressureBonus
                    + edgeTrapBonus;
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
        let remoteFoodHotspot = null;
        let remoteFoodHotspotScore = -1;
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

                // Skip food that's near a larger enemy cell
                if (closestThreat && closestThreat.mass > myLargestBlobMass) {
                    const threatToFoodDx = food.x - closestThreat.x;
                    const threatToFoodDy = food.y - closestThreat.y;
                    const threatToFoodDist = Math.sqrt(threatToFoodDx * threatToFoodDx + threatToFoodDy * threatToFoodDy);
                    if (threatToFoodDist < 300) score *= 0.3;
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

        // If local food is sparse, pick a broader hotspot so bots don't wander aimlessly.
        if (game.forEachNearbyFood) {
            const remoteFoodRange = Math.min(
                Math.max(game.config.mapWidth, game.config.mapHeight),
                foodRange * 2.35 + 420
            );
            game.forEachNearbyFood(myPos.x, myPos.y, remoteFoodRange, (food) => {
                if (!food) return;
                const dx = food.x - myPos.x;
                const dy = food.y - myPos.y;
                const distSq = dx * dx + dy * dy;
                if (distSq < foodRange * foodRange) return;
                if (distSq > remoteFoodRange * remoteFoodRange) return;
                const dist = Math.sqrt(distSq);
                const edgeDist = Math.min(food.x, food.y, game.config.mapWidth - food.x, game.config.mapHeight - food.y);
                const interiorBonus = 1 + Math.min(0.22, edgeDist / 900);
                let score = (food.mass / (dist + 80)) * interiorBonus;
                if (food.type === 'ejected') score *= 2.3;
                if (food.type === 'bounty') score *= 2.1;
                if (score > remoteFoodHotspotScore) {
                    remoteFoodHotspotScore = score;
                    remoteFoodHotspot = { x: food.x, y: food.y };
                }
            });
        } else {
            for (const food of sensedFood) {
                if (!food) continue;
                const dx = food.x - myPos.x;
                const dy = food.y - myPos.y;
                const distSq = dx * dx + dy * dy;
                if (distSq < foodRange * foodRange) continue;
                if (distSq > scanRangeSq * 3.8) continue;
                const dist = Math.sqrt(distSq);
                const edgeDist = Math.min(food.x, food.y, game.config.mapWidth - food.x, game.config.mapHeight - food.y);
                const interiorBonus = 1 + Math.min(0.22, edgeDist / 900);
                let score = (food.mass / (dist + 80)) * interiorBonus;
                if (food.type === 'ejected') score *= 2.3;
                if (food.type === 'bounty') score *= 2.1;
                if (score > remoteFoodHotspotScore) {
                    remoteFoodHotspotScore = score;
                    remoteFoodHotspot = { x: food.x, y: food.y };
                }
            }
        }

        const bestFoodDist = bestFood
            ? Math.hypot(bestFood.x - myPos.x, bestFood.y - myPos.y)
            : Infinity;
        const foodFocusActive = this.foodFocus && this.foodFocusUntil > now;
        const foodFocusDist = foodFocusActive
            ? Math.hypot(this.foodFocus.x - myPos.x, this.foodFocus.y - myPos.y)
            : Infinity;
        if (foodFocusActive && foodFocusDist <= 44) {
            this.foodFocus = null;
            this.foodFocusUntil = 0;
        }
        const preyIsFarComparedToFood = !!(
            bestPrey &&
            bestFood &&
            bestPrey.dist > Math.max(420, bestFoodDist * 1.45)
        );
        const shouldForceFoodFarm = !!(
            bestFood &&
            !closestThreat &&
            (
                isSmallBot ||
                (myLargestBlobMass < 220 && bestFoodDist < 360) ||
                preyIsFarComparedToFood ||
                bestPreyScore < 6.5
            )
        );

        // ── Virus eating ────────────────────────────────────────────────────────────
        // If we are large enough to actually eat a virus and not under pressure,
        // keep it as a fallback growth target.
        let bestVirusEat = null;
        let bestVirusEatScore = -1;
        const canEatVirus = myLargestBlobMass > (game.virusBaseMass || game.config.virusBaseMass || 64) * 1.24
            && (!closestThreat || closestThreat.mass < myLargestBlobMass * 1.12);
        if (canEatVirus) {
            for (const virus of sensedViruses) {
                if (!virus) continue;
                const dx = virus.x - myPos.x;
                const dy = virus.y - myPos.y;
                const distSq = dx * dx + dy * dy;
                if (distSq > scanRangeSq * 1.2) continue;
                const dist = Math.sqrt(distSq);
                if (myLargestBlobMass <= virus.mass * 1.2) continue;
                const vScore = virus.mass / (dist + 70);
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
            closestThreatDist < (430 + this.massToRadius(game, closestThreat.mass || 1) * ((3.9 + sheepishness * 1.1) / 5.8))
        );
        const imminentThreat = !!(
            closestThreat &&
            closestThreat.mass > myLargestBlobMass * (eatMassRatio + 0.04) &&
            closestThreatDist < (520 + this.massToRadius(game, closestThreat.mass || 1) * 0.85)
        );
        const overwhelmingThreat = !!(
            closestThreat &&
            closestThreat.mass > myLargestBlobMass * 1.75 &&
            closestThreatDist < (440 + this.massToRadius(game, closestThreat.mass || 1) * 0.7)
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
                let escapeTarget = { x: baseEscape.x * 0.58 + edgeEscape.x * 0.42, y: baseEscape.y * 0.58 + edgeEscape.y * 0.42 };

                // Check if escape path is blocked by viruses; if so, swerve around them
                if (nearestVirus) {
                    const dx = escapeTarget.x - nearestVirus.x;
                    const dy = escapeTarget.y - nearestVirus.y;
                    const distToVirus = Math.sqrt(dx * dx + dy * dy);
                    if (distToVirus < nearestVirus.radius + 120) {
                        // Swerve perpendicular to the virus
                        const swerveAngle = Math.atan2(dy, dx);
                        const swerveX = Math.cos(swerveAngle + Math.PI / 2) * 200;
                        const swerveY = Math.sin(swerveAngle + Math.PI / 2) * 200;
                        escapeTarget.x += swerveX;
                        escapeTarget.y += swerveY;
                    }
                }

                this.desiredTarget.x = escapeTarget.x;
                this.desiredTarget.y = escapeTarget.y;
            }
            this.escapeTarget = { x: this.desiredTarget.x, y: this.desiredTarget.y };
            this.escapeTargetUntil = now + 1100 + Math.random() * 1200;
            this.targetLerp = 0.18;
            this.retreatLockUntil = now + 1100 + Math.random() * 1200;

            this.target = { x: this.desiredTarget.x, y: this.desiredTarget.y };
            this.clampTargetWithinBounds(game);
            return;
        }

        if ((dangerClose || imminentThreat || overwhelmingThreat) && hideVirus && Math.random() < this.hideUnderVirusChance) {
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
        } else if (
            (dangerClose || imminentThreat || overwhelmingThreat) &&
            effectiveCaution > 0.05 &&
            (!closestThreat || closestThreat.mass > myLargestBlobMass * 1.55)
        ) {
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
                this.targetLerp = imminentThreat ? 0.17 : 0.12;
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
        } else if (shouldForceFoodFarm) {
            if (!foodFocusActive || !this.foodFocus || bestFoodDist < Math.min(190, foodFocusDist * 0.86)) {
                this.foodFocus = { x: bestFood.x, y: bestFood.y };
                this.foodFocusUntil = now + 950 + Math.random() * 800;
            }
            const focus = this.foodFocus || bestFood;
            this.desiredTarget.x = focus.x;
            this.desiredTarget.y = focus.y;
            this.targetLerp = isSmallBot ? 0.2 : 0.14;
            this.lastChaseOwnerId = null;

            if (isSmallBot && this.splitCooldown <= 0
                && myLargestBlobMass >= (game.config.minSplitMass || 36) * 2) {
                const fdx = focus.x - myPos.x;
                const fdy = focus.y - myPos.y;
                const foodDist = Math.sqrt(fdx * fdx + fdy * fdy);
                if (foodDist < 160 && bestFoodScore > 0.65 && Math.random() < 0.24 * (1 + this.greediness)) {
                    game.splitPlayer(this);
                    this.splitCooldown = 1.4 + Math.random() * 2.2;
                }
            }
        } else if (bestPrey) {
            // ── Hunt: if we can eat it, we chase it — always prefer real mass over food ──
            // Any edible cell is worth chasing — be greedy about real player mass
            const preyWorthChasing = true;

            if (preyWorthChasing) {
                if (bestPrey.approachGap < 160) {
                    this.desiredTarget.x = bestPrey.x;
                    this.desiredTarget.y = bestPrey.y;
                    this.targetLerp = 0.3;
                }
                // ── Pre-split approach: if we can kill with a split but prey is out of
                // range, dash directly toward the prey so we enter split range fast.
                const minSplitMassCheck = Math.max(game.config.minSplitMass || 36, 36);
                const halfMassCheck = myLargestBlobMass / 2;
                const myBlobRadiusCheck = this.massToRadius(game, myLargestBlobMass);
                const splitReachCheck = myBlobRadiusCheck * 3.2 + 360;
                const killRatioCheck = Math.max(1.0, game.cellEatMassRatio || 1.18);
                const canKillCheck = myLargestBlobMass >= minSplitMassCheck * 2
                    && halfMassCheck > bestPrey.mass * killRatioCheck
                    && this.splitCooldown <= 0;
                const preyOutOfSplitRange = bestPrey.dist > splitReachCheck && bestPrey.dist < splitReachCheck * 1.6;
                const approachingForSplit = canKillCheck && preyOutOfSplitRange;

                if (approachingForSplit) {
                    // Dash straight toward prey to get into split range quickly
                    this.desiredTarget.x = bestPrey.x;
                    this.desiredTarget.y = bestPrey.y;
                    this.targetLerp = 0.3;
                } else {
                const smartTarget = this.getSwerveTarget(game, myPos, bestPrey, closestThreat);
                if (smartTarget) {
                    this.desiredTarget.x = smartTarget.x;
                    this.desiredTarget.y = smartTarget.y;
                    this.targetLerp = smartTarget.lerp;
                } else {
                    let targetX = bestPrey.x;
                    let targetY = bestPrey.y;

                    // Simple prey prediction: lead toward the direction away from bot
                    const preyToBotDx = myPos.x - bestPrey.x;
                    const preyToBotDy = myPos.y - bestPrey.y;
                    const preyToBotDist = Math.sqrt(preyToBotDx * preyToBotDx + preyToBotDy * preyToBotDy) || 1;
                    const preyLeadDist = Math.min(80, preyToBotDist * 0.14);
                    targetX += (preyToBotDx / preyToBotDist) * preyLeadDist;
                    targetY += (preyToBotDy / preyToBotDist) * preyLeadDist;

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
                    this.targetLerp = 0.22 + effectiveAggression * 0.11;
                }
                }
                this.lastChaseOwnerId = bestPrey.owner && bestPrey.owner.id != null ? bestPrey.owner.id : null;

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
                    // Split projectile travels roughly 2.5–3× the radius at launch speed.
                    // Use a generous reach so bots commit when prey is clearly reachable.
                    const splitReach = myBlobRadius * 3.05 + 290;
                    const inRange = bestPrey.dist < splitReach;
                    const notTooClose = bestPrey.dist > myBlobRadius * 0.25;

                    // Will our half-mass blob beat the prey after splitting?
                    // Very low ratio — just needs mass superiority.
                    const killRatio = Math.max(1.08, game.cellEatMassRatio || 1.18);
                    const strictKillMass = bestPrey.mass * killRatio;
                    const riskySplitChance = clamp(game.config.botRiskySplitChance ?? 0.65, 0, 1);
                    const riskySplitMassRatio = clamp(game.config.botRiskySplitMassRatio ?? 0.95, 0.7, 1.4);
                    const riskyKillMass = strictKillMass * riskySplitMassRatio;
                    const canStrictKill = halfMass > strictKillMass;
                    const canRiskyKill = !canStrictKill
                        && halfMass > riskyKillMass
                        && bestPrey.dist < splitReach * 0.9
                        && Math.random() < riskySplitChance;
                    const canKill = canStrictKill || canRiskyKill;

                    // Only avoid splitting if a threat is extremely close (within 1.1× own radius)
                    // AND is significantly bigger than us. Don't let distant threats block kill shots.
                    const threatTooClose = closestThreat
                        && closestThreatDist < (myBlobRadius * 2.15 + 170)
                        && closestThreat.mass > myLargestBlobMass * 1.35;
                    const preyIsRight = bestPrey.dist < splitReach * 0.28;
                    const splitIsSafe = !threatTooClose || (preyIsRight && closestThreatDist > myBlobRadius * 1.2);

                    if (canKill && inRange && notTooClose && splitIsSafe) {
                        // CRITICAL: aim target directly at prey so split projectile goes the right way.
                        // Use a slight lead — predict where prey will be by the time the split arrives.
                        const preyDx = bestPrey.x - myPos.x;
                        const preyDy = bestPrey.y - myPos.y;
                        const preyLen = Math.sqrt(preyDx * preyDx + preyDy * preyDy) || 1;
                        // Lead the target slightly ahead of the prey's escape direction
                        const leadX = bestPrey.x + (preyDx / preyLen) * 60;
                        const leadY = bestPrey.y + (preyDy / preyLen) * 60;
                        this.target = { x: leadX, y: leadY };
                        this.desiredTarget.x = leadX;
                        this.desiredTarget.y = leadY;
                        game.splitPlayer(this);
                        this.splitCooldown = 1.1 + Math.random() * 1.7;
                    }
                }
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

        } else if (bestEdiblePlayerTarget) {
            this.desiredTarget.x = bestEdiblePlayerTarget.x;
            this.desiredTarget.y = bestEdiblePlayerTarget.y;
            this.targetLerp = 0.14 + effectiveAggression * 0.06;
        } else if (bestVirusEat && (!bestFood || bestFoodScore < 0.7)) {
            this.desiredTarget.x = bestVirusEat.x + (Math.random() - 0.5) * 18;
            this.desiredTarget.y = bestVirusEat.y + (Math.random() - 0.5) * 18;
            this.targetLerp = 0.06;
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
            this.desiredTarget.x = bestVirusEat.x + (Math.random() - 0.5) * 18;
            this.desiredTarget.y = bestVirusEat.y + (Math.random() - 0.5) * 18;
            this.targetLerp = 0.06;
        } else if (remoteFoodHotspot) {
            this.foodFocus = { x: remoteFoodHotspot.x, y: remoteFoodHotspot.y };
            this.foodFocusUntil = now + 1200 + Math.random() * 1300;
            this.desiredTarget.x = remoteFoodHotspot.x + (Math.random() - 0.5) * 28;
            this.desiredTarget.y = remoteFoodHotspot.y + (Math.random() - 0.5) * 28;
            this.targetLerp = 0.085;
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

            // Smart merge behavior: when merge timer is close to expiring, aim at our own cells' centroid to merge faster
            if (!mergeChaseTarget && this.cells.length > 1) {
                const mergeTimersExpiring = mergeable.length > 0 && mergeable.length < this.cells.length;
                if (mergeTimersExpiring) {
                    let sumX = 0, sumY = 0;
                    for (const c of mergeable) {
                        sumX += c.x;
                        sumY += c.y;
                    }
                    const centroidX = sumX / mergeable.length;
                    const centroidY = sumY / mergeable.length;
                    mergeChaseTarget = { x: centroidX, y: centroidY };
                }
            }

            if (mergeChaseTarget) {
                // Aim at prey (or merge centroid) so all cells converge there and naturally merge
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

        // Final anti-stuck pass: if we drift near map walls without urgent danger,
        // force a short inward re-entry vector so bots don't camp/get pinned on edges.
        const noUrgentThreat = !(hardDangerClose || dangerClose || imminentThreat || overwhelmingThreat);
        const edgeInset = Math.max(64, Math.min(240, myRadius + 42));
        const nearLeft = myPos.x < edgeInset;
        const nearRight = myPos.x > game.config.mapWidth - edgeInset;
        const nearTop = myPos.y < edgeInset;
        const nearBottom = myPos.y > game.config.mapHeight - edgeInset;
        if (noUrgentThreat && (nearLeft || nearRight || nearTop || nearBottom)) {
            const inwardVecX = (nearLeft ? 1 : 0) + (nearRight ? -1 : 0);
            const inwardVecY = (nearTop ? 1 : 0) + (nearBottom ? -1 : 0);
            if (inwardVecX !== 0 || inwardVecY !== 0) {
                const inwardLen = Math.sqrt(inwardVecX * inwardVecX + inwardVecY * inwardVecY) || 1;
                const inwardUnitX = inwardVecX / inwardLen;
                const inwardUnitY = inwardVecY / inwardLen;
                const centerDx = game.config.mapWidth * 0.5 - myPos.x;
                const centerDy = game.config.mapHeight * 0.5 - myPos.y;
                const centerLen = Math.sqrt(centerDx * centerDx + centerDy * centerDy) || 1;
                const centerUnitX = centerDx / centerLen;
                const centerUnitY = centerDy / centerLen;
                const pushDist = 260 + Math.min(240, myRadius * 1.9);
                this.desiredTarget.x = myPos.x + inwardUnitX * pushDist + centerUnitX * pushDist * 0.55;
                this.desiredTarget.y = myPos.y + inwardUnitY * pushDist + centerUnitY * pushDist * 0.55;
                this.targetLerp = Math.max(this.targetLerp, 0.18);
                this.cornerCampUntil = 0;
                this.escapeTarget = { x: this.desiredTarget.x, y: this.desiredTarget.y };
                this.escapeTargetUntil = now + 420 + Math.random() * 380;
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




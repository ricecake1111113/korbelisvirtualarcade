import { projectileData } from './projectileData.js';
import { abilityData } from './abilityData.js';

export const pokemonData = {
	charmander: {
		id: 0,
		name: ['charmander', 'charmander', 'salamèche', 'charmander', 'charmander', 'glumanda', 'ヒトカゲ', '파이리'],
		color: '#ff8463',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/charmander.png',
			image: './src/assets/images/pokemon/towers/charmander-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1100,
			scale: 0
		},
		power: {
			base: 13,
			scale: 2,
		},
		critical: {
			base: 0.5,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'charmeleon',
			level: 16
		},	
	},
	charmeleon: {
		id: 0,
		name: ['charmeleon', 'charmeleon', 'reptincel', 'charmeleon', 'charmeleon', 'glutexo', 'リザード', '리자드'],
		color: '#d63900',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/charmeleon.png',
			image: './src/assets/images/pokemon/towers/charmeleon-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 950,
			scale: -2
		},
		power: {
			base: 25,
			scale: 2.4,
		},
		critical: {
			base: 2,
			scale: 0.1
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'charizard',
			level: 36
		},	
	},
	charizard: {
		id: 0,
		name: ['charizard', 'charizard', 'dracaufeu', 'charizard', 'charizard', 'glurak', 'リザードン', '리자몽'],
		color: '#d63801',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/charizard.png',
			image: './src/assets/images/pokemon/towers/charizard-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 940,
			scale: -2
		},
		power: {
			base: 55,
			scale: 4.3,
		},
		critical: {
			base: 2,
			scale: 0.1
		},
		range: {
			base: 165,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],	
	},
	treecko: {
		id: 1,
		name: ['treecko', 'treecko', 'arcko', 'treecko', 'treecko', 'geckarbor', 'キモリ', '나무지기'],
		color: '#b7d667',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/treecko.png',
			image: './src/assets/images/pokemon/towers/treecko-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -2
		},
		power: {
			base: 10,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0.2
		},
		range: {
			base: 95,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'grovyle',
			level: 16,
		},	
	},
	grovyle: {
		id: 1,
		name: ['grovyle', 'grovyle', 'massko', 'grovyle', 'grovyle', 'reptain', 'ジュプトル', '나무돌이'],
		color: '#368f0e',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/grovyle.png',
			image: './src/assets/images/pokemon/towers/grovyle-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -3
		},
		power: {
			base: 27,
			scale: 2.2,
		},
		critical: {
			base: 0,
			scale: 0.25
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'sceptile',
			level: 36,
		},	
	},
	sceptile: {
		id: 1,
		name: ['sceptile', 'sceptile', 'jungko', 'sceptile', 'sceptile', 'gewaldro', 'ジュカイン', '나무킹'],
		color: '#9fcf6f',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/sceptile.png',
			image: './src/assets/images/pokemon/towers/sceptile-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1150,
			scale: -3
		},
		power: {
			base: 50,
			scale: 4.9,
		},
		critical: {
			base: 0,
			scale: 0.3
		},
		range: {
			base: 145,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	froaki: {
		id: 2,
		name: ['froakie', 'froakie', 'grenousse', 'froakie', 'froakie', 'groxy', 'ケロマツ', '개구마르'],
		color: '#20adbc',
		ability: abilityData['ninja'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 3,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/froaki.png',
			image: './src/assets/images/pokemon/towers/froaki-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -1
		},
		power: {
			base: 5,
			scale: 1,
		},
		critical: {
			base: 0.5,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'frogadier',
			level: 16,
		},	
	},
	frogadier: {
		id: 2,
		name: ['frogadier', 'frogadier', 'croâporal', 'frogadier', 'frogadier', 'amphizel', 'ゲコガシラ', '개굴반장'],
		color: '#4366b7',
		ability: abilityData['ninja'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 4,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/frogadier.png',
			image: './src/assets/images/pokemon/towers/frogadier-idle.png',
			frames: 15,
			hold: 5
		},
		speed: {
			base: 900,
			scale: -2
		},
		power: {
			base: 8,
			scale: 1.2,
		},
		critical: {
			base: 1.5,
			scale: 0.2
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'greninja',
			level: 36,
		},	
	},
	greninja: {
		id: 2,
		name: ['greninja', 'greninja', 'amphinobi', 'greninja', 'greninja', 'quajutsu', 'ゲッコウガ', '개굴닌자'],
		color: '#2657ba',
		ability: abilityData['ninja'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 5,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/greninja.png',
			image: './src/assets/images/pokemon/towers/greninja-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 800,
			scale: -5
		},
		power: {
			base: 10,
			scale: 1.55,
		},
		critical: {
			base: 5,
			scale: 0.4
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
	},
	spoink: {
		id: 3,
		name: ['spoink', 'spoink', 'spoink', 'spoink', 'spoink', 'spoink', 'バネブー', '피그점프'],
		color: '#aeb6bf',
		ability: abilityData['frisk'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/spoink.png',
			image: './src/assets/images/pokemon/towers/spoink-idle.png',
			frames: 8,
			hold: 10
		},
		speed: {
			base: 1800,
			scale: -2
		},
		power: {
			base: 30,
			scale: 3,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'grumpig',
			level: 32
		},	
	},
	grumpig: {
		id: 3,
		name: ['grumpig', 'grumpig', 'groret', 'grumpig', 'grumpig', 'groink', 'ブーピッグ', '피그킹'],
		color: '#c797de',
		ability: abilityData['frisk'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/grumpig.png',
			image: './src/assets/images/pokemon/towers/grumpig-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -5
		},
		power: {
			base: 70,
			scale: 6.2,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 4],	
	},
	natu: {
		id: 4,
		name: ['natu', 'natu', 'natu', 'natu', 'natu', 'natu', 'ネイティ', '네이티'],
		color: '#9fcf6f',
		ability: abilityData['frisk'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/natu.png',
			image: './src/assets/images/pokemon/towers/natu-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1400,
			scale: -3
		},
		power: {
			base: 20,
			scale: 2.7,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'xatu',
			level: 25
		},	
	},
	xatu: {
		id: 4,
		name: ['xatu', 'xatu', 'xatu', 'xatu', 'xatu', 'xatu', 'ネイティオ', '네이티오'],
		color: '#5fb727',
		ability: abilityData['frisk'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/xatu.png',
			image: './src/assets/images/pokemon/towers/xatu-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1350,
			scale: -5.5
		},
		power: {
			base: 35,
			scale: 4,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],	
	},
	voltorb: {
		id: 5,
		name: ['voltorb', 'voltorb', 'voltorbe', 'voltorb', 'voltorb', 'voltobal', 'ビリリダマ', '찌리리공'],
		color: '#d63901',
		ability: abilityData['stunMonoNerf'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/voltorb.png',
			image: './src/assets/images/pokemon/towers/voltorb-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 650,
			scale: -2
		},
		power: {
			base: 4,
			scale: 1,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'electrode',
			level: 30
		},	
	},
	electrode: {
		id: 5,
		name: ['electrode', 'electrode', 'électrode', 'electrode', 'electrode', 'lektrobal', 'マルマイン', '붐볼'],
		color: '#adb4bc',
		ability: abilityData['stunMonoNerf'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/electrode.png',
			image: './src/assets/images/pokemon/towers/electrode-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 650,
			scale: -3
		},
		power: {
			base: 20,
			scale: 1.2,
		},
		critical: {
			base: 15,
			scale: 0
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],	
	},
	ekans: {
		id: 6,
		name: ['ekans', 'ekans', 'abo', 'ekans', 'ekans', 'rettan', 'アーボ', '아보'],
		color: '#b594df',
		ability: abilityData['poison'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/ekans.png',
			image: './src/assets/images/pokemon/towers/ekans-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1800,
			scale: -2
		},
		power: {
			base: 12,
			scale: 2.2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1],
		evolution: {
			pokemon: 'arbok',
			level: 22
		},	
	},
	arbok: {
		id: 6,
		name: ['arbok', 'arbok', 'arbok', 'arbok', 'arbok', 'arbok', 'アーボック', '아보크'],
		color: '#8c62bc',
		ability: abilityData['poison'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/arbok.png',
			image: './src/assets/images/pokemon/towers/arbok-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1800,
			scale: -3
		},
		power: {
			base: 70,
			scale: 6,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1],	
	},
	machop: {
		id: 7,
		name: ['machop', 'machop', 'machoc', 'machop', 'machop', 'machollo', 'ワンリキー', '알통몬'],
		color: '#8cacb5',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/machop.png',
			image: './src/assets/images/pokemon/towers/machop-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1650,
			scale: -1
		},
		power: {
			base: 9,
			scale: 4,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'machoke',
			level: 28
		},	
	},
	machoke: {
		id: 7,
		name: ['machoke', 'machoke', 'machopeur', 'machoke', 'machoke', 'maschock', 'ゴーリキー', '근육몬'],
		color: '#b595de',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/machoke.png',
			image: './src/assets/images/pokemon/towers/machoke-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -1
		},
		power: {
			base: 30,
			scale: 6.5,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'machamp',
			level: 42
		},	
	},
	machamp: {
		id: 7,
		name: ['machamp', 'machamp', 'mackogneur', 'machamp', 'machamp', 'machomei', 'カイリキー', '괴력몬'],
		color: '#d7e6df',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/machamp.png',
			image: './src/assets/images/pokemon/towers/machamp-idle.png',
			frames: 10,
			hold: 7
		},
		speed: {
			base: 1600,
			scale: -1
		},
		power: {
			base: 70,
			scale: 17.5,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 125,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],	
	},
	mankey: {
		id: 8,
		name: ['mankey', 'mankey', 'férosinge', 'mankey', 'mankey', 'menki', 'マンキー', '망키'],
		color: '#fff79c',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/mankey.png',
			image: './src/assets/images/pokemon/towers/mankey-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1300,
			scale: -2
		},
		power: {
			base: 12,
			scale: 3.8,
		},
		critical: {
			base: 0,
			scale: 0.3
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'primeape',
			level: 28
		},	
	},
	primeape: {
		id: 8,
		name: ['primeape', 'primeape', 'colossinge', 'primeape', 'primeape', 'rasaff', 'オコリザル', '성원숭'],
		color: '#fe845a',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/primeape.png',
			image: './src/assets/images/pokemon/towers/primeape-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 1150,
			scale: -3
		},
		power: {
			base: 55,
			scale: 6.5,
		},
		critical: {
			base: 0,
			scale: 0.3
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
	},
	chimchar: {
		id: 9,
		name: ['chimchar', 'chimchar', 'ouisticram', 'chimchar', 'chimchar', 'panflam', 'ヒコザル', 'chimchar'],
		color: '#df771e',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/towers/chimchar.png',
			image: './src/assets/images/pokemon/towers/chimchar-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1150,
			scale: -2
		},
		power: {
			base: 15,
			scale: 2,
		},
		critical: {
			base: 1.4,
			scale: 0.2
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'monferno',
			level: 16,
		},	
	},
	monferno: {
		id: 9,
		name: ['monferno', 'monferno', 'chimpenfeu', 'monferno', 'monferno', 'panpyro', 'モウカザル', '파이숭이'],
		color: '#ff962f',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/towers/monferno.png',
			image: './src/assets/images/pokemon/towers/monferno-idle.png',
			frames: 11,
			hold: 7
		},
		speed: {
			base: 1050,
			scale: -3
		},
		power: {
			base: 25,
			scale: 2.2,
		},
		critical: {
			base: 2,
			scale: 0.3
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'infernape',
			level: 36,
		},	
	},
	infernape: {
		id: 9,
		name: ['infernape', 'infernape', 'simiabraz', 'infernape', 'infernape', 'panferno', 'ゴウカザル', '초염몽'],
		color: '#df8626',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/towers/infernape.png',
			image: './src/assets/images/pokemon/towers/infernape-idle.png',
			frames: 15,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -5
		},
		power: {
			base: 60,
			scale: 3,
		},
		critical: {
			base: 2.5,
			scale: 0.4
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
	},
	yamask: {
		id: 10,
		name: ['yamask', 'yamask', 'tutafeh', 'yamask', 'yamask', 'makabaja', 'デスマス', '데스마스'],
		color: '#708088',
		ability: abilityData['curse'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/yamask.png',
			image: './src/assets/images/pokemon/towers/yamask-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 2770,
			scale: -1
		},
		power: {
			base: 20,
			scale: 2.6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 220,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'cofagrigus',
			level: 35
		},	
	},
	cofagrigus: {
		id: 10,
		name: ['cofagrigus', 'cofagrigus', 'tutankafer', 'cofagrigus', 'cofagrigus', 'echnatoll', 'デスカーン', '데스니칸'],
		color: '#ffef47',
		ability: abilityData['curse'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/cofagrigus.png',
			image: './src/assets/images/pokemon/towers/cofagrigus-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -6
		},
		power: {
			base: 40,
			scale: 4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 280,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
	},
	riolu: {
		id: 11,
		name: ['riolu', 'riolu', 'riolu', 'riolu', 'riolu', 'riolu', 'リオル', '리오르'],
		color: '#1e9ee6',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue2'],
		sprite: {
			base: './src/assets/images/pokemon/towers/riolu.png',
			image: './src/assets/images/pokemon/towers/riolu-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1300,
			scale: -2
		},
		power: {
			base: 7,
			scale: 2.2,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'lucario',
			level: 20
		},	
	},
	lucario: {
		id: 11,
		name: ['lucario', 'lucario', 'lucario', 'lucario', 'lucario', 'lucario', 'ルカリオ', '루카리오'],
		color: '#1fa7e7',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue2'],
		sprite: {
			base: './src/assets/images/pokemon/towers/lucario.png',
			image: './src/assets/images/pokemon/towers/lucario-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 900,
			scale: -2
		},
		power: {
			base: 20,
			scale: 3.8,
		},
		critical: {
			base: 5,
			scale: 0.2
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
	},
	mareep: {
		id: 13,
		name: ['mareep', 'mareep', 'wattouat', 'mareep', 'mareep', 'voltilamm', 'メリープ', '메리프'],
		color: '#ffe69e',
		ability: abilityData['stunArea'],
		projectileSound: 'area3',
		projectileSpeed: 7,
		projectile: projectileData['yellow4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/mareep.png',
			image: './src/assets/images/pokemon/towers/mareep-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3945,
			scale: -1
		},
		power: {
			base: 5,
			scale: 2,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'flaaffy',
			level: 15
		},	
	},
	flaaffy: {
		id: 13,
		name: ['flaaffy', 'flaaffy', 'lainergie', 'flaaffy', 'flaaffy', 'waaty', 'モココ', '보송송'],
		color: '#fe8faf',
		ability: abilityData['stunArea'],
		projectileSound: 'area3',
		projectileSpeed: 7,
		projectile: projectileData['yellow4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/flaaffy.png',
			image: './src/assets/images/pokemon/towers/flaaffy-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3700,
			scale: -1
		},
		power: {
			base: 8,
			scale: 2.2,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'ampharos',
			level: 30
		},	
	},
	ampharos: {
		id: 13,
		name: ['ampharos', 'ampharos', 'pharamp', 'ampharos', 'ampharos', 'ampharos', 'デンリュウ', '전룡'],
		color: '#fff600',
		ability: abilityData['stunArea'],
		projectileSound: 'area3',
		projectileSpeed: 7,
		projectile: projectileData['yellow4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/ampharos.png',
			image: './src/assets/images/pokemon/towers/ampharos-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 3500,
			scale: -1
		},
		power: {
			base: 15,
			scale: 3.8,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 185,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],	
	},
	gulpin: {
		id: 14,
		name: ['gulpin', 'gulpin', 'gloupti', 'gulpin', 'gulpin', 'schluppuck', 'ゴクリン', '꼴깍몬'],
		color: '#8fff67',
		ability: abilityData['poison'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/gulpin.png',
			image: './src/assets/images/pokemon/towers/gulpin-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 3500,
			scale: -10
		},
		power: {
			base: 13,
			scale: 0.5,
		},
		critical: {
			base: 0.5,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'swalot',
			level: 26
		},	
	},
	swalot: {
		id: 14,
		name: ['swalot', 'swalot', 'avaltout', 'swalot', 'swalot', 'schlukwech', 'マルノーム', '꿀꺽몬'],
		color: '#b796df',
		ability: abilityData['poison'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/swalot.png',
			image: './src/assets/images/pokemon/towers/swalot-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -18
		},
		power: {
			base: 20,
			scale: 1,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],	
	},
	cryogonal: {
		id: 15,
		name: ['cryogonal', 'cryogonal', 'hexagel', 'cryogonal', 'cryogonal', 'frigometri', 'フリージオ', '프리지오'],
		color: '#607dcb',
		ability: abilityData['stunMono'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/cryogonal.png',
			image: './src/assets/images/pokemon/towers/cryogonal-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2400,
			scale: -5
		},
		power: {
			base: 28,
			scale: 11.8,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 148,
			scale: 2,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'high',
		tiles: [1],	
	},
	sableye: {
		id: 16,
		name: ['sableye', 'sableye', 'ténéfix', 'sableye', 'sableye', 'zobiris', 'ヤミラミ', '깜까미'],
		color: '#8e67bf',
		ability: abilityData['curse'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/sableye.png',
			image: './src/assets/images/pokemon/towers/sableye-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 3850,
			scale: -31
		},
		power: {
			base: 15,
			scale: 1.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],	
	},
	drudiggon: {
		id: 17,
		name: ['Druddigon', 'Druddigon', 'drakkarmin', 'Druddigon', 'Druddigon', 'shardrago', 'クリムガン', '크리만'],
		color: '#a42530',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/drudiggon.png',
			image: './src/assets/images/pokemon/towers/drudiggon-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -10
		},
		power: {
			base: 2,
			scale: 9,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 100,
			scale: 1.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1],	
	},
	meowth: {
		id: 18,
		name: ['meowth', 'meowth', 'miaouss', 'meowth', 'meowth', 'mauzi', 'ニャース', '나옹'],
		color: '#d6bd62',
		ability: abilityData['greed'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/meowth.png',
			image: './src/assets/images/pokemon/towers/meowth-idle.png',
			frames: 4,
			hold: 10
		},
		speed: {
			base: 1700,
			scale: -5
		},
		power: {
			base: 18,
			scale: 1.4,
		},
		critical: {
			base: 10,
			scale: 0.3
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'persian',
			level: 28
		},	
	},
	persian: {
		id: 18,
		name: ['persian', 'persian', 'persian', 'persian', 'persian', 'snobilikat', 'ペルシアン', '페르시온'],
		color: '#fff79d',
		ability: abilityData['greed'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/persian.png',
			image: './src/assets/images/pokemon/towers/persian-idle.png',
			frames: 1,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -10
		},
		power: {
			base: 35,
			scale: 2.7,
		},
		critical: {
			base: 25,
			scale: 0.5
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],	
	},
	sunkern: {
		id: 19,
		name: ['sunkern', 'sunkern', 'tournegrin', 'sunkern', 'sunkern', 'sonnkern', 'ヒマナッツ', '해너츠'],
		color: '#fff700',
		ability: abilityData['powerAura'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/sunkern.png',
			image: './src/assets/images/pokemon/towers/sunkern-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'sunflora',
			level: 25,
		},	
	},
	sunflora: {
		id: 19,
		name: ['sunflora', 'sunflora', 'héliatronc', 'sunflora', 'sunflora', 'sonnflora', 'キマワリ', '해루미'],
		color: '#dfb700',
		ability: abilityData['powerAura'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/sunflora.png',
			image: './src/assets/images/pokemon/towers/sunflora-idle.png',
			frames: 16,
			hold: 4
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.7,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'mid',
		tiles: [1, 2],
	},
	tangela: {
		id: 20,
		name: ['tangela', 'tangela', 'saquedeneu', 'tangela', 'tangela', 'tangela', 'モンジャラ', '덩쿠리'],
		color: '#6285ac',
		ability: abilityData['slow'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/tangela.png',
			image: './src/assets/images/pokemon/towers/tangela-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1850,
			scale: -2
		},
		power: {
			base: 16,
			scale: 4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'tangrowth',
			level: 36,
		},	
	},
	tangrowth: {
		id: 20,
		name: ['tangrowth', 'tangrowth', 'bouldeneu', 'tangrowth', 'tangrowth', 'tangoloss', 'モジャンボ', '덩쿠림보'],
		color: '#679fef',
		ability: abilityData['slow'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/tangrowth.png',
			image: './src/assets/images/pokemon/towers/tangrowth-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1750,
			scale: -2
		},
		power: {
			base: 100,
			scale: 9.1,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	chikorita: {
		id: 21,
		name: ['chikorita', 'chikorita', 'germignon', 'chikorita', 'chikorita', 'endivie', 'チコリータ', '치코리타'],
		color: '#d7efa6',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/chikorita.png',
			image: './src/assets/images/pokemon/towers/chikorita-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -2
		},
		power: {
			base: 14,
			scale: 2.1,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'bayleef',
			level: 16,
		},	
	},
	bayleef: {
		id: 21,
		name: ['bayleef', 'bayleef', 'macronium', 'bayleef', 'bayleef', 'lorblatt', 'ベイリーフ', '베이리프'],
		color: '#fff700',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/bayleef.png',
			image: './src/assets/images/pokemon/towers/bayleef-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2300,
			scale: -3
		},
		power: {
			base: 40,
			scale: 5,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'meganium',
			level: 32,
		},	
	},
	meganium: {
		id: 21,
		name: ['meganium', 'meganium', 'méganium', 'meganium', 'meganium', 'meganie', 'メガニウム', '메가니움'],
		color: '#d7efa7',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/meganium.png',
			image: './src/assets/images/pokemon/towers/meganium-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -3
		},
		power: {
			base: 80,
			scale: 8.4,
		},
		critical: {
			base: 4,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	hoppip: {
		id: 22,
		name: ['hoppip', 'hoppip', 'granivol', 'hoppip', 'hoppip', 'hoppspross', 'ハネッコ', '두코'],
		color: '#e73f67',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/hoppip.png',
			image: './src/assets/images/pokemon/towers/hoppip-idle.png',
			frames: 15,
			hold: 5
		},
		speed: {
			base: 900,
			scale: -1
		},
		power: {
			base: 15,
			scale: 1.3,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'skiploom',
			level: 18,
		},	
	},
	skiploom: {
		id: 22,
		name: ['skiploom', 'skiploom', 'floravol', 'skiploom', 'skiploom', 'hubelupf', 'ポポッコ', '두코리'],
		color: '#5fb627',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/skiploom.png',
			image: './src/assets/images/pokemon/towers/skiploom-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 800,
			scale: -1
		},
		power: {
			base: 20,
			scale: 1.5,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'jumpluff',
			level: 27,
		},	
	},
	jumpluff: {
		id: 22,
		name: ['jumpluff', 'jumpluff', 'cotovol', 'jumpluff', 'jumpluff', 'papungha', 'ワタッコ', '솜솜코'],
		color: '#4f9ed6',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/towers/jumpluff.png',
			image: './src/assets/images/pokemon/towers/jumpluff-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 600,
			scale: -1
		},
		power: {
			base: 50,
			scale: 1.8,
		},
		critical: {
			base: 8,
			scale: 0.1
		},
		range: {
			base: 170,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	cottonee: {
		id: 23,
		name: ['cottonee', 'cottonee', 'doudouvet', 'cottonee', 'cottonee', 'waumboll', 'モンメン', '소미안'],
		color: '#bee293',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/cottonee.png',
			image: './src/assets/images/pokemon/towers/cottonee-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1270,
			scale: -5
		},
		power: {
			base: 11,
			scale: 1,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 125,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'whimsicott',
			level: 28,
		},	
	},
	whimsicott: {
		id: 23,
		name: ['whimsicott', 'whimsicott', 'farfaduvet', 'whimsicott', 'whimsicott', 'elfun', 'エルフーン', '엘풍'],
		color: '#b7d667',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/whimsicott.png',
			image: './src/assets/images/pokemon/towers/whimsicott-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 1190,
			scale: -6
		},
		power: {
			base: 25,
			scale: 2,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	petilil: {
		id: 24,
		name: ['petilil', 'petilil', 'chlorobule', 'petilil', 'petilil', 'lilminip', 'チュリネ', '치릴리'],
		color: '#aed162',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/petilil.png',
			image: './src/assets/images/pokemon/towers/petilil-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -2
		},
		power: {
			base: 12,
			scale: 2,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.5,
			inner: 100,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'lilligant',
			level: 28,
		},	
	},
	lilligant: {
		id: 24,
		name: ['lilligant', 'lilligant', 'fragilady', 'lilligant', 'lilligant', 'dressella', 'ドレディア', '드레디어'],
		color: '#fe6b39',
		ability: abilityData['tripleShot'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/lilligant.png',
			image: './src/assets/images/pokemon/towers/lilligant-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -3
		},
		power: {
			base: 55,
			scale: 6,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 150,
			scale: 1,
			inner: 100,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	spinarak: {
		id: 25,
		name: ['spinarak', 'spinarak', 'mimigal', 'spinarak', 'spinarak', 'webarak', 'イトマル', '페이검'],
		color: '#9fce6f',
		ability: abilityData['poison'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/spinarak.png',
			image: './src/assets/images/pokemon/towers/spinarak-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1900,
			scale: -1
		},
		power: {
			base: 9,
			scale: 1.5,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'ariados',
			level: 22,
		},	
	},
	ariados: {
		id: 25,
		name: ['ariados', 'ariados', 'migalos', 'ariados', 'ariados', 'ariados', 'アリアドス', '아리아도스'],
		color: '#d73f01',
		ability: abilityData['poison'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/ariados.png',
			image: './src/assets/images/pokemon/towers/ariados-idle.png',
			frames: 10,
			hold: 7
		},
		speed: {
			base: 1150,
			scale: -4
		},
		power: {
			base: 13,
			scale: 2.7,
		},
		critical: {
			base: 10,
			scale: 0.2
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	maractus: {
		id: 26,
		name: ['maractus', 'maractus', 'maracachi', 'maractus', 'maractus', 'maracamba', 'マラカッチ', '마라카치'],
		color: '#5ff051',
		ability: abilityData['ambusher'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/maractus.png',
			image: './src/assets/images/pokemon/towers/maractus-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 3450,
			scale: -23
		},
		power: {
			base: 6,
			scale: 3,
		},
		critical: {
			base: 0.1,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0.6,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 2],
	},
	shroomish: {
		id: 27,
		name: ['shroomish', 'shroomish', 'balignon', 'shroomish', 'shroomish', 'knilz', 'キノココ', '버섯꼬'],
		color: '#fee79f',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/shroomish.png',
			image: './src/assets/images/pokemon/towers/shroomish-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1930,
			scale: -2
		},
		power: {
			base: 12,
			scale: 5,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'breloom',
			level: 23
		},	
	},
	breloom: {
		id: 27,
		name: ['breloom', 'breloom', 'chapignon', 'breloom', 'breloom', 'kapilz', 'キノガッサ', '버섯모'],
		color: '#8fff67',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/breloom.png',
			image: './src/assets/images/pokemon/towers/breloom-idle.png',
			frames: 12,
			hold: 15
		},
		speed: {
			base: 1850,
			scale: -3
		},
		power: {
			base: 48,
			scale: 7.8,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	barboach: {
		id: 28,
		name: ['barboach', 'barboach', 'barloche', 'barboach', 'barboach', 'schmerbe', 'ドジョッチ', '미꾸리'],
		color: '#1f9ee7',
		ability: abilityData['slow'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/barboach.png',
			image: './src/assets/images/pokemon/towers/barboach-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -2
		},
		power: {
			base: 27,
			scale: 3.1,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
		evolution: {
			pokemon: 'whiscash',
			level: 30
		},	
	},
	whiscash: {
		id: 28,
		name: ['whiscash', 'whiscash', 'barbicha', 'whiscash', 'whiscash', 'welsar', 'ナマズン', '메깅'],
		color: '#4f5f97',
		ability: abilityData['slowSplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/whiscash.png',
			image: './src/assets/images/pokemon/towers/whiscash-idle.png',
			frames: 10,
			hold: 5
		},
		speed: {
			base: 2800,
			scale: -4
		},
		power: {
			base: 53,
			scale: 5,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 280,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
	},
	clauncher: {
		id: 29,
		name: ['clauncher', 'clauncher', 'flingouste', 'clauncher', 'clauncher', 'scampisto', 'ウデッポウ', '완철포'],
		color: '#81e1ff',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/clauncher.png',
			image: './src/assets/images/pokemon/towers/clauncher-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 6000,
			scale: 0
		},
		power: {
			base: 50,
			scale: 25,
		},
		critical: {
			base: 25,
			scale: 0
		},
		range: {
			base: 265,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3],
		evolution: {
			pokemon: 'clawitzer',
			level: 37
		},	
	},
	clawitzer: {
		id: 29,
		name: ['clawitzer', 'clawitzer', 'gamblast', 'clawitzer', 'clawitzer', 'wummer', 'ブロスター', '블로스터'],
		color: '#4090f9',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/clawitzer.png',
			image: './src/assets/images/pokemon/towers/clawitzer-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 6000,
			scale: 0
		},
		power: {
			base: 100,
			scale: 50,
		},
		critical: {
			base: 50,
			scale: 0
		},
		range: {
			base: 300,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3],
	},
	remoraid: {
		id: 30,
		name: ['remoraid', 'remoraid', 'rémoraid', 'remoraid', 'remoraid', 'remoraid', 'テッポウオ', '총어'],
		color: '#afb7bf',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/remoraid.png',
			image: './src/assets/images/pokemon/towers/remoraid-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 3600,
			scale: -1
		},
		power: {
			base: 23,
			scale: 2.6,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 280,
			scale: 1,
			inner: 200,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
		evolution: {
			pokemon: 'octillery',
			level: 30
		},	
	},
	octillery: {
		id: 30,
		name: ['octillery', 'octillery', 'octillery', 'octillery', 'octillery', 'octillery', 'オクタン', '대포무노'],
		color: '#fe875e',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 10,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/octillery.png',
			image: './src/assets/images/pokemon/towers/octillery-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 3100,
			scale: -6
		},
		power: {
			base: 150,
			scale: 7.1
		},
		critical: {
			base: 5,
			scale: 0.3
		},
		range: {
			base: 280,
			scale: 2,
			inner: 200,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
	},
	oshawott: {
		id: 31,
		name: ['oshawott', 'oshawott', 'moustillon', 'oshawott', 'oshawott', 'ottaro', 'ミジュマル', '수댕이'],
		color: '#70d8f0',
		ability: abilityData['focus'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/oshawott.png',
			image: './src/assets/images/pokemon/towers/oshawott-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -1
		},
		power: {
			base: 12,
			scale: 2.5,
		},
		critical: {
			base: 1.5,
			scale: 0.1
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'dewott',
			level: 17,
		},	
	},
	dewott: {
		id: 31,
		name: ['dewott', 'dewott', 'mateloutre', 'dewott', 'dewott', 'zwottronin', 'フタチマル', '쌍검자비'],
		color: '#84d6ee',
		ability: abilityData['focus'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/dewott.png',
			image: './src/assets/images/pokemon/towers/dewott-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1100,
			scale: -1
		},
		power: {
			base: 20,
			scale: 2.7,
		},
		critical: {
			base: 2,
			scale: 0.2
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'samurott',
			level: 36,
		},	
	},
	samurott: {
		id: 31,
		name: ['samurott', 'samurott', 'clamiral', 'samurott', 'samurott', 'admurai', 'ダイケンキ', '대검귀'],
		color: '#20adbc',
		ability: abilityData['focus'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/samurott.png',
			image: './src/assets/images/pokemon/towers/samurott-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 840,
			scale: -3
		},
		power: {
			base: 80,
			scale: 4.5,
		},
		critical: {
			base: 3,
			scale: 0.3
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
	},
	staryu: {
		id: 32,
		name: ['staryu', 'staryu', 'stari', 'staryu', 'staryu', 'sterndu', 'ヒトデマン', '별가사리'],
		color: '#de7318',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/staryu.png',
			image: './src/assets/images/pokemon/towers/staryu-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 800,
			scale: -2
		},
		power: {
			base: 13,
			scale: 1,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 165,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'starmie',
			level: 33,
		},	
	},
	starmie: {
		id: 32,
		name: ['starmie', 'starmie', 'staross', 'starmie', 'starmie', 'starmie', 'スターミー', '아쿠스타'],
		color: '#8d62bd',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/starmie.png',
			image: './src/assets/images/pokemon/towers/starmie-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 700,
			scale: -2
		},
		power: {
			base: 55,
			scale: 3,
		},
		critical: {
			base: 10,
			scale: 0
		},
		range: {
			base: 200,
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
	},
	lapras: {
		id: 33,
		name: ['lapras', 'lapras', 'lokhlass', 'lapras', 'lapras', 'lapras', 'ラプラス', '라프라스'],
		color: '#7acfff',
		ability: abilityData['stunArea'],
		projectileSound: 'area3',
		projectileSpeed: 7,
		projectile: projectileData['blue3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/lapras.png',
			image: './src/assets/images/pokemon/towers/lapras-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 6300,
			scale: -5.8
		},
		power: {
			base: 10,
			scale: 6.6,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 3],
	},
	seel: {
		id: 34,
		name: ['seel', 'seel', 'otaria', 'seel', 'seel', 'jurob', 'パウワウ', '쥬쥬'],
		color: '#d7dfde',
		ability: abilityData['stunMono'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/seel.png',
			image: './src/assets/images/pokemon/towers/seel-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1550,
			scale: -1
		},
		power: {
			base: 15,
			scale: 5,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 260,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 3],
		evolution: {
			pokemon: 'dewgong',
			level: 34,
		},	
	},
	dewgong: {
		id: 34,
		name: ['dewgong', 'dewgong', 'lamantine', 'dewgong', 'dewgong', 'jugong', 'ジュゴン', '쥬레곤'],
		color: '#adb4bd',
		ability: abilityData['stunMono'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/dewgong.png',
			image: './src/assets/images/pokemon/towers/dewgong-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1350,
			scale: -2
		},
		power: {
			base: 60,
			scale: 7.5,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 400,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 3],
	},
	psyduck: {
		id: 35,
		name: ['psyduck', 'psyduck', 'psykokwak', 'psyduck', 'psyduck', 'enton', 'コダック', '고라파덕'],
		color: '#dfb501',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/psyduck.png',
			image: './src/assets/images/pokemon/towers/psyduck-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1850,
			scale: -2
		},
		power: {
			base: 14,
			scale: 2,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'golduck',
			level: 33,
		},	
	},
	golduck: {
		id: 35,
		name: ['golduck', 'golduck', 'akwakwak', 'golduck', 'golduck', 'entoron', 'ゴルダック', '골덕'],
		color: '#199de7',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/golduck.png',
			image: './src/assets/images/pokemon/towers/golduck-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1350,
			scale: -5
		},
		power: {
			base: 42,
			scale: 3.6,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 155,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
	},
	murkrow: {
		id: 36,
		name: ['murkrow', 'murkrow', 'cornèbre', 'murkrow', 'murkrow', 'kramurx', 'ヤミカラス', '니로우'],
		color: '#deb600',
		ability: abilityData['frisk'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/murkrow.png',
			image: './src/assets/images/pokemon/towers/murkrow-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 950,
			scale: -1
		},
		power: {
			base: 10,
			scale: 2.5,
		},
		critical: {
			base: 5,
			scale: 0.2
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'honchkrow',
			level: 40,
		},	
	},
	honchkrow: {
		id: 36,
		name: ['honchkrow', 'honchkrow', 'corboss', 'honchkrow', 'honchkrow', 'kramshef', 'ドンカラス', '돈크로우'],
		color: '#d7d7de',
		ability: abilityData['frisk'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/honchkrow.png',
			image: './src/assets/images/pokemon/towers/honchkrow-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 890,
			scale: -2
		},
		power: {
			base: 35,
			scale: 3.3,
		},
		critical: {
			base: 10,
			scale: 0.2
		},
		range: {
			base: 190,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	sandshrew: {
		id: 37,
		name: ['sandshrew', 'sandshrew', 'sabelette', 'sandshrew', 'sandshrew', 'sandan', 'サンド', '모래두지'],
		color: '#dfb500',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/sandshrew.png',
			image: './src/assets/images/pokemon/towers/sandshrew-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1550,
			scale: -1
		},
		power: {
			base: 8,
			scale: 4,
		},
		critical: {
			base: 15,
			scale: 0.1
		},
		range: {
			base: 105,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'sandslash',
			level: 22,
		},	
	},
	sandslash: {
		id: 37,
		name: ['sandslash', 'sandslash', 'sablaireau', 'sandslash', 'sandslash', 'sandamer', 'サンドパン', '고지'],
		color: '#de7318',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/towers/sandslash.png',
			image: './src/assets/images/pokemon/towers/sandslash-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1050,
			scale: -1
		},
		power: {
			base: 30,
			scale: 5.7,
		},
		critical: {
			base: 15,
			scale: 0.3
		},
		range: {
			base: 115,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
	},
	trapinch: {
		id: 38,
		name: ['trapinch', 'trapinch', 'kraknoix', 'trapinch', 'trapinch', 'knacklion', 'ナックラー', '톱치'],
		color: '#ff9746',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/trapinch.png',
			image: './src/assets/images/pokemon/towers/trapinch-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -1
		},
		power: {
			base: 12,
			scale: 1,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 90,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'vibrava',
			level: 35,
		},	
	},
	vibrava: {
		id: 38,
		name: ['vibrava', 'vibrava', 'vibraninf', 'vibrava', 'vibrava', 'vibrava', 'ビブラーバ', '비브라바'],
		color: '#deb700',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/vibrava.png',
			image: './src/assets/images/pokemon/towers/vibrava-idle.png',
			frames: 9,
			hold: 11
		},
		speed: {
			base: 1700,
			scale: -1
		},
		power: {
			base: 50,
			scale: 3.6,
		},
		critical: {
			base: 0,
			scale: 0.2
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'flygon',
			level: 45,
		},	
	},
	flygon: {
		id: 38,
		name: ['flygon', 'flygon', 'libégon', 'flygon', 'flygon', 'libelldra', 'フライゴン', '플라이곤'],
		color: '#5fb726',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/flygon.png',
			image: './src/assets/images/pokemon/towers/flygon-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 1320,
			scale: -3.2
		},
		power: {
			base: 55,
			scale: 7,
		},
		critical: {
			base: 0,
			scale: 0.3
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	noibat: {
		id: 39,
		name: ['noibat', 'noibat', 'sonistrelle', 'noibat', 'noibat', 'em', 'オンバット', '음뱃'],
		color: '#863f86',
		ability: abilityData['focus'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/noibat.png',
			image: './src/assets/images/pokemon/towers/noibat-idle.png',
			frames: 10,
			hold: 7
		},
		speed: {
			base: 1850,
			scale: 0
		},
		power: {
			base: 14,
			scale: 3,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 300,
			scale: 0.5,
			inner: 200,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'noivern',
			level: 48
		},	
	},
	noivern: {
		id: 39,
		name: ['noivern', 'noivern', 'bruyverne', 'noivern', 'noivern', 'uhafnir', 'オンバーン', '음번'],
		color: '#6cc5bb',
		ability: abilityData['focus'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/noivern.png',
			image: './src/assets/images/pokemon/towers/noivern-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 1600,
			scale: -1.8
		},
		power: {
			base: 60,
			scale: 11.5,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 300,
			scale: 1,
			inner: 200,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	sneasel: {
		id: 40,
		name: ['sneasel', 'sneasel', 'farfuret', 'sneasel', 'sneasel', 'sniebel', 'ニューラ', '포푸니'],
		color: '#4f5f96',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/sneasel.png',
			image: './src/assets/images/pokemon/towers/sneasel-idle.png',
			frames: 7,
			hold: 13
		},
		speed: {
			base: 900,
			scale: -3
		},
		power: {
			base: 7,
			scale: 1.8,
		},
		critical: {
			base: 5,
			scale: 0.5
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'weavile',
			level: 25
		},	
	},
	weavile: {
		id: 40,
		name: ['weavile', 'weavile', 'dimoret', 'weavile', 'weavile', 'snibunna', 'マニューラ', '포푸니라'],
		color: '#d73f01',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/weavile.png',
			image: './src/assets/images/pokemon/towers/weavile-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 700,
			scale: -3
		},
		power: {
			base: 25,
			scale: 4,
		},
		critical: {
			base: 5,
			scale: 0.8
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	drilbur: {
		id: 41,
		name: ['drilbur', 'drilbur', 'rototaupe', 'drilbur', 'drilbur', 'rotomurf', 'モグリュー', '두더류'],
		color: '#8d7b6d',
		ability: abilityData['armorBreak'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/drilbur.png',
			image: './src/assets/images/pokemon/towers/drilbur-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 2600,
			scale: -2
		},
		power: {
			base: 8,
			scale: 1,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'excadrill',
			level: 31
		},	
	},
	excadrill: {
		id: 41,
		name: ['excadrill', 'excadrill', 'minotaupe', 'excadrill', 'excadrill', 'stalobor', 'ドリュウズ', '몰드류'],
		color: '#bc4342',
		ability: abilityData['armorBreak'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/excadrill.png',
			image: './src/assets/images/pokemon/towers/excadrill-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1100,
			scale: -6
		},
		power: {
			base: 20,
			scale: 1.6,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
	},
	shuckle: {
		id: 42,
		name: ['shuckle', 'shuckle', 'caratroc', 'shuckle', 'shuckle', 'pottrott', 'ツボツボ', '단단지'],
		color: '#d73f00',
		ability: abilityData['slow'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/shuckle.png',
			image: './src/assets/images/pokemon/towers/shuckle-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 7000,
			scale: -50
		},
		power: {
			base: 50,
			scale: 1,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
	},
	hawlucha: {
		id: 43,
		name: ['hawlucha', 'hawlucha', 'brutalibré', 'hawlucha', 'hawlucha', 'resladero', 'ルチャブル', '루차불'],
		color: '#01bd93',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/hawlucha.png',
			image: './src/assets/images/pokemon/towers/hawlucha-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1630,
			scale: -8
		},
		power: {
			base: 12,
			scale: 6.3,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 135,
			scale: 1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
	},
	aron: {
		id: 44,
		name: ['aron', 'aron', 'galekid', 'aron', 'aron', 'stollunior', 'ココドラ', '가보리'],
		color: '#afb6bf',
		ability: abilityData['vigilant'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/aron.png',
			image: './src/assets/images/pokemon/towers/aron-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: 0
		},
		power: {
			base: 14,
			scale: 0.7,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 90,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'lairon',
			level: 32,
		},	
	},
	lairon: {
		id: 44,
		name: ['lairon', 'lairon', 'galegon', 'lairon', 'lairon', 'stollrak', 'コドラ', '갱도라'],
		color: '#7f8e97',
		ability: abilityData['vigilant'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/lairon.png',
			image: './src/assets/images/pokemon/towers/lairon-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2400,
			scale: 0
		},
		power: {
			base: 18,
			scale: 1.7,
		},
		critical: {
			base: 4,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'aggron',
			level: 42,
		},	
	},
	aggron: {
		id: 44,
		name: ['aggron', 'aggron', 'galeking', 'aggron', 'aggron', 'stolloss', 'ボスゴドラ', '보스로라'],
		color: '#c7cfd2',
		ability: abilityData['vigilant'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/aggron.png',
			image: './src/assets/images/pokemon/towers/aggron-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 2250,
			scale: 0
		},
		power: {
			base: 35,
			scale: 3.3,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 145,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
	},
	cubone: {
		id: 45,
		name: ['cubone', 'cubone', 'osselait', 'cubone', 'cubone', 'tragosso', 'カラカラ', '탕구리'],
		color: '#ac6218',
		ability: abilityData['ninja'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 2,
		projectile: projectileData['yellow5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/cubone.png',
			image: './src/assets/images/pokemon/towers/cubone-idle.png',
			frames: 6,
			hold: 13
		},
		speed: {
			base: 2700,
			scale: -1
		},
		power: {
			base: 18,
			scale: 4,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 270,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'marowak',
			level: 28,
		},	
	},
	marowak: {
		id: 45,
		name: ['marowak', 'marowak', 'ossatueur', 'marowak', 'marowak', 'knogga', 'ガラガラ', '텅구리'],
		color: '#de7319',
		ability: abilityData['ninja'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 4,
		projectile: projectileData['yellow5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/marowak.png',
			image: './src/assets/images/pokemon/towers/marowak-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2700,
			scale: -11
		},
		power: {
			base: 60,
			scale: 5.7,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 350,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	pidgey: {
		id: 46,
		name: ['pidgey', 'pidgey', 'roucool', 'pidgey', 'pidgey', 'taubsi', 'ポッポ', '구구'],
		color: '#e63963',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/towers/pidgey.png',
			image: './src/assets/images/pokemon/towers/pidgey-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1250,
			scale: -1
		},
		power: {
			base: 9,
			scale: 2,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 125,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'pidgeotto',
			level: 18,
		},	
	},
	pidgeotto: {
		id: 46,
		name: ['pidgeotto', 'pidgeotto', 'roucoups', 'pidgeotto', 'pidgeotto', 'tauboga', 'ピジョン', '피죤'],
		color: '#fe8dad',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/towers/pidgeotto.png',
			image: './src/assets/images/pokemon/towers/pidgeotto-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1100,
			scale: -1
		},
		power: {
			base: 28,
			scale: 2.1,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'pidgeot',
			level: 36,
		},	
	},
	pidgeot: {
		id: 46,
		name: ['pidgeot', 'pidgeot', 'roucarnage', 'pidgeot', 'pidgeot', 'tauboss', 'ピジョット', '피죤투'],
		color: '#fe9542',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/towers/pidgeot.png',
			image: './src/assets/images/pokemon/towers/pidgeot-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -3
		},
		power: {
			base: 60,
			scale: 3.8,
		},
		critical: {
			base: 5,
			scale: 0.2
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
	},
	binacle: {
		id: 47,
		name: ['binacle', 'binacle', 'opermine', 'binacle', 'binacle', 'bithora', 'カメテテ', '거북손손'],
		color: '#9b7547',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/binacle.png',
			image: './src/assets/images/pokemon/towers/binacle-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 2400,
			scale: -4
		},
		power: {
			base: 13,
			scale: 2.8,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],
		evolution: {
			pokemon: 'barbaracle',
			level: 39,
		},	
	},
	barbaracle: {
		id: 47,
		name: ['barbaracle', 'barbaracle', 'golgopathe', 'barbaracle', 'barbaracle', 'thanathora', 'ガメノデス', '거북손데스'],
		color: '#c8cbda',
		ability: abilityData['quadraShot'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/barbaracle.png',
			image: './src/assets/images/pokemon/towers/barbaracle-idle.png',
			frames: 10,
			hold: 7
		},
		speed: {
			base: 2300,
			scale: -5.7
		},
		power: {
			base: 20,
			scale: 4.4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],
	},
	surskit: {
		id: 48,
		name: ['surskit', 'surskit', 'arakdo', 'surskit', 'surskit', 'gehweiher', 'アメタマ', '비구술'],
		color: '#1e9ee7',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/surskit.png',
			image: './src/assets/images/pokemon/towers/surskit-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -5
		},
		power: {
			base: 12,
			scale: 1,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 3],
		evolution: {
			pokemon: 'masquerain',
			level: 22,
		},	
	},
	masquerain: {
		id: 48,
		name: ['masquerain', 'masquerain', 'maskadra', 'masquerain', 'masquerain', 'maskeregen', 'アメモース', '비나방'],
		color: '#ff875f',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/masquerain.png',
			image: './src/assets/images/pokemon/towers/masquerain-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -6.3
		},
		power: {
			base: 20,
			scale: 1.7,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 3],
	},
	ferroseed: {
		id: 49,
		name: ['ferroseed', 'ferroseed', 'grindur', 'ferroseed', 'ferroseed', 'kastadur', 'テッシード', '철시드'],
		color: '#5eb727',
		ability: abilityData['slow'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/ferroseed.png',
			image: './src/assets/images/pokemon/towers/ferroseed-idle.png',
			frames: 9,
			hold: 15
		},
		speed: {
			base: 2800,
			scale: -2
		},
		power: {
			base: 9,
			scale: 2.2,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'ferrothorn',
			level: 40,
		},	
	},
	ferrothorn: {
		id: 49,
		name: ['ferrothorn', 'ferrothorn', 'noacier', 'ferrothorn', 'ferrothorn', 'tentantel', 'ナットレイ', '너트령'],
		color: '#208c52',
		ability: abilityData['slow'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/ferrothorn.png',
			image: './src/assets/images/pokemon/towers/ferrothorn-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 2450,
			scale: -2.8
		},
		power: {
			base: 12,
			scale: 3,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 2, 4],
	},
	absol: {
		id: 50,
		name: ['absol', 'absol', 'absol', 'absol', 'absol', 'absol', 'アブソル', '앱솔'],
		color: '#d7dedf',
		ability: abilityData['focus'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/absol.png',
			image: './src/assets/images/pokemon/towers/absol-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1270,
			scale: -9
		},
		power: {
			base: 5,
			scale: 3.3,
		},
		critical: {
			base: 0,
			scale: 1
		},
		range: {
			base: 100,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
	},
	// NEW
	girafarig: {
		id: 51,
		name: ['girafarig', 'girafarig', 'girafarig', 'girafarig', 'girafarig', 'girafarig', 'キリンリキ', '키링키'],
		color: '#dfb700',
		ability: abilityData['curseDoubleShot'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/girafarig.png',
			image: './src/assets/images/pokemon/towers/girafarig-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -2
		},
		power: {
			base: 3,
			scale: 1,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0.25,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
	},
	torkoal: {
		id: 52,
		name: ['torkoal', 'torkoal', 'Chartor', 'torkoal', 'torkoal', 'torkoal', 'コータス', '코터스'],
		color: '#df761e',
		ability: abilityData['burnNerf'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/torkoal.png',
			image: './src/assets/images/pokemon/towers/torkoal-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 5200,
			scale: -22
		},
		power: {
			base: 7,
			scale: 6,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
	},
	spinda: {
		id: 53,
		name: ['spinda', 'spinda', 'spinda', 'spinda', 'spinda', 'spinda', 'パッチール', '스핀다'],
		color: '#ff875f',
		ability: abilityData['spinda'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/spinda.png',
			image: './src/assets/images/pokemon/towers/spinda-idle.png',
			frames: 9,
			hold: 15
		},
		speed: {
			base: 200,
			scale: 0
		},
		power: {
			base: 1,
			scale: 1,
		},
		critical: {
			base: 0,
			scale: 0.2
		},
		range: {
			base: 300,
			scale: 1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
	},
	dunsparce: {
		id: 54,
		name: ['dunsparce', 'dunsparce', 'Insolourdo', 'dunsparce', 'dunsparce', 'dunsparce', 'ノコッチ', '노고치'],
		color: '#1f9fe7',
		ability: abilityData['slowSplash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/dunsparce.png',
			image: './src/assets/images/pokemon/towers/dunsparce-idle.png',
			frames: 2,
			hold: 5
		},
		speed: {
			base: 2900,
			scale: -12
		},
		power: {
			base: 15,
			scale: 7,
		},
		critical: {
			base: 5,
			scale: 0.2
		},
		range: {
			base: 200,
			scale: 3,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	ralts: {
		id: 55,
		name: ['ralts', 'ralts', 'ralts', 'ralts', 'ralts', 'ralts', 'ラルトス', '랄토스'],
		color: '#5ec636',
		ability: abilityData['synchronySplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/ralts.png',
			image: './src/assets/images/pokemon/towers/ralts-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -1
		},
		power: {
			base: 1,
			scale: 1,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 90,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'kirlia',
			level: 20,
		},
	},
	kirlia: {
		id: 55,
		name: ['kirlia', 'kirlia', 'kirlia', 'kirlia', 'kirlia', 'kirlia', 'キルリア', '킬리아'],
		color: '#e63f67',
		ability: abilityData['synchronySplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/kirlia.png',
			image: './src/assets/images/pokemon/towers/kirlia-idle.png',
			frames: 9,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -2
		},
		power: {
			base: 10,
			scale: 3,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'gardevoir',
			level: 30,
		},
	},
	gardevoir: {
		id: 55,
		name: ['gardevoir', 'gardevoir', 'gardevoir', 'gardevoir', 'gardevoir', 'gardevoir', 'サーナイト', '가디안'],
		color: '#8fff66',
		ability: abilityData['synchronySplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/gardevoir.png',
			image: './src/assets/images/pokemon/towers/gardevoir-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -6
		},
		power: {
			base: 40,
			scale: 8.6,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
	},
	koffing: {
		id: 56,
		name: ['koffing', 'koffing', 'Smogo', 'koffing', 'koffing', 'koffing', 'ドガース', '두가스'],
		color: '#b595df',
		ability: abilityData['poison'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/koffing.png',
			image: './src/assets/images/pokemon/towers/koffing-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 2700,
			scale: -2
		},
		power: {
			base: 16,
			scale: 4,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 125,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'weezing',
			level: 35,
		},
	},
	weezing: {
		id: 56,
		name: ['weezing', 'weezing', 'Smogogo', 'weezing', 'weezing', 'weezing', 'マタドガス', '두트리오'],
		color: '#ad6bb4',
		ability: abilityData['poisonDoubleShot'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/weezing.png',
			image: './src/assets/images/pokemon/towers/weezing-idle.png',
			frames: 11,
			hold: 15
		},
		speed: {
			base: 2320,
			scale: -5
		},
		power: {
			base: 50,
			scale: 8.1,
		},
		critical: {
			base: 4,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	farfetchd: {
		id: 57,
		name: ['farfetch’d', 'farfetch’d', 'Canarticho', 'farfetch’d', 'farfetch’d', 'farfetch’d', 'カモネギ', '파오리'],
		color: '#ad621b',
		ability: abilityData['criticalAura'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/towers/farfetchd.png',
			image: './src/assets/images/pokemon/towers/farfetchd-idle.png',
			frames: 4,
			hold: 14
		},
		speed: {
			base: 2000,
			scale: -10
		},
		power: {
			base: 7,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0.5
		},
		range: {
			base: 110,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 4],
	},
	omanyte: {
		id: 58,
		name: ['omanyte', 'omanyte', 'Amonita', 'omanyte', 'omanyte', 'omanyte', 'オムナイト', '오믈나이트'],
		color: '#8cdffe',
		ability: abilityData['swimmer'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/omanyte.png',
			image: './src/assets/images/pokemon/towers/omanyte-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 5700,
			scale: -10
		},
		power: {
			base: 26,
			scale: 4,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 3, 4],
		evolution: {
			pokemon: 'omastar',
			level: 40,
		},
	},
	omastar: {
		id: 58,
		name: ['omastar', 'omastar', 'omastar', 'omastar', 'omastar', 'omastar', 'オムスター', '오무스타'],
		color: '#189ce6',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/omastar.png',
			image: './src/assets/images/pokemon/towers/omastar-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 4000,
			scale: -10
		},
		power: {
			base: 40,
			scale: 8.5,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 155,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 3, 4],
	},
	kabuto: {
		id: 59,
		name: ['kabuto', 'kabuto', 'kabuto', 'kabuto', 'kabuto', 'kabuto', 'カブト', '투구'],
		color: '#de7318',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/kabuto.png',
			image: './src/assets/images/pokemon/towers/kabuto-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 1500,
			scale: -2
		},
		power: {
			base: 10,
			scale: 2.5,
		},
		critical: {
			base: 5,
			scale: 0.3
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3, 4],
		evolution: {
			pokemon: 'kabutops',
			level: 40,
		},
	},
	kabutops: {
		id: 59,
		name: ['kabutops', 'kabutops', 'kabutops', 'kabutops', 'kabutops', 'kabutops', 'カブトプス', '투구푸스'],
		color: '#a55b19',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/kabutops.png',
			image: './src/assets/images/pokemon/towers/kabutops-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1120,
			scale: -4
		},
		power: {
			base: 25,
			scale: 4.3,
		},
		critical: {
			base: 5,
			scale: 0.6
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3, 4],
	},
	corsola: {
		id: 60,
		name: ['corsola', 'corsola', 'Corayon', 'corsola', 'corsola', 'corsola', 'サニーゴ', '코산호'],
		color: '#ff8faf',
		ability: abilityData['slowSplash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/corsola.png',
			image: './src/assets/images/pokemon/towers/corsola-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 1500,
			scale: -2
		},
		power: {
			base: 10,
			scale: 4.5,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 200,
			scale: 1,
			inner: 125,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],
	},
	castform: {
		id: 61,
		name: ['castform', 'castform', 'Morphéo', 'castform', 'castform', 'kastform', 'ポワルン', '캐스퐁'],
		color: '#aeb7bf',
		ability: abilityData['castform'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		projectileGrass: projectileData['red1'],
		projectileWater: projectileData['blue5'],
		projectileMountain: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/towers/castform.png',
			image: './src/assets/images/pokemon/towers/castform-idle.png',
			imageGrass: './src/assets/images/pokemon/towers/castform-grass-idle.png',
			imageWater: './src/assets/images/pokemon/towers/castform-water-idle.png',
			imageMountain: './src/assets/images/pokemon/towers/castform-mountain-idle.png',
			frames: 6,
			framesGrass: 9,
			framesWater: 8,
			framesMountain: 4,
			hold: 14
		},
		speed: {
			base: 2100,
			scale: -12
		},
		power: {
			base: 1,
			scale: 5,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 3, 4],
	},
	clefairy: {
		id: 62,
		name: ['clefairy', 'clefairy', 'mélofée', 'clefairy', 'clefairy', 'Pixi', 'ピッピ', '삐삐'],
		color: '#ffc7d7',
		ability: abilityData['star'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/clefairy.png',
			image: './src/assets/images/pokemon/towers/clefairy-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -2
		},
		power: {
			base: 5,
			scale: 1,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'clefable',
			level: 25,
		},
	},
	clefable: {
		id: 62,
		name: ['clefable', 'clefable', 'mélodelfe', 'clefable', 'clefable', 'Pixilate', 'ピクシー', '픽시'],
		color: '#fe8dad',
		ability: abilityData['star'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/clefable.png',
			image: './src/assets/images/pokemon/towers/clefable-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -3
		},
		power: {
			base: 25,
			scale: 4.3,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
	},
	anorith: {
		id: 63,
		name: ['anorith', 'anorith', 'anorith', 'anorith', 'anorith', 'anorith', 'アノプス', '아노딥스'],
		color: '#47676f',
		ability: abilityData['armaldo'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/anorith.png',
			image: './src/assets/images/pokemon/towers/anorith-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -2
		},
		power: {
			base: 8,
			scale: 2,
		},
		critical: {
			base: 25,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'armaldo',
			level: 40,
		},
	},
	armaldo: {
		id: 63,
		name: ['armaldo', 'armaldo', 'armaldo', 'armaldo', 'armaldo', 'armaldo', 'アーマルド', '아말도'],
		color: '#1f9fe7',
		ability: abilityData['armaldo'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/armaldo.png',
			image: './src/assets/images/pokemon/towers/armaldo-idle.png',
			frames: 14,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -7
		},
		power: {
			base: 20,
			scale: 4,
		},
		critical: {
			base: 50,
			scale: 0.2
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
	},
	lileep: {
		id: 64,
		name: ['lileep', 'lileep', 'lilia', 'lileep', 'lileep', 'liliep', 'リリーラ', '릴링'],
		color: '#c697de',
		ability: abilityData['cradily'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/lileep.png',
			image: './src/assets/images/pokemon/towers/lileep-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -2
		},
		power: {
			base: 10,
			scale: 2.3,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'cradily',
			level: 40,
		},
	},
	cradily: {
		id: 64,
		name: ['cradily', 'cradily', 'vacilys', 'cradily', 'cradily', 'wielie', 'ユレイドル', '릴리요'],
		color: '#a75e67',
		ability: abilityData['cradily'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/cradily.png',
			image: './src/assets/images/pokemon/towers/cradily-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2320,
			scale: -4
		},
		power: {
			base: 40,
			scale: 3.7,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
	},
	shieldon: {
		id: 65,
		name: ['shieldon', 'shieldon', 'dinoclier', 'shieldon', 'shieldon', 'schilterus', 'タテトプス', '방패톱스'],
		color: '#efbe36',
		ability: abilityData['bastiodon'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/shieldon.png',
			image: './src/assets/images/pokemon/towers/shieldon-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 10000,
			scale: -10
		},
		power: {
			base: 50,
			scale: 5,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'bastiodon',
			level: 30,
		},
	},
	bastiodon: {
		id: 65,
		name: ['bastiodon', 'bastiodon', 'bastiodon', 'bastiodon', 'bastiodon', 'bollterus', 'トリデプス', '바리톱스'],
		color: '#c7971f',
		ability: abilityData['bastiodon'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/bastiodon.png',
			image: './src/assets/images/pokemon/towers/bastiodon-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 8000,
			scale: -15
		},
		power: {
			base: 200,
			scale: 12,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
	},
	cranidos: {
		id: 66,
		name: ['cranidos', 'cranidos', 'kranidos', 'cranidos', 'cranidos', 'koknodon', 'ズガイドス', '두개도스'],
		color: '#1f9fe7',
		ability: abilityData['rampardos'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/cranidos.png',
			image: './src/assets/images/pokemon/towers/cranidos-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -5
		},
		power: {
			base: 10,
			scale: 5,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 95,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'rampardos',
			level: 30,
		},
	},
	rampardos: {
		id: 66,
		name: ['rampardos', 'rampardos', 'charkos', 'rampardos', 'rampardos', 'rameidon', 'ラムパルド', '램펄드'],
		color: '#d72701',
		ability: abilityData['rampardos'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/rampardos.png',
			image: './src/assets/images/pokemon/towers/rampardos-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2600,
			scale: -7
		},
		power: {
			base: 50,
			scale: 11,
		},
		critical: {
			base: 5,
			scale: 0.15
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
	},
	starly: {
		id: 67,
		name: ['starly', 'starly', 'étourmi', 'starly', 'starly', 'staralili', 'ムックル', '찌르꼬'],
		color: '#7e6f6e',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/towers/starly.png',
			image: './src/assets/images/pokemon/towers/starly-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1250,
			scale: -1
		},
		power: {
			base: 4,
			scale: 1,
		},
		critical: {
			base: 1,
			scale: 0.2
		},
		range: {
			base: 175,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'staravia',
			level: 14,
		},
	},
	staravia: {
		id: 67,
		name: ['staravia', 'staravia', 'étourvol', 'staravia', 'staravia', 'staravia', 'ムクバード', '찌르버드'],
		color: '#b7bfc7',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/towers/staravia.png',
			image: './src/assets/images/pokemon/towers/staravia-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1100,
			scale: -1
		},
		power: {
			base: 12,
			scale: 1.8,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 210,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'staraptor',
			level: 31,
		},
	},
	staraptor: {
		id: 67,
		name: ['staraptor', 'staraptor', 'étouraptor', 'staraptor', 'staraptor', 'staraptor', 'ムクホーク', '찌르호크'],
		color: '#df6c56',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/towers/staraptor.png',
			image: './src/assets/images/pokemon/towers/staraptor-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -3
		},
		power: {
			base: 30,
			scale: 2.2,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 280,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
	},
	abra: {
		id: 68,
		name: ['abra', 'abra', 'abra', 'abra', 'abra', 'abra', 'ケーシィ', '캐이시'],
		color: '#deb500',
		ability: abilityData['teleport'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/abra.png',
			image: './src/assets/images/pokemon/towers/abra-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 850,
			scale: 0
		},
		power: {
			base: 1,
			scale: 1,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 90,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'kadabra',
			level: 16,
		},
	},
	kadabra: {
		id: 68,
		name: ['kadabra', 'kadabra', 'kadabra', 'kadabra', 'kadabra', 'kadabra', 'ユンゲラー', '윤겔라'],
		color: '#a55a19',
		ability: abilityData['teleport'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/kadabra.png',
			image: './src/assets/images/pokemon/towers/kadabra-idle.png',
			frames: 9,
			hold: 15
		},
		speed: {
			base: 800,
			scale: 0
		},
		power: {
			base: 15,
			scale: 3,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'alakazam',
			level: 50,
		},
	},
	alakazam: {
		id: 68,
		name: ['alakazam', 'alakazam', 'alakazam', 'alakazam', 'alakazam', 'alakazam', 'フーディン', '후딘'],
		color: '#dfb401',
		ability: abilityData['teleport'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/alakazam.png',
			image: './src/assets/images/pokemon/towers/alakazam-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 700,
			scale: 0
		},
		power: {
			base: 30,
			scale: 4,
		},
		critical: {
			base: 20,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
	},
	gastly: {
		id: 69,
		name: ['gastly', 'gastly', 'fantominus', 'gastly', 'gastly', 'nebulak', 'ゴース', '고오스'],
		color: '#b595de',
		ability: abilityData['nightmare'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/gastly.png',
			image: './src/assets/images/pokemon/towers/gastly-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -1
		},
		power: {
			base: 9,
			scale: 1,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1],
		evolution: {
			pokemon: 'haunter',
			level: 25,
		},
	},
	haunter: {
		id: 69,
		name: ['haunter', 'haunter', 'spectrum', 'haunter', 'haunter', 'alpollo', 'ゴースト', '고우스트'],
		color: '#8c62bc',
		ability: abilityData['nightmare'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/haunter.png',
			image: './src/assets/images/pokemon/towers/haunter-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -4
		},
		power: {
			base: 30,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1],
		evolution: {
			pokemon: 'gengar',
			level: 50,
		},
	},
	gengar: {
		id: 69,
		name: ['gengar', 'gengar', 'ectoplasma', 'gengar', 'gengar', 'gengar', 'ゲンガー', '팬텀'],
		color: '#b494de',
		ability: abilityData['nightmare'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/towers/gengar.png',
			image: './src/assets/images/pokemon/towers/gengar-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -8
		},
		power: {
			base: 40,
			scale: 6.6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1],
	},
	ditto: {
		id: 70,
		name: ['ditto', 'ditto', 'métamorph', 'ditto', 'ditto', 'ditto', 'メタモン', '메타몽'],
		color: '#d794de',
		ability: abilityData['transform'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/towers/ditto.png',
			image: './src/assets/images/pokemon/towers/ditto-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'veryHigh',
		tiles: [1, 2],
	},
}

export const eggListData = [
	pokemonData['charmander'], pokemonData['treecko'], pokemonData['froaki'], 
	pokemonData['natu'], pokemonData['spoink'], pokemonData['voltorb'], pokemonData['machop'], pokemonData['mankey'], pokemonData['chimchar'], 
	pokemonData['yamask'], pokemonData['cryogonal'], pokemonData['sableye'], pokemonData['meowth'], pokemonData['tangela'], pokemonData['chikorita'], 
	pokemonData['spinarak'], pokemonData['shroomish'], pokemonData['barboach'], pokemonData['drudiggon'], pokemonData['remoraid'], pokemonData['clauncher'], 
	pokemonData['seel'], pokemonData['murkrow'], pokemonData['staryu'], pokemonData['psyduck'], pokemonData['gulpin'], pokemonData['lapras'], 
	pokemonData['ferroseed'], pokemonData['shuckle'], pokemonData['maractus'], pokemonData['sunkern'], pokemonData['aron'], pokemonData['hawlucha'], 
	pokemonData['cubone'], pokemonData['binacle'], pokemonData['absol'], pokemonData['oshawott'], pokemonData['sandshrew'], pokemonData['sneasel'], 
	pokemonData['trapinch'], pokemonData['pidgey'], pokemonData['noibat'], pokemonData['riolu'], pokemonData['mareep'], pokemonData['surskit'], 
	pokemonData['cottonee'], pokemonData['petilil'], pokemonData['hoppip'], pokemonData['drilbur'], pokemonData['ekans'],
	pokemonData['girafarig'], pokemonData['torkoal'], pokemonData['spinda'], pokemonData['dunsparce'], pokemonData['ralts'], pokemonData['koffing'], 
	pokemonData['farfetchd'], pokemonData['omanyte'], pokemonData['kabuto'], pokemonData['corsola'], 
	pokemonData['castform'], pokemonData['clefairy'], pokemonData['anorith'], pokemonData['lileep'], pokemonData['shieldon'], pokemonData['cranidos'], 
	pokemonData['starly'], pokemonData['abra'], pokemonData['gastly'], pokemonData['ditto'], 
]


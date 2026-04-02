import { enemyData as e } from './enemyData.js';

export const waveData = {
	// AREA 1
	0: {
		1: {
			preview: [e.rattata],
			wave: [
				e.rattata, e.rattata, e.rattata,
			],
		},
		2: {
			preview: [e.rattata, e.zubat],
			wave: [
				e.rattata, e.rattata, e.rattata, null, null, null,
				e.rattata, e.zubat
			],
		},
		3: {
			preview: [e.rattata, e.zubat],
			wave: [
				e.zubat, e.zubat, 
				e.rattata, e.rattata, e.rattata, null, null, null,
				e.zubat, e.zubat, 
			]
		},
		4: {
			preview: [e.rattata, e.zubat],
			wave: [
				e.rattata, e.rattata, null, null, null,
				e.zubat, e.zubat, e.zubat,
				e.rattata, e.rattata, e.rattata, e.rattata
			],
		},
		5: {
			preview: [e.rattata, e.geodude],
			wave: [
				e.rattata, e.rattata, e.rattata, e.rattata, 
				e.geodude,
			],
		},
		6: {
			preview: [e.zubat, e.geodude],
			wave: [
				e.geodude,
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat
			],
		},
		7: {
			preview: [e.rattata, e.zubat, e.geodude],
			wave: [
				e.geodude, e.geodude, 
				null, null, null, null, null, null, null, 
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, 
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, 
			],
		},
		8: {
			preview: [e.doduo],
			wave: [
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
			],
		},
		9: {
			preview: [e.rattata, e.geodude],
			wave: [
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,	
				e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude,
			],
		},
		10: {
			preview: [e.rattata, e.chingling],
			wave: [
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				null, null, null, 
				e.chingling
			],
		},
		11: {
			preview: [e.rattata, e.zubat, e.geodude],
			wave: [
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat,
				e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude,
				null, null, null, null, null, null, null, null, null, null, 
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
			],
		},
		12: {
			preview: [e.doduo],
			wave: [
				 e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
			],
		},
		13: {
			preview: [e.rattata, e.geodude,],
			wave: [
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude,
				null, null, null, null, null, null, null, null, null, null, 
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, 
			],
		},
		14: {
			preview: [e.geodude],
			wave: [
				e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude,
				e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude,
			],
		},
		15: {
			preview: [e.doduo, e.chingling],
			wave: [
				e.chingling, e.chingling, e.chingling,
				null, null, null, null, null, null,  
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
			],	
		},
		16: {
			preview: [e.rattata, e.raticate],
			wave: [
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, 
				null,
				e.raticate, e.raticate, 
				null,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
			],
		},
		17: {
			preview: [e.rattata, e.zubat, e.raticate],
			wave: [
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				e.raticate, e.raticate,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat,
			],
		},
		18: {
			preview: [e.geodude, e.bellsprout],
			wave: [
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout,
				e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude,
			],
		},
		19: {
			preview: [e.bellsprout, e.raticate],
			wave: [
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
				null, null, null,
				e.raticate, e.raticate, 
			],
		},
		20: {
			preview: [e.geodude, e.nosepass],
			wave: [
				e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude,
				e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.nosepass
			],
		},
		21: {
			preview: [e.chingling, e.bellsprout, e.raticate],
			wave: [
				e.chingling, e.chingling, e.chingling, 
				null, null,
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
				null, null,
				e.raticate, e.raticate, e.raticate, e.raticate, 
			],
		},
		22: {
			preview: [e.bellsprout, e.raticate],
			wave: [
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
				null, null,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				null, null,
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout,
			],
		},
		23: {
			preview: [e.rattata, e.zubat, e.geodude],
			wave: [
				e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude,
				null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,  
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat,
			],
		},
		24: {
			preview: [e.doduo],
			wave: [
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
				null, null,
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
				null, null,
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
			],
		},
		25: {
			preview: [e.chingling, e.nosepass, e.bellsprout, e.raticate],
			wave: [
				e.chingling, e.chingling, e.chingling, e.chingling, 
				e.nosepass, e.nosepass, 
				null, null, null, null, null, null, null, null, null,
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate
			],
		},
		26: {
			preview: [e.geodude, e.nosepass],
			wave: [
				e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, null, null,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, null, null,
				e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude,

			],
		},
		27: {
			preview: [e.rattata, e.zubat, e.nosepass],
			wave: [
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat,
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				
			],
		},
		28: {
			preview: [e.chingling, e.nosepass, e.raticate],
			wave: [
				e.chingling, e.chingling, e.chingling, e.chingling, e.chingling,
				null,
				e.raticate, e.raticate, e.raticate,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				e.raticate, e.raticate,
			],
		},
		29: {
			preview: [e.rattata, e.raticate],
			wave: [
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, 
				null, null, null, null, null, 
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
			],
		},
		30: {
			preview: [e.zubat, e.golbat],
			wave: [
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat,
				e.golbat, 
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, 
				
			],
		},
		31: {
			preview: [e.bellsprout, e.weepinbell, e.delibird],
			wave: [
				e.weepinbell, 
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout,
				e.weepinbell, 
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout,
				e.weepinbell, 
				e.delibird,
			],
		},
		32: {
			preview: [e.rattata, e.raticate],
			wave: [
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, null, null,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, null, null,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, null, null,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, null, null,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, null, null,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
			],
		},
		33: {
			preview: [e.nosepass, e.bellsprout, e.doduo],
			wave: [
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass,
				e.nosepass, e.nosepass, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,  
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout,	
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
			],
			
		},
		34: {
			preview: [e.rattata, e.zubat, e.geodude, e.raticate, e.golbat],
			wave: [
				e.golbat,
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat,
				e.geodude, e.geodude, e.geodude, e.geodude, e.geodude,
				null, null, null, null, null, null, null, null, null, null, 

				e.raticate, e.raticate,  null, 
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				null, null, null, 
				e.raticate, e.raticate,  null, 
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.golbat,
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat,		
			],
		},
		35: {
			preview: [e.golbat, e.weepinbell, e.kecleon],
			wave: [
				e.kecleon, e.kecleon, e.kecleon,
				null, null, null, null, null, null,
				e.golbat, e.golbat, e.golbat,
				
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
			],
		},
		36: {
			preview: [e.doduo],
			wave: [
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
			],
		},
		37: {
			preview: [e.rattata, e.zubat, e.chingling, e.nosepass, e.bellsprout],
			wave: [
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat,

				e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, 
				e.chingling, e.chingling,

				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, 
				null, 
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
				null, null, null, null,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, 
				null, 
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
			],
		},
		38: {
			preview: [e.geodude, e.nosepass, e.raticate],
			wave: [
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, 
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, 

				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass,
				null,
				e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude,
				null,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, 
				null,
				e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, 
				null,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass,
			],
		},
		39: {
			preview: [e.zubat, e.bellsprout, e.golbat, e.weepinbell],
			wave: [
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, 
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, 

				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
				
			],
		},
		40: {
			preview: [e.chingling, e.chimecho],
			wave: [
				e.chingling, e.chingling, e.chingling, e.chingling, e.chingling,  e.chingling, e.chingling, null, null,
				e.chingling, e.chingling, e.chingling,
				e.chimecho,
				e.chingling, e.chingling, e.chingling, null, null,
				e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling,
			],
		},
		41: {
			preview: [e.raticate, e.golbat],
			wave: [
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, 
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
			],
		},
		42: {
			preview: [e.rattata, e.zubat, e.raticate, e.golbat],
			wave: [
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, 
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat,

				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null,
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, 
			],
			
		},
		43: {
			preview: [e.delibird],
			wave: [
				e.delibird, null,  null, e.delibird,  null,  null, e.delibird
			],
		},
		44: {
			preview: [e.nosepass, e.bellsprout, e.weepinbell],
			wave: [
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,

				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass,
			]
		},
		45: {
			preview: [e.nosepass, e.bellsprout, e.raticate, e.golbat, e.weepinbell],
			wave: [
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, 
				e.golbat, e.golbat, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass,
				e.nosepass, e.nosepass, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
				e.bellsprout, e.bellsprout, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				e.raticate, e.raticate,
			]
		},
		46: {
			preview: [e.zubat, e.doduo, e.golbat],
			wave: [
				e.doduo, e.doduo, 
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat,
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, 
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat,
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
			],		
		},
		47: {
			preview: [e.doduo, e.weepinbell],
			wave: [
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				null, null, null,
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
			],
		},
		48: {
			preview: [e.nosepass, e.raticate, e.golbat],
			wave: [
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, 
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,				
			],
		},
		49: {
			preview: [e.raticate, e.golbat, e.weepinbell],
			wave: [
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, 
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
			],
		},
		50: {
			preview: [e.geodude, e.graveler],
			wave: [
				e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude,				
			],
		},
		51: {
			preview: [e.raticate, e.golbat, e.chimecho],
			wave: [
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, 
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, 
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, 
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, 
			],
		},
		52: {
			preview: [e.chimecho, e.graveler],
			wave: [
				e.graveler, e.graveler, 
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, 
				e.graveler, e.graveler, 
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, 
				e.graveler, e.graveler, 
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, 
			],
		},
		53: {
			preview: [e.golbat],
			wave: [
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat
			],
		},
		54: {
			preview: [e.geodude, e.chingling, e.chimecho, e.graveler],
			wave: [
				e.chimecho,
				e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling,
				e.chimecho,

				e.graveler,
				e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude,
				e.graveler,	
			],
		},
		55: {
			preview: [e.graveler],
			wave: [
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
			],
		},
		56: {
			preview: [e.golbat, e.weepinbell, e.graveler],
			wave: [
				e.graveler, e.graveler, e.graveler, e.graveler, 
				null, null, null, null, null, null, null, null,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
			],
		},
		57: {
			preview: [e.golbat, e.weepinbell, e.graveler],
			wave: [
				e.graveler, e.graveler, e.graveler, e.graveler,  e.graveler, e.graveler, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
			],
			
		},
		58: {
			preview: [e.raticate, e.golbat, e.chimecho, e.graveler],
			wave: [
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				null, null, null, 
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				null, null, null, null, null, null, null, null, null, null, null, 
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
			],
		},
		59: {
			preview: [e.doduo],
			wave: [
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
			],
			
		},
		60: {
			preview: [e.doduo, e.dodrio],
			wave: [
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio
			],
		},
		61: {
			preview: [e.golbat, e.graveler],
			wave: [
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, 
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, 
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
			],
		},
		62: {
			preview: [e.golbat, e.graveler, e.dodrio],
			wave: [
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, 
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, 
				e.dodrio, e.dodrio,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.dodrio, e.dodrio,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.dodrio, e.dodrio,
			],
		},
		63: {
			preview: [e.chingling, e.nosepass, e.raticate, e.weepinbell],
			wave: [
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, 
				e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, 
				null, null, null, null, null, null,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				null, null, null, null,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, 
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, 
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, 
			],
		},
		64: {
			preview: [e.zubat, e.doduo, e.nosepass, e.graveler, e.dodrio],
			wave: [
				e.nosepass, e.nosepass, e.nosepass, e.graveler, e.graveler, e.graveler, e.nosepass, e.nosepass, e.nosepass, 
				e.graveler, e.graveler, e.graveler, e.nosepass, e.nosepass, e.nosepass, e.graveler, e.graveler, e.graveler,

				null, null, null, null, null, null, null, null, null, null, null, null,
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat,
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat,

				null, null, null, null, null, null, null, null, null, null, null, null,
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, 
				null, null, null, null, null, null,
				e.dodrio, 
				null, null, null, null, null, null,
				e.dodrio
			],
		},
		65: {
			preview: [e.chingling, e.raticate, e.graveler],
			wave: [
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling,
				e.chingling, e.chingling,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				e.raticate, e.raticate,
			],
		},
		66: {
			preview: [e.golbat, e.chimecho, e.graveler, e.dodrio, e.weepinbell],
			wave: [
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.dodrio,
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho,
				e.dodrio, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.dodrio,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, 

			],
		},
		67: {
			preview: [e.dodrio],
			wave: [
				e.dodrio, e.dodrio, e.dodrio, e.dodrio,  null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		68: {
			preview: [e.rattata, e.zubat, e.geodude, e.doduo, e.chingling],
			wave: [
				e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude,

				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, 

				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat,
				e.chingling, e.chingling, e.chingling, e.chingling, e.chingling,

				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,

				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, e.zubat,
				e.zubat, e.zubat, e.zubat, e.zubat, e.zubat, 

				
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
			],
		},
		69: {
			preview: [e.bellsprout, e.weepinbell, e.kecleon],
			wave: [
				e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, 
				e.kecleon, e.kecleon,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.kecleon, e.kecleon,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,		
			],
		},
		70: {
			preview: [e.bellsprout, e.weepinbell, e.chansey],
			wave: [
				e.chansey, 
				null, null, null, null, null,
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout,
			],
		},
		71: {
			preview: [e.golbat, e.dodrio],
			wave: [
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.dodrio, e.dodrio,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.dodrio, e.dodrio,
				null, null, null,
				e.dodrio, e.dodrio,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.dodrio, e.dodrio,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.dodrio, e.dodrio,
				null, null, null,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.dodrio, e.dodrio,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.dodrio, e.dodrio,
				null, null, null, null, null, null, null,
				e.dodrio, e.dodrio,
			],
		},
		72: {
			preview: [e.graveler, e.chansey],
			wave: [
				e.chansey,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, 
				e.chansey,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
			],
		},
		73: {
			preview: [e.dodrio, e.chansey],
			wave: [
				e.chansey, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null,
				e.chansey,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		74: {
			preview: [e.golbat, e.chimecho, e.graveler, e.dodrio, e.chansey],
			wave: [
				e.chansey,
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho,
				e.chansey, 
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, 
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		75: {
			preview: [e.chansey, e.kecleon],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, 
				null, null, null, null, null, null,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, 
			],
		},
		76: {
			preview: [e.chingling, e.golbat, e.chimecho, e.dodrio, e.chansey],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey,
				e.chingling, e.chingling, e.chingling, e.chingling, 
				e.chansey, e.chansey, e.chansey, e.chansey,
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho,
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho,
				e.chingling, e.chingling, e.chingling, e.chingling, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio,
			],
		},
		77: {
			preview: [e.graveler, e.weepinbell, e.chansey],
			wave: [
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.graveler, e.graveler, e.graveler, e.graveler, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
			],
		},
		78: {
			preview: [e.golbat, e.chansey],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
			],
		},
		79: {
			preview: [e.delibird],
			wave: [
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, 
			],
		},
		80: {
			preview: [e.solrock, e.lunatone],
			wave: [
				e.solrock, e.lunatone
			],
		},
		81: {
			preview: [e.dodrio],
			wave: [
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		82: {
			preview: [e.doduo, e.dodrio, e.weepinbell],
			wave: [
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		83: {
			preview: [e.chansey, e.lunatone],
			wave: [
				e.lunatone, e.chansey, e.chansey, e.chansey,
			],
		},
		84: {
			preview: [e.chansey, e.solrock],
			wave: [
				 e.solrock, e.chansey, e.chansey, e.chansey,
			],
		},
		85: {
			preview: [e.chansey, e.solrock, e.lunatone],
			wave: [
				e.solrock, 
				e.lunatone,
				e.chansey, e.chansey, e.chansey,
				null, null,
				e.chansey, e.chansey, e.chansey,
			],
		},
		86: {
			preview: [e.graveler, e.chansey, e.lunatone],
			wave: [
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, 
				null, null, null, null, null,
				e.chansey, e.chansey, e.chansey, 
				e.lunatone, e.lunatone
			],
		},
		87: {
			preview: [e.graveler, e.chansey, e.solrock],
			wave: [
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, 
				null, null, null, null, null,
				e.chansey, e.chansey, e.chansey, 
				e.solrock, e.solrock
			],
		},
		88: {
			preview: [e.geodude, e.nosepass, e.graveler, e.solrock, e.lunatone],
			wave: [
				e.lunatone, 
				e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, 
				e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, e.geodude, 
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, 
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.solrock,
			],
		},
		89: {
			preview: [e.bellsprout, e.weepinbell, e.kecleon],
			wave: [
				e.kecleon, e.kecleon, e.kecleon,

				null, null,

				e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, 

				null, null,

				e.kecleon, e.kecleon, e.kecleon, null, null,

				e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell,
				e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				null, null,

				e.kecleon, e.kecleon, e.kecleon, 

				null, null,

				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell,
				e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout,
			],
		},
		90: {
			preview: [e.graveler, e.rhyhorn],
			wave: [
				e.graveler, e.graveler, e.graveler, e.graveler,
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn
			],
		},
		91: {
			preview: [e.doduo, e.dodrio, e.kecleon],
			wave: [
				e.kecleon, e.kecleon, e.kecleon,
				e.kecleon, e.kecleon, e.kecleon,
				e.doduo, e.doduo, e.doduo, e.doduo, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.doduo, e.doduo, 
				e.kecleon, e.kecleon, e.kecleon,
				e.kecleon, e.kecleon, e.kecleon,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.kecleon, e.kecleon, e.kecleon,
				e.kecleon, e.kecleon, e.kecleon, 
				e.doduo, e.doduo, e.dodrio, e.dodrio, e.dodrio, e.doduo, e.doduo, e.dodrio, e.doduo, e.doduo, 
				e.doduo, e.doduo, e.dodrio, e.dodrio, e.dodrio, e.doduo, e.doduo, e.dodrio, e.doduo, e.doduo, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,

			],
		},
		92: {
			preview: [e.raticate, e.golbat, e.chimecho, e.dodrio, e.rhydon],
			wave: [
				e.rhydon, e.rhydon, e.rhydon,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.chimecho, e.chimecho,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.rhydon, e.rhydon, e.rhydon,
				e.chimecho, e.chimecho,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,

			],
		},
		93: {
			preview: [e.chansey, e.rhydon],
			wave: [
				e.chansey,
				e.rhydon, e.rhydon, e.rhydon,
				e.chansey, e.chansey,
				e.rhydon, e.rhydon, e.rhydon,
				e.chansey, e.chansey,
				e.rhydon, e.rhydon, e.rhydon,
				e.chansey, e.chansey,
			],
		},
		94: {
			preview: [e.dodrio, e.solrock, e.rhyhorn],
			wave: [
				e.rhyhorn,
				e.solrock, e.solrock,  
				e.rhyhorn,
				e.solrock, e.solrock, 
				e.rhyhorn,
				e.solrock, e.solrock, 
				e.rhyhorn,
				e.solrock, e.solrock, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
			],	
		},
		95: {
			preview: [e.dodrio, e.lunatone, e.rhyhorn],
			wave: [
				e.rhyhorn,
				e.lunatone, e.lunatone, 
				e.rhyhorn,
				e.lunatone, e.lunatone, 
				e.rhyhorn,
				e.lunatone, e.lunatone, 
				e.rhyhorn,
				e.lunatone, e.lunatone, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
			],
		},
		96: {
			preview: [e.solrock, e.lunatone, e.rhyhorn],
			wave: [
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn,
				e.solrock, e.lunatone, e.solrock, e.lunatone, e.solrock, e.lunatone,
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn,
			],
		},
		97: {
			preview: [e.golbat, e.chansey, e.solrock, e.lunatone],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey, 
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.solrock, e.lunatone, e.solrock, e.lunatone, e.solrock, e.lunatone, e.solrock, e.lunatone, e.solrock, e.lunatone,
				e.solrock, e.lunatone, e.solrock, e.lunatone, e.solrock, e.lunatone, e.solrock, e.lunatone, e.solrock, e.lunatone,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
			],
		},
		98: {
			preview: [e.dodrio, e.chansey, e.solrock, e.lunatone],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.solrock, e.lunatone, e.solrock, e.lunatone, e.solrock, e.lunatone, e.solrock, e.lunatone, e.solrock, e.lunatone,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.solrock, e.lunatone, e.solrock, e.lunatone, e.solrock, e.lunatone, e.solrock, e.lunatone, e.solrock, e.lunatone,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
			],
		},
		99: {
			preview: [e.chansey, e.solrock, e.lunatone, e.rhydon],
			wave: [
				e.rhydon, e.rhydon, e.rhydon,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.rhydon, e.rhydon, e.rhydon,
				e.solrock, e.lunatone, e.lunatone, e.solrock,
				e.rhydon, e.rhydon, e.rhydon,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,	
				e.rhydon, e.rhydon, e.rhydon,
				e.lunatone, e.solrock, e.solrock, e.lunatone,
			],
		},
		100: {
			preview: [e.articuno],
			wave: [
				e.articuno
			],
		},
	},
	1: {
		1: {
			preview: [e.caterpie],
			wave: [
				e.caterpie, e.caterpie, e.caterpie, e.caterpie, e.caterpie, e.caterpie, e.caterpie, e.caterpie, e.caterpie, e.caterpie,
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, 
			],
		},
		2: {
			preview: [e.caterpie, e.metapod],
			wave: [
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, 
			],
		},
		3: {
			preview: [e.metapod],
			wave: [
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
			],
		},
		4: {
			preview: [e.caterpie, e.metapod, e.nosepass],
			wave: [
				
				e.nosepass, e.nosepass, 
				null, null, null, null,
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, 
				null, null, null, null,
				e.nosepass, e.nosepass, 
				e.metapod, e.metapod, e.metapod, e.metapod, 
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, 
			],
		},
		5: {
			preview: [e.caterpie, e.metapod],
			wave: [
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, e.caterpie, e.caterpie,
			],
		},
		6: {
			preview: [e.caterpie, e.metapod, e.nosepass],
			wave: [
				e.nosepass, 
				e.metapod, e.metapod, e.metapod,
				e.caterpie, e.caterpie,	e.caterpie, 
				e.metapod, e.metapod, e.metapod,
				e.nosepass,
				e.metapod, e.metapod, e.metapod,
				e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, 
			],
		},
		7: {
			preview: [e.metapod, e.nosepass],
			wave: [
				e.nosepass, e.nosepass, e.nosepass, e.nosepass,
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass,  
				
			],
		},
		8: {
			preview: [e.metapod, e.venonat],
			wave: [
				e.venonat, e.venonat, e.venonat, 
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
			],
		},
		9: {
			preview: [e.caterpie, e.metapod],
			wave: [
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, 
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
				null, null, null, null, null, null, null,
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,
			],
		},
		10: {
			preview: [e.caterpie, e.metapod, e.butterfree],
			wave: [
				e.butterfree,
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, 
			],
		},
		11: {
			preview: [e.venonat],
			wave: [
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
			],
		},
		12: {
			preview: [e.nosepass, e.venonat],
			wave: [
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, 
				null, null, null, null, null, null, null, null,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				null, null, null, null, null, null, null, null,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
			],
		},
		13: {
			preview: [e.venonat, e.butterfree],
			wave: [
				e.venonat, e.venonat, e.venonat, null, e.butterfree, null,
				e.venonat, e.venonat, e.venonat, null, null, e.butterfree, null,
				e.venonat, e.venonat, e.venonat, null, null, e.butterfree,

			],
		},
		14: {
			preview: [e.caterpie, e.metapod, e.butterfree],
			wave: [
				e.butterfree,
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod,
				e.butterfree, 
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, 
				e.butterfree, 
			],
		},
		15: {
			preview: [e.graveler],
			wave: [
				e.graveler, e.graveler, e.graveler, 
			],
		},
		16: {
			preview: [e.graveler, e.weepinbell],
			wave: [
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				null, 
				e.graveler, e.graveler, 
				null, null, null, null, null, null, null, null, null, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
			],
		},
		17: {
			preview: [e.metapod, e.graveler],
			wave: [
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, null, e.graveler, e.graveler,
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, null, e.graveler, e.graveler, 
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, null, e.graveler, e.graveler,
				null, null, null, null, null, null, e.graveler, e.graveler,
			],
		},
		18: {
			preview: [e.venonat, e.butterfree],
			wave: [
				e.butterfree, e.butterfree, e.butterfree,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
			],
		},
		19: {
			preview: [e.nosepass, e.graveler],
			wave: [
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass,
				null, e.graveler, null, e.graveler, null, e.graveler,
				null, null, null, null, null, null, null, null, null,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, 
				null, e.graveler, null, e.graveler, null, e.graveler,
				
			],
		},
		20: {
			preview: [e.nosepass, e.probopass],
			wave: [
				e.probopass,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass,  e.nosepass, e.nosepass, e.nosepass, e.nosepass, 
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass,  e.nosepass, e.nosepass, e.nosepass, e.nosepass, 
			],
		},
		21: {
			preview: [e.caterpie, e.metapod, e.butterfree],
			wave: [
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod,
				e.butterfree,
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, 
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, 
				e.butterfree,
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,
				e.butterfree,
				null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null,
				e.butterfree
			],
		},
		22: {
			preview: [e.venonat, e.weepinbell],
			wave: [
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,  
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
			],
		},
		23: {
			preview: [e.graveler, e.weepinbell],
			wave: [
				e.graveler, e.graveler, e.graveler, e.graveler,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				null, null, null, null,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				null, null, null, null,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
			],
		},
		24: {
			preview: [e.venonat, e.weepinbell, e.delibird],
			wave: [
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				null, null, null, null,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,  
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				null, null, null, null,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				null, null, null, null,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				null, null, null, null, null, null,
				e.delibird
			],
		},
		25: {
			preview: [e.caterpie, e.metapod, e.venonat, e.butterfree],
			wave: [
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, 
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
			],
		},
		26: {
			preview: [e.graveler, e.probopass],
			wave: [
				e.probopass, 
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				
			],
		},
		27: {
			preview: [e.venonat, e.weepinbell, e.butterfree],
			wave: [
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				e.butterfree, e.butterfree, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				e.butterfree, e.butterfree, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				e.butterfree, e.butterfree, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				e.butterfree, e.butterfree, 
			],
		},
		28: {
			preview: [e.nosepass, e.probopass],
			wave: [
				e.probopass,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, 
				null, null, null, null, null,
				e.probopass, 
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, 
				null, null, null, null, null, 
				e.probopass,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, 
			],
		},
		29: {
			preview: [e.venonat, e.butterfree],
			wave: [
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
			],
		},
		30: {
			preview: [e.venonat, e.butterfree, e.venomoth],
			wave: [
				e.butterfree, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				null, null, null,
				e.butterfree, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				null, null, null,
				e.butterfree, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				null, null, null,
				e.butterfree, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				null, null, null,
				e.venomoth
			],
		},
		31: {
			preview: [e.nosepass, e.probopass],
			wave: [
				e.probopass,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, 
				e.probopass,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass,  
				e.probopass,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass,
				e.probopass,
			],
		},
		32: {
			preview: [e.caterpie, e.metapod, e.venonat, e.butterfree, e.venomoth],
			wave: [
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod,
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, 
			],
		},
		33: {
			preview: [e.venonat, e.venomoth],
			wave: [
				e.venonat, e.venonat, e.venonat,
				e.venomoth, 
				e.venonat, e.venonat, e.venonat,
				e.venomoth, 
				e.venonat, e.venonat, e.venonat,
				e.venomoth, 
				e.venonat, e.venonat, e.venonat,
				e.venomoth, 
				e.venonat, e.venonat, e.venonat,
				e.venomoth, 
				e.venonat, e.venonat, e.venonat,
				e.venomoth, 
			],
		},
		34: {
			preview: [e.probopass],
			wave: [
				e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, 
			],
		},
		35: {
			preview: [e.venonat, e.venomoth],
			wave: [
				e.venomoth, e.venomoth, e.venomoth,
				e.venonat, 
				e.venomoth, e.venomoth, e.venomoth,
				e.venonat, 
				e.venomoth, e.venomoth, e.venomoth,
				e.venonat, 
				e.venomoth, e.venomoth, e.venomoth,
				e.venonat, 
			],
		},
		36: {
			preview: [e.venonat, e.butterfree, e.graveler, e.weepinbell, e.slugma],
			wave: [
				e.slugma, e.slugma, 
				null, null, null, null, null, null,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				null, null, null, null, null, null,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,
			],
		},
		37: {
			preview: [e.venonat, e.venomoth],
			wave: [
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,
				e.venomoth, e.venomoth, e.venomoth
			],
		},
		38: {
			preview: [e.butterfree, e.venomoth],
			wave: [
				e.venomoth, e.venomoth, e.venomoth, 
				e.butterfree, e.butterfree,
				e.venomoth, e.venomoth, e.venomoth,
				e.butterfree, e.butterfree, 
				e.venomoth, e.venomoth, e.venomoth,
				e.butterfree, e.butterfree,  
				e.venomoth, e.venomoth, e.venomoth,
				e.butterfree, e.butterfree, 
				e.venomoth, e.venomoth, e.venomoth,
				e.butterfree, e.butterfree, 
				e.venomoth, e.venomoth, e.venomoth,
				e.butterfree, e.butterfree, 
			],
		},
		39: {
			preview: [e.weepinbell],
			wave: [
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				null, null, null, null, null,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				null, null, null, null, null,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
			],
		},
		40: {
			preview: [e.weepinbell, e.victreebel],
			wave: [
				e.victreebel,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				
			],
		},
		41: {
			preview: [e.butterfree, e.venomoth],
			wave: [
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
			],
		},
		42: {
			preview: [e.probopass],
			wave: [
				e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, 
				null, null, null, null, null,
				e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, 
				null, null, null, null, null,
				e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, 
			],
		},
		43: {
			preview: [e.graveler, e.weepinbell, e.slugma],
			wave: [
				e.slugma, e.slugma,
				e.weepinbell, e.weepinbell, e.weepinbell, 
				e.graveler, e.graveler, e.graveler, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.weepinbell, e.weepinbell, e.weepinbell, 
				e.graveler, e.graveler, e.graveler, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
			],
		},
		44: {
			preview: [e.venonat, e.butterfree, e.venomoth, e.victreebel],
			wave: [
				e.victreebel,
				e.venomoth, e.venomoth, e.venomoth, e.butterfree, e.venonat, e.butterfree, e.venomoth, e.venonat, e.venomoth, e.venomoth,
				e.venonat, e.venonat, e.butterfree, e.venonat, e.venomoth, e.butterfree, e.butterfree, e.venomoth, e.venonat, e.venonat,
				e.victreebel,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venonat, e.butterfree, e.venomoth, e.butterfree, e.venomoth, e.butterfree, e.butterfree, e.venomoth, e.venomoth, e.butterfree,
			],
		},
		45: {
			preview: [e.probopass, e.venomoth, e.victreebel],
			wave: [
				e.victreebel, e.victreebel, e.victreebel, 
				null, null, null, null,
				e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				null, null, null, null,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
			],
		},
		46: {
			preview: [e.venonat, e.butterfree, e.venomoth],
			wave: [
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,

				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,

				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
			],
		},
		47: {
			preview: [e.weepinbell, e.victreebel],
			wave: [
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.victreebel, e.victreebel, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.victreebel, e.victreebel, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.victreebel, e.victreebel, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
			],
		},
		48: {
			preview: [e.slugma],
			wave: [
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
			],
		},
		49: {
			preview: [e.nosepass, e.graveler, e.probopass],
			wave: [
				e.probopass,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, 
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.probopass,
				e.probopass,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, 
				e.probopass,
			],
		},
		50: { 
			preview: [e.butterfree],
			wave: [
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
			] 
		},
		51: {
			preview: [e.graveler, e.golem],
			wave: [
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.golem, e.golem, e.golem,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
			],
		},
		52: { 
			preview: [e.graveler, e.rhyhorn, e.kecleon],
			wave: [
				e.rhyhorn, 
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, 
				null, null, null, null, null, null,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon,
			] 
		},
		53: { 
			preview: [e.slugma, e.golem, e.rhyhorn],
			wave: [
				e.rhyhorn, 
				e.golem, e.golem,
				e.slugma, e.slugma, e.slugma, e.slugma, 
			] 
		},
		54: { 
			preview: [e.weepinbell, e.victreebel],
			wave: [
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
			] 
		},
		55: { 
			preview: [e.probopass, e.slugma, e.golem, e.rhyhorn],
			wave: [
				e.rhyhorn, e.rhyhorn, e.rhyhorn, 
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, 
				e.golem, e.golem, 
				e.probopass, e.probopass, e.probopass,
			] 
		},
		56: { 
			preview: [e.venomoth],
			wave: [
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
			] 
		},
		57: { 
			preview: [e.butterfree, e.venomoth, e.victreebel],
			wave: [
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree,
			] 
		},
		58: { 
			preview: [e.weepinbell, e.victreebel],
			wave: [
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
			] 
		},
		59: { 
			preview: [e.slugma, e.rhyhorn],
			wave: [
				e.rhyhorn, e.rhyhorn, 
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.rhyhorn, e.rhyhorn, 
			] 
		},
		60: { 
			preview: [e.rhyhorn, e.rhydon],
			wave: [
				e.rhydon, e.rhyhorn, e.rhyhorn, e.rhyhorn,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.rhydon, e.rhyhorn, e.rhyhorn, e.rhyhorn,
			] 
		},
		61: { 
			preview: [e.graveler, e.golem, e.rhyhorn],
			wave: [
				e.rhyhorn, e.rhyhorn,
				e.golem, e.golem, e.golem, e.golem, e.golem, 
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.golem, e.golem, e.golem, e.golem, e.golem, 
			] 
		},
		62: { 
			preview: [e.golem],
			wave: [
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
			] 
		},
		63: { 
			preview: [e.slugma, e.magcargo],
			wave: [
				e.magcargo, e.magcargo,
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, 
				e.magcargo, e.magcargo,
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, 
				e.magcargo, e.magcargo
			] 
		},
		64: { 
			preview: [e.golem, e.delibird],
			wave: [	
				e.golem, e.golem, e.golem, e.golem, e.golem, 
				null, null, null, null,
				e.golem, e.golem, e.golem, e.golem, e.golem,
				null, null, null, null,
				e.golem, e.golem, e.golem, e.golem, e.golem,
				null, null,
				e.delibird,
				null, null,
				e.delibird,
				null, null,
				e.delibird,
				null, null,
				e.delibird,
			] 
		},
		65: { 
			preview: [e.nosepass, e.rhyhorn],
			wave: [
				e.rhyhorn, e.rhyhorn, e.rhyhorn, 
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass,
				e.rhyhorn, e.rhyhorn, e.rhyhorn,
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass,
				e.rhyhorn, e.rhyhorn, e.rhyhorn, 
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass,
				e.rhyhorn, e.rhyhorn, e.rhyhorn, 
				e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass, e.nosepass,
			] 
		},	
		66: { 
			preview: [e.rhyhorn],
			wave: [
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn,
			] 
		},
		67: { 
			preview: [e.golem, e.rhyhorn],
			wave: [
				e.golem, e.golem, e.golem, 
				null, null, null, null,
				e.golem, e.golem, e.golem, 
				null, null, null, null,
				e.rhyhorn, e.rhyhorn, e.rhyhorn,  
				null, null, null, null,
				e.golem, e.golem, e.golem, 
				null, null, null, null,
				e.rhyhorn, e.rhyhorn, e.rhyhorn,  
			] 
		},
		68: { 
			preview: [e.rhydon],
			wave: [
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon,
			] 
		},
		69: { 
			preview: [e.graveler, e.probopass, e.victreebel, e.slugma, e.golem],
			wave: [
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, e.probopass,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
			] 
		},
		70: { 
			preview: [e.probopass, e.slugma, e.golem, e.rhyhorn],
			wave: [
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, 
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, 
				e.golem, e.golem, e.golem, e.golem, 
				e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, 
				null, null, null, null, null, null, null, null, null, null,
				e.rhyhorn, e.rhyhorn, e.rhyhorn, 
			] 
		},
		71: { 
			preview: [e.slugma, e.golem, e.rhyhorn],
			wave: [
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, 
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, 
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, 
			] 
		},
		72: { 
			preview: [e.graveler, e.slugma, e.rhyhorn, e.magcargo],
			wave: [
				e.magcargo,
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, 
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, 
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, 
			] 
		},
		73: { 
			preview: [e.golem, e.rhyhorn, e.rhydon],
			wave: [
				e.rhydon,
				null, null, null,
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, 
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				null, null, null, null, null, null, null, null, null,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.rhydon, 
				null, null, null, null, null, null, null, null, null,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				null, null, null, null, null, null, null, null, null,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
			] 
		},
		74: { 
			preview: [e.butterfree, e.venomoth, e.victreebel, e.golem, e.rhydon],
			wave: [
				e.rhydon,
				e.golem, e.golem, e.golem, e.golem, e.golem, 

				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,

				e.golem, e.golem, e.golem, e.golem, e.golem,
				
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.rhydon,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,

				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,

				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
			] 
		},
		75: { 
			preview: [e.weepinbell, e.venomoth, e.victreebel, e.slugma, e.golem],
			wave: [
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,

				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
			] 
		},
		76: { 
			preview: [e.slugma, e.rhyhorn, e.magcargo],
			wave: [
				e.slugma, e.magcargo, e.slugma,
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn,  
				null, null, null, null, null, null, null, null, null,
				e.magcargo, e.slugma, e.magcargo, 
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, 
				null, null, null, null, null, null, null, null, null,
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn,
			] 
		},
		77: { 
			preview: [e.weepinbell, e.butterfree, e.victreebel, e.golem, e.magcargo],
			wave: [
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.golem, e.golem, e.golem, e.golem, e.golem, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.golem, e.golem, e.golem, e.golem, e.golem,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
			] 
		},
		78: { 
			preview: [e.slugma, e.magcargo],
			wave: [
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
			] 
		},
		79: { 
			preview: [e.slugma, e.rhyhorn, e.rhydon, e.magcargo],
			wave: [
				e.magcargo,
				e.rhydon, e.rhydon, e.rhydon,
				e.magcargo,
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, 
				e.magcargo,
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.magcargo,
				e.rhydon, e.rhydon, e.rhydon,
			] 
		},
		80: { 
			preview: [e.tropius, e.kecleon],
			wave: [
				e.tropius,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,	
				e.tropius,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,			
			] 
		},
		81: { 
			preview: [e.weepinbell, e.victreebel, e.tropius],
			wave: [
				e.tropius, e.tropius,

				e.weepinbell, e.weepinbell, e.weepinbell, 

				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
			] 
		},
		82: { 
			preview: [e.graveler, e.victreebel, e.golem, e.magcargo, e.tropius],
			wave: [
				e.magcargo,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.magcargo,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler, e.graveler,
				e.tropius, e.tropius,

				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.tropius, e.tropius,
			] 
		},
		83: { 
			preview: [e.probopass, e.golem, e.rhyhorn, e.rhydon, e.magcargo],
			wave: [
				e.rhydon, e.rhydon, 
				e.magcargo, e.magcargo,
				null, null, null, null, null, 
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, 
				null, null, null, null, null, 
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn,
				e.magcargo, e.magcargo,
				null, null, null, null, null, null, null, null, null,
				e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, e.probopass, e.probopass,
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn,
				e.magcargo,
				null, null, null, null, null, 
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
			] 
		},
		84: { 
			preview: [e.butterfree, e.tropius],
			wave: [
				e.tropius, e.tropius,
				e.butterfree, e.butterfree, e.butterfree, 
				e.tropius, e.tropius,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.tropius, e.tropius,
				e.butterfree, e.butterfree, e.butterfree, 
				e.tropius, e.tropius,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.tropius, e.tropius,
			] 
		},
		85: { 
			preview: [e.golem, e.rhyhorn, e.rhydon],
			wave: [
				e.rhydon, e.rhydon, e.rhydon,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.rhydon, e.rhydon, e.rhydon,
			] 
		},
		86: { 
			preview: [e.graveler, e.golem, e.delibird],
			wave: [
				e.graveler, e.golem, e.graveler, e.golem, e.graveler, e.golem, e.graveler, e.golem, e.graveler, e.golem, e.graveler, e.golem,
				e.graveler, e.golem, e.graveler, e.golem, e.graveler, e.golem, e.graveler, e.golem, e.graveler, e.golem, e.graveler, e.golem,
				e.graveler, e.golem, e.graveler, e.golem, e.graveler, e.golem, e.graveler, e.golem, e.graveler, e.golem, e.graveler, e.golem,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				e.delibird,
			] 
		},
		87: { 
			preview: [e.slugma, e.golem, e.rhyhorn],
			wave: [
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, 
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, 
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, 
			] 
		},
		88: { 
			preview: [e.rhyhorn, e.rhydon],
			wave: [
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon,
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn,
				null, null, null, null, null, null, null, null, null, null,
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon,
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn,
			] 
		},
		89: { 
			preview: [e.slugma, e.golem, e.rhyhorn, e.rhydon, e.magcargo],
			wave: [
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.rhydon, e.rhydon,		
				e.magcargo, e.magcargo,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn,
				null, null, null, null,
				e.rhydon, e.rhydon,		
			] 
		},
		90: { 
			preview: [e.rhydon, e.magcargo, e.tropius, e.porygon],
			wave: [
				e.rhydon, e.rhydon, e.rhydon,
				e.magcargo, e.magcargo, e.magcargo,
				e.tropius, e.tropius, e.tropius,
				e.porygon,
				null, null, null, null, null, null, null, null, null,
				e.porygon
			] 
		},
		91: { 
			preview: [e.golem, e.rhyhorn, e.rhydon, e.delibird],
			wave: [
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, 
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, 
				null, null, null,
				e.delibird,
				null, null, null, 
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, 
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird, 
				null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				e.delibird, 
				null, null, null, null, null, null, null, null, null,
				e.delibird,
			] 
		},
		92: { 
			preview: [e.slugma, e.rhydon, e.magcargo, e.tropius],
			wave: [
				e.magcargo, e.magcargo, e.magcargo,
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, 
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,

				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, 
				e.magcargo, e.magcargo, e.magcargo,
				null, null, null, null, null, null, null, null, null,
				e.tropius, e.tropius,
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon,
				null, null, null, null, null, null, null,
				e.tropius, e.tropius,
				null, null, null, null, null, null, null, 
				e.tropius, e.tropius,
			] 
		},
		93: { 
			preview: [e.victreebel, e.tropius, e.kecleon],
			wave: [
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.tropius, e.tropius,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
				e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.tropius, e.tropius,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.tropius, e.tropius, e.tropius, e.tropius,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.tropius, e.tropius,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.tropius, e.tropius,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.tropius, e.tropius, e.tropius, e.tropius,
			] 
		},
		94: { 
			preview: [e.victreebel, e.golem, e.magcargo, e.tropius, e.porygon],
			wave: [
				e.magcargo,
				e.golem, e.porygon, e.porygon, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				null, null, null, null, 
				e.tropius, e.tropius,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.porygon, e.porygon, e.golem, e.golem, e.golem,
				e.magcargo,
				null, null, null, null, 
				e.golem, e.golem, e.golem, e.magcargo, e.magcargo, e.magcargo, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.golem, e.golem,
				e.golem, e.golem, e.golem, e.porygon, e.porygon, e.porygon, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.golem, e.golem,
				e.tropius, e.tropius,
				null, null, null, null, null, null, null, null, null,
				e.victreebel, e.victreebel, e.porygon, e.porygon, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.porygon, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.porygon, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.tropius, e.tropius,
			] 
		},
		95: { 
			preview: [e.golem, e.rhydon, e.magcargo, e.porygon],
			wave: [
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, 
				e.porygon, e.porygon, e.porygon,

				e.rhydon, e.rhydon, e.golem, e.golem, e.golem, 
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				null, null, null, null, null, null, null, null, null, null,
				e.porygon, e.porygon,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.rhydon, e.rhydon, e.golem, e.golem,
				null, null, null, null, null, null, null, null,
				e.porygon, e.porygon, 
				e.golem, e.golem, e.golem, e.golem, e.golem, e.rhydon, e.rhydon, 
				e.porygon, e.porygon, 
				null, null, null, null, null, null, null, null,
				e.porygon, e.porygon, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.porygon, e.porygon, e.porygon,
			] 
		},
		96: { 
			preview: [e.rhydon, e.magcargo, e.tropius, e.porygon],
			wave: [
				e.magcargo, e.magcargo,
				null, null, null, null,
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, 
				e.porygon, e.porygon, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, 
				e.tropius, e.tropius,
				null, null, null, null,
				e.porygon, e.porygon, 
				null, null, null, null,

				e.tropius, e.tropius,
				null, null, null, null,
				e.porygon, e.porygon,
			] 
		},
		97: { 
			preview: [e.victreebel, e.golem, e.rhyhorn, e.magcargo, e.rhydon],
			wave: [
				e.rhydon, e.rhydon,
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, 
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn,

				null, null, null, null, null, null, null, null,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,

				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,

				e.rhydon, 
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, 
				e.rhydon,  
				null, null, null, null, null, null, null, null,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, 

				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,

				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
			] 
		},
		98: { 
			preview: [e.golem, e.rhyhorn, e.magcargo, e.rhydon],
			wave: [
				e.rhyhorn, e.rhyhorn, e.rhyhorn,

				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				
				null, null, null, null, null, null, null, null,

				e.golem, e.golem, e.golem, e.golem, e.rhyhorn, e.rhyhorn, e.rhyhorn,
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,

				e.rhyhorn, e.rhyhorn, e.rhyhorn, 
				e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.rhyhorn, e.rhyhorn, e.rhyhorn, 

				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,

				e.rhydon, 
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, 
				e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, e.rhyhorn, 
				e.rhydon, 
			] 
		},
		99: { 
			preview: [e.rhydon, e.tropius, e.delibird],
			wave: [
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, 
				e.delibird, 
				e.tropius, e.tropius, e.tropius, 
				e.delibird,
				null, null, null, null, null, null, null, null,
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, 
				null, 
				e.tropius, e.tropius, e.tropius, 
				null, null, null, null,
				e.delibird,
				null, null, null, null,
				e.delibird, e.delibird, e.delibird,
			] 
		},
		100: { 
			preview: [e.zapdos], 
			wave: [
				e.zapdos
			] 
		},
	},
	2: {
		1: {
			preview: [e.larvitar],
			wave: [
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, 
				null, null, 
				e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				null, null, 
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, 
			],
		},
		2: {
			preview: [e.larvitar],
			wave: [
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
			],
		},
		3: {
			preview: [e.larvitar, e.golbat, e.venomoth],
			wave: [
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				
			],
		},
		4: {
			preview: [e.golbat, e.slugma],
			wave: [
				e.slugma, e.slugma, e.slugma, e.slugma,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
			],
		},
		5: {
			preview: [e.larvitar, e.golbat, e.slugma, e.dodrio],
			wave: [
				e.slugma, e.slugma, e.slugma, e.slugma,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
			],
		},
		6: {
			preview: [e.larvitar, e.golbat, e.chansey, e.kecleon],
			wave: [
				e.chansey, e.chansey,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, 
				e.chansey, e.chansey,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.chansey, e.chansey,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, 
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, 
				e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, 
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, 
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
			],
		},
		7: {
			preview: [e.slugma, e.golbat],
			wave: [
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
			],
		},
		8: {
			preview: [e.slugma, e.venomoth, e.dodrio],
			wave: [
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.dodrio, e.dodrio, e.dodrio, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		9: {
			preview: [e.larvitar, e.golbat, e.slugma, e.dodrio, e.chansey],
			wave: [
				e.chansey, e.chansey,
				e.slugma, e.slugma, e.slugma, e.slugma,
				e.chansey, e.chansey,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		10: {
			preview: [e.chansey, e.dodrio, e.kecleon],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio
			],
		},
		11: {
			preview: [e.chansey, e.larvitar, e.pupitar],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				
			],
		},
		12: {
			preview: [e.slugma, e.dodrio, e.scraggy],
			wave: [
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,  
			],
		},
		13: {
			preview: [e.pupitar, e.scraggy],
			wave: [
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, 
				null, null, null, 
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, 
				null, null, null, 
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
			],
		},
		14: {
			preview: [e.golbat, e.venomoth, e.kecleon],
			wave: [
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
			],
		},

		15: {
			preview: [e.dodrio, e.larvitar, e.pupitar, e.scraggy],
			wave: [
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
			],
		},
		16: {
			preview: [e.chansey, e.scraggy, e.delibird],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, 
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.delibird, e.delibird, e.delibird,
			],
		},
		17: {
			preview: [e.slugma, e.venomoth, e.larvitar, e.pupitar, e.scraggy],
			wave: [
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,

				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				null, null, null, null, null, null, null, null, null, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,

				null, null, null, null, null, null, null, null, null, 
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,			
			],
		},
		18: {
			preview: [e.slugma, e.larvitar, e.pupitar, e.scraggy],
			wave: [
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				null, null, null, null, null,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,	
				null, null, null, null, null,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,	
				null, null, null, null, null,  
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,	
				null, null, null, null, null, 
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,	
			],
		},
		19: {
			preview: [e.dodrio, e.chansey, e.golem],
			wave: [	
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		20: {
			preview: [e.golbat, e.golem, e.pupitar, e.delibird],
			wave: [
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				null, null, null, null, null,

				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.delibird,
				null, null, null, null, null,

				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.delibird
			],
		},
		21: {
			preview: [e.slugma, e.pupitar, e.golem, e.scraggy],
			wave: [
				e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.slugma, e.slugma, e.slugma, e.slugma, 
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, 
				e.golem, e.golem, e.golem, e.golem, e.golem, 
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, 
				e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.slugma, e.slugma, e.slugma, e.slugma, 
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, 
				e.golem, e.golem, e.golem, e.golem, e.golem, 
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, 
			],
		},
		22: {
			preview: [e.victreebel, e.scraggy],
			wave: [
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				null, null, null, null, null, null, null, null, null, null,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, 
				null, null,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				null, null, null, null, null, null,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, 
				null, null,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				null, null, null, null, null, null,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, 
				null, null,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				null, null, null, null, null, null,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, 
				null, null,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
			],
		},
		23: {
			preview: [e.dodrio, e.golem, e.rhydon, e.pupitar],
			wave: [
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, 
				e.rhydon, e.rhydon, e.rhydon,  
				e.golem, e.golem, e.golem, e.golem, e.golem,
				e.rhydon, e.rhydon, e.rhydon, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
			],
		},
		24: {
			preview: [e.golbat, e.dodrio, e.rhydon],
			wave: [
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon,

				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		25: {
			preview: [e.chansey, e.golem, e.scraggy],
			wave: [
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				null, null, null, null, null,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,	
			],
		},
		26: {
			preview: [e.golem, e.victreebel, e.rhydon, e.pupitar],
			wave: [
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.rhydon, e.rhydon, e.rhydon, 
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.rhydon, e.rhydon, e.rhydon, 
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,		
			],
		},
		27: {
			preview: [e.slugma, e.venomoth, e.victreebel, e.rhydon],
			wave: [
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, 
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
			],
		},
		28: {
			preview: [e.dodrio, e.golem, e.kecleon],
			wave: [
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, 
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, 
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, 
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		29: {
			preview: [e.golem, e.rhydon, e.pupitar],
			wave: [
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, 

				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,

				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,

				e.rhydon, e.rhydon, e.rhydon, e.rhydon,

				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, 

				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
			],
		},
		30: {
			preview: [e.golbat, e.venomoth, e.dodrio, e.rhydon, e.furfrou],
			wave: [
				e.furfrou, e.furfrou, 
				null, null, 
				e.rhydon, e.rhydon, e.rhydon, 
				null, null, null, null, null, null, null, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.furfrou, e.furfrou,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		31: {
			preview: [e.slugma, e.venomoth, e.dodrio, e.chansey],
			wave: [
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,
				null, null, null, 
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				null, null, null, null, null, null, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				null, null, null, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, 
				e.dodrio, e.dodrio, e.dodrio,  
				null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, 	
			],
		},
		32: {
			preview: [e.golem, e.scraggy, e.furfrou],
			wave: [
				e.furfrou,
				null, null, null, 
				e.furfrou,
				null, null, null, 
				e.furfrou,

				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
	
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				null, null, null, null, null, 
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				null, null, null, 
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				null, null, null, null, null, 
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,	
			],
		},
		33: {
			preview: [e.victreebel, e.rhydon, e.scraggy],
			wave: [
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon,

				null, null, null, null, null, null,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				null, null, null, null, null, null,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
			],
		},
		34: {
			preview: [e.golem, e.victreebel, e.rhydon],
			wave: [
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				null, null, null, null, 
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,

				null, null, null, null, 
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				null, null, null, null, null, null, null, null, 
				e.rhydon, e.rhydon, e.rhydon, 
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
			],
		},
		35: {
			preview: [e.furfrou],
			wave: [
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
				null, null, null, null, null, null, null, null, null, null, null,  null, null, 
				e.furfrou, e.furfrou, e.furfrou, 
				
			],
		},
		36: {
			preview: [e.golbat, e.slugma, e.dodrio, e.kecleon],
			wave: [
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,

				null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				

				e.slugma, e.slugma, e.slugma,

				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		37: {
			preview: [e.scraggy],
			wave: [
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
			],
		},
		38: {
			preview: [e.scraggy, e.victreebel, e.rhydon, e.furfrou],
			wave: [
				e.rhydon, e.rhydon, 
				null, null, null, null,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.rhydon, e.rhydon,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,

				e.furfrou, e.furfrou, e.furfrou,
			],
		},
		39: {
			preview: [e.golem, e.victreebel, e.rhydon, e.furfrou],
			wave: [
				e.golem, e.golem, e.golem, e.rhydon, e.rhydon, e.rhydon,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.rhydon, e.rhydon, e.rhydon, e.golem, e.golem, e.golem,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.furfrou, e.furfrou, 
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.furfrou, e.furfrou, e.furfrou, 
			],
		},	
		40: {
			preview: [e.scraggy, e.scrafty],
			wave: [
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scrafty,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scrafty,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scrafty,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scrafty,

				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scrafty,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scrafty,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scrafty,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scrafty,
			],
		},
		41: {
			preview: [e.chansey, e.rhydon, e.furfrou, e.scrafty],
			wave: [
				e.furfrou,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, 
				e.rhydon, e.rhydon,
				e.scrafty, e.scrafty,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.rhydon, e.rhydon,
				e.scrafty,
				e.furfrou,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, 
				e.scrafty, e.scrafty,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.rhydon, e.rhydon,
				e.scrafty,
				e.rhydon, e.rhydon,
				null, null,  
				e.scrafty, e.scrafty,
			],
		},
		42: {
			preview: [e.slugma, e.scraggy, e.scrafty, e.magcargo],
			wave: [
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, 
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,

				e.scrafty, e.scrafty, e.scrafty,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scrafty, e.scrafty, e.scrafty,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scrafty, e.scrafty, e.scrafty,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scrafty, e.scrafty, e.scrafty, 
				e.scrafty, e.scrafty, e.scrafty, 

			],
		},
		43: {
			preview: [e.golbat, e.venomoth, e.furfrou, e.scrafty, e.magcargo],
			wave: [
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, 
				null, null, null, null, null, null, null, null,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou,
				null, null, null, null, null, null, null, null,

				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,

				e.scrafty, e.scrafty, e.scrafty, 

				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,

				e.scrafty, e.scrafty, e.scrafty,

				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,

				e.scrafty, e.scrafty, e.scrafty,

				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,

				e.scrafty, e.scrafty, e.scrafty, 		
			],
		},
		44: {
			preview: [e.slugma, e.magcargo],
			wave: [
				e.slugma, e.slugma, e.magcargo, e.magcargo, e.slugma, e.slugma, e.slugma, e.slugma, e.magcargo, e.magcargo, e.slugma, e.slugma, e.slugma, e.slugma,
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.slugma, e.slugma, e.magcargo, e.magcargo, e.slugma, e.slugma, e.slugma, e.slugma, e.magcargo, e.magcargo, e.slugma, e.slugma, e.slugma, e.slugma,
			],
		},
		45: {
			preview: [e.golem, e.scraggy, e.scrafty, e.delibird],
			wave: [
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,

				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, 
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, 
				null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird,
			],
		},
		46: {
			preview: [e.slugma, e.scraggy, e.scrafty, e.magcargo],
			wave: [
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma, e.slugma,

				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,

				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, 
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
			],
		},
		47: {
			preview: [e.venomoth, e.dodrio, e.chansey, e.pupitar],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,

				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				null, null, null, null, null, null, null, null, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,

				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				null, null, null, null, null, null, null, null,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		48: {
			preview: [e.golbat, e.dodrio, e.victreebel, e.rhydon, e.scrafty],
			wave: [
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,
				e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat, e.golbat,

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, 

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 

				e.scrafty, e.scrafty, e.scrafty, e.scrafty,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 

				e.scrafty, e.scrafty, e.scrafty, e.scrafty,

			],
		},
		49: {
			preview: [e.pupitar, e.scraggy, e.golem, e.scrafty, e.magcargo],
			wave: [
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,

				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,

				e.scrafty, e.scrafty, e.scrafty, e.scrafty, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, 

			],
		},
		50: {
			preview: [e.dodrio, e.golem, e.furfrou, e.porygon],
			wave: [
				e.furfrou, e.furfrou, e.furfrou, 
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 	
			],
		},
		51: { 
			preview: [e.magcargo, e.porygon, e.kecleon],
			wave: [
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				null, null, null, null, null, null,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
			] 
		},
		52: { 
			preview: [e.dodrio, e.porygon, e.scrafty],
			wave: [
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 

				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 

				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 

				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 

				null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			] 
		},
		53: { 
			preview: [e.scraggy, e.golem, e.rhydon, e.furfrou, e.scrafty],
			wave: [
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,

				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, 
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				null, null, null, null, null, null,
				e.furfrou, e.furfrou, e.furfrou, 
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, 

				e.furfrou, e.furfrou, e.furfrou, 

				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,

				null, null, null,

				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, 
			] 
		},
		54: { 
			preview: [e.furfrou, e.scrafty, e.magcargo, e.porygon],
			wave: [
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,

				e.furfrou, e.furfrou, e.furfrou, e.furfrou,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.porygon, e.porygon, e.porygon, e.porygon, 

				null, null, null, null, null, null, 
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, 

				e.porygon, e.porygon, e.porygon, e.porygon,  
			] 
		},
		55: { 
			preview: [e.rhydon, e.furfrou, e.magcargo, e.porygon, e.delibird],
			wave: [
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.delibird, 
				e.rhydon, e.rhydon, e.rhydon,  
				e.furfrou, e.furfrou, e.furfrou, 
				null, null, null, null,
				e.rhydon, e.rhydon, e.rhydon, 
				e.delibird, 
				null, null, null, null, null, null, null, null,
				e.furfrou, e.furfrou, e.furfrou, 
				null, null, null, null,
				e.delibird,
				null, null, null, null,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, 
				e.delibird,
				null, null, null, null,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				e.delibird,  
			] 
		},
		56: { 
			preview: [e.rhydon, e.furfrou, e.scrafty, e.porygon],
			wave: [
				e.furfrou, e.furfrou, e.furfrou,
				null, null, null, null, null, null, null, null,
				e.furfrou, e.furfrou, 
				e.rhydon, e.rhydon, e.rhydon, 
				e.furfrou, e.furfrou,  
				e.rhydon, e.rhydon, e.rhydon, 

				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, 

				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, 	
			] 
		},
		57: { 
			preview: [e.golem, e.victreebel, e.rhydon, e.furfrou, e.scrafty],
			wave: [
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, 
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, 
				null, null, null, null, null, null, null, null,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
			
			] 
		},
		58: { 
			preview: [e.victreebel, e.rhydon, e.furfrou, e.scrafty, e.porygon],
			wave: [
				e.porygon, e.porygon, e.porygon, e.porygon, 
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, 
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, 
				e.furfrou, e.furfrou, 
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.rhydon, e.rhydon, 
				e.furfrou, e.furfrou, e.furfrou,
				e.rhydon, e.rhydon,  
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, 
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				null, null, null, null, null, null, null, null, 
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, 
			] 
		},
		59: { 
			preview: [e.rhydon,  e.scrafty, e.magcargo],
			wave: [
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, 
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, 
				null, null, null, null, null, null, null, null, 
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon,
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				null, null, null, null, null, null, null, null, 
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, 
			] 
		},
		60: { 
			preview: [e.rhydon, e.kangaskhan],
			wave: [
				e.kangaskhan, 
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon,
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, 
			] 
		},
		61: { 
			preview: [e.golem, e.rhydon, e.kangaskhan],
			wave: [
				e.kangaskhan,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, 
				e.rhydon, e.rhydon, e.rhydon, 
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, 
				e.rhydon, e.rhydon, e.rhydon,
				e.kangaskhan, 
			]
		},
		62: { 
			preview: [e.porygon, e.kangaskhan],
			wave: [
				e.kangaskhan,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				e.kangaskhan,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, 
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
			] 
		},
		63: { 
			preview: [e.dodrio, e.rhydon, e.scraggy, e.scrafty, e.kangaskhan],
			wave: [
				e.kangaskhan, e.kangaskhan, 
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				e.rhydon, e.rhydon, 
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.kangaskhan, e.kangaskhan, 
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.rhydon, e.rhydon, 
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,

				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null,

				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			] 
		},
		64: { 
			preview: [e.dodrio, e.rhydon, e.scrafty,  e.kangaskhan],
			wave: [
				e.kangaskhan, e.kangaskhan, 
				e.rhydon, e.rhydon,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				e.rhydon, e.rhydon, e.rhydon, e.rhydon,
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				e.rhydon, e.rhydon, e.rhydon, e.rhydon,
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, 

				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null,

				e.scrafty, e.scrafty, e.scrafty, e.scrafty, 

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			] 
		},
		65: { 
			preview: [e.chansey, e.golem, e.rhydon, e.furfrou, e.kangaskhan],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				
				e.kangaskhan, 
				e.furfrou, e.furfrou, e.furfrou,
				null, null, null, null, null, null, null, null, null, null,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,

				e.rhydon, e.rhydon, e.rhydon, e.rhydon, 

				e.furfrou, e.furfrou, e.furfrou,
				e.kangaskhan, 
			] 
		},
		66: { 
			preview: [e.chansey, e.furfrou],
			wave: [
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou,

				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
		
				null, null, null, null, null, null, null, null,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou,
				null, null, null, null, null, null, null, null,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
			] 
		},
		67: { 
			preview: [e.scraggy, e.scrafty],
			wave: [
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, 
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy, e.scraggy,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
			] 
		},
		68: { 
			preview: [e.chansey, e.kangaskhan, e.delibird],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.chansey, e.chansey, e.chansey, e.chansey, 
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
			] 
		},
		69: { 
			preview: [e.kangaskhan],
			wave: [
				e.kangaskhan, e.kangaskhan, e.kangaskhan,
				null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, 
			] 
		},
		70: { 
			preview: [e.golem, e.kangaskhan, e.kecleon],
			wave: [
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,

				e.kangaskhan, e.kangaskhan, 
				null, null, null,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan,
			] 
		},
		71: { 
			preview: [e.superCaterpie],
			wave: [
				e.superCaterpie
			] 
		},
		72: { 
			preview: [e.rhydon, e.scrafty, e.porygon, e.kangaskhan],
			wave: [
				e.kangaskhan, e.kangaskhan, e.rhydon, e.rhydon, e.kangaskhan, e.kangaskhan,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				e.rhydon, e.rhydon, e.rhydon, e.rhydon,
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.porygon, e.porygon, e.porygon, e.porygon,
				e.kangaskhan, e.kangaskhan,
				e.porygon, e.porygon, e.porygon, e.porygon,
				e.kangaskhan, e.kangaskhan, 
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, 
				e.rhydon, e.rhydon, 
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, 
				null, null, null, null, null, null, null, null, null, null,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, 
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, 
				null, null, null, null, null, null, null, null, null, null,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, 
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				null, null, null, null, null, null, null, null, null, null,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, 
			] 
		},
		73: { 
			preview: [e.porygon],
			wave: [
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
			] 
		},
		74: { 
			preview: [e.golem, e.rhydon, e.furfrou, e.kangaskhan],
			wave: [
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.kangaskhan, e.kangaskhan, 
				null, null, null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, 
				null, null, null, null, null, null, null, null, null, null,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
				null, null, null, null, null, null, null, null, null, null,
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan,
				null, null, null, null, null, null, null, null, null, null,
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, 
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
			] 
		},
		75: { 
			preview: [e.rhydon, e.magcargo, e.porygon, e.kangaskhan],
			wave: [
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, 
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon,
				e.porygon, e.porygon, e.porygon, e.porygon,
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.porygon, e.porygon, e.porygon, e.porygon,
				e.porygon, e.porygon, e.porygon, e.porygon,
			] 
		},
		76: { 
			preview: [e.rhydon, e.scrafty, e.magcargo, e.porygon, e.kangaskhan],
			wave: [
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, 
				e.kangaskhan, e.kangaskhan, 
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, 
				e.porygon, e.porygon, e.porygon, e.porygon,
				e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.rhydon, e.rhydon, e.rhydon,
				e.kangaskhan, e.kangaskhan,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygon, e.porygon, e.porygon, e.porygon,
				e.porygon, e.porygon, e.porygon, e.porygon,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, 
				null, null, null, null, null,
				e.porygon, e.porygon, e.porygon, e.porygon,

			] 
		},
		77: { 
			preview: [e.golem, e.rhydon, e.magcargo, e.porygon, e.kangaskhan],
			wave: [
				e.golem, e.golem, e.golem, e.golem, 
				e.kangaskhan, e.kangaskhan, 
				e.porygon, e.porygon, 
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.rhydon, e.rhydon, e.rhydon, 
				e.golem, e.golem, e.golem, e.golem,
				e.porygon, e.porygon, e.porygon, e.porygon,
				e.kangaskhan, e.kangaskhan,
				e.rhydon, e.rhydon, e.rhydon, 
				null, null, null, null, null,
				e.porygon, e.porygon, e.porygon, e.porygon,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygon, e.porygon, e.porygon, e.porygon,
				null, null, null, null, null,
				e.porygon, e.porygon, e.porygon, e.porygon,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygon, e.porygon, e.porygon, e.porygon,
				null, null, null, null, null,
				e.porygon, e.porygon, e.porygon, e.porygon,
			] 
		},
		78: { 
			preview: [e.magcargo, e.porygon, e.kangaskhan],
			wave: [
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo,
				e.kangaskhan, e.kangaskhan, e.kangaskhan,  
				null, null, null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygon, e.porygon, e.porygon, e.porygon,
				e.porygon, e.porygon, e.porygon, e.porygon,
			] 
		},
		79: { 
			preview: [e.larvitar],
			wave: [
				e.larvitar, 
			] 
		},
		80: { 
			preview: [e.larvitar, e.pupitar, e.rhydon, e.scrafty, e.tyranitar],
			wave: [
				e.tyranitar,

				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,

				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon,  
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,

				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,

			] 
		},
		81: { 
			preview: [e.larvitar, e.tyranitar],
			wave: [
				e.tyranitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.tyranitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.tyranitar
			] 
		},
		82: { 
			preview: [e.porygon, e.kangaskhan, e.tyranitar],
			wave: [
				e.tyranitar, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygon, e.porygon, e.porygon, e.porygon, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.tyranitar,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygon, e.porygon, e.porygon, e.porygon, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygon, e.porygon, e.porygon, e.porygon, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
			] 
		},
		83: { 
			preview: [e.golem, e.rhydon, e.magcargo, e.kangaskhan, e.tyranitar],
			wave: [
				e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem, e.golem,
				e.tyranitar, e.tyranitar,  
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, 
				e.kangaskhan,
				e.golem, e.golem, e.golem, e.golem, e.golem,
				e.rhydon, e.rhydon, e.rhydon, e.rhydon,
				e.golem, e.golem, e.golem, e.golem, e.golem,
				e.rhydon, e.rhydon, e.rhydon, e.rhydon,	
				e.kangaskhan,  e.kangaskhan,
			] 
		},
		84: { 
			preview: [e.rhydon, e.kangaskhan, e.tyranitar],
			wave: [
				e.tyranitar, e.tyranitar,
				e.kangaskhan, e.kangaskhan,  
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, 
				null, null, null, null, null, null, null, null,
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, e.rhydon, 
				e.kangaskhan, e.kangaskhan, 
				e.tyranitar, e.tyranitar,
			] 
		},
		85: { 
			preview: [e.delibird],
			wave: [
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
			] 
		},
		86: { 
			preview: [e.porygon, e.kangaskhan, e.tyranitar],
			wave: [
				e.tyranitar,
				e.kangaskhan, e.kangaskhan, e.kangaskhan,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				e.tyranitar,
				e.kangaskhan, e.kangaskhan, e.kangaskhan,
			] 
		},
		87: { 
			preview: [e.larvitar, e.pupitar, e.tyranitar],
			wave: [
				e.tyranitar, e.tyranitar, 

				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,

				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.tyranitar, e.tyranitar, 
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
			] 
		},
		88: { 
			preview: [e.scrafty, e.magcargo, e.porygon, e.kangaskhan],
			wave: [
				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, 

				e.kangaskhan, e.kangaskhan, 

				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, 

				e.magcargo, e.magcargo, e.magcargo, e.magcargo, e.magcargo, 

				e.kangaskhan, e.kangaskhan,

				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, 

				e.porygon, e.porygon, e.porygon, e.porygon, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
			] 
		},
		89: { 
			preview: [e.scrafty, e.magcargo, e.kangaskhan, e.tyranitar],
			wave: [
				e.magcargo, e.magcargo, e.magcargo, 
				e.tyranitar, 
				e.kangaskhan,
				e.tyranitar, 
				e.kangaskhan, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, 
			] 
		},
		90: { 
			preview: [e.rhydon, e.tyranitar],
			wave: [
				e.tyranitar, e.tyranitar, 
				null, null, null, null, null, null, 
				e.tyranitar, e.tyranitar,
				null, null, null, null, null, null, null, null, null, 
				e.rhydon, e.rhydon, e.rhydon, e.rhydon, 
				null, null, null, null, null, null, null, null, null, 
				e.tyranitar, e.tyranitar, 
				e.rhydon, e.rhydon, e.rhydon, e.rhydon,
			] 
		},
		91: { 
			preview: [e.magcargo, e.golem, e.rhydon, e.kangaskhan, e.kecleon],
			wave: [
				e.rhydon, e.golem, e.kangaskhan, e.kecleon, e.magcargo, e.kecleon,
				e.rhydon, e.golem, e.kangaskhan, e.kecleon, e.magcargo, e.kecleon,
				e.rhydon, e.golem, e.kangaskhan, e.kecleon, e.magcargo, e.kecleon,
				e.rhydon, e.golem, e.kangaskhan, e.kecleon, e.magcargo, e.kecleon,
				e.rhydon, e.golem, e.kangaskhan, e.kecleon, e.magcargo, e.kecleon,
				e.rhydon, e.kecleon, e.kangaskhan, e.kecleon, e.rhydon, e.kecleon,
				e.rhydon, e.kecleon, e.kangaskhan, e.kecleon, e.rhydon, e.kecleon,
				e.rhydon, e.kecleon, e.kangaskhan, e.kecleon, e.rhydon, e.kecleon,
				e.rhydon, e.kecleon, e.kangaskhan, e.kecleon, e.rhydon, e.kecleon,
				e.rhydon, e.kecleon, e.kangaskhan, e.kecleon, e.rhydon, e.kecleon,
			] 
		},
		92: { 
			preview: [e.larvitar, e.pupitar, e.tyranitar, e.kecleon],
			wave: [
				e.tyranitar, e.larvitar, e.tyranitar, e.pupitar, e.kecleon, e.kecleon,
				null, null, null, null, null, null, null, null, null, 
				e.tyranitar, e.larvitar, e.tyranitar, e.pupitar, e.kecleon, e.kecleon,
				null, null, null, null, null, null, null, null, null, 
				e.tyranitar, e.larvitar, e.tyranitar, e.pupitar, e.kecleon, e.kecleon,
				null, null, null, null, null, null, null, null, null, 
				e.tyranitar, e.larvitar, e.tyranitar, e.pupitar, e.kecleon, e.kecleon,
				null, null, null, null, null, null, null, null, null, 
				e.tyranitar, e.larvitar, e.pupitar, e.kecleon, e.kecleon,
			] 
		},
		93: { 
			preview: [e.delibird],
			wave: [
				e.delibird, e.delibird,
				null, null, null, null, 
				e.delibird, e.delibird, e.delibird,
				null, null, null, null,
				e.delibird, e.delibird,
				null, null, null, null, 
				e.delibird, e.delibird, e.delibird,
				null, null, null, null, 
				e.delibird, e.delibird, e.delibird,
			]
		},
		94: { 
			preview: [e.scrafty, e.porygon, e.tyranitar],
			wave: [
				e.tyranitar, 
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				e.tyranitar, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
			] 
		},
		95: { 
			preview: [e.porygon],
			wave: [
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
			] 
		},
		96: { 
			preview: [e.scrafty, e.tyranitar, e.kecleon],
			wave: [
				e.tyranitar, e.tyranitar, 
				e.scrafty, e.scrafty,
			  	e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
			  	e.scrafty, e.scrafty,
			  	null, null, null, null, null, null, null, null,
			  	e.tyranitar, e.tyranitar, 
			  	e.scrafty, e.scrafty,
			  	e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
			  	e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, 
			  	null, null, null, null,
			  	e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, 
			  	null, null, null, null,
			  	e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty, e.scrafty,
			]  
		},
		97: { 
			preview: [e.kangaskhan, e.tyranitar],
			wave: [
				e.tyranitar, e.tyranitar, e.tyranitar,
				null, null, null,
				e.kangaskhan, e.kangaskhan,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.tyranitar, e.tyranitar, e.tyranitar, 
				null, null, null,
				e.kangaskhan, e.kangaskhan, 
			] 
		},
		98: { 
			preview: [e.porygon, e.kangaskhan, e.tyranitar],
			wave: [
				e.tyranitar, e.tyranitar, 
				e.kangaskhan, e.kangaskhan,
				e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon, e.porygon,
			] 
		},
		99: { 
			preview: [e.larvitar, e.tyranitar],
			wave: [
				e.tyranitar, e.tyranitar, e.tyranitar, 
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.tyranitar, e.tyranitar, e.tyranitar, 
			]
		},
		100: { 
			preview: [e.moltres], 
			wave: [
				e.moltres
			] 
		},
	},
	3: {
		1: {
			preview: [e.zigzagoon],
			wave: [
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,
			],
		},
		2: {
			preview: [e.zigzagoon, e.poochyena],
			wave: [
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, 
			],
		},
		3: {
			preview: [e.zigzagoon, e.poochyena],
			wave: [
				e.zigzagoon, e.zigzagoon, e.zigzagoon,
				e.poochyena, e.poochyena, 
				null, null, null,
				e.zigzagoon, e.zigzagoon, e.zigzagoon, 
				e.poochyena, e.poochyena, 
				null, null, null,
				e.zigzagoon, e.zigzagoon, e.zigzagoon, 
				e.poochyena, e.poochyena, 
			]
		},
		4: {
			preview: [e.zigzagoon, e.poochyena],
			wave: [
				e.zigzagoon, e.zigzagoon, null, null, null,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon
			],
		},
		5: {
			preview: [e.zigzagoon, e.magnemite],
			wave: [
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, 
				e.magnemite, e.magnemite, e.magnemite,
			],
		},
		6: {
			preview: [e.poochyena, e.magnemite],
			wave: [
				e.magnemite, e.magnemite,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.magnemite, e.magnemite,
			],
		},
		7: {
			preview: [e.zigzagoon, e.poochyena, e.magnemite],
			wave: [
				e.magnemite, e.magnemite, 
				null, null, null, null, null, null, null, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, 
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, 
			],
		},
		8: {
			preview: [e.purrloin],
			wave: [
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin,
			],
		},
		9: {
			preview: [e.zigzagoon, e.magnemite],
			wave: [
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,	
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
			],
		},
		10: {
			preview: [e.zigzagoon, e.exeggcute],
			wave: [
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,
				null, null, null, 
				e.exeggcute
			],
		},
		11: {
			preview: [e.zigzagoon, e.poochyena, e.magnemite],
			wave: [
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
				null, null, null, null, null, null, null, null, null, null, 
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,
			],
		},
		12: {
			preview: [e.purrloin],
			wave: [
				 e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin,
			],
		},
		13: {
			preview: [e.zigzagoon, e.magnemite,],
			wave: [
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
				null, null, null, null, null, null, null, null, null, null, 
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, 
			],
		},
		14: {
			preview: [e.magnemite],
			wave: [
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
			],
		},
		15: {
			preview: [e.purrloin, e.exeggcute],
			wave: [
				e.exeggcute, e.exeggcute, e.exeggcute,
				null, null, null, null, null, null,  
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
			],	
		},
		16: {
			preview: [e.zigzagoon, e.linoone],
			wave: [
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, 
				null,
				e.linoone, e.linoone, 
				null,
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,
			],
		},
		17: {
			preview: [e.zigzagoon, e.poochyena, e.linoone],
			wave: [
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,
				e.linoone, e.linoone,
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
			],
		},
		18: {
			preview: [e.magnemite, e.whismur],
			wave: [
				e.whismur, e.whismur, e.whismur, e.whismur,
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
			],
		},
		19: {
			preview: [e.whismur, e.linoone],
			wave: [
				e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, 
				null, null, null,
				e.linoone, e.linoone, 
			],
		},
		20: {
			preview: [e.magnemite, e.bronzor],
			wave: [
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, 
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,
			],
		},
		21: {
			preview: [e.exeggcute, e.whismur, e.linoone],
			wave: [
				e.exeggcute, e.exeggcute, e.exeggcute,

				e.linoone, e.linoone, e.linoone, e.linoone,  
				e.whismur, e.whismur, e.whismur, e.whismur, 
				null, null,
				e.linoone, e.linoone, e.linoone, e.linoone, 
			],
		},
		22: {
			preview: [e.whismur, e.linoone],
			wave: [
				e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, 
				null, null, null, null,
				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone,
				null, null, 
				e.whismur, e.whismur, e.whismur, e.whismur, e.whismur,
			],
		},
		23: {
			preview: [e.zigzagoon, e.poochyena, e.magnemite],
			wave: [
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
				null, null, null, null, null, null, 
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,
				null, null, null, null, null, null, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
			],
		},
		24: {
			preview: [e.purrloin],
			wave: [
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin,
				null, null,
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin,
				null, null,
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin,
			],
		},
		25: {
			preview: [e.exeggcute, e.bronzor, e.whismur, e.linoone],
			wave: [
				e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, 
				e.bronzor, e.bronzor, 
				null, null, null, null, null, null, null, null, null,
				e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, 
				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone
			],
		},
		26: {
			preview: [e.magnemite, e.bronzor],
			wave: [
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, null, null,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, null, null,
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,

			],
		},
		27: {
			preview: [e.zigzagoon, e.poochyena, e.bronzor],
			wave: [
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,
				
			],
		},
		28: {
			preview: [e.exeggcute, e.bronzor, e.linoone],
			wave: [
				e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute,
				null,
				e.linoone, e.linoone, e.linoone,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone,
				e.linoone, e.linoone,
			],
		},
		29: {
			preview: [e.zigzagoon, e.linoone],
			wave: [
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,
				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, 
				null, null, null, null, null, 
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,
				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone,
			],
		},
		30: {
			preview: [e.poochyena, e.mightyena],
			wave: [
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, 
				
			],
		},
		31: {
			preview: [e.whismur, e.loudred, e.delibird],
			wave: [
				e.loudred, 
				e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur,
				e.loudred, 
				e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur,
				e.loudred, 
				e.delibird,
			],
		},
		32: {
			preview: [e.mightyena],
			wave: [
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			],
		},
		33: {
			preview: [e.bronzor, e.whismur, e.purrloin],
			wave: [
				e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,
				e.bronzor, e.bronzor, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,  
				e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur,	
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin,
			],
			
		},
		34: {
			preview: [e.zigzagoon, e.poochyena, e.magnemite, e.linoone, e.mightyena],
			wave: [
				e.mightyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
				null, null, null, null, null, null, null, null, null, null, 

				e.linoone, e.linoone,  null, 
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,
				null, null, null, 
				e.linoone, e.linoone,  null, 
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.mightyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,		
			],
		},
		35: {
			preview: [e.mightyena, e.loudred, e.ninjask],
			wave: [
				e.ninjask, e.ninjask, e.ninjask,
				null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena,
				
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, 
			],
		},
		36: {
			preview: [e.purrloin],
			wave: [
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
			],
		},
		37: {
			preview: [e.zigzagoon, e.poochyena, e.exeggcute, e.bronzor, e.whismur],
			wave: [
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,

				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,

				e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, 
				e.exeggcute, e.exeggcute,

				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, 
				null, 
				e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, 
				null, null, null, null,
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, 
				null, 
				e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, 
			],
		},
		38: {
			preview: [e.magnemite, e.bronzor, e.linoone],
			wave: [
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,
				null,
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
				null,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, 
				null,
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, 
				null,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,

				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, 
				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, 

				
			],
		},
		39: {
			preview: [e.poochyena, e.whismur, e.mightyena, e.loudred],
			wave: [
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 

				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, 
				
			],
		},
		40: {
			preview: [e.exeggcute, e.exeggutor],
			wave: [
				e.exeggutor, e.exeggutor,
				e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute,  e.exeggcute, e.exeggcute, 
				e.exeggcute, e.exeggcute, e.exeggcute,
				e.exeggutor, e.exeggutor, 
				e.exeggcute, e.exeggcute, e.exeggcute, 
				e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute,
			],
		},
		41: {
			preview: [e.linoone, e.mightyena],
			wave: [
				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			],
		},
		42: {
			preview: [e.zigzagoon, e.poochyena, e.linoone, e.mightyena],
			wave: [
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,

				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,
				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone,
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,
				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
			],
			
		},
		43: {
			preview: [e.delibird],
			wave: [
				e.delibird, null,  null, e.delibird,  null,  null, e.delibird
			],
		},
		44: {
			preview: [e.bronzor, e.whismur, e.loudred],
			wave: [
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, 
				e.whismur, e.whismur, e.whismur,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,

				
			]
		},
		45: {
			preview: [e.bronzor, e.whismur, e.linoone, e.mightyena, e.loudred],
			wave: [
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.mightyena, e.mightyena, 
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,
				e.bronzor, e.bronzor, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, 
				e.whismur, e.whismur, 
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone,
				e.linoone, e.linoone,
			]
		},
		46: {
			preview: [e.poochyena, e.purrloin, e.mightyena],
			wave: [
				e.purrloin, e.purrloin, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
			],
			
		},
		47: {
			preview: [e.zigzagoon, e.poochyena, e.magnemite, e.bronzor],
			wave: [
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, 
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
				e.bronzor, e.bronzor,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, 
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, 
			],
		},
		48: {
			preview: [e.magnemite, e.bronzor, e.linoone, e.mightyena],
			wave: [
				e.mightyena, e.mightyena, e.mightyena, 
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
				e.magnemite, e.magnemite,
				e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null,
				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, 
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, 
				e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena,
				
			],
		},
		49: {
			preview: [e.purrloin, e.loudred],
			wave: [
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				null, null, null,
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
			],
		},
		50: {
			preview: [e.magnemite, e.magneton],
			wave: [
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, 
				e.magneton,
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,				
			],
		},
		51: {
			preview: [e.linoone, e.mightyena, e.exeggutor],
			wave: [
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, 
				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, 
			],
		},
		52: {
			preview: [e.magnemite, e.exeggutor, e.magneton],
			wave: [
				e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, 
				e.magneton,
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, 
				e.magneton, 
			],
		},
		53: {
			preview: [e.poochyena, e.mightyena],
			wave: [
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena
			],
		},
		54: {
			preview: [e.magnemite, e.exeggcute, e.exeggutor, e.magneton],
			wave: [
				e.exeggutor,
				e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute,
				e.exeggutor,

				e.magneton,
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
				e.magneton,	
			],
		},
		55: {
			preview: [e.magneton],
			wave: [
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
				null, null, null,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
			],
		},
		56: {
			preview: [e.magnemite, e.whismur, e.loudred, e.magneton],
			wave: [
				e.magneton, e.magneton, e.magneton, e.magneton, 
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
				null, null, null, null, null, null, null, null,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, 
				e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, 
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
			],
		},
		57: {
			preview: [e.zigzagoon, e.poochyena, e.magnemite, e.exeggcute],
			wave: [
				
				e.magnemite, e.magnemite, e.magnemite, e.magnemite,
				e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, 
				e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, 
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
			],
			
		},
		58: {
			preview: [e.linoone, e.mightyena, e.exeggutor, e.magneton],
			wave: [
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
				null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null, null, null, 
				e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, 
				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
			],
		},
		59: {
			preview: [e.purrloin],
			wave: [
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
			],
		},
		60: {
			preview: [e.purrloin, e.liepard],
			wave: [
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
				null, null, null, null, null, null, 
				e.liepard, e.liepard, e.liepard
			],
		},
		61: {
			preview: [e.mightyena, e.magneton, e.liepard],
			wave: [
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, 
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, 
				e.liepard, e.liepard, e.liepard,
				null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				
			],
		},
		62: {
			preview: [e.poochyena, e.magnemite, e.mightyena, e.exeggutor, e.magneton],
			wave: [
				e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, 
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
			],
		},
		63: {
			preview: [e.exeggcute, e.bronzor, e.zigzagoon, e.loudred, e.ninjask],
			wave: [
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, 
				e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, 
				null, null, null, null, null, null,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, 
				null, null, null, null,
				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, 
				e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask,
				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, 
				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, 
				e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask,
			],
		},
		64: {
			preview: [e.poochyena, e.purrloin, e.bronzor, e.magneton, e.liepard],
			wave: [
				e.bronzor, e.bronzor, e.bronzor, e.magneton, e.magneton, e.magneton, e.bronzor, e.bronzor, e.bronzor, 
				e.magneton, e.magneton, e.magneton, e.bronzor, e.bronzor, e.bronzor, e.magneton, e.magneton, e.magneton,

				null, null, null, null, null, null, null, null, null, null, null, null,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,

				null, null, null, null, null, null, null, null, null, null, null, null,
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin,
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin,

				e.liepard, 
				null, null, null, null, null, null,
				e.liepard, 
				null, null, null, null, null, null,
				e.liepard
			],
		},
		65: {
			preview: [e.zigzagoon, e.exeggcute, e.linoone, e.magneton],
			wave: [
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,

				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,

				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
				null, null, null, null, null, null, null, null, null,
				e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute,
				e.exeggcute, e.exeggcute,

				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone,
				e.linoone, e.linoone,

				
			],
		},
		66: {
			preview: [e.mightyena, e.exeggutor, e.magneton, e.loudred, e.liepard],
			wave: [
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.liepard,
				e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor,
				e.liepard, 
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.liepard,
				null, null, null, null, 
				e.liepard, 
				null, null, null, null, 
				e.liepard, 

			],
		},
		67: {
			preview: [e.liepard, e.ninjask],
			wave: [
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, null, null, null, null, null, null,
				e.ninjask, e.ninjask,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, null, null, null, null, null, null,
				e.ninjask, e.ninjask,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, null, null, null, null, null, null, 
				e.ninjask, e.ninjask,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
			],
		},
		68: {
			preview: [e.zigzagoon, e.poochyena, e.magnemite, e.purrloin, e.exeggcute],
			wave: [
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,

				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon,
				e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, e.zigzagoon, 

				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute,

				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin,
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin,

				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, 

				
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin,
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin,
			],
		},
		69: {
			preview: [e.whismur, e.loudred, e.ninjask],
			wave: [
				e.loudred, e.whismur, e.loudred, e.whismur, e.loudred, e.whismur, e.loudred, e.whismur, e.loudred, 
				e.ninjask, e.ninjask, e.ninjask, e.ninjask,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.ninjask, e.ninjask, e.ninjask, e.ninjask,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,	
				e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask,	
			],
		},
		70: {
			preview: [e.whismur, e.loudred, e.cinccino],
			wave: [
				e.cinccino, 
				
				e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur, e.whismur,
			],
		},
		71: {
			preview: [e.mightyena, e.liepard, e.ninjask],
			wave: [
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.liepard, e.ninjask, e.ninjask,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.liepard, e.ninjask, e.ninjask,
				null, null, null, null, null, null, null, null, null, 
				e.liepard,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.liepard,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.liepard,
				null, null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.liepard, e.ninjask, e.ninjask,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.liepard, e.ninjask, e.ninjask,
				null, null, null, null, null, null, null,
				e.liepard,
			],
		},
		72: {
			preview: [e.magnemite, e.bronzor, e.magneton, e.liepard],
			wave: [
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, 
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, 
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				null, null, null, null, null, null, null, null, null, null, null,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,
				null, null, null, null, null, null, null, null, null, null, null,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				null, null, null, null, null, null, null, null, null, null, null,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
			],
		},
		73: {
			preview: [e.liepard, e.cinccino, e.ninjask],
			wave: [
				e.cinccino, e.cinccino, e.cinccino, 
				e.liepard, e.liepard, e.liepard,
				null, null, null, null, null, null, null,
				e.liepard, e.liepard, e.ninjask,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.liepard, e.liepard, e.ninjask,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.liepard, e.liepard, e.ninjask
			],
		},
		74: {
			preview: [e.mightyena, e.exeggutor, e.magneton, e.liepard, e.ninjask],
			wave: [
				e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, 
				null, null, null, null, null, null, null, null, null, 
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.liepard, e.liepard, e.ninjask, e.liepard, e.liepard, e.ninjask, e.liepard, e.liepard, e.ninjask, e.liepard, e.liepard, e.ninjask
			],
		},
		75: {
			preview: [e.cinccino, e.ninjask],
			wave: [
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				null, null, null, null, null, null,
				e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, 
			],
		},
		76: {
			preview: [e.exeggcute, e.bronzor, e.mightyena, e.exeggutor, e.liepard],
			wave: [
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,
				e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute, e.exeggcute,
				e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor,
				e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor, e.exeggutor,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,  

			],
		},
		77: {
			preview: [e.magneton, e.loudred, e.cinccino, e.ninjask],
			wave: [
				e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask,
				e.cinccino, e.cinccino, e.cinccino,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, 
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, 
				e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask,

			],
		},
		78: {
			preview: [e.poochyena, e.mightyena],
			wave: [
				e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena,
			],
		},
		79: {
			preview: [e.delibird],
			wave: [
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, 
			],
		},
		80: {
			preview: [e.seviper, e.zangoose],
			wave: [
				e.seviper, e.zangoose
			],
		},
		81: {
			preview: [e.purrloin, e.liepard],
			wave: [
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.liepard, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.liepard, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.liepard, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
			],
		},
		82: {
			preview: [e.purrloin, e.loudred, e.liepard, e.cinccino],
			wave: [
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, 
				e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, 
				e.liepard, e.liepard, e.liepard, e.liepard, 
				e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
				e.liepard, e.liepard, e.liepard, e.liepard, 
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
				e.liepard, e.liepard, e.liepard, e.liepard, 
			],
		},
		83: {
			preview: [e.cinccino, e.zangoose],
			wave: [
				e.zangoose, e.cinccino, e.cinccino, e.cinccino,
			],
		},
		84: {
			preview: [e.cinccino, e.seviper],
			wave: [
				 e.seviper, e.cinccino, e.cinccino, e.cinccino,
			],
		},
		85: {
			preview: [e.cinccino, e.seviper, e.zangoose],
			wave: [
				e.seviper, 
				e.zangoose,
				e.cinccino, e.cinccino, e.cinccino,
				null, null,
				e.cinccino, e.cinccino, e.cinccino,
			],
		},
		86: {
			preview: [e.magneton, e.cinccino, e.zangoose],
			wave: [
				e.cinccino, e.cinccino, e.cinccino, 
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, 
				null, null, null, null, null, null, null,
				e.zangoose, e.zangoose,
			],
		},
		87: {
			preview: [e.magneton, e.cinccino, e.seviper],
			wave: [
				e.cinccino, e.cinccino, e.cinccino, 
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, 
				null, null, null, null, null, null, null,
				e.seviper, e.seviper, 
			],
		},
		88: {
			preview: [e.magnemite, e.bronzor, e.magneton, e.seviper, e.zangoose],
			wave: [
				e.zangoose, 
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite,
				e.zangoose, e.zangoose, 
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, 
				e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, e.magnemite, 
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, 
				e.seviper, e.seviper,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
				e.seviper,
			],
		},
		89: {
			preview: [e.loudred, e.ninjask],
			wave: [
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, 
				null, null, null, null, null, null,
				e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, 
				null, null, null, null, null, null,
				e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, 
			],
		},
		90: {
			preview: [e.magneton, e.lickitung],
			wave: [
				e.lickitung, e.lickitung, e.lickitung, e.lickitung,
				e.magneton, e.magneton, e.magneton, e.magneton,
				e.lickitung, e.lickitung, e.lickitung, e.lickitung,
				e.magneton, e.magneton, e.magneton, e.magneton,
				e.lickitung, e.lickitung, e.lickitung, e.lickitung,
				e.magneton, e.magneton, e.magneton, e.magneton,
			],
		},
		91: {
			preview: [e.purrloin, e.liepard, e.ninjask],
			wave: [
				e.ninjask, e.ninjask, e.ninjask,
				null, null, null,
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.liepard, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
				e.ninjask, e.ninjask, e.ninjask,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.liepard, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
				null, null, null,
				e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.liepard, e.purrloin, e.purrloin, e.purrloin, e.purrloin, e.purrloin, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,

			],
		},
		92: {
			preview: [e.linoone, e.mightyena, e.exeggutor, e.liepard],
			wave: [
				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.exeggutor, e.exeggutor,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,
				e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone, e.linoone,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.exeggutor, e.exeggutor,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,
				null, null, null, null, null, null, null, null, null, null,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,
				null, null, null, null, null, null, null, null, null, null,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,

			],
		},
		93: {
			preview: [e.cinccino, e.lickitung],
			wave: [
				e.cinccino,
				null, null,
				e.lickitung, e.cinccino,
				null, null, 
				e.lickitung, e.cinccino,
				null, null,
				e.lickitung, e.cinccino,
			],
		},
		94: {
			preview: [e.seviper, e.lickitung],
			wave: [
				e.lickitung,
				null, null, null, null,
				e.seviper, e.seviper, e.seviper, 
			],	
		},
		95: {
			preview: [e.zangoose, e.lickitung],
			wave: [
				e.lickitung,
				null, null, null, null,
				e.zangoose, e.zangoose, e.zangoose,
			],
		},
		96: {
			preview: [e.poochyena, e.purrloin, e.seviper, e.zangoose],
			wave: [
				e.seviper, e.zangoose, e.seviper, e.zangoose,
				e.purrloin, e.poochyena, e.purrloin, e.poochyena, e.purrloin, e.poochyena, e.purrloin, e.poochyena, e.purrloin, e.poochyena, e.purrloin, e.poochyena, e.purrloin, e.poochyena,
				e.purrloin, e.poochyena, e.purrloin, e.poochyena, e.purrloin, e.poochyena, e.purrloin, e.poochyena, e.purrloin, e.poochyena, e.purrloin, e.poochyena, e.purrloin, e.poochyena,
				e.purrloin, e.poochyena, e.purrloin, e.poochyena, e.purrloin, e.poochyena, e.purrloin, e.poochyena, e.purrloin, e.poochyena, e.purrloin, e.poochyena, e.purrloin, e.poochyena,
			],
		},
		97: {
			preview: [e.mightyena, e.liepard, e.seviper, e.zangoose],
			wave: [
				e.seviper, e.zangoose, e.seviper, e.zangoose, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena,
				null, null, null, null, null, null, null, null,
				e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena,
				null, null, null, null, null, null, null, null,
				e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena,
			],
		},
		98: {
			preview: [e.seviper, e.zangoose],
			wave: [
				e.seviper, e.zangoose, e.seviper, e.zangoose, 
				null, null, null, null, null, null,
				e.seviper, e.zangoose, e.seviper, e.zangoose, 
			],
		},
		99: {
			preview: [e.cinccino, e.seviper, e.zangoose, e.lickitung],
			wave: [
				e.lickitung,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				null, null, null,
				e.seviper, e.zangoose, 
				null, 
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,	
				null, null, null, null, null, null, null, null,
				e.zangoose, e.seviper,
			],
		},
		100: {
			preview: [e.raikou],
			wave: [
				e.raikou
			],
		},
	},
	4: {
		1: {
			preview: [e.wurmple],
			wave: [
				e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple,
				e.wurmple, e.wurmple,	e.wurmple, e.wurmple, e.wurmple, e.wurmple,	e.wurmple, e.wurmple, e.wurmple, e.wurmple,	
				e.wurmple, e.wurmple,	e.wurmple, e.wurmple, 
			],
		},
		2: {
			preview: [e.wurmple, e.cascoon],
			wave: [
				e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.wurmple, e.wurmple,	e.wurmple, e.wurmple, e.wurmple, e.wurmple,	e.wurmple, e.wurmple, e.wurmple, e.wurmple, 
			],
		},
		3: {
			preview: [e.cascoon],
			wave: [
				e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, 
				e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, 
			],
		},
		4: {
			preview: [e.wurmple, e.cascoon, e.bronzor],
			wave: [
				
				e.bronzor, e.bronzor, 
				null, null, null, null,
				e.wurmple, e.wurmple,	e.wurmple, e.wurmple, e.wurmple, e.wurmple, 
				null, null, null, null,
				e.bronzor, e.bronzor, 
				e.cascoon, e.cascoon, e.cascoon, e.cascoon, 
				e.wurmple, e.wurmple,	e.wurmple, e.wurmple, e.wurmple, e.wurmple, 
			],
		},
		5: {
			preview: [e.wurmple, e.cascoon],
			wave: [
				e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, 
				e.wurmple, e.wurmple,	e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple,
			],
		},
		6: {
			preview: [e.wurmple, e.cascoon, e.bronzor],
			wave: [
				e.bronzor, 
				e.cascoon, e.cascoon, e.cascoon,
				e.wurmple, e.wurmple,e.wurmple, 
				e.cascoon, e.cascoon, e.cascoon,
				e.bronzor,
				e.cascoon, e.cascoon, e.cascoon,
				e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, 
			],
		},
		7: {
			preview: [e.cascoon, e.bronzor],
			wave: [
				e.bronzor, e.bronzor, e.bronzor, e.bronzor,
				e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, 
				e.bronzor, e.bronzor, e.bronzor, e.bronzor,  
				
			],
		},
		8: {
			preview: [e.cascoon, e.dustox],
			wave: [
				e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, 
				e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, 
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, 
			],
		},
		9: {
			preview: [e.wurmple, e.cascoon],
			wave: [
				e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, 
				e.wurmple, e.wurmple,e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, 
				e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, 
				null, null, null, null, null, null, null,
				e.wurmple, e.wurmple,e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple,
			],
		},
		10: {
			preview: [e.wurmple, e.cascoon, e.beautifly],
			wave: [
				e.beautifly, e.beautifly,
				e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, 
				e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, 
				e.beautifly, e.beautifly,
			],
		},
		11: {
			preview: [e.dustox],
			wave: [
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, 
				e.dustox, e.dustox, 
			],
		},
		12: {
			preview: [e.bronzor, e.dustox],
			wave: [
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, 
				null, null, null, null, null, null, null, null,
				e.dustox, e.dustox, e.dustox, e.dustox, 
				null, null, null, null, null, null,
				e.dustox, e.dustox, e.dustox, e.dustox, 
			],
		},
		13: {
			preview: [e.dustox, e.beautifly],
			wave: [
				e.dustox, e.dustox, e.dustox, null, null, e.beautifly, null,
				e.dustox, e.dustox, e.dustox, null, null, e.beautifly, null,
				e.dustox, e.dustox, e.dustox, null, null, e.beautifly,

			],
		},
		14: {
			preview: [e.wurmple, e.cascoon, e.beautifly],
			wave: [
				e.beautifly,
				e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon,
				e.beautifly, 
				e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, 
				e.beautifly, 
			],
		},
		15: {
			preview: [e.magneton],
			wave: [
				e.magneton, e.magneton, e.magneton, 
			],
		},
		16: {
			preview: [e.magneton, e.loudred],
			wave: [
				e.loudred, e.loudred, e.loudred, e.loudred, 
				e.magneton, e.magneton, 
				null, null, null, null, null, 
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
			],
		},
		17: {
			preview: [e.cascoon, e.magneton],
			wave: [
				e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, null, e.magneton, e.magneton, e.magneton,
				e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, null, e.magneton, e.magneton, e.magneton, 
				e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, null, e.magneton, e.magneton, e.magneton,
				null, null, null, null, null, null, e.magneton, e.magneton, e.magneton,
			],
		},
		18: {
			preview: [e.dustox, e.beautifly],
			wave: [
				e.beautifly, e.beautifly, e.beautifly,
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, 
			],
		},
		19: {
			preview: [e.bronzor, e.magneton],
			wave: [
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,
				null, e.magneton, null, e.magneton, null, e.magneton,
				null, null, null, null, null, null, null, null, null,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, 
				null, e.magneton, null, e.magneton, null, e.magneton,
				
			],
		},
		20: {
			preview: [e.bronzor, e.bronzong],
			wave: [
				e.bronzong,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,  e.bronzor, e.bronzor, e.bronzor, e.bronzor, 
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,  e.bronzor, e.bronzor, e.bronzor, e.bronzor, 
			],
		},
		21: {
			preview: [e.wurmple, e.cascoon, e.beautifly],
			wave: [
				e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon,
				e.beautifly,
				e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, 
				e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, 
				e.beautifly,
				e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple,
				e.beautifly,
				null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null,
				e.beautifly
			],
		},
		22: {
			preview: [e.dustox, e.loudred],
			wave: [
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,  
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, 
			],
		},
		23: {
			preview: [e.magneton, e.loudred, e.delibird],
			wave: [
				e.magneton, e.magneton, 
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.magneton, e.magneton, 
				null, null, null, null, null,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				null, null, null, null, null,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				null, null, null, null, null, null,
				e.delibird
			],
		},
		24: {
			preview: [e.dustox, e.loudred],
			wave: [
				e.loudred, e.loudred, e.loudred, e.loudred,
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,  
				e.loudred, e.loudred, e.loudred, e.loudred, 
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, 
				e.loudred, e.loudred, e.loudred, e.loudred, 
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, 
			],
		},
		25: {
			preview: [e.wurmple, e.cascoon, e.dustox, e.beautifly],
			wave: [
				e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly,
				e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, 
				e.wurmple, e.wurmple,	e.wurmple, e.wurmple, e.wurmple, e.wurmple,	e.wurmple, e.wurmple, e.wurmple, e.wurmple, 
				e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly,
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, 
			],
		},
		26: {
			preview: [e.magneton, e.bronzong],
			wave: [
				e.bronzong, e.bronzong, 
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
			],
		},
		27: {
			preview: [e.dustox, e.loudred, e.beautifly],
			wave: [
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, 
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, 
				e.beautifly, e.beautifly, 
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, 
				e.beautifly, e.beautifly, 
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, 
				null, null, null, null,
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,  
				e.beautifly, e.beautifly, 
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,  
				e.beautifly, e.beautifly, 
			],
		},
		28: {
			preview: [e.bronzor, e.bronzong],
			wave: [
				e.bronzong,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, 
				null, null, null, null, null,
				e.bronzong, 
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, 
				null, null, null, null, null, 
				e.bronzong,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, 
			],
		},
		29: {
			preview: [e.dustox, e.beautifly],
			wave: [
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, 
				e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, 
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, 
				e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly,
			],
		},
		30: {
			preview: [e.dustox, e.beautifly, e.yanma],
			wave: [
				e.beautifly, 
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, 
				null, null, null,
				e.beautifly, 
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, 
				null, null, null,
				e.beautifly, 
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, 
				null, null, null,
				e.beautifly, 
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, 
				null, null, null,
				e.yanma
			],
		},
		31: {
			preview: [e.bronzor, e.bronzong],
			wave: [
				e.bronzong,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, 
				e.bronzong,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,  
				e.bronzong,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,
				e.bronzong,
			],
		},
		32: {
			preview: [e.wurmple, e.cascoon, e.dustox, e.beautifly, e.yanma],
			wave: [
				e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon, e.cascoon,
				e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, e.wurmple, 
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, 
				null, null, null,
				e.yanma, e.yanma, e.yanma, e.yanma,
				null, null, null,
				e.beautifly, e.beautifly, e.beautifly, e.beautifly, 
			],
		},
		33: {
			preview: [e.dustox, e.yanma],
			wave: [
				e.dustox, e.dustox, e.dustox,
				e.yanma, 
				e.dustox, e.dustox, e.dustox,
				e.yanma, 
				e.dustox, e.dustox, e.dustox,
				e.yanma, 
				e.dustox, e.dustox, e.dustox,
				e.yanma, 
				e.dustox, e.dustox, e.dustox,
				e.yanma, 
				e.dustox, e.dustox, e.dustox,
				e.yanma, 
			],
		},
		34: {
			preview: [e.bronzong],
			wave: [
				e.bronzong, e.bronzong, 
				null, null, null, null, null, null,
				e.bronzong, e.bronzong, 
				null, null, null, null, null, null,
				e.bronzong, e.bronzong, 
			],
		},
		35: {
			preview: [e.dustox, e.yanma],
			wave: [
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,
				e.yanma, e.yanma, e.yanma
			],
		},
		36: {
			preview: [e.dustox, e.beautifly, e.magneton, e.loudred, e.drifloon],
			wave: [
				e.drifloon, e.drifloon, 
				null, null, null, null, null, null,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, 
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
				null, null, null, null, null, null,
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,
				e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly,
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,
			],
		},
		37: {
			preview: [e.dustox, e.yanma],
			wave: [
				e.yanma, e.yanma, e.yanma,
				e.dustox, 
				e.yanma, e.yanma, e.yanma,
				e.dustox, 
				e.yanma, e.yanma, e.yanma,
				e.dustox, 
				e.yanma, e.yanma, e.yanma,
				e.dustox, 
			],
		},
		38: {
			preview: [e.beautifly, e.yanma],
			wave: [
				e.yanma, e.yanma, e.yanma, 
				e.beautifly, e.beautifly,
				e.yanma, e.yanma, e.yanma,
				e.beautifly, e.beautifly, 
				e.yanma, e.yanma, e.yanma,
				e.beautifly, e.beautifly,  
				e.yanma, e.yanma, e.yanma,
				e.beautifly, e.beautifly, 
				e.yanma, e.yanma, e.yanma,
				e.beautifly, e.beautifly, 
				e.yanma, e.yanma, e.yanma,
				e.beautifly, e.beautifly, 
			],
		},
		39: {
			preview: [e.loudred],
			wave: [
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
			],
		},
		40: {
			preview: [e.loudred, e.exploud],
			wave: [
				e.exploud, e.exploud, e.exploud,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				
			],
		},
		41: {
			preview: [e.beautifly, e.yanma, e.exploud],
			wave: [
				e.exploud, e.exploud, 
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.exploud, e.exploud, 
				e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly,
				e.exploud, e.exploud, 
				
			],
		},
		42: {
			preview: [e.bronzong, e.exploud],
			wave: [
				e.bronzong, e.bronzong, e.bronzong, e.bronzong, 
				e.exploud, e.exploud, e.exploud, 
				null, null, null, null, null, null, null, null, null, null,
				e.bronzong, e.bronzong, e.bronzong, e.bronzong,
				e.exploud, e.exploud, e.exploud, 
			],
		},
		43: {
			preview: [e.magneton, e.loudred, e.drifloon, e.exploud],
			wave: [
				e.drifloon, e.drifloon,
				e.exploud, e.exploud,
				e.loudred, e.loudred, e.loudred, 
				e.magneton, e.magneton, e.magneton, 
				e.loudred, e.loudred, e.loudred, e.loudred, 
				e.loudred, e.loudred, e.loudred, 
				e.exploud, e.exploud,
				e.magneton, e.magneton, e.magneton, 
				e.loudred, e.loudred, e.loudred, e.loudred, 
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
			],
		},
		44: {
			preview: [e.dustox, e.beautifly, e.yanma],
			wave: [
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,
				e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly,

				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,

				e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly,
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
			],
		},
		45: {
			preview: [e.drifloon],
			wave: [
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
			],
		},
		46: {
			preview: [e.dustox, e.beautifly, e.yanma, e.exploud],
			wave: [
				e.exploud, e.exploud,
				e.yanma, e.yanma, e.yanma, e.beautifly, e.dustox, e.beautifly, e.yanma, e.dustox, e.yanma, e.yanma,
				e.dustox, e.dustox, e.beautifly, e.dustox, e.yanma, e.beautifly, e.beautifly, e.yanma, e.dustox, e.dustox,
				e.exploud, e.exploud,
				e.yanma, e.yanma, e.yanma, e.yanma,
				e.dustox, e.beautifly, e.yanma, e.beautifly, e.yanma, e.beautifly, e.beautifly, e.yanma, 
			],
			
		},
		47: {
			preview: [e.loudred, e.exploud],
			wave: [
				e.loudred, e.loudred, e.loudred, e.loudred,
				e.exploud, e.exploud, e.exploud, 
				e.loudred, e.loudred, e.loudred, e.loudred,
				e.exploud, e.exploud, e.exploud, 
				e.loudred, e.loudred, e.loudred, e.loudred,
			],
		},
		48: {
			preview: [e.bronzong, e.yanma, e.exploud],
			wave: [
				e.exploud, e.exploud, e.exploud, 
				e.bronzong, e.bronzong, e.bronzong, e.bronzong, e.bronzong, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
			],
			
		},
		49: {
			preview: [e.bronzor, e.magneton, e.bronzong],
			wave: [
				e.bronzong, e.bronzong, e.bronzong, e.bronzong,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, 
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
				e.bronzong, e.bronzong, e.bronzong, e.bronzong,
				e.bronzong, e.bronzong, e.bronzong, e.bronzong,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, 
				e.bronzong, e.bronzong, e.bronzong, e.bronzong,
			],
		},
		50: {
			preview: [e.magneton, e.magnezone],
			wave: [
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, 
				e.magnezone, e.magnezone, e.magnezone, 
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, 
			],
		},
		51: { 
			preview: [e.magneton, e.lickitung, e.ninjask],
			wave: [
				e.lickitung, 
				e.ninjask, e.ninjask, e.ninjask, e.ninjask,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, 
				null, null, null, null, null, null,
				e.ninjask, e.ninjask, e.ninjask, e.ninjask,
			] 
		},
		52: { 
			preview: [e.drifloon, e.magnezone, e.lickitung],
			wave: [
				e.lickitung, e.lickitung, 
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, 
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, 
				null, null, null, null, null, null,
				e.magnezone, e.magnezone,
			] 
		},
		53: { 
			preview: [e.loudred, e.exploud],
			wave: [
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
			] 
		},
		54: { 
			preview: [e.bronzong, e.drifloon, e.magnezone, e.lickitung],
			wave: [
				e.lickitung, e.lickitung, e.lickitung, 
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, 
				e.magnezone, e.magnezone, e.magnezone,
			] 
		},
		55: { 
			preview: [e.drifloon, e.lickitung],
			wave: [
				e.lickitung, e.lickitung, 
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.lickitung, e.lickitung,
			] 
		},
		56: { 
			preview: [e.bronzor, e.lickitung],
			wave: [
				e.lickitung, e.lickitung,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,
				e.lickitung, e.lickitung, 
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,
				e.lickitung, e.lickitung,  
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,
				e.lickitung, e.lickitung,
				e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor, e.bronzor,
			] 
		},
		57: { 
			preview: [e.magnezone],
			wave: [
				e.magnezone, e.magnezone, e.magnezone, 
				null, null, null, null, null,
				e.magnezone, e.magnezone, e.magnezone, 
				null, null, null, null, null,
				e.magnezone, e.magnezone, e.magnezone, 
			] 
		},
		58: { 
			preview: [e.magneton, e.magnezone, e.lickitung],
			wave: [
				e.lickitung, e.lickitung,
				null, null, null, null, null, null, null, null, null, null,
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				null, null, null, null, null, null,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
				null, null, null, null, null, null,
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone,
			] 
		},
		59: { 
			preview: [e.lickitung],
			wave: [
				e.lickitung, e.lickitung, e.lickitung, e.lickitung, 
				null, null, null, null, null, null, null, null, null, null,
				e.lickitung, e.lickitung, e.lickitung, e.lickitung,
			] 
		},
		60: { 
			preview: [e.lickitung, e.lickilicky],
			wave: [
				e.lickilicky, e.lickitung, e.lickitung, e.lickitung, e.lickitung, e.lickitung, 
			] 
		},
		61: { 
			preview: [e.beautifly],
			wave: [
				e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly,
				e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly,
				e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly,
				e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly,
			] 
		},
		62: { 
			preview: [e.beautifly, e.yanma, e.exploud],
			wave: [
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, 
				 e.exploud, e.exploud, e.exploud,
				e.beautifly, e.beautifly, e.beautifly, e.beautifly,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, 
				 e.exploud, e.exploud, e.exploud, 
				e.beautifly, e.beautifly, e.beautifly, e.beautifly,
				e.beautifly, e.beautifly, e.beautifly, e.beautifly,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, 
				e.beautifly, e.beautifly, e.beautifly, e.beautifly,
				e.beautifly, e.beautifly, e.beautifly, e.beautifly,
			] 
		},
		63: { 
			preview: [e.magnezone, e.lickitung],
			wave: [
				e.lickitung, e.lickitung, e.lickitung, 
				e.magnezone, e.magnezone, e.magnezone, 
				null, null, null, null, null, null, null, null, null, null,
				e.lickitung, e.lickitung, e.lickitung, 
				e.magnezone, e.magnezone, e.magnezone, 
			] 
		},
		64: { 
			preview: [e.lickilicky],
			wave: [
				e.lickilicky, e.lickilicky, e.lickilicky,
			] 
		},
		65: { 
			preview: [e.magneton, e.bronzong, e.exploud, e.drifloon, e.magnezone],
			wave: [
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.bronzong, e.bronzong, e.bronzong, e.bronzong, e.bronzong, e.bronzong, e.bronzong, e.bronzong, e.bronzong, e.bronzong,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, 
			] 
		},
		66: { 
			preview: [e.loudred, e.exploud],
			wave: [
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
			] 
		},
		67: { 
			preview: [e.bronzong, e.drifloon, e.magnezone, e.lickitung],
			wave: [
				e.lickitung, e.lickitung, e.lickitung, e.lickitung, e.lickitung,
				null, null, null, null, null, null, null, 
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.bronzong, e.bronzong, e.bronzong, e.bronzong, e.bronzong, e.bronzong, e.bronzong, e.bronzong,
				null, null, null, null, null, null, null, 
				e.bronzong, e.bronzong, e.bronzong, e.bronzong, e.bronzong, e.bronzong, e.bronzong, e.bronzong,
			] 
		},
		68: { 
			preview: [e.yanma],
			wave: [
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
			] 
		},
		69: { 
			preview: [e.drifloon, e.magnezone, e.lickitung],
			wave: [
				e.lickitung, e.lickitung, e.lickitung, 
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				null, null, null, null, null, null, null, 
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				e.lickitung, e.lickitung, e.lickitung, 
			] 
		},
		70: { 
			preview: [e.magneton, e.drifloon, e.drifblim],
			wave: [
				e.drifblim,
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, 
			] 
		},
		71: { 
			preview: [e.lickitung, e.lickilicky],
			wave: [
				e.lickilicky,
				null, null, null,
				e.lickitung, e.lickitung, e.lickitung, e.lickitung, e.lickitung,
				null, null, null, null, null, null,
				e.lickitung, e.lickitung, e.lickitung, e.lickitung, e.lickitung,
			] 
		},
		72: { 
			preview: [e.drifloon, e.drifblim],
			wave: [
				e.drifblim, e.drifblim,
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, 
				e.drifblim, e.drifblim,
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, 
				e.drifblim, e.drifblim
			] 
		},
		73: { 
			preview: [e.magnezone, e.delibird],
			wave: [
				e.delibird, e.delibird,
				e.magnezone, e.magnezone, e.magnezone, e.magnezone,  
				e.delibird, e.delibird,
				e.magnezone, e.magnezone, e.magnezone, e.magnezone,  
				e.delibird, e.delibird,
				e.magnezone, e.magnezone, e.magnezone, e.magnezone,  
				e.delibird, e.delibird,
			] 
		},
		74: { 
			preview: [e.beautifly, e.yanma, e.exploud, e.magnezone, e.lickilicky],
			wave: [
				e.lickilicky,

				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,

				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,

				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone,
				
				e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly,
				e.lickilicky,
				e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly,

				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,

				e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly,
			] 
		},
		75: { 
			preview: [e.loudred, e.yanma, e.exploud, e.drifloon, e.magnezone],
			wave: [
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,

				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, 
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,

				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone,

				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
			] 
		},
		76: { 
			preview: [e.drifloon, e.lickitung, e.drifblim],
			wave: [
				e.drifloon, e.drifblim, e.drifloon,
				null, null, null,
				e.lickitung, e.lickitung, 
				e.drifblim, e.drifloon, e.drifblim, 
				null, null, null,
				e.lickitung, e.lickitung,
				null, null, null,
				e.lickitung, e.lickitung, 
			]
		},
		77: { 
			preview: [e.bronzong, e.magnezone, e.lickitung, e.lickilicky, e.drifblim],
			wave: [
				e.lickilicky, 
				e.drifblim, e.drifblim,
				e.magnezone, e.magnezone, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.lickitung, e.lickitung, e.lickitung,
				e.drifblim, e.drifblim,
				e.bronzong, e.bronzong, e.bronzong, e.bronzong, e.bronzong, e.bronzong,
				null, null, null, null, null, 
				e.drifblim,
				e.magnezone, e.magnezone, e.magnezone, 
			] 
		},
		78: { 
			preview: [e.loudred, e.beautifly, e.exploud, e.drifblim],
			wave: [
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,

				e.drifblim, e.drifblim, e.drifblim,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,
				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred,

				null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null,  
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,

				e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly,
				e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly,
			] 
		},
		79: { 
			preview: [e.drifloon, e.magnezone, e.lickitung, e.ninjask],
			wave: [
				e.lickitung, e.lickitung, e.lickitung, 
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, 
				e.ninjask, e.ninjask, e.ninjask, e.ninjask, 
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, 
				e.ninjask, e.ninjask, e.ninjask, e.ninjask, 	
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				e.ninjask, e.ninjask, e.ninjask, e.ninjask, 	
			] 
		},
		80: { 
			preview: [e.skarmory, e.ninjask],
			wave: [
				e.skarmory,
				e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask,		
			] 
		},
		81: { 
			preview: [e.drifloon, e.lickilicky, e.drifblim],
			wave: [
				e.drifblim,
				e.lickilicky, e.lickilicky,
				e.drifblim,
				e.drifblim,
				null, null, null,
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.drifblim,
				e.lickilicky, e.lickilicky,
			] 
		},
		82: { 
			preview: [e.loudred, e.skarmory],
			wave: [
				e.skarmory,

				e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, e.loudred, 
				null, null, null, null, null, null,
				e.skarmory,
			] 
		},
		83: { 
			preview: [e.magneton, e.exploud, e.magnezone, e.drifblim],
			wave: [
				e.drifblim,
				e.magnezone, e.magnezone, e.magnezone,
				e.drifblim,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
				e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton, e.magneton,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
			] 
		},
		84: { 
			preview: [e.drifloon, e.drifblim],
			wave: [
				e.drifblim, e.drifblim, 
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.drifblim, e.drifblim, 
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.drifblim, e.drifblim, 
			] 
		},
		85: { 
			preview: [e.beautifly, e.skarmory],
			wave: [
				e.skarmory, 
				e.beautifly, e.beautifly, e.beautifly, 
				e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly,
				e.skarmory, 
				e.beautifly, e.beautifly, e.beautifly, 
				e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly, e.beautifly,
				e.skarmory, 
			] 
		},
		86: { 
			preview: [e.beautifly, e.yanma, e.magnezone, e.lickilicky],
			wave: [
				e.beautifly, e.yanma, e.beautifly, e.yanma, e.beautifly, e.yanma,
				e.lickilicky,
				e.beautifly, e.yanma, e.beautifly, e.yanma, e.beautifly, e.yanma,
				e.magnezone,
				e.beautifly, e.yanma, e.beautifly, e.yanma, e.beautifly, e.yanma,
				null,
				e.beautifly, e.yanma, e.beautifly, e.yanma, e.beautifly, e.yanma,
				null,
				e.beautifly, e.yanma, e.beautifly, e.yanma, e.beautifly, e.yanma,

			] 
		},
		87: { 
			preview: [e.magneton, e.magnezone, e.delibird],
			wave: [
				e.magneton, e.magnezone, e.magneton, e.magnezone, e.magneton, e.magnezone, e.magneton, 
				null, null, null, null, null,null, null, null, null, null, 
				e.delibird, e.delibird, e.delibird,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				e.delibird, e.delibird,
				null, null, null, null, null,null, null, null, null, null, null, null, null, 
				e.delibird, e.delibird, e.delibird,
				null, null, null, null, null,null, null, null, null, null,
				e.delibird, e.delibird,
				null, null, null, null, null,null, null, null, 
				e.delibird, e.delibird, e.delibird,
			] 
		},
		88: { 
			preview: [e.lickitung, e.lickilicky],
			wave: [
				e.lickilicky, e.lickilicky, 
				e.lickitung, e.lickitung, e.lickitung, e.lickitung,  
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null, null, null,
				e.lickitung, e.lickitung, e.lickitung, e.lickitung,  
				e.lickilicky, e.lickilicky, 
			] 
		},
		89: { 
			preview: [e.drifloon, e.drifblim],
			wave: [
				e.drifloon, e.drifloon, e.drifblim, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				null, null, null, null,
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifblim, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
			] 
		},
		90: { 
			preview: [e.drifblim, e.porygon2],
			wave: [
				e.drifblim, e.drifblim, e.drifblim,
				e.porygon2
			] 
		},
		91: { 
			preview: [e.magnezone, e.delibird],
			wave: [
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				
				null, null, null,
				e.delibird,
				null, null, null, 
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone,
				

				null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird, 
				null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				e.delibird, 
				null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird, 
				null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				e.delibird, 
				null, null, null, null, null, null, null, null, null,
				e.delibird,
			] 
		},
		92: { 
			preview: [e.butterfree, e.dustox, e.drifloon, e.drifblim],
			wave: [
				e.drifblim, e.drifblim, e.drifblim,
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, 
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,
				null, null, null, null, null, null, null, null, null,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,
			] 
		},
		93: { 
			preview: [e.exploud, e.ninjask],
			wave: [
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				null, null, null,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, 
				e.ninjask, e.ninjask, 
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				null, null, null,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.ninjask, e.ninjask, 

				null, null, null,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
	
				e.ninjask, e.ninjask,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				null, null, null,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.ninjask, e.ninjask,

			] 
		},
		94: { 
			preview: [e.porygon2],
			wave: [
				e.porygon2, e.porygon2, e.porygon2, e.porygon2,
				null, null, null, null, 
				e.porygon2, e.porygon2, e.porygon2, e.porygon2,
			] 
		},
		95: { 
			preview: [e.seviper, e.butterfree],
			wave: [
				e.seviper, e.seviper,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
			] 
		},
		96: { 
			preview: [e.zangoose, e.dustox],
			wave: [
				e.zangoose, e.zangoose,
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,
			] 
		},
		97: { 
			preview: [e.zangoose, e.butterfree, e.dustox],
			wave: [
				e.zangoose, e.zangoose,
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.zangoose, e.zangoose,
			] 
		},
		98: { 
			preview: [e.seviper, e.butterfree, e.dustox],
			wave: [
				e.seviper, e.seviper,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.dustox, e.dustox, e.dustox, e.dustox, e.dustox, e.dustox,
				e.seviper, e.seviper,
			] 
		},
		99: { 
			preview: [e.zangoose, e.seviper, e.butterfree, e.dustox],
			wave: [
				e.butterfree, e.dustox, e.butterfree, e.dustox, e.butterfree, e.dustox,
				e.seviper, e.zangoose,
				e.butterfree, e.dustox, e.butterfree, e.dustox, e.butterfree, e.dustox,
				e.butterfree, e.dustox, e.butterfree, e.dustox, e.butterfree, e.dustox,
				e.zangoose, e.seviper,
				e.butterfree, e.dustox, e.butterfree, e.dustox, e.butterfree, e.dustox,
			] 
		},
		100: { 
			preview: [e.entei], 
			wave: [
				e.entei
			] 
		},
	},
	5: {
		1: {
			preview: [e.dratini],
			wave: [
				e.dratini, e.dratini, e.dratini, e.dratini, 
				null, null, 
				e.dratini, e.dratini, e.dratini, e.dratini,
				null, null, 
				e.dratini, e.dratini, e.dratini, e.dratini, 
			],
		},
		2: {
			preview: [e.dratini],
			wave: [
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				null, null, null, null, 
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				null, null, null, null, 
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
			],
		},
		3: {
			preview: [e.mightyena, e.yanma, e.dratini],
			wave: [
				e.mightyena, e.mightyena, e.mightyena, e.mightyena,

				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,

				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				null, null, null,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
			],
		},
		4: {
			preview: [e.mightyena, e.drifloon],
			wave: [
				e.drifloon, e.drifloon,
				null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			],
		},
		5: {
			preview: [e.mightyena, e.dratini],
			wave: [
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,

			],
		},
		6: {
			preview: [e.mightyena, e.dratini],
			wave: [
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			],
		},
		7: {
			preview: [e.mightyena, e.dratini],
			wave: [
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			],
		},
		8: {
			preview: [e.drifloon, e.yanma, e.liepard],
			wave: [
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.liepard, e.liepard, e.liepard, 
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.liepard, e.liepard, e.liepard, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.liepard, e.liepard, e.liepard, 
			],
		},
		9: {
			preview: [e.mightyena, e.drifloon, e.dratini],
			wave: [
				e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			],
		},
		10: {
			preview: [e.cinccino],
			wave: [
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
			],
		},
		11: {
			preview: [e.cinccino, e.dratini,e.dragonair],
			wave: [
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				null, null, null, null, 
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair,
			],
		},
		12: {
			preview: [e.drifloon, e.liepard, e.baltoy],
			wave: [
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,  
			],
		},
		13: {
			preview: [e.dragonair, e.baltoy],
			wave: [
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, 
				null, null, null, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, 
				null, null, null, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
			],
		},
		14: {
			preview: [e.mightyena, e.yanma],
			wave: [
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			],
		},

		15: {
			preview: [e.liepard, e.dratini, e.dragonair],
			wave: [
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,

				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,

				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
			],
		},
		16: {
			preview: [e.cinccino, e.delibird],
			wave: [
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, 
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird
			],
		},
		17: {
			preview: [e.drifloon, e.yanma, e.dratini, e.dragonair, e.baltoy],
			wave: [
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,		
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,

				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				null, null, null, null, null, null, null, null, null, 
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,			
			],
		},
		18: {
			preview: [e.liepard, e.drifloon, e.dratini, e.dragonair],
			wave: [
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,

				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,

				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,
			],
		},
		19: {
			preview: [e.liepard, e.cinccino],
			wave: [	
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,

				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,
			],
		},
		20: {
			preview: [e.mightyena, e.magnezone, e.dratini, e.dragonair],
			wave: [
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone,

				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,

				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,

				null, null, null, null, null,

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,

				null, null, null, null, null,

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			],
		},
		21: {
			preview: [e.drifloon, e.magnezone, e.dragonair],
			wave: [
				e.magnezone, e.magnezone, e.magnezone,
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
			],
		},
		22: {
			preview: [e.exploud, e.baltoy, e.ninjask],
			wave: [
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, 
				e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask,
			],
		},
		23: {
			preview: [e.magnezone, e.lickilicky, e.dratini, e.dragonair],
			wave: [
				e.lickilicky, 

				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,

				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, 

				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
			],
		},
		24: {
			preview: [e.mightyena, e.liepard, e.lickilicky],
			wave: [
				e.lickilicky,  e.lickilicky,  e.lickilicky, e.lickilicky, e.lickilicky,  
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,

				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
			],
		},
		25: {
			preview: [e.liepard, e.cinccino, e.magnezone, e.baltoy],
			wave: [
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				null, null, null, null, null,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,

				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
			],
		},
		26: {
			preview: [e.magnezone, e.exploud, e.lickilicky, e.dratini, e.dragonair],
			wave: [
				e.lickilicky, e.lickilicky, e.lickilicky, 
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone,

				null, null, null,

				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,

				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,

				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,			
			],
		},
		27: {
			preview: [e.drifloon, e.yanma, e.exploud, e.lickilicky],
			wave: [
				e.lickilicky, e.lickilicky, e.lickilicky, e.lickilicky, e.lickilicky, 
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
			],
		},
		28: {
			preview: [e.liepard, e.magnezone],
			wave: [
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				null, null, null, null, null, null, null, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				null, null, null, null, null, null, null, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				null, null, null, null, null, null, null, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
			],
		},
		29: {
			preview: [e.mightyena, e.liepard, e.lickilicky],
			wave: [
				e.lickilicky, e.lickilicky, e.lickilicky,
				null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, 
				null, null, null, null, null, null, null, 
				e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, e.mightyena, e.liepard, 
				null, null, null, null, null, null, null, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				null, null, null, null, null, null, null, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
			],
		},
		30: {
			preview: [e.mightyena, e.yanma, e.liepard, e.lickilicky, e.sigilyph],
			wave: [
				e.sigilyph,
				null, null, 
				e.lickilicky, e.lickilicky, e.lickilicky, 
				null, null, null, null, null, null, null, 
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,

				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
			],
		},
		31: {
			preview: [e.drifloon, e.yanma, e.liepard, e.cinccino],
			wave: [
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				null, null, null, 
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				null, null, null, null, null, null, 
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, 
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				null, null, null, 
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, 
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.liepard, e.liepard, e.liepard, 
				null, null, null, 
				e.liepard, e.liepard, e.liepard,  
				null, null, null, 
				e.liepard, e.liepard, e.liepard, 	
			],
		},
		32: {
			preview: [e.baltoy, e.magnezone, e.sigilyph],
			wave: [
				e.sigilyph,
				null, null, null, 
				e.sigilyph,
				null, null, null, 
				e.sigilyph,

				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone,
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone,
	
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				null, null, null, null, null, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				null, null, null, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
			],
		},
		33: {
			preview: [e.baltoy, e.exploud, e.lickilicky],
			wave: [
				e.lickilicky, e.lickilicky, e.lickilicky, e.lickilicky, e.lickilicky,

				null, null, null, null, null, null,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				null, null, null, null, null, null,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
			],
		},
		34: {
			preview: [e.magnezone, e.exploud, e.lickilicky],
			wave: [
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone,
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				null, null, null, null, 
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone,
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone,
			],
		},
		35: {
			preview: [e.sigilyph],
			wave: [
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				e.sigilyph, e.sigilyph,
			],
		},
		36: {
			preview: [e.baltoy, e.exploud, e.lickilicky, e.sigilyph],
			wave: [
				e.lickilicky, e.lickilicky, 
				null, null, null, null,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.lickilicky, e.lickilicky,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,

				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
			],
		},
		37: {
			preview: [e.magnezone, e.exploud, e.lickilicky, e.sigilyph],
			wave: [
				e.magnezone, e.magnezone, e.magnezone, 
				e.lickilicky, e.lickilicky, 
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,

				e.lickilicky, e.lickilicky, e.magnezone, 
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.sigilyph, e.sigilyph, e.sigilyph, 
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, 
			],
		},
		38: {
			preview: [e.mightyena, e.drifloon, e.liepard, e.ninjask],
			wave: [
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,

				null, null, null, null,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				

				e.drifloon, e.drifloon, e.drifloon,

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				null, null, null, null, null, null, null, null,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				null, null, null, null, null, null, null, null,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
			],
		},
		39: {
			preview: [e.baltoy],
			wave: [
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
			],
		},
		40: {
			preview: [e.baltoy, e.claydol],
			wave: [
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol,

				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol,
			],
		},
		41: {
			preview: [e.cinccino, e.lickilicky, e.sigilyph, e.claydol,],
			wave: [
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, 
				e.lickilicky,
				e.claydol, e.claydol,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.lickilicky, 
				e.claydol,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, 
				e.claydol, e.claydol,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.lickilicky,
				e.claydol,
				e.lickilicky, 
				null, null,  
				e.claydol, e.claydol,
				null, null, null, null, null, 
				e.claydol, e.claydol, e.claydol, e.claydol,
				null, null, null, null, null, 
				e.claydol, e.claydol,
				null, null, null, null, null, 
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
			],
		},
		42: {
			preview: [e.drifloon, e.baltoy, e.claydol, e.drifblim],
			wave: [
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, 
				e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim,
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,

				e.claydol, e.claydol, e.claydol,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol, e.claydol, e.claydol,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol, e.claydol, e.claydol,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,

				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,

			],
		},
		43: {
			preview: [e.mightyena, e.yanma, e.sigilyph, e.claydol, e.drifblim],
			wave: [
				e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, 
				null, null, null, null, null, null, null, null,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				null, null, null, null, null, null, null, null,

				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,

				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,

				e.claydol, e.claydol, e.claydol,

				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,

				null, null, null, null,

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,	
			],
		},
		44: {
			preview: [e.drifloon, e.drifblim],
			wave: [
				e.drifloon, e.drifloon, e.drifblim, e.drifblim, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifblim, e.drifblim, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
				e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim,
				e.drifloon, e.drifloon, e.drifblim, e.drifblim, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifblim, e.drifblim, e.drifloon, e.drifloon, e.drifloon, e.drifloon,
			],
		},
		45: {
			preview: [e.magnezone, e.baltoy, e.claydol, e.delibird],
			wave: [
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone,
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone,

				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
				null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird,
			],
		},
		46: {
			preview: [e.drifloon, e.baltoy, e.claydol, e.drifblim],
			wave: [
				e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim,
				e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon, e.drifloon,

				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,

				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
			],
		},
		47: {
			preview: [e.yanma, e.liepard, e.cinccino, e.dragonair],
			wave: [
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, 
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,

				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				null, null, null, null, null, null, null, null, 
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,

				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				null, null, null, null, null, null, null, null,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,
				e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma, e.yanma,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,  

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				null, null, null, null, null, null, null, null, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				null, null, null, null, null, null, null, null, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
			],
		},
		48: {
			preview: [e.mightyena, e.liepard, e.exploud, e.lickilicky, e.claydol],
			wave: [
				e.lickilicky, e.lickilicky, e.lickilicky, e.lickilicky, e.lickilicky, 
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.claydol, e.claydol, e.claydol, e.claydol,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,  
				null, null, null, null, null, 
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,

				null, null, null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,
			],
		},
		49: {
			preview: [e.baltoy, e.magnezone, e.claydol, e.drifblim],
			wave: [
				e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim,
				e.magnezone, e.magnezone, e.magnezone, 
				e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim,
				e.magnezone, e.magnezone, e.magnezone, 

				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,

				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,

				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,

				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
			],
		},
		50: {
			preview: [e.magnezone, e.sigilyph, e.porygon2],
			wave: [
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, 

			],
		},
		51: { 
			preview: [e.drifblim, e.porygon2],
			wave: [
				e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim,

				e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, 
			] 
		},
		52: { 
			preview: [e.liepard, e.porygon2],
			wave: [
				e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 

				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 

				e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 

				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
			] 
		},
		53: { 
			preview: [e.baltoy, e.magnezone, e.lickilicky, e.sigilyph, e.claydol],
			wave: [
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.lickilicky,  
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, 
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
			] 
		},
		54: { 
			preview: [e.sigilyph, e.claydol, e.drifblim, e.porygon2],
			wave: [
				e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, 

				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,

				e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, 

				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 

				e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, 
			] 
		},
		55: {
			preview: [e.dragonair, e.magnezone, e.lickilicky],
			wave: [
				e.lickilicky, e.lickilicky, 

				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone,

				e.lickilicky, e.lickilicky,

				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
			],
		},
		56: { 
			preview: [e.lickilicky, e.sigilyph, e.claydol, e.drifblim, e.porygon2],
			wave: [
				e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,

				e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 

				e.sigilyph, e.sigilyph,
				e.lickilicky, e.lickilicky, 

				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.porygon2, e.porygon2, e.porygon2, 

				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,

				e.porygon2, e.porygon2, e.porygon2, 
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.porygon2, e.porygon2, e.porygon2, 

			] 
		},
		57: { 
			preview: [e.magnezone, e.exploud, e.lickilicky, e.sigilyph, e.claydol],
			wave: [
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				e.lickilicky,
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, 
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, 
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.lickilicky, 
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,

				e.claydol, e.claydol, e.claydol, e.claydol, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.claydol, e.claydol, e.claydol, e.claydol, 
			
			] 
		},
		58: { 
			preview: [e.exploud, e.lickilicky, e.sigilyph, e.porygon2],
			wave: [
				e.lickilicky,
				e.sigilyph, e.sigilyph, 
				e.lickilicky, 
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud,  
				e.sigilyph, e.sigilyph, 
				e.lickilicky,
				e.sigilyph, e.sigilyph, 
				e.lickilicky, 
				e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, 
				e.exploud, e.exploud, e.exploud, e.exploud, e.exploud, 
				e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2,
			] 
		},
		59: { 
			preview: [e.lickilicky, e.sigilyph, e.claydol, e.drifblim, e.porygon2],
			wave: [
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				null, null, null, null, null, null,
				e.drifblim, e.drifblim, 
				e.lickilicky, e.lickilicky,
				e.drifblim, e.drifblim, 
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
				null, null, null, null, null, null,
				e.porygon2, e.porygon2, e.porygon2, 

				e.sigilyph, e.sigilyph, e.sigilyph, 

				e.porygon2, e.porygon2, e.porygon2, 
	
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
			] 
		},
		60: { 
			preview: [e.yanma, e.yanmega],
			wave: [
				e.yanma, e.yanma, e.yanma, e.yanma, 
				null, null, null,
				e.yanma, e.yanma, e.yanma, e.yanma, 
				e.yanmega, e.yanmega, e.yanmega, 
			] 
		},
		61: { 
			preview: [e.magnezone, e.lickilicky, e.yanmega],
			wave: [
				e.yanmega, e.yanmega, e.yanmega, e.yanmega,
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				e.lickilicky, e.lickilicky, e.lickilicky, 
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				e.lickilicky, e.lickilicky, e.lickilicky,
			]
		},
		62: { 
			preview: [e.porygon2, e.yanmega],
			wave: [
				e.yanmega, e.yanmega, e.yanmega, 
				e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2,  
				e.yanmega, e.yanmega, e.yanmega,
				e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2,
			] 
		},
		63: { 
			preview: [e.liepard, e.lickilicky, e.baltoy, e.claydol, e.yanmega],
			wave: [
				e.yanmega, e.yanmega, e.yanmega, e.yanmega,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.lickilicky, e.lickilicky, e.lickilicky, e.lickilicky,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				e.yanmega, e.yanmega, e.yanmega, e.yanmega,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.lickilicky, e.lickilicky, e.lickilicky, e.lickilicky,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,

				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
				null, null, null, null, null, null, null, null, null, null,

				null, null, null, null, null, null, null, null, null, null,

				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, 
			] 
		},
		64: { 
			preview: [e.liepard, e.lickilicky, e.claydol, e.porygon2, e.yanmega],
			wave: [
				e.yanmega, e.yanmega, 
				e.lickilicky, 
				e.yanmega, e.yanmega,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
				null, null, null,
				e.lickilicky,
				null, null, null,
				e.porygon2, e.porygon2, e.porygon2, 
				e.yanmega, e.yanmega, 
				e.liepard, e.liepard, e.liepard, e.liepard,
				e.yanmega, e.yanmega, 
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
				e.lickilicky, 
				e.porygon2, e.porygon2, e.porygon2,

				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.liepard, e.liepard, e.liepard, e.liepard, 
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.liepard, e.liepard, e.liepard, e.liepard,  
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, 
				e.liepard, e.liepard, e.liepard, e.liepard, 
			] 
		},
		65: { 
			preview: [e.cinccino, e.magnezone, e.lickilicky, e.sigilyph, e.yanmega],
			wave: [
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				null, null, null, null, null, null, null, null, null, null,
				e.yanmega, e.yanmega, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				null, null, null, null, null, null, null, null, null, null,
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone,

				e.lickilicky, e.lickilicky,

				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
			] 
		},
		66: { 
			preview: [e.cinccino, e.sigilyph],
			wave: [
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,

				e.sigilyph, e.sigilyph, e.sigilyph,   
				null, null, null, null, null, null, null, null, null, null,
				e.sigilyph, e.sigilyph, e.sigilyph, 
				null, null, null, null, null, null, null, null, null, null,
				e.sigilyph, e.sigilyph, e.sigilyph, 
			] 
		},
		67: { 
			preview: [e.baltoy, e.claydol],
			wave: [
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
			] 
		},
		68: { 
			preview: [e.cinccino, e.yanmega, e.delibird],
			wave: [
				e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.yanmega, e.yanmega, e.yanmega, e.yanmega, 
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, 
				e.yanmega, e.yanmega, e.yanmega, e.yanmega, 
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
			] 
		},
		69: { 
			preview: [e.yanmega],
			wave: [
				e.yanmega, e.yanmega, e.yanmega, e.yanmega,
				null, null, null, null, null, null, null, 
				e.yanmega, e.yanmega, e.yanmega, e.yanmega, 
				null, null, null, null, null, null, null,
				e.yanmega, e.yanmega, e.yanmega, e.yanmega,  
			] 
		},
		70: { 
			preview: [e.magnezone, e.yanmega, e.ninjask],
			wave: [
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone,
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone,

				e.yanmega, e.yanmega, e.yanmega,
				null, null, null,
				e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask,
				e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask, e.ninjask,
				null, null, null,
				e.yanmega, e.yanmega, e.yanmega,
			] 
		},
		71: { 
			preview: [e.exploud, e.lickilicky, e.sigilyph, e.porygon2],
			wave: [
				e.lickilicky,
				e.sigilyph, e.sigilyph, e.sigilyph, 
				e.lickilicky,

				e.exploud, e.exploud, e.exploud, e.exploud, 
				e.lickilicky, 
				e.exploud, e.exploud, e.exploud, e.exploud, 

				e.porygon2, e.porygon2, e.porygon2, e.porygon2,

				e.sigilyph, e.sigilyph, e.sigilyph, 
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null,
				e.porygon2, e.porygon2, e.porygon2, e.porygon2,
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, 
				e.porygon2, e.porygon2, e.porygon2, e.porygon2, 
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, 
				e.porygon2, e.porygon2, e.porygon2, e.porygon2, 

			] 
		},
		72: { 
			preview: [e.lickilicky, e.claydol, e.porygon2, e.yanmega],
			wave: [
				e.yanmega, e.yanmega, 
				e.lickilicky, e.lickilicky, 
				e.yanmega, e.yanmega,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null,
				e.lickilicky, e.lickilicky, 
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null,
				e.porygon2, e.porygon2, 
				e.yanmega, e.yanmega, 
				e.porygon2, e.porygon2,  
				e.yanmega, e.yanmega,  
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null,
				e.porygon2, e.porygon2, e.porygon2, e.porygon2,

			] 
		},
		73: { 
			preview: [e.porygon2],
			wave: [
				e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2,
				e.porygon2, e.porygon2,  
				null, null, null, null, null, null, null, null,
				e.porygon2, e.porygon2,
				e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2,
			] 
		},
		74: { 
			preview: [e.magnezone, e.lickilicky, e.sigilyph, e.yanmega],
			wave: [
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				e.yanmega, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.lickilicky, 
				e.yanmega,
				e.lickilicky, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
			] 
		},
		75: { 
			preview: [e.lickilicky, e.drifblim],
			wave: [
				e.drifblim, e.drifblim, e.drifblim, e.drifblim, 
				e.lickilicky, e.lickilicky, e.lickilicky, e.lickilicky,
				null, null, null, null, null, null, null, null,
				e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim,
				e.lickilicky, e.lickilicky, e.lickilicky, e.lickilicky,
			] 
		},
		76: { 
			preview: [e.claydol, e.porygon2],
			wave: [
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.porygon2, e.porygon2, e.porygon2, e.porygon2,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.porygon2, e.porygon2, e.porygon2, e.porygon2,
			] 
		},
		77: { 
			preview: [e.magnezone, e.lickilicky, e.drifblim, e.porygon2, e.yanmega],
			wave: [
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				e.yanmega, e.yanmega, e.yanmega, e.yanmega, 
				e.porygon2, e.porygon2, e.porygon2, e.porygon2,
				e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim,
				e.lickilicky, e.lickilicky, e.lickilicky, e.lickilicky, 
				null, null, null, null, null,
				e.porygon2, e.porygon2, e.porygon2, e.porygon2,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygon2, e.porygon2, e.porygon2, e.porygon2,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygon2, e.porygon2, e.porygon2, e.porygon2,

			] 
		},
		78: { 
			preview: [e.drifblim, e.porygon2, e.yanmega],
			wave: [
				e.yanmega, e.yanmega, e.yanmega, e.yanmega, 
				null, null, null, null,
				e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim,
				null, null, null, null,
				e.yanmega, e.yanmega, e.yanmega, e.yanmega, 
				null, null, null, null,
				e.yanmega, e.yanmega, e.yanmega, e.yanmega,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2,
			] 
		},
		79: { 
			preview: [e.dratini],
			wave: [
				e.dratini,
			] 
		},
		80: { 
			preview: [e.dragonair, e.dragonite],
			wave: [
				e.dragonite,

				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
			] 
		},
		81: { 
			preview: [e.dratini, e.dragonite],
			wave: [
				e.dragonite, e.dragonite, 
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.dragonite, e.dragonite, 
			] 
		},
		82: { 
			preview: [e.porygon2, e.yanmega, e.dragonite],
			wave: [
				e.dragonite, 
				null, null,
				e.yanmega, e.yanmega, e.yanmega, e.yanmega,
				null, null,
				e.dragonite,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygon2, e.porygon2, e.porygon2, e.porygon2, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygon2, e.porygon2, e.porygon2, e.porygon2, 
				
			] 
		},
		83: { 
			preview: [e.magnezone, e.lickilicky, e.drifblim, e.yanmega, e.dragonite],
			wave: [
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				e.dragonite, e.dragonite,  
				e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, 
				e.yanmega,
				null, null, null, null, null, null,
				e.magnezone, e.magnezone, e.magnezone, 
				e.lickilicky, e.lickilicky, 
				e.magnezone, e.magnezone, e.magnezone, 
				e.lickilicky, e.lickilicky, 
				e.yanmega,  
			] 
		},
		84: { 
			preview: [e.mightyena, e.magnezone, e.dragonite],
			wave: [
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				e.dragonite, e.dragonite,  
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,  
			] 
		},
		85: { 
			preview: [e.delibird],
			wave: [
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
			] 
		},
		86: { 
			preview: [e.liepard, e.sigilyph, e.yanmega, e.dragonite], 
			wave: [
				e.dragonite,
				e.yanmega, e.yanmega, e.yanmega, e.yanmega, 
				null, null, null, null, null, null,
				e.yanmega, e.yanmega, e.yanmega, e.yanmega, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard, e.liepard,
				e.dragonite,
			] 
		},
		87: { 
			preview: [e.dratini, e.dragonair, e.dragonite],
			wave: [
				e.dragonite, e.dragonite, 
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				null, null, null, null, null, null,
				e.dragonite, e.dragonite,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
				null, null, null, null, null, null,
				e.dragonite, e.dragonite, 
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				null, null, null, null, null, null,
				e.dragonite, e.dragonite, 
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
			] 
		},
		88: { 
			preview: [e.claydol, e.drifblim, e.porygon2, e.yanmega],
			wave: [
				e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, 

				e.yanmega, e.yanmega, e.yanmega,

				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.drifblim, e.drifblim, e.drifblim, e.drifblim, e.drifblim, 

				e.yanmega, e.yanmega, e.yanmega, 

				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygon2, e.porygon2, e.porygon2,  

				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
			] 
		},
		89: { 
			preview: [e.claydol, e.drifblim, e.yanmega, e.dragonite],
			wave: [
				e.drifblim, e.drifblim, e.drifblim, 
				e.dragonite, 
				e.drifblim, 
				e.yanmega, 
				e.dragonite, 
				e.yanmega, 
				null, null, null, null, null, null,
				null, null, null, null,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				null, null, null,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				null, null, null, null, null,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.dragonite,
				e.yanmega, e.yanmega, e.yanmega, e.yanmega,
				null, null, null, null, null, null,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				null, null, null,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
				e.dragonite, 
				e.claydol, e.claydol, e.claydol,
				null, null, null, null,
				e.yanmega, 
				null, null, null,
				e.yanmega, e.yanmega, e.yanmega, 
				null, null, null,
				e.yanmega, e.yanmega, e.yanmega,
				
			] 
		},
		90: { 
			preview: [e.lickilicky, e.dragonite],
			wave: [
				e.dragonite, e.dragonite, e.dragonite,
				null, null, null, 
				e.lickilicky, e.lickilicky, e.lickilicky, e.lickilicky, e.lickilicky, e.lickilicky,				
			] 
		},
		91: { 
			preview: [e.drifblim, e.magnezone, e.lickilicky, e.yanmega, e.ninjask],
			wave: [
				e.lickilicky, e.magnezone, e.yanmega, e.ninjask, e.drifblim, e.ninjask,
				e.lickilicky, e.magnezone, e.yanmega, e.ninjask, e.drifblim, e.ninjask,
				e.lickilicky, e.magnezone, e.yanmega, e.ninjask, e.drifblim, e.ninjask,
				e.lickilicky, e.magnezone, e.yanmega, e.ninjask, e.drifblim, e.ninjask,
				e.lickilicky, e.magnezone, e.yanmega, e.ninjask, e.drifblim, e.ninjask,
				e.lickilicky, e.ninjask, e.yanmega, e.ninjask, e.lickilicky, 
				e.lickilicky, e.ninjask, e.yanmega, e.ninjask, e.lickilicky, 
				e.lickilicky, e.ninjask, e.yanmega, e.ninjask, e.lickilicky, 
				e.lickilicky, e.ninjask, null, e.ninjask, e.lickilicky, 
				e.lickilicky, e.ninjask, null, e.ninjask, e.lickilicky, 
			] 
		},
		92: { 
			preview: [e.dratini, e.dragonair, e.dragonite, e.ninjask],
			wave: [
				e.dragonite, e.dratini, e.ninjask, e.dragonair, e.dragonite, e.ninjask,
				e.dragonite, e.dratini, e.ninjask, e.dragonair, e.dragonair, e.ninjask,
				e.dragonite, e.dratini, e.ninjask, e.dragonair, e.dratini, e.ninjask,
				e.dragonite, e.dratini, e.ninjask, e.dragonair, e.dragonair, e.ninjask,
				e.dragonite, e.dratini, e.ninjask, e.dragonair, e.dragonite, e.ninjask,
			] 
		},
		93: { 
			preview: [e.claydol, e.dragonite, e.ninjask],
			wave: [
				e.dragonite, e.dragonite, 
			  	e.ninjask, e.ninjask, e.ninjask, e.ninjask, 
			  	e.ninjask, e.ninjask, e.ninjask, e.ninjask,
			  	e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
			  	e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
			  	e.dragonite, e.dragonite,  
			  	e.ninjask, e.ninjask, e.ninjask, e.ninjask, 
			  	e.ninjask, e.ninjask, e.ninjask, e.ninjask, 
			] 
		},
		94: { 
			preview: [e.liepard, e.lickilicky, e.claydol, e.porygon2, e.yanmega],
			wave: [
				e.yanmega, e.yanmega, e.yanmega, e.yanmega,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
				e.lickilicky, e.lickilicky, 
				e.porygon2, e.porygon2, e.porygon2, 
				e.yanmega, e.yanmega, 
				e.liepard, e.liepard, e.liepard, e.liepard,
				e.yanmega, e.yanmega, 
				e.liepard, e.liepard, e.liepard, e.liepard, 
				e.liepard, e.liepard, e.liepard, e.liepard, 
				e.liepard, e.liepard, e.liepard, e.liepard,  
				e.liepard, e.liepard, e.liepard, e.liepard, 
			] 
		},
		95: { 
			preview: [e.porygon2],
			wave: [
				e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2,
				e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2,
				e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2, e.porygon2,
			] 
		},
		96: { 
			preview: [e.dragonair],
			wave: [
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
			] 
		},
		97: { 
			preview: [e.magnezone, e.sigilyph, e.yanmega, e.dragonite],
			wave: [
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dragonite, e.dragonite,  
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.yanmega,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, e.magnezone, 
				e.yanmega,  
			] 
		},
		98: { 
			preview: [e.dratini, e.dragonair, e.dragonite],
			wave: [
				e.dragonite, e.dragonite, e.dragonite,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair, e.dragonair,
				e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini, e.dratini,
			] 
		},
		99: { 
			preview: [e.dragonite],
			wave: [
				e.dragonite, e.dragonite, 
				null, null, null, null,
				null, null, null, null,
				e.dragonite, e.dragonite, 
				null, null, null, null, 
				null, null, null, null,
				e.dragonite, e.dragonite, 
			] 
		},
		100: { 
			preview: [e.suicune], 
			wave: [
				e.suicune
			] 
		},
	},
	6: {
		1: {
			preview: [e.sentret],
			wave: [
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret,
			],
		},
		2: {
			preview: [e.sentret, e.ponyta],
			wave: [
				e.sentret, e.sentret, e.sentret, null, null, null,
				e.sentret, e.ponyta
			],
		},
		3: {
			preview: [e.sentret, e.ponyta],
			wave: [
				e.ponyta, e.ponyta, e.ponyta, 
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret,
				e.ponyta, e.ponyta, e.ponyta, 
			]
		},
		4: {
			preview: [e.sentret, e.ponyta],
			wave: [
				e.sentret, e.sentret, null, null, null,
				e.ponyta, e.ponyta, e.ponyta,
				e.sentret, e.sentret, e.sentret, e.sentret
			],
		},
		5: {
			preview: [e.sentret, e.swinub],
			wave: [
				e.sentret, e.sentret, e.sentret, e.sentret, 
				e.swinub, e.swinub, e.swinub,
			],
		},
		6: {
			preview: [e.ponyta, e.swinub],
			wave: [
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta
			],
		},
		7: {
			preview: [e.sentret, e.ponyta, e.swinub],
			wave: [
				e.swinub, e.swinub, e.swinub, e.swinub, 
				null, null, null, null, null, null, null, 
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, 
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, 
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, 
			],
		},
		8: {
			preview: [e.spearow],
			wave: [
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow,
			],
		},
		9: {
			preview: [e.sentret, e.swinub],
			wave: [
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret,	
			],
		},
		10: {
			preview: [e.sentret, e.combee],
			wave: [
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret,
				null, null, null, 
				e.combee, e.combee, e.combee, e.combee, e.combee, 
			],
		},
		11: {
			preview: [e.sentret, e.ponyta, e.swinub],
			wave: [
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				null, null, null, null, null, null, null, null, null, null, 
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret,
				null, null, null, null, null, null, null, null, null, null, 
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
			],
		},
		12: {
			preview: [e.spearow],
			wave: [
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow,
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow,
			],
		},
		13: {
			preview: [e.sentret, e.swinub, e.spearow],
			wave: [
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				null, null, null, null, null, 
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, 
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow,
			],
		},
		14: {
			preview: [e.swinub],
			wave: [
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
			],
		},
		15: {
			preview: [e.spearow, e.combee],
			wave: [
				e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee,
				null, null, null, null, null, null,  
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
			],	
		},
		16: {
			preview: [e.sentret, e.furret],
			wave: [
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, 
				null,
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, 
				null,
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret,
			],
		},
		17: {
			preview: [e.sentret, e.ponyta, e.furret],
			wave: [
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret,
				e.furret, e.furret, e.furret, e.furret,
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				e.furret, e.furret, e.furret, e.furret,
			],
		},
		18: {
			preview: [e.swinub, e.lotad],
			wave: [
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad,
			],
		},
		19: {
			preview: [e.lotad, e.furret],
			wave: [
				e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, 
				null, null, null,
				e.furret, e.furret, e.furret, e.furret, 
			],
		},
		20: {
			preview: [e.swinub, e.snover],
			wave: [
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, 
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
			],
		},
		21: {
			preview: [e.combee, e.lotad, e.furret, e.snover],
			wave: [
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.combee, e.combee, e.combee, 
				e.lotad, e.lotad, e.lotad, e.lotad, 
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, 
			],
		},
		22: {
			preview: [e.lotad, e.furret],
			wave: [
				e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad,
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret,	
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret,	
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret,		
			],
		},
		23: {
			preview: [e.sentret, e.ponyta, e.swinub],
			wave: [
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret,
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
			],
		},
		24: {
			preview: [e.spearow],
			wave: [
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow,
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow,
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow,
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow,
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow,
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow,
			],
		},
		25: {
			preview: [e.combee, e.snover, e.lotad, e.furret],
			wave: [
				e.snover, e.snover, e.snover, e.snover, 
				e.combee, e.combee, e.combee, e.combee, 
				e.snover, e.snover, e.snover, e.snover, 
				e.combee, e.combee, e.combee, e.combee, 
				e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, 
				e.furret, e.furret, e.furret, e.furret, e.furret,
				e.furret, e.furret, e.furret, e.furret, e.furret
			],
		},
		26: {
			preview: [e.swinub, e.snover],
			wave: [
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, null, null,
				e.snover, e.snover, e.snover, e.snover, e.snover, null, null,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,

			],
		},
		27: {
			preview: [e.sentret, e.ponyta, e.snover],
			wave: [
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret,
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret,
				
			],
		},
		28: {
			preview: [e.combee, e.snover, e.furret],
			wave: [
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee,
				null,
				e.furret, e.furret, e.furret,
				e.snover, e.snover, e.snover, e.snover,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret,
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret,
			],
		},
		29: {
			preview: [e.sentret, e.furret],
			wave: [
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret,
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, 
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret,
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret,
			],
		},
		30: {
			preview: [e.ponyta, e.rapidash],
			wave: [
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, 
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, 
				
			],
		},
		31: {
			preview: [e.lotad, e.lombre, e.delibird],
			wave: [
				e.lombre, e.lombre, 
				e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad,
				e.lombre, e.lombre, 
				e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad,
				e.lombre, e.lombre, 
				e.delibird,
			],
		},
		32: {
			preview: [e.sentret, e.furret],
			wave: [
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, null, null,
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, null, null,
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, null, null,
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, null, null,
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, null, null,
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret,
			],
		},
		33: {
			preview: [e.snover, e.lotad, e.spearow],
			wave: [
				e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.snover, e.snover, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,  
				e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad,	
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow,
			],
			
		},
		34: {
			preview: [e.sentret, e.ponyta, e.swinub, e.furret, e.rapidash],
			wave: [
				e.rapidash,
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				null, null, null, null, null, null, null, null, null, null, 

				e.furret, e.furret,  null, 
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret,
				null, null, null, 
				e.furret, e.furret,  null, 
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.rapidash,
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,		
			],
		},
		35: {
			preview: [e.rapidash, e.lombre, e.zoroark],
			wave: [
				e.zoroark, e.zoroark, e.zoroark,
				null, null, null, null, null, null,
				e.rapidash, e.rapidash, e.rapidash,
				
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, 
			],
		},
		36: {
			preview: [e.spearow],
			wave: [
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
			],
		},
		37: {
			preview: [e.sentret, e.ponyta, e.combee, e.snover, e.lotad],
			wave: [
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,

				e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, 
				e.combee, e.combee,

				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, 
				null, 
				e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, 
				null, null, null, null,
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, 
				null, 
				e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, 
			],
		},
		38: {
			preview: [e.swinub, e.snover, e.furret],
			wave: [
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, 
				e.furret, e.furret, e.furret, e.furret, e.furret, 

				e.snover, e.snover, e.snover, e.snover, e.snover,
				null,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				null,
				e.snover, e.snover, e.snover, e.snover, e.snover, 
				null,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, 
				null,
				e.snover, e.snover, e.snover, e.snover, e.snover,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, 
				e.furret, e.furret, e.furret, e.furret, e.furret, 
			],
		},
		39: {
			preview: [e.ponyta, e.lotad, e.rapidash, e.lombre],
			wave: [
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, 
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, 

				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, 
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
			],
		},
		40: {
			preview: [e.combee, e.vespiquen],
			wave: [
				e.combee, e.combee, e.combee, e.combee, e.combee,  e.combee, e.combee, null, null,
				e.combee, e.combee, e.combee,
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen,
				e.combee, e.combee, e.combee, null, null,
				e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee,
			],
		},
		41: {
			preview: [e.furret, e.rapidash],
			wave: [
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, 
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret,
				e.furret, e.furret, e.furret, e.furret, e.furret,
			],
		},
		42: {
			preview: [e.sentret, e.ponyta, e.furret, e.rapidash],
			wave: [
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, 
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,

				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret,
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret,
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret,
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null,
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, 
			],
			
		},
		43: {
			preview: [e.delibird],
			wave: [
				e.delibird, null,  null, e.delibird,  null,  null, e.delibird
			],
		},
		44: {
			preview: [e.snover, e.lotad, e.lombre],
			wave: [
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, 
				e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, 
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,

				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.snover, e.snover, e.snover, e.snover, e.snover,
			]
		},
		45: {
			preview: [e.snover, e.lotad, e.furret, e.rapidash, e.lombre],
			wave: [
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, 
				e.rapidash, e.rapidash, 
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.snover, e.snover, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, 
				e.lotad, e.lotad, 
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret,
				e.furret, e.furret,
			]
		},
		46: {
			preview: [e.ponyta, e.spearow, e.rapidash],
			wave: [
				e.spearow, e.spearow, 
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, 
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
			],
			
		},
		47: {
			preview: [e.sentret, e.ponyta, e.swinub, e.snover],
			wave: [
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.snover, e.snover,
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, 
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, 
			],
		},
		48: {
			preview: [e.swinub, e.snover, e.furret, e.rapidash],
			wave: [
				e.rapidash, e.rapidash, e.rapidash, 
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.swinub, e.swinub,
				e.rapidash, e.rapidash, e.rapidash,
				null, null, null, null, null, null,
				e.furret, e.furret, e.furret, e.furret, e.furret,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.rapidash, e.rapidash, e.rapidash,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.rapidash, e.rapidash, e.rapidash,
				
			],
		},
		49: {
			preview: [e.spearow, e.lombre],
			wave: [
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				null, null, null,
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
			],
		},
		50: {
			preview: [e.swinub, e.piloswine],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine,	
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,			
			],
		},
		51: {
			preview: [e.furret, e.rapidash, e.vespiquen],
			wave: [
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, 
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, 
				e.furret, e.furret, e.furret, e.furret, e.furret, 
			],
		},
		52: {
			preview: [e.swinub, e.vespiquen, e.piloswine],
			wave: [
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, 
				e.piloswine,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, 
				e.piloswine, 
			],
		},
		53: {
			preview: [e.ponyta, e.rapidash],
			wave: [
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.rapidash, e.rapidash, e.rapidash, 
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.rapidash, e.rapidash, e.rapidash, 
			],
		},
		54: {
			preview: [e.swinub, e.combee, e.vespiquen, e.piloswine],
			wave: [
				e.vespiquen, e.vespiquen, e.vespiquen,
				e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee,
				e.vespiquen, e.vespiquen, e.vespiquen,

				e.piloswine, e.piloswine, e.piloswine,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.piloswine, e.piloswine, e.piloswine,

				e.vespiquen, e.vespiquen, e.vespiquen,
				e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee,
				e.vespiquen, e.vespiquen, e.vespiquen,	 
			],
		},
		55: {
			preview: [e.piloswine, e.spearow],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,  
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow,
			],
		},
		56: {
			preview: [e.swinub, e.lombre, e.vespiquen, e.piloswine],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, 
				e.vespiquen, e.vespiquen,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.vespiquen, e.vespiquen,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, 
				e.vespiquen, e.vespiquen,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
			],
		},
		57: {
			preview: [e.sentret, e.ponyta, e.swinub, e.combee],
			wave: [
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				e.swinub, e.swinub, e.swinub, e.swinub, 
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				null, null, null, null, null, null,
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				null, null, null, null,
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret,
				e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, e.sentret, 
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				null, null, null, null,
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				e.combee, e.combee, e.combee, e.combee, e.combee, 
				e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee,
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				null, null, null, null, null, null, null, null,
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
			],	
		},
		58: {
			preview: [e.rapidash, e.piloswine],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.piloswine, e.piloswine, e.piloswine, 
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.rapidash, e.rapidash, e.rapidash,  
			],
		},
		59: {
			preview: [e.spearow],
			wave: [
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
			],
			
		},
		60: {
			preview: [e.spearow, e.fearow],
			wave: [
				e.spearow, e.spearow, e.spearow,
				e.fearow, e.fearow, e.fearow, e.fearow,
				e.spearow, e.spearow, e.spearow,
				e.fearow, e.fearow, e.fearow, e.fearow, 
				e.spearow, e.spearow, e.spearow,
			],
		},
		61: {
			preview: [e.furret, e.rapidash, e.vespiquen, e.piloswine],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				null, null, null, null, null, null, 
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				null, null, null, null, null, null, 
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen,
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, 
			],
		},
		62: {
			preview: [e.ponyta, e.swinub, e.rapidash, e.vespiquen, e.piloswine],
			wave: [
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, 
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, 
			],
		},
		63: {
			preview: [e.piloswine, e.fearow],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow,
			],
		},
		64: {
			preview: [e.ponyta, e.spearow, e.snover, e.piloswine, e.fearow],
			wave: [
				e.snover, e.snover, e.snover, e.piloswine, e.piloswine, e.piloswine, e.snover, e.snover, e.snover, 
				e.piloswine, e.piloswine, e.piloswine, e.snover, e.snover, e.snover, e.piloswine, e.piloswine, e.piloswine,

				null, null, null, null, null, null, null, null, null, null, null, null,
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,

				null, null, null, null, null, null, null, null, null, null, null, null,
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow,
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, 
				e.fearow, e.fearow,  e.fearow, 
				null, null, null, null, null, null,
				e.fearow, e.fearow, e.fearow,  
				null, null, null, null, null, null,
				e.fearow, e.fearow, e.fearow, 
			],
		},
		65: {
			preview: [e.combee, e.furret, e.piloswine],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,

				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				null, null, null, null, null, null, null, null, null,
				e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee,
				e.combee, e.combee,

				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret,
				e.furret, e.furret,

				
			],
		},
		66: {
			preview: [e.rapidash, e.vespiquen, e.piloswine, e.fearow, e.lombre],
			wave: [
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, 
				e.fearow, e.fearow,
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, 
				e.fearow, e.fearow,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.fearow, e.fearow,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.fearow, e.fearow,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.fearow, e.fearow,

			],
		},
		67: {
			preview: [e.fearow, e.zoroark],
			wave: [
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				null, null, null, null, null, null, null, null, null,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				null, null, null, null, null, null, null, null, null,
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				null, null, null, null, null, null, null, null, null,
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
			],
		},
		68: {
			preview: [e.vespiquen, e.fearow, e.zoroark],
			wave: [
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.fearow, e.fearow, e.fearow, 
				e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				null, null, null, null, null, null,
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.fearow, e.fearow, e.fearow, 
				e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				null, null, null, null, null, null,
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.fearow, e.fearow, e.fearow, 
				e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				null, null, null, null, null, null,
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.fearow, e.fearow, e.fearow, 
			],
		},
		69: {
			preview: [e.piloswine, e.fearow, e.zoroark],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				null, null, null, null, null, null, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				null, null, null, null, null, null, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				null, null, null, null, null, null, 
				null, null, null, null,  e.fearow, e.fearow, e.fearow, e.fearow, e.fearow,
			],
		},
		70: {
			preview: [e.lotad, e.lombre, e.snorlax],
			wave: [
				e.snorlax, 
				null, null, null, null, null, null, null, null ,null, null, null, null, null, null, null,
				e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad, e.lotad,
			],
		},
		71: {
			preview: [e.vespiquen, e.fearow, e.snorlax],
			wave: [
				e.snorlax,
				null, null, null, null, null, null, null, null ,null, null, null, null, null, null, null,
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen,
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen,
				e.fearow, e.fearow,  
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen,
				e.fearow, e.fearow, 
				null, null, null,
				e.fearow, e.fearow, 
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, 
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen,
				e.fearow, e.fearow,  
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen,
				e.fearow, e.fearow,
				null, null, null,
				e.fearow, e.fearow, 
			],
		},
		72: {
			preview: [e.snorlax],
			wave: [
				e.snorlax, e.snorlax,  e.snorlax
			],
		},
		73: {
			preview: [e.rapidash, e.vespiquen, e.fearow],
			wave: [
				e.rapidash, e.vespiquen, e.fearow, e.rapidash, e.vespiquen, e.fearow, e.rapidash, e.vespiquen, e.fearow,
				e.rapidash, e.vespiquen, e.fearow, e.rapidash, e.vespiquen, e.fearow, e.rapidash, e.vespiquen, e.fearow,
				e.rapidash, e.vespiquen, e.fearow, e.rapidash, e.vespiquen, e.fearow, e.rapidash, e.vespiquen, e.fearow,
				e.rapidash, e.vespiquen, e.fearow, e.rapidash, e.vespiquen, e.fearow, e.rapidash, e.vespiquen, e.fearow,

			],
		},
		74: {
			preview: [e.rapidash, e.vespiquen, e.piloswine, e.fearow, e.zoroark],
			wave: [
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark,
			],
		},
		75: {
			preview: [e.snorlax, e.zoroark],
			wave: [
				e.snorlax, e.snorlax, e.snorlax, e.snorlax, 
				null, null, null, null, null, null,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, 
			],
		},
		76: {
			preview: [e.combee, e.snover, e.rapidash, e.vespiquen],
			wave: [
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.snover, e.snover, e.snover, e.snover, e.snover,
				e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee,
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen,
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen,
				e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee, e.combee,
				e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen, e.vespiquen,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, 
			],
		},
		77: {
			preview: [e.piloswine, e.lombre, e.snorlax],
			wave: [
				e.snorlax, e.snorlax,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, 
			],
		},
		78: {
			preview: [e.ponyta, e.rapidash],
			wave: [
				e.rapidash, e.rapidash, e.rapidash,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta, e.ponyta,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.rapidash, e.rapidash, e.rapidash,
			],
		},
		79: {
			preview: [e.delibird],
			wave: [
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, 
				null, null, null,
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, 
			],
		},
		80: {
			preview: [e.tauros, e.miltank],
			wave: [
				e.tauros, e.miltank
			],
		},
		81: {
			preview: [e.spearow, e.fearow],
			wave: [
				e.spearow, e.spearow, e.spearow, e.spearow, e.fearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
				e.spearow, e.spearow, e.spearow, e.spearow, e.fearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
				e.spearow, e.spearow, e.spearow, e.spearow, e.fearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow,

			],
		},
		82: {
			preview: [e.spearow, e.fearow, e.lombre],
			wave: [
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, 
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, 
				e.fearow, e.fearow, e.fearow, e.fearow, 
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
				e.fearow, e.fearow, e.fearow, e.fearow, 
				e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
				e.fearow, e.fearow, e.fearow, e.fearow, 
			],
		},
		83: {
			preview: [e.snorlax, e.miltank],
			wave: [
				e.miltank, e.snorlax, e.snorlax, e.snorlax,
			],
		},
		84: {
			preview: [e.snorlax, e.tauros],
			wave: [
				e.tauros, e.snorlax, e.snorlax, e.snorlax,
			],
		},
		85: {
			preview: [e.snorlax, e.tauros, e.miltank],
			wave: [
				e.tauros, 
				e.miltank,
				null, null, null, null,
				e.snorlax, e.snorlax, e.snorlax,
			],
		},
		86: {
			preview: [e.piloswine, e.miltank],
			wave: [
				e.miltank, e.miltank,
				null, null, null, null, null,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				
			],
		},
		87: {
			preview: [e.piloswine, e.tauros],
			wave: [
				e.tauros, e.tauros,
				null, null, null, null, null,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
			],
		},
		88: {
			preview: [e.swinub, e.snover, e.piloswine, e.tauros, e.miltank],
			wave: [
				e.miltank, 
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.tauros,
			],
		},
		89: {
			preview: [e.lotad, e.lombre, e.ludicolo, e.zoroark],
			wave: [
				e.lotad, e.lombre, e.lotad, e.lombre, e.lotad, e.lombre, e.lotad, e.lombre, e.lotad, e.lombre,
				e.lombre, e.ludicolo, e.ludicolo, e.ludicolo, e.lombre, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.lombre,
				e.lotad, e.lombre, e.lotad, e.lombre, e.lotad, 

				e.zoroark, e.zoroark, e.zoroark,

				null, null, null, null,

				e.zoroark, e.zoroark, e.zoroark,

				e.lotad, e.lombre, e.lotad, e.lombre, e.lotad, e.lombre, e.lotad, e.lombre, e.lotad, e.lombre,
				e.lombre, e.ludicolo, e.ludicolo, e.ludicolo, e.lombre, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.lombre,
				e.lotad, e.lombre, e.lotad, e.lombre, e.lotad, 

				e.zoroark, e.zoroark, e.zoroark, null, null,

				null, null, null, null, null, null, null, null,

				e.zoroark, e.zoroark, e.zoroark, 

				null, null, null, null, null, null, null, null, null, null, null,

				e.zoroark, e.zoroark, e.zoroark,

				null, null, null, null, null, null, null, null,

				e.zoroark, e.zoroark, e.zoroark, 

				null, null, null, null, null, null, null, null, null, null, null,

				e.zoroark, e.zoroark, e.zoroark,
			],
		},
		90: {
			preview: [e.piloswine, e.dusclops, e.zoroark],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.dusclops, e.dusclops,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.zoroark, e.zoroark, e.zoroark,
				null, null, 
				e.zoroark, e.zoroark, e.zoroark,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.zoroark, e.zoroark, e.zoroark,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.dusclops, e.dusclops,
				null, null, null, null, 
				e.zoroark, e.zoroark, e.zoroark,
				e.dusclops, e.dusclops,
				e.zoroark, e.zoroark, e.zoroark,
				null, null, null, null,
				e.dusclops, e.dusclops,
				e.zoroark, e.zoroark, e.zoroark,
			],
		},
		91: {
			preview: [e.spearow, e.fearow, e.zoroark],
			wave: [
				e.zoroark, e.zoroark, e.zoroark,
				null, null, null,
				e.spearow, e.spearow, e.spearow, e.spearow, e.fearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
				e.zoroark, e.zoroark, e.zoroark,
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				e.spearow, e.spearow, e.spearow, e.spearow, e.fearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
				null, null, null,
				e.spearow, e.spearow, e.spearow, e.spearow, e.fearow, e.spearow, e.spearow, e.spearow, e.spearow, e.spearow, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow,

			],
		},
		92: {
			preview: [e.furret, e.rapidash, e.vespiquen, e.fearow],
			wave: [
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.vespiquen, e.vespiquen,
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow,
				e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret, e.furret,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.vespiquen, e.vespiquen,
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				null, null, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow,
				null, null, null, null, null, null, null, null, null, null,
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow,
				null, null, null, null, null, null, null, null, null, null,
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow,

			],
		},
		93: {
			preview: [e.snorlax, e.dusclops],
			wave: [
				e.snorlax,
				null, null,
				e.dusclops, e.snorlax,
				null, null, 
				e.dusclops, e.snorlax,
				null, null, 
				e.dusclops, e.snorlax,
			],
		},
		94: {
			preview: [e.miltank, e.dusclops],
			wave: [
				e.dusclops, e.dusclops, e.dusclops,
				null, null, null, null,
				e.miltank, e.miltank, e.miltank,
			],
		},
		95: {
			preview: [e.tauros, e.dusclops],
			wave: [
				e.dusclops, e.dusclops, e.dusclops,
				null, null, null, null,
				e.tauros, e.tauros, e.tauros, 
				
			],	
		},
		96: {
			preview: [e.tauros, e.miltank, e.dusclops],
			wave: [
				e.tauros, e.miltank, e.tauros, 
				null, null, 
				e.miltank, e.tauros, e.miltank,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
			],
		},
		97: {
			preview: [e.ponyta, e.spearow, e.tauros],
			wave: [
				e.tauros, 
				e.spearow, e.ponyta, e.spearow, e.ponyta, e.spearow, e.ponyta, e.spearow, e.ponyta, e.spearow, e.ponyta, e.spearow, e.ponyta, e.spearow, e.ponyta,
				e.tauros, 
				e.spearow, e.ponyta, e.spearow, e.ponyta, e.spearow, e.ponyta, e.spearow, e.ponyta, e.spearow, e.ponyta, e.spearow, e.ponyta, e.spearow, e.ponyta,
				e.tauros, 
				e.spearow, e.ponyta, e.spearow, e.ponyta, e.spearow, e.ponyta, e.spearow, e.ponyta, e.spearow, e.ponyta, e.spearow, e.ponyta, e.spearow, e.ponyta,
			],
		},
		98: {
			preview: [e.rapidash, e.fearow, e.miltank],
			wave: [
				e.miltank, e.miltank, e.miltank, e.miltank, 
				e.fearow, e.rapidash, e.fearow, e.rapidash, e.fearow, e.rapidash, e.fearow, e.rapidash, e.fearow, e.rapidash, e.fearow, e.rapidash, e.fearow, e.rapidash,
				e.fearow, e.rapidash, e.fearow, e.rapidash, e.fearow, e.rapidash, e.fearow, e.rapidash, e.fearow, e.rapidash, e.fearow, e.rapidash, e.fearow, e.rapidash,
				e.fearow, e.rapidash, e.fearow, e.rapidash, e.fearow, e.rapidash, e.fearow, e.rapidash, e.fearow, e.rapidash, e.fearow, e.rapidash, e.fearow, e.rapidash,
			],
		},
		99: {
			preview: [e.snorlax, e.tauros, e.miltank, e.dusclops],
			wave: [
				e.snorlax, e.snorlax, e.snorlax,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
				null, null, null,
				e.tauros, 
				null, null, null,
				e.snorlax, e.miltank, 
				
			],
		},
		100: {
			preview: [e.regirock],
			wave: [
				e.regirock
			],
		},
	},
	7: {
		1: {
			preview: [e.weedle],
			wave: [
				e.weedle, e.weedle, e.weedle, e.weedle, e.weedle, e.weedle, e.weedle, e.weedle, e.weedle, e.weedle,
				e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle,	
				e.weedle, e.weedle,	e.weedle, e.weedle, 
			],
		},
		2: {
			preview: [e.weedle, e.kakuna],
			wave: [
				e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle, 
			],
		},
		3: {
			preview: [e.kakuna],
			wave: [
				e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, 
				e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, 
			],
		},
		4: {
			preview: [e.weedle, e.kakuna, e.snover],
			wave: [
				
				e.snover, e.snover, 
				null, null, null, null,
				e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle, 
				null, null, null, null,
				e.snover, e.snover, 
				e.kakuna, e.kakuna, e.kakuna, e.kakuna, 
				e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle, 
			],
		},
		5: {
			preview: [e.weedle, e.kakuna],
			wave: [
				e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, 
				e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle, e.weedle, e.weedle,
			],
		},
		6: {
			preview: [e.weedle, e.kakuna, e.snover],
			wave: [
				e.snover, 
				e.kakuna, e.kakuna, e.kakuna,
				e.weedle, e.weedle,	e.weedle, 
				e.kakuna, e.kakuna, e.kakuna,
				e.snover,
				e.kakuna, e.kakuna, e.kakuna,
				e.weedle, e.weedle, e.weedle,	e.weedle, e.weedle, 
			],
		},
		7: {
			preview: [e.kakuna, e.snover],
			wave: [
				e.snover, e.snover, e.snover, e.snover,
				e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.snover, e.snover, e.snover, e.snover,  
				
			],
		},
		8: {
			preview: [e.kakuna, e.paras],
			wave: [
				e.paras, e.paras, e.paras, 
				e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, 
				e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, 
			],
		},
		9: {
			preview: [e.weedle, e.kakuna],
			wave: [
				e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, 
				e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle, 
				e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, 
				null, null, null, null, null, null, null,
				e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle,
			],
		},
		10: {
			preview: [e.weedle, e.kakuna, e.beedrill],
			wave: [
				e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, 
				e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle, 
			],
		},
		11: {
			preview: [e.paras],
			wave: [
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras,
			],
		},
		12: {
			preview: [e.snover, e.paras],
			wave: [
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, 
			],
		},
		13: {
			preview: [e.paras, e.beedrill],
			wave: [
				e.paras, e.paras, e.paras, e.beedrill, null,
				e.paras, e.paras, e.paras, e.beedrill, null,
				e.paras, e.paras, e.paras, e.beedrill,

			],
		},
		14: {
			preview: [e.weedle, e.kakuna, e.beedrill],
			wave: [
				e.beedrill, e.beedrill, e.beedrill, 
				e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna,
				e.beedrill, e.beedrill, e.beedrill, 
				e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle, 
				e.beedrill, e.beedrill, e.beedrill, 
			],
		},
		15: {
			preview: [e.piloswine],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, 
			],
		},
		16: {
			preview: [e.piloswine, e.lombre],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, 
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
			],
		},
		17: {
			preview: [e.kakuna, e.piloswine],
			wave: [
				e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.piloswine, e.piloswine,
				e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.piloswine, e.piloswine, 
				e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.piloswine, e.piloswine,
			],
		},
		18: {
			preview: [e.paras, e.beedrill],
			wave: [
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, 
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, 
			],
		},
		19: {
			preview: [e.snover, e.piloswine],
			wave: [
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				null, e.piloswine, null, e.piloswine, null, e.piloswine,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				null, e.piloswine, null, e.piloswine, null, e.piloswine,
				
			],
		},
		20: {
			preview: [e.snover, e.abomasnow],
			wave: [
				e.abomasnow, e.abomasnow, e.abomasnow,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,  e.snover, e.snover, e.snover, e.snover, 
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,  e.snover, e.snover, e.snover, e.snover, 
			],
		},
		21: {
			preview: [e.weedle, e.kakuna, e.beedrill],
			wave: [
				e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna,
				e.beedrill, e.beedrill, e.beedrill,
				e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle, 
				e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle, 
				e.beedrill, e.beedrill, e.beedrill,
				e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle,
				e.beedrill, e.beedrill, e.beedrill,
				null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null,
				e.beedrill, e.beedrill, e.beedrill,
			],
		},
		22: {
			preview: [e.paras, e.lombre],
			wave: [
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras,  
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras,  
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras,  
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras,  
			],
		},
		23: {
			preview: [e.piloswine, e.lombre],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				null, null,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
			],
		},
		24: {
			preview: [e.paras, e.lombre],
			wave: [
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras,  
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, 
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, 
			],
		},
		25: {
			preview: [e.weedle, e.kakuna, e.paras, e.beedrill],
			wave: [
				e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, 
				e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle, 
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, 
			],
		},
		26: {
			preview: [e.piloswine, e.abomasnow, e.delibird],
			wave: [
				e.abomasnow, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				null, null, null, null, null, null,
				e.delibird, e.delibird, 
			],
		},
		27: {
			preview: [e.paras, e.lombre, e.beedrill],
			wave: [
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, 
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, 
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, 
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, 
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, 
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, 
			],
		},
		28: {
			preview: [e.snover, e.abomasnow],
			wave: [
				e.abomasnow,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				null, null, null, null, null,
				e.abomasnow, 
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				null, null, null, null, null, 
				e.abomasnow,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
			],
		},
		29: {
			preview: [e.paras, e.beedrill],
			wave: [
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, 
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, 
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
			],
		},
		30: {
			preview: [e.paras, e.beedrill, e.parasect],
			wave: [
				e.beedrill, e.beedrill, e.beedrill, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, 
				null, null, null,
				e.parasect, e.parasect, e.parasect,
				e.beedrill, e.beedrill, e.beedrill, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, 
				null, null, null,
				e.parasect, e.parasect, e.parasect,
				e.beedrill, e.beedrill, e.beedrill, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, 
				null, null, null, 
				e.parasect, e.parasect, e.parasect,
				e.beedrill, e.beedrill, e.beedrill, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, 
				e.parasect, e.parasect, e.parasect,
			],
		},
		31: {
			preview: [e.snover, e.abomasnow],
			wave: [
				e.abomasnow, e.abomasnow,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.abomasnow, e.abomasnow,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,  
				e.abomasnow, e.abomasnow,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.abomasnow, e.abomasnow,
			],
		},
		32: {
			preview: [e.weedle, e.kakuna, e.paras, e.beedrill, e.parasect],
			wave: [
				e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna,
				e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle,	e.weedle, e.weedle, e.weedle, e.weedle, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, 
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, 
			],
		},
		33: {
			preview: [e.paras, e.parasect, e.zoroark],
			wave: [
				e.paras, e.paras, e.paras,
				e.parasect, 
				e.paras, e.paras, e.paras,
				e.parasect, 
				e.paras, e.paras, e.paras,
				e.parasect, 
				e.paras, e.paras, e.paras,
				e.parasect, 
				e.paras, e.paras, e.paras,
				e.parasect, 
				e.paras, e.paras, e.paras,
				e.parasect, 
				e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark,
			],
		},
		34: {
			preview: [e.abomasnow, e.zoroark],
			wave: [
				e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, 
				e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark,
			],
		},
		35: {
			preview: [e.kakuna, e.paras, e.beedrill, e.parasect, e.zoroark],
			wave: [
				e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna, e.kakuna,
				e.zoroark, e.zoroark,	e.zoroark, e.zoroark, e.zoroark, e.zoroark,	e.zoroark, e.zoroark, e.zoroark, e.zoroark, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, 
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, 
				e.zoroark, e.zoroark,	e.zoroark, e.zoroark, e.zoroark, e.zoroark,	e.zoroark, e.zoroark, e.zoroark, e.zoroark, 
			],
		},
		36: {
			preview: [e.paras, e.beedrill, e.piloswine, e.lombre, e.numel],
			wave: [
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
			],
		},
		37: {
			preview: [e.paras, e.parasect, e.numel],
			wave: [
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras,
				e.parasect, e.parasect, e.parasect
			],
		},
		38: {
			preview: [e.beedrill, e.parasect],
			wave: [
				e.parasect, e.parasect, e.parasect, 
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.parasect, e.parasect, e.parasect,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.parasect, e.parasect, e.parasect,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.parasect, e.parasect, e.parasect,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.parasect, e.parasect, e.parasect,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.parasect, e.parasect, e.parasect,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
			],
		},
		39: {
			preview: [e.lombre],
			wave: [
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
			],
		},
		40: {
			preview: [e.lombre, e.ludicolo],
			wave: [
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.ludicolo, e.ludicolo, e.ludicolo, 
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				
			],
		},
		41: {
			preview: [e.beedrill, e.parasect, e.zoroark, e.delibird],
			wave: [
				e.delibird,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.delibird,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.delibird,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				e.delibird,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark,
			],
		},
		42: {
			preview: [e.beedrill, e.abomasnow],
			wave: [
				e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, 
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, 
				e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, 
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, 
			],
		},
		43: {
			preview: [e.piloswine, e.lombre, e.numel, e.ludicolo],
			wave: [
				e.ludicolo, e.ludicolo,
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.lombre, e.lombre, e.lombre, 
				e.piloswine, e.piloswine, e.piloswine, 
				e.ludicolo, e.ludicolo,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, 
				e.piloswine, e.piloswine, e.piloswine, 
				e.lombre, e.lombre, e.lombre, e.lombre, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
			],
		},
		44: {
			preview: [e.paras, e.beedrill, e.parasect, e.ludicolo],
			wave: [
				e.ludicolo, e.ludicolo, e.ludicolo,
				e.parasect, e.parasect, e.parasect, e.beedrill, e.paras, e.beedrill, e.parasect, e.paras, e.parasect, e.parasect,
				e.paras, e.paras, e.beedrill, e.paras, e.parasect, e.beedrill, e.beedrill, e.parasect, e.paras, e.paras,
				e.ludicolo, e.ludicolo, e.ludicolo,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.paras, e.beedrill, e.parasect, e.beedrill, e.parasect, e.beedrill, e.beedrill, e.parasect, e.parasect, e.beedrill,
			],
		},
		45: {
			preview: [e.abomasnow, e.parasect, e.ludicolo],
			wave: [
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, 
				e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, 
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				null, null, null, null,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				null, null, null, null,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
			],
		},
		46: {
			preview: [e.paras, e.beedrill, e.parasect],
			wave: [
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras,
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,

				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras,
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,

				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras,
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
			],
		},
		47: {
			preview: [e.lombre, e.ludicolo, e.zoroark],
			wave: [
				e.lombre, e.lombre, e.lombre, e.lombre,
				e.ludicolo, e.ludicolo, 
				e.lombre, e.lombre, e.lombre, e.lombre,
				e.ludicolo, e.ludicolo, 
				e.lombre, e.lombre, e.lombre, e.lombre,
				e.ludicolo, e.ludicolo, 
				e.lombre, e.lombre, e.lombre, e.lombre,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				null, null, null, null, null, null, null, null,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				null, null, null, null, null, null, null, null,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark,
			],
		},
		48: {
			preview: [e.beedrill, e.parasect, e.numel],
			wave: [
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
			],
		},
		49: {
			preview: [e.snover, e.piloswine, e.abomasnow],
			wave: [
				e.abomasnow,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.abomasnow, e.abomasnow, e.abomasnow,
				e.abomasnow, e.abomasnow, e.abomasnow,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.abomasnow,
			],
		},
		50: {
			preview: [e.piloswine, e.mamoswine],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.mamoswine, e.mamoswine, e.mamoswine,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
			],
		},
		51: { 
			preview: [e.piloswine, e.dusclops, e.zoroark],
			wave: [
				e.dusclops, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				null, null, null, null, null, null,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark,
			] 
		},
		52: { 
			preview: [e.numel, e.mamoswine, e.dusclops],
			wave: [
				e.dusclops, e.dusclops, 
				e.mamoswine, e.mamoswine,
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, 
				e.dusclops, e.dusclops, 
			] 
		},
		53: { 
			preview: [e.lombre, e.ludicolo],
			wave: [
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
			] 
		},
		54: { 
			preview: [e.abomasnow, e.numel, e.mamoswine, e.dusclops],
			wave: [
				e.dusclops, e.dusclops, e.dusclops, 
				e.numel, e.numel, e.numel, e.numel, e.numel, 
				e.mamoswine, e.mamoswine, e.mamoswine,
				e.abomasnow, e.abomasnow, e.abomasnow,
			] 
		},
		55: { 
			preview: [e.numel, e.dusclops],
			wave: [
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
			] 
		},
		56: { 
			preview: [e.snover, e.dusclops],
			wave: [
				e.dusclops, e.dusclops, e.dusclops, 
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.dusclops, e.dusclops, e.dusclops,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.dusclops, e.dusclops, e.dusclops, 
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.dusclops, e.dusclops, e.dusclops, 
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.dusclops, e.dusclops, e.dusclops, 
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
			] 
		},
		57: { 
			preview: [e.mamoswine],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,
				null, null, null, null, null, null, null, null,
				 e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,
			] 
		},
		58: { 
			preview: [e.piloswine, e.mamoswine, e.dusclops],
			wave: [
				e.dusclops, e.dusclops,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,

			] 
		},
		59: { 
			preview: [e.dusclops],
			wave: [
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops,
			] 
		},
		60: { 
			preview: [e.dusclops, e.dusknoir],
			wave: [
				e.dusknoir, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
			] 
		},
		61: { 
			preview: [e.paras, e.mamoswine, e.dusclops],
			wave: [
				e.dusclops, e.dusclops, e.dusclops, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras,
				e.mamoswine, e.mamoswine,  
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras,
				e.dusclops, e.dusclops, e.dusclops, 
				e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras, e.paras,
			] 
		},
		62: { 
			preview: [e.beedrill],
			wave: [
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
			] 
		},
		63: { 
			preview: [e.beedrill, e.parasect, e.ludicolo],
			wave: [
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				 e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				 e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				 e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill,
			] 
		},
		64: { 
			preview: [e.dusknoir],
			wave: [
				e.dusknoir, e.dusknoir, e.dusknoir,
			] 
		},
		65: { 
			preview: [e.piloswine, e.abomasnow, e.numel, e.mamoswine],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow,
			] 
		},
		66: { 
			preview: [e.lombre, e.ludicolo],
			wave: [
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
			] 
		},
		67: { 
			preview: [e.abomasnow, e.numel, e.mamoswine, e.dusclops],
			wave: [
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops,
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.mamoswine, e.mamoswine, e.mamoswine, 
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow,
			] 
		},
		68: { 
			preview: [e.parasect],
			wave: [
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
			] 
		},
		69: { 
			preview: [e.numel, e.mamoswine, e.dusclops],
			wave: [
				e.dusclops, e.dusclops, e.dusclops,
				e.mamoswine, 
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.mamoswine, 
				e.dusclops, e.dusclops, e.dusclops,
			] 
		},
		70: { 
			preview: [e.piloswine, e.numel, e.dusclops, e.camerupt],
			wave: [
				e.camerupt,
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.dusclops, e.dusclops, e.dusclops, e.dusclops,
			] 
		},
		71: { 
			preview: [e.mamoswine, e.dusclops, e.dusknoir],
			wave: [
				e.dusknoir,
				null, null, null,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops,  
				null, null, null, null, null, null,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
				null, null, null,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
			] 
		},
		72: { 
			preview: [e.numel, e.camerupt],
			wave: [
				e.camerupt, e.camerupt,
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, 
				e.camerupt, e.camerupt,
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, 
				e.camerupt, e.camerupt
			] 
		},
		73: { 
			preview: [e.mamoswine, e.delibird],
			wave: [
				e.delibird,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				e.delibird,
			] 
		},
		74: { 
			preview: [e.numel, e.dusclops, e.camerupt],
			wave: [
				e.numel, e.camerupt, e.numel,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
				null, null, null, null, null, null, null, null, null,
				e.numel, e.camerupt, e.numel,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
				null, null, null, null, null, null, null, null, null,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops,  
			] 
		},
		75: { 
			preview: [e.lombre, e.parasect, e.ludicolo, e.numel, e.mamoswine],
			wave: [
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,

				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, 
				null, null, null, null, null, null, null, null, null,
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.mamoswine, e.mamoswine, 
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,

				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, 
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
			] 
		},
		76: { 
			preview: [e.beedrill, e.parasect, e.ludicolo, e.mamoswine, e.dusknoir],
			wave: [
				e.dusknoir,
				e.mamoswine, e.mamoswine, e.mamoswine,  

				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, 

				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,

				e.mamoswine, e.mamoswine, e.mamoswine, 
				
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, 
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
			] 
		},
		77: { 
			preview: [e.mamoswine, e.dusclops, e.dusknoir, e.camerupt],
			wave: [
				e.dusknoir, e.dusknoir, 
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
				null, null, null, null, null, null, null, null, null,
				e.camerupt, e.camerupt,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,
			] 
		},
		78: { 
			preview: [e.lombre, e.beedrill, e.ludicolo, e.mamoswine, e.camerupt],
			wave: [
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, 

				e.camerupt, e.camerupt, e.camerupt, 
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, 
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,
				e.mamoswine, e.mamoswine, 
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre,

				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,

				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
			] 
		},
		79: { 
			preview: [e.numel, e.mamoswine, e.dusclops],
			wave: [
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
			] 
		},
		80: { 
			preview: [e.spiritomb, e.zoroark],
			wave: [
				e.spiritomb,
				null, null, null, null, null, null, null, null, null,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark,		
			] 
		},
		81: { 
			preview: [e.numel, e.dusclops, e.dusknoir, e.camerupt],
			wave: [
				e.camerupt,
				e.dusclops, e.dusclops, e.dusknoir,
				e.camerupt,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops,
				e.camerupt,
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, 
				e.camerupt,
			] 
		},
		82: { 
			preview: [e.lombre, e.ludicolo, e.spiritomb],
			wave: [
				e.spiritomb, e.spiritomb,

				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, 
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, 
				e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, e.lombre, 
			] 
		},
		83: { 
			preview: [e.piloswine, e.ludicolo, e.mamoswine, e.camerupt, e.spiritomb],
			wave: [
				e.camerupt,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,
				e.camerupt,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.spiritomb, e.spiritomb,
			] 
		},
		84: { 
			preview: [e.numel, e.camerupt],
			wave: [
				e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt,
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt,
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt,
			] 
		},
		85: { 
			preview: [e.beedrill, e.spiritomb],
			wave: [
				e.spiritomb, 
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.spiritomb, 
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.spiritomb, 
				e.beedrill, e.beedrill, e.beedrill, 
				e.spiritomb, 
				e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill, e.beedrill,
				e.spiritomb, 
			] 
		},
		86: { 
			preview: [e.mamoswine, e.dusclops, e.dusknoir],
			wave: [
				e.dusknoir, e.dusclops, 
				null, null, null, null,
				e.mamoswine, e.mamoswine, e.mamoswine, 
				e.dusclops, e.dusclops, e.dusclops,
				null, null, null, null, 
				e.mamoswine, e.mamoswine, e.mamoswine,
				e.dusknoir, e.dusclops, 
			] 
		},
		87: { 
			preview: [e.piloswine, e.mamoswine, e.delibird],
			wave: [
				e.piloswine, e.mamoswine, e.piloswine, e.mamoswine, e.piloswine, e.mamoswine, e.piloswine, e.mamoswine, e.piloswine, e.mamoswine, e.piloswine, e.mamoswine,
				e.piloswine, e.mamoswine, e.piloswine, e.mamoswine, 
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				e.delibird, e.delibird, e.delibird,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				e.delibird, e.delibird,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				e.delibird,
			] 
		},
		88: { 
			preview: [e.dusclops, e.dusknoir],
			wave: [
				e.dusknoir, e.dusknoir, 
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops,
			] 
		},
		89: { 
			preview: [e.numel, e.mamoswine, e.dusclops, e.dusknoir, e.camerupt],
			wave: [
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.dusknoir, e.dusknoir,		
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.camerupt, e.camerupt,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops,
			] 
		},
		90: { 
			preview: [e.dusclops, e.camerupt, e.spiritomb, e.porygonZ],
			wave: [
				e.camerupt, e.camerupt, e.camerupt,
				e.dusclops, e.dusclops, e.dusclops,
				e.spiritomb, e.spiritomb, 
				e.porygonZ,
				null, null, null, null, null, null, null, null, null,
				e.porygonZ
			] 
		},
		91: { 
			preview: [e.mamoswine, e.dusclops, e.dusknoir, e.delibird],
			wave: [
				e.dusknoir, e.dusknoir, e.dusknoir, e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
				null, null, null,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				null, null, null,
				e.delibird,
				null, null, null, 
				e.delibird, 
				null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				e.delibird, 
				null, null, null, null, null, null, null, null, null,
				e.delibird,
			] 
		},
		92: { 
			preview: [e.numel, e.dusclops, e.camerupt, e.spiritomb],
			wave: [
				e.camerupt, e.camerupt, e.camerupt,
				e.numel, e.numel, e.numel, e.numel, e.numel, 
				e.numel, e.numel, e.numel, e.numel, e.numel,
				e.numel, e.numel, e.numel, e.numel, e.numel,
				e.camerupt, e.camerupt, e.camerupt,
				null, null, null, null, null, null, null, null, null,
				e.spiritomb, e.spiritomb,
				e.dusclops, e.dusclops, e.dusclops, 
				null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, 
				e.spiritomb, e.spiritomb,
			] 
		},
		93: { 
			preview: [e.ludicolo, e.spiritomb, e.zoroark],
			wave: [
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				e.spiritomb, e.spiritomb,
				null, null, null, null, null, null, null,
				null, null, null, null, null, null, null,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, 
				e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				e.spiritomb, e.spiritomb,
				null, null, null, null, null, null, null,
				null, null, null, null, null, null, null,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				

				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				null, null,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark,
			] 
		},
		94: { 
			preview: [e.spiritomb],
			wave: [
				e.spiritomb, e.spiritomb, e.spiritomb, e.spiritomb, e.spiritomb, e.spiritomb, e.spiritomb, e.spiritomb, 
			] 
		},
		95: { 
			preview: [e.mamoswine, e.dusclops, e.camerupt, e.porygonZ],
			wave: [
				e.porygonZ, e.porygonZ, e.porygonZ,
				e.camerupt, e.camerupt, e.camerupt, e.camerupt, 

				e.dusclops, e.dusclops, e.dusclops,  
				e.camerupt, e.camerupt, e.camerupt, e.camerupt, 
				null, null, null, null,
				e.mamoswine, e.mamoswine, e.mamoswine, 
				null, null, null, null,
				e.dusclops, e.dusclops, e.dusclops, 
				e.porygonZ, e.porygonZ, e.porygonZ,	
			] 
		},
		96: { 
			preview: [e.delibird],
			wave: [
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
			] 
		},
		97: { 
			preview: [e.ludicolo, e.mamoswine, e.miltank, e.tauros],
			wave: [
				e.tauros, 
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, 
				e.miltank, 
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, 
				e.miltank,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				e.tauros,
				e.mamoswine, e.mamoswine, e.miltank, e.mamoswine, 
				e.tauros,
				e.mamoswine, e.mamoswine, 
			] 
		},
		98: { 
			preview: [e.dusclops, e.camerupt, e.spiritomb],
			wave: [
				e.camerupt, e.camerupt,
				null, null, null, null,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
				e.spiritomb,
				null, null, null, null,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops,  
				e.spiritomb, 
				null, null, null, null,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops,  
				e.spiritomb, 
				null, null, null, null,
			] 
		},
		99: { 
			preview: [e.dusclops, e.dusknoir, e.spiritomb],
			wave: [
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
				e.dusknoir, 
				e.spiritomb, e.spiritomb, e.spiritomb, 
			] 
		},
		100: { 
			preview: [e.regice], 
			wave: [
				e.regice
			] 
		},
	},
	8: {
		1: {
			preview: [e.beldum],
			wave: [
				e.beldum, e.beldum, e.beldum, e.beldum, 
				e.beldum, e.beldum, e.beldum, e.beldum,
				e.beldum, e.beldum, e.beldum, e.beldum, 
			],
		},
		2: {
			preview: [e.beldum],
			wave: [
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
			],
		},
		3: {
			preview: [e.rapidash, e.parasect, e.beldum],
			wave: [
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
			],
		},
		4: {
			preview: [e.rapidash, e.numel],
			wave: [
				e.numel, e.numel,
				null, null, null, null, null, null,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
			],
		},
		5: {
			preview: [e.rapidash, e.beldum],
			wave: [
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
				null, null, null, null, null, null,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,

			],
		},
		6: {
			preview: [e.rapidash, e.beldum],
			wave: [
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, 
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, 
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, 
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
			],
		},
		7: {
			preview: [e.rapidash, e.numel, e.beldum],
			wave: [
				e.beldum, e.numel, e.beldum, e.numel, e.beldum, e.numel, e.beldum, e.numel, e.beldum, e.numel,
				e.beldum, e.numel, e.beldum, e.numel, e.beldum, e.numel, e.beldum, e.numel, e.beldum, e.numel,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
			],
		},
		8: {
			preview: [e.parasect, e.fearow, e.numel],
			wave: [
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.fearow, e.fearow, e.fearow, 
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.fearow, e.fearow, e.fearow, 
				e.fearow, e.fearow, e.fearow, 
			],
		},
		9: {
			preview: [e.rapidash, e.numel, e.beldum],
			wave: [
				e.numel, e.numel, e.numel, e.numel,
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
			],
		},
		10: {
			preview: [e.snorlax],
			wave: [
				e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax, 
			],
		},
		11: {
			preview: [e.snorlax, e.beldum,  e.metang],
			wave: [
				e.snorlax, e.snorlax, e.snorlax, e.snorlax,
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
				null, null, null, null, 
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
				e.metang, e.metang, e.metang, e.metang,
			],
		},
		12: {
			preview: [e.fearow, e.numel, e.scyther],
			wave: [
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				 
			],
		},
		13: {
			preview: [e.metang, e.scyther],
			wave: [
				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, 
				null, null, null, 
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, 
				null, null, null, 
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
			],
		},
		14: {
			preview: [e.rapidash, e.parasect],
			wave: [
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
			],
		},

		15: {
			preview: [e.beldum, e.metang],
			wave: [
				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,
			],
		},
		16: {
			preview: [e.snorlax, e.delibird],
			wave: [
				e.snorlax, e.snorlax, e.snorlax, 
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
				e.snorlax, e.snorlax, e.snorlax, 
				null, null, null, null, null, null,
				e.snorlax, e.snorlax, e.snorlax, 
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
				null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, 
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
				null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, 
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
			],
		},
		17: {
			preview: [e.parasect, e.beldum, e.numel, e.metang, e.scyther],
			wave: [
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,

				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,

				null, null, null, null, null, null, null, null, null, 
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,			
			],
		},
		18: {
			preview: [e.beldum, e.numel, e.metang],
			wave: [
				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,
			],
		},
		19: {
			preview: [e.fearow, e.snorlax],
			wave: [	
				e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax,

				e.fearow, e.fearow, e.fearow, e.fearow, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.fearow, e.fearow, e.fearow, e.fearow, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.fearow, e.fearow, e.fearow, e.fearow, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.fearow, e.fearow, e.fearow, e.fearow, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.fearow, e.fearow, e.fearow, e.fearow, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.fearow, e.fearow, e.fearow, e.fearow, 
			],
		},
		20: {
			preview: [e.rapidash, e.mamoswine, e.beldum, e.metang],
			wave: [
				e.mamoswine,

				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,
				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,
				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,

				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,

				null, null, null, null, null,

				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,

				null, null, null, null, null,

				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
			],
		},
		21: {
			preview: [e.mamoswine, e.numel, e.metang],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine,
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,
				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,
				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,
			],
		},
		22: {
			preview: [e.ludicolo, e.scyther],
			wave: [
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, 
				null, null,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				null, null, null, null, null, null,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, 
				null, null,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				null, null, null, null, null, null,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, 
				null, null,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				null, null, null, null, null, null,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, 
				null, null,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
			],
		},
		23: {
			preview: [e.mamoswine, e.dusclops, e.beldum, e.metang],
			wave: [
				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,
				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
			],
		},
		24: {
			preview: [e.rapidash, e.fearow],
			wave: [
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,

				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
			],
		},
		25: {
			preview: [e.snorlax, e.mamoswine, e.scyther,],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				e.snorlax, e.snorlax, 
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				null, null, null, null, null,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,			
			],
		},
		26: {
			preview: [e.mamoswine, e.ludicolo, e.dusclops, e.beldum, e.metang],
			wave: [
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,

				e.dusclops, e.dusclops, e.dusclops, 
				e.mamoswine, e.mamoswine, e.mamoswine, 
				e.dusclops, e.dusclops, e.dusclops, 
				null, null, null,

				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,

				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,		
			],
		},
		27: {
			preview: [e.parasect, e.ludicolo, e.dusclops, e.numel],
			wave: [
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				null, null, null, null, null, null, null, null, null,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
			],
		},
		28: {
			preview: [e.fearow, e.mamoswine],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				null, null, null, null, null, null, null, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				null, null, null, null, null, null, null, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				null, null, null, null, null, null, null, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
			],
		},
		29: {
			preview: [e.mamoswine, e.dusclops, e.metang],
			wave: [
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
				e.mamoswine, e.mamoswine, e.mamoswine, 
				e.dusclops, e.dusclops, e.dusclops, e.dusclops,
				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops,
			],
		},
		30: {
			preview: [e.rapidash, e.parasect, e.fearow, e.dusclops, e.pinsir],
			wave: [
				e.pinsir,
				null, null, 
				e.dusclops, e.dusclops, e.dusclops, 
				null, null, null, null, null, null, null, 
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,

				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,

				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
			],
		},
		31: {
			preview: [e.parasect, e.fearow, e.snorlax, e.numel],
			wave: [
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,
				null, null, null, 
				e.snorlax, e.snorlax, e.snorlax, e.snorlax, 
				null, null, null, null, null, null, 
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, 
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				null, null, null, 
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, 
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.fearow, e.fearow, e.fearow, 
				null, null, null, 
				e.fearow, e.fearow, e.fearow,  
				null, null, null, 
				e.fearow, e.fearow, e.fearow, 	
			],
		},
		32: {
			preview: [e.scyther, e.mamoswine, e.pinsir],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 

				e.pinsir,
				null, null, null, 
				e.pinsir,
				null, null, null, 
				e.pinsir,
				
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
	
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,  	
			],
		},
		33: {
			preview: [e.scyther, e.ludicolo, e.dusclops],
			wave: [
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops,

				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.scyther, e.scyther, e.scyther, e.scyther,  
				null, null, null, null, null, null, null, null, 
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.scyther, e.scyther, e.scyther, e.scyther, 
				null, null, null, null, null, null, null, null, 
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
			],
		},
		34: {
			preview: [e.mamoswine, e.ludicolo, e.dusclops],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, 
				null, null, null, null, null, null,

				null, null, null, null, null, null,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, 

				null, null, null, null, null, null, null, null, 
				e.dusclops, e.dusclops, e.dusclops, 
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, 
			],
		},
		35: {
			preview: [e.pinsir],
			wave: [
				e.pinsir, e.pinsir, e.pinsir, e.pinsir, e.pinsir, e.pinsir, e.pinsir, e.pinsir, e.pinsir, e.pinsir,
				e.pinsir, e.pinsir,
			],
		},
		36: {
			preview: [e.scyther, e.ludicolo, e.dusclops, e.pinsir],
			wave: [
				e.dusclops, e.dusclops, 
				null, null, null, null,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				null, null, null, null,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				null, null, null, null, null, null, null, null,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				e.dusclops, e.dusclops,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				null, null, null, null,

				e.pinsir, e.pinsir, e.pinsir, e.pinsir, e.pinsir, 
			],
		},
		37: {
			preview: [e.mamoswine, e.ludicolo, e.dusclops, e.pinsir],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.dusclops, e.dusclops, e.dusclops,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, 

				e.dusclops, e.dusclops, e.dusclops, e.mamoswine, e.mamoswine, e.mamoswine,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,  
				e.pinsir, e.pinsir, e.pinsir,
			],
		},
		38: {
			preview: [e.rapidash, e.numel, e.fearow, e.zoroark],
			wave: [
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,

				null, null, null, null,
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				

				e.numel, e.numel, e.numel,

				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null,
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				null, null, null, null, null, null, null, null,
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				null, null, null, null, null, null, null, null,
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
			],
		},
		39: {
			preview: [e.scyther],
			wave: [
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
			],
		},
		40: {
			preview: [e.scyther, e.scizor],
			wave: [
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				e.scizor,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				e.scizor,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,

				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				e.scizor,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				e.scizor,
				
			],
		},
		41: {
			preview: [e.snorlax, e.dusclops, e.scizor],
			wave: [
				e.snorlax, e.snorlax, e.snorlax, 
				e.dusclops, e.dusclops,
				e.scizor, e.scizor,
				e.snorlax, e.snorlax, e.snorlax, 
				e.dusclops, e.dusclops,
				e.scizor, e.scizor,
				e.snorlax, e.snorlax, e.snorlax, 
				e.scizor, e.scizor,
			],
		},
		42: {
			preview: [e.numel, e.scyther, e.scizor, e.camerupt],
			wave: [
				e.numel, e.numel, e.numel, e.numel, e.numel, 
				e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt,
				e.numel, e.numel, e.numel, e.numel, e.numel,

				e.scizor, e.scizor, ,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, 
				e.scizor, e.scizor, 

			],
		},
		43: {
			preview: [e.rapidash, e.parasect, e.pinsir, e.scizor, e.camerupt],
			wave: [
				e.camerupt, e.camerupt, e.camerupt, e.camerupt,
				null, null, null, null, null, null, null, null,
				e.pinsir, e.pinsir, e.pinsir, 
				null, null, null, null, null, null, null, null,

				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,


				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,

				e.scizor, e.scizor, 

				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				
				null, null, null, null, null, null, null, null, null, null, null,

				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
	
			],
		},
		44: {
			preview: [e.numel, e.camerupt],
			wave: [
				e.numel, e.numel, e.camerupt, e.camerupt, e.numel, e.numel, e.numel, e.numel, e.camerupt, e.camerupt, e.numel, e.numel, e.numel, e.numel,
				e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt,
				e.numel, e.numel, e.camerupt, e.camerupt, e.numel, e.numel, e.numel, e.numel, e.camerupt, e.camerupt, e.numel, e.numel, e.numel, e.numel,
			],
		},
		45: {
			preview: [e.mamoswine, e.scyther, e.scizor, e.delibird],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,

				e.scyther, e.scyther, e.scyther, e.scyther, 
				e.scizor, 
				e.scyther, e.scyther, e.scyther, e.scyther,
				e.scizor,
				null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird,
			],
		},
		46: {
			preview: [e.numel, e.scyther, e.camerupt],
			wave: [
				e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt, 
				e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel, e.numel,

				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, 
			],
		},
		47: {
			preview: [e.parasect, e.fearow, e.snorlax, e.metang],
			wave: [
				e.snorlax, e.snorlax, e.snorlax,
				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, 
				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, 
				e.snorlax, e.snorlax, e.snorlax, 

				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				null, null, null, null, null, null, null, null, 
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,

				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,
				null, null, null, null, null, null, null, null,
				e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect, e.parasect,


				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 

				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow,
			],
		},
		48: {
			preview: [e.rapidash, e.fearow, e.ludicolo, e.dusclops],
			wave: [
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, 

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 

				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
		
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, 

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 

				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,

				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow,

				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 

			],
		},
		49: {
			preview: [e.scyther],
			wave: [
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,

				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
			],
		},
		50: {
			preview: [e.fearow, e.mamoswine, e.pinsir, e.porygonZ],
			wave: [
				e.pinsir, e.pinsir, 
				e.mamoswine, e.mamoswine, e.mamoswine, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygonZ, e.porygonZ, e.porygonZ, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
			],
		},
		51: { 
			preview: [e.camerupt, e.porygonZ],
			wave: [
				e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygonZ, e.porygonZ, e.porygonZ, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.porygonZ, e.porygonZ, e.porygonZ,  
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygonZ, e.porygonZ, e.porygonZ,  
			] 
		},
		52: { 
			preview: [e.fearow, e.porygonZ, e.scizor],
			wave: [
				e.porygonZ, e.porygonZ, e.porygonZ, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				null, null, null, null, null, null,
				e.scizor, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 

				e.porygonZ, e.porygonZ, e.porygonZ, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 

				e.scizor, 
				null, null, null, null, null, null,
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
			] 
		},
		53: { 
			preview: [e.scyther, e.mamoswine, e.dusclops, e.scizor],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, 

				e.dusclops, e.dusclops, e.dusclops,
				e.scizor, 
				e.dusclops, e.dusclops, e.dusclops, 

				null, null, null, null, null, null, null, null, null,null, null, null,

				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
			] 
		},
		54: { 
			preview: [e.pinsir, e.camerupt],
			wave: [
				e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt, 
				e.pinsir, e.pinsir, 
				e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt,

			] 
		},
		55: { 
			preview: [e.dusclops, e.pinsir, e.camerupt, e.porygonZ, e.delibird],
			wave: [
				e.camerupt, e.camerupt, e.camerupt, e.camerupt, 
				e.delibird, 
				e.dusclops, e.dusclops, 
				e.pinsir, 
				e.dusclops, e.dusclops, 
				e.delibird, 

				e.pinsir, e.pinsir, e.pinsir, 
				null, null, null, null,
				e.delibird,
				e.porygonZ, e.porygonZ, 
				e.delibird,
				null, null, null, null,
				e.porygonZ, e.porygonZ, 
				e.delibird,  
			] 
		},
		56: { 
			preview: [e.dusclops, e.pinsir, e.camerupt],
			wave: [
				e.camerupt, e.camerupt,
				e.pinsir,
				e.camerupt, e.camerupt,
				e.pinsir, 
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
			] 
		},
		57: { 
			preview: [e.mamoswine, e.ludicolo, e.dusclops],
			wave: [
				e.mamoswine, e.mamoswine, 
				e.dusclops, e.dusclops, 
				e.mamoswine, e.mamoswine, 
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				e.mamoswine, e.mamoswine,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				e.dusclops, e.dusclops, 
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
			] 
		},
		58: { 
			preview: [e.pinsir],
			wave: [
				e.pinsir, e.pinsir, e.pinsir, e.pinsir, e.pinsir, e.pinsir, e.pinsir, e.pinsir, e.pinsir, e.pinsir,
			] 
		},
		59: { 
			preview: [e.dusclops,  e.camerupt],
			wave: [
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
				e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt,
				e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt, 
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops,
			] 
		},
		60: { 
			preview: [e.dusclops, e.aerodactyl],
			wave: [
				e.aerodactyl, 
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
			] 
		},
		61: { 
			preview: [e.mamoswine, e.aerodactyl],
			wave: [
				e.aerodactyl, e.aerodactyl, e.aerodactyl, 
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
			]
		},
		62: { 
			preview: [e.scizor],
			wave: [
				e.scizor, e.scizor, e.scizor, e.scizor, e.scizor, e.scizor, e.scizor, e.scizor, e.scizor, e.scizor, 
			] 
		},
		63: { 
			preview: [e.fearow, e.dusclops, e.scyther, e.aerodactyl],
			wave: [
				e.aerodactyl, e.aerodactyl,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops,
				e.scyther, e.scyther, e.scyther, e.scyther, 

				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
			] 
		},
		64: { 
			preview: [e.scizor, e.aerodactyl],
			wave: [
				e.aerodactyl, e.aerodactyl, e.aerodactyl, e.aerodactyl, e.aerodactyl,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.scizor, e.scizor, e.scizor, e.scizor, 
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.scizor, e.scizor, e.scizor, e.scizor, 

			] 
		},
		65: { 
			preview: [e.snorlax, e.mamoswine, e.aerodactyl],
			wave: [
				e.aerodactyl, e.aerodactyl, e.aerodactyl, 
				e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				
			] 
		},
		66: { 
			preview: [e.snorlax, e.pinsir],
			wave: [
				e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax, 

				e.pinsir, e.pinsir, e.pinsir, e.pinsir, 
				null, null, null, null, null, null, null, null,
				e.pinsir, e.pinsir, e.pinsir, e.pinsir, 
				null, null, null, null, null, null, null, null,
				e.pinsir, e.pinsir, e.pinsir, e.pinsir, 
			] 
		},
		67: { 
			preview: [e.scyther, e.scizor],
			wave: [
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				e.scizor, e.scizor, e.scizor, e.scizor, 
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, 
				e.scizor, e.scizor, e.scizor, e.scizor, 
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, e.scyther, 
				e.scizor, e.scizor, e.scizor, e.scizor,  
	
			] 
		},
		68: { 
			preview: [e.snorlax, e.aerodactyl, e.delibird],
			wave: [
				e.snorlax, e.snorlax, e.snorlax, 
				e.aerodactyl, e.aerodactyl, e.aerodactyl, 
				e.snorlax, e.snorlax, e.snorlax, 
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
			] 
		},
		69: { 
			preview: [e.aerodactyl],
			wave: [
				e.aerodactyl, e.aerodactyl, e.aerodactyl, e.aerodactyl, e.aerodactyl, e.aerodactyl,
			] 
		},
		70: { 
			preview: [e.mamoswine, e.aerodactyl, e.zoroark],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 

				e.aerodactyl, e.aerodactyl,  
				null, null, null,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark,
				null, null, null,
				e.aerodactyl, e.aerodactyl, 
			] 
		},
		71: { 
			preview: [e.ludicolo, e.pinsir, e.scizor,],
			wave: [
				e.pinsir, e.pinsir, e.pinsir, 
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, 
				e.pinsir, e.pinsir, e.pinsir, 
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, 
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo, 
				e.ludicolo, e.ludicolo, e.ludicolo, e.ludicolo,
				e.scizor, e.scizor, e.scizor,
			] 
		},
		72: { 
			preview: [e.dusclops, e.scizor, e.porygonZ],
			wave: [
				e.scizor, e.scizor, e.scizor,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops,
				e.porygonZ, e.porygonZ, e.porygonZ, 
				e.scizor, e.scizor, e.scizor, 
				e.dusclops, e.dusclops, e.dusclops, e.dusclops,
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.porygonZ, e.porygonZ, e.porygonZ, 
				e.dusclops, e.dusclops, e.dusclops, e.dusclops,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops,
			] 
		},
		73: { 
			preview: [e.porygonZ],
			wave: [
				e.porygonZ, e.porygonZ, e.porygonZ, e.porygonZ, 
				null, null,
				e.porygonZ, e.porygonZ, e.porygonZ, e.porygonZ, 
				null, null, 
				e.porygonZ, e.porygonZ, e.porygonZ, e.porygonZ,
				null, null,
				e.porygonZ, e.porygonZ, e.porygonZ, e.porygonZ,
			] 
		},
		74: { 
			preview: [e.mamoswine,  e.aerodactyl],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,
				e.aerodactyl, e.aerodactyl, e.aerodactyl, 
			] 
		},
		75: { 
			preview: [e.beldum, e.metang],
			wave: [
				e.beldum, e.metang, e.beldum, e.metang, e.beldum, e.metang, e.beldum, e.metang, e.beldum, e.metang, e.beldum, e.metang,
				e.beldum, e.metang, e.beldum, e.metang, e.beldum, e.metang, e.beldum, e.metang, e.beldum, e.metang, e.beldum, e.metang,
				e.beldum, e.metang, e.beldum, e.metang, e.beldum, e.metang, e.beldum, e.metang, e.beldum, e.metang, e.beldum, e.metang,
			] 
		},
		76: { 
			preview: [e.scizor, e.camerupt, e.aerodactyl],
			wave: [
				e.scizor, e.scizor, e.scizor, e.scizor,
				e.camerupt, e.camerupt, e.camerupt, e.camerupt, 
				e.aerodactyl, e.aerodactyl, e.aerodactyl, e.aerodactyl, 
				e.scizor, e.scizor, e.scizor, e.scizor, 
			] 
		},
		77: { 
			preview: [e.rapidash,  e.aerodactyl],
			wave: [
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, 
				e.aerodactyl, e.aerodactyl, e.aerodactyl, e.aerodactyl, e.aerodactyl,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, 
				null, null, null, null, null,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, 
				null, null, null, null, null,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, 
				null, null, null, null, null,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, 
			] 
		},
		78: { 
			preview: [e.camerupt, e.porygonZ, e.aerodactyl],
			wave: [
				e.aerodactyl, e.aerodactyl, 
				e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt,
				e.aerodactyl, e.aerodactyl, 
				null, null, null, null, null,
				e.aerodactyl, e.aerodactyl,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygonZ, e.porygonZ, e.porygonZ, e.porygonZ,
			] 
		},
		79: { 
			preview: [e.beldum],
			wave: [
				e.beldum,
			] 
		},
		80: { 
			preview: [e.metang, e.scizor, e.metagross],
			wave: [
				e.metagross,

				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,
				e.scizor, e.scizor, e.scizor, e.scizor, e.scizor, e.scizor, 
				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,
				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,
				e.scizor, e.scizor, e.scizor, e.scizor, e.scizor, e.scizor,  		
			]
		},
		81: { 
			preview: [e.beldum, e.metagross],
			wave: [
				e.metagross, e.metagross, e.metagross,
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
				e.metagross, e.metagross, e.metagross,
			] 
		},
		82: { 
			preview: [e.porygonZ, e.aerodactyl, e.metagross],
			wave: [
				e.metagross, 
				e.aerodactyl, e.aerodactyl, null,
				e.metagross,
				e.aerodactyl, e.aerodactyl, null, 
				e.metagross,
				e.porygonZ, e.porygonZ, e.porygonZ, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygonZ, e.porygonZ, e.porygonZ, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.porygonZ, e.porygonZ, e.porygonZ, 
			] 
		},
		83: { 
			preview: [e.mamoswine, e.camerupt, e.aerodactyl, e.metagross],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,
				e.metagross, e.metagross,  
				null, null, null, null, null,
				e.camerupt, e.camerupt, e.camerupt, e.camerupt, e.camerupt, 
				e.aerodactyl,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,
				null, null, null, null, null,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,
				null, null, null, null, null,
				e.aerodactyl, 
			] 
		},
		84: { 
			preview: [e.dusclops, e.aerodactyl, e.metagross],
			wave: [
				e.metagross, e.metagross,
				e.aerodactyl, e.aerodactyl,
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, 
				null, null, null, null, null, null, null, null,
				e.metagross, e.metagross,
				e.aerodactyl, e.aerodactyl, 
				e.dusclops, e.dusclops, e.dusclops, 
			] 
		},
		85: { 
			preview: [e.delibird],
			wave: [
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
			] 
		},
		86: { 
			preview: [e.porygonZ, e.aerodactyl, e.metagross],
			wave: [
				e.porygonZ, e.porygonZ, e.porygonZ,  
				e.metagross,
				e.aerodactyl, e.aerodactyl,  
				null, null, null, null, null,
				e.aerodactyl, e.aerodactyl, 
				null, null, null, null, null,
				e.aerodactyl, e.aerodactyl, 
				e.metagross,
				e.porygonZ, e.porygonZ, e.porygonZ, 
			] 
		},
		87: { 
			preview: [e.beldum, e.metang, e.metagross],
			wave: [
				e.metagross, e.metagross, e.metagross, 

				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,

				e.metagross, e.metagross, e.metagross,
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,

				e.metagross, e.metagross, e.metagross, 
				e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang, e.metang,
				e.metagross, e.metagross, e.metagross, 
				e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum, e.beldum,
			] 
		},
		88: { 
			preview: [e.scizor, e.camerupt, e.aerodactyl],
			wave: [
				e.scizor, e.scizor, e.scizor, e.scizor, e.scizor, 
				e.camerupt, e.camerupt, e.camerupt, 
				e.aerodactyl, e.aerodactyl,  
				e.scizor, e.scizor, e.scizor, e.scizor, e.scizor, 
				e.camerupt, e.camerupt, e.camerupt, 
				e.aerodactyl, e.aerodactyl, 
				e.scizor, e.scizor, e.scizor, e.scizor, e.scizor,
			] 
		},
		89: { 
			preview: [e.scyther, e.scizor],
			wave: [
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				e.scizor, e.scizor, e.scizor, e.scizor, e.scizor,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				e.scizor, e.scizor, e.scizor, e.scizor, e.scizor,
				e.scyther, e.scyther, e.scyther, e.scyther, e.scyther,
				e.scizor, e.scizor, e.scizor, e.scizor, e.scizor,
			] 
		},
		90: { 
			preview: [e.dusclops, e.metagross],
			wave: [
				e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops, e.dusclops,
				e.metagross, e.metagross, e.metagross, 
				null, null, null, null, null,
				e.metagross, e.metagross, e.metagross,
				null, null, null, null, null,
				e.metagross, e.metagross, e.metagross,
			] 
		},
		91: { 
			preview: [e.camerupt, e.mamoswine, e.dusclops, e.aerodactyl, e.zoroark],
			wave: [
				e.dusclops, e.mamoswine, e.aerodactyl, e.zoroark, e.camerupt, e.zoroark,
				e.dusclops, e.camerupt, e.mamoswine, e.zoroark, e.camerupt, e.zoroark,
				e.dusclops, e.zoroark, e.dusclops, e.zoroark, e.dusclops, e.zoroark,
				e.dusclops, e.zoroark, e.dusclops, e.zoroark, e.dusclops, e.zoroark,
				e.dusclops, e.mamoswine, e.aerodactyl, e.zoroark, e.camerupt, e.zoroark,
				e.dusclops, e.camerupt, e.mamoswine, e.zoroark, e.camerupt, e.zoroark,
				e.dusclops, e.mamoswine, e.aerodactyl, e.zoroark, e.camerupt, e.zoroark,
			] 
		},
		92: { 
			preview: [e.beldum, e.metang, e.metagross, e.zoroark],
			wave: [
				e.metagross, e.beldum, e.metagross, e.metang, e.metagross, e.zoroark,
				e.metagross, e.beldum, e.metagross, e.metang, e.metagross, e.zoroark,
				e.metagross, e.beldum, e.metagross, e.metang, e.metagross, e.zoroark,
				e.metagross, e.beldum, e.metagross, e.metang, null, e.zoroark,
				e.metagross, e.beldum, e.metagross, e.metang, null, e.zoroark,
			] 
		},
		93: { 
			preview: [e.delibird],
			wave: [
				e.delibird, 
				null, null, null, null,
				e.delibird, 
				null, null, null, null,
				e.delibird, 
				null, null, null, null,
				e.delibird, 
				null, null, null, null,
				e.delibird, 
				null, null, null, null,
				e.delibird, 
				null, null, null, null,
				e.delibird, 
				null, null, null, null,
				e.delibird, 
				null, null, null, null,
				e.delibird, 
			] 
		},
		94: { 
			preview: [e.scizor, e.metagross, e.zoroark],
			wave: [
				e.metagross, e.metagross, e.metagross, e.metagross, e.metagross,
				e.scizor, e.scizor,
			  	e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark,
			  	e.scizor, e.scizor,
			  	e.metagross, e.metagross, e.metagross, 
			  	e.scizor, e.scizor,
			  	e.zoroark, e.zoroark, e.zoroark, e.zoroark, e.zoroark,
			] 
		},
		95: { 
			preview: [e.porygon, e.porygon2, e.porygonZ],
			wave: [
				e.porygon, e.porygon2, e.porygonZ, e.porygon, e.porygon2, e.porygonZ, e.porygon, e.porygon2, e.porygonZ,
				e.porygon, e.porygon2, e.porygonZ, e.porygon, e.porygon2, e.porygonZ, e.porygon, e.porygon2, e.porygonZ,
				e.porygon, e.porygon2, e.porygonZ, e.porygon, e.porygon2, e.porygonZ, e.porygon, e.porygon2, e.porygonZ,
			] 
		},
		96: { 
			preview: [e.dusknoir, e.spiritomb],
			wave: [
				e.dusknoir, 
				e.spiritomb, e.spiritomb, e.spiritomb, e.spiritomb, e.spiritomb, e.spiritomb, 
				e.spiritomb, e.spiritomb, e.spiritomb, e.spiritomb, e.spiritomb, e.spiritomb, 
			] 
		},
		97: { 
			preview: [e.rapidash, e.fearow, e.scyther, e.aerodactyl],
			wave: [
				e.aerodactyl, e.aerodactyl,
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
				e.scyther, e.scyther, e.scyther, e.scyther, 
				e.aerodactyl, e.aerodactyl,
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				e.scyther, e.scyther, e.scyther, e.scyther, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				e.scyther, e.scyther, e.scyther, e.scyther, 
				e.fearow, e.fearow, e.fearow, e.fearow, e.fearow, 
				e.scyther, e.scyther, e.scyther, e.scyther, 
				e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash, e.rapidash,
			] 
		},
		98: { 
			preview: [e.snorlax, e.scizor],
			wave: [
				e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax,
				e.scizor, e.scizor, e.scizor, e.scizor, 
				e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax,
				e.scizor, e.scizor, e.scizor, e.scizor, 
				e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax, 
				e.scizor, e.scizor, e.scizor, e.scizor, 
				e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax, 
			]  
		},
		99: { 
			preview: [e.metagross],
			wave: [
				e.metagross, e.metagross, e.metagross, e.metagross, e.metagross,
				e.metagross, e.metagross, e.metagross, e.metagross, e.metagross, 
			] 
		},
		100: { 
			preview: [e.registeel], 
			wave: [
				e.registeel
			] 
		},
	}
	
}
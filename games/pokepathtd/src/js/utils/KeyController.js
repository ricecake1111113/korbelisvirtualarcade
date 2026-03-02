import { saveData } from '../file/data.js';

export class KeyController {
	constructor(main) {
		this.main = main;
		this.keyHandler = this.keyHandler.bind(this);
		this.listen();
	}

	listen() {
		window.addEventListener('keydown', this.keyHandler);
	}

	keyHandler(e) {
		const keyMap = {
			'en': { profile: 'q', box: 'e', shop: 's', map: 'w', damageDealt: 'z', leftA: 'a', rightD: 'd', leftArrow: 'ArrowLeft', rightArrow: 'ArrowRight'},
			'fr': { profile: 'a', box: 'e', shop: 's', map: 'z', damageDealt: 'w', leftA: 'q', rightD: 'd', leftArrow: 'ArrowLeft', rightArrow: 'ArrowRight'}
		};

		const langKeys = (this.main.lang == 2) ? keyMap['fr'] : keyMap['en'];

		const scenes = {
			newPokemon: this.main.shopScene.displayPokemon,
			pokemon: this.main.pokemonScene,
			profile: this.main.profileScene,
			box: this.main.boxScene,
			menu: this.main.menuScene,
			shop: this.main.shopScene,
			map: this.main.mapScene,
			damageDealt: this.main.UI.damageDealtDisplay
		};
		
		const allScenes = Object.values(scenes);
		const anySceneOpen = (except = null) =>
			allScenes.some(s => s.isOpen && s !== except);

		const gameLocked = () =>
			this.main.defeatScene.isOpen || this.main.newGameScene.isOpen || this.main.tutorialScene.isOpen;

		const gameplayLocked = () =>
			gameLocked() || this.main.game.deployingUnit;

		switch (e.key) {
			case 'Escape':
				if (gameLocked()) return;
				if (this.main.game.deployingUnit) return this.main.game.cancelDeployUnit();
				if (this.main.menuScene.deleteScene.isOpen) return this.main.menuScene.deleteScene.close();
				if (this.main.menuScene.importScene.isOpen) return this.main.menuScene.importScene.close();
				if (this.main.menuScene.exportScene.isOpen) return this.main.menuScene.exportScene.close();
				const opened = allScenes.find(s => s.isOpen);
				if (opened) opened.close();
				else this.main.menuScene.open();
				break;
				
			case 'x':
				this.main.game.toggleRanges();
				break;

			case langKeys.leftA:
			case langKeys.leftArrow:
				if (this.main.pokemonScene.isOpen) this.main.pokemonScene.changePokemon(-1)
				break;
			case langKeys.rightD:
			case langKeys.rightArrow:
				if (this.main.pokemonScene.isOpen) this.main.pokemonScene.changePokemon(1)
				break;

			case langKeys.damageDealt:
				this.main.UI.damageDealtSwitch();
				break;

			case langKeys.profile:
				if (gameplayLocked() || anySceneOpen(scenes.profile)) return;
				scenes.profile.isOpen ? scenes.profile.close() : scenes.profile.open();
				break;

			case langKeys.box:
				if (gameplayLocked() || anySceneOpen(scenes.box)) return;
				scenes.box.isOpen ? scenes.box.close() : scenes.box.open();
				break;

			case langKeys.shop:
				if (gameplayLocked() || anySceneOpen(scenes.shop)) return;
				scenes.shop.isOpen ? scenes.shop.close() : scenes.shop.open();
				break;

			case langKeys.map:
				if (gameplayLocked() || anySceneOpen(scenes.map)) return;
				scenes.map.isOpen ? scenes.map.close() : scenes.map.open();
				break;

			case ' ':
				if (gameLocked() || anySceneOpen()) return;
				if (! this.main.area.waveActive && ! this.main.game.deployingUnit) this.main.area.newWave();
				break;

			default:
				if (/^[1-9]$/.test(e.key)) {
					if (gameLocked() || this.main.tutorialScene.isOpen || anySceneOpen()) return;
					const i = parseInt(e.key) - 1;
					if (this.main.game.deployingUnit) this.main.game.cancelDeployUnit();
					else if (this.main.team.pokemon.length > i) this.main.game.tryDeployUnit(i);
				} else if (e.key === "0") {
			        if (gameLocked() || this.main.tutorialScene.isOpen || anySceneOpen()) return;
			        if (this.main.team.pokemon.length === 10) {
			            this.main.game.tryDeployUnit(9);
			        }
			    }
				break;
		}
	}

	remove() {
		window.removeEventListener('keydown', this.keyHandler);
	}
}


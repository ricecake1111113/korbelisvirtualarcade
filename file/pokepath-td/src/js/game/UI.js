import { Element } from '../utils/Element.js';
import { text } from '../file/text.js';
import { playSound } from '../file/audio.js';

const SECTIONS = ['profile', 'box', 'shop', 'map', 'damageDealt','menu'];

export class UI {
	constructor(main) {
		this.main = main;
		this.render();

		this.damageDealtDisplay = false;
		this.enemyPositionDisplay = 0;
	}

	render() {
		this.playerPanel = new Element(this.main.scene, { className: 'ui-player-panel' }).element;
		this.playerPortrait = new Element(this.playerPanel, { className: 'ui-player-portrait' }).element;
		this.playerName = new Element(this.playerPanel, { className: 'ui-player-name' }).element;
		this.playerHealth = new Element(this.playerPanel, { className: 'ui-player-health' }).element;
		this.playerGold = new Element(this.playerPanel, { className: 'ui-player-gold' }).element;
		this.playerStars = new Element(this.playerPanel, { className: 'ui-player-stars' }).element;

		this.playerLimitLine = new Element(this.playerPanel, { className: 'ui-player-limit-line' }).element;

		this.pokemonContainer = new Element(this.playerPanel, { className: 'ui-pokemon-container' }).element;
		this.pokemon = [];

		for (let i = 0; i < 10; i++) {
			this.pokemon[i] = new Element(this.pokemonContainer, { className: 'ui-pokemon' }).element;
			this.pokemon[i].name = new Element(this.pokemon[i], { className: 'ui-pokemon-name' }).element;
			this.pokemon[i].sprite = new Element(this.pokemon[i], { className: 'ui-pokemon-sprite' }).element;
			this.pokemon[i].level = new Element(this.pokemon[i], { className: 'ui-pokemon-level' }).element;
			this.pokemon[i].info = new Element(this.pokemon[i], { className: 'ui-pokemon-info' }).element;
			this.pokemon[i].deploy = new Element(this.pokemon[i], { className: 'ui-pokemon-deploy' }).element;
			this.pokemon[i].stars = new Element(this.pokemon[i], { className: 'ui-pokemon-stars' }).element;

			this.pokemon[i].deploy.addEventListener('click', () => this.main.game.tryDeployUnit(i));
			this.pokemon[i].info.addEventListener('click', () => this.main.pokemonScene.open(this.main.team.pokemon[i], i));
			this.pokemon[i].deploy.addEventListener('mouseenter', () => { playSound('hover3', 'ui') })
			this.pokemon[i].info.addEventListener('mouseenter', () => { playSound('hover3', 'ui') })
		}

		this.pokemon[6].stars.innerHTML = `<span class="lock">🔒</span><br><span class="msrre">⭐</span>40`;
		this.pokemon[7].stars.innerHTML = `<span class="lock">🔒</span><br><span class="msrre">⭐</span>160`;
		this.pokemon[8].stars.innerHTML = `<span class="lock">🔒</span><br><span class="msrre">⭐</span>320`;
		this.pokemon[9].stars.innerHTML = `<span class="lock">🔒</span><br><span class="msrre">⭐</span>540`;

		this.mapPanel = new Element(this.main.scene, { className: 'ui-map-panel' }).element;

		this.sectionContainer = new Element(this.mapPanel, { className: 'ui-section-container' }).element;
		this.section = [];
		SECTIONS.forEach(section =>  {
			this.section[section] = new Element(this.sectionContainer, { className: 'ui-section' }).element;
			this.section[section].img = new Element(this.section[section], { className: 'ui-section-img', image: `./src/assets/images/icons/${section}.png` }).element;
			this.section[section].addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		}) 
		this.section['profile'].addEventListener('click', () => { this.main.profileScene.open() });
		this.section['box'].addEventListener('click', () => { this.main.boxScene.open() });
		this.section['shop'].addEventListener('click', () => { this.main.shopScene.open() });
		this.section['map'].addEventListener('click', () => { this.main.mapScene.open() });
		this.section['damageDealt'].addEventListener('click', () => { this.damageDealtSwitch() });
		this.section['menu'].addEventListener('click', () => { this.main.menuScene.open() });

		this.mapName = new Element(this.mapPanel, { className: 'ui-map-name' }).element;
		this.mapWave = new Element(this.mapPanel, { className: 'ui-map-wave' }).element;
		this.mapRecord = new Element(this.mapPanel, { className: 'ui-map-record' }).element;
		this.mapWavePokemonContainer = new Element(this.mapPanel, { className: 'ui-map-wave-pokemon-container' }).element;
		this.mapWavePokemon = [];

		this.infoContainer = new Element(this.mapPanel, { className: 'ui-info-container' }).element;
		this.infoName = new Element(this.infoContainer, { className: 'ui-info-name' }).element;
		this.infoStatContainer = new Element(this.infoContainer, { className: 'ui-info-stat-container' }).element;
		this.infoHealth = new Element(this.infoStatContainer, { className: 'ui-info-stat' }).element;
		this.infoArmor = new Element(this.infoStatContainer, { className: 'ui-info-stat' }).element;
		this.infoSpeed = new Element(this.infoStatContainer, { className: 'ui-info-stat' }).element;
		this.infoPower = new Element(this.infoStatContainer, { className: 'ui-info-stat' }).element;
		this.infoRegen = new Element(this.infoStatContainer, { className: 'ui-info-stat' }).element;
		this.infoStun = new Element(this.infoStatContainer, { className: 'ui-info-stat' }).element;
		this.infoSlow = new Element(this.infoStatContainer, { className: 'ui-info-stat' }).element;
		this.infoBurn = new Element(this.infoStatContainer, { className: 'ui-info-stat' }).element;
		this.infoPoison = new Element(this.infoStatContainer, { className: 'ui-info-stat' }).element;
		this.infoInvisible = new Element(this.infoStatContainer, { className: 'ui-info-stat' }).element;
		this.infoGold = new Element(this.infoStatContainer, { className: 'ui-info-stat' }).element;

		this.waveButtonBackground = new Element(this.mapPanel, { className: 'ui-wave-button-background' }).element;

		this.nextWave = new Element(this.mapPanel, { className: 'ui-next-wave' }).element;
		this.nextWave.addEventListener('mouseenter', () => { playSound('open', 'ui') })
		this.nextWave.addEventListener('click', () => this.main.area.newWave());

		this.autoWave = new Element(this.mapPanel, { className: 'ui-auto-wave' }).element;
		this.autoWave.addEventListener('mouseenter', () => { playSound('open', 'ui') })
		this.autoWave.addEventListener('click', () => this.main.area.switchAutoWave());

		this.speedWave = new Element(this.mapPanel, { className: 'ui-speed-wave', text: '🚀' }).element;
		this.speedWave.addEventListener('mouseenter', () => { playSound('open', 'ui') });
		this.speedWave.addEventListener('click', () => { this.main.game.toggleSpeed() });

		this.damageDealtContainer = new Element(this.mapPanel, { className: 'ui-damage-dealt-container' }).element;
		this.damageDealtUnit = [];

		for (let i = 0; i < 10; i++) {
			this.damageDealtUnit[i] = new Element(this.damageDealtContainer, { className: 'ui-damage-dealt-unit' }).element;
			this.damageDealtUnit[i].sprite = new Element(this.damageDealtUnit[i], { className: 'ui-damage-dealt-unit-sprite' }).element;
			this.damageDealtUnit[i].number = new Element(this.damageDealtUnit[i], { className: 'ui-damage-dealt-unit-number' }).element;
			this.damageDealtUnit[i].barContainer = new Element(this.damageDealtUnit[i], { className: 'ui-damage-dealt-unit-bar-container' }).element;
			this.damageDealtUnit[i].barPrevious = new Element(this.damageDealtUnit[i].barContainer, { className: 'ui-damage-dealt-unit-bar-previous' }).element;
			this.damageDealtUnit[i].bar = new Element(this.damageDealtUnit[i].barContainer, { className: 'ui-damage-dealt-unit-bar' }).element;
		}

		this.saveTeamButton = new Element(document.getElementById("screen"), { className: 'ui-save-team-button' }).element;
		this.saveTeamButton.addEventListener('mouseenter', () => { playSound('open', 'ui') })
		this.saveTeamButton.addEventListener('click', () => { this.main.teamManager.saveTeam(); });
		
		this.importTeamButton = new Element(document.getElementById("screen"), { className: 'ui-import-team-button' }).element;
		this.importTeamButton.addEventListener('mouseenter', () => { playSound('open', 'ui') })
		this.importTeamButton.addEventListener('click', () => { this.main.teamManager.importTeam(); });

		this.alwaysActualWave = new Element(document.getElementById("screen"), { className: 'ui-always-actual-wave' }).element;
		this.tilesCountContainer = new Element(document.getElementById("screen"), { className: 'ui-tiles-count-container' }).element;
		this.tilesCount = [];
		this.tilesCountNum = [0, 0, 0, 0];
		
		for (let i = 0; i < 4; i++) {
			this.tilesCount[i] = new Element(this.tilesCountContainer, { className: 'ui-tiles-count stroke' }).element;
		}
	}

	update() {
		this.updatePlayer();
		this.updatePokemon();
		this.updateMap();

		const wavePreview = this.main.area.waves[this.main.area.waveNumber].preview;
		this.displayEnemyInfo(wavePreview[this.enemyPositionDisplay], this.enemyPositionDisplay);

		if (this.main.showRoute) {
			this.alwaysActualWave.style.display = 'revert-layer';
			this.alwaysActualWave.innerHTML = `${this.main.area.map.name[this.main.lang].toUpperCase()} <br>${text.map.wave[this.main.lang].toUpperCase()} ${this.main.area.waveNumber}`;
		} else  {
			this.alwaysActualWave.style.display = 'none';
		}

		if (this.main.showTC) {
			this.tilesCountContainer.style.display = 'revert-layer';
			this.tilesCount.forEach((tc, i) => { tc.innerHTML = `${this.tilesCountNum[i]}/${this.main.area.map.tilesNum[i]}`})
		} else {
			this.tilesCountContainer.style.display = 'none';
		}

		this.saveTeamButton.innerHTML = text.ui.save[this.main.lang].toUpperCase();
		this.importTeamButton.innerHTML = text.ui.import[this.main.lang].toUpperCase();

		if ([0, 6, 7].includes(this.main.lang)) {
			this.importTeamButton.style.fontSize = '10px';
			this.saveTeamButton.style.fontSize = '10px'; 
		} else {
			this.importTeamButton.style.fontSize = '8px';
			this.saveTeamButton.style.fontSize = '8px'; 
		}

		if (this.main.teamManager.teams[this.main.area.routeNumber].length == 0) {
			this.importTeamButton.style.pointerEvents = 'none';
			this.importTeamButton.style.filter = 'brightness(0.7)';
		} else {
			this.importTeamButton.style.pointerEvents = 'revert-layer';
			this.importTeamButton.style.filter = 'revert-layer';
		}
	}

	updatePlayer() {
		this.playerPortrait.style.backgroundImage = `url("./src/assets/images/portraits/${this.main.player.portrait}.png")`;
		this.playerName.innerText = this.main.player.name.toUpperCase();
		this.playerGold.innerText = `$${this.main.utility.numberDot(this.main.player.gold)}`;
		this.playerStars.innerHTML = `<span class="msrre">⭐</span>${Math.min(900, this.main.player.stars)}`;
		this.playerHealth.innerHTML = `<span class="mcrre" style="color: var(--red)">❤︎</span>${this.main.player.health[this.main.area.map.id]}/14`;
	}

	updatePokemon() {
		for (let i = 0; i < 10; i++) {
			this.pokemon[i].name.innerText = text.ui.empty[this.main.lang].toUpperCase();
			this.pokemon[i].deploy.innerText = text.ui.deploy[this.main.lang].toUpperCase();
			this.pokemon[i].info.innerText = text.ui.info[this.main.lang].toUpperCase();
			this.pokemon[i].level.innerText = '';

			this.pokemon[i].name.style.color = '#888';
			this.pokemon[i].style.backgroundColor = 'revert-layer';
			this.pokemon[i].deploy.style.background = 'revert-layer';
			this.pokemon[i].sprite.style.backgroundImage = '';
			this.pokemon[i].deploy.style.filter = 'brightness(0.5)';
			this.pokemon[i].info.style.filter = 'brightness(0.5)';
			this.pokemon[i].deploy.style.pointerEvents = 'none';
			this.pokemon[i].info.style.pointerEvents = 'none';
			this.pokemon[i].deploy.style.display = 'none';
			this.pokemon[i].info.style.display = 'none';
			this.pokemon[i].stars.style.display = 'none';

			this.damageDealtUnit[i].sprite.style.display = 'none';
			this.damageDealtUnit[i].number.style.display = 'none';
			this.damageDealtUnit[i].barContainer.style.display = 'none';
			this.damageDealtUnit[i].bar.style.display = 'none';
		}

		this.main.team.pokemon.forEach((pokemon, i) => {
			this.pokemon[i].name.innerText = pokemon.name[this.main.lang].toUpperCase();
			this.pokemon[i].level.innerText = `Lv ${pokemon.lvl}`;
			this.pokemon[i].sprite.style.backgroundImage = `url("${pokemon.sprite.base}")`;
			
			this.damageDealtUnit[i].sprite.style.display = 'revert-layer';
			this.damageDealtUnit[i].number.style.display = 'revert-layer';
			this.damageDealtUnit[i].barContainer.style.display = 'revert-layer';
			this.damageDealtUnit[i].bar.style.display = 'revert-layer';

			this.damageDealtUnit[i].sprite.style.backgroundImage = `url("${pokemon.sprite.base}")`;
			this.damageDealtUnit[i].bar.style.backgroundColor = pokemon.specie.color;
			this.damageDealtUnit[i].barPrevious.style.backgroundColor = `${pokemon.specie.color}2D`;

			if (pokemon.isDeployed) {
				this.pokemon[i].deploy.style.background = 'var(--red)';
				this.pokemon[i].deploy.innerText = text.ui.retire[this.main.lang].toUpperCase();
			}

			this.pokemon[i].name.style.color = pokemon.specie.color;
			this.pokemon[i].style.backgroundColor = `${pokemon.specie.color}2D`;
			this.pokemon[i].deploy.style.filter = 'revert-layer';
			this.pokemon[i].info.style.filter = 'revert-layer';
			this.pokemon[i].deploy.style.pointerEvents = 'all';
			this.pokemon[i].info.style.pointerEvents = 'all';
			this.pokemon[i].deploy.style.display = 'revert-layer';
			this.pokemon[i].info.style.display = 'revert-layer';
		})

		for (let i = 9; i > this.main.player.teamSlots - 1; i--) {
			this.pokemon[i].style.background = 'rgba(0, 0, 0, 0.55)';
			this.pokemon[i].name.innerText = text.ui.locked[this.main.lang].toUpperCase();
			this.pokemon[i].stars.style.display = 'revert-layer';		
		}
	}

	displayEnemyInfo(enemy, pos) {
		if (pos >= this.mapWavePokemon.length) {
			const wavePreview = this.main.area.waves[this.main.area.waveNumber].preview;
			enemy = wavePreview[0];
			pos = 0;
		}
		
		this.mapWavePokemon.forEach((pokemon, i) => {
			pokemon.style.filter = `brightness(0.8)`;
			if (pos === i) pokemon.style.filter = `brightness(1) drop-shadow(0 0 1px white)`;
		})

		const bonusSteps = Math.floor((this.main.area.waveNumber-1) / 5);

		let hp = enemy.hp;
		let armor = enemy.armor;
		let gold = enemy.gold + this.main.player.extraGold;

		if (bonusSteps > 0) {
			hp = Math.floor(hp * (1 + 0.02 * bonusSteps));
			armor = Math.floor(armor * (1 + 0.01 * bonusSteps));
			gold = Math.floor(gold * (1 + 0.15 * bonusSteps));
		}

		this.infoName.innerHTML = enemy.name[this.main.lang].toUpperCase(); 
		this.infoHealth.innerHTML = `${text.ui.health[this.main.lang].toUpperCase()} <span class="pos-right">${hp}</span>`;
		this.infoArmor.innerHTML =`${text.ui.armor[this.main.lang].toUpperCase()} <span class="pos-right">${armor || 0}</span>`;
		this.infoSpeed.innerHTML =`${text.ui.speed[this.main.lang].toUpperCase()} <span class="pos-right">${enemy.speed}</span>`;
		this.infoPower.innerHTML = `${text.ui.power[this.main.lang].toUpperCase()} <span class="pos-right">${enemy.power}</span>`;
		this.infoRegen.innerHTML = `${text.ui.regen[this.main.lang].toUpperCase()} <span class="pos-right">${enemy.regeneration}/s</span>`;
		this.infoStun.innerHTML = `${text.ui.stun[this.main.lang].toUpperCase()}`;
		this.infoSlow.innerHTML = `${text.ui.slow[this.main.lang].toUpperCase()}`;
		this.infoBurn.innerHTML = `${text.ui.burn[this.main.lang].toUpperCase()}`;
		this.infoPoison.innerHTML = `${text.ui.poison[this.main.lang].toUpperCase()}`;
		this.infoInvisible.innerHTML = `${text.ui.invisible[this.main.lang].toUpperCase()} <span class="pos-right">${(enemy.invisible) ? text.ui.yes[this.main.lang].toUpperCase() : text.ui.no[this.main.lang].toUpperCase()}</span>`;
		this.infoGold.innerHTML = `${text.ui.gold[this.main.lang].toUpperCase()} <span class="pos-right">$${gold}</span>`;

		this.infoStun.innerHTML += (enemy.canStun) ? `<span class="pos-right">${text.ui.vulnerable[this.main.lang].toUpperCase()}</span>` : `<span class="pos-right">${text.ui.resistant[this.main.lang].toUpperCase()}</span>`
		this.infoSlow.innerHTML += (enemy.canSlow) ? `<span class="pos-right">${text.ui.vulnerable[this.main.lang].toUpperCase()}</span>` : `<span class="pos-right">${text.ui.resistant[this.main.lang].toUpperCase()}</span>`
		this.infoBurn.innerHTML += (enemy.canBurn) ? `<span class="pos-right">${text.ui.vulnerable[this.main.lang].toUpperCase()}</span>` : `<span class="pos-right">${text.ui.resistant[this.main.lang].toUpperCase()}</span>`
		this.infoPoison.innerHTML += (enemy.canPoison) ? `<span class="pos-right">${text.ui.vulnerable[this.main.lang].toUpperCase()}</span>` : `<span class="pos-right">${text.ui.resistant[this.main.lang].toUpperCase()}</span>`	

		this.enemyPositionDisplay = pos;
	}

	updateMap() {
		this.mapName.innerText = this.main.area.map.name[this.main.lang].toUpperCase();
		this.mapWave.innerText = `${text.map.wave[this.main.lang].toUpperCase()} ${this.main.area.waveNumber}`;
		this.mapRecord.innerHTML = `<span class="msrre">⭐</span>${Math.min(100, this.main.player.records[this.main.area.map.id])}`;

		const pokemonCount = this.countPokemon(this.main.area.waves[this.main.area.waveNumber]);
		const wavePreview = this.main.area.waves[this.main.area.waveNumber].preview;

		this.mapWavePokemonContainer.innerHTML = "";
		this.mapWavePokemon = [];
		wavePreview.forEach((pokemon, i) => {
			this.mapWavePokemon[i] = new Element(this.mapWavePokemonContainer, { className: 'ui-map-wave-pokemon', image: pokemon.sprite.base }).element;
			this.mapWavePokemon[i].addEventListener('click', () => { 
				playSound('click1', 'ui');
				this.displayEnemyInfo(pokemon, i);
			})
			this.mapWavePokemon[i].addEventListener('mouseenter', () => { playSound('hover1', 'ui') });
			this.mapWavePokemon[i].count = new Element(this.mapWavePokemon[i], { className: 'stroke', text: `x${pokemonCount[i]-1}` }).element;
			this.mapWavePokemon[i].count.style.position = 'absolute';
			this.mapWavePokemon[i].count.style.color = 'var(--white)';
			this.mapWavePokemon[i].count.style.width = '100%';
			this.mapWavePokemon[i].count.style.textAlign = 'center';
			this.mapWavePokemon[i].count.style.fontSize = '8px';
			this.mapWavePokemon[i].count.style.bottom = '-5px';
		})

		this.autoWave.innerHTML = text.ui.autoWave[this.main.lang].toUpperCase();
		this.nextWave.innerText = text.ui.nextWave[this.main.lang].toUpperCase();
		
		this.autoWave.style.filter = `revert-layer`;
		this.autoWave.style.pointerEvents = `revert-layer`;
		this.speedWave.style.filter = `revert-layer`;
		this.speedWave.style.pointerEvents = `revert-layer`;

		if (this.main.area.waveActive) {
			this.nextWave.style.filter = `brightness(0.8)`;
			this.nextWave.style.pointerEvents = 'none';
		} else {
			this.nextWave.style.filter = `revert-layer`;
			this.nextWave.style.pointerEvents = 'all';
		}
	}

	countPokemon(grupo) {
	    const res = {};

	    const arrayCount = (arr) => {
	        arr.forEach(pokemon => {
	            if (pokemon !== null) {
	                const id = pokemon.id;
	                res[id] = (res[id] || 0) + 1;
	            }
	        });
	    };

	    arrayCount(grupo.preview);
	    arrayCount(grupo.wave);

	    return grupo.preview.map(pokemon => res[pokemon.id]);
	}

	updateDamageDealt() {
		this.main.team.pokemon.forEach((pokemon, i) => {
			if (pokemon.damageDealt > 0) {
				const per = Math.ceil((pokemon.damageDealt/this.main.area.totalDamageDealt)*100)
				this.damageDealtUnit[i].number.innerHTML = `
					${this.main.utility.numberDot(pokemon.damageDealt, this.main.lang)} 
					<span style="position: absolute; right: 0px; top: 2px; font-size: 8px; text-align: right">(${per}%)</span>
				`;
				this.damageDealtUnit[i].bar.style.width = `${per}%`;
			} else {
				this.damageDealtUnit[i].number.innerHTML = `0 <span style="position: absolute; right: 0px; top: 2px; font-size: 8px; text-align: right">(0%)</span>`;
				this.damageDealtUnit[i].bar.style.width = '0%';
			}
		});
	}

	refreshDamageDealt(force = false) {	
		for (let i = 0; i < 10; i++) {
			if (this.main.team.pokemon[i]) this.main.team.pokemon[i].damageDealt = 0;
			this.damageDealtUnit[i].number.innerHTML = `0 <span style="position: absolute; right: 0px; top: 2px; font-size: 8px; text-align: right">(0%)</span>`;
			this.damageDealtUnit[i].barPrevious.style.width = (force) ? '0%' : this.damageDealtUnit[i].bar.style.width;
			this.damageDealtUnit[i].bar.style.width = '0%';
		}
	}

	damageDealtSwitch() {
		playSound('option', 'ui');
		this.damageDealtDisplay =! this.damageDealtDisplay;
		if (this.damageDealtDisplay) this.damageDealtContainer.style.display = 'block';
		else this.damageDealtContainer.style.display = 'none';
	}

	blockRightUI() {
		this.mapPanel.style.pointerEvents = 'none';
		this.mapPanel.style.filter = 'brightness(0.8)';
		this.nextWave.style.pointerEvents = 'none';
		this.mapWavePokemonContainer.style.pointerEvents = 'all';
	}

	blockLeftUI() {
		this.playerPanel.style.pointerEvents = 'none';
		this.playerPanel.style.filter = 'brightness(0.8)';
		this.playerPanel.querySelectorAll('*').forEach(el => el.style.pointerEvents = 'none');
	}

	blockAllUI() {
		this.blockRightUI();
		this.blockLeftUI();
	}

	blockMenuUI() {
		SECTIONS.forEach(section =>  {
			this.section[section].style.pointerEvents = 'none';
			this.section[section].img.style.backgroundSize = '17px';
			this.section[section].img.style.opacity = '0.8'
		})
	}

	revertUI() {
		this.mapPanel.style.pointerEvents = 'all';
		this.playerPanel.style.pointerEvents = 'all';
		this.mapPanel.style.filter = 'revert-layer';
		this.playerPanel.style.filter = 'revert-layer';
		this.nextWave.style.pointerEvents = 'all';

		SECTIONS.forEach(section =>  {
			this.section[section].style.pointerEvents = 'all';
			this.section[section].img.style.backgroundSize = 'revert-layer';
			this.section[section].img.style.opacity = 'revert-layer';
		})
	}
}


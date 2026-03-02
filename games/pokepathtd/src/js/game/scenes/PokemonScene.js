import { GameScene } from '../../utils/GameScene.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';
import { pokemonData } from '../data/pokemonData.js';

const DATA = [
	'power', 'speed', 'critical', 'range', 'rangeType', 'terrain', 'attackType'
]

const TERRAINS = {
	1: ['Field', 'Campo', 'Champ', 'Campo', 'Campo', 'Feld', '野原', '들판'],
	2: ['Grass', 'Hierba', 'Herbe', 'Grama', 'Erba', 'Gras', '草', '풀'],
	3: ['Water', 'Agua', 'Eau', 'Água', 'Acqua', 'Wasser', '水', '물'],
	4: ['Mountain', 'Montaña', 'Montagne', 'Montanha', 'Montagna', 'Berg', '山', '산'],
	5: ['All', 'Todo', 'Tout', 'Tudo', 'Tutto', 'Alle', 'すべて', '모두']
}

const TARGET_MODES = [
	'first', 'last', 'highHP', 'lowHP', 'highArmor', 'noArmor', 'faster', 'slower', 'poisoned', 'notPoisoned', 
	'burned', 'notBurned', 'stuned', 'notStuned', 'slowed', 'notSlowed', 'curseable', 'random', 'invisible', //'nigthmare', 'notNigthmare'
]

const TARGET_MODES_TRADUCTIONS = {
	area: ['Area', 'Área', 'Zone', 'Área', 'Area', 'Bereich', 'エリア', '지역'],
	aura: ['Aura', 'Aura', 'Aura', 'Aura', 'Aura', 'Aura', 'オーラ', '오라'],
	allies: ['Aura', 'Aura', 'Aura', 'Aura', 'Aura', 'Aura', 'オーラ', '오라'],
	available: ['Available', 'Disponibles', 'Disponibles', 'Disponíveis', 'Disponibili', 'Verfügbar', '利用可能', '이용 가능'],

	first: ['First', 'Primero', 'Premier', 'Primeiro', 'Primo', 'Erster', '最初', '첫 번째'],
	last: ['Last', 'Último', 'Dernier', 'Último', 'Ultimo', 'Letzter', '最後', '마지막'],

	faster: ['Faster', 'Más rápido', 'Plus rapide', 'Mais rápido', 'Più veloce', 'Schneller', 'より速い', '더 빠름'],
	slower: ['Slower', 'Más lento', 'Plus lent', 'Mais lento', 'Più lento', 'Langsamer', 'より遅い', '더 느림'],

	highArmor: ['High Armor', 'Más armadura', 'Haute armure', 'Mais armadura', 'Alta armatura', 'Hohe Rüstung', '高防御', '높은 방어'],
	noArmor: ['No Armor', 'Sin armadura', 'Pas d’armure', 'Sem armadura', 'Senza armatura', 'Keine Rüstung', '無防御', '방어 없음'],

	highHP: ['High HP', 'Mas PS', 'PV altos', 'HP alto', 'Alta salute', 'Hohe KP', '高HP', '높은 HP'],
	lowHP: ['Low HP', 'Menos PS', 'PV bajos', 'HP baixo', 'Bassa salute', 'Niedrige KP', '低HP', '낮은 HP'],

	poisoned: ['Poisoned', 'Envenenado', 'Empoisonné', 'Envenenado', 'Avvelenato', 'Vergiftet', '毒状態', '독 중독'],
	notPoisoned: ['Not Poisoned', 'No envenenado', 'Non empoisonné', 'Não envenenado', 'Non avvelenato', 'Nicht vergiftet', '未毒', '비중독'],

	burned: ['Burned', 'Quemado', 'Brûlé', 'Queimado', 'Scottato', 'Verbrannt', '火傷', '화상'],
	notBurned: ['Not Burned', 'No quemado', 'Non brûlé', 'Não queimado', 'Non scottato', 'Nicht verbrannt', '未火傷', '비화상'],

	stuned: ['Stunned', 'Aturdido', 'Étourdí', 'Atordoado', 'Stordito', 'Betäubt', '気絶', '기절'],
	notStuned: ['Not Stunned', 'No aturdido', 'Non étourdí', 'Não atordoado', 'Non stordito', 'Nicht betäubt', '未気絶', '비기절'],

	slowed: ['Slowed', 'Ralentizado', 'Ralenti', 'Lento', 'Rallentato', 'Verlangsamt', '減速', '감속'],
	notSlowed: ['Not Slowed', 'No ralentizado', 'Non ralenti', 'Não lento', 'Non rallentato', 'Nicht verlangsamt', '未減速', '비감속'],

	curseable: ['Curseable', 'Maldecible', 'Maudissable', 'Amaldiçoável', 'Maledicibile', 'Verfluchbar', '呪われ得る', '저주 가능'],

	random: ['Random', 'Aleatorio', 'Aléatoire', 'Aleatório', 'Casuale', 'Zufällig', 'ランダム', '무작위'],
	invisible: ['Invisible', 'Invisible', 'Invisible', 'Invisível', 'Invisibile', 'Unsichtbar', '透明', '투명'],

	// nigthmare: ["Has Nightmare", "Con Pesadilla", "Avec Cauchemar", "Com Pesadelo", "Con Incubo", "Mit Albtraum", "ナイトメアあり", "악몽 있음"],
	// notNigthmare: ["No Nightmare", "Sin Pesadilla", "Sans Cauchemar", "Sem Pesadelo", "Senza Incubo", "Ohne Albtraum", "ナイトメアなし", "악몽 없음"]
}

export class PokemonScene extends GameScene {
	constructor(main) {
		super(480, 415);
		this.main = main;

		this.pos;
		this.pokemon;
		this.boxArray;

		this.render();
	}

	render() {
		this.title.innerHTML = text.pokemon.title[this.main.lang].toUpperCase();

		this.name = new Element(this.container, { className: 'pokemon-scene-name' }).element;
		this.arrowPrev = new Element(this.container, { className: 'pokemon-scene-arrow-prev', text: '<' }).element;
		this.arrowNext = new Element(this.container, { className: 'pokemon-scene-arrow-next', text: '>' }).element;

		this.arrowPrev.addEventListener('click', () => { this.changePokemon(-1) })
		this.arrowNext.addEventListener('click', () => { this.changePokemon(1) })
		this.arrowPrev.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		this.arrowNext.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })

		this.dataContainer = new Element(this.container, { className: 'pokemon-scene-data-container' }).element;
		this.data = [];

		DATA.forEach(data => {
			this.data[data] = new Element(this.dataContainer, { className: 'pokemon-scene-data' }).element;
			this.data[data].label = new Element(this.data[data], { className: 'pokemon-scene-data-label', text: text.pokemon[data][this.main.lang] }).element;
			if (data != 'attackType') this.data[data].value = new Element(this.data[data], { className: 'pokemon-scene-data-value' }).element;
			else {
				this.data[data].left = new Element(this.data[data], { className: 'pokemon-scene-data-arrow-at', text: '<' }).element;
				this.data[data].value = new Element(this.data[data], { className: 'pokemon-scene-data-value-at' }).element;
				this.data[data].right = new Element(this.data[data], { className: 'pokemon-scene-data-arrow-at', text: '>' }).element;

				this.data[data].left.addEventListener('click', () => { this.changeAttackType(-1) })
				this.data[data].right.addEventListener('click', () => { this.changeAttackType(1) })
				this.data[data].left.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
				this.data[data].right.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
			}
		})

		this.description = new Element(this.container, { className: 'pokemon-scene-description' }).element;

		this.levelUpContainer = new Element(this.container, { className: 'pokemon-scene-level-up-container' }).element;

		this.levelUp = new Element(this.levelUpContainer, { className: 'pokemon-scene-level-up' }).element;
		this.levelUp.addEventListener('click', () => {
			if (this.pokemon.lvl < 100 && this.main.player.gold >= this.pokemon.cost) {
				this.main.player.changeGold(-this.pokemon.cost);
				this.pokemon.levelUp();
				this.main.UI.updatePokemon();
				this.update();
				this.showLevelUpEffect();
				this.main.boxScene.update();
				playSound('obtain', 'ui');
			}
		})

		this.levelUpFive = new Element(this.levelUpContainer, { className: 'pokemon-scene-level-up' }).element;

		this.levelUpFive.addEventListener('click', () => {
			if (this.pokemon.lvl < 96 && this.main.player.gold >= this.pokemon.checkCost(5)) {
				this.main.player.changeGold(-this.pokemon.checkCost(5));
				for (let i = 0; i < 5; i++) this.pokemon.levelUp();
				this.main.UI.updatePokemon();
				this.update();
				this.showLevelUpEffect();
				this.main.boxScene.update();
				playSound('obtain', 'ui');
			}
		})

		this.levelUpTen = new Element(this.levelUpContainer, { className: 'pokemon-scene-level-up' }).element;

		this.levelUpTen.addEventListener('click', () => {
			if (this.pokemon.lvl < 91 && this.main.player.gold >= this.pokemon.checkCost(10)) {
				this.main.player.changeGold(-this.pokemon.checkCost(10));
				for (let i = 0; i < 10; i++) this.pokemon.levelUp();
				this.main.UI.updatePokemon();
				this.update();
				this.showLevelUpEffect();
				this.main.boxScene.update();
				playSound('obtain', 'ui');
			}
		})

		this.levelUp.addEventListener('mouseover', () => { 
			playSound('hover2', 'ui');
			this.showLevelUpEffect()
		})

		this.levelUpFive.addEventListener('mouseover', () => { 
			playSound('hover2', 'ui');
			this.showLevelUpEffect(5)
		})

		this.levelUpTen.addEventListener('mouseover', () => { 
			playSound('hover2', 'ui');
			this.showLevelUpEffect(10)
		})

		this.levelUp.addEventListener('mouseleave', () => { this.update(); })
		this.levelUpFive.addEventListener('mouseleave', () => { this.update(); })
		this.levelUpTen.addEventListener('mouseleave', () => { this.update(); })

		this.buttonDNA = new Element(this.container, { className: 'pokemon-scene-button-dna' }).element;
		this.buttonDNA.addEventListener('mouseenter', () => { playSound('hover2', 'ui') })
		this.buttonDNA.addEventListener('click', () => {
			playSound('teleport', 'effect')
			const pokemon = this.main.team.pokemon[0];
			this.main.team.pokemon.splice(0, 1);
			this.main.team.pokemon.push(pokemon);

			if ([58, 59, 63, 64, 65, 66].includes(this.pokemon.adn.id)) this.main.player.fossilInTeam--;
			this.pokemon.adn = this.main.team.pokemon[0].specie;
			if ([58, 59, 63, 64, 65, 66].includes(this.pokemon.adn.id)) this.main.player.fossilInTeam++;
			this.pokemon.transformADN();
			this.main.UI.updatePokemon();
			this.update();
		})

		this.evolutionSprite = new Element(this.container, { className: 'pokemon-scene-evolution-sprite' }).element;
		this.evolutionLevel = new Element(this.evolutionSprite, { className: 'pokemon-scene-evolution-level' }).element;

		this.background.addEventListener('click', (e) => { if (e.target == this.background)this.close() })
	}

	update() {
		DATA.forEach(data => { this.data[data].label.innerText = text.pokemon[data][this.main.lang] });

		this.title.innerHTML = text.pokemon.title[this.main.lang].toUpperCase();
		this.name.innerHTML = `${this.pokemon.name[this.main.lang].toUpperCase()} [${this.pokemon.lvl}]`;

		this.data['power'].value.innerHTML = `${this.pokemon.power}`;
		this.data['speed'].value.innerHTML = `${(this.pokemon.speed / 1000).toFixed(2)}s`;
		this.data['critical'].value.innerHTML = `${this.pokemon.critical.toFixed(1)}%`;
		this.data['range'].value.innerHTML = `${this.pokemon.range}`;
		this.data['rangeType'].value.innerHTML = `${text.pokemon[this.pokemon.rangeType][this.main.lang]}`;
		this.data['attackType'].value.innerHTML = `${TARGET_MODES_TRADUCTIONS[this.pokemon.targetMode][this.main.lang]}`;
		this.description.innerHTML = this.pokemon.ability.description[this.main.lang];

		if (this.pokemon.id == 64 || this.pokemon?.adn?.id == 64) {
			this.description.innerHTML += `<br><br> (${text.pokemon.current[this.main.lang]} +${this.main.player.fossilInTeam} ${text.pokemon.projectiles[this.main.lang]})`;
		} else if (this.pokemon.id == 65 || this.pokemon?.adn?.id == 65) {
			this.description.innerHTML += `<br><br> (${text.pokemon.current[this.main.lang]} -${this.main.player.fossilInTeam * 0.5}s)`;
		} else if (this.pokemon.id == 2 || this.pokemon?.adn?.id == 2 || this.pokemon.id == 45 || this.pokemon?.adn?.id == 45) {
			this.description.innerHTML += `<br><br> (${this.pokemon.ricochet} ${text.pokemon.ricochets[this.main.lang]})`;
		} else if (this.pokemon?.adn?.id == 19 || this.pokemon?.adn?.id == 57) {
			this.description.innerHTML += `<br><br> (${text.pokemon.notStack[this.main.lang]})`;
		}

		this.data['terrain'].value.innerHTML = "";
		if (this.pokemon.tiles.length == 4) this.data['terrain'].value.innerHTML = TERRAINS[5][this.main.lang];
		else {
			this.pokemon.tiles.forEach((tile, i) => {
				this.data['terrain'].value.innerHTML += `${TERRAINS[tile][this.main.lang]}`
				if (this.pokemon.tiles.length > i + 1) this.data['terrain'].value.innerHTML += `, `
			})
		}

		this.name.style.borderColor = this.pokemon.specie.color;
		this.name.style.color = this.pokemon.specie.color;
		this.description.style.color = this.pokemon.specie.color;
		this.arrowPrev.style.color = this.pokemon.specie.color;
		this.arrowNext.style.color = this.pokemon.specie.color;

		this.updateLevelButton();

		if (this.pokemon.targetMode == 'area' || this.pokemon.targetMode == 'aura' || this.pokemon.targetMode == 'allies' || this.pokemon.targetMode == 'available' || this.pokemon.ability.id == 'spinda') {
			this.data['attackType'].style.pointerEvents = 'none';
			this.data['attackType'].style.opacity = '80%';
		} else {
			this.data['attackType'].style.pointerEvents = 'revert-layer';
			this.data['attackType'].style.opacity = 'revert-layer';
		}

		if (this.pokemon.specie.evolution != undefined && this.pokemon.id != 70) {
			this.evolutionSprite.style.display = 'block';
			this.evolutionSprite.style.backgroundImage = `url("${pokemonData[this.pokemon.specie.evolution.pokemon].sprite.base}")`;
			this.evolutionLevel.innerHTML = `Lv ${this.pokemon.specie.evolution.level}`;
		} else this.evolutionSprite.style.display = 'none';

		if (this.pokemon.id == 70 && !this.main.boxScene.isOpen) {
			this.buttonDNA.style.display = 'block';
			this.buttonDNA.style.backgroundImage = `url("${this.pokemon.adn.sprite.base}")`;
			if (this.pokemon.isDeployed) {
				this.buttonDNA.style.pointerEvents = 'none';
				this.buttonDNA.style.filter = 'brightness(0.8)';
			} else {
				this.buttonDNA.style.pointerEvents = 'revert-layer';
				this.buttonDNA.style.filter = 'revert-layer';
			}
		} else this.buttonDNA.style.display = 'none';
	}

	changeAttackType(dir) {
		let index = TARGET_MODES.findIndex((targetMode) => targetMode == this.pokemon.targetMode);
		let indexMax = (this.pokemon.ability.id == 'frisk') ? 18 : 17;
		let indexMin = 0;

		index += dir;
		if (index > indexMax) index = indexMin;
		else if (index < indexMin) index = indexMax;
		this.pokemon.changeTargetMode(TARGET_MODES[index]);
		this.update();
		playSound('option', 'ui');
	}

	updateLevelButton() {
		if (this.pokemon.lvl === 100) {
			this.levelUp.innerHTML = `MAX`;
			this.levelUp.style.filter = 'brightness(0.8)';
			this.levelUp.style.pointerEvents = 'none';
			this.levelUp.style.lineHeight = '28px';
		} else {
			this.levelUp.style.lineHeight = 'revert-layer';
			this.levelUp.innerHTML = `${text.pokemon.lvlUp[this.main.lang]} <br>($${this.main.utility.numberDot(this.pokemon.cost, this.main.lang)})`;
			if (this.main.player.gold < this.pokemon.cost) {
				this.levelUp.style.filter = 'brightness(0.8)';
				//this.levelUp.style.pointerEvents = 'none';
			} else {
				this.levelUp.style.filter = 'revert-layer';
				this.levelUp.style.pointerEvents = 'all';
			}		
		}

		if (this.pokemon.lvl > 95) {
			this.levelUpFive.innerHTML = `MAX`;
			this.levelUpFive.style.filter = 'brightness(0.8)';
			this.levelUpFive.style.pointerEvents = 'none';
			this.levelUpFive.style.lineHeight = '28px';
		} else {
			this.levelUpFive.style.lineHeight = 'revert-layer';
			this.levelUpFive.innerHTML = `${text.pokemon.lvlUp[this.main.lang]} x5 <br>($${this.main.utility.numberDot(this.pokemon.checkCost(5), this.main.lang)})`;
			if (this.main.player.gold < this.pokemon.checkCost(5)) {
				this.levelUpFive.style.filter = 'brightness(0.8)';
				//this.levelUp.style.pointerEvents = 'none';
			} else {
				this.levelUpFive.style.filter = 'revert-layer';
				this.levelUpFive.style.pointerEvents = 'all';
			}		
		}

		if (this.pokemon.lvl > 90) {
			this.levelUpTen.innerHTML = `MAX`;
			this.levelUpTen.style.filter = 'brightness(0.8)';
			this.levelUpTen.style.pointerEvents = 'none';
			this.levelUpTen.style.lineHeight = '28px';
		} else {
			this.levelUpTen.style.lineHeight = 'revert-layer';
			this.levelUpTen.innerHTML = `${text.pokemon.lvlUp[this.main.lang]} x10 <br>($${this.main.utility.numberDot(this.pokemon.checkCost(10), this.main.lang)})`;
			if (this.main.player.gold < this.pokemon.checkCost(10)) {
				this.levelUpTen.style.filter = 'brightness(0.8)';
				//this.levelUp.style.pointerEvents = 'none';
			} else {
				this.levelUpTen.style.filter = 'revert-layer';
				this.levelUpTen.style.pointerEvents = 'all';
			}		
		}
	}

	changePokemon(dir) {
		this.pos += dir;
		if (this.main.boxScene.isOpen) {
			if (this.pos >= this.boxArray.length) this.pos = 0;
			else if (this.pos < 0) this.pos = this.boxArray.length - 1;
			this.pokemon = this.boxArray[this.pos];
		} else {
			if (this.pos >= this.main.team.pokemon.length) this.pos = 0;
			else if (this.pos < 0) this.pos = this.main.team.pokemon.length - 1;
			this.pokemon = this.main.team.pokemon[this.pos];
		}
		playSound('option', 'ui');
		this.update();
	}

	open(pokemon, pos, boxArray = []) {
		super.open();
		this.pokemon = pokemon;
		this.pos = pos;
		this.boxArray = boxArray;
		this.update();
	}

	showLevelUpEffect(levels = 1) {
		const specie = (this.pokemon.specie.evolution != undefined && (this.pokemon.lvl == this.pokemon.specie.evolution.level - levels)) ? pokemonData[this.pokemon.specie.evolution.pokemon] : this.pokemon.specie;

		const newPower = Math.floor(specie.power.base + (specie.power.scale * (this.pokemon.lvl + levels)));
		const newSpeed = Math.floor(specie.speed.base + (specie.speed.scale * (this.pokemon.lvl + levels)));
		const newCritical = specie.critical.base + (specie.critical.scale * (this.pokemon.lvl + levels));
		const newRange = Math.floor(specie.range.base + (specie.range.scale * (this.pokemon.lvl + levels)));
		
		const powerDiff = newPower - this.pokemon.power;
		const speedDiff = Math.abs((newSpeed / 1000).toFixed(2) - (this.pokemon.speed / 1000).toFixed(2)).toFixed(2);
		const criticalDiff = (newCritical.toFixed(1) - this.pokemon.critical.toFixed(1)).toFixed(1);
		const rangeDiff = newRange - this.pokemon.range;

		if (powerDiff > 0) {
			this.data['power'].value.innerHTML = `${this.pokemon.power} <span style="color:var(--green)">(+${powerDiff})</span>`;
		}
		if (speedDiff > 0) {
			this.data['speed'].value.innerHTML = `${(this.pokemon.speed / 1000).toFixed(2)}s <span style="color:var(--green)">(-${(speedDiff)}s)</span>`;
		} 
		if (criticalDiff > 0) {
			this.data['critical'].value.innerHTML = `${this.pokemon.critical.toFixed(1)}% <span style="color:var(--green)">(+${criticalDiff}%)</span>`;
		}
		if (rangeDiff > 0) {
			this.data['range'].value.innerHTML = `${this.pokemon.range} <span style="color:var(--green)">(+${rangeDiff})</span>`;
		}
		
	}
}
import { GameScene } from '../../utils/GameScene.js';
import { Element } from '../../utils/Element.js';
import { Input } from '../../utils/Input.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';

import { achievementData } from '../data/achievementData.js';

export class ProfileScene extends GameScene {
	constructor(main) {
		super(520, 540);
		this.main = main;
		this.render();
	}

	render() {
		this.title.innerHTML = text.profile.title[this.main.lang].toUpperCase();

		this.playerContainer = new Element(this.container, { className: 'profile-player-container' }).element;

		this.portrait = new Element(this.playerContainer, { className: 'profile-scene-portrait' }).element;

		this.avatarPrev = new Element(this.playerContainer, { className: 'profile-scene-avatar-arrow-prev', text: '<' }).element;
		this.avatarNext = new Element(this.playerContainer, { className: 'profile-scene-avatar-arrow-next', text: '>' }).element;
		this.avatarPrev.addEventListener('click', () => { this.changePortrait(-1) });
		this.avatarNext.addEventListener('click', () => { this.changePortrait(1) });
		this.avatarPrev.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		this.avatarNext.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })

		this.name = new Input(
			this.playerContainer, 
			"text", 
			{ 
				className: "profile-scene-name", 
				maxlength: 9, 
				cb: () => { this.changeName() } 
			}
		);

		this.achievementsContainer = new Element(this.container, { className: 'profile-scene-achievements-container' }).element;
		this.achievement = [];
		
		for (let i = 0; i < 32; i++) {
			this.achievement[i] = new Element(this.achievementsContainer, { className: 'profile-scene-achievement' }).element;
		}

		this.statsContainer = new Element(this.container, { className: 'profile-stats-container' }).element;
		this.stats = [];

		for (let i = 0; i < 17; i++) {
			this.stats[i] = new Element(this.statsContainer, { className: 'profile-stat' }).element;
		 	this.stats[i].label = new Element(this.stats[i], { className: 'profile-stat-label' }).element;
		 	this.stats[i].value = new Element(this.stats[i], { className: 'profile-stat-value' }).element;
		}

		this.background.addEventListener('click', (e) => { if (e.target == this.background)this.close() })
	}

	update() {
		this.title.innerHTML = text.profile.title[this.main.lang].toUpperCase();
		this.name.value.placeholder = this.main.player.name;
		this.portrait.style.backgroundImage = `url("./src/assets/images/portraits/${this.main.player.portrait}.png")`;

		this.achievement.forEach((achievement, i) => {
			this.achievement[i].style.backgroundImage = `url("${achievementData[i].image}")`;
			this.achievement[i].style.filter = (this.main.player.achievements[i].status) ? 'brightness(1)' : 'grayscale(1) brightness(0.5)';
			this.main.tooltip.bindToAchievement(this.achievement[i], achievementData[i]);
		})

		for (let i = 0; i < 17; i++) {
		 	this.stats[i].label.innerText = text.profile.stats[i][this.main.lang].toUpperCase();
		}

		this.stats[0].value.innerText = this.main.utility.minutsToTime(this.main.player.stats.timePlayed);
		this.stats[1].value.innerText = `${Math.min(900, this.main.player.stars)}/900`;
		this.stats[2].value.innerText = `${this.main.player.stats.pokemonOwned}/70`;
		this.stats[3].value.innerText = `${this.main.player.stats.highestPokemonLevel}/100`;
		this.stats[4].value.innerText = `${this.main.utility.numberDot(this.main.player.stats.totalPokemonLevel, this.main.lang)}/${this.main.utility.numberDot(7000, this.main.lang)}`;
		this.stats[5].value.innerText = `$${this.main.utility.numberDot(this.main.player.stats.totalGold, this.main.lang)}`;
		this.stats[6].value.innerText = `${this.main.utility.numberDot(this.main.player.stats.wavesCompleted, this.main.lang)}`;
		this.stats[7].value.innerText = `${this.main.utility.numberDot(this.main.player.stats.highestHit, this.main.lang)}`;
		this.stats[8].value.innerText = `${this.main.utility.numberDot(this.main.player.stats.defeatedEnemies, this.main.lang)}`;
		this.stats[9].value.innerText = `${this.main.player.stats.defeatedSpecies.size}/124`;
		this.stats[10].value.innerText = `${this.main.utility.numberDot(this.main.player.stats.appliedStuns, this.main.lang)}`;
		this.stats[11].value.innerText = `${this.main.utility.numberDot(this.main.player.stats.appliedSlows, this.main.lang)}`;
		this.stats[12].value.innerText = `${this.main.utility.numberDot(this.main.player.stats.appliedBurns, this.main.lang)}`;
		this.stats[13].value.innerText = `${this.main.utility.numberDot(this.main.player.stats.appliedPoisons, this.main.lang)}`;
		this.stats[14].value.innerText = `${this.main.utility.numberDot(this.main.player.stats.appliedCurses, this.main.lang)}`;
		this.stats[15].value.innerText = `${this.main.utility.numberDot(this.main.player.stats.resets, this.main.lang)}`;
		this.stats[16].value.innerText = `$${this.main.utility.numberDot(this.main.player.achievementProgress.stolenGold, this.main.lang)}`;
	}

	changePortrait(dir) {
		let pos = this.main.player.portrait;
		pos += dir;

		if (pos < 0) pos = 19;
		else if (pos > 19) pos = 0

		this.main.player.portrait = pos;	

		this.update();
		this.main.UI.updatePlayer();
		playSound('option', 'ui');
	}

	changeName() {
		this.main.player.name = this.name.value.value;
		this.main.UI.updatePlayer();
	}

	saveProfile() {
		const dataPokePath = JSON.parse(window.localStorage.getItem("dataPokePath"));
        dataPokePath.save.player.name = this.main.player.name;
        dataPokePath.save.player.portrait = this.main.player.portrait;
        window.localStorage.setItem("dataPokePath", JSON.stringify(dataPokePath));
	}

	open() {
		super.open();
		this.update();
	}

	close() {
		this.main.tooltip.hide();
		super.close();
		this.saveProfile();
	}
}
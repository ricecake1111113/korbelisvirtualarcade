import { GameScene } from '../../utils/GameScene.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { saveData } from '../../file/data.js';
import { playSound } from '../../file/audio.js';

export class DefeatScene extends GameScene {
	constructor(main) {
		super(340, 300);
		this.main = main;
		
		this.header.removeChild(this.closeButton);
		this.render();
		this.saveWaveRetry = [25, 50, 75];
		this.savedWave = 0;
	}

	render() {
		this.title.innerHTML = text.defeat.title[this.main.lang].toUpperCase();

		this.prompt = new Element(this.container, { className: 'defeat-scene-prompt' }).element;

		this.image = new Element(this.container, { className: 'defeat-scene-image' }).element;
		this.restartButton = new Element(this.container, { className: 'defeat-restart-button' }).element;
		this.restartButton.addEventListener('click', () => this.restart());
		this.restartButton.addEventListener('mouseenter', () => { playSound('open', 'ui') });

		this.retryButton = new Element(this.container, { className: 'defeat-retry-button' }).element;
		this.retryButton.addEventListener('click', () => this.retry());
		this.retryButton.addEventListener('mouseenter', () => { playSound('open', 'ui') });

		this.info = new Element(this.container, { className: 'defeat-scene-info' }).element;

		this.banette = new Element(this.window, { className: 'defeat-scene-banette' }).element;
		this.banette.addEventListener('click', () => { this.useBanette() })
		this.banette.addEventListener('mouseenter', () => { playSound('teleport', 'effect'); });
		this.banette.addEventListener('mouseleave', () => { playSound('teleport', 'effect'); });
	}

	update() {
		this.savedWave = 0;

		this.title.innerHTML = text.defeat.title[this.main.lang].toUpperCase();
		this.prompt.innerHTML = `${text.defeat.prompt[this.main.lang].toUpperCase()} ${this.main.area.waveNumber - 1} ${text.map.waves[this.main.lang].toUpperCase()}`;
		this.restartButton.innerText = text.defeat.restart[this.main.lang].toUpperCase();
		this.retryButton.innerText = text.defeat.retry[this.main.lang].toUpperCase();

		if (this.main.area.waveNumber > 25) {
			this.getRetryWave();
			this.retryButton.style.filter = 'revert-layer';
			this.retryButton.style.pointerEvents = 'revert-layer';
			this.info.innerHTML = this.getRetryText(this.main.lang).toUpperCase();
		} else {
			this.retryButton.style.filter = 'brightness(0.8)';
			this.retryButton.style.pointerEvents = 'none';
			this.info.innerHTML = text.defeat.cantRetry[this.main.lang].toUpperCase();
		}

		(this.main.player.stars > 400 && this.main.autoReset == 0) ? this.banette.style.display = 'block' : this.banette.style.display = 'none';
	}

	open() {
		super.open();
		this.update();
		this.main.game.stop();

		const scenes = [
			this.main.boxScene,
			this.main.mapScene,
			this.main.pokemonScene,
			this.main.shopScene,
			this.main.profileScene,
		]
		
		scenes.forEach(scene => {
			if (scene.isOpen) scene.close();
		})

		playSound('results', 'ui');
	
		if (this.main.autoReset == 1) { this.restart({autoWave: this.main.area.autoWave, speedBuff: this.main.game.speedFactor}) } 
		if (this.main.autoReset == 2 ) { 
			if (this.main.area.waveNumber > 25) this.retry({autoWave: this.main.area.autoWave, speedBuff: this.main.game.speedFactor}) 
			else this.restart({autoWave: this.main.area.autoWave, speedBuff: this.main.game.speedFactor})
		} 
		
	}

	restart(autoReset = {}) {
		this.main.area.loadArea(this.main.area.map.id, 1, true);
		this.main.player.getHealed(14);
		this.close();

		if (autoReset.autoWave) this.main.area.switchAutoWave();
	}

	retry(autoReset = {}) {
		let lives = 7;
		if (this.main.player.stars >= 150) lives++;
		if (this.main.player.stars >= 300) lives++;
		if (this.main.player.stars >= 450) lives++;
		if (this.main.area.waveNumber == 100) lives = 1;
		
		this.main.area.loadArea(this.main.area.map.id, this.savedWave, true);
		this.main.player.getHealed(lives);
		this.close();

		if (autoReset.autoWave) this.main.area.switchAutoWave();
	}

	close() {
		super.close();
		this.savedWave = 0;

		this.main.UI.nextWave.style.filter = `revert-layer`;
		this.main.UI.nextWave.style.pointerEvents = 'all';

		this.main.area.autoWave = false;
		this.main.UI.autoWave.style.background = '#2c70e3';

		this.main.UI.saveTeamButton.style.display = 'revert-layer';
		this.main.UI.importTeamButton.style.display = 'revert-layer';
		
		this.main.UI.update();
		this.main.UI.revertUI();
		this.main.game.resume();
		this.main.player.stats.resets++;
		if (this.main.player.stats.resets == 100) this.main.player.unlockAchievement(11);
		
		playSound('button2', 'ui');
		saveData(this.main.player, this.main.team, this.main.box, this.main.area, this.main.shop, this.main.teamManager);
	}

	getRetryWave() {
	  	for (let i = 0; i < this.saveWaveRetry.length; i++) {
		    if (this.saveWaveRetry[i] < this.main.area.waveNumber) {
		      	this.savedWave = this.saveWaveRetry[i];
		    } else {
		      	break;
	    	}
	    }
	}

	getRetryText(lang) {
		let lives = 7;
		if (this.main.player.stars >= 150) lives++;
		if (this.main.player.stars >= 300) lives++;
		if (this.main.player.stars >= 450) lives++;
		if (this.main.area.waveNumber == 100) {
			lives = 1;
			this.savedWave = 100;
		}

		const text = [
			`You can use retry to return to wave ${this.savedWave} with ${lives} lives`,
			`Puedes reintentar y volver a la oleada ${this.savedWave} con ${lives} vidas`,
			`Vous pouvez réessayer et revenir à la vague ${this.savedWave} avec ${lives} vies`,
			`Você pode reiniciar e voltar à onda ${this.savedWave} com ${lives} vidas`,
			`Puoi ritentare e tornare all’ondata ${this.savedWave} con ${lives} vite`,
			`Du kannst mit ${lives} Leben zu Welle ${this.savedWave} zurück.`,
			`リトライを使うと、${lives}ライフの状態でウェーブ${this.savedWave}に戻れます`,
			`재시도를 사용하면 목숨 ${lives}개로 ${this.savedWave}웨이브로 돌아갈 수 있습니다`
		]
		return text[lang];
	}

	useBanette() {
		let dataPokePath = JSON.parse(window.localStorage.getItem("dataPokePath"))
		if (dataPokePath.usedBanette) location.reload();
		else {
			super.close();
			this.main.banetteScene.open();
		}
	}
}
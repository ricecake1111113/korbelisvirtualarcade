import { GameScene } from '../../utils/GameScene.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';

export class BanetteScene extends GameScene {
	constructor(main) {
		super(340, 210);
		this.main = main;
		this.boss;
		this.header.removeChild(this.closeButton);
		this.render();
	}

	render() {
		this.title.innerHTML = text.defeat.banette[this.main.lang].toUpperCase();

		this.prompt = new Element(this.container, { className: 'banette-scene-prompt' }).element;

		this.acceptButton = new Element(this.container, { className: 'banette-accept-button' }).element;
		this.acceptButton.addEventListener('click', () => { location.reload() });
		this.acceptButton.addEventListener('mouseenter', () => { playSound('open', 'ui') });
	}

	update() {
		this.prompt.innerHTML = this.getText(this.main.lang).toUpperCase();
		this.acceptButton.innerText = text.defeat.banetteAccept[this.main.lang].toUpperCase();
	}

	open() {
		super.open();
		this.update();
		let dataPokePath = JSON.parse(window.localStorage.getItem("dataPokePath"))
		dataPokePath.usedBanette = true;
		window.localStorage.setItem("dataPokePath", JSON.stringify(dataPokePath));
	}

	getText(lang) {
		const text = [
    		`Looks like Banette was nearby and witnessed your unfair death (blame the programmer). 
    			If you want to retry a wave and try a different strategy, click on Banette — nobody saw a thing.`,
    		`Vaya, Banette pasaba por aquí y ha visto que has muerto injustamente por culpa del programador...
				Si quieres reintentar la oleada con otra estrategia, haz clic en Banette y aquí no habrá pasado nada.`,
    		`Eh bien, Branette passait justement par là et a surpris ta disparition injuste, merci au programmeur. 
    			Si tu veux tenter la vague à nouveau avec une autre tactique, clique sur Branette et personne n'a rien vu.`,
    		`Opa, a Banette passou por aqui e viu que você morreu injustamente por culpa do programador. 
    			Se quiser tentar a onda de novo com outra estratégia, clique na Banette e ninguém vai notar.`,
    		`Ehi, Banette è passata di qui e ha visto che sei morto ingiustamente per colpa del programmatore. 
    			Se vuoi riprovare l'ondata con un'altra strategia, clicca su Banette e nessuno lo saprà.`,
    		`Banette war hier und hat gesehen, dass du wegen eines Programmierfehlers gestorben bist. 
    			Willst du die Welle nochmal probieren, klicke auf Banette und es ist, als wäre nichts passiert.`,
    		`おっと、ジュペッタが通りかかって、プログラマーのせいで理不尽にやられたところを見てしまった。
    			別の戦略でやり直したいなら、ジュペッタをクリックして。誰にもバレないよ。`,
    		`오, 다크펫이 지나가다가 네가 개발자 때문으로 억울하게 당한 걸 봐버렸어. 
    			다른 전략으로 다시 도전하고 싶다면 다크펫을 클릭해. 아무도 모를 거야.`
		]
		return text[lang];
	}
}
import { GameScene } from '../../utils/GameScene.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';

export class ShopScene extends GameScene {
	constructor(main) {
		super(260, 260);
		this.main = main;

		this.displayPokemon = new DisplayPokemon(this.main);	
		this.render();
	}

	render() {
		this.title.innerHTML = text.shop.title[this.main.lang].toUpperCase();

		this.prompt = new Element(this.container, { className: 'shop-scene-prompt' }).element;
		this.egg = new Element(this.container, { className: 'shop-scene-egg' }).element;
		this.purchase = new Element(this.container, { className: 'shop-scene-purchase' }).element;

		this.purchase.addEventListener('click', () => { 
			this.main.shop.buyEgg();
			playSound('purchase', 'ui');
		})
		this.purchase.addEventListener('mouseenter', () => { playSound('hover3', 'ui') })

		this.background.addEventListener('click', (e) => { if (e.target == this.background)this.close() })
	}

	update() {
		this.title.innerHTML = text.shop.title[this.main.lang].toUpperCase();
		this.prompt.innerHTML = `${text.shop.prompt[this.main.lang]} <span style="color:#70ac4c">$${this.main.utility.numberDot(this.main.shop.eggPrice, this.main.lang)}</span>`.toUpperCase();
		this.purchase.innerHTML = text.shop.purchase[this.main.lang].toUpperCase();
		if (this.main.player.gold >= this.main.shop.eggPrice && this.main.shop.eggList.length > 0) {
			this.purchase.style.pointerEvents = 'all';
			this.purchase.style.filter = 'revert-layer';
		} else {
			this.purchase.style.pointerEvents = 'none';
			this.purchase.style.filter = 'brightness(0.8)';
			if (this.main.shop.eggList.length === 0) {
				this.prompt.innerHTML = `${text.shop.prompt[this.main.lang]} <span style="color:#70ac4c">$0</span>`.toUpperCase();
				this.purchase.innerHTML = text.shop.sold[this.main.lang].toUpperCase();
			}
		}
	}

	open() {
		super.open();
		this.update();
	}
}

class DisplayPokemon extends GameScene {
	constructor(main) {
		super(200, 200);
		this.main = main;
		this.pokemon;
		
		this.header.removeChild(this.closeButton);
		this.render();
	}

	render() {
		this.title.innerHTML = text.shop.title[this.main.lang].toUpperCase();
		this.prompt = new Element(this.container, { className: 'dp-scene-prompt' }).element;
		this.pokemonName = new Element(this.container, { className: 'dp-scene-pokemon-name' }).element;
		this.image = new Element(this.container, { className: 'dp-scene-image' }).element;
		this.closeButton = new Element(this.container, { className: 'shop-scene-purchase' }).element;

		this.closeButton.addEventListener('click', () => {
			playSound('button2', 'ui'); 
			this.close();
		})
		this.closeButton.addEventListener('mouseenter', () => { playSound('hover3', 'ui') })
		this.background.addEventListener('click', (e) => { if (e.target == this.background) this.close() })
	}

	update() {
		this.title.innerHTML = text.shop.title[this.main.lang].toUpperCase();
		this.prompt.innerText = text.shop.new[this.main.lang].toUpperCase();
		this.pokemonName.innerHTML = this.pokemon.name[this.main.lang].toUpperCase();
		this.pokemonName.style.color = this.pokemon.specie.color;
		this.image.style.backgroundImage = `url("${this.pokemon.sprite.base}")`;
		this.closeButton.innerHTML = 'OK';
	}

	open(pokemon) {
		playSound('results', 'ui');
		this.pokemon = pokemon;

		super.open();
		this.update();
	}
}
import { Pokemon } from '../component/Pokemon.js';
import { saveData } from '../../file/data.js';

export class Shop {
	constructor(main, shopData) {
		this.main = main;
		this.eggPrice = shopData.eggPrice;
		this.eggList = shopData.eggList;
	}

	getSaveData() {
		return {
			eggPrice: this.eggPrice,
			eggList: this.eggList,
		};
	}

	buyEgg() {
		const index = Math.floor(Math.random() * this.eggList.length);
		const pokemon = this.eggList[index];

		if (this.main.team.pokemon.length < this.main.player.teamSlots) {
			this.main.team.addPokemon(new Pokemon(pokemon, 1, null, this.main));
			this.main.shopScene.displayPokemon.open(this.main.team.pokemon.at(-1))
		} else {
			this.main.box.addPokemon(new Pokemon(pokemon, 1, null, this.main));
			this.main.shopScene.displayPokemon.open(this.main.box.pokemon.at(-1))
		}

		this.main.player.stats.pokemonOwned++;

		this.main.player.stats.totalPokemonLevel++;
		this.main.player.achievementProgress.evolutionCount++;

		this.main.player.changeGold(-this.eggPrice);
		this.eggList.splice(index, 1);
		this.eggPrice = Math.min(50000, Math.ceil(this.eggPrice * 1.12 + 35));
		this.main.shopScene.update();
		this.main.UI.update();	
		if (!this.main.area.waveActive) saveData(this.main.player, this.main.team, this.main.box, this.main.area, this.main.shop, this.main.teamManager);

		if (this.eggList.length === 0) this.main.player.unlockAchievement(0);
		if (this.main.player.achievementProgress.evolutionCount === 140) this.main.player.unlockAchievement(1);
	}

}
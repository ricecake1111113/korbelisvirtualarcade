import { Pokemon } from '../component/Pokemon.js'; 

export class Box {
	constructor(main, boxData) {
		this.main = main;
		this.pokemon = boxData.map(data => Pokemon.fromOriginalData(data, this.main));
		this.pokemon.forEach(pokemon => pokemon.inGroup = false);
	}

	addPokemon(pokemon) {
		this.pokemon.push(pokemon);
	}

	removePokemon(pokemon) {
		const index = this.pokemon.indexOf(pokemon);
		this.pokemon.splice(index, 1);
	}
}
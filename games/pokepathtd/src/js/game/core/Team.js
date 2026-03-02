import { Pokemon } from '../component/Pokemon.js'; 
import { pokemonData } from '../data/pokemonData.js';

export class Team {
	constructor(main, teamData) {
		this.main = main;
		this.pokemon = teamData.map(data => Pokemon.fromOriginalData(data, this.main));
		this.pokemon.forEach(pokemon => {
			pokemon.inGroup = true
			if (pokemon.adn != undefined) pokemon.transformADN();
		});
	}

	addPokemon(pokemon) {
		pokemon.inGroup = true;
		pokemon.damageDealt = 0;
		pokemon.tilePosition = -1;
		if ([58, 59, 63, 64, 65, 66].includes(pokemon.specie.id)) this.main.player.fossilInTeam++;
		
		if (pokemon.id == 70) {
			pokemon.adn = (this.pokemon.length > 0) ? this.pokemon[0].specie : pokemonData['ditto'];
			if ([58, 59, 63, 64, 65, 66].includes(pokemon.adn.id)) this.main.player.fossilInTeam++;
			pokemon.adnPosition = 0;
			pokemon.transformADN();
		}

		this.pokemon.push(pokemon);
	}

	removePokemon(pokemon) {
		const index = this.pokemon.indexOf(pokemon);
		pokemon.inGroup = false;
		pokemon.damageDealt = 0;
		pokemon.tilePosition = -1;
		if ([58, 59, 63, 64, 65, 66].includes(pokemon.specie.id)) this.main.player.fossilInTeam--;
		if (pokemon.id == 70) {
			if ([58, 59, 63, 64, 65, 66].includes(pokemon.adn.id)) this.main.player.fossilInTeam--;
			pokemon.adn = pokemonData['ditto'];
			pokemon.adnPosition = 0;
			pokemon.transformADN();
		}
		
		this.pokemon.splice(index, 1);
	}
}
import { playSound } from '../../file/audio.js';
import { Tower } from '../component/Tower.js';
import { saveData } from '../../file/data.js';

export class TeamManager {
	constructor(main, data) {
		this.main = main;
		this.teams = Array.isArray(data) ? data : [[], [], [], [], [], [], [], [], []];
	}

	getSaveData() {
		return this.teams;
	}

	importTeam() {
		// retirar equipo actual
		const teamCopy = [...this.main.team.pokemon];
		this.main.UI.tilesCountNum = [0, 0, 0, 0];

		for (const pokemon of teamCopy) {
			if (pokemon.isDeployed) {
				pokemon.isDeployed = false;

				const index = this.main.area.towers.findIndex(tower => tower.pokemon === pokemon);
				if (index !== -1) {
					this.main.area.towers[index].tile.tower = false;
					this.main.area.towers.splice(index, 1);
				}
			}

			this.main.box.addPokemon(pokemon);
			this.main.team.removePokemon(pokemon);
		}

		//añadir nuevo equipo
		this.teams[this.main.area.routeNumber].forEach((pokemon, i) => {
			let indx = this.main.box.pokemon.findIndex(poke => poke.id === pokemon.id);
			this.main.team.addPokemon(this.main.box.pokemon[indx]);
			this.main.box.removePokemon(this.main.box.pokemon[indx]);

			//colocar torre
			if (pokemon.tilePosition != -1) {
				this.main.area.towers.push(
					new Tower(
						this.main,
						this.main.area.placementTiles[pokemon.tilePosition].position.x,
						this.main.area.placementTiles[pokemon.tilePosition].position.y,
						this.main.game.ctx,
						this.main.team.pokemon[i],
						this.main.area.placementTiles[pokemon.tilePosition]
					)
				);
				this.main.area.placementTiles[pokemon.tilePosition].tower = this.main.team.pokemon[i];
				this.main.team.pokemon[i].isDeployed = true;
				this.main.UI.tilesCountNum[this.main.area.placementTiles[pokemon.tilePosition].land -1]++;
				this.main.UI.updatePokemon();
				this.main.area.recalculateAuras();
			}
		})

		this.main.UI.update();
		playSound('option', 'ui');

		if (this.main.game.deployingUnit != undefined) this.main.game.cancelDeployUnit();
	}

	saveTeam() {
		this.teams[this.main.area.routeNumber] = [];

		this.main.team.pokemon.forEach(pokemon => {
			this.teams[this.main.area.routeNumber].push({
				id: pokemon.id,
				tilePosition: pokemon.tilePosition
			})
		})

		this.main.UI.update();
		playSound('option', 'ui');
		if (!this.main.area.waveActive) saveData(this.main.player, this.main.team, this.main.box, this.main.area, this.main.shop, this.main.teamManager);
	}
}
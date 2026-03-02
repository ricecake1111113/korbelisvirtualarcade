import { pokemonData } from '../data/pokemonData.js';

export class Pokemon {
	constructor(specie, lvl, targetMode, main, adn = undefined, favorite = false) {
		this.specie = specie;
		this.lvl = lvl;
		this.cost;

		this.id = this.specie.id;
		this.adn = adn;
		this.tilePosition = -1;
		this.favorite = favorite;

		this.sprite = specie.sprite;
		this.name = specie.name;
		this.ability = specie.ability;
		this.tiles = specie.tiles;
		this.projectile = specie.projectile;
		this.rangeType = specie.rangeType;
		this.attackType = specie.attackType;

		this.speed = Math.floor(this.specie.speed.base + (this.specie.speed.scale * lvl));
		this.power = Math.floor(this.specie.power.base + (this.specie.power.scale * lvl));
		this.range = Math.floor(this.specie.range.base + (this.specie.range.scale * lvl));

		//HABILIDADES
		this.ricochet = this.specie.ricochet ?? 0;
		
		this.innerRange = this.specie.range.inner;
		this.critical = this.specie.critical.base + (this.specie.critical.scale * lvl);
		this.setCost();

		this.isDeployed = false;
		this.inGroup = false;
		this.main = main;

		this.damageDealt = 0;

		if (targetMode == undefined) {
			if (this.attackType == 'area') this.targetMode = 'area';
			else if (
				this.ability.id == 'quadraShot' || this.ability.id == 'tripleShot' || this.ability.id == 'doubleShot' || 
				this.ability.id == 'curseDoubleShot' || this.ability.id == 'cradily'
			) this.targetMode = 'available';
			else if (this.attackType == 'aura') this.targetMode = 'aura';
			else if (this.ability.id == 'frisk') this.targetMode = 'invisible';
			else if (this.ability.id == 'burn') this.targetMode = 'notBurned';
			else if (this.ability.id == 'spinda') this.targetMode = 'random';
			else if (this.ability.id == 'curse') this.targetMode = 'curseable';
			else this.targetMode = 'first';
		} else this.targetMode = targetMode;
	}

	getOriginalData() {
		return {
			specie: this.specie,
			lvl: this.lvl,
			targetMode: this.targetMode,
			adn: this.adn,
			favorite: this.favorite
		};
	}

	static fromOriginalData(data, main) {
		return new Pokemon(
			data.specie,
			data.lvl,
			data.targetMode,
			main,
			data.adn,
			data.favorite
		);
	}

	changeTargetMode(mode) {
		this.targetMode = mode;
		if (this.isDeployed) {
            const tower = this.main.area.towers.find(t => t.pokemon === this);
            if (tower) tower.targetMode = mode;       
        }
	}

	levelUp() {
        this.lvl++;
        if (this.lvl >= this.specie.evolution?.level) {
        	this.updateSpecie(this.specie.evolution.pokemon);
        	this.main.player.achievementProgress.evolutionCount++;
        	if (this.main.player.achievementProgress.evolutionCount == 140) this.main.player.unlockAchievement(1);
        }
        this.updateStats();
        this.setCost();

		if (this.lvl > this.main.player.stats.highestPokemonLevel) this.main.player.stats.highestPokemonLevel = this.lvl;
		this.main.player.stats.totalPokemonLevel++;

		if (this.id == 70 && this.adn != undefined) this.transformADN();

        if (this.isDeployed) {
            const tower = this.main.area.towers.find(t => t.pokemon === this);
            if (tower) {
            	 if (this.id == 61) {
		            if (tower.tile.land == 2) tower.updateTowerSprite(tower.pokemon.specie.sprite.imageGrass, tower.pokemon.specie.sprite.framesGrass, tower.pokemon.specie.projectileGrass);
		            else if (tower.tile.land == 3) tower.updateTowerSprite(tower.pokemon.specie.sprite.imageWater, tower.pokemon.specie.sprite.framesWater, tower.pokemon.specie.projectileWater);
		            else if (tower.tile.land == 4) tower.updateTowerSprite(tower.pokemon.specie.sprite.imageMountain, tower.pokemon.specie.sprite.framesMountain, tower.pokemon.specie.projectileMountain);      
		        } else tower.updateStatsFromPokemon();
                if (typeof this.main.area.recalculateAuras === 'function') {
                    this.main.area.recalculateAuras();
                }
            }
        }

        if (this.lvl == 100) this.main.player.unlockAchievement(2);
    }

	setCost() {
		if (this.specie.costScale === 'low') {
			this.cost = Math.min(100000, Math.ceil(27 * Math.pow(1.12, this.lvl)) - 11);
		} else if (this.specie.costScale === 'mid') {
			this.cost = Math.min(100000, Math.ceil(35 * Math.pow(1.12, this.lvl)) + ((this.lvl-1) * 5));
		} else if (this.specie.costScale === 'high') {
			this.cost = Math.min(100000, Math.ceil(51 * Math.pow(1.12, this.lvl)) + (this.lvl * 3) - 1);		
		} else if (this.specie.costScale === 'veryHigh') {
			this.cost = Math.min(150000, Math.ceil(51 * Math.pow(1.12, this.lvl)) + (this.lvl * 3) - 1);		
		}
	}

	checkCost(num) {
		let cost = 0;

		for (let i = 0; i < num; i++) {
			if (this.specie.costScale === 'low') {
				cost += Math.min(100000, Math.ceil(27 * Math.pow(1.12, this.lvl+i)) - 11);
			} else if (this.specie.costScale === 'mid') {
				cost += Math.min(100000, Math.ceil(35 * Math.pow(1.12, this.lvl+i)) + (((this.lvl+i)-1) * 5));
			} else if (this.specie.costScale === 'high') {
				cost += Math.min(100000, Math.ceil(51 * Math.pow(1.12, this.lvl+i)) + ((this.lvl+i) * 3) - 1);		
			} else if (this.specie.costScale === 'veryHigh') {
				cost += Math.min(150000, Math.ceil(51 * Math.pow(1.12, this.lvl+i)) + ((this.lvl+i) * 3) - 1);		
			}
		}
		
		return cost;
	}

	updateStats() {
		this.speed = Math.floor(this.specie.speed.base + (this.specie.speed.scale * this.lvl));
		this.power = Math.floor(this.specie.power.base + (this.specie.power.scale * this.lvl));
		this.range = Math.floor(this.specie.range.base + (this.specie.range.scale * this.lvl));
		this.critical = this.specie.critical.base + (this.specie.critical.scale * this.lvl);
	}

	updateSpecie(specieName) {
		const newSpecie = pokemonData[specieName];
		this.specie = newSpecie;

		this.sprite = newSpecie.sprite;
		this.name = newSpecie.name;
		this.ability = newSpecie.ability;
		this.tiles = newSpecie.tiles;
		this.projectile = newSpecie.projectile;
		this.rangeType = newSpecie.rangeType;
		this.attackType = newSpecie.attackType;

		this.updateStats(); 
		this.setCost();
		if (this.main.boxScene.isOpen) this.main.boxScene.update()
	}

	transformADN() {
		this.sprite = this.adn.sprite;

		this.ability = this.adn.ability;
		this.tiles = this.adn.tiles;
		this.projectile = this.adn.projectile;
		this.rangeType = this.adn.rangeType;
		this.attackType = this.adn.attackType;

		this.speed = Math.floor(this.adn.speed.base + (this.adn.speed.scale * this.lvl));
		this.power = Math.floor(this.adn.power.base + (this.adn.power.scale * this.lvl));
		this.range = Math.floor(this.adn.range.base + (this.adn.range.scale * this.lvl));

		//HABILIDADES
		this.ricochet = this.adn.ricochet ?? 0;
		
		this.innerRange = this.adn.range.inner;
		this.critical = this.adn.critical.base + (this.adn.critical.scale * this.lvl);

		this.damageDealt = 0;

		if (this.attackType == 'area') this.targetMode = 'area';
		else if (
			this.ability.id == 'quadraShot' || this.ability.id == 'tripleShot' || this.ability.id == 'doubleShot' || 
			this.ability.id == 'curseDoubleShot' || this.ability.id == 'cradily'
		) this.targetMode = 'available';
		else if (this.attackType == 'aura') this.targetMode = 'aura';
		else if (this.ability.id == 'frisk') this.targetMode = 'invisible';
		else if (this.ability.id == 'burn') this.targetMode = 'notBurned';
		else if (this.ability.id == 'spinda') this.targetMode = 'random';
		else if (this.ability.id == 'curse') this.targetMode = 'curseable';
		else this.targetMode = 'first';
	}

}

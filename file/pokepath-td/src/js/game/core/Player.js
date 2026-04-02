export class Player {
	constructor(main, playerData) {
		this.main = main;
		this.lang = main.lang;

		this.name = playerData.name;
		this.portrait = playerData.portrait;
		this.gold = playerData.gold;
		this.health = playerData.health;

		this.records = playerData.records;
		this.stars =  playerData.stars;
		this.teamSlots = playerData.teamSlots;
		this.extraGold = playerData.extraGold;

		this.achievements = playerData.achievements;
		this.achievementProgress = playerData.achievementProgress;

		this.stats = playerData.stats;
		this.stats.defeatedSpecies = new Set(
		    Array.isArray(playerData.stats.defeatedSpecies)
		        ? playerData.stats.defeatedSpecies
		        : []
		);

		this.sortedBox = playerData.sortedBox ?? 0;
		this.fossilInTeam = playerData.fossilInTeam ?? 0;

		this.forceStarCount();
	}

	getSaveData() {
		return {
			name: this.name,
			portrait: this.portrait,
			gold: this.gold,
			health: this.health,
			records: this.records,
			stars: this.stars,
			teamSlots: this.teamSlots,
			extraGold: this.extraGold,
			achievements: this.achievements,
			achievementProgress: this.achievementProgress,
			stats: {
	            ...this.stats,
	            defeatedSpecies: Array.from(this.stats.defeatedSpecies)
	        },
	        sortedBox: this.sortedBox,
	        fossilInTeam: this.fossilInTeam,
		};
	}

	getDamaged(amount) {
		if (!this.main.area.waveActive) return;
		this.health[this.main.area.map.id] -= amount;
		this.main.UI.updatePlayer();
		if (this.health[this.main.area.map.id] <= 0) {
			this.health[this.main.area.map.id] = 0;
			this.main.defeatScene.open();
		}
	}

	getHealed(amount) {
		this.health[this.main.area.map.id] += amount;
		if (this.health[this.main.area.map.id] > 14) this.health[this.main.area.map.id] = 14;
		this.main.UI.updatePlayer();
	}

	changeGold(amount) {
		this.gold += amount;
		if (amount > 0) this.stats.totalGold += amount;
		this.main.UI.updatePlayer();

		if (this.gold >= 1000000) this.unlockAchievement(3);
		if (this.main.pokemonScene.isOpen) this.main.pokemonScene.update();
		if (this.main.shopScene.isOpen) this.main.shopScene.update();
	}

	obtainStar() {
		this.stars++;
		if (this.stars == 40 || this.stars == 160 || this.stars == 320 || this.stars == 540) this.unlockTeamSlot();
		if (this.stars == 600) this.unlockAchievement(4);
		if (this.stars == 900) this.unlockAchievement(5);
		if (this.stars % 25 == 0) this.extraGold += 1;
		if (this.stars % 100 == 0) this.extraGold += 2;
		if (this.stars % 300 == 0) this.extraGold += 3;
		if (this.stars % 400 == 0) this.extraGold += 4;
		if (this.stars % 450 == 0) this.extraGold += 5;
		if (this.stars % 800 == 0) this.extraGold += 10;
		if (this.stars % 850 == 0) this.extraGold += 20;
		if (this.stars % 875 == 0) this.extraGold += 20;
	}

	unlockTeamSlot() {
		this.teamSlots++;
		this.main.UI.updatePokemon();
	}

	unlockAchievement(pos) {	
		if (!this.achievements[pos].status) {
			this.extraGold += 2;
			this.achievements[pos].status = true;
			this.achievementProgress.count++;
			if (this.achievementProgress.count === 31) this.unlockAchievement(31);
			if (this.main.profileScene.isOpen) this.main.profileScene.update();
		}
	}

	forceStarCount() {
		let totalStars = 0;
		this.records.forEach(num => { totalStars += num; })
		if (this.stars != totalStars) this.stars = totalStars;
		if (this.stars >= 40 && this.teamSlots < 7) this.teamSlots++;
		if (this.stars >= 160 && this.teamSlots < 8) this.teamSlots++;
		if (this.stars >= 320 && this.teamSlots < 9) this.teamSlots++;
		if (this.stars >= 540 && this.teamSlots < 10) this.teamSlots++;
		
		if (this.stars >= 600) this.unlockAchievement(4);
		if (this.stars == 900) this.unlockAchievement(5);
	}
}
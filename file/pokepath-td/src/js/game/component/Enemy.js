import { Sprite } from '../../utils/Sprite.js';
import { playSound } from '../../file/audio.js';
export class Enemy extends Sprite {
	constructor(x, y, enemy, waypoints, main, ctx) {
		super(x, y, ctx, enemy.sprite.image, enemy.sprite.frames, 8);
		this.main = main;

		const wave = this.main.area.waveNumber;

		this.radius = 4;
		this.waypoints = waypoints;
		this.waypointIndex = 0;

		this.center = {
			x: this.position.x + this.width / 2,
			y: this.position.y + this.height / 2
		};

		this.enemy = enemy;
		this.hp = enemy.hp;
		this.hpMax = enemy.hp;
		this.armor = enemy.armor || 0;
		this.armorMax = enemy.armor || 0;
		this.regeneration = enemy.regeneration || 0; 
		this.regenTimer = 0; 
		this.speed = enemy.speed; 
		this.baseSpeed = this.speed; 
		this.power = enemy.power;
		this.gold = enemy.gold + this.main.player.extraGold
		this.invisible = enemy.invisible;
		this.cursed = false;

		this.statusEffects = [];
		this.floatingTexts = [];

		this.curseIcon = new Image();
		this.curseIcon.src = './src/assets/images/icons/curse.png';

		// Aumentos cada 5 waves y 100
		const bonusSteps = Math.floor((wave - 1) / 5);

		if (bonusSteps > 0) {
			this.hp = Math.floor(this.hp * (1 + 0.02 * bonusSteps));
			this.hpMax = Math.floor(this.hpMax * (1 + 0.02 * bonusSteps));
			this.armor = Math.floor(this.armor * (1 + 0.01 * bonusSteps));
			this.armorMax = Math.floor(this.armorMax * (1 + 0.01 * bonusSteps));
			this.gold = Math.floor(this.gold * (1 + 0.15 * bonusSteps));
		}

		this.dying = false;
		this.opacity = 1;
		this.dyingSpeed = 0.03; 

		this.hasEnteredCanvas = false;
		this.distanceTraveled = 0;
		this.stunned = false;
		
		this.canSlow = enemy.canSlow;
		this.canStun = enemy.canStun;
		this.canBurn = enemy.canBurn;
		this.canPoison = enemy.canPoison;	

		this.burnedBy = null;
		this.poisonedBy = null;
		this.nightmaredBy = null;
	}

	draw() {
		this.ctx.save();

		if (this.invisible) this.ctx.globalAlpha = 0.3;
		super.draw();

		this.ctx.restore();

		const barWidth = 40;
		const barHeight = 6;
		const barX = this.position.x + (this.width / 2) - (barWidth / 2);
		const barY = this.position.y - 14;

		this.ctx.save();

		this.ctx.fillStyle = '#222';
		this.ctx.beginPath();
		this.ctx.roundRect(barX, barY, barWidth, barHeight, 3);
		this.ctx.fill();

		const hpPercent = Math.max(this.hp / this.hpMax, 0);
		const healthGradient = this.ctx.createLinearGradient(barX, barY, barX + barWidth, barY);
		if (hpPercent > 0.5) {
			healthGradient.addColorStop(0, '#00ff73');
			healthGradient.addColorStop(1, '#00c04b');
		} else if (hpPercent > 0.25) {
			healthGradient.addColorStop(0, '#ffe600');
			healthGradient.addColorStop(1, '#d4b400');
		} else {
			healthGradient.addColorStop(0, '#ff4c4c');
			healthGradient.addColorStop(1, '#b30000');
		}

		this.ctx.fillStyle = healthGradient;
		this.ctx.beginPath();
		this.ctx.roundRect(barX, barY, barWidth * hpPercent, barHeight, 3);
		this.ctx.fill();

		this.ctx.lineWidth = 1;
		this.ctx.strokeStyle = 'black';
		this.ctx.beginPath();
		this.ctx.roundRect(barX, barY, barWidth, barHeight, 3);
		this.ctx.stroke();

		if (this.main.displayHealth == 2 || (this.main.displayHealth == 1 && this.main.area.waveNumber == 100)) {
			this.ctx.save();
			this.ctx.font = '8px Arial';
			this.ctx.textAlign = 'center';
			this.ctx.textBaseline = 'middle';

			const hpText = `${this.main.utility.numberDot(Math.max(0, Math.floor(this.hp)), this.main.lang)}`;
			const textX = barX + barWidth / 2;
			const textY = barY + barHeight / 1.5;

			this.ctx.lineWidth = 2;
			this.ctx.strokeStyle = 'black';
			this.ctx.strokeText(hpText, textX, textY);

			this.ctx.fillStyle = 'white';
			this.ctx.fillText(hpText, textX, textY);
			this.ctx.restore();
		}
		

		if (this.armorMax > 0) {
			const armorPercent = Math.max(this.armor / this.armorMax, 0);
			const armorY = barY - barHeight - 2;

			this.ctx.fillStyle = '#222';
			this.ctx.beginPath();
			this.ctx.roundRect(barX, armorY, barWidth, barHeight, 3);
			this.ctx.fill();

			this.ctx.fillStyle = '#66ccff';
			this.ctx.beginPath();
			this.ctx.roundRect(barX, armorY, barWidth * armorPercent, barHeight, 3);
			this.ctx.fill();

			this.ctx.lineWidth = 1;
			this.ctx.strokeStyle = 'black';
			this.ctx.beginPath();
			this.ctx.roundRect(barX, armorY, barWidth, barHeight, 3);
			this.ctx.stroke();
			if (this.main.displayHealth == 2 || (this.main.displayHealth == 1 && this.main.area.waveNumber == 100)) {
				this.ctx.save();
				this.ctx.font = '8px Arial';
				this.ctx.textAlign = 'center';
				this.ctx.textBaseline = 'middle';

				const armorText = `${this.main.utility.numberDot(Math.max(0, Math.floor(this.armor)), this.main.lang)}`;
				const armorTextX = barX + barWidth / 2;
				const armorTextY = armorY + barHeight / 1.5;

				this.ctx.lineWidth = 2;
				this.ctx.strokeStyle = 'black';
				this.ctx.strokeText(armorText, armorTextX, armorTextY);

				this.ctx.fillStyle = 'white';
				this.ctx.fillText(armorText, armorTextX, armorTextY);
				this.ctx.restore();
			}
		}

		// indicador de curse
	    if (this.cursed && this.curseIcon.complete) {
		    const size = 12;
		    const offsetX = barX - size - 2;
		    const offsetY = barY - 2.5;
		    this.ctx.drawImage(this.curseIcon, offsetX, offsetY, size, size);
		}

		// efectos visuales
		this.drawStatusEffects();
		this.ctx.restore();
	}

	update(deltaTime = 1000 / 60) {
		// deltaTime ya viene escalado por Game (ms)
		const simDelta = deltaTime;
		const frameFactor = simDelta / (1000 / 60);

		if (this.dying) {
	        this.opacity -= this.dyingSpeed * frameFactor;
	        if (this.opacity <= 0) {
	            const index = this.main.area.enemies.indexOf(this);
	            if (index > -1) this.main.area.enemies.splice(index, 1);
	            return;
	        }
	    }

		this.ctx.save();
	    this.ctx.globalAlpha = this.opacity;
	    this.draw();
	    this.ctx.restore();

	    if (!this.dying) {
	    	if (!this.stunned) {
				
				const waypoint = this.waypoints[this.waypointIndex];
				const yDistance = waypoint.y - this.center.y;
				const xDistance = waypoint.x - this.center.x;
				const angle = Math.atan2(yDistance, xDistance);

				// movimiento: speed * frameFactor (speed se interpreta como px por "60fps frame unit")
				const dx = Math.cos(angle) * this.speed * frameFactor;
				const dy = Math.sin(angle) * this.speed * frameFactor;

				this.position.x += dx;
				this.position.y += dy;

				if (!this.hasEnteredCanvas) {
				    if (
				        this.position.x >= 0 &&
				        this.position.x <= this.main.game.canvas.width &&
				        this.position.y >= 0 &&
				        this.position.y <= this.main.game.canvas.height
				    ) this.hasEnteredCanvas = true;
				}

				if (this.hasEnteredCanvas) this.distanceTraveled += Math.hypot(dx, dy);

				if (Math.round(Math.sin(angle)) === 0) {
					if (Math.round(Math.cos(angle)) === 1) this.frames.direction = 2;
					if (Math.round(Math.cos(angle)) === -1) this.frames.direction = 6;
				} else {
					if (Math.round(Math.sin(angle)) === 1) this.frames.direction = 0;
					if (Math.round(Math.sin(angle)) === -1) this.frames.direction = 4;
				}

				this.center = {
					x: this.position.x + this.width / 2,
					y: this.position.y + this.height / 2
				};

				const distance = Math.hypot(waypoint.x - this.center.x, waypoint.y - this.center.y);

				if (distance < this.speed * frameFactor && this.waypointIndex < this.waypoints.length - 1) {
					this.waypointIndex++;
				}
			}

			if (this.regeneration > 0) {
				this.regenTimer += simDelta;
	            if (this.regenTimer >= 1000) { 
	                this.hp = Math.min(this.hp + this.regeneration, this.hpMax);
	                this.regenTimer -= 1000;
	            }
			}

			this.updateStatusEffects(simDelta);
	    }

		this.updateFloatingTexts(simDelta);
	}

	getDamaged(amount, source = 'physical', ability = null, isCritical = false, alreadyCursed = new Set(), pokemon) {
	    if (this.hp <= 0) return;
	    if (amount >= 9999 && source == 'physical') this.main.player.unlockAchievement(18)
	    if (amount > this.main.player.stats.highestHit && source == 'physical') this.main.player.stats.highestHit = amount;

	    let cursedDamage = amount;
	    let armorDamage = amount;
	    
	    this.main.area.totalDamageDealt += amount;
	    pokemon.damageDealt += amount; 	

	    if (ability?.id === 'armorBreak') armorDamage *= 2;
	    if (ability?.id === 'heal' && Math.random() < 0.025) {
	        playSound('hit3', 'effect');
	        this.main.player.getHealed(1);
	        this.main.player.achievementProgress.heartRestore++;
	    	if (this.main.player.achievementProgress.heartRestore == 10) this.main.player.unlockAchievement(19);
	    }
	    if (ability?.id === 'greed') {
	    	let g = Math.ceil(this.gold/10);
	    	this.main.player.achievementProgress.stolenGold += g;
	    	if (this.main.player.achievementProgress.stolenGold >= 100000) this.main.player.unlockAchievement(21);
	    	this.main.player.changeGold(g);
	    }

	    let armorHit = 0;

	    if (this.invisible) this.invisible = false;

	    // daño a armadura
	    if (this.armor && this.armor > 0) {
	        const remainingArmor = this.armor - armorDamage;
	        if (remainingArmor >= 0) {
	            this.armor = remainingArmor;
	            armorHit = armorDamage;
	            amount = 0;
	        } else {
	            armorHit = this.armor;
	            amount = -remainingArmor;
	            this.armor = 0;
	        }
	    }

	    // aplicar daño a HP
	    this.hp -= amount;
	    if (this.hp <= 0 && !this.dying) {
	    	this.main.player.stats.defeatedEnemies++;
	    	this.main.player.stats.defeatedSpecies.add(this.enemy.id);
	    	if (this.enemy.id == 'delibird') {
	    		this.main.player.achievementProgress.delibirdCount++;
				if (this.main.player.achievementProgress.delibirdCount >= 225) this.main.player.unlockAchievement(10);
	    	}
	    	if (this.main.player.stats.defeatedEnemies == 100000) this.main.player.unlockAchievement(8);
	    	if (this.main.player.stats.defeatedSpecies.size === 100) this.main.player.unlockAchievement(9);
	        this.main.player.changeGold(this.gold);
	        this.dying = true;
	        this.hp = 0;
	    }

	    const minSpacing = 12; 
	    const startYOffset = 12; 

	    if (amount > 0) {
	        const color = isCritical
	            ? '#ffeb3b'
	            : source === 'burn'
	            ? '#c96937'
	            : source === 'poison'
	            ? '#70ac4c'
	            : '#e06666';

	        let startY = this.position.y - 10 + startYOffset;

	        for (const ft of this.floatingTexts) {
	            if (Math.abs(startY - ft.y) < minSpacing) {
	                startY = Math.min(startY, ft.y - minSpacing);
	            }
	        }

	        this.floatingTexts.push({
	            text: `-${amount}${isCritical ? '!' : ''}`,
	            timer: 0,
	            duration: 1000,
	            y: startY,     
	            vy: -60,       
	            alpha: 1,
	            color
	        });
	    }

	    if (armorHit > 0) {
	        let startY = this.position.y - 10 + startYOffset;
	        for (const ft of this.floatingTexts) {
	            if (Math.abs(startY - ft.y) < minSpacing) {
	                startY = Math.min(startY, ft.y - minSpacing);
	            }
	        }

	        this.floatingTexts.push({
	            text: `-${armorHit}${isCritical ? '!' : ''}`,
	            timer: 0,
	            duration: 1000,
	            y: startY,
	            vy: -60,
	            alpha: 1,
	            color: isCritical ? '#ffeb3b' : '#66ccff'
	        });
	    }

	    if ((ability?.id === 'curse' || ability?.id === 'curseDoubleShot') && this.cursed && cursedDamage > 0 && !alreadyCursed.has(this)) {
	        alreadyCursed.add(this);
	        this.main.area.enemies.forEach(e => {
	            if (e !== this && e.cursed && e.hp > 0 && !alreadyCursed.has(e)) {
	                e.getDamaged(cursedDamage, source, ability, false, alreadyCursed, pokemon);
	            }
	        });
	    }
	}

	updateStatusEffects(deltaTime) {
	    if (this.statusEffects.length === 0) return;

	    this.statusEffects.forEach(effect => {
	        effect.timer += deltaTime;
	        const interval = 1000;

	        if (effect.type === 'burn') {
	            while (effect.timer >= interval && effect.duration > 0) {
	                this.getDamaged(Math.ceil(this.hpMax * effect.damagePercent), 'burn', null, false, new Set(), this.burnedBy);
	                effect.timer -= interval;
	                if (typeof effect.duration === 'number') effect.duration -= 1;
	            }
	        }

	        if (effect.type === 'poison') {
	            while (effect.timer >= interval) {
	                const stacks = effect.stacks || 1;
	                const poisonDamage = Math.ceil(this.hpMax * effect.damagePercent * stacks);
	                this.getDamaged(poisonDamage, 'poison', null, false, new Set(), this.poisonedBy);
	                effect.timer -= interval;
	            }
	        }

	        if (effect.type === 'nightmare') {
	            while (effect.timer >= interval) {
	                const stacks = effect.stacks || 1;
	                const nightmareDamage = Math.ceil(this.nightmaredBy.power * 0.2 * stacks);
	                this.getDamaged(nightmareDamage, 'nightmare', null, false, new Set(), this.nightmaredBy);
	                effect.timer -= interval;
	            }
	        }

	        if (effect.type === 'slow') {
	            // no tocar this.speed aquí — solo marcar applied para evitar reaplicar varias veces
	            if (!effect.applied) {
	                effect.applied = true;
	            }
	            if (effect.duration !== undefined && effect.timer >= effect.duration * 1000) {
	                effect.duration = 0;
	            }
	        }

	        if (effect.type === 'stun') {
	            this.stunned = true;
	            if (effect.duration !== undefined && effect.timer >= effect.duration * 1000) {
	                this.stunned = false;
	                effect.duration = 0;
	            }
	        }
	    });

	    // Filtrar efectos terminados
	    this.statusEffects = this.statusEffects.filter(e => e.duration === undefined || e.duration > 0);

	    // RECOMPUTAR velocidad según slows activos (hacerlo **una sola vez** aquí)
	    const slowEffects = this.statusEffects.filter(e => e.type === 'slow' && e.duration !== 0);
	    if (slowEffects.length === 0) {
	        this.speed = this.baseSpeed;
	    } else {
	        // multiplicar factores de slow (si quieres que se acumulen multiplicativamente)
	        let factor = 1;
	        slowEffects.forEach(e => factor *= (e.slowPercent ?? 1));
	        this.speed = this.baseSpeed * factor;
	    }
	}


	drawFloatingTexts() {
	    this.floatingTexts.forEach((ft) => {
	        const x = this.position.x + this.width / 2;
	        const y = ft.y;

	        this.ctx.save();
	        this.ctx.globalAlpha = ft.alpha ?? 1;

	        this.ctx.font = '900 14px Arial';
	        this.ctx.lineWidth = 1.5;
	        this.ctx.textAlign = 'center';
	        this.ctx.textBaseline = 'middle';

	        this.ctx.strokeStyle = 'black';
	        this.ctx.strokeText(ft.text, x, y);

	        this.ctx.fillStyle = ft.color || '#c96937';
	        this.ctx.fillText(ft.text, x, y);

	        this.ctx.restore();
	    });
	}

	updateFloatingTexts(deltaTime) {
	    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
	        const ft = this.floatingTexts[i];
	        ft.timer += deltaTime;

	        ft.y += ft.vy * (deltaTime / 1000);

	        const minAlpha = 0.5;
	        ft.alpha = Math.max(minAlpha, 1 - 0.4 * (ft.timer / ft.duration));

	        if (ft.timer >= ft.duration) {
	            this.floatingTexts.splice(i, 1);
	        }
	    }
	}

	applyStatusEffect(effect, pokemon) {
	    const existing = this.statusEffects.find(e => e.type === effect.type);
	    if (existing) {
	        if (effect.type === 'poison') {
	        	this.poisonedBy = pokemon;
	        	this.main.player.stats.appliedPoisons++;
	        	if (this.main.player.stats.appliedPoisons >= 10000) this.main.player.unlockAchievement(16);
	            existing.stacks = (existing.stacks || 1) + 1;
	        } else if (effect.type === 'nightmare') {
	        	this.nightmaredBy = pokemon;
	            existing.stacks = (existing.stacks || 1) + 1;
	        } 
	        // else {
	        //     existing.duration = Math.max(existing.duration || 0, effect.duration || 0);
	        // }
	    } else {
	        this.statusEffects.push({
	            ...effect,
	            timer: 0,
	            stacks: effect.type === 'poison' ? 1 : undefined
	        });
	        if (effect.type === 'stun') {
	        	this.main.player.stats.appliedStuns++;
	        	if (this.main.player.stats.appliedStuns >= 10000) this.main.player.unlockAchievement(13);
	        }
	        if (effect.type === 'slow') {
	        	this.main.player.stats.appliedSlows++;
	        	if (this.main.player.stats.appliedSlows >= 10000) this.main.player.unlockAchievement(14);
	        }
	        if (effect.type === 'poison') {
	        	this.poisonedBy = pokemon;
	        	this.main.player.stats.appliedPoisons++;
	        	if (this.main.player.stats.appliedPoisons >= 10000) this.main.player.unlockAchievement(16);
	        }
	        if (effect.type === 'nightmare') {
	        	this.nightmaredBy = pokemon;
	        }
	        if (effect.type === 'burn') {
	        	this.burnedBy = pokemon;
	        	this.main.player.stats.appliedBurns++;
	        	if (this.main.player.stats.appliedBurns >= 10000) this.main.player.unlockAchievement(15);
	        }
	        if (effect.type === 'curse') {
	        	this.main.player.stats.appliedCurses++;
	        	if (this.main.player.stats.appliedCurses >= 10000) this.main.player.unlockAchievement(17);
	            this.cursed = true;
	        }
	    }
	}

	drawStatusEffects() {
		if (this.statusEffects.length === 0) return;

		this.statusEffects.forEach(effect => {
			if (effect.type === 'burn') {
				const numParticles = 5;
				const alphaBase = 0.8;
				const alphaVariation = 0.2;
				const alpha = alphaBase + alphaVariation * Math.sin(Date.now() / 500);

				const centerX = this.position.x + this.width / 2;
				const centerY = this.position.y + this.height / 2;

				for (let i = 0; i < numParticles; i++) {
					const px = centerX + (Math.random() - 0.5) * this.width * 0.6;
					const py = centerY + (Math.random() - 0.5) * this.height * 0.6;
					const size = 1 + Math.random() * 2;

					const r = 255;
					const g = 100 + Math.random() * 100;
					const b = 0;

					this.ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
					this.ctx.beginPath();
					this.ctx.arc(px, py, size, 0, Math.PI * 2);
					this.ctx.fill();
				}
			}
			if (effect.type === 'poison') {
				const numParticles = 5;
				const alphaBase = 0.8;
				const alphaVariation = 0.2;
				const alpha = alphaBase + alphaVariation * Math.sin(Date.now() / 500);

				const centerX = this.position.x + this.width / 2;
				const centerY = this.position.y + this.height / 2;

				for (let i = 0; i < numParticles; i++) {
					const px = centerX + (Math.random() - 0.5) * this.width * 0.6;
					const py = centerY + (Math.random() - 0.5) * this.height * 0.6;
					const size = 1 + Math.random() * 2;

					const r = 50;
					const g = 255;
					const b = 50;

					this.ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
					this.ctx.beginPath();
					this.ctx.arc(px, py, size, 0, Math.PI * 2);
					this.ctx.fill();
				}
			}
			if (effect.type === 'nightmare') {
				const numParticles = 5;
				const alphaBase = 0.8;
				const alphaVariation = 0.2;
				const alpha = alphaBase + alphaVariation * Math.sin(Date.now() / 500);

				const centerX = this.position.x + this.width / 2;
				const centerY = this.position.y + this.height / 2;

				for (let i = 0; i < numParticles; i++) {
					const px = centerX + (Math.random() - 0.5) * this.width * 0.6;
					const py = centerY + (Math.random() - 0.5) * this.height * 0.6;
					const size = 1 + Math.random() * 2;

					const r = 160;
					const g = 40;
					const b = 200;

					this.ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
					this.ctx.beginPath();
					this.ctx.arc(px, py, size, 0, Math.PI * 2);
					this.ctx.fill();
				}
			}
		});
	}
}

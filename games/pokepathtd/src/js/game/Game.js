import { Tower } from './component/Tower.js';
import { text } from '../file/text.js';
import { playSound } from '../file/audio.js';

export class Game {
	constructor(main) {
		this.main = main;

		this.canvas = document.createElement('canvas');
		this.canvas.width = 720;
		this.canvas.height = 624;
		this.ctx = this.canvas.getContext('2d');
		this.canvasBackground = new Image();
		document.getElementById('screen').appendChild(this.canvas);

		this.deployingUnit = undefined;
		this.stopped = false;
		this.activeTile = undefined;
		this.mouse = { x: undefined, y: undefined };

		this.FPS = 60;
		this.frameDuration = 1000 / this.FPS;
		this.lastTime = 0;

		this.loopId = null;
		this.animate = this.animate.bind(this);

		this.ranges = false;
		this.speedFactor = 1;
	}

	load() {
		this.stopped = false;
		this.lastTime = performance.now();
		if (this.loopId) clearInterval(this.loopId);
		this.loopId = setInterval(() => this.animate(performance.now()), this.frameDuration);
		this.setEvents();
	}

	animate(time) {
		if (this.stopped) return;

		if (!this.lastTime) this.lastTime = time;

		const delta = time - this.lastTime;
		if (delta < this.frameDuration) {
			return;
		}

		this.lastTime = time - (delta % this.frameDuration);

		if (this.ctx) {
			if (this.canvasBackground.complete && this.canvasBackground.naturalWidth !== 0) {
				this.ctx.drawImage(this.canvasBackground, 0, 0, this.canvas.width, this.canvas.height);
			} else {
				this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			}
		}

		const scaledDelta = this.frameDuration * this.speedFactor; 

		for (let i = this.main.area.enemies.length - 1; i >= 0; i--) {
			const enemy = this.main.area.enemies[i];

			enemy.update(scaledDelta);

			if (this.main.area.enemies.indexOf(enemy) === -1) continue;

			if (enemy.waypoints.length === enemy.waypointIndex + 1) {
				if (
					enemy.position.x > this.canvas.width || enemy.position.x < 0 ||
					enemy.position.y - 20 > this.canvas.height || enemy.position.y < -20
				) {
					playSound('hit2', 'effect');
					this.main.player.getDamaged(enemy.power);
					const idx = this.main.area.enemies.indexOf(enemy);
					if (idx !== -1) this.main.area.enemies.splice(idx, 1);
					continue;
				}
			}
		}

		this.main.UI.updateDamageDealt();

		this.main.area.placementTiles.forEach(tile => tile.update(this.mouse));

		this.main.area.towers.forEach(tower => {
			const enemiesInRange = this.main.area.enemies.filter(enemy => {
				const insideCanvas = (
					enemy.center.x >= 0 &&
					enemy.center.x <= this.canvas.width &&
					enemy.center.y >= 0 &&
					enemy.center.y <= this.canvas.height
				);
				return insideCanvas && this.isEnemyInRange(tower, enemy) && !enemy.dying;
			});

			tower.update(enemiesInRange, scaledDelta);
		});

		if (this.main.area.waveActive && this.main.area.enemies.length === 0) {
			this.main.area.endWave();
		}

		if (this.main.showDamage) {
			this.main.area.enemies.forEach(enemy => {
				enemy.drawFloatingTexts();
			});
		}

		if (this.ranges) {
			this.main.area.placementTiles.forEach(tile => {
				if (tile.tower) {
					tile.drawRange(tile.tower.range, tile.tower.rangeType, tile.tower.innerRange, tile.tower.ability);
				}
			})
		}
	}

	stop() {
		this.stopped = true;
		if (this.loopId) {
			clearInterval(this.loopId);
			this.loopId = null;
		}
		// this.main.notification.display(text.notification.pause[this.main.lang]);
	}

	resume() {
		if (!this.stopped) return;
		this.stopped = false;
		this.lastTime = performance.now();
		if (this.loopId) clearInterval(this.loopId);
		this.loopId = setInterval(() => this.animate(performance.now()), this.frameDuration);
	}

	tryDeployUnit(pos) {
		if (this.deployingUnit != undefined) return this.cancelDeployUnit();
		this.deployingUnit = this.main.team.pokemon[pos];
		if (this.deployingUnit.isDeployed) this.retireUnit();
		else {
			playSound('click1', 'ui');
			// this.main.notification.display(text.notification.deploy[this.main.lang]);
			this.main.UI.pokemon[pos].deploy.innerText = text.ui.deploying[this.main.lang].toUpperCase();
			this.main.UI.pokemon[pos].deploy.style.background = 'var(--orange)';

			this.main.UI.nextWave.style.filter = `brightness(0.8)`;
			this.main.UI.nextWave.style.pointerEvents = 'none';
		}
	}

	cancelDeployUnit() {
		playSound('pop0', 'ui');
		this.deployingUnit = undefined;

		this.main.UI.updatePokemon();
		if (!this.main.area.waveActive) {
			this.main.UI.revertUI();
			this.main.UI.nextWave.style.filter = `revert-layer`;
			this.main.UI.nextWave.style.pointerEvents = 'revert-layer';
		}
	}

	deployUnit() {
		if (!this.deployingUnit || !this.activeTile) return;
		if (!this.deployingUnit.tiles.includes(this.activeTile.land)) return;

		playSound('equip', 'ui');
		this.deployingUnit.isDeployed = true;

		// AÑADIR TORRE
		this.main.area.towers.push(
			new Tower(
				this.main,
				this.activeTile.position.x,
				this.activeTile.position.y,
				this.ctx,
				this.deployingUnit,
				this.activeTile
			)
		);
		this.activeTile.tower = this.deployingUnit;
		this.deployingUnit = undefined;

		this.main.area.recalculateAuras();
		if (!this.main.area.waveActive) {
			this.main.UI.revertUI();
			this.main.UI.nextWave.style.filter = `revert-layer`;
			this.main.UI.nextWave.style.pointerEvents = 'revert-layer';
		}
		this.main.UI.tilesCountNum[this.activeTile.land-1]++;
		this.main.UI.update();
	}

	retireUnit() {
		if (!this.deployingUnit) return;
		this.deployingUnit.isDeployed = false;
		playSound('unequip', 'ui');


		const index = this.main.area.towers.findIndex((tower) => tower.pokemon == this.deployingUnit);
		if (index !== -1) {
			this.main.UI.tilesCountNum[this.main.area.towers[index].tile.land-1]--;
			this.main.area.towers[index].tile.tower = false;
			this.main.area.towers[index].pokemon.tilePosition = -1;
			this.main.area.towers.splice(index, 1);
		}
		this.deployingUnit = undefined;

		this.main.UI.update();
		this.main.area.recalculateAuras();
	}

	isEnemyInRange(tower, enemy) {
		const dx = enemy.center.x - tower.center.x;
		const dy = enemy.center.y - tower.center.y;
		const distance = Math.hypot(dx, dy);
		const r = tower.range;

		switch (tower.pokemon.rangeType) {
			case 'circle':
				return distance <= r;
			case 'donut':
				return distance >= tower.innerRange && distance <= tower.range;
			case 'cross':
				return (
					(Math.abs(dx) <= 24 && Math.abs(dy) <= r) ||
					(Math.abs(dy) <= 24 && Math.abs(dx) <= r)
				);
			case 'xShape':
				return (
					Math.abs(Math.abs(dx) - Math.abs(dy)) < 24 &&
					distance <= r
				);
			case 'horizontalLine':
				return (
					Math.abs(dy) <= 24 &&
					Math.abs(dx) <= r
				);
			case 'verticalLine':
				return (
					Math.abs(dx) <= 24 &&
					Math.abs(dy) <= r
				);
			default:
				return distance <= r;
		}
	}

	setEvents() {
		this.canvas.addEventListener('mousemove', (event) => {
			this.mouse.x = event.offsetX;
			this.mouse.y = event.offsetY;

			this.activeTile = null;

			for (let i = 0; i < this.main.area.placementTiles.length; i++) {
				const tile = this.main.area.placementTiles[i];
				if (
					this.mouse.x > tile.position.x &&
					this.mouse.x < tile.position.x + tile.size &&
					this.mouse.y > tile.position.y &&
					this.mouse.y < tile.position.y + tile.size
				) {
					this.activeTile = tile;
					break;
				}
			}
		});

		this.canvas.addEventListener('click', (event) => {
			if (this.activeTile && !this.activeTile.tower && this.deployingUnit) {
				this.deployUnit();
			} else if (this.activeTile?.tower) {
				const index = this.main.team.pokemon.findIndex(pokemon => this.activeTile.tower === pokemon);
				this.tryDeployUnit(index);
				this.tryDeployUnit(index);
				//this.main.pokemonScene.open(this.activeTile.tower, index);
			}
		});

		this.canvas.addEventListener('contextmenu', (event) => {
			if (this.activeTile?.tower) {
				const index = this.main.team.pokemon.findIndex(pokemon => this.activeTile.tower === pokemon);
				this.main.pokemonScene.open(this.activeTile.tower, index);
			}
		});
	}

	toggleSpeed() {
		playSound('option', 'ui');
		if (this.speedFactor === 1) {
			this.speedFactor = 1.5;
			this.main.UI.speedWave.style.background = 'linear-gradient(0deg,rgba(112, 172, 76, 1) 50%, rgba(194, 177, 183, 1) 50%)';
		} else if (this.speedFactor === 1.5) {
			this.speedFactor = 1.75;
			this.main.UI.speedWave.style.background = 'linear-gradient(0deg,rgba(112, 172, 76, 1) 50%, rgba(112, 172, 76, 1) 50%)'
		} else {
			this.speedFactor = 1;
			this.main.UI.speedWave.style.background = 'linear-gradient(0deg,rgba(194, 177, 183, 1) 50%, rgba(194, 177, 183, 1) 50%)'
		}
	}

	toggleRanges() {
		this.ranges =! this.ranges;
	}

	restoreSpeed() {
		this.speedFactor = 1;
		this.main.UI.speedWave.style.background = 'linear-gradient(0deg,rgba(194, 177, 183, 1) 50%, rgba(194, 177, 183, 1) 50%)'
	}
}

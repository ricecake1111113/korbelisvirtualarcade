export class PlacementTile {
	constructor(main, x, y, ctx, land, id) {
		this.main = main;

		this.land = land;
		this.position = { x, y };
		this.size = 24;
		this.center = { x: this.position.x + 12, y: this.position.y + 12 };
		this.color = 'rgba(255, 255, 255, 0.5)';
		this.tower = false;

		this.ctx = ctx;
		this.id = id;
	}

	draw() {
		if (this.main.game.deployingUnit && !this.tower) {
			if (!this.main.game.deployingUnit.tiles.includes(this.land)) this.color = 'rgba(255, 50, 50, 0.5)';
			this.ctx.fillStyle = this.color;
			this.ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
		}		
	}

	update(mouse) {
		this.draw();
		if (
			mouse.x > this.position.x && 
			mouse.x < this.position.x + this.size &&
			mouse.y > this.position.y && 
			mouse.y < this.position.y + this.size	
		) {
			if (this.main.game.deployingUnit) {
				if (!this.main.game.deployingUnit.tiles.includes(this.land) || this.tower) return;
				this.color = 'white';

				const pokemon = this.main.game.deployingUnit;
				this.drawRange(pokemon.range, pokemon.rangeType, pokemon.innerRange, pokemon.ability);
			}
			else if (this.tower) {
				this.drawRange(this.tower.range, this.tower.rangeType, this.tower.innerRange, this.tower.ability);
			}	
		} else {
			this.color = 'rgba(255, 255, 255, 0.5)';
		}
	}

	drawRange(range, rangeType, innerRange, ability) {
		this.ctx.save();
		this.ctx.fillStyle = 'rgba(0, 0, 255, 0.2)';
		this.ctx.strokeStyle = 'rgba(0, 0, 255, 0.4)';

		if (this.land === 4 && (ability.id === 'vigilant' || ability.id === 'castform')) range *= 2;
		
		switch (rangeType) {
			case 'circle':
				this.ctx.beginPath();
				this.ctx.arc(this.center.x, this.center.y, range, 0, Math.PI * 2);
				this.ctx.fill();
				this.ctx.stroke();
				break;
			case 'donut':
				this.ctx.beginPath();
				this.ctx.arc(this.center.x, this.center.y, range, 0, Math.PI * 2);
				this.ctx.arc(this.center.x, this.center.y, innerRange, 0, Math.PI * 2, true);
				this.ctx.fill('evenodd');
				this.ctx.stroke();
				break;
			case 'cross':
				this.ctx.beginPath();
				this.ctx.rect(this.center.x - 24, this.center.y - range, 48, range * 2);
				this.ctx.rect(this.center.x - range, this.center.y - 24, range * 2, 48);
				this.ctx.fill();
				this.ctx.stroke();
				break;
			case 'horizontalLine':
				this.ctx.beginPath();
				this.ctx.rect(this.center.x - range, this.center.y - 24, range * 2, 48);
				this.ctx.fill();
				this.ctx.stroke();
				break;
			case 'verticalLine':
				this.ctx.beginPath();
				this.ctx.rect(this.center.x - 24, this.center.y - range, 48, range * 2);
				this.ctx.fill();
				this.ctx.stroke();
				break;
			case 'xShape':
				this.ctx.save();
				this.ctx.translate(this.center.x, this.center.y);
				this.ctx.rotate(Math.PI / 4);
				this.ctx.beginPath();
				this.ctx.rect(-24, -range, 48, range * 2);
				this.ctx.rect(-range, -24, range * 2, 48);
				this.ctx.fill();
				this.ctx.stroke();
				break;
		}

		this.ctx.restore();
	}
}


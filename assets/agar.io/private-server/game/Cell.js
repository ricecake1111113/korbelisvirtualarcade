class Cell {
    constructor({ id, x, y, mass, color, owner, name }) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.mass = mass;
        this.color = color;
        this.owner = owner;
        this.name = name || '';
        this.vx = 0;
        this.vy = 0;
        this.mergeTime = 0;
    }

    radius() {
        return Math.sqrt(this.mass) * 6;
    }
}

module.exports = Cell;

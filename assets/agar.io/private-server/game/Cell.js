class Cell {
    static radiusScale = 6;
    static radiusExponent = 0.5;

    static setRadiusTuning(scale, exponent) {
        if (Number.isFinite(scale)) {
            Cell.radiusScale = Math.max(0.1, scale);
        }
        if (Number.isFinite(exponent)) {
            Cell.radiusExponent = Math.max(0.2, Math.min(0.8, exponent));
        }
    }

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
        return Math.pow(Math.max(1, this.mass), Cell.radiusExponent) * Cell.radiusScale;
    }
}

module.exports = Cell;

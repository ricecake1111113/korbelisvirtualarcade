import { Sprite } from '../../utils/Sprite.js';

export class Projectile extends Sprite {
    constructor(x, y, enemy, ctx, projectile, tower) {
        super(x, y, ctx, projectile.sprite.image, projectile.sprite.frames);

        const rawSpeed = projectile.speed ?? 5;
        this.speed = rawSpeed <= 30 ? rawSpeed * 60 : rawSpeed; 

        this.velocity = { x: 0, y: 0 };
        this.enemy = enemy;
        this.ctx = ctx;
        this.tower = tower;

        this.power = projectile.power ?? 1;
        this.critical = tower?.critical ?? 0;
        this.ricochetsLeft = projectile.ricochetsLeft ?? 0;

        this.markedForDeletion = false;

        this.lifeTime = 5000;
        this.age = 0;

        this.pulse = {
            active: false,
            x: 0,
            y: 0,
            radius: 0,
            alpha: 0,
            maxRadius: 0,
            speed: 0,
            color: '#ffffff'
        };
        this.impacting = false;
    }

    update(deltaTime = 1000 / 60) {
        // deltaTime ya viene escalado por Game (ms)
        const simDelta = deltaTime;
        const frameFactor = simDelta / (1000 / 60);
        const secs = simDelta / 1000;

        // si no hay objetivo  buscar uno 
        if ((!this.enemy || this.enemy.hp <= 0) && this.tower) {
            const fallbackSource = { center: this.position || { x: this.position?.x ?? 0, y: this.position?.y ?? 0 } };
            const newTarget = this.tower.findClosestEnemy(fallbackSource, 200);
            if (newTarget) {
                this.enemy = newTarget;
            } else {
                this.markedForDeletion = true;
                return;
            }
        }

        if (!this.enemy || this.enemy.hp <= 0) {
            this.markedForDeletion = true;
            return;
        }

        this.age += simDelta;
        if (this.age >= this.lifeTime) {
            this.markedForDeletion = true;
            return;
        }

        // Si ya impactó: animar y dibujar el pulso desde el propio proyectil
        if (this.impacting) {
            if (!this.ctx) {
                this.markedForDeletion = true;
                return;
            }
            
            const sp = this.pulse;
            if (!sp || !sp.active) {
                this.markedForDeletion = true;
                return;
            }

            this.ctx.beginPath();
            this.ctx.arc(sp.x, sp.y, sp.radius, 0, Math.PI * 2);

            const hex = (sp.color || '#ffffff').replace('#', '');
            const r = parseInt(hex.substring(0, 2), 16) || 255;
            const g = parseInt(hex.substring(2, 4), 16) || 255;
            const b = parseInt(hex.substring(4, 6), 16) || 255;

            this.ctx.fillStyle = `rgba(${r},${g},${b},${sp.alpha})`;
            this.ctx.fill();

            sp.radius += sp.speed * frameFactor;
            sp.alpha -= 0.04 * frameFactor;

            if (sp.radius >= sp.maxRadius || sp.alpha <= 0) {
                this.markedForDeletion = true;
            }
            return; // no mover ni comprobar colisiones mientras animamos la pulse
        }

        const angle = Math.atan2(
            this.enemy.center.y - this.position.y,
            this.enemy.center.x - this.position.x
        );

        // movement: speed is in px/sec (constructor normalizes it), so move by speed * seconds
        const vx = Math.cos(angle) * this.speed; // px/s
        const vy = Math.sin(angle) * this.speed; // px/s

        this.position.x += vx * secs;
        this.position.y += vy * secs;

        this.center = {
            x: this.position.x + (this.width ? this.width / 2 : 0),
            y: this.position.y + (this.height ? this.height / 2 : 0)
        };

        // dibujar después de mover 
        this.draw();
        
        // colisión 
        const dx = this.enemy.center.x - this.position.x;
        const dy = this.enemy.center.y - this.position.y;
        const distance = Math.hypot(dx, dy);

        const hitRadius = (this.enemy.radius ?? 6) + 2; // margen pequeño
        if (distance < hitRadius) {
            // efectos de impacto
            if (this.tower?.ability?.id === 'curse' || this.tower?.ability?.id === 'curseDoubleShot') {
                this.enemy.applyStatusEffect({ type: 'curse' });
            }

            // crítico
            let finalDamage = this.power;
            let isCritical = false;

            if (this.tower?.ability?.id === 'star') finalDamage += this.tower.main.player.stars;
            if (this.tower?.ability?.id === 'rampardos') {
                let rampardosBonus = finalDamage * (Math.abs(this.tower.main.player.health[this.tower.main.area.routeNumber] - 14) * 0.05);
                finalDamage += Math.ceil(rampardosBonus)
            }

            if (this.tower.teleportBuff) {
                finalDamage = Math.ceil(finalDamage * this.tower.teleportBuff);
                this.tower.teleportBuff = 0;
            }

            if ((Math.random() * 100) < this.critical) {
                isCritical = true;
                let multiplier = (this.tower?.ability?.id === 'superCritical') ? 2.0 : 1.5;
                if (this.tower.criticalAura) multiplier *= 1.33;
                finalDamage = Math.ceil(finalDamage * multiplier);
                if (this.tower?.ability?.id === 'armaldo') this.ricochetsLeft++;
            }

            if (this.tower?.ability?.id === 'focus') {
                if (this.tower.lastTarget === this.enemy) {
                    this.tower.damageBoost = (this.tower.damageBoost || 0) + Math.max(5, Math.floor(finalDamage * 0.07));
                } else {
                    this.tower.damageBoost = 0;
                    this.tower.lastTarget = this.enemy;
                }
                finalDamage += this.tower.damageBoost || 0;
            }

            this.enemy.getDamaged(finalDamage, 'physical', this.tower?.pokemon?.ability, isCritical, new Set(), this.tower.pokemon);

            // efectos secundarios
            if (this.enemy.canBurn && this.tower?.ability?.id === 'burn') {
                this.enemy.applyStatusEffect({ type: 'burn', damagePercent: 0.005, duration: 10 }, this.tower.pokemon);
            }
            if (this.enemy.canPoison && (this.tower?.ability?.id === 'poison' || this.tower?.ability?.id === 'poisonDoubleShot')) {
                this.enemy.applyStatusEffect({ type: 'poison', damagePercent: 0.001, stacks: 1 }, this.tower.pokemon);
            }
            if (this.enemy.canSlow && (this.tower?.ability?.id === 'slow' || this.tower?.ability?.id === 'slowSplash' || this.tower?.ability?.id === 'cradily')) {
                this.enemy.applyStatusEffect({ type: 'slow', slowPercent: 0.5, duration: 2 });
            }
            if (this.enemy.canStun && this.tower?.ability?.id === 'stunMono') {
                if (Math.random() < 0.3) this.enemy.applyStatusEffect({ type: 'stun', duration: 2 });
            }
            if (this.enemy.canStun && this.tower?.ability?.id === 'stunMonoNerf') {
                if (Math.random() < 0.05) this.enemy.applyStatusEffect({ type: 'stun', duration: 1.5 });
            }
            if (this.tower?.ability?.id === 'nightmare') {
                this.enemy.applyStatusEffect({ type: 'nightmare', damage: null, stacks: 1 }, this.tower.pokemon);
            }

            // splash
            if (this.tower?.ability?.id === 'splash' || this.tower?.ability?.id === 'slowSplash' || this.tower?.ability?.id === 'synchronySplash') {
                const splashRadius = 65;
                this.tower.main.area.enemies.forEach(e => {
                    if (e !== this.enemy && e.hp > 0) {
                        const dist = Math.hypot(e.center.x - this.enemy.center.x, e.center.y - this.enemy.center.y);
                        if (dist <= splashRadius) {
                            e.getDamaged(Math.ceil(this.power * 0.5), 'physical', this.tower?.pokemon?.ability, isCritical, new Set(), this.tower.pokemon);
                            if (e.canSlow && this.tower?.ability?.id === 'slowSplash') {
                                e.applyStatusEffect({ type: 'slow', slowPercent: 0.5, duration: 2 });
                            }
                            if (this.tower?.ability?.id === 'synchronySplash') {
                                this.enemy.statusEffects.forEach(effect => {
                                    if (effect.type === 'burn' && e.canBurn) e.applyStatusEffect({ type: 'burn', damagePercent: 0.005, duration: 10 }, this.tower.pokemon);
                                    if (effect.type === 'poison' && e.canPoison) e.applyStatusEffect({ type: 'poison', damagePercent: 0.001, stacks: 1 }, this.tower.pokemon);
                                    if (effect.type === 'slow' && e.canSlow) e.applyStatusEffect({ type: 'slow', slowPercent: 0.5, duration: 2 });
                                    if (effect.type === 'stun' && e.canStun) e.applyStatusEffect({ type: 'stun', duration: 2 });
                                })
                            }
                        }
                    }
                });
            }

            // rebote
            if (this.ricochetsLeft > 0 && this.tower) {
                const next = this.findClosestEnemy(this.enemy, 200);
                if (next) {
                    const reducedPower = Math.ceil(this.power * 0.7); 
                    const sx = this.enemy.center.x + (Math.random() - 0.5) * 6;
                    const sy = this.enemy.center.y + (Math.random() - 0.5) * 6;

                    const newProj = new Projectile(
                        sx,
                        sy,
                        next,
                        this.ctx,
                        {
                            ...this.tower.projectile,
                            power: reducedPower,
                            ricochetsLeft: Math.max(0, this.ricochetsLeft - 1),
                            speed: this.speed
                        },
                        this.tower
                    );

                    this.tower.projectiles.push(newProj);
                }
            }

            if (this.tower?.ability?.id === 'splash' || this.tower?.ability?.id === 'slowSplash' || this.tower?.ability?.id === 'synchronySplash') {
                const pulseRadius = 65;
                this.pulse = {
                    active: true,
                    x: this.enemy.center.x,
                    y: this.enemy.center.y,
                    radius: 0,
                    alpha: 0.75,
                    maxRadius: pulseRadius,
                    speed: pulseRadius / 12,
                    color: this.tower?.pokemon?.specie?.color || '#ffffff'
                };

                this.velocity.x = 0;
                this.velocity.y = 0;
                this.impacting = true;

                // detener aquí para que empiece la animación
                return;
            }
            // marcar para eliminación
            this.markedForDeletion = true;
            return;
        }

        // si sale del canvas -> eliminarlo
        if (this.ctx && this.ctx.canvas) {
            if (
                this.position.x < -50 || this.position.x > this.ctx.canvas.width + 50 ||
                this.position.y < -50 || this.position.y > this.ctx.canvas.height + 50
            ) {
                this.markedForDeletion = true;
            }
        }
    }

    findClosestEnemy(fromEnemy, maxDist = 200) {
        let closest = null;
        let minDist = maxDist;
        for (const e of this.tower.main.area.enemies) {
            if (!e || e === fromEnemy || e.hp <= 0 || e.invisible) continue;
            const dx = e.center.x - fromEnemy.center.x;
            const dy = e.center.y - fromEnemy.center.y;
            const d = Math.hypot(dx, dy);
            if (d < minDist) {
                minDist = d;
                closest = e;
            }
        }
        return closest;
    }
}

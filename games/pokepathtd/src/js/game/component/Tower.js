import { Projectile } from './Projectile.js';
import { Sprite } from '../../utils/Sprite.js';
import { playSound } from '../../file/audio.js';


export class Tower extends Sprite {
    constructor(main, x, y, ctx, pokemon, tile, teleportBuff = false) {
        super(x, y, ctx, pokemon.sprite.image, pokemon.sprite.frames, 8, 0, pokemon.sprite.hold);
        this.main = main;

        this.tile = tile;
        this.ctx = ctx;

        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        };
        this.projectiles = [];

        this.ability = pokemon.ability;
        this.rangeType = pokemon.rangeType;
        this.attackType = pokemon.attackType;
        this.basePower = pokemon.power;
        this.power = this.basePower;
        this.range = undefined;
        this.target = null;
        this.cadence = 0;

        this.speed = pokemon.speed;      
        this.attackSpeed = this.speed;

        // HABILIDADES
        this.ricochet = pokemon.ricochet;
        this.revealInvisible = (this.ability.id === 'frisk') ? true : false;
        this.damageBoost = 0;
        this.teleport = 0;
        this.teleportBuff = teleportBuff;
        this.lastTarget = null;

        this.pokemon = pokemon;
        this.pokemon.tilePosition = tile.id;

        this.projectile = {
            sprite: pokemon.projectile.sprite,
            effect: pokemon.projectile.effect,
            power: this.power,
            critical: this.critical,
            speed: this.pokemon.specie.projectileSpeed
        };

        this.pulse = {
            active: false,
            radius: 0,
            alpha: 0,
            maxRadius: 0,
            speed: 0 
        };

        this.criticalAura = false;

        this._spriteCanvas = null; 
        this._spriteCtx = null;
        this._tintCanvas = null;   
        this._tintCtx = null;

        this.setTowerStats();

        this.attackCooldown = this.attackSpeed;
        this.targetMode = pokemon.targetMode;
        
        if (this.pokemon.specie.id == 61) {
            if (this.tile.land == 2) this.updateTowerSprite(this.pokemon.specie.sprite.imageGrass, this.pokemon.specie.sprite.framesGrass, this.pokemon.specie.projectileGrass);
            else if (this.tile.land == 3) this.updateTowerSprite(this.pokemon.specie.sprite.imageWater, this.pokemon.specie.sprite.framesWater, this.pokemon.specie.projectileWater);
            else if (this.tile.land == 4) this.updateTowerSprite(this.pokemon.specie.sprite.imageMountain, this.pokemon.specie.sprite.framesMountain, this.pokemon.specie.projectileMountain);      
        } else  if (this.pokemon?.adn?.id == 61) {
            if (this.tile.land == 2) this.updateTowerSprite(this.pokemon.adn.sprite.imageGrass, this.pokemon.adn.sprite.framesGrass, this.pokemon.adn.projectileGrass);
            else if (this.tile.land == 3) this.updateTowerSprite(this.pokemon.adn.sprite.imageWater, this.pokemon.adn.sprite.framesWater, this.pokemon.adn.projectileWater);
            else if (this.tile.land == 4) this.updateTowerSprite(this.pokemon.adn.sprite.imageMountain, this.pokemon.adn.sprite.framesMountain, this.pokemon.adn.projectileMountain);      
        }
    }

    async updateTowerSprite(spriteImage = undefined, spriteFrames = undefined, projectileSprite = undefined) {
        this.loaded = false;

        this.frames.max = (spriteFrames == undefined) ? this.pokemon.sprite.frames : spriteFrames;
        this.frames.hold = this.pokemon.sprite.hold;
        this.frames.current = 0; 
        this.frames.elapsed = 0; 

        if (projectileSprite != undefined) this.projectile.sprite = projectileSprite.sprite;

        const url = (spriteImage == undefined) ? this.pokemon.sprite.image : spriteImage;

        let cached = null;
        try {
            if (this.main && this.main.assets && typeof this.main.assets.getImage === 'function') {
                cached = this.main.assets.getImage(url);
            }
            if (!cached && this.main && typeof this.main.getImage === 'function') {
                cached = this.main.getImage(url);
            }
            if (!cached && this.main && this.main.imageCache && this.main.imageCache[url]) {
                cached = this.main.imageCache[url];
            }
            if (!cached && window && window.imageCache && window.imageCache[url]) {
                cached = window.imageCache[url];
            }
        } catch (e) {
            cached = null;
        }

        if (cached) {
            // Usar la imagen ya cargada: puede ser Image, ImageBitmap o Canvas
            this.sprite = cached;

            // calcular dimensiones y rasterizar en _spriteCanvas si hace falta
            try {
                const natW = cached.naturalWidth ?? cached.width ?? (cached instanceof HTMLCanvasElement ? cached.width : 0);
                const natH = cached.naturalHeight ?? cached.height ?? (cached instanceof HTMLCanvasElement ? cached.height : 0);

                // si cached ya es canvas que contiene la imagen completa, reutilizarlo
                if (cached instanceof HTMLCanvasElement) {
                    this._spriteCanvas = cached;
                    this._spriteCtx = this._spriteCanvas.getContext('2d');
                } else {
                    // crear/actualizar canvas
                    if (!this._spriteCanvas) {
                        this._spriteCanvas = document.createElement('canvas');
                        this._spriteCtx = this._spriteCanvas.getContext('2d');
                    }
                    this._spriteCanvas.width = Math.max(1, natW);
                    this._spriteCanvas.height = Math.max(1, natH);
                    this._spriteCtx.clearRect(0, 0, this._spriteCanvas.width, this._spriteCanvas.height);
                    try { this._spriteCtx.drawImage(cached, 0, 0, this._spriteCanvas.width, this._spriteCanvas.height); } catch (_) {}
                }

                this.width = (natW || 1) / this.frames.max;
                this.height = (natH || 1) / this.frames.rows;
                this.loaded = true;
            } catch (e) {
                // fallback simple: asignar valores básicos si algo falla
                try {
                    this.width = (cached.naturalWidth || cached.width) / this.frames.max;
                    this.height = (cached.naturalHeight || cached.height) / this.frames.rows;
                    this.loaded = !!(this.width && this.height);
                } catch (_) {
                    this.loaded = false;
                }
                // mantener this.sprite = cached aunque no se rasterice
            }

            return;
        }

        // 2) Si no hay cache, delegar en Sprite._loadImage (fallback robusto: Image -> fetch+blob -> createImageBitmap)
        try {
            const ok = await this._loadImage(url);
            if (!ok) {
                // no bloqueamos; dejamos loaded = false y return
                return;
            }

            // si Sprite creó this._offscreen (canvas), usarlo como _spriteCanvas para dibujar
            if (this._offscreen && this._offscreen instanceof HTMLCanvasElement) {
                this._spriteCanvas = this._offscreen;
                this._spriteCtx = this._spriteCanvas.getContext('2d');
            } else if (this.sprite) {
                // rasterizar la imagen cargada en canvas para uso en draw (igual que antes)
                try {
                    const fullW = this.sprite.naturalWidth || this.sprite.width || 1;
                    const fullH = this.sprite.naturalHeight || this.sprite.height || 1;

                    if (!this._spriteCanvas) {
                        this._spriteCanvas = document.createElement('canvas');
                        this._spriteCtx = this._spriteCanvas.getContext('2d');
                    }
                    this._spriteCanvas.width = fullW;
                    this._spriteCanvas.height = fullH;
                    this._spriteCtx.clearRect(0, 0, fullW, fullH);
                    this._spriteCtx.drawImage(this.sprite, 0, 0, fullW, fullH);

                    this.width = fullW / this.frames.max;
                    this.height = fullH / this.frames.rows;
                    this.loaded = true;
                } catch (e) {
                    // fallback: usar la imagen directamente si rasterizado falla
                    try {
                        this.width = (this.sprite.naturalWidth || this.sprite.width) / this.frames.max;
                        this.height = (this.sprite.naturalHeight || this.sprite.height) / this.frames.rows;
                        this.loaded = true;
                    } catch (_) {
                        this.loaded = false;
                    }
                }
            }
        } catch (e) {
            // no bloqueamos, dejamos loaded = false
            this.loaded = false;
        }
    }

    updateStatsFromPokemon() {
        this.basePower = this.pokemon.power;
        this.projectile.power = this.basePower;
        this.speed = this.pokemon.speed;
        this.attackSpeed = this.pokemon.speed;
        this.critical = this.pokemon.critical;
        this.range = this.pokemon.range;
        this.innerRange = this.pokemon.innerRange;
        this.ability = this.pokemon.ability;

        // volver a aplicar efectos de terreno y recalcular power real
        this.setTowerStats();
        this.recalculatePower();

        // si la torre tiene proyectiles activos -> actualizarlos tambien por si acaso xd
        this.projectiles.forEach(p => {
            if (p) p.power = this.projectile.power ?? this.basePower;
        });

        this.updateTowerSprite();
    }

    setTowerStats() {
        this.attackSpeed = this.pokemon.speed;
        this.critical = this.pokemon.critical;
        this.range = this.pokemon.range;
        this.innerRange = this.pokemon.innerRange;
        this.power = this.basePower;
        this.speed = this.pokemon.speed;
        this.attackSpeed = this.speed;  // <-- actualizar cadencia
        this.attackCooldown = Math.min(this.attackCooldown, this.attackSpeed); // opcional

        if (this.pokemon.id == 65 || this.pokemon?.adn?.id == 65) this.speed -= (500 * this.main.player.fossilInTeam);
        
        // aplicar efectos especiales por tipo de terreno
        if (this.tile && this.tile.land === 2 && (this.pokemon.ability.id === 'ambusher' || this.pokemon.ability.id === 'castform')) {
            this.power = this.basePower * 2;
            this.projectile.power = this.power;
        }
        if (this.tile && this.tile.land === 4 && (this.pokemon.ability.id === 'vigilant' || this.pokemon.ability.id === 'castform')) {
            this.range = this.pokemon.range * 2;
        }
        if (this.tile && this.tile.land === 3 && (this.pokemon.ability.id === 'swimmer' || this.pokemon.ability.id === 'castform')) {
            this.speed = this.pokemon.speed / 2;
        }
    }

    recalculatePower() {
        // valores base
        this.powerAura = false;
        this.criticalAura = false;
        this.power = this.basePower;
        this.speed = this.pokemon.speed;
        this.range = this.pokemon.range;

        if (this.pokemon.id == 65 || this.pokemon?.adn?.id == 65) this.speed -= (500 * this.main.player.fossilInTeam);

        // terreno
        if (this.tile && this.tile.land === 2 && (this.pokemon.ability.id === 'ambusher' || this.pokemon.ability.id === 'castform'))
            this.power = Math.ceil(this.power * 2);
        if (this.tile && this.tile.land === 4 && (this.pokemon.ability.id === 'vigilant' || this.pokemon.ability.id === 'castform'))
            this.range = this.pokemon.range * 2;
        if (this.tile && this.tile.land === 3 && (this.pokemon.ability.id === 'swimmer' || this.pokemon.ability.id === 'castform'))
            this.speed /= 2;
        

        const nearbyPowerAuras = this.main.area.towers.filter(t =>
            t.ability && t.ability.id === 'powerAura' &&
            t !== this &&
            Math.hypot(t.center.x - this.center.x, t.center.y - this.center.y) <= t.range
        );

        const nearbyCriticalAuras = this.main.area.towers.filter(t =>
            t.ability && t.ability.id === 'criticalAura' &&
            t !== this &&
            Math.hypot(t.center.x - this.center.x, t.center.y - this.center.y) <= t.range
        );

        if (nearbyPowerAuras.length > 0) {
            this.power = Math.ceil(this.power * 1.2);
            this.powerAura = true;
        } else {
            this.powerAura = false;
        }

        if (nearbyCriticalAuras.length > 0) {
            this.criticalAura = true;
        } else {
            this.criticalAura = false;
        }

        this.projectile.power = this.power;
    }

    draw() {
        if (!this.loaded) return;

        this.ctx.save();
        try {
            const crop = {
                position: {
                    x: this.width * this.frames.current,
                    y: this.height * this.frames.direction
                },
                width: this.width,
                height: this.height
            };

            const tileSize = 24;
            const offsetX = (tileSize - crop.width) / 2;
            const offsetY = (tileSize - crop.height) / 2;

            this.center = {
                x: this.position.x + tileSize / 2,
                y: this.position.y + tileSize / 2
            };

            if (this.powerAura || this.criticalAura) {
                const now = Date.now();
                const pulse = 1 + 0.08 * Math.sin(now / 180); 
                const baseInner = 6;
                const baseOuter = 16;
                const inner = baseInner * pulse;
                const outer = baseOuter * pulse;


                const cx = this.center.x;
                const cy = this.center.y + (tileSize * 0.15); 

                let colInner = 'rgba(255,200,50,0.28)';  
                let colMiddle = 'rgba(255,150,40,0.16)';
                let colOuter = 'rgba(255,120,20,0.06)';

                if (this.criticalAura && !this.powerAura) {
                    colInner = 'rgba(180,0,255,0.38)';
                    colMiddle = 'rgba(140,0,220,0.26)';
                    colOuter = 'rgba(100,0,180,0.16)';
                } else if (this.criticalAura && this.powerAura) {
                    colInner = 'rgba(255,80,80,0.62)';
                    colMiddle = 'rgba(255,60,60,0.24)';
                    colOuter = 'rgba(255,40,40,0.16)';
                }

                const grad = this.ctx.createRadialGradient(cx, cy, inner, cx, cy, outer);
                grad.addColorStop(0, colInner);
                grad.addColorStop(0.6, colMiddle);
                grad.addColorStop(1, colOuter);

                this.ctx.save();
                this.ctx.globalCompositeOperation = 'lighter';
                this.ctx.beginPath();
                this.ctx.fillStyle = grad;
                this.ctx.arc(cx, cy, outer, 0, Math.PI * 2);
                this.ctx.fill();

                this.ctx.lineWidth = 1.2 * pulse;
                this.ctx.strokeStyle = (this.powerAura && !this.criticalAura) ? 'rgba(255,180,50,0.18)' : 'rgba(180,80,200,0.14)';
                this.ctx.stroke();
                this.ctx.restore();
            }
            
            // elegir source: offscreen rasterizado si existe, si no la imagen
            const source = (this._spriteCanvas) ? this._spriteCanvas : this.sprite;

            this.ctx.drawImage(
                source,
                crop.position.x,
                crop.position.y,
                crop.width,
                crop.height,
                this.position.x + offsetX,
                this.position.y + offsetY,
                crop.width,
                crop.height
            ); 


            if (this.pokemon.adn != undefined) {
                // Reutilizar canvas tintado (no crear cada frame)
                if (!this._tintCanvas) {
                    this._tintCanvas = document.createElement("canvas");
                    this._tintCtx = this._tintCanvas.getContext("2d");
                }

                // ajustar tamaño del canvas si cambió el sprite/frame
                if (this._tintCanvas.width !== crop.width || this._tintCanvas.height !== crop.height) {
                    this._tintCanvas.width = Math.max(1, Math.floor(crop.width));
                    this._tintCanvas.height = Math.max(1, Math.floor(crop.height));
                }

                const tctx = this._tintCtx;
                tctx.clearRect(0, 0, this._tintCanvas.width, this._tintCanvas.height);

                // 1. Dibujar el sprite recortado en el canvas temporal
                tctx.drawImage(
                    source,
                    crop.position.x,
                    crop.position.y,
                    crop.width,
                    crop.height,
                    0,
                    0,
                    crop.width,
                    crop.height
                );

                // 2. Aplicar tinte rosa usando la alpha del sprite
                tctx.globalCompositeOperation = "source-atop";
                tctx.fillStyle = "rgba(255, 100, 150, 0.6)";
                tctx.fillRect(0, 0, crop.width, crop.height);

                // Restaurar composite por si acaso
                tctx.globalCompositeOperation = "source-over";

                // 3. Dibujar el resultado en el canvas real
                this.ctx.drawImage(
                    this._tintCanvas,
                    this.position.x + offsetX,
                    this.position.y + offsetY
                );
            }
        } catch (e) {
            //console.warn('Tower.draw error:', e);
        } finally {
            this.ctx.restore();
        }
    }

    update(enemiesInRange, deltaTime = 1000 / 60) {
        // deltaTime viene ya escalado por Game (ms)
        const simDelta = deltaTime;
        const frameFactor = simDelta / (1000 / 60);

        this.recalculatePower();

        if (this.frames.elapsed === undefined) this.frames.elapsed = 0;
        this.frames.elapsed += frameFactor;
        while (this.frames.elapsed >= this.frames.hold) {
            this.frames.current++;
            this.frames.elapsed -= this.frames.hold;
            if (this.frames.current >= this.frames.max) this.frames.current = 0;
        }

        this.draw();

        if (!this.attackCooldown && this.attackCooldown !== 0) this.attackCooldown = 0;
        // cooldowns usan simDelta (ms)
        this.attackCooldown -= simDelta;

        if (this.ability && this.ability.id === 'powerAura') {
            const auraRange = this.range;
            let numAllies = 0;
            this.main.area.towers.forEach(tower => {
                if (tower === this) return;
                const dx = tower.center.x - this.center.x;
                const dy = tower.center.y - this.center.y;
                const distance = Math.hypot(dx, dy);
                if (distance <= auraRange) {
                    numAllies++;
                    tower.auraBuffActive = true;
                }
            });
            if (numAllies === 9) this.main.player.unlockAchievement(20)
            return;
        }

        if (this.ability && this.ability.id === 'criticalAura') {
            const auraRange = this.range;
            let numAllies = 0;
            this.main.area.towers.forEach(tower => {
                if (tower === this) return;
                const dx = tower.center.x - this.center.x;
                const dy = tower.center.y - this.center.y;
                const distance = Math.hypot(dx, dy);
                if (distance <= auraRange) {
                    numAllies++;
                    tower.criticalBuffActive = true;
                }
            });
        }

        // --- FILTRAR ENEMIGOS según invisibilidad (solo filtrar si la torre NO puede ver invisibles y el modo no es 'invisible')
        let validEnemies = (enemiesInRange || []).slice();
        if (!this.revealInvisible && this.targetMode !== 'invisible') {
            validEnemies = validEnemies.filter(e => !e.invisible);
        }

        if (this.ability.id == 'teleport' && validEnemies.length == 0  && this.main.area.waveActive) {
            this.teleport += frameFactor;
            if (this.teleport >= 200) {
                this.teleport = 0;
                this.tryTeleport();
            }
        }

        // --- CALCULAR TARGET DESEADO ---
        let desiredTarget = null;

        if (this.targetMode === 'invisible') {
            if (this.revealInvisible) {
                const invisibleList = validEnemies.filter(e => e.invisible);
                if (invisibleList.length > 0) {
                    const orderedInv = this.getOrderedEnemies(invisibleList);
                    desiredTarget = orderedInv[0] || null;
                } else {
                    if (this.target && validEnemies.includes(this.target) && this.target.hp > 0) {
                        desiredTarget = this.target;
                    } else {
                        const ordered = this.getOrderedEnemies(validEnemies);
                        desiredTarget = ordered[0] || null;
                    }
                }
            } else {
                const ordered = this.getOrderedEnemies(validEnemies);
                desiredTarget = ordered[0] || null;
            }
        } else {
            const ordered = this.getOrderedEnemies(validEnemies);
            desiredTarget = ordered[0] || null;
        }

        if (!this.target || this.target.hp <= 0 || !validEnemies.includes(this.target) || (desiredTarget && desiredTarget !== this.target)) {
            this.target = desiredTarget;
        }

        // --- TORRES DE ÁREA ---
        if (this.pokemon.attackType === 'area') {
            if (validEnemies.length > 0 && this.attackCooldown <= 0) {
                playSound(this.pokemon.specie.projectileSound, 'effect');

                validEnemies.forEach(enemy => {
                    let finalDamage = this.projectile.power;
                    let isCritical = false;
                    if ((Math.random() * 100) < this.critical) {
                        isCritical = true;
                        let multiplier = (this.pokemon?.ability?.id === 'superCritical') ? 2.0 : 1.5;
                        if (this.criticalAura) multiplier *= 1.33;
                        finalDamage = Math.ceil(finalDamage * multiplier);
                    }

                    enemy.getDamaged(finalDamage, 'physical', this.pokemon.ability, isCritical, new Set(), this.pokemon);

                    if (enemy.canBurn && this.ability && this.ability.id === 'burnNerf' && Math.random() < 0.5)
                        enemy.applyStatusEffect({ type: 'burn', damagePercent: 0.005, duration: 10 }, this.pokemon);
                    if (enemy.canPoison && this.ability && this.ability.id === 'poison')
                        enemy.applyStatusEffect({ type: 'poison', damagePercent: 0.001, stacks: 1 }, this.pokemon);
                    if (enemy.canStun && this.ability && this.ability.id === 'stunArea' && Math.random() < 0.3)
                        enemy.applyStatusEffect({ type: 'stun', duration: 1.5 });
                    if (enemy.canSlow && this.ability && this.ability.id === 'slow')
                        enemy.applyStatusEffect({ type: 'slow', duration: 2, slowPercent: 0.5 });
                });

                this.pulse.active = true;
                this.pulse.radius = 0;
                this.pulse.alpha = 0.7;
                this.pulse.maxRadius = this.range;
                this.pulse.speed = this.range / 15;
                this.attackCooldown = this.speed;
            }

            if (this.pulse.active) {
                this.ctx.beginPath();
                this.ctx.arc(this.center.x, this.center.y, this.pulse.radius, 0, Math.PI * 2);

                const hex = (this.pokemon.specie.color || '#ffffff').replace('#', '');
                const r = parseInt(hex.substring(0, 2), 16) || 255;
                const g = parseInt(hex.substring(2, 4), 16) || 255;
                const b = parseInt(hex.substring(4, 6), 16) || 255;

                this.ctx.fillStyle = `rgba(${r},${g},${b},${this.pulse.alpha})`;
                this.ctx.fill();

                this.pulse.radius += this.pulse.speed * frameFactor;
                this.pulse.alpha -= 0.04 * frameFactor;
                if (this.pulse.radius >= this.pulse.maxRadius || this.pulse.alpha <= 0)
                    this.pulse.active = false;
            }
            return;
        }

        // --- TORRES CON PROYECTILES ---
        if (this.target && this.attackCooldown <= 0) {
            const maxShots =
                this.ability && this.ability.id === 'cradily' ? this.main.player.fossilInTeam :
                this.ability && this.ability.id === 'quadraShot' ? 4 :
                this.ability && this.ability.id === 'tripleShot' ? 3 :
                this.ability && (this.ability.id === 'doubleShot' || this.ability.id === 'curseDoubleShot' || this.ability.id === 'poisonDoubleShot') ? 2 :
                1;

            const orderedAll = this.getOrderedEnemies(validEnemies);

            const targets = [];
            if (this.target && validEnemies.includes(this.target)) targets.push(this.target);

            for (let i = 0; i < orderedAll.length && targets.length < maxShots; i++) {
                const cand = orderedAll[i];
                if (!targets.includes(cand)) targets.push(cand);
            }

            targets.forEach(tgt => {
                if (!tgt) return;
                const proj = new Projectile(
                    this.position.x + 12,
                    this.position.y + 12,
                    tgt,
                    this.ctx,
                    { ...this.projectile, ricochetsLeft: this.ricochet },
                    this
                );
                this.projectiles.push(proj);
            });

            playSound(this.pokemon.specie.projectileSound, 'effect');
            this.attackCooldown = this.speed;
        }

        // --- ACTUALIZAR PROYECTILES ---
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const p = this.projectiles[i];

            if (!p) {
                this.projectiles.splice(i, 1);
                continue;
            }

            if (p.markedForDeletion) {
                this.projectiles.splice(i, 1);
                continue;
            }

            if (!p.enemy || p.enemy.hp <= 0 || (p.enemy.invisible && !(p.tower?.revealInvisible || p.tower?.targetMode === 'invisible'))) {
                const fallbackSource = p.enemy ? p.enemy : { center: p.position };
                const newTarget = p.tower ? p.tower.findClosestEnemy(fallbackSource, 200) : null;
                if (newTarget) {
                    p.enemy = newTarget;
                } else {
                    this.projectiles.splice(i, 1);
                    continue;
                }
            }

            if (typeof p.update === 'function') p.update(deltaTime); // pasamos delta ya escalado por Game
            if (p.markedForDeletion) this.projectiles.splice(i, 1);
        }
    }

    findClosestEnemy(fromEnemy, maxDist = 1000) {
        let closest = null;
        let minDist = maxDist;
        for (const e of this.main.area.enemies) {
            if (!e || e === fromEnemy || e.hp <= 0) continue;
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

    getOrderedEnemies(validEnemies) {
        if (!validEnemies || validEnemies.length === 0) return [];

        const arr = validEnemies.slice();

        const hasStatus = (e, type) => e.statusEffects && e.statusEffects.some(se => se.type === type);

        switch (this.targetMode) {
            case 'invisible':
                arr.sort((a, b) => Number(b.invisible === true) - Number(a.invisible === true));
                break;
            case 'first':
                arr.sort((a, b) => (b.distanceTraveled || 0) - (a.distanceTraveled || 0)); // más recorrido primero
                break;
            case 'last':
                arr.sort((a, b) => (a.distanceTraveled || 0) - (b.distanceTraveled || 0)); // menos recorrido primero
                break;
            case 'faster':
                arr.sort((a, b) => (b.speed || 0) - (a.speed || 0));
                break;
            case 'slower':
                arr.sort((a, b) => (a.speed || 0) - (b.speed || 0));
                break;
            case 'highHP':
                arr.sort((a, b) => (b.hp || 0) - (a.hp || 0));
                break;
            case 'lowHP':
                arr.sort((a, b) => (a.hp || 0) - (b.hp || 0));
                break;
            case 'highArmor':
                arr.sort((a, b) => (b.armor || 0) - (a.armor || 0));
                break;
            case 'noArmor':
                arr.sort((a, b) => Number(a.armor <= 0) - Number(b.armor <= 0));
                break;
            case 'poisoned':
                arr.sort((a, b) => Number(hasStatus(b, 'poison')) - Number(hasStatus(a, 'poison')));
                break;
            case 'notPoisoned':
                arr.sort((a, b) => Number(!hasStatus(b, 'poison')) - Number(!hasStatus(a, 'poison')));
                break;
            case 'burned':
                arr.sort((a, b) => Number(hasStatus(b, 'burn')) - Number(hasStatus(a, 'burn')));
                break;
            case 'notBurned':
                arr.sort((a, b) => Number(!hasStatus(b, 'burn')) - Number(!hasStatus(a, 'burn')));
                break;
            case 'stuned':
                arr.sort((a, b) => Number(hasStatus(b, 'stun')) - Number(hasStatus(a, 'stun')));
                break;
            case 'notStuned':
                arr.sort((a, b) => Number(!hasStatus(b, 'stun')) - Number(!hasStatus(a, 'stun')));
                break;
            case 'slowed':
                arr.sort((a, b) => Number(hasStatus(b, 'slow')) - Number(hasStatus(a, 'slow')));
                break;
            case 'notSlowed':
                arr.sort((a, b) => Number(!hasStatus(b, 'slow')) - Number(!hasStatus(a, 'slow')));
                break;
            case 'curseable':
                arr.sort((a, b) => Number(!hasStatus(b, 'curse')) - Number(!hasStatus(a, 'cursed')));
                break;
            case 'random':
                // barajar con Fisher-Yates mínimo
                for (let i = arr.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
                break;
            default:
                break;
        }

        return arr;
    }

    getTarget(validEnemies) {
        if (!validEnemies || validEnemies.length === 0) return null;

        switch (this.targetMode) {
            case 'invisible':
                return validEnemies.find(e => e.invisible) || validEnemies[0];
            case 'first':
                return validEnemies.reduce((prev, curr) =>
                    curr.distanceTraveled > prev.distanceTraveled ? curr : prev
                );
            case 'last':
                return validEnemies.reduce((prev, curr) =>
                    curr.distanceTraveled < prev.distanceTraveled ? curr : prev
                );
            case 'faster':
                return validEnemies.reduce((prev, curr) => curr.speed > prev.speed ? curr : prev);
            case 'slower':
                return validEnemies.reduce((prev, curr) => curr.speed < prev.speed ? curr : prev);
            case 'highHP':
                return validEnemies.reduce((prev, curr) => (curr.hp > prev.hp ? curr : prev));
            case 'lowHP':
                return validEnemies.reduce((prev, curr) => (curr.hp < prev.hp ? curr : prev));
            case 'highArmor':
                return validEnemies.reduce((prev, curr) => (curr.armor > prev.armor ? curr : prev), validEnemies[0]);
            case 'noArmor':
                return validEnemies.find(e => e.armor <= 0) || validEnemies[0];
            case 'poisoned':
                return validEnemies.find(e => e.statusEffects.some(s => s.type === 'poison')) || validEnemies[0];
            case 'notPoisoned':
                return validEnemies.find(e =>
                    e.canPoison !== false && !e.statusEffects.some(s => s.type === 'poison')
                ) || validEnemies[0];
            case 'burned':
                return validEnemies.find(e => e.statusEffects.some(s => s.type === 'burn')) || validEnemies[0];
            case 'notBurned':
                return validEnemies.find(e =>
                    e.canBurn !== false && !e.statusEffects.some(s => s.type === 'burn')
                ) || validEnemies[0];
            case 'stuned':
                return validEnemies.find(e => e.statusEffects.some(s => s.type === 'stun')) || validEnemies[0];
            case 'notStuned':
                return validEnemies.find(e =>
                    e.canStun !== false && !e.statusEffects.some(s => s.type === 'stun')
                ) || validEnemies[0];
            case 'slowed':
                return validEnemies.find(e => e.statusEffects.some(s => s.type === 'slow')) || validEnemies[0];
            case 'notSlowed':
                return validEnemies.find(e =>
                    e.canSlow !== false && !e.statusEffects.some(s => s.type === 'slow')
                ) || validEnemies[0];
            case 'curseable':
                return validEnemies.find(e =>
                    e.canBurn !== false && !e.statusEffects.some(s => s.type === 'curse')
                ) || validEnemies[0];
            case 'random':
                return validEnemies[Math.floor(Math.random() * validEnemies.length)];
            default:
                return validEnemies[0];
        }
    }

    tryTeleport() {
        const tiles = this.main.area.placementTiles.filter(tile => (tile.tower === false && [1, 2, 4].includes(tile.land)))
        const tile = tiles[Math.floor(Math.random() * tiles.length)];

        const index = this.main.area.towers.findIndex((tower) => tower.pokemon == this.pokemon);
        if (index !== -1) {
            this.main.area.towers[index].tile.tower = false;
            this.main.area.towers[index].pokemon.tilePosition = -1;
            this.main.area.towers.splice(index, 1);
        }

        const indexTeam = this.main.team.pokemon.findIndex((pokemon) => pokemon == this.pokemon);

        (!this.teleportBuff) ? this.teleportBuff = 2 : this.teleportBuff++;

        playSound('teleport', 'effect');
        this.main.area.towers.push(
            new Tower(
                    this.main,
                    tile.position.x,
                    tile.position.y,
                    this.main.game.ctx,
                    this.main.team.pokemon[indexTeam],
                    tile, 
                    this.teleportBuff
                )
            );

        tile.tower = this.main.team.pokemon[indexTeam];
        this.main.team.pokemon[indexTeam].isDeployed = true;
        this.main.UI.updatePokemon();
        this.main.area.recalculateAuras();
    }
}

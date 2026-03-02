export class Sprite {

    static _loadingPromises = new Map();

    constructor(x, y, ctx, spriteUrl, frames, rows = 1, direction = 0, hold = 5, useOffscreen = true) {
        this.position = { x, y };
        this.ctx = ctx;
        this.frames = {
            max: frames,
            current: 0,
            elapsed: 0,
            hold,
            rows,
            direction
        };
 
        this.sprite = null;

        this.width = 0;
        this.height = 0;
        this.loaded = false;
        this._useOffscreen = useOffscreen;
        this._offscreen = null;

        
        this._loadPromise = this._loadImage(spriteUrl);
    }

    _findCachedImage(src) {
        try {
            if (window && window.imageCache && window.imageCache[src]) return window.imageCache[src];
            if (window && window.audioCache && window.audioCache[src]) return null; // sonido
            if (window && window.main && window.main.imageCache && window.main.imageCache[src]) return window.main.imageCache[src];
            if (window && window.main && window.main.assets && typeof window.main.assets.getImage === 'function') {
                const i = window.main.assets.getImage(src);
                if (i) return i;
            }
            if (window && window.__asset_image_cache && window.__asset_image_cache[src]) return window.__asset_image_cache[src];
        } catch (_) {}
        return null;
    }

    _blobToImage(blob) {
        return new Promise((resolve, reject) => {
            const url = URL.createObjectURL(blob);
            const img = new Image();
            img.onload = () => {
                URL.revokeObjectURL(url);
                resolve(img);
            };
            img.onerror = (e) => {
                URL.revokeObjectURL(url);
                reject(e);
            };
            img.src = url;
        });
    }

    async _loadImage(url) {
        if (!url) return false;
        
        if (typeof url !== 'string') {
            const obj = url;
            this.sprite = obj;
            this._applyImageDimensions(obj);
            this.loaded = !!(this.width && this.height);
            if (this._useOffscreen && this.loaded) this._rasterizeOffscreen(obj);
            return this.loaded;
        }
        
        const cached = this._findCachedImage(url);
        if (cached) {
            this.sprite = cached;
            this._applyImageDimensions(cached);
            this.loaded = !!(this.width && this.height);
            if (this._useOffscreen && this.loaded) this._rasterizeOffscreen(cached);
            return this.loaded;
        }
        
        if (Sprite._loadingPromises.has(url)) {
            try {
                const result = await Sprite._loadingPromises.get(url);
                if (result) {
                    this.sprite = result;
                    this._applyImageDimensions(result);
                    this.loaded = !!(this.width && this.height);
                    if (this._useOffscreen && this.loaded) this._rasterizeOffscreen(result);
                    return this.loaded;
                }
            } catch (_) { 
        }
    }


    const loadPromise = (async () => {
        try {
            const loadResult = await new Promise((resolve) => {
              let resolved = false;
              const done = (ok) => {
                if (resolved) return;
                resolved = true;
                resolve({ ok, img });
              };

              img.onload = () => done(true);
              img.onerror = () => done(false);

              img.src = url;
            });

            if (loadResult.ok && (loadResult.img.naturalWidth || loadResult.img.width)) {
              return loadResult.img;
            }
          } catch (e) { }

        try {
            const res = await fetch(url, { cache: 'force-cache' });
            if (!res.ok) throw new Error('fetch failed ' + res.status);
            const blob = await res.blob();

            if (typeof createImageBitmap === 'function') {
              try {
                const bmp = await createImageBitmap(blob);
                return bmp;
              } catch (e) { }
            }
            const imgFromBlob = await this._blobToImage(blob);
            return imgFromBlob;
          } catch (e) {
            return null;
          }
    })();

    Sprite._loadingPromises.set(url, loadPromise);

    let loadedImage = null;
    try {
      loadedImage = await loadPromise;
    } finally {
      Sprite._loadingPromises.delete(url);
    }

    if (loadedImage) {
      this.sprite = loadedImage;
      this._applyImageDimensions(loadedImage);
      this.loaded = !!(this.width && this.height);

      try {
        if (window && window.imageCache) window.imageCache[url] = loadedImage;
        if (window && window.main && window.main.imageCache) window.main.imageCache[url] = loadedImage;
        if (window && window.__asset_image_cache) window.__asset_image_cache[url] = loadedImage;
      } catch (_) {}

      if (this._useOffscreen && this.loaded) this._rasterizeOffscreen(loadedImage);
      return this.loaded;
    }

    this.loaded = false;
    return false;
  }

    _applyImageDimensions(img) {
        const natW = img.naturalWidth ?? img.width ?? 0;
        const natH = img.naturalHeight ?? img.height ?? 0;

        const maxFrames = Math.max(1, this.frames.max ?? 1);
        const rows = Math.max(1, this.frames.rows ?? 1);

        this.width = natW ? (natW / maxFrames) : 0;
        this.height = natH ? (natH / rows) : 0;
    }

    _rasterizeOffscreen(img) {
        try {
            const natW = img.naturalWidth ?? img.width ?? 0;
            const natH = img.naturalHeight ?? img.height ?? 0;
            if (!natW || !natH) return;

            const c = document.createElement('canvas');
            c.width = natW;
            c.height = natH;
            const ctx = c.getContext('2d');
            ctx.drawImage(img, 0, 0);
            this._offscreen = c;
        } catch (e) {
          this._offscreen = null;
        }
    }


    async reload() {
        let base = '';
        if (this.sprite && typeof this.sprite === 'string') base = this.sprite.split('?_reload=')[0];
        else if (this.sprite && this.sprite.src) base = this.sprite.src.split('?_reload=')[0];
        else base = null;

        if (!base) return this._loadPromise = this._loadImage(base);

        const busted = base + '?_reload=' + Date.now();
        return this._loadImage(busted);
    }

    draw() {
        if (!this.loaded) return;
        if (!this.ctx) return;

        
        if (!this.width || !this.height) {
            if (!((this.sprite && (this.sprite.naturalWidth || this.sprite.width)) || (this._offscreen && (this._offscreen.width)))) {
                this._loadImage(this.sprite && this.sprite.src ? this.sprite.src.split('?_reload=')[0] : null).catch(() => {});
                return;
            } else { this._applyImageDimensions(this.sprite); }
        }

        this.ctx.save();
        try {
            const cropX = Math.floor(this.width * this.frames.current);
            const cropY = Math.floor(this.height * this.frames.direction);

            const source = this._offscreen || this.sprite;

            this.ctx.drawImage(
                source,
                cropX, cropY,
                this.width, this.height,
                this.position.x, this.position.y,
                this.width, this.height
            );
        } catch (e) {
        } finally {
          this.ctx.restore();
        }

        this.frames.elapsed++;
        if (this.frames.elapsed % this.frames.hold === 0) {
            this.frames.current++;
            if (this.frames.current >= this.frames.max) this.frames.current = 0;
        }
    }
}
    export class AssetManager {
      constructor(imageCache = {}, audioCache = {}) {
        this.images = imageCache;
        this.sounds = audioCache;
      }

      getImage(src) {
        return this.images[src] || null;
      }

      hasImage(src) {
        return !!this.images[src];
      }

      getSound(src) {
        return this.sounds[src] || null;
      }

      hasSound(src) {
        return !!this.sounds[src];
      }

      static keyFromSrc(src) {
        return src.split('/').pop().split('.')[0];
      }
    }

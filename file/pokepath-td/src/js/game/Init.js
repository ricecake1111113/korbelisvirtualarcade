import { Element } from '../utils/Element.js';
import { text } from '../file/text.js';
import { playSound, setVolume } from '../file/audio.js';
import { Main } from './Main.js';

export class Init {
  constructor(data) {
    this.data = data;
    this.lang = data.config.language;

    // --- CACHES MINIMOS (no cambian tu arquitectura) ---
    // Evitan volver a pedir assets varias veces y arreglan el problema de recargas que
    // podían generar 403 en itch.io si se pedían repetidamente.
    this.imageCache = {}; // key = src (string) -> HTMLImageElement
    this.audioCache = {}; // key = src (string) -> HTMLAudioElement

    this.render();
  }

  render = () => {
    // Font según idioma (tal y como tenías)
    if (this.lang == 6) {
      document.body.style.fontFamily = 'PixelMPlus';
    } else if (this.lang == 7) {
      document.body.style.fontFamily = 'NGC';
    } else {
      document.body.style.fontFamily = 'PressStart2P';
    }

    // Escena init (igual que antes)
    this.scene = new Element(document.getElementById("screen"), { className: 'init-scene' }).element;

    // Audio / UI
    setVolume();
    this.createLoadingBar();
    playSound('start', 'ui');

    // Cargar assets.json y precargar assets
    fetch("./src/assets/assets.json")
      .then(res => {
        if (!res.ok) throw new Error(`assets.json fetch failed: ${res.status}`);
        return res.json();
      })
      .then(assets => {
        this.preloadAssets(assets, () => {
          // Intentamos forzar decodificación por si quedase algo pendiente (pero usando el cache local)
          try {
            const offscreen = document.createElement("canvas");
            const ctx = offscreen.getContext("2d");
            Object.values(this.imageCache).forEach(img => {
              try { ctx.drawImage(img, 0, 0); } catch (_) {}
            });
          } catch (_) {}

          // Limpiar UI init y lanzar Main, pasando caches para que Main use las imágenes ya cargadas.
          try { this.scene.remove(); } catch (_) {}
          // Pasamos imageCache y audioCache para que no recrees Image/Audio en runtime.
          new Main(this.data.save, this.imageCache, this.audioCache);
        });
      })
      .catch(err => {
        console.error('Error cargando assets.json:', err);
        if (this.loadingText) this.loadingText.textContent = 'ERROR LOADING ASSETS';
      });
  }

  createLoadingBar() {
    this.loadingText = new Element(this.scene, {
      className: 'loading-text',
      text: text.ui.loading[this.lang].toUpperCase()
    }).element;

    this.loadingBarBackground = new Element(this.scene, { className: 'loading-bar-bg' }).element;
    this.loadingBar = new Element(this.loadingBarBackground, { className: 'loading-bar' }).element;
  }

  // === Preload mínimo seguro (reemplaza tu versión anterior) ===
  // - No cambia la estructura del Init ni del JSON (acepta arrays images[] y sounds[])
  // - Cachea por src para evitar nuevas solicitudes
  // - Usa img.decode() cuando esté disponible
  preloadAssets(assets, onComplete) {
    let loaded = 0;
    const total = (Array.isArray(assets.images) ? assets.images.length : 0)
                + (Array.isArray(assets.sounds) ? assets.sounds.length : 0);

    // Si no hay nada que cargar, ejecutar onComplete inmediatamente.
    if (total === 0) {
      onComplete();
      return;
    }

    const checkLoaded = () => {
      loaded++;
      const percent = Math.floor((loaded / total) * 100);
      if (this.loadingBar) this.loadingBar.style.width = `${percent}%`;

      if (loaded === total) {
        onComplete();
      }
    };

    // ==== IMAGENES ====
    (assets.images || []).forEach(src => {
      // Si ya la teníamos en cache, no volver a pedirla
      if (this.imageCache[src]) {
        checkLoaded();
        return;
      }

      const img = new Image();
      // No tocar crossOrigin a menos que cargues desde otro dominio con CORS configurado
      img.src = src;

      // Guardamos la referencia inmediatamente para evitar que otra llamada provoque otra petición
      this.imageCache[src] = img;

      img.onload = async () => {
        try {
          if (img.decode) {
            // decode() ayuda a asegurarse que la imagen está decodificada en memoria
            await img.decode();
          }
        } catch (_) {
          // si falla decode, no bloqueamos
        }
        checkLoaded();
      };

      img.onerror = () => {
        // Si hay error, dejamos la entrada en cache para evitar reintentos inmediatos
        // y seguimos adelante (no bloqueamos todo)
        console.warn('Image failed to load:', src);
        checkLoaded();
      };
    });

    // ==== AUDIOS ====
    (assets.sounds || []).forEach(src => {
      if (this.audioCache[src]) {
        checkLoaded();
        return;
      }

      const audio = new Audio(src);
      audio.preload = 'auto';

      this.audioCache[src] = audio;

      // onloadeddata es bueno para saber cuando ya hay datos para reproducir
      audio.onloadeddata = () => {
        checkLoaded();
      };

      audio.onerror = () => {
        console.warn('Audio failed to load:', src);
        checkLoaded();
      };
    });
  }
}
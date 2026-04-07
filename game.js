/* ================================================
   game.js - shared utilities for all game pages
   Requires GAME_NAME and GAME_FOLDER to be defined
   in the host page before this script is loaded.
================================================ */

/* ==============================================
   ICON FALLBACKS (multi-extension scan)
============================================== */
const ICON_EXTENSIONS = ['png', 'jpeg', 'jpg', 'webp', 'svg', 'gif', 'avif'];

function iconExtOrder(preferredExt) {
    const preferred = preferredExt ? preferredExt.toLowerCase() : null;
    if (!preferred) return ICON_EXTENSIONS;
    if (!ICON_EXTENSIONS.includes(preferred)) {
        return [preferred, ...ICON_EXTENSIONS];
    }
    return [preferred, ...ICON_EXTENSIONS.filter(ext => ext !== preferred)];
}

function parseIconInfo(src) {
    if (!src) return null;
    const match = String(src).match(/^(.*\/)?icon\.([a-z0-9]+)(?:[?#].*)?$/i);
    if (!match) return null;
    return {
        base: (match[1] || '') + 'icon',
        ext: match[2].toLowerCase(),
    };
}

function pushIconCandidates(candidates, seen, base, preferredExt = null) {
    if (!base) return;
    iconExtOrder(preferredExt).forEach(ext => {
        const candidate = `${base}.${ext}`;
        if (!seen.has(candidate)) {
            seen.add(candidate);
            candidates.push(candidate);
        }
    });
}

function getGameIconCandidates(img) {
    const candidates = [];
    const seen = new Set();

    const srcAttr = (img.getAttribute('src') || '').trim();
    const currentSrc = img.currentSrc || srcAttr;

    const currentInfo = parseIconInfo(currentSrc);
    if (currentInfo) {
        pushIconCandidates(candidates, seen, currentInfo.base, currentInfo.ext);
    } else if (currentSrc && !seen.has(currentSrc)) {
        seen.add(currentSrc);
        candidates.push(currentSrc);
    }

    const attrInfo = parseIconInfo(srcAttr);
    if (attrInfo) {
        pushIconCandidates(candidates, seen, attrInfo.base, attrInfo.ext);
    }

    if (typeof GAME_FOLDER === 'string' && GAME_FOLDER.trim()) {
        const normalizedFolder = GAME_FOLDER.replace(/^\/+|\/+$/g, '');
        pushIconCandidates(candidates, seen, `../../${normalizedFolder}/icon`);
    }

    pushIconCandidates(candidates, seen, 'icon');
    return candidates;
}

function applyGameIconFallback(img) {
    const candidates = getGameIconCandidates(img);
    if (!candidates.length) return;

    let index = 0;
    function tryNextIcon() {
        if (index >= candidates.length) {
            img.style.display = 'none';
            return;
        }
        img.style.display = '';
        img.src = candidates[index++];
    }

    img.onerror = tryNextIcon;
    tryNextIcon();
}

function initGameIconFallbacks() {
    document.querySelectorAll('.game-icon').forEach(applyGameIconFallback);
}

(function bootstrapGameIconFallbacks() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGameIconFallbacks);
    } else {
        initGameIconFallbacks();
    }
})();

/* ==============================================
   FAVOURITES (localStorage)
============================================== */
function getFavourites() {
    try { return JSON.parse(localStorage.getItem('kva_favourites') || '[]'); }
    catch (e) { return []; }
}

function saveFavourites(favs) {
    try { localStorage.setItem('kva_favourites', JSON.stringify(favs)); }
    catch (e) {}
}

function isFavourited(folder) {
    return getFavourites().some(f => f.folder === folder);
}

function toggleFavourite() {
    let favs = getFavourites();
    if (isFavourited(GAME_FOLDER)) {
        favs = favs.filter(f => f.folder !== GAME_FOLDER);
    } else {
        favs.unshift({ name: GAME_NAME, folder: GAME_FOLDER });
    }
    saveFavourites(favs);
    renderFavBtn();
    return false;
}

function renderFavBtn() {
    const btn = document.getElementById('__fav-btn');
    if (!btn) return;
    const active = isFavourited(GAME_FOLDER);
    btn.textContent = active ? '\u2665 Favourited' : '\u2661 Favourite';
    btn.classList.toggle('fav-btn--active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
}

/* Inject the favourites button into .game-header on load */
(function injectFavBtn() {
    function insert() {
        if (typeof GAME_FOLDER === 'undefined') return;
        const header = document.querySelector('.game-header');
        if (!header || document.getElementById('__fav-btn')) return;

        const btn = document.createElement('button');
        btn.id = '__fav-btn';
        btn.className = 'fav-btn';
        btn.type = 'button';
        btn.addEventListener('click', toggleFavourite);
        header.appendChild(btn);
        renderFavBtn();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insert);
    } else {
        insert();
    }
})();

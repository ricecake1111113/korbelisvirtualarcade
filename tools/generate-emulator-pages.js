#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const FILE_EMU_ROOT = path.join(ROOT, "file", "emu");
const EMULATORS_ROOT = path.join(ROOT, "emulators");
const GAMES_JSON = path.join(ROOT, "games.json");
const SECTION_TAGS = {
  games: ["game"],
  emulators: ["emu"],
  music: ["music"],
};

const META_BY_FOLDER = {
  "aladdin": {
    publisher: "Capcom",
    year: 1993,
    genres: "Platformer / Action",
    tags: ["SNES", "Emulator", "Platformer", "Action"],
    description: "Disney's Aladdin on SNES is a Capcom action platformer built around swordplay, tight jumps, and animated set pieces from the film.",
  },
  "batman-returns": {
    publisher: "Konami",
    year: 1993,
    genres: "Beat 'em up / Action",
    tags: ["SNES", "Emulator", "Beat 'em Up", "Action"],
    description: "Batman Returns is a side-scrolling brawler from Konami that turns Gotham into a heavy-hitting arcade-style comic-book fight.",
  },
  "breath-of-fire-ii": {
    publisher: "Capcom",
    year: 1995,
    genres: "RPG",
    tags: ["SNES", "Emulator", "RPG"],
    description: "Breath of Fire II is a classic turn-based RPG with town building, dragon transformations, and a large ensemble cast.",
  },
  "castlevania-dracula-x": {
    publisher: "Konami",
    year: 1995,
    genres: "Platformer / Action",
    tags: ["SNES", "Emulator", "Platformer", "Action"],
    description: "Castlevania: Dracula X brings the series' gothic action to the SNES with punishing platforming, sub-weapons, and boss fights.",
  },
  "chrono-trigger": {
    publisher: "Squaresoft",
    year: 1995,
    genres: "RPG",
    tags: ["SNES", "Emulator", "RPG"],
    description: "Chrono Trigger is a landmark JRPG known for its time-travel story, active battle system, and multiple endings.",
  },
  "contra-iii-the-alien-wars": {
    publisher: "Konami",
    year: 1992,
    genres: "Run and Gun / Action",
    tags: ["SNES", "Emulator", "Action", "Shooter"],
    description: "Contra III: The Alien Wars is a fast, explosive run-and-gun that pushes the SNES with huge bosses and relentless co-op action.",
  },
  "donkey-kong-country": {
    publisher: "Nintendo",
    year: 1994,
    genres: "Platformer",
    tags: ["SNES", "Emulator", "Platformer"],
    description: "Donkey Kong Country pairs inventive platforming with pre-rendered visuals, animal buddies, and one of the system's most iconic soundtracks.",
  },
  "donkey-kong-country-2-diddys-kong-quest": {
    publisher: "Nintendo",
    year: 1995,
    genres: "Platformer",
    tags: ["SNES", "Emulator", "Platformer"],
    description: "Donkey Kong Country 2 expands the first game with sharper level design, pirate-themed worlds, and the Diddy and Dixie duo.",
  },
  "donkey-kong-country-3-dixie-kongs-double-trouble": {
    publisher: "Nintendo",
    year: 1996,
    genres: "Platformer",
    tags: ["SNES", "Emulator", "Platformer"],
    description: "Donkey Kong Country 3 delivers inventive platforming, large overworld exploration, and tag-team play with Dixie and Kiddy Kong.",
  },
  "earthbound": {
    publisher: "Nintendo",
    year: 1995,
    genres: "RPG",
    tags: ["SNES", "Emulator", "RPG"],
    description: "EarthBound is a quirky modern-day RPG with memorable writing, turn-based battles, and a distinct sense of humor.",
  },
  "earthworm-jim": {
    publisher: "Playmates Interactive",
    year: 1994,
    genres: "Platformer / Action",
    tags: ["SNES", "Emulator", "Platformer", "Action"],
    description: "Earthworm Jim is an offbeat action platformer packed with exaggerated animation, strange level ideas, and slapstick boss encounters.",
  },
  "f-zero": {
    publisher: "Nintendo",
    year: 1991,
    genres: "Racing",
    tags: ["SNES", "Emulator", "Racing"],
    description: "F-Zero is Nintendo's futuristic racer, built around blistering speed, Mode 7 tracks, and precision cornering.",
  },
  "illusion-of-gaia": {
    publisher: "Nintendo",
    year: 1994,
    genres: "Action RPG",
    tags: ["SNES", "Emulator", "RPG", "Action"],
    description: "Illusion of Gaia blends action combat with puzzle-filled dungeons and a world-spanning adventure rooted in myth and history.",
  },
  "kirby-super-star": {
    publisher: "Nintendo",
    year: 1996,
    genres: "Platformer",
    tags: ["SNES", "Emulator", "Platformer"],
    description: "Kirby Super Star packages several adventures into one polished platformer with copy abilities, helpers, and co-op play.",
  },
  "kirbys-dream-land-3": {
    publisher: "Nintendo",
    year: 1997,
    genres: "Platformer",
    tags: ["SNES", "Emulator", "Platformer"],
    description: "Kirby's Dream Land 3 combines soft storybook visuals with relaxed platforming, animal friends, and collectible-driven stages.",
  },
  "lion-king-the": {
    publisher: "Virgin Interactive",
    year: 1994,
    genres: "Platformer",
    tags: ["SNES", "Emulator", "Platformer"],
    description: "The Lion King is a challenging Disney platformer that follows Simba from cub to king through stages inspired by the film.",
  },
  "lufia-ii-rise-of-the-sinistrals": {
    publisher: "Natsume",
    year: 1996,
    genres: "RPG",
    tags: ["SNES", "Emulator", "RPG"],
    description: "Lufia II is a beloved 16-bit RPG with puzzle-heavy dungeons, monster companions, and a story that builds toward tragedy.",
  },
  "mega-man-x": {
    publisher: "Capcom",
    year: 1993,
    genres: "Platformer / Action",
    tags: ["SNES", "Emulator", "Platformer", "Action"],
    description: "Mega Man X modernized the Blue Bomber formula with wall jumps, armor upgrades, and a faster, more aggressive combat loop.",
  },
  "mega-man-x2": {
    publisher: "Capcom",
    year: 1994,
    genres: "Platformer / Action",
    tags: ["SNES", "Emulator", "Platformer", "Action"],
    description: "Mega Man X2 builds on the first game with tighter movement, hidden upgrades, and the memorable X-Hunter pursuit.",
  },
  "mega-man-x3": {
    publisher: "Capcom",
    year: 1995,
    genres: "Platformer / Action",
    tags: ["SNES", "Emulator", "Platformer", "Action"],
    description: "Mega Man X3 adds more vertical mobility, secret tech upgrades, and the ability to play sections as Zero.",
  },
  "mortal-kombat": {
    publisher: "Acclaim Entertainment",
    year: 1993,
    genres: "Fighting",
    tags: ["SNES", "Emulator", "Fighting"],
    description: "Mortal Kombat brings digitized fighters, special moves, and competitive one-on-one battles to the 16-bit era.",
  },
  "mortal-kombat-3": {
    publisher: "Acclaim Entertainment",
    year: 1995,
    genres: "Fighting",
    tags: ["SNES", "Emulator", "Fighting"],
    description: "Mortal Kombat 3 speeds up the formula with run mechanics, combos, and a larger arcade-style roster.",
  },
  "mortal-kombat-ii": {
    publisher: "Acclaim Entertainment",
    year: 1994,
    genres: "Fighting",
    tags: ["SNES", "Emulator", "Fighting"],
    description: "Mortal Kombat II refines the original with faster controls, more characters, and a deeper competitive feel.",
  },
  "ogre-battle-the-march-of-the-black-queen": {
    publisher: "Enix",
    year: 1995,
    genres: "Strategy RPG",
    tags: ["SNES", "Emulator", "Strategy", "RPG"],
    description: "Ogre Battle mixes real-time map control with tactical squad management in one of the SNES's most distinctive strategy RPGs.",
  },
  "rock-n-roll-racing": {
    publisher: "Interplay",
    year: 1993,
    genres: "Combat Racing",
    tags: ["SNES", "Emulator", "Racing", "Action"],
    description: "Rock n' Roll Racing combines top-down track combat, weapon pickups, and a loud personality-driven presentation.",
  },
  "secret-of-evermore": {
    publisher: "Square",
    year: 1995,
    genres: "Action RPG",
    tags: ["SNES", "Emulator", "RPG", "Action"],
    description: "Secret of Evermore is an action RPG starring a boy and his dog across strange themed worlds with real-time combat and alchemy.",
  },
  "secret-of-mana": {
    publisher: "Squaresoft",
    year: 1993,
    genres: "Action RPG",
    tags: ["SNES", "Emulator", "RPG", "Action"],
    description: "Secret of Mana is a cooperative action RPG known for ring menus, seamless exploration, and a beloved orchestral-inspired score.",
  },
  "star-fox": {
    publisher: "Nintendo",
    year: 1993,
    genres: "Rail Shooter",
    tags: ["SNES", "Emulator", "Shooter", "Action"],
    description: "Star Fox helped define 3D on the SNES with its Super FX visuals, branching routes, and arcade-style space combat.",
  },
  "street-fighter-ii": {
    publisher: "Capcom",
    year: 1992,
    genres: "Fighting",
    tags: ["SNES", "Emulator", "Fighting"],
    description: "Street Fighter II is the genre-defining arcade fighter that brought special moves, matchups, and tournament play into the home.",
  },
  "street-fighter-ii-turbo": {
    publisher: "Capcom",
    year: 1993,
    genres: "Fighting",
    tags: ["SNES", "Emulator", "Fighting"],
    description: "Street Fighter II Turbo raises the speed and intensity, giving the SNES one of its most enduring competitive fighters.",
  },
  "super-castlevania-iv": {
    publisher: "Konami",
    year: 1991,
    genres: "Platformer / Action",
    tags: ["SNES", "Emulator", "Platformer", "Action"],
    description: "Super Castlevania IV reimagines the original game with flexible whip control, dramatic music, and atmospheric stage design.",
  },
  "super-mario-all-stars": {
    publisher: "Nintendo",
    year: 1993,
    genres: "Platformer",
    tags: ["SNES", "Emulator", "Platformer"],
    description: "Super Mario All-Stars remasters Mario's NES classics on SNES with upgraded visuals, audio, and save support.",
  },
  "super-mario-kart": {
    publisher: "Nintendo",
    year: 1992,
    genres: "Racing",
    tags: ["SNES", "Emulator", "Racing"],
    description: "Super Mario Kart launched the kart racer blueprint with Mode 7 tracks, drifting, and character-based multiplayer chaos.",
  },
  "super-mario-rpg-legend-of-the-seven-stars": {
    publisher: "Nintendo",
    year: 1996,
    genres: "RPG",
    tags: ["SNES", "Emulator", "RPG"],
    description: "Super Mario RPG merges Mario platforming charm with turn-based battles, timed hits, and an adventurous crossover tone.",
  },
  "super-mario-world": {
    publisher: "Nintendo",
    year: 1991,
    genres: "Platformer",
    tags: ["SNES", "Emulator", "Platformer"],
    description: "Super Mario World is one of Nintendo's defining platformers, introducing Yoshi and a tightly designed overworld full of secrets.",
  },
  "super-punch-out": {
    publisher: "Nintendo",
    year: 1994,
    genres: "Sports / Fighting",
    tags: ["SNES", "Emulator", "Sports", "Fighting"],
    description: "Super Punch-Out!! is a fast pattern-based boxing game built around reading opponents and landing perfectly timed counters.",
  },
  "super-street-fighter-ii": {
    publisher: "Capcom",
    year: 1994,
    genres: "Fighting",
    tags: ["SNES", "Emulator", "Fighting"],
    description: "Super Street Fighter II expands the roster, smooths out balance, and pushes the SNES to host a bigger arcade conversion.",
  },
  "teenage-mutant-ninja-turtles-iv-turtles-in-time": {
    publisher: "Konami",
    year: 1992,
    genres: "Beat 'em up",
    tags: ["SNES", "Emulator", "Beat 'em Up", "Action"],
    description: "TMNT IV: Turtles in Time is a standout co-op brawler with sharp controls, time-hopping stages, and arcade energy throughout.",
  },
  "the-legend-of-zelda-a-link-to-the-past": {
    publisher: "Nintendo",
    year: 1992,
    genres: "Action Adventure",
    tags: ["SNES", "Emulator", "Adventure", "Action"],
    description: "The Legend of Zelda: A Link to the Past is a foundational action adventure with intricate dungeons, layered world design, and lasting influence.",
  },
  "top-gear": {
    publisher: "Kemco",
    year: 1992,
    genres: "Racing",
    tags: ["SNES", "Emulator", "Racing"],
    description: "Top Gear is a fast arcade racer remembered for smooth split-screen play, nitro strategy, and an iconic soundtrack.",
  },
  "x-men-mutant-apocalypse": {
    publisher: "Capcom",
    year: 1994,
    genres: "Platformer / Action",
    tags: ["SNES", "Emulator", "Platformer", "Action"],
    description: "X-Men: Mutant Apocalypse blends character-specific stages with Capcom action design and comic-book boss fights.",
  },
};

function loadGames() {
  return JSON.parse(fs.readFileSync(GAMES_JSON, "utf8"));
}

function saveGames(games) {
  fs.writeFileSync(GAMES_JSON, JSON.stringify(games, null, 2) + "\n", "utf8");
}

function humanizeFolder(folderName) {
  return folderName
    .split("-")
    .map(part => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(" ");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function findGameFile(folderDir) {
  const candidates = fs
    .readdirSync(folderDir)
    .filter(name => /\.(sfc|smc|zip|gba|gb|gbc|nes|gen|bin|iso|rom)$/i.test(name));
  if (!candidates.length) return null;
  candidates.sort((a, b) => a.localeCompare(b));
  return candidates[0];
}

function findIcon(folderDir, folderName) {
  const preferredExts = ["png", "jpeg", "jpg", "webp", "svg", "gif", "avif"];
  const files = fs.readdirSync(folderDir);
  const byLowerName = new Map(files.map(name => [name.toLowerCase(), name]));

  for (const ext of preferredExts) {
    const actualName = byLowerName.get(`icon.${ext}`);
    if (actualName) {
      return `../../file/emu/${folderName}/${actualName}`;
    }
  }
  return "../../placeholder.png";
}

function defaultTags(title) {
  const tags = ["SNES", "Emulator"];
  if (/mario|kirby|donkey kong|castlevania|mega man|aladdin|lion king/i.test(title)) tags.push("Platformer");
  if (/zelda|gaia|mana|earthbound|chrono|lufia|ogre|rpg/i.test(title)) tags.push("RPG");
  if (/fighter|kombat|punch/i.test(title)) tags.push("Fighting");
  if (/kart|racing|f-zero|top gear|rock n/i.test(title)) tags.push("Racing");
  if (/contra|x-men|batman|star fox|turtles/i.test(title)) tags.push("Action");
  return [...new Set(tags)];
}

function descriptionFor(title) {
  return `${title} is a Super Nintendo release playable in the browser with EmulatorJS support.`;
}

function metaFor(folderName, title, fallback = {}) {
  const override = META_BY_FOLDER[folderName] || {};
  return {
    publisher: override.publisher || fallback.publisher || "Nintendo",
    year: override.year || fallback.year || 1990,
    genres: override.genres || fallback.genres || "Platformer",
    tags: override.tags || defaultTags(title),
    description: override.description || descriptionFor(title),
  };
}

function cleanGames(games) {
  for (const item of games) {
    delete item.description;
    delete item.releaseDate;

    const broadTags = SECTION_TAGS[item.section];
    if (broadTags) {
      item.tags = [...broadTags];
    } else {
      delete item.tags;
    }

    if (item.section === "emulators" && item.folder) {
      const folderName = item.folder.replace(/^emulators\//, "");
      const meta = metaFor(folderName, item.name, item);
      item.publisher = meta.publisher;
      item.year = meta.year;
      item.genres = meta.genres;
    }
  }

  return games;
}

function renderRuntimePage({ romFile }) {
  return `<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                background: #000;
            }
            body > div,
            #game {
                width: 100%;
                height: 100%;
                max-width: 100%;
            }
        </style>
    </head>
    <body>
        <div style="width:100%;height:100%;max-width:100%">
            <div id="game"></div>
        </div>
        <script>
            EJS_player = "#game";
            EJS_core = "snes";
            EJS_color = "#5a0f1b";
            EJS_startOnLoaded = true;
            EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";
            EJS_gameUrl = ${JSON.stringify(romFile)};
        </script>
        <script src="https://cdn.emulatorjs.org/stable/data/loader.js"></script>
    </body>
</html>`;
}

function renderGamePage({
  title,
  folder,
  frameBase,
  iconPath,
  publisher,
  year,
  subtitle,
  description,
  tags,
  systemLabel,
  copyrightHolder,
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(title)} &mdash; Korbeli's Virtual Arcade</title>
    <link rel="icon" type="image/x-icon" href="../../icon.ico">
    <link rel="stylesheet" href="../../style.css">
    <link rel="stylesheet" href="../../game.css">
    <style>.game-stage { aspect-ratio: 4 / 3; }</style>
</head>
<body>
<div class="page">
  <div class="topbar">
    <a href="../../" class="topbar-left">
      <img src="../../icon.png" class="topbar-icon">
      <div class="topbar-title">Korbeli's Virtual Arcade</div>
    </a>
    <div class="topbar-right" id="topbar-right"></div>
  </div>
  <div class="game-header">
    <div class="game-header-left">
      <img src="${escapeHtml(iconPath)}" class="game-icon">
      <div>
        <div class="game-meta">${escapeHtml(publisher)} &middot; ${escapeHtml(systemLabel)} &middot; ${escapeHtml(String(year))}</div>
        <div class="game-title">${escapeHtml(title)}</div>
        <div class="game-subtitle">${escapeHtml(subtitle)}</div>
      </div>
    </div>
  </div>
  <div class="game-desc">${escapeHtml(description)}</div>
  <div class="game-tags">
    ${tags.map(tag => `<span class="game-tag">${escapeHtml(tag)}</span>`).join("")}
  </div>
  <div class="emu-controls">
    <button class="emu-controls-toggle" onclick="toggleAccordion('kbd-body', this)">
      Keyboard Controls <span class="toggle-arrow">&#9660;</span>
    </button>
    <div class="emu-controls-body" id="kbd-body">
      <div><span class="emu-key">Arrow Keys</span> D-Pad</div>
      <div><span class="emu-key">Z</span> A Button</div>
      <div><span class="emu-key">X</span> B Button</div>
      <div><span class="emu-key">A</span> Y Button</div>
      <div><span class="emu-key">S</span> X Button</div>
      <div><span class="emu-key">Q</span> L Trigger</div>
      <div><span class="emu-key">W</span> R Trigger</div>
      <div><span class="emu-key">Enter</span> Start</div>
      <div><span class="emu-key">Shift</span> Select</div>
      <div style="column-span:all;margin-top:8px;font-size:11px;letter-spacing:1px;text-transform:uppercase;opacity:0.6;">
        Open the EmulatorJS menu (bottom of screen) to remap controls, manage save states, and more.
      </div>
    </div>
  </div>
  <div class="game-wrap">
    <div class="game-frame">
      <div class="game-stage">
        <div id="loadOverlay" class="game-overlay" onclick="activateGame()">
          <div class="overlay-content">
            <button>&#9654; Click to Play</button>
            <p>EmulatorJS &middot; ${escapeHtml(systemLabel)} Core</p>
          </div>
        </div>
        <iframe id="gameFrame" allowfullscreen allow="autoplay; fullscreen" style="width:100%;height:100%;border:none;display:block;"></iframe>
      </div>
    </div>
  </div>
  <div class="cheat-menu cheat-menu--locked" id="cheat-menu">
    <button class="cheat-toggle" onclick="toggleAccordion('cheat-body', this)" title="Start the game first to use cheats">
      <span>&#127918; Game Genie Codes</span>
      <span class="cheat-toggle-right"><span class="toggle-arrow">&#9660;</span></span>
    </button>
    <div class="cheat-body" id="cheat-body">
      <div class="cheat-copy-toast" id="cheat-copy-toast" aria-live="polite"></div>
      <div class="cheat-grid" id="cheat-grid"></div>
    </div>
  </div>
  <div class="game-footer">
    <span>Last updated: <strong>April 7, 2026</strong></span>
    <span>&copy; ${escapeHtml(copyrightHolder)}. All rights reserved.</span>
  </div>
  <footer class="footer">
    <img src="../../logoblack.png" class="footer-logo">
    <p>All games belong to their respective creators.</p>
  </footer>
</div>
<script>
const GAME_NAME   = ${JSON.stringify(title)};
const GAME_FOLDER = ${JSON.stringify(folder)};
const FRAME_BASE  = ${JSON.stringify(frameBase)};
const IS_POPOUT   = window.opener !== null;
const ARCADE_ROOT = window.location.origin + '/korbelisvirtualarcade/';
const SECTIONS = [
  { key: 'games', label: 'Games' },
  { key: 'emulators', label: 'Emulators' },
  { key: 'music', label: 'Music' },
];
async function buildNav() {
  let items;
  try { items = await (await fetch('../../games.json')).json(); } catch(e) { return; }
  const grouped = {};
  SECTIONS.forEach(s => grouped[s.key] = []);
  items.forEach(item => { if (grouped[item.section]) grouped[item.section].push(item); });
  const navEl = document.getElementById('topbar-right');
  SECTIONS.forEach(section => {
    const sectionItems = grouped[section.key];
    if (!sectionItems.length) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'dropdown';
    const btn = document.createElement('button');
    btn.className = 'dropbtn';
    btn.textContent = section.label + ' ' + '\\u25BE';
    btn.onclick = () => { window.location.href = ARCADE_ROOT + '#' + section.key + '-section'; };
    const content = document.createElement('div');
    content.className = 'dropdown-content';
    sectionItems.forEach(item => {
      const a = document.createElement('a');
      a.textContent = item.name;
      a.addEventListener('click', e => {
        e.preventDefault();
        window.location.href = IS_POPOUT ? ARCADE_ROOT : '../../' + item.folder + '/';
      });
      content.appendChild(a);
    });
    wrapper.appendChild(btn);
    wrapper.appendChild(content);
    navEl.appendChild(wrapper);
  });
}
buildNav();
function toggleAccordion(bodyId, btn) {
  const body = document.getElementById(bodyId);
  body.classList.toggle('open');
  const arrow = btn.querySelector('.toggle-arrow');
  if (arrow) arrow.style.transform = body.classList.contains('open') ? 'rotate(180deg)' : '';
}
function buildCheatGrid() {
  const grid = document.getElementById('cheat-grid');
  if (grid) grid.innerHTML = '<div class="cheat-copy-toast cheat-copy-toast--visible">No cheats configured for this game yet.</div>';
}
buildCheatGrid();
let gameActivated = false;
function buildFrameSrc() { return FRAME_BASE; }
function trackPlay() {
  try {
    let recent = JSON.parse(localStorage.getItem('kva_recent') || '[]');
    recent = recent.filter(r => r.folder !== GAME_FOLDER);
    recent.unshift({ name: GAME_NAME, folder: GAME_FOLDER, ts: Date.now() });
    localStorage.setItem('kva_recent', JSON.stringify(recent.slice(0, 8)));
  } catch(e) {}
}
function unlockCheatMenu() { document.getElementById('cheat-menu').classList.remove('cheat-menu--locked'); }
function activateGame() {
  document.getElementById('loadOverlay').style.display = 'none';
  const frame = document.getElementById('gameFrame');
  if (!gameActivated) { gameActivated = true; trackPlay(); unlockCheatMenu(); }
  frame.src = buildFrameSrc();
}
</script>
<script src="../../game.js"></script>
</body>
</html>`;
}

function main() {
  const games = cleanGames(loadGames());
  const folders = fs
    .readdirSync(FILE_EMU_ROOT, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name);
  const byFolder = new Map(games.map(item => [item.folder, item]));
  let count = 0;

  for (const folderName of folders) {
    const folderDir = path.join(FILE_EMU_ROOT, folderName);
    const gameFile = findGameFile(folderDir);
    if (!gameFile) continue;

    const item = byFolder.get(`emulators/${folderName}`);
    const title = item?.name || humanizeFolder(folderName);
    const meta = metaFor(folderName, title, item || {});
    const systemLabel = item?.system || "SNES";

    fs.mkdirSync(path.join(EMULATORS_ROOT, folderName), { recursive: true });
    fs.writeFileSync(
      path.join(folderDir, "index.html"),
      renderRuntimePage({ romFile: gameFile }),
      "utf8"
    );
    fs.writeFileSync(
      path.join(EMULATORS_ROOT, folderName, "index.html"),
      renderGamePage({
        title,
        folder: `emulators/${folderName}`,
        frameBase: `../../file/emu/${folderName}/index.html`,
        iconPath: findIcon(folderDir, folderName),
        publisher: meta.publisher,
        year: meta.year,
        subtitle: meta.genres,
        description: meta.description,
        tags: meta.tags,
        systemLabel,
        copyrightHolder: meta.publisher,
      }),
      "utf8"
    );
    count += 1;
  }

  saveGames(games);
  console.log(`Generated ${count} emulator pair(s).`);
}

main();

import { Element } from '../utils/Element.js';
import { Utility } from '../utils/Utility.js';
import { KeyController } from '../utils/KeyController.js';
import { Tooltip } from '../utils/Tooltip.js';
import { Notification } from '../utils/Notification.js';
import { UI } from './UI.js';
import { Game } from './Game.js';

import { BoxScene } from './scenes/BoxScene.js';
import { MapScene } from './scenes/MapScene.js';
import { PokemonScene } from './scenes/PokemonScene.js';
import { ShopScene } from './scenes/ShopScene.js';
import { MenuScene } from './scenes/MenuScene.js';
import { ProfileScene } from './scenes/ProfileScene.js';
import { DefeatScene } from './scenes/DefeatScene.js';
import { NewGameScene } from './scenes/NewGameScene.js';
import { TutorialScene } from './scenes/TutorialScene.js';
import { BanetteScene } from './scenes/BanetteScene.js';
import { FinalScene } from './scenes/FinalScene.js';

import { Player } from './core/Player.js';
import { Team } from './core/Team.js';
import { Box } from './core/Box.js';
import { Area } from './core/Area.js';
import { Shop } from './core/Shop.js';
import { TeamManager } from './core/TeamManager.js'

import { AssetManager } from '../utils/AssetManager.js'; 

export class Main {
	constructor(data, imageCache = {}, audioCache = {}) {
		this.lang = JSON.parse(window.localStorage.getItem("dataPokePath")).config.language; 
		this.showDamage = JSON.parse(window.localStorage.getItem("dataPokePath")).config.showDamage; 
		this.showRoute = JSON.parse(window.localStorage.getItem("dataPokePath")).config.showRoute ?? 0; 
		this.autoReset = JSON.parse(window.localStorage.getItem("dataPokePath")).config.autoReset ?? 0; 
		this.autoStop = JSON.parse(window.localStorage.getItem("dataPokePath")).config.autoStop ?? 0; 
		this.displayHealth = JSON.parse(window.localStorage.getItem("dataPokePath")).config.displayHealth ?? 0; 
		this.showTC = JSON.parse(window.localStorage.getItem("dataPokePath")).config.showTC ?? 0; 

		this.data = data;

		this.imageCache = imageCache || {};
		this.audioCache = audioCache || {};
		this.assets = new AssetManager(this.imageCache, this.audioCache);

		// SCENES
		this.scene = new Element(document.getElementById("screen"), { id: 'game-scene' }).element;
		this.UI = new UI(this);
		this.game = new Game(this);
		this.boxScene = new BoxScene(this);
		this.mapScene = new MapScene(this);
		this.pokemonScene = new PokemonScene(this);
		this.shopScene = new ShopScene(this);
		this.profileScene = new ProfileScene(this);
		this.menuScene = new MenuScene(this);
		this.defeatScene = new DefeatScene(this);
		this.newGameScene = new NewGameScene(this);
		this.tutorialScene = new TutorialScene(this);
		this.banetteScene = new BanetteScene(this);
		this.finalScene = new FinalScene(this);

		// CORE
		this.player = new Player(this, data.player);
		this.team = new Team(this, data.team);
		this.box = new Box(this, data.box);
		this.area = new Area(this, data.area);
		this.shop = new Shop(this, data.shop);
		this.teamManager = new TeamManager(this, data.teamManager);

		// MISC
		this.utility = new Utility();
		this.notification = new Notification();
		this.tooltip = new Tooltip(this);
		this.keys = new KeyController(this);

		this.load();
	}

	load() {
		this.UI.update();
		this.game.load();
		if (this.data.new) this.newGameScene.open();
		if (this.data.autoReset == undefined) this.data.autoReset = 0;
		if (this.data.showRoute == undefined) this.data.showRoute = 0;
		if (this.data.autoStop == undefined) this.data.autoStop = 0;
		if (this.data.displayHealth == undefined) this.data.displayHealth = 0;
		if (this.data.showTC == undefined) this.data.showTC = 0;

		setInterval(() => {
		    this.player.stats.timePlayed++;   
		}, 60000);
	}

	getImage(src) {
		return this.assets.getImage(src);
	}

	getSound(src) {
		return this.assets.getSound(src);
	}

	updateLanguage() {
		this.UI.update();
	}
}

function resize() {
	const BASE_WIDTH  = 1146;
	const BASE_HEIGHT = 624;

	const scale = Math.min(
	    window.innerWidth  / BASE_WIDTH,
	    window.innerHeight / BASE_HEIGHT
	);

	const root = document.getElementById("screen-root");
	root.style.transform = `scale(${scale})`;
}

window.addEventListener("resize", resize);
resize();
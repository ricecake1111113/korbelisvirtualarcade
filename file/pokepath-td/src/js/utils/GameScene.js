import { Element } from './Element.js';
import { playSound } from '../file/audio.js';

export class GameScene {
	constructor(width = 640, height = 500) {
		this.isOpen = false;
		this.width = width;
        this.height = height;

        this.background = document.createElement("div");
        this.background.className = "game-scene-background";

        this.window = new Element(this.background, { className: 'game-scene-window' }).element;
        this.window.style.width = `${width}px`;
        this.window.style.height = `${height}px`;

        this.header = new Element(this.window, { className: 'game-scene-header' }).element;
        this.title = new Element(this.header, { className: 'game-scene-title' }).element;
        this.closeButton = new Element(this.header, { className: 'game-scene-close-button', text: 'X' }).element;
        this.closeButton.addEventListener("click", () => this.close());

        this.container = new Element(this.window, { className: 'game-scene-container' }).element;
	}

	open(bs = false) {
        if (!this.isOpen) {
            playSound('open', 'ui')
        	this.isOpen = true;
       		document.getElementById('screen').appendChild(this.background);
        } 
    }

    close() {
        this.isOpen = false;
        this.background.remove();
        playSound('close', 'ui');
    }
}
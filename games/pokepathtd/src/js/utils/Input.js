import { Element } from './Element.js';
import { playSound } from '../file/audio.js'; 

export class Input {
    constructor(container, type, options = {}) {
        this.container = container;
        this.type = type;
        this.options = options;

        this.render();
    }

    render() {
        this.input = new Element(this.container, {}).element;
        if (this.type === 'text') this.renderTypeText();
    }

    renderTypeText() {
        this.value = document.createElement('input');
        //this.value.className = 'input-value';
        this.value.setAttribute("type", "text");

        if (this.options.className) this.value.className = this.options.className;
        if (this.options.maxlength) this.value.setAttribute("maxlength", this.options.maxlength);
        if (this.options.placeholder)  this.value.placeholder = this.options.placeholder;
        if (this.options.readonly) this.value.setAttribute("readonly", true);

        this.input.appendChild(this.value);

        this.value.addEventListener('keydown', () => {
            const keySound = Math.random() < 0.5 ? 'key0' : 'key1';
            playSound(keySound, 'ui');
        });

        this.value.addEventListener('input', () => {
            if (this.options.cb) this.options.cb(); 
        });
    }
}
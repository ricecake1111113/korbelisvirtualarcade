export class Element {
	constructor(container, options = {}) {
        this.container = container;
        this.options = options;
      	this.element = this.create();
    }

    create() {
        const element = document.createElement('div');

        if (this.options.className) element.className = this.options.className;
        if (this.options.id) element.id = this.options.id;
        if (this.options.text) element.innerText = this.options.text;
        if (this.options.image) element.style.backgroundImage = `url("${this.options.image}")`;

        this.container.appendChild(element);
        return element;
    }
}

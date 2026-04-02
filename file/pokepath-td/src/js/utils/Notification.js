import { Element } from './Element.js'

export class Notification {
    display(message) {
        if (this.notification) this.hide();
        this.notification = new Element(document.getElementById('screen'), { className: 'notification-container' }).element; 
        this.notification.innerHTML = message;
    }

    hide() {
        this.notification.remove();
    }
}

import { playSound } from '../file/audio.js';

export class Tooltip {
    constructor(main) {
        this.main = main;

        this.tooltip = document.createElement("div");
        this.tooltip.className = "tooltip";

        document.body.appendChild(this.tooltip);

        document.addEventListener("mousemove", (e) => {
            const tooltipRect = this.tooltip.getBoundingClientRect();

            // Centrar el tooltip en el cursor
            let left = e.pageX + 10 - tooltipRect.width / 2;
            let top = e.pageY - tooltipRect.height - 20;

            // Evitar que se salga de la pantalla
            if (left < 0) left = 0;
            if (top < 0) top = 0;
            if (left + tooltipRect.width > window.innerWidth)
                left = window.innerWidth - tooltipRect.width;
            if (top + tooltipRect.height > window.innerHeight + window.scrollY)
                top = window.innerHeight + window.scrollY - tooltipRect.height;

            this.tooltip.style.left = `${left}px`;
            this.tooltip.style.top = `${top}px`;
        });
    }

    bindToAchievement(element, achievement) {
        element.addEventListener("mouseenter", () => {
            this.showAchievement(achievement);
        });

        element.addEventListener("mouseleave", () => {
            this.hide();
        });
    }

    showAchievement(achievement) {
        playSound('hover4', 'ui')
        const desc = achievement.description[this.main.lang]

        this.tooltip.innerHTML = `
            <div class="tooltip-content">
                <span class="tooltip-achievement">${desc.toUpperCase()}</span>  
            </div>
        `;
        this.tooltip.style.display = "block";
    }

    hide() {
        this.tooltip.style.display = "none";
    }
}

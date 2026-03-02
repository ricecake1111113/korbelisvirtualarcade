import { Init } from './game/Init.js';
import { loadData } from './file/data.js';

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('dragstart', event => event.preventDefault());
    const data = loadData();
    new Init(data);
});


import { eggListData } from '../game/data/pokemonData.js';
import { achievementData } from '../game/data/achievementData.js';

export const loadData = () => {
    const dataPokePath = window.localStorage.getItem("dataPokePath");
    if (!dataPokePath) {
        let newData = {
            config: {
                scale: 1,
                language: 0,
                audio: {
                    master: 10,
                    music: 4,
                    ui: 10,
                    effects: 10,
                },
                showDamage: true,
                showRoute: 0,
                autoReset: 0,
                autoStop: 0,
                displayHealth: 0,
                showTC: 0
            },  
            save: {
                new: true,
                player: {
                    name: 'Player',
                    portrait: 0,
                    gold: 50,
                    health: [14, 14, 14, 14, 14, 14, 14, 14, 14],
                    records: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    stars: 0,
                    extraGold: 0,
                    teamSlots: 6,
                    achievements: achievementData,
                    achievementProgress: {
                        delibirdCount: 0,
                        evolutionCount: 1,
                        heartRestore: 0,
                        stolenGold: 0,
                        count: 0
                    },
                    stats: {
                        pokemonOwned: 1,
                        highestPokemonLevel: 1,
                        totalPokemonLevel: 1,
                        totalGold: 50,
                        wavesCompleted: 0,
                        highestHit: 0,
                        defeatedEnemies: 0,
                        defeatedSpecies: new Set(),
                        appliedStuns: 0,
                        appliedSlows: 0,
                        appliedBurns: 0,
                        appliedPoisons: 0,
                        appliedCurses: 0,
                        resets: 0,
                        timePlayed: 0,
                    }
                },
                team: [],
                box: [],
                area: {
                    routeNumber: 0,
                    routeWaves: [1, 1, 1, 1, 1, 1, 1, 1, 1]
                },
                shop: {
                    eggPrice: 10,
                    eggList: eggListData,
                },
                teamManager: [[], [], [], [], [], [], [], [], []]
            }
        };
        window.localStorage.setItem("dataPokePath", JSON.stringify(newData));
        return newData;
    }
    return JSON.parse(dataPokePath); 
}

export const saveData = (player, team, box, area, shop, teamManager) => {
    const dataPokePath = JSON.parse(window.localStorage.getItem("dataPokePath"));
    dataPokePath.save = {
        new: false,
        player: player.getSaveData(),
        team: team.pokemon.map(pkmn => pkmn.getOriginalData()),
        box: box.pokemon.map(pkmn => pkmn.getOriginalData()),
        area: area.getSaveData(),
        shop: shop.getSaveData(),
        teamManager: teamManager.getSaveData(),
    };

    window.localStorage.setItem("dataPokePath", JSON.stringify(dataPokePath));
}

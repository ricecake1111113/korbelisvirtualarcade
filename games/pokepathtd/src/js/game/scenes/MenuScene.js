import { GameScene } from '../../utils/GameScene.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { playSound, setVolume } from '../../file/audio.js';
import { Input } from '../../utils/Input.js';

const OPTION = {
	language: ['English', 'Español', 'Français', 'Português', 'Italiano', 'Deutsch', '日本語', '한국어'],
 	audio: Array.from({ length: 21 }, (_, i) => (i * 5).toString()),
 	reset: [0, 1, 2]
}

const CREDITS = {
	developer: {
		label: ['Developer', 'Desarrollador', 'Développeur', 'Desenvolvedor', 'Sviluppatore', 'Entwickler', '開発者', '개발자'],
		content: '<a href="https://x.com/khydra98" target="_blank" class="link-red">KHYDRA</a>'
	},
	testers: {
		label: ['Testers', 'Testers', 'Testeurs', 'Testadores', 'Tester', 'Tester', 'テスター', '테스터'],
		content: '<a href="https://x.com/cuarzomyr" target="_blank" class="link-red">KHYTRAYER</a> & SINGA'
	},
	assets: {
		title: ['Assets', 'Recursos', 'Ressources', 'Recursos', 'Risorse', 'Assets', 'アセット', '자산'],
		label: {
			0: ['Sprites', 'Sprites', 'Sprites', 'Sprites', 'Sprites', 'Sprites', 'スプライト', '스프라이트'],
			1: ['Tileset', 'Tileset', 'Tileset', 'Tileset', 'Tileset', 'Tileset', 'タイルセット', '타일셋'],
			2: ['Projectiles', 'Proyectiles', 'Projectiles', 'Projéteis', 'Proiettili', 'Projektile', '弾', '투사체'],
			3: ['Music', 'Música', 'Musique', 'Música', 'Musica', 'Musik', '音楽', '음악'],
			4: ['Icons (menu)', 'Iconos (menú)', 'Icônes (menu)', 'Ícones (menu)', 'Icone (menu)', 'Symbole (Menü)', 'アイコン（メニュー）', '아이콘(메뉴)'],
			5: ['Icons (flags)', 'Iconos (banderas)', 'Icônes (drapeaux)', 'Ícones (bandeiras)', 'Icone (bandiere)', 'Symbole (Flaggen)', 'アイコン（旗）', '아이콘(깃발)'],
		},
		content: {
			0: '<a href="https://sprites.pmdcollab.org/" target="_blank" class="link-red">PMD COLLAB</a>',
			1: '<a href="https://www.deviantart.com/ozotwo/art/Pokemon-Tileset-Fire-Red-Leaf-Green-Outdoors-C-446156842" target="_blank" class="link-red">OZOTWO</a>',
			2: '<a href="https://bdragon1727.itch.io/free-effect-bullet-impact-explosion-32x32" target="_blank" class="link-red">BDRAGON1727</a>',
			3: '<a href="https://downloads.khinsider.com/game-soundtracks/album/pokemon-firered-leafgreen-music-super-complete" target="_blank" class="link-red">MEDIA FACTORY</a>',
			4: '<a href="https://www.flaticon.com/authors/kiranshastry/solid?author_id=257&type=standard" target="_blank" class="link-red">KIRANSHASTRY</a>',
			5: '<a href="https://www.flaticon.com/authors/freepik" target="_blank" class="link-red">FREEPIK</a>',
		}
	},
	disclaimer: [
		`
		This is a non-profit fangame created by a single person, and it is not affiliated with, sponsored by, or approved by Nintendo, Game Freak, or The Pokémon Company. <br><br>
		All characters, items, sprites, music, and other materials related to Pokémon are the property of their respective owners: © Nintendo, Game Freak, Creatures Inc.`,
		`
		Este es un juego fangame sin fines de lucro creado por una sola persona, y no está afiliado, patrocinado ni aprobado por Nintendo, Game Freak o The Pokémon Company. <br><br> 
		Todos los personajes, objetos, sprites, música y demás materiales relacionados con Pokémon son propiedad de sus respectivos dueños: © Nintendo, Game Freak, Creatures Inc.`,
		`
		Ceci est un fangame à but non lucratif créé par une seule personne, et il n’est affilié, parrainé ni approuvé par Nintendo, Game Freak ou The Pokémon Company. <br><br>
		Tous les personnages, objets, sprites, musiques et autres éléments liés à Pokémon sont la propriété de leurs détenteurs respectifs : © Nintendo, Game Freak, Creatures Inc.`,
		`
		Este é um fangame sem fins lucrativos criado por uma única pessoa, e não é afiliado, patrocinado ou aprovado pela Nintendo, Game Freak ou The Pokémon Company. <br><br>
		Todos os personagens, itens, sprites, músicas e outros materiais relacionados a Pokémon são propriedade de seus respectivos donos: © Nintendo, Game Freak, Creatures Inc.`,
		`
		Questo è un fangame no-profit creato da una sola persona, e non è affiliato, sponsorizzato o approvato da Nintendo, Game Freak o The Pokémon Company. <br><br>
		Tutti i personaggi, oggetti, sprite, musiche e altri materiali relativi a Pokémon sono di proprietà dei rispettivi proprietari: © Nintendo, Game Freak, Creatures Inc.`,
		`
		Dies ist ein Non-Profit-Fangame, erstellt von einer einzelnen Person, und es ist weder mit Nintendo, Game Freak noch The Pokémon Company verbunden, gesponsert oder genehmigt. <br><br>
		Alle Charaktere, Gegenstände, Sprites, Musik und andere Pokémon-bezogene Materialien sind Eigentum ihrer jeweiligen Besitzer: © Nintendo, Game Freak, Creatures Inc.`,
		`
		これは個人が作成した非営利のファンゲームであり、Nintendo、Game Freak、またはポケモン社とは提携しておらず、承認もされていません。<br><br>
		ポケモンに関連するすべてのキャラクター、アイテム、スプライト、音楽、その他の素材は、それぞれの所有者に帰属します: © Nintendo, Game Freak, Creatures Inc.`,
		`
		이것은 개인이 만든 비영리 팬게임이며, Nintendo, Game Freak 또는 포켓몬 컴퍼니와 제휴하거나 후원받거나 승인받은 것이 아닙니다. <br><br>
		포켓몬 관련 모든 캐릭터, 아이템, 스프라이트, 음악 및 기타 자료는 각 소유자에게 속합니다: © Nintendo, Game Freak, Creatures Inc.`,
	],
}

const SHORTCUTS = {
	key: {
		0: ['0–9', '0–9', '0–9', '0–9', '0–9', '0–9', '0-9', '0–9'],
		1: ['Q', 'Q', 'A', 'Q', 'Q', 'Q', 'Q', 'Q'],
		2: ['W', 'W', 'Z', 'W', 'W', 'W', 'W', 'W'], 
		3: ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
		4: ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'],
		5: ['Z', 'Z', 'W', 'Z', 'Z', 'Z', 'Z', 'Z'],
		6: ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
		7: ['Esc', 'Esc', 'Échap', 'Esc', 'Esc', 'Esc', 'Esc', 'Esc', 'Esc'],
		8: ['Space', 'Espacio', 'Espace', 'Espaço', 'Spazio', 'Leertaste', 'スペース', '스페이스', '空格']
	},
	do: {
		0: [
			'Place Pokémon', 'Colocar Pokémon', 'Placer un Pokémon', 'Colocar Pokémon',
			'Posiziona Pokémon', 'Pokémon setzen', 'ポケモンを配置', '포켓몬 배치', '放置宝可梦',
		],
		1: [
			'Profile', 'Perfil', 'Profil', 'Perfil', 'Profilo', 'Profil', 'プロフィール', '프로필', '个人资料',
		],
		2: [
			'Map', 'Mapa', 'Carte', 'Mapa', 'Mappa', 'Karte', 'マップ', '맵', '地图',
		],
		3: [
			'Box', 'Caja', 'Boîte', 'Caixa', 'Box', 'Box', 'ボックス', '박스', '箱子',
		],
		4: [
			'Shop', 'Tienda', 'Boutique', 'Loja', 'Negozio', 'Laden', 'ショップ', '상점', '商店',
		],
		5: [
			'Graphic Mode', 'Modo gráfico', 'Mode graphique', 'Modo gráfico', 'Modalità grafica', 'Grafikmodus', 'グラフィックモード', '그래픽 모드', '图形模式',
		],
		6: [
			"Show ranges", "Mostrar rangos", "Afficher les portées", "Mostrar intervalos", "Mostra intervalli",  "Bereiche anzeigen", "範囲を表示", "범위 표시"
		],
		7: [
			'Close window', 'Cerrar ventana', 'Fermer la fenêtre', 'Fechar janela', 'Chiudi finestra', 'Schließen', 'ウィンドウを閉じる', '창 닫기', '关闭窗口',
		],
		8: [
			'Next wave', 'Siguiente oleada', 'Vague suivante', 'Próxima onda', 'Ondata successiva', 'Nächste Welle', '次のウェーブ', '다음 웨이브', '下一波',
		]
	}
}

const audioKeys = ['master', 'music', 'ui', 'effects'];

export class MenuScene extends GameScene {
	constructor(main) {
		super();
		this.main = main;
		this.render();

		this.deleteScene = new DeleteData(this.main);
		this.importScene = new ImportData(this.main);
		this.exportScene = new ExportData(this.main);
	}

	getConfig() {
        return JSON.parse(window.localStorage.getItem("dataPokePath")).config;
    }

    saveConfig(newConfig) {
        let dataPokePath = JSON.parse(window.localStorage.getItem("dataPokePath"));
        dataPokePath.config = newConfig;
        window.localStorage.setItem("dataPokePath", JSON.stringify(dataPokePath));
    }

	render() {
		this.title.innerHTML = text.menu.title[this.main.lang].toUpperCase();
		this.menuContainer = new Element(this.container, { className: 'menu-scene-container' }).element;

		// SETTINGS
		this.sectionSettings = new Element(this.menuContainer, { className: 'menu-scene-section' }).element;
		this.titleSettings = new Element(this.sectionSettings, { className: 'menu-scene-section-title' }).element;
		this.contentSettings = new Element(this.sectionSettings, { className: 'menu-scene-section-content' }).element;

		this.languageRow = new Element(this.contentSettings, { className: 'menu-scene-row' }).element;
		this.languageRow.label = new Element(this.languageRow, { className: 'menu-scene-label' }).element;
		this.languageRow.prev = new Element(this.languageRow, { className: 'menu-scene-arrow', text: '<' }).element;
		this.languageRow.value = new Element(this.languageRow, { className: 'menu-scene-value' }).element;
		this.languageRow.next = new Element(this.languageRow, { className: 'menu-scene-arrow', text: '>' }).element;

		this.languageRow.prev.addEventListener('click', () => { this.updateLanguage(-1) })
		this.languageRow.next.addEventListener('click', () => { this.updateLanguage(1) })
		this.languageRow.prev.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		this.languageRow.next.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })

		this.damageRow = new Element(this.contentSettings, { className: 'menu-scene-row' }).element;
		this.damageRow.label = new Element(this.damageRow, { className: 'menu-scene-label' }).element;
		this.damageRow.prev = new Element(this.damageRow, { className: 'menu-scene-arrow', text: '<' }).element;
		this.damageRow.value = new Element(this.damageRow, { className: 'menu-scene-value' }).element;
		this.damageRow.next = new Element(this.damageRow, { className: 'menu-scene-arrow', text: '>' }).element;

		this.damageRow.prev.addEventListener('click', () => { this.updateShowDamage() })
		this.damageRow.next.addEventListener('click', () => { this.updateShowDamage() })
		this.damageRow.prev.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		this.damageRow.next.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		
		this.showRouteRow = new Element(this.contentSettings, { className: 'menu-scene-row' }).element;
		this.showRouteRow.label = new Element(this.showRouteRow, { className: 'menu-scene-label' }).element;
		this.showRouteRow.prev = new Element(this.showRouteRow, { className: 'menu-scene-arrow', text: '<' }).element;
		this.showRouteRow.value = new Element(this.showRouteRow, { className: 'menu-scene-value' }).element;
		this.showRouteRow.next = new Element(this.showRouteRow, { className: 'menu-scene-arrow', text: '>' }).element;

		this.showRouteRow.prev.addEventListener('click', () => { this.updateShowRoute() })
		this.showRouteRow.next.addEventListener('click', () => { this.updateShowRoute() })
		this.showRouteRow.prev.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		this.showRouteRow.next.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })

		this.showTCRow = new Element(this.contentSettings, { className: 'menu-scene-row' }).element;
		this.showTCRow.label = new Element(this.showTCRow, { className: 'menu-scene-label' }).element;
		this.showTCRow.prev = new Element(this.showTCRow, { className: 'menu-scene-arrow', text: '<' }).element;
		this.showTCRow.value = new Element(this.showTCRow, { className: 'menu-scene-value' }).element;
		this.showTCRow.next = new Element(this.showTCRow, { className: 'menu-scene-arrow', text: '>' }).element;

		this.showTCRow.prev.addEventListener('click', () => { this.updateShowTC() })
		this.showTCRow.next.addEventListener('click', () => { this.updateShowTC() })
		this.showTCRow.prev.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		this.showTCRow.next.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })

		this.autoStopRow = new Element(this.contentSettings, { className: 'menu-scene-row' }).element;
		this.autoStopRow.label = new Element(this.autoStopRow, { className: 'menu-scene-label' }).element;
		this.autoStopRow.prev = new Element(this.autoStopRow, { className: 'menu-scene-arrow', text: '<' }).element;
		this.autoStopRow.value = new Element(this.autoStopRow, { className: 'menu-scene-value' }).element;
		this.autoStopRow.next = new Element(this.autoStopRow, { className: 'menu-scene-arrow', text: '>' }).element;

		this.autoStopRow.prev.addEventListener('click', () => { this.updateAutoStop() })
		this.autoStopRow.next.addEventListener('click', () => { this.updateAutoStop() })
		this.autoStopRow.prev.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		this.autoStopRow.next.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })

		this.autoResetRow = new Element(this.contentSettings, { className: 'menu-scene-row' }).element;
		this.autoResetRow.label = new Element(this.autoResetRow, { className: 'menu-scene-label' }).element;
		this.autoResetRow.prev = new Element(this.autoResetRow, { className: 'menu-scene-arrow', text: '<' }).element;
		this.autoResetRow.value = new Element(this.autoResetRow, { className: 'menu-scene-value' }).element;
		this.autoResetRow.next = new Element(this.autoResetRow, { className: 'menu-scene-arrow', text: '>' }).element;

		this.autoResetRow.prev.addEventListener('click', () => { this.updateAutoReset(-1) })
		this.autoResetRow.next.addEventListener('click', () => { this.updateAutoReset(1) })
		this.autoResetRow.prev.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		this.autoResetRow.next.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })

		this.displayHealthRow = new Element(this.contentSettings, { className: 'menu-scene-row' }).element;
		this.displayHealthRow.label = new Element(this.displayHealthRow, { className: 'menu-scene-label' }).element;
		this.displayHealthRow.prev = new Element(this.displayHealthRow, { className: 'menu-scene-arrow', text: '<' }).element;
		this.displayHealthRow.value = new Element(this.displayHealthRow, { className: 'menu-scene-value' }).element;
		this.displayHealthRow.next = new Element(this.displayHealthRow, { className: 'menu-scene-arrow', text: '>' }).element;

		this.displayHealthRow.prev.addEventListener('click', () => { this.updateDisplayHealth(-1) })
		this.displayHealthRow.next.addEventListener('click', () => { this.updateDisplayHealth(1) })
		this.displayHealthRow.prev.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		this.displayHealthRow.next.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })

		this.audioRow = [];
	
		for (let i = 0; i < 4; i++) {
			this.audioRow[i] = new Element(this.contentSettings, { className: 'menu-scene-row' }).element;
			this.audioRow[i].label = new Element(this.audioRow[i], { className: 'menu-scene-label' }).element;
			this.audioRow[i].prev = new Element(this.audioRow[i], { className: 'menu-scene-arrow', text: '<' }).element;
			this.audioRow[i].value = new Element(this.audioRow[i], { className: 'menu-scene-value' }).element;
			this.audioRow[i].next = new Element(this.audioRow[i], { className: 'menu-scene-arrow', text: '>' }).element;

			this.audioRow[i].prev.addEventListener('click', () => {this.updateAudio(audioKeys[i], -1)})
			this.audioRow[i].next.addEventListener('click', () => {this.updateAudio(audioKeys[i], 1)})
			this.audioRow[i].prev.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
			this.audioRow[i].next.addEventListener('mouseenter', () => { playSound('hover1', 'ui') })
		}

		//SHORTCUTS
		this.sectionShortcuts = new Element(this.menuContainer, { className: 'menu-scene-section' }).element;
		this.titleShortcuts = new Element(this.sectionShortcuts, { className: 'menu-scene-section-title' }).element;
		this.contentShortcuts = new Element(this.sectionShortcuts, { className: 'menu-scene-section-content' }).element;

		this.shortcutRow = [];

		for (let i = 0; i < 9; i++) {
			this.shortcutRow[i] = new Element(this.contentShortcuts, { className: 'menu-scene-row' }).element;
			this.shortcutRow[i].label = new Element(this.shortcutRow[i], { className: 'menu-scene-label' }).element;
			this.shortcutRow[i].content = new Element(this.shortcutRow[i], { className: 'menu-scene-value-credits' }).element;
		}

		// CREDITS
		this.sectionCredits = new Element(this.menuContainer, { className: 'menu-scene-section' }).element;
		this.titleCredits = new Element(this.sectionCredits, { className: 'menu-scene-section-title' }).element;
		this.contentCredits = new Element(this.sectionCredits, { className: 'menu-scene-section-content' }).element;

		this.developer = new Element(this.contentCredits, { className: 'menu-scene-row' }).element;
		this.developer.label = new Element(this.developer, { className: 'menu-scene-label' }).element;
		this.developer.content = new Element(this.developer, { className: 'menu-scene-value-credits' }).element;
		this.developer.content.innerHTML = CREDITS.developer.content;

		this.testers = new Element(this.contentCredits, { className: 'menu-scene-row' }).element;
		this.testers.label = new Element(this.testers, { className: 'menu-scene-label' }).element;
		this.testers.content = new Element(this.testers, { className: 'menu-scene-value-credits' }).element;
		this.testers.content.innerHTML = CREDITS.testers.content;

		this.assetsList = [];

		for (let i = 0; i < 6; i++) {
			this.assetsList[i] = new Element(this.contentCredits, { className: 'menu-scene-row' }).element;
			this.assetsList[i].label = new Element(this.assetsList[i], { className: 'menu-scene-label' }).element;
			this.assetsList[i].content = new Element(this.assetsList[i], { className: 'menu-scene-value-credits' }).element;
			this.assetsList[i].content.innerHTML = CREDITS.assets.content[i];
		}

		this.disclaimer = new Element(this.contentCredits, { className: 'menu-credits-disclaimer' }).element;

		// DELETE DATA
		this.sectionData = new Element(this.menuContainer, { className: 'menu-scene-section' }).element;
		this.titleData = new Element(this.sectionData, { className: 'menu-scene-section-title' }).element;
		this.contentData = new Element(this.sectionData, { className: 'menu-scene-section-content' }).element;
		this.deleteData = new Element(this.contentData, { className: 'menu-scene-delete-data' }).element;

		this.deleteData.addEventListener('click', () => { 
			this.deleteScene.open() 
		})

		this.exportData = new Element(this.contentData, { className: 'menu-scene-export-data' }).element;
		this.exportData.addEventListener('click', () => { 
			this.exportScene.open() 
		})

		this.importData = new Element(this.contentData, { className: 'menu-scene-import-data' }).element;
		this.importData.addEventListener('click', () => { 
			this.importScene.open() 
		})

		this.deleteData.addEventListener('mouseenter', () => { playSound('hover2', 'ui') })
		this.exportData.addEventListener('mouseenter', () => { playSound('hover2', 'ui') })
		this.importData.addEventListener('mouseenter', () => { playSound('hover2', 'ui') })

		this.version = new Element(this.contentData, { className: 'menu-scene-version', text: `v 1.2.5` }).element;

		this.background.addEventListener('click', (e) => { if (e.target == this.background)this.close() })
	}

	update() {
		const dataPokePath = JSON.parse(window.localStorage.getItem("dataPokePath"));

		this.title.innerHTML = text.menu.title[this.main.lang].toUpperCase();
		this.titleSettings.innerHTML = text.menu.settings.title[this.main.lang].toUpperCase();
		this.titleCredits.innerHTML = text.menu.credits.title[this.main.lang].toUpperCase();
		this.titleShortcuts.innerHTML = text.menu.shortcuts.title[this.main.lang].toUpperCase();
		this.titleData.innerHTML = text.menu.data.title[this.main.lang].toUpperCase();

		//SETINGS

		this.languageRow.label.innerText = text.menu.settings.language[this.main.lang].toUpperCase();
		this.languageRow.value.innerText = OPTION.language[this.main.lang].toUpperCase();

		for (let i = 0; i < 4; i++) {
  			this.audioRow[i].label.innerHTML = text.menu.settings.audio[i][this.main.lang].toUpperCase();
  			this.audioRow[i].value.innerHTML = OPTION.audio[this.getConfig().audio[audioKeys[i]]]
  		}

  		this.damageRow.label.innerText = text.menu.settings.showDamage[this.main.lang].toUpperCase();
  		this.damageRow.value.innerText = (dataPokePath.config.showDamage) ? text.ui.yes[this.main.lang].toUpperCase(): text.ui.no[this.main.lang].toUpperCase();

  		this.showRouteRow.label.innerText = text.menu.settings.showRoute[this.main.lang].toUpperCase();
  		this.showRouteRow.value.innerText = (dataPokePath.config.showRoute) ? text.ui.yes[this.main.lang].toUpperCase(): text.ui.no[this.main.lang].toUpperCase();

  		this.showTCRow.label.innerText = text.menu.settings.showTC[this.main.lang].toUpperCase();
  		this.showTCRow.value.innerText = (dataPokePath.config.showTC) ? text.ui.yes[this.main.lang].toUpperCase(): text.ui.no[this.main.lang].toUpperCase();

  		this.autoStopRow.label.innerText = text.menu.settings.autoStop[this.main.lang].toUpperCase();
  		this.autoStopRow.value.innerText = (dataPokePath.config.autoStop) ? text.ui.yes[this.main.lang].toUpperCase(): text.ui.no[this.main.lang].toUpperCase();
  		
  		this.autoResetRow.label.innerText = text.menu.settings.autoReset[this.main.lang].toUpperCase();
  		if (dataPokePath.config.autoReset == 1) this.autoResetRow.value.innerText = text.menu.settings.reset[1][this.main.lang].toUpperCase();
  		else if (dataPokePath.config.autoReset == 2) this.autoResetRow.value.innerText = text.menu.settings.reset[2][this.main.lang].toUpperCase();
  		else this.autoResetRow.value.innerText = text.menu.settings.reset[0][this.main.lang].toUpperCase(); 

  		this.displayHealthRow.label.innerText = text.menu.settings.displayHealth[this.main.lang].toUpperCase();
  		if (dataPokePath.config.displayHealth == 1) this.displayHealthRow.value.innerText = text.menu.settings.displayHealthOptions[1][this.main.lang].toUpperCase();
  		else if (dataPokePath.config.displayHealth == 2) this.displayHealthRow.value.innerText = text.menu.settings.displayHealthOptions[2][this.main.lang].toUpperCase();
  		else this.displayHealthRow.value.innerText = text.menu.settings.displayHealthOptions[0][this.main.lang].toUpperCase(); 

  		//SHORTCUTS
  		for (let i = 0; i < 9; i++) {
  			this.shortcutRow[i].label.innerHTML = SHORTCUTS.key[i][this.main.lang].toUpperCase();
  			this.shortcutRow[i].content.innerHTML = SHORTCUTS.do[i][this.main.lang].toUpperCase();
  		}

  		// CREDITS
  		this.developer.label.innerHTML = CREDITS.developer.label[this.main.lang].toUpperCase();
  		this.testers.label.innerHTML = CREDITS.testers.label[this.main.lang].toUpperCase();

  		for (let i = 0; i < 6; i++) this.assetsList[i].label.innerHTML = CREDITS.assets.label[i][this.main.lang].toUpperCase();

  		this.disclaimer.innerHTML = CREDITS.disclaimer[this.main.lang]

  		//DATA
  		this.deleteData.innerHTML = text.menu.data.delete[this.main.lang].toUpperCase();
  		this.exportData.innerHTML = text.menu.data.export[this.main.lang].toUpperCase();
		this.importData.innerHTML = text.menu.data.import[this.main.lang].toUpperCase();
	}

	updateLanguage = (dir) => {
		let pos = this.main.lang + dir;
		if (pos < 0) pos = 7;
		else if (pos == 8) pos = 0;

		if (pos == 6) document.body.style.fontFamily = 'PixelMPlus';
		else if (pos == 7) document.body.style.fontFamily = 'NGC';
		else  document.body.style.fontFamily = 'PressStart2P';
		this.main.lang = pos;

        this.update();
        this.main.updateLanguage();

		const dataPokePath = JSON.parse(window.localStorage.getItem("dataPokePath"));
        dataPokePath.config.language = pos;
        window.localStorage.setItem("dataPokePath", JSON.stringify(dataPokePath));
        playSound('option', 'ui');
  	}

  	updateAudio = (key, dir) => {
  		let value = this.getConfig().audio[key] += dir;
       	if (value < 0) value = 0;
  		else if (value > 20 ) value = 20;

        let config = this.getConfig();
        config.audio[key] = value;
        this.saveConfig(config);
        this.update();
        setVolume();
        playSound('option', 'ui');
    };

    updateShowDamage = () => {
    	this.main.showDamage = !this.main.showDamage;

  		const dataPokePath = JSON.parse(window.localStorage.getItem("dataPokePath"));
        dataPokePath.config.showDamage = this.main.showDamage;
        window.localStorage.setItem("dataPokePath", JSON.stringify(dataPokePath));

        this.update();
        playSound('option', 'ui');
    };

    updateDisplayHealth = (dir) => {
    	let pos = Number(this.main.displayHealth) + dir;
		if (pos < 0) pos = 2;
		else if (pos == 3) pos = 0;
		this.main.displayHealth = pos;

  		const dataPokePath = JSON.parse(window.localStorage.getItem("dataPokePath"));
        dataPokePath.config.displayHealth = this.main.displayHealth;
        window.localStorage.setItem("dataPokePath", JSON.stringify(dataPokePath));

        this.update();
        playSound('option', 'ui');
    };

    updateAutoStop = () => {
    	this.main.autoStop = !this.main.autoStop;

  		const dataPokePath = JSON.parse(window.localStorage.getItem("dataPokePath"));
        dataPokePath.config.autoStop = this.main.autoStop;
        window.localStorage.setItem("dataPokePath", JSON.stringify(dataPokePath));

        this.update();
        playSound('option', 'ui');
    }	

    updateShowTC = () => {
    	this.main.showTC = !this.main.showTC;
  		const dataPokePath = JSON.parse(window.localStorage.getItem("dataPokePath"));
        dataPokePath.config.showTC = this.main.showTC;
        window.localStorage.setItem("dataPokePath", JSON.stringify(dataPokePath));

        this.update();
        this.main.UI.update();
        playSound('option', 'ui');
    }	

    updateShowRoute = () => {
    	this.main.showRoute = !this.main.showRoute;

  		const dataPokePath = JSON.parse(window.localStorage.getItem("dataPokePath"));
        dataPokePath.config.showRoute = this.main.showRoute;
        window.localStorage.setItem("dataPokePath", JSON.stringify(dataPokePath));

        this.update();
        this.main.UI.update();
        playSound('option', 'ui');
    };

    updateAutoReset = (dir) => {
    	let pos = Number(this.main.autoReset) + dir;
		if (pos < 0) pos = 2;
		else if (pos == 3) pos = 0;
		this.main.autoReset = pos;

  		const dataPokePath = JSON.parse(window.localStorage.getItem("dataPokePath"));
        dataPokePath.config.autoReset = this.main.autoReset;
        window.localStorage.setItem("dataPokePath", JSON.stringify(dataPokePath));

        this.update();
        playSound('option', 'ui');
    };

	open() {
		super.open();
		this.update();
	}
}

export class DeleteData extends GameScene {
	constructor(main) {
		super(400, 130);
		this.main = main;
		
		this.header.removeChild(this.closeButton);
		this.render();
	}

	render() {
		this.prompt = new Element(this.container, { className: 'defeat-scene-prompt' }).element;
		
		this.yesButton = new Element(this.container, { className: 'delete-scene-yes-button' }).element;
		this.noButton = new Element(this.container, { className: 'delete-scene-no-button' }).element;

		this.yesButton.addEventListener('mouseenter', () => { playSound('hover2', 'ui') })
		this.noButton.addEventListener('mouseenter', () => { playSound('hover2', 'ui') })

		this.noButton.addEventListener('click', () => this.close());
		this.yesButton.addEventListener('click', () => {
			localStorage.clear();
			window.location.reload();
		})
	}

	update() {
		this.prompt.innerHTML = text.menu.data.deletePrompt[this.main.lang].toUpperCase();;
		this.yesButton.innerText = text.menu.data.delete[this.main.lang].toUpperCase();
		this.noButton.innerText = text.menu.data.cancel[this.main.lang].toUpperCase();
	}

	open() {
		super.open();
		this.update();
	}
}

export class ImportData extends GameScene {
	constructor(main) {
		super(450, 250);
		this.main = main;
		this.newData;
		this.render();
	}

	render() {
		const input = document.createElement("input");
	    input.type = "file";
	    input.accept = ".txt";
	    input.style.display = "none"; 

	    this.uploadButton = document.createElement("button");
	    this.uploadButton.className = 'export-scene-button';
	    this.uploadButton.style.fontFamily ='inherit';
	    this.uploadButton.style.lineHeight ='inherit';

	    this.container.appendChild( this.uploadButton);
	    this.container.appendChild(input);

		this.uploadButton.addEventListener("click", () => input.click());

	    input.addEventListener("change", () => {
		    const archivo = input.files[0];
		    if (!archivo) return;

		    const reader = new FileReader();

		    reader.onload = () => {
		        const texto = reader.result;

		        this.codeInput.value.value = texto;
		    };

		    reader.readAsText(archivo);
		});

		this.prompt = new Element(this.container, { className: 'defeat-scene-prompt' }).element;
		this.importButton = new Element(this.container, { className: 'export-scene-button' }).element;
		this.importMessage = new Element(this.container, { className: 'export-scene-message' }).element;
		this.codeInput = new Input(
			this.container, 
			"text", 
			{ 
				className: "import-export-code",  
			}
		);

		this.importButton.addEventListener('mouseenter', () => { playSound('hover2', 'ui') })
		this.importButton.addEventListener('click', () => {
			this.newData = decode(this.codeInput.value.value)
			if (this.newData != null) {
				this.main.data = this.newData;
				const dataPokePath = JSON.parse(window.localStorage.getItem("dataPokePath"));
			    dataPokePath.save = {
			        new: false,
			        player: this.newData.player,
			        team: this.newData.team,
			        box: this.newData.box,
			        area: this.newData.area,
			        shop: this.newData.shop,
			        teamManager: this.newData.teamManager,
			    };

			    window.localStorage.setItem("dataPokePath", JSON.stringify(dataPokePath));
				window.location.reload();
			} else {
				playSound('pop0', 'ui');
				this.importMessage.innerHTML = text.menu.data.importError[this.main.lang].toUpperCase();
			}
		})
	}

	update() {
		this.prompt.innerHTML = text.menu.data.importPrompt[this.main.lang].toUpperCase();
		this.importButton.innerText = text.menu.data.importButton[this.main.lang].toUpperCase();
		this.uploadButton.textContent = text.menu.data.uploadButton[this.main.lang].toUpperCase();
		this.codeInput.value.value = "";
		this.importMessage.innerHTML = "";
	}

	open() {
		super.open();
		this.update();
	}
}

export class ExportData extends GameScene {
	constructor(main) {
		super(450, 250);
		this.main = main;
		this.code;
		this.render();
	}

	render() {
		this.prompt = new Element(this.container, { className: 'defeat-scene-prompt' }).element;
		this.exportButton = new Element(this.container, { className: 'export-scene-button' }).element;
		this.downloadButton = new Element(this.container, { className: 'export-scene-button' }).element; 

		this.codeInput = new Input(
			this.container, 
			"text", 
			{ 
				className: "import-export-code",  
				readonly: true
			}
		);
		this.exportMessage = new Element(this.container, { className: 'import-scene-message' }).element;
		this.exportButton.addEventListener('mouseenter', () => { playSound('hover2', 'ui') })
		this.exportButton.addEventListener('click', () => {
		    playSound('key1', 'ui');

		    const tempInput = document.createElement('textarea');
		    tempInput.value = this.code;
		    document.body.appendChild(tempInput);
		    tempInput.select();

		    try {
		        document.execCommand('copy'); 
		        this.exportMessage.innerHTML = text.menu.data.codeCopied[this.main.lang].toUpperCase();
		    } catch (err) {
		        this.exportMessage.innerHTML = 'COPY FAILED, TRY CLICK -> CTRL + A -> CTRL + C';
		    }

		    document.body.removeChild(tempInput); 
		});

		this.downloadButton.addEventListener('mouseenter', () => { playSound('hover2', 'ui') });
	    this.downloadButton.addEventListener('click', () => {
	        playSound('key1', 'ui');

	        const blob = new Blob([this.code], { type: 'text/plain' });
	        const url = URL.createObjectURL(blob);
	        const a = document.createElement('a');
	        a.href = url;
	        a.download = 'PokePathSave.txt'; 
	        document.body.appendChild(a);
	        a.click();
	        document.body.removeChild(a);
	        URL.revokeObjectURL(url);
	    });
	}

	update() {
		this.prompt.innerHTML = text.menu.data.exportPrompt[this.main.lang].toUpperCase();;
		this.exportButton.innerText = text.menu.data.exportButton[this.main.lang].toUpperCase();
		this.downloadButton.innerText = text.menu.data.downloadButton[this.main.lang].toUpperCase();

		const data = JSON.parse(window.localStorage.getItem("dataPokePath")).save;

		this.code = encode(data);
		this.codeInput.value.value = this.code;
		this.exportMessage.innerHTML = "";
	}


	open() {
		super.open();
		this.update();
	}
}

function encode(data) {
    const json = JSON.stringify(data, (k, v) => v instanceof Set ? { t:'s', v:[...v] } : v);
    // Convierte Unicode a Base64
    return btoa(
        new TextEncoder().encode(json)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
}

function decode(code) {
    try {
        const bytes = atob(code)
            .split('')
            .map(c => c.charCodeAt(0));
        const json = new TextDecoder().decode(new Uint8Array(bytes));
        return JSON.parse(json, (k, v) => v?.t==='s'? new Set(v.v) : v);
    } catch {
        return null;
    }
}
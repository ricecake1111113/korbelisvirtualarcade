import { GameScene } from '../../utils/GameScene.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { playSound, playMusic } from '../../file/audio.js';

const TUTORIAL_TITLE_PAGE = {
	0: [
		'UNITS',
		'UNIDADES',
		'UNITÉS',
		'UNIDADES',
		'UNITÀ',
		'EINHEITEN',
		'ユニット',
		'유닛',
	],
	1: [
		'SHOP',
		'TIENDA',
		'BOUTIQUE',
		'LOJA',
		'NEGOZIO',
		'LADEN',
		'ショップ',
		'상점',
	],
	2: [
		'POKÉMON STORAGE',
		'CAJA POKÉMON',
		'STOCKAGE POKÉMON',
		'CAIXA POKÉMON',
		'BOX POKÉMON',
		'POKÉMON-BOX',
		'ポケモンボックス',
		'포켓몬 박스',
	],
	3: [
		'MAP',
		'MAPAS',
		'CARTE',
		'MAPA',
		'MAPPHE',
		'KARTE',
		'マップ',
		'맵',
	],
	4: [
		'ENEMIES',
		'ENEMIGOS',
		'ENNEMIS',
		'INIMIGOS',
		'NEMICI',
		'GEGNER',
		'敵',
		'적',
	],
	5: [
		'PROFILE',
		'PERFIL',
		'PROFIL',
		'PERFIL',
		'PROFILO',
		'PROFIL',
		'プロフィール',
		'프로필',
	],
	6: [
		'AUTOSAVE',
		'AUTOGUARDADO',
		'SAUVEGARDE AUTO',
		'AUTOSAVE',
		'SALVATAGGIO AUTO',
		'AUTOSAVE',
		'オートセーブ',
		'자동 저장',
	],
	7: [
		'GOOD LUCK!',
		'¡BUENA SUERTE!',
		'BONNE CHANCE !',
		'BOA SORTE!',
		'BUONA FORTUNA!',
		'VIEL GLÜCK!',
		'がんばって！',
		'행운을 빕니다!',
	],
}


const TUTORIAL_TEXT_PAGE = {
	0: [
		'Defend the Route with your Pokémon! Each one has unique stats and a special ability. Level them up to make them stronger and evolve them.',
		'¡Defiende la Ruta con tus Pokémon! Cada uno tiene atributos únicos y una pasiva especial. Sube su nivel para fortalecerlos y hacerlos evolucionar.',
		'Défends la Route avec tes Pokémon ! Chacun a ses stats uniques et une capacité spéciale. Fais-les monter de niveau pour les rendre plus forts.',
		'Defende a Rota com seus Pokémon! Cada um tem atributos únicos e uma habilidade especial. Aumente o nível deles para fortalecê-los e evoluí-los.',
		'Difendi la rotta con i tuoi Pokémon! Ognuno ha statistiche uniche e un’abilità speciale. Falli salire di livello per renderli più forti e farli evolvere.',
		'Verteidige die Route mit deinen Pokémon! Jedes hat einzigartige Werte und eine spezielle Fähigkeit. Steigere ihr Level, um sie zu stärken und zu entwickeln.',
		'ポケモンたちとルートを守ろう！それぞれが特別な能力と個性を持っている。レベルを上げて進化させよう！',
		'포켓몬으로 루트를 방어하세요! 각 포켓몬은 고유한 능력과 스킬을 가지고 있습니다. 레벨을 올려 강하게 만들고 진화시키세요!',
	],
	1: [
		'You can buy new Pokémon in the Shop. Each time you purchase one, its price will increase.',
		'Puedes comprar nuevos Pokémon en la Tienda. Cada vez que adquieras uno, su precio aumentará.',
		'Tu peux acheter de nouveaux Pokémon dans la boutique. À chaque achat, leur prix augmentera.',
		'Você pode comprar novos Pokémon na Loja. Cada vez que comprar um, o preço aumentará.',
		'Puoi comprare nuovi Pokémon nel Negozio. Ogni volta che ne acquisti uno, il prezzo aumenterà.',
		'Du kannst neue Pokémon im Laden kaufen. Mit jedem Kauf steigt ihr Preis.',
		'ショップで新しいポケモンを購入できます。買うたびに価格が上がります。',
		'상점에서 새로운 포켓몬을 구매할 수 있습니다. 구매할 때마다 가격이 상승합니다.',
	],
	2: [
		'You can have up to 10 active Pokémon in your team. The rest will be stored in the Box.',
		'Puedes tener hasta 10 Pokémon activos en tu equipo. Los demás se almacenarán en la Caja.',
		'Tu peux avoir jusqu’à 10 Pokémon actifs dans ton équipe. Les autres seront stockés dans le PC.',
		'Você pode ter até 10 Pokémon ativos em sua equipe. Os demais ficarão guardados na Caixa.',
		'Puoi avere fino a 10 Pokémon attivi nella tua squadra. Gli altri verranno salvati nel Box.',
		'Du kannst bis zu 10 aktive Pokémon in deinem Team haben. Die übrigen werden in der Box gespeichert.',
		'チームには最大10匹のポケモンを配置できます。残りはボックスに保管されます。',
		'팀에는 최대 10마리의 포켓몬을 배치할 수 있습니다. 나머지는 박스에 저장됩니다.',
	],
	3: [
		'You can switch routes at any time without losing progress! If a wave is too hard, visit another map to train your Pokémon and come back later.',
		'¡Puedes cambiar de ruta en cualquier momento sin perder tu progreso! Si una oleada es demasiado difícil, visita otro mapa para mejorar tu equipo y vuelve más tarde.',
		'Tu peux changer de route à tout moment sans perdre ta progression ! Si une vague est trop difficile, entraîne-toi ailleurs et reviens plus tard.',
		'Você pode mudar de rota a qualquer momento sem perder o progresso! Se uma onda for difícil demais, treine em outro mapa e volte depois.',
		'Puoi cambiare percorso in qualsiasi momento senza perdere i progressi! Se un’ondata è troppo difficile, allena i tuoi Pokémon e torna più tardi.',
		'Du kannst jederzeit die Route wechseln, ohne deinen Fortschritt zu verlieren! Wenn eine Welle zu schwer ist, trainiere woanders und kehre später zurück.',
		'進行状況を失わずにいつでもルートを変更できます！難しいウェーブなら別のマップで育成してから戻ろう。',
		'진행 상황을 잃지 않고 언제든 경로를 변경할 수 있습니다! 너무 어려운 웨이브라면 다른 맵에서 훈련 후 돌아오세요.',
	],
	4: [
		'Each enemy has unique traits! Before starting the wave, check which enemies will appear and adjust your team.',
		'¡Cada enemigo tiene sus propias características! Antes de iniciar la oleada, observa qué enemigos aparecerán y ajusta tu equipo.',
		'Chaque ennemi a ses propres caractéristiques ! Avant de commencer la vague, vérifie quels ennemis apparaîtront et réorganise ton équipe.',
		'Cada inimigo tem as suas próprias características! Antes de iniciar a onda, vê quais inimigos vão aparecer e refaz a tua equipa.',
		'Ogni nemico ha caratteristiche uniche! Prima di iniziare l’ondata, controlla quali nemici appariranno e riorganizza la tua squadra.',
		'Jeder Gegner hat seine eigenen Eigenschaften! Sieh dir vor Beginn der Welle an, welche Gegner erscheinen, und stelle dein Team neu zusammen.',
		'敵はそれぞれ異なる特徴を持っています！ウェーブを始める前に出現する敵を確認し、チームを組み直しましょう。',
		'각 적은 고유한 특성을 가지고 있습니다! 웨이브를 시작하기 전에 어떤 적이 나타나는지 확인하고 팀을 재구성하세요.',
	],
	5: [
		'You can change your name and avatar from your profile, and view your achievements and stats.',
		'Puedes cambiar tu nombre y avatar desde tu perfil, además de consultar tus logros y estadísticas.',
		'Tu peux changer ton nom et ton avatar dans ton profil, et consulter tes succès et statistiques.',
		'Você pode alterar seu nome e avatar no perfil, além de ver suas conquistas e estatísticas.',
		'Puoi cambiare nome e avatar dal profilo e controllare i tuoi trofei e statistiche.',
		'Du kannst deinen Namen und Avatar im Profil ändern und deine Erfolge und Statistiken ansehen.',
		'プロフィールから名前とアバターを変更でき、実績やステータスも確認できます。',
		'프로필에서 이름과 아바타를 변경하고 업적 및 통계를 확인할 수 있습니다.',
	],
	6: [
		'The game autosaves when changing maps or finishing a wave.',
		'El progreso se guarda automáticamente al cambiar de mapa o al finalizar una oleada.',
		'Le jeu se sauvegarde automatiquement en changeant de carte ou après une vague.',
		'O jogo é salvo automaticamente ao mudar de mapa ou terminar uma onda.',
		'Il gioco salva automaticamente quando cambi mappa o completi un’ondata.',
		'Das Spiel speichert automatisch beim Kartenwechsel oder nach einer Welle.',
		'マップを変更するかウェーブをクリアすると自動的にセーブされます。',
		'맵을 변경하거나 웨이브를 완료하면 자동으로 저장됩니다.',
	],
	7: [
		'That’s all! You start your adventure with $50, use it wisely!',
		'¡Eso es todo! Empiezas tu aventura con $50 iniciales, ¡úsalos con sabiduría!',
		'C’est tout ! Tu commences ton aventure avec 50 $, utilise-les bien !',
		'É isso! Você começa sua aventura com $50, use com sabedoria!',
		'Tutto qui! Inizi la tua avventura con $50, usali con saggezza!',
		'Das war’s! Du startest dein Abenteuer mit 50 $. Setze sie klug ein!',
		'これでチュートリアルは完了！最初の所持金は50ドル。賢く使おう！',
		'이것으로 튜토리얼이 끝입니다! 시작 자금 $50을 현명하게 사용하세요!',
	],
}


export class TutorialScene extends GameScene {
	constructor(main) {
		super(400, 450);
		this.main = main;
		this.pageNumber = 0;

		this.header.removeChild(this.closeButton);
		this.render();
	}

	render() {
		this.title.innerHTML = text.tutorial.title[this.main.lang].toUpperCase();

		this.tutorialTitle = new Element(this.container, { className: 'tutorial-scene-title' }).element;
		this.tutorialImage = new Element(this.container, { className: 'tutorial-scene-image' }).element;
		this.tutorialText = new Element(this.container, { className: 'tutorial-scene-text' }).element;

		this.buttonPrev = new Element(this.container, { className: 'tutorial-scene-prev' }).element;
		this.buttonNext = new Element(this.container, { className: 'tutorial-scene-next' }).element;

		this.tutorialIndex = new Element(this.container, { className: 'tutorial-scene-index' }).element;

		this.buttonPrev.addEventListener('click', () => { this.changePage(-1) });
		this.buttonNext.addEventListener('click', () => { this.changePage(1) });
		this.buttonPrev.addEventListener('mouseenter', () => { playSound('open', 'ui') });
		this.buttonNext.addEventListener('mouseenter', () => { playSound('open', 'ui') });
	}

	update() {
		this.tutorialTitle.innerHTML = TUTORIAL_TITLE_PAGE[this.pageNumber][this.main.lang];
		this.tutorialText.innerHTML = TUTORIAL_TEXT_PAGE[this.pageNumber][this.main.lang];

		this.buttonPrev.innerHTML = text.tutorial.back[this.main.lang].toUpperCase();
		this.buttonNext.innerHTML = text.tutorial.next[this.main.lang].toUpperCase();

		this.tutorialImage.style.backgroundImage = `url("./src/assets/images/icons/tutorial${this.pageNumber}.png")`;

		if (this.pageNumber == 7) {
			this.buttonNext.innerHTML = text.tutorial.end[this.main.lang].toUpperCase();
		} else if (this.pageNumber == 0) {
			this.buttonPrev.style.filter = 'brightness(0.8)';
			this.buttonPrev.style.pointerEvents = 'none';
		} else {
			this.buttonPrev.style.filter = 'brightness(1)';
			this.buttonPrev.style.pointerEvents = 'all';
		}

		this.tutorialIndex.innerHTML = `- ${this.pageNumber + 1}/8 -`;
	}

	changePage(pos) {
		playSound('button2', 'ui');
		this.pageNumber += pos;
		if (this.pageNumber > 7) this.close();
		else this.update();
	}

	open() {
		super.open();
		this.update();
	}

	close() {
		super.close();
		playMusic('route1');
	}
}
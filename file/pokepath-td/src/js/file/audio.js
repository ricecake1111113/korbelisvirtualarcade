function loadSounds(paths, options = {}) {
	const sounds = {};
	for (const [key, path] of Object.entries(paths)) {
		const audio = new Audio(path);
		if (options.loop) audio.loop = true;
		sounds[key] = audio;
	}
	return sounds;
}

export const soundUi = loadSounds({
	close: './src/assets/sounds/ui/close.wav',
	open: './src/assets/sounds/ui/open.wav',
	hover1: './src/assets/sounds/ui/hover1.wav',
	hover2: './src/assets/sounds/ui/hover2.wav',
	hover3: './src/assets/sounds/ui/hover3.wav',
	option: './src/assets/sounds/ui/option.wav',
	button1: './src/assets/sounds/ui/button1.wav',
	button2: './src/assets/sounds/ui/button2.wav',
	key0: './src/assets/sounds/ui/key0.wav',
	key1: './src/assets/sounds/ui/key1.wav',
	click1: './src/assets/sounds/ui/click1.wav',
	select: './src/assets/sounds/ui/select.wav',
	obtain: './src/assets/sounds/ui/obtain.wav',
	step: './src/assets/sounds/ui/step.wav',
	equip: './src/assets/sounds/ui/equip.wav',
	unequip: './src/assets/sounds/ui/unequip.wav',
	pop0: './src/assets/sounds/ui/pop0.wav',
	purchase: './src/assets/sounds/ui/purchase.wav',
	end: './src/assets/sounds/ui/end.wav',

	click0: './src/assets/sounds/ui/click0.wav',
	start: './src/assets/sounds/ui/start.wav',
	results: './src/assets/sounds/ui/results.wav',
});

export const soundEffect = loadSounds({
	projectile1: './src/assets/sounds/effect/projectile1.wav',
	projectile2: './src/assets/sounds/effect/projectile2.wav',
	projectile3: './src/assets/sounds/effect/projectile3.wav',
	projectile4: './src/assets/sounds/effect/projectile4.wav',
	projectile5: './src/assets/sounds/effect/projectile5.wav',
	projectile6: './src/assets/sounds/effect/projectile5.wav',

	area1: './src/assets/sounds/effect/area1.wav',
	area2: './src/assets/sounds/effect/area2.wav',
	area3: './src/assets/sounds/effect/area3.wav',

	hit2: './src/assets/sounds/effect/hit2.wav',
	hit3: './src/assets/sounds/effect/hit3.wav',

	teleport: './src/assets/sounds/effect/teleport.wav',
});

export const soundMusic = loadSounds({
	intro: './src/assets/sounds/music/intro.mp3',
	route1: './src/assets/sounds/music/route1.mp3',
	route2: './src/assets/sounds/music/route2.mp3',
	route3: './src/assets/sounds/music/route3.mp3',
	route4: './src/assets/sounds/music/route4.mp3',
	route5: './src/assets/sounds/music/route5.mp3',
	route6: './src/assets/sounds/music/route6.mp3',
	route7: './src/assets/sounds/music/route7.mp3',
	route8: './src/assets/sounds/music/route8.mp3',
	route9: './src/assets/sounds/music/route9.mp3',
}, { loop: true });

const soundBanks = {
	ui: soundUi,
	effect: soundEffect,
	music: soundMusic
};

export function playSound(sound, origin) {
	const s = soundBanks[origin]?.[sound];
	if (!s) return;

	s.pause();
	s.currentTime = 0;
	s.play().catch(() => {});
}

export function setVolume() {
	const audio = JSON.parse(window.localStorage.getItem("dataPokePath")).config.audio;

	const master = audio.master * 0.05;
	const volUi = audio.ui * 0.05 * master;
	const volMusic = audio.music * 0.05 * master;
	const volEffect = audio.effects * 0.05 * master;

	Object.keys(soundUi).forEach((key) => soundUi[key].volume = volUi);
	Object.keys(soundMusic).forEach((key) => soundMusic[key].volume = volMusic);
	Object.keys(soundEffect).forEach((key) => soundEffect[key].volume = volEffect);
}

let currentMusic = null;
let fadeOutInterval = null;
let fadeInInterval = null;

export function playMusic(trackName) {
	const newTrack = soundMusic[trackName];
	if (!newTrack) return;

	if (currentMusic === newTrack) return;

	newTrack.loop = true;
	newTrack.volume = 0;

	if (currentMusic) {
		clearInterval(fadeOutInterval);
		fadeOutInterval = setInterval(() => {
			if (currentMusic.volume > 0.01) {
				currentMusic.volume -= 0.01;
			} else {
				currentMusic.pause();
				currentMusic.currentTime = 0;
				clearInterval(fadeOutInterval);
				startNewTrack(newTrack);
			}
		}, 30);
	} else {
		startNewTrack(newTrack);
	}
}

function startNewTrack(track) {
	const audio = JSON.parse(window.localStorage.getItem("dataPokePath")).config.audio;
	const master = audio.master * 0.05;
	const music = audio.music * 0.05;
	const targetVolume = master * music;

	track.play();
	currentMusic = track;

	clearInterval(fadeInInterval);
	let vol = 0;
	fadeInInterval = setInterval(() => {
		if (vol < targetVolume) {
			vol += 0.02;
			track.volume = Math.min(vol, targetVolume);
		} else {
			clearInterval(fadeInInterval);
			track.volume = targetVolume;
		}
	}, 50);
}

export function crySound(pokemonNumber) {
	const audio = JSON.parse(window.localStorage.getItem("dataPokePath")).config.audio;
	let num =  String(pokemonNumber).padStart(3, '0');

	let cry = new Audio(`./src/assets/sounds/cries/${num}.wav`);

	const master = audio.master * 0.05;
	const effects = audio.effects * 0.05;

	cry.volume = master * effects * 0.5;
	cry.play();
}	

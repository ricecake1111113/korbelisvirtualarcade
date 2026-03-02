export class Utility {
	numberDot(num, lang = 0) {
		if ([0, 6, 7].includes(lang)) return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		else if (lang === 2) return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		else return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}

	minutsToTime(min) {
		const h = Math.floor(min/60)
		const m = min - (h*60);
		return `${h}:${m.toString().padStart(2, '0')}`;
	}
}

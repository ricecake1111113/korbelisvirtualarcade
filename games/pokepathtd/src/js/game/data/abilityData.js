export const abilityData = {
	ambusher: {
		id: 'ambusher',
		name: ['Ambusher', 'Acechador', 'Guetteur', 'Emboscador', 'Agguato', 'Hinterhalter', '待ち伏せ者', '매복꾼'],
		description: [
		  	`It doubles its power if it is in tall grass.`,
		  	`Duplica su poder si se encuentra en hierba alta.`,
		  	`Il double sa puissance s'il est dans les hautes herbes.`,
		  	`Duplica seu poder se estiver na grama alta.`,
		  	`Raddoppia la sua potenza se si trova nell'erba alta.`,
		  	`Es verdoppelt seine Kraft, wenn es im hohen Gras steht.`,
		  	`高い草むらにいるとき、パワーが2倍になる。`,
		  	`풀숲에 있을 때 공격력이 2배가 된다.`,
		]
	},
	swimmer: {
		id: 'swimmer',
		name: ['Swift Swim', 'Nado Rápido', 'Nage Rapide', 'Nado Rápido', 'Nuoto Veloce', 'Turboantrieb', 'すいすい (Suisui)', '쾌속 수영 (Kwaesok Suyeong)'],
		description: [
			`It doubles its speed if it is in water.`,
			`Duplica su velocidad si se encuentra en el agua.`,
			`Sa vitesse double s'il est dans l'eau.`,
			`Duplica sua velocidade se estiver na água.`,
			`Raddoppia la sua velocità se si trova nell'acqua.`,
			`Seine Geschwindigkeit verdoppelt sich, wenn es im Wasser ist.`,
			`水中にいるとスピードが2倍になる。`,
			`물 속에 있으면 속도가 2배가 된다.`,
		]
	},
	vigilant: {
		id: 'vigilant',
		name: ['Vigilant', 'Vigilante', 'Vigilant', 'Vigilante', 'Vigile', 'Wachsamer', 'ヴィジラント', '경계병'],
		description: [
		  	`It doubles its range if it is in the mountains.`,
		  	`Duplica su rango si se encuentra en la montaña.`,
		  	`Il double sa portée s'il est en montagne.`,
		  	`Duplica seu alcance se estiver na montanha.`,
		  	`Raddoppia la sua portata se si trova in montagna.`,
		  	`Seine Reichweite verdoppelt sich, wenn es in den Bergen ist.`,
			`山にいると射程が2倍になる。`,
			`산에 있으면 사거리가 2배가 된다.`,
		]
	},
	burn: {
		id: 'burn',
		name: ['Burn', 'Quemadura', 'Brûlure', 'Queimadura', 'Bruciatura', 'Verbrennung', 'やけど', '화상'],
		description: [
		  	`The attacks burn the target for 10 seconds, causing them to lose 0.5% of their life per second.`,
		  	`Los ataques queman al objetivo durante 10 segundos, perdiendo 0.5% de vida por segundo.`,
		  	`Les attaques brûlent la cible pendant 10 secondes, lui faisant perdre 0.5% de sa vie par seconde.`,
		  	`Os ataques queimam o alvo por 10 segundos, causando perda de 0.5% de vida por segundo.`,
		  	`Gli attacchi bruciano il bersaglio per 10 secondi, facendogli perdere l'0.5% di vita al secondo.`,
		  	`Die Angriffe verbrennen das Ziel 10 Sekunden lang und lassen es 0.5% Leben pro Sekunde verlieren.`,
		  	`攻撃は対象を10秒間やけど状態にし、毎秒HPを0.5%失わせる。`,
		  	`공격은 대상에게 10초 동안 화상을 입혀 매초 체력 0.5%를 잃게 한다.`,
		]
	},
	burnNerf: {
		id: 'burnNerf',
		name: ['Burn', 'Quemadura', 'Brûlure', 'Queimadura', 'Bruciatura', 'Verbrennung', 'やけど', '화상'],
		description: [
			'Attacks have a 50% chance to burn the target for 10 seconds, causing it to lose 0.5% HP per second.',
			'Los ataques tienen un 50% de quemar al objetivo durante 10 segundos, perdiendo 0.5% de vida por segundo.',
			'Les attaques ont 50 % de chances de brûler la cible pendant 10 secondes, lui faisant perdre 0,5 % de vie par seconde.',
			'Os ataques têm 50% de chance de queimar o alvo por 10 segundos, fazendo-o perder 0,5% de vida por segundo.',
			'Gli attacchi hanno il 50% di probabilità di bruciare il bersaglio per 10 secondi, facendogli perdere lo 0,5% di vita al secondo.',
			'Angriffe haben eine 50% Chance, das Ziel für 10 Sekunden zu verbrennen, wobei es pro Sekunde 0,5% seiner HP verliert.',
			'攻撃は50%の確率で対象を10秒間やけど状態にし、毎秒体力の0.5%を失わせる。',
			'공격은 50% 확률로 대상에게 10초 동안 화상을 입히며, 매초 체력의 0.5%를 잃게 한다.'
		]
	},
	poison: {
		id: 'poison',
		name: ['Poison', 'Veneno', 'Poison', 'Veneno', 'Veleno', 'Gift', 'どく', '독'],
		description: [
		  	`The attacks apply 1 charge of poison.
			The target loses 0.1% of life per second for each charge.`,
		  	`Los ataques aplican 1 carga de veneno.
			El objetivo pierde 0.1% de vida por segundo por cada carga.`,
		  	`Les attaques infligent 1 charge de poison.
			La cible perd 0,1 % de sa vie par seconde pour chaque charge.`,
		  	`Os ataques aplicam 1 carga de veneno.
			O alvo perde 0,1% de vida por segundo por cada carga.`,
		  	`Gli attacchi applicano 1 carica di veleno.
			Il bersaglio perde lo 0,1% di vita al secondo per ogni carica.`,
		  	`Die Angriffe fügen 1 Giftladung zu.
			Das Ziel verliert pro Sekunde 0,1 % Leben für jede Ladung.`,
		  	`攻撃は1つのどくチャージを与える。
			対象はチャージごとに毎秒HPの0.1%を失う。`,
		  	`공격은 독 1스택을 적용한다.
			대상은 스택당 매초 체력 0.1%를 잃는다.`,
		]
	},
	frisk: {
		id: 'frisk',
		name: ['Frisk', 'Cacheo', 'Fouille', 'Revistar', 'Perquisizione', 'Durchsuchen', 'フリスク', '수색'],
		description: [
		  	'Can hit invisible enemies',
		    'Puede golpear a enemigos invisibles',
		    'Peut toucher les ennemis invisibles',
		    'Pode atingir inimigos invisíveis',
		    'Può colpire nemici invisibili',
		    'Kann unsichtbare Gegner treffen',
		    '透明な敵にも攻撃できる',
		    '투명한 적도 공격할 수 있음'
		]
	},
	slow: {
		id: 'slow',
		name: ['Slow', 'Ralentizar', 'Ralentir', 'Retardar', 'Rallentare', 'Verlangsamen', 'スロウ', '느리게 하기'],
		description: [
		  	`The attacks slow the target for 2 seconds.`,
		  	`Los ataques ralentizan al objetivo durante 2 segundos.`,
		  	`Les attaques ralentissent la cible pendant 2 secondes.`,
		  	`Os ataques desaceleram o alvo por 2 segundos.`,
		  	`Gli attacchi rallentano il bersaglio per 2 secondi.`,
		  	`Die Angriffe verlangsamen das Ziel für 2 Sekunden.`,
		  	`攻撃は対象の動きを2秒間遅くする。`,
		  	`공격은 대상의 속도를 2초 동안 늦춘다.`,
		]
	},
	stunMono: {
		id: 'stunMono',
		name: ['Stun', 'Aturdir', 'Étourdir', 'Atordoar', 'Stordire', 'Betäuben', 'スタン', '기절'],
		description: [
		 	`The attacks have a 30% chance of paralyzing the target for 2 seconds.`,
		 	`Los ataques tienen un 30% de paralizar al objetivo durante 2 segundos.`,
		 	`Les attaques ont 30 % de chances de paralyser la cible pendant 2 secondes.`,
		 	`Os ataques têm 30% de chance de paralisar o alvo por 2 segundos.`,
		 	`Gli attacchi hanno il 30% di probabilità di paralizzare il bersaglio per 2 secondi.`,
		 	`Die Angriffe haben eine 30%ige Chance, das Ziel 2 Sekunden lang zu lähmen.`,
		 	`攻撃は対象を2秒間麻痺させる30%の確率がある。`,
		 	`공격은 대상에게 30% 확률로 2초간 마비를 적용한다.`,
		]
	},
	stunMonoNerf: {
		id: 'stunMonoNerf',
		name: ['Stun', 'Aturdir', 'Étourdir', 'Atordoar', 'Stordire', 'Betäuben', 'スタン', '기절'],
		description: [
		 	`The attacks have a 5% chance of paralyzing the target for 1.5 seconds.`,
		 	`Los ataques tienen un 5% de paralizar al objetivo durante 1.5 segundos.`,
		 	`Les attaques ont 5 % de chances de paralyser la cible pendant 1.5 secondes.`,
		 	`Os ataques têm 5% de chance de paralisar o alvo por 1.5 segundos.`,
		 	`Gli attacchi hanno il 5% di probabilità di paralizzare il bersaglio per 1.5 secondi.`,
		 	`Die Angriffe haben eine 5%ige Chance, das Ziel 1.5 Sekunden lang zu lähmen.`,
		 	`攻撃は対象を1.5秒間麻痺させる5%の確率がある。`,
		 	`공격은 대상에게 30% 확률로 1.5초간 마비를 적용한다.`,
		]
	},
	stunArea: {
		id: 'stunArea',
		name: ['Stun', 'Aturdir', 'Étourdir', 'Atordoar', 'Stordire', 'Betäuben', 'スタン', '기절'],
		description: [
		 	`The attacks have a 30% chance of paralyzing the target for 1.5 seconds.`,
		 	`Los ataques tienen un 30% de paralizar al objetivo durante 1.5 segundos.`,
		 	`Les attaques ont 30 % de chances de paralyser la cible pendant 1.5 secondes.`,
		 	`Os ataques têm 30% de chance de paralisar o alvo por 1.5 segundos.`,
		 	`Gli attacchi hanno il 30% di probabilità di paralizzare il bersaglio per 1.5 secondi.`,
		 	`Die Angriffe haben eine 30%ige Chance, das Ziel 1.5 Sekunden lang zu lähmen.`,
		 	`攻撃は対象を1.5秒間麻痺させる30%の確率がある。`,
		 	`공격은 대상에게 30% 확률로 1.5초간 마비를 적용한다.`,
		]
	},	
	armorBreak: {
		id: 'armorBreak',
		name: ['Armor Break', 'Rompearmadura', 'Brise-Armure', 'Quebra-Armadura', 'Rompicolpo', 'Rüstungsbrecher', 'アーマーブレイク', '아머 브레이크'],
		description: [
		  	`Causes double damage to armor.`,
		  	`Causa el doble de daño a la armadura.`,
		  	`Inflige le double de dégâts à l’armure.`,
		  	`Causa o dobro de dano à armadura.`,
		  	`Infligge il doppio del danno all’armatura.`,
		  	`Verursacht doppelten Schaden an der Rüstung.`,
		  	`アーマーに対して2倍のダメージを与える。`,
		  	`방어구에 두 배의 피해를 준다.`,
		]
	},
	ninja: {
		id: 'ninja',
		name: ['Ninja', 'Ninja', 'Ninja', 'Ninja', 'Ninja', 'Ninja', '忍者', '닌자'],
		description: [
			`The attacks ricochet between enemies with reduced damage.`,
			`Los ataques rebotan entre los enemigos con daño reducido.`,
			`Les attaques ricochent entre les ennemis avec des dégâts réduits.`,
			`Os ataques ricocheteiam entre os inimigos com dano reduzido.`,
			`Gli attacchi rimbalzano tra i nemici con danni ridotti.`,
			`Die Angriffe prallen zwischen Gegnern mit reduziertem Schaden ab.`,
			`攻撃はダメージを減らして敵の間で跳ね返る。`,
			`공격은 적 사이에서 반사되어 피해가 감소한다.`,
		]
	},
	heal: {
		id: 'heal',
		name: ['Heal', 'Curación', 'Soin', 'Cura', 'Cura', 'Heilen', 'ヒール', '회복'],
		description: [
		  	`Attacks have a small chance of restoring 1 heart.`,
		  	`Los ataques tienen una pequeña probabilidad de recuperar 1 corazón.`,
		  	`Les attaques ont une petite chance de restaurer 1 cœur.`,
		  	`Os ataques têm uma pequena chance de restaurar 1 coração.`,
		  	`Gli attacchi hanno una piccola probabilità di ripristinare 1 cuore.`,
		  	`Angriffe haben eine geringe Chance, 1 Herz wiederherzustellen.`,
		 	`攻撃は小さな確率でハート1つを回復する。`,
		 	`공격은 작은 확률로 체력 1을 회복한다.`,
		]
	},
	greed: {
		id: 'greed',
		name: ['Greed', 'Codicia', 'Avidité', 'Ganância', 'Avidità', 'Gier', 'グリード', '탐욕'],
		description:[
		    `Attacks grant $ equal to 10% of the target’s gold.`,
		    `Los ataques otorgan $ equivalente al 10% del oro del objetivo.`,
		    `Les attaques accordent $ égal à 10 % de l’or de la cible.`,
		    `Ataques concedem $ equivalente a 10% do ouro do alvo.`,
		    `Gli attacchi concedono $ pari al 10% dell’oro del bersaglio.`,
		    `Angriffe gewähren $ in Höhe von 10 % des Goldes des Ziels.`,
		    `攻撃は、対象のゴールドの10％に相当する$を付与する。`,
		    `공격은 대상의 골드의 10%에 해당하는 $를 제공합니다.`,
		]
	},
	focus: {
		id: 'focus',
		name: ['Focus', 'Focus', 'Concentration', 'Foco', 'Concentrazione', 'Fokus', 'フォーカス', '집중'],
		description: [
		  	`Each attack on the same target causes additional damage.`,
		  	`Cada ataque a un mismo objetivo causa daño adicional.`,
		  	`Chaque attaque sur la même cible inflige des dégâts supplémentaires.`,
		  	`Cada ataque ao mesmo alvo causa dano adicional.`,
		  	`Ogni attacco sullo stesso bersaglio infligge danni aggiuntivi.`,
		  	`Jeder Angriff auf dasselbe Ziel verursacht zusätzlichen Schaden.`,
		  	`同じ対象への攻撃ごとに追加ダメージを与える。`,
		  	`같은 대상에게 공격할 때마다 추가 피해를 준다.`,
		]
	},
	curse: {
		id: 'curse',
		name: ['Curse', 'Maldición', 'Malédiction', 'Maldição', 'Maledizione', 'Fluch', 'カース', '저주'],
		description: [
		  	    'Curse an enemy and deal damage to all cursed enemies',
			    'Maldice a un enemigo y causa daño a todos los enemigos malditos',
			    'Maudis un ennemi et inflige des dégâts à tous les ennemis maudits',
			    'Amaldiçoa um inimigo e causa dano a todos os inimigos amaldiçoados',
			    'Maledici un nemico e infliggi danno a tutti i nemici maledetti',
			    'Verfluche einen Gegner und füge allen verfluchten Gegnern Schaden zu',
			    '敵を呪い、呪われた全ての敵にダメージを与える',
			    '적을 저주하고 저주받은 모든 적에게 피해를 준다'
		]
	},
	doubleShot: {
		id: 'doubleShot',
		name: ['Double Shot', 'Disparo Doble', 'Tir Double', 'Tiro Duplo', 'Doppio Colpo', 'Doppelschuss', 'ダブルショット', '더블 샷'],
		description: [
			`Fires projectiles at up to 2 enemies at once.`,
			`Dispara proyectiles hasta a 2 enemigos a la vez.`,
			`Tire des projectiles sur jusqu’à 2 ennemis à la fois.`,
			`Dispara projéteis em até 2 inimigos ao mesmo tempo.`,
			`Spara proiettili fino a 2 nemici contemporaneamente.`,
			`Feuert Projektile auf bis zu 2 Gegner gleichzeitig ab.`,
			`一度に最大2体の敵に弾を発射する。`,
			`한 번에 최대 2명의 적에게 투사체를 발사한다.`,
		]
	},
	tripleShot: {
		id: 'tripleShot',
		name: ['Triple Shot', 'Disparo Triple', 'Tir Triple', 'Tiro Triplo', 'Triplo Colpo', 'Dreifachschuss', 'トリプルショット', '트리플 샷'],
		description: [
			'Fires projectiles at up to 3 enemies at once.',
			'Dispara proyectiles hasta a 3 enemigos a la vez.',
			'Tire des projectiles sur jusqu’à 3 ennemis à la fois.',
			'Dispara projéteis em até 3 inimigos ao mesmo tempo.',
			'Spara proiettili fino a 3 nemici contemporaneamente.',
			'Feuert Projektile auf bis zu 3 Gegner gleichzeitig ab.',
			'一度に最大3体の敵に弾を発射する。',
			'한 번에 최대 3명의 적에게 투사체를 발사한다.'
		]
	},
	quadraShot: {
		id: 'quadraShot',
		name: ['Quadra Shot', 'Disparo Cuádruple', 'Tir Quadruple', 'Tiro Quádruplo', 'Quadruplo Colpo', 'Vierfachschuss', 'クアドラショット', '쿼드라 샷'],
		description: [
			'Fires projectiles at up to 4 enemies at once.',
			'Dispara proyectiles hasta a 4 enemigos a la vez.',
			'Tire des projectiles sur jusqu’à 4 ennemis à la fois.',
			'Dispara projéteis em até 4 inimigos ao mesmo tempo.',
			'Spara proiettili fino a 4 nemici contemporaneamente.',
			'Feuert Projektile auf bis zu 4 Gegner gleichzeitig ab.',
			'一度に最大4体の敵に弾を発射する。',
			'한 번에 최대 4명의 적에게 투사체를 발사한다.'
		]
	},
	splash: {
		id: 'splash',
		name: ['Splash', 'Splash', 'Éclaboussure', 'Splash', 'Splash', 'Splash', 'スプラッシュ', '스플래시'],
		description: [
			`The projectiles explode in an area, causing half damage to nearby enemies.`,
			`Los projectiles explotan en área, causando la mitad de daño a enemigos cercanos.`,
			`Les projectiles explosent dans une zone, infligeant la moitié des dégâts aux ennemis proches.`,
			`Os projéteis explodem em uma área, causando metade do dano aos inimigos próximos.`,
			`I proiettili esplodono in un’area, causando metà danno ai nemici vicini.`,
			`Die Projektile explodieren in einem Gebiet und verursachen halben Schaden an nahegelegenen Gegnern.`,
			`弾は範囲内で爆発し、近くの敵に半分のダメージを与える。`,
			`투사체가 범위 내에서 폭발하여 주변 적에게 절반 피해를 준다.`,
		]
	},
	superCritical: {
		id: 'superCritical',
		name: ['Super Critical', 'Super Crítico', 'Super Critique', 'Super Crítico', 'Super Critico', 'Superkritisch', 'スーパークリティカル', '슈퍼 크리티컬'],
		description: [
		  	`Criticals do twice the damage.`,
		  	`Los críticos hacen el doble de daño.`,
		  	`Les coups critiques infligent le double de dégâts.`,
		  	`Os críticos causam o dobro do dano.`,
		  	`I colpi critici infliggono il doppio del danno.`,
		  	`Kritische Treffer verursachen doppelten Schaden.`,
		  	`クリティカルヒットは2倍のダメージを与える。`,
		  	`크리티컬 공격은 두 배의 피해를 준다.`,
		]
	},
	powerAura: {
		id: 'powerAura',
		name: ['Power Aura', 'Aura de Poder', 'Aura de Puissance', 'Aura de Poder', 'Aura di Potere', 'Kraft-Aura', 'パワーオーラ', '파워 오라'],
		description: [
		  	`Increases damage dealt by Pokémon within range by 20%.`,
		  	`Aumenta el daño de los Pokémon dentro de rango un 20%.`,
		  	`Augmente de 20 % les dégâts infligés par les Pokémon à portée.`,
		  	`Aumenta o dano causado pelos Pokémon dentro do alcance em 20%.`,
		  	`Aumenta del 20% i danni inflitti dai Pokémon nel raggio d’azione.`,
		  	`Erhöht den von Pokémon im Wirkungsbereich verursachten Schaden um 20 %.`,
		  	`範囲内のポケモンの与えるダメージが20％増加する。`,
		  	`범위 내 포켓몬의 피해량이 20% 증가한다.`,
		]
	},
	criticalAura: {
		id: 'criticalAura',
		name: ['Critical Aura', 'Aura de Crítico', 'Aura de Puissance', 'Aura de Poder', 'Aura di Potere', 'Kraft-Aura', 'パワーオーラ', '파워 오라'],
		description: [
		  	`Increases the critical damage of Pokémon within range by 33%.`,
		  	`Aumenta el daño crítico de los Pokémon dentro de rango un 33%.`,
		  	'Augmente de 33 % les dégâts critiques des Pokémon à portée.',
			'Aumenta em 33% o dano crítico dos Pokémon dentro do alcance.',
			'Aumenta del 33% i danni critici dei Pokémon nel raggio.',
			'Erhöht den kritischen Schaden von Pokémon im Umkreis um 33 %.',
			'範囲内のポケモンの急所ダメージが33%上昇する。',
			'범위 내 포켓몬의 치명타 피해가 33% 증가합니다.'
		]
	},
	// NEW
	curseDoubleShot: {
		id: 'curseDoubleShot',
		name: ['Curse DoubleShot', 'Disparo Doble Maldito', 'Double Tir Maudit', 'Disparo Duplo Amaldiçoado', 'Doppio Colpo Maledetto', 'Verfluchter Doppelschuss', 'カースダブルショット', '커스 더블샷'],
		description: [
		  	'Shoots projectiles at up to 2 enemies at once and curses them. Deals damage to all cursed enemies.',
		  	'Dispara proyectiles hasta a 2 enemigos a la vez y los maldice. Causa daño a todos los enemigos malditos.',
		  	'Tire des projectiles sur jusqu’à 2 ennemis à la fois et les maudit. Inflige des dégâts à tous les ennemis maudits.',
		  	'Dispara projéteis em até 2 inimigos ao mesmo tempo e os amaldiçoa. Causa dano a todos os inimigos amaldiçoados.',
		  	'Spara proiettili fino a 2 nemici alla volta e li maledice. Infligge danni a tutti i nemici maledetti.',
		  	'Schießt Projektile auf bis zu 2 Gegner gleichzeitig und verflucht sie. Verursacht Schaden an allen verfluchten Gegnern.',
		  	'最大2体の敵に同時に弾を放ち、呪いをかける。呪われた敵全員にダメージを与える。',
		  	'최대 2명의 적에게 투사체를 발사해 저주를 걸며, 저주받은 모든 적에게 피해를 준다.'
		]
	},
	poisonDoubleShot: {
		id: 'poisonDoubleShot',
		name: ['Poison DoubleShot', 'Doble Veneno', 'Double Poison', 'Duplo Veneno', 'Doppio Veleno', 'Gift-Doppelschuss', 'どくダブルショット', '독 더블샷'],
		description: [
			`Shoots projectiles at up to 2 enemies at once and applies 1 stack of poison. The target loses 0.1% health per second per stack.`,
			`Dispara proyectiles hasta a 2 enemigos a la vez y aplica 1 carga de veneno. El objetivo pierde 0.1% de vida por segundo por cada carga.`,
			`Tire des projectiles sur jusqu’à 2 ennemis à la fois et applique 1 accumulation de poison. La cible perd 0,1 % de sa vie par seconde par accumulation.`,
			`Dispara projéteis em até 2 inimigos ao mesmo tempo e aplica 1 carga de veneno. O alvo perde 0,1% de vida por segundo por carga.`,
			`Spara proiettili fino a 2 nemici contemporaneamente e applica 1 carica di veleno. Il bersaglio perde lo 0,1% di vita al secondo per ogni carica.`,
			`Feuert Projektile gleichzeitig auf bis zu 2 Gegner ab und wendet 1 Giftstapel an. Das Ziel verliert pro Stapel 0,1% Gesundheit pro Sekunde.`,
			`最大2体の敵に向かって弾を撃ち、毒1スタックを付与する。対象はスタックごとに1秒あたり0.1%のHPを失う。`,
			`한 번에 최대 2명의 적에게 투사체를 발사하고 독 1스택을 적용합니다. 대상은 스택당 초당 0.1% 체력을 잃습니다.`
		]
	},
	spinda: {
		id: 'spinda',
		name: ['Own Tempo', 'Tumbos', 'Tempo Perso', 'Ritmo Próprio', 'Ritmo Proprio', 'Eigene Tempo', 'マイペース', '마이페이스'],
		description: [
			'Has trouble focusing.', 
			'Tiene problemas para mantener el foco.', 
			'A du mal à rester concentré.', 
			'Tem problemas para manter o foco.', 
			'Ha difficoltà a mantenere la concentrazione.', 
			'Hat Probleme, sich zu konzentrieren.', 
			'集中力を保つのが難しい。', 
			'집중하는 데 어려움이 있다.'
		]
	},
	slowSplash: {
		id: 'slowSplash',
		name: ['Slow Splash', 'Slow Splash', 'Slow Splash', 'Slow Splash', 'Slow Splash', 'Slow Splash', 'ゆっくりはねる', '느린 첨벙'],
		description: [
			'Projectiles explode in an area, dealing half damage to nearby enemies and slowing them for 2 seconds.',
			'Los proyectiles explotan en área, causando la mitad de daño a enemigos cercanos y ralentizándolos durante 2 segundos.',
			'Les projectiles explosent dans une zone, infligeant la moitié des dégâts aux ennemis proches et les ralentissant pendant 2 secondes.',
			'Os projéteis explodem em área, causando metade do dano aos inimigos próximos e os desacelerando por 2 segundos.',
			'I proiettili esplodono in un’area, infliggendo metà danno ai nemici vicini e rallentandoli per 2 secondi.',
			'Projektile explodieren in einem Bereich, verursachen halben Schaden an nahegelegenen Gegnern und verlangsamen sie 2 Sekunden lang.',
			'弾は範囲で爆発し、近くの敵に半分のダメージを与え、2秒間減速させる。',
			'투사체가 범위 내에서 폭발하여 근처 적에게 절반의 피해를 주고 2초 동안 느리게 만듭니다.'
		]
	},
	synchronySplash: {
		id: 'synchronySplash',
		name: ['Synchrony', 'Sincronía', 'Synchronisation', 'Sincronia', 'Sincronia', 'Synchronisation', 'シンクロ', '싱크로'] ,
		description: [
			'Projectiles explode in an area, dealing half damage to nearby enemies and spreading the main target’s prejudices.',
			'Los proyectiles explotan en área, causando la mitad de daño a enemigos cercanos y propagando los prejuicios del objetivo principal.',
			'Les projectiles explosent dans une zone, infligeant la moitié des dégâts aux ennemis proches et propageant les préjugés de la cible principale.',
			'Os projéteis explodem em área, causando metade do dano aos inimigos próximos e propagando os preconceitos do alvo principal.',
			'I proiettili esplodono in un’area, infliggendo metà danno ai nemici vicini e propagando i pregiudizi del bersaglio principale.',
			'Projektile explodieren in einem Bereich, verursachen halben Schaden an nahegelegenen Gegnern und verbreiten die Vorurteile des Hauptziels.',
			'弾は範囲で爆発し、近くの敵に半分のダメージを与え、主目標の偏見を伝播させる。',
			'투사체가 범위 내에서 폭발하여 근처 적에게 절반의 피해를 주고 주요 대상의 편견을 전파합니다.'
		]
	},
	castform: {
		id: 'castform',
		name: ['Forecast', 'Cambio Climático', 'Météo', 'Previsão', 'Previsioni', 'Wettervorhersage', 'てんきや', '기후조절'],
		description: [
			'Multiplies its damage by 2 in tall grass, its speed by 2 in water, and its range by 2 in mountains.',
			'Multiplica su daño x2 en hierba alta, su velocidad x2 en agua, y su alcance x2 en montaña.',
			'Multiplie ses dégâts par 2 dans les hautes herbes, sa vitesse par 2 dans l’eau, et sa portée par 2 en montagne.',
			'Multiplica seu dano por 2 em grama alta, sua velocidade por 2 na água e seu alcance por 2 na montanha.',
			'Moltiplica il suo danno x2 in erba alta, la sua velocità x2 in acqua e il suo raggio d’azione x2 in montagna.',
			'Multipliziert seinen Schaden x2 im hohen Gras, seine Geschwindigkeit x2 im Wasser und seine Reichweite x2 im Gebirge.',
			'高い草ではダメージが2倍、水中では速度が2倍、山では射程が2倍になる。',
			'높은 풀에서는 피해가 2배, 물에서는 속도가 2배, 산에서는 사정거리가 2배가 됩니다.'
		]
	},
	star: {
		id: 'star',
		name: ['star', 'estrella', 'étoile', 'estrela', 'stella', 'Stern', 'スター', '별'],
		description: [
			'Attacks deal 1 additional damage for each star.',
			'Los ataques hacen 1 de daño adicional por cada estrella.',
			'Les attaques infligent 1 dégât supplémentaire par étoile.',
			'Os ataques causam 1 de dano adicional por estrela.',
			'Gli attacchi infliggono 1 danno aggiuntivo per ogni stella.',
			'Angriffe verursachen 1 zusätzlichen Schaden pro Stern.',
			'攻撃は星1つごとに追加で1ダメージを与える。',
			'공격은 별 하나당 1의 추가 피해를 입힙니다.'
		]
	},
	teleport: {
		id: 'teleport',
		name: ['teleport', 'teleport', 'teleport', 'teleport', 'teleport', 'teleport', 'テレポート', '텔레포트'],
		description: [
			'Teleports periodically whenever possible. Each teleport grants 100% stackable damage to the next attack.',
			'Se teleporta periódicamente cuando sea posible. Cada teleport otorga 100% de daño acumulable para el siguiente ataque.',
			'Se téléporte périodiquement lorsque c’est possible, Chaque téléportation confère 100 % de dégâts cumulables à la prochaine attaque.',
			'Teleporta-se periodicamente quando possível. Cada teleporte concede 100% de dano acumulável ao próximo ataque.',
			'Si teletrasporta periodicamente quando possibile. Ogni teletrasporto garantisce il 100% di danno cumulabile al prossimo attacco.',
			'Teleportiert sich periodisch, wann immer möglich. Jede Teleportation verleiht 100 % stapelbaren Schaden für den nächsten Angriff.',
			'可能な場合に定期的にテレポートし、テレポート1回ごとに次の攻撃のダメージが100％ずつ累積で増加する。',
			'가능할 때 주기적으로 텔레포트하며, 텔레포트할 때마다 다음 공격에 100%의 누적 피해가 부여됩니다.'
		]
	},
	nightmare: {
		id: 'nightmare',
		name: ['nightmare', 'pesadilla', 'cauchemar', 'pesadelo', 'incubo', 'Albtraum', 'ナイトメア', '악몽'],
		description: [
			'Attacks apply 1 nightmare stack. Each stack deals damage equal to 20% of this Pokémon’s power per second.',
			'Los ataques aplican 1 carga de pesadilla. Cada carga causa un daño igual al 20% del poder de este Pokémon cada segundo.',
			'Les attaques appliquent 1 accumulation de cauchemar. Chaque accumulation inflige des dégâts égaux à 20 % de la puissance de ce Pokémon par seconde.',
			'Os ataques aplicam 1 carga de pesadelo. Cada carga causa dano igual a 20% do poder deste Pokémon por segundo.',
			'Gli attacchi applicano 1 carica di incubo. Ogni carica infligge danno pari al 20% del potere di questo Pokémon ogni secondo.',
			'Angriffe wenden 1 Albtraum-Stapel an. Jeder Stapel verursacht Schaden in Höhe von 20% der Kraft dieses Pokémon pro Sekunde.',
			'攻撃はナイトメア1スタックを付与する。各スタックはこのポケモンの力の20%のダメージを毎秒与える。',
			'공격은 악몽 1스택을 적용합니다. 각 스택은 이 포켓몬 능력치의 20% 피해를 매초 입힙니다.'
		]
	},
	bastiodon: {
		id: 'bastiodon',
		name: ['Fossil Speed', 'Velocidad Fósil', 'Vitesse Fossile', 'Velocidade Fóssil', 'Velocità Fossile', 'Fossilgeschwindigkeit', '化石の速さ', '화석 속도'],
		description: [
			'Reduces recharge time by 0.5s for each Fossil Pokémon on the team.',
			'Reduce 0.5s la velocidad de recarga por cada Pokémon Fósil en el equipo.',
			'Réduit le temps de rechargement de 0,5 s pour chaque Pokémon Fossile dans l’équipe.',
			'Reduz 0,5s do tempo de recarga para cada Pokémon Fóssil na equipe.',
			'Riduce il tempo di ricarica di 0,5 s per ogni Pokémon Fossile nella squadra.',
			'Verringert die Nachladezeit um 0,5 s für jedes Fossil-Pokémon im Team.',
			'チームにいる化石ポケモン1体ごとにリロード時間が0.5秒短くなる。',
			'팀에 있는 화석 포켓몬마다 재장전 시간이 0.5초 감소합니다.'
		]
	},
	rampardos: {
		id: 'rampardos',
		name: ['Rock Head', 'Cabeza de Roca', 'Tête de Roc', 'Cabeça de Pedra', 'Testa di Roccia', 'Felskopf', 'いしあたま', '바위 머리'],
		description: [
			'Increases damage by 5% for each missing heart.',
			'Aumenta 5% el daño por cada corazón faltante.',
			'Augmente les dégâts de 5 % pour chaque cœur manquant.',
			'Aumenta 5% do dano por cada coração faltante.',
			'Aumenta il danno del 5% per ogni cuore mancante.',
			'Erhöht den Schaden um 5 % für jedes fehlende Herz.',
			'失われたハート1つごとにダメージが5%増加する。',
			'잃은 하트마다 피해가 5% 증가합니다.'
		]
	},
	armaldo: {
		id: 'armaldo',
		name: ['Critical Ricochet', 'Rebote Critico', 'Ricochet critique', 'Ricochete crítico', 'Rimbalzo critico', 'Kritischer Abpraller', 'クリティカルリコシェ', '크리티컬 리코셰'],
		description: [
			'Critical projectiles ricochet between enemies and keep ricocheting as long as they remain critical.',
			'Los proyectiles críticos rebotan entre los enemigos, y siguen rebotando mientras sean críticos.',
			'Les projectiles critiques ricochent entre les ennemis et continuent de ricocher tant qu’ils restent critiques.',
			'Projéteis críticos ricocheteiam entre os inimigos e continuam ricocheteando enquanto forem críticos.',
			'I proiettili critici rimbalzano tra i nemici e continuano a rimbalzare finché restano critici.',
			'Kritische Projektile prallen zwischen Gegnern ab und prallen weiter, solange sie kritisch bleiben.',
			'クリティカルの弾は敵の間を跳ね返り、クリティカルである限り跳ね続ける。',
			'크리티컬 탄환은 적들 사이를 튕기며, 크리티컬인 동안 계속 튕깁니다.'
		]
	},
	cradily: {
		id: 'cradily',
		name: ['Fossil Projectile', 'Proyectil Fósil', 'Projectile Fossile', 'Projétil Fóssil', 'Proiettile Fossile', 'Fossiliengeschoss', '化石の弾', '화석 투사체'],
		description: [
			'Shoots one projectile for each Fossil Pokémon on the team. Attacks slow the target for 2 seconds.',
			'Dispara un proyectil por cada Pokémon Fósil en el equipo. Los ataques ralentizan al objetivo durante 2 segundos.',
			'Tire un projectile pour chaque Pokémon Fossile dans l’équipe. Les attaques ralentissent la cible pendant 2 secondes.',
			'Dispara um projétil para cada Pokémon Fóssil na equipe. Os ataques desaceleram o alvo por 2 segundos.',
			'Spara un proiettile per ogni Pokémon Fossile nella squadra. Gli attacchi rallentano il bersaglio per 2 secondi.',
			'Feuert für jedes Fossil-Pokémon im Team ein Projektil ab. Angriffe verlangsamen das Ziel 2 Sekunden lang.',
			'チームにいる化石ポケモン1体ごとに弾を1発撃つ。攻撃は対象を2秒間遅くする。',
			'팀에 있는 화석 포켓몬마다 탄환을 1개 발사합니다. 공격은 대상을 2초 동안 느리게 합니다.'
		]
	},
	transform: {
		id: 'transform',
		name: ['Transform', 'Transform', 'Transform', 'Transform', 'Transform', 'Verwandlung', 'へんしん', '변신'],
		description: [
			'Transforms into the first Pokémon in the party, copying its stats and ability adjusted to Ditto’s level.', 
			'Se transforma en el primer Pokémon del grupo, copiando sus estadísticas y habilidad adaptadas al nivel de Ditto.', 
			'Il se transforme en le premier pokémon de l’équipe, en copiant ses statistiques et son talent ajustés au niveau de Métamorph.', 
			'Transforma-se no primeiro Pokémon do grupo, copiando seus atributos e habilidade ajustados ao nível de Ditto.', 
			'Si trasforma nel primo Pokémon della squadra, copiandone le statistiche e l’abilità adattate al livello di Ditto.', 
			'Es verwandelt sich in das erste Pokémon im team und kopiert dessen werte und fähigkeit, angepasst an Dittos level.', 
			'メタモンのレベルに合わせて、手持ちの先頭のポケモンに変身し、その能力値と特性をコピーする。', 
			'메타몽의 레벨에 맞추어 파티의 첫 번째 포켓몬으로 변신하며, 그 능력치와 특성을 복사한다.']
	},
}
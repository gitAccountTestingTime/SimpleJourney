import { Scene } from '../../story-manager';

/**
 * MERCHANT SYSTEM: Traveling merchant who appears at various story points
 * offering items that provide stat boosts, hidden attributes, or story advantages
 */

export const TravelingMerchantIntro: Scene = {
	id: 'traveling_merchant_intro',
	text: `A colorful wagon sits by the roadside creating splash of vibrant hues against the muted natural tones of surrounding countryside, painted in swirling patterns of red, gold, and azure that catch sunlight and seem to shimmer with almost hypnotic quality suggesting either magical enhancement or simply exceptionally skilled artistry. Two sturdy horses with glossy coats and intelligent eyes stamp patiently in their traces, clearly well-cared-for animals accustomed to long journeys and comfortable routine of their traveling life. The wagon itself is surprisingly large once you look past the decorative exterior, clearly designed to maximize storage while maintaining maneuverability on roads ranging from well-maintained highways to barely-marked wilderness trails.

A merchant with an impressive mustache waxed to elaborate curling points that must require daily maintenance waves cheerfully as you approach, his body language open and welcoming without the desperate eagerness that marks less successful peddlers trying too hard to attract customers who can sense desperation and avoid it instinctively. He's dressed in practical traveling clothes of good quality that show signs of extensive use without looking shabby - the attire of someone who works for living but earns well doing it.

"Greetings, traveler! Name's Barnaby Quickfingers - and before you ask, yes that's my real name, family trade going back five generations of merchants who pride themselves on quick transactions and even quicker fingers when counting coin accurately." He grins with infectious enthusiasm that seems genuine rather than performed. "I'm a purveyor of rare goods and useful wares from across the kingdom and beyond, items you won't find in ordinary village shops because I deal in specialty merchandise for discerning customers. I've got items that might interest someone on an... important journey like yours appears to be based on your equipment and bearing." He winks knowingly, suggesting he's perceptive enough to recognize adventurers from common travelers.

He gestures expansively to his wares spread carefully on expensive-looking cloth that protects merchandise from dirt while displaying it attractively, each item positioned to catch light and draw attention. "I accept gold coin naturally, and my prices are fair for quality offered - you won't find better value traveling these roads, I guarantee it. Take a look and see if anything catches your interest! No pressure, but opportunity knocks rarely in wilderness between settlements."`,
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { merchant_reputation: 5 } },
			text: `The familiar colorful wagon sits by the roadside, and you feel genuine warmth of recognition seeing Barnaby's distinctive setup that's become reassuring constant during your journey through uncertain times. Barnaby Quickfingers spots you approaching and his face lights up with expression combining professional pleasure at valued customer's return with what appears to be authentic personal affection transcending mere business relationship.

"Ah! My favorite customer returns!" He beams with enthusiasm that makes his elaborate mustache quiver expressively. "I was hoping our paths would cross again - been thinking about you actually, wondering how your adventures were progressing and whether you were still alive given the dangers you seem to seek out regularly." He laughs warmly. "I've saved some special items just for you, pieces I acquired specifically thinking you'd appreciate them and which I haven't shown to other customers because frankly they wouldn't recognize quality if it bit them. For a loyal patron who's given me consistent business and never once tried to cheat me or damage my reputation with false complaints, I might even offer a discount that would make my accountant weep." He winks conspiratorially.

His wares are spread before you with particular care today, each item polished and positioned for optimal display, glinting enticingly in the light as if eager to find worthy owner who'll use them for grand purposes rather than letting them rust in some noble's trophy room.`
		},
		{
			conditions: { stats: { wealth: { min: 100 } } },
			text: `A colorful wagon sits by the roadside, and the merchant's eyes light up with professional appreciation that's impossible to fake completely as he notices your well-maintained equipment showing quality craftsmanship and careful upkeep, confident bearing that marks you as experienced rather than novice, and most tellingly the heavy coin purse hanging at your belt that speaks volumes about your recent successes in whatever ventures you've been pursuing.

"Welcome, welcome indeed! A prosperous traveler, I see - always a pleasure to meet someone who's clearly earned their fortune rather than just inheriting it and squandering on frivolous luxuries." His tone shifts from general sales pitch to specialized consultation recognizing you as customer worth cultivating for long-term relationship. "Someone of your means deserves only the finest goods available, items that match your obvious success and will serve you well in future challenges that I'm certain someone like you actively seeks out. Let me show you my premium collection - pieces I keep reserved for customers who can both afford them and appreciate their true value rather than just their status as expensive acquisitions!"

He unveils an impressive array of high-quality wares with flourish that suggests showmanship skills honed over years of selling to discriminating customers, each item clearly selected for superior craftsmanship and effectiveness rather than just superficial attractiveness to casual browsers.`
		}
	],
	choices: [
		{
			id: 'view-wares',
			text: 'Browse his wares',
			next: 'merchant_shop_main'
		},
		{
			id: 'continue-journey',
			text: 'Politely decline and continue your journey',
			outcomes: [
				{
					conditions: { hasFlags: ['merchant_act3_visit:true'] },
					next: 'crystal_hunt_start',
					effects: { wisdom: 1 }
				},
				{
					conditions: { hasFlags: ['merchant_act2_visit:true'] },
					next: 'kingdom_briefing',
					effects: { wisdom: 1 }
				},
				{
					conditions: { hasFlags: ['merchant_at_manor:true'] },
					next: 'rowan_formal_introduction',
					effects: { wisdom: 1 }
				},
				{
					next: 'discovery_at_silverwood',
					effects: { wisdom: 1 }
				}
			]
		}
	]
};

export const MerchantShopMain: Scene = {
	id: 'merchant_shop_main',
	text: `Barnaby displays his wares with obvious pride of craftsman and merchant who's built reputation on quality rather than just volume of sales, gesturing to each category with practiced showmanship that draws attention without feeling manipulative:

**WEAPONS & ARMOR**
• Enchanted Steel Sword - 50 gold (Boost: Strength +3, Courage +2)
  *Forged by master smith and enchanted to hold perfect edge indefinitely*
• Elven Leather Armor - 45 gold (Boost: Vitality +4, Luck +1)
  *Crafted by elven artisans using techniques that take decades to master*

**MAGICAL ITEMS**
• Amulet of Clarity - 60 gold (Boost: Wisdom +4, Empathy +2)
  *Focuses mind and enhances perception of others' emotions and intentions*
• Ring of Charm - 40 gold (Boost: Charisma +3, Reputation +5)
  *Subtle enchantment that makes you more likeable without mind control*

**CONSUMABLES**
• Superior Health Potion - 30 gold (Restore: Health +20)
  *Alchemist-grade healing with none of the bitter aftertaste of cheap varieties*
• Elixir of Courage - 25 gold (Boost: Courage +5 for next challenge)
  *Steadies nerves and sharpens reflexes when facing dangerous situations*

**KNOWLEDGE**
• Ancient Maps Bundle - 35 gold (Reveals: Hidden locations, shortcuts)
  *Copied from explorer's journals detailing paths most travelers never find*
• Etiquette Manual - 20 gold (Boost: Charisma +2, Political knowledge)
  *Essential guide to not offending nobles who control your fate*

Your current gold: [wealth]

"Take your time, friend! Quality goods are worth the investment - buy cheap, pay twice when inferior equipment fails at critical moment. These items will serve you well through whatever challenges you're facing, and trust me, I can tell you're facing significant ones based on your destination and determined expression."`,
	textVariants: [
		{
			conditions: { stats: { wealth: { max: 20 } } },
			text: `Barnaby displays his wares with usual pride, though you can't help noticing the weight - or rather lack thereof - of your coin purse feeling uncomfortably light against your hip as reality of your financial situation becomes apparent when considering these prices that seemed reasonable in abstract but feel daunting when compared to actual resources available:

**AFFORDABLE OPTIONS**
• Simple Steel Dagger - 15 gold (Boost: Strength +1, Courage +1)
  *Honest blade that will serve you well even if it lacks magical enhancement*
• Healing Herbs Bundle - 10 gold (Restore: Health +10)
  *Traditional remedies that work slower than potions but cost fraction of price*
• Traveler's Guide - 12 gold (Boost: Wisdom +1, Luck +1)
  *Practical advice from experienced travelers about surviving on the road*

**PREMIUM ITEMS** (Not enough gold currently)
• Enchanted Steel Sword - 50 gold
• Amulet of Clarity - 60 gold
• Elven Leather Armor - 45 gold

Your current gold: [wealth]

Barnaby notices your situation with sympathetic expression suggesting he's been there himself long ago and remembers the struggle. "Starting out financially constrained, eh? Everyone does when beginning adventuring career - the stories never mention how expensive heroism actually is between equipment, supplies, bribes, and unexpected costs that drain purse faster than you can imagine. These affordable items are still quality goods though, I guarantee it! I built my reputation on never selling trash regardless of price point, because poor adventurers remember who treated them fairly when they eventually become wealthy customers. Buy what you can afford now, and when fortune turns as it often does for those brave enough to seek it, come back for the premium items. I'll still be traveling these roads."`,
		}
	],
	choices: [
		{
			id: 'buy-sword',
			text: 'Buy Enchanted Steel Sword (50 gold)',
			next: 'merchant_shop_main',
			effects: { wealth: -50, strength: 3, courage: 2 },
			hiddenEffects: {
				merchant_reputation: 3,
				enchanted_weapon: true,
				combat_advantage: true
			},
			requirements: { wealth: { min: 50 } }
		},
		{
			id: 'buy-armor',
			text: 'Buy Elven Leather Armor (45 gold)',
			next: 'merchant_shop_main',
			effects: { wealth: -45, vitality: 4, luck: 1 },
			hiddenEffects: {
				merchant_reputation: 3,
				elven_armor: true,
				defense_boost: true
			},
			requirements: { wealth: { min: 45 } }
		},
		{
			id: 'buy-amulet',
			text: 'Buy Amulet of Clarity (60 gold)',
			next: 'merchant_shop_main',
			effects: { wealth: -60, wisdom: 4, empathy: 2 },
			hiddenEffects: {
				merchant_reputation: 4,
				clarity_amulet: true,
				magical_insight: true
			},
			requirements: { wealth: { min: 60 } }
		},
		{
			id: 'buy-ring',
			text: 'Buy Ring of Charm (40 gold)',
			next: 'merchant_shop_main',
			effects: { wealth: -40, charisma: 3, reputation: 5 },
			hiddenEffects: {
				merchant_reputation: 3,
				charm_ring: true,
				social_advantage: true
			},
			requirements: { wealth: { min: 40 } }
		},
		{
			id: 'buy-potion',
			text: 'Buy Superior Health Potion (30 gold)',
			next: 'merchant_shop_main',
			effects: { wealth: -30, health: 20 },
			hiddenEffects: {
				merchant_reputation: 2,
				health_potion: true
			},
			requirements: { wealth: { min: 30 } }
		},
		{
			id: 'buy-elixir',
			text: 'Buy Elixir of Courage (25 gold)',
			next: 'merchant_shop_main',
			effects: { wealth: -25, courage: 5 },
			hiddenEffects: {
				merchant_reputation: 2,
				courage_boost: true
			},
			requirements: { wealth: { min: 25 } }
		},
		{
			id: 'buy-maps',
			text: 'Buy Ancient Maps Bundle (35 gold)',
			next: 'merchant_shop_main',
			effects: { wealth: -35, wisdom: 2 },
			hiddenEffects: {
				merchant_reputation: 2,
				ancient_maps: true,
				hidden_paths_known: true,
				exploration_advantage: true
			},
			requirements: { wealth: { min: 35 } }
		},
		{
			id: 'buy-manual',
			text: 'Buy Etiquette Manual (20 gold)',
			next: 'merchant_shop_main',
			effects: { wealth: -20, charisma: 2 },
			hiddenEffects: {
				merchant_reputation: 1,
				etiquette_learned: true,
				noble_knowledge: true
			},
			requirements: { wealth: { min: 20 } }
		},
		{
			id: 'buy-dagger',
			text: 'Buy Simple Steel Dagger (15 gold)',
			next: 'merchant_shop_main',
			effects: { wealth: -15, strength: 1, courage: 1 },
			hiddenEffects: {
				merchant_reputation: 1,
				basic_weapon: true
			},
			requirements: { wealth: { min: 15 } }
		},
		{
			id: 'buy-herbs',
			text: 'Buy Healing Herbs Bundle (10 gold)',
			next: 'merchant_shop_main',
			effects: { wealth: -10, health: 10 },
			hiddenEffects: {
				merchant_reputation: 1,
				healing_herbs: true
			},
			requirements: { wealth: { min: 10 } }
		},
		{
			id: 'buy-guide',
			text: 'Buy Traveler\'s Guide (12 gold)',
			next: 'merchant_shop_main',
			effects: { wealth: -12, wisdom: 1, luck: 1 },
			hiddenEffects: {
				merchant_reputation: 1,
				travelers_guide: true
			},
			requirements: { wealth: { min: 12 } }
		},
		{
			id: 'haggle',
			text: 'Try to haggle for better prices',
			next: 'merchant_haggle',
			effects: { charisma: 1 }
		},
		{
			id: 'finish-shopping',
			text: 'Finish shopping and continue journey',
			next: 'merchant_farewell'
		}
	]
};

export const MerchantHaggle: Scene = {
	id: 'merchant_haggle',
	text: `You attempt to negotiate with Barnaby, employing various tactics learned through observing market transactions and reading situations to determine best approach. He strokes his impressive mustache thoughtfully while studying you with sharp merchant's eyes that evaluate both your sincerity and your skill at negotiation, clearly deciding whether you're attempting legitimate business discussion or just trying to take advantage of him through manipulation that would damage relationship rather than build it.

The moment stretches as he considers, weighing potential profit from maintaining full price against value of cultivating long-term customer who might bring more business over time if treated fairly now. His expression shifts subtly through micro-expressions that reveal internal calculation happening behind friendly merchant persona.`,
	choices: [
		{
			id: 'charm-discount',
			text: 'Use charm and flattery to get a discount',
			next: 'merchant_shop_discount',
			outcomes: [
				{
					conditions: { stats: { charisma: { min: 15 } } },
					effects: { charisma: 2 },
					hiddenEffects: {
						merchant_discount: 10,
						barnaby_charmed: true
					}
				},
				{
					next: 'merchant_shop_main',
					effects: { charisma: 1 },
					hiddenEffects: {
						haggle_failed: true
					}
				}
			]
		},
		{
			id: 'appeal-friendship',
			text: 'Appeal to building a long-term business relationship',
			next: 'merchant_shop_discount',
			effects: { wisdom: 2, charisma: 1 },
			hiddenEffects: {
				merchant_discount: 5,
				merchant_friend: true
			}
		},
		{
			id: 'never-mind',
			text: 'Never mind, pay full price',
			next: 'merchant_shop_main'
		}
	]
};

export const MerchantShopDiscount: Scene = {
	id: 'merchant_shop_discount',
	text: `Barnaby grins with expression that combines amusement at your negotiation skills, respect for well-executed business tactics, and slight resignation of merchant who recognizes when customer has earned concession through legitimate persuasion rather than manipulation. "You drive a hard bargain, and I respect that quality in people! Alright, I'll give you a discount on your next purchase because honestly you've demonstrated exactly the kind of savvy that makes someone likely to succeed in their ventures and return as wealthy customer worth cultivating relationship with. Can't resist a skilled negotiator who understands that best business relationships involve mutual benefit rather than one party trying to maximize advantage at other's expense!"

He pulls out small wooden token carved with his merchant's mark and hands it to you with ceremonial flourish. "Show this when making your next purchase. All items are now 10% cheaper for your next transaction - don't lose it though, because I only give these to customers I actually like and respect rather than just tolerate for their money!"`,
	choices: [
		{
			id: 'continue-shopping',
			text: 'Continue shopping with discount',
			next: 'merchant_shop_main'
		}
	]
};

export const MerchantFarewell: Scene = {
	id: 'merchant_farewell',
	text: `Barnaby tips his hat with practiced gesture that manages to be both courteous and theatrical, his elaborate mustache catching sunlight as he moves. "Pleasure doing business with you as always! Keep your eyes open as you travel - I travel these roads often following regular circuit through kingdom's major routes and minor byways, so we'll likely cross paths again when you least expect it and most need supplies." He winks knowingly. "Merchants like me have sense for these things - we tend to show up exactly when customers need us most, call it professional instinct or good luck or maybe just consequence of traveling same dangerous roads that adventurers frequent."

He climbs onto his wagon with agility that belies the apparent bulk of his traveling merchant's build, settling into driver's seat worn smooth from years of use. With a crack of the reins and cheerful command to his horses who respond immediately to familiar signals, the colorful wagon lurches into motion and continues down the road. The distinctive paint catches light as it moves away, remaining visible for surprisingly long time until finally disappearing around distant curve, leaving you with your purchases and memories of transaction conducted fairly.`,
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { merchant_reputation: 5 } },
			text: `Barnaby clasps your hand warmly with firm grip that speaks to genuine affection transcending commercial relationship, holding the handshake moment longer than professional courtesy requires. "You've been a wonderful customer and honestly a delightful person to interact with repeatedly! Business is more enjoyable when you like the people you're serving rather than just tolerating them for profit. Here, take this as a token of my appreciation for your loyalty and pleasant demeanor throughout our many transactions."

He reaches into inner pocket of his traveling coat and pulls out a small bronze token intricately engraved with symbols representing various merchant guilds throughout kingdom, clearly valuable both materially and symbolically. "Show this to any merchant in the kingdom worth their salt - they'll recognize Barnaby Quickfingers' personal recommendation mark and know you're under my endorsement. It'll open doors that normally remain closed to strangers, grant you access to better merchandise than merchants show casual customers, and possibly save your life if you need assistance in cities where my reputation carries weight. I don't give these lightly - you've earned it through consistent fair dealing and being genuinely good person rather than just calculating customer."

Your items: Bronze Merchant Token (+5 Reputation with all merchants who recognize Barnaby's mark, grants access to premium merchant networks)

He climbs onto his wagon with visible reluctance to part ways, waving enthusiastically as horses pull vehicle into motion. "Until we meet again, friend - and I do mean friend in literal sense rather than just commercial politeness! Safe travels and may fortune favor you in whatever mad ventures you pursue next!"`
		}
	],
	choices: [
		{
			id: 'continue',
			text: 'Continue your journey',
			outcomes: [
				{
					conditions: { hasFlags: ['merchant_act3_visit:true'] },
					next: 'crystal_hunt_start'
				},
				{
					conditions: { hasFlags: ['merchant_act2_visit:true'] },
					next: 'kingdom_briefing'
				},
				{
					conditions: { hasFlags: ['merchant_at_manor:true'] },
					next: 'rowan_formal_introduction'
				},
				{
					next: 'discovery_at_silverwood'
				}
			]
		}
	]
};

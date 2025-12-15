import { Scene } from '../../story-manager';

/**
 * MERCHANT SYSTEM: Traveling merchant who appears at various story points
 * offering items that provide stat boosts, hidden attributes, or story advantages
 */

export const TravelingMerchantIntro: Scene = {
	id: 'traveling_merchant_intro',
	text: `A colorful wagon sits by the roadside, pulled by two sturdy horses. A merchant with an impressive mustache waves cheerfully as you approach.

"Greetings, traveler! Name's Barnaby Quickfingers, purveyor of rare goods and useful wares. I've got items that might interest someone on an... important journey." He winks knowingly.

He gestures to his wares spread on a cloth. "I accept gold coin, naturally. Take a look!"`,
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { merchant_reputation: 5 } },
			text: `The familiar colorful wagon sits by the roadside. Barnaby Quickfingers greets you warmly.

"Ah! My favorite customer returns!" He beams. "I've saved some special items just for you. For a loyal patron, I might even offer a discount." He winks.

His wares are spread before you, glinting enticingly in the light.`
		},
		{
			conditions: { stats: { wealth: { min: 100 } } },
			text: `A colorful wagon sits by the roadside. The merchant's eyes light up as he notices your well-maintained equipment and heavy coin purse.

"Welcome, welcome! A prosperous traveler, I see. Someone of your means deserves only the finest goods. Let me show you my premium collection!"

He unveils an impressive array of high-quality wares.`
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
	text: `Barnaby displays his wares with pride:

**WEAPONS & ARMOR**
• Enchanted Steel Sword - 50 gold (Boost: Strength +3, Courage +2)
• Elven Leather Armor - 45 gold (Boost: Vitality +4, Luck +1)

**MAGICAL ITEMS**
• Amulet of Clarity - 60 gold (Boost: Wisdom +4, Empathy +2)
• Ring of Charm - 40 gold (Boost: Charisma +3, Reputation +5)

**CONSUMABLES**
• Superior Health Potion - 30 gold (Restore: Health +20)
• Elixir of Courage - 25 gold (Boost: Courage +5 for next challenge)

**KNOWLEDGE**
• Ancient Maps Bundle - 35 gold (Reveals: Hidden locations, shortcuts)
• Etiquette Manual - 20 gold (Boost: Charisma +2, Political knowledge)

Your current gold: [wealth]

"Take your time, friend. Quality goods are worth the investment!"`,
	textVariants: [
		{
			conditions: { stats: { wealth: { max: 20 } } },
			text: `Barnaby displays his wares, though your coin purse feels light:

**AFFORDABLE OPTIONS**
• Simple Steel Dagger - 15 gold (Boost: Strength +1, Courage +1)
• Healing Herbs Bundle - 10 gold (Restore: Health +10)
• Traveler's Guide - 12 gold (Boost: Wisdom +1, Luck +1)

**PREMIUM ITEMS** (Not enough gold)
• Enchanted Steel Sword - 50 gold
• Amulet of Clarity - 60 gold
• Elven Leather Armor - 45 gold

Your current gold: [wealth]

Barnaby notices your situation. "Starting out, eh? Everyone does. These affordable items are still quality goods!"`
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
	text: `You attempt to negotiate with Barnaby. He strokes his mustache thoughtfully.`,
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
	text: `Barnaby grins. "You drive a hard bargain! Alright, I'll give you a discount on your next purchase. Can't resist a savvy negotiator!"

All items are now 10% cheaper for your next purchase!`,
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
	text: `Barnaby tips his hat. "Pleasure doing business with you! Keep your eyes open - I travel these roads often. We'll meet again, mark my words!"

He climbs onto his wagon, and with a crack of the reins, continues down the road.`,
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { merchant_reputation: 5 } },
			text: `Barnaby clasps your hand warmly. "You've been a wonderful customer! Here, take this as a token of my appreciation."

He hands you a small bronze token. "Show this to any merchant in the kingdom - they'll know you're under Barnaby's recommendation. It'll open doors!"

Your items: Bronze Merchant Token (+5 Reputation with all merchants)

He climbs onto his wagon with a wave. "Until we meet again, friend!"`
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

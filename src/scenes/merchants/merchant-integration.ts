import { Scene } from '../../story-manager';

const roadEncounter = `On the road to Silverwood Manor, you encounter a colorful caravan pulled by sturdy draft horses. Exotic fabrics and glinting metal peek from beneath canvas covers.`;

const merchantGreeting = `A well-dressed merchant steps down, adjusting their fine coat. "Travelers! Perfect timing. I'm Aldric Goldweave, purveyor of fine goods and exotic wares. Perhaps you'd like to browse my collection before continuing your journey?"`;

const timingNote = `Your companions exchange glances. You've earned some gold during your travels - this might be an opportunity to acquire useful equipment.`;

export const MerchantRoadEncounter: Scene = {
	id: 'merchant_road_encounter',
	text: `${roadEncounter}

${merchantGreeting}

${timingNote}`,
	textVariants: [
		{
			conditions: { stats: { wealth: { min: 100 } } },
			text: `${roadEncounter}

The merchant's eyes light up as they notice your well-maintained gear and confident bearing. "Ah, successful adventurers! I have some truly exceptional pieces you might appreciate - items befitting those who've clearly earned their fortune."

${timingNote}`
		},
		{
			conditions: { stats: { wealth: { max: 20 } } },
			text: `${roadEncounter}

${merchantGreeting}

You check your coin purse - funds are tight after your recent travels. Still, even a small purchase might prove valuable, and browsing costs nothing.`
		}
	],
	choices: [
		{
			id: 'browse-shop',
			text: 'Browse the merchant\'s wares',
			next: 'traveling_merchant_intro',
			effects: { wisdom: 1 },
			hiddenEffects: {
				merchant_encountered: true
			}
		},
		{
			id: 'polite-decline',
			text: 'Politely decline and continue to the manor',
			next: 'discovery_at_silverwood',
			effects: { wisdom: 1 },
			hiddenEffects: {
				merchant_declined: true
			}
		},
		{
			id: 'chat-merchant',
			text: 'Chat with the merchant about news and rumors',
			next: 'merchant_rumors',
			effects: { charisma: 2 },
			hiddenEffects: {
				merchant_befriended: true
			}
		}
	]
};

export const MerchantRumors: Scene = {
	id: 'merchant_rumors',
	text: `Aldric proves to be a fountain of information, having traveled extensively throughout the kingdom.

"Interesting times ahead," they say, lowering their voice. "The nobles are restless, shadow beasts grow bolder, and there's talk of someone claiming the Silverwood title - perhaps that's you?"

They study you with knowing eyes. "If you ever need supplies, equipment, or just a friendly ear, I travel these roads regularly. Successful adventurers make the best customers - and sometimes, the best friends."`,
	choices: [
		{
			id: 'browse-after-chat',
			text: 'Browse their wares after this pleasant conversation',
			next: 'traveling_merchant_intro',
			effects: { charisma: 1 },
			hiddenEffects: {
				merchant_rapport: 5,
				merchant_encountered: true
			}
		},
		{
			id: 'continue-journey',
			text: 'Thank them and continue your journey',
			next: 'discovery_at_silverwood',
			effects: { charisma: 1 },
			hiddenEffects: {
				merchant_friendly: true,
				merchant_future_discount: true
			}
		}
	]
};

// Act 2 merchant encounter - Capital marketplace
// Act 1 merchant encounter - Manor grounds
export const ManorGroundsMerchant: Scene = {
	id: 'manor_grounds_merchant',
	text: `A servant announces that a traveling merchant has arrived at the manor gates, requesting an audience with the new Lord/Lady of Silverwood.

Aldric Goldweave's colorful caravan is unmistakable. They bow respectfully when you approach. "My Lord/Lady, I heard of your arrival at Silverwood Manor and thought you might appreciate the opportunity to acquire quality equipment before your responsibilities fully settle in."

Your companions exchange glances. After exploring the manor and securing some funds, this might be a good time to make strategic purchases.`,
	textVariants: [
		{
			conditions: { hasFlags: ['merchant_encountered:true'] },
			text: `A familiar figure arrives at the manor gates - Aldric Goldweave, the merchant you met on the road.

They bow with a warm smile. "We meet again! I promised I traveled these roads regularly. Now that you're settled in your ancestral home, perhaps you'd like to see what new items I've acquired? I have some pieces that would suit a noble of your standing."`
		},
		{
			conditions: { stats: { wealth: { min: 150 } } },
			text: `Aldric Goldweave arrives at the manor with an impressive collection, clearly expecting a profitable meeting.

"Lord/Lady Silverwood," they say with genuine respect. "I've brought my finest wares. After exploring your manor's treasury, I imagine you're ready to invest in proper equipment for the challenges ahead."`
		},
		{
			conditions: { hasFlags: ['merchant_friendly:true'] },
			text: `Your new friend Aldric arrives at the manor gates, waving cheerfully.

"I hope you don't mind the visit! After our pleasant conversation on the road, I wanted to make sure you had access to quality supplies. Being a noble is expensive work, and I'd hate to see you under-equipped for what's coming."`
		}
	],
	choices: [
		{
			id: 'visit-shop',
			text: 'Visit the merchant and browse their wares',
			next: 'traveling_merchant_intro',
			effects: { wisdom: 1 },
			hiddenEffects: {
				merchant_manor_visit: true,
				merchant_at_manor: true
			}
		},
		{
			id: 'decline-busy',
			text: 'Politely decline - you have too many manor responsibilities',
			next: 'rowan_formal_introduction',
			effects: { wisdom: 1 },
			hiddenEffects: {
				merchant_declined_manor: true
			}
		},
		{
			id: 'invite-later',
			text: 'Invite them to stay - you\'ll visit their shop after meeting Rowan',
			next: 'rowan_formal_introduction',
			effects: { charisma: 2 },
			hiddenEffects: {
				merchant_invited: true,
				merchant_future_visit: true
			}
		}
	]
};

export const CapitalMarketplaceMerchant: Scene = {
	id: 'capital_marketplace_merchant',
	text: `Walking through the bustling capital marketplace, you spot a familiar colorful caravan among the merchant stalls.

Aldric Goldweave is negotiating with a noble when they catch sight of you. Their face lights up. "Lord/Lady Silverwood! What perfect timing - I've just acquired some exceptional items from the eastern provinces. Come, let me show you!"

The political tensions of Act 2 have left you battle-worn. Quality equipment could make all the difference.`,
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { merchant_reputation: 5 } },
			text: `You recognize Aldric's caravan immediately in the marketplace crowd.

They rush over, abandoning another customer. "My most valued patron! I've been hoping to see you. Word of your political maneuvering has reached every corner of the kingdom. I have items that might aid your cause - and for you, always the best price."`
		},
		{
			conditions: { hasFlags: ['merchant_declined:true'] },
			text: `You spot Aldric's caravan in the marketplace, though you've declined their services before.

They approach cautiously. "Lord/Lady Silverwood. I understand you're busy with matters of state, but I thought you might appreciate seeing my new inventory. No pressure - just wanted to let you know I'm here if you need anything."`
		},
		{
			conditions: { stats: { wealth: { min: 200 } } },
			text: `Aldric's eyes widen when they see your well-stocked coin purse and fine attire.

"My word! Political success clearly suits you well. I have premium items that someone of your standing would appreciate - magical artifacts recovered from ancient ruins, weapons forged by master craftsmen. Shall we discuss?"`
		}
	],
	choices: [
		{
			id: 'browse-wares',
			text: 'Browse their latest inventory',
			next: 'traveling_merchant_intro',
			effects: { wisdom: 1 },
			hiddenEffects: {
				merchant_act2_visit: true,
				merchant_rapport: 3
			}
		},
		{
			id: 'quick-purchase',
			text: 'Ask what they recommend for political conflicts',
			next: 'traveling_merchant_intro',
			effects: { charisma: 2 },
			hiddenEffects: {
				merchant_act2_visit: true,
				merchant_consultation: true
			}
		},
		{
			id: 'no-time',
			text: 'Politely decline - you have urgent political matters',
			next: 'kingdom_briefing',
			effects: { wisdom: 1 },
			hiddenEffects: {
				merchant_declined_act2: true
			}
		}
	]
};

// Act 3 merchant encounter - Before crystal hunt
export const CrystalQuestMerchant: Scene = {
	id: 'crystal_quest_merchant',
	text: `As you prepare for the dangerous crystal hunt, Aldric's caravan appears at your estate gates once more.

"Lord/Lady Silverwood," they call out. "Word reached me that you're embarking on a perilous quest. I couldn't let you leave without offering my finest equipment. The Crystal Heart fragments are protected by ancient magic and deadly guardians - you'll need every advantage."

They spread their wares with unusual gravity. "I've traded in dangerous items before, but these... these could save your life."`,
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { merchant_reputation: 10 } },
			text: `Aldric arrives at your gates personally, looking unusually serious.

"My dear friend," they say warmly. "I've been your supplier through everything - from unknown traveler to heir of the kingdom. Now you face your greatest challenge. These items..." They gesture to an extraordinary collection. "...are my finest work. Some I've held for years, waiting for someone worthy. Take what you need. We'll settle accounts when you return victorious."`
		},
		{
			conditions: { hasFlags: ['merchant_friendly:true'] },
			text: `Aldric's arrival is perfectly timed, as always.

"I have a sense for these things," they say with a knowing smile. "The Crystal Heart calls to you, and you'll need more than courage to succeed. Let me help outfit you properly - consider it an investment in the kingdom's future."`
		},
		{
			conditions: { stats: { wealth: { max: 50 } } },
			text: `Aldric notices your depleted funds with concern.

"The political campaigns have drained your resources, I see. No matter - I can offer credit to the future ruler of the kingdom. You can't hunt the Crystal fragments without proper equipment. Choose what you need; we'll settle the debt later."`
		}
	],
	choices: [
		{
			id: 'accept-help',
			text: 'Accept their help and browse the collection',
			next: 'traveling_merchant_intro',
			effects: { wisdom: 2, charisma: 1 },
			hiddenEffects: {
				merchant_act3_visit: true,
				merchant_loyalty: true,
				merchant_rapport: 5
			}
		},
		{
			id: 'ask-advice',
			text: 'Ask if they have information about the crystal fragments',
			next: 'merchant_crystal_intel',
			effects: { wisdom: 3 },
			hiddenEffects: {
				merchant_intel: true
			}
		},
		{
			id: 'decline-politely',
			text: 'Thank them but trust in your current equipment',
			next: 'crystal_hunt_start',
			effects: { courage: 2 },
			hiddenEffects: {
				merchant_declined_act3: true,
				self_reliant: true
			}
		}
	]
};

export const MerchantCrystalIntel: Scene = {
	id: 'merchant_crystal_intel',
	text: `Aldric's expression becomes thoughtful. "Information, you want? Well now, that's something I do trade in."

They lower their voice. "I've heard rumors from travelers across the kingdom. The Elven fragment is guarded by ancient wards that respond to sincerity and respect. The Dwarven fragment is locked in trials of strength and honor. The Dragon fragment... well, dragons don't part with treasures easily. And the Palace fragment is protected by your family's own blood magic."

They pull out a worn map. "I've marked locations where travelers have reported unusual magical signatures. It's not complete, but it might save you some time."`,
	choices: [
		{
			id: 'thank-and-shop',
			text: 'Thank them for the intel and browse their wares',
			next: 'traveling_merchant_intro',
			effects: { wisdom: 3 },
			hiddenEffects: {
				merchant_act3_visit: true,
				crystal_intel_received: true,
				merchant_rapport: 5
			}
		},
		{
			id: 'thank-and-leave',
			text: 'Thank them and begin your quest immediately',
			next: 'crystal_hunt_start',
			effects: { wisdom: 2, courage: 2 },
			hiddenEffects: {
				crystal_intel_received: true,
				well_prepared: true
			}
		}
	]
};

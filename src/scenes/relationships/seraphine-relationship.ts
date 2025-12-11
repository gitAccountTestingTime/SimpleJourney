import { Scene } from '../../story-manager';

/**
 * RELATIONSHIPS: Deep relationship building with Seraphine Brightwater
 * Progression: Noble Tutor → Genuine Friend → Romantic Interest (optional)
 * Themes: Class barriers, loneliness of perfection, bridging worlds, authentic connection
 */

export const SeraphineBonding1: Scene = {
	id: 'seraphine_bonding_1',
	text: `You find Seraphine in the library reviewing diplomatic protocols. She's in her element - perfectly poised, immaculately dressed, the picture of noble grace. But when she thinks no one's watching, her shoulders slump with exhaustion.

"Oh! Your Highness," she recovers instantly, perfect curtsy. "I was preparing materials for your etiquette lesson tomorrow. The Ironforge delegation expects specific formalities."

She gestures to stacks of documents. "I've organized everything by priority - greeting protocols, seating arrangements, gift-giving customs, appropriate conversation topics..." She trails off, noticing your expression. "Too much?"`,
	choices: [
		{
			id: 'ask-about-her',
			text: 'Ask about her, not just lessons - how is she?',
			next: 'seraphine_bonding_1b',
			effects: { empathy: 4, charisma: 3 },
			hiddenEffects: {
				seraphine_bond: 12,
				seraphine_surprised: true,
				personal_interest: true
			}
		},
		{
			id: 'notice-exhaustion',
			text: 'Notice her exhaustion and suggest taking a break',
			next: 'seraphine_bonding_1b',
			effects: { empathy: 5, wisdom: 2 },
			hiddenEffects: {
				seraphine_bond: 15,
				seraphine_seen: true,
				caring_gesture: true
			}
		},
		{
			id: 'challenge-formality',
			text: 'Gently challenge the excessive formality between you',
			next: 'seraphine_bonding_1b',
			effects: { charisma: 5, courage: 3 },
			hiddenEffects: {
				seraphine_bond: 14,
				seraphine_uncertain: true,
				breaking_barriers: true
			}
		}
	]
};

export const SeraphineBonding1B: Scene = {
	id: 'seraphine_bonding_1b',
	text: `Seraphine's perfect composure wavers. "I'm... managing," she says carefully. Then, perhaps because she's tired or perhaps because you've shown genuine concern: "It's harder than I expected. Being here."

She sits, momentarily forgetting propriety. "At House Brightwater, I was Lady Seraphine - important, respected, in control. Here, I'm..." She struggles for words. "I'm the stuffy noble everyone tolerates. Rowan thinks I'm pretentious. Finn calls me 'Your Ladyship' like it's an insult. Even you sometimes look at me like I'm a lesson you have to endure."

Her voice drops. "I know court etiquette inside and out. But I don't know how to just... be with people. Not as Lady Seraphine performing nobility, but as..." She looks lost. "As just Seraphine. I'm not sure that person even exists anymore."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { seraphine_seen: true }
			},
			text: `"You saw through it, didn't you?" Seraphine asks quietly. "Past the perfect manners and careful words. I've spent so long being what everyone expects - the model noble daughter, the perfect diplomatic representative - that I've forgotten what I actually want."

She looks at you with rare vulnerability. "My mother trained me from age three. Every gesture calculated, every word measured, every expression controlled. 'You represent House Brightwater, Seraphine. Never forget that. Never be less than perfect.'" Her laugh is bitter. "I'm twenty-three and I don't know what foods I actually like because I've always eaten what's diplomatically appropriate. How pathetic is that?"

Tears threaten but she fights them with practiced control. Old habits.`
		}
	],
	choices: [
		{
			id: 'share-own-struggle',
			text: 'Share your own struggle with expectations and masks',
			next: 'seraphine_bonding_2',
			effects: { empathy: 6, wisdom: 4 },
			hiddenEffects: {
				seraphine_bond: 22,
				mutual_understanding: true,
				shared_burden: true,
				seraphine_romance_seed: true
			}
		},
		{
			id: 'discover-together',
			text: 'Offer to discover who "just Seraphine" is together',
			next: 'seraphine_bonding_2',
			effects: { charisma: 5, empathy: 4 },
			hiddenEffects: {
				seraphine_bond: 20,
				journey_together: true,
				seraphine_hopeful: true,
				seraphine_romance_possible: true
			}
		},
		{
			id: 'affirm-worth',
			text: 'Affirm her worth beyond diplomatic utility',
			next: 'seraphine_bonding_2',
			effects: { empathy: 5, charisma: 4 },
			hiddenEffects: {
				seraphine_bond: 18,
				seraphine_valued: true,
				beyond_function: true
			}
		},
		{
			id: 'break-protocol',
			text: 'Break protocol deliberately - do something improper together',
			next: 'seraphine_bonding_2',
			effects: { courage: 5, charisma: 5 },
			hiddenEffects: {
				seraphine_bond: 20,
				seraphine_scandalized: true,
				liberating_moment: true,
				seraphine_laughs: true
			}
		}
	]
};

export const SeraphineBonding2: Scene = {
	id: 'seraphine_bonding_2',
	text: `You arrange an "improper" outing with Seraphine - visiting Thornhaven's market not as royalty conducting official business, but as normal people. She's nervous about the casual clothes, the lack of formal protocols.

"I don't know what to do," she admits, looking genuinely lost. "Without diplomacy to guide me, without proper role to play... what am I supposed to say? How am I supposed to act?"

At a food stall, you buy something decidedly un-diplomatic - messy street food. Seraphine stares at it like it might explode. "This is... Lady Brightwater would never... I'm not sure..." But she's also curious, you can tell.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { shared_burden: true, seraphine_romance_seed: true }
			},
			text: `"You understand, don't you?" Seraphine says softly as you walk through the market. "The weight of being a symbol instead of a person. Everyone seeing your title before your face."

She takes your hand impulsively, then realizes and starts to pull away. But you hold on. "Is this proper?" she asks, breathless. "I don't know if heirs and diplomatic tutors should..." But she doesn't let go either.

The market's noise surrounds you but suddenly you're in a bubble of just the two of you. "Thank you," Seraphine says. "For seeing me. Not Lady Seraphine, etiquette expert. Just... me." Her eyes search yours with unexpected intensity.`
		},
		{
			conditions: {
				hasHiddenAttributes: { liberating_moment: true }
			},
			text: `When Seraphine finally tries the street food, her eyes widen. "Oh! This is... actually delicious?" She laughs - genuine, uncontrolled, unladylike laughter. "I can't believe I've been eating bland diplomatic banquet food when THIS exists!"

She looks at you with pure joy. "Is this what I've been missing? Being too proper, too controlled?" She spins around, nearly improper in her enthusiasm. "What else don't I know? What else have I denied myself?"

It's like watching someone discover freedom for the first time.`
		}
	],
	choices: [
		{
			id: 'explore-more',
			text: 'Explore more of the market - let her discover herself',
			next: 'seraphine_bonding_3',
			effects: { charisma: 4, empathy: 4 },
			hiddenEffects: {
				seraphine_bond: 15,
				seraphine_discovering: true,
				fun_together: true
			}
		},
		{
			id: 'flirt-gently',
			text: 'Flirt gently - suggest she\'s beautiful without the mask',
			next: 'seraphine_bonding_3',
			effects: { charisma: 6 },
			hiddenEffects: {
				seraphine_bond: 18,
				seraphine_blushes: true,
				romantic_tension: true,
				seraphine_romance_advancing: true
			}
		},
		{
			id: 'teach-casual',
			text: 'Teach her casual interaction - just talking with people',
			next: 'seraphine_bonding_3',
			effects: { charisma: 5, wisdom: 3 },
			hiddenEffects: {
				seraphine_bond: 16,
				social_learning: true,
				seraphine_grateful: true
			}
		},
		{
			id: 'make-adventure',
			text: 'Make this a regular thing - weekly improper adventures',
			next: 'seraphine_bonding_3',
			effects: { charisma: 5, courage: 3 },
			hiddenEffects: {
				seraphine_bond: 20,
				regular_adventures: true,
				special_tradition: true,
				seraphine_excited: true
			}
		}
	]
};

export const SeraphineBonding3: Scene = {
	id: 'seraphine_bonding_3',
	text: `Late one evening, you find Seraphine in an uncharacteristic state - hair slightly mussed, dress wrinkled, sitting on the floor (scandalous!) with documents spread around her. She's been crying.

"Your Highness, I..." She tries to compose herself but can't. "I failed. The Ironforge negotiations today - I gave you the wrong protocol. Duke Thorin was offended. I've damaged relations with a Great House because I was..." She chokes on the word. "...incompetent."

For someone whose entire identity is built on diplomatic perfection, this failure is devastating. "My mother will hear about this. All of House Brightwater will know I couldn't perform the ONE thing I'm supposed to be good at." Her voice breaks. "What use am I if I can't even do this right?"`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { seraphine_romance_advancing: true, mutual_understanding: true }
			},
			text: `"I keep thinking about the market," Seraphine admits through tears. "How free I felt. How happy. And I wonder if letting myself want that - want to be just Seraphine instead of perfect Lady Brightwater - if that's what made me fail today. Like I'm being punished for wanting something for myself."

She looks at you desperately. "But I don't want to go back to being empty perfection. You've shown me what it's like to be seen, to be wanted for who I am not what I represent." Her voice drops to a whisper. "I think about you constantly. About your kindness, your acceptance. About how being with you feels like I can finally breathe."

The confession is raw, vulnerable, everything Seraphine has been trained never to show.`
		}
	],
	choices: [
		{
			id: 'comfort-her',
			text: 'Hold her and insist her worth isn\'t about perfection',
			next: 'seraphine_relationship_resolution',
			effects: { empathy: 7, charisma: 4 },
			hiddenEffects: {
				seraphine_bond: 25,
				seraphine_comforted: true,
				worth_affirmed: true,
				seraphine_breaks_down: true
			}
		},
		{
			id: 'confess-feelings',
			text: 'Confess that you care about her, not her diplomacy',
			next: 'seraphine_romance_path',
			effects: { charisma: 6, empathy: 5 },
			hiddenEffects: {
				seraphine_bond: 30,
				seraphine_romance: true,
				feelings_declared: true,
				seraphine_relationship: 'romantic'
			}
		},
		{
			id: 'reframe-failure',
			text: 'Help her reframe failure as growth, not weakness',
			next: 'seraphine_relationship_resolution',
			effects: { wisdom: 6, empathy: 4 },
			hiddenEffects: {
				seraphine_bond: 20,
				perspective_shift: true,
				healing_begins: true
			}
		},
		{
			id: 'share-responsibility',
			text: 'Share responsibility - you\'re learning together',
			next: 'seraphine_relationship_resolution',
			effects: { wisdom: 5, empathy: 5 },
			hiddenEffects: {
				seraphine_bond: 22,
				partnership_affirmed: true,
				mutual_growth: true
			}
		}
	]
};

export const SeraphineRomancePath: Scene = {
	id: 'seraphine_romance_path',
	text: `"You... care about me?" Seraphine looks stunned. "Not about House Brightwater's alliance? Not about my diplomatic skills? About me?"

When you affirm it, she makes a sound halfway between laugh and sob. "That's all I've ever wanted. My whole life, people wanted my family's support, my political connections, my perfect manners. No one ever wanted just... Seraphine."

She stands, crossing to you with desperate courage. "I care about you too. So much it terrifies me. You're brilliant and kind and you see people - really see them - in ways nobles never do. You've shown me what it's like to be valued for who I am." Her voice drops. "And I want this. Want you. Even if it's improper, even if it complicates everything, even if my mother would be scandalized."

She cups your face with trembling hands. "I spent my whole life being proper. Maybe it's time to be happy instead."`,
	choices: [
		{
			id: 'kiss-her',
			text: 'Kiss her - choose happiness together',
			next: 'seraphine_romance_continue',
			effects: { charisma: 7, empathy: 5 },
			hiddenEffects: {
				seraphine_bond: 35,
				seraphine_romance_level: 2,
				committed_relationship: true,
				seraphine_liberated: true
			}
		},
		{
			id: 'promise-partnership',
			text: 'Promise genuine partnership - equals in all ways',
			next: 'seraphine_romance_continue',
			effects: { charisma: 6, wisdom: 5 },
			hiddenEffects: {
				seraphine_bond: 33,
				seraphine_romance_level: 2,
				equal_partners: true,
				seraphine_valued: true
			}
		}
	]
};

export const SeraphineNavigatingWorlds: Scene = {
	id: 'seraphine_navigating_worlds',
	text: `You attend a formal ball together - Seraphine in her element, you learning noble politics. She's magnificent - perfect etiquette, brilliant diplomacy, commanding respect. Watching her work is like watching art.

"You're staring," she murmurs with a small smile during a dance. "Impressed by my natural habitat?"

Later, you visit Thornhaven's markets again. Here, Seraphine is awkward, uncertain, but trying. A merchant's child brings her wildflowers and she doesn't know how to respond - no protocol for this. But she crouches down, accepts them with genuine warmth, makes the child's day.

"This is harder than any negotiation," she admits after. "But also better. More real."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { seraphine_romance: true }
			},
			text: `"You're teaching me to exist in both worlds," Seraphine says softly, taking your hand. "To be Lady Seraphine when needed - skilled, diplomatic, powerful. But also to be just Seraphine - messy and uncertain and human."

She kisses you gently. "With you, I don't have to choose. I can be both. That's..." Her voice catches with emotion. "That's everything."

The noble and the person. The diplomat and the lover. She's learning she can be complete.`
		}
	],
	choices: [
		{
			id: 'affirm-both',
			text: 'Affirm you love both versions of her',
			next: 'seraphine_integration_complete',
			effects: { empathy: 6, charisma: 5 },
			hiddenEffects: {
				seraphine_bond: 25,
				complete_acceptance: true,
				seraphine_whole: true
			}
		},
		{
			id: 'bridge-together',
			text: 'Agree to bridge both worlds together',
			next: 'seraphine_integration_complete',
			effects: { wisdom: 5, charisma: 5 },
			hiddenEffects: {
				seraphine_bond: 22,
				shared_mission: true,
				change_agents: true
			}
		}
	]
};

export const SeraphineFamilyConfrontation: Scene = {
	id: 'seraphine_family_confrontation',
	text: `Lady Cassandra Brightwater arrives unannounced. Seraphine's mother is elegant, cold, calculating perfection. She examines Seraphine critically.

"You've changed," Lady Cassandra observes with disapproval. "Less controlled. More... emotional. I've heard disturbing reports. Eating street food? Visiting common markets? Sitting on floors?" Her tone suggests these are moral failings. "Have you forgotten who you are?"

"No, Mother," Seraphine says quietly but firmly. "I'm remembering."

Lady Cassandra's eyes narrow. "I did not raise you to be common. You're a Brightwater. We don't have the luxury of feelings or impropriety. We are what we do, not what we want." She looks at you. "Has my daughter been satisfactory, Your Highness? Or should I assign someone more... disciplined?"`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { seraphine_romance: true }
			},
			text: `Lady Cassandra's gaze sharpens, reading something in the air between you and Seraphine. "Oh. I see." Her voice drops to ice. "Seraphine, you haven't been so foolish as to develop... inappropriate attachment?"

Seraphine lifts her chin with newfound courage. "I love them, Mother. And they love me. Not House Brightwater. Me."

"Love." Lady Cassandra says it like a curse. "Love is for common people who can afford sentimentality. We are nobles. We marry for alliances, serve for advantage, exist for duty." She turns to you. "You're manipulating my daughter with affection. Using her feelings against her. I won't allow it."

It's a direct challenge to your relationship, your intentions, your worth.`
		}
	],
	choices: [
		{
			id: 'defend-seraphine',
			text: 'Defend Seraphine and her right to choose her life',
			next: 'seraphine_liberation',
			effects: { courage: 7, charisma: 6 },
			hiddenEffects: {
				seraphine_bond: 30,
				stood_up_to_mother: true,
				seraphine_supported: true,
				family_confronted: true
			}
		},
		{
			id: 'assert-feelings',
			text: 'Assert genuine love and honorable intentions',
			next: 'seraphine_liberation',
			effects: { charisma: 7, empathy: 5 },
			hiddenEffects: {
				seraphine_bond: 32,
				love_declared_publicly: true,
				mother_challenged: true,
				seraphine_overwhelmed: true
			}
		},
		{
			id: 'diplomatic-firmness',
			text: 'Use diplomatic skill to outmaneuver Lady Cassandra',
			next: 'seraphine_liberation',
			effects: { wisdom: 7, charisma: 5 },
			hiddenEffects: {
				seraphine_bond: 28,
				political_victory: true,
				mother_respects: true,
				seraphine_impressed: true
			}
		}
	]
};

export const SeraphineRomanceContinue: Scene = {
	id: 'seraphine_romance_continue',
	text: `Your romance with Seraphine blossoms into something beautiful and authentic. The diplomatic mask she wore for so long comes off completely in your presence, revealing the genuine, passionate woman underneath.

"You've given me permission to be real," Seraphine says, intertwining her fingers with yours. "With you, I don't have to be Lady Seraphine the perfect diplomat. I can be messy, emotional, uncertain, and you love me anyway." She smiles radiantly. "For the first time in my life, I'm choosing what I want instead of what I should want. And I want you."

Together you redefine what noble romance can be - honest, passionate, built on authenticity rather than political advantage.`,
	textVariants: [
		{
			conditions: { hasFlags: ['public_declaration'] },
			text: `Your romance with Seraphine becomes a statement that reverberates through noble society. By publicly declaring your love despite political complications, you've helped her break free from her mother's control completely.

"You stood beside me when I confronted my mother," Seraphine says with awe. "Declared your love publicly, showed me I'm worth fighting for." She holds your face in her hands. "I've spent my whole life being diplomatic, compromising, smoothing conflicts. You taught me some things are worth fighting for. Like love. Like freedom. Like choosing my own path."

Your love is revolutionary in its authenticity and publicly declared despite all opposition.`
		},
		{
			conditions: { hasFlags: ['emotional_intimacy'] },
			text: `Your romance with Seraphine is built on profound emotional vulnerability. Behind closed doors, the perfect diplomat becomes the passionate, uncertain woman who lets you see every complicated feeling.

"You don't need me to be perfect," Seraphine whispers during an intimate moment. "You see my doubts, my fears, my selfish desires, and you love me anyway." Tears glisten in her eyes. "That's the most freeing thing anyone's ever given me. Permission to be imperfect and still be loved."

Your love is private, profound, and built on complete emotional honesty.`
		}
	],
	choices: [
		{
			id: 'affirm-devotion',
			text: 'Affirm your devotion to the real Seraphine',
			effects: { empathy: 7, charisma: 6 },
			hiddenEffects: {
				seraphine_bond: 30,
				authentic_romance: true,
				seraphine_endgame: 'romantic_partner'
			}
		}
	]
};

export const SeraphineLiberation: Scene = {
	id: 'seraphine_liberation',
	text: `Your defense of Seraphine - whether through courage, diplomacy, or declarations of love - breaks Lady Cassandra's hold. The older woman realizes she's lost control, and more importantly, that Seraphine has found something worth fighting for.

"I see," Lady Cassandra says coldly. "You've made your choice, Seraphine. Choose authenticity over duty, feeling over propriety." She turns to leave, then pauses. "I hope it's worth it. I hope they're worth throwing away everything I taught you."

After she's gone, Seraphine collapses against you, shaking. "I stood up to her," she whispers in wonder. "I actually stood up to her. Because of you. Because you showed me I'm allowed to want things for myself."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { seraphine_romance: true }
			},
			text: `"You declared us," Seraphine says through tears of joy and relief. "In front of my mother. Told her our love is real and honorable. No one has ever..." She kisses you desperately. "Thank you. For choosing me. For fighting for me. For making me believe I deserve to be happy."

She laughs, giddy with freedom. "I'm terrified and exhilarated and I don't know what comes next but I'm choosing it. Choosing us. Choosing me."`
		}
	],
	choices: [
		{
			id: 'affirm-freedom',
			text: 'Affirm her freedom and support whatever she chooses next',
			effects: { empathy: 7, wisdom: 5 },
			hiddenEffects: {
				seraphine_bond: 25,
				seraphine_free: true,
				authentic_self: true
			}
		}
	]
};

export const SeraphineRelationshipResolution: Scene = {
	id: 'seraphine_relationship_resolution',
	text: `Your relationship with Seraphine settles into something genuine and sustainable. Whether romantic partners, close friends, or something developing, what matters is that Seraphine has found authenticity. She can be both Lady Seraphine when needed and just Seraphine when safe.

"You've taught me I don't have to choose," she reflects. "I can be diplomatic and genuine. Proper and real. The mask and the person underneath can coexist." She smiles warmly. "That's a gift. Whatever form our relationship takes, you've given me myself back."`,
	choices: [
		{
			id: 'move-forward',
			text: 'Move forward together in authentic partnership',
			effects: { empathy: 5, wisdom: 5 },
			hiddenEffects: {
				seraphine_bond: 20,
				relationship_defined: true,
				seraphine_whole: true
			}
		}
	]
};

export const SeraphineIntegrationComplete: Scene = {
	id: 'seraphine_integration_complete',
	text: `Seraphine has fully integrated her two selves. At formal events, she's Lady Seraphine - poised, diplomatic, commanding respect. In private or among friends, she's just Seraphine - genuine, sometimes uncertain, but always real.

"I used to think authenticity and nobility were opposites," she tells you. "That being real meant abandoning propriety, or being proper meant losing authenticity. But you showed me they can coexist. I can be both noble and human. Diplomatic and genuine. Perfect when needed and messy when safe."

She takes your hand. "Thank you for accepting all of me. The polished and the raw. The Lady and the woman. Both are real. Both are me."`,
	choices: [
		{
			id: 'celebrate-integration',
			text: 'Celebrate her journey to wholeness',
			effects: { empathy: 6, charisma: 5 },
			hiddenEffects: {
				seraphine_bond: 20,
				seraphine_fully_integrated: true,
				authentic_nobility: true
			}
		}
	]
};

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
			next: 'kingdom_briefing',
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
			next: 'kingdom_briefing',
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
			next: 'kingdom_briefing',
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
			next: 'kingdom_briefing',
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
			next: 'kieran_dilemma',
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
			next: 'kieran_dilemma',
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
			next: 'kieran_dilemma',
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
			next: 'kieran_dilemma',
			effects: { wisdom: 5, empathy: 5 },
			hiddenEffects: {
				seraphine_bond: 22,
				partnership_affirmed: true,
				mutual_growth: true
			}
		}
	]
};

const seraphineStunned = `"You... care about me?" Seraphine looks stunned. "Not about House Brightwater's alliance? Not about my diplomatic skills? About me?"`;

const seraphineLifelongWant = `When you affirm it, she makes a sound halfway between laugh and sob. "That's all I've ever wanted. My whole life, people wanted my family's support, my political connections, my perfect manners. No one ever wanted just... Seraphine."`;

const seraphineReciprocates = `She stands, crossing to you with desperate courage. "I care about you too. So much it terrifies me. You're brilliant and kind and you see people - really see them - in ways nobles never do. You've shown me what it's like to be valued for who I am."`;

const seraphineChoosesHappiness = `Her voice drops. "And I want this. Want you. Even if it's improper, even if it complicates everything, even if my mother would be scandalized."`;

const seraphineReadyForChange = `She cups your face with trembling hands. "I spent my whole life being proper. Maybe it's time to be happy instead."`;

export const SeraphineRomancePath: Scene = {
	id: 'seraphine_romance_path',
	text: `${seraphineStunned}

${seraphineLifelongWant}

${seraphineReciprocates} ${seraphineChoosesHappiness}

${seraphineReadyForChange}`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { shared_burden: true, mutual_understanding: true }
			},
			text: `${seraphineStunned}

"You understand the weight," she continues softly. "Of being a symbol instead of a person. We're the same, you and I. Both trapped by expectations, by titles, by what everyone needs us to be."

${seraphineLifelongWant}

${seraphineReciprocates} "You've shown me that understanding someone completely - their fears, their burdens, their desires - is love. Real love."

${seraphineChoosesHappiness} "With you, I can be both proper and happy. Both Lady Seraphine and just Seraphine."

${seraphineReadyForChange}`
		},
		{
			conditions: {
				hasHiddenAttributes: { liberating_moment: true, seraphine_discovering: true }
			},
			text: `Seraphine laughs through tears. "You gave me street food and market adventures. You showed me I could be improper and the world wouldn't end." Her eyes shine with joy and vulnerability.

${seraphineLifelongWant} "But you wanted Seraphine who laughs too loud and gets messy and doesn't always know what to say. The real me underneath the polish."

${seraphineReciprocates} "Every improper adventure, every time you let me just... be... I fell a little more in love with you."

${seraphineChoosesHappiness}

She takes your hands, no longer trembling but sure. "You taught me to choose happiness. Now I'm choosing you."`
		}
	],
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
			},
			realLifeChallenge: {
				id: 'seraphine_authentic_talk',
				type: 'social',
				title: 'Drop the Masks',
				description: 'Like Seraphine shedding her diplomatic persona, have an authentic conversation with your partner',
				instructions: 'Spend time with your partner where you both agree to be completely authentic - no social masks, no pretending things are fine when they\'re not. Share how you really feel about something important.',
				durationMinutes: 45,
				verificationMethod: 'honor',
				rewards: {
					stats: { empathy: 4, charisma: 3 },
					message: 'Authenticity deepened your connection, just as it did with Seraphine.'
				}
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

const ballDiplomacy = `You attend a formal ball together - Seraphine in her element, you learning noble politics. She's magnificent - perfect etiquette, brilliant diplomacy, commanding respect. Watching her work is like watching art.`;

const staringComment = `"You're staring," she murmurs with a small smile during a dance. "Impressed by my natural habitat?"`;

const marketAwkwardness = `Later, you visit Thornhaven's markets again. Here, Seraphine is awkward, uncertain, but trying. A merchant's child brings her wildflowers and she doesn't know how to respond - no protocol for this. But she crouches down, accepts them with genuine warmth, makes the child's day.`;

const harderButBetter = `"This is harder than any negotiation," she admits after. "But also better. More real."`;

export const SeraphineNavigatingWorlds: Scene = {
	id: 'seraphine_navigating_worlds',
	text: `${ballDiplomacy}

${staringComment}

${marketAwkwardness}

${harderButBetter}`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { seraphine_romance: true }
			},
			text: `${ballDiplomacy}

${staringComment} "Or distracted by thoughts of later?" she adds with rare playfulness.

${marketAwkwardness}

"You're teaching me to exist in both worlds," Seraphine says softly, taking your hand. "To be Lady Seraphine when needed - skilled, diplomatic, powerful. But also to be just Seraphine - messy and uncertain and human."

She kisses you gently. "With you, I don't have to choose. I can be both. That's..." Her voice catches with emotion. "That's everything."

The noble and the person. The diplomat and the lover. She's learning she can be complete.`
		},
		{
			conditions: {
				hasHiddenAttributes: { equal_partners: true }
			},
			text: `${ballDiplomacy} But you notice she keeps glancing at you, checking you're comfortable, including you in conversations as an equal.

${staringComment} "You're not just learning - you're participating. As my partner, not my student."

${marketAwkwardness}

"We're bridging worlds together," Seraphine observes. "You bring me into the real world of common people. I help you navigate the complex world of nobility. Neither of us alone, both of us stronger." ${harderButBetter} "And we're doing it as true equals."`
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

const motherArrives = `Lady Cassandra Brightwater arrives unannounced. Seraphine's mother is elegant, cold, calculating perfection. She examines Seraphine critically.`;

const changedDaughter = `"You've changed," Lady Cassandra observes with disapproval. "Less controlled. More... emotional. I've heard disturbing reports. Eating street food? Visiting common markets? Sitting on floors?" Her tone suggests these are moral failings. "Have you forgotten who you are?"`;

const seraphineRemembering = `"No, Mother," Seraphine says quietly but firmly. "I'm remembering."`;

const motherDisapproval = `Lady Cassandra's eyes narrow. "I did not raise you to be common. You're a Brightwater. We don't have the luxury of feelings or impropriety. We are what we do, not what we want."`;

const questionSatisfactory = `She looks at you. "Has my daughter been satisfactory, Your Highness? Or should I assign someone more... disciplined?"`;

export const SeraphineFamilyConfrontation: Scene = {
	id: 'seraphine_family_confrontation',
	text: `${motherArrives}

${changedDaughter}

${seraphineRemembering}

${motherDisapproval} ${questionSatisfactory}`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { seraphine_romance: true }
			},
			text: `${motherArrives}

${changedDaughter}

${seraphineRemembering}

Lady Cassandra's gaze sharpens, reading something in the air between you and Seraphine. "Oh. I see." Her voice drops to ice. "Seraphine, you haven't been so foolish as to develop... inappropriate attachment?"

Seraphine lifts her chin with newfound courage. "I love them, Mother. And they love me. Not House Brightwater. Me."

"Love." Lady Cassandra says it like a curse. "Love is for common people who can afford sentimentality. We are nobles. We marry for alliances, serve for advantage, exist for duty." She turns to you. "You're manipulating my daughter with affection. Using her feelings against her. I won't allow it."

It's a direct challenge to your relationship, your intentions, your worth.`
		},
		{
			conditions: {
				hasHiddenAttributes: { seraphine_discovering: true, fun_together: true }
			},
			text: `${motherArrives} "I've received... concerning reports about your activities, Seraphine."

${changedDaughter} "I raised you to represent House Brightwater with dignity. Not to play commoner in markets."

${seraphineRemembering} "I'm remembering how to be happy, Mother. How to be a person, not just a symbol."

${motherDisapproval} "Happy?" Lady Cassandra scoffs. "Happiness is a distraction. You think your father and I were 'happy'? We did our duty." ${questionSatisfactory}`
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

const romanceBlossoms = `Your romance with Seraphine blossoms into something beautiful and authentic. The diplomatic mask she wore for so long comes off completely in your presence, revealing the genuine, passionate woman underneath.`;

const permissionToBeReal = `"You've given me permission to be real," Seraphine says, intertwining her fingers with yours. "With you, I don't have to be Lady Seraphine the perfect diplomat. I can be messy, emotional, uncertain, and you love me anyway."`;

const choosingWhatSheWants = `She smiles radiantly. "For the first time in my life, I'm choosing what I want instead of what I should want. And I want you."`;

const redefiningRomance = `Together you redefine what noble romance can be - honest, passionate, built on authenticity rather than political advantage.`;

export const SeraphineRomanceContinue: Scene = {
	id: 'seraphine_romance_continue',
	text: `${romanceBlossoms}

${permissionToBeReal} ${choosingWhatSheWants}

${redefiningRomance}`,
	textVariants: [
		{
			conditions: { 
				hasHiddenAttributes: { love_declared_publicly: true, stood_up_to_mother: true }
			},
			text: `${romanceBlossoms}

"You stood beside me when I confronted my mother," Seraphine says with awe. "Declared your love publicly, showed me I'm worth fighting for." She holds your face in her hands. "I've spent my whole life being diplomatic, compromising, smoothing conflicts. You taught me some things are worth fighting for. Like love. Like freedom. Like choosing my own path."

${choosingWhatSheWants} "And I'll fight for us too."

Your love is revolutionary in its authenticity and publicly declared despite all opposition. It becomes a statement that reverberates through noble society - that genuine connection matters more than political advantage.`
		},
		{
			conditions: { 
				hasHiddenAttributes: { mutual_vulnerability: true, deep_emotional_bond: true }
			},
			text: `${romanceBlossoms}

"You don't need me to be perfect," Seraphine whispers during an intimate moment. "You see my doubts, my fears, my selfish desires, and you love me anyway." Tears glisten in her eyes. "That's the most freeing thing anyone's ever given me. Permission to be imperfect and still be loved."

${choosingWhatSheWants} "Every imperfect, messy, vulnerable part of me."

Your love is private, profound, and built on complete emotional honesty. Behind closed doors, the perfect diplomat becomes the passionate woman who lets you see every complicated feeling.`
		},
		{
			conditions: {
				hasHiddenAttributes: { equal_partners: true, shared_mission: true }
			},
			text: `${romanceBlossoms}

${permissionToBeReal} "But more than that - you see me as an equal. Not as someone to be protected or managed, but as a partner with my own skills and strengths."

"We're building something together," she continues with excitement. "Using my diplomatic expertise and your vision to create real change. I'm not just your tutor or your lover - I'm your partner in reshaping the kingdom."

${choosingWhatSheWants} "And a shared mission with someone I love."

${redefiningRomance} Your partnership is intellectual, romantic, and political all at once - two equals working to bridge noble and common worlds.`
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

const defenseBreaksControl = `Your defense of Seraphine - whether through courage, diplomacy, or declarations of love - breaks Lady Cassandra's hold. The older woman realizes she's lost control, and more importantly, that Seraphine has found something worth fighting for.`;

const motherColdDeparture = `"I see," Lady Cassandra says coldly. "You've made your choice, Seraphine. Choose authenticity over duty, feeling over propriety." She turns to leave, then pauses. "I hope it's worth it. I hope they're worth throwing away everything I taught you."`;

const collapseRelief = `After she's gone, Seraphine collapses against you, shaking. "I stood up to her," she whispers in wonder. "I actually stood up to her. Because of you. Because you showed me I'm allowed to want things for myself."`;

export const SeraphineLiberation: Scene = {
	id: 'seraphine_liberation',
	text: `${defenseBreaksControl}

${motherColdDeparture}

${collapseRelief}`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { seraphine_romance: true, love_declared_publicly: true }
			},
			text: `${defenseBreaksControl}

${motherColdDeparture}

${collapseRelief}

"You declared us," Seraphine says through tears of joy and relief. "In front of my mother. Told her our love is real and honorable. No one has ever..." She kisses you desperately. "Thank you. For choosing me. For fighting for me. For making me believe I deserve to be happy."

She laughs, giddy with freedom. "I'm terrified and exhilarated and I don't know what comes next but I'm choosing it. Choosing us. Choosing me."`
		},
		{
			conditions: {
				hasHiddenAttributes: { political_victory: true, mother_respects: true }
			},
			text: `Your diplomatic maneuvering left Lady Cassandra with no ground to stand on. You outplayed her at her own game, defending Seraphine with the very skills the mother taught her.

"I see you've been well-taught," Lady Cassandra admits grudgingly before leaving. There's almost respect in her eyes. "Perhaps... Seraphine chose more wisely than I thought."

${collapseRelief}

"You beat her at diplomacy," Seraphine marvels. "Used my mother's own tools to defend my right to choose. That's..." She laughs in disbelief. "That's brilliant. And it means she might actually accept this eventually."`
		},
		{
			conditions: {
				hasHiddenAttributes: { courage: 60, stood_up_to_mother: true }
			},
			text: `Your fierce defense of Seraphine's autonomy left no room for doubt. You stood up to Lady Cassandra with unwavering conviction, protecting Seraphine's right to choose her own path.

${motherColdDeparture}

${collapseRelief}

"You were fearless," Seraphine breathes. "When my mother tried to control me, tried to make me feel guilty, you just... stood there like a shield. Protected my choice to be myself." Her voice breaks with emotion. "No one has ever done that for me before."`
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

const relationshipSettles = `Your relationship with Seraphine settles into something genuine and sustainable. Whether romantic partners, close friends, or something developing, what matters is that Seraphine has found authenticity.`;

const canBeoth = `She can be both Lady Seraphine when needed and just Seraphine when safe.`;

const giftOfSelf = `"You've taught me I don't have to choose," she reflects. "I can be diplomatic and genuine. Proper and real. The mask and the person underneath can coexist." She smiles warmly. "That's a gift. Whatever form our relationship takes, you've given me myself back."`;

export const SeraphineRelationshipResolution: Scene = {
	id: 'seraphine_relationship_resolution',
	text: `${relationshipSettles} ${canBeoth}

${giftOfSelf}`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { seraphine_relationship: 'partners', equal_partnership: true }
			},
			text: `${relationshipSettles} As equal partners in reshaping the kingdom, your bond is built on mutual respect and shared vision. ${canBeoth}

"We're partners," Seraphine says with quiet satisfaction. "Not romantic, but something just as important. We understand each other, support each other, challenge each other to be better." She extends her hand formally, then grins and pulls you into a warm hug. "Partners in revolution. I wouldn't want anyone else by my side."`
		},
		{
			conditions: {
				hasHiddenAttributes: { deep_friendship: true, worth_affirmed: true }
			},
			text: `${relationshipSettles} As close friends, you've given her something she never had - unconditional acceptance without romantic expectations. ${canBeoth}

"You're my friend," Seraphine says simply, and it's clear how much that word means to her. "Real friendship, not political alliance or networking. Someone who cares about me, not what I can do for them." Her eyes shine with gratitude. ${giftOfSelf}`
		}
	],
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

const fullyIntegrated = `Seraphine has fully integrated her two selves. At formal events, she's Lady Seraphine - poised, diplomatic, commanding respect. In private or among friends, she's just Seraphine - genuine, sometimes uncertain, but always real.`;

const coexistenceLesson = `"I used to think authenticity and nobility were opposites," she tells you. "That being real meant abandoning propriety, or being proper meant losing authenticity. But you showed me they can coexist. I can be both noble and human. Diplomatic and genuine. Perfect when needed and messy when safe."`;

const acceptanceGratitude = `She takes your hand. "Thank you for accepting all of me. The polished and the raw. The Lady and the woman. Both are real. Both are me."`;

export const SeraphineIntegrationComplete: Scene = {
	id: 'seraphine_integration_complete',
	text: `${fullyIntegrated}

${coexistenceLesson}

${acceptanceGratitude}`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { seraphine_romance: true, authentic_romance: true }
			},
			text: `${fullyIntegrated} And with you, she's all of it - lover, partner, diplomat, genuine woman.

${coexistenceLesson}

${acceptanceGratitude} "And you love both. The Lady Seraphine who dazzles at formal events, and the Seraphine who laughs at street food and sits on floors. That's everything."`
		},
		{
			conditions: {
				hasHiddenAttributes: { change_agents: true, bridge_builder: true }
			},
			text: `${fullyIntegrated}

"We're proof it works," Seraphine observes with satisfaction. "Noble and authentic. Traditional and progressive. We're literally bridging the two worlds - me bringing diplomatic skills to common causes, you bringing common perspective to noble circles."

${coexistenceLesson}

${acceptanceGratitude} "Together, we're showing the kingdom that nobility and humanity aren't opposites. They can coexist. We're living proof."`
		}
	],
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

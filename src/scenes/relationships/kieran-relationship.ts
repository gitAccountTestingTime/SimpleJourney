import { Scene } from '../../story-manager';

/**
 * RELATIONSHIPS: Deep relationship building with Kieran
 * Progression: Professional Soldier → Trusted Battle Partner → Romantic Interest (optional)
 * Themes: Military honor, survivors' guilt, tactical respect, vulnerability beneath armor
 */

export const KieranBonding1: Scene = {
	id: 'kieran_bonding_1',
	text: `You find Kieran in the training yard late at night, drilling sword forms with relentless intensity. His movements are perfect but mechanical - like he's trying to exhaust himself into numbness.

"Your Highness," he acknowledges with military precision, not breaking stride. "Couldn't sleep?"

"Could ask you the same thing," you observe.

Kieran finally stops, breathing hard. His expression is carefully controlled but you catch something underneath - pain, maybe, or guilt. "Soldiers don't need much sleep," he says flatly. "Staying sharp is more important than comfort."

But there's something hollow in how he says it, like he's reciting doctrine to avoid something deeper.`,
	choices: [
		{
			id: 'join-training',
			text: 'Join the training - sweat and struggle together',
			next: 'kieran_bonding_1b',
			effects: { strength: 4, courage: 3 },
			hiddenEffects: {
				kieran_bond: 12,
				kieran_respects_commitment: true,
				warrior_peer: true
			}
		},
		{
			id: 'call-out',
			text: 'Call out what you see - he\'s punishing himself',
			next: 'kieran_bonding_1b',
			effects: { wisdom: 5, empathy: 3 },
			hiddenEffects: {
				kieran_bond: 15,
				kieran_seen_through: true,
				perceptive_observer: true
			}
		},
		{
			id: 'sit-and-wait',
			text: 'Sit quietly and wait - let him come to you',
			next: 'kieran_bonding_1b',
			effects: { empathy: 4 },
			hiddenEffects: {
				kieran_bond: 10,
				patient_presence: true,
				kieran_approaches: true
			}
		}
	]
};

export const KieranBonding1B: Scene = {
	id: 'kieran_bonding_1b',
	text: `Kieran sets down his sword heavily. "I lost soldiers today," he says abruptly. Not in battle - in a strategic simulation you ran. "Training exercise. Nobody died. But I made the wrong call and in real combat, that mistake would have cost lives."

He looks at you, and for the first time, the perfect military bearing cracks. "I'm your military advisor. Your commander. I'm supposed to be flawless because people's lives depend on my decisions. Your life depends on it." His voice drops. "And I'm terrified I'll fail you the way I failed them."

"Them?" you prompt gently.

Kieran's jaw clenches. "My first command. Three years ago. I was so confident, so certain. Led my unit into an ambush. Twenty soldiers under my command." He swallows hard. "Twelve came home. The others... because I was too proud, too sure I could handle any situation."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { kieran_seen_through: true }
			},
			text: `Seeing that you already understood, Kieran's defenses crumble further. "Every night, I drill their names. Every form, every strike - I dedicate it to one of them. Thomas, who wanted to be a blacksmith. Elena, who sang constantly. Marcus, who..." His voice breaks.

"I don't let myself forget. Don't let myself sleep easy. Because they can't. Because I led them to death through my arrogance." He looks at you desperately. "How do I protect you with that history? How do you trust someone who's already failed?"

The pain is raw and real - a wound that's never healed.`
		}
	],
	choices: [
		{
			id: 'share-burden',
			text: 'Share that you carry similar burdens - you\'re not alone',
			next: 'military_meeting',
			effects: { empathy: 6, wisdom: 4 },
			hiddenEffects: {
				kieran_bond: 22,
				mutual_understanding: true,
				shared_guilt: true,
				kieran_romance_seed: true
			}
		},
		{
			id: 'affirm-trust',
			text: 'Affirm complete trust - past mistakes made him stronger',
			next: 'military_meeting',
			effects: { charisma: 5, empathy: 4 },
			hiddenEffects: {
				kieran_bond: 18,
				kieran_burden_lightens: true,
				trust_affirmed: true
			}
		},
		{
			id: 'memorial-ritual',
			text: 'Suggest creating a proper memorial for his fallen soldiers',
			next: 'kieran_bonding_2',
			effects: { wisdom: 5, empathy: 5 },
			hiddenEffects: {
				kieran_bond: 20,
				kieran_healing_begins: true,
				ritual_of_remembrance: true,
				kieran_deeply_moved: true
			}
		},
		{
			id: 'embrace',
			text: 'Simply embrace him - sometimes words aren\'t enough',
			next: 'kieran_bonding_2',
			effects: { empathy: 7 },
			hiddenEffects: {
				kieran_bond: 25,
				physical_comfort: true,
				kieran_breaks_down: true,
				intimacy_seed: true,
				kieran_romance_possible: true
			}
		}
	]
};

export const KieranBonding2: Scene = {
	id: 'kieran_bonding_2',
	text: `Days later, Kieran requests time with you for advanced combat training. "You need to know how to fight," he says seriously. "Not dueling or ceremonial forms. Real combat. Dirty, desperate, survival fighting."

He hands you a practice weapon. "I'm going to teach you like you're one of my soldiers. No holding back, no gentle treatment. If I'm going to trust myself to protect you, I need to know you can protect yourself when I fail."

The training is intense - he pushes you hard but fairly, correcting with tactical precision. And slowly, you notice something: the weight on his shoulders seems lighter. Teaching, fighting beside you - it's helping him heal.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { shared_guilt: true, kieran_romance_seed: true }
			},
			text: `During a grappling drill, Kieran pins you. Both breathing hard, faces close. For a moment, the professional distance wavers. His eyes flick to your lips, then away quickly.

"Good," he says roughly, pulling back. "In real combat, use that moment of distraction. Strike hard." But his hands linger a moment longer than necessary.

Later, as you're both cooling down, he says quietly: "Thank you. For the other night. For understanding. For not seeing me as broken." He looks at you with something deeper than respect. "You're stronger than you know. And training with you... it helps. Makes me feel like maybe I can do this. Be who you need."

The gratitude in his eyes holds warmth that's decidedly not just professional.`
		},
		{
			conditions: {
				hasHiddenAttributes: { trust_affirmed: true }
			},
			text: `"You're a fast learner," Kieran observes with approval. "Natural instincts. Many nobles freeze in real combat scenarios but you adapt."

He adjusts your grip on the weapon, hands guiding yours with surprising gentleness despite his soldier's roughness. "You trusted me enough to be vulnerable. That takes courage. Real courage, not battlefield bravado."

His smile is small but genuine - the first real smile you've seen from him. "Thank you for that trust. I'll work every day to deserve it."`
		}
	],
	choices: [
		{
			id: 'excel-at-training',
			text: 'Push yourself to excel - match his intensity',
			next: 'kieran_bonding_3',
			effects: { strength: 5, courage: 5 },
			hiddenEffects: {
				kieran_bond: 15,
				kieran_impressed: true,
				warrior_respect: true
			}
		},
		{
			id: 'flirt-during-spar',
			text: 'Use closeness during sparring to flirt subtly',
			next: 'marina_ocean_depths',
			effects: { charisma: 5, courage: 3 },
			hiddenEffects: {
				kieran_bond: 14,
				kieran_flustered: true,
				romantic_tension: true,
				kieran_romance_advancing: true
			}
		},
		{
			id: 'ask-about-tactics',
			text: 'Ask deeper tactical questions - engage his expertise',
			next: 'marina_ocean_depths',
			effects: { wisdom: 5, strength: 2 },
			hiddenEffects: {
				kieran_bond: 16,
				intellectual_respect: true,
				tactical_partnership: true
			}
		},
		{
			id: 'train-together-equals',
			text: 'Propose ongoing training as equals, not teacher/student',
			next: 'marina_ocean_depths',
			effects: { strength: 4, charisma: 4 },
			hiddenEffects: {
				kieran_bond: 20,
				battle_partners: true,
				equal_warriors: true,
				kieran_honored: true
			}
		}
	]
};

export const KieranBonding3: Scene = {
	id: 'kieran_bonding_3',
	text: `A real threat emerges - assassins infiltrate the manor. Kieran immediately positions himself between you and danger, sword drawn. "Stay behind me," he commands.

The fight is brief but brutal. Kieran moves like a force of nature - precise, deadly, absolutely focused on protecting you. When it's over and the assassins are subdued, he checks you for injuries with hands that tremble slightly.

"Are you hurt?" His control is cracking, fear breaking through military discipline. "Did they touch you? Gods, if anything had happened..." He stops himself, realizing he's gripping your shoulders.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { battle_partners: true }
			},
			text: `But you fought beside him, not behind him. Took down an assassin yourself using techniques he taught you.

Kieran looks at you with something like awe. "You didn't hide," he says wonderingly. "You fought. As my partner." His hand cups your face, thumb brushing your cheek where blood spatters. "You could have been killed. You should have stayed safe. But you..." He swallows. "You had my back. Like a true shield-sibling."

In military tradition, shield-siblings are bonded warriors who trust each other completely. It's intimate - sometimes even romantic. Kieran just called you that deliberately.`
		},
		{
			conditions: {
				hasHiddenAttributes: { kieran_romance_advancing: true }
			},
			text: `"I thought I'd lost you," Kieran admits, voice rough with emotion. "When I saw that blade coming toward you, I..." He pulls you close, armor and weapons between you but the embrace desperate. "I can't lose you. Not you. Not after everything."

His forehead presses to yours. "This isn't just duty anymore. Hasn't been for a while. I care about you. Too much. More than a commander should care about their charge." His eyes search yours. "Tell me to stop. To keep things professional. Because if you don't, I don't think I can anymore."

The confession hangs between you, his heart pounding against yours.`
		}
	],
	choices: [
		{
			id: 'reassure-safety',
			text: 'Reassure him you\'re safe because of him',
			next: 'lyra_memorial',
			effects: { empathy: 5, charisma: 3 },
			hiddenEffects: {
				kieran_bond: 18,
				kieran_calms: true,
				protector_affirmed: true
			}
		},
		{
			id: 'kiss-him',
			text: 'Kiss him instead of answering with words',
			next: 'lyra_memorial',
			effects: { courage: 7, charisma: 5 },
			hiddenEffects: {
				kieran_bond: 30,
				kieran_romance: true,
				relationship_declared: true,
				kieran_relationship: 'romantic'
			}
		},
		{
			id: 'acknowledge-partnership',
			text: 'Acknowledge the partnership but need time for more',
			next: 'lyra_memorial',
			effects: { wisdom: 5, empathy: 4 },
			hiddenEffects: {
				kieran_bond: 15,
				kieran_relationship: 'developing',
				slow_burn: true,
				kieran_respects_pace: true
			}
		},
		{
			id: 'affirm-shield-siblings',
			text: 'Affirm shield-sibling bond - warrior soulmates',
			next: 'lyra_memorial',
			effects: { courage: 6, empathy: 4 },
			hiddenEffects: {
				kieran_bond: 25,
				shield_siblings: true,
				warrior_bond: true,
				kieran_relationship: 'battle_family'
			},
			realLifeChallenge: {
				id: 'kieran_physical_challenge',
				type: 'exercise',
				title: 'Physical Challenge Together',
				description: 'Like training with Kieran, do a physical activity with your partner',
				instructions: 'Exercise together with your partner - go for a run, work out at home, play a sport, or do yoga. Encourage each other and celebrate completing the challenge together.',
				durationMinutes: 30,
				verificationMethod: 'timer',
				rewards: {
					stats: { courage: 3, strength: 2, empathy: 2 },
					message: 'Training together built camaraderie, just like with Kieran.'
				}
			}
		}
	]
};

export const KieranRomancePath: Scene = {
	id: 'kieran_romance_path',
	text: `The kiss is fierce, desperate, full of relief and fear and longing. When you part, Kieran's eyes are wide with wonder and vulnerability.

"I shouldn't want this," he says hoarsely. "You're my charge, my responsibility. Military code says this crosses every line." He cups your face in both hands. "But codes and regulations don't account for you. For how you make me feel alive again. How you carry your own burdens with such strength. How you fight beside me like we were made for it."

"I lost people I cared about," Kieran continues, voice breaking. "Swore I'd never let anyone that close again. Couldn't bear another loss. But you..." He kisses you again, softer. "You slipped past every defense. Made me hope again. Made me want to protect something not out of duty but because I can't imagine a world without you in it."

He presses his forehead to yours. "So yes. I want this. Want you. Whatever that means, however complicated it gets. My shield-sibling, my..." He can't finish, overcome.`,
	choices: [
		{
			id: 'affirm-devotion',
			text: 'Affirm your devotion - you choose him, all of him',
			next: 'kieran_romance_continue',
			effects: { empathy: 6, charisma: 5 },
			hiddenEffects: {
				kieran_bond: 35,
				kieran_romance_level: 2,
				devoted_partners: true,
				kieran_healing_complete: true
			},
			realLifeChallenge: {
				id: 'kieran_emotional_support',
				type: 'social',
				title: 'Provide Emotional Support',
				description: 'Like supporting Kieran through his guilt, be there for your partner during a difficult moment',
				instructions: 'Have a conversation with your partner about something that\'s been weighing on them. Listen without judgment, offer support without trying to fix everything. Let them know you\'re there for them.',
				durationMinutes: 30,
				verificationMethod: 'honor',
				rewards: {
					stats: { empathy: 4, wisdom: 2 },
					message: 'Your support strengthened your bond, just as you helped Kieran heal.'
				}
			}
		},
		{
			id: 'promise-protection',
			text: 'Promise to protect each other - equal partnership',
			next: 'kieran_romance_continue',
			effects: { courage: 6, strength: 4 },
			hiddenEffects: {
				kieran_bond: 33,
				kieran_romance_level: 2,
				warrior_romance: true,
				mutual_protection: true
			}
		}
	]
};

export const KieranRomanceContinue: Scene = {
	id: 'kieran_romance_continue',
	text: `Your romance with Kieran becomes a force of healing and strength. The warrior who'd closed off his heart to avoid loss learns to love fiercely, protectively, without reservation.

"You've given me something I thought I'd lost forever," Kieran says, holding you close after training. "Hope. The ability to imagine a future beyond survival and duty." He kisses your forehead. "I protect you not because it's my job but because I can't imagine a world without you in it. That's terrifying and wonderful all at once."

Together you redefine what warrior devotion means - not just protection but partnership, not just duty but choice.`,
	textVariants: [
		{
			conditions: { hasFlags: ['devoted_partners'] },
			text: `Your romance with Kieran reaches profound depths as his emotional healing completes. The guilt that haunted him transforms into purpose - protecting you not from obligation but from love.

"You saved me," Kieran admits during a quiet moment. "Not from physical danger but from drowning in my own guilt. You showed me I deserve connection again, deserve happiness despite my failures." He holds you like you're precious, irreplaceable. "I love you with everything I am. Every scar, every story, every hard-won lesson. You have all of me."

Your love is forged in mutual healing, absolute devotion, and warrior's honor.`
		},
		{
			conditions: { hasFlags: ['warrior_romance'] },
			text: `Your romance with Kieran becomes a partnership of equals. You protect each other on the battlefield and off it, two warriors bound by love and mutual respect.

"Shield-siblings who became more," Kieran says with a rare smile. "I never thought I'd have a partner who fights beside me as an equal, who doesn't need protection but chooses mutual defense." He grips your shoulder in the warrior's gesture of respect. "You're my equal in battle and my partner in everything else. That's rarer than you know."

Your love is built on equality, mutual protection, and warrior's bond transformed into romance.`
		}
	],
	choices: [
		{
			id: 'continue-together',
			text: 'Continue as devoted partners',
			effects: { courage: 7, empathy: 6 },
			hiddenEffects: {
				kieran_bond: 30,
				warrior_soulmates: true,
				kieran_endgame: 'romantic_partner'
			}
		}
	]
};

export const KieranMemorialCreation: Scene = {
	id: 'kieran_memorial_creation',
	text: `You help Kieran create a proper memorial for his fallen soldiers. In the manor's chapel, twelve candles - one for each lost life. He speaks each name with reverence, shares their stories, lets himself grieve properly for the first time.

When it's done, Kieran stands before the memorial with tears streaming down his face. "Thank you," he says to you. "For letting them be remembered. For giving them honor." He takes your hand. "I've carried their deaths like punishment. But you've helped me see I can honor their memory without destroying myself."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { kieran_romance: true }
			},
			text: `"You've given me permission to live again," Kieran says, turning to you. "To feel again. To want things beyond endless penance." He kisses your forehead gently. "They wouldn't want me to suffer forever. They'd want me to fight for something worth protecting."

He gestures to you. "You're worth protecting. Worth living for. And maybe..." His voice cracks with emotion. "Maybe worth letting myself be happy for."`
		}
	],
	choices: [
		{
			id: 'annual-ritual',
			text: 'Establish annual memorial ritual together',
			next: 'kieran_healing_complete',
			effects: { wisdom: 5, empathy: 5 },
			hiddenEffects: {
				kieran_bond: 22,
				memorial_established: true,
				shared_ritual: true,
				kieran_at_peace: true
			}
		}
	]
};

export const KieranCombatMission: Scene = {
	id: 'kieran_combat_mission',
	text: `Your first real combat mission together - investigating a threat in the borderlands. Kieran is all business during planning, but you catch him watching you with protective intensity.

"Remember what I taught you," he says, checking your armor personally. "Stay aware, trust your instincts, and..." He hesitates. "Stay alive. For me."

The mission tests everything you've trained for. Kieran fights like poetry - brutal, efficient, beautiful. But he's also constantly aware of your position, adjusting tactics to keep you safe while respecting your ability to fight.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { shield_siblings: true }
			},
			text: `You move together like you've fought side by side for years. Kieran covers your openings, you cover his. When enemies try to flank him, you're already there. When you're pressed, his blade appears like clockwork.

After the fight, Kieran grips your shoulder with profound respect. "That's what shield-siblings means," he says with fierce pride. "Perfect synchrony. Complete trust. I'd follow you into any battle."

It's the highest honor a warrior can give.`
		},
		{
			conditions: {
				hasHiddenAttributes: { kieran_romance: true }
			},
			text: `At one point, you save Kieran from a blade aimed at his back. He spins, shocked, then pulls you into a fierce kiss right there on the battlefield.

"Don't ever scare me like that again," he growls against your lips. Then softer: "Thank you. For having my back. For being my partner in everything."

The other soldiers pretend not to see, but you catch their approving smiles. Warrior romances are respected - bonds forged in battle.`
		}
	],
	choices: [
		{
			id: 'debrief-together',
			text: 'Debrief tactical decisions together as equals',
			next: 'kieran_partnership_deepens',
			effects: { wisdom: 5, strength: 4 },
			hiddenEffects: {
				kieran_bond: 20,
				tactical_equals: true,
				kieran_respects_strategy: true
			}
		},
		{
			id: 'celebrate-victory',
			text: 'Celebrate the victory together - let loose after battle',
			next: 'kieran_partnership_deepens',
			effects: { charisma: 5, courage: 4 },
			hiddenEffects: {
				kieran_bond: 18,
				kieran_relaxes: true,
				fun_together: true,
				kieran_laughs: true
			}
		}
	]
};

export const KieranPartnershipDeepens: Scene = {
	id: 'kieran_partnership_deepens',
	text: `After the mission, your partnership with Kieran reaches a new level. Whether as battle-companions, shield-siblings, romantic partners, or developing relationship, the trial by combat has proven what you mean to each other.

"You're not just my charge anymore," Kieran says as you return to the manor. "You're my equal. My partner. Someone I trust absolutely." He meets your eyes with profound respect and affection. "Whatever form this takes, whatever we call it - this bond is real. Unbreakable."

Your relationship, forged in vulnerability and tested in battle, has become one of the most important connections in both your lives.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { kieran_romance: true }
			},
			text: `"I love you," Kieran says simply. "Not just attracted to or fond of. I love you. The way warriors love their shield-mates. The way I never thought I'd love anyone again after losing my unit."

He takes your hand. "You've healed wounds I thought were permanent. Given me permission to feel, to hope, to want a future beyond atonement. Thank you for that. For us."`
		}
	],
	choices: [
		{
			id: 'move-forward',
			text: 'Move forward together, ready for whatever comes next',
			effects: { courage: 5, empathy: 5 },
			hiddenEffects: {
				kieran_bond: 20,
				partnership_complete: true,
				kieran_fully_trusts: true
			}
		}
	]
};

export const KieranRelationshipResolution: Scene = {
	id: 'kieran_relationship_resolution',
	text: `Your relationship with Kieran settles into something solid and meaningful, even if not romantic. The trust between you runs deep - warrior to warrior, leader to advisor, person to person.

"This works," Kieran says with satisfaction. "Clear understanding, mutual respect, honest communication. Whether we're romantic partners, shield-siblings, or close friends developing over time - what matters is the trust. The bond."

He clasps your forearm in a warrior's greeting. "You've given me something I thought I'd lost forever: the ability to connect without fear. To care without terror of loss paralyzing me. That's a gift, regardless of labels."`,
	choices: [
		{
			id: 'affirm-bond',
			text: 'Affirm the bond between you, whatever form it takes',
			effects: { wisdom: 5, empathy: 4 },
			hiddenEffects: {
				kieran_bond: 18,
				relationship_defined: true,
				mutual_peace: true
			}
		}
	]
};

export const KieranHealingComplete: Scene = {
	id: 'kieran_healing_complete',
	text: `The memorial becomes an annual ritual. Each year, you and Kieran gather to honor the fallen soldiers - speaking their names, lighting candles, sharing stories. The ritual helps Kieran honor memory without drowning in guilt.

"They're at peace now," Kieran says one year, and you realize he finally believes it. "And so am I. Thanks to you."

Whatever your relationship - romantic, platonic, developing - it's helped Kieran heal wounds he thought were permanent. The memorial stands as testament: you can honor the dead without being destroyed by grief. You can remember loss without letting it define you.`,
	choices: [
		{
			id: 'continue-ritual',
			text: 'Continue the ritual together, year after year',
			effects: { wisdom: 5, empathy: 6 },
			hiddenEffects: {
				kieran_bond: 15,
				kieran_fully_healed: true,
				shared_tradition: true
			}
		}
	]
};

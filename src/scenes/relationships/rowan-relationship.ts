import { Scene } from '../../story-manager';

/**
 * RELATIONSHIPS: Deep, multi-stage relationship building with Rowan
 * Progression: Professional Guardian → Trusted Friend → Romantic Interest (optional)
 * Themes: Nature connection, half-elf identity, trust and vulnerability
 */

export const RowanBonding1: Scene = {
	id: 'rowan_bonding_1',
	text: `After a particularly exhausting day of political meetings, you find Rowan on the manor's eastern balcony, watching the forest.

They don't turn as you approach, but their posture relaxes slightly - they know your footstep.

"I needed air," Rowan says quietly. "Too many walls, too many words. The nobles talk in circles, saying everything and nothing."

They finally look at you, {name}.

"How do you stand it?"

This is the first time Rowan has initiated personal conversation. Usually they're all business - guardian duties, security concerns, tactical assessments.

This moment of openness feels significant.`,
	choices: [
		{
			id: 'admit-struggle',
			text: 'Admit you struggle with it too',
			next: 'rowan_bonding_1b',
			effects: { empathy: 3 },
			hiddenEffects: {
				rowan_bond: 10,
				rowan_sees_vulnerability: true,
				authentic_connection: true
			}
		},
		{
			id: 'joke-deflect',
			text: 'Make a joke to lighten the mood',
			next: 'rowan_bonding_1b',
			effects: { charisma: 2 },
			hiddenEffects: {
				rowan_bond: 5,
				rowan_appreciates_humor: true
			}
		},
		{
			id: 'ask-about-them',
			text: 'Turn the question back - ask about their struggles',
			next: 'rowan_bonding_1b',
			effects: { empathy: 4, wisdom: 2 },
			hiddenEffects: {
				rowan_bond: 12,
				rowan_feels_seen: true,
				deep_listener: true
			}
		}
	]
};

export const RowanBonding1B: Scene = {
	id: 'rowan_bonding_1b',
	text: `Rowan is quiet for a long moment, then: "I don't belong in either world. The forest elves see me as too human - my father's blood 'diluting' the pure line. The humans see me as too elven - mystical, foreign, not quite trustworthy." 

They trace a pattern on the balcony railing. "I became a ranger because the wilderness doesn't care about bloodlines. The forest accepts everyone who respects it. Trees don't judge."

The vulnerability in their voice is raw. This is clearly something they don't share often.

"But now I'm here, in a human manor, serving a human noble - well, mostly human. The Thornwood relatives who barely acknowledge my existence are watching, judging. Waiting for me to fail and prove that half-breeds can't be trusted with important duties."

They look at you directly. "So yes, I struggle. Every day. But my struggles aren't about politics or power. They're about belonging nowhere and wondering if that will ever change."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { authentic_connection: true }
			},
			text: `Rowan sees your genuine understanding and continues more openly: "You know what it's like, don't you? Growing up as an orphan in Thornhaven, never quite fitting in. Then discovering you're secretly royal - that must have been jarring. Neither world fully yours."

They move closer. "Maybe that's why protecting you feels... different. Not just duty. You actually understand what it means to be between worlds. To carry two identities that don't easily reconcile."`
		}
	],
	choices: [
		{
			id: 'relate-personally',
			text: 'Share your own experience of not belonging',
			next: 'rowan_bonding_2',
			effects: { empathy: 5, wisdom: 3 },
			hiddenEffects: {
				rowan_bond: 15,
				shared_understanding: true,
				rowan_romance_possible: true,
				deep_connection_formed: true
			}
		},
		{
			id: 'validate-feelings',
			text: 'Validate their feelings and promise they belong here',
			next: 'rowan_bonding_2',
			effects: { charisma: 4, empathy: 3 },
			hiddenEffects: {
				rowan_bond: 12,
				rowan_feels_accepted: true,
				protective_bond: true
			}
		},
		{
			id: 'offer-solution',
			text: 'Suggest practical ways to address the prejudice',
			next: 'rowan_bonding_2',
			effects: { wisdom: 4 },
			hiddenEffects: {
				rowan_bond: 8,
				rowan_appreciates_pragmatism: true,
				problem_solver: true
			}
		},
		{
			id: 'comfortable-silence',
			text: 'Just stay in comfortable silence, sharing the moment',
			next: 'rowan_bonding_2',
			effects: { empathy: 4 },
			hiddenEffects: {
				rowan_bond: 10,
				rowan_values_presence: true,
				quiet_understanding: true
			}
		}
	]
};

export const RowanBonding2: Scene = {
	id: 'rowan_bonding_2',
	text: `Days later, Rowan invites you to train in the forest. "You need to understand the wilderness if you're going to rule a kingdom that's half forest and mountain," they say. "Besides, the rangers will respect you more if you're not completely helpless outside city walls."

The training is intense but rewarding. Rowan teaches you to move quietly, to read tracks, to sense the forest's rhythms. They're patient but demanding, pushing you to improve while never making you feel inadequate.

"You're better at this than most nobles," they admit during a break. "Most are too proud to learn from a half-elf ranger. They'd rather die stupidly in the woods than accept help from someone they see as beneath them."

There's old hurt in those words, masked by casual delivery.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { shared_understanding: true }
			},
			text: `Rowan is more open during training, sharing stories about growing up in the forest. "My mother taught me to track before I could read. My father taught me human customs and language. I got the best of both worlds... and belonged to neither."

They pause, adjusting your stance for better balance. Their hands linger a moment longer than necessary. "But with you, I feel less... divided. Like maybe being between worlds isn't a curse. It's a perspective. Understanding multiple truths at once."

Their forest-green eyes meet yours with unexpected intensity.`
		}
	],
	choices: [
		{
			id: 'express-gratitude',
			text: 'Express genuine gratitude for their teaching and perspective',
			next: 'rowan_bonding_3',
			effects: { wisdom: 3, empathy: 3 },
			hiddenEffects: {
				rowan_bond: 12,
				rowan_feels_valued: true,
				mentor_bond: true
			}
		},
		{
			id: 'flirt-subtle',
			text: 'Flirt subtly - comment on their skill and grace',
			next: 'rowan_bonding_3',
			effects: { charisma: 4 },
			hiddenEffects: {
				rowan_bond: 10,
				rowan_romance_seed: true,
				rowan_flustered: true,
				attraction_acknowledged: true
			}
		},
		{
			id: 'ask-deeper',
			text: 'Ask deeper questions about their mother and elven heritage',
			next: 'rowan_bonding_3',
			effects: { empathy: 5, wisdom: 3 },
			hiddenEffects: {
				rowan_bond: 15,
				rowan_opens_deeply: true,
				family_history_shared: true,
				emotional_intimacy: true
			}
		},
		{
			id: 'demonstrate-learning',
			text: 'Demonstrate what you\'ve learned - make them proud',
			next: 'rowan_bonding_3',
			effects: { strength: 3, wisdom: 2 },
			hiddenEffects: {
				rowan_bond: 10,
				rowan_proud_teacher: true,
				skilled_student: true
			}
		}
	]
};

export const RowanBonding3: Scene = {
	id: 'rowan_bonding_3',
	text: `Late one evening, Rowan finds you studying maps and reports. Without a word, they set down a cup of tea and a plate of the manor's kitchen offerings.

"You're pushing too hard," they say quietly. "You can't solve everything in one night. The kingdom took centuries to build and seventeen years to damage. Give yourself time."

They hesitate, then add: "Your parents understood that. They worked tirelessly but also knew when to rest. When to just... be human." A slight smile. "Well, mostly human with some magical bloodline complications."

This care feels different from guardian duty. More personal. More intimate.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { rowan_romance_seed: true, shared_understanding: true }
			},
			text: `Rowan sits beside you, closer than strictly necessary. "I worry about you," they admit. "Not just because it's my duty to protect you. Because... I care. About you. The person, not just the heir."

They look vulnerable and uncertain - so different from their usual confident ranger persona. "I know this is inappropriate. Guardian falling for their charge. But spending every day with you, seeing your genuine care for people, your willingness to learn, your kindness..." They trail off.

"I'm not asking for anything," Rowan says quickly. "Just... wanted you to know. That you matter. To me. Personally."

Their hand rests on the table between you, not quite touching yours but the invitation is clear.`
		},
		{
			conditions: {
				hasHiddenAttributes: { deep_connection_formed: true }
			},
			text: `Rowan sits with you in comfortable silence, the kind that only exists between people who truly understand each other. "You know what I realized?" they say eventually. "For the first time in my life, I feel like I belong somewhere. Not because of blood or heritage or duty. Because of choice. Connection."

They meet your eyes. "Thank you for that. For seeing me as Rowan, not as 'the half-elf guardian' or 'Thornwood's embarrassment.' Just... me."`
		}
	],
	choices: [
		{
			id: 'romantic-reciprocate',
			text: 'Take their hand and reciprocate the feelings',
			next: 'rowan_romance_path',
			effects: { charisma: 5, empathy: 4 },
			hiddenEffects: {
				rowan_bond: 25,
				rowan_romance: true,
				rowan_relationship: 'romantic',
				first_kiss_imminent: true
			}
		},
		{
			id: 'friendship-affirm',
			text: 'Affirm the deep friendship without romantic element',
			next: 'rowan_friendship_path',
			effects: { empathy: 5, wisdom: 3 },
			hiddenEffects: {
				rowan_bond: 20,
				rowan_relationship: 'best_friend',
				platonic_soulmates: true,
				rowan_accepts_friendship: true
			}
		},
		{
			id: 'need-time',
			text: 'Express care but need more time to sort feelings',
			next: 'rowan_uncertain_path',
			effects: { wisdom: 4, empathy: 3 },
			hiddenEffects: {
				rowan_bond: 15,
				rowan_relationship: 'developing',
				rowan_patient: true,
				slow_burn: true
			}
		},
		{
			id: 'professional-boundary',
			text: 'Gently maintain professional boundaries',
			next: 'rowan_professional_path',
			effects: { wisdom: 4 },
			hiddenEffects: {
				rowan_bond: 10,
				rowan_relationship: 'professional',
				rowan_hurt_but_understanding: true,
				boundaries_respected: true
			}
		}
	]
};

export const RowanRomancePath: Scene = {
	id: 'rowan_romance_path',
	text: `Your hand covers Rowan's. "I feel it too," you admit. "I've been trying to convince myself it was just gratitude or admiration for your skills, but..." You meet their eyes. "It's more. You're more."

Rowan's breath catches. "I shouldn't want this. It complicates everything. Guardian and ward, noble and ranger, all the protocols..." But even as they speak, they're turning their hand to intertwine fingers with yours.

"Protocols can wait," you say softly. "Right now, I just want this moment. With you. As equals. As people who care about each other."

Rowan stands, pulling you up with them. You're close now, close enough to see the ring of darker green around their irises, close enough to feel their breath.

"May I kiss you?" Rowan asks, formal even in intimacy, always respectful.

Your answer comes not in words but in the closing of distance between you. The kiss is gentle at first - tentative, questioning. Then deeper as certainty replaces uncertainty.

When you part, Rowan rests their forehead against yours. "Whatever comes next," they whisper, "we face it together. Not guardian and heir. Partners."`,
	choices: [
		{
			id: 'affirm-partnership',
			text: 'Affirm the partnership with another kiss',
			next: 'rowan_romance_continue',
			effects: { charisma: 5, empathy: 5 },
			hiddenEffects: {
				rowan_bond: 30,
				rowan_romance_level: 2,
				committed_relationship: true,
				rowan_happiness: 100
			},
			realLifeChallenge: {
				id: 'rowan_vulnerable_moment',
				type: 'social',
				title: 'Share a Vulnerable Moment',
				description: 'Like Rowan opening up about their feelings, share something vulnerable with your real-life partner',
				instructions: 'Spend quality time with your partner and share something you\'ve been feeling but haven\'t expressed - a fear, hope, or dream. Practice active listening when they respond.',
				durationMinutes: 30,
				verificationMethod: 'honor',
				rewards: {
					stats: { empathy: 3, charisma: 2 },
					message: 'Your vulnerability strengthened your real-life connection, just as it did with Rowan.'
				}
			}
		},
		{
			id: 'discuss-challenges',
			text: 'Discuss the challenges this relationship will face',
			next: 'rowan_romance_continue',
			effects: { wisdom: 5, empathy: 3 },
			hiddenEffects: {
				rowan_bond: 28,
				rowan_romance_level: 2,
				realistic_romance: true,
				planning_together: true
			}
		}
	]
};

export const RowanRomanceContinue: Scene = {
	id: 'rowan_romance_continue',
	text: `Your romantic relationship with Rowan deepens as you navigate noble duties and wilderness excursions together. They teach you tracking in the morning, you practice diplomacy in the afternoon, and in the evenings you find moments of intimacy away from prying eyes.

"I never thought I'd have this," Rowan admits during one such evening. "Someone who understands the wildness in me and the duty that binds me. Someone who sees both the ranger and the person." They kiss you softly. "You make me whole in ways I didn't know I needed."

Your relationship becomes a model of balance - wilderness and civilization, duty and desire, strength and tenderness intertwined.`,
	textVariants: [
		{
			conditions: { hasFlags: ['committed_relationship'] },
			text: `Your romantic relationship with Rowan deepens into something profound and lasting. They introduce you to their ranger network as their partner - an acknowledgment that speaks volumes in their community.

"You've given me permission to be whole," Rowan says, arms around you under the stars. "Guardian and lover. Wild and civilized. Duty and devotion all at once." They hold you close. "I thought I had to choose. You showed me I could be everything."

Your love is built on mutual respect, shared adventures, and absolute trust.`
		},
		{
			conditions: { hasFlags: ['realistic_romance'] },
			text: `Your romantic relationship with Rowan faces challenges but grows stronger for them. Court whispers about propriety, questions about their ranger background, the complexities of guardian and heir becoming lovers.

But you face each obstacle together with honesty and planning. "We knew this wouldn't be easy," Rowan says pragmatically. "But nothing worthwhile is. And you're worth every complication, every negotiation, every raised eyebrow from stuffy nobles."

Your love is built on realistic expectations, shared problem-solving, and choosing each other daily despite difficulties.`
		}
	],
	choices: [
		{
			id: 'continue-together',
			text: 'Continue building your life together',
			effects: { empathy: 6, wisdom: 5 },
			hiddenEffects: {
				rowan_bond: 25,
				romantic_partnership_complete: true,
				rowan_endgame: 'romantic_partner'
			}
		}
	]
};

export const RowanFriendshipPath: Scene = {
	id: 'rowan_friendship_path',
	text: `You squeeze Rowan's hand warmly. "You're incredibly important to me," you say honestly. "One of the most important people in my life. But I value what we have as friends - this deep understanding, this trust. I don't want romantic complications to risk losing that."

You see a flash of disappointment in Rowan's eyes, but they manage a genuine smile. "I understand," they say. "And honestly? Having you as a true friend, someone who actually sees me... that's rarer and maybe more valuable than romance."

They grip your hand firmly before releasing it. "No awkwardness, no distance. We're still partners in this impossible task of saving a kingdom. Still the people who understand each other's struggles. Just... friends who would die for each other rather than lovers. I can live with that."

The tension in the room eases into something comfortable and solid. "Actually," Rowan adds with growing certainty, "I'm glad we talked about this. Clear communication, honest feelings, mutual respect. This is what real friendship looks like."`,
	choices: [
		{
			id: 'cement-friendship',
			text: 'Cement the friendship with a meaningful gesture or ritual',
			next: 'rowan_training_advanced',
			effects: { empathy: 5, wisdom: 4 },
			hiddenEffects: {
				rowan_bond: 25,
				rowan_relationship: 'soul_friend',
				platonic_life_partner: true,
				rowan_at_peace: true
			}
		}
	]
};

export const RowanUncertainPath: Scene = {
	id: 'rowan_uncertain_path',
	text: `"I care about you deeply," you say carefully. "But there's so much happening - the kingdom, the conspiracy, everything. I need time to understand my own feelings before making promises I might not be able to keep."

Rowan nods slowly, processing. "That's fair," they say after a moment. "Honest, at least. I'd rather have truth than false hope." They manage a small smile. "And patient waiting is something rangers are good at. We can track prey for days without rushing."

"This isn't a hunt," you protest gently.

"No," Rowan agrees, "but it is about being present and alert. Noticing when things change. I can do that." They touch your hand briefly. "Take your time. I'll be here, as your guardian, your friend, and... whatever else we might become."`,
	choices: [
		{
			id: 'grateful',
			text: 'Express gratitude for their patience and understanding',
			next: 'rowan_training_advanced',
			effects: { empathy: 4, wisdom: 3 },
			hiddenEffects: {
				rowan_bond: 17,
				rowan_relationship: 'developing',
				future_possible: true
			}
		}
	]
};

export const RowanProfessionalPath: Scene = {
	id: 'rowan_professional_path',
	text: `"I value you as my guardian and advisor," you say carefully. "But I think maintaining professional boundaries is best for both of us. The position is complicated enough without personal entanglements."

Rowan goes very still, then nods once, sharply. "Understood." Their voice is level but you catch the hurt beneath. "I apologize for overstepping. It won't happen again."

"Rowan, I didn't mean—"

"No, you're right," they interrupt, standing. "Clear boundaries are professional. I'll maintain them." They bow formally - something they haven't done in weeks. "Is there anything else you need, Your Highness?"

The distance they've put between you feels vast and cold. But they're respecting your choice, even as it clearly pains them.`,
	choices: [
		{
			id: 'accept-distance',
			text: 'Accept the necessary professional distance',
			next: 'rowan_training_advanced',
			effects: { wisdom: 4 },
			hiddenEffects: {
				rowan_bond: 12,
				rowan_relationship: 'professional',
				rowan_walls_back_up: true
			}
		}
	]
};

export const RowanTrainingSession: Scene = {
	id: 'rowan_training_advanced',
	text: `Weeks after your initial lessons, Rowan suggests advanced wilderness training. "You've mastered basics," they say. "Now let's see if you can survive three days in the deep forest. Just you, me, and what we can carry."

This is a test, but also an adventure. Three days alone in the wilderness together.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { rowan_romance: true }
			},
			text: `"Three days," Rowan says with a meaningful look. "Away from the manor, from politics, from everyone watching and judging. Just us and the forest." The romantic possibility hangs unspoken but electric in the air.

"We'll need to camp," they add, a hint of nervousness beneath the ranger confidence. "Share a fire. Share... space." They meet your eyes. "If that's alright with you."`
		},
		{
			conditions: {
				hasHiddenAttributes: { rowan_relationship: 'best_friend' }
			},
			text: `"Three days," Rowan grins. "Remember when you could barely walk quietly? Now you're ready for serious wilderness survival. I'm proud of you, friend."

They clap your shoulder affectionately. "This'll be fun. No servants, no nobles, no expectations. Just two people who trust each other completely, testing skills and enjoying the forest. Like the adventure we both needed."`
		}
	],
	choices: [
		{
			id: 'accept-eagerly',
			text: 'Accept eagerly - you trust Rowan completely',
			next: 'rowan_forest_expedition',
			effects: { courage: 4, strength: 3 },
			hiddenEffects: {
				rowan_bond: 15,
				wilderness_adventure: true,
				deepening_relationship: true
			}
		},
		{
			id: 'accept-nervously',
			text: 'Accept but admit nervousness about being so remote',
			next: 'rowan_forest_expedition',
			effects: { courage: 3, empathy: 2 },
			hiddenEffects: {
				rowan_bond: 12,
				rowan_reassures: true,
				vulnerable_honesty: true
			}
		}
	]
};

export const RowanForestExpedition: Scene = {
	id: 'rowan_forest_expedition',
	text: `The deep forest is magnificent and humbling. Ancient trees tower overhead, sunlight filtering through in golden shafts. Rowan moves through this world like a dancer, at perfect ease, and you do your best to follow.

By evening of the first day, you've set camp by a clear stream. Rowan builds the fire with practiced efficiency while you gather water and prepare food. The partnership feels natural, each contributing skills without need for discussion.

As stars emerge overhead, Rowan leans back against a log, genuinely relaxed in a way you rarely see at the manor. "This is home," they say quietly. "Not buildings or politics. This. Trees, stars, earth beneath you, fire for warmth. Everything else is just... noise."

Over the next three days, you and Rowan grow even closer. Whether romantic partners, best friends, or something developing, the time in the wilderness cements your bond. You learn to read each other's movements, communicate with glances, trust completely in dangerous situations.

By the time you return to the manor, something fundamental has shifted. Your relationship - whatever form it takes - is unshakeable.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { rowan_romance: true }
			},
			text: `Under the stars, Rowan moves closer, fingers finding yours. "I needed this," they admit. "Time with you without guards or advisors or responsibilities. Just... us."

The firelight catches their features, making them look almost ethereal. "Thank you for trusting me enough to come out here. For wanting to understand my world." They lean in, kissing you softly. "For being someone I can truly be myself with."

The three days become a honeymoon of sorts - stolen kisses by the stream, falling asleep wrapped in each other's arms, waking to birdsong and gentle touches. You return to the manor changed, your romance deepened into something unbreakable.`
		},
		{
			conditions: {
				hasHiddenAttributes: { rowan_relationship: 'soul_friend' }
			},
			text: `Rowan offers you some dried fruit from their pack. "You know what's amazing?" they say. "We can sit in silence or talk for hours, and both feel equally comfortable. That's rare. Most people need constant noise or get awkward with quiet."

They smile at you warmly. "You're one of my favorite people. Just wanted you to know that."

Over the three days, you share stories, fears, hopes. You become the kind of friends who know each other's souls - platonic soulmates who would face anything together.`
		},
		{
			conditions: {
				hasHiddenAttributes: { rowan_relationship: 'professional' }
			},
			text: `Despite the earlier professional boundary discussion, being in Rowan's natural element makes the distance harder to maintain. You see them fully relaxed and authentic in ways the manor doesn't allow.

The training is exceptional, and you both maintain appropriate conduct. But there are moments - catching each other's eyes across the fire, working in perfect synchrony - where you wonder if you made the right choice. Still, boundaries remain respected.`
		}
	],
	choices: [
		{
			id: 'return-stronger',
			text: 'Return to the manor with your bond strengthened',
			effects: { wisdom: 5, strength: 4, empathy: 4 },
			hiddenEffects: {
				rowan_bond: 15,
				expedition_complete: true,
				relationship_cemented: true
			}
		}
	]
};

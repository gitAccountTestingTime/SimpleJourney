import { Scene } from '../../story-manager';

/**
 * RELATIONSHIPS: Deep relationship building with Lyra Nightshade
 * Progression: Cautious Healer → Trusted Confidant → Romantic Interest (optional)
 * Themes: Redemption, magical intimacy, overcoming family shame, vulnerability
 */

export const LyraBonding1: Scene = {
	id: 'lyra_bonding_1',
	text: `You find Lyra in the manor's healing chamber, surrounded by herbs and potions. She's muttering healing incantations, but there's tension in her shoulders that suggests she's using work to avoid something.

"Your Highness," she says formally when she notices you, immediately bowing. Always so proper, always keeping distance.

"Just checking on you," you say. "You've been working long hours. Are you alright?"

Lyra's mask of composure cracks slightly. "I'm... managing." Her hands tremble as she sets down a vial. "I apologize. I should be more composed."`,
	choices: [
		{
			id: 'sit-with-her',
			text: 'Sit down and invite her to talk',
			next: 'lyra_bonding_1b',
			effects: { empathy: 4 },
			hiddenEffects: {
				lyra_bond: 12,
				lyra_feels_safe: true,
				gentle_approach: true
			}
		},
		{
			id: 'acknowledge-strain',
			text: 'Acknowledge the strain she must feel here',
			next: 'lyra_bonding_1b',
			effects: { empathy: 5, wisdom: 2 },
			hiddenEffects: {
				lyra_bond: 15,
				lyra_feels_understood: true,
				perceptive_leader: true
			}
		},
		{
			id: 'offer-break',
			text: 'Offer to take a break together - walk the gardens',
			next: 'lyra_bonding_1b',
			effects: { charisma: 3, empathy: 2 },
			hiddenEffects: {
				lyra_bond: 10,
				lyra_grateful: true,
				caring_gesture: true
			}
		}
	]
};

export const LyraBonding1B: Scene = {
	id: 'lyra_bonding_1b',
	text: `Lyra is quiet for a long moment, then speaks barely above a whisper: "Every day I work in this manor, I feel Morgaine's shadow. My ancestor nearly destroyed everything the Silverwoods built. Your grandmother showed mercy to my family when she could have executed us all."

She looks at you with those striking violet eyes. "I serve you to atone for her sins. But sometimes I wonder... is that enough? Can three generations of loyal service ever erase what she did? Or will Nightshades always be the family that betrayed?"

Tears threaten but she fights them back. "Lady Aelindra watches me constantly, waiting for signs of corruption. The other mages whisper when I pass. And you..." She swallows. "You're kind to me. But do you trust me? Really? Or do you also wonder if darkness runs in my blood?"`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { lyra_feels_understood: true }
			},
			text: `Seeing your genuine understanding, Lyra's composure finally breaks. "I'm so tired," she admits through tears. "Tired of apologizing for existing. Tired of working twice as hard to be seen as half as worthy. Tired of carrying shame for choices I never made."

She looks at you desperately. "I just want to be seen as Lyra. Not 'that Nightshade girl.' Not a walking reminder of betrayal. Just... me. The healer who wants to help people. The mage who loves learning. The person who..." She stops, vulnerable and exposed.`
		}
	],
	choices: [
		{
			id: 'affirm-trust',
			text: 'Affirm complete trust - she is not her ancestor',
			next: 'lyra_bonding_2',
			effects: { empathy: 5, charisma: 4 },
			hiddenEffects: {
				lyra_bond: 20,
				lyra_burden_lifted: true,
				deep_trust_established: true,
				lyra_cries_relief: true
			}
		},
		{
			id: 'share-own-burden',
			text: 'Share your own burden of family legacy and expectations',
			next: 'lyra_bonding_2',
			effects: { empathy: 6, wisdom: 3 },
			hiddenEffects: {
				lyra_bond: 22,
				mutual_understanding: true,
				shared_burden: true,
				lyra_romance_seed: true
			}
		},
		{
			id: 'practical-support',
			text: 'Offer practical ways to improve her situation and reputation',
			next: 'lyra_bonding_2',
			effects: { wisdom: 5, charisma: 2 },
			hiddenEffects: {
				lyra_bond: 15,
				lyra_appreciates_solutions: true,
				active_ally: true
			}
		},
		{
			id: 'hold-her',
			text: 'Simply hold her and let her cry',
			next: 'lyra_bonding_2',
			effects: { empathy: 7 },
			hiddenEffects: {
				lyra_bond: 25,
				lyra_feels_safe_crying: true,
				physical_comfort_given: true,
				intimacy_seed: true,
				lyra_romance_possible: true
			}
		}
	]
};

export const LyraBonding2: Scene = {
	id: 'lyra_bonding_2',
	text: `Days later, Lyra seeks you out. "I wanted to thank you," she says, "for the other day. For listening. For... caring." She's still formal but there's warmth beneath the propriety now.

"I made something for you," she adds, producing a small crystal vial with iridescent liquid. "It's a ward against magical detection. If someone tries to spy on you with magic, this will alert you." She hesitates. "It's also... a Nightshade family recipe. One of the few useful things my ancestor left behind besides infamy."

The gesture is significant - sharing family magic, trusting you with Nightshade secrets.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { mutual_understanding: true, lyra_romance_seed: true }
			},
			text: `Lyra hands you the vial, fingers brushing yours. She doesn't immediately pull away. "Making this required blood magic," she explains softly. "My blood, specifically. So it's attuned to you through me. If danger threatens, you'll feel it through our connection."

She meets your eyes. "That means there's a thread between us now. A small one, but real. You'll be able to sense when I'm nearby, and I'll sense you. I thought... I hoped that would be alright."

The magical intimacy she's describing is profound - a deliberate tethering of your essences.`
		},
		{
			conditions: {
				hasHiddenAttributes: { deep_trust_established: true }
			},
			text: `"This represents more than just protection magic," Lyra says quietly. "It's me saying that I trust you with Nightshade secrets. That I believe you're different from those who condemned my family. That maybe together, we can write a new chapter - not defined by old betrayals but by new loyalty."

Her smile is small but genuine. "You've given me hope. That's a rare gift."`
		}
	],
	choices: [
		{
			id: 'treasure-gift',
			text: 'Express how much the gift and gesture mean to you',
			next: 'lyra_bonding_3',
			effects: { empathy: 4, charisma: 3 },
			hiddenEffects: {
				lyra_bond: 15,
				lyra_feels_valued: true,
				gift_cherished: true
			}
		},
		{
			id: 'ask-about-magic',
			text: 'Ask about the magic and Nightshade techniques',
			next: 'lyra_bonding_3',
			effects: { wisdom: 5 },
			hiddenEffects: {
				lyra_bond: 12,
				magical_learning: true,
				lyra_teaches_secrets: true
			}
		},
		{
			id: 'flirt-connection',
			text: 'Comment on the intimacy of being magically connected',
			next: 'lyra_bonding_3',
			effects: { charisma: 5 },
			hiddenEffects: {
				lyra_bond: 14,
				lyra_blushes: true,
				romantic_tension: true,
				lyra_romance_advancing: true
			}
		},
		{
			id: 'offer-reciprocal',
			text: 'Offer to create a reciprocal bond - true magical equality',
			next: 'lyra_bonding_3',
			effects: { wisdom: 4, empathy: 4 },
			hiddenEffects: {
				lyra_bond: 20,
				lyra_overwhelmed_positive: true,
				equal_partnership: true,
				magical_pair_bond: true
			}
		}
	]
};

export const LyraBonding3: Scene = {
	id: 'lyra_bonding_3',
	text: `Late one night, you're awakened by distress through the magical connection with Lyra. Following the thread, you find her in the healing chamber, surrounded by scattered grimoires, clearly having a crisis.

"I can't do this," she's muttering. "I'm not strong enough, not skilled enough. Lady Aelindra is right - I'm a mediocre healer pretending to serve a crown."

She jumps when she sees you. "I'm sorry! I didn't mean to wake you. The connection - I should have shielded better." She's embarrassed and distraught.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { magical_pair_bond: true }
			},
			text: `Through your reciprocal bond, you feel Lyra's emotions clearly: crushing self-doubt, fear of inadequacy, desperate need to prove worth. But also - surprisingly - her feelings for you, deep and complicated and carefully hidden until now.

"You can feel it," she realizes, horror and vulnerability washing over her face. "Through the bond. All of it. My insecurities, my fears, my..." She stops, unable to say it. Her feelings for you, obvious now through magical connection, hang between you unspoken but undeniable.`
		},
		{
			conditions: {
				hasHiddenAttributes: { lyra_romance_advancing: true }
			},
			text: `"It's not just professional pressure," Lyra admits quietly. "It's... personal. I care what you think of me. More than I should. More than is appropriate for a healer and her charge." She looks away. "I'm sorry. I'm making this awkward."

But her hands are shaking and you can see she's barely holding together.`
		}
	],
	choices: [
		{
			id: 'reassure-abilities',
			text: 'Reassure her of her abilities and worth',
			next: 'lyra_bonding_crisis_resolution',
			effects: { empathy: 5, charisma: 4 },
			hiddenEffects: {
				lyra_bond: 18,
				lyra_crisis_overcome: true,
				confidence_restored: true
			}
		},
		{
			id: 'address-feelings',
			text: 'Gently address the feelings between you',
			next: 'lyra_romance_path',
			effects: { empathy: 6, charisma: 5 },
			hiddenEffects: {
				lyra_bond: 25,
				lyra_romance: true,
				feelings_mutual: true,
				lyra_relationship: 'romantic'
			}
		},
		{
			id: 'offer-training',
			text: 'Offer to train together - improve skills side by side',
			next: 'lyra_bonding_crisis_resolution',
			effects: { wisdom: 4, empathy: 3 },
			hiddenEffects: {
				lyra_bond: 15,
				training_partnership: true,
				practical_support: true
			}
		},
		{
			id: 'share-vulnerability',
			text: 'Share your own moments of feeling inadequate',
			next: 'lyra_bonding_crisis_resolution',
			effects: { empathy: 7, wisdom: 3 },
			hiddenEffects: {
				lyra_bond: 22,
				mutual_vulnerability: true,
				deep_emotional_bond: true,
				lyra_not_alone: true
			}
		}
	]
};

export const LyraRomancePath: Scene = {
	id: 'lyra_romance_path',
	text: `You step closer to Lyra. "I feel it too," you say softly. "Through the bond and without it. You're brilliant, dedicated, kind. How could I not develop feelings?"

Lyra's breath catches. "But I'm... I'm Nightshade. Tainted bloodline. You could have anyone - nobles, heroes, people without cursed ancestors. Why would you choose someone carrying such shame?"

"Because you're not your ancestor," you say firmly. "You're Lyra. The healer who stays up late perfecting potions to help people. The mage who teaches me with such patience. The woman who bears incredible burdens with grace." You take her hands. "I see you. All of you. And I want this. If you do."

Tears stream down Lyra's face. "I do. Gods help me, I do. I've tried not to, tried to stay professional, but..." She lets out a shaky laugh. "The bond made hiding impossible. You feel what I feel. You know."

"I know," you confirm. "And I'm here, choosing you, knowing everything."

Lyra closes the distance, kissing you desperately - like someone drowning finally finding air. When you part, she whispers: "Thank you. For seeing me. For choosing me. For making me feel like maybe I deserve something good after all."`,
	choices: [
		{
			id: 'deepen-bond',
			text: 'Suggest deepening the magical bond - true soul connection',
			next: 'lyra_romance_continue',
			effects: { wisdom: 5, empathy: 5 },
			hiddenEffects: {
				lyra_bond: 35,
				lyra_romance_level: 2,
				soul_bonded: true,
				magical_intimacy: true,
				lyra_complete_trust: true
			},
			realLifeChallenge: {
				id: 'lyra_create_together',
				type: 'creative',
				title: 'Create Something Together',
				description: 'Like Lyra teaching you magic, create something with your partner that requires both of your skills',
				instructions: 'Work together with your partner on a creative project - cook a new recipe, craft something, solve a puzzle, or build something. The focus is on collaboration and learning from each other.',
				durationMinutes: 60,
				verificationMethod: 'honor',
				rewards: {
					stats: { wisdom: 3, empathy: 3 },
					message: 'Creating together deepened your bond, just like learning magic with Lyra.'
				}
			}
		},
		{
			id: 'affirm-choice',
			text: 'Affirm this is real and you won\'t let anyone separate you',
			next: 'lyra_romance_continue',
			effects: { courage: 5, charisma: 4 },
			hiddenEffects: {
				lyra_bond: 30,
				lyra_romance_level: 2,
				devoted_relationship: true,
				lyra_feels_secure: true
			}
		}
	]
};

export const LyraRomanceContinue: Scene = {
	id: 'lyra_romance_continue',
	text: `Your romance with Lyra transforms both your lives. The magical bond between you deepens into something sacred - not just mage and student but soulmates in the truest sense.

Lyra's confidence grows as your relationship becomes known. "You stand beside me publicly," she says with wonder. "You don't hide what we have despite my Nightshade heritage. You've given me permission to be proud of myself."

Together you work to change perceptions of blood magic, to honor Nightshade legacy while forging new understanding. Your love becomes proof that bloodlines don't define destiny.`,
	textVariants: [
		{
			conditions: { hasFlags: ['soul_bonded'] },
			text: `Your romance with Lyra reaches its ultimate expression through the soul bond. The magical connection between you becomes permanent, unbreakable - two souls intertwined across space and distance.

"I feel you always now," Lyra whispers, pressing her hand to your chest where the bond glows faintly. "Your emotions, your presence, even when we're apart. We're never alone again." Tears of joy stream down her face. "I never dreamed I'd have this. Soul bonding is Nightshade magic at its most intimate, and you chose it. Chose me. Forever."

Your love transcends physical boundaries, magical and eternal.`
		},
		{
			conditions: { hasFlags: ['devoted_relationship'] },
			text: `Your romance with Lyra becomes the foundation both of you build your lives upon. You defend her publicly against those who judge her bloodline, she supports you through political complexities.

"You fight for me," Lyra says, voice thick with emotion. "Not just with words but with actions. You've shown me I deserve devotion, deserve someone who'll stand beside me against the world's judgment." She kisses you deeply. "I'll spend my life earning that faith. Proving I'm worth what you see in me."

Your love is fierce, devoted, and publicly declared despite all opposition.`
		}
	],
	choices: [
		{
			id: 'embrace-future',
			text: 'Embrace your shared future',
			effects: { empathy: 7, wisdom: 6 },
			hiddenEffects: {
				lyra_bond: 30,
				romantic_soulmates: true,
				lyra_endgame: 'romantic_partner'
			}
		}
	]
};

export const LyraMagicLesson: Scene = {
	id: 'lyra_magic_lesson_advanced',
	text: `Lyra offers to teach you advanced blood magic - techniques beyond what she's shown before. "Nightshade family magic," she explains. "Normally I wouldn't share it, but... you're different. And I trust you."

She leads you to a private chamber with complex wards. "This is healing through soul-touch," she says. "Beyond physical wounds into emotional and spiritual damage. It's intimate magic - requires absolute trust and vulnerability from both caster and recipient."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { lyra_romance: true }
			},
			text: `"Soul-touch magic between bonded partners is especially powerful," Lyra says, voice soft. "Our existing connection makes it easier but also more intense. When I heal your wounds, you'll feel not just my magic but my emotions. And I'll feel yours."

She looks nervous but determined. "It's the most intimate magic I know. More intimate than..." She blushes. "Well. Very intimate. Are you comfortable with that level of connection?"

The magical and emotional vulnerability she's describing would bind you closer than any physical act.`
		}
	],
	choices: [
		{
			id: 'learn-eagerly',
			text: 'Learn eagerly - trust Lyra completely with this intimacy',
			next: 'lyra_magic_deepening',
			effects: { wisdom: 5, empathy: 5 },
			hiddenEffects: {
				lyra_bond: 20,
				soul_touch_learned: true,
				magical_intimacy_advanced: true,
				lyra_teaching_master: true
			}
		},
		{
			id: 'reciprocal-healing',
			text: 'Propose learning together - heal each other\'s wounds',
			next: 'lyra_magic_deepening',
			effects: { wisdom: 4, empathy: 6 },
			hiddenEffects: {
				lyra_bond: 25,
				mutual_healing: true,
				equal_magic_partnership: true,
				lyra_overcome_by_trust: true
			}
		}
	]
};

export const LyraConfrontingPast: Scene = {
	id: 'lyra_confronting_past',
	text: `Lyra receives a summons from Lady Aelindra Moonwhisper - a formal review of her service to you. She's terrified.

"Aelindra controls my family's fate," Lyra explains, hands shaking. "If she deems my service inadequate, I'll be recalled to Moonwhisper and assigned... elsewhere. Probably locked in a library or healing ward where I can't 'embarrass' the house."

She looks at you desperately. "I don't want to leave. This position, serving you, working beside you... it's the first time I've felt valued for what I can do rather than tolerated despite my name."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { lyra_romance: true }
			},
			text: `Lyra grips your hands. "If Aelindra takes me away, we..." Tears threaten. "We just found each other. Found this. I can't lose you. I can't go back to being a shameful secret hidden in Moonwhisper's towers."

Her voice breaks. "Tell me you'll fight for me. That this isn't just... convenient. That you want me to stay not because I'm useful but because I'm... because we're..."

She can't finish, but the question is clear: Does she truly matter to you?`
		}
	],
	choices: [
		{
			id: 'accompany-meeting',
			text: 'Accompany her to the meeting - defend her directly',
			next: 'lyra_aelindra_confrontation',
			effects: { courage: 6, charisma: 5 },
			hiddenEffects: {
				lyra_bond: 25,
				stood_up_for_lyra: true,
				confronted_aelindra: true,
				lyra_protected: true
			}
		},
		{
			id: 'claim-authority',
			text: 'Claim royal authority - she serves you, not Moonwhisper',
			next: 'lyra_aelindra_confrontation',
			effects: { courage: 7, charisma: 4 },
			hiddenEffects: {
				lyra_bond: 22,
				claimed_lyra: true,
				political_statement: true,
				moonwhisper_challenged: true
			}
		},
		{
			id: 'promise-fight',
			text: 'Promise you won\'t let anyone take her from you',
			next: 'lyra_aelindra_confrontation',
			effects: { courage: 5, empathy: 5 },
			hiddenEffects: {
				lyra_bond: 30,
				devoted_protection: true,
				lyra_feels_chosen: true,
				love_declared: true
			}
		}
	]
};

export const LyraAelindraConfrontation: Scene = {
	id: 'lyra_aelindra_confrontation',
	text: `Lady Aelindra receives you in Starfall Spire's highest chamber. The ancient elf examines Lyra with critical eyes, then turns to you.

"I'm told you've become quite... attached to your Nightshade healer," Aelindra says coolly. "Some whisper it's inappropriate. That she's using family magic to manipulate your emotions. That Nightshades are showing their true colors - seduction and control."

Lyra goes pale but you feel fury through your bond. Not at the accusation - she expected it. But at the injustice, the assumption that any care shown to a Nightshade must be manipulation.

"So I will ask directly, young Silverwood: Does Lyra Nightshade serve you well? Or should I remove her and assign someone less... complicated?"`,
	choices: [
		{
			id: 'defend-completely',
			text: 'Defend Lyra completely - she\'s invaluable and chosen freely',
			next: 'lyra_vindication',
			effects: { courage: 7, charisma: 6 },
			hiddenEffects: {
				lyra_bond: 35,
				aelindra_accepts: true,
				nightshade_vindicated: true,
				lyra_free: true,
				public_declaration: true
			}
		},
		{
			id: 'romantic-declaration',
			text: 'Declare your romantic relationship - let Aelindra try to stop you',
			next: 'lyra_vindication',
			effects: { courage: 8, charisma: 5 },
			hiddenEffects: {
				lyra_bond: 40,
				relationship_public: true,
				defied_aelindra: true,
				scandalous_romance: true,
				lyra_overwhelmed_joy: true
			}
		},
		{
			id: 'respect-but-firm',
			text: 'Respectfully but firmly assert Lyra stays on your terms',
			next: 'lyra_vindication',
			effects: { wisdom: 6, charisma: 5 },
			hiddenEffects: {
				lyra_bond: 30,
				aelindra_respects: true,
				diplomatic_victory: true,
				lyra_secure: true
			}
		}
	]
};

export const LyraVindication: Scene = {
	id: 'lyra_vindication',
	text: `Your defense of Lyra is unwavering. Whether through diplomatic skill or bold defiance, you make it clear that she stays, that she's chosen, that her Nightshade name doesn't define her worth.

Lady Aelindra studies you both for a long, tense moment. Finally, she inclines her head slightly. "Very well. If the Silverwood heir vouches for a Nightshade with such conviction, who am I to interfere?" Her eyes narrow. "But know this: the magical community watches. Nightshade redemption must be earned continuously, not assumed."

After Aelindra departs, Lyra collapses against you, shaking with relief. "You stood up for me," she whispers. "Against Lady Aelindra. Against centuries of prejudice. You chose me."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { relationship_public: true }
			},
			text: `"You declared us," Lyra says through tears of joy. "Publicly. Despite the scandal, despite the judgment. You told the most powerful mage in the kingdom that you love a Nightshade and don't care who knows it."

She kisses you desperately. "I'm yours. Completely. And you're mine. Let them whisper. Let them judge. We have each other, and that's everything."`
		}
	],
	choices: [
		{
			id: 'affirm-choice',
			text: 'Affirm you\'d make the same choice every time',
			effects: { empathy: 6, courage: 5 },
			hiddenEffects: {
				lyra_bond: 20,
				lyra_secure_forever: true,
				nightshade_redeemed: true
			}
		}
	]
};

export const LyraBondingCrisisResolution: Scene = {
	id: 'lyra_bonding_crisis_resolution',
	text: `After the crisis passes, Lyra finds steadier footing. Your support - whether reassurance, partnership, or shared vulnerability - helps her see past the immediate failure to the larger truth: she's valuable, skilled, and deserving of her place.

"I let one mistake define everything," she reflects. "But you showed me that's not how it works. We're allowed to be imperfect. Allowed to struggle without losing worth."

She takes your hand. "Thank you for being patient with me. For not abandoning ship when I spiral. That means more than you know."

Your relationship deepens, whether as trusted magical partners, close friends, or something more developing over time.`,
	choices: [
		{
			id: 'continue-forward',
			text: 'Continue forward together, stronger for the trial',
			effects: { wisdom: 4, empathy: 5 },
			hiddenEffects: {
				lyra_bond: 15,
				crisis_overcome: true,
				relationship_tested: true
			}
		}
	]
};

export const LyraMagicDeepening: Scene = {
	id: 'lyra_magic_deepening',
	text: `Learning soul-touch magic with Lyra creates an intimacy beyond words. As she guides you through the techniques, you feel her essence completely - her dedication, her fears, her hopes, her feelings for you laid bare through magical connection.

The vulnerability is profound and mutual. She senses your emotions just as clearly. There's nowhere to hide, no masks to maintain. Just two souls touching completely.

When the lesson concludes, you're both changed. The magical bond between you has deepened into something unbreakable, whether as magical partners, devoted friends, or lovers bound by more than just physical attraction.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { lyra_romance: true }
			},
			text: `The soul-touch magic between romantic partners is overwhelmingly intimate. You feel Lyra's love for you as clearly as your own heartbeat. She feels yours in return. The magical connection mirrors and amplifies the emotional one.

"This is forever," Lyra whispers, tears streaming. "Soul-bonds don't break. We're connected now in ways even death can't fully sever." She kisses you softly. "I'm glad it's you. Glad it's us."`
		}
	],
	choices: [
		{
			id: 'embrace-bond',
			text: 'Embrace the profound magical and emotional bond',
			effects: { wisdom: 6, empathy: 7 },
			hiddenEffects: {
				lyra_bond: 25,
				soul_bonded_complete: true,
				magical_mastery: true
			}
		}
	]
};

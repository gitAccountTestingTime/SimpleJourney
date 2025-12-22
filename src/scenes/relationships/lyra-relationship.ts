import { Scene } from '../../story-manager';

/**
 * RELATIONSHIPS: Deep relationship building with Lyra Nightshade
 * Progression: Cautious Healer → Trusted Confidant → Romantic Interest (optional)
 * Themes: Redemption, magical intimacy, overcoming family shame, vulnerability
 */

export const LyraBonding1: Scene = {
	id: 'lyra_bonding_1',
	text: `You find Lyra in manor's healing chamber late into evening, surrounded by carefully arranged herbs drying on racks and potions bubbling in delicate glass vessels that catch candlelight with prismatic effect. Sharp scent of medicinal plants fills air - sage and nightshade mixed with something sweeter, almost floral. She's muttering healing incantations under breath with practiced cadence, violet eyes focused on work before her, but there's visible tension in her shoulders that suggests she's using work to avoid confronting something painful lurking beneath surface.

"Your Highness," she says formally with immediate respect when she notices your presence, bowing deeply as protocol demands. Always so proper in her demeanor, always keeping careful distance as if afraid proximity might contaminate you with her family's shame. The formality feels like armor protecting wounded heart.

"Just checking on you," you say gently, stepping into chamber filled with soft glow of enchanted candles. "You've been working excessively long hours recently. Are you alright?"

Lyra's carefully maintained mask of composure cracks slightly like ice under pressure, vulnerability bleeding through professional facade. "I'm... managing," she says with voice barely steady, unconvincing even to herself. Her hands tremble noticeably as she sets down crystalline vial containing luminescent liquid, fingers shaking despite years of steady healing work. "I apologize for weakness. I should be more composed and controlled."`,
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
	text: `Lyra is quiet for long moment that stretches uncomfortably, gathering courage to voice thoughts usually kept buried deep. Then she speaks barely above whisper, words trembling with vulnerability: "Every single day I work in this manor serving your family, I feel Morgaine's shadow looming over me like curse I can't escape. My ancestor nearly destroyed everything the Silverwoods built over generations through betrayal and dark magic. Your grandmother showed mercy to my family when she had every legal right to execute us all publicly as traitors deserving death."

She looks at you with those striking violet eyes that mark Nightshade bloodline, expression mixing shame with desperate hope. "I serve you faithfully to atone for her sins that aren't mine but I inherit regardless. But sometimes I wonder with crushing doubt... is that enough? Can three generations of loyal service and dedication ever erase what she did with her betrayal? Or will Nightshades always be the cursed family that betrayed kingdom's trust when needed most?"

Tears threaten to spill but she fights them back with visible effort, jaw clenching. "Lady Aelindra watches me constantly with suspicious eyes, waiting for signs of corruption manifesting. The other mages whisper when I pass in corridors, conversations dying abruptly. And you..." She swallows hard. "You're kind to me when you don't have to be. But do you actually trust me? Really trust me deep down? Or do you also wonder privately if darkness runs in my blood like hereditary disease, waiting to emerge?"`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { lyra_feels_understood: true }
			},
			text: `Seeing your genuine understanding reflected in eyes, Lyra's carefully maintained composure finally breaks completely like dam collapsing. "I'm so tired," she admits through tears flowing freely now, voice cracking with exhaustion that goes far beyond physical. "Tired of apologizing endlessly for existing. Tired of working twice as hard to be seen as half as worthy as someone without cursed name. Tired of carrying crushing shame for choices I never made, sins committed before my birth."

She looks at you desperately with violet eyes swimming in tears, pleading for understanding. "I just want to be seen as Lyra - individual person with value. Not 'that Nightshade girl carrying tainted blood.' Not walking reminder of betrayal that happened generations ago. Just... me. The healer who wants desperately to help people and ease suffering. The mage who loves learning new techniques. The person who..." She stops abruptly, vulnerable and exposed, unable to finish confession hovering on lips.`
		}
	],
	choices: [
		{
			id: 'affirm-trust',
			text: 'Affirm complete trust - she is not her ancestor',
			next: 'faction_choice_point',
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
			next: 'faction_choice_point',
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
			next: 'faction_choice_point',
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
	text: `Days later after vulnerable conversation, Lyra seeks you out with purposeful determination rather than her usual hesitant approach. "I wanted to thank you," she says with formality softened by genuine warmth, "for the other day when I broke down. For listening without judgment. For... caring about me as person rather than just useful servant." She's still formal in speech patterns but there's warmth beneath propriety now, ice beginning to thaw.

"I made something for you," she adds, producing small crystal vial from pocket containing iridescent liquid that shifts colors mesmerizingly in light - blues and purples and silver swirling together. "It's protective ward against magical detection and spying. If someone tries to spy on you with scrying magic, this will alert you immediately with warning." She hesitates, fingers tightening on vial. "It's also... a Nightshade family recipe passed down through generations. One of few useful things my ancestor left behind besides infamy and shame. Sharing it means trusting you with family secrets."

The gesture carries profound significance - offering family magic jealously guarded, trusting you with Nightshade secrets that could be used against her if you chose betrayal.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { mutual_understanding: true, lyra_romance_seed: true }
			},
			text: `Lyra hands you vial carefully, her slender fingers brushing yours with contact that sends tingle of magic through skin. She doesn't immediately pull away like usual, allowing touch to linger. "Making this required blood magic," she explains softly with voice gone lower, almost intimate. "My blood specifically mixed with reagents. So it's attuned to you through me - connected through my essence. If danger threatens, you'll feel it through our connection like phantom touch."

She meets your eyes directly with violet gaze intense and vulnerable. "That means there's magical thread between us now binding our essences. A small one but real and permanent. You'll be able to sense when I'm nearby instinctively, and I'll sense you with same awareness. I thought... I hoped that would be alright with you." Nervousness colors her words. "Blood magic creates bonds some consider too intimate."

The magical intimacy she's describing is profound - deliberate tethering of your essences that goes beyond mere friendship or professional relationship into something deeper.`
		},
		{
			conditions: {
				hasHiddenAttributes: { deep_trust_established: true }
			},
			text: `"This represents more than just protection magic against enemies," Lyra says quietly with weight of significance in every word. "It's me saying explicitly that I trust you with Nightshade secrets passed down through blood. That I believe you're different from those who condemned my family to perpetual shame. That maybe together, we can write new chapter in both our stories - not defined by old betrayals and ancestral sins but by new loyalty freely given and mutual respect."

Her smile is small but genuine and precious like rare flower. "You've given me hope when I thought I'd lost capacity for it. That's rare gift beyond price." Gratitude shines in violet eyes.`
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
			next: 'marina_ocean_depths',
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
			next: 'marina_ocean_depths',
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
	text: `Late one night when manor sleeps in darkness, you're awakened by sharp distress pulsing through magical connection with Lyra - wave of crushing self-doubt and fear that jolts you from sleep like physical blow. Following thread of connection that pulls like invisible string, you find her in healing chamber surrounded by scattered grimoires lying open with pages torn, herbs spilled across floor, clearly having emotional crisis that's destroyed usual meticulous organization.

"I can't do this," she's muttering to herself with voice breaking repeatedly, tears streaming down face. "I'm not strong enough magically, not skilled enough technically. Lady Aelindra is right about me - I'm mediocre healer at best pretending to serve crown, coasting on pity rather than earning place through merit."

She jumps violently when she sees you standing in doorway, spinning around with hand to chest. "I'm sorry! I didn't mean to wake you through bond. The connection - I should have shielded better and maintained control." She's embarrassed and distraught simultaneously, emotions warring across features. "I failed at that too."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { magical_pair_bond: true }
			},
			text: `Through reciprocal bond you established together, you feel Lyra's roiling emotions with crystalline clarity impossible to misinterpret: crushing self-doubt eating at confidence, fear of inadequacy proving Aelindra right, desperate need to prove worth through perfection. But also - surprisingly and unmistakably - her feelings for you running deep and complicated and carefully hidden until magical connection betrayed secret: affection bordering on love, longing she's suppressed, terror of rejection.

"You can feel it all," she realizes with horror and vulnerability washing over face like cold water, eyes going wide. "Through the bond we share. All of it laid bare. My insecurities destroying me, my fears consuming me, my..." She stops abruptly, unable to say it aloud. Her feelings for you, obvious now through magical connection exposing every hidden emotion, hang between you unspoken but undeniable as gravity. "Gods, I've ruined everything."`
		},
		{
			conditions: {
				hasHiddenAttributes: { lyra_romance_advancing: true }
			},
			text: `"It's not just professional pressure from Aelindra's expectations," Lyra admits quietly with voice barely audible, looking down at hands twisting together nervously. "It's... personal and complicated. I care what you think of me far too much. More than I should as healer serving charge. More than is appropriate for someone in my position with your status." She looks away, unable to meet your eyes. "I'm sorry. I'm making this awkward and crossing boundaries. Ruining professional relationship with inappropriate feelings."

But her hands are shaking visibly and you can see she's barely holding together emotionally, teetering on edge of complete breakdown.`
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
			next: 'marina_ocean_depths',
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
			next: 'marina_ocean_depths',
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
			next: 'marina_ocean_depths',
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
	text: `You step closer to Lyra, closing distance between you with deliberate intent. "I feel it too," you say softly but firmly, making sure she hears every word. "Through magical bond and without it both. You're brilliant with magic beyond your own estimation, dedicated beyond what's required, kind despite carrying such burden. How could I not develop feelings for someone like you?"

Lyra's breath catches audibly, eyes going wide with disbelief. "But I'm... I'm Nightshade bearing cursed name," she protests weakly, voice trembling. "Tainted bloodline everyone whispers about. You could have anyone - nobles offering alliances, heroes seeking your hand, people without ancestors who betrayed kingdom. Why would you possibly choose someone carrying such ancestral shame?"

"Because you're not your ancestor," you say firmly, taking her trembling hands in yours. "You're Lyra - individual person I've come to care for deeply. The healer who stays up late perfecting potions to help people without expecting recognition. The mage who teaches me with such patience despite own insecurities. The woman who bears incredible burdens with grace I admire." You squeeze her hands gently. "I see you. All of you - strengths and vulnerabilities. And I want this. If you do."

Tears stream down Lyra's face unchecked, violet eyes shimmering. "I do want this," she admits through sobs. "Gods help me, I do desperately. I've tried not to, tried to stay professional and appropriate, but..." She lets out shaky laugh mixed with crying. "The bond made hiding impossible. You feel what I feel. You know the truth already."

"I know," you confirm gently. "And I'm here, choosing you freely, knowing everything about your history and fears."

Lyra closes distance desperately, kissing you with intensity like someone drowning finally finding air after too long underwater. When you part gasping, she whispers: "Thank you. For seeing me beyond the name. For choosing me despite everything. For making me feel like maybe I deserve something good after lifetime of shame."`,
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
				id: 'lyra_kiss_partner',
				type: 'social',
				title: 'Soul-Deep Connection',
				description: 'Like Lyra\'s desperate, relieved kiss, share deep affection with your partner',
				instructions: 'Kiss your partner with the same depth of feeling Lyra expresses - gratitude, love, and the relief of being truly seen and chosen.',
				durationMinutes: 1,
				verificationMethod: 'honor',
				rewards: {
					stats: { empathy: 4, wisdom: 2 },
					message: 'Your heartfelt affection deepened your bond, just as Lyra\'s vulnerability created magical intimacy.'
				}
			}
			// },
			// oldRealLifeChallenge: {
			// 	id: 'lyra_create_together',
			// 	type: 'creative',
			// 	title: 'Create Something Together',
			// 	description: 'Like Lyra teaching you magic, create something with your partner that requires both of your skills',
			// 	instructions: 'Work together with your partner on a creative project - cook a new recipe, craft something, solve a puzzle, or build something. The focus is on collaboration and learning from each other.',
			// 	durationMinutes: 60,
			// 	verificationMethod: 'honor',
			// 	rewards: {
			// 		stats: { wisdom: 3, empathy: 3 },
			// 		message: 'Creating together deepened your bond, just like learning magic with Lyra.'
			// 	}
			// }
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
	text: `Your romance with Lyra transforms both your lives in ways neither anticipated. The magical bond between you deepens into something sacred and unbreakable - not just mage teaching student, but soulmates in truest sense recognizing each other across distance and circumstance.

Lyra's confidence grows visibly as your relationship becomes known throughout manor and beyond. "You stand beside me publicly despite judgment," she says with wonder coloring voice, still slightly disbelieving. "You don't hide what we have despite my Nightshade heritage giving people reason to whisper. You've given me permission to be proud of myself for first time, to hold head high."

Together you work tirelessly to change perceptions of blood magic from dark art to neutral tool, to honor Nightshade legacy's useful aspects while forging new understanding. Your love becomes living proof that bloodlines don't define destiny - that choices matter more than ancestry.`,
	textVariants: [
		{
			conditions: { hasFlags: ['soul_bonded'] },
			text: `Your romance with Lyra reaches its ultimate expression through soul bond ritual - most intimate magic Nightshades possess. The magical connection between you becomes permanent and unbreakable as steel - two souls intertwined completely across space and distance, woven together at fundamental level.

"I feel you always now," Lyra whispers with voice full of awe, pressing her hand to your chest where bond glows faintly beneath skin with violet light. "Your emotions flowing through connection, your presence in my awareness, even when we're apart physically. We're never truly alone again - always connected." Tears of pure joy stream down her face unchecked. "I never dreamed I'd have this. Soul bonding is Nightshade magic at its most intimate, and you chose it willingly. Chose me. Forever."

Your love transcends physical boundaries and temporal limitations, magical connection eternal.`
		},
		{
			conditions: { hasFlags: ['devoted_relationship'] },
			text: `Your romance with Lyra becomes foundation both of you build your lives upon with unshakeable commitment. You defend her publicly against those who judge bloodline with fierce determination, she supports you through political complexities with strategic wisdom and unwavering loyalty.

"You fight for me," Lyra says with voice thick with emotion bordering on overwhelming gratitude. "Not just with words that cost nothing, but with actions that have consequences. You've shown me I deserve devotion rather than mere tolerance, deserve someone who'll stand beside me against world's judgment without flinching." She kisses you deeply with passion and gratitude mingled. "I'll spend my life earning that faith you've placed in me. Proving I'm worth what you see when you look at me."

Your love is fierce and devoted and publicly declared despite all opposition from those who disapprove.`
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
	text: `Lyra offers to teach you advanced blood magic - techniques far beyond what she's shown before in basic lessons. "Nightshade family magic passed down through generations," she explains with gravity. "Normally I wouldn't share it with outsiders, but... you're different from others. And I trust you completely now."

She leads you to private chamber deep in manor with complex wards glowing along walls, protective magic keeping secrets contained. "This is healing through soul-touch," she says with voice gone soft and almost reverent. "Beyond physical wounds into emotional and spiritual damage that conventional healing can't reach. It's intimate magic requiring absolute trust and vulnerability from both caster and recipient - barriers down completely."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { lyra_romance: true }
			},
			text: `"Soul-touch magic between bonded partners is especially powerful and overwhelming," Lyra says with voice soft and intimate, cheeks flushing. "Our existing connection makes it easier to establish but also more intense in experience. When I heal your wounds, you'll feel not just my magic flowing through but my emotions toward you laid bare. And I'll feel yours in return with same clarity."

She looks nervous but determined, vulnerability mixed with desire. "It's most intimate magic I know. More intimate than..." She blushes deeper. "Well. Very intimate in ways physical touch can't match. Are you comfortable with that level of connection, knowing I'll feel everything you feel?"  

The magical and emotional vulnerability she's describing would bind you closer than any physical act could, souls touching directly.`
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
	text: `Lyra receives formal summons from Lady Aelindra Moonwhisper - official review of her service to you conducted by highest authority. She's terrified to point of trembling, paper shaking in hands.

"Aelindra controls my family's fate completely," Lyra explains with voice barely steady, panic bleeding through words. "If she deems my service inadequate or inappropriate, I'll be recalled immediately to Moonwhisper estate and assigned... elsewhere. Probably locked in library cataloging ancient texts or healing ward where I can't 'embarrass' house Moonwhisper with Nightshade associations."

She looks at you desperately with violet eyes wide with fear. "I don't want to leave this place. This position, serving you, working beside you learning and growing... it's first time I've felt genuinely valued for what I can contribute rather than merely tolerated despite name I carry."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { lyra_romance: true }
			},
			text: `Lyra grips your hands desperately, fingers digging in. "If Aelindra takes me away from here, we..." Tears threaten to spill, voice breaking. "We just found each other finally. Found this connection. I can't lose you now. I can't go back to being shameful secret hidden in Moonwhisper's towers, pretending this never happened."

Her voice breaks completely on sob. "Tell me you'll fight for me. That this isn't just... convenient arrangement. That you want me to stay not because I'm useful magically but because I'm..." She can't finish, choking on words. "Because we're..."

She can't finish sentence, but question is painfully clear: Does she truly matter to you personally, or just professionally?`
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
	text: `Lady Aelindra receives you in Starfall Spire's highest chamber overlooking kingdom spread below, ancient elf examining Lyra with critical eyes that have witnessed centuries. The ancient elf examines Lyra with penetrating gaze that misses nothing, then turns attention to you with expression unreadable.

"I'm told you've become quite... attached to your Nightshade healer," Aelindra says coolly with voice like winter frost. "Some whisper it's inappropriate relationship. That she's using family blood magic to manipulate your emotions and loyalty. That Nightshades are showing their true colors through seduction and control just like ancestor."

Lyra goes pale as death but you feel fury through bond - not at accusation itself, she expected it. But at profound injustice, at assumption that any care shown to Nightshade must be manipulation rather than genuine affection earned.

"So I will ask directly, young Silverwood heir," Aelindra continues with eyes boring into you. "Does Lyra Nightshade serve you well and honorably? Or should I remove her immediately and assign someone less... complicated and tainted?"`,
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
			},
			outcomes: [{
				conditions: {
					hasHiddenAttributes: { lyra_bond: { min: 25 } }
				}
			}],
			onFail: 'disable'
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
	text: `Your defense of Lyra is unwavering and absolute. Whether through diplomatic skill navigating politics or bold defiance challenging authority directly, you make it crystal clear that she stays, that she's chosen freely, that her Nightshade name doesn't define her worth to you.

Lady Aelindra studies you both for long, tense moment that stretches uncomfortably. Finally, she inclines her head slightly in acknowledgment. "Very well. If Silverwood heir vouches for Nightshade with such conviction and passion, who am I to interfere with royal prerogative?" Her eyes narrow calculating. "But know this clearly: the magical community watches this situation closely. Nightshade redemption must be earned continuously through actions, not assumed simply because you speak for her."

After Aelindra departs in swirl of robes, Lyra collapses against you with legs giving out, shaking with relief so profound it's almost violent. "You stood up for me," she whispers with voice broken by emotion. "Against Lady Aelindra who terrifies me. Against centuries of prejudice and suspicion. You chose me over easy path."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { relationship_public: true }
			},
			text: `"You declared us publicly," Lyra says through tears of joy streaming unchecked down face, voice shaking with overwhelming emotion. "Publicly in front of most powerful authority. Despite scandal it will cause, despite judgment from those who matter politically. You told most powerful mage in entire kingdom that you love a Nightshade and don't care who knows or what they think."

She kisses you desperately with passion and gratitude and relief mingled. "I'm yours completely and forever. And you're mine equally. Let them whisper behind hands. Let them judge harshly. We have each other, and that's everything I need."`
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
	text: `After emotional crisis passes like storm clearing, Lyra finds steadier footing through your support. Your support - whether reassurance of abilities, partnership in training, or shared vulnerability connecting you - helps her see past immediate failure to larger truth: she's valuable, skilled, and deserving of place she's earned.

"I let one mistake define everything about myself," she reflects with clearer perspective, sitting beside you in calmer state. "But you showed me that's not how worth works. We're allowed to be imperfect humans. Allowed to struggle without losing fundamental worth or value."

She takes your hand gently, squeezing with gratitude. "Thank you for being patient with me during spiral. For not abandoning ship when I lose control. That means more than you know - being seen at worst and not rejected."

Your relationship deepens naturally, whether as trusted magical partners learning together, close friends supporting each other, or something more developing over time into romance.`,
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
	text: `Learning soul-touch magic with Lyra creates intimacy beyond words can describe. As she guides you through intricate techniques with patient instruction, you feel her essence completely through magical connection - her dedication driving her forward, her fears she hides from others, her hopes for future, her feelings for you laid bare through magical connection that can't lie or hide.

The vulnerability is profound and completely mutual in way few experiences achieve. She senses your emotions just as clearly as you sense hers. There's nowhere to hide behind masks, no personas to maintain. Just two souls touching completely and honestly, seeing each other with absolute clarity.

When lesson concludes after hours of intense work, you're both fundamentally changed by experience. The magical bond between you has deepened into something unbreakable as diamond, whether as magical partners committed to learning together, devoted friends bonded by shared vulnerability, or lovers bound by more than just physical attraction - connection of souls.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { lyra_romance: true }
			},
			text: `The soul-touch magic between romantic partners is overwhelmingly intimate in intensity impossible to prepare for. You feel Lyra's love for you as clearly as your own heartbeat pulsing - warm and constant and absolute. She feels yours in return with same crystalline clarity. The magical connection mirrors and amplifies emotional one, creating feedback loop of intimacy.

"This is forever," Lyra whispers with tears streaming down face, voice thick with emotion. "Soul-bonds don't break easily. We're connected now in ways even death can't fully sever according to ancient texts." She kisses you softly with tenderness. "I'm glad it's you. Glad it's us bound together like this. Couldn't imagine better person to share soul with." Her smile is radiant despite tears.`
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

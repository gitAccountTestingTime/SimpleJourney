import { Scene } from '../../story-manager';

const roadDescription = `The road to Silverwood winds through ancient forests and forgotten valleys. Three days of travel, according to the Guild Master's directions. Three days to contemplate what awaits you.`;

const journeyDescription = `${roadDescription}`;

const valePresence = `Vale rides beside you, occasionally humming songs about lost kingdoms and hidden heirs. Their knowing glances suggest they understand more than they're saying.`;

const campfireReflection = `Around the campfire each night, conversations deepen. Bonds strengthen. The weight of what's to come presses on everyone, but there's also hope - the hope that answers finally await.`;

export const RoadToSilverwood: Scene = {
	id: 'road_to_silverwood',
	text: `${journeyDescription}

As you travel, you're not alone. Word of your quest has spread among those you've met. Some have chosen to accompany you, drawn by friendship, curiosity, or perhaps fate itself.

${valePresence}

${campfireReflection}`,
	textVariants: [
		{
			conditions: { hasFlags: ['vale_romance:15', 'quest_accepted_with_group:true'] },
			text: `${journeyDescription}

Vale insisted on accompanying you, along with others who've become important to you. As you travel, the bard's touches linger longer, their songs take on more intimate meanings, their eyes hold promises of something deeper.

On the second night, under stars that seem to shine just for you two, Vale moves closer. "Whatever we find at Silverwood," they murmur, "know that you don't face it alone. Not anymore."

The kiss is inevitable, sweet, and tinged with the bittersweetness of uncertain futures.

${campfireReflection}`
		},
		{
			conditions: {
				hasHiddenAttributes: { vale_romance: 15 }
			},
			text: `${journeyDescription}

Vale insisted on accompanying you, and you're grateful for their presence. As you travel, the bard's touches linger longer, their songs take on more intimate meanings, their eyes hold promises of something deeper.

On the second night, under stars that seem to shine just for you two, Vale moves closer. "Whatever we find at Silverwood," they murmur, "know that you don't face it alone. Not anymore."

The kiss is inevitable, sweet, and tinged with the bittersweetness of uncertain futures.`
		},
		{
			conditions: { hasFlags: ['ash_trust:25', 'preparation_level:thorough'] },
			text: `${journeyDescription}

Ash rides alongside, the mercenary captain treating this journey with military precision. They insisted on proper preparation, and now you're grateful—supplies are organized, watch rotations planned, escape routes mapped.

But you've noticed something else - the protective glances, the way Ash always positions themselves between you and potential danger, the softening in those usually hard eyes.

"You're worried," you observe one evening. Ash doesn't deny it. "I've seen what royal politics does to people. What it did to my own family." A pause. "I won't let that happen to you. Whatever you choose to become, whoever you choose to be - I'll stand with you."

${campfireReflection}`
		},
		{
			conditions: {
				hasHiddenAttributes: { ash_trust: 25 }
			},
			text: `${journeyDescription}

Ash rides alongside, the mercenary captain treating this journey with military precision. But you've noticed something else - the protective glances, the way Ash always positions themselves between you and potential danger, the softening in those usually hard eyes.

"You're worried," you observe one evening. Ash doesn't deny it. "I've seen what royal politics does to people. What it did to my own family." A pause. "I won't let that happen to you. Whatever you choose to become, whoever you choose to be - I'll stand with you."`
		},
		{
			conditions: { hasFlags: ['rook_trust:15', 'preparation_level:informed'] },
			text: `${journeyDescription}

Rook accompanies you, their street knowledge surprisingly useful for wilderness travel. They've been scouting ahead, checking for dangers, gathering information from travelers you meet.

"You prepared well," Rook admits one night. "Asked the right questions, got the knowledge you needed. I respect that." They grin. "Most nobles just throw gold at problems. You actually use your head."

${campfireReflection}`
		}
	],
	choices: [
		{
			id: 'walking-meditation',
			text: 'Walk mindfully through the forest - experience the journey',
			next: 'merchant_road_encounter',
			effects: { wisdom: 4, empathy: 3, vitality: 2 },
			hiddenEffects: {
				mindful_traveler: true,
				nature_connected: true,
				present_moment: true,
				inner_peace: 5
			},
			realLifeChallenge: {
				id: 'walking_meditation_challenge',
				type: 'meditation',
				title: 'Mindful Journey',
				description: 'Your character travels through ancient forests mindfully - you practice present awareness',
				instructions: 'Go outside and walk slowly for 10 minutes, paying full attention to your surroundings. Notice sounds, smells, textures, the feeling of movement. If you can\'t go outside, walk slowly through your home observing details you usually miss. Focus on presence and awareness rather than destination.',
				durationMinutes: 10,
				verificationMethod: 'honor',
				checklistItems: [
					'Find a place to walk (outside or inside)',
					'Walk slowly and deliberately',
					'Notice sensory details around you',
					'Stay present with each step',
					'Observe without judging'
				],
				rewards: {
					stats: { wisdom: 3, empathy: 2, vitality: 2 },
					hiddenAttributes: { mindful_awareness: 1, nature_bond: true },
					message: 'You return from your mindful walk feeling more present and aware. Like your character\'s journey through ancient forests, you\'ve practiced being fully present in the moment. This awareness is a gift you can carry forward.'
				}
			}
		},
		{
			id: 'bonding-vale',
			text: 'Spend time with Vale, discussing magic and heritage',
			next: 'merchant_road_encounter',
			effects: { wisdom: 2, charisma: 2 },
			hiddenEffects: {
				vale_trust: 10,
				vale_romance: 10,
				magic_understanding: 5,
				'journey_focus:vale': true
			}
		},
		{
			id: 'bonding-ash',
			text: 'Train with Ash and discuss leadership',
			next: 'merchant_road_encounter',
			effects: { courage: 3, combat_skills: 5 },
			hiddenEffects: {
				ash_trust: 10,
				ash_romance: 10,
				leadership_insight: true,
				'journey_focus:ash': true
			},
			outcomes: [
				{
					conditions: {
						hasHiddenAttributes: { mercenary_life_chosen: true }
					},
					effects: { combat_skills: 8 },
					hiddenEffects: { ash_trust: 15 }
				}
			]
		},
		{
			id: 'bonding-rook',
			text: 'Explore the area with Rook, sharing stories',
			next: 'merchant_road_encounter',
			effects: { charisma: 2, wisdom: 2 },
			hiddenEffects: {
				rook_trust: 10,
				rook_romance: 10,
				area_secrets_discovered: true,
				'journey_focus:rook': true
			}
		},
		{
			id: 'reflect',
			text: 'Spend time alone, preparing mentally for what\'s ahead',
			next: 'merchant_road_encounter',
			effects: { wisdom: 4 },
			hiddenEffects: {
				self_reflection: true,
				mental_preparation: true,
				'journey_focus:self': true,
				inner_strength: 5
			}
		}
	]
};

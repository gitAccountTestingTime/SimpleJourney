import { Scene } from '../../story-manager';

const manorApproach = `Silverwood Manor rises before you like a ghost from the past. Despite years of abandonment, the estate retains an air of faded grandeur. Ivy climbs ancient stone walls, and magic seems to pulse from the very foundations.`;

const doorsRecognize = `As you approach the entrance, your blood mark begins to glow. The great doors swing open of their own accord, recognizing something in you - someone in you.`;

const portraitTitle = `Inside, portraits line the walls. Generations of faces stare down at you. And then you see it - a portrait that could be your reflection.`;

const nameBelow = `Below it, a name and title:

"Prince/Princess {name}, Heir to House Silverwood, Year 1205"`;

const timeParadox = `But you were born in 1225. Twenty years after this portrait was painted. Twenty years after everyone believed House Silverwood had fallen.`;

const hiddenChamber = `A hidden chamber opens, revealing journals, magical artifacts, and a letter sealed with your name. Your real name. The name you were meant to have.`;

const finalTruth = `The truth hits like a thunderbolt: You are the heir to a fallen kingdom. The last hope of a magical bloodline. And everything in your life has been leading to this moment.`;

const valeExplanation = `Vale speaks softly: "The royal family had the power to see the future. They painted this portrait of you... before you were born."`;

export const DiscoveryAtSilverwood: Scene = {
	id: 'discovery_at_silverwood',
	text: `${manorApproach}

${doorsRecognize}

${portraitTitle} ${nameBelow}

${timeParadox}

Behind you, your companions gasp. ${valeExplanation}

${hiddenChamber}

${finalTruth}`,
	textVariants: [
		{
			conditions: { hasFlags: ['vale_romance:20', 'journey_focus:vale'] },
			text: `${manorApproach}

Vale's hand finds yours as you enter together. The warmth of their touch grounds you as magic swirls around you.

${doorsRecognize}

${portraitTitle} ${nameBelow}

${timeParadox}

Vale reads the inscription aloud, voice trembling with emotion: "Princess {name}, Heir to House Silverwood. Beloved of the kingdom. Hope of the future."

${hiddenChamber}

When you read the letter left by your parents, Vale holds you as tears fall. "You're not alone," they promise. "You've never been alone. And whatever comes next, we face it together."

${finalTruth}`
		},
		{
			conditions: {
				hasHiddenAttributes: { vale_romance: 20 }
			},
			text: `${manorApproach}

Vale's hand finds yours as you approach. "Whatever we discover in there," they whisper, "changes nothing about who you are to me."

${doorsRecognize}

${portraitTitle} ${nameBelow}

${timeParadox}

Vale reads the inscription aloud, voice trembling with emotion: "Princess {name}, Heir to House Silverwood. Beloved of the kingdom. Hope of the future."

${hiddenChamber}

When you read the letter left by your parents, Vale holds you as tears fall. "You're not alone," they promise. "You've never been alone. And whatever comes next, we face it together."`
		},
		{
			conditions: { hasFlags: ['ash_trust:25', 'journey_focus:ash'] },
			text: `${manorApproach}

Ash positions themselves protectively as you enter, hand on weapon, scanning for threats. But the only danger here is truth.

${doorsRecognize}

${portraitTitle} ${nameBelow}

${timeParadox}

Ash stares at the portrait in stunned silence. "This... this explains so much." They turn to you. "The blood magic, the Shadow Beast's reaction, everything."

${hiddenChamber}

Ash stands guard while you read your parents' letter. Their voice is rough when they speak: "Royalty or not, you're still you. And I'm still here. Whatever you decide to do with this... I'm with you."

${finalTruth}`
		},
	{
		conditions: { hasFlags: ['rook_trust:15', 'journey_focus:rook'] },
		text: `${manorApproach}

Rook whistles low. "This place is worth a fortune. But I guess it's yours now, isn't it?"

${doorsRecognize}

${portraitTitle} ${nameBelow}

${timeParadox}

Rook's usual smirk fades. "Wait... you're actual royalty?" They look between you and the portrait. "I tried to pickpocket actual royalty. This is either the stupidest or luckiest thing I've ever done."

When the hidden chamber opens, Rook helps you sort through the artifacts and journals. "For what it's worth," they say quietly, "you're the first noble who ever treated me like a person. Whatever you become, I hope you remember that."

${finalTruth}`
	},
		{
			conditions: { hasFlags: ['self_reflection:true', 'journey_focus:self'] },
			text: `${manorApproach}

You enter alone, companions waiting outside per your request. This moment - this truth - you need to face yourself.

${portraitTitle} ${nameBelow}

You sink to your knees before the portrait. All the loneliness, all the feeling of being different, all the years of not belonging - it all makes sense now.

The hidden chamber opens to your touch alone. Your parents' letter addresses you directly, explaining prophecies and sacrifices, love and duty. They knew. They always knew.

${finalTruth}`
		}
	],
	choices: [
		{
			id: 'claim-destiny',
			text: 'I am ready. I will claim my destiny and restore House Silverwood',
			next: 'act1_start',
			effects: { courage: 5, charisma: 4 },
			hiddenEffects: {
				identity_accepted: true,
				'royal_path:true': true,
				restoration_goal: true,
				prologue_completed: true,
				nobility: 10,
				political_ambition: true
			}
		},
		{
			id: 'reluctant-acceptance',
			text: 'I accept the truth, but I need time to understand what this means',
			next: 'act1_start',
			effects: { wisdom: 5 },
			hiddenEffects: {
				identity_accepted: true,
				'royal_path:reluctant': true,
				'restoration_goal:uncertain': true,
				prologue_completed: true,
				nobility: 5,
				cautious_approach: true
			}
		},
		{
			id: 'reject-politics',
			text: 'I acknowledge my blood, but I choose my own path - not politics',
			next: 'act1_start',
			effects: { courage: 4, charisma: 3 },
			hiddenEffects: {
				identity_accepted: true,
				'royal_path:independent': true,
				restoration_goal: false,
				prologue_completed: true,
				nobility: 3,
				chosen_independence: true
			}
		},
		{
			id: 'embrace-companions',
			text: 'My heritage matters, but these people - my friends - matter more',
			next: 'act1_start',
			effects: { charisma: 5, wisdom: 2 },
			hiddenEffects: {
				identity_accepted: true,
				'royal_path:companion_focused': true,
				'restoration_goal:conditional': true,
				prologue_completed: true,
				nobility: 5,
				companion_priority: true,
				vale_trust: 5,
				ash_trust: 5,
				rook_trust: 5,
				whisper_trust: 5
			}
		}
	]
};

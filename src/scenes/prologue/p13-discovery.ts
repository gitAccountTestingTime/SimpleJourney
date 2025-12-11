import { Scene } from '../../story-manager';

export const DiscoveryAtSilverwood: Scene = {
	id: 'discovery_at_silverwood',
	text: `Silverwood Manor rises before you like a ghost from the past. Despite years of abandonment, the estate retains an air of faded grandeur. Ivy climbs ancient stone walls, and magic seems to pulse from the very foundations.

As you approach the entrance, your blood mark begins to glow. The great doors swing open of their own accord, recognizing something in you - someone in you.

Inside, portraits line the walls. Generations of faces stare down at you. And then you see it - a portrait that could be your reflection. Below it, a name and title:

"Prince/Princess [Your Name], Heir to House Silverwood, Year 1205"

But you were born in 1225. Twenty years after this portrait was painted. Twenty years after everyone believed House Silverwood had fallen.

Behind you, your companions gasp. Vale speaks softly: "The royal family had the power to see the future. They painted this portrait of you... before you were born."

A hidden chamber opens, revealing journals, magical artifacts, and a letter sealed with your name. Your real name. The name you were meant to have.

The truth hits like a thunderbolt: You are the heir to a fallen kingdom. The last hope of a magical bloodline. And everything in your life has been leading to this moment.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { vale_romance: 20 }
			},
			text: `Silverwood Manor rises before you like a ghost from the past. Despite years of abandonment, the estate retains an air of faded grandeur. Ivy climbs ancient stone walls, and magic seems to pulse from the very foundations.

Vale's hand finds yours as you approach. "Whatever we discover in there," they whisper, "changes nothing about who you are to me."

As you enter together, your blood mark glows and the great doors recognize you. Inside, the portrait waits - your face, painted twenty years before your birth. 

Vale reads the inscription aloud, voice trembling with emotion: "Prince/Princess [Your Name], Heir to House Silverwood. Beloved of the kingdom. Hope of the future."

When the hidden chamber opens and you read the letter left by your parents, Vale holds you as tears fall. "You're not alone," they promise. "You've never been alone. And whatever comes next, we face it together."`
		}
	],
	choices: [
		{
			id: 'accept-destiny',
			text: 'I am ready to claim my heritage and restore House Silverwood',
			next: 'act1_start',
			effects: { courage: 5, wisdom: 3 },
			hiddenEffects: {
				identity_accepted: true,
				royal_path: true,
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
				royal_path: 'reluctant',
				restoration_goal: 'uncertain',
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
				royal_path: 'independent',
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
				royal_path: 'companion_focused',
				restoration_goal: 'conditional',
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

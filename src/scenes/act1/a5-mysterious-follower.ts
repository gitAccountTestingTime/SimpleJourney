import { Scene } from '../../story-manager';

export const MysteriousFollower: Scene = {
	id: 'mysterious_follower',
	text: `The forest path back to the village feels longer today. Your mind churns with everything you've learned - the political factions, the ancestral spirit's wisdom, the weight of your heritage.

Rowan suddenly raises a hand, stopping you. "We're being followed," they whisper. "Someone skilled - I only caught them because of a broken twig."

Through the trees, you catch glimpses of movement. Whoever it is has been tracking you since you left the manor. The hair on the back of your neck rises - are you in danger?`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { ash_trust: 20 }
			},
			text: `The forest path back to the village feels longer today. Your mind churns with everything you've learned.

Ash suddenly drops back, hand on weapon. "We have company," they murmur. Years of mercenary work have honed their instincts. "Professional. Been following us for at least a mile."

Rowan nods agreement. "I sensed them too. Shall we spring the trap?"

The two warriors exchange a look of mutual respect. Together, they're formidable. But who would be bold enough to track the heir with such protection?`
		}
	],
	choices: [
		{
			id: 'confront',
			text: 'Confront them directly - you will not be hunted',
			next: 'shadow_beast_attack',
			effects: { courage: 4 },
			hiddenEffects: {
				confrontational_tendency: true,
				rowan_bond: 5,
				direct_approach: true
			}
		},
		{
			id: 'trap',
			text: 'Work with Rowan to set a trap',
			next: 'shadow_beast_attack',
			effects: { wisdom: 3 },
			hiddenEffects: {
				tactical_mind: true,
				rowan_bond: 10,
				cooperative_combat: true
			}
		},
		{
			id: 'lose-them',
			text: 'Use the forest to lose them - avoid confrontation',
			next: 'shadow_beast_attack',
			effects: { wisdom: 2 },
			hiddenEffects: {
				cautious_approach: true,
				rowan_bond: 7,
				stealth_preference: true
			}
		},
		{
			id: 'public',
			text: 'Head toward the nearby village - safety in numbers',
			next: 'shadow_beast_attack',
			effects: { wisdom: 4 },
			hiddenEffects: {
				clever_tactics: true,
				rowan_bond: 8,
				protective_of_others: true
			}
		}
	]
};

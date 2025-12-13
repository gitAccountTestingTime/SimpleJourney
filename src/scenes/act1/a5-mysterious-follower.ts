import { Scene } from '../../story-manager';

const forestPath = `The forest path back to the village feels longer today. Your mind churns with everything you've learned - the political factions, the ancestral spirit's wisdom, the weight of your heritage.`;

const rowanWarning = `Rowan suddenly raises a hand, stopping you. "We're being followed," they whisper. "Someone skilled - I only caught them because of a broken twig."

Through the trees, you catch glimpses of movement. Whoever it is has been tracking you since you left the manor. The hair on the back of your neck rises - are you in danger?`;

export const MysteriousFollower: Scene = {
	id: 'mysterious_follower',
	text: `${forestPath}

${rowanWarning}`,
	textVariants: [
		{
			conditions: { hasFlags: ['learned_crystal_heart_history:true', 'knows_betrayal:true'] },
			text: `${forestPath} Sir Aldric revealed the Crystal Heart's shattering was no accident - betrayal from within. Someone in the kingdom wanted your family dead.

That knowledge weighs on you as Rowan suddenly raises a hand. "We're being followed."

Coincidence? Or is the betrayer still active, still hunting royal blood?

${rowanWarning}`
		},
		{
			conditions: { hasFlags: ['blood_magic_training:true', 'magical_path_priority:true'] },
			text: `${forestPath} Sir Aldric taught you the fundamentals of blood magic control. Your power hums beneath your skin, eager to be used.

${rowanWarning}

Your blood mark tingles. The follower's presence feels... magical. Not threatening, but powerful. Whoever this is, they're not ordinary.`
		},
		{
			conditions: { hasFlags: ['learned_family_fate:true', 'family_focused:true'] },
			text: `${forestPath} Sir Aldric told you the truth about your family's fate - the pain, the sacrifice, the love that saved you. The emotion still raw.

Rowan notices your distraction. "Focus," they say gently. "We're being followed."

You snap to attention. Your family died protecting you - you won't waste that sacrifice.

${rowanWarning}`
		},
		{
			conditions: { hasFlags: ['healing_path:true', 'compassionate_actions:5'] },
			text: `${forestPath} Sir Aldric's guidance on healing and leadership fills your thoughts. How to unite a broken kingdom, how to be the ruler your people need.

${rowanWarning}

Your first instinct isn't violence - it's understanding. Who is this follower? What do they want? Perhaps this can be resolved peacefully.`
		},
		{
			conditions: {
				hasHiddenAttributes: { ash_trust: 20 }
			},
			text: `${forestPath}

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

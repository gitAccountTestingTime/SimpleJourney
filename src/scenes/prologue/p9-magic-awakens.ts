import { Scene } from '../../story-manager';

const bloodGlows = `Your blood begins to glow—faint at first, then brilliant crimson. The wound seals itself in seconds. Heat rushes through your veins, and for a moment, you feel connected to something vast and ancient.`;

const magicManifestation = `${bloodGlows}`;

const royalConnection = `"That's blood magic. Hereditary. Almost extinct. The last known practitioners were the royal family of Silverwood—wiped out twenty years ago."`;

const dangerWarning = `"Either you're descended from a branch family no one knew about, or something more significant. We need to be careful. There are people who would kill for what you have."`;

const valeExplanation = `They sit beside you, voice low. ${royalConnection}

They meet your eyes. ${dangerWarning}`;

export const BloodMagicAwakens: Scene = {
	id: 'blood_magic_awakens',
	text: `After the tournament's exertion, you find a quiet corner to rest. Your muscles ache and you're nursing a small wound from your competition.

Then it happens.

${magicManifestation}

Vale appears from the shadows. "I was hoping it wouldn't manifest so publicly, but... there's no hiding it now."

${valeExplanation}`,
	textVariants: [
		{
			conditions: { hasFlags: ['vale_trust:20', 'tournament_champion:magic'] },
			text: `After winning the magical aptitude test, you're surrounded by admirers. Your performance was extraordinary, though you're not sure how you did it. You excuse yourself to find a quiet corner.

Then it happens.

${magicManifestation}

Vale appears immediately, concern and wonder on their face. "Your performance in the tournament... and now this." They take your hand. "I've grown to care about you deeply. That makes what I have to tell you both easier and harder."

They sit beside you, voice low. "That's blood magic. Hereditary. Almost extinct. The last known practitioners were the royal family of Silverwood—wiped out twenty years ago."

They meet your eyes with unusual seriousness. "You might be someone very important. And there are people who would kill for what you have. I won't let that happen."`
		},
		{
			conditions: { hasHiddenAttributes: { vale_trust: 20 } },
			text: `After the tournament's exertion, you find a quiet corner to rest. Your muscles ache and you're nursing a small wound from your competition.

Then it happens.

${magicManifestation}

Vale appears immediately, concern clear on their usually composed face. "I was afraid of this, but also... hoped for it."

They sit beside you, taking your hand. "I've grown to care about you more than I should, given my profession. But I need you to know: you might be someone very important. And there are people who would kill for what you have. I won't let that happen."

${valeExplanation}`
		},
		{
			conditions: { hasFlags: ['tournament_champion:combat'] },
			text: `After your victory in the combat tournament, you're nursing your wounds in a quiet corner. The fights were brutal, but you prevailed.

Then it happens.

${magicManifestation}

Vale appears from the shadows, eyes wide. "Your combat skills were impressive, but this... this changes everything."

${valeExplanation}`
		},
		{
			conditions: { hasFlags: ['tournament_participant:none'] },
			text: `After a long day of networking with nobles, you find a quiet corner. The social exertion was more tiring than any physical contest. You accidentally cut your hand on a decorative sword display.

Then it happens.

${magicManifestation}

Vale, who had been watching you network all day, appears instantly. "I was wondering when it would manifest. Your bloodline has been dormant, waiting."

${valeExplanation}`
		}
	],
	choices: [
		{
			id: 'panic',
			text: 'Panic - what\'s happening to me?',
			next: 'meet_whisper',
			effects: { courage: -1 },
			hiddenEffects: {
				magic_revealed: true,
				vale_knows_secret: true,
				magical_path_unlocked: true,
				'magic_reaction:fear': true
			}
		},
		{
			id: 'control',
			text: 'Try to control and understand the power',
			next: 'meet_whisper',
			effects: { wisdom: 3 },
			hiddenEffects: {
				magic_revealed: true,
				vale_knows_secret: true,
				magical_path_unlocked: true,
				'magic_reaction:curiosity': true,
				vale_trust: 5
			}
		},
		{
			id: 'ask-help',
			text: 'Ask Vale for help',
			next: 'meet_whisper',
			effects: { charisma: 2 },
			hiddenEffects: {
				magic_revealed: true,
				vale_knows_secret: true,
				magical_path_unlocked: true,
				'magic_reaction:trust': true,
				vale_trust: 15,
				vale_romance: 10
			}
		},
		{
			id: 'demand-answers',
			text: 'Demand answers - what do they know?',
			next: 'meet_whisper',
			effects: { courage: 2 },
			hiddenEffects: {
				magic_revealed: true,
				vale_knows_secret: true,
				magical_path_unlocked: true,
				'magic_reaction:assertive': true,
				vale_trust: -5
			}
		}
	]
};

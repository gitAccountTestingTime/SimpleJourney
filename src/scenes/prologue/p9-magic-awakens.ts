import { Scene } from '../../story-manager';

export const BloodMagicAwakens: Scene = {
	id: 'blood_magic_awakens',
	text: `After the tournament's exertion, you find a quiet corner to rest. Your muscles ache and you're nursing a small wound from your competition.

Then it happens.

Your blood begins to glow—faint at first, then brilliant crimson. The wound seals itself in seconds. Heat rushes through your veins, and for a moment, you feel connected to something vast and ancient.

Vale appears from the shadows. "I was hoping it wouldn't manifest so publicly, but... there's no hiding it now."

They sit beside you, voice low. "That's blood magic. Hereditary. Almost extinct. The last known practitioners were the royal family of Silverwood—wiped out twenty years ago."

They meet your eyes. "Either you're descended from a branch family no one knew about, or something more significant. We need to be careful. There are people who would kill for what you have."`,
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { vale_trust: 20 } },
			text: `After the tournament's exertion, you find a quiet corner to rest. Your muscles ache and you're nursing a small wound from your competition.

Then it happens.

Your blood begins to glow—faint at first, then brilliant crimson. The wound seals itself in seconds. Heat rushes through your veins, and for a moment, you feel connected to something vast and ancient.

Vale appears immediately, concern clear on their usually composed face. "I was afraid of this, but also... hoped for it."

They sit beside you, taking your hand. "That's blood magic. Hereditary. Almost extinct. The last known practitioners were the royal family of Silverwood—wiped out twenty years ago."

They meet your eyes with unusual seriousness. "I've grown to care about you more than I should, given my profession. But I need you to know: you might be someone very important. And there are people who would kill for what you have. I won't let that happen."`
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
				magic_reaction: 'fear'
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
				magic_reaction: 'curiosity',
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
				magic_reaction: 'trust',
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
				magic_reaction: 'assertive',
				vale_trust: -5
			}
		}
	]
};

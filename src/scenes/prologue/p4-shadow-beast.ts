import { Scene } from '../../story-manager';

export const FirstShadowBeast: Scene = {
	id: 'first_shadow_beast',
	text: `A bone-chilling howl echoes through the forest. The temperature drops. Vale's face goes pale.

"Shadow Beast," they whisper. "Run. NOW."

But it's too late. The creature emerges from the darkness—a writhing mass of shadows and teeth, eyes like dying stars. It's hunger given form, death made manifest. The refugees scream and scatter.

As it lunges toward a child, something inside you ignites. Your blood burns hot, and for a split second, the beast recoils. Did it... fear you?`,
	choices: [
		{
			id: 'stand-fight',
			text: 'Stand your ground and fight',
			outcomes: [
				{
					conditions: { stats: { courage: { min: 5 } } },
					next: 'meet_ash',
					effects: { courage: 3, reputation: 10 },
					hiddenEffects: {
						shadow_beast_reaction: 'fought_bravely',
						magical_awakening: 'combat',
						blood_magic_affinity: 10,
						vale_trust: 15
					}
				},
				{
					next: 'meet_ash',
					effects: { courage: 2, reputation: 5 },
					hiddenEffects: {
						shadow_beast_reaction: 'fought_desperately',
						magical_awakening: 'survival',
						blood_magic_affinity: 5,
						vale_trust: 10
					}
				}
			]
		},
		{
			id: 'protect-others',
			text: 'Protect the refugees while retreating',
			next: 'meet_ash',
			effects: { courage: 2, charisma: 3, reputation: 12 },
			hiddenEffects: {
				shadow_beast_reaction: 'protective',
				magical_awakening: 'selfless',
				blood_magic_affinity: 8,
				compassionate_actions: 5,
				vale_trust: 20,
				vale_romance: 15
			}
		},
		{
			id: 'focus-survival',
			text: 'Focus on your own survival',
			next: 'meet_ash',
			effects: { wisdom: 2, reputation: -2 },
			hiddenEffects: {
				shadow_beast_reaction: 'pragmatic',
				magical_awakening: 'instinct',
				blood_magic_affinity: 3,
				ruthlessness: 3
			}
		},
		{
			id: 'understand-it',
			text: 'Try to understand the creature rather than fight',
			next: 'meet_ash',
			effects: { wisdom: 4 },
			hiddenEffects: {
				shadow_beast_reaction: 'curious',
				magical_awakening: 'intellectual',
				blood_magic_affinity: 12,
				vale_trust: 10
			}
		}
	]
};

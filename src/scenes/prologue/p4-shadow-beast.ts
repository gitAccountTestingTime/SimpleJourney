import { Scene } from '../../story-manager';

const shadowBeastAppearance = `A bone-chilling howl echoes through the forest. The temperature drops. Vale's face goes pale.

"Shadow Beast," they whisper. "Run. NOW."

But it's too late. The creature emerges from the darkness—a writhing mass of shadows and teeth, eyes like dying stars. It's hunger given form, death made manifest.`;

const bloodAwakening = `As it lunges toward a child, something inside you ignites. Your blood burns hot, and for a split second, the beast recoils. Did it... fear you?`;

export const FirstShadowBeast: Scene = {
	id: 'first_shadow_beast',
	text: `${shadowBeastAppearance} The refugees scream and scatter.

${bloodAwakening}`,
	textVariants: [
		{
			conditions: { hasFlags: ['first_moral_choice:ruthless'] },
			text: `Your confrontation with the refugees ended in violence. Some fled, some were captured. Now karma arrives in shadow form.

---

${shadowBeastAppearance} The refugees you subdued are helpless, still bound. Your ruthless efficiency left them unable to flee.

${bloodAwakening}`
		},
		{
			conditions: { hasFlags: ['first_moral_choice:diplomatic'] },
			text: `Your negotiation with the refugees established trust and cooperation. They agreed to return peacefully. Then everything changed.

---

${shadowBeastAppearance} The refugees react with practiced terror—they've faced these before. They move to protect their children while searching for escape.

${bloodAwakening}`
		},
		{
			conditions: { hasFlags: ['first_moral_choice:compassionate'] },
			text: `Your offer of help created hope in the refugees' eyes. Finally, someone who understood. Then the nightmare that destroyed their village returned.

---

${shadowBeastAppearance} The refugees scream—not just in fear, but in recognition and despair. "Not again!" the woman cries. "Please, not the children!"

${bloodAwakening}`
		},
		{
			conditions: { hasFlags: ['first_moral_choice:lawful'] },
			text: `You decided to let the authorities handle the refugees. But before you could escort them back, fate intervened.

---

${shadowBeastAppearance} The refugees recognize it immediately. "It followed us," one breathes. "It always finds us."

${bloodAwakening}`
		}
	],
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

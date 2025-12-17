import { Scene} from '../../story-manager';
import { AuthorUtils } from '../../author-utils';

const weaponType = AuthorUtils.getStartingWeapon();

const beastArrival = `Suddenly, a bone-chilling howl echoes through the forest. The temperature drops. Vale's face goes pale.`;

const valeWarning = `"Shadow Beast," they whisper. "Run. NOW."`;

const tooLate = `But it's too late. The creature emerges from the darkness—a writhing mass of shadows and teeth, eyes like dying stars. It's hunger given form, death made manifest.`;

const shadowBeastAppearance = `${beastArrival}

${valeWarning}

${tooLate}`;

const refugeesPanic = `The refugees scream and scatter.`;

const magicStirs = `As it lunges toward a child, something inside you ignites. Your blood burns hot, and for a split second, the beast recoils. Did it... fear you?`;

const bloodAwakening = `${magicStirs}`;

export const FirstShadowBeast: Scene = {
	id: 'first_shadow_beast',
	text: `${shadowBeastAppearance} ${refugeesPanic}
	
	${bloodAwakening}`,
	textVariants: [
		{
			conditions: { hasFlags: ['first_moral_choice:ruthless'] },
			text: `Though not what you originally envisioned, you know that you don't have any real choice in the matter. These people took the supplies that Thornshaven relies on to survive. They likely cost other's lives just to extend their own.
			
			They made their choice when they attacked the village. Now you make yours.

			You raise your hand, hearing the volunteers behind you readying themselves as you do.  You give the order to attack. 
			
			While your volunteer forces may not be close to any type of formal armed group, it is quickly clear that the makeshift bandits are no match. A few fight back, but most are quickly subdued.  

			While a few managed to flee in the chaos, most are captured or neutralized.  There are limited injuries on your side, but the remaining refugees are clearly shaken.
			
			You begin the work of securing the survivors in order to turn them in when you return, when the cries of couple bandits that managed to flee cut through the sullen silence.

			You look to those of your group, but none seem to be missing. Whatever found the fleeing bandits was not part of your group. But what strikes you the most is the looks of pure terror on the faces of the remaining refugees. It is almost as if -

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
			id: 'face-fear',
			text: 'Face your terror - step forward despite overwhelming fear',
			next: 'meet_ash',
			effects: { courage: 5, wisdom: 3, reputation: 12, wealth: 25 },
			hiddenEffects: {
				'shadow_beast_reaction:faced_fear': true,
				'magical_awakening:courage': true,
				blood_magic_affinity: 12,
				vale_trust: 18,
				refugees_trust: 10,
				fear_conquered: true,
				shadow_beast_bounty_earned: true
			},
			realLifeChallenge: {
				id: 'face_fear_challenge',
				type: 'learning',
				title: 'Courage in Small Things',
				description: 'Your character faces a terrifying shadow beast - you face a fear in your own life',
				instructions: 'Do something small that makes you uncomfortable or nervous. Make that phone call you\'ve been avoiding, speak up in a situation, try something new, address a small conflict, or take a small risk. It doesn\'t have to be dramatic - just genuine. The point is choosing courage over comfort.',
				verificationMethod: 'honor',
				rewards: {
					stats: { courage: 3, wisdom: 1, charisma: 1 },
					hiddenAttributes: { fear_facer: 1, brave_action: true },
					message: 'You did the thing you were avoiding. Like your character standing before the shadow beast, you chose courage over comfort. Each act of bravery, however small, makes the next one easier. You\'re building courage as a habit.'
				}
			}
		},
		{
			id: 'stand-fight',
			text: 'Stand your ground and fight',
			outcomes: [
				{
					conditions: { stats: { courage: { min: 5 } } },
					next: 'meet_ash',
					effects: { courage: 3, reputation: 10, wealth: 25 },
					hiddenEffects: {
						'shadow_beast_reaction:fought_bravely': true,
						'magical_awakening:combat': true,
						blood_magic_affinity: 8,
						vale_trust: 15,
						shadow_beast_bounty_earned: true
					}
				},
				{
					next: 'meet_ash',
					effects: { courage: 2, reputation: 5, wealth: 15 },
					hiddenEffects: {
						'shadow_beast_reaction:fought_desperately': true,
						'magical_awakening:survival': true,
						blood_magic_affinity: 5,
						vale_trust: 10,
						shadow_beast_bounty_earned: true
					}
				}
			]
		},
		{
			id: 'protect-others',
			text: 'Protect the refugees while retreating',
			next: 'meet_ash',
			effects: { courage: 2, charisma: 3, reputation: 12, wealth: 25 },
			hiddenEffects: {
				'shadow_beast_reaction:protective': true,
				'magical_awakening:selfless': true,
				blood_magic_affinity: 8,
				compassionate_actions: 5,
				vale_trust: 20,
				vale_romance: 15,
				shadow_beast_bounty_earned: true
			}
		},
		{
			id: 'focus-survival',
			text: 'Focus on your own survival',
			next: 'meet_ash',
			effects: { wisdom: 2, reputation: -2, wealth: 10 },
			hiddenEffects: {
				'shadow_beast_reaction:pragmatic': true,
				'magical_awakening:instinct': true,
				blood_magic_affinity: 3,
				ruthlessness: 3,
				shadow_beast_bounty_earned: true
			}
		},
		{
			id: 'understand-it',
			text: 'Try to understand the creature rather than fight',
			next: 'meet_ash',
			effects: { wisdom: 4, wealth: 20 },
			hiddenEffects: {
				'shadow_beast_reaction:curious': true,
				'magical_awakening:intellectual': true,
				blood_magic_affinity: 12,
				vale_trust: 10,
				shadow_beast_bounty_earned: true
			}
		}
	]
};

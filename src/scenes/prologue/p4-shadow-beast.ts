import { Scene} from '../../story-manager';
import { AuthorUtils } from '../../author-utils';

const beastArrival = `Suddenly, a bone-chilling howl echoes through the forest. 

The makeshift camp falls silent as an eerie fog rolls into the clearing. Goosebumps crawl across your skin as you feel the temperature actively dropping. 

Beside you, Vale's face goes pale.`;

const valeWarning = `You place your hand upon Vale's shoulder and shake him slightly to pull him back into the moment. "What is it, Vale?"

His eyes refocus as he realizes he had quickly gotten lost in his thoughts and refocuses. 

"Shadow Beast..." they whisper seemingly to themselves. Suddenly he raises his voice, "Everyone run! NOW!!!"`;

const tooLate = `Vale's voice seems to snap everyone out of the haze they'd been standing around in.  The camp quickly becomes a flurry of hurried action...but it's too late. 

From the edge of the clearing, the creature emerges from the darkness as though born from it. Or perhaps as if in command of it. 

It seems to be naught but a writhing mass of shadows and teeth. Its eyes smolder like dying stars as it takes in the clearing before it. 

The malice it gives off is palpable; it is hunger given form, death made manifest...and all gathered here know it.`;

const shadowBeastAppearance = `${beastArrival}

${valeWarning}

${tooLate}`;

const refugeesPanic = `The refugees are the first to react.  They scream and scatter, the trauma that caused them to become bandits in the first place evident in their every movement. 

Your volunteer group scrambles to respond, but they are not a trained force. Some try to shield the refugees, others prepare to fight back, and still others flee along with those that run.`;

const getMagicStirs = (): string => {
	const weaponType = AuthorUtils.getStartingWeapon();
	return `The Shadow Beast takes its time, occasionally grabbing a victim and ending them, as though they were naught but toys. 

You try to rally the volunteers, but it is too late.  As you turn, you notice the beast as it prepare to lunge towards a crying child who had fallen to the ground admist the chaos.

You find yourself moving on instinct, placing yourself between the beast and the child. You and the beast lock eyes as you raise your ${weaponType}. 

"{name}!" Vale's voice cuts through the chaos, but you barely hear it over the pounding of your own heart.  Your focus narrows to the creature before you, and it almost seems to sneer as it readies itself to strike.

As the beast begins to charge you, you let loose a cry and move to meet it.  You've no delusions about what is to come, but perhaps you can buy time for others to escape. You're not entirely sure why that matters; you've never been one to pretend to be a hero...but here you are all the same.

Time seems to slow, and right before you and the beast clash, something inside you seems to ignite. Your blood burns hot, and the world seems to grow sharper and clearer. The strange sensation seems to flare outward from you, and for a split second the beast recoils and halts its charge. Did it... fear you?

You skid to a halt yourself, heart racing. The beast snarls, clearly unsettled now but unwilling to give up its hunt. It eyes you warily, as if reassessing you.  But the danger is far from over...`;
};

const getBloodAwakening = (): string => getMagicStirs();

export const FirstShadowBeast: Scene = {
	id: 'first_shadow_beast',
	get text() { 
		return `${shadowBeastAppearance} ${refugeesPanic}
	
	${getBloodAwakening()}`;
	},
	textVariants: [
		{
			conditions: { hasFlags: ['first_moral_choice:ruthless'] },
			get text() {
				return `Though not what you originally envisioned, you know that you don't have any real choice in the matter. These people took the supplies that Thornshaven relies on to survive. They likely cost other's lives just to extend their own.
			
			They made their choice when they attacked the village. Now you make yours.

			You raise your hand, hearing the volunteers behind you readying themselves as you do.  You give the order to attack. 
			
			While your volunteer forces may not be close to any type of formal armed group, it is quickly clear that the makeshift bandits are no match. A few fight back, but most are quickly subdued.  

			While a few managed to flee in the chaos, most are captured or neutralized.  There are limited injuries on your side, but the remaining refugees are clearly shaken.
			
			You begin the work of securing the survivors in order to turn them in when you return, when the cries of couple bandits that managed to flee cut through the sullen silence.

			You look to those of your group, but none seem to be missing. Whatever found the fleeing bandits...it was not part of your group. But what strikes you the most is the looks of pure terror on the faces of the remaining refugees. It is almost as if -

${shadowBeastAppearance} 

${getBloodAwakening()}`;
			}
		},
		{
			conditions: { hasFlags: ['first_moral_choice:diplomatic'] },
			get text() {
				return `Your negotiation with the refugees established trust and cooperation. They agreed to return peacefully. Then everything changed.

---

${shadowBeastAppearance} The refugees react with practiced terror—they've faced these before. They move to protect their children while searching for escape.

${getBloodAwakening()}`;
			}
		},
		{
			conditions: { hasFlags: ['first_moral_choice:compassionate'] },
			get text() {
				return `Your offer of help created hope in the refugees' eyes. Finally, someone who understood. Then the nightmare that destroyed their village returned.

---

${shadowBeastAppearance} The refugees scream—not just in fear, but in recognition and despair. "Not again!" the woman cries. "Please, not the children!"

${getBloodAwakening()}`;
			}
		},
		{
			conditions: { hasFlags: ['first_moral_choice:lawful'] },
			get text() {
				return `You decided to let the authorities handle the refugees. But before you could escort them back, fate intervened.

---

${shadowBeastAppearance} The refugees recognize it immediately. "It followed us," one breathes. "It always finds us."

${getBloodAwakening()}`;
			}
		}
	],
	choices: [
		{
			id: 'face-fear',
			text: 'Face your terror. Step forward despite your fear and truly confront the beast head on.',
			next: 'meet_ash',
			effects: { courage: 5, reputation: 7},
			hiddenEffects: {
				'shadow_beast_reaction:faced_fear': true,
				'shadow_beast_reaction:fought_bravely': true,
				'magical_awakening:courage': true,
				blood_magic_affinity: 5,
				vale_trust: 5,
				ash_trust: 5,
				refugees_trust: 10,
				fear_conquered: true,
				shadow_beast_bounty_earned: true
			},
			realLifeChallenge: {
				id: 'face_fear_challenge',
				type: 'learning',
				title: 'Courage in Small Things',
				description: 'Your character faces a terrifying shadow beast. Now you must face a fear in your own life',
				instructions: 'Do something small that makes you uncomfortable or nervous. Make that phone call you\'ve been avoiding, speak up in a situation, try something new, address a small conflict, or take a small risk. It doesn\'t have to be dramatic, just genuine. The point is choosing courage over comfort.',
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
			text: 'Charge the beast. You aren\'t sure what happened before, but perhaps you can scare it off or defeat it.',
			outcomes: [
				{
					conditions: { stats: { strength: { min: 4 } } },
					next: 'meet_ash',
					effects: { courage: 3, reputation: 5 },
					hiddenEffects: {
						'shadow_beast_reaction:fought_bravely': true,
						'magical_awakening:combat': true,
						blood_magic_affinity: 3,
						vale_trust: 5,
						ash_trust: 5,
						refugees_trust: 5,
						combat_skills: 3,
						shadow_beast_bounty_earned: true
					}
				},
				{
					conditions: { stats: { dexterity: { min: 4 } } },
					next: 'meet_ash',
					effects: { courage: 3, reputation: 5 },
					hiddenEffects: {
						'shadow_beast_reaction:fought_bravely': true,
						'magical_awakening:combat': true,
						blood_magic_affinity: 3,
						vale_trust: 5,
						ash_trust: 5,
						refugees_trust: 5,
						combat_skills: 3,
						shadow_beast_bounty_earned: true
					}
				},
				{
					next: 'meet_ash',
					effects: { courage: 3, reputation: 3 },
					hiddenEffects: {
						'shadow_beast_reaction:fought_desperately': true,
						'magical_awakening:survival': true,
						blood_magic_affinity: 3,
						vale_trust: 3,
						ash_trust: 5,
						refugees_trust: 3,
						combat_skills: 2,
						shadow_beast_bounty_earned: true
					}
				}
			]
		},
		{
			id: 'protect-others',
			text: 'Protect the refugees while retreating.  Focus on buying them time to escape, but don\'t recklessly engage the beast.',
			next: 'meet_ash',
			effects: { courage: 3, charisma: 1, reputation: 5 },
			hiddenEffects: {
				'shadow_beast_reaction:protective': true,
				'magical_awakening:selfless': true,
				blood_magic_affinity: 1,
				compassionate_actions: 3,
				vale_trust: 12,
				ash_trust: 5,
				vale_romance: 7,
				combat_skills: 3,
				shadow_beast_bounty_earned: true
			}
		},
		{
			id: 'focus-survival',
			text: 'Focus on your own survival. You\'ve bought the others time; if you are dead you can do nothing in the future.',
			next: 'meet_ash',
			effects: { wisdom: 1},
			hiddenEffects: {
				'shadow_beast_reaction:pragmatic': true,
				'magical_awakening:instinct': true,
				blood_magic_affinity: 1,
				ruthlessness: 3,
				combat_skills: 1,
				shadow_beast_bounty_earned: true
			}
		},
		{
			id: 'understand-it',
			text: 'Try to understand the creature rather than fight.  Maybe there is more to it than just mindless hunger?',
			next: 'meet_ash',
			effects: { courage: 1 },
			hiddenEffects: {
				'shadow_beast_reaction:curious': true,
				'magical_awakening:intellectual': true,
				blood_magic_affinity: 1,
				vale_trust: -5,
				shadow_beast_bounty_earned: true
			}
		}
	]
};

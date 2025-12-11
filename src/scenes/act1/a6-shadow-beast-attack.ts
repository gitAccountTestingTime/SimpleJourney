import { Scene } from '../../story-manager';

export const ShadowBeastAttack: Scene = {
	id: 'shadow_beast_attack',
	text: `Before you can deal with your follower, reality tears. 

A rift opens in the air itself - a wound between worlds. Through it comes nightmare made flesh: a Shadow Beast. It's larger than the one from your adventuring days, more solid, more real. The barrier weakens daily, and these creatures grow bolder.

The beast's eyeless face turns toward you, sensing something. Your blood. Your magic. You're what it's hunting.

Rowan draws twin blades, positioning themselves between you and the creature. "Stay behind me!" But you feel your blood magic stirring, responding to the threat.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { blood_magic_training: true }
			},
			text: `Before you can deal with your follower, reality tears.

A Shadow Beast emerges - larger, more terrifying than before. But Sir Aldric's teachings echo in your mind. You understand now what your blood magic can do.

The creature lunges, and instinct takes over. Your blood mark flares with brilliant light. The beast recoils, shrieking - your magic is anathema to it, a weapon of the royal line designed to protect against such threats.

Rowan stares. "You've been training. Good. Let's end this together."`
		},
		{
			conditions: {
				hasHiddenAttributes: { ash_trust: 25 }
			},
			text: `Before you can deal with your follower, reality tears.

A Shadow Beast emerges, and Ash reacts instantly. "Formation delta!" they shout to their nearby mercenaries. Years of fighting these creatures show in their precise movements.

But this one is hunting you specifically. It ignores the mercenaries, focused entirely on your royal blood. Ash interposes themselves between you and death itself.

"Not today," Ash growls. "You want them? You go through me first."`
		}
	],
	choices: [
		{
			id: 'blood-magic',
			text: 'Unleash your blood magic against the creature',
			next: 'agent_revealed',
			effects: { courage: 4, wisdom: 2 },
			hiddenEffects: {
				used_blood_magic_first_time: true,
				blood_magic_affinity: 10,
				faced_shadow_beast: true,
				combat_capable: true,
				rowan_bond: 8,
				magical_fighter: true
			},
			outcomes: [
				{
					conditions: {
						hasHiddenAttributes: { blood_magic_training: true }
					},
					effects: { wisdom: 5 },
					hiddenEffects: {
						blood_magic_mastery: 5,
						defeated_shadow_beast_solo: true
					}
				}
			]
		},
		{
			id: 'conventional',
			text: 'Fight with conventional weapons alongside Rowan',
			next: 'agent_revealed',
			effects: { courage: 3 },
			hiddenEffects: {
				faced_shadow_beast: true,
				combat_capable: true,
				rowan_bond: 12,
				cooperative_combat: true,
				martial_fighter: true
			}
		},
		{
			id: 'let-rowan-protect',
			text: 'Trust Rowan to protect you while you support',
			next: 'agent_revealed',
			effects: { wisdom: 3 },
			hiddenEffects: {
				faced_shadow_beast: true,
				rowan_saved_life: true,
				rowan_bond: 15,
				support_role: true,
				trust_in_guardian: true
			}
		},
		{
			id: 'flee-together',
			text: 'Retreat together - survival over pride',
			next: 'agent_revealed',
			effects: { wisdom: 4 },
			hiddenEffects: {
				faced_shadow_beast: true,
				pragmatic_survival: true,
				rowan_bond: 10,
				lived_to_fight_another_day: true
			}
		}
	]
};

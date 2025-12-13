import { Scene } from '../../story-manager';

const beastAppearance = `Before you can deal with your follower, reality tears.

A rift opens in the air itself - a wound between worlds. Through it comes nightmare made flesh: a Shadow Beast. It's larger than the one from your adventuring days, more solid, more real. The barrier weakens daily, and these creatures grow bolder.

The beast's eyeless face turns toward you, sensing something. Your blood. Your magic. You're what it's hunting.`;

const rowanDefense = `Rowan draws twin blades, positioning themselves between you and the creature. "Stay behind me!" But you feel your blood magic stirring, responding to the threat.`;

export const ShadowBeastAttack: Scene = {
	id: 'shadow_beast_attack',
	text: `${beastAppearance}

${rowanDefense}`,
	textVariants: [
		{
			conditions: { hasFlags: ['confrontational_tendency:true', 'direct_approach:true'] },
			text: `You confronted your follower directly, forcing them into the open. But before any words are exchanged, reality tears.

${beastAppearance}

The follower - now revealed as Sir Marcus Thorne - moves to help. "Shadow Beast! This is what I was trying to warn you about!"

${rowanDefense}`
		},
		{
			conditions: { hasFlags: ['tactical_mind:true', 'cooperative_combat:true'] },
			text: `Your trap with Rowan was perfect. You were about to spring it when reality tears.

${beastAppearance}

The follower emerges from hiding - an older man with silver hair. "I'm on your side!" he shouts. "Shadow Beast - we need to work together!"

Rowan assesses quickly. "He's right. Fight now, question later."`
		},
		{
			conditions: { hasFlags: ['cautious_approach:true', 'stealth_preference:true'] },
			text: `You lost the follower using forest paths, but something feels wrong. The woods are too quiet. Then reality tears.

${beastAppearance}

Your follower appears from the trees, urgency in his voice. "I was trying to protect you from this!"

${rowanDefense} But now you have unexpected help.`
		},
		{
			conditions: { hasFlags: ['protective_of_others:true', 'clever_tactics:true'] },
			text: `You headed toward the village for safety, but the follower anticipated that. Then, within sight of innocent people, reality tears.

${beastAppearance}

The creature is between you and the village. Civilians are in danger. Your follower rushes forward. "Get the people to safety! I'll help contain it!"

${rowanDefense} "The village!" Rowan shouts. "We have to keep it away from them!"`
		},
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
			next: 'rowan_bonding_2',
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
			next: 'rowan_bonding_2',
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

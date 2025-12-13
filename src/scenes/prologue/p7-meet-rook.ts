import { Scene } from '../../story-manager';

const rookIntroduction = `You spin and grab a wrist—attached to a young person with mischievous eyes and quick fingers. They grin despite being caught.

"Nice reflexes! Most marks never notice till it's too late." They don't even try to escape. "I'm Rook. Sorry about the whole... theft thing. Occupational hazard."

They size you up with interest.`;

export const MeetRook: Scene = {
	id: 'meet_rook',
	text: `The capital's slums are a stark contrast to the grand palace visible in the distance. You're navigating the crowded streets when you feel a hand in your pocket.

${rookIntroduction} "You're not from around here. Adventurer type, I'd guess. Look, I know these streets better than anyone. We could help each other out—I need protection, you need a guide. Fair trade?"`,
	textVariants: [
		{
			conditions: { hasFlags: ['mercenary_life_chosen:true'] },
			text: `The capital's slums are a stark contrast to the grand palace visible in the distance. Ash warned you about pickpockets, but you're still caught off guard when you feel a hand in your pocket.

Your mercenary training kicks in.

${rookIntroduction} "Mercenary company gear. Ash's company, if I'm not mistaken." They look impressed. "I know these streets better than anyone, and I know which contracts the company won't touch. We could help each other out—I need protection, you need... information."`
		},
		{
			conditions: { hasFlags: ['independent_path:true'] },
			text: `The capital's slums feel almost familiar after your independent travels. The poverty, the struggle—you've seen it across the kingdom. Still, you don't expect the hand in your pocket.

${rookIntroduction} "Independent operator, aren't you? I can tell. No company colors, no guild marks, but you move like you can handle yourself." They grin wider. "I respect that. I know these streets better than anyone. Two independents could do well together—I need someone who can fight, you need someone who knows this city."`
		}
	],
	choices: [
		{
			id: 'turn-them-in',
			text: 'Turn them over to the authorities',
			next: 'capital_tournament',
			effects: { reputation: 3 },
			hiddenEffects: {
				rook_trust: -10,
				underworld_connection: 'hostile'
			}
		},
		{
			id: 'warning',
			text: 'Let them go with a stern warning',
			next: 'capital_tournament',
			effects: { wisdom: 2 },
			hiddenEffects: {
				rook_trust: 5,
				underworld_connection: 'neutral'
			}
		},
		{
			id: 'offer-help',
			text: 'Offer to help them find honest work',
			next: 'capital_tournament',
			effects: { charisma: 3 },
			hiddenEffects: {
				rook_trust: 20,
				rook_romance: 10,
				underworld_connection: 'friendly',
				compassionate_actions: 3
			}
		},
		{
			id: 'recruit-scout',
			text: 'Recruit them as your scout',
			next: 'capital_tournament',
			effects: { wisdom: 2, charisma: 2 },
			hiddenEffects: {
				rook_trust: 15,
				rook_romance: 5,
				underworld_connection: 'allied'
			}
		}
	]
};

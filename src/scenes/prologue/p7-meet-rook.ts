import { Scene } from '../../story-manager';

export const MeetRook: Scene = {
	id: 'meet_rook',
	text: `The capital's slums are a stark contrast to the grand palace visible in the distance. You're navigating the crowded streets when you feel a hand in your pocket.

You spin and grab a wrist—attached to a young person with mischievous eyes and quick fingers. They grin despite being caught.

"Nice reflexes! Most marks never notice till it's too late." They don't even try to escape. "I'm Rook. Sorry about the whole... theft thing. Occupational hazard."

They size you up with interest. "You're not from around here. Adventurer type, I'd guess. Look, I know these streets better than anyone. We could help each other out—I need protection, you need a guide. Fair trade?"`,
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

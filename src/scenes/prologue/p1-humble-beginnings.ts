import { Scene } from '../../story-manager';

export const PrologueStart: Scene = {
	id: 'prologue_start',
	text: `You are an orphan in the frontier village of Thornhaven, working odd jobs to survive. The morning sun barely breaks through the mist as the village elder rings the bell, calling for volunteers.

"Bandits have been raiding the trade routes," the elder announces. "We need brave souls to deal with them. Payment will be fair."

This could be your chance to prove yourself—or earn enough coin to finally leave this place.`,
	choices: [
		{
			id: 'volunteer-immediately',
			text: 'Step forward without hesitation',
			next: 'meet_vale',
			effects: { courage: 3 },
			hiddenEffects: {
				origin_choice: 'courageous',
				personality_seed: 'brave'
			}
		},
		{
			id: 'ask-payment',
			text: 'Ask about the payment first',
			next: 'meet_vale',
			effects: { wisdom: 2 },
			hiddenEffects: {
				origin_choice: 'pragmatic',
				personality_seed: 'practical'
			}
		},
		{
			id: 'organize-others',
			text: 'Suggest organizing a proper group',
			next: 'meet_vale',
			effects: { charisma: 3 },
			hiddenEffects: {
				origin_choice: 'leadership',
				personality_seed: 'leader'
			}
		},
		{
			id: 'alternative-solution',
			text: 'Propose negotiating with the bandits first',
			next: 'meet_vale',
			effects: { wisdom: 3 },
			hiddenEffects: {
				origin_choice: 'clever',
				personality_seed: 'diplomatic'
			}
		}
	]
};

import { Scene } from '../../../story-manager';

export const SeaScene: Scene = {
	id: 'sea',
	text: 'Waves lap the shore. A small boat rocks gently. The horizon is clear.',
	choices: [
		// Example: stat and prior-choice branching for boat outcomes
		{
			id: 'take-boat',
			text: 'Take the boat',
			outcomes: [
				// rich passengers get a luxuriously crewing passage
				{ conditions: { stats: { wealth: { min: 5 } } }, next: 'boat_luxury', effects: { curiosity: 2, wealth: -5 } },
				// if player previously visited the forest they know a secret route
				{ conditions: { hasFlags: ['go-forest'] }, next: 'boat', effects: { curiosity: 1 } },
				// fallback
				{ next: 'boat', effects: { courage: 1, wealth: -1 } }
			]
		},
		{ id: 'trade-fisher', text: 'Trade with the fisher (requires wealth ≥ 1)', next: 'sea', effects: { reputation: 1, wealth: -1 }, requirements: { wealth: { min: 1 } } },
		{ id: 'return-village', text: 'Return to the village', next: 'start', effects: { reputation: -1 } }
	]
};

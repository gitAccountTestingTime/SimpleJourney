import { Scene } from '../../../story-manager';

export const CabinScene: Scene = {
	id: 'cabin',
	text: 'Inside the cabin you find a warm fire and a map. Your journey continues elsewhere.',
	textVariants: [
		// If player took the brave confrontation path, they're recognized
		{
			text: 'Inside the cabin, a hooded figure nods at you knowingly. "I heard your call in the forest," they say. A warm fire crackles and a detailed map lies on the table.',
			conditions: { hasFlags: ['brave-confront'] }
		},
		// If player has high courage, they notice more details
		{
			text: 'Inside the cabin you find a warm fire and a map. Your keen eye notices fresh footprints and the scent of recent cooking. Someone was here recently.',
			conditions: { stats: { courage: { min: 5 } } }
		}
		// Falls back to base text if no conditions match
	],
	choices: [
		// allow searching the map which can branch depending on titles
		{
			id: 'search-map',
			text: 'Examine the map closely',
			outcomes: [
				{ conditions: { hasTitles: ['scholar'] }, next: 'treasure', effects: { curiosity: 1, wealth: 10 } },
				{ next: 'cabin_search', effects: { curiosity: 1 } }
			]
		},
		{ id: 'end', text: 'End the demo (the story continues...)', next: null, effects: { reputation: 1 } }
	]
};

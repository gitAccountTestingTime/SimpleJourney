import { Scene } from '../../story-manager';

export const ForestScene: Scene = {
	id: 'forest',
	text: 'The trees close in. You hear a distant howl. A cabin sits under an old oak.',
	choices: [
		{ id: 'investigate-cabin', text: 'Investigate the cabin', next: 'cabin', effects: { curiosity: 1, reputation: 1 } },
		{ id: 'brave-confront', text: 'Call out the howl (requires courage ≥ 2)', next: 'cabin', effects: { courage: 1, reputation: 2 }, requirements: { courage: { min: 2 } } },
		// Example: choice that leads to different cabin outcomes depending on titles
		{
			id: 'search-forest',
			text: 'Search the forest for signs',
			outcomes: [
				// If you are already a scholar you recognize markings and find treasure
				{ conditions: { hasTitles: ['scholar'] }, next: 'treasure', effects: { wealth: 20, curiosity: 1 } },
				// If not scholar but curious enough you find a map fragment
				{ conditions: { stats: { curiosity: { min: 3 } } }, next: 'cabin', effects: { curiosity: 1 } },
				{ next: 'forest', effects: { curiosity: 1 } }
			]
		},
		{ id: 'return-village', text: 'Return to the village', next: 'start', effects: { reputation: -1 } }
	]
};

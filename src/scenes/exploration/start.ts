import { Scene } from '../../story-manager';

export const StartScene: Scene = {
	id: 'start',
	text: 'You stand at the edge of a small village. A path leads into the forest and another to the sea.',
	choices: [
		// Example: flag-based and stat-based branching for the same choice
		{
			id: 'go-forest',
			text: 'Take the forest path',
			// provide multiple conditional outcomes — first matched is used
			outcomes: [
				// if player previously helped villagers, they are welcomed by a guide
				{ conditions: { hasFlags: ['help-villagers'] }, next: 'forest_secret', effects: { reputation: 2 } },
				// if player is especially courageous they find a hidden trail
				{ conditions: { stats: { courage: { min: 3 } } }, next: 'forest', effects: { curiosity: 2, courage: 1 } },
				// fallback outcome
				{ next: 'forest', effects: { courage: 1, curiosity: 1 } }
			]
		},
		{ id: 'go-sea', text: 'Head to the sea', next: 'sea', effects: { curiosity: 2 } },
		// Small helpful action that sets a flag for later branching
		{ id: 'help-villagers', text: 'Help a villager with chores (gain reputation)', next: 'start', effects: { reputation: 5 } }
	]
};

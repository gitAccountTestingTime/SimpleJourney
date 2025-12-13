import { Scene } from '../../../story-manager';

export const VillageScene: Scene = {
	id: 'village',
	text: 'You are back in the village square. People bustle about.',
	textVariants: [
		// High reputation + helped villagers before = warm welcome
		{
			text: 'You return to the village square and villagers wave warmly. "Welcome back, friend!" calls the elder. Your reputation precedes you. People bustle about their work with renewed energy.',
			conditions: { stats: { reputation: { min: 5 } }, hasFlags: ['help-villagers'] }
		},
		// High reputation alone = recognized
		{
			text: 'You are back in the village square. Several people recognize you and nod respectfully as you pass. The atmosphere is pleasant.',
			conditions: { stats: { reputation: { min: 5 } } }
		},
		// Low reputation = cold reception
		{
			text: 'You return to the village square. People avoid your gaze and hurry past. The atmosphere feels tense.',
			conditions: { stats: { reputation: { max: -3 } } }
		},
		// Custom condition: check place prosperity via closure
		{
			text: 'The village square is thriving! New stalls line the streets, children play freely, and there\'s a palpable sense of prosperity in the air.',
			conditions: { custom: () => {
				// This closure will be evaluated at runtime
				// In production, you might want to refactor this to avoid runtime function evaluation
				return true; // Placeholder - will be updated when places are available
			} }
		}
	],
	choices: [
		{ id: 'go-market', text: 'Visit the market', next: 'market' },
		{ id: 'go-tavern', text: 'Go to the tavern', next: 'tavern' },
		{ id: 'go-blacksmith', text: 'Visit the blacksmith', next: 'blacksmith' },
		{ id: 'go-shrine', text: 'Visit the shrine', next: 'shrine' },
		{ id: 'back-start', text: 'Return to the crossroads', next: 'start' }
	]
};

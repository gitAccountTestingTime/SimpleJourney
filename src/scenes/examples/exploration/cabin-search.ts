import { Scene } from '../../../story-manager';

export const CabinSearchScene: Scene = {
	id: 'cabin_search',
	text: 'You find a small clue on the map but its meaning eludes you.',
	choices: [
		{ id: 'continue', text: 'Continue your journey', next: 'start' }
	]
};

import { Scene } from '../../story-manager';

export const BoatScene: Scene = {
	id: 'boat',
	text: 'You row out and the wind catches the sails. The world grows wider.',
	choices: [
		{ id: 'end', text: 'End the demo (the story continues...)', next: null, effects: { curiosity: 1 } }
	]
};

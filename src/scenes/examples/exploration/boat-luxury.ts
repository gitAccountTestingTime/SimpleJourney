import { Scene } from '../../../story-manager';

export const BoatLuxuryScene: Scene = {
	id: 'boat_luxury',
	text: 'You enjoy a pleasant voyage with fine food and company.',
	choices: [
		{ id: 'disembark', text: 'Disembark at a prosperous port', next: 'start', effects: { wealth: 0 } }
	]
};

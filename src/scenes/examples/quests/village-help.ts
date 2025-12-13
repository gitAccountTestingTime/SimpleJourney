import { Scene } from '../../../story-manager';

export const VillageHelpScene: Scene = {
	id: 'village_help',
	text: 'You assist the villager and earn their gratitude.',
	choices: [
		{ id: 'back-to-start', text: 'Return to the crossroads', next: 'start' }
	]
};

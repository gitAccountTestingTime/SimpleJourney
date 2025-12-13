import { Scene } from '../../../story-manager';

export const ForestSecretScene: Scene = {
	id: 'forest_secret',
	text: 'A friendly guide shows you a hidden glade full of ruins.',
	choices: [
		{ id: 'explore-ruins', text: 'Explore the ruins', next: 'treasure', effects: { curiosity: 2 } },
		{ id: 'leave-glade', text: 'Leave the glade', next: 'forest' }
	]
};

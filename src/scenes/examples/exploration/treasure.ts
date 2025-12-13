import { Scene } from '../../../story-manager';

export const TreasureScene: Scene = {
	id: 'treasure',
	text: 'You discovered a hidden stash — fortune smiles upon you.',
	choices: [
		{ id: 'end', text: 'End the demo with treasure', next: null, effects: { wealth: 50 } },
		{ id: 'return-village', text: 'Return to the village', next: 'start', effects: { reputation: -1, wealth: 50 } }
	]
};

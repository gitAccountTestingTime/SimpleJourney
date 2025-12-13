import { Scene } from '../../../story-manager';

export const QuestHuntScene: Scene = {
	id: 'quest-hunt',
	text: 'You accept a hunt to clear pests from nearby farms. Success will change place prosperity and village opinion.',
	choices: [
		{ id: 'hunt-success', text: 'Succeed in the hunt', next: 'village', effects: { reputation: 3 }, placeEffects: { 'village': { prosperity: { op: 'add', value: 5 } } } },
		{ id: 'hunt-fail', text: 'Fail the hunt', next: 'village', effects: { reputation: -2 }, placeEffects: { 'village': { prosperity: { op: 'add', value: -2 } } } }
	]
};

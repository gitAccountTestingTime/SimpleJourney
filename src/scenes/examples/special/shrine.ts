import { Scene } from '../../../story-manager';

export const ShrineScene: Scene = {
	id: 'shrine',
	text: 'An ancient shrine hums with energy. Rituals here can alter stats in dramatic ways.',
	choices: [
		{ id: 'offerings', text: 'Leave an offering (set health to a fixed value)', next: 'shrine', effects: { health: { op: 'set', value: 20 } } },
		{ id: 'ritual', text: 'Participate in a risky ritual', next: 'shrine', outcomes: [
			{ conditions: { stats: { wisdom: { min: 5 } } }, next: 'shrine', effects: { charisma: { op: 'add', value: 2 } } },
			{ next: 'shrine', effects: { health: { op: 'add', value: -5 } } }
		] }
	]
};

import { Scene } from '../../story-manager';

export const BlacksmithScene: Scene = {
	id: 'blacksmith',
	text: 'The forge glows. The smith eyes your gear.',
	choices: [
		// outcome-level characterEffects and fallback
		{ id: 'buy-sword', text: 'Commission a sword', outcomes: [
			{ conditions: { stats: { wealth: { min: 10 } } }, next: 'blacksmith', effects: { strength: { op: 'add', value: 2 }, wealth: { op: 'add', value: -10 } }, characterEffects: { 'blacksmith': { favor: { op: 'add', value: 1 } } } },
			{ next: 'blacksmith', effects: { wealth: { op: 'add', value: -2 } } }
		] },
		{ id: 'repair', text: 'Ask for a quick repair', next: 'blacksmith', effects: { wealth: { op: 'add', value: -2 } } },
		// hidden path that only appears if strength is high enough
		{ id: 'secret-path', text: 'Squeeze through the smithy backdoor (requires strength ≥ 8)', next: 'treasure', requirements: { strength: { min: 8 } }, onFail: 'hide' }
	]
};

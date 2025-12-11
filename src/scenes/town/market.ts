import { Scene } from '../../story-manager';

export const MarketScene: Scene = {
	id: 'market',
	text: 'The market bustles with merchants. You see opportunities to trade or listen for rumors.',
	choices: [
		// choice-level character effect: helping a merchant increases their trust
		{ id: 'haggle', text: 'Haggle for a better price', next: 'market', effects: { wealth: -2 }, characterEffects: { 'elder': { trust: { op: 'add', value: 1 } } } },
		{ id: 'listen-rumors', text: 'Listen for rumors (might increase curiosity)', next: 'market', effects: { curiosity: 1 } },
		{ id: 'leave-market', text: 'Leave the market', next: 'start' }
	]
};

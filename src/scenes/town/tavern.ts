import { Scene } from '../../story-manager';

export const TavernScene: Scene = {
	id: 'tavern',
	text: 'Smoky air and loud laughter. A dice game draws a crowd.',
	textVariants: [
		// Wealthy player gets special treatment
		{
			text: 'Smoky air and loud laughter fill the tavern. As you enter, the barkeep immediately waves you over. "Ah, our distinguished patron returns! Your usual table awaits." A dice game draws a crowd nearby.',
			conditions: { hasTitles: ['wealthy'] }
		},
		// Charismatic player is warmly greeted
		{
			text: 'The tavern erupts with friendly greetings as you enter. "There they are!" someone shouts. Your charm has made you a favorite here. Smoky air and loud laughter surround you, and a dice game draws a crowd.',
			conditions: { hasTitles: ['charismatic'] }
		},
		// Poor player gets a different reception
		{
			text: 'Smoky air and loud laughter. The barkeep eyes your empty purse with suspicion. A dice game draws a crowd, but you\'re not sure you can afford to play.',
			conditions: { stats: { wealth: { max: 2 } } }
		}
	],
	choices: [
		{ id: 'buy-drink', text: 'Buy a drink', next: 'tavern', effects: { reputation: 1, wealth: -1 }, placeEffects: { 'tavern': { prosperity: { op: 'add', value: 1 } } } },
		{ id: 'gamble', text: 'Join the dice game (risky)', next: 'tavern', outcomes: [
			{ conditions: { stats: { luck: { min: 8 } } }, next: 'tavern', effects: { wealth: { op: 'mul', value: 2 } } },
			{ next: 'tavern', effects: { wealth: { op: 'add', value: -3 }, reputation: -1 } }
		] },
		{ id: 'ask-keeper', text: 'Ask the barkeep about work (requires reputation ≥ 2)', next: 'guild', requirements: { reputation: { min: 2 } }, onFail: 'disable' }
	]
};

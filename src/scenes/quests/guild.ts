import { Scene } from '../../story-manager';

export const GuildScene: Scene = {
	id: 'guild',
	text: 'A noticeboard lists tasks. You can take a job that will influence townsfolk and places.',
	choices: [
		{ id: 'take-quest', text: 'Take a local quest (gain flags)', next: 'quest-hunt', effects: { courage: 1 } },
		{ id: 'become-member', text: 'Apply for guild membership (requires reputation ≥ 5)', next: 'guild', requirements: { reputation: { min: 5 } }, onFail: 'disable' }
	]
};

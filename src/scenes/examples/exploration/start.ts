import { Scene } from '../../../story-manager';

export const StartScene: Scene = {
	id: 'start',
	text: `## ERROR: Scene Not Found

Something went wrong with the story flow. This scene ('start') is no longer used in the main story and should not be reachable.

If you're seeing this, a scene transition may have referenced an incorrect scene ID. Please report this issue so it can be fixed.

You may need to reload your save or start a new game to continue.`,
	choices: [
		{
			id: 'error-acknowledge',
			text: 'Return to game start',
			next: 'humble_beginnings',
			effects: {}
		}
	]
};

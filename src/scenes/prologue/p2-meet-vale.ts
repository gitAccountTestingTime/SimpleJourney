import { Scene } from '../../story-manager';

export const MeetVale: Scene = {
	id: 'meet_vale',
	text: `The village tavern buzzes with nervous energy the night before the mission. You sit alone, nursing a weak ale, when a striking figure slides into the seat across from you.

"Mind if I join you?" they ask with an easy smile. Their eyes are sharp despite the casual demeanor. "Name's Vale. I'm a traveling bard, but I couldn't help overhearing about tomorrow's little adventure. Seems like dangerous work for village volunteers."

They lean in conspiratorially. "I've dealt with bandits before. Perhaps we could help each other?"

There's something charming yet calculating about Vale. Why would a bard take such interest in a bandit problem?`,
	choices: [
		{
			id: 'share-drinks',
			text: 'Share drinks and swap stories',
			next: 'bandit_encounter',
			effects: { charisma: 2 },
			hiddenEffects: {
				vale_first_impression: 'open',
				vale_trust: 20,
				vale_romance: 5
			}
		},
		{
			id: 'keep-distance',
			text: 'Be polite but cautious',
			next: 'bandit_encounter',
			effects: { wisdom: 2 },
			hiddenEffects: {
				vale_first_impression: 'cautious',
				vale_trust: 5
			}
		},
		{
			id: 'probe-questions',
			text: 'Ask probing questions about their interest',
			next: 'bandit_encounter',
			effects: { wisdom: 2 },
			hiddenEffects: {
				vale_first_impression: 'investigative',
				vale_trust: 10
			}
		},
		{
			id: 'flirt',
			text: 'Flirt playfully with them',
			next: 'bandit_encounter',
			effects: { charisma: 3 },
			hiddenEffects: {
				vale_first_impression: 'flirtatious',
				vale_trust: 15,
				vale_romance: 15
			}
		}
	]
};

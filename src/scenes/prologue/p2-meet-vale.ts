import { Scene, getHiddenAttribute } from '../../story-manager';

// Get the weapon type selected in the previous scene
const getWeaponType = (): string => {
	const startingWeapon = getHiddenAttribute('starting_weapon');
	return typeof startingWeapon === 'string' ? startingWeapon : 'weapon';
};

const previousDayEnd = `With not much else to prepare, you turn to the local tavern for a final drink to steady your now ever-increasing nerves.`;

const getTavernBuzz = (): string => {
	const weaponType = getWeaponType();
	return `The village tavern buzzes with nervous energy the night before the mission. You sit alone in one corner, your ${weaponType} set on the window sill beside you. As you nurse a weak ale, a striking figure you don't recognizeslides into the seat across from you.`;
};

const valeIntroduction = `"Mind if I join you?" they ask with an easy smile. Their eyes are sharp despite the casual demeanor. "Name's Vale. I'm a traveling bard, but I couldn't help overhearing about tomorrow's little adventure... Seems like dangerous work for village volunteers."

"And yet, someone has to do it," you reply cautiously, looking taking in your sudden drinking companion.

"True enough," Vale nods. "But why volunteer? What's in it for you?"

"The same thing that drives everyone to make decisions like this," you answer. "An opportunity."

"An opportunity," Vale muses, eyes glinting with interest. "Well, as a bard, I do appreciate a good story and <i>this</i> sounds like the start of one worth being part of. Perhaps I could accompany you? My skills might come in handy... and who knows, maybe we could both find what we're looking for."`;

const valeOffer = `They lean in conspiratorially. "I've also dealt with bandits before, and do spend quite a bit of my time judging people and situations. Perhaps we could help each other?"`;

const valeIntrigue = `There's something charming yet calculating about Vale. You look him in the eyes, but it is clear that he is very practiced at dealing with people, and his face and body language give nothing more away. Why would a bard take such interest in a bandit problem? And yet, you're hardly in a position to refuse experienced help...`;

const getTavernEncounter = (): string => {
	return `${previousDayEnd}

${getTavernBuzz()}

${valeIntroduction}

${valeOffer}

${valeIntrigue}`;
};

export const MeetVale: Scene = {
	id: 'meet_vale',
	get text() { return getTavernEncounter(); },
	choices: [
		{
			id: 'share-drinks',
			text: 'Order a couple more drinks; May as well get to know this "Vale" better before tomorrow',
			next: 'bandit_encounter',
			effects: { charisma: 1 },
			hiddenEffects: {
				'vale_first_impression:open': true,
				vale_trust: 20,
				vale_romance: 5
			}
		},
		{
			id: 'keep-distance',
			text: 'Be polite, but cautious. Keep your distance until you know more about them.',
			next: 'bandit_encounter',
			hiddenEffects: {
				'vale_first_impression:cautious': true,
				vale_trust: 5
			}
		},
		{
			id: 'probe-questions',
			text: 'Ask probing questions about their interest. Perhaps you can find out what they\'re really after.',
			next: 'bandit_encounter',
			effects: { wisdom: 1 },
			hiddenEffects: {
				'vale_first_impression:investigative': true,
				vale_trust: 10
			}
		},
		{
			id: 'flirt',
			text: 'Flirt playfully with them. A charming bard could be a useful ally, and who knows what tomorrow may bring?',
			next: 'bandit_encounter',
			effects: { charisma: 2 },
			hiddenEffects: {
				'vale_first_impression:flirtatious': true,
				vale_trust: 15,
				vale_romance: 10
			}
		}
	]
};

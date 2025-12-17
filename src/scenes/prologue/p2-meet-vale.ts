import { Scene } from '../../story-manager';

const previousDayEnd = `A meeting was agreed to at dawn the next day, with solemn nods given by those gathered around you. Everyone went their own ways to prepare. With not much to prepare yourself, you gathered your few things and turned to the local tavern for a final drink to steady your now ever-increasing nerves.`;

const tavernBuzz = `The village tavern buzzes with nervous energy the night before the mission. You sit alone, nursing a weak ale, when a striking figure you don't recognizeslides into the seat across from you.`;

const valeIntroduction = `"Mind if I join you?" they ask with an easy smile. Their eyes are sharp despite the casual demeanor. "Name's Vale. I'm a traveling bard, but I couldn't help overhearing about tomorrow's little adventure... Seems like dangerous work for village volunteers."

"And yet, someone has to do it," you reply cautiously, looking taking in your sudden drinking companion.

"True enough," Vale nods. "But why volunteer? What's in it for you?"

"The same thing that drives everyone to make decisions like this," you answer. "An opportunity."

"An opportunity," Vale muses, eyes glinting with interest. "Well, as a bard, I do appreciate a good story and <i>this</i> sounds like the start of one worth being part of. Perhaps I could accompany you? My skills might come in handy... and who knows, maybe we could both find what we're looking for."`;

const valeOffer = `They lean in conspiratorially. "I've also dealt with bandits before, and do spend quite a bit of my time judging people and situations. Perhaps we could help each other?"`;

const valeIntrigue = `There's something charming yet calculating about Vale. You look him in the eyes, but it is clear that he is very practiced at dealing with people, and his face and body language give nothing more away. Why would a bard take such interest in a bandit problem? And yet, you're hardly in a position to refuse experienced help...`;

const tavernEncounter = `${previousDayEnd}

${tavernBuzz}

${valeIntroduction}

${valeOffer}

${valeIntrigue}`;

export const MeetVale: Scene = {
	id: 'meet_vale',
	text: `Later that night, as you sit in the tavern, you think back about your earlier choice to volunteer.  It seemed like the right thing to do at the time...an opportunity for both yourself and the village.  Now you just need to see this through.

---

${tavernEncounter}`,
	textVariants: [
		{
			conditions: {
				hasFlags: ['origin_choice:courageous']
			},
			text: `Your immediate step forward caught everyone by surprise. The elder's eyes lit up with relief and gratitude as you became the first volunteer, only growing as your courage inspired several others to join. Before long, a small band had formed.

The elder clasped your shoulder, "Thank you. Your bravery gives us hope. Let us discuss what we know, and how we can proceed." You then led the volunteer group in planning, while the elder provided additional details. 

---

${tavernEncounter}`
		},
		{
			conditions: {
				hasFlags: ['origin_choice:pragmatic']
			},
			text: `"The payment," you called out, your voice cutting through the murmurs and whispers swirling among the others gathered. "What exactly are we talking about?"

The elder nodded, understanding. "Fifty gold pieces per volunteer, plus any recovered goods will be split among those who help. The merchant guild has also promised future trade discounts."

You are careful to measure your resposne, but honestly it was more than fair. The crowd around you also began murmuring in approval, as clearly you weren't the only one whose interest was piqued. As several others stepped forward alongside you, the elder provides the group with meeting details for dawn before dismissing everyone to make their preparations.

---

${tavernEncounter}`
		},
		{
			conditions: {
				hasFlags: ['origin_choice:leadership']
			},
			text: `"We shouldn't go in disorganized," you speak up, your voice clear and confident. "If we're doing this, we need a proper plan. Who has combat experience? Who knows the trade routes? We need scouts, fighters, and someone to coordinate."

Your words resonate; the crowd's nervous energy shifted into something more focused. The elder looks at you clearly impressed as volunteers began organizing themselves around your suggestions. As the one who spoke up, you found yourself naturally taking charge, assigning roles and gathering information.

By the time the elder dismissed everyone to prepare for dawn, you'd already formed the core of a capable team.  At least... as capable as a group of volunteers gathered in your home village could be.

---

${tavernEncounter}`
		},
		{
			conditions: {
				hasFlags: ['origin_choice:clever']
			},
			text: `"Have we tried talking to them?" you ask as several heads turn your way. "Bandits usually want something specific. If we understand what they need, maybe we can find a solution that doesn't involve bloodshed."

The elder strokes his beard thoughtfully. "An interesting perspective. Though I fear these particular bandits have shown little interest in negotiation. From everything we know, they strike hard and fast, taking everything."

"Then at least we should try to understand their movements, their motives," you press. "Information can be more valuable than steel."

The elder nods slowly. "Wise words. Very well. Gather 'round and I will share what information I can, and we'll see if diplomacy has a place in this. But we must also be prepared for the alternative."	

Others volunteers gathered around the two of you as you spoke, clearly feeling more confident now that someone had gotten the ball rolling. The elder provided what information he knew, and then the group scatters until the meeting planned at dawn the next morning so that everyone can make whatever preparations they need.

---

${tavernEncounter}`
		}
	],
	choices: [
		{
			id: 'share-drinks',
			text: 'Order a couple more drinks; May as well get to know this "Vale" better before tomorrow',
			next: 'bandit_encounter',
			effects: { charisma: 1 },
			hiddenEffects: {
				vale_first_impression: 'open',
				vale_trust: 20,
				vale_romance: 5
			}
		},
		{
			id: 'keep-distance',
			text: 'Be polite, but cautious. Keep your distance until you know more about them.',
			next: 'bandit_encounter',
			hiddenEffects: {
				vale_first_impression: 'cautious',
				vale_trust: 5
			}
		},
		{
			id: 'probe-questions',
			text: 'Ask probing questions about their interest. Perhaps you can find out what they\'re really after.',
			next: 'bandit_encounter',
			effects: { wisdom: 1 },
			hiddenEffects: {
				vale_first_impression: 'investigative',
				vale_trust: 10
			}
		},
		{
			id: 'flirt',
			text: 'Flirt playfully with them. A charming bard could be a useful ally, and who knows what tomorrow may bring?',
			next: 'bandit_encounter',
			effects: { charisma: 2 },
			hiddenEffects: {
				vale_first_impression: 'flirtatious',
				vale_trust: 15,
				vale_romance: 10
			}
		}
	]
};

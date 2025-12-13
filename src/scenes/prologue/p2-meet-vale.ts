import { Scene } from '../../story-manager';

const tavernBuzz = `The village tavern buzzes with nervous energy the night before the mission. You sit alone, nursing a weak ale, when a striking figure slides into the seat across from you.`;

const valeIntroduction = `"Mind if I join you?" they ask with an easy smile. Their eyes are sharp despite the casual demeanor. "Name's Vale. I'm a traveling bard, but I couldn't help overhearing about tomorrow's little adventure. Seems like dangerous work for village volunteers."`;

const valeOffer = `They lean in conspiratorially. "I've dealt with bandits before. Perhaps we could help each other?"`;

const valeIntrigue = `There's something charming yet calculating about Vale. Why would a bard take such interest in a bandit problem?`;

const tavernEncounter = `${tavernBuzz}

${valeIntroduction}

${valeOffer}

${valeIntrigue}`;

export const MeetVale: Scene = {
	id: 'meet_vale',
	text: `You volunteered for the mission against the bandits. The elder thanked you and the other volunteers, then dismissed everyone to prepare for tomorrow's departure.

---

${tavernEncounter}`,
	textVariants: [
		{
			conditions: {
				hasFlags: ['origin_choice:courageous']
			},
			text: `Your immediate step forward caught everyone by surprise. The elder's eyes lit up with relief and gratitude as you became the first volunteer. Your courage inspired several others to join, and within minutes a small band had formed.

The elder clasped your shoulder. "Thank you. Your bravery gives us hope." He provided details about the meeting point at dawn, then dismissed everyone to prepare.

---

${tavernEncounter}`
		},
		{
			conditions: {
				hasFlags: ['origin_choice:pragmatic']
			},
			text: `"The payment," you called out, your voice cutting through the murmurs. "What exactly are we talking about?"

The elder nodded, understanding. "Fifty gold pieces per volunteer, plus any recovered goods will be split among those who help. The merchant guild has also promised future trade discounts."

It was fair—more than fair, actually. The crowd murmured in approval, and you weren't the only one whose interest was piqued. Several others stepped forward alongside you. The elder provided meeting details for dawn, then dismissed everyone to prepare.

---

${tavernEncounter}`
		},
		{
			conditions: {
				hasFlags: ['origin_choice:leadership']
			},
			text: `"We shouldn't go in disorganized," you spoke up, your voice clear and confident. "If we're doing this, we need a proper plan. Who has combat experience? Who knows the trade routes? We need scouts, fighters, and someone to coordinate."

Your words resonated. The crowd's nervous energy shifted into something more focused. The elder looked impressed as volunteers began organizing themselves around your suggestions. You found yourself naturally taking charge, assigning roles and gathering information.

By the time the elder dismissed everyone to prepare for dawn, you'd already formed the core of a capable team.

---

${tavernEncounter}`
		},
		{
			conditions: {
				hasFlags: ['origin_choice:clever']
			},
			text: `"Have we tried talking to them?" you asked, and several heads turned your way. "Bandits usually want something specific. If we understand what they need, maybe we can find a solution that doesn't involve bloodshed."

The elder stroked his beard thoughtfully. "An interesting perspective. Though I fear these particular bandits have shown little interest in negotiation—they strike hard and fast, taking everything."

"Then at least we should try to understand their movements, their motives," you pressed. "Information is as valuable as steel."

The elder nodded slowly. "Wise words. Very well—gather what information you can, and we'll see if diplomacy has a place in this. But be prepared for the alternative."

Others volunteered alongside you, and the elder provided details for the dawn meeting before dismissing everyone to prepare.

---

${tavernEncounter}`
		}
	],
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

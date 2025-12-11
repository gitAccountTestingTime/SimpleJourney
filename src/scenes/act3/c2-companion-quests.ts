import { Scene } from '../../story-manager';

// Sample Companion Personal Quest - Vale
export const CompanionPersonalQuests: Scene = {
	id: 'companion_personal_quests',
	text: `With fragments of the Crystal Heart in your possession, your companions begin to open up about their own struggles and dreams. Each carries burdens, secrets, and hopes for the future.

Vale approaches you one evening. "I need your help with something personal," they say quietly. "It's about my past - and the spy network that's been using me. I need to decide who I truly serve."

Your bonds with your companions have grown deep. Their personal stories matter as much as the kingdom's fate.`,
	choices: [
		{
			id: 'vale-quest',
			text: 'Help Vale confront their past',
			next: 'vale_personal_quest',
			effects: { charisma: 3 },
			hiddenEffects: {
				companion_quest_active: 'vale',
				vale_trust: 10
			}
		},
		{
			id: 'other-companions',
			text: 'Help other companions with their quests',
			next: 'other_companion_quests',
			effects: { charisma: 2 },
			hiddenEffects: {
				helping_companions: true
			}
		},
		{
			id: 'continue-main',
			text: 'Focus on the remaining Crystal Heart fragments',
			next: 'crystal_hunt_continued',
			effects: { wisdom: 2 },
			hiddenEffects: {
				mission_focused: true
			}
		}
	]
};

export const ValePersonalQuest: Scene = {
	id: 'vale_personal_quest',
	text: `Vale leads you to a secret Reformist safehouse. Inside, their handler waits - a cold, calculating woman who sees Vale as a tool, nothing more.

"Your mission is complete," she tells Vale dismissively. "The heir supports our cause. You're reassigned."

Vale's face hardens. "No. I'm staying with them. Not as a spy - as a companion."

The handler's eyes narrow. "That wasn't a request, Agent. You have your orders."

This is the moment Vale has been dreading - choosing between duty and friendship, between the cause they believed in and the person they've come to care for.

Vale looks to you, seeking strength. "I choose them," they say firmly. "Find another spy."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { vale_romance: 30 }
			},
			text: `Vale leads you to the safehouse, their hand tight in yours. When their handler tries to reassign them, Vale doesn't hesitate.

"I'm not your agent anymore," Vale says clearly. "I'm theirs. Completely. Because what I feel for them... it's real. More real than any cause or mission."

They turn to you, eyes vulnerable. "I choose you. Always you."

The handler's expression sours, but she can't force loyalty. "You're making a mistake, Agent."

"No," Vale says softly, looking at you. "For once, I'm making the right choice."`
		}
	],
	choices: [
		{
			id: 'support',
			text: 'Support Vale\'s choice completely',
			next: 'vale_quest_complete',
			effects: { charisma: 4 },
			hiddenEffects: {
				vale_trust: 25,
				vale_romance: 15,
				vale_free: true,
				vale_loyal_to_player: true
			}
		},
		{
			id: 'release',
			text: 'Release Vale from obligation - let them choose freely',
			next: 'vale_quest_complete',
			effects: { wisdom: 4 },
			hiddenEffects: {
				vale_trust: 30,
				vale_romance: 20,
				vale_chooses_player_freely: true,
				vale_deeply_touched: true
			}
		}
	]
};

export const ValeQuestComplete: Scene = {
	id: 'vale_quest_complete',
	text: `Vale is free. The weight they've carried for years - the dual identity, the constant deception - lifts. For the first time, they can simply be themselves.

"Thank you," they whisper. "For seeing me. The real me, beneath all the masks."

Your bond has deepened into something unbreakable. Whatever comes next, you face it together.`,
	choices: [
		{
			id: 'continue',
			text: 'Return to the quest for the Crystal Heart',
			next: 'crystal_hunt_continued',
			effects: { charisma: 2 },
			hiddenEffects: {
				vale_quest_complete: true,
				vale_full_companion: true
			}
		}
	]
};

// Placeholder for other companion quests
export const OtherCompanionQuests: Scene = {
	id: 'other_companion_quests',
	text: `Your other companions also need your help:

- Ash seeks closure for their lost family
- Rook must choose between their criminal past and a new future
- Whisper's true nature reveals itself
- Rowan confronts their half-elf identity
- Seraphine questions duty vs. personal happiness
- Kieran must defy his uncle
- Lyra faces her people's judgment
- And many more...

[Each would be a full quest arc with multiple scenes]`,
	choices: [
		{
			id: 'continue',
			text: 'Help your companions...',
			next: 'crystal_hunt_continued',
			effects: { charisma: 5 },
			hiddenEffects: {
				companions_helped: true
			}
		}
	]
};

export const CrystalHuntContinued: Scene = {
	id: 'crystal_hunt_continued',
	text: `With your companions' personal quests resolved or progressing, you turn back to the urgent matter: collecting all five Crystal Heart fragments before time runs out.

The Shadow Beast incursions grow worse daily. The barrier crumbles. You must act fast.

[This leads into additional fragment collection scenes, political conflicts, and eventual restoration of the Crystal Heart]`,
	choices: [
		{
			id: 'continue',
			text: 'Continue the main quest...',
			next: 'act4_climax',
			effects: { wisdom: 3 },
			hiddenEffects: {
				nearing_climax: true
			}
		}
	]
};

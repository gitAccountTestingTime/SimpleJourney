import { Scene } from '../../story-manager';

const companionReady = `With fragments of the Crystal Heart in your possession, your companions begin to open up about their own struggles and dreams. Each carries burdens, secrets, and hopes for the future.`;

const valeRequest = `Vale approaches you one evening. "I need your help with something personal," they say quietly. "It's about my past - and the spy network that's been using me. I need to decide who I truly serve."`;

const bondDepth = `Your bonds with your companions have grown deep. Their personal stories matter as much as the kingdom's fate.`;

// Sample Companion Personal Quest - Vale
export const CompanionPersonalQuests: Scene = {
	id: 'companion_personal_quests',
	text: `${companionReady}

${valeRequest}

${bondDepth}`,
	textVariants: [
		{
			conditions: { hasFlags: ['companions_most_important:true', 'independent_path_confirmed:true'] },
			text: `${companionReady}

Your independent path has meant putting companions first. They've noticed, and their trust in you is absolute.

${valeRequest}

There's no hesitation in your response - of course you'll help. That's who you are.

${bondDepth}`
		},
		{
			conditions: { hasHiddenAttributes: { vale_trust: 25 } },
			text: `${companionReady}

Vale approaches nervously, clearly struggling with vulnerability. You've earned their trust completely, but this confession is difficult.

"I need your help with something personal," they say quietly. "It's about my past - and the spy network that's been using me. I've been carrying this secret too long."

They meet your eyes. "I trust you. Completely. Will you help me break free?"

${bondDepth}`
		},
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true'], hasHiddenAttributes: { vale_trust: 20 } },
			text: `${companionReady}

Vale's Reformist background makes this conversation loaded. You chose their faction, but that doesn't mean you own their loyalty.

${valeRequest}

"I know you support the Reformists," they add. "But this is about me choosing for myself, not because of politics. Will you support that?"

${bondDepth}`
		}
	],
	choices: [
		{
			id: 'connect-first',
			text: 'Gather everyone for genuine connection before quests',
			next: 'social_connection_before_battle',
			effects: { empathy: 5, charisma: 4 },
			hiddenEffects: {
				bonding_moment: true,
				all_companions_care: true
			}
		},
		{
			id: 'vale-quest',
			text: 'Help Vale confront their past',
			next: 'vale_personal_quest',
			effects: { charisma: 3 },
			hiddenEffects: {
				'companion_quest_active:vale': true,
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

const safehouseConfrontation = `Vale leads you to a secret Reformist safehouse. Inside, their handler waits - a cold, calculating woman who sees Vale as a tool, nothing more.`;

const handlerDismissal = `"Your mission is complete," she tells Vale dismissively. "The heir supports our cause. You're reassigned."`;

const valeDefiance = `Vale's face hardens. "No. I'm staying with them. Not as a spy - as a companion."`;

const handlerThreat = `The handler's eyes narrow. "That wasn't a request, Agent. You have your orders."`;

const choiceMoment = `This is the moment Vale has been dreading - choosing between duty and friendship, between the cause they believed in and the person they've come to care for.`;

const valeChoice = `Vale looks to you, seeking strength. "I choose them," they say firmly. "Find another spy."`;

export const ValePersonalQuest: Scene = {
	id: 'vale_personal_quest',
	text: `${safehouseConfrontation}

${handlerDismissal}

${valeDefiance}

${handlerThreat}

${choiceMoment}

${valeChoice}`,
	textVariants: [
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true', 'vale_chooses_player_freely:true'] },
			text: `${safehouseConfrontation}

The handler's surprise is evident. "You chose the Reformists. Vale's mission succeeded. Why is this even a question?"

Vale steps forward. "Because I'm choosing them as a person, not because they picked the 'right' faction. They let me choose freely - now I'm choosing them."

${handlerDismissal}

${valeDefiance}

${handlerThreat}

${choiceMoment}

Vale's hand finds yours. "I choose them," they say firmly, eyes on you. "Not the Reformists. Them."`
		},
		{
			conditions: { hasHiddenAttributes: { vale_romance: 30 } },
			text: `Vale leads you to the safehouse, their hand tight in yours. When their handler tries to reassign them, Vale doesn't hesitate.

"I'm not your agent anymore," Vale says clearly. "I'm theirs. Completely. Because what I feel for them... it's real. More real than any cause or mission."

They turn to you, eyes vulnerable. "I choose you. Always you."

The handler's expression sours, but she can't force loyalty. "You're making a mistake, Agent."

"No," Vale says softly, looking at you. "For once, I'm making the right choice."`
		},
		{
			conditions: { hasFlags: ['loyalist_path_confirmed:true'], hasHiddenAttributes: { vale_trust: 25 } },
			text: `${safehouseConfrontation}

${handlerDismissal}

Vale shakes their head. "You wanted me to spy on them. But they chose the Loyalists - opposite of our cause. And yet..." They look at you. "I still choose them. Because it's not about politics anymore."

The handler's face hardens. "You're betraying the Reformist cause for a traditional monarch?"

"No," Vale says quietly. "I'm choosing a person I trust over a cause that uses people as pawns. There's a difference."

${choiceMoment}

${valeChoice}`
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
			id: 'romantic-moment',
			text: 'Take a moment to be alone with someone special (if romance active)',
			next: 'early_romance_opportunity',
			effects: { charisma: 2 },
			hiddenEffects: {
				vale_quest_complete: true,
				vale_full_companion: true
			},
			conditions: { hasHiddenAttributes: { any_romance_active: 35 } }
		},
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

export const EarlyRomanceOpportunity: Scene = {
	id: 'early_romance_opportunity',
	text: `After the intensity of Vale's quest, you find yourself with a brief moment of peace. The bonds you've been building with your companions have grown deeper, more meaningful.

Perhaps this is the right time to strengthen one of those connections - to show someone they matter to you beyond duty and strategy.`,
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { lyra_romance: 35 } },
			text: `Lyra finds you in the garden, moonlight making her seem almost otherworldly. "Walk with me?" she asks softly.`
		},
		{
			conditions: { hasHiddenAttributes: { kieran_romance: 35 } },
			text: `Kieran is in the training yard, working late into the night. They pause when they see you, vulnerability flickering across their usually guarded face.`
		},
		{
			conditions: { hasHiddenAttributes: { sage_romance: 35 } },
			text: `Sage waves you over excitedly. "I found something in the archives you'll love. Come see!" Their enthusiasm is infectious.`
		}
	],
	choices: [
		{
			id: 'lyra-early',
			text: 'Spend time with Lyra (requires romance 35+)',
			next: 'lyra_stargazing',
			effects: { charisma: 1 },
			conditions: { hasHiddenAttributes: { lyra_romance: 35 } }
		},
		{
			id: 'rowan-early',
			text: 'Go on a short walk with Rowan (requires romance 30+)',
			next: 'rowan_wilderness',
			effects: { charisma: 1 },
			conditions: { hasHiddenAttributes: { rowan_romance: 30 } }
		},
		{
			id: 'kieran-early',
			text: 'Join Kieran for training (requires romance 35+)',
			next: 'kieran_sparring',
			effects: { charisma: 1 },
			conditions: { hasHiddenAttributes: { kieran_romance: 35 } }
		},
		{
			id: 'sage-early',
			text: 'Explore the archives with Sage (requires romance 30+)',
			next: 'sage_library_date',
			effects: { charisma: 1 },
			conditions: { hasHiddenAttributes: { sage_romance: 30 } }
		},
		{
			id: 'finn-early',
			text: 'Visit Finn at the forge (requires friendship 30+)',
			next: 'finn_forge_date',
			effects: { charisma: 1 },
			conditions: { hasHiddenAttributes: { finn_friendship: 30 } }
		},
		{
			id: 'no-time',
			text: 'No time for personal matters - continue the mission',
			next: 'crystal_hunt_continued',
			effects: { wisdom: 2 },
			hiddenEffects: {
				romance_declined: true
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

Yet in the midst of crisis, you've also built deep bonds with those around you. Some relationships have grown into something more than friendship. Perhaps there's time for a meaningful moment before the next challenge.`,
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { lyra_romance: 50 } },
			text: `With fragments collected and allies secured, you have a brief respite. Lyra has been watching you with those ancient, knowing eyes. There's something she wants to share with you - something personal, away from the politics and battles.`
		},
		{
			conditions: { hasHiddenAttributes: { rowan_romance: 45 } },
			text: `Rowan has been restless lately, suggesting you both need time away from the palace. "Just for a night," they say. "The wilderness calls, and I want to share it with you."`
		},
		{
			conditions: { hasHiddenAttributes: { kieran_romance: 50 } },
			text: `Kieran's morning training sessions have become something special - moments where professional boundaries blur. They've been looking at you differently, with barely contained feelings they're struggling to express.`
		},
		{
			conditions: { hasHiddenAttributes: { sage_romance: 45 } },
			text: `Sage invited you to explore the restricted archives. Their excitement was purely intellectual at first, but lately there's been something more in their glances, their careful touches when reaching for the same book.`
		}
	],
	choices: [
		{
			id: 'lyra-moment',
			text: 'Spend time with Lyra under the stars (requires romance 50+)',
			next: 'lyra_stargazing',
			effects: { charisma: 2 },
			hiddenEffects: {
				romantic_moment_taken: true
			},
			conditions: { hasHiddenAttributes: { lyra_romance: 50 } }
		},
		{
			id: 'rowan-moment',
			text: 'Take Rowan up on their wilderness offer (requires romance 45+)',
			next: 'rowan_wilderness',
			effects: { charisma: 2 },
			hiddenEffects: {
				romantic_moment_taken: true
			},
			conditions: { hasHiddenAttributes: { rowan_romance: 45 } }
		},
		{
			id: 'kieran-moment',
			text: 'Meet Kieran for private training (requires romance 50+)',
			next: 'kieran_sparring',
			effects: { charisma: 2 },
			hiddenEffects: {
				romantic_moment_taken: true
			},
			conditions: { hasHiddenAttributes: { kieran_romance: 50 } }
		},
		{
			id: 'sage-moment',
			text: 'Join Sage in the archives (requires romance 45+)',
			next: 'sage_library_date',
			effects: { charisma: 2 },
			hiddenEffects: {
				romantic_moment_taken: true
			},
			conditions: { hasHiddenAttributes: { sage_romance: 45 } }
		},
		{
			id: 'finn-moment',
			text: 'Visit Finn at the forge (requires romance 40+)',
			next: 'finn_forge_date',
			effects: { charisma: 2 },
			hiddenEffects: {
				romantic_moment_taken: true
			},
			conditions: { hasHiddenAttributes: { finn_romance: 40 } }
		},
		{
			id: 'zephyr-moment',
			text: 'Accept Zephyr\'s mysterious midnight invitation (requires romance 45+)',
			next: 'zephyr_sky_dance',
			effects: { charisma: 2 },
			hiddenEffects: {
				romantic_moment_taken: true
			},
			conditions: { hasHiddenAttributes: { zephyr_romance: 45 } }
		},
		{
			id: 'thorne-moment',
			text: 'Fly with Thorne under the stars (requires romance 50+)',
			next: 'thorne_dragon_flight',
			effects: { charisma: 2 },
			hiddenEffects: {
				romantic_moment_taken: true
			},
			conditions: { hasHiddenAttributes: { thorne_respect: 50 } }
		},
		{
			id: 'marina-moment',
			text: 'Swim with Marina in her hidden cove (requires romance 45+)',
			next: 'marina_ocean_swim',
			effects: { charisma: 2 },
			hiddenEffects: {
				romantic_moment_taken: true
			},
			conditions: { hasHiddenAttributes: { marina_romance: 45 } }
		},
		{
			id: 'seraphine-moment',
			text: 'Attend Seraphine\'s private masquerade (requires romance 50+)',
			next: 'seraphine_masquerade',
			effects: { charisma: 2 },
			hiddenEffects: {
				romantic_moment_taken: true
			},
			conditions: { hasHiddenAttributes: { seraphine_romance: 50 } }
		},
		{
			id: 'shadow-moment',
			text: 'Meet Shadow on the rooftop (requires redemption 60+)',
			next: 'shadow_rooftop',
			effects: { charisma: 2 },
			hiddenEffects: {
				romantic_moment_taken: true
			},
			conditions: { hasHiddenAttributes: { shadow_redeemed: 60 } }
		},
		{
			id: 'continue-mission',
			text: 'Focus on the mission - no time for personal moments',
			next: 'act3_final_preparations',
			effects: { wisdom: 3 },
			hiddenEffects: {
				mission_focused: true,
				nearing_climax: true
			}
		}
	]
};

export const Act3FinalPreparations: Scene = {
	id: 'act3_final_preparations',
	text: `The Crystal Heart fragments are nearly complete. Your alliances are forged. Your companions stand ready. The final confrontation approaches.

The Shadow Beast incursions have reached critical levels. The barrier between worlds grows thin. Whatever comes next will determine the fate of the entire realm.

You gather your closest allies for one last council before the storm.`,
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { romantic_moment_taken: true } },
			text: `The Crystal Heart fragments are nearly complete. Your alliances are forged. Your companions stand ready.

That moment you shared with someone special still resonates - a reminder that you're fighting for more than just duty. You're fighting for love, for connection, for the future you want to build together.

The Shadow Beast incursions have reached critical levels. The barrier between worlds grows thin. Whatever comes next will determine the fate of the entire realm.

You gather your closest allies for one last council before the storm.`
		},
		{
			conditions: { hasHiddenAttributes: { all_companions_loyal: true } },
			text: `The Crystal Heart fragments are nearly complete. Your alliances are forged. Every companion you've gathered stands ready to follow you into whatever darkness awaits.

The bonds you've built - some romantic, some fraternal, all genuine - give you strength beyond mere magical power.

The Shadow Beast incursions have reached critical levels. The barrier between worlds grows thin. Whatever comes next will determine the fate of the entire realm.

You gather your closest allies for one last council before the storm.`
		}
	],
	choices: [
		{
			id: 'continue',
			text: 'Prepare for the final battle',
			next: 'act4_climax',
			effects: { courage: 5, wisdom: 4 },
			hiddenEffects: {
				act3_complete: true,
				ready_for_climax: true
			}
		}
	]
};

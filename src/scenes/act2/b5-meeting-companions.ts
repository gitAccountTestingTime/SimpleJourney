import { Scene } from '../../story-manager';

// Act 2 Continued - Meeting Key Companions

export const MeetingSage: Scene = {
	id: 'meeting_sage',
	text: `Before the formal meeting with Council Member Dane, you encounter a young man organizing stacks of documents in the People's Assembly Hall. He's muttering to himself about democratic precedents and constitutional frameworks, utterly absorbed.

"Oh!" He startles when he notices you, nearly dropping his papers. "I'm so sorry, I didn't... you're..." His eyes widen in recognition. "The heir. You're really here."

He fumbles a bow, flustered and endearing. "I'm Sage. I help Council Member Dane with research. I've been studying governance systems for years, hoping for this moment - a chance to help build something better."

His earnest passion is palpable. Unlike the calculated politicians, this young scholar genuinely believes in the ideals he speaks of.`,
	choices: [
		{
			id: 'engage-warmly',
			text: 'Engage warmly with his ideas',
			next: 'reformist_meeting',
			effects: { charisma: 2 },
			hiddenEffects: {
				sage_affection: 15,
				sage_friendship: true,
				values_common_people: true
			}
		},
		{
			id: 'dismissive',
			text: 'Be politely dismissive - you have serious work',
			next: 'reformist_meeting',
			effects: { wisdom: 1 },
			hiddenEffects: {
				sage_affection: -10,
				sage_hopes_crushed: true
			}
		},
		{
			id: 'romantic-interest',
			text: 'Show genuine interest in him personally',
			next: 'reformist_meeting',
			effects: { charisma: 3 },
			hiddenEffects: {
				sage_affection: 20,
				sage_romance_seed: true,
				sage_blushing: true
			}
		},
		{
			id: 'ask-join',
			text: 'Ask him to join your inner circle',
			next: 'reformist_meeting',
			effects: { charisma: 2, wisdom: 2 },
			hiddenEffects: {
				sage_affection: 18,
				sage_joins_early: true,
				sage_loyal: true
			}
		}
	]
};

export const ReformistMeeting: Scene = {
	id: 'reformist_meeting',
	text: `Council Member Dane is a distinguished older man with kind eyes and the bearing of a scholar-turned-politician. He greets you warmly but seriously.

"Your Highness, the Reformists propose something revolutionary: that you endorse democratic reforms, sharing power with an elected council representing all people - noble and common alike."

Sage presents detailed research showing successful democratic systems from other lands. His passion is infectious, his data compelling.

"We don't ask you to surrender the throne," Dane continues, "but to transform it. A constitutional monarchy where the crown serves as symbol and mediator, while the people govern themselves. You would be the leader who brought true freedom to the realm."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { sage_affection: 15 }
			},
			text: `Sage's presentation is thorough and passionate. He keeps glancing at you, gauging your reaction, clearly desperate for your approval.

Council Member Dane notices the dynamic with a slight smile. "Sage has worked tirelessly on these proposals," he says kindly. "He believes deeply that you could be the monarch who changes everything."

When you meet Sage's eyes, he blushes but doesn't look away. His hope is painfully genuine.`
		}
	],
	choices: [
		{
			id: 'embrace-fully',
			text: 'Embrace democracy fully',
			next: 'meeting_kieran',
			effects: { wisdom: 4, charisma: 3 },
			hiddenEffects: {
				reformist_faction_rep: 50,
				loyalist_rep: -15,
				sage_affection: 30,
				sage_overjoyed: true,
				democratic_tendency: true
			}
		},
		{
			id: 'constitutional',
			text: 'Suggest constitutional monarchy as compromise',
			next: 'meeting_kieran',
			effects: { wisdom: 5 },
			hiddenEffects: {
				reformist_faction_rep: 30,
				loyalist_rep: 5,
				sage_affection: 20,
				constitutional_approach: true
			}
		},
		{
			id: 'reject',
			text: 'Reject as chaos and instability',
			next: 'meeting_kieran',
			effects: { courage: 2 },
			hiddenEffects: {
				reformist_faction_rep: -25,
				loyalist_rep: 15,
				sage_affection: -25,
				sage_heartbroken: true,
				traditional_preference: true
			}
		},
		{
			id: 'neutral',
			text: 'Stay neutral - need time to consider',
			next: 'meeting_kieran',
			effects: { wisdom: 3 },
			hiddenEffects: {
				reformist_faction_rep: 5,
				sage_affection: 5,
				cautious_approach: true
			}
		}
	]
};

export const MeetingKieran: Scene = {
	id: 'meeting_kieran',
	text: `The military training grounds buzz with activity. Soldiers drill in formation, weapons clash in sparring rings. You've come to meet General Blackwood, but first you encounter his nephew.

Captain Kieran Blackthorn stands in the practice yard, overseeing training. He's impressive - strong build, battle-scarred, moving with warrior's grace. But what catches your attention is the moment you witness: a young soldier makes a mistake, drops their guard. Kieran could punish the error. Instead, he patiently corrects their stance, showing mercy and teaching over brutality.

When he notices your approach, he straightens. "Your Highness." His bow is proper, military-precise. But his eyes are warm, assessing you with intelligence, not just duty.

"My uncle awaits inside. But..." He hesitates. "A word of advice, if I may? He sees the world through a soldier's eyes. Everything is tactics and power. Remember that not all who serve him share his... methods."

There's a warning in his voice. And something else - hope, perhaps, that you'll be different.`,
	choices: [
		{
			id: 'commend-mercy',
			text: 'Commend his mercy with the soldier',
			next: 'military_meeting',
			effects: { wisdom: 2, charisma: 2 },
			hiddenEffects: {
				kieran_loyalty: 15,
				kieran_respects_player: true,
				military_honor_noted: true
			}
		},
		{
			id: 'question-softness',
			text: 'Question if military can afford such softness',
			next: 'military_meeting',
			effects: { courage: 2 },
			hiddenEffects: {
				kieran_loyalty: 5,
				kieran_defends_approach: true,
				pragmatic_view: true
			}
		},
		{
			id: 'ask-uncle',
			text: 'Ask about his relationship with his uncle',
			next: 'military_meeting',
			effects: { wisdom: 3 },
			hiddenEffects: {
				kieran_loyalty: 10,
				kieran_becomes_guarded: true,
				kieran_conflict_hinted: true
			}
		},
		{
			id: 'spar',
			text: 'Ask to spar with him - understand through action',
			next: 'military_meeting',
			effects: { courage: 3 },
			hiddenEffects: {
				kieran_loyalty: 20,
				kieran_impressed: true,
				kieran_romance_seed: true,
				sparred_with_kieran: true
			}
		}
	]
};

export const MilitaryMeeting: Scene = {
	id: 'military_meeting',
	text: `General Victor Blackwood dominates the war room like he dominates battlefields - through sheer presence and strategic brilliance. He's older, scarred, and radiates controlled power.

"Your Highness," he says, not quite a greeting. "Let me be direct. The kingdom needs strength. Order. Security. The Loyalists cling to outdated traditions. The Reformists peddle dangerous idealism. I offer reality."

He spreads military reports across the table. "Shadow Beasts. Border threats. Internal dissent. These problems require decisive action, not debate. I propose a strategic alliance: you as the legitimate heir, me handling security and enforcement. Together, we restore order."

Kieran stands at attention behind his uncle, but you notice his jaw is tight. He's uncomfortable with something in this proposal.

"Of course," Blackwood continues smoothly, "you would retain the crown and its... ceremonial functions. But military matters - those require expertise. Mine."

It's clear: he's offering power, but asking for yours in return.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { kieran_loyalty: 15 }
			},
			text: `General Blackwood makes his proposal, but you keep glancing at Kieran. His discomfort is obvious now - this isn't the first time he's heard his uncle present this plan, and he clearly has reservations.

When Blackwood mentions "decisive action," Kieran's hand tightens on his sword hilt. When "enforcement" is discussed, he looks away.

"Captain Kieran," Blackwood says suddenly, "tell our guest about our victory at Thornpass."

Kieran's face hardens. "We achieved the objective," he says carefully. "At significant cost to civilian life."

The tension between uncle and nephew is palpable.`
		}
	],
	choices: [
		{
			id: 'accept',
			text: 'Accept the alliance pragmatically',
			next: 'first_dragon_encounter',
			effects: { courage: 3 },
			hiddenEffects: {
				military_faction_rep: 50,
				reformist_rep: -25,
				kieran_loyalty: -10,
				kieran_disappointed: true,
				blackwood_alliance: true
			}
		},
		{
			id: 'counter-offer',
			text: 'Counter-offer with real power-sharing',
			next: 'first_dragon_encounter',
			effects: { wisdom: 4, charisma: 2 },
			hiddenEffects: {
				military_faction_rep: 25,
				kieran_loyalty: 15,
				kieran_approves: true,
				power_sharing_proposed: true
			}
		},
		{
			id: 'refuse',
			text: 'Refuse on principle - you won\'t be a figurehead',
			next: 'first_dragon_encounter',
			effects: { courage: 4 },
			hiddenEffects: {
				military_faction_rep: -20,
				kieran_loyalty: 25,
				kieran_deeply_approves: true,
				independent_stance: true
			}
		},
		{
			id: 'ask-kieran',
			text: 'Ask Kieran directly for his opinion',
			next: 'first_dragon_encounter',
			effects: { wisdom: 5 },
			hiddenEffects: {
				military_faction_rep: 10,
				kieran_loyalty: 30,
				kieran_honored_by_trust: true,
				blackwood_displeased: true,
				values_kieran_counsel: true
			}
		}
	]
};

export const FirstDragonEncounter: Scene = {
	id: 'first_dragon_encounter',
	text: `The mountain path is treacherous, but you've been told dragons reside in these peaks. As you navigate the rocky terrain, heat washes over you suddenly - unnatural, magical heat.

A man stands on an outcropping ahead. Tall, copper eyes that glow with inner fire, radiating warmth. But you can sense immediately: this is no man.

"So," he says, voice resonating with ancient power, "the lost heir walks into a dragon's domain. Brave or foolish?" He tilts his head, studying you with predatory intensity. "I am Thorne Drake. And I'm curious about you."

The air shimmers. For just a moment, you glimpse his true form - massive bronze wings, scales that catch sunlight like metal, a creature of terrifying majesty. Then he's human-shaped again, but the power remains.

"The humans play their political games below," he says. "Dragons observe. We've watched kingdoms rise and fall for three thousand years. But you... you're interesting. Show me why."`,
	choices: [
		{
			id: 'combat-trial',
			text: 'Accept his combat trial - prove strength',
			next: 'common_people_scene',
			effects: { courage: 5 },
			hiddenEffects: {
				thorne_respect: 15,
				dragon_trial_accepted: true,
				impressed_by_courage: true
			}
		},
		{
			id: 'wisdom-trial',
			text: 'Request trial of wisdom instead - riddles and strategy',
			next: 'common_people_scene',
			effects: { wisdom: 5 },
			hiddenEffects: {
				thorne_respect: 12,
				dragon_trial_accepted: true,
				impressed_by_mind: true
			}
		},
		{
			id: 'refuse-fight',
			text: 'Refuse to be tested - talk as equals',
			next: 'common_people_scene',
			effects: { charisma: 4 },
			hiddenEffects: {
				thorne_respect: 10,
				dragon_intrigued: true,
				bold_approach: true
			}
		},
		{
			id: 'ask-why',
			text: 'Ask why dragons care about mortal politics',
			next: 'common_people_scene',
			effects: { wisdom: 4 },
			hiddenEffects: {
				thorne_respect: 13,
				dragon_trial_accepted: true,
				philosophical_interest: true,
				thorne_opens_up: true
			}
		}
	]
};

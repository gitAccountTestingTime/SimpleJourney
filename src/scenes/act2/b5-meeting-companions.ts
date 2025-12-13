import { Scene } from '../../story-manager';

const sageAbsorbed = `Before the formal meeting with Council Member Dane, you encounter a young man organizing stacks of documents in the People's Assembly Hall. He's muttering to himself about democratic precedents and constitutional frameworks, utterly absorbed.`;

const sageWorking = `${sageAbsorbed}`;

const sageStartles = `"Oh!" He startles when he notices you, nearly dropping his papers. "I'm so sorry, I didn't... you're..." His eyes widen in recognition. "The heir. You're really here."`;

const sageRealization = `${sageStartles}`;

const sageBows = `He fumbles a bow, flustered and endearing. "I'm Sage. I help Council Member Dane with research. I've been studying governance systems for years, hoping for this moment - a chance to help build something better."`;

const sageIntroduction = `${sageBows}`;

const sageBelieves = `His earnest passion is palpable. Unlike the calculated politicians, this young scholar genuinely believes in the ideals he speaks of.`;

const sagePassion = `${sageBelieves}`;

// Act 2 Continued - Meeting Key Companions

export const MeetingSage: Scene = {
	id: 'meeting_sage',
	text: `${sageWorking}

${sageRealization}

${sageIntroduction}

${sagePassion}`,
	textVariants: [
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true', 'sage_becomes_close_advisor:true'] },
			text: `${sageWorking}

But when you enter - the heir who chose democracy - he freezes, papers forgotten.

"You... you chose us," he breathes, eyes shining. "You chose the Reformists. You chose the people." His joy is overwhelming.

${sageIntroduction}

His passion now has direction - serving you. "I'll work every day to prove your choice was right," he promises.

${sagePassion}`
		},
		{
			conditions: { hasFlags: ['loyalist_path_confirmed:true', 'traditional_ruler:true'] },
			text: `${sageWorking}

${sageRealization}

But there's disappointment in his eyes. "You chose the Loyalists," he says quietly. "Traditional restoration. I... I understand. They're powerful."

He still fumbles a bow, but the enthusiasm is dimmed. "I'm Sage. I work for the Reformists, but I suppose we'll be opposing factions now."

His disappointment is personal, not just political.

${sagePassion} Even in disappointment, you can see his genuine belief.`
		},
		{
			conditions: { hasFlags: ['independent_path_confirmed:true', 'chosen_own_path:true'] },
			text: `${sageWorking}

${sageRealization}

"You rejected all the factions," he says, studying you with new interest. "Including ours. That takes courage." There's respect in his voice, despite his Reformist loyalty.

${sageIntroduction}

"Maybe... maybe someone who won't be bound by factions is exactly what the kingdom needs," he muses. "I'd still like to help, if you'll let me."

${sagePassion}`
		}
	],
	choices: [
		{
			id: 'engage-warmly',
			text: 'Engage warmly with his ideas',
			next: 'sage_bonding_1',
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

const daneGreeting = `Council Member Dane is a distinguished older man with kind eyes and the bearing of a scholar-turned-politician. He greets you warmly but seriously.`;

const reformistProposal = `"Your Highness, the Reformists propose something revolutionary: that you endorse democratic reforms, sharing power with an elected council representing all people - noble and common alike."`;

const sageResearch = `Sage presents detailed research showing successful democratic systems from other lands. His passion is infectious, his data compelling.`;

const constitutionalOffer = `"We don't ask you to surrender the throne," Dane continues, "but to transform it. A constitutional monarchy where the crown serves as symbol and mediator, while the people govern themselves. You would be the leader who brought true freedom to the realm."`;

export const ReformistMeeting: Scene = {
	id: 'reformist_meeting',
	text: `${daneGreeting}

${reformistProposal}

${sageResearch}

${constitutionalOffer}`,
	textVariants: [
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true'] },
			text: `${daneGreeting}

But this isn't a negotiation - you've already chosen them. Dane's warmth is genuine relief. "Your Highness, you honor us with your trust."

${sageResearch} His joy at working with you directly is evident in every word.

"Now we begin the real work," Dane says. "Building a system that serves everyone. With your legitimacy supporting democratic change, we can transform the kingdom."`
		},
		{
			conditions: { hasHiddenAttributes: { sage_affection: 15 } },
			text: `Sage's presentation is thorough and passionate. He keeps glancing at you, gauging your reaction, clearly desperate for your approval.

${daneGreeting}

${reformistProposal}

Dane notices the dynamic with a slight smile. "Sage has worked tirelessly on these proposals," he says kindly. "He believes deeply that you could be the monarch who changes everything."

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

const trainingGrounds = `The military training grounds buzz with activity. Soldiers drill in formation, weapons clash in sparring rings. You've come to meet General Blackwood, but first you encounter his nephew.`;

const kieranTeaching = `Captain Kieran Blackthorn stands in the practice yard, overseeing training. He's impressive - strong build, battle-scarred, moving with warrior's grace. But what catches your attention is the moment you witness: a young soldier makes a mistake, drops their guard. Kieran could punish the error. Instead, he patiently corrects their stance, showing mercy and teaching over brutality.`;

const kieranGreeting = `When he notices your approach, he straightens. "Your Highness." His bow is proper, military-precise. But his eyes are warm, assessing you with intelligence, not just duty.`;

const kieranWarning = `"My uncle awaits inside. But..." He hesitates. "A word of advice, if I may? He sees the world through a soldier's eyes. Everything is tactics and power. Remember that not all who serve him share his... methods."`;

const kieranHope = `There's a warning in his voice. And something else - hope, perhaps, that you'll be different.`;

export const MeetingKieran: Scene = {
	id: 'meeting_kieran',
	text: `${trainingGrounds}

${kieranTeaching}

${kieranGreeting}

${kieranWarning}

${kieranHope}`,
	textVariants: [
		{
			conditions: { hasFlags: ['military_path_confirmed:true', 'kieran_conflicted:true'] },
			text: `${trainingGrounds}

${kieranTeaching}

${kieranGreeting}

But there's conflict in his expression. You chose his uncle's faction - he should be pleased. Yet you see worry instead.

"You allied with the Military," he says carefully. "I'll serve faithfully, of course. But..." He glances toward the command building. "Just remember there's more than one way to be strong. Don't let him convince you otherwise."

His loyalty to you may already exceed his loyalty to his uncle.

${kieranHope}`
		},
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true', 'progressive_ruler:true'] },
			text: `${trainingGrounds}

${kieranTeaching}

${kieranGreeting}

"I heard you chose the Reformists," he says, something like relief in his voice. "Democracy over military rule. My uncle is... displeased." A slight smile. "I'm not."

He lowers his voice. "The Military will still work with you - we serve the realm. But know that some of us believe you made the right choice."

His personal approval matters more than his faction's.

${kieranHope}`
		},
		{
			conditions: { hasFlags: ['independent_path_confirmed:true', 'chosen_own_path:true'] },
			text: `${trainingGrounds}

${kieranTeaching}

${kieranGreeting}

"You rejected all the factions," he says, admiration clear. "Including my uncle's. That takes courage - he's not a man who accepts rejection gracefully."

He steps closer, voice dropping. "I respect that. Building your own path, refusing to be claimed by political games. That's leadership."

${kieranHope} And something more - respect that might grow into something deeper.`
		}
	],
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
			next: 'kieran_bonding_1',
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
			next: 'kieran_bonding_1',
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

const blackwoodPresence = `General Victor Blackwood dominates the war room like he dominates battlefields - through sheer presence and strategic brilliance. He's older, scarred, and radiates controlled power.`;

const blackwoodOpening = `"Your Highness," he says, not quite a greeting. "Let me be direct. The kingdom needs strength. Order. Security. The Loyalists cling to outdated traditions. The Reformists peddle dangerous idealism. I offer reality."`;

const militaryReports = `He spreads military reports across the table. "Shadow Beasts. Border threats. Internal dissent. These problems require decisive action, not debate. I propose a strategic alliance: you as the legitimate heir, me handling security and enforcement. Together, we restore order."`;

const kieranDiscomfort = `Kieran stands at attention behind his uncle, but you notice his jaw is tight. He's uncomfortable with something in this proposal.`;

const blackwoodProposal = `"Of course," Blackwood continues smoothly, "you would retain the crown and its... ceremonial functions. But military matters - those require expertise. Mine."`;

const proposalImplication = `It's clear: he's offering power, but asking for yours in return.`;

export const MilitaryMeeting: Scene = {
	id: 'military_meeting',
	text: `${blackwoodPresence}

${blackwoodOpening}

${militaryReports}

${kieranDiscomfort}

${blackwoodProposal}

${proposalImplication}`,
	textVariants: [
		{
			conditions: { hasFlags: ['military_path_confirmed:true'] },
			text: `${blackwoodPresence}

But this meeting feels different - you've already allied with him. His greeting is warmer, more genuine. "Your Highness. You've made the right choice."

${militaryReports}

"Now that we're allies, we can speak plainly. The realm needs order restored swiftly. With your legitimacy and my military strength, we'll rebuild what was lost."

${kieranDiscomfort} Even in victory, Kieran seems troubled by his uncle's approach.

${proposalImplication}`
		},
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true', 'progressive_ruler:true'] },
			text: `${blackwoodPresence}

His coldness is palpable. You chose the Reformists - rejected his offer. "Your Highness," he says stiffly. "I hope your democratic experiment doesn't get people killed."

${militaryReports}

"These are realities, not political talking points. When the Shadow Beasts breach the border, you'll need soldiers, not debate. Remember that."

Kieran's relief at your choice is evident in his slight smile, despite his uncle's displeasure.

${proposalImplication} But you've already rejected it.`
		},
		{
			conditions: { hasHiddenAttributes: { kieran_loyalty: 15 } },
			text: `${blackwoodPresence}

${blackwoodOpening}

${militaryReports}

General Blackwood makes his proposal, but you keep glancing at Kieran. His discomfort is obvious now - this isn't the first time he's heard his uncle present this plan, and he clearly has reservations.

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

const mountainPath = `The mountain path is treacherous, but you've been told dragons reside in these peaks. As you navigate the rocky terrain, heat washes over you suddenly - unnatural, magical heat.`;

const thorneDrake = `A man stands on an outcropping ahead. Tall, copper eyes that glow with inner fire, radiating warmth. But you can sense immediately: this is no man.`;

const thorneGreeting = `"So," he says, voice resonating with ancient power, "the lost heir walks into a dragon's domain. Brave or foolish?" He tilts his head, studying you with predatory intensity. "I am Thorne Drake. And I'm curious about you."`;

const trueForm = `The air shimmers. For just a moment, you glimpse his true form - massive bronze wings, scales that catch sunlight like metal, a creature of terrifying majesty. Then he's human-shaped again, but the power remains.`;

const dragonChallenge = `"The humans play their political games below," he says. "Dragons observe. We've watched kingdoms rise and fall for three thousand years. But you... you're interesting. Show me why."`;

export const FirstDragonEncounter: Scene = {
	id: 'first_dragon_encounter',
	text: `${mountainPath}

${thorneDrake}

${thorneGreeting}

${trueForm}

${dragonChallenge}`,
	textVariants: [
		{
			conditions: { hasFlags: ['independent_path_confirmed:true', 'chosen_own_path:true'] },
			text: `${mountainPath}

Your independent choice has reached dragon ears. Word travels quickly among the ancient races.

${thorneDrake}

"So you're the one," he says, voice resonating with ancient power. "The heir who refused human factions. Interesting." His copper eyes assess you with new respect. "Dragons appreciate those who see beyond petty politics. I am Thorne Drake."

${trueForm}

"You seek alliance with the magical races, not human power brokers. That shows wisdom. Very well - show me you're worthy of dragon attention."`
		},
		{
			conditions: { hasFlags: ['magical_races_priority:true', 'diplomatic_focus:true'] },
			text: `${mountainPath}

Your commitment to the magical races from the beginning has impressed even the dragons.

${thorneDrake}

${thorneGreeting}

${trueForm}

"Lyra speaks well of you. Rare for an elf to respect a human so quickly." His copper eyes gleam. "You put the realm above human politics. We dragons have waited centuries for a leader like that. Impress me further."`
		},
		{
			conditions: { hasHiddenAttributes: { blood_magic_training: true, lyra_respect: 10 } },
			text: `${mountainPath}

${thorneDrake}

But he pauses, sensing something. "You've awakened royal blood magic. And Lyra trained you." Surprise flickers across his face. "The elves don't teach humans lightly. You must have earned significant respect."

${trueForm}

"A magic-wielder with elven approval. Now you have my full attention. Show me what else you can do."`
		}
	],
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

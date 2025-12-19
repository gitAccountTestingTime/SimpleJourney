import { Scene } from '../../story-manager';
import { AuthorUtils } from '../../author-utils';

const valeInfo_neutral = `Vale has sent occasional messages, sharing news and rumors. "The capital might have work for someone like you," the latest letter stated. "Your reputation is growing, and there are opportunities that come along with that."`;

const valeInfo_close = `Vale has been in regular contact, sharing news and rumors through letters, or occassionally tracking you down to share a drink and swap stories. 

"The capital might have work for someone like you," they say with a knowing smile. "Your reputation is growing, and people are starting to take notice. There are opportunities that come along with that."`;

const sixMonths = `Six months as part of Inferno transforms you.`;

const getKingdomSights = (): string => {
	const weaponType = AuthorUtils.getStartingWeapon();
	return `You've escorted caravans through dangerous territory, guarded noble estates, and hunted monsters threatening villages. 

Ash put you in touch with an old friend of hers, who was able to fix up your ${weaponType}, though they were insistent they'd never seen anything quite like it. 

You've fought alongside soldiers, mages, and other mercenaries. Along the way, you've made, and lost, friends. 

The kingdom is beautiful...and broken. And there is more than just the ever-present rumors of Shadow Beasts to blame.`;
};

const kingdomTruths = `You've seen wealth beyond imagination and poverty that breaks the heart.  You've seen the corruption that having everything can bring, and the hatred that wanting what you can never have can breed. 

You've met nobles who care and try to help, to understand the issues plaguing the kingdom, such as a striking young woman named Seraphine you met at her family's noble estate. 

You've also met nobles who don't care. Who view all below them with disdain. 

You've met commoners who are kind and generous, such as Sage, a nervous scholar you met in a library that aided you with some ancient texts.

You've met people with skill and integrity, like Finn, a dwarf craftsman at a market who taught you about his people's traditions.

And you've met those who are selfish, cruel, and desperate. Who put themselves above all else, be it for greed or survival.

Through it all, you've learned to fight, to lead, to survive. You scarcely recognize the person you were six months ago.`;

const getKingdomExperience = (): string => {
	const valeRomance = AuthorUtils.getValeRomance();
	let kingdomExperience = `${getKingdomSights()}

${kingdomTruths}`;

	if(valeRomance >= 15) {
		kingdomExperience += `
	${valeInfo_close}`
	} else {
		kingdomExperience += `
	${valeInfo_neutral}`
	}

	return kingdomExperience;
};

const barrierWarning = `"The kingdom's failing," they tell you one night. "The barrier between our world and the Shadowrealm is crumbling. Someone needs to fix it. Maybe that someone is you."`;

const briefEncounters = `  Tonight, you arrive in the capital for the first time. It's time to see what this kingdom is really about.`;

const reflection = `Over the past six months, you've learned and witnessed much.  One thing you wish to do before beginning your journey in the capital is...`;


export const MercenaryTraining: Scene = {
	id: 'mercenary_training',
	get text() {
		return `${sixMonths} 
	
	${getKingdomExperience()}

Ash has been a steady presence, teaching you combat while sharing hard-won wisdom. ${barrierWarning}

${briefEncounters}

${reflection}`;
	},
	
	textVariants: [
		{
			conditions: { hasFlags: ['ash_romance:10'] },
			get text() {
				return `Six months with Ash's company transforms you. 
			
			In addition to the teachings your daily life gives you as a mercenary, your curiosity about Ash's past and the Shadow Beasts eventually led to deep conversations and deeper bonds. Ash has personally overseen your training, and spends time with you often.

${getKingdomExperience()}

Ash has opened up in ways their troops claim she never does. 

"You see me," they admit one night as Inferno makes for the capital, her voice rough with emotion. "Not just the scars, not just the commander. And I didn't realize that something I was lacking before. Thank you." 

Returning to her normal, more serious composure, she clears her throat and continues. "We all know the kingdom's failing. Society is fracturing. Unrest grows on every side. Even the barrier to the Shadowrealm is crumbling. Yet here you are, fighting alongside me. And who knows? Maybe some day you'll be the one to finally fix it." She finished with a rare smile.

${briefEncounters}

${reflection}`;
			}
		},
		{
			conditions: { hasFlags: ['ash_trust:20'] },
			get text() {
				return `Six months with Ash's company transforms you. Your immediate acceptance of their offer impressed Ash, and they've personally overseen your training.  You've quickly become a trusted member of Inferno, becoming a squad leader and one of Ash's closest confidants.

${getKingdomExperience()}

Ash has quickly become more than just your commander. She's also a mentor, perhaps on some level also something more. 

"You remind me why I started this company," they confide one night, as Inferno makes for the capital. "And with all the chaos in the kingdom right now, that's a reminder I am always grateful for."

Returning to her normal, more serious composure, she clears her throat and continues. "The kingdom's failing. The barrier between our world and the Shadowrealm is crumbling. Someone needs to fix it. Maybe that someone is you."

${briefEncounters}

${reflection}`;
			}
		},
		{
			conditions: { hasFlags: ['ash_trust:10'] },
			get text() {
				return `Six months with Ash's company on negotiated terms transforms you. You got fair pay and, even more valuably, professional training.

${getKingdomExperience()}

Ash respects your pragmatic approach. "You were smart to negotiate," they say one night, as Inferno makes for the capital. 

"The kingdom's failing, and smart people will be the ones who survive what's coming. The barrier between our world and the Shadowrealm is crumbling. Keep your wits sharp."

${briefEncounters}

${reflection}`;
			}
		},
		
	],
	choices: [
		{
			id: 'practice-skill',
			text: 'Practice your developing skill. Dedicate this time to improving yourself.',
			next: 'meet_rook',
			effects: { wisdom: 2, strength: 2, courage: 2, wealth: 40 },
			hiddenEffects: {
				dedicated_practitioner: true,
				skill_focused: true,
				combat_skills: 8,
				kingdom_knowledge: 8,
				ash_trust: 12,
				growth_mindset: true,
				mercenary_pay_received: true
			},
			realLifeChallenge: {
				id: 'skill_practice_challenge',
				type: 'learning',
				title: 'Dedicated Practice',
				description: 'Your character trains and develops skills - you practice something meaningful to you',
				instructions: 'Spend 20 focused minutes practicing a skill you want to develop. This could be music, art, coding, language learning, a craft, writing, a sport; anything that requires practice and growth. Quality focus matters more than what you choose. Push yourself slightly beyond your comfort zone.',
				durationMinutes: 20,
				verificationMethod: 'honor',
				rewards: {
					stats: { wisdom: 2, strength: 2, dexterity: 2,courage: 2 },
					hiddenAttributes: { growth_mindset: 1, dedicated_practice: true },
					message: 'You finish your practice session feeling accomplished. Like your character training with Ash\'s mercenaries, you\'ve chosen to invest in your own growth and development. Consistent practice builds mastery over time.'
				}
			}
		},
		{
			id: 'reflect-compassion',
			text: 'Reflect on the suffering you\'ve witnessed. Remember the \'why\' behind your fight, not just the \'how\'.',
			next: 'meet_rook',
			effects: { wisdom: 3, wealth: 40 },
			hiddenEffects: {
				compassionate_actions: 1,
				combat_skills: 5,
				kingdom_knowledge: 10,
				ash_trust: 15,
				mercenary_pay_received: true
			}
		},
		{
			id: 'focus-combat',
			text: 'Focus on your combat training achievements. Take the time to further ingrain those lessons into your body and mind.',
			next: 'meet_rook',
			effects: { courage: 3, wealth: 40 },
			hiddenEffects: {
				combat_skills: 12,
				kingdom_knowledge: 5,
				ash_trust: 10,
				mercenary_pay_received: true
			}
		},
		{
			id: 'analyze-politics',
			text: 'Analyze the political situations you\'ve observed.  Organize your thoughts on how you might navigate them going forward, especially here in the capital.',
			next: 'meet_rook',
			effects: { wisdom: 3, charisma: 1, wealth: 40 },
			hiddenEffects: {
				combat_skills: 5,
				kingdom_knowledge: 15,
				ash_trust: 10,
				mercenary_pay_received: true
			}
		},
		{
			id: 'bond-with-ash',
			text: 'Spend the evening bonding with Ash. Who knows what the future holds, you\'d hate to later regret not taking this time together.',
			next: 'ash_bonding_1',
			effects: { charisma: 3, wealth: 45 },
			hiddenEffects: {
				combat_skills: 5,
				kingdom_knowledge: 5,
				ash_trust: 25,
				ash_romance: 20,
				mercenary_pay_received: true
			}
		}
	]
};

export const IndependentAdventuring: Scene = {
	id: 'independent_adventuring',
	get text() {
		return `You chose the independent path, taking odd jobs and building your reputation. Without Ash's company, progress is slower but you answer to no one but yourself.

${getKingdomExperience()}

You've seen and learned much. It is time to track down your next adventure in the capital city itself.`;
	},
	choices: [
		{
			id: 'continue-independent',
			text: 'Head for the capital to seek new opportunities. The kingdom awaits.',
			next: 'meet_rook',
			effects: { wisdom: 3, courage: 2, wealth: 35 },
			hiddenEffects: {
				combat_skills: 5,
				kingdom_knowledge: 5,
				independent_path: true,
				vale_trust: 5,
				independent_earnings: true
			}
		}
	]
};

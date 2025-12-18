import { Scene } from '../../story-manager';
import { AuthorUtils } from '../../author-utils';

const weaponType = AuthorUtils.getStartingWeapon();

const valeRomance = AuthorUtils.getValeRomance();

const valeInfo_neutral = `Vale has sent occasional messages, sharing news and rumors. "The capital might have work for someone like you," the latest letter stated. "Your reputation is growing, and there are opportunities that come along with that."`;

const valeInfo_close = `Vale has been in regular contact, sharing news and rumors through letters, or occassionally tracking you down to share a drink and swap stories. 

"The capital might have work for someone like you," they say with a knowing smile. "Your reputation is growing, and people are starting to take notice. There are opportunities that come along with that."`;

const sixMonths = `Six months as part of Inferno transforms you.`;

const kingdomSights = `You've escorted caravans through dangerous territory, guarded noble estates, and hunted monsters threatening villages. 

Ash put you in touch with an old friend of hers, who was able to fix up your ${weaponType}, though they were insistent they'd never seen anything quite like it. 

You've fought alongside soldiers, mages, and other mercenaries. Along the way, you've made, and lost, friends. 

The kingdom is beautiful...and broken. And there is more than just the ever-present rumors of Shadow Beasts to blame.`;

const kingdomTruths = `You've seen wealth beyond imagination and poverty that breaks the heart.  You've seen the corruption that having everything can bring, and the hatred that wanting what you can never have can breed. 

You've met nobles who care and try to help, to understand the issues plaguing the kingdom, such as a striking young woman named Seraphine you met at her family's noble estate. 

You've also met nobles who don't care. Who view all below them with disdain. 

You've met commoners who are kind and generous, such as Sage, a nervous scholar you met in a library that aided you with some ancient texts.

You've met people with skill and integrity, like Finn, a dwarf craftsman at a market who taught you about his people's traditions.

And you've met those who are selfish, cruel, and desperate. Who put themselves above all else, be it for greed or survival.

Through it all, you've learned to fight, to lead, to survive. You scarcely recognize the person you were six months ago.`;

var kingdomExperience = 
`${kingdomSights}

${kingdomTruths}`;

if(valeRomance >= 15) {

	kingdomExperience += `
	${valeInfo_close}`

} else {
	kingdomExperience += `
	${valeInfo_neutral}`
}

const barrierWarning = `"The kingdom's failing," they tell you one night. "The barrier between our world and the Shadowrealm is crumbling. Someone needs to fix it. Maybe that someone is you."`;

const briefEncounters = `  Tonight, you arrive in the capital for the first time. It's time to see what this kingdom is really about.`;

const reflection = `Over the past six months, you've learned and witnessed much.  One thing that you heavily focused on was...`;


export const MercenaryTraining: Scene = {
	id: 'mercenary_training',
	text: `${sixMonths} 
	
	${kingdomExperience}

Ash has been a steady presence, teaching you combat while sharing hard-won wisdom. ${barrierWarning}

${briefEncounters}

${reflection}`,
	
	textVariants: [
		{
			conditions: { hasFlags: ['ash_romance:10'] },
			text: 
			`Six months with Ash's company transforms you. 
			
			In addition to the teachings your daily life gives you as a mercenary, your curiosity about Ash's past and the Shadow Beasts eventually led to deep conversations and deeper bonds. Ash has personally overseen your training, and spends time with you often.

${kingdomExperience}

Ash has opened up in ways their troops claim she never does. 

"You see me," they admit one night as Inferno makes for the capital, her voice rough with emotion. "Not just the scars, not just the commander. And I didn't realize that something I was lacking before. Thank you." 

Returning to her normal, more serious composure, she continues. "We all know the kingdom's failing. Society is fracturing. Unrest grows on every side. Even the barrier to the Shadowrealm is crumbling. Yet here you are, fighting alongside me. And who knows? Maybe some day you'll be the one to finally fix it." She finished with a rare smile.

${briefEncounters}

${reflection}`
		},
		{
			conditions: { hasFlags: ['ash_trust:20'] },
			text: `Six months with Ash's company transforms you. Your immediate acceptance of their offer impressed Ash, and they've personally overseen your training.  You've quickly become a trusted member of Inferno, becoming a squad leader and one of Ash's closest confidants.

${kingdomExperience}

Ash has quickly become more than just your commander. She's also a mentor, perhaps on some level also something more. 

"You remind me why I started this company," they confide one night, as Inferno makes for the capital. "And with all the chaos in the kingdom right now, that's a reminder I am always grateful for."

Returning to her normal, more serious composure, she continues. "The kingdom's failing. The barrier between our world and the Shadowrealm is crumbling. Someone needs to fix it. Maybe that someone is you."

${briefEncounters}

${reflection}`
		},
		{
			conditions: { hasFlags: ['ash_trust:10'] },
			text: `Six months with Ash's company on negotiated terms transforms you. You got fair pay and, even more valuably, professional training.

${kingdomExperience}

Ash respects your pragmatic approach. "You were smart to negotiate," they say one night, as Inferno makes for the capital. 

"The kingdom's failing, and smart people will be the ones who survive what's coming. The barrier between our world and the Shadowrealm is crumbling. Keep your wits sharp."

${briefEncounters}

${reflection}`
		},
		
	],
	choices: [
		{
			id: 'practice-skill',
			text: 'Practice your developing skills - dedicate time to improvement',
			next: 'meet_rook',
			effects: { wisdom: 3, strength: 2, courage: 2, wealth: 40 },
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
			text: 'Reflect on the suffering you\'ve witnessed',
			next: 'meet_rook',
			effects: { wisdom: 3, wealth: 40 },
			hiddenEffects: {
				compassionate_actions: 5,
				combat_skills: 5,
				kingdom_knowledge: 10,
				ash_trust: 15,
				mercenary_pay_received: true
			}
		},
		{
			id: 'focus-combat',
			text: 'Focus on your combat training achievements',
			next: 'meet_rook',
			effects: { courage: 3, wealth: 40 },
			hiddenEffects: {
				combat_skills: 10,
				kingdom_knowledge: 5,
				ash_trust: 10,
				mercenary_pay_received: true
			}
		},
		{
			id: 'analyze-politics',
			text: 'Analyze the political situation you\'ve observed',
			next: 'meet_rook',
			effects: { wisdom: 3, charisma: 2, wealth: 40 },
			hiddenEffects: {
				combat_skills: 5,
				kingdom_knowledge: 15,
				ash_trust: 10,
				mercenary_pay_received: true
			}
		},
		{
			id: 'bond-with-ash',
			text: 'Spend the evening bonding with Ash',
			next: 'ash_bonding_1',
			effects: { charisma: 3, wealth: 45 },
			hiddenEffects: {
				combat_skills: 7,
				kingdom_knowledge: 8,
				ash_trust: 25,
				ash_romance: 20,
				mercenary_pay_received: true
			}
		}
	]
};

export const IndependentAdventuring: Scene = {
	id: 'independent_adventuring',
	text: `You chose the independent path, taking odd jobs and building your reputation. Without Ash's company, progress is slower but you answer to no one but yourself.

You've seen the kingdom's beauty and its darkness. You've helped where you could and learned to survive. The path has been difficult, but it has been yours.

Vale has checked in occasionally, sharing news and rumors. "You're building quite a reputation," they say with approval. "The capital might have work for someone like you."`,
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

import { Scene } from '../../story-manager';

const threeMonths = `Three months with Ash's company transforms you.`;

const kingdomSights = `You've escorted caravans through dangerous territory, guarded noble estates, and hunted monsters threatening villages. The kingdom is beautiful—and broken.`;

const kingdomTruths = `You've seen wealth beyond imagination and poverty that breaks the heart. You've met nobles who care and nobles who don't. You've learned to fight, to lead, to survive.`;

const kingdomExperience = `${kingdomSights}

${kingdomTruths}`;

const barrierWarning = `"The kingdom's failing," they tell you one night. "The barrier between our world and the Shadowrealm is crumbling. Someone needs to fix it. Maybe that someone is you."`;

const briefEncounters = `At a noble estate, you briefly meet a striking young woman named Seraphine. In a library, a nervous scholar named Sage shows you ancient texts. At a market, you admire crafts by a dwarf named Finn. Each encounter plants seeds for the future.

But tonight, you arrive in the capital for the first time. It's time to see what this kingdom is really about.`;

export const MercenaryTraining: Scene = {
	id: 'mercenary_training',
	text: `${threeMonths} ${kingdomExperience}

Ash has been a steady presence, teaching you combat while sharing hard-won wisdom. ${barrierWarning}

${briefEncounters}`,
	
	textVariants: [
		{
			conditions: { hasFlags: ['ash_trust:25'] },
			text: `Three months with Ash's company transforms you. Your curiosity about their past and the Shadow Beasts created deep conversations and deeper bonds.

${kingdomExperience}

Ash has opened up in ways their troops say they never do. "You see me," they admit one night, voice rough with emotion. "Not just the scars, not just the commander. The kingdom's failing, the barrier to the Shadowrealm is crumbling, but... having you here makes the fight feel worth it."

${briefEncounters}`
		},
		{
			conditions: { hasFlags: ['ash_trust:20'] },
			text: `Three months with Ash's company transforms you. Your immediate acceptance of their offer impressed the mercenary captain, and they've personally overseen your training.

${kingdomExperience}

Ash has become more than a commander—almost a mentor, perhaps something more. "You remind me why I started this company," they confide one night. "The kingdom's failing. The barrier between our world and the Shadowrealm is crumbling. But watching you grow... gives me hope."

${briefEncounters}`
		},
		{
			conditions: { hasFlags: ['ash_trust:10'] },
			text: `Three months with Ash's company on negotiated terms. You got fair pay and professional training—a solid business arrangement.

${kingdomExperience}

Ash respects your pragmatic approach. "You're smart to negotiate," they say one night. "The kingdom's failing, and smart people will be the ones who survive what's coming. The barrier between our world and the Shadowrealm is crumbling. Keep your wits sharp."

${briefEncounters}`
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
				instructions: 'Spend 20 focused minutes practicing a skill you want to develop. This could be music, art, coding, language learning, a craft, writing, a sport - anything that requires practice and growth. Quality focus matters more than what you choose. Push yourself slightly beyond your comfort zone.',
				durationMinutes: 20,
				verificationMethod: 'honor',
				checklistItems: [
					'Choose a skill you want to improve',
					'Set up your practice space',
					'Focus fully for 20 minutes',
					'Challenge yourself appropriately',
					'Note your progress'
				],
				rewards: {
					stats: { wisdom: 2, strength: 2, courage: 2 },
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
	text: `You chose the independent path, taking odd jobs and building your reputation. Without Ash's company, progress is slower but you answer to no one.

You've seen the kingdom's beauty and its darkness. You've helped where you could and learned to survive. The path has been lonely, but it's yours.

Vale has checked in occasionally, sharing news and rumors. "You're building quite a reputation," they say with approval. "The capital might have work for someone like you."

Tonight, you finally arrive in the great city. Time to see what opportunities await.`,
	choices: [
		{
			id: 'continue-independent',
			text: 'Embrace your independent path',
			next: 'meet_rook',
			effects: { wisdom: 3, courage: 2, wealth: 35 },
			hiddenEffects: {
				combat_skills: 5,
				kingdom_knowledge: 8,
				independent_path: true,
				vale_trust: 15,
				independent_earnings: true
			}
		}
	]
};

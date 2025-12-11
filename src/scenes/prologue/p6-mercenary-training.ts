import { Scene } from '../../story-manager';

export const MercenaryTraining: Scene = {
	id: 'mercenary_training',
	text: `Three months with Ash's company transforms you. You've escorted caravans through dangerous territory, guarded noble estates, and hunted monsters threatening villages. The kingdom is beautiful—and broken.

You've seen wealth beyond imagination and poverty that breaks the heart. You've met nobles who care and nobles who don't. You've learned to fight, to lead, to survive.

Ash has been a steady presence, teaching you combat while sharing hard-won wisdom. "The kingdom's failing," they tell you one night. "The barrier between our world and the Shadowrealm is crumbling. Someone needs to fix it. Maybe that someone is you."

At a noble estate, you briefly meet a striking young woman named Seraphine. In a library, a nervous scholar named Sage shows you ancient texts. At a market, you admire crafts by a dwarf named Finn. Each encounter plants seeds for the future.

But tonight, you arrive in the capital for the first time. It's time to see what this kingdom is really about.`,
	choices: [
		{
			id: 'reflect-compassion',
			text: 'Reflect on the suffering you\'ve witnessed',
			next: 'meet_rook',
			effects: { wisdom: 3 },
			hiddenEffects: {
				compassionate_actions: 5,
				combat_skills: 5,
				kingdom_knowledge: 10,
				ash_trust: 15
			}
		},
		{
			id: 'focus-combat',
			text: 'Focus on your combat training achievements',
			next: 'meet_rook',
			effects: { courage: 3 },
			hiddenEffects: {
				combat_skills: 10,
				kingdom_knowledge: 5,
				ash_trust: 10
			}
		},
		{
			id: 'analyze-politics',
			text: 'Analyze the political situation you\'ve observed',
			next: 'meet_rook',
			effects: { wisdom: 3, charisma: 2 },
			hiddenEffects: {
				combat_skills: 5,
				kingdom_knowledge: 15,
				ash_trust: 10
			}
		},
		{
			id: 'bond-with-ash',
			text: 'Spend the evening bonding with Ash',
			next: 'meet_rook',
			effects: { charisma: 3 },
			hiddenEffects: {
				combat_skills: 7,
				kingdom_knowledge: 8,
				ash_trust: 25,
				ash_romance: 20
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
			effects: { wisdom: 3, courage: 2 },
			hiddenEffects: {
				combat_skills: 5,
				kingdom_knowledge: 8,
				independent_path: true,
				vale_trust: 15
			}
		}
	]
};

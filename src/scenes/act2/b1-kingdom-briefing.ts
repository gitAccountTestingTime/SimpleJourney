import { Scene } from '../../story-manager';

export const KingdomBriefing: Scene = {
	id: 'kingdom_briefing',
	text: `Marcus spreads a map across the table, marked with territories, faction strongholds, and ominous black spots indicating Shadow Beast breaches.

"The situation is dire," he begins. "Twenty years ago, when your parents... when the royal family fell, the Crystal Heart shattered. Five fragments scattered across the kingdom. Without it, the barrier between our world and the Shadowrealm weakens daily."

Seraphine adds, "Three factions now vie for control: The Loyalists believe only a true heir can reunify the kingdom and restore the Crystal Heart. The Reformists want to abolish the monarchy and create a democratic council. And General Blackwood's Military faction seeks order through strength - with him in command."

Rowan leans forward. "And the magical races? Elves, dwarves, dragons - they're watching to see what humanity will do. The Crystal Heart protected them too. If we fail, they may abandon us... or worse."

The weight settles on your shoulders. This isn't just about a throne - it's about survival itself.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { learned_crystal_heart_history: true }
			},
			text: `Marcus spreads a map across the table. You study it with knowing eyes - Sir Aldric's spirit already revealed much of this history to you.

"You already know some of this," Marcus observes, noting your expression. "Good. That saves time."

He points to the black spots marking Shadow Beast breaches. "The situation worsens daily. Each fragment of the Crystal Heart contains immense power. The Loyalists, Reformists, and Military all seek them - but for different purposes."

Seraphine meets your eyes. "You understand what's at stake. The question is: what will you do about it?"

Your spirit-gained knowledge gives you confidence in this discussion.`
		}
	],
	choices: [
		{
			id: 'focus-crystal',
			text: 'Prioritize finding the Crystal Heart fragments',
			next: 'lyra_arrival',
			effects: { wisdom: 4 },
			hiddenEffects: {
				knows_political_landscape: true,
				knows_crystal_heart_crisis: true,
				crystal_heart_priority: true,
				magical_focus: true,
				seraphine_trust: 5,
				rowan_bond: 8
			}
		},
		{
			id: 'focus-unity',
			text: 'Focus on unifying the factions first',
			next: 'lyra_arrival',
			effects: { charisma: 4 },
			hiddenEffects: {
				knows_political_landscape: true,
				knows_crystal_heart_crisis: true,
				unity_priority: true,
				political_focus: true,
				seraphine_trust: 10
			}
		},
		{
			id: 'focus-races',
			text: 'Seek alliance with magical races immediately',
			next: 'lyra_arrival',
			effects: { wisdom: 3, charisma: 2 },
			hiddenEffects: {
				knows_political_landscape: true,
				knows_crystal_heart_crisis: true,
				magical_races_priority: true,
				diplomatic_focus: true,
				rowan_bond: 12,
				seraphine_trust: 3
			}
		},
		{
			id: 'ask-opinions',
			text: 'Ask for everyone\'s opinion before deciding',
			next: 'lyra_arrival',
			effects: { wisdom: 5 },
			hiddenEffects: {
				knows_political_landscape: true,
				knows_crystal_heart_crisis: true,
				collaborative_leadership: true,
				values_all_perspectives: true,
				seraphine_trust: 8,
				rowan_bond: 10,
				marcus_loyalty: 105
			}
		}
	]
};

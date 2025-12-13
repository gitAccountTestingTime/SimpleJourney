import { Scene } from '../../story-manager';

const briefingSetup = `Marcus spreads a map across the table, marked with territories, faction strongholds, and ominous black spots indicating Shadow Beast breaches.`;

const crisisExplanation = `"The situation is dire," he begins. "Twenty years ago, when your parents... when the royal family fell, the Crystal Heart shattered. Five fragments scattered across the kingdom. Without it, the barrier between our world and the Shadowrealm weakens daily."`;

const factionOverview = `Seraphine adds, "Three factions now vie for control: The Loyalists believe only a true heir can reunify the kingdom and restore the Crystal Heart. The Reformists want to abolish the monarchy and create a democratic council. And General Blackwood's Military faction seeks order through strength - with him in command."`;

const magicalRacesStakes = `Rowan leans forward. "And the magical races? Elves, dwarves, dragons - they're watching to see what humanity will do. The Crystal Heart protected them too. If we fail, they may abandon us... or worse."`;

const weightOfResponsibility = `The weight settles on your shoulders. This isn't just about a throne - it's about survival itself.`;

export const KingdomBriefing: Scene = {
	id: 'kingdom_briefing',
	text: `${briefingSetup}

${crisisExplanation}

${factionOverview}

${magicalRacesStakes}

${weightOfResponsibility}`,
	textVariants: [
		{
			conditions: { hasFlags: ['trust_in_marcus:true', 'marcus_loyalty:100'] },
			text: `${briefingSetup}

Marcus's trust has been well-placed. Seraphine greets you warmly, and Marcus's confidence in your leadership is clear as he begins the briefing.

${crisisExplanation}

${factionOverview}

${magicalRacesStakes}`
		},
		{
			conditions: { hasFlags: ['skepticism_level:high', 'marcus_must_prove_himself:true'] },
			text: `${briefingSetup}

You're still watching Marcus carefully, still questioning his motives. Seraphine notices your wariness. "I understand your caution," she says. "Let us earn your trust through action, not words."

${crisisExplanation}

Marcus meets your skeptical gaze. "I know you don't trust me yet. But these facts remain, regardless of your faith in me."

${factionOverview}

${magicalRacesStakes}`
		},
		{
			conditions: { hasHiddenAttributes: { seraphine_trust: 20 } },
			text: `${briefingSetup}

Seraphine's warmth toward you is evident. She stands closer than formality requires, her usual composure softened by genuine care.

${crisisExplanation}

She touches your hand briefly. "I won't let you face this alone. Whatever you decide, the Loyalists - and I - stand with you."

${factionOverview}

${magicalRacesStakes}`
		},
		{
			conditions: { hasHiddenAttributes: { learned_crystal_heart_history: true } },
			text: `${briefingSetup}

You study it with knowing eyes - Sir Aldric's spirit already revealed much of this history to you.

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
		},
		{
			id: 'study-history',
			text: 'Study the kingdom\'s history in the library first',
			next: 'library_discovery',
			effects: { wisdom: 4 },
			hiddenEffects: {
				knows_political_landscape: true,
				knows_crystal_heart_crisis: true,
				scholar_approach: true
			}
		}
	]
};

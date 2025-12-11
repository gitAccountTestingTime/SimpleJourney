import { Scene } from '../../story-manager';

export const CapitalTournament: Scene = {
	id: 'capital_tournament',
	text: `The capital's grand arena buzzes with excitement. A tournament is being held—combat, archery, even displays of magical aptitude. Nobles fill the premium seats while commoners pack the stands.

You spot familiar faces: General Blackwood watches fighters with a calculating eye. Lady Seraphine sits in the noble section. Vale works the crowd, gathering information. If you joined Ash's company, they're competing in the combat bracket.

This is your chance to make a name for yourself, catch the attention of powerful figures, or simply earn prize money. What will you compete in?`,
	choices: [
		{
			id: 'combat-tournament',
			text: 'Enter the combat tournament',
			outcomes: [
				{
					conditions: { 
						hasHiddenAttributes: { combat_skills: 8 },
						stats: { courage: { min: 5 } }
					},
					next: 'blood_magic_awakens',
					effects: { courage: 3, reputation: 15 },
					hiddenEffects: {
						tournament_champion: 'combat',
						general_blackwood_noticed: true
					}
				},
				{
					next: 'blood_magic_awakens',
					effects: { courage: 2, reputation: 8 },
					hiddenEffects: {
						tournament_participant: 'combat',
						general_blackwood_noticed: true
					}
				}
			]
		},
		{
			id: 'archery-contest',
			text: 'Enter the archery contest',
			next: 'blood_magic_awakens',
			effects: { wisdom: 2, reputation: 8 },
			hiddenEffects: {
				tournament_participant: 'archery'
			}
		},
		{
			id: 'magical-test',
			text: 'Enter the magical aptitude test',
			outcomes: [
				{
					conditions: { hasHiddenAttributes: { blood_magic_affinity: 10 } },
					next: 'blood_magic_awakens',
					effects: { wisdom: 3, reputation: 12 },
					hiddenEffects: {
						tournament_champion: 'magic',
						magical_aptitude: 15,
						lyra_noticed: true
					}
				},
				{
					next: 'blood_magic_awakens',
					effects: { wisdom: 2, reputation: 6 },
					hiddenEffects: {
						tournament_participant: 'magic',
						magical_aptitude: 8
					}
				}
			]
		},
		{
			id: 'strategy-tournament',
			text: 'Enter the chess/strategy tournament',
			next: 'blood_magic_awakens',
			effects: { wisdom: 3, reputation: 10 },
			hiddenEffects: {
				tournament_participant: 'strategy',
				seraphine_noticed: true
			}
		},
		{
			id: 'socialize',
			text: 'Skip competing and network with nobles',
			next: 'blood_magic_awakens',
			effects: { charisma: 3, reputation: 5 },
			hiddenEffects: {
				tournament_participant: 'none',
				social_connections: 10
			}
		}
	]
};

import { Scene } from '../../story-manager';

const arenaAtmosphere = `The capital's grand arena buzzes with excitement. A tournament is being held—combat, archery, even displays of magical aptitude. Nobles fill the premium seats while commoners pack the stands.`;

const familiarFaces = `You spot familiar faces: General Blackwood watches fighters with a calculating eye. Lady Seraphine sits in the noble section. Vale works the crowd, gathering information.`;

const tournamentScene = `${arenaAtmosphere}

${familiarFaces}`;

const tournamentQuestion = `This is your chance to make a name for yourself, catch the attention of powerful figures, or simply earn prize money. What will you compete in?`;

export const CapitalTournament: Scene = {
	id: 'capital_tournament',
	text: `${tournamentScene} If you joined Ash's company, they're competing in the combat bracket.

${tournamentQuestion}`,
	textVariants: [
		{
			conditions: { hasFlags: ['rook_trust:20'] },
			text: `${tournamentScene} Rook is with you, pointing out which nobles are worth impressing and which competitions are rigged.

"The magical aptitude test is legitimate," Rook whispers. "Everything else? Depends on who's watching and who you know." They grin. "Lucky for you, you know me."

${tournamentQuestion}`
		},
		{
			conditions: { hasFlags: ['rook_trust:15'] },
			text: `${tournamentScene} Rook agreed to scout for you and is already moving through the crowd, gathering intelligence.

"Lots of opportunity here," they report back. "Lots of danger too. Choose your competition wisely."

${tournamentQuestion}`
		},
		{
			conditions: { hasFlags: ['underworld_connection:hostile'] },
			text: `${tournamentScene} You notice some suspicious glares from the crowd—word travels fast in the underworld. Turning in Rook made you enemies.

The tension in the air is palpable. Whatever you choose to compete in, you'll need to watch your back.

${tournamentQuestion}`
		}
	],
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
					effects: { courage: 3, reputation: 15, wealth: 100 },
					hiddenEffects: {
						tournament_champion: 'combat',
						general_blackwood_noticed: true
					}
				},
				{
					next: 'blood_magic_awakens',
					effects: { courage: 2, reputation: 8, wealth: 50 },
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
			effects: { wisdom: 2, reputation: 8, wealth: 30 },
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
					effects: { wisdom: 3, reputation: 12, wealth: 80 },
					hiddenEffects: {
						tournament_champion: 'magic',
						magical_aptitude: 15,
						lyra_noticed: true
					}
				},
				{
					next: 'blood_magic_awakens',
					effects: { wisdom: 2, reputation: 6, wealth: 40 },
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
			effects: { wisdom: 3, reputation: 10, wealth: 60 },
			hiddenEffects: {
				tournament_participant: 'strategy',
				seraphine_noticed: true
			}
		},
		{
			id: 'socialize',
			text: 'Skip competing and network with nobles',
			next: 'blood_magic_awakens',
			effects: { charisma: 3, reputation: 5, wealth: 20 },
			hiddenEffects: {
				tournament_participant: 'none',
				social_connections: 10
			}
		}
	]
};

import { Scene } from '../../story-manager';

const arenaDescription = `The Grand Arena of Valdris is a marvel of architecture and excess. Massive stone walls rise three stories high, covered in banners displaying the royal crest and the colors of various noble houses. The arena floor, scraped clean of the previous day's blood and sand, gleams in the afternoon sun.`;

const crowdAtmosphere = `The stands are packed with thousands of spectators. The upper tiers swarm with commoners who paid their hard-earned copper just for the chance to watch. They cheer and jeer with raw enthusiasm, treating the tournament like the grandest entertainment they'll see all year.

The middle sections hold wealthy merchants and minor nobles, dressed in their finest, trying to be noticed by those above them. They clap politely and whisper behind jeweled fans, more interested in social maneuvering than the competitions themselves.

The premium boxes, draped in silk and shaded by enchanted awnings, house the true power of the kingdom. Nobles recline on cushioned seats, servants attending their every need. For them, this tournament is less about sport and more about identifying useful assets—talented fighters, skilled mages, clever strategists who might be recruited or sponsored.`;

const tournamentPurpose = `This tournament serves multiple purposes. It's entertainment for the masses, a networking opportunity for the ambitious, and most importantly, a recruitment event. The kingdom's military, noble houses, and magical academies all send representatives to scout for talent. Performance here can open doors that would otherwise remain closed forever.`;

const powerPlayersPresent = `You scan the crowd and spot several notable figures:

General Kieran Blackwood occupies a military box, his scarred face impassive as he evaluates each competitor with the calculating gaze of someone who's seen real combat. He's flanked by officers in Valdris military colors, all taking notes. The General is known for recruiting promising fighters directly from tournaments like this.

Lady Seraphine Ashford sits in one of the most prominent noble boxes, her elegant posture and composed expression a stark contrast to the chaos below. She's accompanied by her family's retinue, but her attention seems genuinely focused on the arena rather than social niceties. There are rumors she's seeking capable individuals for some personal project.

Vale moves through the crowd with practiced ease, their bard's clothing giving them access to areas others might be questioned entering. You catch them in conversation with various people—a guard here, a merchant there—their network of information constantly expanding. They spot you and offer a subtle nod of acknowledgment.`;

const competitionOptions = `The tournament consists of multiple events, each testing different skills and attracting different kinds of attention:

The combat tournament draws the largest crowds. Fighters face each other with real weapons, though healers stand ready and death is supposedly prohibited. The fighters range from trained soldiers to desperate commoners hoping to win prize money. Victory here means proving you can handle yourself in a real fight.

The archery contest tests precision and nerve. Targets at various distances, some stationary, some moving, some enchanted to dodge. It's less flashy than the combat tournament but respected by those who understand warfare isn't just about swinging swords.

The magical aptitude test draws the most scrutiny from the kingdom's magical community. Candidates perform a series of tasks designed to reveal their innate magical potential and control. Success here could mean sponsorship by a noble house or invitation to study with royal mages.

The chess and strategy tournament attracts nobles, merchants, and military strategists. It's less physically demanding but showcases the kind of thinking that wins wars and builds fortunes. Many successful competitors end up as advisors or tacticians.`;

const tournamentChoice = `You have the skills and courage to enter any of these competitions, or you could forgo competing entirely and focus on making social connections with the nobles and power brokers who attend.`;

const getTournamentIntro = (): string => {
	return `${arenaDescription}

${crowdAtmosphere}

${tournamentPurpose}

${powerPlayersPresent}

${competitionOptions}

${tournamentChoice}`;
};

export const CapitalTournament: Scene = {
	id: 'capital_tournament',
	get text() {
		return `${getTournamentIntro()}

If you joined Ash's mercenary company, Inferno is competing as a team in the combat bracket. Ash herself will be fighting, and you could join them or pursue your own path.

What will you do?`;
	},
	textVariants: [
		{
			conditions: { hasFlags: ['rook_trust:20'] },
			get text() {
				return `Your decision to help Rook find honest work created an instant bond. As you walk together through the capital's winding streets toward the arena, they prove their value immediately—pointing out shortcuts, warning you away from guard patrols known for shaking down outsiders, and sharing insights about the power structures that really run this city.

"You could've just let me go, or worse, turned me in," Rook says as you approach the arena district. "But you offered to help instead. That's rare in this place. Means I owe you, and I pay my debts."

${arenaDescription}

${crowdAtmosphere}

${tournamentPurpose}

${powerPlayersPresent}

${competitionOptions}

${tournamentChoice}

Rook stays close to your side, providing a constant stream of whispered commentary as you observe the arena.

"See that noble in the blue box? Duke Westerlyn. He sponsors fighters but treats them like property. Avoid catching his eye unless you want to end up in a cage." They point discreetly. "The woman in green? Lady Thornfield. She's legitimate—treats her people well, pays fairly. If you're going to impress a noble, make it her."

They lean closer, voice dropping even lower. "The magical aptitude test is the only one that's not rigged. The judges are from the Royal Academy—they don't care about politics, only about finding genuine talent. Everything else?" Rook shrugs. "Depends on who's watching and who you know."

Their grin turns sly. "Lucky for you, you know me. I can make sure the right people are paying attention when you make your move."

What will you do?`;
			}
		},
		{
			conditions: { hasFlags: ['rook_trust:15'] },
			get text() {
				return `Rook accepted your offer to work as your scout with a mixture of surprise and calculation. "Not many people would take a chance on a street thief," they said, testing the weight of your coin purse in their palm before handing it back. "I'll earn this properly. You'll see."

True to their word, they've proven their value during the journey to the arena. They know which vendors sell actual food versus gutter scraps, which alleys are safe passages versus death traps, and which officials can be bribed versus which will arrest you for trying. It's a different kind of education than you expected.

${arenaDescription}

${crowdAtmosphere}

${tournamentPurpose}

${powerPlayersPresent}

${competitionOptions}

${tournamentChoice}

Rook agreed to work as your scout and has already disappeared into the crowd. They return periodically with updates, weaving through the press of bodies like they were born to it.

"The combat tournament's going to be brutal," they report. "Half the fighters are ex-soldiers, and there's at least three who've killed people for real. Not saying you can't handle it, just... be aware."

"Archery contest has some interesting names. A few elven competitors, always impressive. Human stands won't look as flashy by comparison unless you're exceptional."

"The magical test draws the Academy judges. Very serious people, very hard to impress. But if you can? That's a golden ticket."

"Strategy tournament is mostly nobles showing off. But General Blackwood always watches that one closely. Man appreciates a good tactical mind."

They glance around, checking for eavesdroppers. "Lots of opportunity here. Lots of danger too. Choose wisely."

What will you do?`;
			}
		},
		{
			conditions: { hasFlags: ['underworld_connection:hostile'] },
			get text() {
				return `Turning Rook over to the authorities seemed like the right thing to do at the time. Theft is theft, after all, and the city has laws for a reason. The guards took them away with rough efficiency, and you collected a small bounty for your civic duty.

But the looks you received from the crowd as you walked away told a different story. Cold stares from street vendors. A suddenly cleared path as people deliberately moved out of your way—not out of respect, but out of disgust. Someone spat on the ground as you passed.

The message was clear: you violated an unspoken code. The streets protect their own, and you proved yourself an outsider who cooperates with authority. Word spreads fast in the underworld, and your name is now synonymous with "informant" and "traitor to the streets."

${arenaDescription}

${crowdAtmosphere}

${tournamentPurpose}

${powerPlayersPresent}

${competitionOptions}

${tournamentChoice}

As you move through the crowd, you notice hostile stares from certain quarters. A pickpocket you don't recognize deliberately bumps your shoulder—hard—and mutters something under their breath. A street vendor you try to buy from suddenly claims to be sold out, their eyes cold.

Word travels fast in the underworld. Turning in Rook branded you as someone not to be trusted, someone who cooperates with authorities. The city's shadow network has marked you as an enemy.

You catch glimpses of familiar faces from the slums—information brokers, thieves, black market dealers—all watching you with expressions ranging from disgust to outright hostility. If you fail or stumble during the tournament, you doubt anyone from the underworld will lift a finger to help. In fact, some might actively work against you.

The tension follows you like a shadow. Whatever competition you choose, you'll need to watch your back. Trust no one from the streets—they've already decided whose side they're on, and it's not yours.

What will you do?`;
			}
		}
	],
	choices: [
		{
			id: 'combat-tournament',
			text: 'Enter the combat tournament. Prove your skill with blade and courage in front of the kingdom\'s military elite.',
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
						'tournament_participant:combat': true,
						general_blackwood_noticed: true
					}
				}
			]
		},
		{
			id: 'archery-contest',
			text: 'Enter the archery contest. Demonstrate precision, patience, and steady nerves under pressure.',
			next: 'blood_magic_awakens',
			effects: { wisdom: 2, reputation: 8, wealth: 30 },
			hiddenEffects: {
				'tournament_participant:archery': true
			}
		},
		{
			id: 'magical-test',
			text: 'Enter the magical aptitude test. Reveal your innate magical potential to the Royal Academy judges.',
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
						'tournament_participant:magic': true,
						magical_aptitude: 8
					}
				}
			]
		},
		{
			id: 'strategy-tournament',
			text: 'Enter the chess/strategy tournament. Showcase your tactical mind and ability to outthink opponents.',
			next: 'blood_magic_awakens',
			effects: { wisdom: 3, reputation: 10, wealth: 60 },
			hiddenEffects: {
				'tournament_participant:strategy': true,
				seraphine_noticed: true
			}
		},
		{
			id: 'socialize',
			text: 'Skip competing and focus on networking. Sometimes the right connections matter more than winning.',
			next: 'blood_magic_awakens',
			effects: { charisma: 3, reputation: 5, wealth: 20 },
			hiddenEffects: {
				'tournament_participant:none': true,
				social_connections: 10
			}
		}
	]
};

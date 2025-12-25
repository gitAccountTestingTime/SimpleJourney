import { Scene, getHiddenAttribute, setHiddenAttribute } from '../../story-manager';

const departure = `You leave the capital at dawn, when the morning mist still clings to the cobblestone streets and the city's usual cacophony hasn't yet begun. The Guild Master provided detailed directions, supplies for a three-day journey, and a map marked with safe camping sites along the route. The weight of the contract sits in your pack alongside provisions, serving as a constant reminder of what awaits at your destination.`;

const roadDescription = `The road to Silverwood winds through terrain that grows progressively wilder as you leave civilization behind. The first day takes you through cultivated farmland, where peasants working their fields pause to watch you pass with expressions mixing curiosity and wariness. By afternoon, the farms give way to untamed forest filled with ancient trees whose branches form cathedral-like canopies overhead, filtering sunlight into dancing patterns on the forest floor.

These are old woods, the kind that feature in children's tales and travelers' warnings. The air tastes different here, rich with moss and decay and the indefinable scent of places where magic once flowed freely. Birds call from hidden perches, their songs unfamiliar and strangely melancholic. Animal trails crisscross the main road, and occasionally you spot deer or foxes watching from the undergrowth with eyes that seem far too intelligent.`;

const journeyReflection = `Three days of travel, according to the Guild Master's assessment. Three days to process everything you've learned: your Silverwood heritage, the blood magic awakening in your veins, the political dangers of carrying extinct royal blood. Three days to contemplate what you might discover at the manor...answers about your past, insights into your power, or perhaps dangers you haven't yet imagined.`;

const companionship = `As you travel, you're not alone. Word of your quest spread quickly among those you've met during your time in the capital. Some chose to accompany you for various reasons. Some drawn by friendship forged through shared experiences, some curiosity about the mysteries you're pursuing, or perhaps something deeper altogether. Fate itself might be gathering the right people for what's to come.

The journey stretches before you, three days to reach Silverwood Manor. Three days that will offer opportunities to deepen the bonds with those who've chosen to travel beside you.  After a day on the road, you and your companions settle in for the night, all quickly taking to resting as you adjust to the rhythm of travel.`;

const firstDayPrompt = `The group awakens and quickly prepares to resume moving. As the first day of real travel begins in earnest, you consider how to spend your time on the road. 

Your companions who readily joined you on your journey and have settled into their own rhythms:
- Vale humming softly while scanning the treeline, 
- Ash maintaining vigilant watch, 
- Rook scouting ahead periodically. 

The ancient forest itself whispers with old magic, and the path ahead offers many possibilities for this day's journey.`;

export const RoadToSilverwood: Scene = {
	id: 'road_to_silverwood',
	text: `${departure}

${roadDescription}

${journeyReflection}

${companionship}

${firstDayPrompt}`,
	choices: [
		{
			id: 'walking-meditation-challenge',
			text: 'Practice mindful walking meditation for a short time, using the moment to ground yourself. [Does not advance scene]',
			next: 'road_to_silverwood',
			effects: { wisdom: 3, vitality: 1 },
			hiddenEffects: {
				meditation_practice: true,
				inner_peace: 3,
				journey_day1_meditation: true
			},
			realLifeChallenge: {
				id: 'day1_walking_meditation',
				type: 'meditation',
				title: 'Mindful Walking Practice',
				description: 'Your character practices mindfulness while traveling—you do the same',
				instructions: 'Take a 10-minute walk (indoors or outdoors), focusing on the physical sensation of each step, your breath, and your surroundings. When your mind wanders, gently bring attention back to the present moment. The goal is presence, not destination.',
				durationMinutes: 10,
				verificationMethod: 'honor',
				rewards: {
					stats: { wisdom: 2, vitality: 2 },
					hiddenAttributes: { mindful_awareness: 1 },
					message: 'Your mindful walk brings clarity and centeredness, mirroring your character\'s journey through the forest.'
				}
			}
		},
		{
			id: 'companion-vale',
			text: 'Walk alongside Vale, learning about their bardic knowledge and magical insights.',
			next: 'road_to_silverwood_day1',
			effects: { wisdom: 2, charisma: 1 },
			outcomes: [{
				conditions: {
					custom: () => {
						const currentTrust = (getHiddenAttribute('vale_trust') as number) || 0;
						setHiddenAttribute('vale_trust', currentTrust + 10);
						setHiddenAttribute('journey_day1_vale_friendly', 1);
						return true;
					}
				}
			}]
		},
		{
			id: 'romantic-vale',
			text: '[Romantic] Spend the day walking closely with Vale, exploring the growing connection between you.',
			next: 'road_to_silverwood_day1',
			effects: { charisma: 2, wisdom: 1 },
			outcomes: [{
				conditions: {
					custom: () => {
						const currentRomance = (getHiddenAttribute('vale_romance') as number) || 0;
						setHiddenAttribute('vale_romance', currentRomance + 10);
						setHiddenAttribute('journey_day1_vale_romantic', 1);
						setHiddenAttribute('romantic_vale', true);
						return true;
					}
				}
			}]
		},
		{
			id: 'companion-ash',
			text: 'Learn combat techniques and strategy from Ash as you travel.',
			next: 'road_to_silverwood_day1',
			effects: { strength: 2, wisdom: 1 },
			outcomes: [{
				conditions: {
					custom: () => {
						const currentTrust = (getHiddenAttribute('ash_trust') as number) || 0;
						setHiddenAttribute('ash_trust', currentTrust + 10);
						setHiddenAttribute('combat_skills', 2);
						setHiddenAttribute('journey_day1_ash_friendly', 1);
						return true;
					}
				}
			}]
		},
		{
			id: 'romantic-ash',
			text: '[Romantic] Train with Ash throughout the day, and aim to explore the feeling the charged tension between your sparring and something deeper.',
			next: 'road_to_silverwood_day1',
			effects: { strength: 2, courage: 1 },
			outcomes: [{
				conditions: {
					custom: () => {
						const currentRomance = (getHiddenAttribute('ash_romance') as number) || 0;
						setHiddenAttribute('ash_romance', currentRomance + 10);
						setHiddenAttribute('combat_skills', 2);
						setHiddenAttribute('journey_day1_ash_romantic', 1);
						setHiddenAttribute('romantic_ash', true);
						return true;
					}
				}
			}]
		},
		{
			id: 'companion-rook',
			text: 'Scout the area with Rook, learning from their survival skills and street smarts.',
			next: 'road_to_silverwood_day1',
			effects: { intelligence: 2, dexterity: 1 },
			outcomes: [{
				conditions: {
					custom: () => {
						const currentTrust = (getHiddenAttribute('rook_trust') as number) || 0;
						setHiddenAttribute('rook_trust', currentTrust + 10);
						setHiddenAttribute('journey_day1_rook_friendly', 1);
						return true;
					}
				}
			}]
		},
		{
			id: 'romantic-rook',
			text: '[Romantic] Explore the wilderness with Rook, sharing secrets and trying to foster a more intimate trust.',
			next: 'road_to_silverwood_day1',
			effects: { intelligence: 2, charisma: 1 },
			outcomes: [{
				conditions: {
					custom: () => {
						const currentRomance = (getHiddenAttribute('rook_romance') as number) || 0;
						setHiddenAttribute('rook_romance', currentRomance + 10);
						setHiddenAttribute('journey_day1_rook_romantic', 1);
						return true;
					}
				}
			}]
		},
		{
			id: 'reflect-day1',
			text: 'Spend the day in contemplative solitude, preparing mentally for what lies ahead.',
			next: 'road_to_silverwood_day1',
			effects: { wisdom: 3 },
			hiddenEffects: {
				self_reflection: true,
				mental_preparation: true,
				inner_strength: 3,
				journey_day1_reflect: true
			}
		}
	]
};

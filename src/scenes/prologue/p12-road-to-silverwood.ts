import { Scene } from '../../story-manager';

const departure = `You leave the capital at dawn, when the morning mist still clings to the cobblestone streets and the city's usual cacophony hasn't yet begun. The Guild Master provided detailed directions, supplies for a three-day journey, and a map marked with safe camping sites along the route. The weight of the contract sits in your pack alongside provisions—a constant reminder of what awaits at your destination.`;

const roadDescription = `The road to Silverwood winds through terrain that grows progressively wilder as you leave civilization behind. The first day takes you through cultivated farmland, where peasants working their fields pause to watch you pass with expressions mixing curiosity and wariness. By afternoon, the farms give way to untamed forest—ancient trees whose branches form cathedral-like canopies overhead, filtering sunlight into dancing patterns on the forest floor.

These are old woods, the kind that feature in children's tales and travelers' warnings. The air tastes different here, rich with moss and decay and the indefinable scent of places where magic once flowed freely. Birds call from hidden perches, their songs unfamiliar and strangely melancholic. Animal trails crisscross the main road, and occasionally you spot deer or foxes watching from the undergrowth with eyes that seem far too intelligent.`;

const journeyReflection = `Three days of travel, according to the Guild Master's assessment. Three days to process everything you've learned: your Silverwood heritage, the blood magic awakening in your veins, the political dangers of carrying extinct royal blood. Three days to contemplate what you might discover at the manor—answers about your past, insights into your power, or perhaps dangers you haven't yet imagined.`;

const companionship = `As you travel, you're not alone. Word of your quest spread quickly among those you've met during your time in the capital. Some chose to accompany you—drawn by friendship forged through shared experiences, curiosity about the mysteries you're pursuing, or perhaps something deeper. Fate itself might be gathering the right people for what's to come.`;

const valePresence = `Vale rides beside you on a chestnut mare, their lute strapped across their back, occasionally humming songs about lost kingdoms and hidden heirs. The bard's repertoire seems suspiciously well-suited to your situation—tales of royal blood awakening, of ancient powers returning, of destinies long delayed finally coming to fruition. Their knowing glances suggest they understand far more than they're saying, as if they've been preparing for this journey longer than you've known them.`;

const campfireReflection = `Each night, you make camp at the sites marked on the Guild Master's map—clearings positioned near fresh water, with good sightlines and defensible positions. Around the campfire, as stars emerge overhead and the forest settles into its nocturnal rhythms, conversations deepen. Tales are shared, fears are voiced, hopes are cautiously expressed.

Bonds strengthen in the firelight—the kind of connections forged by shared purpose and mutual vulnerability. The weight of what's to come presses on everyone, acknowledged in the spaces between words and the quality of the silences. But there's also hope, fragile and precious: the hope that answers finally await at Silverwood Manor, that understanding will emerge from mystery, that this journey leads somewhere meaningful rather than simply dangerous.`;

const getRoadJourney = (): string => {
	return `${departure}

${roadDescription}

${journeyReflection}

${companionship}

${valePresence}

${campfireReflection}`;
};

export const RoadToSilverwood: Scene = {
	id: 'road_to_silverwood',
	get text() {
		return getRoadJourney();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['vale_romance:15', 'quest_accepted_with_group:true'] },
			get text() {
				return `Your decision to recruit companions before departing proved fortuitous. When you approached Vale about joining the expedition to Silverwood Manor, their response was immediate and emphatic: "Of course I'm coming. You think I'd let you face your heritage alone?"

But there was something else in their eyes—something beyond friendly concern or professional curiosity. The connection between you has been building since you first met, growing stronger through shared experiences and deepening trust. This journey feels like it might be when that unspoken attraction finally becomes something acknowledged.

${departure}

${roadDescription}

${journeyReflection}

Vale rides beside you on a chestnut mare, closer than strictly necessary for conversation. Their presence feels different now—charged with possibility, weighted with unspoken feelings that hover in the space between casual touches and meaningful glances. The songs they hum take on more intimate meanings: love ballads about devotion tested by hardship, duets meant for voices intertwined, melodies that speak of two souls finding each other against impossible odds.

You catch them watching you when they think you're not looking, and the expression on their face makes your heart race.

On the second night, after the others have retired to their bedrolls, you and Vale remain by the dying campfire. The stars overhead seem impossibly bright, as if the universe itself is bearing witness to this moment. The forest has gone quiet, creating a bubble of intimacy in the vast darkness.

Vale shifts closer, their shoulder brushing yours. "I've been thinking," they murmur, voice soft and vulnerable in a way you've rarely heard. "About what we might find at Silverwood. About what it means that you carry royal blood, that you have power others would kill for. About how dangerous the road ahead will be."

They turn to face you fully, firelight dancing in their eyes. "And I realized something: whatever we find, whatever dangers emerge, whatever choices you have to make—I want to be there. Not as an observer or even just a friend. As someone who..."

They pause, searching for words, then abandon the attempt. Their hand reaches up to cup your cheek, and you can feel them trembling slightly.

"Know that you don't face any of this alone," Vale whispers. "Not anymore. Not ever, if you'll have me."

The kiss is inevitable, sweet, and tinged with the bittersweetness of uncertain futures. It tastes like hope and fear intermingled, like promises made knowing they might be tested beyond breaking. When you finally part, Vale rests their forehead against yours, breathing in sync.

${campfireReflection}

But now there's something else in the firelight: the acknowledgment of love emerging in the shadow of destiny, fragile and fierce and worth protecting.`;
			}
		},
		{
			conditions: {
				hasHiddenAttributes: { vale_romance: 15 }
			},
			get text() {
				return `When you finalized your departure plans, Vale appeared at your door before you could even extend an invitation. "I'm coming with you," they stated, brooking no argument. The intensity in their eyes suggested this wasn't merely professional interest or friendly support—it was something deeper, something they'd been holding back until the stakes became too high to remain silent.

The connection between you has been undeniable for some time, growing through conversations and shared experiences, deepening with every moment of vulnerability and trust. This journey to Silverwood feels like the catalyst that will finally bring those feelings into the open.

${departure}

${roadDescription}

${journeyReflection}

Vale rides beside you, their chestnut mare matching pace with your mount as if the animals sense their riders' desire for proximity. The bard's usual playful demeanor has acquired layers—touches that linger a heartbeat longer than necessary, songs that carry hidden meanings meant only for you, glances weighted with promise and longing.

You've noticed the way they position themselves near you during rest stops, how their hand finds yours when helping you navigate rough terrain, how their voice softens when speaking your name. The attraction is mutual, undeniable, and growing more difficult to ignore with each passing mile.

On the second night, the others have retired early, exhausted from the day's travel. You and Vale remain by the campfire, ostensibly keeping watch, but the real reason hangs unspoken in the air between you. The stars overhead shine with unusual brilliance, as if the heavens themselves are providing the perfect backdrop for this moment.

Vale breaks the comfortable silence, voice low and earnest. "Whatever we find at Silverwood—whatever you discover about your heritage, your power, your destiny—know that you don't face it alone." They shift closer, close enough that you can feel their warmth. "Not anymore."

Their hand reaches up tentatively, giving you time to pull away if you wish. When you don't, their fingers brush your cheek with infinite gentleness.

"I'm with you," they whisper. "In whatever comes next. If you'll have me."

The kiss is inevitable, sweet, and tinged with the bittersweetness of uncertain futures. It speaks of hope born in dangerous times, of connection forged despite—or perhaps because of—the trials ahead. When you part, Vale smiles, and it's like the sun emerging from clouds.

The rest of the night passes in quiet conversation and stolen kisses, building a foundation of intimacy to carry you through whatever Silverwood holds.`;
			}
		},
		{
			conditions: { hasFlags: ['ash_trust:25', 'preparation_level:thorough'] },
			get text() {
				return `Your decision to prepare thoroughly before departing earned Ash's visible approval. When the mercenary captain learned you'd be taking time to gather proper supplies, plan the route, and research potential dangers, they immediately volunteered to assist—and to accompany you on the journey itself.

"This is how you stay alive," Ash explained while helping you organize provisions. "Proper preparation. Respect for the dangers ahead. Never rushing into situations blind." Their pride in your approach was obvious, and touching.

During the preparation phase, you noticed something shifting in Ash's demeanor toward you. The professional respect you'd earned as their student was evolving into something more personal, more protective. They watched you with eyes that held not just approval, but genuine care.

${departure}

Ash rides alongside you with military precision, their war horse moving with trained efficiency. The mercenary captain treats this journey like a tactical operation: supplies are organized for optimal access, watch rotations are planned to ensure constant vigilance, escape routes are mapped at each camping site, potential ambush points along the road are identified and approached with caution.

You're grateful for their thoroughness, but you've also noticed something beyond professional competence. Ash positions themselves between you and any potential threat—a subtle but consistent pattern. When you navigate difficult terrain, their hand is always ready to steady you. During campfire conversations, their attention frequently returns to you, checking, assessing, ensuring you're managing the stress of what's to come.

The hard edges that usually define Ash have softened when directed at you. Their eyes, typically sharp and calculating, hold warmth when they meet yours.

${roadDescription}

${journeyReflection}

On the evening of the second day, as you help Ash check the perimeter before full dark, you voice what you've been observing. "You're worried. About me, specifically."

Ash doesn't deny it. They pause their patrol, shoulders tense, staring into the darkening forest. "I've seen what royal politics does to people," they say quietly. "The backstabbing, the betrayals, the way power corrupts even the best intentions. What it did to my own family when we got too close to the throne's machinations."

They turn to face you, and the vulnerability in their expression catches you off-guard. "You're not just another student anymore. You're..."

They struggle with the words, then seem to abandon the attempt at eloquence in favor of directness. "I won't let what happened to my family happen to you. Whatever you choose to become—whether you reclaim your heritage or walk away from it entirely—whoever you choose to be, whatever path you take... I'll stand with you. Not as a teacher or a guard, but as someone who genuinely cares about your wellbeing and your future."

The admission hangs in the air between you, weighty and significant. Ash isn't one for flowery declarations, which makes this moment all the more powerful.

${campfireReflection}

And now, in the firelight, there's an unspoken promise: whatever dangers Silverwood holds, you won't face them alone.`;
			}
		},
		{
			conditions: {
				hasHiddenAttributes: { ash_trust: 25 }
			},
			get text() {
				return `When you finalized your departure plans, Ash immediately volunteered to accompany you. "You'll need someone who knows how to handle trouble," they stated matter-of-factly. But the concern in their eyes suggested motivations beyond professional duty. The bond between you has deepened significantly—student and mentor evolving into something closer to equals, and perhaps something more than that.

${departure}

${roadDescription}

${journeyReflection}

Ash rides alongside you with the bearing of a career soldier, their war horse moving with disciplined precision. But you've noticed patterns that go beyond professional protection: the way Ash consistently positions themselves between you and potential dangers, how their hand is always ready to steady you during difficult terrain, the frequency with which their attention returns to you during rest stops—checking, assessing, ensuring you're managing the weight of what's to come.

The mercenary captain's typically hard edges have softened when directed at you. Those eyes, usually sharp and calculating, hold warmth and something almost like tenderness when they meet yours.

During the journey, Ash treats every aspect with military precision—supplies organized for optimal access, watch rotations planned, escape routes mapped at each campsite, potential dangers identified and mitigated. Their competence is reassuring, but it's the underlying care that truly comforts you.

On the evening of the second day, as you watch Ash prepare the campsite with practiced efficiency, you voice what you've been observing. "You're worried about me."

Ash pauses their work, hands stilling on the tent rope they were securing. For a moment, they don't respond, then they straighten and turn to face you.

"I've seen what royal politics does to people," they say quietly, voice carrying unusual vulnerability. "The way power corrupts, the way ambition destroys, the betrayals and backstabbing. What it did to my own family when we got tangled in the court's machinations."

They meet your eyes directly. "You're good. Genuine. And you're walking into a situation that could change everything about who you are and what your life becomes." They pause, then add with fierce intensity, "I won't let that happen to you. Whatever you choose to become, whoever you choose to be—I'll stand with you. I'll make sure you have someone in your corner who cares about you as a person, not as a political asset or magical resource."

The weight of that promise settles between you, solid and reassuring in the face of uncertainty ahead.`;
			}
		},
		{
			conditions: { hasFlags: ['rook_trust:15', 'preparation_level:informed'] },
			get text() {
				return `Your decision to gather comprehensive information before departing impressed Rook more than you expected. When the street thief learned you'd spent time questioning the Guild Master about every detail of Silverwood Manor, researching historical records, and mapping potential routes, they showed up at your door with genuine respect in their eyes.

"Most nobles just throw gold at problems or charge in blind," Rook observed. "You actually use your head. I like that. Mind if I tag along? Figure someone with your intelligence deserves backup from someone who knows how to spot danger before it spots you."

Their offer to accompany you felt like more than opportunism—it felt like recognition, maybe even friendship.

${departure}

${roadDescription}

${journeyReflection}

Rook proves surprisingly adept at wilderness travel despite their urban background. Their street skills translate remarkably well: they scout ahead checking for dangers, they read terrain like they read city crowds, they gather information from travelers you encounter with the same efficiency they'd work sources in the Undercroft. Every evening, they report back with useful intelligence—who's traveling the roads, what rumors are spreading, where the safe water sources and good camping spots are located.

You've also noticed they're sharing more of themselves during this journey. Around the campfire, Rook tells stories about their life before becoming a thief—glimpses of family lost, choices made from desperation, dreams abandoned for survival. The walls they typically maintain are lowering, revealing the person beneath the street-smart exterior.

On the third day, as you navigate a particularly dense section of forest, Rook returns from a scouting run and settles in beside you. "You prepared well for this," they say, and there's no mockery in the statement—only genuine approval. "Asked the right questions, got the knowledge you needed, planned for contingencies. That Guild Master respect you because she knows you're not just another naive adventurer."

They grin, but it's softer than their usual sharp-edged smirk. "Most people with your kind of power awakening would be so focused on what they could do, they'd forget to think about what they should do. You're different. You actually care about doing things right."

The compliment feels weighty coming from someone who's survived by trusting no one and relying only on themselves.

${campfireReflection}

Rook sits close during these evening conversations, contributing their own stories, listening intently to others, becoming part of this makeshift family you're building. You catch them watching you sometimes with an expression that suggests they're still figuring out how they got here—traveling with people they're starting to genuinely care about, pursuing a purpose larger than survival.

Whatever awaits at Silverwood, you're glad Rook chose to come along.`;
			}
		}
	],
	choices: [
		{
			id: 'walking-meditation',
			text: 'Walk mindfully through the ancient forest, fully present to the journey itself',
			next: 'merchant_road_encounter',
			effects: { wisdom: 4, empathy: 3, vitality: 2 },
			hiddenEffects: {
				mindful_traveler: true,
				nature_connected: true,
				present_moment: true,
				inner_peace: 5
			},
			realLifeChallenge: {
				id: 'walking_meditation_challenge',
				type: 'meditation',
				title: 'Mindful Journey',
				description: 'Your character travels through ancient forests mindfully - you practice present awareness',
				instructions: 'Go outside and walk slowly for 10 minutes, paying full attention to your surroundings. Notice sounds, smells, textures, the feeling of movement. If you can\'t go outside, walk slowly through your home observing details you usually miss. Focus on presence and awareness rather than destination.',
				durationMinutes: 10,
				verificationMethod: 'honor',
				checklistItems: [
					'Find a place to walk (outside or inside)',
					'Walk slowly and deliberately',
					'Notice sensory details around you',
					'Stay present with each step',
					'Observe without judging'
				],
				rewards: {
					stats: { wisdom: 3, empathy: 2, vitality: 2 },
					hiddenAttributes: { mindful_awareness: 1, nature_bond: true },
					message: 'You return from your mindful walk feeling more present and aware. Like your character\'s journey through ancient forests, you\'ve practiced being fully present in the moment. This awareness is a gift you can carry forward.'
				}
			}
		},
		{
			id: 'bonding-vale',
			text: 'Spend meaningful time with Vale, discussing magic, heritage, and deeper connection',
			next: 'merchant_road_encounter',
			effects: { wisdom: 2, charisma: 2 },
			hiddenEffects: {
				vale_trust: 10,
				vale_romance: 10,
				magic_understanding: 5,
				'journey_focus:vale': true
			}
		},
		{
			id: 'bonding-ash',
			text: 'Train with Ash and learn about leadership, strategy, and warrior philosophy',
			next: 'merchant_road_encounter',
			effects: { courage: 3, combat_skills: 5 },
			hiddenEffects: {
				ash_trust: 10,
				ash_romance: 10,
				leadership_insight: true,
				'journey_focus:ash': true
			},
			outcomes: [
				{
					conditions: {
						hasHiddenAttributes: { mercenary_life_chosen: true }
					},
					effects: { combat_skills: 8 },
					hiddenEffects: { ash_trust: 15 }
				}
			]
		},
		{
			id: 'bonding-rook',
			text: 'Explore the wilderness with Rook, sharing stories and building trust',
			next: 'merchant_road_encounter',
			effects: { charisma: 2, wisdom: 2 },
			hiddenEffects: {
				rook_trust: 10,
				rook_romance: 10,
				area_secrets_discovered: true,
				'journey_focus:rook': true
			}
		},
		{
			id: 'reflect',
			text: 'Spend time in solitude, mentally and emotionally preparing for what lies ahead',
			next: 'merchant_road_encounter',
			effects: { wisdom: 4 },
			hiddenEffects: {
				self_reflection: true,
				mental_preparation: true,
				'journey_focus:self': true,
				inner_strength: 5
			}
		}
	]
};

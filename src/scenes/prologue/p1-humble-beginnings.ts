import { Scene } from '../../story-manager';

const morningInThornshaven = `The early morning sun barely breaks through the mist as it slowly crests the hills surrounding Thornshaven, a small but quaint village nestled in the valley.`;

const walkToSquare = `You walk slowly toward the village square, the cobblestone path cool beneath your feet. The scent of fresh bread wafts from the local bakery, mingling with the earthy aroma of dew-kissed grass.`;

const onlyHomeKnown = `It's the same scent that has greeted you every morning of your life here - the only home you've ever known, though you've lived alone for as long as you can remember.`;

const oddJobsLife = `For years you've done odd jobs around the village to get by, each day the same as the last. The memories of your life until now swirl somewhere in the back of your mind. You push them aside as you approach the square, which was busier than usual for this time of day.`;

const elderBellRings = `Suddenly, you hear the village elder ringing the bell in town, calling members of the village and visitors alike to hear his words. Curious, you make your way within hearing distance while still keeping to yourself, as per usual. After giving some time for folks to gather, the elder begins,`;

const elderAnnouncement = `"Bandits have been raiding the trade routes," the elder announces, his voice carrying across the square. "We've been unable to get word to any of the adventurer's guilds in the area, and with our current supplies...we are running out of options. We need brave souls to deal with them. Payment will be fair."`;

const situationRealization = `You'd heard rumors of supplies being intercepted and taken before reaching the village, but did not know that things had gotten this bad. On the other hand, this could be your chance to prove yourself, or to actually earn enough coin to finally leave this place. Regardless, as someone already living day to day, you could hardly sit around and hope someone else resolved the situation.`;

export const PrologueStart: Scene = {
	id: 'prologue_start',
	text: `${morningInThornshaven}

${walkToSquare} ${onlyHomeKnown}

${oddJobsLife}

${elderBellRings}

${elderAnnouncement}

${situationRealization}`,
	choices: [
		{
			id: 'meet-vale',
			text: 'Step forward without hesitation. You have nothing to lose...and perhaps much to gain.',
			next: 'meet_vale',
			effects: { courage: 1 },
			hiddenEffects: {
				'origin_choice:courageous': true,
				personality_seed: 'brave'
			}
		},
		{
			id: 'ask-payment',
			text: 'Ask about the payment first. You need to know it\'s worth the risk.',
			next: 'meet_vale',
			hiddenEffects: {
				'origin_choice:pragmatic': true,
				personality_seed: 'practical'
			}
		},
		{
			id: 'organize-others',
			text: 'Suggest setting up and organizing a proper group out of those willing',
			next: 'meet_vale',
			effects: { charisma: 1 },
			hiddenEffects: {
				'origin_choice:leadership': true,
				personality_seed: 'leader'
			}
		},
		{
			id: 'alternative-solution',
			text: 'Propose negotiating with the bandits first. Perhaps there\'s a peaceful resolution.',
			next: 'meet_vale',
			effects: { wisdom: 1 },
			hiddenEffects: {
				'origin_choice:clever': true,
				personality_seed: 'diplomatic'
			}
		}
	]
};

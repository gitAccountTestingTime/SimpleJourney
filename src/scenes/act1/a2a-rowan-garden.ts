import { Scene } from '../../story-manager';

export const RowanGardenWalk: Scene = {
	id: 'rowan_garden_walk',
	text: `Rowan leads you through the manor gardens, and you're struck by their beauty. Ancient trees tower overhead, their branches forming natural archways. Flowers bloom in riot of colors - species you've never seen before.

"Your grandmother planted these," Rowan says softly, touching a silver-petaled rose. "She believed beauty was as important as power. That a ruler who couldn't appreciate a sunset shouldn't be trusted with a kingdom."

They pause at a marble fountain, water dancing in the afternoon light. "The political world will try to consume all your time. Don't let it. Take moments like this. Remember why power matters - to protect beautiful things."

The garden seems almost magical, sunlight filtering through leaves in patterns that shift and dance. Birds sing complex melodies. The air smells of jasmine and earth and growing things.`,
	choices: [
		{
			id: 'appreciate-beauty',
			text: 'Take time to truly appreciate the beauty around you',
			next: 'first_political_meeting',
			effects: { wisdom: 4, empathy: 3, vitality: 2 },
			hiddenEffects: {
				rowan_bond: 16,
				beauty_appreciator: true,
				grandmother_values: true,
				mindful_presence: true
			},
			realLifeChallenge: {
				id: 'beauty_appreciation_challenge',
				type: 'meditation',
				title: 'Appreciating Beauty',
				description: 'Your character experiences the beauty of their ancestral gardens - you connect with beauty in your world',
				instructions: 'Spend 10 minutes truly experiencing something beautiful. Watch a sunset, observe plants or flowers, stargaze, appreciate art, listen to moving music, or simply sit with something that touches you aesthetically. Be fully present with the beauty, letting it affect you.',
				durationMinutes: 10,
				verificationMethod: 'honor',
				rewards: {
					stats: { wisdom: 3, empathy: 2, vitality: 2 },
					hiddenAttributes: { beauty_seeker: 1, aesthetic_appreciation: true },
					message: 'You return from experiencing beauty feeling more whole. Like your grandmother who planted gardens as acts of love, you\'ve chosen to appreciate the beautiful things in the world. This practice nourishes the soul and reminds us what we\'re protecting.'
				}
			}
		},
		{
			id: 'thank-rowan',
			text: 'Thank Rowan for sharing this wisdom',
			next: 'first_political_meeting',
			effects: { charisma: 3, wisdom: 2 },
			hiddenEffects: {
				rowan_bond: 14,
				grateful_heart: true
			}
		},
		{
			id: 'focus-politics',
			text: 'Appreciate it but return focus to political duties',
			next: 'first_political_meeting',
			effects: { wisdom: 2 },
			hiddenEffects: {
				rowan_bond: 10,
				duty_focused: true
			}
		}
	]
};

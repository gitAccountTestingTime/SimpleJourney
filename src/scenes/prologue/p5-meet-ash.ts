import { Scene } from '../../story-manager';

export const MeetAsh: Scene = {
	id: 'meet_ash',
	text: `You wake in a clean bed, bandaged and sore. A gruff voice speaks from the corner.

"You're lucky my company was passing through. That Shadow Beast would have killed you all." 

The speaker is a scarred warrior in their forties, short gray hair and kind eyes that have seen too much death. "Name's Ash. I run a mercenary company. We've been tracking Shadow Beast activity—it's getting worse."

They study you with interest. "You fought well. Or at least, you tried. More importantly, I saw your blood glow when that thing got close. That's not normal."

Ash leans forward. "I could use someone with your... potential. Good pay, proper training, see the kingdom. Or you can go back to your village and pretend this never happened. Your choice."`,
	choices: [
		{
			id: 'join-immediately',
			text: 'Accept the offer—time for adventure',
			next: 'mercenary_training',
			effects: { courage: 3, reputation: 5 },
			hiddenEffects: {
				ash_trust: 20,
				mercenary_life_chosen: true,
				ash_romance: 5
			}
		},
		{
			id: 'negotiate-terms',
			text: 'Negotiate the terms of employment',
			next: 'mercenary_training',
			effects: { wisdom: 3 },
			hiddenEffects: {
				ash_trust: 10,
				mercenary_life_chosen: true
			}
		},
		{
			id: 'ask-about-past',
			text: 'Ask about their past and the Shadow Beasts',
			next: 'mercenary_training',
			effects: { wisdom: 2, charisma: 2 },
			hiddenEffects: {
				ash_trust: 25,
				mercenary_life_chosen: true,
				ash_romance: 10
			}
		},
		{
			id: 'decline-stay-touch',
			text: 'Decline for now, but stay in touch',
			next: 'meet_rook',
			effects: { wisdom: 2 },
			hiddenEffects: {
				ash_trust: 5,
				mercenary_life_chosen: false,
				independent_path: true
			}
		}
	]
};

import { Scene } from '../../story-manager';

const ashIntroduction = `The speaker is a scarred warrior in their forties, short gray hair and kind eyes that have seen too much death. "Name's Ash. I run a mercenary company. We've been tracking Shadow Beast activity—it's getting worse."

They study you with interest.`;

const ashOffer = `Ash leans forward. "I could use someone with your... potential. Good pay, proper training, see the kingdom. Or you can go back to your village and pretend this never happened. Your choice."`;

export const MeetAsh: Scene = {
	id: 'meet_ash',
	text: `You wake in a clean bed, bandaged and sore. A gruff voice speaks from the corner.

"You're lucky my company was passing through. That Shadow Beast would have killed you all." 

${ashIntroduction} "You fought well. Or at least, you tried. More importantly, I saw your blood glow when that thing got close. That's not normal."

${ashOffer}`,
	textVariants: [
		{
			conditions: { hasFlags: ['shadow_beast_reaction:fought_bravely'] },
			text: `You wake in a clean bed, bandaged and sore. The battle is a blur of claws, shadows, and your own burning blood.

A gruff voice speaks from the corner. "Brave. Reckless. Impressive." 

${ashIntroduction} "You stood your ground against a Shadow Beast. Most veterans run. And that glow in your blood when you fought—I've never seen anything like it."

${ashOffer}`
		},
		{
			conditions: { hasFlags: ['shadow_beast_reaction:protective'] },
			text: `You wake in a clean bed, bandaged and sore. Your last memory is shielding the refugees' children, preparing for death that never came.

A gruff voice speaks with respect. "You protected them. All of them. Nearly died doing it." 

${ashIntroduction} "The way you put others first, even facing certain death... that's rare. And when your blood glowed, the beast actually hesitated. You've got something special."

${ashOffer}`
		},
		{
			conditions: { hasFlags: ['shadow_beast_reaction:pragmatic'] },
			text: `You wake in a clean bed, bandaged and sore. Survival instinct saved you—you fought smart, not brave.

A gruff voice sounds almost amused. "Smart fighter. You knew when to retreat, when to strike. Stayed alive." 

${ashIntroduction} "Your tactical sense is sound. But what's really interesting is how your blood reacted to that creature. That's the difference between surviving and winning."

${ashOffer}`
		},
		{
			conditions: { hasFlags: ['shadow_beast_reaction:curious'] },
			text: `You wake in a clean bed, bandaged and sore. Your mind races with questions about the creature—what it was, why your blood affected it.

A gruff voice sounds intrigued. "You tried to understand it. Most people just scream." 

${ashIntroduction} "That curiosity could get you killed... or make you extraordinarily valuable. Your blood reacted to that Shadow Beast in ways I've only read about in ancient texts."

${ashOffer}`
		}
	],
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

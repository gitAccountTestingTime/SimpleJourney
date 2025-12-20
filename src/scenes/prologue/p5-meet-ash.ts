import { Scene } from '../../story-manager';

const ashReveal = `"Name's Ash. I run a mercenary company, Inferno. 

We typically operate on the fringes of the kingdom, taking contracts others won't touch. Recently, we've been tracking Shadow Beast activity, which led us to this area. We'd been tracking your particular beast after hearing rumors of a village not far away that had been destroyed.

Those creatures are dangerous, unpredictable, and deadly. Not many survive an encounter. Yet here you are..."`;

const ashStudy = `She studies you with interest, as if she can almost see something beyond the villager you present as.`;

const ashIntroduction = 
`The speaker is a scarred warrior, perhaps in her forties, with short gray hair and kind eyes that have clearly seen too much death. She carries herself with the confidence of someone used to command, and has the armor and weapons to match.  This is no casual volunteer, but a seasoned mercenary captain.

${ashReveal}

${ashStudy}`;

const ashOffer = `Ash leans forward. "I could use someone with your... potential. I can offer you good pay, proper training, a chance to see the kingdom. An opportunity for something more. Or if you prefer, you can go back to your village. Pretend this never happened. Go back to your old life. The choice is yours."`;

export const MeetAsh: Scene = {
	id: 'meet_ash',
	text: '',
	textVariants: [
		{
			conditions: { hasFlags: ['shadow_beast_reaction:fought_bravely'] },
			text: `You wake in a clean bed, bandaged and sore. The battle is a blur of claws, shadows, and your own burning blood. You raise a hand to your head trying to recall the details, but very little is clear.  Very little, that is, except that you are somehow alive.

A gruff voice speaks from the corner. "Untrained. Reckless. and yet...brave. Almost impressive. And surprisingly effective." 

${ashIntroduction} "You stood your ground against a Shadow Beast. Even most veterans run when confronted with them alone. And that glow in your blood when you fought, well...I've never seen anything like it.

While you clearly have a lot to learn, you did well for someone with no training."

${ashOffer}`
		},
		{
			conditions: { hasFlags: ['shadow_beast_reaction:fought_desperately'] },
			text: `You wake in a clean bed, bandaged and sore. The battle is a blur of claws, shadows, and your own burning blood. You raise a hand to your head trying to recall the details, but very little is clear.  Very little, that is, except that you are somehow alive.

A gruff voice speaks from the corner. "Untrained. Reckless. and yet...brave, if nothing else." 

${ashIntroduction} "You stood your ground against a Shadow Beast. Even most veterans run when confronted with them alone. And that glow in your blood when you fought, well...I've never seen anything like it.

While you clearly have a lot to learn, you did well for someone with no training."

${ashOffer}`
		},
		{
			conditions: { hasFlags: ['shadow_beast_reaction:protective'] },
			text: `You wake in a clean bed, bandaged and sore. Your last memory is being forced back while shielding the refugees' children who were too scared to flee and were abandoned by the others. You recall preparing for death...a death that apparently never came.

A gruff voice speaks with respect. "You protected them. Almost all of them. And nearly died doing it." 

${ashIntroduction} "The way you put others first, even when faced with certain death... you're certainly a strange one. But then again, everyone in Inferno is a little 'strange' as well."

${ashOffer}`
		},
		{
			conditions: { hasFlags: ['shadow_beast_reaction:pragmatic'] },
			text: `You wake in a clean bed, bandaged and sore. Your Survival instinct saved you.

A gruff voice sounds almost amused. "A smart fighter knows when to retreat. Knows to stay alive. A dead warrior wins no fights." 

${ashIntroduction} "Your tactical sense is sound. But what's really interesting is how the creature almost seemed to hesitate when it came to you. That may be the difference between surviving...and someday winning."

${ashOffer}`
		},
		{
			conditions: { hasFlags: ['shadow_beast_reaction:curious'] },
			text: `You wake in a clean bed, bandaged and sore. Your mind races with questions about the creature...what it was, why your blood affected it. For now though, you are simply grateful to be alive.

A gruff voice sounds intrigued, bordering on laughter. "You were trying to... understand it? Talk to it? Communicate? Honestly, most people just scream. Whatever it was you were doing, you managed to buy time if nothing else. In this case, that likely saved your life, and the lives of others."

${ashIntroduction} "That curiosity of yours could easily get you killed... or make you extraordinarily valuable. Your blood reacted to that Shadow Beast in ways I've never heard of."

${ashOffer}`
		}
	],
	choices: [
		{
			id: 'join-immediately',
			text: 'Accept the offer without hesitation. This is exactly the type of opportunity you have been waiting for.',
			next: 'mercenary_training',
			effects: { courage: 2, reputation: 5 },
			hiddenEffects: {
				ash_trust: 20,
				ash_romance: 7,
				mercenary_life_chosen: true
			}
		},
		{
			id: 'negotiate-terms',
			text: 'Negotiate the terms of employment. It seems like a good opportunity, but you want to be sure this is the right fit.',
			next: 'mercenary_training',
			effects: { wisdom: 2, wealth: 50 },
			hiddenEffects: {
				ash_trust: 15,
				ash_romance: 5,
				mercenary_life_chosen: true
			}
		},
		{
			id: 'ask-about-past',
			text: 'Agree in exchange for information about Ash, Inferno, and the Shadow Beasts. Ash seems like someone who has much to teach, and you are in desperate need of knowledge.',
			next: 'mercenary_training',
			effects: { wisdom: 1, charisma: 1 },
			hiddenEffects: {
				ash_trust: 10,
				mercenary_life_chosen: true,
				ash_romance: 10
			}
		},
		{
			id: 'decline-stay-touch',
			text: 'Decline for now, but offer to stay in touch.  You want to forge your own path.',
			next: 'independent_adventuring',
			effects: { wisdom: 1 },
			hiddenEffects: {
				ash_trust: 5,
				mercenary_life_chosen: false,
				independent_path: true
			}
		}
	]
};

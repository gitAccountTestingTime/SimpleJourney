import { Scene } from '../../story-manager';

const capitalArrival = `The capital city of Valdris rises before you like a monument to contrasts. Towering spires and gleaming domes catch the afternoon sun, their gold and silver leaf work visible even from the slums where you find yourself. The grand palace dominates the skyline, a symbol of power and wealth that seems to mock the poverty spreading at its feet.`;

const slumsDescription = `The streets here are narrow and choked with refuse. Children dart between makeshift market stalls, their faces gaunt and eyes sharp with premature wisdom. The air carries the scent of desperatio; unwashed bodies, rotting vegetables, and the acrid smoke from cooking fires burning whatever can be found.

You've seen poverty before, but the sheer scale of it here in the capital is staggering. These people live in the shadow of unimaginable wealth... close enough to see and long for it, but far enough to never touch it.`;

const crowdedStreets = `The streets are packed with people; merchants hawking dubious wares, beggars calling out for coin, workers trudging home after long shifts. You navigate carefully, keeping your hand near your coin purse. Despite your caution, you feel the lightest brush against your side.`;

const catchingRook = `Instinct takes over. Your hand shoots out and catches a wrist, thin but wiry, attached to a young person who by appearance can't be more than twenty, but with the conditions they live under, it is impossible to be sure. They freeze for just a moment, then their expression shifts from alarm to something almost like admiration.

Mischievous brown eyes meet yours, unrepentant despite being caught red-handed with their fingers in your pocket. A crooked grin spreads across their face, revealing a chipped front tooth. They're dressed in layers of mismatched clothing, practical for concealing stolen goods, and their dark hair is cut short and messy.`;

const rookApology = `"Nice reflexes!" they say, making no attempt to pull away or make excuses. "Most marks never notice till it's too late, and by then I'm three streets away." They speak with the casual confidence of someone who's talked their way out of trouble before. "Name's Rook. Sorry about the whole... theft thing. Occupational hazard, you know how it is."

You don't release their wrist and respond, "Actually, I don't know how it is."

Rook shrugs, still grinning. "Fair enough. But hey, you caught me clean, which means you've got skills. And I've got skills too, just different ones."`;

const rookAssessment = `They tilt their head, studying you with the same intensity you've seen from traders evaluating merchandise, yet there's more to it than that. You can see them reading your stance, your gear, the calluses on your hands. Making calculations.

"You're not from around here," Rook says finally. It's not a question. "A true adventurer type then, I'd guess. Got that look about you...capable, but not city-trained, or at least not capital-trained. Regardless of your skills, you're going to get eaten alive in this place without a guide."`;

const rookProposal = `They lean in slightly, voice dropping to something more genuine beneath the street-smart bravado. "Look, I mean it when I say I know these streets better than anyone. Every shortcut, every safe house, every guard patrol route. I know which nobles are generous and which ones will have you arrested for breathing wrong. I know where the real opportunities are, the ones the city guard and merchant guilds keep to themselves."

Rook glances around, checking to see if anyone is paying attention to you both, then continues. "Here's my pitch: we could help each other out. You need a guide who knows how this city really works, someone who can navigate the places respectable folk won't go. I need someone who can handle themselves in a fight, someone to watch my back. Fair trade, yeah?"

There's a surprising earnestness beneath their casual pitch. Life on these streets is clearly hard, and dangerous. This isn't just opportunism; it's survival.`;

const getCapitalEncounter = (): string => {
	return `${capitalArrival}

${slumsDescription}

${crowdedStreets}

${catchingRook}

${rookApology}

${rookAssessment}

${rookProposal}`;
};

export const MeetRook: Scene = {
	id: 'meet_rook',
	get text() { return getCapitalEncounter(); },
	textVariants: [
		{
			conditions: { hasFlags: ['mercenary_life_chosen:true'] },
			get text() {
				return `${capitalArrival}

Six months with Inferno Company has taught you to be observant. Ash specifically warned about the capital's slum merchants and pickpockets during your last briefing. "They're professionals," she'd said. "Better than most soldiers at reading marks and exploiting distractions. Stay sharp."

${slumsDescription}

Your mind races with the tactical challenges everywhere you look. Too many blind corners, too many potential ambush points, civilian density that makes pursuit nearly impossible. This is undoubtedly a thief's paradise.

${crowdedStreets}

${catchingRook}

${rookApology}

Your grip remains firm, years of training making it nearly unbreakable without causing injury. Rook notices and their grin widens.

"Mercenary company gear," Rook observes, eyes flicking to the distinctive leather work on your bracers. "Inferno Company, if I'm not mistaken. Ash's crew. That's... interesting. What's a merc doing in the capital slums without their squad, especially from a group like that?"

${rookAssessment}

"I know these streets better than anyone," Rook continues, voice taking on a more professional tone. "And I know which jobs the companies won't touch; The ones that happen in shadows, the ones that don't make it into official contracts. Information like that? We both know it is worth more than gold to someone in your line of work."

${rookProposal}

There's a calculating edge to their pitch now, recognizing you as someone who understands the value of intelligence and connections. The streets have made them sharp, but your training has made you sharper. The question is whether their local expertise might be worth the risk.`;
			}
		},
		{
			conditions: { hasFlags: ['independent_path:true'] },
			get text() {
				return `${capitalArrival}

Six months of traveling alone has taught you to recognize certain patterns. The capital's slums feel almost familiar after all you've seen on your independent travels; the same desperation, the same struggle for survival, the same unspoken rules that govern life on the margins. You've seen it in every town and city across the kingdom. You've even come to realize that you'd seen it back in Thornshaven before you left, even if you didn't recognize it at the time.

${slumsDescription}

The difference here is the scale. In smaller settlements, poverty was contained, manageable. Here, it sprawls endlessly, a city within a city. The contrast between the gleaming "haves" and these desperate streets isn't just visible, it's obscene.

${crowdedStreets}

${catchingRook}

${rookApology}

You study them for a moment. There's something different about this one compared to some of the others you've seen running around. Their look is less desperation and more calculation, less fear than curiosity.

"Independent operator, aren't you?" Rook says, reading you with surprising accuracy. "I can tell. No company colors, no guild marks, but you move like someone who can handle themselves. Self-taught? Or maybe you had training but went your own way?"

${rookAssessment}

"I respect that," Rook continues, and their tone suggests genuine admiration rather than empty flattery. "The guilds and companies, they've got their rules, their hierarchies. Everything's about who you know and who you owe. People like us? We make our own way."

They release some of the tension in their caught wrist, testing if you'll loosen your grip. You don't.

"Look, I know these streets better than anyone. Every independent contractor, every unlicensed opportunity, every job that doesn't require signing your life away to some company or guild. Two independents working together? We could do well. You need someone who knows this city. I need someone who can fight. Simple math, really."

${rookProposal}

There's a kinship in their pitch that wasn't there before. Two people who've chosen to walk their own path, finding each other in a city that grinds outsiders down. The question is whether, to you, independence means always working alone or being smart enough to find the right allies when needed.`;
			}
		}
	],
	choices: [
		{
			id: 'turn-them-in',
			text: 'Turn them over to the authorities. Theft is still theft, no matter the circumstances.',
			next: 'capital_tournament',
			effects: { reputation: 3 },
			hiddenEffects: {
				rook_trust: -10,
				'underworld_connection:hostile': true
			}
		},
		{
			id: 'warning',
			text: 'Let them go with a stern warning. They\'re young, and everyone deserves a chance to change their path.',
			next: 'capital_tournament',
			effects: { wisdom: 2 },
			hiddenEffects: {
				rook_trust: 5,
				'underworld_connection:neutral': true
			}
		},
		{
			id: 'offer-help',
			text: 'Offer to help them find honest work. Their skills could be put to better use than picking pockets.',
			next: 'capital_tournament',
			effects: { charisma: 3 },
			hiddenEffects: {
				rook_trust: 10,
				rook_romance: 10,
				'underworld_connection:friendly': true,
				compassionate_actions: 3
			}
		},
		{
			id: 'recruit-scout',
			text: 'Recruit them as your scout. Their knowledge of the city could prove invaluable, and they clearly have skills.',
			next: 'capital_tournament',
			effects: { wisdom: 2, charisma: 2 },
			hiddenEffects: {
				rook_trust: 15,
				rook_romance: 10,
				'underworld_connection:allied': true
			}
		}
	]
};

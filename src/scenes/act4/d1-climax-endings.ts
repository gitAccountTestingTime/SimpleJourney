import { Scene } from '../../story-manager';

// Act 4 Climax - Sample Ending Structure
export const Act4Climax: Scene = {
	id: 'act4_climax',
	text: `All five fragments of the Crystal Heart lie before you. Your companions stand at your side - those who have stayed loyal through everything. The magical races watch, waiting to see if you can succeed where your ancestors failed.

General Blackwood makes his final move for power. The Shadowrealm threatens to break through completely. The kingdom teeters on the edge of chaos or renewal.

The fragments pulse with power, responding to your royal blood. To restore the Crystal Heart, you must pour your very essence into it - your magic, your will, your vision for the future.

Marcus speaks quietly: "This is it. Everything we've fought for comes down to this moment. What kind of kingdom will you create?"`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { vale_romance: 50 }
			},
			text: `The Crystal Heart fragments glow before you. Vale stands at your side, hand in yours.

"Whatever happens," Vale whispers, "I'm with you. To the end and beyond."

The ritual requires everything you are - your magic, your dreams, your very soul. But with Vale's love strengthening you, you feel ready to reshape the world.

"Let's build something beautiful," Vale says. "Together."`
		},
		{
			conditions: {
				hasHiddenAttributes: { independent_path_confirmed: true }
			},
			text: `The fragments glow, and your assembled companions - the strange, beautiful coalition you've built - wait with you. Humans, elves, dwarves, and more. Not bound by faction politics, but by genuine friendship and shared purpose.

Rowan grins. "This is what it was always meant to be. Unity by choice, not force."

You've rejected traditional power structures to build something new. Now comes the moment to prove it can work.`
		}
	],
	choices: [
		{
			id: 'restore-traditional',
			text: 'Restore the kingdom in its traditional form',
			next: 'ending_traditional_restoration',
			effects: { courage: 5 },
			hiddenEffects: {
				ending_choice: 'traditional',
				restored_monarchy: true
			}
		},
		{
			id: 'restore-reformed',
			text: 'Restore with democratic reforms integrated',
			next: 'ending_reformed_kingdom',
			effects: { wisdom: 5 },
			hiddenEffects: {
				ending_choice: 'reformed',
				constitutional_monarchy: true
			}
		},
		{
			id: 'new-order',
			text: 'Create an entirely new order - a council of equals',
			next: 'ending_new_order',
			effects: { wisdom: 6 },
			hiddenEffects: {
				ending_choice: 'new_order',
				revolutionary_change: true
			}
		},
		{
			id: 'abdicate',
			text: 'Restore the Crystal Heart but abdicate the throne',
			next: 'ending_abdication',
			effects: { wisdom: 5, courage: 4 },
			hiddenEffects: {
				ending_choice: 'abdicate',
				chose_freedom: true
			}
		},
		{
			id: 'share-power',
			text: 'Share the Crystal Heart\'s power among magical races',
			next: 'ending_shared_power',
			effects: { wisdom: 7, charisma: 5 },
			hiddenEffects: {
				ending_choice: 'shared',
				magical_coalition: true
			}
		}
	]
};

// Sample Ending - Traditional Restoration
export const EndingTraditionalRestoration: Scene = {
	id: 'ending_traditional_restoration',
	text: `Light erupts from the restored Crystal Heart. The barrier between worlds solidifies, Shadow Beasts retreating as their access closes. The kingdom is saved.

You are crowned in the ancient ceremony, every tradition honored. The Loyalists rejoice. Seraphine stands proudly at your side as your chief advisor. The magical races, seeing traditional order restored, cautiously resume old alliances.

Years later, the kingdom prospers under your benevolent rule. You've maintained stability while quietly modernizing from within. Your companions have found their places: some as advisors, some as free agents who visit when they can.

The story ends with you standing in the throne room, the weight of the crown familiar now, surrounded by those you trust. You've become the ruler your parents dreamed you would be - traditional, yet kind. Powerful, yet just.

**ACHIEVEMENT UNLOCKED: The True Heir**
**Story Complete: Traditional Restoration Path**`,
	choices: [
		{
			id: 'restart',
			text: 'Play again to explore other paths?',
			next: 'prologue_start'
		}
	]
};

// Sample Ending - Reformed Kingdom
export const EndingReformedKingdom: Scene = {
	id: 'ending_reformed_kingdom',
	text: `The Crystal Heart blazes with light as you infuse it with your vision of a new kingdom. The barrier restores, but changed - more flexible, allowing peaceful interaction with magical beings while still protecting against darkness.

You establish a constitutional monarchy. You retain the throne, but share power with an elected council. Sage helps draft the new constitution, tears of joy streaming down his face.

Years later, the kingdom thrives under this hybrid system. The magical races appreciate the progressive approach. Citizens have voices in their governance while still benefiting from the stability of royal leadership and magical protection.

Vale stands beside you - your partner in both rule and life. Together, you've built something your parents never imagined: a kingdom where tradition and progress dance together.

**ACHIEVEMENT UNLOCKED: The Progressive Monarch**
**Story Complete: Reformed Kingdom Path**`,
	choices: [
		{
			id: 'restart',
			text: 'Play again to explore other paths?',
			next: 'prologue_start'
		}
	]
};

// Sample Ending - Abdication
export const EndingAbdication: Scene = {
	id: 'ending_abdication',
	text: `You restore the Crystal Heart, saving the kingdom. But as the light fades, you remove the crown.

"I was born to save you," you tell the assembled crowd. "Not to rule you. Choose your own path forward. I've given you the chance."

The factions scramble to fill the power vacuum, but your companions help ensure a peaceful transition. Eventually, a coalition government forms - imperfect, but theirs.

You walk away from politics, finally free. With your chosen companion(s) at your side, you return to adventuring. The tales speak of the hero who saved the kingdom and asked for nothing in return - the ruler who gave up everything for freedom.

Rowan laughs as you disappear into the wilderness together. "I knew you'd never be happy in a castle."

You've saved the world. Now you get to live in it.

**ACHIEVEMENT UNLOCKED: The Free Spirit**
**Story Complete: Abdication Path**`,
	choices: [
		{
			id: 'restart',
			text: 'Play again to explore other paths?',
			next: 'prologue_start'
		}
	]
};

// Additional ending placeholders
export const EndingNewOrder: Scene = {
	id: 'ending_new_order',
	text: `[Revolutionary ending where you create an entirely new system]`,
	choices: [{ id: 'restart', text: 'Play again?', next: 'prologue_start' }]
};

export const EndingSharedPower: Scene = {
	id: 'ending_shared_power',
	text: `[Magical coalition ending where power is shared among races]`,
	choices: [{ id: 'restart', text: 'Play again?', next: 'prologue_start' }]
};

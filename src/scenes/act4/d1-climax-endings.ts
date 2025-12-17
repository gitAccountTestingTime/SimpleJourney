import { Scene } from '../../story-manager';

const fragmentsAssembled = `All five fragments of the Crystal Heart lie before you. Your companions stand at your side - those who have stayed loyal through everything. The magical races watch, waiting to see if you can succeed where your ancestors failed.`;

const finalThreat = `General Blackwood makes his final move for power. The Shadowrealm threatens to break through completely. The kingdom teeters on the edge of chaos or renewal.`;

const ritualRequirement = `The fragments pulse with power, responding to your royal blood. To restore the Crystal Heart, you must pour your very essence into it - your magic, your will, your vision for the future.`;

const marcusQuestion = `Marcus speaks quietly: "This is it. Everything we've fought for comes down to this moment. What kind of kingdom will you create?"`;

// Act 4 Climax - Sample Ending Structure
export const Act4Climax: Scene = {
	id: 'act4_climax',
	text: `${fragmentsAssembled}

${finalThreat}

${ritualRequirement}

${marcusQuestion}`,
	textVariants: [
		{
			conditions: { hasFlags: ['loyalist_path_confirmed:true', 'seraphine_becomes_advisor:true'] },
			text: `${fragmentsAssembled}

Seraphine stands at your right hand, your chief advisor and trusted ally. The Loyalist nobles behind you carry the weight of tradition and expectation.

${finalThreat}

Marcus nods approvingly. "You chose the path of tradition. Now prove that tradition can be wise, not just rigid."

${ritualRequirement}

"You carry your ancestors' legacy," Seraphine says quietly. "Honor them, but don't be bound by them."`
		},
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true', 'progressive_ruler:true'] },
			text: `${fragmentsAssembled}

Your coalition of reformers, commoners, and progressive nobles stands united behind you. This is the moment you've been building toward - proof that change can work.

${finalThreat}

Vale squeezes your hand. "We've fought for this. A kingdom that serves everyone, not just the powerful."

${ritualRequirement}

"Show them the future," Sage urges. "A kingdom built on wisdom and shared power, not just ancient bloodlines."`
		},
		{
			conditions: { hasFlags: ['military_alliance_confirmed:true'], hasHiddenAttributes: { kieran_loyalty: 60 } },
			text: `${fragmentsAssembled}

Kieran and the military stand ready, loyal to you personally more than any institution. You've earned their respect through action, not just birthright.

${finalThreat}

General Blackwood's betrayal stings, but Kieran's unwavering support steadies you. "We follow you," Kieran says firmly. "Not the crown. You."

${ritualRequirement}

${marcusQuestion}`
		},
		{
			conditions: { hasFlags: ['independent_path_confirmed:true', 'chosen_own_path:true'] },
			text: `The fragments glow, and your assembled companions - the strange, beautiful coalition you've built - wait with you. Humans, elves, dwarves, and more. Not bound by faction politics, but by genuine friendship and shared purpose.

Rowan grins. "This is what it was always meant to be. Unity by choice, not force."

You've rejected traditional power structures to build something new. Now comes the moment to prove it can work.`
		},
		{
			conditions: { hasFlags: ['magical_races_priority:true', 'respected_all_cultures:true'] },
			text: `${fragmentsAssembled}

The magical race representatives - Moonwhisper, the Dragon Matriarch, Corallia - stand with you as equals. You've earned their trust by seeing them as people, not tools.

${finalThreat}

Lyra places a hand on your shoulder. "You honored my people when others dismissed us. Whatever you build, we'll stand with you."

${ritualRequirement}

Thorne's voice rumbles: "Choose wisely, young one. Your choice affects not just humans, but all who dwell in this realm."`
		},
		{
			conditions: { hasHiddenAttributes: { vale_romance: 50 } },
			text: `The Crystal Heart fragments glow before you. Vale stands at your side, hand in yours.

"Whatever happens," Vale whispers, "I'm with you. To the end and beyond."

The ritual requires everything you are - your magic, your dreams, your very soul. But with Vale's love strengthening you, you feel ready to reshape the world.

"Let's build something beautiful," Vale says. "Together."`
		}
	],
	choices: [
		{
			id: 'restore-traditional',
			text: 'Restore the kingdom in its traditional form',
			next: 'ending_traditional_restoration',
			effects: { courage: 5 },
			hiddenEffects: {
				'ending_choice:traditional': true,
				restored_monarchy: true
			}
		},
		{
			id: 'restore-reformed',
			text: 'Restore with democratic reforms integrated',
			next: 'ending_reformed_kingdom',
			effects: { wisdom: 5 },
			hiddenEffects: {
				'ending_choice:reformed': true,
				constitutional_monarchy: true
			}
		},
		{
			id: 'new-order',
			text: 'Create an entirely new order - a council of equals',
			next: 'ending_new_order',
			effects: { wisdom: 6 },
			hiddenEffects: {
				'ending_choice:new_order': true,
				revolutionary_change: true
			}
		},
		{
			id: 'abdicate',
			text: 'Restore the Crystal Heart but abdicate the throne',
			next: 'ending_abdication',
			effects: { wisdom: 5, courage: 4 },
			hiddenEffects: {
				'ending_choice:abdicate': true,
				chose_freedom: true
			}
		},
		{
			id: 'share-power',
			text: 'Share the Crystal Heart\'s power among magical races',
			next: 'ending_shared_power',
			effects: { wisdom: 7, charisma: 5 },
			hiddenEffects: {
				'ending_choice:shared': true,
				magical_coalition: true
			}
		}
	]
};

const lightErupts = `Light erupts from the restored Crystal Heart. The barrier between worlds solidifies, Shadow Beasts retreating as their access closes. The kingdom is saved.`;

const ancientCoronation = `You are crowned in the ancient ceremony, every tradition honored. The Loyalists rejoice. Seraphine stands proudly at your side as your chief advisor. The magical races, seeing traditional order restored, cautiously resume old alliances.`;

const yearsLaterTraditional = `Years later, the kingdom prospers under your benevolent rule. You've maintained stability while quietly modernizing from within. Your companions have found their places: some as advisors, some as free agents who visit when they can.`;

const throneRoom = `The story ends with you standing in the throne room, the weight of the crown familiar now, surrounded by those you trust. You've become the ruler your parents dreamed you would be - traditional, yet kind. Powerful, yet just.`;

// Sample Ending - Traditional Restoration
export const EndingTraditionalRestoration: Scene = {
	id: 'ending_traditional_restoration',
	text: `${lightErupts}

${ancientCoronation}

${yearsLaterTraditional}

${throneRoom}

**ACHIEVEMENT UNLOCKED: The True Heir**
**Story Complete: Traditional Restoration Path**`,
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { seraphine_romance: 60 } },
			text: `${lightErupts}

${ancientCoronation}

Seraphine is not just your advisor but your consort - the love who stood by you through everything. Together, you rule with wisdom born of genuine partnership.

${yearsLaterTraditional}

On quiet evenings, Seraphine removes her political mask and is simply herself with you. "We did it," she whispers. "Built something good and lasting. Together."

**ACHIEVEMENT UNLOCKED: The True Heir & Heart's Crown**
**Story Complete: Traditional Restoration Path (Romance)"`
		},
		{
			conditions: { hasFlags: ['all_companions_loyal:true'], hasHiddenAttributes: { companion_bonds: 200 } },
			text: `${lightErupts}

${ancientCoronation}

But the traditions are warmed by genuine friendship. Rowan serves as your ranger captain. Kieran commands your guard. Lyra advises on magical matters. Finn crafts wonders. Each friend has found their place in your kingdom.

${yearsLaterTraditional}

Your companions gather weekly - not for politics, but for friendship. You've proven that tradition and genuine connection can coexist.

**ACHIEVEMENT UNLOCKED: The True Heir & Circle of Trust**
**Story Complete: Traditional Restoration Path (All Bonds)"`
		}
	],
	choices: [
		{
			id: 'restart',
			text: 'Play again to explore other paths?',
			next: 'prologue_start'
		}
	]
};

const heartBlazes = `The Crystal Heart blazes with light as you infuse it with your vision of a new kingdom. The barrier restores, but changed - more flexible, allowing peaceful interaction with magical beings while still protecting against darkness.`;

const constitutionalMonarchy = `You establish a constitutional monarchy. You retain the throne, but share power with an elected council. Sage helps draft the new constitution, tears of joy streaming down his face.`;

const yearsLaterReformed = `Years later, the kingdom thrives under this hybrid system. The magical races appreciate the progressive approach. Citizens have voices in their governance while still benefiting from the stability of royal leadership and magical protection.`;

const valePartnership = `Vale stands beside you - your partner in both rule and life. Together, you've built something your parents never imagined: a kingdom where tradition and progress dance together.`;

// Sample Ending - Reformed Kingdom
export const EndingReformedKingdom: Scene = {
	id: 'ending_reformed_kingdom',
	text: `${heartBlazes}

${constitutionalMonarchy}

${yearsLaterReformed}

${valePartnership}

**ACHIEVEMENT UNLOCKED: The Progressive Monarch**
**Story Complete: Reformed Kingdom Path**`,
	textVariants: [
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true', 'fought_for_democracy:true'], hasHiddenAttributes: { commoner_respect: 50 } },
			text: `${heartBlazes}

${constitutionalMonarchy}

The common people celebrate in the streets. You've given them what they fought for - voices, rights, dignity. The underground resistance that once might have opposed you now works within the system you created.

${yearsLaterReformed}

Elena, the resistance leader, now serves on the elected council. "You kept your promises," she says. "You actually changed things."

${valePartnership}

**ACHIEVEMENT UNLOCKED: The Progressive Monarch & Voice of the People**
**Story Complete: Reformed Kingdom Path (Democracy Champion)"`
		},
		{
			conditions: { hasHiddenAttributes: { vale_romance: 65 } },
			text: `${heartBlazes}

${constitutionalMonarchy}

Vale rules beside you as your equal partner. Together, you've created a kingdom that values both of you - the noble-born heir and the commoner spy who saw beyond class.

${yearsLaterReformed}

"We're living proof," Vale says, taking your hand before the assembled council. "That love doesn't care about bloodlines. That partnership matters more than pedigree."

Your union symbolizes everything the new kingdom represents.

**ACHIEVEMENT UNLOCKED: The Progressive Monarch & Love Across Lines**
**Story Complete: Reformed Kingdom Path (Vale Romance)"`
		}
	],
	choices: [
		{
			id: 'restart',
			text: 'Play again to explore other paths?',
			next: 'prologue_start'
		}
	]
};

const restoreAndLeave = `You restore the Crystal Heart, saving the kingdom. But as the light fades, you remove the crown.`;

const abdication = `"I was born to save you," you tell the assembled crowd. "Not to rule you. Choose your own path forward. I've given you the chance."`;

const peacefulTransition = `The factions scramble to fill the power vacuum, but your companions help ensure a peaceful transition. Eventually, a coalition government forms - imperfect, but theirs.`;

const finalFreedom = `You walk away from politics, finally free. With your chosen companion(s) at your side, you return to adventuring. The tales speak of the hero who saved the kingdom and asked for nothing in return - the ruler who gave up everything for freedom.`;

const rowanLaugh = `Rowan laughs as you disappear into the wilderness together. "I knew you'd never be happy in a castle."`;

const savedWorld = `You've saved the world. Now you get to live in it.`;

// Sample Ending - Abdication
export const EndingAbdication: Scene = {
	id: 'ending_abdication',
	text: `${restoreAndLeave}

${abdication}

${peacefulTransition}

${finalFreedom}

${rowanLaugh}

${savedWorld}

**ACHIEVEMENT UNLOCKED: The Free Spirit**
**Story Complete: Abdication Path**`,
	textVariants: [
		{
			conditions: { hasFlags: ['values_freedom:true', 'rejected_duty:true'], hasHiddenAttributes: { rowan_romance: 65 } },
			text: `${restoreAndLeave}

${abdication}

${peacefulTransition}

Rowan takes your hand as you walk away. "Finally," they say with fierce joy. "You're choosing yourself. Choosing us. Choosing life over duty."

${finalFreedom}

In the wilderness, you build a cabin together. You save villages, fight monsters, help people - but on your terms. Free. Together. Happy.

"This is what I always wanted," Rowan admits. "You, me, and the open road. No crowns. No chains."

**ACHIEVEMENT UNLOCKED: The Free Spirit & Wild Hearts**
**Story Complete: Abdication Path (Rowan Romance)"`
		},
		{
			conditions: { hasFlags: ['independent_path_confirmed:true'], hasHiddenAttributes: { all_fragments_obtained: true } },
			text: `${restoreAndLeave}

${abdication}

Your diverse group of companions - humans, elves, dwarves, fae - help create a truly democratic council. Without you claiming power, they're forced to work together as equals.

"You gave us what we needed," Moonwhisper says. "Not a ruler, but a chance to rule ourselves."

${finalFreedom}

You adventure with different companions on different days. Thorne flies you across mountain ranges. Marina explores ocean depths with you. You're a legend, but one without a throne.

${savedWorld}

**ACHIEVEMENT UNLOCKED: The Free Spirit & Legend of Choice**
**Story Complete: Abdication Path (Independent Hero)"`
		}
	],
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

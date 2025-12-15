import { Scene } from '../../story-manager';

const crystalTruth = `Whatever political path you've chosen, one truth remains: the Crystal Heart must be restored. Five fragments scattered across the realm, each in a different location, each guarded or claimed by different forces.`;

const marcusIntelligence = `Marcus spreads out intelligence reports. "The fragments are in:
- Moonwhisper Grove (held by the elves)
- Ironpeak Mountains (held by the dwarves)  
- Dragon's Spine (guarded by dragons)
- The Obsidian Wastes (corrupted by Shadow magic)
- Beneath the royal palace (hidden, but politically contested)"`;

const lyraWarning = `Lyra adds, "Each fragment has bonded with its guardian or location. They won't be simply given up. You must prove worthy - through trial, negotiation, or sometimes both."`;

const decisionImportance = `Your choice of first fragment to pursue will determine much of what follows.`;

// Crystal Hunt Beginning - Converging Point for All Paths
export const CrystalHuntStart: Scene = {
	id: 'crystal_hunt_start',
	text: `${crystalTruth}

${marcusIntelligence}

${lyraWarning}

${decisionImportance}`,
	textVariants: [
		{
			conditions: { hasFlags: ['loyalist_path_confirmed:true', 'seraphine_becomes_advisor:true'] },
			text: `${crystalTruth}

${marcusIntelligence}

Seraphine reviews the intelligence with practiced efficiency. "As Loyalist-backed heir, we have political advantage. The elves and dwarves may negotiate more readily. But the dragons respect only strength and wisdom, regardless of politics."

Lady Ashford adds, "I suggest starting with the palace fragment - securing your ancestral home sends a powerful message."

${lyraWarning}

${decisionImportance}`
		},
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true', 'sage_becomes_close_advisor:true'] },
			text: `${crystalTruth}

${marcusIntelligence}

Sage leans over the map, thoughtful. "The magical races are skeptical of monarchies. But they might respect a ruler who shares power with the people. Let's start with diplomatic missions - show them we're different."

Dane agrees. "Prove the new system works before claiming ancient artifacts."

${lyraWarning}

${decisionImportance}`
		},
		{
			conditions: { hasFlags: ['military_path_confirmed:true', 'kieran_conflicted:true'] },
			text: `${crystalTruth}

${marcusIntelligence}

General Blackwood scowls. "We should take them by force if necessary. The kingdom needs those fragments now, not after lengthy negotiations."

Kieran shifts uncomfortably. "Uncle, the magical races are powerful allies or dangerous enemies. Perhaps diplomacy first?"

The tension between their approaches is evident.

${lyraWarning}

${decisionImportance}`
		},
		{
			conditions: { hasFlags: ['independent_path_confirmed:true', 'companions_most_important:true'] },
			text: `${crystalTruth}

${marcusIntelligence}

Rowan grins. "No faction backing means the magical races might actually trust you. They're tired of human politics."

Lyra nods approvingly. "Start with my people in Moonwhisper Grove. I can introduce you properly. An independent heir seeking genuine alliance? That they'll respect."

Your independent path has opened doors the factions couldn't.

${decisionImportance}`
		},
		{
			conditions: { hasHiddenAttributes: { loyalist_path_confirmed: true } },
			text: `Seraphine reviews the intelligence. "As Loyalist-backed heir, we have some political advantage. The elves and dwarves may negotiate more readily. But the dragons respect only strength and wisdom, regardless of politics."

Lady Ashford adds, "I suggest starting with the palace fragment - securing your ancestral home sends a powerful message."`
		},
		{
			conditions: { hasHiddenAttributes: { reformist_path_confirmed: true } },
			text: `Sage suggests, "The magical races are skeptical of monarchies. But they might respect a ruler who shares power with the people. Let's start with diplomatic missions - show them we're different."

Dane agrees. "Prove the new system works before claiming ancient artifacts."`
		},
		{
			conditions: { hasHiddenAttributes: { independent_path_confirmed: true } },
			text: `Rowan grins. "No faction backing means the magical races might actually trust you. They're tired of human politics."

Lyra nods. "Start with my people in Moonwhisper Grove. I can introduce you properly. An independent heir seeking genuine alliance? That they'll respect."`
		}
	],
	choices: [
		{
			id: 'prepare-first',
			text: 'Prepare thoroughly before starting - visit the merchant',
			next: 'crystal_quest_merchant',
			effects: { wisdom: 3 },
			hiddenEffects: {
				thorough_preparation: true,
				merchant_consultation: true
			}
		},
		{
			id: 'elven',
			text: 'Seek the Moonwhisper Grove fragment first',
			next: 'elven_fragment_quest',
			effects: { wisdom: 3 },
			hiddenEffects: {
				first_fragment_choice: 'elven',
				lyra_respect: 10,
				diplomatic_approach: true
			}
		},
		{
			id: 'dwarven',
			text: 'Journey to Ironpeak Mountains for the dwarven fragment',
			next: 'dwarven_fragment_quest',
			effects: { courage: 3 },
			hiddenEffects: {
				first_fragment_choice: 'dwarven',
				pragmatic_approach: true
			}
		},
		{
			id: 'dragon',
			text: 'Challenge the Dragon Spine fragment trials',
			next: 'dragon_fragment_quest',
			effects: { courage: 5 },
			hiddenEffects: {
				first_fragment_choice: 'dragon',
				bold_approach: true,
				thorne_respect: 10
			}
		},
		{
			id: 'palace',
			text: 'Secure the palace fragment and your ancestral home',
			next: 'palace_fragment_quest',
			effects: { wisdom: 2, courage: 2 },
			hiddenEffects: {
				first_fragment_choice: 'palace',
				political_approach: true,
				loyalist_rep: 10
			}
		},
		{
			id: 'prepare-training',
			text: 'First, undergo intensive combat training with Kieran',
			next: 'warrior_drills_training',
			effects: { wisdom: 2 },
			hiddenEffects: {
				preparation_focused: true,
				strategic_thinking: true
			}
		}
	]
};

// Placeholder scenes for fragment quests
export const ElvenFragmentQuest: Scene = {
	id: 'elven_fragment_quest',
	text: `The elves of Moonwhisper Grove test you with trials of wisdom, nature magic, and cultural understanding. Lyra watches carefully, gauging whether you truly respect her people or merely seek to use them.

[This would be expanded into a full quest arc with multiple scenes]`,
	choices: [
		{
			id: 'continue',
			text: 'Continue the elven trials...',
			next: 'companion_personal_quests',
			effects: { wisdom: 5 },
			hiddenEffects: {
				elven_fragment_obtained: true,
				lyra_respect: 25
			}
		}
	]
};

export const DwarvenFragmentQuest: Scene = {
	id: 'dwarven_fragment_quest',
	text: `The journey to Ironpeak Mountains is arduous but beautiful. Finn leads the way, pride evident in his bearing as he returns home.

Seraphine catches up to you at camp. "The dwarves value hospitality above almost all else," she explains. "Food is sacred to them - how they show respect and build trust. The delegation we're meeting will be assessing our sincerity."

She hesitates. "We could prepare a diplomatic feast before arriving. Show them we understand their culture and care enough to honor it properly. Or we can rely on formal political negotiations when we arrive."

Finn adds, "My people respect those who understand the value of sharing a meal. Actions speak louder than treaties."`,
	choices: [
		{
			id: 'prepare-feast',
			text: 'Prepare a diplomatic feast to honor dwarven customs',
			next: 'diplomatic_feast_prep',
			effects: { wisdom: 4, charisma: 3 },
			hiddenEffects: {
				cultural_respect: true,
				seraphine_approves: true,
				finn_impressed: true
			}
		},
		{
			id: 'proceed-directly',
			text: 'Proceed directly to Ironpeak for formal negotiations',
			next: 'ironpeak_negotiation',
			effects: { courage: 3 },
			hiddenEffects: {
				direct_approach: true,
				finn_friendship: 15
			}
		}
	]
};

export const DragonFragmentQuest: Scene = {
	id: 'dragon_fragment_quest',
	text: `Thorne Drake's trials are legendary - combat, riddles, and tests of character. Dragons respect only those who prove themselves equal in both strength and wisdom.

[This would be expanded into a full quest arc with multiple scenes]`,
	choices: [
		{
			id: 'continue',
			text: 'Continue the dragon trials...',
			next: 'companion_personal_quests',
			effects: { courage: 6, wisdom: 4 },
			hiddenEffects: {
				dragon_fragment_obtained: true,
				thorne_respect: 30
			}
		}
	]
};

export const PalaceFragmentQuest: Scene = {
	id: 'palace_fragment_quest',
	text: `The palace fragment lies beneath your ancestral home, but claiming it means navigating political intrigue, ancient traps, and confronting the ghosts of your family's past.

[This would be expanded into a full quest arc with multiple scenes]`,
	choices: [
		{
			id: 'continue',
			text: 'Continue the palace quest...',
			next: 'companion_personal_quests',
			effects: { wisdom: 5 },
			hiddenEffects: {
				palace_fragment_obtained: true,
				family_legacy_honored: true
			}
		}
	]
};

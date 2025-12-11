import { Scene } from '../../story-manager';

// Crystal Hunt Beginning - Converging Point for All Paths
export const CrystalHuntStart: Scene = {
	id: 'crystal_hunt_start',
	text: `Whatever political path you've chosen, one truth remains: the Crystal Heart must be restored. Five fragments scattered across the realm, each in a different location, each guarded or claimed by different forces.

Marcus spreads out intelligence reports. "The fragments are in:
- Moonwhisper Grove (held by the elves)
- Ironpeak Mountains (held by the dwarves)  
- Dragon's Spine (guarded by dragons)
- The Obsidian Wastes (corrupted by Shadow magic)
- Beneath the royal palace (hidden, but politically contested)"

Lyra adds, "Each fragment has bonded with its guardian or location. They won't be simply given up. You must prove worthy - through trial, negotiation, or sometimes both."

Your choice of first fragment to pursue will determine much of what follows.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { loyalist_path_confirmed: true }
			},
			text: `Seraphine reviews the intelligence. "As Loyalist-backed heir, we have some political advantage. The elves and dwarves may negotiate more readily. But the dragons respect only strength and wisdom, regardless of politics."

Lady Ashford adds, "I suggest starting with the palace fragment - securing your ancestral home sends a powerful message."`
		},
		{
			conditions: {
				hasHiddenAttributes: { reformist_path_confirmed: true }
			},
			text: `Sage suggests, "The magical races are skeptical of monarchies. But they might respect a ruler who shares power with the people. Let's start with diplomatic missions - show them we're different."

Dane agrees. "Prove the new system works before claiming ancient artifacts."`
		},
		{
			conditions: {
				hasHiddenAttributes: { independent_path_confirmed: true }
			},
			text: `Rowan grins. "No faction backing means the magical races might actually trust you. They're tired of human politics."

Lyra nods. "Start with my people in Moonwhisper Grove. I can introduce you properly. An independent heir seeking genuine alliance? That they'll respect."`
		}
	],
	choices: [
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
	text: `The dwarves respect strength and craftsmanship. Their trials test your mettle in combat, your appreciation for fine work, and your willingness to bargain fairly.

[This would be expanded into a full quest arc with multiple scenes]`,
	choices: [
		{
			id: 'continue',
			text: 'Continue the dwarven trials...',
			next: 'companion_personal_quests',
			effects: { courage: 5 },
			hiddenEffects: {
				dwarven_fragment_obtained: true,
				finn_friendship: 25
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

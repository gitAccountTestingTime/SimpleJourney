import { Scene } from '../../story-manager';

// Side Quest Scenes - Optional enrichment content

const hiddenPassage = `Exploring the depths of Silverwood Manor, you discover a hidden passage behind your ancestors' portrait. The air grows cold as you descend ancient stone steps lit by phantom torches.`;

const sealedChamber = `At the bottom, you find a sealed chamber. Inside, ancestral artifacts pulse with dormant magic - crowns, swords, scrolls, and a mirror that shows not your reflection but shadowy figures from the past.`;

const ghostlyVoice = `A ghostly voice echoes: "Heir of Silverwood, you stand where your ancestors stored their greatest treasures and darkest secrets. Each artifact holds power, but also burden. Choose wisely what you claim."`;

const warningChoice = `The artifacts before you could grant significant advantages, but touching them might awaken things best left sleeping.`;

export const ManorMysteries: Scene = {
	id: 'manor_mysteries',
	text: `${hiddenPassage}

${sealedChamber}

${ghostlyVoice}

${warningChoice}`,
	textVariants: [
		{
			conditions: { hasFlags: ['ancient_tome_researched:true', 'values_history:true'] },
			text: `${hiddenPassage}

${sealedChamber}

You recognize some of these artifacts from your historical research. "The Crown of Command - Queen Elara used it to unite the warring houses. The Blessed Sword - King Aldric wielded it in the First War."

${ghostlyVoice}

"You know our history," the voice sounds approving. "You've sought to understand those who came before. That wisdom will guide your choice."

${warningChoice}`
		},
		{
			conditions: { hasHiddenAttributes: { wisdom: 25 } },
			text: `${hiddenPassage}

${sealedChamber}

${ghostlyVoice}

Your wisdom lets you sense the truth - these artifacts carry both power and curse. Your ancestors sealed them not just to preserve them, but to contain them.

"Each power came at great cost," the voice admits. "We paid prices you may not wish to pay. Choose knowing that all power has consequences."`
		}
	],
	choices: [
		{
			id: 'crown-of-command',
			text: 'Take the ancient crown - gain authority over others',
			next: 'tournament_entry',
			effects: { charisma: 5, courage: 3 },
			hiddenEffects: {
				ancient_crown_claimed: true,
				command_power: true,
				ancestors_blessing: true,
				corruption_risk: 1
			}
		},
		{
			id: 'sword-of-light',
			text: 'Take the blessed sword - enhanced combat ability',
			next: 'tournament_entry',
			effects: { courage: 6 },
			hiddenEffects: {
				blessed_sword_claimed: true,
				combat_enhanced: true,
				shadow_beast_bane: true
			}
		},
		{
			id: 'tome-of-knowledge',
			text: 'Take the ancient tome - unlock forgotten magic',
			next: 'tournament_entry',
			effects: { wisdom: 7 },
			hiddenEffects: {
				ancient_tome_claimed: true,
				forgotten_magic_learned: true,
				ancestors_knowledge: true
			}
		},
		{
			id: 'leave-sealed',
			text: 'Leave everything sealed - some powers are too dangerous',
			next: 'tournament_entry',
			effects: { wisdom: 5 },
			hiddenEffects: {
				respected_boundaries: true,
				wise_restraint: true,
				manor_still_sealed: true
			}
		}
	]
};

const tournamentNews = `Word spreads of an underground fighting tournament held in the common quarter - a place where anyone can prove their worth, noble or commoner. The prize is significant gold and the respect of the city's warriors.`;

const rowanWarning = `Rowan warns against it: "It's dangerous. No rules, no safety. People get hurt badly."`;

const kieranConflict = `Kieran is conflicted: "The tournament builds reputation with fighters and common folk. But if you're injured, you'd be vulnerable to your enemies."`;

const opportunityRisk = `The tournament represents both opportunity and risk - a chance to prove yourself to the people, but also expose yourself to danger.`;

export const TournamentEntry: Scene = {
	id: 'tournament_entry',
	text: `${tournamentNews}

${rowanWarning}

${kieranConflict}

${opportunityRisk}`,
	textVariants: [
		{
			conditions: { hasFlags: ['helped_commoners:true', 'commoner_respect:20'] },
			text: `${tournamentNews}

Word reaches you differently - common folk you've helped are excited. "The heir might actually fight alongside us! Not above us, with us!"

${rowanWarning}

${kieranConflict}

"The people already respect you," Kieran adds. "Entering this tournament could cement that bond. They'd see you're not just another noble who views them as beneath you."`
		},
		{
			conditions: { hasHiddenAttributes: { combat_capable: true } },
			text: `You've proven yourself in combat before - against Shadow Beasts, assassins, and training opponents. The tournament shouldn't be beyond your abilities.

Rowan notices your confidence and sighs. "You're going to do it anyway, aren't you? Fine. At least let me be in the crowd, ready to intervene if things go wrong."

Kieran nods approvingly. "Your combat skills have improved significantly. Just don't underestimate your opponents - desperation makes people dangerous."`
		}
	],
	choices: [
		{
			id: 'enter-openly',
			text: 'Enter openly as the heir - make statement of strength',
			next: 'merchant_plight',
			effects: { courage: 6, charisma: 4 },
			hiddenEffects: {
				tournament_champion: true,
				commoner_respect: 30,
				warrior_reputation: true,
				bold_heir: true
			}
		},
		{
			id: 'enter-disguised',
			text: 'Enter disguised - prove worth without title',
			next: 'merchant_plight',
			effects: { courage: 5, wisdom: 4 },
			hiddenEffects: {
				tournament_champion: true,
				commoner_respect: 35,
				earned_respect: true,
				humble_strength: true
			}
		},
		{
			id: 'sponsor-instead',
			text: 'Sponsor the tournament - gain favor without personal risk',
			next: 'merchant_plight',
			effects: { charisma: 5, wisdom: 3 },
			hiddenEffects: {
				tournament_sponsor: true,
				commoner_respect: 20,
				generous_patron: true
			}
		},
		{
			id: 'decline',
			text: 'Decline - focus on more important matters',
			next: 'merchant_plight',
			effects: { wisdom: 4 },
			hiddenEffects: {
				tournament_declined: true,
				priorities_clear: true
			}
		}
	]
};

const merchantDesperation = `A prominent merchant seeks your audience in desperation. Her trading company has been systematically sabotaged - shipments stolen, warehouses burned, workers intimidated. She's on the verge of bankruptcy.`;

const plea = `"Your Highness," she pleads, "I've served this kingdom faithfully for thirty years. But someone powerful is destroying me, and the city guard won't investigate." She produces evidence - a noble house's seal on threatening letters.`;

const investigation = `Investigation reveals House Blackthorn is behind the sabotage, wanting to eliminate competition and seize the merchant routes. Confronting them directly would start a conflict with a powerful noble family. Ignoring it means an innocent businesswoman loses everything.`;

const advisorViews = `Seraphine advises: "Politics requires careful maneuvering. We need leverage, not confrontation."

Finn offers: "Or we could just break into their warehouses and recover the stolen goods. Direct action."`;

export const MerchantPlight: Scene = {
	id: 'merchant_plight',
	text: `${merchantDesperation}

${plea}

${investigation}

${advisorViews}`,
	textVariants: [
		{
			conditions: { hasFlags: ['stands_against_corruption:true', 'justice_focused:true'] },
			text: `${merchantDesperation}

You recognize this pattern - you've fought corruption before, stood up for those exploited by the powerful.

${plea}

Her eyes plead not just for help, but for justice. "I heard you actually care about fairness. That you don't let nobles abuse their power. Was I wrong to hope?"

${investigation}

${advisorViews}

Rowan adds quietly: "This is exactly the kind of noble exploitation that destroyed my village. If you let it stand, what were all your promises worth?"`
		},
		{
			conditions: { hasHiddenAttributes: { compassion_for_people: 20 } },
			text: `${merchantDesperation}

You can see her desperation isn't just about money - it's about her life's work, her employees' livelihoods, her sense of dignity.

${plea}

"I have forty workers depending on me," she adds, voice breaking. "If I fail, they lose everything. Their families starve."

${investigation}

The compassion you've shown throughout your journey makes this choice clear - you can't let innocent people suffer for noble greed.

${advisorViews}`
		}
	],
	choices: [
		{
			id: 'public-justice',
			text: 'Publicly expose House Blackthorn - dramatic but risky',
			next: 'haunted_tower',
			effects: { courage: 6, charisma: 4 },
			hiddenEffects: {
				merchant_saved: true,
				blackthorn_enemy: true,
				justice_reputation: 25,
				noble_faction_rep: -15,
				commoner_respect: 30
			}
		},
		{
			id: 'private-pressure',
			text: 'Apply private diplomatic pressure - quieter resolution',
			next: 'haunted_tower',
			effects: { wisdom: 6, charisma: 4 },
			hiddenEffects: {
				merchant_saved: true,
				blackthorn_neutral: true,
				diplomatic_skill_shown: true,
				seraphine_respect: 15
			}
		},
		{
			id: 'direct-action',
			text: 'Lead recovery operation personally - adventurous',
			next: 'haunted_tower',
			effects: { courage: 7 },
			hiddenEffects: {
				merchant_saved: true,
				blackthorn_enemy: true,
				goods_recovered: true,
				action_hero: true,
				finn_respect: 15,
				rowan_bond: 15
			}
		},
		{
			id: 'compensate',
			text: 'Compensate merchant from treasury - pragmatic',
			next: 'haunted_tower',
			effects: { charisma: 4 },
			hiddenEffects: {
				merchant_compensated: true,
				blackthorn_neutral: true,
				problem_avoided: true,
				treasury_depleted: true
			}
		}
	]
};

const abandonedTower = `On the kingdom's edge stands an ancient tower that's been abandoned for decades. Locals claim it's haunted - people hear screaming at night, see lights in windows, and those who investigate never return.`;

const lyraSenses = `Lyra senses powerful magic from the tower. "This isn't simple haunting. There's active magical energy, possibly a rift or trapped entity."`;

const investigationOptions = `Your investigation options include:
- Personal exploration (dangerous but direct)
- Magical research (safer but time-consuming)
- Military quarantine (pragmatic but leaves problem unsolved)
- Seeking guidance from magical races

The tower's mystery could hold ancient magic, dangerous threats, or both.`;

export const HauntedTower: Scene = {
	id: 'haunted_tower',
	text: `${abandonedTower}

${lyraSenses}

${investigationOptions}`,
	textVariants: [
		{
			conditions: { hasFlags: ['magical_sensitivity:true', 'respects_spirits:true'] },
			text: `${abandonedTower}

You can feel the magic from here - not malevolent, but desperate. Anguished.

${lyraSenses}

"I sense something else," you add. "Not malice. Pain. Loneliness. Like something's been imprisoned there, crying out."

Lyra looks at you with new respect. "Your magical sensitivity has grown. You're right - this feels like a prison, not a threat."

${investigationOptions}`
		},
		{
			conditions: { hasHiddenAttributes: { spirit_magic_learned: true } },
			text: `With your spirit magic training, you can sense what Lyra cannot - there are indeed spirits in that tower, but they're not evil. They're crying for help.

"Someone trapped spirits there," you realize. "They're suffering, have been for decades. This isn't a haunting - it's a prison."`
		}
	],
	choices: [
		{
			id: 'explore-personally',
			text: 'Explore the tower with companions',
			next: 'underground_network',
			effects: { courage: 7, wisdom: 3 },
			hiddenEffects: {
				tower_explored: true,
				spirits_freed: true,
				ancient_magic_discovered: true,
				lyra_respect: 15
			}
		},
		{
			id: 'magical-research',
			text: 'Research thoroughly before acting',
			next: 'underground_network',
			effects: { wisdom: 7 },
			hiddenEffects: {
				tower_explored: true,
				safe_approach: true,
				knowledge_gained: true,
				sage_affection: 15
			}
		},
		{
			id: 'free-spirits',
			text: 'Use spirit magic to free trapped souls (requires spirit magic)',
			next: 'underground_network',
			effects: { wisdom: 8, charisma: 5 },
			hiddenEffects: {
				tower_explored: true,
				spirits_freed: true,
				spirits_grateful: true,
				spirit_allies_gained: true,
				compassionate_magic: true
			}
		},
		{
			id: 'quarantine',
			text: 'Quarantine tower - deal with later',
			next: 'underground_network',
			effects: { wisdom: 3 },
			hiddenEffects: {
				tower_quarantined: true,
				problem_delayed: true,
				pragmatic_choice: true
			}
		}
	]
};

export const UndergroundNetwork: Scene = {
	id: 'underground_network',
	text: `You discover evidence of an underground resistance movement operating in the capital. They're not openly hostile, but they're organizing commoners, spreading information, and preparing for potential conflict.

Shadow brings you to meet their leader - a charismatic woman named Elena who lost family to noble exploitation.

"We're not your enemy," Elena says carefully. "But we're tired of waiting for rulers to care about common people. We're building our own power structure, our own protection network." She eyes you assessingly. "Question is - are you the type of ruler who'll see us as threat, or as allies?"

The underground network could become powerful support or dangerous opposition, depending on your response.`,
	choices: [
		{
			id: 'embrace-allies',
			text: 'Embrace them as allies - integrate their concerns',
			next: 'sacred_grove',
			effects: { charisma: 7, wisdom: 5 },
			hiddenEffects: {
				underground_alliance: true,
				commoner_respect: 40,
				reformist_faction_rep: 30,
				revolutionary_support: true,
				shadow_respect: 20
			}
		},
		{
			id: 'legitimize',
			text: 'Legitimize them - official citizen council',
			next: 'sacred_grove',
			effects: { wisdom: 7, charisma: 5 },
			hiddenEffects: {
				underground_legitimized: true,
				commoner_respect: 45,
				reformist_faction_rep: 35,
				democratic_reform: true,
				revolutionary_idea: true
			}
		},
		{
			id: 'monitor',
			text: 'Monitor them but stay neutral',
			next: 'sacred_grove',
			effects: { wisdom: 4 },
			hiddenEffects: {
				underground_neutral: true,
				commoner_respect: 10,
				cautious_approach: true
			}
		},
		{
			id: 'suppress',
			text: 'Suppress them - maintain order',
			next: 'sacred_grove',
			effects: { courage: 4 },
			hiddenEffects: {
				underground_suppressed: true,
				commoner_respect: -30,
				military_faction_rep: 20,
				authoritarian_action: true,
				resistance_angry: true
			}
		}
	]
};

export const SacredGrove: Scene = {
	id: 'sacred_grove',
	text: `Deep in ancient forest stands a grove sacred to druids and nature spirits. Recently, it's been corrupted - trees dying, animals fleeing, magic turning dark. The druids are desperate for help.

Lyra and Rowan both sense the corruption. "Shadow Beast taint," Lyra says grimly. "A rift must have opened nearby."

The elderly druid elder explains: "This grove has protected the kingdom for millennia. If it falls, the natural balance tips toward Shadow. But cleansing it requires immense magical power and personal sacrifice."

Cleansing options include:
- Blood magic ritual (powerful but personally draining)
- Collaborative race magic (requires allies from all magical races)
- Seal the rift (stops spread but doesn't heal damage)
- Natural regeneration (slow but no risk)`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { all_races_united: true }
			},
			text: `With representatives of all five magical races united, you have unprecedented power available. The elder's eyes widen with hope.

"If elves, dwarves, dragons, fae, and merfolk work together... it might be possible to not just cleanse the grove, but transform it. Make it stronger than ever, a symbol of unity."

This could be a moment of legendary significance - the magical races cooperating on a scale not seen in centuries.`
		}
	],
	choices: [
		{
			id: 'blood-ritual',
			text: 'Perform blood magic cleansing - powerful but costly',
			next: 'shipwreck_discovery',
			effects: { courage: 7, wisdom: 5 },
			hiddenEffects: {
				grove_cleansed: true,
				blood_magic_mastery: true,
				personal_sacrifice_made: true,
				druid_alliance: true,
				lyra_respect: 20
			}
		},
		{
			id: 'united-magic',
			text: 'United magical races cleansing (requires all race alliances)',
			next: 'shipwreck_discovery',
			effects: { wisdom: 8, charisma: 7 },
			hiddenEffects: {
				grove_transformed: true,
				unity_monument_created: true,
				legendary_cooperation: true,
				all_races_bonded: true,
				historical_moment: true
			}
		},
		{
			id: 'seal-rift',
			text: 'Seal the rift - pragmatic solution',
			next: 'shipwreck_discovery',
			effects: { wisdom: 5 },
			hiddenEffects: {
				grove_stabilized: true,
				rift_sealed: true,
				practical_approach: true
			}
		},
		{
			id: 'natural-healing',
			text: 'Support natural regeneration - patient approach',
			next: 'shipwreck_discovery',
			effects: { wisdom: 6 },
			hiddenEffects: {
				grove_recovering: true,
				nature_respected: true,
				rowan_bond: 20,
				patient_wisdom: true
			}
		}
	]
};

export const ShipwreckDiscovery: Scene = {
	id: 'shipwreck_discovery',
	text: `Marina reports discovery of an ancient shipwreck in deep waters - a vessel from the kingdom's founding era. The merfolk are excited but also concerned.

"The ship contains artifacts from when humans and merfolk were first allies," Marina explains. "But it also contains weapons designed to kill sea creatures. The cultural significance is complicated."

Investigating reveals the ship was commanded by Admiral Silverwood - your ancestor - during the First Alliance. His journals detail the complex early relationship between surface and sea folk, including both cooperation and conflict.

Recovering artifacts could provide historical legitimacy for human-merfolk alliance, but the weapons are a painful reminder of past betrayals.`,
	choices: [
		{
			id: 'joint-recovery',
			text: 'Joint human-merfolk recovery expedition',
			next: 'border_skirmish',
			effects: { charisma: 7, wisdom: 5 },
			hiddenEffects: {
				shipwreck_recovered: true,
				merfolk_faction_rep: 30,
				historical_artifacts_gained: true,
				marina_friendship: 25,
				alliance_strengthened: true
			}
		},
		{
			id: 'weapons-destroyed',
			text: 'Recover artifacts but destroy the weapons publicly',
			next: 'border_skirmish',
			effects: { charisma: 8, wisdom: 4 },
			hiddenEffects: {
				shipwreck_recovered: true,
				weapons_destroyed: true,
				merfolk_faction_rep: 40,
				symbolic_gesture: true,
				marina_romance: 25
			}
		},
		{
			id: 'museum',
			text: 'Create joint museum for full historical truth',
			next: 'border_skirmish',
			effects: { wisdom: 8, charisma: 6 },
			hiddenEffects: {
				shipwreck_recovered: true,
				historical_museum_created: true,
				truth_honored: true,
				merfolk_faction_rep: 35,
				educational_legacy: true
			}
		},
		{
			id: 'leave-sealed',
			text: 'Leave shipwreck sealed - respect the past',
			next: 'border_skirmish',
			effects: { wisdom: 5 },
			hiddenEffects: {
				shipwreck_sealed: true,
				past_respected: true,
				merfolk_neutral: true
			}
		}
	]
};

export const BorderSkirmish: Scene = {
	id: 'border_skirmish',
	text: `Urgent news arrives - Shadow Beasts are massing at the northern border in unprecedented numbers. A major attack seems imminent. The border garrison requests immediate reinforcements.

Military advisors present options:
- Personal leadership at the front (inspirational but dangerous)
- Send military reinforcements (effective but costly)
- Magical barrier enhancement (innovative but untested)
- Diplomatic contact with Shadow Realm (controversial but could prevent war)

This could be a prelude to the final confrontation, or an opportunity to prevent massive casualties through clever thinking.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { sage_library: true }
			},
			text: `Sage's research about the Shadowrealm being corrupted rather than evil suddenly feels very relevant. What if this massing isn't for attack, but migration? What if they're fleeing something worse?

"We should try to communicate," Sage urges. "If they're suffering from corruption, maybe we can help. Maybe we don't have to fight."`
		}
	],
	choices: [
		{
			id: 'lead-personally',
			text: 'Lead defense personally - inspire troops',
			next: 'climax_preparation',
			effects: { courage: 8, charisma: 6 },
			hiddenEffects: {
				border_secured: true,
				military_hero: true,
				troops_inspired: true,
				kieran_loyalty: 25,
				rowan_bond: 25
			}
		},
		{
			id: 'magical-barrier',
			text: 'Enhance barrier with Crystal Heart power',
			next: 'climax_preparation',
			effects: { wisdom: 8 },
			hiddenEffects: {
				border_secured: true,
				barrier_enhanced: true,
				magical_solution: true,
				lyra_respect: 25
			}
		},
		{
			id: 'attempt-diplomacy',
			text: 'Attempt diplomatic contact with Shadow Realm (requires Sage research)',
			next: 'climax_preparation',
			effects: { wisdom: 9, courage: 7 },
			hiddenEffects: {
				shadowrealm_contacted: true,
				peace_attempted: true,
				revolutionary_diplomacy: true,
				sage_affection: 30,
				potential_peace_path: true
			}
		},
		{
			id: 'combined-defense',
			text: 'Coordinate all allies - humans and magical races together',
			next: 'climax_preparation',
			effects: { wisdom: 8, charisma: 7 },
			hiddenEffects: {
				border_secured: true,
				unity_demonstrated: true,
				all_races_fighting_together: true,
				legendary_defense: true
			}
		}
	]
};

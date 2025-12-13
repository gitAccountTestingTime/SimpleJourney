import { Scene } from '../../story-manager';

/**
 * WORLD-BUILDING: Life among common folk, regional cultures, daily life in Aethermoor,
 * and connections to the protagonist's humble origins.
 */

export const CommonFolkConnection: Scene = {
	id: 'wb_common_folk_connection',
	text: `Agent Thorne watches you study political maps and noble genealogies with growing concern. Finally, she speaks: "You're focusing on houses and politics. That's important. But you're forgetting something crucial - the kingdom isn't just nobles and mages. It's millions of common people."

She adjusts the map to show villages, trade routes, farming communities. "You grew up in Thornhaven. You know what life is like for ordinary folk. That's your greatest advantage over nobles raised in palaces. Don't lose touch with that perspective."

Rowan adds: "The ranger network serves common communities more than noble houses. We see how policies affect real people. Want to understand the kingdom? Walk among those your parents tried to help."

You realize they're right. Before making grand political moves, you should reconnect with the people - understand their lives, their struggles, their hopes.`,
	choices: [
		{
			id: 'visit-thornhaven',
			text: 'Return to Thornhaven - revisit your childhood home',
			next: 'thornhaven_return',
			effects: { wisdom: 3, empathy: 4 },
			hiddenEffects: {
				hometown_return: true,
				roots_remembered: true,
				humble_origins: true
			}
		},
		{
			id: 'tour-kingdom',
			text: 'Tour the kingdom\'s regions - see diverse communities firsthand',
			next: 'kingdom_tour',
			effects: { wisdom: 5, empathy: 5, charisma: 3 },
			hiddenEffects: {
				kingdom_tour: true,
				comprehensive_understanding: true,
				people_focused_leader: true
			}
		},
		{
			id: 'visit-villages',
			text: 'Visit villages affected by the Regency Council\'s misrule',
			next: 'suffering_villages',
			effects: { empathy: 6, courage: 3 },
			hiddenEffects: {
				witnesses_suffering: true,
				motivated_by_injustice: true,
				reformer_confirmed: true
			}
		}
	]
};

export const ThornhavenReturn: Scene = {
	id: 'thornhaven_return',
	text: `Thornhaven looks smaller than you remember. The frontier village where you spent seventeen years now seems humble and worn compared to Silverwood Manor's grandeur.

But as you walk the familiar dirt roads, memories flood back: the bakery where kind Marta gave you day-old bread, the square where you did odd jobs for copper coins, the river where you learned to fish, the forest where you played as a child.

The villagers recognize you. "Is that really you?" Old man Henrik calls out. "The orphan who always helped with my deliveries? They say you're some kind of prince now!"

News of your identity has spread. The village gathers, curious and excited. These people knew you when you had nothing. They treated you with varying degrees of kindness or indifference, never knowing you were secretly royal.

Now they look at you with wonder. And you see clearly the gap between the person you were and the position you've inherited.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { vale_trust: 20 }
			},
			text: `Vale accompanies you to Thornhaven. They observe the humble village with scholarly interest - examining social structures, economic conditions, cultural practices.

"This is where you come from," Vale says quietly. "Not Silverwood Manor. This poverty, this struggle, this community barely surviving on the kingdom's margins." They look at you. "The nobles will never understand this perspective. But you do. That makes you dangerous to them - and valuable to the people."

Vale watches you interact with villagers who knew you as a poor orphan. "They respect you more now that you're royal, but they trusted you more when you were one of them. Remember that. Power creates distance. You need to bridge that gap constantly or lose your connection to the people you want to help."`
		},
		{
			conditions: {
				hasHiddenAttributes: { ash_trust: 25 }
			},
			text: `Ash walks beside you through Thornhaven, their mercenary instincts assessing everything. "Defensible position, barely. No walls, minimal militia. Easy target for bandits or raiders."

Then their expression softens. "But people look out for each other here. See that? Woman sharing bread with her neighbor's children. Man fixing another's fence without being asked. This is what my company fights to protect - communities that survive through cooperation, not power."

Ash stops at the village edge, looking at the forest. "I grew up in a place like this. Different region, same poverty, same struggle. Then raiders came. Burned it all. Killed my family." Their voice is flat with old pain. "That's why I became a mercenary - to have the strength no one had when I needed protection. Your parents' reforms would have created better security for places like Thornhaven. People here lost that when they died."`
		}
	],
	choices: [
		{
			id: 'thank-villagers',
			text: 'Thank villagers for raising you and promise to help frontier communities',
			next: 'thornhaven_promise',
			effects: { charisma: 5, empathy: 4 },
			hiddenEffects: {
				frontier_champion: true,
				villagers_loyalty: true,
				grassroots_support: true
			}
		},
		{
			id: 'distribute-wealth',
			text: 'Distribute money to struggling families - immediate material help',
			next: 'thornhaven_charity',
			effects: { empathy: 4, wealth: -20 },
			hiddenEffects: {
				charitable_action: true,
				villagers_grateful: true,
				economic_help: true
			}
		},
		{
			id: 'listen-problems',
			text: 'Spend time listening to villagers\' actual problems and concerns',
			next: 'thornhaven_listening',
			effects: { wisdom: 5, empathy: 5 },
			hiddenEffects: {
				deep_listening: true,
				understands_needs: true,
				informed_policy: true
			}
		},
		{
			id: 'organize-defenses',
			text: 'Help organize village defenses and militia training',
			next: 'thornhaven_defense',
			effects: { courage: 4, strength: 3 },
			hiddenEffects: {
				village_protected: true,
				practical_help: true,
				kieran_helps: true
			}
		}
	]
};

export const KingdomTour: Scene = {
	id: 'kingdom_tour',
	text: `Over several weeks, you travel across Aethermoor, seeing the kingdom's diversity firsthand. Each region has distinct culture, economy, and challenges:

**The Northern Mountains (Ironforge Territory)**
Harsh climate, rich minerals, dwarven majority. Mining towns where everyone works underground, emerging for brief mountain summers. The dwarves are tough, practical, and resentful of "soft lowlanders" who don't understand hard labor. But you also see the cost: miners with blacklung dying young, widows and orphans left with nothing, company towns where Ironforge controls everything - including basic necessities sold at inflated prices.

Finn's family came from here. You understand his anger now.

**The Eastern Forests (Thornwood Territory)**
Wood elves living in harmony with nature, building homes among living trees. Humans and half-elves integrate into forest communities, learning sustainable hunting and gathering. It's beautiful and serene. But you also see isolation - forest folk rarely travel to cities, rarely participate in broader kingdom politics. They're content in their green world, indifferent to the struggles of others.

Rowan shows you their childhood home - a tree-house village where their mixed heritage made them an outsider.

**The Central Plains (Ravencrest and Brightwater Territory)**
Farmland stretching endlessly, feeding the kingdom. Human majority, working land they don't own - tenant farmers paying rent to noble landlords. The plains are divided: Ravencrest lands run by overseers who extract maximum profit, Brightwater lands managed more fairly with profit-sharing.

The difference is stark. Ravencrest farmers are exhausted, hopeless. Brightwater farmers have dignity and modest prosperity. Same land, different lords, completely different lives.

**The Southern Coast (Mixed Territory)**
Port cities where all races mix freely - humans, elves, dwarves, halflings, gnomes, even exotic visitors from across the sea. Cosmopolitan, chaotic, vibrant. This is where trade happens, where cultures blend, where new ideas flourish. But also where poverty is most visible - dockside slums packed with refugees, orphans, desperate people seeking work.

Whisper grew up in these slums. Learned to steal to survive. You see dozens of children like young Whisper - hungry, clever, invisible to wealthy merchants.

**The Western Wastelands (Unclaimed Territory)**
Harsh desert and scrubland, barely inhabitable. This is where outcasts go - criminals, exiles, people fleeing persecution. Tiny settlements scraping survival from nothing. No law, no protection, no hope of prosperity. Just survival.

But you also see freedom. People building communities without nobles, without hierarchy. Rough but equal. Some thrive here despite the hardship.

Your journey shows you the kingdom's complexity. Millions of lives, each unique, each mattering. The decisions you make will ripple through all these communities in ways you can barely imagine.`,
	choices: [
		{
			id: 'prioritize-economic-reform',
			text: 'Prioritize economic reform - help tenant farmers and workers',
			next: 'economic_focus_path',
			effects: { wisdom: 5, empathy: 4 },
			hiddenEffects: {
				economic_reformer: true,
				finn_inspired: true,
				worker_champion: true
			}
		},
		{
			id: 'prioritize-regional-autonomy',
			text: 'Prioritize regional autonomy - let cultures govern themselves',
			next: 'autonomy_focus_path',
			effects: { wisdom: 6, charisma: 3 },
			hiddenEffects: {
				autonomy_advocate: true,
				rowan_approves: true,
				federalist_approach: true
			}
		},
		{
			id: 'prioritize-urban-reform',
			text: 'Prioritize urban reform - help port cities and slum dwellers',
			next: 'urban_focus_path',
			effects: { empathy: 6, charisma: 3 },
			hiddenEffects: {
				urban_reformer: true,
				whisper_approves: true,
				compassionate_leader: true
			}
		},
		{
			id: 'balanced-approach',
			text: 'Seek balanced reforms addressing all regions\' needs',
			next: 'comprehensive_reform_path',
			effects: { wisdom: 7, charisma: 4 },
			hiddenEffects: {
				comprehensive_reformer: true,
				ambitious_vision: true,
				difficult_path: true
			}
		}
	]
};

export const SufferingVillages: Scene = {
	id: 'suffering_villages',
	text: `Rowan guides you to villages the Regency Council has neglected or actively harmed. The reality is worse than you imagined.

**Ashbrook Village** - A farming community that had a dispute with Lord Ravencrest over tax rates. When they protested, he revoked their market permits. Now they can't sell crops legally. The harvest rots while families starve. You meet a woman named Sarah whose three children died last winter from hunger and cold.

"Your parents had a dispute resolution system," Sarah tells you, tears streaming. "Fair judges who listened to common folk. The Regency disbanded it. Now nobles do what they want and we have no recourse. No voice. No hope."

**Irondale Mining Town** - Ironforge increased quotas after your parents died, pressuring miners to work longer hours in dangerous conditions. A tunnel collapse killed seventeen men three months ago. The company paid minimal compensation and hired new workers immediately. You meet young boys, eight or nine years old, being sent underground because their fathers died.

**Riverside Port** - A slum district where refugees from various conflicts have gathered. No sanitation, no security, no governance. Disease runs rampant. Criminal gangs control everything. You see children fighting over scraps, women selling their bodies to survive, desperation so thick you can taste it.

Agent Thorne's jaw is clenched. "This is what seventeen years without Silverwood leadership looks like. The Regency Council serves noble interests exclusively. Common folk? They're resources to be exploited or obstacles to be ignored."

These aren't abstract political issues. These are people suffering real pain. And technically, you're their rightful ruler - the one who should have protected them all along.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { companions_priority: true }
			},
			text: `Your companions react viscerally to the suffering:

Finn breaks down seeing the mining children. "That was almost me," he whispers. "My father's hands were broken. I could have been sent to the mines." He grips your arm. "Promise me. Promise these reforms happen. No more children underground."

Ash organizes the refugees with military efficiency - establishing watch rotations, organizing food distribution, teaching basic self-defense. "This is what I do," they say. "Protect the helpless. But I'm one person. You could deploy resources that actually solve this."

Seraphine networks with local merchants, arranging better trade deals for Ashbrook's farmers, bypassing Ravencrest's permits through legal loopholes. "Immediate relief," she explains. "While you work on systematic solutions."

Sage documents everything - names, stories, injustices. "Evidence," he says. "When you reform the system, people need to remember why it was necessary."

Your friends show you how leadership works - combining immediate compassion with strategic planning.`
		},
		{
			conditions: {
				hasHiddenAttributes: { thorne_trust: 25 }
			},
			text: `As you witness the suffering, Agent Thorne's composure cracks. "I've seen these places deteriorate over seventeen years," she says. "Every year, I filed reports with the Regency Council. Begging for intervention, for resources, for basic governance. Every report was filed away and forgotten."

Her voice shakes with fury. "They don't care. Ravencrest, the Regency, even some of the 'neutral' houses - they genuinely don't care if common folk suffer. It doesn't affect them. Doesn't threaten their wealth or comfort."

She turns to you. "Your parents cared. They visited places like this, talked to people like Sarah, held children like those miners' boys. And they acted - laws, reforms, resources, justice. That's why I served them. That's why I protected you."

Thorne kneels before you formally. "I swear again - I will help you reclaim the throne. Not for power or glory, but because these people need someone who remembers they're human. Someone who cares. Be that person. Please."`
		}
	],
	choices: [
		{
			id: 'immediate-intervention',
			text: 'Use your authority and resources for immediate intervention',
			next: 'emergency_relief',
			effects: { courage: 5, empathy: 6, wealth: -30 },
			hiddenEffects: {
				immediate_hero: true,
				practical_compassion: true,
				villages_saved: true,
				regency_angered: true
			}
		},
		{
			id: 'document-evidence',
			text: 'Document everything to build case for systematic reform',
			next: 'evidence_gathering',
			effects: { wisdom: 6, empathy: 4 },
			hiddenEffects: {
				strategic_compassion: true,
				evidence_collected: true,
				sage_helps: true
			}
		},
		{
			id: 'organize-resistance',
			text: 'Help villages organize resistance and mutual aid networks',
			next: 'grassroots_organizing',
			effects: { courage: 6, charisma: 5 },
			hiddenEffects: {
				revolutionary_organizer: true,
				grassroots_movement: true,
				people_power: true,
				regency_threatened: true
			}
		},
		{
			id: 'vow-vengeance',
			text: 'Vow to destroy the Regency Council for their cruelty',
			next: 'vengeance_vow',
			effects: { courage: 7, strength: 5 },
			hiddenEffects: {
				vengeance_motivated: true,
				righteous_fury: true,
				regency_enemy: true,
				dark_determination: true
			}
		}
	]
};

export const ThornhavenListening: Scene = {
	id: 'thornhaven_listening',
	text: `You spend days in Thornhaven, sitting in the tavern, visiting homes, listening. Really listening. The villagers share their lives once they realize you genuinely care:

**From Henrik the merchant**: "Trade routes aren't safe anymore. Bandits everywhere since your parents' ranger patrols were disbanded. I used to deliver goods weekly to other villages. Now? Once a month if I'm lucky, and I hire expensive guards. Prices go up because supply is down. Everyone suffers."

**From Marta the baker**: "I had three children. Two died - one from fever, one from injury. Your mother's healer program sent trained healers to frontier villages. After she died, the program ended. Now? Nearest healer is three days' travel. Most folk just die if they're seriously sick or hurt."

**From Young Thomas**: "I'm seventeen. Same age you were when you left. But I got no prospects. Can't afford guild apprenticeship. Can't join military without connections. Can't attend school - they closed it. I'll probably become a farmer like my dad, scraping by. Or maybe a bandit - at least that pays better."

**From Elder Miriam**: "Your parents gave us hope. They passed laws protecting us from noble exploitation, funded infrastructure, created opportunities. We thought things would keep getting better. Then they died and everything stopped. Now it's getting worse - like we're sliding backwards into the bad old days. When you came back, everyone wondered: will you restart your parents' dream? Or disappoint us like the Regency did?"

Each conversation adds depth to your understanding. These aren't abstract issues - they're interconnected systems of governance, economics, and society. Fixing one problem requires addressing many.`,
	choices: [
		{
			id: 'promise-comprehensive-reform',
			text: 'Promise comprehensive reform addressing all systemic issues',
			next: 'reform_commitment',
			effects: { charisma: 6, wisdom: 5 },
			hiddenEffects: {
				comprehensive_promise: true,
				high_expectations: true,
				villagers_believe: true
			}
		},
		{
			id: 'promise-specific-changes',
			text: 'Promise specific changes you know you can deliver',
			next: 'pragmatic_promises',
			effects: { wisdom: 6, charisma: 3 },
			hiddenEffects: {
				realistic_promises: true,
				manageable_expectations: true,
				honest_leader: true
			}
		},
		{
			id: 'promise-voice',
			text: 'Promise to give common folk real voice in governance',
			next: 'democratic_commitment',
			effects: { charisma: 7, wisdom: 4 },
			hiddenEffects: {
				democratic_promise: true,
				radical_reform: true,
				people_empowered: true,
				sage_inspired: true
			}
		},
		{
			id: 'honest-uncertainty',
			text: 'Admit uncertainty but promise to try your best with their input',
			next: 'humble_leadership',
			effects: { wisdom: 5, empathy: 5 },
			hiddenEffects: {
				humble_approach: true,
				collaborative_leader: true,
				realistic_expectations: true,
				villagers_appreciate_honesty: true
			}
		}
	]
};

export const EmergencyRelief: Scene = {
	id: 'emergency_relief',
	text: `You don't wait for political maneuvering. People are suffering now, and you have resources now.

You send gold to Ashbrook, buying their crops at fair prices and arranging new market access through Seraphine's merchant connections. Families eat. Hope returns.

You fund safety improvements in Irondale's mines and establish a compensation fund for injured workers and widows. Kieran helps train a militia to stand up to Ironforge's overseers. The company backs down rather than face organized resistance.

You bring healers to frontier villages, re-establishing the healer program your mother created. Lyra coordinates, training local people in basic healing magic. Lives are saved.

You invest in Riverside's slums - sanitation, security, education. Ash's mercenary company provides protection while Whisper's contacts connect refugees with legitimate work.

News spreads: the lost prince is actually helping people. Not with promises, with action. Common folk begin to see you as their champion.

But your relief efforts anger powerful interests:

Lord Ravencrest furiously objects to your "interference" in Ashbrook, calling it undermining legal authority. Duke Ironforge threatens lawsuits over the mine situation. The Regency Council warns you're overstepping boundaries.

Agent Thorne cautions: "You're making enemies by doing good. The system protects its own. Be ready for pushback."`,
	choices: [
		{
			id: 'double-down',
			text: 'Double down on direct action - expand relief efforts',
			next: 'relief_expansion',
			effects: { courage: 6, empathy: 5, wealth: -30 },
			hiddenEffects: {
				relief_hero: true,
				powerful_enemies: true,
				common_folk_love: true,
				conflict_inevitable: true
			}
		},
		{
			id: 'defend-legally',
			text: 'Defend actions through legal arguments and public opinion',
			next: 'crystal_hunt_start',
			effects: { wisdom: 5, charisma: 5 },
			hiddenEffects: {
				legal_warrior: true,
				public_relations: true,
				sage_helps: true
			}
		},
		{
			id: 'negotiate-compromise',
			text: 'Negotiate compromise with angry nobles while continuing help',
			next: 'crystal_hunt_start',
			effects: { wisdom: 6, charisma: 4 },
			hiddenEffects: {
				diplomatic_approach: true,
				balanced_solution: true,
				seraphine_helps: true
			}
		}
	]
};

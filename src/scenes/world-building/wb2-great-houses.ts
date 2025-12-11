import { Scene } from '../../story-manager';

/**
 * WORLD-BUILDING: Deep dives into each of the Seven Great Houses,
 * their histories, rivalries, and how they connect to your companions and the story.
 */

export const HousesDeepDive: Scene = {
	id: 'wb_houses_deep_dive',
	text: `Over the next few days, you study each Great House in depth. Agent Thorne provides intelligence reports, Rowan shares ranger network gossip, and your companions add their own encounters and observations.

The picture that emerges is complex - each house has internal factions, hidden agendas, and personal motivations beyond simple politics.`,
	choices: [
		{
			id: 'study-ironforge',
			text: 'Learn about House Ironforge - Dwarven miners and merchants',
			next: 'house_ironforge_detail',
			effects: { wisdom: 2 },
			hiddenEffects: {
				ironforge_knowledge: true
			}
		},
		{
			id: 'study-moonwhisper',
			text: 'Learn about House Moonwhisper - High Elven mages',
			next: 'house_moonwhisper_detail',
			effects: { wisdom: 2 },
			hiddenEffects: {
				moonwhisper_knowledge: true
			}
		},
		{
			id: 'study-all-houses',
			text: 'Study all houses systematically',
			next: 'all_houses_overview',
			effects: { wisdom: 5 },
			hiddenEffects: {
				comprehensive_knowledge: true,
				all_houses_studied: true
			}
		}
	]
};

export const HouseIronforge: Scene = {
	id: 'house_ironforge_detail',
	text: `**House Ironforge: The Mountain Throne**

Duke Thorin Ironforge is the sixteenth dwarf to hold the seat. His family has controlled the Stoneheart Mountains and their incomparable mineral wealth for three hundred years.

The Ironforge philosophy is simple: "Gold speaks louder than blood." They care little for racial politics or magical theory - only economic stability and profitable trade. Your parents' reforms disrupted centuries-old mining contracts and labor agreements, costing Ironforge millions in short-term losses (though creating fairer conditions for workers).

Thorin publicly mourned your parents while privately celebrating the end of "reckless reforms." But now the Regency Council's mismanagement has destabilized trade routes, and Ironforge profits are suffering. Thorin might support you if you guarantee:
1. Protection of existing mining rights
2. Stable trade conditions
3. A seat on any reformed government

**Key Figures:**
- Duke Thorin Ironforge: Pragmatic, ruthless businessman. Cares about stability.
- Brynn Ironforge (his daughter): Progressive reformer, secretly funds workers' guilds. Conflicts with her father.
- Torvald Deepdelver: Master of the Miners' Guild, represents common dwarf interests. Respected by workers, distrusted by nobles.

**Secrets Revealed:**
- Ironforge weapons armed both your parents' guards AND the assassins
- Brynn Ironforge has been corresponding with Lady Brightwater about reforms
- The deep mines have breached something ancient and magical - they're keeping it quiet`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { finn_met: true }
			},
			text: `**House Ironforge: The Mountain Throne**

When you mention Ironforge, Finn's expression darkens. "I know them well," he says bitterly. "I'm from the mountain settlements. My family were artisans - skilled craftspeople who made beautiful things. But House Ironforge only values efficiency and profit."

He shows you a scar on his wrist. "When I was twelve, Ironforge labor contracts allowed foremen to 'discipline' workers. My father spoke up about dangerous conditions. They broke his hands - he never crafted again." Finn's voice shakes. "Your parents' reforms would have protected people like him. Three months after they passed the Worker Protection Act, they were murdered. Two months later, the act was quietly revoked."

He meets your eyes. "Duke Thorin isn't evil - he's just blind to anything that doesn't show profit on a ledger. But his daughter Brynn? She understands. She's been fighting from inside the system. If you want Ironforge support, bypass the Duke and speak to her."`
		},
		{
			conditions: {
				hasHiddenAttributes: { kieran_met: true }
			},
			text: `**House Ironforge: The Mountain Throne**

Kieran studies the intelligence on Ironforge with a soldier's eye. "Their weapons are the finest in the kingdom," he observes. "My grandfather's sword was Ironforge steel - unbreakable, perfectly balanced. Worth more than a year's wages."

Then his expression hardens. "But here's what bothers me: Ironforge weapons armed your parents' elite guard. Those same weapons were found at the assassination scene - wielded by the killers. Ironforge claims they were stolen or black market copies, but their steel is too distinctive to fake."

He taps the document. "Either Ironforge knowingly supplied the assassins, or their security is so poor that weapons got stolen despite their vaunted reputation. Either option makes them complicit. Approach Duke Thorin carefully - he's hiding something."`
		}
	],
	choices: [
		{
			id: 'approach-thorin',
			text: 'Plan to approach Duke Thorin with a business proposition',
			next: 'houses_strategy_planning',
			effects: { wisdom: 3, charisma: 2 },
			hiddenEffects: {
				ironforge_duke_approach: true,
				pragmatic_alliance: true
			}
		},
		{
			id: 'approach-brynn',
			text: 'Plan to approach Brynn Ironforge as a reform ally',
			next: 'houses_strategy_planning',
			effects: { wisdom: 2, charisma: 3 },
			hiddenEffects: {
				ironforge_daughter_approach: true,
				progressive_alliance: true,
				finn_approves: true
			}
		},
		{
			id: 'approach-workers',
			text: 'Plan to approach the Miners\' Guild directly',
			next: 'houses_strategy_planning',
			effects: { charisma: 4, courage: 2 },
			hiddenEffects: {
				workers_alliance: true,
				populist_approach: true,
				finn_approves: true
			}
		},
		{
			id: 'investigate-weapons',
			text: 'Investigate the weapons connection to the assassination',
			next: 'houses_strategy_planning',
			effects: { wisdom: 4 },
			hiddenEffects: {
				ironforge_investigation: true,
				suspicious_of_thorin: true,
				kieran_approves: true
			}
		}
	]
};

export const HouseMoonwhisper: Scene = {
	id: 'house_moonwhisper_detail',
	text: `**House Moonwhisper: The Arcane Aristocracy**

Lady Aelindra Moonwhisper is over seven hundred years old - older than the kingdom itself. She remembers the clan wars, the founding of Aethermoor, and every Silverwood ruler. Her magical power is legendary, her patience for "upstart mortals" nonexistent.

Moonwhisper philosophy: "Magic is not a democracy. Power must be guided by wisdom, and wisdom comes from centuries of study. To give arcane knowledge to the unready is to arm children with weapons."

They view your parents' decision to open magical education as catastrophic - creating half-trained hedge wizards who endanger everyone. They're not entirely wrong; several magical accidents occurred after the reforms, including a novice summoner who accidentally released demons in a village.

But beneath the principled stance lies elitism and fear. Moonwhisper has controlled magical knowledge for centuries, and that control means political power. Opening education means losing monopoly.

**Key Figures:**
- Lady Aelindra Moonwhisper: Ancient, powerful, genuinely believes she knows best. Sees you as a dangerous child.
- Lyra Nightshade: Distant relative, trying to atone for her ancestor Morgaine's sins. Serves as healer, not combatant.
- Elowen Starweaver: Young prodigy, secretly believes in reform. Could be your inside contact.

**Secrets Revealed:**
- Aelindra was romantically involved with your grandmother Helena. The break was painful.
- Moonwhisper mages possess knowledge about blood magic that even Silverwoods don't know.
- The "magical accidents" after the reforms? Some were sabotaged by Moonwhisper agents to discredit open education.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { lyra_met: true, lyra_bond: 10 }
			},
			text: `**House Moonwhisper: The Arcane Aristocracy**

Lyra reads the section about her house with visible pain. "It's all true," she says quietly. "Lady Aelindra is brilliant, powerful, and absolutely certain she alone knows what's right for the kingdom."

She takes a shaky breath. "My family - the Nightshades - have been under Moonwhisper control for generations. Penance for Morgaine's betrayal. Aelindra watches us constantly, ensuring no Nightshade ever seeks power again." Lyra's violet eyes meet yours. "That's why I studied healing instead of combat magic. Why I volunteered to serve you despite the danger. Because serving is all Nightshades are allowed to do."

Her voice drops to a whisper. "But I've learned things, working in the Moonwhisper libraries. Secrets about blood magic, about the Covenant. Things Aelindra doesn't want anyone - including you - to know. If you want to understand your power and break free from Moonwhisper control... I can help. But it would mean betraying my house completely."`
		},
		{
			conditions: {
				hasHiddenAttributes: { whisper_met: true, whisper_trust: 15 }
			},
			text: `**House Moonwhisper: The Arcane Aristocracy**

Whisper appears beside you with characteristic silence. "Moonwhisper," they say, voice barely audible. "I've stolen from them seventeen times. Their security is meticulous, but they're arrogant - can't imagine common thieves breaching their wards."

They produce a small crystal from their pocket. "This contains a memory - stolen from Aelindra's private study. Watch."

The crystal projects an image: Lady Aelindra and your grandmother Helena, decades younger, standing close. "I love you," Helena says. "But I won't let my feelings compromise the kingdom. Magic must be free, or we're no better than the tyrants we replaced."

Aelindra's face twists with betrayal. "You choose idealism over us. Over everything we built together."

Whisper pockets the crystal. "Aelindra's opposition isn't just political - it's personal. She sees you as Helena's legacy, the continuation of a betrayal. You won't win her over with logic. Only by proving yourself different from your grandmother."`
		}
	],
	choices: [
		{
			id: 'seek-aelindra-approval',
			text: 'Try to earn Lady Aelindra\'s respect and approval',
			next: 'houses_strategy_planning',
			effects: { wisdom: 4, charisma: 2 },
			hiddenEffects: {
				moonwhisper_formal_approach: true,
				respect_tradition: true
			}
		},
		{
			id: 'work-with-lyra',
			text: 'Work with Lyra to access secret knowledge',
			next: 'houses_strategy_planning',
			effects: { wisdom: 3, courage: 2 },
			hiddenEffects: {
				lyra_conspiracy: true,
				moonwhisper_bypassed: true,
				lyra_bond: 10
			}
		},
		{
			id: 'recruit-elowen',
			text: 'Reach out to Elowen Starweaver as inside contact',
			next: 'houses_strategy_planning',
			effects: { charisma: 3, wisdom: 2 },
			hiddenEffects: {
				moonwhisper_insider: true,
				progressive_mage_ally: true
			}
		},
		{
			id: 'challenge-moonwhisper',
			text: 'Publicly challenge Moonwhisper\'s magical monopoly',
			next: 'houses_strategy_planning',
			effects: { courage: 5, charisma: 2 },
			hiddenEffects: {
				moonwhisper_enemy: true,
				bold_reformer: true,
				makes_statement: true
			}
		}
	]
};

export const AllHousesOverview: Scene = {
	id: 'all_houses_overview',
	text: `You spend days absorbing information about all Seven Great Houses. The picture that emerges is intricate - every house connected to others through marriage, rivalry, trade, and shared history.

**The Web of Alliances:**

Houses Ironforge and Brightwater have close trade relations - dwarf minerals, human merchant networks. A natural economic alliance.

Houses Moonwhisper and Thornwood have ancient tensions - high elves view wood elves as "rustic primitives," wood elves see high elves as "pompous fossils."

House Ravencrest secretly fears both Shadowmere (who knows their secrets) and Stonefoot (whose growing power threatens noble privilege).

Stonefoot and Brightwater are natural allies - new money and new voices against old establishment.

Shadowmere stands apart, dealing with everyone and loyal to none. They're the wild card.

**Personal Connections You Discover:**

- Rowan's mother was a Thornwood elf who married a human ranger. The union was controversial; some Thornwoods still consider Rowan illegitimate.
- Finn's family lost everything when Ironforge seized their workshop for "unpaid debts." His art is rebellion against the system that destroyed his father.
- Kieran's military training came from your grandmother's integrated forces. His loyalty is to merit-based leadership, not bloodlines.
- Seraphine's merchant family (non-noble) has connections to House Brightwater. She understands both common and elite perspectives.
- Sage's scholars' guild was funded by your parents. Without that funding, many progressive thinkers have scattered.
- Lyra's service to you is her family's attempt to finally escape Moonwhisper control and prove Nightshades can be trusted.

Everyone in your circle has a stake in how the houses align. Your choices will affect them all.`,
	choices: [
		{
			id: 'build-progressive-coalition',
			text: 'Build a coalition of progressive houses (Brightwater, Stonefoot, reformed elements)',
			next: 'coalition_planning',
			effects: { wisdom: 5, charisma: 5 },
			hiddenEffects: {
				progressive_coalition: true,
				reformer_path_confirmed: true,
				allies_brightwater: true,
				allies_stonefoot: true
			}
		},
		{
			id: 'build-traditional-coalition',
			text: 'Build a coalition of traditional houses (Ironforge, Thornwood, negotiate with Moonwhisper)',
			next: 'coalition_planning',
			effects: { wisdom: 4, charisma: 4 },
			hiddenEffects: {
				traditional_coalition: true,
				moderate_path: true,
				allies_ironforge: true,
				allies_thornwood: true
			}
		},
		{
			id: 'build-balanced-coalition',
			text: 'Attempt a balanced coalition across ideological lines',
			next: 'coalition_planning',
			effects: { wisdom: 6, charisma: 4 },
			hiddenEffects: {
				balanced_coalition: true,
				unifier_path: true,
				difficult_negotiations: true,
				high_risk_high_reward: true
			}
		},
		{
			id: 'bypass-houses',
			text: 'Plan to bypass houses entirely - build power with common folk',
			next: 'coalition_planning',
			effects: { courage: 6, charisma: 5 },
			hiddenEffects: {
				populist_revolution: true,
				radical_path: true,
				houses_opposed: true,
				folk_power: true
			}
		}
	]
};

export const CoalitionPlanning: Scene = {
	id: 'coalition_planning',
	text: `With your strategy decided, Agent Thorne helps you plan the next steps. "The Regency Council meets in three weeks," she reminds you. "You need to move quickly but carefully. Every approach you make will be watched, analyzed, and potentially exploited."

Your companions gather around the planning table. Each offers advice based on their expertise and connections.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { progressive_coalition: true }
			},
			text: `"A progressive coalition," Sage says approvingly. "Bold. Lady Brightwater has been waiting for someone to champion real reform. And Stonefoot represents millions of voices that have been ignored for too long."

Rowan adds: "But you'll need protection. House Ravencrest sees progressives as existential threats. They'll try to stop you - politically or otherwise."

Finn grins: "The common folk will love this. Stories of the lost prince fighting for the people? That's powerful narrative."

Seraphine warns: "Brightwater has wealth but limited military power. Stonefoot has numbers but little organization. You'll need to compensate for those weaknesses."`
		},
		{
			conditions: {
				hasHiddenAttributes: { traditional_coalition: true }
			},
			text: `"A traditional approach," Kieran nods. "Safer. Ironforge and Thornwood respect strength and competence. Prove yourself capable, and they'll support you."

Vale cautions: "But don't betray your values for safety. Your parents died trying to change the system. A purely traditional coalition means accepting things as they are."

Lyra speaks quietly: "Negotiating with Moonwhisper means accepting some of their control. Can you live with that compromise?"

Rowan adds: "My Thornwood relatives will test you. They judge by actions, not words. Be ready to prove your worth."`
		},
		{
			conditions: {
				hasHiddenAttributes: { balanced_coalition: true }
			},
			text: `"A balanced coalition," Agent Thorne says. "Ambitious. It's what your parents tried - holding together opposing forces through compromise and charisma."

She meets your eyes seriously. "It's also what got them killed. Someone didn't want balance - they wanted the old order or complete revolution, nothing in between."

Sage adds: "But if you succeed, you create lasting stability. A government that represents everyone has staying power."

Whisper's voice drifts from the shadows: "Balanced means everyone slightly unhappy but no one angry enough to act. It's walking a tightrope. One misstep and you fall."`
		},
		{
			conditions: {
				hasHiddenAttributes: { populist_revolution: true }
			},
			text: `"Revolution," Ash says, and there's fire in their voice. "Finally. The houses have hoarded power for centuries. It's time the people ruled themselves."

Agent Thorne looks troubled. "This is dangerous. You'll make enemies of every noble house. They'll unite against you."

Finn counters: "But you'll have the people. And there are millions of us compared to hundreds of nobles. If you truly mobilize common folk, the houses can't stop you."

Rowan warns: "Revolution means war. Blood. Chaos. Are you prepared for what that costs? Because those consequences will haunt you forever."`
		}
	],
	choices: [
		{
			id: 'begin-outreach',
			text: 'Begin reaching out to potential allies',
			next: 'wb_first_alliance_meeting',
			effects: { charisma: 3 },
			hiddenEffects: {
				coalition_work_begins: true
			}
		},
		{
			id: 'gather-more-info',
			text: 'Gather more intelligence before making contact',
			next: 'wb_intelligence_gathering',
			effects: { wisdom: 3 },
			hiddenEffects: {
				cautious_approach: true
			}
		},
		{
			id: 'master-magic-first',
			text: 'Master your blood magic before political maneuvering',
			next: 'wb_blood_magic_deep_dive',
			effects: { wisdom: 2, strength: 2 },
			hiddenEffects: {
				power_first: true
			}
		}
	]
};

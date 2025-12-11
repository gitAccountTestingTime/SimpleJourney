import { Scene } from '../../story-manager';

/**
 * WORLD-BUILDING: Deep dive into Aethermoor Kingdom's history, the Silverwood lineage,
 * and the events that led to your parents' deaths and your hidden childhood.
 */

export const LibraryDiscovery: Scene = {
	id: 'library_discovery',
	text: `The manor's library is vast - three stories of books, scrolls, and historical records. Agent Thorne guides you to a locked section, producing an ornate key.

"Your parents documented everything," she says. "The true history of Aethermoor, not the sanitized version taught to common folk. The kingdom stands at a crossroads, and to understand where we're going, you must understand where we've been."

She pulls down a leather-bound tome. "This is the Chronicle of Blood - the complete history of your family and the magic that makes you unique. Your parents wanted you to know the truth, all of it, good and bad."`,
	choices: [
		{
			id: 'read-chronicles',
			text: 'Read the Chronicles thoroughly',
			next: 'kingdom_foundation_story',
			effects: { wisdom: 5 },
			hiddenEffects: {
				deep_history_known: true,
				scholar_reputation: 1
			}
		},
		{
			id: 'ask-thorne',
			text: 'Ask Agent Thorne to explain it personally',
			next: 'kingdom_foundation_story',
			effects: { charisma: 3 },
			hiddenEffects: {
				thorne_trust: 5,
				personal_connection: true
			}
		}
	]
};

export const KingdomFoundation: Scene = {
	id: 'kingdom_foundation_story',
	text: `Three hundred years ago, the land that would become Aethermoor was a battlefield of warring clans and magical factions. Humans, elves, dwarves, and other races fought endlessly for territory and resources.

Then came Aldric Silverwood, your ancestor - a warrior-mage who possessed a rare gift: blood magic. Not the dark necromancy of legend, but the ability to forge magical bonds, to heal through sacrifice, to unite people through shared essence. He proposed something revolutionary: a kingdom where all races could live as equals, bound by magical oath rather than conquered by force.

The Blood Compact was formed. Seven great houses - three human, two elven, one dwarven, and one representing the "lesser" races - each contributed their blood to a great ritual. Aldric bound them together, creating the Aethermoor Covenant: as long as the Silverwood line lived and the compact remained unbroken, the kingdom would prosper and magic would flow freely through the land.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { rowan_bond: 10 }
			},
			text: `Three hundred years ago, the land that would become Aethermoor was a battlefield of warring clans and magical factions. Rowan sits beside you as you read, adding their own knowledge.

"The elven houses were deeply divided," Rowan explains. "Some saw Aldric's vision as enlightened. Others viewed the blood bond as slavery. My own ancestors..." They pause. "The Thornhearts sided with Aldric, believing unity would save us all. Other families never forgave that choice. That's why half-elves like me exist - forbidden love between those who chose different sides."

Their hand touches an illustration showing the Blood Compact ritual. "Your family's magic literally holds the kingdom together. That's why some see you as savior, and others as a chain keeping them bound."`
		},
		{
			conditions: {
				hasHiddenAttributes: { vale_trust: 20 }
			},
			text: `Three hundred years ago, the land that would become Aethermoor was a battlefield of warring clans and magical factions. Vale reads over your shoulder, their scholar's mind processing the implications.

"Fascinating," they murmur. "The Blood Compact wasn't just symbolic - it's an actual magical binding. Your family serves as the lynchpin, the keystone holding the entire structure together." They point to a passage. "See here? When a Silverwood dies, the magic weakens. When your parents were murdered, the kingdom itself suffered - crops failed, magic became unstable, old hatreds resurfaced."

They meet your eyes. "You're not just inheriting political power. You're inheriting responsibility for the very fabric of this realm. No pressure, right?"`
		}
	],
	choices: [
		{
			id: 'understand-magic',
			text: 'Focus on understanding the blood magic mechanics',
			next: 'silverwood_lineage_history',
			effects: { wisdom: 4 },
			hiddenEffects: {
				blood_magic_theory: 10,
				magical_scholar: true
			}
		},
		{
			id: 'understand-politics',
			text: 'Focus on the political implications and house dynamics',
			next: 'silverwood_lineage_history',
			effects: { charisma: 3, wisdom: 2 },
			hiddenEffects: {
				political_scholar: true,
				house_dynamics_known: true
			}
		},
		{
			id: 'question-morality',
			text: 'Question whether binding people with magic is ethical',
			next: 'silverwood_lineage_history',
			effects: { wisdom: 5 },
			hiddenEffects: {
				philosophical_mind: true,
				questions_tradition: true,
				reformist_seed: 5
			}
		}
	]
};

export const SilverwoodLineage: Scene = {
	id: 'silverwood_lineage_history',
	text: `The Chronicles detail your family's three-century rule. Not all Silverwoods were heroes.

Aldric the Founder established justice and unity, but his grandson Marcus the Cruel used blood magic to dominate rather than unite, nearly destroying the compact. Queen Elara the Wise restored balance and established the principle that Silverwood power must serve, not rule.

Then came the Time of Troubles, seventy years ago. King Edmund Silverwood fell in love with a sorceress named Morgaine Nightshade - brilliant, beautiful, and secretly a blood magic purist who believed the "lesser races" had corrupted the kingdom. She nearly convinced Edmund to break the compact and establish human supremacy.

Your grandmother, Princess Helena, discovered the plot and confronted her father. The resulting conflict killed Edmund and shattered Morgaine, who vanished into legend. Helena took the throne at seventeen, spending forty years healing the damage and rebuilding trust.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { lyra_met: true }
			},
			text: `The Chronicles detail your family's three-century rule. As you read about Morgaine Nightshade, Lyra - if she's present - becomes very still.

"The Nightshade line," she says quietly. "We don't speak of Morgaine in my family. She's our greatest shame." Lyra's violet eyes meet yours. "I'm descended from her younger sister. Our family spent generations atoning, proving we weren't all supremacists. That's why I studied healing magic rather than combat spells. Why I chose to serve rather than seek power."

She takes a shaky breath. "Your grandmother showed mercy to the Nightshades when she could have destroyed us. She believed in redemption. I... I hope you inherited that wisdom."`
		},
		{
			conditions: {
				hasHiddenAttributes: { kieran_met: true }
			},
			text: `The Chronicles detail your family's three-century rule. Kieran studies the section about the Time of Troubles with professional interest.

"Your grandmother was a tactical genius," he observes. "Look at how she reformed the military - integrated units with mixed races, promoted on merit rather than bloodline. Half the noble houses hated her for it." He grins. "My father served under her command. Said she was the finest leader he'd ever known."

His expression grows serious. "That's where your parents learned leadership. And why they were murdered - they continued her reforms, kept breaking down the old barriers. Made powerful enemies."`
		}
	],
	choices: [
		{
			id: 'admire-helena',
			text: 'Express admiration for your grandmother\'s wisdom',
			next: 'parents_story',
			effects: { wisdom: 3, charisma: 2 },
			hiddenEffects: {
				helena_inspiration: true,
				reformist_values: 5
			}
		},
		{
			id: 'worry-about-legacy',
			text: 'Worry about living up to this legacy',
			next: 'parents_story',
			effects: { wisdom: 2 },
			hiddenEffects: {
				imposter_syndrome: true,
				pressure_felt: true,
				vulnerable_moment: true
			}
		},
		{
			id: 'focus-on-morgaine',
			text: 'Ask more about Morgaine - what happened to her?',
			next: 'parents_story',
			effects: { wisdom: 4 },
			hiddenEffects: {
				morgaine_interest: true,
				dark_history_attention: true,
				potential_threat_noted: true
			}
		}
	]
};

export const ParentsStory: Scene = {
	id: 'parents_story',
	text: `The final section details your parents: King Alduin and Queen Sylvara Silverwood.

They met during a border dispute with the northern territories. Alduin was crown prince, Sylvara a diplomatic envoy with rare talent for blood magic healing. They fell in love negotiating peace, married, and took the throne when your grandmother Helena retired.

Their reign focused on three revolutionary goals: ending the practice of magical servitude, establishing equal representation for all races in government, and opening Silverwood blood magic knowledge to qualified students regardless of birth.

Each reform made enemies. The noble houses resented losing their inherited privileges. The Purist faction - remnants of Morgaine's ideology - called them traitors to human supremacy. Even some reformists worried they were moving too fast, destabilizing centuries of tradition.

Then you were born. The Chronicles describe your father holding you for the first time, saying: "This child will live in a truly just kingdom - I swear it." Your mother added protective enchantments to your bloodline, stronger than any Silverwood before.

Two years later, they were assassinated during a state dinner. Poisoned wine laced with magic-disrupting toxins that prevented your mother's healing abilities from saving them. You were smuggled out by a loyal agent - the Chronicles don't say who - and hidden in Thornhaven.

The assassins were never caught. The investigation was mysteriously closed. And the reforms died with your parents.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { thorne_trust: 10 }
			},
			text: `The final section details your parents, but Agent Thorne interrupts before you finish reading.

"I need to tell you something," she says, voice tight with emotion. "The loyal agent who smuggled you out... that was me. I was younger then, just promoted to royal security. I watched your parents die and couldn't stop it." Her hands clench. "I grabbed you from the nursery while the palace descended into chaos. I ran for three days straight, barely stopping to rest. I chose Thornhaven because it was remote, poor, unremarkable - no one would look for a prince there."

Tears streak her face. "I've spent seventeen years hunting for the truth. Protecting you from shadows. Preparing for the day you'd reclaim your throne. Your parents made me swear - if anything happened to them, your safety came first. Even before justice. Even before revenge."

She meets your eyes. "But now you're here. Now you can do what I couldn't - find the truth and finish what they started."`
		},
		{
			conditions: {
				hasHiddenAttributes: { companions_priority: true }
			},
			text: `The final section details your parents. Your companions from Thornhaven gather close, reading with you.

"Gods," Rook breathes. "You were supposed to change the world. Your parents were building something beautiful."

Vale's hand finds yours. "They died for their ideals. And someone thought they could bury those ideals by burying you in obscurity." Their voice hardens. "They failed. You're here. And you can finish what they started."

Ash speaks quietly: "My mercenary company exists because of people like your parents - orphans from the wars, refugees from prejudice, outcasts from the old order. They gave us hope that things could be different." Steel enters their voice. "We'll help you honor their memory. Whatever it takes."`
		}
	],
	choices: [
		{
			id: 'swear-vengeance',
			text: 'Swear to find their killers and bring them to justice',
			next: 'current_political_situation',
			effects: { courage: 5, strength: 3 },
			hiddenEffects: {
				vengeance_path: true,
				parents_death_motivation: 'justice',
				determined: true
			}
		},
		{
			id: 'swear-continue-work',
			text: 'Swear to continue their reforms and finish what they started',
			next: 'current_political_situation',
			effects: { wisdom: 4, charisma: 4 },
			hiddenEffects: {
				reformer_path: true,
				parents_death_motivation: 'legacy',
				idealistic: true
			}
		},
		{
			id: 'feel-overwhelmed',
			text: 'Feel overwhelmed by the weight of expectation',
			next: 'current_political_situation',
			effects: { wisdom: 3 },
			hiddenEffects: {
				honest_emotions: true,
				burden_acknowledged: true,
				needs_support: true,
				companions_rallying_moment: true
			}
		},
		{
			id: 'question-system',
			text: 'Question whether the entire system needs to be rebuilt',
			next: 'current_political_situation',
			effects: { wisdom: 6 },
			hiddenEffects: {
				revolutionary_thoughts: true,
				radical_reformer: true,
				challenges_foundations: true
			}
		}
	]
};

export const CurrentSituation: Scene = {
	id: 'current_political_situation',
	text: `Agent Thorne closes the Chronicles and spreads out a map of Aethermoor.

"Here's where we stand now. After your parents died, the Regency Council took control - supposedly temporary governance until you came of age. But seventeen years later, they've grown comfortable with power.

The Seven Great Houses are fracturing:

**House Ironforge** (Dwarven) - Controls the mountain mines and most of the kingdom's wealth. Duke Thorin Ironforge wants stability and profits. He'd probably support you if you guarantee his economic interests.

**House Moonwhisper** (High Elven) - Masters of traditional magic. Lady Aelindra Moonwhisper is ancient, powerful, and furious that your parents tried to 'democratize' magical knowledge. She sees you as a child to be controlled or eliminated.

**House Thornwood** (Wood Elven) - Rowan's distant cousins. They've remained neutral but hold significant military power through their ranger corps. Chief Eldrin Thornwood will judge you by your actions, not your bloodline.

**House Ravencrest** (Human Noble) - Old money, old prejudices. Lord Matthias Ravencrest openly supported your parents' murder, though he couldn't be proven guilty. He's building an alliance to prevent your coronation.

**House Brightwater** (Human Merchant) - New money, progressive values. Lady Celeste Brightwater publicly mourned your parents and has been secretly funding reforms. She's your natural ally but politically weak.

**House Stonefoot** (Mixed-Race Collective) - Representatives of halflings, gnomes, and other 'minor' races. Speaker Mira Stonefoot is cautious but hopeful. Her people suffered most under the old system; they need proof you'll actually help them.

**House Shadowmere** (Mixed Human/Magic-User) - The mysterious seventh house, rarely seen. Lord Vex Shadowmere deals in secrets and espionage. He holds information about your parents' assassination but hasn't revealed his price for sharing it."

She taps the capital city. "The Regency Council meets in three weeks to vote on your claim to the throne. You need allies, fast. And you need to prove you're more than just a blood heir - you need to show you're a leader worth following."`,
	choices: [
		{
			id: 'focus-allies',
			text: 'Prioritize building alliances with the houses',
			next: 'wb_houses_deep_dive',
			effects: { charisma: 4, wisdom: 2 },
			hiddenEffects: {
				political_focus: true,
				diplomatic_approach: true
			}
		},
		{
			id: 'focus-investigation',
			text: 'Prioritize investigating your parents\' assassination',
			next: 'wb_assassination_investigation',
			effects: { wisdom: 5 },
			hiddenEffects: {
				investigation_focus: true,
				truth_seeker: true
			}
		},
		{
			id: 'focus-people',
			text: 'Prioritize connecting with common folk and proving your worth',
			next: 'wb_common_folk_connection',
			effects: { charisma: 3, courage: 3 },
			hiddenEffects: {
				populist_approach: true,
				folk_hero_path: true
			}
		},
		{
			id: 'focus-magic',
			text: 'Prioritize mastering your blood magic and magical heritage',
			next: 'wb_blood_magic_deep_dive',
			effects: { wisdom: 4, strength: 2 },
			hiddenEffects: {
				magical_focus: true,
				power_through_mastery: true
			}
		}
	]
};

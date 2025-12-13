import { Scene } from '../../story-manager';

const crowdedMarket = `The city marketplace is crowded with ordinary people - merchants hawking wares, families buying bread, children playing. But there's tension in the air. Poverty is visible in threadbare clothes and hollow eyes. Guards patrol heavily, and people speak in hushed, fearful tones.`;

const marketScene = `${crowdedMarket}`;

const incognito = `You're not yet publicly known as the heir - to them, you're just another traveler. This anonymity lets you see truth unfiltered.`;

const anonymity = `${incognito}`;

const desperateWoman = `A woman haggles desperately over bread prices, clearly unable to afford enough to feed her family. Nearby, a man displays scars from a Shadow Beast attack, begging for coin to pay a healer. Fear and desperation permeate everything.`;

const strugglingPeople = `${desperateWoman}`;

const sageObservation = `Sage, if present, whispers: "This is why reform matters. Look at their suffering."`;

const rowanReminder = `Rowan, if present, says quietly: "These are the people you'll rule. Remember their faces."`;

const companionComments = `${sageObservation}\n\n${rowanReminder}`;

// Market and Assassination Scenes

export const MarketUnrest: Scene = {
	id: 'common_people_scene',
	text: `${marketScene}

${anonymity}

${strugglingPeople}

${companionComments}`,
	textVariants: [
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true', 'progressive_ruler:true'] },
			text: `${marketScene}

${anonymity}

But Sage is with you, and his pain at seeing this is visceral. "This is what we're fighting for," he says urgently. "These people need the Reformists - need democracy that serves them, not nobles."

${strugglingPeople}

Your choice of the Reformist path was for moments like this - to help those forgotten by the old system.

${companionComments}`
		},
		{
			conditions: { hasFlags: ['loyalist_path_confirmed:true', 'traditional_ruler:true'] },
			text: `${marketScene}

${anonymity}

Seraphine, if present, looks troubled. "This is our responsibility," she says quietly. "The Loyalists promised to restore order, prosperity. These people suffer because the old system failed them. We must do better."

${strugglingPeople}

Your traditional path must prove it can care for the common people, not just restore noble power.

${companionComments}`
		},
		{
			conditions: { hasFlags: ['independent_path_confirmed:true', 'chosen_own_path:true'] },
			text: `${marketScene}

${anonymity}

Rowan walks beside you. "No faction cared about them before," they observe. "They were pawns in political games. Your independent path could change that - if you remember them."

${strugglingPeople}

Your rejection of the factions was partly for this - to serve the realm, not political agendas.

${companionComments}`
		},
		{
			conditions: { hasHiddenAttributes: { learned_healing_magic: true } },
			text: `${marketScene}

${anonymity}

The marketplace suffers. But you notice the man with Shadow Beast wounds - wounds you've learned to heal with your blood magic.

Your training with Lyra taught you that royal blood magic was designed for this: protecting and healing your people. You could help him, right now. But using magic publicly would reveal your identity and your power.

The choice weighs on you: hide, or help?`
		}
	],
	choices: [
		{
			id: 'help-family',
			text: 'Help the struggling family personally',
			next: 'assassination_plot',
			effects: { charisma: 3 },
			hiddenEffects: {
				compassion_for_people: 10,
				sage_affection: 10,
				rowan_bond: 8,
				helped_commoners: true
			}
		},
		{
			id: 'observe',
			text: 'Observe quietly - gather information tactically',
			next: 'assassination_plot',
			effects: { wisdom: 3 },
			hiddenEffects: {
				tactical_observation: true,
				understands_common_struggles: true
			}
		},
		{
			id: 'investigate',
			text: 'Ask about their needs - understand the problems',
			next: 'assassination_plot',
			effects: { wisdom: 4 },
			hiddenEffects: {
				compassion_for_people: 5,
				sage_affection: 8,
				investigative_approach: true
			}
		},
		{
			id: 'speech',
			text: 'Make impromptu speech about hope and change',
			next: 'assassination_plot',
			effects: { charisma: 5, courage: 3 },
			hiddenEffects: {
				revealed_self_publicly: true,
				compassion_for_people: 8,
				people_hope_inspired: true,
				sage_affection: 15,
				made_enemies: true
			}
		},
		{
			id: 'heal',
			text: 'Use healing magic on the injured person',
			next: 'assassination_plot',
			effects: { wisdom: 3 },
			hiddenEffects: {
				used_magic_publicly: true,
				revealed_self_publicly: true,
				compassion_for_people: 15,
				people_amazed: true,
				lyra_respect: 10,
				made_enemies: true
			}
		}
	]
};

const nightDanger = `Night. Your temporary lodging is quiet - too quiet. You've learned to trust your instincts, and right now they scream danger.`;

const assassinStrike = `A shadow moves where no shadow should be. Blade gleams in moonlight. The assassin strikes with professional precision - this is no amateur thug. They're trained, deadly, and here to end your claim to the throne permanently.`;

const desperateFight = `The fight is desperate and close. Your blood magic surges instinctively, or your training kicks in, or pure survival instinct takes over. But you're alone, in the dark, fighting for your life.`;

export const AssassinationPlot: Scene = {
	id: 'assassination_plot',
	text: `${nightDanger}

${assassinStrike}

${desperateFight}`,
	textVariants: [
		{
			conditions: { hasFlags: ['military_path_confirmed:true'], hasHiddenAttributes: { kieran_loyalty: 20 } },
			text: `${nightDanger}

But Kieran insisted on guarding you personally tonight. His protective instinct was stronger than military protocol.

${assassinStrike}

Kieran crashes through the door, blade already drawn. "Get behind me!"

He engages the assassin with fierce skill, but they're evenly matched. The assassin is clearly trained to kill nobility. Kieran fights with desperate intensity - not just duty driving him, but something deeper. The fear in his eyes when he saw you in danger was personal.

"I won't let them take you," he growls, pressing the attack.`
		},
		{
			conditions: { hasHiddenAttributes: { kieran_loyalty: 20 } },
			text: `${nightDanger}

The assassin strikes, but you're not alone. Kieran crashes through the door, blade already drawn. "Get behind me!"

He engages the assassin with fierce skill, but they're evenly matched. The assassin is clearly trained to kill nobility. Kieran fights with desperate intensity - not just duty driving him, but something deeper. The fear in his eyes when he saw you in danger was personal.

"I won't let them take you," he growls, pressing the attack.`
		},
		{
			conditions: { hasHiddenAttributes: { rowan_bond: 20 } },
			text: `${nightDanger}

You barely dodge the assassin's blade when an arrow whistles past your ear, embedding in the attacker's shoulder. Rowan drops from the rafters like a hunting cat.

"Thought you could sneak past a ranger?" Rowan snarls, drawing their twin blades. "You've made the last mistake of your life."

They fight with primal fury, protective instinct overwhelming their usual calm. The bond between you has grown into something fierce and unbreakable.`
		}
	],
	choices: [
		{
			id: 'blood-magic-fight',
			text: 'Fight back with blood magic',
			next: 'after_assassination',
			effects: { courage: 4, wisdom: 2 },
			hiddenEffects: {
				survived_assassination: true,
				used_magic_in_combat: true,
				shadow_impressed: true,
				captured_assassin: true
			}
		},
		{
			id: 'conventional-fight',
			text: 'Fight conventionally with weapons',
			next: 'after_assassination',
			effects: { courage: 5 },
			hiddenEffects: {
				survived_assassination: true,
				combat_capable: true,
				captured_assassin: true
			}
		},
		{
			id: 'call-companion',
			text: 'Call for companion\'s help',
			next: 'after_assassination',
			effects: { wisdom: 3 },
			hiddenEffects: {
				survived_assassination: true,
				companion_saved_you: true,
				captured_assassin: true,
				kieran_loyalty: 15,
				rowan_bond: 15
			}
		},
		{
			id: 'capture',
			text: 'Try to capture and question them',
			next: 'after_assassination',
			effects: { wisdom: 5 },
			hiddenEffects: {
				survived_assassination: true,
				captured_assassin: true,
				shadow_impressed_by_skill: true,
				interrogation_possible: true
			}
		},
		{
			id: 'flee',
			text: 'Flee and let companion handle the assassin',
			next: 'after_assassination',
			effects: { wisdom: 2 },
			hiddenEffects: {
				survived_assassination: true,
				companion_fought_alone: true,
				showed_fear: true
			}
		}
	]
};

const aftermathShock = `You survived. The assassin is dead or captured, but the adrenaline still courses through your veins. Your hands shake. The reality hits: someone wants you dead badly enough to send a professional killer.`;

const marcusArrival = `Marcus arrives with guards, securing the area. But the companion who was with you - or arrived in time - remains, tending to minor wounds, their presence a comfort in the aftermath of violence.`;

const safetyPromise = `"You're safe now," they say, but the tremor in their voice reveals their own fear. Fear for you. The vulnerability of this moment creates unexpected intimacy.`;

export const AfterAssassination: Scene = {
	id: 'after_assassination',
	text: `${aftermathShock}

${marcusArrival}

${safetyPromise}`,
	textVariants: [
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true'], hasHiddenAttributes: { sage_affection: 20 } },
			text: `${aftermathShock}

Sage bursts in with Marcus, panic on his face. When he sees you alive, he nearly collapses with relief. "I thought... when they said assassin..." He can't finish.

He rushes forward, checking you for injuries with shaking hands. "I can't lose you," he whispers. "Not when you're finally building the democracy we dreamed of. Not... not ever."

His confession is both political and deeply personal.

${safetyPromise}`
		},
		{
			conditions: { hasHiddenAttributes: { kieran_loyalty: 25 } },
			text: `Kieran refuses to leave your side. His hands shake as he checks you for injuries, professional composure cracking.

"I should have been here sooner," he says roughly. "I should have... if I'd lost you..." He can't finish the sentence.

You've never seen him like this - vulnerable, afraid, his feelings laid bare. He meets your eyes. "I'm sworn to protect you. But this... this isn't just duty anymore."

The confession hangs in the air between you.`
		},
		{
			conditions: { hasHiddenAttributes: { rowan_bond: 25 } },
			text: `Rowan sits close, their usual wildness subdued by fear. "I've been alone most of my life," they say quietly. "By choice, mostly. Easier than losing people."

They look at you with raw honesty. "But you... I can't lose you. I won't. That assassin reminded me that I..." They struggle with words. "That what we have matters. More than I've let anyone matter in a very long time."

Their hand finds yours and doesn't let go.`
		},
		{
			conditions: { hasFlags: ['loyalist_path_confirmed:true'], hasHiddenAttributes: { seraphine_trust: 20 } },
			text: `Seraphine's composure is shattered. She arrived with Marcus, and seeing you alive, wounded, makes her facade crumble.

"I thought..." She stops, breathes. "When I heard there was an attempt on your life, I..." Her hand reaches for yours before she catches herself.

But you catch her hand anyway. Her eyes widen. "Your Highness, I... this is inappropriate. I'm your advisor, I shouldn't..." But she's holding your hand like a lifeline.

"Damn propriety," she whispers. "I was terrified."`
		}
	],
	choices: [
		{
			id: 'seraphine-comfort',
			text: 'Let Seraphine stay - discuss fears about responsibility',
			next: 'finn_introduction',
			effects: { charisma: 3 },
			hiddenEffects: {
				seraphine_trust: 15,
				seraphine_romance: 20,
				seraphine_vulnerability_shared: true
			}
		},
		{
			id: 'rowan-comfort',
			text: 'Share trauma with Rowan - both open up about fears',
			next: 'finn_introduction',
			effects: { wisdom: 3 },
			hiddenEffects: {
				rowan_bond: 20,
				rowan_romance: 20,
				rowan_shared_trauma: true
			}
		},
		{
			id: 'kieran-comfort',
			text: 'Reassure Kieran he did his best - acknowledge his care',
			next: 'finn_introduction',
			effects: { charisma: 3 },
			hiddenEffects: {
				kieran_loyalty: 20,
				kieran_romance: 20,
				kieran_feelings_acknowledged: true
			}
		},
		{
			id: 'sage-comfort',
			text: 'Let Sage tend to you - his gentle care is soothing',
			next: 'finn_introduction',
			effects: { charisma: 2 },
			hiddenEffects: {
				sage_affection: 20,
				sage_romance: 20,
				sage_overcame_fear: true
			}
		},
		{
			id: 'lyra-healing',
			text: 'Accept Lyra\'s healing magic - discuss mortality',
			next: 'finn_introduction',
			effects: { wisdom: 4 },
			hiddenEffects: {
				lyra_respect: 15,
				lyra_romance: 15,
				discussed_mortality: true
			}
		},
		{
			id: 'alone',
			text: 'Process this alone - show independence',
			next: 'finn_introduction',
			effects: { courage: 4 },
			hiddenEffects: {
				independent_personality: true,
				self_reliant: true
			}
		}
	]
};

const finnArrival = `The morning after the assassination attempt, Marcus brings a cheerful dwarf to your safehouse. He's built like a boulder, with a magnificent red beard decorated with small tools, and he's grinning despite the grim circumstances.`;

const finnIntro = `"Finn Ironforge, at your service!" He bows with theatrical flourish. "Master craftsman, rune-worker, and - as of this morning - your new equipment specialist!"`;

const finnGift = `He hefts a beautifully crafted piece of armor inlaid with glowing runes. "Heard someone tried to stick a knife in our new ruler. Can't have that! This here will turn blades and alert you to hostile magic. No charge - consider it an investment in the kingdom's future."`;

const finnCharm = `His good nature is infectious. Despite everything, you find yourself smiling.`;

const finnBusiness = `"Though," he adds with a wink, "if you want anything fancy - enchanted weapons, jewelry that does more than sparkle - we can talk business. I do love a good commission."`;

export const FinnIntroduction: Scene = {
	id: 'finn_introduction',
	text: `${finnArrival}

${finnIntro}

${finnGift}

${finnCharm}

${finnBusiness}`,
	textVariants: [
		{
			conditions: { hasFlags: ['independent_path_confirmed:true', 'chosen_own_path:true'] },
			text: `${finnArrival}

${finnIntro}

"Heard you rejected the human factions," Finn says with approval. "Smart. Dwarves don't trust politics - we trust craftsmanship and character. You're building something new? We respect that."

${finnGift}

${finnCharm}

"The dwarven clans are watching you," he adds seriously. "Impress us, and you'll have allies who build to last."

${finnBusiness}`
		},
		{
			conditions: { hasFlags: ['magical_races_priority:true'], hasHiddenAttributes: { lyra_respect: 15 } },
			text: `${finnArrival}

${finnIntro}

"Lyra sent word," Finn says with a knowing grin. "The elves respect you. That's high praise. Means the dwarves should pay attention too."

${finnGift}

His grin widens. "Besides, anyone who puts magical races first instead of human squabbling? That's a leader worth supporting."

${finnCharm}

${finnBusiness}`
		},
		{
			conditions: { hasFlags: ['military_path_confirmed:true', 'pragmatic_ruler:true'] },
			text: `${finnArrival}

${finnIntro}

"Heard you allied with Blackwood's military," Finn says thoughtfully. "Pragmatic choice. Dwarves appreciate strength and order. Just... don't let him convince you that force solves everything, aye?"

${finnGift}

${finnCharm}

"We dwarves know fortifications and weapons," he adds. "Real protection comes from good craft and wise strategy together."

${finnBusiness}`
		}
	],
	choices: [
		{
			id: 'defensive-armor',
			text: 'Commission defensive armor - practical choice',
			next: 'assassin_confession',
			effects: { wisdom: 2 },
			hiddenEffects: {
				finn_friendship: 10,
				has_rune_protection: true,
				dwarf_relationship_started: true
			}
		},
		{
			id: 'ask-neutrality',
			text: 'Ask about dwarven neutrality in politics',
			next: 'assassin_confession',
			effects: { wisdom: 3 },
			hiddenEffects: {
				finn_friendship: 12,
				understands_dwarf_politics: true,
				dwarf_relationship_started: true
			}
		},
		{
			id: 'share-ale',
			text: 'Share ale and stories - build genuine friendship',
			next: 'finn_bonding_1',
			effects: { charisma: 3 },
			hiddenEffects: {
				finn_friendship: 20,
				finn_likes_you_personally: true,
				dwarf_relationship_started: true
			}
		},
		{
			id: 'show-interest',
			text: 'Show genuine interest in his craft',
			next: 'finn_bonding_1',
			effects: { wisdom: 2, charisma: 2 },
			hiddenEffects: {
				finn_friendship: 18,
				finn_romance_seed: true,
				appreciates_craftsmanship: true,
				dwarf_relationship_started: true
			}
		},
		{
			id: 'ask-join',
			text: 'Ask him to join your group permanently',
			next: 'assassin_confession',
			effects: { charisma: 4 },
			hiddenEffects: {
				finn_friendship: 25,
				finn_joins_party: true,
				dwarf_relationship_started: true
			}
		}
	]
};

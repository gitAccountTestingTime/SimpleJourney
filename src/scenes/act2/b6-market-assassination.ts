import { Scene } from '../../story-manager';

// Market and Assassination Scenes

export const MarketUnrest: Scene = {
	id: 'common_people_scene',
	text: `The city marketplace is crowded with ordinary people - merchants hawking wares, families buying bread, children playing. But there's tension in the air. Poverty is visible in threadbare clothes and hollow eyes. Guards patrol heavily, and people speak in hushed, fearful tones.

You're not yet publicly known as the heir - to them, you're just another traveler. This anonymity lets you see truth unfiltered.

A woman haggles desperately over bread prices, clearly unable to afford enough to feed her family. Nearby, a man displays scars from a Shadow Beast attack, begging for coin to pay a healer. Fear and desperation permeate everything.

Sage, if present, whispers: "This is why reform matters. Look at their suffering."

Rowan, if present, says quietly: "These are the people you'll rule. Remember their faces."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { learned_healing_magic: true }
			},
			text: `The marketplace suffers. But you notice the man with Shadow Beast wounds - wounds you've learned to heal with your blood magic.

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

export const AssassinationPlot: Scene = {
	id: 'assassination_plot',
	text: `Night. Your temporary lodging is quiet - too quiet. You've learned to trust your instincts, and right now they scream danger.

A shadow moves where no shadow should be. Blade gleams in moonlight. The assassin strikes with professional precision - this is no amateur thug. They're trained, deadly, and here to end your claim to the throne permanently.

The fight is desperate and close. Your blood magic surges instinctively, or your training kicks in, or pure survival instinct takes over. But you're alone, in the dark, fighting for your life.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { kieran_loyalty: 20 }
			},
			text: `The assassin strikes, but you're not alone. Kieran crashes through the door, blade already drawn. "Get behind me!"

He engages the assassin with fierce skill, but they're evenly matched. The assassin is clearly trained to kill nobility. Kieran fights with desperate intensity - not just duty driving him, but something deeper. The fear in his eyes when he saw you in danger was personal.

"I won't let them take you," he growls, pressing the attack.`
		},
		{
			conditions: {
				hasHiddenAttributes: { rowan_bond: 20 }
			},
			text: `You barely dodge the assassin's blade when an arrow whistles past your ear, embedding in the attacker's shoulder. Rowan drops from the rafters like a hunting cat.

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

export const AfterAssassination: Scene = {
	id: 'after_assassination',
	text: `You survived. The assassin is dead or captured, but the adrenaline still courses through your veins. Your hands shake. The reality hits: someone wants you dead badly enough to send a professional killer.

Marcus arrives with guards, securing the area. But the companion who was with you - or arrived in time - remains, tending to minor wounds, their presence a comfort in the aftermath of violence.

"You're safe now," they say, but the tremor in their voice reveals their own fear. Fear for you. The vulnerability of this moment creates unexpected intimacy.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { kieran_loyalty: 25 }
			},
			text: `Kieran refuses to leave your side. His hands shake as he checks you for injuries, professional composure cracking.

"I should have been here sooner," he says roughly. "I should have... if I'd lost you..." He can't finish the sentence.

You've never seen him like this - vulnerable, afraid, his feelings laid bare. He meets your eyes. "I'm sworn to protect you. But this... this isn't just duty anymore."

The confession hangs in the air between you.`
		},
		{
			conditions: {
				hasHiddenAttributes: { rowan_bond: 25 }
			},
			text: `Rowan sits close, their usual wildness subdued by fear. "I've been alone most of my life," they say quietly. "By choice, mostly. Easier than losing people."

They look at you with raw honesty. "But you... I can't lose you. I won't. That assassin reminded me that I..." They struggle with words. "That what we have matters. More than I've let anyone matter in a very long time."

Their hand finds yours and doesn't let go.`
		},
		{
			conditions: {
				hasHiddenAttributes: { seraphine_trust: 20 }
			},
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

export const FinnIntroduction: Scene = {
	id: 'finn_introduction',
	text: `The morning after the assassination attempt, Marcus brings a cheerful dwarf to your safehouse. He's built like a boulder, with a magnificent red beard decorated with small tools, and he's grinning despite the grim circumstances.

"Finn Ironforge, at your service!" He bows with theatrical flourish. "Master craftsman, rune-worker, and - as of this morning - your new equipment specialist!"

He hefts a beautifully crafted piece of armor inlaid with glowing runes. "Heard someone tried to stick a knife in our new ruler. Can't have that! This here will turn blades and alert you to hostile magic. No charge - consider it an investment in the kingdom's future."

His good nature is infectious. Despite everything, you find yourself smiling.

"Though," he adds with a wink, "if you want anything fancy - enchanted weapons, jewelry that does more than sparkle - we can talk business. I do love a good commission."`,
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
			next: 'assassin_confession',
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
			next: 'assassin_confession',
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

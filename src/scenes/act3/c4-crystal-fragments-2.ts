import { Scene } from '../../story-manager';

const dragonSpine = `Dragon's Spine Mountains pierce the clouds. Here, ancient dragons roost among peaks mortals rarely see. Thorne Drake leads you to the dragon council - massive beings whose scales shimmer with accumulated centuries.`;

const matriarchGreeting = `The Dragon Matriarch, ancient beyond measure, regards you with eyes like molten gold.`;

const dragonMemory = `"We dragons remember the First War," her voice resonates through stone. "We remember when humans and dragons fought side by side against the Shadowrealm. We also remember the betrayal that followed - humans hunting us for scales and hoards."`;

const thorneCaution = `Thorne stands between you and the council, his stance protective yet neutral. "This one is different," he offers carefully.`;

const matriarchChallenge = `"Then let them prove it," the Matriarch declares. "We offer two paths: Strength or Wisdom. Dragons respect both. Choose how you will be tested."`;

const dragonPresence = `Around you, massive dragon forms shift - beautiful, terrifying, and utterly alien in their ancient power.`;

// Act 3 - Dragon, Fae, and Merfolk Fragment Quests

export const DragonTrial: Scene = {
	id: 'dragon_trial',
	text: `${dragonSpine}

${matriarchGreeting}

${dragonMemory}

${thorneCaution}

${matriarchChallenge}

${dragonPresence}`,
	textVariants: [
		{
			conditions: { hasFlags: ['independent_path_confirmed:true', 'chosen_own_path:true'] },
			text: `${dragonSpine}

${matriarchGreeting}

But there's curiosity in her ancient gaze. "We have heard of you. The heir who rejected human faction politics to forge an independent path."

${dragonMemory}

The Matriarch leans forward. "An independent ruler seeking genuine alliance with magical races? That is... refreshing. Most humans come bearing factional agendas."

${thorneCaution}

"Very well," the Matriarch says. "We will test you. But we do so with interest, not mere skepticism."

${dragonPresence}`
		},
		{
			conditions: { hasFlags: ['bold_approach:true'], hasHiddenAttributes: { thorne_respect: 20 } },
			text: `${dragonSpine}

${matriarchGreeting}

Thorne's respect for your boldness is evident. "This heir challenged me personally, Matriarch. Demanded to be tested on merit, not lineage."

${dragonMemory}

The Matriarch's eyes gleam. "Boldness. We respect that. Too many humans cower or grovel. You stand proud."

${thorneCaution}

${matriarchChallenge}

${dragonPresence}`
		},
		{
			conditions: { hasFlags: ['ask-why:true', 'philosophical_interest:true'] },
			text: `${dragonSpine}

${matriarchGreeting}

"Ah yes," she says, something like amusement in her voice. "Thorne tells me you questioned why dragons care about mortal politics. An unusual question."

${dragonMemory}

She studies you intently. "But it shows you think beyond immediate needs. You seek to understand, not just use. That is rare."

${thorneCaution}

${matriarchChallenge}

${dragonPresence}`
		},
		{
			conditions: { hasHiddenAttributes: { thorne_respect: 30 } },
			text: `The Dragon Matriarch studies you intensely. Thorne suddenly steps forward, his posture formal and deliberate.

"Honored Matriarch," he says, his voice carrying weight, "I invoke the Rite of Draconic Sponsorship."

Shocked murmurs ripple through the assembled dragons. This is clearly significant.

"You would bind your fate to a mortal?" the Matriarch asks, surprised. "If they fail or betray us, your exile becomes permanent."

"I understand," Thorne meets her eyes steadily. "But I believe in them. For the first time in centuries, I believe a mortal truly understands what we fight for."

The Matriarch's expression softens almost imperceptibly. "Very well. We will test them. But Thorne Drake, if you are wrong, you lose your place among dragon-kind forever."`
		}
	],
	choices: [
		{
			id: 'wisdom-path',
			text: 'Choose trial of wisdom - engage in philosophical contest',
			next: 'thorne_loneliness',
			effects: { wisdom: 6 },
			hiddenEffects: {
				dragon_shard_obtained: true,
				thorne_respect: 20,
				thorne_romance: 20,
				dragon_faction_rep: 40,
				wisdom_dragon: true
			}
		},
		{
			id: 'strength-path',
			text: 'Choose trial of strength - face dragon combat trial',
			next: 'thorne_loneliness',
			effects: { courage: 6 },
			hiddenEffects: {
				dragon_shard_obtained: true,
				thorne_respect: 15,
				thorne_romance: 15,
				dragon_faction_rep: 35,
				strength_dragon: true
			}
		},
		{
			id: 'unity-proposal',
			text: 'Propose renewed human-dragon alliance for coming war',
			next: 'thorne_loneliness',
			effects: { wisdom: 5, charisma: 4 },
			hiddenEffects: {
				dragon_shard_obtained: true,
				thorne_respect: 25,
				dragon_faction_rep: 45,
				dragon_alliance_proposed: true,
				visionary_leader: true
			}
		},
		{
			id: 'thorne-sponsorship',
			text: 'Accept Thorne\'s sponsorship - he risks exile for you',
			next: 'thorne_loneliness',
			effects: { charisma: 4 },
			hiddenEffects: {
				dragon_shard_obtained: true,
				thorne_respect: 35,
				thorne_romance: 30,
				thorne_sponsorship: true,
				dragon_faction_rep: 40,
				thorne_risked_everything: true
			}
		}
	]
};

const cliffOverlook = `After the trial, Thorne leads you to a cliff edge overlooking endless mountains. The sunset paints the sky in gold and crimson. In the fading light, he seems both ancient and achingly lonely.`;

const thorneQuestion = `"Do you know what it's like," he asks quietly, "to watch centuries pass? To see everyone you care about turn to dust while you endure?"`;

const vulnerableConfession = `He looks at you, and for once, the ancient dragon's mask falls away completely. "I've had mortal friends before. I've even loved mortals. And I've buried every single one of them. It never gets easier."`;

const timeProblem = `The vulnerability in his voice is startling. "You'll be gone in a blink of an eye," he continues. "Seventy, maybe eighty years if you're lucky. For me, that's nothing. A heartbeat. And then I'll be alone again, remembering you for the next thousand years."`;

const thorneConflict = `He meets your eyes. "So why do I still feel drawn to you? Why can't I maintain the distance I should?"`;

export const ThorneLoneliness: Scene = {
	id: 'thorne_loneliness',
	text: `${cliffOverlook}

${thorneQuestion}

${vulnerableConfession}

${timeProblem}

${thorneConflict}`,
	textVariants: [
		{
			conditions: { hasFlags: ['thorne_sponsorship:true', 'thorne_risked_everything:true'] },
			text: `${cliffOverlook}

Thorne's sponsorship at the trial cost him dearly. He risked permanent exile for you.

${thorneQuestion}

"I broke my own rule," he says, voice rough with emotion. "I swore never to risk my heart on a mortal again. But I sponsored you before the Matriarch. I bound my fate to yours."

${vulnerableConfession}

"And now I've done it again," he whispers. "Fallen for someone who'll leave me. Because I couldn't help myself."

${thorneConflict}`
		},
		{
			conditions: { hasHiddenAttributes: { thorne_romance: 25 } },
			text: `${cliffOverlook}

Thorne's hand finds yours, his touch warm despite his usual heat being contained.

${thorneQuestion}

${vulnerableConfession}

He turns to face you fully. "I told myself I wouldn't do this again. That I'd learned my lesson about loving mortals." His thumb traces your knuckles. "But you made me forget that lesson. You made me hope."

${timeProblem}

"Tell me I'm not foolish," he pleads softly. "Tell me it's worth it."`
		},
		{
			conditions: { hasFlags: ['wisdom-trial:true', 'wisdom_dragon:true'] },
			text: `${cliffOverlook}

"You chose the path of wisdom in the trial," Thorne observes. "Now I ask you to apply that wisdom to an impossible question."

${thorneQuestion}

${vulnerableConfession}

${timeProblem}

"Is it wise to love something temporary?" he asks. "Or is wisdom understanding that all moments are temporary, and love matters anyway?"

${thorneConflict}`
		}
	],
	choices: [
		{
			id: 'embrace',
			text: 'Embrace the connection - time together matters more than length',
			next: 'shimmerwood_games',
			effects: { charisma: 5 },
			hiddenEffects: {
				thorne_romance: 40,
				thorne_accepts_love: true,
				carpe_diem_philosophy: true,
				thorne_bond_deep: true
			}
		},
		{
			id: 'extend-life',
			text: 'Seek ways to extend your life to match his',
			next: 'shimmerwood_games',
			effects: { wisdom: 4 },
			hiddenEffects: {
				thorne_romance: 35,
				life_extension_quest: true,
				thorne_hopeful: true
			}
		},
		{
			id: 'distance',
			text: 'Acknowledge his pain - maintain respectful distance',
			next: 'shimmerwood_games',
			effects: { wisdom: 5 },
			hiddenEffects: {
				thorne_romance: 10,
				thorne_friendship: 30,
				mutual_respect: true,
				thorne_protected: true
			}
		},
		{
			id: 'share-burden',
			text: 'Offer to share the burden - no one should be alone',
			next: 'shimmerwood_games',
			effects: { charisma: 4, wisdom: 3 },
			hiddenEffects: {
				thorne_romance: 45,
				thorne_not_alone: true,
				profound_connection: true,
				thorne_healing_begins: true
			}
		}
	]
};

export const ShimmerwoodGames: Scene = {
	id: 'shimmerwood_games',
	text: `The Shimmerwood defies logic. Trees grow upside-down, streams flow upward, and paths loop back on themselves in impossible geometries. This is the realm of the Fae, where reality bends to their whimsy and truth is the only currency they respect.

A figure materializes - neither entirely male nor female, shifting like morning mist. This is Zephyr, though they seem more Fae here than they did at court.

"Welcome, mortal heir," Zephyr's voice echoes strangely. "The Fae Court has been expecting you. We know what you seek."

Around you, hundreds of Fae gather - beautiful, terrible, utterly alien beings who see mortals as amusing toys.

The Fae Queen speaks, her voice like wind chimes: "We will play games with you, little mortal. Answer our riddles, dance our truth-dance, play our word-games. If you win, the fragment is yours. If you lose..." She smiles, showing too many teeth, "...you stay here forever, entertaining us."

Zephyr whispers urgently: "They cannot break the rules of their own games. But be careful - Fae always twist truth to their advantage."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { zephyr_friendship: 25 }
			},
			text: `The Fae Court assembles, and their attention feels predatory. But Zephyr stands close to you, their presence protective in a way that surprises the other Fae.

"The mortal is under my protection," Zephyr announces formally. "I claim guest-right on their behalf."

The Fae Queen's eyes narrow. "You would claim that, half-blood? For a mortal?"

"I would," Zephyr's voice is steady, though you sense the risk they're taking. "They have earned my loyalty."

The Queen laughs - a sound like breaking glass. "Then the stakes rise! If they fail, not only do they stay, but you lose your place in both worlds, Zephyr. Neither Fae nor mortal. Truly nothing."

Zephyr doesn't hesitate. "I accept those terms."`
		}
	],
	choices: [
		{
			id: 'riddle-contest',
			text: 'Accept riddle contest - match wits with Fae',
			next: 'zephyr_truth',
			effects: { wisdom: 6 },
			hiddenEffects: {
				fae_shard_obtained: true,
				zephyr_friendship: 15,
				fae_faction_rep: 35,
				clever_mind: true
			}
		},
		{
			id: 'truth-dance',
			text: 'Accept truth-dance - let your heart be revealed',
			next: 'zephyr_truth',
			effects: { courage: 5, charisma: 3 },
			hiddenEffects: {
				fae_shard_obtained: true,
				zephyr_friendship: 20,
				zephyr_romance: 25,
				fae_faction_rep: 40,
				honest_heart: true
			}
		},
		{
			id: 'word-games',
			text: 'Play word-games - use language as weapon and shield',
			next: 'zephyr_truth',
			effects: { wisdom: 5, charisma: 3 },
			hiddenEffects: {
				fae_shard_obtained: true,
				zephyr_friendship: 12,
				fae_faction_rep: 35,
				linguistic_skill: true
			}
		},
		{
			id: 'zephyr-guidance',
			text: 'Ask Zephyr to guide you through Fae customs',
			next: 'zephyr_truth',
			effects: { wisdom: 4 },
			hiddenEffects: {
				fae_shard_obtained: true,
				zephyr_friendship: 25,
				zephyr_risked_status: true,
				zephyr_loyalty_deep: true,
				fae_faction_rep: 38
			}
		}
	]
};

export const ZephyrTruth: Scene = {
	id: 'zephyr_truth',
	text: `After winning the Fae games - through wit, truth, or Zephyr's guidance - you hold the fourth fragment. The Fae Court disperses, leaving you alone with Zephyr in a clearing that has returned to normal reality.

Zephyr's form shifts between their court appearance and something more ethereal, more Fae. They look uncertain, vulnerable in a way you've never seen.

"I need to tell you the truth," they say quietly. "I'm not fully mortal. My mother was human, but my father was Fae. I exist between worlds, never fully belonging to either."

They meet your eyes. "At court, I play the charming courtier, but it's exhausting pretending to be entirely human. Here, with the Fae, I'm too human for them to accept. I'm always divided, always half."

Their voice breaks slightly. "But with you... I don't know. For the first time, I feel like maybe I don't have to choose. Maybe I can be both, and that's enough."`,
	choices: [
		{
			id: 'accept-both',
			text: 'Accept all parts of them - they are whole as they are',
			next: 'coral_palace_depths',
			effects: { charisma: 5, wisdom: 3 },
			hiddenEffects: {
				zephyr_romance: 40,
				zephyr_accepted: true,
				zephyr_healing_begins: true,
				inclusive_heart: true
			}
		},
		{
			id: 'celebrate-unique',
			text: 'Celebrate their uniqueness as a strength',
			next: 'coral_palace_depths',
			effects: { charisma: 4 },
			hiddenEffects: {
				zephyr_romance: 35,
				zephyr_empowered: true,
				positive_perspective: true
			}
		},
		{
			id: 'share-feeling',
			text: 'Share your own feelings of not belonging',
			next: 'coral_palace_depths',
			effects: { charisma: 5 },
			hiddenEffects: {
				zephyr_romance: 45,
				shared_understanding: true,
				deep_bond: true,
				mutual_outsiders: true
			}
		},
		{
			id: 'support-choice',
			text: 'Support whichever identity they choose to embrace',
			next: 'coral_palace_depths',
			effects: { charisma: 3, wisdom: 2 },
			hiddenEffects: {
				zephyr_romance: 30,
				zephyr_supported: true,
				respectful_love: true
			}
		}
	]
};

export const CoralPalaceDepths: Scene = {
	id: 'coral_palace_depths',
	text: `The underwater journey to the Coral Palace is otherworldly. Marina guides you through the depths, magically allowing you to breathe beneath the waves. Bioluminescent creatures light your path, and structures of living coral form a city unlike anything on land.

The Merfolk Court gathers in a throne room of pearl and abalone. The Ocean Queen regards you with ancient, knowing eyes.

"Surface-dweller," her voice carries the weight of deep currents, "your kind has poisoned our waters, hunted our people, and treated the ocean as a dumping ground. Why should we help you?"

Around you, merfolk watch with mixture of curiosity and hostility. Marina floats nearby, her expression showing her people's pain.

The Queen continues: "The Crystal Fragment could help you save the surface world. But what about our world? What about the oceans dying from your neglect?"

This is more than a test of worthiness - it's a reckoning with humanity's crimes against the sea.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { marina_friendship: 25 }
			},
			text: `The Ocean Queen's gaze is cold as deep water, but Marina swims forward with determination.

"Your Majesty," Marina's voice rings clear, "I have traveled with this human. I have seen them choose compassion over convenience, wisdom over expedience. They are different from those who came before."

The Queen's expression softens marginally. "You would vouch for them, Marina? After what surface-dwellers did to your pod?"

Marina's jaw sets. "Yes. Because if we never trust, we never heal. And we need healing more than we need revenge."

The Queen regards you both thoughtfully. "Your testimony carries weight, Marina of the Northern Currents. But testimony alone is not enough. Let the surface-dweller prove their words with action."`
		}
	],
	choices: [
		{
			id: 'ocean-protection',
			text: 'Pledge comprehensive ocean protection laws',
			next: 'crystal_complete',
			effects: { wisdom: 5, charisma: 4 },
			hiddenEffects: {
				merfolk_shard_obtained: true,
				marina_friendship: 20,
				merfolk_faction_rep: 45,
				ocean_alliance: true,
				environmental_leader: true
			}
		},
		{
			id: 'ban-hunting',
			text: 'Ban hunting of sea creatures and pollution',
			next: 'crystal_complete',
			effects: { wisdom: 4, courage: 3 },
			hiddenEffects: {
				merfolk_shard_obtained: true,
				marina_friendship: 18,
				merfolk_faction_rep: 40,
				protection_laws: true
			}
		},
		{
			id: 'equal-representation',
			text: 'Offer merfolk representation in surface government',
			next: 'crystal_complete',
			effects: { wisdom: 6, charisma: 5 },
			hiddenEffects: {
				merfolk_shard_obtained: true,
				marina_friendship: 25,
				marina_romance: 20,
				merfolk_faction_rep: 50,
				revolutionary_inclusivity: true
			}
		},
		{
			id: 'healing-expedition',
			text: 'Organize expedition to heal damaged ocean areas',
			next: 'crystal_complete',
			effects: { wisdom: 5 },
			hiddenEffects: {
				merfolk_shard_obtained: true,
				marina_friendship: 22,
				merfolk_faction_rep: 43,
				active_restoration: true
			}
		},
		{
			id: 'marina-trust',
			text: 'Ask Ocean Queen to trust Marina\'s judgment of you',
			next: 'crystal_complete',
			effects: { charisma: 4 },
			hiddenEffects: {
				merfolk_shard_obtained: true,
				marina_friendship: 28,
				marina_romance: 25,
				marina_vouched: true,
				merfolk_faction_rep: 42
			}
		}
	]
};

export const CrystalComplete: Scene = {
	id: 'crystal_complete',
	text: `You stand in the royal chamber, all five Crystal Heart fragments laid before you on an ancient altar. Lyra, Finn, Thorne, Zephyr, and Marina stand with you - representatives of the five magical races, united for the first time in decades.

"The reassembly ritual requires all five races participating," Lyra explains. "Each fragment must be willingly joined by its guardian race. This is why you needed to earn each fragment - force would have shattered them permanently."

The companions you've gathered look to you. In each of their eyes, you see trust, friendship, and perhaps something deeper. You've not just collected fragments - you've built bridges between peoples who had given up on unity.

"When the Crystal Heart reforms," Thorne warns, "the barrier will strengthen, but the Shadowrealm will know. They will send everything they have against us. We'll face the true war soon."

Finn grips his hammer. "Then let's make sure we face it together."

The fragments begin to glow, responding to the unified intent of all five races. The reunion is beginning.`,
	choices: [
		{
			id: 'unity-speech',
			text: 'Deliver speech about unity and hope',
			next: 'climax_preparation',
			effects: { charisma: 6, wisdom: 4 },
			hiddenEffects: {
				crystal_heart_restored: true,
				all_races_united: true,
				inspirational_leader: true,
				companions_loyal: true
			}
		},
		{
			id: 'solemn-ritual',
			text: 'Complete ritual with solemn reverence',
			next: 'climax_preparation',
			effects: { wisdom: 5 },
			hiddenEffects: {
				crystal_heart_restored: true,
				all_races_united: true,
				respectful_leader: true
			}
		},
		{
			id: 'thank-companions',
			text: 'Thank each companion individually and deeply',
			next: 'climax_preparation',
			effects: { charisma: 5 },
			hiddenEffects: {
				crystal_heart_restored: true,
				all_races_united: true,
				lyra_romance: 10,
				finn_romance: 10,
				thorne_romance: 10,
				zephyr_romance: 10,
				marina_romance: 10,
				all_companions_touched: true
			}
		},
		{
			id: 'acknowledge-sacrifice',
			text: 'Acknowledge the sacrifices made to reach this moment',
			next: 'climax_preparation',
			effects: { wisdom: 6 },
			hiddenEffects: {
				crystal_heart_restored: true,
				all_races_united: true,
				remembers_cost: true,
				wise_leader: true
			}
		}
	]
};

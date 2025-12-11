import { Scene } from '../../story-manager';

// Act 3 - Interrogation and Crystal Quest Beginning

export const AssassinConfession: Scene = {
	id: 'assassin_confession',
	text: `The assassin - a woman named Shadow - sits in the secure room, defiant despite her chains. She's professional enough to accept capture with grace, but reveals nothing easily.

"You want to know who hired me?" she says coldly. "Political factions don't leave receipts, Your Highness."

But as you talk, something shifts. Your choices matter - mercy or cruelty, understanding or condemnation. Shadow is a person, not just a weapon. Someone broken by circumstances, trained to kill, never shown another path.

Evidence suggests faction betrayal - but which faction depends on your alliances. Someone fears you enough to want you dead.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { compassion_for_people: 15 }
			},
			text: `Shadow watches you warily, expecting torture or execution. Instead, you speak to her as a person.

"How did you become an assassin?" you ask.

She's caught off-guard. "Does it matter?"

"Yes," you say simply. "Because I can see you're more than just a killer."

For the first time, her mask cracks. "I was twelve when the assassins' guild took me off the streets. They offered food, shelter, purpose. I didn't know there were other choices." She looks away. "By the time I realized, I'd done things that couldn't be undone."`
		}
	],
	choices: [
		{
			id: 'show-mercy',
			text: 'Show mercy - offer her a chance at redemption',
			next: 'crystal_quest_begins',
			effects: { wisdom: 4, charisma: 3 },
			hiddenEffects: {
				shadow_spared: true,
				shadow_redeemed: 10,
				faction_betrayal_known: true,
				merciful_leader: true,
				shadow_loyalty_seed: true
			}
		},
		{
			id: 'investigation',
			text: 'Focus on investigation - find who betrayed you',
			next: 'crystal_quest_begins',
			effects: { wisdom: 5 },
			hiddenEffects: {
				shadow_spared: true,
				faction_betrayal_known: true,
				investigation_thorough: true,
				strategic_mind: true
			}
		},
		{
			id: 'leverage',
			text: 'Use evidence as leverage against traitor faction',
			next: 'crystal_quest_begins',
			effects: { wisdom: 3, charisma: 2 },
			hiddenEffects: {
				shadow_spared: true,
				faction_betrayal_known: true,
				political_leverage_gained: true,
				pragmatic_leader: true
			}
		},
		{
			id: 'forgive',
			text: 'Forgive and seek reconciliation with faction',
			next: 'crystal_quest_begins',
			effects: { charisma: 5 },
			hiddenEffects: {
				shadow_spared: true,
				shadow_redeemed: 15,
				faction_betrayal_known: true,
				forgiving_leader: true,
				faction_tensions_eased: true
			}
		},
		{
			id: 'execute',
			text: 'Execute Shadow - no mercy for assassins',
			next: 'crystal_quest_begins',
			effects: { courage: 3 },
			hiddenEffects: {
				shadow_dead: true,
				faction_betrayal_known: true,
				ruthless_leader: true,
				shadow_redemption_impossible: true
			}
		}
	]
};

export const CrystalQuestBegins: Scene = {
	id: 'crystal_quest_begins',
	text: `In the royal archives, Lyra spreads ancient texts before you. Her expression is grave.

"The Crystal Heart was shattered twenty years ago," she explains. "Five fragments scattered across the realm. Without it, the barrier between our world and the Shadowrealm weakens daily. Eventually, it will collapse completely."

She points to locations on a map:

"The **Elven Fragment** rests with my people in Moonwhisper Grove. They won't surrender it easily - not after centuries of human betrayal.

The **Dwarven Fragment** is held in Ironpeak Mountains. Finn's people value fair trade above all else.

The **Dragon Fragment** is guarded by Thorne Drake and his kin in Dragon's Spine. Dragons respect only strength and wisdom.

The **Fae Fragment** lies within the Shimmerwood, where reality bends to their whims and truth is currency.

The **Merfolk Fragment** rests beneath the waves in the Coral Palace. The sea-folk are angry about surface-dwellers harming their waters."

She meets your eyes. "Each fragment requires not just retrieval, but earning the trust of its guardians. This journey will test everything you are."`,
	choices: [
		{
			id: 'diplomatic',
			text: 'Prioritize diplomatic approach - earn trust genuinely',
			next: 'moonwhisper_trial',
			effects: { wisdom: 4, charisma: 3 },
			hiddenEffects: {
				crystal_quest_active: true,
				diplomatic_approach: true,
				lyra_respect: 15,
				first_fragment: 'elven'
			}
		},
		{
			id: 'lyra-guidance',
			text: 'Seek Lyra\'s detailed guidance on each race',
			next: 'moonwhisper_trial',
			effects: { wisdom: 5 },
			hiddenEffects: {
				crystal_quest_active: true,
				lyra_respect: 20,
				learned_racial_customs: true,
				first_fragment: 'elven'
			}
		},
		{
			id: 'start-elven',
			text: 'Start with Moonwhisper Grove - prove yourself to elves',
			next: 'moonwhisper_trial',
			effects: { wisdom: 3 },
			hiddenEffects: {
				crystal_quest_active: true,
				first_fragment: 'elven',
				lyra_trust_building: true
			}
		},
		{
			id: 'strategic-order',
			text: 'Plan strategic order based on current alliances',
			next: 'moonwhisper_trial',
			effects: { wisdom: 6 },
			hiddenEffects: {
				crystal_quest_active: true,
				strategic_planning: true,
				first_fragment: 'elven'
			}
		}
	]
};

export const MoonwhisperTrial: Scene = {
	id: 'moonwhisper_trial',
	text: `Moonwhisper Grove is breathtaking. Ancient trees sing with magic, their branches forming living cathedrals. The air itself shimmers with enchantment. This is the heart of elven civilization, and you're the first human allowed here in decades.

The Elven Council assembles. Lyra presents you formally, but their faces are cold, skeptical. The eldest speaks: "We remember human treachery. We remember broken promises. Why should we trust you with a fragment of the Crystal Heart?"

Another elder adds: "During the last war, humans slaughtered an entire elven settlement for resources. Lyra lost her entire magical circle. We do not forget."

Lyra stands beside you, supportive but silent. This is your test to pass.

"We offer three trials," the eldest continues. "Choose one. Pass it, and we will consider your worthiness. Fail, and you leave empty-handed - if you leave at all."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { lyra_respect: 25 }
			},
			text: `The Elven Council is cold, but when Lyra speaks on your behalf, her voice carries weight.

"I have traveled with this one," she says. "I have seen their heart. They are not like the humans who came before." She meets your eyes. "I stake my reputation - my very honor - on their worthiness."

The Council murmurs. This is significant. Lyra rarely vouches for anyone, especially not humans. The eldest nods slowly. "Very well. We will test them. But know, Lyra Starsong, if they fail or betray us, your standing falls with theirs."

She doesn't hesitate. "I accept that risk."`
		}
	],
	choices: [
		{
			id: 'nature-trial',
			text: 'Accept trial of nature - prove respect for living things',
			next: 'lyra_confession',
			effects: { wisdom: 4 },
			hiddenEffects: {
				elven_trial_chosen: 'nature',
				lyra_respect: 10,
				rowan_bond: 10,
				nature_affinity: true
			}
		},
		{
			id: 'truth-trial',
			text: 'Accept trial of truth - let elven magic read your heart',
			next: 'lyra_confession',
			effects: { courage: 5 },
			hiddenEffects: {
				elven_trial_chosen: 'truth',
				lyra_respect: 15,
				heart_proven_pure: true,
				brave_vulnerability: true
			}
		},
		{
			id: 'alternative',
			text: 'Negotiate for alternative proof of worthiness',
			next: 'lyra_confession',
			effects: { charisma: 4 },
			hiddenEffects: {
				elven_trial_chosen: 'negotiated',
				lyra_respect: 8,
				diplomatic_skill: true
			}
		},
		{
			id: 'lyra-vouch',
			text: 'Ask Lyra to vouch for you - risk her reputation',
			next: 'lyra_confession',
			effects: { charisma: 3 },
			hiddenEffects: {
				elven_trial_chosen: 'vouched',
				lyra_respect: 20,
				lyra_risked_status: true,
				lyra_trust_deep: true
			}
		}
	]
};

export const LyraConfession: Scene = {
	id: 'lyra_confession',
	text: `After the trial - which you passed through determination, honesty, or Lyra's faith in you - the elven emissary leads you to a private glade. The Crystal Fragment glows softly in your hands, finally earned.

Lyra stands by a memorial carved into living wood. Names are etched there - dozens of them.

"My magical circle," she says quietly. "We were here, in this very grove, when the humans attacked. They wanted the ancient trees for lumber and didn't care who stood in their way."

Her voice is steady, but pain underlies every word. "I survived because I was gathering herbs in the outer forest. When I returned..." She trails off, touching a name carved in the wood. "His name was Aelon. We were to be married."

She turns to you, eyes glistening. "For two hundred years, I've carried that grief. I thought I'd never trust a human again. And then you came along and challenged everything I believed."`,
	choices: [
		{
			id: 'empathy',
			text: 'Listen with deep empathy - let her share fully',
			next: 'ironpeak_negotiation',
			effects: { wisdom: 4, charisma: 3 },
			hiddenEffects: {
				elven_shard_obtained: true,
				lyra_romance: 25,
				lyra_healing_begins: true,
				emotional_connection: true
			}
		},
		{
			id: 'apologize',
			text: 'Apologize sincerely for humanity\'s wrongs',
			next: 'ironpeak_negotiation',
			effects: { charisma: 4 },
			hiddenEffects: {
				elven_shard_obtained: true,
				lyra_romance: 20,
				lyra_appreciates_accountability: true
			}
		},
		{
			id: 'share-loss',
			text: 'Share your own losses and pain',
			next: 'ironpeak_negotiation',
			effects: { charisma: 5 },
			hiddenEffects: {
				elven_shard_obtained: true,
				lyra_romance: 30,
				shared_grief: true,
				deep_understanding: true
			}
		},
		{
			id: 'offer-hope',
			text: 'Offer hope for a better future together',
			next: 'ironpeak_negotiation',
			effects: { charisma: 4, wisdom: 2 },
			hiddenEffects: {
				elven_shard_obtained: true,
				lyra_romance: 28,
				lyra_sees_future: true,
				hope_kindled: true
			}
		}
	]
};

export const IronpeakNegotiation: Scene = {
	id: 'ironpeak_negotiation',
	text: `The dwarven halls of Ironpeak are marvels of engineering and artistry. Massive pillars carved from living stone support vaulted ceilings inlaid with precious gems that cast rainbow light. Finn escorts you proudly through his homeland.

The Dwarf King sits upon a throne of polished granite, radiating practical authority. Unlike the elves' emotional wounds, the dwarves approach this transactionally.

"Your Highness," the King greets with business-like courtesy. "The Crystal Fragment in our possession is valuable. We dwarves don't simply give away treasures - we trade fairly. What do you offer in exchange?"

Finn whispers urgently: "They'll respect a good bargain, but they value honor above all. Don't try to cheat them."

The options are clear: royal treasury access, trade agreements, political alliances, or proving yourself worthy through dwarven challenges.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { finn_friendship: 25 }
			},
			text: `The Dwarf King regards you seriously, but Finn steps forward boldly.

"Your Majesty," Finn says, "I've traveled with the heir. I've seen their character. They're worth the risk." He turns to you, then back to the King. "I'll stake my master craftsman status on their worthiness. If they fail or betray us, strip my title."

The King's eyebrows rise. "That's quite a risk, young Ironforge. Your father won't be pleased if you lose your status."

Finn stands firm. "Some things matter more than status, Your Majesty. Like preventing the Shadowrealm from consuming us all."`
		}
	],
	choices: [
		{
			id: 'treasury',
			text: 'Offer royal treasury access and trade benefits',
			next: 'dragon_trial',
			effects: { charisma: 3 },
			hiddenEffects: {
				dwarven_shard_obtained: true,
				finn_friendship: 10,
				dwarf_faction_rep: 30,
				economic_alliance: true
			}
		},
		{
			id: 'trade-agreement',
			text: 'Promise long-term fair trade agreements',
			next: 'dragon_trial',
			effects: { wisdom: 4 },
			hiddenEffects: {
				dwarven_shard_obtained: true,
				finn_friendship: 15,
				dwarf_faction_rep: 35,
				fair_trade_established: true
			}
		},
		{
			id: 'border-dispute',
			text: 'Offer to resolve the dwarf-elf border dispute',
			next: 'dragon_trial',
			effects: { wisdom: 5, charisma: 3 },
			hiddenEffects: {
				dwarven_shard_obtained: true,
				finn_friendship: 20,
				dwarf_faction_rep: 40,
				lyra_respect: 15,
				diplomatic_master: true
			}
		},
		{
			id: 'craftsmanship',
			text: 'Challenge to craftsmanship contest',
			next: 'dragon_trial',
			effects: { wisdom: 3 },
			hiddenEffects: {
				dwarven_shard_obtained: true,
				finn_friendship: 25,
				finn_romance: 20,
				dwarf_faction_rep: 35,
				earned_through_skill: true
			}
		},
		{
			id: 'finn-help',
			text: 'Ask Finn to negotiate on your behalf',
			next: 'dragon_trial',
			effects: { charisma: 2 },
			hiddenEffects: {
				dwarven_shard_obtained: true,
				finn_friendship: 30,
				finn_risked_standing: true,
				finn_loyalty_deep: true,
				dwarf_faction_rep: 30
			}
		}
	]
};

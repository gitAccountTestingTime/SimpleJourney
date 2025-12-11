import { Scene } from '../../story-manager';

/**
 * WORLD-BUILDING: Investigation into parents' assassination, uncovering conspiracies,
 * and revealing the deeper plots threatening the kingdom.
 */

export const AssassinationInvestigation: Scene = {
	id: 'wb_assassination_investigation',
	text: `Agent Thorne spreads out seventeen years of investigation notes across the study table. Her obsession with solving your parents' murder is evident in the meticulous documentation.

"I've never stopped hunting for answers," she says. "But I've hit walls at every turn. Witnesses died mysteriously. Evidence disappeared. The official investigation was shut down by the Regency Council after only three months."

She taps a faded report. "But I've collected pieces. Fragments. And now that you're here, we can finally pursue leads I couldn't follow alone. Your authority, your blood magic, your very presence will make people nervous - and nervous people make mistakes."

The evidence paints a complex picture: multiple factions with motive, contradictory clues, and a conspiracy that runs deeper than simple political assassination.`,
	choices: [
		{
			id: 'review-evidence',
			text: 'Carefully review all the evidence Thorne has collected',
			next: 'assassination_evidence_review',
			effects: { wisdom: 5 },
			hiddenEffects: {
				investigation_thorough: true,
				detective_mind: true,
				thorne_trust: 10
			}
		},
		{
			id: 'question-witnesses',
			text: 'Start questioning surviving witnesses personally',
			next: 'assassination_witnesses',
			effects: { charisma: 3, wisdom: 3 },
			hiddenEffects: {
				direct_investigation: true,
				people_focused: true
			}
		},
		{
			id: 'magic-investigation',
			text: 'Use blood magic to investigate - sensing truth and connections',
			next: 'assassination_magic_probe',
			effects: { wisdom: 4, strength: 3 },
			hiddenEffects: {
				magical_detective: true,
				blood_magic_investigation: true,
				lyra_helps: true
			}
		}
	]
};

export const EvidenceReview: Scene = {
	id: 'assassination_evidence_review',
	text: `You spend days absorbing every detail of Thorne's investigation. A pattern emerges from the chaos:

**The Murder:**
Your parents were poisoned during a state dinner celebrating the anniversary of the Blood Compact. Thirty nobles attended, along with servants, guards, and entertainers. The wine served to your parents contained Silverthorn - a rare poison that disrupts magical healing and causes swift death.

**Key Evidence:**

1. **The Poison Source**: Silverthorn only grows in Moonwhisper territory. Lady Aelindra claims her private gardens were robbed months before the assassination, but no investigation was allowed.

2. **The Weapons**: After your parents collapsed, assassins struck from the shadows - six trained killers who murdered the royal guards with Ironforge steel. Three assassins escaped. Three died fighting. The dead wore no identifying marks, but one had a tattoo: a broken crown pierced by a dagger.

3. **The Symbol**: Thorne tracked the tattoo to the "Crown Breakers" - a radical faction that opposes all monarchy. But the symbol was also used by Purist groups decades ago during your grandmother's reign. Someone is blurring the lines between revolutionaries and supremacists.

4. **The Beneficiaries**: The Regency Council seized power immediately. Documents were already prepared. The transition was too smooth, too organized. Someone knew the assassination was coming and had governance structures ready.

5. **The Silence**: Seventeen key witnesses died within a year - accidents, illnesses, disappearances. House Shadowmere's agents were seen near several deaths. Lord Vex Shadowmere knows something, but he's impossible to reach.

6. **The Magic**: Your mother Sylvara was a master healer. The poison shouldn't have killed her before she could heal herself and your father. But magical wards in the dining hall had been subtly altered, creating dead zones that blocked healing magic. Only a skilled mage could have done this - someone with access to the palace.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { sage_bond: 20 }
			},
			text: `Sage reviews the evidence with his scholar's eye and grows increasingly troubled. "This is too sophisticated for one faction," he says. "Look at the elements: Moonwhisper poison. Ironforge weapons. Magical wards requiring palace access. Revolutionary symbolism. And coordinated governance transfer."

He spreads documents across the table. "I think multiple groups conspired - each contributing pieces to ensure success. A coalition of enemies united by desire to stop your parents' reforms."

Sage's voice drops. "Which means you're not facing one enemy. You're facing a conspiracy that spans ideological lines. Revolutionaries and Purists. Merchants and Nobles. Mages and Warriors. All working together despite hating each other... because they hated your parents' vision more."

He meets your eyes. "To find justice, you need to understand why such different factions would collaborate. What threat did your parents pose that was so existential?"`
		},
		{
			conditions: {
				hasHiddenAttributes: { whisper_trust: 20 }
			},
			text: `Whisper materializes beside you, reading over your shoulder. "I've stolen from most of these houses," they say quietly. "And I recognize patterns. This isn't one conspiracy - it's several, overlapping."

They point to different evidence. "The poison theft was sloppy - deliberate. Moonwhisper wanted to be implicated to create confusion. The weapons? Ironforge doesn't 'lose' steel. They sold it or it was taken with permission. The revolutionary symbol? I've seen it used by agents provocateurs - people stirring up radicals to discredit them."

Whisper's voice is cold. "Someone orchestrated this like a master thief orchestrates a heist - multiple teams, each knowing only their part. The poisoner didn't know about the wards. The assassins didn't know about the Regency Council's paperwork. Compartmentalized. Professional."

They meet your eyes. "You want the truth? Find whoever coordinated all these pieces. The spider at the center of the web. That's your real enemy."`
		}
	],
	choices: [
		{
			id: 'pursue-moonwhisper',
			text: 'Pursue the Moonwhisper connection - confront Lady Aelindra',
			next: 'assassination_moonwhisper_lead',
			effects: { courage: 4, wisdom: 2 },
			hiddenEffects: {
				moonwhisper_accused: true,
				aelindra_confrontation: true,
				bold_move: true
			}
		},
		{
			id: 'pursue-ironforge',
			text: 'Pursue the Ironforge connection - trace the weapons',
			next: 'assassination_ironforge_lead',
			effects: { wisdom: 4 },
			hiddenEffects: {
				ironforge_investigation: true,
				weapons_traced: true
			}
		},
		{
			id: 'pursue-shadowmere',
			text: 'Pursue House Shadowmere - they know who died and why',
			next: 'assassination_shadowmere_lead',
			effects: { courage: 3, wisdom: 3 },
			hiddenEffects: {
				shadowmere_contacted: true,
				espionage_path: true
			}
		},
		{
			id: 'pursue-regency',
			text: 'Pursue the Regency Council - their preparation was too convenient',
			next: 'assassination_regency_lead',
			effects: { wisdom: 5 },
			hiddenEffects: {
				regency_suspected: true,
				political_investigation: true
			}
		}
	]
};

export const MoonwhisperLead: Scene = {
	id: 'assassination_moonwhisper_lead',
	text: `You journey to Starfall Spire, the soaring crystal tower where House Moonwhisper has studied magic for centuries. Lady Aelindra Moonwhisper receives you in a chamber where reality itself seems thin, magic thick enough to taste.

She's ancient and beautiful, with silver hair and eyes that have seen three hundred years of history. When she looks at you, you feel judged by centuries of wisdom.

"The lost prince arrives with accusations," she says coolly. "How predictable. Yes, Silverthorn was stolen from my gardens. Yes, I could have prevented better security. But I did not murder Sylvara and Alduin, child. Despite our disagreements, I respected them."

Her voice softens slightly. "Sylvara was brilliant. Alduin was brave. They were wrong about democratizing magic, but they were genuine in their ideals." She turns away. "I wept when they died. Few know that. Few would believe it."

Then steel returns to her voice. "But if you've come seeking vengeance against Moonwhisper, you'll find we don't yield to threats. Choose your next words carefully, young Silverwood. Accusation could mean war."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { lyra_bond: 25 }
			},
			text: `Lyra accompanies you to Starfall Spire, clearly terrified. As a Nightshade, she's barely tolerated by Moonwhisper. But she stands beside you.

Lady Aelindra's eyes narrow seeing Lyra. "A Nightshade dares enter my tower?" Then recognition. "Ah. Lyra. The healer who swore service to this child." She studies you both. "Interesting. A Silverwood who inspires loyalty even from those my house controls."

Aelindra circles you like a predator. "You want to know about the poison. Very well - truth for truth. Elowen Starweaver, my youngest student, stole the Silverthorn. She was approached by someone offering gold and promises of power. She refused to name them, even under magical compulsion."

The ancient elf's face shows pain. "I executed her myself. My own protégé, corrupted and used. The poison trail ends with her death - conveniently silencing a witness." She meets your eyes. "I didn't kill your parents. But someone used my house, my poison, my student to frame me. Find who corrupted Elowen, and you find your answers."`
		},
		{
			conditions: {
				hasHiddenAttributes: { philosophical_mind: true }
			},
			text: `You don't accuse Aelindra - you question her instead. "Why did you oppose my parents' magical reforms? What threat did universal magical education pose?"

Aelindra looks surprised by the philosophical approach. She considers, then answers honestly: "Magic without wisdom is devastation. Your parents wanted to teach everyone - but wisdom takes decades to cultivate. Give powerful spells to impulsive novices and you get disasters."

She conjures an illusion - a village burning. "This happened six months after the reforms. An earnest farmer learned summoning magic, tried to call rain for his crops. Summoned fire elementals instead. Seventeen dead, including children." Tears glisten in ancient eyes. "I've lived seven centuries. I've seen countless magical catastrophes. I tried to warn them."

Her voice breaks. "But they wouldn't listen. They thought I was elitist, protecting privilege. They didn't understand I was protecting lives." She looks at you. "So yes, I fought their reforms. But I didn't kill them. I wanted to prove them wrong politically, not murder them. There's no satisfaction in 'I told you so' spoken over corpses."`
		}
	],
	choices: [
		{
			id: 'accuse-moonwhisper',
			text: 'Accuse Moonwhisper directly - demand justice',
			next: 'moonwhisper_conflict',
			effects: { courage: 5 },
			hiddenEffects: {
				moonwhisper_enemy: true,
				war_possible: true,
				bold_accusation: true
			}
		},
		{
			id: 'negotiate-info',
			text: 'Negotiate for information - who corrupted Elowen?',
			next: 'moonwhisper_alliance',
			effects: { wisdom: 4, charisma: 3 },
			hiddenEffects: {
				moonwhisper_cooperation: true,
				elowen_connection: true
			}
		},
		{
			id: 'apologize-seek-ally',
			text: 'Apologize for suspicion - seek Aelindra as ally in finding truth',
			next: 'moonwhisper_alliance',
			effects: { wisdom: 3, charisma: 4 },
			hiddenEffects: {
				moonwhisper_ally: true,
				aelindra_respected: true,
				diplomatic_triumph: true
			}
		}
	]
};

export const ShadowmereLead: Scene = {
	id: 'assassination_shadowmere_lead',
	text: `Contacting House Shadowmere is nearly impossible - they have no public offices, no known estates, no announced representatives. They're the kingdom's shadow government, dealing in secrets and espionage.

But Whisper knows how to find them. "Every city has a Shadowmere safe house," they explain. "Hidden in plain sight. Follow me."

You're led through winding alleys to a perfectly ordinary tailor shop. Whisper speaks a code phrase to the shopkeeper, and suddenly you're descending hidden stairs into a richly appointed underground facility.

Lord Vex Shadowmere awaits. He's neither old nor young, neither handsome nor plain - utterly forgettable except for eyes that miss nothing. "The lost prince," he says. "Seeking truth about murdered parents. How touching."

He gestures to chairs. "I know everything about the assassination. Who planned it. Who funded it. Who executed it. Who benefited." A slight smile. "I've known for seventeen years. The question is: what's that knowledge worth to you?"

You realize this is a negotiation. Shadowmere deals in information, and information always has a price.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { whisper_trust: 30 }
			},
			text: `Whisper leads you to Lord Vex, but their usual confidence is shaken. "I've stolen from everyone except Shadowmere," they admit. "They're too good. And they know things about me I've never told anyone."

Lord Vex greets Whisper like an old acquaintance. "Little thief. Still alive, still stealing, still running from your past." He turns to you. "Did Whisper tell you they're Shadowmere-trained? One of our best students before they... disagreed with our methods and fled?"

Whisper's silence confirms it. Vex continues: "We don't chase defectors who keep our secrets. But having Whisper return with the lost prince? Delicious irony." He studies you. "Your companion knows what I'm about to ask as payment for information. They know because they used to be the one sent to collect such debts."

Whisper speaks quietly: "He'll want a favor. A blank check. Some future service you're oath-bound to provide. It's how Shadowmere works - they own everyone through accumulated debts and secrets."`
		},
		{
			conditions: {
				hasHiddenAttributes: { sage_bond: 25 }
			},
			text: `Sage accompanies you to meet Lord Vex. The spymaster's eyes light with recognition. "Ah, the wandering scholar. We've read your treatises on governmental reform. Quite radical. Quite dangerous to the existing order."

Sage meets his gaze steadily. "Information wants to be free, just like people."

Vex laughs. "Idealistic. I deal in information too, scholar, but I understand its value. Free information is chaos. Controlled information is power." He looks at you. "Your parents understood this. They tried to balance transparency with security. It's part of what got them killed - they shared plans too openly, telegraphed their moves."

He leans forward. "I'll tell you what I know, but I need assurance you won't make the same mistake. Some truths must stay secret. Some enemies can't know you're coming. Can you accept that reality? Or will idealism blind you like it blinded them?"`
		}
	],
	choices: [
		{
			id: 'promise-favor',
			text: 'Promise Shadowmere a future favor in exchange for truth',
			next: 'shadowmere_deal',
			effects: { wisdom: 3 },
			hiddenEffects: {
				shadowmere_debt: true,
				dangerous_alliance: true,
				truth_learned: true
			}
		},
		{
			id: 'offer-gold',
			text: 'Offer substantial payment in gold and resources',
			next: 'shadowmere_negotiation',
			effects: { charisma: 3, wealth: -50 },
			hiddenEffects: {
				shadowmere_bribed: true,
				expensive_truth: true
			}
		},
		{
			id: 'appeal-justice',
			text: 'Appeal to justice - if he loved the kingdom, he\'d share freely',
			next: 'shadowmere_negotiation',
			effects: { charisma: 4, courage: 3 },
			hiddenEffects: {
				shadowmere_tested: true,
				idealistic_appeal: true
			}
		},
		{
			id: 'threaten-exposure',
			text: 'Threaten to expose Shadowmere and eliminate their operations',
			next: 'shadowmere_conflict',
			effects: { courage: 5 },
			hiddenEffects: {
				shadowmere_enemy: true,
				dangerous_threat: true,
				bold_foolishness: true
			}
		},
		{
			id: 'walk-away',
			text: 'Refuse to make deals with spymasters - find truth elsewhere',
			next: 'investigation_alternate_path',
			effects: { courage: 3, wisdom: 2 },
			hiddenEffects: {
				shadowmere_neutral: true,
				principled_refusal: true
			}
		}
	]
};

export const ShadowmereDeal: Scene = {
	id: 'shadowmere_deal',
	text: `Lord Vex produces a contract - actual parchment and ink, binding and formal. "You promise one favor," he explains, "to be called in at my discretion, provided it doesn't require you to directly harm innocents or betray your core principles. Standard Shadowmere agreement."

You sign with blood - a magical contract. You feel it settle into your essence, a debt waiting to be called.

Vex smiles. "Now. The truth about your parents' assassination."

He spreads documents across the table - evidence far more detailed than even Agent Thorne collected. "The conspiracy involved four major players:

**Lord Matthias Ravencrest** - Provided funding and political coordination. His motive: preserving noble privilege and human supremacy. He recruited others and organized the Regency Council coup.

**Lady Aelindra Moonwhisper** - Unwitting participant. Her student Elowen was corrupted by Ravencrest agents. Aelindra genuinely didn't know about the plot, but her poison made it possible.

**Duke Thorin Ironforge** - Provided weapons with plausible deniability. He knew they'd be used for something illegal, but not regicide. His motive: stopping labor reforms that cut into profits.

**The Crown Breakers** - Radical revolutionaries, manipulated by Ravencrest into believing your parents were secretly consolidating power. They provided the actual assassins, thinking they were striking a blow for freedom.

Ravencrest played every side - convincing conservatives your parents were too progressive, revolutionaries they were secretly tyrants, and merchants their reforms would destroy the economy."

Vex's expression turns grave. "But there's a fifth player. Someone who gave Ravencrest the intelligence to plan all this. Someone with access to palace secrets, security schedules, magical ward configurations."

He slides forward a final document. A name you recognize. Someone close to your family.

"Your parents' chief advisor and trusted friend betrayed them. For the promise of power in the new order."`,
	choices: [
		{
			id: 'reveal-traitor',
			text: 'Demand to know who the traitor was',
			next: 'traitor_revealed',
			effects: { courage: 4 },
			hiddenEffects: {
				traitor_identity_known: true,
				vengeance_target: true
			}
		},
		{
			id: 'strategic-patience',
			text: 'Keep the knowledge secret - use it strategically',
			next: 'investigation_strategic_approach',
			effects: { wisdom: 5 },
			hiddenEffects: {
				patient_revenge: true,
				strategic_mind: true,
				vex_approves: true
			}
		}
	]
};

export const TraitorRevealed: Scene = {
	id: 'traitor_revealed',
	text: `Vex turns the document. The name burns into your vision:

**Castellan Marcus Grayson**

Your parents' most trusted administrator. The man who managed Silverwood Manor for twenty years. Who helped raise you for the first two years of your life. Who Agent Thorne consulted regularly during her investigation.

"Grayson is currently Castellan of the royal palace," Vex explains. "Serving the Regency Council loyally. Ravencrest rewarded his betrayal with position and wealth. He's protected, powerful, and completely untouchable without proof."

He slides forward more documents - correspondence between Grayson and Ravencrest, payment records, detailed palace maps with guard schedules. "This evidence would convict him in any fair court. But the Regency Council won't allow a fair trial. They're complicit in protecting him."

Vex leans back. "So, young Silverwood. What will you do with this truth? Rage and seek immediate vengeance, making yourself vulnerable? Or play the long game, using knowledge as a weapon when the time is right?"`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { thorne_trust: 20 }
			},
			text: `When you learn Grayson's name, everything becomes clear. Agent Thorne goes white.

"No," she whispers. "Not Marcus. He... he helped me smuggle you out. He gave me access codes, told me escape routes." Her voice breaks. "He made sure I saved you."

Vex nods. "Yes. Because Ravencrest's plan required you alive but hidden. A spare heir to be found if needed, but controlled by those who 'rescued' you. Grayson helped you escape so you'd be in Shadowmere's debt, in Ravencrest's pocket."

Thorne staggers. "Seventeen years. I've been consulting with him. Sharing my investigation. He knew every lead I followed, every witness I found." Realization dawns. "The witnesses who died. He told them what I knew. Had them killed to protect the conspiracy."

She looks at you, tears streaming. "I led them to their deaths. All because I trusted Marcus. I'm so sorry."

You realize Thorne's investigation was compromised from the start - and she's carried guilt for failures that weren't her fault.`
		},
		{
			conditions: {
				hasHiddenAttributes: { companions_priority: true }
			},
			text: `Your companions react viscerally to the betrayal.

Vale: "Trusted advisor turning traitor is the oldest story in politics. Power corrupts predictably."

Kieran: "I want to kill him. Honorless coward, betraying people who trusted him."

Ash: "My mercenary company would execute a traitor immediately. No trial needed."

Rook: "Can we steal his stuff first? I feel like we should steal his stuff."

Finn: "He destroyed your family for money. He's the worst kind of villain - not ideological, just greedy."

Sage: "The question is how to use this information. Revenge is satisfying but justice is strategic."

Your friends rally around you, fury and support mixing. Whatever you decide, they're with you.`
		}
	],
	choices: [
		{
			id: 'plan-assassination',
			text: 'Plan Grayson\'s assassination - justice through execution',
			next: 'grayson_revenge_path',
			effects: { courage: 5, strength: 3 },
			hiddenEffects: {
				vengeance_chosen: true,
				dark_path: true,
				kieran_approves: true,
				ash_approves: true
			}
		},
		{
			id: 'plan-exposure',
			text: 'Plan to expose Grayson publicly - justice through truth',
			next: 'grayson_exposure_path',
			effects: { wisdom: 5, charisma: 4 },
			hiddenEffects: {
				justice_chosen: true,
				public_trial: true,
				sage_approves: true
			}
		},
		{
			id: 'plan-manipulation',
			text: 'Use knowledge of his treason to manipulate him into helping you',
			next: 'grayson_manipulation_path',
			effects: { wisdom: 6, charisma: 3 },
			hiddenEffects: {
				pragmatic_chosen: true,
				morally_gray: true,
				vex_approves: true
			}
		},
		{
			id: 'confront-directly',
			text: 'Confront Grayson directly and demand answers',
			next: 'grayson_confrontation',
			effects: { courage: 6, charisma: 2 },
			hiddenEffects: {
				confrontation_chosen: true,
				emotional_approach: true,
				thorne_worried: true
			}
		}
	]
};

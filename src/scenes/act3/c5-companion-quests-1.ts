import { Scene } from '../../story-manager';

const seraphineVulnerable = `Seraphine finds you in the palace garden, and for once, her perfect composure is cracked. Her hands tremble slightly as she holds a letter.`;

const familyDemand = `"My family," she says, voice strained, "they're demanding I use my position with you to secure advantages for House Silverveil. They want trade monopolies, political appointments, tax exemptions." She meets your eyes. "If I refuse, they'll disown me. If I comply, I betray your trust and everything I believe in."`;

const maskFallen = `You've never seen her this vulnerable. The perfect noblewoman facade has fallen away, revealing someone torn between duty to family and loyalty to principle.`;

const seraphineRealization = `"My entire life," she continues quietly, "I've been trained to play political games. But you've made me want to be better than that. You've shown me there's another way." Her voice breaks. "I don't want to choose between my family and my integrity. But I know what's right."`;

// Companion Personal Quests - Seraphine, Rowan, Kieran

export const SeraphinePoliticalCrisis: Scene = {
	id: 'seraphine_crisis',
	text: `${seraphineVulnerable}

${familyDemand}

${maskFallen}

${seraphineRealization}`,
	textVariants: [
		{
			conditions: { hasFlags: ['loyalist_path_confirmed:true', 'seraphine_becomes_advisor:true'] },
			text: `${seraphineVulnerable}

"They know I'm your primary advisor now," she says bitterly. "They think the Loyalist path means we'll restore noble privileges. They want to exploit that."

${familyDemand}

"You chose tradition," she whispers, "but I know you chose it to rebuild, not to corrupt. My family doesn't understand that."

${maskFallen}

${seraphineRealization}`
		},
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true'], hasHiddenAttributes: { seraphine_trust: 30 } },
			text: `${seraphineVulnerable}

"You chose the Reformists," she says, something like pride in her voice despite her pain. "You chose progress over tradition. That took courage."

${familyDemand}

"They're furious I didn't steer you toward the Loyalists. But I won't manipulate you, even for family."

${maskFallen}

"You've shown me that integrity matters more than noble bloodlines," she says. "Now I have to prove I meant that."`
		},
		{
			conditions: { hasHiddenAttributes: { seraphine_trust: 40 } },
			text: `Seraphine stands before you, vulnerable in a way she's never allowed herself to be. She's not wearing her political mask - this is real fear, real pain.

"I've fallen in love with you," she admits, the words clearly costing her everything. "Not strategically, not for political gain, but genuinely. Completely." She looks away. "My family would use even that if they knew. They'd try to manipulate me through my feelings for you."

She meets your eyes again, and there are unshed tears. "I'm choosing you. I'm choosing integrity. But I need to know - when I lose everything by standing with you, will you stand with me?"`
		}
	],
	choices: [
		{
			id: 'stand-with-her',
			text: 'Stand with her completely - she won\'t face this alone',
			next: 'seraphine_bonding_2',
			effects: { charisma: 5 },
			hiddenEffects: {
				seraphine_trust: 50,
				seraphine_romance: 50,
				seraphine_chose_player: true,
				seraphine_family_abandoned: true,
				powerful_bond: true
			}
		},
		{
			id: 'compromise',
			text: 'Find compromise - negotiate with her family',
			next: 'rowan_origins',
			effects: { wisdom: 5, charisma: 3 },
			hiddenEffects: {
				seraphine_trust: 40,
				seraphine_romance: 35,
				seraphine_family_compromise: true,
				diplomatic_resolution: true
			}
		},
		{
			id: 'family-important',
			text: 'Encourage her to value family - find another way',
			next: 'rowan_origins',
			effects: { wisdom: 4 },
			hiddenEffects: {
				seraphine_trust: 30,
				seraphine_romance: 20,
				seraphine_family_reconciled: true,
				values_family: true
			}
		},
		{
			id: 'love-confession',
			text: 'Confess your love - face everything together',
			next: 'rowan_origins',
			effects: { charisma: 6 },
			hiddenEffects: {
				seraphine_trust: 55,
				seraphine_romance: 60,
				seraphine_love_mutual: true,
				unbreakable_bond: true,
				seraphine_chosen_love: true
			}
		}
	]
};

const journeyBorderlands = `Rowan asks you to accompany them on a private journey to the Borderlands - the wild frontier where civilization meets untamed wilderness. They've been unusually quiet, almost melancholy.`;

const burnedVillage = `You reach a small, burned village. Nothing remains but charred foundations and overgrown ruins.`;

const rowanReveal = `"This was my home," Rowan says quietly. "Twenty years ago, Shadow Beasts came through. The kingdom's army didn't arrive in time - or chose not to. Peripheral villages weren't priority." Their jaw clenches. "My parents died holding the line so children could escape. I was twelve."`;

const rowanReflection = `They walk through the ruins, touching burned timber. "The Royal Scouts found me weeks later, half-dead in the forest. They trained me, gave me purpose, made me what I am." They look at you. "I've protected the kingdom ever since, believing I was preventing what happened here from happening to others."`;

const systemFailure = `Their voice hardens. "But it kept happening. Because the kingdom doesn't protect everyone equally. Borderland villages are expendable. Common people don't matter to most nobles."`;

const rowanQuestion = `You see tears Rowan won't let fall. "I need to know - will you be different? Or am I protecting a system that let my parents die?"`;

export const RowanOrigins: Scene = {
	id: 'rowan_origins',
	text: `${journeyBorderlands}

${burnedVillage}

${rowanReveal}

${rowanReflection}

${systemFailure}

${rowanQuestion}`,
	textVariants: [
		{
			conditions: { hasFlags: ['helped_commoners:true', 'compassion_for_people:15'] },
			text: `${journeyBorderlands}

${burnedVillage}

${rowanReveal}

Rowan looks at you with raw emotion. "You helped people in the market. Common folk with no power, no voice. You saw them as people, not subjects."

${rowanReflection}

"That's what my parents would have wanted," Rowan says, voice thick. "A ruler who sees everyone. Who protects everyone."

${systemFailure}

But there's hope in their eyes now. "You've already shown you're different. I just needed to see where I came from. To remember why it matters."`
		},
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true', 'progressive_ruler:true'] },
			text: `${journeyBorderlands}

${burnedVillage}

${rowanReveal}

${rowanReflection}

Rowan's expression shifts to something like fierce pride. "You chose the Reformists. Democracy, not nobility. Power shared with the people, not hoarded by bloodlines."

${systemFailure}

"But you're changing that," they say firmly. "The Reformist path means villages like this will have voices, votes, protection. My parents died for nothing. Your reforms could make sure others don't."`
		},
		{
			conditions: { hasHiddenAttributes: { rowan_bond: 35 } },
			text: `${journeyBorderlands}

${burnedVillage}

${rowanReveal}

Their hand finds yours, grip tight. "I never brought anyone here before. Never let anyone see where I came from, what shaped me."

${rowanReflection}

${systemFailure}

Rowan turns to face you fully. "But you... you've become my family. And I need my family to understand why justice matters so much to me. Why I can't serve a ruler who doesn't see the people." Their eyes search yours. "Tell me you see them."`
		}
	],
	choices: [
		{
			id: 'promise-change',
			text: 'Promise to change the system - no one expendable',
			next: 'kieran_dilemma',
			effects: { charisma: 5, wisdom: 4 },
			hiddenEffects: {
				rowan_bond: 50,
				rowan_romance: 40,
				rowan_believes_in_change: true,
				reform_committed: true
			}
		},
		{
			id: 'honor-parents',
			text: 'Establish memorial for all fallen border defenders',
			next: 'kieran_dilemma',
			effects: { charisma: 4, wisdom: 3 },
			hiddenEffects: {
				rowan_bond: 45,
				rowan_romance: 35,
				border_memorial_created: true,
				honors_sacrifice: true
			}
		},
		{
			id: 'strengthen-borders',
			text: 'Commit resources to strengthening all border defenses',
			next: 'kieran_dilemma',
			effects: { wisdom: 5 },
			hiddenEffects: {
				rowan_bond: 48,
				rowan_romance: 38,
				border_protection_strengthened: true,
				practical_action: true
			}
		},
		{
			id: 'share-pain',
			text: 'Hold them - share their pain without empty promises',
			next: 'rowan_bonding_3',
			effects: { charisma: 6 },
			hiddenEffects: {
				rowan_bond: 55,
				rowan_romance: 50,
				emotional_intimacy: true,
				rowan_not_alone: true,
				deep_connection: true
			}
		}
	]
};

const kieranRequest = `Captain Kieran requests a private meeting in the training yard, late at night when no one else is around. His expression is tortured, conflicted in a way you've never seen.`;

const uncleReveal = `"General Blackwood is my uncle," he says without preamble. "He raised me after my father died. Taught me everything I know about honor, duty, leadership." He grips his sword hilt unconsciously. "But I've been watching him. Listening. And I think... I think he's planning a coup."`;

const treasonWords = `The words hang heavy between you. This is treason to speak of, even to consider.`;

const militaryPlots = `"He talks about 'necessary action for the kingdom's stability.' He's consolidating military power. Making alliances." Kieran meets your eyes, and you see anguish there. "If he moves against you, I'm oath-bound to protect you. But he's family. The only family I have left."`;

const heartbreakingChoice = `His voice breaks. "How do I choose? My oath or my blood? My duty or my heart?" He steps closer. "Because it's not just duty anymore. Somewhere along the way, protecting you became... personal. Too personal for a bodyguard."`;

export const KieranDilemma: Scene = {
	id: 'kieran_dilemma',
	text: `${kieranRequest}

${uncleReveal}

${treasonWords}

${militaryPlots}

${heartbreakingChoice}`,
	textVariants: [
		{
			conditions: { hasFlags: ['military_alliance_confirmed:true', 'kieran_respects_honor:true'] },
			text: `${kieranRequest}

${uncleReveal}

Kieran's face twists with bitter irony. "You chose the military alliance. You trusted us, trusted the army. And now I have to tell you that trust might be misplaced."

${treasonWords}

${militaryPlots}

"You believed in military honor," Kieran says, voice raw. "I taught you that honor matters. And now I have to prove it by betraying my own blood." ${heartbreakingChoice.slice(13)}`
		},
		{
			conditions: { hasFlags: ['blackwood_mentor:true'], hasHiddenAttributes: { kieran_loyalty: 35 } },
			text: `${kieranRequest}

${uncleReveal}

Kieran's expression is agonized. "You met him. He mentored you, advised you. He seemed honorable, didn't he?" His voice cracks. "That's what makes this so hard. He IS honorable, in his way. He truly believes what he's planning is best for the kingdom."

${treasonWords}

${militaryPlots}

"But you've earned my loyalty," Kieran says firmly. "Not just as heir, but as... as someone I believe in." ${heartbreakingChoice.slice(13)}`
		},
		{
			conditions: { hasHiddenAttributes: { kieran_loyalty: 50 } },
			text: `Kieran's composure shatters completely. "I'm in love with you," he confesses, voice raw. "I've tried to deny it, tried to maintain professional distance, but I can't anymore."

He looks at you with desperate honesty. "If my uncle moves against you, I'll stand with you. Even if it means becoming oath-breaker. Even if it means killing the man who raised me." His hands shake. "But I need to know if I'm throwing away everything for someone who sees me as just a guard. Or if you feel this too."`
		}
	],
	choices: [
		{
			id: 'confront-blackwood',
			text: 'Confront Blackwood together - give him chance to stand down',
			next: 'lyra_memorial',
			effects: { courage: 5, wisdom: 4 },
			hiddenEffects: {
				kieran_loyalty: 50,
				kieran_romance: 40,
				blackwood_confronted: true,
				honorable_resolution: true
			}
		},
		{
			id: 'gather-evidence',
			text: 'Gather evidence first - protect Kieran\'s position',
			next: 'lyra_memorial',
			effects: { wisdom: 5 },
			hiddenEffects: {
				kieran_loyalty: 45,
				kieran_romance: 35,
				evidence_gathered: true,
				strategic_approach: true
			}
		},
		{
			id: 'offer-blackwood-role',
			text: 'Offer Blackwood legitimate powerful role - preempt coup',
			next: 'lyra_memorial',
			effects: { wisdom: 6, charisma: 4 },
			hiddenEffects: {
				kieran_loyalty: 48,
				kieran_romance: 38,
				blackwood_coopted: true,
				brilliant_diplomacy: true
			}
		},
		{
			id: 'love-confession',
			text: 'Confess your feelings - face everything together',
			next: 'kieran_bonding_3',
			effects: { charisma: 6, courage: 4 },
			hiddenEffects: {
				kieran_loyalty: 60,
				kieran_romance: 60,
				kieran_love_mutual: true,
				will_choose_you: true,
				unbreakable_devotion: true
			}
		}
	]
};

export const LyraMemorial: Scene = {
	id: 'lyra_memorial',
	text: `Lyra asks you to accompany her to a sacred elven site - a grove where ancient magic still lingers. She's been quieter than usual, almost fragile.

"Today is the anniversary," she says softly. "Two hundred years since the massacre. Since I lost Aelon and my entire circle."

She leads you to a crystalline pool that reflects the stars even in daylight. "In elven tradition, we believe the dead live on in memory. As long as we remember them, they're not truly gone." She kneels by the water. "But two centuries is a long time to carry that weight alone."

Her reflection in the water shows not just her, but ghostly images of others - her lost loved ones, preserved in magical memory.

"I've been thinking," she continues quietly, "about what it means to heal. Not to forget - never to forget - but to let new love exist alongside old grief." She looks at you. "You've made me believe I can love again without betraying his memory. That I can build a future without abandoning the past."

Tears finally fall. "But I'm terrified. What if I open my heart and lose you too? Elves live so long. Everyone I love eventually leaves."`,
	choices: [
		{
			id: 'promise-together',
			text: 'Promise to cherish every moment you have together',
			next: 'sage_library',
			effects: { charisma: 6, wisdom: 4 },
			hiddenEffects: {
				lyra_respect: 50,
				lyra_romance: 55,
				lyra_healing_complete: true,
				carpe_diem: true
			}
		},
		{
			id: 'honor-aelon',
			text: 'Honor Aelon\'s memory - he\'d want her to be happy',
			next: 'sage_library',
			effects: { wisdom: 5, charisma: 3 },
			hiddenEffects: {
				lyra_respect: 45,
				lyra_romance: 48,
				aelon_honored: true,
				permission_to_move_on: true
			}
		},
		{
			id: 'magical-bond',
			text: 'Suggest elven soul-bond ritual - merge life spans',
			next: 'sage_library',
			effects: { courage: 6, charisma: 4 },
			hiddenEffects: {
				lyra_respect: 52,
				lyra_romance: 60,
				soul_bond_proposed: true,
				willing_to_sacrifice: true,
				profound_commitment: true
			}
		},
		{
			id: 'hold-her',
			text: 'Hold her while she grieves - be present in her pain',
			next: 'sage_library',
			effects: { charisma: 5, wisdom: 4 },
			hiddenEffects: {
				lyra_respect: 48,
				lyra_romance: 52,
				emotional_support: true,
				safe_to_grieve: true,
				deep_intimacy: true
			}
		}
	]
};

export const SageLibrary: Scene = {
	id: 'sage_library',
	text: `You find Sage in the royal archives at midnight, surrounded by ancient tomes and scattered papers. They're trembling with excitement, eyes wide with discovery.

"I found something," Sage breathes, holding up a crumbling manuscript. "Something that could change everything we thought we knew about the Crystal Heart and the Shadowrealm."

They spread documents across the table with frantic energy. "The standard history says the Shadowrealm is inherently evil, that Shadow Beasts are purely destructive. But this - this is a first-hand account from the original war. It tells a different story."

Sage's voice drops to awed whisper. "The Shadowrealm wasn't always corrupt. It was another dimension, home to sentient beings with their own civilization. But something went wrong - a magical plague that twisted them into monsters. They're not evil. They're suffering."

They look at you with desperate hope. "What if we could cure them instead of just fighting them? What if the Crystal Heart could be modified to heal rather than just repel?" Their hands shake. "This could end the war permanently. Not through victory, but through healing."

Then doubt creeps in. "But if I'm wrong... if I convince you to try this and it fails... thousands could die. I'm just a junior scholar. Who am I to challenge centuries of accepted truth?"`,
	choices: [
		{
			id: 'study-together-first',
			text: 'Study historical records together to validate their theory',
			next: 'learning_war_history',
			effects: { wisdom: 7, empathy: 4 },
			hiddenEffects: {
				sage_affection: 48,
				sage_romance: 45,
				research_partnership: true,
				scholarly_approach: true
			}
		},
		{
			id: 'support-research',
			text: 'Support their research fully - brilliant minds change history',
			next: 'climax_preparation',
			effects: { wisdom: 6, charisma: 3 },
			hiddenEffects: {
				sage_affection: 50,
				sage_romance: 45,
				sage_empowered: true,
				revolutionary_discovery: true,
				healing_approach_possible: true
			}
		},
		{
			id: 'cautious-testing',
			text: 'Proceed cautiously - test theory on small scale first',
			next: 'climax_preparation',
			effects: { wisdom: 7 },
			hiddenEffects: {
				sage_affection: 45,
				sage_romance: 40,
				cautious_research: true,
				scientific_method: true
			}
		},
		{
			id: 'trust-intuition',
			text: 'Trust Sage\'s intuition - their heart led to this truth',
			next: 'climax_preparation',
			effects: { charisma: 5, wisdom: 3 },
			hiddenEffects: {
				sage_affection: 48,
				sage_romance: 50,
				sage_trusted_completely: true,
				intuitive_wisdom: true
			}
		},
		{
			id: 'partnership',
			text: 'Work on this together - combine your strengths',
			next: 'climax_preparation',
			effects: { wisdom: 5, charisma: 5 },
			hiddenEffects: {
				sage_affection: 52,
				sage_romance: 55,
				research_partnership: true,
				intellectual_intimacy: true,
				perfect_collaboration: true
			}
		}
	]
};

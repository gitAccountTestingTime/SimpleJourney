import { Scene } from '../../story-manager';

const grandCouncil = `With the Crystal Heart restored and all five magical races aligned with you, the moment of truth approaches. In the grand council chamber, representatives of every faction - human and magical - gather for the final decision.`;

const crossroads = `The kingdom stands at a crossroads. Loyalists demand traditional monarchy. Reformists push for democratic revolution. The military wants strong centralized control. And you've proven that magical races deserve a voice too.`;

const companionViews = `Seraphine speaks for tradition. Sage argues for democracy. Kieran represents military concerns. Lyra advocates for magical race inclusion. Each companion you've bonded with looks to you, trusting your wisdom.`;

const definingChoice = `The choice you make now will define not just your reign, but the future of the entire realm for generations to come.`;

// Act 4 - Climax Preparation and Major Decisions

export const ClimaxPreparation: Scene = {
	id: 'climax_preparation',
	text: `${grandCouncil}

${crossroads}

${companionViews}

${definingChoice}`,
	textVariants: [
		{
			conditions: { hasFlags: ['all_fragments_obtained:true', 'respected_all_cultures:true'], hasHiddenAttributes: { all_races_united: true } },
			text: `The chamber is unlike anything in history - humans, elves, dwarves, dragons, fae, and merfolk all present together. The representatives of five magical races watch intently.

"This is unprecedented," Lyra says with wonder. "Never in recorded history have all races gathered in genuine cooperation. What you've built here could change everything."

Thorne's human form stands beside the Dragon Matriarch. "We've watched human kingdoms rise and fall for millennia. But this... this could be different."

Finn grins broadly. "Aye, if we don't mess it up with politics!"

The tension is palpable, but so is the hope. You have the chance to create something truly revolutionary - if you can unite these disparate voices into one vision.`
		},
		{
			conditions: { hasFlags: ['all_companions_loyal:true'], hasHiddenAttributes: { companion_bonds: 300 } },
			text: `${grandCouncil}

Your companions stand together - a testament to the bonds you've forged. Seraphine, once focused only on noble politics, speaks warmly with Rowan about protecting commoners. Kieran and Shadow, once enemies, stand side by side. Lyra and Finn debate magic and craft with mutual respect.

"Look at them," Vale whispers. "You brought all of us together. Different backgrounds, different species, different beliefs. If we can work together, maybe the whole kingdom can."

${crossroads}

But your companions aren't arguing - they're collaborating. Each offers perspective, trusts the others, seeks compromise.

${definingChoice}`
		},
		{
			conditions: { hasHiddenAttributes: { shadow_magic_learned: true, corruption_risk: 3 } },
			text: `As you stand before the assembly, you feel the shadow magic stirring within you. Its whispers promise easy solutions - domination, control, fear. "You could simply take power," it murmurs. "Why negotiate when you could command?"

Shadow watches you closely, recognizing the signs. They step closer, voice low. "I see it in your eyes. The darkness calling. I know that path - it ends in loneliness and regret." Their hand touches your shoulder. "Don't become what I was. You're better than that."

The choice weighs heavily: embrace the power you've accumulated, or trust in cooperation despite its difficulty.`
		}
	],
	choices: [
		{
			id: 'wellness-check',
			text: 'Take a quick wellness break before the crucial council',
			next: 'stretch_break',
			effects: { wisdom: 3, vitality: 2 },
			hiddenEffects: {
				prepares_carefully: true,
				kieran_suggests: true
			}
		},
		{
			id: 'unity-path',
			text: 'Propose revolutionary unity - all factions and races working together',
			next: 'unity_speech',
			effects: { wisdom: 10, charisma: 10 },
			hiddenEffects: {
				attempted_unity: true,
				final_faction_choice: 'unity',
				revolutionary_vision: true
			}
		},
		{
			id: 'loyalist-path',
			text: 'Support traditional monarchy with measured reforms',
			next: 'traditional_coronation',
			effects: { wisdom: 6, charisma: 5 },
			hiddenEffects: {
				final_faction_choice: 'loyalist',
				traditional_restored: true,
				seraphine_path: true
			}
		},
		{
			id: 'reformist-path',
			text: 'Establish democratic parliament - power to the people',
			next: 'democratic_founding',
			effects: { wisdom: 8, charisma: 7 },
			hiddenEffects: {
				final_faction_choice: 'reformist',
				democracy_chosen: true,
				sage_path: true
			}
		},
		{
			id: 'military-path',
			text: 'Centralize military control - order and strength',
			next: 'military_order',
			effects: { courage: 8, wisdom: 4 },
			hiddenEffects: {
				final_faction_choice: 'military',
				military_state: true,
				kieran_test: true
			}
		},
		{
			id: 'abdicate',
			text: 'Abdicate the throne - choose personal freedom',
			next: 'wanderer_path',
			effects: { wisdom: 7 },
			hiddenEffects: {
				final_faction_choice: 'abdication',
				throne_abandoned: true,
				rowan_ideal: true
			}
		},
		{
			id: 'magical-sovereignty',
			text: 'Become magical sovereign - unite races through magic (requires magical mastery)',
			next: 'archmage_ruler',
			effects: { wisdom: 12, courage: 8 },
			hiddenEffects: {
				final_faction_choice: 'magical',
				archmage_path: true,
				magical_renaissance: true
			}
		}
	]
};

const chamberSilence = `You step forward, and the entire chamber falls silent. Every eye - human, elven, dwarven, draconic, fae, and merfolk - watches you. This is the moment that will define your legacy.`;

const centuriesDivided = `"For centuries," you begin, your voice carrying through the hall, "we've been divided. Humans fought humans. Magical races isolated themselves from mortals. Factions within factions, each claiming their way was the only way."`;

const walkedAmong = `You look around the chamber, meeting eyes both familiar and strange. "But I've walked among all of you. I've earned the trust of magical races through respect, not dominance. I've seen the best of every faction's vision. And I know, in my bones, that none of us can build the future alone."`;

const murmurs = `Murmurs ripple through the crowd - some approving, some skeptical.`;

const newProposal = `"I propose a new system," you continue. "Constitutional monarchy with an elected council. Military reformed to serve all people equally. And - this is crucial - magical races given equal representation. Not as subjects, but as partners."`;

const explosiveDebate = `The room explodes in debate. Some cheer. Others object loudly. The success of this vision depends on everything you've built - every relationship, every choice, every bridge between worlds.`;

export const UnitySpeech: Scene = {
	id: 'unity_speech',
	text: `${chamberSilence}

${centuriesDivided}

${walkedAmong}

${murmurs}

${newProposal}

${explosiveDebate}`,
	textVariants: [
		{
			conditions: { hasFlags: ['helped_all_races:true', 'earned_dragon_respect:true', 'elven_alliance:true'], hasHiddenAttributes: { magical_race_respect: 100 } },
			text: `${chamberSilence}

${centuriesDivided}

Moonwhisper rises. "You earned our trust when others demanded our service. The dragons, the elves, the fae, the merfolk, the dwarves - we all chose to stand with you."

The Dragon Matriarch's voice echoes: "This heir proved themselves worthy through action, not birthright. They understand respect flows both ways."

${walkedAmong}

${murmurs}

${newProposal}

The magical race representatives immediately voice support. Their endorsement sways many skeptical humans.

${explosiveDebate}`
		},
		{
			conditions: { hasFlags: ['reformed_path_confirmed:true', 'fought_for_democracy:true'], hasHiddenAttributes: { commoner_respect: 60 } },
			text: `${chamberSilence}

Elena, the commoner leader, stands. "I've fought against nobles my whole life. But this one is different. They've proven they listen, they care, they share power willingly."

Other common folk in the chamber nod. "They helped us when no one else would. Protected us. Gave us voices."

${centuriesDivided}

"And I've learned," you add, "that true strength comes from the people. Not crowns. Not bloodlines. But the collective will of everyone working together."

${murmurs}

${newProposal}

The reformist faction erupts in cheers. Many moderates look convinced.

${explosiveDebate}`
		}
	],
	choices: [
		{
			id: 'passionate-plea',
			text: 'Make passionate emotional plea for unity',
			next: 'personal_sacrifice',
			effects: { charisma: 8 },
			hiddenEffects: {
				speech_style: 'passionate',
				unity_approach: 'emotional'
			}
		},
		{
			id: 'logical-argument',
			text: 'Present logical, practical arguments for cooperation',
			next: 'personal_sacrifice',
			effects: { wisdom: 8 },
			hiddenEffects: {
				speech_style: 'logical',
				unity_approach: 'rational'
			}
		},
		{
			id: 'call-companions',
			text: 'Call on companions to testify to your character and vision',
			next: 'personal_sacrifice',
			effects: { charisma: 10 },
			hiddenEffects: {
				speech_style: 'testimonial',
				unity_approach: 'personal',
				companions_advocate: true
			}
		},
		{
			id: 'demonstrate-magic',
			text: 'Demonstrate unified magic from all races working through you',
			next: 'personal_sacrifice',
			effects: { courage: 8, wisdom: 6 },
			hiddenEffects: {
				speech_style: 'demonstration',
				unity_approach: 'magical',
				spectacular_display: true
			}
		}
	]
};

const elenaChallenge = `As debate rages, a voice cuts through the chaos. It's Elena, leader of the common people's movement, who you encountered in the underground network.

"Words are beautiful, Your Highness," she says, not unkindly. "But we've heard beautiful words from rulers before. What will you sacrifice to prove this vision is real? What are you willing to give up for this dream of unity?"`;

const questionHangs = `The question hangs in the air. She's right - true leadership requires sacrifice. The assembly waits for your answer.`;

const companionsWatch = `Your companions watch with varied expressions. Your romance partner, if you have one, looks concerned - they know what this might cost.`;

const dragonDemand = `"Power demands price," an ancient voice - the Dragon Matriarch - agrees. "Show us you're worthy of the trust we place in you."`;

export const PersonalSacrifice: Scene = {
	id: 'personal_sacrifice',
	text: `${elenaChallenge}

${questionHangs}

${companionsWatch}

${dragonDemand}`,
	textVariants: [
		{
			conditions: { hasFlags: ['all_companions_loyal:true'], hasHiddenAttributes: { companion_bonds: 250 } },
			text: `${elenaChallenge}

Before you can answer, your companions step forward as one. Seraphine, Vale, Rowan, Kieran, Lyra, Finn, Shadow - all of them.

"Whatever sacrifice is needed," Vale says, "we'll share it. That's what unity means - burden shared, not one person bearing everything."

The assembly watches, moved by this display of genuine solidarity.

${questionHangs}

${dragonDemand}

But your companions' willingness to share the cost has already proven your point better than words ever could.`
		},
		{
			conditions: {
				hasHiddenAttributes: { lyra_romance: 70 }
			},
			text: `Lyra steps forward before you can answer. "If sacrifice is needed, I'll share it. For two hundred years, I've lived without hope for human-elven unity. If this dream requires cost, I'll pay it alongside you."

Her offer is genuine, deeply moving. The elven delegation watches their representative with surprise and respect.

"That's what love means," Lyra continues, meeting your eyes. "Sharing both joy and burden. Whatever price unity demands, we'll pay it together."`
		},
		{
			conditions: {
				hasHiddenAttributes: { kieran_romance: 70 }
			},
			text: `Kieran's hand moves to his sword hilt - not threatening, but protective. "Whatever sacrifice is needed, I'll ensure it's fair and just. You've proven yourself worthy. I won't let anyone demand more than is right."

His uncle, General Blackwood, speaks up. "You'd defend them even against me, nephew?"

"Especially against you," Kieran replies firmly. "They've shown me what true honor means. I'd lay down my life for them without hesitation."`
		}
	],
	choices: [
		{
			id: 'wealth-sacrifice',
			text: 'Redistribute royal wealth to rebuild communities',
			next: 'unity_result',
			effects: { charisma: 7, wisdom: 5 },
			hiddenEffects: {
				sacrifice_type: 'wealth',
				wealth_redistributed: true,
				economic_equality: true,
				commoner_respect: 50
			}
		},
		{
			id: 'power-sacrifice',
			text: 'Limit your own power through binding constitutional restrictions',
			next: 'unity_result',
			effects: { wisdom: 9, charisma: 6 },
			hiddenEffects: {
				sacrifice_type: 'power',
				power_limited: true,
				democratic_commitment: true,
				trust_earned: true
			}
		},
		{
			id: 'magic-sacrifice',
			text: 'Seal your blood magic to prove you seek cooperation, not dominance',
			next: 'unity_result',
			effects: { courage: 10, wisdom: 7 },
			hiddenEffects: {
				sacrifice_type: 'magic',
				magic_sealed: true,
				ultimate_trust: true,
				lyra_respect: 30,
				painful_sacrifice: true
			}
		},
		{
			id: 'freedom-sacrifice',
			text: 'Bind yourself to council\'s will - you serve, not rule',
			next: 'unity_result',
			effects: { wisdom: 8, charisma: 7 },
			hiddenEffects: {
				sacrifice_type: 'freedom',
				servant_leader: true,
				humble_authority: true,
				sage_affection: 30
			}
		},
		{
			id: 'shared-sacrifice',
			text: 'Ask companions to share the burden - distribute sacrifice among allies',
			next: 'unity_result',
			effects: { charisma: 9, wisdom: 6 },
			hiddenEffects: {
				sacrifice_type: 'shared',
				companion_sacrifices: true,
				unity_in_action: true,
				all_companions_bonded: true
			}
		}
	]
};

export const UnityResult: Scene = {
	id: 'unity_result',
	text: `Your sacrifice resonates through the chamber. The debate shifts from skepticism to consideration. Companions rally to support you, each speaking from their unique perspective about why unity matters.

Seraphine argues for the nobility. Sage convinces the reformists. Kieran's honor sways the military. Lyra speaks for magical races. Finn brings dwarven pragmatism. Even Shadow steps forward, their redemption arc complete, testifying to your capacity for forgiveness and change.

The vote is called. Representatives from every faction and race cast their judgment.

The tension is unbearable as votes are counted...`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: {
					all_races_united: true,
					sacrifice_type: 'magic',
					companions_advocate: true
				}
			},
			text: `The result is overwhelming - nearly unanimous support. Your willingness to sacrifice your own power convinced even the skeptics. The magical races see genuine partnership. The factions see compromise. The people see a leader who serves rather than demands.

When the final tally is announced, the chamber erupts in applause and celebration. Elves embrace dwarves. Fae dance with humans. Dragons roar approval. Marina's tears of joy are visible even in her merfolk form.

"We've done it," Lyra whispers, tears streaming. "After thousands of years of division, we've actually done it."

This is the moment history will remember - when all peoples of the realm chose cooperation over conflict. And it happened because of you.`
		},
		{
			conditions: {
				hasHiddenAttributes: {
					loyalist_faction_rep: 20,
					reformist_faction_rep: 20,
					military_faction_rep: 20
				}
			},
			text: `The vote is close - very close. Some factions resist change. Some magical races remain skeptical. But slowly, painfully, a majority emerges.

It's not the overwhelming mandate you hoped for, but it's enough. The compromise passes by narrow margin.

"This is just the beginning," Sage warns quietly. "Building unity will be harder than voting for it. We'll need constant effort, constant bridge-building."

You know he's right. The challenge isn't winning the vote - it's making the dream reality over years and decades to come.`
		}
	],
	choices: [
		{
			id: 'unity-success',
			text: 'Unity achieved - celebrate the new era (requires sufficient faction support)',
			next: 'compromise_achieved',
			effects: { charisma: 10, wisdom: 8 },
			hiddenEffects: {
				unity_successful: true,
				best_ending_achieved: true,
				golden_age_begins: true
			}
		},
		{
			id: 'unity-partial',
			text: 'Partial unity - compromise with ongoing tensions',
			next: 'compromise_achieved',
			effects: { wisdom: 7, charisma: 5 },
			hiddenEffects: {
				unity_partial: true,
				fragile_peace: true,
				work_continues: true
			}
		},
		{
			id: 'unity-failure',
			text: 'Unity fails - civil war erupts',
			next: 'kingdom_fractures',
			effects: { courage: 8 },
			hiddenEffects: {
				unity_failed: true,
				civil_war_begins: true,
				tragic_failure: true
			}
		}
	]
};

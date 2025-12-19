import { Scene } from '../../story-manager';

const grandCouncil = `With the Crystal Heart restored and all five magical races aligned with you through diplomacy and respect rather than conquest or coercion, the moment of truth approaches like a storm front visible on the horizon - inevitable, transformative, charged with potential energy that could manifest as lightning or life-giving rain. In the grand council chamber that has witnessed centuries of human politics but never anything approaching this scope of inclusivity, representatives of every faction - human nobles with their ancestral banners and rigid protocol, common folk with calloused hands and fierce eyes, military commanders in polished armor, reformist intellectuals with scrolls full of constitutional theory, and magical beings whose very presence makes the air shimmer with otherworldly power - gather for the final decision that will reshape the realm's future or tear it apart in civil war. The chamber itself seems to hold its breath, ancient stones watching to see if this experiment in radical cooperation will succeed or collapse into the violence that has defined so much of history.`;

const crossroads = `The kingdom stands at a crossroads with paths diverging in directions so fundamentally different that choosing one means forever closing doors to others, and the weight of that finality presses down on everyone assembled with almost physical force. Loyalist nobles demand traditional monarchy restored in full glory with you as absolute sovereign in the ancient mode, citing centuries of precedent and the stability that comes from clear hierarchical authority that everyone understands and accepts. Reformists push for democratic revolution that would reduce you to ceremonial figurehead while elected councils and parliaments hold real power, arguing with evangelical fervor that the age of inherited authority died with the old world and must not be resurrected. The military faction wants strong centralized control that prioritizes order and defensive capability over ideological purity or individual liberty, their generals speaking in measured tones about threats that require decisive command structures rather than committee deliberation. And through actions and diplomacy that surprised everyone including yourself, you've proven that magical races deserve not just acknowledgment or tolerance but genuine voice and power in whatever system emerges - a position that makes you radical in ways none of the traditional human factions ever imagined.`;

const companionViews = `Seraphine speaks for tradition with the eloquence of one raised in diplomatic circles but tempered now by genuine understanding of tradition's value rather than blind adherence, her arguments balancing respect for what worked in the past with openness to necessary evolution. Sage argues for democracy with intellectual passion that makes their voice crack with emotion usually hidden behind scholarly detachment, citing historical precedents and political theory but also raw belief that people deserve to shape their own governance. Kieran represents military concerns with the practical wisdom of someone who has seen both the necessity of clear command structures in crisis and the danger of unchecked military authority that answers to no civilian oversight. Lyra advocates for magical race inclusion with two centuries of perspective on human-magical relations and the quiet hope that this time, finally, things might actually change in meaningful rather than cosmetic ways. Each companion you've bonded with through trials and trust looks to you now with expressions mixing hope and anxiety, trusting your wisdom while understanding that no choice will satisfy everyone and whatever you decide will shape not just political structures but the future of your relationships with them.`;

const definingChoice = `The choice you make now in this moment that feels simultaneously endless and terrifyingly brief will define not just your reign - assuming you even choose to reign in traditional sense rather than serving in some other capacity - but the future of the entire realm for generations stretching beyond your lifetime into centuries you will never see but whose inhabitants will live in world shaped by what you decide today. Historians will analyze this moment. Children not yet born will learn about your choice in lessons that frame it as either visionary or catastrophic depending on how events unfold. The weight of that responsibility feels almost crushing, and yet you cannot avoid it, cannot delegate it, cannot delay it further. The realm needs decision. History demands answer. Everyone assembled watches and waits for you to shape tomorrow.`;

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
			text: `The chamber is unlike anything in history - a gathering that would have been dismissed as impossible fantasy even five years ago now made manifest reality through your diplomacy and willingness to see beyond human-centric worldview. Humans with their varied factions and passionate disagreements share space with elves whose grace makes even stillness look like dance, dwarves whose practical wisdom cuts through rhetorical nonsense, dragons whose presence fills the room with barely contained power and ancient perspective, fae whose mercurial nature manifests in constantly shifting expressions, and merfolk in specially prepared water-filled gallery spaces that allow them to observe without leaving their native element. The representatives of five magical races watch intently with eyes that have seen centuries or millennia of human politics and carry understandable skepticism about whether this time will truly be different from all the other moments when humans promised change then defaulted to familiar patterns.

"This is unprecedented," Lyra says with wonder that cracks her usually composed diplomatic voice, two hundred years of experience unable to provide context for something genuinely new in her long lifetime. "Never in recorded history have all races gathered in genuine cooperation rather than temporary alliance against common threat or negotiated ceasefire after exhausting war. What you've built here through patient bridge-building and willingness to see us as equals rather than tools or obstacles - this could change everything. Not just politically but fundamentally, in how we understand our relationship to each other and the world we share."

Thorne's human form stands beside the Dragon Matriarch, symbolic positioning that speaks volumes about draconic unity despite their usual territorial independence. "We've watched human kingdoms rise and fall for millennia like waves on shores that outlast them," Thorne rumbles, voice carrying harmonics that vibrate through stone and bone. "Watched rulers promise change then perpetuate old patterns because change is hard and tradition is comfortable. But this... this could be different. You've earned our attention, young one. Now prove you've earned our trust."

Finn grins broadly, dwarven pragmatism cutting through dramatic tension with characteristic directness. "Aye, if we don't mess it up with politics and posturing! We've got all the pieces here for something grand or something catastrophic. Which one we build depends on whether we can set aside pride long enough to actually work together."

The tension is palpable but so is the hope - a fragile, precious thing that feels like spring growth pushing through winter soil, vulnerable to frost but irrepressible in its determination to reach toward light. You have the chance to create something truly revolutionary if you can unite these disparate voices with their different needs and perspectives into one vision that honors diversity rather than demanding conformity.`
		},
		{
			conditions: { hasFlags: ['all_companions_loyal:true'], hasHiddenAttributes: { companion_bonds: 300 } },
			text: `${grandCouncil}

Your companions stand together in formation that looks less like political alliance and more like family gathered for important moment - a testament to the bonds you've forged through shared danger and vulnerability, through moments when masks dropped and real selves emerged. Seraphine, once focused only on noble politics and dismissive of common folk as irrelevant to real power dynamics, speaks warmly with Rowan about protecting commoners and ensuring new systems serve the vulnerable rather than just redistributing privilege among elites. Kieran and Shadow, once enemies who would have killed each other on sight given opportunity, stand side by side with easy familiarity that speaks of trust earned through honesty about past mistakes and commitment to different future. Lyra and Finn debate magic and craft with mutual respect that bridges not just racial differences but fundamentally different worldviews - elven connection to natural magic and dwarven pragmatic engineering finding unexpected common ground in problem-solving.

"Look at them," Vale whispers with wonder and affection warming their voice, standing close enough that you feel their breath on your ear. "You brought all of us together. Different backgrounds, different species, different beliefs about how world works and what matters most. We should be arguing, fracturing along factional lines like everyone else in this chamber. But we're not. If we can work together despite our differences - if we can find unity without demanding uniformity - maybe the whole kingdom can. Maybe you've already proven the concept on small scale, and now we just need to scale it up."

${crossroads}

But your companions aren't arguing - they're collaborating. Each offers perspective shaped by unique experience, trusts the others enough to listen rather than just waiting to speak, seeks compromise that honors multiple truths rather than insisting only one faction holds monopoly on wisdom.

${definingChoice}`
		},
		{
			conditions: { hasHiddenAttributes: { shadow_magic_learned: true, corruption_risk: 3 } },
			text: `As you stand before the assembly with all eyes fixed on you expectantly, you feel the shadow magic stirring within you like predator sensing opportunity, corruption that you've carried since that moment of desperate need now whispering seductive promises directly into your thoughts with voice that sounds almost like your own darker impulses. Its whispers promise easy solutions that would bypass messy democracy and complicated compromise - domination through magical superiority, control through fear rather than cooperation, power that takes what it wants rather than negotiating for permission. "You could simply take power," it murmurs with logic that sounds almost reasonable when you're exhausted from endless political maneuvering. "Why negotiate endlessly with factions that will never fully agree when you could command obedience? Why beg for cooperation when you could compel it? You have the strength. Use it."

Shadow watches you closely from their position among your companions, recognizing the signs in your posture and the way your eyes occasionally lose focus as internal struggle plays out. They step closer with deliberate movement, voice pitched low enough for your ears alone but carrying intensity that cuts through magical whispers. "I see it in your eyes. The darkness calling with promises that feel like wisdom. I know that path intimately - lived it for years believing I was being pragmatic, being strong, being realistic." Their hand touches your shoulder with pressure that grounds you in physical reality rather than seductive fantasy of effortless control. "It ends in loneliness and regret. In being feared rather than loved, obeyed rather than trusted. Don't become what I was. You're better than that. You've proven you're better than that every time you chose the harder right over the easier wrong."

The choice weighs heavily with your very soul pulled in opposite directions: embrace the power you've accumulated and use it to impose the solution you think is best, or trust in cooperation despite its difficulty and inefficiency, believing that consensus earned is stronger than obedience compelled.`
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
				'final_faction_choice:unity': true,
				revolutionary_vision: true
			}
		},
		{
			id: 'loyalist-path',
			text: 'Support traditional monarchy with measured reforms',
			next: 'traditional_coronation',
			effects: { wisdom: 6, charisma: 5 },
			hiddenEffects: {
				'final_faction_choice:loyalist': true,
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
				'final_faction_choice:reformist': true,
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
				'final_faction_choice:military': true,
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
				'final_faction_choice:abdication': true,
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
				'final_faction_choice:magical': true,
				archmage_path: true,
				magical_renaissance: true
			}
		}
	]
};

const chamberSilence = `You step forward into the center of the chamber where light from high windows converges in pool of illumination that feels almost theatrical in its timing, and the entire chamber falls silent with suddenness that makes the absence of sound feel louder than the previous cacophony of debate - the kind of silence that precedes either triumph or disaster with no middle ground possible. Every eye - human brown and green and blue, elven silver and gold, dwarven earth-tones, draconic vertical slits, fae kaleidoscope shifts, merfolk dark depths - watches you with intensity that makes your skin prickle with awareness of scrutiny. This is the moment that will define your legacy, the speech that historians will quote for centuries as either visionary call to unity or delusional fantasy that preceded civil war. Your mouth feels dry. Your heart pounds. But your voice, when it comes, rings clear.`;

const centuriesDivided = `"For centuries," you begin, your voice carrying through the hall with acoustics designed by architects long dead to amplify royal pronouncements to every corner without shouting, "we've been divided by walls we built ourselves and then forgot we had agency in constructing. Humans fought humans in civil wars that killed thousands over questions of succession and faction ideology that future generations would barely remember or care about. Magical races isolated themselves from mortals not because they inherently desired separation but because humans gave them excellent reasons to mistrust our intentions and capacity for coexistence. Factions within factions within factions, each claiming their way was the only way and everyone else was not just wrong but dangerously wrong, threat to be eliminated rather than partner to negotiate with. We've spent so much energy fighting each other that we've had little left for actually solving problems or building anything lasting."`;

const walkedAmong = `You look around the chamber with deliberate slowness, meeting eyes both familiar and strange, making contact with nobles and commoners, humans and magical beings, letting the pause stretch until everyone feels personally seen before continuing. "But I've walked among all of you. Not as ruler from above looking down at subjects, but as individual moving through communities and trying to understand rather than just command. I've earned the trust of magical races through respect that honored their autonomy and dignity rather than dominance that treated them as resources to exploit or problems to manage. I've seen the best of every faction's vision - the stability and wisdom in tradition that Loyalists preserve, the justice and representation that Reformists fight for, the order and protection that military structure provides. And I know, in my bones with certainty that transcends logic or political calculation, that none of us can build the future alone. We need each other. Not in abstract theoretical sense but in practical immediate reality."`;

const murmurs = `Murmurs ripple through the crowd like wind through wheat field - some approving with nods and whispered affirmations to neighbors, some skeptical with crossed arms and narrowed eyes that telegraph doubt without words, some simply confused because what you're proposing exists outside their framework for understanding how power works. The sound builds and recedes in waves of reaction processing.`;

const newProposal = `"I propose a new system," you continue with voice gaining strength from conviction even as hands tremble slightly with nervousness you hope isn't visible from audience distance. "Constitutional monarchy with elected council that shares legislative power. Not pure democracy that erases all tradition overnight, not absolute monarchy that ignores popular will, but hybrid that takes wisdom from both models. Military reformed to serve all people equally rather than functioning as noble faction's private enforcement arm, with clear civilian oversight and constitutional limits on martial authority. And - this is crucial, this is where we break from all precedent - magical races given equal representation. Not as subjects who petition for favors, not as foreign entities we negotiate treaties with, but as partners with seats at governing table and genuine voice in decisions that affect them. Not token representation that performs inclusivity without delivering power, but real equality that means their votes matter as much as human nobles'."`;

const explosiveDebate = `The room explodes in debate with volume that physically hits you like wave - some cheer with genuine enthusiasm or desperate hope for change, others object loudly with voices raised in outrage or fear, still others simply shout to be heard over the chaos without clear position beyond desire to participate in historic moment. Conservative nobles sputter about destroying tradition and abandoning everything their ancestors built. Reformist radicals argue you haven't gone far enough and constitutional monarchy still preserves too much hereditary privilege. Military commanders debate whether civilian oversight will hamstring necessary quick response to threats. Magical race representatives exchange glances trying to determine if this is genuine offer or elaborate performance. The success of this vision depends on everything you've built through months or years of relationship-building - every conversation that established trust, every choice that demonstrated character, every bridge between worlds that proved cooperation was possible rather than just idealistic fantasy.`;

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

Moonwhisper rises from her seat with fluid grace that makes the movement look like choreographed dance, elven representative whose opinion carries weight with all magical races because of her diplomatic skill and century-spanning reputation for wisdom. "You earned our trust when others demanded our service and compliance," she says clearly, voice carrying musical quality that makes even political speech sound like poetry. "The dragons, the elves, the fae, the merfolk, the dwarves - we all chose to stand with you not because you compelled us through threat or bribed us through promises, but because you saw us. Really saw us as people with inherent worth rather than as tools to use or obstacles to overcome. That recognition of our personhood matters more than any treaty or alliance of convenience."

The Dragon Matriarch's voice echoes with harmonics that make the stones themselves vibrate in sympathy: "This heir proved themselves worthy through action, not birthright. Through respecting our autonomy rather than demanding our submission. They understand that respect flows both ways - that power given freely is stronger than obedience extracted through force. We have watched human rulers for millennia. This one is... different. Perhaps different enough to succeed where all others failed."

${walkedAmong}

${murmurs}

${newProposal}

The magical race representatives immediately voice support with chorus of affirmation in multiple languages and communication styles - elvish that sounds like song, draconic that rumbles like thunder, fae chiming like bells, merfolk harmonics that vibrate through water and air. Their endorsement sways many skeptical humans who weren't sure about radical restructuring but trust the judgment of ancient beings whose perspective spans centuries.

${explosiveDebate}`
		},
		{
			conditions: { hasFlags: ['reformed_path_confirmed:true', 'fought_for_democracy:true'], hasHiddenAttributes: { commoner_respect: 60 } },
			text: `${chamberSilence}

Elena, the commoner leader whose underground network you encountered during your journey through the city's hidden spaces, stands with posture that broadcasts defiance despite standing in chamber designed to make common folk feel small and insignificant. "I've fought against nobles my whole life," she says bluntly, voice lacking courtly polish but carrying authenticity that resonates more powerfully than refined rhetoric. "Fought their taxes that starved us, their laws that criminalized poverty, their casual cruelty that treated us as less than human. But this one is different. This heir listened when others just gave orders. They've proven they care about more than maintaining noble privilege - they actually see us as people whose lives and voices matter. They shared power willingly rather than waiting for us to take it by force."

Other common folk in the chamber nod vigorously, expressions mixing surprise that Elena is allowed to speak at all with fierce pride in seeing someone like them address the assembly as equal. "They helped us when no one else would. Protected us when nobles would have let us die for political convenience. Gave us voices in decisions that affect our lives. That's not just pretty words - that's action proving character."

${centuriesDivided}

"And I've learned," you add with voice carrying emotion that cracks slightly on the words, "that true strength comes from the people. Not from crowns that are just metal and jewels signifying inherited authority. Not from bloodlines that are accidents of birth we pretend indicate divine favor. But from the collective will and wisdom of everyone working together, combining perspectives and experiences and insights that no single person or faction could achieve alone."

${murmurs}

${newProposal}

The reformist faction erupts in cheers that shake the rafters. Many moderates who were unsure look convinced by the combination of idealistic vision and practical details, by the endorsement from people they respect.

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
				'speech_style:passionate': true,
				'unity_approach:emotional': true
			}
		},
		{
			id: 'logical-argument',
			text: 'Present logical, practical arguments for cooperation',
			next: 'personal_sacrifice',
			effects: { wisdom: 8 },
			hiddenEffects: {
				'speech_style:logical': true,
				'unity_approach:rational': true
			}
		},
		{
			id: 'call-companions',
			text: 'Call on companions to testify to your character and vision',
			next: 'personal_sacrifice',
			effects: { charisma: 10 },
			hiddenEffects: {
				'speech_style:testimonial': true,
				'unity_approach:personal': true,
				companions_advocate: true
			}
		},
		{
			id: 'demonstrate-magic',
			text: 'Demonstrate unified magic from all races working through you',
			next: 'personal_sacrifice',
			effects: { courage: 8, wisdom: 6 },
			hiddenEffects: {
				'speech_style:demonstration': true,
				'unity_approach:magical': true,
				spectacular_display: true
			}
		}
	]
};

const elenaChallenge = `As debate rages with volume that makes coherent thought difficult - voices overlapping in argument and counter-argument, factions shouting past each other rather than listening, the messy reality of democracy in action - a voice cuts through the chaos with clarity and directness that silences other speakers. It's Elena, leader of the common people's movement whose underground network you encountered during your investigation of the city's hidden communities, who has earned respect through organizing mutual aid networks that kept people alive when official systems failed them.

"Words are beautiful, Your Highness," she says with tone that manages to be simultaneously respectful and challenging - not unkindly, without mockery or dismissal, but with the earned authority of someone who has heard too many beautiful promises from rulers that evaporated when confronted with inconvenient reality. "But we've heard beautiful words from rulers before. Grand visions. Inspiring speeches. Promises of change and justice and new systems that would finally, finally work for everyone instead of just the privileged. And then nothing actually changed except which nobles held which positions of power. What will you sacrifice to prove this vision is real and not just another rhetorical performance? What are you willing to give up - personally, tangibly, painfully - for this dream of unity?"`;

const questionHangs = `The question hangs in the air like smoke that won't dissipate, settling over the assembly and demanding answer that words alone cannot provide. She's right - absolutely, uncomfortably right. True leadership requires sacrifice. Words without cost are just noise. The assembly waits for your answer with intensity that makes the silence feel thick and heavy as physical substance. This is the moment where theory meets reality, where vision requires commitment.`;

const companionsWatch = `Your companions watch with varied expressions that map their different relationships to you and different fears about what you might offer - concern mixing with trust, fear mixing with faith. Your romance partner, if you have one, looks especially concerned because they know better than anyone what sacrifice might cost you, have seen your vulnerabilities when armor comes off and real self emerges.`;

const dragonDemand = `"Power demands price," an ancient voice - the Dragon Matriarch speaking with weight of millennia behind every word - agrees with rumble that vibrates through stone floor and into your bones. "We dragons understand this truth that shorter-lived races sometimes forget: authority without accountability is tyranny, vision without sacrifice is fantasy, change without cost is impossible. Show us you're worthy of the trust we place in you. Prove that you understand power is responsibility, not privilege. Demonstrate that you're willing to pay the price that leadership requires."`;

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

Before you can answer - before you can even fully process what you might offer or what would be meaningful enough to satisfy legitimate skepticism - your companions step forward as one in movement that looks choreographed but is actually spontaneous expression of bonds forged through shared struggle. Seraphine, Vale, Rowan, Kieran, Lyra, Finn, Shadow - all of them moving to stand beside you in physical formation that makes a statement louder than any speech.

"Whatever sacrifice is needed," Vale says with voice carrying absolute conviction that brooks no argument, meeting Elena's eyes directly as equal speaking to equal, "we'll share it. That's what unity means - not one person bearing everything while others watch from safety, but burden shared among all who benefit. If the vision requires cost, we pay it together. If the dream demands sacrifice, we offer it collectively. That's not abstract principle - that's commitment we're making right now in front of everyone."

The assembly watches this display with expressions ranging from moved to skeptical, but even the cynics cannot deny the power of seeing diverse group - noble and commoner, human and elf, warrior and mage, reformed villain and lifelong hero - standing together in genuine solidarity rather than political convenience.

${questionHangs}

${dragonDemand}

But your companions' willingness to share the cost has already proven your point better than any words or theoretical arguments ever could. Unity isn't just word or political structure - it's people choosing to stand together when standing alone would be safer and easier.`
		},
		{
			conditions: {
				hasHiddenAttributes: { lyra_romance: 70 }
			},
			text: `Lyra steps forward before you can answer, moving with elven grace but also with urgency that transcends her usual measured composure - two hundred years of diplomatic patience set aside for moment that demands immediate action. "If sacrifice is needed, I'll share it," she says with voice that carries through chamber despite not being raised, command born of certainty rather than volume. "For two hundred years, I've lived without hope for human-elven unity. Watched attempts at cooperation fail, watched prejudice and fear override reason and compassion, watched the gulf between our peoples grow wider despite efforts to bridge it. If this dream requires cost - if proving it's real demands personal sacrifice rather than just political promises - I'll pay it alongside you."

Her offer is genuine, deeply moving in its simplicity and absolute conviction. The elven delegation watches their representative with expressions mixing surprise at her public commitment to personal sacrifice and respect for her courage in making it. Some human observers who had dismissed her as calculating politician reassess their understanding.

"That's what love means," Lyra continues with vulnerability that feels almost painful to witness in someone usually so controlled, meeting your eyes directly and letting the entire assembly see emotion she would normally guard carefully. "Not just sharing joy and celebrating victories together, but sharing burden and bearing pain together. Whatever price unity demands - whatever cost proving this vision requires - we'll pay it together. You don't carry this alone. You never have to carry anything alone again."`
		},
		{
			conditions: {
				hasHiddenAttributes: { kieran_romance: 70 }
			},
			text: `Kieran's hand moves to his sword hilt - not in threatening gesture but in protective one, the unconscious movement of warrior positioning to defend something precious. "Whatever sacrifice is needed, I'll ensure it's fair and just," he says with steel in voice that makes even hardened military commanders pay attention, authority earned through years of service and proven character rather than inherited rank. "You've proven yourself worthy through action that no amount of noble birth could counterfeit. Through choosing difficult right over easy wrong, through protecting people who couldn't protect themselves, through honor that goes deeper than following orders or maintaining appearances. I won't let anyone demand more than is right, won't let political theater require sacrifice that crosses from meaningful to cruel."

His uncle, General Blackwood, speaks up from the military section with voice carrying challenge and testing that only family can employ. "You'd defend them even against me, nephew? Against your own blood and the authority I represent?"

"Especially against you," Kieran replies firmly without hesitation or apology, meeting his uncle's eyes with expression mixing love and disappointment that makes the moment intensely personal despite public setting. "Because you taught me what honor means, even if you've forgotten those lessons yourself in pursuit of power and control. They've shown me what true honor looks like in action rather than just theory - that it's not about blind obedience or maintaining hierarchy, but about protecting the vulnerable and standing for what's right even when it costs you. I'd lay down my life for them without hesitation, and I'd make that choice again knowing the cost because some things matter more than safety or advancement or family approval."`
		}
	],
	choices: [
		{
			id: 'wealth-sacrifice',
			text: 'Redistribute royal wealth to rebuild communities',
			next: 'unity_result',
			effects: { charisma: 7, wisdom: 5 },
			hiddenEffects: {
				'sacrifice_type:wealth': true,
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
				'sacrifice_type:power': true,
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
				'sacrifice_type:magic': true,
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
				'sacrifice_type:freedom': true,
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
				'sacrifice_type:shared': true,
				companion_sacrifices: true,
				unity_in_action: true,
				all_companions_bonded: true
			}
		}
	]
};

export const UnityResult: Scene = {
	id: 'unity_result',
	text: `Your sacrifice resonates through the chamber like bell that continues ringing long after initial strike, the tangible proof of commitment cutting through skepticism and cynicism that words alone could never penetrate. The debate shifts from fundamental skepticism about whether unity is even possible to practical consideration of how to implement it - from "should we" to "how do we" in transformation that feels miraculous even as it happens. Companions rally to support you with speeches that carry weight precisely because they come from people who know you intimately rather than political allies making calculated endorsements, each speaking from their unique perspective about why unity matters and why they believe you can actually achieve it.

Seraphine argues for the nobility with eloquence that makes traditional values sound compatible with progressive change rather than opposed to it. Sage convinces the reformists that constitutional monarchy isn't betrayal of democratic ideals but practical compromise that achieves most of their goals while avoiding violent revolution's unpredictable chaos. Kieran's honor and military credibility sway the military faction who respect his service record and trust his judgment about whether civilian oversight can coexist with effective defense. Lyra speaks for magical races with authority that comes from centuries of experience and genuine hope that this time might actually be different. Finn brings dwarven pragmatism that cuts through ideological arguments to focus on what will actually work in practice rather than just theory. Even Shadow steps forward with visible courage, their redemption arc complete in this public testimony, speaking to your capacity for forgiveness and understanding that people can change when given genuine opportunity rather than just punishment.

The vote is called with formal ceremony that makes the moment feel appropriately historic. Representatives from every faction and race cast their judgment through various methods - some verbal declarations, some written ballots, some magical signaling that glows in colors representing their choice. The diversity of voting methods itself symbolizes the cooperation you're trying to build.

The tension is unbearable as votes are counted with deliberate slowness by neutral observers, each announcement shifting the balance slightly, the outcome remaining uncertain until final tallies are announced...`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: {
					all_races_united: true,
					sacrifice_type: 'magic',
					companions_advocate: true
				}
			},
			text: `The result is overwhelming - nearly unanimous support that makes the announcement feel anticlimactic after all the tension and uncertainty, like storm breaking into sunshine so suddenly you blink at the brightness. Your willingness to sacrifice your own power - to seal away the magic that makes you special and powerful in favor of being ordinary and equal - convinced even the most hardened skeptics who had assumed this was elaborate performance leading to eventual power grab. The magical races see genuine partnership in your willingness to make yourself vulnerable by giving up advantage. The factions see compromise and humility in your choice to limit yourself rather than expanding authority. The people see a leader who serves rather than demands, who understands that power is responsibility rather than privilege.

When the final tally is announced with formal ceremony that emphasizes the historic nature of this moment, the chamber erupts in applause and celebration that starts tentatively then builds like avalanche - cautious at first because people don't quite believe it's real, then overwhelming as reality sinks in. Elves embrace dwarves with tears streaming down faces that usually maintain careful composure. Fae dance with humans in impromptu celebration that ignores protocol and decorum. Dragons roar approval with sound that shakes the building and probably carries for miles. Marina's tears of joy are visible even in her merfolk form in the water gallery, her usually stoic demeanor cracking completely as she witnesses something she never thought she'd see in her lifetime.

"We've done it," Lyra whispers with voice breaking on the words, tears streaming down her face openly despite two hundred years of diplomatic training in emotional control. "After thousands of years of division and missed opportunities and failures that became precedents for assuming unity was impossible - we've actually done it. Not perfect unity, not agreement on everything, but genuine commitment to work together despite differences. That's... that's more than I ever hoped for."

This is the moment history will remember - when all peoples of the realm chose cooperation over conflict, partnership over domination, difficult unity over easy division. And it happened because of you, because of choices you made, because of relationships you built and bridges you constructed and trust you earned through action rather than words. This is your legacy.`
		},
		{
			conditions: {
				hasHiddenAttributes: {
					loyalist_faction_rep: 20,
					reformist_faction_rep: 20,
					military_faction_rep: 20
				}
			},
			text: `The vote is close - very close, uncomfortably close in way that makes you wonder if you've actually succeeded or just postponed inevitable conflict. Some factions resist change with arguments rooted in fear of unknown or investment in current power structures. Some magical races remain skeptical after centuries of broken promises and performative gestures that never translated to actual equality. Conservative nobles vote against out of genuine belief that tradition keeps society stable. Radical reformists vote against because compromise feels like betrayal of pure ideals. Military commanders worry about weakening command structure at moment of external threat. But slowly, painfully, like ice breaking in spring thaw with creaks and cracks that sound like failure before revealing movement toward warmth - a majority emerges.

It's not the overwhelming mandate you hoped for, not the unanimous affirmation that would have made implementation easy and legitimacy unquestionable. But it's enough. The compromise passes by narrow margin that means constant vigilance will be required, constant bridge-building and trust-earning and demonstration that the vision works in practice rather than just theory. You won the vote but not the hearts of everyone, which means the real work is just beginning.

"This is just the beginning," Sage warns quietly with mix of celebration and caution, coming to stand beside you as the chamber slowly processes what just happened. "Building unity will be harder than voting for it. We'll need constant effort, constant bridge-building, constant willingness to listen to critics and address legitimate concerns rather than dismissing them as obstruction. This isn't victory - this is permission to try. Now we have to prove it was worth trusting us."

You know he's right with certainty that tempers celebration with realistic assessment. The challenge isn't winning the vote - that was just convincing people to take the risk. The real challenge is making the dream reality over years and decades to come, proving through sustained action that unity works better than division, that cooperation achieves more than conflict. This is beginning, not end.`
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

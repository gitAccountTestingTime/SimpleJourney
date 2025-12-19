import { Scene } from '../../story-manager';

const returnToCapital = `The journey back to the capital from Moonwhisper Grove feels different from the journey out. You carry knowledge now—not just magical theory or historical context, but deeper understanding of the forces at work, the stakes involved, the complexity of what you're attempting. Lyra's teachings, Rowan's mediation, the ancient forest's atmosphere... all of it has changed how you see the kingdom's crisis.

Your interaction with Lyra Starsong—whether humble or proud, focused or collaborative—will echo through what comes next. The elves are watching, and your approach to them has signaled what kind of leader you might become. That signal has reached other factions' ears through networks of informants, forest whispers, magical communication channels that operate beyond human control.`;

const capitalArrival = `The capital welcomes you back with a mixture of hope and anxiety. Word has spread further in your absence: the lost heir has returned, has met with the Loyalists, has consulted with ancient elves, has begun the process of claiming their heritage. Every faction now understands that the political landscape is shifting, that the twenty-year stalemate since the Purge is ending, that choices will be made that reshape the kingdom's future.

And everyone wants to influence those choices.`;

const factionSummoning = `Marcus arranges a formal meeting at the safe house, but this time it's different. This isn't a briefing where information is presented and you absorb it passively. This is a decision point—a moment where you must choose direction, declare allegiance, commit to a path that will define your rule and determine who supports you versus who opposes you.

Seraphine has worked diplomatic magic in your absence, extending invitations to representatives from all three major factions. Not the ultimate leaders—Lord Edmund Pembroke of the Reformists and General Kieran Blackwood of the Military won't reveal themselves until you've committed—but significant figures with authority to negotiate on their factions' behalf.`;

const chamberPrepared = `The safe house's sitting room has been transformed again, this time into a formal receiving chamber that wouldn't shame a palace. Seraphine's people have brought in elegant furniture, arranged seating that suggests diplomatic negotiation rather than military briefing, created an atmosphere that communicates you are someone to be courted rather than commanded.

Three chairs sit arranged in an arc facing a fourth—your seat, positioned to suggest authority while remaining accessible. Each chair bears a small banner indicating which faction its occupant represents: deep blue for Loyalists, vibrant green for Reformists, stark red for Military. The symbolism is deliberate and impossible to miss: you will hear from all three, and you will choose.`;

const loyalistRepresentative = `Lady Helena Ashford arrives first, timing carefully calculated to suggest the Loyalists' claim of precedence. She's an older woman, perhaps sixty, carrying herself with the perfect posture and careful grace of lifetime nobility. Her gown is exquisitely tailored in deep blue silk embroidered with silver thread—expensive without being ostentatious, traditional without being outdated, clearly signaling her faction's values through every detail.

She curtsies to you with precise depth—not a subject's deep bow, but a peer's respectful acknowledgment. "Your Highness," she says, voice cultured and warm. "I represent the Loyalist Council, those who have waited twenty years for this moment. For your return."

Seraphine stands beside her, and you can see the connection between them: shared values, mutual respect, decades of working toward common goal. This is Seraphine's mentor, clearly, the woman who likely recruited her into the Loyalist cause and trained her in political sophistication.`;

const loyalistPresentation = `Lady Ashford settles into her chair with elegant economy of movement, then meets your eyes with absolute directness. "The Loyalists offer you what is rightfully yours: recognition as legitimate monarch, full royal authority restored, ancient customs and traditions honored. We have maintained infrastructure in your absence—safe houses, loyal agents, financial resources—all waiting for your command."

Her voice carries conviction without desperation. "We believe the kingdom's crisis stems from loss of legitimate leadership. The Purge didn't just kill your family; it destroyed the magical and political stability that royal authority provided. Restoration requires more than recovering the Crystal Heart fragments. It requires restoring the crown itself—you, taking your rightful place as sovereign ruler."

She pauses, letting that vision settle. "Support us, and you receive forty thousand dedicated followers, extensive resources, political legitimacy that cannot be claimed through military force or democratic process. You become what you were born to be: ruler of Silverwood, bearer of the crown, wielder of authority your ancestors established through centuries of governance."`;;

const reformistRepresentative = `Council Member Dane arrives next, deliberately casual in timing to contrast the Loyalists' calculated precedence. He's younger than Lady Ashford—perhaps forty—dressed in well-made but practical clothing that suggests prosperity without aristocratic pretension. Green vest over white shirt, simple leather boots, minimal jewelry. Everything about his appearance communicates: we're not the old nobility, we're the future.

He doesn't bow or curtsy. Instead, he extends his hand for a handshake—democratic gesture, peer-to-peer interaction, deliberately rejecting aristocratic protocols. "Your Highness," he says with slight irony on the title. "Or perhaps I should simply say: welcome. I represent the Reformist Council, those who believe the kingdom's future lies in transformation rather than restoration."

You notice tension in the room immediately. Lady Ashford's expression has hardened. Seraphine's jaw is tight. The Reformists' very presence here is insult to everything the Loyalists believe.`;;

const reformistPresentation = `Dane settles into his chair with relaxed confidence, completely at ease in ways that noble breeding never achieves—the confidence of someone who earned position through capability rather than inheriting it. "The Reformists offer you something the other factions cannot: genuine legitimacy built on popular support rather than aristocratic tradition or military force."

His voice carries idealistic fervor tempered by pragmatic awareness. "We acknowledge your heritage, your blood magic, your connection to the Crystal Heart. Those are real assets the kingdom needs. But we believe concentrated power in a single bloodline created the vulnerability that led to the Purge. One successful assassination, one magical ritual, and everything collapsed."

He leans forward, intensity building. "We propose constitutional monarchy: you as symbolic leader and magical specialist, but governance shared with an elected council representing all segments of society. The Crystal Heart's fragments distributed among multiple guardians rather than concentrated in royal hands. Power balanced, so no single failure point can destroy everything again."

His eyes meet yours with earnest appeal. "Support us, and you receive fifty thousand followers—merchants, scholars, urban populations, younger generations who remember only chaos and want genuine transformation. You become not a traditional monarch, but something new: a leader who earned authority through wisdom rather than simply inheriting it through blood."`;;

const militaryRepresentative = `Captain Kieran Cross arrives precisely on time—not early like aristocracy claiming precedence, not late like reformers making statements, but exactly when summoned. He's clearly military: late thirties, scarred from combat, moving with disciplined efficiency, wearing formal uniform in stark red and black bearing General Blackwood's insignia. Everything about him communicates order, strength, controlled power.

He salutes—military gesture, not civilian bow or democratic handshake. "Your Highness," he says with clipped formality. "Captain Kieran Cross, representing General Blackwood and the Military Council. I've been authorized to negotiate on the General's behalf."

You notice something in his expression—dutiful professionalism, but beneath it, something more complex. Doubt? Concern? He's following orders, but there's tension in how he carries them out.`;;

const militaryPresentation = `Kieran settles into his chair with military posture—back straight, hands folded, complete attention focused. "The Military faction offers pragmatic solution to immediate threats. The kingdom faces existential crisis: Shadow Beast incursions escalating daily, dimensional rifts expanding, territories becoming uninhabitable. This isn't time for political philosophy or democratic debate. This is time for decisive action."

His voice carries conviction born from witnessing horrors. "General Blackwood proposes temporary military authority to stabilize the situation. Secure the borders, consolidate forces, recover the Crystal Heart fragments through coordinated military operations rather than hoping diplomatic approaches succeed before catastrophe becomes irreversible."

He pauses, and you catch that complex expression again—duty conflicting with personal judgment. "The General offers you honored position in this structure: symbolic leadership, royal authority in magical matters, respected figurehead that legitimizes military governance. In return, you receive thirty thousand trained soldiers, control of military infrastructure, security that neither Loyalists nor Reformists can provide."

Then, more quietly: "And when the crisis is resolved, when the kingdom is stable... transition to whatever governance model proves most effective." But his tone suggests skepticism that Blackwood would ever voluntarily surrender power once claimed.`;;

const allPresentationsComplete = `The three representatives sit in their respective chairs, each having made their case, each watching you with different expressions: Lady Ashford with hopeful certainty that you'll choose correctly, Dane with idealistic appeal for transformation, Kieran with dutiful professionalism masking personal doubts.

Marcus stands beside you, saying nothing but radiating protective presence. Seraphine watches with barely concealed hope that you'll choose the Loyalists. Rowan observes from the corner, expression unreadable but posture tense—they're clearly troubled by being asked to choose among human factions when magical races weren't even invited to this negotiation.`;

const alternativeRealized = `Rowan breaks the silence, voice soft but carrying through the chamber. "Or," they say carefully, "you could reject all three invitations and forge your own path. Visit the magical races directly, build coalition that includes elves, dwarves, dragons—all those who share this realm but have been excluded from human political structures."

The three faction representatives react immediately: Lady Ashford with aristocratic disapproval, Dane with curious interest, Kieran with military assessment of tactical implications. The suggestion that you might not choose any of them clearly hasn't been seriously considered.`;

const companionPerspectives = `Your companions all have opinions, though they express them differently:

Vale—if they're present—watches the Reformist representative with particular intensity, some connection there you can't quite interpret. They lean close and whisper intelligence about each faction's actual strength versus claimed support, warning signs of manipulation, genuine versus performed conviction.

Marcus offers military assessment: "Loyalists have money but limited combat capability. Reformists have popular support but no unified command structure. Military has disciplined forces but questionable long-term loyalty to anyone except Blackwood himself."

Lyra—if she chose to attend, which depends heavily on how you approached her—observes with ancient patience, saying nothing but radiating judgment. She's waiting to see what kind of leader you'll become, whether you'll repeat your ancestors' patterns or demonstrate capacity for genuine transformation.`;

const momentOfChoice = `Marcus lays three formal invitations on the table before you—beautifully crafted documents, each bearing official seals, each representing commitment that will define your rule:

The Loyalist invitation promises traditional restoration, full royal authority, ancient customs honored.

The Reformist invitation offers constitutional monarchy, shared power, democratic reforms.

The Military invitation provides order through strength, strategic consolidation, security first.

Or you could refuse them all and forge independent path, building coalition directly with magical races, creating something unprecedented.

This choice will define your rule—and your story. It will determine who supports you, who opposes you, what challenges you face, and what kind of kingdom you might build if you succeed in restoring the Crystal Heart and surviving the dimensional crisis.

The room waits in suspended breath for your decision.`;

const getFactionChoiceScene = (): string => {
	return `${returnToCapital}\n\n${capitalArrival}\n\n${factionSummoning}\n\n${chamberPrepared}\n\n${loyalistRepresentative}\n\n${loyalistPresentation}\n\n${reformistRepresentative}\n\n${reformistPresentation}\n\n${militaryRepresentative}\n\n${militaryPresentation}\n\n${allPresentationsComplete}\n\n${alternativeRealized}\n\n${companionPerspectives}\n\n${momentOfChoice}`;
};

export const FactionChoicePoint: Scene = {
	id: 'faction_choice_point',
	get text() {
		return getFactionChoiceScene();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['humble:true', 'cultural_humility:true'], hasHiddenAttributes: { lyra_respect: 15 } },
			get text() {
				return `Your humble approach with Lyra Starsong—acknowledging that you had much to learn, showing genuine respect for elven wisdom, accepting instruction without asserting royal privilege—earned deep respect from one of the oldest and most influential magical beings in the kingdom. That respect has rippled outward through networks you're only beginning to understand: forest spirits carrying word, magical races communicating through channels beyond human perception, ancient beings reassessing their stance toward House Silverwood based on your demonstrated character.

${returnToCapital}

Before the formal meeting begins, Lyra pulls you aside. She chose to accompany you back to the capital specifically for this conversation, recognizing its importance. "You showed wisdom in Moonwhisper Grove," she says quietly, luminous eyes holding yours with intensity. "You demonstrated capacity for genuine humility—not performance for political advantage, but authentic acknowledgment of what you don't know, real respect for knowledge possessed by others."

Her ancient hand touches your shoulder briefly—rare gesture of approval from an elf who has seen countless human rulers fail. "Remember that wisdom now, young heir. The factions will try to claim you, to make you theirs, to bind you to their particular vision of the kingdom's future. They will appeal to your pride, your fear, your desire for support. They will make their cases sound inevitable, their paths the only reasonable choice."

She leans closer, voice dropping to whisper that carries weight of centuries. "But you belong to the realm, not to their ambitions. You belong to all who share this land—humans yes, but also elves, dwarves, dragons, all the magical beings whose lives depend on choices you make. The humility you showed me? Apply it here. Choose not the path that flatters your ego or promises easiest route to power, but the path that serves the kingdom's true needs."

${capitalArrival}

${factionSummoning}

${chamberPrepared}

${loyalistRepresentative}

${loyalistPresentation}

${reformistRepresentative}

${reformistPresentation}

${militaryRepresentative}

${militaryPresentation}

${allPresentationsComplete}

Lyra stands in the corner of the chamber—she insisted on observing this meeting, using her influence to gain entry despite faction representatives' objections. Her presence is itself a statement: the magical races are watching, judging, waiting to see if your humility extends beyond private moments into public decisions.

When Rowan suggests forging independent path with magical races, Lyra's expression shifts fractionally—not quite a smile, but definite approval. She's waiting to see if you'll remember the humility you showed her, or if political pressure will push you toward conventional human-centric choices.

${alternativeRealized}

${companionPerspectives}

Lyra's eyes communicate support, but also warning. Your respect for other cultures, your demonstrated humility, your willingness to learn—all of it must guide this choice. If you choose a faction that marginalizes magical races, if you prioritize human politics over the broader realm, you'll prove that your humility was performance rather than genuine character. But if you remember the wisdom she tried to teach...

${momentOfChoice}`;  
			}
		},
		{
			conditions: { hasFlags: ['assert:true', 'prideful_mistake:true'], hasHiddenAttributes: { lyra_respect: -5 } },
			get text() {
				return `Your assertion of authority with Lyra Starsong—claiming that your royal heritage granted you right to magical knowledge, demanding respect based on bloodline rather than earning it through character—created tension that continues to reverberate. Lyra taught you what you demanded to know, because she recognized the kingdom needs your blood magic awakened regardless of your personal failings. But she didn't offer respect, didn't open deeper knowledge, didn't extend the kind of support that transforms political alliance into genuine partnership.

And word has spread through magical communities: the new Silverwood heir is like the old ones. Prideful. Entitled. Believing their blood makes them superior rather than simply capable. The cautious hope that your return might represent genuine transformation has dimmed considerably.

${returnToCapital}

Lyra did not accompany you back to the capital. She returned to Moonwhisper Grove immediately after your training concluded, making clear through her absence that she sees no reason to invest further in your political development. Rowan is troubled by this—you can see it in how they avoid eye contact, how their usual easy conversation has become stilted.

${capitalArrival}

${factionSummoning}

${chamberPrepared}

${loyalistRepresentative}

${loyalistPresentation}

Lady Ashford's presentation resonates differently now. Her emphasis on royal authority, on bloodline legitimacy, on inherited right to rule—it all echoes the pride you demonstrated with Lyra. Seraphine watches hopefully, clearly approving of your aristocratic confidence, seeing it as strength rather than flaw.

${reformistRepresentative}

${reformistPresentation}

Dane's critique of concentrated power, his warning about bloodline vulnerability, his call for earned rather than inherited authority—it all feels pointed now. Like he's heard about your interaction with Lyra and is deliberately challenging the attitude you displayed.

${militaryRepresentative}

${militaryPresentation}

${allPresentationsComplete}

Rowan stands apart from the group now, physically distant in ways they weren't before. When they suggest forging independent path with magical races, their voice carries less conviction—like they're offering the option because it should be offered, but don't truly believe you'll take it after demonstrating such pride with Lyra.

${alternativeRealized}

${companionPerspectives}

But you notice Lyra's absence acutely. She's not here to observe, not here to guide, not here to offer elven perspective on these choices. You've lost that counsel through your pride, and the loss shapes this moment in ways you can't fully calculate. The independent path Rowan suggests—building coalition directly with magical races—seems far less viable now that you've alienated one of their most influential representatives.

${momentOfChoice}

Your prideful mistake with Lyra has narrowed your options, made the independent path more difficult. The three human factions remain, watching, waiting to see which form of human-centric politics you'll embrace.`;  
			}
		},
		{
			conditions: { hasFlags: ['ask-crystal:true', 'serious_purpose:true', 'lyra_sees_dedication:true'] },
			get text() {
				return `Your focus on the Crystal Heart when meeting Lyra—asking directly about restoration, demonstrating that you understood the magical crisis as primary concern rather than getting distracted by political posturing—earned respect from someone who has witnessed too many leaders prioritize power over purpose. Lyra recognized in you something rare: genuine dedication to solving the actual problem rather than merely claiming authority.

That recognition matters more than you initially realized. Lyra's approval carries weight throughout magical communities, and her assessment that you possess "serious purpose" has opened doors that pride or political maneuvering never could.

${returnToCapital}

Lyra chose to accompany you back to the capital, a decision that surprises everyone including Rowan. Ancient elves rarely involve themselves directly in human political affairs, preferring to observe from distance and intervene only when absolutely necessary. But your dedication to the Crystal Heart mission convinced her that this moment requires her presence.

Before the faction meeting, she speaks with quiet intensity: "You understand the true stakes, young heir. The Crystal Heart's restoration isn't political goal or symbolic achievement—it's survival imperative for all races. The barrier's failure kills elves as surely as humans when Shadow Beasts tear through dimensional rifts."

Her luminous eyes hold yours with ancient wisdom. "Choose the path that serves the realm's survival, not political convenience. Choose the faction—or forge the independent coalition—that will actually work toward restoring the Heart rather than merely using that mission as justification for seizing power. You've demonstrated dedication to the true purpose. Don't lose that focus now when political pressures mount."

${capitalArrival}

${factionSummoning}

${chamberPrepared}

${loyalistRepresentative}

${loyalistPresentation}

As Lady Ashford speaks about traditional restoration and royal authority, you find yourself listening through Lyra's teaching—evaluating not just political implications, but magical ones. Will Loyalist approach actually facilitate Crystal Heart restoration? Or will their focus on monarchical legitimacy distract from the technical magical work required?

${reformistRepresentative}

${reformistPresentation}

Dane's proposal to distribute Crystal Heart fragments among multiple guardians makes you pause. Lyra taught you about the Heart's unified nature, how it requires synchronization to function. Would democratic distribution render it useless? Or could it create stability the old system lacked?

${militaryRepresentative}

${militaryPresentation}

Kieran's emphasis on securing fragments through military operations raises tactical questions. Speed versus diplomacy. Force versus cooperation. What approach actually serves the mission versus merely serving Blackwood's ambitions?

${allPresentationsComplete}

Lyra stands with Rowan, both watching you with confidence born from recognizing your dedication. When Rowan suggests the independent path, Lyra nods slightly—approval of the option being presented, acknowledgment that it might best serve the Crystal Heart mission by incorporating magical races' knowledge and power from the beginning.

${alternativeRealized}

${companionPerspectives}

Lyra's presence itself is statement: she trusts your purpose enough to invest her time and political capital in supporting you. Her eyes communicate clearly—remember what matters. Remember why you're doing this. Choose the path that serves the mission, not the path that flatters your ego or promises easiest route to conventional power.

${momentOfChoice}`;  
			}
		},
		{
			conditions: { hasFlags: ['rowan-help:true', 'team_approach:true', 'cultural_awareness:true'] },
			get text() {
				return `Your collaboration with Rowan to bridge cultural gaps when meeting Lyra—asking for their mediation, acknowledging your own limitations in understanding elven perspectives, demonstrating willingness to work through cultural differences rather than bulldozing over them—impressed everyone who witnessed it. This wasn't weak leadership seeking approval; it was wise leadership recognizing that effective rule requires incorporating diverse perspectives, especially when navigating relationships with peoples whose cultures differ fundamentally from human norms.

Rowan's trust in you has deepened profoundly. They've spent twenty years walking between human and elven worlds, often feeling like they fully belonged to neither. Watching you actively work to bridge those worlds, valuing their mediation, treating cultural awareness as strength rather than weakness—it's given them hope that genuine cooperation might actually be possible.

${returnToCapital}

The journey back is different because of Rowan's renewed energy. They talk excitedly about possibilities: "If you approach all the factions this way—not just demanding loyalty but actually working to understand their perspectives, incorporating their legitimate concerns, building coalition through genuine partnership rather than dominance—you could create something unprecedented."

Their eyes shine with idealism tempered by hard-earned realism. "The kingdom has never had a leader who valued collaborative approach over authoritarian control. Even the best Silverwood monarchs ultimately believed they knew best, that their royal wisdom trumped other perspectives. But you... you might actually be different."

${capitalArrival}

${factionSummoning}

${chamberPrepared}

${loyalistRepresentative}

${loyalistPresentation}

As Lady Ashford speaks, Rowan leans close and whispers context: "She genuinely believes in restoration, but her vision is inherently hierarchical. Loyalists value tradition, which means maintaining structures where some voices matter more than others. Not necessarily malicious, but limiting."

${reformistRepresentative}

${reformistPresentation}

Rowan adds quietly: "Reformists talk good theory about representation, but notice how their proposal still centers humans? Constitutional monarchy, elected councils—all human institutions. They're not actively hostile to magical races, but we're still afterthought in their vision."

${militaryRepresentative}

${militaryPresentation}

Rowan's whisper carries edge now: "Military faction is most concerning for magical races. Blackwood sees non-humans as strategic assets or potential threats, not as people with legitimate sovereignty. His 'order through strength' historically means suppressing anyone who challenges human authority."

${allPresentationsComplete}

Rowan meets your eyes with deep trust when they suggest forging independent path. This isn't just offering political option—this is offering partnership, offering to help you build something genuinely new. "Whatever you choose, I'm with you," they say, voice carrying conviction earned through your demonstrated respect for their mediation. "But remember—you don't have to pick their boxes. We can forge something new together. Something that actually includes everyone who shares this realm."

${alternativeRealized}

${companionPerspectives}

Lyra—if she came, which is more likely given your collaborative approach—stands beside Rowan, and the two exchange glances that suggest they've discussed this moment extensively. Your team approach has created genuine partnership between them, coordination that could become foundation for broader magical race coalition if you choose that path.

${momentOfChoice}

Rowan's trust, your demonstrated cultural awareness, the collaborative approach you've modeled—all of it has prepared you for this moment. You could choose a human faction and try to reform it from within. Or you could choose the independent path and build coalition that actually embodies the collaborative principles you've demonstrated. The choice is yours, but you make it with more genuine options than most Silverwood heirs have ever possessed.`;  
			}
		},
		{
			conditions: { hasHiddenAttributes: { vale_trust: 25 } },
			get text() {
				return `${returnToCapital}

${capitalArrival}

${factionSummoning}

But before the formal meeting begins, Vale pulls you aside. Their expression is serious in ways you've rarely seen—the playful charm stripped away, revealing someone genuinely troubled, someone wrestling with confession they know will change everything.

"I need to tell you something," they say quietly, checking to ensure you're alone. "I should have told you from the beginning, but I... I was following orders, and then it became complicated, and now..."

They take a breath, meeting your eyes with vulnerable honesty. "I'm a Reformist spy. I have been from the beginning. My recruitment to your group, my companionship, my presence in your inner circle—all of it was arranged by the Reformist Council. They wanted someone close to you, someone who could influence your decisions, someone who could convince you to support democratic transformation rather than traditional restoration or military authority."

The confession hits like physical blow. Vale—your companion, possibly your friend, perhaps even something more—has been reporting on you, manipulating you, serving agenda you didn't know existed.

But then they continue, voice rough with emotion: "But I'm also genuinely your friend. That part wasn't an act. The time we've spent together, the conversations we've had, the bond we've formed—that's real. I started this assignment as political operative following orders. Somewhere along the way, I became someone who actually cares about you as person, not just as political asset."

They squeeze your hand, desperate for you to understand. "The Reformists want me to convince you to support democracy. And honestly? I still think it's the right choice for the kingdom. I believe in what they're trying to build—genuine representation, distributed power, government that serves people rather than demanding their service. But I won't manipulate you. I won't use our relationship as leverage to push you toward my faction's agenda."

Vale's eyes are pleading now. "Whatever you choose in there—Loyalists, Reformists, Military, or independent path—I'm with you. I'll face whatever consequences come from the Reformist Council for failing to deliver your loyalty. Because you matter more to me than political success. Your friendship, your trust—I needed you to know the truth before you decided. I needed you to make this choice with full information, even if that truth costs me everything."

The revelation adds immense weight to the decision ahead. Can you trust Vale after this confession? Should their advocacy for Reformist ideals be dismissed as manipulation, or respected as genuine belief? And what does it mean that they chose to confess rather than continuing the deception?

${chamberPrepared}

${loyalistRepresentative}

${loyalistPresentation}

${reformistRepresentative}

${reformistPresentation}

You watch Dane with new awareness, wondering if he knows about Vale's confession, if this presentation is coordinated with your companion's revelation, if everything is more complicated than it appears.

${militaryRepresentative}

${militaryPresentation}

${allPresentationsComplete}

${alternativeRealized}

${companionPerspectives}

Vale stands apart from the faction representatives, no longer advocating for Reformists despite their personal beliefs, letting you make this choice without pressure. Their confession, their willingness to face consequences for honesty—it's given you something rare in political negotiations: genuine information about hidden agendas, real understanding of forces at work.

${momentOfChoice}

You make this choice knowing that Vale was planted to influence you, knowing that other factions likely have their own methods of manipulation, knowing that trust is complicated and political relationships are rarely what they seem. But also knowing that Vale chose honesty when deception would have been easier. That truth shapes your decision in ways you're still processing.`;  
			}
		}
	],
	choices: [
		{
			id: 'loyalists',
			text: 'Pledge to the Loyalists: "I accept your support and commit to traditional restoration of House Silverwood."',
			next: 'loyalist_path_start',
			effects: { courage: 3, charisma: 3 },
			hiddenEffects: {
				'faction_choice:loyalist': true,
				loyalist_rep: 50,
				reformist_rep: -20,
				military_rep: 10,
				seraphine_trust: 25,
				sage_affection: -15,
				traditional_ruler: true
			}
		},
		{
			id: 'reformists',
			text: 'Support the Reformists: "I choose constitutional monarchy—shared power and democratic transformation."',
			next: 'reformist_path_start',
			effects: { wisdom: 4, charisma: 3 },
			hiddenEffects: {
				'faction_choice:reformist': true,
				loyalist_rep: -15,
				reformist_rep: 50,
				military_rep: -10,
				seraphine_trust: -10,
				sage_affection: 30,
				vale_trust: 20,
				progressive_ruler: true
			}
		},
		{
			id: 'military',
			text: 'Ally with the Military: "I accept General Blackwood\'s support—security and order must come first."',
			next: 'military_path_start',
			effects: { courage: 4, wisdom: 2 },
			hiddenEffects: {
				'faction_choice:military': true,
				loyalist_rep: 10,
				reformist_rep: -25,
				military_rep: 50,
				kieran_loyalty: 20,
				sage_affection: -20,
				pragmatic_ruler: true
			}
		},
		{
			id: 'independent',
			text: 'Reject all factions: "I forge my own path—building coalition directly with magical races and independent forces."',
			next: 'independent_path_start',
			effects: { courage: 5, wisdom: 4 },
			hiddenEffects: {
				'faction_choice:independent': true,
				loyalist_rep: -10,
				reformist_rep: -10,
				military_rep: -15,
				rowan_bond: 20,
				lyra_respect: 20,
				independent_ruler: true,
				chosen_own_path: true
			}
		}
	]
};

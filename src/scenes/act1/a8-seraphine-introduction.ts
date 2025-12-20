import { Scene } from '../../story-manager';

const journeyToTown = `The aftermath of Marcus's revelation and oath leaves you with decisions to process and alliances to navigate. But there's no time for lengthy reflection—Marcus insists on moving immediately. "The dimensional rift will have been noticed," he explains. "Other interested parties—factions, agents, perhaps even enemies—will be converging on this location to investigate. We need to be elsewhere when they arrive."

So you travel. Not back to Silverwood Manor with its relative safety and familiar grounds, but forward toward the nearby town. Marcus leads with the confidence of someone who knows exactly where he's going, Rowan follows with the watchful vigilance of a guardian assessing new territory, and you walk between them, processing everything that's happened in the last few hours: Shadow Beast attack, mysterious follower revealed as loyal knight, oaths sworn, alliances forming.`;

const townApproach = `The town isn't large—perhaps two thousand residents, a market square, a handful of inns and shops, the kind of place where everyone knows everyone and strangers are immediately noticed. You can feel eyes on you as you pass through streets—curiosity about the travelers, speculation about who you are and what brings you here. Marcus navigates with casual confidence, nodding to a few people as if he's a regular presence, leading you deeper into the town's residential district.`;

const safehouseExterior = `He stops before a nondescript building tucked between a cobbler's shop and a merchant's storage house. Two stories, timber construction, shuttered windows that reveal nothing of the interior, a door that looks like every other door on this street. There's nothing to mark it as special or significant. Nothing to suggest it's anything other than a modest residence for some ordinary townsperson.

"Here," Marcus says simply, producing a key and unlocking the door with practiced ease. "Safe house. One of several the Loyalist faction maintains for exactly this kind of situation."

He pushes the door open, gestures for you to enter, and the contrast between exterior and interior is striking.`;

const safehouseInterior = `Outside: nondescript, forgettable, designed to blend into the town's landscape without drawing attention. Inside: a well-furnished space that speaks of significant resources and careful preparation. The entry hall opens into a tastefully appointed sitting room—quality furniture that's comfortable without being ostentatious, bookshelves lined with volumes on history and politics, artwork on the walls depicting landscapes and historical scenes, rugs that feel expensive under your feet. Everything is clean, well-maintained, clearly in regular use rather than abandoned.

Beyond the sitting room, you catch glimpses of other spaces: a dining area with a table that could seat eight, a kitchen that appears fully stocked, stairs leading to second-floor rooms that presumably offer private quarters. This isn't a temporary hideout or emergency shelter. This is a permanent establishment, a base of operations maintained with care and resources.`;

const marcusExplanation = `"The Loyalist faction has been preparing for your return since the Purge," Marcus explains, securing the door behind you and checking windows with automatic caution. "We knew the prophecies. Knew an heir would emerge twenty years after the fall. So we prepared—safe houses like this one, networks of loyal supporters, resources positioned to assist when the time came. This building has been maintained continuously for two decades, ready for exactly this moment."`;

const anticipatedGuest = `He gestures toward the sitting room, where you now notice signs of recent occupation: a teacup on a side table, still warm. A book left open on a chair, bookmark placed precisely. The lingering scent of expensive perfume. Someone else is here. Someone who was waiting.

"There's someone who's been waiting to meet you," Marcus says, and there's significance in his voice. "Someone who represents the interests of those who never stopped believing House Silverwood would return. Who's been working toward this moment her entire adult life."`;

const seraphineRises = `A door opens from an adjacent room, and she enters with the kind of presence that commands immediate attention. Lady Seraphine Ashford—though you don't know her name yet—moves with grace that speaks of decades of deportment training, posture training, etiquette drilled into muscle memory until it becomes unconscious. Every step is measured, every gesture controlled, every element of her presentation calculated for maximum effect.`;

const seraphineAppearance = `She's striking in a way that has nothing to do with conventional beauty and everything to do with sheer force of presence. Late twenties, perhaps thirty at most, but carrying herself with the authority of someone much older. Dark hair styled in an elaborate arrangement that probably took an hour to achieve, not a strand out of place. Sharp, intelligent eyes that assess you in a single sweeping glance—reading your clothes, your bearing, your companions, your weapons, forming judgments with the speed of someone trained in social evaluation.

She wears formal noble attire that somehow makes everyone else in the room feel underdressed: a deep blue gown with silver embroidery depicting subtle patterns you recognize as traditional Silverwood symbolism, jewelry that's elegant rather than gaudy, everything perfectly coordinated. This is someone who understands the power of presentation, who uses appearance as a tool for establishing authority and respect.`;

const seraphineAssessment = `Her eyes linger on you longest—studying your face, your blood mark (visible now, after the recent magical exertion), the way you carry yourself. You can practically see her mind working, comparing what she's seeing to whatever expectations she brought to this meeting. Heir of House Silverwood, last hope of a fallen kingdom, the person prophecies promised and legends described—does the reality match the vision?`;

const formalCurtsy = `Then she executes a curtsy of absolutely perfect form: right foot back, left knee bent, upper body inclining precisely, hands positioned exactly as formal protocol dictates. It's the curtsy due to royalty from noble vassals—not a casual greeting, but a formal acknowledgment of rank and authority. Every element is precise, practiced, flawless.

"Your Highness," she says, and her voice is cultured, controlled, carrying just enough warmth to seem genuine without sacrificing formality. "I am Lady Seraphine Ashford, representative of the Loyalist faction, granddaughter of Lord Edmund Ashford who served as your grandfather's chief counselor. We have waited twenty years for this moment—for your return to claim what was stolen from your family."`;

const loyalistExplanation = `She rises from the curtsy with the same controlled grace, meeting your eyes directly now. "The Loyalist faction represents those who never accepted the legitimacy of the current regime, who maintained faith in House Silverwood's eventual restoration, who've been working these past two decades to preserve the structures and support necessary for your reclamation of power. We number in the thousands across the kingdom—nobles and commoners alike, united by loyalty to your family and commitment to seeing justice done."`;

const seraphineOffer = `Her expression intensifies, sincerity breaking through the formal presentation. "We have much to discuss, Your Highness. Your responsibilities, your heritage, the current state of the kingdom, the challenges you'll face, the resources we can offer. But first, before strategy and politics, let me say this with absolute clarity:"

She places her hand over her heart in a gesture that feels genuine despite the formality. "You are not alone. You are not some orphan struggling to understand an impossible inheritance without support or guidance. We stand ready—eager—to support you in reclaiming your birthright, in restoring House Silverwood to its rightful place, in building the kind of kingdom your grandparents envisioned before everything fell apart."`;

const atmosphericTension = `The room feels charged with significance. Marcus stands respectfully to the side, clearly subordinate to Seraphine in this context despite his own considerable authority. Rowan shifts uncomfortably near you, and you can feel their unease—the free-spirited ranger ill at ease with such formality, such rigid protocol, such emphasis on nobility and hierarchy and proper behavior.

The contrast is stark: Rowan in practical travel clothes, weapons visible, comfortable with wilderness and combat. Seraphine in elaborate formal wear, every hair in place, comfortable with courts and politics and social maneuvering. Two completely different worlds, two completely different approaches to life and power and purpose. And you're standing between them, trying to navigate a path that somehow incorporates both.`;

const getSeraphineIntroduction = (): string => {
	return `${journeyToTown}\n\n${townApproach}\n\n${safehouseExterior}\n\n${safehouseInterior}\n\n${marcusExplanation}\n\n${anticipatedGuest}\n\n${seraphineRises}\n\n${seraphineAppearance}\n\n${seraphineAssessment}\n\n${formalCurtsy}\n\n${loyalistExplanation}\n\n${seraphineOffer}\n\n${atmosphericTension}`;
};

export const SeraphineIntroduction: Scene = {
	id: 'seraphine_introduction',
	get text() {
		return getSeraphineIntroduction();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['trust_in_marcus:true'], hasHiddenAttributes: { marcus_loyalty: 100 } },
			get text() {
				return `You chose to trust Marcus immediately, accepting his oath without lengthy interrogation or demands for proof. That trust feels validated now as you see the resources and preparation behind his service—this isn't some improvised loyalty or opportunistic alliance. This is commitment built over decades, infrastructure maintained through years of waiting, genuine devotion to your family that survived twenty years of hiding and searching.

${journeyToTown}

Marcus navigates the town with the ease of someone who's been here many times, who knows the safe routes and the people to avoid. Your trust in him allows you to relax slightly, to focus on processing recent events rather than constantly evaluating whether he's leading you into danger.

${townApproach}

${safehouseExterior}

${safehouseInterior}

The quality of this safe house speaks volumes about the organization supporting you. This isn't desperation or barely-maintained resistance. This is well-funded, carefully planned, professionally executed preparation. Your trust in Marcus is looking increasingly wise.

${marcusExplanation}

${anticipatedGuest}

${seraphineRises}

${seraphineAppearance}

Seraphine's eyes flick to Marcus with clear approval and warmth. "Marcus," she says, and there's deep respect in her voice. "You found them. After all these years of searching, all the false leads and disappointments... you actually found them."

Marcus inclines his head with quiet satisfaction. "As I swore I would, my lady. Though I had help—Rowan Thorne located them first, was already serving as guardian. I merely confirmed the identification and made contact."

Seraphine's gaze shifts to Rowan, acknowledgment without warmth. "Then we owe the Thornheart ranger our thanks as well." Back to you: "And you trusted Marcus quickly enough to follow him here. That speaks well of your instincts, Your Highness. Marcus is one of the most honorable men I've ever known. If he's sworn himself to your service, that oath is unbreakable."

${seraphineAssessment}

${formalCurtsy}

${loyalistExplanation}

${seraphineOffer}

She glances at Marcus with something approaching affection. "Marcus and I have been coordinating Loyalist activities for fifteen years—since I was barely old enough to understand what my grandfather was recruiting me for. He's been my teacher, my protector, my most trusted advisor. Seeing him finally achieve his life's goal... it means everything."

Marcus looks uncomfortable with the praise but doesn't dispute it. The bond between them is clearly deep, built on shared purpose and mutual respect. Your trust in Marcus extends naturally toward Seraphine—if he trusts her, if they've worked together this long, she's likely equally worthy of confidence.

${atmosphericTension}

But you notice how Marcus positions himself—respectfully subordinate to Seraphine in this political context, acknowledging her authority as faction representative even as he maintains his role as your sworn knight. The power dynamics are complex, layered, requiring navigation.`;
			}
		},
		{
			conditions: { hasFlags: ['skepticism_level:high', 'marcus_must_prove_himself:true'] },
			get text() {
				return `You refused to trust Marcus immediately, demanded proof of his loyalty and identity, or rejected his oath entirely pending further evidence. That skepticism hasn't faded just because he led you to a comfortable safe house—if anything, the elaborate nature of this setup makes you more suspicious. This could be an extremely sophisticated trap, a way to make you feel secure before springing whatever plot these "Loyalists" actually have planned.

${journeyToTown}

You follow Marcus because tactical options are limited, not because you trust him. Your eyes constantly scan for threats, for signs of ambush, for indications that this is leading somewhere dangerous. Marcus seems to sense your wariness, maintains careful distance, doesn't push for conversation or reassurance.

${townApproach}

${safehouseExterior}

"Safe house," Marcus calls it, but you note the location carefully—memorizing the route back, identifying exits, calculating how quickly you could retreat if this turns hostile. Rowan mirrors your caution, hand near weapons, body language communicating readiness for violence if necessary.

${safehouseInterior}

The quality of the furnishings is almost suspicious. Who maintains a space like this for twenty years on the off-chance a prophesied heir actually appears? Either the Loyalists have impressive resources and commitment, or this is an elaborate deception designed to overwhelm your caution with evidence of legitimacy.

${marcusExplanation}

${anticipatedGuest}

${seraphineRises}

${seraphineAppearance}

She reads your tension immediately—sees the wariness in your stance, the way your hand drifts toward weapons, the skepticism written across your face. Her eyes narrow slightly, assessing, then she does something unexpected: she acknowledges it.

${seraphineAssessment}

${formalCurtsy}

But as she rises from the curtsy, her expression shifts—formal protocol giving way to something more direct. "Marcus informed me that you're cautious about accepting our service. That you've demanded proof, or refused his oath entirely, or maintained appropriate skepticism despite his dramatic revelation."

She smiles slightly, and it's the first genuine expression you've seen from her. "Good. Excellent, actually. Blind trust is what destroyed your family, Your Highness. Your grandfather trusted advisors who turned out to be traitors or cowards. Your parents trusted the kingdom's defenses to hold when they'd been compromised from within. That trust killed them."

Her voice hardens with passion barely contained. "So I will not ask for your trust. I will not demand belief in my loyalty simply because I claim it. I will earn your confidence through action, through evidence, through demonstrated commitment over time. That's how trust should work—not through emotional appeals or dramatic oaths, but through consistent proof of sincerity."

${loyalistExplanation}

${seraphineOffer}

But she adds, meeting your eyes with absolute directness: "Know that I mean every word. Not because I'm asking you to trust me—but because time will prove it true. Watch me. Test me. Evaluate my actions against my words. And when you're ready—if you're ever ready—we'll be here. Ready to serve, to support, to help you reclaim what your family built and what was stolen from you."

${atmosphericTension}

Rowan relaxes very slightly beside you, approving of Seraphine's approach. Your guardian respects caution, respects people who understand that trust must be earned. That small approval from Rowan shifts your evaluation slightly—maybe Seraphine is genuine. Maybe this skepticism will prove unnecessary. But you'll maintain it regardless, because as she said: blind trust is what destroyed your family.`;
			}
		},
		{
			conditions: { hasFlags: ['rowan_trusts_marcus:true', 'values_counsel:true'] },
			get text() {
				return `You chose to consult Rowan before deciding about Marcus, valuing your guardian's counsel over rushing into immediate judgment. That decision continues to feel wise—Rowan's endorsement of Marcus gave you confidence to accept his oath, and now you're seeing the infrastructure behind that loyalty. This isn't improvised. This is decades of preparation by people who genuinely believe in your family's restoration.

${journeyToTown}

Rowan walks beside you with comfortable vigilance, less tense than they'd be in truly dangerous territory. Your guardian's relative ease reinforces your confidence in this situation. They wouldn't relax if they sensed genuine threat.

${townApproach}

${safehouseExterior}

${safehouseInterior}

Rowan whistles low, impressed despite themselves. "Loyalists have resources," they murmur. "Real resources. This isn't some fringe resistance group operating out of basements. This is organized, funded, committed."

${marcusExplanation}

${anticipatedGuest}

${seraphineRises}

${seraphineAppearance}

${seraphineAssessment}

${formalCurtsy}

${loyalistExplanation}

Rowan shifts beside you, and Seraphine's eyes flick to your guardian with expression that's difficult to read—not quite approval, not quite disdain, something complex that suggests history or preconceptions. "Rowan Thorne," Seraphine says, acknowledging your guardian directly. "Still protecting the wild places? Still fighting for those who can't fight for themselves?"

There's no malice in the question, but there's distance. These two clearly represent different worlds, different values. Rowan, comfortable in forests and suspicious of courts. Seraphine, at home in formal politics and uncomfortable with wilderness. Oil and water, existing in proximity without mixing.

"Someone has to," Rowan responds evenly. "Not everyone serves through courts and councils, Lady Ashford. Some of us believe actions matter more than titles."

Seraphine inclines her head slightly, accepting the gentle rebuke. "And some of us believe structure matters as much as individual heroism. That systems can serve the powerless more effectively than lone rangers, however well-intentioned." Her gaze returns to you. "But I'm not here to debate philosophy with your guardian, Your Highness. I'm here to offer you what the Loyalist faction can provide: resources, political support, infrastructure for reclaiming power."

${seraphineOffer}

She adds, with a slight smile directed at Rowan: "Though I will note: seeking counsel from your guardian before making decisions shows wisdom. Leadership isn't about knowing everything yourself—it's about surrounding yourself with capable advisors and actually listening to them. Your grandfather excelled at that. I hope you've inherited his judgment."

${atmosphericTension}

You can feel Rowan's complicated reaction beside you—approval of Seraphine's respect for your consulting approach, but continued discomfort with her formality and emphasis on traditional nobility. You're going to have to navigate between these two carefully if you want both their support going forward.`;
			}
		},
		{
			conditions: {
				hasHiddenAttributes: { rowan_bond: 15 }
			},
			get text() {
				return `${journeyToTown}

Rowan walks close beside you, protective presence that's become comforting over your time together. You've built significant trust with your guardian—fought together, traveled together, shared vulnerabilities and strengths. That bond makes you acutely aware of their discomfort as you approach formal political situations. Rowan is a creature of wilderness and freedom, instinctively suspicious of courts and nobility and rigid social hierarchies.

${townApproach}

${safehouseExterior}

${safehouseInterior}

Rowan mutters under their breath, "I hate these political meetings," but stays close, positioning themselves where they can protect you if threats emerge. Your guardian's discomfort is palpable—this isn't their environment, not their strength, not where they feel capable and confident.

${marcusExplanation}

${anticipatedGuest}

${seraphineRises}

${seraphineAppearance}

Seraphine's eyes flick over Rowan with expression that makes your guardian stiffen. It's not quite disgust, not quite contempt, but definitely disapproval barely concealed by noble courtesy. Rowan in travel-worn clothes, weapons openly visible, hair tied back practically rather than styled fashionably, comfortable boots instead of formal shoes—everything about your guardian offends Seraphine's sense of propriety and proper presentation.

${seraphineAssessment}

${formalCurtsy}

${loyalistExplanation}

Seraphine's gaze returns to Rowan with pointed attention. "Is your... guardian staying for this discussion, Your Highness?" The slight pause before "guardian" communicates volumes—this person, this wilderness ranger, this commoner without proper noble bearing, is going to be present for sensitive political planning?

Rowan's jaw tightens, entire body language shifting defensive. You can feel the tension radiating off your guardian—the barely-restrained impulse to say something cutting, to challenge Seraphine's obvious dismissal, to defend their own worth and value.

${seraphineOffer}

But she adds, eyes never leaving Rowan: "Though I suppose if Your Highness values their counsel, I should respect that judgment. Even if I personally find the choice... unconventional."

The temperature in the room drops several degrees. These two are not going to get along easily. Seraphine represents everything Rowan instinctively distrusts: rigid tradition, social hierarchy, emphasis on proper behavior over genuine character. Rowan represents everything Seraphine likely considers dangerous: rejection of established order, disrespect for noble protocols, elevation of personal freedom over social responsibility.

${atmosphericTension}

How you handle this first meeting will set the tone for all future interactions between them. You can support Rowan, validate your guardian's worth and push back against Seraphine's dismissiveness. You can support Seraphine, acknowledge noble protocols and ask Rowan to show more respect. Or you can try to navigate between them, finding some middle path that respects both without fully satisfying either.

But ignoring the tension won't make it disappear. These two need to find a way to coexist in your service—or one of them will eventually force you to choose.`;
			}
		},
		{
			conditions: {
				hasHiddenAttributes: { companions_priority: true }
			},
			get text() {
				return `${journeyToTown}

Your companions accompany you—not just Rowan as guardian, but others you've chosen to bring: Vale with their scholarly knowledge and gentle support, perhaps, or Ash with their mercenary pragmatism, or other allies you've gathered during your journey. You chose to prioritize these relationships over isolation or exclusive partnerships, valuing the strength of diverse perspectives and genuine friendship over traditional power structures.

${townApproach}

${safehouseExterior}

${safehouseInterior}

Your companions spread through the space with varying degrees of comfort. Some appreciate the quality and preparation, others feel out of place among such formal surroundings. But they stay close to you, united by bonds forged through shared experience rather than political obligation.

${marcusExplanation}

${anticipatedGuest}

Vale, if present, whispers quick context: "Seraphine Ashford. Loyalist leader's granddaughter, trained for politics since childhood. Brilliant strategic mind, traditional values, genuinely believes in your family's right to rule. She'll be an powerful ally if you can navigate her expectations about proper noble behavior."

${seraphineRises}

${seraphineAppearance}

Seraphine's eyes widen slightly as she takes in the full scene—not just you with a guardian as she expected, but you surrounded by adventuring companions, people from different backgrounds and social classes, treated as equals and brought into sensitive political discussions. Her careful composure cracks momentarily, genuine surprise breaking through formal presentation.

${seraphineAssessment}

${formalCurtsy}

"Your Highness," she says carefully, gaze sweeping across your companions again, "I... did not expect you would bring your traveling companions to such sensitive discussions." She pauses, visibly recalibrating her approach. "Such meetings typically involve only the heir and their most senior advisors—guardians, yes, but not... broader groups."

There's no direct criticism in her voice, but clear surprise, perhaps concern about operational security or protocol breaches. She's trying to understand what this choice reveals about you, about your priorities, about how you'll approach leadership.

${loyalistExplanation}

${seraphineOffer}

She adds, with something that might be approval breaking through her surprise: "Though perhaps this speaks well of your loyalty to friends. A rare quality in nobility, Your Highness. Most of us are trained to see people as assets or liabilities, to maintain distance from those we might need to sacrifice for political necessity. But you've brought these people into your confidence, treat them as valued companions rather than subordinates or tools."

Her expression softens slightly. "Your grandmother was like that. She drove my grandfather to distraction with her insistence on elevating commoners to advisory positions, on valuing personal character over noble pedigree. He considered it dangerous sentimentality. But the people loved her for it—loved her in a way they never loved the more traditional monarchs. Perhaps... perhaps you've inherited more than just her blood magic."

${atmosphericTension}

Your companions seem to relax slightly at Seraphine's shift toward acceptance. This is going better than it might have—she's adapting rather than insisting you dismiss the people you've chosen to trust. But you can see her mind working, trying to understand how to incorporate this unexpected dynamic into her political planning. You're not the heir she expected. The question is whether that's a problem or an opportunity.`;
			}
		}
	],
	choices: [
		{
			id: 'formal',
			text: 'Respond with formal noble protocol—match her curtsy and formality, show you understand tradition',
			next: 'kingdom_briefing',
			effects: { charisma: 3 },
			hiddenEffects: {
				seraphine_trust: 15,
				'seraphine_first_impression:proper_noble': true,
				rowan_bond: -2,
				formal_personality: true
			}
		},
		{
			id: 'casual',
			text: 'Be casual and authentic—you\'re still learning this nobility thing and won\'t pretend otherwise',
			next: 'seraphine_bonding_1',
			effects: { charisma: 2 },
			hiddenEffects: {
				seraphine_trust: 5,
				'seraphine_first_impression:authentic_untrained': true,
				rowan_bond: 8,
				authentic_personality: true,
				seraphine_intrigued: true
			}
		},
		{
			id: 'balance',
			text: 'Balance formality and authenticity—respect tradition while maintaining genuine character',
			next: 'seraphine_bonding_1',
			effects: { charisma: 4, wisdom: 2 },
			hiddenEffects: {
				seraphine_trust: 10,
				'seraphine_first_impression:diplomatic_adaptable': true,
				rowan_bond: 5,
				social_adaptability: true,
				seraphine_impressed: true
			}
		},
		{
			id: 'business',
			text: 'Focus on practical matters—skip social pleasantries and discuss the kingdom\'s situation directly',
			next: 'kingdom_briefing',
			effects: { wisdom: 3 },
			hiddenEffects: {
				seraphine_trust: 12,
				'seraphine_first_impression:serious_focused': true,
				rowan_bond: 3,
				pragmatic_leader: true,
				seraphine_respects_efficiency: true
			}
		}
	]
};

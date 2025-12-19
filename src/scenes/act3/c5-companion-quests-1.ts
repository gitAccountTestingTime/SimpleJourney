import { Scene } from '../../story-manager';

const seraphineVulnerable = `Seraphine finds you in the palace garden during that liminal time between afternoon and evening when shadows lengthen but darkness hasn't fully arrived. For once, her perfect composure - that mask of aristocratic control she wears like armor - is cracked, fractures showing through polished surface. Her hands tremble slightly as she holds a letter, parchment of expensive quality bearing her family's seal in blood-red wax. The trembling is significant: Seraphine never shows physical signs of emotional distress, has spent years training herself into perfect stillness. That she's shaking now reveals depths of turmoil she can no longer fully suppress.`;

const familyDemand = `"My family," she says, voice strained with effort to maintain control, "they're demanding I use my position with you to secure advantages for House Silverveil. Specific demands, detailed lists." She unfolds the letter with movements that are almost mechanical. "Trade monopolies on grain imports and textile exports. Political appointments - they want three seats on the royal council. Tax exemptions for Silverveil holdings. Access to royal treasury loans at favorable rates." Each item lands like stone into still water. "If I refuse, they'll disown me formally - strip my title, erase me from family records, forbid my siblings from acknowledging my existence. If I comply, I betray your trust and everything I've come to believe in working beside you."`;

const maskFallen = `You've never seen her this vulnerable, this stripped of social performance. The perfect noblewoman facade that she's maintained since childhood - trained into her through countless etiquette lessons, political dinners, strategic conversations where every word was weapon or shield - has fallen away completely. What remains is someone genuinely torn between duty to family that shaped her and loyalty to principles she's discovered she actually possesses. The conflict shows in every line of her posture: shoulders tight with tension, jaw clenched against emotions threatening to overwhelm, eyes showing rare uncertainty about which path leads to righteousness.`;

const seraphineRealization = `"My entire life," she continues quietly, voice carrying weight of accumulated years and expectations, "I've been trained to play political games. To see people as assets or obstacles, relationships as transactions, power as the only currency that matters. Marriage proposals were evaluated by dowry and alliance potential. Friendships were strategic. Even hobbies were chosen for networking value." She looks at you directly, vulnerability naked on her face. "But you've made me want to be better than that. You've shown me there's another way - that integrity can exist alongside power, that relationships can be genuine rather than performative, that serving others matters more than advancing family interests." Her voice breaks slightly. "I don't want to choose between my family and my integrity. But I know what's right. I've learned what right means because you taught me."`;

const getSeraphinePoliticalCrisisText = (): string => {
	return `${seraphineVulnerable}\n\n${familyDemand}\n\n${maskFallen}\n\n${seraphineRealization}`;
};

// Companion Personal Quests - Seraphine, Rowan, Kieran

export const SeraphinePoliticalCrisis: Scene = {
	id: 'seraphine_crisis',
	get text() {
		return getSeraphinePoliticalCrisisText();
	},
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
			text: 'Stand with her completely - she won\'t face this alone. Tell her family that she has your full support and that their demands are rejected. Whatever consequences come from her choice, you\'ll face them together as equals, as partners who share commitment to integrity over exploitation.',
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
			text: 'Find compromise - negotiate with her family to find middle ground. Perhaps there are legitimate ways to address some concerns while maintaining integrity. Use diplomatic skills to craft solution that honors both family bonds and principled governance without crossing into corruption.',
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
			text: 'Encourage her to value family - find another way to resolve the conflict. Family bonds matter, even when families make difficult demands. Help her navigate this crisis without completely severing relationships that have shaped who she is. Perhaps reconciliation is possible through patience and understanding.',
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
			text: 'Confess your love - face everything together as partners bound by more than politics. Tell her that what you share transcends family demands and political pressures. Whatever she chooses regarding her family, your feelings for her are unwavering. Love becomes anchor in crisis, truth that can\'t be weaponized or corrupted.',
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

const journeyBorderlands = `Rowan asks you to accompany them on a private journey to the Borderlands - those wild frontier territories where royal authority frays into uncertainty, where civilization's protective structures dissolve into dangerous wilderness. They've been unusually quiet for days, almost melancholy, with that specific quality of weighted silence that suggests someone carrying burden too heavy for casual conversation. The journey itself takes several days through increasingly remote terrain, passing through villages that grow smaller and more isolated, where royal governance becomes increasingly theoretical rather than practical reality.`;

const burnedVillage = `You reach a small, burned village nestled in valley between forested hills - or what was once a village before fire transformed it into memorial to abandonment and loss. Nothing remains but charred foundations marking where homes once stood, stone chimneys jutting like grave markers above ash and overgrown ruins. Twenty years have passed since destruction, long enough for nature to begin reclaiming the space: wildflowers growing through burned timber, young trees pushing through collapsed roofs, grass softening the harsh lines of devastation. Yet the violence of what happened remains palpable in the landscape itself - in the pattern of burning that speaks of terror rather than accident, in the silence that feels like absence rather than peace.`;

const rowanReveal = `"This was my home," Rowan says quietly, voice carrying emotion they normally suppress with practiced ranger's stoicism. "Twenty years ago, Shadow Beasts came through in coordinated assault - not random attack but organized invasion. The kingdom's army didn't arrive in time to help." They pause, jaw clenching with old anger. "Or more accurately, chose not to arrive. Borderland villages weren't considered priority worth significant military deployment. Cost-benefit analysis determined we were expendable compared to protecting more 'valuable' populations closer to capital." The bitterness in their voice has been refined by two decades of reflection. "My parents died holding the line at the village entrance so children could escape through the forest. I was twelve years old. I remember my mother's face when she told me to run, remember my father's voice shouting for us to keep running no matter what we heard behind us. I remember the sounds I heard anyway."`;

const rowanReflection = `They walk through the ruins with movements of someone retracing sacred ground, touching burned timber with gentleness reserved for relics of profound personal significance. "The Royal Scouts found me three weeks later, half-dead from exposure and starvation in the deep forest where I'd been hiding and wandering. They trained me, gave me purpose and structure when everything else had been destroyed, made me into what I am - skilled ranger, loyal protector, effective warrior." They look at you directly. "I've protected the kingdom ever since with everything I have, believing I was preventing what happened here from happening to others. Every Shadow Beast I've tracked, every threat I've eliminated, every danger I've warned about - it was all about making sure no other twelve-year-old has to run through the forest listening to their parents die."`;

const systemFailure = `Their voice hardens with realization accumulated over years of service. "But it kept happening. Different villages, different circumstances, same fundamental problem. Because the kingdom doesn't protect everyone equally. Borderland villages are still considered expendable when threats seem too costly to address. Common people without noble titles or economic importance don't register as mattering to most of the aristocracy who make resource allocation decisions." They gesture at the ruins. "This village produced grain and timber. The people here paid taxes, obeyed laws, served when called. They were loyal subjects of the crown. But when they needed protection, when they needed the kingdom to honor the implicit contract of governance, they were deemed not worth the expense of adequate military response."`;

const rowanQuestion = `You see tears Rowan won't let fall, moisture gathering in eyes they refuse to let overflow because allowing tears now would mean acknowledging twenty years of accumulated grief all at once. "I need to know - will you be different? When threats emerge on the frontier, when common people without power or influence need protection, when cost-benefit analysis suggests abandonment might be more efficient than salvation - will you be different?" Their voice breaks slightly despite their efforts at control. "Or am I protecting a system that let my parents die, that continues letting parents die, that values some lives as worth saving and others as acceptable losses? Tell me I haven't spent twenty years serving the same indifference that killed everyone I loved."`;

const getRowanOriginsText = (): string => {
	return `${journeyBorderlands}

${burnedVillage}

${rowanReveal}

${rowanReflection}

${systemFailure}

${rowanQuestion}`;
};

export const RowanOrigins: Scene = {
	id: 'rowan_origins',
	get text() {
		return getRowanOriginsText();
	},
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
			text: 'Promise to change the system - no one will be expendable under your rule. Commit to reforming resource allocation, military deployment priorities, and the fundamental assumptions about which citizens matter. Every village, every person, every life has equal claim on the kingdom\'s protection. This will be expensive, difficult, and politically challenging, but it\'s the right thing to do.',
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
			text: 'Establish memorial for all fallen border defenders - create lasting monument and annual remembrance ceremony honoring those who died protecting frontier villages. Ensure their sacrifice is recorded in official histories, their names remembered, their service acknowledged. Transform anonymous tragedy into recognized heroism, giving meaning to losses that system previously ignored.',
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
			text: 'Commit resources to strengthening all border defenses - establish permanent garrison posts in frontier territories, improve response times, and ensure no village faces threats without adequate military support. Take practical action that will save lives now while working toward broader systemic reforms. Demonstrate through immediate resource allocation that border communities matter.',
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
			text: 'Hold them - share their pain without empty promises. Sometimes what someone needs isn\'t solutions or policy commitments but simple human connection and acknowledgment that their grief matters. Stand with them in this place of memory and loss, offering presence and understanding rather than fixing what cannot be fixed. Let them know they\'re not alone anymore.',
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

const kieranRequest = `Captain Kieran requests a private meeting in the training yard, late at night when no one else is around - timing that suggests need for absolute discretion, conversation that cannot risk being overheard by anyone in the palace. The training yard at this hour is empty, silent except for distant sounds of night watch making rounds. Moonlight casts sharp shadows across practice weapons and training equipment. His expression is tortured, conflicted in a way you've never seen from someone whose defining characteristic has always been absolute certainty about duty and honor. The internal struggle shows in every line of his posture: military bearing maintained through force of habit even as emotional turmoil undermines the composure he's spent years perfecting.`;

const uncleReveal = `"General Blackwood is my uncle," he says without preamble, words emerging like confession of sin. "My father's older brother. He raised me after my father died in border skirmishes when I was eight years old. Took me into his household, trained me personally, taught me everything I know about military honor, duty to the kingdom, leadership under pressure." He grips his sword hilt unconsciously, knuckles white with tension. "He's the reason I joined the Royal Guard, the reason I take my oaths seriously, the reason I am who I am. I owe him everything - my career, my principles, my entire understanding of what it means to serve with honor." His jaw clenches. "But I've been watching him carefully these past weeks. Listening to conversations, noticing patterns, connecting pieces I wish didn't connect." He meets your eyes directly, anguish naked in his expression. "And I think... I know... he's planning a coup against you."`;

const treasonWords = `The words hang heavy between you like physical weight pressing down on the night air. This is treason to speak of, even to consider - accusing a respected general of plotting against the crown is offense that could mean execution if proven false, civil war if proven true. The magnitude of what Kieran is revealing, the danger he's placing himself in by bringing this to you rather than remaining silent, demonstrates depths of loyalty that transcend family bonds and personal obligation to the man who raised him.`;

const militaryPlots = `"He talks about 'necessary action for the kingdom's stability' when he thinks I'm not paying close attention," Kieran continues, voice low and urgent. "He's been consolidating military power - transferring loyal officers into key positions, building alliances with powerful nobles who resent your reforms or distrust your policies. Conducting strategic meetings that aren't on any official schedule. Moving resources in ways that don't match stated operational needs." Each detail lands with weight of carefully gathered evidence. "If he moves against you - when he moves against you, because I think it's when, not if - I'm oath-bound to protect you with my life. That's not negotiable. I swore vows before gods and kingdom." He meets your eyes, and you see anguish there that goes beyond professional conflict. "But he's family. The only family I have left. The man who taught me what honor means. How do I raise sword against someone who raised me? How do I potentially kill the person who taught me why loyalty matters?"`;

const heartbreakingChoice = `His voice breaks, military composure finally cracking completely. "How do I choose between my oath and my blood? Between duty to my sovereign and loyalty to the man who made me understand what duty means? Between protecting you and destroying him?" He steps closer, and you see in his eyes that the conflict goes even deeper than blood versus oath. "Because it's not just duty anymore. Somewhere along the way, protecting you became... personal. Too personal for a bodyguard to feel toward their charge." The confession costs him visible effort. "I care about you in ways that have nothing to do with oaths or obligation. In ways that complicate everything, that make this choice impossible instead of merely difficult. If my feelings weren't involved, I could choose duty over blood with clear conscience. But now I'm choosing between three impossible loyalties: to the man who raised me, to the vows I swore, and to..." he pauses, struggling, "...to you. Not as my sovereign. As someone who matters to me more than anyone should matter to their bodyguard."`;

const getKieranDilemmaText = (): string => {
	return `${kieranRequest}

${uncleReveal}

${treasonWords}

${militaryPlots}

${heartbreakingChoice}`;
};

export const KieranDilemma: Scene = {
	id: 'kieran_dilemma',
	get text() {
		return getKieranDilemmaText();
	},
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
			text: 'Confront Blackwood together - give him chance to stand down honorably. Approach him directly with evidence of his plotting, offer him opportunity to explain himself or reconsider his actions. Demonstrate that you value the relationship between him and Kieran enough to seek resolution before escalation. Risk the confrontation going badly, but honor military tradition of facing threats directly with courage rather than through subterfuge.',
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
			text: 'Gather evidence first - protect Kieran\'s position by building airtight case before taking action. Move carefully and strategically to document Blackwood\'s plotting without alerting him that he\'s under observation. Keep Kieran away from situations that would force him to choose between you and his uncle before absolutely necessary. Give him time to process his conflict while ensuring you have proof that will justify any actions taken against respected general.',
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
			text: 'Offer Blackwood legitimate powerful role - preempt coup by addressing his underlying concerns. If he\'s plotting because he fears for kingdom\'s stability or resents being sidelined, give him position of real authority and influence that channels his ambitions constructively. Transform potential enemy into valued advisor by demonstrating that there\'s place for him in your administration without requiring rebellion.',
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
			text: 'Confess your feelings - face everything together. Tell him the truth he desperately needs to hear: that what exists between you transcends professional boundaries, that his conflict is complicated by genuine emotional connection that you share. If he chooses to stand with you against his uncle, he won\'t be throwing everything away for someone who sees him as merely a guard. He\'ll be choosing love that\'s real, mutual, and worth any sacrifice.',
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

const lyraAnniversary = `Lyra asks you to accompany her to a sacred elven site - a grove where ancient magic still lingers, woven into roots and stones by generations of elven magic-workers who considered this place holy. The journey through Moonwhisper Forest to reach the grove feels like walking through cathedral: towering trees form living pillars supporting canopy of leaves that filters sunlight into ethereal green-gold glow. She's been quieter than usual for days leading up to this visit, almost fragile in ways you've never seen from someone normally so composed and certain.`;

const massacreRemembrance = `"Today is the anniversary," she says softly as you enter the grove, voice carrying weight of two centuries of accumulated grief. "Two hundred years since the massacre. Since I lost Aelon and my entire circle - my friends, my community, everyone who knew me when I was young." Her hand touches ancient tree trunk with gentleness reserved for holy relics. "In human years, it would be like yesterday for the emotional impact. But stretched across two centuries? It's had time to become different kind of pain. Not sharp acute agony anymore, but deep chronic ache that never fully heals, just becomes part of who you are."`;

const crystallinePool = `She leads you to a crystalline pool at the grove's heart that reflects the stars even in daylight - elven magic preserving specific moment in time, specific configuration of celestial bodies that marked the night her loved ones died. The water's surface is perfect mirror, unnaturally still despite gentle breeze moving through grove. "In elven tradition," she explains, kneeling by the water with movements of ritual performed countless times, "we believe the dead live on in memory. As long as we remember them, speak their names, honor what they meant to us - they're not truly gone. They exist in the space between past and present, preserved by love and grief in equal measure."`;

const ghostlyMemories = `Her reflection in the water shows not just her current self, but ghostly images of others overlaid like multiple exposures in photograph - her lost loved ones, preserved in magical memory. You see Aelon: tall elf with gentle smile, artist's hands, eyes that looked at Lyra with devotion you recognize because you've felt it yourself. You see others too: friends laughing, elders teaching, children playing. All frozen in moment before violence destroyed them. "I come here every year," Lyra whispers. "To remember. To make sure they know they mattered. To promise them they're not forgotten." Tears threaten to spill.`;

const healingRealization = `"But I've been thinking," she continues quietly, voice trembling with vulnerability, "about what it means to heal. Not to forget - never to forget, that would be betrayal of everything they meant - but to let new love exist alongside old grief. To build future without abandoning past." She looks at you, and in her ancient eyes you see hope warring with terror. "You've made me believe I can love again without betraying his memory. That opening my heart to you doesn't mean closing it to him. That I can honor what was while embracing what could be."`;

const elvenFear = `Tears finally fall, tracking down her face with weight of two centuries behind them. "But I'm terrified. What if I open my heart completely and lose you too? Elves live so long - centuries stretching ahead like burden as much as blessing. Everyone I love eventually leaves. Everyone I allow myself to care about becomes another ghost I'll carry for hundreds of years." Her voice breaks. "Is it worth the inevitable grief? Can I survive losing someone again? Should I even risk it, or should I stay safe in my memorial to the past, protected by walls of grief from any new pain?"`;

const getLyraMemorialText = (): string => {
	return `${lyraAnniversary}

${massacreRemembrance}

${crystallinePool}

${ghostlyMemories}

${healingRealization}

${elvenFear}`;
};

export const LyraMemorial: Scene = {
	id: 'lyra_memorial',
	get text() {
		return getLyraMemorialText();
	},
	choices: [
		{
			id: 'promise-together',
			text: 'Promise to cherish every moment you have together - whether that\'s decades or centuries, whether you share her lifespan or live a human\'s brief time. Make the time you have meaningful rather than being paralyzed by fear of eventual loss. Love fully in the present instead of protecting yourself from future grief. The joy of connection is worth the pain of eventual separation.',
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
			text: 'Honor Aelon\'s memory - he would want her to be happy, not trapped in grief. The best way to remember someone who loved her is to live fully, to embrace joy, to allow herself to love again. Loving you doesn\'t diminish what she shared with him; it honors his desire for her happiness by proving that what he gave her - the capacity to love deeply - survived his death.',
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
			text: 'Suggest elven soul-bond ritual - merge your life spans so she won\'t outlive you by centuries. Ancient magic that binds lives together, ensuring you face mortality as partners rather than her carrying grief for hundreds of years after your death. Extraordinary commitment, magical solution to the practical problem of mismatched lifespans, declaration that you\'re willing to fundamentally alter your existence to build life with her.',
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

const midnightDiscovery = `You find Sage in the royal archives at midnight, surrounded by ancient tomes and scattered papers that create almost archaeological layers of research spread across multiple tables. Candles burn low, wax pooling on surfaces, suggesting they've been here for many hours without pause. They're trembling with excitement - that specific quality of physical response that comes from intellectual breakthrough so significant it overwhelms normal composure. Their eyes are wide with discovery, with the look of someone who's glimpsed truth that changes everything and is still processing the implications.`;

const revolutionaryManuscript = `"I found something," Sage breathes, holding up a crumbling manuscript with gentleness reserved for holy relics or historical treasures. The document is ancient, parchment yellowed and brittle, text written in archaic script that takes considerable scholarly skill to decipher. "Something that could change everything we thought we knew about the Crystal Heart and the Shadowrealm. Something that's been sitting in these archives for centuries, overlooked or deliberately suppressed because it contradicts accepted historical narrative."`;

const documentationSpread = `They spread documents across the table with frantic energy, movements of someone trying to organize revolutionary ideas that resist orderly arrangement. Ancient texts, modern analysis, cross-referenced passages, their own extensive notes in cramped handwriting that shows hours of intense focus. "The standard history says the Shadowrealm is inherently evil, that Shadow Beasts are purely destructive forces that must be fought and contained. That's what every military briefing assumes, what every strategic plan is built on, what generations have believed without question." They tap specific passages. "But this - this is a first-hand account from the original war, written by someone who was actually there when the dimensional barrier first weakened. It tells a completely different story."`;

const originalTruth = `Sage's voice drops to awed whisper, as if speaking too loudly might shatter the fragile truth they've uncovered. "The Shadowrealm wasn't always corrupt. It was another dimension, parallel to ours, home to sentient beings with their own civilization, culture, art, philosophy. They weren't monsters - they were people. Different from us, existing in different dimensional space, but thinking, feeling, creative beings with rich society." Their finger traces text carefully. "But something went wrong centuries ago - a magical plague that originated from experiments with reality manipulation. It twisted them into what we now call Shadow Beasts. Corrupted their minds, their bodies, their fundamental nature. Transformed civilization into nightmare." They look at you with intensity that demands you understand significance. "They're not evil. They're suffering. They're victims of catastrophe they didn't cause, trapped in corrupted forms, driven by pain and madness rather than malice. Everything we've been fighting is symptom, not cause."`;

const healingPossibility = `They look at you with desperate hope warring with scholarly caution. "What if we could cure them instead of just fighting them? What if the Crystal Heart could be modified to heal rather than just repel Shadow corruption? The original purpose of the Crystal Heart - before it became defensive weapon - was to stabilize dimensional boundaries and facilitate communication between realms. If we could restore that original function, enhance it with modern magical understanding, direct it toward healing rather than merely containing..." Their voice rises with excitement they're struggling to contain. "This could end the war permanently. Not through military victory that leaves wounds festering, not through uneasy peace that requires constant vigilance, but through actual healing. By curing the magical plague, by restoring what was lost, by transforming enemies back into neighbors."`;

const scholarDoubt = `Then doubt creeps in, uncertainty undermining the excitement as reality of what they're proposing sinks in. "But if I'm wrong... if I convince you to try this and it fails catastrophically... thousands could die. Entire cities could fall while we're attempting cure instead of mounting proper military defense. Resources committed to healing research could be resources not spent on shields and soldiers." Their voice drops, becomes small and uncertain. "I'm just a junior scholar. No practical combat experience, no administrative authority, no established reputation in magical theory. Who am I to challenge centuries of accepted truth? Who am I to risk lives on revolutionary hypothesis that contradicts everything the military establishment believes? What if my theory is brilliant academic work but disastrous practical strategy?" They look at you with vulnerability naked on their face. "But what if I'm right? What if we have chance to end centuries of suffering and we don't take it because we're too afraid to challenge conventional wisdom?"`;

const getSageLibraryText = (): string => {
	return `${midnightDiscovery}

${revolutionaryManuscript}

${documentationSpread}

${originalTruth}

${healingPossibility}

${scholarDoubt}`;
};

export const SageLibrary: Scene = {
	id: 'sage_library',
	get text() {
		return getSageLibraryText();
	},
	choices: [
		{
			id: 'study-together-first',
			text: 'Study historical records together to validate their theory - work as intellectual partners to strengthen the evidence before committing to action. Examine original sources, cross-reference multiple accounts, build comprehensive case that will withstand scrutiny from military and magical establishments. Give Sage both support they need and rigor their theory deserves.',
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
			text: 'Support their research fully - brilliant minds change history by challenging conventional wisdom. Trust their expertise and intellectual courage even when established authorities will resist. Provide resources, authority, and protection they need to pursue revolutionary theory. Sometimes progress requires taking risks on unproven ideas from unlikely sources.',
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
			text: 'Proceed cautiously - test theory on small scale first before committing kingdom\'s resources and safety to unproven hypothesis. Design careful experiments with contained Shadow corruption samples. Build evidence through controlled research that demonstrates feasibility without risking catastrophic failure. Balance innovation with responsibility.',
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
			text: 'Trust Sage\'s intuition completely - tell them you believe in their brilliance and their theory. Sometimes the most important breakthroughs come from trusting intellectual instinct even when rigorous proof isn\'t yet complete. Their mind, their passion for truth, their ability to see connections others miss - that\'s what you\'re betting on. Give them confidence to pursue revolutionary idea.',
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
			text: 'Work on this together as equal partners - combine their research expertise with your practical authority. Neither pure academic theory nor pure political pragmatism is sufficient; this requires collaboration that honors both perspectives. Build revolutionary strategy together, blending intellectual brilliance with strategic implementation, creating synthesis stronger than either approach alone.',
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

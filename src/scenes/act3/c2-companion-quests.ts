import { Scene } from '../../story-manager';

// Companion Personal Quests - Deepening Bonds

const fragmentsProgress = `The Crystal Heart fragments rest in secure vault beneath your headquarters, each one pulsing with residual power, together creating harmonious resonance that grows stronger as more pieces are reunited. The quest for restoration continues, but you've reached natural pause point - moment to breathe, to assess, to remember that the people around you matter as much as ancient artifacts and political victories.`;

const companionVulnerability = `Your companions have been patient, supporting your quest with unwavering loyalty despite their own struggles remaining unaddressed, their own needs taking constant backseat to kingdom-saving urgency. But now, as you prove yourself capable of achieving the impossible, as trust deepens into something resembling family, they begin opening up about burdens they've carried in silence. Each companion holds private pain, unresolved trauma, dreams deferred in service of your greater mission.`;

const personalMatters = `These aren't simple favors or minor requests. These are defining moments in their lives - crossroads where they need someone who cares about them not as useful allies but as people whose happiness and healing matter fundamentally. They're asking for help, yes. But more than that, they're offering trust so profound it borders on sacred - trusting you with their vulnerabilities, their fears, their hopes for futures that extend beyond duty and obligation.`;

const companionReady = `${fragmentsProgress}

${companionVulnerability}

${personalMatters}

Your choice of whether to help them, how to prioritize their needs against mission urgency, will define not just their individual arcs but the fundamental nature of the community you're building. Are companions merely useful tools for achieving greater goals? Or are they the actual goal - the people whose wellbeing justifies all the political struggle and dangerous quests?`;

const valeApproach = `Vale approaches you one evening as golden sunset light filters through windows, painting everything in warm amber tones that soften the tension visible in their posture. They've been building toward this conversation for days - you've noticed them starting to speak then stopping, practicing words in private moments, wrestling with vulnerability that goes against every instinct their spy training cultivated.`;

const valeConfession = `"I need your help with something personal," they say quietly, each word carefully chosen, delivered with controlled precision that barely masks underlying emotion. "It's about my past - and the spy network that's been using me since I was barely old enough to understand what espionage meant. I need to decide who I truly serve. Whether I'm person with agency or just... tool that different handlers pass between them like useful weapon."

Their hands shake slightly - minute tremor someone less observant might miss, but you've learned to read Vale's tells, recognize when their legendary composure is costing them enormous effort to maintain. "I've been living double life so long I'm not sure which version is real anymore. The spy following orders? The companion supporting you? The person buried under all those masks who barely remembers what genuine feeling looks like?"`;

const valeRequest = `${valeApproach}

${valeConfession}

They meet your eyes with desperate honesty. "Will you help me figure out who I actually am? Who I want to be? The network will have opinions - they always do. But I need... I need someone who sees me as person first, operative second. Someone who cares about my wellbeing more than my utility."

The vulnerability costs them visibly. Spies don't ask for help. Operatives don't admit confusion about identity. Tools don't request philosophical guidance about autonomy. But Vale is doing all three, trusting you with crisis that goes to core of their entire existence.`;

const bondDepth = `Your bonds with your companions have grown deep - deeper perhaps than you initially realized, deeper than simple alliance or tactical cooperation. These people have fought beside you, bled for you, risked everything for causes they believe you represent. Their personal stories matter as much as the kingdom's fate - perhaps more, if you're building realm worth saving, realm that values individual wellbeing over abstract political victory.

How you respond to Vale's plea, whether you make time for personal crisis amid kingdom-saving urgency, will set precedent for everything that follows. Will you be leader who sees companions as whole people? Or ruler who prioritizes mission over those executing it?`;

const getCompanionPersonalQuestsText = (): string => {
	return `${companionReady}

${valeRequest}

${bondDepth}`;
};

// Sample Companion Personal Quest - Vale
export const CompanionPersonalQuests: Scene = {
	id: 'companion_personal_quests',
	get text() {
		return getCompanionPersonalQuestsText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['companions_most_important:true', 'independent_path_confirmed:true'] },
			text: `${companionReady}

Your independent path has meant putting companions first from the beginning - rejecting factional backing specifically because you refused to treat people as political pawns, building coalition based on genuine relationships rather than strategic obligation. Your companions have noticed this consistency, seen you honor it through choices both large and small. They know you're different from leaders who claim to value people then sacrifice them for expedience.

${valeRequest}

There's no hesitation in your response - of course you'll help. That's who you are, who you've proven yourself to be through actions rather than just words. Vale's relief is palpable, visible in the way tension drains from their shoulders, how their breathing steadies. They knew you'd say yes, but hearing it confirmed still matters. Still validates their trust wasn't misplaced.

"Thank you," they whisper, and the gratitude carries weight of someone who's rarely experienced being prioritized over mission objectives. "I knew you'd understand. Knew you'd see me as person first."

${bondDepth}

Your independent philosophy - that people matter more than politics, that individual wellbeing justifies kingdom-building rather than being sacrificed to it - has created environment where companions feel safe being vulnerable. That's leadership worth following, power worth wielding. Not strength that dominates, but strength that protects and nurtures.`
		},
		{
			conditions: { hasHiddenAttributes: { vale_trust: 25 } },
			text: `${companionReady}

Vale approaches nervously, clearly struggling with vulnerability that goes against every instinct their operative training cultivated. Spies don't show weakness. Agents don't admit confusion. But you've earned their trust completely - not through manipulation or coercion, but through consistent demonstration that you value them as person beyond their utility as intelligence asset.

They've watched you make choices that prioritized companion wellbeing over tactical advantage, seen you refuse shortcuts that would've treated people as expendable resources, witnessed you honor commitments even when expensive or inconvenient. That pattern has convinced them you're safe - maybe the first truly safe person they've known since childhood innocence was stripped away by recruitment into world of secrets and shadows.

"I need your help with something personal," they say quietly, words emerging with difficulty despite trust established between you. "It's about my past - and the spy network that's been using me since I barely understood what it meant to be used. I've been carrying this secret, this double identity, this fundamental confusion about who I actually am... I've been carrying it too long. It's destroying me slowly, eroding whatever authentic self I might have left."

They meet your eyes with desperate honesty that's almost painful to witness. "I trust you. Completely. More than I've trusted anyone in... maybe ever. Will you help me break free? Help me figure out who Vale actually is when I'm not performing roles or executing missions or wearing masks that have become more real than the face beneath?"

${bondDepth}

The trust they're demonstrating is extraordinary - not just asking for help, but admitting to existential crisis that makes them vulnerable in ways that could be exploited. They're trusting you won't exploit that vulnerability, won't use their confusion as leverage, won't prioritize their continued utility as spy over their need for genuine self-determination and healing. That level of trust is precious, fragile, and absolutely must be honored.`
		},
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true'], hasHiddenAttributes: { vale_trust: 20 } },
			text: `${companionReady}

Vale's Reformist background makes this conversation loaded with political complexity that adds layers to already difficult vulnerability. You chose the Reformist faction they've been serving - superficially, that should make things simpler. Their mission succeeded. Their handlers should be satisfied. But success has revealed uncomfortable truth: Vale's loyalty to you has evolved beyond political alignment into something more personal, more complicated, more real than faction operatives are supposed to develop for their targets.

${valeRequest}

They pause, searching for words to articulate the distinction they need you to understand. "I know you support the Reformists," they add carefully, each word weighted with significance. "I know you chose the faction I was assigned to promote. My handlers consider that mission success. But this... what I'm asking for... this is about me choosing for myself, not because of politics or faction loyalty or mission parameters. This is about whether I'm person with autonomy or just operative who happened to get lucky with assignment alignment."

Their hands clench with frustration at inadequacy of language. "The Reformists talk about freedom and individual rights and democratic self-determination. But they don't apply those principles to their own operatives. We're tools, not citizens. Weapons, not people. So I'm asking: will you support me choosing myself? Will you value my autonomy even if it complicates your political alliances? Even if the Reformist handlers who've been useful to you want to maintain control over me?"

${bondDepth}

The question is test - not malicious one, but necessary one. Do you mean the principles you've espoused about valuing people and respecting autonomy? Or do those principles apply only when politically convenient, evaporate when maintaining useful alliance requires treating someone as asset rather than person? Vale needs to know which kind of leader you are before trusting you with their deepest vulnerability.`
		}
	],
	choices: [
		{
			id: 'connect-first',
			text: `Gather everyone for genuine connection before quests - create bonding moment that honors relationships you've built`,
			next: 'social_connection_before_battle',
			effects: { empathy: 5, charisma: 4 },
			hiddenEffects: {
				bonding_moment: true,
				all_companions_care: true
			}
		},
		{
			id: 'vale-quest',
			text: 'Help Vale confront their past - support them in breaking free from spy network and discovering authentic self',
			next: 'vale_personal_quest',
			effects: { charisma: 3 },
			hiddenEffects: {
				'companion_quest_active:vale': true,
				vale_trust: 10
			}
		},
		{
			id: 'other-companions',
			text: 'Help other companions with their personal quests - address the needs of Ash, Rook, Rowan, and others waiting for support',
			next: 'other_companion_quests',
			effects: { charisma: 2 },
			hiddenEffects: {
				helping_companions: true
			}
		},
		{
			id: 'continue-main',
			text: 'Focus on the remaining Crystal Heart fragments - prioritize mission urgency over companion personal needs',
			next: 'crystal_hunt_continued',
			effects: { wisdom: 2 },
			hiddenEffects: {
				mission_focused: true
			}
		}
	]
};

// Vale's Personal Quest - Breaking Free from Control

const safehouseLocation = `Vale leads you through winding back streets to district you've never explored - deliberately anonymous neighborhood where buildings lean together like co-conspirators, where windows are shuttered against prying eyes, where residents have learned not to notice unusual comings and goings. This is territory that belongs to shadows, to secrets, to people who prefer invisibility over attention.`;

const safehouseDescription = `The safehouse itself is unremarkable by design: narrow building wedged between tannery and boarding house, door marked only by subtle symbol that you'd miss if Vale hadn't pointed it out. Inside, the space is spartanly functional - furniture chosen for utility rather than comfort, walls bare of decoration that might reveal personality or preference, atmosphere carefully cultivated to be forgettable. This is place designed for brief meetings and quick departures, for conversations that leave no evidence, for people who exist primarily as code names and operational assets.`;

const handlerPresence = `Vale's handler waits in the center room, positioned with calculated dominance - standing rather than sitting, positioned to control sightlines and exit routes, demonstrating through body language alone that she views this space, this meeting, this entire situation as hers to command. She's woman in her fifties perhaps, though operatives age deceptively - could be younger worn down by decades of moral compromise, could be older preserved by magical enhancements. Cold eyes assess you with professional dispassion, cataloging threat level, calculating advantages, reducing you to tactical equation.`;

const safehouseConfrontation = `${safehouseLocation}

${safehouseDescription}

${handlerPresence}

She doesn't introduce herself - handlers rarely use real names even among themselves. She simply studies you with those calculating eyes, then turns dismissive attention to Vale as if you're barely worth acknowledging now that initial assessment is complete.`;

const handlerDismissalFull = `"Your mission is complete," she tells Vale with flat efficiency that reduces years of service to bureaucratic checkbox. No congratulations. No recognition of skill or sacrifice or the toll that deep-cover operations exact on operatives' psyches. Just cold statement of fact followed by immediate redeployment orders. "The heir supports our cause. The Reformist faction has secured valuable ally. Your infiltration succeeded. Well done. Now you're reassigned to different target. New identity packet is ready. You deploy within the week."`;

const handlerDismissal = `${handlerDismissalFull}

She slides document envelope across table with casual authority of someone accustomed to absolute obedience. The envelope contains Vale's next life - new name, new background, new target to manipulate, new mission that will consume years and demand complete suppression of authentic self. Another identity to bury themselves in. Another performance to maintain until the lines between mask and face blur into indistinguishability.`;

const valeDefiance = `Vale's face hardens with determination you've seen them build toward through days of internal struggle. This moment - this confrontation with the system that's owned them since childhood - is why they asked for your support. They needed someone who sees them as person rather than operative to bear witness, to validate that their desire for autonomy is legitimate rather than mere weakness or betrayal of duty.

"No," Vale says clearly, voice steady despite hands trembling at their sides. "I'm staying with them. Not as spy gathering intelligence for next quarterly report. Not as operative following mission parameters. As companion. As friend. As person choosing for myself where I belong and who I serve."`;

const handlerThreat = `The handler's eyes narrow dangerously, cold assessment transforming into controlled anger. Her voice drops to quiet menace that's somehow more threatening than shouting. "That wasn't a request, Agent. You have your orders. The Reformist network has invested considerable resources in your training, your operations, your continued existence. You don't simply walk away because you've developed inconvenient emotional attachment to a target."`;

const handlerCoercion = `She leans forward, weaponizing intimacy of shared history. "We own you, Vale. Your identity, your skills, your very survival - all products of our investment. You think you can just... what? Retire? Build normal life? You're too valuable to lose and too dangerous to let wander free with everything you know. Either you accept reassignment, or you accept consequences. And trust me, you don't want to discover what consequences entail."`;

const choiceMoment = `This is the moment Vale has been dreading - forced choice between duty drilled into them since childhood and friendship that's shown them alternative possibility. Between system that claims ownership of their entire existence and person who treats them as autonomous being with legitimate right to self-determination. Between crushing familiar misery of life they know and terrifying hopeful uncertainty of life they might build if they're brave enough to reach for it.

The handler's threat isn't empty. The Reformist network doesn't release operatives gently. Walking away means becoming target, means having your own training and skills turned against you, means living in fear that former colleagues will decide you're loose end that needs tying up permanently. But staying means surrendering last shreds of authentic self, means accepting that you'll never be anything more than useful tool deployed wherever handlers decide.`;

const valeChoiceCommitment = `Vale looks to you, seeking strength in your steady presence. They're terrified - you can see it in too-quick breathing, in white-knuckled grip on table edge, in way their eyes keep darting to exits they've instinctively mapped. But they're also determined. You've shown them different way of being, different relationship between leader and follower that honors agency rather than denying it. That glimpse of alternative possibility is worth fighting for, worth risking everything for.

"I choose them," Vale says firmly, voice gaining confidence as words emerge. "I choose to be person instead of tool. I choose autonomy over orders. I choose... myself. Finally." They meet the handler's furious gaze without flinching. "Find another spy. I'm done."`;

const valeChoice = `${valeChoiceCommitment}`;

const getValePersonalQuestText = (): string => {
	return `${safehouseConfrontation}

${handlerDismissal}

${valeDefiance}

${handlerThreat}

${handlerCoercion}

${choiceMoment}

${valeChoice}`;
};

export const ValePersonalQuest: Scene = {
	id: 'vale_personal_quest',
	get text() {
		return getValePersonalQuestText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true', 'vale_chooses_player_freely:true'] },
			text: `${safehouseConfrontation}

The handler's surprise is evident despite professional composure - micro-expression of shock before control reasserts itself. She clearly expected smooth operational closure: mission succeeded, asset redeployed, everyone satisfied with outcome. Your choice of the Reformist faction should have made Vale's position straightforward. Should have aligned mission parameters with personal loyalty in neat confluence that avoided complicated emotional entanglements.

"You chose the Reformists," the handler states, confusion breaking through calculated neutrality. "Vale's mission succeeded. The faction secured valuable alliance with Silverwood heir. Why is this even a question? Why are we having this conversation instead of celebrating operational success?"

Vale steps forward, positioning themselves slightly between you and the handler - protective gesture that speaks volumes about where their true allegiance lies. "Because I'm choosing them as a person, not because they picked the 'right' faction. Because my loyalty isn't just convenient alignment of mission parameters with actual feelings. They let me choose freely - gave me space to discover authentic preference rather than manipulating me toward predetermined outcome. Now I'm choosing them. The actual human being, not the political position."

${handlerDismissal}

${valeDefiance}

${handlerThreat}

${handlerCoercion}

${choiceMoment}

Vale's hand finds yours, grip tight with mixture of fear and determination. "I choose them," they say firmly, eyes locked on yours rather than the handler. "Not the Reformists. Not the faction or the political philosophy or the strategic alliance. Them. The person who treated me like I mattered beyond my utility. The leader who valued my autonomy enough to let me genuinely choose. That's worth more than any faction loyalty. That's real."

The handler's expression sours with combination of professional frustration and personal offense. An operative who stays loyal despite mission success because of genuine emotional attachment rather than political convenience is... unprecedented. Dangerous precedent. But also can't be easily countered with standard protocols designed for defection or betrayal scenarios.`
		},
		{
			conditions: { hasHiddenAttributes: { vale_romance: 30 } },
			text: `Vale leads you to the safehouse, their hand tight in yours - contact that grounds them, reminds them why they're risking everything for this confrontation. When their handler tries to reassign them with cold bureaucratic efficiency, Vale doesn't hesitate. The decision was made days ago. This meeting is just formality, declaration of independence that needs to be spoken aloud to become real.

"I'm not your agent anymore," Vale says clearly, voice carrying conviction that comes from absolute certainty. "I'm theirs. Completely. Because what I feel for them..." They pause, searching for words adequate to enormous truth they're declaring. "It's real. More real than any cause or mission or operational objective. More real than anything I've experienced in life spent performing roles and wearing masks. This - what we have - this is the first genuine thing I've known since childhood."

They turn to you, eyes vulnerable but also fierce with protective intensity. "I choose you. Not as mission target or strategic asset or political ally. As person I... as person I love. Always you. Whatever consequences that brings, I choose you."

The handler's expression sours with mixture of professional disgust and personal disdain. "You're making a mistake, Agent. Trading career and purpose and everything we trained you for... for what? Romance? Emotional attachment that'll fade once novelty wears off and reality sets in? You're throwing away your entire identity for temporary infatuation."

"No," Vale says softly, still looking at you with eyes that hold certainty the handler will never understand. "For once, I'm making the right choice. I'm choosing to be person capable of love rather than weapon incapable of genuine connection. That's not weakness. That's the bravest thing I've ever done."`
		},
		{
			conditions: { hasFlags: ['loyalist_path_confirmed:true'], hasHiddenAttributes: { vale_trust: 25 } },
			text: `${safehouseConfrontation}

${handlerDismissal}

Vale shakes their head with determination that's been building through weeks of internal conflict. "You wanted me to spy on them. To gather intelligence, to influence decisions, to ensure the Reformist faction maintained leverage regardless of which path they chose. But they chose the Loyalists - direct opposition to our cause, antithesis of everything the Reformist network supposedly stands for. Traditional monarchy over democratic reform. Noble privilege over common welfare. Status quo over revolution."

They meet your eyes with fierce loyalty. "And yet... I still choose them. Still trust them more than I trust the network that's controlled me since childhood. Because it's not about politics anymore. It's not about which faction wins or what system gets implemented. It's about whether I'm person with agency or just... tool that gets deployed wherever handlers decide regardless of my own needs or desires or dreams."

The handler's face hardens with combination of professional frustration and ideological betrayal. "You're betraying the Reformist cause for a traditional monarch? For everything we've fought against? For restoration of the very systems that exploit and oppress?"

"No," Vale says quietly, voice steady despite emotional weight of the moment. "I'm choosing a person I trust over a cause that uses people as pawns. I'm choosing autonomy - actual lived autonomy, not abstract principle invoked selectively. There's a difference. The Reformists talk about freedom and self-determination, but they don't apply those values to their own operatives. You want to control me just as much as any monarch ever controlled subjects. At least they're honest about seeing me as person rather than pretending I'm free while pulling strings."

${choiceMoment}

${valeChoice}

The handler's anger is palpable now - betrayal stinging worse because Vale is throwing her own philosophical principles back in her face, using democratic ideals to justify rejecting democratic organization. "You'll regret this. When the monarchy fails, when oppression returns, when you realize you traded meaningful purpose for comfortable servitude - you'll remember this moment and know you chose wrong."

"Maybe," Vale acknowledges with surprising calm. "But it'll be my choice to regret. My mistake to learn from. My life to live. And that - that ownership of my own existence - is worth any risk."`
		}
	],
	choices: [
		{
			id: 'support',
			text: `Support Vale's choice completely - stand with them against the handler and affirm their right to autonomy`,
			next: 'vale_quest_complete',
			effects: { charisma: 4 },
			hiddenEffects: {
				vale_trust: 25,
				vale_romance: 15,
				vale_free: true,
				vale_loyal_to_player: true
			}
		},
		{
			id: 'release',
			text: 'Release Vale from all obligation - tell them they owe you nothing and can choose freely without pressure',
			next: 'vale_quest_complete',
			effects: { wisdom: 4 },
			hiddenEffects: {
				vale_trust: 30,
				vale_romance: 20,
				vale_chooses_player_freely: true,
				vale_deeply_touched: true
			}
		}
	]
};

const valeLiberation = `Vale is free. The weight they've carried for years - the dual identity maintained at enormous psychological cost, the constant deception that eroded authentic self, the fundamental uncertainty about whether they were person or merely collection of useful masks - all of it lifts. You can see the change in their posture: shoulders straightening, breathing deepening, tension draining from muscles that have been clenched for so long that relaxation feels foreign, almost frightening in its unfamiliarity.`;

const valeGratitude = `"Thank you," they whisper, and the simple words carry weight of gratitude too vast for language to adequately contain. "For seeing me. The real me, beneath all the masks and performances and carefully constructed personas. For treating me like person who deserved agency rather than asset to be controlled. For... for giving me permission to choose myself when I'd forgotten that was even option."`;

const valeTransformation = `The transformation isn't instantaneous - years of operative conditioning don't evaporate in single moment of liberation. Vale will still catch themselves calculating manipulations before remembering they don't need to manipulate you. Will still prepare cover stories by instinct before realizing honesty is now safe. Will still wake from nightmares about handlers finding them, reclaiming them, punishing them for daring to want autonomy. Healing from that kind of psychological conditioning takes time, patience, consistent demonstration that freedom isn't trap waiting to snap closed.

But the foundation is established. The first crucial step is taken. Vale chose themselves. And you supported that choice, validated that their autonomy matters more than your tactical advantage or political convenience. That pattern - that consistent demonstration of valuing people over utility - is what creates genuine loyalty rather than coerced obligation.`;

const bondStrength = `Your bond has deepened into something unbreakable. Not dependency - Vale isn't trading one controller for another. This is mutual respect, genuine partnership, connection based on shared values and demonstrated trust. They know you'll support their autonomy even when inconvenient. You know they'll stay loyal not from obligation but from free choice continuously renewed. That's foundation for relationship that can weather any storm.

Whatever comes next - political struggles, dangerous quests, the looming confrontation with Shadow Beasts and failing barriers and kingdom-threatening crises - you face it together. Not as master and servant. Not as leader and tool. But as partners who chose each other freely and continue choosing each other every day.`;

const getValeQuestCompleteText = (): string => {
	return `${valeLiberation}

${valeGratitude}

${valeTransformation}

${bondStrength}`;
};

export const ValeQuestComplete: Scene = {
	id: 'vale_quest_complete',
	get text() {
		return getValeQuestCompleteText();
	},
	choices: [
		{
			id: 'romantic-moment',
			text: 'Take a moment to be alone with someone special - if romantic relationship has developed, deepen that connection',
			effects: { charisma: 2 },
			hiddenEffects: {
				vale_quest_complete: true,
				vale_full_companion: true
			},
			onFail: 'hide',
			outcomes: [
				{
					next: 'early_romance_opportunity',
					conditions: { hasHiddenAttributes: { any_romance_active: 35 } }
				}
			]
		},
		{
			id: 'continue',
			text: 'Return to the quest for the Crystal Heart - refocus on the mission with Vale now fully committed as true companion',
			next: 'crystal_hunt_continued',
			effects: { charisma: 2 },
			hiddenEffects: {
				vale_quest_complete: true,
				vale_full_companion: true
			}
		}
	]
};

const romanceOpportunityContext = `After the intensity of Vale's quest - the confrontation with their handler, the declaration of autonomy, the emotional weight of choosing themselves for perhaps the first time in their adult life - you find yourself with a brief moment of peace. The urgent mission to save the kingdom continues, yes. Shadow Beasts still threaten. The Crystal Heart still needs completing. Political tensions still simmer. But right now, right here, there's pause. Breath. Space to acknowledge that life consists of more than constant crisis management.`;

const deepeningBonds = `The bonds you've been building with your companions have grown deeper, more meaningful than you initially realized. What started as tactical alliances or convenient partnerships have evolved into genuine relationships - friendships yes, but in some cases something more. Romantic feelings have developed gradually through shared dangers and vulnerable moments and consistent demonstrations of care that went beyond professional courtesy. Some companions have been looking at you differently, treating private moments with careful significance, finding excuses to spend time alone together.`;

const timingConsideration = `Perhaps this is the right time to strengthen one of those connections - to show someone they matter to you beyond duty and strategy and kingdom-saving necessity. To acknowledge that building future worth fighting for includes building personal relationships worth cherishing. That saving the realm means nothing if you can't also save space for love, for connection, for the human experiences that make survival worthwhile rather than just additional burden to shoulder alone.`;

const getEarlyRomanceOpportunityText = (): string => {
	return `${romanceOpportunityContext}\n\n${deepeningBonds}\n\n${timingConsideration}`;
};

export const EarlyRomanceOpportunity: Scene = {
	id: 'early_romance_opportunity',
	get text() {
		return getEarlyRomanceOpportunityText();
	},
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { lyra_romance: 35 } },
			text: `${romanceOpportunityContext}\n\n${deepeningBonds}\n\nLyra finds you in the garden as evening settles, moonlight filtering through ancient trees to paint everything in silver and shadow. She moves with that characteristic elven grace - centuries of existence haven't diminished her ethereal beauty, have only added depth and complexity to features that humans might mistake for simple perfection. But you've learned to read the emotions in her ancient eyes, recognize when she's seeking connection rather than just companionship.\n\n"Walk with me?" she asks softly, and the invitation carries layers of meaning. This isn't casual suggestion. This is carefully considered offer from someone who's lived long enough to know the value of meaningful moments, who's choosing to spend irreplaceable time with you specifically.`
		},
		{
			conditions: { hasHiddenAttributes: { kieran_romance: 35 } },
			text: `${romanceOpportunityContext}\n\n${deepeningBonds}\n\nKieran is in the training yard, working late into the night as they often do when emotions become too complicated to process through conversation. They're practicing forms with focused intensity that suggests they're fighting more than practice opponents - fighting their own feelings, maybe, or the conflict between duty and desire that's been growing more impossible to ignore.\n\nThey pause when they see you, and vulnerability flickers across their usually guarded face - that moment of uncontrolled emotional honesty before military discipline reasserts itself. But the vulnerability was real. The feelings beneath the professional mask are real. And Kieran is clearly hoping you'll acknowledge them, give permission for emotions that complicate what was supposed to be straightforward professional relationship.`
		},
		{
			conditions: { hasHiddenAttributes: { sage_romance: 35 } },
			text: `${romanceOpportunityContext}\n\n${deepeningBonds}\n\nSage finds you in the corridor, practically vibrating with excitement that seems purely intellectual at first glance. "I found something in the archives you'll love!" they announce with infectious enthusiasm. "Come see! It's fascinating historical document that sheds light on the Crystal Heart's original construction, and there are personal letters from your ancestors, and..." They trail off, seeming to notice something in your expression.\n\nTheir enthusiasm softens into something more vulnerable. "Or... or we could just talk? If you need company that isn't about missions and quests and kingdom-saving? I'd like that. Spending time with you. Just... being together." The confession comes out awkward, uncertain, but genuine in ways that make your chest tight with affection.`
		}
	],
	choices: [
		{
			id: 'lyra-early',
			text: 'Spend time with Lyra - walk through moonlit gardens and share ancient elven perspectives on love and connection',
			effects: { charisma: 1 },
			onFail: 'hide',
			outcomes: [
				{
					next: 'lyra_stargazing',
					conditions: { hasHiddenAttributes: { lyra_romance: 35 } }
				}
			]
		},
		{
			id: 'rowan-early',
			text: 'Go on a short walk with Rowan - let the ranger show you wilderness beauty and share their growing feelings',
			effects: { charisma: 1 },
			onFail: 'hide',
			outcomes: [
				{
					next: 'rowan_wilderness',
					conditions: { hasHiddenAttributes: { rowan_romance: 30 } }
				}
			]
		},
		{
			id: 'kieran-early',
			text: `Join Kieran for training - let physical activity create space for emotional honesty about what's developing between you`,
			effects: { charisma: 1 },
			onFail: 'hide',
			outcomes: [
				{
					next: 'kieran_sparring',
					conditions: { hasHiddenAttributes: { kieran_romance: 35 } }
				}
			]
		},
		{
			id: 'sage-early',
			text: 'Explore the archives with Sage - use intellectual curiosity as comfortable framework for acknowledging romantic feelings',
			effects: { charisma: 1 },
			onFail: 'hide',
			outcomes: [
				{
					next: 'sage_library_date',
					conditions: { hasHiddenAttributes: { sage_romance: 30 } }
				}
			]
		},
		{
			id: 'finn-early',
			text: 'Visit Finn at the forge - watch masterful craftsmanship and discuss building futures worth living in',
			effects: { charisma: 1 },
			onFail: 'hide',
			outcomes: [
				{
					next: 'finn_forge_date',
					conditions: { hasHiddenAttributes: { finn_friendship: 30 } }
				}
			]
		},
		{
			id: 'no-time',
			text: 'No time for personal matters right now - the mission must take priority over relationship development',
			next: 'crystal_hunt_continued',
			effects: { wisdom: 2 },
			hiddenEffects: {
				romance_declined: true
			}
		}
	]
};

// Placeholder for other companion quests

const otherCompanionsNeedHelp = `Vale's quest has set precedent - the door is open for other companions to approach with their own burdens, their own needs, their own crossroads requiring support from someone who cares about their wellbeing. Each companion carries private pain that's been deferred, dreams that have taken backseat to kingdom-saving urgency, conflicts that need resolution before they can move forward as whole people rather than broken tools held together by duty alone.`;

const companionCatalog = `Ash seeks closure for their lost family - the loved ones killed in Shadow Beast attack that left them sole survivor, haunted by guilt that they lived while others died. They need to return to the ruins of their home village, need to perform proper burial rites, need someone who cares about them to bear witness to grief they've carried in isolation.

Rook must choose between their criminal past and new future you've shown them is possible - the old crew has resurfaced, demanding Rook return to life of theft and cons, threatening to expose everything if refused. They need support making choice that determines who they'll become.

Whisper's true nature reveals itself finally - the mysterious figure who's been guiding you isn't entirely human, carries secret about their origins that changes everything about your relationship and the quest itself. They need you to accept them despite revelation that might shatter trust.

Rowan confronts their half-elf identity - the way they're neither fully accepted by elven parent's people nor fully comfortable among humans. Lyra's presence has reopened old wounds about belonging nowhere completely. They need help finding peace with mixed heritage rather than seeing it as curse.

Seraphine questions duty versus personal happiness - noble obligations have dictated her entire life, but supporting you has shown her alternative possibilities. She's considering abandoning family expectations for personal fulfillment, needs perspective from someone who understands both duty and desire.

Kieran must defy his uncle - General Blackwood's orders have become increasingly questionable, increasingly divorced from kingdom's actual welfare. Kieran sees it but can't act alone against the man who raised him, needs support choosing conscience over filial loyalty.

Lyra faces her people's judgment - her involvement with human politics, her romantic feelings for short-lived human, her breaking of elven isolation protocols - all have consequences among her people she must answer for. She needs someone who values her enough to stand beside her during that reckoning.

And many more companions, each with stories that matter, struggles that deserve attention, dreams that warrant support. Each quest is opportunity to demonstrate that you're building community based on genuine care rather than just assembling useful alliance of convenient tools.`;

const getOtherCompanionQuestsText = (): string => {
	return `${otherCompanionsNeedHelp}

${companionCatalog}

Each companion's personal quest would unfold across multiple scenes, with choices that shape their individual character arcs and your relationships with them. These stories matter as much as political victories or magical artifacts - perhaps more, because they're about the actual people whose lives and happiness justify all the kingdom-building struggle.`;
};

export const OtherCompanionQuests: Scene = {
	id: 'other_companion_quests',
	get text() {
		return getOtherCompanionQuestsText();
	},
	choices: [
		{
			id: 'continue',
			text: 'Help your companions with their personal quests - invest time in the people who matter beyond their tactical utility',
			next: 'crystal_hunt_continued',
			effects: { charisma: 5 },
			hiddenEffects: {
				companions_helped: true
			}
		}
	]
};

const companionQuestsResolved = `With your companions' personal quests resolved or progressing toward resolution, you turn attention back to the urgent matter that's been growing more critical with each passing day: collecting all five Crystal Heart fragments before time runs out completely. The pause for personal matters wasn't weakness or distraction - it was necessary investment in the people who make success possible, who transform abstract victory into something worth achieving.`;

const shadowBeastEscalation = `The Shadow Beast incursions have reached critical levels that can no longer be ignored or managed with stopgap measures. What started as occasional attacks by individual creatures has escalated into coordinated assaults by entire packs, organized with intelligence that suggests guiding force behind their increasing boldness. Villages that were safe months ago are now abandoned. Trade routes that connected kingdom together are now deadly passages few dare travel. The protective barriers erected by previous Silverwood monarchs are failing faster than anyone predicted - ancient magic deteriorating not gradually but catastrophically, as if something is actively corroding the protective wards from outside reality.`;

const urgentMission = `The barrier between worlds grows thin - you can feel it when you concentrate, sense the wrongness like pressure building before storm breaks. Shadow Beasts aren't just invading from their realm. Their realm is bleeding into yours, corrupting reality where dimensions overlap, creating zones where physics behaves unpredictably and magic warps into dangerous instability. If the barriers fail completely, if the Shadow realm fully merges with material world... everything ends. Not just political structures or human civilization, but existence itself corrupted beyond recognition or salvation.

You must act fast. The remaining Crystal Heart fragments must be gathered, the whole must be restored, the protective barriers must be reinforced before catastrophic failure point is reached. This isn't about political legitimacy anymore, isn't about whether you're worthy ruler or capable leader. This is pure survival - yours, your companions', everyone in the realm who doesn't deserve to die because ancient protections failed during interregnum of political chaos.`;

const personalMoments = `Yet in the midst of crisis, you've also built deep bonds with those around you. Some relationships have grown into something more than friendship - romantic feelings acknowledged if not yet fully explored, intimate connections that make survival feel worthwhile rather than just grim necessity. Perhaps there's time for a meaningful moment before the next challenge, space to honor the personal alongside the political, opportunity to strengthen bonds that give emotional sustenance during kingdom-saving marathon.`;

const getCrystalHuntContinuedText = (): string => {
	return `${companionQuestsResolved}

${shadowBeastEscalation}

${urgentMission}

${personalMoments}`;
};

export const CrystalHuntContinued: Scene = {
	id: 'crystal_hunt_continued',
	get text() {
		return getCrystalHuntContinuedText();
	},
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { lyra_romance: 50 } },
			text: `${companionQuestsResolved}

${shadowBeastEscalation}

${urgentMission}

With fragments collected and allies secured, you have a brief respite before the next phase of the quest. Lyra has been watching you with those ancient, knowing eyes that have seen centuries of human lives flicker past like brief candles. There's something she wants to share with you - something personal, something vulnerable, something that requires space away from the politics and battles and constant crisis management that consumes most of your waking hours.

She finds you in a quiet moment, moonlight painting her features in ethereal silver. "Walk with me?" she asks softly. "There's something I want to show you. Something I've never shared with anyone who wasn't elven. But you... you're different. You matter in ways that transcend the usual boundaries between our peoples."`
		},
		{
			conditions: { hasHiddenAttributes: { rowan_romance: 45 } },
			text: `${companionQuestsResolved}

${shadowBeastEscalation}

${urgentMission}

Rowan has been restless lately, pacing the headquarters like caged predator, clearly uncomfortable with extended periods of civilization and politics and indoor strategic planning. Their ranger nature craves wilderness, needs open sky and forest paths and freedom from stone walls and political intrigue. But more than that, they've been looking at you with barely contained longing, clearly wanting to share something important but uncertain how to bridge gap between their comfort with solitude and their growing need for connection specifically with you.

"Just for a night," they finally say, catching you between meetings. "The wilderness calls, and I want to share it with you. Show you what it means to me. Show you..." They hesitate, struggling with vulnerability that goes against every instinct. "Show you why I chose to follow you. Why staying beside you matters more than the solitude I've always preferred."`
		},
		{
			conditions: { hasHiddenAttributes: { kieran_romance: 50 } },
			text: `${companionQuestsResolved}

${shadowBeastEscalation}

${urgentMission}

Kieran's morning training sessions have become something special - moments where professional boundaries blur into something more personal, more intimate, more dangerous to the careful distance they've been trying to maintain between duty and desire. They've been looking at you differently lately, gray eyes lingering when they think you won't notice, touches during combat practice lasting heartbeat longer than strictly necessary, conversations after training carrying subtext that becomes harder to ignore with each passing day.

They're struggling to express feelings that military discipline tells them are inappropriate, that loyalty to mission suggests should be suppressed, but that their heart insists are too real and too important to continue denying. The tension is becoming unbearable for both of you - this careful dance around acknowledged but unspoken attraction that grows stronger every time you spar together.`
		},
		{
			conditions: { hasHiddenAttributes: { sage_romance: 45 } },
			text: `${companionQuestsResolved}

${shadowBeastEscalation}

${urgentMission}

Sage invited you to explore the restricted archives weeks ago, and you've been going together regularly - ostensibly to research Crystal Heart lore, study ancient magical theory, investigate historical precedents that might inform current challenges. The intellectual collaboration has been genuinely valuable. But lately there's been something more in their glances when you reach for the same book, in the way they position themselves close beside you to read over your shoulder, in how conversations drift from academic topics to personal confessions and shared dreams.

Their excitement about historical discoveries has always been infectious, but recently that enthusiasm has transformed into something that includes you specifically, personally, romantically. They're looking for excuse to spend time alone together that acknowledges the shift from intellectual partnership into something that includes emotional and perhaps physical intimacy.`
		}
	],
	choices: [
		{
			id: 'lyra-moment',
			text: 'Spend time with Lyra under the stars - share ancient elven wisdom about love and the meaning of connection across lifespans',
			effects: { charisma: 2 },
			hiddenEffects: {
				romantic_moment_taken: true
			},
			onFail: 'hide',
			outcomes: [
				{
					next: 'lyra_stargazing',
					conditions: { hasHiddenAttributes: { lyra_romance: 50 } }
				}
			]
		},
		{
			id: 'rowan-moment',
			text: `Take Rowan up on their wilderness offer - experience nature through ranger's eyes and explore growing connection between you`,
			effects: { charisma: 2 },
			hiddenEffects: {
				romantic_moment_taken: true
			},
			onFail: 'hide',
			outcomes: [
				{
					next: 'rowan_wilderness',
					conditions: { hasHiddenAttributes: { rowan_romance: 45 } }
				}
			]
		},
		{
			id: 'kieran-moment',
			text: 'Meet Kieran for private training - let physical intimacy of sparring create space for emotional honesty about feelings',
			effects: { charisma: 2 },
			hiddenEffects: {
				romantic_moment_taken: true
			},
			onFail: 'hide',
			outcomes: [
				{
					next: 'kieran_sparring',
					conditions: { hasHiddenAttributes: { kieran_romance: 50 } }
				}
			]
		},
		{
			id: 'sage-moment',
			text: 'Join Sage in the archives - use intellectual partnership as comfortable framework for acknowledging romantic attraction',
			effects: { charisma: 2 },
			hiddenEffects: {
				romantic_moment_taken: true
			},
			onFail: 'hide',
			outcomes: [
				{
					next: 'sage_library_date',
					conditions: { hasHiddenAttributes: { sage_romance: 45 } }
				}
			]
		},
		{
			id: 'finn-moment',
			text: 'Visit Finn at the forge - watch masterful craftsmanship and discuss building futures that include personal happiness',
			effects: { charisma: 2 },
			hiddenEffects: {
				romantic_moment_taken: true
			},
			onFail: 'hide',
			outcomes: [
				{
					next: 'finn_forge_date',
					conditions: { hasHiddenAttributes: { finn_romance: 40 } }
				}
			]
		},
		{
			id: 'zephyr-moment',
			text: `Accept Zephyr's mysterious midnight invitation - explore what connection means with someone who exists partly outside reality`,
			effects: { charisma: 2 },
			hiddenEffects: {
				romantic_moment_taken: true
			},
			onFail: 'hide',
			outcomes: [
				{
					next: 'zephyr_sky_dance',
					conditions: { hasHiddenAttributes: { zephyr_romance: 45 } }
				}
			]
		},
		{
			id: 'thorne-moment',
			text: 'Fly with Thorne under the stars - experience dragon flight and the intensity of connection with ancient powerful being',
			effects: { charisma: 2 },
			hiddenEffects: {
				romantic_moment_taken: true
			},
			onFail: 'hide',
			outcomes: [
				{
					next: 'thorne_dragon_flight',
					conditions: { hasHiddenAttributes: { thorne_respect: 50 } }
				}
			]
		},
		{
			id: 'marina-moment',
			text: 'Swim with Marina in her hidden cove - discover what romance means with someone whose nature is fundamentally different',
			effects: { charisma: 2 },
			hiddenEffects: {
				romantic_moment_taken: true
			},
			onFail: 'hide',
			outcomes: [
				{
					next: 'marina_ocean_swim',
					conditions: { hasHiddenAttributes: { marina_romance: 45 } }
				}
			]
		},
		{
			id: 'seraphine-moment',
			text: `Attend Seraphine's private masquerade - navigate noble protocols transformed into intimate dance of genuine connection`,
			effects: { charisma: 2 },
			hiddenEffects: {
				romantic_moment_taken: true
			},
			onFail: 'hide',
			outcomes: [
				{
					next: 'seraphine_masquerade',
					conditions: { hasHiddenAttributes: { seraphine_romance: 50 } }
				}
			]
		},
		{
			id: 'shadow-moment',
			text: 'Meet Shadow on the rooftop - explore redemption and connection with someone choosing to become better than their past',
			effects: { charisma: 2 },
			hiddenEffects: {
				romantic_moment_taken: true
			},
			onFail: 'hide',
			outcomes: [
				{
					next: 'shadow_rooftop',
					conditions: { hasHiddenAttributes: { shadow_redeemed: 60 } }
				}
			]
		},
		{
			id: 'continue-mission',
			text: 'Focus on the mission without personal moments - prioritize kingdom-saving urgency over relationship development',
			next: 'act3_final_preparations',
			effects: { wisdom: 3 },
			hiddenEffects: {
				mission_focused: true,
				nearing_climax: true
			}
		}
	]
};

const fragmentsNearComplete = `The Crystal Heart fragments are nearly complete - four of five pieces rest in your secured vault, their combined resonance creating harmonious hum that grows stronger as reunification approaches.`;

const alliancesForged = `Your alliances are forged through trials that tested not just your tactical acumen but your character. The elves, dwarves, dragons - all stand ready because you proved yourself worthy.`;

const companionsReady = `Your companions stand ready - each one choosing to follow you from genuine loyalty rather than coerced obligation.`;

const finalConfrontation = `The final confrontation approaches.`;

const imminentThreat = `The Shadow Beast incursions have reached critical levels. The barrier between worlds grows thin. Whatever comes next will determine the fate of the entire realm.`;

const finalCouncil = `You gather your closest allies for one last council before the storm.`;

const getAct3FinalPreparationsText = (): string => {
	return `${fragmentsNearComplete} ${alliancesForged} ${companionsReady} ${finalConfrontation}

${imminentThreat}

${finalCouncil}`;
};

export const Act3FinalPreparations: Scene = {
	id: 'act3_final_preparations',
	get text() {
		return getAct3FinalPreparationsText();
	},
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { romantic_moment_taken: true } },
			text: `The Crystal Heart fragments are nearly complete. Your alliances are forged. Your companions stand ready.

That moment you shared with someone special still resonates - a reminder that you're fighting for more than just duty. You're fighting for love, for connection, for the future you want to build together.

The Shadow Beast incursions have reached critical levels. The barrier between worlds grows thin. Whatever comes next will determine the fate of the entire realm.

You gather your closest allies for one last council before the storm.`
		},
		{
			conditions: { hasHiddenAttributes: { all_companions_loyal: true } },
			text: `The Crystal Heart fragments are nearly complete. Your alliances are forged. Every companion you've gathered stands ready to follow you into whatever darkness awaits.

The bonds you've built - some romantic, some fraternal, all genuine - give you strength beyond mere magical power.

The Shadow Beast incursions have reached critical levels. The barrier between worlds grows thin. Whatever comes next will determine the fate of the entire realm.

You gather your closest allies for one last council before the storm.`
		}
	],
	choices: [
		{
			id: 'continue',
			text: 'Prepare for the final battle - gather your strength, steel your resolve, and lead your companions into the climactic confrontation',
			next: 'act4_climax',
			effects: { courage: 5, wisdom: 4 },
			hiddenEffects: {
				act3_complete: true,
				ready_for_climax: true
			}
		}
	]
};

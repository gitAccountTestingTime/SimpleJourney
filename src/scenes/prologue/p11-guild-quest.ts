import { Scene } from '../../story-manager';

const nightsRest = `You spent the night in Vale's safehouse after leaving the Undercroft, mind churning through everything Whisper revealed. The Silverwood royal line. Blood magic passed through generations. A dynasty destroyed in political purge twenty years ago. And you—somehow, impossibly—carrying that extinct bloodline in your veins.

Sleep came fitfully, interrupted by dreams of glowing crimson light and voices speaking words you couldn't quite understand. When dawn finally broke through the shuttered windows, you felt simultaneously exhausted and restless, like your body knew something important was about to happen.`;

const guildSummons = `The message arrived with breakfast: the Guild Master requests your immediate presence. The wax seal bore the Adventurer's Guild symbol—a compass rose intertwined with a sword—but someone had added a small notation in the corner. A personal summons, not routine business.`;

const guildMasterOffice = `The Guild Master's office occupies the top floor of the guild hall, positioned to overlook both the training yards below and the city streets beyond. Morning light streams through tall windows, illuminating walls covered with maps, contracts, and commendations from grateful clients. The air smells of parchment, ink, and the faint herbal scent of the tea that perpetually steams on her desk.

She stands as you enter—a gesture of respect that surprises you given the rank difference. Guild Master Lyra Stormwind has run the capital branch for fifteen years, and her reputation is formidable: stern but fair, politically astute, and possessing an uncanny ability to read people. Silver hair is pulled back in a practical braid, and her eyes—the pale grey of winter storms—study you with obvious intent.`;

const contractOffer = `"I have a contract for you," she says without preamble, her voice carrying the crisp efficiency of someone who respects your time. "Investigate strange occurrences at Silverwood Manor. The local lord abandoned the property five years ago after his family reported... unsettling phenomena. Doors opening on their own, voices in empty rooms, lights appearing in windows of sealed chambers."`;

const manorDetails = `She paces to the window, silhouetted against the morning light. "Initially, we dismissed the reports as superstition or attempted insurance fraud. But recently, the phenomena have intensified. Travelers on the nearby roads report hearing music from the manor at night—specifically, a lullaby that hasn't been sung publicly since the Silverwood royals were executed. Local villagers avoid the property entirely now, claiming they've seen figures in the windows wearing royal regalia."`;

const contractPresentation = `She returns to the desk and slides a contract across the polished wood surface. "The current owner—a minor noble who inherited the deed but never visited—is offering a substantial reward for anyone who can determine what's happening and either stop it or confirm the manor should be demolished."`;

const sealSignificance = `As you reach for the contract, something catches your eye: the seal pressed into the wax at the bottom of the document. It's not the standard guild authorization mark. Instead, it shows a tree with spreading branches and deep roots, surrounded by thirteen stars—one for each of the old royal houses.

The Silverwood family crest.

Your arm tingles where your blood magic manifested, recognizing something in the symbol. It's almost as if the seal itself is calling to you, resonating with the power sleeping in your veins.`;

const fateRevealed = `Guild Master Lyra watches your reaction carefully, missing nothing. "Interesting coincidence, isn't it?" Her tone suggests she doesn't believe in coincidences. "An adventurer with awakened blood magic receives a contract to investigate the ancestral home of the royal family that wielded that same magic. Almost as if fate itself is pushing you toward answers."

She leans forward, hands folded on the desk. "I won't pretend ignorance. Whisper contacted me last night, explained your situation, and suggested this contract would serve multiple purposes: guild business, personal discovery, and potentially, preparation for larger challenges ahead. The choice is yours, but I suspect you already know what you need to do."`;

const getGuildQuest = (): string => {
	return `${nightsRest}

${guildSummons}

${guildMasterOffice}

${contractOffer}

${manorDetails}

${contractPresentation}

${sealSignificance}

${fateRevealed}`;
};

export const GuildMastersRequest: Scene = {
	id: 'guild_masters_request',
	get text() {
		return getGuildQuest();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['ash_trust:20', 'whisper_first_impression:direct'] },
			get text() {
				return `Whisper's direct approach suited you perfectly. No dancing around implications, no cryptic hints—just straightforward information about your bloodline, the Silverwood dynasty, and what your manifested blood magic truly meant. By the time you left the Undercroft, you had a clear understanding of your heritage and the dangers that came with it.

You spent the night processing the revelations, and by morning, you felt ready—perhaps even eager—to pursue the next steps. When the Guild Master's summons arrived, you suspected it would involve your newfound knowledge.

${guildMasterOffice}

Guild Master Lyra stands as you enter, and you notice immediately that she's not alone. Ash leans against the wall near the window, arms crossed, expression serious. The mercenary captain has been your mentor and ally since you joined the guild, and their presence here suggests this meeting is more significant than routine business.

${contractOffer}

${manorDetails}

Before you can respond, Ash straightens from their casual lean, stepping forward with purpose. "I'm going with them," the mercenary captain states firmly, brooking no argument. "If this is about their heritage—about Silverwood blood and royal magic—they'll need someone watching their back. Someone who knows how to handle threats both mundane and magical."

Their eyes meet yours, conveying unspoken solidarity. "Someone they can trust."

Guild Master Lyra nods approvingly, as if this declaration was expected. "Good. Whisper's information is rarely wrong, and based on what they've shared with me, you'll need reliable allies for what's coming. This investigation is likely just the beginning."

${contractPresentation}

${sealSignificance}

Ash moves closer, studying the seal with a warrior's tactical assessment. "That symbol," they murmur. "I've seen it before, in old military histories. The Silverwood crest was considered sacred by their house guards—soldiers who swore oaths not to the throne, but to the bloodline itself." They look at you meaningfully. "If the manor still carries that mark, it might respond to someone with authentic Silverwood blood."`;
			}
		},
		{
			conditions: { hasHiddenAttributes: { ash_trust: 20 } },
			get text() {
				return `The night after Whisper's revelations passed in a blur of racing thoughts and restless dreams. You've grown close to Ash over your time with the guild—the mercenary captain's steady presence and tactical wisdom earning not just your respect, but genuine trust. When you returned from the Undercroft, it was Ash you sought out to share the overwhelming truth: you carry royal blood from an extinct dynasty.

Ash listened without interrupting, processing the information with characteristic focus before offering simple, grounding advice: "Get some rest. Process this when you're not exhausted. We'll figure out next steps together."

That simple solidarity meant everything.

${guildSummons}

${guildMasterOffice}

As you enter, you're surprised to see Ash already present, standing near the Guild Master's desk with an expression of resolve you've come to recognize. They planned to be here, you realize. Whatever this meeting concerns, your mentor intends to be part of it.

${contractOffer}

${manorDetails}

${contractPresentation}

Before Guild Master Lyra can continue, Ash speaks up. "I'm going with them," the mercenary captain states, the words carrying the weight of an oath. "If this is about their heritage—about who they are and what they might become—they'll need someone watching their back."

Their gaze shifts to you, conveying layers of meaning: loyalty, concern, and unwavering support. "Someone they can trust in whatever comes next."

Guild Master Lyra's approving nod suggests this was anticipated, perhaps even arranged. "Good. You'll need reliable allies for what's coming. Based on Whisper's assessment, this investigation is likely the first of many challenges."

${sealSignificance}

${fateRevealed}

Ash places a reassuring hand on your shoulder. "Whatever we find at that manor, we face it together."`;
			}
		},
		{
			conditions: { hasFlags: ['whisper_first_impression:cautious'] },
			get text() {
				return `Your cautious approach with Whisper proved wise. You demanded credibility, evidence, and verification before accepting their claims about your bloodline. To their credit, Whisper responded not with offense but with approval, providing documentation, historical records, and logical frameworks that supported every assertion they made.

By the time you left the Undercroft, you had a comprehensive understanding of the Silverwood dynasty, the political circumstances of their fall, and the mechanics of hereditary blood magic. More importantly, you had a list of verifiable facts to investigate—ways to confirm or refute Whisper's claims through independent research.

You spent the night cross-referencing their information against guild archives and historical texts, finding no contradictions. The evidence supports their assessment, but you're still proceeding carefully. Claims this extraordinary require extraordinary caution.

${guildSummons}

The timing feels suspicious—too convenient to be coincidence. You prepare yourself for whatever agenda might be at play.

${guildMasterOffice}

Guild Master Lyra's reputation includes legendary people-reading skills. As you enter, her grey eyes study you with obvious interest, cataloging every detail of your posture and expression. She's assessing you just as much as you're assessing her.

${contractOffer}

${manorDetails}

${contractPresentation}

${sealSignificance}

Your caution flares immediately. The timing, the symbol, the convenient alignment of circumstances—it all feels orchestrated. Your expression must convey your suspicion because Guild Master Lyra's lips quirk in a slight smile.

"Whisper warned me you'd be skeptical," she says with unmistakable approval. "Smart. Healthy suspicion has saved more lives than blind trust ever has." She leans back in her chair, fingers steepled. "So let me be transparent: yes, Whisper contacted me. Yes, they suggested this contract would serve your interests as well as the guild's. And yes, the timing is deliberate."

She meets your eyes directly. "But the phenomena at Silverwood Manor are real. The reports are verified. The client's offer is legitimate. Whatever you discover there will be genuine, not manufactured. Sometimes fate does push us toward answers—but that doesn't make the journey any less authentic or the choices any less yours."

Her honesty is disarming, and her respect for your caution feels genuine. "Take time to verify. Ask questions. Proceed carefully. But I suspect you already know what you need to do—and that it's the right path despite your doubts."`;
			}
		},
		{
			conditions: { hasFlags: ['player_owes_whisper:true'] },
			get text() {
				return `Whisper's information came at a price. They explained the transaction clearly in the Undercroft: knowledge about your bloodline, your heritage, and the implications of your blood magic—all provided freely and comprehensively. But with the understanding that this gift created an obligation, a debt to be called upon when Whisper deemed it necessary.

"I'll contact you soon," they'd said as you prepared to leave. "With a suggestion for how you might repay this knowledge. Nothing that violates your morals or endangers innocents—simply a task that serves both our interests."

You accepted those terms, understanding that in the world of information brokers, everything has a price and debts are currency. The knowledge was worth it—understanding who and what you are felt essential, regardless of future obligations.

The summons from the Guild Master arrived at breakfast, and you suspected immediately this was Whisper's suggested repayment.

${guildMasterOffice}

Guild Master Lyra greets you with an expression that suggests she's fully aware of the arrangement. Whisper's network clearly extends into official guild channels, their influence reaching further than you initially realized.

${contractOffer}

${manorDetails}

${contractPresentation}

${sealSignificance}

Guild Master Lyra watches your recognition of the seal with knowing eyes. "Whisper contacted me last night," she confirms, eliminating any pretense. "They suggested you'd accept this contract—in fact, they were quite confident you would. They have a talent for predicting such things."

She slides a second document across the desk—a handwritten note bearing Whisper's distinctive careful script:

*'The manor holds answers you seek. Investigate thoroughly. Survive carefully. Consider this debt satisfied upon completion. —W'*

"So this is the task," you observe, feeling the weight of obligation and opportunity intertwined.

"This is the task," Lyra confirms. "Though I should note: the contract is legitimate guild business regardless of Whisper's involvement. The client is real, the phenomena verified, the reward substantial. Whether you accept this to satisfy a debt or pursue personal answers is ultimately your choice."

She pauses, adding quietly, "For what it's worth, I think Whisper genuinely believes this will help you. Their methods are transactional, but their intent isn't malicious. They collect favors, yes—but they also guide people toward their destinies when those paths align with larger purposes."`;
			}
		}
	],
	choices: [
		{
			id: 'eager',
			text: 'Accept immediately and leave as soon as possible—answers await',
			next: 'road_to_silverwood',
			effects: { courage: 3 },
			hiddenEffects: {
				guild_master_impressed: true,
				quest_accepted_eager: true,
				'preparation_level:minimal': true
			}
		},
		{
			id: 'prepared',
			text: 'Accept, but take time to properly prepare and gather necessary supplies',
			next: 'road_to_silverwood',
			effects: { wisdom: 3 },
			hiddenEffects: {
				quest_accepted_prepared: true,
				'preparation_level:thorough': true,
				supplies: 20
			}
		},
		{
			id: 'companions',
			text: 'Accept, but recruit trusted companions before departing—strength in numbers',
			next: 'vale_bonding_1',
			effects: { charisma: 2 },
			hiddenEffects: {
				quest_accepted_with_group: true,
				'preparation_level:group': true,
				vale_joining: true,
				rook_joining: true
			}
		},
		{
			id: 'questions',
			text: 'Request comprehensive briefing on everything known about Silverwood Manor first',
			next: 'road_to_silverwood',
			effects: { wisdom: 4 },
			hiddenEffects: {
				quest_accepted_informed: true,
				guild_master_respect: true,
				'preparation_level:informed': true,
				silverwood_knowledge: true
			}
		}
	]
};

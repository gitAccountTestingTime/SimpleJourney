import { Scene } from '../../story-manager';

// Meeting Sage - The Earnest Scholar

const assemblyHallDescription = `The People's Assembly Hall occupies what was once a merchant guild headquarters - grand enough to command respect, humble enough to represent common citizens. Vaulted ceilings let in afternoon light through tall windows, dust motes dancing in golden shafts. The space smells of old parchment, fresh ink, and the determination of people who believe change is possible.`;

const sagePhysicalDescription = `A young man sits cross-legged on the floor surrounded by an explosion of documents, books stacked precariously around him like fortification walls. He can't be more than twenty-two, with dark curls that escape a leather tie, falling across his forehead as he leans over his work. His clothes are scholar's practical - worn linen shirt with ink stains on the sleeves, simple vest, trousers that have seen better days. Thin fingers fly across parchment as he makes notes in cramped, urgent handwriting.`;

const sageAbsorbed = `He's muttering to himself, completely absorbed: "No, no, the Valdorian Constitution included provisions for... where did I put that reference? Democratic precedents don't emerge from nothing, they require foundational frameworks that acknowledge both individual liberty and collective responsibility..."`;

const sageWorking = `${assemblyHallDescription}

${sagePhysicalDescription}

${sageAbsorbed}

The scholar doesn't notice your approach. He's entirely lost in his world of ideals and governance theory, one hand gesturing emphatically at empty air as he debates constitutional philosophy with himself. There's something endearing about his complete lack of awareness - this isn't performance. This is genuine passion.`;

const sageStartles = `"Oh!" He startles violently when he finally notices you standing there, papers scattering as he jerks backward. "Oh gods, I'm so sorry, I didn't hear—" His eyes travel up, widening with each inch until they reach your face. "You're... you're..."`;

const sageRealization = `The blood drains from his face, then floods back in a fierce blush. "The heir," he breathes. "You're the heir. You're really here." His voice cracks slightly on the last word. He scrambles to his feet, nearly tripping over his own scattered research in his haste.`;

const sageBows = `He attempts a formal bow and promptly knocks into one of his book towers, sending volumes tumbling. "I'm so sorry!" He catches two books, drops one, catches it again, finally just clutches them to his chest. "I'm Sage. I'm not usually this... I help Council Member Dane with research. Constitutional law, comparative governance systems, democratic theory..."`;

const sageIntroduction = `${sageBows}

He's babbling now, words tumbling out in nervous rush: "I've been studying this my whole life. Ever since I was a child and my mother told me stories about kingdoms where the people had voices, where leaders served rather than ruled. I thought it was just dreams, just beautiful impossible dreams. But then the coup happened and everything changed and Council Member Dane said we might actually have a chance to build something real and I've been working every day since..."`;

const sageTakesBreath = `He finally stops, takes a shaky breath. "I'm sorry. I do that when I'm nervous. Talk too much." His eyes meet yours directly for the first time - warm brown, intelligent, shining with barely contained hope. "But I've been hoping to meet you. To see if you're... if you might actually care about what we're trying to do."`;

const sageBelieves = `His earnest passion is palpable, radiating from him like physical warmth. This isn't calculated political performance or practiced courtier charm. This young scholar genuinely believes in every word he speaks, would probably die for these ideals he's spent years studying. There's something achingly vulnerable about that kind of genuine faith.`;

const sagePassion = `${sageBelieves}

He stands there surrounded by his scattered papers and tumbled books, ink-stained and disheveled and absolutely glowing with idealistic determination. Whatever you decide about the Reformist faction, you can see immediately that Sage represents the heart of their movement - not political calculation, but genuine belief that the world can be better.`;

// Act 2 Continued - Meeting Key Companions

const getMeetingSageText = (): string => {
	return `${sageWorking}

${sageRealization}

${sageIntroduction}

${sageTakesBreath}

${sagePassion}`;
};

export const MeetingSage: Scene = {
	id: 'meeting_sage',
	get text() {
		return getMeetingSageText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true', 'sage_becomes_close_advisor:true'] },
			text: `${sageWorking}

But when you enter the hall - the heir who chose democracy over tradition, who sided with the people over power - he freezes completely. The papers slip from nerveless fingers, forgotten. Books tumble unnoticed.

"You..." His voice is barely a whisper. "You chose us." The words sound like prayer, like miracle. "You chose the Reformists. You chose democracy. You chose the people."

${sageRealization}

Tears shine in his eyes - he's not even trying to hide them. This moment means everything to him, validates years of hopeful study and idealistic dreams. "I thought... I was so afraid you'd choose the Loyalists, or the Military, or stay independent. But you chose us."

${sageIntroduction}

But his babbling takes different shape now: "I'll work every day to prove your choice was right. I'll research every precedent, draft every law, study every system until we build something that actually works. I'll serve you - serve this vision - with everything I have."

His passion now has direction, purpose, focus. He's looking at you like you're the answer to every question he's ever asked about what leadership could be.

${sageTakesBreath} "Thank you," he says simply. "For believing. For taking the risk. For trusting that people deserve voices."

${sagePassion} And beneath the idealistic fire, you sense absolute devotion taking root.`
		},
		{
			conditions: { hasFlags: ['loyalist_path_confirmed:true', 'traditional_ruler:true'] },
			text: `${sageWorking}

${sageRealization}

But when recognition hits, disappointment floods his expressive face like physical pain. "You chose the Loyalists," he says quietly, hope crumbling in his voice. "Traditional restoration. The nobles reclaiming power."

He still attempts the bow - years of scholarly politeness don't disappear even in disappointment - but his hands shake slightly. "I understand. They're powerful, established, they offer stability. It's the safe choice."

The words sound like he's trying to convince himself.

${sageBows}

"I'm Sage," he continues, voice carefully neutral now. "I work for Council Member Dane and the Reformists, so I suppose we'll be opposing factions from now on." He bends to gather scattered papers, movements mechanical. "It's fine. Democracy was always a long-term dream anyway."

But it's not fine. You can see the devastation in the way his shoulders slump, the way he won't quite meet your eyes anymore. This isn't just political disappointment - it's personal. He'd pinned hopes on you, imagined you might be the leader who'd risk everything for genuine change.

${sageBelieves}

Even crushed by your choice, his genuine faith in democratic ideals remains visible in every movement, every careful word. He's too honest to hide what he feels - disappointment, yes, but also stubborn determination to keep fighting regardless. If anything, your rejection seems to have strengthened his resolve to prove the Reformist vision right.`
		},
		{
			conditions: { hasFlags: ['independent_path_confirmed:true', 'chosen_own_path:true'] },
			text: `${sageWorking}

${sageRealization}

But instead of disappointment or joy, his expression shifts to fascinated interest. "You rejected all the factions," he says slowly, studying you with new intensity. "Including ours. You chose your own path entirely."

He lowers himself back to sitting, papers forgotten, giving you his complete focus. "That takes remarkable courage. Every faction offered you something - power, legitimacy, support. You said no to all of it."

${sageIntroduction}

But his babbling shifts to analysis: "From a governance theory perspective, it's brilliant actually. You're not bound by any faction's agenda, not obligated to any specific ideology. You can build something genuinely new rather than choosing between existing power structures."

His disappointment at not being chosen wars visibly with intellectual admiration for your audacity.

"I still believe in democratic principles," he says carefully. "I still think the Reformist vision offers the best path forward for the kingdom. But..." He pauses, honesty winning. "Maybe someone who refuses to be bound by any faction is exactly what the kingdom needs. Someone who'll listen to everyone but be owned by no one."

${sageTakesBreath} "I'd still like to help, if you'll let me. My research, my knowledge - it's yours if you want it. No faction obligations required."

${sagePassion} Even rejected, his idealism burns bright enough to recognize potential in your independent path.`
		},
		{
			conditions: { hasFlags: ['military_path_confirmed:true'] },
			text: `${sageWorking}

${sageRealization}

Horror washes across his face when he realizes which faction you chose. "The Military," he breathes, stumbling backward. "You allied with General Blackwood."

His scattered papers lie forgotten. All his enthusiasm drains away, replaced by something that looks like grief. "You gave military control of the kingdom. Authoritarian rule. Everything the Reformists have been fighting against."

${sageBows}

He doesn't bother with his usual nervous introduction. "I'm Sage. I research constitutional law and democratic governance for a faction you just ensured will never see their vision realized."

Bitterness edges his usually gentle voice. He's trying to maintain scholarly politeness, but young idealism doesn't hide devastation well.

"I'm sure General Blackwood will bring order and stability," he continues, words carefully chosen. "That's what military rule always promises. Efficiency through absolute authority. The people will be safe - they just won't have any say in their own governance."

${sageBelieves}

Even heartbroken by your choice, his passionate belief in democratic ideals burns fierce. But now it's tinged with desperate determination - you've made his work harder, but somehow that seems to have strengthened rather than weakened his resolve to fight for what he believes in.`
		}
	],
	choices: [
		{
			id: 'engage-warmly',
			text: 'Engage warmly with his ideas - ask about his research and vision for democratic governance',
			next: 'sage_bonding_1',
			effects: { charisma: 2 },
			hiddenEffects: {
				sage_affection: 15,
				sage_friendship: true,
				values_common_people: true
			}
		},
		{
			id: 'dismissive',
			text: 'Be politely dismissive - you have serious work to attend to, not academic theories',
			next: 'reformist_meeting',
			effects: { wisdom: 1 },
			hiddenEffects: {
				sage_affection: -10,
				sage_hopes_crushed: true
			}
		},
		{
			id: 'romantic-interest',
			text: 'Show genuine interest in him personally - there\'s something charming about his passionate awkwardness',
			next: 'reformist_meeting',
			effects: { charisma: 3 },
			hiddenEffects: {
				sage_affection: 20,
				sage_romance_seed: true,
				sage_blushing: true
			},
			onFail: 'disable'
		},
		{
			id: 'ask-join',
			text: 'Ask him to join your inner circle immediately - you need advisors who believe in their vision this deeply',
			next: 'reformist_meeting',
			effects: { charisma: 2, wisdom: 2 },
			hiddenEffects: {
				sage_affection: 18,
				sage_joins_early: true,
				sage_loyal: true
			}
		}
	]
};

// Meeting the Reformist Council

const danePhysicalDescription = `Council Member Dane sits in a chair that's seen decades of use, surrounded by the symbols of democratic aspiration - hand-drawn maps showing voting districts, citizen petition scrolls stacked neatly on simple tables, a banner reading "Voice for All" hanging behind him. He's in his sixties, with silver hair pulled back in a practical tail, weathered face lined with years of patient work, kind gray eyes that have seen both hope and disappointment.`;

const daneGreeting = `He rises when you enter, movements careful but not frail - this is a man who's spent a lifetime in careful political maneuvering, surviving in spaces where idealism could get you killed. "Your Highness," he says, voice warm but serious, carrying the weight of someone who understands exactly what's at stake. "Thank you for granting us this audience. I'm Dannis Dane, head of the Reformist Council."`;

const daneHistory = `He gestures to the space around you. "I've been advocating for democratic reforms for forty years. Under your parents' rule, such talk was dangerous - I've been arrested three times, lost my family's merchant business to suspicious 'investigations,' watched friends disappear for speaking too loudly about people's rights. But I never stopped believing that someday, somehow, the kingdom could change."`;

const reformistProposal = `"Your Highness, the Reformists propose something revolutionary, something that would transform not just how we're governed, but what governance means." He spreads documents across the table between you - constitutional drafts, precedents from other lands, detailed implementation plans. "We propose that you endorse democratic reforms: power shared with an elected council representing all people - noble and common alike, human and magical race together."`;

const sageResearch = `Sage, who followed you to the meeting, comes alive here. He presents research with infectious enthusiasm - successful democratic systems from across known lands, economic analyses showing prosperity follows representation, historical examples of peaceful transitions from monarchy to constitutional governance. His passion makes the data compelling, transforms dry facts into vivid possibilities.

"It works," Sage insists, spreading maps and charts. "When people have voices in their governance, when leaders serve rather than rule, societies flourish. Trade increases because merchants trust stable laws. Innovation thrives because citizens invest in their own future. Even military strength improves because people defend homes they truly own."`;

const constitutionalOffer = `Dane leans forward, intensity replacing his earlier careful warmth. "We don't ask you to surrender the throne, Your Highness. We ask you to transform it into something greater. A constitutional monarchy where the crown serves as symbol of unity and mediator of disputes, while the people govern themselves through elected representatives."

He pauses, letting that vision settle. "You would be the leader who brought true freedom to this realm. Who proved that monarchy and democracy need not be enemies - that legitimacy comes not from birth alone, but from serving the people's actual needs. Your name would be remembered not as another monarch who claimed power, but as the one who had power and chose to share it."`;

const reformistVision = `The Reformist vision spreads before you like a detailed map to an unknown country. It's idealistic, certainly - perhaps dangerously so. But there's something compelling in Dane's careful pragmatism combined with Sage's burning faith, in the detailed plans that show they've thought through implementation, not just dreamed beautiful dreams.`;

const getReformistMeetingText = (): string => {
	return `${danePhysicalDescription}

${daneGreeting}

${daneHistory}

${reformistProposal}

${sageResearch}

${constitutionalOffer}

${reformistVision}`;
};

export const ReformistMeeting: Scene = {
	id: 'reformist_meeting',
	get text() {
		return getReformistMeetingText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true'] },
			text: `${danePhysicalDescription}

But this isn't a negotiation anymore - you've already chosen them. When Dane sees you enter, profound relief transforms his careful political face into something nakedly emotional. "Your Highness," he breathes. "You honor us with your trust. You honor the entire kingdom with your courage."

He doesn't try to hide the tears that shine in his eyes. "Forty years. Forty years I've worked for this moment. I never truly believed I'd see it."

${reformistProposal}

But it's not proposal now - it's partnership. "With your legitimacy supporting democratic change, we can actually transform the kingdom. Not through violence or chaos, but through careful, deliberate reform. You've given us the chance to prove that idealism can be practical, that people's rule can work."

${sageResearch}

Sage's joy at working with you directly radiates from every word, every gesture. He keeps glancing at you with barely contained excitement, nearly dropping papers in his enthusiasm to show you everything they've planned.

"Now we begin the real work," Dane continues, voice steady with purpose. "Building systems that serve everyone. Drafting constitutions that protect rights while maintaining stability. Training citizens for participation in their own governance. It won't be easy - but with you leading this change, it becomes possible."

The Reformist vision is no longer distant dream - it's immediate future, and your choice made that real.`
		},
		{
			conditions: { hasHiddenAttributes: { sage_affection: 15 } },
			text: `${danePhysicalDescription}

${daneGreeting}

${daneHistory}

${reformistProposal}

Sage's presentation is thorough, passionate, brilliant - but he keeps glancing at you between points, gauging your reaction with desperate intensity. Every time you show interest or nod understanding, hope blazes brighter in his eyes. When you ask questions, he lights up like you've given him greatest gift imaginable.

${sageResearch}

Dane notices the dynamic with a slight, knowing smile. "Sage has worked tirelessly on these proposals," he says kindly, warmth evident in how he regards his young protégé. "He believes deeply - perhaps more than any of us - that you could be the monarch who changes everything. That your generation might actually build the world we've only dreamed of."

When you meet Sage's eyes directly, he blushes fierce red but doesn't look away. His hope is painfully genuine, vulnerability naked on his expressive face. He's pinned everything on you - his ideals, his work, his heart.

${constitutionalOffer}

${reformistVision} And threaded through it all is Sage's barely contained hope that you'll see what he sees, believe what he believes.`
		},
		{
			conditions: { hasFlags: ['loyalist_path_confirmed:true', 'traditional_ruler:true'] },
			text: `${danePhysicalDescription}

But when you enter having already chosen the Loyalists, Dane's careful warmth cools to professional politeness edged with disappointment. "Your Highness. Thank you for still granting us this audience, even though you've allied with Lady Ashford and the traditional restoration."

He doesn't bother with the full presentation - what would be the point now? "I understand your choice. The Loyalists offer stability, established power, clear lines of authority. Safe choices in dangerous times."

${daneHistory}

"Forty-one years now, I suppose," he continues quietly. "Perhaps forty-two, forty-three. Democracy doesn't get less dangerous to advocate for, even under rulers who choose tradition over transformation."

Sage stands silent behind him, documents held slack in nerveless hands, devastation written across every line of his body. He's not even trying to present his research - you rejected everything it represents.

"We'll continue our work," Dane says with tired dignity. "The Reformist movement doesn't end because one heir chose differently. But I won't pretend this isn't a significant setback. We needed you, Your Highness. The people needed you."

The weight of forty years of disappointed hope sits heavy in the room between you.`
		},
		{
			conditions: { hasFlags: ['military_path_confirmed:true'] },
			text: `${danePhysicalDescription}

But when you enter having allied with General Blackwood, Dane doesn't rise. He stays seated, gray eyes holding something harder than disappointment - closer to grief. "Your Highness. The future monarch who chose military authority over people's voices."

No warmth in his greeting now. Professional courtesy, nothing more.

"I won't waste your time with proposals for democratic reform when you've already chosen authoritarian control. General Blackwood has no use for elected councils or constitutional limitations on power."

${daneHistory}

"Forty years fighting for people's rights. I've been arrested by monarchs, survived investigations, lost everything to defend the idea that common citizens deserve voices in their governance. And now..." He spreads his hands in gesture encompassing futility. "Now the heir chooses the general who represents everything we've fought against."

Sage won't even look at you. He stands facing the wall, shoulders rigid with betrayal.

"The Reformist movement will continue," Dane says quietly. "But it just became far more dangerous. Military regimes don't tolerate political opposition kindly. Some of us will likely disappear. But we won't stop believing that people deserve better than authoritarian rule."

The accusation in his voice is clear: you could have prevented that. You chose not to.`
		},
		{
			conditions: { hasFlags: ['independent_path_confirmed:true', 'chosen_own_path:true'] },
			text: `${danePhysicalDescription}

${daneGreeting}

But his careful political assessment shifts to something more complex when he realizes you rejected all factions. "You chose independence. Remarkable." He studies you with renewed interest. "Every faction offered you something substantial - we certainly tried to make our case compelling. You said no to all of it."

${daneHistory}

"In forty years of political work, I've rarely seen that kind of courage. Or that kind of risk-taking." He leans back, reassessing. "You've made yourself vulnerable, refusing factional support. But you've also freed yourself from factional obligations."

${reformistProposal}

But it shifts to something different: "I still believe democratic reform offers the best path forward for the kingdom. I'd still advocate for elected councils, constitutional governance, protection of people's rights. But..." He pauses, honesty winning. "Perhaps someone who refuses to be bound by any faction's agenda can build something better than what any of us imagined."

${sageResearch}

Sage's presentation reflects his internal conflict - passionate advocacy for Reformist ideals, but growing intellectual respect for your audacious independence.

"My research, my knowledge, my counsel - they're yours if you want them," Dane offers. "No faction strings attached. If you're building your own path, I'd rather help shape it toward justice than stand aside and criticize."

Idealism tempered by forty years of pragmatic survival recognizes opportunity in unexpected forms.`
		}
	],
	choices: [
		{
			id: 'embrace-fully',
			text: 'Embrace democracy fully - commit to elected councils with real power over governance',
			next: 'meeting_kieran',
			effects: { wisdom: 4, charisma: 3 },
			hiddenEffects: {
				reformist_faction_rep: 50,
				loyalist_rep: -15,
				sage_affection: 30,
				sage_overjoyed: true,
				democratic_tendency: true
			}
		},
		{
			id: 'constitutional',
			text: 'Suggest constitutional monarchy as compromise - shared power with constitutional protections',
			next: 'meeting_kieran',
			effects: { wisdom: 5 },
			hiddenEffects: {
				reformist_faction_rep: 30,
				loyalist_rep: 5,
				sage_affection: 20,
				constitutional_approach: true
			}
		},
		{
			id: 'reject',
			text: 'Reject as chaos and instability - the kingdom needs strong central authority, not debates',
			next: 'meeting_kieran',
			effects: { courage: 2 },
			hiddenEffects: {
				reformist_faction_rep: -25,
				loyalist_rep: 15,
				sage_affection: -25,
				sage_heartbroken: true,
				traditional_preference: true
			}
		},
		{
			id: 'neutral',
			text: 'Stay neutral - appreciate the vision but need time to carefully consider implications',
			next: 'meeting_kieran',
			effects: { wisdom: 3 },
			hiddenEffects: {
				reformist_faction_rep: 5,
				sage_affection: 5,
				cautious_approach: true
			}
		}
	]
};

// Meeting Kieran Blackthorn

const trainingGroundsDescription = `The military training grounds spread across acres of carefully maintained field, surrounded by high stone walls that block view of the surrounding city. Everything here speaks of discipline and martial order - weapon racks organized by precise specification, training dummies positioned at regulation intervals, dirt raked smooth between designated combat squares. The air rings with sounds of controlled violence: steel on steel in sparring rings, sergeants calling cadences for formation drills, the thud of arrows hitting distant targets with mechanical regularity.`;

const trainingActivity = `Soldiers move through their exercises with professional efficiency. These aren't conscripts or militia - they're General Blackwood's handpicked forces, the military core he's spent years building into his personal power base. Young men and women in matching uniforms drill in perfect synchronization, boots striking ground in unison, bodies moving as single coordinated entity.`;

const trainingGrounds = `${trainingGroundsDescription}

${trainingActivity}

You've come here to meet General Blackwood, but first you need to pass through his nephew's domain - the training yards where Captain Kieran Blackthorn turns raw recruits into soldiers.`;

const kieranPhysicalDescription = `Captain Kieran Blackthorn stands in the central practice yard, and even before he moves you can see the warrior in every line of his body. Late twenties, built like someone who's spent a decade training their body as weapon - broad shoulders, muscular arms visible beneath rolled shirtsleeves, hands scarred from years of weapons work. Dark hair cut military-short, strong-featured face marked by a scar that runs from left temple to jaw (old wound, well-healed), gray eyes that assess everything with tactical precision.`;

const kieranTeaching = `He's overseeing sparring practice, watching two younger soldiers circle each other with wooden swords. The larger one presses an aggressive attack, driving his smaller opponent backward. Kieran watches without expression until the moment the smaller soldier overextends in desperate defense, drops their guard for half a second.

The larger soldier sees the opening, raises his practice sword for finishing blow - and Kieran's command cracks across the yard: "HOLD."`;

const kieranMercyMoment = `Both soldiers freeze instantly. Kieran strides into the circle, movements graceful despite his size - this is someone utterly comfortable in their own body, someone who's made violence into artform.

"What did you see?" he asks the larger soldier.

"Opening, sir. Dropped guard, sir."

"And what did I teach you about exploiting panic mistakes?"

The soldier hesitates. "That... victory without honor is just brutality, sir?"

"Exactly." Kieran adjusts the smaller soldier's stance with patient hands. "Your footwork put you off-balance. When you're desperate, you get sloppy. Breathe. Reset. Fight smarter, not harder."`;

const kieranContrast = `It's a telling moment - he could have let the larger soldier deliver the "killing" blow, could have used humiliation as teaching tool the way many military instructors do. Instead he stops the fight, corrects with patience, shows mercy and teaching over brutality. The smaller soldier's grateful expression suggests this isn't unusual behavior from their captain.`;

const kieranGreeting = `When Kieran finally notices your approach, he turns with fluid motion, surprise flickering across his face before discipline locks it down. "Your Highness." His bow is textbook military-proper, precise angle, controlled duration. But when he straightens and meets your eyes, there's warmth there beneath the professional courtesy - intelligence, curiosity, careful assessment.

"I didn't expect..." He stops, starts again. "Captain Kieran Blackthorn, at your service. My uncle - General Blackwood - awaits you inside command headquarters." His voice is deep, carrying easily across training yards without need for shouting. Years of battlefield commands have trained that projection.`;

const kieranWarning = `He glances toward the command building, something complex flickering across his features - duty, loyalty, but also conflict. "Your Highness... a word of advice, if you'll permit me?" He lowers his voice, takes half-step closer. "My uncle sees the world through a soldier's eyes. Everything is tactics and power, winning and losing, control and chaos. He's brilliant at what he does - but remember that not all who serve under him share his... methods."`;

const kieranWarningWeight = `There's careful weight to those words, warning wrapped in loyal propriety. He's telling you something important about the man you're about to meet, about the faction you're considering. And he's doing it despite his own position as Blackwood's nephew and subordinate - that takes either remarkable courage or deep concern. Possibly both.`;

const kieranHope = `"I've served in my uncle's military for eight years," Kieran continues quietly. "I know what he's built, know his vision for the kingdom. But I also know..." He stops, choosing words carefully. "There's more than one way to be strong. More than one definition of order. I hope you'll remember that when he makes his proposal."

There's something in his gray eyes - hope, perhaps, that you'll be different from what his uncle expects. That you'll see past the binary choice between military control and weakness Blackwood will present.`;

const getMeetingKieranText = (): string => {
	return `${trainingGrounds}

${kieranPhysicalDescription}

${kieranTeaching}

${kieranMercyMoment}

${kieranContrast}

${kieranGreeting}

${kieranWarning}

${kieranWarningWeight}

${kieranHope}`;
};

export const MeetingKieran: Scene = {
	id: 'meeting_kieran',
	get text() {
		return getMeetingKieranText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['military_path_confirmed:true', 'kieran_conflicted:true'] },
			text: `${trainingGrounds}

${kieranPhysicalDescription}

${kieranTeaching}

${kieranMercyMoment}

${kieranContrast}

${kieranGreeting}

But profound conflict shadows his features when he realizes you've already chosen his uncle's faction. He should be pleased - his commanding officer just gained the legitimacy and power he's been seeking. Yet what you see in Kieran's gray eyes isn't triumph. It's worry.

"You allied with the Military," he says carefully, each word chosen with precision. "With my uncle's vision for the kingdom." A pause, professional discipline warring with personal concern. "I'll serve faithfully, of course. My loyalty is absolute."

But then he lowers his voice, glancing around to ensure privacy. "Just... remember there's more than one way to be strong. Military order, military discipline - these have their place. But don't let him convince you that control through force is the only answer. Don't let him turn you into something you're not."

${kieranWarningWeight}

His loyalty to you - to the idea of you, perhaps, of what you could become - may already exceed his loyalty to his uncle. And that internal conflict costs him something visible in the tension of his jaw, the careful control of his expression.

"I'll serve you honestly," he says quietly. "Even when that service means warning you about the faction you've chosen to ally with. Especially then."

${kieranHope} Hope that you'll be strong enough to resist the darker aspects of military control. Hope that you'll prove his warning wasn't necessary.`
		},
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true', 'progressive_ruler:true'] },
			text: `${trainingGrounds}

${kieranPhysicalDescription}

${kieranTeaching}

${kieranMercyMoment}

${kieranContrast}

${kieranGreeting}

"I heard you chose the Reformists," he says, and something like relief floods his controlled expression. "Democracy over military rule. My uncle is... significantly displeased with that decision."

A slight smile touches his scarred face - first genuine emotion he's shown. "I'm not displeased. I respect what you chose."

He glances toward the command building where his uncle waits, then back to you. "The Military will still work with you - we serve the realm, not just factional preferences. My uncle's too practical to burn bridges completely. But know that some of us..." He pauses, then commits to honesty. "Some of us believe you made the right choice. That strength doesn't require authoritarianism. That order doesn't demand we sacrifice people's voices."

${kieranWarning}

But it's no longer warning - it's validation. You already saw past what his uncle will try to convince you of.

"You'll face pressure from him," Kieran continues. "Arguments that democracy is weak, that only military control can handle the kingdom's threats. Don't believe him. Military strength can serve democratic ideals - it doesn't have to dominate them."

${kieranHope} And something more than hope now - respect that you chose principles over expedient power. His personal approval matters more than his faction's disappointment.`
		},
		{
			conditions: { hasFlags: ['independent_path_confirmed:true', 'chosen_own_path:true'] },
			text: `${trainingGrounds}

${kieranPhysicalDescription}

${kieranTeaching}

${kieranMercyMoment}

${kieranContrast}

${kieranGreeting}

"You rejected all the factions," he says, open admiration replacing military formality. "Including my uncle's. I heard he... didn't take that gracefully."

Understatement draws a genuine smile across his scarred features. "General Blackwood isn't a man who accepts rejection well. Especially from someone he was certain he could control- guide," he corrects himself quickly, but the slip was telling. "I suspect your meeting with him will be... tense."

He steps closer, voice dropping to something more personal than officer-to-heir. "I respect what you did. Building your own path, refusing to be claimed by political games and factional agendas. That's real leadership. That's the courage to stand alone rather than compromise your vision for convenient alliances."

${kieranWarning}

But it shifts to something different - acknowledgment that you already saw through his uncle's approach and chose differently.

"You'll have made an enemy," he says honestly. "My uncle views the world in terms of allies and threats. By rejecting his offer, you've placed yourself in the latter category in his mind. But..." His gray eyes hold yours. "You've also earned the respect of everyone who's ever served under him and wished there was another way. We're not all like him."

${kieranHope} And something deeper - respect that might grow into genuine alliance, loyalty that might exceed familial bonds.`
		},
		{
			conditions: { hasFlags: ['loyalist_path_confirmed:true', 'traditional_ruler:true'] },
			text: `${trainingGrounds}

${kieranPhysicalDescription}

${kieranTeaching}

${kieranMercyMoment}

${kieranContrast}

${kieranGreeting}

"You chose the Loyalists," he says, assessment clear in his tactical gaze. "Traditional restoration, Lady Ashford's vision of returned noble authority."

He's quiet for moment, studying you with that careful military precision. "Interesting choice. Not the Military's authoritarian control, not the Reformists' democratic experiment. Old-fashioned monarchy with all its ceremony and established hierarchies."

${kieranWarning}

"My uncle will still try to convince you that military strength needs to be central to your rule. That nobles and traditions won't handle the kingdom's real threats. He'll argue for expanding military authority regardless of which faction holds formal power."

Kieran's conflict is different now - not about warning you away from military control, but about whether traditional monarchy will be strong enough to resist his uncle's influence.

"The Loyalists have their appeal," he continues diplomatically. "Stability, established systems, clear authority structures. But don't let that stability become excuse for military overreach. Lady Ashford wants the throne's power restored, but my uncle wants real power consolidated in his hands regardless of what the throne claims."

${kieranHope} Hope that you'll prove strong enough to maintain actual authority over the military forces Blackwood commands.`
		}
	],
	choices: [
		{
			id: 'commend-mercy',
			text: 'Commend his mercy with the soldier - strength with compassion is true leadership',
			next: 'military_meeting',
			effects: { wisdom: 2, charisma: 2 },
			hiddenEffects: {
				kieran_loyalty: 15,
				kieran_respects_player: true,
				military_honor_noted: true
			}
		},
		{
			id: 'question-softness',
			text: 'Question if military can afford such softness in times of crisis',
			next: 'military_meeting',
			effects: { courage: 2 },
			hiddenEffects: {
				kieran_loyalty: 5,
				kieran_defends_approach: true,
				pragmatic_view: true
			}
		},
		{
			id: 'ask-uncle',
			text: 'Ask about his relationship with his uncle - understand the family dynamics',
			next: 'kieran_bonding_1',
			effects: { wisdom: 3 },
			hiddenEffects: {
				kieran_loyalty: 10,
				kieran_becomes_guarded: true,
				kieran_conflict_hinted: true
			}
		},
		{
			id: 'spar',
			text: 'Ask to spar with him - understand his character through action rather than words',
			next: 'kieran_bonding_1',
			effects: { courage: 3 },
			hiddenEffects: {
				kieran_loyalty: 20,
				kieran_impressed: true,
				kieran_romance_seed: true,
				sparred_with_kieran: true
			}
		}
	]
};

// Meeting General Blackwood

const warRoomDescription = `The war room occupies the central command building's top floor, positioned for tactical overview of the entire military complex. Maps cover every wall - territorial holdings, troop deployments, supply lines traced in colored ink. A massive table dominates the center, scattered with reports, intelligence documents, miniature figures representing military units. Everything here speaks of strategic mind that sees the kingdom as chessboard, people as pieces to be positioned.`;

const blackwoodPhysicalDescription = `General Victor Blackwood stands at the table like commander on battlefield, and you immediately understand why soldiers follow him. Late fifties, tall and powerfully built despite his age, body hardened by decades of military life. Steel-gray hair cut military-short, weathered face marked by old scars, cold blue eyes that calculate and assess with predatory precision. He radiates controlled power - the kind of presence that dominates spaces through sheer force of will.`;

const blackwoodPresence = `${warRoomDescription}

${blackwoodPhysicalDescription}

He doesn't look up when you enter. Lets you wait, establishing dominance through calculated discourtesy. When he finally acknowledges your presence, it's with gesture more suited to subordinate than royal heir. "Your Highness," he says, voice carrying that particular authority of someone accustomed to absolute obedience. Not quite a greeting - more acknowledgment of your existence in his domain.`;

const blackwoodOpening = `"Let me be direct." He doesn't offer you seat, doesn't soften his approach with diplomatic niceties. "The kingdom needs strength. Order. Security. Not pretty words or noble sentiments, but actual material power wielded by someone who knows how to use it."

He finally meets your eyes, and his gaze is Arctic cold. "The Loyalists cling to outdated traditions and noble privilege that mean nothing in face of real threats. The Reformists peddle dangerous idealism that will get people killed the moment actual crisis hits. I offer reality. I offer what works."`;

const militaryReports = `He spreads documents across the table with sharp, efficient movements. Military intelligence reports, casualty projections, threat assessments. "Shadow Beasts increasing frequency and size along eastern borders. Bandit kingdoms consolidating in the northern wastes. Internal dissent brewing in major cities. Magical race tensions approaching critical levels."

Each report is damning evidence of kingdom on the edge.

"These problems require decisive action, not parliamentary debate or noble etiquette. They require someone willing to make hard choices and enforce them with steel when necessary. I propose a strategic alliance: you provide legitimacy as the blood heir, I handle security, enforcement, and military operations. Together, we restore order to chaos."`;

const kieranDiscomfort = `Kieran stands at formal attention behind and to the left of his uncle - proper subordinate positioning. But even his military discipline can't entirely mask discomfort. His jaw is tight, eyes fixed on point over your shoulder, hands clasped behind his back with slightly too much tension. He's heard this proposal before. He knows what it really means.`;

const blackwoodProposal = `"Of course," Blackwood continues with smile that doesn't reach his cold eyes, "you would retain the crown and its... ceremonial functions. Public appearances, formal audiences, symbolic unity. Important roles." The dismissiveness in his tone makes clear what he thinks of symbolic unity. "But military matters - strategy, tactics, enforcement, dealing with actual threats - those require expertise you don't possess. Mine."`;

const proposalImplication = `The proposal's real meaning is crystalline clear: he offers you crown as decorative prize while he consolidates actual power. Every soldier's loyalty, every strategic decision, every use of force would be his to command. You'd be figurehead, magnificent and irrelevant, while Blackwood rules through military might.

It's clear: he's offering power, but demanding yours in absolute return.`;

const getMilitaryMeetingText = (): string => {
	return `${blackwoodPresence}

${blackwoodOpening}

${militaryReports}

${kieranDiscomfort}

${blackwoodProposal}

${proposalImplication}`;
};

export const MilitaryMeeting: Scene = {
	id: 'military_meeting',
	get text() {
		return getMilitaryMeetingText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['military_path_confirmed:true'] },
			text: `${blackwoodPresence}

But the atmosphere shifts dramatically when he realizes you've already allied with him. The cold assessment warms to something approaching satisfaction - predator who's successfully trapped prey. "Your Highness. You've made the right choice."

He actually offers you seat now, gesture magnanimous in victory. "Now that we're allies, we can speak plainly about what needs to be done."

${militaryReports}

"With your legitimacy and my military strength, we'll rebuild what was lost swiftly and decisively. No more delays, no more debate. Just action and results."

${kieranDiscomfort}

Kieran's discomfort intensifies despite - or perhaps because of - his uncle's victory. You've chosen military control, validated everything Blackwood's been building toward. And Kieran looks like someone watching inevitable catastrophe approach.

"I'll serve you faithfully," Blackwood continues, voice warm with false camaraderie. "Together we'll show this kingdom what real strength looks like. Order restored. Threats eliminated. Power consolidated where it belongs - in capable hands."

${proposalImplication}

But you've already accepted it, already given him the legitimacy he needed. The trap has closed.`
		},
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true', 'progressive_ruler:true'] },
			text: `${blackwoodPresence}

His coldness intensifies to barely controlled hostility when he realizes you chose the Reformists. Rejected his offer of military alliance in favor of democratic experimentation. "Your Highness," he says, voice carrying Arctic chill. "I hope your democratic experiment doesn't get people killed. Though I suspect it will."

No pretense of diplomacy now. You've insulted him by choosing idealism over his offered power.

${militaryReports}

"These are realities, not political talking points. When Shadow Beasts breach eastern defenses, when bandit kings attack supply lines, when magical race tensions explode into violence - you'll need soldiers, not debate. You'll need decisive action, not parliamentary votes."

He leans forward, cold blue eyes boring into yours. "Council Member Dane and his idealistic followers won't save lives when actual crisis hits. Remember that when people die because you chose pretty words over practical strength."

${kieranDiscomfort}

But Kieran's discomfort has transformed into barely concealed relief. His uncle is displeased with your choice - and that pleases Kieran immensely. The slight smile tugging at his scarred mouth suggests he's proud of you for choosing principles over expedient power.

"The Military will still serve the realm," Blackwood continues stiffly. "We're professionals. But don't expect enthusiastic cooperation with policies that weaken security for sake of democratic theater."

You've made an enemy of a powerful, dangerous man. But you've also earned Kieran's respect.`
		},
		{
			conditions: { hasHiddenAttributes: { kieran_loyalty: 15 } },
			text: `${blackwoodPresence}

${blackwoodOpening}

${militaryReports}

Blackwood makes his proposal with practiced efficiency, presenting military control as inevitable practical necessity. But you keep glancing at Kieran, reading volumes in his carefully controlled discomfort. This isn't the first time he's heard his uncle frame these arguments, and his physical tension suggests deep reservations he can't voice while standing at attention.

When Blackwood mentions "decisive action," Kieran's hand tightens incrementally on his sword hilt. When "enforcement" is discussed, his jaw clenches almost imperceptibly. These are trained military responses he's trying to suppress - which makes them more telling for the effort required to hide them.

"Captain Kieran," Blackwood says suddenly, sharp command in his voice. "Tell our guest about our victory at Thornpass."

Kieran's face hardens to stone. "We achieved the objective, sir." Each word carefully chosen, delivered with military precision. "At significant cost to civilian life."

The understatement carries weight of horror Kieran won't explicitly voice.

"Necessary casualties," Blackwood dismisses without interest. "Strategic victory required accepting collateral damage. The captain struggles with that reality - too much mercy in him. But he's young. He'll learn."

The tension between uncle and nephew crackles like lightning about to strike. Kieran's loyalty to Blackwood wars visibly with his horror at what military control actually means when implemented without restraint. And you can see which side is winning.`
		},
		{
			conditions: { hasFlags: ['independent_path_confirmed:true', 'chosen_own_path:true'] },
			text: `${blackwoodPresence}

But his cold assessment sharpens to ice when he realizes you rejected his faction - rejected all factions. "So. The heir who thinks they're above political realities." Contempt drips from every word. "How brave. How foolish."

No diplomacy now, no pretense of respect. "You rejected my offer of alliance. You rejected military support in favor of... what, exactly? Idealistic independence? Belief you can navigate kingdom's threats alone?"

${militaryReports}

"These problems don't care about your independent principles. Shadow Beasts don't respect your desire to stay above factional politics. Bandit kings won't pause their attacks because you're building your own path."

He straightens to full height, radiating cold fury. "You've made yourself vulnerable, made yourself a target. Without factional support, without military alliance, you're just blood heir with no actual power base. And this kingdom eats weak rulers alive."

${kieranDiscomfort}

But Kieran's discomfort has vanished entirely, replaced by something approaching pride. His uncle is furious with your choice - and Kieran clearly considers that a sign you made the right one.

"I view the world in terms of allies and threats," Blackwood says with dangerous quiet. "You've placed yourself in the latter category. Remember that when you need military cooperation and find my forces... occupied elsewhere."

Open threat now. You've earned a powerful enemy. But you've also earned Kieran's deep respect for refusing to be controlled.`
		},
		{
			conditions: { hasFlags: ['loyalist_path_confirmed:true', 'traditional_ruler:true'] },
			text: `${blackwoodPresence}

${blackwoodOpening}

But his approach shifts when he realizes you chose the Loyalists - traditional restoration, not military control. "Interesting choice, Your Highness. Lady Ashford and her nobles, ceremony and bloodlines and old-fashioned monarchy."

There's calculation in his cold eyes now, reassessing. "The Loyalists have their uses. Established hierarchies, clear authority structures, proven systems. Better than democratic chaos, certainly."

${militaryReports}

"But traditions and noble privileges won't handle these threats. You'll still need military strength, regardless of which faction holds formal power. The question is whether that military strength serves your authority... or defines it."

He leans forward. "I can work with the Loyalist vision - if we're clear about who handles real security decisions. You and Lady Ashford can restore the monarchy's ceremonial grandeur. But when actual threats emerge, when hard choices need making, that's when you call me."

${kieranDiscomfort}

Kieran's conflict manifests differently now - not warning you away from military control, but concern that traditional monarchy will be strong enough to resist his uncle's inevitable power grabs. Blackwood may not have official authority under Loyalist rule, but he'll work constantly to expand military influence regardless.

"The Military serves the throne," Blackwood continues smoothly. "We just want to ensure the throne is strong enough to actually matter when crises hit. Work with me, Your Highness. Let me make you powerful enough to maintain the authority Lady Ashford wants to restore."

The trap is more subtle under Loyalist rule, but no less dangerous.`
		}
	],
	choices: [
		{
			id: 'accept',
			text: 'Accept the alliance pragmatically - the kingdom needs military strength and order',
			next: 'first_dragon_encounter',
			effects: { courage: 3 },
			hiddenEffects: {
				military_faction_rep: 50,
				reformist_rep: -25,
				kieran_loyalty: -10,
				kieran_disappointed: true,
				blackwood_alliance: true
			}
		},
		{
			id: 'counter-offer',
			text: 'Counter-offer with real power-sharing - you\'ll work together but retain actual authority over military decisions',
			next: 'first_dragon_encounter',
			effects: { wisdom: 4, charisma: 2 },
			hiddenEffects: {
				military_faction_rep: 25,
				kieran_loyalty: 15,
				kieran_approves: true,
				power_sharing_proposed: true
			}
		},
		{
			id: 'refuse',
			text: 'Refuse on principle - you won\'t be a figurehead while he wields real power',
			next: 'first_dragon_encounter',
			effects: { courage: 4 },
			hiddenEffects: {
				military_faction_rep: -20,
				kieran_loyalty: 25,
				kieran_deeply_approves: true,
				independent_stance: true
			}
		},
		{
			id: 'ask-kieran',
			text: 'Ask Kieran directly for his opinion on his uncle\'s proposal',
			next: 'first_dragon_encounter',
			effects: { wisdom: 5 },
			hiddenEffects: {
				military_faction_rep: 10,
				kieran_loyalty: 30,
				kieran_honored_by_trust: true,
				blackwood_displeased: true,
				values_kieran_counsel: true
			}
		}
	]
};

// First Dragon Encounter - Thorne Drake

const mountainPathDescription = `The mountain path climbs through terrain that grows increasingly hostile with each step. Narrow trail carved into cliff face, loose stones shifting dangerously underfoot, sheer drops to valleys far below. The air thins as altitude increases, makes breathing labor. These peaks are forbidden territory by ancient treaty - dragons claimed these heights three thousand years ago, and humans learned not to trespass lightly.`;

const magicalHeat = `Heat washes over you suddenly, completely unnatural in the mountain's cold altitude. Not the gradual warmth of approaching fire, but instant wave of magical temperature that makes sweat spring across your skin, makes the air shimmer like summer noon despite thin mountain atmosphere. The temperature shift is impossible, defies natural law - which means only one thing.

Dragons.`;

const mountainPath = `${mountainPathDescription}

${magicalHeat}

You stop, heart hammering, scanning the rocky terrain for source of that magical heat. Marcus and your companions tense, hands moving to weapons - though what good steel would do against ancient dragon, none of you want to contemplate.`;

const thornePhysicalDescription = `A man stands on an outcropping twenty feet ahead, positioned with casual confidence on rocks that should require careful climbing. Tall and lean-muscled, moving with predatory grace that marks apex predators. Copper-colored skin catching sunlight like polished metal, dark hair worn long and loose, features sharp and aristocratic in a way that seems almost inhuman. But it's his eyes that confirm what you suspected - copper irises that glow with inner fire, pupils slitted like great cat's, radiating heat you can feel from here.`;

const thorneDrake = `${thornePhysicalDescription}

This is no man. This is dragon wearing human shape like you might wear cloak - functional disguise that doesn't quite hide what's underneath.`;

const thorneGreeting = `"So." His voice resonates with harmonics no human throat could produce, words carrying weight of ancient power. "The lost heir walks uninvited into dragon's domain." He tilts his head, movement too smooth, studying you with predatory intensity that makes prey animals understand they're about to die. "Brave? Foolish? Perhaps both."

A smile curves his mouth, showing teeth just slightly too sharp. "I am Thorne Drake, youngest of the Bronze Flight, keeper of these peaks for merely two centuries. And I'm curious about you, little heir. Humans rarely venture this high. Those who do usually have excellent reasons... or terrible ones."`;

const trueFormReveal = `The air shimmers around him, reality bending like heat haze. For just a moment - maybe two heartbeats - you glimpse his true form:

Massive bronze dragon, thirty feet from snout to tail-tip, wings that would span highway, scales that catch sunlight like hammered metal. Ancient beyond human comprehension, powerful enough to level castle walls, beautiful in the way natural disasters are beautiful - terrifying majesty that renders human concerns insignificant.`;

const trueForm = `${trueFormReveal}

Then he's human-shaped again, but the power remains. You can still feel it radiating from him - age and strength and magic that makes royal blood seem like pale imitation of real power. This is what existed before human kingdoms, what will exist after they crumble to dust.`;

const dragonChallenge = `"The humans play their political games in valleys below," Thorne continues, gesturing dismissively toward distant kingdom. "Factions fighting over throne, nobles squabbling over power, generals consolidating armies. Dragons observe. We've watched kingdoms rise and fall for three thousand years. Empires you'd consider ancient history are childhood memories to us."

He steps closer, copper eyes holding yours. "But you... you're interesting. Young human who walks into dragon territory uninvited, who seeks alliance with magical races instead of human power structures, who carries both royal blood and untrained magical potential."

The air heats further, makes sweat drip down your spine. "Show me why I should care about another mortal's political ambitions. Dragons have seen ten thousand heirs make ten thousand promises. Convince me you're different."`;

const getFirstDragonEncounterText = (): string => {
	return `${mountainPath}

${thorneDrake}

${thorneGreeting}

${trueForm}

${dragonChallenge}`;
};

export const FirstDragonEncounter: Scene = {
	id: 'first_dragon_encounter',
	get text() {
		return getFirstDragonEncounterText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['independent_path_confirmed:true', 'chosen_own_path:true'] },
			text: `${mountainPath}

But your arrival isn't unexpected. Word of your independent choice has traveled through magical race networks faster than human messengers could carry news.

${thorneDrake}

"So you're the one." His resonating voice carries note of genuine interest. "The heir who refused all human factions. Who rejected Loyalist nobility, Reformist democracy, Military authority - chose to stand alone rather than compromise vision for convenient political alliance."

He steps closer, copper eyes blazing with inner fire. "Dragons appreciate those who see beyond petty power games. Three thousand years we've watched humans fight over who controls what valley, which noble house holds which title, whose army enforces whose laws. All temporary. All meaningless in the long view."

${thorneGreeting}

But there's respect in how he regards you now, predator recognizing potential in prey that proves more interesting than expected.

${trueForm}

"You seek alliance with the magical races, not human power brokers. You prioritize healing the realm over claiming authority within it. That shows wisdom rare in mortals - understanding that some things matter more than immediate personal power."

The air cools slightly - Thorne's equivalent of welcoming gesture. "Very well, little heir who chose courage over convenience. Show me you're worthy of dragon attention. Prove this independence isn't just youthful idealism that will crumble under pressure."

He's intrigued. That's more than most humans achieve with dragons in entire lifetimes.`
		},
		{
			conditions: { hasFlags: ['magical_races_priority:true', 'diplomatic_focus:true'] },
			text: `${mountainPath}

${thorneDrake}

But recognition flares in those copper eyes when he studies you more closely. "Lyra speaks well of you. Remarkable - elves don't praise humans lightly. She says you put the realm's needs above human political concerns, that you prioritize healing the breach between species over consolidating personal power."

His predatory intensity shifts to something more thoughtful. "In three thousand years, I've met perhaps five human leaders who genuinely valued magical races as equals rather than resources to exploit or threats to control. Lyra believes you might be the sixth."

${thorneGreeting}

The challenge in his voice softens fractionally - you've already earned preliminary respect through actions that impressed someone ancient elves respect.

${trueForm}

"Your commitment to the magical races from the beginning suggests genuine vision, not just political expedience seeking our power. Dragons have waited centuries for leader who sees beyond human-centric worldview, who understands that true strength comes from unity across all the realm's peoples."

He tilts his head, copper eyes glowing. "Impress me further. Show me Lyra's faith in you is justified. Prove you're worth dragon alliance, not just elven approval."

You've passed the first test before even speaking - but dragons have many more tests waiting.`
		},
		{
			conditions: { hasHiddenAttributes: { blood_magic_training: true, lyra_respect: 10 } },
			text: `${mountainPath}

${thorneDrake}

But he pauses mid-greeting, copper eyes narrowing. The air around you shimmers as he extends magical senses, reading something about you that wasn't immediately visible.

"You've awakened royal blood magic." Surprise flickers across his sharp features - first genuine emotion he's shown. "And Lyra trained you. The ancient elf taught a human to wield inherited magical power."

He circles you slowly, predatory assessment shifting to fascinated study. "Elves don't teach humans lightly. Their training requires trust that takes centuries to build - yet Lyra granted it to you after mere weeks. Extraordinary."

${thorneGreeting}

But his copper eyes burn brighter now with interest verging on respect.

${trueForm}

"A magic-wielder with elven approval, carrying both royal blood and the training to use it properly. The last human who earned such combined blessings became the greatest monarch in your kingdom's history - ruled for sixty years of unprecedented peace and prosperity."

The air cools slightly - Thorne's equivalent of welcoming gesture. "Very well. You have my full attention now, young magic-wielder. Show me what else you're capable of. Show me if you'll match that historical precedent or become just another brief footnote in the long story dragons remember."

You've impressed an ancient dragon. That changes everything.`
		},
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true', 'progressive_ruler:true'] },
			text: `${mountainPath}

${thorneDrake}

${thorneGreeting}

But when he assesses you more carefully, copper eyes gleam with interest. "You chose the Reformists. Democracy over tradition, people's voices over autocratic control. Interesting choice for someone born to inherit absolute authority."

He tilts his head, studying you with predatory precision. "Dragons have watched enough human governments to recognize patterns. Democratic systems tend toward greater stability long-term - when people have voices in governance, they invest in maintaining that governance rather than tearing it down. Though implementation is complex, often fails."

${trueForm}

"Your willingness to share power rather than consolidate it suggests either remarkable wisdom or dangerous naivety. Dragons haven't decided which yet. But it's notable - most heirs cling desperately to every scrap of authority they can claim. You chose to distribute power deliberately."

The air shifts, heat diminishing slightly. "Show me this democratic vision you've endorsed actually has practical merit. Convince me you're building something stable, not just indulging idealistic fantasy that will collapse under pressure. If you succeed, you'll have earned dragon respect. If you fail... well, dragons remember failed experiments as warnings for future centuries."

He's testing you, but he's taking you seriously. That's significant.`
		},
		{
			conditions: { hasFlags: ['military_path_confirmed:true'] },
			text: `${mountainPath}

${thorneDrake}

${thorneGreeting}

But when he assesses your recent choices, something cold enters those copper eyes. "You allied with General Blackwood. Chose military authority and authoritarian control over other options."

The heat intensifies uncomfortably, makes you step back involuntarily. "Dragons have watched military dictatorships rise and fall for three millennia. We know the pattern - initial order and stability purchased through force, gradual descent into paranoia and tyranny, eventual catastrophic collapse when oppressed populations can't endure anymore."

${trueForm}

"Your general sees strength as domination, security as control, order as obedience enforced through threat of violence. Dragons understand strength differently - real power doesn't need to threaten constantly to maintain itself. Real order emerges from respect, not fear."

He steps closer, predatory menace radiating from human-shaped form. "I'm curious whether you'll become puppet for military authoritarianism, or whether you'll prove strong enough to control the forces you've allied with. Show me which path you'll walk, little heir. Convince me you won't become just another tyrant we'll eventually need to remove."

The challenge is hostile now, testing whether you're worth dragon time or just another mistake waiting to be corrected by forces older than human civilization.`
		}
	],
	choices: [
		{
			id: 'combat-trial',
			text: 'Accept his combat trial - prove your strength through direct contest with a dragon',
			next: 'common_people_scene',
			effects: { courage: 5 },
			hiddenEffects: {
				thorne_respect: 15,
				dragon_trial_accepted: true,
				impressed_by_courage: true
			}
		},
		{
			id: 'wisdom-trial',
			text: 'Request trial of wisdom instead - riddles, strategy, and philosophical challenge rather than violence',
			next: 'common_people_scene',
			effects: { wisdom: 5 },
			hiddenEffects: {
				thorne_respect: 12,
				dragon_trial_accepted: true,
				impressed_by_mind: true
			}
		},
		{
			id: 'refuse-fight',
			text: 'Refuse to be tested - you came to negotiate as equals, not perform like trained animal',
			next: 'common_people_scene',
			effects: { charisma: 4 },
			hiddenEffects: {
				thorne_respect: 10,
				dragon_intrigued: true,
				bold_approach: true
			}
		},
		{
			id: 'ask-why',
			text: 'Ask why dragons care about mortal politics if kingdoms are so temporary in their view',
			next: 'common_people_scene',
			effects: { wisdom: 4 },
			hiddenEffects: {
				thorne_respect: 13,
				dragon_trial_accepted: true,
				philosophical_interest: true,
				thorne_opens_up: true
			}
		}
	]
};

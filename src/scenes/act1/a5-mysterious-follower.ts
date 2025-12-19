import { Scene } from '../../story-manager';

const leavingManor = `The days at Silverwood Manor blur together in a rush of revelations and responsibilities. Political meetings with faction leaders who assess your every word. Discovery of hidden chambers holding ancestral secrets. Conversations with Sir Aldric's spirit, learning truths about your family and your power that reshape your understanding of everything. Late nights in the library, reading your parents' journals, touching artifacts that pulse with residual magic, walking gardens your grandmother planted with her own hands.

It's overwhelming. Exhilarating and terrifying in equal measure. You're not just discovering a heritage—you're being rebuilt by it, piece by piece, into someone new. Or perhaps someone you were always meant to be but couldn't become until now.

But you can't stay sequestered in the manor forever. Rowan makes that clear: "You need to be seen. Need to move through the kingdom, let people know the heir has returned. Silverwood isn't just this estate—it's the villages and forests, the roads and rivers, the people who live here. They need to see you as real, not just rumor and prophecy."`;

const journeyBegins = `So you're returning to the village where your journey first led you, where the Guild Master first sent you toward Silverwood, where ordinary people live ordinary lives that will be affected by whatever political decisions you make. Rowan accompanies you, of course, along with whatever companions you've chosen to bring. The journey takes most of a day—following forest paths that wind through ancient trees, crossing streams that run clear and cold, passing through clearings where sunlight filters down in golden columns.`;

const forestAtmosphere = `The forest itself is beautiful in a way that makes your chest ache. Late afternoon light slants through leaves, creating shifting patterns of shadow and illumination. Birds sing complex melodies from hidden branches. Small animals rustle through underbrush, going about their lives with no awareness of royal bloodlines or political machinations. The air smells of pine and earth and growing things, clean and vital in a way that makes the manor's grandeur feel almost stifling by comparison.

Your grandmother would have loved this, you think. The woman who planted gardens and valued beauty as much as power would have walked these paths with reverence, appreciating the forest not as resource or territory but as living art.`;

const mentalBurden = `But beauty doesn't erase complexity. Your mind churns with everything you've learned, everything you're carrying. The political factions with their competing visions for the kingdom's future. Sir Aldric's wisdom, offered as a gift but weighted with expectation. The truth about your family—their sacrifice, their love, their desperate hope that you would survive and return. The blood magic humming in your veins, eager to be used but dangerous if mishandled. The companions whose loyalty you value but whose safety you now worry about, knowing that proximity to you creates risk.

It's a lot. Maybe too much for one person to carry, but you don't have the luxury of putting it down.`;

const rowanVigilance = `Rowan has been watchful throughout the journey, forest-sharp senses constantly monitoring surroundings. They move with the unconscious grace of someone completely at home in wilderness, reading signs you can't even see—tracks in soft earth, broken branches that indicate passage, subtle changes in bird behavior that suggest disturbance. They've been teaching you as you walk, pointing out details, explaining what to look for.

"Nature always tells you what's happening," Rowan explained earlier. "You just have to learn its language. That squirrel's alarm call means something passed nearby recently. That pattern of disturbed leaves shows which direction. That silence in what should be noisy underbrush suggests a predator, or something else that makes prey freeze and hide."

You've been trying to learn, to observe with the same attention Rowan brings to every step. But your mind keeps drifting back to manor concerns, political worries, the weight of heritage and responsibility.`;

const rowanAlert = `Which is why you almost miss it when Rowan suddenly freezes mid-step, every muscle going tense. Their hand shoots up in the universal signal for stop, and their head tilts slightly, listening to something you can't hear.

You freeze too, heart rate immediately spiking. After a long moment of intense focus, Rowan turns to you, voice dropping to barely more than a whisper:

"We're being followed."

The words send ice down your spine. You start to turn, to look back along the path, but Rowan catches your arm. "Don't. Don't let them know we've noticed. Whoever it is, they're skilled—very skilled. I only caught them because of a single mistake: a broken twig where there shouldn't have been one. Most people would have missed it entirely."

Rowan's expression is serious, calculating. "They've been tracking us for at least the last mile, maybe longer. Staying just out of sight, matching our pace perfectly. That level of skill suggests training—military, mercenary, or something else specialized. This isn't a curious villager or opportunistic bandit. This is someone who knows what they're doing."`;

const shadowPresence = `Now that you're aware, you catch glimpses yourself. Movement at the edge of vision—a shadow that shifts wrong, a silhouette that disappears too quickly behind tree trunks, the sense of eyes watching from concealed positions. Whoever is following you is staying carefully hidden, but they're there. Present. Tracking your every step.

The hair on the back of your neck rises, primal instinct responding to the reality of being hunted. Because that's what this is, isn't it? You're being hunted. Followed with intent and skill by someone who doesn't want to be seen but wants you to be watched.

Are you in danger? Is this an assassin waiting for the perfect moment to strike? A spy gathering intelligence about the returned heir? Someone sent by one of the political factions to assess you outside the formal setting of the manor? Or something else entirely—a threat you haven't even imagined yet?`;

const decisionPoint = `Rowan watches you carefully, waiting for your decision. They're your guardian, yes, but they're also respecting your authority to choose how to respond. This is a test, you realize—not of your combat ability or survival skills, but of your judgment. How do you handle being followed? What does your choice reveal about the kind of leader you'll become?

The forest seems to hold its breath, waiting. The follower continues their patient tracking, unaware that you've noticed them. And you stand at a crossroads of possibilities, each choice leading toward a different kind of confrontation.`;

const getMysteriousFollower = (): string => {
	return `${leavingManor}\n\n${journeyBegins}\n\n${forestAtmosphere}\n\n${mentalBurden}\n\n${rowanVigilance}\n\n${rowanAlert}\n\n${shadowPresence}\n\n${decisionPoint}`;
};

export const MysteriousFollower: Scene = {
	id: 'mysterious_follower',
	get text() {
		return getMysteriousFollower();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['learned_crystal_heart_history:true', 'knows_betrayal:true'] },
			get text() {
				return `When you asked Sir Aldric about the Crystal Heart—the magical artifact whose shattering marked the beginning of House Silverwood's fall—you expected a tale of accident or external attack. What you received instead was far more disturbing: the truth of betrayal from within.

The Crystal Heart didn't shatter through enemy action or natural decay. It was destroyed deliberately, sabotaged by someone close to your family, someone trusted who turned traitor for reasons Aldric couldn't fully explain. "The spirits know much," he said, "but we cannot see into the human heart's darkest motivations. Someone your family trusted, someone with access to the Heart's chamber, someone who knew exactly how to break what should have been unbreakable. They struck from within, and the kingdom fell."

That knowledge has haunted you throughout the manor days and now weighs heavily during this journey. Betrayal from within. Trust violated. Loyalty corrupted. Someone in the kingdom wanted your family dead—wanted it badly enough to destroy the very source of Silverwood's power, knowing the devastation that would follow.

And here's the terrifying question: is that betrayer still alive? Still active? Still hunting royal blood?

${leavingManor}

${journeyBegins}

${forestAtmosphere}

But you can't fully appreciate the beauty. Your mind keeps returning to Aldric's revelation, to the implications. Who betrayed your family? What motivated them? Were they working alone or as part of a larger conspiracy? And most urgently: do they know you've returned? Are they even now planning to finish what they started twenty years ago?

${mentalBurden}

${rowanVigilance}

${rowanAlert}

The words hit like a physical blow. Being followed. Someone tracking you with professional skill, staying hidden, watching your every move.

Coincidence? Or is this the betrayer, still active after all these years, still hunting Silverwood blood? Is this an assassin sent to ensure the heir doesn't survive long enough to reclaim power?

Your hand instinctively moves to your blood mark, feeling the warmth there. The magic that marks you as heir also marks you as target. Anyone hunting Silverwood would know exactly what to look for.

${shadowPresence}

Rowan notices your tension, the way your mind has immediately jumped to worst-case scenarios. "Stay calm," they murmur. "Fear clouds judgment. We don't know who this is yet, or what they want. Could be threat, could be curiosity, could be something else entirely. Focus on response, not assumption."

But it's hard not to assume the worst when you know your family was destroyed by someone they trusted. When you know that betrayal killed everyone you should have grown up with, stole the childhood you should have had, created the orphan existence that shaped your entire life.

If this is that betrayer, or their successor, or their ally... then this forest might become a battlefield. And you need to be ready.

${decisionPoint}

But the weight of Aldric's revelation adds urgency to your decision. This isn't just about being followed—it might be about survival against enemies who've already proven they can destroy everything you could become.`;
			}
		},
		{
			conditions: { hasFlags: ['blood_magic_training:true', 'magical_path_priority:true'] },
			get text() {
				return `When you asked Sir Aldric how to properly awaken and control your blood magic, you expected theoretical instruction or philosophical guidance. What you received was practical training that has fundamentally changed your relationship with the power in your veins.

Aldric taught you techniques for channeling blood magic without harming yourself: breathing exercises that calm the power's eager surging, mental frameworks for directing its flow, physical gestures that help focus its manifestation. "Blood magic wants to be used," he explained. "It's eager, hungry, always pushing for expression. Most untrained Silverwood heirs hurt themselves through enthusiastic overuse, burning out their own vitality in spectacular but devastating displays. Control isn't about suppressing the power—it's about directing it with precision rather than letting it explode uncontrolled."

You've been practicing throughout your manor stay. Small exercises at first: making your blood mark glow brighter or dimmer at will, sensing magical signatures in objects and people, drawing tiny amounts of power without exhausting yourself. Each success builds confidence, each failure teaches refinement.

Now, during this forest journey, your blood magic hums beneath your skin like a second heartbeat. Alert, aware, eager to prove itself. You feel more alive than you ever have, connected to something ancient and powerful that recognizes you as its rightful wielder.

${leavingManor}

${journeyBegins}

${forestAtmosphere}

Your blood mark tingles as you walk, responding to the forest's ambient magic. You can sense enchantments woven through old-growth trees—protective wards left by druids generations ago, fading but still present. You feel the life force of creatures nearby, their vitality registering as warm spots in your magical awareness. The forest itself pulses with power, and your blood magic drinks in that sensation, feeding on proximity to living things.

${mentalBurden}

But the mental burden feels lighter now. Yes, you're carrying immense responsibility, but you're also carrying immense power. That makes a difference—not just practically, but psychologically. You're not helpless. You're not defenseless. Whatever challenges come, you have tools to face them.

${rowanVigilance}

${rowanAlert}

The moment Rowan speaks, your blood mark flares. Not painfully, but urgently—a warning that confirms what Rowan's mundane senses detected. Your magic recognizes a presence, reads something in the follower's signature that mundane observation alone couldn't perceive.

You focus, letting your blood magic extend awareness outward like invisible fingers. The follower's presence becomes clearer: powerful. Not just skilled in mundane tracking, but carrying magic of their own. Significant magic. Old magic. Something that makes your inherited power sit up and take notice.

${shadowPresence}

Your blood mark continues tingling, feeding you information. The follower's magical signature feels... complicated. Not straightforwardly hostile like you'd expect from an assassin, but not benign either. There's purpose there, intensity, focus. This person is tracking you for a reason, and that reason involves power you don't fully understand yet.

"The follower has magic," you tell Rowan quietly. "Strong magic. I can feel it."

Rowan's eyes sharpen. "What kind?"

"I don't know. I'm still learning to read these signatures. But it's powerful, old, deliberate. Whoever this is, they're not ordinary."

Rowan nods, reassessing the situation with this new information. "Your blood magic is already proving useful. Most people couldn't sense that. The question is: does this magical follower know you've sensed them? Some practitioners can tell when they're being magically observed. If they know we're aware..."

They leave the implication hanging. If the follower knows you've noticed them, the careful stalking might end abruptly—either in retreat or attack.

${decisionPoint}

Your blood magic thrums with readiness. Whatever you decide, you won't face it powerless. Aldric's training has given you tools, and your awakening power is eager to prove its worth. The question is how to use it—with restraint and precision as Aldric taught, or with the overwhelming force your magic keeps suggesting is available if you just let go.`;
			}
		},
		{
			conditions: { hasFlags: ['learned_family_fate:true', 'family_focused:true'] },
			get text() {
				return `When you asked Sir Aldric what really happened to your family, you expected confirmation of what you already knew: they died in the Purge, executed by enemies who feared Silverwood power. What you received was the full truth—not just the fact of their deaths, but the context of their sacrifice, the depth of their love, the terrible choices they made to ensure you would survive.

Aldric told you about your mother's tears when the seers revealed the prophecy—a vision of the Purge coming, her family destroyed, but one thread of hope: a child born twenty years later, heir to everything lost, destined to either restore or transform the kingdom. She wept not from fear of her own death, but from grief at never meeting you, never holding you, never seeing who you'd become.

He told you about your father's rage—not at enemies, but at fate itself, at the universe that would demand such a price. How he spent days locked in his study, searching desperately for any alternative, any way to save his family and his future child. How he eventually emerged hollow-eyed but resolved, accepting what couldn't be changed, beginning preparations to ensure you'd have every possible advantage.

They died protecting you. Not in the moment of the Purge—they'd already died in the moment they accepted the prophecy, surrendering their own futures to secure yours. Everything afterwards was just the universe catching up to decisions already made in their hearts.

${leavingManor}

That truth has been with you throughout the manor days, weighing on every choice, every moment. Your parents loved you before you were born. Loved you enough to die so you could live. That's... profound. Overwhelming. It transforms grief from abstract loss into visceral connection.

${journeyBegins}

${forestAtmosphere}

You find yourself wondering what your mother would think of this forest, this journey. Would she approve of your choices? Would your father be proud of how you've handled the impossible position you've been thrust into? You'll never know for certain, but the wondering itself feels important—staying connected to them through questions even if answers remain forever out of reach.

${mentalBurden}

The emotional weight is almost more exhausting than the physical or political challenges. Grief for parents you never knew but now understand loved you fiercely. Gratitude for their sacrifice mixed with rage that sacrifice was necessary. The pressure of wanting to be worthy of what they gave up, of making their deaths mean something.

${rowanVigilance}

Rowan has noticed your distraction, the way your attention keeps drifting inward toward emotional processing rather than outward toward the journey. They've been gentle about it, not pushing, but you can see the concern in their eyes. Your guardian knows that distracted people make mistakes, that emotional overwhelm creates vulnerability.

${rowanAlert}

The words snap you into focus immediately. Being followed. Danger. Threat.

Your family died protecting you. You won't waste that sacrifice by being careless, by letting distraction get you killed. Whatever grief and gratitude you're carrying, whatever emotional complexity you're processing—it all has to be set aside right now. Survival first. Processing later.

${shadowPresence}

Rowan sees the shift in your demeanor—from distracted mourning to sharp attention. "Good," they murmur approvingly. "Your family sacrificed everything so you could live. Honor that sacrifice by staying alive. Mourn later, after we've dealt with whoever this is."

The words are blunt but effective. Your parents gave up their lives, their future, everything they could have been, to ensure you'd exist. The absolute least you can do is take survival seriously, treat threats with appropriate caution, make choices that protect the life they died to create.

You straighten, emotional weight transforming into resolve. You're not just some orphan stumbling through an inherited mess. You're the child your parents chose to save, the heir they believed in before you were born, the hope they invested everything into preserving. That means something. That demands you rise to meet it.

${decisionPoint}

Whatever you decide, you'll make this choice knowing it honors your family's sacrifice. They gave you life. You'll prove that gift wasn't wasted by living with courage, with wisdom, with the kind of strength they believed you'd develop even if they couldn't be there to see it.`;
			}
		},
		{
			conditions: { hasFlags: ['healing_path:true', 'compassionate_actions:5'] },
			get text() {
				return `When you asked Sir Aldric how to help your people and heal the kingdom's wounds, you expected tactical advice or political strategy. What you received was something deeper: a philosophy of leadership rooted in compassion, a vision of power used not for domination but for restoration.

"The kingdom is broken," Aldric explained. "Not just politically or economically, but spiritually. Twenty years of fear and division have created wounds that won't heal through force or clever maneuvering. People have lost faith—in their leaders, in each other, in the possibility of something better. Your task isn't to impose order from above. It's to help people remember what they're capable of when they work together, when they trust each other, when they believe change is possible."

He taught you about your grandmother's approach to leadership: she spent more time listening than commanding, more time in villages than in court, more time building relationships than enforcing hierarchy. She believed that a ruler's legitimacy came not from bloodline or power, but from genuine connection to the people being served.

"You can't heal from a distance," Aldric said. "You have to be present. Have to see people's actual lives, understand their real struggles, let them see you as a person rather than a symbol. That's what your grandmother understood. That's what made people love her even when they disagreed with her policies."

${leavingManor}

That wisdom has shaped your manor days profoundly. You've been thinking not just about political strategy, but about genuine human connection. How to bridge the divides between factions. How to acknowledge past wrongs without getting trapped in blame. How to inspire hope without making empty promises.

${journeyBegins}

This journey itself is part of that approach. You're not staying isolated in the manor, protected from common people by walls and guards. You're moving through the kingdom, being visible, being present, being accessible. Letting people see that the heir has returned and is willing to walk the same paths they walk.

${forestAtmosphere}

Your grandmother would have loved this, you think. The woman who valued beauty and connection, who planted gardens and listened to street musicians, who believed power should serve beauty rather than beauty serving power. She would have walked these paths with joy, stopped to appreciate the sunlight and birdsong, found connection to the land itself as a way of connecting to the people who live upon it.

${mentalBurden}

But compassionate leadership doesn't mean avoiding complexity or ignoring danger. It means facing those challenges with full awareness of how choices affect real people's real lives. Every political decision has human consequences. Every alliance made or refused impacts families and communities. You can't afford to forget that.

${rowanVigilance}

${rowanAlert}

Your first instinct isn't violence—it's understanding. Who is this follower? What do they want? What drove them to track the returned heir through forest paths with such professional skill?

Maybe they're an assassin. But maybe they're a scout, an observer, someone trying to assess whether you're a threat or an opportunity. Maybe they're curious. Maybe they're desperate. Maybe they're following orders they don't fully understand or agree with.

${shadowPresence}

Rowan watches your face, reading your thoughts with the ease of someone who's spent significant time with you. "I know what you're thinking," they say quietly. "Compassion first, violence only if necessary. Your grandmother taught that approach, and it's not wrong. But compassion doesn't mean being naive. Sometimes people who seem like they might be reasoned with are actually just waiting for an opening to strike."

They're right, of course. Compassion has to be balanced with wisdom, idealism tempered by reality. You can hope for peaceful resolution while preparing for violent confrontation. You can extend understanding while maintaining appropriate caution.

"We'll try to understand them," you say. "But we won't be stupid about it."

Rowan nods, satisfied. "Good. Your grandmother's compassion was powerful because it was intelligent, not because it was blind. She extended mercy from a position of strength, not weakness. That's the balance you need to find."

${decisionPoint}

Whatever you choose, you'll approach this with the values Aldric taught you. Compassion doesn't mean passivity. Understanding doesn't mean vulnerability. You can be both kind and strong, both open and cautious, both hopeful and realistic. That's the leadership your grandmother modeled. That's the healing path you're choosing to walk.`;
			}
		},
		{
			conditions: {
				hasHiddenAttributes: { ash_trust: 20 }
			},
			get text() {
				return `${leavingManor}

Ash insisted on accompanying you for this journey. "You're valuable now," they said bluntly. "Not just to me personally, but politically. Every faction wants to either control you or eliminate you as a threat. You don't travel without serious protection anymore. That's just reality."

You appreciated the honesty, and you appreciate their presence. Ash brings a mercenary's practical assessment of danger, a warrior's readiness for violence if necessary, and—beneath all that professional competence—genuine care for your wellbeing that goes beyond duty or contract.

${journeyBegins}

${forestAtmosphere}

But while you're appreciating natural beauty, Ash is assessing tactical vulnerability. They note sightlines and cover positions, identify bottlenecks where ambush would be most effective, calculate escape routes if sudden retreat becomes necessary. It's second nature to them—the constant vigilance that kept them alive through years of mercenary work.

${mentalBurden}

Ash has been watching you carry that burden throughout the manor days and now during this journey. Last night, around the campfire, they spoke about it: "You're allowed to struggle, you know. Allowed to be overwhelmed. This is overwhelming—I'd be concerned if you weren't feeling the weight. But don't let it paralyze you. Process it, acknowledge it, then set it aside when you need to act. That's what warriors do with trauma and fear. We feel it, then we fight anyway."

Their words helped. Knowing that someone sees your struggle, validates it, and still believes in your capability to handle what's coming—that matters.

${rowanVigilance}

Ash suddenly drops back, hand moving to weapon with practiced ease. Their entire demeanor shifts—from traveling companion to combat-ready warrior in an instant. They don't speak loudly, just murmur: "We have company."

Rowan hears it and nods, their own body language changing to match Ash's readiness. "I sensed them too," Rowan confirms. "Professional. Been following us for at least a mile, maybe more."

The two warriors exchange a look—assessment happening in silence as they evaluate each other's capabilities and coordinate without need for explicit discussion. Years of combat experience on both sides create instant understanding. Ash commands a mercenary company. Rowan is a ranger who's survived decades in dangerous wilderness. Together, they're formidable.

Ash's scarred face shows calculation rather than fear. "Distance?" they ask Rowan.

"Fifty yards, maybe sixty. Staying in cover, matching our pace. Single individual as far as I can tell, but skilled enough that there could be others I haven't detected."

Ash nods, processing. "Shall we spring the trap? Force them into visibility, assess whether they're threat or just observer?"

Rowan considers. "Your call," they say to you, respecting your authority to decide. "But yes—I'd recommend forcing contact on our terms rather than waiting for them to choose the moment."

${shadowPresence}

${decisionPoint}

But the presence of both Ash and Rowan changes the equation significantly. You're not alone or unprotected. You have two extremely capable warriors ready to defend you, both of whom respect your judgment while offering their own tactical expertise. 

Ash catches your eye and gives a slight nod—reassurance without words. They've got your back. Whatever you decide, you won't face it alone. That confidence, that trust, that solid partnership... it makes all the difference.`;
			}
		}
	],
	choices: [
		{
			id: 'confront',
			text: 'Confront them directly and boldly—you will not be hunted like prey in your own kingdom',
			next: 'shadow_beast_attack',
			effects: { courage: 4 },
			hiddenEffects: {
				confrontational_tendency: true,
				rowan_bond: 5,
				direct_approach: true
			}
		},
		{
			id: 'trap',
			text: 'Work with Rowan to set a tactical trap—force them into revealing themselves on your terms',
			next: 'shadow_beast_attack',
			effects: { wisdom: 3 },
			hiddenEffects: {
				tactical_mind: true,
				rowan_bond: 10,
				cooperative_combat: true
			}
		},
		{
			id: 'lose-them',
			text: 'Use forest terrain to lose them—avoid confrontation until you understand the threat better',
			next: 'shadow_beast_attack',
			effects: { wisdom: 2 },
			hiddenEffects: {
				cautious_approach: true,
				rowan_bond: 7,
				stealth_preference: true
			}
		},
		{
			id: 'public',
			text: 'Head toward the nearby village—seek safety in numbers and force them into the open',
			next: 'shadow_beast_attack',
			effects: { wisdom: 4 },
			hiddenEffects: {
				clever_tactics: true,
				rowan_bond: 8,
				protective_of_others: true
			}
		}
	]
};

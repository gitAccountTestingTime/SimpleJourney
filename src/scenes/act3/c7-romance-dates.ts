import { Scene } from '../../story-manager';

// Romance Date Scenes - Intimate bonding moments

const hilltopStars = `Lyra takes you to a hilltop far from the palace, away from city lights that would drown out the celestial beauty she wants to share. The journey itself is quiet, contemplative - she leads you through evening-darkened paths with sure-footed grace that speaks of centuries navigating by starlight. When you reach the summit and the full expanse of night sky opens above you, the sight takes your breath away. Stars are breathtaking beyond anything you've seen from palace windows, stretching across the sky in brilliant swaths and rivers of light. The Milky Way blazes overhead like divine pathway, countless stars creating luminous road across darkness.`;

const elfNavigation = `"Elves navigate by stars," Lyra explains softly, voice taking on quality of ritual knowledge being transmitted - something sacred her people have practiced for millennia. "Every constellation tells a story spanning thousands upon thousands of years. Histories written in light, navigation charts drawn by gods or nature or the universe itself arranging its patterns." She points with elegant precision. "See there? The Wanderer's Path. It's been guiding lost travelers for five thousand years - longer than most human civilizations have existed. My ancestors used those stars to cross continents when your ancestors were just beginning to build permanent settlements."`;

const closeProximity = `She's closer to you than usual, her shoulder touching yours as you both lie on the grass looking up at infinity. The physical contact is deliberate but natural, intimacy expressed through simple proximity rather than overt gesture. "There's a constellation my people call the Eternal Dance," she continues, and her voice carries weight of personal significance beyond astronomical description. "Two stars orbiting each other, bound by gravity across the void. They've circled each other for eons, never touching but never parting, locked in endless gravitational embrace that will continue until universe itself ends."`;

const soulStars = `Lyra turns to look at you, starlight reflecting in her ancient eyes - two hundred years of accumulated experience and wisdom focused entirely on this moment. "Ancient elves believed that some souls are like those stars. Destined to orbit each other, drawn together by forces greater than themselves - cosmic attraction that transcends choice or circumstance." Her voice drops to whisper filled with vulnerability and hope. "I used to think that was romantic nonsense. Beautiful metaphor maybe, but not truth. Just poetry trying to make sense of attraction that's really just chemistry and circumstance." She pauses, gathering courage. "But then I met you. And I've felt that gravitational pull. Something binding us together that I can't explain with science or magic or two centuries of experience with relationships. Something that feels like destiny, even though I've never believed in destiny."`;

const momentStretches = `The moment stretches between you, filled with possibility and the sound of night wind through grass - world holding its breath in space between confession and response. Her hand moves slightly, fingers barely grazing yours, question asked through touch rather than words. Above, the Eternal Dance continues its patient orbit, two stars bound by forces that transcend individual will.`;

const getLyraStargazingText = (): string => {
	return `${hilltopStars}

${elfNavigation}

${closeProximity}

${soulStars}

${momentStretches}`;
};

export const LyraStargazing: Scene = {
	id: 'lyra_stargazing',
	get text() {
		return getLyraStargazingText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['blood_magic_training:true', 'lyra_teaches_magic:true'], hasHiddenAttributes: { lyra_respect: 40 } },
			text: `${hilltopStars}

Lyra's hand finds yours as you lie in the grass together. "We've shared so much. I taught you blood magic - the deepest secrets of my people. You trusted me with your very essence."

${elfNavigation}

"Teaching you magic created a bond," she says softly. "Elves don't share that knowledge lightly. It requires complete trust, complete intimacy." ${closeProximity.slice(56)}

${soulStars}

${momentStretches}`
		},
		{
			conditions: { hasHiddenAttributes: { lyra_romance: 50 } },
			text: `${hilltopStars}

${elfNavigation}

Lyra takes your hand deliberately, fingers interlacing with yours. "We've been dancing around this for so long. The tension, the almost-moments, the way we look at each other."

${closeProximity}

She shifts closer, her breath warm against your ear. "I'm an elf. I've lived two hundred years. I know what love feels like, and I know what we have is real." ${soulStars.slice(64)}

"No more hesitation," she whispers. ${momentStretches.slice(4)}`
		}
	],
	choices: [
		{
			id: 'kiss',
			text: 'Kiss her under the stars - answer the gravitational pull with your own. Let the moment become what it has been building toward, two souls choosing to orbit together like the Eternal Dance constellation above. Physical expression of something that transcends physical, kiss blessed by starlight and centuries of romantic tradition.',
			next: 'crystal_hunt_continued',
			effects: { charisma: 5 },
			hiddenEffects: {
				lyra_romance: 70,
				first_kiss_lyra: true,
				'romantic_milestone:first_kiss': true,
				star_blessed: true
			},
			realLifeChallenge: {
				id: 'lyra_starlight_kiss',
				type: 'social',
				title: 'Starlit Affection',
				description: 'Like kissing Lyra under the eternal stars, share a romantic moment with your partner',
				instructions: 'Find a quiet moment with your partner and share a kiss. Let it be tender and meaningful, celebrating the bond you share.',
				durationMinutes: 1,
				verificationMethod: 'honor',
				rewards: {
					stats: { charisma: 3, empathy: 2 },
					message: 'Your romantic gesture mirrored the eternal dance of souls, just like Lyra described.'
				}
			}
		},
		{
			id: 'hold-hand',
			text: 'Take her hand - no need to rush this gravitational orbit. Sometimes the most powerful moments are the gentle ones, choosing connection without demanding immediate culmination. Let this be beginning rather than climax, patient acknowledgment that you have time to explore what exists between you. Show her that elven patience has taught you something.',
			next: 'crystal_hunt_continued',
			effects: { wisdom: 4, charisma: 3 },
			hiddenEffects: {
				lyra_romance: 65,
				gentle_progression: true,
				lyra_appreciated_patience: true
			}
		},
		{
			id: 'philosophy',
			text: 'Discuss the philosophy of eternal bonds - engage with the intellectual dimension of what she\'s offering. Explore together what it means for souls to be bound by forces greater than themselves, whether destiny exists or if we create meaning through choosing to believe in it. Match her centuries of wisdom with your own thoughtful analysis, creating intimacy through shared understanding.',
			next: 'crystal_hunt_continued',
			effects: { wisdom: 5 },
			hiddenEffects: {
				lyra_romance: 68,
				intellectual_intimacy: true,
				deep_understanding: true
			}
		}
	]
};

const campingTrip = `Rowan suggests a camping trip - just the two of you, in the deep wilderness beyond civilization's comfortable boundaries. No palace politics with their endless maneuvering, no schemes requiring constant vigilance, no roles and expectations weighing down every interaction. Just survival and freedom in their purest forms. The invitation itself is significant: Rowan rarely invites anyone into their true element, the wild places where they feel most authentically themselves. That they want to share this with you speaks volumes about trust and desire for genuine connection beyond formal roles.`;

const campfireRelaxed = `The first night, sitting by the campfire under canopy of stars, Rowan is more relaxed than you've ever seen them - decades of professional tension melting away in wilderness setting where pretense serves no purpose. They've caught fish for dinner with practiced skill that speaks of years surviving alone in wild, and are expertly preparing them over the flames with movements that are almost meditative. Watching them work - competent, confident, completely at ease - you realize you're seeing the person they are when no one's watching, when duty doesn't require them to be anything except themselves.`;

const realSelf = `"This is who I really am," Rowan says, gazing into the fire with contentment you've never seen at the palace. "Not the formal royal guardian who stands at attention and speaks in careful measured tones. Not the professional ranger filing reports and following protocols. Just someone who loves the wild, loves freedom, loves the simplicity of fire and stars and honest work." They turn to look at you, firelight dancing in their eyes. "Someone who finds peace in places where rules are survival and cooperation rather than politics and performance. Where relationships are authentic because pretense serves no survival function."`;

const seeingReal = `They look at you across the flames, and you see vulnerability they never show at court. "When I'm with you out here, I don't have to be anyone's protector or anyone's soldier. I don't have to maintain vigilance or remember my place in hierarchy. I can just... be." Their smile is genuine, unguarded - no professional mask, no careful control of expression. "You see the real me. Not many people do. Not many people I'd want to." The significance of that admission hangs between you like the smoke rising from fire, carrying meaning into darkness above.`;

const sharedBlankets = `Later, under shared blankets against the cold that settles after fire dies down, Rowan's hand finds yours with touch that's tentative but deliberate - question asked through physical contact. "I've never wanted to tie myself to anyone," they admit quietly, voice barely audible over night sounds of wilderness around you. "Always needed to stay free, unencumbered, able to move without considering anyone else's needs or wants. Freedom has been everything to me - the only thing that made sense after losing everyone." They pause, thumb tracing small circles on your hand. "But with you... freedom feels different. Like maybe being together could be its own kind of freedom. Not constraint but expansion. Not losing independence but gaining partnership that makes both of us more rather than less. Like maybe the best kind of freedom is choosing to orbit someone who makes you want to stay without demanding that you do."`;

const getRowanWildernessText = (): string => {
	return `${campingTrip}

${campfireRelaxed}

${realSelf}

${seeingReal}

${sharedBlankets}`;
};

export const RowanWilderness: Scene = {
	id: 'rowan_wilderness',
	get text() {
		return getRowanWildernessText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['rowan_origins_visited:true', 'promised_change:true'], hasHiddenAttributes: { rowan_bond: 50 } },
			text: `${campingTrip}

Rowan leads you through wilderness paths with easy confidence. "You came with me to my destroyed village. Saw where I came from, what shaped me." Their voice softens. "Now I want to share what heals me. The wild places where I find peace."

${campfireRelaxed}

${realSelf}

"You promised to change the system that failed my family," Rowan says. "You saw my pain and didn't turn away." ${seeingReal.slice(36)}

${sharedBlankets}`
		},
		{
			conditions: { hasHiddenAttributes: { rowan_romance: 55 } },
			text: `${campingTrip}

${campfireRelaxed}

Rowan looks at you with open affection. "I've been waiting for this. Time alone with you, away from duties and roles."

${realSelf}

${seeingReal}

${sharedBlankets}

Their thumb traces circles on your hand. "I love you. I've been trying not to, trying to stay professional, but I can't anymore." Their eyes search yours. "Tell me you feel it too."`
		}
	],
	choices: [
		{
			id: 'confession',
			text: 'Confess you feel the same - freedom together rather than freedom alone. Tell them that what you share doesn\'t diminish either of your independence but enhances it, that choosing to be together is itself an act of freedom rather than constraint. That love freely given and freely chosen is the ultimate expression of wilderness philosophy: authentic, unforced, natural.',
			next: 'crystal_hunt_continued',
			effects: { charisma: 6, courage: 3 },
			hiddenEffects: {
				rowan_bond: 70,
				rowan_romance: 70,
				mutual_understanding: true,
				wilderness_bond: true,
				rowan_committed: true
			}
		},
		{
			id: 'kiss',
			text: 'Answer with a kiss - sometimes words are civilization\'s tool and wilderness speaks through action. Let touch communicate what language fragments into inadequacy. Kiss them with honesty the wild demands, with passion unfiltered by social performance, with commitment that requires no witnesses or ceremonies to be real. Let firelight be your only audience.',
			next: 'crystal_hunt_continued',
			effects: { charisma: 5 },
			hiddenEffects: {
				rowan_bond: 68,
				rowan_romance: 72,
				first_kiss_rowan: true,
				passion_kindled: true
			}
		},
		{
			id: 'appreciate',
			text: 'Express gratitude for seeing their true self - acknowledge the profound gift they\'ve given by bringing you here, by letting down guards, by trusting you with vulnerability they show to almost no one. Tell them that being allowed to see the real Rowan, unfiltered by duty and professional distance, matters more than any formal declaration. That you treasure the trust implicit in this moment.',
			next: 'crystal_hunt_continued',
			effects: { charisma: 4, wisdom: 3 },
			hiddenEffects: {
				rowan_bond: 65,
				rowan_romance: 66,
				deep_appreciation: true,
				rowan_valued: true
			}
		}
	]
};

const morningSparring = `Kieran invites you to private sparring sessions in the early morning, before the rest of the palace wakes - timing that ensures complete privacy, no observers to witness what happens when professional boundaries blur during physical intensity. It's become a ritual over weeks: just the two of you, trading blows in the training yard as dawn breaks, bodies learning each other's rhythms and patterns through combat that's simultaneously serious practice and elaborate dance. Sweat and exertion and the particular intimacy that comes from trusting someone enough to fight them without holding back, knowing they'll stop before causing real harm.`;

const collapseGround = `Today, after a particularly intense bout where you've pushed each other to genuine limits, you both collapse on the ground, breathing hard and laughing with exhilaration that follows successful physical challenge. Kieran's usual stern composure - that professional mask of military discipline they maintain around everyone else - is gone completely, replaced by genuine joy that transforms their face. Hair plastered with sweat, uniform disheveled, guard completely down. You've never seen them like this: unfiltered, happy, beautifully human rather than perfectly professional.`;

const gettingGood = `"You're getting good," Kieran admits between gasps for breath, still catching air after the intensity of your exchange. "Really good. You almost had me there - that feint into low sweep combination would have worked on anyone with less experience. Maybe even would have worked on me six months ago." There's pride in their voice, instructor pleased with student's progress but also equal pleased with worthy opponent emerging. "I'm not holding back anymore. You've earned full effort."`;

const favoriteTime = `They turn their head to look at you, both of you still lying on the ground with dawn light beginning to paint sky in shades of gold and pink. "These mornings... they're my favorite part of the day. No duties pressing, no watching over my shoulder for threats, no maintaining professional distance for observing crowds." Their hand moves closer to yours on the ground, fingers almost touching, question implicit in the movement. "Just..." They trail off, searching for words to describe something that feels too significant for casual language.`;

const justUs = `"Just us," Kieran finishes quietly, and those two words carry weight of everything they're not saying aloud. "No captain and heir. No bodyguard and charge. No roles and responsibilities and all the reasons this shouldn't happen. Just two people who..." Their jaw tightens, as if they're fighting some internal battle between duty and desire, between professional ethics and personal feelings that have become too powerful to suppress. "I'm trying to maintain professional distance. Trying to remember all the reasons why this is inappropriate, why I shouldn't feel what I feel, why my position makes this impossible." The struggle shows in their expression.`;

const vulnerability = `Their fingers brush against yours with touch that sends electricity through the contact point despite its gentleness. "Tell me to stop. Tell me this is inappropriate, that I'm your bodyguard and these feelings are unprofessional, that we need to maintain boundaries. I'll lock these feelings away if you ask me to. I'll go back to being just Captain Kieran, perfectly professional, maintaining proper distance." They meet your eyes, vulnerable and hopeful and terrified in equal measure. "Or..." The word hangs in air between you, pregnant with possibility. "Or tell me you feel it too. Tell me these mornings mean something to you beyond combat practice. Tell me I'm not alone in this impossible situation where duty says no but everything else says yes."`;

const getKieranSparringText = (): string => {
	return `${morningSparring}

${collapseGround}

${gettingGood}

${favoriteTime}

${justUs}

${vulnerability}`;
};

export const KieranSparring: Scene = {
	id: 'kieran_sparring',
	get text() {
		return getKieranSparringText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['kieran_dilemma_resolved:true', 'stood_with_kieran:true'], hasHiddenAttributes: { kieran_loyalty: 55 } },
			text: `${morningSparring}

${collapseGround}

Kieran's expression softens with deep emotion. "You stood with me when I faced my uncle. Helped me navigate the impossible choice between family and duty."

${gettingGood}

"You've proven I can trust you with everything," Kieran says. "My loyalty, my heart, my future." ${favoriteTime.slice(51)}

${justUs}

${vulnerability}`
		},
		{
			conditions: { hasHiddenAttributes: { kieran_romance: 60 } },
			text: `${morningSparring}

${collapseGround}

Kieran reaches out, brushing sweat-dampened hair from your forehead with surprising tenderness. "I've been in love with you for weeks. Maybe longer."

${gettingGood}

Their hand cups your cheek. "I know all the reasons this is complicated. But I don't care anymore." ${favoriteTime.slice(51)}

"I need you to know," Kieran says urgently. "Not as captain to heir. Not as bodyguard to charge. As Kieran to you. I'm completely, hopelessly in love with you."`
		}
	],
	choices: [
		{
			id: 'kiss',
			text: 'Close the distance - kiss them with all the intensity of your sparring matches. Answer their vulnerability with your own courage, crossing the professional boundary they have been desperately maintaining. Let the physical connection you have been building through combat transform into physical connection of entirely different nature. Show them through action that some rules are worth breaking.',
			next: 'crystal_hunt_continued',
			effects: { charisma: 6, courage: 4 },
			hiddenEffects: {
				kieran_loyalty: 75,
				kieran_romance: 75,
				first_kiss_kieran: true,
				kieran_barrier_broken: true,
				passionate_love: true
			}
		},
		{
			id: 'confess',
			text: 'Confess you\'ve been fighting the same feelings - that these mornings matter to you beyond training, that you see them not as bodyguard but as person you\'ve come to care for deeply. That professional distance has been getting harder for you too, that you lie awake thinking about them, that every touch during sparring lingers. Mirror their vulnerability with your own honest confession.',
			next: 'crystal_hunt_continued',
			effects: { charisma: 5 },
			hiddenEffects: {
				kieran_loyalty: 72,
				kieran_romance: 73,
				mutual_confession: true,
				kieran_relieved: true
			}
		},
		{
			id: 'professional',
			text: 'Acknowledge feelings but suggest staying professional for now - you feel it too, but perhaps this isn\'t the right moment. There are dangers ahead, responsibilities that require clear heads and maintained boundaries. Not rejection but postponement, promising that when circumstances allow, when duty doesn\'t demand perfect focus, you can revisit what exists between you. Wisdom over passion, but not denying passion.',
			next: 'crystal_hunt_continued',
			effects: { wisdom: 5 },
			hiddenEffects: {
				kieran_loyalty: 65,
				kieran_romance: 60,
				slow_burn_continues: true,
				kieran_disappointed: true,
				professional_maintained: true
			}
		}
	]
};

const restrictedArchives = `Sage invites you to explore a restricted section of the royal archives - ancient texts most people never see, knowledge reserved for scholars with proper clearances and demonstrated ability to handle fragile historical materials. Their excitement is infectious as they show you rare manuscripts and forgotten histories, moving between shelves with eager energy of someone finally able to share passion with audience that understands its significance. Dust motes dance in lamplight, old paper and leather creating scent that speaks of centuries preserved, knowledge waiting patiently for minds capable of understanding its worth.`;

const ancientManuscript = `"Look at this!" Sage exclaims, carefully opening a leather-bound tome with reverence usually reserved for holy relics. Their hands shake slightly with excitement and awe. "It's a first-hand account of the kingdom's founding. Written by Queen Lyanna herself - her actual hand, her personal journal, not official histories written by court chroniclers decades later!" They trace fingers just above text, not quite touching parchment too valuable to risk oils from skin. "Listen to this passage - she writes about doubting whether she was worthy of the crown, about nightmares that kept her awake, about feeling like imposter waiting to be exposed. The perfect legendary queen we learn about in histories was terrified and uncertain. Isn't that incredible?"`;

const sagePassion = `They're so animated, so genuinely passionate about knowledge for its own sake rather than for power or advantage it might provide, that you can't help but smile watching them. This is Sage at their most authentic: not trying to impress or perform, just lost in pure joy of discovery and understanding. When Sage notices your expression and blushes slightly, becoming self-conscious, the vulnerability of that moment is endearing.`;

const apology = `"Sorry, I'm probably boring you," they say, embarrassed, already starting to close the manuscript and retreat back into self-deprecation that comes from years of being dismissed by people who value action over thought. "I get too enthusiastic about books and ancient texts and dead people's problems. Most nobles think scholarship is boring or unimportant. Just dusty irrelevant stuff that doesn't matter to real world."`;

const reassurance = `You assure them it's not boring at all - that watching their passion is captivating, that their enthusiasm is infectious, that you genuinely want to hear more about Queen Lyanna's doubts and what other revelations these archives hold. Sage's smile brightens the dim archives like second source of light, surprise and pleasure and relief mixing in expression that shows how rare it is for someone to encourage rather than dismiss their intellectual interests.`;

const sageCloseProximity = `"You're the only person who doesn't think I'm strange for loving this stuff," Sage says softly, voice carrying emotion beyond gratitude - something deeper, more vulnerable, more significant. They move closer, drawn by combination of intellectual connection and physical attraction that have been building through conversations and shared research sessions. "Most nobles think scholarship is boring or unimportant. My own family suggested I should focus on 'practical matters' instead of wasting time in libraries. But you actually listen when I talk about history and magic and philosophical implications of ancient texts. You ask questions that show you're thinking about what I'm saying, not just waiting for me to stop talking." Their eyes search yours, trying to read response. "You make me feel like what I do matters. Like I matter."`;

const blurtedConfession = `"I'm falling in love with you," Sage blurts out suddenly, then immediately looks mortified by their own honesty, face flushing with combination of embarrassment and terror. "I mean - I know I'm not exciting like the other companions. I'm just a scholar who rambles about books and gets too invested in people who've been dead for centuries. I don't have Rowan's wilderness skills or Kieran's military expertise or Lyra's ancient wisdom. I'm just... me. Awkward and over-enthusiastic and probably saying far too much right now." They're talking faster, nervous energy pouring into words. "But I can't help how I feel. Every conversation we have, every time you show genuine interest in ideas, every moment you treat intellectual pursuit as valuable rather than frivolous - I fall more in love. And I know that's probably not what you want to hear in dusty archives surrounded by ancient manuscripts, but I had to say it because keeping it inside was becoming unbearable and honesty seems important even when it's terrifying."`;

const getSageLibraryDateText = (): string => {
	return `${restrictedArchives}

${ancientManuscript}

${sagePassion}

${apology}

${reassurance}

${sageCloseProximity}

${blurtedConfession}`;
};

export const SageLibraryDate: Scene = {
	id: 'sage_library_date',
	get text() {
		return getSageLibraryDateText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['values_knowledge:true', 'intellectual_pursuits:true'] },
			text: `${restrictedArchives}

Sage's eyes light up when they see your genuine interest. "You actually care about this! Not just tolerating it, but truly fascinated." They beam with joy.

${ancientManuscript}

"You've always valued knowledge," Sage says warmly. "Asked deep questions, pursued understanding. That's... that's incredibly attractive." They blush at their own words.

${sagePassion}

${apology}

You remind them of conversations you've had, intellectual debates you've enjoyed. ${reassurance.slice(45)}

${sageCloseProximity}

${blurtedConfession}`
		},
		{
			conditions: { hasHiddenAttributes: { sage_affection: 50 } },
			text: `${restrictedArchives}

${ancientManuscript}

${sagePassion}

Sage suddenly takes your hand, nervous but determined. "I need to tell you something before I lose my courage."

"You make me feel seen," they say earnestly. "Not as 'boring Sage' or 'the scholar.' As a person worth knowing, worth... loving." They meet your eyes. "And I do. Love you. Completely."`
		}
	],
	choices: [
		{
			id: 'love-return',
			text: 'Tell them you love them too - that their brilliance captivates you, that conversations with them are highlights of your days, that intellectual passion is its own kind of excitement. That you don\'t want someone "exciting" in conventional sense; you want someone who makes you think, who challenges your assumptions, who shares wonder at discovery. You want them, exactly as they are.',
			next: 'finn_forge_date',
			effects: { charisma: 6 },
			hiddenEffects: {
				sage_affection: 75,
				sage_romance: 75,
				sage_love_mutual: true,
				sage_overjoyed: true,
				intellectual_love: true
			}
		},
		{
			id: 'kiss',
			text: 'Show them with a kiss among the ancient manuscripts - let physical expression answer their verbal confession. Kiss them surrounded by centuries of preserved knowledge, let passion coexist with scholarship, demonstrate that intellect and attraction aren\'t opposing forces but complementary ones. Make this archive a place of romantic significance, not just academic pursuit.',
			next: 'finn_forge_date',
			effects: { charisma: 5 },
			hiddenEffects: {
				sage_affection: 72,
				sage_romance: 73,
				first_kiss_sage: true,
				sage_confident: true
			}
		},
		{
			id: 'appreciate',
			text: 'Tell them their passion is beautiful - that watching them engage with ideas, seeing their face light up with discovery, listening to them explain complex concepts with infectious enthusiasm... that\'s its own kind of attractiveness. That you value their mind as much as anything else about them, that intelligence and genuine passion are qualities you treasure. Affirm them without demanding immediate romantic escalation.',
			next: 'finn_forge_date',
			effects: { charisma: 4, wisdom: 2 },
			hiddenEffects: {
				sage_affection: 70,
				sage_romance: 68,
				sage_valued: true,
				gentle_encouragement: true
			}
		}
	]
};

export const FinnForgeDate: Scene = {
	id: 'finn_forge_date',
	text: `Finn invites you to their personal forge for an evening of crafting - not grand royal forges where official business happens, but their private workspace where they create for joy rather than duty. They have set up a special project: teaching you to make something with your own hands, sharing the craft that defines their identity and connects them to generations of dwarven artisans.

"Everyone should know how to create," Finn says cheerfully, voice carrying pride and passion of true craftsperson. "Not just rule or fight, but actually make something useful and beautiful. Understanding creation changes how you see everything - you appreciate the skill in objects others take for granted, understand the dedication required for excellence." They guide your hands on the hammer with patience born from years teaching apprentices. "That is it! You are a natural! Feel how the metal responds, how each strike shapes it just slightly. You are not forcing - you are collaborating with the material."

Hours pass in companionable work, time measured not by clocks but by progress of project taking shape under your combined efforts. The forge is warm, Finn's presence solid and reassuring behind you as they correct your grip, adjust your stance, murmur encouragement when you grow frustrated with your own inexperience. When you finally finish - a simple but well-made knife that would have taken master craftsman minutes but took you hours - Finn beams with pride that makes the effort worthwhile. "Your first creation! It is tradition to mark it with the maker's sign." They show you how to etch a small symbol into the handle, personal mark that says "I made this. It is mine. I am craftsper."

Later, sharing ale and sitting on the forge step as heat slowly dissipates into evening cool, Finn grows more serious. "You know what I love about you?" they say, bit tipsy and very sincere, inhibitions lowered enough to speak truths usually kept private. "You never treat me like I am simple just because I work with my hands. Never act like crafting is inferior to magic or politics or military strategy. You see the art in craft, the skill in making, the intelligence required to transform raw materials into functional beauty." They take long drink. "Most nobles think smiths are just laborers. But you understand."

Finn's hand finds yours, calloused and warm and strong from decades of forge work. "I could be happy spending my life this way. Building things, sharing ale, sitting beside someone I..." They pause, courage gathering for declaration that feels enormous despite simplicity. "Someone I love. If they would have me. If they could be content with simple happiness instead of grand romance. If partnership in work and life could be enough."`,
	choices: [
		{
			id: 'acceptance',
			text: `Accept their offer - tell them that simple happiness with someone you love is everything you could want. That building a life together, sharing work and ale and quiet contentment, sounds like the definition of joy rather than limitation. That partnership with them - in forge and in life - is exactly what you desire, that their love is precious gift you accept with your whole heart.`,
			next: 'crystal_hunt_continued',
			effects: { charisma: 6 },
			hiddenEffects: {
				finn_friendship: 75,
				finn_romance: 75,
				finn_love_mutual: true,
				craftsman_bond: true,
				simple_happiness: true
			}
		},
		{
			id: 'kiss',
			text: `Kiss them under the forge light - let the warmth on your skin mirror the warmth in your heart as you close distance between comfort and commitment. Show them through actions rather than words that their simple happiness is your grand romance, that partnership in craft and life is everything you need. Let them taste your answer in the kiss, feel your choice in how you hold them close.`,
			next: 'crystal_hunt_continued',
			effects: { charisma: 5 },
			hiddenEffects: {
				finn_friendship: 72,
				finn_romance: 73,
				first_kiss_finn: true,
				passionate_moment: true
			}
		},
		{
			id: 'toast',
			text: `Toast to partnership - raise your cup to everything you could build together, to lives intertwined through shared work and shared joy. To futures forged in the same fire that tempered the blade you made tonight, shaped by same patient collaboration that defined this perfect evening. To love that finds its strength in simplicity rather than grand gestures, in steady presence rather than dramatic declarations.`,
			next: 'crystal_hunt_continued',
			effects: { charisma: 4 },
			hiddenEffects: {
				finn_friendship: 70,
				finn_romance: 70,
				dwarf_traditions_honored: true,
				finn_happy: true
			}
		}
	]
};

export const ZephyrSkyDance: Scene = {
	id: 'zephyr_sky_dance',
	text: `Zephyr comes to you at midnight with mischief dancing in eyes that shift between colors mortal spectrum cannot quite capture, filled with excitement and barely-contained secret. They ask you to trust them - no explanation, no warning, just pure faith in their intentions. Before you can question or hesitate, they have pulled you out onto a balcony and wrapped you in shimmering Fae magic that feels like cool water and warm sunlight simultaneously.

Suddenly you are floating. Actually floating, genuinely lifted by ancient magic into night sky above palace. Not falling, not rising dangerously - just suspended in air as naturally as if gravity had politely agreed to take brief vacation. The city spreads below like scattered jewels, lights twinkling in darkness, world transformed from this impossible perspective.

"Do not be afraid!" Zephyr laughs, voice carrying pure delight as they soar beside you with grace of creature born to sky rather than earth. "I will not let you fall! I promise you are safe with me, always safe!" Their confidence is absolute, magic responding to their will as naturally as breathing, holding you secure in invisible embrace.

They take your hands and dance with you in open air, spinning and swooping under moon that witnesses impossibility made real. It is exhilarating beyond description, absolutely magical in most literal sense - defying physics and expectations with equal ease. Zephyr's joy is contagious, bubbling laughter that makes you forget fear in favor of wonder. Soon you are both laughing breathlessly, dizzy with height and happiness and sheer improbability of this moment.

When you finally slow, hovering high above sleeping city with stars close enough to touch and world small enough to hold in your hand, Zephyr pulls you close. Their form shifts slightly in moonlight - neither fully one thing nor another, features flowing between human and Fae with beautiful fluidity, perfectly themselves in all their impossible complexity. "This is how I see world," they say softly, voice carrying weight of truth they rarely share. "Full of impossible possibilities. Full of magic and wonder that others dismiss as fantasy. Full of potential that people are too practical to pursue."

Their eyes meet yours, vulnerability showing through usual mischief. "You make me believe I do not have to hide. That I do not have to choose between human practicality and Fae whimsy, between duty to court and freedom of wild places. That impossible things - like half-Fae falling desperately for mortal heir, like loving someone who belongs to responsibilities that could never accommodate someone like me - might somehow work out anyway."

Moon illuminates Zephyr's face as they lean closer, magic holding you both suspended in moment that feels outside time. "Would you take impossible chance on me? Would you believe in magic we could make together, even if it defies all logic and reason?"`,
	choices: [
		{
			id: 'kiss-in-air',
			text: `Kiss them while floating under the moon - close distance between you in defiance of gravity and common sense both. Let the magic that holds you aloft witness this magic between you, let impossibility embrace impossibility. Taste starlight and laughter on their lips, feel their shifting form solid and real in your arms despite all their fluidity. Show them that you believe in impossible things, that you choose wonder over wisdom.`,
			next: 'crystal_hunt_continued',
			effects: { courage: 5, charisma: 5 },
			hiddenEffects: {
				zephyr_friendship: 75,
				zephyr_romance: 75,
				first_kiss_zephyr: true,
				magical_moment: true,
				impossible_love: true
			}
		},
		{
			id: 'embrace-impossible',
			text: `Say you believe in impossible things because of them - that they have taught you to see world through different lens, one that values magic over mundane, wonder over practicality. That loving them is easiest impossible thing you have ever done, that their nature - fluid and magical and defiantly uncategorizable - is exactly what captured your heart. That you would rather have impossible love with them than practical arrangement with anyone else.`,
			next: 'crystal_hunt_continued',
			effects: { charisma: 6 },
			hiddenEffects: {
				zephyr_friendship: 73,
				zephyr_romance: 73,
				zephyr_love_mutual: true,
				embracing_wonder: true
			}
		},
		{
			id: 'dance-more',
			text: `Request another dance - savor this moment of pure joy and freedom before reality reasserts itself. Spin through the sky with them, laughing and weightless, embracing the magic of now without worrying about tomorrow. Let the impossible romance exist in suspended animation for just a little longer, perfect and untested by practical concerns. Store up happiness against future uncertainties.`,
			next: 'crystal_hunt_continued',
			effects: { charisma: 4 },
			hiddenEffects: {
				zephyr_friendship: 70,
				zephyr_romance: 70,
				extended_joy: true,
				perfect_evening: true
			}
		}
	]
};

export const ThorneDragonFlight: Scene = {
	id: 'thorne_dragon_flight',
	text: `Thorne appears at your window in full dragon form - massive and magnificent, scales shimmering with ancient iridescence in moonlight, each one testament to centuries lived. His presence fills the space with barely-contained power, raw magic that makes air vibrate with potential. His voice rumbles directly into your mind, bypassing ears entirely for intimate telepathic connection: "Climb on. I want to show you something. Trust me with this."

Flying on dragonback is indescribable by mortal language. The sheer power beneath you - muscles like mountains moving with grace impossible for something so large, wings catching wind with precision born from centuries of practice. Wind rushes past with force that would steal breath if you were not protected by bubble of Thorne's magic. World spreads out below in breathtaking perspective, distance transforming familiar landscapes into abstract tapestry of color and shape. Thorne's presence in your mind is warm, protective, intimate in way you have never experienced with anyone - thoughts and emotions flowing between you without barriers that words create.

He takes you higher, through clouds that part before him like silk curtains, until you break into clear sky above weather itself. Stars are impossibly bright from this height, moon huge and perfect and close enough to touch. Cloud-tops stretch out like silver sea beneath you, undulating and infinite, hiding world below in mystery.

"This is how dragons see world," Thorne's mental voice is soft with wonder despite having seen this view countless times. "From above, with perspective of both distance and time. Your problems look smaller from up here, but also more beautiful, more precious because they are brief. Mortals live their entire lives without ever seeing their world like this - understanding how small they are makes appreciating their moments more important."

He spirals gently, giving you time to absorb view that changes your understanding of scale and significance. "I have flown this path for centuries, always alone. Watching stars wheel overhead, watching generations live and die below, witnessing history from outside its flow. But with you here..." His emotion floods through mental link without filter - hope desperate and terrifying, fear of loss not yet experienced, love that defies time itself. "Everything is different. Old view becomes new again. Stars I have seen for three hundred years suddenly shine brighter because you are seeing them too."

Thorne lands on mountain peak far from civilization, transforming to human form so he can stand beside you as equal rather than steed. "I am terrified of loving you," he admits with vulnerability that costs him everything, ancient pride surrendering to honest fear. "Terrified of watching you age while I remain unchanged, terrified of moment when your mortal life reaches its natural conclusion and I must continue without you for centuries beyond. But I am more terrified of not trying, of letting fear steal whatever time we could have together."

His ancient eyes meet yours - dragon-gold even in human form, carrying weight of too many memories and too much loss. "Will you take this flight with me, even knowing it must end someday? Even knowing I will have to carry memory of you long after you are gone? Is brief happiness worth inevitable heartbreak that follows?"`,
	choices: [
		{
			id: 'eternal-moment',
			text: `One moment together is worth eternity alone - tell him that experiencing this love, however briefly by dragon timescales, is better than living forever without knowing what connection feels like. That you would rather have finite happiness with him than infinite loneliness without him. That some things are worth the pain that follows, that love is one of them, that he is worth it.`,
			next: 'crystal_hunt_continued',
			effects: { wisdom: 6, charisma: 5 },
			hiddenEffects: {
				thorne_respect: 75,
				thorne_romance: 75,
				thorne_love_mutual: true,
				philosophical_bond: true,
				dragon_flight_bond: true
			}
		},
		{
			id: 'kiss',
			text: `Kiss him under the stars on the mountain peak - close distance between mortal and dragon, between brief and eternal, between fear and courage. Let the kiss speak what words cannot capture about choosing love despite knowing loss will follow. Taste starlight and centuries on his lips, feel ancient power gentled by affection. Show him that you are not afraid of what you are choosing.`,
			next: 'crystal_hunt_continued',
			effects: { charisma: 6, courage: 4 },
			hiddenEffects: {
				thorne_respect: 73,
				thorne_romance: 77,
				first_kiss_thorne: true,
				romantic_peak: true
			}
		},
		{
			id: 'promise',
			text: `Promise to make every moment count - vow that whatever time you have together will be filled with enough joy to sustain him through the long centuries after. That you will love him so thoroughly, so completely, that memory of you will be treasure rather than torment. That your mortal brevity will give intensity rather than limitation, that each day together will matter more because the count is finite.`,
			next: 'crystal_hunt_continued',
			effects: { charisma: 5, wisdom: 4 },
			hiddenEffects: {
				thorne_respect: 72,
				thorne_romance: 73,
				commitment_made: true,
				carpe_diem_bond: true
			}
		}
	]
};

export const MarinaOceanSwim: Scene = {
	id: 'marina_ocean_swim',
	text: `Marina takes you swimming at night in hidden cove that few surface dwellers know exists, accessible only through narrow passage between rocks that would be treacherous without her guidance. With her magic wrapping around you like second skin, you can breathe underwater as naturally as breathing air, can see clearly in darkness that should be impenetrable. Transformation is startling and wonderful - entering entirely different world that exists alongside familiar one, separated by thin barrier of water surface.

She guides you through underwater caves filled with bioluminescent creatures that pulse with soft light, creates living constellation in darkness. Shows you coral formations that took centuries to grow, patient architecture of tiny creatures building something magnificent through accumulated effort. Introduces you to curious fish that investigate you fearlessly, shy octopi that watch from crevices with intelligent eyes, dolphins that click greetings in language you almost understand. Her joy in sharing her world with you is evident in every gesture - pointing out details you would miss, explaining ecosystems with enthusiasm of someone showing beloved home to person they hope will love it too.

Finally you surface in hidden grotto - cave with air pocket where bioluminescent algae coats walls and ceiling, makes everything glow soft blue-green like being inside living jewel. Water reflects light back and forth, creates dancing patterns on stone. Marina pulls herself up onto smooth rock, tail still trailing in water with unconscious grace. You sit beside her, watching phosphorescence sparkle where water drips from her hair.

"No one from surface world has ever... gotten my world before," Marina says quietly, voice echoing softly in enclosed space. "They see ocean as resource to exploit - fish to catch, treasures to harvest, territory to control. Or as danger to avoid - storms to flee, depths to fear, mystery to mistrust. But you see it as I do - as beautiful and precious and alive. As home rather than commodity. As wonder rather than threat."

She takes your hand, her fingers still slightly webbed and cool from water, skin smooth like silk. "I used to think I could never love someone from land. That they would always want me to choose - stay on land and suppress half my nature, or stay in sea and abandon relationships on surface. That love would mean becoming less than whole, sacrificing part of myself to fit their world." She meets your eyes, vulnerability showing through usual confidence. "But you make me think we could have both. That love does not have to mean choosing. That maybe there is someone who could love all of me - land-walker and ocean-dweller both."

Marina's expression is hopeful and terrified simultaneously, taking risk she rarely allows. "Could you love someone who is half in two worlds? Who needs ocean as much as air, who cannot fully belong to land any more than fish could? Who will always have part of themselves you cannot entirely share, pulled by tides and depths and call of water?"`,
	choices: [
		{
			id: 'love-confession',
			text: `Tell her you love all of her - sea and surface both, never asking her to choose or diminish either part. That her connection to ocean depths is part of what makes her who she is, that you would never want her to sacrifice that for you. That loving someone means embracing their complexity, celebrating their wholeness rather than demanding they become simpler for your convenience. That you want to learn her world, not pull her from it.`,
			next: 'crystal_hunt_continued',
			effects: { charisma: 7 },
			hiddenEffects: {
				marina_friendship: 77,
				marina_romance: 77,
				marina_love_mutual: true,
				both_worlds_accepted: true,
				ocean_bond: true
			}
		},
		{
			id: 'kiss',
			text: `Kiss her in the glowing grotto - let bioluminescence witness this declaration, let ocean itself know you claim this child of waves and depths. Taste salt and magic on her lips, feel her cool skin warming under your touch. Show her that you see all of her - surface diplomat and ocean dweller, human aspects and mer heritage - and love the whole complex reality rather than simplified version.`,
			next: 'crystal_hunt_continued',
			effects: { charisma: 6 },
			hiddenEffects: {
				marina_friendship: 75,
				marina_romance: 75,
				first_kiss_marina: true,
				magical_grotto_moment: true
			}
		},
		{
			id: 'swim-together',
			text: `Dive back underwater together - express love through action rather than words, showing willingness to enter her world rather than demanding she stay in yours. Let her guide you through depths, trust her magic to sustain you, demonstrate that you are not afraid of parts of her that belong to ocean. Swim beside her as partner, not passenger, learning to navigate her element with her teaching.`,
			next: 'crystal_hunt_continued',
			effects: { courage: 4, charisma: 4 },
			hiddenEffects: {
				marina_friendship: 73,
				marina_romance: 73,
				shared_ocean: true,
				marina_joyful: true
			}
		}
	]
};

export const SeraphineMasquerade: Scene = {
	id: 'seraphine_masquerade',
	text: `Seraphine invites you to private masquerade ball - just for two people, intimacy disguised as event. She has arranged everything in secluded palace wing that few know exists: musicians who play behind screen so you never see faces, hundreds of candles that transform space into flickering dreamscape, elaborate masks that allow anonymity and revelation simultaneously, refreshments laid out with precision that speaks of careful planning. Everything perfectly orchestrated, as always, but this time orchestration serves personal desire rather than political purpose.

"I wanted one evening," Seraphine explains as she ties elegant mask over your eyes with fingers that tremble almost imperceptibly, "where we do not have to be heir and advisor. Where politics and duty do not exist, where reputations cannot be damaged and alliances cannot be threatened. Just two people dancing, anonymous behind masks, free to be whoever we wish rather than who circumstances demand."

She is breathtaking in her gown - deep midnight blue that makes her look like piece of night sky given human form, fitted perfectly to enhance rather than conceal, beautiful in way that seems effortless despite obvious hours of preparation. Her own mask makes her look mysterious and ethereal, obscuring enough to grant freedom while revealing enough to show emotions she usually keeps hidden.

As you dance together, her usual perfect composure slowly melts away like ice in sun. She laughs genuinely - bright sound of real joy rather than calculated political laugh she deploys strategically. She leans into you with real affection rather than measured closeness designed to suggest intimacy for observers. She makes mistakes in steps and does not care, too caught up in moment to maintain perfection.

"This is person I could have been," Seraphine admits quietly between songs, voice carrying weight of roads not taken and selves abandoned. "If I had not been trained since birth to be political tool. If every action had not been analyzed for advantage, every word weighed for consequence. Someone who dances for joy rather than to impress allies. Someone who..." She pauses, courage gathering for admission that costs her everything. "Someone who loves freely instead of strategically. Someone authentic instead of performed."

She removes both masks with deliberate ceremony, wanting to see your real face and show you hers without barriers. Candlelight catches tear tracking down her cheek - first time you have seen her cry, first crack in perfect façade. "I am done pretending my feelings for you are strategic calculation. I love you. Truly, deeply, in way that makes absolutely no political sense and could potentially damage carefully built alliances. And for once in my entire calculated life, I do not care about consequences or advantages. I just want you. Want this. Want to be real with someone even if being real is dangerous."`,
	choices: [
		{
			id: 'love-confession',
			text: `Tell her you love her too - the real her behind all the masks and strategies and perfect performances. That you see the person she could have been and still could be, that her authenticity is more attractive than any political brilliance. That you want the woman who laughs genuinely and makes mistakes and cries, not the flawless advisor who never shows weakness. That loving her means loving her complexity, not demanding she simplify.`,
			next: 'crystal_hunt_continued',
			effects: { charisma: 7 },
			hiddenEffects: {
				seraphine_trust: 80,
				seraphine_romance: 80,
				seraphine_love_mutual: true,
				masks_removed: true,
				authentic_love: true
			}
		},
		{
			id: 'kiss',
			text: `Kiss her as the music swells - let the romantic crescendo match the emotional one, let the perfectly orchestrated evening reach its natural conclusion. Kiss away the tear on her cheek, taste vulnerability and courage and hope on her lips. Show her that you choose her authentic self over her strategic one, that her risk in revealing true feelings is rewarded rather than punished. Let her feel safe being real.`,
			next: 'crystal_hunt_continued',
			effects: { charisma: 6 },
			hiddenEffects: {
				seraphine_trust: 78,
				seraphine_romance: 78,
				first_kiss_seraphine: true,
				perfect_moment: true
			}
		},
		{
			id: 'dance-forever',
			text: `Ask to dance like this forever - promise that you want endless evenings of authenticity, countless moments where masks come off and real selves emerge. That you would rather have lifetime of genuine connection with her than any political advantage. That whatever future brings, you want her in it - not as advisor or ally, but as partner in truest sense. As the person she is when no one else is watching.`,
			next: 'crystal_hunt_continued',
			effects: { charisma: 5 },
			hiddenEffects: {
				seraphine_trust: 75,
				seraphine_romance: 75,
				romantic_promise: true,
				seraphine_happy: true
			}
		}
	]
};

export const ShadowRooftop: Scene = {
	id: 'shadow_rooftop',
	text: `Shadow finds you on moonlit rooftop - your meeting place has become ritual neither speaks of but both honor. Away from court eyes and judgment, high enough that world seems distant and manageable. Tonight they seem different, carrying quality you have not seen before. Less guarded, more present. More hopeful in way that must terrify them.

"I have spent twenty years in darkness," Shadow says, sitting beside you with careful distance that shrinks slowly over minutes. "Literal and metaphorical both. Twenty years doing things I can never undo for people who cared nothing for cost to my soul. I forgot what it was like to want to see sunrise, to care about tomorrow beyond survival, to believe future could be better than past." They look at you, moonlight catching scars that map history of violence on their skin. "Until you. You make me want mornings. Want tomorrows. Want possibility."

City spreads below, peaceful in sleep, lights scattered like fallen stars. Shadow's hand finds yours - rare physical contact from someone so used to staying apart, so accustomed to touch meaning violence or manipulation. Their fingers are warm, callused, gentle despite everything those hands have done.

"You are teaching me that redemption is not just about stopping bad deeds," Shadow continues quietly, voice carrying weight of revelations hard-won. "Not just about refusing jobs or helping instead of hurting. It is about believing I deserve good things. Believing past does not define all possible futures. Believing I deserve happiness. Deserve..." They struggle with words, fighting conditioning that says monsters don't get happy endings. "Deserve love. Deserve being loved by someone good."

Shadow turns to fully face you, vulnerability clear in expression usually carefully blank. "I am damaged. I have nightmares that wake me screaming. I flinch at sudden movements. I will probably always have darkness in me, always have to fight instincts toward violence when threatened. But when I am with you..." Their voice catches. "I remember that darkness is not all I am. That there is still something worth saving. Something that could be loved."

They cup your face gently, as if you are something precious and fragile that could shatter under wrong pressure. Hands that have killed touching you like blessing. "Tell me I am not wrong to hope. Tell me someone like me - someone with my past, my scars, my darkness - can love someone like you without poisoning them. Tell me this is not just another dream I will wake from, another beautiful thing I am not allowed to have."`,
	choices: [
		{
			id: 'love-confession',
			text: `Tell them you love them - all of them, light and dark together. That their darkness does not frighten you because you see person fighting to overcome it, person choosing different path despite how hard that choice is. That their past makes their present choices more meaningful, not less. That being damaged does not make them unworthy of love - it makes them human. That you want all of them, scars and nightmares included.`,
			next: 'crystal_hunt_continued',
			effects: { charisma: 7, wisdom: 4 },
			hiddenEffects: {
				shadow_redeemed: 100,
				shadow_romance: 80,
				shadow_love_mutual: true,
				complete_acceptance: true,
				shadow_healed: true
			}
		},
		{
			id: 'kiss',
			text: `Kiss them under the stars - let the kiss be answer to every question they asked, proof that this is real and solid and not going to vanish like morning mist. Show them that you are not afraid of touching them, not repulsed by their history, not worried about their darkness contaminating you. Let them feel chosen, wanted, loved exactly as they are. Let gentleness replace violence in their understanding of touch.`,
			next: 'crystal_hunt_continued',
			effects: { charisma: 6, courage: 4 },
			hiddenEffects: {
				shadow_redeemed: 95,
				shadow_romance: 78,
				first_kiss_shadow: true,
				hope_realized: true
			}
		},
		{
			id: 'promise-light',
			text: `Promise to be their light when darkness comes - vow that when nightmares wake them, when past reaches out to drag them back, when they forget they deserve happiness, you will be there to remind them. That redemption is not journey they must walk alone. That you will help them carry their burdens, not because you pity them but because loving someone means sharing both joy and pain. That together you can face any darkness.`,
			next: 'crystal_hunt_continued',
			effects: { charisma: 6, wisdom: 3 },
			hiddenEffects: {
				shadow_redeemed: 92,
				shadow_romance: 76,
				shadow_not_alone: true,
				partnership_formed: true
			}
		}
	]
};

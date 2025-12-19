import { Scene } from '../../story-manager';

const undercroftDescription = `The Undercroft. Even the name carries weight in the capital's underworld, spoken in hushed tones by those who know better than to raise their voices. This labyrinthine network of tunnels sprawls beneath the city like a secret second world—part ancient catacombs, part smuggler's highway, part neutral ground where the city's information brokers conduct their shadowy business.

The air down here tastes of damp stone and old secrets. Flickering torches cast dancing shadows on walls carved with symbols you don't recognize—some appear to be territorial markers, others warnings, still others prices for services rendered. The darkness between the pools of firelight seems deeper than natural, as if the shadows themselves have substance.

Distant echoes suggest these tunnels extend far beyond what you can see—voices murmuring in alcoves, footsteps hurrying through unseen passages, the occasional splash of water from underground streams. This is a place where the capital's true power brokers meet, where deals are struck that will never see daylight, where information changes hands for prices measured in coin, favors, or blood.`;

const valeGuidance = `Vale led you here after your magical awakening, their usual confidence tempered by unusual gravity. The revelation of your blood magic heritage clearly changed something—not their loyalty, but their understanding of the stakes involved.

"Whisper knows things," Vale had said as you descended into the tunnels. "Things that aren't written in histories or stored in royal archives. The kind of knowledge that gets people killed if they're not careful about how they use it." They paused at a junction, checking the symbols carved into the stone before choosing a path. "If anyone can help you understand what you're becoming—what you've always been—it's them."`;

const whisperEntrance = `The figure emerges from the shadows with such complete silence that you don't notice their presence until they're standing directly beside you. It's unnerving—not magical teleportation or supernatural speed, but rather a perfect mastery of stealth that speaks to years of practice moving unseen through dangerous places.

The person before you is deliberately androgynous—features carefully neutral, voice pitched to reveal nothing, clothing designed to obscure rather than define. Dark garments seem to absorb the torchlight rather than reflect it, rendering them a living shadow even in the flickering glow. But it's the eyes that capture your attention: sharp, calculating, and deeply intelligent. Eyes that have witnessed countless secrets and judged countless souls. Eyes that miss absolutely nothing.`;

const whisperIntroduction = `"So," a soft voice observes, each word precisely enunciated with an accent you can't quite place—or perhaps deliberately obscured. "The lost royal finally awakens. How delicious."

Those knowing eyes study you with unnerving intensity, cataloging every detail of your appearance, your posture, your reaction to their scrutiny. You feel weighed, measured, and assessed in the span of a heartbeat.

"I am Whisper," they continue, the name itself somehow fitting the voice that speaks it. "I deal in secrets, truths, and the occasional convenient lie—though I assure you, the latter are always clearly labeled as such. Professional ethics, you understand." The faintest hint of amusement touches their features. "Your blood is... interesting. The Silverwood line was thought extinct, yet here you stand, glowing with hereditary magic that hasn't been seen in two decades. Shall we discuss what this means for your future—and more importantly, how to ensure you have one?"`;

const getMeetWhisper = (): string => {
	return `${undercroftDescription}

${valeGuidance}

${whisperEntrance}

${whisperIntroduction}`;
};

export const MeetWhisper: Scene = {
	id: 'meet_whisper',
	get text() {
		return getMeetWhisper();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['rook_trust:10', 'magic_reaction:trust'] },
			get text() {
				return `Your decision to trust Vale after the magical awakening proved fortuitous. They didn't panic or attempt to exploit your revelation—instead, they immediately began planning your next steps with the pragmatic efficiency of someone who's navigated dangerous situations before.

"You need allies who understand what you're facing," Vale explained. "People who've dealt with blood magic, who know the history and the dangers. Rook has connections in the Undercroft—let me reach out to them."

To your surprise, Rook responded within the hour, arriving with urgent purpose and leading you both into the tunnels beneath the capital. As you descend into the depths, you notice something unexpected: people recognize Rook down here. Street vendors nod respectfully. Information brokers step aside to let your group pass. A pair of thieves actually bow their heads in acknowledgment.

"I've been building a reputation," Rook admits when they catch you watching. "Trying to prove I'm more than just a pickpocket. The Undercroft respects those who deliver results." They navigate the maze of passages with practiced ease, checking symbols carved into stone walls before choosing each path.

${undercroftDescription}

Rook leads you to a deeper section, where the torches burn with an unusual blue flame. "Whisper's the real deal," they explain quietly. "Probably knows more secrets than anyone else in the capital. If you can trust anyone with dangerous information, it's them. They've helped me before—gave me intel that saved my life."

${whisperEntrance}

Rook actually bows their head slightly—a gesture of genuine respect that speaks volumes about Whisper's standing in this world.

"So," a soft voice observes warmly, the tone noticeably different from their usual careful neutrality. "The lost royal finally awakens. And young Rook vouches for you—high praise indeed." Those knowing eyes study you with what might be approval. "I am Whisper. Your friend here tells me you seek truth rather than power, understanding rather than exploitation. How refreshing."

They glance at Rook with something almost like affection. "Few earn this one's loyalty. That you did so quickly suggests promising character." Their attention returns to you, assessing. "Let us discuss what your heritage truly means—not just the dangers, but the responsibilities and possibilities."`;
			}
		},
		{
			conditions: { hasHiddenAttributes: { rook_trust: 10 } },
			get text() {
				return `Vale's concern after your magical awakening was palpable. They immediately began making arrangements, sending messages through channels you didn't fully understand, calling in favors from contacts you didn't know they possessed.

"There's someone you need to meet," they insisted. "Someone who understands blood magic and the politics surrounding it. They can help you navigate what comes next."

The journey into the Undercroft felt surreal—descending from the capital's sun-lit streets into this shadowy underworld where different rules applied and different powers held sway. Vale guided you through the maze of tunnels with surprising familiarity, suggesting they've been down here more times than you might have guessed.

${undercroftDescription}

As you navigate deeper into the network, you're surprised to encounter a familiar figure: Rook, leaning casually against a carved stone pillar as if they'd been expecting you. They look strangely at home in these shadowy tunnels, more confident and assured than you've seen them on the surface.

"Rook?" you begin, confused by their presence.

"Small world, isn't it?" they reply with a knowing smile. "Or maybe just good timing. Whisper sent word they'd be receiving an important guest. Didn't realize it would be you."

Vale nods to Rook with what appears to be professional respect. "You know each other," you observe, connecting dots you hadn't previously noticed.

"The Undercroft isn't as big as you'd think," Rook explains. "People who survive down here tend to cross paths eventually."

${whisperEntrance}

Rook actually bows their head slightly—a gesture of deference that surprises you given their usual irreverent attitude.

"So," a soft voice observes, "the lost royal finally awakens. How delicious." Those knowing eyes study you with unnerving intensity before shifting to Rook. "And our young friend has already formed an attachment. Interesting."

They return their full attention to you. "I am Whisper. I deal in secrets, truths, and the occasional convenient lie. Your blood is... interesting. Rook tells me you can be trusted, which carries considerable weight with me. Few earn their loyalty." A pause, weighted with significance. "Let us discuss what your heritage truly means—and how to ensure it doesn't become your death sentence."`;
			}
		},
		{
			conditions: { hasFlags: ['magic_reaction:fear'] },
			get text() {
				return `Your panic after the magical awakening was immediate and overwhelming. The glowing blood, the impossible healing, the connection to something vast and ancient—it shattered your understanding of what was real and possible. Your hands shook uncontrollably, your breath came in short gasps, and for several terrifying minutes you couldn't think clearly through the haze of fear.

Vale caught you before you could flee, their grip firm but reassuring. "Breathe," they commanded. "Look at me. You're not in immediate danger. But we need to get you somewhere safe, somewhere private, before someone sees you in this state and asks questions we can't afford to answer."

They supported you through the streets, your arm around their shoulders, moving with urgent purpose toward a destination you didn't question. Your mind was too busy spiraling through worst-case scenarios: being hunted like the Silverwood royals, being experimented on by Academy mages, being enslaved by nobles who wanted to weaponize your abilities.

"You need answers," Vale said as they guided you down into the Undercroft. "And you need them quickly, before the fear consumes you completely. Whisper can help. They've dealt with blood magic before—studied it, protected practitioners, helped them understand their gifts."

${undercroftDescription}

The descent into the tunnels felt like descending into your own nightmares—darkness pressing in from all sides, unknown eyes watching from shadows, the weight of stone and earth above threatening to crush you. Vale kept talking, their voice a steady anchor in the chaos of your thoughts.

"Whisper is safe," they promised. "One of the few people in this city who genuinely doesn't care about exploiting others. They collect knowledge for its own sake, not for profit or power."

${whisperEntrance}

"So," a soft voice observes, surprisingly gentle given the circumstances. "The lost royal awakens... and fears what they've become."

Those knowing eyes study you, but there's no predatory gleam, no calculating assessment of your value. Instead, you see something almost like compassion—or at least understanding.

"I am Whisper," they continue, their tone deliberately calm and non-threatening. "Your terror is understandable, truly. The blood magic of the Silverwood line is powerful and dangerous, and you've been thrust into this reality without preparation or choice. But please hear me: what you possess is a gift, not a curse. It can be controlled, understood, and used for remarkable good."

They gesture to a nearby alcove where cushions and blankets create a surprisingly comfortable space. "Sit. Breathe. Let me explain what you are, what you've inherited, and most importantly, how to ensure you survive long enough to master it. You are not doomed. You are not cursed. You are simply... awakened."`;
			}
		},
		{
			conditions: { hasFlags: ['magic_reaction:curiosity'] },
			get text() {
				return `Your reaction to the magical awakening was immediate fascination. The moment the initial shock passed, your mind began racing with questions: How did the magic work? What were its limits? Could you control it consciously, or only in response to injury? Was there a theoretical framework for understanding hereditary magic versus learned spellcraft?

Vale watched your transformation from shock to analytical interest with visible relief. "You're taking this remarkably well," they observed.

"I just witnessed something impossible," you replied, examining your healed arm with wonder. "Of course I have questions. So many questions."

"Good," Vale said with an approving smile. "Because I know someone who has answers. Whisper deals in rare knowledge—the kind that's been suppressed or forgotten. If anyone can explain blood magic comprehensively, it's them."

The journey into the Undercroft felt like descending into a library of secrets. You found yourself noting details: the symbols carved into walls, the way sound echoed differently in various passages, the subtle gradations of temperature and air quality that suggested complex ventilation systems. This wasn't just a random network of tunnels—it was an engineered environment maintained by people who understood architecture and security.

${undercroftDescription}

Vale led you deeper, passing through areas where the torches burned different colors—blue, green, even violet in one section. "The flames mark territories and services," they explained when they caught you studying them. "Orange for general passage, blue for information brokers, green for black market traders, violet for those who deal in magic."

"Fascinating," you murmured, mentally cataloging the system. "A visual language for navigation and identification."

"You'd fit right in down here," Vale said with amusement. "Always analyzing, always seeking patterns."

${whisperEntrance}

"So," a soft voice observes, and you can hear genuine interest in the tone. "The lost royal awakens... and seeks knowledge rather than power. How refreshing."

Those knowing eyes gleam with what might be approval as they study your expression—noting, you suspect, the curiosity rather than fear or greed reflected there.

"I am Whisper," they introduce themselves with a slight inclination of their head. "I deal in secrets, truths, and the occasional convenient lie. Your reaction to manifesting hereditary blood magic is... unusual. Most experience terror or delusions of grandeur. You appear to be conducting a mental inventory of questions."

They gesture to a nearby table where ancient books and scrolls lie carefully arranged. "Your curiosity will serve you well in the days ahead. The Silverwood magic is complex, dangerous, and poorly understood by modern scholars—most of whom have never witnessed it firsthand. But I have studied it extensively." A pause, weighted with promise. "Let us discuss what your blood truly means—the mechanics, the history, the theoretical frameworks, and most importantly, what it could become with proper understanding and practice."`;
			}
		}
	],
	choices: [
		{
			id: 'direct',
			text: 'Get straight to the point: tell me everything you know about my bloodline',
			next: 'guild_masters_request',
			effects: { wisdom: 2 },
			hiddenEffects: {
				'whisper_first_impression:direct': true,
				whisper_trust: 5,
				information_network_access: true,
				learned_heritage: true
			}
		},
		{
			id: 'cautious',
			text: 'Who says I trust you with my secrets? Prove your credibility first',
			next: 'guild_masters_request',
			effects: { wisdom: 3 },
			hiddenEffects: {
				'whisper_first_impression:cautious': true,
				whisper_trust: 10,
				whisper_respect: true,
				information_network_access: true,
				learned_heritage: true
			}
		},
		{
			id: 'trade',
			text: 'What do you want in exchange for this information? Name your price',
			next: 'guild_masters_request',
			effects: { charisma: 2 },
			hiddenEffects: {
				'whisper_first_impression:pragmatic': true,
				whisper_trust: 8,
				information_network_access: true,
				whisper_owes_favor: false,
				player_owes_whisper: true,
				learned_heritage: true
			}
		},
		{
			id: 'charm',
			text: 'Perhaps we could help each other—allies are valuable in dangerous times',
			next: 'guild_masters_request',
			effects: { charisma: 3 },
			hiddenEffects: {
				'whisper_first_impression:charming': true,
				whisper_trust: 7,
				whisper_romance: 5,
				information_network_access: true,
				learned_heritage: true
			}
		}
	]
};

import { Scene } from '../../story-manager';

/**
 * RELATIONSHIPS: Deep relationship building with Sage, Vale, and Ash
 * Three distinct relationship arcs with unique themes
 */

// ===== SAGE: Intellectual Connection & Democratic Ideals =====

export const SageBonding1: Scene = {
	id: 'sage_bonding_1',
	text: `You find Sage in the library at midnight, surrounded by a fortress of books and ancient scrolls about governance systems. Candlelight flickers across parchments covered in his neat, cramped handwriting—notes, diagrams, timelines stretching back centuries. The air smells of old paper, leather bindings, and the beeswax candles he's burned down to stubs. He's so engrossed in a treatise on the Highland Confederacy's rotating council system that he doesn't notice you until you're right beside him, close enough to see the ink stains on his fingers and the exhaustion shadowing his bright, eager eyes.

"Oh! Your Highness!" He jumps like a startled deer, scattering papers across the table in a cascade of historical analysis. His cheeks flush immediately—embarrassment mixed with something warmer. "I'm so sorry, I lose complete track of time when I'm researching. I was comparing democratic models from ancient kingdoms—the Ocean Kingdoms, the Highland Confederacy, even the short-lived Republic of Stonebridge—some lasted centuries before corruption set in. I thought maybe if we understood the patterns of failure, we could design systems resistant to those specific weaknesses, we could..." He trails off mid-sentence, realizing he's rambling, words tumbling over themselves in his excitement.

His earnest enthusiasm is utterly endearing, infectious in its sincerity. This young scholar with ink-stained fingers and fire in his eyes genuinely believes research can save the kingdom—that understanding the past can reshape the future. There's something beautiful in that kind of idealism, especially from someone the nobility dismisses as "that common-born boy with his naive theories." But looking at the depth of his research, the careful documentation, the brilliant connections he's drawing between historical precedents—there's nothing naive about it. Just hope. Just belief that knowledge matters, that truth matters, that systems can be better if only someone cares enough to study how.`,
	choices: [
		{
			id: 'engage-ideas',
			text: 'Engage with his ideas - discuss governance models',
			next: 'sage_bonding_1b',
			effects: { wisdom: 5, empathy: 3 },
			hiddenEffects: {
				sage_bond: 15,
				sage_thrilled: true,
				intellectual_connection: true,
				sage_romance_seed: true
			}
		},
		{
			id: 'admire-dedication',
			text: 'Admire his dedication and passion for change',
			next: 'sage_bonding_1b',
			effects: { empathy: 5, charisma: 3 },
			hiddenEffects: {
				sage_bond: 12,
				sage_validated: true,
				passion_appreciated: true
			}
		}
	]
};

export const SageBonding1B: Scene = {
	id: 'sage_bonding_1b',
	text: `"You actually want to hear this?" Sage's eyes light up with wonder and disbelief, as if you've offered him something precious and impossible. "Most nobles think democracy is naive idealism—peasant fantasy, dangerous radicalism, proof I don't understand how the 'real world' works. But the evidence..." His voice grows stronger, more confident as he falls into his research. "The evidence shows mixed governance—combining democratic councils with skilled leadership—creates the most stable, prosperous kingdoms over time. It's not theory. It's historical fact."

He spreads out documents excitedly, his earlier nervousness forgotten in the rush of sharing his discoveries. Parchments cover the table—maps, timelines, statistical analyses of kingdom stability. "Look—the Ocean Kingdoms lasted 300 years with elected regional councils advising the monarch. Three centuries of peace and prosperity! The Highland Confederacy survived two centuries with rotating leadership preventing any single family from accumulating too much power. Even the Republic of Stonebridge lasted 80 years before external invasion destroyed it—not internal corruption. It works when done right! When you design systems that balance representation with expertise, accountability with efficiency."

His passion is infectious, filling the library with energy and possibility. But underneath the enthusiasm, you sense deep insecurity—a constant fear that his ideas will be dismissed, that he won't be taken seriously because he's young and common-born. Every time he pauses, there's a flicker of anxiety in his eyes, waiting for you to laugh or lose interest or tell him to stop wasting your time with impossible dreams. The vulnerability beneath his intellectual brilliance makes him more real, more human. A scholar desperate to be heard, terrified of being silenced again.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { intellectual_connection: true }
			},
			text: `As you discuss governance theory—debating the merits of elected councils versus appointed advisors, the balance between regional autonomy and central authority, the mechanisms for preventing corruption in democratic systems—Sage keeps glancing at you with something like wonder. His hands gesture excitedly as he explains constitutional frameworks, but his eyes keep returning to your face, searching for understanding, for engagement, for proof this isn't just polite royal patience.

"You actually understand," he says softly, voice dropping to something intimate and awed. "You don't just nod along waiting for me to finish. You engage with the philosophy, challenge my assumptions, build on my ideas. That's..." He blushes deeply, the color spreading from his cheeks down his neck. "That's rare. That's special. Most nobles think democracy is peasant fantasy, something to be dismissed with a wave and a laugh. But you actually see the value. You actually want to learn."

Hours pass in debate and discussion, the library growing darker as candles burn low and the rest of the castle sleeps. At one point, you're both leaning over the same ancient document—a constitution from the Ocean Kingdoms with brilliant checks on executive power—heads close together, shoulders nearly touching. Sage freezes mid-sentence, suddenly aware of proximity, of your breath warm on his cheek, of how your hair falls forward as you lean in to read the faded text. The scholarly excitement shifts, becomes something charged and uncertain.

He pulls back nervously, almost knocking over a candle in his haste. "Sorry, I got too excited about constitutional theory," he jokes, but his voice wavers and his cheeks are burning red. His hands shake slightly as he straightens the parchments, unable to meet your eyes, terrified and hopeful in equal measure.`
		}
	],
	choices: [
		{
			id: 'implement-ideas',
			text: 'Propose implementing some of his ideas - make him advisor',
			next: 'reformist_meeting',
			effects: { wisdom: 6, charisma: 4 },
			hiddenEffects: {
				sage_bond: 25,
				sage_advisor: true,
				dreams_realized: true,
				sage_romance_advancing: true
			}
		},
		{
			id: 'challenge-refine',
			text: 'Challenge and refine his ideas - intellectual partnership',
			next: 'reformist_meeting',
			effects: { wisdom: 7, empathy: 3 },
			hiddenEffects: {
				sage_bond: 22,
				intellectual_equals: true,
				sage_respects_mind: true
			}
		}
	]
};

export const SageBonding2: Scene = {
	id: 'sage_bonding_2',
	text: `Sage works with you to draft reform proposals in a small study chamber, surrounded by his research and your practical political knowledge. His encyclopedic understanding of historical governance models is breathtaking—he can cite precedents from a dozen kingdoms, explain why certain reforms succeeded while others failed, predict potential resistance points with uncanny accuracy. But for all his brilliance, he defers to you constantly, second-guessing his own expertise with painful insecurity.

"Maybe that's too radical," he says for the third time, crossing out entire sections of carefully reasoned proposals with quick, frustrated strokes. "Or not radical enough to actually matter? I don't know. What if I'm wrong? What if my theories look beautiful on paper but hurt people in practice? What if I'm just..." He runs ink-stained fingers through his hair, making it stand up in anxious tufts. "What if I'm just a boy with books pretending to understand the real world?" His anxiety is palpable, radiating from him in waves—imposter syndrome and terror of causing harm warring with genuine passion for change.

"You're brilliant, Sage," you remind him firmly, covering his hand with yours to stop him from crossing out more of his excellent work. "Your analysis is sound. Your proposals are backed by historical evidence. Trust yourself."

He looks at you with vulnerable gratitude that makes him seem younger, more fragile. "That means everything coming from you. I spent years being dismissed—'idealistic boy,' 'naive commoner,' 'ambitious upstart who doesn't know his place.' Nobles would smile indulgently and ignore every word. Scholars would tell me to focus on translation work, leave policy to my betters." His voice breaks slightly. "But you actually listen. Actually trust my mind. Actually value my ideas as if they're worth considering."

His voice drops lower, intimate and wondering. "You make me feel like maybe I can do this. Change the world. Make a difference. Not just study history but shape the future." He swallows hard. "You make me feel like I matter. Like I'm more than just a common-born boy with delusions of relevance."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { sage_romance_advancing: true }
			},
			text: `"It's more than respect," Sage admits quietly, his voice barely above a whisper. He stares at the reform documents as if they hold the courage he needs. "Though I shouldn't say this. I have no right to feel this way. You're royalty—powerful, important, destined for great things—and I'm... me. Common-born scholar with no family name, no wealth, nothing but books and ideas that half the kingdom thinks are dangerous fantasies."

He forces himself to look at you, and the emotion in his eyes is raw, unguarded. "But working with you like this, sharing ideas, having you value my thoughts as if they matter, as if I matter..." He swallows hard, throat working. "I've never felt so seen. So valued. So..." He stops, unable to say the word, terrified of speaking it into existence.

But his eyes say it clearly, desperately: he's falling in love. Has been falling for weeks, maybe months, every late-night conversation and shared revelation pulling him deeper. Terrified of rejection, of presumption, of reaching across the vast gulf of their different worlds. But hopeful too, against all reason—hopeful that maybe, impossibly, you might feel something similar. That intellectual connection might become something more. That a common-born dreamer might somehow be worthy of a crown prince's heart.`
		}
	],
	choices: [
		{
			id: 'affirm-feelings',
			text: 'Gently affirm you feel the connection too',
			next: 'marina_ocean_depths',
			effects: { empathy: 7, charisma: 5 },
			hiddenEffects: {
				sage_bond: 30,
				sage_romance: true,
				mutual_feelings: true,
				sage_relationship: 'romantic'
			}
		},
		{
			id: 'partnership',
			text: 'Affirm intellectual partnership and friendship',
			next: 'marina_ocean_depths',
			effects: { wisdom: 6, empathy: 4 },
			hiddenEffects: {
				sage_bond: 22,
				sage_relationship: 'partners',
				platonic_bond: true
			}
		}
	]
};

export const SageRomancePath: Scene = {
	id: 'sage_romance_path',
	text: `"You... feel it too?" Sage looks like his entire world just shifted on its axis, like everything he thought he understood about reality has been rewritten. His breath catches, eyes wide with disbelief and fragile hope. "I thought I was imagining it. Wishful thinking from a boy who reads too many romantic histories. You're brilliant and powerful and important, and I'm just a scholar with books and ideas and ink-stained fingers. Why would someone like you ever..."

"You're everything," you correct gently, stepping closer. "Intelligent, passionate, dedicated to making the kingdom better. You see what others miss, question what others accept, dream of what others think impossible. How could I not develop feelings?"

Sage's eyes fill with tears that he blinks back rapidly. "I've loved you for months," he confesses, voice breaking with the weight of held-back emotion. "Every conversation where you actually listened, every shared idea where you built on my thoughts instead of dismissing them, every time you valued my work instead of treating it as naive fantasy. You make me feel like I matter—not as a useful tool or a clever resource, but as me. As a person worth knowing. Worth caring about."

He takes your hands tentatively, reverently, as if you might disappear if he holds too tight. His fingers are warm, trembling slightly. "I want this. Want to build a better world with you—not just as advisor or scholar, but as partner. In everything." His smile is tremulous but genuine, lighting up his face despite the tears. "Help me be brave enough to believe this is real? That someone like you could actually want someone like me?"`,
	choices: [
		{
			id: 'kiss-him',
			text: 'Kiss him - show him it\'s absolutely real',
			next: 'sage_romance_continue',
			effects: { empathy: 7, charisma: 6 },
			hiddenEffects: {
				sage_bond: 35,
				sage_romance_level: 2,
				devoted_love: true,
				sage_secure: true
			}
		}
	]
};

// ===== VALE: Mystery & Knowledge Seeking =====

export const ValeBonding1: Scene = {
	id: 'vale_bonding_1',
	text: `Vale approaches you in the evening with old documents tucked under one arm, moving with that peculiar grace of someone who's spent years traveling light and fast. Their clothes are practical, well-worn leather and dark fabrics designed for blending in. "Found something interesting," they say casually, but their eyes—sharp, observant, missing nothing—gleam with excitement barely contained beneath studied nonchalance. "Your family's library has gaps. Books that should be here but aren't. Someone's been systematically hiding things."

They spread out inventory lists across the table with practiced efficiency—ledgers from three different eras, all meticulously documenting the royal collection. "Look at these discrepancies. Banned texts listed in your grandfather's catalog but missing now. Historical accounts that mysteriously vanished after your parents died—specifically accounts of their reform attempts and the noble resistance they faced. Someone doesn't want you knowing certain truths about your own family, about what your parents were trying to accomplish before their deaths." Vale looks at you intently, gauging your reaction. "Want to investigate? Find out what's been hidden and why?"

The offer is tempting and dangerous in equal measure. Vale doesn't care about propriety, about respecting noble secrets or avoiding uncomfortable truths. They care about uncovering what's been buried, following mysteries wherever they lead. There's something compelling about their relentless curiosity, their refusal to let sleeping dogs lie.`,
	choices: [
		{
			id: 'investigate-together',
			text: 'Agree to investigate together - uncover hidden truths',
			next: 'vale_bonding_1b',
			effects: { wisdom: 5, courage: 4 },
			hiddenEffects: {
				vale_bond: 15,
				investigation_partners: true,
				vale_approves: true,
				vale_romance_seed: true
			}
		}
	]
};

export const ValeBonding1B: Scene = {
	id: 'vale_bonding_1b',
	text: `Working with Vale is exhilarating in a way you didn't expect. They're brilliant at finding patterns others miss—connecting seemingly unrelated pieces of information, following threads through historical records with dogged persistence, solving puzzles that would stump most scholars. Where Sage works through careful research and documentation, Vale operates on instinct and observation, reading between lines, noticing what's absent as much as what's present.

Together you uncover a conspiracy that makes your blood run cold—certain nobles have been systematically suppressing information about your parents' reforms. Not just opposing them politically, but erasing the historical record, rewriting what your family tried to accomplish.

"They wanted to erase what your parents tried to do," Vale explains, spreading out the evidence with grim satisfaction. Documents showing altered library records, destroyed correspondence, witnesses paid to stay silent. "Make it seem like the old ways were always the only ways. Like reform was never seriously attempted, never had support, never came close to succeeding. Easier to maintain the status quo if people don't know there was ever a real alternative." They look at you with rare seriousness, dropping the casual facade. "You're a threat because you might finish what they started. That's why they watch you so closely, try to control you, dismiss your ideas as naive youth. They're terrified you'll succeed where your parents failed."

Vale's hand finds yours in the dim library light, their touch warm and grounding. "I'll help you uncover it all. Every secret, every lie, every truth they tried to bury." Their voice softens, becomes something more personal. "That's what I do—follow mysteries, expose what's hidden. But with you..." They squeeze your hand gently. "And maybe... that's who I want to do it for. Not just for the thrill of discovery, but because you deserve to know. Because your cause is worth fighting for."`,
	choices: [
		{
			id: 'adventure-partners',
			text: 'Become adventure partners - investigate everything together',
			next: 'rowan_formal_introduction',
			effects: { wisdom: 6, courage: 5 },
			hiddenEffects: {
				vale_bond: 20,
				adventure_partnership: true,
				vale_committed: true
			}
		},
		{
			id: 'acknowledge-connection',
			text: 'Acknowledge the personal connection growing between you',
			next: 'rowan_formal_introduction',
			effects: { empathy: 6, charisma: 5 },
			hiddenEffects: {
				vale_bond: 25,
				vale_romance: true,
				mutual_feelings: true,
				vale_relationship: 'romantic'
			}
		}
	]
};

export const ValeRomancePath: Scene = {
	id: 'vale_romance_path',
	text: `"Wasn't expecting this," Vale admits with a rare vulnerable smile, their usual practiced composure cracking to reveal genuine emotion beneath. "I wander. Never stay anywhere long, never put down roots. Never let anyone get close enough to matter—safer that way, easier to leave when the road calls." They cup your face gently with calloused hands that have held a hundred maps, picked a thousand locks, traced countless mysteries. "But you... you make me want to stay. Want to build something instead of just observing and moving on. Want to be part of the story instead of just reading it from the margins."

Vale kisses you softly, tenderly, as if memorizing the moment. "I've seen a hundred kingdoms, walked a thousand roads, uncovered secrets that would make nobles weep and commoners riot. But investigating with you? Uncovering truths together, fighting for something that matters?" They pull you close, wrapping you in an embrace that feels like safety and adventure combined. "That's the most alive I've ever felt. Like I'm finally doing something meaningful instead of just collecting interesting facts and moving on before anyone can anchor me."

Their voice drops to something intimate and wondering. "So yes. Let's solve every mystery, face every danger, uncover every secret buried in your family's past and your kingdom's future. Together. Not as wanderer and prince, but as partners. Equals in this mad, dangerous, absolutely necessary quest for truth."`,
	choices: [
		{
			id: 'affirm-partnership',
			text: 'Affirm partnership in adventure and love',
			next: 'vale_romance_continue',
			effects: { courage: 6, empathy: 6 },
			hiddenEffects: {
				vale_bond: 30,
				vale_romance_level: 2,
				adventuring_lovers: true
			}
		}
	]
};

// ===== ASH: Mercenary Loyalty & Protection =====

export const AshBondingPrologue: Scene = {
	id: 'ash_bonding_prologue',
	text: `You find Ash on a hill overlooking what little remains of the road to the capital, their silhouette sharp against the fading light. Their posture is relaxed but alert, eyes scanning the horizon with the practiced vigilance of someone who's spent years watching for danger. When they notice you, a small, almost imperceptible nod acknowledges your presence; no words needed between two warriors who understand the unspoken language of survival.
	
	"I've been thinking," Ash begins, voice low and steady. "About why I do this. Why I protect people." They glance at you, expression unreadable beneath the fading light. "It's not just a job. Not just about the coin. It's... personal. I failed once. Let people down when they needed me most. Can't let that happen again." Their eyes darken with memories best left unspoken. "So I protect those who can't protect themselves. Those who need it most. No matter the cost." They turn back to the horizon, the weight of their vow settling between you like a tangible force.
	
	"You've done more than enough for me, Ash," you say quietly, stepping closer. "You've given me in a matter of months the strength and opportunities that I used to only dream of."

	You place a hand on her shoulder, "Whatever failures you've had in the past, the Ash I know today is someone that would give their all to protect those that matter to her, no matter what. And that's not the actions of a failure."

	Ash looks at you, a rare instant of vulnerability flickering across their features before they mask it again with stoic resolve. "Well look at you, {name}..." they say with a half-smile, "Seems you've also picked up a little bit of smooth talking in the past few months as well".

	You chuckle as the two of you fall into a comfortable silence, watching the sun dip below the horizon together.  Tomorrow you will be striking out into the capital, but for now you just enjoy the sights and company.`,

	choices: [
		{
			id: 'prepare-for-capital',
			text: 'Bid Ash a good night, then turn in and get some rest. You will likely need it for tomorrow.',
			next: 'meet_rook',
			hiddenEffects: {
				ash_trust: 15,
				ash_romance: 10,
				ash_slightly_opens: true,
				genuine_interest: true
			}
		}
	]
};

export const AshBonding1: Scene = {
	id: 'ash_bonding_1',
	text: `Ash blocks your path in the training yard, their stance wide and unmovable, scarred arms crossed over their chest. Sunlight glints off old battle scars—a slash across their left forearm, burn marks on their knuckles, the faded line of what must have been a serious wound along their jaw. "Spar with me," they demand, not ask. Their voice is flat, professional, allowing no room for negotiation. "If I'm protecting you with my life, I need to know your limits. Your weaknesses. Your reflexes under pressure. How you move when you're tired, scared, hurt."

It's not a friendly request or a training opportunity. Ash is testing you, measuring whether you're worth the loyalty they're offering, whether you'll fold under pressure or fight back. Whether you're another pampered royal who expects others to die for them while contributing nothing, or someone who understands what real danger means. The fight is real—Ash doesn't hold back much, doesn't soften blows out of deference to your rank. Each strike is calculated to push you, test you, see what you're made of beneath the royal title.

After long minutes of brutal sparring, both of you breathing hard and slick with sweat, Ash nods grudgingly. It's the barest acknowledgment, but from someone as guarded as Ash, it feels like high praise. "Better than expected. You don't freeze when threatened, don't give up easy, don't whine about getting hit." Almost approval colors their voice, though they'd probably deny it. "Might actually be worth protecting after all. Might actually survive long enough to make the protection worthwhile."`,
	choices: [
		{
			id: 'ask-about-them',
			text: 'Ask about them - what drives this need to protect?',
			next: 'ash_bonding_1b',
			effects: { empathy: 5, wisdom: 3 },
			hiddenEffects: {
				ash_bond: 12,
				ash_slightly_opens: true,
				genuine_interest: true
			}
		},
		{
			id: 'earn-respect',
			text: 'Prove yourself further - push for another round',
			next: 'ash_bonding_1b',
			effects: { strength: 5, courage: 4 },
			hiddenEffects: {
				ash_bond: 15,
				ash_impressed: true,
				warrior_respect: true,
				ash_romance_seed: true
			}
		}
	]
};

export const AshBonding1B: Scene = {
	id: 'ash_bonding_1b',
	text: `"Why protect people?" Ash's jaw tightens, muscle jumping beneath scarred skin. For a long moment you think they won't answer, that the walls will stay firmly in place. Then something breaks—just a crack, just enough to let truth slip through. "Because I failed once. Completely. Catastrophically." Their voice is flat, emotionless—trauma buried so deep it can only surface as absence of feeling. "My village. Raiders came in the night. Professional ones, not desperate bandits—hired to send a message to someone, we just had the bad luck to be there. I was away on a contract, fighting someone else's war for someone else's coin. Came home three days later to ashes and bodies. Everyone I knew. Everyone I loved. Dead."

They stare past you, seeing something terrible that lives behind their eyes permanently. "I was the best fighter in the village. Trained since childhood, won tournaments, hired as muscle by merchants and nobles. Should have been there, protecting them. Could have made a difference—maybe saved some, maybe died trying, but at least I'd have been there. But I chose coin over home. Chose a stranger's war over my own people." Their voice doesn't waver, doesn't break. The control is absolute, terrifying in its completeness. "Found my mother's body in the remains of our house. My little sister's next to the well where she'd been drawing water. The baker who taught me to fight with a staff. The girl I'd been courting. All dead while I was fifty miles away, earning blood money from someone who didn't even remember my name."

They finally meet your eyes, and the haunted look there makes you want to look away—but you don't, because Ash deserves that much. To be seen. "I don't make that choice anymore. Ever. When I protect someone, I'm there. Always. No matter what. No contract is worth more than the life I'm guarding. No amount of coin matters more than doing my job right this time." Their voice drops lower, becomes something like a vow. "So yeah, I test you. Because if I'm putting my life between you and danger, if I'm choosing to make your survival my purpose, I need to know you're worth it. Not as royalty, not as a political symbol—as a person. Someone worth dying for. Someone whose death I won't have to add to the list of people I failed to save."`,
	choices: [
		{
			id: 'promise-worth-it',
			text: 'Promise to be worthy of that protection',
			next: 'first_political_meeting',
			effects: { courage: 6, empathy: 4 },
			hiddenEffects: {
				ash_bond: 18,
				oath_given: true,
				ash_respects: true
			}
		},
		{
			id: 'mutual-protection',
			text: 'Offer mutual protection - you\'ll guard each other',
			next: 'first_political_meeting',
			effects: { courage: 7, empathy: 4 },
			hiddenEffects: {
				ash_bond: 22,
				equals_in_battle: true,
				ash_honored: true,
				ash_romance_advancing: true
			}
		}
	]
};

export const AshBonding2: Scene = {
	id: 'ash_bonding_2',
	text: `During a mission investigating suspicious noble activity, you're injured protecting Ash—a crossbow bolt meant for their exposed back that you deflect with your arm instead. Not seriously wounded, but enough to bleed, enough to hurt. Ash's reaction is immediate and visceral—fury and fear mixed together in equal measure, explosive and terrifying.

"Idiot!" they snap while bandaging your wound with rough, almost angry efficiency. But their hands shake—fine tremors they can't quite control despite years of combat training. "I'm the bodyguard. You don't protect me. That's not how this works, that's not what you're supposed to do!" Their voice rises, control slipping. "I'm expendable. I'm the one who takes the hits. You're the one who survives. That's the entire fucking point of having protection!"

You realize with sudden clarity: they're terrified. Absolutely terrified. Not of dying themselves—they've made peace with that possibility, maybe even welcome it as penance. But of failing again. Of losing someone again. Of adding your name to the list of people they couldn't save.

"Don't do that," Ash says quieter, still not meeting your eyes as they tie off the bandage with more force than necessary. Their voice cracks despite their best efforts. "Don't make me care that much. Don't make it personal, don't make you matter beyond the contract. It's easier when it's just a job, just a professional obligation. Easier to stay detached, to do what needs doing without emotion compromising judgment." But the trembling in their hands, the fear in their voice, the desperate edge to their words says it clearly: it's already too late. You already matter. They already care. And that terrifies them more than any physical danger ever could.`,
	choices: [
		{
			id: 'acknowledge-care',
			text: 'Acknowledge that you care about them too',
			next: 'ash_romance_path',
			effects: { empathy: 7, courage: 5 },
			hiddenEffects: {
				ash_bond: 28,
				ash_romance: true,
				mutual_feelings: true,
				ash_relationship: 'romantic'
			}
		},
		{
			id: 'affirm-partnership',
			text: 'Affirm it IS personal - you protect each other',
			next: 'ash_bonding_3',
			effects: { courage: 6, empathy: 5 },
			hiddenEffects: {
				ash_bond: 25,
				chosen_family: true,
				ash_accepting: true
			}
		}
	]
};

export const AshBonding3: Scene = {
	id: 'ash_bonding_3',
	text: `Over time, through missions and quiet moments and shared dangers, Ash stops fighting the connection between you. The walls come down gradually—not crumbling all at once, but eroding piece by piece as they realize you're not going anywhere, not abandoning them when things get difficult, not dying on them despite their worst fears. You're stubborn, persistent, and you refuse to let them keep you at arm's length forever.

"You're stubborn as hell," Ash observes one day with something that might actually be affection softening their usually harsh features. You're cleaning weapons together after a particularly dangerous mission, the familiar ritual soothing in its normalcy. "Most people I protect are either scared of me—treat me like a dangerous animal they've hired—or they treat me like furniture. A tool. Something useful but not quite human, not worth talking to beyond giving orders." They glance at you, expression unguarded for once. "You treat me like a person. A partner. Like my thoughts matter, like my past matters, like I'm more than just a sword you hired."

They grip your shoulder firmly, calloused hand warm and grounding. "I failed my village. Failed everyone I loved. But I won't fail you. That's a promise—not just a contract, not just professional obligation, but a real promise." Their voice is rough with emotion they're trying and failing to hide. "Whether we're partners, friends, family, whatever this is—you're mine to protect now. And I don't break my word. Not again. Never again."

Your relationship, whatever form it ultimately takes, is built on absolute trust and mutual protection. Forged in shared danger, tempered by vulnerability, and utterly unbreakable.`,
	choices: [
		{
			id: 'accept-partnership',
			text: 'Accept the partnership and protection with gratitude',
			effects: { empathy: 6, courage: 5 },
			hiddenEffects: {
				ash_bond: 20,
				ash_relationship: 'battle_family',
				unbreakable_bond: true
			},
			realLifeChallenge: {
				id: 'ash_express_gratitude',
				type: 'social',
				title: 'Express Deep Gratitude',
				description: 'Like Ash\'s fierce devotion, express appreciation for your partner\'s presence in your life',
				instructions: 'Tell your partner specific things you\'re grateful for about them and your relationship. Be detailed and sincere - not just "I love you" but why, what they do, how they make your life better.',
				durationMinutes: 20,
				verificationMethod: 'honor',
				rewards: {
					stats: { empathy: 4, charisma: 2 },
					message: 'Expressing gratitude deepened your bond, just like Ash\'s protective devotion.'
				}
			}
		}
	]
};

export const AshRomancePath: Scene = {
	id: 'ash_romance_path',
	text: `Ash stares at you like you've said something dangerous, something that could destroy them. "Care about me?" They laugh, but it's bitter, self-deprecating, full of disbelief. "I'm a mercenary. Killer for hire. I've got more scars than smooth skin, more blood on my hands than I can count, more nightmares than peaceful dreams. Rough, damaged, carrying enough trauma to sink a ship." They gesture at themselves as if presenting evidence of unworthiness. "You could have anyone—nobles, scholars, beautiful people with clean hands and uncomplicated hearts. Why would you want this? Want someone broken and violent and haunted?"

You step closer, refusing to let them push you away with self-loathing and fear. You've seen this defense mechanism before—hurt yourself before someone else can do it first. "Because you're loyal beyond measure. Because you're protective in a way that makes me feel genuinely safe for the first time in my life. Because you're honest even when lying would be easier." You reach up to cup their scarred face. "Because underneath all that armor—literal and metaphorical—you care deeply. You feel everything, you just hide it behind walls and anger because caring hurt too much last time. Because you make me feel valued, protected, seen as a person worth defending rather than a crown worth serving."

Ash's defenses crumble like a dam breaking. They pull you into a fierce embrace, arms like steel bands, holding you as if you might disappear if they let go even slightly. "Fuck," they breathe against your hair, voice breaking. "Okay. Okay. I care too. More than I should, more than I wanted to, more than is probably safe for either of us." They're shaking now, control finally completely gone. "I'll protect you with everything I have. Not because it's a job or a contract or professional obligation. Because you're mine to protect. Because I choose you. Because I don't fail twice, and I won't lose you like I lost them."`,
	choices: [
		{
			id: 'affirm-devotion',
			text: 'Affirm your devotion - you chose each other',
			effects: { empathy: 7, courage: 6 },
			hiddenEffects: {
				ash_bond: 35,
				ash_romance_level: 2,
				fierce_devotion: true,
				ash_healing: true
			},
			realLifeChallenge: {
				id: 'ash_express_gratitude',
				type: 'social',
				title: 'Express Deep Gratitude',
				description: 'Like Ash\'s fierce devotion, express appreciation for your partner\'s presence in your life',
				instructions: 'Tell your partner specific things you\'re grateful for about them and your relationship. Be detailed and sincere - not just "I love you" but why, what they do, how they make your life better.',
				durationMinutes: 20,
				verificationMethod: 'honor',
				rewards: {
					stats: { empathy: 4, charisma: 2 },
					message: 'Expressing gratitude deepened your bond, just like Ash\'s protective devotion.'
				}
			}
		}
	]
};

export const SageRomanceContinue: Scene = {
	id: 'sage_romance_continue',
	text: `Your romantic partnership with Sage blossoms as you work together on reforms, transforming the political landscape into something more just and equitable. Every intellectual debate becomes charged with affection—gentle teasing, knowing glances, the casual intimacy of two minds that fit together perfectly. Every shared success becomes a reason to celebrate together, stolen kisses in the library when no one's watching, quiet evenings where you discuss policy while tangled together on a couch, his head on your shoulder as he sketches out new constitutional frameworks.

"I never thought I'd have this," Sage admits one evening, setting aside his notes to pull you close. The candles have burned low, casting warm light across his face, softening the ever-present ink stains on his fingers. "Someone who values my mind AND my heart. Someone who sees my ideas as worthy and me as lovable—not in spite of being common-born, but just... as I am." He kisses you softly, tenderly. "You've given me everything I didn't dare hope for. Intellectual partnership, political influence, genuine love. A future where I'm not dismissed or tolerated but genuinely valued."

Your relationship becomes a model for the reforms you're building together—intellectual equals, mutual respect, partnership in all things. Proof that love can transcend class barriers, that brilliance matters more than bloodlines, that the kingdom's future belongs to those with vision and courage, not just inherited titles.`,
	choices: [
		{
			id: 'continue-together',
			text: 'Continue building your shared future',
			effects: { wisdom: 6, empathy: 6 },
			hiddenEffects: {
				sage_bond: 20,
				partnership_complete: true,
				reform_champions: true
			}
		}
	]
};

export const ValeBonding2: Scene = {
	id: 'vale_bonding_2',
	text: `Working with Vale becomes routine—and thrilling in equal measure. Every mystery you solve together deepens the partnership, every conspiracy you uncover strengthens the bond. You learn to read their subtle tells: the slight narrowing of their eyes when they spot a discrepancy, the way their fingers drum on surfaces when they're thinking through complex puzzles, the rare genuine smile when a particularly clever solution presents itself.

Vale opens up gradually, sharing stories of their travels in fragments—kingdoms they've visited, mysteries they've solved, reasons they became a wanderer in the first place. Stories of a childhood spent learning to notice what others overlook, of discovering that the official version of history is rarely complete, of falling in love with the thrill of uncovering truth even when it's dangerous or uncomfortable.

"I never stayed anywhere because nothing felt worth staying for," Vale admits during a late-night investigation session, moonlight streaming through the library windows. They're sitting close to you, shoulders touching companionably. "Every kingdom, every city, every town—I'd uncover what needed uncovering, then move on before roots could form. Attachment is a liability when you're chasing truths that powerful people want buried." They glance at you with uncharacteristic vulnerability. "But investigating with you... it's different. You make the search for truth meaningful instead of just interesting. Make me want to stay and see what we build together instead of running before anyone can count on me."

Whether your relationship develops romantically or remains as trusted adventure partners, the bond is real and growing—built on shared curiosity, mutual trust, and the understanding that some truths are worth risking everything to expose.`,
	choices: [
		{
			id: 'continue-investigating',
			text: 'Continue investigating mysteries together',
			effects: { wisdom: 6, courage: 5 },
			hiddenEffects: {
				vale_bond: 20,
				investigation_partners: true,
				vale_stays: true
			}
		}
	]
};

export const ValeRomanceContinue: Scene = {
	id: 'vale_romance_continue',
	text: `Your romance with Vale is full of adventure and discovery—equal parts passion and puzzle-solving. Every investigation becomes charged with anticipation, working together with the ease of longtime partners who know each other's rhythms and tells. Every mystery solved becomes a celebration, stolen kisses in dusty archives, breathless laughter after narrow escapes from noble estates you definitely weren't supposed to be investigating.

Vale's wanderlust transforms in your presence—no longer restless running from connection, but joyful exploration with a partner who makes the journey matter. "I finally understand," Vale says one night, holding you close after solving a particularly dangerous mystery involving forged documents and attempted assassination. Their heart still races from the adrenaline, but their voice is steady, certain. "I wasn't looking for answers. I was looking for someone to search with. Someone who makes the journey matter more than the destination. Someone worth staying for, worth building a life with instead of just collecting experiences and moving on."

They kiss you deeply, thoroughly, with the passion of someone who's finally found home. "Every road I walked, every kingdom I wandered through—I was searching for this. For you. For someone who'd chase truth with me, who'd risk danger for what's right, who'd see investigation as adventure instead of obligation."

Your relationship is adventure incarnate—dangerous, thrilling, deeply connected. Built on shared curiosity, mutual trust, and the understanding that together you can uncover any secret, solve any mystery, face any threat. Love forged in the pursuit of truth.`,
	choices: [
		{
			id: 'embrace-adventure',
			text: 'Embrace a lifetime of adventure together',
			effects: { courage: 7, empathy: 6 },
			hiddenEffects: {
				vale_bond: 25,
				adventuring_romance: true,
				vale_found_home: true
			}
		}
	]
};

export const AshRomanceContinue: Scene = {
	id: 'ash_romance_continue',
	text: `Your romance with Ash is fierce and protective—love like a warrior loves their cause, completely and without reservation. They love you like someone who knows exactly how precious life is, how quickly it can be taken, how much it hurts to lose what matters. Every mission together becomes proof of devotion, every danger faced side by side strengthens the bond forged in shared combat and vulnerability.

"You healed something I thought was permanently broken," Ash admits during a rare quiet moment between crises. You're alone together, armor set aside, guards down in the safety of privacy. "Made me believe I deserve connection again. Deserve love, not just duty and penance. Made me think maybe I'm not just the sum of my failures, maybe redemption is actually possible." They run scarred, calloused hands through your hair with surprising gentleness. "You make me want to live, not just survive. Want to build a future, not just atone for the past."

They pull you close, foreheads touching, breathing the same air. "I failed my village. Came home too late to save anyone. But with you, I've found something worth more than redemption—I've found a reason to live, not just a mission to die for. A future worth fighting for. A person worth becoming better for." Their voice drops to something reverent, awed. "You make me believe I might actually deserve happiness. That maybe the scared kid who lost everything can become someone capable of protecting what matters. That maybe love isn't just something I lost, but something I can have again."

Your relationship is forged in fire, tempered by protection, and absolutely unbreakable. Love built on absolute trust, fierce devotion, and the understanding that you'd both die for each other—but more importantly, you'll both live for each other.`,
	choices: [
		{
			id: 'affirm-future',
			text: 'Affirm your future together',
			effects: { empathy: 7, courage: 7 },
			hiddenEffects: {
				ash_bond: 30,
				ash_fully_healed: true,
				warrior_romance_complete: true
			}
		}
	]
};

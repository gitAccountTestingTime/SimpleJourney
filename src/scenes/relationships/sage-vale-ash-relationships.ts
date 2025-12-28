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
	text: `You and Vale set out to investigate the Silverwood library, no doubt one of the greatest troves of knowledge left to you. A couple days have passed, and you've settled into a comfortable rhythm of searching through shelves, cross-referencing catalogs, and examining ancient tomes for hidden compartments or annotations. Vale's enthusiasm is palpable. With every discovery, no matter how small, his face lights up with genuine excitement as he shares it with you.
	
	You find Vale in one of the manor's smaller studies long after midnight, surrounded by what looks like organized chaos. Old documents spread across every available surface, candles strategically positioned to maximize light without risking fire to the precious materials. They're so absorbed in comparing three different ledgers that they don't notice your entrance, their lips moving silently as they track discrepancies between columns with one elegant finger.

"Vale?" you say softly, not wanting to startle them.

They look up with a flash of surprise that quickly transforms into a welcoming grin, the candlelight catching in their eyes and making them sparkle with barely contained excitement. "Caught me," they admit, gesturing at the document-covered room with a mixture of pride and sheepishness. "I know it's late. Or early...depending on your perspective, but I couldn't stop once I started noticing the patterns. Your family's library..." They pause dramatically, then lean forward conspiratorially. "It has gaps. Deliberate ones. Someone's been systematically removing books, and not just recently either. This seems as though it has been happening for decades."

They stand and move to the table where they've organized their findings, their movements fluid and graceful despite the late hour. "Come look at this," they say, and there's genuine enthusiasm in their voice, not the practiced charm of a bard performing but real, unguarded excitement. "I cross-referenced three different catalog systems: your grandfather's original inventory from forty years ago, a secondary ledger updated during your parents' reign, and the most recent library records I could find."

Vale spreads out the ledgers side by side, their finger tracing patterns across the pages. "See these entries? Books on blood magic theory, historical accounts of House Silverwood's most powerful mages, treatises on constitutional limits to royal power. All listed in your grandfather's catalog. Some even appear in the updates from your parents' time. But now?" They tap the current ledger. "Mysteriously absent. Not marked as damaged, not noted as lost or stolen, just... gone. As if they never existed."

"That could just be poor record keeping," you suggest, playing devil's advocate but already sensing there's more.

"I thought so too at first," Vale admits, pulling out another document with the flourish of someone revealing their trump card. "But then I found these." They unfold what appears to be shipping manifests and correspondence. "Records of books being 'relocated' to secure storage on orders from various nobles on the council. Books about magical inheritance, historical precedents for challenging succession, accounts of your parents' reform proposals. All removed within weeks of their deaths, all by the same handful of noble families."

Their expression grows serious, the playful energy shifting into something more intense. "They weren't just cleaning up after a tragedy of their own making. They were erasing evidence, attempting to rewrite history. They were making sure certain truths about your family, about what your parents tried to accomplish and the real reasons for their deaths, stayed buried." Vale meets your eyes directly. "Someone doesn't want anyone knowing the full truth about your own heritage. And they've clearly been willing to go to great lengths to ensure those truths never see the light of day."

The weight of that revelation settles over the room like a heavy blanket. Vale lets it sink in for a moment before their expression softens slightly. "I know this is a lot, especially at this hour. And I should probably apologize for diving into your family's records without explicit permission, but..." They give you a crooked smile that's somehow both apologetic and unrepentant. "Old habits. I see a mystery, I start pulling threads. Can't help myself."

"What kind of truths are we talking about? Do we have any idea exactly what it is that has been hidden?" you ask quietly.

Vale's smile fades into something more somber. "That's what I want to find out. With your permission, of course." They gesture at the documents. "I've found the outline of the conspiracy, but that basically only tells us the shape of what's been hidden. The actual content, the specific truths they buried? I'm betting those are still scattered throughout the manor in hidden caches, secret compartments, and places the conspirators either couldn't find or didn't know existed. Your parents were clever, and the Silverwood family had the power of limited foresight. They surely must have known the danger they were in, and as a result known someone might try to erase their work. Given the hidden comparment you found when we first arrived, I am almost certain there will be more secrets waiting to be uncovered...and through those we may find out exactly what it is that someone was so desperate to hide."

They walk closer to you, their expression earnest. "I can find them, {name}. It's what I do...I follow mysteries, uncover buried truths, piece together stories that people tried to erase. But this is your family, your history, your risk to take...and thus your choice to make." Their voice drops lower, more intimate. "So I'm asking: do you want to know? Do you want to uncover what they tried so hard to hide? Because once we start down this path, there's no going back. Whatever we find, whether it's noble intentions that threaten the powerful, or darker truths about your parents' methods, we can't un-know it."

There's something in the way Vale looks at you, with respect and anticipation and a hint of challenge. They're not just asking about the investigation. They're asking if you're brave enough to face potentially uncomfortable truths, if you trust them enough to take this journey together, if you're the kind of person who chooses potentially problematic knowledge over comfortable ignorance.

"Plus," Vale adds with a return of their characteristic playful energy, attempting to lighten the heavy moment, "secret passages, hidden compartments, and late-night investigative adventures through a mysterious manor? This is literally the most exciting thing that's happened to me since I accidentally uncovered that scandal in the merchant guild three kingdoms ago. Which, for the record, was not as fun as everyone seems to think because I had to flee the city in a hay cart. Very, very itchy. I would not recommend."

Their attempt at humor coaxes a small smile from you despite the gravity of the situation, and you see the flash of satisfaction in their eyes when they notice.`,
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
		},
		{
			id: 'investigate-avoidance',
			text: 'Some truths are better left hidden - avoid investigation. I will write my own path, and that is the only one that matters',
			next: 'rowan_formal_introduction',
			effects: { wisdom: 5, courage: 4 },
			hiddenEffects: {
				vale_bond: -5,
				vale_trust: -10,
				vale_romance: -10,
				investigation_partners: false,
				vale_romance_seed: false
			}
		}
	]
};

export const ValeBonding1B: Scene = {
	id: 'vale_bonding_1b',
	text: `"Excellent," Vale says with genuine satisfaction, his whole face lighting up with enthusiasm. "I was hoping you'd say that. Not that I would have stopped investigating," he admits with a mischievous grin, "but it's so much more fun with permission. More ethical. Also less likely to result in awkward conversations about boundaries."

Over the next several hours, working together becomes an adventure in itself. Vale's approach to investigation is unlike anything you've seen. It is part systematic scholarship, part intuitive leaps, and part theatrical performance. He moves through the manor like he's dancing with shadows, checking architectural inconsistencies, running fingers along walls to find hollow spaces, even testing floorboards for unusual give.

"Here," Vale says suddenly, stopping in front of what appears to be a solid bookshelf in your father's old study. "Watch this." He pulls three specific books in sequence: a treatise on maritime law, a volume of poetry, and finally a historical account of the Highland Kingdoms. There's a soft click, and the entire bookshelf swings inward to reveal a hidden alcove.

"How did you know?" you ask, admittedly impressed despite yourself.

Vale's grin is pure triumph. "The books were too perfectly arranged. No dust on the spines, slight wear patterns inconsistent with their supposed age on the shelf, and, this is the really clever bit, they're all subjects your father wrote about in his correspondence. I found letters in the library referencing these exact titles. He was leaving clues for someone who knew how to look." He pulls documents from the alcove with reverent care. "Your father was brilliant. A bit paranoid perhaps, but undeniably brilliant."

As you read through the discovered documents together, seated on the floor of the study with papers spread around you like fallen leaves, the picture becomes clearer and more disturbing. Your parents hadn't just been reform-minded idealists, they'd been actively investigating corruption within the noble council. They'd uncovered evidence of embezzlement, bribery, even collaboration with external enemies. And they'd likely been murdered for it.

"This is..." you trail off, emotions warring within you. Grief for parents you never knew. Anger at their killers. Fear of what this knowledge means for your own safety.

Vale scoots closer, his shoulder pressing against yours in silent support. "I know," he says softly. "I've uncovered dozens of conspiracies over the years...noble plots, merchant frauds, religious corruptions. But this one..." He looks at you with unusual vulnerability, the practiced charm completely absent. "This one matters more because it's yours. Because those were your parents, and because it is your legacy and truth they tried to bury."

You sit together in silence for a long moment, the weight of discovery settling over both of you. Then Vale takes your hand, intertwining his fingers with yours. The gesture is warm, grounding, and intimate without being presumptuous.

"For what it's worth," Vale says quietly, "your parents were remarkable. These documents show they knew the risks, knew they might not survive long enough to see their reforms through, but they tried anyway. They documented everything, hid copies, left trails for someone to follow. They had faith that eventually, somehow, the truth would come out. That someone would care enough to look." He squeezes your hand gently. "And they were right. Here we are."

The moment stretches between you, charged with something that feels like it could tip in multiple directions: grief, anger, determination, and perhaps something more personal and complicated.

Vale clears his throat, some of his usual playful energy returning. "We should keep going. If your father hid documents here, there are probably more caches throughout the manor. Each one will give us more pieces of the puzzle." He stands and offers you his hand to help you up, and when you take it, he pulls you to your feet with surprising strength.

"Next location," Vale announces, moving to your father's desk and pulling out architectural drawings of the manor, "should be in the old chapel. There's a section of the floor plan that doesn't match the actual dimensions, about three feet of space unaccounted for between the nave and the sacristy. Either this is the worst architectural planning in history, or there's a hidden chamber."

Working your way through the manor becomes a partnership that flows naturally. Vale's quick mind and your recently learned knowledge of your family history complement each other perfectly. He notices the clues, you provide the context. He cracks the codes, you understand the references. And somewhere in the process, the investigation becomes something more than just 'professional'. It becomes shared jokes about particularly cryptic hiding spots, playful competition over who can solve puzzles faster, and comfortable silences as you both process difficult revelations.

In the chapel, you discover another cache, this one containing not just documents but a journal in your mother's handwriting. Vale hangs back, giving you space to read privately, but you find yourself wanting him close, wanting his steady presence as you encounter your mother's words.

"You can read it with me," you offer. "You've earned that."

"Are you sure?" Vale asks, genuine concern in his eyes. "This is intimate. Personal. I can wait outside if you need privacy."

"I'm sure," you say, and mean it. "We've come this far together, after all."

So Vale reads over your shoulder, his chin almost resting against you, breath warm against your neck as you both absorb your mother's words. She wrote about her hopes for the kingdom, her fears about the conspiracy closing in, her love for her family. And in the margins, in a different ink, your father had added notes, small additions, corrections, expansions on her thoughts. Even in documentation of potential doom, they'd worked together and supported each other. They'd truly been a team until the very end.

"They loved each other," Vale observes softly. "You can tell from how they wrote, how they built on each other's ideas, how they prepared for the worst together while hoping for the best. That's..." He pauses, seeming to search for words. "That's rare. Real partnership like that. Real trust. Especially in the world of nobility, where alliances are often transactional. They had something truly genuine."

You turn to look at him, and suddenly become very aware of how close he is, how intimate this moment has become without either of you quite noticing. Vale meets your eyes, and something shifts in his expression as the investigator's focus softens into something warmer, more personal.

"We should..." Vale starts, then stops. "We should probably keep searching. More caches to find. More truths to uncover." But he doesn't move away, doesn't break eye contact. 

The moment hangs between you, full of potential and question marks. Then Vale smiles; soft, genuine, and a little uncertain in a way that's completely unlike his usual confidence before he steps back, giving you space while somehow making it clear the space is an offer, not a rejection.

By the time dawn starts filtering through the stained glass windows, you've found four hidden caches total, uncovered a conspiracy that goes deeper and involves more powerful nobles than you'd imagined, and discovered that your parents were heroes who sacrificed everything trying to make the kingdom better.

You've also discovered that investigating with Vale, uncovering truths together in the quiet hours of morning while the rest of the world sleeps, feels like one of the most intimate things you've ever experienced. The way he listens when you talk about your feelings, the way he offers insights without judgment, the way he makes you laugh even in the midst of painful revelations...you realize it may all adds up to something rather significant.

As you both stand in the great hall watching sunrise paint the walls in shades of gold and pink, exhausted and emotionally raw but triumphant, Vale turns to you with an expression that's equal parts exhausted satisfaction and something softer, more vulnerable. "I\'m sorry if I overstepped earlier," they say quietly, referring to their initial dive into your family's records without explicit permission. "I just... I wanted to help. Wanted to find the truth for you. I'm sorry."

"Don't be," you reply honestly. "I needed to know. Deserved to know. And I'm glad you were the one helping me find out."

"Well," Vale says, and their voice drops lower, becomes more serious and intimate, "I'm honestly glad too. This whole thing... working with you like this, sharing discoveries, trusting each other with dangerous truths..." They pause, seeming to weigh their next words carefully. "It means something. You mean something. More than just another investigation, more than just another mystery to solve or another story to tell."

They reach out and take your hand again, the gesture that's becoming familiar, comfortable. "I've spent years wandering, never staying anywhere long enough to matter, never letting anyone get close enough to become a complication. Safer that way. Easier to leave when the road calls. But you..." They meet your eyes directly, dropping all pretense and charm. "You make me want to stay. Want to see where this all goes. The investigation, the cause, the..." They gesture vaguely between you both, their voice barely above a whisper now, "whatever this is that's developing between us."

Vale steps closer, close enough that you can see the flecks of different colors in their eyes, the way their lips part slightly as they wait for your response. "I know the timing is terrible, given that we just uncovered evidence that puts us both in danger, you're still processing devastating truths about your parents, and we're both exhausted from staying up all night... But I couldn't not say something. It doesn't feel right to let the moment pass without you knowing that somewhere between deciphering codes and discovering hidden chambers, between shared jokes and comfortable silences, between fighting a shadow beast and sudden your blood magic suddenly appearing in the arena..." They swallow hard. "I started falling for you. Not just as someone that I would enjoy fooling around with, but as someone I want to build something with. Someone I want to truly have as a part of my own story, not just a passing chapter that I'd look back on some day and wonder 'what if?'."

The confession is raw, honest, completely unlike their usual carefully crafted words. This is Vale without the performer's mask, without the wanderer's practiced detachment. Just them, vulnerable, full of hope and yet terrified you might not feel the same way.

"So that's where I am," they conclude with a shaky laugh. "Completely compromised. Emotionally invested. Unable to maintain professional investigative distance. All the things I swore I'd never let happen again after..." They stop, shakes their head. "After the last time I let myself care and had to watch someone I loved make choices I couldn't support. But you're different. This feels different. And I'm hoping, possibly foolishly, that maybe you'd like to take a chance on this as well?"

The question hangs between you, weighted with vulnerability and hope and the exhaustion of a long night spent discovering truths both historical and personal.`,
	choices: [
		{
			id: 'mutual-feelings',
			text: 'Acknowledge you feel the same way - this is something special',
			next: 'vale_romance_path',
			effects: { empathy: 6, charisma: 5 },
			hiddenEffects: {
				vale_bond: 5,
				vale_romance: 10,
				mutual_feelings: true,
				vale_relationship: 'romantic',
				adventuring_lovers: true
			}
		},
		{
			id: 'need-time',
			text: 'Express that you need time - this is moving fast, want to be sure',
			next: 'rowan_formal_introduction',
			effects: { wisdom: 5, empathy: 4 },
			hiddenEffects: {
				vale_bond: 5,
				vale_romance: 3,
				taking_it_slow: true,
				vale_patient: true
			}
		},
		{
			id: 'just-friends',
			text: 'Gently explain you value them as a friend and partner, but not romantically',
			next: 'rowan_formal_introduction',
			effects: { empathy: 6, wisdom: 4 },
			hiddenEffects: {
				vale_bond: 5,
				vale_relationship: 'platonic',
				vale_romance: -50,
				investigation_partners: true,
				clear_boundaries: true,
				vale_respects_choice: true
			}
		}
	]
};

export const ValeRomancePath: Scene = {
	id: 'vale_romance_path',
	text: `"There is a lot of uncertainty in my life", you admit softly, "but one thing I do know is that I want to explore this with you. I want to see where this partnership takes us, both in uncovering the truths about my family and in whatever this is between us."

	Vale's expression shifts to one of surprised joy, eyes shining with relief and happiness. You close the short distance between you, wrapping your arms around him in a warm embrace that feels like safety and adventure combined.
	
	"I really wasn't expecting this when I first approached you back in Thornshaven, you know..." Vale admits with a rare vulnerable smile, their usual practiced composure cracking to reveal genuine emotion beneath. "I wander. Never stay anywhere long, never put down roots. Never let anyone get close enough to matter. I've always felt safer that way. It makes it easier to leave when the road calls." They cup your face gently with calloused hands that have held a hundred maps, picked a thousand locks, traced countless mysteries. "But you... you make me want to stay. Want to build something instead of just observing and moving on. Want to be part of the story instead of just reading it from the margins."

	You smile up at him and respond, "Then let's start writing the next chapter together." You wrap your arms around his neck, and look him deeply in the eyes before gently pulling him down into a kiss.

	Vale kisses you softly, tenderly, as if memorizing the moment. You return the kiss with equal care, feeling a warmth spread through you that has nothing to do with blood magic and everything to do with connection. Your mind races with possibilities....shared adventures, uncovered secrets, late-night conversations filled with laughter and discovery, moments of intimacy where you can truly see and be seen by Vale. But each time your mind wanders to the possible future, Vale pulls you back into the moment with another press of his lips, caress of his tongue, a touch of his hand against your body. You aren't sure how much time passes in his arms, and you don't care. All that matters is the here and now. 
	
	Eventually the two of you part slightly, catching your breath while remaining in each other's arms.  You smile at Vale, and he smiles back in a completely ungaurded and honest way.
	
	"I've seen a hundred kingdoms, walked a thousand roads, uncovered secrets that would make nobles weep and commoners riot. But investigating with you? Uncovering truths together, fighting for something that matters? That's the most alive I've ever felt. Like I'm finally doing something meaningful instead of just collecting interesting facts and moving on before anyone can anchor me."

	Their voice drops to something intimate and wondering. "Let's solve every mystery, face every danger, and uncover every secret buried in your family's past and your kingdom's future. Together. Not as wanderer and princess, but as partners. Equals in this mad and dangerous yet absolutely necessary quest for truth."`,
	choices: [
		{
			id: 'affirm-partnership',
			text: 'Affirm partnership in adventure and love',
			next: 'vale_romance_continue',
			effects: { courage: 6, empathy: 6 },
			hiddenEffects: {
				vale_bond: 5,
				vale_romance: 10,
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

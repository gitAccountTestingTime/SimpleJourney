import { Scene } from '../../story-manager';

const morningAtManor = `Morning light filters through ancient trees surrounding Silverwood Manor's grounds. You've been awake for hours already—sleep came fitfully last night, dreams filled with portraits and prophecies, destiny and duty, the weight of inheritance pressing down even in unconsciousness.

You decided to walk the grounds, to breathe air untainted by marble and legacy, to feel grass beneath your feet rather than stone floors that remember kings. The gardens sprawl before you, wild and overgrown yet retaining traces of their former glory—rose bushes that should have died decades ago still bloom with determined defiance, hedge mazes have grown chaotic but their paths remain navigable, fountains dry for twenty years somehow hold water that sparkles with residual magic.`;

const forestPresence = `That's when you sense it: a presence watching from the tree line. Not hostile, but observant, patient, waiting for the right moment to reveal itself. Your blood mark tingles—not warning of danger, but recognizing something... kindred. Power, yes, but a different flavor than the blood magic that runs through your veins. This is something older, wilder, connected to the earth itself rather than dynasty and bloodline.`;

const rowanAppearance = `A figure emerges from the forest edge where shadow meets sunlight. Half-elf—you recognize it immediately from the pointed ears visible through auburn hair, the otherworldly grace in their movements, the way they seem to exist slightly apart from mundane reality. They're dressed in practical leathers worn smooth by use and weather, reinforced at joints and stress points with what appears to be living bark woven directly into the material. Vine tattoos wind up both arms in intricate patterns, glowing faintly with green luminescence that speaks of nature magic actively flowing through them.

Auburn hair catches the morning sun, shot through with highlights that shift between copper and gold depending on the angle of light. Forest-green eyes—genuinely green, not metaphorically, the precise shade of new leaves in spring—assess you with careful neutrality. Neither hostile nor deferential, just... observing. Measuring. Deciding what they think of you before committing to any particular stance.`;

const rowanPhysicalDescription = `They're lean in the way of people who live through movement rather than comfort, with the corded muscle of someone who climbs, runs, fights, and survives as daily practice rather than occasional necessity. Scars mark their exposed skin—thin white lines on forearms and cheekbones, souvenirs from thorns and claws and blades. A bow rests across their back, wood so dark it's nearly black, strung with what looks like spider silk but can't be, too strong, too luminescent. Twin short swords hang at their hips, weapons designed for close quarters forest combat where long blades would catch on branches.`;

const rowanGreeting = `They stop a respectful distance away—not close enough to threaten, not far enough to seem fearful. Their posture is relaxed but ready, the stance of someone who can go from stillness to deadly motion in a heartbeat if necessary.

"Your Highness," they say, and the title sounds strange directed at you—formal yet carrying a hint of something else. Not quite mockery, but certainly testing. Seeing how you'll react to royal address, whether you'll embrace it immediately or push back against the sudden formality.`;

const rowanIntroduction = `"I am Rowan Thornheart, ranger of the Wildwood, warden of the eastern boundaries, keeper of old paths that most have forgotten." Their voice carries the musical cadence of elven heritage mixed with something earthier, more grounded. "Agent Thorne of the Shadow Court has assigned me as your official guardian. My task—" a slight emphasis on the word, as if they have opinions about tasks assigned rather than chosen, "—is to keep you alive and teach you to survive outside these comfortable walls."`;

const rowanAssessment = `They pause, letting the words settle, watching your reaction with those unsettling green eyes that seem to see past surface presentation to something deeper. There's challenge in their voice, subtle but unmistakable. They're testing you. Trying to determine if nobility has already infected your thinking, if inherited wealth and discovered bloodline have already created distance between you and the reality they represent.

This is a person who lives close to nature's harshness, who understands survival not as abstract concept but as daily practice. They're wondering: are you worth protecting? Are you someone who'll listen and learn, or someone who'll demand deference and obedience from a position of inherited privilege?

The forest behind them seems to watch alongside their guardian, waiting for your response with patient, eternal attention.`;

const getRowan = (): string => {
	return `${morningAtManor}

${forestPresence}

${rowanAppearance}

${rowanPhysicalDescription}

${rowanGreeting}

${rowanIntroduction}

${rowanAssessment}`;
};

export const RowanIntroduction: Scene = {
	id: 'rowan_formal_introduction',
	get text() {
		return getRowan();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['companions_priority:true', 'emotional_connection:family'] },
			get text() {
				return `After discovering your heritage at Silverwood, you chose to spend your first day as acknowledged heir reading your parents' journals. Page after page of their handwriting—your mother's flowing script, your father's precise printing—revealing not just historical facts but intimate details of who they were as people. Their hopes and fears, their love for each other, their desperate plans to save you even knowing they would die.

You learned that your mother loved gardens, that she could spend hours tending roses and speaking to plants as if they understood. Your father preferred the library but would join her in the gardens every evening, reading aloud while she worked, the two of them content in companionable silence broken by occasional laughter.

They wrote extensively about their allies, the people they trusted most. And one name appeared repeatedly with particular affection: Rowan Thornheart, ranger of the Wildwood, who saved your mother's life during a diplomatic mission gone wrong and became a trusted friend to the royal family.

So when you stepped outside this morning, seeking solace in the gardens your mother once tended, you were hoping—perhaps unconsciously—to feel closer to her memory. To understand the beauty she saw in growing things, the peace she found in nature.

${morningAtManor}

${forestPresence}

${rowanAppearance}

${rowanPhysicalDescription}

Recognition hits you like a physical force. This is the person your parents wrote about. The ranger they trusted, the friend they valued, someone who knew them not as distant royalty but as real people.

${rowanGreeting}

Before you can respond to the title, Rowan's expression shifts—neutrality replaced by something softer, sadder, weighted with memory and grief.

"I knew them, you know," Rowan says quietly, voice losing its testing edge. "Your parents. Not as monarchs or political figures, but as people. Your mother saved the Wildwood once—convinced the old king to protect our forests rather than clear them for farmland. She understood that some things are worth more than gold or grain. Your father stood with us when timber barons tried to harvest the ancient groves. They were... good people. Genuinely good, in a world that often punishes goodness."

They step closer, studying your face with intense focus. "You have their eyes," they murmur, wonder coloring their tone. "Your mother's exact shade, your father's shape. And something of her smile, though I haven't seen you truly smile yet. I imagine you haven't had much reason to, discovering all this."

Rowan's hand moves to their chest, pressing over their heart in what looks like a formal salute. "I swore an oath to them, the day they saved the Wildwood. Swore I'd protect their line if ever needed. I thought that oath died with them in the Purge. I thought..." Their voice cracks slightly. "I thought I'd failed."

They meet your eyes directly, and you see genuine emotion there—grief for friends lost, wonder at impossible survival, determination to fulfill an oath they thought they'd never get the chance to complete.

"But you survived. You're here. And that means I get a second chance." Their voice firms, professional mask returning but not quite hiding the emotion underneath. "Agent Thorne's assignment makes official what my oath already demands: I will keep you alive. I will teach you to survive. I will honor your parents' memory by protecting what they loved most—their child."

${rowanAssessment}

But the challenge in their voice is tempered now with something else: hope. Hope that you'll be worthy of your parents' sacrifice. Hope that their oath won't be wasted on someone who squanders inherited legacy. Hope that maybe, just maybe, you'll become someone they can believe in as they believed in your parents.`;
			}
		},
		{
			conditions: { hasFlags: ['magic_focus:true', 'blood_magic_affinity:5'] },
			get text() {
				return `After discovering your heritage at Silverwood, you chose to spend your first day as acknowledged heir examining the magical artifacts your family preserved. The vaults beneath the manor hold generations of accumulated power: grimoires written in your ancestors' blood-ink, amulets that pulse with residual magic, weapons forged through blood rituals that should have faded decades ago but somehow remain potent.

You spent hours studying, touching, experimenting. Your blood mark glowed brighter with each artifact you handled, the magic in your veins recognizing kindred power, awakening to its full potential. You learned the theoretical framework of blood magic—how it works, what it costs, what it can accomplish when wielded with skill rather than desperation.

But theoretical knowledge only goes so far. You felt the limitations of learning from books and artifacts. What you need is practical experience, guidance from someone who understands magic not as historical curiosity but as living force.

So this morning you came outside, seeking to practice magic in open air rather than sealed vaults. To feel how blood magic interacts with the natural world, to test your limits without stone walls constraining you.

${morningAtManor}

${forestPresence}

Your blood mark flares suddenly, warmly—not warning, but recognition. The presence in the forest carries magic. Powerful magic, but different from yours. Where blood magic feels hot and vital, liquid and pulsing, this magic feels cool and rooted, growing and patient. Nature magic. Wild magic. Power that predates human civilization and will outlast human kingdoms.

${rowanAppearance}

${rowanPhysicalDescription}

The vine tattoos on their arms aren't just decorative—they're conduits. Channels for magic to flow between body and earth, between will and world. You can see the power moving through them like sap through a tree, connecting them to the forest behind them, making them an extension of nature itself rather than a separate entity operating within it.

${rowanGreeting}

${rowanIntroduction}

Rowan's eyes catch the glow of your blood mark, and their neutral expression shifts to something more interested. The vine tattoos on their arms brighten in response, green luminescence matching the red glow from your skin.

"Ah," they say with evident satisfaction. "Your magic recognizes mine. Blood and nature, two sides of life's power—one drawn from the vital force within, the other from the vital force without. Complementary rather than opposed." They extend one tattooed arm, letting you see the way magic flows through the vine patterns. "Blood magic is powerful, raw, immediate. But it's also finite—you can only draw on what flows through your own veins, and pushing too hard can kill you. Nature magic is different. Slower, more patient, but effectively limitless. The earth will always have more to give."

They study you with newfound respect. "Agent Thorne mentioned you manifested blood magic recently. That's... significant. Most Silverwood heirs took years of training to awaken their power. That you did it instinctively, under stress, suggests exceptional potential."

Rowan's expression becomes more serious. "But potential without training is dangerous. To yourself and others. Blood magic powered by emotion and desperation can do terrible things. You need discipline, control, understanding of what you're wielding."

${rowanAssessment}

But the challenge in their voice now carries a different flavor—not testing your character, but assessing your magical aptitude. They're wondering: can you learn? Do you have the discipline magic demands? Will you respect the power you've inherited, or will you treat it as just another tool of privilege?

"Work with me," Rowan says, "and I'll teach you how blood magic and nature magic can work together. How to ground yourself when the power threatens to overwhelm. How to draw on the world around you to supplement what flows in your veins. How to be a mage rather than just someone with magic."

The forest seems to pulse behind them, emphasizing the offer.`;
			}
		},
		{
			conditions: { hasFlags: ['political_knowledge:true', 'pragmatic_focus:true'] },
			get text() {
				return `After discovering your heritage at Silverwood, you chose to spend your first day as acknowledged heir studying the political documents preserved in your family's private archives. Treaties and trade agreements, maps marking territories and resources, correspondence between your parents and various faction leaders, intelligence reports from the years leading up to the Purge.

You learned that House Silverwood didn't fall because they were weak—they fell because they were surrounded. A coalition of ambitious noble houses, fearful of Silverwood's growing power, orchestrated the Purge under the banner of "protecting the kingdom from magical tyranny." Propaganda, carefully crafted over years, turned public opinion against blood magic. By the time the assassins struck, most of the population believed Silverwood deserved their fate.

But not everyone. The documents reveal a complex web of allies who remained loyal even after Silverwood fell—people who protected survivors, who preserved knowledge, who kept faith that someday the bloodline would return. One name appeared repeatedly in intelligence reports: Rowan Thornheart, ranger of the Wildwood, who led operations to evacuate servants and minor nobles before the Purge reached them, who hid Silverwood artifacts in forest sanctuaries, who maintained communication networks that allowed scattered survivors to stay connected.

The Wildwood faction represents significant political leverage. They control vast territories on Silverwood's eastern borders, command respect from druids and rangers throughout the kingdom, and possess knowledge of secret paths and hidden resources that could prove invaluable. More importantly, they're one of the few major factions that remained vocally loyal to Silverwood even after the fall.

So when you came outside this morning and sensed a presence watching from the forest, you immediately understood: this is a political test. The Wildwood faction is sending someone to assess you, to determine if you're worth their continued loyalty or if they should cut ties with a fallen house.

${morningAtManor}

${forestPresence}

${rowanAppearance}

${rowanPhysicalDescription}

You recognize the tactical assessment happening. Rowan is positioned where they can retreat quickly into forest cover if needed, maintaining distance that allows observation without commitment. Their weapons are visible but not drawn—a statement of capability without immediate threat. The neutral expression, the careful word choice—this is someone trained in diplomacy as well as combat.

${rowanGreeting}

The title "Your Highness" is delivered with perfect neutrality—neither mocking nor deferential. A political move, testing how you'll respond to formal address. Will you demand it, reject it, or accept it with appropriate grace?

${rowanIntroduction}

You note the phrasing carefully. "Assigned" rather than "volunteered." "Task" rather than "honor" or "duty." Rowan is being transparent about the political nature of this arrangement—they're here because Agent Thorne commanded it, representing the Shadow Court's interest in keeping you alive. But whether they'll remain out of personal loyalty or political obligation depends on what they see in you.

${rowanAssessment}

You understand immediately what's happening. This test isn't about combat ability or survival skills—Rowan can teach those regardless of your personality. This test is about character. About whether you'll be the kind of leader the Wildwood can respect, the kind of heir worth the risks of open alliance.

Rowan represents more than themselves. Behind them stands the entire Wildwood faction, watching through their eyes, judging through their assessment. Impress this ranger, and you secure a powerful ally. Fail to impress, and the Wildwood might maintain polite distance, supporting you enough to satisfy obligations but never truly committing their full resources.

Your political education tells you exactly what's at stake here. The question is: how will you play it?`;
			}
		},
		{
			conditions: {
				hasHiddenAttributes: { rowan_met_early: true }
			},
			get text() {
				return `${morningAtManor}

${forestPresence}

A familiar figure emerges from the forest edge—and recognition hits you immediately. You know this person. Not well, but you've met them before, during your journey to Silverwood. The half-elf ranger who appeared on the road when your group made camp, who warned about something watching from the shadows, who offered cryptic advice about trusting your instincts before disappearing back into the forest as mysteriously as they'd arrived.

At the time, you thought it was random chance—a wandering ranger, nothing more. But standing here now, watching them approach with that same graceful stride, you understand: it wasn't chance. They were watching even then, assessing, determining if you were worth protecting before you even knew what you were.

${rowanAppearance}

${rowanPhysicalDescription}

"So," Rowan says, and there's amusement in their voice now, warmth that wasn't there during your first encounter. "The mysterious traveler I met on the road turns out to be the lost Silverwood heir. I suspected as much when I sensed the blood magic in you—felt it humming beneath your skin, responding to danger even if you didn't consciously recognize the threat. That kind of power doesn't manifest in just anyone."

They bow slightly, the gesture carrying a hint of playful irony. "I am Rowan Thornheart, ranger of the Wildwood, and apparently, we're destined to work together. Agent Thorne has made official what fate already decided—I'm to be your guardian, your teacher, your connection to the wild places."

The formality drops from their voice, replaced by genuine warmth. "At least now I know why you felt so important to protect. My instincts were screaming that you mattered, that letting harm come to you would be failing something crucial. I thought it was just ranger's intuition, sensitivity to magical potential. Turns out it was oath-deep recognition—my family swore to protect yours generations ago, and apparently, that oath runs deeper than conscious memory."

Rowan steps closer, meeting your eyes directly. "You did well on the road, you know. Handled danger without panicking, made smart choices, showed care for your companions. That's what I was testing for—not combat ability or magical power, but character. Whether you were someone worth the risks of protection."

They smile slightly. "You passed. So now we get to work together properly, without me lurking mysteriously in shadows. Though I make no promises about not lurking—it's sort of my thing."

${rowanAssessment}

But the testing edge is gone now, replaced by something warmer. You've already proven yourself to this ranger once, already demonstrated the qualities they were looking for. This meeting isn't a test—it's a reunion, a continuation of connection already begun.`;
			}
		},
		{
			conditions: {
				hasHiddenAttributes: { ash_trust: 20 }
			},
			get text() {
				return `After discovering your heritage at Silverwood, you chose to spend your first day as acknowledged heir with your companions—the people who knew you before titles, who traveled with you as equals, who stood beside you through danger and discovery. You needed that grounding, that reminder of who you are beneath inherited bloodline.

Ash stayed particularly close, their protective instincts heightened by the revelation of your royal status. They've been hurt by nobility before, watched people they cared about corrupted by power and privilege. Now they're watching you carefully, looking for signs that wealth and legacy are changing you, ready to intervene if aristocracy starts infecting your character.

This morning, when you decided to walk the grounds, Ash insisted on accompanying you. Not as servant or guard, but as friend who happens to be extremely capable with weapons. They didn't voice their concerns explicitly, but you felt them: worry that someone might try to harm you, that political enemies might strike before you're ready, that the same forces that destroyed your family might come for you now that you've revealed yourself.

${morningAtManor}

${forestPresence}

Ash tenses immediately, hand moving to their weapon. "Someone's watching," they murmur, body shifting into combat stance.

You feel it too—presence in the forest, observing but not attacking. Your blood mark tingles, but not with warning. With recognition.

${rowanAppearance}

${rowanPhysicalDescription}

Before Rowan can speak, Ash steps forward, positioning themselves between you and the ranger. "State your business," they demand, voice carrying military authority mixed with protective fierceness.

The ranger's eyes flick to Ash with evident appreciation—recognizing another warrior, someone who knows how to move, how to fight, how to protect. "Easy," Rowan says calmly, hands moving away from weapons in a gesture of peace. "I'm Rowan Thornheart, ranger of the Wildwood. Agent Thorne of the Shadow Court sent me."

They look past Ash to you, making eye contact directly. "Your Highness, I see you already have capable protection. Good. That speaks well of you—that you inspire that kind of loyalty, that someone this skilled chooses to stand guard." They address Ash again, respect clear in their tone. "I'm not here to replace you or supersede your authority. I offer something different—knowledge of the wild, of magic, of survival beyond walls and cities. The political world will try to trap them—" a gesture toward you, "—in rules and protocols and palace intrigue. I'll make sure they remember the forest. Make sure they can survive if everything else fails."

Ash relaxes slightly, warrior's instinct recognizing honest intent and complementary skills rather than competition. They don't move from their protective position, but their hand eases away from their weapon.

${rowanGreeting}

${rowanIntroduction}

${rowanAssessment}

But Rowan's attention keeps returning to Ash, acknowledging their presence, respecting their role. "I've heard of you," Rowan says to Ash. "Mercenary company leader, reputation for honor and competence. Your choice to protect them—" another gesture toward you, "—tells me something important about their character. People like you don't commit to people who aren't worth it."

Ash nods slowly, assessment complete. They've decided Rowan isn't a threat, at least not immediate. But they don't step away, don't surrender their protective position. They'll be watching this ranger, ensuring promised guidance doesn't become subtle manipulation.`;
			}
		}
	],
	choices: [
		{
			id: 'walk-gardens',
			text: 'Walk through the manor gardens together—experience the beauty your mother loved through your guardian\'s eyes',
			next: 'rowan_garden_walk',
			effects: { wisdom: 3, empathy: 2 },
			hiddenEffects: {
				rowan_bond: 14,
				rowan_official_guardian: true,
				nature_appreciation: true,
				mindful_moment: true
			}
		},
		{
			id: 'welcome-warmly',
			text: 'Welcome them warmly and genuinely—express gratitude for their guidance and protection',
			next: 'first_political_meeting',
			effects: { charisma: 2 },
			hiddenEffects: {
				rowan_bond: 10,
				rowan_official_guardian: true,
				open_personality: true
			}
		},
		{
			id: 'question-need',
			text: 'Question the necessity of protection—assert your independence and capability',
			next: 'first_political_meeting',
			effects: { courage: 2 },
			hiddenEffects: {
				rowan_bond: 5,
				rowan_respects_independence: true,
				rowan_official_guardian: true,
				independent_streak: true
			}
		},
		{
			id: 'introduce-companions',
			text: 'Introduce your companions from the journey—integrate Rowan into your found family',
			next: 'first_political_meeting',
			effects: { charisma: 3 },
			hiddenEffects: {
				rowan_bond: 12,
				rowan_official_guardian: true,
				companions_integrated: true,
				vale_trust: 3,
				ash_trust: 3,
				rook_trust: 3
			}
		},
		{
			id: 'ask-heritage',
			text: 'Ask about their half-elf heritage and connection to nature magic—learn from their perspective',
			next: 'rowan_bonding_1',
			effects: { wisdom: 2 },
			hiddenEffects: {
				rowan_bond: 8,
				rowan_official_guardian: true,
				cultural_curiosity: true,
				rowan_shares_past: true
			}
		}
	]
};
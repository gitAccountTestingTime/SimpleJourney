import { Scene } from '../../story-manager';

const arrivalAtSilverwood = `The forest path opens suddenly, revealing your destination. Silverwood Manor rises before you like a ghost from the past—a monument to lost grandeur, a testament to fallen glory, a keeper of secrets too dangerous to speak aloud for twenty years.

The estate is larger than you imagined, sprawling across cleared grounds that nature has begun reclaiming. Ivy climbs ancient stone walls with determined persistence, its leaves rustling in a wind that seems to carry whispers. Gardens that once displayed royal wealth have become wild tangles of overgrowth, yet somehow maintain a strange beauty—as if the land itself remembers what it once was and refuses to entirely surrender that memory.`;

const manorArchitecture = `The main building displays architecture from an era of confidence and power: soaring towers that pierce the sky, elegant arched windows that would have flooded interior rooms with light, intricate stonework depicting the Silverwood family crest—that tree with spreading branches and deep roots, surrounded by thirteen stars. Gargoyles perch at the corners, their expressions caught between menace and sorrow, eternal guardians of abandoned halls.

Despite years of neglect, the manor retains an undeniable presence. This is not a dead place—it's sleeping. Waiting. And you can feel it: magic pulses from the very foundations, running through the stone like blood through veins, resonating with something deep inside you. Your blood mark tingles in response, recognizing kindred power.`;

const approachingEntrance = `You and your companions cross overgrown grounds toward the main entrance—massive oak doors bound with ironwork that should have rusted away decades ago but somehow remains pristine. Each step feels weighted with significance, as if you're walking toward a destiny that was written before you were born.

Your companions sense it too. Their usual conversation has fallen silent, replaced by an awed hush. Even the forest behind you seems to be holding its breath, waiting to see what happens next.`;

const doorRecognition = `As you reach the entrance, your blood mark ignites. Not painfully, but with warmth that spreads through your entire body—welcoming, acknowledging, claiming. The sensation is unmistakable: the manor recognizes you.

The great doors respond. Without any visible mechanism, without creaking or groaning, they swing open smoothly and silently—as if they've been waiting for this exact moment, this exact person. The darkness beyond beckons, and you step forward into your heritage.`;

const entryHall = `The entry hall takes your breath away. Despite years of abandonment, dust and decay have barely touched this space. Marble floors still gleam, reflecting light from windows that shouldn't be clean but somehow are. A grand staircase curves upward, its bannister carved with intricate scenes of Silverwood history. Crystal chandeliers hang overhead, their prisms catching sunlight and scattering rainbow patterns across walls.

But it's the portraits that command attention. They line both sides of the hall, ascending the staircase and continuing down corridors—generations of faces staring down at you. Kings and queens, princes and princesses, warriors and mages, healers and scholars. The entire lineage of House Silverwood, preserved in oil and canvas, watching. Judging. Waiting.`;

const portraitSearch = `You walk slowly past them, studying each face, feeling the weight of history and expectation. Some portraits are ancient, paint cracking with age. Others are more recent, faces you recognize from Whisper's historical descriptions: the last king and queen, executed during the Purge. Their children, murdered alongside them. The counselors, the guards, the loyal servants—all destroyed in a single bloody week that tried to erase Silverwood from history.

And then you see it.`;

const thePortrait = `At the top of the staircase, positioned prominently where it cannot be missed, hangs a portrait that stops you cold. The face staring back at you is your own—not similar, not reminiscent, but identical. Same eyes, same bone structure, same expression you've seen a thousand times in mirrors. The figure in the painting wears royal regalia: deep crimson robes trimmed with silver thread, a circlet resting on their brow bearing the Silverwood tree, and most significantly, their hand is raised to show a glowing blood mark identical to yours.

Your legs nearly give out. Someone behind you gasps. The world tilts.`;

const inscription = `Below the portrait, an inscription is carved into the frame with precise lettering:

"Prince/Princess {name}, Heir to House Silverwood
Beloved of the Kingdom, Hope of the Future
Year 1205"

1205.

But you were born in 1225. Twenty years after this portrait was painted. Twenty years after everyone believed House Silverwood had fallen, its bloodline extinct, its power destroyed forever.`;

const timeParadox = `The impossibility of it crashes over you like a physical force. This portrait depicts you—undeniably you—yet it was created two decades before your birth. How? Why? What did they know? What did they see?`;

const hiddenChamber = `As you stand frozen before your impossible portrait, something shifts. The wall behind the painting clicks, mechanisms engaging after years of stillness. A section of stone slides aside, revealing a hidden chamber—a secret room that existed for this precise moment, waiting for the right blood to trigger its opening.

Inside, preserved by magic or fate or desperate hope, lie the treasures of your true heritage: journals bound in leather, their pages filled with careful script; magical artifacts that pulse with residual power; maps marking locations of significance; and most prominently, a letter sealed with wax bearing your name—your real name, the name you were meant to have, the name that carries the weight of destiny.`;

const valeExplanation = `Vale speaks softly, their voice trembling with emotion and understanding: \"The Silverwood royal family possessed unique gifts beyond blood magic. They could see threads of possibility, glimpse futures not yet written, perceive destinies waiting to unfold. They painted this portrait of you... before you were born. They knew. Somehow, they knew you would come.\"`;

// Reusable text components for variants
const manorApproach = `${arrivalAtSilverwood}

${manorArchitecture}

${approachingEntrance}`;

const doorsRecognize = `${doorRecognition}

${entryHall}

${portraitSearch}`;

const portraitTitle = thePortrait;

const nameBelow = `${inscription}

${timeParadox}`;

const finalTruth = `The truth hits like a thunderbolt, like awakening from a dream, like remembering something you've always known but couldn't articulate:

You are not an orphan who stumbled into magic.
You are not a random inheritor of extinct power.
You are the heir to a fallen kingdom.
You are the last hope of a magical bloodline that refused to die.
You are the future they saw coming, painted, and prepared for.

Everything in your life—every choice, every hardship, every victory—has been leading to this moment. To this truth. To this threshold of destiny.`;

const getDiscoveryScene = (): string => {
	return `${arrivalAtSilverwood}

${manorArchitecture}

${approachingEntrance}

${doorRecognition}

${entryHall}

${portraitSearch}

${thePortrait}

${inscription}

${timeParadox}

Behind you, your companions gasp as the impossible reality registers.

${valeExplanation}

${hiddenChamber}

${finalTruth}`;
};

export const DiscoveryAtSilverwood: Scene = {
	id: 'discovery_at_silverwood',
	get text() {
		return getDiscoveryScene();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['vale_romance:20', 'journey_focus:vale'] },
			text: `${manorApproach}

Vale's hand finds yours as you enter together. The warmth of their touch grounds you as magic swirls around you.

${doorsRecognize}

${portraitTitle} ${nameBelow}

${timeParadox}

Vale reads the inscription aloud, voice trembling with emotion: "Princess {name}, Heir to House Silverwood. Beloved of the kingdom. Hope of the future."

${hiddenChamber}

When you read the letter left by your parents, Vale holds you as tears fall. "You're not alone," they promise. "You've never been alone. And whatever comes next, we face it together."

${finalTruth}`
		},
		{
			conditions: {
				hasHiddenAttributes: { vale_romance: 20 }
			},
			text: `${manorApproach}

Vale's hand finds yours as you approach. "Whatever we discover in there," they whisper, "changes nothing about who you are to me."

${doorsRecognize}

${portraitTitle} ${nameBelow}

${timeParadox}

Vale reads the inscription aloud, voice trembling with emotion: "Princess {name}, Heir to House Silverwood. Beloved of the kingdom. Hope of the future."

${hiddenChamber}

When you read the letter left by your parents, Vale holds you as tears fall. "You're not alone," they promise. "You've never been alone. And whatever comes next, we face it together."`
		},
		{
			conditions: { hasFlags: ['ash_trust:25', 'journey_focus:ash'] },
			text: `${manorApproach}

Ash positions themselves protectively as you enter, hand on weapon, scanning for threats. But the only danger here is truth.

${doorsRecognize}

${portraitTitle} ${nameBelow}

${timeParadox}

Ash stares at the portrait in stunned silence. "This... this explains so much." They turn to you. "The blood magic, the Shadow Beast's reaction, everything."

${hiddenChamber}

Ash stands guard while you read your parents' letter. Their voice is rough when they speak: "Royalty or not, you're still you. And I'm still here. Whatever you decide to do with this... I'm with you."

${finalTruth}`
		},
		{
			conditions: { hasFlags: ['rook_trust:15', 'journey_focus:rook'] },
			get text() {
				return `The journey to Silverwood with Rook proved surprisingly meaningful. Behind their street-smart facade and quick wit, you discovered someone who'd survived by being alone and was cautiously learning to trust. They shared stories around the campfire—glimpses of a harder life, choices made from desperation, dreams they'd stopped letting themselves have. By the time the manor appeared, you understood: Rook was risking something profound by being here, by caring.

Now, as the estate rises before you, Rook whistles low, their usual bravado returning. "This place is worth a fortune," they observe, eyes cataloging architecture and grounds with a thief's practiced assessment. Then they glance at you, something softer in their expression. "But I guess it's yours now, isn't it? Or was always supposed to be."

${arrivalAtSilverwood}

${manorArchitecture}

Rook moves forward with their characteristic blend of caution and curiosity, noting details—potential entry points, valuable fixtures, structural weaknesses. But they stay close to you, and you notice their hand keeps drifting toward the knife at their belt. Not threatening, but protective. Ready.

${approachingEntrance}

${doorRecognition}

Rook jumps back as the doors swing open. "Okay, that's definitely magic," they mutter. "And definitely responding to you specifically." They shoot you a look that mixes wariness with awe. "Should've known you were more than you seemed. Should've trusted those instincts."

${entryHall}

Rook's eyes go wide taking in the opulent entry hall. "I've robbed rich people," they whisper, "but this is... this is real wealth. Generational power." They look at you with new understanding. "This is what you come from."

${portraitSearch}

As you walk past generations of royalty, Rook follows, studying faces with a street kid's instinct for reading people. When you stop, frozen before the portrait, they step up beside you.

${thePortrait}

Rook's usual smirk vanishes completely. They stare between you and the portrait, back and forth, their expression shifting from disbelief to shock to something approaching fear. "That's... that's you. Exactly you."

${inscription}

They read the inscription aloud, voice barely above a whisper: "'Prince/Princess {name}, Heir to House Silverwood... Year 1205.'"

Rook does the math quickly, street-sharp mind processing the impossible. "Wait. You're actual royalty?" They look at you with dawning horror mixed with hysterical amusement. "I tried to pickpocket actual royalty. I threatened actual royalty. This is either the stupidest thing I've ever done or..."

They trail off, shaking their head. "Or maybe the luckiest. Because any other noble would've had me executed. You offered me work."

${timeParadox}

${valeExplanation}

${hiddenChamber}

When the hidden chamber opens, Rook's instincts kick in—checking for traps, assessing threats, ensuring safety. But once they determine it's secure, they help you sort through the artifacts and journals with surprising gentleness.

They watch as you open the letter from your parents, and when you start crying, they look uncomfortable—someone not used to dealing with genuine emotion. But they stay. They don't flee or make jokes or hide behind deflection. They simply stay.

"For what it's worth," Rook says quietly, voice stripped of its usual mockery, "you're the first noble who ever treated me like a person. Not a tool, not a threat, not something to be stepped on or ignored. A person."

They meet your eyes, vulnerable in a way you've never seen. "Whatever you become—whether you reclaim this kingdom or walk away, whether you take up the crown or burn it—I hope you remember that. I hope you remember that who you are matters more than what you are. Because that's what made me want to follow you."

${finalTruth}

And standing in the ruins of your family's legacy with a street thief who became a friend, you realize: maybe that's the future worth building. One where people are valued for who they are, not what they were born to be.`;
			}
		},
		{
			conditions: { hasFlags: ['self_reflection:true', 'journey_focus:self'] },
			get text() {
				return `You spent the journey to Silverwood in contemplation, choosing solitude over companionship when the opportunity arose. Your companions respected your need for space, understanding that this discovery would fundamentally reshape your understanding of yourself. Around the campfire, while others talked, you sat apart, processing everything Whisper revealed, everything that led to this moment.

The loneliness you've always carried, the sense of not quite belonging, the feeling that something essential was missing from your life—all of it pointed here. To this truth. To this threshold.

Now, as the manor appears through the trees, you ask your companions to wait outside. This moment, this revelation, you need to face alone. They agree, though concern shows in their eyes. Some truths can only be received in solitude.

${arrivalAtSilverwood}

${manorArchitecture}

You approach the entrance alone, and the solitude feels right. This is your heritage, your destiny, your truth to claim.

${approachingEntrance}

${doorRecognition}

The doors recognize you, and only you. They open for blood that carries memories, for magic that connects across impossible time. You step inside, and the weight of silence presses down—not oppressive, but reverent. Sacred.

${entryHall}

You walk slowly past the portraits, alone with your ancestors. No one speaks. No one interprets. It's just you and the faces of those who came before—your family, stretching back through centuries, leading inexorably forward to this moment.

${portraitSearch}

${thePortrait}

You sink to your knees before the portrait, legs giving out as the impossible truth crashes over you. There you are, painted with loving detail by artists who died before you were born, wearing regalia you never knew you were entitled to, bearing a title you never knew was yours.

All the loneliness. All the feeling of being different, of not belonging, of searching for something you couldn't name. It all makes sense now. You weren't lost—you were separated. Displaced in time by a family desperate to save their heir from genocide, to preserve their bloodline through the Purge, to ensure their legacy survived even if they couldn't.

${inscription}

${timeParadox}

The hidden chamber opens to your touch alone. The magic recognizes your blood, your right, your solitary claim to this heritage. Inside, the remnants of your family's legacy await: journals written in your grandmother's hand, artifacts charged with your grandfather's power, maps marking locations only Silverwood heirs should know.

And the letter. Sealed with your name—your true name, the one written in destiny before you were born. Your mother's handwriting fills the pages, words penned knowing she would never see you, never hold you, never watch you grow. But loving you anyway with a fierceness that transcends death.

She explains prophecies and terrible choices. How the Silverwood seers saw the Purge coming, saw their family's destruction, but also saw one thread of hope: a child born twenty years later, carrying the full power of the bloodline, destined to either restore the kingdom or transform it into something new.

They chose to save you. Chose to die themselves so you could exist. Chose to paint your portrait and seal these chambers and prepare everything you would need—and then let you go, trusting in fate and magic and the strength they knew you would develop.

${finalTruth}

You kneel alone in the hidden chamber, surrounded by the love and sacrifice of family you never knew, processing a destiny you never chose but somehow always carried. The tears come freely now, grief and wonder and terrible purpose intermingling.

You are alone with this truth. But somehow, being alone feels right—feels necessary. Because this choice, this acceptance, this path forward... it has to begin with you, alone with yourself, understanding who you truly are before deciding what you'll become.`;
			}
		}
	],
	choices: [
		{
			id: 'claim-destiny',
			text: 'Embrace your heritage fully: "I am ready. I will claim my destiny and restore House Silverwood."',
			next: 'act1_start',
			effects: { courage: 5, charisma: 4 },
			hiddenEffects: {
				identity_accepted: true,
				'royal_path:true': true,
				restoration_goal: true,
				prologue_completed: true,
				nobility: 10,
				political_ambition: true
			}
		},
		{
			id: 'reluctant-acceptance',
			text: 'Accept the truth cautiously: "I acknowledge what I am, but I need time to understand what this means."',
			next: 'act1_start',
			effects: { wisdom: 5 },
			hiddenEffects: {
				identity_accepted: true,
				'royal_path:reluctant': true,
				'restoration_goal:uncertain': true,
				prologue_completed: true,
				nobility: 5,
				cautious_approach: true
			}
		},
		{
			id: 'reject-politics',
			text: 'Choose independence: "I acknowledge my blood, but I choose my own path—not royal politics."',
			next: 'act1_start',
			effects: { courage: 4, charisma: 3 },
			hiddenEffects: {
				identity_accepted: true,
				'royal_path:independent': true,
				restoration_goal: false,
				prologue_completed: true,
				nobility: 3,
				chosen_independence: true
			}
		},
		{
			id: 'embrace-companions',
			text: 'Prioritize relationships: "My heritage matters, but these people—my friends—matter more."',
			next: 'act1_start',
			effects: { charisma: 5, wisdom: 2 },
			hiddenEffects: {
				identity_accepted: true,
				'royal_path:companion_focused': true,
				'restoration_goal:conditional': true,
				prologue_completed: true,
				nobility: 5,
				companion_priority: true,
				vale_trust: 5,
				ash_trust: 5,
				rook_trust: 5,
				whisper_trust: 5
			}
		}
	]
};

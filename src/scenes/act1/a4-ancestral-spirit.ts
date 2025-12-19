import { Scene } from '../../story-manager';

const afterMeeting = `The political meeting left you exhausted—not physically, but mentally and emotionally. Three faction leaders, each with their own agendas, each assessing you, each calculating how to use or oppose you. The weight of their expectations, their judgments, their carefully veiled threats and promises, presses down like a physical burden.

You needed to escape. To find space where you weren't being constantly evaluated, where you could simply breathe without every breath being interpreted as political statement. So you retreated to the manor's library, seeking solace in books and silence.`;

const libraryAtmosphere = `The library is magnificent—three stories of floor-to-ceiling bookshelves, rolling ladders providing access to upper levels, comfortable reading chairs positioned near windows that overlook the gardens. Thousands of volumes line the shelves: histories and philosophies, magical treatises and political theories, poetry and fiction, scientific texts and religious manuscripts. The collected knowledge of House Silverwood, preserved through decades of abandonment by enchantments that kept pages pristine and bindings intact.

Dust motes dance in afternoon sunlight streaming through tall windows. The air smells of aged paper and leather and something else—magic, subtle but pervasive, woven through every inch of this space. This was a place your ancestors valued, a sanctuary of learning and reflection.`;

const bloodMarkResponse = `You're browsing the shelves, running fingers along spines, when your blood mark suddenly flares. Not painfully, but urgently—warmth that spreads up your arm, accompanied by a pulling sensation. Insistent. Demanding attention. Your mark has reacted before, but this feels different. Not warning of danger or recognizing kindred magic, but... calling. Drawing you toward something specific.

You follow the sensation, letting it guide you through the stacks. Past historical texts and magical grimoires, past fiction and philosophy, to a section in the farthest corner where ancient volumes are shelved. Texts so old their titles have faded, written in languages you don't recognize, bound in materials that might be leather or might be something else entirely.`;

const hiddenMechanism = `Your blood mark pulses insistently before one particular shelf. Without conscious thought—guided by instinct or magic or ancestral memory carried in your blood—your hand reaches out and touches a specific book. A tome bound in dark red leather, its spine unmarked, nestled between two larger volumes.

The moment your fingers make contact, you feel it: a click that's both mechanical and magical. The book doesn't move, but the entire bookshelf does—swinging inward smoothly and silently, revealing a hidden doorway that shouldn't exist. Stone walls where moments ago there was only bookshelf, descending stairs that lead down into darkness that somehow doesn't feel threatening.`;

const secretChamber = `You descend carefully, each step lighting as your foot touches it—magic responding to your presence, your blood, your right to be here. The stairs spiral down one full turn before opening into a hidden chamber that takes your breath away.

The room is circular, perhaps thirty feet in diameter, with a domed ceiling covered in intricate murals depicting the history of House Silverwood. You see scenes of great battles and peaceful negotiations, magical rituals and royal ceremonies, the founding of the dynasty and its greatest triumphs. The artwork is breathtaking, painted with such skill that the figures seem almost alive, their eyes following you as you enter.

Ancient runes cover the walls in precise geometric patterns, glowing with soft blue-white light that illuminates the chamber without any apparent source. The magic here is powerful, old, deliberately maintained. This room has been waiting, protected by enchantments that have kept it hidden and preserved for decades.`;

const centerCircle = `In the chamber's center, a circle is inscribed on the floor—not carved but somehow embedded into the stone itself, made of a silver metal that gleams despite centuries of existence. More runes spiral around the circle's edge, their glow pulsing slowly like a heartbeat, like breathing, like something alive and patient.

As you step closer, the runes flare brighter. The entire chamber responds to your presence, magic recognizing Silverwood blood, awakening fully after twenty years of dormancy. The air grows thick with power, charged with anticipation, trembling with something about to happen.`;

const spiritManifestation = `Within the center circle, light begins to coalesce—not suddenly, but gradually, like dawn breaking. Translucent at first, then increasingly solid, a figure materializes from pure magical energy. Tall—over six feet—with broad shoulders and powerful build. The spirit wears full plate armor of a style centuries out of date, marked with the Silverwood crest and bearing scars from battles long forgotten. A great sword hangs at their side, its blade half-translucent like its bearer.

The face is stern but not unkind, weathered by decades of service, bearing the look of someone who saw much hardship but never surrendered honor. Eyes—impossibly bright, glowing with residual magic—regard you with assessment that feels different from the faction leaders' scrutiny. This is not judgment of your political usefulness, but evaluation of your character. Your worthiness. Your right to stand in this sacred space.`;

const aldricGreeting = `"At last," the guardian spirit speaks, voice echoing as if from far away, resonating with harmonics that suggest immense power carefully controlled. "An heir returns to Silverwood. Twenty years I have waited in this chamber, bound by oath and magic, maintaining watch even beyond death. Twenty years of silence and stillness, wondering if the prophecy would prove true or if House Silverwood would fade forever into history."

The spirit's expression softens, stern assessment giving way to something warmer. Relief, perhaps. Even joy.

"I am Sir Aldric Thornhaven, First Knight of the Silverwood Royal Guard, Guardian of Ancient Secrets, Keeper of the Hidden Chambers." The titles roll off with formal weight, but genuine emotion colors the words. "I served your great-grandfather and your grandfather before the Purge took them. I was granted this final posting—to remain here, spirit bound to purpose, watching over knowledge too precious to lose. And now you stand before me, bearing the blood that grants you access, carrying the mark that proves your heritage."

Sir Aldric bows—deeply, respectfully, a warrior's acknowledgment of rightful authority.

"Welcome home, heir of Silverwood."`;;

const aldricStudy = `The spirit straightens from the bow and studies you with those ancient, glowing eyes. Not just your appearance, but something deeper—reading your character, sensing your intentions, evaluating the kind of person you've become during your years away from this place.

"You've faced hardship," Aldric observes, voice gentle. "I can see it in you—the weight you carry, the survival you've achieved, the strength forged through adversity rather than inherited through privilege. Good. That will serve you. Power given is easily taken. Power earned through struggle... that endures."

He pauses, head tilting slightly as if listening to something you can't hear. "And I sense companions in your life. People who stand with you not from duty but from choice. Your ancestors would approve. Silverwood at its best was never about isolated power, but about bonds of genuine loyalty."`;;

const oneQuestion = `Sir Aldric's expression becomes more serious, formal authority returning to his bearing.

"I am bound by ancient laws and magical oaths, heir of Silverwood. The knowledge I guard is precious, dangerous, powerful beyond measure. I cannot simply give it all freely—such knowledge must be earned, proven worthy of receiving. The spirits of this place know much, preserved through centuries, maintained even after death because some truths are too important to let fade."

He gestures, and the runes around the circle pulse brighter, as if emphasizing his words.

"But you are newly returned, newly awakened to your heritage. You face challenges you don't yet fully understand, dangers you haven't learned to recognize, opportunities you don't know exist. So I will offer you a gift, granted once and never again: I may answer one question. Only one. Choose wisely, young heir, for the knowledge you seek now may shape all that follows."

The chamber falls silent, waiting. The weight of the offer presses down—one question, one answer, one chance to learn something that could change everything. What do you most need to know?`;

const getAncestralSpirit = (): string => {
	return `${afterMeeting}

${libraryAtmosphere}

${bloodMarkResponse}

${hiddenMechanism}

${secretChamber}

${centerCircle}

${spiritManifestation}

${aldricGreeting}

${aldricStudy}

${oneQuestion}`;
};

export const AncestralSpirit: Scene = {
	id: 'ancestral_spirit',
	get text() {
		return getAncestralSpirit();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['companions_at_meeting:true', 'companions_priority:true'] },
			get text() {
				return `The political meeting was exhausting in ways you didn't expect. Not because of the faction leaders themselves—though they were certainly intense—but because of the choice you made to have your companions stand with you. You saw how it affected the dynamics: Seraphine's slight disapproval of informal protocol, Pembroke's enthusiastic support of unconventional thinking, Blackwood's assessment of whether your loyalty to friends represented strength or exploitable weakness.

Your companions noticed the scrutiny too. Afterwards, Vale touched your shoulder gently: "You did well." Ash stood close, protective instincts heightened by the barely-concealed political maneuvering. Rook made jokes to cut the tension, but their eyes kept scanning for threats. They all understood—you chose to include them, and that choice has consequences, both good and complicated.

But now you need time alone. Not because you regret the choice, but because you need to process it, to understand what you've committed to, to find your own center before the next challenge arrives. Your companions understood. "We'll be here when you're ready," Vale said. "Take the time you need."

${afterMeeting}

${libraryAtmosphere}

${bloodMarkResponse}

${hiddenMechanism}

${secretChamber}

${centerCircle}

${spiritManifestation}

${aldricGreeting}

Sir Aldric straightens from his bow and studies you with those ancient eyes. A smile crosses his translucent features—warm, approving, tinged with memory.

"You brought your friends to the formal gathering," he observes. "Unconventional. The court advisors would have been scandalized." The smile widens. "Your mother would have approved. She always valued loyalty over protocol, genuine connection over political calculation. She once brought a street musician to a state dinner because she enjoyed their songs and wanted them to experience palace food. The nobles were horrified. Your father found it delightful."

The spirit's expression becomes more thoughtful. "There's strength in what you did—showing the factions that you won't abandon people you care about just because circumstances change. But there's also vulnerability. Those who want to manipulate you now know your weakness: threaten your friends, and you'll react. Protect them carefully, young heir. Loyalty is beautiful, but it can be weaponized."

${aldricStudy}

${oneQuestion}

The offer feels even more significant now. Your companions trust you to make good choices, to lead with wisdom they believe you possess. This question, this answer—it might help you protect them, guide them, be worthy of their faith in you.`;
			}
		},
		{
			conditions: { hasFlags: ['met_factions_alone:true'] },
			get text() {
				return `The political meeting was a test you chose to face alone. No companions standing with you, no advisors whispering counsel, just you and three faction leaders who command the loyalty of thousands. You stood before them as yourself—not hidden behind others' reputations or shielded by their support, but exposed, vulnerable, authentic.

And you survived. More than survived—you impressed them, at least somewhat. Seraphine's approval was evident in her subtle nod. Blackwood's scarred face showed something that might have been respect. Even Pembroke, who might have preferred to see you surrounded by diverse advisors, seemed to acknowledge the courage required to face such scrutiny alone.

But it was exhausting. Maintaining that composure, projecting that confidence, making decisions without consultation—it took everything you had. Now, in the aftermath, you feel hollowed out, drained, desperately needing space to process and recover.

${afterMeeting}

${libraryAtmosphere}

Your companions understood when you retreated here. Ash looked concerned but respected your need for solitude. Vale offered to be available if needed but didn't push. Rook gave you space without taking it personally. They're learning to read you, to understand when you need company and when you need to be alone.

${bloodMarkResponse}

${hiddenMechanism}

${secretChamber}

${centerCircle}

${spiritManifestation}

${aldricGreeting}

Sir Aldric straightens from his bow, and pride shines clearly in his ancient eyes.

"You faced them alone," he says, voice carrying unmistakable approval. "The faction leaders, with all their power and political cunning, and you stood before them without shield or support. Brave. Deeply brave. Your father did the same at his first council meeting—refused advisors, insisted on standing alone, determined to prove he was more than his bloodline. The old courtiers thought him foolish. He proved them wrong."

The spirit's smile is warm with memory. "He was terrified, of course. Told me afterwards that he thought he might vomit from nerves. But he didn't let them see that fear. He stood tall, spoke clearly, made decisions without visible doubt. And they respected him for it. As the factions will respect you, now that you've shown them you don't need constant support to function."

Aldric's expression becomes more serious. "But remember: courage and isolation are not the same thing. Your father stood alone at that first meeting, yes—but afterwards, he built a circle of trusted advisors, people he could be vulnerable with, who could offer counsel without judgment. Strength is knowing when to stand alone and when to accept help. Don't let pride trap you into perpetual solitude."

${aldricStudy}

${oneQuestion}

That courage Aldric praised—you can carry it forward. You faced political power alone and survived. Now you face this spirit's offer: one question, one answer, one chance to gain knowledge that might make the next challenge easier to bear.`;
			}
		},
		{
			conditions: { hasFlags: ['vale_advising:true', 'vale_role_established:advisor'] },
			get text() {
				return `The political meeting went better than it might have, largely because of Vale. Their whispered intelligence, their quick assessments of faction leader body language and subtext, their ability to read the room and warn you of conversational traps—all of it proved invaluable. You made it through that meeting not just surviving but actually understanding what was happening, seeing through surface statements to underlying agendas.

Seraphine noticed Vale's role. You saw recognition in her eyes, awareness that your companion was more than they appeared. Whether she knows Vale's specific connection to the Reformist faction or simply recognizes competence and intelligence capabilities, she's now aware you have access to information networks beyond official channels. That could be advantageous or dangerous, depending on how she chooses to respond.

Afterwards, Vale looked satisfied but tired. "You did well," they said. "Listened to information without being controlled by it, made your own decisions while still considering counsel. That's... not easy. Most nobles either ignore advisors completely or become puppets to them. You're finding balance."

But now you need space to process everything you learned, to integrate Vale's intelligence with your own understanding, to prepare for whatever comes next. Vale understood. "I'll be available when you need me," they said. "Go find your center."

${afterMeeting}

${libraryAtmosphere}

${bloodMarkResponse}

${hiddenMechanism}

You pause before descending, instinct making you glance back. Vale is there, silhouetted in the secret doorway, having followed you quietly. They sense magic too, feel the pull of something significant happening.

"Do you want me to come with you?" they ask softly. Not demanding inclusion, but offering support if wanted.

You consider, then nod. Vale has proven their value as advisor and their loyalty as friend. Whatever waits below, facing it together seems right.

${secretChamber}

${centerCircle}

${spiritManifestation}

The spirit's glowing eyes flick immediately to Vale, assessment happening in a fraction of a second. Recognition crosses the translucent features—not of Vale specifically, but of what they represent.

${aldricGreeting}

Sir Aldric straightens from the bow and regards Vale with open curiosity. "A Reformist agent," he observes mildly. "Or at minimum, someone with connections to that faction. Interesting choice for advisor, young heir. Your grandparents would have been... conflicted. The Reformists were just beginning to organize when I died, barely more than philosophical discussion groups questioning traditional power structures. To see them grown into a major political faction, to see a Silverwood heir accepting counsel from someone aligned with their ideals..." He trails off, expression thoughtful.

Then he smiles. "But perhaps that's exactly what the kingdom needs. The old ways led to the Purge. Maybe new thinking can lead to something better."

He addresses Vale directly: "You may stay, advisor. I sense your loyalty to the heir is genuine, and genuine loyalty is always welcome in these chambers."

${aldricStudy}

${oneQuestion}

You glance at Vale, who's watching the spirit with fascinated attention. They catch your look and nod encouragingly—this is your question to ask, but they're here to support whatever choice you make.`;
			}
		},
		{
			conditions: {
				hasHiddenAttributes: { blood_magic_affinity: 10 }
			},
			get text() {
				return `The political meeting was draining, but what exhausts you most isn't the social maneuvering or political tension—it's the magic. Your blood mark has been active constantly since you arrived at Silverwood Manor: responding to the estate's enchantments, recognizing artifacts, pulsing with power you don't fully understand or control. During the meeting, you felt it reacting to the faction leaders, sensing things about them you couldn't consciously articulate. Seraphine carries old magic, inherited through noble bloodlines. Pembroke has almost none, which might explain his faction's emphasis on merit over birth. Blackwood has something else entirely—not blood magic, but combat enchantments, wards, protective spells woven into his very armor.

Your mark reads all of this automatically, feeding you information you don't know how to process. It's overwhelming, disorienting, like suddenly developing a new sense you don't know how to interpret.

You needed to escape, to find space where magic wasn't constantly bombarding you with input. So you retreated to the library, seeking calm.

${afterMeeting}

${libraryAtmosphere}

But the library itself pulses with magic—preservation enchantments, protective wards, knowledge-keeping spells woven through every shelf. Your blood mark responds immediately, not overwhelming this time, but curious. Interested. As if recognizing something kindred, something meant for you specifically.

${bloodMarkResponse}

The pulling sensation is different from previous blood mark reactions. Not warning or recognition, but... invitation. Something here wants you to find it, has been waiting for you, calling across decades of abandonment.

${hiddenMechanism}

The bookshelf responds to your touch instantly, as if it's been waiting for this exact moment, this exact person. The hidden door swings open smoothly, revealing descending stairs.

${secretChamber}

Your blood mark doesn't just tingle here—it burns, warmly, powerfully, joyfully. The magic in this chamber resonates with your own awakened power, harmonizing, amplifying, welcoming. You feel stronger here, more complete, as if part of yourself that was always missing has suddenly clicked into place.

The runes on the walls pulse in rhythm with your heartbeat. The chamber itself seems to breathe with you, ancient magic and newly awakened power recognizing each other as family.

${centerCircle}

${spiritManifestation}

The spirit that appears smiles immediately upon seeing you, recognition and satisfaction evident even in translucent features.

${aldricGreeting}

Sir Aldric straightens from the bow, and his glowing eyes examine your blood mark with evident interest.

"Your magic called to mine," he says with clear approval. "Good. Very good. Most newly returned heirs stumble upon this chamber by accident or through explicit instruction. You were drawn here by power recognizing power, by blood magic awakening to its heritage. That suggests you're already beginning to understand what you are, what you can become."

He gestures at your hand, where the blood mark glows brightly in response to the chamber's enchantments. "Blood magic is more than just power, young heir. It's connection. To your ancestors who wielded it before you, to the land that recognizes your right to rule, to the very essence of House Silverwood preserved through generations. You're feeling that now, aren't you? The sense of belonging, of completion, of finally understanding something you've always known but couldn't articulate."

Aldric's expression becomes more intense. "Cultivate that feeling. Let it guide you. Your blood magic will teach you things books and advisors cannot, will warn you of dangers before they fully manifest, will connect you to resources hidden even from conscious awareness. Trust it. But also master it. Power without discipline destroys what it means to protect."

${aldricStudy}

${oneQuestion}

Your blood mark pulses strongly as Aldric makes the offer. Whatever question you ask, whatever answer you receive, your awakened magic will help you understand it more deeply than words alone could convey. This is your chance to gain knowledge through both intellect and inherited power.`;
			}
		}
	],
	choices: [
		{
			id: 'crystal-heart',
			text: 'Ask about the Crystal Heart: "What happened when it shattered? Why did it matter so much?"',
			next: 'mysterious_follower',
			effects: { wisdom: 4 },
			hiddenEffects: {
				spirit_blessed: true,
				learned_crystal_heart_history: true,
				knows_betrayal: true,
				strategic_knowledge: 5
			}
		},
		{
			id: 'family',
			text: 'Ask about your family: "What really happened to them? Are there other survivors I should know about?"',
			next: 'mysterious_follower',
			effects: { wisdom: 3 },
			hiddenEffects: {
				spirit_blessed: true,
				learned_family_fate: true,
				emotional_closure: true,
				family_focused: true
			}
		},
		{
			id: 'blood-magic',
			text: 'Ask about blood magic: "How do I properly awaken and control this power without harming myself?"',
			next: 'mysterious_follower',
			effects: { wisdom: 3 },
			hiddenEffects: {
				spirit_blessed: true,
				blood_magic_training: true,
				blood_magic_affinity: 10,
				magical_path_priority: true
			}
		},
		{
			id: 'compassion',
			text: 'Ask about healing: "How can I help my people and heal the wounds the kingdom has suffered?"',
			next: 'mysterious_follower',
			effects: { wisdom: 2, charisma: 3 },
			hiddenEffects: {
				spirit_blessed: true,
				'spirit_guidance:compassion': true,
				healing_path: true,
				compassionate_actions: 5,
				rowan_bond: 5
			}
		}
	]
};

import { Scene } from '../../story-manager';

const summons = `The summons arrived with Rowan this morning, delivered by a courier bearing the seal of Agent Thorne and the Shadow Court. Formal, polite, but unmistakably non-optional: representatives from the three major political factions wish to meet the returned Silverwood heir. Today. At your manor. In two hours.

They didn't ask permission to visit your ancestral home—they informed you of their intention. A subtle power play, establishing that while you may be royalty, you're untested royalty. They want to see what you're made of before committing their support or opposition.`;

const preparation = `You had just enough time to change into something appropriate—clothing that walks the line between royal formality and practical readiness. Not quite court dress, but not adventuring gear either. You studied yourself in the mirror, blood mark visible on your hand, and wondered: who do they expect to see? The prophesied heir? A political pawn? A potential threat? An opportunity?

Rowan helped you understand the factions during the brief preparation time. Three major power groups emerged after House Silverwood's fall, each with different visions for the kingdom's future. Now that you've returned, each faction wants to assess you, to determine if you align with their goals or obstruct them.`;

const formalDiningRoom = `You chose to meet them in the formal dining room—a strategic decision. Not the throne room (too presumptuous for someone just discovering their heritage), not the library (too informal for faction leaders), but a space designed for negotiation and discussion. The room itself is magnificent: a table of dark wood that could seat twenty, carved with scenes of historical treaties and alliances. Windows overlook the eastern gardens, your grandmother's legacy visible as a reminder of what Silverwood once represented. Portraits of previous rulers watch from the walls—your ancestors, witnessing this moment.

The magic in the manor responds to your presence, subtle but noticeable. Candles light themselves as you enter. The air itself seems to hold its breath, waiting.`;

const factionArrival = `They arrive precisely on time—neither early (which would suggest eagerness) nor late (which would show disrespect). Three figures, each representing enormous political power, each carrying the weight of thousands who follow their leadership, each assessing you from the moment they cross the threshold.

You stand as they enter, formal courtesy mixed with awareness that this is your manor, your ancestral home. You may be new to politics, but you're not without claim to authority here.`;

const seraphineDescription = `Lady Seraphine Ashford represents the Loyalists—the faction that remained faithful to House Silverwood even during the Purge, who preserved your family's memory when others tried to erase it, who waited twenty years believing prophecy would bring you back. She is composed, elegant, every inch a noble from an era that valued grace and tradition. Silver hair is styled in elaborate braids woven with jewels that catch light like captured stars. Her gown is deep blue, the color of loyalty, with silver embroidery depicting the Silverwood tree—a public declaration of allegiance.

Her eyes are sharp despite her refined appearance, assessing you with the penetrating gaze of someone who's survived two decades of political turmoil by being extraordinarily competent. She's older than your parents would be if they'd lived, old enough to have known them personally, old enough to compare you to their memory.`;

const pembrokeDescription = `Lord Marcus Pembroke speaks for the Reformists—the faction that believes Silverwood's fall proved the old system was broken, that the kingdom needs fundamental change rather than restoration of past glory. He's older, in his sixties perhaps, with the dignified bearing of someone who's spent decades in political service. Gray beard neatly trimmed, simple but expensive robes of scholar's brown, eyes that watch you with calculating interest behind spectacles that somehow make him look more formidable rather than less.

He's not hostile to you personally—the Reformists don't oppose your heritage, they oppose the systems your ancestors built. He's here to determine if you'll be an ally in transformation or an obstacle to progress. His very presence is a statement: Silverwood may have returned, but the world has changed in twenty years, and you'll need to change with it.`;

const blackwoodDescription = `General Victor Blackwood commands the Military faction—the army and security forces that maintain order and defend the kingdom's borders. He is imposing in a way that transcends mere physical size, though he's tall and powerfully built. Scarred face speaks of battles survived through skill and ruthlessness. Armor is practical rather than ceremonial, plate steel marked with the general's insignia but designed for actual combat. He moves with the controlled power of someone who could kill you before you finished screaming, and the confidence of someone who knows it.

Behind him stands a younger man—late twenties, bearing enough resemblance to suggest family. Kieran Blackwood, if your briefing was accurate. The general's nephew, rising through military ranks on merit but inevitably benefiting from his uncle's position. Where the general radiates certainty, Kieran seems... conflicted. His eyes keep moving to you with something that looks almost like sympathy mixed with wariness.

The Military faction is the wild card. They don't care about tradition or reform ideologically—they care about stability and strength. They'll support whoever they believe can keep the kingdom secure. The general is here to determine if you're that person.`;

const politicalWeight = `Three factions. Three visions for the kingdom's future. Three leaders who've spent twenty years building power in Silverwood's absence. And now you stand before them—the heir they didn't expect, the return that disrupts carefully balanced political arrangements, the wild card that could unite them or tear everything apart.

The air in the room feels thick with expectation and assessment. You're being judged, measured, evaluated for worthiness. Every word you speak, every gesture you make, will be analyzed and reported back to their respective factions. This moment will shape how thousands of people view you.`;

const companionPresence = `Behind you—or beside you, depending on choices you've made—stand the people who journeyed with you to Silverwood. Rowan, your official guardian, brings legitimacy through Agent Thorne's appointment. But Vale, Ash, Rook, and possibly Whisper represent something else: chosen family, people you trusted before you knew you were royalty, adventurers who see you as a person rather than a political symbol.

Their presence in this formal setting is itself a statement. About who you choose to be, who you trust, what you value. The faction representatives notice immediately, and their reactions reveal much about their own values and expectations.`;

const seraphineOpening = `Seraphine speaks first, voice carrying the musical cadence of old nobility and the weight of genuine emotion:

"Your Highness," she says, and the title sounds reverent in her mouth, "we have waited twenty years for this moment. Twenty years of preserving your family's memory, of maintaining faith when others declared Silverwood extinct, of believing prophecy would bring you home." Her eyes shine with what might be tears, though she's too composed to let them fall. "You have your mother's bearing. Your father's eyes. It's... extraordinary to see you standing here."

Then her expression becomes more businesslike, though warmth remains. "The question now is: what kind of ruler will you become? Will you restore House Silverwood to its former glory? Will you reclaim your throne and rebuild what was stolen? Or..." she pauses delicately, "will you chart a different course?"

The question hangs in the air, loaded with implications. This is the test. This is where you define yourself.`;

const getPoliticalMeeting = (): string => {
	return `${summons}

${preparation}

${formalDiningRoom}

${factionArrival}

${seraphineDescription}

${pembrokeDescription}

${blackwoodDescription}

${politicalWeight}

${companionPresence}

${seraphineOpening}`;
};

export const FirstPoliticalMeeting: Scene = {
	id: 'first_political_meeting',
	get text() {
		return getPoliticalMeeting();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['rowan_bond:12', 'companions_integrated:true'] },
			get text() {
				return `When Rowan arrived this morning with the summons for a formal political meeting, your first instinct was to turn to your companions—the people who've been with you from the beginning. Vale, Ash, Rook, and possibly Whisper have earned their place at your side through loyalty and shared experience, not through political appointment or traditional protocol.

You made a deliberate choice: you would integrate Rowan into your existing circle rather than replacing your companions with a new guardian. When you introduced everyone, you made it clear that Rowan wasn't there to supersede or command, but to complement. Your official guardian, yes, but also another member of your found family, another perspective to consider, another ally to trust.

Rowan appreciated that approach. Their bond with you grew stronger knowing they weren't being asked to isolate you from people you care about, but to help protect and guide all of you together.

Now, as the faction representatives arrive, you've arranged your companions intentionally. They stand with you, not behind you—not as servants or subordinates, but as equals. Vale to your left, their information network and political insight ready. Ash to your right, their protective instincts and military experience grounding. Rook slightly behind but visible, their street wisdom and unconventional thinking valuable. And Rowan beside them, official guardian and newest member of your trusted circle, representing both Agent Thorne's support and the Wildwood's ancient alliance with Silverwood.

${summons}

${preparation}

You prepared together. Vale briefed you on each faction leader's history and known positions. Ash assessed security and potential threats. Rook pointed out the power dynamics of meeting location choices. Rowan explained the symbolic significance of how you position people during formal encounters.

It was collaborative. Strategic. And it sent a message: you lead through inclusion, not isolation.

${formalDiningRoom}

${factionArrival}

${seraphineDescription}

Seraphine's eyes scan your assembled companions, and you see the assessment happening in real-time. She notes Vale's bardic bearing, recognizes competence. She observes Ash's military stance, respects capability. She catches Rook's street-smart watchfulness, finds it... unconventional but not necessarily problematic. And she sees Rowan's official status, nods approval at Agent Thorne's choice.

${pembrokeDescription}

Pembroke looks delighted. His Reformist ideals celebrate breaking down traditional hierarchies, valuing people for competence rather than bloodline. Your choice to surround yourself with diverse advisors rather than exclusively noble-born courtiers aligns with his political philosophy. You can see him already composing arguments for why the Reformists should support you.

${blackwoodDescription}

General Blackwood's expression is harder to read. Military thinking values chain of command, clear authority structures, discipline. Your informal arrangement with companions standing as equals could read as weakness—inability to establish hierarchy—or strength—confidence secure enough not to need symbolic deference. He's deciding which interpretation to assign.

Behind him, Kieran watches your companions with what looks like envy. As if seeing something he wishes he had: genuine connection, chosen loyalty, relationships based on who people are rather than what positions they hold.

${politicalWeight}

${companionPresence}

The faction representatives notice immediately, and reactions vary. Seraphine looks slightly concerned—this isn't traditional protocol. Pembroke looks approving—this is exactly the kind of innovation he advocates. Blackwood looks assessing—determining if this represents strategic thinking or naive idealism.

You've made a statement before a single word was spoken: your loyalty to friends won't change with your title. The question is whether that statement will be viewed as admirable integrity or dangerous naivety.

${seraphineOpening}

Her eyes note the unconventional arrangement with interest. Not disapproval exactly, but... curiosity. Wondering if this informality represents the kind of leader you'll be, or if it's inexperience you'll outgrow once you understand proper royal protocol.`;
			}
		},
		{
			conditions: { hasFlags: ['rowan_respects_independence:true', 'independent_streak:true'] },
			get text() {
				return `When Rowan arrived this morning with the summons, you questioned their presence. Not out of hostility, but out of genuine curiosity: why did Agent Thorne think you needed protection? You've survived this long, handled danger before, proven yourself capable. What made them think you required a guardian?

Rowan didn't take offense. Instead, they respected your independence, acknowledged your capability, and explained their role differently: not as bodyguard for someone helpless, but as advisor and connection to factions that value their opinion. They offered to step back, to let you meet the faction leaders on your own terms, to be available if needed but not impose if not wanted.

You appreciated that respect. Your bond with Rowan grew not through traditional guardian-ward hierarchy, but through mutual recognition of competence and autonomy. They don't see you as someone needing constant protection—they see you as someone who might benefit from occasional support, offered rather than imposed.

Now, as the faction representatives arrive, you face them largely alone. Rowan stands at a respectful distance—present if you signal for assistance, but not hovering, not implying you need constant supervision. Your companions from the prologue journey are available nearby, but you chose to meet these political powers primarily on your own authority rather than surrounded by supporters.

${summons}

${preparation}

Rowan helped you understand the factions during preparation, but made clear the decisions would be yours. They offered information without pressure, perspective without expectation. "You'll make the right choices," they said. "You already have, or you wouldn't have made it this far."

${formalDiningRoom}

${factionArrival}

${seraphineDescription}

Seraphine sees you standing primarily alone and interprets it as strength. This is someone secure enough not to need a crowd of supporters, confident enough to face political power without hiding behind advisors. Her approval is subtle but visible—a slight nod, a softening around her eyes.

${pembrokeDescription}

Pembroke looks intrigued. Independence from traditional power structures, willingness to stand on your own merit rather than inherited privilege—these align with Reformist values. He's already reassessing his initial assumptions about you.

${blackwoodDescription}

General Blackwood's scarred face shows something approaching respect. Military commanders value self-sufficiency, the ability to make decisions without constant consultation, the confidence to stand alone when necessary. Your choice to meet them without a phalanx of supporters suggests either admirable independence or dangerous isolation. He's deciding which.

Kieran, behind his uncle, watches you with visible surprise. Most nobles surround themselves with courtiers and advisors, creating layers between themselves and potential threats. You've deliberately chosen exposure, vulnerability, directness. It's either very brave or very foolish.

${politicalWeight}

You stand primarily alone, and that posture itself is a statement. You're not afraid of them. You don't need others to validate your authority or shield you from assessment. You'll be judged on your own merits, face them on your own terms, establish yourself through who you are rather than who surrounds you.

The faction representatives see someone who won't be easily controlled or manipulated. Someone who questions authority rather than accepting it blindly. Someone who insisted on understanding the necessity of protection rather than passively accepting it.

Good. Let them see that. Let them know from the beginning that you're not a puppet looking for someone to pull your strings.

${seraphineOpening}

There's approval in her eyes for your self-assured stance, mixed with slight concern. Independence is admirable, but governance requires collaboration. She's wondering: is this confidence or inexperience? Strength or stubbornness?`;
			}
		},
		{
			conditions: { hasFlags: ['rowan_shares_past:true', 'cultural_curiosity:true'] },
			get text() {
				return `When Rowan arrived this morning with the summons, you took time to talk with them about what this meeting would mean. Not just tactical briefing about faction positions, but deeper conversation about identity, culture, the complexity of navigating between worlds.

You asked about their half-elf heritage, about existing between human and elven societies, about the challenge of honoring both sides of yourself when those sides sometimes conflict. Rowan opened up—shared stories of their childhood in the Wildwood, of being too human for some elves and too elven for some humans, of eventually finding strength in that duality rather than seeing it as division.

"You'll face similar challenges," Rowan said. "You're Silverwood royalty, yes, but you're also the person you became growing up without that knowledge. Both are real. Both matter. The question isn't which one to be—it's how to honor both."

That conversation deepened your bond. Rowan isn't just a guardian assigned by Agent Thorne—they're someone who understands the complexity of inherited identity, who can guide you through the challenge of becoming who you were meant to be without losing who you've already become.

Now, as the faction representatives arrive, Rowan stands beside you with easy rapport that's visible to everyone. Not just bodyguard and ward, but advisor and student, mentor and friend. Your earlier curiosity about their heritage created connection that transforms the formal relationship into something genuine.

${summons}

${preparation}

You prepared together, and Rowan shared insights about each faction that went beyond simple political briefing. They explained the Loyalists' perspective on tradition as living heritage rather than dead obligation. They contextualized the Reformists' frustration with systems that prioritize birth over capability. They described the Military faction's pragmatic focus on stability born from seeing what chaos does to ordinary people.

"Politics isn't just power games," Rowan said. "It's people trying to protect what they value, even when they disagree about what deserves protection. Understanding what each faction treasures helps you speak to their actual concerns rather than just their stated positions."

${formalDiningRoom}

${factionArrival}

${seraphineDescription}

Seraphine notes the easy rapport between you and your half-elf guardian with evident interest. She's observing how you interact—respect without servility, guidance without dominance, a relationship that suggests you value diverse perspectives and can build bridges across different cultures and backgrounds.

${pembrokeDescription}

Pembroke looks pleased. Your visible relationship with Rowan—cross-cultural, valuing someone for their competence and wisdom rather than their bloodline—aligns perfectly with Reformist ideals. You're demonstrating the kind of inclusive thinking they advocate.

${blackwoodDescription}

General Blackwood watches the dynamic between you and Rowan with tactical interest. He's assessing whether your curiosity about others represents political savvy (building alliances through genuine connection) or potential weakness (being too open, too trusting, too interested in others' perspectives to maintain clear authority).

Kieran seems drawn to the warmth evident between you and your guardian. The general commands through intimidation and strict hierarchy; watching you lead through connection and mutual respect offers an alternative he hadn't considered.

${politicalWeight}

The faction representatives note the easy rapport between you and your half-elf guardian. You're building bridges, not walls. You're demonstrating curiosity about others, valuing diverse perspectives, creating relationships based on genuine interest rather than just political calculation.

That approach could be your greatest strength or your most exploitable weakness. It depends on whether people respond to genuine connection or view it as naivety to manipulate.

${seraphineOpening}

She's watching not just you, but how Rowan responds to you, how that relationship functions, what it reveals about your character and leadership approach. So far, what she sees seems to intrigue more than concern her.`;
			}
		},
		{
			conditions: {
				hasHiddenAttributes: { vale_trust: 20 }
			},
			get text() {
				return `When the summons arrived this morning, you immediately turned to Vale. Not because you couldn't handle the meeting alone, but because Vale brings something invaluable: information. Their network of contacts, their years navigating noble courts and political intrigue, their ability to read people and situations with uncanny accuracy.

Vale spent the hour before the meeting briefing you thoroughly. Not just facts about each faction leader, but context. Seraphine's genuine devotion to your family's memory, but also her rigid adherence to tradition that might conflict with necessary changes. Pembroke's idealistic vision for reform, but also his political naivety that makes him vulnerable to manipulation by more ruthless Reformist members. Blackwood's pragmatic focus on stability, but also his nephew Kieran's growing discomfort with his uncle's increasingly authoritarian methods.

"Watch Kieran," Vale advised. "He's conflicted, questioning, potentially reachable. If you can connect with him, you might gain insight into Military faction thinking without going through the general directly."

You value this. Vale's perspective, their intelligence, their willingness to use their considerable skills in service of helping you navigate waters you don't yet fully understand. Your trust in them has deepened throughout this journey, and now they're proving why that trust was warranted.

Now, as the faction representatives arrive, Vale stands close enough to whisper quick intelligence without being overheard.

${summons}

${preparation}

${formalDiningRoom}

${factionArrival}

${seraphineDescription}

As Seraphine enters, Vale leans close, breath warm against your ear: "Seraphine is genuine but bound by tradition. She'll support you, but expect you to conform to what she believes Silverwood should be. Notice the jewels in her hair—those were gifts from your grandmother, worn now as public declaration of continuity. She wants you to be who your parents would have been."

${pembrokeDescription}

Vale whispers again: "Pembroke is idealistic but politically naive. He genuinely believes in reform, but he's surrounded by advisors who are more interested in power than progress. He'll see what he wants to see in you unless you're very clear about your actual positions. Don't let him project his ideals onto you without understanding what you actually think."

${blackwoodDescription}

"Blackwood is dangerous," Vale murmurs urgently. "Not evil, but ruthlessly pragmatic. He'll support whoever he believes can maintain order, and he has very specific ideas about what order requires. Notice how his nephew Kieran stands behind him, conflicted. The general is grooming him for command, but Kieran is starting to question his uncle's methods. That's a potential opening, but also a vulnerability—the general won't tolerate threats to his nephew."

The briefing gives you confidence as you face them. Vale's presence reminds you that you don't face this alone, that you have someone watching out for you, reading subtext and hidden agendas, providing perspective that helps you navigate complexity.

${politicalWeight}

${companionPresence}

The faction representatives notice Vale's proximity immediately, the way you lean together briefly, the obvious trust and communication. 

Seraphine's eyes flick to Vale, and recognition crosses her face—subtle, quickly masked, but unmistakable. She knows who Vale is, or at least knows that they're more than they appear. Does she recognize the Reformist connection? The information broker's reputation? Either way, she's now aware that you're being advised by someone with significant intelligence capabilities.

${seraphineOpening}

Her eyes flick to Vale briefly as she asks the question, gauging whether your answer will be your own or influenced by whispered counsel. She's testing whether you lead or are led, whether you think independently or rely too heavily on advisors.

But having good advisors isn't weakness—it's wisdom. The question is whether you'll demonstrate that you can listen to Vale's intelligence while still making your own decisions.`;
			}
		}
	],
	choices: [
		{
			id: 'bring-companions',
			text: 'Invite your companions to stand with you during negotiations—demonstrate inclusive leadership',
			next: 'ancestral_spirit',
			effects: { courage: 3, charisma: 2 },
			hiddenEffects: {
				'first_impression_factions:informal_loyal': true,
				companions_at_meeting: true,
				loyalist_rep: -5,
				reformist_rep: 10,
				military_rep: 5,
				vale_trust: 5,
				ash_trust: 5,
				rook_trust: 5
			}
		},
		{
			id: 'meet-alone',
			text: 'Face them alone without advisors—demonstrate independent strength and self-sufficiency',
			next: 'ancestral_spirit',
			effects: { courage: 4 },
			hiddenEffects: {
				'first_impression_factions:traditional_serious': true,
				met_factions_alone: true,
				loyalist_rep: 10,
				reformist_rep: -5,
				military_rep: 8,
				ash_trust: -3
			}
		},
		{
			id: 'rowan-only',
			text: 'Keep only Rowan present as your official guardian—balance formality with appropriate support',
			next: 'ancestral_spirit',
			effects: { wisdom: 3 },
			hiddenEffects: {
				'first_impression_factions:balanced_appropriate': true,
				rowan_at_meeting: true,
				loyalist_rep: 5,
				reformist_rep: 3,
				military_rep: 5,
				rowan_bond: 10
			}
		},
		{
			id: 'vale-advice',
			text: 'Quietly ask Vale to read the room and provide strategic counsel—leverage intelligence advantage',
			next: 'ancestral_spirit',
			effects: { wisdom: 4, charisma: 2 },
			hiddenEffects: {
				'first_impression_factions:strategic_advised': true,
				vale_advising: true,
				'vale_role_established:advisor': true,
				loyalist_rep: 3,
				reformist_rep: 8,
				military_rep: 2,
				vale_trust: 10,
				seraphine_noticed_vale: true
			}
		}
	]
};

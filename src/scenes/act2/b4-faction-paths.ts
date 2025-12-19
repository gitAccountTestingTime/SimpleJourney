import { Scene } from '../../story-manager';

// LOYALIST PATH
const loyalistMoment = `Your declaration—"I accept your support and commit to traditional restoration of House Silverwood"—reverberates through the chamber like a bell tolling. The words carry weight beyond their literal meaning: you've chosen continuity over transformation, tradition over innovation, royal authority over democratic experiment or military pragmatism. You've declared yourself not merely heir to a bloodline, but heir to a political philosophy, a way of governance that stretches back centuries.

For some, this is glorious vindication. For others, crushing disappointment. For all, it's a defining moment that will shape everything that follows.`;

const ashfordTriumph = `Lady Helena Ashford rises from her chair with elegant grace, tears of profound joy streaming down her cheeks—not the controlled emotion of political performance, but genuine overwhelming relief. Twenty years. Twenty years of maintaining networks, preserving resources, keeping faith that this moment would come. Twenty years of being dismissed as delusional traditionalists clinging to dead dreams. And now, vindication.

"At last," she says, voice trembling with emotion barely contained. "At last, the true heir returns to claim their birthright. House Silverwood rises from the ashes of the Purge. The crown will be restored. The old ways will be honored. Everything we've worked for, everything we've sacrificed, everything we've believed when others called us fools—it was not in vain."

She crosses the room toward you, and you realize she's not just happy—she's transformed. The careful political mask has fallen away, revealing someone who genuinely loves the monarchy as institution, who believes in royal governance as more than power structure but as sacred duty, who sees in you not merely a useful figurehead but the fulfillment of prophecy and promise.`;

const seraphineReaction = `Seraphine moves immediately, her usual composed sophistication giving way to something more raw. She approaches with swift steps, then drops to one knee before you in formal fealty gesture—not performative politics, but genuine submission to authority she recognizes as legitimate.

"Your Highness," she says, voice carrying absolute conviction. "The Loyalists pledge our complete support. We will restore the throne to its rightful glory, honor the ancient traditions that gave this kingdom stability for centuries, and rebuild what was lost in the Purge. Every resource we possess, every connection we've maintained, every agent we've positioned—all of it is yours to command."

Her eyes meet yours, and you see profound relief mixed with something more personal. She's not just serving a political cause—she's serving you, specifically you, the person she's come to know and respect and possibly care for beyond mere duty. Her pledge is both professional and intimate, both formal vow and personal promise.`;

const loyalistCelebration = `Other Loyalists in the room—advisors, guards, staff who serve this cause—react with visible joy. Some embrace, others weep openly, many simply stand in stunned gratitude that their faith has been rewarded. The atmosphere transforms from tense negotiation to something approaching religious fervor: the true monarch has returned, the rightful order will be restored, everything can be made right again.

Lady Ashford begins speaking of immediate plans: "The coronation must be prepared with appropriate ceremony. We'll need to commission new regalia since the originals were destroyed in the Purge. The coronation cathedral must be secured and blessed. Representatives from all loyal noble houses must be summoned to witness and pledge fealty. This will be done properly, traditionally, with all the dignity House Silverwood deserves."`;

const otherFactionsReact = `But not everyone shares the Loyalists' joy. The contrast is stark and painful:

Council Member Dane rises from his chair, expression hardening from hopeful appeal to cold assessment. "So," he says quietly, voice carrying disappointment that cuts deeper than anger could. "You choose to repeat the old patterns. To concentrate power in blood rather than distributing it among people. To restore the very system whose failure led to the Purge."

He meets your eyes with something approaching pity. "I hoped you'd be different. That your generation would learn from your ancestors' mistakes. But blood calls to blood, I suppose. Tradition seduces with promises of stability and inherited certainty." He turns to leave, then pauses. "The Reformists will not oppose you openly—we're not rebels or traitors. But we will not support this restoration. You've chosen your allies today. Remember that when the old systems fail again, as they inevitably will."

Captain Kieran Cross maintains military discipline, standing at attention, expression carefully neutral. But you catch something in his eyes—evaluation, measuring, assessing what your choice means for General Blackwood's calculations. The Military faction wanted order through strength, pragmatic authority uncomplicated by tradition. Your embrace of royal ceremony and ancient customs complicates their vision. Kieran salutes formally and departs without commentary, but the gesture carries implications you'll need to decode later.`;

const companionReactions = `Your companions' reactions are more complex and more painful:

Vale—if they're present—looks conflicted, torn between personal loyalty to you and political conviction that democracy serves the kingdom better than monarchy. They don't speak, don't celebrate, don't condemn. They simply watch with expression suggesting they're processing betrayal that isn't quite betrayal, disappointment that isn't quite rejection. Their Reformist sympathies war with their genuine affection for you, and neither side is winning.

Rowan stands apart from the Loyalist celebration, expression uncertain and troubled. They're not angry, not exactly, but deeply uncomfortable. As someone who's spent years navigating the margins of human society, who's witnessed how "tradition" often means marginalization for those who don't fit noble categories, your embrace of traditional restoration raises questions they can't voice in this public moment. But you see it in their posture: worry that you'll become someone different now, someone who values crown over character.

Lyra—if she attended this meeting—observes with ancient eyes that have witnessed countless human political movements rise and fall. She says nothing, but her expression suggests she's seen this pattern before: young idealistic heir chooses traditional power structure, promises to reform it from within, gradually becomes exactly what their ancestors were. She's not hostile, but she's waiting to see if you'll prove the pattern wrong or merely confirm it yet again.`;

const ashfordNextSteps = `Lady Ashford continues, energy and purpose radiating from her: "But first, before coronation ceremonies and formal restoration, we must secure the Crystal Heart fragments. With traditional royal authority reestablished, we can approach the magical races from position of legitimacy they'll respect. Dragons recognize ancient bloodlines. Dwarves value historical continuity. Even elves, suspicious as they are of human politics, acknowledge that monarchy provides stability democracy cannot match."

She turns to you with intensity that suggests this is more than political calculation—this is personal mission. "Your grandfather's reign maintained peace with the magical races through clear authority and honored treaties. We will restore that model. Come, Your Highness. There is much work ahead, and the kingdom cannot wait while we celebrate. Every day the Crystal Heart remains fragmented, the dimensional barrier weakens further. Let us begin."`;  

const getLoyalistPath = (): string => {
	return `${loyalistMoment}\n\n${ashfordTriumph}\n\n${seraphineReaction}\n\n${loyalistCelebration}\n\n${otherFactionsReact}\n\n${companionReactions}\n\n${ashfordNextSteps}`;
};

export const LoyalistPathStart: Scene = {
	id: 'loyalist_path_start',
	get text() {
		return getLoyalistPath();
	},
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { seraphine_trust: 20 } },
			get text() {
				return `Your choice to embrace the Loyalists carries particular weight because of the relationship you've built with Seraphine. This isn't just political alignment—it's validation of someone who has invested personally in you, who has hoped desperately that you would choose this path, who has allowed herself to believe that restoration through traditional authority represents the kingdom's best future.

${loyalistMoment}

${ashfordTriumph}

Seraphine's reaction transcends professional relief. She rises from her chair, and for a moment she stands frozen, processing the magnitude of what you've just declared. Then she crosses to you swiftly, and when she kneels in formal fealty, there are tears streaming down her face—tears she doesn't bother to hide or control.

"Your Highness," she says, voice breaking with emotion. "Thank you. For trusting me, for trusting us, for seeing what we see. I know the other factions made compelling arguments. I know democracy sounds appealing, military strength seems pragmatic. But you chose the path that honors what came before while building toward what can be. You chose—"

She stops, composing herself with visible effort. When she continues, her voice is steadier but no less intense: "I will serve you faithfully. Not just as advisor bound by political alliance, but as... whatever you need me to be. Counselor. Protector. Friend. Companion." The last word carries implications that hang in the air between you, unspoken possibilities that this moment crystallizes.

She takes your hand—not merely ceremonial gesture, but personal connection. "The Loyalists pledge everything to your restoration. And I... I pledge everything to you. Personally. Whatever comes next, whatever challenges we face, whatever sacrifices are required—I'm with you. Always."

The intensity of her commitment, the personal dimension of her loyalty, transforms what could have been mere political alliance into something far more profound.

${loyalistCelebration}

${otherFactionsReact}

${companionReactions}

But Rowan's uncertainty cuts particularly deep because you can see them comparing Seraphine's joy with their own discomfort. They're watching someone they care about form profound connection with political movement that makes them deeply uneasy. It's not jealousy exactly, but concern—worry that Seraphine's influence will pull you toward traditional power structures that historically marginalize people like Rowan.

${ashfordNextSteps}`;  
			}
		},
		{
			conditions: { hasFlags: ['assert:true', 'prideful_mistake:true'] },
			get text() {
				return `Your prideful assertion with Lyra Starsong—claiming authority based on bloodline rather than earning respect through character—now echoes through this choice. You've chosen the Loyalists, the faction that most strongly emphasizes inherited right, traditional authority, power flowing from ancient bloodlines rather than democratic consent or proven capability. The pattern reinforces itself: pride meeting tradition, bloodline claiming bloodline.

${loyalistMoment}

${ashfordTriumph}

Lady Ashford's joy carries particular edge now. "Your Highness demonstrates proper understanding of authority," she says approvingly. "You recognized in Moonwhisper Grove that royal blood carries inherent right to rule, that tradition and heredity matter more than momentary political movements. That same wisdom guides you now."

Her words validate your pride, reinforce the very attitude that troubled Lyra. And you can see how this path will continue to reward that mindset—surrounding you with advisors who celebrate aristocratic privilege, who believe firmly that some people are born to rule while others are born to serve.

${seraphineReaction}

${loyalistCelebration}

${otherFactionsReact}

Dane's disappointment carries sharper edge: "So the heir who asserted authority over ancient elves through bloodline entitlement now chooses the faction that makes bloodline entitlement its central principle. How... consistent. And how predictable."

${companionReactions}

Lyra stands completely apart from the Loyalist celebration, expression cold with disappointment that has hardened into something approaching contempt. Before departing, she speaks clearly enough for everyone to hear: "The magical races will not negotiate simply because humans declare 'traditional authority' reestablished. You have much to learn about diplomacy, young Silverwood. But I suspect the Loyalists will teach you pride rather than wisdom, will surround you with those who reinforce your worst instincts rather than challenge them."

She pauses at the door, ancient eyes holding yours with judgment that spans centuries. "Your grandfather ruled with traditional authority. He marginalized my people, exploited dwarven labor, treated dragons as threats to be contained rather than allies to be respected. And you've just chosen to restore his model. I hope you prove different from him. But your pride suggests otherwise."

Her departure leaves cold void in the room. Rowan follows her out—not abandoning you, but clearly needing distance from this choice and its implications.

${ashfordNextSteps}

But Lady Ashford's optimism about magical race negotiations rings hollow now. Your prideful mistake with Lyra has cost you the very diplomatic bridges she claimed would be strengthened by traditional restoration. The contradiction hangs unspoken but obvious to everyone: you've chosen a path that theoretically should help with magical race relations, but you've already damaged those relations through the very pride this faction celebrates.`;  
			}
		},
		{
			conditions: { hasHiddenAttributes: { rowan_bond: 20 } },
			get text() {
				return `Your choice to embrace the Loyalists feels particularly complex because of the deep bond you've built with Rowan. They've guided you, protected you, believed in you. They've invested themselves in your success not because of your bloodline but because of your character. And now you're choosing the faction that most strongly emphasizes bloodline over character, inherited authority over earned respect, traditional power structures that have historically marginalized people exactly like Rowan.

${loyalistMoment}

${ashfordTriumph}

${seraphineReaction}

${loyalistCelebration}

${otherFactionsReact}

But it's Rowan's reaction that dominates your attention despite the Loyalist celebration surrounding you. They stand apart from the joy, expression shifting from surprise to disappointment to something more complex—hurt mixed with determination, betrayal tempered by loyalty, personal pain struggling against commitment to support you regardless.

They step close, speaking quietly beneath the Loyalists' excited planning: "I respect your choice. I do. You have right to choose your own path, to make decisions you believe serve the kingdom best. But I need you to understand something."

Their voice carries weight of lived experience: "Tradition... it hasn't always been kind to people like me. Like us. Rangers who walk between human and elven worlds, who don't fit neatly into noble categories, who serve faithfully but are never quite accepted as equals. Your grandfather's 'traditional authority' that Lady Ashford celebrates? It meant I could protect the kingdom but never receive the honors or positions given to nobles of lesser skill but proper bloodlines."

They squeeze your hand, intensity in their eyes. "I'm with you regardless. I pledged to guide you, and I keep my pledges. But please, I'm begging you—don't forget who you were before the crown. Don't let the Loyalists' focus on bloodline and tradition make you forget that people's worth isn't determined by their birth. Don't become someone who values the crown more than the person wearing it."

Their loyalty despite their deep discomfort means everything. They're staying not because they approve of this choice, but because they believe in you enough to hope you'll prove different from previous monarchs, that you'll reform tradition from within rather than merely perpetuating it.

${ashfordNextSteps}

But Lady Ashford's words about "honoring ancient traditions" carry different resonance now, filtered through Rowan's warning. Which traditions? The ones that created stability, or the ones that created marginalization? Can you maintain the former without perpetuating the latter? Rowan's watching to see if you'll even try, or if the Loyalist celebration will sweep you into simply restoring everything exactly as it was—including the injustices.`;  
			}
		}
	],
	choices: [
		{
			id: 'continue',
			text: 'Begin the path to restoration',
			next: 'crystal_hunt_start',
			effects: { courage: 2 },
			hiddenEffects: {
				loyalist_path_confirmed: true,
				seraphine_becomes_advisor: true
			}
		}
	]
};

// REFORMIST PATH
const reformistMoment = `Your declaration—"I choose constitutional monarchy—shared power and democratic transformation"—sends shockwaves through the chamber. You've rejected centuries of Silverwood tradition, refused the very authority your bloodline was supposed to embody, chosen transformation over restoration. For some, this is progressive vision finally finding voice in someone with power to implement it. For others, it's devastating betrayal of everything they've worked to preserve.

The room fractures instantly along ideological lines, celebration and despair existing simultaneously in the same space.`;

const daneTriumph = `Council Member Dane's face transforms with joy that borders on disbelief. He rises from his chair, professional composure giving way to genuine emotion. "A wise choice, Your Highness," he says, voice thick with feeling. "The wisest choice a monarch has made in centuries. Together, we will build something new—a kingdom where power flows from the people's consent rather than from accident of birth, where governance serves citizens rather than demanding their service."

He approaches, not with supplicant's caution but with partner's confidence. "You understand what previous generations couldn't grasp: that the old system's failure wasn't personal failing but structural weakness. Concentrated power in single bloodline creates single point of failure. One assassination, one magical catastrophe, and everything collapses. But distribute that power, create system with multiple centers of authority, and the kingdom becomes resilient."

His eyes shine with idealistic fervor tempered by political realism. "The path of reform will be difficult. Tradition dies hard. Nobles who benefit from inherited privilege will resist. But with your bloodline lending legitimacy to democratic change—royal heir choosing to limit royal power—we can create lasting transformation that survives long after we're gone."`;  

const valeReaction = `Vale—if they're present—grins openly, relief and vindication washing across their features. If they confessed their Reformist allegiance earlier, this moment carries particular weight: you chose their faction despite knowing about the manipulation, validating their beliefs even after learning about deception. If they haven't confessed yet, guilt and joy war visibly in their expression—they're getting what they wanted, but through means they're increasingly uncomfortable with.

They step forward, voice quiet but intense: "This is the right choice. Not because I'm Reformist—though I am—but because the kingdom needs this. Needs transformation. Needs to prove that humans can govern themselves without requiring magical bloodlines to hold them together."

Their conviction carries personal dimension: "You're not just choosing political faction. You're choosing to be different kind of leader. One who serves rather than rules, who enables rather than controls. That takes more courage than claiming throne ever would."`;  

const loyalistDevastati = `But the Loyalists' reaction cuts like knives:

Lady Ashford rises stiffly, face gone pale with shock that hardens into cold fury. "You refuse your birthright," she says, voice tight with barely controlled emotion. "Twenty years we've waited. Twenty years we've worked, sacrificed, maintained faith that the true heir would return and restore what was lost. And you... you choose to throw it away. To surrender royal authority to democratic mobs who don't understand the complexities of magical governance or the weight of leadership."

Her disappointment transcends mere political disagreement into something approaching personal betrayal. "I hope you know what you're doing, Your Highness—if that title even means anything anymore once you've handed your power to councils and committees. I hope the Reformists' pretty theories work as well in practice as they sound in debate. I hope you don't discover too late that some problems require decisive authority rather than consensus-building."

She turns to leave, movements sharp with anger, then pauses: "The Loyalists will not oppose you openly. We're not traitors. But we will not support this... this abdication disguised as progress. You've made your choice. Live with it." Her departure feels like door slamming on possibilities that will never return.

Seraphine's reaction is worse because it's more personal. If you built relationship with her, her hurt goes far beyond political disappointment into genuine emotional pain. She approaches before leaving, voice low and unsteady: "I thought... I hoped you would trust the old ways. Trust me. Trust what we built together."

Her eyes search yours, looking for explanation that might make this bearable. "Was it all meaningless? The time we spent, the conversations we had, the connection I thought was forming? Or did I simply misread everything, projecting my hopes onto someone who never actually shared them?"

Seeing her pain makes you question if any choice is truly right, if selecting one path must always mean devastating those who hoped for different direction.`;

const reformistNext = `Dane returns to practical matters, though his joy remains palpable: "The path forward requires careful navigation. First, we must show the people—and the magical races—that this new system actually works. We'll establish the first democratic council, draft a constitution that defines powers and limits, demonstrate that distributed authority creates stability rather than chaos."

He meets your eyes with combination of excitement and calculation: "And we must secure the Crystal Heart fragments. The Reformists propose distributing them among multiple guardians rather than concentrating their power in royal hands alone. Elves, dwarves, dragons, humans—each holding fragment, each sharing responsibility for the barrier's maintenance. It's unprecedented. But so is everything we're attempting."`;

const getReformistPath = (): string => {
	return `${reformistMoment}\n\n${daneTriumph}\n\n${valeReaction}\n\n${loyalistDevastation}\n\n${reformistNext}`;
};

export const ReformistPathStart: Scene = {
	id: 'reformist_path_start',
	get text() {
		return getReformistPath();
	},
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { vale_trust: 25 } },
			get text() {
				return `Vale's earlier confession about being a Reformist spy now transforms this moment into something profound. They step forward immediately, relief and joy and gratitude all flooding across their face in waves.

${reformistMoment}

"Thank you," Vale says quietly, voice rough with emotion. "For choosing what's right, not what was easy. For choosing transformation over comfort. And for... for still trusting me after I told you the truth about my allegiance."

They meet your eyes with vulnerability they rarely show: "I was planted to manipulate you. To influence your decision toward Reformist agenda through deception and strategic relationship-building. And I did manipulate you, at least initially. But somewhere along the way, it became real. The friendship, the respect, the... the feelings."

Their hand finds yours, grip tight. "You could have chosen Loyalists to punish me for the deception, or Military to prove you wouldn't be swayed by Reformist agent. That you chose us anyway, that you evaluated arguments on merit despite knowing about manipulation... that's exactly the kind of leader the Reformists believe in. One who makes decisions based on principles rather than personal resentment or political maneuvering."

${daneTriumph}

Dane clearly knows about Vale's assignment and is delighted it succeeded, though he has the political sense not to reference it explicitly in this public moment.

${valeReaction}

${loyalistDevastation}

Seraphine's hurt cuts particularly deep if you built relationship with her. She glances between you and Vale, and you can see her processing: wondering if Vale's presence influenced your choice, if what she thought was connection with you was actually always secondary to bond you formed with the Reformist agent, if she ever had chance once Vale entered the picture.

${reformistNext}`;  
			}
		},
		{
			conditions: { hasHiddenAttributes: { seraphine_trust: 20 } },
			get text() {
				return `Choosing the Reformists despite the deep trust and possible romantic connection you've built with Seraphine creates devastating emotional complexity. This isn't just political disagreement—it's personal rejection of someone who invested themselves in you, who hoped desperately you would choose her path, who allowed herself to believe connection meant alignment.

${reformistMoment}

${daneTriumph}

${valeReaction}

But it's Seraphine's reaction that dominates your awareness despite the Reformist celebration. She sits frozen in her chair for a long moment, processing the magnitude of what you've declared. Then she rises with careful control, elegant even in devastation, and approaches.

"I thought..." she begins, then stops, composing herself visibly. When she continues, her voice is steady but you can hear the pain beneath professional courtesy: "I hoped you would trust the old ways. Trust me. Trust what I thought we were building together."

Her eyes search yours, looking for explanation, for anything that might make this bearable: "Was I wrong about everything? About you, about us, about the connection I felt forming? Or did I simply see what I wanted to see, projecting my Loyalist hopes onto someone who never actually shared them?"

The hurt in her voice is raw and genuine. "The Reformists will offer you theories and ideals. They'll talk about distributed power and democratic transformation. But when those theories fail—and they will fail, because humans are humans and democracy is chaos—who will protect you? Who will stand beside you when the weight of leadership becomes unbearable?"

She reaches out, then stops herself, hand falling back to her side. "I would have. I wanted to. But you've chosen a different path, different allies, different... everything." She turns to leave, then pauses: "I hope your new democracy can protect you as well as the Loyalists would have. As well as I would have. But I doubt it."

Watching her walk away, seeing her pain, makes you question everything. Did you make the right choice? Or did you sacrifice something genuine and valuable for political ideology? The Reformists are celebrating, but all you can feel is Seraphine's hurt echoing through the chamber.

${loyalistDevastation}

${reformistNext}`;  
			}
		}
	],
	choices: [
		{
			id: 'continue',
			text: 'Begin building the new democracy together',
			next: 'meeting_sage',
			effects: { wisdom: 2 },
			hiddenEffects: {
				reformist_path_confirmed: true,
				sage_becomes_close_advisor: true
			}
		}
	]
};

// MILITARY PATH
const militaryMoment = `Your declaration—"I accept General Blackwood's support—security and order must come first"—creates immediate tension. You've chosen pragmatism over idealism, strength over philosophy, decisive action over careful deliberation. You've placed your trust in military authority, accepting that existential crisis requires solutions uncomplicated by democratic debate or traditional ceremony. For some, this is realistic assessment of dire circumstances. For others, it's dangerous first step toward authoritarian rule.

The room's atmosphere shifts instantly from political negotiation to military briefing, from discussion to command structure.`;

const blackwoodSatisfaction = `General Kieran Blackwood's smile sends chills down your spine—not because it's malicious exactly, but because it's satisfied in ways that suggest he expected this, planned for this, maneuvered toward this outcome. He rises with military efficiency, no wasted movement, complete confidence.

"Pragmatic," he says approvingly, voice carrying authority that brooks no challenge. "Good. Excellent. The kingdom needs strength, not sentiment. Needs action, not endless debate about constitutional theory or restoration ceremony. Shadow Beasts don't pause their incursions while humans argue about governance models."

He approaches, and you realize he's not treating you as superior authority despite the 'Your Highness' courtesy. He's treating you as useful ally, valuable asset, symbolic legitimacy that makes his military rule more palatable to populations who still value royal bloodlines. Partnership, but partnership where he clearly sees himself as dominant partner.

"We'll start by consolidating military control over key regions," he continues, already planning, already commanding. "Border territories first—stop the bleeding, prevent further Shadow Beast incursions, establish security that lets civilians return to some semblance of normal life. Then we move inward, bringing order to territories fractured by faction conflicts."`;

const kieranReaction = `Captain Kieran Cross stands at attention throughout, military discipline preventing visible reaction. But you catch flashes of emotion in his eyes—disappointment, concern, conflict between duty to his uncle and personal judgment about what this choice means. He hoped you would choose differently, you realize. Hoped you would find path that didn't require embracing Blackwood's authoritarian vision.

When Blackwood finishes his initial outline, Kieran speaks carefully: "General, if I may... The heir's choice of our faction shows wisdom about security priorities. But we should also consider how military authority can be tempered with mercy, how strength can be balanced with compassion for those affected by our consolidation."

Blackwood's expression hardens fractionally. "Mercy has its place, Captain. After order is established, not before. Compassion that prevents decisive action isn't compassion—it's weakness that prolongs suffering."

The exchange reveals fault lines within the Military faction itself: Blackwood's ruthless pragmatism versus Kieran's more nuanced approach. Your choice has allied you with both, but they want different things from you and from this partnership.`;

const otherFactionsHorror = `The other factions react with varying degrees of horror:

Council Member Dane looks appalled, standing abruptly. "You're making a mistake," he says quietly, voice tight with barely suppressed fury. "Military authority promised as 'temporary' never remains temporary. Blackwood will consolidate power in the name of crisis, and that crisis will conveniently never quite end enough to justify surrendering control. You're not choosing security—you're choosing the first step toward dictatorship."

He gathers his documents, movements sharp with anger. "The Reformists will not cooperate with this. We'll protect our people as best we can, maintain democratic structures in territories we control, and wait for the day when the kingdom realizes what it's lost." His departure feels like door slamming on any possibility of cooperation.

Lady Ashford's reaction combines aristocratic disdain with grudging tactical approval. "Military strength," she observes coldly. "Not the choice I would have made, but perhaps better than democratic chaos. At least Blackwood understands hierarchy and authority, even if he's merely soldier playing at leadership rather than noble born to it." Her backhanded compliment suggests Loyalists might work with Military faction if only to prevent Reformist influence, despite ideological conflicts.`;

const companionDistress = `Your companions react with visible distress:

Vale's expression is carefully neutral, but you sense profound disapproval. If they're Reformist agent, this choice represents everything they oppose. If they care about you personally, they're watching you embrace path that could corrupt who you are through proximity to Blackwood's ruthless methods.

Rowan is worse. "No," they say flatly, voice carrying edge you've never heard before. "I didn't guide you here, didn't protect you through Shadow Beast attacks and political maneuvering, didn't believe in you... just so you could become a warlord's figurehead."

They step forward, confronting you despite military tension filling the room: "Blackwood will use you. Your bloodline, your legitimacy, your blood magic—he'll use all of it to justify military authority that marginalizes everyone who doesn't fit his vision of 'order.' And you'll let him, because you've convinced yourself that security requires sacrificing principles."

Then, quieter, more personal: "I'm staying. But not for him. For you. To remind you who you are when his tactics start to feel normal, when violence becomes expedient, when 'temporary' authority becomes permanent. Because I still believe there's someone worth believing in beneath this choice. Don't make me regret that faith."`;  

const blackwoodNext = `Blackwood continues as if the objections never occurred, used to opposition and unconcerned by it: "The Crystal Heart fragments can wait. First priority is establishing control and stopping the immediate hemorrhaging. Once we have secure base of operations, disciplined forces, and compliant territories, then we can address the magical crisis from position of strength."

He meets your eyes with intensity that demands agreement: "You've made the right choice, Your Highness. Now we execute it. Together, we'll save this kingdom from itself." The words sound heroic, but there's implication beneath them that 'together' means you following his lead, not genuine partnership of equals.`;

const getMilitaryPath = (): string => {
	return `${militaryMoment}\n\n${blackwoodSatisfaction}\n\n${kieranReaction}\n\n${otherFactionsHorror}\n\n${companionDistress}\n\n${blackwoodNext}`;
};

export const MilitaryPathStart: Scene = {
	id: 'military_path_start',
	get text() {
		return getMilitaryPath();
	},
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { kieran_loyalty: 20 } },
			get text() {
				return `Your choice of the Military faction carries profound complexity because of the connection you've built with Captain Kieran Cross. He's not his uncle, you've learned—where Blackwood is ruthless and authoritarian, Kieran possesses nuance, mercy, understanding that strength must be tempered with compassion. Your relationship with him has shown you that military discipline doesn't necessarily mean military dictatorship. But now you're allying with his uncle, embracing the very authoritarian vision Kieran seems uncomfortable with.

${militaryMoment}

${blackwoodSatisfaction}

Kieran's disappointment is palpable and personal. He stands at rigid attention, military discipline preventing open objection, but his eyes communicate everything his posture cannot: hurt, conflict, desperate hope that you'll prove different from what this choice suggests.

When Blackwood finishes his initial planning, Kieran breaks protocol slightly, speaking directly to you rather than through his commanding officer: "If this is your choice, I will serve faithfully. Both you and my uncle. But I hope..."

He pauses, choosing words carefully while Blackwood watches with sharp attention. "I hope you'll let me temper my uncle's methods with mercy where possible. The kingdom needs strength, yes. But it also needs compassion. Needs leadership that remembers soldiers and civilians are people, not merely pieces on strategic map."

His request is both professional and intensely personal. He's asking permission to be voice of moderation within military structure, to protect you from Blackwood's worst instincts, to help you remain person he's come to care about rather than becoming figurehead for authoritarian rule.

${otherFactionsHorror}

${companionDistress}

But Kieran stays close despite his obvious discomfort, positioning himself as buffer between you and Blackwood, subtle protector trying to navigate impossible situation where duty, personal conviction, and growing feelings all pull in different directions.

${blackwoodNext}

When Blackwood speaks of executing the plan 'together,' Kieran's jaw tightens fractionally. He knows what that means—his uncle assuming command, treating you as useful symbol rather than genuine partner. And Kieran's positioning himself to mitigate that dynamic as much as military hierarchy allows, using whatever influence he possesses to ensure you maintain agency and aren't simply absorbed into Blackwood's authoritarian vision.`;  
			}
		},
		{
			conditions: { hasHiddenAttributes: { rowan_bond: 20 } },
			get text() {
				return `Your choice of the Military faction devastates Rowan in ways that cut deeper than political disagreement. They've guided you, protected you, invested themselves in your success—not because of your bloodline or for political advantage, but because they saw character worth nurturing, potential worth developing. And now you're choosing the faction most likely to marginalize people like them, to embrace military authority that historically treats rangers and magical races as tools or threats rather than equals.

${militaryMoment}

${blackwoodSatisfaction}

${kieranReaction}

${otherFactionsHorror}

Rowan's reaction eclipses everything else despite the military and political maneuvering happening around you. They stand frozen for a moment, processing the magnitude of your choice, then something breaks in their expression—not quite betrayal, but profound disappointment mixed with stubborn determination.

"No," they say, voice flat and hard with emotion barely controlled. "I didn't do all this—didn't guide you through forests, fight Shadow Beasts beside you, introduce you to Lyra, believe in your potential to be different from your ancestors—just so you could become General Blackwood's figurehead."

They step forward, confronting you directly despite military tension filling the room: "Do you understand what you've just done? Blackwood's 'order through strength' means marginalizing anyone who doesn't fit military hierarchy. Rangers like me. Magical races who refuse to submit to human authority. Anyone who values independence over obedience. You've allied yourself with someone who will use your legitimacy to justify control over all of us."

Their voice drops, becoming more personal: "I'm staying. Not for Blackwood, never for him. For you. Because I still believe there's someone worth believing in beneath this terrible choice. I'll stand beside you, remind you who you were before military tactics started seeming normal, before Blackwood's ruthless pragmatism starts looking like wisdom. But don't mistake my loyalty for approval. I'm here to save you from yourself as much as to support you."

Their fierce declaration of continued allegiance despite profound disagreement means everything. But it also highlights the cost: you've chosen path that forces your closest ally into opposition against the very faction you embraced.

${companionDistress}

${blackwoodNext}`;  
			}
		}
	],
	choices: [
		{
			id: 'continue',
			text: 'Accept the military alliance and begin consolidation',
			next: 'crystal_hunt_start',
			effects: { courage: 2 },
			hiddenEffects: {
				military_path_confirmed: true,
				kieran_conflicted: true
			}
		}
	]
};

// INDEPENDENT PATH
const independentMoment = `Your declaration—"I forge my own path—building coalition directly with magical races and independent forces"—creates shocked silence in the chamber. You've rejected all three major factions simultaneously, refused every offer of support and alliance, chosen to walk away from established power structures entirely. This is either breathtakingly courageous or catastrophically foolish, visionary leadership or naive idealism that will collapse under reality's weight.

The room's atmosphere shifts from political negotiation to something closer to chaos, all three factions processing rejection they never seriously considered possible.`;

const factionShock = `All three faction leaders stare at you in stunned silence, each processing this unexpected development through their particular ideological lens:

Lady Ashford recovers first, aristocratic composure reasserting itself despite obvious shock. "You refuse us all?" she asks, voice tight with emotions carefully controlled. "We offer you legitimacy, resources, political infrastructure. And you... you choose to stand alone? To reject centuries of tradition, democratic progress, and military protection simultaneously?"

Council Member Dane looks conflicted—part of him seems almost to approve of your independent thinking even while his Reformist allegiance objects to the rejection. "Interesting choice," he observes carefully. "Unprecedented, certainly. Whether it's wise or suicidal remains to be seen."

General Blackwood's expression hardens into cold assessment. "You've just made yourself very alone, Your Highness. And very vulnerable. The factions won't simply disappear because you refuse to choose among us. We'll continue pursuing our visions for the kingdom. The question is whether you'll have any influence over that process without factional backing."`;  

const independentDeclaration = `You stand firm despite the pressure, despite the shock, despite your own uncertainty about whether this choice is brilliant or disastrous: "I appreciate your offers, truly. Each faction brings genuine strengths, legitimate perspectives, real resources. But I will not be bound to any single faction's agenda. I will not let this kingdom's future be determined by human political divisions that exclude half the realm's inhabitants."

Your voice strengthens with conviction: "The kingdom needs unity, not factional victory. It needs governance that includes all peoples—humans yes, but also elves, dwarves, dragons, all the magical beings whose lives depend on decisions made in chambers like this where they're never invited. I will forge my own path, starting with the magical races who were here long before human politics fractured into competing factions. And I'll build coalition based on shared commitment to the realm's survival rather than particular ideologies about how humans should govern themselves."

The declaration hangs in the air, bold and terrifying in its implications. You've just refused the easy path, the conventional path, every path that came with ready-made support structure and established power base. You're choosing to build something new from nothing, gambling that genuine coalition can be forged from peoples who've rarely cooperated, that your personal credibility can substitute for factional resources.`;

const factionDepartures = `The faction leaders depart with varying degrees of coldness:

Lady Ashford rises with icy dignity. "The Loyalists will not support this. We cannot endorse what we see as rejection of proper authority and abandonment of tradition. But we will not oppose you openly either—we're not rebels. We'll maintain our networks, preserve what we can of the old ways, and wait to see if your independent path leads somewhere or merely circles back to need for traditional structure." Her departure feels like door closing but not locking, possibility of future rapprochement if you prove yourself.

Dane gathers his documents with careful neutrality. "The Reformists likewise will neither support nor actively oppose. Your rejection stings, but your reasoning—about including all peoples rather than just human factions—has merit we can't entirely dismiss. Build your magical coalition. Prove that independence can work. If you succeed, perhaps there's future conversation to be had about how your coalition and our democratic principles might align." His departure leaves opening rather than burning bridges.

Blackwood is coldest: "The Military will pursue our mission with or without your endorsement. Shadow Beasts don't care about your political philosophy. When territories fall because you lack resources to defend them, when your magical coalition proves too fractured to respond decisively to crises, perhaps you'll reconsider. Until then, stay out of our way." His departure feels like threat barely restrained.`;

const marcusConcern = `Marcus steps close once the faction leaders have gone, voice low with concern: "Your Highness, I must be honest. You've just made yourself very alone and very vulnerable. The factions control resources, armies, political networks. Your independent path means starting from scratch, building coalition from peoples who've never fully trusted each other or human leadership. It's... it's dangerous."

His expression shows conflict between duty to protect you and respect for your choice: "I'll stay beside you regardless. My oath was to you personally, not to any faction. But I worry about your safety, your ability to actually accomplish what you're attempting. Independence sounds noble, but it may prove impossible in practice."`;  

const companionSupport = `But other companions react with enthusiasm that contrasts Marcus's worry:

Rowan grins openly, fierce pride radiating from them. "Now THAT'S the spirit!" They step beside you immediately, hand on their blade in gesture of absolute commitment. "This is what I hoped you'd choose. Not Loyalist tradition that marginalizes people like me, not Reformist democracy that still centers humans, not Military authoritarianism. Something actually new. Something that includes everyone who shares this realm."

Their conviction lends strength: "We'll forge this path together. And it won't be easy—nothing worthwhile ever is—but it's the right path. The only path that actually serves the whole kingdom rather than particular human political faction."

Lyra—if she attended—nods with profound respect, ancient eyes showing approval you've rarely seen from her. "The elves will support this. Genuinely support it, not merely tolerate human political maneuvering. You honor all peoples by refusing to let any single faction claim you. This is wisdom your ancestors never demonstrated. My people will work with you to build something unprecedented."

Vale steps forward, expression complex but ultimately approving. "Not alone," they say firmly. "You're not alone in this. Some of us believe in you as person, not as figurehead for factional agenda. That belief—that personal loyalty rather than political calculation—that's what you'll build upon. It's harder than factional support, but potentially stronger because it's genuine."

Their support, Rowan's fierce commitment, Lyra's respect, Marcus's protective loyalty despite worry—it's not factional resources, but it's real. And perhaps that's enough to start with.`;

const independentPath = `You stand in the chamber after the faction leaders have departed, surrounded by small group of companions who chose you over political allegiance. The contrast with moments ago is stark: the room feels emptier, quieter, less certain. But also somehow cleaner, less complicated by hidden agendas and competing loyalties.

"So," Rowan says with grim satisfaction. "Let's build something new. Starting with the magical races. Dragons, dwarves, elves beyond just Lyra—all the peoples your ancestors tried to rule rather than partnering with them. This will be hardest path, most uncertain path. But it's yours. Truly yours, not borrowed from faction that would claim ownership of your choices."

The weight of what you've chosen settles over you: no ready-made army, no established political network, no guaranteed resources. Just personal credibility, growing reputation, and coalition you'll have to build from scratch through genuine relationship-building rather than factional politics. It's terrifying. It's exhilarating. It's completely uncertain whether it will work.

But it's yours.`;

const getIndependentPath = (): string => {
	return `${independentMoment}\n\n${factionShock}\n\n${independentDeclaration}\n\n${factionDepartures}\n\n${marcusConcern}\n\n${companionSupport}\n\n${independentPath}`;
};

export const IndependentPathStart: Scene = {
	id: 'independent_path_start',
	get text() {
		return getIndependentPath();
	},
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { lyra_respect: 15, rowan_bond: 20 } },
			get text() {
				return `Your choice to forge independent path carries particular resonance because of the deep bonds you've built with both Rowan and Lyra. These relationships—formed through genuine respect, cultural humility, collaborative approach—have prepared the ground for exactly this choice. You're not rejecting all factions out of naive idealism or political ignorance. You're choosing independence because your closest allies have shown you what genuine cross-cultural cooperation looks like, what's possible when humans actually partner with magical races rather than merely tolerating or ruling them.

${independentMoment}

${factionShock}

${independentDeclaration}

${factionDepartures}

${marcusConcern}

But Rowan's reaction eclipses Marcus's worry. Their grin is fierce and proud, joy radiating from them in ways you've never seen before. "Now THAT'S the spirit!" they declare, voice ringing with vindication. "This is what I hoped for from the moment I met you. Not absorption into human political faction, not compromise with systems that marginalize magical races, but genuine transformation. Building something actually new."

They step beside you immediately, positioning themselves as partner rather than subordinate: "We'll forge this path together. You and me, Lyra, whatever dragons and dwarves we can convince to join. It won't be easy—magical races have been burned by human promises too many times to trust quickly. But you've already proven different through actions rather than words. Lyra respects you. I trust you. That's foundation we can build on."

Lyra moves forward with ancient grace, luminous eyes showing approval that transforms her usual careful neutrality into something approaching warmth. "The elves will support this," she says with conviction that carries weight of centuries. "Genuinely, fully support it—not merely tolerate as we've tolerated previous human political arrangements. You honor all peoples by refusing to let any single human faction claim you. This is wisdom your ancestors never demonstrated, courage your grandfather never possessed."

She places her hand on your shoulder—extraordinary gesture from someone who rarely touches humans. "My people will work with you to build coalition that actually includes everyone who shares this realm. Dragons will listen when I tell them you're different. Dwarves will consider partnership when they see elves and humans cooperating genuinely rather than through political necessity. This is how transformation begins—not through factional victory, but through relationships that transcend old divisions."

The combination of Rowan's fierce commitment and Lyra's profound respect transforms what could have been isolated rejection of factions into genuine partnership with magical races. Your bonds with them have made this choice not just possible but potentially successful.

${companionSupport}

${independentPath}`;  
			}
		},
		{
			conditions: { hasFlags: ['magical_races_priority:true', 'diplomatic_focus:true'] },
			get text() {
				return `Your choice to forge independent path feels like natural culmination of everything you've been building toward. From the very beginning—when you declared at the kingdom briefing that magical race cooperation should be primary strategic priority—you've been signaling this direction. The factions heard that declaration and tried to claim you anyway, tried to convince you that their particular human political vision could incorporate magical races as junior partners. But you understood something they didn't: genuine inclusion requires not choosing any human faction, requires building coalition that starts with magical races rather than adding them as afterthought to human political structures.

${independentMoment}

${factionShock}

Lady Ashford's shock carries particular edge: "Your early commitment to magical races priority... I thought it was tactical position, opening move in political negotiation. I didn't realize you actually meant it as foundational principle that would override human factional allegiance entirely."

${independentDeclaration}

Your declaration resonates with power because you've been consistent. This isn't sudden rejection born from indecision or fear of commitment. This is logical culmination of diplomatic focus you've maintained throughout: magical races matter as much as humans, their needs and perspectives must shape governance rather than being accommodated within human political frameworks.

${factionDepartures}

Dane pauses longest before departing, studying you with new understanding: "Your magical races priority... I dismissed it as naive idealism. But you're actually attempting something unprecedented—coalition that centers magical beings rather than marginalizing them. It's either brilliantly visionary or catastrophically naive. I genuinely don't know which. But I respect the attempt."

${marcusConcern}

${companionSupport}

Lyra steps forward immediately, and you can see that she's been hoping for this since you first declared magical races as priority. "You meant it," she says with something approaching wonder. "When you declared magical cooperation as primary concern, you actually meant it as foundational principle rather than political positioning. That's... that's unprecedented in my experience with human leaders."

Her respect is profound: "The elves will support this completely. We've been waiting—centuries waiting—for human leader who actually understands that we're not subjects of human kingdoms, not resources to be managed, but sovereign peoples with legitimate interests deserving equal consideration. You're offering to build that. And we'll help you succeed."

${independentPath}

Your early commitment to magical races priority has prepared the ground for this choice. Where others might face skepticism from elves and dwarves and dragons, you'll face cautious hope because you've already demonstrated that your diplomatic focus is genuine rather than performative.`;  
			}
		},
		{
			conditions: { hasFlags: ['collaborative_leadership:true', 'values_all_perspectives:true'] },
			get text() {
				return `Your choice to forge independent path feels like logical extension of the collaborative leadership approach you've demonstrated throughout. You've consistently sought counsel from multiple perspectives, valued diverse input, refused to assume that any single ideology possessed all answers. The factions saw that pattern and each hoped you'd choose their particular vision through that collaborative process. But they missed what was really happening: you were learning that real collaboration requires not choosing sides, requires building space where all perspectives can genuinely contribute without being subordinated to factional agenda.

${independentMoment}

${factionShock}

${independentDeclaration}

Council Member Dane recognizes the pattern first: "Your collaborative approach... we saw it as careful consideration before choosing wisely. But you were actually building toward rejecting the choice entirely, weren't you? Toward creating space where collaboration doesn't require factional allegiance."

He almost smiles despite his Reformist disappointment: "It's either brilliantly innovative or completely impractical. But I respect the logical consistency. You can't truly value all perspectives while serving single faction's agenda."

${factionDepartures}

${marcusConcern}

Your companions exchange glances—they saw this coming, you realize. Your pattern of seeking counsel, valuing all perspectives, refusing to let any single voice dominate... it all pointed toward rejecting single-faction loyalty. They weren't surprised by your choice because you've been demonstrating the principle behind it throughout your journey.

Rowan grins with knowing satisfaction: "Knew you wouldn't let them box you in. Knew collaborative leadership meant building something that actually includes everyone rather than just carefully considering perspectives before imposing factional vision. This is what collaboration actually looks like—coalition built through genuine partnership rather than hierarchical structure where someone's perspective ultimately dominates."

Lyra nods with respect that suggests she saw this pattern too: "You will build something new through collaboration. Something better than what came before. Coalition where elven wisdom and human energy and dwarven craftsmanship and dragon power all contribute genuinely rather than being subordinated to single vision. That's what the realm needs."

${companionSupport}

${independentPath}

Your collaborative approach has prepared you for this path. Where others might struggle to build coalition from scratch, you have experience bringing diverse perspectives together, valuing all voices, creating space for genuine cooperation. Those skills will be essential for what comes next.`;  
			}
		}
	],
	choices: [
		{
			id: 'continue',
			text: 'Begin forging your own coalition with courage and determination',
			next: 'crystal_hunt_start',
			effects: { courage: 3, wisdom: 2 },
			hiddenEffects: {
				independent_path_confirmed: true,
				companions_most_important: true
			}
		}
	]
};

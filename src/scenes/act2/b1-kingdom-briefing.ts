import { Scene } from '../../story-manager';

const settlingIn = `The safe house's sitting room transforms into a war room. Marcus moves furniture with practiced efficiency, pushing chairs back to create space, clearing the central table of decorative items, revealing that the polished wood surface is actually marked with subtle engravings—map outlines, territorial boundaries, strategic markers that were always there but hidden in plain sight. This table was designed for exactly this purpose: strategic planning, military briefings, the kind of discussions that decide the fate of kingdoms.

Seraphine produces documents from a hidden compartment in the bookshelf: reports, intelligence summaries, correspondence from Loyalist agents scattered across the kingdom. The sheer volume of paperwork suggests an organization far more extensive than you'd imagined—hundreds of people working in coordination, maintaining networks, gathering information, preparing for the heir's return.`;

const mapRevealed = `Marcus spreads a large map across the table, and you immediately recognize the quality: this isn't some merchant's approximation or scholar's rough sketch. This is a military-grade strategic map, professionally rendered, recently updated. The Kingdom of Silverwood spreads before you in precise detail—every major city marked with careful notation, every road and river labeled, terrain features indicated with topographical precision.

But it's the additional markings that command attention. Colored pins denote faction strongholds: blue for Loyalists, green for Reformists, red for Military. Territory boundaries show the kingdom divided into spheres of influence, power distributed among competing groups rather than unified under single authority. And most ominously: black spots scattered across the map like spreading disease, each one marked with a date and casualty count. Shadow Beast breach points.`;

const visualImpact = `Seeing it laid out like this—the kingdom's fragmentation rendered visible, the dimensional threat quantified in documented incidents—hits harder than any verbal description could. This isn't abstract political theory or distant danger. This is concrete, measured, escalating crisis affecting real people in real locations throughout the kingdom you're supposedly meant to rule.`;

const marcusBeginsExplanation = `Marcus positions himself at the table's head, military commander assuming natural authority for tactical briefing. His scarred fingers trace routes across the map, pointing to relevant markers, connecting disparate information into coherent strategic assessment.

"The situation is dire, Your Highness," he begins without preamble or sugar-coating. "I won't insult your intelligence by pretending otherwise. The Kingdom of Silverwood stands on the edge of collapse—political, magical, and potentially dimensional. What I'm about to tell you represents twenty years of careful intelligence gathering, analysis by the kingdom's best strategic minds, and grim acceptance of realities we'd prefer to deny."`;

const crystalHeartHistory = `He taps the center of the map, where Silverwood Manor is marked with elaborate detail. "Twenty years ago, when your family fell during the Purge, the Crystal Heart shattered. Not metaphorically—literally shattered into five major fragments, each one containing immense magical power. The Crystal Heart wasn't just a symbol of royal authority or a pretty artifact to impress visiting dignitaries. It was—is—the kingdom's primary magical defense system."

Seraphine takes over the explanation, her cultured voice lending academic precision to the information. "The Crystal Heart maintained a dimensional barrier around the kingdom, preventing incursions from the Shadowrealm. Think of it as a magical immune system, constantly active, constantly defending against extra-dimensional threats. When it shattered, that protection collapsed. Shadow Beasts that were previously unable to manifest in our reality suddenly found pathways through. The rifts you've encountered? They're symptoms of a barrier that's failing progressively, deteriorating daily."`;

const fragmentScatter = `Marcus indicates five locations on the map, each marked with distinctive symbols. "The five fragments scattered across the kingdom during the shattering. We've identified their approximate locations through magical resonance tracking, historical records, and occasional sightings by agents brave or foolish enough to get close. But recovering them..."

He trails off, expression grim. "Each fragment radiates enormous power. That power attracts not just Shadow Beasts, but also political factions seeking to claim the fragments for their own purposes. Every major player in the kingdom wants these artifacts, Your Highness. And none of them agree on what should be done with them once acquired."`;

const politicalFragmentation = `Seraphine steps forward, her domain clearly being political analysis rather than military strategy. "Which brings us to the second crisis: political fragmentation. When your family fell, the kingdom didn't unite under new leadership. It fractured into competing factions, each with different visions for the future, each commanding significant resources and loyalty."

She indicates the colored pins scattered across the map. "Three major factions dominate current politics:"`;;

const loyalistFaction = `Her finger touches the blue pins, concentrated heavily in the capital and traditional noble territories. "The Loyalists—my faction—believe that only a true heir of House Silverwood can reunify the kingdom and properly restore the Crystal Heart. We maintain that the monarchy isn't just about political power, but about magical legitimacy. The royal bloodline carries specific capabilities—your blood magic, your ability to interface with the Crystal Heart's power—that cannot be replicated by democratic processes or military authority. We've spent twenty years preparing infrastructure, maintaining loyal networks, waiting for your prophesied return."

Her eyes meet yours with absolute conviction. "We number approximately forty thousand active supporters, concentrated primarily among traditional nobility and conservative commoners who remember the stability of your grandparents' reign. We control significant financial resources, maintain safe houses like this one throughout the kingdom, and have operatives in positions of influence across most major institutions. Our goal: see you crowned as rightful monarch and support you in restoring the kingdom to its former glory."`;;

const reformistFaction = `She moves to green pins, concentrated in merchant cities and university towns. "The Reformists argue that monarchy itself caused the kingdom's fall. They believe concentrated power in a single bloodline creates vulnerability—one successful assassination, one Purge, and everything collapses. Their vision: abolish the monarchy entirely, create a democratic council representing all segments of society, distribute the Crystal Heart's fragments among multiple guardians rather than concentrating power in royal hands."

Seraphine's expression shows professional respect despite clear disagreement. "They're led by Lord Edmund Pembroke, former royal advisor who survived the Purge and concluded that the system itself was flawed. The Reformists number roughly fifty thousand supporters—primarily merchants, scholars, progressive nobility, and younger generations who don't remember pre-Purge stability. They control significant economic infrastructure and have genuine popular support in urban centers. They're not villains, Your Highness. They're idealists who genuinely believe their vision serves the kingdom's best interests."`;

const militaryFaction = `Her finger moves to red pins, concentrated in border regions and military installations. "The Military faction, led by General Kieran Blackwood, argues that the kingdom faces existential threats requiring strong, decisive, military leadership. They believe democratic processes are too slow, that noble politics are too fractious, that what's needed is order through strength. Their vision: military authority establishing stability, with Blackwood himself as Lord Commander governing until the dimensional crisis is resolved."

Seraphine's voice turns harder. "They number approximately thirty thousand dedicated followers—soldiers, border settlers, pragmatists who value security over ideological purity. They control most military infrastructure, command loyalty from active armed forces, and have proven willing to use violence to achieve their goals. Blackwood himself is... complicated. Brilliant military mind, genuine concern for the kingdom's defense, but also authoritarian instincts and personal ambition that make him dangerous."`;

const magicalRacesContext = `Rowan, who's been listening intently from the side, leans forward now. "And the magical races? You're not mentioning them, but they matter as much as any human faction."

Marcus nods acknowledgment. "The Ranger Thornheart is correct. Elves, dwarves, dragons, various other magical beings—they've been watching human politics with increasing alarm. The Crystal Heart protected them too. Its barrier prevented Shadow Beasts from targeting their territories, maintained magical stability that many species require for survival. When it shattered, they were affected just as severely as humans."

Rowan's voice carries weight of personal knowledge. "My people—the elves—are debating whether to intervene in human affairs or retreat to isolated strongholds and focus on self-preservation. Dragons are furious that humans allowed such a critical magical artifact to be destroyed through political incompetence. Dwarves are fortifying their mountain cities, preparing for the possibility that surface world becomes uninhabitable. All of them are watching to see what humanity will do. Whether we can restore the Crystal Heart, reunify the kingdom, prove ourselves worthy of continued cooperation."`;;

const existentialStakes = `Seraphine spreads her hands across the map, encompassing the entire kingdom. "So you see the stakes, Your Highness. This isn't merely about reclaiming a throne or restoring your family's honor. It's about survival itself. If the Crystal Heart isn't restored, the dimensional barrier will continue deteriorating. Shadow Beast incursions will escalate from occasional incidents to constant warfare. Eventually—within a generation, perhaps less—the kingdom becomes uninhabitable. Millions die. Magical races retreat or perish. Everything your ancestors built, everything the Silverwood bloodline was meant to protect... it all ends."

The weight of it crashes down on you like physical pressure. The room seems smaller suddenly, the air heavier. Every person here is looking at you—not with accusation, but with desperate hope mixed with barely-concealed fear. You're twenty-something years old. You've spent most of your life not even knowing you were royal. And now you're being told that the fate of an entire kingdom, multiple species, perhaps millions of lives, depends on choices you're about to make.`;

const momentOfChoice = `Marcus speaks quietly, respectfully, but with urgency that won't be denied. "We need to know your priorities, Your Highness. Do we focus on recovering Crystal Heart fragments immediately, accepting political consequences? Do we attempt to unify the factions first, hoping cooperation can be achieved before crisis becomes catastrophic? Do we seek alliance with magical races, incorporating their power and knowledge into whatever solution we pursue?"

Seraphine adds, "Or do we take time to gather information, study history, prepare resources? There's no perfect answer, Your Highness. Every path carries risk. The question is: what feels right to you? What direction does your instinct suggest?"

They're asking you to lead. Actually lead, not just accept titles or recite protocols. They're asking for strategic direction that will shape everything that follows.`;

const getKingdomBriefing = (): string => {
	return `${settlingIn}\n\n${mapRevealed}\n\n${visualImpact}\n\n${marcusBeginsExplanation}\n\n${crystalHeartHistory}\n\n${fragmentScatter}\n\n${politicalFragmentation}\n\n${loyalistFaction}\n\n${reformistFaction}\n\n${militaryFaction}\n\n${magicalRacesContext}\n\n${existentialStakes}\n\n${momentOfChoice}`;
};

export const KingdomBriefing: Scene = {
	id: 'kingdom_briefing',
	get text() {
		return getKingdomBriefing();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['trust_in_marcus:true', 'marcus_loyalty:100'] },
			get text() {
				return `Your choice to trust Marcus immediately, accepting his oath without extensive interrogation, continues to pay dividends. As the briefing begins, you can feel the warmth in the room—Marcus's confidence in your leadership, Seraphine's approval of your instincts, the easy cooperation between your sworn knight and the Loyalist representative. Trust creates efficiency, removes friction, allows focus on the actual crisis rather than navigating interpersonal suspicion.

${settlingIn}

Marcus works with practiced ease, and you notice how he positions himself—respectfully subordinate to you even while taking charge of the practical preparations. He's demonstrating his oath in action: serving you competently while respecting your ultimate authority. Seraphine greets you warmly as she enters, her usual formal reserve softened by genuine pleasure at seeing Marcus's years of searching finally bear fruit.

${mapRevealed}

${visualImpact}

${marcusBeginsExplanation}

His confidence is palpable. He's not trying to convince you of his loyalty or prove his worth—that was settled when you accepted his oath. He can focus entirely on conveying critical information, knowing you'll receive it as coming from a trusted advisor rather than questioning every statement for hidden agendas.

${crystalHeartHistory}

${fragmentScatter}

${politicalFragmentation}

${loyalistFaction}

Seraphine's eyes linger on you with approval. "Your trust in Marcus speaks well of your judgment, Your Highness. He's one of the most honorable men in the kingdom, and you recognized that immediately. That instinct for reading people, for identifying genuine loyalty—it's a gift your grandfather possessed. He could look at someone and know their character within minutes. I hope you've inherited that capacity, because you'll need it in the political challenges ahead."

${reformistFaction}

${militaryFaction}

${magicalRacesContext}

${existentialStakes}

${momentOfChoice}

Marcus adds quietly, "Thank you for trusting me, Your Highness. I know my appearance was sudden, my claims dramatic. You could have demanded lengthy proof, maintained skepticism, refused my service. That you chose faith over fear... it means more than you know. And I swear I'll prove that faith warranted every day of my service."`;
			}
		},
		{
			conditions: { hasFlags: ['skepticism_level:high', 'marcus_must_prove_himself:true'] },
			get text() {
				return `Your skepticism about Marcus hasn't faded just because he led you to a comfortable safe house and introduced you to a polished noble. If anything, the elaborate nature of this briefing makes you more suspicious—this could still be an extremely sophisticated manipulation, a way to control you through overwhelming you with information and presenting themselves as your only viable allies. You're maintaining appropriate wariness, and you can feel how that affects the room's atmosphere.

${settlingIn}

Marcus moves carefully, aware of your watchful eyes, making no sudden movements or suspicious gestures. Seraphine notices your tension immediately—she's trained to read social dynamics, and your distrust is impossible to miss. She exchanges a glance with Marcus, some silent communication passing between them, then deliberately adopts a more direct approach.

${mapRevealed}

${visualImpact}

Seraphine speaks before Marcus can begin, addressing your skepticism head-on: "Your Highness, I can see your wariness. Marcus informed me that you demanded proof of his loyalty, or refused his oath entirely, or maintained appropriate caution despite his dramatic revelation. Good. Excellent, actually."

She meets your eyes with absolute directness. "Blind trust is what destroyed your family. Your grandfather trusted advisors who turned out to be traitors. Your parents trusted defenses that had been compromised from within. That trust killed them. So I will not ask for your faith. I will not demand belief simply because we claim loyalty. Instead, I'll present facts. Verifiable information you can confirm independently. And I'll let our actions over time prove what words alone cannot."

${marcusBeginsExplanation}

He adds, meeting your skeptical gaze without flinching: "I know you don't trust me yet, Your Highness. I know every claim I make sounds convenient, every piece of evidence could theoretically be fabricated. But these facts remain regardless of your faith in me. The Crystal Heart is shattered—you can verify that by consulting any magical scholar. The kingdom is fractured—you can see evidence of that just by walking through any major city. Shadow Beast incursions are escalating—casualty reports are public record."

${crystalHeartHistory}

${fragmentScatter}

${politicalFragmentation}

${loyalistFaction}

Seraphine continues with careful neutrality: "I represent the Loyalist faction. But I encourage you to meet representatives from the Reformists and Military as well. Hear their arguments. Evaluate their claims. Form your own judgment about who serves the kingdom's best interests. I'm confident that when you've heard all perspectives, you'll recognize that our vision—restoration through legitimate royal authority—represents the kingdom's best hope. But that confidence doesn't require you to accept my word blindly."

${reformistFaction}

${militaryFaction}

${magicalRacesContext}

${existentialStakes}

${momentOfChoice}

Marcus speaks carefully, respectfully accepting your continued distrust: "Whatever you decide, Your Highness, I'll be here. Proving through action what I couldn't prove through words. Demonstrating loyalty through consistent service rather than demanding faith through dramatic oaths. Take all the time you need to evaluate us. We'll still be here, still serving, still working to help you save the kingdom—whether you trust us today, tomorrow, or never."`;  
			}
		},
		{
			conditions: { hasHiddenAttributes: { seraphine_trust: 20 } },
			get text() {
				return `Your initial interaction with Seraphine went exceptionally well—whether through matching her formality, demonstrating diplomatic adaptability, or showing business-focused pragmatism, you made a strong first impression. She warmed to you immediately, seeing qualities she values: proper noble bearing, or authentic character worth developing, or efficient focus on substance over social games. That positive beginning shapes how this briefing unfolds.

${settlingIn}

Seraphine positions herself closer to you than strict formality would require. Not inappropriately close, but near enough to communicate warmth, personal investment, genuine care that transcends professional duty. Her usual perfect composure is softened slightly—you're not just "the heir" to her anymore. You're a person she's beginning to genuinely like and respect.

${mapRevealed}

${visualImpact}

${marcusBeginsExplanation}

${crystalHeartHistory}

${fragmentScatter}

Seraphine's hand touches yours briefly—a gesture that breaks formal protocol but feels natural, supportive. "I know this is overwhelming, Your Highness," she says quietly. "Twenty years old, discovering royal heritage, and now being told the kingdom's survival depends on your choices. It's unfair. It's too much to ask of anyone."

Her eyes show genuine emotion beneath the noble composure. "But I won't let you face this alone. Whatever you decide—whether you choose to pursue the Crystal Heart fragments, or focus on political unity, or seek magical race alliances, or some combination thereof—the Loyalists will support you. I will support you. Not because of duty or political calculation, but because I believe in you. Because I see something in you that reminds me of your grandmother—her strength, her compassion, her ability to inspire loyalty through genuine character rather than inherited authority."

${politicalFragmentation}

${loyalistFaction}

${reformistFaction}

${militaryFaction}

${magicalRacesContext}

${existentialStakes}

${momentOfChoice}

Seraphine adds, voice soft with sincerity: "For what it's worth, I trust your instincts. You've already demonstrated better judgment than many monarchs possess after decades of rule. Whatever direction you choose, I'll help you navigate the consequences. You don't have to know everything, be perfect, make flawless decisions. You just have to try—genuinely try to serve the kingdom's best interests. That's all anyone can ask. And it's more than we've had in twenty years."`;  
			}
		},
		{
			conditions: { hasHiddenAttributes: { learned_crystal_heart_history: true } },
			get text() {
				return `When you asked Sir Aldric about the Crystal Heart—the magical artifact central to your family's power and the kingdom's defense—you received detailed historical context that most people in the kingdom don't possess. You know about the Heart's creation, its purpose, the way it functioned as dimensional barrier. You understand the magical principles underlying its operation, the significance of its shattering, the implications of fragment dispersal. That knowledge changes how you receive this briefing.

${settlingIn}

${mapRevealed}

You study the map with knowing eyes, recognizing patterns and connections that would be opaque to someone learning this information for the first time. The fragment locations make sense when you understand the magical resonance principles Aldric explained. The Shadow Beast breach patterns correlate with what you know about dimensional weak points.

${visualImpact}

But the impact is still profound. Aldric's explanation was historical, academic, removed from immediate danger. This map renders the crisis immediate, personal, urgent. These aren't abstract magical principles—these are people dying, territories becoming uninhabitable, your kingdom collapsing in real time.

${marcusBeginsExplanation}

Marcus pauses mid-sentence, noting your expression. "You already know some of this," he observes. "The spirit in the manor? Sir Aldric revealed the Crystal Heart's history?"

You nod confirmation, and relief washes across Marcus's scarred face. "Good. That saves considerable time and ensures you understand what's truly at stake. Most heirs would need extensive education about the Heart's significance, magical theory lessons, historical context. But you've received instruction from one of the finest knights House Silverwood ever produced. That's... that's invaluable."

${crystalHeartHistory}

Seraphine takes over, recognizing your existing knowledge: "Then you understand why the Reformists' vision is dangerously naive. They want to distribute the fragments among multiple guardians, believing that dispersed power is safer. But as Aldric surely explained, the Crystal Heart functions as a unified whole. Its magic requires synchronization, coordination, a single will directing its power. Fragmenting it among democratic committees or distributed guardians would render it useless—the fragments would never achieve the resonance necessary for the barrier to function."

She meets your eyes with intensity. "And you understand why only royal blood can properly restore it. The Heart was created by your ancestors, attuned specifically to Silverwood magic. It recognizes your bloodline, responds to your power in ways it won't respond to others. This isn't about aristocratic privilege or outdated tradition. It's about magical compatibility, about having the specific capabilities required for an immensely complex and dangerous working."

${fragmentScatter}

${politicalFragmentation}

${loyalistFaction}

${reformistFaction}

${militaryFaction}

${magicalRacesContext}

${existentialStakes}

${momentOfChoice}

Rowan adds thoughtfully: "Your spirit-gained knowledge gives you an advantage most leaders don't possess, Your Highness. You're making decisions from a position of genuine understanding rather than accepting others' explanations blindly. That's powerful. Use it."`;  
			}
		}
	],
	choices: [
		{
			id: 'focus-crystal',
			text: 'Prioritize recovering Crystal Heart fragments—the dimensional threat is existential and immediate',
			next: 'lyra_arrival',
			effects: { wisdom: 4 },
			hiddenEffects: {
				knows_political_landscape: true,
				knows_crystal_heart_crisis: true,
				crystal_heart_priority: true,
				magical_focus: true,
				seraphine_trust: 5,
				rowan_bond: 8
			}
		},
		{
			id: 'focus-unity',
			text: 'Focus on unifying the three factions first—a divided kingdom cannot succeed at anything',
			next: 'lyra_arrival',
			effects: { charisma: 4 },
			hiddenEffects: {
				knows_political_landscape: true,
				knows_crystal_heart_crisis: true,
				unity_priority: true,
				political_focus: true,
				seraphine_trust: 10
			}
		},
		{
			id: 'focus-races',
			text: 'Seek alliance with magical races immediately—their power and knowledge could be decisive',
			next: 'lyra_arrival',
			effects: { wisdom: 3, charisma: 2 },
			hiddenEffects: {
				knows_political_landscape: true,
				knows_crystal_heart_crisis: true,
				magical_races_priority: true,
				diplomatic_focus: true,
				rowan_bond: 12,
				seraphine_trust: 3
			}
		},
		{
			id: 'ask-opinions',
			text: 'Ask everyone present for their counsel before deciding—multiple perspectives reveal truth',
			next: 'lyra_arrival',
			effects: { wisdom: 5 },
			hiddenEffects: {
				knows_political_landscape: true,
				knows_crystal_heart_crisis: true,
				collaborative_leadership: true,
				values_all_perspectives: true,
				seraphine_trust: 8,
				rowan_bond: 10,
				marcus_loyalty: 105
			}
		},
		{
			id: 'study-history',
			text: 'Study the kingdom\'s historical records in the library first—knowledge precedes wise action',
			next: 'library_discovery',
			effects: { wisdom: 4 },
			hiddenEffects: {
				knows_political_landscape: true,
				knows_crystal_heart_crisis: true,
				scholar_approach: true
			}
		},
		{
			id: 'prepare-equipment',
			text: 'Visit the capital marketplace to acquire better equipment—practical preparation matters',
			next: 'capital_marketplace_merchant',
			effects: { wisdom: 2 },
			hiddenEffects: {
				knows_political_landscape: true,
				knows_crystal_heart_crisis: true,
				pragmatic_preparation: true
			}
		}
	]
};

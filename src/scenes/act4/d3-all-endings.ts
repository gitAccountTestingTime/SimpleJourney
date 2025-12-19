import { Scene } from '../../story-manager';

// Act 4 - All Ending Variations

export const TraditionalCoronation: Scene = {
	id: 'traditional_coronation',
	text: `The Royal Cathedral stands magnificent with centuries of architectural grandeur reaching toward vaulted ceilings where angels and heroes watch from painted frescoes, filled with nobility in their finest ceremonial attire and common folk who arrived at dawn to claim viewing spaces - both groups united in witnessing this moment of historical continuity. Ancient tradition guides every step of the ceremony with precision that comes from hundreds of coronations stretching back through centuries of unbroken royal succession, as you approach the throne that has seated your ancestors through wars and peace, famine and prosperity, the weight of accumulated history almost visible in the air like incense smoke.

The Crown of Ascension gleams in candlelight that throws dancing shadows across its gold and jewels, each gemstone representing a province conquered or alliance forged by rulers whose names fill history books and whose deeds shaped the kingdom that now looks to you for leadership. The Archbishop intones centuries-old words in ancient language that few fully understand but everyone recognizes as sacred, voice carrying weight of religious authority that legitimizes secular power through divine sanction. Seraphine stands prominently in position of honor among the noble houses, representing the aristocratic faction that supported this restoration through political maneuvering and careful alliance-building, her expression mixing personal pride with professional satisfaction at seeing her political vision realized.

As the crown is placed upon your head with deliberate ceremonial slowness that gives every observer time to witness the transfer of sovereignty, you feel its weight - both literal metal pressing into your skull with surprising heaviness and symbolic burden of responsibility for every life in the realm settling onto shoulders that suddenly feel inadequate to bear such load. You are now the rightful monarch according to every law and custom, continuing a bloodline that stretches back centuries through documented genealogy and legendary ancestry, the living embodiment of institutional continuity in world that often feels chaotic and uncertain.

The realm has stability purchased through tradition's reassuring familiarity. The old ways are preserved, giving those who fear change the comfort of predictability. But the question remains hanging in air heavy with expectation and uncertainty: what kind of monarch will you be? Will you simply occupy the throne as placeholder for past glories, or will you write new chapter in kingdom's long story?`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { seraphine_romance: 70 }
			},
			text: `As the crown settles on your head with weight that feels both foreign and inevitable, Seraphine steps forward in her official role as Grand Advisor with movements precise enough to satisfy the strictest protocol observers while carrying emotional subtext visible only to those who know her intimately. But her eyes betray deeper emotion that court manners cannot fully conceal - love mixing with pride, relief mixing with joy, vulnerability breaking through diplomatic armor in this moment when personal and political triumph coincide.

"Your Majesty," she says formally for the crowd with voice pitched to carry through cathedral and maintain appropriate public distance, then adds more softly in tone meant for your ears alone though surely some nearby nobles can hear, "My love. You've fulfilled every duty that birth and fate placed on your shoulders, overcome every challenge that tested your worthiness for this crown, proved yourself through action rather than just bloodline. And I'm honored to stand beside you - as advisor whose counsel helps guide policy, as partner whose support sustains you through difficult decisions, as equal in all but title who shares burdens that crown represents."

Later, in private chambers where courtly performance can finally end and authentic selves emerge, she takes your hands with grip that communicates what formal public contact could not. "We'll build something beautiful together," she promises with voice carrying absolute conviction. "Traditional in form because that stability matters and makes change possible, but progressive in spirit because tradition without adaptation becomes stagnation. The best of the old world and the new, honoring what worked while fixing what didn't. Just like us - noble and common, political and personal, duty and love combined into something stronger than either element alone."`
		},
		{
			conditions: {
				hasHiddenAttributes: { rowan_romance: 70 }
			},
			text: `Rowan stands apart from the ceremony with deliberate physical and emotional distance, uncomfortable in formal attire that constrains movement and courtly setting that constrains spirit, looking like wild creature temporarily caged by circumstance rather than willing participant in traditional ritual. They watch you be crowned with mixed emotions clearly visible on face that has never learned to hide feelings behind diplomatic masks - happy for you achieving what you sought or accepting what duty demanded, but painfully aware this world of protocols and hierarchies and endless political obligations isn't theirs and never will be regardless of how much love exists between you.

After the ceremony concludes and crowds disperse and you can finally escape the suffocating attention of court, they find you on a balcony where fresh air provides relief from incense and expectations. "So you're a monarch now. Proper ruler and all that," they say with smile that manages to be simultaneously genuine and sad, celebrating your achievement while mourning what it costs your relationship. "I can't be your official anything, you know that right? Can't stand the politics that would turn our love into strategic alliance, can't bear constraints that would make me consort or companion-in-residence bound by court etiquette. This place would kill me slowly, turn me into tamed version of myself that neither of us would recognize or respect."

But they take your hand with grip that communicates commitment despite everything they just said. "I'll stay. As your guardian who watches from shadows, your secret who exists outside official channels, your reminder that there's world beyond throne rooms and council meetings. We'll have to steal moments between your duties - midnight meetings in gardens, stolen afternoons in hunting lodges, secret passages leading to rooms where you can be yourself rather than performing monarchy. It'll be complicated and sometimes painful and definitely unconventional." They kiss you softly with tenderness that makes the difficulties worth bearing. "But you're worth it. You've always been worth it."`
		},
		{
			conditions: {
				hasHiddenAttributes: { progressive_traditional: true }
			},
			text: `Though traditional in ceremony with every ritual performed according to ancient protocols that conservative nobles find reassuring, your coronation speech surprises and challenges those same conservatives who expected coronation to signal return to unexamined past. You outline measured reforms that sound radical to traditionalists but cautious to revolutionaries, respectful changes that honor what worked historically while addressing what clearly failed, progressive policies wrapped in traditional language that makes them palatable to those who fear change more than they fear injustice. Your rhetoric is masterful - invoking ancestors while proposing evolution, celebrating heritage while acknowledging its limitations, promising stability while delivering transformation.

"We honor what worked in the past," you declare with voice carrying authority newly granted by crown but earned through trials that tested character, "while adapting to meet future challenges that our ancestors never faced and could not have anticipated. Tradition need not mean stagnation - indeed, our greatest traditional value is adaptability, the wisdom to recognize when circumstances demand new approaches. The crown I wear symbolizes continuity, but continuity of purpose and values rather than rigid adherence to methods that may have outlived their usefulness. We can be traditional and progressive, honoring history while building better future."

Even Sage, initially disappointed you didn't choose full democratic revolution that would have swept away monarchical structures entirely, nods appreciatively from his position among reformist faction who look pleasantly surprised by speech they feared would champion pure conservatism. "You're threading a difficult needle," he admits later in private conversation where his intellectual honesty overrides ideological preference. "Change without breaking, evolution without revolution, progress that doesn't alienate those who fear it. That's harder than either pure conservatism or pure radicalism. It might actually work where more extreme approaches would trigger backlash and civil war."`
		}
	],
	choices: [
		{
			id: 'progressive-monarch',
			text: 'Rule progressively within traditional framework',
			next: 'epilogue_reflection',
			effects: { wisdom: 8, charisma: 7 },
			hiddenEffects: {
				'ending_achieved:traditional_progressive': true,
				reforms_implemented: true,
				balanced_approach: true
			}
		},
		{
			id: 'conservative-monarch',
			text: 'Maintain pure traditional values',
			next: 'epilogue_reflection',
			effects: { wisdom: 5, courage: 4 },
			hiddenEffects: {
				'ending_achieved:traditional_conservative': true,
				status_quo_maintained: true,
				stability_preserved: true
			}
		},
		{
			id: 'reluctant-monarch',
			text: 'Accept duty but remain personally conflicted',
			next: 'epilogue_reflection',
			effects: { wisdom: 7 },
			hiddenEffects: {
				'ending_achieved:traditional_reluctant': true,
				burden_of_duty: true,
				personal_cost: true
			}
		}
	]
};

export const DemocraticFounding: Scene = {
	id: 'democratic_founding',
	text: `The new Assembly Hall buzzes with unprecedented energy that feels electric and alive in way throne rooms never do - voices overlapping in passionate debate rather than courtly whispers, common accents mixing with refined speech, the messy vitality of democracy in action replacing the ordered silence of monarchical hierarchy. Elected representatives from all walks of life that previously had no political voice - nobles who campaigned on platforms rather than relying on inherited authority, merchants whose wealth comes from trade rather than land, craftspeople whose skills built civilization's infrastructure, even farmers whose labor feeds everyone but who were traditionally excluded from governance - gather for the first session of parliament that represents genuine cross-section of population rather than just privileged elite.

You stand not on a throne elevated above subjects to emphasize hierarchical distance, but at a podium on the same level as other representatives, symbolic positioning that makes statement louder than any speech about fundamental equality. The title you chose reflects your vision with careful deliberation: First Citizen rather than King or President or any term that might imply separation from or superiority over those you serve. Leader among equals, not ruler above subjects - someone with particular responsibilities but no inherent superiority, someone who can be questioned and challenged and voted out rather than divinely ordained authority demanding obedience.

Sage is ecstatic in way you've never seen him before, tears streaming down his face openly despite scholarly preference for emotional restraint, as his dream becomes reality after years of theoretical advocacy and intellectual arguments that many dismissed as impractical idealism. "A government of the people, by the people, and for the people," he breathes with voice breaking on words he's written and spoken countless times but never expected to witness manifested in actual institutions. "I thought I'd die before seeing this day. Thought I'd spend my whole life arguing for something that would only exist in books and dreams. But here it is. Real. Happening. Democracy."

The first votes are cast with ceremony that invests the act with appropriate gravity - representatives rising to state positions publicly, voices carrying across hall where every opinion matters equally regardless of birth or wealth. The first laws debated with passion that sometimes becomes heated argument but never descends into violence because rules and procedures channel disagreement into productive rather than destructive directions. Democracy, messy and beautiful and frustrating and inspiring, begins its imperfect journey toward justice.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { sage_romance: 70 }
			},
			text: `Sage wins his election to parliament easily - his idealism and intellect and years of underground activism building reputation that translates to votes when commoners finally get voice in governance, convincing voters that he genuinely believes in principles he advocates rather than using democracy as vehicle for personal ambition. As he takes his oath of office with hand over heart and voice ringing with conviction that makes even cynical observers believe in possibility of better government, he looks at you with pure joy and love that makes everything you sacrificed to reach this moment feel worthwhile.

"We're doing it," he says that evening in private quarters where public personas can finally rest, holding you close with embrace that communicates gratitude and affection and wonder that this is real. "Building the world we dreamed of together during late-night conversations about philosophy and justice and systems that might actually serve everyone rather than just the powerful. You gave up absolute power you could have claimed by right of birth and prophecy and conquest to make this possible, chose democracy over monarchy when taking crown would have been easier and more personally advantageous. That's the bravest, most loving thing anyone's ever done - sacrificing for principle rather than self-interest, believing in collective wisdom rather than individual authority."

He kisses you softly with tenderness that makes you feel cherished beyond measure. "I get to work beside you building a better world, pursuing justice through actual institutions rather than just theoretical frameworks, and I get to love you through all of it. I'm the luckiest person in the realm - my intellectual dreams and my romantic dreams both came true simultaneously because of you."`
		},
		{
			conditions: {
				hasHiddenAttributes: { lyra_romance: 70 }
			},
			text: `Lyra represents elven interests in the new parliament with seat secured through election that proves magical races trust her judgment and leadership - the first non-human ever to hold such position in human government that has historically treated magical beings as subjects at best and threats at worst. Her presence symbolizes the revolutionary nature of this government more powerfully than any manifesto or declaration could articulate, physical embodiment of inclusivity replacing centuries of human-centric exclusion.

"For two thousand years, I've watched human kingdoms rise and fall," she tells the assembly in her first speech with voice carrying weight of lived history that spans epochs most present can barely imagine, two centuries of experience lending authority that no amount of theoretical knowledge could match. "Watched monarchies and oligarchies and theocracies and military dictatorships all claim they knew best way to govern. None ever invited us to participate as equals rather than subjects or foreign entities requiring separate treatment. This parliament represents hope I'd abandoned centuries ago after watching too many promising beginnings collapse into familiar patterns of domination and exclusion. You've done something genuinely new rather than just rearranging old hierarchies."

To you privately in moments stolen from parliamentary duties and public performances, she speaks with vulnerability she rarely shows: "You created something unprecedented. A government that sees beyond species and status, that judges worth by character and contribution rather than bloodline and birth. And you did it out of genuine belief in equality rather than strategic calculation about coalition-building." She smiles with expression mixing love and admiration. "That's why I love you - your ideals match your actions, your principles guide your choices even when compromise would be easier. You're the person I hoped existed but stopped believing in after too many disappointments."`
		},
		{
			conditions: {
				hasHiddenAttributes: { marina_romance: 70 }
			},
			text: `Marina's election to represent merfolk interests marks another first that historians will analyze for generations - ocean dwellers given voice in surface government that previously treated seas as resource to exploit or territory to claim rather than home to sovereign peoples deserving representation. She splits time between land and sea in schedule that would exhaust anyone less committed, physically embodying the bridge between worlds that this parliament attempts to construct institutionally through laws and policies, a living symbol of cooperation replacing centuries of mutual incomprehension and occasional conflict.

"This is exhausting," she admits cheerfully during a late-night session that has stretched past midnight as representatives debate minutiae of trade regulations with passion that suggests lives depend on getting details right - which they probably do. "Democracy is so much talking! So much debate and procedure and amendment proposals and counter-proposals. We merfolk usually just gather, discuss until consensus emerges or elder decides, then disperse to implement. This formal structure with rules and votes and recorded proceedings..." She laughs with genuine amusement rather than complaint. "But it's beautiful too in its own messy way. Everyone gets to contribute voice, even if that means meetings last forever. Every perspective gets heard even if not every opinion prevails. That's worth the exhaustion."

She takes your hand with gesture that communicates affection transcending species barriers that once seemed insurmountable. "Our relationship mirrors this government - two different worlds working to understand each other despite fundamental differences in how we live and think and communicate, learning to compromise without demanding either side abandon what makes them themselves, building something new together rather than one side assimilating into other's existing structures. It's not always easy, and sometimes translation failures create misunderstandings that take patience to resolve, but it's worth it. Love across difference is always worth the effort."`
		}
	],
	choices: [
		{
			id: 'ceremonial-role',
			text: 'Take ceremonial figurehead role - let parliament truly lead',
			next: 'epilogue_reflection',
			effects: { wisdom: 10, charisma: 6 },
			hiddenEffects: {
				'ending_achieved:democratic_ceremonial': true,
				pure_democracy: true,
				humble_leadership: true
			}
		},
		{
			id: 'active-leader',
			text: 'Stay actively involved as first citizen with real influence',
			next: 'epilogue_reflection',
			effects: { wisdom: 8, charisma: 8 },
			hiddenEffects: {
				'ending_achieved:democratic_active': true,
				guided_democracy: true,
				influential_leader: true
			}
		},
		{
			id: 'retire-advise',
			text: 'Retire from politics but advise from background',
			next: 'epilogue_reflection',
			effects: { wisdom: 9 },
			hiddenEffects: {
				'ending_achieved:democratic_retired': true,
				elder_statesman: true,
				peaceful_transition: true
			}
		}
	]
};

export const MilitaryOrder: Scene = {
	id: 'military_order',
	text: `The throne room has been transformed into a war room that reflects fundamental shift in governing philosophy from courtly politics to military pragmatism, maps covering walls where tapestries once hung depicting historical victories now replaced by strategic assessments of current threats and defensive positions. Military commanders replace courtiers as primary advisors, their practical experience with violence and protection valued over diplomatic sophistication or political maneuvering. Order and discipline define every interaction with precision that feels both reassuring in its clarity and ominous in its implications - efficiency purchased through hierarchy, stability through control.

You've established strong central control backed by military power that can enforce decisions without negotiation or compromise, authority that doesn't require persuasion because it can compel obedience through threat of force. The realm has order - laws enforced consistently, criminals punished swiftly, borders defended effectively. But the question that haunts every quiet moment is fundamental: will you use this power justly in service of protection and collective welfare, or will it corrupt you into becoming the very tyranny you once opposed, turning means of security into instruments of oppression?

Kieran's loyalty becomes crucial in ways that transcend personal relationship to touch on regime's entire moral foundation. Does he believe in your vision of just order where strength serves justice rather than replacing it, or does he see you becoming the tyrant his uncle always was - someone who uses military power to crush opposition rather than protect the vulnerable, who mistakes fear for respect and obedience for loyalty? His judgment matters more than anyone else's because his honor is uncorrupted by political calculation or personal ambition. If Kieran supports you, others will trust your intentions. If he questions you, that questioning will spread doubt through entire military structure.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { kieran_loyalty: 70, maintained_honor: true }
			},
			text: `Kieran kneels before you formally in ceremony that satisfies military protocol and courtly tradition, but his eyes show trust and respect that cannot be commanded or demanded - only earned through consistent demonstration of character and principle. "You've proven that strength can serve justice rather than replacing it, that military power can protect rather than oppress," he says with voice carrying conviction that comes from watching you make difficult choices that prioritized honor over expediency. "Through every test and temptation to take easy path of domination, you chose the harder right of service. The military follows you not from fear or obligation, but because we believe in what you're building - order that serves everyone rather than just those with power."

He rises with hand moving to rest over heart in gesture that signifies deepest commitment. "I'm honored to serve as your Knight Commander and ensure that the military structure we've built remains true to its purpose. Together, we'll create an order that protects all people equally - not just nobles whose wealth can purchase protection, not just humans whose species dominated historically, but everyone under our protection regardless of status or birth. Military strength channeled toward justice rather than conquest, power used for defense rather than aggression."

In private moments if you've romanced him, he adds with vulnerability that his public bearing never shows: "I was terrified you'd become like my uncle - someone who uses noble intentions to justify ignoble actions, who slowly compromises principles until nothing remains except hunger for control. But you stayed true to yourself through every pressure to abandon integrity for efficiency. That's why I love you - your power never corrupted your heart. You remained worthy of the authority you wield."`
		},
		{
			conditions: {
				hasHiddenAttributes: { power_hunger_indicator: 5, ruthless_actions: 8 }
			},
			text: `Kieran approaches your throne slowly with measured steps that suggest caution rather than ceremony, his expression troubled in way that makes your chest tighten with anxiety about confrontation you've sensed building through recent weeks as your decisions grew more ruthless and your tolerance for dissent diminished. "I need to ask you something, and I need an honest answer without political deflection or strategic misdirection," he says with voice that manages to be simultaneously respectful of your authority and challenging of your choices. "Are you building this military order to protect the realm from external threats and internal chaos, or to control it through fear and overwhelming force that crushes opposition rather than addressing legitimate grievances?"

His hand rests on his sword hilt in gesture that isn't quite threatening but isn't quite respectful either - unconscious positioning that speaks to his internal conflict between loyalty to person he cares about and duty to principles he swore to uphold. "I've followed you this far through battles and political struggles, believed in your vision when others doubted, defended your decisions when they seemed questionable. But if you've become what we fought against - if power has corrupted the person I thought you were into tyrant wearing hero's face..." His voice hardens with steel that makes clear this isn't empty posturing but genuine moral line he will not cross. "I swore an oath to protect this kingdom. Even from its ruler, if necessary. Especially from its ruler if they betray everything we claimed to stand for."

This is a test that will determine not just your relationship with Kieran but the entire moral foundation of your military state. The wrong answer - or worse, answer that reveals you've already crossed lines you can't uncross - could turn your most loyal warrior into your most dangerous enemy, fracture military that follows Kieran's honor as much as your authority.`
		},
		{
			conditions: {
				hasHiddenAttributes: { blackwood_alliance: true, kieran_loyalty: 40 }
			},
			text: `General Blackwood stands beside your throne with positioning that suggests partnership bordering on equality rather than subordinate advising superior, satisfaction evident in every line of his posture and expression as he surveys the military-controlled government he always advocated for and you've now delivered. "Well played, Your Majesty," he says with tone mixing approval and proprietorship that makes unclear who serves whom in this relationship. "With military power secured and unified under clear command structure, we can impose real order without compromise or endless debate. No more democratic nonsense about consensus-building, no more noble faction negotiations that dilute effective policy, just effective rule that gets things done through decisive action and overwhelming force that makes resistance futile."

Kieran stands apart from the throne and his uncle with physical distance that reflects emotional and moral gulf, conflicted and troubled in ways visible despite his usual disciplined composure. He catches your eye across the room silently asking questions that words might make treasonous: Is this really what you wanted? Have you become his uncle's puppet, implementing Blackwood's authoritarian vision under your authority? Did you betray everything we fought for, or was this always your intention hidden beneath rhetoric about justice and protection?

The military order is established with efficiency that makes government function smoothly in ways democratic debate never could, decisions implemented swiftly without obstruction, threats neutralized before they grow dangerous. But at what cost to your relationships and your soul? Kieran's disappointment weighs heavier than any crown, his moral judgment cutting deeper than any political criticism. You have power, but you've lost something more valuable in gaining it - trust of person whose respect you valued most.`
		}
	],
	choices: [
		{
			id: 'just-order',
			text: 'Create just military order - strength in service of protection',
			next: 'epilogue_reflection',
			effects: { courage: 9, wisdom: 7 },
			hiddenEffects: {
				'ending_achieved:military_just': true,
				honorable_strength: true,
				kieran_loyal: true,
				protected_realm: true
			}
		},
		{
			id: 'authoritarian-control',
			text: 'Embrace authoritarian control - order through dominance',
			next: 'epilogue_reflection',
			effects: { courage: 7, wisdom: 3 },
			hiddenEffects: {
				'ending_achieved:military_authoritarian': true,
				tyranny_begun: true,
				kieran_conflicted: true,
				companions_leave: true
			}
		},
		{
			id: 'puppet-regime',
			text: 'Become Blackwood\'s puppet (only if allied with him)',
			next: 'epilogue_reflection',
			effects: { courage: 4 },
			hiddenEffects: {
				'ending_achieved:military_puppet': true,
				blackwood_controls: true,
				power_lost: true,
				kieran_betrayed: true
			}
		}
	]
};

const balconyCelebration = `From the palace balcony that overlooks the main square where historically monarchs announced wars and victories to assembled crowds, you look out over a celebration unlike any in recorded history that fills streets as far as eye can see with joy that feels genuinely spontaneous rather than commanded performance. Humans dance with elves in combinations that would have been scandalous mere months ago, their movements blending styles from different traditions into improvisational fusion. Dwarves share ale with fae in taverns where both species feel welcome, their legendary drinking prowess finding common ground in shared appreciation for good spirits and better company. Dragons fly overhead in joyful display that transforms creatures once feared as existential threats into participants in communal celebration, their aerial acrobatics drawing cheers rather than terror. Merfolk have emerged from harbors in unprecedented numbers to join festivities, their presence on land symbolizing bridge between worlds that everyone assumed would remain forever separate.`;

const complexSystem = `The new system is complex almost to point of absurdity - constitutional monarchy that preserves throne but limits its power, elected parliament that shares legislative authority traditionally held by crown alone, military reformed to serve all people equally with civilian oversight preventing abuse, and magical races holding equal representation rather than subordinate status or complete exclusion from governance. It shouldn't work according to every political theory and historical precedent. The competing interests should fracture into faction warfare. The compromises should satisfy no one because everyone had to surrender absolute vision for partial implementation. But somehow, miraculously against all cynical predictions, it does work - not perfectly, not without friction and frustration, but functionally in ways that create space for continued improvement rather than revolutionary upheaval.`;

const companionsGathered = `All your companions gather on the balcony with you in formation that speaks to relationships forged through shared struggle and genuine affection rather than political calculation or strategic alliance-building. Every relationship you built through patient listening and authentic engagement, every bridge you constructed between people who started as strangers or enemies, every sacrifice you made putting others' needs before personal ambition - it all led to this moment where diverse group of individuals stand together not from obligation but from choice.`;

const rowanWonder = `"You actually did it," Rowan says with wonder that makes their usually confident voice sound almost awed, someone who doubted this outcome was possible now confronted with reality of achievement they predicted would fail. "Created a place where even I feel I belong despite not fitting easily into categories or hierarchies. Wild thing like me finding home in political structure - that shouldn't be possible. But you made it possible by building system flexible enough for people who don't conform."`;

const goldenAge = `The future won't be easy - building true unity will take decades of sustained effort, maybe centuries of generational commitment to ideals that current implementation only partially realizes. There will be setbacks and challenges, moments when fragile cooperation threatens to collapse into familiar patterns of conflict and domination. But you've laid the foundation that makes better future possible rather than just theoretical. The golden age begins here, in this moment of imperfect victory that contains seeds of genuine transformation.`;

export const CompromiseAchieved: Scene = {
	id: 'compromise_achieved',
	text: `${balconyCelebration}

${complexSystem}

${companionsGathered}

${rowanWonder}

${goldenAge}`,
	textVariants: [
		{
			conditions: { hasFlags: ['all_fragments_obtained:true', 'all_races_united:true'], hasHiddenAttributes: { all_companions_loyal: true, companion_bonds: 400 } },
			text: `${balconyCelebration}

Each companion stands with you in testament to relationship-building that transcended strategic necessity to become genuine bonds of affection and mutual respect - Seraphine with her diplomatic grace, Vale with their steadfast loyalty, Rowan with their wild freedom, Kieran with his unwavering honor, Lyra with her ancient wisdom, Finn with his practical warmth, Marina with her oceanic wonder, Shadow with their hard-won redemption, Zephyr with their fae mischief, Thorne with his draconic majesty, Sage with his intellectual passion. Not a single ally lost along the way, not a single bridge burned in pursuit of expedient solutions, not a single relationship sacrificed on altar of political convenience. Every person you met, you connected with genuinely through seeing them as individuals worthy of respect rather than tools to be used or obstacles to overcome.

${complexSystem}

"This is what love looks like," Lyra says softly with two centuries of perspective lending weight to observation that transcends romantic categories. "Not romantic love alone, though that matters too, but the love of genuine connection multiplied across entire civilizations - agape rather than just eros. You loved us each individually with attention to our particular needs and dreams, and through that modeling taught us to love each other despite differences that once felt insurmountable. That's the real magic here - not the blood magic or elemental control, but the transformation of isolated individuals into community that cares about each other's welfare."

${companionsGathered}

${rowanWonder}

Finn raises a flask with gesture that combines dwarven ritual with spontaneous celebration. "To the heir who became the greatest diplomat in history not through manipulation or strategic brilliance, but by simply being kind, honest, and brave enough to be vulnerable. You changed the world by changing hearts, starting with ours."

${goldenAge}`
		},
		{
			conditions: { hasHiddenAttributes: { any_romance: 70 } },
			text: `${balconyCelebration}

Your romantic partner stands beside you with hand clasped firmly in yours, physical contact that communicates commitment transcending political alliance or strategic partnership. Together you built not just a kingdom through policy decisions and diplomatic maneuvering, but a life of shared purpose and deep love that sustained you through moments when duty felt overwhelming and future uncertain. Every choice made together, every vulnerability shared in private moments that balanced public performance, every time you chose each other despite pressures to prioritize politics over personal connection.

${complexSystem}

${companionsGathered}

"We did this together," your love says with voice carrying emotion that formal occasions usually require them to suppress but celebration permits them to express openly. "Every choice about governance weighed against impact on relationship, every sacrifice shared rather than demanded, every victory celebrated as partnership rather than individual achievement. This isn't your kingdom or my kingdom - it's ours. Partnership in the truest sense, where love strengthens leadership rather than being separate sphere kept private and compartmentalized."

${rowanWonder}

${goldenAge}

And you'll face that future together as partners in every way that matters - political and personal, public and private, strategic and intimate. The challenges ahead will test you both, but you've proven that love and leadership can coexist, that vulnerability enhances rather than undermines strength, that partnership makes both people better than either could be alone.`
		},
		{
			conditions: {
				hasHiddenAttributes: { seraphine_romance: 70 }
			},
			text: `Seraphine takes your hand as you watch the celebration with fingers interlacing in gesture that has become habitual intimacy, comfortable touch communicating affection without need for words. "I never thought I'd see tradition and progress unite so beautifully," she says with voice mixing professional satisfaction about political achievement with personal joy about shared accomplishment. "You've honored the past without being imprisoned by it - preserved what worked while transforming what didn't, respected tradition while building future that transcends its limitations. That's the balance I always hoped for but rarely believed possible."

She leans against you with trust that once would have been unthinkable for someone raised in courtly formality where physical contact carried political meaning and emotional restraint signified sophistication. "And I get to help you build it continuing forward. As your partner in governance who brings diplomatic skill and political networks, and in life who shares private moments when masks can drop and authentic selves emerge. The noble houses accept our relationship now - they see that love between equals strengthens rather than weakens rule, that partnership enhances judgment rather than clouding it with sentiment. We proved them wrong about so many things."

She kisses you softly with public display of affection that once would have scandalized conservative observers but now feels natural and right. "Welcome to our kingdom. Emphasis on 'our' - truly shared rather than one partner subordinate to other, truly equal despite formal titles that suggest hierarchy."`
		},
		{
			conditions: {
				hasHiddenAttributes: { kieran_romance: 70 }
			},
			text: `Kieran stands in dress uniform that transforms warrior into courtier without diminishing his essential nature, finally at peace with himself in ways that seemed impossible during early meetings when every interaction revealed internal conflict between duty and desire, honor and heart. "I found what I was seeking all along," he says with voice that usually maintains military discipline now carrying emotional openness that love has made possible. "A cause worthy of my honor that doesn't require me to compromise principles, and someone worthy of my love who understands that honor isn't weakness or rigidity but commitment to being better than circumstances require."

He kneels formally with gesture that satisfies military protocol, then stands and takes your hand with touch that transcends ceremony to become genuine affection. "You've created a knightly order that serves justice rather than just power, that protects the vulnerable rather than enforcing hierarchy, that gives me purpose that doesn't conflict with my heart or force me to choose between love and duty. Given me way to be soldier and lover simultaneously without either role diminishing the other." He smiles with expression that transforms his usually serious face into something radiant. "And you love me despite all my conflicted loyalty and honor-bound nonsense that makes me difficult and complicated."

The crowd below cheers as he kisses you publicly with passion that scandalizes some traditionalists who believe such displays beneath royal dignity but delights the people who see in your romance proof that rulers can be human. Their approval matters more than conservative disapproval.`
		}
	],
	choices: [
		{
			id: 'perfect-unity',
			text: 'Celebrate perfect unity achievement (requires all conditions met)',
			next: 'epilogue_reflection',
			effects: { wisdom: 12, charisma: 12, courage: 10 },
			hiddenEffects: {
				'ending_achieved:unity_perfect': true,
				golden_age_achieved: true,
				legendary_ruler: true,
				best_ending: true
			}
		},
		{
			id: 'fragile-unity',
			text: 'Accept fragile unity - work continues',
			next: 'epilogue_reflection',
			effects: { wisdom: 9, charisma: 8 },
			hiddenEffects: {
				'ending_achieved:unity_fragile': true,
				ongoing_challenges: true,
				hopeful_future: true
			}
		}
	]
};

export const KingdomFractures: Scene = {
	id: 'kingdom_fractures',
	text: `The attempt at unity failed catastrophically in ways that historians will analyze for generations trying to understand how promising beginning collapsed so completely into tragedy. Factions couldn't overcome their differences despite your best efforts at mediation and compromise, each group clinging to absolute vision rather than accepting partial implementation through cooperation. Magical races retreated in disappointment after brief hope that things might be different this time gave way to familiar pattern of human inability to share power genuinely. Civil war erupted across the realm with violence that makes previous conflicts look restrained by comparison - neighbor fighting neighbor, former allies turned enemies, ideological differences becoming justification for atrocities that no principle could excuse.

You stand on a battlefield that represents everything you tried to prevent, surrounded by death and destruction that fills air with smoke and screams and the copper smell of blood spilled in quantities that numb mind to individual tragedy. Everything you tried to build through patient diplomacy and relationship-building has collapsed into violence and chaos that mocks your idealism, proving cynics right when they said people aren't ready for better systems, that power can only be maintained through force rather than cooperation.

Companions who survived the initial fracturing are scattered across the fragmenting kingdom - some fighting on different sides because loyalty to faction ideology overcame personal bonds, some trying desperately to broker peace between factions who no longer listen to voices of moderation, some protecting you as everything falls apart around you even though protecting failed leader might doom them to share your fate. The friendships you built couldn't withstand political pressures that pulled everyone toward tribal affiliations.

This is the price of failure that no amount of good intentions can mitigate. The kingdom you inherited with hope of transformation lies in ruins, and you must live with knowledge that your choices - whether mistakes in judgment or simply tragic misfortune of trying something difficult that proved impossible - contributed to this catastrophe.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { kieran_loyalty: 70 }
			},
			text: `Kieran fights beside you even as the kingdom burns around you with fires that consume not just buildings but hopes and dreams that once seemed achievable, his loyalty never wavering despite every rational reason to abandon failing cause and leader whose vision proved unworkable. "This isn't your fault," he says between clashes with enemies who were once fellow citizens, voice strained from exertion and emotion but still carrying conviction that you desperately need to hear. "You tried harder than anyone in history to bring peace through genuine cooperation rather than imposed submission. Offered them better future built on justice and mutual respect. Sometimes..." He blocks an attack with practiced efficiency born of years training for exactly this kind of chaos. "Sometimes people aren't ready for the better world you offered. Sometimes fear and tribalism and prejudice win despite best efforts. That doesn't mean trying was wrong - just that timing wasn't right or barriers were insurmountable."

Even in failure that might claim both your lives, his loyalty remains absolute in ways that make you simultaneously grateful for his presence and guilty that your failures might destroy him. "If we survive this - and that's increasingly uncertain given the odds we face - we'll rebuild. Maybe not the kingdom with its centuries of accumulated dysfunction, but something smaller and more manageable. A community rather than empire, built on firmer foundations with people actually ready for cooperation rather than forcing unwilling participants into structures they sabotage." His hand finds yours briefly between battles. "As long as we're together, as long as we don't give up on believing better is possible, there's hope. Not for this kingdom maybe, but for something new rising from ashes."`
		},
		{
			conditions: {
				hasHiddenAttributes: { rowan_bond: 70 }
			},
			text: `Rowan appears through the chaos of battle with grace that makes navigating war zone look easy, wild skills honed through years living outside civilization now proving valuable for survival in civilization's collapse. "We need to leave. Now. Immediately, before routes of escape close completely," they say with urgency that brooks no argument or delay. "This kingdom is finished - civil war will burn for years until exhaustion rather than resolution ends fighting, factions too committed to mutual destruction to find compromise. But you don't have to die with it. Don't have to become martyr for failed dream or sacrifice yourself for people who rejected your vision."

They extend a hand with gesture that offers salvation purchased through abandoning responsibility. "Come with me. We'll disappear into the wild places where factions don't reach and politics don't matter, survive through skills I've learned in lifetime spent outside social structures that just collapsed catastrophically, maybe find peace somewhere far from ruins of ambition. You tried to save them - genuinely tried with everything you had, every skill and resource and relationship you could mobilize. They refused salvation, chose tribal hatred over cooperation, valued ideological purity over practical survival. That's not on you. You can't save people from themselves."

It's a way out that preserves your life but abandons your duty - leaving kingdom to burn while you escape to safety with person you love, choosing personal survival over collective responsibility. The choice feels simultaneously like cowardice and wisdom, like betrayal and self-preservation. Rowan waits for answer while battle sounds grow closer and window for escape grows narrower.`
		}
	],
	choices: [
		{
			id: 'fight-on',
			text: 'Fight on - try to end the war even if it kills you',
			next: 'epilogue_reflection',
			effects: { courage: 10 },
			hiddenEffects: {
				'ending_achieved:civil_war_martyr': true,
				died_trying: true,
				tragic_hero: true
			}
		},
		{
			id: 'flee-companions',
			text: 'Flee with loyal companions - survive and rebuild elsewhere',
			next: 'epilogue_reflection',
			effects: { wisdom: 7, courage: 5 },
			hiddenEffects: {
				'ending_achieved:civil_war_exile': true,
				kingdom_lost: true,
				companions_saved: true,
				survival: true
			}
		},
		{
			id: 'negotiate-peace',
			text: 'One last attempt to negotiate peace',
			next: 'epilogue_reflection',
			effects: { charisma: 9, wisdom: 7 },
			hiddenEffects: {
				'ending_achieved:civil_war_peacemaker': true,
				fragile_ceasefire: true,
				partial_redemption: true
			}
		}
	]
};

export const WandererPath: Scene = {
	id: 'wanderer_path',
	text: `You walk away from the throne that your bloodline prepared you for since birth, from duty that prophecy and fate seemed to demand, from the weight of rulership that pressed down on shoulders never quite broad enough to bear such burden comfortably. The open road stretches before you full of possibility and freedom that throne rooms with their protocols and expectations could never contain - horizons to explore, adventures to experience, life to be lived on your own terms rather than according to inherited scripts.

Behind you the kingdom finds its own path forward without you as central figure, political forces realigning in your absence to create new equilibrium. You don't know if it will thrive or fail without your leadership - whether your abdication removed obstacle to cooperation or abandoned realm to chaos. But you've chosen personal happiness over obligation in decision that feels simultaneously like liberation and abandonment, like authentic choice and irresponsible selfishness.

Rowan walks beside you with expression of complete happiness that justifies everything you gave up to reach this moment, finally free from constraints of duty and expectation that made your relationship feel stolen rather than chosen. "This is what I always wanted for you," they say with joy that radiates like sunlight breaking through clouds. "To be free from crown and castle that would have caged who you really are beneath who you're supposed to be. No crowns weighing down authentic self, no duty demanding sacrifice of personal dreams, just the horizon stretching endlessly ahead and each other to share whatever adventures we find along the way."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { rowan_romance: 70 }
			},
			text: `Rowan takes your hand as you walk the forest path together with fingers interlacing in gesture that has become natural as breathing, leaving behind the palace and politics for wilderness that feels more like home than throne room ever did despite years of preparation. "You know what? I think you made the right choice," they say with conviction that helps quiet doubts still whispering in back of your mind about duty abandoned and responsibility shirked. "Some people aren't meant to be caged by duty even noble duty that claims to serve greater good. You would have been miserable as monarch - dutiful maybe, effective possibly, but fundamentally unhappy in ways that would have poisoned everything you built. Better to choose authentic happiness over performed duty."

They grin with expression mixing mischief and contentment and relief that years of worrying you'd choose crown over freedom have finally ended. "Now we get to adventure together forever, or at least until mortality catches up with us. See everything this world has to offer beyond palace walls and political boundaries, go everywhere curiosity leads without needing anyone's permission or having to consider diplomatic implications. Be free in ways monarchs never can be regardless of how much theoretical power they wield." They pull you close with embrace that communicates safety and belonging. "And I get you all to myself, without having to share you with an entire kingdom that would always make claims on your time and energy and emotional capacity. Selfish maybe, but honest. I want you for me, not for realm's benefit."

Their kiss tastes like freedom and joy and future without predetermined shape. This is the happy ending Rowan always wanted - not political triumph or historical significance, just personal happiness with person they love liberated from expectations that never quite fit.`
		},
		{
			conditions: {
				hasHiddenAttributes: { thorne_romance: 70 }
			},
			text: `Thorne's dragon form circles overhead as you travel with presence that transforms wandering into something between adventure and pilgrimage, ancient being choosing to share mortal's journey despite vast differences in power and lifespan. In the evenings when settling camp becomes necessary, he takes human shape that allows conversation and intimacy impossible in draconic form, and walks with you through landscapes he's watched change over millennia of solitary observation.

"For centuries - no, for multiple human lifetimes stacked one upon another until the number loses meaning - I wandered alone," he says with voice carrying weight of accumulated years most beings cannot imagine surviving. "Watched kingdoms rise with hope and fall with tragedy, observed mortals live and love and die in cycles that made attachment seem pointless because loss was inevitable. Having someone to share the endless years with rather than just witnessing them pass in isolation... it changes everything fundamentally. Transforms time from burden to gift, makes immortality feel less like curse when there's companionship rather than just loneliness."

He looks at you with ancient eyes that somehow manage tenderness despite having witnessed countless mortal lifespans flicker and fade. "You gave up an empire that would have made you powerful and historically significant for freedom that most people with power never choose because letting go feels like losing. That choice - valuing authentic self over inherited role, prioritizing personal truth over collective expectations - that's more worthy than any crown or kingdom or conquest could ever be. More courageous than battles, more admirable than building empires. I find that worthy of love and respect in ways rulership never could inspire."

Together, you'll explore the world for as long as your life lasts with Thorne's magic perhaps extending those years beyond normal human span if you desire - and perhaps beyond even that if deeper transformation becomes possible. Wandering not alone but together.`
		},
		{
			conditions: {
				hasHiddenAttributes: { kingdom_prospers: true }
			},
			text: `News reaches you months later through travelers and traders whose paths intersect with yours in remote villages and trading posts - the kingdom found peace without you after initial chaos of power vacuum resolved into new equilibrium. Your abdication removed you as lightning rod for factional conflict, made you symbol each side could invoke without having to actually deal with your real presence making decisions that inevitably disappointed someone. Removing yourself as point of conflict allowed factions to compromise in ways they couldn't while you represented specific choices that required taking sides.

It's bittersweet discovering you weren't needed after all - that everything you thought essential about your role could be fulfilled by someone else or restructured so role itself became unnecessary. Part of you feels relieved that kingdom didn't collapse into chaos proving your importance. Part of you feels diminished by realization that personal significance was perhaps illusion, that systems matter more than individuals within them. Part of you wonders if all the anxiety about duty and responsibility was misplaced, if taking yourself so seriously was form of arrogance assuming you were irreplaceable when actually you were just one more person in historical flow that continues regardless of any single participant.

Maybe that's okay though - maybe the best rulers are the ones who know when to step aside, who recognize that clinging to power or importance often does more harm than relinquishing it gracefully. Maybe your legacy isn't what you built while in power but what you enabled by getting out of the way when your presence became obstacle rather than asset.

At least you're happy in ways you never were in palace, even if you sometimes wonder what might have been had you chosen differently. Freedom has its own value beyond historical significance or political impact.`
		}
	],
	choices: [
		{
			id: 'peaceful-wandering',
			text: 'Embrace peaceful wandering - find joy in freedom',
			next: 'epilogue_reflection',
			effects: { wisdom: 8, charisma: 6 },
			hiddenEffects: {
				'ending_achieved:wanderer_peaceful': true,
				found_happiness: true,
				duty_abandoned: true
			}
		},
		{
			id: 'wandering-regret',
			text: 'Wander but carry regret about abandoning responsibility',
			next: 'epilogue_reflection',
			effects: { wisdom: 9 },
			hiddenEffects: {
				'ending_achieved:wanderer_regret': true,
				haunted_by_choice: true,
				melancholy_freedom: true
			}
		}
	]
};

export const ArchmageRuler: Scene = {
	id: 'archmage_ruler',
	text: `The Starfall Ruins transform into a new capital that defies conventional architectural categories - a place where magic flows freely without the suppressions and limitations that human civilization traditionally imposed out of fear, and all races walk as equals because magical power matters more than species or bloodline when determining status and influence. You've become something unprecedented in recorded history and legendary in prophecy: a magical sovereign who unites realms through power and wisdom rather than conquest and subjugation, through demonstrated mastery that earns respect rather than inherited authority that demands obedience.

The Crystal Heart pulses at the center of the city with rhythm that synchronizes with your heartbeat in ways that blur boundary between artifact and person, its restored power channeling through you in flows that would have killed lesser mages but which you've learned to modulate and direct with increasing sophistication. Your mastery of blood magic that manipulates life force itself, elemental control that bends fire and water and earth and air to your will, rune craft that inscribes power into permanent structures, and spirit communion that bridges mortal and otherworldly realms has reached legendary levels that inspire awe and caution in equal measure.

Representatives of all five magical races bow when you pass not out of fear that compels performance of respect, but genuine respect earned through power that protects rather than threatens them, wisdom that includes rather than excludes them, character that proves worthy of authority rather than corrupted by it. You've proven through actions spanning years that power can serve wisdom rather than corruption consuming wisdom - that strength and ethics aren't opposed but complementary when wielded by someone committed to justice rather than just dominance.

This is the rarest ending prophesied by seers and dreamed of by scholars who studied ancient texts describing magical renaissances that transformed civilization - the magical golden age that idealists believed possible but cynics dismissed as fantasy incompatible with reality's constraints.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { lyra_romance: 70 }
			},
			text: `Lyra stands beside you as equal partner in this magical sovereignty that neither of you could have achieved alone, partnership that combines your blood magic mastery with her two centuries of elven mystical tradition into synthesis that creates wonders never before seen in recorded history or legendary tales. Together your combined abilities don't just add but multiply, creating possibilities that individual mastery could never approach - healing that reverses aging and cures supposedly incurable conditions, protective wards that shield entire populations from magical threats, transformations that blur species boundaries in ways that expand rather than erase identity.

"We're going to live for centuries together," she says with joy and wonder that makes two-hundred-year-old elf sound young and amazed, voice carrying excitement about future that extends beyond normal human lifespan limitations. "Your blood magic manipulating life force combined with my elven longevity that naturally extends years - they've merged in ways I didn't predict but now recognize as inevitable. You won't age normally anymore. The usual human progression from youth to middle age to elderly decline has been disrupted, replaced with something closer to elven timeframe that measures lives in centuries rather than decades."

She kisses you deeply with passion intensified by relief from fear that has haunted her through previous relationships. "I've lost everyone I loved to time - watched human friends and lovers age and die while I remained unchanged, buried partners whose lives flickered past in what felt like moments from my perspective, learned to guard my heart against attachments that would inevitably end in grief. But not you. Never you. You'll be with me for centuries, maybe longer if we continue exploring magical possibilities for life extension. We have eternity to build this dream together, perfect this magical renaissance, explore what partnership means when time stops being enemy that steals loved ones."`
		},
		{
			conditions: {
				hasHiddenAttributes: { thorne_romance: 70 }
			},
			text: `Thorne in dragon form circles your magical city that rises from ruins into unprecedented glory, living symbol of the dragon-human alliance that once seemed impossible but now represents foundation of new civilization. His aerial presence reminds everyone that this sovereignty rests on cooperation between species rather than dominance of one over others. When he takes human shape beside you for private moments or public ceremonies requiring speech rather than symbolic flight, there's profound satisfaction in his ancient eyes that have witnessed empires rise and fall but never seen anything quite like what you've built together.

"In three thousand years spanning epochs that reduced mountains to plains and transformed coastlines beyond recognition, I never thought I'd see this," he says with voice carrying weight of accumulated centuries that makes his wonder especially meaningful. "All races united not through conquest that breeds resentment or treaties that paper over genuine conflict, but through genuine cooperation built on mutual respect and shared vision. Magic flourishing instead of being suppressed from fear. Humans reaching their true potential instead of limiting themselves through prejudice and willful ignorance. This is what I hoped for but stopped expecting after too many disappointments across millennia."

He takes your hand with touch that bridges vast differences in age and nature. "And I never thought I'd find a mortal worth loving who wouldn't die after mere century leaving me alone again to carry memories and grief through ages that make even happy recollections painful because they're so far past. Your magical power hasn't just extended your life - it's fundamentally altered your nature in ways that make you closer to dragon than human in terms of lifespan."

Your magical mastery has altered your expected lifespan beyond normal human parameters, extending years into centuries or possibly beyond. You'll live for ages alongside Thorne in partnership that spans geological time rather than fleeting mortal spans, perhaps forever if magical research continues unlocking secrets of immortality. The impossible romance between dragon and human becomes eternal rather than tragic.`
		}
	],
	choices: [
		{
			id: 'magical-utopia',
			text: 'Build magical utopia - perfect synthesis of power and wisdom',
			next: 'epilogue_reflection',
			effects: { wisdom: 15, courage: 10, charisma: 12 },
			hiddenEffects: {
				'ending_achieved:archmage_perfect': true,
				magical_renaissance: true,
				legendary_ending: true,
				immortality_achieved: true
			}
		},
		{
			id: 'magical-burden',
			text: 'Accept burden of magical sovereignty - power is lonely',
			next: 'epilogue_reflection',
			effects: { wisdom: 12, courage: 8 },
			hiddenEffects: {
				'ending_achieved:archmage_burdened': true,
				powerful_but_isolated: true,
				price_of_power: true
			}
		}
	]
};

export const ShadowThrone: Scene = {
	id: 'shadow_throne',
	text: `The palace has transformed into something dark and terrible that makes visitors feel cold dread in their bones before they even understand what they're seeing - architecture twisted by shadow magic until familiar spaces become alien and threatening, light failing to reach corners that seem to extend into impossible dimensions, air thick with corruption that tastes like despair on the tongue. Shadow magic permeates every stone in ways that can't be cleansed without destroying the structures themselves, infection sunk too deep for purification rituals or counter-spells to reach. The corruption you embraced initially as necessary expedient or calculated risk has consumed you completely, turning you into the very thing you once fought against with righteous conviction that now seems like distant memory or someone else's story.

You sit on a throne of darkness that manifests from shadow rather than being carved from stone or forged from metal, power beyond mortal measure at your fingertips ready to reshape reality according to your will, but utterly alone in ways that make absolute power feel like punishment rather than privilege. Every companion who loved you for who you were rather than what you could do for them has either fled in horror when they recognized what you were becoming, died trying to stop your transformation while there was still person worth saving beneath corruption, or been twisted into something unrecognizable by the same darkness that consumed you - their essential selves erased by corruption that leaves only shells performing parodies of former personalities.

This is the price of choosing power over principle that seemed like practical choice or lesser evil at the time, corruption over compassion that felt like strength rather than weakness, domination over cooperation that appeared to be effective rather than just satisfying. You've become the tyrant the realm feared - not despite your intentions but because intentions matter less than actions, because road to darkness is paved with rationalizations that made each step seem justified even as overall trajectory led toward destination you claimed to oppose.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { shadow_romance: 70, shadow_redeemed: 100 }
			},
			text: `Shadow stands beside your dark throne as the only one who remained through your transformation into something that resembles the person they once loved only in shape but not substance, the only companion whose own darkness makes them capable of existing in corruption that drove others away or destroyed them. But even they look troubled and conflicted in ways visible despite their usual ability to mask emotions behind practiced indifference, their expression mixing love that hasn't died despite everything with horror at what that love has become witness to and perhaps enabled through staying rather than leaving when intervention might have mattered.

"I hoped you'd be different," they say quietly with voice carrying disappointment that cuts deeper than anger could because it comes from someone who rarely allows themselves hope precisely because disappointment hurts more than cynical expectations. "I thought you could wield darkness without being consumed by it like I was, that you had strength of character or moral foundation that would let you use shadow magic as tool rather than becoming its instrument. But you've become what I was before redemption - what I'm still trying to escape from even as I watch you embrace it. Power without restraint, domination without mercy, corruption justified through rationalization that sounds like wisdom until examined closely."

They look at you with mixture of love and horror that makes their face painful to witness. "I can't save you if you don't want to be saved - redemption can't be imposed from outside but has to come from internal recognition that current path leads nowhere worth reaching. And I can't become this again, not even for you, not even for love that survived so much already. I've spent years climbing out of darkness you're descending into. I won't fall back just to keep you company in the abyss."

Even your darkest companion, your partner in shadows who understood corruption from inside and loved you despite seeing your capacity for darkness, is preparing to leave. Soon you'll be alone with your power, ultimate isolation that makes absolute authority feel like ultimate punishment.`
		}
	],
	choices: [
		{
			id: 'embrace-darkness',
			text: 'Embrace the darkness completely - become shadow sovereign',
			next: 'epilogue_reflection',
			effects: { courage: 12 },
			hiddenEffects: {
				'ending_achieved:shadow_complete': true,
				fully_corrupted: true,
				dark_god: true,
				everyone_gone: true
			}
		},
		{
			id: 'final-redemption',
			text: 'One last attempt at redemption - can corruption be reversed?',
			next: 'epilogue_reflection',
			effects: { courage: 10, wisdom: 8 },
			hiddenEffects: {
				'ending_achieved:shadow_redemption': true,
				fighting_corruption: true,
				desperate_salvation: true
			}
		}
	]
};

import { Scene } from '../../story-manager';

// Act 4 - Final Epilogue: Ten Years Later

export const EpilogueReflection: Scene = {
	id: 'epilogue_reflection',
	text: `**Ten Years Later**

You stand at the same balcony where your journey began all those years ago when you were uncertain heir carrying weight of prophecy and bloodline without understanding what either truly meant, looking out over a kingdom transformed by your choices in ways both obvious and subtle. A decade has passed since the moment that defined your reign - the critical decision about how to rebuild civilization from fragments of what came before, the choice that set trajectory for everything that followed. Ten years that felt simultaneously like lifetime and like yesterday, years that aged you in ways calendar cannot measure.

Time has revealed the consequences of every decision with clarity that immediate aftermath never provides - the fruit of every relationship now visible in children raised and alliances maintained, the legacy of every sacrifice measured in lives saved or opportunities lost, the ripples of actions spreading outward until they touched shores you never anticipated. The kingdom reflects your vision like mirror showing not just what you intended but what you actually created, revealing gaps between aspiration and achievement - for better or worse, for triumph or tragedy, for satisfaction or regret.

As you reflect on these years with perspective only distance can provide, you consider the question that haunts every ruler in quiet moments: Was it worth it? Did the sacrifices purchase something valuable, or just different? Did you create the world you hoped for, or discover that hoping was naive fantasy that reality inevitably mocks? Did you become the person you wanted to be, or someone circumstance demanded you become instead?`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'unity_perfect', seraphine_romance: 70 }
			},
			text: `The kingdom flourishes in unprecedented harmony that would have seemed like impossible fantasy when you first inherited throne and title. All races work together not just in grudging cooperation born of necessity but in genuine partnership built on mutual respect and shared vision, their different gifts and perspectives combining into synthesis stronger than any single tradition could achieve alone. Prosperity reaches every corner of the realm from wealthy capital districts to remote farming villages, material comfort distributed more equitably than any previous age managed because systems prioritize collective welfare over concentrated privilege. The golden age you dreamed of during idealistic moments has become measurable reality rather than just rhetorical promise.

Seraphine emerges onto the balcony where you stand wrapped in contemplation, now your spouse and co-ruler in legal fact and daily practice rather than just unofficial partnership. Two children - your heirs who represent future of this unified kingdom - play nearby with spontaneous joy that children only display when safe and loved, their laughter ringing pure and joyful in way that reminds you what all the political struggle was ultimately for. They play together without the consciousness of rank or protocol that will be trained into them later, enjoying fleeting moment of childhood freedom before duty's weight descends.

"Ten years," she says slipping her hand into yours with casual intimacy that once would have been scandalous for noble woman of her background but now feels natural as breathing, warmth of her touch grounding you in present moment after drifting through memories and reflections. "And it keeps getting better rather than declining into maintenance mode or slow decay. The parliament just passed the education reform we've been advocating for years - free schools for all children regardless of birth or species, human and magical races alike learning together from earliest ages so prejudice never takes root. Curriculum designed cooperatively by scholars from every tradition. This is transformation happening at generational level."

She kisses your cheek with affection that hasn't faded despite decade of marriage and daily proximity. "We built something beautiful together through partnership that honored both our strengths. And it will outlast us by centuries, carried forward by children we raised and systems we established. That's immortality more meaningful than any magic could provide - living on through positive impact that continues after individual lives end."

Below in the main square visible from your vantage point, citizens of all races celebrate the anniversary of unification with festivals that blend traditions from every culture into joyful hybrid. Elves dance with humans in movements combining both styles. Dwarven merchants trade fairly with fae artisans, their goods displayed side by side. Dragon ambassadors converse cordially with merfolk diplomats, species that once avoided each other now collaborating on environmental protections that benefit all.

You achieved the impossible dream that cynics dismissed as naive idealism incompatible with reality's constraints. And you're deeply, completely happy in ways that transcend political satisfaction to touch something more fundamental about meaning and purpose and love.`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'unity_perfect', kieran_romance: 70 }
			},
			text: `The United Kingdom thrives under your guidance that balanced visionary idealism with practical implementation, dreams with realistic assessment of what people were actually ready for. Kieran, now Lord Commander of a reformed military that serves all people equally rather than functioning as enforcement arm of noble privilege, stands beside you in formal uniform that somehow manages to make military discipline look compatible with genuine warmth. His presence grounds you when philosophical reflection threatens to spiral into abstraction - he represents honor made manifest in action rather than just theory.

"The last border skirmish ended three years ago," he reports with satisfaction that comes from seeing principles validated by results rather than just asserted by authority. "With all races cooperating on defense through integrated command structures and shared intelligence networks, no external threat stands a chance against our combined capabilities. And internal crime has dropped by half according to latest reports - turns out people don't rebel or turn to illegal activity when they feel heard by governance systems and see legitimate paths to improving their circumstances. Justice that serves everyone reduces desperation that breeds crime."

He sets aside formality to embrace you with physical affection that took years to become comfortable displaying because military training taught emotional restraint as professional necessity. "You know what the best part is? I serve justice through military structures reformed to prioritize protection over domination, and love the ruler who shaped those reforms through moral leadership. No conflict between duty and heart that once felt insurmountable. I can be soldier and lover simultaneously, honorable warrior and devoted husband in same breath." He smiles with expression that transforms his usually serious face. "Though our son inheriting both your magical talent and my combat skills is going to make him either an incredible leader who combines wisdom with strength, or unstoppable troublemaker who uses both gifts for mischief. Time will tell which."

Your child practices sword forms in the courtyard below with concentration that mirrors Kieran's discipline, watched over by companions who've become extended family rather than just political allies. This is the life you built together through choosing partnership over isolation - honor, love, and peace woven into daily existence rather than just aspirational values.`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'unity_perfect', lyra_romance: 70 }
			},
			text: `A century wouldn't be enough to build what you've achieved according to conventional human timescales, but a decade has shown its foundation is solid enough to withstand stresses that fracture lesser structures built on less genuine cooperation. Lyra stands beside you looking barely aged at all despite ten years passing - elven longevity that once felt like curse because it meant watching everyone she loved grow old and die now transformed into blessing because you're aging differently than normal humans.

"The Magical Academy graduated its first class last month," she says with pride that vibrates through her usually composed voice, two hundred years of accumulated disappointment finally giving way to hope validated by tangible achievement. "Human, elven, dwarven, and fae students learning together from masters of every tradition, sharing knowledge that was previously guarded by species boundaries and cultural suspicions. My people haven't shared magical knowledge with outsiders in two thousand years - we've been secretive to point of paranoia, protecting our arts from human exploitation or misunderstanding. You changed everything by proving humans could be trusted with power if given respect instead of just feared for capacity to abuse it."

She touches your face gently with fingertips that trace subtle changes marking decade's passage. "And the ritual worked beyond my most optimistic projections - your lifespan extended through combination of blood magic mastery and elven longevity magic that I never thought could merge successfully. We'll have centuries together, not just decades before mortality tears us apart. Multiple human generations to watch your vision develop and mature." Her eyes shine with tears of joy that she doesn't try to hide. "I won't lose you to time like I lost everyone else I loved. We can build this dream through generation after generation, adapting as needed but maintaining core principles that make it work."

Your children - half-elven hybrid that genetics said shouldn't be viable but love made possible, incredibly gifted in magic that draws from both bloodlines - represent the future you're creating through your example. A world where bloodlines don't divide populations into separate categories, but unite them through literal family bonds. Where hybrid heritage is celebrated rather than stigmatized. Where love transcends species barriers that once seemed absolute.`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'democratic_ceremonial', sage_romance: 70 }
			},
			text: `From your modest home near the parliament building that replaced palace as center of political power, you watch democracy flourish with satisfaction that comes from seeing dream realized even if implementation differs from initial vision. You hold no official power now according to formal structures - constitutional position reduced to ceremonial figurehead who cuts ribbons and attends festivals - but your influence as elder statesperson who shaped the revolution remains respected by those who value lived experience and moral authority over institutional hierarchy.

Sage bursts through the door with characteristic enthusiasm that age hasn't diminished, eyes alight with excitement that makes him look young despite gray threading through hair and lines marking face. "The agricultural reform passed! And the vote wasn't even close - seventy-three to twenty-seven with broad coalition support rather than narrow factional victory. They're learning to compromise and cooperate across ideological differences rather than demanding absolute adherence to pure platforms. Democracy maturing into something functional rather than just theoretical."

As Chancellor of the new University that replaced old aristocratic academies with genuinely open institutions, he's helped educate a generation in democratic ideals and critical thinking, teaching young people to question authority while respecting legitimate expertise. And as your husband in marriage that scandalizes traditionalists but inspires progressives, he's given you a life of intellectual partnership and deep love that enriches everything else.

"We did it," he says holding you close with embrace that communicates gratitude and affection and wonder that reality exceeded expectations. "Power to the people manifested in actual institutions rather than just slogans. Real representation where voices matter regardless of birth or wealth. And we get to watch it grow from generation to generation, see children raised in democracy taking for granted freedoms our generation had to fight for." He kisses you with tenderness that hasn't faded. "Growing old together while the world gets better through systems we helped establish - I couldn't ask for more meaningful life than this."`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'wanderer_peaceful', rowan_romance: 70 }
			},
			text: `The campfire crackles in wilderness far from any kingdom or capital city, far from politics and duty and the weight of other people's expectations pressing down until breathing becomes difficult. You and Rowan have spent a decade wandering together through forests and mountains and coastlines, adventuring without destination, living free from duty and constraint that made throne room feel like cage regardless of how gilded its bars.

"Best decision you ever made," Rowan says stretched out contentedly under the stars with expression of complete satisfaction that justified every sacrifice required to reach this moment, every obligation abandoned and every expectation disappointed. "Choosing happiness over obligation to abstract concepts like duty and legacy. Choosing to actually live rather than just existing in role someone else scripted for you before you were born."

Word reaches you occasionally through travelers and traders about the kingdom you left behind when you abdicated rather than accepting crown. It found its own path forward without you as central organizing figure - sometimes good according to reports that mention reforms and improvements, sometimes troubled according to rumors about factional conflicts and policy failures, but surviving and continuing regardless. World didn't end just because you stopped trying to save it single-handedly.

"No regrets?" Rowan asks already knowing the answer from ten years of observing your genuine contentment, but enjoying hearing you confirm it aloud.

"None," you reply honestly with conviction that comes from lived experience rather than defensive rationalization. With them you've seen wonders that throne rooms never reveal, had adventures that political life precludes, lived fully and authentically rather than performing role for audience that never stops watching. This simple freedom - waking each morning and choosing day's direction without consulting advisors or considering diplomatic implications - means more than any crown or historical legacy could ever provide.

Rowan grins and pulls you close with casual affection that never requires performance or protocol. "Good. Because I plan to keep you for at least another decade of wandering. Maybe a lifetime if you'll have me, growing old together on our own terms rather than society's schedule."

It's not the epic legacy you once imagined when young and idealistic about changing world. But it's your legacy - happiness chosen deliberately despite pressure to prioritize others' expectations, authentic life rather than performed duty. And you're happy in ways that transcend ambition. That's enough. More than enough.`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'archmage_perfect', thorne_romance: 70 }
			},
			text: `From the heights of your magical capital that rose from Starfall Ruins into something unprecedented in recorded history, you survey a civilization transformed by synthesis of magic and wisdom that cynics claimed impossible. Magic and technology blend seamlessly in architecture that combines aesthetic beauty with functional enchantment - buildings that heat themselves, lights that respond to thought, transportation systems powered by elemental forces bound ethically rather than exploited cruelly. All races contribute equally to a renaissance of art, science, and mysticism that draws from every tradition's strengths while avoiding each culture's historical blind spots.

Thorne in dragon form lands beside you on platform designed to accommodate his massive draconic presence, then shifts to human shape that allows conversation requiring nuanced verbal communication. After three thousand years of life spanning geological epochs and witnessing countless civilizations rise and fall in patterns that made mortal efforts seem futile, he's found something he never expected - purpose beyond mere existence, meaning beyond just accumulating experiences until they blur together into undifferentiated eternity.

"The Arcane Council just proposed expanding the portal network to include the Fae Wildlands," he reports with satisfaction about proposal that once would have been rejected as impossible given fae notorious reclusiveness. "Even the fae are coming out of isolation to join your vision after millennia of avoiding other races. They see something worth participating in rather than just observing from distance."

He takes your hand feeling the immortality that magic has granted you through transformations that extended lifespan far beyond human norms into something approaching draconic permanence. Your lifespan extended through blood magic manipulation and arcane transformation means you'll live centuries, perhaps millennia alongside him rather than flickering out after mere decades. "When we met during your early uncertain days, you were a lost noble with a dangerous bloodline and no understanding of your potential," he reflects with voice carrying weight of millennia. "Now you're the Archmage Sovereign, architect of a magical golden age that scholars will study for ages, my eternal partner in project that spans geological time rather than human generations." He smiles - a rare expression that makes ancient dragon look almost young despite eyes that witnessed prehistory. "Worth waiting three thousand years for someone like you."

Together you watch your city of wonders sparkle under the sunset with lights magical and mundane creating beauty that transcends either source alone, knowing you have ages ahead to keep building this dream and discovering what becomes possible when power serves wisdom rather than corruption consuming wisdom.`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'traditional_progressive', rowan_romance: 70 }
			},
			text: `The kingdom maintains traditional structures providing stability and continuity that conservative factions demanded as non-negotiable requirements for cooperation, but infuses them with progressive heart that transforms appearance of conservatism into substance of reform - clever political compromise allowing gradual change without triggering reactionary backlash from those who fear transformation. Your reforms have improved countless lives measured by literacy rates climbing as education expands, health outcomes improving as medical access broadens, economic opportunity increasing as mobility barriers lower - all while preserving institutional stability that prevents chaos feared by those who've lived through periods of violent upheaval. It's delicate balance requiring constant attention to framing that presents reform as natural evolution rather than radical revolution.

Rowan visits rarely because they fundamentally can't stand court life for longer than few days before claustrophobia sets in from being surrounded by political maneuvering and formal protocols that feel suffocating to someone who values authenticity and freedom - but when they do appear climbing through your window rather than using the formal entrance like normal visitors specifically because thumbing nose at protocol amuses them and reminds you why you love them, their love is fierce and absolutely undiminished by time or distance that would erode weaker connections. Each reunion feels like coming home emotionally even when you never physically left this place.

"Still don't understand intellectually why you chose the crown when freedom called to you as strongly as it calls to me," they say, kissing you deeply with passion that makes you forget about the stack of documents awaiting signature on your desk. "But I understand emotionally why I chose you despite this complication. You make even monarchy bearable by being so damn principled about it, using power to serve rather than dominate in ways that make me believe institutional authority doesn't inevitably corrupt everyone who wields it. You're the exception that proves the rule, or maybe the proof that rules aren't absolute when people genuinely try."

It's not ideal situation for either of you measured against what perfect compatibility would look like - your relationship must be somewhat secret because tradition doesn't easily accept a monarch's unconventional romance with wandering ranger who refuses to play court games, requiring discretion that sometimes feels like hiding something beautiful rather than protecting something precious. Conservative advisors pretend not to notice while progressive allies quietly approve but can't publicly celebrate without triggering backlash. But the stolen moments are precious beyond measure, worth all the complications they create through sheer intensity of genuine connection surviving obstacles that destroy performative relationships.

"Next month, disappear for a week claiming royal business requiring personal attention," Rowan suggests with mischievous smile that still makes your heart race after all these years together. "Tell them you're on inspection tour of remote provinces or diplomatic mission requiring absolute discretion - invent whatever excuse maintains plausible deniability. We'll actually be camping in the mountains being normal people in love without titles or responsibilities, just two souls who found each other against all odds and refuse to let circumstances separate them permanently."

You agree immediately because these escapes preserve sanity making monarchy sustainable rather than soul-crushing. It's sophisticated compromise between competing values - duty and freedom, tradition and happiness, political necessity and personal fulfillment, balanced precariously but balanced nonetheless through conscious effort. Not everyone could manage this tightrope walk between public role and private self, but you've learned to navigate it through love that makes challenges worthwhile.

**Traditional Progressive Ending: Balanced Reform**

*You achieved gradual reform while maintaining stability, improved lives without triggering backlash, and found love that survives despite complications inherent in your position. Not revolutionary transformation but sustainable improvement - sometimes wisdom lies in recognizing how much change system can absorb without breaking. You balanced competing values better than most rulers manage, finding middle path between extremes. Well done.*`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'military_just', kieran_romance: 70 }
			},
			text: `The kingdom runs with military precision and efficiency that makes administrators from neighboring realms visit specifically to study your systems hoping to replicate successes while avoiding pitfalls, but serves justice faithfully rather than merely imposing order through authoritarian force that confuses compliance with cooperation. You and Kieran have created an order that protects citizens from external threats and internal crime without oppressing them through surveillance state tactics or arbitrary enforcement that characterizes military regimes prioritizing control over welfare. This delicate balance between security and freedom requires constant calibration but proves sustainable when leadership genuinely cares about distinction.

He stands beside you reviewing reports at attention maintaining formal posture appropriate to military command structure even in private moments from habit so deeply ingrained that relaxation requires conscious effort, then deliberately relaxes into your embrace as official business concludes and personal connection resumes - transition that symbolizes healthy separation between public role and private relationship. "The patrol reports are all clear across all sectors," he says with satisfaction earned through hard work creating systems that actually function as designed rather than just looking impressive on paper. "Crime rates down forty percent over five years through combination of better training, fair enforcement, and social programs addressing root causes. Morale up according to anonymous surveys we conduct quarterly. No internal conflicts between military and civilian authorities beyond minor jurisdictional disputes resolved through established protocols. The system works when properly implemented and constantly refined."

His loyalty never wavered even during crisis periods when doubting your judgment would have been easier path offering escape from association with controversial decisions that affected his reputation as well as yours, and over the years professional partnership deepened into romantic love that's unshakeable precisely because it survived stress tests that expose weakness in relationships built only on attraction or convenience. Your marriage scandalizes traditionalists who believe mixing military command with romantic partnership creates improper entanglement compromising chain of command, but inspires commoners who see it as proof that honor and love can coexist without one corrupting the other when both parties maintain integrity - visibility matters for social change normalizing what prejudice labeled impossible.

"Our daughter starts knight training next month when she turns twelve meeting minimum age requirements," he says with pride that father and military commander share equally viewing her through both lenses simultaneously. "She's got your strategic mind analyzing situations from multiple angles before committing to action, and my combat instincts reacting decisively when analysis must yield to action under time pressure. Gods help any enemy who faces her when she reaches full potential combining our strengths while avoiding our weaknesses. We're raising the next generation of honorable warriors who understand that strength serves justice rather than dominating for its own sake."

You've built a military state that some philosophers criticize as inherently problematic regardless of implementation because it normalizes violence as solution to social problems, yes - that criticism has merit you acknowledge during honest private reflection. But it's one guided by honor codes that constrain behavior and justice principles that direct application toward legitimate protection rather than oppression, making it far better than tyranny that uses military power to crush dissent and extract resources from unwilling population. Not perfect measured against pacifist ideals that may be admirable but prove impractical given human nature and external threats, but genuinely good measured by realistic standards accounting for complexity of governance requiring hard power for legitimate security functions. And you've built it together, as equal partners in governance sharing decision-making authority and in life sharing emotional intimacy and daily experience of building family.

**Just Military Ending: Principled Order**

*You built military state that serves justice rather than merely imposing order, finding partner who shares both professional commitment to honorable service and personal commitment to loving partnership. Not everyone's ideal government structure, but implemented with integrity that makes it work far better than cynics predicted. You proved that military precision can coexist with human compassion when leadership genuinely cares about distinction. Well done building something that balances strength with fairness.*`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'civil_war_exile' }
			},
			text: `The kingdom you tried to save tore itself apart. You and a handful of loyal companions fled, building a new life far from the ashes of your failed dream.

The small community you've established thrives modestly. Former nobles work alongside former servants. The companions who stayed with you have become family in the truest sense.

You failed at grand ambitions. But you saved the people you loved, and built something small but genuine.

"You know," says one of your companions over dinner, "we might have lost the kingdom. But we found something better - a place where people matter more than power."

It's a hard truth to accept. Your legacy is failure on the grand stage. But perhaps success in what actually matters - keeping loved ones safe and finding peace despite loss.`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'shadow_complete' }
			},
			text: `The dark palace stands isolated and feared by all who know of its existence, avoided by travelers who detour miles to circumvent territory you control through shadow magic that corrupts land itself. You command immense power that could reshape reality according to whim - power beyond measure that mortals barely comprehend and magical beings fear for good reason because you've demonstrated willingness to use it without restraint or mercy.

Every companion who loved you for who you were rather than what you could do for them is gone - fled in terror when they recognized corruption consuming person they cared about, died trying to stop your transformation while there was still something worth saving beneath darkness, or twisted beyond recognition by same shadow magic that consumed you until nothing remains except shells performing parodies of former personalities. The corruption you embraced initially as calculated risk or necessary expedient to achieve goals consumed everything good in your life systematically and thoroughly.

You sit on your shadow throne as sovereign of a realm of terror where obedience comes from fear rather than respect, surrounded by power but utterly alone in ways that make that power feel like punishment rather than reward. Some nights in moments of unwanted clarity, you hear their voices like ghosts haunting memory - Lyra's laughter that once brightened dark moments, Kieran's honor that once provided moral compass, Rowan's freedom that once showed alternative to duty's cage, Sage's idealism that once inspired better choices. Echoes of the life you could have had if you'd chosen differently at critical junctures, phantoms of relationships destroyed by corruption you invited in.

This is the price of choosing corruption over compassion in series of decisions that seemed rational at the time - absolute power purchased through sacrificing everything that made wielding power meaningful, absolute isolation resulting from driving away everyone who saw you as person rather than just instrument, absolute regret that comes from understanding too late what you traded for strength. Was it worth it? In your darkest moments of honesty that pierce through rationalizations, you know the answer is no. But it's far too late to turn back now. The path to redemption requires vulnerability you've systematically eliminated, humility you've rejected, connections you've destroyed. You're trapped in prison of your own making, locked in by choices that can't be undone.`
		},
		{
			conditions: {
				hasHiddenAttributes: { unity_successful: true, all_companions_alive: true }
			},
			text: `The anniversary celebration fills the palace with joy and music spilling from grand ballroom into gardens where additional guests mingle under lanterns, commemorating ten years since the impossible achievement that cynics dismissed as naive fantasy but which you somehow managed to accomplish through combination of skill, luck, and stubborn refusal to accept that unity was impossible just because it was difficult. All your companions attend dressed in formal attire ranging from elegant gowns to decorated military uniforms - even those you didn't romance remain close friends and trusted advisors whose bonds survived transition from adventure companions to governance colleagues, loyalty based on genuine affection rather than just professional obligation or political calculation.

Seraphine manages diplomatic affairs with grace that makes visiting ambassadors actually look forward to negotiations instead of dreading them as usual, transforming tedious bureaucratic process into elegant dance where everyone leaves feeling they gained something valuable. Lyra leads the Magical Academy that's become premiere institution on continent where talented students from all backgrounds learn advanced techniques previously hoarded as proprietary secrets by self-interested groups. Kieran commands reformed military forces focused on protection rather than conquest, creating honor culture where soldiers take pride in safeguarding rather than dominating. Sage serves as Chancellor overseeing domestic policy with gentle wisdom that considers long-term consequences instead of just addressing immediate crises. Rowan scouts borders keeping you grounded in reality when court politics threaten to disconnect you from actual conditions experienced by common people living far from palace. Finn oversees infrastructure projects connecting kingdom through improved roads and bridges making travel safer and commerce easier. Marina maintains ocean alliances with mer-people and coastal communities creating maritime cooperation that benefits all parties. Shadow runs intelligence networks finally using skills for good purposes gathering information to prevent threats rather than manipulating situations for personal gain. Thorne serves as dragon ambassador negotiating with ancient creatures whose perspectives span centuries. Zephyr connects you to fae realms maintaining relationships with mercurial beings most humans never encounter.

Each found their perfect place in the world you built together through gradual process of discovering where talents matched needs, and whether you chose romantic partnership with one or remained platonic friends with all maintaining appropriate boundaries, the bonds endure strengthened by shared accomplishments and mutual respect that survives disagreements inevitable among strong personalities. Nobody got everything they wanted - compromise requires sacrifice from all parties - but everyone got something meaningful from collaboration that wouldn't have been possible through isolated individual effort.

"Look what we created together," your closest companion says whether that's romantic partner or best friend depending on choices made throughout journey, surveying the celebration of unity with expression combining satisfaction at achievement with gratitude for relationships that made it possible. "All of us, together despite our different backgrounds and initial conflicts. Different paths that brought us here, different dreams that we harmonized into shared vision, but one genuinely shared commitment to building something better than what we inherited. Some said it couldn't be done, that we were too different to truly cooperate. We proved them wrong."

This is your legacy measured not just by territories ruled or policies implemented but by people who matter - not just a kingdom representing abstract political entity existing on maps, but a found family of allies who changed the world through collective effort and who genuinely care about each other beyond just professional relationships or political alliances of convenience. And it's beautiful in ways that make all the struggles worthwhile when you see it manifested in celebration where all races and factions mingle peacefully because they chose to rather than being forced to by authority imposing false harmony.

**United Kingdom with All Companions: The Found Family**

*You achieved unity across all factions while maintaining relationships with every companion who survived through your careful attention to their needs and concerns. This represents extraordinary achievement requiring both political skill and emotional intelligence balancing competing demands. You built not just functional kingdom but genuine community of people who care about each other. Well done - this is one of the happiest possible endings where you truly got to have your cake and eat it too. Treasure it.*`
		},
		{
			conditions: {
				hasHiddenAttributes: { fragile_peace: true }
			},
			text: `The kingdom holds together through sheer determination and constant vigilance rather than natural cohesion, but barely maintaining equilibrium requiring exhausting attention to every potential flashpoint that threatens to ignite wider conflict. Tensions simmer just beneath the surface always threatening to boil over when stress tests system reveal weaknesses in institutional structures holding together groups that fundamentally mistrust each other despite official proclamations of unity. Your compromise solution crafted through difficult negotiations satisfies absolutely no one completely when measured by their ideal preferences - each faction feels they sacrificed too much and gained too little, though objective analysis might conclude burden shared relatively fairly given impossible constraints. But at least it prevents open war that would cost thousands of lives and set region back generations, maintaining functional governance through pragmatic arrangements even if not idealistic transformation.

It's exhausting work that drains you physically and emotionally, constantly mediating between factions who view every policy decision through lens of ethnic favoritism and bring ancient grievances to modern disputes, preventing conflicts before they escalate beyond diplomatic resolution into violence requiring military intervention, maintaining the delicate balance where no single group feels oppressed enough to rebel while none feels powerful enough to dominate. You age faster than you should from the stress visible in lines creasing face and gray threads appearing in hair years earlier than genetics would predict, tension residing permanently in shoulders that never fully relax even during nominal rest periods. Sleep comes fitfully interrupted by nightmares about scenarios where balance tips and kingdom explodes into violence you've worked so hard to prevent.

But it's objectively better than civil war that alternative leadership might have allowed through either authoritarian oppression provoking rebellion or weak governance permitting factional violence to escalate unchecked. Better than tyranny that maintains order through fear creating peace defined only as absence of open conflict while suffering continues hidden from official statistics. Not the golden age you dreamed of when you began this journey full of idealistic ambition to genuinely transform society into cooperative community transcending historical divisions - that dream proved impossible given reality of human nature and accumulated historical trauma. But functional governance that keeps people safe from warfare and adequately fed through economic policies, maintains infrastructure sufficiently that life continues improving slowly rather than regressing, and preserves possibility that future generations might achieve what yours couldn't given more time for healing. That's something worth continuing to work toward even when exhaustion tempts toward resignation.

"You're still here fighting for this when you could walk away, still trying despite clear evidence that perfect success won't be achieved in your lifetime," observes a loyal companion who remained through all the difficulties when others sought easier postings serving more successful rulers. "That counts for something valuable that cynics dismiss. Most rulers would have given up by now and either embraced authoritarianism promising order through oppression or abdicated responsibility when idealistic hopes proved unrealistic. But you persist in difficult middle path requiring constant effort."

Perhaps that's enough to justify the work consuming your life - not perfection measured by ideal standards that no complex society ever achieves because humans remain imperfect creatures making mistakes even with best intentions, but persistent honest effort toward something genuinely better than current state even if ultimate goal remains unreachable. The work continues one exhausting day at a time, building incrementally toward future you might not live to see but which your efforts make more possible. That's the nature of real social change - it's gradual, frustrating, incomplete, yet absolutely necessary for progress to occur at all.

**Fragile Peace Ending: The Mediator's Burden**

*You maintained peace through constant exhausting effort when easier paths offered escape through either authoritarian domination or resigned abdication. The kingdom didn't achieve unity but avoided civil war. Not glamorous, not satisfying, but deeply necessary work that prevents tragedy even if it doesn't create triumph. Well done - you bore burden that would have broken weaker rulers, choosing responsibility over comfort. Sometimes heroism looks like quietly preventing disasters rather than dramatically achieving victories.*`
		}
	],
	choices: [
		{
			id: 'satisfied',
			text: 'I am satisfied with my legacy - I did my best',
			next: 'final_reflection',
			effects: { wisdom: 10 },
			hiddenEffects: {
				'final_sentiment:satisfied': true,
				peace_achieved: true
			}
		},
		{
			id: 'regretful',
			text: 'I have regrets - I would change much if I could',
			next: 'final_reflection',
			effects: { wisdom: 8 },
			hiddenEffects: {
				'final_sentiment:regretful': true,
				lessons_learned: true
			}
		},
		{
			id: 'determined',
			text: 'The work continues - my legacy is still being written',
			next: 'final_reflection',
			effects: { courage: 8, wisdom: 7 },
			hiddenEffects: {
				'final_sentiment:determined': true,
				ongoing_mission: true
			}
		},
		{
			id: 'proud',
			text: 'I am proud of everything we accomplished together',
			next: 'final_reflection',
			effects: { charisma: 10, wisdom: 8 },
			hiddenEffects: {
				'final_sentiment:proud': true,
				triumphant_legacy: true
			}
		}
	]
};

export const FinalReflection: Scene = {
	id: 'final_reflection',
	text: `As the sun sets on another day in the kingdom shaped by your choices casting golden light across landscapes transformed by decade of sustained effort, you allow yourself a moment of quiet reflection that daily responsibilities usually preclude. The urgent demands of governance constantly press forward, but this evening you pause to look backward and assess trajectory.

The journey from uncertain heir burdened by prophecy to established ruler confident in vision transformed you in ways you never imagined when first stepping onto this path. Every choice about policy and relationship, every relationship built through patient listening and genuine care, every sacrifice made for collective welfare rather than personal advantage shaped not just the kingdom's development but your very soul's evolution - changed who you are at fundamental level beyond superficial role-playing.

Whatever path you chose from options presented at critical junctures, whatever ending you achieved through accumulation of decisions both major and minor, one truth remains undeniable regardless of how history eventually judges you: you changed the world in measurable ways. For better according to those who benefited from your vision, or worse according to those who opposed your choices - but either way your mark on history is indelible rather than ephemeral. Future generations will debate your legacy, analyze your decisions, study your reign as case study in leadership and morality.

The future stretches ahead unknown and full of possibility that both excites and intimidates, shaped by foundations you established but not determined by them. The story of your reign will be told for generations in forms you cannot control - a tale of blood magic inherited and mastered, political intrigue navigated with varying success, impossible romance pursued despite obstacles, and the eternal question that every ruler must answer: what does it mean to rule well? Not just effectively or successfully by measurable metrics, but well in moral sense that transcends pragmatic achievement?

You've found your answer through lived experience rather than abstract philosophy. And though others may judge it differently based on their values and perspectives, you know in your heart whether you became the monarch you hoped to be when journey began - whether you stayed true to core principles or compromised them beyond recognition, whether you served collective welfare or personal ambition disguised as service.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'unity_perfect', final_sentiment: 'proud' }
			},
			text: `You achieved the impossible according to every cynic and realist who dismissed unity as naive fantasy incompatible with reality - genuine cooperation across all peoples and factions that previous generations assumed would remain forever divided. The golden age that historians will call your reign analyzing it in texts and teaching it to students has truly begun with momentum that suggests sustainability rather than just temporary alignment of interests. This is transformation at civilizational level, not just political arrangement that will collapse when circumstances change.

As you look out over celebrations of the anniversary filling streets with joy that spans all demographics, surrounded by companions who became family through bonds deeper than political alliance and loved ones who share your life in ways both public and intimate, profound satisfaction fills you with warmth that transcends mere pride in achievement. This feeling combines professional accomplishment with personal fulfillment, intellectual vindication with emotional completeness.

"We did it," you whisper to yourself and to whatever gods might listen from realms beyond mortal perception. "We actually did it despite all the obstacles and opposition and moments when failure seemed inevitable. Built something that works not just in theory but in practice, not just for privileged few but for everyone regardless of birth or species."

The kingdom you leave to future generations whenever your reign eventually ends is objectively better than the one you inherited by any reasonable metric - more just in its laws, more prosperous in its economy, more inclusive in its governance, more peaceful in its internal relations. The relationships you built enriched countless lives beyond just your own, creating web of connection that holds society together through shared affection rather than just institutional structures. The love you found - whether romantic partnership or deep friendship depending on choices - sustains you through every challenge and gives meaning that transcends political legacy.

This is what heroism looks like in reality rather than legend - not just dramatic battles against obvious evil though you had those too, but the patient work of building bridges between hostile parties, earning trust from skeptical populations, and choosing compassion even when power tempts toward domination because easy path rarely leads anywhere worth reaching.

Your story ends in triumph measured not just by metrics but by lives improved and connections forged, surrounded by love that validates everything you sacrificed to reach this point, leaving a legacy that will shine for centuries as example of what becomes possible when leadership prioritizes collective welfare over personal aggrandizement.

**Perfect Ending Achieved: United Kingdom**

*You successfully united all factions and races through genuine respect rather than forced compliance, maintained relationships with all companions through consistent care, chose wisely at every critical juncture guided by principles rather than expedience, and built a golden age that will last for generations sustained by systems rather than just individual virtue. This is the best possible ending requiring optimal choices throughout entire journey. Well played - genuinely extraordinary achievement.*`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'archmage_perfect' }
			},
			text: `You transcended the fundamental limitations of human mortality itself through mastery of arcane forces that previous generations barely understood in theoretical terms let alone controlled with precision sufficient to alter biological reality at cellular level, becoming something existing in liminal space between ordinary mortal and immortal legend that stories describe but historians doubt. The Archmage Sovereign whose magical renaissance cascading outward from your capital through Academy graduates and infrastructure projects reshaped civilization across entire region transforming backwards superstition into enlightened understanding, primitive techniques into sophisticated practice. This achievement represents culmination of lifetime study compressed through necessity into mere decades intensely focused on specific goal rather than leisurely academic exploration.

Your city of wonders glows beneath you from observation platform at apex of central tower as sun sets painting sky in colors enhanced by permanent enchantments you layered throughout construction creating aesthetic effects that serve no practical purpose beyond beauty but which make this place feel more magical than mere mundane architecture could achieve. All races contribute to this new golden age of magical development as equals sharing knowledge freely rather than hoarding secrets according to tribal boundaries, creating collaborative environment producing innovations exponentially faster than isolated individual research could generate. Elves teach patience and centuries-long perspective, dwarves contribute engineering precision translating theory into functional implementation, humans add creative urgency pushing boundaries forward, orcs bring practical battle-magic experience connecting abstract principles to real-world applications. The synthesis creates something greater than any single culture could build in isolation.

And you have centuries stretching into millennia to witness it all flourishing beyond initial foundations into iterations you can barely imagine from current vantage point limited by imagination shaped by mortal experiences despite immortality transforming physical form. The immortality magic granted through ritual requiring year of preparation and resources that would bankrupt small kingdom means this ending represents not conclusion but beginning of journey measured in timescales ordinary humans cannot comprehend emotionally even if they grasp concept intellectually. Death becomes abstraction rather than inevitable destiny approaching inexorably with each passing year.

"What will we do with eternity?" your immortal partner asks from position beside you sharing this moment as countless future moments stretch ahead without predetermined limit creating both opportunity and weight of infinite possibility that can feel overwhelming when contemplated directly. They achieved same transcendence through your guidance making them only person capable of truly sharing this existence spanning ages rather than mere decades.

You smile with expression combining satisfaction at achievement with anticipation for future discovery and deep contentment in partnership that will last as long as you both choose to continue rather than being terminated by natural death arriving unbidden. "Build wonders that previous generations could only dream about. Explore mysteries hidden in reality's deepest layers waiting for minds patient enough to investigate thoroughly across centuries of careful study. Love deeply without shadow of inevitable loss darkening every moment with awareness of approaching mortality. Live fully experiencing everything existence offers without artificial deadline imposed by brief human lifespan." You gesture expansively at the transformed world spreading below - magical capital gleaming, Academy towers rising gracefully, portal network nodes glowing at strategic points creating transportation infrastructure connecting distant cities. "We've only just begun scratching surface of what becomes possible when you have literally all the time existence offers to pursue perfection."

Your story doesn't end with death's finality but transforms into new chapter written across timescales that make ordinary human reigns seem brief moments barely worth recording in histories you'll write personally centuries from now after witnessing consequences play out completely rather than speculating about them from position of mortality limiting observation to fragment of full pattern.

**Legendary Ending Achieved: Immortal Archmage Sovereign**

*You mastered all magical disciplines transcending mortality itself, achieved unity across all races through wisdom rather than conquest, found eternal partnership eliminating loneliness from immortality, and built magical capital that will serve as beacon throughout ages inspiring countless generations. This represents the rarest and most difficult ending to achieve requiring optimal magical choices, perfect unity achievement, and deep romance all simultaneously. Extraordinary play - genuinely legendary accomplishment that few players will ever see. You achieved literal transcendence.*`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'wanderer_peaceful' }
			},
			text: `You chose happiness over legacy measured in territories controlled or histories written, freedom over duty imposed by circumstances beyond your control and expectations from societies demanding leaders sacrifice themselves for collective welfare, love over power that corrupts even those with best intentions through slow accumulation of compromises that individually seem reasonable but collectively transform character. The world judges such choices differently depending on who's doing the judging and what values they prioritize - historians write dismissively about monarchs who "abandoned responsibility" while romantic poets celebrate those who "chose authentic living" with same action interpreted opposite ways depending on philosophical lens applied. But you sleep peacefully every night without nightmares about decisions that got people killed or political compromises that betrayed principles, rest coming easily to those unburdened by weight of kingdoms resting on shoulders that never asked for that responsibility in first place.

The campfire crackles merrily sending sparks upward into night sky filled with stars unobscured by city lights or smoke from industrial centers, primitive simplicity that paradoxically feels more authentic than palace luxuries ever did despite objective comfort differences. Your partner sleeps contentedly beside you wrapped in simple blanket with expression of genuine peace that palace life never granted them despite silk sheets and servants attending every need - turns out comfort comes from emotional security rather than material excess, revelation that privileged classes often fail to learn spending lifetimes pursuing wrong goals. Tomorrow you'll wake with sunrise as natural alarm rather than heralds announcing schedule, eat simple breakfast cooked over campfire rather than elaborate meals prepared by professional chefs, and wander onward through countryside experiencing life directly rather than ruling it from administrative distance that transforms real people into abstract statistics on reports requiring signature.

"Some might call this running away from responsibility," you muse quietly to stars that don't judge or expect anything beyond being themselves without apology. "Certainly that's how official histories will record it if they mention me at all - footnote about monarch who abdicated during critical period. But it feels like running toward something better that previous position made impossible despite all the advantages theoretically available to those with power. Running toward authenticity, toward direct experience, toward life lived according to internal values rather than external expectations imposed by tradition or political necessity."

No crown weighs literally or metaphorically on your head leaving pressure marks on forehead and tension in neck muscles from constant awareness of authority's burden. No decisions determine whether thousands of people live or die creating moral weight that crushes some rulers into paralysis or pushes others toward callousness as defensive mechanism against empathy that would make governance impossible if felt fully. Just you, your loved ones who chose to share this wandering existence despite options to remain in comfortable positions serving new regime, and the freedom to live authentically according to values you discovered through journey rather than inherited from predecessors or absorbed from culture surrounding you.

History may forget you completely as monarchs who don't do anything "important" in conventional sense of military victories or architectural legacies fade from records that prioritize dramatic narratives over quiet happiness. But you'll remember these happy years with crystalline clarity as best period of existence measured by satisfaction rather than achievement, by love rather than power, by freedom rather than duty. And honestly, that feels like the better deal when you actually experience both sides of comparison rather than idealizing crown from distance while never bearing its weight personally.

Your story ends not with dramatic finale but gentle fade into peaceful life unmarked by historians yet deeply meaningful to those who live it directly, choosing small authentic joys over grand hollow ambitions.

**Freedom Ending Achieved: The Wanderer's Path**

*You chose authentic happiness over imposed duty, freedom over power, love over legacy measured by conventional historical metrics. This ending requires deliberately rejecting throne after all the struggle to reach it - paradoxically difficult choice because you must first earn power before you can authentically choose to release it rather than just failing to achieve it initially. You discovered that ruling well sometimes means recognizing you're not meant to rule at all. Well played - it takes wisdom to recognize happiness when it doesn't match society's expectations.*`
		},
		{
			conditions: {
				hasHiddenAttributes: { ending_achieved: 'shadow_complete' }
			},
			text: `Power absolute and unchallenged by any force in realm or beyond borders where weaker kingdoms watch nervously wondering when you'll turn attention toward them. Isolation complete and total as every personal connection severed through process of transformation that consumed humanity replacing it with something darker and colder. Corruption triumphant having claimed soul inch by inch through thousand small compromises that individually seemed manageable but collectively reshaped fundamental nature of who you are beneath conscious awareness of changes accumulating. This is what victory looks like when defined by shadow's terms - technically successful by narrow metrics of control exerted and enemies defeated, but hollow in ways that matter more than power despite what ambition insisted during ascent.

You sit alone in your dark palace that echoes emptily despite servants who fear you too much to qualify as company, master of all you survey from throne that nobody dares approach except by explicit summons delivered through terrified intermediaries, loved by absolutely none though many perform convincing simulations of affection motivated by terror rather than genuine feeling. The choices that led here seemed reasonable at the time you made them incrementally rather than all at once - just a little more power than strictly ethical to handle immediate crisis, just a little darker magic than advisors recommended when conventional approaches proved too slow, just a few more compromises with conscience that protested weakly but eventually fell silent through habituation to moral injury accumulating over years. Each individual step justifiable in context of circumstances, yet somehow the accumulated path leads somewhere you never intended to reach when you began journey with noble intentions intact.

Now you understand truth that shadow carefully concealed behind seductive promises of strength: the shadow promised strength that would let you protect everyone you cared about and accomplish all your goals without being constrained by weakness that forced previous rulers into impossible choices, but delivered loneliness so profound that silence echoes more loudly than crowds used to roar recognition. You conquered the kingdom through combination of military force, magical domination, and political manipulation eliminating all opposition, but lost your soul through incremental bargains that seemed practical at time but whose cumulative cost exceeds any benefit gained. You gained everything measurable by conventional metrics of success defined by fools who confuse power with accomplishment, and lost what matters in ways that wealth and armies cannot compensate for no matter how vast resources accumulated.

Some nights when sleep eludes you despite magical aids that should force rest, you imagine turning back time like arcane theory suggests might be possible with sufficient power though no practitioner has ever successfully achieved temporal manipulation, and choosing differently at each critical juncture where you took step toward darkness instead of holding firm to principles that once seemed inviolable. Saving Thorne from whatever darkness claimed them through support instead of using their fall as opportunity. Rejecting shadow's whispers instead of listening as reasonable alternative perspective. Prioritizing relationships over power accumulation. But those are just fantasies that torture you with impossible alternatives that closed off the moment you made actual choices locking in their consequences. This is your reality now and forever - the price of choosing power over people despite every warning from companions you dismissed as naive, corruption over compassion despite knowing intellectually that cruelty corrodes those who practice it regardless of justifications offered.

The throne is yours. The kingdom conquered. Victory achieved by every metric you once thought mattered. And yet somehow you lost everything that actually matters in ways you only recognize now when it's too late to recover what was carelessly discarded during pursuit of power that promised fulfillment but delivered only appetite that grows stronger the more it's fed.

**Dark Ending Achieved: The Shadow Throne**

*You fully embraced corruption through series of choices that individually seemed manageable but collectively transformed you into the tyrant you once opposed when opposing tyrants felt like heroic calling rather than ironic foreshadowing. This is objectively a bad ending measured by human flourishing metrics rather than just power accumulated, but one achieved through consistent dark choices made deliberately across entire journey rather than accidentally stumbling into through naivety. You saw the path clearly illuminated by warnings from companions and chose to walk it anyway to its inevitable conclusion. Sometimes the tragedy lies not in failing to achieve your goals, but in succeeding at pursuing the wrong ones.*`
		},
		{
			conditions: {
				hasHiddenAttributes: { civil_war_begun: true }
			},
			text: `The attempt at unity failed catastrophically in ways that retrospectively seem inevitable given centuries of accumulated hatred that your mere years of effort couldn't overcome despite genuine commitment and considerable political skill. War still rages across the lands tearing apart communities that briefly experimented with cooperation before reverting to tribal violence when stress tested by crisis, and you live in exile beyond borders you once ruled with those companions who remained loyal through failure when most advisors and allies melted away seeking more promising patrons offering better prospects. This is bitter ending to grand ambition that began with such hope, reduction of sweeping vision to small survival focused on protecting few rather than transforming many.

It's not the ending you envisioned when you began this journey full of idealistic confidence that good intentions combined with determination could overcome historical obstacles that defeated countless predecessors who presumably also believed themselves exceptional. You failed at the grand ambition that defined your entire reign and consumed enormous resources both material and emotional. Couldn't bridge divides too deep to cross even with all the tools of statecraft at disposal and companions providing expertise you lacked personally. Couldn't overcome centuries of mistrust accumulated through genuine historical grievances rather than just irrational prejudice with mere years of effort no matter how sincere or skillful that effort. The mathematics of healing simply didn't work out in your favor - some wounds cut too deep to heal in single generation requiring patience that political timelines don't permit.

But you saved those closest to you from worst consequences when you could have easily sacrificed them to preserve political position a bit longer before inevitable collapse. Built a small community based on genuine care rather than political necessity where people actually like each other instead of just tolerating proximity due to shared factional identity. Found some measure of peace despite overwhelming failure to achieve stated goals, discovering that human connection matters more than legacy measured by historians who write from perspective of those prioritizing grand narratives over individual lives. Your exile community functions better than many kingdoms function because authentic relationships scale better downward than forced unity scales upward.

"We tried," a loyal companion reminds you quietly during evening meal shared around communal table that feels more genuine than state dinners ever did despite crude wooden construction versus palace grandeur. "Sometimes trying isn't enough measured by outcome, but it still matters that we did try authentically rather than just performing gestures while pursuing different agenda. History may not care about sincere failure, but those who lived through it recognize the difference between leaders who genuinely attempted unity versus those who cynically manipulated concept for personal power."

Your legacy is complex and deeply uncomfortable - ambition that inspired hope, failure that produced tragedy, survival that preserved nucleus of goodness from complete destruction, small redemptions that matter to individuals even if historians dismiss them as footnotes. History will judge harshly from perspective of those who measure success only by kingdoms ruled and wars won rather than lives touched and communities built. But those who actually know you personally rather than as abstract historical figure will remember you tried sincerely, cared genuinely, and preserved what mattered most when grand vision collapsed around you. That's something, even if it's not enough to salve pain of watching kingdom tear itself apart because you couldn't hold it together despite everything you sacrificed attempting to.

**Tragic Ending Achieved: Civil War and Exile**

*Unity failed catastrophically and the kingdom fractured into war that continues unabated years later. You survived maintaining personal integrity but couldn't save your grand vision from historical forces too powerful to overcome. A bittersweet ending - total failure measured by stated goals, modest success measured by human connection and personal values. Sometimes the world doesn't reward virtue with victory, teaching hard lessons about limitations of individual agency against historical momentum. You tried your best. History may not care, but those who know you do.*`
		},
		{
			conditions: {
				hasHiddenAttributes: { final_sentiment: 'satisfied' }
			},
			text: `As you reflect on your reign from vantage point of years that grant perspective impossible to achieve in thick of daily crises demanding immediate decisions, satisfaction settles over you like a warm blanket providing comfort without pretense of perfection. Not perfect measured by idealistic standards that no human ruler ever actually achieves despite what propaganda claims about golden ages that never quite existed as advertised - you made mistakes including ones with serious consequences that keep you awake some nights replaying different choices. But good measured by realistic comparison to alternative possibilities that could have unfolded if different person held this position with different values and priorities. Not effortless as naive stories suggest heroism should be - you worked exhaustingly hard making countless sacrifices of comfort and personal preference to serve collective welfare. But worthwhile measured by lives improved and suffering reduced through policies you championed despite opposition from entrenched interests resistant to change.

You made mistakes repeatedly throughout your reign - who doesn't when navigating impossibly complex situations with incomplete information under time pressure that prevents thorough analysis? Appointed wrong people to critical positions trusting those who ultimately betrayed that trust. Compromised on issues where holding firm might have produced better outcomes. Missed opportunities that only become visible in hindsight after consequences reveal patterns invisible during events themselves. But you tried your best given limitations of knowledge and circumstances, stayed true to core principles even when pressure tempted toward expedient betrayal of values, built relationships that mattered to you personally beyond just political utility, and left the kingdom objectively better than you found it by most reasonable metrics even if utopian transformation proved unreachable. That honest assessment feels more valuable than either false modesty or inflated ego.

"I'm satisfied," you say aloud to the sunset painting sky in colors that have witnessed countless rulers across history coming and going while nature persists indifferent to human drama. "I did what I could with what I had inherited and circumstances I couldn't control. That's enough for peace of mind even if not enough for legendary status in histories written centuries from now. I'm at peace with my choices even while acknowledging their imperfections."

Your companion whether romantic partner who shares both bed and counsel or dear friend who remained loyal through crises when others abandoned you agrees quietly with soft sound of understanding that doesn't require elaborate verbal articulation. You built something real together that transcends political achievements - genuine human connection surviving stress that destroys weaker bonds. That's the legacy that matters more than territorial control or economic statistics when you're old reflecting on life measuring success by contentment rather than conquests.

The sun continues setting as it always does regardless of human accomplishments or failures, indifferent celestial body that will outlast every kingdom and remember none of the rulers who thought themselves important. But you built something good enough while you had the chance. Loved deeply. Governed honestly. Made difference to real people even if historians barely notice your reign when writing about this era centuries hence. That satisfaction transcends fame - it's the peace that comes from authentic effort rather than performance, from sincerity rather than image management, from knowing you actually tried to do right thing even when it cost you personally.

**Good Ending Achieved: Satisfied Reign**

*You led with integrity throughout your reign, stayed true to core principles despite temptations and pressures, built meaningful relationships that enriched your life and others', and left kingdom better than you found it measured by honest assessment rather than propaganda. Not perfect - you made mistakes and acknowledged them rather than covering up failures. But genuinely good measured by realistic standards that account for complexity of governance. You found peace with your choices and satisfaction in your relationships. Well played - sometimes the good ending is simply being able to sleep peacefully knowing you did your honest best with sincere intentions.*`
		},
	],
	choices: [
		{
			id: 'the-end',
			text: 'Reflect on the journey and close the book',
			next: 'credits',
			effects: {},
			hiddenEffects: {
				story_complete: true,
				journey_ended: true
			}
		}
	]
};

export const Credits: Scene = {
	id: 'credits',
	text: `**Simple Journey: A Journey Begins**

*A story of inheritance, magic, love, and the weight of choices that define who we become when tested by power.*

IDEAS:

---

**Your Final Statistics:**

• **Courage:** [calculated based on brave choices throughout journey]  
• **Charisma:** [calculated based on diplomatic successes and relationships]  
• **Wisdom:** [calculated based on strategic decisions and long-term thinking]

**Relationships Formed:** [count of companions with 50+ trust who considered you friend]  
**Romances Pursued:** [active romance partners who shared your heart and life]  
**Faction Alliances:** [final faction standings showing who you united or alienated]  
**Ending Achieved:** [ending type representing culmination of your choices]

---

**Thank you for playing SimpleJourney!**

What story will you tell next?*

**Begin a new journey to discover paths not yet traveled.**`,
	choices: [
		{
			id: 'play-again',
			text: 'Begin a new journey',
			next: 'P1',
			effects: {},
			hiddenEffects: {
				new_game_plus: true
			}
		},
		{
			id: 'exit',
			text: 'Close the book',
			next: 'credits',
			effects: {},
			hiddenEffects: {
				story_ended: true
			}
		}
	]
};

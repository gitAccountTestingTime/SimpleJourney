import { Scene } from '../../story-manager';

const fragmentsAssembled = `All five fragments of the Crystal Heart lie arranged before you in the ancient pattern - five shards that once formed the kingdom's soul, scattered across centuries of chaos and desperate hope, now reunited through blood and sacrifice and choices that haunt you even as they empower you. Each fragment pulses with its own distinct energy: the first thrums with defensive wards, the second hums with binding magic, the third crackles with raw elemental power, the fourth whispers of connection and communication, the fifth - the one you nearly died obtaining - burns with the terrifying potential for transformation or destruction. Together, they cast dancing shadows across the chamber, illuminating faces you have come to love and trust through trials that should have broken lesser souls.

Your companions stand at your side - not servants awaiting orders, but equals who have walked through fire with you and emerged changed. Those who have stayed loyal through everything: through your mistakes and triumphs, through moments when you inspired them and moments when you failed them, through battles won by brilliance and battles won by sheer desperate refusal to surrender. Some bear visible scars from the journey. Others carry wounds that run deeper, etched into hearts and minds by choices that cost more than blood. But they stand here. They chose to stand here. That matters more than any oath of fealty.

Beyond your intimate circle, representatives of the magical races watch from the chamber's periphery - elven observers with eyes that have seen centuries pass, dwarven witnesses whose ancestors helped forge the original Heart, dragon-kin whose kind remember when this kingdom was young, merfolk ambassadors who carry the hopes of their underwater cities, fae representatives whose ageless faces show rare investment in mortal affairs. They wait, patient and anxious in equal measure, to see if you can succeed where your ancestors failed. Where generations of heroes attempted and fell short. Where the weight of expectation has crushed so many who came before. This is your moment. Your test. Your chance to prove that this generation, this motley collection of scarred survivors and unlikely allies, can accomplish what centuries of tradition and prophecy could not.`;

const finalThreat = `General Blackwood makes his final move for power even as the chamber shakes with dimensional instability - his loyalist forces attempting a coup precisely when you are most vulnerable, most committed to the ritual, least able to defend against treachery born of ambition and fear of change. Outside these walls, his soldiers move through the palace halls, seeking to claim the throne before you can restore what was broken. It is brilliant timing, you must admit. Horrifying, but brilliant.

And beneath that immediate mortal threat, something far more ancient and far more terrible stirs in the spaces between worlds. The Shadowrealm threatens to break through completely, drawn by the concentration of magical power, by the beacon of light you are about to create, by the dimensional scars left from centuries of improper patchwork repairs to barriers that should have been tended with care and knowledge your kingdom lost generations ago. Shadow Beasts mass at the weakened points in reality, clawing at the fabric of existence with hunger that knows no reason, no mercy, no negotiation. If you fail now - if the ritual is interrupted or executed incorrectly - those barriers will shatter entirely. The invasion will be total. Unstoppable.

The kingdom teeters on the edge of a blade balanced between chaos that will consume everything and renewal that could reshape the world into something better. One choice. One ritual. One moment that contains all possible futures compressed into crystalline probability. Everything you have fought for, everyone who has died believing in you, every promise you have made and hope you have inspired - all of it hangs suspended in this terrible, beautiful, impossible moment.`;

const ritualRequirement = `The fragments pulse with power in response to your royal blood - not metaphor but literal truth as magic recognizes the genetic markers that have been passed down through forty-seven generations, written into DNA alongside eye color and predisposition to stubbornness. The Crystal Heart was designed this way deliberately, bound to your bloodline as safeguard and limitation, promise and prison. Only those who carry this specific magical signature can attempt the restoration. And only those willing to pay the cost can succeed.

To restore the Crystal Heart, you must pour your very essence into it - not merely magic in the abstract sense, but the fundamental energy that makes you yourself rather than simply a body occupying space. Your magic, yes, but also your will, your consciousness, your sense of identity, your vision for the future. The ritual requires everything: every ounce of power you have cultivated, every scrap of determination you have forged in the fires of impossible choices, every dream you hold for what this kingdom could become if given the chance. You will put yourself into this artifact, permanently alter it with your intentions, shape its function according to your deepest beliefs about what power should mean and who deserves to wield it.

The process will hurt. The ancient texts are quite clear about that, in the few passages that survived burning and censorship and the simple erosion of time. It will feel like dying, like being unmade and remade, like pouring yourself out until nothing remains and then somehow continuing to pour. You will be changed by this. There is no returning to who you were before you became the living conduit between broken artifact and restored power. The you standing here will cease to exist, replaced by someone similar but fundamentally transformed. Whether that transformation leads to transcendence or trauma, the texts do not say. Perhaps both. Perhaps neither. Perhaps something language has no words for.`;

const marcusQuestion = `Marcus speaks quietly from his position near the chamber entrance, where he has stationed himself to watch for Blackwood's forces, voice carrying despite its softness because the magical acoustics of this ritual space were designed to amplify whispers of power: "This is it. Everything we have fought for comes down to this moment. All the battles and betrayals, all the alliances forged and promises made, all the people who believed in us and people we failed - it all crystallizes here, now, in whatever choice you make next." He turns to meet your eyes, and you see reflected in his expression the weight of his own journey, his own transformation from pragmatic survivor to someone who dares to hope. "What kind of kingdom will you create? What vision will you burn into this artifact that will shape policy and possibility for generations? Choose carefully. Choose true. This is not the time for compromise or political calculation. This is the time to reach deep and pull out whatever truth lives at your core, however terrifying or beautiful that truth might be."`;

// Act 4 Climax - Sample Ending Structure
export const Act4Climax: Scene = {
	id: 'act4_climax',
	text: `${fragmentsAssembled}

${finalThreat}

${ritualRequirement}

${marcusQuestion}`,
	textVariants: [
		{
			conditions: { hasFlags: ['loyalist_path_confirmed:true', 'seraphine_becomes_advisor:true'] },
			text: `${fragmentsAssembled}

Seraphine stands at your right hand - not merely physically present but symbolically positioned in the place traditionally reserved for the chief advisor, the most trusted voice, the one who speaks when the monarch cannot. She has earned this position through brilliance and sacrifice, through nights spent negotiating impossible compromises and days spent navigating political minefields that would have destroyed lesser diplomats. The Loyalist nobles behind you carry the weight of tradition and expectation like mantles woven from centuries of accumulated precedent, their faces showing mixtures of hope and anxiety because you represent both continuity and unpredictable change.

${finalThreat}

Marcus nods approvingly from his watchpoint, rare smile crossing his usually guarded features. "You chose the path of tradition. Not blindly, not without question, but deliberately after weighing alternatives. Now prove that tradition can be wise rather than merely rigid. Show them that honoring the past does not mean being imprisoned by it. Make your ancestors proud not by copying them, but by being worthy of the legacy they built."

${ritualRequirement}

"You carry your ancestors' legacy in your blood and bones," Seraphine says quietly, her voice pitched for your ears alone though others in the chamber can surely hear. "Honor them, respect what they built, learn from what they achieved. But do not be bound by them. Do not let their ghosts make choices your living heart knows are wrong. They created the foundation. You will build the house. Make it beautiful. Make it true."`
		},
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true', 'progressive_ruler:true'] },
			text: `${fragmentsAssembled}

Your coalition of reformers, commoners, and progressive nobles stands united behind you - not the seamless unity of uniform ideology, but the messy, vibrant, quarrelsome unity of diverse people who have chosen to work together despite disagreements because they share belief in fundamental change. This is the moment you have been building toward through countless compromises and bold stands, through speeches that inspired and mistakes that taught, through patient listening and decisive action. This is proof that change can work, that tradition is not the only path to stability, that new does not automatically mean chaos.

${finalThreat}

Vale squeezes your hand with fierce pressure, fingers interlacing with yours in gesture that grounds you when magic threatens to pull your consciousness apart. "We have fought for this. Bled for this. Lost friends and sleep and innocence for this. A kingdom that serves everyone, not just the powerful. Where commoner children can dream as big as noble heirs. Where your worth comes from who you are and what you do, not from the accident of which family claimed you at birth. Make it real. Make it happen. Show them we were right to believe."

${ritualRequirement}

"Show them the future," Sage urges with the passionate intensity they bring to all intellectual pursuits, but amplified now by emotion that makes their voice crack. "A kingdom built on wisdom and shared power, not just ancient bloodlines and inherited privilege. A place where knowledge matters more than pedigree, where merit opens doors that used to require noble blood. You have the chance to reshape everything. Do not waste it on half-measures or timid reforms. Be bold. Be revolutionary. Be the change they told us was impossible."`
		},
		{
			conditions: { hasFlags: ['military_alliance_confirmed:true'], hasHiddenAttributes: { kieran_loyalty: 60 } },
			text: `${fragmentsAssembled}

Kieran and the military stand ready in formation that speaks of discipline earned through shared hardship rather than mere obedience to hierarchy, loyal to you personally more than to any institution or abstract ideal of monarchy. You have earned their respect through action rather than birthright, through fighting beside them rather than commanding from safety, through remembering their names and honoring their sacrifices in ways that made them feel seen as individuals rather than interchangeable soldiers. That loyalty, freely given rather than demanded, feels more precious than any crown.

${finalThreat}

General Blackwood's betrayal stings like acid in an open wound - the man who should have been your greatest military asset revealed as traitor and usurper, ambition overriding honor, fear of change trumping decades of service. But Kieran's unwavering support steadies you when your confidence falters. "We follow you," Kieran says firmly, steel in every syllable, hand resting on sword hilt in unconscious gesture of protective readiness. "Not the crown. Not the institution. Not the abstract concept of monarchy or the mystical authority of bloodlines. You. The person who saw us as human beings worth dying for. The leader who earned trust rather than demanding it. Where you go, we go. What you build, we will defend."

${ritualRequirement}

${marcusQuestion}`
		},
		{
			conditions: { hasFlags: ['independent_path_confirmed:true', 'chosen_own_path:true'] },
			text: `The fragments glow with inner light that casts dancing shadows across faces that have become more precious to you than crowns or kingdoms, and your assembled companions - the strange, beautiful, improbable coalition you have built through authenticity rather than political calculation - wait with you in this moment that contains all possible futures compressed into crystalline decision. Humans, elves, dwarves, and more. Not bound together by faction politics or temporary alliance of convenience, but by genuine friendship forged in the fires of shared struggle and nurtured through moments of vulnerability that created bonds stronger than steel or magic.

Rowan grins with fierce joy that makes their whole face luminous, eyes bright with the kind of happiness that only comes from witnessing someone you love finally, fully choosing themselves. "This is what it was always meant to be. What it should have been from the beginning, before politics and power corrupted simplicity. Unity by choice, not force. Cooperation born of mutual respect rather than hierarchical compulsion. Friendship rather than servitude. You rejected every easy path, every traditional power structure that would have made this simpler but less true. You built something new from scratch. Now comes the moment to prove it can work, to show that bonds freely chosen are stronger than chains inherited."

You have rejected traditional power structures not from rebellion for its own sake but because they felt wrong at soul-deep level, incompatible with your truth. You built something new and uncertain and fragile. Now comes the moment to prove it was not foolish idealism but functional wisdom, to demonstrate that another way exists.`
		},
		{
			conditions: { hasFlags: ['magical_races_priority:true', 'respected_all_cultures:true'] },
			text: `${fragmentsAssembled}

The magical race representatives - Moonwhisper with her timeless elven grace and eyes that hold centuries of memory, the Dragon Matriarch whose presence fills the chamber with barely contained power and ancient wisdom, Corallia whose scales shimmer with ocean depths and whose voice carries harmonics from underwater kingdoms - stand with you as equals rather than subjects or supplicants. You have earned their trust by seeing them as people with inherent worth rather than as tools to be used or threats to be managed, by honoring their cultures rather than demanding assimilation, by listening rather than commanding. That respect, reciprocated across species barriers that have divided these peoples for generations, represents achievement more significant than any military victory.

${finalThreat}

Lyra places a hand on your shoulder, touch feather-light but weighted with emotion that makes her typically serene expression crack into something more vulnerable. "You honored my people when others dismissed us as irrelevant relics of fading magic. You saw our worth when human nobles treated us as curiosities or inconveniences. You learned our names, respected our customs, valued our perspectives. Whatever kingdom you build from these ashes and fragments, whatever future you pour into this artifact and burn into reality - we will stand with you. All of us. As partners, not servants. As friends, not tools."

${ritualRequirement}

Thorne's voice rumbles like distant thunder, carried on breath that smells of ancient mountains and older magic, power contained but not concealed: "Choose wisely, young one. Your choice affects not just humans who have dominated these lands through blood and magic and stubborn refusal to yield, but all who dwell in this realm. Every species, every culture, every being who calls this world home. We are all connected by threads you cannot see but must trust exist. What you do here ripples outward through chains of consequence beyond mortal comprehension. Choose with wisdom. Choose with care. Choose knowing that some of us will live to see how your decision plays out across centuries."`
		},
		{
			conditions: { hasHiddenAttributes: { vale_romance: 50 } },
			text: `The Crystal Heart fragments glow with power that responds to emotional resonance as much as royal bloodline, pulsing in rhythm with your heartbeat and Vale's beside you in counterpoint harmony that speaks of connection deeper than magic or duty. Vale stands at your side with hand firmly clasped in yours, fingers interlaced in grip that anchors you to reality when ritual power threatens to pull consciousness apart into component fragments.

"Whatever happens," Vale whispers with voice rough from emotion held too long in check, eyes shining with tears they do not bother hiding because this moment is too important for masks or performed composure, "I am with you. To the end and beyond. Through success or failure, triumph or tragedy, glory or ruin. You do not walk this path alone. You will never walk any path alone again. That is my promise, my vow, my choice freely made and never regretted."

The ritual requires everything you are - your magic channeled until reserves run dry and you must draw on life force itself, your dreams exposed and vulnerable to corruption or destruction, your very soul laid bare for examination and potential rejection. The risk is total. The cost potentially unbearable. But with Vale's love strengthening you, anchoring you, reminding you that you are more than royal blood and political necessity, you feel ready to reshape the world. Or at least ready to try. Ready to pour yourself out and trust that something beautiful remains when the agony fades.

"Let us build something beautiful," Vale says with smile that transforms their face into something luminous and heartbreaking in its naked hope. "Together. Not you as ruler and me as subject. Not noble and commoner. Just... us. Partners in all things. Building a world where love like ours is not scandalous but celebrated, where hands that hold each other can also hold power without one negating the other. Make that real. I believe you can."`
		}
	],
	choices: [
		{
			id: 'restore-traditional',
			text: 'Restore the kingdom in its traditional form - honor the old ways, maintain hierarchies and structures that have endured for generations, prove that wisdom exists in tradition',
			next: 'ending_traditional_restoration',
			effects: { courage: 5 },
			hiddenEffects: {
				'ending_choice:traditional': true,
				restored_monarchy: true
			}
		},
		{
			id: 'restore-reformed',
			text: 'Restore with democratic reforms integrated - keep the monarchy but share power, blend tradition with progress, create constitutional government',
			next: 'ending_reformed_kingdom',
			effects: { wisdom: 5 },
			hiddenEffects: {
				'ending_choice:reformed': true,
				constitutional_monarchy: true
			}
		},
		{
			id: 'new-order',
			text: 'Create an entirely new order - abolish monarchy, establish a council of equals representing all peoples and races, revolutionary transformation',
			next: 'ending_new_order',
			effects: { wisdom: 6 },
			hiddenEffects: {
				'ending_choice:new_order': true,
				revolutionary_change: true
			}
		},
		{
			id: 'abdicate',
			text: 'Restore the Crystal Heart but abdicate the throne - save the kingdom then walk away, choose freedom over duty, let them forge their own future',
			next: 'ending_abdication',
			effects: { wisdom: 5, courage: 4 },
			hiddenEffects: {
				'ending_choice:abdicate': true,
				chose_freedom: true
			}
		},
		{
			id: 'share-power',
			text: 'Share the Crystal Heart\'s power among magical races - distribute authority to prevent concentration, create alliance of equals, bridge species divides',
			next: 'ending_shared_power',
			effects: { wisdom: 7, charisma: 5 },
			hiddenEffects: {
				'ending_choice:shared': true,
				magical_coalition: true
			}
		}
	]
};

const lightErupts = `Light erupts from the restored Crystal Heart in cascading waves that wash across the chamber like physical force, throwing shadows that dance and writhe before being consumed by brilliance too intense for unshielded eyes. The barrier between worlds solidifies with an audible crack that reverberates through dimensions you cannot see but feel in your bones and teeth, reality itself restructuring as ancient magic remembers its purpose and snaps into patterns that have been broken for far too long. Shadow Beasts scream in rage and agony as their access closes like doors slamming shut across dimensional space, their claws scraping against barriers that no longer yield, their hunger denied as the feast they anticipated becomes forever unreachable. The kingdom is saved. The immediate threat ends not gradually but with decisive finality that leaves the air tasting of ozone and victory.`;

const ancientCoronation = `You are crowned in the ancient ceremony that has not been performed in its complete form for three generations, every tradition honored with meticulous attention to detail that transforms ritual into something between art and prayer. The crown settles onto your head with weight that feels simultaneously crushing and empowering, gold and crystal and promises woven together into circlet that marks you as ruler in ways that transcend mere political authority. The Loyalists rejoice with tears streaming down faces that have been tight with anxiety for months, their relief palpable as tradition reasserts itself, as hierarchy restores itself, as the world returns to patterns they understand and trust. Seraphine stands proudly at your side as your chief advisor, her expression showing satisfaction earned through political brilliance and personal sacrifice, knowing she helped guide you to this moment of triumph.

The magical races, seeing traditional order restored with competence and care rather than blind adherence to outdated practice, cautiously resume old alliances that have lapsed or grown strained through neglect and political chaos. They watch you with guarded hope, willing to give this new reign a chance because you have demonstrated wisdom alongside respect for precedent.`;

const yearsLaterTraditional = `Years later, the kingdom prospers under your benevolent rule in ways that surprise even the optimists who believed in your potential. You have maintained stability through careful preservation of institutions that work while quietly modernizing from within, changing substance while preserving form, reforming without revolution. The changes happen slowly enough that conservatives do not panic, but swiftly enough that progressives feel momentum. It is delicate balance, exhausting to maintain, but it works.

Your companions have found their places within this restored order: some as formal advisors whose counsel shapes policy in chambers where their presence would have been unthinkable a generation ago, some as free agents who visit when they can and bring news from worlds beyond court politics, carrying messages and maintaining connections that keep you grounded in reality beyond throne room negotiations. They have changed, as you have changed, shaped by time and responsibility into versions of themselves that honor who they were while embracing who they have become.`;

const throneRoom = `The story ends with you standing in the throne room in that liminal hour between day's official business and evening's private reflections, the weight of the crown familiar now rather than strange - not comfortable, never comfortable, but accepted as part of who you are rather than external burden. You are surrounded by those you trust, faces that have become as familiar as your own reflection: advisors and friends and those who blur the line between the two.

You have become the ruler your parents dreamed you would be before assassins stole them away and left you orphaned with crown and grief in equal measure - traditional in form and commitment to duty, yet kind in ways that make that tradition feel like gift rather than imposition. Powerful enough to protect what you love, yet just enough that those under your rule feel protected rather than oppressed. You have fulfilled the prophecy not through destiny's compulsion but through choices made day after day, year after year, building the future one decision at a time.`;

// Sample Ending - Traditional Restoration
export const EndingTraditionalRestoration: Scene = {
	id: 'ending_traditional_restoration',
	text: `${lightErupts}

${ancientCoronation}

${yearsLaterTraditional}

${throneRoom}

**ACHIEVEMENT UNLOCKED: The True Heir**
**Story Complete: Traditional Restoration Path**`,
	textVariants: [
		{
			conditions: { hasHiddenAttributes: { seraphine_romance: 60 } },
			text: `${lightErupts}

${ancientCoronation}

Seraphine is not just your advisor but your consort - the love who stood by you through everything. Together, you rule with wisdom born of genuine partnership.

${yearsLaterTraditional}

On quiet evenings, Seraphine removes her political mask and is simply herself with you. "We did it," she whispers. "Built something good and lasting. Together."

**ACHIEVEMENT UNLOCKED: The True Heir & Heart's Crown**
**Story Complete: Traditional Restoration Path (Romance)"`
		},
		{
			conditions: { hasFlags: ['all_companions_loyal:true'], hasHiddenAttributes: { companion_bonds: 200 } },
			text: `${lightErupts}

${ancientCoronation}

But the traditions are warmed by genuine friendship. Rowan serves as your ranger captain. Kieran commands your guard. Lyra advises on magical matters. Finn crafts wonders. Each friend has found their place in your kingdom.

${yearsLaterTraditional}

Your companions gather weekly - not for politics, but for friendship. You've proven that tradition and genuine connection can coexist.

**ACHIEVEMENT UNLOCKED: The True Heir & Circle of Trust**
**Story Complete: Traditional Restoration Path (All Bonds)"`
		}
	],
	choices: [
		{
			id: 'restart',
			text: 'Play again to explore other paths?',
			next: 'prologue_start'
		}
	]
};

const heartBlazes = `The Crystal Heart blazes with light that feels different from the harsh brilliance of pure restoration - this light carries warmth alongside power, flexibility alongside strength, as you infuse the artifact with your vision of a new kingdom built on old foundations but reaching toward revolutionary horizons. The barrier restores with changed fundamental nature - not rigid wall but permeable membrane, not absolute division but negotiated boundary, more flexible in design and allowing peaceful interaction with magical beings while still protecting against darkness that hungers for mortal souls. The magic remembers your intention, writes your vision into its crystalline structure, becomes vehicle for change rather than preservation alone.`;

const constitutionalMonarchy = `You establish a constitutional monarchy in ceremony that honors tradition while transforming it, keeping elements that carry meaning while discarding those that serve only to maintain unjust hierarchies. You retain the throne - partly because transition without monarch would create power vacuum that invites chaos, partly because you have earned the right through sacrifice and service, partly because some symbols matter and the crown has become one of them. But you share power with an elected council representing citizens across class and species lines, nobles and commoners and magical beings granted equal voice in governance that affects them all.

Sage helps draft the new constitution with tears of joy streaming down their face unchecked because this is everything they have fought for made manifest in legal framework, every progressive ideal given teeth through codification. They write with shaking hands and burning conviction, crafting language that will shape centuries of jurisprudence, creating foundation for society that values wisdom over birthright.`;

const yearsLaterReformed = `Years later, the kingdom thrives under this hybrid system in ways that surprise even those who championed reform most passionately. The magical races appreciate the progressive approach, seeing themselves reflected in governance rather than merely subject to it, participating as equals rather than supplicants seeking favor. Citizens across all backgrounds have genuine voices in governance rather than merely illusion of representation - they vote, they petition, they serve on councils where their words carry weight equal to noble-born representatives.

They benefit from the stability that royal leadership and magical protection provide while also experiencing agency that comes from democratic participation, best of both systems woven together into governmental structure that feels organic rather than forced. The transition has not been perfectly smooth - factions resist change, growing pains emerge, compromises anger purists on all sides. But it works. Messily, imperfectly, but undeniably it works.`;

const valePartnership = `Vale stands beside you not as subject or consort in traditional sense but as true partner in both rule and life, sharing power and decision-making in ways that scandalized conservatives but inspired common folk who see in your union proof that merit matters more than bloodline. Together, you have built something your parents never imagined possible: a kingdom where tradition and progress dance together rather than war against each other, where new does not require destruction of old but rather evolution and integration. Where love transcends class boundaries and governance reflects that revolutionary embrace of possibility.`;

// Sample Ending - Reformed Kingdom
export const EndingReformedKingdom: Scene = {
	id: 'ending_reformed_kingdom',
	text: `${heartBlazes}

${constitutionalMonarchy}

${yearsLaterReformed}

${valePartnership}

**ACHIEVEMENT UNLOCKED: The Progressive Monarch**
**Story Complete: Reformed Kingdom Path**`,
	textVariants: [
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true', 'fought_for_democracy:true'], hasHiddenAttributes: { commoner_respect: 50 } },
			text: `${heartBlazes}

${constitutionalMonarchy}

The common people celebrate in the streets. You've given them what they fought for - voices, rights, dignity. The underground resistance that once might have opposed you now works within the system you created.

${yearsLaterReformed}

Elena, the resistance leader, now serves on the elected council. "You kept your promises," she says. "You actually changed things."

${valePartnership}

**ACHIEVEMENT UNLOCKED: The Progressive Monarch & Voice of the People**
**Story Complete: Reformed Kingdom Path (Democracy Champion)"`
		},
		{
			conditions: { hasHiddenAttributes: { vale_romance: 65 } },
			text: `${heartBlazes}

${constitutionalMonarchy}

Vale rules beside you as your equal partner. Together, you've created a kingdom that values both of you - the noble-born heir and the commoner spy who saw beyond class.

${yearsLaterReformed}

"We're living proof," Vale says, taking your hand before the assembled council. "That love doesn't care about bloodlines. That partnership matters more than pedigree."

Your union symbolizes everything the new kingdom represents.

**ACHIEVEMENT UNLOCKED: The Progressive Monarch & Love Across Lines**
**Story Complete: Reformed Kingdom Path (Vale Romance)"`
		}
	],
	choices: [
		{
			id: 'restart',
			text: 'Play again to explore other paths?',
			next: 'prologue_start'
		}
	]
};

const restoreAndLeave = `You restore the Crystal Heart through ritual that tears you apart and remakes you, pouring everything you are into artifact that drinks your essence like parched earth drinks rain, taking and taking until you have nothing left to give and then somehow taking more. The kingdom is saved. The barriers hold. Shadow Beasts retreat screaming into dimensions where they belong. The immediate crisis ends with your success written into restored artifact that pulses with power and promise. But as the light fades and your companions rush forward to catch you before you collapse from exhaustion that goes beyond merely physical, as the assembled witnesses begin to cheer for the hero who saved them all - you remove the crown.

Slowly. Deliberately. Without hesitation despite trembling hands. You lift the circlet from your head where it has rested with crushing weight, feel the absence of pressure like physical relief, like breathing freely for the first time in months of suffocation. The gesture silences the celebration more effectively than shouted command ever could.`;

const abdication = `"I was born to save you," you tell the assembled crowd in voice that carries despite exhaustion, addressing nobles and commoners and magical beings with equal directness. "Or so the prophecy said. So the seers declared. So everyone believed and therefore so I believed because children absorb expectations like sponges absorb water. But the prophecy never said I was meant to rule you. That was assumption, tradition, inherited expectation - not destiny's actual requirement."

You hold the crown in both hands, metal warm from contact with your skin, beautiful and terrible in its significance. "I have given you what you needed most desperately: restoration of magic that protects, closure of barriers that shield, defeat of usurpers who would have destroyed everything. I have fulfilled the role fate assigned. But ruling?" You shake your head, expression sad and liberating simultaneously. "That was never mine to claim. I do not want it. You should not be forced to accept it merely because my blood happens to carry certain magical markers."

You place the crown gently on the altar where fragments recently lay, treating it with respect while simultaneously rejecting its authority over your life. "Choose your own path forward. Forge your own government, determine your own future, make your own mistakes and claim your own triumphs. I have given you the chance - a kingdom saved, a foundation restored, a clean slate. What you build on it should be yours to decide."`;

const peacefulTransition = `The factions scramble to fill the power vacuum in moment of confusion that could easily have devolved into civil war or coup or chaos that destroys everything you fought to save. But your companions help ensure peaceful transition, using influence and relationships cultivated through shared struggle to mediate between competing interests, to propose frameworks for temporary governance while permanent solutions are negotiated, to hold space for dialogue rather than allowing violence to speak first.

Eventually - not quickly, not without setbacks and near-disasters, but eventually - a coalition government forms from unlikely alliance of pragmatic nobles, progressive commoners, and magical race representatives. Imperfect, messy, constantly arguing, plagued by growing pains and factional disputes. But theirs. Chosen rather than inherited. Built through negotiation rather than imposed through prophetic authority. Real in ways that monarchy by divine right never was.`;

const finalFreedom = `You walk away from politics with relief so profound it manifests as physical sensation, weight lifting from shoulders that have carried burdens too heavy for any one person, breathing easier as obligations that crushed you day after day dissolve into choices that are finally, gloriously, yours to make. With your chosen companion or companions at your side, bound by love rather than duty, you return to adventuring, to living rather than merely serving, to existing for yourself rather than for abstract concept of kingdom or crown.

The tales that spread in subsequent years speak of the hero who saved the kingdom and asked for nothing in return, who walked away from ultimate power because freedom mattered more. The heir who gave up everything society told them they should want to claim something society said was worthless but that felt like treasure beyond price. They become legend - not the kind carved in marble with dates and accomplishments listed in formal language, but the kind whispered around campfires and sung in taverns, growing with each retelling but maintaining core truth: some people choose themselves, and that choice is worth celebrating.`;

const rowanLaugh = `Rowan laughs as you disappear into the wilderness together, sound full of joy and relief and vindication because they always knew, always believed, always understood in ways others did not. "I knew you would never be happy in a castle," they say while helping you pack supplies for journey with no destination except away. "Trapped in throne rooms, suffocated by responsibility, crushed by expectations. That was never you. This is you - free, choosing, alive. Finally."`;

const savedWorld = `You have saved the world. Restored barriers, defeated usurpers, fulfilled prophecy, done everything destiny demanded. Now you get to live in it. Actually live, not merely exist as symbol or sacrifice. Live as yourself rather than as role you inherited. Free.`;

// Sample Ending - Abdication
export const EndingAbdication: Scene = {
	id: 'ending_abdication',
	text: `${restoreAndLeave}

${abdication}

${peacefulTransition}

${finalFreedom}

${rowanLaugh}

${savedWorld}

**ACHIEVEMENT UNLOCKED: The Free Spirit**
**Story Complete: Abdication Path**`,
	textVariants: [
		{
			conditions: { hasFlags: ['values_freedom:true', 'rejected_duty:true'], hasHiddenAttributes: { rowan_romance: 65 } },
			text: `${restoreAndLeave}

${abdication}

${peacefulTransition}

Rowan takes your hand as you walk away. "Finally," they say with fierce joy. "You're choosing yourself. Choosing us. Choosing life over duty."

${finalFreedom}

In the wilderness, you build a cabin together. You save villages, fight monsters, help people - but on your terms. Free. Together. Happy.

"This is what I always wanted," Rowan admits. "You, me, and the open road. No crowns. No chains."

**ACHIEVEMENT UNLOCKED: The Free Spirit & Wild Hearts**
**Story Complete: Abdication Path (Rowan Romance)"`
		},
		{
			conditions: { hasFlags: ['independent_path_confirmed:true'], hasHiddenAttributes: { all_fragments_obtained: true } },
			text: `${restoreAndLeave}

${abdication}

Your diverse group of companions - humans, elves, dwarves, fae - help create a truly democratic council. Without you claiming power, they're forced to work together as equals.

"You gave us what we needed," Moonwhisper says. "Not a ruler, but a chance to rule ourselves."

${finalFreedom}

You adventure with different companions on different days. Thorne flies you across mountain ranges. Marina explores ocean depths with you. You're a legend, but one without a throne.

${savedWorld}

**ACHIEVEMENT UNLOCKED: The Free Spirit & Legend of Choice**
**Story Complete: Abdication Path (Independent Hero)"`
		}
	],
	choices: [
		{
			id: 'restart',
			text: 'Play again to explore other paths?',
			next: 'prologue_start'
		}
	]
};

// Revolutionary New Order Ending
export const EndingNewOrder: Scene = {
	id: 'ending_new_order',
	text: `The Crystal Heart pulses as you pour revolutionary vision into its crystalline structure, infusing ancient artifact with ideas that would have horrified your ancestors but that feel true at soul-deep level. Light erupts not in traditional patterns but in new configurations that make magical scholars gasp and traditionalists cover their eyes in horror or wonder or both simultaneously.

You abolish the monarchy in that moment of transformation, using power granted by bloodline to destroy institution that bloodline supports. The irony is not lost on you - using royal authority to declare royal authority void, leveraging privilege to dismantle privilege. The contradiction is necessary. Sometimes you must work within broken systems to break them properly.

In the throne room where generations of monarchs ruled with absolute or near-absolute authority, you establish a council of equals: representatives from all peoples, all races, all classes who call this land home. Human commoners sit beside elven elders. Dwarven craftmasters debate with fae philosophers. Merfolk ambassadors and dragon-kin observers and former street rats turned civic leaders - all with voices carrying equal weight in governance built from scratch according to principles of justice rather than inherited tradition.

The transition is chaos. Of course it is. Revolutionary change always brings chaos. Conservatives riot in streets, unable to accept world turned upside down. Opportunists attempt to seize power in confusion. Foreign nations watch with mixture of fascination and horror, uncertain whether to support or undermine experiment that threatens their own monarchical legitimacy. But through chaos, structure emerges. Messy, imperfect, constantly evolving - but real.

Years later, historians will debate whether your revolution succeeded or failed, whether benefits outweighed costs, whether changes lasted or eventually reverted to older patterns. But in the immediate aftermath, as you take your seat on the council as one voice among many rather than sovereign above all, you feel something that eluded you throughout your time as heir: peace. The weight of crown is gone. The burden of impossible expectations lifted. You are just yourself now. One person trying to help, no more and no less important than any other council member.

Sage embraces you with tears streaming freely. "You did it. Actually did it. The revolution we dreamed of but never truly believed possible. You used power to create system where such power cannot exist. That is wisdom beyond anything taught in books."

**ACHIEVEMENT UNLOCKED: The Revolutionary**
**Story Complete: New Order Path**`,
	choices: [{ id: 'restart', text: 'Play again to explore other paths?', next: 'prologue_start' }]
};

// Shared Power Among Magical Races Ending
export const EndingSharedPower: Scene = {
	id: 'ending_shared_power',
	text: `Instead of restoring the Crystal Heart as singular artifact controlled by human monarchy, you perform ritual that fragments power intentionally - not destructively as occurred centuries ago through war and betrayal, but deliberately through careful design and genuine consent from all parties. You distribute the Heart's authority among representatives of every magical race that calls this realm home, creating network of shared power rather than centralized control.

The ritual is unprecedented, requiring cooperation from elven archmages and dwarven runecrafters and dragon-kin power-shapers and merfolk soul-singers and human blood-mages all working in synchronization, each contributing their species' unique understanding of magic to transformation that honors all traditions while creating something new. The chamber fills with light in spectrum invisible to ordinary sight as barriers restore not through imposition of single will but through negotiated agreement among equals.

Moonwhisper receives fragment that pulses with lunar silver, granting elven people autonomous authority over their ancestral forests. The Dragon Matriarch claims portion that burns with ancient fire, ensuring dragon-kin can protect mountain territories without human interference. Corallia accepts shard that gleams with ocean depths, giving merfolk sovereignty over underwater realms. Representatives from a dozen other peoples - some you have met, some still mysterious even after months of negotiation - each receive portion of what was once concentrated in single crown.

You keep smallest fragment, enough to fulfill technical requirements of prophecy and royal bloodline, enough to participate in coalition as equal partner, but nowhere near the absolute power previous monarchs wielded. And you accept that diminishment gladly, seeing it as victory rather than loss.

The transition reshapes political landscape entirely. The kingdom as it existed is gone, replaced by federation of semi-autonomous territories cooperating through councils where disputes are mediated and shared concerns addressed collectively. Human nobles rage at losing dominance. Conservative factions call you traitor to your race. But common folk and magical beings who have lived as subjects or worse celebrate liberation that comes from power distributed rather than hoarded.

Years later, travelers speak of lands where humans and elves and dwarves and others live not in uneasy tolerance but genuine cooperation, where borders matter less than they once did, where being citizen means participating in network of mutual support rather than owing fealty to distant crown. The system has flaws - what government does not? - but it works through cooperation rather than coercion, through partnership rather than domination.

Thorne visits you regularly, massive dragon form always drawing awed whispers from humans unaccustomed to such visitations. "You gave us what we have sought for millennia," Thorne says. "Respect. Genuine respect, not mere tolerance or strategic alliance. You saw us as equals and made that vision reality through sacrifice of power others would have clutched until death. That is wisdom few humans ever achieve."

Lyra stands at your side as partner in this new world, elven perspective and human perspective woven together in relationship that symbolizes everything the federation represents. "We built something impossible," she whispers. "Something beautiful. Many worlds, one home. All voices heard. All peoples honored. This is what peace looks like when we choose it deliberately rather than having it imposed."

**ACHIEVEMENT UNLOCKED: The Bridge Between Worlds**
**Story Complete: Shared Power Path**`,
	choices: [{ id: 'restart', text: 'Play again to explore other paths?', next: 'prologue_start' }]
};

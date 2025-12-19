import { Scene } from '../../story-manager';

// The Common Market - Seeing the People's Reality

const marketplaceDescription = `The city marketplace sprawls across what was once a grand plaza, now crowded with temporary stalls and makeshift vendor stands. Cobblestones are worn smooth by centuries of foot traffic, cracked and uneven where maintenance has been neglected for years. The space pulses with desperate commerce - merchants calling out prices in voices edged with anxiety, customers haggling with fierce intensity over every copper coin, children darting between adult legs looking for dropped food or unattended purses.`;

const marketAtmosphere = `But beneath the surface bustle lies palpable tension. Poverty shows itself in threadbare clothing patched and repatched, in hollow cheeks and sunken eyes, in the way people clutch their meager purchases with protective desperation. Royal Guard patrol the marketplace edges in groups of four, hands on weapon hilts, scanning for trouble with suspicious eyes. Their presence doesn't reassure - it intimidates. People speak in hushed, fearful tones, conversations dying when guards draw near.`;

const crowdedMarket = `${marketplaceDescription}

${marketAtmosphere}

You've come to see the city as ordinary citizens experience it, to understand the lives of people who will ultimately be affected by every decision you make. The faction leaders showed you strategic maps and political calculations. This market shows you reality.`;

const marketScene = `${crowdedMarket}`;

const yourAnonymity = `You're not yet publicly known as the heir - to these people, you're just another traveler passing through their desperate world. This anonymity is gift and burden both. No one bows, no one performs for your benefit, no one hides truth behind political courtesy. What you see here is unfiltered reality: how your kingdom actually functions when nobles and politicians aren't watching.`;

const incognito = `${yourAnonymity}

It's humbling. And deeply, profoundly troubling. This is what the coup's aftermath created, what twenty years of instability and factional in-fighting have wrought upon ordinary people who just want to feed their families and survive.`;

const anonymity = `${incognito}`;

const desperateMotherScene = `A woman in her thirties haggles with a bread merchant, her voice carrying sharp edges of desperation. She's thin, worn down by worry and insufficient food, dark circles under her eyes speaking of sleepless nights. Three children cluster behind her - the oldest maybe ten, the youngest barely more than a toddler - all too quiet, too still, already learning that drawing attention means risking trouble.

"Please," the woman says, voice breaking. "I have two copper coins. Just one loaf. My children haven't eaten today."

The merchant's face shows conflict - he's not wealthy himself, survival margin barely better than hers. "Flour costs have tripled since the Shadow Beast attacks disrupted supply caravans. Two coppers won't cover my costs." But his eyes keep drifting to the silent, hungry children.`;

const injuredManScene = `Nearby, a man sits against the plaza wall displaying horrific scars - claw marks that raked across his chest and arm, partially healed but clearly still painful. A crude sign propped beside him reads: "Shadow Beast survivor. Need coin for healer. Can't work. Please help." His begging bowl contains perhaps six copper coins - nowhere near enough for proper healing magic.

He catches people's eyes as they pass, wordlessly pleading, and most look away. Shadow Beast victims are common enough now that compassion has given way to compassionate fatigue. Too many wounded. Too much suffering. Not enough help to go around.`;

const desperateWoman = `${desperateMotherScene}

${injuredManScene}

Fear and desperation permeate everything, thick enough to taste. This is your kingdom. These are your people. And they're suffering.`;

const strugglingPeople = `${desperateWoman}`;

const sageReaction = `Sage stands beside you, and pain radiates from him like physical force. His idealistic heart is breaking watching this, seeing abstract political theory made concrete in hungry children and untreated wounds. "This is why reform matters," he whispers urgently, voice trembling. "Look at their suffering. Really look at it. This is what happens when systems serve power instead of people. When nobles prioritize their privileges over common welfare. When military spending exceeds food subsidies."

His hands clench into fists. "Democracy isn't just political philosophy. It's this. It's making sure that mother can feed her children. Making sure that wounded man gets healing. Making sure people have voices in the decisions that determine whether they eat or starve."`;

const sageObservation = `${sageReaction}`;

const rowanObservation = `Rowan moves through the market with ranger's awareness, reading the space like familiar forest. But their expression grows increasingly grim. "These are the people you'll rule," they say quietly, gesturing to encompass the desperate crowd. "Not the faction leaders in their comfortable meeting rooms. Not the nobles in their estates. These people. Remember their faces. Remember what hunger looks like. Remember how fear smells."

They meet your eyes with fierce intensity. "Whatever path you've chosen - whatever allies you've made, whatever vision you're building - it has to serve them. Not as abstract concept, but as this. As children who go to bed hungry. As workers too injured to earn coin. As mothers who can't protect their families no matter how hard they try."`;

const rowanReminder = `${rowanObservation}`;

const companionComments = `${sageObservation}

${rowanReminder}`;

// Market and Assassination Scenes

const getMarketUnrestText = (): string => {
	return `${marketScene}

${anonymity}

${strugglingPeople}

${companionComments}`;
};

export const MarketUnrest: Scene = {
	id: 'common_people_scene',
	get text() {
		return getMarketUnrestText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true', 'progressive_ruler:true'] },
			text: `${marketScene}

${anonymity}

Sage walks beside you, and his pain at witnessing this poverty is visceral, written across every line of his expressive face. This isn't abstract political theory anymore - this is the living reality of why he's devoted his life to democratic reform.

"This is what we're fighting for," he says urgently, voice thick with emotion. "Not just constitutional frameworks or parliamentary procedures. This. These specific people with these specific needs. The mother who can't feed her children. The wounded man society has abandoned. The fear in everyone's eyes."

${strugglingPeople}

He stops you, making you look directly at the hungry children. "Your choice of the Reformist path was for moments like this. For systems that prioritize people over power, that measure success by whether children eat rather than whether nobles profit. Democracy isn't perfect - but it's built on the principle that everyone matters. Even them. Especially them."

Tears shine in his eyes. "Help me prove that principle works. Help me show that governance can serve the governed instead of exploiting them."

${rowanReminder}

Your Reformist alliance carries weight here, in this market, more than it ever did in political meetings. These people need what you've promised to build.`
		},
		{
			conditions: { hasFlags: ['loyalist_path_confirmed:true', 'traditional_ruler:true'] },
			text: `${marketScene}

${anonymity}

Seraphine accompanies you through the market, and profound trouble shadows her usually composed features. This isn't what the Loyalist restoration was supposed to create. The return of traditional monarchy was meant to bring stability, prosperity, the golden age she remembers from childhood. But here's the reality: suffering that the old system either caused or failed to prevent.

"This is our responsibility," she says quietly, voice carrying unusual vulnerability. "The Loyalists promised to restore order and prosperity, to return the kingdom to its former glory. But we can't ignore that this..." She gestures to encompass the desperate poverty surrounding you. "This suffering exists because the old system failed them. Because nobles prioritized their own power over common welfare."

${strugglingPeople}

She watches the mother beg for bread with something approaching horror. "I grew up in privilege. I knew intellectually that common people struggled, but I never truly saw it. Never let myself see it." Her hand finds yours, grip tight with determination. "We must do better. Traditional monarchy can work - but only if we remember that nobility means obligation to protect and serve, not just right to rule."

${rowanReminder}

Your traditional path must prove it can care for common people, not just restore noble privilege. Seraphine's awakening to that truth is both painful and necessary.`
		},
		{
			conditions: { hasFlags: ['independent_path_confirmed:true', 'chosen_own_path:true'] },
			text: `${marketScene}

${anonymity}

Rowan walks beside you, and their assessment of the market is brutally honest. "No faction cared about them before," they observe, voice carrying ranger's pragmatic clarity. "To the Loyalists, they were peasants - useful for taxes and labor, but not people who mattered. To the Reformists, they were theoretical beneficiaries of democratic systems, but not individuals with names and faces. To the Military, they were population to control and resources to protect."

${strugglingPeople}

They stop you in front of the wounded man, making you really look at him. "Your independent path could change that. You're not bound by faction ideology, not obligated to prioritize political allies over human need. You could actually put them first - if you remember them. If you let this moment matter more than the political games in capital meeting rooms."

${sageObservation}

Rowan's voice carries fierce intensity. "I chose to follow you partly because you rejected easy alliances for harder principles. Don't let me down now. Don't let them down. They've been pawns in political games for too long. Be the leader who finally sees them as people."

Your rejection of the factions was partly for this - to serve the realm's needs rather than factional agendas. Now you have to prove that choice meant something real.`
		},
		{
			conditions: { hasHiddenAttributes: { learned_healing_magic: true } },
			text: `${marketScene}

${anonymity}

${strugglingPeople}

But you notice details others might miss. The man with Shadow Beast wounds - those specific claw patterns, that infection spreading from untreated magical contamination. You've learned to recognize magical injuries, learned to heal them with royal blood magic Lyra taught you.

The knowledge burns in your mind: you could help him. Right now. Royal blood magic was designed for exactly this purpose - protecting and healing your people, using power inherited from generations of monarchs who saw their magic as service, not privilege.

Your blood mark tingles in response to his suffering, magic recognizing need it was crafted to address.

But using healing magic publicly would reveal your identity immediately. Would announce to everyone in this crowded market that the lost heir stands among them. Would make you target for assassination, would force you into public role before you're ready, would change everything.

${companionComments}

The choice weighs on you like physical burden: hide and stay safe, or help and accept the consequences? Is your safety worth more than his healing? Is political timing worth more than immediate suffering?`
		},
		{
			conditions: { hasFlags: ['military_path_confirmed:true'] },
			text: `${marketScene}

${anonymity}

${strugglingPeople}

Marcus accompanies you, and his military assessment of the marketplace is professionally thorough. "This level of poverty creates instability," he observes quietly. "Desperate people make desperate choices. Recruitment ground for insurgency, fertile territory for Shadow Cult influence, vulnerability to any demagogue promising simple solutions to complex problems."

But there's something more than tactical analysis in his voice - genuine concern edging his professional assessment. "General Blackwood would tell you the solution is increased patrols and stricter control. Keep order through force, prevent desperation from becoming rebellion."

He pauses, watching the mother with hungry children. "But I've served long enough to know that's treatment of symptoms, not cure of disease. Real stability comes from people having enough to eat, enough security to hope, enough welfare to invest in maintaining rather than destroying systems."

${companionComments}

Your military alliance brings order, yes. But this market asks harder questions: order for what purpose? Security that protects whom? Strength in service of what goals?`
		}
	],
	choices: [
		{
			id: 'help-family',
			text: 'Help the struggling family personally - pay for their bread and more, show compassion through direct action',
			next: 'assassination_plot',
			effects: { charisma: 3 },
			hiddenEffects: {
				compassion_for_people: 10,
				sage_affection: 10,
				rowan_bond: 8,
				helped_commoners: true
			}
		},
		{
			id: 'observe',
			text: 'Observe quietly - gather tactical information about marketplace dynamics and power structures',
			next: 'assassination_plot',
			effects: { wisdom: 3 },
			hiddenEffects: {
				tactical_observation: true,
				understands_common_struggles: true
			}
		},
		{
			id: 'investigate',
			text: 'Ask people about their needs - systematically understand the problems before proposing solutions',
			next: 'assassination_plot',
			effects: { wisdom: 4 },
			hiddenEffects: {
				compassion_for_people: 5,
				sage_affection: 8,
				investigative_approach: true
			}
		},
		{
			id: 'speech',
			text: 'Make impromptu speech about hope and change - inspire them publicly despite the risk',
			next: 'assassination_plot',
			effects: { charisma: 5, courage: 3 },
			hiddenEffects: {
				revealed_self_publicly: true,
				compassion_for_people: 8,
				people_hope_inspired: true,
				sage_affection: 15,
				made_enemies: true
			}
		},
		{
			id: 'heal',
			text: 'Use healing magic on the wounded man - reveal your power and identity to help someone in desperate need',
			next: 'assassination_plot',
			effects: { wisdom: 3 },
			hiddenEffects: {
				used_magic_publicly: true,
				revealed_self_publicly: true,
				compassion_for_people: 15,
				people_amazed: true,
				lyra_respect: 10,
				made_enemies: true
			}
		}
	]
};

// The Assassination Attempt - Night Attack

const nightSetting = `Night settles over the city like heavy blanket, darkness broken only by occasional lantern light and distant stars. Your temporary lodging occupies the upper floor of a moderately secure inn - Marcus's choice, positioned for tactical advantage with multiple exit routes and clear sightlines. The room is simple but functional: narrow bed against the wall, single window overlooking the street below, sturdy door with iron bolt.`;

const unnaturalSilence = `But the night feels wrong. Too quiet. The usual city sounds - distant conversations, dogs barking, late travelers on cobblestones - have fallen eerily silent. Even the wind has stopped, air hanging still and expectant. Your combat training or survival instincts or perhaps the blood magic inherited from warrior-ancestors screams wordless warning: Danger.`;

const nightDanger = `${nightSetting}

${unnaturalSilence}

You've learned to trust your instincts, and right now every nerve ending blazes alarm. Someone is here. Someone deadly.`;

const assassinAppearance = `The shadow moves where no shadow should be - fluid darkness separating from darkness, human-shaped but wrong, moving with predator's liquid grace. Moonlight catches on naked blade for half a heartbeat before the figure adjusts angle, making steel disappear again into carefully controlled shadow. Professional. Trained. Absolutely lethal.`;

const assassinStrike = `${assassinAppearance}

The attack comes without warning, without theatrical announcement, without giving you time to prepare. The assassin strikes with brutal precision honed by years of murder - blade aimed for heart with textbook accuracy, movement economical and efficient, no wasted motion, no hesitation. This isn't amateur thug or desperate bandit. This is professional killer, and they're here to end your claim to the throne permanently. Permanently and quietly and tonight.`;

const combatReality = `The fight erupts in desperate close-quarters chaos. You barely dodge the first strike, feeling blade pass close enough to slice through your shirt. Your blood magic surges instinctively in response to life-threatening danger, power flooding through veins with familiar burn. Or your combat training kicks in, muscle memory overriding panic. Or pure survival instinct takes over, animal brain forcing civilized thinking aside to focus solely on living through the next five seconds.`;

const desperateFight = `${combatReality}

But you're alone in the dark fighting someone whose entire professional existence revolves around killing people exactly like you. They're faster, more experienced, moving with confidence that comes from successful murders numbering in dozens. Every exchange leaves you more aware of the deadly gap between your skill and theirs.

This is real. This is death reaching for you with practiced hands. And you're running out of time.`;

const getAssassinationPlotText = (): string => {
	return `${nightDanger}

${assassinStrike}

${desperateFight}`;
};

export const AssassinationPlot: Scene = {
	id: 'assassination_plot',
	get text() {
		return getAssassinationPlotText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['military_path_confirmed:true'], hasHiddenAttributes: { kieran_loyalty: 20 } },
			text: `${nightDanger}

But you're not alone. Kieran insisted on guarding you personally tonight, overriding Marcus's guard rotation assignments. His protective instinct was stronger than military protocol, stronger than propriety, stronger than his usual careful professional boundaries.

He's positioned in the antechamber, theoretically resting between patrol shifts. But when the assassin strikes, he's through the door in heartbeat - he wasn't sleeping either, wasn't trusting anyone else with your safety, was listening with soldier's hypervigilance for exactly this threat.

${assassinStrike}

"Get behind me!" Kieran's command cracks across the room as he crashes between you and the assassin, blade already drawn and positioned for optimal defense. No hesitation. No calculation. Just immediate, instinctive protection.

He engages the assassin with fierce skill, and you realize: they're evenly matched. The assassin is clearly elite operative, trained specifically to kill nobility, moving with practiced precision. But Kieran fights with desperate intensity that goes beyond training - fear for you transforming standard combat into something primal and utterly determined.

"I won't let them take you," he growls, pressing the attack with controlled fury. The fear in his gray eyes when he first saw you in danger was nakedly personal, completely dropping his usual military composure. This isn't duty anymore. This is something far more dangerous to both of you.

The fight is brutal, fast, absolutely lethal. Every exchange could end with one of you dead. Kieran fights like he's protecting something he can't bear to lose.`
		},
		{
			conditions: { hasHiddenAttributes: { kieran_loyalty: 20 } },
			text: `${nightDanger}

${assassinStrike}

You barely dodge the first strike when Kieran crashes through the door, blade already drawn. "Get behind me!" His command allows no argument.

He engages the assassin with fierce skill that reveals his true capabilities - this isn't just competent soldier, this is elite warrior who's been holding back his full potential. The assassin is clearly professional killer, trained specifically for high-value targets. But Kieran fights with desperate intensity that goes beyond training, beyond duty, into territory that makes his feelings devastatingly clear.

"I won't let them take you," he growls, pressing the attack with controlled fury. When he glances back to check you're safe, the fear and fierce protectiveness in his gray eyes reveal everything he's been trying to hide behind military propriety.

The fight is brutal. Both combatants are trained, skilled, absolutely committed. But Kieran has something the assassin doesn't: personal investment so strong it transforms competence into excellence, duty into devotion.`
		},
		{
			conditions: { hasHiddenAttributes: { rowan_bond: 20 } },
			text: `${nightDanger}

${assassinStrike}

You barely dodge the assassin's blade when an arrow whistles past your ear with predator's precision, embedding in the attacker's shoulder with impact that spins them around. Rowan drops from the rafters like hunting cat, twin blades already drawn, moving with ranger's deadly grace.

"Thought you could sneak past someone who tracks Shadow Beasts through forest at night?" Rowan snarls, voice carrying primal fury you've never heard from them before. "You've made the last mistake of your pathetic life."

They fight with savage intensity that shocks you - Rowan is usually measured, controlled, economical in violence. But right now they're fighting like wounded animal protecting its mate, every strike carrying killing rage. The protective instinct is overwhelming their usual tactical precision.

${desperateFight}

Between exchanging blows with the assassin, Rowan keeps checking you're safe with quick glances that reveal naked fear. The bond between you has grown into something fierce and unbreakable, and the thought of losing you has stripped away every layer of careful emotional control they usually maintain.

"Touch them again," Rowan promises with dangerous quiet, "and I'll make your death last days instead of seconds."

They mean it. The wild, protective love in their eyes is terrifying in its intensity.`
		},
		{
			conditions: { hasHiddenAttributes: { sage_affection: 20 } },
			text: `${nightDanger}

${assassinStrike}

${desperateFight}

You're losing ground, bleeding from minor cuts, assassin pressing advantage with professional ruthlessness. Then Sage bursts through the door - not warrior, not fighter, just desperate scholar who can't bear the thought of losing you.

He throws himself at the assassin with complete disregard for his own safety, no technique, no training, just raw determination and love overriding self-preservation. "Get away from them!" His shout carries terror and fierce protectiveness.

The distraction is enough. The assassin turns to deal with this new threat, giving you opening to strike. But you see the assassin's blade rising toward Sage, see your gentle scholar about to be killed because he chose love over safety, chose protecting you over protecting himself.

Time seems to slow. Your blood magic surges with intensity you've never felt before - royal power responding to threat against someone you care about desperately. The magic is meant to protect your people, and Sage is unmistakably yours in every way that matters.

Everything after happens very fast.`
		},
		{
			conditions: { hasFlags: ['independent_path_confirmed:true', 'chosen_own_path:true'] },
			text: `${nightDanger}

${assassinStrike}

${desperateFight}

You fight alone - as you chose to walk alone, building your own path without factional support. The independence feels different now, with blade seeking your heart. No military guards provided by Blackwood alliance. No Loyalist house resources. No Reformist network of supporters. Just you, your training, your magic, and the choices that led to this isolated moment.

The assassin seems to know this. Their attacks carry confidence of someone who understands you're vulnerable, alone, without backup. "The independent heir," they hiss between strikes. "Thought you were so brave, rejecting all alliances. You just made yourself easy to kill."

But independence has its advantages too. You're not bound by faction tactics, not limited by political considerations, not constrained by allies' expectations. You can fight dirty, fight creatively, use every advantage your mixed training and royal magic provide without worrying about maintaining anyone's vision of who you should be.

Your blood magic surges with wild intensity - untrained but powerful, responding to life-or-death desperation without political calculation to restrain it. The magic wants you to survive. You want to survive. Nothing else matters in this moment.

The fight is yours to win or lose entirely on your own terms.`
		}
	],
	choices: [
		{
			id: 'blood-magic-fight',
			text: 'Fight back with blood magic - unleash your royal power without restraint',
			next: 'after_assassination',
			effects: { courage: 4, wisdom: 2 },
			hiddenEffects: {
				survived_assassination: true,
				used_magic_in_combat: true,
				shadow_impressed: true,
				captured_assassin: true
			}
		},
		{
			id: 'conventional-fight',
			text: 'Fight conventionally with weapons - prove your combat skill without magic',
			next: 'after_assassination',
			effects: { courage: 5 },
			hiddenEffects: {
				survived_assassination: true,
				combat_capable: true,
				captured_assassin: true
			}
		},
		{
			id: 'call-companion',
			text: 'Call for companion\'s help - trust in your allies rather than fighting alone',
			next: 'after_assassination',
			effects: { wisdom: 3 },
			hiddenEffects: {
				survived_assassination: true,
				companion_saved_you: true,
				captured_assassin: true,
				kieran_loyalty: 15,
				rowan_bond: 15
			}
		},
		{
			id: 'capture',
			text: 'Try to capture and question them - you need information about who sent them',
			next: 'after_assassination',
			effects: { wisdom: 5 },
			hiddenEffects: {
				survived_assassination: true,
				captured_assassin: true,
				shadow_impressed_by_skill: true,
				interrogation_possible: true
			}
		},
		{
			id: 'flee',
			text: 'Flee strategically - survival matters more than pride, let companion handle the assassin',
			next: 'after_assassination',
			effects: { wisdom: 2 },
			hiddenEffects: {
				survived_assassination: true,
				companion_fought_alone: true,
				showed_fear: true
			}
		}
	]
};

// Aftermath - Processing the Attempt

const aftermathPhysical = `You survived. That simple fact takes time to register through adrenaline crash and shock. The assassin lies dead or captured - Marcus's guards secured them after the fight ended. But your hands shake with aftermath tremors, muscles burning from combat intensity, cuts and bruises announcing themselves now that immediate danger has passed.`;

const aftermathEmotional = `The reality hits like physical blow: someone wants you dead badly enough to send professional killer. Someone calculated your value, your threat, your existence - and decided murder was appropriate response. This isn't political abstraction anymore. This is blade seeking your heart, life measured in heartbeats and desperate parries, death reaching for you with practiced hands.`;

const aftermathShock = `${aftermathPhysical}

${aftermathEmotional}

You sink onto the bed, legs suddenly unable to support weight, breath coming in shaky gasps. You almost died. You came within inches of having your claim to the throne, your destiny, your entire future ended by anonymous killer in dark room.`;

const marcusResponse = `Marcus arrives with full guard contingent within minutes - he's been preparing for exactly this scenario since the day you entered capital politics. His professional competence transforms the room into secured crime scene: guards positioning at doors and windows, medical supplies appearing, investigation beginning with efficient precision.`;

const companionPresence = `But the companion who was with you during the fight - or who arrived in time to save you - remains even after guards secure the area. They don't leave your side, don't retreat to proper distance, don't hide behind professional boundaries or polite formality. They stay, presence a comfort in the aftermath of violence, their care naked and undisguised.`;

const marcusArrival = `${marcusResponse}

${companionPresence}

Marcus handles the practical elements - securing evidence, interrogating guards about security failures, arranging better protection going forward. But he also recognizes the moment you need isn't professional debrief. It's human comfort.`;

const safetyPromise = `"You're safe now," your companion says, but the tremor in their voice reveals their own fear. Fear for you. Fear of what could have happened. Fear of the fragile line between life and death that you both just walked. The vulnerability of this moment creates unexpected intimacy - you've both seen death together, faced mortality together, and emerged together on breathing side.`;

const getAfterAssassinationText = (): string => {
	return `${aftermathShock}

${marcusArrival}

${safetyPromise}`;
};

export const AfterAssassination: Scene = {
	id: 'after_assassination',
	get text() {
		return getAfterAssassinationText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true'], hasHiddenAttributes: { sage_affection: 20 } },
			text: `${aftermathShock}

Sage bursts in with Marcus, panic written across every line of his expressive face. When he sees you alive - wounded but breathing - he nearly collapses with relief so profound it physically staggers him.

"I thought..." His voice breaks completely. "When they said assassin, when they said your room, I thought..." He can't finish the sentence, can't articulate the terror that gripped him.

He rushes forward, abandoning all scholarly propriety and political awareness, checking you for injuries with shaking hands that betray how close he came to complete breakdown. His fingers trace cuts with gentle precision, each discovered wound making him flinch like he's feeling the pain himself.

"I can't lose you," he whispers, voice raw with emotion he's stopped trying to hide. "Not when you're finally building the democracy we dreamed of. Not when everything we've worked for is becoming real. Not..." He stops, meets your eyes with devastating honesty. "Not ever. Not for any reason. I can't lose you."

The confession is both political and deeply, achingly personal. He believes in the Reformist vision, yes - but he believes in you more. Loves you more. Needs you more than he needs his ideals.

${safetyPromise}

His hands find yours and don't let go, grip tight enough to hurt, tight enough to ground, tight enough to remind both of you that you're alive and here and together.`
		},
		{
			conditions: { hasHiddenAttributes: { kieran_loyalty: 25 } },
			text: `${aftermathShock}

Kieran refuses to leave your side even after Marcus secures the room. His professional composure - so carefully maintained through years of military discipline - has cracked completely. His hands shake as he checks you for injuries, fingers gentle despite their warrior roughness, gray eyes scanning for wounds with desperate precision.

"I should have been faster," he says roughly, voice carrying self-recrimination that borders on devastation. "I should have positioned myself better. I should have..." He stops, jaw clenching with emotion he can't quite control. "If I'd lost you..."

He can't finish the sentence. The thought is too terrible to articulate.

You've never seen him like this - vulnerable, afraid, his carefully maintained professional boundaries completely destroyed by fear for your safety. He meets your eyes, and what you see there takes your breath away. "I'm sworn to protect you," he says carefully, each word chosen with precision despite emotional turmoil. "That's my duty. But this..."

He gestures helplessly between you, trying to find words for something that goes beyond duty, beyond oath, beyond professional obligation into territory that terrifies him.

"This isn't just duty anymore," he finally admits, confession rough as gravel. "I need you to know that. Need you to understand. When I saw that blade coming for you, when I thought I might not reach you in time... duty didn't drive me. Duty doesn't make my hands shake. Duty doesn't make me feel like my entire world is ending."

The confession hangs in the air between you, heavy with implications and possibilities and feelings too dangerous to fully name.`
		},
		{
			conditions: { hasHiddenAttributes: { rowan_bond: 25 } },
			text: `${aftermathShock}

Rowan sits close beside you on the bed - closer than propriety suggests, close enough that shoulders touch, close enough that shared body heat feels like anchor to reality. Their usual wildness, that ranger's comfortable relationship with solitude, has been subdued into something approaching fear.

"I've been alone most of my life," they say quietly, voice carrying unusual vulnerability. "By choice, mostly. Easier than losing people. Easier than caring. Easier than..." They gesture vaguely, struggling with words. "Than this. Than feeling like my heart was being ripped out when I saw that assassin attacking you."

They turn to face you directly, and their eyes hold raw honesty that costs them something to reveal. "I've lost people before. Family, friends, companions. Loss is part of life, especially for rangers who live on dangerous edges. I learned to accept it, learned to armor myself against it, learned to maintain distance so losing someone wouldn't destroy me."

Their hand finds yours, fingers intertwining with desperate grip. "But you... I can't lose you. I won't. That assassin reminded me that I..." They struggle visibly with the words, with opening themselves to vulnerability they've spent lifetime avoiding. "That what we have matters. That you matter. More than I've let anyone matter in a very, very long time."

The confession carries weight of walls being demolished, of self-protective isolation being deliberately abandoned for something more terrifying and more valuable: connection, investment, love.

"I'm not good at this," Rowan admits with slight smile tinged by fear. "At caring. At letting myself need someone. At being needed. But I need you. And watching you nearly die taught me that running from that need won't protect me. It'll just make me more alone."

Their hand doesn't let go of yours, grip fierce and uncompromising.`
		},
		{
			conditions: { hasFlags: ['loyalist_path_confirmed:true'], hasHiddenAttributes: { seraphine_trust: 20 } },
			text: `${aftermathShock}

Seraphine arrives with Marcus, and the sight of her carefully constructed composure shattering is almost as shocking as the assassination attempt itself. Years of noble training, decades of perfect political facade, generations of aristocratic emotional control - all of it crumbles when she sees you alive but wounded.

"I thought..." She stops, breathes with visible effort, tries again. "When I heard there was an attempt on your life, when they said assassin had breached your room, I..." Her voice cracks entirely. She presses hand to mouth, fighting for composure and losing.

The vulnerability in her expression is devastating - this is woman who's built her entire identity on being unshakeable, on maintaining perfect control, on never letting personal feelings interfere with political responsibility. But right now she's just Seraphine, terrified and relieved and unable to hide behind her usual masks.

Her hand reaches for yours before she catches herself, remembers propriety, remembers position, remembers all the reasons this would be inappropriate. But you catch her hand anyway, enfolding her trembling fingers in yours. She gasps slightly, eyes widening.

"Your Highness, I... this is inappropriate. I'm your advisor, your supporter, I shouldn't..." But she's holding your hand like lifeline, grip betraying how much she needs this contact. "Damn propriety," she whispers with fierce intensity. "I was terrified. I was so terrified."

The confession costs her something - admission that she cares beyond political alliance, that her investment in you goes deeper than Loyalist faction loyalty, that losing you would devastate her personally rather than just politically.

"I've spent my entire life maintaining appropriate distance," she continues quietly. "Noble propriety demands emotional control, demands we prioritize position over personal feeling. But I can't... I can't pretend I don't care about you beyond political partnership. Not after tonight. Not after almost losing you."

She meets your eyes with devastating honesty: "I need you to survive. For the kingdom, yes. For the Loyalist restoration, yes. But also... also just for me."

${safetyPromise}`
		},
		{
			conditions: { hasFlags: ['independent_path_confirmed:true', 'chosen_own_path:true'] },
			text: `${aftermathShock}

You sit alone in the aftermath - as you fought alone, as you've walked your path alone. Marcus secures the area with professional efficiency, guards take positions, investigation begins. But no companion rushed to your side because you chose independence over alliance, chose your own path over reliable support.

The solitude feels different now. Heavy. The independence that seemed so principled in political meetings feels like isolation when you're bleeding and shaking and processing how close death came.

${marcusArrival}

Marcus notices. He's tactician enough to read what you're not saying. "Independence has costs," he observes quietly, not unkindly. "You chose freedom from factional obligations. But freedom from obligations means freedom from support structures too."

He sits beside you, breaking his usual professional distance. "For what it's worth, Your Highness, I respect your choice. Takes courage to walk alone. But remember: choosing your own path doesn't mean refusing all companionship. It means choosing companions for right reasons rather than political expedience."

${safetyPromise}

"You survived," Marcus continues. "That's what matters. And you're not as alone as you think - not if you don't want to be. People follow you because of who you are, not which faction claimed you. That's actually more reliable than political alliance."

The comfort is practical, measured, but genuine. And somehow more valuable for being freely offered rather than obligated by faction loyalty.`
		}
	],
	choices: [
		{
			id: 'seraphine-comfort',
			text: 'Let Seraphine stay - discuss your fears about responsibility and the weight of leadership',
			next: 'finn_introduction',
			effects: { charisma: 3 },
			hiddenEffects: {
				seraphine_trust: 15,
				seraphine_romance: 20,
				seraphine_vulnerability_shared: true
			}
		},
		{
			id: 'rowan-comfort',
			text: 'Share trauma with Rowan - both of you open up about fears of loss and connection',
			next: 'finn_introduction',
			effects: { wisdom: 3 },
			hiddenEffects: {
				rowan_bond: 20,
				rowan_romance: 20,
				rowan_shared_trauma: true
			}
		},
		{
			id: 'kieran-comfort',
			text: 'Reassure Kieran he did his best - acknowledge the care behind his fierce protection',
			next: 'finn_introduction',
			effects: { charisma: 3 },
			hiddenEffects: {
				kieran_loyalty: 20,
				kieran_romance: 20,
				kieran_feelings_acknowledged: true
			}
		},
		{
			id: 'sage-comfort',
			text: 'Let Sage tend to you - his gentle care and scholarly focus is surprisingly soothing',
			next: 'finn_introduction',
			effects: { charisma: 2 },
			hiddenEffects: {
				sage_affection: 20,
				sage_romance: 20,
				sage_overcame_fear: true
			}
		},
		{
			id: 'lyra-healing',
			text: 'Accept Lyra\'s healing magic - use this moment to discuss mortality and purpose with ancient perspective',
			next: 'finn_introduction',
			effects: { wisdom: 4 },
			hiddenEffects: {
				lyra_respect: 15,
				lyra_romance: 15,
				discussed_mortality: true
			}
		},
		{
			id: 'alone',
			text: 'Process this alone - you need to prove to yourself you can handle fear without depending on others',
			next: 'finn_introduction',
			effects: { courage: 4 },
			hiddenEffects: {
				independent_personality: true,
				self_reliant: true
			}
		}
	]
};

// Finn Ironforge Introduction - The Dwarf Craftsman

const morningAfter = `Morning light filters through your window, soft and golden, beautiful contrast to last night's darkness and violence. The city wakes with usual sounds - merchants opening shops, morning birds calling, distant conversations drifting up from streets below. Life continues despite assassination attempts, despite politics, despite everything. There's comfort in that normalcy.`;

const finnArrivalScene = `Marcus arrives at your safehouse door with unusual companion in tow - cheerful dwarf who seems utterly unbothered by the grim circumstances that brought him here. The dwarf is built like boulder given human shape: perhaps four and half feet tall but nearly as wide, massive shoulders and barrel chest speaking of strength that comes from generations of forge work and stone carving. Magnificent red beard cascades down his chest, elaborately braided and decorated with small metal tools - hammer here, chisel there, measuring compass tucked carefully into decorative knots.`;

const finnPhysicalDescription = `He's grinning with infectious good nature that seems improbable given you nearly died last night. Bright green eyes sparkle with humor and keen intelligence, weathered face marked by forge burns and smile lines in equal measure. His clothing is practical craftsman's gear - leather apron over sturdy shirt, tool belt heavy with various implements, boots marked by years of standing at anvil. But the quality of the leather, the precision of the tool arrangement, the subtle runic engravings on his belt buckle - everything speaks of master craftsman who takes pride in even utilitarian equipment.`;

const finnArrival = `${morningAfter}

${finnArrivalScene}

${finnPhysicalDescription}`;

const finnGreeting = `"Finn Ironforge, at your service!" The dwarf bows with theatrical flourish completely at odds with his practical appearance, somehow making the gesture both ridiculous and charming. "Master craftsman, rune-worker, enchantment specialist, and - as of this morning when I heard someone tried to stick a knife in our new ruler - your new equipment specialist!"`;

const finnIntro = `${finnGreeting}

His enthusiasm is palpable, voice carrying the rolling accent common to mountain dwarves, each word shaped by centuries of clan linguistic tradition. He radiates confidence and competence in equal measure - this is someone who knows exactly what he's capable of and sees no reason for false modesty.`;

const finnDisplaysWork = `He hefts beautifully crafted piece of armor from the pack slung over his shoulder - breastplate sized for human proportions but bearing unmistakable marks of dwarven metalwork. The steel gleams like liquid silver, impossibly light despite protective thickness. Intricate runes are inlaid along the edges in gleaming mithril, each symbol precisely carved and glowing with faint magical resonance.

"Heard someone tried to murder our heir," Finn explains cheerfully, running thick fingers along the runes with craftsman's proprietary affection. "Can't have that! Bad for the kingdom, bad for business, bad for everyone. So I brought you this."`;

const finnGift = `${finnDisplaysWork}

He sets the breastplate on your table with surprising gentleness. "Light as leather, strong as castle gate, and inlaid with protection runes that'll turn blades and alert you to hostile magic within fifty paces. Took me forty years to perfect the runic patterns, another decade to figure out the metal alloy. But worth it - beautiful work, even if I say so myself."

His grin widens. "No charge. Consider it an investment in the kingdom's future. Can't have our heir dying before they fix all the problems plaguing this realm. And between you and me," he lowers his voice conspiratorially, "most of those problems need fixing."`;

const finnCharm = `${finnGift}

His good nature is genuinely infectious. Despite everything - assassination attempt, political tensions, looming threats - you find yourself smiling. There's something deeply comforting about Finn's practical approach to crisis: someone tried to kill you, so obviously the solution is better armor. Simple. Direct. Achievable.`;

const finnBusinessProposal = `"Though," Finn adds with exaggerated wink, grin turning slightly mercenary, "if you want anything fancy beyond the basic life-saving equipment - enchanted weapons, jewelry that does more than sparkle, tools that actually work properly - we can talk business. Dwarven craftsmanship doesn't come cheap, but it lasts centuries and actually does what it's supposed to. Unlike human work." He sniffs dismissively. "Humans make pretty things that fall apart. Dwarves make ugly things that last forever. Though between us, I manage both pretty AND functional."`;

const finnBusiness = `${finnBusinessProposal}

He's shameless in his self-promotion, but the confidence is backed by visible proof of skill. Everything about him - from his tool arrangement to his casual mention of decades-long projects - speaks of master craftsman who's earned right to boast.`;

const getFinnIntroductionText = (): string => {
	return `${finnArrival}

${finnIntro}

${finnCharm}

${finnBusiness}`;
};

export const FinnIntroduction: Scene = {
	id: 'finn_introduction',
	get text() {
		return getFinnIntroductionText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['independent_path_confirmed:true', 'chosen_own_path:true'] },
			text: `${finnArrival}

${finnIntro}

But Finn's expression shifts to something more serious when he references your political choices. "Heard you rejected the human factions," he says with clear approval, green eyes gleaming with respect. "Smart move. Very smart. Dwarves don't trust politics - we trust craftsmanship and character. We trust what you build with your hands and what you prove with your actions."

${finnCharm}

"You're building something new," he continues, gesturing expansively. "Not just restoring old systems or tweaking existing power structures. Actually creating something from raw materials. That's what dwarves respect - creation, not just rearrangement of what already exists."

His grin returns, warmer now. "The dwarven clans are watching you. We've stayed neutral in human politics for centuries because frankly, you lot tend toward short-term thinking and dramatic collapses. But building your own path, refusing to be claimed by temporary factions? That suggests you might actually be thinking long-term. Thinking like dwarf."

He taps the runic armor significantly. "Impress us, and you'll have allies who build to last. Dwarven alliance isn't flashy political theatre - it's solid foundation you can rely on for generations. And we're curious whether you're worth that investment."

${finnBusiness}

But there's less mercenary edge to his business proposal now - more genuine interest in whether you'll commission work that reflects your independent vision.`
		},
		{
			conditions: { hasFlags: ['magical_races_priority:true'], hasHiddenAttributes: { lyra_respect: 15 } },
			text: `${finnArrival}

${finnIntro}

Finn's cheerful demeanor sharpens with interest when he mentions your reputation. "Lyra sent word ahead," he says with knowing grin. "The ancient elf speaks well of you. That's high praise - Lyra doesn't respect humans lightly. Usually considers your species fascinating disasters waiting to happen."

${finnCharm}

His expression turns more thoughtful. "But she says you put magical races first instead of human factional squabbling. Says you see the realm as all its peoples, not just human politics with everyone else as background decoration. That's..." He pauses, seeming genuinely moved. "That's something dwarves and elves have waited centuries to see from human leadership."

He sets the armor down with particular care. "We magical races remember what your kingdom was like when Silverwood monarchs ruled with that perspective. Not perfect - humans are never perfect - but better. Fairer. More sustainable. We thrived then because leadership understood we weren't just resources to exploit or threats to control, but peoples with our own value."

His green eyes hold yours with unexpected intensity. "You remind us of that lost potential. Of what human leadership can be when it chooses wisdom over expedience. That's why I'm here - not just for business, but because someone who puts magical races first instead of last might actually build something worth supporting."

${finnBusiness}

But the business proposal feels less mercenary now - more like offering skilled partnership to vision he genuinely believes in.`
		},
		{
			conditions: { hasFlags: ['military_path_confirmed:true', 'pragmatic_ruler:true'] },
			text: `${finnArrival}

${finnIntro}

Finn's cheerful expression gains thoughtful edge when he references your alliance. "Heard you allied with Blackwood's military," he observes, tone carefully neutral. "Pragmatic choice. Dwarves appreciate strength and order - we understand that sometimes realms need firm hands to prevent collapse into chaos."

${finnCharm}

"But," he continues, and there's warning in his voice beneath the friendly tone, "dwarves also understand the difference between strength that protects and strength that dominates. Between order that serves the realm and order that serves the powerful."

He gestures to the protective armor. "We know fortifications, know weapons, know defensive and offensive craft better than any other people. And we know this: real protection comes from good craft and wise strategy together. Force alone solves nothing permanently. It's always temporary solution unless backed by systems that give people reasons to maintain rather than overthrow."

His green eyes hold yours with unexpected seriousness. "General Blackwood is effective tactician - we respect that. But don't let him convince you that force solves everything. The strongest fortress in the world eventually falls if the people inside don't want to defend it. Remember that when he pushes for military solutions to what might be social problems."

${finnBusiness}

The business proposal still stands, but there's subtle test in it now - will you commission weapons of conquest or tools of protection? The difference matters to him.`
		},
		{
			conditions: { hasFlags: ['reformist_path_confirmed:true', 'progressive_ruler:true'] },
			text: `${finnArrival}

${finnIntro}

Finn's grin widens when he mentions your political choices. "Heard you chose the Reformists. Democracy, people's voices, constitutional governance. Interesting choice for someone born to inherit absolute authority."

${finnCharm}

"Dwarves have complicated relationship with democracy," he continues thoughtfully. "Our clans operate on something similar - councils of elders, votes on major decisions, voices for all who've earned them through demonstrated skill. But we also understand it requires certain foundations to work properly."

He taps the armor significantly. "Good systems need good materials. Democracy built on poverty and desperation collapses fast - desperate people make desperate choices, vote for whoever promises easiest solutions regardless of long-term cost. But democracy built on foundation where people have enough to eat, enough security to plan futures, enough education to understand complex choices? That can last."

His expression turns more serious. "You're choosing harder path than traditional monarchy or military rule. Harder but potentially more sustainable. Dwarves respect that - we build for centuries, not decades. If you can actually make democratic reforms work, actually build systems that serve people rather than just sounding good in speeches, you'll have dwarven respect. And probably dwarven support."

${finnBusiness}

The business proposal carries subtle offer now - he's willing to craft not just weapons and armor, but infrastructure for lasting systems if you prove you're building something real.`
		}
	],
	choices: [
		{
			id: 'defensive-armor',
			text: 'Commission defensive armor from Finn - accept his gift and establish working relationship built on practical protection needs',
			next: 'assassin_confession',
			effects: { wisdom: 2 },
			hiddenEffects: {
				finn_friendship: 10,
				has_rune_protection: true,
				dwarf_relationship_started: true
			}
		},
		{
			id: 'ask-neutrality',
			text: 'Ask about dwarven neutrality in politics - understand why magical races stayed out of human factional conflicts for centuries',
			next: 'assassin_confession',
			effects: { wisdom: 3 },
			hiddenEffects: {
				finn_friendship: 12,
				understands_dwarf_politics: true,
				dwarf_relationship_started: true
			}
		},
		{
			id: 'share-ale',
			text: 'Share ale and stories with Finn - build genuine friendship beyond political or business relationships',
			next: 'finn_bonding_1',
			effects: { charisma: 3 },
			hiddenEffects: {
				finn_friendship: 20,
				finn_likes_you_personally: true,
				dwarf_relationship_started: true
			}
		},
		{
			id: 'show-interest',
			text: 'Show genuine interest in his craftsmanship - ask about rune-working and the decades of mastery behind his work',
			next: 'finn_bonding_1',
			effects: { wisdom: 2, charisma: 2 },
			hiddenEffects: {
				finn_friendship: 18,
				finn_romance_seed: true,
				appreciates_craftsmanship: true,
				dwarf_relationship_started: true
			}
		},
		{
			id: 'ask-join',
			text: 'Ask Finn to join your group permanently - offer position as official craftsman and equipment specialist for your growing cause',
			next: 'assassin_confession',
			effects: { charisma: 4 },
			hiddenEffects: {
				finn_friendship: 25,
				finn_joins_party: true,
				dwarf_relationship_started: true
			}
		}
	]
};

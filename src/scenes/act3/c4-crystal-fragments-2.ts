import { Scene } from '../../story-manager';

const dragonSpine = `Dragon's Spine Mountains pierce the clouds like ancient titans' bones thrust through the earth's skin. Here, at altitudes where air grows thin and mortal lungs struggle, ancient dragons roost among peaks humans rarely see and never linger. The stone itself radiates accumulated magic from centuries of draconic habitation. Thorne Drake leads you up impossible paths carved into sheer cliff faces, his movements effortlessly graceful despite the treacherous terrain. Below, your assembled forces wait - thousands who've heard the heir faces the dragon trial, who watch with mingled hope and terror.`;

const forcesGathered = `Before the trial begins properly, your assembled forces gather on the lower slopes - a sea of faces stretching into the distance. Word has spread through the realm with supernatural speed: the heir faces the dragon trial. Thousands watch from safe distance, waiting. Soldiers stand at attention, commoners crane for view, nobility cluster in anxious groups. The weight of their expectations presses against you like physical force.`;

const kieranAdvice = `Kieran stands at your side, military bearing impeccable but eyes concerned. "They need to hear from you," he says quietly, voice pitched for your ears alone. "Before you face the dragons. Give them courage for what's coming. Remind them why they follow you, why this matters beyond political necessity." His hand touches your shoulder briefly - supportive, grounding. "A battle cry now could unite them, inspire them, prepare them for the true war ahead."\n\nThe crowd waits in tense silence. You could rally them now, cement their loyalty with words before facing trial. Or proceed directly to the dragons, letting actions speak louder than speeches.`;

const dragonCouncil = `Higher on the mountain, the dragon council assembles - massive beings whose scales shimmer with accumulated centuries of magical power. Each dragon radiates presence that makes humans feel like insects contemplating gods. They arrange themselves in ritual formation, wings folded, ancient eyes gleaming with intelligence that transcends human comprehension.`;

const matriarchGreeting = `The Dragon Matriarch, ancient beyond mortal measure, regards you with eyes like molten gold flecked with crimson. She's enormous even by dragon standards - her smallest claw larger than a human, her wingspan capable of blocking out the sun. When she moves, stone trembles. When she breathes, the air itself seems to ignite with latent fire magic.`;

const dragonMemory = `"We dragons remember the First War," her voice resonates through stone, vibrating in your bones, carrying harmonics no human throat could produce. "We remember when humans and dragons fought side by side against the Shadowrealm incursions. We remember shared blood, shared sacrifice, shared victory." Her eyes narrow, ancient pain surfacing. "We also remember the betrayal that followed - humans hunting us for scales to make armor, raiding our hoards for treasure, killing our young for alchemical components. We remember treaties broken, promises forgotten, partnership reduced to exploitation the moment crisis passed."`;

const thorneCaution = `Thorne stands between you and the council, his stance protective yet neutral - neither fully advocating nor condemning. "This one is different," he offers carefully, voice carrying weight earned through centuries of service to dragon-kind. "I have traveled with them. I have seen their character when masks fall away. They are not like those who came before." But even his endorsement is measured, cautious. He's been burned by mortal promises too many times to give unconditional support without proof.`;

const matriarchChallenge = `"Then let them prove it," the Matriarch declares with finality that brooks no argument. "We offer two paths: Strength or Wisdom. Dragons respect both - the warrior's courage and the sage's insight. Choose how you will be tested. Pass, and we will consider alliance. Fail, and you leave empty-handed - if you leave at all. Our trials can be fatal to the unworthy."`;

const dragonPresence = `Around you, massive dragon forms shift with sounds like landslides - scales rasping against stone, claws scraping rock, wings rustling with sounds like hurricane winds. Beautiful and terrifying simultaneously, utterly alien in their ancient power. Each dragon watches with predatory focus, assessing, judging, waiting to see if humanity deserves another chance.`;

const getDragonTrialText = (): string => {
	return `${dragonSpine}\n\n${forcesGathered}\n\n${kieranAdvice}\n\n${dragonCouncil}\n\n${matriarchGreeting}\n\n${dragonMemory}\n\n${thorneCaution}\n\n${matriarchChallenge}\n\n${dragonPresence}`;
};

// Act 3 - Dragon, Fae, and Merfolk Fragment Quests

export const DragonTrial: Scene = {
	id: 'dragon_trial',
	get text() {
		return getDragonTrialText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['independent_path_confirmed:true', 'chosen_own_path:true'] },
			text: `${dragonSpine}\n\n${forcesGathered}\n\n${kieranAdvice}\n\n${dragonCouncil}\n\n${matriarchGreeting}\n\nBut there's curiosity in her ancient gaze, interest that transcends mere assessment. "We have heard of you," she rumbles, voice carrying unexpected warmth. "The heir who rejected human faction politics entirely to forge an independent path. Who chose principle over power, genuine conviction over convenient alliances. Dragons respect such courage - it takes strength to stand alone."\n\n${dragonMemory}\n\nThe Matriarch leans forward, her massive head lowering to study you more closely. Heat radiates from her scales. "An independent ruler seeking genuine alliance with magical races rather than exploiting us for factional advantage? That is... refreshing. Novel. Most humans come bearing factional agendas, seeing us as weapons to wield against their enemies. You see us as people." Something like approval glimmers in those molten eyes.\n\n${thorneCaution}\n\n"Very well," the Matriarch says with decision. "We will test you. But we do so with interest rather than mere skepticism. Prove your independence extends to genuine respect for non-human autonomy, and you will have earned more than a fragment - you will have earned true alliance."\n\n${dragonPresence}`
		},
		{
			conditions: { hasFlags: ['bold_approach:true'], hasHiddenAttributes: { thorne_respect: 20 } },
			text: `${dragonSpine}\n\n${forcesGathered}\n\n${kieranAdvice}\n\n${dragonCouncil}\n\n${matriarchGreeting}\n\nThorne's respect for your boldness is evident in his posture, his voice. "This heir challenged me personally, Matriarch," he announces to the assembled council. "When we first met, they didn't grovel or make political overtures. They demanded to be tested on merit, not lineage. They faced me as an equal despite centuries and species dividing us." Pride colors his words - rare from pragmatic Thorne.\n\n${dragonMemory}\n\nThe Matriarch's eyes gleam with something approaching amusement. "Boldness. Direct challenge. We respect that profoundly. Too many humans cower before our size, grovel before our age, try to manipulate through flattery and false deference. You stood proud, honest, willing to risk offense for authenticity." She bares teeth in what might be dragon smile. "That takes courage most mortals lack."\n\n${thorneCaution}\n\n${matriarchChallenge}\n\n${dragonPresence}`
		},
		{
			conditions: { hasFlags: ['ask-why:true', 'philosophical_interest:true'] },
			text: `${dragonSpine}\n\n${forcesGathered}\n\n${kieranAdvice}\n\n${dragonCouncil}\n\n${matriarchGreeting}\n\n"Ah yes," she says, something like amusement rumbling in her massive chest. "Thorne tells me you questioned why dragons care about mortal politics at all. You asked philosophical questions rather than making immediate demands. An unusual approach - most humans assume we exist to serve their needs."\n\n${dragonMemory}\n\nShe studies you intently, intelligence vast as oceans evident in her gaze. "But your question shows you think beyond immediate tactical needs. You seek to understand our motivations, our perspectives, our reasons for caring about realms we could simply abandon. That curiosity is rare - it suggests capacity for genuine respect rather than just strategic exploitation." Her head tilts, considering. "You see us as people with agency, not just powerful tools to recruit."\n\n${thorneCaution}\n\n${matriarchChallenge}\n\n${dragonPresence}`
		},
		{
			conditions: { hasHiddenAttributes: { thorne_respect: 30 } },
			text: `${dragonSpine}\n\n${forcesGathered}\n\n${kieranAdvice}\n\n${dragonCouncil}\n\nThe Dragon Matriarch studies you intensely, weighing your soul with eyes that have witnessed millennia. Thorne suddenly steps forward, his posture formal and deliberate in ways you've never seen - this is ritual, sacred significance radiating from every movement.\n\n"Honored Matriarch," he says, voice carrying weight that silences even wind, "I invoke the Rite of Draconic Sponsorship."\n\nShocked murmurs ripple through the assembled dragons like earthquake tremors. Wings rustle with alarm. This is clearly significant beyond mortal comprehension - a rite invoked perhaps once in generations.\n\n"You would bind your fate to a mortal?" the Matriarch asks, genuine surprise cracking her ancient composure. "Thorne Drake, you understand what this means? If they fail, you fail. If they betray us, you share their dishonor. Your exile - already centuries long - becomes permanent. You lose your place among dragon-kind forever, barred from our councils, forbidden from our territories, erased from our histories."\n\nThorne doesn't hesitate, doesn't waver. "I understand completely, Honored Matriarch. But I believe in them." His voice rings with conviction. "For the first time in centuries, I believe a mortal truly understands what we fight for - not just what they can gain from us, but what we are, what we value, what we protect."\n\nThe Matriarch's expression softens almost imperceptibly - pride, perhaps, or hope long dormant. "Very well. We will test them. But Thorne Drake, if you are wrong about this mortal, you lose everything. Is one human truly worth that price?"\n\n"Yes," he says simply. "They are."`
		}
	],
	choices: [
		{
			id: 'battle-cry-first',
			text: `Give inspiring battle cry to rally your assembled forces before facing the trial - unite them in courage and shared purpose`,
			next: 'battle_preparation_cry',
			effects: { courage: 3, charisma: 3 },
			hiddenEffects: {
				inspired_before_trial: true,
				kieran_proud: true
			}
		},
		{
			id: 'wisdom-path',
			text: `Proceed directly to choose trial of wisdom - demonstrate intellectual prowess and philosophical understanding of draconic values`,
			next: 'thorne_loneliness',
			effects: { wisdom: 6 },
			hiddenEffects: {
				dragon_shard_obtained: true,
				thorne_respect: 20,
				thorne_romance: 20,
				dragon_faction_rep: 40,
				wisdom_dragon: true
			}
		},
		{
			id: 'strength-path',
			text: `Proceed directly to choose trial of strength - prove courage, endurance, and warrior's spirit through physical challenges`,
			next: 'thorne_loneliness',
			effects: { courage: 6 },
			hiddenEffects: {
				dragon_shard_obtained: true,
				thorne_respect: 15,
				thorne_romance: 15,
				dragon_faction_rep: 35,
				strength_dragon: true
			}
		},
		{
			id: 'unity-proposal',
			text: `Propose renewed comprehensive human-dragon alliance for the coming war - emphasize partnership over transactional exchange`,
			next: 'thorne_loneliness',
			effects: { wisdom: 5, charisma: 4 },
			hiddenEffects: {
				dragon_shard_obtained: true,
				thorne_respect: 25,
				dragon_faction_rep: 45,
				dragon_alliance_proposed: true,
				visionary_leader: true
			}
		},
		{
			id: 'thorne-sponsorship',
			text: `Accept Thorne's draconic sponsorship - honor his willingness to risk permanent exile for you and validate his faith`,
			next: 'thorne_loneliness',
			effects: { charisma: 4 },
			hiddenEffects: {
				dragon_shard_obtained: true,
				thorne_respect: 35,
				thorne_romance: 30,
				thorne_sponsorship: true,
				dragon_faction_rep: 40,
				thorne_risked_everything: true
			}
		}
	]
};

const cliffOverlook = `After the trial - passed through whatever combination of strength, wisdom, or diplomatic brilliance you demonstrated - Thorne leads you to a cliff edge overlooking endless mountains. The sunset paints the sky in impossible golds and crimsons, colors that seem more magical than natural. Wind carries scents of high altitude: thin air, ancient stone, the metallic tang of dragon magic saturating everything. In the fading light, Thorne seems both ancient beyond comprehension and achingly, impossibly lonely. His usual confident bearing has given way to something more vulnerable.`;

const thorneQuestion = `"Do you know what it's like," he asks quietly, voice stripped of all performance and social mask, "to watch centuries pass like water through fingers? To see everyone you care about turn to dust while you endure unchanging? To build connections knowing they're temporary, that you'll outlive them by millennia?" He doesn't look at you, staring instead at distant horizons. "Immortality sounds like blessing to mortals. It's actually curse - endless repetition of loss, watching the world change while you remain static, accumulating grief that never heals because time doesn't dull pain for those who have too much of it."`;

const vulnerableConfession = `He looks at you finally, and for once the ancient dragon's mask falls away completely. Raw emotion surfaces - pain, longing, resignation, hope warring with fear. "I've had mortal friends before. I've even loved mortals - deeply, completely, with everything I am." His voice breaks slightly. "And I've buried every single one of them. Watched them age while I stayed young. Held their hands as life faded. Mourned alone for decades after. It never gets easier. Each loss compounds previous losses until grief becomes permanent condition."`;

const timeProblem = `The vulnerability in his voice is startling from someone usually so controlled. "You'll be gone in a blink of an eye by my reckoning," he continues, each word careful, measured, heavy with meaning. "Seventy, maybe eighty years if you're extraordinarily lucky and avoid war, disease, assassination. For me, that's nothing. A heartbeat. A moment of companionship followed by millennia of memory." He meets your eyes directly. "And then I'll be alone again, remembering you for the next thousand years. Replaying every conversation, every touch, every moment, until memory becomes torture because it's all I have left."`;

const thorneConflict = `He reaches toward you, then pulls back, conflict evident in every movement. "So why do I still feel drawn to you? Why can't I maintain the distance I should, the emotional walls I built specifically to protect against this exact situation? Why does knowing you're temporary make me want you more rather than less?" His hand finally finds yours, touch warm, trembling slightly. "Tell me I'm not foolish. Or tell me foolishness is worth it. I don't know anymore."`;

const getThorneLonelinessText = (): string => {
	return `${cliffOverlook}\n\n${thorneQuestion}\n\n${vulnerableConfession}\n\n${timeProblem}\n\n${thorneConflict}`;
};

export const ThorneLoneliness: Scene = {
	id: 'thorne_loneliness',
	get text() {
		return getThorneLonelinessText();
	},
	textVariants: [
		{
			conditions: { hasFlags: ['thorne_sponsorship:true', 'thorne_risked_everything:true'] },
			text: `${cliffOverlook}\n\nThorne's sponsorship at the trial cost him dearly in ways mortals can barely comprehend. He risked permanent exile - not temporary banishment but eternal severing from dragon-kind, from the only community that truly understands what he is. For you. For someone he'll outlive by millennia.\n\n${thorneQuestion}\n\n"I broke my own rule," he says, voice rough with emotion barely contained. "After the last mortal I loved died - after I spent decades mourning someone the world forgot - I swore never to risk my heart on temporary beings again. Never to bind my fate to someone who'll inevitably leave." His hand finds yours, grip almost desperate. "But I sponsored you before the Matriarch. I bound my fate to yours formally, ritually, irrevocably. If you had failed or betrayed us, I would have lost everything. And I did it anyway."\n\n${vulnerableConfession}\n\n"And now I've done it again," he whispers, voice breaking. "Fallen for someone who'll leave me. Fallen harder than I've fallen in centuries, maybe ever, because you made me forget why I built walls in the first place. You made me believe connection might be worth the inevitable pain."\n\n${thorneConflict}`
		},
		{
			conditions: { hasHiddenAttributes: { thorne_romance: 25 } },
			text: `${cliffOverlook}\n\nThorne's hand finds yours, his touch warm despite his usual heat being carefully contained - constant effort to avoid burning you, constant awareness of the differences between you. Physical closeness that requires active management, just like emotional closeness requires constant negotiation with temporal reality.\n\n${thorneQuestion}\n\n${vulnerableConfession}\n\nHe turns to face you fully, both hands now holding yours, eyes searching your face like he's memorizing every detail for the centuries ahead. "I told myself I wouldn't do this again. That I'd learned my lesson about loving mortals - that the price of loss outweighed the value of connection." His thumb traces your knuckles with infinite gentleness. "But you made me forget that lesson. You made me forget to protect myself. You made me hope, and hope is dangerous for beings who live as long as I do."\n\n${timeProblem}\n\n"Tell me I'm not foolish," he pleads softly, voice stripped of all pretense. "Tell me it's worth it - the decades together against the centuries apart. Tell me memory of you will be comfort rather than torture when you're gone."`
		},
		{
			conditions: { hasFlags: ['wisdom-trial:true', 'wisdom_dragon:true'] },
			text: `${cliffOverlook}\n\n"You chose the path of wisdom in the trial," Thorne observes, voice thoughtful despite underlying emotion. "You demonstrated philosophical understanding, capacity for complex thought, ability to see beyond immediate circumstances. Now I ask you to apply that wisdom to an impossible question - one I've been contemplating for centuries without satisfactory answer."\n\n${thorneQuestion}\n\n${vulnerableConfession}\n\n${timeProblem}\n\n"Is it wise to love something temporary?" he asks, the question carrying weight of centuries of contemplation. "Or is wisdom understanding that all moments are temporary - that even immortals exist within time's flow - and therefore love matters anyway? That brevity doesn't diminish value but perhaps intensifies it?" He searches your face. "You proved your wisdom to the dragons. Now prove it to me. Help me understand whether my feelings are foolishness to resist or truth to embrace."\n\n${thorneConflict}`
		}
	],
	choices: [
		{
			id: 'meditate-first',
			text: `Suggest meditating together to find clarity and inner wisdom on this impossible question of love across time`,
			next: 'meditation_before_battle',
			effects: { wisdom: 4, empathy: 3 },
			hiddenEffects: {
				meditation_with_lyra_possible: true,
				thorne_intrigued: true,
				seeking_wisdom: true
			}
		},
		{
			id: 'embrace',
			text: `Embrace the connection wholeheartedly - argue that time together matters infinitely more than length of time`,
			next: 'shimmerwood_games',
			effects: { charisma: 5 },
			hiddenEffects: {
				thorne_romance: 40,
				thorne_accepts_love: true,
				carpe_diem_philosophy: true,
				thorne_bond_deep: true
			}
		},
		{
			id: 'extend-life',
			text: `Promise to seek magical or alchemical ways to extend your lifespan to match his - make the impossible possible`,
			next: 'shimmerwood_games',
			effects: { wisdom: 4 },
			hiddenEffects: {
				thorne_romance: 35,
				life_extension_quest: true,
				thorne_hopeful: true
			}
		},
		{
			id: 'distance',
			text: `Acknowledge his pain with deep respect - maintain emotional distance to protect him from future grief`,
			next: 'shimmerwood_games',
			effects: { wisdom: 5 },
			hiddenEffects: {
				thorne_romance: 10,
				thorne_friendship: 30,
				mutual_respect: true,
				thorne_protected: true
			}
		},
		{
			id: 'share-burden',
			text: `Offer to share the burden of his loneliness - promise that whatever time you have, he won't face it alone`,
			next: 'shimmerwood_games',
			effects: { charisma: 4, wisdom: 3 },
			hiddenEffects: {
				thorne_romance: 45,
				thorne_not_alone: true,
				profound_connection: true,
				thorne_healing_begins: true
			}
		}
	]
};

const shimmerwoodReality = `The Shimmerwood defies logic, physics, and mortal comprehension of reality itself. Trees grow upside-down with roots reaching toward sky, their leaves drinking sunlight from below. Streams flow upward in defiance of gravity, water cascading toward clouds. Paths loop back on themselves in impossible geometries that make navigation meaningless - you walk forward and arrive behind yourself, turn left and find yourself facing right. Time feels elastic here: moments stretch like taffy, hours compress into heartbeats. This is the realm of the Fae, where reality bends to their collective whimsy and truth is the only currency they truly respect.`;

const zephyrManifestation = `A figure materializes from morning mist that wasn't there moments before - neither entirely male nor female, shifting between presentations as fluidly as water changes shape. This is Zephyr, though they seem more Fae here than they did at court, less constrained by mortal social expectations. Their edges blur slightly, as if they're not quite solid. Eyes that were merely unusual at court now shimmer with colors that don't exist in human spectrum. They belong here in ways they never quite belonged in the palace.`;

const zephyrGreeting = `"Welcome, mortal heir," Zephyr's voice echoes strangely, harmonics layering over each other like music and speech combined. "The Fae Court has been expecting you. We know what you seek - the fourth fragment, the piece your mortal world needs, the power you've traveled so far to claim." Their smile carries complicated emotions: pride at their heritage, anxiety about divided loyalties, hope that you'll understand.`;

const faeCourtAssembles = `Around you, hundreds of Fae gather like moths to flame - beautiful, terrible, utterly alien beings who see mortals as amusing toys, fascinating puzzles, occasionally beloved pets but never quite equals. They shift through forms: sometimes appearing as impossibly beautiful humanoids, sometimes as creatures from nightmares, sometimes as abstract concepts given temporary flesh. Wings, horns, scales, feathers, elements - the Fae are possibility incarnate.`;

const faeQueenOffer = `The Fae Queen speaks from a throne that seems woven from living starlight, her voice like wind chimes in hurricane, sweet and terrifying simultaneously: "We will play games with you, little mortal. Answer our riddles - we love riddles, the more convoluted the better. Dance our truth-dance where lies become visible and hearts reveal themselves. Play our word-games where every phrase carries triple meanings. If you win, the fragment is yours freely given. If you lose..." She smiles, showing too many teeth that are sometimes pearls, sometimes daggers. "...you stay here forever, entertaining us for the next several centuries. Fair exchange."`;

const zephyrWarning = `Zephyr whispers urgently beside you, their breath cool against your ear: "They cannot break the rules of their own games - Fae are bound by their nature to honor agreements precisely. But be careful - Fae always twist truth to their advantage, find loopholes in intentions, exploit ambiguities you didn't know existed. Everything is literal. Everything is metaphor. Everything is dangerous."`;

const getShimmerwoodGamesText = (): string => {
	return `${shimmerwoodReality}\n\n${zephyrManifestation}\n\n${zephyrGreeting}\n\n${faeCourtAssembles}\n\n${faeQueenOffer}\n\n${zephyrWarning}`;
};

export const ShimmerwoodGames: Scene = {
	id: 'shimmerwood_games',
	get text() {
		return getShimmerwoodGamesText();
	},
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { zephyr_friendship: 25 }
			},
			text: `${shimmerwoodReality}\n\nThe Fae Court assembles with predatory interest, their attention feeling like being watched by wolves who haven't yet decided whether you're prey or entertainment. But Zephyr stands close to you, closer than Fae typically approach mortals, their presence protective in a way that surprises the assembled court. Murmurs ripple through impossible beings - this is unexpected, unprecedented even.\n\n"The mortal is under my protection," Zephyr announces formally, voice ringing with authority that belies their usual playful demeanor. "I claim guest-right on their behalf. Ancient custom that predates even the current Queen."\n\nThe Fae Queen's eyes narrow dangerously, colors shifting from amused gold to threatening crimson. "You would claim that, half-blood? For a mortal?" The insult in 'half-blood' cuts through the air like blade. "You who exist between our world and theirs, never fully belonging to either? You would stake what little standing you have on someone who'll be dust before you even reach your prime?"\n\n"I would," Zephyr's voice is steady though you sense the enormous risk they're taking, the social capital they're spending, the bridges they might be burning. "They have earned my loyalty. They see me as whole rather than divided. That's worth protecting."\n\nThe Queen laughs - a sound like breaking glass, beautiful and cutting. "Then the stakes rise! If they fail our games, not only do they stay here as entertainment, but you lose your place in both worlds, Zephyr. Neither Fae nor mortal. Nowhere to belong. Truly nothing." The cruelty is casual, devastating. "Still willing to risk that?"\n\nZephyr doesn't hesitate. "I accept those terms."`
		}
	],
	choices: [
		{
			id: 'riddle-contest',
			text: `Accept riddle contest - match wits with ancient beings whose minds work in fundamentally alien patterns`,
			next: 'zephyr_truth',
			effects: { wisdom: 6 },
			hiddenEffects: {
				fae_shard_obtained: true,
				zephyr_friendship: 15,
				fae_faction_rep: 35,
				clever_mind: true
			}
		},
		{
			id: 'truth-dance',
			text: `Accept truth-dance - let Fae magic reveal your heart completely, with all lies and pretense stripped away`,
			next: 'zephyr_truth',
			effects: { courage: 5, charisma: 3 },
			hiddenEffects: {
				fae_shard_obtained: true,
				zephyr_friendship: 20,
				zephyr_romance: 25,
				fae_faction_rep: 40,
				honest_heart: true
			}
		},
		{
			id: 'word-games',
			text: `Play word-games where language becomes weapon and shield - navigate treacherous semantics and triple meanings`,
			next: 'zephyr_truth',
			effects: { wisdom: 5, charisma: 3 },
			hiddenEffects: {
				fae_shard_obtained: true,
				zephyr_friendship: 12,
				fae_faction_rep: 35,
				linguistic_skill: true
			}
		},
		{
			id: 'zephyr-guidance',
			text: `Ask Zephyr to guide you through Fae customs and protect you - trust them to navigate their own people's dangers`,
			next: 'zephyr_truth',
			effects: { wisdom: 4 },
			hiddenEffects: {
				fae_shard_obtained: true,
				zephyr_friendship: 25,
				zephyr_risked_status: true,
				zephyr_loyalty_deep: true,
				fae_faction_rep: 38
			}
		}
	]
};

const gameVictory = `After winning the Fae games - through wit sharp enough to match ancient minds, truth brave enough to withstand magical scrutiny, linguistic skill subtle enough to navigate semantic traps, or Zephyr's guidance protecting you from dangers you couldn't even perceive - you hold the fourth fragment. It pulses with strange energy, reality bending slightly around it. The Fae Court disperses with mixture of disappointment (you would have been entertaining) and respect (you proved worthy), fading into mist and starlight until only Zephyr remains.`;

const normalReality = `The Shimmerwood clearing has returned to something approximating normal reality - trees growing in proper directions, water flowing downward, time moving linearly. It's almost disappointing after the magical chaos. Zephyr stands beside you, their form still shifting between court appearance and something more ethereal, more honestly Fae. They look uncertain, vulnerable in ways you've never witnessed - the playful courtier mask completely gone.`;

const zephyrConfession = `"I need to tell you the truth," they say quietly, voice stripped of performance and clever deflection. "Not half-truths or amusing evasions or carefully worded misdirection. The real truth, which I've been avoiding since we met." They take breath that seems unnecessary for whatever they truly are. "I'm not fully mortal. I've been pretending, wearing humanity like costume, but it's exhausting maintaining the illusion. My mother was human - a poet who caught Fae attention. My father was Fae - one of the wild ones who still remembers when borders between worlds were permeable." Their voice shakes slightly. "I exist between worlds, never fully belonging to either. Too Fae for humans, too human for Fae."`;

const dividedExistence = `They meet your eyes, searching for judgment, rejection, the disgust they've learned to expect from both sides. "At court, I play the charming courtier, but it's exhausting pretending to be entirely human. Suppressing the parts of me that want to shift form, that see in spectrums humans can't perceive, that exist slightly outside linear time. Here, with the Fae, I'm too human for them to fully accept - too mortal, too bound by human ethics and emotions, too solid. I'm always divided, always half, always choosing which parts to suppress depending on audience. Never whole. Never just... me."`;

const vulnerableHope = `Their voice breaks slightly, emotion overwhelming careful control. "But with you... I don't know. For the first time in my entire divided existence, I feel like maybe I don't have to choose. Maybe I can be both - human and Fae, mortal and magical, solid and shifting - and that's not inadequacy but completeness." They reach toward you hesitantly. "You've never asked me to be less Fae or more human. You've just... accepted all of it. All of me. And that terrifies me because I don't know what to do with acceptance."`;

const getZephyrTruthText = (): string => {
	return `${gameVictory}\n\n${normalReality}\n\n${zephyrConfession}\n\n${dividedExistence}\n\n${vulnerableHope}`;
};

export const ZephyrTruth: Scene = {
	id: 'zephyr_truth',
	get text() {
		return getZephyrTruthText();
	},
	choices: [
		{
			id: 'accept-both',
			text: `Accept all parts of them completely - affirm they are whole exactly as they are, not lacking or divided but complete`,
			next: 'coral_palace_depths',
			effects: { charisma: 5, wisdom: 3 },
			hiddenEffects: {
				zephyr_romance: 40,
				zephyr_accepted: true,
				zephyr_healing_begins: true,
				inclusive_heart: true
			}
		},
		{
			id: 'celebrate-unique',
			text: `Celebrate their uniqueness as profound strength - argue that being both human and Fae makes them richer, not lesser`,
			next: 'coral_palace_depths',
			effects: { charisma: 4 },
			hiddenEffects: {
				zephyr_romance: 35,
				zephyr_empowered: true,
				positive_perspective: true
			}
		},
		{
			id: 'share-feeling',
			text: `Share your own feelings of not belonging - create bond through mutual understanding of being caught between worlds`,
			next: 'coral_palace_depths',
			effects: { charisma: 5 },
			hiddenEffects: {
				zephyr_romance: 45,
				shared_understanding: true,
				deep_bond: true,
				mutual_outsiders: true
			}
		},
		{
			id: 'support-choice',
			text: `Support whichever identity they choose to embrace most - respect their autonomy in defining themselves`,
			next: 'coral_palace_depths',
			effects: { charisma: 3, wisdom: 2 },
			hiddenEffects: {
				zephyr_romance: 30,
				zephyr_supported: true,
				respectful_love: true
			}
		}
	]
};

const underwaterJourney = `The underwater journey to the Coral Palace is otherworldly, transcendent in ways surface existence can never match. Marina guides you through the depths with practiced grace, her movements fluid and effortless in three-dimensional space. She's worked magic to allow you to breathe beneath the waves - water flowing through your lungs without drowning sensation, pressure equalized despite impossible depths. Bioluminescent creatures light your path: jellyfish pulsing with rainbow colors, fish trailing phosphorescent scales, coral glowing with internal fire. Structures of living coral form a city unlike anything on land - architecture that grows rather than being built, towers and arches and bridges all organic, all breathing with tidal rhythms.`;

const merfolkCourt = `The Merfolk Court gathers in a throne room of pearl and abalone, walls covered in shells arranged in intricate mosaics telling stories in visual language you can barely comprehend. The Ocean Queen sits upon throne carved from single enormous pearl, radiating authority as deep and inexorable as ocean currents themselves. She regards you with ancient, knowing eyes that have witnessed centuries of surface-world betrayal, pollution, thoughtless exploitation.`;

const queenAccusation = `"Surface-dweller," her voice carries the weight of deep currents, pressure that could crush ships, anger cold as abyssal depths. "Your kind has poisoned our waters with refuse and chemicals and casual cruelty. You've hunted our people for scales, meat, specimens to dissect. You've treated the ocean as infinite dumping ground, assuming what you couldn't see didn't matter." Each word lands like physical blow. "Reefs dying from acidification. Currents warming beyond tolerance. Migrations disrupted by noise pollution from your ships. Why should we help you save the surface world when the surface world has been killing us for centuries?"`;

const merfolkGrievances = `Around you, merfolk watch with mixture of curiosity and hostility - expressions ranging from cautious interest to open hatred. Young merfolk bear scars from fishing nets. Elders remember when waters were clean, abundant, safe. Marina floats nearby, her expression showing her people's pain, the accumulated grief of a civilization slowly suffocating under surface-world waste.`;

const ultimatum = `The Queen continues, voice hard as coral: "The Crystal Fragment could help you save the surface world from Shadow Beasts - threats you created through your own magical experimentation and carelessness. But what about our world? What about the oceans dying from your neglect? You come asking for help without offering restitution, expecting us to save you from consequences of your actions while we continue suffering yours." She leans forward. "This is more than a test of worthiness - it's a reckoning with humanity's crimes against the sea. Prove your commitment to change isn't just empty promises motivated by immediate need."`;

const getCoralPalaceDepthsText = (): string => {
	return `${underwaterJourney}\n\n${merfolkCourt}\n\n${queenAccusation}\n\n${merfolkGrievances}\n\n${ultimatum}`;
};

export const CoralPalaceDepths: Scene = {
	id: 'coral_palace_depths',
	get text() {
		return getCoralPalaceDepthsText();
	},
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { marina_friendship: 25 }
			},
			text: `${underwaterJourney}\n\n${merfolkCourt}\n\nThe Ocean Queen's gaze is cold as deep water, ancient anger making the temperature drop perceptibly. But Marina swims forward with determination that surprises the court - challenging the Queen directly is not done lightly, especially not by someone as young as Marina.\n\n"Your Majesty," Marina's voice rings clear despite the water, carrying far through the throne room. "I have traveled with this human extensively. I have seen them choose compassion over convenience repeatedly, wisdom over expedience, principle over political advantage. They are different from those who came before - genuinely different, not just performing difference."\n\nThe Queen's expression shifts to surprise. "You would vouch for them, Marina? After what surface-dwellers did to your pod?" The reference to old tragedy hangs in the water like blood. "After the fishing vessels destroyed your family's territory, killed your mother, left you orphaned?"\n\nMarina's jaw sets with courage born of conviction. "Yes. Precisely because of that." Her voice strengthens. "If we never trust, we never heal. If we never risk connection, we're trapped in endless cycle of justified anger that protects us but also isolates us. We need healing more than we need revenge. We need hope more than we need hatred." She turns to you, then back to the Queen. "This one offers that possibility."\n\nThe Queen regards you both thoughtfully, ancient wisdom weighing Marina's passionate testimony. "Your testimony carries weight, Marina of the Northern Currents. You've earned standing through your scholarship, your dedication to ocean health, your service to our people. But testimony alone is not enough." She focuses on you with laser intensity. "Let the surface-dweller prove their words with concrete action and binding commitment."`
		}
	],
	choices: [
		{
			id: 'ocean-protection',
			text: `Pledge comprehensive ocean protection laws with enforcement mechanisms - ban pollution, protect habitats, establish marine sanctuaries`,
			next: 'crystal_complete',
			effects: { wisdom: 5, charisma: 4 },
			hiddenEffects: {
				merfolk_shard_obtained: true,
				marina_friendship: 20,
				merfolk_faction_rep: 45,
				ocean_alliance: true,
				environmental_leader: true
			}
		},
		{
			id: 'ban-hunting',
			text: `Ban hunting of sea creatures and impose strict pollution regulations with real penalties for violations`,
			next: 'crystal_complete',
			effects: { wisdom: 4, courage: 3 },
			hiddenEffects: {
				merfolk_shard_obtained: true,
				marina_friendship: 18,
				merfolk_faction_rep: 40,
				protection_laws: true
			}
		},
		{
			id: 'equal-representation',
			text: `Offer merfolk equal representation in surface government - give them voice in decisions affecting oceans`,
			next: 'crystal_complete',
			effects: { wisdom: 6, charisma: 5 },
			hiddenEffects: {
				merfolk_shard_obtained: true,
				marina_friendship: 25,
				marina_romance: 20,
				merfolk_faction_rep: 50,
				revolutionary_inclusivity: true
			}
		},
		{
			id: 'healing-expedition',
			text: `Organize immediate expedition to heal damaged ocean areas - demonstrate commitment through action not just promises`,
			next: 'crystal_complete',
			effects: { wisdom: 5 },
			hiddenEffects: {
				merfolk_shard_obtained: true,
				marina_friendship: 22,
				merfolk_faction_rep: 43,
				active_restoration: true
			}
		},
		{
			id: 'marina-trust',
			text: `Ask Ocean Queen to trust Marina's judgment - honor her vouching and the risk she's taking for you`,
			next: 'crystal_complete',
			effects: { charisma: 4 },
			hiddenEffects: {
				merfolk_shard_obtained: true,
				marina_friendship: 28,
				marina_romance: 25,
				marina_vouched: true,
				merfolk_faction_rep: 42
			}
		}
	]
};

const fragmentsAssembled = `You stand in the royal chamber, sunlight streaming through high windows to illuminate the scene with almost ceremonial grandeur. All five Crystal Heart fragments laid before you on an ancient altar carved with runes predating the kingdom itself - magical script that glows faintly in response to the fragments' presence. Each piece pulses with different energy: the Elven fragment shimmers with forest magic, Dwarven with earth resonance, Dragon with fire, Fae with reality-bending chaos, Merfolk with tidal rhythms. Together they create harmony, incomplete melody awaiting final notes.`;

const raceRepresentatives = `Lyra, Finn, Thorne, Zephyr, and Marina stand with you - representatives of the five magical races, united in single space for the first time in decades. The historical significance weighs heavy: these peoples were at war within living memory, viewed each other with suspicion and hostility, operated under assumption that cooperation was impossible. Now they stand together because you built bridges they thought permanently burned.`;

const lyraExplanation = `"The reassembly ritual requires all five races participating willingly," Lyra explains, voice carrying scholar's precision and emotion's tremor. "Each fragment must be willingly joined by its guardian race - freely given, not taken by force or coercion. This is why you needed to earn each fragment genuinely, why force would have shattered them permanently beyond any possibility of repair. The Crystal Heart recognizes intention, responds to unity, requires authentic alliance rather than strategic convenience."`;

const companionsReflection = `The companions you've gathered look to you with expressions complex beyond simple loyalty: trust earned through consistent action, friendship built through shared danger, perhaps something deeper for some. You haven't just collected magical artifacts - you've built bridges between peoples who had given up on unity, demonstrated that different species can work together toward shared purpose. Each companion represents not just their race but transformation of old hatreds into new possibilities.`;

const thorneWarning = `"When the Crystal Heart reforms," Thorne warns, voice grave, "the barrier between realms will strengthen dramatically. But the Shadowrealm will know immediately - they'll feel the shift, understand what it means." His eyes meet yours. "They will send everything they have against us. Not exploratory incursions but full invasion. We'll face the true war soon - perhaps within days. The fragment quest was preparation. Now comes the real test."`;

const finnDetermination = `Finn grips his hammer with craftsman's confidence and warrior's resolve. "Then let's make sure we face it together," he says firmly. "United. Five races standing side by side like we should have been all along. That's worth fighting for. That's worth dying for if necessary."`;

const ritualBeginning = `The fragments begin to glow in response to assembled races' unified intent, responding to collective will and shared purpose. Light intensifies: forest green, earth brown, fire red, chaos purple, ocean blue - colors blending, harmonizing, creating something greater than sum of parts. The reunion is beginning. The Crystal Heart remembers wholeness.`;

const getCrystalCompleteText = (): string => {
	return `${fragmentsAssembled}\n\n${raceRepresentatives}\n\n${lyraExplanation}\n\n${companionsReflection}\n\n${thorneWarning}\n\n${finnDetermination}\n\n${ritualBeginning}`;
};

export const CrystalComplete: Scene = {
	id: 'crystal_complete',
	get text() {
		return getCrystalCompleteText();
	},
	choices: [
		{
			id: 'unity-speech',
			text: `Deliver powerful speech about unity, hope, and the future you're building together across all species`,
			next: 'climax_preparation',
			effects: { charisma: 6, wisdom: 4 },
			hiddenEffects: {
				crystal_heart_restored: true,
				all_races_united: true,
				inspirational_leader: true,
				companions_loyal: true
			}
		},
		{
			id: 'solemn-ritual',
			text: `Complete ritual with solemn reverence and respect for the sacred significance of reunifying the Crystal Heart`,
			next: 'climax_preparation',
			effects: { wisdom: 5 },
			hiddenEffects: {
				crystal_heart_restored: true,
				all_races_united: true,
				respectful_leader: true
			}
		},
		{
			id: 'thank-companions',
			text: `Thank each companion individually and deeply - acknowledge their personal sacrifices and growth throughout this journey`,
			next: 'climax_preparation',
			effects: { charisma: 5 },
			hiddenEffects: {
				crystal_heart_restored: true,
				all_races_united: true,
				lyra_romance: 10,
				finn_romance: 10,
				thorne_romance: 10,
				zephyr_romance: 10,
				marina_romance: 10,
				all_companions_touched: true
			}
		},
		{
			id: 'acknowledge-sacrifice',
			text: `Acknowledge all sacrifices made to reach this moment - honor those lost and costs paid for possibility of victory`,
			next: 'climax_preparation',
			effects: { wisdom: 6 },
			hiddenEffects: {
				crystal_heart_restored: true,
				all_races_united: true,
				remembers_cost: true,
				wise_leader: true
			}
		}
	]
};

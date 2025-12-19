import { Scene } from '../../story-manager';

/**
 * RELATIONSHIPS: Deep relationship building with Kieran
 * Progression: Professional Soldier → Trusted Battle Partner → Romantic Interest (optional)
 * Themes: Military honor, survivors' guilt, tactical respect, vulnerability beneath armor
 */

export const KieranBonding1: Scene = {
	id: 'kieran_bonding_1',
	text: `You find Kieran in the training yard late at night beneath pale moonlight casting stark shadows across practice grounds, drilling sword forms with relentless intensity that speaks of desperate need rather than mere discipline. His movements are technically perfect with precise execution that would make weapons masters weep with admiration, but completely mechanical and empty of joy - like he's trying to exhaust himself into numbness so thorough that thoughts and feelings become impossible intrusions. Each strike cuts air with whistle of steel moving fast, each pivot executed with balance that comes from years of brutal training. Sweat soaks through his training shirt despite cool night air, muscles moving with practiced efficiency beneath fabric.

"Your Highness," he acknowledges with military precision without breaking stride or even faltering in complex form sequence, not allowing personal exhaustion to compromise professional bearing. "Couldn't sleep?" The question is polite but distant, keeping you at proper respectful distance through formality.

"Could ask you the same thing," you observe quietly, watching moonlight glint off blade with each measured strike.

Kieran finally stops mid-form with visible reluctance, breathing hard with chest heaving from sustained exertion that would drop most soldiers unconscious. His expression is carefully controlled with military mask firmly in place, but you catch something underneath if you watch closely - raw pain perhaps, or crushing guilt that never stops gnawing, or bone-deep exhaustion that goes far beyond physical. "Soldiers don't need much sleep," he says flatly with voice carefully empty of emotion, reciting doctrine like prayer. "Staying sharp is more important than comfort or rest." Sweat drips down temple but he doesn't acknowledge it, standing at perfect attention despite obvious exhaustion.

But there's something hollow in how he says it echoing in night air, like he's reciting military doctrine to avoid confronting something deeper and more painful than he can face. The words sound memorized, protective - armor made of regulations instead of steel.`,
	choices: [
		{
			id: 'join-training',
			text: 'Join the training - sweat and struggle together',
			next: 'kieran_bonding_1b',
			effects: { strength: 4, courage: 3 },
			hiddenEffects: {
				kieran_bond: 12,
				kieran_respects_commitment: true,
				warrior_peer: true
			}
		},
		{
			id: 'call-out',
			text: 'Call out what you see - he\'s punishing himself',
			next: 'kieran_bonding_1b',
			effects: { wisdom: 5, empathy: 3 },
			hiddenEffects: {
				kieran_bond: 15,
				kieran_seen_through: true,
				perceptive_observer: true
			}
		},
		{
			id: 'sit-and-wait',
			text: 'Sit quietly and wait - let him come to you',
			next: 'kieran_bonding_1b',
			effects: { empathy: 4 },
			hiddenEffects: {
				kieran_bond: 10,
				patient_presence: true,
				kieran_approaches: true
			}
		}
	]
};

export const KieranBonding1B: Scene = {
	id: 'kieran_bonding_1b',
	text: `Kieran sets down his sword heavily with metallic clang that rings too loud in quiet night, blade hitting stone with finality of confession about to break free. "I lost soldiers today," he says abruptly with voice raw and stripped of usual military precision, words tumbling out like wound opened. Not in actual battle - in strategic simulation you ran as tactical exercise. "Training exercise conducted safely in manor halls. Nobody died or even got scratched. But I made the wrong call in moment of decision, chose wrong tactic, and in real combat with actual enemies and sharp steel, that mistake would have cost lives. Multiple lives." His hands clench and unclench with visible tension, struggling for control that's slipping.

He looks at you directly, and for first time since you've known him, the perfect military bearing that's always firmly in place cracks like ice under pressure, revealing vulnerable human underneath armor of discipline. "I'm your military advisor entrusted with kingdom's defense. Your commander responsible for protecting you. I'm supposed to be flawless because people's lives depend directly on my decisions - their survival, their futures, everything." His voice drops to near whisper heavy with fear. "Your life depends on it most of all. And I'm terrified down to bones that I'll fail you the way I failed them before. That my mistakes will cost you everything."

"Them?" you prompt gently, recognizing pain behind words.

Kieran's jaw clenches hard enough you can see muscles jumping, teeth grinding together as memories surge up unwanted. "My first command three years ago when I was younger and stupider. I was so confident in my abilities, so certain I could handle anything thrown at me. Led my unit into ambush I should have seen coming from miles away." He swallows hard against emotion threatening to choke him. "Twenty soldiers under my command when we marched out. Twenty men and women who trusted me to bring them home safely." His voice breaks. "Twelve came home walking. The others... died screaming because I was too proud, too sure I could handle any situation without proper reconnaissance or caution."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { kieran_seen_through: true }
			},
			text: `Seeing that you already understood his self-punishment ritual before he explained it, recognizing pattern behind relentless midnight training, Kieran's carefully constructed defenses crumble further like fortress walls collapsing under sustained assault. "Every night without fail, I drill their names in my mind with each sword form," he confesses with voice shaking. "Every form executed perfectly, every strike cutting air - I dedicate it to one of them specifically. Thomas, who wanted to be blacksmith when service ended and talked endlessly about forge he'd build in hometown. Elena, who sang constantly on marches with voice like silver bells that kept morale up even in worst conditions. Marcus, who..." His voice breaks completely, unable to continue as grief overwhelms him.

"I don't let myself forget their faces or stories. Don't let myself sleep easy through peaceful nights. Because they can't anymore - they're rotting in ground because of me. Because I led them to death through my arrogance and overconfidence." He looks at you with desperate intensity, pleading for understanding or judgment or something. "How do I protect you adequately with that history of catastrophic failure? How do you trust someone who's already failed so completely, who got eight people killed through pride? What if I fail you the same way and your blood is on my hands too?"

The pain is raw and real and bleeding - a wound that's never healed, that he keeps deliberately open through nightly ritual of guilt and remembrance.`
		}
	],
	choices: [
		{
			id: 'share-burden',
			text: 'Share that you carry similar burdens - you\'re not alone',
			next: 'military_meeting',
			effects: { empathy: 6, wisdom: 4 },
			hiddenEffects: {
				kieran_bond: 22,
				mutual_understanding: true,
				shared_guilt: true,
				kieran_romance_seed: true
			}
		},
		{
			id: 'affirm-trust',
			text: 'Affirm complete trust - past mistakes made him stronger',
			next: 'military_meeting',
			effects: { charisma: 5, empathy: 4 },
			hiddenEffects: {
				kieran_bond: 18,
				kieran_burden_lightens: true,
				trust_affirmed: true
			}
		},
		{
			id: 'memorial-ritual',
			text: 'Suggest creating a proper memorial for his fallen soldiers',
			next: 'kieran_bonding_2',
			effects: { wisdom: 5, empathy: 5 },
			hiddenEffects: {
				kieran_bond: 20,
				kieran_healing_begins: true,
				ritual_of_remembrance: true,
				kieran_deeply_moved: true
			}
		},
		{
			id: 'embrace',
			text: 'Simply embrace him - sometimes words aren\'t enough',
			next: 'kieran_bonding_2',
			effects: { empathy: 7 },
			hiddenEffects: {
				kieran_bond: 25,
				physical_comfort: true,
				kieran_breaks_down: true,
				intimacy_seed: true,
				kieran_romance_possible: true
			}
		}
	]
};

export const KieranBonding2: Scene = {
	id: 'kieran_bonding_2',
	text: `Days later after giving him time to process vulnerable confession, Kieran formally requests private time with you for advanced combat training with expression serious as death itself. "You need to know how to fight properly," he says with intensity that brooks no argument. "Not dueling with pretty flourishes or ceremonial forms for court display. Real combat that's brutal and unforgiving. Dirty, desperate, survival fighting where only outcome that matters is staying alive by any means necessary."

He hands you practice weapon with weight balanced for serious training, not decorative showpiece. "I'm going to teach you exactly like you're one of my soldiers under my command, not precious royalty wrapped in silk," he says bluntly with gaze steady and challenging. "No holding back gentle strikes, no diplomatic treatment preserving royal dignity. If I'm going to trust myself to protect you when threats inevitably come, I need to know you can protect yourself competently when I fail or can't reach you in time. Because failure happens - I know that better than anyone."

The training is intensely demanding - he pushes you hard to physical limits but fairly within reason, correcting technique with tactical precision born from years of battlefield experience, demonstrating moves with efficiency that comes from survival instinct rather than academy teaching. Sweat soaks through your clothes, muscles scream protest, but he doesn't relent. And slowly as hours pass, you notice something significant: the crushing weight that always sits on his shoulders seems lighter than before. Teaching you, fighting beside you in sparring matches, working together toward shared goal - it's helping him heal in ways talking never could. Purpose replacing guilt.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { shared_guilt: true, kieran_romance_seed: true }
			},
			text: `During grappling drill demonstrating close-quarters defense techniques, Kieran pins you to training mat with body weight expertly distributed to immobilize without crushing. Both breathing hard from sustained exertion, faces suddenly close enough to feel each other's breath warm against skin, close enough to count eyelashes. For suspended moment that stretches too long, the professional distance you've carefully maintained wavers dangerously like flame in wind. His storm-grey eyes flick down to your lips with obvious intent before jerking away quickly, jaw clenching with effort of control. Sweat drips from his hair onto your cheek.

"Good defensive position," he says roughly with voice gone lower and huskier than tactical instruction warrants, deliberately looking away. "In real combat with actual enemy, use that moment of distraction when they hesitate. Strike hard and fast without mercy." But his calloused hands linger on your shoulders moment longer than necessary for demonstration, warmth seeping through fabric, thumbs unconsciously tracing small circles before he catches himself and pulls back like touching fire. You can feel his heartbeat racing against your chest - too fast for just exertion.

Later, as you're both cooling down from brutal training session and drinking water to replace lost sweat, he says quietly without meeting your eyes: "Thank you. For the other night when I broke down and revealed weakness. For understanding burden I carry without judgment or pity. For not seeing me as broken thing beyond repair needing charity." He finally looks at you, and there's something deeper than professional respect in his gaze - warmth and vulnerability and longing carefully restrained. "You're stronger than you know, more capable than you believe. And training with you like this, fighting beside you... it helps tremendously. Makes me feel like maybe I can actually do this impossible job. Be who you need me to be."

The gratitude in his storm-grey eyes holds warmth that's decidedly not just professional courtesy between commander and charge.`
		},
		{
			conditions: {
				hasHiddenAttributes: { trust_affirmed: true }
			},
			text: `"You're genuinely fast learner with natural instincts," Kieran observes with approval warming his usually stern expression, hint of pride breaking through military reserve. "Natural combat instincts that can't really be taught. Many nobles freeze completely in real combat scenarios when theory meets reality and danger becomes tangible, but you adapt fluidly, think on your feet, improvise effectively when situations change."

He adjusts your grip on practice weapon carefully, battle-scarred hands guiding yours with surprising gentleness despite roughness from years holding sword hilts, positioning fingers for optimal leverage and control. His touch is professional but somehow intimate - warrior teaching warrior secrets earned through blood and survival. "You trusted me enough to be vulnerable the other night, showing your own fears and doubts," he says quietly, standing close enough that you can feel warmth radiating from him. "That takes real courage - not battlefield bravado or reckless aggression, but genuine emotional courage to show weakness. Especially to someone like me who's supposed to be unshakeable protector."

His smile is small but genuine and precious - the first real smile you've seen from him breaking through perpetual stern mask, transforming harsh features into something almost soft. "Thank you for that trust you've placed in me despite my history of failure. I'll work every single day to deserve it and never let you down again." The promise in his eyes is absolute.`
		}
	],
	choices: [
		{
			id: 'excel-at-training',
			text: 'Push yourself to excel - match his intensity',
			next: 'kieran_bonding_3',
			effects: { strength: 5, courage: 5 },
			hiddenEffects: {
				kieran_bond: 15,
				kieran_impressed: true,
				warrior_respect: true
			}
		},
		{
			id: 'flirt-during-spar',
			text: 'Use closeness during sparring to flirt subtly',
			next: 'marina_ocean_depths',
			effects: { charisma: 5, courage: 3 },
			hiddenEffects: {
				kieran_bond: 14,
				kieran_flustered: true,
				romantic_tension: true,
				kieran_romance_advancing: true
			}
		},
		{
			id: 'ask-about-tactics',
			text: 'Ask deeper tactical questions - engage his expertise',
			next: 'marina_ocean_depths',
			effects: { wisdom: 5, strength: 2 },
			hiddenEffects: {
				kieran_bond: 16,
				intellectual_respect: true,
				tactical_partnership: true
			}
		},
		{
			id: 'train-together-equals',
			text: 'Propose ongoing training as equals, not teacher/student',
			next: 'marina_ocean_depths',
			effects: { strength: 4, charisma: 4 },
			hiddenEffects: {
				kieran_bond: 20,
				battle_partners: true,
				equal_warriors: true,
				kieran_honored: true
			}
		}
	]
};

export const KieranBonding3: Scene = {
	id: 'kieran_bonding_3',
	text: `A real threat emerges from shadows you thought secure - assassins infiltrate manor grounds past supposedly impenetrable defenses, armed with sharp steel and lethal intent. Kieran immediately positions himself between you and danger with instincts faster than conscious thought, sword drawn from sheath with metallic ring of death promise. "Stay behind me," he commands with voice carrying absolute authority that expects instant obedience, no longer advisor offering suggestions but commander protecting what matters most.

The fight is brief but brutal as violence always is when lives hang in balance. Kieran moves like force of nature unleashed - precise strikes cutting through enemies with efficiency born from necessity, deadly technique that wastes no motion, absolutely focused on protecting you above his own safety with single-minded intensity that borders on terrifying. Blood spatters across floor, assassins fall with cries of pain. When it's finally over and assassins are subdued or dead, bleeding on manor floor, he checks you for injuries with hands that tremble slightly despite years of battlefield control, searching for wounds with desperate thoroughness.

"Are you hurt? Tell me if you're hurt," His iron control is cracking like ice under spring sun, naked fear breaking through military discipline he's maintained for years. "Did they touch you even once? Gods, if anything had happened to you..." He stops himself abruptly, realizing he's gripping your shoulders too tightly with hands that could crush stone, trembling with adrenaline and terror he's not supposed to feel. Professional distance shattered by genuine panic.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { battle_partners: true }
			},
			text: `But you didn't hide behind him like precious ornament needing protection. You fought beside him as equal partner, moving together in combat like you've trained for years. Took down assassin yourself using precise techniques he taught you during brutal training sessions, applying lessons with efficiency that would make him proud.

Kieran looks at you with something like awe mixed with terror and pride, eyes wide with realization. "You didn't hide like I ordered," he says wonderingly, voice rough with emotion he usually suppresses ruthlessly. "You fought as my partner, not my charge. Stood beside me in real combat." His battle-scarred hand cups your face with surprising gentleness despite roughness, calloused thumb brushing your cheek where blood spatters mar skin - enemy blood, not yours. "You could have been killed easily. You should have stayed safe behind me where I could protect you absolutely. But you..." He swallows hard against emotion threatening to overwhelm trained control. "You had my back like true warrior. Covered my openings when I couldn't. Trusted me to cover yours."

In military tradition passed down through generations, shield-siblings are bonded warriors who trust each other completely with their lives - intimate connection that goes beyond friendship or mere professional respect. It's sacred bond forged in blood and survival, sometimes even romantic when hearts align. Kieran just called you that deliberately with full knowledge of implications, voice shaking with significance.`
		},
		{
			conditions: {
				hasHiddenAttributes: { kieran_romance_advancing: true }
			},
			text: `"I thought I'd lost you completely," Kieran admits with voice rough with emotion he's never allowed himself to express before, raw vulnerability bleeding through every word. "When I saw that blade coming toward you in slow motion, aimed for killing strike, I..." He pulls you close with desperate strength, armor and weapons still between you providing barrier but embrace fierce and protective regardless, holding you like you might disappear if he loosens grip. "I can't lose you. Not you specifically. Not after everything we've shared, everything you've done for me. Not after you helped me start healing from wounds I thought were permanent."

His forehead presses to yours with breath mingling warm and intimate, storm-grey eyes searching yours with intensity that steals breath. "This isn't just duty anymore protecting valuable charge," he confesses in whisper. "Hasn't been for a while now if I'm honest with myself. I care about you deeply. Too much for commander charged with protection. More than military advisor should care about their charge." His voice drops even lower, vulnerable and terrified. "Tell me to stop caring. To keep things professional and appropriate. Because if you don't draw boundary now, I don't think I can anymore. I'm falling and I can't stop myself."

The confession hangs between you in blood-soaked air, his heart pounding against yours hard enough to feel through armor, waiting for response that will determine everything.`
		}
	],
	choices: [
		{
			id: 'reassure-safety',
			text: 'Reassure him you\'re safe because of him',
			next: 'lyra_memorial',
			effects: { empathy: 5, charisma: 3 },
			hiddenEffects: {
				kieran_bond: 18,
				kieran_calms: true,
				protector_affirmed: true
			}
		},
		{
			id: 'kiss-him',
			text: 'Kiss him instead of answering with words',
			next: 'lyra_memorial',
			effects: { courage: 7, charisma: 5 },
			hiddenEffects: {
				kieran_bond: 30,
				kieran_romance: true,
				relationship_declared: true,
				kieran_relationship: 'romantic'
			}
		},
		{
			id: 'acknowledge-partnership',
			text: 'Acknowledge the partnership but need time for more',
			next: 'lyra_memorial',
			effects: { wisdom: 5, empathy: 4 },
			hiddenEffects: {
				kieran_bond: 15,
				kieran_relationship: 'developing',
				slow_burn: true,
				kieran_respects_pace: true
			}
		},
		{
			id: 'affirm-shield-siblings',
			text: 'Affirm shield-sibling bond - warrior soulmates',
			next: 'lyra_memorial',
			effects: { courage: 6, empathy: 4 },
			hiddenEffects: {
				kieran_bond: 25,
				shield_siblings: true,
				warrior_bond: true,
				kieran_relationship: 'battle_family'
			},
			realLifeChallenge: {
				id: 'kieran_physical_challenge',
				type: 'exercise',
				title: 'Physical Challenge Together',
				description: 'Like training with Kieran, do a physical activity with your partner',
				instructions: 'Exercise together with your partner - go for a run, work out at home, play a sport, or do yoga. Encourage each other and celebrate completing the challenge together.',
				durationMinutes: 30,
				verificationMethod: 'timer',
				rewards: {
					stats: { courage: 3, strength: 2, empathy: 2 },
					message: 'Training together built camaraderie, just like with Kieran.'
				}
			}
		}
	]
};

export const KieranRomancePath: Scene = {
	id: 'kieran_romance_path',
	text: `The kiss is fierce and desperate and consuming, full of relief at survival and fear of loss and longing suppressed too long. His lips crash against yours with warrior's intensity, claiming and surrendering simultaneously. When you finally part gasping for air, Kieran's storm-grey eyes are wide with wonder and vulnerability he's never allowed himself to show, walls crumbling completely.

"I shouldn't want this with every fiber of my being," he says hoarsely with voice shaking from emotion finally unleashed after years of suppression. "You're my charge, my solemn responsibility sworn before gods. Military code says this crosses every professional line drawn. Regulations forbid relationships that compromise objectivity." He cups your face in both calloused hands with touch reverent despite roughness from sword work, thumbs tracing cheekbones like memorizing something precious. "But codes and regulations written by commanders who never met you don't account for you specifically. For how you make me feel alive again after years of existing in guilt-soaked numbness. How you carry your own burdens with such quiet strength inspiring me. How you fight beside me like we were made for it, like we're two halves of warrior whole."

"I lost people I cared about through my arrogance," Kieran continues with voice breaking on words, old wounds reopening. "Swore I'd never let anyone that close again because I couldn't bear another loss destroying me. Couldn't survive watching someone else die because I failed them." He kisses you again, softer this time and achingly tender. "But you slipped past every defense I built so carefully. Made me hope again when I thought hope was dead. Made me want to protect something not out of duty but because I can't imagine a world without you in it breathing and laughing and challenging me."

He presses his forehead to yours with breath mingling intimate. "So yes. I want this despite everything. Want you with all I am. Whatever that means, however complicated it gets with politics and propriety. My shield-sibling, my..." He can't finish sentence, overcome by emotion too big for words.`,
	choices: [
		{
			id: 'affirm-devotion',
			text: 'Affirm your devotion - you choose him, all of him',
			next: 'kieran_romance_continue',
			effects: { empathy: 6, charisma: 5 },
			hiddenEffects: {
				kieran_bond: 35,
				kieran_romance_level: 2,
				devoted_partners: true,
				kieran_healing_complete: true
			},
			realLifeChallenge: {
				id: 'kieran_emotional_support',
				type: 'social',
				title: 'Provide Emotional Support',
				description: 'Like supporting Kieran through his guilt, be there for your partner during a difficult moment',
				instructions: 'Have a conversation with your partner about something that\'s been weighing on them. Listen without judgment, offer support without trying to fix everything. Let them know you\'re there for them.',
				durationMinutes: 30,
				verificationMethod: 'honor',
				rewards: {
					stats: { empathy: 4, wisdom: 2 },
					message: 'Your support strengthened your bond, just as you helped Kieran heal.'
				}
			}
		},
		{
			id: 'promise-protection',
			text: 'Promise to protect each other - equal partnership',
			next: 'kieran_romance_continue',
			effects: { courage: 6, strength: 4 },
			hiddenEffects: {
				kieran_bond: 33,
				kieran_romance_level: 2,
				warrior_romance: true,
				mutual_protection: true
			}
		}
	]
};

export const KieranRomanceContinue: Scene = {
	id: 'kieran_romance_continue',
	text: `Your romance with Kieran becomes powerful force of healing and strength transforming both of you. The warrior who'd closed off his heart completely to avoid devastating loss learns to love fiercely and protectively again, without reservation or constant fear. Guilt that consumed him transforms into purpose - not destroying himself through endless penance but honoring fallen through living fully.

"You've given me something I genuinely thought I'd lost forever in blood and screaming," Kieran says with voice warm, holding you close after intense training session that left you both exhausted and exhilarated. Sweat cools on skin, muscles pleasantly aching. "Hope beyond mere survival. The ability to imagine future beyond just duty and atonement." He kisses your forehead with tenderness that makes chest ache. "I protect you not because it's my job assigned by command, but because I can't imagine world without you in it - your laugh, your strength, your stubborn determination. That's terrifying because it makes you vulnerability, and wonderful all at once because it means I'm alive again."

Together you redefine what warrior devotion means through actions rather than words - not just protection from threats but genuine partnership of equals, not just duty imposed from outside but choice made freely every day.`,
	textVariants: [
		{
			conditions: { hasFlags: ['devoted_partners'] },
			text: `Your romance with Kieran reaches profound depths as his emotional healing completes through your unwavering support and love. The guilt that haunted him nightly with names and faces transforms into renewed purpose - protecting you not from obligation or penance, but from genuine love that fills spaces grief carved hollow.

"You saved me," Kieran admits during quiet moment alone in your chambers, vulnerability he once would have died before showing. "Not from physical danger on battlefield, but from drowning slowly in my own guilt and self-destruction. You showed me I deserve connection again despite failures, deserve happiness even though I led people to death." He holds you like you're precious and irreplaceable, most valuable treasure in kingdom. "I love you with everything I am - every scar that tells story of survival, every painful memory transformed into lesson, every hard-won skill protecting what matters. You have all of me completely. Every broken piece you've helped make whole again."

Your love is forged in mutual healing and transformation, absolute devotion freely given, and warrior's honor that makes promises unbreakable as steel.`
		},
		{
			conditions: { hasFlags: ['warrior_romance'] },
			text: `Your romance with Kieran becomes partnership of absolute equals refusing hierarchy. You protect each other on battlefield and off it with mutual devotion, two warriors bound by love and unshakeable respect earned through blood and trust.

"Shield-siblings who became more than tradition allows," Kieran says with rare genuine smile transforming stern features, standing beside you after successful mission. "I never thought I'd have partner who fights beside me as true equal, who doesn't need protection like delicate flower but chooses mutual defense as conscious partnership." He grips your shoulder in warrior's gesture of profound respect usually reserved for legendary heroes. "You're my equal in battle with skill I helped forge but courage all your own, and my partner in everything else life throws at us. That's rarer than you know - precious beyond gold."

Your love is built on foundation of equality carefully maintained, mutual protection freely chosen, and warrior's bond transformed into romance without losing sacred core.`
		}
	],
	choices: [
		{
			id: 'continue-together',
			text: 'Continue as devoted partners',
			effects: { courage: 7, empathy: 6 },
			hiddenEffects: {
				kieran_bond: 30,
				warrior_soulmates: true,
				kieran_endgame: 'romantic_partner'
			}
		}
	]
};

export const KieranMemorialCreation: Scene = {
	id: 'kieran_memorial_creation',
	text: `You help Kieran create proper memorial for his fallen soldiers, giving them honor they deserve. In manor's chapel with stained glass casting colored light across stone, twelve candles arranged carefully - one for each precious life lost under his command. He speaks each name with reverence bordering on prayer, voice shaking with emotion: Thomas who dreamed of blacksmithing, Elena who sang like silver bells, Marcus whose laugh could lift any mood. Shares their stories with detail that shows he's remembered everything about them - their hopes, their fears, their humanity. Lets himself grieve properly for first time instead of channeling it into punishing midnight training, tears flowing freely without shame.

When sacred ritual is finally complete, Kieran stands before memorial with tears streaming down scarred face unchecked. "Thank you," he says to you with voice raw from weeping and speaking names aloud. "For letting them be remembered as people, not just tactical failures. For giving them honor and recognition they earned." He takes your hand in his, grip tight with gratitude. "I've carried their deaths like punishment I deserved, whipping myself bloody with guilt every night. But you've helped me see I can honor their memory faithfully without destroying myself in process. That remembrance doesn't require self-destruction."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { kieran_romance: true }
			},
			text: `"You've given me permission to live again instead of merely existing," Kieran says, turning from memorial to face you with eyes red from cathartic weeping. "To feel joy and hope again without crushing guilt. To want things beyond endless penance that never brings them back." He kisses your forehead gently with lips soft against skin, touch reverent and full of love. "They wouldn't want me to suffer forever in their names, wouldn't want me destroying myself slowly. They'd want me to fight for something worth protecting, something worth living for rather than just dying slowly."

He gestures to you with hand trembling slightly from emotion. "You're worth protecting above everything. Worth living for with full heart. And maybe..." His voice cracks with vulnerability and hope mingling together. "Maybe worth letting myself be happy for, despite history and failures. Maybe I deserve love too."`
		}
	],
	choices: [
		{
			id: 'annual-ritual',
			text: 'Establish annual memorial ritual together',
			next: 'kieran_healing_complete',
			effects: { wisdom: 5, empathy: 5 },
			hiddenEffects: {
				kieran_bond: 22,
				memorial_established: true,
				shared_ritual: true,
				kieran_at_peace: true
			}
		}
	]
};

export const KieranCombatMission: Scene = {
	id: 'kieran_combat_mission',
	text: `Your first real combat mission together facing actual enemies with lethal intent - investigating dangerous threat in borderlands where kingdom authority weakens and violence rules. Kieran is all business during planning phase, studying maps and intelligence with tactical focus, but you catch him watching you repeatedly with protective intensity that goes beyond professional concern.

"Remember everything I taught you," he says seriously, checking your armor personally with meticulous attention to every strap and buckle. Strong fingers test each piece for security. "Stay aware of surroundings constantly, trust your combat instincts I've helped hone, and..." He hesitates, military mask slipping to show fear beneath. "Stay alive. For me specifically, not just duty."

The mission tests everything you've trained for brutally. Kieran fights like violent poetry in motion - brutal strikes ending lives efficiently, movements flowing like deadly dance, beautiful in terrible way that only combat can be. But he's also constantly aware of your exact position instinctively, adjusting tactics fluidly to keep you safe while respecting your proven ability to fight competently. Protecting without smothering.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { shield_siblings: true }
			},
			text: `You move together like you've fought side by side for years through countless battles, not weeks of training. Kieran covers your vulnerable openings instinctively when you commit to strikes, you cover his back when enemies try flanking maneuvers. When enemies attempt surrounding him with numbers, you're already there with blade ready. When you're pressed by skilled opponent, his sword appears like clockwork to create opening. Perfect synchrony born from absolute trust.

After brutal fight leaves bodies scattered, Kieran grips your shoulder with profound respect written across features. "That's what shield-siblings means in truest sense," he says with fierce pride warming voice. "Perfect synchrony in combat. Complete trust that your partner has your back when you can't defend yourself. I'd follow you into any battle without hesitation, trust you with my life absolutely."

It's highest honor warrior can give another, acknowledgment of bond deeper than friendship or mere professional respect.`
		},
		{
			conditions: {
				hasHiddenAttributes: { kieran_romance: true }
			},
			text: `At one critical point during chaos, you save Kieran from blade aimed at his exposed back during fierce exchange, deflecting killing blow at last possible instant. He spins with shock written across features, then pulls you into fierce kiss right there on blood-soaked battlefield with bodies scattered around, uncaring about propriety or witnesses.

"Don't ever scare me like that again," he growls against your lips with voice rough from fear and adrenaline. Then softer, vulnerable: "Thank you for having my back. For being my partner in absolutely everything - combat and life both."

The other soldiers fighting nearby pretend not to see intimate moment, but you catch their approving smiles and knowing glances. Warrior romances are respected deeply in military culture - bonds forged in battle's crucible considered sacred and unbreakable.`
		}
	],
	choices: [
		{
			id: 'debrief-together',
			text: 'Debrief tactical decisions together as equals',
			next: 'kieran_partnership_deepens',
			effects: { wisdom: 5, strength: 4 },
			hiddenEffects: {
				kieran_bond: 20,
				tactical_equals: true,
				kieran_respects_strategy: true
			}
		},
		{
			id: 'celebrate-victory',
			text: 'Celebrate the victory together - let loose after battle',
			next: 'kieran_partnership_deepens',
			effects: { charisma: 5, courage: 4 },
			hiddenEffects: {
				kieran_bond: 18,
				kieran_relaxes: true,
				fun_together: true,
				kieran_laughs: true
			}
		}
	]
};

export const KieranPartnershipDeepens: Scene = {
	id: 'kieran_partnership_deepens',
	text: `After intense mission testing you both, your partnership with Kieran reaches new level of depth and understanding. Whether as battle-companions fighting side by side, shield-siblings bonded by warrior tradition, romantic partners loving fiercely, or relationship still developing toward definition, the trial by combat has proven conclusively what you mean to each other beyond any doubt.

"You're not just my charge anymore requiring protection," Kieran says as you return to manor with mission accomplished and bodies left behind. Blood still stains armor, adrenaline slowly fading. "You're my equal in every way that matters. My partner who fights beside me. Someone I trust absolutely with my life and heart." He meets your eyes with profound respect and deep affection transforming stern features. "Whatever form this takes between us, whatever we call it - this bond is real and solid. Unbreakable as tempered steel. Forged in vulnerability and tested in battle."

Your relationship, forged initially in vulnerability when he confessed guilt and tested repeatedly in combat proving worth, has become one of most important connections in both your lives - defining and transformative.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { kieran_romance: true }
			},
			text: `"I love you," Kieran says simply with absolute conviction, no hesitation or qualification needed. "Not just attracted to or fond of. I love you deeply. The way warriors love their shield-mates with lives entrusted. The way I never thought I'd love anyone again after losing my unit and closing heart to avoid pain."

He takes your hand in his calloused one, thumb tracing patterns. "You've healed wounds I thought were permanent and would define me forever. Given me permission to feel joy and hope, to hope for future, to want life beyond endless atonement for failures. Thank you for that gift. For us and what we've built together." His eyes shine with emotion.`
		}
	],
	choices: [
		{
			id: 'move-forward',
			text: 'Move forward together, ready for whatever comes next',
			effects: { courage: 5, empathy: 5 },
			hiddenEffects: {
				kieran_bond: 20,
				partnership_complete: true,
				kieran_fully_trusts: true
			}
		}
	]
};

export const KieranRelationshipResolution: Scene = {
	id: 'kieran_relationship_resolution',
	text: `Your relationship with Kieran settles into something solid and meaningful that will define both your futures, even if not explicitly romantic in nature. The trust between you runs deep as river carved through stone - warrior to warrior respecting combat skill, leader to advisor valuing tactical wisdom, person to person caring genuinely beyond roles assigned.

"This works beautifully," Kieran says with satisfaction warming usually stern expression, standing beside you overlooking training grounds. "Clear understanding between us, mutual respect earned through action, honest communication without games. Whether we're romantic partners loving fiercely, shield-siblings bonded by warrior tradition, or close friends developing over time into something undefined - what matters fundamentally is the trust we've built. The bond forged through vulnerability and combat both."

He clasps your forearm in ancient warrior's greeting showing profound respect, grip firm and warm. "You've given me something I genuinely thought I'd lost forever in blood and screaming: the ability to connect with another person without paralyzing fear. To care deeply without terror of loss destroying me. That's precious gift beyond price, regardless of romantic labels or formal definitions."`,
	choices: [
		{
			id: 'affirm-bond',
			text: 'Affirm the bond between you, whatever form it takes',
			effects: { wisdom: 5, empathy: 4 },
			hiddenEffects: {
				kieran_bond: 18,
				relationship_defined: true,
				mutual_peace: true
			}
		}
	]
};

export const KieranHealingComplete: Scene = {
	id: 'kieran_healing_complete',
	text: `The memorial becomes sacred annual ritual observed faithfully. Each year without fail, you and Kieran gather in chapel to honor fallen soldiers - speaking their names with reverence so they're never forgotten, lighting twelve candles that flicker in darkness, sharing stories that keep their memory alive and human. The ritual helps Kieran honor precious memory without drowning in crushing guilt that once consumed him, transforming grief into remembrance.

"They're at peace now," Kieran says one year during ceremony, and you realize with profound relief he finally believes it completely rather than just hoping. Tension that's lived in his shoulders for years has finally released. "And so am I. Thanks to you showing me path forward."

Whatever your relationship's form - romantic partnership loving fiercely, platonic bond deep as blood, connection still developing toward future - it's helped Kieran heal wounds he thought were permanent scars defining him forever. The memorial stands as testament visible to all: you can honor the dead faithfully without being destroyed by grief. You can remember loss without letting it define your entire existence. Healing is possible even from deepest wounds.`,
	choices: [
		{
			id: 'continue-ritual',
			text: 'Continue the ritual together, year after year',
			effects: { wisdom: 5, empathy: 6 },
			hiddenEffects: {
				kieran_bond: 15,
				kieran_fully_healed: true,
				shared_tradition: true
			}
		}
	]
};

import { Scene } from '../../story-manager';

/**
 * RELATIONSHIPS: Deep relationship building with Seraphine Brightwater
 * Progression: Noble Tutor → Genuine Friend → Romantic Interest (optional)
 * Themes: Class barriers, loneliness of perfection, bridging worlds, authentic connection
 */

export const SeraphineBonding1: Scene = {
	id: 'seraphine_bonding_1',
	text: `You find Seraphine in the library late in the evening, surrounded by diplomatic protocols and historical precedents. She's in her element—perfectly poised at the mahogany desk, immaculately dressed in a gown of deep sapphire that matches the Brightwater house colors, not a single golden hair out of place in its elegant updo. The picture of noble grace and refined competence. But when she thinks no one's watching, when she believes herself alone with her documents, her shoulders slump with bone-deep exhaustion. The mask slips, revealing the weariness beneath the perfection.

"Oh! Your Highness," she recovers instantly, muscle memory taking over. The slumped shoulders straighten, the tired expression smooths into polite attentiveness, and she rises to deliver a perfect curtsy—precisely the correct depth for greeting the heir apparent in an informal setting. Everything about her screams careful training, years of conditioning. "I was preparing materials for your etiquette lesson tomorrow morning. The Ironforge delegation expects specific formalities—quite particular about their traditions, as mountain folk tend to be. I wanted to ensure you're properly prepared."

She gestures to the stacks of documents covering the table—leather-bound books, carefully organized parchments, handwritten notes in her precise script. "I've organized everything by priority and urgency. Greeting protocols for the delegation head versus subordinates, seating arrangements that honor their clan hierarchies, gift-giving customs to avoid accidental insults, appropriate conversation topics and those to carefully avoid..." She trails off mid-explanation, finally noticing your expression. A flicker of uncertainty crosses her perfect features. "Too much?" she asks quietly, and for just a moment she sounds young, uncertain, afraid she's failed at the one thing she's supposed to be expert at.`,
	choices: [
		{
			id: 'ask-about-her',
			text: 'Ask about her, not just lessons - how is she?',
			next: 'seraphine_bonding_1b',
			effects: { empathy: 4, charisma: 3 },
			hiddenEffects: {
				seraphine_bond: 12,
				seraphine_surprised: true,
				personal_interest: true
			}
		},
		{
			id: 'notice-exhaustion',
			text: 'Notice her exhaustion and suggest taking a break',
			next: 'seraphine_bonding_1b',
			effects: { empathy: 5, wisdom: 2 },
			hiddenEffects: {
				seraphine_bond: 15,
				seraphine_seen: true,
				caring_gesture: true
			}
		},
		{
			id: 'challenge-formality',
			text: 'Gently challenge the excessive formality between you',
			next: 'seraphine_bonding_1b',
			effects: { charisma: 5, courage: 3 },
			hiddenEffects: {
				seraphine_bond: 14,
				seraphine_uncertain: true,
				breaking_barriers: true
			}
		}
	]
};

export const SeraphineBonding1B: Scene = {
	id: 'seraphine_bonding_1b',
	text: `Seraphine's perfect composure wavers like a flag in uncertain wind. "I'm... managing," she says carefully, each word measured and diplomatic. The automatic response of someone trained never to complain, never to show weakness. Then, perhaps because she's exhausted past the point of maintaining every defense, or perhaps because you've shown genuine concern instead of just polite inquiry, the truth slips out: "It's harder than I expected. Being here. Being away from everything familiar."

She sits—actually sits without being invited to, momentarily forgetting the propriety that usually governs her every movement. It's such an un-Seraphine thing to do that it's almost shocking. "At House Brightwater, I was Lady Seraphine. Important. Respected. In control of my domain. People valued my expertise, sought my counsel, treated me as someone who mattered." Her hands twist together in her lap, another uncharacteristic gesture of anxiety. "Here, I'm... I'm the stuffy noble everyone tolerates because they have to. The uptight etiquette teacher no one actually likes."

Her voice drops lower, becomes rawer. "Rowan thinks I'm pretentious—treats me like I'm a walking rulebook designed to suck the joy out of everything natural and free. Finn calls me 'Your Ladyship' like it's an insult, like being noble is something to be ashamed of. Even you sometimes look at me like I'm a lesson you have to endure, an obligation rather than a person." She blinks rapidly, fighting tears that proper Lady Brightwater would never shed. "I know court etiquette inside and out. I can recite diplomatic protocols from a dozen kingdoms, navigate complex political negotiations, represent my House with perfect grace. But I don't know how to just... be with people. Not as Lady Seraphine performing nobility for an audience, but as..." She looks utterly lost, vulnerable in a way you've never seen. "As just Seraphine. And honestly? I'm not sure that person even exists anymore. I've been Lady Brightwater for so long, I don't know where the role ends and the real person begins. If there even is a real person underneath all this polish and training."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { seraphine_seen: true }
			},
			text: `"You saw through it, didn't you?" Seraphine asks quietly, voice barely above a whisper. She's not looking at you directly, can't quite meet your eyes. "Past the perfect manners and carefully diplomatic words. Past the performance of nobility I maintain every waking moment. You saw that I'm exhausted. That I'm lonely. That I'm..." She swallows hard. "That I'm drowning in expectations and don't know how to ask for help because asking for help means admitting imperfection, and Lady Brightwater cannot be imperfect."

She looks at you with rare, devastating vulnerability—the mask completely fallen away. "I've spent so long being what everyone expects. The model noble daughter who never questions, never rebels, never wants anything for herself. The perfect diplomatic representative who always says the right thing, makes the strategic choice, prioritizes House interests over personal desires. I've forgotten what I actually want. If I want anything at all beyond fulfilling my assigned role."

Her voice drops even lower, becomes almost confessional. "My mother trained me from age three. Every gesture calculated for maximum diplomatic effect. Every word measured to avoid offense while advancing Brightwater interests. Every facial expression controlled to project exactly the impression needed in any given situation." She mimics her mother's voice with bitter accuracy: "'You represent House Brightwater, Seraphine. Never forget that. Every moment, every interaction, you are our ambassador. Never be less than perfect. Never embarrass the family name. Never prioritize your own desires over duty.'"

Her laugh is bitter, broken. "I'm twenty-three years old and I don't know what foods I actually like because I've always eaten what's diplomatically appropriate for the occasion. I don't know my favorite color because I always wear Brightwater blue to represent the House. I don't know if I even have genuine preferences anymore or if they've all been trained out of me." Her voice cracks. "How pathetic is that? How sad, to be so thoroughly erased by expectations that you don't even know if you exist?"

Tears threaten but she fights them with practiced, iron control—decades of training insisting that proper nobles don't cry, don't show weakness, don't let emotion override composure. Old habits die hard, even when they're killing you.`
		}
	],
	choices: [
		{
			id: 'share-own-struggle',
			text: 'Share your own struggle with expectations and masks',
			next: 'kingdom_briefing',
			effects: { empathy: 6, wisdom: 4 },
			hiddenEffects: {
				seraphine_bond: 22,
				mutual_understanding: true,
				shared_burden: true,
				seraphine_romance_seed: true
			}
		},
		{
			id: 'discover-together',
			text: 'Offer to discover who "just Seraphine" is together',
			next: 'kingdom_briefing',
			effects: { charisma: 5, empathy: 4 },
			hiddenEffects: {
				seraphine_bond: 20,
				journey_together: true,
				seraphine_hopeful: true,
				seraphine_romance_possible: true
			}
		},
		{
			id: 'affirm-worth',
			text: 'Affirm her worth beyond diplomatic utility',
			next: 'kingdom_briefing',
			effects: { empathy: 5, charisma: 4 },
			hiddenEffects: {
				seraphine_bond: 18,
				seraphine_valued: true,
				beyond_function: true
			}
		},
		{
			id: 'break-protocol',
			text: 'Break protocol deliberately - do something improper together',
			next: 'kingdom_briefing',
			effects: { courage: 5, charisma: 5 },
			hiddenEffects: {
				seraphine_bond: 20,
				seraphine_scandalized: true,
				liberating_moment: true,
				seraphine_laughs: true
			}
		}
	]
};

export const SeraphineBonding2: Scene = {
	id: 'seraphine_bonding_2',
	text: `You arrange an "improper" outing with Seraphine—visiting Thornhaven's bustling market not as royalty conducting official state business, but as normal people simply experiencing the city. She's visibly nervous about everything: the casual clothes borrowed from the servants' quarters that feel wrong against her skin, the lack of formal protocols guiding every interaction, the absence of guards and attendants creating proper distance from the common folk. She keeps tugging at the simple cotton dress as if it might somehow transform into proper noble silks if she adjusts it enough.

"I don't know what to do," she admits, standing at the market's edge looking genuinely lost and frightened. Her hands flutter uncertainly, seeking some protocol to hold onto like a drowning person seeks driftwood. "Without diplomacy to guide me, without proper role to play, without knowing who I'm representing and what impression I need to make... what am I supposed to say? How am I supposed to act? What's the etiquette for not having etiquette?" She looks at you almost desperately. "I've never just... existed without purpose. Without performance. I don't know how."

At a food stall selling roasted meat skewers dripping with sauce and rolled in spices, you buy something decidedly un-diplomatic—messy street food that requires eating with your hands and will definitely stain clothing. Seraphine stares at the offered skewer like it might explode or attack. Her perfectly trained noble instincts scream in horror at the impropriety. "This is... Lady Brightwater would never eat something so... so common and messy in public. I'm not sure I should... Mother would be scandalized. There's no dignified way to eat this." But underneath the trained resistance, you can see curiosity flickering in her eyes—genuine interest in this forbidden experience, this taste of freedom she's never allowed herself. She reaches for it tentatively, then pulls back. Reaches again. The internal war between conditioning and desire plays out across her expressive face.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { shared_burden: true, seraphine_romance_seed: true }
			},
			text: `"You understand, don't you?" Seraphine says softly as you walk through the market's crowded lanes, weaving between merchants calling their wares and children playing tag around the stalls. "The weight of being a symbol instead of a person. A title instead of a name. Everyone seeing what you represent before they see who you are." She glances at you sideways, and there's recognition in her eyes—the understanding of someone who's found a kindred spirit in unexpected circumstances. "You're the heir apparent, I'm House Brightwater's representative. We're both performing roles every waking moment. Both drowning in expectations. Both wondering who we'd be if we could just... stop."

She takes your hand impulsively—a gesture of connection, of solidarity, of something neither of you is quite ready to name. The moment her fingers touch yours, she realizes what she's done, and old training makes her start to pull away. Improper. Inappropriate. Forward. But you hold on, refusing to let her retreat behind propriety again. "Is this proper?" she asks, breathless, voice trembling slightly. "I don't know if heirs and diplomatic tutors should... if there are protocols about..." But even as she questions it, she doesn't let go either. Her fingers tighten around yours, holding on like you're an anchor in uncertain waters.

The market's noise surrounds you—merchants haggling, children laughing, music from a street performer, the general chaos of commerce and life—but suddenly you're in a bubble of just the two of you. The world narrows to the connection between your hands, the way she's looking at you with desperate hope. "Thank you," Seraphine says, and her voice is thick with emotion she's trying and failing to control. "For seeing me. Not Lady Seraphine, perfect diplomat. Not the etiquette expert, the political asset, the Brightwater representative. Just... me. Just Seraphine, whoever she is beneath all the training and expectations." Her eyes search yours with unexpected intensity, vulnerable and open in a way she never allows herself to be. "I don't think anyone's ever really seen me before. Just what I can do for them. But you see who I am. And that's..." She can't finish, overcome.`
		},
		{
			conditions: {
				hasHiddenAttributes: { liberating_moment: true }
			},
			text: `When Seraphine finally tries the street food—taking a tentative, nervous bite and then freezing as flavor hits her tongue—her eyes widen dramatically. "Oh! This is... this is actually delicious?" The statement comes out as a question, as if she can't quite believe her own taste buds. She takes another bite, less tentative this time, and then laughs—genuine, uncontrolled, completely unladylike laughter that turns heads in the market. It's the sound of someone discovering joy for the first time, and it transforms her entire face. "I can't believe I've been eating bland, diplomatically appropriate banquet food for twenty-three years when THIS exists! When there's actual flavor and spice and—" She laughs again, giddy with the revelation. "This is amazing!"

She looks at you with pure, unguarded joy—no diplomatic mask, no careful composure, just genuine delight. Sauce smears the corner of her mouth and she doesn't even care. "Is this what I've been missing my entire life? Being too proper, too controlled, too afraid of being improper to actually experience anything real?" She spins around right there in the middle of the market, arms spread wide, nearly improper in her enthusiasm—Lady Brightwater would be absolutely scandalized. "What else don't I know? What else have I denied myself out of fear of not being perfect? What experiences have I missed because they weren't dignified enough, appropriate enough, noble enough?"

She grabs your hands, pulling you into her spontaneous dance, laughing breathlessly. "There's a whole world I've never let myself experience! Food and music and mess and joy and—" She stops mid-spin, looking at you with wonder. "And you're showing it to me. You're giving me permission to be imperfect. To be real. To be free."

It's like watching someone discover freedom for the first time—watching chains fall away and a spirit emerge that's been locked behind propriety and expectations for decades. Watching Seraphine become herself.`
		}
	],
	choices: [
		{
			id: 'explore-more',
			text: 'Explore more of the market - let her discover herself',
			next: 'seraphine_bonding_3',
			effects: { charisma: 4, empathy: 4 },
			hiddenEffects: {
				seraphine_bond: 15,
				seraphine_discovering: true,
				fun_together: true
			}
		},
		{
			id: 'flirt-gently',
			text: 'Flirt gently - suggest she\'s beautiful without the mask',
			next: 'seraphine_bonding_3',
			effects: { charisma: 6 },
			hiddenEffects: {
				seraphine_bond: 18,
				seraphine_blushes: true,
				romantic_tension: true,
				seraphine_romance_advancing: true
			}
		},
		{
			id: 'teach-casual',
			text: 'Teach her casual interaction - just talking with people',
			next: 'seraphine_bonding_3',
			effects: { charisma: 5, wisdom: 3 },
			hiddenEffects: {
				seraphine_bond: 16,
				social_learning: true,
				seraphine_grateful: true
			}
		},
		{
			id: 'make-adventure',
			text: 'Make this a regular thing - weekly improper adventures',
			next: 'seraphine_bonding_3',
			effects: { charisma: 5, courage: 3 },
			hiddenEffects: {
				seraphine_bond: 20,
				regular_adventures: true,
				special_tradition: true,
				seraphine_excited: true
			}
		}
	]
};

export const SeraphineBonding3: Scene = {
	id: 'seraphine_bonding_3',
	text: `Late one evening, you find Seraphine in an utterly uncharacteristic state that would scandalize anyone who knows her reputation for perfection. Her usually immaculate golden hair is slightly mussed, escaping from its pins in disheveled strands. Her elegant dress is wrinkled and creased as if she's been sitting motionless for hours. Most shocking of all, she's sitting on the floor—actually sitting on the floor like a common person, not a noble lady—with documents spread in chaotic disarray around her. The carefully organized world of Lady Seraphine has collapsed into disorder. Her face is blotchy and red. She's been crying—no, she's still crying, tears tracking silently down her cheeks despite her attempts to maintain some shred of composure.

"Your Highness, I..." She tries to compose herself, to summon the diplomatic mask that's been her shield for twenty-three years, but she can't. The mask is shattered beyond repair, at least in this moment. "I failed. The Ironforge negotiations today—I gave you the wrong protocol. Confused their mountain clan hierarchies with the lowland clans. Duke Thorin was offended—deeply offended—by what he saw as deliberate disrespect." Her voice shakes with the magnitude of the disaster. "I've damaged relations with a Great House. Created a diplomatic incident. Insulted powerful allies. Because I was..." She chokes on the word, can barely force it out. "Because I was incompetent. Careless. Not good enough."

For someone whose entire identity, whose entire sense of self-worth, is built on diplomatic perfection and never making mistakes, this failure is absolutely devastating—an earthquake shaking her fundamental understanding of who she is. "My mother will hear about this," she says with something like terror. "All of House Brightwater will know that I couldn't perform the ONE thing I'm supposed to be good at. The only thing that makes me valuable. That makes me worth anything." Her voice breaks completely. "What use am I if I can't even do this right? If I fail at the only role I've been trained for since age three? What's my purpose? What's my worth?" She looks up at you with devastated eyes. "I'm useless. Worse than useless—I'm actively harmful. Maybe my mother should assign someone more competent. Someone who won't fail you."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { seraphine_romance_advancing: true, mutual_understanding: true }
			},
			text: `"I keep thinking about the market," Seraphine admits through tears, voice breaking. "How free I felt walking through the crowds with you. How happy. How alive, like I was experiencing the world for the first time instead of just performing my way through it. And I wonder if letting myself want that—want to be just Seraphine instead of perfect Lady Brightwater, want to experience joy instead of just duty—if that's what made me fail today." She looks at you with something like guilt mixed with defiance. "Like I'm being punished for wanting something for myself. For letting my guard down. For choosing happiness over constant vigilance. Like the universe is proving my mother right—that personal desires make you weak, make you fail, make you incompetent."

She looks at you desperately, tears streaming freely now. "But I don't want to go back to being empty perfection. I don't want to go back to the prison I've lived in my whole life, even if it's safer there. You've shown me what it's like to be seen—really seen, not just evaluated for utility. To be wanted for who I am, not what I represent or what political advantage I offer." Her voice drops to a whisper, intimate and terrifying. "I think about you constantly. About your kindness when I expected judgment. About your acceptance when I'm used to criticism. About how being with you feels like I can finally breathe after holding my breath for twenty-three years."

She reaches for you, then hesitates, torn between desire and propriety. "I think I'm falling in love with you," she whispers, and the admission costs her everything—every wall she's built, every defense she's maintained, every careful barrier between feeling and performance. "And that terrifies me more than any diplomatic failure ever could."

The confession is raw, vulnerable, everything Seraphine has been trained never to show. Every rule she's breaking. And she's breaking them for you.`
		}
	],
	choices: [
		{
			id: 'comfort-her',
			text: 'Hold her and insist her worth isn\'t about perfection',
			next: 'kieran_dilemma',
			effects: { empathy: 7, charisma: 4 },
			hiddenEffects: {
				seraphine_bond: 25,
				seraphine_comforted: true,
				worth_affirmed: true,
				seraphine_breaks_down: true
			}
		},
		{
			id: 'confess-feelings',
			text: 'Confess that you care about her, not her diplomacy',
			next: 'kieran_dilemma',
			effects: { charisma: 6, empathy: 5 },
			hiddenEffects: {
				seraphine_bond: 30,
				seraphine_romance: true,
				feelings_declared: true,
				seraphine_relationship: 'romantic'
			}
		},
		{
			id: 'reframe-failure',
			text: 'Help her reframe failure as growth, not weakness',
			next: 'kieran_dilemma',
			effects: { wisdom: 6, empathy: 4 },
			hiddenEffects: {
				seraphine_bond: 20,
				perspective_shift: true,
				healing_begins: true
			}
		},
		{
			id: 'share-responsibility',
			text: 'Share responsibility - you\'re learning together',
			next: 'kieran_dilemma',
			effects: { wisdom: 5, empathy: 5 },
			hiddenEffects: {
				seraphine_bond: 22,
				partnership_affirmed: true,
				mutual_growth: true
			}
		}
	]
};

const seraphineStunned = `"You... care about me?" Seraphine looks stunned, as if you've just announced the impossible. Her eyes widen, tears still glistening on her cheeks. "Not about House Brightwater's alliance or political value? Not about my diplomatic skills or what I can do for you? About me—just me, Seraphine, the person underneath all the titles and training?"`;

const seraphineLifelongWant = `When you affirm it—when you make it absolutely clear that yes, you care about her, the real her—she makes a sound halfway between laugh and sob. Her hand covers her mouth as if to hold back the emotion threatening to overwhelm her completely. "That's all I've ever wanted," she whispers brokenly. "My whole life, people wanted my family's support, my political connections, my perfect manners and diplomatic expertise. Wanted what I could do for them, what advantage I could provide. No one ever wanted just... Seraphine. The woman behind the performance. The person beneath the polish."`;

const seraphineReciprocates = `She stands on shaking legs, crossing to you with desperate courage—the kind of bravery that comes from knowing you're risking everything. "I care about you too. So much it terrifies me. More than I've ever cared about anyone or anything." Her voice trembles. "You're brilliant and kind and you see people—really see them—in ways nobles never do. Never even try to do. You've shown me what it's like to be valued for who I am instead of what I represent. To be accepted with all my doubts and fears and messy, imperfect humanity."`;

const seraphineChoosesHappiness = `Her voice drops lower, becomes firm with decision. "And I want this. Want you. Want us, whatever that means. Even if it's improper by noble standards, even if it complicates everything, even if my mother would be absolutely scandalized, even if House Brightwater considers it beneath my station."`;

const seraphineReadyForChange = `She cups your face with trembling hands, the touch gentle and reverent. "I spent my whole life being proper. Being what everyone expected. Choosing duty over desire, performance over authenticity, empty perfection over messy happiness. Maybe it's time to choose differently. Maybe it's time to be happy instead of just correct. To be real instead of just perfect."`;
export const SeraphineRomancePath: Scene = {
	id: 'seraphine_romance_path',
	text: `${seraphineStunned}

${seraphineLifelongWant}

${seraphineReciprocates} ${seraphineChoosesHappiness}

${seraphineReadyForChange}`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { shared_burden: true, mutual_understanding: true }
			},
			text: `${seraphineStunned}

"You understand the weight," she continues softly, moving closer. "Of being a symbol instead of a person. A title instead of a name. A role instead of yourself. We're the same, you and I. Both trapped by expectations we didn't choose. Both suffocating under titles that define us. Both performing for audiences who only see what we represent, never who we are." Her eyes search yours with desperate recognition. "You're the only person who's ever truly understood. The only one who knows what it's like to be drowning in expectations while everyone assumes you're thriving because you play the part so well."

${seraphineLifelongWant}

${seraphineReciprocates} "You've shown me that understanding someone completely—seeing their fears and burdens and secret desires, accepting all of it without judgment—that's love. Real love, not political alliance or convenient arrangement. Love that sees the person underneath everything else."

${seraphineChoosesHappiness} "With you, I don't have to choose between authenticity and duty. I can be both proper and happy. Both Lady Seraphine when needed and just Seraphine when safe. Both noble diplomat and genuine woman. Both versions, both real, both accepted."

${seraphineReadyForChange} Her smile is radiant despite the tears. "With you, I can be whole instead of fractured. Complete instead of performing. And that's worth any scandal, any complication, any price my mother wants to extract."`
		},
		{
			conditions: {
				hasHiddenAttributes: { liberating_moment: true, seraphine_discovering: true }
			},
			text: `Seraphine laughs through tears—the genuine, uncontrolled laughter from the market that transformed her entire face. "You gave me street food and market adventures. Showed me wildflowers from merchant children and messy, imperfect joy. You showed me I could be improper and the world wouldn't end. That I could break protocols and still be worthy. That happiness doesn't require perfection." Her eyes shine with joy and vulnerability, that intoxicating mix of freedom and fear. "You gave me permission to discover who I am when I'm not performing nobility."

${seraphineLifelongWant} "But you wanted Seraphine who laughs too loud and spins in markets and gets sauce on her face and doesn't always know what to say or do. The real me underneath the polish and training. The messy, uncertain, joyful person I'd buried so deep I thought she was gone forever."

${seraphineReciprocates} "Every improper adventure, every time you let me just... be... without judgment or correction, I fell a little more in love with you. Every moment of freedom you gave me was another thread connecting my heart to yours."

${seraphineChoosesHappiness} "Every rule I break for you is a choice. Every moment of impropriety is deliberate. Every scandal is worth it."

She takes your hands, no longer trembling with uncertainty but strong with conviction. "You taught me to choose happiness over perfection. To value authenticity over approval. To want things for myself instead of just performing duty. Now I'm choosing you—deliberately, certainly, joyfully. I'm choosing us."`
		}
	],
	choices: [
		{
			id: 'kiss-her',
			text: 'Kiss her - choose happiness together',
			next: 'seraphine_romance_continue',
			effects: { charisma: 7, empathy: 5 },
			hiddenEffects: {
				seraphine_bond: 35,
				seraphine_romance_level: 2,
				committed_relationship: true,
				seraphine_liberated: true
			},
			realLifeChallenge: {
				id: 'seraphine_kiss_partner',
				type: 'social',
				title: 'Share Romantic Affection',
				description: 'Share your character\'s passion and connection with your real-life partner through a meaningful kiss',
				instructions: 'Take this chance to remind your partner through a kiss how much they mean to you, and how glad you are to have them in your life. Let it be genuine and heartfelt.',
				durationMinutes: 1,
				verificationMethod: 'honor',
				rewards: {
					stats: { charisma: 3, empathy: 3 },
					message: 'Your genuine affection deepened the connection, just like Seraphine\'s choice to be happy instead of just proper.'
				}
			}
		},
		{
			id: 'promise-partnership',
			text: 'Promise genuine partnership - equals in all ways',
			next: 'seraphine_romance_continue',
			effects: { charisma: 6, wisdom: 5 },
			hiddenEffects: {
				seraphine_bond: 33,
				seraphine_romance_level: 2,
				equal_partners: true,
				seraphine_valued: true
			},
			realLifeChallenge: {
				id: 'seraphine_authentic_talk',
				type: 'social',
				title: 'Drop the Masks',
				description: 'Like Seraphine shedding her diplomatic persona, have an authentic conversation with your partner',
				instructions: 'Spend time with your partner where you both agree to be completely authentic - no social masks, no pretending things are fine when they\'re not. Share how you really feel about something important.',
				durationMinutes: 45,
				verificationMethod: 'honor',
				rewards: {
					stats: { empathy: 4, charisma: 3 },
					message: 'Authenticity deepened your connection, just as it did with Seraphine.'
				}
			}
		}
	]
};

const ballDiplomacy = `You attend a formal ball together - Seraphine in her element, you learning noble politics. She's magnificent - perfect etiquette, brilliant diplomacy, commanding respect. Watching her work is like watching art.`;

const staringComment = `"You're staring," she murmurs with a small smile during a dance. "Impressed by my natural habitat?"`;

const marketAwkwardness = `Later, you visit Thornhaven's markets again. Here, Seraphine is awkward, uncertain, but trying. A merchant's child brings her wildflowers and she doesn't know how to respond - no protocol for this. But she crouches down, accepts them with genuine warmth, makes the child's day.`;

const harderButBetter = `"This is harder than any negotiation," she admits after. "But also better. More real."`;

export const SeraphineNavigatingWorlds: Scene = {
	id: 'seraphine_navigating_worlds',
	text: `${ballDiplomacy}

${staringComment}

${marketAwkwardness}

${harderButBetter}`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { seraphine_romance: true }
			},
			text: `${ballDiplomacy}

${staringComment} "Or distracted by thoughts of later?" she adds with rare playfulness.

${marketAwkwardness}

"You're teaching me to exist in both worlds," Seraphine says softly, taking your hand. "To be Lady Seraphine when needed - skilled, diplomatic, powerful. But also to be just Seraphine - messy and uncertain and human."

She kisses you gently. "With you, I don't have to choose. I can be both. That's..." Her voice catches with emotion. "That's everything."

The noble and the person. The diplomat and the lover. She's learning she can be complete.`
		},
		{
			conditions: {
				hasHiddenAttributes: { equal_partners: true }
			},
			text: `${ballDiplomacy} But you notice she keeps glancing at you, checking you're comfortable, including you in conversations as an equal.

${staringComment} "You're not just learning - you're participating. As my partner, not my student."

${marketAwkwardness}

"We're bridging worlds together," Seraphine observes. "You bring me into the real world of common people. I help you navigate the complex world of nobility. Neither of us alone, both of us stronger." ${harderButBetter} "And we're doing it as true equals."`
		}
	],
	choices: [
		{
			id: 'affirm-both',
			text: 'Affirm you love both versions of her',
			next: 'seraphine_integration_complete',
			effects: { empathy: 6, charisma: 5 },
			hiddenEffects: {
				seraphine_bond: 25,
				complete_acceptance: true,
				seraphine_whole: true
			}
		},
		{
			id: 'bridge-together',
			text: 'Agree to bridge both worlds together',
			next: 'seraphine_integration_complete',
			effects: { wisdom: 5, charisma: 5 },
			hiddenEffects: {
				seraphine_bond: 22,
				shared_mission: true,
				change_agents: true
			}
		}
	]
};

const motherArrives = `Lady Cassandra Brightwater arrives unannounced. Seraphine's mother is elegant, cold, calculating perfection. She examines Seraphine critically.`;

const changedDaughter = `"You've changed," Lady Cassandra observes with disapproval. "Less controlled. More... emotional. I've heard disturbing reports. Eating street food? Visiting common markets? Sitting on floors?" Her tone suggests these are moral failings. "Have you forgotten who you are?"`;

const seraphineRemembering = `"No, Mother," Seraphine says quietly but firmly. "I'm remembering."`;

const motherDisapproval = `Lady Cassandra's eyes narrow. "I did not raise you to be common. You're a Brightwater. We don't have the luxury of feelings or impropriety. We are what we do, not what we want."`;

const questionSatisfactory = `She looks at you. "Has my daughter been satisfactory, Your Highness? Or should I assign someone more... disciplined?"`;

export const SeraphineFamilyConfrontation: Scene = {
	id: 'seraphine_family_confrontation',
	text: `${motherArrives}

${changedDaughter}

${seraphineRemembering}

${motherDisapproval} ${questionSatisfactory}`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { seraphine_romance: true }
			},
			text: `${motherArrives}

${changedDaughter}

${seraphineRemembering}

Lady Cassandra's gaze sharpens, reading something in the air between you and Seraphine. "Oh. I see." Her voice drops to ice. "Seraphine, you haven't been so foolish as to develop... inappropriate attachment?"

Seraphine lifts her chin with newfound courage. "I love them, Mother. And they love me. Not House Brightwater. Me."

"Love." Lady Cassandra says it like a curse. "Love is for common people who can afford sentimentality. We are nobles. We marry for alliances, serve for advantage, exist for duty." She turns to you. "You're manipulating my daughter with affection. Using her feelings against her. I won't allow it."

It's a direct challenge to your relationship, your intentions, your worth.`
		},
		{
			conditions: {
				hasHiddenAttributes: { seraphine_discovering: true, fun_together: true }
			},
			text: `${motherArrives} "I've received... concerning reports about your activities, Seraphine."

${changedDaughter} "I raised you to represent House Brightwater with dignity. Not to play commoner in markets."

${seraphineRemembering} "I'm remembering how to be happy, Mother. How to be a person, not just a symbol."

${motherDisapproval} "Happy?" Lady Cassandra scoffs. "Happiness is a distraction. You think your father and I were 'happy'? We did our duty." ${questionSatisfactory}`
		}
	],
	choices: [
		{
			id: 'defend-seraphine',
			text: 'Defend Seraphine and her right to choose her life',
			next: 'seraphine_liberation',
			effects: { courage: 7, charisma: 6 },
			hiddenEffects: {
				seraphine_bond: 30,
				stood_up_to_mother: true,
				seraphine_supported: true,
				family_confronted: true
			}
		},
		{
			id: 'assert-feelings',
			text: 'Assert genuine love and honorable intentions',
			next: 'seraphine_liberation',
			effects: { charisma: 7, empathy: 5 },
			hiddenEffects: {
				seraphine_bond: 32,
				love_declared_publicly: true,
				mother_challenged: true,
				seraphine_overwhelmed: true
			}
		},
		{
			id: 'diplomatic-firmness',
			text: 'Use diplomatic skill to outmaneuver Lady Cassandra',
			next: 'seraphine_liberation',
			effects: { wisdom: 7, charisma: 5 },
			hiddenEffects: {
				seraphine_bond: 28,
				political_victory: true,
				mother_respects: true,
				seraphine_impressed: true
			}
		}
	]
};

const romanceBlossoms = `Your romance with Seraphine blossoms into something beautiful and authentic. The diplomatic mask she wore for so long comes off completely in your presence, revealing the genuine, passionate woman underneath.`;

const permissionToBeReal = `"You've given me permission to be real," Seraphine says, intertwining her fingers with yours. "With you, I don't have to be Lady Seraphine the perfect diplomat. I can be messy, emotional, uncertain, and you love me anyway."`;

const choosingWhatSheWants = `She smiles radiantly. "For the first time in my life, I'm choosing what I want instead of what I should want. And I want you."`;

const redefiningRomance = `Together you redefine what noble romance can be - honest, passionate, built on authenticity rather than political advantage.`;

export const SeraphineRomanceContinue: Scene = {
	id: 'seraphine_romance_continue',
	text: `${romanceBlossoms}

${permissionToBeReal} ${choosingWhatSheWants}

${redefiningRomance}`,
	textVariants: [
		{
			conditions: { 
				hasHiddenAttributes: { love_declared_publicly: true, stood_up_to_mother: true }
			},
			text: `${romanceBlossoms}

"You stood beside me when I confronted my mother," Seraphine says with awe. "Declared your love publicly, showed me I'm worth fighting for." She holds your face in her hands. "I've spent my whole life being diplomatic, compromising, smoothing conflicts. You taught me some things are worth fighting for. Like love. Like freedom. Like choosing my own path."

${choosingWhatSheWants} "And I'll fight for us too."

Your love is revolutionary in its authenticity and publicly declared despite all opposition. It becomes a statement that reverberates through noble society - that genuine connection matters more than political advantage.`
		},
		{
			conditions: { 
				hasHiddenAttributes: { mutual_vulnerability: true, deep_emotional_bond: true }
			},
			text: `${romanceBlossoms}

"You don't need me to be perfect," Seraphine whispers during an intimate moment. "You see my doubts, my fears, my selfish desires, and you love me anyway." Tears glisten in her eyes. "That's the most freeing thing anyone's ever given me. Permission to be imperfect and still be loved."

${choosingWhatSheWants} "Every imperfect, messy, vulnerable part of me."

Your love is private, profound, and built on complete emotional honesty. Behind closed doors, the perfect diplomat becomes the passionate woman who lets you see every complicated feeling.`
		},
		{
			conditions: {
				hasHiddenAttributes: { equal_partners: true, shared_mission: true }
			},
			text: `${romanceBlossoms}

${permissionToBeReal} "But more than that - you see me as an equal. Not as someone to be protected or managed, but as a partner with my own skills and strengths."

"We're building something together," she continues with excitement. "Using my diplomatic expertise and your vision to create real change. I'm not just your tutor or your lover - I'm your partner in reshaping the kingdom."

${choosingWhatSheWants} "And a shared mission with someone I love."

${redefiningRomance} Your partnership is intellectual, romantic, and political all at once - two equals working to bridge noble and common worlds.`
		}
	],
	choices: [
		{
			id: 'affirm-devotion',
			text: 'Affirm your devotion to the real Seraphine',
			effects: { empathy: 7, charisma: 6 },
			hiddenEffects: {
				seraphine_bond: 30,
				authentic_romance: true,
				seraphine_endgame: 'romantic_partner'
			}
		}
	]
};

const defenseBreaksControl = `Your defense of Seraphine - whether through courage, diplomacy, or declarations of love - breaks Lady Cassandra's hold. The older woman realizes she's lost control, and more importantly, that Seraphine has found something worth fighting for.`;

const motherColdDeparture = `"I see," Lady Cassandra says coldly. "You've made your choice, Seraphine. Choose authenticity over duty, feeling over propriety." She turns to leave, then pauses. "I hope it's worth it. I hope they're worth throwing away everything I taught you."`;

const collapseRelief = `After she's gone, Seraphine collapses against you, shaking. "I stood up to her," she whispers in wonder. "I actually stood up to her. Because of you. Because you showed me I'm allowed to want things for myself."`;

export const SeraphineLiberation: Scene = {
	id: 'seraphine_liberation',
	text: `${defenseBreaksControl}

${motherColdDeparture}

${collapseRelief}`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { seraphine_romance: true, love_declared_publicly: true }
			},
			text: `${defenseBreaksControl}

${motherColdDeparture}

${collapseRelief}

"You declared us," Seraphine says through tears of joy and relief. "In front of my mother. Told her our love is real and honorable. No one has ever..." She kisses you desperately. "Thank you. For choosing me. For fighting for me. For making me believe I deserve to be happy."

She laughs, giddy with freedom. "I'm terrified and exhilarated and I don't know what comes next but I'm choosing it. Choosing us. Choosing me."`
		},
		{
			conditions: {
				hasHiddenAttributes: { political_victory: true, mother_respects: true }
			},
			text: `Your diplomatic maneuvering left Lady Cassandra with no ground to stand on. You outplayed her at her own game, defending Seraphine with the very skills the mother taught her.

"I see you've been well-taught," Lady Cassandra admits grudgingly before leaving. There's almost respect in her eyes. "Perhaps... Seraphine chose more wisely than I thought."

${collapseRelief}

"You beat her at diplomacy," Seraphine marvels. "Used my mother's own tools to defend my right to choose. That's..." She laughs in disbelief. "That's brilliant. And it means she might actually accept this eventually."`
		},
		{
			conditions: {
				hasHiddenAttributes: { courage: 60, stood_up_to_mother: true }
			},
			text: `Your fierce defense of Seraphine's autonomy left no room for doubt. You stood up to Lady Cassandra with unwavering conviction, protecting Seraphine's right to choose her own path.

${motherColdDeparture}

${collapseRelief}

"You were fearless," Seraphine breathes. "When my mother tried to control me, tried to make me feel guilty, you just... stood there like a shield. Protected my choice to be myself." Her voice breaks with emotion. "No one has ever done that for me before."`
		}
	],
	choices: [
		{
			id: 'affirm-freedom',
			text: 'Affirm her freedom and support whatever she chooses next',
			effects: { empathy: 7, wisdom: 5 },
			hiddenEffects: {
				seraphine_bond: 25,
				seraphine_free: true,
				authentic_self: true
			}
		}
	]
};

const relationshipSettles = `Your relationship with Seraphine settles into something genuine and sustainable. Whether romantic partners, close friends, or something developing, what matters is that Seraphine has found authenticity.`;

const canBeoth = `She can be both Lady Seraphine when needed and just Seraphine when safe.`;

const giftOfSelf = `"You've taught me I don't have to choose," she reflects. "I can be diplomatic and genuine. Proper and real. The mask and the person underneath can coexist." She smiles warmly. "That's a gift. Whatever form our relationship takes, you've given me myself back."`;

export const SeraphineRelationshipResolution: Scene = {
	id: 'seraphine_relationship_resolution',
	text: `${relationshipSettles} ${canBeoth}

${giftOfSelf}`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { seraphine_relationship: 'partners', equal_partnership: true }
			},
			text: `${relationshipSettles} As equal partners in reshaping the kingdom, your bond is built on mutual respect and shared vision. ${canBeoth}

"We're partners," Seraphine says with quiet satisfaction. "Not romantic, but something just as important. We understand each other, support each other, challenge each other to be better." She extends her hand formally, then grins and pulls you into a warm hug. "Partners in revolution. I wouldn't want anyone else by my side."`
		},
		{
			conditions: {
				hasHiddenAttributes: { deep_friendship: true, worth_affirmed: true }
			},
			text: `${relationshipSettles} As close friends, you've given her something she never had - unconditional acceptance without romantic expectations. ${canBeoth}

"You're my friend," Seraphine says simply, and it's clear how much that word means to her. "Real friendship, not political alliance or networking. Someone who cares about me, not what I can do for them." Her eyes shine with gratitude. ${giftOfSelf}`
		}
	],
	choices: [
		{
			id: 'move-forward',
			text: 'Move forward together in authentic partnership',
			effects: { empathy: 5, wisdom: 5 },
			hiddenEffects: {
				seraphine_bond: 20,
				relationship_defined: true,
				seraphine_whole: true
			}
		}
	]
};

const fullyIntegrated = `Seraphine has fully integrated her two selves. At formal events, she's Lady Seraphine - poised, diplomatic, commanding respect. In private or among friends, she's just Seraphine - genuine, sometimes uncertain, but always real.`;

const coexistenceLesson = `"I used to think authenticity and nobility were opposites," she tells you. "That being real meant abandoning propriety, or being proper meant losing authenticity. But you showed me they can coexist. I can be both noble and human. Diplomatic and genuine. Perfect when needed and messy when safe."`;

const acceptanceGratitude = `She takes your hand. "Thank you for accepting all of me. The polished and the raw. The Lady and the woman. Both are real. Both are me."`;

export const SeraphineIntegrationComplete: Scene = {
	id: 'seraphine_integration_complete',
	text: `${fullyIntegrated}

${coexistenceLesson}

${acceptanceGratitude}`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { seraphine_romance: true, authentic_romance: true }
			},
			text: `${fullyIntegrated} And with you, she's all of it - lover, partner, diplomat, genuine woman.

${coexistenceLesson}

${acceptanceGratitude} "And you love both. The Lady Seraphine who dazzles at formal events, and the Seraphine who laughs at street food and sits on floors. That's everything."`
		},
		{
			conditions: {
				hasHiddenAttributes: { change_agents: true, bridge_builder: true }
			},
			text: `${fullyIntegrated}

"We're proof it works," Seraphine observes with satisfaction. "Noble and authentic. Traditional and progressive. We're literally bridging the two worlds - me bringing diplomatic skills to common causes, you bringing common perspective to noble circles."

${coexistenceLesson}

${acceptanceGratitude} "Together, we're showing the kingdom that nobility and humanity aren't opposites. They can coexist. We're living proof."`
		}
	],
	choices: [
		{
			id: 'celebrate-integration',
			text: 'Celebrate her journey to wholeness',
			effects: { empathy: 6, charisma: 5 },
			hiddenEffects: {
				seraphine_bond: 20,
				seraphine_fully_integrated: true,
				authentic_nobility: true
			}
		}
	]
};

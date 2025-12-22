import { Scene } from '../../story-manager';

/**
 * RELATIONSHIPS: Deep, multi-stage relationship building with Rowan
 * Progression: Professional Guardian → Trusted Friend → Romantic Interest (optional)
 * Themes: Nature connection, half-elf identity, trust and vulnerability
 */

export const RowanBonding1: Scene = {
	id: 'rowan_bonding_1',
	text: `After particularly exhausting day of political meetings that stretched interminably, you find Rowan on manor's eastern balcony overlooking forest, watching tree line with quiet intensity. Evening breeze carries scent of pine and earth, cool against skin after stuffy council chambers.

They don't turn as you approach with footsteps echoing softly on stone, but their posture relaxes slightly - subtle shift in shoulders, easing of tension in spine. They know your footstep intimately after months of guarding you, can distinguish it from any other in manor.

"I needed air," Rowan says quietly with voice carrying relief mixed with frustration. "Too many walls closing in, too many words saying nothing. The nobles talk in endless circles, saying everything and nothing simultaneously. All performance, no substance."

They finally look at you with forest-green eyes reflecting twilight, {name}, and you see exhaustion there mixed with something else - kinship perhaps, or understanding.

"How do you stand it day after day?" The question carries weight beyond casual conversation.

This is first time Rowan has initiated personal conversation beyond duty. Usually they're all business - guardian duties executed flawlessly, security concerns addressed immediately, tactical assessments delivered with precision. Professional distance maintained religiously.

This moment of openness feels significant, like door cracking open to reveal what's usually kept hidden.`,
	choices: [
		{
			id: 'admit-struggle',
			text: 'Admit you struggle with it too',
			next: 'rowan_bonding_1b',
			effects: { empathy: 3 },
			hiddenEffects: {
				rowan_bond: 10,
				rowan_sees_vulnerability: true,
				authentic_connection: true
			}
		},
		{
			id: 'joke-deflect',
			text: 'Make a joke to lighten the mood',
			next: 'rowan_bonding_1b',
			effects: { charisma: 2 },
			hiddenEffects: {
				rowan_bond: 5,
				rowan_appreciates_humor: true
			}
		},
		{
			id: 'ask-about-them',
			text: 'Turn the question back - ask about their struggles',
			next: 'rowan_bonding_1b',
			effects: { empathy: 4, wisdom: 2 },
			hiddenEffects: {
				rowan_bond: 12,
				rowan_feels_seen: true,
				deep_listener: true
			}
		}
	]
};

export const RowanBonding1B: Scene = {
	id: 'rowan_bonding_1b',
	text: `Rowan is quiet for long moment stretching uncomfortably as they gather courage to voice thoughts usually kept locked away. Then: "I don't belong in either world completely," they say with voice carrying old pain. "The forest elves see me as too human - my father's blood 'diluting' the pure elven line they pride themselves on. They let me visit but never truly welcomed me as one of them. The humans see me as too elven - mystical, foreign, not quite trustworthy with their secrets. Other, always other."

They trace absent pattern on balcony railing with calloused finger, studying movement rather than meeting your eyes. "I became ranger because wilderness doesn't care about bloodlines or purity. The forest accepts everyone who respects it with open arms. Trees don't judge your parentage. Deer don't care if you're half-blood. Rivers flow the same for everyone."

The vulnerability in their voice is raw and painful, clearly something they don't share often. Each word costs them.

"But now I'm here, in human manor serving nobility, surrounded by political machinations," they continue with frustration bleeding through. "The Thornwood relatives who barely acknowledge my existence publicly are watching from shadows, judging every move. Waiting for me to fail spectacularly and prove that half-breeds can't be trusted with important duties. That mixing blood produces inferior results."

They look at you directly finally, forest-green eyes holding yours. "So yes, I struggle with it. Every single day. But my struggles aren't about politics or power games you navigate. They're about belonging nowhere completely and wondering if that will ever change, if I'll ever find place where I fit."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { authentic_connection: true }
			},
			text: `Rowan sees your genuine understanding reflected in expression and continues more openly, walls lowering: "You know what it's like intimately, don't you?" they say with recognition dawning. "Growing up as orphan in Thornhaven, never quite fitting in with other children. Then discovering you're secretly royal - that must have been profoundly jarring. Neither world fully yours to claim. Always between."

They move closer, closing distance with deliberate intent. "Maybe that's why protecting you feels... different from other assignments," they admit quietly. "Not just duty assigned. You actually understand deeply what it means to be between worlds. To carry two identities that don't easily reconcile. To feel like imposter in both places claiming you." Their voice warms with connection found.`
		}
	],
	choices: [
		{
			id: 'relate-personally',
			text: 'Share your own experience of not belonging',
			next: 'first_political_meeting',
			effects: { empathy: 5, wisdom: 3 },
			hiddenEffects: {
				rowan_bond: 15,
				shared_understanding: true,
				rowan_romance_possible: true,
				deep_connection_formed: true
			}
		},
		{
			id: 'validate-feelings',
			text: 'Validate their feelings and promise they belong here',
			next: 'first_political_meeting',
			effects: { charisma: 4, empathy: 3 },
			hiddenEffects: {
				rowan_bond: 12,
				rowan_feels_accepted: true,
				protective_bond: true
			}
		},
		{
			id: 'offer-solution',
			text: 'Suggest practical ways to address the prejudice',
			next: 'first_political_meeting',
			effects: { wisdom: 4 },
			hiddenEffects: {
				rowan_bond: 8,
				rowan_appreciates_pragmatism: true,
				problem_solver: true
			}
		},
		{
			id: 'comfortable-silence',
			text: 'Just stay in comfortable silence, sharing the moment',
			next: 'first_political_meeting',
			effects: { empathy: 4 },
			hiddenEffects: {
				rowan_bond: 10,
				rowan_values_presence: true,
				quiet_understanding: true
			}
		}
	]
};

export const RowanBonding2: Scene = {
	id: 'rowan_bonding_2',
	text: `Days later after initial opening, Rowan invites you to train in forest surrounding manor. "You need to understand wilderness intimately if you're going to rule kingdom that's half forest and mountain," they say with practical logic. "Besides, the rangers will respect you more if you're not completely helpless outside city walls where they operate. Competence matters to them."

The training is intense but rewarding in ways court lessons never are. Rowan teaches you to move quietly through undergrowth without snapping twigs, to read animal tracks in soft earth, to sense forest's rhythms and patterns - when birds fall silent signaling predator, how wind shifts before storm. They're patient but demanding, pushing you to improve steadily while never making you feel inadequate for starting behind. Encouragement balanced with correction.

"You're better at this than most nobles I've trained," they admit during water break, genuine surprise coloring voice. "Most are too proud to learn from half-elf ranger, too convinced of superiority. They'd rather die stupidly in woods than accept help from someone they see as beneath them socially."

There's old hurt in those words that cuts deep, masked by casual delivery and practical tone.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { shared_understanding: true }
			},
			text: `Rowan is more open during training sessions, sharing stories about growing up between worlds. "My mother taught me to track before I could read written language," they say while demonstrating proper stance. "My father taught me human customs and courtly language. I got best of both worlds in skills and knowledge..." Pause, pain flickering across features. "And belonged fully to neither. Always guest, never home."

They pause mid-demonstration, adjusting your stance for better balance with hands gentle but firm. Their hands linger moment longer than strictly necessary for instruction, warmth seeping through fabric. "But with you, I feel less... divided," they admit quietly, vulnerability showing. "Like maybe being between worlds isn't curse to escape. It's perspective to value. Understanding multiple truths simultaneously instead of being trapped in one view."

Their forest-green eyes meet yours with unexpected intensity that makes breath catch, something unspoken passing between you.`
		}
	],
	choices: [
		{
			id: 'express-gratitude',
			text: 'Express genuine gratitude for their teaching and perspective',
			next: 'agent_revealed',
			effects: { wisdom: 3, empathy: 3 },
			hiddenEffects: {
				rowan_bond: 12,
				rowan_feels_valued: true,
				mentor_bond: true
			}
		},
		{
			id: 'flirt-subtle',
			text: 'Flirt subtly - comment on their skill and grace',
			next: 'agent_revealed',
			effects: { charisma: 4 },
			hiddenEffects: {
				rowan_bond: 10,
				rowan_romance_seed: true,
				rowan_flustered: true,
				attraction_acknowledged: true
			}
		},
		{
			id: 'ask-deeper',
			text: 'Ask deeper questions about their mother and elven heritage',
			next: 'agent_revealed',
			effects: { empathy: 5, wisdom: 3 },
			hiddenEffects: {
				rowan_bond: 15,
				rowan_opens_deeply: true,
				family_history_shared: true,
				emotional_intimacy: true
			}
		},
		{
			id: 'demonstrate-learning',
			text: 'Demonstrate what you\'ve learned - make them proud',
			next: 'agent_revealed',
			effects: { strength: 3, wisdom: 2 },
			hiddenEffects: {
				rowan_bond: 10,
				rowan_proud_teacher: true,
				skilled_student: true
			}
		}
	]
};export const RowanBonding3: Scene = {
	id: 'rowan_bonding_3',
	text: `Late one evening when moon hangs full outside windows, Rowan finds you studying maps and reports spread across desk. Without word spoken, they set down cup of tea still steaming and plate of manor's kitchen offerings - bread, cheese, dried fruit.

"You're pushing too hard," they say quietly with concern evident. "You can't solve everything in one night through force of will. The kingdom took centuries to build and seventeen years to damage under incompetent regency. Give yourself time to breathe."

They hesitate, then add with careful words: "Your parents understood that balance. They worked tirelessly for kingdom but also knew when to rest. When to just... be human." Slight smile tugs lips. "Well, mostly human with some magical bloodline complications thrown in for interest."

This care feels different from guardian duty executed professionally. More personal. More intimate. Like friend caring for friend, or something even deeper.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { rowan_romance_seed: true, shared_understanding: true }
			},
			text: `Rowan sits beside you at desk, closer than strictly necessary for professional guardian, close enough to feel their warmth. "I worry about you," they admit with voice carrying weight beyond duty. "Not just because it's my assigned duty to protect you from physical threats. Because... I care deeply. About you specifically. The person behind title, not just heir to throne."

They look vulnerable and uncertain in ways you've never seen - so different from their usual confident ranger persona that commands respect. "I know this is inappropriate confession," they say quickly. "Guardian falling for their charge. All the protocols violated. But spending every day with you, seeing your genuine care for people you barely know, your willingness to learn from half-elf ranger, your kindness shown freely..." They trail off, unable to finish.

"I'm not asking for anything," Rowan says quickly, words tumbling. "Just... wanted you to know truth. That you matter tremendously. To me. Personally. Beyond duty or obligation."

Their hand rests on table between you, not quite touching yours but invitation is clear - distance that could be closed with simple movement.`
		},
		{
			conditions: {
				hasHiddenAttributes: { deep_connection_formed: true }
			},
			text: `Rowan sits with you in comfortable silence that only exists between people who truly understand each other's souls, the kind that doesn't need filling with empty words. "You know what I realized recently?" they say eventually, breaking silence with revelation. "For first time in my entire life, I feel like I belong somewhere completely. Not because of blood proving heritage or birthright claiming position. Not because duty assigned me here. Because of choice freely made. Connection earned through understanding."

They meet your eyes with warmth transforming features. "Thank you for that profound gift. For seeing me as Rowan - individual person with worth. Not as 'the half-elf guardian' or 'Thornwood's embarrassment' or any label. Just... me. Wholly and completely." Gratitude shines through words.`
		}
	],
	choices: [
		{
			id: 'romantic-reciprocate',
			text: 'Take their hand and reciprocate the feelings',
			next: 'kieran_dilemma',
			effects: { charisma: 5, empathy: 4 },
			hiddenEffects: {
				rowan_bond: 25,
				rowan_romance: true,
				rowan_relationship: 'romantic',
				first_kiss_imminent: true
			},
			outcomes: [{
				conditions: {
					hasHiddenAttributes: { rowan_romance_seed: true, rowan_bond: { min: 15 } }
				}
			}],
			onFail: 'disable'
		},
		{
			id: 'friendship-affirm',
			text: 'Affirm the deep friendship without romantic element',
			next: 'kieran_dilemma',
			effects: { empathy: 5, wisdom: 3 },
			hiddenEffects: {
				rowan_bond: 20,
				rowan_relationship: 'best_friend',
				platonic_soulmates: true,
				rowan_accepts_friendship: true
			}
		},
		{
			id: 'need-time',
			text: 'Express care but need more time to sort feelings',
			next: 'kieran_dilemma',
			effects: { wisdom: 4, empathy: 3 },
			hiddenEffects: {
				rowan_bond: 15,
				rowan_relationship: 'developing',
				rowan_patient: true,
				slow_burn: true
			}
		},
		{
			id: 'professional-boundary',
			text: 'Gently maintain professional boundaries',
			next: 'kieran_dilemma',
			effects: { wisdom: 4 },
			hiddenEffects: {
				rowan_bond: 10,
				rowan_relationship: 'professional',
				rowan_hurt_but_understanding: true,
				boundaries_respected: true
			}
		}
	]
};

export const RowanRomancePath: Scene = {
	id: 'rowan_romance_path',
	text: `Your hand covers Rowan's, warmth spreading from contact. "I feel it too," you admit with honesty that costs courage. "I've been trying desperately to convince myself it was just gratitude for protection or admiration for your skills, but..." You meet their forest-green eyes directly. "It's more. You're more to me than duty or respect."

Rowan's breath catches audibly, eyes widening. "I shouldn't want this," they say even as fingers curl around yours. "It complicates everything impossibly. Guardian and ward, noble and ranger, all the protocols violated..." But even as they speak words of caution, they're turning their hand to intertwine fingers with yours properly, grip firm and warm. Actions contradicting words.

"Protocols can wait," you say softly but firmly. "Right now, I just want this moment. With you. As equals. As two people who care about each other beyond roles assigned."

Rowan stands, pulling you up with them gently but deliberately. You're close now, close enough to see ring of darker green around their irises like forest depths, close enough to feel their breath warm against skin, close enough to count heartbeats.

"May I kiss you?" Rowan asks with formal courtesy even in intimacy, always respectful of boundaries and consent.

Your answer comes not in words but in closing of distance between you, eliminating space. The kiss is gentle at first - tentative and questioning, testing boundaries. Then deeper as certainty replaces uncertainty, as desire overcomes hesitation. Their lips taste of forest and tea, familiar and new simultaneously.

When you part finally, Rowan rests their forehead against yours with eyes closed. "Whatever comes next," they whisper like sacred vow, "we face it together. Not guardian and heir following hierarchy. Partners. Equals."`,
	choices: [
		{
			id: 'affirm-partnership',
			text: 'Affirm the partnership with another kiss',
			next: 'rowan_romance_continue',
			effects: { charisma: 5, empathy: 5 },
			hiddenEffects: {
				rowan_bond: 30,
				rowan_romance_level: 2,
				committed_relationship: true,
				rowan_happiness: 100
			},
			realLifeChallenge: {
				id: 'rowan_kiss_partner',
				type: 'social',
				title: 'Affirm Your Partnership',
				description: 'Like Rowan and you affirming your bond, share affection with your real-life partner',
				instructions: 'Take this moment to kiss your partner and affirm your partnership. Let them know through this gesture that you face life together as equals.',
				durationMinutes: 1,
				verificationMethod: 'honor',
				rewards: {
					stats: { empathy: 3, charisma: 2 },
					message: 'Your affection strengthened your partnership, mirroring Rowan\'s commitment to you.'
				}
			}
			// ,
			// oldRealLifeChallenge: {
			// 	id: 'rowan_vulnerable_moment',
			// 	type: 'social',
			// 	title: 'Share a Vulnerable Moment',
			// 	description: 'Like Rowan opening up about their feelings, share something vulnerable with your real-life partner',
			// 	instructions: 'Spend quality time with your partner and share something you\'ve been feeling but haven\'t expressed - a fear, hope, or dream. Practice active listening when they respond.',
			// 	durationMinutes: 30,
			// 	verificationMethod: 'honor',
			// 	rewards: {
			// 		stats: { empathy: 3, charisma: 2 },
			// 		message: 'Your vulnerability strengthened your real-life connection, just as it did with Rowan.'
			// 	}
			// }
		},
		{
			id: 'discuss-challenges',
			text: 'Discuss the challenges this relationship will face',
			next: 'rowan_romance_continue',
			effects: { wisdom: 5, empathy: 3 },
			hiddenEffects: {
				rowan_bond: 28,
				rowan_romance_level: 2,
				realistic_romance: true,
				planning_together: true
			}
		}
	]
};

export const RowanRomanceContinue: Scene = {
	id: 'rowan_romance_continue',
	text: `Your romantic relationship with Rowan deepens as you navigate noble duties and wilderness excursions together, finding balance between two worlds. They teach you advanced tracking in morning mist, you practice diplomacy in afternoon meetings, and in evenings you find stolen moments of intimacy away from prying eyes that judge and whisper.

"I never thought I'd have this," Rowan admits during one such evening stolen from obligations, moonlight filtering through windows. "Someone who understands the wildness in me that calls to forest and the duty that binds me to service. Someone who sees both the ranger tracking prey and the person beneath role." They kiss you softly with tenderness that makes heart ache. "You make me whole in ways I didn't know I needed. Complete instead of divided."

Your relationship becomes model of balance for others to observe - wilderness and civilization merged, duty and desire intertwined, strength and tenderness woven together seamlessly.`,
	textVariants: [
		{
			conditions: { hasFlags: ['committed_relationship'] },
			text: `Your romantic relationship with Rowan deepens into something profound and lasting that transforms both. They introduce you to their ranger network as their partner - acknowledgment that speaks volumes in their community where partnerships are sacred, where bonds are judged by action not words.

"You've given me permission to be whole," Rowan says with arms wrapped around you under stars scattered across sky like diamonds. "Guardian and lover simultaneously. Wild and civilized both. Duty and devotion all at once without choosing." They hold you close with strength and gentleness balanced. "I thought I had to choose between worlds, sacrifice one identity for other. You showed me I could be everything. All of me."

Your love is built on foundation of mutual respect earned through trials, shared adventures testing limits, and absolute trust that doesn't waver.`
		},
		{
			conditions: { hasFlags: ['realistic_romance'] },
			text: `Your romantic relationship with Rowan faces challenges but grows stronger for overcoming them together. Court whispers about propriety violated, questions about their ranger background lacking nobility, complexities of guardian and heir becoming lovers breaking protocols.

But you face each obstacle together with honesty and strategic planning, tackling problems as team. "We knew this wouldn't be easy path," Rowan says pragmatically while holding your hand. "But nothing worthwhile ever is. And you're worth every complication we navigate, every negotiation required, every raised eyebrow from stuffy nobles who judge what they don't understand."

Your love is built on realistic expectations consciously maintained, shared problem-solving through difficulties, and choosing each other daily despite obstacles that would break weaker bonds.`
		}
	],
	choices: [
		{
			id: 'continue-together',
			text: 'Continue building your life together',
			effects: { empathy: 6, wisdom: 5 },
			hiddenEffects: {
				rowan_bond: 25,
				romantic_partnership_complete: true,
				rowan_endgame: 'romantic_partner'
			}
		}
	]
};

export const RowanFriendshipPath: Scene = {
	id: 'rowan_friendship_path',
	text: `You squeeze Rowan's hand warmly, conveying affection without romance. "You're incredibly important to me," you say with complete honesty. "One of most important people in my entire life. But I value what we have as friends so deeply - this understanding that goes beyond words, this trust built through shared struggles. I don't want romantic complications to risk losing that foundation."

You see flash of disappointment in Rowan's forest-green eyes like shadow passing over sun, but they manage genuine smile despite hurt. "I understand," they say with voice steady. "And honestly? Having you as true friend, someone who actually sees me completely... that's rarer and maybe more valuable than romance could ever be. Romance is common. This understanding isn't."

They grip your hand firmly before releasing it with deliberate care. "No awkwardness, no distance between us," they promise. "We're still partners in this impossible task of saving kingdom from corruption. Still the people who understand each other's struggles intimately. Just... friends who would die for each other rather than lovers. I can live with that. I can thrive with that."

The tension in room eases into something comfortable and solid as stone. "Actually," Rowan adds with growing certainty warming voice, "I'm glad we talked about this openly. Clear communication, honest feelings expressed, mutual respect maintained. This is what real friendship looks like when done right."`,
	choices: [
		{
			id: 'cement-friendship',
			text: 'Cement the friendship with a meaningful gesture or ritual',
			next: 'rowan_training_advanced',
			effects: { empathy: 5, wisdom: 4 },
			hiddenEffects: {
				rowan_bond: 25,
				rowan_relationship: 'soul_friend',
				platonic_life_partner: true,
				rowan_at_peace: true
			}
		}
	]
};

export const RowanUncertainPath: Scene = {
	id: 'rowan_uncertain_path',
	text: `"I care about you deeply," you say carefully, choosing words with precision. "But there's so much happening simultaneously - kingdom in chaos, conspiracy threatening everything, responsibilities crushing. I need time to understand my own feelings properly before making promises I might not be able to keep. That wouldn't be fair to either of us."

Rowan nods slowly, processing words with visible thought. "That's fair," they say after moment of consideration. "Honest, at least. I'd rather have truth than false hope or empty promises." They manage small smile despite vulnerability. "And patient waiting is something rangers are exceptionally good at. We can track prey for days without rushing, observing patterns, waiting for right moment."

"This isn't hunt," you protest gently, uncomfortable with comparison.

"No," Rowan agrees quickly, "but it is about being present and alert. Noticing when things change naturally. Reading signs. I can do that without pressure." They touch your hand briefly, contact light and fleeting. "Take your time. I'll be here, as your guardian protecting you, your friend supporting you, and... whatever else we might become if paths align." Their patience feels generous rather than resigned.`,
	choices: [
		{
			id: 'grateful',
			text: 'Express gratitude for their patience and understanding',
			next: 'rowan_training_advanced',
			effects: { empathy: 4, wisdom: 3 },
			hiddenEffects: {
				rowan_bond: 17,
				rowan_relationship: 'developing',
				future_possible: true
			}
		}
	]
};

export const RowanProfessionalPath: Scene = {
	id: 'rowan_professional_path',
	text: `"I value you as my guardian and advisor," you say carefully, each word chosen with precision. "But I think maintaining professional boundaries is best for both of us. The position is complicated enough without personal entanglements muddying responsibilities."

Rowan goes very still like deer sensing danger, then nods once sharply. "Understood." Their voice is level but you catch hurt beneath surface like wound covered by thin ice. "I apologize for overstepping boundaries. It won't happen again." Professional mask slams back into place.

"Rowan, I didn't mean to—"

"No, you're right," they interrupt, standing abruptly. "Clear boundaries are professional. I'll maintain them." They bow formally with military precision - something they haven't done in weeks since relationship grew comfortable. "Is there anything else you need, Your Highness?" Title used deliberately, creating distance.

The distance they've put between you feels vast and cold as winter, chasm opened suddenly. But they're respecting your choice explicitly, even as it clearly pains them. Walls rebuilt higher than before.`,
	choices: [
		{
			id: 'accept-distance',
			text: 'Accept the necessary professional distance',
			next: 'rowan_training_advanced',
			effects: { wisdom: 4 },
			hiddenEffects: {
				rowan_bond: 12,
				rowan_relationship: 'professional',
				rowan_walls_back_up: true
			}
		}
	]
};

export const RowanTrainingSession: Scene = {
	id: 'rowan_training_advanced',
	text: `Weeks after your initial lessons mastering basics, Rowan suggests advanced wilderness training with serious expression. "You've mastered basics admirably," they say with approval. "Now let's see if you can survive three days in deep forest. Just you, me, and what we can carry. No servants, no guards, no safety net."

This is test of skills learned, but also adventure - opportunity for three days alone in wilderness together away from everything.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { rowan_romance: true }
			},
			text: `"Three days," Rowan says with meaningful look that carries weight beyond words. "Away from manor, from politics, from everyone watching and judging every move. Just us and forest." The romantic possibility hangs unspoken but electric in air between you, charged with potential.

"We'll need to camp," they add, hint of nervousness beneath ranger confidence they usually project. "Share fire for warmth. Share... space." They meet your eyes directly. "If that's alright with you. If you're comfortable with that intimacy." Seeking permission.`
		},
		{
			conditions: {
				hasHiddenAttributes: { rowan_relationship: 'best_friend' }
			},
			text: `"Three days," Rowan grins with genuine excitement lighting features. "Remember when you could barely walk quietly through undergrowth? Now you're ready for serious wilderness survival. I'm proud of you, friend. Genuinely."

They clap your shoulder affectionately with warmth. "This'll be fun. No servants fussing, no nobles judging, no expectations weighing. Just two people who trust each other completely, testing skills and enjoying forest. Like the adventure we both needed for sanity." Enthusiasm is infectious.`
		}
	],
	choices: [
		{
			id: 'accept-eagerly',
			text: 'Accept eagerly - you trust Rowan completely',
			next: 'rowan_forest_expedition',
			effects: { courage: 4, strength: 3 },
			hiddenEffects: {
				rowan_bond: 15,
				wilderness_adventure: true,
				deepening_relationship: true
			}
		},
		{
			id: 'accept-nervously',
			text: 'Accept but admit nervousness about being so remote',
			next: 'rowan_forest_expedition',
			effects: { courage: 3, empathy: 2 },
			hiddenEffects: {
				rowan_bond: 12,
				rowan_reassures: true,
				vulnerable_honesty: true
			}
		}
	]
};

export const RowanForestExpedition: Scene = {
	id: 'rowan_forest_expedition',
	text: `The deep forest is magnificent and humbling in scope. Ancient trees tower overhead reaching toward sky, sunlight filtering through canopy in golden shafts that illuminate dust motes dancing. Rowan moves through this world like dancer at home, at perfect ease with environment, and you do your best to follow using skills learned.

By evening of first day, you've set camp by clear stream with water burbling over stones. Rowan builds fire with practiced efficiency born from years of experience while you gather water in containers and prepare food from packs. The partnership feels natural and balanced, each contributing skills without need for discussion or direction. Complementary.

As stars emerge overhead in breathtaking display rarely seen from cities, Rowan leans back against fallen log, genuinely relaxed in way you rarely see at manor. "This is home," they say quietly with contentment. "Not buildings or politics or social expectations. This. Trees ancient and wise, stars watching, earth solid beneath you, fire for warmth and comfort. Everything else is just... noise."

Over next three days, you and Rowan grow even closer through shared experience. Whether romantic partners exploring intimacy, best friends cementing bond, or something developing toward definition, time in wilderness cements your connection. You learn to read each other's movements instinctively, communicate with glances when silence is needed, trust completely in dangerous situations requiring cooperation.

By time you return to manor, something fundamental has shifted permanently. Your relationship - whatever form it takes - is unshakeable as ancient trees.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { rowan_romance: true }
			},
			text: `Under stars scattered across sky like scattered jewels, Rowan moves closer with deliberate intent, fingers finding yours and intertwining. "I needed this," they admit with vulnerability. "Time with you without guards or advisors or responsibilities pressing. Just... us being ourselves."

The firelight catches their features, making them look almost ethereal - elven heritage visible in delicate bone structure. "Thank you for trusting me enough to come out here alone," they say softly. "For wanting to understand my world where I'm most myself. For being someone I can truly be myself with without masks."

They lean in, kissing you softly with tenderness that makes heart ache. The three days become honeymoon of sorts - stolen kisses by stream, falling asleep wrapped in each other's arms under stars, waking to birdsong and gentle touches expressing affection. You return to manor changed profoundly, your romance deepened into something unbreakable as ancient oaks.`
		},
		{
			conditions: {
				hasHiddenAttributes: { rowan_relationship: 'soul_friend' }
			},
			text: `Rowan offers you some dried fruit from their pack with easy generosity. "You know what's amazing?" they say with warmth. "We can sit in comfortable silence or talk for hours, and both feel equally comfortable. That's rare gift. Most people need constant noise or get awkward with quiet."

They smile at you warmly, affection clear without romance. "You're one of my favorite people in entire world. Just wanted you to know that."

Over three days, you share stories, fears, hopes for future. You become kind of friends who know each other's souls intimately - platonic soulmates who would face anything together without hesitation.`
		},
		{
			conditions: {
				hasHiddenAttributes: { rowan_relationship: 'professional' }
			},
			text: `Despite earlier professional boundary discussion creating distance, being in Rowan's natural element makes distance harder to maintain. You see them fully relaxed and authentic in ways manor doesn't allow - laughing freely, moving with grace, speaking without careful word selection.

The training is exceptional, and you both maintain appropriate conduct professionally. But there are moments - catching each other's eyes across fire, working in perfect synchrony - where you wonder if you made right choice. Still, boundaries remain respected carefully despite temptation.`
		}
	],
	choices: [
		{
			id: 'return-stronger',
			text: 'Return to the manor with your bond strengthened',
			effects: { wisdom: 5, strength: 4, empathy: 4 },
			hiddenEffects: {
				rowan_bond: 15,
				expedition_complete: true,
				relationship_cemented: true
			}
		}
	]
};

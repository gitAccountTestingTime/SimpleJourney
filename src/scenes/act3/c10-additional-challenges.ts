import { Scene } from '../../story-manager';

/**
 * Additional Challenge Scenes
 * These scenes provide real-life challenge opportunities integrated into the story
 */

// Training and Physical Challenges

export const WarriorDrills: Scene = {
	id: 'warrior_drills_training',
	text: `The palace courtyard transforms into something between training ground and sacred ritual space. Dawn light spills across packed earth worn smooth by generations of boots, illuminating the weapons rack where practice blades wait with their edges dulled but their weight still true. The air tastes of morning cold and the sharp metallic tang of steel, carries the distant sounds of the waking city beyond the walls - merchants opening shops, workers beginning their day, unaware of the desperate preparation happening within.

Kieran stands at the center like a monument to martial discipline, his armor catching the light in flashes of silver as he moves through forms with the unconscious grace of someone who has done this ten thousand times. But there is nothing peaceful in his expression. His jaw is set with grim determination, his steel-grey eyes burning with urgency that makes your stomach clench. "We are preparing for war," he says, and the words land like stones in still water. Not theory. Not possibility. War. "Everyone capable needs to be combat-ready. Including you."

He does not wait for your response, simply begins demonstrating a series of combat drills - footwork that prioritizes survival over elegance, strikes that conserve energy while maximizing impact, defensive maneuvers that assume your opponent is faster and stronger and more willing to die than you are. Each movement is stripped of ceremony, reduced to its essential function. This is not performance. This is survival. "This is not theory anymore," he says between demonstrations, and something cracks in his controlled facade. Fear. Real fear. "Your life may depend on your fitness and reflexes. The Shadow Beasts will not wait politely for you to catch your breath. They will not respect your nobility or your good intentions. They will simply tear and rend until you fall."

Other companions begin filtering into the courtyard, drawn by the sounds of training or perhaps summoned by Kieran's preparation. Rowan appears with her bow, moving through targeting drills with fluid precision that makes the weapon seem like an extension of her body. Finn follows, his crossbow awkward in hands more accustomed to lute strings, but his expression fierce with determination to contribute however he can. Even Sage emerges, attempting basic self-defense stances with academic concentration, treating combat like a problem to be solved through proper analysis. There is something sacred in this shared struggle - nobility and commoner, warrior and artist and scholar, all preparing to face darkness together.

"Will you commit to this?" Kieran asks, and his voice carries the weight of every warrior he has trained who did not survive, every friend he watched fall because they were not quite ready enough. "Real training. Real discipline. The kind of effort that makes your body scream and your pride wither. Not performance for observers. Preparation for survival. Will you?"`,
	choices: [
		{
			id: 'intensive-training',
			text: 'Commit to intensive physical training with Kieran and companions - train your body for the war ahead through real discipline',
			next: 'crystal_hunt_start',
			effects: { strength: 6, courage: 5 },
			hiddenEffects: {
				warrior_discipline: true,
				combat_ready: true,
				kieran_respect: 15,
				army_morale: 10
			},
			realLifeChallenge: {
				id: 'warrior_intensive_training',
				type: 'exercise',
				title: 'Warrior Training Regimen',
				description: 'Complete a real physical workout to mirror your character\'s combat preparation',
				instructions: 'Complete at least 20 minutes of physical exercise. This could include: push-ups, squats, jogging, jumping jacks, or any cardio activity. Take breaks as needed, but maintain effort throughout.',
				durationMinutes: 20,
				verificationMethod: 'honor',
				checklistItems: [
					'Warm up for 2-3 minutes',
					'Complete main exercise routine (15+ minutes)',
					'Cool down and stretch (2-3 minutes)',
					'Drink water and recover'
				],
				rewards: {
					stats: { strength: 4, courage: 3, vitality: 2 },
					hiddenAttributes: { warrior_trained: true, kieran_bond: 1 },
					message: 'You feel genuinely stronger and more capable. Kieran nods with approval - you\'re becoming a true warrior.'
				}
			}
		},
		{
			id: 'moderate-training',
			text: 'Participate but at your own pace - avoid injury while still showing commitment to preparation',
			next: 'crystal_hunt_start',
			effects: { strength: 3, wisdom: 2 },
			hiddenEffects: {
				participated: true,
				kieran_respect: 5
			}
		},
		{
			id: 'strategic-focus',
			text: 'Focus on strategy over physical training - your mind is your greatest weapon, not your body',
			next: 'crystal_hunt_start',
			effects: { wisdom: 5 },
			hiddenEffects: {
				tactical_mind: true,
				different_approach: true
			}
		}
	]
};

// Cooking and Hospitality Challenges

export const DiplomaticFeastPrep: Scene = {
	id: 'diplomatic_feast_prep',
	text: `Seraphine finds you drowning in military reports - troop movements, supply chain logistics, intelligence assessments that paint increasingly dire pictures. She enters without announcement, closing the door behind her with a finality that makes you look up from the papers that have consumed the last three hours. Her typically composed expression shows cracks - worry lines around her eyes, tension in her shoulders, hands that twist together in a gesture of anxiety she usually suppresses.

"The delegation from Ironforge arrives tomorrow," she says, and there is urgency beneath her diplomatic tone. "Dwarven representatives to discuss formal alliance terms. Military support. Resource sharing. Refugee aid. Everything we desperately need." She moves to your desk, not sitting but leaning against it with uncharacteristic informality. "We need to show proper hospitality. Not the hollow performance of state dinners. Real hospitality."

You notice her hands still moving restlessly - wringing, twisting, betraying the depth of her concern. This is unusual for Seraphine, whose control is normally ironclad. "Our head cook is overwhelmed with preparations for three hundred guests, managing dietary restrictions and cultural sensitivities and supply shortages all at once. The feast must be perfect - food is sacred to dwarves. It is how they measure respect and sincerity. An elaborate meal served with cold formality is an insult. Simple food prepared with visible care is an honor."

She meets your eyes, and you see something raw in her expression - genuine fear that she has failed, that her careful diplomatic planning is about to crumble because of something as simple as food. "I know it is unusual," she continues, voice dropping to almost a plea. "Heirs do not typically work in kitchens. Nobles do not soil their hands with cooking. But..." She hesitates, choosing words with the care of someone who knows how easily they can wound or heal. "Would you help prepare something for the feast? Not the entire meal - that would be impossible and overwhelming the staff. But perhaps a signature dish? A central element that bears your personal touch?"

Her smile is tentative, hopeful, vulnerable in a way you have never seen from her. "The dwarves would be honored to know the heir prepared food with their own hands. It would speak louder than any treaty clause about our genuine desire for partnership. It would show that we value them enough to give our time, our effort, our humility in service rather than standing above in judgment. Will you? Will you help me save this alliance before it even begins?"`,
	choices: [
		{
			id: 'prepare-feast',
			text: 'Help prepare a special dish for the feast with your own hands - show genuine hospitality through personal effort',
			next: 'dessert_diplomacy',
			effects: { charisma: 6, empathy: 5 },
			hiddenEffects: {
				dwarven_respect: 20,
				seraphine_grateful: true,
				hands_on_leader: true,
				diplomatic_bonus: 15
			},
			realLifeChallenge: {
				id: 'diplomatic_feast_cooking',
				type: 'cooking',
				title: 'Prepare a Diplomatic Feast',
				description: 'Cook a meal in real life to show the same care and hospitality your character demonstrates',
				instructions: 'Prepare any meal from scratch (not just reheating). It can be simple like pasta with sauce, eggs and toast, or more complex. The effort and care matter more than complexity. Take time to make it well.',
				durationMinutes: 20,
				verificationMethod: 'honor',
				checklistItems: [
					'Choose your recipe',
					'Gather ingredients and utensils',
					'Prepare/cook your meal with care',
					'Plate it nicely',
					'Clean up your cooking area'
				],
				rewards: {
					stats: { charisma: 4, empathy: 3, wisdom: 2 },
					hiddenAttributes: { culinary_skill: 1, seraphine_bond: 1, dwarven_alliance: 1 },
					message: 'The dwarven delegation is deeply impressed by your personal effort. Seraphine beams with pride at your diplomacy through hospitality.'
				}
			}
		},
		{
			id: 'delegate-task',
			text: 'Delegate to professional cooks - trust their expertise and focus your energy on other preparations',
			next: 'ironpeak_negotiation',
			effects: { wisdom: 3 },
			hiddenEffects: {
				professional_approach: true,
				missed_opportunity: true
			}
		},
		{
			id: 'attend-only',
			text: 'Just attend the feast without preparing - your presence at the table is what matters, not kitchen labor',
			next: 'ironpeak_negotiation',
			effects: { charisma: 1 },
			hiddenEffects: {
				minimal_effort: true,
				seraphine_disappointed: true
			}
		}
	]
};

export const DessertDiplomacy: Scene = {
	id: 'dessert_diplomacy',
	text: `The diplomatic feast has concluded in qualified success - the dwarven delegates seemed satisfied, negotiations promising if not yet finalized. You are reviewing notes from the evening when Finn approaches with an expression that manages to be both mischievous and deeply sincere, like someone about to reveal a secret that matters more than anyone realizes.

"The workers in the kitchens want to do something special," he says without preamble, drawing you away from the diplomatic reports toward a quiet corner. "They heard you helped with the main feast. That you worked with your own hands, that you treated the kitchen like sacred space rather than servant territory." His eyes shine with something that might be tears or might be reflected lamplight. "Word spreads fast among common folk when nobles break patterns. When they see us as human."

He leans closer, voice dropping to conspiratorial intimacy though there is nothing secretive in his words - only the careful delivery of something precious. "They want to present a special dessert as a gift. Not ordered by protocol. Not demanded by tradition. A gift from the common folk to show their support for your rule. To say: we see you trying. We see you caring. We choose to stand with you." He pauses, and his grin breaks through the solemnity like sunlight through storm clouds. "But... they think it would mean more if you helped make it. If you worked alongside them not because diplomacy requires it, but because you want to. Because you see them."

Finn's expression transforms - the performer's mask falling away to reveal the artist who believes in the transformative power of shared creation. "Baking together. Nobles and workers side by side, flour on everyone's hands, laughter mixing with concentration. Do you understand what that communicates? Not just acceptance. Not just tolerance. But genuine belief that the kingdom's future includes everyone. That our hands are equally capable of creating beauty."

Through the doorway, you can see the kitchen staff watching with barely contained hope. Their faces show exhaustion from the feast preparations, hands dusted with flour and stained with ingredients, but their eyes shine with something that looks like desperate longing. To be seen. To matter. To contribute not as invisible servants but as partners in building something better.

"Will you?" Finn asks quietly. "Will you bake with them? Make something sweet and unnecessary and beautiful, together?"`,
	choices: [
		{
			id: 'bake-dessert',
			text: 'Bake dessert with the kitchen workers - work side by side to create something sweet and unite classes through shared labor',
			next: 'dessert_diplomacy_success',
			effects: { empathy: 7, charisma: 5 },
			hiddenEffects: {
				worker_support: 25,
				finn_delighted: true,
				common_touch: true,
				class_bridge: true
			},
			realLifeChallenge: {
				id: 'dessert_baking_challenge',
				type: 'cooking',
				title: 'Bake a Sweet Victory',
				description: 'Bake a dessert in real life to celebrate unity and shared joy',
				instructions: 'Bake any dessert from scratch. It can be simple like cookies or brownies, or more complex like cake or pie. The effort and care matter most. Enjoy the process and share the result if possible.',
				durationMinutes: 30,
				verificationMethod: 'honor',
				checklistItems: [
					'Choose your dessert recipe',
					'Gather baking ingredients',
					'Follow the recipe with care',
					'Bake until done',
					'Let cool and enjoy (or share!)'
				],
				rewards: {
					stats: { empathy: 5, charisma: 4, wisdom: 2 },
					hiddenAttributes: { baking_skill: 1, finn_bond: 2, people_champion: true },
					message: 'The workers cheer as you present the dessert together. Finn grins proudly - you\'ve shown true solidarity with the common folk.'
				}
			}
		},
		{
			id: 'taste-only',
			text: 'Taste their dessert but do not help bake - appreciate their work without participating in the labor',
			next: 'dragon_trial',
			effects: { charisma: 2 },
			hiddenEffects: {
				worker_support: 5,
				finn_disappointed: true,
				missed_connection: true
			}
		},
		{
			id: 'politely-decline',
			text: 'Politely decline - too many other pressing duties require your attention elsewhere',
			next: 'dragon_trial',
			effects: { wisdom: 1 },
			hiddenEffects: {
				workers_understand: true,
				missed_bonding: true
			}
		}
	]
};

export const DessertDiplomacySuccess: Scene = {
	id: 'dessert_diplomacy_success',
	text: `The dessert emerges from the ovens golden and perfect, steam rising with the intoxicating scent of caramelized sugar and butter and vanilla - the smell of home, of comfort, of love made tangible through careful attention to simple ingredients. The kitchen erupts in cheers as you and the workers present it together, no hierarchy visible in the flour-dusted faces and proud smiles. Nobles and commoners standing side by side, united not by duty but by the shared satisfaction of creating something beautiful.

The Dwarf King himself - Thorin Ironhand, whose approval you desperately needed - takes a generous helping with his massive, scarred hands. The hall falls silent as he samples it, his weathered face unreadable in that way dwarves have perfected over centuries of stone-faced negotiations. Then his expression cracks into a genuine smile, rare and precious as spring water in a desert. "This," he declares in his gravelly voice that carries to every corner of the hall, "is a symbol of true unity. Food made by many hands working as one. This is the alliance I came seeking." The relief that floods through you is almost dizzying.

As the celebrations continue - nobles and commoners mingling with unprecedented ease, the rigid protocols of class dissolving under the influence of shared accomplishment and good food - Finn materializes with his lute cradled against his chest like a beloved child. "Now seems like the perfect time for some music," he says with that irrepressible grin that makes you want to simultaneously hug him and throttle him. "We have earned this joy. Let us claim it before the world demands our sorrow again."

His fingers find the strings, and melody spills into the hall - not the formal, measured court music that typically accompanies state dinners, but something wild and joyful and alive. A folk tune, perhaps, or something Finn composed in the moment, responding to the energy in the room. The rhythm demands movement, demands celebration, demands the claiming of happiness despite the darkness waiting beyond these walls.

Seraphine appears at your side with uncharacteristic spontaneity, her diplomatic composure softened by wine and relief and genuine happiness. Her eyes sparkle with something you rarely see in them - playfulness. Freedom. "Dance with me?" she asks, extending her hand with none of her usual calculated grace. "Let us celebrate this moment of joy. Tomorrow we face Shadow Beasts and impossible choices and the weight of kingdoms. But tonight?" Her smile is radiant, transformative. "Tonight, let us choose happiness. Just for a few minutes. Can we have that?"

The music swells around you like a living thing, inviting and insistent. Your companions are scattered throughout the hall - Kieran actually smiling as he converses with dwarven warriors, Rowan teaching kitchen workers a folk dance from her homeland, Sage deep in animated discussion with a dwarven historian. Everyone is laughing, relaxed for the first time in weeks, the constant tension of impending war temporarily forgotten in favor of this small, sacred bubble of joy. The moment hovers like something precious and fragile. A choice between duty and delight. Between continuing the mission and claiming a moment of simple human happiness.`,
	choices: [
		{
			id: 'celebrate-dancing',
			text: 'Dance and celebrate this victory - claim joy and connection before darkness returns',
			next: 'dance_celebration',
			effects: { charisma: 4, empathy: 3 },
			hiddenEffects: {
				celebration_spirit: true,
				seraphine_delighted: true
			}
		},
		{
			id: 'continue-mission',
			text: 'Thank them but continue to next fragment quest - duty calls and the mission cannot wait',
			next: 'dragon_trial',
			effects: { wisdom: 2, courage: 1 },
			hiddenEffects: {
				focused_on_mission: true,
				seraphine_understands: true
			}
		}
	]
};

// Battle Preparation Challenges

export const BattlePreparationCry: Scene = {
	id: 'battle_preparation_cry',
	text: `The assembled forces gather below the Dragon's Spine like a living tapestry of unlikely alliance - human soldiers in battered armor standing shoulder to shoulder with dwarven warriors carved from mountain stone, elven archers with their elegant bows beside common folk clutching whatever weapons they could find, merchants and farmers and nobles united by the singular, terrifying truth that everything they love hangs in the balance. Word has spread through the camps like wildfire: the heir faces the dragon trial today. Success means power beyond imagining. Failure means... well. No one speaks of failure.

But first, before you climb the mountain to face ancient beings who have watched empires rise and fall like mayflies dancing their brief lives, they watch and wait for your words. Thousands of faces turned toward you - some young and terrified, some weathered by battles survived, some carrying the hollow exhaustion of refugees who have lost everything except the fragile hope that maybe, impossibly, things could still be saved. The weight of their gazes is almost physical, pressing down on your shoulders with the burden of responsibility for all these lives, all these stories, all these desperate dreams of survival.

Kieran stands at your side in full ceremonial armor, every piece polished to mirror brightness despite the scars and dents that speak of battles survived. He does not look at you, his eyes scanning the crowd with the vigilance of a warrior who has buried too many friends. "They need to hear from you," he says quietly, voice pitched for your ears alone. "Not politics. Not careful diplomatic phrasing. Not strategy or logistics or the rational assessment of our chances." He finally turns, and his eyes burn with intensity. "They need fire in their blood. They need to believe - truly believe, in their bones and souls - that victory is possible. That you are worth dying for. That this impossible fight has meaning."

The crowd waits in tense silence broken only by the rustle of armor, the nervous shifting of boots on stone, the distant cry of mountain eagles circling overhead. You can feel their fear like a living thing, thick and choking. But underneath the fear: hope. Desperate, fragile hope that you might say something, do something, be something that transforms this gathering of terrified individuals into an army capable of miracles. They need you to light the fire. They need you to give them something bigger than their fear to carry into the darkness.

Rowan suddenly climbs onto a supply platform, their athletic grace making the movement look effortless as they turn to face you with wild encouragement blazing in their expression. "Give them something to fight for!" they shout, voice carrying across the assembled forces. "Make them believe! Make them remember why we stand here instead of running! Make them remember what we are protecting!"

High above, perched on an outcropping of stone that seems to grow naturally from the mountainside, the Dragon Matriarch watches with eyes like molten gold. Ancient. Patient. Curious to see how you inspire mortals to face the impossible. How you transform fear into courage through nothing but words and will and the fragile magic of shared belief. This, too, is part of your trial. Not just your worthiness before dragons. Your worthiness before those who would follow you into darkness.`,
	choices: [
		{
			id: 'war-cry',
			text: 'Give a thunderous battle cry to inspire the troops - pour every ounce of courage and conviction into a roar that ignites their hearts',
			next: 'dragon_trial_after_cry',
			effects: { courage: 8, charisma: 7, strength: 4 },
			hiddenEffects: {
				army_morale: 50,
				inspired_warriors: true,
				legendary_moment: true,
				all_factions_united: true,
				gave_battle_cry: true
			},
			realLifeChallenge: {
				id: 'battle_cry_challenge',
				type: 'physical',
				title: 'Warrior\'s Battle Cry',
				description: 'Channel your inner warrior and give your best battle cry! Let courage and passion pour out.',
				instructions: 'Find a private space where you can be loud. Take a deep breath and shout your most rousing battle cry! It could be "For honor!", "Victory!", "For the kingdom!", or any empowering phrase. Put real energy and emotion into it. Do it with full intensity!',
				durationMinutes: 1,
				verificationMethod: 'honor',
				checklistItems: [
					'Find a space where you can be loud',
					'Take a deep breath and center yourself',
					'Shout your battle cry with full intensity',
					'Feel the surge of courage and power'
				],
				rewards: {
					stats: { courage: 6, charisma: 5, strength: 3 },
					hiddenAttributes: { fearless: true, voice_of_command: 1, warrior_leader: true },
					message: 'Your battle cry echoes across the courtyard! The army roars in response, ready to follow you into legend. Kieran\'s eyes shine with fierce pride.'
				}
			}
		},
		{
			id: 'speech',
			text: 'Give an inspiring speech about unity and shared purpose - rally them with eloquence and vision',
			next: 'dragon_trial_after_cry',
			effects: { charisma: 8, wisdom: 5 },
			hiddenEffects: {
				army_morale: 35,
				unity_message: true,
				diplomatic_inspiration: true
			}
		},
		{
			id: 'silent-gesture',
			text: 'Raise weapon silently - let actions speak louder than words, show quiet strength and unwavering resolve',
			next: 'dragon_trial_after_cry',
			effects: { courage: 6, wisdom: 4 },
			hiddenEffects: {
				army_morale: 25,
				stoic_leadership: true,
				quiet_strength: true
			}
		}
	]
};

export const DragonTrialAfterCry: Scene = {
	id: 'dragon_trial_after_cry',
	text: `The crowd erupts in response to your words - not polite applause or dutiful acknowledgment, but a roar that shakes the very stones beneath your feet. Thousands of voices raised in unified defiance, in shared purpose, in the desperate fierce hope that maybe, impossibly, they can survive what comes next. The sound crashes over you like a physical force - warriors beating swords against shields in rhythmic percussion, common folk stamping feet and clapping hands, even the stoic dwarves raising their voices in their ancient war chants. Your forces are inspired. Unified. Ready to follow you into darkness believing you will lead them back to light.

The Dragon Matriarch shifts on her perch high above, ancient scales catching sunlight in cascades of gold and bronze. Her massive head tilts, eyes that have watched civilizations rise and crumble fixing on you with something that might be respect or might be the dragon equivalent of mild surprise. "Impressive," her voice resonates directly in your mind, bypassing ears entirely to speak soul to soul. "You command loyalty. Not through fear or divine right, but through something more... authentic. More dangerous." She spreads wings that could eclipse the sun, then settles them again. "Now prove you deserve it. Prove the loyalty they offer you is not misplaced."

She descends in a controlled fall that becomes a landing of such grace that barely any dust rises from her touch. Up close, she is impossibly vast - a living mountain, power made flesh and scale and razor-sharp intelligence. "Choose your trial," she says, and the words carry the weight of ancient ritual, of pacts made before humans learned to write, of tests that separate those worthy of power from those who would abuse it. "Strength or Wisdom? Will you prove yourself through physical might, matching claw and fang and ferocity? Or through mental acuity, navigating the labyrinth of philosophy and ethics that separates thoughtless violence from righteous action? Choose, heir. Choose how you wish to be measured."`,
	choices: [
		{
			id: 'wisdom-path',
			text: 'Choose trial of wisdom - prove yourself through philosophical contest and moral reasoning rather than violence',
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
			text: 'Choose trial of strength - face dragon combat trial and prove your physical courage and warrior spirit',
			next: 'thorne_loneliness',
			effects: { courage: 6 },
			hiddenEffects: {
				dragon_shard_obtained: true,
				thorne_respect: 15,
				thorne_romance: 15,
				dragon_faction_rep: 35,
				strength_dragon: true
			}
		}
	]
};

// Meditation and Reflection Challenges

export const MeditationBeforeBattle: Scene = {
	id: 'meditation_before_battle',
	text: `After the intense dragon trial and Thorne's vulnerability confession, after inspiring armies and facing ancient beings and navigating the impossible complexity of feelings you barely understand for someone who has lived centuries in isolation - you feel the weight of everything pressing down like a physical burden. Your mind races through endless loops: strategy and emotion, duty and desire, fear and determination all tangled together until you cannot distinguish one thread from another. The sun has set, leaving the mountainside bathed in silver moonlight that makes everything feel dreamlike and distant.

Lyra finds you there, sitting on a rocky outcrop with your knees drawn to your chest, staring at nothing. She does not announce herself, simply settles beside you with the fluid grace of someone who moves through the world as though it were water. Her presence is calm - not the absence of feeling, but the peaceful coexistence with it. Like a lake that reflects storms without being disturbed in its depths.

"You are carrying too much," she observes gently, not as criticism but as simple fact. Her voice carries the musical quality of her elven heritage, each word chosen with care. "Dragon trials that test the limits of your courage and wisdom. Ancient love that asks you to heal wounds carved by centuries of solitude. The fate of entire kingdoms resting on choices you must make with insufficient information and too little time. Your mind must be chaos right now. A storm with no center, no eye of calm from which to observe and make sense of the madness."

She shifts to face you more directly, moonlight illuminating her serene features - ageless and young simultaneously, wise and innocent in ways that seem contradictory until you understand that elves experience time differently, carry all their years within them at once rather than stacking them linearly like humans do. "May I teach you something?" she asks, and there is no presumption in the offer, only genuine desire to share something precious. "A meditation technique elves use in times of overwhelming stress. It does not make the burdens disappear - that would be dishonest, and dishonesty helps no one. But it quiets the mind. Centers the spirit. Brings clarity so you can see which worries are real threats requiring action, and which are merely fear creating shadows where none exist."

Lyra extends her hand, palm up in offering rather than demand. "Even ten minutes of true stillness could make the difference between being consumed by these burdens and carrying them with grace. Between drowning in fear and swimming through it toward purpose. Will you let me guide you? Will you give yourself permission to simply be still, just for a moment, before you must move again?"`,
	choices: [
		{
			id: 'meditate',
			text: 'Meditate with Lyra to find inner peace - learn to carry burdens with grace rather than being crushed by their weight',
			next: 'shimmerwood_games',
			effects: { wisdom: 8, courage: 5 },
			hiddenEffects: {
				mental_clarity: true,
				inner_peace: true,
				battle_ready: true,
				lyra_grateful: true,
				meditation_mastered: true
			},
			realLifeChallenge: {
				id: 'pre_battle_meditation',
				type: 'meditation',
				title: 'Find Inner Peace',
				description: 'Practice meditation to find the same clarity and calm Lyra offers',
				instructions: 'Sit comfortably in a quiet space. Close your eyes and focus on your breathing for 10 minutes. When your mind wanders, gently return focus to your breath. This builds mental discipline and inner calm.',
				durationMinutes: 10,
				verificationMethod: 'timer',
				checklistItems: [
					'Find a quiet, comfortable space',
					'Sit with good posture',
					'Set a 10-minute timer',
					'Close eyes and focus on breathing',
					'Complete the full meditation period'
				],
				rewards: {
					stats: { wisdom: 5, courage: 4, vitality: 3 },
					hiddenAttributes: { inner_peace: 1, mental_clarity: 1, lyra_bond: 1 },
					message: 'Your mind feels clear and focused. Fear fades, replaced by centered determination. Lyra smiles - you\'re ready for what comes next.'
				}
			}
		},
		{
			id: 'prefer-activity',
			text: 'Prefer to stay active - return to your companions and prepare through action rather than stillness',
			next: 'shimmerwood_games',
			effects: { strength: 4, courage: 3 },
			hiddenEffects: {
				practical_preparation: true,
				nervous_energy: true
			}
		},
		{
			id: 'talk-instead',
			text: 'Talk with Lyra instead of meditating - seek comfort in conversation and connection rather than solitary practice',
			next: 'shimmerwood_games',
			effects: { empathy: 4, wisdom: 2 },
			hiddenEffects: {
				emotional_comfort: true,
				lyra_bond: 8,
				connection_over_technique: true
			}
		}
	]
};

// Creative and Learning Challenges

export const CreativeBannerDesign: Scene = {
	id: 'creative_banner_design',
	text: `Finn's entire face transforms when you suggest creating something together - not the controlled smile he shows in court, but something raw and unguarded and so full of joy it almost hurts to witness. His eyes go wide, then immediately shine with tears he does not bother hiding because this, this is what he lives for. Being seen. Being valued not for political usefulness but for the thing that makes him feel most alive.

He disappears and returns moments later with an armful of supplies scavenged from around the workers' district - canvas still smelling of its previous life as a merchant's tarp, paints in mis-matched jars with colors that do not quite match but contain possibility anyway, sticks of charcoal wrapped in cloth, brushes with bristles worn but still functional. Not the fine materials kept in noble studios, but real materials used by real people creating real art despite having every reason to prioritize survival over beauty.

"You want to make art?" His voice cracks with disbelief and hope and the fragile beginning of understanding that maybe you truly see him. "With me? Not commission art. Not evaluate art someone else made. Actually create?" He sets the materials down with shaking hands, organizing them with the care of someone handling sacred objects. "Most nobles think art is frivolous. Decoration. Something to purchase to demonstrate wealth but never to practice because getting paint under your fingernails is beneath dignity." He looks at you with naked vulnerability. "But you understand, don't you? Art is how we make meaning visible. How we express what words can't hold. How we turn the invisible architecture of hope and fear and love into something others can see and touch and carry with them."

He spreads the materials out on a cleared table, his artist's hands moving with practiced efficiency despite the emotion making him clumsy. "Let us create something that represents what we are fighting for. Not grand military banners designed to intimidate enemies. Not propaganda to manipulate the masses. Something real. The actual hope we have for a better world. For workers and nobles standing together not because hierarchy demands it but because we choose it. For beauty existing even in the midst of terror because beauty is resistance, is defiance, is proof that we are still human despite everything trying to strip that humanity away."

Finn selects a brush and presses it into your hand, his fingers lingering against yours as though the touch itself is part of the creative act. "Fifteen minutes of pure creation. No judgment. No striving for perfection that strangles authenticity. Just... express what is in your heart. What you are fighting for. What you cannot bear to lose. Paint it, draw it, shape it into visibility." His smile is tremulous and beautiful. "Show me what hope looks like through your eyes."`,
	choices: [
		{
			id: 'create-art',
			text: 'Create banner art with Finn - pour your vision and hope into creative expression alongside someone who sees art as sacred',
			next: 'finn_bonding_3',
			effects: { charisma: 6, empathy: 5, wisdom: 3 },
			hiddenEffects: {
				banner_created: true,
				finn_thrilled: true,
				artistic_expression: true,
				symbolic_unity: true,
				finn_romance: 15
			},
			realLifeChallenge: {
				id: 'creative_expression_challenge',
				type: 'creative',
				title: 'Express Your Vision',
				description: 'Create something artistic to express your character\'s hopes and vision',
				instructions: 'Create any form of art: draw or sketch something, write a short poem or story, craft something with your hands, arrange objects aesthetically, or make music. Spend at least 15 minutes in genuine creative expression. Focus on the process, not perfection.',
				durationMinutes: 15,
				verificationMethod: 'honor',
				checklistItems: [
					'Gather materials (paper, pen, craft supplies, etc.)',
					'Choose your medium of expression',
					'Create without judgment - focus on the process',
					'Spend full time in creative flow',
					'Reflect on what you made and how it felt'
				],
				rewards: {
					stats: { charisma: 4, empathy: 4, wisdom: 3 },
					hiddenAttributes: { creative_soul: 1, finn_bond: 2, artistic_vision: true },
					message: 'Your creation captures something real - hope, determination, unity. Finn\'s eyes shine with tears. "This is what art does. Makes the invisible visible. Thank you for understanding."'
				}
			}
		},
		{
			id: 'approve-design',
			text: 'Let Finn design it - trust and empower his artistic vision while you provide support and approval',
			next: 'finn_bonding_3',
			effects: { charisma: 3, wisdom: 2 },
			hiddenEffects: {
				finn_empowered: true,
				artistic_delegation: true
			}
		},
		{
			id: 'military-symbols',
			text: 'Focus on traditional military heraldry instead - choose practical intimidation over artistic expression',
			next: 'finn_bonding_3',
			effects: { wisdom: 4 },
			hiddenEffects: {
				traditional_approach: true,
				finn_disappointed: true
			}
		}
	]
};

export const LearningWarHistory: Scene = {
	id: 'learning_war_history',
	text: `The royal archives smell of ancient paper and dust and the particular mustiness of knowledge preserved across generations - not unpleasant, but dense with history. You and Sage settle into a private alcove surrounded by towering shelves, historical accounts stacked in careful order spanning centuries of conflict, alliance, triumph, and tragedy. Leather-bound volumes and carefully preserved scrolls, military treatises and first-hand battlefield accounts, all illuminated by the warm golden light of enchanted lanterns that burn without consuming, preserving these precious records from the threat of fire. The atmosphere is intimate in a way that surprises you - not romantic exactly, but deeply personal. Two scholars pursuing truth together, minds aligned in shared curiosity rather than bodies aligned in shared space.

"Look at this," Sage says, their voice carrying the particular intensity they get when something intellectual captures their complete attention. They pull a volume toward you both, fingers trailing reverently over illuminated text that some long-dead scribe labored to perfect. "The Battle of Crimson Fields. Three hundred years ago. The defending forces were outnumbered three to one. Every military theorist predicted catastrophic defeat." They look up, eyes alight with the kind of passion most people reserve for lovers but Sage reserves for ideas. "They won. Do you know how? Not through superior force or legendary heroes. Through clever alliance-building. They spent two weeks before the battle negotiating with minor border clans everyone else dismissed as irrelevant. Those 'irrelevant' forces turned the tide."

They flip forward several pages to another marked passage, movements eager like a child sharing a beloved story. "And here - the Siege of Irongate. Seventy years later. The attacking force was larger, better equipped, led by a general who had never lost a battle. He was so confident, so certain of victory, that he ignored basic siege protocols." Sage's expression turns grave. "Catastrophic defeat. Two-thirds of his army lost because overconfidence made him blind to simple tactical realities. His legacy became a cautionary tale about hubris."

They lean closer to share the ancient text, and the movement brings you near enough that you can feel the warmth radiating from them, smell the parchment dust clinging to their clothes and the faint scent of ink from where they have been taking notes in margins despite the archives keeper's certain disapproval. "Twenty minutes of real study," Sage says, and their voice drops to something more vulnerable. More uncertain. "Not skimming for the key tactical points you can recite in meetings. Not pretending to read while your mind wanders to more urgent matters. Actually learn from these histories together. Understand not just what happened but why. How humans make choices under impossible pressure. How arrogance kills more surely than enemy blades. How wisdom accumulated across centuries waits here to teach us if we will only listen."

Sage's hand brushes yours as they turn a page - accidental contact that they do not immediately withdraw from, letting the touch linger as though testing whether you will pull away or lean into the connection. "Will you study with me? Really study, with the focus and attention this deserves? I know..." They hesitate, vulnerability flickering across features usually guarded behind intellectual confidence. "I know it is more meaningful when shared. When I can turn to someone and say 'look at this pattern' and they actually see it, actually care. Will you be that someone? Just for twenty minutes, can we learn together?"`,
	choices: [
		{
			id: 'study-together',
			text: 'Study war history seriously with Sage - learn from past mistakes and triumphs to become a wiser leader who saves lives through knowledge',
			next: 'climax_preparation',
			effects: { wisdom: 8, courage: 4 },
			hiddenEffects: {
				historical_knowledge: true,
				tactical_insight: true,
				sage_deeply_impressed: true,
				battle_advantage: 15,
				sage_romance: 20
			},
			realLifeChallenge: {
				id: 'learning_pursuit_challenge',
				type: 'learning',
				title: 'Pursuit of Strategic Knowledge',
				description: 'Study and learn something new alongside Sage to become a wiser leader',
				instructions: 'Spend 20 minutes learning something new. Read an article about a topic you\'re curious about, watch an educational video, research history, or study about philosophy/strategy. Take it seriously and absorb new information.',
				durationMinutes: 20,
				verificationMethod: 'honor',
				checklistItems: [
					'Choose a topic to learn about',
					'Find reliable learning resources',
					'Focus on learning for 20 minutes',
					'Take notes or reflect on what you learned',
					'Consider how this knowledge applies to life'
				],
				rewards: {
					stats: { wisdom: 6, courage: 3, charisma: 2 },
					hiddenAttributes: { strategic_mind: 1, sage_bond: 2, educated_leader: true },
					message: 'Your mind expands with tactical understanding. Sage beams with pride - you\'ve become the wise, thoughtful leader they always believed you could be. "This... this is beautiful. Learning together."'
				}
			}
		},
		{
			id: 'skim-quickly',
			text: 'Skim the key points quickly - extract tactical information efficiently without deep engagement',
			next: 'climax_preparation',
			effects: { wisdom: 4 },
			hiddenEffects: {
				basic_knowledge: true,
				sage_disappointed: true
			}
		},
		{
			id: 'trust-advisors',
			text: 'Trust your advisors knowledge instead - delegate learning to experts and focus on leadership decisions',
			next: 'climax_preparation',
			effects: { charisma: 3, wisdom: 1 },
			hiddenEffects: {
				delegation_approach: true,
				missed_learning: true
			}
		}
	]
};

// Social Connection Challenges

export const SocialConnectionBeforeBattle: Scene = {
	id: 'social_connection_before_battle',
	text: `You call your companions together in the quiet hour between midnight and dawn, when the castle sleeps and the world feels suspended between yesterday's safety and tomorrow's unknowable danger. Not for strategy sessions that have consumed every waking hour for weeks. Not for planning or logistics or the grim calculus of acceptable losses. Simply to connect as people who have become family through shared struggle, shared laughter, shared terror faced together until it transformed into something like courage.

They gather in a chamber lit by a few candles and the dying embers of a fire - Seraphine arriving first with her usual punctuality, followed by Rowan moving with predator grace, then Lyra gliding in with elven serenity, Finn stumbling in half-asleep but immediately alert when he sees the gathering, Sage with a book tucked under their arm they set aside without protest, and finally Kieran who positions himself near the door out of instinct before consciously choosing to move closer to the circle. Faces that have become precious to you. Features you have memorized in crisis and celebration, anger and affection, fear and hope and every emotion between.

"Whatever comes next," you say, and your voice catches on the weight of everything those words contain - battles that might be lost, friends who might not survive, a world that might end despite everyone's best efforts - "I want us to take time. Not to plan. Not to strategize. Just to actually connect. To share what is in our hearts before... before we cannot anymore." The words feel inadequate, but you push through. "You are not just allies. Not just useful companions in a political alliance. You are the people I fight for. The reason victory matters. And I need you to know that. To really know it."

Seraphine speaks first, as she so often does, but her diplomatic polish has cracked to reveal something raw and real beneath. Her voice is thick with emotion she usually controls so carefully. "You have become my real family," she says, and tears track down her cheeks unheeded. "Not the family that sold me to diplomacy and marriage negotiations without asking what I wanted. Not the siblings who saw me as tool rather than person. You - all of you - are the first family I chose for myself. The first people who saw me as Seraphine rather than as Lady Everdawn's daughter or political asset." Others nod, and you see the shimmer of tears on more than one face.

The moment is sacred in a way no formal ceremony could match - genuine human connection in the face of uncertainty. The acknowledgment that you love each other, that you would die for each other, that these bonds matter more than kingdoms or prophecies or anything else the world might demand of you.`,
	choices: [
		{
			id: 'facilitate-sharing',
			text: 'Create space for everyone to share and connect deeply - facilitate genuine vulnerability and emotional honesty among your chosen family',
			next: 'vale_personal_quest',
			effects: { empathy: 9, charisma: 7, wisdom: 5 },
			hiddenEffects: {
				all_companions_bonded: true,
				unbreakable_fellowship: true,
				emotional_preparation: true,
				fight_for_each_other: true
			},
			realLifeChallenge: {
				id: 'social_connection_challenge',
				type: 'social',
				title: 'Build Real Connections',
				description: 'True leadership and friendship require genuine human connection',
				instructions: 'Spend 15 minutes having a genuine social interaction. Call or video chat with a friend/family member you care about, write a thoughtful message, have a real conversation in person, or reconnect with someone. Make it meaningful - ask how they\'re doing, share something real, listen actively.',
				durationMinutes: 15,
				verificationMethod: 'honor',
				checklistItems: [
					'Choose someone to reach out to',
					'Initiate contact (call, message, in-person)',
					'Have a genuine conversation (15+ minutes)',
					'Ask thoughtful questions and listen',
					'Share something real about yourself',
					'End on a positive, loving note'
				],
				rewards: {
					stats: { empathy: 6, charisma: 5, wisdom: 3 },
					hiddenAttributes: { social_bond: 1, all_companions_bond: 2, beloved_leader: true },
					message: 'The connections you made feel genuine and deep. Your companions see your leadership isn\'t about authority - it\'s about love. They\'ll follow you anywhere.'
				}
			}
		},
		{
			id: 'brief-words',
			text: 'Say a few words but keep it brief - acknowledge connection without full emotional vulnerability',
			next: 'vale_personal_quest',
			effects: { charisma: 4, wisdom: 2 },
			hiddenEffects: {
				connection_attempted: true,
				somewhat_distant: true
			}
		},
		{
			id: 'action-over-words',
			text: 'Let actions speak - move on to helping companions with practical preparation rather than emotional connection',
			next: 'vale_personal_quest',
			effects: { courage: 4, wisdom: 1 },
			hiddenEffects: {
				stoic_approach: true,
				missed_bonding: true
			}
		}
	]
};

// Dance and Celebration Challenge

export const DanceCelebration: Scene = {
	id: 'dance_celebration',
	text: `Finn begins playing a lively tune on his lute without warning or announcement, fingers dancing across strings with the kind of abandon that only comes when artifice falls away and pure joy takes over. The melody is infectious - not the careful, measured court music designed to provide pleasant background ambiance, but something wild and alive. Joyful. Defiant. Full of life in its most raw and unfiltered form. The kind of music that demands response, that will not permit stillness, that insists you remember what it feels like to simply exist in your body without purpose or productivity, with nothing but the pure celebration of drawing breath.

Seraphine takes your hand with a grin that transforms her entire face - not the diplomatic smile she wears in negotiations, but something genuine and unguarded and radiantly beautiful. "Let us dance!" she says, laughing as she pulls you toward the cleared space that has spontaneously formed as others push furniture aside. "Let us celebrate being alive, being together, being free to choose joy even when everything reasonable suggests we should be consumed by terror. Dance with me!"

Others join in as though the music has stripped away every barrier and pretense - Rowan spinning with athletic grace that makes their movements look like combat rendered artistic, Kieran surprisingly nimble for someone usually weighted down with armor and responsibility, Lyra laughing with unrestrained delight as Sage attempts steps with more enthusiasm than coordination. Even the typically reserved among your companions give themselves over to this moment, this permission to simply feel good despite everything.

The music swells and accelerates, Finn's fingers flying across strings while his own body moves to rhythms he creates, lost in the kind of creative ecstasy that makes him luminous. The moment demands joy. Demands movement. Demands the celebration of life not as abstract concept but as lived experience - hearts pumping blood and lungs drawing breath and muscles flexing with capability. You are alive. Despite everything that has tried to kill you. Despite everything that will try to kill you tomorrow. Right now, in this moment, you are impossibly, miraculously alive.`,
	choices: [
		{
			id: 'dance-wildly',
			text: 'Dance with abandon - celebrate life with wild joy and complete surrender to the moment!',
			next: 'dragon_trial',
			effects: { charisma: 7, courage: 5, vitality: 6 },
			hiddenEffects: {
				joyful_memory: true,
				morale_boost: 20,
				companions_inspired: true,
				celebrated_life: true
			},
			realLifeChallenge: {
				id: 'celebration_dance_challenge',
				type: 'physical',
				title: 'Dance of Life',
				description: 'Dance to celebrate being alive, just like your companions do before battle',
				instructions: 'Put on music you love and dance for 3 minutes. It doesn\'t matter if you know formal steps - just move with rhythm, joy, and intention. Let yourself celebrate being alive. Focus on fun and expression.',
				durationMinutes: 3,
				verificationMethod: 'honor',
				checklistItems: [
					'Choose music that makes you happy',
					'Clear some space to move',
					'Dance for the full 3 minutes',
					'Try different movements - spins, jumps, sways',
					'Focus on joy and celebration, not perfection'
				],
				rewards: {
					stats: { charisma: 5, courage: 4, vitality: 4 },
					hiddenAttributes: { joyful_spirit: 1, all_companions_bond: 1, celebration: true },
					message: 'You dance with wild joy! Your companions laugh and cheer. This moment of celebration, of choosing joy despite fear, becomes legendary. Tomorrow, you fight for moments like this.'
				}
			}
		},
		{
			id: 'dance-properly',
			text: 'Dance with Seraphine using proper form - celebrate with grace and elegance rather than wild abandon',
			next: 'dragon_trial',
			effects: { charisma: 5, wisdom: 3 },
			hiddenEffects: {
				graceful_moment: true,
				seraphine_pleased: true
			}
		},
		{
			id: 'watch-others',
			text: 'Watch others dance and enjoy the moment - appreciate joy without needing to participate in its expression',
			next: 'dragon_trial',
			effects: { wisdom: 3, empathy: 3 },
			hiddenEffects: {
				observer: true,
				appreciated_moment: true
			}
		}
	]
};

// Quick Physical Wellness Challenge

export const StretchBreak: Scene = {
	id: 'stretch_break',
	text: `After long hours of preparation and planning that have blurred together into an exhausting marathon of decisions and debates, logistics and strategy, fear management and morale maintenance - you find yourself hunched over yet another map, shoulders knotted with tension, neck aching from the posture of someone who has forgotten their body exists as anything other than a transport mechanism for their frantically working mind. You reach up to massage a particularly sore spot, fingers digging into muscle that has turned to stone.

"Stop," Kieran commands, and though his voice is gentle, the military authority in it makes you freeze mid-motion. He is watching you - no, watching the entire room - with the expression of someone who has seen too many warriors crippled not by enemy blades but by their own neglect of basic physical maintenance. "You are tense. Everyone is." He addresses the group with the confidence of someone used to being obeyed not through fear but through respect. "Sixty seconds. Right now. Quick wellness check before the council meets again. We need our bodies ready for what comes next - not cramped and aching and half-crippled before the real fighting even begins."

He does not wait for agreement, simply moves to the center of the room and begins demonstrating with the unselfconscious efficiency of someone for whom physical awareness is second nature. Reaching overhead, arms stretching toward the ceiling in a movement that makes his armor creak. Twisting at the waist, methodical rotations that loosen the spine. Rolling shoulders backward in controlled circles that work out knots most people have stopped noticing. Each movement is simple, basic, the kind of thing anyone could do. The kind of thing everyone should do but almost no one bothers with until pain becomes unbearable.

"It is a small thing," he says while moving, not even slightly winded, his voice carrying to every corner despite its conversational volume. "I know you have a thousand more important concerns. I know you think you cannot spare sixty seconds. But I have watched good warriors fall because they forgot this basic truth: a minute of care now could make the difference between muscles that respond when you need them and muscles that seize when survival depends on speed." He pauses mid-stretch to make eye contact with you specifically. "Please. Just one minute. For me. For yourselves."

Rowan joins in without comment, stretching with the feline grace of someone who has always understood that the body is not separate from the mind but rather the foundation upon which everything else rests. "Kieran is right," they say simply. "Take care of yourselves. One minute. Do it now. Not later. Now."`,
	choices: [
		{
			id: 'stretch-now',
			text: 'Lead everyone in a proper stretch session - prioritize physical wellness and model self-care for your companions',
			next: 'climax_preparation',
			effects: { strength: 3, vitality: 4, wisdom: 2 },
			hiddenEffects: {
				body_ready: true,
				kieran_approves: true,
				wellness_focus: true,
				combat_ready: true
			},
			realLifeChallenge: {
				id: 'combat_readiness_stretch',
				type: 'physical',
				title: 'Warrior Readiness',
				description: 'Warriors know the importance of keeping muscles loose and ready',
				instructions: 'Stand up right now and stretch for 60 seconds. Reach your arms overhead, twist your torso side to side, roll your shoulders, stretch your neck. Move every joint briefly. Quick and effective!',
				durationMinutes: 1,
				verificationMethod: 'honor',
				checklistItems: [
					'Stand up from your seat',
					'Stretch arms overhead',
					'Twist torso side to side',
					'Roll shoulders backward',
					'Stretch neck gently',
					'Take a deep breath'
				],
				rewards: {
					stats: { strength: 2, vitality: 3, courage: 1 },
					hiddenAttributes: { combat_ready: true, kieran_bond: 1 },
					message: 'Your muscles feel looser and more responsive. Kieran nods approvingly - even small disciplines matter. You\'re ready for what comes next.'
				}
			}
		},
		{
			id: 'quick-stretch',
			text: 'Do a quick stretch yourself - acknowledge the need without leading the group',
			next: 'climax_preparation',
			effects: { strength: 2, vitality: 2 },
			hiddenEffects: {
				self_care: true
			}
		},
		{
			id: 'skip-it',
			text: 'Too much to do - keep working and ignore physical discomfort in favor of urgent priorities',
			next: 'climax_preparation',
			effects: { wisdom: 1 },
			hiddenEffects: {
				tense_muscles: true,
				missed_care: true
			}
		}
	]
};

import { Scene } from '../../story-manager';

/**
 * Additional Challenge Scenes
 * These scenes provide real-life challenge opportunities integrated into the story
 */

// Training and Physical Challenges

export const WarriorDrills: Scene = {
	id: 'warrior_drills_training',
	text: `Kieran sets up an intensive training regimen in the palace courtyard. "We're preparing for war," he says grimly. "Everyone capable needs to be combat-ready - including you."

He demonstrates a series of combat drills - footwork, strikes, defensive maneuvers. "This isn't theory anymore. Your life may depend on your fitness and reflexes. The Shadow Beasts won't wait for you to catch your breath."

Other companions join - Rowan with bow work, Finn practicing with his crossbow, even Sage attempting basic self-defense. There's camaraderie in shared struggle.

"Will you commit to this?" Kieran asks. "Real training, real discipline?"`,
	choices: [
		{
			id: 'intensive-training',
			text: 'Commit to intensive physical training',
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
			text: 'Participate but at your own pace',
			next: 'crystal_hunt_start',
			effects: { strength: 3, wisdom: 2 },
			hiddenEffects: {
				participated: true,
				kieran_respect: 5
			}
		},
		{
			id: 'strategic-focus',
			text: 'Focus on strategy over physical training',
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
	text: `Seraphine finds you reviewing military reports. "The delegation from Ironforge arrives tomorrow," she reminds you. "Dwarven representatives to discuss alliance terms. We need to show proper hospitality."

She looks troubled. "Our head cook is overwhelmed with preparations. The feast must be perfect - food is sacred to dwarves. It's how they measure respect and sincerity."

You notice her wringing her hands - unusual for her composure. "I know it's unusual, but... would you help prepare something for the feast? Not the entire meal, but perhaps a signature dish? Personal involvement shows genuine care."

She smiles hopefully. "The dwarves would be honored to know the heir prepared food with their own hands."`,
	choices: [
		{
			id: 'prepare-feast',
			text: 'Help prepare a special dish for the feast',
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
			text: 'Delegate to professional cooks',
			next: 'ironpeak_negotiation',
			effects: { wisdom: 3 },
			hiddenEffects: {
				professional_approach: true,
				missed_opportunity: true
			}
		},
		{
			id: 'attend-only',
			text: 'Just attend the feast without preparing',
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
	text: `The diplomatic feast has been a success, but Finn approaches with a mischievous grin. "The workers in the kitchens want to do something special. They heard you helped with the main feast."

He leans in conspiratorially. "They want to present a special dessert as a gift from the common folk to show their support for your rule. But..." He grins. "They think it would mean more if you helped make it. Gets your hands dirty, shows you're one of them."

Finn's expression turns sincere. "Baking together - nobles and workers side by side - sends a powerful message. That the kingdom's future includes everyone."

The kitchen staff watches hopefully, flour-dusted and eager.`,
	choices: [
		{
			id: 'bake-dessert',
			text: 'Bake dessert with the kitchen workers',
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
			text: 'Taste their dessert but don\'t help bake',
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
			text: 'Politely decline - too many other duties',
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
	text: `The dessert is a triumph! Workers cheer as you present it together - nobles and commoners side by side. The Dwarf King himself takes a generous helping and declares it "a symbol of true unity."

As the celebrations continue, Finn pulls out his lute. "Now seems like the perfect time for some music," he grins. The hall fills with a lively melody.

Seraphine appears at your side, eyes sparkling. "Dance with me?" she asks. "Let's celebrate this moment of joy. Tomorrow we face dangers, but tonight - let's choose happiness."

The music swells invitingly. Your companions are laughing, relaxed for the first time in weeks.`,
	choices: [
		{
			id: 'celebrate-dancing',
			text: 'Dance and celebrate this victory',
			next: 'dance_celebration',
			effects: { charisma: 4, empathy: 3 },
			hiddenEffects: {
				celebration_spirit: true,
				seraphine_delighted: true
			}
		},
		{
			id: 'continue-mission',
			text: 'Thank them but continue to next fragment quest',
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
	text: `Below the Dragon's Spine, your assembled forces gather. Word has spread - the heir faces the dragon trial. But first, they watch and wait for your words.

Kieran stands at your side in full armor. "They need to hear from you," he says quietly. "Not politics, not strategy. They need fire in their blood. They need to believe victory is possible before you face the dragons."

The crowd waits in tense silence. You can feel their fear, their hope, their desperate need for inspiration.

Rowan climbs onto a platform. "Give them something to fight for!" they shout. "Make them believe!"

The Dragon Matriarch watches from above, curious to see how you inspire mortals.`,
	choices: [
		{
			id: 'war-cry',
			text: 'Give a thunderous battle cry to inspire the troops',
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
			text: 'Give an inspiring speech about unity',
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
			text: 'Raise weapon silently - let actions speak',
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
	text: `The crowd roars their approval. Your forces are inspired, unified, ready.

The Dragon Matriarch nods with something like respect. "Impressive. You command loyalty." She turns to you directly. "Now prove you deserve it. Choose your trial - Strength or Wisdom?"`,
	choices: [
		{
			id: 'wisdom-path',
			text: 'Choose trial of wisdom - engage in philosophical contest',
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
			text: 'Choose trial of strength - face dragon combat trial',
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
	text: `After the intense dragon trial and Thorne's vulnerable confession, you feel the weight of everything pressing down. Lyra finds you on the mountainside.

"You're carrying too much," she observes gently. "Dragon trials, ancient love, the fate of the kingdom. Your mind must be chaos."

She sits beside you, moonlight illuminating her serene features. "May I teach you something? A meditation technique elves use in times of overwhelming stress. It quiets the mind, centers the spirit, and brings clarity."

Lyra extends her hand. "Even ten minutes of stillness could make the difference between being consumed by these burdens and carrying them with grace."`,
	choices: [
		{
			id: 'meditate',
			text: 'Meditate with Lyra to find inner peace',
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
			text: 'Prefer to stay active - return to your companions',
			next: 'shimmerwood_games',
			effects: { strength: 4, courage: 3 },
			hiddenEffects: {
				practical_preparation: true,
				nervous_energy: true
			}
		},
		{
			id: 'talk-instead',
			text: 'Talk with Lyra instead of meditating',
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
	text: `Finn's eyes light up when you suggest creating something together. He finds canvas, paints, charcoal - whatever artistic supplies are available in this worker's district.

"You want to make art? With me?" His voice cracks with emotion. "Most nobles think art is frivolous. But you understand - art is how we make meaning visible. How we express what words can't hold."

He spreads out materials. "Let's create something that represents what we're fighting for. Not grand military banners - something real. The hope we have for a better world, for workers and nobles standing together."

Finn hands you a brush, his touch lingering. "Fifteen minutes of pure creation. No judgment, no perfection. Just... express what's in your heart."`,
	choices: [
		{
			id: 'create-art',
			text: 'Create banner art with Finn',
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
			text: 'Let Finn design it - approve his vision',
			next: 'finn_bonding_3',
			effects: { charisma: 3, wisdom: 2 },
			hiddenEffects: {
				finn_empowered: true,
				artistic_delegation: true
			}
		},
		{
			id: 'military-symbols',
			text: 'Focus on traditional military heraldry instead',
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
	text: `You and Sage settle into the archives, surrounded by historical accounts spanning centuries. The atmosphere is intimate - two scholars pursuing truth together.

"Look at this," Sage says, eyes alight with intellectual passion. "The Battle of Crimson Fields - outnumbered forces won through clever alliance-building. And here, the Siege of Irongate - overconfidence led to catastrophic defeat."

They lean closer, sharing the ancient text. "Twenty minutes of real study. Not skimming, not pretending. Actually learn from these histories together. Understanding past battles - past mistakes and triumphs - could save lives tomorrow."

Sage's hand brushes yours as they turn a page. "Will you study with me? Really learn this together? It's... it's more meaningful when shared."`,
	choices: [
		{
			id: 'study-together',
			text: 'Study war history seriously with Sage',
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
			text: 'Skim the key points quickly',
			next: 'climax_preparation',
			effects: { wisdom: 4 },
			hiddenEffects: {
				basic_knowledge: true,
				sage_disappointed: true
			}
		},
		{
			id: 'trust-advisors',
			text: 'Trust your advisors\' knowledge instead',
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
	text: `You call your companions together - not for strategy or planning, but simply to connect as people who've become family.

They gather in a quiet chamber. Seraphine, Rowan, Lyra, Finn, Sage, Kieran - faces that have become precious to you.

"Whatever comes next," you say, "I want us to take time. Actually connect. Share what's in our hearts. You're not just allies - you're the people I fight for."

Seraphine speaks first, voice thick with emotion. "You've become my real family. The first I chose for myself." Others nod, some wiping tears.

The moment is sacred - genuine human connection in the face of uncertainty.`,
	choices: [
		{
			id: 'facilitate-sharing',
			text: 'Create space for everyone to share and connect deeply',
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
			text: 'Say a few words but keep it brief',
			next: 'vale_personal_quest',
			effects: { charisma: 4, wisdom: 2 },
			hiddenEffects: {
				connection_attempted: true,
				somewhat_distant: true
			}
		},
		{
			id: 'action-over-words',
			text: 'Let actions speak - move on to helping companions',
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
	text: `Finn begins playing a lively tune on his lute. The melody is infectious - joyful, defiant, full of life.

Seraphine takes your hand with a grin. "Let's dance! Let's celebrate being alive, being together, being free to choose joy even in dark times."

Others join in - Rowan spinning gracefully, Kieran surprisingly nimble, Lyra laughing as Sage attempts awkward steps.

The music swells. The moment demands joy, demands movement, demands celebration of life.`,
	choices: [
		{
			id: 'dance-wildly',
			text: 'Dance with abandon - celebrate life!',
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
			text: 'Dance with Seraphine using proper form',
			next: 'dragon_trial',
			effects: { charisma: 5, wisdom: 3 },
			hiddenEffects: {
				graceful_moment: true,
				seraphine_pleased: true
			}
		},
		{
			id: 'watch-others',
			text: 'Watch others dance and enjoy the moment',
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
	text: `After long hours of preparation and planning, Kieran notices you massaging a sore shoulder.

"Stop," he commands gently. "You're tense. Everyone is." He addresses the group. "Sixty seconds. Quick wellness check before the council. We need our bodies ready, not cramped and aching."

He demonstrates - reaching overhead, twisting, rolling shoulders. "It's a small thing, but it matters. A minute of care now could make the difference."

Rowan joins in, stretching like a cat. "Kieran's right. Take care of yourselves. One minute. Do it now."`,
	choices: [
		{
			id: 'stretch-now',
			text: 'Lead everyone in a proper stretch session',
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
			text: 'Do a quick stretch yourself',
			next: 'climax_preparation',
			effects: { strength: 2, vitality: 2 },
			hiddenEffects: {
				self_care: true
			}
		},
		{
			id: 'skip-it',
			text: 'Too much to do - keep working',
			next: 'climax_preparation',
			effects: { wisdom: 1 },
			hiddenEffects: {
				tense_muscles: true,
				missed_care: true
			}
		}
	]
};

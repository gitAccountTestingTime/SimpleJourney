import { Scene } from '../../story-manager';

// Example scenes demonstrating real-life challenges

export const TrainingGrounds: Scene = {
	id: 'training_grounds',
	text: `You arrive at the training grounds where Kieran awaits. The morning air is crisp, and other knights are already sparring in the courtyard.

"Ready to truly test yourself?" Kieran asks, arms crossed. "Training isn't just about imagination - it's about discipline and real effort. If you want to earn my respect and improve your combat skills, you'll need to prove your dedication."

He gestures to the training equipment. "Show me you're serious about this path."`,
	choices: [
		{
			id: 'accept-training-challenge',
			text: 'Accept the physical training challenge',
			next: 'post_training',
			effects: { courage: 5, strength: 8 },
			hiddenEffects: {
				kieran_trust: 25,
				training_completed: true,
				warrior_path: true
			},
			realLifeChallenge: {
				id: 'kieran_training_1',
				type: 'exercise',
				title: 'Warrior Training Regimen',
				description: 'To truly train alongside Kieran, you must complete a real physical workout. This builds genuine strength and discipline that mirrors your character\'s journey.',
				instructions: 'Complete at least 20 minutes of physical exercise. This could include: push-ups, squats, jogging, jumping jacks, or any cardio activity. Take breaks as needed, but maintain effort throughout.',
				durationMinutes: 20,
				verificationMethod: 'timer',
				checklistItems: [
					'Warm up for 2-3 minutes',
					'Complete main exercise routine (15 minutes)',
					'Cool down and stretch (2-3 minutes)',
					'Drink water and catch your breath'
				],
				rewards: {
					stats: { strength: 3, courage: 2 },
					hiddenAttributes: { warrior_training_level: 1 },
					message: 'You feel genuinely stronger! Kieran notices your dedication.'
				}
			}
		},
		{
			id: 'skip-training',
			text: 'Politely decline for now',
			next: 'manor_return',
			effects: { wisdom: 2 },
			hiddenEffects: {
				kieran_trust: -5,
				training_avoided: true
			}
		}
	]
};

export const KitchenScene: Scene = {
	id: 'kitchen_encounter',
	text: `The manor kitchen is warm and inviting. Seraphine stands by the hearth, looking stressed as she reviews the evening's menu.

"The diplomatic dinner is tonight," she sighs. "Our head chef fell ill, and we need to serve something impressive to the visiting nobles. This could make or break critical alliances."

She looks at you hopefully. "I know it's unusual to ask, but... could you help prepare a meal? Something from the heart might be exactly what we need to show genuine hospitality."`,
	choices: [
		{
			id: 'cooking-challenge',
			text: 'Offer to cook a meal',
			next: 'successful_dinner',
			effects: { charisma: 6, wisdom: 4 },
			hiddenEffects: {
				seraphine_romance: 30,
				cooking_skill: true,
				diplomat_impressed: true
			},
			realLifeChallenge: {
				id: 'seraphine_cooking_1',
				type: 'cooking',
				title: 'Prepare a Diplomatic Feast',
				description: 'Help Seraphine by actually cooking a meal in real life. This connects you to your character\'s efforts and makes the story more immersive.',
				instructions: 'Prepare any meal from scratch (not just reheating). It can be simple like pasta with sauce, a sandwich, eggs, or more complex. The effort and care matter more than complexity.',
				durationMinutes: 15,
				verificationMethod: 'honor',
				checklistItems: [
					'Gather ingredients and utensils',
					'Prepare/cook your meal',
					'Plate it nicely',
					'Clean up your cooking area',
					'Enjoy your meal!'
				],
				rewards: {
					stats: { charisma: 3, empathy: 2 },
					hiddenAttributes: { domestic_skill: 1, seraphine_bond: 1 },
					message: 'The meal is delicious! Seraphine is deeply impressed by your effort.'
				}
			}
		},
		{
			id: 'hire-help',
			text: 'Suggest hiring temporary help instead',
			next: 'hired_chef',
			effects: { wisdom: 3, wealth: -10 },
			hiddenEffects: {
				practical_solution: true,
				seraphine_romance: 5
			}
		}
	]
};

export const MeditationGrove: Scene = {
	id: 'meditation_grove',
	text: `Lyra leads you to a secluded grove bathed in ethereal moonlight. Ancient trees form a natural circle, their branches creating a canopy of silver leaves.

"Magic isn't just about power," she says softly. "It's about stillness, clarity, and connection. Before you can truly channel blood magic safely, you must learn to quiet your mind and sense the flow of life energy around you."

She sits gracefully on the moss-covered ground. "Will you meditate with me? True meditation requires genuine practice - not just imagining it, but actually experiencing that inner peace."`,
	choices: [
		{
			id: 'meditate-with-lyra',
			text: 'Meditate together to unlock deeper magic',
			next: 'magical_awakening',
			effects: { wisdom: 8, charisma: 4 },
			hiddenEffects: {
				lyra_romance: 35,
				meditation_mastered: true,
				magic_control: 20
			},
			realLifeChallenge: {
				id: 'lyra_meditation_1',
				type: 'meditation',
				title: 'Mystical Meditation',
				description: 'Practice real meditation to deepen your connection with magic and Lyra. Genuine mindfulness enhances your character\'s magical abilities.',
				instructions: 'Sit comfortably in a quiet space. Close your eyes and focus on your breathing for 10 minutes. When your mind wanders, gently return focus to your breath. This builds the mental discipline needed for magic.',
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
					stats: { wisdom: 4, empathy: 3 },
					hiddenAttributes: { inner_peace: 1, magic_aptitude: 1 },
					message: 'Your mind feels clearer. You sense magical energy flowing more naturally.'
				}
			}
		},
		{
			id: 'just-talk',
			text: 'Just spend time talking instead',
			next: 'lyra_conversation',
			effects: { charisma: 3, wisdom: 2 },
			hiddenEffects: {
				lyra_romance: 15,
				bonding_moment: true
			}
		}
	]
};

export const ArtistsQuarter: Scene = {
	id: 'artists_quarter',
	text: `Finn brings you to his workshop in the artists' quarter. The walls are covered with sketches, paintings, and half-finished sculptures. Sunlight streams through tall windows, illuminating motes of dust and creative chaos.

"You see all this?" he gestures broadly. "This is what brings joy to people's lives. Not just weapons and politics - art, beauty, things made with your own hands."

He hands you some supplies. "Create something. Anything. I want to see what's in your soul expressed through your hands, not your words."`,
	choices: [
		{
			id: 'create-art',
			text: 'Create something artistic',
			next: 'artwork_complete',
			effects: { charisma: 7, empathy: 5 },
			hiddenEffects: {
				finn_romance: 30,
				artistic_soul: true,
				creativity_unlocked: true
			},
			realLifeChallenge: {
				id: 'finn_art_1',
				type: 'creative',
				title: 'Express Your Creative Spirit',
				description: 'Create something artistic to share Finn\'s passion and see the world through a creator\'s eyes. Art connects us to our deeper selves.',
				instructions: 'Create any form of art: draw/sketch something, write a short poem or story, craft something with your hands, arrange objects aesthetically, or make music. Spend at least 15 minutes in genuine creative expression.',
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
					stats: { charisma: 3, empathy: 4 },
					hiddenAttributes: { creative_expression: 1, finn_bond: 1 },
					message: 'Your creation reflects genuine feeling. Finn is deeply moved.'
				}
			}
		},
		{
			id: 'decline-art',
			text: 'Explain you\'re not artistically inclined',
			next: 'finn_understanding',
			effects: { wisdom: 2 },
			hiddenEffects: {
				finn_romance: 5,
				honest_moment: true
			}
		}
	]
};

export const SageStudySession: Scene = {
	id: 'sage_study_session',
	text: `Sage's library is filled with thousands of books, scrolls, and ancient texts. He pulls down a thick tome about political philosophy and governance.

"Knowledge is power," he says earnestly. "But true wisdom requires actual study, not just superficial understanding. If we're going to reform this kingdom, you need to truly grasp the principles of good governance."

He slides the book toward you with a knowing smile. "Learning something real will make you a better leader. Care to actually study with me?"`,
	choices: [
		{
			id: 'study-with-sage',
			text: 'Actually learn something new',
			next: 'enlightened_discussion',
			effects: { wisdom: 10, charisma: 4 },
			hiddenEffects: {
				sage_romance: 35,
				political_theory: true,
				educated_leader: true
			},
			realLifeChallenge: {
				id: 'sage_learning_1',
				type: 'learning',
				title: 'Pursuit of Knowledge',
				description: 'Study and learn something new alongside Sage. Real knowledge enriches both you and your character\'s journey toward wise leadership.',
				instructions: 'Spend 20 minutes learning something new. Read an article about a topic you\'re curious about, watch an educational video, study a language, research history, or read about philosophy/politics. Take it seriously and absorb new information.',
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
					stats: { wisdom: 5, curiosity: 4 },
					hiddenAttributes: { knowledge_level: 1, sage_bond: 1 },
					message: 'Your mind expands with new understanding. Sage is delighted by your intellectual curiosity.'
				}
			}
		},
		{
			id: 'politely-decline',
			text: 'Not in the mood for serious study right now',
			next: 'casual_conversation',
			effects: { charisma: 2 },
			hiddenEffects: {
				sage_romance: 5,
				casual_bond: true
			}
		}
	]
};

export const BattlePreparation: Scene = {
	id: 'battle_preparation',
	text: `The enemy forces are visible on the horizon. Your army stands ready behind you, awaiting your command. This is the moment that will define the fate of the kingdom.

Kieran places a hand on your shoulder. "They need to hear your voice. They need to feel your courage. Give them a battle cry they'll remember for the rest of their lives!"

The soldiers turn to face you, shields raised, weapons at the ready. The air crackles with tension and anticipation.`,
	choices: [
		{
			id: 'give-battle-cry',
			text: 'Rally the troops with a powerful battle cry!',
			next: 'inspired_army',
			effects: { courage: 10, charisma: 8, strength: 5 },
			hiddenEffects: {
				army_morale: 50,
				legendary_leader: true,
				kieran_admiration: 30
			},
			realLifeChallenge: {
				id: 'battle_cry_1',
				type: 'physical',
				title: 'Warrior\'s Battle Cry',
				description: 'Channel your inner warrior and give your best battle cry! Let your courage and passion pour out.',
				instructions: 'Find a private space where you can be loud. Take a deep breath and shout your most powerful battle cry! It could be "For honor!", "Victory!", or any empowering phrase. Put real energy and emotion into it. Do it 3 times with full intensity!',
				durationMinutes: 1,
				verificationMethod: 'honor',
				checklistItems: [
					'Find a space where you can be loud',
					'Take a deep breath and center yourself',
					'Shout your battle cry with full intensity (3 times)',
					'Feel the surge of courage and power'
				],
				rewards: {
					stats: { courage: 5, charisma: 4 },
					hiddenAttributes: { fearless: true, voice_of_command: 1 },
					message: 'Your battle cry echoes across the field! The army roars in response, ready to follow you into legend!'
				}
			}
		},
		{
			id: 'silent-gesture',
			text: 'Raise your weapon silently in solidarity',
			next: 'quiet_resolve',
			effects: { courage: 5, wisdom: 3 },
			hiddenEffects: {
				army_morale: 20,
				stoic_leader: true
			}
		}
	]
};

export const DiplomaticBall: Scene = {
	id: 'diplomatic_ball',
	text: `The grand ballroom glitters with candlelight and noble finery. Ambassadors from three rival kingdoms are in attendance, and tensions run high beneath the polite smiles.

Seraphine appears at your side in an elegant gown. "This is it," she whispers. "We need to make connections, build bridges. Would you dance with me? A graceful presence on the dance floor will show them we're sophisticated, cultured, and worth their alliance."

The orchestra begins a waltz. Eyes turn toward you.`,
	choices: [
		{
			id: 'dance-with-seraphine',
			text: 'Accept the dance and practice some real moves',
			next: 'successful_diplomacy',
			effects: { charisma: 8, grace: 6 },
			hiddenEffects: {
				seraphine_romance: 40,
				diplomatic_success: true,
				cultured_reputation: true
			},
			realLifeChallenge: {
				id: 'ballroom_dance_1',
				type: 'physical',
				title: 'Diplomatic Dance',
				description: 'Practice some dance moves to prepare for the ball. Physical grace and coordination translate to confidence and poise.',
				instructions: 'Put on some music and practice dancing for 3 minutes. It doesn\'t matter if you know formal steps - just move with rhythm and intention. Try some spins, steps, or graceful arm movements. Focus on poise and coordination.',
				durationMinutes: 3,
				verificationMethod: 'timer',
				checklistItems: [
					'Choose music to dance to',
					'Clear some space to move',
					'Dance for the full 3 minutes',
					'Try different movements - steps, spins, gestures',
					'Focus on grace and rhythm'
				],
				rewards: {
					stats: { charisma: 4, grace: 3 },
					hiddenAttributes: { dancing_skill: 1, seraphine_bond: 1 },
					message: 'You move across the floor with unexpected grace. Seraphine beams with pride, and the diplomats take notice.'
				}
			}
		},
		{
			id: 'engage-conversation',
			text: 'Focus on diplomatic conversation instead',
			next: 'political_dialogue',
			effects: { wisdom: 5, charisma: 3 },
			hiddenEffects: {
				diplomatic_approach: true,
				seraphine_romance: 15
			}
		}
	]
};

export const AlchemyLab: Scene = {
	id: 'alchemy_lab',
	text: `Lyra's alchemy laboratory is a wonderland of bubbling potions, crystalline instruments, and shelves lined with mysterious ingredients. She's working on a complex healing elixir that could save lives in the coming conflict.

"Blood magic is one path," she explains, carefully measuring a glowing powder. "But alchemy requires patience, precision, and genuine care. This potion takes an hour to brew correctly, and any rush or carelessness will ruin it."

She offers you an empty vial and a recipe. "If you truly want to understand my craft, try making something yourself. Take your time, do it right."`,
	choices: [
		{
			id: 'brew-carefully',
			text: 'Dedicate yourself to the alchemical process',
			next: 'perfect_potion',
			effects: { wisdom: 12, patience: 8, charisma: 5 },
			hiddenEffects: {
				lyra_romance: 50,
				alchemy_mastery: true,
				master_healer: true,
				legendary_potion: true
			},
			realLifeChallenge: {
				id: 'alchemy_brewing_1',
				type: 'creative',
				title: 'The Alchemist\'s Art',
				description: 'Dedicate a full hour to a careful, mindful creative or productive task. True mastery requires patience and sustained focus.',
				instructions: 'Choose a project that takes real focus and complete 1 hour of careful, quality work. This could be: cooking a complex recipe, crafting something detailed, working on a personal project, organizing and beautifying a space, or any productive task that requires sustained attention and care. No rushing - embrace the process.',
				durationMinutes: 60,
				verificationMethod: 'honor',
				checklistItems: [
					'Choose your project or task',
					'Gather all necessary materials',
					'Work with full attention for 60 minutes',
					'Take pride in quality over speed',
					'Complete the task or reach a meaningful milestone',
					'Clean up and reflect on your work'
				],
				rewards: {
					stats: { wisdom: 8, patience: 6, mastery: 4 },
					hiddenAttributes: { 
						alchemy_skill: 2, 
						lyra_bond: 2,
						perfectionist: true,
						master_crafter: true
					},
					message: 'The potion glows with perfect luminescence. Lyra gazes at you with newfound respect and admiration - you\'ve proven yourself a true craftsperson.'
				}
			}
		},
		{
			id: 'quick-attempt',
			text: 'Try to speed through it',
			next: 'failed_potion',
			effects: { wisdom: 2 },
			hiddenEffects: {
				alchemy_failed: true,
				lyra_disappointed: true,
				lyra_romance: -10
			}
		}
	]
};

export const TavernSinging: Scene = {
	id: 'tavern_celebration',
	text: `The tavern is packed with celebrating soldiers and citizens. Word of your recent victory has spread, and the mood is jubilant. Finn stands on a table, lute in hand, leading a rousing drinking song.

As the song ends, he points at you with a dramatic flourish. "And now, our hero will grace us with a song! Come on, don't be shy!"

The crowd cheers and chants your name. This is a moment to connect with the common people, to show them you're one of them.`,
	choices: [
		{
			id: 'sing-with-them',
			text: 'Sing a song for the crowd!',
			next: 'beloved_hero',
			effects: { charisma: 7, courage: 4 },
			hiddenEffects: {
				finn_romance: 25,
				folk_hero: true,
				common_touch: true
			},
			realLifeChallenge: {
				id: 'tavern_singing_1',
				type: 'creative',
				title: 'The Hero\'s Song',
				description: 'Sing out loud and embrace your creative expression! Music connects people and builds courage.',
				instructions: 'Choose a song you enjoy and sing it out loud for at least 2 minutes. It doesn\'t matter if you\'re a good singer - what matters is having the courage to express yourself through song. Sing with energy and feeling!',
				durationMinutes: 2,
				verificationMethod: 'honor',
				checklistItems: [
					'Choose a song you know (or can read lyrics for)',
					'Find a space where you can sing',
					'Sing out loud for at least 2 minutes',
					'Put emotion and energy into it',
					'Embrace the joy of musical expression'
				],
				rewards: {
					stats: { charisma: 4, courage: 3 },
					hiddenAttributes: { musical_talent: 1, finn_bond: 1 },
					message: 'Your voice rings through the tavern! The crowd loves it. Finn grins proudly - you\'ve won the hearts of the people.'
				}
			}
		},
		{
			id: 'decline-politely',
			text: 'Politely decline and toast instead',
			next: 'toast_moment',
			effects: { charisma: 3 },
			hiddenEffects: {
				finn_romance: 10,
				reserved_demeanor: true
			}
		}
	]
};

export const SocialGathering: Scene = {
	id: 'social_gathering',
	text: `Sage is hosting an intimate gathering of intellectuals, artists, and reformers at his estate. These are the people who could become the foundation of a new, more enlightened government.

"These connections matter," Sage tells you privately. "But they need to be genuine. Don't just roleplay networking - actually reach out to someone in your real life. Show me you understand that real relationships are the foundation of real change."

He hands you an invitation. "Make a real connection, and return to tell me about it."`,
	choices: [
		{
			id: 'reach-out',
			text: 'Commit to genuine social connection',
			next: 'meaningful_bonds',
			effects: { charisma: 10, empathy: 8, wisdom: 5 },
			hiddenEffects: {
				sage_romance: 45,
				social_reformer: true,
				genuine_leader: true,
				network_built: true
			},
			realLifeChallenge: {
				id: 'social_connection_1',
				type: 'social',
				title: 'Build Real Connections',
				description: 'True leadership requires genuine human connection. Reach out to someone in your real life and have a meaningful interaction.',
				instructions: 'Spend 15 minutes having a genuine social interaction. Call or video chat with a friend/family member, write a thoughtful message to someone you care about, have a real conversation with someone in person, or reconnect with someone you haven\'t talked to in a while. Make it meaningful - ask how they\'re doing, share something real, listen actively.',
				durationMinutes: 15,
				verificationMethod: 'honor',
				checklistItems: [
					'Choose someone to reach out to',
					'Initiate contact (call, message, in-person)',
					'Have a genuine conversation (15+ minutes)',
					'Ask thoughtful questions and listen',
					'Share something real about yourself',
					'End on a positive note'
				],
				rewards: {
					stats: { charisma: 6, empathy: 5, wisdom: 3 },
					hiddenAttributes: { 
						social_network: 1, 
						sage_bond: 2,
						natural_leader: true,
						beloved_ruler: true
					},
					message: 'The connection you made feels genuine and fulfilling. Sage nods approvingly - you understand that real leadership starts with real relationships.'
				}
			}
		},
		{
			id: 'skip-gathering',
			text: 'Make an excuse to leave',
			next: 'solitary_path',
			effects: { wisdom: 2 },
			hiddenEffects: {
				sage_romance: 5,
				lone_wolf: true
			}
		}
	]
};

export const MorningRoutine: Scene = {
	id: 'morning_routine',
	text: `Dawn breaks over the manor. You have a crucial day ahead - meetings with nobles, training sessions, and strategic planning. But Seraphine finds you still in your chambers, looking exhausted.

"You can't lead effectively if you're not taking care of yourself," she says gently. "Sometimes the most heroic thing is simple self-care. Take time this morning to truly prepare yourself - body, mind, and spirit."

She hands you a schedule. "A proper morning routine. Will you actually do it?"`,
	choices: [
		{
			id: 'morning-routine',
			text: 'Commit to a complete morning routine',
			next: 'energized_leader',
			effects: { strength: 6, wisdom: 6, charisma: 6 },
			hiddenEffects: {
				seraphine_romance: 30,
				self_care: true,
				disciplined_leader: true,
				peak_performance: true
			},
			realLifeChallenge: {
				id: 'morning_routine_1',
				type: 'physical',
				title: 'The Leader\'s Morning Ritual',
				description: 'Great leaders take care of themselves first. Complete a full morning routine to start your day right.',
				instructions: 'Complete a comprehensive 30-minute morning routine. Include: personal hygiene (shower, brush teeth, etc.), getting dressed properly, making your bed, eating a real breakfast, and 5 minutes of stretching or light exercise. Take your time and do it mindfully.',
				durationMinutes: 30,
				verificationMethod: 'checklist',
				checklistItems: [
					'Personal hygiene routine (shower, teeth, etc.)',
					'Get dressed in clean clothes',
					'Make your bed',
					'Prepare and eat a proper breakfast',
					'Do 5 minutes of stretching or light exercise',
					'Take a moment to set intentions for the day'
				],
				rewards: {
					stats: { strength: 4, wisdom: 4, vitality: 4 },
					hiddenAttributes: { 
						self_discipline: 1, 
						seraphine_bond: 1,
						well_rested: true,
						prepared_leader: true
					},
					message: 'You feel refreshed, energized, and ready to face any challenge. Seraphine smiles - you\'re becoming the leader this kingdom needs.'
				}
			}
		},
		{
			id: 'rush-through',
			text: 'Just grab something quick and go',
			next: 'exhausted_day',
			effects: { strength: -2, wisdom: -1 },
			hiddenEffects: {
				rushed: true,
				seraphine_worried: true
			}
		}
	]
};

export const QuickStretch: Scene = {
	id: 'quick_stretch',
	text: `You've been hunched over battle plans and correspondence for hours. Your muscles are tight, your back aches, and Kieran notices you wincing.

"Stand up," he orders. "Right now. You've been sitting too long. Take 30 seconds and stretch properly. I'll wait."

He crosses his arms and watches expectantly.`,
	choices: [
		{
			id: 'stretch-now',
			text: 'Stand and stretch immediately',
			next: 'refreshed_planning',
			effects: { strength: 2, wisdom: 1 },
			hiddenEffects: {
				kieran_trust: 10,
				body_awareness: true
			},
			realLifeChallenge: {
				id: 'quick_stretch_1',
				type: 'physical',
				title: 'Combat Readiness Stretch',
				description: 'Warriors know the importance of keeping muscles loose and ready. Take a quick stretch break.',
				instructions: 'Stand up right now and stretch for 30 seconds. Reach your arms overhead, twist your torso side to side, roll your shoulders, stretch your neck. Move every joint briefly. Quick and effective!',
				durationMinutes: 0.5,
				verificationMethod: 'honor',
				checklistItems: [
					'Stand up from your seat',
					'Stretch arms overhead',
					'Twist torso side to side',
					'Roll shoulders backward',
					'Stretch neck gently'
				],
				rewards: {
					stats: { strength: 2, vitality: 2 },
					hiddenAttributes: { combat_ready: true },
					message: 'Your muscles feel looser and more responsive. Kieran nods - even small disciplines matter.'
				}
			}
		},
		{
			id: 'stay-seated',
			text: 'Continue working through the discomfort',
			next: 'stiff_muscles',
			effects: { wisdom: 1, strength: -1 },
			hiddenEffects: {
				stubborn: true,
				physical_neglect: true
			}
		}
	]
};

import { Scene } from '../../story-manager';

const hiddenLibrary = `Behind a bookshelf in the library, you discover a secret room pulsing with magical energy.`;

const runesGlow = `Ancient runes glow on the walls. In the center, a translucent figure materializes - tall, regal, wearing armor from centuries past. The spirit's eyes are kind but piercing.`;

const secretRoom = `${hiddenLibrary}

${runesGlow}`;

const aldricIdentity = `"At last," the guardian spirit speaks, voice echoing as if from far away. "An heir returns to Silverwood. I am Sir Aldric, sworn to protect the royal bloodline even beyond death."`;

const aldricStudy = `The spirit studies you with ancient eyes.`;

const aldricGreeting = `${aldricIdentity}

${aldricStudy}`;

const oneQuestion = `"I can sense you carry questions, young one. The spirits know much, though we are bound by old laws. I may answer one question - choose wisely, for this gift I give only once."`;

export const AncestralSpirit: Scene = {
	id: 'ancestral_spirit',
	text: `After the exhausting political meeting, you explore the manor's hidden chambers. ${secretRoom}

${aldricGreeting} ${oneQuestion}`,
	textVariants: [
		{
			conditions: { hasFlags: ['companions_at_meeting:true', 'companions_priority:true'] },
			text: `After the political meeting where your companions stood with you, you need time alone to process. You explore the manor's hidden chambers.

${secretRoom}

${aldricGreeting} "You brought your friends to the formal gathering. Unconventional, but... your mother would have approved. She always valued loyalty over protocol."

The spirit's smile is warm. "I may answer one question. Choose wisely."`
		},
		{
			conditions: { hasFlags: ['met_factions_alone:true'] },
			text: `After facing the factions alone, proving your strength, you explore the manor's hidden chambers seeking answers.

${secretRoom}

${aldricGreeting} "You faced them alone. Brave. Your father did the same at his first council." The spirit's approval is evident. "That courage earns you knowledge. I may answer one question - choose wisely."`
		},
		{
			conditions: { hasFlags: ['vale_advising:true', 'vale_role_established:advisor'] },
			text: `After the political meeting where Vale advised you, you explore the manor's hidden chambers. Your blood mark tingles, drawing you to the library.

${secretRoom}

Vale follows you in, sensing the magic. The spirit manifests and nods at them. "A Reformist agent. Interesting choice for advisor, young heir."

${aldricGreeting} "Your companion may stay. I may answer one question - choose wisely."`
		},
		{
			conditions: {
				hasHiddenAttributes: { blood_magic_affinity: 10 }
			},
			text: `After the exhausting political meeting, you explore the manor's hidden chambers. Your blood mark tingles, drawing you toward a bookshelf in the library. Without conscious thought, you touch a specific book, and the shelf swings open.

A secret room pulses with magical energy that resonates with your own awakened power. Ancient runes glow on the walls, responding to your presence.

A translucent figure materializes - tall, regal, wearing armor from centuries past. The spirit smiles. "Your magic called to mine. Good. You are already awakening to your true nature."

"I am Sir Aldric, sworn to protect the royal bloodline. I may answer one question, heir of Silverwood. Your developing power allows you to understand deeper truths - ask, and I shall answer as fully as the ancient laws permit."`
		}
	],
	choices: [
		{
			id: 'crystal-heart',
			text: 'What happened when the Crystal Heart shattered?',
			next: 'mysterious_follower',
			effects: { wisdom: 4 },
			hiddenEffects: {
				spirit_blessed: true,
				learned_crystal_heart_history: true,
				knows_betrayal: true,
				strategic_knowledge: 5
			}
		},
		{
			id: 'family',
			text: 'What happened to my family? Are there other survivors?',
			next: 'mysterious_follower',
			effects: { wisdom: 3 },
			hiddenEffects: {
				spirit_blessed: true,
				learned_family_fate: true,
				emotional_closure: true,
				family_focused: true
			}
		},
		{
			id: 'blood-magic',
			text: 'How do I awaken and control my blood magic?',
			next: 'mysterious_follower',
			effects: { wisdom: 3 },
			hiddenEffects: {
				spirit_blessed: true,
				blood_magic_training: true,
				blood_magic_affinity: 10,
				magical_path_priority: true
			}
		},
		{
			id: 'compassion',
			text: 'How can I help my people and heal the kingdom?',
			next: 'mysterious_follower',
			effects: { wisdom: 2, charisma: 3 },
			hiddenEffects: {
				spirit_blessed: true,
				spirit_guidance: 'compassion',
				healing_path: true,
				compassionate_actions: 5,
				rowan_bond: 5
			}
		}
	]
};

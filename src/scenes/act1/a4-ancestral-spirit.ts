import { Scene } from '../../story-manager';

export const AncestralSpirit: Scene = {
	id: 'ancestral_spirit',
	text: `After the exhausting political meeting, you explore the manor's hidden chambers. Behind a bookshelf in the library, you discover a secret room pulsing with magical energy.

Ancient runes glow on the walls. In the center, a translucent figure materializes - tall, regal, wearing armor from centuries past. The spirit's eyes are kind but piercing.

"At last," the guardian spirit speaks, voice echoing as if from far away. "An heir returns to Silverwood. I am Sir Aldric, sworn to protect the royal bloodline even beyond death."

The spirit studies you with ancient eyes. "I can sense you carry questions, young one. The spirits know much, though we are bound by old laws. I may answer one question - choose wisely, for this gift I give only once."`,
	textVariants: [
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

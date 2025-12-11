import { Scene } from '../../story-manager';

export const ManorExploration: Scene = {
	id: 'act1_start',
	text: `Silverwood Manor belongs to you now. The words still feel impossible, yet here you are, standing in the great hall of your ancestral home.

The manor is breathtaking - vaulted ceilings with frescoes depicting magical creatures and ancient heroes, walls lined with portraits of silver-haired ancestors, sunlight streaming through stained glass windows that cast rainbow patterns across marble floors. This is the life that was stolen from you, the legacy you never knew existed.

Your companions from your adventuring days explore alongside you, each reacting differently to this revelation of your true identity.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { vale_trust: 15 }
			},
			text: `Silverwood Manor belongs to you now. The words still feel impossible, yet here you are, standing in the great hall of your ancestral home.

Vale walks beside you, taking in the grandeur with practiced eyes. "Your parents had excellent taste," they murmur, examining a portrait. "And look - they left everything prepared for you. These documents, the artifacts... they knew you'd return someday."

Their hand finds yours briefly. "You're still you, you know. The person I've traveled with, fought beside. A fancy house doesn't change that."`
		},
		{
			conditions: {
				hasHiddenAttributes: { ash_trust: 20 }
			},
			text: `Silverwood Manor belongs to you now. The words still feel impossible, yet here you are, standing in the great hall of your ancestral home.

Ash lingers near the doorway, clearly uncomfortable with the opulence. "This is... a lot," they say quietly. Their mercenary company has camped in ruins before, but nothing like this.

You catch them watching you with worried eyes. "Just promise me something," Ash says. "Don't let this place change who you are. Don't forget where you came from - where we came from."`
		},
		{
			conditions: {
				hasHiddenAttributes: { rook_trust: 15 }
			},
			text: `Silverwood Manor belongs to you now. The words still feel impossible, yet here you are, standing in the great hall of your ancestral home.

"Oh, I am SO stealing one of these," Rook announces, eyeing a golden candlestick before catching your look. "What? I'm joking! Mostly." They grin, but there's uncertainty beneath the bravado.

"Seriously though," Rook says more quietly, "you're not going to forget about us now that you're all noble and fancy, right? Because I've gotten used to having you around."`
		}
	],
	choices: [
		{
			id: 'journals',
			text: 'Read your parents\' journals - understand who they were',
			next: 'rowan_formal_introduction',
			effects: { wisdom: 3 },
			hiddenEffects: {
				manor_explored: true,
				family_history_known: true,
				emotional_connection: 'family',
				vale_trust: 3,
				compassionate_actions: 2
			}
		},
		{
			id: 'politics',
			text: 'Study the political documents - understand the power you inherit',
			next: 'rowan_formal_introduction',
			effects: { wisdom: 2, charisma: 2 },
			hiddenEffects: {
				manor_explored: true,
				political_knowledge: true,
				pragmatic_focus: true,
				vale_trust: 5
			}
		},
		{
			id: 'magic',
			text: 'Examine the magical artifacts - understand your heritage',
			next: 'rowan_formal_introduction',
			effects: { wisdom: 4 },
			hiddenEffects: {
				manor_explored: true,
				magic_focus: true,
				blood_magic_affinity: 5,
				studied_grimoire: true
			}
		},
		{
			id: 'companions',
			text: 'Spend time with your companions - ground yourself in who you are',
			next: 'rowan_formal_introduction',
			effects: { charisma: 3, courage: 2 },
			hiddenEffects: {
				manor_explored: true,
				companions_priority: true,
				companions_see_noble_life: true,
				vale_trust: 5,
				ash_trust: 5,
				rook_trust: 5,
				whisper_trust: 3
			}
		}
	]
};

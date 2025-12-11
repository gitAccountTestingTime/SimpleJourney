import { Scene } from '../../story-manager';

export const AgentRevealed: Scene = {
	id: 'agent_revealed',
	text: `As the Shadow Beast's corpse dissolves into smoke, your mysterious follower emerges from the trees. An older man, silver-haired, wearing nondescript traveling clothes that somehow suggest nobility. His movements are precise, controlled - a warrior's grace despite his years.

"Forgive the deception, Your Highness," he says, bowing formally. "I am Sir Marcus Thorne, Royal Agent. I've been searching for you for twenty years."

Rowan's weapons stay drawn, but there's recognition in their eyes. "Marcus. So you finally found them."

Marcus nods. "That Shadow Beast was hunting for royal blood. They've been growing bolder, searching. The longer you remain unprotected, the greater the danger." He meets your eyes. "I served your parents. Now I serve you - if you'll have me."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { confrontational_tendency: true }
			},
			text: `As the Shadow Beast's corpse dissolves, your mysterious follower steps forward. You recognize him - you forced him out of hiding with your direct confrontation earlier.

"As effective as your parents," the silver-haired man says with a slight smile. "I am Sir Marcus Thorne, Royal Agent. I apologize for following you, but I needed to observe how you handled yourself."

His eyes are approving. "You confronted both an unknown threat and a Shadow Beast with courage. Your parents would be proud."

Rowan lowers their weapons. "Marcus. You've been testing them?"

"And they passed," Marcus confirms. "Now, Your Highness, may we speak properly?"`
		},
		{
			conditions: {
				hasHiddenAttributes: { rowan_bond: 15 }
			},
			text: `As the Shadow Beast dissolves, your follower emerges. But Rowan steps forward, recognition dawning.

"Marcus! I should have known. Only you could track me through the Wildwood." There's warmth in Rowan's voice despite their earlier tension.

The silver-haired man bows. "Young Thornheart. Still as sharp as ever." He turns to you. "I am Sir Marcus Thorne, Royal Agent. Rowan and I are old friends - I trained them in combat years ago."

Rowan nods at you. "Marcus can be trusted. He's one of the few who stayed loyal after the fall."

Marcus's eyes glisten briefly. "Your parents saved my life once. I've spent twenty years trying to repay that debt by finding you."`
		}
	],
	choices: [
		{
			id: 'trust',
			text: 'Trust him - he helped against the Shadow Beast',
			next: 'seraphine_introduction',
			effects: { charisma: 2 },
			hiddenEffects: {
				trust_in_marcus: true,
				marcus_loyalty: 100,
				open_to_allies: true,
				rowan_bond: 5
			}
		},
		{
			id: 'demand-proof',
			text: 'Demand proof of his loyalty and identity',
			next: 'seraphine_introduction',
			effects: { wisdom: 4 },
			hiddenEffects: {
				skepticism_level: 'high',
				marcus_respect: true,
				trust_in_marcus: true,
				marcus_loyalty: 95,
				cautious_leader: true
			}
		},
		{
			id: 'refuse',
			text: 'Refuse to believe - too convenient, too suspicious',
			next: 'seraphine_introduction',
			effects: { courage: 2 },
			hiddenEffects: {
				skepticism_level: 'very_high',
				marcus_must_prove_himself: true,
				trust_in_marcus: false,
				marcus_loyalty: 85,
				rowan_bond: -3
			}
		},
		{
			id: 'ask-rowan',
			text: 'Ask Rowan\'s opinion before deciding',
			next: 'seraphine_introduction',
			effects: { wisdom: 3 },
			hiddenEffects: {
				rowan_trusts_marcus: true,
				trust_in_marcus: true,
				marcus_loyalty: 100,
				rowan_bond: 10,
				values_counsel: true
			}
		}
	]
};

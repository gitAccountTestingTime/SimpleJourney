import { Scene } from '../../story-manager';

export const SeraphineIntroduction: Scene = {
	id: 'seraphine_introduction',
	text: `Marcus leads you to a safe house in the nearby town - a nondescript building that conceals a well-furnished interior. "There's someone who's been waiting to meet you," he says.

Lady Seraphine Ashford rises from a chair, every movement graceful and controlled. Up close, she's striking - dark hair perfectly styled, sharp intelligent eyes, formal noble attire that somehow makes everyone else feel underdressed. She's younger than you expected, perhaps late twenties, but carries herself with absolute certainty.

"Your Highness," she says, curtseying with perfect form. "I represent the Loyalist faction. We have waited twenty years for this moment - for your return."

Rowan shifts uncomfortably beside you, clearly ill at ease with such formality. The contrast between the free-spirited ranger and the polished noble is stark.

"We have much to discuss," Seraphine continues, "about your responsibilities, your heritage, and the kingdom's future. But first, let me say this: you are not alone. We stand ready to support you in reclaiming your birthright."`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { rowan_bond: 15 }
			},
			text: `Marcus leads you to a safe house. Rowan mutters, "I hate these political meetings," but stays close, protective.

Lady Seraphine Ashford rises with perfect noble grace. Her eyes flick over Rowan with barely concealed distaste - the wilderness ranger clearly offends her sense of propriety.

"Your Highness," Seraphine says formally. "I represent the Loyalist faction." Her gaze returns to Rowan. "Is your... guardian staying for this discussion?"

Rowan's jaw tightens. You sense immediate friction between these two - tradition versus freedom, nobility versus wildness. How you handle this first meeting will set the tone for their future interactions.`
		},
		{
			conditions: {
				hasHiddenAttributes: { companions_priority: true }
			},
			text: `Marcus leads you to a safe house. Vale, if present, whispers: "Seraphine Ashford. Loyalist leader's granddaughter. Brilliant mind, traditional values, genuinely believes in your right to rule."

Lady Seraphine rises with noble grace. Her eyes widen slightly seeing your adventuring companions in such an intimate political meeting. 

"Your Highness," she says carefully, "I... did not expect you would bring your traveling companions to such sensitive discussions." There's no judgment in her voice, only surprise and recalibration. "Though perhaps that speaks well of your loyalty to friends. A rare quality in nobility."`
		}
	],
	choices: [
		{
			id: 'formal',
			text: 'Respond with formal respect - match her nobility',
			next: 'kingdom_briefing',
			effects: { charisma: 3 },
			hiddenEffects: {
				seraphine_trust: 15,
				seraphine_first_impression: 'proper_noble',
				rowan_bond: -2,
				formal_personality: true
			}
		},
		{
			id: 'casual',
			text: 'Be casual and authentic - you\'re still figuring this out',
			next: 'kingdom_briefing',
			effects: { charisma: 2 },
			hiddenEffects: {
				seraphine_trust: 5,
				seraphine_first_impression: 'authentic_untrained',
				rowan_bond: 8,
				authentic_personality: true,
				seraphine_intrigued: true
			}
		},
		{
			id: 'balance',
			text: 'Try to balance formality and authenticity',
			next: 'kingdom_briefing',
			effects: { charisma: 4, wisdom: 2 },
			hiddenEffects: {
				seraphine_trust: 10,
				seraphine_first_impression: 'diplomatic_adaptable',
				rowan_bond: 5,
				social_adaptability: true,
				seraphine_impressed: true
			}
		},
		{
			id: 'business',
			text: 'Focus on business - skip pleasantries, discuss kingdom',
			next: 'kingdom_briefing',
			effects: { wisdom: 3 },
			hiddenEffects: {
				seraphine_trust: 12,
				seraphine_first_impression: 'serious_focused',
				rowan_bond: 3,
				pragmatic_leader: true,
				seraphine_respects_efficiency: true
			}
		}
	]
};

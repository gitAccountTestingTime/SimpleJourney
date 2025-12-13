import { Scene } from '../../story-manager';

const safehouseArrival = `Marcus leads you to a safe house in the nearby town - a nondescript building that conceals a well-furnished interior. "There's someone who's been waiting to meet you," he says.`;

const seraphineDescription = `Lady Seraphine Ashford rises from a chair, every movement graceful and controlled. Up close, she's striking - dark hair perfectly styled, sharp intelligent eyes, formal noble attire that somehow makes everyone else feel underdressed. She's younger than you expected, perhaps late twenties, but carries herself with absolute certainty.`;

const seraphineGreeting = `"Your Highness," she says, curtseying with perfect form. "I represent the Loyalist faction. We have waited twenty years for this moment - for your return."`;

const seraphineOffer = `"We have much to discuss," Seraphine continues, "about your responsibilities, your heritage, and the kingdom's future. But first, let me say this: you are not alone. We stand ready to support you in reclaiming your birthright."`;

export const SeraphineIntroduction: Scene = {
	id: 'seraphine_introduction',
	text: `${safehouseArrival}

${seraphineDescription}

${seraphineGreeting}

Rowan shifts uncomfortably beside you, clearly ill at ease with such formality. The contrast between the free-spirited ranger and the polished noble is stark.

${seraphineOffer}`,
	textVariants: [
		{
			conditions: { hasFlags: ['trust_in_marcus:true', 'marcus_loyalty:100'] },
			text: `${safehouseArrival}

Your trust in Marcus has been rewarded - this safe house is secure, well-stocked, clearly maintained by someone with resources and loyalty.

${seraphineDescription}

She glances at Marcus with approval. "You found them. After all these years." There's deep respect between these two.

${seraphineGreeting}

${seraphineOffer}`
		},
		{
			conditions: { hasFlags: ['skepticism_level:high', 'marcus_must_prove_himself:true'] },
			text: `${safehouseArrival}

You're still wary of Marcus, still questioning his motives. This "safe house" could be anything.

${seraphineDescription}

She reads your tension immediately. "Marcus told me you're cautious. Good. Blind trust is what destroyed your family." Her bluntness is surprising. "I am Lady Seraphine Ashford, and I will earn your trust, not demand it."

${seraphineOffer} "But know that I mean every word."`
		},
		{
			conditions: { hasFlags: ['rowan_trusts_marcus:true', 'values_counsel:true'] },
			text: `${safehouseArrival}

Rowan's endorsement of Marcus gave you confidence. Your guardian's judgment has proven sound.

${seraphineDescription}

${seraphineGreeting}

Rowan relaxes slightly when they see Seraphine. "My lady. Still fighting for the old ways?" There's no malice in the question.

Seraphine smiles slightly. "And you're still protecting the Thornheart bloodline grows. Some traditions matter, Rowan."

${seraphineOffer}`
		},
		{
			conditions: {
				hasHiddenAttributes: { rowan_bond: 15 }
			},
			text: `${safehouseArrival} Rowan mutters, "I hate these political meetings," but stays close, protective.

${seraphineDescription} Her eyes flick over Rowan with barely concealed distaste - the wilderness ranger clearly offends her sense of propriety.

${seraphineGreeting} Her gaze returns to Rowan. "Is your... guardian staying for this discussion?"

Rowan's jaw tightens. You sense immediate friction between these two - tradition versus freedom, nobility versus wildness. How you handle this first meeting will set the tone for their future interactions.`
		},
		{
			conditions: {
				hasHiddenAttributes: { companions_priority: true }
			},
			text: `${safehouseArrival} Vale, if present, whispers: "Seraphine Ashford. Loyalist leader's granddaughter. Brilliant mind, traditional values, genuinely believes in your right to rule."

${seraphineDescription} Her eyes widen slightly seeing your adventuring companions in such an intimate political meeting. 

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
			next: 'seraphine_bonding_1',
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
			next: 'seraphine_bonding_1',
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

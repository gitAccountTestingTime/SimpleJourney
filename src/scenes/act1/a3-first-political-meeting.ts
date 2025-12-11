import { Scene } from '../../story-manager';

export const FirstPoliticalMeeting: Scene = {
	id: 'first_political_meeting',
	text: `Agent Thorne has arranged a meeting at the manor - representatives from all three factions wish to meet the returned heir. You stand in the formal dining room, feeling the weight of expectation.

Lady Seraphine Ashford represents the Loyalists - composed, elegant, every inch a noble. Lord Marcus Pembroke speaks for the Reformists - older, dignified, watching you with calculating interest. General Victor Blackwood commands the Military faction - imposing, scarred, radiating controlled power.

Behind you, Rowan stands as official guardian. But your prologue companions are here too - Vale, Ash, Rook, and possibly Whisper. Their presence in this formal setting is a statement about who you choose to be.

Seraphine speaks first: "Your Highness, we have waited twenty years for this moment. The question now is: what kind of ruler will you become?"`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { vale_trust: 20 }
			},
			text: `Agent Thorne has arranged a meeting at the manor. As the faction representatives assemble, Vale leans close and whispers intelligence in your ear.

"Seraphine is genuine but bound by tradition. Pembroke is idealistic but politically naive. Blackwood is dangerous - notice how his nephew Kieran stands behind him, conflicted."

The briefing gives you confidence as you face them. Vale's presence reminds you that you don't face this alone.

Seraphine speaks first: "Your Highness, we have waited twenty years. The question is: what kind of ruler will you become?" Her eyes flick to Vale briefly - does she recognize the Reformist spy?`
		}
	],
	choices: [
		{
			id: 'bring-companions',
			text: 'Invite your companions to stand with you during the meeting',
			next: 'ancestral_spirit',
			effects: { courage: 3, charisma: 2 },
			hiddenEffects: {
				first_impression_factions: 'informal_loyal',
				companions_at_meeting: true,
				loyalist_rep: -5,
				reformist_rep: 10,
				military_rep: 5,
				vale_trust: 5,
				ash_trust: 5,
				rook_trust: 5
			}
		},
		{
			id: 'meet-alone',
			text: 'Face them alone - this is your responsibility to bear',
			next: 'ancestral_spirit',
			effects: { courage: 4 },
			hiddenEffects: {
				first_impression_factions: 'traditional_serious',
				met_factions_alone: true,
				loyalist_rep: 10,
				reformist_rep: -5,
				military_rep: 8,
				ash_trust: -3
			}
		},
		{
			id: 'rowan-only',
			text: 'Keep only Rowan present as appropriate guardian',
			next: 'ancestral_spirit',
			effects: { wisdom: 3 },
			hiddenEffects: {
				first_impression_factions: 'balanced_appropriate',
				rowan_at_meeting: true,
				loyalist_rep: 5,
				reformist_rep: 3,
				military_rep: 5,
				rowan_bond: 10
			}
		},
		{
			id: 'vale-advice',
			text: 'Quietly ask Vale to read the room and advise you',
			next: 'ancestral_spirit',
			effects: { wisdom: 4, charisma: 2 },
			hiddenEffects: {
				first_impression_factions: 'strategic_advised',
				vale_advising: true,
				vale_role_established: 'advisor',
				loyalist_rep: 3,
				reformist_rep: 8,
				military_rep: 2,
				vale_trust: 10,
				seraphine_noticed_vale: true
			}
		}
	]
};

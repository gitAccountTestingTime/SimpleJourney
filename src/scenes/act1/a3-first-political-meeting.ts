import { Scene } from '../../story-manager';

const meetingSetup = `Agent Thorne has arranged a meeting at the manor - representatives from all three factions wish to meet the returned heir. You stand in the formal dining room, feeling the weight of expectation.`;

const factionRepresentatives = `Lady Seraphine Ashford represents the Loyalists - composed, elegant, every inch a noble. Lord Marcus Pembroke speaks for the Reformists - older, dignified, watching you with calculating interest. General Victor Blackwood commands the Military faction - imposing, scarred, radiating controlled power.`;

const seraphineOpening = `Seraphine speaks first: "Your Highness, we have waited twenty years for this moment. The question now is: what kind of ruler will you become?"`;

const rowanGuardian = `Behind you, Rowan stands as official guardian. But your prologue companions are here too - Vale, Ash, Rook, and possibly Whisper. Their presence in this formal setting is a statement about who you choose to be.`;

const companionsNoticed = `The faction representatives notice this arrangement immediately. You've made a statement: your loyalty to friends won't change with your title.`;

export const FirstPoliticalMeeting: Scene = {
	id: 'first_political_meeting',
	text: `${meetingSetup}

${factionRepresentatives}

${rowanGuardian}

${seraphineOpening}`,
	textVariants: [
		{
			conditions: { hasFlags: ['rowan_bond:12', 'companions_integrated:true'] },
			text: `${meetingSetup}

${factionRepresentatives}

Rowan stands beside you, but not behind - you made it clear your guardian is part of your inner circle. Your other companions from the prologue are integrated seamlessly, each bringing different perspectives.

${companionsNoticed}

${seraphineOpening} Her eyes note the unconventional arrangement with interest.`
		},
		{
			conditions: { hasFlags: ['rowan_respects_independence:true', 'independent_streak:true'] },
			text: `${meetingSetup}

${factionRepresentatives}

Rowan stands at a respectful distance - you questioned whether you needed protection, and they respected that independence. You face the faction leaders on your own terms.

The representatives see someone who won't be easily controlled. Good.

${seraphineOpening} There's approval in her eyes for your self-assured stance.`
		},
		{
			conditions: { hasFlags: ['rowan_shares_past:true', 'cultural_curiosity:true'] },
			text: `${meetingSetup}

Rowan stands as your guardian, and your earlier conversation about their heritage has created a bond. They're not just protection - they're an advisor on matters of magic and nature.

The faction representatives note the easy rapport between you and your half-elf guardian. You're building bridges, not walls.

${seraphineOpening}`
		},
		{
			conditions: {
				hasHiddenAttributes: { vale_trust: 20 }
			},
			text: `${meetingSetup}

Behind you, Rowan stands as official guardian. But your prologue companions are here too, and Vale leans close to whisper intelligence in your ear.

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

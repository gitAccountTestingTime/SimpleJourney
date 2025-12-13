import { Scene } from '../../story-manager';

const decisionMoment = `Back in the capital, the moment of decision arrives. Representatives from all three factions have made their cases. Each offers support, but each demands loyalty in return.`;

const loyalistOption = `**The Loyalists** (Lady Ashford): Traditional restoration, full royal authority, ancient customs honored. Seraphine watches hopefully.`;

const reformistOption = `**The Reformists** (Council Member Dane): Constitutional monarchy, shared power, democratic reforms. Sage's eyes shine with idealistic fervor.`;

const militaryOption = `**The Military** (General Blackwood): Order through strength, strategic consolidation, security first. Captain Kieran stands at attention, but you notice his jaw is tight.`;

const invitationsLaid = `Marcus lays out three formal invitations on the table before you:

${loyalistOption}

${reformistOption}

${militaryOption}`;

const alternativePath = `"Or," Rowan adds quietly, "you could reject them all and forge your own path. Visit the magical races directly, build your own coalition."`;

const companionInput = `Your companions all have opinions. Vale whispers intelligence about each faction's strengths and weaknesses. Ash warns about military complications. Lyra observes with elven patience, waiting to see what kind of leader you'll become.`;

const choiceDefinesRule = `This choice will define your rule - and your story.`;

export const FactionChoicePoint: Scene = {
	id: 'faction_choice_point',
	text: `${decisionMoment}

${invitationsLaid}

${alternativePath}

${companionInput}

${choiceDefinesRule}`,
	textVariants: [
		{
			conditions: { hasFlags: ['humble:true', 'cultural_humility:true'], hasHiddenAttributes: { lyra_respect: 15 } },
			text: `${decisionMoment}

Your humble approach with Lyra has earned deep respect. She pulls you aside before the meeting. "You showed wisdom in Moonwhisper Grove. Remember that wisdom now. The factions will try to claim you - but you belong to the realm, not to their ambitions."

${invitationsLaid}

Lyra's eyes communicate support, but also warning. Your respect for other cultures must guide this choice.

${alternativePath}

${companionInput}`
		},
		{
			conditions: { hasFlags: ['assert:true', 'prideful_mistake:true'], hasHiddenAttributes: { lyra_respect: -5 } },
			text: `${decisionMoment}

Your assertion of authority with Lyra has created tension. She stands apart from your group, observing coldly. The elves' support is now in question.

${invitationsLaid}

${alternativePath}

${companionInput}

But you notice Lyra's distance. Your pride may have cost you the magical races' trust.`
		},
		{
			conditions: { hasFlags: ['ask-crystal:true', 'serious_purpose:true', 'lyra_sees_dedication:true'] },
			text: `${decisionMoment}

Lyra's respect for your focus on the Crystal Heart is evident. "You understand the true stakes," she says. "Choose the path that serves the realm's survival, not political convenience."

${invitationsLaid}

${alternativePath}

Lyra stands with Rowan, both watching you with confidence. Your dedication to the Crystal Heart mission has earned their trust.

${companionInput}`
		},
		{
			conditions: { hasFlags: ['rowan-help:true', 'team_approach:true', 'cultural_awareness:true'] },
			text: `${decisionMoment}

Your collaboration with Rowan to bridge cultures has impressed everyone. Rowan stands close, ready to advise.

${invitationsLaid}

${alternativePath}

Rowan meets your eyes with deep trust. "Whatever you choose, I'm with you. But remember - you don't have to pick their boxes. We can forge something new together."

${companionInput}`
		},
		{
			conditions: { hasHiddenAttributes: { vale_trust: 25 } },
			text: `Vale pulls you aside before the meeting. "I need to tell you something," they say seriously. "I'm a Reformist spy. I have been from the beginning."

They meet your eyes. "But I'm also your friend - your companion. That wasn't an act." Their voice drops. "The Reformists want me to convince you to support democracy. And honestly? I think it's the right choice for the kingdom. But I won't manipulate you."

They squeeze your hand. "Whatever you choose, I'm with you. But I needed you to know the truth first."

The revelation adds weight to the decision ahead.`
		}
	],
	choices: [
		{
			id: 'loyalists',
			text: 'Pledge to the Loyalists - embrace traditional rule',
			next: 'loyalist_path_start',
			effects: { courage: 3, charisma: 3 },
			hiddenEffects: {
				faction_choice: 'loyalist',
				loyalist_rep: 50,
				reformist_rep: -20,
				military_rep: 10,
				seraphine_trust: 25,
				sage_affection: -15,
				traditional_ruler: true
			}
		},
		{
			id: 'reformists',
			text: 'Support the Reformists - embrace progressive change',
			next: 'reformist_path_start',
			effects: { wisdom: 4, charisma: 3 },
			hiddenEffects: {
				faction_choice: 'reformist',
				loyalist_rep: -15,
				reformist_rep: 50,
				military_rep: -10,
				seraphine_trust: -10,
				sage_affection: 30,
				vale_trust: 20,
				progressive_ruler: true
			}
		},
		{
			id: 'military',
			text: 'Ally with the Military - embrace pragmatic strength',
			next: 'military_path_start',
			effects: { courage: 4, wisdom: 2 },
			hiddenEffects: {
				faction_choice: 'military',
				loyalist_rep: 10,
				reformist_rep: -25,
				military_rep: 50,
				kieran_loyalty: 20,
				sage_affection: -20,
				pragmatic_ruler: true
			}
		},
		{
			id: 'independent',
			text: 'Reject all factions - forge your own path with magical races',
			next: 'independent_path_start',
			effects: { courage: 5, wisdom: 4 },
			hiddenEffects: {
				faction_choice: 'independent',
				loyalist_rep: -10,
				reformist_rep: -10,
				military_rep: -15,
				rowan_bond: 20,
				lyra_respect: 20,
				independent_ruler: true,
				chosen_own_path: true
			}
		}
	]
};

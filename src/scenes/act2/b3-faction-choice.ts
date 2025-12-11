import { Scene } from '../../story-manager';

export const FactionChoicePoint: Scene = {
	id: 'faction_choice_point',
	text: `Back in the capital, the moment of decision arrives. Representatives from all three factions have made their cases. Each offers support, but each demands loyalty in return.

Marcus lays out three formal invitations on the table before you:

**The Loyalists** (Lady Ashford): Traditional restoration, full royal authority, ancient customs honored. Seraphine watches hopefully.

**The Reformists** (Council Member Dane): Constitutional monarchy, shared power, democratic reforms. Sage's eyes shine with idealistic fervor.

**The Military** (General Blackwood): Order through strength, strategic consolidation, security first. Captain Kieran stands at attention, but you notice his jaw is tight.

"Or," Rowan adds quietly, "you could reject them all and forge your own path. Visit the magical races directly, build your own coalition."

Your companions all have opinions. Vale whispers intelligence about each faction's strengths and weaknesses. Ash warns about military complications. Lyra observes with elven patience, waiting to see what kind of leader you'll become.

This choice will define your rule - and your story.`,
	textVariants: [
		{
			conditions: {
				hasHiddenAttributes: { vale_trust: 25 }
			},
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

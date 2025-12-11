/**
 * Mysterious Stranger Scene
 * 
 * A demonstration scene showing hidden attributes in action.
 * This scene tracks player personality traits invisibly and uses them
 * to provide different experiences.
 */

import { Scene } from '../../story-manager';
import { hiddenAttrEquals, getHiddenAttribute } from '../../scene-helpers';

export const MysteriousStrangerScene: Scene = {
	id: 'mysterious_stranger',
	text: 'A hooded figure approaches you in the town square. "I have a proposition for you," they say, their voice barely above a whisper.',
	choices: [
		{
			id: 'ask-details',
			text: 'Ask for more details',
			next: 'mysterious_stranger_details',
			hiddenEffects: {
				'player_curiosity_trait': 'high',
				'cautious_approach_count': 1
			},
			effects: { curiosity: 1 }
		},
		{
			id: 'accept-immediately',
			text: 'Accept immediately without questions',
			next: 'mysterious_stranger_accepted',
			hiddenEffects: {
				'risk_taker_trait': 'high',
				'impulsive_decision_count': 1
			},
			effects: { courage: 2 }
		},
		{
			id: 'decline',
			text: 'Politely decline and walk away',
			next: 'start',
			hiddenEffects: {
				'cautious_approach_count': 1,
				'declined_mysterious_offers': true
			},
			effects: { wisdom: 1 }
		}
	]
};

export const MysteriousStrangerDetailsScene: Scene = {
	id: 'mysterious_stranger_details',
	text: 'The stranger explains they need someone to retrieve a package from the old warehouse district. "It\'s not entirely... legal," they admit. "But the pay is excellent."',
	choices: [
		{
			id: 'agree-to-job',
			text: 'Agree to take the job',
			next: 'start',
			hiddenEffects: {
				'accepted_shady_work': true,
				'stranger_trust_level': 10
			},
			effects: { wealth: 25, reputation: -2 }
		},
		{
			id: 'decline-now',
			text: 'Decline after hearing the details',
			next: 'start',
			hiddenEffects: {
				'declined_after_details': true,
				'cautious_approach_count': 1
			},
			effects: { wisdom: 2 }
		}
	]
};

export const MysteriousStrangerAcceptedScene: Scene = {
	id: 'mysterious_stranger_accepted',
	text: 'The stranger seems surprised by your immediate acceptance.',
	textVariants: [
		{
			text: 'The stranger seems surprised but pleased. "Bold," they say with admiration. "I like working with people who aren\'t afraid to take risks. Here\'s what I need you to do..."',
			conditions: {
				custom: () => {
					const impulsive = getHiddenAttribute('impulsive_decision_count') as number || 0;
					return impulsive >= 1;
				}
			}
		}
	],
	choices: [
		{
			id: 'continue',
			text: 'Listen to the job details',
			next: 'start',
			hiddenEffects: {
				'accepted_shady_work': true,
				'stranger_trust_level': 15
			},
			effects: { wealth: 30, reputation: -3, courage: 1 }
		}
	]
};

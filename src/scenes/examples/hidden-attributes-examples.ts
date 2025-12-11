/**
 * Hidden Attributes Examples
 * 
 * These example scenes demonstrate how to use hidden attributes for:
 * - Tracking player behavior patterns without showing them
 * - Creating branching narratives based on hidden state
 * - Building complex reputation/alignment systems
 * - Implementing "memory" or consequence systems
 */

import { Scene } from '../../story-manager';
import { hiddenAttrEquals, hiddenAttrExists, getHiddenAttribute } from '../../scene-helpers';

/**
 * Example 1: Basic Hidden Attribute Setting
 * Sets a hidden attribute when the player makes a choice
 */
export const ExampleHiddenBasic: Scene = {
	id: 'example-hidden-basic',
	text: 'A merchant offers you a deal that seems too good to be true.',
	choices: [
		{
			id: 'accept-deal',
			text: 'Accept the deal',
			next: 'example-hidden-check',
			// Set a hidden attribute tracking that the player is willing to take risks
			hiddenEffects: {
				'merchant_deal_accepted': true,
				'risk_tolerance': 5
			},
			effects: { wealth: 10 }
		},
		{
			id: 'decline-deal',
			text: 'Decline politely',
			next: 'example-hidden-check',
			// Track cautious behavior
			hiddenEffects: {
				'merchant_deal_accepted': false,
				'cautious_count': 1
			},
			effects: { wisdom: 2 }
		}
	]
};

/**
 * Example 2: Using Hidden Attributes in Conditions
 * Scene text and choices change based on hidden attributes
 */
export const ExampleHiddenCheck: Scene = {
	id: 'example-hidden-check',
	text: 'You continue your journey.',
	textVariants: [
		{
			text: 'The merchant watches you go, a knowing smile on his face. Others will hear of your willingness to take risks.',
			conditions: {
				hasHiddenAttributes: { 'merchant_deal_accepted': true }
			}
		},
		{
			text: 'The merchant shrugs and moves on. Your caution has been noted by those watching.',
			conditions: {
				hasHiddenAttributes: { 'merchant_deal_accepted': false }
			}
		}
	],
	choices: [
		{
			id: 'continue',
			text: 'Continue',
			next: 'start'
		}
	]
};

/**
 * Example 3: Multiple Hidden Attributes for Alignment System
 * Tracks player's moral choices without displaying an alignment meter
 */
export const ExampleHiddenAlignment: Scene = {
	id: 'example-hidden-alignment',
	text: 'You witness a guard harassing a beggar in the street.',
	choices: [
		{
			id: 'help-beggar',
			text: 'Intervene on behalf of the beggar',
			next: 'example-hidden-alignment-result',
			hiddenEffects: {
				'compassion_score': 10,
				'authority_defiance': 5,
				'helped_beggar': true
			},
			effects: { courage: 1, empathy: 2 }
		},
		{
			id: 'side-guard',
			text: 'Side with the guard',
			next: 'example-hidden-alignment-result',
			hiddenEffects: {
				'compassion_score': -5,
				'authority_respect': 10,
				'helped_beggar': false
			},
			effects: { reputation: 1 }
		},
		{
			id: 'ignore',
			text: 'Walk away and ignore it',
			next: 'example-hidden-alignment-result',
			hiddenEffects: {
				'apathy_score': 5,
				'neutral_count': 1
			}
		}
	]
};

/**
 * Example 4: Conditional Outcomes Based on Hidden Attributes
 * Different outcomes happen based on accumulated hidden values
 */
export const ExampleHiddenAlignmentResult: Scene = {
	id: 'example-hidden-alignment-result',
	text: 'Later that day...',
	choices: [
		{
			id: 'encounter',
			text: 'Continue',
			outcomes: [
				{
					// If player has helped the beggar, they get assistance
					conditions: {
						hasHiddenAttributes: { 'helped_beggar': true }
					},
					next: 'start',
					effects: { reputation: 5 }
				},
				{
					// If player sided with authority, they get official recognition
					conditions: {
						hasHiddenAttributes: { 'helped_beggar': false }
					},
					next: 'start',
					effects: { reputation: 3, wealth: 5 }
				},
				{
					// Neutral path - no special outcome
					next: 'start'
				}
			]
		}
	]
};

/**
 * Example 5: Incremental Hidden Counters
 * Track how many times player has done something
 */
export const ExampleHiddenCounter: Scene = {
	id: 'example-hidden-counter',
	text: 'You find a locked chest in the ruins.',
	choices: [
		{
			id: 'pick-lock',
			text: 'Try to pick the lock',
			next: 'example-hidden-counter-result',
			outcomes: [
				{
					// On first attempt, succeed easily
					conditions: {
						custom: () => !getHiddenAttribute('lockpick_attempts')
					},
					next: 'example-hidden-counter-result',
					hiddenEffects: {
						'lockpick_attempts': 1,
						'lockpick_skill': 5
					},
					effects: { wealth: 10 }
				},
				{
					// Subsequent attempts are harder but build skill
					next: 'example-hidden-counter-result',
					hiddenEffects: {
						'lockpick_attempts': 2,
						'lockpick_skill': 10
					},
					effects: { wealth: 5 }
				}
			]
		},
		{
			id: 'force-open',
			text: 'Force it open',
			next: 'example-hidden-counter-result',
			hiddenEffects: {
				'brute_force_count': 1,
				'subtle_approach': false
			},
			effects: { strength: 1, wealth: 5 }
		}
	]
};

export const ExampleHiddenCounterResult: Scene = {
	id: 'example-hidden-counter-result',
	text: 'You successfully open the chest.',
	textVariants: [
		{
			text: 'Your practiced hands make quick work of the lock. You\'re becoming quite skilled at this.',
			conditions: {
				custom: () => {
					const skill = getHiddenAttribute('lockpick_skill');
					return typeof skill === 'number' && skill >= 10;
				}
			}
		},
		{
			text: 'The lock yields to your novice attempts. With practice, you could become quite good.',
			conditions: {
				custom: () => {
					const skill = getHiddenAttribute('lockpick_skill');
					return typeof skill === 'number' && skill > 0 && skill < 10;
				}
			}
		}
	],
	choices: [
		{
			id: 'continue',
			text: 'Continue exploring',
			next: 'start'
		}
	]
};

/**
 * Example 6: Hidden Reputation with Multiple Factions
 * Track reputation with different groups without showing it
 */
export const ExampleHiddenFactions: Scene = {
	id: 'example-hidden-factions',
	text: 'A conflict breaks out between the Merchants\' Guild and the Thieves\' Guild.',
	choices: [
		{
			id: 'side-merchants',
			text: 'Help the Merchants\' Guild',
			next: 'example-hidden-factions-result',
			hiddenEffects: {
				'merchant_guild_rep': 20,
				'thieves_guild_rep': -10,
				'last_faction_helped': 'merchants'
			},
			effects: { wealth: 10, reputation: 5 }
		},
		{
			id: 'side-thieves',
			text: 'Help the Thieves\' Guild',
			next: 'example-hidden-factions-result',
			hiddenEffects: {
				'merchant_guild_rep': -10,
				'thieves_guild_rep': 20,
				'last_faction_helped': 'thieves'
			},
			effects: { courage: 5 }
		},
		{
			id: 'stay-neutral',
			text: 'Remain neutral',
			next: 'example-hidden-factions-result',
			hiddenEffects: {
				'neutral_stance_count': 1,
				'last_faction_helped': 'none'
			}
		}
	]
};

export const ExampleHiddenFactionsResult: Scene = {
	id: 'example-hidden-factions-result',
	text: 'The conflict subsides.',
	textVariants: [
		{
			text: 'The merchants nod at you with respect. The thieves watch from the shadows with narrowed eyes.',
			conditions: {
				hasHiddenAttributes: { 'last_faction_helped': 'merchants' }
			}
		},
		{
			text: 'The thieves give you a subtle signal of approval. The merchants regard you with suspicion.',
			conditions: {
				hasHiddenAttributes: { 'last_faction_helped': 'thieves' }
			}
		},
		{
			text: 'Both sides regard you with uncertainty. Your neutrality is noted by all.',
			conditions: {
				hasHiddenAttributes: { 'last_faction_helped': 'none' }
			}
		}
	],
	choices: [
		{
			id: 'continue',
			text: 'Continue',
			next: 'start'
		}
	]
};

/**
 * Example 7: Complex Hidden State with Custom Conditions
 * Uses custom functions to check multiple hidden attributes
 */
export const ExampleHiddenComplex: Scene = {
	id: 'example-hidden-complex',
	text: 'A mysterious figure approaches you in a dark alley.',
	textVariants: [
		{
			text: 'A mysterious figure approaches. "I\'ve heard about you," they say with a knowing smile. "You have a reputation for taking risks and getting things done."',
			conditions: {
				custom: () => {
					const riskTolerance = getHiddenAttribute('risk_tolerance');
					const lockpickSkill = getHiddenAttribute('lockpick_skill');
					return (typeof riskTolerance === 'number' && riskTolerance >= 5) ||
					       (typeof lockpickSkill === 'number' && lockpickSkill >= 10);
				}
			}
		},
		{
			text: 'A mysterious figure approaches. "You seem... cautious," they observe. "Perhaps too cautious for what I have in mind."',
			conditions: {
				custom: () => {
					const cautious = getHiddenAttribute('cautious_count');
					const neutral = getHiddenAttribute('neutral_count');
					return (typeof cautious === 'number' && cautious > 0) ||
					       (typeof neutral === 'number' && neutral > 2);
				}
			}
		}
	],
	choices: [
		{
			id: 'listen',
			text: 'Listen to their offer',
			next: 'start',
			outcomes: [
				{
					// High-risk players get better offers
					conditions: {
						custom: () => {
							const risk = getHiddenAttribute('risk_tolerance');
							return typeof risk === 'number' && risk >= 5;
						}
					},
					effects: { wealth: 50 },
					hiddenEffects: {
						'mysterious_contact': true,
						'reputation_underground': 10
					}
				},
				{
					// Standard offer for others
					effects: { wealth: 20 },
					hiddenEffects: {
						'mysterious_contact': true
					}
				}
			]
		},
		{
			id: 'decline',
			text: 'Politely decline',
			next: 'start',
			hiddenEffects: {
				'mysterious_contact': false,
				'cautious_count': 1
			}
		}
	]
};

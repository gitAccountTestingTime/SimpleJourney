/**
 * Example: Previous Scene Usage Patterns
 * 
 * This file demonstrates various ways to use previous scene tracking
 * in your story scenes, including edge case handling.
 */

import { Scene } from '../../story-manager';
import { 
	cameFrom, 
	cameFromAny, 
	isFirstScene, 
	fromScene, 
	fromAnyScene,
	getPreviousSceneId 
} from '../../scene-helpers';

/**
 * Example 1: Basic previous scene checking in textVariants
 */
export const ExampleBasicPreviousScene: Scene = {
	id: 'example-basic',
	text: 'A default description when previous scene is unknown or irrelevant.',
	textVariants: [
		{
			text: 'You arrive from the forest, leaves still clinging to your cloak.',
			conditions: { custom: fromScene('forest') }
		},
		{
			text: 'Coming from the bustling village, the quiet here is striking.',
			conditions: { custom: fromScene('village') }
		}
	],
	choices: [
		{ id: 'continue', text: 'Continue', next: 'forest' }
	]
};

/**
 * Example 2: Handling the "no previous scene" edge case (start of journey)
 */
export const ExampleFirstScene: Scene = {
	id: 'example-first',
	text: 'You are somewhere, with no memory of how you got here.',
	textVariants: [
		{
			// This variant will ONLY show if there's no previous scene
			text: 'You awaken with no memory of how you arrived. This is the beginning of your journey.',
			conditions: { custom: isFirstScene }
		},
		{
			// This shows if there IS a previous scene (any scene)
			text: 'Continuing your journey, you find yourself in familiar territory.',
			conditions: { custom: () => !isFirstScene() }
		}
	],
	choices: [
		{ id: 'begin', text: 'Begin the journey', next: 'start' }
	]
};

/**
 * Example 3: Checking multiple possible previous scenes
 */
export const ExampleMultipleSources: Scene = {
	id: 'example-multiple',
	text: 'A crossroads.',
	textVariants: [
		{
			// Special text if coming from ANY water-related scene
			text: 'Still feeling the rhythm of the waves, you stand at a crossroads.',
			conditions: { custom: fromAnyScene(['sea', 'boat', 'boat_luxury']) }
		},
		{
			// Special text if coming from ANY exploration scene
			text: 'Your recent adventures have led you back to this crossroads.',
			conditions: { custom: fromAnyScene(['forest', 'cabin', 'treasure']) }
		}
	],
	choices: [
		{ id: 'go-forward', text: 'Press on', next: 'village' }
	]
};

/**
 * Example 4: Complex condition combining previous scene with other checks
 */
export const ExampleComplexCondition: Scene = {
	id: 'example-complex',
	text: 'The merchant eyes you suspiciously.',
	textVariants: [
		{
			// Came from tavern AND have high reputation
			text: 'The merchant recognizes you from the tavern and waves warmly. "Back so soon?"',
			conditions: { 
				stats: { reputation: { min: 5 } },
				custom: fromScene('tavern')
			}
		},
		{
			// Came from tavern but LOW reputation
			text: 'The merchant saw you at the tavern and keeps a hand on their coin purse.',
			conditions: { 
				stats: { reputation: { max: 0 } },
				custom: fromScene('tavern')
			}
		}
	],
	choices: [
		{ id: 'trade', text: 'Attempt to trade', next: 'market' }
	]
};

/**
 * Example 5: Using previous scene in choice outcomes
 */
export const ExampleChoiceOutcomes: Scene = {
	id: 'example-outcomes',
	text: 'You find a mysterious door.',
	choices: [
		{
			id: 'open-door',
			text: 'Open the door',
			outcomes: [
				{
					// If you came from the shrine, you get a bonus
					conditions: { custom: fromScene('shrine') },
					next: 'treasure',
					effects: { wisdom: 2, wealth: 10 }
				},
				{
					// Otherwise, normal outcome
					next: 'cabin',
					effects: { curiosity: 1 }
				}
			]
		}
	]
};

/**
 * Example 6: Advanced - accessing previous scene for complex logic
 */
export const ExampleAdvanced: Scene = {
	id: 'example-advanced',
	text: 'A mysterious figure approaches.',
	textVariants: [
		{
			text: 'The figure nods knowingly. They seem to have been tracking your movements.',
			conditions: { 
				custom: () => {
					// You can use getPreviousSceneId directly for more complex logic
					const prev = getPreviousSceneId();
					
					// Edge case: handle null (no previous scene)
					if (prev === null) {
						return false; // Don't show this variant at journey start
					}
					
					// Complex logic: show if previous scene ID starts with certain prefixes
					return prev.startsWith('forest') || prev.startsWith('quest');
				}
			}
		}
	],
	choices: [
		{ id: 'greet', text: 'Greet the figure', next: 'village' }
	]
};

/**
 * Example 7: Preventing backtracking to prevent loops
 */
export const ExamplePreventBacktrack: Scene = {
	id: 'example-backtrack',
	text: 'A narrow passage.',
	choices: [
		{
			id: 'go-forward',
			text: 'Continue forward',
			next: 'forest'
		},
		{
			id: 'go-back',
			text: 'Try to go back',
			outcomes: [
				{
					// If there's no previous scene, can't go back
					conditions: { custom: isFirstScene },
					next: 'example-backtrack', // Stay in same scene
					effects: { courage: -1 }
				},
				{
					// If came from a dangerous place, prevent backtrack
					conditions: { custom: fromAnyScene(['shrine', 'treasure']) },
					next: 'example-backtrack',
					effects: { health: -2 }
				},
				{
					// Normal backtrack (would need dynamic "previous" destination)
					next: 'start' // In real implementation, this would be dynamic
				}
			]
		}
	]
};

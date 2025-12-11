import { Scene } from '../../story-manager';
import { fromScene, isFirstScene } from '../../scene-helpers';

/**
 * CrossroadsScene - A scene that changes based on where you came from
 * 
 * This demonstrates how to use previousSceneId in custom conditions
 * to create dynamic scene text based on the player's journey path.
 */
export const CrossroadsScene: Scene = {
	id: 'crossroads',
	text: 'You stand at a crossroads. Paths lead in multiple directions.',
	textVariants: [
		// First time at crossroads (no previous scene)
		{
			text: 'You find yourself at a crossroads for the first time. The world seems full of possibilities. Paths lead in multiple directions.',
			conditions: { custom: isFirstScene }
		},
		// If coming from the forest, acknowledge the forest experience
		{
			text: 'Emerging from the dense forest, you reach a crossroads. The trees behind you rustle in the wind, as if bidding farewell. Paths lead in multiple directions.',
			conditions: { custom: fromScene('forest') }
		},
		// If coming from forest secret area
		{
			text: 'The hidden ruins behind you, you emerge at a crossroads. Your mind still wonders about what secrets remain undiscovered. Paths lead in multiple directions.',
			conditions: { custom: fromScene('forest_secret') }
		},
		// If coming from the sea, acknowledge the sea experience
		{
			text: 'Leaving the shore behind, you arrive at a crossroads. The sound of waves still echoes in your ears. Paths lead in multiple directions.',
			conditions: { custom: fromScene('sea') }
		},
		// If coming from a boat journey
		{
			text: 'Your sea voyage concluded, you stand at a crossroads. Salt air still clings to your clothes. Paths lead in multiple directions.',
			conditions: { custom: fromScene('boat') }
		},
		// If coming from the village, acknowledge the village
		{
			text: 'Walking from the village, you reach a familiar crossroads. The bustle of town life fades behind you. Paths lead in multiple directions.',
			conditions: { custom: fromScene('village') }
		}
	],
	choices: [
		{ 
			id: 'go-forest-from-crossroads', 
			text: 'Enter the forest', 
			next: 'forest',
			effects: { courage: 1 }
		},
		{ 
			id: 'go-sea-from-crossroads', 
			text: 'Head to the sea', 
			next: 'sea',
			effects: { curiosity: 1 }
		},
		{ 
			id: 'go-village-from-crossroads', 
			text: 'Return to the village', 
			next: 'village',
			effects: { reputation: 1 }
		}
	]
};

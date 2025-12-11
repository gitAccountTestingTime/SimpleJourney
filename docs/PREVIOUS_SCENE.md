# Previous Scene Tracking

## Overview

The story manager now tracks the previous scene the player came from, allowing authors to create dynamic scenes that respond to the player's journey path.

## Key Features

- **Previous Scene Tracking**: Automatically tracks which scene the player came from
- **Edge Case Handling**: Properly handles the start of the journey (no previous scene)
- **Persistence**: Previous scene is saved/restored with game progress
- **Helper Functions**: Convenient utilities for common previous-scene checks

## API Reference

### Core Functions (from `story-manager.ts`)

#### `getPreviousSceneId(): string | null`
Returns the ID of the previous scene, or `null` if there is no previous scene (e.g., at the start of the journey).

```typescript
const prevId = getPreviousSceneId();
if (prevId === null) {
    console.log('This is the start of the journey');
} else {
    console.log('Came from:', prevId);
}
```

#### `getPreviousScene(): Scene | null`
Returns the full previous scene object with resolved text variants, or `null` if there is no previous scene.

```typescript
const prevScene = getPreviousScene();
if (prevScene) {
    console.log('Previous scene text:', prevScene.text);
}
```

### Helper Functions (from `scene-helpers.ts`)

#### `cameFrom(sceneId: string): boolean`
Check if the player came from a specific scene.

```typescript
if (cameFrom('forest')) {
    // Player just came from the forest
}
```

#### `cameFromAny(sceneIds: string[]): boolean`
Check if the player came from any of the specified scenes.

```typescript
if (cameFromAny(['sea', 'boat', 'boat_luxury'])) {
    // Player came from any water-related scene
}
```

#### `isFirstScene(): boolean`
Check if this is the player's first scene (no previous scene exists).

```typescript
if (isFirstScene()) {
    // This is the start of the player's journey
}
```

#### `fromScene(sceneId: string): () => boolean`
Creates a custom condition function for use in `textVariants` or `outcomes`.

```typescript
textVariants: [
    {
        text: 'You emerge from the forest...',
        conditions: { custom: fromScene('forest') }
    }
]
```

#### `fromAnyScene(sceneIds: string[]): () => boolean`
Creates a custom condition function that checks multiple scenes.

```typescript
textVariants: [
    {
        text: 'Your water journey has ended...',
        conditions: { custom: fromAnyScene(['sea', 'boat']) }
    }
]
```

## Usage Examples

### Example 1: Basic Text Variant Based on Previous Scene

```typescript
export const MyScene: Scene = {
    id: 'my-scene',
    text: 'Default text when origin is unknown.',
    textVariants: [
        {
            text: 'Emerging from the forest, you see...',
            conditions: { custom: fromScene('forest') }
        },
        {
            text: 'Leaving the village behind, you find...',
            conditions: { custom: fromScene('village') }
        }
    ],
    choices: [...]
};
```

### Example 2: Handling "No Previous Scene" (Journey Start)

```typescript
export const IntroScene: Scene = {
    id: 'intro',
    text: 'You are somewhere.',
    textVariants: [
        {
            // Only shown at the very start
            text: 'You awaken with no memory. This is the beginning.',
            conditions: { custom: isFirstScene }
        },
        {
            // Shown when returning to this scene
            text: 'You return to this familiar place.',
            conditions: { custom: () => !isFirstScene() }
        }
    ],
    choices: [...]
};
```

### Example 3: Choice Outcomes Based on Previous Scene

```typescript
export const DoorScene: Scene = {
    id: 'door',
    text: 'You find a mysterious door.',
    choices: [
        {
            id: 'open-door',
            text: 'Open it',
            outcomes: [
                {
                    // Bonus if coming from shrine
                    conditions: { custom: fromScene('shrine') },
                    next: 'treasure',
                    effects: { wisdom: 2, wealth: 10 }
                },
                {
                    // Normal outcome
                    next: 'cabin',
                    effects: { curiosity: 1 }
                }
            ]
        }
    ]
};
```

### Example 4: Complex Condition Combining Stats and Previous Scene

```typescript
textVariants: [
    {
        text: 'The merchant recognizes you from the tavern and smiles.',
        conditions: { 
            stats: { reputation: { min: 5 } },
            custom: fromScene('tavern')
        }
    },
    {
        text: 'The merchant saw you drunk at the tavern and frowns.',
        conditions: { 
            stats: { reputation: { max: -2 } },
            custom: fromScene('tavern')
        }
    }
]
```

### Example 5: Advanced Logic with Multiple Checks

```typescript
textVariants: [
    {
        text: 'They tracked your forest activities...',
        conditions: {
            custom: () => {
                const prev = getPreviousSceneId();
                
                // Handle null case (no previous scene)
                if (prev === null) return false;
                
                // Check if previous scene starts with 'forest'
                return prev.startsWith('forest');
            }
        }
    }
]
```

## Edge Cases and Best Practices

### 1. Always Handle Null Previous Scene

At the start of the journey, `getPreviousSceneId()` returns `null`. Always check for this:

```typescript
const prev = getPreviousSceneId();
if (prev === null) {
    // Handle journey start
} else {
    // Handle normal navigation
}
```

The helper functions handle this automatically:
- `cameFrom()` returns `false` when previous is `null`
- `cameFromAny()` returns `false` when previous is `null`
- `isFirstScene()` returns `true` when previous is `null`

### 2. Use Helper Functions for Readability

Instead of:
```typescript
conditions: { 
    custom: () => {
        const prev = getPreviousSceneId();
        return prev === 'forest' || prev === 'cabin';
    }
}
```

Use:
```typescript
conditions: { custom: fromAnyScene(['forest', 'cabin']) }
```

### 3. Combining with Other Conditions

Previous scene checks work with all other condition types:

```typescript
conditions: {
    stats: { courage: { min: 5 } },
    hasFlags: ['helped-villager'],
    hasTitles: ['brave-soul'],
    custom: fromScene('forest')
}
```

All conditions must be true for the variant/outcome to match.

### 4. Order Matters in textVariants

Text variants are evaluated in order. Put more specific conditions first:

```typescript
textVariants: [
    // Most specific first
    {
        text: 'Coming from the secret forest glade...',
        conditions: { custom: fromScene('forest_secret') }
    },
    // More general
    {
        text: 'Coming from the forest...',
        conditions: { custom: fromScene('forest') }
    },
    // Default (no conditions)
    {
        text: 'You arrive...',
        // No conditions = fallback
    }
]
```

### 5. Preventing Infinite Loops

Be careful when allowing backtracking:

```typescript
{
    id: 'go-back',
    text: 'Go back',
    outcomes: [
        {
            // Prevent going back if no previous scene
            conditions: { custom: isFirstScene },
            next: 'current-scene', // Stay here
            effects: { courage: -1 }
        },
        // In production, you'd need to dynamically determine the "back" destination
    ]
}
```

## Implementation Details

### Storage

Previous scene is automatically saved/restored:
- Saved to localStorage with other game state
- Restored when player loads their game
- Reset to `null` when progress is reset

### Tracking

Previous scene is updated:
- Before navigating to a new scene in `choose()`
- Set to `null` at journey start in `initStory()`
- Set to `null` when resetting progress

### Scene Resolution

Previous scene is tracked **before** text variants are evaluated, so custom conditions can access it immediately.

## Testing Previous Scene Logic

To test previous scene conditions:

1. Navigate to scene A
2. Navigate to scene B
3. Scene B should now show text/choices based on coming from A

Example test flow:
```
start -> forest -> cabin
```
When in `cabin`, `getPreviousSceneId()` returns `'forest'`.

## See Also

- `src/scenes/exploration/crossroads.ts` - Full example scene
- `src/scenes/examples/previous-scene-examples.ts` - Comprehensive examples
- `src/scene-helpers.ts` - Helper function implementations

# Scenes Directory Structure

This directory organizes all story scenes into logical, themed groups to make large-scale authoring easier and improve readability.

## Quick Reference: Scene Flow

🔄 **Auto-generated scene flow documentation is available at [`docs/SCENE_FLOW.md`](../../docs/SCENE_FLOW.md)**

After adding or modifying scenes, regenerate the flow documentation by running:
```bash
node src/scenes/generate-scene-flow.js
```

This script analyzes all scene connections and generates:
- **Connection Matrix** - Shows which scenes lead to which other scenes at a glance
- **Scene Flow Details** - Detailed breakdown of each scene's choices and destinations
- **Mermaid Diagram** - Visual flowchart of the entire story structure

## Organization

### `/exploration` - Discovery and Adventure
Scenes related to exploring the world, discovering locations, and pursuing adventure.

- **start.ts** - The game entry point; offers initial choices to explore forest or sea
- **forest.ts** - Forest exploration with various investigation options
- **forest-secret.ts** - Hidden glade discovered through good relationships
- **sea.ts** - Coastal location with boat travel options
- **boat.ts** - Open water journey
- **boat-luxury.ts** - Premium boat experience for wealthy players
- **cabin.ts** - Forest cabin with conditional text based on previous actions
- **cabin-search.ts** - Map examination result
- **treasure.ts** - Treasure discovery (multiple paths lead here)

### `/town` - Community and Commerce
Scenes centered around town life, trading, and social interaction.

- **village.ts** - Main village square hub with conditional text based on reputation/prosperity
- **market.ts** - Trading hub with merchants and rumors
- **tavern.ts** - Social gathering spot with gambling and quest opportunities
- **blacksmith.ts** - Equipment crafting and repair location

### `/quests` - Missions and Reputation
Quest-related scenes that affect town reputation and prosperity.

- **guild.ts** - Quest board and guild membership
- **quest-hunt.ts** - Active quest gameplay with success/failure outcomes
- **village-help.ts** - Helper quest outcome scene

### `/special` - Unique Locations
Special or magical locations with unique mechanics.

- **shrine.ts** - Mystical location for ritual and stat modification

## Scene Class Naming Convention

Each scene is exported as a named constant using PascalCase with "Scene" suffix:

```typescript
export const MySceneName: Scene = {
  id: 'my-scene-id',
  // ...
}
```

## Adding New Scenes

1. Create a new `.ts` file in the appropriate directory
2. Export the scene as a named constant (e.g., `export const MyScene: Scene = {...}`)
3. Import and register it in `src/story-manager.ts` by:
   - Adding it to the import statement at the top
   - Adding an entry to the `scenes` map object

Example:
```typescript
// In src/scenes/town/my-new-scene.ts
export const MyNewScene: Scene = {
  id: 'my-new-scene',
  text: 'Scene description...',
  choices: [...]
};

// In src/story-manager.ts
import { MyNewScene } from './scenes/town/my-new-scene';

const scenes: Record<string, Scene> = {
  // ... existing scenes
  'my-new-scene': MyNewScene
};
```

## Conditional Text in Scenes

Scenes support `textVariants` for dynamic text based on conditions:

```typescript
{
  id: 'my-scene',
  text: 'Default text',
  textVariants: [
    {
      text: 'Text if player has high courage',
      conditions: { stats: { courage: { min: 8 } } }
    },
    {
      text: 'Text if player made a specific choice',
      conditions: { hasFlags: ['choice-id'] }
    }
  ],
  choices: [...]
}
```

## Authoring Tips

- **Keep scenes focused**: One scene should have a clear purpose
- **Use conditional text**: Instead of branching stories, use textVariants for flavor variations
- **Track connections**: Be mindful of which scenes link to which (look at `next` IDs)
- **Test requirements**: Verify that stat requirements, flags, and title conditions work as intended
- **Effect balancing**: Ensure effects (stat changes, wealth, reputation) are balanced and make sense
- **Hidden attributes**: Use `hiddenEffects` to track player behavior invisibly for complex branching (see [HIDDEN_ATTRIBUTES_QUICK_REF.md](./HIDDEN_ATTRIBUTES_QUICK_REF.md))

## Advanced Features

### Hidden Attributes
Track player behavior, alignment, and state without displaying it to users. Perfect for:
- Moral alignment systems
- Faction reputation
- Behavior pattern tracking
- Secret counters

📖 **Quick Reference:** [HIDDEN_ATTRIBUTES_QUICK_REF.md](./HIDDEN_ATTRIBUTES_QUICK_REF.md)  
📚 **Full Documentation:** [docs/HIDDEN_ATTRIBUTES.md](../../docs/HIDDEN_ATTRIBUTES.md)  
💡 **Examples:** [examples/hidden-attributes-examples.ts](./examples/hidden-attributes-examples.ts)

### Previous Scene Tracking
Reference which scene the player came from to create contextual experiences.

📚 **Documentation:** [docs/PREVIOUS_SCENE.md](../../docs/PREVIOUS_SCENE.md)

### Scene Flow Visualization
Automatically generate visual documentation of all scene connections.

🔧 **Generator Script:** [generate-scene-flow.js](./generate-scene-flow.js)  
📖 **Guide:** [SCENE_FLOW_GENERATOR.md](./SCENE_FLOW_GENERATOR.md)

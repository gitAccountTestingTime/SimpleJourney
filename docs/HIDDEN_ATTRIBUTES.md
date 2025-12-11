# Hidden Attributes System

> **Overview:** Hidden attributes allow authors to track player behavior, choices, and state that is not directly shown to the user but can influence story flow, text variants, available choices, and scene transitions.

**Last updated:** December 6, 2025

---

## Table of Contents

- [Overview](#overview)
- [Use Cases](#use-cases)
- [API Reference](#api-reference)
- [Setting Hidden Attributes](#setting-hidden-attributes)
- [Checking Hidden Attributes](#checking-hidden-attributes)
- [Usage Examples](#usage-examples)
- [Best Practices](#best-practices)
- [Integration with Other Systems](#integration-with-other-systems)

---

## Overview

Hidden attributes are key-value pairs stored in the game state that:
- **Are NOT visible** to players in the UI
- **Support** numbers, strings, and booleans as values
- **Persist** in saved games (localStorage)
- **Can be used** in conditional logic for text variants, choice outcomes, and scene routing

This system is ideal for implementing:
- Moral alignment/reputation systems
- Behavior pattern tracking
- Faction relationships
- Secret counters and achievements
- Complex branching logic based on past choices

---

## Use Cases

### 1. **Moral Alignment System**
Track player's ethical choices without showing an "alignment meter":
```typescript
hiddenEffects: {
  'compassion_score': 10,
  'ruthless_count': 0
}
```

### 2. **Faction Reputation**
Manage relationships with multiple groups invisibly:
```typescript
hiddenEffects: {
  'thieves_guild_rep': 20,
  'merchants_guild_rep': -10
}
```

### 3. **Behavior Patterns**
Track how the player typically approaches problems:
```typescript
hiddenEffects: {
  'risk_tolerance': 8,
  'cautious_count': 2,
  'aggressive_count': 5
}
```

### 4. **Secret Counters**
Count actions without player knowledge:
```typescript
hiddenEffects: {
  'lockpick_attempts': 3,
  'lies_told': 7,
  'murders_committed': 0
}
```

### 5. **Story Flags**
Track specific story beats for complex branching:
```typescript
hiddenEffects: {
  'knows_secret': true,
  'betrayed_ally': false,
  'secret_ending_unlocked': true
}
```

---

## API Reference

### Type Definitions

#### In `ChoiceOutcome` and `Choice` types:
```typescript
// Set hidden attributes when a choice or outcome is selected
hiddenEffects?: Record<string, number | string | boolean>

// Example:
hiddenEffects: {
  'player_alignment': 'good',
  'trust_level': 75,
  'suspicious': false
}
```

#### In `OutcomeCondition` type:
```typescript
// Check hidden attributes match specific values
hasHiddenAttributes?: Record<string, number | string | boolean>

// Example:
conditions: {
  hasHiddenAttributes: {
    'player_alignment': 'good',
    'trust_level': 75
  }
}
```

### Core Functions

#### `getHiddenAttribute(key: string)`
Get the value of a hidden attribute.
```typescript
const alignment = getHiddenAttribute('player_alignment');
// Returns: number | string | boolean | undefined
```

#### `hasHiddenAttribute(key: string, value?: number | string | boolean)`
Check if a hidden attribute exists (and optionally matches a value).
```typescript
// Check if attribute exists
if (hasHiddenAttribute('knows_secret')) { /* ... */ }

// Check if attribute has specific value
if (hasHiddenAttribute('alignment', 'evil')) { /* ... */ }
```

#### `setHiddenAttribute(key: string, value: number | string | boolean)`
Set a hidden attribute programmatically (useful in custom condition functions).
```typescript
setHiddenAttribute('discovered_truth', true);
setHiddenAttribute('faction_rep', 50);
```

#### `removeHiddenAttribute(key: string)`
Delete a hidden attribute.
```typescript
removeHiddenAttribute('temporary_flag');
```

#### `getAllHiddenAttributes()`
Get all hidden attributes as a plain object (useful for debugging).
```typescript
const all = getAllHiddenAttributes();
console.log(all); // { alignment: 'good', trust: 75, ... }
```

### Helper Functions (in `scene-helpers.ts`)

#### `hiddenAttrEquals(key: string, value: any)`
Create a custom condition function that checks if hidden attribute matches a value.
```typescript
conditions: {
  custom: hiddenAttrEquals('alignment', 'good')
}
```

#### `hiddenAttrExists(key: string)`
Create a custom condition function that checks if hidden attribute exists.
```typescript
conditions: {
  custom: hiddenAttrExists('secret_discovered')
}
```

---

## Setting Hidden Attributes

### Method 1: Through Choice Effects
```typescript
{
  id: 'help-beggar',
  text: 'Help the beggar',
  next: 'next-scene',
  hiddenEffects: {
    'compassion_score': 10,
    'helped_beggar': true
  }
}
```

### Method 2: Through Outcome Effects
```typescript
{
  id: 'negotiate',
  text: 'Try to negotiate',
  outcomes: [
    {
      conditions: { stats: { charisma: { min: 5 } } },
      next: 'success',
      hiddenEffects: {
        'negotiation_skill': 10,
        'diplomatic_approach': true
      }
    },
    {
      next: 'failure',
      hiddenEffects: {
        'negotiation_skill': 5,
        'diplomatic_approach': true
      }
    }
  ]
}
```

### Method 3: Programmatically in Custom Functions
```typescript
conditions: {
  custom: () => {
    const currentScore = getHiddenAttribute('score') as number || 0;
    setHiddenAttribute('score', currentScore + 1);
    return true;
  }
}
```

---

## Checking Hidden Attributes

### Method 1: In Conditions (Declarative)
```typescript
conditions: {
  hasHiddenAttributes: {
    'alignment': 'good',
    'trust_level': 75
  }
}
```

### Method 2: In Custom Functions (Programmatic)
```typescript
conditions: {
  custom: () => {
    const alignment = getHiddenAttribute('alignment');
    const trust = getHiddenAttribute('trust_level') as number || 0;
    return alignment === 'good' && trust >= 50;
  }
}
```

### Method 3: Using Helper Functions
```typescript
conditions: {
  custom: hiddenAttrEquals('faction', 'merchants')
}
```

---

## Usage Examples

### Example 1: Basic Boolean Flag
```typescript
// Scene where player learns a secret
{
  id: 'learn-secret',
  text: 'You discover the truth about the mayor.',
  choices: [
    {
      id: 'understand',
      text: 'This changes everything...',
      next: 'next-scene',
      hiddenEffects: {
        'knows_mayors_secret': true
      }
    }
  ]
}

// Later scene with conditional text
{
  id: 'meet-mayor',
  text: 'The mayor greets you warmly.',
  textVariants: [
    {
      text: 'The mayor greets you warmly, but you know the truth about their past.',
      conditions: {
        hasHiddenAttributes: {
          'knows_mayors_secret': true
        }
      }
    }
  ]
}
```

### Example 2: Incremental Counter
```typescript
// Choice that increments a counter
{
  id: 'steal-item',
  text: 'Steal the item',
  next: 'after-theft',
  outcomes: [
    {
      // Increment theft counter
      conditions: {
        custom: () => {
          const thefts = (getHiddenAttribute('theft_count') as number) || 0;
          setHiddenAttribute('theft_count', thefts + 1);
          return true;
        }
      }
    }
  ]
}

// Later check if player has stolen multiple times
{
  id: 'reputation-check',
  text: 'The guards eye you suspiciously.',
  choices: [
    {
      id: 'confront',
      text: 'What are you looking at?',
      // Only available if theft count is high
      outcomes: [
        {
          conditions: {
            custom: () => {
              const thefts = (getHiddenAttribute('theft_count') as number) || 0;
              return thefts >= 3;
            }
          },
          next: 'arrested',
          effects: { reputation: -10 }
        },
        {
          next: 'warning'
        }
      ]
    }
  ]
}
```

### Example 3: Faction System
```typescript
// Choice affects multiple faction reputations
{
  id: 'side-with-merchants',
  text: 'Help the Merchants\' Guild',
  next: 'conflict-resolved',
  hiddenEffects: {
    'merchant_guild_rep': 20,
    'thieves_guild_rep': -15,
    'last_faction_choice': 'merchants'
  },
  effects: { wealth: 10 }
}

// Later scene checks faction relationships
{
  id: 'guild-hall',
  text: 'You enter the guild hall.',
  textVariants: [
    {
      text: 'The merchants welcome you as a trusted friend.',
      conditions: {
        custom: () => {
          const rep = (getHiddenAttribute('merchant_guild_rep') as number) || 0;
          return rep >= 20;
        }
      }
    },
    {
      text: 'The merchants regard you with suspicion.',
      conditions: {
        custom: () => {
          const rep = (getHiddenAttribute('merchant_guild_rep') as number) || 0;
          return rep < 0;
        }
      }
    }
  ]
}
```

### Example 4: String-Based Alignment
```typescript
// Set alignment based on choice
{
  id: 'moral-choice',
  text: 'A wounded enemy lies before you.',
  choices: [
    {
      id: 'show-mercy',
      text: 'Show mercy',
      next: 'aftermath',
      hiddenEffects: {
        'alignment': 'good',
        'mercy_count': 1
      }
    },
    {
      id: 'finish-them',
      text: 'Finish them off',
      next: 'aftermath',
      hiddenEffects: {
        'alignment': 'evil',
        'ruthless_count': 1
      }
    }
  ]
}

// Check alignment later
{
  id: 'divine-judgment',
  text: 'A celestial being judges your soul.',
  choices: [
    {
      id: 'face-judgment',
      text: 'Accept judgment',
      outcomes: [
        {
          conditions: {
            hasHiddenAttributes: { 'alignment': 'good' }
          },
          next: 'heaven',
          effects: { reputation: 50 }
        },
        {
          conditions: {
            hasHiddenAttributes: { 'alignment': 'evil' }
          },
          next: 'hell',
          effects: { reputation: -50 }
        },
        {
          next: 'purgatory'
        }
      ]
    }
  ]
}
```

### Example 5: Complex Multi-Attribute Logic
```typescript
// Scene that checks multiple hidden attributes
{
  id: 'secret-ending-check',
  text: 'You approach the ancient door.',
  choices: [
    {
      id: 'open-door',
      text: 'Try to open the door',
      outcomes: [
        {
          // Secret ending requires multiple conditions
          conditions: {
            custom: () => {
              const knowsSecret = getHiddenAttribute('knows_secret') === true;
              const hasKey = getHiddenAttribute('ancient_key') === true;
              const alignment = getHiddenAttribute('alignment') === 'good';
              const compassion = (getHiddenAttribute('compassion_score') as number || 0) >= 50;
              
              return knowsSecret && hasKey && alignment && compassion;
            }
          },
          next: 'secret-ending',
          hiddenEffects: {
            'achieved_secret_ending': true
          }
        },
        {
          next: 'door-locked',
          text: 'The door remains sealed.'
        }
      ]
    }
  ]
}
```

---

## Best Practices

### 1. **Use Descriptive Keys**
```typescript
// Good
hiddenEffects: {
  'merchant_guild_reputation': 20,
  'player_moral_alignment': 'good'
}

// Avoid
hiddenEffects: {
  'mg_rep': 20,
  'align': 'g'
}
```

### 2. **Initialize Before Incrementing**
```typescript
// Always handle the case where attribute doesn't exist yet
const count = (getHiddenAttribute('theft_count') as number) || 0;
setHiddenAttribute('theft_count', count + 1);
```

### 3. **Document Your Hidden Attributes**
Keep a reference document listing all hidden attributes and their purpose:
```typescript
/**
 * Hidden Attributes Used:
 * - 'player_alignment': string ('good', 'neutral', 'evil')
 * - 'merchant_rep': number (0-100)
 * - 'knows_secret': boolean
 * - 'theft_count': number
 */
```

### 4. **Use Type Guards**
```typescript
// Check types when reading hidden attributes
const rep = getHiddenAttribute('merchant_rep');
if (typeof rep === 'number') {
  // Safe to use as number
  return rep >= 50;
}
```

### 5. **Combine with Visible Stats**
Use hidden attributes to track behavior, visible stats for player feedback:
```typescript
{
  id: 'help-villagers',
  text: 'Help the villagers',
  effects: {
    reputation: 5  // Visible to player
  },
  hiddenEffects: {
    'helpful_actions': 1,  // Hidden counter
    'village_affinity': 10  // Hidden reputation
  }
}
```

### 6. **Plan for Edge Cases**
```typescript
conditions: {
  custom: () => {
    const value = getHiddenAttribute('some_key');
    // Handle missing, wrong type, or unexpected values
    if (value === undefined) return false;
    if (typeof value !== 'number') return false;
    return value >= 10;
  }
}
```

---

## Integration with Other Systems

### With Conditional Text
```typescript
textVariants: [
  {
    text: 'Special text for high reputation players.',
    conditions: {
      hasHiddenAttributes: {
        'faction_rep': 50
      }
    }
  }
]
```

### With Choice Outcomes
```typescript
outcomes: [
  {
    conditions: {
      stats: { charisma: { min: 5 } },
      hasHiddenAttributes: {
        'merchant_rep': 20
      }
    },
    next: 'success',
    effects: { wealth: 50 }
  }
]
```

### With Flags and Titles
```typescript
conditions: {
  hasFlags: ['completed-quest'],
  hasTitles: ['brave-soul'],
  hasHiddenAttributes: {
    'secret_unlocked': true
  }
}
```

### With Custom Functions
```typescript
conditions: {
  custom: () => {
    const prevScene = getPreviousSceneId();
    const trustLevel = getHiddenAttribute('trust_level') as number || 0;
    return prevScene === 'betrayal' && trustLevel < 50;
  }
}
```

---

## Persistence

Hidden attributes are automatically:
- **Saved** when `saveProgress()` is called
- **Restored** when `restoreProgress()` is called
- **Cleared** when `resetProgress()` is called

No additional code needed for persistence!

---

## Debugging

Use `getAllHiddenAttributes()` during development to inspect all hidden state:

```typescript
// In browser console during development
console.log(getAllHiddenAttributes());
// Output: { alignment: 'good', merchant_rep: 50, ... }
```

---

## See Also

- [Previous Scene Documentation](./PREVIOUS_SCENE.md) - Track where players came from
- [Scene Examples](../src/scenes/examples/hidden-attributes-examples.ts) - Working examples
- [Story Manager API](../src/story-manager.ts) - Core system implementation

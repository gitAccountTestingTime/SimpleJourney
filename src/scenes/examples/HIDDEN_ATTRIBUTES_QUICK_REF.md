# Hidden Attributes Quick Reference

## Basic Usage

### Set a hidden attribute on a choice:
```typescript
{
  id: 'my-choice',
  text: 'Choice text',
  next: 'next-scene',
  hiddenEffects: {
    'attribute_name': value  // value can be number, string, or boolean
  }
}
```

### Check hidden attribute in conditions:
```typescript
conditions: {
  hasHiddenAttributes: {
    'attribute_name': value  // must match exactly
  }
}
```

### Use in custom functions:
```typescript
import { getHiddenAttribute, setHiddenAttribute, hasHiddenAttribute } from '../scene-helpers';

conditions: {
  custom: () => {
    const value = getHiddenAttribute('attribute_name');
    return value === 'expected_value';
  }
}
```

## Common Patterns

### Boolean Flag
```typescript
// Set flag
hiddenEffects: {
  'discovered_secret': true
}

// Check flag
conditions: {
  hasHiddenAttributes: {
    'discovered_secret': true
  }
}
```

### Counter
```typescript
// Increment counter
conditions: {
  custom: () => {
    const count = (getHiddenAttribute('action_count') as number) || 0;
    setHiddenAttribute('action_count', count + 1);
    return true;
  }
}

// Check counter threshold
conditions: {
  custom: () => {
    const count = (getHiddenAttribute('action_count') as number) || 0;
    return count >= 5;
  }
}
```

### String-based State
```typescript
// Set state
hiddenEffects: {
  'player_alignment': 'good'  // or 'neutral', 'evil', etc.
}

// Check state
conditions: {
  hasHiddenAttributes: {
    'player_alignment': 'good'
  }
}
```

### Numeric Score
```typescript
// Set score
hiddenEffects: {
  'faction_reputation': 50
}

// Check score range
conditions: {
  custom: () => {
    const rep = (getHiddenAttribute('faction_reputation') as number) || 0;
    return rep >= 30 && rep <= 70;
  }
}
```

## Helper Functions

```typescript
import { 
  getHiddenAttribute,      // Get value
  hasHiddenAttribute,      // Check exists or matches value
  setHiddenAttribute,      // Set value
  removeHiddenAttribute,   // Delete attribute
  hiddenAttrEquals,        // Helper for conditions
  hiddenAttrExists         // Helper for conditions
} from '../scene-helpers';
```

## Complete Example

```typescript
import { Scene } from '../../story-manager';
import { hiddenAttrEquals, getHiddenAttribute } from '../../scene-helpers';

export const MyScene: Scene = {
  id: 'my-scene',
  text: 'Base text',
  textVariants: [
    {
      text: 'Special text for high trust',
      conditions: {
        hasHiddenAttributes: {
          'trust_level': 'high'
        }
      }
    }
  ],
  choices: [
    {
      id: 'honest-choice',
      text: 'Tell the truth',
      next: 'next-scene',
      hiddenEffects: {
        'trust_level': 'high',
        'honesty_count': 1
      },
      effects: { reputation: 5 }
    },
    {
      id: 'lie-choice',
      text: 'Lie',
      next: 'next-scene',
      hiddenEffects: {
        'trust_level': 'low',
        'deception_count': 1
      },
      effects: { reputation: -2 }
    },
    {
      id: 'complex-choice',
      text: 'Complex outcome based on history',
      outcomes: [
        {
          conditions: {
            custom: () => {
              const honesty = (getHiddenAttribute('honesty_count') as number) || 0;
              return honesty >= 3;
            }
          },
          next: 'trusted-outcome',
          hiddenEffects: {
            'fully_trusted': true
          },
          effects: { reputation: 10 }
        },
        {
          next: 'default-outcome'
        }
      ]
    }
  ]
};
```

## Tips

1. **Type safety**: Always use type guards when reading hidden attributes
   ```typescript
   const value = getHiddenAttribute('key');
   if (typeof value === 'number') {
     // Safe to use as number
   }
   ```

2. **Initialize counters**: Always handle undefined when incrementing
   ```typescript
   const count = (getHiddenAttribute('count') as number) || 0;
   setHiddenAttribute('count', count + 1);
   ```

3. **Document attributes**: Keep a list of all hidden attributes and their purpose

4. **Use descriptive names**: `'merchant_guild_reputation'` not `'mg_rep'`

5. **Combine with visible effects**: Hidden attributes for branching, visible stats for player feedback
   ```typescript
   effects: { reputation: 5 },  // Visible
   hiddenEffects: {              // Hidden
     'faction_favor': 10
   }
   ```

## See Full Documentation
- [docs/HIDDEN_ATTRIBUTES.md](../../docs/HIDDEN_ATTRIBUTES.md) - Complete guide with examples
- [src/scenes/examples/hidden-attributes-examples.ts](../examples/hidden-attributes-examples.ts) - Working examples

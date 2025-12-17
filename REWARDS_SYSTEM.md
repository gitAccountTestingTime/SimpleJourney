# Rewards System Documentation

## Overview

The Rewards System allows authors to create achievements that players can unlock by reaching certain milestones in the story. Rewards provide recognition and motivation for players as they progress through your narrative.

## Key Features

- **Automatic Detection**: Rewards are automatically checked and awarded when conditions are met
- **Visual Notifications**: Players receive prominent notifications when unlocking rewards
- **Persistent Tracking**: Earned rewards are saved with player progress
- **Multiple Trigger Types**: Rewards can be earned through various conditions

## How It Works

Rewards are defined in the `REWARDS` object in `story-manager.ts`. Each reward has:
- A unique ID
- A display name and description
- An optional icon (emoji)
- Conditions that must be met to earn it
- An optional custom message shown when earned

The system automatically checks all reward conditions after each player choice and awards any newly-earned rewards.

## Reward Condition Types

### 1. Scene-Based Rewards
Earned when the player reaches a specific scene:

```typescript
{
  id: 'first-steps',
  name: 'First Steps',
  description: 'Completed the prologue',
  icon: '🎯',
  condition: { sceneId: 'act1_start' },
  message: 'Congratulations! You\'ve completed the prologue.'
}
```

### 2. Stat-Based Rewards
Earned when player stats reach certain thresholds:

```typescript
{
  id: 'merchant-patron',
  name: 'Merchant Patron',
  description: 'Earned 100+ gold',
  icon: '💎',
  condition: { stats: { wealth: { min: 100 } } },
  message: 'Your wealth grows! You\'ve amassed over 100 gold.'
}
```

You can use `min` and/or `max` for any stat:
- `{ strength: { min: 15 } }` - 15 or more strength
- `{ health: { max: 3 } }` - 3 or less health (danger threshold)
- `{ wisdom: { min: 10, max: 20 } }` - between 10 and 20 wisdom

### 3. Title-Based Rewards
Earned when the player has obtained specific titles:

```typescript
{
  id: 'legendary-hero',
  name: 'Legendary Hero',
  description: 'Earned both Brave Soul and Strong titles',
  icon: '🏆',
  condition: { titles: ['brave-soul', 'strong'] },
  message: 'Your courage and strength are legendary!'
}
```

All titles in the array must be earned for the reward to unlock.

### 4. Flag-Based Rewards
Earned when specific choice flags are set:

```typescript
{
  id: 'noble-beginning',
  name: 'Noble Beginning',
  description: 'Accepted your heritage at Silverwood',
  icon: '👑',
  condition: { flags: ['identity_accepted:true'] },
  message: 'You\'ve embraced your true identity as heir to Silverwood.'
}
```

### 5. Hidden Attribute Rewards
Earned when hidden attributes match specific values:

```typescript
{
  id: 'trusted-advisor',
  name: 'Trusted Advisor',
  description: 'Gained Vale\'s complete trust',
  icon: '🤝',
  condition: { hiddenAttributes: { vale_trust: 25 } },
  message: 'Vale trusts you completely.'
}
```

### 6. Custom Condition Rewards
For complex logic, use a custom function:

```typescript
{
  id: 'well-rounded',
  name: 'Well-Rounded',
  description: 'Reached 10+ in four different stats',
  icon: '⭐',
  condition: {
    custom: () => {
      const stats = getStats();
      const highStats = Object.values(stats).filter(val => val >= 10).length;
      return highStats >= 4;
    }
  },
  message: 'Your diverse skills make you a truly versatile adventurer!'
}
```

### 7. Combined Conditions
You can combine multiple condition types (ALL must be met):

```typescript
{
  id: 'master-negotiator',
  name: 'Master Negotiator',
  description: 'High charisma and completed merchant questline',
  icon: '💼',
  condition: {
    stats: { charisma: { min: 20 } },
    flags: ['merchant_questline_complete:true'],
    sceneId: 'merchant_finale'
  },
  message: 'Your negotiation skills are unmatched!'
}
```

## Adding New Rewards

1. Open `src/story-manager.ts`
2. Find the `REWARDS` object
3. Add your reward following this template:

```typescript
'your-reward-id': {
  id: 'your-reward-id',
  name: 'Display Name',
  description: 'What the player did to earn this',
  icon: '🎉', // Optional emoji
  condition: {
    // Add one or more condition types here
    sceneId: 'some_scene_id',
    stats: { courage: { min: 10 } },
    titles: ['title-id'],
    flags: ['flag:true'],
    hiddenAttributes: { key: value },
    custom: () => { /* your logic */ }
  },
  message: 'Custom message shown when earned' // Optional
}
```

## Example Rewards

### Story Milestone
```typescript
'act2-complete': {
  id: 'act2-complete',
  name: 'Political Mastermind',
  description: 'Successfully navigated the political intrigue of Act 2',
  icon: '🎭',
  condition: { sceneId: 'act3_start' },
  message: 'Your political acumen has earned you respect throughout the kingdom.'
}
```

### Combat Achievement
```typescript
'undefeated-warrior': {
  id: 'undefeated-warrior',
  name: 'Undefeated Warrior',
  description: 'Won every combat encounter',
  icon: '⚔️',
  condition: {
    flags: ['combat_win_1:true', 'combat_win_2:true', 'combat_win_3:true'],
    stats: { strength: { min: 15 } }
  },
  message: 'Your martial prowess is legendary! No foe can stand against you.'
}
```

### Relationship Achievement
```typescript
'companion-bond': {
  id: 'companion-bond',
  name: 'Unbreakable Bond',
  description: 'Maximized trust with all companions',
  icon: '💕',
  condition: {
    hiddenAttributes: {
      vale_trust: 25,
      ash_trust: 25,
      rook_trust: 25
    }
  },
  message: 'Your companions would follow you anywhere. Their loyalty is absolute.'
}
```

### Collection Achievement
```typescript
'crystal-collector': {
  id: 'crystal-collector',
  name: 'Crystal Collector',
  description: 'Found all Crystal Heart fragments',
  icon: '💠',
  condition: {
    flags: [
      'elven_fragment:true',
      'dwarven_fragment:true',
      'dragon_fragment:true',
      'palace_fragment:true'
    ]
  },
  message: 'The Crystal Heart is complete! Its power flows through you.'
}
```

## Best Practices

### 1. Clear Descriptions
Make it obvious what the player did to earn the reward:
- ✅ "Reached 100+ gold"
- ❌ "Money stuff"

### 2. Meaningful Icons
Choose emojis that represent the achievement:
- 🎯 Milestones/Goals
- 💎 Wealth/Collection
- ⚔️ Combat
- 📚 Knowledge
- 💕 Relationships
- 👑 Status/Nobility

### 3. Balanced Difficulty
Mix easy, medium, and hard rewards:
- **Easy**: Early story milestones (prologue completion)
- **Medium**: Stat thresholds (reach 50+ gold)
- **Hard**: Multiple conditions (max all companion trust + complete all quests)

### 4. Custom Messages
Write engaging messages that make players feel accomplished:
- Reference specific story events
- Acknowledge the effort required
- Hint at future content unlocked

### 5. Don't Overuse
Too many rewards dilute their value. Aim for:
- 1-2 rewards per major story section
- 3-5 rewards for significant stat milestones
- 2-3 rewards for relationship achievements
- 1-2 rewards for collecting/completing sets

## Technical Details

### Checking Rewards
The `checkAndAwardRewards()` function is called automatically after each player choice. It:
1. Iterates through all defined rewards
2. Skips already-earned rewards
3. Evaluates conditions for remaining rewards
4. Awards newly-earned rewards
5. Returns array of new rewards for UI notification

### Reward Display
Earned rewards are displayed in two places:
1. **Notification**: Full-screen popup with icon, name, and message (auto-dismisses after 5 seconds)
2. **Rewards Section**: Persistent display below titles showing all earned rewards

### Save/Load
Rewards are automatically saved with player progress and restored on game load.

### Debug Console
The debug console shows all available rewards with checkboxes (read-only) indicating which are earned. This helps authors test reward conditions during development.

## Testing Your Rewards

1. **Use Debug Console**: Enable debug mode to see current stats, flags, and rewards
2. **Test Conditions**: Manually adjust stats/flags to trigger rewards
3. **Check Edge Cases**: Test boundary conditions (exactly min/max values)
4. **Verify Messages**: Ensure notification messages display correctly
5. **Test Persistence**: Save, reload, and verify rewards persist

## Common Issues

### Reward Not Triggering
- **Check scene IDs**: Ensure `sceneId` matches exactly
- **Verify flag format**: Flags should include the value (e.g., `'flag:true'`)
- **Test stat values**: Use debug console to confirm stats meet requirements
- **Check ALL conditions**: With multiple conditions, ALL must be true

### Duplicate Rewards
- **Unique IDs**: Each reward must have a unique `id`
- **Already implemented**: The system automatically prevents duplicate awards

### Timing Issues
- Rewards are checked **after** choice effects apply
- Scene-based rewards trigger when **entering** the scene
- Stat-based rewards trigger as soon as the threshold is crossed

## Future Enhancements

Potential additions to the rewards system:
- Reward tiers (Bronze/Silver/Gold)
- Progress tracking (e.g., "3/5 fragments collected")
- Reward bonuses (earned rewards grant small stat bonuses)
- Secret rewards (conditions not shown until earned)
- Reward categories (Combat, Social, Exploration, etc.)

## Example: Complete Reward Set for Act 1

```typescript
// Story milestone
'prologue-complete': {
  id: 'prologue-complete',
  name: 'Journey Begins',
  description: 'Completed the prologue',
  icon: '🎯',
  condition: { sceneId: 'act1_start' },
  message: 'Your journey as heir to Silverwood begins!'
},

// Wealth achievement
'first-fortune': {
  id: 'first-fortune',
  name: 'First Fortune',
  description: 'Earned 50+ gold',
  icon: '💰',
  condition: { stats: { wealth: { min: 50 } } },
  message: 'Your coin purse grows heavy with gold!'
},

// Combat achievement
'tournament-victor': {
  id: 'tournament-victor',
  name: 'Tournament Victor',
  description: 'Won the tournament',
  icon: '🏆',
  condition: { flags: ['tournament_champion:true'] },
  message: 'The crowd roars your name! You are the tournament champion!'
},

// Relationship achievement
'companion-friendship': {
  id: 'companion-friendship',
  name: 'Bonds of Friendship',
  description: 'Earned trust from at least one companion',
  icon: '🤝',
  condition: {
    custom: () => {
      const valeT = hiddenAttributes.get('vale_trust') || 0;
      const ashT = hiddenAttributes.get('ash_trust') || 0;
      const rookT = hiddenAttributes.get('rook_trust') || 0;
      return valeT >= 15 || ashT >= 15 || rookT >= 15;
    }
  },
  message: 'Your companions are becoming true friends.'
},

// Exploration achievement
'manor-explorer': {
  id: 'manor-explorer',
  name: 'Manor Explorer',
  description: 'Thoroughly explored Silverwood Manor',
  icon: '🏰',
  condition: { flags: ['manor_explored:true'] },
  message: 'You\'ve uncovered the secrets of your ancestral home.'
}
```

This creates a balanced reward set covering different aspects of gameplay!

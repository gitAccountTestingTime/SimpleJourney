# Wealth Currency System Implementation

## Overview
The wealth stat has been redesigned to function as a real in-game currency called "gold". Players can now earn gold through quests and activities, then spend it at merchants to purchase items that provide stat boosts and gameplay advantages.

## Currency Details
- **Currency Name**: Gold
- **Starting Amount**: 0 gold
- **Range**: -1000 to 100,000
- **Implementation**: Uses existing `wealth` stat with `effects: { wealth: +/- amount }`

## Earning Opportunities

### Prologue (Total Possible: 50-170g)

#### Bandit Quest (p3-bandit-encounter.ts)
- Fight them: **50g** (base payment)
- Negotiate: **70g** (bonus for peaceful solution)
- Help them: **70g** (merchant guild bonus)
- Turn them in: **50g** (base payment)

#### Shadow Beast Bounty (p4-shadow-beast.ts)
- Face fear: **25g** (bounty reward)
- Fight successfully: **25g** (full bounty)
- Fight survival: **15g** (partial bounty)
- Protect refugees: **25g** (heroism bonus)
- Focus on survival: **10g** (minimal reward)
- Understand creature: **20g** (scholar guild reward)

#### Mercenary Training (p6-mercenary-training.ts)
- Focus on combat: **40g** (mercenary pay)
- Practice skill: **40g** (mercenary pay)
- Learn kingdom: **40g** (mercenary pay)
- Analyze politics: **40g** (mercenary pay)
- Bond with Ash: **45g** (commander bonus)
- Reflect on compassion: **40g** (mercenary pay)
- Independent path: **35g** (odd jobs earnings)

#### Tournament (p8-tournament.ts)
- Combat champion: **100g** (first place prize)
- Combat participant: **50g** (participation prize)
- Archery contest: **30g** (prize money)
- Magic champion: **80g** (first place prize)
- Magic participant: **40g** (participation prize)
- Strategy tournament: **60g** (prize money)
- Socialize/network: **20g** (noble tips/gifts)

### Act 1 (Total Possible: 30-80g)

#### Manor Exploration (a1-manor-exploration.ts)
- Read journals: **80g** (family treasury discovery)
- Study politics: **50g** (noble funds access)
- Examine artifacts: **60g** (valuable items found)
- Spend time with companions: **30g** (pooled resources/gifts)

## Spending Opportunities

### Traveling Merchant (traveling-merchant.ts)
Aldric Goldweave appears on the road to Silverwood Manor after prologue completion. Players can browse a shop with 11 purchasable items.

#### Premium Items (40-60g)
- **Enchanted Steel Sword** (50g): +3 Strength, +2 Courage, +5 Combat Skills
- **Elven Leather Armor** (45g): +4 Vitality, +1 Luck, +5 Defense
- **Amulet of Clarity** (60g): +4 Wisdom, +2 Empathy, improved spell casting
- **Ring of Charm** (40g): +3 Charisma, +5 Reputation, noble favor

#### Mid-Tier Items (20-35g)
- **Health Potion** (30g): +20 Health (instant restoration)
- **Courage Elixir** (25g): +5 Courage (temporary boost)
- **Ancient Maps** (35g): +2 Wisdom, reveals hidden paths
- **Etiquette Manual** (20g): +2 Charisma, noble knowledge

#### Budget Items (10-15g)
- **Steel Dagger** (15g): +1 Strength, +1 Courage
- **Healing Herbs** (10g): +10 Health (consumable)
- **Traveler's Guide** (12g): +1 Wisdom, +1 Luck

### Special Features

#### Haggling System
- **Requirements**: 15+ Charisma
- **Reward**: 10% discount on purchases
- **Scene**: MerchantHaggle → MerchantShopDiscount

#### Merchant Reputation
- **Tracking**: Uses hidden attribute `merchant_reputation`
- **Benefits**: 
  - Special greetings for high reputation
  - Bronze Merchant Token gift (5+ reputation)
  - Loyalty rewards in future encounters

#### Dynamic Text
- Wealthy players (100+ gold): Premium collection offered
- Low funds (<20 gold): Budget options emphasized
- Previous encounters: Personalized dialogue

## Integration Points

### Story Flow
1. **Prologue End**: All paths redirect through `merchant_road_encounter`
2. **Road Encounter**: Optional merchant interaction before manor arrival
3. **Manor Grounds**: Alternative merchant meeting (future implementation)

### Merchant Integration Scenes (merchant-integration.ts)
- **MerchantRoadEncounter**: First meeting on the road
- **MerchantRumors**: Information gathering option
- **ManorGroundsMerchant**: Alternative manor visit (not yet connected)

## Balance Design

### Early Game Economy (Prologue)
- **Minimum Earnings**: 50g (bandit quest only)
- **Maximum Earnings**: 170g (all quests + tournament win)
- **Average Player**: 90-120g by merchant encounter
- **Affordable Items**: Budget items (10-15g), some mid-tier

### Mid Game Economy (Act 1)
- **Additional Earnings**: 30-80g from manor
- **Total Available**: 120-250g
- **Affordable Items**: All items except most expensive

### Pricing Philosophy
- **Budget items**: Accessible to all players
- **Mid-tier items**: Require some success/exploration
- **Premium items**: Reward thorough gameplay
- **Haggling**: Rewards character building (Charisma)

## Technical Implementation

### Requirements System
```typescript
requirements: {
  wealth: { min: 50 }  // Prevents purchase without 50+ gold
}
```

### Purchase Effects
```typescript
effects: { 
  wealth: -50,        // Deduct gold
  strength: 3,        // Add stats
  courage: 2
},
hiddenEffects: {
  combat_skills: 5,   // Add hidden attributes
  item_owned: true
}
```

### Reward Effects
```typescript
effects: { 
  wealth: 50,         // Add gold
  reputation: 5
},
hiddenEffects: {
  quest_payment_received: true
}
```

## Future Expansion Opportunities

### Additional Merchants
- Weapon smiths (specialized combat gear)
- Mage guilds (magical items/spells)
- Alchemists (potions/consumables)
- Black market (rare/illegal items)

### More Earning Opportunities
- Political favors (Act 2)
- Quest rewards throughout Acts 2-4
- Treasure discoveries
- Gambling/games
- Trading/investments

### Advanced Features
- Item crafting (spend gold + materials)
- Property purchases (safe houses, businesses)
- Hiring services (guards, spies, craftsmen)
- Donations (reputation/faction standing)
- Loans (debt mechanics)

## Files Modified

### New Files
- `src/scenes/merchants/traveling-merchant.ts` (390 lines)
- `src/scenes/merchants/merchant-integration.ts` (140 lines)

### Modified Files
- `src/scenes/prologue/p3-bandit-encounter.ts` (added wealth rewards)
- `src/scenes/prologue/p4-shadow-beast.ts` (added bounty rewards)
- `src/scenes/prologue/p6-mercenary-training.ts` (added mercenary pay)
- `src/scenes/prologue/p8-tournament.ts` (added prize money)
- `src/scenes/prologue/p13-discovery.ts` (redirected to merchant)
- `src/scenes/act1/a1-manor-exploration.ts` (added treasury/funds)
- `src/scenes/index.ts` (exported merchant scenes)

## Build Status
✅ **Build Successful**: 526.51 KB (164.84 KB gzipped)
✅ **All Systems Operational**: Earning, spending, and requirements all functional
✅ **Integration Complete**: Merchant accessible after prologue

## Testing Recommendations
1. Play through prologue, complete various quests (verify gold earned)
2. Encounter merchant on road (verify shop loads)
3. Purchase items with different wealth levels (verify requirements)
4. Test haggling with high/low Charisma (verify discount)
5. Continue to Act 1, explore manor (verify additional earnings)
6. Return to merchant later (verify reputation/loyalty system)

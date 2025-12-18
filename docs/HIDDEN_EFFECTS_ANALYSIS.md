# Hidden Effects Range Analysis Tool

## Overview

This script analyzes all scene files in the project and generates a comprehensive report tracking the minimum and maximum values for numeric `hiddenEffects` at each scene.

## Usage

Run the analysis script with:

```bash
npm run analyze-effects
```

This will:
1. Scan all TypeScript files in the `src/scenes/` directory
2. Extract all scenes and their choices
3. Analyze numeric values in `hiddenEffects`
4. Generate/update `HIDDEN_EFFECTS_RANGES.md` in the project root

## Output

The generated `HIDDEN_EFFECTS_RANGES.md` file contains:

### Per-Scene Analysis
- Organized by file path
- Lists each scene with its ID
- Shows min/max ranges for each numeric hidden effect
- Indicates which scenes have no numeric effects

### Global Summary
- Cumulative view of all numeric effects across the entire game
- Shows the absolute minimum and maximum possible values
- Counts how many scenes affect each value

## Example Output

```markdown
### Scene: `bandit_encounter`

| Effect | Min | Max |
|--------|-----|-----|
| `compassionate_actions` | -1 | 2 |
| `ruthlessness` | 0 | 5 |
| `vale_romance` | -10 | 5 |
| `vale_trust` | -10 | 10 |
```

## When to Use

Run this script:
- After adding new scenes with numeric `hiddenEffects`
- After modifying existing effect values
- To audit balance of relationship values, stats, etc.
- To ensure effect ranges are appropriate for your design

## Implementation Details

The script:
- Uses regex parsing to extract scene data from TypeScript files
- Handles nested objects and complex choice structures
- Tracks both positive and negative numeric effects
- Automatically overwrites the previous report on each run

## Files

- **Script**: `scripts/generate-hidden-effects-ranges.ts`
- **Output**: `HIDDEN_EFFECTS_RANGES.md`
- **Command**: `npm run analyze-effects`

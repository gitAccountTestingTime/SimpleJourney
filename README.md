# SimpleJourney

SimpleJourney is a small interactive story demo built with TypeScript and Vite. The engine is data-driven: scenes and choices are defined in `src/story-manager.ts` and rendered by `src/main.ts`.

## Authoring Guide: Scenes, Choices, and Outcomes

This section explains how to author new scenes and choices, and how to use conditional outcomes so choices can lead to different results depending on player stats, previously taken choices (flags), or earned titles.

Files of interest:
- `src/story-manager.ts` — Contains the scene map, types, and core engine (`initStory`, `getCurrentScene`, `choose`, `applyEffects`, persistence helpers).
- `src/main.ts` — Renders scenes and choices in the DOM and displays stats/titles. Also includes a debug console to edit stats/titles at runtime.

Core concepts
- Scene: a node with `id`, `text`, and `choices`.
- Choice: an action player can take. A `Choice` may have simple fields `next` and `effects`, or an `outcomes` array for conditional branching.
- Outcome: a single possible result from a choice. Outcomes are evaluated in order; the first outcome whose `conditions` are satisfied will be used.
- Conditions: criteria that must be satisfied for an outcome to apply. Conditions can check stats ranges, previously taken choices (flags), or earned titles.
- Flags: internal markers automatically set when a choice is taken (the engine records the choice `id` in `chosenFlags`). These are saved/restored with progress.
- Titles: named achievements the engine awards (or you can grant manually) and can be used in outcome conditions.

Authoring `Choice` and `Outcome` examples

1) Simple choice (no branching):

```
{ id: 'look-around', text: 'Look around', next: 'garden', effects: { curiosity: 1 } }
```

2) Choice with ordered conditional outcomes (stat-based, flag-based, fallback):

```
{
	id: 'approach-keeper',
	text: 'Ask the gatekeeper for permission',
	outcomes: [
		// priority: if the player has the 'helper' flag (took a previous choice), use this outcome
		{ conditions: { hasFlags: ['help-villagers'] }, next: 'gate-friendly', effects: { reputation: 2 } },
		// if the player's reputation is high enough, take this path
		{ conditions: { stats: { reputation: { min: 10 } } }, next: 'gate-pass', effects: { reputation: 1 } },
		// fallback outcome
		{ next: 'gate-deny', effects: { reputation: -1 } }
	]
}
```

Outcome `conditions` shape
- `stats`: object mapping stat names to `{ min?: number; max?: number }` (same as `requirements` used elsewhere).
- `hasFlags`: array of `choice.id` strings that must have been taken previously.
- `hasTitles`: array of title ids that must have been earned.

Effects
- `effects` supports either numeric deltas (e.g., `{ courage: 1 }`) or operation objects `{ op: 'set'|'mul'|'add', value: number }` to support `set`, `mul`, or `add` operations.

Persistence and testing
- Player stats, earned titles, and taken-choice flags are stored together in localStorage under the key `simplejourney.currentScene` when you call `saveProgress()` (there's a Save button in the UI).
- To test branching quickly, use the debug console (bottom-left) to set stats or toggle titles, or take the choice that sets a flag.

Tips for content authors
- Order matters: outcomes are evaluated top-to-bottom; place more specific conditions before fallbacks.
- Keep effects small and explicit so it's easy to reason about stat changes.
- Use `hasFlags` for story-dependent branching (remember to add a reachable choice that sets the flag).
- Use `hasTitles` for gating based on broader achievements.

Extending the engine
- If you need more complex conditions you can extend `OutcomeCondition` in `src/story-manager.ts` and update the evaluation logic in `choose()`.
- Consider adding named game flags (separate from choice ids) if you want to set flags from events rather than choice ids.

If you want, I can add a short `AUTHORING.md` with copy-paste templates and more examples.

## Guided Playthrough (quick demo steps)

Use the following sequence to exercise and observe the engine's main features: conditional outcomes, stat-based gates, flags, titles, character/place effects, and EffectOp behaviors.

Preparation: open the app in a browser and expand the debug console (bottom-left) so you can inspect stats, characters, and places while following these steps.

1) Flag-based branching
- From `start`: choose "Help a villager with chores" (choice id `help-villagers`). This sets a flag.
- Then choose "Take the forest path" (`go-forest`) — because you set the flag, you'll reach the `forest_secret` scene instead of the normal `forest` path.

2) Stat-based outcome
- Reset progress or return to `start`. In the debug console, set `courage` to `3`.
- Choose `go-forest` again — the `courage ≥ 3` outcome should trigger a stronger path (you'll see different effects applied).

3) Title-based gating
- Increase `curiosity` in the debug console to `10` (or play until you reach it). Earned titles show under "Titles Earned".
- From `forest`, choose `search-forest` — if you have the `scholar` title it routes to `treasure`; otherwise it follows a different path.

4) Character/place effects
- Visit the `village` (via choices) then `market`.
- Use "Haggle for a better price" (`haggle`) and then open the Characters editor in the debug console to see the `elder` character's `trust` stat increase.
- Visit `tavern` and use "Buy a drink" — open the Places editor and observe the `tavern` place `prosperity` stat increase.

5) EffectOp behaviors (set/mul/add)
- Go to `shrine` and take "Leave an offering" to see `health` set to a fixed value using `op: 'set'`.
- In `tavern`, try `gamble` with different `luck` values. If `luck` is high the `mul` outcome doubles wealth; otherwise the fallback `add` reduces wealth.

6) onFail behavior (hide vs disable)
- Try the choice "Call out the howl" in `forest` without enough `courage` — it will be disabled or hidden depending on `onFail` for that choice.

7) Persistence & flags across saves
- Save progress using the Save button. Reload the page and use Restore (the app restores automatically on load) — characters, places, earned titles, and taken-choice flags persist and affect subsequent branching.

Notes
- Each example can be inspected and adjusted in the debug console. Use the Characters and Places editors to modify or add entries and watch how changes influence choices and outcomes.
- The code for the example scenes is in `src/story-manager.ts`; copy patterns from the examples when authoring new content.


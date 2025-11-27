export type EffectOp = { op: 'set' | 'mul' | 'add'; value: number };

export type ChoiceRequirement = {
	min?: number;
	max?: number;
}

export type OutcomeCondition = {
	// stat based requirements (same shape as Choice.requirements)
	stats?: Record<string, ChoiceRequirement>;
	// require that certain choices were previously taken
	hasFlags?: string[];
	// require that certain titles are already earned
	hasTitles?: string[];
}

export type ChoiceOutcome = {
	// destination scene id for this outcome
	next?: string | null;
	// effects applied if this outcome is selected
	effects?: Record<string, number | EffectOp>;
	// optional effects targeted at characters (map of characterId -> stat changes)
	characterEffects?: Record<string, Record<string, number | EffectOp>>;
	// optional effects targeted at places (map of placeId -> stat changes)
	placeEffects?: Record<string, Record<string, number | EffectOp>>;
	// conditions that must be met for this outcome to be chosen
	conditions?: OutcomeCondition;
}

export type Choice = {
	id: string;
	text: string;
	// id of the next scene; if null/undefined then story ends
	next?: string | null;
	// optional effects applied to player stats when this choice is taken
	// value can be a numeric delta or a richer operation
	effects?: Record<string, number | EffectOp>;
	// optional requirements that determine if the choice is available
	requirements?: Record<string, ChoiceRequirement>;
	// behavior when requirements are unmet: 'disable' (default) or 'hide'
	onFail?: 'disable' | 'hide';
	// optional conditional outcomes - evaluated in order; first matching outcome is used
	outcomes?: ChoiceOutcome[];
	// optional effects targeted at characters/places when this choice is taken (fallback if outcome doesn't provide)
	characterEffects?: Record<string, Record<string, number | EffectOp>>;
	placeEffects?: Record<string, Record<string, number | EffectOp>>;
}

export type Scene = {
	id: string;
	text: string;
	choices: Choice[];
}

export type Title = {
	id: string;
	name: string;
	description: string;
	icon?: string;
}

let currentSceneId: string | null = null;
let earnedTitles: Set<string> = new Set();
// record of past choices taken (by id) to enable conditional branching
let chosenFlags: Set<string> = new Set();

// Available titles in the game
const TITLES: Record<string, Title> = {
	'brave-soul': {
		id: 'brave-soul',
		name: 'Brave Soul',
		description: 'Reached 10+ courage',
		icon: '⚔️'
	},
	'scholar': {
		id: 'scholar',
		name: 'Scholar',
		description: 'Reached 10+ curiosity',
		icon: '📚'
	},
	'wealthy': {
		id: 'wealthy',
		name: 'Wealthy',
		description: 'Reached 50+ wealth',
		icon: '💰'
	},
	'beloved': {
		id: 'beloved',
		name: 'Beloved',
		description: 'Reached 20+ reputation',
		icon: '❤️'
	},
	'strong': {
		id: 'strong',
		name: 'Strong',
		description: 'Reached 15+ strength',
		icon: '💪'
	},
	'wise': {
		id: 'wise',
		name: 'Wise',
		description: 'Reached 15+ wisdom',
		icon: '🧙'
	},
	'fortunate': {
		id: 'fortunate',
		name: 'Fortunate',
		description: 'Reached 10+ luck',
		icon: '🍀'
	},
	'charismatic': {
		id: 'charismatic',
		name: 'Charismatic',
		description: 'Reached 15+ charisma',
		icon: '✨'
	},
	'forest-explorer': {
		id: 'forest-explorer',
		name: 'Forest Explorer',
		description: 'Visited the forest',
		icon: '🌲'
	},
	'sailor': {
		id: 'sailor',
		name: 'Sailor',
		description: 'Took the boat to sea',
		icon: '⛵'
	}
};

export type PlayerStats = {
	courage: number;
	curiosity: number;
	empathy: number;
	wealth: number;
	reputation: number;
	strength: number;
	wisdom: number;
	luck: number;
	health: number;
	charisma: number;
}

let playerStats: PlayerStats = {
	courage: 0,
	curiosity: 0,
	empathy: 0,
	wealth: 0,
	reputation: 0,
	strength: 0,
	wisdom: 0,
	luck: 0,
	health: 10,
	charisma: 0
};

// --- Characters and Places ---
export type Character = {
	id: string;
	name?: string;
	description?: string;
	// flexible per-character stats (e.g., trust, hostility, mood)
	stats?: Record<string, number>;
	// arbitrary flags specific to the character
	flags?: string[];
}

export type Place = {
	id: string;
	name?: string;
	description?: string;
	// place-specific stats (e.g., danger, prosperity)
	stats?: Record<string, number>;
	flags?: string[];
}

// example defaults - content authors can replace these with their own
let defaultCharacters: Record<string, Character> = {
	'elder': { id: 'elder', name: 'Village Elder', description: 'A wise elder of the village', stats: { trust: 5 }, flags: [] }
};

let defaultPlaces: Record<string, Place> = {
	'village': { id: 'village', name: 'Village', description: 'Your starting village', stats: { prosperity: 10 }, flags: [] }
};

let characters: Record<string, Character> = { ...defaultCharacters };
let places: Record<string, Place> = { ...defaultPlaces };

// Stat limits (clamping rules). Adjust per-stat min/max as desired.
const STAT_LIMITS: Record<keyof PlayerStats, { min: number; max: number }> = {
	courage: { min: 0, max: 100 },
	curiosity: { min: 0, max: 100 },
	empathy: { min: 0, max: 100 },
	wealth: { min: -1000, max: 100000 },
	reputation: { min: -100, max: 100 },
	strength: { min: 0, max: 100 },
	wisdom: { min: 0, max: 100 },
	luck: { min: 0, max: 100 },
	health: { min: 0, max: 100 },
	charisma: { min: 0, max: 100 }
};

const scenes: Record<string, Scene> = {
	start: {
		id: 'start',
		text: 'You stand at the edge of a small village. A path leads into the forest and another to the sea.',
		choices: [
			// Example: flag-based and stat-based branching for the same choice
			{
				id: 'go-forest',
				text: 'Take the forest path',
				// provide multiple conditional outcomes — first matched is used
				outcomes: [
					// if player previously helped villagers, they are welcomed by a guide
					{ conditions: { hasFlags: ['help-villagers'] }, next: 'forest_secret', effects: { reputation: 2 } },
					// if player is especially courageous they find a hidden trail
					{ conditions: { stats: { courage: { min: 3 } } }, next: 'forest', effects: { curiosity: 2, courage: 1 } },
					// fallback outcome
					{ next: 'forest', effects: { courage: 1, curiosity: 1 } }
				]
			},
			{ id: 'go-sea', text: 'Head to the sea', next: 'sea', effects: { curiosity: 2 } },
			// Small helpful action that sets a flag for later branching
			{ id: 'help-villagers', text: 'Help a villager with chores (gain reputation)', next: 'start', effects: { reputation: 5 } }
		]
	},
	forest: {
		id: 'forest',
		text: 'The trees close in. You hear a distant howl. A cabin sits under an old oak.',
		choices: [
			{ id: 'investigate-cabin', text: 'Investigate the cabin', next: 'cabin', effects: { curiosity: 1, reputation: 1 } },
			{ id: 'brave-confront', text: 'Call out the howl (requires courage ≥ 2)', next: 'cabin', effects: { courage: 1, reputation: 2 }, requirements: { courage: { min: 2 } } },
			// Example: choice that leads to different cabin outcomes depending on titles
			{
				id: 'search-forest',
				text: 'Search the forest for signs',
				outcomes: [
					// If you are already a scholar you recognize markings and find treasure
					{ conditions: { hasTitles: ['scholar'] }, next: 'treasure', effects: { wealth: 20, curiosity: 1 } },
					// If not scholar but curious enough you find a map fragment
					{ conditions: { stats: { curiosity: { min: 3 } } }, next: 'cabin', effects: { curiosity: 1 } },
					{ next: 'forest', effects: { curiosity: 1 } }
				]
			},
			{ id: 'return-village', text: 'Return to the village', next: 'start', effects: { reputation: -1 } }
		]
	},
	sea: {
		id: 'sea',
		text: 'Waves lap the shore. A small boat rocks gently. The horizon is clear.',
		choices: [
			// Example: stat and prior-choice branching for boat outcomes
			{
				id: 'take-boat',
				text: 'Take the boat',
				outcomes: [
					// rich passengers get a luxuriously crewing passage
					{ conditions: { stats: { wealth: { min: 5 } } }, next: 'boat_luxury', effects: { curiosity: 2, wealth: -5 } },
					// if player previously visited the forest they know a secret route
					{ conditions: { hasFlags: ['go-forest'] }, next: 'boat', effects: { curiosity: 1 } },
					// fallback
					{ next: 'boat', effects: { courage: 1, wealth: -1 } }
				]
			},
			{ id: 'trade-fisher', text: 'Trade with the fisher (requires wealth ≥ 1)', next: 'sea', effects: { reputation: 1, wealth: -1 }, requirements: { wealth: { min: 1 } } },
			{ id: 'return-village', text: 'Return to the village', next: 'start', effects: { reputation: -1 } }
		]
	},
	cabin: {
		id: 'cabin',
		text: 'Inside the cabin you find a warm fire and a map. Your journey continues elsewhere.',
		choices: [
			// allow searching the map which can branch depending on titles
			{
				id: 'search-map',
				text: 'Examine the map closely',
				outcomes: [
					{ conditions: { hasTitles: ['scholar'] }, next: 'treasure', effects: { curiosity: 1, wealth: 10 } },
					{ next: 'cabin_search', effects: { curiosity: 1 } }
				]
			},
			{ id: 'end', text: 'End the demo (the story continues...)', next: null, effects: { reputation: 1 } }
		]
	},
	boat: {
		id: 'boat',
		text: 'You row out and the wind catches the sails. The world grows wider.',
		choices: [
			{ id: 'end', text: 'End the demo (the story continues...)', next: null, effects: { curiosity: 1 } }
		]
	}
	,
	// Extra scenes used by outcome examples
	village_help: {
		id: 'village_help',
		text: 'You assist the villager and earn their gratitude.',
		choices: [
			{ id: 'back-to-start', text: 'Return to the crossroads', next: 'start' }
		]
	},
	forest_secret: {
		id: 'forest_secret',
		text: 'A friendly guide shows you a hidden glade full of ruins.',
		choices: [
			{ id: 'explore-ruins', text: 'Explore the ruins', next: 'treasure', effects: { curiosity: 2 } },
			{ id: 'leave-glade', text: 'Leave the glade', next: 'forest' }
		]
	},
	boat_luxury: {
		id: 'boat_luxury',
		text: 'You enjoy a pleasant voyage with fine food and company.',
		choices: [
			{ id: 'disembark', text: 'Disembark at a prosperous port', next: 'start', effects: { wealth: 0 } }
		]
	},
	cabin_search: {
		id: 'cabin_search',
		text: 'You find a small clue on the map but its meaning eludes you.',
		choices: [
			{ id: 'continue', text: 'Continue your journey', next: 'start' }
		]
	},
	treasure: {
		id: 'treasure',
		text: 'You discovered a hidden stash — fortune smiles upon you.',
		choices: [
			{ id: 'end', text: 'End the demo with treasure', next: null, effects: { wealth: 50 } }
		]
	}
	,

	// Marketplace and social scenes showcasing entity effects, mul/set ops, and gating
	market: {
		id: 'market',
		text: 'The market bustles with merchants. You see opportunities to trade or listen for rumors.',
		choices: [
			// choice-level character effect: helping a merchant increases their trust
			{ id: 'haggle', text: 'Haggle for a better price', next: 'market', effects: { wealth: -2 }, characterEffects: { 'elder': { trust: { op: 'add', value: 1 } } } },
			{ id: 'listen-rumors', text: 'Listen for rumors (might increase curiosity)', next: 'market', effects: { curiosity: 1 } },
			{ id: 'leave-market', text: 'Leave the market', next: 'start' }
		]
	},

	tavern: {
		id: 'tavern',
		text: 'Smoky air and loud laughter. A dice game draws a crowd.',
		choices: [
			{ id: 'buy-drink', text: 'Buy a drink', next: 'tavern', effects: { reputation: 1, wealth: -1 }, placeEffects: { 'tavern': { prosperity: { op: 'add', value: 1 } } } },
			{ id: 'gamble', text: 'Join the dice game (risky)', next: 'tavern', outcomes: [
				{ conditions: { stats: { luck: { min: 8 } } }, next: 'tavern', effects: { wealth: { op: 'mul', value: 2 } } },
				{ next: 'tavern', effects: { wealth: { op: 'add', value: -3 }, reputation: -1 } }
			] },
			{ id: 'ask-keeper', text: 'Ask the barkeep about work (requires reputation ≥ 2)', next: 'guild', requirements: { reputation: { min: 2 } }, onFail: 'disable' }
		]
	},

	blacksmith: {
		id: 'blacksmith',
		text: 'The forge glows. The smith eyes your gear.',
		choices: [
			// outcome-level characterEffects and fallback
			{ id: 'buy-sword', text: 'Commission a sword', outcomes: [
				{ conditions: { stats: { wealth: { min: 10 } } }, next: 'blacksmith', effects: { strength: { op: 'add', value: 2 }, wealth: { op: 'add', value: -10 } }, characterEffects: { 'blacksmith': { favor: { op: 'add', value: 1 } } } },
				{ next: 'blacksmith', effects: { wealth: { op: 'add', value: -2 } } }
			] },
			{ id: 'repair', text: 'Ask for a quick repair', next: 'blacksmith', effects: { wealth: { op: 'add', value: -2 } } },
			// hidden path that only appears if strength is high enough
			{ id: 'secret-path', text: 'Squeeze through the smithy backdoor (requires strength ≥ 8)', next: 'treasure', requirements: { strength: { min: 8 } }, onFail: 'hide' }
		]
	},

	guild: {
		id: 'guild',
		text: 'A noticeboard lists tasks. You can take a job that will influence townsfolk and places.',
		choices: [
			{ id: 'take-quest', text: 'Take a local quest (gain flags)', next: 'quest-hunt', effects: { courage: 1 } },
			{ id: 'become-member', text: 'Apply for guild membership (requires reputation ≥ 5)', next: 'guild', requirements: { reputation: { min: 5 } }, onFail: 'disable' }
		]
	},

	quest_hunt: {
		id: 'quest-hunt',
		text: 'You accept a hunt to clear pests from nearby farms. Success will change place prosperity and village opinion.',
		choices: [
			{ id: 'hunt-success', text: 'Succeed in the hunt', next: 'village', effects: { reputation: 3 }, placeEffects: { 'village': { prosperity: { op: 'add', value: 5 } } } },
			{ id: 'hunt-fail', text: 'Fail the hunt', next: 'village', effects: { reputation: -2 }, placeEffects: { 'village': { prosperity: { op: 'add', value: -2 } } } }
		]
	},

	shrine: {
		id: 'shrine',
		text: 'An ancient shrine hums with energy. Rituals here can alter stats in dramatic ways.',
		choices: [
			{ id: 'offerings', text: 'Leave an offering (set health to a fixed value)', next: 'shrine', effects: { health: { op: 'set', value: 20 } } },
			{ id: 'ritual', text: 'Participate in a risky ritual', next: 'shrine', outcomes: [
				{ conditions: { stats: { wisdom: { min: 5 } } }, next: 'shrine', effects: { charisma: { op: 'add', value: 2 } } },
				{ next: 'shrine', effects: { health: { op: 'add', value: -5 } } }
			] }
		]
	},

	// Provide a connective scene back to village so examples are reachable
	village: {
		id: 'village',
		text: 'You are back in the village square. People bustle about.',
		choices: [
			{ id: 'go-market', text: 'Visit the market', next: 'market' },
			{ id: 'go-tavern', text: 'Go to the tavern', next: 'tavern' },
			{ id: 'go-blacksmith', text: 'Visit the blacksmith', next: 'blacksmith' },
			{ id: 'go-shrine', text: 'Visit the shrine', next: 'shrine' },
			{ id: 'back-start', text: 'Return to the crossroads', next: 'start' }
		]
	}

}
export function initStory(): Scene {
	currentSceneId = 'start';
	return getCurrentScene();
}

export function getCurrentScene(): Scene {
	if (!currentSceneId) {
		return initStory();
	}
	const scene = scenes[currentSceneId];
	if (!scene) {
		// fallback to start if something is wrong
		currentSceneId = 'start';
		return scenes.start;
	}
	return scene;
}

// Advances the story based on a choice id. Returns the new scene, or null if the choice was invalid.
export function choose(choiceId: string): Scene | null {
	const scene = getCurrentScene();
	const choice = scene.choices.find(c => c.id === choiceId);
	if (!choice) return null;
	// Determine outcome: support conditional outcomes that depend on stats or prior choices
	let selectedOutcome: ChoiceOutcome | null = null;
	if (choice.outcomes && choice.outcomes.length > 0) {
		for (const out of choice.outcomes) {
			const cond = out.conditions;
			if (!cond) {
				// bare outcome without conditions — take it
				selectedOutcome = out;
				break;
			}
			// check stats conditions
			let statsOk = true;
			if (cond.stats) {
				const chk = checkRequirements(cond.stats);
				statsOk = chk.ok;
			}
			// check flags (previous choices)
			let flagsOk = true;
			if (cond.hasFlags && cond.hasFlags.length > 0) {
				for (const f of cond.hasFlags) {
					if (!chosenFlags.has(f)) {
						flagsOk = false;
						break;
					}
				}
			}
			// check titles
			let titlesOk = true;
			if (cond.hasTitles && cond.hasTitles.length > 0) {
				for (const t of cond.hasTitles) {
					if (!earnedTitles.has(t)) { titlesOk = false; break; }
				}
			}
			if (statsOk && flagsOk && titlesOk) {
				selectedOutcome = out;
				break;
			}
		}
	}

	// apply any effects from the selected outcome or fallback to the choice.effects
	if (selectedOutcome && selectedOutcome.effects) {
		applyEffects(selectedOutcome.effects);
	} else if (choice.effects) {
		applyEffects(choice.effects);
	}

	// apply character/place effects if present
	if (selectedOutcome && selectedOutcome.characterEffects) {
		applyCharacterEffects(selectedOutcome.characterEffects);
	} else if (choice.characterEffects) {
		applyCharacterEffects(choice.characterEffects);
	}

	if (selectedOutcome && selectedOutcome.placeEffects) {
		applyPlaceEffects(selectedOutcome.placeEffects);
	} else if (choice.placeEffects) {
		applyPlaceEffects(choice.placeEffects);
	}

	// record that this choice was taken (for future conditional checks)
	chosenFlags.add(choiceId);
	// check for earned titles based on stats or choice-triggered titles
	const earnedBefore = new Set(earnedTitles);
	checkTitleTriggers();
	const newlyEarned = Array.from(earnedTitles).filter(id => !earnedBefore.has(id));
	// attach newly earned titles to the result for UI notification
	const resolvedNext = (selectedOutcome && (selectedOutcome.next !== undefined)) ? selectedOutcome.next : choice.next;
	if (resolvedNext === undefined || resolvedNext === null) {
		// story end
		currentSceneId = null;
		const endScene: any = {
			id: 'end',
			text: 'The story ends. Thank you for playing.',
			choices: []
		};
		endScene._newlyEarnedTitles = newlyEarned.map(id => TITLES[id]);
		return endScene;
	}
	currentSceneId = resolvedNext;
	const nextScene: any = getCurrentScene();
	nextScene._newlyEarnedTitles = newlyEarned.map(id => TITLES[id]);
	return nextScene;
}

const STORAGE_KEY = 'simplejourney.currentScene';

/** Save current progress (current scene id) to localStorage */
export function saveProgress(key = STORAGE_KEY): void {
	if (typeof window === 'undefined' || !window.localStorage) return;
	const payload = {
		sceneId: currentSceneId,
		stats: playerStats,
		titles: Array.from(earnedTitles),
		flags: Array.from(chosenFlags),
		characters: characters,
		places: places
	};
	window.localStorage.setItem(key, JSON.stringify(payload));
}

/** Restore progress from localStorage. Returns the restored or initial scene. */
export function restoreProgress(key = STORAGE_KEY): Scene {
	if (typeof window === 'undefined' || !window.localStorage) return initStory();
	const raw = window.localStorage.getItem(key);
	if (raw) {
		try {
			const parsed = JSON.parse(raw) as { sceneId: string | null; stats?: PlayerStats; titles?: string[]; flags?: string[]; characters?: Record<string, Character>; places?: Record<string, Place> };
			if (parsed && parsed.sceneId && scenes[parsed.sceneId]) {
				currentSceneId = parsed.sceneId;
			}
			if (parsed && parsed.stats) {
				playerStats = parsed.stats;
			}
			if (parsed && parsed.titles && Array.isArray(parsed.titles)) {
				earnedTitles = new Set(parsed.titles);
			}
			if (parsed && (parsed as any).flags && Array.isArray((parsed as any).flags)) {
				chosenFlags = new Set((parsed as any).flags);
			}
			// restore characters/places if present
			if (parsed && parsed.characters && typeof parsed.characters === 'object') {
				characters = parsed.characters;
			}
			if (parsed && parsed.places && typeof parsed.places === 'object') {
				places = parsed.places;
			}
		} catch (e) {
			// support legacy saved value that may be a plain scene id string
			if (raw && scenes[raw]) {
				currentSceneId = raw;
			}
		}
	}
	return getCurrentScene();
}

/** Clear saved progress */
export function resetProgress(key = STORAGE_KEY): void {
	if (typeof window === 'undefined' || !window.localStorage) return;
	window.localStorage.removeItem(key);
	currentSceneId = null;
	// reset stats as well
	playerStats = { courage: 0, curiosity: 0, empathy: 0, wealth: 0, reputation: 0, strength: 0, wisdom: 0, luck: 0, health: 10, charisma: 0 };
	// reset titles
	earnedTitles.clear();
	// reset choice flags
	chosenFlags.clear();
	// reset characters and places to defaults
	characters = { ...defaultCharacters };
	places = { ...defaultPlaces };
}
/** Apply a set of effects (supports numeric deltas or operation objects) to player stats. */
export function applyEffects(effects: Record<string, number | EffectOp>): void {
	Object.keys(effects).forEach(k => {
		const raw = effects[k];
		// @ts-ignore
		const current = playerStats[k] || 0;
		if (typeof raw === 'number') {
			// simple additive delta
			// @ts-ignore
			playerStats[k] = current + raw;
		} else if (raw && typeof raw === 'object') {
			const op = raw as EffectOp;
			if (op.op === 'set') {
				// @ts-ignore
				playerStats[k] = op.value;
			} else if (op.op === 'mul') {
				// @ts-ignore
				playerStats[k] = Math.floor(current * op.value);
			} else { // add
				// @ts-ignore
				playerStats[k] = current + op.value;
			}
		}
		// clamp to stat limits if this stat exists in STAT_LIMITS
		// @ts-ignore
		if (k in STAT_LIMITS) {
			// @ts-ignore
			const limits = STAT_LIMITS[k];
			// @ts-ignore
			if (playerStats[k] < limits.min) playerStats[k] = limits.min;
			// @ts-ignore
			if (playerStats[k] > limits.max) playerStats[k] = limits.max;
		}
	});
}

export function getStats(): PlayerStats {
	return { ...playerStats };
}

export function setStats(stats: Partial<PlayerStats>): void {
	playerStats = { ...playerStats, ...stats };
	// enforce clamps when manually setting
	(Object.keys(playerStats) as Array<keyof PlayerStats>).forEach(k => {
		if (k in STAT_LIMITS) {
			// @ts-ignore
			const lim = STAT_LIMITS[k];
			// @ts-ignore
			if (playerStats[k] < lim.min) playerStats[k] = lim.min;
			// @ts-ignore
			if (playerStats[k] > lim.max) playerStats[k] = lim.max;
		}
	});
}

/** Check whether provided requirements object is satisfied by current player stats. */
export function checkRequirements(reqs?: Record<string, ChoiceRequirement>): { ok: boolean; unmet: string[] } {
	if (!reqs) return { ok: true, unmet: [] };
	const unmet: string[] = [];
	Object.keys(reqs).forEach(k => {
		const r = reqs[k];
		// @ts-ignore
		const val = playerStats[k] || 0;
		if (typeof r.min === 'number' && val < r.min) unmet.push(`${k} ≥ ${r.min}`);
		if (typeof r.max === 'number' && val > r.max) unmet.push(`${k} ≤ ${r.max}`);
	});
	return { ok: unmet.length === 0, unmet };
}

/** Check for and automatically earn titles based on stat thresholds. */
function checkTitleTriggers(): void {
	const stats = getStats();
	// stat-based titles
	if (stats.courage >= 10) earnedTitles.add('brave-soul');
	if (stats.curiosity >= 10) earnedTitles.add('scholar');
	if (stats.wealth >= 50) earnedTitles.add('wealthy');
	if (stats.reputation >= 20) earnedTitles.add('beloved');
	if (stats.strength >= 15) earnedTitles.add('strong');
	if (stats.wisdom >= 15) earnedTitles.add('wise');
	if (stats.luck >= 10) earnedTitles.add('fortunate');
	if (stats.charisma >= 15) earnedTitles.add('charismatic');
	// choice-based titles (triggered by scene id)
	if (currentSceneId === 'forest') earnedTitles.add('forest-explorer');
	if (currentSceneId === 'boat') earnedTitles.add('sailor');
}

export function getEarnedTitles(): Title[] {
	return Array.from(earnedTitles).map(id => TITLES[id]).filter(t => !!t);
}

export function awardTitle(titleId: string): void {
	if (titleId in TITLES) {
		earnedTitles.add(titleId);
	}
}

export function removeTitle(titleId: string): void {
	earnedTitles.delete(titleId);
}

export function getAllTitles(): Title[] {
	return Object.values(TITLES);
}

// --- Character & Place API ---
export function getCharacter(id: string): Character | undefined {
	return characters[id];
}

export function getAllCharacters(): Character[] {
	return Object.values(characters);
}

export function addOrUpdateCharacter(char: Character): void {
	characters[char.id] = { ...characters[char.id], ...char };
}

export function removeCharacter(id: string): void {
	delete characters[id];
}

export function modifyCharacterStat(id: string, statKey: string, delta: number): void {
	if (!characters[id]) characters[id] = { id, stats: {} };
	if (!characters[id].stats) characters[id].stats = {};
	const cur = characters[id].stats![statKey] || 0;
	characters[id].stats![statKey] = cur + delta;
}

export function setCharacterStat(id: string, statKey: string, value: number): void {
	if (!characters[id]) characters[id] = { id, stats: {} };
	if (!characters[id].stats) characters[id].stats = {};
	characters[id].stats![statKey] = value;
}

export function getPlace(id: string): Place | undefined {
	return places[id];
}

export function getAllPlaces(): Place[] {
	return Object.values(places);
}

export function addOrUpdatePlace(p: Place): void {
	places[p.id] = { ...places[p.id], ...p };
}

export function removePlace(id: string): void {
	delete places[id];
}

export function modifyPlaceStat(id: string, statKey: string, delta: number): void {
	if (!places[id]) places[id] = { id, stats: {} };
	if (!places[id].stats) places[id].stats = {};
	const cur = places[id].stats![statKey] || 0;
	places[id].stats![statKey] = cur + delta;
}

export function setPlaceStat(id: string, statKey: string, value: number): void {
	if (!places[id]) places[id] = { id, stats: {} };
	if (!places[id].stats) places[id].stats = {};
	places[id].stats![statKey] = value;
}

/** Apply effects to a character or place stats object (supports numeric deltas and EffectOp). */
function applyEntityEffects(targetStats: Record<string, number> | undefined, effects: Record<string, number | EffectOp>): Record<string, number> {
	const stats = targetStats ? { ...targetStats } : {};
	Object.keys(effects).forEach(k => {
		const raw = effects[k];
		const current = stats[k] || 0;
		if (typeof raw === 'number') {
			stats[k] = current + raw;
		} else if (raw && typeof raw === 'object') {
			const op = raw as EffectOp;
			if (op.op === 'set') {
				stats[k] = op.value;
			} else if (op.op === 'mul') {
				stats[k] = Math.floor(current * op.value);
			} else {
				stats[k] = current + op.value;
			}
		}
	});
	return stats;
}

/** Apply characterEffects map where keys are character ids and values are stat-effects. */
function applyCharacterEffects(effectsMap?: Record<string, Record<string, number | EffectOp>>): void {
	if (!effectsMap) return;
	Object.keys(effectsMap).forEach(charId => {
		const effects = effectsMap[charId];
		const cur = characters[charId] ? characters[charId].stats || {} : {};
		const updated = applyEntityEffects(cur, effects);
		if (!characters[charId]) characters[charId] = { id: charId, stats: {} };
		characters[charId].stats = updated;
	});
}

/** Apply placeEffects map where keys are place ids and values are stat-effects. */
function applyPlaceEffects(effectsMap?: Record<string, Record<string, number | EffectOp>>): void {
	if (!effectsMap) return;
	Object.keys(effectsMap).forEach(placeId => {
		const effects = effectsMap[placeId];
		const cur = places[placeId] ? places[placeId].stats || {} : {};
		const updated = applyEntityEffects(cur, effects);
		if (!places[placeId]) places[placeId] = { id: placeId, stats: {} };
		places[placeId].stats = updated;
	});
}
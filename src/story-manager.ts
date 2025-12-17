export type EffectOp = { op: 'set' | 'mul' | 'add'; value: number };

export type ChoiceRequirement = {
	min?: number;
	max?: number;
}

export type RealLifeChallenge = {
	id: string;
	type: 'exercise' | 'cooking' | 'creative' | 'social' | 'learning' | 'meditation' | 'physical';
	title: string;
	description: string;
	instructions: string;
	durationMinutes?: number;
	verificationMethod: 'timer' | 'photo' | 'honor' | 'checklist';
	checklistItems?: string[];
	rewards?: {
		stats?: Record<string, number | EffectOp>;
		hiddenAttributes?: Record<string, number | string | boolean>;
		message?: string;
	};
}

export type OutcomeCondition = {
	// stat based requirements (same shape as Choice.requirements)
	stats?: Record<string, ChoiceRequirement>;
	// require that certain choices were previously taken
	hasFlags?: string[];
	// require that certain titles are already earned
	hasTitles?: string[];
	// require that certain hidden attributes match specified values
	hasHiddenAttributes?: Record<string, number | string | boolean>;
	// custom function for complex conditions
	custom?: () => boolean;
}

export type ConditionalText = {
	// the text to display if conditions are met
	text: string;
	// conditions that must be met for this text variant
	conditions?: OutcomeCondition;
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
	// optional hidden attributes set when this outcome is selected (not shown to user)
	hiddenEffects?: Record<string, number | string | boolean>;
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
	// optional hidden attributes set when this choice is taken (fallback if outcome doesn't provide)
	hiddenEffects?: Record<string, number | string | boolean>;
	// optional real-life challenge that must be completed to unlock this choice
	realLifeChallenge?: RealLifeChallenge;
}

export type Scene = {
	id: string;
	// base text (used if no textVariants match or as fallback)
	text: string;
	// optional array of conditional text variants - first matching variant is used
	textVariants?: ConditionalText[];
	choices: Choice[];
}

export type Title = {
	id: string;
	name: string;
	description: string;
	icon?: string;
}

export type RewardCondition = {
	// reward earned by reaching a specific scene
	sceneId?: string;
	// reward earned by obtaining specific titles (all must be earned)
	titles?: string[];
	// reward earned by meeting stat thresholds (all must be met)
	stats?: Record<string, ChoiceRequirement>;
	// reward earned by having specific flags set
	flags?: string[];
	// reward earned by having specific hidden attributes
	hiddenAttributes?: Record<string, number | string | boolean>;
	// custom condition function
	custom?: () => boolean;
}

export type Reward = {
	id: string;
	name: string;
	description: string;
	icon?: string;
	// conditions that must be met to earn this reward
	condition: RewardCondition;
	// optional message shown when reward is earned
	message?: string;
}

let currentSceneId: string | null = null;
let previousSceneId: string | null = null;
let earnedTitles: Set<string> = new Set();
let earnedRewards: Set<string> = new Set();
let playerName: string = '';
// record of past choices taken (by id) to enable conditional branching
let chosenFlags: Set<string> = new Set();
// hidden attributes - not shown to user but available for conditional logic
// supports number, string, or boolean values
let hiddenAttributes: Map<string, number | string | boolean> = new Map();

export function setPlayerName(name: string): void {
	playerName = name;
}

export function getPlayerName(): string {
	return playerName;
}
// track completed real-life challenges
let completedChallenges: Map<string, { completedAt: number; verified: boolean }> = new Map();
// track active challenges
let activeChallenges: Map<string, { startedAt: number; choiceId: string }> = new Map();

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

// Available rewards in the game
const REWARDS: Record<string, Reward> = {
	'coffee-machine': {
		id: 'coffee-machine',
		name: 'Coffee Machine (Keurig)',
		description: 'Completed the prologue',
		icon: '☕',
		condition: { sceneId: 'act1_start' },
		message: 'Congratulations! You\'ve completed the prologue. Reward unlocked: Coffee Machine (Keurig)'
	},
	'storage-containers': {
		id: 'storage-containers',
		name: 'Storage Container Variety Pack',
		description: 'Earned 100+ gold',
		icon: '📦',
		condition: { stats: { wealth: { min: 100 } } },
		message: 'Your wealth management skills are excellent! Reward unlocked: Storage Container Variety Pack (Baking Soda, Drink, Basement)'
	},
	'massage-relic': {
		id: 'massage-relic',
		name: 'Massage Relic (3 min nightly for 1 year)',
		description: 'Completed Act 2',
		icon: '💆',
		condition: { sceneId: 'act3_start' },
		message: 'You\'ve navigated the political intrigue of Act 2! Reward unlocked: Massage Relic (3 minute massage nightly on request for 1 year)'
	},
	'massage-30min': {
		id: 'massage-30min',
		name: '30 Minute Massage',
		description: 'Reached 20+ in any stat',
		icon: '💆',
		condition: {
			custom: () => {
				const stats = getStats();
				return Object.values(stats).some(val => val >= 20);
			}
		},
		message: 'You\'ve achieved mastery in a skill! Reward unlocked: 30 Minute Massage'
	},
	'massage-15min': {
		id: 'massage-15min',
		name: '15 Minute Massage',
		description: 'Earned three different titles',
		icon: '💆',
		condition: {
			custom: () => {
				return getEarnedTitles().length >= 3;
			}
		},
		message: 'Your accomplishments are recognized! Reward unlocked: 15 Minute Massage'
	},
	'massage-5min': {
		id: 'massage-5min',
		name: '5 Minute Massage',
		description: 'Made a romance choice',
		icon: '💆',
		condition: { 
			custom: () => {
				return chosenFlags.has('vale_romance:15') || chosenFlags.has('ash_romance:15') || 
				       chosenFlags.has('rook_romance:15') || chosenFlags.has('vale_romance:20') || 
				       chosenFlags.has('ash_romance:20') || chosenFlags.has('rook_romance:20');
			}
		},
		message: 'You\'ve opened your heart! Reward unlocked: 5 Minute Massage'
	},
	'office-chair': {
		id: 'office-chair',
		name: 'New Chair (Office)',
		description: 'Completed Act 3',
		icon: '🪑',
		condition: { sceneId: 'act4_start' },
		message: 'You\'ve conquered the Crystal Heart quest! Reward unlocked: New Chair (Office)'
	},
	'headset': {
		id: 'headset',
		name: 'New Headset',
		description: 'Accepted your heritage at Silverwood',
		icon: '🎧',
		condition: { flags: ['identity_accepted:true'] },
		message: 'You\'ve embraced your true identity! Reward unlocked: New Headset'
	},
	'book-shopping': {
		id: 'book-shopping',
		name: 'Book Shopping Spree',
		description: 'Explored the manor library',
		icon: '📚',
		condition: { sceneId: 'library_discovery' },
		message: 'You\'ve discovered the vast knowledge within your ancestral library! Reward unlocked: Book Shopping Spree'
	},
	'intimate-toy': {
		id: 'intimate-toy',
		name: 'New Intimate Toy Purchase',
		description: 'Achieved high romance with a companion',
		icon: '💝',
		condition: {
			custom: () => {
				const valeRomance = Number(hiddenAttributes.get('vale_romance')) || 0;
				const ashRomance = Number(hiddenAttributes.get('ash_romance')) || 0;
				const rookRomance = Number(hiddenAttributes.get('rook_romance')) || 0;
				return valeRomance >= 25 || ashRomance >= 25 || rookRomance >= 25;
			}
		},
		message: 'Your deep connection with your companion is special! Reward unlocked: New Intimate Toy Purchase'
	},
	'spending-money': {
		id: 'spending-money',
		name: 'Guilt-free Spending Money',
		description: 'Began the quest for Crystal Heart fragments',
		icon: '💸',
		condition: { sceneId: 'crystal_hunt_start' },
		message: 'The hunt for the Crystal Heart begins! Reward unlocked: Guilt-free Spending Money'
	}
};

export type PlayerStats = {
	courage: number;
	curiosity: number;
	empathy: number;
	wealth: number;
	reputation: number;
	strength: number;
	dexterity: number;
	wisdom: number;
	luck: number;
	health: number;
	charisma: number;
	magical_intelligence: number;
}

let playerStats: PlayerStats = {
	courage: 0,
	curiosity: 0,
	empathy: 0,
	wealth: 0,
	reputation: 0,
	strength: 0,
	dexterity: 0,
	wisdom: 0,
	luck: 0,
	health: 10,
	charisma: 0,
	magical_intelligence: 0
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
	dexterity: { min: 0, max: 100 },
	wisdom: { min: 0, max: 100 },
	luck: { min: 0, max: 100 },
	health: { min: 0, max: 100 },
	charisma: { min: 0, max: 100 },
	magical_intelligence: { min: 0, max: 100 }
};

import {
	StartScene,
	ForestScene,
	ForestSecretScene,
	SeaScene,
	BoatScene,
	BoatLuxuryScene,
	CabinScene,
	CabinSearchScene,
	TreasureScene,
	VillageScene,
	MarketScene,
	TavernScene,
	BlacksmithScene,
	GuildScene,
	QuestHuntScene,
	VillageHelpScene,
	ShrineScene
} from './scenes';

// Import all story scenes
import * as PrologueScenes from './scenes/prologue/p1-humble-beginnings';
import * as P1bScenes from './scenes/prologue/p1b-weapon-choice';
import * as P2Scenes from './scenes/prologue/p2-meet-vale';
import * as P3Scenes from './scenes/prologue/p3-bandit-encounter';
import * as P4Scenes from './scenes/prologue/p4-shadow-beast';
import * as P5Scenes from './scenes/prologue/p5-meet-ash';
import * as P6Scenes from './scenes/prologue/p6-mercenary-training';
import * as P7Scenes from './scenes/prologue/p7-meet-rook';
import * as P8Scenes from './scenes/prologue/p8-tournament';
import * as P9Scenes from './scenes/prologue/p9-magic-awakens';
import * as P10Scenes from './scenes/prologue/p10-meet-whisper';
import * as P11Scenes from './scenes/prologue/p11-guild-quest';
import * as P12Scenes from './scenes/prologue/p12-road-to-silverwood';
import * as P13Scenes from './scenes/prologue/p13-discovery';

import * as Act1Scenes from './scenes/act1/a1-manor-exploration';
import * as A2Scenes from './scenes/act1/a2-rowan-introduction';
import * as A3Scenes from './scenes/act1/a3-first-political-meeting';
import * as A4Scenes from './scenes/act1/a4-ancestral-spirit';
import * as A5Scenes from './scenes/act1/a5-mysterious-follower';
import * as A6Scenes from './scenes/act1/a6-shadow-beast-attack';
import * as A7Scenes from './scenes/act1/a7-agent-revealed';
import * as A8Scenes from './scenes/act1/a8-seraphine-introduction';

import * as B1Scenes from './scenes/act2/b1-kingdom-briefing';
import * as B2Scenes from './scenes/act2/b2-lyra-arrival';
import * as B3Scenes from './scenes/act2/b3-faction-choice';
import * as B4Scenes from './scenes/act2/b4-faction-paths';
import * as B5Scenes from './scenes/act2/b5-meeting-companions';
import * as B6Scenes from './scenes/act2/b6-market-assassination';

import * as C1Scenes from './scenes/act3/c1-crystal-hunt';
import * as C2Scenes from './scenes/act3/c2-companion-quests';
import * as C3Scenes from './scenes/act3/c3-crystal-fragments-1';
import * as C4Scenes from './scenes/act3/c4-crystal-fragments-2';
import * as C5Scenes from './scenes/act3/c5-companion-quests-1';
import * as C6Scenes from './scenes/act3/c6-companion-quests-2';
import * as C7Scenes from './scenes/act3/c7-romance-dates';
import * as C8Scenes from './scenes/act3/c8-side-quests';
import * as C9Scenes from './scenes/act3/c9-magical-training';

import * as D1Scenes from './scenes/act4/d1-climax-endings';
import * as D2Scenes from './scenes/act4/d2-unity-path';
import * as D3Scenes from './scenes/act4/d3-all-endings';
import * as D4Scenes from './scenes/act4/d4-epilogue';

// Import relationship scenes
import * as SageValeAshRelationships from './scenes/relationships/sage-vale-ash-relationships';
import * as RowanRelationships from './scenes/relationships/rowan-relationship';
import * as LyraRelationships from './scenes/relationships/lyra-relationship';
import * as SeraphineRelationships from './scenes/relationships/seraphine-relationship';
import * as KieranRelationships from './scenes/relationships/kieran-relationship';
import * as FinnRelationships from './scenes/relationships/finn-relationship';

// Helper function to extract all exported scenes from a module
function extractScenes(module: any): Scene[] {
	return Object.values(module).filter((val: any) => 
		val && typeof val === 'object' && 'id' in val && 'text' in val && 'choices' in val
	) as Scene[];
}

// Build scene registry from all imported modules
const storyScenes = [
	...extractScenes(PrologueScenes),
	...extractScenes(P1bScenes),
	...extractScenes(P2Scenes),
	...extractScenes(P3Scenes),
	...extractScenes(P4Scenes),
	...extractScenes(P5Scenes),
	...extractScenes(P6Scenes),
	...extractScenes(P7Scenes),
	...extractScenes(P8Scenes),
	...extractScenes(P9Scenes),
	...extractScenes(P10Scenes),
	...extractScenes(P11Scenes),
	...extractScenes(P12Scenes),
	...extractScenes(P13Scenes),
	...extractScenes(Act1Scenes),
	...extractScenes(A2Scenes),
	...extractScenes(A3Scenes),
	...extractScenes(A4Scenes),
	...extractScenes(A5Scenes),
	...extractScenes(A6Scenes),
	...extractScenes(A7Scenes),
	...extractScenes(A8Scenes),
	...extractScenes(B1Scenes),
	...extractScenes(B2Scenes),
	...extractScenes(B3Scenes),
	...extractScenes(B4Scenes),
	...extractScenes(B5Scenes),
	...extractScenes(B6Scenes),
	...extractScenes(C1Scenes),
	...extractScenes(C2Scenes),
	...extractScenes(C3Scenes),
	...extractScenes(C4Scenes),
	...extractScenes(C5Scenes),
	...extractScenes(C6Scenes),
	...extractScenes(C7Scenes),
	...extractScenes(C8Scenes),
	...extractScenes(C9Scenes),
	...extractScenes(D1Scenes),
	...extractScenes(D2Scenes),
	...extractScenes(D3Scenes),
	...extractScenes(D4Scenes),
	// Relationship scenes
	...extractScenes(SageValeAshRelationships),
	...extractScenes(RowanRelationships),
	...extractScenes(LyraRelationships),
	...extractScenes(SeraphineRelationships),
	...extractScenes(KieranRelationships),
	...extractScenes(FinnRelationships)
];

// Register all scenes into a scene map
const scenes: Record<string, Scene> = {
	start: StartScene,
	forest: ForestScene,
	forest_secret: ForestSecretScene,
	sea: SeaScene,
	boat: BoatScene,
	boat_luxury: BoatLuxuryScene,
	cabin: CabinScene,
	cabin_search: CabinSearchScene,
	treasure: TreasureScene,
	village: VillageScene,
	market: MarketScene,
	tavern: TavernScene,
	blacksmith: BlacksmithScene,
	guild: GuildScene,
	'quest-hunt': QuestHuntScene,
	village_help: VillageHelpScene,
	shrine: ShrineScene
};

// Add all story scenes to the registry
storyScenes.forEach(scene => {
	scenes[scene.id] = scene;
});

export function initStory(): Scene {
	currentSceneId = 'prologue_start';
	previousSceneId = null; // no previous scene at journey start
	return getCurrentScene();
}

/** Evaluate conditional text variants and return the first matching text, or the base text as fallback. */
function evaluateTextVariants(scene: Scene): string {
	if (!scene.textVariants || scene.textVariants.length === 0) {
		return scene.text;
	}
	
	for (const variant of scene.textVariants) {
		const cond = variant.conditions;
		if (!cond) {
			// no conditions means this variant always matches
			return variant.text;
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
				if (!earnedTitles.has(t)) {
					titlesOk = false;
					break;
				}
			}
		}
		
		// check hidden attributes
		let hiddenAttrsOk = true;
		if (cond.hasHiddenAttributes) {
			for (const [key, value] of Object.entries(cond.hasHiddenAttributes)) {
				if (hiddenAttributes.get(key) !== value) {
					hiddenAttrsOk = false;
					break;
				}
			}
		}
		
		// check custom function
		let customOk = true;
		if (cond.custom && typeof cond.custom === 'function') {
			try {
				customOk = cond.custom();
			} catch (e) {
			customOk = false;
		}
	}
	
	if (statsOk && flagsOk && titlesOk && hiddenAttrsOk && customOk) {
		return variant.text;
	}
}	// no variants matched, return base text
	return scene.text;
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
	// evaluate conditional text and return a scene with the resolved text
	const resolvedText = evaluateTextVariants(scene);
	return { ...scene, text: resolvedText };
}

/** Get the previous scene ID, or null if there is no previous scene (e.g., at journey start). */
export function getPreviousSceneId(): string | null {
	return previousSceneId;
}

/** Get the previous scene object, or null if there is no previous scene. */
export function getPreviousScene(): Scene | null {
	if (!previousSceneId || !scenes[previousSceneId]) {
		return null;
	}
	const scene = scenes[previousSceneId];
	const resolvedText = evaluateTextVariants(scene);
	return { ...scene, text: resolvedText };
}

// Advances the story based on a choice id. Returns the new scene, or null if the choice was invalid.
export function choose(choiceId: string): { scene: Scene | null; newRewards: Reward[] } {
	const scene = getCurrentScene();
	const choice = scene.choices.find(c => c.id === choiceId);
	if (!choice) return { scene: null, newRewards: [] };
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

	// apply hidden effects if present
	if (selectedOutcome && selectedOutcome.hiddenEffects) {
		applyHiddenEffects(selectedOutcome.hiddenEffects);
	} else if (choice.hiddenEffects) {
		applyHiddenEffects(choice.hiddenEffects);
	}

	// record that this choice was taken (for future conditional checks)
	chosenFlags.add(choiceId);
	// check for earned titles based on stats or choice-triggered titles
	const earnedBefore = new Set(earnedTitles);
	checkTitleTriggers();
	const newlyEarned = Array.from(earnedTitles).filter(id => !earnedBefore.has(id));
	
	// Check and award any applicable rewards
	const newRewards = checkAndAwardRewards();
	
	// attach newly earned titles to the result for UI notification
	const resolvedNext = (selectedOutcome && (selectedOutcome.next !== undefined)) ? selectedOutcome.next : choice.next;
	if (resolvedNext === undefined || resolvedNext === null) {
		// story end - track previous scene even at end
		previousSceneId = currentSceneId;
		currentSceneId = null;
		const endScene: any = {
			id: 'end',
			text: 'The story ends. Thank you for playing.',
			choices: []
		};
		endScene._newlyEarnedTitles = newlyEarned.map(id => TITLES[id]);
		return { scene: endScene, newRewards };
	}
	// track previous scene before updating current
	previousSceneId = currentSceneId;
	currentSceneId = resolvedNext;
	const nextScene: any = getCurrentScene();
	nextScene._newlyEarnedTitles = newlyEarned.map(id => TITLES[id]);
	return { scene: nextScene, newRewards };
}

const STORAGE_KEY = 'simplejourney.currentScene';

/** Save current progress (current scene id) to localStorage */
export function saveProgress(key = STORAGE_KEY): void {
	if (typeof window === 'undefined' || !window.localStorage) return;
	const payload = {
		sceneId: currentSceneId,
		previousSceneId: previousSceneId,
		playerName: playerName,
		stats: playerStats,
		titles: Array.from(earnedTitles),
		rewards: Array.from(earnedRewards),
		flags: Array.from(chosenFlags),
		characters: characters,
		places: places,
		hiddenAttributes: Array.from(hiddenAttributes.entries()),
		completedChallenges: Array.from(completedChallenges.entries()),
		activeChallenges: Array.from(activeChallenges.entries())
	};
	window.localStorage.setItem(key, JSON.stringify(payload));
}

/** Restore progress from localStorage. Returns the restored or initial scene. */
export function restoreProgress(key = STORAGE_KEY): Scene {
	if (typeof window === 'undefined' || !window.localStorage) return initStory();
	const raw = window.localStorage.getItem(key);
	if (raw) {
		try {
			const parsed = JSON.parse(raw) as { sceneId: string | null; previousSceneId?: string | null; playerName?: string; stats?: PlayerStats; titles?: string[]; flags?: string[]; characters?: Record<string, Character>; places?: Record<string, Place>; hiddenAttributes?: [string, number | string | boolean][] };
			if (parsed && parsed.sceneId && scenes[parsed.sceneId]) {
				currentSceneId = parsed.sceneId;
			}
			// restore previous scene id if present
			if (parsed && parsed.previousSceneId !== undefined) {
				previousSceneId = parsed.previousSceneId;
			}
			// restore player name if present
			if (parsed && parsed.playerName) {
				playerName = parsed.playerName;
			}
			if (parsed && parsed.stats) {
				playerStats = parsed.stats;
			}
			if (parsed && parsed.titles && Array.isArray(parsed.titles)) {
				earnedTitles = new Set(parsed.titles);
			}
			if (parsed && (parsed as any).rewards && Array.isArray((parsed as any).rewards)) {
				earnedRewards = new Set((parsed as any).rewards);
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
			// restore hidden attributes if present
			if (parsed && parsed.hiddenAttributes && Array.isArray(parsed.hiddenAttributes)) {
				hiddenAttributes = new Map(parsed.hiddenAttributes);
			}
			// restore challenges if present
			if (parsed && (parsed as any).completedChallenges && Array.isArray((parsed as any).completedChallenges)) {
				completedChallenges = new Map((parsed as any).completedChallenges);
			}
			if (parsed && (parsed as any).activeChallenges && Array.isArray((parsed as any).activeChallenges)) {
				activeChallenges = new Map((parsed as any).activeChallenges);
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
	playerName = '';
	previousSceneId = null;
	// reset stats as well
	playerStats = { courage: 0, curiosity: 0, empathy: 0, wealth: 0, reputation: 0, strength: 0, dexterity: 0, wisdom: 0, luck: 0, health: 10, charisma: 0, magical_intelligence: 0 };
	// reset titles
	earnedTitles.clear();
	// reset rewards
	earnedRewards.clear();
	// reset choice flags
	chosenFlags.clear();
	// reset characters and places to defaults
	characters = { ...defaultCharacters };
	places = { ...defaultPlaces };
	// reset hidden attributes
	hiddenAttributes.clear();
	// reset challenges
	completedChallenges.clear();
	activeChallenges.clear();
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

// ==================== Rewards ====================

export function checkRewardCondition(condition: RewardCondition): boolean {
	// Check scene condition
	if (condition.sceneId && currentSceneId !== condition.sceneId) {
		return false;
	}

	// Check title conditions
	if (condition.titles) {
		for (const titleId of condition.titles) {
			if (!earnedTitles.has(titleId)) {
				return false;
			}
		}
	}

	// Check stat conditions
	if (condition.stats) {
		for (const [stat, req] of Object.entries(condition.stats)) {
			const val = playerStats[stat as keyof PlayerStats] || 0;
			if (req.min !== undefined && val < req.min) return false;
			if (req.max !== undefined && val > req.max) return false;
		}
	}

	// Check flag conditions
	if (condition.flags) {
		for (const flag of condition.flags) {
			if (!chosenFlags.has(flag)) {
				return false;
			}
		}
	}

	// Check hidden attribute conditions
	if (condition.hiddenAttributes) {
		for (const [key, expectedValue] of Object.entries(condition.hiddenAttributes)) {
			const actualValue = hiddenAttributes.get(key);
			if (actualValue !== expectedValue) {
				return false;
			}
		}
	}

	// Check custom condition
	if (condition.custom && !condition.custom()) {
		return false;
	}

	return true;
}

export function checkAndAwardRewards(): Reward[] {
	const newlyEarned: Reward[] = [];

	for (const reward of Object.values(REWARDS)) {
		// Skip if already earned
		if (earnedRewards.has(reward.id)) {
			continue;
		}

		// Check if conditions are met
		if (checkRewardCondition(reward.condition)) {
			earnedRewards.add(reward.id);
			newlyEarned.push(reward);
		}
	}

	return newlyEarned;
}

export function getEarnedRewards(): Reward[] {
	return Array.from(earnedRewards)
		.map(id => REWARDS[id])
		.filter(Boolean);
}

export function getAllRewards(): Reward[] {
	return Object.values(REWARDS);
}

export function awardReward(rewardId: string): boolean {
	if (REWARDS[rewardId] && !earnedRewards.has(rewardId)) {
		earnedRewards.add(rewardId);
		return true;
	}
	return false;
}

export function removeReward(rewardId: string): boolean {
	return earnedRewards.delete(rewardId);
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

/** Apply hidden effects - sets hidden attributes that are not shown to the user. */
function applyHiddenEffects(effects?: Record<string, number | string | boolean>): void {
	if (!effects) return;
	Object.entries(effects).forEach(([key, value]) => {
		hiddenAttributes.set(key, value);
		// If the value is true and the key contains a colon, also add it as a flag
		// This allows flags like 'origin_choice:courageous' to work with hasFlags conditions
		if (value === true && key.includes(':')) {
			chosenFlags.add(key);
		}
	});
}

/** Get a hidden attribute value, or undefined if not set. */
export function getHiddenAttribute(key: string): number | string | boolean | undefined {
	return hiddenAttributes.get(key);
}

/** Check if a hidden attribute exists and matches a specific value. */
export function hasHiddenAttribute(key: string, value?: number | string | boolean): boolean {
	if (value === undefined) {
		return hiddenAttributes.has(key);
	}
	return hiddenAttributes.get(key) === value;
}

/** Set a hidden attribute programmatically (can be used in custom condition functions). */
export function setHiddenAttribute(key: string, value: number | string | boolean): void {
	hiddenAttributes.set(key, value);
}

/** Remove a hidden attribute. */
export function removeHiddenAttribute(key: string): void {
	hiddenAttributes.delete(key);
}

/** Get all hidden attributes as a plain object. */
export function getAllHiddenAttributes(): Record<string, number | string | boolean> {
	const result: Record<string, number | string | boolean> = {};
	hiddenAttributes.forEach((value, key) => {
		result[key] = value;
	});
	return result;
}

// --- Real-Life Challenge System ---

/** Start a real-life challenge */
export function startChallenge(challengeId: string, choiceId: string): void {
	activeChallenges.set(challengeId, {
		startedAt: Date.now(),
		choiceId: choiceId
	});
}

/** Check if a challenge is currently active */
export function isChallengeActive(challengeId: string): boolean {
	return activeChallenges.has(challengeId);
}

/** Get active challenge details */
export function getActiveChallenge(challengeId: string): { startedAt: number; choiceId: string; elapsedMinutes: number } | null {
	const challenge = activeChallenges.get(challengeId);
	if (!challenge) return null;
	return {
		...challenge,
		elapsedMinutes: Math.floor((Date.now() - challenge.startedAt) / 60000)
	};
}

/** Complete a challenge and mark it as verified */
export function completeChallenge(challengeId: string, challenge: RealLifeChallenge): boolean {
	if (!activeChallenges.has(challengeId)) {
		return false;
	}
	
	const active = activeChallenges.get(challengeId)!;
	const elapsedMinutes = Math.floor((Date.now() - active.startedAt) / 60000);
	
	// Check if minimum duration requirement is met
	if (challenge.durationMinutes && elapsedMinutes < challenge.durationMinutes) {
		return false;
	}
	
	// Mark as completed
	completedChallenges.set(challengeId, {
		completedAt: Date.now(),
		verified: true
	});
	
	// Apply rewards if any
	if (challenge.rewards) {
		if (challenge.rewards.stats) {
			applyEffects(challenge.rewards.stats);
		}
		if (challenge.rewards.hiddenAttributes) {
			applyHiddenEffects(challenge.rewards.hiddenAttributes);
		}
	}
	
	// Remove from active challenges
	activeChallenges.delete(challengeId);
	
	return true;
}

/** Check if a challenge has been completed */
export function isChallengeCompleted(challengeId: string): boolean {
	return completedChallenges.has(challengeId);
}

/** Get all completed challenges */
export function getCompletedChallenges(): Map<string, { completedAt: number; verified: boolean }> {
	return new Map(completedChallenges);
}

/** Get all active challenges */
export function getActiveChallenges(): Map<string, { startedAt: number; choiceId: string }> {
	return new Map(activeChallenges);
}

/** Cancel an active challenge */
export function cancelChallenge(challengeId: string): void {
	activeChallenges.delete(challengeId);
}
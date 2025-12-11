/**
 * Scene Helper Utilities
 * 
 * Provides utility functions for common scene authoring tasks,
 * including previous scene detection and conditional logic helpers.
 */

import { 
	getPreviousSceneId, 
	getPreviousScene, 
	getHiddenAttribute, 
	hasHiddenAttribute, 
	setHiddenAttribute,
	removeHiddenAttribute,
	getAllHiddenAttributes
} from './story-manager';

/**
 * Check if the player came from a specific scene
 * @param sceneId - The scene ID to check
 * @returns true if the previous scene matches, false otherwise (including when there's no previous scene)
 */
export function cameFrom(sceneId: string): boolean {
	const prevId = getPreviousSceneId();
	return prevId === sceneId;
}

/**
 * Check if the player came from any of the specified scenes
 * @param sceneIds - Array of scene IDs to check
 * @returns true if the previous scene matches any in the list, false otherwise
 */
export function cameFromAny(sceneIds: string[]): boolean {
	const prevId = getPreviousSceneId();
	return prevId !== null && sceneIds.includes(prevId);
}

/**
 * Check if this is the player's first scene (no previous scene exists)
 * @returns true if there is no previous scene (start of journey)
 */
export function isFirstScene(): boolean {
	return getPreviousSceneId() === null;
}

/**
 * Get the ID of the previous scene, or a default value if none exists
 * @param defaultValue - Value to return if there's no previous scene
 * @returns The previous scene ID or the default value
 */
export function getPreviousSceneIdOr(defaultValue: string): string {
	return getPreviousSceneId() ?? defaultValue;
}

/**
 * Create a custom condition function that checks if player came from a specific scene
 * Useful for textVariants conditions
 * @param sceneId - The scene ID to check
 * @returns A condition function suitable for OutcomeCondition.custom
 */
export function fromScene(sceneId: string): () => boolean {
	return () => cameFrom(sceneId);
}

/**
 * Create a custom condition function that checks if player came from any of the specified scenes
 * @param sceneIds - Array of scene IDs to check
 * @returns A condition function suitable for OutcomeCondition.custom
 */
export function fromAnyScene(sceneIds: string[]): () => boolean {
	return () => cameFromAny(sceneIds);
}

/**
 * Create a custom condition function that checks if a hidden attribute matches a value
 * @param key - The hidden attribute key
 * @param value - The expected value
 * @returns A condition function suitable for OutcomeCondition.custom
 */
export function hiddenAttrEquals(key: string, value: number | string | boolean): () => boolean {
	return () => hasHiddenAttribute(key, value);
}

/**
 * Create a custom condition function that checks if a hidden attribute exists
 * @param key - The hidden attribute key
 * @returns A condition function suitable for OutcomeCondition.custom
 */
export function hiddenAttrExists(key: string): () => boolean {
	return () => hasHiddenAttribute(key);
}

/**
 * Export the core functions for direct use
 */
export { 
	getPreviousSceneId, 
	getPreviousScene,
	getHiddenAttribute,
	hasHiddenAttribute,
	setHiddenAttribute,
	removeHiddenAttribute,
	getAllHiddenAttributes
};

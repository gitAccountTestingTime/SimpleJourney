/**
 * Author Utility Class
 * Helper methods for scene authors to easily access game state and hidden attributes
 */

import { getHiddenAttribute } from './story-manager';

export class AuthorUtils {
	// ===== WEAPON & COMBAT =====
	
	/**
	 * Get the player's starting weapon choice
	 * @returns 'sword' | 'bow' | 'spear' | 'axe' | 'daggers' | 'staff' | undefined
	 */
	static getStartingWeapon(): string | undefined {
		const weapon = getHiddenAttribute('starting_weapon');
		return typeof weapon === 'string' ? weapon : undefined;
	}

	/**
	 * Get the player's weapon familiarity level
	 * @returns number representing familiarity (typically 0-10)
	 */
	static getWeaponFamiliarity(): number {
		const familiarity = getHiddenAttribute('weapon_familiarity');
		return typeof familiarity === 'number' ? familiarity : 0;
	}

	/**
	 * Get the player's combat style
	 * @returns 'balanced' | 'ranged' | 'polearm' | 'power' | 'agile' | 'magical' | undefined
	 */
	static getCombatStyle(): string | undefined {
		const style = getHiddenAttribute('combat_style');
		return typeof style === 'string' ? style : undefined;
	}

	// ===== ORIGIN & PERSONALITY =====

	/**
	 * Get the player's personality seed from prologue choice
	 * @returns 'brave' | 'practical' | 'leader' | 'diplomatic' | undefined
	 */
	static getPersonalitySeed(): string | undefined {
		if (getHiddenAttribute('personality_seed:brave')) return 'brave';
		if (getHiddenAttribute('personality_seed:practical')) return 'practical';
		if (getHiddenAttribute('personality_seed:leader')) return 'leader';
		if (getHiddenAttribute('personality_seed:diplomatic')) return 'diplomatic';
		return undefined;
	}

	/**
	 * Get the player's origin choice
	 * @returns 'courageous' | 'pragmatic' | 'leadership' | 'clever' | undefined
	 */
	static getOriginChoice(): string | undefined {
		if (getHiddenAttribute('origin_choice:courageous')) return 'courageous';
		if (getHiddenAttribute('origin_choice:pragmatic')) return 'pragmatic';
		if (getHiddenAttribute('origin_choice:leadership')) return 'leadership';
		if (getHiddenAttribute('origin_choice:clever')) return 'clever';
		return undefined;
	}

	/**
	 * Get the player's first moral choice with bandits/refugees
	 * @returns 'ruthless' | 'intimidating' | 'skillful' | 'diplomatic' | 'compassionate' | 'lawful' | undefined
	 */
	static getFirstMoralChoice(): string | undefined {
		if (getHiddenAttribute('first_moral_choice:ruthless')) return 'ruthless';
		if (getHiddenAttribute('first_moral_choice:intimidating')) return 'intimidating';
		if (getHiddenAttribute('first_moral_choice:skillful')) return 'skillful';
		if (getHiddenAttribute('first_moral_choice:diplomatic')) return 'diplomatic';
		if (getHiddenAttribute('first_moral_choice:compassionate')) return 'compassionate';
		if (getHiddenAttribute('first_moral_choice:lawful')) return 'lawful';
		return undefined;
	}

	/**
	 * Get the player's magical awakening type
	 * @returns 'courage' | 'combat' | 'survival' | 'selfless' | 'instinct' | 'intellectual' | undefined
	 */
	static getMagicalAwakening(): string | undefined {
		if (getHiddenAttribute('magical_awakening:courage')) return 'courage';
		if (getHiddenAttribute('magical_awakening:combat')) return 'combat';
		if (getHiddenAttribute('magical_awakening:survival')) return 'survival';
		if (getHiddenAttribute('magical_awakening:selfless')) return 'selfless';
		if (getHiddenAttribute('magical_awakening:instinct')) return 'instinct';
		if (getHiddenAttribute('magical_awakening:intellectual')) return 'intellectual';
		return undefined;
	}

	// ===== CHARACTER RELATIONSHIPS =====

	/**
	 * Get Vale's trust level (bard companion)
	 * @returns number (0-100+)
	 */
	static getValeTrust(): number {
		const trust = getHiddenAttribute('vale_trust');
		return typeof trust === 'number' ? trust : 0;
	}

	/**
	 * Get Vale's romance level
	 * @returns number (0-100+)
	 */
	static getValeRomance(): number {
		const romance = getHiddenAttribute('vale_romance');
		return typeof romance === 'number' ? romance : 0;
	}

	/**
	 * Get Vale's first impression
	 * @returns 'open' | 'cautious' | 'investigative' | 'flirtatious' | undefined
	 */
	static getValeFirstImpression(): string | undefined {
		if (getHiddenAttribute('vale_first_impression:open')) return 'open';
		if (getHiddenAttribute('vale_first_impression:cautious')) return 'cautious';
		if (getHiddenAttribute('vale_first_impression:investigative')) return 'investigative';
		if (getHiddenAttribute('vale_first_impression:flirtatious')) return 'flirtatious';
		return undefined;
	}

	/**
	 * Get Rowan's trust level
	 * @returns number (0-100+)
	 */
	static getRowanTrust(): number {
		const trust = getHiddenAttribute('rowan_trust');
		return typeof trust === 'number' ? trust : 0;
	}

	/**
	 * Get Rowan's romance level
	 * @returns number (0-100+)
	 */
	static getRowanRomance(): number {
		const romance = getHiddenAttribute('rowan_romance');
		return typeof romance === 'number' ? romance : 0;
	}

	/**
	 * Get Lyra's trust level
	 * @returns number (0-100+)
	 */
	static getLyraTrust(): number {
		const trust = getHiddenAttribute('lyra_trust');
		return typeof trust === 'number' ? trust : 0;
	}

	/**
	 * Get Lyra's romance level
	 * @returns number (0-100+)
	 */
	static getLyraRomance(): number {
		const romance = getHiddenAttribute('lyra_romance');
		return typeof romance === 'number' ? romance : 0;
	}

	/**
	 * Get Lyra's bond level
	 * @returns number (0-100+)
	 */
	static getLyraBond(): number {
		const bond = getHiddenAttribute('lyra_bond');
		return typeof bond === 'number' ? bond : 0;
	}

	/**
	 * Get Ash's trust level
	 * @returns number (0-100+)
	 */
	static getAshTrust(): number {
		const trust = getHiddenAttribute('ash_trust');
		return typeof trust === 'number' ? trust : 0;
	}

	/**
	 * Get Ash's romance level
	 * @returns number (0-100+)
	 */
	static getAshRomance(): number {
		const romance = getHiddenAttribute('ash_romance');
		return typeof romance === 'number' ? romance : 0;
	}

	/**
	 * Get Sage's bond level
	 * @returns number (0-100+)
	 */
	static getSageBond(): number {
		const bond = getHiddenAttribute('sage_bond');
		return typeof bond === 'number' ? bond : 0;
	}

	/**
	 * Get Whisper's trust level
	 * @returns number (0-100+)
	 */
	static getWhisperTrust(): number {
		const trust = getHiddenAttribute('whisper_trust');
		return typeof trust === 'number' ? trust : 0;
	}

	/**
	 * Get Thorne's trust level
	 * @returns number (0-100+)
	 */
	static getThorneTrust(): number {
		const trust = getHiddenAttribute('thorne_trust');
		return typeof trust === 'number' ? trust : 0;
	}

	/**
	 * Get Kieran's trust level
	 * @returns number (0-100+)
	 */
	static getKieranTrust(): number {
		const trust = getHiddenAttribute('kieran_trust');
		return typeof trust === 'number' ? trust : 0;
	}

	/**
	 * Get Kieran's romance level
	 * @returns number (0-100+)
	 */
	static getKieranRomance(): number {
		const romance = getHiddenAttribute('kieran_romance');
		return typeof romance === 'number' ? romance : 0;
	}

	/**
	 * Get Seraphine's trust level
	 * @returns number (0-100+)
	 */
	static getSeraphineTrust(): number {
		const trust = getHiddenAttribute('seraphine_trust');
		return typeof trust === 'number' ? trust : 0;
	}

	/**
	 * Get Seraphine's romance level
	 * @returns number (0-100+)
	 */
	static getSeraphineRomance(): number {
		const romance = getHiddenAttribute('seraphine_romance');
		return typeof romance === 'number' ? romance : 0;
	}

	// ===== MAGIC & ATTRIBUTES =====

	/**
	 * Get blood magic affinity level
	 * @returns number (0-100+)
	 */
	static getBloodMagicAffinity(): number {
		const affinity = getHiddenAttribute('blood_magic_affinity');
		return typeof affinity === 'number' ? affinity : 0;
	}

	/**
	 * Get blood magic theory knowledge
	 * @returns number (0-100+)
	 */
	static getBloodMagicTheory(): number {
		const theory = getHiddenAttribute('blood_magic_theory');
		return typeof theory === 'number' ? theory : 0;
	}

	/**
	 * Get blood magic practical skill
	 * @returns number (0-100+)
	 */
	static getBloodMagicPractical(): number {
		const practical = getHiddenAttribute('blood_magic_practical');
		return typeof practical === 'number' ? practical : 0;
	}

	// ===== BEHAVIORAL TRAITS =====

	/**
	 * Get ruthlessness level
	 * @returns number
	 */
	static getRuthlessness(): number {
		const ruthlessness = getHiddenAttribute('ruthlessness');
		return typeof ruthlessness === 'number' ? ruthlessness : 0;
	}

	/**
	 * Get compassionate actions count
	 * @returns number
	 */
	static getCompassionateActions(): number {
		const actions = getHiddenAttribute('compassionate_actions');
		return typeof actions === 'number' ? actions : 0;
	}

	// ===== QUEST & PROGRESS FLAGS =====

	/**
	 * Check if quest payment was received
	 * @returns boolean
	 */
	static hasQuestPaymentReceived(): boolean {
		return getHiddenAttribute('quest_payment_received') === true;
	}

	/**
	 * Check if quest bonus was earned
	 * @returns boolean
	 */
	static hasQuestBonusEarned(): boolean {
		return getHiddenAttribute('quest_bonus_earned') === true;
	}

	/**
	 * Check if refugees trust the player
	 * @returns number
	 */
	static getRefugeesTrust(): number {
		const trust = getHiddenAttribute('refugees_trust');
		return typeof trust === 'number' ? trust : 0;
	}

	// ===== STORY PATH =====

	/**
	 * Get the royal path choice
	 * @returns 'reclaim' | 'renounce' | undefined
	 */
	static getRoyalPath(): string | undefined {
		if (getHiddenAttribute('royal_path:reclaim')) return 'reclaim';
		if (getHiddenAttribute('royal_path:renounce')) return 'renounce';
		return undefined;
	}

	/**
	 * Get the restoration goal
	 * @returns 'unite' | 'reform' | undefined
	 */
	static getRestorationGoal(): string | undefined {
		if (getHiddenAttribute('restoration_goal:unite')) return 'unite';
		if (getHiddenAttribute('restoration_goal:reform')) return 'reform';
		return undefined;
	}

	// ===== GENERIC HELPER =====

	/**
	 * Get any hidden attribute by key
	 * @param key - The attribute key
	 * @returns The attribute value or undefined
	 */
	static getHiddenAttribute(key: string): number | string | boolean | undefined {
		return getHiddenAttribute(key);
	}

	/**
	 * Check if a specific flag is set
	 * @param flag - The flag to check (e.g., 'origin_choice:courageous')
	 * @returns boolean
	 */
	static hasFlag(flag: string): boolean {
		return getHiddenAttribute(flag) === true;
	}
}

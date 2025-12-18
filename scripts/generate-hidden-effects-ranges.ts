/**
 * Script to analyze all scenes and generate a file tracking min/max values
 * for numeric hiddenEffects at each scene.
 * 
 * Usage: npm run analyze-effects
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// ES module equivalents for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface HiddenEffectRange {
	min: number;
	max: number;
	scenes: string[]; // Which scenes affect this value
}

interface SceneAnalysis {
	sceneId: string;
	filePath: string;
	effects: {
		[key: string]: HiddenEffectRange;
	};
}

interface Choice {
	id: string;
	hiddenEffects?: Record<string, number | string | boolean>;
}

interface Scene {
	id: string;
	choices?: Choice[];
}

// Extract scenes from a TypeScript file
function extractScenesFromFile(filePath: string): Scene[] {
	const content = fs.readFileSync(filePath, 'utf-8');
	const scenes: Scene[] = [];
	
	// Look for exported scene objects
	const sceneRegex = /export\s+const\s+(\w+):\s*Scene\s*=\s*\{[\s\S]*?\n\};/g;
	let match;
	
	while ((match = sceneRegex.exec(content)) !== null) {
		const sceneBlock = match[0];
		
		// Extract scene id
		const idMatch = sceneBlock.match(/id:\s*['"`]([^'"`]+)['"`]/);
		if (!idMatch) continue;
		
		const sceneId = idMatch[1];
		const scene: Scene = { id: sceneId, choices: [] };
		
		// Extract choices array
		const choicesMatch = sceneBlock.match(/choices:\s*\[([\s\S]*?)\n\s*\]/);
		if (!choicesMatch) {
			scenes.push(scene);
			continue;
		}
		
		const choicesBlock = choicesMatch[1];
		
		// Split into individual choice objects
		const choiceObjects = splitChoices(choicesBlock);
		
		for (const choiceStr of choiceObjects) {
			// Extract choice id
			const choiceIdMatch = choiceStr.match(/id:\s*['"`]([^'"`]+)['"`]/);
			if (!choiceIdMatch) continue;
			
			const choiceId = choiceIdMatch[1];
			const choice: Choice = { id: choiceId };
			
			// Extract hiddenEffects
			const hiddenEffectsMatch = choiceStr.match(/hiddenEffects:\s*\{([\s\S]*?)\n\s*\}/);
			if (hiddenEffectsMatch) {
				const effectsBlock = hiddenEffectsMatch[1];
				const effects: Record<string, number | string | boolean> = {};
				
				// Parse each line in hiddenEffects
				const lines = effectsBlock.split('\n');
				for (const line of lines) {
					const trimmed = line.trim();
					if (!trimmed || trimmed.startsWith('//')) continue;
					
					// Match: key: value or 'key': value or "key": value
					const effectMatch = trimmed.match(/['"]?([^'":\s]+)['"]?\s*:\s*(.+?)(?:,\s*$|$)/);
					if (effectMatch) {
						const key = effectMatch[1];
						const valueStr = effectMatch[2].trim().replace(/,$/, '');
						
						// Parse the value
						if (valueStr === 'true') {
							effects[key] = true;
						} else if (valueStr === 'false') {
							effects[key] = false;
						} else if (/^-?\d+$/.test(valueStr)) {
							effects[key] = parseInt(valueStr, 10);
						} else if (/^['"`]/.test(valueStr)) {
							effects[key] = valueStr.replace(/^['"`]|['"`]$/g, '');
						}
					}
				}
				
				choice.hiddenEffects = effects;
			}
			
			scene.choices!.push(choice);
		}
		
		scenes.push(scene);
	}
	
	return scenes;
}

// Helper to split choices considering nested braces
function splitChoices(choicesBlock: string): string[] {
	const choices: string[] = [];
	let current = '';
	let braceDepth = 0;
	let inString = false;
	let stringChar = '';
	
	for (let i = 0; i < choicesBlock.length; i++) {
		const char = choicesBlock[i];
		const prevChar = i > 0 ? choicesBlock[i - 1] : '';
		
		// Track string state
		if ((char === '"' || char === "'" || char === '`') && prevChar !== '\\') {
			if (!inString) {
				inString = true;
				stringChar = char;
			} else if (char === stringChar) {
				inString = false;
			}
		}
		
		if (!inString) {
			if (char === '{') braceDepth++;
			if (char === '}') braceDepth--;
			
			// At depth 0, comma separates choices
			if (char === ',' && braceDepth === 0) {
				choices.push(current.trim());
				current = '';
				continue;
			}
		}
		
		current += char;
	}
	
	if (current.trim()) {
		choices.push(current.trim());
	}
	
	return choices;
}

// Recursively find all TypeScript files in scenes directory
function findSceneFiles(dir: string): string[] {
	const files: string[] = [];
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	
	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...findSceneFiles(fullPath));
		} else if (entry.isFile() && entry.name.endsWith('.ts') && !entry.name.endsWith('.d.ts')) {
			files.push(fullPath);
		}
	}
	
	return files;
}

// Analyze all scenes and calculate cumulative ranges
function analyzeScenes(scenesDir: string): Map<string, SceneAnalysis> {
	const sceneFiles = findSceneFiles(scenesDir);
	const analysisMap = new Map<string, SceneAnalysis>();
	const globalEffects = new Map<string, { min: number; max: number; scenes: Set<string> }>();
	
	// First pass: collect all effects from all scenes
	for (const filePath of sceneFiles) {
		const scenes = extractScenesFromFile(filePath);
		
		for (const scene of scenes) {
			if (!scene.choices) continue;
			
			for (const choice of scene.choices) {
				if (!choice.hiddenEffects) continue;
				
				for (const [key, value] of Object.entries(choice.hiddenEffects)) {
					if (typeof value === 'number') {
						if (!globalEffects.has(key)) {
							globalEffects.set(key, { min: 0, max: 0, scenes: new Set() });
						}
						
						const effect = globalEffects.get(key)!;
						effect.scenes.add(scene.id);
						
						// Track cumulative changes
						if (value > 0) {
							effect.max += value;
						} else if (value < 0) {
							effect.min += value;
						}
					}
				}
			}
		}
	}
	
	// Second pass: build scene-specific analysis
	for (const filePath of sceneFiles) {
		const scenes = extractScenesFromFile(filePath);
		const relativePath = path.relative(scenesDir, filePath);
		
		for (const scene of scenes) {
			const analysis: SceneAnalysis = {
				sceneId: scene.id,
				filePath: relativePath,
				effects: {}
			};
			
			if (!scene.choices) {
				analysisMap.set(scene.id, analysis);
				continue;
			}
			
			// Calculate min/max for this specific scene
			const sceneEffects = new Map<string, { min: number; max: number }>();
			
			for (const choice of scene.choices) {
				if (!choice.hiddenEffects) continue;
				
				for (const [key, value] of Object.entries(choice.hiddenEffects)) {
					if (typeof value === 'number') {
						if (!sceneEffects.has(key)) {
							sceneEffects.set(key, { min: 0, max: 0 });
						}
						
						const effect = sceneEffects.get(key)!;
						effect.min = Math.min(effect.min, value);
						effect.max = Math.max(effect.max, value);
					}
				}
			}
			
			// Convert to analysis format
			for (const [key, range] of sceneEffects) {
				analysis.effects[key] = {
					min: range.min,
					max: range.max,
					scenes: [scene.id]
				};
			}
			
			analysisMap.set(scene.id, analysis);
		}
	}
	
	return analysisMap;
}

// Generate markdown report
function generateReport(analysisMap: Map<string, SceneAnalysis>, outputPath: string): void {
	let markdown = '# Hidden Effects Range Analysis\n\n';
	markdown += `Generated: ${new Date().toISOString()}\n\n`;
	markdown += 'This file tracks the minimum and maximum values for numeric hiddenEffects at each scene.\n\n';
	markdown += '---\n\n';
	
	// Group by file path
	const byFile = new Map<string, SceneAnalysis[]>();
	for (const analysis of analysisMap.values()) {
		if (!byFile.has(analysis.filePath)) {
			byFile.set(analysis.filePath, []);
		}
		byFile.get(analysis.filePath)!.push(analysis);
	}
	
	// Sort files
	const sortedFiles = Array.from(byFile.keys()).sort();
	
	for (const filePath of sortedFiles) {
		const scenes = byFile.get(filePath)!;
		markdown += `## ${filePath}\n\n`;
		
		for (const scene of scenes) {
			markdown += `### Scene: \`${scene.sceneId}\`\n\n`;
			
			const effectKeys = Object.keys(scene.effects).sort();
			
			if (effectKeys.length === 0) {
				markdown += '*No numeric hidden effects in this scene*\n\n';
				continue;
			}
			
			markdown += '| Effect | Min | Max |\n';
			markdown += '|--------|-----|-----|\n';
			
			for (const key of effectKeys) {
				const range = scene.effects[key];
				markdown += `| \`${key}\` | ${range.min} | ${range.max} |\n`;
			}
			
			markdown += '\n';
		}
		
		markdown += '\n';
	}
	
	// Global summary
	markdown += '---\n\n';
	markdown += '## Global Summary\n\n';
	markdown += 'Cumulative ranges across all scenes:\n\n';
	markdown += '| Effect | Min Possible | Max Possible | Scenes |\n';
	markdown += '|--------|--------------|--------------|--------|\n';
	
	// Recalculate global summary
	const globalSummary = new Map<string, { min: number; max: number; scenes: Set<string> }>();
	
	for (const analysis of analysisMap.values()) {
		for (const [key, range] of Object.entries(analysis.effects)) {
			if (!globalSummary.has(key)) {
				globalSummary.set(key, { min: 0, max: 0, scenes: new Set() });
			}
			
			const summary = globalSummary.get(key)!;
			summary.min = Math.min(summary.min, range.min);
			summary.max = Math.max(summary.max, range.max);
			summary.scenes.add(analysis.sceneId);
		}
	}
	
	const sortedEffects = Array.from(globalSummary.keys()).sort();
	for (const key of sortedEffects) {
		const summary = globalSummary.get(key)!;
		markdown += `| \`${key}\` | ${summary.min} | ${summary.max} | ${summary.scenes.size} |\n`;
	}
	
	fs.writeFileSync(outputPath, markdown, 'utf-8');
}

// Main execution
function main(): void {
	const projectRoot = path.resolve(__dirname, '..');
	const scenesDir = path.join(projectRoot, 'src', 'scenes');
	const outputPath = path.join(projectRoot, 'HIDDEN_EFFECTS_RANGES.md');
	
	console.log('Analyzing scenes...');
	const analysisMap = analyzeScenes(scenesDir);
	
	console.log(`Found ${analysisMap.size} scenes with hidden effects`);
	
	console.log('Generating report...');
	generateReport(analysisMap, outputPath);
	
	console.log(`✓ Report generated: ${outputPath}`);
}

main();

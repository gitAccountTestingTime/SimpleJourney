#!/usr/bin/env node

/**
 * Scene Flow Generator
 * 
 * This script analyzes all scene definitions and generates a comprehensive
 * flow diagram showing how scenes connect through choices and outcomes.
 * 
 * Usage: node generate-scene-flow.js
 * Output: SCENE_FLOW.md
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Scene definitions are imported from TypeScript files
// We'll need to parse the scene definitions from the scene files

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scenesDir = path.join(__dirname);
const docsDir = path.join(__dirname, '..', '..', 'docs');

// Ensure docs directory exists
if (!fs.existsSync(docsDir)) {
	fs.mkdirSync(docsDir, { recursive: true });
}

/**
 * Parse a scene file and extract scene definition
 * @param {string} filePath - Path to the scene file
 * @returns {Object|null} - Parsed scene object or null if parse fails
 */
function parseSceneFile(filePath) {
	try {
		const content = fs.readFileSync(filePath, 'utf-8');
		
		// Extract the scene constant definition using regex
		// Looking for patterns like: export const XxxScene: Scene = { ... }
		const sceneMatch = content.match(/export\s+const\s+(\w+)Scene:\s*Scene\s*=\s*({[\s\S]*?^};)/m);
		
		if (!sceneMatch) {
			return null;
		}

		const sceneContent = sceneMatch[2];
		
		// Extract id
		const idMatch = sceneContent.match(/id:\s*['"]([^'"]+)['"]/);
		const id = idMatch ? idMatch[1] : null;

		// Extract all choices
		const choices = [];
		
		// Find all choice objects within the choices array
		// Pattern: { id: '...', text: '...', [outcomes: [...] or next: '...'] ... }
		const choiceRegex = /{[^}]*?id:\s*['"]([^'"]+)['"][^}]*?text:\s*['"]([^'"]+)['"][^}]*?(?:(outcomes|next):[^}]*)}/gs;
		
		let match;
		while ((match = choiceRegex.exec(sceneContent)) !== null) {
			const choiceId = match[1];
			const choiceText = match[2];
			const choiceFullText = match[0];
			
			const destinations = [];
			
			// Check for outcomes array
			const outcomesMatch = choiceFullText.match(/outcomes:\s*\[([\s\S]*?)\]/);
			if (outcomesMatch) {
				// Extract all next values from outcomes
				const outcomesContent = outcomesMatch[1];
				const nextRegex = /next:\s*['"]([^'"]+)['"]/g;
				let nextMatch;
				while ((nextMatch = nextRegex.exec(outcomesContent)) !== null) {
					const dest = nextMatch[1].trim();
					if (!destinations.includes(dest)) {
						destinations.push(dest);
					}
				}
			} else {
				// Check for direct next property
				const nextMatch = choiceFullText.match(/next:\s*['"]([^'"]+)['"]/);
				if (nextMatch) {
					const dest = nextMatch[1].trim();
					if (!destinations.includes(dest)) {
						destinations.push(dest);
					}
				}
			}
			
			if (destinations.length > 0) {
				choices.push({
					id: choiceId,
					text: choiceText,
					destinations: destinations
				});
			}
		}

		return {
			id,
			filePath,
			choices,
			hasOutcomes: sceneContent.includes('outcomes:')
		};
	} catch (error) {
		console.warn(`Warning: Could not parse ${filePath}:`, error.message);
		return null;
	}
}

/**
 * Recursively find all scene files
 * @param {string} dir - Directory to search
 * @param {string[]} fileList - Accumulator for file list
 * @returns {string[]} - Array of scene file paths
 */
function findSceneFiles(dir, fileList = []) {
	const files = fs.readdirSync(dir);
	
	for (const file of files) {
		const filePath = path.join(dir, file);
		const stat = fs.statSync(filePath);
		
		if (stat.isDirectory()) {
			// Skip node_modules and special directories
			if (!file.startsWith('.') && file !== 'node_modules' && file !== 'examples') {
				findSceneFiles(filePath, fileList);
			}
		} else if (file.endsWith('.ts') && !file.endsWith('.d.ts')) {
			fileList.push(filePath);
		}
	}
	
	return fileList;
}

/**
 * Generate a Mermaid flowchart from scene data
 * @param {Object[]} scenes - Array of parsed scenes
 * @returns {string} - Mermaid diagram code
 */
function generateMermaidDiagram(scenes) {
	const lines = ['graph TD'];
	const sceneMap = {};
	const connections = new Set();

	// Build scene map
	for (const scene of scenes) {
		sceneMap[scene.id] = scene;
	}

	// Add nodes and connections
	for (const scene of scenes) {
		// Format scene node label
		const label = scene.id
			.split('_')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
		
		// Add node
		lines.push(`    ${formatNodeId(scene.id)}["${label}"]`);

		// Add connections
		for (const choice of scene.choices) {
			for (const dest of choice.destinations) {
				const connectionKey = `${scene.id}->${dest}`;
				if (!connections.has(connectionKey) && sceneMap[dest]) {
					connections.add(connectionKey);
					lines.push(`    ${formatNodeId(scene.id)} -->|${choice.text}| ${formatNodeId(dest)}`);
				}
			}
		}
	}

	return lines.join('\n');
}

/**
 * Format a scene ID as a valid Mermaid node ID
 * @param {string} id - Scene ID
 * @returns {string} - Formatted node ID
 */
function formatNodeId(id) {
	return id.replace(/[-_]/g, '');
}

/**
 * Generate a text-based flow overview
 * @param {Object[]} scenes - Array of parsed scenes
 * @returns {string} - Text flow overview
 */
function generateTextFlow(scenes) {
	const lines = [];
	const sceneMap = {};

	// Build scene map
	for (const scene of scenes) {
		sceneMap[scene.id] = scene;
	}

	// Sort scenes by category
	const categories = {
		'Exploration': [],
		'Town': [],
		'Quests': [],
		'Special': [],
		'Other': []
	};

	for (const scene of scenes) {
		if (scene.filePath.includes('exploration')) {
			categories['Exploration'].push(scene);
		} else if (scene.filePath.includes('town')) {
			categories['Town'].push(scene);
		} else if (scene.filePath.includes('quests')) {
			categories['Quests'].push(scene);
		} else if (scene.filePath.includes('special')) {
			categories['Special'].push(scene);
		} else {
			categories['Other'].push(scene);
		}
	}

	for (const [category, scenesInCategory] of Object.entries(categories)) {
		if (scenesInCategory.length === 0) continue;

		lines.push(`\n## ${category} Scenes\n`);

		for (const scene of scenesInCategory) {
			lines.push(`### ${scene.id}`);
			lines.push('');

			if (scene.choices.length === 0) {
				lines.push('**No choices available**');
			} else {
				lines.push('**Possible flows:**');
				lines.push('');

				for (const choice of scene.choices) {
					const dests = choice.destinations
						.map(d => `[\`${d}\`](#${d.replace(/_/g, '-')})`)
						.join(', ');
					lines.push(`- **${choice.text}** → ${dests}`);
				}
			}

			lines.push('');
		}
	}

	return lines.join('\n');
}

/**
 * Generate a scene connection matrix
 * @param {Object[]} scenes - Array of parsed scenes
 * @returns {string} - Connection matrix table
 */
function generateConnectionMatrix(scenes) {
	const lines = [];
	const sceneMap = {};
	const allSceneIds = [];

	for (const scene of scenes) {
		sceneMap[scene.id] = scene;
		allSceneIds.push(scene.id);
	}

	allSceneIds.sort();

	lines.push('## Scene Connection Matrix\n');
	lines.push('This matrix shows which scenes connect to which other scenes.\n');

	// Build table
	lines.push('| From \\ To |' + allSceneIds.map(() => ' ✓ ').join('|') + '|');
	lines.push('|' + '-'.repeat(15) + '|' + allSceneIds.map(() => ':---:').join('|') + '|');

	for (const fromId of allSceneIds) {
		const row = [fromId];
		const scene = sceneMap[fromId];

		const connections = new Set();
		for (const choice of scene.choices) {
			for (const dest of choice.destinations) {
				connections.add(dest);
			}
		}

		for (const toId of allSceneIds) {
			row.push(connections.has(toId) ? '✓' : '');
		}

		lines.push('| ' + row.join(' | ') + ' |');
	}

	return lines.join('\n');
}

/**
 * Main script execution
 */
async function main() {
	console.log('📖 Generating scene flow documentation...\n');

	// Find all scene files
	const sceneFiles = findSceneFiles(scenesDir);
	console.log(`Found ${sceneFiles.length} scene files\n`);

	// Parse all scenes
	const scenes = [];
	for (const file of sceneFiles) {
		const scene = parseSceneFile(file);
		if (scene) {
			scenes.push(scene);
			console.log(`✓ Parsed: ${scene.id}`);
		}
	}

	console.log(`\n✓ Successfully parsed ${scenes.length} scenes\n`);

	// Generate documentation
	const sections = [];

	sections.push('# Scene Flow Documentation');
	sections.push('');
	sections.push('> This file is automatically generated by `generate-scene-flow.js`');
	sections.push('> To update after adding new scenes, run: `node generate-scene-flow.js`');
	sections.push('');
	sections.push(`**Last updated:** ${new Date().toLocaleString()}`);
	sections.push(`**Total scenes:** ${scenes.length}`);
	sections.push('');

	// Table of contents
	sections.push('## Table of Contents');
	sections.push('');
	sections.push('- [Scene Connection Matrix](#scene-connection-matrix)');
	sections.push('- [Scene Flow Details](#scene-flow-details)');
	sections.push('- [Mermaid Diagram](#mermaid-diagram)');
	sections.push('');

	// Connection matrix
	sections.push(generateConnectionMatrix(scenes));
	sections.push('');

	// Flow details
	sections.push('## Scene Flow Details');
	sections.push('');
	sections.push('Below is a detailed breakdown of each scene and where it can lead.');
	sections.push('');
	sections.push(generateTextFlow(scenes));

	// Mermaid diagram
	sections.push('');
	sections.push('## Mermaid Diagram');
	sections.push('');
	sections.push('Visual representation of all scene flows:');
	sections.push('');
	sections.push('```mermaid');
	sections.push(generateMermaidDiagram(scenes));
	sections.push('```');
	sections.push('');

	// Statistics
	sections.push('## Statistics');
	sections.push('');
	const totalChoices = scenes.reduce((sum, s) => sum + s.choices.length, 0);
	const scenesWithOutcomes = scenes.filter(s => s.hasOutcomes).length;
	
	sections.push(`- **Total Scenes:** ${scenes.length}`);
	sections.push(`- **Total Choices:** ${totalChoices}`);
	sections.push(`- **Scenes with Conditional Outcomes:** ${scenesWithOutcomes}`);
	sections.push('');

	// Write output file
	const outputPath = path.join(docsDir, 'SCENE_FLOW.md');
	const output = sections.join('\n');

	fs.writeFileSync(outputPath, output, 'utf-8');

	console.log(`✅ Scene flow documentation generated!`);
	console.log(`📄 Output: ${outputPath}`);
	console.log(`\n📊 Summary:`);
	console.log(`   - Total scenes: ${scenes.length}`);
	console.log(`   - Total choices: ${totalChoices}`);
	console.log(`   - Scenes with outcomes: ${scenesWithOutcomes}`);
}

// Run the script
main().catch(error => {
	console.error('Error:', error.message);
	process.exit(1);
});

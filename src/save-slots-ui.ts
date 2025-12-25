/**
 * Save Slots UI Manager
 * Handles the display and interaction with save slot system
 */

import {
	getSaveSlots,
	saveToSlot,
	loadFromSlot,
	deleteSlot,
	getNextAvailableSlotId,
	type SaveSlot
} from './story-manager';
import { renderScene, updateDebugConsole } from './ui';

let currentModal: 'save' | 'load' | null = null;

/**
 * Create the save slots modal HTML
 */
export function createSaveSlotsModal(): void {
	const existingModal = document.getElementById('save-slots-modal');
	if (existingModal) return; // Already created

	const modalHTML = `
		<div class="save-slots-modal" id="save-slots-modal" style="display: none;">
			<div class="save-slots-modal-content">
				<div class="save-slots-header">
					<h2 id="save-slots-title">Save Game</h2>
					<button class="close-modal-btn" id="close-save-slots-btn" type="button">&times;</button>
				</div>
				<div class="save-slots-list" id="save-slots-list">
					<!-- Slots will be rendered here -->
				</div>
			</div>
		</div>
	`;

	const appWrapper = document.querySelector('.app-wrapper');
	if (appWrapper) {
		appWrapper.insertAdjacentHTML('beforeend', modalHTML);
	}

	// Wire up close button
	const closeBtn = document.getElementById('close-save-slots-btn');
	if (closeBtn) {
		closeBtn.addEventListener('click', closeSaveSlotsModal);
	}

	// Close on background click
	const modal = document.getElementById('save-slots-modal');
	if (modal) {
		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				closeSaveSlotsModal();
			}
		});
	}
}

/**
 * Show the save slots modal in save mode
 */
export function showSaveModal(): void {
	currentModal = 'save';
	const modal = document.getElementById('save-slots-modal');
	const title = document.getElementById('save-slots-title');
	
	if (title) title.textContent = 'Save Game';
	if (modal) modal.style.display = 'flex';
	
	renderSaveSlots();
}

/**
 * Show the save slots modal in load mode
 */
export function showLoadModal(): void {
	currentModal = 'load';
	const modal = document.getElementById('save-slots-modal');
	const title = document.getElementById('save-slots-title');
	
	if (title) title.textContent = 'Load Game';
	if (modal) modal.style.display = 'flex';
	
	renderSaveSlots();
}

/**
 * Close the save slots modal
 */
export function closeSaveSlotsModal(): void {
	const modal = document.getElementById('save-slots-modal');
	if (modal) modal.style.display = 'none';
	currentModal = null;
}

/**
 * Render the save slots list
 */
function renderSaveSlots(): void {
	const container = document.getElementById('save-slots-list');
	if (!container) return;

	const slots = getSaveSlots();
	const maxSlots = 10;

	container.innerHTML = '';

	for (let i = 1; i <= maxSlots; i++) {
		const slot = slots.find(s => s.id === i);
		const slotElement = createSlotElement(i, slot);
		container.appendChild(slotElement);
	}
}

/**
 * Create a single slot element
 */
function createSlotElement(slotId: number, slot: SaveSlot | undefined): HTMLElement {
	const slotDiv = document.createElement('div');
	slotDiv.className = 'save-slot';
	slotDiv.setAttribute('data-slot-id', slotId.toString());

	if (slot) {
		// Existing save
		const date = new Date(slot.timestamp);
		const dateStr = date.toLocaleString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});

		slotDiv.innerHTML = `
			<div class="slot-number">Slot ${slotId}</div>
			<div class="slot-content">
				<div class="slot-name">${escapeHtml(slot.name)}</div>
				<div class="slot-details">
					<span class="slot-scene">${escapeHtml(slot.sceneName || slot.sceneId)}</span>
					<span class="slot-date">${dateStr}</span>
				</div>
			</div>
			<div class="slot-actions">
				${currentModal === 'save' ? `<button class="slot-btn save-slot-btn" data-slot-id="${slotId}">Overwrite</button>` : ''}
				${currentModal === 'load' ? `<button class="slot-btn load-slot-btn" data-slot-id="${slotId}">Load</button>` : ''}
				<button class="slot-btn delete-slot-btn" data-slot-id="${slotId}">Delete</button>
			</div>
		`;
	} else {
		// Empty slot
		slotDiv.classList.add('empty-slot');
		slotDiv.innerHTML = `
			<div class="slot-number">Slot ${slotId}</div>
			<div class="slot-content">
				<div class="slot-name empty">Empty Slot</div>
			</div>
			<div class="slot-actions">
				${currentModal === 'save' ? `<button class="slot-btn save-slot-btn" data-slot-id="${slotId}">Save Here</button>` : ''}
				${currentModal === 'load' ? `<div class="slot-empty-msg">No save data</div>` : ''}
			</div>
		`;
	}

	// Wire up event listeners
	const saveBtn = slotDiv.querySelector('.save-slot-btn');
	const loadBtn = slotDiv.querySelector('.load-slot-btn');
	const deleteBtn = slotDiv.querySelector('.delete-slot-btn');

	if (saveBtn) {
		saveBtn.addEventListener('click', () => handleSave(slotId));
	}
	if (loadBtn) {
		loadBtn.addEventListener('click', () => handleLoad(slotId));
	}
	if (deleteBtn) {
		deleteBtn.addEventListener('click', () => handleDelete(slotId));
	}

	return slotDiv;
}

/**
 * Handle save to slot
 */
function handleSave(slotId: number): void {
	try {
		const slot = saveToSlot(slotId);
		
		// Show success message
		showStatusMessage(`Game saved to Slot ${slotId}`, 'success');
		
		// Re-render to show updated slot
		renderSaveSlots();
		
		// Close modal after brief delay
		setTimeout(() => {
			closeSaveSlotsModal();
		}, 500);
	} catch (error) {
		console.error('Error saving to slot:', error);
		showStatusMessage('Error saving game', 'error');
	}
}

/**
 * Handle load from slot
 */
function handleLoad(slotId: number): void {
	try {
		const scene = loadFromSlot(slotId);
		
		// Hide name modal if it's visible
		const nameModal = document.getElementById('name-modal');
		if (nameModal) {
			nameModal.style.display = 'none';
		}
		
		// Show success message
		showStatusMessage(`Game loaded from Slot ${slotId}`, 'success');
		
		// Re-render the scene
		renderScene(scene);
		updateDebugConsole();
		
		// Close modal
		closeSaveSlotsModal();
	} catch (error) {
		console.error('Error loading from slot:', error);
		showStatusMessage('Error loading game', 'error');
	}
}

/**
 * Handle delete slot
 */
function handleDelete(slotId: number): void {
	const slots = getSaveSlots();
	const slot = slots.find(s => s.id === slotId);
	
	if (!slot) return;

	if (confirm(`Delete save "${slot.name}"?`)) {
		deleteSlot(slotId);
		showStatusMessage(`Deleted Slot ${slotId}`, 'success');
		renderSaveSlots();
	}
}

/**
 * Show a status message
 */
function showStatusMessage(message: string, type: 'success' | 'error'): void {
	const statusMsg = document.getElementById('status-msg');
	if (statusMsg) {
		statusMsg.textContent = message;
		statusMsg.className = `status-msg status-${type}`;
		setTimeout(() => {
			statusMsg.textContent = '';
			statusMsg.className = 'status-msg';
		}, 2000);
	}
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text: string): string {
	const div = document.createElement('div');
	div.textContent = text;
	return div.innerHTML;
}

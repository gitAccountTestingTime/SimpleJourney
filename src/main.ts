// Clean main entry: imports and app wiring
import {
    initStory,
    restoreProgress,
    saveProgress,
    resetProgress,
    addOrUpdateCharacter,
    addOrUpdatePlace,
    setPlayerName,
    getPlayerName,
} from './story-manager';
import { createDebugConsole, renderScene, updateDebugConsole } from './ui';

// Render app skeleton
// @ts-ignore
document.querySelector('#app').innerHTML = `
<div class="name-modal" id="name-modal">
    <div class="name-modal-content">
        <h2>Welcome, Traveler</h2>
        <p>Before your journey begins, tell us your name:</p>
        <input type="text" id="player-name-input" placeholder="Enter your name" maxlength="30" />
        <button id="start-journey-btn" type="button">Begin Journey</button>
    </div>
</div>
<div class="app-wrapper">
    <main class="app-card" role="main">
        <div id="intro-text" aria-live="polite" class="intro-text"></div>
        <section class="choices-section">
            <h2>Make your choice:</h2>
            <ul id="choices-list" aria-label="Choices" role="list"></ul>
        </section>
        <section class="titles-section">
            <h3>Titles Earned</h3>
            <div id="titles-display" class="titles-display"></div>
        </section>
        <div class="control-buttons">
            <button id="save-btn" type="button">Save</button>
            <button id="restart-btn" type="button">Restart</button>
            <span id="status-msg" aria-live="polite" class="status-msg"></span>
        </div>
    </main>
</div>
`;

// Ensure debug console exists and wire debug controls
const debugConsole = createDebugConsole();

const saveBtn = document.getElementById('save-btn') as HTMLButtonElement | null;
const statusMsg = document.getElementById('status-msg') as HTMLElement | null;
const restartBtn = document.getElementById('restart-btn') as HTMLButtonElement | null;

// Handle name input modal
const nameModal = document.getElementById('name-modal') as HTMLElement | null;
const playerNameInput = document.getElementById('player-name-input') as HTMLInputElement | null;
const startJourneyBtn = document.getElementById('start-journey-btn') as HTMLButtonElement | null;

function startGame() {
    if (nameModal) nameModal.style.display = 'none';
    const initial = restoreProgress();
    renderScene(initial);
    updateDebugConsole();
}

// Check if player already has a name from saved progress
const existingName = getPlayerName();
if (existingName) {
    // Player has saved progress with a name, start directly
    startGame();
} else {
    // Show name input modal for new players
    if (nameModal) nameModal.style.display = 'flex';
    
    if (startJourneyBtn && playerNameInput) {
        const handleStartJourney = () => {
            const name = playerNameInput.value.trim();
            if (name.length > 0) {
                setPlayerName(name);
                startGame();
            } else {
                playerNameInput.classList.add('input-error');
                setTimeout(() => playerNameInput.classList.remove('input-error'), 500);
            }
        };
        
        startJourneyBtn.addEventListener('click', handleStartJourney);
        
        playerNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleStartJourney();
            }
        });
    }
}

if (restartBtn) {
    restartBtn.addEventListener('click', () => {
        resetProgress();
        // Clear the current scene display
        const introEl = document.getElementById('intro-text') as HTMLElement | null;
        const choicesList = document.getElementById('choices-list') as HTMLUListElement | null;
        if (introEl) introEl.innerText = '';
        if (choicesList) choicesList.innerHTML = '';
        // Show name modal for restart
        if (nameModal && playerNameInput) {
            nameModal.style.display = 'flex';
            playerNameInput.value = '';
            playerNameInput.focus();
        }
        updateDebugConsole();
    });
}

if (saveBtn) {
    saveBtn.addEventListener('click', () => {
        saveProgress();
        if (statusMsg) {
            statusMsg.textContent = 'Progress saved.';
            setTimeout(() => {
                if (statusMsg) statusMsg.textContent = '';
            }, 2000);
        }
    });
}

// Debug: Reset button inside debug console
const debugResetBtn = document.getElementById('debug-reset-btn') as HTMLButtonElement | null;
if (debugResetBtn) {
    debugResetBtn.addEventListener('click', () => {
        resetProgress();
        const start = initStory();
        renderScene(start);
        updateDebugConsole();
    });
}

// Debug: add character/place widgets
const addCharBtn = document.getElementById('add-char-btn') as HTMLButtonElement | null;
const newCharId = document.getElementById('new-char-id') as HTMLInputElement | null;
const newCharName = document.getElementById('new-char-name') as HTMLInputElement | null;
if (addCharBtn) {
    addCharBtn.addEventListener('click', () => {
        if (!newCharId || !newCharName) return;
        const id = newCharId.value.trim();
        const name = newCharName.value.trim();
        if (!id) return;
        addOrUpdateCharacter({ id, name, stats: {} });
        newCharId.value = '';
        newCharName.value = '';
        updateDebugConsole();
    });
}

const addPlaceBtn = document.getElementById('add-place-btn') as HTMLButtonElement | null;
const newPlaceId = document.getElementById('new-place-id') as HTMLInputElement | null;
const newPlaceName = document.getElementById('new-place-name') as HTMLInputElement | null;
if (addPlaceBtn) {
    addPlaceBtn.addEventListener('click', () => {
        if (!newPlaceId || !newPlaceName) return;
        const id = newPlaceId.value.trim();
        const name = newPlaceName.value.trim();
        if (!id) return;
        addOrUpdatePlace({ id, name, stats: {} });
        newPlaceId.value = '';
        newPlaceName.value = '';
        updateDebugConsole();
    });
}



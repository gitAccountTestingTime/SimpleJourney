// Clean main entry: imports and app wiring
import {
    initStory,
    restoreProgress,
    saveProgress,
    resetProgress,
    addOrUpdateCharacter,
    addOrUpdatePlace,
} from './story-manager';
import { createDebugConsole, renderScene, updateDebugConsole } from './ui';

// Render app skeleton
// @ts-ignore
document.querySelector('#app').innerHTML = `
<div class="app-wrapper">
    <main class="app-card" role="main">
        <header class="app-header">
            <div id="intro-text" aria-live="polite" class="intro-text"></div>
            <div class="stats-panel" id="stats-panel" aria-hidden="false"></div>
            <div class="control-buttons">
                <button id="save-btn" type="button">Save</button>
                <button id="restart-btn" type="button">Restart</button>
                <span id="status-msg" aria-live="polite" class="status-msg"></span>
            </div>
        </header>
        <header>
            <h2>Make your choice:</h2>
        </header>
        <section class="choices-section">
            <ul id="choices-list" aria-label="Choices" role="list"></ul>
        </section>
        <section class="titles-section">
            <h3>Titles Earned</h3>
            <div id="titles-display" class="titles-display"></div>
        </section>
    </main>
</div>
`;

// Ensure debug console exists and wire debug controls
const debugConsole = createDebugConsole();

const saveBtn = document.getElementById('save-btn') as HTMLButtonElement | null;
const statusMsg = document.getElementById('status-msg') as HTMLElement | null;
const restartBtn = document.getElementById('restart-btn') as HTMLButtonElement | null;

// Restore progress and render initial scene
const initial = restoreProgress();
renderScene(initial);
updateDebugConsole();

if (restartBtn) {
    restartBtn.addEventListener('click', () => {
        resetProgress();
        const start = initStory();
        renderScene(start);
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



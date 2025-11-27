import { 
	getCurrentScene,
	choose,
	getStats,
	setStats,
	getEarnedTitles,
	getAllTitles,
	awardTitle,
	removeTitle,
	getAllCharacters,
	getAllPlaces,
	addOrUpdateCharacter,
	removeCharacter,
	setCharacterStat,
	modifyCharacterStat,
	addOrUpdatePlace,
	removePlace,
	setPlaceStat
} from './story-manager';

export function clearChoicesUI() {
	const choicesList = document.getElementById('choices-list') as HTMLUListElement | null;
	if (!choicesList) return;
	choicesList.innerHTML = '';
}

export function renderEndState() {
	const introEl = document.getElementById('intro-text') as HTMLElement | null;
	const choicesList = document.getElementById('choices-list') as HTMLUListElement | null;
	if (introEl) introEl.textContent = 'The story ends. Thank you for playing.';
	if (!choicesList) return;
	clearChoicesUI();
	const endLabel = document.createElement('li');
	endLabel.textContent = '— End —';
	endLabel.setAttribute('aria-hidden', 'true');
	choicesList.appendChild(endLabel);
}

export function populateChoices(scene: ReturnType<typeof getCurrentScene>) {
	const choicesList = document.getElementById('choices-list') as HTMLUListElement | null;
	if (!choicesList) return;
	clearChoicesUI();
	if (!scene.choices || scene.choices.length === 0) {
		renderEndState();
		return;
	}
	const stats = getStats();
	scene.choices.forEach(c => {
		const li = document.createElement('li');
		li.setAttribute('role', 'listitem');
		const btn = document.createElement('button');
		btn.type = 'button';
		btn.className = 'choice-button';
		btn.textContent = c.text;

		// Check requirements (if any) and act accordingly
		let unmetReasons: string[] = [];
		if (c.requirements) {
			const check = (window as any).storyManagerCheckRequirements
				? (window as any).storyManagerCheckRequirements(c.requirements)
				: null;
			// prefer using story-manager's checkRequirements when available
			if (check && typeof check === 'object') {
				if (!check.ok) unmetReasons = check.unmet;
			} else {
				// fallback: evaluate against local stats snapshot
				Object.keys(c.requirements).forEach(k => {
					const req = (c.requirements as any)[k] as { min?: number; max?: number };
					const val = (stats as any)[k] || 0;
					if (typeof req.min === 'number' && val < req.min) {
						unmetReasons.push(`${k} ≥ ${req.min}`);
					}
					if (typeof req.max === 'number' && val > req.max) {
						unmetReasons.push(`${k} ≤ ${req.max}`);
					}
				});
			}
		}

		if (unmetReasons.length > 0) {
			if (c.onFail === 'hide') {
				// do not render this choice at all
				return;
			}
			btn.disabled = true;
			btn.classList.add('choice-disabled');
			const icon = document.createElement('span');
			icon.className = 'requirement-icon';
			icon.setAttribute('role', 'img');
			icon.setAttribute('aria-label', 'locked');
			icon.textContent = '🔒';
			const hint = document.createElement('div');
			hint.className = 'requirement-hint';
			hint.textContent = `Requires: ${unmetReasons.join(', ')}`;
			li.appendChild(icon);
			li.appendChild(btn);
			li.appendChild(hint);
			choicesList.appendChild(li);
			return;
		}

		btn.addEventListener('click', () => {
			const next = choose(c.id);
			if (!next) {
				renderEndState();
				return;
			}
			renderScene(next);
			// show toast for newly earned titles
			const newlyEarned = (next as any)._newlyEarnedTitles || [];
			newlyEarned.forEach((title: any) => {
				showTitleToast(title);
			});
		});
		li.appendChild(btn);
		choicesList.appendChild(li);
	});
}

export function renderScene(scene: ReturnType<typeof getCurrentScene>) {
	const introEl = document.getElementById('intro-text') as HTMLElement | null;
	if (introEl) introEl.textContent = scene.text;
	populateChoices(scene);
	renderStats();
	renderTitles();
}

export function renderStats() {
	const statsPanel = document.getElementById('stats-panel') as HTMLElement | null;
	if (!statsPanel) return;
	const stats = getStats();
	statsPanel.innerHTML = '';
	Object.keys(stats).forEach(k => {
		const val = (stats as any)[k];
		const badge = document.createElement('div');
		badge.className = 'stat-badge';
		badge.setAttribute('data-stat', k);
		badge.textContent = `${k}: ${val}`;
		statsPanel.appendChild(badge);
	});
}

export function renderTitles() {
	const titlesDisplay = document.getElementById('titles-display') as HTMLElement | null;
	if (!titlesDisplay) return;
	const titles = getEarnedTitles();
	titlesDisplay.innerHTML = '';
	if (titles.length === 0) {
		titlesDisplay.innerHTML = '<p style="color: rgba(255,255,255,0.5);">No titles earned yet</p>';
		return;
	}
	titles.forEach(t => {
		const badge = document.createElement('div');
		badge.className = 'title-badge';
		badge.setAttribute('title', t.description);
		badge.innerHTML = `<span class="title-icon">${t.icon || '⭐'}</span> <span class="title-name">${t.name}</span>`;
		titlesDisplay.appendChild(badge);
	});
}

export function showTitleToast(title: any) {
	const toast = document.createElement('div');
	toast.className = 'title-toast';
	toast.innerHTML = `
		<div class="toast-content">
			<span class="toast-icon">${title.icon || '⭐'}</span>
			<div class="toast-text">
				<div class="toast-title">Title Earned!</div>
				<div class="toast-name">${title.name}</div>
				<div class="toast-desc">${title.description}</div>
			</div>
		</div>
	`;
	document.body.appendChild(toast);
	// auto-remove after 4 seconds
	setTimeout(() => {
		toast.classList.add('fade-out');
		setTimeout(() => toast.remove(), 500);
	}, 4000);
}

// Expose story-manager's checkRequirements to UI so main can call it (keeps logic single-sourced)
// (Main still expects this global to exist)
(window as any).storyManagerCheckRequirements = (window as any).storyManagerCheckRequirements || undefined;

// Debug Console: allow editing stats and inspecting game state
export function createDebugConsole() {
	const container = document.createElement('div');
	container.id = 'debug-console';
	// start collapsed by default for less visual noise
	container.className = 'debug-console collapsed';
	container.innerHTML = `
		<div class="debug-header">
			<h3>🐛 Debug Console</h3>
			<button id="debug-toggle" type="button" class="debug-toggle-btn">+</button>
		</div>
		<div class="debug-body debug-console collapsed">
			<fieldset class="debug-group">
				<legend>Current Scene</legend>
				<div id="debug-scene"></div>
			</fieldset>
			<fieldset class="debug-group">
				<legend>Edit Stats</legend>
				<div id="debug-stats-editor"></div>
			</fieldset>
			<fieldset class="debug-group">
				<legend>Manage Titles</legend>
				<div id="debug-titles-editor"></div>
			</fieldset>
			<fieldset class="debug-group">
				<legend>Characters</legend>
				<div id="debug-characters-editor"></div>
				<div style="display:flex;gap:0.5rem;margin-top:0.5rem;">
					<input id="new-char-id" placeholder="id" style="flex:0 0 6rem;" />
					<input id="new-char-name" placeholder="name" style="flex:1;" />
					<button id="add-char-btn" type="button">Add</button>
				</div>
			</fieldset>
			<fieldset class="debug-group">
				<legend>Places</legend>
				<div id="debug-places-editor"></div>
				<div style="display:flex;gap:0.5rem;margin-top:0.5rem;">
					<input id="new-place-id" placeholder="id" style="flex:0 0 6rem;" />
					<input id="new-place-name" placeholder="name" style="flex:1;" />
					<button id="add-place-btn" type="button">Add</button>
				</div>
			</fieldset>
			<div class="debug-group debug-controls">
				<button id="debug-reset-btn" type="button" class="debug-action-btn">Reset All Stats</button>
			</div>
		</div>
	`;
	document.body.appendChild(container);
	// Attach toggle handler directly to the button to avoid timing issues
	const toggle = container.querySelector('#debug-toggle') as HTMLButtonElement | null;
	if (toggle) {
		// ensure correct initial label
		toggle.textContent = '+';
		toggle.addEventListener('click', () => {
			const isCollapsed = container.classList.toggle('collapsed');
			const expanded = !isCollapsed;
			toggle.textContent = expanded ? '−' : '+';
		});
	}
	return container;
}

export function updateDebugConsole() {
	const debugConsole = document.getElementById('debug-console') as HTMLElement | null;
	if (!debugConsole) return;
	const scene = getCurrentScene();
	const stats = getStats();
	const allTitles = getAllTitles();
	const earnedTitles = new Set(getEarnedTitles().map(t => t.id));
	
	const sceneEl = debugConsole.querySelector('#debug-scene');
	const statsEditor = debugConsole.querySelector('#debug-stats-editor');
	const titlesEditor = debugConsole.querySelector('#debug-titles-editor');
	const charsEditor = debugConsole.querySelector('#debug-characters-editor');
	const placesEditor = debugConsole.querySelector('#debug-places-editor');
	
	if (sceneEl) {
		sceneEl.innerHTML = `<p><strong>Scene ID:</strong> ${scene.id}</p>`;
	}
	
	if (statsEditor) {
		statsEditor.innerHTML = '';
		Object.keys(stats).forEach(k => {
			const val = (stats as any)[k];
			const row = document.createElement('div');
			row.className = 'debug-stat-row';
			row.innerHTML = `
				<label>${k}:</label>
				<input type="number" class="debug-stat-input" data-stat="${k}" value="${val}" />
			`;
			const input = row.querySelector('input') as HTMLInputElement | null;
			if (input) {
				input.addEventListener('change', () => {
					const newVal = parseInt(input.value, 10);
					if (!isNaN(newVal)) {
						// @ts-ignore
						const updates = { [k]: newVal };
						setStats(updates);
						renderStats();
						updateDebugConsole();
					}
				});
			}
			statsEditor.appendChild(row);
		});
	}
	
	if (titlesEditor) {
		titlesEditor.innerHTML = '';
		allTitles.forEach(t => {
			const row = document.createElement('div');
			row.className = 'debug-title-row';
			const checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.checked = earnedTitles.has(t.id);
			checkbox.addEventListener('change', () => {
				if (checkbox.checked) {
					awardTitle(t.id);
				} else {
					removeTitle(t.id);
				}
				renderTitles();
				updateDebugConsole();
			});
			const label = document.createElement('label');
			label.appendChild(checkbox);
			label.appendChild(document.createTextNode(` ${t.icon || '⭐'} ${t.name}`));
			row.appendChild(label);
			titlesEditor.appendChild(row);
		});
	}
	
	// Characters editor
	if (charsEditor) {
		charsEditor.innerHTML = '';
		const chars = getAllCharacters();
		chars.forEach(ch => {
			const row = document.createElement('div');
			row.className = 'debug-char-row';
			row.style.display = 'flex';
			row.style.flexDirection = 'column';
			row.style.padding = '0.25rem 0';
			const top = document.createElement('div');
			top.style.display = 'flex';
			top.style.gap = '0.4rem';
			const idSpan = document.createElement('span');
			idSpan.textContent = ch.id;
			idSpan.style.fontWeight = '600';
			idSpan.style.minWidth = '6rem';
			const nameInput = document.createElement('input');
			nameInput.value = ch.name || '';
			nameInput.placeholder = 'name';
			nameInput.addEventListener('change', () => {
				addOrUpdateCharacter({ id: ch.id, name: nameInput.value });
				updateDebugConsole();
			});
			const removeBtn = document.createElement('button');
			removeBtn.textContent = 'Remove';
			removeBtn.addEventListener('click', () => {
				removeCharacter(ch.id);
				updateDebugConsole();
			});
			top.appendChild(idSpan);
			top.appendChild(nameInput);
			top.appendChild(removeBtn);
			row.appendChild(top);
			// stats
			const statsDiv = document.createElement('div');
			statsDiv.style.display = 'flex';
			statsDiv.style.gap = '0.4rem';
			statsDiv.style.flexWrap = 'wrap';
			if (ch.stats) {
				Object.keys(ch.stats).forEach(sk => {
					const sRow = document.createElement('div');
					sRow.style.display = 'flex';
					sRow.style.alignItems = 'center';
					sRow.style.gap = '0.3rem';
					const sLabel = document.createElement('label');
					sLabel.textContent = sk + ':';
					const sInput = document.createElement('input');
					sInput.type = 'number';
					sInput.value = String(ch.stats![sk]);
					sInput.addEventListener('change', () => {
						const v = parseInt(sInput.value, 10);
						if (!isNaN(v)) setCharacterStat(ch.id, sk, v);
						updateDebugConsole();
					});
					sRow.appendChild(sLabel);
					sRow.appendChild(sInput);
					statsDiv.appendChild(sRow);
				});
			}
			row.appendChild(statsDiv);
			charsEditor.appendChild(row);
		});
	}
	
	// Places editor
	if (placesEditor) {
		placesEditor.innerHTML = '';
		const pls = getAllPlaces();
		pls.forEach(p => {
			const row = document.createElement('div');
			row.className = 'debug-place-row';
			row.style.display = 'flex';
			row.style.flexDirection = 'column';
			row.style.padding = '0.25rem 0';
			const top = document.createElement('div');
			top.style.display = 'flex';
			top.style.gap = '0.4rem';
			const idSpan = document.createElement('span');
			idSpan.textContent = p.id;
			idSpan.style.fontWeight = '600';
			idSpan.style.minWidth = '6rem';
			const nameInput = document.createElement('input');
			nameInput.value = p.name || '';
			nameInput.placeholder = 'name';
			nameInput.addEventListener('change', () => {
				addOrUpdatePlace({ id: p.id, name: nameInput.value });
				updateDebugConsole();
			});
			const removeBtn = document.createElement('button');
			removeBtn.textContent = 'Remove';
			removeBtn.addEventListener('click', () => {
				removePlace(p.id);
				updateDebugConsole();
			});
			top.appendChild(idSpan);
			top.appendChild(nameInput);
			top.appendChild(removeBtn);
			row.appendChild(top);
			// stats
			const statsDiv = document.createElement('div');
			statsDiv.style.display = 'flex';
			statsDiv.style.gap = '0.4rem';
			statsDiv.style.flexWrap = 'wrap';
			if (p.stats) {
				Object.keys(p.stats).forEach(sk => {
					const sRow = document.createElement('div');
					sRow.style.display = 'flex';
					sRow.style.alignItems = 'center';
					sRow.style.gap = '0.3rem';
					const sLabel = document.createElement('label');
					sLabel.textContent = sk + ':';
					const sInput = document.createElement('input');
					sInput.type = 'number';
					sInput.value = String(p.stats![sk]);
					sInput.addEventListener('change', () => {
						const v = parseInt(sInput.value, 10);
						if (!isNaN(v)) setPlaceStat(p.id, sk, v);
						updateDebugConsole();
					});
					sRow.appendChild(sLabel);
					sRow.appendChild(sInput);
					statsDiv.appendChild(sRow);
				});
			}
			row.appendChild(statsDiv);
			placesEditor.appendChild(row);
		});
	}
}

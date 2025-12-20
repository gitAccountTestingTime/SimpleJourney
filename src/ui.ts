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
  setPlaceStat,
  startChallenge,
  isChallengeActive,
  isChallengeCompleted,
  getActiveChallenge,
  completeChallenge,
  cancelChallenge,
  getPlayerName,
  getEarnedRewards,
  getAllRewards,
  getAllHiddenAttributes,
  type RealLifeChallenge,
  type Reward
} from './story-manager';

function replaceNamePlaceholder(text: string): string {
  const name = getPlayerName();
  return text.replace(/\{name\}/gi, name || 'Traveler');
}

export function clearChoicesUI() {
  const choicesList = document.getElementById('choices-list') as HTMLUListElement | null;
  if (!choicesList) return;
  choicesList.innerHTML = '';
}

export function renderEndState() {
  const introEl = document.getElementById('intro-text') as HTMLElement | null;
  const choicesList = document.getElementById('choices-list') as HTMLUListElement | null;
  if (introEl) introEl.innerHTML = 'The story ends. Thank you for playing.';
  if (!choicesList) return;
  clearChoicesUI();
  const endLabel = document.createElement('li');
  endLabel.textContent = '— End —';
  endLabel.setAttribute('aria-hidden', 'true');
  choicesList.appendChild(endLabel);
}

export function showRewardNotification(reward: Reward) {
  const icon = reward.icon || '🎉';
  const message = reward.message || `You earned: ${reward.name}!`;
  
  alert(`${icon} Reward Unlocked!\n\n${reward.name}\n\n${message}`);
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
  scene.choices.forEach((c) => {
    const li = document.createElement('li');
    li.setAttribute('role', 'listitem');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'choice-button';
    btn.textContent = c.text;

    // Check for real-life challenge
    if (c.realLifeChallenge) {
      const challenge = c.realLifeChallenge;
      const isCompleted = isChallengeCompleted(challenge.id);
      const isActive = isChallengeActive(challenge.id);

      if (!isCompleted) {
        btn.classList.add('choice-challenge');
        const challengeIcon = document.createElement('span');
        challengeIcon.className = 'challenge-icon';
        challengeIcon.textContent = getChallengeIcon(challenge.type);
        challengeIcon.setAttribute('title', 'Real-life challenge required');
        
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          showChallengeModal(challenge, c.id);
        });
        
        li.appendChild(challengeIcon);
        li.appendChild(btn);
        
        if (isActive) {
          const activeInfo = getActiveChallenge(challenge.id);
          if (activeInfo) {
            const progressDiv = document.createElement('div');
            progressDiv.className = 'challenge-progress';
            progressDiv.textContent = `In progress: ${activeInfo.elapsedMinutes} minutes elapsed`;
            li.appendChild(progressDiv);
          }
        }
        
        choicesList.appendChild(li);
        return;
      }
    }

    // Check requirements (if any) and act accordingly
    let unmetReasons: string[] = [];
    if (c.requirements) {
      const check = (window as any).storyManagerCheckRequirements
        ? (window as any).storyManagerCheckRequirements(c.requirements)
        : null;
      if (check && typeof check === 'object') {
        if (!check.ok) unmetReasons = check.unmet;
      } else {
        Object.keys(c.requirements).forEach((k) => {
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
      const result = choose(c.id);
      if (!result || !result.scene) {
        renderEndState();
        return;
      }
      renderScene(result.scene);
      const newlyEarned = (result.scene as any)._newlyEarnedTitles || [];
      newlyEarned.forEach((title: any) => {
        showTitleToast(title);
      });
      // Show reward notifications
      if (result.newRewards && result.newRewards.length > 0) {
        result.newRewards.forEach((reward, index) => {
          setTimeout(() => {
            showRewardNotification(reward);
          }, index * 300); // Stagger notifications
        });
      }
    });
    li.appendChild(btn);
    choicesList.appendChild(li);
  });
}

export function renderScene(scene: ReturnType<typeof getCurrentScene>) {
  const introEl = document.getElementById('intro-text') as HTMLElement | null;
  if (introEl) {
    const text = replaceNamePlaceholder(scene.text);
    // Convert newlines to <br> tags for proper line break display with innerHTML
    introEl.innerHTML = text.replace(/\n/g, '<br>');
  }
  populateChoices(scene);
  // Stats are now only rendered when the stats menu is open
  renderTitles();
}

export function renderStats() {
  const statsPanel = document.getElementById('stats-panel') as HTMLElement | null;
  if (!statsPanel) return;
  const stats = getStats();
  statsPanel.innerHTML = '';
  Object.keys(stats).forEach((k) => {
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
  titles.forEach((t) => {
    const badge = document.createElement('div');
    badge.className = 'title-badge';
    badge.setAttribute('title', t.description);
    badge.innerHTML = `<span class="title-icon">${t.icon || '⭐'}</span> <span class="title-name">${t.name}</span>`;
    titlesDisplay.appendChild(badge);
  });
}

export function renderRewards() {
  const rewardsDisplay = document.getElementById('rewards-display') as HTMLElement | null;
  if (!rewardsDisplay) return;
  const rewards = getEarnedRewards();
  rewardsDisplay.innerHTML = '';
  if (rewards.length === 0) {
    rewardsDisplay.innerHTML = '<p style="color: rgba(255,255,255,0.5);">No rewards unlocked yet</p>';
    return;
  }
  rewards.forEach((r) => {
    const badge = document.createElement('div');
    badge.className = 'title-badge';
    badge.setAttribute('title', r.description);
    badge.innerHTML = `<span class="title-icon">${r.icon || '🏆'}</span> <span class="title-name">${r.name}</span>`;
    rewardsDisplay.appendChild(badge);
  });
}

export function showTitleToast(title: any) {
  const icon = title.icon || '⭐';
  alert(`${icon} Title Earned!\n\n${title.name}\n\n${title.description}`);
}

// Expose story-manager's checkRequirements to UI so main can call it
(window as any).storyManagerCheckRequirements = (window as any).storyManagerCheckRequirements || undefined;

// Debug Console: create hidden console and an external open button
export function createDebugConsole() {
  // Create stats menu first
  const statsMenu = document.createElement('div');
  statsMenu.id = 'stats-menu';
  statsMenu.className = 'stats-menu';
  statsMenu.style.display = 'none';
  statsMenu.innerHTML = `
    <div class="stats-menu-header">
      <h3>📊 Player Stats</h3>
    </div>
    <div class="stats-menu-body">
      <div id="stats-panel" class="stats-panel"></div>
    </div>
  `;
  document.body.appendChild(statsMenu);

  const statsOpenBtn = document.createElement('button');
  statsOpenBtn.id = 'stats-open-btn';
  statsOpenBtn.className = 'stats-open-btn';
  statsOpenBtn.type = 'button';
  statsOpenBtn.setAttribute('aria-expanded', 'false');
  statsOpenBtn.textContent = 'Stats';
  document.body.appendChild(statsOpenBtn);

  statsOpenBtn.addEventListener('click', () => {
    const isHidden = statsMenu.style.display === 'none' || statsMenu.style.display === '';
    if (isHidden) {
      statsMenu.style.display = 'block';
      statsOpenBtn.setAttribute('aria-expanded', 'true');
      statsOpenBtn.textContent = 'Hide Stats';
      renderStats();
    } else {
      statsMenu.style.display = 'none';
      statsOpenBtn.setAttribute('aria-expanded', 'false');
      statsOpenBtn.textContent = 'Stats';
    }
  });

  // Create debug console
  const container = document.createElement('div');
  container.id = 'debug-console';
  container.className = 'debug-console';
  container.style.display = 'none';
  container.innerHTML = `
    <div class="debug-header">
      <h3>🐛 Debug Console</h3>
    </div>
    <div class="debug-body">
      <fieldset class="debug-group">
        <legend>Current Scene</legend>
        <div id="debug-scene"></div>
      </fieldset>
      <fieldset class="debug-group">
        <legend>Edit Stats</legend>
        <div id="debug-stats-editor"></div>
      </fieldset>
      <fieldset class="debug-group">
        <legend>Character Relationships</legend>
        <div id="debug-relationships-display"></div>
      </fieldset>
      <fieldset class="debug-group">
        <legend>Hidden Attributes</legend>
        <div id="debug-hidden-attributes-display"></div>
      </fieldset>
      <fieldset class="debug-group">
        <legend>Manage Titles</legend>
        <div id="debug-titles-editor"></div>
      </fieldset>
      <fieldset class="debug-group">
        <legend>Rewards Unlocked</legend>
        <div id="debug-rewards-display"></div>
      </fieldset>
      <fieldset class="debug-group">
        <legend>Manage Rewards (Read-Only)</legend>
        <div id="debug-rewards-editor"></div>
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

  const openBtn = document.createElement('button');
  openBtn.id = 'debug-open-btn';
  openBtn.className = 'debug-open-btn';
  openBtn.type = 'button';
  openBtn.setAttribute('aria-expanded', 'false');
  openBtn.textContent = 'Debug';
  document.body.appendChild(openBtn);

  openBtn.addEventListener('click', () => {
    const isHidden = container.style.display === 'none' || container.style.display === '';
    if (isHidden) {
      container.style.display = 'block';
      openBtn.setAttribute('aria-expanded', 'true');
      openBtn.textContent = 'Hide Debug';
      updateDebugConsole();
    } else {
      container.style.display = 'none';
      openBtn.setAttribute('aria-expanded', 'false');
      openBtn.textContent = 'Debug';
    }
  });

  return container;
}

export function updateDebugConsole() {
  const debugConsole = document.getElementById('debug-console') as HTMLElement | null;
  if (!debugConsole) return;
  const scene = getCurrentScene();
  const stats = getStats();
  const allTitles = getAllTitles();
  const earnedTitles = new Set(getEarnedTitles().map((t) => t.id));
  const allRewards = getAllRewards();
  const earnedRewardsSet = new Set(getEarnedRewards().map((r) => r.id));

  const sceneEl = debugConsole.querySelector('#debug-scene');
  const statsEditor = debugConsole.querySelector('#debug-stats-editor');
  const relationshipsDisplay = debugConsole.querySelector('#debug-relationships-display');
  const hiddenAttributesDisplay = debugConsole.querySelector('#debug-hidden-attributes-display');
  const titlesEditor = debugConsole.querySelector('#debug-titles-editor');
  const rewardsDisplay = debugConsole.querySelector('#debug-rewards-display');
  const rewardsEditor = debugConsole.querySelector('#debug-rewards-editor');
  const charsEditor = debugConsole.querySelector('#debug-characters-editor');
  const placesEditor = debugConsole.querySelector('#debug-places-editor');

  if (sceneEl) {
    sceneEl.innerHTML = `<p><strong>Scene ID:</strong> ${scene.id}</p>`;
  }

  if (statsEditor) {
    statsEditor.innerHTML = '';
    Object.keys(stats).forEach((k) => {
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

  if (relationshipsDisplay) {
    relationshipsDisplay.innerHTML = '';
    const hiddenAttrs = getAllHiddenAttributes();
    
    // Define major characters and their relationship stats
    const characters = [
      { name: 'Vale', trust: 'vale_trust', romance: 'vale_romance', bond: 'vale_bond' },
      { name: 'Ash', trust: 'ash_trust', romance: 'ash_romance', bond: 'ash_bond' },
      { name: 'Rook', trust: 'rook_trust', romance: 'rook_romance', bond: 'rook_bond' },
      { name: 'Sage', trust: 'sage_trust', romance: 'sage_romance', affection: 'sage_affection' },
      { name: 'Rowan', trust: 'rowan_trust', romance: 'rowan_romance', bond: 'rowan_bond' },
      { name: 'Lyra', trust: 'lyra_trust', romance: 'lyra_romance', respect: 'lyra_respect' },
      { name: 'Kieran', trust: 'kieran_trust', romance: 'kieran_romance', loyalty: 'kieran_loyalty' },
      { name: 'Seraphine', trust: 'seraphine_trust', romance: 'seraphine_romance' },
      { name: 'Finn', trust: 'finn_trust', romance: 'finn_romance', bond: 'finn_bond' }
    ];

    characters.forEach(char => {
      const hasAnyStats = Object.entries(char).slice(1).some(([_, key]) => {
        const val = hiddenAttrs[key as string];
        return val !== undefined && val !== 0;
      });

      if (hasAnyStats) {
        const charDiv = document.createElement('div');
        charDiv.style.cssText = 'margin-bottom: 0.75rem; padding: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 4px;';
        
        const nameHeader = document.createElement('div');
        nameHeader.style.cssText = 'font-weight: 600; margin-bottom: 0.25rem; color: #a78bfa;';
        nameHeader.textContent = char.name;
        charDiv.appendChild(nameHeader);

        const statsDiv = document.createElement('div');
        statsDiv.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.25rem; font-size: 0.9em;';
        
        Object.entries(char).slice(1).forEach(([label, key]) => {
          const value = hiddenAttrs[key as string];
          if (value !== undefined && value !== 0) {
            const statSpan = document.createElement('div');
            statSpan.style.cssText = 'display: flex; justify-content: space-between;';
            statSpan.innerHTML = `<span>${label}:</span><span style="color: #60a5fa;">${value}</span>`;
            statsDiv.appendChild(statSpan);
          }
        });

        charDiv.appendChild(statsDiv);
        relationshipsDisplay.appendChild(charDiv);
      }
    });

    if (relationshipsDisplay.children.length === 0) {
      relationshipsDisplay.innerHTML = '<p style="color: rgba(255,255,255,0.5); font-size: 0.9em;">No relationship stats tracked yet</p>';
    }
  }

  if (hiddenAttributesDisplay) {
    hiddenAttributesDisplay.innerHTML = '';
    const hiddenAttrs = getAllHiddenAttributes();
    
    // Relationship stat keys to exclude (already shown in relationships section)
    const relationshipKeys = new Set([
      'vale_trust', 'vale_romance', 'vale_bond',
      'ash_trust', 'ash_romance', 'ash_bond',
      'rook_trust', 'rook_romance', 'rook_bond',
      'sage_trust', 'sage_romance', 'sage_affection',
      'rowan_trust', 'rowan_romance', 'rowan_bond',
      'lyra_trust', 'lyra_romance', 'lyra_respect',
      'kieran_trust', 'kieran_romance', 'kieran_loyalty',
      'seraphine_trust', 'seraphine_romance',
      'finn_trust', 'finn_romance', 'finn_bond'
    ]);

    const otherAttrs = Object.entries(hiddenAttrs)
      .filter(([key]) => !relationshipKeys.has(key))
      .sort(([a], [b]) => a.localeCompare(b));

    if (otherAttrs.length > 0) {
      const gridDiv = document.createElement('div');
      gridDiv.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 0.5rem; font-size: 0.9em;';
      
      otherAttrs.forEach(([key, value]) => {
        const attrDiv = document.createElement('div');
        attrDiv.style.cssText = 'display: flex; justify-content: space-between; padding: 0.25rem 0.5rem; background: rgba(255,255,255,0.05); border-radius: 3px;';
        
        const keySpan = document.createElement('span');
        keySpan.style.cssText = 'color: rgba(255,255,255,0.9); overflow: hidden; text-overflow: ellipsis;';
        keySpan.textContent = key;
        keySpan.title = key; // Show full key on hover
        
        const valueSpan = document.createElement('span');
        valueSpan.style.cssText = 'color: #60a5fa; font-weight: 500; margin-left: 0.5rem;';
        
        // Format value based on type
        if (typeof value === 'boolean') {
          valueSpan.textContent = value ? '✓' : '✗';
          valueSpan.style.color = value ? '#34d399' : '#ef4444';
        } else if (typeof value === 'number') {
          valueSpan.textContent = String(value);
        } else {
          valueSpan.textContent = String(value);
          valueSpan.style.color = '#fbbf24';
        }
        
        attrDiv.appendChild(keySpan);
        attrDiv.appendChild(valueSpan);
        gridDiv.appendChild(attrDiv);
      });
      
      hiddenAttributesDisplay.appendChild(gridDiv);
    } else {
      hiddenAttributesDisplay.innerHTML = '<p style="color: rgba(255,255,255,0.5); font-size: 0.9em;">No hidden attributes tracked yet</p>';
    }
  }

  if (titlesEditor) {
    titlesEditor.innerHTML = '';
    allTitles.forEach((t) => {
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

  if (rewardsDisplay) {
    rewardsDisplay.innerHTML = '';
    const earnedRewards = getEarnedRewards();
    if (earnedRewards.length === 0) {
      rewardsDisplay.innerHTML = '<p style="color: rgba(255,255,255,0.5); font-size: 0.9em;">No rewards unlocked yet</p>';
    } else {
      earnedRewards.forEach((r) => {
        const badge = document.createElement('div');
        badge.className = 'debug-reward-badge';
        badge.style.cssText = 'padding: 0.5rem; margin: 0.25rem 0; background: rgba(139, 92, 246, 0.2); border-radius: 4px; border-left: 3px solid #8b5cf6;';
        badge.innerHTML = `<span style="font-size: 1.2em;">${r.icon || '🏆'}</span> <strong>${r.name}</strong><br><small style="color: rgba(255,255,255,0.7);">${r.description}</small>`;
        rewardsDisplay.appendChild(badge);
      });
    }
  }

  if (rewardsEditor) {
    rewardsEditor.innerHTML = '';
    allRewards.forEach((r) => {
      const row = document.createElement('div');
      row.className = 'debug-title-row';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = earnedRewardsSet.has(r.id);
      checkbox.disabled = true; // Rewards are earned through gameplay, not toggled
      const label = document.createElement('label');
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(` ${r.icon || '🏆'} ${r.name}`));
      label.title = r.description;
      row.appendChild(label);
      rewardsEditor.appendChild(row);
    });
  }

  if (charsEditor) {
    charsEditor.innerHTML = '';
    const chars = getAllCharacters();
    chars.forEach((ch) => {
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
      const statsDiv = document.createElement('div');
      statsDiv.style.display = 'flex';
      statsDiv.style.gap = '0.4rem';
      statsDiv.style.flexWrap = 'wrap';
      if (ch.stats) {
        Object.keys(ch.stats).forEach((sk) => {
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

  if (placesEditor) {
    placesEditor.innerHTML = '';
    const pls = getAllPlaces();
    pls.forEach((p) => {
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
      const statsDiv = document.createElement('div');
      statsDiv.style.display = 'flex';
      statsDiv.style.gap = '0.4rem';
      statsDiv.style.flexWrap = 'wrap';
      if (p.stats) {
        Object.keys(p.stats).forEach((sk) => {
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

// --- Real-Life Challenge UI Functions ---

function getChallengeIcon(type: string): string {
  const icons: Record<string, string> = {
    exercise: '💪',
    cooking: '🍳',
    creative: '🎨',
    social: '👥',
    learning: '📚',
    meditation: '🧘',
    physical: '🏃'
  };
  return icons[type] || '⭐';
}

function showChallengeModal(challenge: RealLifeChallenge, choiceId: string): void {
  // Remove any existing modal
  const existing = document.getElementById('challenge-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'challenge-modal';
  modal.className = 'challenge-modal';
  
  const isActive = isChallengeActive(challenge.id);
  const activeInfo = isActive ? getActiveChallenge(challenge.id) : null;
  
  modal.innerHTML = `
    <div class="challenge-modal-content">
      <div class="challenge-header">
        <span class="challenge-type-icon">${getChallengeIcon(challenge.type)}</span>
        <h2>${challenge.title}</h2>
        <button class="challenge-close" aria-label="Close">&times;</button>
      </div>
      <div class="challenge-body">
        <p class="challenge-description">${challenge.description}</p>
        <div class="challenge-instructions">
          <h3>Instructions:</h3>
          <p>${challenge.instructions}</p>
        </div>
        ${challenge.durationMinutes ? `
          <div class="challenge-duration">
            <strong>Duration:</strong> ${challenge.durationMinutes} minutes minimum
          </div>
        ` : ''}
        ${challenge.checklistItems && challenge.checklistItems.length > 0 ? `
          <div class="challenge-checklist">
            <h3>Checklist:</h3>
            <ul id="challenge-checklist">
              ${challenge.checklistItems.map((item, idx) => `
                <li>
                  <label>
                    <input type="checkbox" data-item="${idx}" ${isActive ? 'checked' : ''}>
                    ${item}
                  </label>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : ''}
        ${isActive && activeInfo ? `
          <div class="challenge-timer">
            <p><strong>Challenge started ${activeInfo.elapsedMinutes} minutes ago</strong></p>
            ${challenge.durationMinutes ? `
              <p>Time remaining: ${Math.max(0, challenge.durationMinutes - activeInfo.elapsedMinutes)} minutes</p>
            ` : ''}
          </div>
        ` : ''}
        ${challenge.rewards?.message ? `
          <div class="challenge-rewards">
            <h3>Rewards:</h3>
            <p>${challenge.rewards.message}</p>
          </div>
        ` : ''}
      </div>
      <div class="challenge-footer">
        ${!isActive ? `
          <button class="challenge-btn challenge-start" id="start-challenge-btn">Start Challenge</button>
          <button class="challenge-btn challenge-cancel">Cancel</button>
        ` : `
          <button class="challenge-btn challenge-complete" id="complete-challenge-btn">Complete Challenge</button>
          <button class="challenge-btn challenge-cancel-active" id="cancel-challenge-btn">Cancel Challenge</button>
        `}
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Event listeners
  const closeBtn = modal.querySelector('.challenge-close');
  const cancelBtn = modal.querySelector('.challenge-cancel, .challenge-cancel-active');
  const startBtn = modal.querySelector('#start-challenge-btn');
  const completeBtn = modal.querySelector('#complete-challenge-btn');
  const cancelActiveBtn = modal.querySelector('#cancel-challenge-btn');
  
  const closeModal = () => modal.remove();
  
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
  
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      startChallenge(challenge.id, choiceId);
      showToast(`Challenge started: ${challenge.title}`, 'info');
      closeModal();
      renderScene(getCurrentScene()); // Refresh to show progress
    });
  }
  
  if (completeBtn) {
    completeBtn.addEventListener('click', () => {
      const success = completeChallenge(challenge.id, challenge);
      if (success) {
        showToast(`Challenge completed: ${challenge.title}! ${challenge.rewards?.message || ''}`, 'success');
        closeModal();
        // Automatically proceed with the choice now that challenge is complete
        const next = choose(choiceId);
        if (next && next.scene) {
          renderScene(next.scene);
          const newlyEarned = (next.scene as any)._newlyEarnedTitles || [];
          newlyEarned.forEach((title: any) => {
            showTitleToast(title);
          });
          // Show reward notifications
          if (next.newRewards && next.newRewards.length > 0) {
            next.newRewards.forEach((reward, index) => {
              setTimeout(() => {
                showRewardNotification(reward);
              }, index * 300); // Stagger notifications
            });
          }
        }
      } else {
        const activeInfo = getActiveChallenge(challenge.id);
        if (activeInfo && challenge.durationMinutes && activeInfo.elapsedMinutes < challenge.durationMinutes) {
          showToast(`Please complete the full ${challenge.durationMinutes} minutes before finishing.`, 'error');
        } else {
          showToast('Challenge could not be completed. Please try again.', 'error');
        }
      }
    });
  }
  
  if (cancelActiveBtn) {
    cancelActiveBtn.addEventListener('click', () => {
      cancelChallenge(challenge.id);
      showToast('Challenge cancelled', 'info');
      closeModal();
      renderScene(getCurrentScene()); // Refresh UI
    });
  }
  
  // Click outside to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

function showToast(message: string, type: 'success' | 'error' | 'info' = 'info'): void {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

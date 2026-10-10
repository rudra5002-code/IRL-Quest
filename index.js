
    // Full 30-Mission Pool across all 6 Core Domains
    const MISSION_POOL = [
      // Explore (5)
      { id: 'e1', title: 'The NPC Escape', description: "Step outside for 10 minutes and deliberately take a safe walking route you normally never take. Notice the quiet details your commute filters out.", category: 'explore', duration: 10, difficulty: 'easy', xp: 100, icon: '🧭', mode: 'SOLO FRIENDLY' },
      { id: 'e2', title: 'Local Tourist Any%', description: "Visit a public spot nearby you walk past every day without looking. Spot three architectural or natural details you have never clocked before.", category: 'explore', duration: 15, difficulty: 'medium', xp: 150, icon: '🗺️', mode: 'SOLO FRIENDLY' },
      { id: 'e3', title: 'New Route Unlocked', description: "Choose a different street, hallway, or park path on your familiar trip. Walk at 70% speed. No speedrunning required.", category: 'explore', duration: 15, difficulty: 'easy', xp: 100, icon: '🚶', mode: 'SOLO FRIENDLY' },
      { id: 'e4', title: 'The Micro-Cartographer', description: "Walk until you find a secluded bench, alleyway plaque, or hidden tree canopy. Commit its precise coordinates to memory as your safe house.", category: 'explore', duration: 20, difficulty: 'medium', xp: 175, icon: '📍', mode: 'SOLO FRIENDLY' },
      { id: 'e5', title: 'Urban Reconnaissance', description: "Take a 30-minute expedition into an adjacent neighborhood. Inspect the oldest structure you can spot and imagine the people who built it.", category: 'explore', duration: 30, difficulty: 'hard', xp: 250, icon: '🏛️', mode: 'SOLO / CO-OP' },

      // Social DLC (5)
      { id: 's1', title: 'Friendship Side Quest', description: "Send a genuine friend a warm message with zero agenda and schedule an offline meetup. Bonus EXP for sticking to the plan.", category: 'social', duration: 10, difficulty: 'easy', xp: 100, icon: '🫂', mode: 'CO-OP READY' },
      { id: 's2', title: 'Co-op Field Session', description: "Invite someone you know to take a brisk walk, grab a tea, or play a quick tabletop game in person without looking at screens.", category: 'social', duration: 30, difficulty: 'medium', xp: 175, icon: '🎮', mode: 'CO-OP READY' },
      { id: 's3', title: 'Dialogue Tree Initiation', description: "Have a friendly, unhurried check-in with a cashier, barista, neighbor, or family member with eye contact and active listening.", category: 'social', duration: 5, difficulty: 'easy', xp: 100, icon: '💬', mode: 'SOLO FRIENDLY' },
      { id: 's4', title: 'The Unsolicited Compliment', description: "Give a genuine, respectful compliment to someone on their craft, outfit, or demeanor without expecting anything in return.", category: 'social', duration: 5, difficulty: 'easy', xp: 120, icon: '✨', mode: 'SOLO FRIENDLY' },
      { id: 's5', title: 'The Host Perk', description: "Prepare a fresh drink or snack and offer it to someone in your living space or workspace. Immediate rapport buff applied.", category: 'social', duration: 15, difficulty: 'medium', xp: 150, icon: '☕', mode: 'CO-OP READY' },

      // Creative Mode (5)
      { id: 'c1', title: 'Artist Buff: +1', description: "Grab physical paper and a pen. Sketch an ordinary object right in front of you. It is legally permitted to look completely amateur.", category: 'create', duration: 15, difficulty: 'medium', xp: 150, icon: '🎨', mode: 'ANALOG ONLY' },
      { id: 'c2', title: 'One Photo, No Feed', description: "Capture a single intentional photo of a striking shadow, texture, or sky reflection. Keep it in your camera roll solely for yourself.", category: 'create', duration: 10, difficulty: 'easy', xp: 100, icon: '📸', mode: 'SOLO FRIENDLY' },
      { id: 'c3', title: 'Micro-Poem Manifest', description: "Compose a 4-line poem or tiny micro-fiction on paper about someone or something you notice outside right now.", category: 'create', duration: 15, difficulty: 'medium', xp: 150, icon: '✍️', mode: 'ANALOG ONLY' },
      { id: 'c4', title: 'Tangible Crafting Sprint', description: "Tidy, organize, or physically rearrange one desk drawer, shelf, or workspace surface until it feels like a high-tier inventory.", category: 'create', duration: 15, difficulty: 'easy', xp: 120, icon: '🛠️', mode: 'SOLO FRIENDLY' },
      { id: 'c5', title: 'Paper Airplane Prototyping', description: "Fold a precision paper airplane using different wing creases and launch test flights down a hallway or open space.", category: 'create', duration: 10, difficulty: 'easy', xp: 110, icon: '✈️', mode: 'SOLO FRIENDLY' },

      // Movement (5)
      { id: 'm1', title: 'Loading Screen Walk', description: "Step outside for a smooth 10-minute walk at your own natural pace. No fitness tracker or step leaderboard necessary.", category: 'move', duration: 10, difficulty: 'easy', xp: 100, icon: '👟', mode: 'SOLO FRIENDLY' },
      { id: 'm2', title: 'Main Character Lap', description: "Spend 25 minutes moving however you genuinely enjoy: jog, brisk stride, pedal a bicycle, or casually shoot hoops outdoors.", category: 'move', duration: 25, difficulty: 'medium', xp: 175, icon: '🏃', mode: 'SOLO FRIENDLY' },
      { id: 'm3', title: 'Spinal Reset Protocol', description: "Step away from your chair. Gently stretch your neck, shoulders, hips, and calves for 5 deliberate minutes. Deep belly breathing.", category: 'move', duration: 5, difficulty: 'easy', xp: 100, icon: '🧘', mode: 'SOLO FRIENDLY' },
      { id: 'm4', title: 'Elevation Gain Quest', description: "Find a staircase or gentle incline hill and climb it with intentional, steady breathing. Feel the stamina gauge recharge.", category: 'move', duration: 15, difficulty: 'medium', xp: 150, icon: '🧗', mode: 'SOLO FRIENDLY' },
      { id: 'm5', title: 'Sunlight Photosynthesis', description: "Stand or walk under direct natural sky light for 15 minutes. Put your hands out, breathe fresh air, absorb photon energy.", category: 'move', duration: 15, difficulty: 'easy', xp: 125, icon: '☀️', mode: 'SOLO FRIENDLY' },

      // Learn / Cognition (5)
      { id: 'l1', title: 'Knowledge Loot Drop', description: "Visit a public library, community bulletin board, or informational sign and read one detailed fact you didn't know 15 minutes ago.", category: 'learn', duration: 15, difficulty: 'medium', xp: 150, icon: '📚', mode: 'SOLO FRIENDLY' },
      { id: 'l2', title: 'Observe & Report (To Self)', description: "Spend 7 minutes quietly cataloging ambient sounds and architecture: birds, distant tires, breeze, brick joints. Zero phone checks.", category: 'learn', duration: 7, difficulty: 'easy', xp: 100, icon: '🔎', mode: 'SOLO FRIENDLY' },
      { id: 'l3', title: 'Analog Codex Reading', description: "Find a quiet nook and read at least 15 uninterrupted pages of an actual printed physical paper book.", category: 'learn', duration: 20, difficulty: 'medium', xp: 160, icon: '📖', mode: 'SOLO FRIENDLY' },
      { id: 'l4', title: 'Flora & Fauna Census', description: "Spot and identify three distinct plant, tree, or bird species in your immediate neighborhood. Note their shapes and colors.", category: 'learn', duration: 15, difficulty: 'easy', xp: 130, icon: '🌿', mode: 'SOLO FRIENDLY' },
      { id: 'l5', title: 'Museum Brain Buff', description: "Visit an exhibit, monument, public garden, or heritage landmark. Read every word of at least two historical plaques.", category: 'learn', duration: 30, difficulty: 'hard', xp: 250, icon: '🏛️', mode: 'SOLO / CO-OP' },

      // Chaotic Good (5)
      { id: 'x1', title: 'The Sidewalk Curio', description: "Walk through a public space with the sole objective of spotting something unexpectedly amusing or strange. Do not spend money.", category: 'chaos', duration: 15, difficulty: 'medium', xp: 150, icon: '🎲', mode: 'SOLO FRIENDLY' },
      { id: 'x2', title: 'No Screen Any%', description: "Keep your smartphone completely tucked away and untouched outdoors for 15 solid minutes as long as you can safely do so.", category: 'chaos', duration: 15, difficulty: 'easy', xp: 130, icon: '📵', mode: 'SOLO FRIENDLY' },
      { id: 'x3', title: 'Plot Twist: Sit Down', description: "Locate a public bench or grassy patch. Sit comfortably and do absolutely nothing productive whatsoever for 7 uninterrupted minutes.", category: 'chaos', duration: 7, difficulty: 'easy', xp: 100, icon: '🪑', mode: 'SOLO FRIENDLY' },
      { id: 'x4', title: 'The Coin Toss Detour', description: "At an upcoming intersection, flip an imaginary or real coin: Heads = turn left, Tails = turn right. Explore the chosen street safely.", category: 'chaos', duration: 15, difficulty: 'medium', xp: 150, icon: '🪙', mode: 'SOLO FRIENDLY' },
      { id: 'x5', title: 'Secret Agent Stroll', description: "Take a 10-minute walk while pretending you are an undercover agent casing the neighborhood for a secret diplomatic meetup.", category: 'chaos', duration: 10, difficulty: 'easy', xp: 110, icon: '🕶️', mode: 'SOLO FRIENDLY' }
    ];

    const CATEGORY_META = {
      explore: { title: 'EXPLORE', icon: '🧭', badgeClass: 'badge-category' },
      social: { title: 'SOCIAL DLC', icon: '🫂', badgeClass: 'badge-category' },
      create: { title: 'CREATIVE', icon: '🎨', badgeClass: 'badge-category' },
      move: { title: 'MOVEMENT', icon: '🏃', badgeClass: 'badge-category' },
      learn: { title: 'KNOWLEDGE', icon: '🧠', badgeClass: 'badge-category' },
      chaos: { title: 'CHAOTIC GOOD', icon: '🎲', badgeClass: 'badge-category' }
    };

    const ACHIEVEMENTS_DEF = [
      { id: 'first', icon: '🪄', name: 'First Contact', desc: 'Complete 1 offline mission', test: s => s.completed.length >= 1 },
      { id: 'triple', icon: '🧃', name: 'Touching Reality', desc: 'Complete 3 offline missions', test: s => s.completed.length >= 3 },
      { id: 'variety', icon: '🎭', name: 'Multiclassing', desc: 'Try missions from 3 distinct domains', test: s => new Set(s.completed.map(q => q.category)).size >= 3 },
      { id: 'five', icon: '🗺️', name: 'Lore Collector', desc: 'Complete 5 recorded missions', test: s => s.completed.length >= 5 },
      { id: 'century', icon: '💯', name: 'XP Goblin', desc: 'Accumulate 500 total XP', test: s => s.xp >= 500 },
      { id: 'veteran', icon: '👑', name: 'Reality Veteran', desc: 'Complete 10 total missions', test: s => s.completed.length >= 10 }
    ];

    const RANK_TIERS = [
      { minLvl: 1, title: 'Certified Screen Goblin', sub: 'Origin story: one more scroll' },
      { minLvl: 2, title: 'Dungeon Deserter', sub: 'Left the glow of the dual monitors' },
      { minLvl: 3, title: 'Side Quest Specialist', sub: 'Starting to recognize trees and clouds' },
      { minLvl: 5, title: 'Certified Explorer', sub: 'Navigating offline reality with confidence' },
      { minLvl: 7, title: 'Reality Speedrunner', sub: 'High stamina, immune to doomscrolling' },
      { minLvl: 10, title: 'Grandmaster Outside Legend', sub: 'Primary campaign fully offline' }
    ];

    const DEFAULT_STATE = {
      xp: 0,
      completed: [],
      history: [],
      saved: [],
      activeQuest: null,
      streak: 0,
      lastDoneDate: null,
      soundEnabled: true,
      playerName: 'Screen Goblin'
    };

    // State initialization & migration
    let state = loadInitialState();
    let currentMission = MISSION_POOL[0];
    let activeTimerSeconds = 0;
    let initialTimerDuration = 0;
    let timerInterval = null;
    let isTimerPaused = false;
    let toastTimeout = null;

    // Web Audio Synthesizer
    const audioCtx = (window.AudioContext || window.webkitAudioContext) ? new (window.AudioContext || window.webkitAudioContext)() : null;

    function playSfx(type) {
      if (!state.soundEnabled || !audioCtx) return;
      try {
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        const now = audioCtx.currentTime;

        if (type === 'click') {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(1000, now);
          osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
          gain.gain.setValueAtTime(0.08, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now);
          osc.stop(now + 0.05);
        } else if (type === 'roll') {
          for (let i = 0; i < 4; i++) {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(250 + (i * 90), now + (i * 0.035));
            gain.gain.setValueAtTime(0.07, now + (i * 0.035));
            gain.gain.exponentialRampToValueAtTime(0.001, now + (i * 0.035) + 0.03);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now + (i * 0.035));
            osc.stop(now + (i * 0.035) + 0.04);
          }
        } else if (type === 'start') {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(440, now);
          osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
          gain.gain.setValueAtTime(0.12, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now);
          osc.stop(now + 0.2);
        } else if (type === 'victory') {
          const notes = [523.25, 659.25, 783.99, 1046.50]; // C E G C
          notes.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + (idx * 0.09));
            gain.gain.setValueAtTime(0.15, now + (idx * 0.09));
            gain.gain.exponentialRampToValueAtTime(0.001, now + (idx * 0.09) + 0.35);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now + (idx * 0.09));
            osc.stop(now + (idx * 0.09) + 0.36);
          });
        }
      } catch (e) {
        console.warn('Audio play error:', e);
      }
    }

    // Helper DOM
    const $ = id => document.getElementById(id);

    function loadInitialState() {
      try {
        // Attempt reading v2 first
        const savedV2 = localStorage.getItem('irlQuestSave_v2');
        if (savedV2) return { ...DEFAULT_STATE, ...JSON.parse(savedV2) };

        // Otherwise check legacy v1 from earlier demo to seamlessly preserve user progress!
        const legacy = localStorage.getItem('irlQuestSave');
        if (legacy) {
          const parsed = JSON.parse(legacy);
          return { ...DEFAULT_STATE, ...parsed };
        }
      } catch (err) {
        console.error('Error loading save:', err);
      }
      return { ...DEFAULT_STATE };
    }

    function saveState() {
      try {
        localStorage.setItem('irlQuestSave_v2', JSON.stringify(state));
      } catch (e) {}
    }

    function calculateLevel(xp) {
      return Math.floor(xp / 300) + 1;
    }

    function getRankInfo(lvl) {
      let current = RANK_TIERS[0];
      for (const tier of RANK_TIERS) {
        if (lvl >= tier.minLvl) current = tier;
      }
      return current;
    }



    
function updatePlayerProfileModal() {
  const totalXp = state.xp || 0;
  const level = calculateLevel(totalXp);
  const xpInLevel = totalXp % 300;
  const remainingXp = 300 - xpInLevel;
  const rank = getRankInfo(level);

  $('profilePlayerName').textContent =
    state.playerName || 'Screen Goblin';

  $('profileRankTitle').textContent =
    `LVL ${String(level).padStart(2, '0')} — ${rank.title}`;

  $('profileTotalXp').textContent = totalXp;
  $('profileXpText').textContent = `${xpInLevel} / 300 XP`;
  $('profileNextLevelText').textContent =
    `${remainingXp} XP to next level`;

  $('profileProgressBar').style.width =
    `${(xpInLevel / 300) * 100}%`;

  $('profileCompletedCount').textContent =
    (state.completed || []).length;

  $('profileStreak').textContent =
    `${state.streak || 0} days`;

  $('profileSavedCount').textContent =
    (state.saved || []).length;
}


    function showToast(message, icon = '✨') {
      const toast = $('toastNotice');
      $('toastMessage').textContent = message;
      $('toastIcon').textContent = icon;
      toast.classList.add('active');
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.remove('active');
      }, 3000);
    }

    // Filter Logic
    function getFilteredPool(category = 'any') {
      const timeFilter = $('timeFilterSelect').value;
      const diffFilter = $('difficultyFilterSelect').value;

      return MISSION_POOL.filter(q => {
        const catMatch = (category === 'any' || q.category === category);
        const diffMatch = (diffFilter === 'any' || q.difficulty === diffFilter);
        let timeMatch = true;
        if (timeFilter === '5') timeMatch = q.duration <= 10;
        else if (timeFilter === '15') timeMatch = (q.duration >= 11 && q.duration <= 20);
        else if (timeFilter === '30') timeMatch = q.duration > 20;

        return catMatch && diffMatch && timeMatch;
      });
    }

    function rollMission(category = 'any') {
      playSfx('roll');
      const eligible = getFilteredPool(category);
      if (!eligible.length) {
        showToast('No missions match those exact filters. Try broadening them.', '⚠️');
        return;
      }

      let pool = eligible.filter(m => m.id !== currentMission.id);
      if (!pool.length) pool = eligible;

      currentMission = pool[Math.floor(Math.random() * pool.length)];

      // Subtle animation on mission card
      const card = $('featuredMissionBox');
      card.style.transform = 'scale(0.985)';
      setTimeout(() => { card.style.transform = ''; }, 160);

      renderMissionCard();
      showToast('New mission deployed. Ready for the field.', '🎲');
    }

    function renderMissionCard() {
      const meta = CATEGORY_META[currentMission.category] || { title: 'SIDE QUEST', icon: '✨' };
      $('missionCategoryBadge').textContent = `${meta.icon} ${meta.title}`;
      
      const diffEl = $('missionDifficultyBadge');
      diffEl.textContent = `${currentMission.difficulty.toUpperCase()} TIER`;
      diffEl.className = `mission-badge badge-difficulty ${currentMission.difficulty}`;

      $('missionTitle').textContent = currentMission.title;
      $('missionDesc').textContent = currentMission.description;
      $('missionTimeVal').textContent = `${currentMission.duration} MIN`;
      $('missionXpVal').textContent = `+${currentMission.xp} XP REWARD`;
      $('missionWatermarkIcon').textContent = currentMission.icon || '🧭';

      const isSaved = state.saved.includes(currentMission.id);
      const saveBtn = $('saveMissionBtn');
      $('saveHeartIcon').textContent = isSaved ? '♥' : '♡';
      $('saveBtnLabel').textContent = isSaved ? 'BOOKMARKED' : 'BOOKMARK';
      if (isSaved) {
        saveBtn.classList.add('active-saved');
      } else {
        saveBtn.classList.remove('active-saved');
      }
    }

    function renderDashboard() {
      const lvl = calculateLevel(state.xp);
      const inLevelXp = state.xp % 300;
      const progressPercent = Math.min(100, Math.round((inLevelXp / 300) * 100));
      const rank = getRankInfo(lvl);

      // Player dossier
      $('playerRankBadge').textContent = `LVL ${String(lvl).padStart(2, '0')}`;
      $('navLevelBadge').textContent = `LVL ${String(lvl).padStart(2, '0')}`;
      $('playerRankTitle').textContent = rank.title;
      $('playerRankSubtitle').textContent = rank.sub;
      $('playerXpText').textContent = `${inLevelXp} / 300 XP`;
      $('nextLevelNeededText').textContent = `${300 - inLevelXp} XP to next tier`;
      $('playerProgressBar').style.width = `${progressPercent}%`;

      // Avatar
      const initials = (state.playerName || 'Screen Goblin').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
      $('navAvatarCircle').textContent = initials || 'SG';

      // Stats
      $('statsQuestsDone').textContent = state.completed.length;
      $('statsDayStreak').textContent = state.streak || 0;
      const uniqueCats = new Set(state.completed.map(q => q.category)).size;
      $('statsCategoriesExplored').textContent = `${uniqueCats} / 6`;

      // Sound text
      $('soundIcon').textContent = state.soundEnabled ? '🔊' : '🔇';
      $('soundText').textContent = state.soundEnabled ? 'SFX ON' : 'MUTED';

      // Saved count
      $('savedCountLabel').textContent = state.saved.length;

      // Active quest HUD pill in nav
      const hudPill = $('activeQuestHudBtn');
      if (state.activeQuest) {
        hudPill.classList.add('visible');
      } else {
        hudPill.classList.remove('visible');
      }

      renderAchievements();
      renderLoreHistory();
      renderMissionCard();
      saveState();
    }

    function renderAchievements() {
      const list = $('achievementsListContainer');
      let unlockedCount = 0;

      list.innerHTML = ACHIEVEMENTS_DEF.map(ach => {
        const unlocked = ach.test(state);
        if (unlocked) unlockedCount++;
        return `
          <div class="achievement-item ${unlocked ? 'unlocked' : 'locked'}">
            <div class="achievement-emoji">${ach.icon}</div>
            <div class="achievement-content">
              <div class="achievement-title">${escapeHtml(ach.name)}</div>
              <div class="achievement-desc">${escapeHtml(ach.desc)}</div>
            </div>
            <div class="achievement-status-tag">
              ${unlocked ? 'UNLOCKED' : 'LOCKED'}
            </div>
          </div>
        `;
      }).join('');

      $('achievementsCountBadge').textContent = `${unlockedCount} / ${ACHIEVEMENTS_DEF.length} UNLOCKED`;
    }

    function renderLoreHistory() {
      const container = $('loreHistoryContainer');
      if (!state.history.length) {
        container.innerHTML = `
          <div class="empty-state-notice">
            No field lore recorded yet. Complete an objective to begin populating your personal chronicle.
          </div>
        `;
        return;
      }

      container.innerHTML = state.history.slice(0, 7).map(item => `
        <div class="history-item-row">
          <div class="history-item-icon">${item.icon || '✨'}</div>
          <div class="history-item-details">
            <div class="history-item-title">${escapeHtml(item.title)}</div>
            <div class="history-item-meta">
              <span>${escapeHtml(item.date || 'Today')}</span>
              ${item.note ? `<span>• "${escapeHtml(item.note)}"</span>` : ''}
            </div>
          </div>
          <div class="history-item-xp">+${item.xp} XP</div>
        </div>
      `).join('');
    }

    function escapeHtml(str) {
      return String(str || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }

    // Bookmark / Save Mission
    function toggleSaveMission() {
      playSfx('click');
      if (state.saved.includes(currentMission.id)) {
        state.saved = state.saved.filter(id => id !== currentMission.id);
        showToast('Mission removed from bookmarks.', '🗑️');
      } else {
        state.saved.push(currentMission.id);
        showToast('Mission bookmarked for future operations.', '♥');
      }
      renderDashboard();
    }

    // Active Mission & Countdown Timer Engine
    function startMission(missionObj = currentMission) {
      playSfx('start');
      state.activeQuest = {
        ...missionObj,
        startedAt: Date.now()
      };
      saveState();

      initialTimerDuration = missionObj.duration * 60;
      activeTimerSeconds = initialTimerDuration;
      isTimerPaused = false;

      $('hudModalTitle').textContent = missionObj.title;
      $('hudModalDesc').textContent = missionObj.description;
      $('userLoreNoteInput').value = '';
      $('completionNoteContainer').style.display = 'block';

      openModal('questHudModal');
      updateTimerDisplay();

      if (timerInterval) clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        if (!isTimerPaused) {
          if (activeTimerSeconds > 0) {
            activeTimerSeconds--;
            updateTimerDisplay();
          } else {
            clearInterval(timerInterval);
            timerInterval = null;
            $('timerStatusLabel').textContent = "TARGET REACHED";
            showToast('Time horizon elapsed. You may complete and claim XP anytime.', '🔔');
          }
        }
      }, 1000);

      renderDashboard();
    }

    function updateTimerDisplay() {
      const m = Math.floor(activeTimerSeconds / 60);
      const s = activeTimerSeconds % 60;
      const formatted = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

      $('modalTimerDigits').textContent = formatted;
      $('navTimerDigits').textContent = formatted;

      // Update SVG Circular Ring Dashoffset
      const ring = $('timerProgressRing');
      const circumference = 2 * Math.PI * 80; // 502.65
      const fraction = initialTimerDuration > 0 ? (activeTimerSeconds / initialTimerDuration) : 0;
      const offset = circumference * (1 - fraction);
      ring.style.strokeDashoffset = offset;
    }

    function finishMission() {
      if (!state.activeQuest) {
        closeModal('questHudModal');
        return;
      }

      playSfx('victory');
      triggerConfetti();

      const q = state.activeQuest;
      const userNote = $('userLoreNoteInput').value.trim();

      state.xp += q.xp;
      state.completed.push({ id: q.id, category: q.category });

      // Daily streak verification
      const today = new Date().toISOString().slice(0, 10);
      if (state.lastDoneDate !== today) {
        const yesterdayDate = new Date();
        yesterdayDate.setDate(yesterdayDate.getDate() - 1);
        const yesterday = yesterdayDate.toISOString().slice(0, 10);
        state.streak = (state.lastDoneDate === yesterday) ? (state.streak || 0) + 1 : 1;
        state.lastDoneDate = today;
      }

      state.history.unshift({
        ...q,
        note: userNote,
        date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
      });

      state.activeQuest = null;
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }

      closeModal('questHudModal');
      renderDashboard();
      showToast(`MISSION COMPLETE. +${q.xp} XP SECURED.`, '🏅');
    }

    function abortMission() {
      if (confirm('Abort this mission? No XP will be awarded for this session.')) {
        state.activeQuest = null;
        if (timerInterval) {
          clearInterval(timerInterval);
          timerInterval = null;
        }
        closeModal('questHudModal');
        renderDashboard();
        showToast('Mission aborted.', '⏹️');
      }
    }

    // Modal Control Helpers
    function openModal(id) {
      $(id).classList.add('open');
    }
    function closeModal(id) {
      $(id).classList.remove('open');
    }

    // Modal Backdrops
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', e => {
        if (e.target === overlay) {
          overlay.classList.remove('open');
        }
      });
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
      }
    });

    // Confetti System (Canvas-based, zero dependency)
    function triggerConfetti() {
      const canvas = $('confettiCanvas');
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = [];
      const colors = ['#10b981', '#34d399', '#6366f1', '#a855f7', '#fbbf24', '#f43f5e'];

      for (let i = 0; i < 90; i++) {
        particles.push({
          x: canvas.width / 2,
          y: canvas.height / 2 + 50,
          vx: (Math.random() - 0.5) * 16,
          vy: (Math.random() - 0.7) * 18,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 10,
          opacity: 1
        });
      }

      let animId;
      function renderParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = 0;

        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.4; // gravity
          p.rotation += p.rotationSpeed;
          p.opacity -= 0.012;

          if (p.opacity > 0) {
            alive++;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
            ctx.restore();
          }
        });

        if (alive > 0) {
          animId = requestAnimationFrame(renderParticles);
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          cancelAnimationFrame(animId);
        }
      }
      renderParticles();
    }

    // AI Synthesizer Engine

    

async function synthesizeAiMission() {
  playSfx('click');

  const env = $('aiEnvSelect').value;
  const energy = $('aiEnergySelect').value;
  const customPrompt = $('aiCustomPromptInput').value.trim();

  const button = $('runAiGenerationBtn');
  const indicator = $('aiGeneratingIndicator');

    
  const tipElement = $('aiLoadingTip');

  const loadingTips = [
    '🌿 Nature is waiting for you outside.',
    '👀 Look up and notice three things around you.',
    '🚶 A tiny walk can become a great adventure.',
    '☀️ Take a break from screens and enjoy the real world.',
    '🍃 Your next quest is being prepared locally by Qwen3.',
    '🧭 Every great adventure starts with one small step.',
    '🌸 Notice something beautiful you usually overlook.',
    '✨ Your next real-life challenge is almost ready.'
  ];

  let tipIndex = 0;
  let tipTimer = null;


  button.disabled = true;
  indicator.style.display = 'block';

  if (tipElement) {
    tipElement.textContent = loadingTips[0];
  }

  tipIndex = 0;

  tipTimer = setInterval(() => {
    if (!tipElement) return;

    tipIndex = (tipIndex + 1) % loadingTips.length;
    tipElement.textContent = loadingTips[tipIndex];
  }, 4000);

  try {
    const prompt = `
Generate one original, safe, practical, screen-free real-life mission for IRL Quest.

Environment: ${env}
Energy: ${energy}
User request: ${customPrompt || 'Choose a suitable mission.'}

Rules:
- Match the selected environment and energy.
- No dangerous, illegal, intrusive, or expensive activities.
- Do not require interacting with strangers.
- Duration: 5 to 30 minutes.
- XP: 50 to 250.
- Category: explore, social, create, move, learn, or chaos.
- Difficulty: easy, medium, or hard.
- Keep the title short and description concise.
- Return one valid JSON object only with these fields:
  title, description, category, duration, difficulty, xp, icon.
- title and description must be non-empty strings.
- duration and xp must be numbers.
- icon must be one emoji.
`;

    const response = await fetch(
      'http://localhost:11434/api/generate',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'qwen3:4b',
          prompt,
          stream: false,
          think: false,
          format: 'json',
          options: {
            temperature: 0.4,
            num_predict: 160
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(
        `Ollama API returned HTTP ${response.status}`
      );
    }

    const result = await response.json();

    if (!result.response) {
      throw new Error('Ollama returned an empty response.');
    }

    const mission = JSON.parse(result.response);

    const validCategories = [
      'explore',
      'social',
      'create',
      'move',
      'learn',
      'chaos'
    ];

    if (
      typeof mission.title !== 'string' ||
      !mission.title.trim() ||
      typeof mission.description !== 'string' ||
      !mission.description.trim() ||
      !validCategories.includes(mission.category) ||
      !Number.isFinite(Number(mission.duration)) ||
      !Number.isFinite(Number(mission.xp)) ||
      !['easy', 'medium', 'hard'].includes(mission.difficulty)
    ) {
      throw new Error('AI returned an invalid mission structure.');
    }

    // Clean and constrain the generated mission.
    mission.title = mission.title.trim().slice(0, 100);
    mission.description = mission.description.trim().slice(0, 600);

    mission.duration = Math.max(
      5,
      Math.min(30, Math.round(Number(mission.duration)))
    );

    mission.xp = Math.max(
      50,
      Math.min(250, Math.round(Number(mission.xp)))
    );

    mission.icon =
      typeof mission.icon === 'string' &&
      mission.icon.trim().length > 0 &&
      mission.icon.trim().length <= 8
        ? mission.icon.trim()
        : '🌿';

    mission.id = 'ai_' + Date.now();

    // Activate the generated mission.
    currentMission = mission;
    renderMissionCard();

    closeModal('aiSynthesizerModal');

    showToast(
      'Qwen3 generated a new mission!',
      mission.icon
    );

  } catch (error) {
    console.error('AI mission generation failed:', error);

    showToast(
      'AI generation failed. Check the browser console.',
      '⚠️'
    );

  } 
    finally {
      if (tipTimer !== null) {
        clearInterval(tipTimer);
      }

      indicator.style.display = 'none';
      button.disabled = false;
    }

}


   

    // Saved Quests Modal Renderer
    function openSavedQuestsModal() {
      playSfx('click');
      const container = $('savedQuestsListContainer');
      const savedMissions = MISSION_POOL.filter(m => state.saved.includes(m.id));

      if (!savedMissions.length) {
        container.innerHTML = `
          <div class="empty-state-notice">
            No saved missions yet. Click the "♡ BOOKMARK" button on any mission to store it here for later.
          </div>
        `;
      } else {
        container.innerHTML = savedMissions.map(m => `
          <div class="history-item-row" style="justify-content:space-between;">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="font-size:20px;">${m.icon || '🧭'}</span>
              <div>
                <strong style="display:block; font-size:0.85rem; color:#fff;">${escapeHtml(m.title)}</strong>
                <span class="mono" style="font-size:0.7rem; color:var(--text-secondary);">${m.duration} MIN • +${m.xp} XP</span>
              </div>
            </div>
            <div style="display:flex; gap:6px;">
              <button class="nav-btn" onclick="launchSavedMission('${m.id}')" style="padding:5px 10px; font-size:0.75rem; color:var(--emerald-light)">LAUNCH</button>
              <button class="nav-btn" onclick="removeSavedMission('${m.id}')" style="padding:5px 8px; font-size:0.75rem; color:#fda4af">✕</button>
            </div>
          </div>
        `).join('');
      }
      openModal('savedQuestsModal');
    }

    window.launchSavedMission = function(id) {
      const target = MISSION_POOL.find(m => m.id === id);
      if (target) {
        currentMission = target;
        closeModal('savedQuestsModal');
        startMission(target);
      }
    };

    window.removeSavedMission = function(id) {
      state.saved = state.saved.filter(itemId => itemId !== id);
      renderDashboard();
      openSavedQuestsModal();
      showToast('Mission removed from bookmarks.', '🗑️');
    };

    // Export & Import Save Data
    function exportSaveData() {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `irl-quest-save-${new Date().toISOString().slice(0, 10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('Save file exported successfully.', '📥');
    }

    function importSaveData(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(e) {
        try {
          const imported = JSON.parse(e.target.result);
          if (typeof imported.xp === 'number') {
            state = { ...DEFAULT_STATE, ...imported };
            renderDashboard();
            closeModal('settingsModal');
            showToast('Save data restored successfully.', '✅');
          } else {
            showToast('Invalid save file format.', '❌');
          }
        } catch (err) {
          showToast('Could not parse JSON file.', '❌');
        }
      };
      reader.readAsText(file);
    }

    // Share / Copy Mission
    function copyMissionBrief() {
      playSfx('click');
      const text = `🎯 IRL QUEST MISSION: ${currentMission.title}\n\n"${currentMission.description}"\n\n⏱️ Duration: ${currentMission.duration} MIN | ✦ Reward: +${currentMission.xp} XP\n#IRLQuest #LogOffLoadIn`;
      navigator.clipboard.writeText(text).then(() => {
        showToast('Mission brief copied to clipboard!', '📋');
      }).catch(() => {
        showToast('Could not access clipboard.', '⚠️');
      });
    }

    // Event Bindings
    $('startMissionBtn').addEventListener('click', () => startMission(currentMission));
    $('rollMissionBtn').addEventListener('click', () => rollMission());
    $('saveMissionBtn').addEventListener('click', toggleSaveMission);
    $('copyMissionBtn').addEventListener('click', copyMissionBrief);

    $('soundToggleBtn').addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      playSfx('click');
      renderDashboard();
      showToast(state.soundEnabled ? 'Audio cues enabled' : 'Audio cues muted', state.soundEnabled ? '🔊' : '🔇');
    });

    $('savedQuestsNavBtn').addEventListener('click', openSavedQuestsModal);
    $('closeSavedModalBtn').addEventListener('click', () => closeModal('savedQuestsModal'));

$('settingsBtn').addEventListener('click', () => {
  playSfx('click');

  $('settingPlayerNameInput').value =
    state.playerName || 'Screen Goblin';

  openModal('settingsModal');
});

$('profilePill').addEventListener('click', () => {
  playSfx('click');
  updatePlayerProfileModal();
  openModal('playerProfileModal');
});

$('closePlayerProfileBtn').addEventListener('click', () => {
  closeModal('playerProfileModal');
});

    $('closeSettingsModalBtn').addEventListener('click', () => closeModal('settingsModal'));

    $('saveSettingsBtn').addEventListener('click', () => {
      playSfx('click');
      state.playerName = $('settingPlayerNameInput').value.trim() || 'Screen Goblin';
      saveState();
      renderDashboard();
      closeModal('settingsModal');
      showToast('Dossier updated.', '👤');
    });

    $('exportSaveBtn').addEventListener('click', exportSaveData);
    $('importSaveBtn').addEventListener('click', () => $('importSaveFileInput').click());
    $('importSaveFileInput').addEventListener('change', importSaveData);

    $('activeQuestHudBtn').addEventListener('click', () => {
      if (state.activeQuest) openModal('questHudModal');
    });

    // Category click cards
    document.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const cat = card.dataset.cat;
        rollMission(cat);
      });
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          rollMission(card.dataset.cat);
        }
      });
    });

    // Dropdown filters
    $('timeFilterSelect').addEventListener('change', () => rollMission());
    $('difficultyFilterSelect').addEventListener('change', () => rollMission());

    // Timer modal buttons
    $('finishMissionBtn').addEventListener('click', finishMission);
    $('minimizeHudBtn').addEventListener('click', () => closeModal('questHudModal'));
    $('abortMissionBtn').addEventListener('click', abortMission);

    $('timerPauseBtn').addEventListener('click', () => {
      isTimerPaused = !isTimerPaused;
      $('timerPauseBtn').textContent = isTimerPaused ? 'RESUME' : 'PAUSE';
      $('timerStatusLabel').textContent = isTimerPaused ? 'PAUSED' : 'ELAPSED CLOCK';
    });

    $('timerAddFiveBtn').addEventListener('click', () => {
      activeTimerSeconds += 300;
      initialTimerDuration += 300;
      updateTimerDisplay();
      showToast('+5 minutes added to clock.', '⏱️');
    });

    $('timerResetBtn').addEventListener('click', () => {
      activeTimerSeconds = initialTimerDuration;
      isTimerPaused = false;
      $('timerPauseBtn').textContent = 'PAUSE';
      updateTimerDisplay();
    });

    // AI Synthesizer Modal Buttons
    $('openAiSynthesizerModalBtn').addEventListener('click', () => openModal('aiSynthesizerModal'));
    $('closeAiModalBtn').addEventListener('click', () => closeModal('aiSynthesizerModal'));
    $('runAiGenerationBtn').addEventListener('click', synthesizeAiMission);

    // Reset Progress Button
    $('resetDemoHistoryBtn').addEventListener('click', () => {
      if (confirm('Reset all demo progress and lore ledger? This cannot be undone.')) {
        state = { ...DEFAULT_STATE, completed: [], history: [], saved: [] };
        currentMission = MISSION_POOL[0];
        saveState();
        renderDashboard();
        showToast('Save state cleared. A fresh character arc begins.', '🔄');
      }
    });

    // Initial load
    renderDashboard();
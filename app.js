// Amedusouls Application Logic — v2 with Filter System

// ===========================
// Data Registry
// ===========================
const gamesData = {
    ds1: {
        title: "Dark Souls Remastered",
        data: typeof ds1Data !== 'undefined' ? ds1Data : []
    },
    ds2: {
        title: "Dark Souls II: Scholar of the First Sin",
        data: typeof ds2Data !== 'undefined' ? ds2Data : []
    },
    ds3: {
        title: "Dark Souls III",
        data: typeof ds3Data !== 'undefined' ? ds3Data : []
    },
    er: {
        title: "Elden Ring + Shadow of the Erdtree",
        data: typeof erData !== 'undefined' ? erData : []
    }
};

// ===========================
// State
// ===========================
let currentGame = 'ds1';
let userProgress = JSON.parse(localStorage.getItem('amedusoulsProgress')) || {};

const activeFilters = {
    goal: 'platinum',
    builds: new Set(['all'])
};

Object.keys(gamesData).forEach(game => {
    if (!userProgress[game]) userProgress[game] = {};
});

// ===========================
// DOM (lazy getters)
// ===========================
const DOM = {
    get navBtns()      { return document.querySelectorAll('.nav-btn'); },
    get gameTitle()    { return document.getElementById('current-game-title'); },
    get checklist()    { return document.getElementById('checklist-container'); },
    get progressPct()  { return document.getElementById('progress-percentage'); },
    get progressFill() { return document.getElementById('progress-fill'); },
    get collapseBtn()  { return document.getElementById('collapse-all-btn'); },
    get expandBtn()    { return document.getElementById('expand-all-btn'); },
    get filterPanel()  { return document.getElementById('filter-panel'); },
};

// ===========================
// Filter Logic
// ===========================

/**
 * Returns true if this task should be shown given the current filter state.
 * Untagged tasks (no builds / no goals properties) are always shown.
 */
function taskMatchesFilters(task) {
    // ── Goal filter ──────────────────────────────────────────
    if (task.goals && task.goals.length > 0) {
        const sel = activeFilters.goal;
        if (sel === '100%') {
            // 100% shows everything — always pass
        } else if (sel === 'platinum') {
            // platinum includes story-required tasks too
            if (!task.goals.includes('story') && !task.goals.includes('platinum')) return false;
        } else if (sel === 'story') {
            if (!task.goals.includes('story')) return false;
        }
    }

    // ── Build filter ─────────────────────────────────────────
    if (!activeFilters.builds.has('all')) {
        const tb = task.builds;
        if (tb && !tb.includes('all')) {
            const hasMatch = [...activeFilters.builds].some(b => tb.includes(b));
            if (!hasMatch) return false;
        }
    }

    return true;
}

// ===========================
// Filter Panel UI
// ===========================
const GOALS  = [
    { value: 'story',    label: '📖 Story Only' },
    { value: 'platinum', label: '🏆 Platinum',   active: true },
    { value: '100%',     label: '💯 100% All' }
];
const BUILDS = [
    { value: 'all',   label: '⚔️ All Builds', active: true },
    { value: 'dex',   label: '🗡️ Dex' },
    { value: 'str',   label: '🪓 Str' },
    { value: 'int',   label: '🔮 Int / Mage' },
    { value: 'faith', label: '✨ Faith' }
];
const BUILD_NAMES = { dex: 'Dex', str: 'Str', int: 'Int/Mage', faith: 'Faith' };

function buildFilterPanel() {
    const panel = DOM.filterPanel;
    if (!panel) return;

    panel.innerHTML = `
        <div class="fp-inner">
            <div class="fp-group">
                <span class="fp-label">Completion Goal</span>
                <div class="fp-chips">
                    ${GOALS.map(g =>
                        `<button class="fp-chip goal-chip${g.active ? ' active' : ''}" data-value="${g.value}">${g.label}</button>`
                    ).join('')}
                </div>
            </div>
            <div class="fp-divider"></div>
            <div class="fp-group">
                <span class="fp-label">Build Focus</span>
                <div class="fp-chips">
                    ${BUILDS.map(b =>
                        `<button class="fp-chip build-chip${b.active ? ' active' : ''}" data-value="${b.value}">${b.label}</button>`
                    ).join('')}
                </div>
            </div>
        </div>
        <div class="fp-stats">
            <span id="fp-filter-desc"></span>
            <span id="fp-count-text"></span>
        </div>
    `;

    // Goal: single-select (radio)
    panel.querySelectorAll('.goal-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            panel.querySelectorAll('.goal-chip').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilters.goal = btn.dataset.value;
            applyFilters();
        });
    });

    // Build: multi-select; "all" resets others
    panel.querySelectorAll('.build-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            const val = btn.dataset.value;
            const allBtn = panel.querySelector('.build-chip[data-value="all"]');

            if (val === 'all') {
                activeFilters.builds = new Set(['all']);
                panel.querySelectorAll('.build-chip').forEach(b => b.classList.remove('active'));
                allBtn.classList.add('active');
            } else {
                activeFilters.builds.delete('all');
                allBtn.classList.remove('active');
                if (activeFilters.builds.has(val)) {
                    activeFilters.builds.delete(val);
                    btn.classList.remove('active');
                } else {
                    activeFilters.builds.add(val);
                    btn.classList.add('active');
                }
                // If nothing selected → reset to "all"
                if (activeFilters.builds.size === 0) {
                    activeFilters.builds.add('all');
                    allBtn.classList.add('active');
                }
            }
            applyFilters();
        });
    });
}

function updateFilterStats(visibleTotal, completedVisible) {
    const descEl  = document.getElementById('fp-filter-desc');
    const countEl = document.getElementById('fp-count-text');
    if (!descEl || !countEl) return;

    const goalLabel  = { story: 'Story Only', platinum: 'Platinum', '100%': '100% All' }[activeFilters.goal];
    const buildLabel = activeFilters.builds.has('all')
        ? 'All Builds'
        : [...activeFilters.builds].map(b => BUILD_NAMES[b] || b).join(' + ');

    descEl.textContent  = `${goalLabel}  ·  ${buildLabel}`;
    countEl.innerHTML   = `<strong>${completedVisible}</strong> / ${visibleTotal} tasks`;
}

function applyFilters() {
    loadGame(currentGame);
}

// ===========================
// Init
// ===========================
function init() {
    buildFilterPanel();
    setupEventListeners();
    loadGame(currentGame);
}

function setupEventListeners() {
    DOM.navBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            DOM.navBtns.forEach(b => b.classList.remove('active'));
            const target = e.currentTarget;
            target.classList.add('active');
            currentGame = target.dataset.game;
            loadGame(currentGame);
        });
    });

    DOM.collapseBtn.addEventListener('click', () => {
        document.querySelectorAll('.area-card').forEach(c => c.classList.remove('expanded'));
    });
    DOM.expandBtn.addEventListener('click', () => {
        document.querySelectorAll('.area-card').forEach(c => c.classList.add('expanded'));
    });
}

// ===========================
// Rendering
// ===========================
function loadGame(gameKey) {
    const game = gamesData[gameKey];
    DOM.gameTitle.textContent = game.title;
    renderChecklist(game.data, gameKey);
    updateOverallProgress();
}

function renderChecklist(areas, gameKey) {
    DOM.checklist.innerHTML = '';

    if (!areas || areas.length === 0) {
        DOM.checklist.innerHTML = `
            <div style="text-align:center;padding:3rem;color:var(--text-muted)">
                <h3>Data loading or unavailable.</h3>
                <p>Please ensure the game data files are correctly populated.</p>
            </div>`;
        return;
    }

    let totalVisible = 0;
    let totalCompleted = 0;

    areas.forEach((area, areaIndex) => {
        const areaId    = `${gameKey}_area_${areaIndex}`;
        const taskArray = area.tasks || area.steps || [];

        // Filter tasks for current filters
        const visible = taskArray
            .map((task, stepIndex) => ({ task, stepIndex }))
            .filter(({ task }) => taskMatchesFilters(task));

        if (visible.length === 0) return; // Skip fully-filtered areas

        // Count completed visible tasks
        let doneInArea = 0;
        visible.forEach(({ stepIndex }) => {
            if (userProgress[gameKey][`${areaId}_step_${stepIndex}`]) doneInArea++;
        });

        totalVisible   += visible.length;
        totalCompleted += doneInArea;

        const isComplete = (doneInArea === visible.length);
        const card = document.createElement('div');
        card.className   = `area-card ${isComplete ? '' : 'expanded'}`;
        card.dataset.areaId = areaId;

        // ── Area Header ────────────────────────────────────────
        const header = document.createElement('div');
        header.className = 'area-header';
        header.innerHTML = `
            <div class="area-title">
                ${area.area}
                <span class="area-progress" id="progress_${areaId}">${doneInArea}/${visible.length}</span>
            </div>
            <div class="toggle-icon">▼</div>
        `;
        header.addEventListener('click', () => card.classList.toggle('expanded'));

        // ── Area Content ───────────────────────────────────────
        const content = document.createElement('div');
        content.className = 'area-content';

        visible.forEach(({ task: step, stepIndex }) => {
            const taskId = `${areaId}_step_${stepIndex}`;
            const isDone = userProgress[gameKey][taskId] || false;

            const el = document.createElement('div');
            el.className    = `task-item${isDone ? ' completed' : ''}${step.legendary ? ' legendary-task' : ''}`;
            el.dataset.type = step.type;

            const cb = document.createElement('input');
            cb.type      = 'checkbox';
            cb.className = 'task-checkbox';
            cb.checked   = isDone;
            cb.addEventListener('change', e => toggleTask(gameKey, taskId, e.target.checked, el, areaId));

            const details = document.createElement('div');
            details.className = 'task-details';

            // Build badge string
            let badges = `<span class="task-type-badge">${step.type}</span>`;
            if (step.legendary) badges += `<span class="task-type-badge legendary">★ Legendary</span>`;
            if (step.missable)  badges += `<span class="task-type-badge missable">⚠️ missable</span>`;
            if (step.ng_plus)   badges += `<span class="task-type-badge ng-plus">↻ ${step.ng_plus}</span>`;

            // Show build tag when a specific build filter is active
            if (step.builds && !activeFilters.builds.has('all') && !step.builds.includes('all')) {
                const label = step.builds.map(b => BUILD_NAMES[b] || b).join('/');
                if (label) badges += `<span class="task-type-badge build-tag">${label}</span>`;
            }

            details.innerHTML = `${badges}<div class="task-text">${step.description || step.text}</div>`;

            el.appendChild(cb);
            el.appendChild(details);
            content.appendChild(el);
        });

        card.appendChild(header);
        card.appendChild(content);
        DOM.checklist.appendChild(card);
    });

    // No areas rendered
    if (DOM.checklist.children.length === 0) {
        DOM.checklist.innerHTML = `
            <div style="text-align:center;padding:3rem;color:var(--text-muted)">
                <h3 style="margin-bottom:0.5rem">No tasks match these filters.</h3>
                <p>Try changing the Completion Goal or Build Focus above.</p>
            </div>`;
    }

    updateFilterStats(totalVisible, totalCompleted);
}

// ===========================
// Task Toggle
// ===========================
function toggleTask(gameKey, taskId, isCompleted, taskEl, areaId) {
    userProgress[gameKey][taskId] = isCompleted;
    saveProgress();

    taskEl.classList.toggle('completed', isCompleted);

    // Re-count area progress from DOM
    const card = document.querySelector(`[data-area-id="${areaId}"]`);
    if (card) {
        const total = card.querySelectorAll('.task-item').length;
        const done  = card.querySelectorAll('.task-item.completed').length;
        const span  = document.getElementById(`progress_${areaId}`);
        if (span) span.textContent = `${done}/${total}`;
    }

    // Re-count global stats from DOM
    const allTasks = DOM.checklist.querySelectorAll('.task-item');
    const allDone  = DOM.checklist.querySelectorAll('.task-item.completed');
    updateFilterStats(allTasks.length, allDone.length);

    updateOverallProgress();
}

// ===========================
// Overall Progress (sidebar bar)
// ===========================
function updateOverallProgress() {
    const gameData = gamesData[currentGame].data;
    let total = 0, done = 0;

    gameData.forEach((area, areaIndex) => {
        const areaId    = `${currentGame}_area_${areaIndex}`;
        const taskArray = area.tasks || area.steps || [];

        // Progress bar reflects the current filter selection
        const visible = taskArray
            .map((t, si) => ({ t, si }))
            .filter(({ t }) => taskMatchesFilters(t));

        total += visible.length;
        visible.forEach(({ si }) => {
            if (userProgress[currentGame][`${areaId}_step_${si}`]) done++;
        });
    });

    const pct = total === 0 ? 0 : Math.round((done / total) * 100);
    DOM.progressPct.textContent  = `${pct}%`;
    DOM.progressFill.style.width = `${pct}%`;
}

// ===========================
// Persistence
// ===========================
function saveProgress() {
    localStorage.setItem('amedusoulsProgress', JSON.stringify(userProgress));
}

// Boot
document.addEventListener('DOMContentLoaded', init);

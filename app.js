// Amedusouls Application Logic

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

let currentGame = 'ds1';
let userProgress = JSON.parse(localStorage.getItem('amedusoulsProgress')) || {};

// Initialize progress object if empty
Object.keys(gamesData).forEach(game => {
    if (!userProgress[game]) userProgress[game] = {};
});

const DOM = {
    navBtns: document.querySelectorAll('.nav-btn'),
    gameTitle: document.getElementById('current-game-title'),
    checklistContainer: document.getElementById('checklist-container'),
    progressPercentage: document.getElementById('progress-percentage'),
    progressFill: document.getElementById('progress-fill'),
    collapseBtn: document.getElementById('collapse-all-btn'),
    expandBtn: document.getElementById('expand-all-btn')
};

function init() {
    setupEventListeners();
    loadGame(currentGame);
}

function setupEventListeners() {
    DOM.navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            DOM.navBtns.forEach(b => b.classList.remove('active'));
            const target = e.currentTarget;
            target.classList.add('active');
            currentGame = target.dataset.game;
            loadGame(currentGame);
        });
    });

    DOM.collapseBtn.addEventListener('click', () => {
        document.querySelectorAll('.area-card').forEach(card => card.classList.remove('expanded'));
    });

    DOM.expandBtn.addEventListener('click', () => {
        document.querySelectorAll('.area-card').forEach(card => card.classList.add('expanded'));
    });
}

function loadGame(gameKey) {
    const game = gamesData[gameKey];
    DOM.gameTitle.textContent = game.title;
    renderChecklist(game.data, gameKey);
    updateOverallProgress();
}

function renderChecklist(areas, gameKey) {
    DOM.checklistContainer.innerHTML = '';
    
    if (!areas || areas.length === 0) {
        DOM.checklistContainer.innerHTML = `
            <div style="text-align:center; padding: 3rem; color: var(--text-muted);">
                <h3>Data loading or unavailable.</h3>
                <p>Please ensure the game data files are correctly populated.</p>
            </div>
        `;
        return;
    }

    areas.forEach((area, areaIndex) => {
        const areaId = `${gameKey}_area_${areaIndex}`;
        const totalTasks = area.tasks ? area.tasks.length : (area.steps ? area.steps.length : 0);
        
        // Count completed tasks for this area
        let completedTasks = 0;
        const taskArray = area.tasks || area.steps || [];
        taskArray.forEach((step, stepIndex) => {
            const taskId = `${areaId}_step_${stepIndex}`;
            if (userProgress[gameKey][taskId]) {
                completedTasks++;
            }
        });

        const isAreaComplete = completedTasks === totalTasks && totalTasks > 0;
        const areaExpandedClass = isAreaComplete ? '' : 'expanded'; // Auto expand incomplete areas

        const areaCard = document.createElement('div');
        areaCard.className = `area-card ${areaExpandedClass}`;
        areaCard.dataset.areaId = areaId;

        // Area Header
        const areaHeader = document.createElement('div');
        areaHeader.className = 'area-header';
        areaHeader.innerHTML = `
            <div class="area-title">
                ${area.area}
                <span class="area-progress" id="progress_${areaId}">${completedTasks}/${totalTasks}</span>
            </div>
            <div class="toggle-icon">▼</div>
        `;
        
        areaHeader.addEventListener('click', () => {
            areaCard.classList.toggle('expanded');
        });

        // Area Content
        const areaContent = document.createElement('div');
        areaContent.className = 'area-content';

        const taskArrayForContent = area.tasks || area.steps || [];
        taskArrayForContent.forEach((step, stepIndex) => {
            const taskId = `${areaId}_step_${stepIndex}`;
            const isCompleted = userProgress[gameKey][taskId] || false;
            
            const taskEl = document.createElement('div');
            taskEl.className = `task-item ${isCompleted ? 'completed' : ''}`;
            taskEl.dataset.type = step.type;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'task-checkbox';
            checkbox.checked = isCompleted;
            
            checkbox.addEventListener('change', (e) => {
                toggleTask(gameKey, taskId, e.target.checked, taskEl, areaId, totalTasks);
            });

            const detailsEl = document.createElement('div');
            detailsEl.className = 'task-details';
            
            let badges = `<span class="task-type-badge">${step.type}</span>`;
            if (step.missable) {
                badges += `<span class="task-type-badge missable">⚠️ missable</span>`;
            }
            if (step.ng_plus) {
                badges += `<span class="task-type-badge ng-plus">↻ ${step.ng_plus}</span>`;
            }

            let html = `
                ${badges}
                <div class="task-text">${step.description || step.text}</div>
            `;

            detailsEl.innerHTML = html;

            taskEl.appendChild(checkbox);
            taskEl.appendChild(detailsEl);
            areaContent.appendChild(taskEl);
        });

        areaCard.appendChild(areaHeader);
        areaCard.appendChild(areaContent);
        DOM.checklistContainer.appendChild(areaCard);
    });
}

function toggleTask(gameKey, taskId, isCompleted, taskEl, areaId, totalTasksInArea) {
    // Update State
    userProgress[gameKey][taskId] = isCompleted;
    saveProgress();

    // Update UI for task
    if (isCompleted) {
        taskEl.classList.add('completed');
    } else {
        taskEl.classList.remove('completed');
    }

    // Update Area Progress numbers
    let completedInArea = 0;
    const gameTasks = userProgress[gameKey];
    for (const key in gameTasks) {
        if (key.startsWith(areaId) && gameTasks[key]) {
            completedInArea++;
        }
    }
    
    const progressText = document.getElementById(`progress_${areaId}`);
    if (progressText) {
        progressText.textContent = `${completedInArea}/${totalTasksInArea}`;
    }

    updateOverallProgress();
}

function updateOverallProgress() {
    const gameData = gamesData[currentGame].data;
    let totalTasks = 0;
    let completedTasks = 0;

    gameData.forEach((area, areaIndex) => {
        const areaId = `${currentGame}_area_${areaIndex}`;
        const taskArray = area.tasks || area.steps || [];
        totalTasks += taskArray.length;
        
        taskArray.forEach((step, stepIndex) => {
            const taskId = `${areaId}_step_${stepIndex}`;
            if (userProgress[currentGame][taskId]) {
                completedTasks++;
            }
        });
    });

    const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
    DOM.progressPercentage.textContent = `${percentage}%`;
    DOM.progressFill.style.width = `${percentage}%`;
}

function saveProgress() {
    localStorage.setItem('amedusoulsProgress', JSON.stringify(userProgress));
}

// Boot up
document.addEventListener('DOMContentLoaded', init);

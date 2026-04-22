/* ============================================
   IZA WORKOUT — Main App (Router + Init)
   ============================================ */

const App = {
  currentPage: 'home',

  init() {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
        .then(() => console.log('SW registered'))
        .catch(err => console.log('SW registration failed:', err));
    }

    // Handle hash navigation
    window.addEventListener('hashchange', () => {
      const page = location.hash.replace('#', '') || 'home';
      this.navigate(page, false);
    });

    // Initial route
    const page = location.hash.replace('#', '') || 'home';
    this.navigate(page, false);
  },

  _switchPage(page, updateHash = true) {
    this.currentPage = page;
    if (updateHash) location.hash = page;
    document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${page}`)?.classList.add('active');
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.querySelector(`.nav-item[data-page="${page}"]`)?.classList.add('active');
    window.scrollTo(0, 0);
  },

  navigate(page, updateHash = true) {
    this._switchPage(page, updateHash);
    switch (page) {
      case 'home':     this.renderHome(); break;
      case 'entrenos': Plans.render(); break;
      case 'calendar': Calendar.render(); break;
      case 'progress': Progress.render(); break;
    }
  },

  // Navigate to a specific date's workout (from calendar or home card)
  // date: Date object — if omitted, uses today
  // planId: plan to use — if omitted, uses ACTIVE_PLAN
  navigateToWorkout(date, planId) {
    const d = date instanceof Date ? date : new Date();
    const pid = planId || ACTIVE_PLAN;
    const weekNum = Storage.getPlanCurrentWeek(pid);
    const dayOfWeek = d.getDay();
    Workout.backPage = date instanceof Date ? 'calendar' : 'home';
    this._switchPage('workout');
    Workout.render(getWorkoutForPlanAndDay(pid, dayOfWeek), d, { weekNum, dayOfWeek, planId: pid });
  },

  renderHome() {
    const container = document.getElementById('page-home');
    if (!container) return;

    const today = new Date();
    const todayWorkout = getTodayWorkout();
    const weekWorkouts = Storage.getWeekWorkouts();
    const totalWorkouts = Storage.getTotalWorkouts();
    const streak = Storage.getStreak();
    const dateKey = formatDateKey(today);
    const isDayDone = Storage._get(STORAGE_KEYS.WORKOUT_LOGS)?.[dateKey]?._completed;

    // Greeting based on time
    const hour = today.getHours();
    let greeting = 'Buenos días';
    if (hour >= 14 && hour < 20) greeting = 'Buenas tardes';
    if (hour >= 20 || hour < 5) greeting = 'Buenas noches';

    // Today card content
    let todayCardHtml = '';
    if (todayWorkout) {
      if (todayWorkout.type === 'rest') {
        todayCardHtml = `
          <div class="today-card" style="background: linear-gradient(135deg, #F0EEF8, #E8E4F4); border: 1px solid var(--border-light); color: var(--text-primary);" onclick="App.navigateToWorkout()">
            <div class="today-card-label">Hoy — ${DAY_NAMES_FULL[today.getDay()]}</div>
            <div class="today-card-title">😴 Día de Descanso</div>
            <div class="today-card-subtitle">Descansa y recupera. ¡Mañana volvemos!</div>
          </div>
        `;
      } else {
        const typeEmoji = todayWorkout.type === 'running' ? '🏃' : '🏋️';
        const muscleText = todayWorkout.muscleGroups?.join(' · ') || '';
        todayCardHtml = `
          <div class="today-card" onclick="App.navigateToWorkout()">
            <div class="today-card-label">Hoy — ${DAY_NAMES_FULL[today.getDay()]}</div>
            <div class="today-card-title">${typeEmoji} ${todayWorkout.name}</div>
            <div class="today-card-subtitle">${muscleText}</div>
            <div class="today-card-action">
              ${isDayDone ? '✅ Completado' : 'Empezar entrenamiento →'}
            </div>
          </div>
        `;
      }
    }

    // Week progress dots
    const weekDays = [];
    const weekStart = getWeekStart(today);
    for (let i = 0; i < 7; i++) {
      const d = new Date(weekStart);
      d.setDate(d.getDate() + i);
      const dk = formatDateKey(d);
      const done = Storage._get(STORAGE_KEYS.WORKOUT_LOGS)?.[dk]?._completed;
      const isTodays = isToday(d);
      weekDays.push({ done, isToday: isTodays, name: DAY_NAMES[d.getDay()] });
    }

    container.innerHTML = `
      <div class="home-header anim-fade-in">
        <div class="home-greeting">${greeting}</div>
        <h1 class="home-title">Iza <span class="wave">💪</span></h1>
      </div>

      <div class="anim-fade-in-up anim-delay-1">
        ${todayCardHtml}
      </div>

      <!-- Stats -->
      <div class="stats-row anim-fade-in-up anim-delay-2">
        <div class="stat-card">
          <div class="stat-value">${weekWorkouts}</div>
          <div class="stat-label">Esta Semana</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${totalWorkouts}</div>
          <div class="stat-label">Total</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${streak.best}</div>
          <div class="stat-label">Mejor Racha</div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="section-header anim-fade-in-up anim-delay-3">
        <h3 class="section-title">Acceso Rápido</h3>
      </div>

      <div class="quick-actions anim-fade-in-up anim-delay-4">
        <button class="quick-action" onclick="App.navigateToWorkout()">
          <div class="quick-action-icon strength">🏋️</div>
          <div>
            <div class="quick-action-text">Entrenamiento</div>
            <div class="quick-action-sub">Entreno de hoy</div>
          </div>
        </button>
        <button class="quick-action" onclick="App.navigate('calendar')">
          <div class="quick-action-icon calendar-icon">📅</div>
          <div>
            <div class="quick-action-text">Calendario</div>
            <div class="quick-action-sub">Tu planificación</div>
          </div>
        </button>
        <button class="quick-action" onclick="App.navigate('progress')">
          <div class="quick-action-icon progress-icon">📊</div>
          <div>
            <div class="quick-action-text">Progreso</div>
            <div class="quick-action-sub">Gráficos y PRs</div>
          </div>
        </button>
        <button class="quick-action" onclick="Running.render(); document.getElementById('page-progress').classList.add('active'); Progress.switchTab('running');">
          <div class="quick-action-icon running">🏃</div>
          <div>
            <div class="quick-action-text">Carrera</div>
            <div class="quick-action-sub">Registrar / ver</div>
          </div>
        </button>
      </div>

      <!-- Weekly overview -->
      <div class="section-header anim-fade-in-up anim-delay-5 mt-lg">
        <h3 class="section-title">Tu Semana</h3>
        <button class="section-action" onclick="App.navigate('calendar')">Ver todo →</button>
      </div>

      <div class="anim-fade-in-up anim-delay-6">
        ${this.renderWeekOverview()}
      </div>

      <!-- Settings -->
      <div class="mt-2xl anim-fade-in-up anim-delay-7" style="text-align: center;">
        <button class="btn btn-ghost text-sm" onclick="Storage.exportData()">
          📁 Exportar Datos (Backup)
        </button>
      </div>
    `;
  },

  renderWeekOverview() {
    const today = new Date();
    const weekStart = getWeekStart(today);
    let html = '';

    for (let i = 0; i < 7; i++) {
      const d = new Date(weekStart);
      d.setDate(d.getDate() + i);
      const dayOfWeek = d.getDay();
      const workout = getWorkoutForDay(dayOfWeek);
      const dk = formatDateKey(d);
      const isDone = Storage._get(STORAGE_KEYS.WORKOUT_LOGS)?.[dk]?._completed;
      const isTodays = isToday(d);

      const icon = !workout || workout.type === 'rest' ? '😴' 
        : workout.type === 'running' ? '🏃' : '🏋️';
      const name = workout ? workout.name : 'Descanso';
      const typeLabel = !workout || workout.type === 'rest' ? 'Descanso' 
        : workout.type === 'running' ? 'Carrera' : 'Fuerza';

      html += `
        <div class="history-item ${isTodays ? 'today-highlight' : ''}" style="${isTodays ? 'border-color: var(--primary); background: rgba(233,30,140,0.05);' : ''}">
          <div class="flex items-center gap-md">
            <span style="font-size:1.2rem">${icon}</span>
            <div>
              <div class="text-sm text-bold">${DAY_NAMES_FULL[dayOfWeek]}${isTodays ? ' (Hoy)' : ''}</div>
              <div class="text-xs text-secondary">${name}</div>
            </div>
          </div>
          ${isDone 
            ? '<span class="badge badge-success">✓</span>'
            : isTodays 
              ? '<span class="badge badge-primary">Hoy</span>'
              : `<span class="text-xs text-tertiary">${typeLabel}</span>`
          }
        </div>
      `;
    }

    return `<div class="history-list">${html}</div>`;
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

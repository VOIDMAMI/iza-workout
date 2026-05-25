/* ============================================
   IZA WORKOUT — Main App (Router + Init)
   ============================================ */

const App = {
  currentPage: 'home',

  init() {
    // Register Service Worker with auto-update
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => {
          reg.update();
          setInterval(() => reg.update(), 60000);
          reg.addEventListener('updatefound', () => {
            const nw = reg.installing;
            nw.addEventListener('statechange', () => {
              if (nw.state === 'installed' && navigator.serviceWorker.controller) {
                window.location.reload();
              }
            });
          });
        })
        .catch(err => console.log('SW registration failed:', err));
    }

    // Unlock audio on first user interaction (required by iOS)
    const unlock = () => {
      unlockAudio();
      document.removeEventListener('touchstart', unlock);
      document.removeEventListener('click', unlock);
    };
    document.addEventListener('touchstart', unlock, { once: true });
    document.addEventListener('click', unlock, { once: true });

    // Handle hash navigation
    window.addEventListener('hashchange', () => {
      const page = location.hash.replace('#', '') || 'home';
      this.navigate(page, false);
    });

    // Reanudar timer de descanso si la app vuelve a primer plano
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        Tracker?.resumeIfActive?.();
      }
    });

    // Initial route
    const page = location.hash.replace('#', '') || 'home';
    this.navigate(page, false);

    // Reanudar timer si quedaba uno activo de antes (refresh / reapertura)
    Tracker?.resumeIfActive?.();
  },

  _switchPage(page, updateHash = true) {
    // Release wake lock when leaving workout page
    if (this.currentPage === 'workout' && page !== 'workout') {
      releaseWakeLock();
    }
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
      case 'create':   Creator.render(); break;
    }
  },

  // Navigate to a specific date's workout (from calendar or home card)
  // date: Date object — if omitted, uses today
  // planId: plan to use — if omitted, uses ACTIVE_PLAN
  openWarmupSheet() {
    const existing = document.getElementById('warmup-sheet-overlay');
    if (existing) existing.remove();
    const options = [
      { id: 'calentamiento',           emoji: '🦵', name: 'Tren inferior', sub: 'Hip thrust, sentadilla, peso muerto' },
      { id: 'calentamiento_superior',  emoji: '💪', name: 'Tren superior', sub: 'Press, dominadas, remo, jalón' },
      { id: 'calentamiento_cardio',    emoji: '🏃', name: 'Cardio / Carrera', sub: 'Drills + movilidad + strides' },
    ];
    const overlay = document.createElement('div');
    overlay.className = 'swap-modal-overlay';
    overlay.id = 'warmup-sheet-overlay';
    overlay.innerHTML = `
      <div class="swap-modal" onclick="event.stopPropagation()">
        <div class="swap-modal-header">
          <div>
            <div class="swap-modal-title">🔥 Elige calentamiento</div>
            <div class="swap-modal-subtitle">Estiramientos dinámicos + activación</div>
          </div>
          <button class="swap-modal-close" onclick="App.closeWarmupSheet()" aria-label="Cerrar">✕</button>
        </div>
        <div class="swap-modal-body">
          ${options.map(o => `
            <button class="warmup-option" onclick="App.startWarmup('${o.id}')">
              <div class="warmup-option-emoji">${o.emoji}</div>
              <div class="warmup-option-info">
                <div class="warmup-option-name">${o.name}</div>
                <div class="warmup-option-sub">${o.sub}</div>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          `).join('')}
        </div>
      </div>
    `;
    overlay.onclick = () => this.closeWarmupSheet();
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('visible'));
    vibrate(20);
  },

  closeWarmupSheet() {
    const overlay = document.getElementById('warmup-sheet-overlay');
    if (overlay) overlay.remove();
  },

  startWarmup(planId) {
    this.closeWarmupSheet();
    this.navigateToWorkout(undefined, planId);
  },

  changePlan(planId) {
    if (!planId || planId === Storage.getSelectedPlan()) return;
    Storage.setSelectedPlan(planId);
    if (typeof Calendar !== 'undefined') Calendar.selectedPlan = planId;
    vibrate(20);
    showToast(`Plan cambiado a ${WORKOUT_PLANS[planId]?.name || planId}`);
    this.renderHome();
  },

  navigateToWorkout(date, planId) {
    const d = date instanceof Date ? date : new Date();
    const pid = planId || Storage.getSelectedPlan() || ACTIVE_PLAN;
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

    // Active plan switcher
    const plans = getAvailablePlans();
    const activePlanId = Storage.getSelectedPlan();
    const activePlanName = WORKOUT_PLANS[activePlanId]?.name || 'Plan';
    const planSwitcherHtml = plans.length > 1 ? `
      <div class="home-plan-switch anim-fade-in-up anim-delay-1">
        <span class="home-plan-switch-label">Plan</span>
        <div class="plan-selector-dropdown" style="margin:0; flex:1;">
          <select class="plan-select" onchange="App.changePlan(this.value)">
            ${plans.map(p => `<option value="${p.id}" ${p.id === activePlanId ? 'selected' : ''}>${p.name}</option>`).join('')}
          </select>
          <svg class="plan-select-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </div>
    ` : '';

    container.innerHTML = `
      <div class="home-header anim-fade-in">
        <div class="home-greeting">${greeting}</div>
        <h1 class="home-title">Iza <span class="wave">💪</span></h1>
      </div>

      ${planSwitcherHtml}

      <div class="anim-fade-in-up anim-delay-1">
        ${todayCardHtml}
      </div>

      <!-- Warmup CTA -->
      <button class="create-workout-cta warmup-cta anim-fade-in-up anim-delay-2" onclick="App.openWarmupSheet()">
        <div class="create-workout-cta-icon">🔥</div>
        <div class="create-workout-cta-text">
          <div class="create-workout-cta-title">Calentar</div>
          <div class="create-workout-cta-sub">Tren inferior · Tren superior · Cardio</div>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      <!-- Create Workout CTA -->
      <button class="create-workout-cta anim-fade-in-up anim-delay-2" onclick="App.navigate('create')">
        <div class="create-workout-cta-icon">✨</div>
        <div class="create-workout-cta-text">
          <div class="create-workout-cta-title">Crear entrenamiento</div>
          <div class="create-workout-cta-sub">Personalizado: duración, tipo, cardio</div>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </button>

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

      const isClickable = workout && workout.type !== 'rest';
      const clickHandler = isClickable
        ? `onclick="App.navigateToWorkout(new Date(${d.getFullYear()}, ${d.getMonth()}, ${d.getDate()}))"`
        : '';

      html += `
        <div class="history-item ${isTodays ? 'today-highlight' : ''} ${isClickable ? 'history-item-clickable' : ''}"
          ${clickHandler}
          style="${isTodays ? 'border-color: var(--primary); background: rgba(233,30,140,0.05);' : ''}${isClickable ? 'cursor:pointer;' : ''}">
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

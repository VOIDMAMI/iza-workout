/* ============================================
   IZA WORKOUT — Plans (Entrenos) Module
   ============================================ */

const Plans = {
  expandedPlan: null,
  expandedCategory: null,

  render() {
    const container = document.getElementById('page-entrenos');
    if (!container) return;

    const plans = Object.values(WORKOUT_PLANS);

    container.innerHTML = `
      <div class="page-header anim-fade-in">
        <h1 class="page-title">Entrenos</h1>
        <p class="page-subtitle">Tus programas de entrenamiento</p>
      </div>

      <div class="section-header">
        <h3 class="section-title">Programas</h3>
      </div>
      <div class="plans-list anim-fade-in-up anim-delay-1">
        ${plans.map(p => this._renderPlanCard(p)).join('')}
      </div>

      <div class="section-header mt-xl">
        <h3 class="section-title">Entrenos Express</h3>
        <span class="text-xs text-tertiary">Sesiones sueltas</span>
      </div>
      <div class="express-list anim-fade-in-up anim-delay-2">
        ${this._renderExpressCategories()}
      </div>
    `;
  },

  _renderExpressCategories() {
    const grouped = getExpressByCategory();
    return EXPRESS_CATEGORIES.map(cat => {
      const workouts = grouped[cat.id] || [];
      if (workouts.length === 0) return '';
      const isExpanded = this.expandedCategory === cat.id;
      return `
        <div class="express-cat ${isExpanded ? 'expanded' : ''}">
          <div class="express-cat-header" onclick="Plans.toggleCategory('${cat.id}')">
            <div class="express-cat-icon">${cat.emoji}</div>
            <div class="express-cat-info">
              <div class="express-cat-name">${cat.name}</div>
              <div class="express-cat-meta">${workouts.length} entreno${workouts.length > 1 ? 's' : ''}</div>
            </div>
            <div class="plan-card-chevron ${isExpanded ? 'expanded' : ''}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
          ${isExpanded ? `
            <div class="express-workouts">
              ${workouts.map(w => this._renderExpressCard(w)).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
  },

  _renderExpressCard(workout) {
    const exCount = workout.exercises?.length || 0;
    return `
      <button class="express-card" onclick="Plans.openExpress('${workout.id}')">
        <div class="express-card-info">
          <div class="express-card-name">${workout.name}</div>
          ${workout.description ? `<div class="express-card-desc">${workout.description}</div>` : ''}
          <div class="express-card-meta">
            <span>${exCount} ejercicios</span>
            ${workout.muscleGroups?.length ? `<span>·</span><span>${workout.muscleGroups.slice(0,2).join(' · ')}</span>` : ''}
          </div>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="express-card-arrow"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    `;
  },

  toggleCategory(catId) {
    this.expandedCategory = this.expandedCategory === catId ? null : catId;
    vibrate(20);
    this.render();
  },

  openExpress(workoutId) {
    const workout = EXPRESS_WORKOUTS[workoutId];
    if (!workout) return;
    Workout.backPage = 'entrenos';
    App._switchPage('workout');
    Workout.render(workout, new Date());
  },

  _renderPlanCard(plan) {
    const currentWeek = Storage.getPlanCurrentWeek(plan.id);
    const startDate  = Storage.getPlanStartDate(plan.id);
    const progress   = this._getProgress(plan);
    const pct        = progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0;
    const isExpanded = this.expandedPlan === plan.id;

    const weeksText = plan.weeks ? `${plan.weeks} semanas` : 'Continuo';
    const daysText  = `${plan.trainingDays?.length || 0} días/sem`;
    const typeLabel = plan.planType === 'phased' ? 'Periodizado' : 'Continuo';

    return `
      <div class="plan-card ${isExpanded ? 'expanded' : ''}">
        <div class="plan-card-header" onclick="Plans.togglePlan('${plan.id}')">
          <div class="plan-card-icon">🏋️</div>
          <div class="plan-card-info">
            <div class="plan-card-name">${plan.name}</div>
            <div class="plan-card-meta">${weeksText} · ${daysText} · ${typeLabel}</div>
          </div>
          <div class="plan-card-chevron ${isExpanded ? 'expanded' : ''}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
          </div>
        </div>

        <div class="plan-progress-bar">
          <div class="plan-progress-fill" style="width:${pct}%"></div>
        </div>
        <div class="plan-progress-row">
          <span class="text-xs text-secondary">${progress.completed}/${progress.total} entrenos completados</span>
          <span class="text-xs ${pct > 0 ? 'text-primary text-bold' : 'text-tertiary'}">${pct}%</span>
        </div>

        ${isExpanded ? this._renderDetail(plan, currentWeek, startDate) : ''}
      </div>
    `;
  },

  _renderDetail(plan, currentWeek, startDate) {
    const startLabel = startDate
      ? new Date(startDate + 'T12:00:00').toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
      : null;

    return `
      <div class="plan-detail">
        <div class="plan-config-bar">
          <div class="flex items-center gap-sm flex-wrap">
            ${startLabel
              ? `<span class="text-xs text-secondary">Inicio: ${startLabel}</span>
                 <span class="badge badge-primary">Semana ${currentWeek}</span>`
              : `<span class="text-xs text-secondary">Sin fecha de inicio</span>`
            }
          </div>
          <button class="btn btn-ghost btn-sm"
            onclick="Plans.showStartDatePicker('${plan.id}'); event.stopPropagation()">
            ${startDate ? 'Editar fecha' : '+ Configurar'}
          </button>
        </div>
        <div class="plan-weeks">
          ${this._renderWeeks(plan, currentWeek)}
        </div>
      </div>
    `;
  },

  _renderWeeks(plan, currentWeek) {
    if (plan.planType === 'phased' && plan.weeks) {
      return Array.from({ length: plan.weeks }, (_, i) =>
        this._renderWeekRow(plan, i + 1, currentWeek)
      ).join('');
    }
    // Repeating: show one canonical week (the recurring pattern)
    return this._renderWeekRow(plan, 1, 1);
  },

  _renderWeekRow(plan, weekNum, currentWeek) {
    const isCurrent    = weekNum === currentWeek;
    const weekDone     = this._isWeekCompleted(plan, weekNum);
    // For phased plans, use the actual days present in this specific week.
    // This lets plans like PDG show 5 days in fase 1 and 6 days in fase 2.
    let trainingDays;
    if (plan.planType === 'phased' && plan.weeklySchedule) {
      const week = plan.weeklySchedule[weekNum - 1] || {};
      trainingDays = new Set(
        Object.keys(week).map(Number).filter(d => Array.isArray(week[d]) && week[d].length > 0)
      );
    } else {
      trainingDays = new Set(plan.trainingDays || []);
    }

    const dayChips = [1, 2, 3, 4, 5, 6, 0].map(d => {
      const isTrain = trainingDays.has(d);
      return `<button
        class="day-chip ${isTrain ? 'day-chip-train' : 'day-chip-rest'}"
        ${isTrain
          ? `onclick="Plans.openDayWorkout('${plan.id}', ${weekNum}, ${d}); event.stopPropagation()"`
          : 'disabled'
        }
        title="${DAY_NAMES_FULL[d]}">${DAY_NAMES[d]}</button>`;
    }).join('');

    const checkIcon = weekDone
      ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>`
      : '';

    return `
      <div class="plan-week-row ${isCurrent ? 'current-week' : ''}">
        <div class="plan-week-label">
          ${isCurrent ? '<span class="current-week-dot"></span>' : ''}
          <span class="text-sm ${isCurrent ? 'text-bold' : 'text-secondary'}">S${weekNum}</span>
          ${checkIcon}
        </div>
        <div class="plan-week-days">${dayChips}</div>
      </div>
    `;
  },

  openDayWorkout(planId, weekNum, dayOfWeek) {
    const workout = getWorkoutForPlanWeekDay(planId, weekNum, dayOfWeek);
    if (!workout) return;

    // Compute the calendar date that corresponds to this plan week+day
    let targetDate = new Date();
    const startStr = Storage.getPlanStartDate(planId);
    if (startStr) {
      const start = new Date(startStr + 'T12:00:00');
      const weekStart = new Date(start);
      weekStart.setDate(weekStart.getDate() + (weekNum - 1) * 7);
      let offset = dayOfWeek - weekStart.getDay();
      if (offset < 0) offset += 7;
      targetDate = new Date(weekStart);
      targetDate.setDate(weekStart.getDate() + offset);
    }

    Workout.backPage = 'entrenos';
    App._switchPage('workout');
    Workout.render(workout, targetDate, { weekNum, dayOfWeek, planId });
  },

  togglePlan(planId) {
    this.expandedPlan = this.expandedPlan === planId ? null : planId;
    vibrate(20);
    this.render();
  },

  showStartDatePicker(planId, onSave) {
    this._onSave = onSave || null;
    const plan     = WORKOUT_PLANS[planId];
    const existing = Storage.getPlanStartDate(planId);
    const defVal   = existing || formatDateKey(new Date());

    const modal = document.createElement('div');
    modal.className = 'modal-overlay anim-fade-in';
    modal.id = 'plan-start-modal';
    modal.innerHTML = `
      <div class="modal-card" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h3 class="modal-title">Fecha de inicio</h3>
          <button class="modal-close" onclick="document.getElementById('plan-start-modal').remove()">✕</button>
        </div>
        <p class="text-sm text-secondary mb-lg">¿Cuándo empezaste <strong>${plan.name}</strong>? Esto permite calcular en qué semana estás.</p>
        <div class="form-group">
          <label class="form-label">Fecha de inicio</label>
          <input type="date" id="plan-start-input" class="input" value="${defVal}">
        </div>
        <div class="flex gap-md mt-base">
          <button class="btn btn-ghost flex-1" onclick="document.getElementById('plan-start-modal').remove()">Cancelar</button>
          <button class="btn btn-primary flex-1" onclick="Plans.confirmStart('${planId}')">Guardar</button>
        </div>
      </div>
    `;
    modal.onclick = () => modal.remove();
    document.body.appendChild(modal);
  },

  confirmStart(planId) {
    const input = document.getElementById('plan-start-input');
    if (!input?.value) return;
    Storage.setPlanStartDate(planId, input.value);
    document.getElementById('plan-start-modal')?.remove();
    showToast('Inicio guardado');
    vibrate(30);
    if (this._onSave) {
      const cb = this._onSave;
      this._onSave = null;
      cb();
    } else {
      this.render();
    }
  },

  /* ---- helpers ---- */

  _getProgress(plan) {
    const logs     = Storage._get(STORAGE_KEYS.WORKOUT_LOGS) || {};
    const training = new Set(plan.trainingDays || []);
    const startStr = Storage.getPlanStartDate(plan.id);

    // For phased plans, count actual training days across the whole weeklySchedule
    // so plans with varying days/week (e.g. PDG: 5 in fase 1, 6 in fase 2) are exact.
    let total;
    if (plan.planType === 'phased' && Array.isArray(plan.weeklySchedule)) {
      total = plan.weeklySchedule.reduce((sum, week) => {
        return sum + Object.values(week || {})
          .filter(exs => Array.isArray(exs) && exs.length > 0).length;
      }, 0);
    } else {
      total = (plan.weeks || 12) * (plan.trainingDays?.length || 0);
    }

    let completed = 0;
    Object.entries(logs).forEach(([dateKey, dayLog]) => {
      if (!dayLog._completed) return;
      const d = new Date(dateKey + 'T12:00:00');
      if (!training.has(d.getDay())) return;
      if (startStr && plan.weeks) {
        const start = new Date(startStr + 'T12:00:00');
        const end   = new Date(start);
        end.setDate(end.getDate() + plan.weeks * 7);
        if (d < start || d >= end) return;
      }
      completed++;
    });

    return { completed: Math.min(completed, total), total };
  },

  _isWeekCompleted(plan, weekNum) {
    const startStr = Storage.getPlanStartDate(plan.id);
    if (!startStr) return false;

    const start     = new Date(startStr + 'T12:00:00');
    const weekStart = new Date(start);
    weekStart.setDate(weekStart.getDate() + (weekNum - 1) * 7);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 7);

    // Week-specific training days (phased plans vary per week)
    let weekTrainingDays;
    if (plan.planType === 'phased' && plan.weeklySchedule) {
      const w = plan.weeklySchedule[weekNum - 1] || {};
      weekTrainingDays = Object.keys(w)
        .map(Number)
        .filter(d => Array.isArray(w[d]) && w[d].length > 0);
    } else {
      weekTrainingDays = plan.trainingDays || [];
    }
    const training = new Set(weekTrainingDays);

    const logs = Storage._get(STORAGE_KEYS.WORKOUT_LOGS) || {};
    let count = 0;

    Object.entries(logs).forEach(([dateKey, dayLog]) => {
      if (!dayLog._completed) return;
      const d = new Date(dateKey + 'T12:00:00');
      if (d >= weekStart && d < weekEnd && training.has(d.getDay())) count++;
    });

    return weekTrainingDays.length > 0 && count >= weekTrainingDays.length;
  }
};

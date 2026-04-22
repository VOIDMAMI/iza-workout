/* ============================================
   IZA WORKOUT — Calendar Module
   ============================================ */

const Calendar = {
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  selectedDate: null,
  selectedPlan: null,

  _getPlan() {
    if (!this.selectedPlan) {
      this.selectedPlan = Storage.getSelectedPlan();
    }
    return this.selectedPlan;
  },

  selectPlan(planId) {
    this.selectedPlan = planId;
    Storage.setSelectedPlan(planId);
    vibrate(20);
    this.render();
  },

  render() {
    const container = document.getElementById('page-calendar');
    if (!container) return;

    const plans = getAvailablePlans();
    const currentPlan = this._getPlan();
    const planSelectorHtml = plans.length > 1 ? `
      <div class="plan-selector">
        ${plans.map(p => `
          <button class="plan-chip ${p.id === currentPlan ? 'active' : ''}"
            onclick="Calendar.selectPlan('${p.id}')">
            ${p.name}
          </button>
        `).join('')}
      </div>
    ` : '';

    const currentPlanObj = WORKOUT_PLANS[currentPlan];
    const currentWeek    = Storage.getPlanCurrentWeek(currentPlan);
    const weekBadge      = currentPlanObj?.weeks
      ? `<span class="badge badge-primary" style="font-size:11px">Semana ${currentWeek}</span>`
      : '';

    container.innerHTML = `
      <div class="calendar-header">
        <button class="calendar-nav-btn" onclick="Calendar.prevMonth()" aria-label="Mes anterior">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <span class="calendar-month-label">${MONTH_NAMES[this.currentMonth]} ${this.currentYear}</span>
        <button class="calendar-nav-btn" onclick="Calendar.nextMonth()" aria-label="Mes siguiente">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>

      ${planSelectorHtml}

      <div class="flex items-center justify-between" style="margin-bottom: var(--space-sm);">
        <div class="flex items-center gap-sm">${weekBadge}</div>
        <button class="btn btn-ghost" style="font-size:12px; padding: 4px 10px;"
          onclick="Plans.showStartDatePicker('${currentPlan}', () => Calendar.render())">
          ⚙ Configurar semana
        </button>
      </div>

      <div class="calendar-grid" id="calendar-grid"></div>

      <div class="calendar-legend">
        <div class="calendar-legend-item">
          <span class="legend-dot strength-color"></span> Fuerza
        </div>
        <div class="calendar-legend-item">
          <span class="legend-dot running-color"></span> Carrera
        </div>
        <div class="calendar-legend-item">
          <span class="legend-dot done-color"></span> Hecho
        </div>
        <div class="calendar-legend-item">
          <span class="legend-dot rest-color"></span> Descanso
        </div>
      </div>

      <div class="calendar-day-detail" id="calendar-day-detail"></div>
    `;

    this.renderGrid();
  },

  renderGrid() {
    const grid = document.getElementById('calendar-grid');
    if (!grid) return;

    const planId = this._getPlan();
    const dayOrder = [1, 2, 3, 4, 5, 6, 0];
    let html = dayOrder.map(d => `<div class="calendar-day-name">${DAY_NAMES[d]}</div>`).join('');

    const daysInMonth = getDaysInMonth(this.currentYear, this.currentMonth);
    let firstDay = getFirstDayOfMonth(this.currentYear, this.currentMonth);
    firstDay = firstDay === 0 ? 6 : firstDay - 1;

    for (let i = 0; i < firstDay; i++) {
      html += `<div class="calendar-day" style="visibility:hidden"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(this.currentYear, this.currentMonth, day);
      const dateKey = formatDateKey(date);
      const dayOfWeek = date.getDay();
      const workout = getWorkoutForPlanAndDay(planId, dayOfWeek);
      const isTodayDate = isToday(date);
      const isSelected = this.selectedDate && isSameDay(this.selectedDate, date);

      let classes = ['calendar-day'];
      if (isTodayDate) classes.push('today');
      if (isSelected) classes.push('selected');

      if (Storage._get(STORAGE_KEYS.WORKOUT_LOGS)?.[dateKey]?._completed) {
        classes.push('completed-day');
      } else if (workout && workout.type === 'running') {
        classes.push('has-running');
      } else if (workout && workout.type === 'strength') {
        classes.push('has-workout');
      } else if (!workout || workout.type === 'rest') {
        classes.push('rest-day');
      }

      html += `
        <button class="${classes.join(' ')}" onclick="Calendar.selectDate(new Date(${this.currentYear}, ${this.currentMonth}, ${day}))">
          ${day}
        </button>
      `;
    }

    grid.innerHTML = html;
  },

  selectDate(date) {
    this.selectedDate = date;
    vibrate(30);
    this.renderGrid();
    this.renderDayDetail(date);
  },

  renderDayDetail(date) {
    const container = document.getElementById('calendar-day-detail');
    if (!container) return;

    const planId = this._getPlan();
    const dayOfWeek = date.getDay();
    const workout = getWorkoutForPlanAndDay(planId, dayOfWeek);
    const dateKey = formatDateKey(date);
    const isCompleted = Storage._get(STORAGE_KEYS.WORKOUT_LOGS)?.[dateKey]?._completed;
    const isFuture = date > new Date() && !isToday(date);

    if (!workout || workout.type === 'rest') {
      container.innerHTML = `
        <div class="card anim-fade-in-up" style="margin-top: var(--space-base);">
          <div class="flex items-center gap-md">
            <span style="font-size:1.5rem">😴</span>
            <div>
              <div class="text-bold">${formatDateFull(date)}</div>
              <div class="text-sm text-secondary">Día de descanso — ¡recupera!</div>
            </div>
          </div>
        </div>
      `;
      return;
    }

    const statusBadge = isCompleted
      ? '<span class="badge badge-success">✓ Completado</span>'
      : isToday(date)
        ? '<span class="badge badge-primary">Hoy</span>'
        : isFuture
          ? '<span class="badge" style="background:var(--surface);color:var(--text-tertiary)">Próximo</span>'
          : '<span class="badge badge-warning">Pendiente</span>';

    const typeIcon = workout.type === 'running' ? '🏃' : '🏋️';

    const btnLabel = isCompleted
      ? '✓ Ver entrenamiento'
      : isToday(date)
        ? 'Empezar entrenamiento →'
        : 'Ver entrenamiento →';

    let exerciseList = '';
    if (workout.type === 'strength') {
      exerciseList = workout.exercises.map(ex =>
        `<div class="flex items-center justify-between" style="padding: var(--space-sm) 0; border-bottom: 1px solid var(--border);">
          <span class="text-sm">${ex.name}</span>
          <span class="text-sm text-secondary">${ex.sets}×${ex.reps}</span>
        </div>`
      ).join('');
    } else if (workout.type === 'running' && workout.runConfig) {
      exerciseList = `
        <div class="text-sm text-secondary" style="padding: var(--space-sm) 0;">
          <div class="mb-sm"><strong>Calentamiento:</strong> ${workout.runConfig.warmup}</div>
          <div class="mb-sm"><strong>Principal:</strong> ${workout.runConfig.main}</div>
          <div class="mb-sm"><strong>Vuelta a calma:</strong> ${workout.runConfig.cooldown}</div>
          <div><strong>Tiempo total:</strong> ${workout.runConfig.totalTime}</div>
        </div>
      `;
    }

    // Encode date as year/month/day so onclick can reconstruct a Date without TZ issues
    const y = date.getFullYear(), m = date.getMonth(), d = date.getDate();

    container.innerHTML = `
      <div class="card anim-fade-in-up" style="margin-top: var(--space-base);">
        <div class="flex items-center justify-between mb-md">
          <div class="flex items-center gap-md">
            <span style="font-size:1.5rem">${typeIcon}</span>
            <div>
              <div class="text-bold">${workout.name}</div>
              <div class="text-sm text-secondary">${formatDateFull(date)}</div>
            </div>
          </div>
          ${statusBadge}
        </div>
        <div class="divider"></div>
        ${exerciseList}
        <button class="btn btn-primary btn-full mt-base"
          onclick="App.navigateToWorkout(new Date(${y}, ${m}, ${d}), '${planId}')">
          ${btnLabel}
        </button>
      </div>
    `;
  },

  prevMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.selectedDate = null;
    this.render();
  },

  nextMonth() {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.selectedDate = null;
    this.render();
  }
};

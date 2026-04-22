/* ============================================
   IZA WORKOUT — Workout View
   ============================================ */

const Workout = {
  currentWorkout: null,
  currentDate: null,
  currentWeek: null,
  currentDay: null,
  currentPlanId: null,
  backPage: 'home',

  // Exercises whose reps field is strictly "N/M" (two plain numbers, e.g. '10/8')
  // are split into individual 1-set cards so each warm-up approximation appears
  // separately. Patterns like '6/lado', '30s/pierna', '10 (5/lado)' are left as-is.
  _expandExercises(exercises) {
    return exercises.flatMap(ex => {
      const repsStr = String(ex.reps).trim();
      const match = repsStr.match(/^(\d+)\/(\d+)$/);
      if (!match) return [ex];
      return [match[1], match[2]].map((r, i) => ({
        ...ex,
        id: ex.id + '__' + i,
        sets: 1,
        reps: r
      }));
    });
  },

  render(workout, date, context) {
    const raw = workout !== undefined ? workout : getTodayWorkout();
    this.currentDate = date !== undefined ? date : new Date();
    this.currentWeek = context?.weekNum ?? null;
    this.currentDay = context?.dayOfWeek ?? null;
    this.currentPlanId = context?.planId ?? null;
    this.currentWorkout = raw && raw.exercises
      ? { ...raw, exercises: this._expandExercises(raw.exercises) }
      : raw;

    // Keep screen on during workout
    if (this.currentWorkout && this.currentWorkout.type !== 'rest') {
      requestWakeLock();
      requestNotificationPermission();
    }

    const container = document.getElementById('page-workout');
    if (!container || !this.currentWorkout) return;

    if (this.currentWorkout.type === 'rest') {
      this.renderRestDay(container);
      return;
    }

    if (this.currentWorkout.type === 'running') {
      this.renderRunningDay(container);
      return;
    }

    this.renderStrengthDay(container);
  },

  renderRestDay(container) {
    container.innerHTML = `
      <button class="workout-back" onclick="App.navigate(Workout.backPage)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        Volver
      </button>
      <div class="rest-day-view">
        <div class="rest-day-emoji">😴</div>
        <h2 class="rest-day-title">Día de Descanso</h2>
        <p class="rest-day-text">Tu cuerpo necesita recuperarse. Descansa, hidrátate y come bien. ¡Mañana volvemos más fuertes!</p>
      </div>
    `;
  },

  renderRunningDay(container) {
    const config = this.currentWorkout.runConfig;
    container.innerHTML = `
      <button class="workout-back" onclick="App.navigate(Workout.backPage)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        Volver
      </button>
      <div class="workout-page-header">
        <h1 class="workout-day-name">🏃 ${this.currentWorkout.name}</h1>
        <div class="workout-day-info">
          <span class="badge badge-info">${config.type === 'intervals' ? 'Intervalos' : 'Fondo'}</span>
          <span class="text-sm text-secondary">${config.totalTime}</span>
        </div>
      </div>

      <div class="card mb-lg anim-fade-in-up anim-delay-1">
        <h4 class="mb-md">🔥 Calentamiento</h4>
        <p class="text-base">${config.warmup}</p>
      </div>

      <div class="card-gradient mb-lg anim-fade-in-up anim-delay-2" style="position:relative; z-index:0;">
        <h4 class="mb-md" style="position:relative; z-index:1;">⚡ Parte Principal</h4>
        <p class="text-base" style="position:relative; z-index:1;">${config.main}</p>
        ${config.notes ? `<p class="text-sm mt-md" style="opacity:0.8; position:relative; z-index:1;">💡 ${config.notes}</p>` : ''}
      </div>

      <div class="card mb-lg anim-fade-in-up anim-delay-3">
        <h4 class="mb-md">🧘 Vuelta a la Calma</h4>
        <p class="text-base">${config.cooldown}</p>
      </div>

      <div class="divider"></div>

      <div class="section-header mt-xl">
        <h3 class="section-title">Registrar Carrera</h3>
      </div>

      <div class="running-log-form anim-fade-in-up anim-delay-4">
        <div class="form-row">
          <div class="form-group" style="flex:1">
            <label class="form-label">Distancia (km)</label>
            <input type="number" class="input" id="run-distance" placeholder="5.0" step="0.1" min="0">
          </div>
          <div class="form-group" style="flex:1">
            <label class="form-label">Tiempo (min)</label>
            <input type="number" class="input" id="run-time" placeholder="30" min="0">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">¿Cómo te sentiste?</label>
          <div class="chip-group">
            <button class="chip active" onclick="Workout.selectFeeling(this, 'great')">💪 Genial</button>
            <button class="chip" onclick="Workout.selectFeeling(this, 'normal')">👍 Normal</button>
            <button class="chip" onclick="Workout.selectFeeling(this, 'hard')">😤 Duro</button>
            <button class="chip" onclick="Workout.selectFeeling(this, 'bad')">😵 Mal</button>
          </div>
        </div>
        <button class="btn btn-primary btn-full btn-lg" onclick="Workout.saveRunAndFinish()">
          Guardar Carrera ✓
        </button>
      </div>
    `;
  },

  selectedFeeling: 'great',

  selectFeeling(btn, feeling) {
    document.querySelectorAll('.running-log-form .chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    this.selectedFeeling = feeling;
    vibrate(20);
  },

  saveRunAndFinish() {
    const distance = document.getElementById('run-distance')?.value;
    const time = document.getElementById('run-time')?.value;

    if (!distance || !time) {
      showToast('Completa distancia y tiempo', 'warning');
      return;
    }

    Storage.saveRunningLog({
      date: formatDateKey(this.currentDate),
      distance: parseFloat(distance),
      time: parseInt(time),
      feeling: this.selectedFeeling
    });

    Storage.setDayCompleted(formatDateKey(this.currentDate), this.currentWorkout);
    showToast('¡Carrera registrada! 🏃‍♀️');
    vibrate(100);

    setTimeout(() => App.navigate('home'), 800);
  },

  _renderWeekDayLabel() {
    if (this.currentWeek == null || this.currentDay == null) return '';
    const dayName = DAY_NAMES_FULL[this.currentDay] || '';
    return `<div class="workout-week-day-label">Semana ${this.currentWeek} · ${dayName}</div>`;
  },

  renderStrengthDay(container) {
    const dateKey = formatDateKey(this.currentDate);
    const dayLog = Storage.getWorkoutLog(dateKey);

    const exerciseCards = this.currentWorkout.exercises.map((ex, exIndex) => {
      const exLog = dayLog[ex.id] || { sets: [], completed: false };
      const lastWeight = Storage.getLastWeight(ex.id);

      let setsHtml = '';
      for (let i = 0; i < ex.sets; i++) {
        const setLog = exLog.sets[i] || { weight: 0, reps: 0, completed: false };
        const isCompleted = setLog.completed;
        const placeholderWeight = lastWeight ? lastWeight : '';

        setsHtml += `
          <div class="set-row ${isCompleted ? 'completed' : ''}" data-exercise="${ex.id}" data-set="${i}">
            <span class="set-number">${isCompleted ? '✓' : i + 1}</span>
            <span class="set-target">${ex.reps} reps</span>
            <div class="set-inputs">
              <div class="set-input-group">
                <span class="set-input-label">KG</span>
                <input type="number" class="input-tracker" 
                  id="weight-${ex.id}-${i}" 
                  value="${setLog.weight || ''}" 
                  placeholder="${placeholderWeight}"
                  step="0.5" min="0"
                  onchange="Tracker.onInputChange('${ex.id}', ${i})"
                >
              </div>
              <div class="set-input-group">
                <span class="set-input-label">REPS</span>
                <input type="number" class="input-tracker" 
                  id="reps-${ex.id}-${i}" 
                  value="${setLog.reps || ''}" 
                  placeholder="${typeof ex.reps === 'string' ? ex.reps.split('-')[0] : ex.reps}"
                  min="0"
                  onchange="Tracker.onInputChange('${ex.id}', ${i})"
                >
              </div>
              <button class="set-check ${isCompleted ? 'checked' : ''}" 
                onclick="Tracker.toggleSet('${ex.id}', ${i})"
                aria-label="Completar serie">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              </button>
            </div>
          </div>
        `;
      }

      const allSetsCompleted = exLog.sets.length >= ex.sets && exLog.sets.every(s => s.completed);
      const completedSets = exLog.sets.filter(s => s.completed).length;

      const searchQuery = ex.name.replace(/\s*\|\s*/g, ' ').replace(/\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();

      return `
        <div class="exercise-card ${allSetsCompleted ? 'completed' : ''} anim-fade-in-up anim-delay-${Math.min(exIndex + 1, 8)}" id="exercise-${ex.id}">
          <div class="exercise-header">
            <div style="flex:1; min-width:0;">
              <div class="exercise-name">
                ${ex.name}
                <button class="btn-search-ex" onclick="Workout.searchExercise(event, '${searchQuery.replace(/'/g, "\\'")}')">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
                  Buscar ejercicio
                </button>
              </div>
              <div class="exercise-meta">
                <span>${ex.sets} series × ${ex.reps}</span>
                ${ex.rest ? `<span>⏱ ${ex.rest}s</span>` : ''}
              </div>
            </div>
            <span class="text-sm ${allSetsCompleted ? 'text-success' : 'text-secondary'}">${completedSets}/${ex.sets}</span>
          </div>
          ${ex.notes ? `<div class="text-sm text-tertiary mb-md" style="font-style:italic">💡 ${ex.notes}</div>` : ''}
          <div class="exercise-sets">
            ${setsHtml}
          </div>
        </div>
      `;
    }).join('');

    const totalExercises = this.currentWorkout.exercises.length;
    const completedExercises = this.currentWorkout.exercises.filter(ex => {
      const exLog = dayLog[ex.id];
      return exLog && exLog.sets.length >= ex.sets && exLog.sets.every(s => s.completed);
    }).length;
    const progressPct = totalExercises > 0 ? Math.round((completedExercises / totalExercises) * 100) : 0;

    container.innerHTML = `
      <button class="workout-back" onclick="App.navigate(Workout.backPage)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        Volver
      </button>

      <div class="workout-page-header">
        <h1 class="workout-day-name">${this.currentWorkout.name}</h1>
        <div class="workout-day-info">
          ${this.currentWorkout.muscleGroups.map(g => `<span class="badge badge-primary">${g}</span>`).join('')}
        </div>
      </div>

      <div class="workout-progress-section">
        ${this._renderWeekDayLabel()}
        <div class="workout-progress-text">
          <span>${completedExercises} de ${totalExercises} ejercicios</span>
          <span class="text-bold">${progressPct}%</span>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${progressPct}%"></div>
        </div>
      </div>

      <div class="rest-timer hidden" id="rest-timer-container">
        <div class="flex items-center justify-between w-full mb-md">
          <span class="text-sm text-secondary">⏱ Descanso</span>
          <button class="btn-ghost text-sm" onclick="Tracker.hideTimer()">✕</button>
        </div>
        <div class="timer-display" id="timer-display">00:00</div>
        <div class="timer-preset">
          <button class="timer-preset-btn" onclick="Tracker.startTimer(30)">0:30</button>
          <button class="timer-preset-btn active" onclick="Tracker.startTimer(60)">1:00</button>
          <button class="timer-preset-btn" onclick="Tracker.startTimer(90)">1:30</button>
          <button class="timer-preset-btn" onclick="Tracker.startTimer(120)">2:00</button>
          <button class="timer-preset-btn" onclick="Tracker.startTimer(150)">2:30</button>
        </div>
      </div>

      <div class="exercise-list" id="exercise-list">
        ${exerciseCards}
      </div>

      ${progressPct === 100 ? `
        <div class="workout-finish-btn anim-fade-in-up">
          <button class="btn btn-primary btn-full btn-lg anim-glow" onclick="Workout.finishWorkout()">
            🎉 ¡Finalizar Entrenamiento!
          </button>
        </div>
      ` : ''}
    `;
  },

  finishWorkout() {
    const dateKey = formatDateKey(this.currentDate);
    Storage.setDayCompleted(dateKey, this.currentWorkout);
    releaseWakeLock();
    vibrate(200);
    showToast('¡Entrenamiento completado! 💪🔥');

    // Celebration animation
    const container = document.getElementById('page-workout');
    if (container) {
      const celebration = document.createElement('div');
      celebration.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;z-index:999;background:rgba(0,0,0,0.8);animation:fadeIn 0.3s ease;';
      celebration.innerHTML = `
        <div style="text-align:center;animation:scaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1);">
          <div style="font-size:4rem;margin-bottom:1rem;">🏆</div>
          <div style="font-size:1.5rem;font-weight:800;margin-bottom:0.5rem;">¡Increíble!</div>
          <div style="color:var(--text-secondary);">Has completado ${this.currentWorkout.name}</div>
        </div>
      `;
      document.body.appendChild(celebration);
      celebration.addEventListener('click', () => {
        celebration.remove();
        App.navigate('home');
      });
      setTimeout(() => {
        celebration.remove();
        App.navigate('home');
      }, 2500);
    }
  },

  refreshView() {
    if (this.currentWorkout) {
      this.render(this.currentWorkout, this.currentDate);
    }
  },

  searchExercise(event, query) {
    event.stopPropagation();
    event.preventDefault();
    vibrate(30);

    const encoded = encodeURIComponent(query);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    // Deep link to TikTok app (iOS/Android)
    const appUrl = isIOS
      ? `snssdk1233://search?keyword=${encoded}`
      : isAndroid
        ? `intent://search?keyword=${encoded}#Intent;scheme=snssdk1233;package=com.zhiliaoapp.musically;end`
        : null;

    const webUrl = `https://www.tiktok.com/search?q=${encoded}`;

    if (appUrl && (isIOS || isAndroid)) {
      // Try opening the app, fall back to web after short delay
      const fallbackTimer = setTimeout(() => {
        window.location.href = webUrl;
      }, 1500);

      // If the app opens, the page becomes hidden → cancel fallback
      const onVisibility = () => {
        if (document.hidden) {
          clearTimeout(fallbackTimer);
          document.removeEventListener('visibilitychange', onVisibility);
        }
      };
      document.addEventListener('visibilitychange', onVisibility);

      window.location.href = appUrl;
    } else {
      window.open(webUrl, '_blank', 'noopener');
    }
  }
};

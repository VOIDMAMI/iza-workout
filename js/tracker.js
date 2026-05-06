/* ============================================
   IZA WORKOUT — Tracker (Set Logging)
   ============================================ */

const TIMER_STORAGE_KEY = 'iza_active_rest_timer';

const Tracker = {
  timerInterval: null,
  timerSeconds: 0,
  timerEndAt: 0,         // Date.now() en ms cuando acaba el cronómetro
  timerDuration: 0,      // segundos totales (para mostrar progreso)
  timerNotifyTimeout: null,
  timerFired: false,

  /**
   * Toggle a set as completed/uncompleted
   */
  toggleSet(exerciseId, setIndex) {
    const dateKey = formatDateKey(Workout.currentDate || new Date());
    const weightInput = document.getElementById(`weight-${exerciseId}-${setIndex}`);
    const repsInput = document.getElementById(`reps-${exerciseId}-${setIndex}`);

    if (!weightInput || !repsInput) return;

    const weight = parseFloat(weightInput.value) || parseFloat(weightInput.placeholder) || 0;
    const reps = parseInt(repsInput.value) || parseInt(repsInput.placeholder) || 0;

    // Toggle
    const dayLog = Storage.getWorkoutLog(dateKey);
    const exLog = dayLog[exerciseId] || { sets: [], completed: false };
    const setLog = exLog.sets[setIndex] || { completed: false };
    const nowCompleted = !setLog.completed;

    // Save
    Storage.saveSetLog(dateKey, exerciseId, setIndex, weight, reps, nowCompleted);

    // Update UI
    const setRow = document.querySelector(`.set-row[data-exercise="${exerciseId}"][data-set="${setIndex}"]`);
    const checkBtn = setRow?.querySelector('.set-check');
    const setNumber = setRow?.querySelector('.set-number');

    if (nowCompleted) {
      setRow?.classList.add('completed');
      checkBtn?.classList.add('checked');
      if (setNumber) setNumber.textContent = '✓';
      vibrate(50);

      // Fill in values if empty
      if (!weightInput.value && weight) weightInput.value = weight;
      if (!repsInput.value && reps) repsInput.value = reps;

      // Show timer (use 60s default if exercise has no rest defined)
      const exercise = Workout.currentWorkout?.exercises?.find(e => e.id === exerciseId);
      if (exercise) {
        this.showTimer(exercise.rest || 60);
      }

      // Check if all sets of this exercise are done
      this.checkExerciseCompletion(exerciseId);
    } else {
      setRow?.classList.remove('completed');
      checkBtn?.classList.remove('checked');
      if (setNumber) setNumber.textContent = String(setIndex + 1);

      // Unmark exercise completion
      const exerciseCard = document.getElementById(`exercise-${exerciseId}`);
      exerciseCard?.classList.remove('completed');
    }

    // Update progress bar
    this.updateProgressBar();
  },

  /**
   * Handle input change — auto-save
   */
  onInputChange(exerciseId, setIndex) {
    const dateKey = formatDateKey(Workout.currentDate || new Date());
    const weightInput = document.getElementById(`weight-${exerciseId}-${setIndex}`);
    const repsInput = document.getElementById(`reps-${exerciseId}-${setIndex}`);

    const weight = parseFloat(weightInput?.value) || 0;
    const reps = parseInt(repsInput?.value) || 0;

    const dayLog = Storage.getWorkoutLog(dateKey);
    const exLog = dayLog[exerciseId] || { sets: [] };
    const setLog = exLog.sets[setIndex] || { completed: false };

    Storage.saveSetLog(dateKey, exerciseId, setIndex, weight, reps, setLog.completed);
  },

  /**
   * Check if all sets of an exercise are completed
   */
  checkExerciseCompletion(exerciseId) {
    const exercise = Workout.currentWorkout?.exercises?.find(e => e.id === exerciseId);
    if (!exercise) return;

    const dateKey = formatDateKey(Workout.currentDate || new Date());
    const dayLog = Storage.getWorkoutLog(dateKey);
    const exLog = dayLog[exerciseId] || { sets: [] };

    const allDone = exLog.sets.length >= exercise.sets && exLog.sets.every(s => s.completed);

    if (allDone) {
      Storage.setExerciseCompleted(dateKey, exerciseId, true);
      const exerciseCard = document.getElementById(`exercise-${exerciseId}`);
      exerciseCard?.classList.add('completed');
      showToast(`${exercise.name} — ¡Completado! 💪`);
    }

    // Check if entire workout is done
    const allExercisesDone = Workout.currentWorkout.exercises.every(ex => {
      const log = dayLog[ex.id] || { sets: [] };
      return log.sets.length >= ex.sets && log.sets.every(s => s.completed);
    });

    // Refresh to show finish button
    if (allExercisesDone) {
      // Re-read updated logs
      setTimeout(() => Workout.refreshView(), 300);
    }
  },

  /**
   * Update the workout progress bar
   */
  updateProgressBar() {
    const dateKey = formatDateKey(Workout.currentDate || new Date());
    const dayLog = Storage.getWorkoutLog(dateKey);

    let totalSets = 0;
    let completedSets = 0;

    Workout.currentWorkout?.exercises?.forEach(ex => {
      totalSets += ex.sets;
      const exLog = dayLog[ex.id] || { sets: [] };
      completedSets += exLog.sets.filter(s => s.completed).length;
    });

    const pct = totalSets > 0 ? Math.round((completedSets / totalSets) * 100) : 0;

    const fill = document.querySelector('.progress-bar-fill');
    if (fill) fill.style.width = pct + '%';

    const totalExercises = Workout.currentWorkout?.exercises?.length || 0;
    const completedExercises = Workout.currentWorkout?.exercises?.filter(ex => {
      const exLog = dayLog[ex.id] || { sets: [] };
      return exLog.sets.length >= ex.sets && exLog.sets.every(s => s.completed);
    }).length || 0;

    const textEl = document.querySelector('.workout-progress-text');
    if (textEl) {
      textEl.innerHTML = `
        <span>${completedExercises} de ${totalExercises} ejercicios</span>
        <span class="text-bold">${Math.round((completedExercises / totalExercises) * 100)}%</span>
      `;
    }
  },

  /* ---- Rest Timer ---- */

  showTimer(seconds) {
    const timerContainer = document.getElementById('rest-timer-container');
    if (!timerContainer) return;
    timerContainer.classList.remove('hidden');
    this._updateNotifBanner();
    this.startTimer(seconds || 60);

    // Scroll to timer
    timerContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  },

  _updateNotifBanner() {
    const banner = document.getElementById('notif-permission-banner');
    if (!banner) return;
    const supported = 'Notification' in window;
    if (!supported) {
      banner.classList.add('hidden');
      return;
    }
    const perm = Notification.permission;
    if (perm === 'granted') {
      banner.classList.add('hidden');
    } else if (perm === 'denied') {
      // Mostrar instrucciones para desbloquear desde Ajustes
      banner.classList.remove('hidden');
      banner.innerHTML = `
        <span class="text-sm text-secondary" style="flex:1;">
          🔕 Notificaciones bloqueadas. Ve a <strong>Ajustes → Notificaciones → Iza Workout</strong> y actívalas.
        </span>
      `;
    } else {
      // 'default' — pedir permiso
      banner.classList.remove('hidden');
    }
  },

  async askNotificationPermission() {
    if (!('Notification' in window)) {
      showToast('Tu navegador no soporta notificaciones', 'warning');
      return;
    }
    try {
      const result = await Notification.requestPermission();
      if (result === 'granted') {
        showToast('¡Notificaciones activadas! 🔔');
        // Notificación de prueba para confirmar que funciona
        try {
          if ('serviceWorker' in navigator) {
            const reg = await navigator.serviceWorker.ready;
            reg.showNotification('Iza Workout', {
              body: 'Las notificaciones están listas',
              icon: './assets/icons/icon-192.png',
              tag: 'notif-test',
              silent: true
            });
            setTimeout(() => {
              reg.getNotifications({ tag: 'notif-test' }).then(ns => ns.forEach(n => n.close()));
            }, 2500);
          }
        } catch (e) {}
      } else if (result === 'denied') {
        showToast('Notificaciones bloqueadas. Actívalas en Ajustes del móvil.', 'warning');
      }
      this._updateNotifBanner();
    } catch (e) {
      showToast('No se pudo activar', 'error');
    }
  },

  hideTimer() {
    const timerContainer = document.getElementById('rest-timer-container');
    if (timerContainer) timerContainer.classList.add('hidden');
    this.stopTimer();
  },

  startTimer(seconds, opts = {}) {
    this.stopTimer();
    this.timerDuration = seconds;
    this.timerEndAt = opts.resumeEndAt || (Date.now() + seconds * 1000);
    this.timerSeconds = Math.max(0, Math.ceil((this.timerEndAt - Date.now()) / 1000));
    this.timerFired = false;

    // Update preset buttons
    document.querySelectorAll('.timer-preset-btn').forEach(btn => {
      btn.classList.remove('active');
      const btnSeconds = parseInt(btn.textContent.split(':')[0]) * 60 + parseInt(btn.textContent.split(':')[1] || 0);
      if (btnSeconds === seconds) btn.classList.add('active');
    });

    const display = document.getElementById('timer-display');
    if (display) {
      display.textContent = formatTime(this.timerSeconds);
      display.className = 'timer-display';
    }

    // Persistir y programar notificación (sobrevive a app en background / pantalla bloqueada)
    if (!opts.resumeEndAt) {
      localStorage.setItem(TIMER_STORAGE_KEY, JSON.stringify({
        endAt: this.timerEndAt,
        duration: this.timerDuration
      }));
    }
    this._scheduleEndNotification();

    this.timerInterval = setInterval(() => this._tick(), 250);
    this._tick();
  },

  _tick() {
    const display = document.getElementById('timer-display');
    const remaining = Math.max(0, Math.ceil((this.timerEndAt - Date.now()) / 1000));
    const prev = this.timerSeconds;
    this.timerSeconds = remaining;

    if (display) {
      display.textContent = formatTime(remaining);

      if (remaining <= 5 && remaining > 0) {
        display.className = 'timer-display warning';
      }
    }

    // Tick sounds en los últimos 3s — solo cuando el segundo cambia
    if (prev > remaining && (remaining === 3 || remaining === 2 || remaining === 1)) {
      playTickSound();
    }

    if (remaining <= 0 && !this.timerFired) {
      this.timerFired = true;
      if (display) {
        display.className = 'timer-display done';
        display.textContent = '¡GO!';
      }
      // Si la pestaña está visible, sonido + vibración aquí.
      // Si no, la notificación programada (showRestDoneNotification) se encarga.
      if (document.visibilityState === 'visible') {
        playAlertSound();
        vibrate([200, 100, 200, 100, 400]);
        showRestDoneNotification();
      }
      this._clearPersistedTimer();
      setTimeout(() => this.hideTimer(), 2000);
    }
  },

  _scheduleEndNotification() {
    if (this.timerNotifyTimeout) {
      clearTimeout(this.timerNotifyTimeout);
      this.timerNotifyTimeout = null;
    }
    const ms = this.timerEndAt - Date.now();
    if (ms <= 0) return;
    // setTimeout no se ejecuta con la pantalla bloqueada en móvil, pero
    // sí se dispara cuando el SO despierta el JS aunque sea brevemente.
    // La notificación system-level es la garantía real cuando el móvil está bloqueado.
    this.timerNotifyTimeout = setTimeout(() => {
      showRestDoneNotification();
      vibrate([200, 100, 200, 100, 400]);
      // Si la pestaña no está visible, intenta sonido también (puede fallar en iOS)
      if (document.visibilityState !== 'visible') {
        playAlertSound();
      }
    }, ms);
  },

  _clearPersistedTimer() {
    try { localStorage.removeItem(TIMER_STORAGE_KEY); } catch (e) {}
  },

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    if (this.timerNotifyTimeout) {
      clearTimeout(this.timerNotifyTimeout);
      this.timerNotifyTimeout = null;
    }
    this._clearPersistedTimer();
  },

  // Llamado al volver a la app — restaura el timer si seguía corriendo
  resumeIfActive() {
    try {
      const raw = localStorage.getItem(TIMER_STORAGE_KEY);
      if (!raw) return;
      const { endAt, duration } = JSON.parse(raw);
      if (!endAt || Date.now() >= endAt + 5000) {
        // ya pasó hace rato — limpiar y no resucitar
        this._clearPersistedTimer();
        return;
      }
      const timerContainer = document.getElementById('rest-timer-container');
      if (timerContainer) timerContainer.classList.remove('hidden');
      this.startTimer(duration, { resumeEndAt: endAt });
    } catch (e) {}
  }
};

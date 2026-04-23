/* ============================================
   IZA WORKOUT — Tracker (Set Logging)
   ============================================ */

const Tracker = {
  timerInterval: null,
  timerSeconds: 0,

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
    this.startTimer(seconds || 60);

    // Scroll to timer
    timerContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  },

  hideTimer() {
    const timerContainer = document.getElementById('rest-timer-container');
    if (timerContainer) timerContainer.classList.add('hidden');
    this.stopTimer();
  },

  startTimer(seconds) {
    this.stopTimer();
    this.timerSeconds = seconds;

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

    this.timerInterval = setInterval(() => {
      this.timerSeconds--;

      if (display) {
        display.textContent = formatTime(Math.max(0, this.timerSeconds));

        if (this.timerSeconds <= 5 && this.timerSeconds > 0) {
          display.className = 'timer-display warning';
        }

        if (this.timerSeconds === 3 || this.timerSeconds === 2 || this.timerSeconds === 1) {
          playTickSound();
        }

        if (this.timerSeconds <= 0) {
          display.className = 'timer-display done';
          display.textContent = '¡GO!';
          this.stopTimer();

          // Alert: sound + vibration + notification
          playAlertSound();
          vibrate([200, 100, 200, 100, 400]);
          showRestDoneNotification();

          setTimeout(() => this.hideTimer(), 2000);
        }
      }
    }, 1000);
  },

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
};

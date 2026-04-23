/* ============================================
   IZA WORKOUT — Storage Manager
   All data persists in localStorage
   ============================================ */

const STORAGE_KEYS = {
  WORKOUT_LOGS: 'iza_workout_logs',
  RUNNING_LOGS: 'iza_running_logs',
  SETTINGS: 'iza_settings',
  STREAK: 'iza_streak',
  SELECTED_PLAN: 'iza_selected_plan',
  PLAN_START_DATES: 'iza_plan_start_dates'
};

const Storage = {
  /* ---- Generic helpers ---- */
  _get(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error('Storage read error:', e);
      return null;
    }
  },

  _set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Storage write error:', e);
    }
  },

  /* ---- Workout Logs ---- */
  
  /**
   * Save a set log for a specific exercise
   * Structure: { [dateKey]: { [exerciseId]: { sets: [ {weight, reps, completed} ], completed: bool } } }
   */
  saveSetLog(dateKey, exerciseId, setIndex, weight, reps, completed) {
    const logs = this._get(STORAGE_KEYS.WORKOUT_LOGS) || {};
    if (!logs[dateKey]) logs[dateKey] = {};
    if (!logs[dateKey][exerciseId]) {
      logs[dateKey][exerciseId] = { sets: [], completed: false };
    }

    // Ensure sets array is long enough
    while (logs[dateKey][exerciseId].sets.length <= setIndex) {
      logs[dateKey][exerciseId].sets.push({ weight: 0, reps: 0, completed: false });
    }

    logs[dateKey][exerciseId].sets[setIndex] = {
      weight: parseFloat(weight) || 0,
      reps: parseInt(reps) || 0,
      completed: completed
    };

    this._set(STORAGE_KEYS.WORKOUT_LOGS, logs);
  },

  /**
   * Mark exercise as fully completed
   */
  setExerciseCompleted(dateKey, exerciseId, completed) {
    const logs = this._get(STORAGE_KEYS.WORKOUT_LOGS) || {};
    if (!logs[dateKey]) logs[dateKey] = {};
    if (!logs[dateKey][exerciseId]) {
      logs[dateKey][exerciseId] = { sets: [], completed: false };
    }
    logs[dateKey][exerciseId].completed = completed;
    this._set(STORAGE_KEYS.WORKOUT_LOGS, logs);
  },

  /**
   * Get all exercise logs for a date
   */
  getWorkoutLog(dateKey) {
    const logs = this._get(STORAGE_KEYS.WORKOUT_LOGS) || {};
    return logs[dateKey] || {};
  },

  /**
   * Check if a workout day is completed
   */
  isDayCompleted(dateKey) {
    const logs = this._get(STORAGE_KEYS.WORKOUT_LOGS) || {};
    const dayLog = logs[dateKey];
    if (!dayLog) return false;
    
    const exercises = Object.values(dayLog);
    if (exercises.length === 0) return false;
    return exercises.every(ex => ex.completed);
  },

  /**
   * Mark entire day as completed
   */
  setDayCompleted(dateKey, workout) {
    const logs = this._get(STORAGE_KEYS.WORKOUT_LOGS) || {};
    if (!logs[dateKey]) logs[dateKey] = {};
    logs[dateKey]._completed = true;
    logs[dateKey]._workoutName = workout.name;
    logs[dateKey]._type = workout.type;
    this._set(STORAGE_KEYS.WORKOUT_LOGS, logs);
    this.updateStreak(dateKey);
  },

  /**
   * Check if day has any logged data
   */
  hasDayData(dateKey) {
    const logs = this._get(STORAGE_KEYS.WORKOUT_LOGS) || {};
    return !!logs[dateKey];
  },

  /**
   * Get progress for a specific exercise over time
   * Returns array of { date, maxWeight, totalVolume }
   */
  getExerciseProgress(exerciseId) {
    const logs = this._get(STORAGE_KEYS.WORKOUT_LOGS) || {};
    const progress = [];

    Object.keys(logs).sort().forEach(dateKey => {
      const dayLog = logs[dateKey];
      if (dayLog[exerciseId] && dayLog[exerciseId].sets) {
        const sets = dayLog[exerciseId].sets.filter(s => s.completed);
        if (sets.length > 0) {
          const maxWeight = Math.max(...sets.map(s => s.weight));
          const totalVolume = sets.reduce((sum, s) => sum + (s.weight * s.reps), 0);
          progress.push({
            date: dateKey,
            maxWeight,
            totalVolume,
            sets: sets.length
          });
        }
      }
    });

    return progress;
  },

  /**
   * Get personal records for all exercises
   */
  getPersonalRecords() {
    const logs = this._get(STORAGE_KEYS.WORKOUT_LOGS) || {};
    const prs = {};

    Object.keys(logs).forEach(dateKey => {
      const dayLog = logs[dateKey];
      Object.keys(dayLog).forEach(exId => {
        if (exId.startsWith('_')) return;
        if (!dayLog[exId].sets) return;

        dayLog[exId].sets.forEach(set => {
          if (set.completed && set.weight > 0) {
            if (!prs[exId] || set.weight > prs[exId].weight) {
              prs[exId] = {
                weight: set.weight,
                reps: set.reps,
                date: dateKey
              };
            }
          }
        });
      });
    });

    return prs;
  },

  /**
   * Get last weight used for an exercise
   */
  getLastWeight(exerciseId) {
    const logs = this._get(STORAGE_KEYS.WORKOUT_LOGS) || {};
    const dates = Object.keys(logs).sort().reverse();

    for (const dateKey of dates) {
      const dayLog = logs[dateKey];
      if (dayLog[exerciseId] && dayLog[exerciseId].sets) {
        const lastSet = [...dayLog[exerciseId].sets].reverse().find(s => s.weight > 0);
        if (lastSet) return lastSet.weight;
      }
    }
    return null;
  },

  /**
   * Get workout history (list of completed days)
   */
  getWorkoutHistory(limit = 30) {
    const logs = this._get(STORAGE_KEYS.WORKOUT_LOGS) || {};
    const history = [];

    Object.keys(logs).sort().reverse().forEach(dateKey => {
      if (history.length >= limit) return;
      const dayLog = logs[dateKey];
      if (dayLog._completed) {
        history.push({
          date: dateKey,
          name: dayLog._workoutName || 'Entrenamiento',
          type: dayLog._type || 'strength'
        });
      }
    });

    return history;
  },

  /**
   * Count total workouts
   */
  getTotalWorkouts() {
    return this.getWorkoutHistory(999).length;
  },

  /**
   * Get workouts this week
   */
  getWeekWorkouts() {
    const weekStart = getWeekStart(new Date());
    const history = this.getWorkoutHistory(14);
    return history.filter(h => new Date(h.date) >= weekStart).length;
  },

  /* ---- Running Logs ---- */

  saveRunningLog(entry) {
    const logs = this._get(STORAGE_KEYS.RUNNING_LOGS) || [];
    logs.push({
      id: generateId(),
      date: entry.date || formatDateKey(new Date()),
      distance: parseFloat(entry.distance) || 0,
      time: parseInt(entry.time) || 0,
      feeling: entry.feeling || 'normal',
      notes: entry.notes || ''
    });
    this._set(STORAGE_KEYS.RUNNING_LOGS, logs);
  },

  getRunningLogs(limit = 20) {
    const logs = this._get(STORAGE_KEYS.RUNNING_LOGS) || [];
    return logs.sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);
  },

  getRunningStats() {
    const logs = this._get(STORAGE_KEYS.RUNNING_LOGS) || [];
    if (logs.length === 0) return { totalRuns: 0, totalKm: 0, avgPace: '--:--' };

    const totalKm = logs.reduce((sum, l) => sum + l.distance, 0);
    const totalTime = logs.reduce((sum, l) => sum + l.time, 0);

    return {
      totalRuns: logs.length,
      totalKm: Math.round(totalKm * 10) / 10,
      avgPace: formatPace(totalKm, totalTime)
    };
  },

  /* ---- Streak ---- */

  updateStreak(dateKey) {
    let streak = this._get(STORAGE_KEYS.STREAK) || { current: 0, best: 0, lastDate: null };
    
    if (streak.lastDate) {
      const last = new Date(streak.lastDate);
      const current = new Date(dateKey);
      const diffDays = Math.floor((current - last) / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        streak.current++;
      } else if (diffDays > 1) {
        streak.current = 1;
      }
    } else {
      streak.current = 1;
    }

    if (streak.current > streak.best) {
      streak.best = streak.current;
    }
    
    streak.lastDate = dateKey;
    this._set(STORAGE_KEYS.STREAK, streak);
  },

  getStreak() {
    return this._get(STORAGE_KEYS.STREAK) || { current: 0, best: 0, lastDate: null };
  },

  /* ---- Plan Selection ---- */

  getSelectedPlan() {
    return this._get(STORAGE_KEYS.SELECTED_PLAN) || ACTIVE_PLAN;
  },

  setSelectedPlan(planId) {
    this._set(STORAGE_KEYS.SELECTED_PLAN, planId);
  },

  /* ---- Plan Start Dates ---- */

  getPlanStartDate(planId) {
    const dates = this._get(STORAGE_KEYS.PLAN_START_DATES) || {};
    return dates[planId] || null;
  },

  setPlanStartDate(planId, dateStr) {
    const dates = this._get(STORAGE_KEYS.PLAN_START_DATES) || {};
    dates[planId] = dateStr;
    this._set(STORAGE_KEYS.PLAN_START_DATES, dates);
  },

  getPlanCurrentWeek(planId) {
    const startDateStr = this.getPlanStartDate(planId);
    if (!startDateStr) return 1;
    const plan = WORKOUT_PLANS[planId];
    if (!plan) return 1;
    const start = new Date(startDateStr);
    const now = new Date();
    const week = Math.floor((now - start) / (7 * 24 * 60 * 60 * 1000)) + 1;
    return Math.min(Math.max(week, 1), plan.weeks || 12);
  },

  /* ---- Export / Import ---- */

  exportData() {
    const data = {
      workoutLogs: this._get(STORAGE_KEYS.WORKOUT_LOGS),
      runningLogs: this._get(STORAGE_KEYS.RUNNING_LOGS),
      streak: this._get(STORAGE_KEYS.STREAK),
      exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'iza-workout-backup-' + formatDateKey(new Date()) + '.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast('Backup descargado 📁');
  },

  importData(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (data.workoutLogs) this._set(STORAGE_KEYS.WORKOUT_LOGS, data.workoutLogs);
      if (data.runningLogs) this._set(STORAGE_KEYS.RUNNING_LOGS, data.runningLogs);
      if (data.streak) this._set(STORAGE_KEYS.STREAK, data.streak);
      showToast('Datos importados correctamente ✅');
      return true;
    } catch (e) {
      showToast('Error al importar datos', 'error');
      return false;
    }
  }
};

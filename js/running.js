/* ============================================
   IZA WORKOUT — Running Module
   Additional running-specific features
   ============================================ */

const Running = {
  render() {
    // Running is integrated into Workout (for run days) 
    // and Progress (for stats/history).
    // This module provides standalone running log entry
    const container = document.getElementById('page-running');
    if (!container) return;

    const stats = Storage.getRunningStats();
    const logs = Storage.getRunningLogs(15);

    container.innerHTML = `
      <h1 class="mb-lg" style="font-size: var(--font-2xl); font-weight: 800;">🏃 Carrera</h1>

      <div class="running-stats anim-fade-in mb-xl">
        <div class="stat-card">
          <div class="stat-value">${stats.totalRuns}</div>
          <div class="stat-label">Carreras</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${stats.totalKm}</div>
          <div class="stat-label">KM Total</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${stats.avgPace}</div>
          <div class="stat-label">Ritmo Med.</div>
        </div>
      </div>

      <div class="section-header">
        <h3 class="section-title">Registrar Nueva Carrera</h3>
      </div>

      <div class="running-log-form anim-fade-in-up mb-xl">
        <div class="form-row">
          <div class="form-group" style="flex:1">
            <label class="form-label">Distancia (km)</label>
            <input type="number" class="input" id="standalone-run-distance" placeholder="5.0" step="0.1" min="0">
          </div>
          <div class="form-group" style="flex:1">
            <label class="form-label">Tiempo (min)</label>
            <input type="number" class="input" id="standalone-run-time" placeholder="30" min="0">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">¿Cómo te sentiste?</label>
          <div class="chip-group" id="standalone-feeling-chips">
            <button class="chip active" onclick="Running.selectFeeling(this, 'great')">💪 Genial</button>
            <button class="chip" onclick="Running.selectFeeling(this, 'normal')">👍 Normal</button>
            <button class="chip" onclick="Running.selectFeeling(this, 'hard')">😤 Duro</button>
            <button class="chip" onclick="Running.selectFeeling(this, 'bad')">😵 Mal</button>
          </div>
        </div>
        <button class="btn btn-primary btn-full btn-lg" onclick="Running.saveRun()">
          Guardar Carrera ✓
        </button>
      </div>

      <div class="section-header">
        <h3 class="section-title">Historial</h3>
      </div>

      ${logs.length > 0 ? `
        <div class="running-history anim-fade-in-up">
          ${logs.map(run => {
            const pace = formatPace(run.distance, run.time);
            const feelings = { great: '💪', normal: '👍', hard: '😤', bad: '😵' };
            return `
              <div class="running-history-item">
                <div class="run-icon">🏃</div>
                <div class="run-details">
                  <div class="run-distance">${run.distance} km</div>
                  <div class="run-meta">
                    <span>⏱ ${run.time} min</span>
                    <span>${formatDateReadable(run.date)}</span>
                    <span>${feelings[run.feeling] || '👍'}</span>
                  </div>
                </div>
                <div>
                  <div class="run-pace">${pace}</div>
                  <div class="run-pace-label">min/km</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      ` : `
        <div class="empty-state">
          <div class="empty-state-icon">🏃</div>
          <h3 class="empty-state-title">No hay carreras aún</h3>
          <p class="empty-state-text">Registra tu primera carrera arriba</p>
        </div>
      `}
    `;
  },

  selectedFeeling: 'great',

  selectFeeling(btn, feeling) {
    document.querySelectorAll('#standalone-feeling-chips .chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    this.selectedFeeling = feeling;
    vibrate(20);
  },

  saveRun() {
    const distance = document.getElementById('standalone-run-distance')?.value;
    const time = document.getElementById('standalone-run-time')?.value;

    if (!distance || !time) {
      showToast('Completa distancia y tiempo', 'warning');
      return;
    }

    Storage.saveRunningLog({
      distance: parseFloat(distance),
      time: parseInt(time),
      feeling: this.selectedFeeling
    });

    showToast('¡Carrera registrada! 🏃‍♀️');
    vibrate(100);

    // Clear inputs
    document.getElementById('standalone-run-distance').value = '';
    document.getElementById('standalone-run-time').value = '';

    // Re-render
    setTimeout(() => this.render(), 300);
  }
};

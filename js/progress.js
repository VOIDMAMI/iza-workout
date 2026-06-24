/* ============================================
   IZA WORKOUT — Progress Charts
   Uses Canvas API — no external deps
   ============================================ */

const Progress = {
  activeTab: 'strength',
  selectedExercise: null,

  render() {
    const container = document.getElementById('page-progress');
    if (!container) return;

    container.innerHTML = `
      <h1 class="mb-lg" style="font-size: var(--font-2xl); font-weight: 800;">📊 Tu Progreso</h1>

      <div class="chip-group progress-tabs mb-xl">
        <button class="chip ${this.activeTab === 'strength' ? 'active' : ''}" onclick="Progress.switchTab('strength')">🏋️ Fuerza</button>
        <button class="chip ${this.activeTab === 'running' ? 'active' : ''}" onclick="Progress.switchTab('running')">🏃 Carrera</button>
        <button class="chip ${this.activeTab === 'history' ? 'active' : ''}" onclick="Progress.switchTab('history')">📋 Historial</button>
        <button class="chip ${this.activeTab === 'prs' ? 'active' : ''}" onclick="Progress.switchTab('prs')">🏆 PRs</button>
      </div>

      <div id="progress-content"></div>
    `;

    this.renderTab();
  },

  switchTab(tab) {
    this.activeTab = tab;
    vibrate(20);
    document.querySelectorAll('.progress-tabs .chip').forEach(c => c.classList.remove('active'));
    const chips = document.querySelectorAll('.progress-tabs .chip');
    const tabIndex = ['strength', 'running', 'history', 'prs'].indexOf(tab);
    if (chips[tabIndex]) chips[tabIndex].classList.add('active');
    this.renderTab();
  },

  renderTab() {
    const content = document.getElementById('progress-content');
    if (!content) return;

    switch (this.activeTab) {
      case 'strength': this.renderStrength(content); break;
      case 'running': this.renderRunning(content); break;
      case 'history': this.renderHistory(content); break;
      case 'prs': this.renderPRs(content); break;
    }
  },

  renderStrength(container) {
    const exercises = getAllExercises();

    if (exercises.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📊</div>
          <h3 class="empty-state-title">Sin datos aún</h3>
          <p class="empty-state-text">Completa tu primer entrenamiento para ver tu progreso aquí</p>
        </div>
      `;
      return;
    }

    // Exercise selector
    if (!this.selectedExercise) this.selectedExercise = exercises[0].id;

    const exerciseOptions = exercises.map(ex =>
      `<option value="${ex.id}" ${ex.id === this.selectedExercise ? 'selected' : ''}>${ex.name}</option>`
    ).join('');

    container.innerHTML = `
      <div class="form-group anim-fade-in">
        <label class="form-label">Selecciona ejercicio</label>
        <select class="input" onchange="Progress.selectExercise(this.value)" id="exercise-select">
          ${exerciseOptions}
        </select>
      </div>

      <div class="chart-container anim-fade-in-up">
        <div class="chart-title">Peso Máximo (kg) — Últimas sesiones</div>
        <canvas id="weight-chart" class="chart-canvas"></canvas>
      </div>

      <div class="chart-container anim-fade-in-up mt-lg">
        <div class="chart-title">Volumen Total (kg × reps)</div>
        <canvas id="volume-chart" class="chart-canvas"></canvas>
      </div>
    `;

    // Render charts
    setTimeout(() => {
      this.drawWeightChart();
      this.drawVolumeChart();
    }, 100);
  },

  selectExercise(exerciseId) {
    this.selectedExercise = exerciseId;
    const content = document.getElementById('progress-content');
    this.renderStrength(content);
  },

  drawWeightChart() {
    const canvas = document.getElementById('weight-chart');
    if (!canvas) return;

    const data = Storage.getExerciseProgress(this.selectedExercise);
    this._drawLineChart(canvas, data.map(d => ({
      label: d.date.slice(5), // MM-DD
      value: d.maxWeight
    })), '#E91E8C', '#FF6BB5');
  },

  drawVolumeChart() {
    const canvas = document.getElementById('volume-chart');
    if (!canvas) return;

    const data = Storage.getExerciseProgress(this.selectedExercise);
    this._drawBarChart(canvas, data.map(d => ({
      label: d.date.slice(5),
      value: d.totalVolume
    })), '#7B2FBE', '#9D5BD2');
  },

  _drawLineChart(canvas, data, color, colorLight) {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    const padding = { top: 20, right: 20, bottom: 30, left: 45 };

    ctx.clearRect(0, 0, w, h);

    if (data.length === 0) {
      ctx.fillStyle = '#6B6B80';
      ctx.font = '14px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Sin datos aún', w / 2, h / 2);
      return;
    }

    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;
    const maxVal = Math.max(...data.map(d => d.value)) * 1.1 || 10;
    const minVal = Math.min(...data.map(d => d.value)) * 0.9;
    const range = maxVal - minVal || 1;

    // Grid lines
    ctx.strokeStyle = 'rgba(42, 42, 69, 0.5)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(w - padding.right, y);
      ctx.stroke();

      // Y labels
      const val = maxVal - (range / 4) * i;
      ctx.fillStyle = '#6B6B80';
      ctx.font = '10px Inter, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(Math.round(val), padding.left - 8, y + 4);
    }

    // Data points and line
    const points = data.map((d, i) => ({
      x: padding.left + (data.length === 1 ? chartW / 2 : (chartW / (data.length - 1)) * i),
      y: padding.top + chartH - ((d.value - minVal) / range) * chartH
    }));

    // Gradient fill
    const gradient = ctx.createLinearGradient(0, padding.top, 0, h - padding.bottom);
    gradient.addColorStop(0, color + '40');
    gradient.addColorStop(1, color + '00');

    ctx.beginPath();
    ctx.moveTo(points[0].x, h - padding.bottom);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.lineTo(points[points.length - 1].x, h - padding.bottom);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Line
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    ctx.stroke();

    // Dots
    points.forEach((p, i) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.strokeStyle = '#1A1A2E';
      ctx.lineWidth = 2;
      ctx.stroke();

      // X labels
      ctx.fillStyle = '#6B6B80';
      ctx.font = '9px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(data[i].label, p.x, h - 8);
    });
  },

  _drawBarChart(canvas, data, color, colorLight) {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    const padding = { top: 20, right: 20, bottom: 30, left: 50 };

    ctx.clearRect(0, 0, w, h);

    if (data.length === 0) {
      ctx.fillStyle = '#6B6B80';
      ctx.font = '14px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Sin datos aún', w / 2, h / 2);
      return;
    }

    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;
    const maxVal = Math.max(...data.map(d => d.value)) * 1.2 || 10;

    const barWidth = Math.min(30, (chartW / data.length) * 0.6);
    const gap = (chartW - barWidth * data.length) / (data.length + 1);

    data.forEach((d, i) => {
      const barH = (d.value / maxVal) * chartH;
      const x = padding.left + gap + (barWidth + gap) * i;
      const y = padding.top + chartH - barH;

      // Bar gradient
      const barGrad = ctx.createLinearGradient(x, y, x, y + barH);
      barGrad.addColorStop(0, colorLight);
      barGrad.addColorStop(1, color);

      ctx.fillStyle = barGrad;
      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, barH, [4, 4, 0, 0]);
      ctx.fill();

      // Label
      ctx.fillStyle = '#6B6B80';
      ctx.font = '9px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(d.label, x + barWidth / 2, h - 8);

      // Value on top
      ctx.fillStyle = '#A0A0B8';
      ctx.font = 'bold 9px Inter, sans-serif';
      ctx.fillText(Math.round(d.value), x + barWidth / 2, y - 6);
    });
  },

  renderRunning(container) {
    const stats = Storage.getRunningStats();
    const logs = Storage.getRunningLogs(10);

    container.innerHTML = `
      <div class="running-stats anim-fade-in">
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

      <div class="chart-container anim-fade-in-up">
        <div class="chart-title">Distancia por Sesión (km)</div>
        <canvas id="running-chart" class="chart-canvas"></canvas>
      </div>

      <div class="section-header mt-xl">
        <h3 class="section-title">Últimas Carreras</h3>
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
          <h3 class="empty-state-title">Sin carreras registradas</h3>
          <p class="empty-state-text">Registra tu primera carrera desde el entrenamiento del día</p>
        </div>
      `}
    `;

    if (logs.length > 0) {
      setTimeout(() => {
        this._drawLineChart(
          document.getElementById('running-chart'),
          logs.reverse().map(l => ({ label: l.date.slice(5), value: l.distance })),
          '#40C4FF', '#40C4FF'
        );
      }, 100);
    }
  },

  renderHistory(container) {
    const history = Storage.getWorkoutHistory(30);

    if (history.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📋</div>
          <h3 class="empty-state-title">Sin historial aún</h3>
          <p class="empty-state-text">Completa entrenamientos para ver tu historial aquí</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="stats-row anim-fade-in">
        <div class="stat-card">
          <div class="stat-value">${Storage.getTotalWorkouts()}</div>
          <div class="stat-label">Total</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${Storage.getWeekWorkouts()}</div>
          <div class="stat-label">Esta Semana</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${Storage.getStreak().current}</div>
          <div class="stat-label">Racha</div>
        </div>
      </div>

      <div class="section-header">
        <h3 class="section-title">Historial Reciente</h3>
      </div>

      <div class="history-list anim-fade-in-up">
        ${history.map(h => {
          const icon = h.type === 'running' ? '🏃' : '🏋️';
          return `
            <div class="history-item">
              <div class="flex items-center gap-md">
                <span style="font-size:1.2rem">${icon}</span>
                <div>
                  <div class="history-workout">${h.name}</div>
                  <div class="history-date">${formatDateReadable(h.date)}</div>
                </div>
              </div>
              <span class="badge badge-success">✓</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  renderPRs(container) {
    const prs = Storage.getPersonalRecords();
    const exercises = getAllExercises();

    const prList = exercises
      .filter(ex => prs[ex.id])
      .map((ex, i) => {
        const pr = prs[ex.id];
        const medals = ['🥇', '🥈', '🥉'];
        return {
          exercise: ex.name,
          weight: pr.weight,
          reps: pr.reps,
          date: pr.date,
          medal: medals[i] || '🏅'
        };
      })
      .sort((a, b) => b.weight - a.weight);

    if (prList.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🏆</div>
          <h3 class="empty-state-title">Sin records aún</h3>
          <p class="empty-state-text">Registra pesos en tus entrenamientos para ver tus PRs aquí</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="pr-list">
        ${prList.map((pr, i) => `
          <div class="pr-item anim-fade-in-up anim-delay-${Math.min(i + 1, 8)}">
            <span class="pr-medal">${pr.medal}</span>
            <div class="pr-info">
              <div class="pr-exercise">${pr.exercise}</div>
              <div class="pr-value">${pr.weight} kg × ${pr.reps} reps</div>
            </div>
            <div class="pr-date">${formatDateReadable(pr.date)}</div>
          </div>
        `).join('')}
      </div>
    `;
  }
};

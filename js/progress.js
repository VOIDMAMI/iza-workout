/* ============================================
   IZA WORKOUT — Progress Charts
   Uses Canvas API — no external deps
   ============================================ */

const Progress = {
  activeTab: 'history',
  selectedExercise: null,

  render() {
    const container = document.getElementById('page-progress');
    if (!container) return;

    container.innerHTML = `
      <h1 class="mb-lg" style="font-size: var(--font-2xl); font-weight: 800;">📊 ${I18N.t('progress.page_title')}</h1>

      <div class="chip-group progress-tabs mb-xl">
        <button class="chip ${this.activeTab === 'history' ? 'active' : ''}" onclick="Progress.switchTab('history')">📋 ${I18N.t('progress.tab.history')}</button>
        <button class="chip ${this.activeTab === 'prs' ? 'active' : ''}" onclick="Progress.switchTab('prs')">🏆 ${I18N.t('progress.tab.prs')}</button>
        <button class="chip ${this.activeTab === 'strength' ? 'active' : ''}" onclick="Progress.switchTab('strength')">🏋️ ${I18N.t('progress.tab.strength')}</button>
        <button class="chip ${this.activeTab === 'running' ? 'active' : ''}" onclick="Progress.switchTab('running')">🏃 ${I18N.t('progress.tab.running')}</button>
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
    const tabIndex = ['history', 'prs', 'strength', 'running'].indexOf(tab);
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

  /* ---- FUERZA: ejercicios agrupados por nombre (todos los planes), orden alfabético ---- */

  // Nombre a mostrar: "Hip Thrust | DELOAD" → "Hip Thrust"; "Core | Dead bug" se queda entero
  _strengthName(name) {
    const parts = String(name).split('|');
    if (parts.length > 1 && parts[0].trim().split(/\s+/).length > 1) return parts[0].trim();
    return String(name).trim();
  },

  _strengthKey(name) {
    return String(name).toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, ' ').trim();
  },

  _esc(t) {
    return String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  },

  _parseDecimal(v) {
    return parseFloat(String(v || '').replace(',', '.').trim());
  },

  _fmtKg(n) {
    return String(Math.round(n * 100) / 100).replace('.', ',');
  },

  _strengthCatalog() {
    const groups = new Map();
    const skip = /^(movilidad|activaci[oó]n|estiramiento|calentamiento|paseo|caminar|rodar|rodaje|trote|carrera|descanso|\d)/i;
    const add = (ex) => {
      if (!ex || !ex.id || !ex.name) return;
      const name = this._strengthName(ex.name);
      if (skip.test(name)) return;
      const key = this._strengthKey(name);
      if (!key) return;
      if (!groups.has(key)) groups.set(key, { key, name, ids: new Set() });
      groups.get(key).ids.add(ex.id);
    };
    const visit = (plan, dow, exs) => {
      if (!Array.isArray(exs)) return;
      const type = plan.dayMeta && plan.dayMeta[dow] && plan.dayMeta[dow].type;
      if (type && type !== 'strength') return;
      exs.forEach(add);
    };
    Object.values(WORKOUT_PLANS).forEach(plan => {
      if (!plan) return;
      if (plan.planType === 'phased') {
        (plan.weeklySchedule || []).forEach(week => Object.entries(week || {}).forEach(([d, e]) => visit(plan, d, e)));
      } else {
        Object.entries(plan.schedule || {}).forEach(([d, e]) => visit(plan, d, e));
      }
    });
    if (typeof EXPRESS_WORKOUTS !== 'undefined') {
      Object.values(EXPRESS_WORKOUTS).forEach(w => {
        if (w && (!w.type || w.type === 'strength')) (w.exercises || []).forEach(add);
      });
    }
    Storage.getMyWorkouts().forEach(w => (w.exercises || []).forEach(add));

    return Array.from(groups.values())
      .sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }));
  },

  // Todas las sesiones de un ejercicio (entrenos + registros a mano), más reciente primero
  _strengthEntries(group) {
    const logs = Storage._get(STORAGE_KEYS.WORKOUT_LOGS) || {};
    const entries = [];
    Object.keys(logs).forEach(date => {
      const day = logs[date] || {};
      const sets = [];
      group.ids.forEach(id => {
        if (day[id] && Array.isArray(day[id].sets)) {
          day[id].sets.filter(s => s.completed).forEach(s => sets.push({ weight: s.weight || 0, reps: s.reps || 0 }));
        }
      });
      if (sets.length) entries.push({ date, sets, manual: false });
    });
    Storage.getManualStrengthLogs()
      .filter(l => l.key === group.key)
      .forEach(l => entries.push({ date: l.date, sets: l.sets, manual: true, id: l.id }));
    return entries.sort((a, b) => b.date.localeCompare(a.date));
  },

  renderStrength(container) {
    const catalog = this._strengthCatalog();
    if (catalog.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📊</div>
          <h3 class="empty-state-title">Sin datos aún</h3>
          <p class="empty-state-text">Completa tu primer entrenamiento para ver tu progreso aquí</p>
        </div>
      `;
      return;
    }

    // Por defecto: el último ejercicio que hayas registrado
    let group = catalog.find(g => g.key === this.selectedStrengthKey);
    if (!group) {
      const idToGroup = new Map();
      catalog.forEach(g => g.ids.forEach(id => idToGroup.set(id, g)));
      const logs = Storage._get(STORAGE_KEYS.WORKOUT_LOGS) || {};
      const dates = Object.keys(logs).sort().reverse();
      let foundDate = '';
      for (const d of dates) {
        const id = Object.keys(logs[d] || {}).find(k => idToGroup.has(k) && ((logs[d][k] && logs[d][k].sets) || []).some(s => s.completed));
        if (id) { group = idToGroup.get(id); foundDate = d; break; }
      }
      const manual = Storage.getManualStrengthLogs().slice().sort((a, b) => b.date.localeCompare(a.date))[0];
      if (manual && manual.date >= foundDate) {
        group = catalog.find(g => g.key === manual.key) || group;
      }
      group = group || catalog[0];
      this.selectedStrengthKey = group.key;
    }

    const entries = this._strengthEntries(group);
    const today = formatDateKey(new Date());
    const options = catalog.map(g =>
      `<option value="${g.key}" ${g.key === group.key ? 'selected' : ''}>${this._esc(g.name)}</option>`
    ).join('');

    container.innerHTML = `
      <div class="form-group anim-fade-in">
        <label class="form-label">Selecciona ejercicio</label>
        <select class="input" onchange="Progress.selectExercise(this.value)" id="exercise-select">
          ${options}
        </select>
      </div>

      <button class="btn btn-primary btn-full mb-xl" id="str-add-toggle" onclick="Progress.toggleStrengthForm()">＋ Añadir registro</button>

      <div class="running-log-form anim-fade-in" id="str-add-form" style="display:none">
        <div class="str-form-title">${this._esc(group.name)}</div>
        <div class="form-group">
          <label class="form-label">Fecha</label>
          <input type="date" class="input run-input-date" id="str-add-date" value="${today}" max="${today}">
        </div>
        <div class="form-group">
          <div class="str-set-row str-set-head">
            <span></span><span>Peso (kg)</span><span>Reps</span><span></span>
          </div>
          <div id="str-sets">${this._strengthSetRow(0, '', '')}</div>
          <button class="btn btn-secondary btn-full mt-md" onclick="Progress.addStrengthSet()">＋ Añadir serie</button>
        </div>
        <button class="btn btn-primary btn-full btn-lg" onclick="Progress.saveManualStrength()">Guardar registro ✓</button>
      </div>

      <div class="chart-container anim-fade-in-up">
        <div class="chart-title">Peso Máximo (kg) — Últimas sesiones</div>
        <canvas id="weight-chart" class="chart-canvas"></canvas>
      </div>

      <div class="chart-container anim-fade-in-up mt-lg">
        <div class="chart-title">Volumen Total (kg × reps)</div>
        <canvas id="volume-chart" class="chart-canvas"></canvas>
      </div>

      <div class="section-header mt-xl">
        <h3 class="section-title">Registros</h3>
      </div>
      ${entries.length ? `
        <div class="running-history anim-fade-in-up">
          ${entries.slice(0, 15).map(e => this._renderStrengthItem(e)).join('')}
        </div>
      ` : `
        <div class="empty-state">
          <div class="empty-state-icon">🏋️</div>
          <h3 class="empty-state-title">Sin registros de este ejercicio</h3>
          <p class="empty-state-text">Añade uno con el botón de arriba o marcando las series en tu entrenamiento</p>
        </div>
      `}
    `;

    // Gráficas: una sesión por fecha, de más antigua a más reciente
    const byDate = {};
    entries.forEach(e => {
      const d = byDate[e.date] || (byDate[e.date] = { max: 0, vol: 0 });
      e.sets.forEach(s => { d.max = Math.max(d.max, s.weight); d.vol += s.weight * s.reps; });
    });
    const series = Object.keys(byDate).sort().slice(-15);
    setTimeout(() => {
      const w = document.getElementById('weight-chart');
      const v = document.getElementById('volume-chart');
      if (w) this._drawLineChart(w, series.map(d => ({ label: d.slice(5), value: byDate[d].max })), '#E91E8C', '#FF6BB5');
      if (v) this._drawBarChart(v, series.map(d => ({ label: d.slice(5), value: byDate[d].vol })), '#7B2FBE', '#9D5BD2');
    }, 100);
  },

  _strengthSetRow(i, weight, reps) {
    return `
      <div class="str-set-row" data-set="${i}">
        <span class="str-set-num">${i + 1}</span>
        <input type="text" class="input str-weight" inputmode="decimal" placeholder="Ej: 42,5" value="${this._esc(weight)}" autocomplete="off">
        <input type="text" class="input str-reps" inputmode="numeric" placeholder="10" value="${this._esc(reps)}" autocomplete="off">
        <button class="run-delete str-set-del" onclick="Progress.removeStrengthSet(this)" aria-label="Quitar serie">✕</button>
      </div>
    `;
  },

  _renderStrengthItem(e) {
    const max = Math.max(...e.sets.map(s => s.weight));
    const detail = e.sets.map(s => `${this._fmtKg(s.weight)}×${s.reps}`).join(' · ');
    return `
      <div class="running-history-item">
        <div class="run-icon">${e.manual ? '✍️' : '🏋️'}</div>
        <div class="run-details">
          <div class="run-distance">${e.sets.length} ${e.sets.length === 1 ? 'serie' : 'series'}${e.manual ? ' <span class="run-race-badge">A mano</span>' : ''}</div>
          <div class="run-meta"><span>${formatDateReadable(e.date)}</span></div>
          <div class="run-notes">${detail}</div>
        </div>
        <div>
          <div class="run-pace">${this._fmtKg(max)}</div>
          <div class="run-pace-label">kg máx</div>
          ${e.manual ? `<button class="run-delete" onclick="Progress.deleteManualStrength('${e.id}')" aria-label="Borrar">✕</button>` : ''}
        </div>
      </div>
    `;
  },

  selectExercise(key) {
    this.selectedStrengthKey = key;
    this.renderStrength(document.getElementById('progress-content'));
  },

  toggleStrengthForm() {
    const form = document.getElementById('str-add-form');
    const btn = document.getElementById('str-add-toggle');
    if (!form) return;
    const open = form.style.display === 'none';
    form.style.display = open ? 'block' : 'none';
    if (btn) btn.textContent = open ? 'Cancelar' : '＋ Añadir registro';
  },

  addStrengthSet() {
    const wrap = document.getElementById('str-sets');
    if (!wrap) return;
    const rows = wrap.querySelectorAll('.str-set-row');
    const last = rows[rows.length - 1];
    const w = last ? last.querySelector('.str-weight').value : '';
    const r = last ? last.querySelector('.str-reps').value : '';
    wrap.insertAdjacentHTML('beforeend', this._strengthSetRow(rows.length, w, r));
  },

  removeStrengthSet(btn) {
    const wrap = document.getElementById('str-sets');
    const rows = wrap.querySelectorAll('.str-set-row');
    if (rows.length <= 1) {
      rows[0].querySelector('.str-weight').value = '';
      rows[0].querySelector('.str-reps').value = '';
      return;
    }
    btn.closest('.str-set-row').remove();
    wrap.querySelectorAll('.str-set-row').forEach((row, i) => {
      row.querySelector('.str-set-num').textContent = i + 1;
    });
  },

  saveManualStrength() {
    const group = this._strengthCatalog().find(g => g.key === this.selectedStrengthKey);
    if (!group) return;
    const sets = [];
    let bad = false;
    document.querySelectorAll('#str-sets .str-set-row').forEach(row => {
      const wRaw = row.querySelector('.str-weight').value.trim();
      const rRaw = row.querySelector('.str-reps').value.trim();
      if (!wRaw && !rRaw) return;
      const weight = wRaw ? this._parseDecimal(wRaw) : 0;
      const reps = parseInt(rRaw, 10);
      if (isNaN(weight) || weight < 0 || !reps || reps <= 0) { bad = true; return; }
      sets.push({ weight: Math.round(weight * 100) / 100, reps });
    });
    if (bad || sets.length === 0) {
      showToast('Revisa peso y reps de cada serie', 'warning');
      return;
    }
    const date = document.getElementById('str-add-date')?.value || formatDateKey(new Date());
    Storage.saveManualStrengthLog({ date, key: group.key, name: group.name, sets });
    showToast('¡Registro guardado! 🏋️');
    vibrate(100);
    this.renderStrength(document.getElementById('progress-content'));
  },

  deleteManualStrength(id) {
    if (!confirm('¿Borrar este registro?')) return;
    Storage.deleteManualStrengthLog(id);
    showToast('Registro borrado');
    this.renderStrength(document.getElementById('progress-content'));
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
    const today = formatDateKey(new Date());

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

      <button class="btn btn-primary btn-full mb-xl" id="run-add-toggle" onclick="Progress.toggleRunForm()">＋ Añadir carrera</button>

      <div class="running-log-form anim-fade-in" id="run-add-form" style="display:none">
        <div class="form-group">
          <label class="form-label" for="run-add-date">Fecha</label>
          <input type="date" class="input run-input-date" id="run-add-date" value="${today}" max="${today}">
        </div>
        <div class="form-group">
          <label class="form-label" for="run-add-distance">Distancia (km)</label>
          <input type="text" class="input" id="run-add-distance" placeholder="Ej: 10,62" inputmode="decimal" autocomplete="off">
        </div>
        <div class="form-group">
          <label class="form-label">Tiempo</label>
          <div class="run-time-grid">
            <div class="run-time-field">
              <input type="text" class="input" id="run-add-h" placeholder="0" inputmode="numeric" pattern="[0-9]*" maxlength="1" autocomplete="off">
              <span>horas</span>
            </div>
            <div class="run-time-field">
              <input type="text" class="input" id="run-add-m" placeholder="00" inputmode="numeric" pattern="[0-9]*" maxlength="2" autocomplete="off">
              <span>min</span>
            </div>
            <div class="run-time-field">
              <input type="text" class="input" id="run-add-s" placeholder="00" inputmode="numeric" pattern="[0-9]*" maxlength="2" autocomplete="off">
              <span>seg</span>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">¿Cómo te sentiste?</label>
          <div class="chip-group" id="run-add-feeling">
            <button class="chip active" data-feeling="great" onclick="Progress.selectRunFeeling(this)">💪 Genial</button>
            <button class="chip" data-feeling="normal" onclick="Progress.selectRunFeeling(this)">👍 Normal</button>
            <button class="chip" data-feeling="hard" onclick="Progress.selectRunFeeling(this)">😤 Duro</button>
            <button class="chip" data-feeling="bad" onclick="Progress.selectRunFeeling(this)">😵 Mal</button>
          </div>
        </div>
        <div class="form-group">
          <label class="run-race-check">
            <input type="checkbox" id="run-add-race"> 🏁 Es una competición
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">Notas (opcional)</label>
          <textarea class="input" id="run-add-notes" rows="2" placeholder="Ej: 10K Dubái, FC media 161, cadencia 155"></textarea>
        </div>
        <button class="btn btn-primary btn-full btn-lg" onclick="Progress.saveManualRun()">Guardar carrera ✓</button>
      </div>

      <div class="chart-container anim-fade-in-up">
        <div class="chart-title">Distancia por Sesión (km)</div>
        <canvas id="running-chart" class="chart-canvas"></canvas>
      </div>

      <div class="section-header mt-xl">
        <h3 class="section-title">${I18N.t('progress.last_runs')}</h3>
      </div>

      ${logs.length > 0 ? `
        <div class="running-history anim-fade-in-up">
          ${logs.map(run => this._renderRunItem(run)).join('')}
        </div>
      ` : `
        <div class="empty-state">
          <div class="empty-state-icon">🏃</div>
          <h3 class="empty-state-title">Sin carreras registradas</h3>
          <p class="empty-state-text">Añade una con el botón de arriba o desde el entrenamiento del día</p>
        </div>
      `}
    `;

    if (logs.length > 0) {
      setTimeout(() => {
        this._drawLineChart(
          document.getElementById('running-chart'),
          logs.slice().reverse().map(l => ({ label: l.date.slice(5), value: l.distance })),
          '#40C4FF', '#40C4FF'
        );
      }, 100);
    }
  },

  _formatRunTime(minutes) {
    const total = Math.round((minutes || 0) * 60);
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    const pad = (n) => String(n).padStart(2, '0');
    return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
  },

  _renderRunItem(run) {
    const pace = formatPace(run.distance, run.time);
    const feelings = { great: '💪', normal: '👍', hard: '😤', bad: '😵' };
    const esc = (t) => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    return `
      <div class="running-history-item${run.race ? ' is-race' : ''}">
        <div class="run-icon">${run.race ? '🏁' : '🏃'}</div>
        <div class="run-details">
          <div class="run-distance">${run.distance} km${run.race ? ' <span class="run-race-badge">Competición</span>' : ''}</div>
          <div class="run-meta">
            <span>⏱ ${this._formatRunTime(run.time)}</span>
            <span>${formatDateReadable(run.date)}</span>
            <span>${feelings[run.feeling] || '👍'}</span>
          </div>
          ${run.notes ? `<div class="run-notes">${esc(run.notes)}</div>` : ''}
        </div>
        <div>
          <div class="run-pace">${pace}</div>
          <div class="run-pace-label">min/km</div>
          <button class="run-delete" onclick="Progress.deleteRun('${run.id}')" aria-label="Borrar">✕</button>
        </div>
      </div>
    `;
  },

  toggleRunForm() {
    const form = document.getElementById('run-add-form');
    const btn = document.getElementById('run-add-toggle');
    if (!form) return;
    const open = form.style.display === 'none';
    form.style.display = open ? 'block' : 'none';
    if (btn) btn.textContent = open ? 'Cancelar' : '＋ Añadir carrera';
  },

  selectRunFeeling(btn) {
    document.querySelectorAll('#run-add-feeling .chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    vibrate(20);
  },

  saveManualRun() {
    const val = (id) => document.getElementById(id)?.value;
    const distance = parseFloat(String(val('run-add-distance') || '').trim().replace(',', '.'));
    const h = parseInt(val('run-add-h')) || 0;
    const m = parseInt(val('run-add-m')) || 0;
    const s = parseInt(val('run-add-s')) || 0;
    const minutes = h * 60 + m + s / 60;
    const date = val('run-add-date') || formatDateKey(new Date());

    if (!distance || distance <= 0 || minutes <= 0) {
      showToast('Completa distancia y tiempo', 'warning');
      return;
    }
    if (m > 59 || s > 59) {
      showToast('Minutos y segundos deben ser de 0 a 59', 'warning');
      return;
    }

    const feeling = document.querySelector('#run-add-feeling .chip.active')?.dataset.feeling || 'normal';
    Storage.saveRunningLog({
      date,
      distance,
      time: Math.round(minutes * 100) / 100,
      feeling,
      race: !!document.getElementById('run-add-race')?.checked,
      notes: (val('run-add-notes') || '').trim()
    });

    showToast('¡Carrera guardada! 🏃‍♀️');
    vibrate(100);
    this.renderTab();
  },

  deleteRun(id) {
    if (!confirm('¿Borrar esta carrera?')) return;
    Storage.deleteRunningLog(id);
    showToast('Carrera borrada');
    this.switchTab('running');
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
        <h3 class="section-title">${I18N.t('progress.recent_history')}</h3>
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

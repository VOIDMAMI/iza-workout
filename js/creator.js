/* ============================================
   IZA WORKOUT — Creator (Generador UI)
   Vista #create: formulario de generación + preview + abrir/guardar.
   ============================================ */

const Creator = {
  state: {
    duration: 45,
    type: 'full_body',
    cardio: false,
    preview: null
  },

  render() {
    const container = document.getElementById('page-create');
    if (!container) return;

    const s = this.state;
    const cardioDisabled = s.type === 'hiit';

    const durationChips = Generator.DURATIONS.map(d => `
      <button class="creator-chip ${s.duration === d ? 'active' : ''}" onclick="Creator.setDuration(${d})">${d} min</button>
    `).join('');

    const typeChips = Object.entries(Generator.TYPE_LABELS).map(([key, label]) => `
      <button class="creator-chip ${s.type === key ? 'active' : ''}" onclick="Creator.setType('${key}')">${label}</button>
    `).join('');

    const previewHtml = s.preview ? this._renderPreview(s.preview) : '';

    container.innerHTML = `
      <button class="workout-back" onclick="App.navigate('home')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        Volver
      </button>

      <div class="workout-page-header">
        <h1 class="workout-day-name">✨ Crear entrenamiento</h1>
        <div class="workout-day-info">
          <span class="text-sm text-secondary">Personalizado a tu medida</span>
        </div>
      </div>

      <div class="creator-section">
        <h4 class="creator-label">Duración</h4>
        <div class="creator-chip-group">${durationChips}</div>
      </div>

      <div class="creator-section">
        <h4 class="creator-label">Tipo</h4>
        <div class="creator-chip-group">${typeChips}</div>
      </div>

      <div class="creator-section">
        <label class="creator-toggle ${cardioDisabled ? 'disabled' : ''}">
          <input type="checkbox" id="creator-cardio" ${s.cardio ? 'checked' : ''} ${cardioDisabled ? 'disabled' : ''} onchange="Creator.setCardio(this.checked)">
          <span class="creator-toggle-slider"></span>
          <span class="creator-toggle-label">
            Incluir cardio
            ${cardioDisabled ? '<span class="text-xs text-tertiary"> · HIIT ya es cardio</span>' : '<span class="text-xs text-tertiary"> · 10 min LISS al final</span>'}
          </span>
        </label>
      </div>

      <button class="btn btn-primary btn-full btn-lg mt-lg" onclick="Creator.generate()">
        🎲 Generar entrenamiento
      </button>

      <div id="creator-preview">${previewHtml}</div>
    `;
  },

  setDuration(d) {
    this.state.duration = d;
    vibrate(15);
    this.render();
  },

  setType(t) {
    this.state.type = t;
    if (t === 'hiit') this.state.cardio = false; // HIIT bloquea cardio extra
    vibrate(15);
    this.render();
  },

  setCardio(v) {
    this.state.cardio = !!v;
    vibrate(15);
  },

  generate() {
    const w = Generator.build({
      duration: this.state.duration,
      type: this.state.type,
      cardio: this.state.cardio
    });
    if (!w) {
      showToast('No pude generar el entreno', 'warning');
      return;
    }
    this.state.preview = w;
    vibrate(30);
    this.render();
    // Scroll suave hasta el preview
    setTimeout(() => {
      document.getElementById('creator-preview')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  },

  _renderPreview(w) {
    const items = w.exercises.map(ex => `
      <div class="creator-preview-ex">
        <div class="creator-preview-ex-name">${ex.name}</div>
        <div class="creator-preview-ex-meta">${ex.sets} × ${ex.reps}${ex.rest ? ` · ⏱ ${ex.rest}s` : ''}</div>
      </div>
    `).join('');

    return `
      <div class="creator-preview-card anim-fade-in-up">
        <div class="creator-preview-header">
          <h3 class="creator-preview-title">${w.name}</h3>
          <div class="creator-preview-tags">
            ${w.muscleGroups.map(g => `<span class="badge badge-primary">${g}</span>`).join('')}
          </div>
        </div>
        <div class="creator-preview-list">${items}</div>
        <div class="creator-preview-actions">
          <button class="btn btn-secondary btn-md" onclick="Creator.regenerate()">
            🔄 Regenerar
          </button>
          <button class="btn btn-primary btn-md" onclick="Creator.startNow()">
            ▶ Empezar ahora
          </button>
        </div>
        <button class="btn btn-ghost btn-full btn-sm mt-md" onclick="Creator.saveCurrent()">
          💾 Guardar este entreno
        </button>
      </div>
    `;
  },

  regenerate() {
    this.generate();
  },

  startNow() {
    if (!this.state.preview) return;
    Workout.backPage = 'home';
    App._switchPage('workout');
    Workout.render(this.state.preview, new Date());
  },

  saveCurrent() {
    if (!this.state.preview) return;
    Storage.saveGeneratedWorkout(this.state.preview);
    showToast('Entreno guardado en "Mis entrenos" 💾');
    vibrate(50);
  }
};

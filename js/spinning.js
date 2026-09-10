/* ============================================
   IZA WORKOUT — Spinning
   Entrenos de bici indoor con temporizador de intervalos:
   3 niveles (principiante/medio/pro) x 3 duraciones (15/20/30 min).
   Cada nivel define varias "vueltas" (variantes de bloques ritmo/
   resistencia) que se van alternando hasta rellenar la duración
   elegida, entre un calentamiento y un enfriamiento fijos. Así dos
   vueltas seguidas nunca son idénticas.
   ============================================ */

const SPINNING_DURATIONS = [15, 20, 30];

// resistance: 1 (muy suave) a 10 (máxima) — solo referencia visual/texto.
const SPINNING_LEVELS = [
  {
    id: 'principiante',
    emoji: '🌱',
    name: 'Principiante',
    sub: 'Toma de contacto con la bici',
    laps: [
      [
        { type: 'llano',        label: 'Llano suave',    seconds: 90, rpm: '70-80 rpm', resistance: 3, resistanceLabel: 'Suave' },
        { type: 'subida',       label: 'Subida suave',   seconds: 90, rpm: '60-70 rpm', resistance: 5, resistanceLabel: 'Media' },
        { type: 'recuperacion', label: 'Recuperación',   seconds: 60, rpm: '80-90 rpm', resistance: 2, resistanceLabel: 'Muy suave' },
      ],
      [
        { type: 'llano',        label: 'Llano suave',    seconds: 60,  rpm: '70-80 rpm', resistance: 3, resistanceLabel: 'Suave' },
        { type: 'subida',       label: 'Subida suave',   seconds: 120, rpm: '60-70 rpm', resistance: 5, resistanceLabel: 'Media' },
        { type: 'recuperacion', label: 'Recuperación',   seconds: 90,  rpm: '80-90 rpm', resistance: 2, resistanceLabel: 'Muy suave' },
      ],
      [
        { type: 'llano',        label: 'Llano suave',    seconds: 120, rpm: '70-80 rpm', resistance: 3, resistanceLabel: 'Suave' },
        { type: 'sprint',       label: 'Sprint corto',   seconds: 20,  rpm: '90-100 rpm', resistance: 4, resistanceLabel: 'Media' },
        { type: 'recuperacion', label: 'Recuperación',   seconds: 100, rpm: '80-90 rpm', resistance: 2, resistanceLabel: 'Muy suave' },
      ],
    ]
  },
  {
    id: 'medio',
    emoji: '⚡',
    name: 'Medio',
    sub: 'Sube la intensidad',
    laps: [
      [
        { type: 'llano',        label: 'Llano medio',    seconds: 60, rpm: '80-90 rpm',  resistance: 4, resistanceLabel: 'Media' },
        { type: 'subida',       label: 'Subida fuerte',  seconds: 90, rpm: '60-70 rpm',  resistance: 7, resistanceLabel: 'Fuerte' },
        { type: 'sprint',       label: 'Sprint',         seconds: 30, rpm: '100+ rpm',   resistance: 5, resistanceLabel: 'Media' },
        { type: 'recuperacion', label: 'Recuperación',   seconds: 60, rpm: '80-90 rpm',  resistance: 3, resistanceLabel: 'Suave' },
      ],
      [
        { type: 'llano',        label: 'Llano medio',    seconds: 90, rpm: '80-90 rpm',  resistance: 4, resistanceLabel: 'Media' },
        { type: 'sprint',       label: 'Sprint',         seconds: 20, rpm: '100+ rpm',   resistance: 5, resistanceLabel: 'Media' },
        { type: 'subida',       label: 'Subida fuerte',  seconds: 60, rpm: '60-70 rpm',  resistance: 7, resistanceLabel: 'Fuerte' },
        { type: 'sprint',       label: 'Sprint',         seconds: 20, rpm: '100+ rpm',   resistance: 5, resistanceLabel: 'Media' },
        { type: 'recuperacion', label: 'Recuperación',   seconds: 50, rpm: '80-90 rpm',  resistance: 3, resistanceLabel: 'Suave' },
      ],
      [
        { type: 'subida',       label: 'Subida larga',   seconds: 120, rpm: '60-70 rpm', resistance: 7, resistanceLabel: 'Fuerte' },
        { type: 'llano',        label: 'Llano medio',    seconds: 60,  rpm: '80-90 rpm', resistance: 4, resistanceLabel: 'Media' },
        { type: 'recuperacion', label: 'Recuperación',   seconds: 60,  rpm: '80-90 rpm', resistance: 3, resistanceLabel: 'Suave' },
      ],
      [
        { type: 'sprint',       label: 'Sprint',         seconds: 20, rpm: '100+ rpm',   resistance: 5, resistanceLabel: 'Media' },
        { type: 'recuperacion', label: 'Recuperación',   seconds: 40, rpm: '80-90 rpm',  resistance: 3, resistanceLabel: 'Suave' },
        { type: 'sprint',       label: 'Sprint',         seconds: 20, rpm: '100+ rpm',   resistance: 5, resistanceLabel: 'Media' },
        { type: 'recuperacion', label: 'Recuperación',   seconds: 40, rpm: '80-90 rpm',  resistance: 3, resistanceLabel: 'Suave' },
        { type: 'llano',        label: 'Llano medio',    seconds: 60, rpm: '80-90 rpm',  resistance: 4, resistanceLabel: 'Media' },
        { type: 'recuperacion', label: 'Recuperación',   seconds: 60, rpm: '80-90 rpm',  resistance: 3, resistanceLabel: 'Suave' },
      ],
    ]
  },
  {
    id: 'pro',
    emoji: '🔥',
    name: 'Pro',
    sub: 'Máxima exigencia',
    laps: [
      [
        { type: 'llano',        label: 'Llano rápido',      seconds: 60, rpm: '90-100 rpm', resistance: 5, resistanceLabel: 'Media' },
        { type: 'subida',       label: 'Subida muy fuerte', seconds: 90, rpm: '55-65 rpm',  resistance: 8, resistanceLabel: 'Muy fuerte' },
        { type: 'sprint',       label: 'Sprint máximo',     seconds: 30, rpm: '110+ rpm',   resistance: 6, resistanceLabel: 'Fuerte' },
        { type: 'subida',       label: 'Subida',            seconds: 60, rpm: '60-70 rpm',  resistance: 7, resistanceLabel: 'Fuerte' },
        { type: 'recuperacion', label: 'Recuperación',      seconds: 60, rpm: '85-95 rpm',  resistance: 3, resistanceLabel: 'Suave' },
      ],
      [
        { type: 'sprint',       label: 'Sprint máximo',     seconds: 20, rpm: '110+ rpm',   resistance: 6, resistanceLabel: 'Fuerte' },
        { type: 'recuperacion', label: 'Recuperación',      seconds: 40, rpm: '85-95 rpm',  resistance: 3, resistanceLabel: 'Suave' },
        { type: 'sprint',       label: 'Sprint máximo',     seconds: 20, rpm: '110+ rpm',   resistance: 6, resistanceLabel: 'Fuerte' },
        { type: 'recuperacion', label: 'Recuperación',      seconds: 40, rpm: '85-95 rpm',  resistance: 3, resistanceLabel: 'Suave' },
        { type: 'subida',       label: 'Subida muy fuerte', seconds: 90, rpm: '55-65 rpm',  resistance: 8, resistanceLabel: 'Muy fuerte' },
        { type: 'recuperacion', label: 'Recuperación',      seconds: 60, rpm: '85-95 rpm',  resistance: 3, resistanceLabel: 'Suave' },
      ],
      [
        { type: 'subida',       label: 'Subida montaña',    seconds: 150, rpm: '55-65 rpm', resistance: 9, resistanceLabel: 'Muy fuerte' },
        { type: 'llano',        label: 'Llano rápido',      seconds: 60,  rpm: '90-100 rpm', resistance: 5, resistanceLabel: 'Media' },
        { type: 'recuperacion', label: 'Recuperación',      seconds: 90,  rpm: '85-95 rpm',  resistance: 3, resistanceLabel: 'Suave' },
      ],
      [
        { type: 'llano',        label: 'Llano rápido',      seconds: 40, rpm: '90-100 rpm', resistance: 5, resistanceLabel: 'Media' },
        { type: 'sprint',       label: 'Sprint máximo',     seconds: 20, rpm: '110+ rpm',   resistance: 6, resistanceLabel: 'Fuerte' },
        { type: 'subida',       label: 'Subida muy fuerte', seconds: 60, rpm: '55-65 rpm',  resistance: 8, resistanceLabel: 'Muy fuerte' },
        { type: 'sprint',       label: 'Sprint máximo',     seconds: 20, rpm: '110+ rpm',   resistance: 6, resistanceLabel: 'Fuerte' },
        { type: 'subida',       label: 'Subida muy fuerte', seconds: 60, rpm: '55-65 rpm',  resistance: 8, resistanceLabel: 'Muy fuerte' },
        { type: 'recuperacion', label: 'Recuperación',      seconds: 60, rpm: '85-95 rpm',  resistance: 3, resistanceLabel: 'Suave' },
      ],
    ]
  }
];

const SPINNING_TYPE_META = {
  calentamiento: { emoji: '🌤️', color: '#0EA5E9' },
  llano:         { emoji: '➡️',  color: '#10B981' },
  subida:        { emoji: '⛰️',  color: '#F59E0B' },
  sprint:        { emoji: '🚀', color: '#EF4444' },
  recuperacion:  { emoji: '💧', color: '#8B5CF6' },
  enfriamiento:  { emoji: '🧊', color: '#0EA5E9' },
};

const SPINNING_STORAGE_KEY = 'spinning_session';

// Entrenos reales (no generados) para combinaciones concretas de nivel+duración.
// Clave: `${levelId}_${durationMin}`. Si existe, sustituye por completo a la
// generación automática de vueltas para esa combinación.
const SPINNING_PRESETS = {
  principiante_15: {
    source: '15 Minute Beginner Indoor Cycling Session — GCN Training',
    sourceUrl: 'https://www.youtube.com/watch?v=fQqndzvURAU',
    blocks: [
      { type: 'calentamiento', label: 'Calentamiento muy suave',        seconds: 60,  rpm: '60-70 rpm',  resistance: 1, resistanceLabel: 'Muy suave' },
      { type: 'calentamiento', label: 'Calentamiento — sube un poco',   seconds: 60,  rpm: '70-80 rpm',  resistance: 3, resistanceLabel: 'Suave' },
      { type: 'calentamiento', label: 'Calentamiento — cómodo-fuerte',  seconds: 60,  rpm: '75-85 rpm',  resistance: 5, resistanceLabel: 'Media' },
      { type: 'recuperacion',  label: 'Suave',                          seconds: 60,  rpm: '70-80 rpm',  resistance: 1, resistanceLabel: 'Muy suave' },
      { type: 'subida',        label: 'Cómodo-fuerte',                  seconds: 120, rpm: '65-75 rpm',  resistance: 5, resistanceLabel: 'Media' },
      { type: 'recuperacion',  label: 'Suave',                          seconds: 60,  rpm: '70-80 rpm',  resistance: 1, resistanceLabel: 'Muy suave' },
      { type: 'subida',        label: 'Cómodo-fuerte',                  seconds: 60,  rpm: '65-75 rpm',  resistance: 5, resistanceLabel: 'Media' },
      { type: 'subida',        label: 'Sube el esfuerzo',               seconds: 120, rpm: '65-75 rpm',  resistance: 6, resistanceLabel: 'Media-fuerte' },
      { type: 'recuperacion',  label: 'Suave',                          seconds: 30,  rpm: '70-80 rpm',  resistance: 1, resistanceLabel: 'Muy suave' },
      { type: 'sprint',        label: 'Sprint',                         seconds: 30,  rpm: '100+ rpm',   resistance: 9, resistanceLabel: 'Máxima' },
      { type: 'recuperacion',  label: 'Recuperación',                   seconds: 120, rpm: '70-80 rpm',  resistance: 1, resistanceLabel: 'Muy suave' },
      { type: 'subida',        label: 'Cómodo-fuerte',                  seconds: 60,  rpm: '65-75 rpm',  resistance: 5, resistanceLabel: 'Media' },
      { type: 'enfriamiento',  label: 'Enfriamiento muy suave',         seconds: 60,  rpm: '60-70 rpm',  resistance: 1, resistanceLabel: 'Muy suave' },
    ]
  },
  medio_20: {
    source: 'Quick HIIT Workout | Instant Inferno — GCN Training x Zwift',
    sourceUrl: 'https://www.youtube.com/watch?v=1xuWyHnnPko',
    blocks: [
      // Calentamiento (2:30)
      { type: 'calentamiento', label: 'Calentamiento muy suave',       seconds: 60, rpm: '60-70 rpm', resistance: 1, resistanceLabel: 'Muy suave' },
      { type: 'calentamiento', label: 'Calentamiento — sube un poco',  seconds: 45, rpm: '70-80 rpm', resistance: 2, resistanceLabel: 'Suave' },
      { type: 'calentamiento', label: 'Calentamiento — hasta nivel 4', seconds: 45, rpm: '80-90 rpm', resistance: 4, resistanceLabel: 'Media' },

      // Building the Effort — nivel 3-4 (3 min, 3 intervalos 30s/30s)
      { type: 'subida',       label: 'Sube el ritmo (4/10)', seconds: 30, rpm: '85-95 rpm', resistance: 4, resistanceLabel: 'Media' },
      { type: 'recuperacion', label: 'Suave (3/10)',         seconds: 30, rpm: '75-85 rpm', resistance: 3, resistanceLabel: 'Suave' },
      { type: 'subida',       label: 'Sube el ritmo (4/10)', seconds: 30, rpm: '85-95 rpm', resistance: 4, resistanceLabel: 'Media' },
      { type: 'recuperacion', label: 'Suave (3/10)',         seconds: 30, rpm: '75-85 rpm', resistance: 3, resistanceLabel: 'Suave' },
      { type: 'subida',       label: 'Sube el ritmo (4/10)', seconds: 30, rpm: '85-95 rpm', resistance: 4, resistanceLabel: 'Media' },
      { type: 'recuperacion', label: 'Suave (3/10)',         seconds: 30, rpm: '75-85 rpm', resistance: 3, resistanceLabel: 'Suave' },

      // Ramping Up to Level 5 (3 min, 3 intervalos 30s/30s)
      { type: 'subida',       label: 'Ritmo fuerte (5/10)', seconds: 30, rpm: '90-100 rpm', resistance: 5, resistanceLabel: 'Media' },
      { type: 'recuperacion', label: 'Suave (3/10)',        seconds: 30, rpm: '75-85 rpm',  resistance: 3, resistanceLabel: 'Suave' },
      { type: 'subida',       label: 'Ritmo fuerte (5/10)', seconds: 30, rpm: '90-100 rpm', resistance: 5, resistanceLabel: 'Media' },
      { type: 'recuperacion', label: 'Suave (3/10)',        seconds: 30, rpm: '75-85 rpm',  resistance: 3, resistanceLabel: 'Suave' },
      { type: 'subida',       label: 'Ritmo fuerte (5/10)', seconds: 30, rpm: '90-100 rpm', resistance: 5, resistanceLabel: 'Media' },
      { type: 'recuperacion', label: 'Suave (3/10)',        seconds: 30, rpm: '75-85 rpm',  resistance: 3, resistanceLabel: 'Suave' },

      // Recover & Reset (1 min, respiro antes del tramo fuerte)
      { type: 'recuperacion', label: 'Suave (3/10)',         seconds: 30, rpm: '75-85 rpm', resistance: 3, resistanceLabel: 'Suave' },
      { type: 'recuperacion', label: 'Recuperación (2/10)',  seconds: 30, rpm: '70-80 rpm', resistance: 2, resistanceLabel: 'Muy suave' },

      // Turning Up the Heat — nivel 6 (3 min, 3 intervalos 30s/30s)
      { type: 'subida',       label: 'Sube el calor (6/10)', seconds: 30, rpm: '90-100 rpm', resistance: 6, resistanceLabel: 'Fuerte' },
      { type: 'recuperacion', label: 'Suave (3/10)',         seconds: 30, rpm: '75-85 rpm',  resistance: 3, resistanceLabel: 'Suave' },
      { type: 'subida',       label: 'Sube el calor (6/10)', seconds: 30, rpm: '90-100 rpm', resistance: 6, resistanceLabel: 'Fuerte' },
      { type: 'recuperacion', label: 'Suave (3/10)',         seconds: 30, rpm: '75-85 rpm',  resistance: 3, resistanceLabel: 'Suave' },
      { type: 'subida',       label: 'Sube el calor (6/10)', seconds: 30, rpm: '90-100 rpm', resistance: 6, resistanceLabel: 'Fuerte' },
      { type: 'recuperacion', label: 'Suave (3/10)',         seconds: 30, rpm: '75-85 rpm',  resistance: 3, resistanceLabel: 'Suave' },

      // The Final Third — se recompromete, sube el suelo del descanso (3 min, 3 intervalos 30s/30s)
      { type: 'subida',       label: 'Ritmo fuerte (5/10)', seconds: 30, rpm: '90-100 rpm', resistance: 5, resistanceLabel: 'Media' },
      { type: 'recuperacion', label: 'Suave (4/10)',        seconds: 30, rpm: '80-90 rpm',  resistance: 4, resistanceLabel: 'Media' },
      { type: 'subida',       label: 'Ritmo fuerte (5/10)', seconds: 30, rpm: '90-100 rpm', resistance: 5, resistanceLabel: 'Media' },
      { type: 'recuperacion', label: 'Suave (4/10)',        seconds: 30, rpm: '80-90 rpm',  resistance: 4, resistanceLabel: 'Media' },
      { type: 'subida',       label: 'Ritmo fuerte (5/10)', seconds: 30, rpm: '90-100 rpm', resistance: 5, resistanceLabel: 'Media' },
      { type: 'recuperacion', label: 'Suave (4/10)',        seconds: 30, rpm: '80-90 rpm',  resistance: 4, resistanceLabel: 'Media' },

      // Pushing the Limit — nivel 7-8, tramo final sin descanso completo (2:30)
      { type: 'subida',       label: 'Casi al límite (7/10)', seconds: 30, rpm: '95-105 rpm', resistance: 7, resistanceLabel: 'Muy fuerte' },
      { type: 'recuperacion', label: 'Suave (5/10)',          seconds: 30, rpm: '85-95 rpm',  resistance: 5, resistanceLabel: 'Media' },
      { type: 'sprint',       label: 'Al límite (8/10)',      seconds: 30, rpm: '100+ rpm',   resistance: 8, resistanceLabel: 'Muy fuerte' },
      { type: 'recuperacion', label: 'Suave (5/10)',          seconds: 30, rpm: '85-95 rpm',  resistance: 5, resistanceLabel: 'Media' },
      { type: 'sprint',       label: 'Al límite (8/10) — última',  seconds: 30, rpm: '100+ rpm', resistance: 8, resistanceLabel: 'Muy fuerte' },

      // Enfriamiento (2 min)
      { type: 'enfriamiento', label: 'Enfriamiento — sigue pedaleando', seconds: 60, rpm: '70-80 rpm', resistance: 2, resistanceLabel: 'Suave' },
      { type: 'enfriamiento', label: 'Enfriamiento muy suave',          seconds: 60, rpm: '60-70 rpm', resistance: 1, resistanceLabel: 'Muy suave' },
    ]
  }
};

// Genera la lista de bloques para un nivel + duración, con cumStart precalculado.
function buildSpinningWorkout(levelId, durationMin) {
  const preset = SPINNING_PRESETS[`${levelId}_${durationMin}`];
  if (preset) {
    let pCum = 0;
    const pBlocks = preset.blocks.map(b => {
      const start = pCum;
      pCum += b.seconds;
      return { ...b, start };
    });
    return { levelId, durationMin, blocks: pBlocks, totalSeconds: pCum, source: preset.source, sourceUrl: preset.sourceUrl };
  }

  const level = SPINNING_LEVELS.find(l => l.id === levelId);
  if (!level) return null;

  const totalSeconds = durationMin * 60;
  const warmupSeconds = durationMin <= 15 ? 120 : 180;
  const cooldownSeconds = durationMin >= 30 ? 180 : (durationMin <= 15 ? 120 : 150);
  let mainSeconds = totalSeconds - warmupSeconds - cooldownSeconds;
  if (mainSeconds < 0) mainSeconds = 0;

  const blocks = [
    { type: 'calentamiento', label: 'Calentamiento', seconds: warmupSeconds, rpm: '70-80 rpm', resistance: 2, resistanceLabel: 'Muy suave' }
  ];

  let remaining = mainSeconds;
  let lapIndex = 0;
  while (remaining > 0) {
    const lap = level.laps[lapIndex % level.laps.length];
    lapIndex++;
    for (const b of lap) {
      if (remaining <= 0) break;
      const secs = Math.min(b.seconds, remaining);
      blocks.push({ ...b, seconds: secs });
      remaining -= secs;
    }
  }

  blocks.push({ type: 'enfriamiento', label: 'Enfriamiento', seconds: cooldownSeconds, rpm: '60-70 rpm', resistance: 1, resistanceLabel: 'Muy suave' });

  let cum = 0;
  const withStarts = blocks.map(b => {
    const start = cum;
    cum += b.seconds;
    return { ...b, start };
  });

  return { levelId, durationMin, blocks: withStarts, totalSeconds: cum };
}

const _SPIN_VIBRATE_BLOCK = [250, 100, 250];
const _SPIN_VIBRATE_DONE = [300, 120, 300, 120, 300, 120, 600];

function _fireSpinningNotification(title, body, tag) {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  const options = {
    body,
    icon: './assets/icons/icon-192.png',
    badge: './assets/icons/icon-192.png',
    tag,
    renotify: true,
    silent: false,
    vibrate: _SPIN_VIBRATE_DONE
  };
  if ('serviceWorker' in navigator && navigator.serviceWorker.ready) {
    navigator.serviceWorker.ready
      .then(reg => reg.showNotification(title, options))
      .catch(() => { try { new Notification(title, options); } catch (e) {} });
  } else {
    try { new Notification(title, options); } catch (e) {}
  }
}

const Spinning = {
  selectedLevel: 'principiante',
  selectedDuration: 20,

  workout: null,
  startedAt: null,
  pausedAt: null,
  pausedAccum: 0,
  currentIndex: -1,
  tickInterval: null,
  finished: false,

  render() {
    const container = document.getElementById('page-spinning');
    if (!container) return;

    if (!this.workout) this.resumeIfActive();

    if (this.workout && this.startedAt) {
      this._renderTimerScreen(container);
      this._startTicking();
      return;
    }

    this._renderSetupScreen(container);
  },

  _renderSetupScreen(container) {
    const preview = buildSpinningWorkout(this.selectedLevel, this.selectedDuration);
    const laps = preview.blocks.filter(b => !['calentamiento', 'enfriamiento'].includes(b.type)).length;

    container.innerHTML = `
      <button class="workout-back" onclick="App.navigate('home')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        Volver
      </button>

      <div class="workout-page-header">
        <h1 class="workout-day-name">🚴 Spinning</h1>
        <div class="workout-day-info">
          <span class="text-sm text-secondary">Elige nivel y duración. El temporizador marca ritmo y resistencia.</span>
        </div>
      </div>

      <h3 class="section-title" style="margin-top: var(--space-lg);">Nivel</h3>
      <div class="spinning-level-grid">
        ${SPINNING_LEVELS.map(l => `
          <button class="spinning-level-card ${this.selectedLevel === l.id ? 'active' : ''}" onclick="Spinning.selectLevel('${l.id}')">
            <div class="spinning-level-emoji">${l.emoji}</div>
            <div class="spinning-level-name">${l.name}</div>
            <div class="spinning-level-sub">${l.sub}</div>
          </button>
        `).join('')}
      </div>

      <h3 class="section-title" style="margin-top: var(--space-lg);">Duración</h3>
      <div class="chip-group mb-lg">
        ${SPINNING_DURATIONS.map(d => `
          <button class="chip ${this.selectedDuration === d ? 'active' : ''}" onclick="Spinning.selectDuration(${d})">${d} min</button>
        `).join('')}
      </div>

      <div class="spinning-preview-card">
        <div class="spinning-preview-row">
          <span>🌤️ Calentamiento</span>
          <span>${formatTime(preview.blocks[0].seconds)}</span>
        </div>
        <div class="spinning-preview-row">
          <span>🔁 Bloques de ritmo/resistencia</span>
          <span>${laps}</span>
        </div>
        <div class="spinning-preview-row">
          <span>🧊 Enfriamiento</span>
          <span>${formatTime(preview.blocks[preview.blocks.length - 1].seconds)}</span>
        </div>
        <div class="spinning-preview-row spinning-preview-total">
          <span>Total</span>
          <span>${formatTime(preview.totalSeconds)}</span>
        </div>
        ${preview.source ? `
          <div class="spinning-preview-source">
            🎬 ${preview.sourceUrl ? `<a href="${preview.sourceUrl}" target="_blank" rel="noopener">${preview.source}</a>` : preview.source}
          </div>
        ` : ''}
      </div>

      <button class="btn btn-primary btn-full btn-lg" style="margin-top: var(--space-lg);" onclick="Spinning.start()">
        Empezar entreno
      </button>
    `;
  },

  selectLevel(id) {
    vibrate(20);
    this.selectedLevel = id;
    this.render();
  },

  selectDuration(min) {
    vibrate(20);
    this.selectedDuration = min;
    this.render();
  },

  start() {
    ensureNotificationPermission();
    requestWakeLock();
    this.workout = buildSpinningWorkout(this.selectedLevel, this.selectedDuration);
    this.startedAt = Date.now();
    this.pausedAt = null;
    this.pausedAccum = 0;
    this.currentIndex = -1;
    this.finished = false;
    this._persist();
    this.render();
  },

  pause() {
    if (this.pausedAt || !this.startedAt) return;
    this.pausedAt = Date.now();
    vibrate(20);
    this._persist();
    this._renderTimerScreen(document.getElementById('page-spinning'));
  },

  resume() {
    if (!this.pausedAt) return;
    this.pausedAccum += Date.now() - this.pausedAt;
    this.pausedAt = null;
    vibrate(20);
    this._persist();
    this._renderTimerScreen(document.getElementById('page-spinning'));
    this._startTicking();
  },

  stop() {
    if (!confirm('¿Terminar el entreno de spinning?')) return;
    this._reset();
    App.navigate('home');
  },

  _reset() {
    if (this.tickInterval) { clearInterval(this.tickInterval); this.tickInterval = null; }
    this.workout = null;
    this.startedAt = null;
    this.pausedAt = null;
    this.pausedAccum = 0;
    this.currentIndex = -1;
    this.finished = false;
    releaseWakeLock();
    try { localStorage.removeItem(SPINNING_STORAGE_KEY); } catch (e) {}
  },

  _persist() {
    try {
      localStorage.setItem(SPINNING_STORAGE_KEY, JSON.stringify({
        levelId: this.selectedLevel,
        durationMin: this.selectedDuration,
        startedAt: this.startedAt,
        pausedAt: this.pausedAt,
        pausedAccum: this.pausedAccum
      }));
    } catch (e) {}
  },

  // Llamado al volver a la app / recargar — restaura la sesión si seguía activa.
  resumeIfActive() {
    if (this.workout) return; // ya en memoria
    try {
      const raw = localStorage.getItem(SPINNING_STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (!data.startedAt) return;
      const workout = buildSpinningWorkout(data.levelId, data.durationMin);
      if (!workout) return;

      const pausedAccum = data.pausedAccum || 0;
      const frozenNow = data.pausedAt ? data.pausedAt : Date.now();
      const elapsed = (frozenNow - data.startedAt - pausedAccum) / 1000;
      if (elapsed >= workout.totalSeconds + 10) {
        // Terminó hace rato mientras la app estaba cerrada — descartar.
        try { localStorage.removeItem(SPINNING_STORAGE_KEY); } catch (e) {}
        return;
      }

      this.selectedLevel = data.levelId;
      this.selectedDuration = data.durationMin;
      this.workout = workout;
      this.startedAt = data.startedAt;
      this.pausedAt = data.pausedAt;
      this.pausedAccum = pausedAccum;
      this.currentIndex = -1;
      this.finished = false;

      if (App.currentPage === 'spinning') requestWakeLock();
    } catch (e) {}
  },

  _elapsedSeconds() {
    const now = this.pausedAt || Date.now();
    return Math.max(0, (now - this.startedAt - this.pausedAccum) / 1000);
  },

  _blockAt(elapsed) {
    const blocks = this.workout.blocks;
    for (let i = blocks.length - 1; i >= 0; i--) {
      if (elapsed >= blocks[i].start) return i;
    }
    return 0;
  },

  _startTicking() {
    if (this.tickInterval) clearInterval(this.tickInterval);
    if (this.pausedAt) return; // no ticking mientras está en pausa
    this.tickInterval = setInterval(() => this._tick(), 250);
    this._tick();
  },

  _tick() {
    if (!this.workout || this.pausedAt || this.finished) return;
    const elapsed = this._elapsedSeconds();
    const total = this.workout.totalSeconds;

    if (elapsed >= total) {
      this.finished = true;
      if (this.tickInterval) { clearInterval(this.tickInterval); this.tickInterval = null; }
      vibrate(_SPIN_VIBRATE_DONE);
      _fireSpinningNotification('¡Entreno de spinning completado! 🚴', 'Buen trabajo — estírate y bebe agua.', 'spinning-done');
      releaseWakeLock();
      try { localStorage.removeItem(SPINNING_STORAGE_KEY); } catch (e) {}
      this._renderFinishedScreen(document.getElementById('page-spinning'));
      return;
    }

    const idx = this._blockAt(elapsed);
    if (idx !== this.currentIndex) {
      if (this.currentIndex !== -1) vibrate(_SPIN_VIBRATE_BLOCK);
      this.currentIndex = idx;
    }
    this._updateTimerDOM(elapsed);
  },

  _renderFinishedScreen(container) {
    if (!container) return;
    container.innerHTML = `
      <div class="workout-page-header">
        <h1 class="workout-day-name">🚴 ¡Entreno completado!</h1>
        <div class="workout-day-info">
          <span class="text-sm text-secondary">${this._levelName()} · ${this.workout ? this.workout.durationMin : this.selectedDuration} min</span>
        </div>
      </div>
      <div class="empty-state">
        <div class="empty-state-icon">🏆</div>
        <h3 class="empty-state-title">Buen trabajo</h3>
        <p class="empty-state-text">Estírate y bebe agua antes de bajar de la bici.</p>
      </div>
      <button class="btn btn-primary btn-full btn-lg" onclick="Spinning._reset(); App.navigate('spinning')">Hacer otro entreno</button>
      <button class="btn btn-ghost btn-full" style="margin-top: var(--space-sm);" onclick="Spinning._reset(); App.navigate('home')">Volver al inicio</button>
    `;
    this._reset();
  },

  _levelName() {
    const level = SPINNING_LEVELS.find(l => l.id === this.selectedLevel);
    return level ? `${level.emoji} ${level.name}` : '';
  },

  _renderTimerScreen(container) {
    if (!container || !this.workout) return;
    const elapsed = this._elapsedSeconds();
    const idx = this._blockAt(elapsed);
    this.currentIndex = idx;
    const block = this.workout.blocks[idx];
    const nextBlock = this.workout.blocks[idx + 1];
    const meta = SPINNING_TYPE_META[block.type] || {};

    container.innerHTML = `
      <div class="workout-page-header">
        <h1 class="workout-day-name">🚴 Spinning</h1>
        <div class="workout-day-info">
          <span class="text-sm text-secondary">${this._levelName()} · ${this.workout.durationMin} min</span>
        </div>
        ${this.workout.sourceUrl ? `<a href="${this.workout.sourceUrl}" target="_blank" rel="noopener" class="text-sm" style="color:var(--primary);">🎬 Ver vídeo original</a>` : ''}
      </div>

      <div class="spinning-timer-card" id="spinning-timer-card" style="border-color:${meta.color || 'var(--border-light)'}">
        <div class="spinning-block-label" id="spinning-block-label" style="color:${meta.color || 'inherit'}">${meta.emoji || ''} ${block.label}</div>
        <div class="spinning-block-time" id="spinning-block-time">00:00</div>
        <div class="progress-bar-container">
          <div class="progress-bar-fill" id="spinning-block-progress" style="width:0%; background:${meta.color || 'var(--primary)'}"></div>
        </div>
        <div class="spinning-meta-row">
          <div class="spinning-meta-item">
            <span class="spinning-meta-label">Cadencia</span>
            <span class="spinning-meta-value">${block.rpm}</span>
          </div>
          <div class="spinning-meta-item">
            <span class="spinning-meta-label">Resistencia</span>
            <span class="spinning-meta-value">${block.resistanceLabel} (${block.resistance}/10)</span>
          </div>
        </div>
      </div>

      <div class="spinning-next-row" id="spinning-next-row">
        ${nextBlock ? `Siguiente: ${SPINNING_TYPE_META[nextBlock.type]?.emoji || ''} ${nextBlock.label}` : 'Último bloque'}
      </div>

      <div class="workout-progress-section" style="margin-top: var(--space-lg);">
        <div class="workout-progress-text">
          <span id="spinning-elapsed">00:00</span>
          <span id="spinning-total">${formatTime(this.workout.totalSeconds)}</span>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar-fill" id="spinning-total-progress" style="width:0%"></div>
        </div>
      </div>

      <div class="spinning-controls">
        ${this.pausedAt
          ? `<button class="btn btn-primary btn-full btn-lg" onclick="Spinning.resume()">▶ Reanudar</button>`
          : `<button class="btn btn-secondary btn-full btn-lg" onclick="Spinning.pause()">⏸ Pausa</button>`
        }
        <button class="btn btn-ghost btn-full" onclick="Spinning.stop()">Terminar entreno</button>
      </div>
    `;

    this._updateTimerDOM(elapsed);
  },

  _updateTimerDOM(elapsed) {
    if (!this.workout) return;
    const idx = this.currentIndex;
    const block = this.workout.blocks[idx];
    if (!block) return;

    const blockElapsed = elapsed - block.start;
    const blockRemaining = Math.max(0, block.seconds - blockElapsed);
    const blockPct = block.seconds > 0 ? Math.min(100, (blockElapsed / block.seconds) * 100) : 100;
    const totalPct = Math.min(100, (elapsed / this.workout.totalSeconds) * 100);

    const timeEl = document.getElementById('spinning-block-time');
    if (timeEl) timeEl.textContent = formatTime(Math.ceil(blockRemaining));

    const blockLabelEl = document.getElementById('spinning-block-label');
    const meta = SPINNING_TYPE_META[block.type] || {};
    if (blockLabelEl) blockLabelEl.textContent = `${meta.emoji || ''} ${block.label}`;

    const card = document.getElementById('spinning-timer-card');
    if (card) card.style.borderColor = meta.color || 'var(--border-light)';

    const blockProgress = document.getElementById('spinning-block-progress');
    if (blockProgress) { blockProgress.style.width = blockPct + '%'; blockProgress.style.background = meta.color || 'var(--primary)'; }

    const nextRow = document.getElementById('spinning-next-row');
    const nextBlock = this.workout.blocks[idx + 1];
    if (nextRow) nextRow.textContent = nextBlock ? `Siguiente: ${SPINNING_TYPE_META[nextBlock.type]?.emoji || ''} ${nextBlock.label}` : 'Último bloque';

    const elapsedEl = document.getElementById('spinning-elapsed');
    if (elapsedEl) elapsedEl.textContent = formatTime(Math.floor(elapsed));

    const totalProgress = document.getElementById('spinning-total-progress');
    if (totalProgress) totalProgress.style.width = totalPct + '%';
  }
};

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    Spinning?.resumeIfActive?.();
    if (App?.currentPage === 'spinning') Spinning.render();
  }
});

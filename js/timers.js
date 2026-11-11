/* ============================================
   IZA WORKOUT — Temporizadores personalizados
   Intervalos configurables (estilo Tabata/EMOM) que se guardan con nombre.

   Estructura de un temporizador (todo en segundos salvo rounds/cycles):
     prep       → cuenta atrás inicial
     work/rest  → una ronda = trabajo + descanso
     rounds     → rondas por ciclo (el último descanso de cada ciclo se omite)
     cycles     → repeticiones del bloque de rondas (1 = solo un ciclo)
     cycleRest  → descanso entre ciclos
     cooldown   → enfriamiento final

   Temporizador basado en timestamps absolutos (igual que Spinning) y
   persistido en localStorage para sobrevivir a recargas/background.
   Sin audio (ver comentario en utils.js): solo vibración + notificación.
   ============================================ */

const TIMERS_STORAGE_KEY = 'iza_custom_timers';
const TIMERS_SESSION_KEY = 'iza_timer_session';

Object.assign(I18N_DICT.es, {
  'home.timers.title': 'Temporizadores',
  'home.timers.sub':   'Crea y guarda tus intervalos personalizados',
  'timers.title':      'Temporizadores',
  'timers.intro':      'Crea tus propios intervalos y guárdalos con nombre.',
  'timers.saved':      'Mis temporizadores',
  'timers.none':       'Aún no tienes temporizadores guardados.',
  'timers.new':        'Nuevo temporizador',
  'timers.editor':     'Configuración',
  'timers.name':       'Nombre',
  'timers.name_ph':    'Ej: Tabata piernas',
  'timers.prep':       'Preparación',
  'timers.work':       'Entreno',
  'timers.rest':       'Descanso',
  'timers.rounds':     'Rondas (entreno + descanso)',
  'timers.cycles':     'Ciclos',
  'timers.cycle_rest': 'Descanso entre ciclos',
  'timers.cooldown':   'Enfriamiento',
  'timers.sec':        'seg',
  'timers.total':      'Duración total',
  'timers.start':      'Empezar',
  'timers.save':       'Guardar',
  'timers.saved_toast':'Temporizador guardado ✅',
  'timers.deleted':    'Temporizador eliminado',
  'timers.need_name':  'Ponle un nombre para guardarlo',
  'timers.need_work':  'El tiempo de entreno debe ser mayor que 0',
  'timers.delete_q':   '¿Eliminar este temporizador?',
  'timers.edit':       'Editar',
  'timers.delete':     'Eliminar',
  'timers.done_title': '¡Temporizador completado!',
  'timers.done_text':  'Buen trabajo.',
  'timers.again':      'Repetir',
  'timers.stop_q':     '¿Terminar el temporizador?',
  'timers.pause':      '⏸ Pausa',
  'timers.resume':     '▶ Reanudar',
  'timers.finish':     'Terminar',
  'timers.next':       'Siguiente',
  'timers.last':       'Último tramo',
  'timers.round':      'Ronda',
  'timers.cycle':      'Ciclo',
  'timers.ph.prep':    'Preparación',
  'timers.ph.work':    'Entreno',
  'timers.ph.rest':    'Descanso',
  'timers.ph.cycle_rest': 'Descanso entre ciclos',
  'timers.ph.cooldown':'Enfriamiento',
  'timers.default_name':'Mi temporizador',
  'timers.quick':      'Temporizador rápido',
  'timers.quick_sub':  'Cuenta atrás simple en minutos y segundos',
  'timers.min':        'min',
  'timers.ph.basic':   'Tiempo',
  'timers.need_time':  'Pon un tiempo mayor que 0',
  'timers.open_from_ex':'Temporizador',
  'timers.estimated':  'Tiempo de entreno estimado a {pace}/km — ajústalo si hace falta',
});

Object.assign(I18N_DICT.en, {
  'home.timers.title': 'Timers',
  'home.timers.sub':   'Build and save your own intervals',
  'timers.title':      'Timers',
  'timers.intro':      'Build your own intervals and save them by name.',
  'timers.saved':      'My timers',
  'timers.none':       'You have no saved timers yet.',
  'timers.new':        'New timer',
  'timers.editor':     'Settings',
  'timers.name':       'Name',
  'timers.name_ph':    'E.g. Leg Tabata',
  'timers.prep':       'Get ready',
  'timers.work':       'Work',
  'timers.rest':       'Rest',
  'timers.rounds':     'Rounds (work + rest)',
  'timers.cycles':     'Cycles',
  'timers.cycle_rest': 'Rest between cycles',
  'timers.cooldown':   'Cool-down',
  'timers.sec':        'sec',
  'timers.total':      'Total time',
  'timers.start':      'Start',
  'timers.save':       'Save',
  'timers.saved_toast':'Timer saved ✅',
  'timers.deleted':    'Timer deleted',
  'timers.need_name':  'Give it a name to save it',
  'timers.need_work':  'Work time must be greater than 0',
  'timers.delete_q':   'Delete this timer?',
  'timers.edit':       'Edit',
  'timers.delete':     'Delete',
  'timers.done_title': 'Timer complete!',
  'timers.done_text':  'Great work.',
  'timers.again':      'Repeat',
  'timers.stop_q':     'End the timer?',
  'timers.pause':      '⏸ Pause',
  'timers.resume':     '▶ Resume',
  'timers.finish':     'End',
  'timers.next':       'Next',
  'timers.last':       'Last interval',
  'timers.round':      'Round',
  'timers.cycle':      'Cycle',
  'timers.ph.prep':    'Get ready',
  'timers.ph.work':    'Work',
  'timers.ph.rest':    'Rest',
  'timers.ph.cycle_rest': 'Rest between cycles',
  'timers.ph.cooldown':'Cool-down',
  'timers.default_name':'My timer',
  'timers.quick':      'Quick timer',
  'timers.quick_sub':  'Simple countdown in minutes and seconds',
  'timers.min':        'min',
  'timers.ph.basic':   'Time',
  'timers.need_time':  'Set a time greater than 0',
  'timers.open_from_ex':'Timer',
  'timers.estimated':  'Work time estimated at {pace}/km — adjust it if needed',
});

const TIMER_PHASE_META = {
  prep:       { emoji: '⏳', color: '#D97706' },
  work:       { emoji: '🔥', color: '#DC2626' },
  rest:       { emoji: '😮‍💨', color: '#0284C7' },
  cycle_rest: { emoji: '🧘', color: '#8B5CF6' },
  cooldown:   { emoji: '🧊', color: '#0D9488' }
};

// Campos editables: key, límites (segundos o unidades) y paso de los botones +/−.
const TIMER_FIELDS = [
  { key: 'prep',      label: 'timers.prep',       min: 0, max: 600, step: 5, time: true },
  { key: 'work',      label: 'timers.work',       min: 1, max: 7200, step: 5, time: true },
  { key: 'rest',      label: 'timers.rest',       min: 0, max: 3600, step: 5, time: true },
  { key: 'rounds',    label: 'timers.rounds',     min: 1, max: 99,  step: 1, time: false },
  { key: 'cycles',    label: 'timers.cycles',     min: 1, max: 99,  step: 1, time: false },
  { key: 'cycleRest', label: 'timers.cycle_rest', min: 0, max: 3600, step: 5, time: true },
  { key: 'cooldown',  label: 'timers.cooldown',   min: 0, max: 1800, step: 5, time: true }
];

function _timerDefaults() {
  return { id: null, name: '', prep: 5, work: 20, rest: 10, rounds: 8, cycles: 1, cycleRest: 60, cooldown: 0 };
}

function _timerClean(cfg) {
  const out = { id: cfg.id || null, name: String(cfg.name || '').trim().slice(0, 40) };
  if (cfg.basic) out.basic = true; // temporizador rápido: una sola cuenta atrás
  TIMER_FIELDS.forEach(f => {
    let v = parseInt(cfg[f.key], 10);
    if (isNaN(v)) v = _timerDefaults()[f.key];
    out[f.key] = Math.min(f.max, Math.max(f.min, v));
  });
  return out;
}

// Construye la lista de fases con su inicio acumulado.
function buildTimerPhases(cfg) {
  const c = _timerClean(cfg);
  const phases = [];
  const push = (type, seconds, round, cycle) => {
    if (seconds > 0) phases.push({ type, seconds, round, cycle });
  };

  push('prep', c.prep, 0, 0);
  for (let cy = 1; cy <= c.cycles; cy++) {
    for (let r = 1; r <= c.rounds; r++) {
      push('work', c.work, r, cy);
      if (r < c.rounds) push('rest', c.rest, r, cy);
    }
    if (cy < c.cycles) push('cycle_rest', c.cycleRest, c.rounds, cy);
  }
  push('cooldown', c.cooldown, 0, 0);

  let cum = 0;
  const withStarts = phases.map(p => {
    const start = cum;
    cum += p.seconds;
    return { ...p, start };
  });
  return { phases: withStarts, totalSeconds: cum };
}

const TIMER_WHEEL_ITEM_H = 44; // alto de cada número en las ruedas (debe coincidir con el CSS)
const TIMER_DEFAULT_PACE = 420; // seg/km usados si el ejercicio no indica ritmo
const TIMER_TECH_PACE = 720;    // ejercicios de técnica (skipping...): más lentos

// Convierte un ejercicio de series (carrera, sprints, intervalos de bici...)
// en una config de temporizador. Devuelve null si no se puede deducir.
//  - Reps en tiempo ('30s', '90s al 85%', '1 min') → ese tiempo de entreno.
//  - Reps en distancia ('400m', '1 km') → tiempo según el ritmo de las notas
//    ("cada 400 m en ~2:45", "7:15 /km"); si no hay, se estima a TIMER_DEFAULT_PACE.
// Rondas = series, descanso = descanso del ejercicio.
function timerFromExercise(ex) {
  if (!ex || !(ex.sets >= 2)) return null;
  if (!/sprint|series|intervalo|cuesta|fartlek|t[eé]cnica/i.test(ex.name) || /nataci/i.test(ex.name)) return null;

  const reps = String(ex.reps);
  const notes = String(ex.notes || '');
  let work = null;
  let estimatedPace = null;

  // Descanso: el del ejercicio; si es 0, se busca en las notas
  // ("1 min descanso", "1'-1'30" descanso", "30 seg descanso").
  let rest = ex.rest || 0;
  if (!rest) {
    let r = notes.match(/(\d+)\s*(?:minutos?|min|')[^.]*?descanso/i);
    if (r) rest = parseInt(r[1], 10) * 60;
    else if ((r = notes.match(/(\d+)\s*(?:segundos?|seg|s\b|")\s*(?:de\s+)?descanso/i))) rest = parseInt(r[1], 10);
  }

  let m = reps.match(/(\d+)\s*min/i);
  if (m) work = parseInt(m[1], 10) * 60;
  if (work === null && (m = reps.match(/(\d+)\s*(?:s\b|seg|")/i))) work = parseInt(m[1], 10);

  if (work === null && (m = reps.match(/(\d+(?:[.,]\d+)?)\s*(km|m)(?![a-z])/i))) {
    const km = parseFloat(m[1].replace(',', '.')) / (m[2].toLowerCase() === 'km' ? 1 : 1000);
    let pace = null;
    let t = notes.match(/cada\s+[\d.,]+\s*(?:km|m)\s+en\s+~?(\d+):(\d\d)/i);
    if (t) work = Math.round(parseInt(t[1], 10) * 60 + parseInt(t[2], 10));
    else if ((t = notes.match(/(\d+):(\d\d)(?:\s*-\s*\d+:\d\d)?\s*\/\s*km/i))) pace = parseInt(t[1], 10) * 60 + parseInt(t[2], 10);
    if (work === null) {
      if (pace === null) { pace = /t[eé]cnica/i.test(ex.name) ? TIMER_TECH_PACE : TIMER_DEFAULT_PACE; estimatedPace = pace; }
      work = Math.round(km * pace);
    }
  }

  if (!work || work < 1) return null;
  const cfg = _timerClean({
    name: String(ex.name).replace(/\s*\|\s*/g, ' · ').trim(),
    prep: 5, work, rest, rounds: ex.sets, cycles: 1, cycleRest: 0, cooldown: 0
  });
  if (estimatedPace) cfg._estimatedPace = estimatedPace;
  return cfg;
}

function _timerEsc(s) {
  return String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

const Timers = {
  draft: null,     // configuración en edición
  quick: { m: 1, s: 0 }, // último valor del temporizador rápido
  returnTo: null,  // 'workout' si se abrió desde una tarjeta de ejercicio
  phases: null,    // fases en ejecución
  totalSeconds: 0,
  config: null,    // config en ejecución
  startedAt: null,
  pausedAt: null,
  pausedAccum: 0,
  currentIndex: -1,
  tickInterval: null,
  finished: false,
  _lastBuzzSec: null,

  /* ---------- Persistencia de temporizadores guardados ---------- */
  _loadSaved() {
    try {
      const raw = localStorage.getItem(TIMERS_STORAGE_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr.map(_timerClean) : [];
    } catch (e) { return []; }
  },

  _writeSaved(list) {
    try { localStorage.setItem(TIMERS_STORAGE_KEY, JSON.stringify(list)); } catch (e) {}
  },

  /* ---------- Render ---------- */
  render() {
    const container = document.getElementById('page-timers');
    if (!container) return;

    if (!this.phases) this.resumeIfActive();

    if (this.phases && this.startedAt) {
      if (this.finished) { this._renderFinishedScreen(container); return; }
      this._renderTimerScreen(container);
      this._startTicking();
      return;
    }

    if (this.draft) this._renderEditor(container);
    else this._renderList(container);
  },

  _backBtn(onclick) {
    return `
      <button class="workout-back" onclick="${onclick}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        ${I18N.t('common.back')}
      </button>`;
  },

  _renderList(container) {
    const saved = this._loadSaved();
    container.innerHTML = `
      ${this._backBtn("App.navigate('home')")}

      <div class="workout-page-header">
        <h1 class="workout-day-name">⏱️ ${I18N.t('timers.title')}</h1>
        <div class="workout-day-info">
          <span class="text-sm text-secondary">${I18N.t('timers.intro')}</span>
        </div>
      </div>

      <div class="timer-quick-card">
        <div class="timer-quick-title">⏲️ ${I18N.t('timers.quick')}</div>
        <div class="timer-quick-sub">${I18N.t('timers.quick_sub')}</div>
        <div class="timer-quick-inputs">
          ${this._wheelHtml('min', 120, I18N.t('timers.min'))}
          <span class="timer-quick-colon">:</span>
          ${this._wheelHtml('sec', 59, I18N.t('timers.sec'))}
        </div>
        <div class="chip-group" style="margin: var(--space-sm) 0;">
          ${[[0, 30], [1, 0], [2, 0], [3, 0], [5, 0], [10, 0]].map(([m, s]) =>
            `<button class="chip" onclick="Timers.quickSet(${m}, ${s})">${m ? m + ' min' : s + ' s'}</button>`).join('')}
        </div>
        <button class="btn btn-primary btn-full" onclick="Timers.startQuick()">▶ ${I18N.t('timers.start')}</button>
      </div>

      <button class="btn btn-secondary btn-full btn-lg" style="margin-top: var(--space-lg);" onclick="Timers.newTimer()">
        + ${I18N.t('timers.new')}
      </button>

      <h3 class="section-title" style="margin-top: var(--space-xl);">${I18N.t('timers.saved')}</h3>
      ${saved.length === 0
        ? `<p class="text-sm text-secondary">${I18N.t('timers.none')}</p>`
        : saved.map(t => this._savedCardHtml(t)).join('')}
    `;
    this._initWheels();
  },

  /* ---------- Ruedas (picker táctil) del temporizador rápido ---------- */
  _wheelHtml(kind, max, label) {
    let items = '';
    for (let i = 0; i <= max; i++) {
      items += `<div class="timer-wheel-item" data-v="${i}">${String(i).padStart(2, '0')}</div>`;
    }
    return `
      <div class="timer-wheel-col">
        <div class="timer-wheel-box">
          <div class="timer-wheel" id="timer-wheel-${kind}" role="listbox" aria-label="${label}">${items}</div>
        </div>
        <span>${label}</span>
      </div>`;
  },

  _wheelValue(kind) {
    const el = document.getElementById('timer-wheel-' + kind);
    if (!el) return 0;
    const last = el.children.length - 1;
    return Math.min(last, Math.max(0, Math.round(el.scrollTop / TIMER_WHEEL_ITEM_H)));
  },

  _wheelSet(kind, value, smooth) {
    const el = document.getElementById('timer-wheel-' + kind);
    if (!el) return;
    el.scrollTo({ top: value * TIMER_WHEEL_ITEM_H, behavior: smooth ? 'smooth' : 'auto' });
  },

  _initWheels() {
    ['min', 'sec'].forEach(kind => {
      const el = document.getElementById('timer-wheel-' + kind);
      if (!el) return;
      this._wheelSet(kind, kind === 'min' ? this.quick.m : this.quick.s, false);
      let raf = null, lastSel = -1;
      const mark = () => {
        raf = null;
        const v = this._wheelValue(kind);
        if (v === lastSel) return;
        if (lastSel !== -1) vibrate(5);
        lastSel = v;
        el.querySelector('.selected')?.classList.remove('selected');
        el.children[v]?.classList.add('selected');
      };
      el.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(mark); }, { passive: true });
      // Tocar un número lo centra.
      el.addEventListener('click', e => {
        const item = e.target.closest('.timer-wheel-item');
        if (item) this._wheelSet(kind, parseInt(item.dataset.v, 10), true);
      });
      mark();
    });
  },

  _summary(cfg) {
    const c = _timerClean(cfg);
    const parts = [`${c.work}s / ${c.rest}s`, `${c.rounds}×`];
    if (c.cycles > 1) parts.push(`${c.cycles} ${I18N.t('timers.cycles').toLowerCase()}`);
    return parts.join(' · ');
  },

  _savedCardHtml(t) {
    const total = buildTimerPhases(t).totalSeconds;
    return `
      <div class="timer-saved-card">
        <button class="timer-saved-main" onclick="Timers.startSaved('${t.id}')">
          <div class="timer-saved-name">${_timerEsc(t.name)}</div>
          <div class="timer-saved-sub">${this._summary(t)}</div>
        </button>
        <div class="timer-saved-total">${formatTime(total)}</div>
        <div class="timer-saved-actions">
          <button class="timer-icon-btn" onclick="Timers.edit('${t.id}')" aria-label="${I18N.t('timers.edit')}">✏️</button>
          <button class="timer-icon-btn" onclick="Timers.remove('${t.id}')" aria-label="${I18N.t('timers.delete')}">🗑️</button>
        </div>
      </div>`;
  },

  _renderEditor(container) {
    const d = this.draft;
    container.innerHTML = `
      ${this._backBtn('Timers.closeEditor()')}

      <div class="workout-page-header">
        <h1 class="workout-day-name">⏱️ ${I18N.t('timers.editor')}</h1>
      </div>

      <label class="timer-field-label" for="timer-name">${I18N.t('timers.name')}</label>
      <input class="input" id="timer-name" type="text" maxlength="40"
             placeholder="${I18N.t('timers.name_ph')}" value="${_timerEsc(d.name)}"
             oninput="Timers.draft.name = this.value">

      <div class="timer-fields">
        ${TIMER_FIELDS.map(f => `
          <div class="timer-field">
            <label class="timer-field-label" for="timer-f-${f.key}">${I18N.t(f.label)}</label>
            <div class="timer-stepper">
              <button class="timer-step-btn" onclick="Timers.step('${f.key}', -1)" aria-label="−">−</button>
              <input class="input timer-step-input" id="timer-f-${f.key}" type="number" inputmode="numeric"
                     min="${f.min}" max="${f.max}" value="${d[f.key]}"
                     oninput="Timers.setField('${f.key}', this.value)"
                     onblur="Timers.normalizeField('${f.key}')">
              <button class="timer-step-btn" onclick="Timers.step('${f.key}', 1)" aria-label="+">+</button>
            </div>
            <div class="timer-field-hint" id="timer-hint-${f.key}">${this._hint(f, d[f.key])}</div>
          </div>
        `).join('')}
      </div>

      <div class="spinning-preview-card">
        <div class="spinning-preview-row spinning-preview-total">
          <span>${I18N.t('timers.total')}</span>
          <span id="timer-total">${formatTime(buildTimerPhases(d).totalSeconds)}</span>
        </div>
      </div>

      <button class="btn btn-primary btn-full btn-lg" style="margin-top: var(--space-lg);" onclick="Timers.startDraft()">
        ▶ ${I18N.t('timers.start')}
      </button>
      <button class="btn btn-secondary btn-full" style="margin-top: var(--space-sm);" onclick="Timers.saveDraft()">
        💾 ${I18N.t('timers.save')}
      </button>
    `;
  },

  _hint(f, value) {
    return f.time ? `${formatTime(parseInt(value, 10) || 0)} (${I18N.t('timers.sec')})` : '';
  },

  /* ---------- Edición ---------- */
  newTimer() {
    vibrate(20);
    this.returnTo = null;
    this.draft = _timerDefaults();
    this.render();
  },

  edit(id) {
    const t = this._loadSaved().find(x => x.id === id);
    if (!t) return;
    vibrate(20);
    this.returnTo = null;
    this.draft = { ...t };
    this.render();
  },

  /* ---------- Temporizador rápido (min:seg) ---------- */
  quickSet(m, s) {
    vibrate(10);
    this.quick = { m, s };
    this._wheelSet('min', m, true);
    this._wheelSet('sec', s, true);
  },

  startQuick() {
    const m = this._wheelValue('min');
    const s = this._wheelValue('sec');
    const total = Math.min(7200, m * 60 + s);
    if (total < 1) { showToast(I18N.t('timers.need_time'), 'error'); return; }
    this.quick = { m, s };
    this.returnTo = null;
    this._start({
      basic: true, name: I18N.t('timers.quick'),
      prep: 0, work: total, rest: 0, rounds: 1, cycles: 1, cycleRest: 0, cooldown: 0
    });
  },

  // Enlace directo desde una tarjeta de ejercicio: abre el editor ya relleno.
  openFromExercise(event, exerciseId) {
    if (event) event.stopPropagation();
    const ex = (Workout.currentWorkout?.exercises || []).find(e => e.id === exerciseId);
    const cfg = timerFromExercise(ex);
    if (!cfg) return;
    vibrate(20);
    const pace = cfg._estimatedPace;
    delete cfg._estimatedPace;
    this.draft = cfg;
    this.returnTo = 'workout';
    App.navigate('timers');
    if (pace) showToast(I18N.t('timers.estimated').replace('{pace}', formatTime(pace)), 'info');
  },

  closeEditor() {
    this.draft = null;
    if (this.returnTo === 'workout') {
      this.returnTo = null;
      App._switchPage('workout');
      return;
    }
    this.render();
  },

  _refreshEditorLive(key) {
    const f = TIMER_FIELDS.find(x => x.key === key);
    const hint = document.getElementById('timer-hint-' + key);
    if (hint && f) hint.textContent = this._hint(f, this.draft[key]);
    const total = document.getElementById('timer-total');
    if (total) total.textContent = formatTime(buildTimerPhases(this.draft).totalSeconds);
  },

  setField(key, raw) {
    const f = TIMER_FIELDS.find(x => x.key === key);
    let v = parseInt(raw, 10);
    if (isNaN(v)) v = f.min;
    this.draft[key] = Math.min(f.max, Math.max(f.min, v));
    this._refreshEditorLive(key);
  },

  // Al salir del input, refleja el valor ya acotado.
  normalizeField(key) {
    const input = document.getElementById('timer-f-' + key);
    if (input) input.value = this.draft[key];
  },

  step(key, dir) {
    const f = TIMER_FIELDS.find(x => x.key === key);
    vibrate(10);
    const next = Math.min(f.max, Math.max(f.min, (parseInt(this.draft[key], 10) || 0) + dir * f.step));
    this.draft[key] = next;
    const input = document.getElementById('timer-f-' + key);
    if (input) input.value = next;
    this._refreshEditorLive(key);
  },

  _validDraft() {
    if (!this.draft || this.draft.work < 1) {
      showToast(I18N.t('timers.need_work'), 'error');
      return false;
    }
    return true;
  },

  saveDraft() {
    if (!this._validDraft()) return;
    const cfg = _timerClean(this.draft);
    if (!cfg.name) { showToast(I18N.t('timers.need_name'), 'error'); return; }
    const list = this._loadSaved();
    if (cfg.id) {
      const i = list.findIndex(x => x.id === cfg.id);
      if (i >= 0) list[i] = cfg; else list.push(cfg);
    } else {
      cfg.id = generateId();
      list.push(cfg);
    }
    this._writeSaved(list);
    this.draft = null;
    vibrate(20);
    showToast(I18N.t('timers.saved_toast'));
    this.render();
  },

  remove(id) {
    if (!confirm(I18N.t('timers.delete_q'))) return;
    this._writeSaved(this._loadSaved().filter(x => x.id !== id));
    showToast(I18N.t('timers.deleted'));
    this.render();
  },

  /* ---------- Ejecución ---------- */
  startSaved(id) {
    const t = this._loadSaved().find(x => x.id === id);
    if (t) this._start(t);
  },

  startDraft() {
    if (!this._validDraft()) return;
    this._start(_timerClean(this.draft));
  },

  _start(cfg) {
    const built = buildTimerPhases(cfg);
    if (!built.phases.length) return;
    ensureNotificationPermission();
    requestWakeLock();
    this.config = _timerClean(cfg);
    this.phases = built.phases;
    this.totalSeconds = built.totalSeconds;
    this.startedAt = Date.now();
    this.pausedAt = null;
    this.pausedAccum = 0;
    this.currentIndex = -1;
    this.finished = false;
    this._lastBuzzSec = null;
    this._persist();
    this.render();
  },

  pause() {
    if (this.pausedAt || !this.startedAt) return;
    this.pausedAt = Date.now();
    vibrate(20);
    this._persist();
    this._renderTimerScreen(document.getElementById('page-timers'));
  },

  resume() {
    if (!this.pausedAt) return;
    this.pausedAccum += Date.now() - this.pausedAt;
    this.pausedAt = null;
    vibrate(20);
    this._persist();
    this._renderTimerScreen(document.getElementById('page-timers'));
    this._startTicking();
  },

  stop() {
    if (!confirm(I18N.t('timers.stop_q'))) return;
    this._reset();
    this._exitRun();
  },

  // Tras terminar/cancelar: vuelve al entreno si se abrió desde un ejercicio.
  _exitRun() {
    if (this.returnTo === 'workout') {
      this.returnTo = null;
      this.draft = null;
      App._switchPage('workout');
      return;
    }
    this.render();
  },

  _reset() {
    if (this.tickInterval) { clearInterval(this.tickInterval); this.tickInterval = null; }
    this.phases = null;
    this.config = null;
    this.startedAt = null;
    this.pausedAt = null;
    this.pausedAccum = 0;
    this.currentIndex = -1;
    this.finished = false;
    this._lastBuzzSec = null;
    releaseWakeLock();
    try { localStorage.removeItem(TIMERS_SESSION_KEY); } catch (e) {}
  },

  _persist() {
    try {
      localStorage.setItem(TIMERS_SESSION_KEY, JSON.stringify({
        config: this.config,
        startedAt: this.startedAt,
        pausedAt: this.pausedAt,
        pausedAccum: this.pausedAccum
      }));
    } catch (e) {}
  },

  resumeIfActive() {
    if (this.phases) return;
    try {
      const raw = localStorage.getItem(TIMERS_SESSION_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (!data.startedAt || !data.config) return;
      const built = buildTimerPhases(data.config);
      if (!built.phases.length) return;

      const pausedAccum = data.pausedAccum || 0;
      const frozenNow = data.pausedAt ? data.pausedAt : Date.now();
      const elapsed = (frozenNow - data.startedAt - pausedAccum) / 1000;
      if (elapsed >= built.totalSeconds + 10) {
        localStorage.removeItem(TIMERS_SESSION_KEY);
        return;
      }

      this.config = _timerClean(data.config);
      this.phases = built.phases;
      this.totalSeconds = built.totalSeconds;
      this.startedAt = data.startedAt;
      this.pausedAt = data.pausedAt;
      this.pausedAccum = pausedAccum;
      this.currentIndex = -1;
      this.finished = false;

      if (App.currentPage === 'timers') requestWakeLock();
    } catch (e) {}
  },

  _elapsedSeconds() {
    const now = this.pausedAt || Date.now();
    return Math.max(0, (now - this.startedAt - this.pausedAccum) / 1000);
  },

  _phaseAt(elapsed) {
    for (let i = this.phases.length - 1; i >= 0; i--) {
      if (elapsed >= this.phases[i].start) return i;
    }
    return 0;
  },

  _startTicking() {
    if (this.tickInterval) clearInterval(this.tickInterval);
    if (this.pausedAt || this.finished) return;
    this.tickInterval = setInterval(() => this._tick(), 250);
    this._tick();
  },

  _tick() {
    if (!this.phases || this.pausedAt || this.finished) return;
    const elapsed = this._elapsedSeconds();

    if (elapsed >= this.totalSeconds) {
      this.finished = true;
      if (this.tickInterval) { clearInterval(this.tickInterval); this.tickInterval = null; }
      vibrate(_SPIN_VIBRATE_DONE);
      _fireSpinningNotification(I18N.t('timers.done_title') + ' ⏱️', this.config?.name || I18N.t('timers.done_text'), 'timer-done');
      releaseWakeLock();
      try { localStorage.removeItem(TIMERS_SESSION_KEY); } catch (e) {}
      if (App.currentPage === 'timers') this._renderFinishedScreen(document.getElementById('page-timers'));
      return;
    }

    const idx = this._phaseAt(elapsed);
    if (idx !== this.currentIndex) {
      if (this.currentIndex !== -1) {
        vibrate(_SPIN_VIBRATE_BLOCK);
        const p = this.phases[idx];
        _fireSpinningNotification(`${TIMER_PHASE_META[p.type].emoji} ${this._phaseLabel(p)}`, this._roundText(p), 'timer-phase');
      }
      this.currentIndex = idx;
      this._lastBuzzSec = null;
    }

    // Pulsos cortos en los últimos 3 segundos de cada tramo.
    const ph = this.phases[idx];
    const remaining = Math.ceil(ph.start + ph.seconds - elapsed);
    if (remaining <= 3 && remaining >= 1 && remaining !== this._lastBuzzSec && ph.seconds > 3) {
      this._lastBuzzSec = remaining;
      vibrate(60);
    }

    if (App.currentPage === 'timers') this._updateTimerDOM(elapsed);
  },

  _phaseLabel(p) {
    if (this.config?.basic && p.type === 'work') return I18N.t('timers.ph.basic');
    return I18N.t('timers.ph.' + p.type);
  },

  _roundText(p) {
    const c = this.config;
    if (!c || !p.round || c.basic) return '';
    const parts = [`${I18N.t('timers.round')} ${p.round}/${c.rounds}`];
    if (c.cycles > 1) parts.push(`${I18N.t('timers.cycle')} ${p.cycle}/${c.cycles}`);
    return parts.join(' · ');
  },

  _nextText(idx) {
    const n = this.phases[idx + 1];
    if (!n) return I18N.t('timers.last');
    return `${I18N.t('timers.next')}: ${TIMER_PHASE_META[n.type].emoji} ${this._phaseLabel(n)} (${formatTime(n.seconds)})`;
  },

  _renderFinishedScreen(container) {
    if (!container) return;
    const name = this.config?.name;
    container.innerHTML = `
      <div class="workout-page-header">
        <h1 class="workout-day-name">⏱️ ${I18N.t('timers.done_title')}</h1>
        ${name ? `<div class="workout-day-info"><span class="text-sm text-secondary">${_timerEsc(name)}</span></div>` : ''}
      </div>
      <div class="empty-state">
        <div class="empty-state-icon">🏆</div>
        <h3 class="empty-state-title">${I18N.t('timers.done_text')}</h3>
      </div>
      <button class="btn btn-primary btn-full btn-lg" onclick="Timers.repeat()">↻ ${I18N.t('timers.again')}</button>
      <button class="btn btn-ghost btn-full" style="margin-top: var(--space-sm);" onclick="Timers.closeFinished()">${I18N.t('common.back')}</button>
    `;
  },

  repeat() {
    const cfg = this.config;
    this._reset();
    if (cfg) this._start(cfg);
  },

  closeFinished() {
    this._reset();
    this._exitRun();
  },

  _renderTimerScreen(container) {
    if (!container || !this.phases) return;
    const elapsed = this._elapsedSeconds();
    const idx = this._phaseAt(elapsed);
    this.currentIndex = idx;
    const p = this.phases[idx];
    const meta = TIMER_PHASE_META[p.type];

    container.innerHTML = `
      <div class="workout-page-header">
        <h1 class="workout-day-name">⏱️ ${_timerEsc(this.config?.name || I18N.t('timers.default_name'))}</h1>
      </div>

      <div class="spinning-timer-card" id="timer-card" style="border-color:${meta.color}">
        <div class="spinning-block-label" id="timer-label" style="color:${meta.color}">${meta.emoji} ${this._phaseLabel(p)}</div>
        <div class="spinning-block-time" id="timer-time">00:00</div>
        <div class="progress-bar-container">
          <div class="progress-bar-fill" id="timer-phase-progress" style="width:0%; background:${meta.color}"></div>
        </div>
        <div class="spinning-meta-row" id="timer-rounds-row">${this._roundText(p)}</div>
      </div>

      <div class="spinning-next-row" id="timer-next">${this._nextText(idx)}</div>

      <div class="workout-progress-section" style="margin-top: var(--space-lg);">
        <div class="workout-progress-text">
          <span id="timer-elapsed">00:00</span>
          <span>${formatTime(this.totalSeconds)}</span>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar-fill" id="timer-total-progress" style="width:0%"></div>
        </div>
      </div>

      <div class="spinning-controls">
        ${this.pausedAt
          ? `<button class="btn btn-primary btn-full btn-lg" onclick="Timers.resume()">${I18N.t('timers.resume')}</button>`
          : `<button class="btn btn-secondary btn-full btn-lg" onclick="Timers.pause()">${I18N.t('timers.pause')}</button>`}
        <button class="btn btn-ghost btn-full" onclick="Timers.stop()">${I18N.t('timers.finish')}</button>
      </div>
    `;

    this._updateTimerDOM(elapsed);
  },

  _updateTimerDOM(elapsed) {
    if (!this.phases) return;
    const idx = this.currentIndex;
    const p = this.phases[idx];
    if (!p) return;
    const meta = TIMER_PHASE_META[p.type];

    const remaining = Math.max(0, p.seconds - (elapsed - p.start));
    const phasePct = Math.min(100, ((elapsed - p.start) / p.seconds) * 100);
    const totalPct = Math.min(100, (elapsed / this.totalSeconds) * 100);

    const set = (id, fn) => { const el = document.getElementById(id); if (el) fn(el); };
    set('timer-time', el => el.textContent = formatTime(Math.ceil(remaining)));
    set('timer-label', el => { el.textContent = `${meta.emoji} ${this._phaseLabel(p)}`; el.style.color = meta.color; });
    set('timer-card', el => el.style.borderColor = meta.color);
    set('timer-phase-progress', el => { el.style.width = phasePct + '%'; el.style.background = meta.color; });
    set('timer-rounds-row', el => el.textContent = this._roundText(p));
    set('timer-next', el => el.textContent = this._nextText(idx));
    set('timer-elapsed', el => el.textContent = formatTime(Math.floor(elapsed)));
    set('timer-total-progress', el => el.style.width = totalPct + '%');
  }
};

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    Timers?.resumeIfActive?.();
    if (App?.currentPage === 'timers') Timers.render();
  }
});

/* ============================================
   IZA WORKOUT — i18n (interfaz, ES/EN)
   Fase 1: solo textos de interfaz (nav, botones, cabeceras,
   mensajes del sistema). El contenido de entrenamiento (nombres
   de ejercicio, notas técnicas, tips, planes) sigue en español
   por ahora — se irá migrando poco a poco en fases futuras.
   ============================================ */

const I18N_STORAGE_KEY = 'iza_lang';

const I18N_DICT = {
  es: {
    'nav.home':      'Inicio',
    'nav.workouts':  'Entrenos',
    'nav.calendar':  'Calendario',
    'nav.progress':  'Progreso',
    'nav.aria':      'Navegación principal',

    'common.back':      'Volver',
    'common.back_home': 'Volver al inicio',

    'home.greeting.morning':   'Buenos días',
    'home.greeting.afternoon': 'Buenas tardes',
    'home.greeting.evening':   'Buenas noches',

    'home.warmup.title': 'Calentar',
    'home.warmup.sub':   'Tren inferior · Tren superior · Cardio',
    'home.create.title': 'Crear entrenamiento',
    'home.create.sub':   'Personalizado: duración, tipo, cardio',
    'home.tips.title':   'Tips para tu Rutina',
    'home.tips.sub':     'Programación · Técnica · Constancia',
    'home.spinning.title': 'Spinning',
    'home.spinning.sub':   "15 · 20 · 30 min — Principiante a Pro",
    'home.quick_access': 'Acceso Rápido',
    'home.your_week':    'Tu Semana',

    'plans.page_title':   'Entrenos',
    'plans.my_workouts':  'Mis entrenos',
    'plans.programs':     'Programas',
    'plans.express':      'Entrenos Express',
    'plans.start_date':   'Fecha de inicio',
    'plans.subtitle':     'Tus programas de entrenamiento',
    'plans.express_sub':  'Sesiones sueltas',

    'progress.page_title':      'Tu Progreso',
    'progress.tab.history':     'Historial',
    'progress.tab.prs':         'PRs',
    'progress.tab.strength':    'Fuerza',
    'progress.tab.running':     'Carrera',
    'progress.last_runs':       'Últimas Carreras',
    'progress.recent_history':  'Historial Reciente',

    'running.page_title':     'Carrera',
    'running.register_new':   'Registrar Nueva Carrera',
    'running.history':        'Historial',

    'workout.register_run': 'Registrar Carrera',
    'workout.search_exercise': 'Buscar ejercicio',
    'workout.swap':             'Cambiar',
    'workout.notes':            'Notas',
    'workout.rest':             '⏱ Descanso',
    'workout.observations':     '📝 Observaciones',
    'common.start':  'Empezar',
    'common.delete': 'Eliminar',

    'warmup.pick_title': 'Elige calentamiento',
    'warmup.pick_sub':   'Estiramientos dinámicos + activación',
    'warmup.lower.name': 'Tren inferior',
    'warmup.lower.sub':  'Hip thrust, sentadilla, peso muerto',
    'warmup.upper.name': 'Tren superior',
    'warmup.upper.sub':  'Press, dominadas, remo, jalón',
    'warmup.cardio.name': 'Cardio / Carrera',
    'warmup.cardio.sub':  'Drills + movilidad + strides',
    'common.close': 'Cerrar',

    'lang.toggle_label': 'Idioma',
  },
  en: {
    'nav.home':      'Home',
    'nav.workouts':  'Workouts',
    'nav.calendar':  'Calendar',
    'nav.progress':  'Progress',
    'nav.aria':      'Main navigation',

    'common.back':      'Back',
    'common.back_home': 'Back to home',

    'home.greeting.morning':   'Good morning',
    'home.greeting.afternoon': 'Good afternoon',
    'home.greeting.evening':   'Good evening',

    'home.warmup.title': 'Warm up',
    'home.warmup.sub':   'Lower body · Upper body · Cardio',
    'home.create.title': 'Create workout',
    'home.create.sub':   'Custom: duration, type, cardio',
    'home.tips.title':   'Tips for your Routine',
    'home.tips.sub':     'Programming · Technique · Consistency',
    'home.spinning.title': 'Spinning',
    'home.spinning.sub':   '15 · 20 · 30 min — Beginner to Pro',
    'home.quick_access': 'Quick Access',
    'home.your_week':    'Your Week',

    'plans.page_title':   'Workouts',
    'plans.my_workouts':  'My workouts',
    'plans.programs':     'Programs',
    'plans.express':      'Express Workouts',
    'plans.start_date':   'Start date',
    'plans.subtitle':     'Your training programs',
    'plans.express_sub':  'Single sessions',

    'progress.page_title':      'Your Progress',
    'progress.tab.history':     'History',
    'progress.tab.prs':         'PRs',
    'progress.tab.strength':    'Strength',
    'progress.tab.running':     'Running',
    'progress.last_runs':       'Last Runs',
    'progress.recent_history':  'Recent History',

    'running.page_title':     'Running',
    'running.register_new':   'Register New Run',
    'running.history':        'History',

    'workout.register_run': 'Register Run',
    'workout.search_exercise': 'Search exercise',
    'workout.swap':             'Swap',
    'workout.notes':            'Notes',
    'workout.rest':             '⏱ Rest',
    'workout.observations':     '📝 Notes',
    'common.start':  'Start',
    'common.delete': 'Delete',

    'warmup.pick_title': 'Choose warm-up',
    'warmup.pick_sub':   'Dynamic stretching + activation',
    'warmup.lower.name': 'Lower body',
    'warmup.lower.sub':  'Hip thrust, squat, deadlift',
    'warmup.upper.name': 'Upper body',
    'warmup.upper.sub':  'Press, pull-ups, row, lat pulldown',
    'warmup.cardio.name': 'Cardio / Running',
    'warmup.cardio.sub':  'Drills + mobility + strides',
    'common.close': 'Close',

    'lang.toggle_label': 'Language',
  }
};

const I18N = {
  lang: 'es',

  init() {
    try {
      const stored = localStorage.getItem(I18N_STORAGE_KEY);
      this.lang = (stored === 'en' || stored === 'es') ? stored : 'es';
    } catch (e) {
      this.lang = 'es';
    }
    document.documentElement.lang = this.lang;
  },

  // Traduce una clave. Si falta en el idioma activo, cae a español;
  // si tampoco existe ahí, devuelve la propia clave (visible = fácil de detectar).
  t(key) {
    return (I18N_DICT[this.lang] && I18N_DICT[this.lang][key])
      || I18N_DICT.es[key]
      || key;
  },

  // Traducciones de contenido (nombres/descripciones de planes y entrenos
  // express) — ver js/i18n-content.js. Si el id no tiene traducción EN
  // todavía, cae automáticamente al texto original en español.
  _content(bucket, id, field, fallback) {
    if (this.lang !== 'en') return fallback;
    const entry = typeof I18N_CONTENT_EN !== 'undefined' && I18N_CONTENT_EN[bucket] && I18N_CONTENT_EN[bucket][id];
    return (entry && entry[field]) || fallback;
  },
  planName(plan)  { return plan ? this._content('plans', plan.id, 'name', plan.name) : ''; },
  planDesc(plan)  { return plan ? this._content('plans', plan.id, 'description', plan.description) : ''; },
  expressName(w)  { return w ? this._content('express', w.id, 'name', w.name) : ''; },
  expressDesc(w)  { return w ? this._content('express', w.id, 'description', w.description) : ''; },
  // Para un workout "del día" que puede venir de WORKOUT_PLANS (planes con
  // un solo día, como calentamientos) o de EXPRESS_WORKOUTS. Si no hay
  // traducción en ninguno de los dos diccionarios (caso normal: día concreto
  // de un plan semanal, ej. "Semana 3 · Piernas"), cae al nombre original.
  workoutName(w) {
    if (!w) return '';
    if (this.lang !== 'en') return w.name;
    return this._content('plans', w.id, 'name', null)
      || this._content('express', w.id, 'name', null)
      || w.name;
  },
  categoryName(cat) { return cat ? this._content('expressCategories', cat.id, 'name', cat.name) : ''; },
  progCategoryName(cat) { return cat ? this._content('programCategories', cat.id, 'name', cat.name) : ''; },

  setLang(lang) {
    if (lang !== 'es' && lang !== 'en') return;
    if (lang === this.lang) return;
    this.lang = lang;
    try { localStorage.setItem(I18N_STORAGE_KEY, lang); } catch (e) {}
    document.documentElement.lang = lang;
    vibrate(20);
    this.applyStaticNav();
    // Re-renderiza la página actual para que recoja las cadenas traducidas.
    if (typeof App !== 'undefined' && App.currentPage) {
      App.navigate(App.currentPage, false);
    }
  },

  // Aplica las traducciones a elementos estáticos del index.html
  // (la barra de navegación inferior no se vuelve a renderizar por JS).
  applyStaticNav() {
    const navMap = {
      'nav-home':     'nav.home',
      'nav-entrenos': 'nav.workouts',
      'nav-calendar': 'nav.calendar',
      'nav-progress': 'nav.progress',
    };
    Object.entries(navMap).forEach(([id, key]) => {
      const btn = document.getElementById(id);
      if (!btn) return;
      const span = btn.querySelector('span');
      if (span) span.textContent = this.t(key);
      btn.setAttribute('aria-label', this.t(key));
    });
    const navBottom = document.getElementById('nav-bottom');
    if (navBottom) navBottom.setAttribute('aria-label', this.t('nav.aria'));
  }
};

I18N.init();
// Los <script> están al final del <body>, así que el DOM (incluida la nav
// inferior) ya existe en este punto — podemos aplicar el idioma guardado ya.
document.addEventListener('DOMContentLoaded', () => I18N.applyStaticNav());
if (document.readyState !== 'loading') I18N.applyStaticNav();

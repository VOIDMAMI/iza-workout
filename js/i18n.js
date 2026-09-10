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

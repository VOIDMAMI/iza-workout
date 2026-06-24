/* ============================================
   IZA WORKOUT — Workout Generator
   Genera entrenos efímeros según duración + tipo + cardio.
   Pools curados según las guías (multi antes que analítico,
   dominantes de cadera para glúteo, etc.).
   ============================================ */

/* Helper: ejercicio como los del tracker (sin _ex global porque aquí
   queremos IDs únicos por sesión). */
function _gen(name, sets, reps, rest, notes) {
  // ID único basado en nombre + timestamp para no colisionar con WORKOUT_PLANS
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '').slice(0, 30);
  return {
    id: 'gen_' + slug + '_' + Math.random().toString(36).slice(2, 6),
    name,
    sets,
    reps: String(reps),
    // Descanso base de 60s entre series para todos los entrenos generados.
    rest: 60,
    notes: notes || ''
  };
}

/* ====================
   POOLS por tipo de entreno (basado en las guías)
   ==================== */

const _POOLS = {
  /* TREN INFERIOR — multi compuestos primero, luego cadena posterior, luego
     analíticos / unilaterales / glúteo medio / core inf */
  lower_compound: [
    'Sentadilla libre | barra alta',
    'Sentadilla goblet con mancuerna',
    'Sentadilla en prensa (45°)',
    'Hack squat',
    'Hip thrust con barra',
    'Peso muerto rumano con barra'
  ],
  lower_posterior: [
    'Peso muerto rumano con mancuernas',
    'Peso muerto rumano unilateral con mancuernas',
    'Hip thrust a una pierna',
    'Pull through en polea',
    'Kettlebell swing',
    'Hiperextensiones (back extension)'
  ],
  lower_unilateral: [
    'Sentadilla búlgara',
    'Zancada caminando con mancuernas',
    'Step up con mancuernas',
    'Sentadilla en polea baja para cuádriceps'
  ],
  lower_iso: [
    'Extensión de cuádriceps en máquina',
    'Curl de femoral con fitball',
    'Curl femoral tumbado',
    'Sissy squat'
  ],
  lower_abductor: [
    'Patada de glúteo en polea',
    'Abductor en máquina',
    'Monster walk con banda',
    'Clamshell con banda'
  ],
  calves: [
    'Elevación de talones de pie',
    'Elevación de talones sentado',
    'Elevación de talones en prensa'
  ],

  /* TREN SUPERIOR — push horizontal, push vertical, pull, hombros, brazos */
  push_horizontal: [
    'Press de banca con barra',
    'Press de banca con mancuernas',
    'Press inclinado con mancuernas',
    'Flexiones de pecho',
    'Aperturas con mancuernas'
  ],
  push_vertical: [
    'Press militar con barra',
    'Press militar con mancuernas',
    'Press Arnold',
    'Landmine press'
  ],
  pull_vertical: [
    'Dominadas',
    'Dominadas asistidas con banda',
    'Jalón al pecho en polea',
    'Jalón con agarre neutro'
  ],
  pull_horizontal: [
    'Remo con barra a 90°',
    'Remo con mancuerna a una mano',
    'Remo en polea baja sentado',
    'Australian pull ups (remo invertido)'
  ],
  shoulder_iso: [
    'Elevaciones laterales con mancuernas',
    'Elevaciones laterales en polea',
    'Pájaros (rear delt) con mancuernas',
    'Facepull en polea'
  ],
  triceps: [
    'Fondos en paralelas',
    'Fondos de tríceps en banco',
    'Press francés con barra Z',
    'Extensión de tríceps en polea (cuerda)'
  ],
  biceps: [
    'Curl con barra',
    'Curl con mancuernas alterno',
    'Curl martillo',
    'Curl predicador (Scott)'
  ],

  /* CORE / ABS */
  core_compound: [
    'Plancha frontal',
    'Plancha lateral',
    'Hollow body hold',
    'Dead bug'
  ],
  core_dynamic: [
    'Crunch en suelo',
    'Elevación de piernas colgado',
    'Bird dog',
    'Pallof press en polea',
    'Mountain climbers',
    'Russian twist'
  ],

  /* HIIT — ejercicios pliométricos / cardio explosivo */
  hiit: [
    'Burpees',
    'Jumping jacks',
    'Skipping alto',
    'Mountain climbers',
    'Saltos al cajón',
    'Sentadilla con salto',
    'Sprint en sitio',
    'Flexiones explosivas',
    'Zancadas con salto'
  ]
};

/* ====================
   Selector con semilla controlada
   ==================== */

// Saca `n` elementos únicos de un array, aleatorizados
function _pickN(arr, n) {
  const copy = arr.slice();
  const out = [];
  for (let i = 0; i < n && copy.length > 0; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    out.push(copy.splice(idx, 1)[0]);
  }
  return out;
}

/* ====================
   Recetas estructurales por (tipo × duración)
   Devuelven una lista de "slots", cada slot describe qué pool usar y
   los parámetros de series/reps/descanso (basados en guías).
   ==================== */

// Densidad: 30=5-6, 45=6-7, 60=7-9
const _DENSITY = { 30: 5, 45: 6, 60: 8 };

function _recipeFullBody(slots) {
  // Estructura: 1 multi pierna + 1 multi push + 1 multi pull + 1-2 accesorios + core
  const out = [];
  out.push({ pool: 'lower_compound', sets: 4, reps: '8-10', rest: 90 });
  out.push({ pool: 'push_horizontal', sets: 4, reps: '8-10', rest: 90 });
  out.push({ pool: 'pull_horizontal', sets: 3, reps: '10', rest: 75 });
  if (slots >= 6) out.push({ pool: 'lower_posterior', sets: 3, reps: '10', rest: 75 });
  if (slots >= 7) out.push({ pool: 'shoulder_iso', sets: 3, reps: '12', rest: 60 });
  if (slots >= 8) out.push({ pool: 'biceps', sets: 3, reps: '10-12', rest: 60 });
  out.push({ pool: 'core_compound', sets: 3, reps: '30s', rest: 45 });
  return out.slice(0, slots);
}

function _recipeLower(slots) {
  // Multi pesado + cadena posterior + unilateral + iso + glúteo medio + core
  const out = [];
  out.push({ pool: 'lower_compound', sets: 4, reps: '6-8', rest: 120, notes: 'Series efectivas. RIR 2-3.' });
  out.push({ pool: 'lower_posterior', sets: 4, reps: '8-10', rest: 90 });
  out.push({ pool: 'lower_unilateral', sets: 3, reps: '10/lado', rest: 75 });
  if (slots >= 5) out.push({ pool: 'lower_iso', sets: 3, reps: '12', rest: 60 });
  if (slots >= 6) out.push({ pool: 'lower_abductor', sets: 3, reps: '15', rest: 45 });
  if (slots >= 7) out.push({ pool: 'calves', sets: 4, reps: '12', rest: 45 });
  if (slots >= 8) out.push({ pool: 'core_compound', sets: 3, reps: '30s', rest: 45 });
  return out.slice(0, slots);
}

function _recipeUpper(slots) {
  // Push horizontal + pull vertical + push vertical + pull horizontal + hombro iso + brazos
  const out = [];
  out.push({ pool: 'push_horizontal', sets: 4, reps: '6-8', rest: 90 });
  out.push({ pool: 'pull_vertical', sets: 4, reps: '8', rest: 90 });
  out.push({ pool: 'push_vertical', sets: 3, reps: '8-10', rest: 75 });
  out.push({ pool: 'pull_horizontal', sets: 3, reps: '10', rest: 75 });
  if (slots >= 5) out.push({ pool: 'shoulder_iso', sets: 3, reps: '12-15', rest: 60 });
  if (slots >= 6) out.push({ pool: 'triceps', sets: 3, reps: '10-12', rest: 60 });
  if (slots >= 7) out.push({ pool: 'biceps', sets: 3, reps: '10-12', rest: 60 });
  if (slots >= 8) out.push({ pool: 'core_compound', sets: 3, reps: '30s', rest: 45 });
  return out.slice(0, slots);
}

function _recipeAbs(slots) {
  // Core: mezcla isométricos + dinámicos
  const out = [];
  out.push({ pool: 'core_compound', sets: 3, reps: '40s', rest: 45 });
  out.push({ pool: 'core_dynamic', sets: 3, reps: '15', rest: 45 });
  out.push({ pool: 'core_dynamic', sets: 3, reps: '12', rest: 45 });
  out.push({ pool: 'core_compound', sets: 3, reps: '30s/lado', rest: 45 });
  if (slots >= 5) out.push({ pool: 'core_dynamic', sets: 3, reps: '20', rest: 45 });
  if (slots >= 6) out.push({ pool: 'core_dynamic', sets: 3, reps: '12', rest: 45 });
  if (slots >= 7) out.push({ pool: 'core_compound', sets: 3, reps: '30s', rest: 45 });
  return out.slice(0, slots);
}

function _recipeHIIT(slots) {
  // Circuito: 30s trabajo / 30s descanso, varias rondas
  const rounds = slots >= 8 ? 5 : slots >= 6 ? 4 : 3;
  const exCount = Math.min(slots, 6);
  const out = [];
  for (let i = 0; i < exCount; i++) {
    out.push({ pool: 'hiit', sets: rounds, reps: '30s', rest: 30, notes: `Ronda completa: ${rounds} vueltas. 30" trabajo / 30" descanso.` });
  }
  return out;
}

const _RECIPES = {
  full_body: _recipeFullBody,
  lower: _recipeLower,
  upper: _recipeUpper,
  abs: _recipeAbs,
  hiit: _recipeHIIT
};

const _TYPE_LABELS = {
  full_body: 'Full body',
  lower: 'Tren inferior',
  upper: 'Tren superior',
  abs: 'Abs / Core',
  hiit: 'HIIT'
};

const _MUSCLE_GROUPS = {
  full_body: ['Full body'],
  lower: ['Cuádriceps', 'Glúteos', 'Isquiotibiales'],
  upper: ['Pecho', 'Espalda', 'Hombros', 'Brazos'],
  abs: ['Core'],
  hiit: ['Cardio', 'Full body']
};

/* ====================
   API pública
   ==================== */

const Generator = {
  /**
   * Genera un workout efímero.
   * @param {Object} opts
   * @param {30|45|60} opts.duration - minutos
   * @param {'full_body'|'lower'|'upper'|'abs'|'hiit'} opts.type
   * @param {boolean} opts.cardio - añadir bloque cardio LISS al final (no aplica a HIIT)
   * @returns {Object} workout con forma { name, type, muscleGroups, exercises }
   */
  build(opts) {
    const { duration, type, cardio } = opts;
    const slots = _DENSITY[duration] || 6;
    const recipeFn = _RECIPES[type];
    if (!recipeFn) return null;

    const slotSpecs = recipeFn(slots);

    // Convertir slots → ejercicios con _pickN
    const exercises = [];
    const usedNames = new Set();
    slotSpecs.forEach(slot => {
      const pool = (_POOLS[slot.pool] || []).filter(n => !usedNames.has(n));
      if (!pool.length) return;
      const [name] = _pickN(pool, 1);
      if (!name) return;
      usedNames.add(name);
      exercises.push(_gen(name, slot.sets, slot.reps, slot.rest, slot.notes || ''));
    });

    // Añadir cardio LISS al final si procede (y no es HIIT)
    if (cardio && type !== 'hiit') {
      exercises.push(_gen(
        'Cardio LISS (cinta, bici o caminar inclinado)',
        1,
        '10 min',
        0,
        'RPE 4-6, frecuencia cardiaca 40-60% FCmáx. Mantén ritmo constante.'
      ));
    }

    const cardioSuffix = cardio && type !== 'hiit' ? ' + cardio' : '';
    const name = `${_TYPE_LABELS[type]} · ${duration} min${cardioSuffix}`;

    return {
      id: 'generated_' + Date.now(),
      name,
      type: 'strength',          // tracker lo trata como strength
      generated: true,           // marca para guardado opcional
      muscleGroups: _MUSCLE_GROUPS[type] || ['Mixto'],
      exercises
    };
  },

  TYPE_LABELS: _TYPE_LABELS,
  DURATIONS: [30, 45, 60]
};

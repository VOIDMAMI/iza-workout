/* ============================================
   IZA WORKOUT — Exercise alternatives
   Sistema mixto: tags por patrón + curated.
   ============================================ */

// Clasifica un ejercicio por su nombre. Devuelve { pattern, muscle }.
// pattern: hip-dominant | knee-dominant | push-horizontal | push-vertical |
//          pull-horizontal | pull-vertical | hinge | core | calf | arm-iso |
//          shoulder-iso | cardio | mobility | other
function _classifyExercise(name) {
  const n = (name || '').toLowerCase();

  // Hip-dominant
  if (/hip ?thrust|glute bridge|puente de glúteo|patada de glúteo|kickback|pull through|abducci|monster walk|clamshell/.test(n))
    return { pattern: 'hip-dominant', muscle: 'glúteo' };

  // Hinge (peso muerto)
  if (/peso muerto|deadlift|rdl|good ?morning|kettlebell swing|hip hinge/.test(n))
    return { pattern: 'hinge', muscle: 'cadena posterior' };

  // Knee-dominant
  if (/sentadilla|squat|prensa|leg press|zancada|lunge|búlgara|bulgara|step ?up|extensión de cuádriceps|extension de cuadriceps|extensión cuádriceps|sissy/.test(n))
    return { pattern: 'knee-dominant', muscle: 'cuádriceps' };

  // Femoral (curl)
  if (/curl de femoral|curl femoral|leg curl|nordic|fitball curl/.test(n))
    return { pattern: 'hip-dominant', muscle: 'femoral' };

  // Push horizontal
  if (/press de banca|press banca|bench press|flexion|flexión|push ?up|press inclinado|press declinado|aperturas|fly|peck deck/.test(n))
    return { pattern: 'push-horizontal', muscle: 'pecho' };

  // Push vertical
  if (/press militar|overhead press|ohp|press de hombro|arnold|landmine press|hand ?stand|pino/.test(n))
    return { pattern: 'push-vertical', muscle: 'hombros' };

  // Shoulder-iso
  if (/elevaci(ó|o)n lateral|lat ?raise|elevaci(ó|o)n frontal|pájaro|pajaro|reverse fly|facepull|face pull/.test(n))
    return { pattern: 'shoulder-iso', muscle: 'hombros' };

  // Pull vertical
  if (/dominada|pull ?up|chin ?up|jal(ó|o)n al pecho|lat pulldown|jalón polea/.test(n))
    return { pattern: 'pull-vertical', muscle: 'espalda' };

  // Pull horizontal
  if (/remo|row|pull through|australian/.test(n))
    return { pattern: 'pull-horizontal', muscle: 'espalda' };

  // Triceps iso
  if (/tr(í|i)ceps|extensi(ó|o)n de tr|fondos|dips|press franc(é|e)s|jal(ó|o)n tr|kickback tr/.test(n))
    return { pattern: 'arm-iso', muscle: 'tríceps' };

  // Biceps iso
  if (/b(í|i)ceps|curl de b|hammer curl|curl martillo|curl predicador|curl concentrado/.test(n))
    return { pattern: 'arm-iso', muscle: 'bíceps' };

  // Calf
  if (/gemelo|calf|elevaci(ó|o)n de talones/.test(n))
    return { pattern: 'calf', muscle: 'gemelos' };

  // Core
  if (/plancha|plank|crunch|abdomin|hollow|leg raise|elevaci(ó|o)n de piernas|dead ?bug|bird ?dog|pallof|russian twist|mountain climber|hanging knee/.test(n))
    return { pattern: 'core', muscle: 'core' };

  // Cardio
  if (/burpee|jumping jack|sprint|carrera|skipping|jump|salto|battle rope|cuerda|escalador/.test(n))
    return { pattern: 'cardio', muscle: 'cardio' };

  // Mobility
  if (/movilidad|estiramiento|cat ?cow|gato|perro|cobra|child|niño|paloma|pigeon/.test(n))
    return { pattern: 'mobility', muscle: 'movilidad' };

  return { pattern: 'other', muscle: '' };
}

// Pool de alternativas por patrón (ordenadas: primero sin equipo / accesibles)
const _ALT_POOL = {
  'hip-dominant': [
    'Hip thrust con barra',
    'Hip thrust con mancuerna',
    'Glute bridge en suelo',
    'Hip thrust a una pierna',
    'Pull through en polea',
    'Patada de glúteo en polea',
    'Patada de glúteo en cuadrupedia',
    'Abductor en máquina',
    'Monster walk con banda',
    'Clamshell con banda'
  ],
  'hinge': [
    'Peso muerto convencional',
    'Peso muerto rumano (RDL) con barra',
    'Peso muerto rumano con mancuernas',
    'Peso muerto rumano unilateral',
    'Good morning con barra',
    'Kettlebell swing',
    'Hiperextensiones (back extension)'
  ],
  'knee-dominant': [
    'Sentadilla libre | barra alta',
    'Sentadilla goblet con mancuerna',
    'Sentadilla en prensa (45°)',
    'Hack squat',
    'Zancada caminando con mancuernas',
    'Sentadilla búlgara',
    'Step up con mancuernas',
    'Extensión de cuádriceps en máquina',
    'Sissy squat'
  ],
  'push-horizontal': [
    'Press de banca con barra',
    'Press de banca con mancuernas',
    'Press inclinado con mancuernas',
    'Flexiones de pecho',
    'Flexiones declinadas',
    'Aperturas con mancuernas',
    'Peck deck (contractor)',
    'Press en máquina'
  ],
  'push-vertical': [
    'Press militar con barra',
    'Press militar con mancuernas',
    'Press Arnold',
    'Landmine press',
    'Press en máquina sentado',
    'Pike push up'
  ],
  'shoulder-iso': [
    'Elevaciones laterales con mancuernas',
    'Elevaciones laterales en polea',
    'Elevaciones frontales con mancuerna',
    'Pájaros (rear delt) con mancuernas',
    'Reverse fly en máquina',
    'Facepull en polea'
  ],
  'pull-vertical': [
    'Dominadas',
    'Dominadas asistidas con banda',
    'Jalón al pecho en polea',
    'Jalón con agarre neutro',
    'Australian pull ups (remo invertido)'
  ],
  'pull-horizontal': [
    'Remo con barra a 90°',
    'Remo con mancuerna a una mano',
    'Remo en polea baja sentado',
    'Remo en máquina',
    'Australian pull ups (remo invertido)',
    'Pull through en polea'
  ],
  'arm-iso': {
    'tríceps': [
      'Fondos en paralelas',
      'Fondos de tríceps en banco',
      'Press francés con barra Z',
      'Extensión de tríceps en polea (cuerda)',
      'Patada de tríceps con mancuerna',
      'Press cerrado con barra'
    ],
    'bíceps': [
      'Curl con barra',
      'Curl con mancuernas alterno',
      'Curl martillo',
      'Curl predicador (Scott)',
      'Curl concentrado',
      'Curl en polea'
    ]
  },
  'calf': [
    'Elevación de talones de pie',
    'Elevación de talones sentado',
    'Elevación de talones en prensa',
    'Elevación de talones a una pierna'
  ],
  'core': [
    'Plancha frontal',
    'Plancha lateral',
    'Crunch en suelo',
    'Hollow body hold',
    'Dead bug',
    'Bird dog',
    'Pallof press en polea',
    'Mountain climbers',
    'Elevación de piernas colgado',
    'Russian twist'
  ],
  'cardio': [
    'Burpees',
    'Jumping jacks',
    'Skipping alto',
    'Mountain climbers',
    'Saltos al cajón',
    'Sprint en sitio',
    'Battle ropes'
  ],
  'mobility': [
    'Cat-cow (gato-vaca)',
    'Perro boca abajo',
    'Cobra',
    'Postura del niño',
    'Paloma (pigeon pose)',
    'Movilidad de cadera 90/90'
  ],
  'other': []
};

// Devuelve hasta `max` alternativas para un ejercicio, excluyendo el mismo nombre.
function getAlternatives(exerciseName, max) {
  max = max || 5;
  const { pattern, muscle } = _classifyExercise(exerciseName);
  let pool = _ALT_POOL[pattern];

  // arm-iso es subdividido por músculo
  if (pattern === 'arm-iso' && pool && typeof pool === 'object' && !Array.isArray(pool)) {
    pool = pool[muscle] || [];
  }

  if (!pool || !pool.length) return { pattern, muscle, list: [] };

  // Excluir el propio ejercicio (match por subcadena tras normalizar)
  const norm = s => s.toLowerCase().replace(/[|·\-()]/g, ' ').replace(/\s+/g, ' ').trim();
  const selfNorm = norm(exerciseName);
  const list = pool
    .filter(alt => norm(alt) !== selfNorm)
    .slice(0, max);

  return { pattern, muscle, list };
}

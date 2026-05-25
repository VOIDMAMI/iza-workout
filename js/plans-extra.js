/* ============================================
   IZA WORKOUT — Planes adicionales
   Carrera 5KM · Pérdida de Grasa · Quema Grasa Complemento
   Se fusionan en WORKOUT_PLANS al cargar.
   ============================================ */

/* ══════════════ CARRERA 5KM (12 semanas) ══════════════ */
// Helpers locales para construir días repetitivos del plan
function _c5kMovD1() {
  return [
    _ex('c5k_m_balanceo',  'Movilidad | Balanceo de piernas',            1, '10/pierna', 0),
    _ex('c5k_m_flex_sed',  'Movilidad | Flexión de tobillo sedestación', 1, '10/pierna', 0),
    _ex('c5k_m_squat_rod', 'Sentadilla + rodilla al pecho',              1, '5/lado',    0),
  ];
}
function _c5kMovD3() {
  return [
    _ex('c5k_m_hip_car',   'Movilidad | Hip CAR',                          1, '10/pierna', 0),
    _ex('c5k_m_flex_bip',  'Movilidad | Flexión de tobillo bipedestación', 1, '8/lado',    0),
    _ex('c5k_m_balanceo',  'Movilidad | Balanceo de piernas',              1, '10/pierna', 0),
  ];
}
function _c5kMovD5() {
  return [
    _ex('c5k_m_rlunge', 'Movilidad | Runners lunge', 1, '8/lado', 0),
  ];
}
function _c5kPrevD4() {
  return [
    _ex('c5k_m_rockback', 'Movilidad | Leg Rockback',                  2, '9/lado', 90),
    _ex('c5k_m_flex_sed', 'Movilidad | Flexión de tobillo sedestación', 2, '9/lado', 90),
    _ex('c5k_gemelo_mc',  'Gemelo con mancuernas sentada',              2, '9',      90),
  ];
}
function _c5kPrevD6() {
  return [
    _ex('c5k_m_rockback', 'Movilidad | Leg Rockback',          2, '9/lado',   90),
    _ex('c5k_ext_dedo',   'Extensión del dedo gordo del pie',  2, '9/lado',   90),
    _ex('c5k_gemelo_mc',  'Gemelo con mancuernas sentada',     2, '9/lado',   90),
    _ex('c5k_fr_cuad',    'Foam roller | Cuádriceps',          2, '9',        90),
    _ex('c5k_step_up',    'Step up con mancuerna',             2, '9/pierna', 90),
    _ex('c5k_pistol_box', 'Squat box unilateral (pistol)',     2, '9/pierna', 90),
  ];
}
// CaCo: bloque "X min corriendo + Y min andando" repetido `rounds` rondas
function _c5kCaco(week, day, rounds, runMin, walkMin, totalMin) {
  const id = 'c5k_s' + week + '_d' + day + '_caco';
  const reps = runMin + ' min correr + ' + walkMin + ' min andar';
  const notes = totalMin + ' min total. Correr a intensidad conversacional (que te permita hablar).';
  return _ex(id, 'Correr (Ca-Co)', rounds, reps, 0, notes);
}

WORKOUT_PLANS.carrera_5km = {
  id: 'carrera_5km',
  name: 'Carrera 5KM',
  planType: 'phased',
  weeks: 12,
  description: 'Plan de 12 semanas para correr 5km — método Ca-Co (caminar-correr) + movilidad + trabajo preventivo de lesiones',
  trainingDays: [1, 3, 4, 5, 6],
  dayMeta: {
    1: { name: 'Ca-Co + Movilidad',      type: 'running',  muscleGroups: ['Cardio', 'Movilidad'] },
    3: { name: 'Ca-Co + Movilidad',      type: 'running',  muscleGroups: ['Cardio', 'Movilidad'] },
    4: { name: 'Prevención de lesiones', type: 'strength', muscleGroups: ['Gemelos', 'Tobillo', 'Cadera'] },
    5: { name: 'Ca-Co + Movilidad',      type: 'running',  muscleGroups: ['Cardio', 'Movilidad'] },
    6: { name: 'Prevención de lesiones', type: 'strength', muscleGroups: ['Gemelos', 'Cuádriceps', 'Piernas'] }
  },
  weeklySchedule: [
    // S1
    {
      1: [..._c5kMovD1(), _c5kCaco(1, 1, 3, 1, 9, 30)],
      3: [..._c5kMovD3(), _c5kCaco(1, 3, 4, 1, 7, 32)],
      4: _c5kPrevD4(),
      5: [..._c5kMovD5(), _c5kCaco(1, 5, 5, 1, 5, 30)],
      6: _c5kPrevD6()
    },
    // S2
    {
      1: [..._c5kMovD1(), _c5kCaco(2, 1, 6,  1, 4, 30)],
      3: [..._c5kMovD3(), _c5kCaco(2, 3, 7,  1, 3, 28)],
      4: _c5kPrevD4(),
      5: [..._c5kMovD5(), _c5kCaco(2, 5, 10, 1, 2, 30)],
      6: _c5kPrevD6()
    },
    // S3
    {
      1: [..._c5kMovD1(), _c5kCaco(3, 1, 3, 2, 9, 33)],
      3: [..._c5kMovD3(), _c5kCaco(3, 3, 3, 2, 8, 30)],
      4: _c5kPrevD4(),
      5: [..._c5kMovD5(), _c5kCaco(3, 5, 4, 2, 6, 32)],
      6: _c5kPrevD6()
    },
    // S4
    {
      1: [..._c5kMovD1(), _c5kCaco(4, 1, 5, 2, 4, 30)],
      3: [..._c5kMovD3(), _c5kCaco(4, 3, 6, 2, 3, 28)],
      4: _c5kPrevD4(),
      5: [..._c5kMovD5(), _c5kCaco(4, 5, 7, 2, 2, 28)],
      6: _c5kPrevD6()
    },
    // S5
    {
      1: [..._c5kMovD1(), _c5kCaco(5, 1, 3, 3, 7, 30)],
      3: [..._c5kMovD3(), _c5kCaco(5, 3, 3, 3, 6, 27)],
      4: _c5kPrevD4(),
      5: [..._c5kMovD5(), _c5kCaco(5, 5, 4, 3, 5, 32)],
      6: _c5kPrevD6()
    },
    // S6
    {
      1: [..._c5kMovD1(), _c5kCaco(6, 1, 4, 3, 4, 28)],
      3: [..._c5kMovD3(), _c5kCaco(6, 3, 5, 3, 3, 30)],
      4: _c5kPrevD4(),
      5: [..._c5kMovD5(), _c5kCaco(6, 5, 6, 3, 2, 30)],
      6: _c5kPrevD6()
    },
    // S7
    {
      1: [..._c5kMovD1(), _c5kCaco(7, 1, 3, 4, 6, 30)],
      3: [..._c5kMovD3(), _c5kCaco(7, 3, 3, 4, 5, 27)],
      4: _c5kPrevD4(),
      5: [..._c5kMovD5(), _c5kCaco(7, 5, 4, 4, 4, 32)],
      6: _c5kPrevD6()
    },
    // S8
    {
      1: [..._c5kMovD1(), _c5kCaco(8, 1, 4, 4, 3, 28)],
      3: [..._c5kMovD3(), _c5kCaco(8, 3, 5, 4, 2, 30)],
      4: _c5kPrevD4(),
      5: [..._c5kMovD5(), _c5kCaco(8, 5, 6, 4, 1, 30)],
      6: _c5kPrevD6()
    },
    // S9
    {
      1: [..._c5kMovD1(), _c5kCaco(9, 1, 5, 5, 1, 30)],
      3: [..._c5kMovD3(), _c5kCaco(9, 3, 4, 6, 1, 28)],
      4: _c5kPrevD4(),
      5: [..._c5kMovD5(), _c5kCaco(9, 5, 4, 7, 1, 32)],
      6: _c5kPrevD6()
    },
    // S10
    {
      1: [..._c5kMovD1(), _c5kCaco(10, 1, 3, 8,  1, 27)],
      3: [..._c5kMovD3(), _c5kCaco(10, 3, 3, 9,  1, 30)],
      4: _c5kPrevD4(),
      5: [..._c5kMovD5(), _c5kCaco(10, 5, 3, 10, 1, 33)],
      6: _c5kPrevD6()
    },
    // S11 — bloques largos casi continuos
    {
      1: [
        ..._c5kMovD1(),
        _ex('c5k_s11_d1_run',  'Correr',  2, '12 min',  0, 'Intensidad conversacional.'),
        _ex('c5k_s11_d1_walk', 'Caminar', 1, '1 min',   0, 'Paso ligero entre los dos bloques de carrera. Total ~27 min.'),
      ],
      3: [
        ..._c5kMovD3(),
        _ex('c5k_s11_d3_run',  'Correr',  2, '13 min',  0, 'Intensidad conversacional.'),
        _ex('c5k_s11_d3_walk', 'Caminar', 1, '1 min',   0, 'Paso ligero entre los dos bloques. Total ~30 min.'),
      ],
      4: _c5kPrevD4(),
      5: [
        ..._c5kMovD5(),
        _ex('c5k_s11_d5_run1', 'Correr',  1, '18 min',  0, 'Intensidad conversacional.'),
        _ex('c5k_s11_d5_walk', 'Caminar', 1, '1 min',   0, 'Paso ligero.'),
        _ex('c5k_s11_d5_run2', 'Correr',  1, '12 min',  0, 'Continúa. Total ~31 min.'),
      ],
      6: _c5kPrevD6()
    },
    // S12 — semana final: bloques largos + prueba 5KM
    {
      1: [
        ..._c5kMovD1(),
        _ex('c5k_s12_d1_run1', 'Correr',  1, '20 min',  0, 'Intensidad conversacional.'),
        _ex('c5k_s12_d1_walk', 'Caminar', 1, '1 min',   0, 'Paso ligero.'),
        _ex('c5k_s12_d1_run2', 'Correr',  1, '10 min',  0, 'Continúa. Total ~31 min.'),
      ],
      3: [
        ..._c5kMovD3(),
        _ex('c5k_s12_d3_run1', 'Correr',                 1, '24 min', 0, 'Intensidad conversacional.'),
        _ex('c5k_s12_d3_walk1','Caminar',                1, '1 min',  0, 'Paso ligero.'),
        _ex('c5k_s12_d3_run2', 'Correr ritmo alto (150 ppm)', 1, '6 min',  0, 'Sube intensidad — 150 pulsaciones por minuto.'),
        _ex('c5k_s12_d3_walk2','Caminar',                1, '1 min',  0, 'Paso ligero. Total ~32 min.'),
      ],
      4: _c5kPrevD4(),
      5: [
        _ex('c5k_m_rlunge',  'Movilidad | Runners lunge', 1, '8/lado', 0),
        _ex('c5k_5km_final', 'Carrera 5KM — Prueba final', 1, '30 min', 0, '🎯 ¡A por los 5KM continuos! Intensidad conversacional.'),
      ],
      6: _c5kPrevD6()
    }
  ]
};

/* ══════════════ QUEMA GRASA COMPLEMENTO (8 semanas) ══════════════ */
WORKOUT_PLANS.quema_grasa_comp = {
  id: 'quema_grasa_comp',
  name: 'Quema Grasa Complemento',
  planType: 'phased',
  weeks: 8,
  description: 'Programa complementario 8 sem — cardio/HIIT/sprints/natación',
  trainingDays: [1, 2, 3, 4, 5, 6],
  dayMeta: {
    1: { name: 'Comba / Caminar inclinación', type: 'strength', muscleGroups: ['Cardio', 'Piernas'] },
    2: { name: 'Caminar con lastre',          type: 'strength', muscleGroups: ['Cardio'] },
    3: { name: 'HIIT en casa/gym',            type: 'strength', muscleGroups: ['Full body', 'Cardio'] },
    4: { name: 'Stairmaster',                 type: 'strength', muscleGroups: ['Cardio', 'Piernas'] },
    5: { name: 'Sprints / Bici',              type: 'strength', muscleGroups: ['Cardio', 'Piernas'] },
    6: { name: 'Natación',                    type: 'strength', muscleGroups: ['Cardio', 'Full body'] }
  },
  weeklySchedule: [
    // S1 (impar)
    {
      1: [ _ex('qgc_comba', 'Salto a la comba', 5, '30s', 60) ],
      3: [
        _ex('qgc_burpees',    'HIIT | Burpees', 2, '12', 30),
        _ex('qgc_curtsy',     'HIIT | Curtsy jumps', 2, '10/lado', 30),
        _ex('qgc_jjacks',     'HIIT | Jumping jacks', 2, '12', 30),
        _ex('qgc_prisside',   'HIIT | Prisioner side to side squats', 2, '12', 30),
        _ex('qgc_tuck',       'HIIT | Tuck jumps', 2, '10', 30),
        _ex('qgc_walkout',    'HIIT | Walkout jump', 2, '12', 30),
        _ex('qgc_latlunge',   'HIIT | Lateral lunge drop', 2, '12', 30),
        _ex('qgc_squatrot',   'HIIT | Sentadilla con salto + rotación', 2, '10', 30),
      ],
      5: [ _ex('qgc_sprint', 'Correr | Sprint', 4, '300m (7/8)', 90) ]
    },
    // S2 (par)
    {
      1: [ _ex('qgc_caminc',    'Caminar con inclinación (cinta)', 1, '30 min (3mph, 12%)', 0) ],
      2: [ _ex('qgc_camlastre', 'Caminar con lastre', 1, '30 min', 0, '~7% peso corporal') ],
      4: [ _ex('qgc_stair',     'Stairmaster', 1, '20-30 min', 0, 'NVL 7-9') ],
      5: [ _ex('qgc_bici',      'Bicicleta estática (intervalos)', 4, '60s al 85-90% FCmax', 60) ],
      6: [
        _ex('qgc_nat_suave', 'Natación | Nadar suave', 4, '25m', 0),
        _ex('qgc_nat_int',   'Natación | Intervalos 65-85% FCmax', 2, '25m x 2', 45, '2 min entre bloques'),
        _ex('qgc_nat_cool',  'Natación | Nado relajado', 1, '100m', 0),
      ]
    },
    // S3 (impar)
    {
      1: [ _ex('qgc_comba', 'Salto a la comba', 5, '1 min', 60) ],
      3: [
        _ex('qgc_benchover',   'HIIT | Bench over jumps', 2, '12', 30),
        _ex('qgc_jjacks',      'HIIT | Jumping jacks', 2, '12', 30),
        _ex('qgc_prisknee',    'HIIT | Prisioner squat + knee in', 2, '10', 30),
        _ex('qgc_tuck',        'HIIT | Tuck jumps', 2, '10', 30),
        _ex('qgc_lunge',       'HIIT | Lunge jump', 1, '12', 30),
        _ex('qgc_prisside',    'HIIT | Prisioner side to side squats', 2, '10', 30),
        _ex('qgc_calf',        'HIIT | Calf jumps', 2, '12', 30),
        _ex('qgc_plankthrust', 'HIIT | Plank thrust', 2, '12', 30),
      ],
      5: [ _ex('qgc_sprint', 'Correr | Sprint', 4, '400m (7/8)', 120) ]
    },
    // S4 (par)
    {
      1: [ _ex('qgc_caminc',    'Caminar con inclinación (cinta)', 1, '30 min (3mph, 12%)', 0) ],
      2: [ _ex('qgc_camlastre', 'Caminar con lastre', 1, '30 min', 0, '~8% peso corporal') ],
      4: [ _ex('qgc_stair',     'Stairmaster', 1, '25-30 min', 0, 'NVL 7-9') ],
      5: [ _ex('qgc_bici',      'Bicicleta estática (intervalos)', 4, '90s al 85-90% FCmax', 60) ],
      6: [
        _ex('qgc_nat_suave', 'Natación | Nadar suave', 4, '25m', 0),
        _ex('qgc_nat_int',   'Natación | Intervalos 65-85% FCmax', 3, '25m x 3', 45, '2 min entre bloques'),
        _ex('qgc_nat_cool',  'Natación | Nado relajado', 1, '100m', 0),
      ]
    },
    // S5 (impar)
    {
      1: [ _ex('qgc_comba', 'Salto a la comba', 5, '90s', 60) ],
      3: [
        _ex('qgc_burpees',   'HIIT | Burpees', 2, '14', 30),
        _ex('qgc_curtsy',    'HIIT | Curtsy jumps', 2, '14/lado', 30),
        _ex('qgc_jjacks',    'HIIT | Jumping jacks', 2, '15', 30),
        _ex('qgc_prisside',  'HIIT | Prisioner side to side squats', 2, '15', 30),
        _ex('qgc_tuck',      'HIIT | Tuck jumps', 2, '12', 30),
        _ex('qgc_walkout',   'HIIT | Walkout jump', 2, '15', 30),
        _ex('qgc_latlunge',  'HIIT | Lateral lunge drop', 2, '15', 30),
        _ex('qgc_squatrot',  'HIIT | Sentadilla con salto + rotación', 2, '15', 30),
      ],
      5: [ _ex('qgc_sprint', 'Correr | Sprint', 4, '400m (7/8)', 60) ]
    },
    // S6 (par)
    {
      1: [ _ex('qgc_caminc',    'Caminar con inclinación (cinta)', 1, '30 min (3mph, 12%)', 0) ],
      2: [ _ex('qgc_camlastre', 'Caminar con lastre', 1, '30 min', 0, '~10% peso corporal') ],
      4: [ _ex('qgc_stair',     'Stairmaster', 1, '25-30 min', 0, 'NVL 8-9') ],
      5: [ _ex('qgc_bici',      'Bicicleta estática (intervalos)', 5, '90s al 85-90% FCmax', 60) ],
      6: [
        _ex('qgc_nat_suave', 'Natación | Nadar suave', 4, '25m', 0),
        _ex('qgc_nat_int',   'Natación | Intervalos 65-85% FCmax', 3, '25m x 3', 30, '2 min entre bloques'),
        _ex('qgc_nat_cool',  'Natación | Nado relajado', 1, '100m', 0),
      ]
    },
    // S7 (impar)
    {
      1: [ _ex('qgc_comba', 'Salto a la comba', 6, '1 min', 30) ],
      3: [
        _ex('qgc_benchover',   'HIIT | Bench over jumps', 3, '10', 20),
        _ex('qgc_jjacks',      'HIIT | Jumping jacks', 3, '10', 20),
        _ex('qgc_prisknee',    'HIIT | Prisioner squat + knee in', 3, '10', 20),
        _ex('qgc_tuck',        'HIIT | Tuck jumps', 3, '10', 20),
        _ex('qgc_lunge',       'HIIT | Lunge jump', 3, '10', 20),
        _ex('qgc_prisside',    'HIIT | Prisioner side to side squats', 3, '10', 20),
        _ex('qgc_calf',        'HIIT | Calf jumps', 3, '10', 20),
        _ex('qgc_plankthrust', 'HIIT | Plank thrust', 3, '10', 20),
      ],
      5: [ _ex('qgc_sprint', 'Correr | Sprint', 5, '400m (7/8)', 120) ]
    },
    // S8 (par)
    {
      1: [ _ex('qgc_caminc',    'Caminar con inclinación (cinta)', 1, '30 min (3mph, 12%)', 0) ],
      2: [ _ex('qgc_camlastre', 'Caminar con lastre', 1, '30 min', 0, '~11% peso corporal') ],
      4: [ _ex('qgc_stair',     'Stairmaster', 1, '30 min', 0, 'NVL 8-9') ],
      5: [ _ex('qgc_bici',      'Bicicleta estática (intervalos)', 5, '90s al 85-90% FCmax', 30) ],
      6: [
        _ex('qgc_nat_suave', 'Natación | Nadar suave', 4, '25m', 0),
        _ex('qgc_nat_int',   'Natación | Intervalos 65-85% FCmax', 4, '25m x 4', 30, '90s entre bloques'),
        _ex('qgc_nat_cool',  'Natación | Nado relajado', 1, '100m', 0),
      ]
    }
  ]
};

/* ══════════════ PÉRDIDA DE GRASA (12 semanas) ══════════════ */
WORKOUT_PLANS.perdida_grasa = {
  id: 'perdida_grasa',
  name: 'Pérdida de Grasa',
  planType: 'phased',
  weeks: 12,
  description: 'Programa de 12 semanas para pérdida de grasa (Fase 1: 5 días/sem · Fase 2: 6 días/sem)',
  trainingDays: [1, 2, 3, 4, 5, 6],
  dayMeta: {
    1: { name: 'Pierna (Glúteo)',   type: 'strength', muscleGroups: ['Glúteos', 'Cuádriceps', 'Core'] },
    2: { name: 'Torso + cardio',    type: 'strength', muscleGroups: ['Espalda', 'Hombros', 'Pecho', 'Brazos', 'Cardio'] },
    3: { name: 'Pierna (Femoral)',  type: 'strength', muscleGroups: ['Isquios', 'Glúteos', 'Gemelos', 'Core'] },
    4: { name: 'Cardio LISS',       type: 'running',  muscleGroups: ['Cardio'] },
    5: { name: 'Full body',         type: 'strength', muscleGroups: ['Full body', 'Hombros', 'Glúteos'] },
    6: { name: 'HIIT',              type: 'strength', muscleGroups: ['Cardio', 'Core'] }
  },
  weeklySchedule: [
    // ───── FASE 1 (semanas 1-6, 5 días/sem) ─────
    // S1
    {
      1: [
        _ex('pdg_m_cat_camel',  'Movilidad | Cat camel', 1, '10', 0),
        _ex('pdg_m_cossak',     'Movilidad | Cossak squat', 1, '8/lado', 0),
        _ex('pdg_m_flex_peso',  'Movilidad | Flexión de tobillo con peso', 1, '30s/lado', 0),
        _ex('pdg_abd_iso',      'Abducción de cadera isométrica con resistencia', 8, '10s iso + 10s desc', 0),
        _ex('pdg_ht_aprox',     'Hip Thrust (aproximación)', 2, '6', 60),
        _ex('pdg_ht',           'Hip Thrust', 2, '8/10', 60),
        _ex('pdg_sq_rebote',    'Sentadilla con rebote', 2, '10', 60),
        _ex('pdg_bulg_mp',      'Sentadilla búlgara en multipower', 2, '10-12', 60),
        _ex('pdg_box_jumps',    'Box jumps | Progresión', 3, '6-8', 30),
        _ex('pdg_ball_wall',    'Ball wall lateral', 2, '10', 30),
        _ex('pdg_core_pl_dist', 'Core | Plancha con manos distanciadas', 2, '40s', 20),
      ],
      2: [
        _ex('pdg_m_snow',       'Movilidad | Prone snow angels', 1, '10', 0),
        _ex('pdg_m_rlunge_r',   'Movilidad | Runners lunge with reach', 1, '6/lado', 0),
        _ex('pdg_m_rot_hum',    'Movilidad | Rotación humeral con peso', 1, '8/lado', 0),
        _ex('pdg_flex_plio',    'Flexiones pliométricas con altura', 2, 'Máximas', 38),
        _ex('pdg_jalon_uni',    'Jalón unilateral en polea', 3, '14', 60),
        _ex('pdg_press_hom_mc', 'Press de hombro con mancuernas', 3, '10/14', 60),
        _ex('pdg_elev_lat_mc',  'Elevaciones laterales con mancuernas', 3, '12', 45),
        _ex('pdg_remo_seal',    'Remo seal', 3, '12', 60),
        _ex('pdg_curl_bic_mc',  'Curl de bíceps con mancuerna', 3, '14', 45),
        _ex('pdg_skull',        'Skull crusher', 3, '14', 45),
        _ex('pdg_liss_torso',   'Cardio LISS', 1, '15 min (5+5+5)', 0, 'Baja/moderada/baja'),
      ],
      3: [
        _ex('pdg_m_rockback',   'Movilidad | Leg Rockback', 1, '8/lado', 0),
        _ex('pdg_m_standing',   'Movilidad | Standing reach down fwd-back', 1, '6', 0),
        _ex('pdg_hiperext',     'Hiperextensión', 2, '16', 30),
        _ex('pdg_pmr_uni_mc',   'Peso muerto rumano unilateral con mancuernas', 3, '10/12', 60),
        _ex('pdg_skier',        'Skier swings con disco', 3, '8', 60),
        _ex('pdg_pat_glut_pol', 'Patada de glúteo en polea', 2, '14', 60),
        _ex('pdg_curl_femoral', 'Curl de femoral', 2, '14', 60),
        _ex('pdg_soleo_mc',     'Sóleo sentado con mancuernas', 3, '20', 60),
        _ex('pdg_core_pl_inv',  'Core | Plancha inversa con toques de rodilla', 2, '30s', 30),
        _ex('pdg_core_rtwist',  'Core | Russian twist con disco', 2, '20', 30),
      ],
      5: [
        _ex('pdg_ht_uni_sp',     'Hip thrust unilateral sin peso', 2, '14', 0),
        _ex('pdg_pm_sumo_aprox', 'Peso muerto sumo (aproximación)', 2, '6', 60),
        _ex('pdg_pm_sumo',       'Peso muerto sumo', 3, '8', 90),
        _ex('pdg_landmine',      'Landmine thruster', 3, '10', 60),
        _ex('pdg_aus_pullups',   'Australian pull-ups', 2, '10-12', 60),
        _ex('pdg_elev_lf_mc',    'Elevaciones laterales + frontales con mancuernas', 3, '12', 45),
        _ex('pdg_delt_post_pol', 'Deltoides posterior en polea', 3, '15', 60),
        _ex('pdg_salt_lat_cj',   'Saltos laterales al cajón | Progresión', 2, '6-8', 53),
        _ex('pdg_samurai_pol',   'Samurai pulls en polea', 2, '16', 60),
        _ex('pdg_core_elev_col', 'Core | Elevación de piernas colgada', 2, '10', 30),
      ],
      6: [
        _ex('pdg_hiit_sq_toes',  'HIIT | Sentadilla + toques de pie', 3, '30s', 30),
        _ex('pdg_hiit_pl_thrust','HIIT | Plank thrust', 3, '30s', 30),
        _ex('pdg_hiit_pulse_js', 'HIIT | Pulse jump squats', 3, '30s', 30),
        _ex('pdg_core_dolphin',  'Core | Dolphin plank + knee taps', 3, '30s', 30),
        _ex('pdg_hiit_calf',     'HIIT | Calf jumps', 3, '30s', 30),
      ]
    },
    // S2
    {
      1: [
        _ex('pdg_m_cat_camel',  'Movilidad | Cat camel', 1, '10', 0),
        _ex('pdg_m_cossak',     'Movilidad | Cossak squat', 1, '8/lado', 0),
        _ex('pdg_m_flex_peso',  'Movilidad | Flexión de tobillo con peso', 1, '30s/lado', 0),
        _ex('pdg_abd_iso',      'Abducción de cadera isométrica con resistencia', 8, '15s iso', 10),
        _ex('pdg_ht_aprox',     'Hip Thrust (aproximación)', 2, '6', 60),
        _ex('pdg_ht',           'Hip Thrust', 3, '8/10', 90),
        _ex('pdg_sq_rebote',    'Sentadilla con rebote', 2, '10', 60),
        _ex('pdg_bulg_mp',      'Sentadilla búlgara en multipower', 3, '8-12', 75),
        _ex('pdg_box_jumps',    'Box jumps | Progresión', 3, '6-8', 38),
        _ex('pdg_core_pike',    'Core | Pike plank en fitball', 2, '8', 30),
        _ex('pdg_core_kb_wm',   'Core | KB Windmill', 2, '12', 30),
      ],
      2: [
        _ex('pdg_m_snow',       'Movilidad | Prone snow angels', 1, '10', 0),
        _ex('pdg_m_rlunge_r',   'Movilidad | Runners lunge with reach', 1, '6/lado', 0),
        _ex('pdg_m_rot_hum',    'Movilidad | Rotación humeral con peso', 1, '8/lado', 0),
        _ex('pdg_flex_plio',    'Flexiones pliométricas con altura', 3, 'Máximas (10-12)', 53),
        _ex('pdg_jalon_uni',    'Jalón unilateral en polea', 4, '14', 60),
        _ex('pdg_press_hom_uni','Press de hombro unilateral', 3, '14', 60),
        _ex('pdg_elev_lat_mc',  'Elevaciones laterales con mancuernas', 4, '12', 45),
        _ex('pdg_remo_seal',    'Remo seal', 3, '12', 60),
        _ex('pdg_curl_bic_mc',  'Curl de bíceps con mancuerna', 3, '14', 60),
        _ex('pdg_skull',        'Skull crusher', 3, '14', 60),
        _ex('pdg_liss_torso',   'Cardio LISS', 1, '17 min (5+7+5)', 0),
      ],
      3: [
        _ex('pdg_m_rockback',   'Movilidad | Leg Rockback', 1, '8/lado', 0),
        _ex('pdg_m_standing',   'Movilidad | Standing reach down fwd-back', 1, '6', 0),
        _ex('pdg_hiperext',     'Hiperextensión', 2, '16', 40),
        _ex('pdg_pmr_uni_mc',   'Peso muerto rumano unilateral con mancuernas', 3, '10/12', 60),
        _ex('pdg_skier',        'Skier swings con disco', 3, '10', 60),
        _ex('pdg_pat_glut_pol', 'Patada de glúteo en polea', 2, '14', 60),
        _ex('pdg_curl_femoral', 'Curl de femoral', 3, '14', 60),
        _ex('pdg_gemelo_prensa','Gemelo en prensa', 3, '15', 60),
        _ex('pdg_core_cr_res',  'Core | Crunch abdominal con resistencia', 2, '16', 30),
        _ex('pdg_core_rolls',   'Core | Rollouts con barra', 2, '6', 30),
      ],
      5: [
        _ex('pdg_ht_uni_sp',     'Hip thrust unilateral sin peso', 3, '14', 20),
        _ex('pdg_pm_sumo_aprox', 'Peso muerto sumo (aproximación)', 2, '4', 30),
        _ex('pdg_pm_sumo',       'Peso muerto sumo', 3, '6/8', 75),
        _ex('pdg_landmine',      'Landmine thruster', 3, '10', 60),
        _ex('pdg_remo_gir_pol',  'Remo gironda en polea', 2, '10-12', 60),
        _ex('pdg_elev_lf_mc',    'Elevaciones laterales + frontales con mancuernas', 4, '12', 30),
        _ex('pdg_delt_post_pol', 'Deltoides posterior en polea', 3, '15', 60),
        _ex('pdg_salt_lat_cj',   'Saltos laterales al cajón | Progresión', 2, '8-10', 38),
        _ex('pdg_core_rolls',    'Core | Rollouts con barra', 2, '6', 30),
      ],
      6: [
        _ex('pdg_hiit_lunge_d',  'HIIT | Lunge drop', 3, '30s', 30),
        _ex('pdg_hiit_bench_j',  'HIIT | Bench over jumps', 3, '30s', 30),
        _ex('pdg_hiit_walk_piv', 'HIIT | Walking pivot squats', 3, '30s', 30),
        _ex('pdg_core_pl_inv',   'Core | Plancha inversa con toques de rodilla', 3, '30s', 30),
        _ex('pdg_hiit_fast_feet','HIIT | Fast feet', 3, '30s', 30),
      ]
    },
    // S3
    {
      1: [
        _ex('pdg_m_cat_camel',  'Movilidad | Cat camel', 1, '10', 0),
        _ex('pdg_m_cossak',     'Movilidad | Cossak squat', 1, '8/lado', 0),
        _ex('pdg_m_flex_peso',  'Movilidad | Flexión de tobillo con peso', 1, '30s/lado', 0),
        _ex('pdg_abd_iso',      'Abducción de cadera isométrica con resistencia', 8, '15s iso + 10s desc', 0),
        _ex('pdg_ht_aprox',     'Hip Thrust (aproximación)', 2, '6', 45),
        _ex('pdg_ht',           'Hip Thrust', 3, '8/10 (último al fallo)', 90),
        _ex('pdg_sq_rebote',    'Sentadilla con rebote', 2, '10', 30),
        _ex('pdg_bulg_mp',      'Sentadilla búlgara en multipower', 3, '8-12', 75),
        _ex('pdg_box_jumps',    'Box jumps | Progresión', 3, '8', 45),
        _ex('pdg_ball_wall',    'Ball wall lateral', 2, '10', 30),
        _ex('pdg_core_pl_dist', 'Core | Plancha con manos distanciadas', 2, '45s', 20),
      ],
      2: [
        _ex('pdg_m_snow',       'Movilidad | Prone snow angels', 1, '10', 0),
        _ex('pdg_m_rlunge_r',   'Movilidad | Runners lunge with reach', 1, '6/lado', 0),
        _ex('pdg_m_rot_hum',    'Movilidad | Rotación humeral con peso', 1, '8/lado', 0),
        _ex('pdg_flex_plio',    'Flexiones pliométricas con altura', 3, 'Máximas (10-12)', 53),
        _ex('pdg_jalon_uni',    'Jalón unilateral en polea', 4, '14', 60),
        _ex('pdg_press_hom_mc', 'Press de hombro con mancuernas', 3, '14', 60),
        _ex('pdg_elev_lat_mc',  'Elevaciones laterales con mancuernas', 4, '12', 60),
        _ex('pdg_remo_seal',    'Remo seal', 3, '12', 60),
        _ex('pdg_curl_bic_mc',  'Curl de bíceps con mancuerna', 3, '14', 60),
        _ex('pdg_skull',        'Skull crusher', 3, '14', 60),
        _ex('pdg_liss_torso',   'Cardio LISS', 1, '20 min (5+10+5)', 0),
      ],
      3: [
        _ex('pdg_m_rockback',     'Movilidad | Leg Rockback', 1, '8/lado', 0),
        _ex('pdg_m_standing',     'Movilidad | Standing reach down fwd-back', 1, '6', 0),
        _ex('pdg_hiperext',       'Hiperextensión', 2, '16', 30),
        _ex('pdg_sent_libre_ap',  'Sentadilla libre | barra alta (aproximación)', 2, '6-8', 60),
        _ex('pdg_sent_libre',     'Sentadilla libre | barra alta', 3, '6', 90),
        _ex('pdg_pmr_uni_mc',     'Peso muerto rumano unilateral con mancuernas', 2, '10', 45),
        _ex('pdg_skier',          'Skier swings con disco', 3, '10', 60),
        _ex('pdg_pat_glut_pol',   'Patada de glúteo en polea', 2, '14', 60),
        _ex('pdg_curl_femoral',   'Curl de femoral', 3, '14', 60),
        _ex('pdg_soleo_mc',       'Sóleo sentado con mancuernas', 3, '20', 60),
        _ex('pdg_core_pl_inv',    'Core | Plancha inversa con toques de rodilla', 2, '30s', 30),
        _ex('pdg_core_rtwist',    'Core | Russian twist con disco', 2, '20', 30),
      ],
      5: [
        _ex('pdg_ht_uni_sp',     'Hip thrust unilateral sin peso', 3, '14', 0),
        _ex('pdg_pm_sumo_aprox', 'Peso muerto sumo (aproximación)', 2, '4', 45),
        _ex('pdg_pm_sumo',       'Peso muerto sumo', 3, '6/8', 75),
        _ex('pdg_landmine',      'Landmine thruster', 3, '12', 60),
        _ex('pdg_aus_pullups',   'Australian pull-ups', 2, '10-12', 60),
        _ex('pdg_elev_lf_mc',    'Elevaciones laterales + frontales con mancuernas', 4, '12', 60),
        _ex('pdg_delt_post_pol', 'Deltoides posterior en polea', 3, '15', 60),
        _ex('pdg_salt_lat_cj',   'Saltos laterales al cajón | Progresión', 2, '8-10', 38),
        _ex('pdg_samurai_pol',   'Samurai pulls en polea', 2, '16', 60),
        _ex('pdg_core_elev_col', 'Core | Elevación de piernas colgada', 2, '10', 30),
      ],
      6: [
        _ex('pdg_hiit_prisside',  'HIIT | Prisioner side to side squats', 3, '30s', 30),
        _ex('pdg_core_dolphin',   'Core | Dolphin plank + knee taps', 3, '30s', 30),
        _ex('pdg_hiit_scissor',   'HIIT | Scissor jumps', 3, '30s', 30),
        _ex('pdg_core_toe_taps',  'Core | Toe taps', 3, '30s', 30),
        _ex('pdg_hiit_rocket',    'HIIT | Rocket launch squats', 3, '30s', 30),
      ]
    },
    // S4
    {
      1: [
        _ex('pdg_m_cat_camel',  'Movilidad | Cat camel', 1, '10', 0),
        _ex('pdg_m_cossak',     'Movilidad | Cossak squat', 1, '8/lado', 0),
        _ex('pdg_m_flex_peso',  'Movilidad | Flexión de tobillo con peso', 1, '30s/lado', 0),
        _ex('pdg_abd_iso',      'Abducción de cadera isométrica con resistencia', 8, '20s iso + 10s desc', 0),
        _ex('pdg_ht_aprox',     'Hip Thrust (aproximación)', 2, '6', 40),
        _ex('pdg_ht',           'Hip Thrust', 3, '8/10', 90),
        _ex('pdg_sq_rebote',    'Sentadilla con rebote', 2, '10', 30),
        _ex('pdg_bulg_mp',      'Sentadilla búlgara en multipower', 3, '8-12', 75),
        _ex('pdg_box_jumps',    'Box jumps | Progresión', 3, '8-10', 45),
        _ex('pdg_core_pike',    'Core | Pike plank en fitball', 2, '10', 30),
        _ex('pdg_core_kb_wm',   'Core | KB Windmill', 2, '12', 30),
      ],
      2: [
        _ex('pdg_m_snow',       'Movilidad | Prone snow angels', 1, '10', 0),
        _ex('pdg_m_rlunge_r',   'Movilidad | Runners lunge with reach', 1, '6/lado', 0),
        _ex('pdg_m_rot_hum',    'Movilidad | Rotación humeral con peso', 1, '8/lado', 0),
        _ex('pdg_flex_plio',    'Flexiones pliométricas con altura', 3, 'Máximas (12-14)', 30),
        _ex('pdg_jalon_uni',    'Jalón unilateral en polea', 4, '14', 60),
        _ex('pdg_press_hom_uni','Press de hombro unilateral', 4, '14', 60),
        _ex('pdg_elev_lat_drop','Elevaciones laterales - Drop set', 4, '12', 60, 'RIR 0 - Al fallo'),
        _ex('pdg_remo_seal',    'Remo seal', 4, '12', 60),
        _ex('pdg_curl_bic_mc',  'Curl de bíceps con mancuerna', 4, '14', 60),
        _ex('pdg_skull',        'Skull crusher', 4, '14', 60),
        _ex('pdg_liss_torso',   'Cardio LISS', 1, '5/15/5 min (baja/moderada/baja)', 0),
      ],
      3: [
        _ex('pdg_m_rockback',     'Movilidad | Leg Rockback', 1, '8/lado', 0),
        _ex('pdg_m_standing',     'Movilidad | Standing reach down fwd-back', 1, '6', 0),
        _ex('pdg_hiperext',       'Hiperextensión', 2, '16', 30),
        _ex('pdg_sent_libre_ap',  'Sentadilla libre | barra alta (aproximación)', 2, '6-8', 60),
        _ex('pdg_sent_libre',     'Sentadilla libre | barra alta', 3, '6', 90),
        _ex('pdg_pmr_uni_mc',     'Peso muerto rumano unilateral con mancuernas', 2, '10', 45),
        _ex('pdg_skier',          'Skier swings con disco', 3, '10', 60),
        _ex('pdg_pat_glut_pol',   'Patada de glúteo en polea', 2, '14', 60),
        _ex('pdg_curl_femoral',   'Curl de femoral', 3, '14', 60),
        _ex('pdg_gemelo_prensa',  'Gemelo en prensa', 3, '15', 60),
        _ex('pdg_core_cr_res',    'Core | Crunch abdominal con resistencia', 2, '16', 30),
        _ex('pdg_core_rolls',     'Core | Rollouts con barra', 2, '6-8', 30),
      ],
      5: [
        _ex('pdg_ht_uni_sp',      'Hip thrust unilateral sin peso', 3, '14', 0),
        _ex('pdg_pm_sumo_aprox',  'Peso muerto sumo (aproximación)', 2, '4', 30),
        _ex('pdg_pm_sumo',        'Peso muerto sumo', 3, '6/8', 75),
        _ex('pdg_landmine',       'Landmine thruster', 3, '12', 60),
        _ex('pdg_remo_gir_pol',   'Remo gironda en polea', 3, '10-12', 90),
        _ex('pdg_press_banc_mc',  'Press banca inclinado con mancuernas', 4, '14', 90),
        _ex('pdg_remo_menton',    'Remo al mentón en polea', 4, '12', 60),
        _ex('pdg_delt_post_pol',  'Deltoides posterior en polea', 3, '15', 60),
        _ex('pdg_salt_lat_cj',    'Saltos laterales al cajón | Progresión', 2, '10', 30),
        _ex('pdg_core_mcgill',    'Core | McGill crunch', 2, '16', 30),
        _ex('pdg_samurai_banded', 'Samurai banded pulls', 2, '20', 30),
      ],
      6: [
        _ex('pdg_hiit_lat_ld',    'HIIT | Lateral lunge drop', 3, '30s', 30),
        _ex('pdg_hiit_pl_thrust', 'HIIT | Plank thrust', 3, '30s', 30),
        _ex('pdg_hiit_side_bound','HIIT | Side bound launches', 3, '30s', 30),
        _ex('pdg_core_mt_clm',    'Core | Mountain climbers', 3, '30s', 30),
        _ex('pdg_hiit_rocket_tap','HIIT | Rocket launch taps', 3, '30s', 30),
      ]
    },
    // S5
    {
      1: [
        _ex('pdg_m_cat_camel',  'Movilidad | Cat camel', 1, '10', 0),
        _ex('pdg_m_cossak',     'Movilidad | Cossak squat', 1, '8/lado', 0),
        _ex('pdg_m_flex_peso',  'Movilidad | Flexión de tobillo con peso', 1, '30s/lado', 0),
        _ex('pdg_abd_iso',      'Abducción de cadera isométrica con resistencia', 8, '20s iso', 10),
        _ex('pdg_ht_aprox',     'Hip Thrust (aproximación)', 2, '6', 45),
        _ex('pdg_ht',           'Hip Thrust', 3, '8/10', 90),
        _ex('pdg_sq_rebote',    'Sentadilla con rebote', 2, '10', 60),
        _ex('pdg_bulg_mp',      'Sentadilla búlgara en multipower', 3, '8-12', 90),
        _ex('pdg_box_jumps',    'Box jumps | Progresión', 3, '10', 30),
        _ex('pdg_core_pike',    'Core | Pike plank en fitball', 2, '10', 30),
        _ex('pdg_core_kb_wm',   'Core | KB Windmill', 2, '12', 30),
      ],
      2: [
        _ex('pdg_m_snow',        'Movilidad | Prone snow angels', 1, '10', 0),
        _ex('pdg_m_rlunge_r',    'Movilidad | Runners lunge with reach', 1, '6/lado', 0),
        _ex('pdg_m_rot_hum',     'Movilidad | Rotación humeral con peso', 1, '8/lado', 0),
        _ex('pdg_flex_plio',     'Flexiones pliométricas con altura', 3, 'Máximas (12-14)', 60),
        _ex('pdg_jalon_uni',     'Jalón unilateral en polea', 4, '14', 60),
        _ex('pdg_press_hom_mc',  'Press de hombro con mancuernas', 4, '14', 60),
        _ex('pdg_elev_lat_drop', 'Elevaciones laterales - Drop set', 3, '12', 60, 'Descansa 2 min tras cada drop'),
        _ex('pdg_remo_seal',     'Remo seal', 4, '12', 60),
        _ex('pdg_curl_bic_mc',   'Curl de bíceps con mancuerna', 4, '14', 60),
        _ex('pdg_skull',         'Skull crusher', 4, '14', 60),
        _ex('pdg_liss_torso',    'Cardio LISS', 1, '27 min (5+17+5)', 0),
      ],
      3: [
        _ex('pdg_m_rockback',     'Movilidad | Leg Rockback', 1, '8/lado', 0),
        _ex('pdg_m_standing',     'Movilidad | Standing reach down fwd-back', 1, '6', 0),
        _ex('pdg_hiperext',       'Hiperextensión', 2, '16', 30),
        _ex('pdg_sent_libre_ap',  'Sentadilla libre | barra alta (aproximación)', 2, '6-8', 38),
        _ex('pdg_sent_libre',     'Sentadilla libre | barra alta', 3, '6', 90),
        _ex('pdg_pmr_uni_mc',     'Peso muerto rumano unilateral con mancuernas', 2, '10', 60),
        _ex('pdg_skier',          'Skier swings con disco', 3, '12', 60),
        _ex('pdg_pat_glut_pol',   'Patada de glúteo en polea', 3, '14 - fallo', 90),
        _ex('pdg_curl_femoral',   'Curl de femoral', 3, '14 - fallo', 90),
        _ex('pdg_gemelo_prensa',  'Gemelo en prensa', 3, '15 - fallo', 90),
        _ex('pdg_core_cr_res',    'Core | Crunch abdominal con resistencia', 2, '16', 30),
        _ex('pdg_core_rolls',     'Core | Rollouts con barra', 2, '6-8', 30),
      ],
      5: [
        _ex('pdg_ht_uni_sp',      'Hip thrust unilateral sin peso', 3, '14', 0),
        _ex('pdg_pm_sumo_aprox',  'Peso muerto sumo (aproximación)', 2, '4', 45),
        _ex('pdg_pm_sumo',        'Peso muerto sumo', 3, '6/8', 75),
        _ex('pdg_landmine',       'Landmine thruster', 3, '12', 60),
        _ex('pdg_remo_gir_pol',   'Remo gironda en polea', 3, '10-12 fallo', 90),
        _ex('pdg_press_banc_mc',  'Press banca inclinado con mancuernas', 4, '14 fallo', 90),
        _ex('pdg_remo_menton',    'Remo al mentón en polea', 4, '12', 60),
        _ex('pdg_delt_post_pol',  'Deltoides posterior en polea', 3, '15', 60),
        _ex('pdg_salt_lat_cj',    'Saltos laterales al cajón | Progresión', 2, '10', 30),
        _ex('pdg_core_mcgill',    'Core | McGill crunch', 2, '16', 30),
        _ex('pdg_samurai_banded', 'Samurai banded pulls', 2, '20', 30),
      ],
      6: [
        _ex('pdg_hiit_sq_knee',   'HIIT | Sentadilla + toque de rodilla', 3, '30s', 30),
        _ex('pdg_core_knee_toe',  'Core | Knee to toe taps', 3, '30s', 30),
        _ex('pdg_hiit_sprint',    'HIIT | Sprint estático', 3, '30s', 30),
        _ex('pdg_core_kick_sits', 'Core | Kick sits tap', 3, '30s', 30),
        _ex('pdg_hiit_piv_180',   'HIIT | Pivot squat jumps 180°', 3, '30s', 30),
      ]
    },
    // S6 (deload)
    {
      1: [
        _ex('pdg_m_cat_camel',  'Movilidad | Cat camel', 1, '10', 0),
        _ex('pdg_m_cossak',     'Movilidad | Cossak squat', 1, '8/lado', 0),
        _ex('pdg_m_flex_peso',  'Movilidad | Flexión de tobillo con peso', 1, '30s/lado', 0),
        _ex('pdg_abd_iso',      'Abducción de cadera isométrica con resistencia', 8, '20s iso', 10),
        _ex('pdg_ht_aprox',     'Hip Thrust (aproximación)', 2, '6', 45),
        _ex('pdg_ht',           'Hip Thrust', 3, '8/10', 120),
        _ex('pdg_sq_rebote',    'Sentadilla con rebote', 2, '10', 60),
        _ex('pdg_bulg_mp',      'Sentadilla búlgara en multipower', 3, '8-12', 90),
        _ex('pdg_box_jumps',    'Box jumps | Progresión', 3, '10', 30),
        _ex('pdg_core_pike',    'Core | Pike plank en fitball', 2, '10', 30),
        _ex('pdg_core_kb_wm',   'Core | KB Windmill', 2, '12', 30),
      ],
      2: [
        _ex('pdg_m_snow',        'Movilidad | Prone snow angels', 1, '10', 0),
        _ex('pdg_m_rlunge_r',    'Movilidad | Runners lunge with reach', 1, '6/lado', 0),
        _ex('pdg_m_rot_hum',     'Movilidad | Rotación humeral con peso', 1, '8/lado', 0),
        _ex('pdg_flex_plio',     'Flexiones pliométricas con altura', 3, 'Máximas (12-14)', 60),
        _ex('pdg_jalon_uni',     'Jalón unilateral en polea', 4, '14', 60),
        _ex('pdg_press_hom_uni', 'Press de hombro unilateral', 4, '14', 60),
        _ex('pdg_elev_lat_drop', 'Elevaciones laterales - Drop set', 3, '12', 90),
        _ex('pdg_remo_seal',     'Remo seal', 4, '12', 90),
        _ex('pdg_curl_bic_mc',   'Curl de bíceps con mancuerna', 4, '14', 60),
        _ex('pdg_skull',         'Skull crusher', 4, '14', 60),
        _ex('pdg_liss_torso',    'Cardio LISS', 1, '27 min (5+17+5)', 0),
      ],
      3: [
        _ex('pdg_m_rockback',     'Movilidad | Leg Rockback', 1, '8/lado', 0),
        _ex('pdg_m_standing',     'Movilidad | Standing reach down fwd-back', 1, '6', 0),
        _ex('pdg_hiperext',       'Hiperextensión', 2, '16', 30),
        _ex('pdg_sent_libre_ap',  'Sentadilla libre | barra alta (aproximación)', 2, '6-8', 45),
        _ex('pdg_sent_libre',     'Sentadilla libre | barra alta', 3, '6/8', 75),
        _ex('pdg_pmr_uni_mc',     'Peso muerto rumano unilateral con mancuernas', 2, '12', 90),
        _ex('pdg_skier',          'Skier swings con disco', 3, '12', 60),
        _ex('pdg_pat_glut_pol',   'Patada de glúteo en polea', 3, '14', 90),
        _ex('pdg_curl_femoral',   'Curl de femoral', 3, '14', 90),
        _ex('pdg_soleo_mc',       'Sóleo sentado con mancuernas', 3, '20', 60),
        _ex('pdg_core_pl_inv',    'Core | Plancha inversa con toques de rodilla', 2, '30s', 30),
        _ex('pdg_core_rtwist',    'Core | Russian twist con disco', 3, '20', 30),
      ],
      5: [
        _ex('pdg_ht_uni_sp',      'Hip thrust unilateral sin peso', 3, '14', 0),
        _ex('pdg_pm_sumo_aprox',  'Peso muerto sumo (aproximación)', 2, '4', 30),
        _ex('pdg_pm_sumo',        'Peso muerto sumo', 3, '6/8', 120),
        _ex('pdg_landmine',       'Landmine thruster', 3, '12', 60),
        _ex('pdg_remo_gir_pol',   'Remo gironda en polea', 3, '10-12', 90),
        _ex('pdg_press_banc_mc',  'Press banca inclinado con mancuernas', 4, '14', 90),
        _ex('pdg_remo_menton',    'Remo al mentón en polea', 4, '12', 60),
        _ex('pdg_delt_post_pol',  'Deltoides posterior en polea', 3, '15', 60),
        _ex('pdg_salt_lat_cj',    'Saltos laterales al cajón | Progresión', 2, '10', 30),
        _ex('pdg_samurai_pol',    'Samurai pulls en polea', 2, '16', 60),
        _ex('pdg_core_elev_col',  'Core | Elevación de piernas colgada', 2, '10', 30),
      ],
      6: [
        _ex('pdg_hiit_pris_ss',   'HIIT | Prisoner side to side squats', 3, '30s', 30),
        _ex('pdg_core_jj_plank',  'Core | Jumping jacks plank', 3, '30s', 30),
        _ex('pdg_hiit_calf',      'HIIT | Calf jumps', 3, '30s', 30),
        _ex('pdg_hiit_spider_l',  'HIIT | Spider lunges', 3, '30s', 30),
        _ex('pdg_hiit_remo_res',  'HIIT | Remo con salto y resistencia', 3, '30s', 30),
      ]
    },
    // ───── FASE 2 (semanas 7-12, 6 días/sem) ─────
    // S7
    {
      1: [
        _ex('pdg_m_cat_camel',  'Movilidad | Cat camel', 1, '10', 0),
        _ex('pdg_m_cossak',     'Movilidad | Cossak squat', 1, '8/lado', 0),
        _ex('pdg_m_flex_peso',  'Movilidad | Flexión de tobillo con peso', 1, '30s/lado', 0),
        _ex('pdg_abd_res_180',  'Abducción de cadera con resistencia a 180°', 2, '16', 0),
        _ex('pdg_pmr_aprox',    'Peso muerto rumano (aproximación)', 2, '6', 52),
        _ex('pdg_pmr',          'Peso muerto rumano', 3, '8', 90),
        _ex('pdg_rack_kb_sq',   'Rack kettlebell squat', 2, '14', 60),
        _ex('pdg_sq_curtsy',    'Sentadilla + Curtsy lunge con disco', 2, '8', 60),
        _ex('pdg_box_j_rod',    'Box jump desde rodillas | Progresión', 3, '6', 60),
        _ex('pdg_ball_wall',    'Ball wall lateral', 2, '10', 30),
        _ex('pdg_core_pl_dist', 'Core | Plancha con manos distanciadas', 2, '60s', 30),
      ],
      2: [
        _ex('pdg_m_snow',        'Movilidad | Prone snow angels', 1, '10', 0),
        _ex('pdg_m_rlunge_r',    'Movilidad | Runners lunge with reach', 1, '6/lado', 0),
        _ex('pdg_m_rot_hum',     'Movilidad | Rotación humeral con peso', 1, '8/lado', 0),
        _ex('pdg_flex_plio',     'Flexiones pliométricas', 1, 'Máximas (8-10)', 10),
        _ex('pdg_press_banc_mc', 'Press banca con mancuernas', 3, '12', 90),
        _ex('pdg_pullover_pol',  'Pull over en polea', 4, '14', 60),
        _ex('pdg_ball_pushes',   'Ball pushes', 3, '14', 30),
        _ex('pdg_elev_lat_pol',  'Elevaciones laterales en polea', 4, '14', 60),
        _ex('pdg_remo_gir_uni',  'Remo gironda unilateral en polea', 4, '12', 60),
        _ex('pdg_curl_bic_pie',  'Curl de bíceps de pie', 4, '14', 60),
        _ex('pdg_ext_tri_pol',   'Extensión de tríceps en polea', 4, '16', 60),
        _ex('pdg_liss_torso',    'Cardio LISS', 1, '25 min (5+15+5)', 0),
      ],
      3: [
        _ex('pdg_m_flex_rod', 'Movilidad | Flexión de tobillo de rodillas', 1, '10/lado', 0),
        _ex('pdg_m_aduc_kb',  'Movilidad | Aductores con kettlebell', 1, '6/lado', 0),
        _ex('pdg_sent_libre_ap', 'Sentadilla libre | barra alta (aproximación)', 2, '6-8', 52),
        _ex('pdg_sent_libre', 'Sentadilla libre | barra alta', 3, '4/6/8', 90, 'Pirámide'),
        _ex('pdg_glute_br_b', 'Glute bridge con barra', 3, '10', 90),
        _ex('pdg_bulg_goblet','Sentadilla búlgara goblet', 3, '16', 60),
        _ex('pdg_kb_sw_uni',  'Kettlebell swing unilateral', 3, '12', 30),
        _ex('pdg_pull_thru',  'Pull through en polea', 2, '14', 60),
        _ex('pdg_curl_fem_fb','Curl de femoral con fitball', 3, '14', 60),
        _ex('pdg_hiit_drop_sq','HIIT | Drop squats con disco', 3, '12', 30),
        _ex('pdg_core_pl_inv',  'Core | Plancha inversa con toques de rodilla', 2, '30s', 30),
        _ex('pdg_core_rtwist',  'Core | Russian twist con disco', 2, '20', 30),
      ],
      4: [ _ex('pdg_liss_d4', 'Cardio LISS', 1, '25 min', 0, 'Al aire libre — ritmo bajo/moderado') ],
      5: [
        _ex('pdg_gb_uni_sp',    'Glute bridge unilateral sin peso', 2, '14', 0),
        _ex('pdg_sent_sumo',    'Sentadilla sumo', 3, '12', 60),
        _ex('pdg_snatch_disco', 'Snatch con disco', 3, '10', 30),
        _ex('pdg_remo_barra_90','Remo con barra a 90°', 3, '10', 60),
        _ex('pdg_cruce_poleas', 'Cruce de poleas ascendente', 3, '10-12', 60),
        _ex('pdg_elev_lf_mc',   'Elevaciones laterales + frontales con mancuernas', 4, '10', 60),
        _ex('pdg_delt_post_mq', 'Deltoides posterior en máquina', 3, '12', 60),
        _ex('pdg_samurai_pol',  'Samurai pulls en polea', 2, '8', 60),
        _ex('pdg_core_elev_col','Core | Elevación de piernas colgada', 2, '12', 30),
      ],
      6: [
        _ex('pdg_hiit_side2side','HIIT | Side to side bounds', 3, '30s', 30),
        _ex('pdg_hiit_burpee_ns','HIIT | Burpee sin salto', 3, '30s', 30),
        _ex('pdg_hiit_rock_j',   'HIIT | Rocket jump squat taps', 3, '30s', 30),
        _ex('pdg_hiit_bench_j',  'HIIT | Bench over jumps', 3, '30s', 30),
        _ex('pdg_hiit_jj_sb',    'HIIT | Jumping jacks sin brazos', 3, '30s', 30),
      ]
    },
    // S8
    {
      1: [
        _ex('pdg_m_cat_camel',  'Movilidad | Cat camel', 1, '10', 0),
        _ex('pdg_m_cossak',     'Movilidad | Cossak squat', 1, '8/lado', 0),
        _ex('pdg_m_flex_peso',  'Movilidad | Flexión de tobillo con peso', 1, '30s/lado', 0),
        _ex('pdg_abd_res_180',  'Abducción de cadera con resistencia a 180°', 2, '16', 0),
        _ex('pdg_pmr_aprox',    'Peso muerto rumano (aproximación)', 2, '6', 45),
        _ex('pdg_pmr',          'Peso muerto rumano', 3, '6/8', 75),
        _ex('pdg_rack_kb_sq',   'Rack kettlebell squat', 3, '14', 60),
        _ex('pdg_sq_curtsy',    'Sentadilla + Curtsy lunge con disco', 2, '8', 60),
        _ex('pdg_box_j_rod',    'Box jump desde rodillas | Progresión', 3, '6', 60),
        _ex('pdg_core_pike',    'Core | Pike plank en fitball', 2, '12', 30),
        _ex('pdg_core_kb_wm',   'Core | KB Windmill', 2, '14', 30),
      ],
      2: [
        _ex('pdg_m_snow',        'Movilidad | Prone snow angels', 1, '10', 0),
        _ex('pdg_m_rlunge_r',    'Movilidad | Runners lunge with reach', 1, '6/lado', 0),
        _ex('pdg_m_rot_hum',     'Movilidad | Rotación humeral con peso', 1, '8/lado', 0),
        _ex('pdg_flex_plio',     'Flexiones pliométricas', 3, 'Máximas (8-10)', 60),
        _ex('pdg_press_banc_mc', 'Press banca con mancuernas', 3, '12', 90),
        _ex('pdg_pullover_pol',  'Pull over en polea', 4, '14', 60),
        _ex('pdg_ball_pushes',   'Ball pushes', 3, '14', 30),
        _ex('pdg_elev_lat_pol',  'Elevaciones laterales en polea', 4, '14', 60),
        _ex('pdg_remo_gir_uni',  'Remo gironda unilateral en polea', 4, '12', 60),
        _ex('pdg_curl_bic_pie',  'Curl de bíceps de pie', 4, '14', 60),
        _ex('pdg_ext_tri_pol',   'Extensión de tríceps en polea', 4, '16', 60),
        _ex('pdg_liss_torso',    'Cardio LISS', 1, '25 min (5+15+5)', 0),
      ],
      3: [
        _ex('pdg_m_flex_rod', 'Movilidad | Flexión de tobillo de rodillas', 1, '10/lado', 0),
        _ex('pdg_m_aduc_kb',  'Movilidad | Aductores con kettlebell', 1, '6/lado', 0),
        _ex('pdg_sent_libre_ap','Sentadilla libre | barra alta (aproximación)', 2, '6-8', 60),
        _ex('pdg_sent_libre',   'Sentadilla libre | barra alta', 3, '4/6', 105),
        _ex('pdg_glute_br_b',   'Glute bridge con barra', 3, '10', 90),
        _ex('pdg_bulg_goblet',  'Sentadilla búlgara goblet', 3, '16', 60),
        _ex('pdg_kb_sw_uni',    'Kettlebell swing unilateral', 3, '12', 30),
        _ex('pdg_pull_thru',    'Pull through en polea', 2, '14', 60),
        _ex('pdg_curl_fem_fb',  'Curl de femoral con fitball', 3, '14', 60),
        _ex('pdg_hiit_drop_sq', 'HIIT | Drop squats con disco', 3, '12', 30),
        _ex('pdg_core_cr_res',  'Core | Crunch abdominal con resistencia', 2, '18', 30),
        _ex('pdg_core_rolls',   'Core | Rollouts con barra', 3, '8-10', 30),
      ],
      4: [ _ex('pdg_liss_d4', 'Cardio LISS', 1, '30 min', 0, 'Al aire libre') ],
      5: [
        _ex('pdg_gb_uni_sp',     'Glute bridge unilateral sin peso', 2, '14', 0),
        _ex('pdg_sent_sumo',     'Sentadilla sumo', 3, '12', 60),
        _ex('pdg_snatch_disco',  'Snatch con disco', 3, '10', 30),
        _ex('pdg_aus_chinups',   'Australian chin ups', 3, '10', 60),
        _ex('pdg_cruce_poleas',  'Cruce de poleas ascendente', 3, '10-12', 60),
        _ex('pdg_elev_lf_mc',    'Elevaciones laterales + frontales con mancuernas', 4, '10', 60),
        _ex('pdg_delt_post_mq',  'Deltoides posterior en máquina', 3, '12', 60),
        _ex('pdg_core_mcgill',   'Core | McGill crunch', 2, '16', 30),
        _ex('pdg_samurai_banded','Samurai banded pulls', 2, '20', 30),
      ],
      6: [
        _ex('pdg_hiit_side_bound','HIIT | Side bound launches', 3, '30s', 30),
        _ex('pdg_core_jjplank',   'Core | Jumping jacks plank', 3, '30s', 30),
        _ex('pdg_hiit_tuck_j',    'HIIT | Tuck jumps', 3, '30s', 30),
        _ex('pdg_core_kick_sits', 'Core | Kick sits', 3, '30s', 30),
        _ex('pdg_hiit_shuffle',   'HIIT | Shuffle taps', 3, '30s', 30),
      ]
    },
    // S9
    {
      1: [
        _ex('pdg_m_cat_camel',  'Movilidad | Cat camel', 1, '10', 0),
        _ex('pdg_m_cossak',     'Movilidad | Cossak squat', 1, '8/lado', 0),
        _ex('pdg_m_flex_peso',  'Movilidad | Flexión de tobillo con peso', 1, '30s/lado', 0),
        _ex('pdg_abd_res_180',  'Abducción de cadera con resistencia a 180°', 2, '16', 0),
        _ex('pdg_pmr_aprox',    'Peso muerto rumano (aproximación)', 2, '6', 45),
        _ex('pdg_pmr',          'Peso muerto rumano', 3, '6/8', 75),
        _ex('pdg_rack_kb_sq',   'Rack kettlebell squat', 3, '14', 60),
        _ex('pdg_sq_curtsy',    'Sentadilla + Curtsy lunge con disco', 2, '8', 60),
        _ex('pdg_box_j_rod',    'Box jump desde rodillas | Progresión', 3, '8', 30),
        _ex('pdg_ball_wall',    'Ball wall lateral', 2, '10', 30),
        _ex('pdg_core_pl_dist', 'Core | Plancha con manos distanciadas', 2, '60s', 30),
      ],
      2: [
        _ex('pdg_m_snow',        'Movilidad | Prone snow angels', 1, '10', 0),
        _ex('pdg_m_rlunge_r',    'Movilidad | Runners lunge with reach', 1, '6/lado', 0),
        _ex('pdg_m_rot_hum',     'Movilidad | Rotación humeral con peso', 1, '8/lado', 0),
        _ex('pdg_flex_plio',     'Flexiones pliométricas', 4, 'Máximas (8-10)', 60),
        _ex('pdg_press_banc_mc', 'Press banca con mancuernas', 3, '12', 90),
        _ex('pdg_pullover_pol',  'Pull over en polea', 4, '14', 60),
        _ex('pdg_ball_pushes',   'Ball pushes', 3, '16', 30),
        _ex('pdg_elev_lat_pol',  'Elevaciones laterales en polea', 4, '14', 60),
        _ex('pdg_remo_gir_uni',  'Remo gironda unilateral en polea', 4, '12', 60),
        _ex('pdg_curl_bic_pie',  'Curl de bíceps de pie', 4, '14', 60),
        _ex('pdg_ext_tri_pol',   'Extensión de tríceps en polea', 4, '16', 60),
        _ex('pdg_liss_torso',    'Cardio LISS', 1, '25 min (5+15+5)', 0),
      ],
      3: [
        _ex('pdg_m_flex_rod', 'Movilidad | Flexión de tobillo de rodillas', 1, '10/lado', 0),
        _ex('pdg_m_aduc_kb',  'Movilidad | Aductores con kettlebell', 1, '6/lado', 0),
        _ex('pdg_sent_libre_ap','Sentadilla libre | barra alta (aproximación)', 2, '6-8', 60),
        _ex('pdg_sent_libre',   'Sentadilla libre | barra alta', 3, '4', 120),
        _ex('pdg_glute_br_b',   'Glute bridge con barra', 3, '10', 60),
        _ex('pdg_bulg_goblet',  'Sentadilla búlgara goblet', 3, '16', 60),
        _ex('pdg_kb_sw_uni',    'Kettlebell swing unilateral', 3, '12', 30),
        _ex('pdg_pull_thru',    'Pull through en polea', 2, '14', 60),
        _ex('pdg_curl_fem_fb',  'Curl de femoral con fitball', 3, '14', 60),
        _ex('pdg_hiit_drop_sq', 'HIIT | Drop squats con disco', 3, '12', 30),
        _ex('pdg_core_pl_inv',  'Core | Plancha inversa con toques de rodilla', 2, '16', 30),
        _ex('pdg_core_rtwist',  'Core | Russian twist con disco', 2, '20', 30),
      ],
      4: [ _ex('pdg_liss_d4', 'Cardio LISS', 1, '40 min', 0, 'Al aire libre') ],
      5: [
        _ex('pdg_gb_uni_sp',    'Glute bridge unilateral sin peso', 2, '14', 0),
        _ex('pdg_sent_sumo',    'Sentadilla sumo', 3, '12', 60),
        _ex('pdg_snatch_disco', 'Snatch con disco', 3, '10', 30),
        _ex('pdg_remo_barra_90','Remo con barra a 90°', 3, '10', 90),
        _ex('pdg_cruce_poleas', 'Cruce de poleas ascendente', 3, '10-12', 60),
        _ex('pdg_elev_lf_mc',   'Elevaciones laterales + frontales con mancuernas', 4, '10', 60),
        _ex('pdg_delt_post_mq', 'Deltoides posterior en máquina', 3, '12', 60),
        _ex('pdg_samurai_pol',  'Samurai pulls en polea', 2, '16', 60),
        _ex('pdg_core_elev_col','Core | Elevación de piernas colgada', 2, '12', 30),
      ],
      6: [
        _ex('pdg_hiit_lat_jp',    'HIIT | Lunge lateral jump', 3, '30s', 30),
        _ex('pdg_core_drunk_mt',  'Core | Drunken mountain climbers', 3, '30s', 30),
        _ex('pdg_hiit_sprint_res','HIIT | Sprints con resistencia', 3, '30s', 30),
        _ex('pdg_hiit_walk_piv',  'HIIT | Walking pivot squats', 3, '30s', 30),
        _ex('pdg_hiit_jumping_j', 'HIIT | Jumping jacks', 3, '30s', 30),
      ]
    },
    // S10
    {
      1: [
        _ex('pdg_m_cat_camel',  'Movilidad | Cat camel', 1, '10', 0),
        _ex('pdg_m_cossak',     'Movilidad | Cossak squat', 1, '8/lado', 0),
        _ex('pdg_m_flex_peso',  'Movilidad | Flexión de tobillo con peso', 1, '30s/lado', 0),
        _ex('pdg_abd_res_180',  'Abducción de cadera con resistencia a 180°', 2, '16', 0),
        _ex('pdg_pmr_aprox',    'Peso muerto rumano (aproximación)', 2, '6', 60),
        _ex('pdg_pmr',          'Peso muerto rumano', 3, '6/8', 75),
        _ex('pdg_rack_kb_sq',   'Rack kettlebell squat', 3, '14', 60),
        _ex('pdg_sq_curtsy',    'Sentadilla + Curtsy lunge con disco', 3, '8', 60),
        _ex('pdg_box_j_rod',    'Box jump desde rodillas | Progresión', 3, '8', 60),
        _ex('pdg_core_pike',    'Core | Pike plank en fitball', 2, '12', 30),
        _ex('pdg_core_kb_wm',   'Core | KB Windmill', 2, '12', 30),
      ],
      2: [
        _ex('pdg_m_snow',        'Movilidad | Prone snow angels', 1, '10', 0),
        _ex('pdg_m_rlunge_r',    'Movilidad | Runners lunge with reach', 1, '6/lado', 0),
        _ex('pdg_m_rot_hum',     'Movilidad | Rotación humeral con peso', 1, '8/lado', 0),
        _ex('pdg_flex_plio',     'Flexiones pliométricas', 4, 'Máximas (10-12)', 0),
        _ex('pdg_press_banc_mc', 'Press banca con mancuernas', 4, '12', 90),
        _ex('pdg_pullover_pol',  'Pull over en polea', 4, '14', 60),
        _ex('pdg_ball_pushes',   'Ball pushes', 3, '16', 30),
        _ex('pdg_elev_lat_pol',  'Elevaciones laterales en polea', 4, '14', 60),
        _ex('pdg_remo_gir_uni',  'Remo gironda unilateral en polea', 4, '12', 60),
        _ex('pdg_curl_bic_pie',  'Curl de bíceps de pie', 4, '14', 60),
        _ex('pdg_ext_tri_pol',   'Extensión de tríceps en polea', 4, '16', 60),
        _ex('pdg_liss_torso',    'Cardio LISS', 1, '25 min (5+15+5)', 0),
      ],
      3: [
        _ex('pdg_m_flex_rod', 'Movilidad | Flexión de tobillo de rodillas', 1, '10/lado', 0),
        _ex('pdg_m_aduc_kb',  'Movilidad | Aductores con kettlebell', 1, '6/lado', 0),
        _ex('pdg_sent_libre_ap','Sentadilla libre | barra alta (aproximación)', 2, '6-8', 45),
        _ex('pdg_sent_libre',   'Sentadilla libre | barra alta', 3, '4/6', 105),
        _ex('pdg_glute_br_b',   'Glute bridge con barra', 3, '10', 60),
        _ex('pdg_bulg_goblet',  'Sentadilla búlgara goblet', 3, '16', 60),
        _ex('pdg_kb_sw_uni',    'Kettlebell swing unilateral', 3, '12', 30),
        _ex('pdg_pull_thru',    'Pull through en polea', 2, '14', 60),
        _ex('pdg_curl_fem_fb',  'Curl de femoral con fitball', 3, '14', 60),
        _ex('pdg_hiit_drop_sq', 'HIIT | Drop squats con disco', 3, '12', 30),
        _ex('pdg_core_cr_res',  'Core | Crunch abdominal con resistencia', 2, '18', 30),
        _ex('pdg_core_rolls',   'Core | Rollouts con barra', 3, '10', 30),
      ],
      4: [ _ex('pdg_liss_d4', 'Cardio LISS', 1, '45 min', 0, 'Al aire libre') ],
      5: [
        _ex('pdg_gb_uni_sp',   'Glute bridge unilateral sin peso', 2, '14', 0),
        _ex('pdg_sent_sumo',   'Sentadilla sumo', 3, '12', 60),
        _ex('pdg_snatch_disco','Snatch con disco', 3, '10', 30),
        _ex('pdg_aus_chinups', 'Australian chin ups', 3, '12', 60),
        _ex('pdg_cruce_poleas','Cruce de poleas ascendente', 3, '10-12', 60),
        _ex('pdg_elev_lf_mc',  'Elevaciones laterales + frontales con mancuernas', 4, '10', 60),
        _ex('pdg_delt_post_mq','Deltoides posterior en máquina', 3, '12', 60),
        _ex('pdg_core_mcgill', 'Core | McGill crunch', 2, '16', 30),
        _ex('pdg_samurai_banded','Samurai banded pulls', 2, '20', 30),
      ],
      6: [
        _ex('pdg_hiit_piv_360',   'HIIT | Pivot squat jumps 360°', 3, '30s', 30),
        _ex('pdg_hiit_burpees',   'HIIT | Burpees', 3, '30s', 30),
        _ex('pdg_hiit_side2side', 'HIIT | Side to side bounds', 3, '30s', 30),
        _ex('pdg_core_fwd_kick',  'Core | Forward kick sits', 3, '30s', 30),
        _ex('pdg_hiit_fast_feet', 'HIIT | Fast feet', 3, '30s', 30),
      ]
    },
    // S11
    {
      1: [
        _ex('pdg_m_cat_camel',  'Movilidad | Cat camel', 1, '10', 0),
        _ex('pdg_m_cossak',     'Movilidad | Cossak squat', 1, '8/lado', 0),
        _ex('pdg_m_flex_peso',  'Movilidad | Flexión de tobillo con peso', 1, '30s/lado', 0),
        _ex('pdg_abd_res_180',  'Abducción de cadera con resistencia a 180°', 2, '16', 0),
        _ex('pdg_pmr_aprox',    'Peso muerto rumano (aproximación)', 2, '6', 45),
        _ex('pdg_pmr',          'Peso muerto rumano', 3, '6/8', 105),
        _ex('pdg_rack_kb_sq',   'Rack kettlebell squat', 3, '14', 60),
        _ex('pdg_sq_curtsy',    'Sentadilla + Curtsy lunge con disco', 3, '8', 60),
        _ex('pdg_box_j_rod',    'Box jump desde rodillas | Progresión', 3, '8', 60),
        _ex('pdg_ball_wall',    'Ball wall lateral', 2, '10', 30),
        _ex('pdg_core_pl_dist', 'Core | Plancha con manos distanciadas', 2, '60s', 30),
      ],
      2: [
        _ex('pdg_m_snow',        'Movilidad | Prone snow angels', 1, '10', 0),
        _ex('pdg_m_rlunge_r',    'Movilidad | Runners lunge with reach', 1, '6/lado', 0),
        _ex('pdg_m_rot_hum',     'Movilidad | Rotación humeral con peso', 1, '8/lado', 0),
        _ex('pdg_flex_plio',     'Flexiones pliométricas', 4, 'Máximas (10-12)', 0),
        _ex('pdg_press_banc_mc', 'Press banca con mancuernas', 4, '12', 90),
        _ex('pdg_pullover_pol',  'Pull over en polea', 4, '14', 60),
        _ex('pdg_ball_pushes',   'Ball pushes', 3, '16', 30),
        _ex('pdg_elev_lat_pol',  'Elevaciones laterales en polea', 4, '14', 60),
        _ex('pdg_remo_gir_uni',  'Remo gironda unilateral en polea', 4, '12', 60),
        _ex('pdg_curl_bic_pie',  'Curl de bíceps de pie', 4, '14', 60),
        _ex('pdg_ext_tri_pol',   'Extensión de tríceps en polea', 4, '16', 60),
        _ex('pdg_liss_torso',    'Cardio LISS', 1, '25 min (5+15+5)', 0),
      ],
      3: [
        _ex('pdg_m_flex_rod', 'Movilidad | Flexión de tobillo de rodillas', 1, '10/lado', 0),
        _ex('pdg_m_aduc_kb',  'Movilidad | Aductores con kettlebell', 1, '6/lado', 0),
        _ex('pdg_sent_libre_ap','Sentadilla libre | barra alta (aproximación)', 2, '6', 45),
        _ex('pdg_sent_libre',   'Sentadilla libre | barra alta', 3, '4/6', 90),
        _ex('pdg_glute_br_b',   'Glute bridge con barra', 3, '10', 60),
        _ex('pdg_bulg_goblet',  'Sentadilla búlgara goblet', 3, '16', 60),
        _ex('pdg_kb_sw_uni',    'Kettlebell swing unilateral', 3, '12', 60),
        _ex('pdg_pull_thru',    'Pull through en polea', 2, '14', 60),
        _ex('pdg_curl_fem_fb',  'Curl de femoral con fitball', 3, '14', 60),
        _ex('pdg_hiit_drop_sq', 'HIIT | Drop squats con disco', 3, '12', 30),
        _ex('pdg_core_pl_inv',  'Core | Plancha inversa con toques de rodilla', 2, '30s', 30),
        _ex('pdg_core_rtwist',  'Core | Russian twist con disco', 3, '20', 30),
      ],
      4: [ _ex('pdg_liss_d4', 'Cardio LISS', 1, '45 min', 0, 'Al aire libre') ],
      5: [
        _ex('pdg_gb_uni_sp',    'Glute bridge unilateral sin peso', 2, '14', 0),
        _ex('pdg_sent_sumo',    'Sentadilla sumo', 3, '12', 60),
        _ex('pdg_snatch_disco', 'Snatch con disco', 3, '10', 30),
        _ex('pdg_remo_barra_90','Remo con barra a 90°', 3, '10', 90),
        _ex('pdg_cruce_poleas', 'Cruce de poleas ascendente', 3, '10-12', 60),
        _ex('pdg_elev_lf_mc',   'Elevaciones laterales + frontales con mancuernas', 4, '10', 60),
        _ex('pdg_delt_post_mq', 'Deltoides posterior en máquina', 3, '12', 60),
        _ex('pdg_core_rolls',   'Core | Rollouts con barra', 2, '8', 30),
      ],
      6: [
        _ex('pdg_hiit_sq_toes', 'HIIT | Sentadilla + toques de pie', 3, '30s', 30),
        _ex('pdg_hiit_burpees', 'HIIT | Burpees', 3, '30s', 30),
        _ex('pdg_hiit_pulse_lu','HIIT | Pulse lunges', 3, '30s', 30),
        _ex('pdg_hiit_calf',    'HIIT | Calf jumps', 3, '30s', 30),
        _ex('pdg_hiit_expl_jj', 'HIIT | Explosive jumping jacks', 3, '30s', 30),
      ]
    },
    // S12 (deload)
    {
      1: [
        _ex('pdg_m_cat_camel',  'Movilidad | Cat camel', 1, '10', 0),
        _ex('pdg_m_cossak',     'Movilidad | Cossak squat', 1, '8/lado', 0),
        _ex('pdg_m_flex_peso',  'Movilidad | Flexión de tobillo con peso', 1, '30s/lado', 0),
        _ex('pdg_abd_res_180',  'Abducción de cadera con resistencia a 180°', 2, '16', 0),
        _ex('pdg_pmr_aprox',    'Peso muerto rumano (aproximación)', 2, '6', 45),
        _ex('pdg_pmr',          'Peso muerto rumano', 3, '6/8', 105),
        _ex('pdg_rack_kb_sq',   'Rack kettlebell squat', 3, '14', 60),
        _ex('pdg_sq_curtsy',    'Sentadilla + Curtsy lunge con disco', 3, '8', 60),
        _ex('pdg_box_j_rod',    'Box jump desde rodillas | Progresión', 3, '8', 60),
        _ex('pdg_core_pike',    'Core | Pike plank en fitball', 2, '12', 30),
        _ex('pdg_core_kb_wm',   'Core | KB Windmill', 2, '12', 30),
      ],
      2: [
        _ex('pdg_m_snow',        'Movilidad | Prone snow angels', 1, '10', 0),
        _ex('pdg_m_rlunge_r',    'Movilidad | Runners lunge with reach', 1, '6/lado', 0),
        _ex('pdg_m_rot_hum',     'Movilidad | Rotación humeral con peso', 1, '8/lado', 0),
        _ex('pdg_flex_plio',     'Flexiones pliométricas', 4, 'Máximas (10-12)', 60),
        _ex('pdg_press_banc_mc', 'Press banca con mancuernas', 4, '12', 90),
        _ex('pdg_pullover_pol',  'Pull over en polea', 4, '14', 60),
        _ex('pdg_ball_pushes',   'Ball pushes', 3, '16', 30),
        _ex('pdg_elev_lat_pol',  'Elevaciones laterales en polea', 4, '14', 60),
        _ex('pdg_remo_gir_uni',  'Remo gironda unilateral en polea', 4, '12', 60),
        _ex('pdg_curl_bic_pie',  'Curl de bíceps de pie', 4, '14', 60),
        _ex('pdg_ext_tri_pol',   'Extensión de tríceps en polea', 4, '16', 60),
        _ex('pdg_liss_torso',    'Cardio LISS', 1, '25 min (5+15+5)', 0),
      ],
      3: [
        _ex('pdg_m_flex_rod', 'Movilidad | Flexión de tobillo de rodillas', 1, '10/lado', 0),
        _ex('pdg_m_aduc_kb',  'Movilidad | Aductores con kettlebell', 1, '6/lado', 0),
        _ex('pdg_sent_libre_ap','Sentadilla libre | barra alta (aproximación)', 2, '6', 60),
        _ex('pdg_sent_libre',   'Sentadilla libre | barra alta', 3, '4-6', 120),
        _ex('pdg_glute_br_b',   'Glute bridge con barra', 3, '10', 60),
        _ex('pdg_bulg_goblet',  'Sentadilla búlgara goblet', 3, '16', 60),
        _ex('pdg_kb_sw_uni',    'Kettlebell swing unilateral', 3, '12', 60),
        _ex('pdg_pull_thru',    'Pull through en polea', 2, '14', 60),
        _ex('pdg_curl_fem_fb',  'Curl de femoral con fitball', 3, '14', 60),
        _ex('pdg_hiit_drop_sq', 'HIIT | Drop squats con disco', 3, '12', 30),
        _ex('pdg_core_cr_res',  'Core | Crunch abdominal con resistencia', 2, '16', 30),
        _ex('pdg_core_rolls',   'Core | Rollouts con barra', 3, '10', 30),
      ],
      4: [ _ex('pdg_liss_d4', 'Cardio LISS', 1, '45 min', 0, 'Al aire libre') ],
      5: [
        _ex('pdg_gb_uni_sp',    'Glute bridge unilateral sin peso', 2, '14', 0),
        _ex('pdg_sent_sumo',    'Sentadilla sumo', 3, '12', 60),
        _ex('pdg_snatch_disco', 'Snatch con disco', 3, '10', 30),
        _ex('pdg_aus_chinups',  'Australian chin ups', 3, '14', 75),
        _ex('pdg_cruce_poleas', 'Cruce de poleas ascendente', 3, '10-12', 60),
        _ex('pdg_elev_lf_mc',   'Elevaciones laterales + frontales con mancuernas', 4, '10', 60),
        _ex('pdg_delt_post_mq', 'Deltoides posterior en máquina', 3, '12', 60),
        _ex('pdg_core_rolls',   'Core | Rollouts con barra', 2, '8', 30),
      ],
      6: [
        _ex('pdg_hiit_lunge_jp',  'HIIT | Lunge jump', 3, '30s', 30),
        _ex('pdg_core_jjtap_plk', 'Core | Jumping jacks taps plank', 3, '30s', 30),
        _ex('pdg_hiit_sq_paso',   'HIIT | Sentadilla + paso atrás', 3, '30s', 30),
        _ex('pdg_core_knee_toe',  'Core | Knee to toe taps', 3, '30s', 30),
        _ex('pdg_hiit_thrust_res','HIIT | Thrusters con resistencia', 3, '30s', 30),
      ]
    }
  ]
};

WORKOUT_PLANS.personas_poco_tiempo = {
  id: 'personas_poco_tiempo',
  name: 'Personas con poco tiempo',
  description: '3 días por semana | 12 semanas progresivas',
  planType: 'phased',
  weeks: 12,
  trainingDays: [1, 3, 5],
  dayMeta: {
    1: { name: 'Día 1 — Pierna · Press', type: 'strength', muscleGroups: ['Piernas', 'Hombros'] },
    3: { name: 'Día 3 — Peso muerto · Press banca', type: 'strength', muscleGroups: ['Espalda', 'Pecho', 'Brazos'] },
    5: { name: 'Día 5 — Accesorio', type: 'strength', muscleGroups: ['Brazos', 'Hombros', 'Espalda'] }
  },
  weeklySchedule: [
    // S1
    {
      1: [
        _ex('ppt_squat_ap', 'Sentadilla | Aproximación', 2, '6', 90),
        _ex('ppt_squat', 'Sentadilla | Trabajo', 3, '8-10', 120),
        _ex('ppt_remo_pecho', 'Remo pecho | Trabajo', 3, '10-12', 90),
        _ex('ppt_press_hom', 'Press con mancuernas', 3, '10-12', 60),
        _ex('ppt_curl_bic', 'Curl de bíceps', 2, '12-14', 45),
      ],
      3: [
        _ex('ppt_dlift_ap', 'Peso muerto | Aproximación', 2, '5', 120),
        _ex('ppt_dlift', 'Peso muerto | Trabajo', 3, '6-8', 180),
        _ex('ppt_press_banc', 'Press banca con mancuernas', 3, '10-12', 90),
        _ex('ppt_remo_int', 'Remo intermedio', 3, '8-10', 90),
        _ex('ppt_ext_tri', 'Extensión de tríceps', 2, '12-14', 45),
      ],
      5: [
        _ex('ppt_lunge_walk', 'Caminar en estocadas', 3, '12/pierna', 60),
        _ex('ppt_pullover', 'Pull over', 3, '12-14', 60),
        _ex('ppt_elev_lat', 'Elevaciones laterales', 3, '12-14', 45),
        _ex('ppt_remo_bajo', 'Remo bajo en polea', 3, '14-16', 60),
        _ex('ppt_flexion_pecho', 'Flexiones pecho', 2, '8-10', 60),
      ],
    },
    // S2
    {
      1: [
        _ex('ppt_squat_ap', 'Sentadilla | Aproximación', 2, '6', 90),
        _ex('ppt_squat', 'Sentadilla | Trabajo', 3, '10-12', 120),
        _ex('ppt_remo_pecho', 'Remo pecho | Trabajo', 3, '12-14', 90),
        _ex('ppt_press_hom', 'Press con mancuernas', 3, '12-14', 60),
        _ex('ppt_curl_bic', 'Curl de bíceps', 2, '14-16', 45),
      ],
      3: [
        _ex('ppt_dlift_ap', 'Peso muerto | Aproximación', 2, '5', 120),
        _ex('ppt_dlift', 'Peso muerto | Trabajo', 3, '8-10', 180),
        _ex('ppt_press_banc', 'Press banca con mancuernas', 3, '12-14', 90),
        _ex('ppt_remo_int', 'Remo intermedio', 3, '10-12', 90),
        _ex('ppt_ext_tri', 'Extensión de tríceps', 2, '14-16', 45),
      ],
      5: [
        _ex('ppt_lunge_walk', 'Caminar en estocadas', 3, '14/pierna', 60),
        _ex('ppt_pullover', 'Pull over', 3, '14-16', 60),
        _ex('ppt_elev_lat', 'Elevaciones laterales', 3, '14-16', 45),
        _ex('ppt_remo_bajo', 'Remo bajo en polea', 3, '16-18', 60),
        _ex('ppt_flexion_pecho', 'Flexiones pecho', 2, '10-12', 60),
      ],
    },
    // S3
    {
      1: [
        _ex('ppt_squat_ap', 'Sentadilla | Aproximación', 2, '6', 90),
        _ex('ppt_squat', 'Sentadilla | Trabajo', 4, '8-10', 120),
        _ex('ppt_remo_pecho', 'Remo pecho | Trabajo', 4, '10-12', 90),
        _ex('ppt_press_hom', 'Press con mancuernas', 4, '10-12', 60),
        _ex('ppt_curl_bic', 'Curl de bíceps', 3, '12-14', 45),
      ],
      3: [
        _ex('ppt_dlift_ap', 'Peso muerto | Aproximación', 2, '5', 120),
        _ex('ppt_dlift', 'Peso muerto | Trabajo', 4, '6-8', 180),
        _ex('ppt_press_banc', 'Press banca con mancuernas', 4, '10-12', 90),
        _ex('ppt_remo_int', 'Remo intermedio', 4, '8-10', 90),
        _ex('ppt_ext_tri', 'Extensión de tríceps', 3, '12-14', 45),
      ],
      5: [
        _ex('ppt_lunge_walk', 'Caminar en estocadas', 4, '12/pierna', 60),
        _ex('ppt_pullover', 'Pull over', 4, '12-14', 60),
        _ex('ppt_elev_lat', 'Elevaciones laterales', 4, '12-14', 45),
        _ex('ppt_remo_bajo', 'Remo bajo en polea', 4, '14-16', 60),
        _ex('ppt_flexion_pecho', 'Flexiones pecho', 3, '8-10', 60),
      ],
    },
    // S4
    {
      1: [
        _ex('ppt_squat_ap', 'Sentadilla | Aproximación', 2, '6', 90),
        _ex('ppt_squat', 'Sentadilla | Trabajo', 4, '10-12', 120),
        _ex('ppt_remo_pecho', 'Remo pecho | Trabajo', 4, '12-14', 90),
        _ex('ppt_press_hom', 'Press con mancuernas', 4, '12-14', 60),
        _ex('ppt_curl_bic', 'Curl de bíceps', 3, '14-16', 45),
      ],
      3: [
        _ex('ppt_dlift_ap', 'Peso muerto | Aproximación', 2, '5', 120),
        _ex('ppt_dlift', 'Peso muerto | Trabajo', 4, '8-10', 180),
        _ex('ppt_press_banc', 'Press banca con mancuernas', 4, '12-14', 90),
        _ex('ppt_remo_int', 'Remo intermedio', 4, '10-12', 90),
        _ex('ppt_ext_tri', 'Extensión de tríceps', 3, '14-16', 45),
      ],
      5: [
        _ex('ppt_lunge_walk', 'Caminar en estocadas', 4, '14/pierna', 60),
        _ex('ppt_pullover', 'Pull over', 4, '14-16', 60),
        _ex('ppt_elev_lat', 'Elevaciones laterales', 4, '14-16', 45),
        _ex('ppt_remo_bajo', 'Remo bajo en polea', 4, '16-18', 60),
        _ex('ppt_flexion_pecho', 'Flexiones pecho', 3, '10-12', 60),
      ],
    },
    // S5
    {
      1: [
        _ex('ppt_squat_ap', 'Sentadilla | Aproximación', 2, '6', 90),
        _ex('ppt_squat', 'Sentadilla | Trabajo', 4, '6-8', 120),
        _ex('ppt_remo_pecho', 'Remo pecho | Trabajo', 4, '10-12', 90),
        _ex('ppt_press_hom', 'Press con mancuernas', 4, '10-12', 60),
        _ex('ppt_curl_bic', 'Curl de bíceps', 3, '12-14', 45),
      ],
      3: [
        _ex('ppt_dlift_ap', 'Peso muerto | Aproximación', 2, '5', 120),
        _ex('ppt_dlift', 'Peso muerto | Trabajo', 4, '5-6', 180),
        _ex('ppt_press_banc', 'Press banca con mancuernas', 4, '10-12', 90),
        _ex('ppt_remo_int', 'Remo intermedio', 4, '8-10', 90),
        _ex('ppt_ext_tri', 'Extensión de tríceps', 3, '12-14', 45),
      ],
      5: [
        _ex('ppt_lunge_walk', 'Caminar en estocadas', 4, '12/pierna', 60),
        _ex('ppt_pullover', 'Pull over', 4, '12-14', 60),
        _ex('ppt_elev_lat', 'Elevaciones laterales', 4, '12-14', 45),
        _ex('ppt_remo_bajo', 'Remo bajo en polea', 4, '14-16', 60),
        _ex('ppt_flexion_pecho', 'Flexiones pecho', 3, '8-10', 60),
      ],
    },
    // S6
    {
      1: [
        _ex('ppt_squat_ap', 'Sentadilla | Aproximación', 2, '6', 90),
        _ex('ppt_squat', 'Sentadilla | Trabajo', 5, '6-8', 120),
        _ex('ppt_remo_pecho', 'Remo pecho | Trabajo', 5, '8-10', 90),
        _ex('ppt_press_hom', 'Press con mancuernas', 5, '8-10', 60),
        _ex('ppt_curl_bic', 'Curl de bíceps', 4, '10-12', 45),
      ],
      3: [
        _ex('ppt_dlift_ap', 'Peso muerto | Aproximación', 2, '5', 120),
        _ex('ppt_dlift', 'Peso muerto | Trabajo', 5, '5-6', 180),
        _ex('ppt_press_banc', 'Press banca con mancuernas', 5, '8-10', 90),
        _ex('ppt_remo_int', 'Remo intermedio', 5, '6-8', 90),
        _ex('ppt_ext_tri', 'Extensión de tríceps', 4, '10-12', 45),
      ],
      5: [
        _ex('ppt_lunge_walk', 'Caminar en estocadas', 5, '10/pierna', 60),
        _ex('ppt_pullover', 'Pull over', 5, '10-12', 60),
        _ex('ppt_elev_lat', 'Elevaciones laterales', 5, '10-12', 45),
        _ex('ppt_remo_bajo', 'Remo bajo en polea', 5, '12-14', 60),
        _ex('ppt_flexion_pecho', 'Flexiones pecho', 4, '8-10', 60),
      ],
    },
    // S7
    {
      1: [
        _ex('ppt_squat_ap', 'Sentadilla | Aproximación', 2, '5', 90),
        _ex('ppt_squat', 'Sentadilla | Trabajo', 4, '4-5', 120),
        _ex('ppt_remo_pecho', 'Remo pecho | Trabajo', 4, '6-8', 90),
        _ex('ppt_press_hom', 'Press con mancuernas', 4, '6-8', 60),
        _ex('ppt_curl_bic', 'Curl de bíceps', 3, '8-10', 45),
      ],
      3: [
        _ex('ppt_dlift_ap', 'Peso muerto | Aproximación', 2, '4', 120),
        _ex('ppt_dlift', 'Peso muerto | Trabajo', 4, '4-5', 180),
        _ex('ppt_press_banc', 'Press banca con mancuernas', 4, '6-8', 90),
        _ex('ppt_remo_int', 'Remo intermedio', 4, '5-6', 90),
        _ex('ppt_ext_tri', 'Extensión de tríceps', 3, '8-10', 45),
      ],
      5: [
        _ex('ppt_lunge_walk', 'Caminar en estocadas', 4, '8/pierna', 60),
        _ex('ppt_pullover', 'Pull over', 4, '8-10', 60),
        _ex('ppt_elev_lat', 'Elevaciones laterales', 4, '8-10', 45),
        _ex('ppt_remo_bajo', 'Remo bajo en polea', 4, '10-12', 60),
        _ex('ppt_flexion_pecho', 'Flexiones pecho', 3, '6-8', 60),
      ],
    },
    // S8
    {
      1: [
        _ex('ppt_squat_ap', 'Sentadilla | Aproximación', 2, '5', 90),
        _ex('ppt_squat', 'Sentadilla | Trabajo', 5, '4-5', 120),
        _ex('ppt_remo_pecho', 'Remo pecho | Trabajo', 5, '6-8', 90),
        _ex('ppt_press_hom', 'Press con mancuernas', 5, '6-8', 60),
        _ex('ppt_curl_bic', 'Curl de bíceps', 4, '8-10', 45),
      ],
      3: [
        _ex('ppt_dlift_ap', 'Peso muerto | Aproximación', 2, '4', 120),
        _ex('ppt_dlift', 'Peso muerto | Trabajo', 5, '4-5', 180),
        _ex('ppt_press_banc', 'Press banca con mancuernas', 5, '6-8', 90),
        _ex('ppt_remo_int', 'Remo intermedio', 5, '5-6', 90),
        _ex('ppt_ext_tri', 'Extensión de tríceps', 4, '8-10', 45),
      ],
      5: [
        _ex('ppt_lunge_walk', 'Caminar en estocadas', 5, '8/pierna', 60),
        _ex('ppt_pullover', 'Pull over', 5, '8-10', 60),
        _ex('ppt_elev_lat', 'Elevaciones laterales', 5, '8-10', 45),
        _ex('ppt_remo_bajo', 'Remo bajo en polea', 5, '10-12', 60),
        _ex('ppt_flexion_pecho', 'Flexiones pecho', 4, '6-8', 60),
      ],
    },
    // S9
    {
      1: [
        _ex('ppt_squat_ap', 'Sentadilla | Aproximación', 2, '6', 90),
        _ex('ppt_squat', 'Sentadilla | Trabajo', 4, '10-12', 120),
        _ex('ppt_remo_pecho', 'Remo pecho | Trabajo', 4, '12-14', 90),
        _ex('ppt_press_hom', 'Press con mancuernas', 4, '12-14', 60),
        _ex('ppt_curl_bic', 'Curl de bíceps', 3, '14-16', 45),
      ],
      3: [
        _ex('ppt_dlift_ap', 'Peso muerto | Aproximación', 2, '5', 120),
        _ex('ppt_dlift', 'Peso muerto | Trabajo', 4, '6-8', 180),
        _ex('ppt_press_banc', 'Press banca con mancuernas', 4, '12-14', 90),
        _ex('ppt_remo_int', 'Remo intermedio', 4, '10-12', 90),
        _ex('ppt_ext_tri', 'Extensión de tríceps', 3, '14-16', 45),
      ],
      5: [
        _ex('ppt_lunge_walk', 'Caminar en estocadas', 4, '14/pierna', 60),
        _ex('ppt_pullover', 'Pull over', 4, '14-16', 60),
        _ex('ppt_elev_lat', 'Elevaciones laterales', 4, '14-16', 45),
        _ex('ppt_remo_bajo', 'Remo bajo en polea', 4, '16-18', 60),
        _ex('ppt_flexion_pecho', 'Flexiones pecho', 3, '10-12', 60),
      ],
    },
    // S10
    {
      1: [
        _ex('ppt_squat_ap', 'Sentadilla | Aproximación', 2, '6', 90),
        _ex('ppt_squat', 'Sentadilla | Trabajo', 5, '8-10', 120),
        _ex('ppt_remo_pecho', 'Remo pecho | Trabajo', 5, '10-12', 90),
        _ex('ppt_press_hom', 'Press con mancuernas', 5, '10-12', 60),
        _ex('ppt_curl_bic', 'Curl de bíceps', 4, '12-14', 45),
      ],
      3: [
        _ex('ppt_dlift_ap', 'Peso muerto | Aproximación', 2, '5', 120),
        _ex('ppt_dlift', 'Peso muerto | Trabajo', 5, '5-6', 180),
        _ex('ppt_press_banc', 'Press banca con mancuernas', 5, '10-12', 90),
        _ex('ppt_remo_int', 'Remo intermedio', 5, '8-10', 90),
        _ex('ppt_ext_tri', 'Extensión de tríceps', 4, '12-14', 45),
      ],
      5: [
        _ex('ppt_lunge_walk', 'Caminar en estocadas', 5, '12/pierna', 60),
        _ex('ppt_pullover', 'Pull over', 5, '12-14', 60),
        _ex('ppt_elev_lat', 'Elevaciones laterales', 5, '12-14', 45),
        _ex('ppt_remo_bajo', 'Remo bajo en polea', 5, '14-16', 60),
        _ex('ppt_flexion_pecho', 'Flexiones pecho', 4, '8-10', 60),
      ],
    },
    // S11
    {
      1: [
        _ex('ppt_squat_ap', 'Sentadilla | Aproximación', 2, '6', 90),
        _ex('ppt_squat', 'Sentadilla | Trabajo', 5, '6-8', 120),
        _ex('ppt_remo_pecho', 'Remo pecho | Trabajo', 5, '8-10', 90),
        _ex('ppt_press_hom', 'Press con mancuernas', 5, '8-10', 60),
        _ex('ppt_curl_bic', 'Curl de bíceps', 4, '10-12', 45),
      ],
      3: [
        _ex('ppt_dlift_ap', 'Peso muerto | Aproximación', 2, '5', 120),
        _ex('ppt_dlift', 'Peso muerto | Trabajo', 5, '4-5', 180),
        _ex('ppt_press_banc', 'Press banca con mancuernas', 5, '8-10', 90),
        _ex('ppt_remo_int', 'Remo intermedio', 5, '6-8', 90),
        _ex('ppt_ext_tri', 'Extensión de tríceps', 4, '10-12', 45),
      ],
      5: [
        _ex('ppt_lunge_walk', 'Caminar en estocadas', 5, '10/pierna', 60),
        _ex('ppt_pullover', 'Pull over', 5, '10-12', 60),
        _ex('ppt_elev_lat', 'Elevaciones laterales', 5, '10-12', 45),
        _ex('ppt_remo_bajo', 'Remo bajo en polea', 5, '12-14', 60),
        _ex('ppt_flexion_pecho', 'Flexiones pecho', 4, '6-8', 60),
      ],
    },
    // S12 (Deload)
    {
      1: [
        _ex('ppt_squat_ap', 'Sentadilla | Aproximación', 2, '6', 90),
        _ex('ppt_squat', 'Sentadilla | Trabajo', 3, '5', 120),
        _ex('ppt_remo_pecho', 'Remo pecho | Trabajo', 3, '6', 90),
        _ex('ppt_press_hom', 'Press con mancuernas', 3, '6', 60),
        _ex('ppt_curl_bic', 'Curl de bíceps', 2, '8', 45),
      ],
      3: [
        _ex('ppt_dlift_ap', 'Peso muerto | Aproximación', 2, '4', 120),
        _ex('ppt_dlift', 'Peso muerto | Trabajo', 3, '3-4', 180),
        _ex('ppt_press_banc', 'Press banca con mancuernas', 3, '6', 90),
        _ex('ppt_remo_int', 'Remo intermedio', 3, '6', 90),
        _ex('ppt_ext_tri', 'Extensión de tríceps', 2, '8', 45),
      ],
      5: [
        _ex('ppt_lunge_walk', 'Caminar en estocadas', 3, '8/pierna', 60),
        _ex('ppt_pullover', 'Pull over', 3, '8', 60),
        _ex('ppt_elev_lat', 'Elevaciones laterales', 3, '8', 45),
        _ex('ppt_remo_bajo', 'Remo bajo en polea', 3, '8', 60),
        _ex('ppt_flexion_pecho', 'Flexiones pecho', 2, '5-6', 60),
      ],
    },
  ] // end weeklySchedule
};

WORKOUT_PLANS.perdida_grasa_2_0 = {
  id: 'perdida_grasa_2_0',
  name: 'Pérdida de Grasa 2.0',
  description: '8 semanas | Fuerza + HIIT + Cardio | 6 días por semana',
  planType: 'phased',
  weeks: 8,
  trainingDays: [1, 2, 3, 4, 5, 6],
  dayMeta: {
    1: { name: 'Día 1 — Tren Inferior', type: 'strength', muscleGroups: ['Piernas', 'Glúteos', 'Core'] },
    2: { name: 'Día 2 — Tren Superior', type: 'strength', muscleGroups: ['Pecho', 'Espalda', 'Hombros', 'Brazos'] },
    3: { name: 'Día 3 — Core + HIIT', type: 'conditioning', muscleGroups: ['Core', 'Cardio'] },
    4: { name: 'Día 4 — Cardio LISS', type: 'cardio', muscleGroups: ['Cardio'] },
    5: { name: 'Día 5 — Fullbody', type: 'strength', muscleGroups: ['Full body'] },
    6: { name: 'Día 6 — Endurance', type: 'conditioning', muscleGroups: ['Cardio', 'Full body'] }
  },
  weeklySchedule: [
    // S1-S2: Semanas iniciales con estructura base similar
    {
      1: [
        _ex('pdg2_rot_cad_90', 'Rotación interna cadera 90-90', 1, '8 alt', 0),
        _ex('pdg2_flex_tob', 'Flexión de tobillo en sedestación', 1, '6/lado', 0),
        _ex('pdg2_bisagra', 'Bisagra de cadera', 1, '8', 0),
        _ex('pdg2_dlift_sumo', 'Peso muerto sumo', 3, '12', 60),
        _ex('pdg2_sq_libre', 'Sentadilla libre', 3, '12', 60),
        _ex('pdg2_abd_maq', 'Abducción cadera máquina', 3, '12', 60),
        _ex('pdg2_sq_split', 'Sentadilla Split mancuernas', 1, '8/lado', 45),
        _ex('pdg2_cop', 'Plancha Copenhague | BISERIE A', 2, '40"/lado', 0),
        _ex('pdg2_monster', 'Monster walks | BISERIE A', 2, '15/lado', 0),
        _ex('pdg2_rev_lunge', 'Zancadas traseras | BISERIE B', 2, '20 alt', 0),
        _ex('pdg2_sq_isom', 'Sentadilla isométrica | BISERIE B', 2, '20-30"', 60),
      ],
      2: [
        _ex('pdg2_cat', 'Cat camel', 1, '8', 0),
        _ex('pdg2_rot_col', 'Rotación columna', 1, '8/lado', 0),
        _ex('pdg2_snow', 'Prone snow angels', 1, '8', 0),
        _ex('pdg2_flex_esc', 'Flexiones escapulares', 1, '8', 0),
        _ex('pdg2_jalon', 'Jalón al pecho', 3, '12', 60),
        _ex('pdg2_press_banc', 'Press banca mancuernas', 3, '12', 60),
        _ex('pdg2_curl_arnold', 'Curl + Arnold press', 3, '12', 60),
        _ex('pdg2_remo_seal', 'Remo seal mancuernas', 3, '12', 60),
        _ex('pdg2_flex_neg', 'Flexiones negativas | BISERIE A', 2, '8-12', 0),
        _ex('pdg2_elev_front', 'Elevaciones frontales | BISERIE A', 2, '12-15', 60),
        _ex('pdg2_fond', 'Fondos tríceps | BISERIE B', 2, '8-12', 0),
        _ex('pdg2_elev_lat', 'Elevaciones laterales | BISERIE B', 2, '12-15', 0),
      ],
      3: [
        _ex('pdg2_deadbug', 'Deadbugs | BISERIE A', 3, '10/lado', 0),
        _ex('pdg2_plancha', 'Plancha | BISERIE A', 3, '30-60"', 60),
        _ex('pdg2_zombie', 'Zombie sit ups | BISERIE B', 3, '15-20', 0),
        _ex('pdg2_crunch_lat', 'Crunch lateral | BISERIE B', 3, '10-15/lado', 60),
        _ex('pdg2_superman', 'Superman | BISERIE C', 3, '15-20', 0),
        _ex('pdg2_mcgill', 'McGill crunch | BISERIE C', 3, '10-15/pierna', 60),
        _ex('pdg2_mountain', 'Mountain climbers | HIIT', 3, '20"', 10),
        _ex('pdg2_snatch_disco', 'Snatch disco | HIIT', 3, '20"', 10),
        _ex('pdg2_burpee', 'Burpee sin salto | HIIT', 3, '20"', 10),
        _ex('pdg2_jj_plank', 'Jumping jacks plank | HIIT', 3, '20"', 10),
        _ex('pdg2_drop_sq', 'Drop squats | HIIT', 3, '20"', 10),
        _ex('pdg2_superman_hold', 'Superman hold | HIIT', 3, '20"', 60),
      ],
      4: [
        _ex('pdg2_liss', 'Cardio LISS', 1, '60 min', 0),
      ],
      5: [
        _ex('pdg2_sq_rack', 'Sentadilla front rack', 3, '12', 45),
        _ex('pdg2_remo_uni', 'Remo unilateral polea', 3, '8-10/lado', 45),
        _ex('pdg2_sq_bulg', 'Sentadilla búlgara', 3, '8-10/pierna', 45),
        _ex('pdg2_flex_rod_b', 'Flexiones | BISERIE A', 3, '8-12', 0),
        _ex('pdg2_pmr', 'Peso muerto rumano | BISERIE A', 3, '10-12', 60),
        _ex('pdg2_zan_man', 'Zancadas mancuernas | BISERIE B', 3, '16 pasos', 0),
        _ex('pdg2_press_uni', 'Press hombro unilateral | BISERIE B', 3, '8-10/brazo', 0),
      ],
      6: [
        _ex('pdg2_rower_1', 'RowErg | BLOQUE 1', 2, '300m', 0),
        _ex('pdg2_press_sed', 'Press hombro sedente | BLOQUE 1', 2, '16 alt', 0),
        _ex('pdg2_cossak', 'Sentadilla Cossak | BLOQUE 1', 2, '16 alt', 0),
        _ex('pdg2_butterfly', 'Butterfly Sit up | BLOQUE 1', 2, '16', 0),
        _ex('pdg2_run_1', 'Carrera | BLOQUE 2', 2, '400m', 0),
        _ex('pdg2_thruster', 'Thruster | BLOQUE 2', 2, '12 alt', 0),
        _ex('pdg2_flex_neg2', 'Flexiones negativas | BLOQUE 2', 2, '12', 0),
        _ex('pdg2_vups', 'V-ups | BLOQUE 2', 2, '12 alt', 0),
        _ex('pdg2_rower_2', 'RowErg | BLOQUE 3', 2, '500m', 0),
        _ex('pdg2_snatch_man', 'Snatch mancuerna | BLOQUE 3', 2, '10 alt', 0),
        _ex('pdg2_sq_sumo', 'Sentadilla sumo | BLOQUE 3', 2, '10', 0),
        _ex('pdg2_run_final', 'Carrera final', 1, '500m', 0),
      ],
    },
    // S2
    {
      1: [
        _ex('pdg2_rot_cad_90', 'Rotación interna cadera 90-90', 1, '8 alt', 0),
        _ex('pdg2_flex_tob', 'Flexión de tobillo en sedestación', 1, '6/lado', 0),
        _ex('pdg2_bisagra', 'Bisagra de cadera', 1, '8', 0),
        _ex('pdg2_dlift_sumo', 'Peso muerto sumo', 3, '12', 60),
        _ex('pdg2_sq_libre', 'Sentadilla libre', 3, '12', 60),
        _ex('pdg2_abd_maq', 'Abducción cadera máquina', 3, '12', 60),
        _ex('pdg2_sq_split', 'Sentadilla Split mancuernas', 1, '8/lado', 45),
        _ex('pdg2_cop', 'Plancha Copenhague | BISERIE A', 2, '40"/lado', 0),
        _ex('pdg2_monster', 'Monster walks | BISERIE A', 2, '15/lado', 0),
        _ex('pdg2_rev_lunge', 'Zancadas traseras | BISERIE B', 2, '20 alt', 0),
        _ex('pdg2_sq_isom', 'Sentadilla isométrica | BISERIE B', 2, '20-30"', 60),
      ],
      2: [
        _ex('pdg2_cat', 'Cat camel', 1, '8', 0),
        _ex('pdg2_rot_col', 'Rotación columna', 1, '8/lado', 0),
        _ex('pdg2_snow', 'Prone snow angels', 1, '8', 0),
        _ex('pdg2_flex_esc', 'Flexiones escapulares', 1, '8', 0),
        _ex('pdg2_jalon', 'Jalón al pecho', 3, '12', 60),
        _ex('pdg2_press_banc', 'Press banca mancuernas', 3, '12', 60),
        _ex('pdg2_curl_arnold', 'Curl + Arnold press', 3, '12', 60),
        _ex('pdg2_remo_seal', 'Remo seal mancuernas', 3, '12', 60),
        _ex('pdg2_flex_neg', 'Flexiones negativas | BISERIE A', 2, '8-12', 0),
        _ex('pdg2_elev_front', 'Elevaciones frontales | BISERIE A', 2, '12-15', 60),
        _ex('pdg2_fond', 'Fondos tríceps | BISERIE B', 2, '8-12', 0),
        _ex('pdg2_elev_lat', 'Elevaciones laterales | BISERIE B', 2, '12-15', 0),
      ],
      3: [
        _ex('pdg2_dolphin', 'Dolphin plank + knee taps | BISERIE A', 3, '20-26', 0),
        _ex('pdg2_zombie_b', 'Zombie sit ups | BISERIE A', 3, '20', 60),
        _ex('pdg2_plancha_dist', 'Plancha manos distanciadas | BISERIE B', 3, '30-60"', 0),
        _ex('pdg2_bear', 'Bear crawl | BISERIE B', 3, '20 movs', 60),
        _ex('pdg2_clam', 'Clambells | BISERIE C', 3, '15-20/lado', 0),
        _ex('pdg2_russian', 'Russian twist mancuerna | BISERIE C', 3, '30', 60),
        _ex('pdg2_hipdips', 'Hip-dips plank | HIIT', 3, '20"', 10),
        _ex('pdg2_skater', 'Skater jumps | HIIT', 3, '20"', 10),
        _ex('pdg2_tae', 'Tae taps | HIIT', 3, '20"', 10),
        _ex('pdg2_bench_jump', 'Benchover jumps | HIIT', 3, '20"', 10),
        _ex('pdg2_pulse', 'Pulse jump squats | HIIT', 3, '20"', 10),
        _ex('pdg2_bicycle', 'Bicycle twist | HIIT', 3, '20"', 60),
      ],
      4: [ _ex('pdg2_liss', 'Cardio LISS', 1, '60 min', 0) ],
      5: [
        _ex('pdg2_sq_rack', 'Sentadilla front rack', 3, '12', 45),
        _ex('pdg2_remo_uni', 'Remo unilateral polea', 3, '8-10/lado', 45),
        _ex('pdg2_sq_bulg', 'Sentadilla búlgara', 3, '8-10/pierna', 45),
        _ex('pdg2_flex_rod_b', 'Flexiones | BISERIE A', 3, '8-12', 0),
        _ex('pdg2_pmr', 'Peso muerto rumano | BISERIE A', 3, '10-12', 60),
        _ex('pdg2_zan_man', 'Zancadas mancuernas | BISERIE B', 3, '16 pasos', 0),
        _ex('pdg2_press_uni', 'Press hombro unilateral | BISERIE B', 3, '8-10/brazo', 0),
      ],
      6: [
        _ex('pdg2_rower_1', 'RowErg | BLOQUE 1', 2, '300m', 0),
        _ex('pdg2_press_sed', 'Press hombro sedente | BLOQUE 1', 2, '16 alt', 0),
        _ex('pdg2_cossak', 'Sentadilla Cossak | BLOQUE 1', 2, '16 alt', 0),
        _ex('pdg2_butterfly', 'Butterfly Sit up | BLOQUE 1', 2, '16', 0),
        _ex('pdg2_run_1', 'Carrera | BLOQUE 2', 2, '400m', 0),
        _ex('pdg2_thruster', 'Thruster | BLOQUE 2', 2, '12 alt', 0),
        _ex('pdg2_flex_neg2', 'Flexiones negativas | BLOQUE 2', 2, '12', 0),
        _ex('pdg2_vups', 'V-ups | BLOQUE 2', 2, '12 alt', 0),
        _ex('pdg2_rower_2', 'RowErg | BLOQUE 3', 2, '500m', 0),
        _ex('pdg2_snatch_man', 'Snatch mancuerna | BLOQUE 3', 2, '10 alt', 0),
        _ex('pdg2_sq_sumo', 'Sentadilla sumo | BLOQUE 3', 2, '10', 0),
        _ex('pdg2_run_final', 'Carrera final', 1, '500m', 0),
      ],
    },
    // S3
    {
      1: [
        _ex('pdg2_rot_cad_90', 'Rotación interna cadera 90-90', 1, '8 alt', 0),
        _ex('pdg2_flex_tob', 'Flexión de tobillo en sedestación', 1, '6/lado', 0),
        _ex('pdg2_bisagra', 'Bisagra de cadera', 1, '8', 0),
        _ex('pdg2_dlift_sumo', 'Peso muerto sumo', 3, '12', 60),
        _ex('pdg2_sq_libre', 'Sentadilla libre', 3, '12', 60),
        _ex('pdg2_abd_maq', 'Abducción cadera máquina', 3, '12', 60),
        _ex('pdg2_sq_split', 'Sentadilla Split mancuernas', 1, '8/lado', 45),
        _ex('pdg2_cop', 'Plancha Copenhague | BISERIE A', 2, '40"/lado', 0),
        _ex('pdg2_monster', 'Monster walks | BISERIE A', 2, '15/lado', 0),
        _ex('pdg2_rev_lunge', 'Zancadas traseras | BISERIE B', 2, '20 alt', 0),
        _ex('pdg2_sq_isom', 'Sentadilla isométrica | BISERIE B', 2, '20-30"', 60),
      ],
      2: [
        _ex('pdg2_cat', 'Cat camel', 1, '8', 0),
        _ex('pdg2_rot_col', 'Rotación columna', 1, '8/lado', 0),
        _ex('pdg2_snow', 'Prone snow angels', 1, '8', 0),
        _ex('pdg2_flex_esc', 'Flexiones escapulares', 1, '8', 0),
        _ex('pdg2_jalon', 'Jalón al pecho', 3, '12', 60),
        _ex('pdg2_press_banc', 'Press banca mancuernas', 3, '12', 60),
        _ex('pdg2_curl_arnold', 'Curl + Arnold press', 3, '12', 60),
        _ex('pdg2_remo_seal', 'Remo seal mancuernas', 3, '12', 60),
        _ex('pdg2_flex_neg', 'Flexiones negativas | BISERIE A', 2, '8-12', 0),
        _ex('pdg2_elev_front', 'Elevaciones frontales | BISERIE A', 2, '12-15', 60),
        _ex('pdg2_fond', 'Fondos tríceps | BISERIE B', 2, '8-12', 0),
        _ex('pdg2_elev_lat', 'Elevaciones laterales | BISERIE B', 2, '12-15', 0),
      ],
      3: [
        _ex('pdg2_scissors', 'Scissors | BISERIE A', 3, '30', 0),
        _ex('pdg2_db_pass', 'DB Plank pass through | BISERIE A', 3, '20', 60),
        _ex('pdg2_cacoons', 'Cacoons | BISERIE B', 3, '25', 0),
        _ex('pdg2_alt_super', 'Alternating superman | BISERIE B', 3, '30 alt', 60),
        _ex('pdg2_mcgill_b', 'McGill crunch | BISERIE C', 3, '10-15/lado', 0),
        _ex('pdg2_hollow', 'Hollow rock | BISERIE C', 3, '10-15', 60),
        _ex('pdg2_hipdips', 'Hip-dips plank | HIIT', 3, '20"', 10),
        _ex('pdg2_skater', 'Skater jumps | HIIT', 3, '20"', 10),
        _ex('pdg2_tae', 'Tae taps | HIIT', 3, '20"', 10),
        _ex('pdg2_bench_jump', 'Benchover jumps | HIIT', 3, '20"', 10),
        _ex('pdg2_pulse', 'Pulse jump squats | HIIT', 3, '20"', 10),
        _ex('pdg2_bicycle', 'Bicycle twist | HIIT', 3, '20"', 60),
      ],
      4: [ _ex('pdg2_liss', 'Cardio LISS', 1, '60 min', 0) ],
      5: [
        _ex('pdg2_sq_rack', 'Sentadilla front rack', 3, '12', 45),
        _ex('pdg2_remo_uni', 'Remo unilateral polea', 3, '8-10/lado', 45),
        _ex('pdg2_sq_bulg', 'Sentadilla búlgara', 3, '8-10/pierna', 45),
        _ex('pdg2_flex_rod_b', 'Flexiones | BISERIE A', 3, '8-12', 0),
        _ex('pdg2_pmr', 'Peso muerto rumano | BISERIE A', 3, '10-12', 60),
        _ex('pdg2_zan_man', 'Zancadas mancuernas | BISERIE B', 3, '16 pasos', 0),
        _ex('pdg2_press_uni', 'Press hombro unilateral | BISERIE B', 3, '8-10/brazo', 0),
      ],
      6: [
        _ex('pdg2_rower_s3_1', 'RowErg | CIRCUITO', 3, '300m', 0),
        _ex('pdg2_push_press', 'Push press / Press hombros impulso', 3, '15', 0),
        _ex('pdg2_run_300', 'Carrera', 3, '300-400m', 0),
        _ex('pdg2_devil', 'Devil press', 3, '10-15 alt', 0),
        _ex('pdg2_rower_s3_2', 'RowErg', 3, '300m', 0),
        _ex('pdg2_pmr_man', 'Peso muerto rumano mancuernas', 3, '15', 0),
        _ex('pdg2_run_300_2', 'Carrera', 3, '300-400m', 0),
        _ex('pdg2_turkish', 'Turkish get up', 3, '5/lado', 120),
      ],
    },
    // S4
    {
      1: [
        _ex('pdg2_rot_cad_90', 'Rotación interna cadera 90-90', 1, '8 alt', 0),
        _ex('pdg2_flex_tob', 'Flexión de tobillo en sedestación', 1, '6/lado', 0),
        _ex('pdg2_bisagra', 'Bisagra de cadera', 1, '8', 0),
        _ex('pdg2_dlift_sumo', 'Peso muerto sumo', 3, '12', 60),
        _ex('pdg2_sq_libre', 'Sentadilla libre', 3, '12', 60),
        _ex('pdg2_abd_maq', 'Abducción cadera máquina', 3, '12', 60),
        _ex('pdg2_sq_split', 'Sentadilla Split mancuernas', 1, '8/lado', 45),
        _ex('pdg2_cop', 'Plancha Copenhague | BISERIE A', 2, '40"/lado', 0),
        _ex('pdg2_monster', 'Monster walks | BISERIE A', 2, '15/lado', 0),
        _ex('pdg2_rev_lunge', 'Zancadas traseras | BISERIE B', 2, '20 alt', 0),
        _ex('pdg2_sq_isom', 'Sentadilla isométrica | BISERIE B', 2, '20-30"', 60),
      ],
      2: [
        _ex('pdg2_cat', 'Cat camel', 1, '8', 0),
        _ex('pdg2_rot_col', 'Rotación columna', 1, '8/lado', 0),
        _ex('pdg2_snow', 'Prone snow angels', 1, '8', 0),
        _ex('pdg2_flex_esc', 'Flexiones escapulares', 1, '8', 0),
        _ex('pdg2_jalon', 'Jalón al pecho', 3, '12', 60),
        _ex('pdg2_press_banc', 'Press banca mancuernas', 3, '12', 60),
        _ex('pdg2_curl_arnold', 'Curl + Arnold press', 3, '12', 60),
        _ex('pdg2_remo_seal', 'Remo seal mancuernas', 3, '12', 60),
        _ex('pdg2_flex_neg', 'Flexiones negativas | BISERIE A', 2, '8-12', 0),
        _ex('pdg2_elev_front', 'Elevaciones frontales | BISERIE A', 2, '12-15', 60),
        _ex('pdg2_fond', 'Fondos tríceps | BISERIE B', 2, '8-12', 0),
        _ex('pdg2_elev_lat', 'Elevaciones laterales | BISERIE B', 2, '12-15', 0),
      ],
      3: [
        _ex('pdg2_vups_taps', 'V ups con toques pie | BISERIE A', 3, '30 alt', 0),
        _ex('pdg2_pallof', 'Press Pallof resistencia | BISERIE A', 3, '15/lado', 60),
        _ex('pdg2_kb_pull', 'KB pull-through | BISERIE B', 3, '10-15/brazo', 0),
        _ex('pdg2_elev_piernas', 'Elevación piernas | BISERIE B', 3, '20', 60),
        _ex('pdg2_zombie_c', 'Zombie sit ups | BISERIE C', 3, '20-25', 0),
        _ex('pdg2_alt_super2', 'Alternating superman | BISERIE C', 3, '40 alt', 60),
        _ex('pdg2_wallout', 'Wallout jump | HIIT', 3, '20"', 10),
        _ex('pdg2_skater', 'Skater jumps | HIIT', 3, '20"', 10),
        _ex('pdg2_butterfly_s', 'Butterfly Sit up | HIIT', 3, '20"', 10),
        _ex('pdg2_super_hold', 'Superman hold | HIIT', 3, '20"', 10),
        _ex('pdg2_sprint', 'Sprint estático | HIIT', 3, '20"', 10),
        _ex('pdg2_knee_toe', 'Knee to toe taps | HIIT', 3, '20"', 60),
      ],
      4: [ _ex('pdg2_liss', 'Cardio LISS', 1, '60 min', 0) ],
      5: [
        _ex('pdg2_kb_windmill', 'KB Windmill', 1, '6-8/lado', 0),
        _ex('pdg2_trx', 'Remo en TRX', 1, '10', 0),
        _ex('pdg2_dolphin_s', 'Dolphin plank + knee taps', 1, '10', 0),
        _ex('pdg2_sq_rack', 'Sentadilla front rack', 3, '12', 45),
        _ex('pdg2_remo_uni', 'Remo unilateral polea', 3, '8-10/lado', 45),
        _ex('pdg2_sq_bulg', 'Sentadilla búlgara', 3, '8-10/pierna', 45),
        _ex('pdg2_flex_rod_b', 'Flexiones | BISERIE A', 3, '8-12', 0),
        _ex('pdg2_pmr', 'Peso muerto rumano | BISERIE A', 3, '10-12', 60),
        _ex('pdg2_zan_man', 'Zancadas mancuernas | BISERIE B', 3, '16 pasos', 0),
        _ex('pdg2_press_uni', 'Press hombro unilateral | BISERIE B', 3, '8-10/brazo', 0),
      ],
      6: [
        _ex('pdg2_rower_1', 'RowErg | BLOQUE 1', 2, '300m', 0),
        _ex('pdg2_press_sed', 'Press hombro sedente | BLOQUE 1', 2, '16 alt', 0),
        _ex('pdg2_cossak', 'Sentadilla Cossak | BLOQUE 1', 2, '16 alt', 0),
        _ex('pdg2_butterfly', 'Butterfly Sit up | BLOQUE 1', 2, '16', 0),
        _ex('pdg2_run_1', 'Carrera | BLOQUE 2', 2, '400m', 0),
        _ex('pdg2_thruster', 'Thruster | BLOQUE 2', 2, '12 alt', 0),
        _ex('pdg2_flex_neg2', 'Flexiones negativas | BLOQUE 2', 2, '12', 0),
        _ex('pdg2_vups', 'V-ups | BLOQUE 2', 2, '12 alt', 0),
        _ex('pdg2_rower_2', 'RowErg | BLOQUE 3', 2, '500m', 0),
        _ex('pdg2_snatch_man', 'Snatch mancuerna | BLOQUE 3', 2, '10 alt', 0),
        _ex('pdg2_sq_sumo', 'Sentadilla sumo | BLOQUE 3', 2, '10', 0),
        _ex('pdg2_run_final', 'Carrera final', 1, '500m', 0),
      ],
    },
    // S5
    {
      1: [
        _ex('pdg2_rot_cad_90', 'Rotación interna cadera 90-90', 1, '8 alt', 0),
        _ex('pdg2_flex_tob', 'Flexión de tobillo en sedestación', 1, '6/lado', 0),
        _ex('pdg2_bisagra', 'Bisagra de cadera', 1, '8', 0),
        _ex('pdg2_dlift_sumo', 'Peso muerto sumo', 3, '12', 60),
        _ex('pdg2_sq_libre', 'Sentadilla libre', 3, '12', 60),
        _ex('pdg2_abd_maq', 'Abducción cadera máquina', 3, '12', 60),
        _ex('pdg2_sq_split', 'Sentadilla Split mancuernas', 1, '8/lado', 45),
        _ex('pdg2_cop', 'Plancha Copenhague | BISERIE A', 2, '40"/lado', 0),
        _ex('pdg2_monster', 'Monster walks | BISERIE A', 2, '15/lado', 0),
        _ex('pdg2_rev_lunge', 'Zancadas traseras | BISERIE B', 2, '20 alt', 0),
        _ex('pdg2_sq_isom', 'Sentadilla isométrica | BISERIE B', 2, '20-30"', 60),
      ],
      2: [
        _ex('pdg2_cat', 'Cat camel', 1, '8', 0),
        _ex('pdg2_rot_col', 'Rotación columna', 1, '8/lado', 0),
        _ex('pdg2_snow', 'Prone snow angels', 1, '8', 0),
        _ex('pdg2_flex_esc', 'Flexiones escapulares', 1, '8', 0),
        _ex('pdg2_jalon', 'Jalón al pecho', 3, '12', 60),
        _ex('pdg2_press_banc', 'Press banca mancuernas', 3, '12', 60),
        _ex('pdg2_curl_arnold', 'Curl + Arnold press', 3, '12', 60),
        _ex('pdg2_remo_seal', 'Remo seal mancuernas', 3, '12', 60),
        _ex('pdg2_flex_neg', 'Flexiones negativas | BISERIE A', 2, '8-12', 0),
        _ex('pdg2_elev_front', 'Elevaciones frontales | BISERIE A', 2, '12-15', 60),
        _ex('pdg2_fond', 'Fondos tríceps | BISERIE B', 2, '8-12', 0),
        _ex('pdg2_elev_lat', 'Elevaciones laterales | BISERIE B', 2, '12-15', 0),
      ],
      3: [
        _ex('pdg2_pass_man', 'Pass through mancuernas | BISERIE A', 3, '30', 0),
        _ex('pdg2_hollow_b', 'Hollow rock | BISERIE A', 3, '15', 60),
        _ex('pdg2_superman_s5', 'Superman | BISERIE B', 3, '20-30', 0),
        _ex('pdg2_elev_pie', 'Elevación piernas | BISERIE B', 3, '25', 60),
        _ex('pdg2_russian_b', 'Russian twist | BISERIE C', 3, '10-15/lado', 0),
        _ex('pdg2_butterfly_c', 'Butterfly Sit up | BISERIE C', 3, '15-20', 60),
        _ex('pdg2_hip_dips', 'Hip dips plank | HIIT', 3, '30"', 15),
        _ex('pdg2_sq_rot', 'Sentadilla salto + rotación | HIIT', 3, '30"', 15),
        _ex('pdg2_kick_sits', 'Kick sits | HIIT', 3, '30"', 15),
        _ex('pdg2_lunge_drop', 'Lunge drop | HIIT', 3, '30"', 15),
        _ex('pdg2_plancha_lat_d', 'Plancha lateral derecha | HIIT', 3, '30"', 15),
        _ex('pdg2_plancha_lat_i', 'Plancha lateral izquierda | HIIT', 3, '30"', 60),
      ],
      4: [ _ex('pdg2_liss', 'Cardio LISS', 1, '60 min', 0) ],
      5: [
        _ex('pdg2_wgs', 'Movilidad - WGS', 1, '6/lado', 0),
        _ex('pdg2_frog', 'Movilidad - Frog Rolls', 1, '8', 0),
        _ex('pdg2_kb_windmill', 'KB Windmill', 1, '6-8/lado', 0),
        _ex('pdg2_trx', 'Remo en TRX', 1, '10', 0),
        _ex('pdg2_sq_rack', 'Sentadilla front rack', 3, '12', 45),
        _ex('pdg2_remo_uni', 'Remo unilateral polea', 3, '8-10/lado', 45),
        _ex('pdg2_sq_bulg', 'Sentadilla búlgara', 3, '8-10/pierna', 45),
        _ex('pdg2_flex_rod_b', 'Flexiones | BISERIE A', 3, '8-12', 0),
        _ex('pdg2_pmr', 'Peso muerto rumano | BISERIE A', 3, '10-12', 60),
        _ex('pdg2_zan_man', 'Zancadas mancuernas | BISERIE B', 3, '16 pasos', 0),
        _ex('pdg2_press_uni', 'Press hombro unilateral | BISERIE B', 3, '8-10/brazo', 0),
      ],
      6: [
        _ex('pdg2_rower_1', 'RowErg | BLOQUE 1', 2, '300m', 0),
        _ex('pdg2_press_sed', 'Press hombro sedente | BLOQUE 1', 2, '16 alt', 0),
        _ex('pdg2_cossak', 'Sentadilla Cossak | BLOQUE 1', 2, '16 alt', 0),
        _ex('pdg2_butterfly', 'Butterfly Sit up | BLOQUE 1', 2, '16', 0),
        _ex('pdg2_run_1', 'Carrera | BLOQUE 2', 2, '400m', 0),
        _ex('pdg2_thruster', 'Thruster | BLOQUE 2', 2, '12 alt', 0),
        _ex('pdg2_flex_neg2', 'Flexiones negativas | BLOQUE 2', 2, '12', 0),
        _ex('pdg2_vups', 'V-ups | BLOQUE 2', 2, '12 alt', 0),
        _ex('pdg2_rower_2', 'RowErg | BLOQUE 3', 2, '500m', 0),
        _ex('pdg2_snatch_man', 'Snatch mancuerna | BLOQUE 3', 2, '10 alt', 0),
        _ex('pdg2_sq_sumo', 'Sentadilla sumo | BLOQUE 3', 2, '10', 0),
        _ex('pdg2_run_final', 'Carrera final', 1, '500m', 0),
      ],
    },
    // S6
    {
      1: [
        _ex('pdg2_rot_cad_90', 'Rotación interna cadera 90-90', 1, '8 alt', 0),
        _ex('pdg2_flex_tob', 'Flexión de tobillo en sedestación', 1, '6/lado', 0),
        _ex('pdg2_bisagra', 'Bisagra de cadera', 1, '8', 0),
        _ex('pdg2_dlift_sumo', 'Peso muerto sumo', 3, '12', 60),
        _ex('pdg2_sq_libre', 'Sentadilla libre', 3, '12', 60),
        _ex('pdg2_abd_maq', 'Abducción cadera máquina', 3, '12', 60),
        _ex('pdg2_sq_split', 'Sentadilla Split mancuernas', 1, '8/lado', 45),
        _ex('pdg2_cop', 'Plancha Copenhague | BISERIE A', 2, '40"/lado', 0),
        _ex('pdg2_monster', 'Monster walks | BISERIE A', 2, '15/lado', 0),
        _ex('pdg2_rev_lunge', 'Zancadas traseras | BISERIE B', 2, '20 alt', 0),
        _ex('pdg2_sq_isom', 'Sentadilla isométrica | BISERIE B', 2, '20-30"', 60),
      ],
      2: [
        _ex('pdg2_cat', 'Cat camel', 1, '8', 0),
        _ex('pdg2_rot_col', 'Rotación columna', 1, '8/lado', 0),
        _ex('pdg2_snow', 'Prone snow angels', 1, '8', 0),
        _ex('pdg2_flex_esc', 'Flexiones escapulares', 1, '8', 0),
        _ex('pdg2_jalon', 'Jalón al pecho', 3, '12', 60),
        _ex('pdg2_press_banc', 'Press banca mancuernas', 3, '12', 60),
        _ex('pdg2_curl_arnold', 'Curl + Arnold press', 3, '12', 60),
        _ex('pdg2_remo_seal', 'Remo seal mancuernas', 3, '12', 60),
        _ex('pdg2_flex_neg', 'Flexiones negativas | BISERIE A', 2, '8-12', 0),
        _ex('pdg2_elev_front', 'Elevaciones frontales | BISERIE A', 2, '12-15', 60),
        _ex('pdg2_fond', 'Fondos tríceps | BISERIE B', 2, '8-12', 0),
        _ex('pdg2_elev_lat', 'Elevaciones laterales | BISERIE B', 2, '12-15', 0),
      ],
      3: [
        _ex('pdg2_clam_b', 'Clambells | BISERIE A', 3, '15-20/lado', 0),
        _ex('pdg2_ball_vups', 'Ball V ups | BISERIE A', 3, '10-15', 60),
        _ex('pdg2_pallof_b', 'Press Pallof resistencia | BISERIE B', 3, '15/lado', 0),
        _ex('pdg2_elev_banco', 'Elevación piernas banco | BISERIE B', 3, '15-20', 60),
        _ex('pdg2_alt_super3', 'Alternating superman | BISERIE C', 3, '30 alt', 0),
        _ex('pdg2_knee_raise', 'Knee raises barra | BISERIE C', 3, '9-15', 60),
        _ex('pdg2_cursy_i', 'Cursy jumps izq | HIIT', 3, '30"', 15),
        _ex('pdg2_cursy_d', 'Cursy jumps der | HIIT', 3, '30"', 15),
        _ex('pdg2_jj_plank_b', 'Jumping jacks plank | HIIT', 3, '30"', 15),
        _ex('pdg2_hollow_hold', 'Hollow hold | HIIT', 3, '30"', 15),
        _ex('pdg2_drop_sq_b', 'Drop squats disco | HIIT', 3, '30"', 15),
        _ex('pdg2_plank_thrust', 'Plank thrust | HIIT', 3, '30"', 60),
      ],
      4: [ _ex('pdg2_liss', 'Cardio LISS', 1, '60 min', 0) ],
      5: [
        _ex('pdg2_wgs', 'Movilidad - WGS', 1, '6/lado', 0),
        _ex('pdg2_frog', 'Movilidad - Frog Rolls', 1, '8', 0),
        _ex('pdg2_kb_windmill', 'KB Windmill', 1, '6-8/lado', 0),
        _ex('pdg2_trx', 'Remo en TRX', 1, '10', 0),
        _ex('pdg2_sq_rack', 'Sentadilla front rack', 3, '12', 45),
        _ex('pdg2_remo_uni', 'Remo unilateral polea', 3, '8-10/lado', 45),
        _ex('pdg2_sq_bulg', 'Sentadilla búlgara', 3, '8-10/pierna', 45),
        _ex('pdg2_flex_rod_b', 'Flexiones | BISERIE A', 3, '8-12', 0),
        _ex('pdg2_pmr', 'Peso muerto rumano | BISERIE A', 3, '10-12', 60),
        _ex('pdg2_zan_man', 'Zancadas mancuernas | BISERIE B', 3, '16 pasos', 0),
        _ex('pdg2_press_uni', 'Press hombro unilateral | BISERIE B', 3, '8-10/brazo', 0),
      ],
      6: [
        _ex('pdg2_rower_1', 'RowErg | BLOQUE 1', 2, '300m', 0),
        _ex('pdg2_press_sed', 'Press hombro sedente | BLOQUE 1', 2, '16 alt', 0),
        _ex('pdg2_cossak', 'Sentadilla Cossak | BLOQUE 1', 2, '16 alt', 0),
        _ex('pdg2_butterfly', 'Butterfly Sit up | BLOQUE 1', 2, '16', 0),
        _ex('pdg2_run_1', 'Carrera | BLOQUE 2', 2, '400m', 0),
        _ex('pdg2_thruster', 'Thruster | BLOQUE 2', 2, '12 alt', 0),
        _ex('pdg2_flex_neg2', 'Flexiones negativas | BLOQUE 2', 2, '12', 0),
        _ex('pdg2_vups', 'V-ups | BLOQUE 2', 2, '12 alt', 0),
        _ex('pdg2_rower_2', 'RowErg | BLOQUE 3', 2, '500m', 0),
        _ex('pdg2_snatch_man', 'Snatch mancuerna | BLOQUE 3', 2, '10 alt', 0),
        _ex('pdg2_sq_sumo', 'Sentadilla sumo | BLOQUE 3', 2, '10', 0),
        _ex('pdg2_run_final', 'Carrera final', 1, '500m', 0),
      ],
    },
    // S7
    {
      1: [
        _ex('pdg2_rot_cad_90', 'Rotación interna cadera 90-90', 1, '8 alt', 0),
        _ex('pdg2_flex_tob', 'Flexión de tobillo en sedestación', 1, '6/lado', 0),
        _ex('pdg2_bisagra', 'Bisagra de cadera', 1, '8', 0),
        _ex('pdg2_run_lunge', 'Runners lunge', 1, '8/lado', 0),
        _ex('pdg2_dlift_sumo', 'Peso muerto sumo', 3, '12', 60),
        _ex('pdg2_sq_libre', 'Sentadilla libre', 3, '12', 60),
        _ex('pdg2_abd_maq', 'Abducción cadera máquina', 3, '12', 60),
        _ex('pdg2_sq_split', 'Sentadilla Split mancuernas', 1, '8/lado', 45),
        _ex('pdg2_cop', 'Plancha Copenhague | BISERIE A', 2, '40"/lado', 0),
        _ex('pdg2_monster', 'Monster walks | BISERIE A', 2, '15/lado', 0),
        _ex('pdg2_rev_lunge', 'Zancadas traseras | BISERIE B', 2, '20 alt', 0),
        _ex('pdg2_sq_isom', 'Sentadilla isométrica | BISERIE B', 2, '20-30"', 60),
      ],
      2: [
        _ex('pdg2_cat', 'Cat camel', 1, '8', 0),
        _ex('pdg2_rot_col', 'Rotación columna', 1, '8/lado', 0),
        _ex('pdg2_snow', 'Prone snow angels', 1, '8', 0),
        _ex('pdg2_flex_esc', 'Flexiones escapulares', 1, '8', 0),
        _ex('pdg2_jalon', 'Jalón al pecho', 3, '12', 60),
        _ex('pdg2_press_banc', 'Press banca mancuernas', 3, '12', 60),
        _ex('pdg2_curl_arnold', 'Curl + Arnold press', 3, '12', 60),
        _ex('pdg2_remo_seal', 'Remo seal mancuernas', 3, '12', 60),
        _ex('pdg2_flex_neg', 'Flexiones negativas | BISERIE A', 2, '8-12', 0),
        _ex('pdg2_elev_front', 'Elevaciones frontales | BISERIE A', 2, '12-15', 60),
        _ex('pdg2_fond', 'Fondos tríceps | BISERIE B', 2, '8-12', 0),
        _ex('pdg2_elev_lat', 'Elevaciones laterales | BISERIE B', 2, '12-15', 0),
      ],
      3: [
        _ex('pdg2_clam_b', 'Clambells | BISERIE A', 3, '15-20/lado', 0),
        _ex('pdg2_ball_vups', 'Ball V ups | BISERIE A', 3, '10-15', 60),
        _ex('pdg2_pallof_b', 'Press Pallof resistencia | BISERIE B', 3, '15/lado', 0),
        _ex('pdg2_elev_banco', 'Elevación piernas banco | BISERIE B', 3, '15-20', 60),
        _ex('pdg2_alt_super3', 'Alternating superman | BISERIE C', 3, '30 alt', 0),
        _ex('pdg2_knee_raise', 'Knee raises barra | BISERIE C', 3, '9-15', 60),
        _ex('pdg2_cursy_i', 'Cursy jumps izq | HIIT', 3, '30"', 15),
        _ex('pdg2_cursy_d', 'Cursy jumps der | HIIT', 3, '30"', 15),
        _ex('pdg2_jj_plank_b', 'Jumping jacks plank | HIIT', 3, '30"', 15),
        _ex('pdg2_hollow_hold', 'Hollow hold | HIIT', 3, '30"', 15),
        _ex('pdg2_drop_sq_b', 'Drop squats disco | HIIT', 3, '30"', 15),
        _ex('pdg2_plank_thrust', 'Plank thrust | HIIT', 3, '30"', 60),
      ],
      4: [ _ex('pdg2_liss', 'Cardio LISS', 1, '60 min', 0) ],
      5: [
        _ex('pdg2_wgs', 'Movilidad | WGS (World\'s Greatest Stretch)', 1, '6/lado', 0),
        _ex('pdg2_frog', 'Movilidad | Frog Rolls', 1, '8', 0),
        _ex('pdg2_zan_sin_s7', 'Zancadas sin peso', 1, '10 alt', 0),
        _ex('pdg2_kb_windmill', 'Core | KB Windmill', 1, '6-8/lado', 0),
        _ex('pdg2_trx', 'Remo en TRX', 1, '10', 0, 'Poca inclinación'),
        _ex('pdg2_dolphin_s7', 'Core | Dolphin plank + knee taps', 1, '10', 0),
        _ex('pdg2_sq_rack', 'Sentadilla front rack con mancuernas', 3, '12', 45, 'Pausa 2" abajo'),
        _ex('pdg2_remo_uni', 'Remo gironda unilateral en polea', 3, '8-10/lado', 45),
        _ex('pdg2_sq_bulg', 'Sentadilla búlgara en multipower', 3, '8-10/pierna', 45),
        _ex('pdg2_flex_rod_b', 'Flexiones de rodillas | BISERIE A', 3, '8-12', 0),
        _ex('pdg2_pmr', 'Peso muerto rumano | BISERIE A', 3, '10-12', 60),
        _ex('pdg2_zan_man', 'Zancadas mancuernas | BISERIE B', 3, '16 pasos', 0),
        _ex('pdg2_press_uni', 'Press hombro unilateral | BISERIE B', 3, '8-10/brazo', 0),
        _ex('pdg2_est_pigeon_s7', 'Estiramiento | Cadera (Pigeon)', 1, '-', 0),
        _ex('pdg2_est_espalda_s7', 'Estiramiento | Espalda', 1, '-', 0),
      ],
      6: [
        _ex('pdg2_wgs', 'Movilidad - WGS', 1, '6/lado', 0),
        _ex('pdg2_frog', 'Movilidad - Frog Rolls', 1, '8', 0),
        _ex('pdg2_kb_windmill', 'KB Windmill', 1, '6-8/lado', 0),
        _ex('pdg2_trx', 'Remo en TRX', 1, '10', 0),
        _ex('pdg2_sq_rack', 'Sentadilla front rack', 3, '12', 45),
        _ex('pdg2_remo_uni', 'Remo unilateral polea', 3, '8-10/lado', 45),
        _ex('pdg2_sq_bulg', 'Sentadilla búlgara', 3, '8-10/pierna', 45),
        _ex('pdg2_flex_rod_b', 'Flexiones | BISERIE A', 3, '8-12', 0),
        _ex('pdg2_pmr', 'Peso muerto rumano | BISERIE A', 3, '10-12', 60),
        _ex('pdg2_zan_man', 'Zancadas mancuernas | BISERIE B', 3, '16 pasos', 0),
        _ex('pdg2_press_uni', 'Press hombro unilateral | BISERIE B', 3, '8-10/brazo', 0),
      ],
    },
    // S8
    {
      1: [
        _ex('pdg2_rot_cad_90', 'Rotación interna cadera 90-90', 1, '8 alt', 0),
        _ex('pdg2_flex_tob', 'Flexión de tobillo en sedestación', 1, '6/lado', 0),
        _ex('pdg2_bisagra', 'Bisagra de cadera', 1, '8', 0),
        _ex('pdg2_run_lunge', 'Runners lunge', 1, '8/lado', 0),
        _ex('pdg2_dlift_sumo', 'Peso muerto sumo', 3, '12', 60),
        _ex('pdg2_sq_libre', 'Sentadilla libre', 3, '12', 60),
        _ex('pdg2_abd_maq', 'Abducción cadera máquina', 3, '12', 60),
        _ex('pdg2_sq_split', 'Sentadilla Split mancuernas', 1, '8/lado', 45),
        _ex('pdg2_cop', 'Plancha Copenhague | BISERIE A', 2, '40"/lado', 0),
        _ex('pdg2_monster', 'Monster walks | BISERIE A', 2, '15/lado', 0),
        _ex('pdg2_rev_lunge', 'Zancadas traseras | BISERIE B', 2, '20 alt', 0),
        _ex('pdg2_sq_isom', 'Sentadilla isométrica | BISERIE B', 2, '20-30"', 60),
      ],
      2: [
        _ex('pdg2_cat', 'Cat camel', 1, '8', 0),
        _ex('pdg2_rot_col', 'Rotación columna', 1, '8/lado', 0),
        _ex('pdg2_snow', 'Prone snow angels', 1, '8', 0),
        _ex('pdg2_flex_esc', 'Flexiones escapulares', 1, '8', 0),
        _ex('pdg2_jalon', 'Jalón al pecho', 3, '12', 60),
        _ex('pdg2_press_banc', 'Press banca mancuernas', 3, '12', 60),
        _ex('pdg2_curl_arnold', 'Curl + Arnold press', 3, '12', 60),
        _ex('pdg2_remo_seal', 'Remo seal mancuernas', 3, '12', 60),
        _ex('pdg2_flex_neg', 'Flexiones negativas | BISERIE A', 2, '8-12', 0),
        _ex('pdg2_elev_front', 'Elevaciones frontales | BISERIE A', 2, '12-15', 60),
        _ex('pdg2_fond', 'Fondos tríceps | BISERIE B', 2, '8-12', 0),
        _ex('pdg2_elev_lat', 'Elevaciones laterales | BISERIE B', 2, '12-15', 0),
      ],
      3: [
        _ex('pdg2_clam_b', 'Clambells | BISERIE A', 3, '15-20/lado', 0),
        _ex('pdg2_ball_vups', 'Ball V ups | BISERIE A', 3, '10-15', 60),
        _ex('pdg2_pallof_b', 'Press Pallof resistencia | BISERIE B', 3, '15/lado', 0),
        _ex('pdg2_elev_banco', 'Elevación piernas banco | BISERIE B', 3, '15-20', 60),
        _ex('pdg2_alt_super3', 'Alternating superman | BISERIE C', 3, '30 alt', 0),
        _ex('pdg2_knee_raise', 'Knee raises barra | BISERIE C', 3, '9-15', 60),
        _ex('pdg2_cursy_i', 'Cursy jumps izq | HIIT', 3, '30"', 15),
        _ex('pdg2_cursy_d', 'Cursy jumps der | HIIT', 3, '30"', 15),
        _ex('pdg2_jj_plank_b', 'Jumping jacks plank | HIIT', 3, '30"', 15),
        _ex('pdg2_hollow_hold', 'Hollow hold | HIIT', 3, '30"', 15),
        _ex('pdg2_drop_sq_b', 'Drop squats disco | HIIT', 3, '30"', 15),
        _ex('pdg2_plank_thrust', 'Plank thrust | HIIT', 3, '30"', 60),
      ],
      4: [ _ex('pdg2_liss', 'Cardio LISS', 1, '60 min', 0) ],
      5: [
        _ex('pdg2_wgs', 'Movilidad - WGS', 1, '6/lado', 0),
        _ex('pdg2_frog', 'Movilidad - Frog Rolls', 1, '8', 0),
        _ex('pdg2_kb_windmill', 'KB Windmill', 1, '6-8/lado', 0),
        _ex('pdg2_trx', 'Remo en TRX', 1, '10', 0),
        _ex('pdg2_sq_rack', 'Sentadilla front rack', 3, '12', 45),
        _ex('pdg2_remo_uni', 'Remo unilateral polea', 3, '8-10/lado', 45),
        _ex('pdg2_sq_bulg', 'Sentadilla búlgara', 3, '8-10/pierna', 45),
        _ex('pdg2_flex_rod_b', 'Flexiones | BISERIE A', 3, '8-12', 0),
        _ex('pdg2_pmr', 'Peso muerto rumano | BISERIE A', 3, '10-12', 60),
        _ex('pdg2_zan_man', 'Zancadas mancuernas | BISERIE B', 3, '16 pasos', 0),
        _ex('pdg2_press_uni', 'Press hombro unilateral | BISERIE B', 3, '8-10/brazo', 0),
      ],
      6: [
        _ex('pdg2_run_500', 'Carrera | CIRCUITO', 4, '500m', 0),
        _ex('pdg2_rev_lunge_s8', 'Zancadas traseras | CIRCUITO', 4, '20', 0),
        _ex('pdg2_burpee_broad', 'Burpee broad jump | CIRCUITO', 4, '10-15', 0),
        _ex('pdg2_kb_swing_uni', 'KB swing unilateral | CIRCUITO', 4, '10+10', 0),
        _ex('pdg2_renegade', 'Renegade row | CIRCUITO', 4, '20 alt', 0),
        _ex('pdg2_clam_gomas', 'Clambells con gomas | CIRCUITO', 4, '15+15', 0),
        _ex('pdg2_run_extra', 'Carrera extra | OPCIONAL', 1, '200-600m', 0, 'Rétate'),
      ],
    },
  ]
};

WORKOUT_PLANS.gluteos_mamasota = {
  id: 'gluteos_mamasota',
  name: 'Glúteos de Mamasota',
  description: '12 semanas | Hipertrofia glúteos + Torso | 5 días/semana',
  planType: 'phased',
  weeks: 12,
  trainingDays: [1, 2, 4, 5, 6],
  dayMeta: {
    1: { name: 'Día 1 — Pierna · Hip Thrust / Glute Bridge', type: 'strength', muscleGroups: ['Glúteos', 'Piernas', 'Core'] },
    2: { name: 'Día 2 — Torso · Press militar', type: 'strength', muscleGroups: ['Hombros', 'Pecho', 'Espalda', 'Brazos'] },
    4: { name: 'Día 4 — Pierna · Peso muerto', type: 'strength', muscleGroups: ['Glúteos', 'Isquios', 'Core'] },
    5: { name: 'Día 5 — Torso · Hombros', type: 'strength', muscleGroups: ['Hombros', 'Espalda', 'Brazos'] },
    6: { name: 'Día 6 — Glúteo + Hombros', type: 'strength', muscleGroups: ['Glúteos', 'Hombros', 'Core'] }
  },
  weeklySchedule: [
    // S1
    {
      1: [
        _ex('gm_monster', 'Monster walks', 2, '20', 0),
        _ex('gm_abd_maq', 'Abducción cadera máquina', 2, '14', 60),
        _ex('gm_ht_ap', 'Hip Thrust (aproximación)', 2, '8,6', 0),
        _ex('gm_ht', 'Hip Thrust', 2, '8,10', 60),
        _ex('gm_sq_goblet', 'Sentadilla goblet', 2, '10', 60),
        _ex('gm_hiper', 'Hiperextensión', 1, '16-20', 60),
        _ex('gm_hiper_disco', 'Hiperextensión con disco', 1, '14-16', 60),
        _ex('gm_curl_fem', 'Curl de femoral', 2, '12', 60),
        _ex('gm_kb_swing', 'Kettlebell swing', 2, '6', 60),
        _ex('gm_crunch_res', 'Core | Crunch abdominal con resistencia', 3, '14', 60),
      ],
      2: [
        _ex('gm_pm_ap', 'Press militar barra (aproximación)', 2, '6,4', 0),
        _ex('gm_pm', 'Press militar con barra', 2, '8', 60),
        _ex('gm_jalon_uni', 'Jalón unilateral en polea', 3, '12', 60),
        _ex('gm_press_inc', 'Press banca inclinado mancuernas', 3, '10', 60),
        _ex('gm_elev_lat', 'Elevaciones laterales mancuernas', 3, '12', 60),
        _ex('gm_remo_disco', 'Remo con disco', 2, '10', 60),
        _ex('gm_curl_bic', 'Curl bíceps con mancuerna', 3, '14', 60),
        _ex('gm_ext_tri', 'Extensión tríceps polea', 3, '14', 60),
      ],
      4: [
        _ex('gm_hiper_inv', 'Hiperextensión invertida', 1, '16-18', 0),
        _ex('gm_hiper_gomas', 'Hiperextensión invertida con gomas', 2, '14-16', 0),
        _ex('gm_pmr_ap', 'Peso muerto rumano (aproximación)', 2, '8,6', 0),
        _ex('gm_pmr', 'Peso muerto rumano', 3, '8-10', 60),
        _ex('gm_sq_uni', 'Sentadilla unilateral con apoyo', 3, '10-12', 60),
        _ex('gm_patada', 'Patada glúteo polea', 2, '14-16', 60),
        _ex('gm_abd_pol', 'Abducción en polea', 2, '14-16', 60),
        _ex('gm_pull_thru', 'Pull through en polea', 2, '12-14', 60),
        _ex('gm_pike', 'Core | Pike plank en fitball', 2, '8', 45),
        _ex('gm_elev_pier', 'Elevación piernas colgada', 2, '8', 45),
      ],
      5: [
        _ex('gm_press_hom', 'Press hombro con mancuernas', 3, '10', 60),
        _ex('gm_jalon', 'Jalón al pecho', 3, '12', 60),
        _ex('gm_elev_uni', 'Elevaciones unilaterales', 3, '10', 60),
        _ex('gm_remo_uni', 'Remo unilateral mancuernas', 3, '8', 60),
        _ex('gm_delt_post', 'Deltoides posterior máquina', 2, '16', 60),
        _ex('gm_curl_conc', 'Curl concentrado', 2, '14', 60),
        _ex('gm_press_fran', 'Press francés', 3, '16', 60),
      ],
      6: [
        _ex('gm_abd_180', 'Abducción cadera resistencia 180º', 2, '18-20', 60),
        _ex('gm_sq_sumo', 'Sentadilla sumo', 2, '10', 60),
        _ex('gm_pmr_uni', 'Peso muerto rumano unilateral mancuernas', 2, '10', 60),
        _ex('gm_thruster', 'Thruster con mancuernas', 2, '8', 60),
        _ex('gm_remo_ment', 'Remo al mentón en polea', 2, '14', 60),
        _ex('gm_gemelo', 'Gemelo en prensa', 3, '20', 60),
        _ex('gm_plancha_fit', 'Core | Plancha en fitball', 3, '5/lado', 45),
      ],
    },
    // S2
    {
      1: [
        _ex('gm_monster', 'Monster walks', 2, '20', 0),
        _ex('gm_abd_maq', 'Abducción cadera máquina', 2, '14', 60),
        _ex('gm_ht_ap', 'Hip Thrust (aproximación)', 2, '8,6', 0),
        _ex('gm_ht', 'Hip Thrust', 2, '8,10', 60),
        _ex('gm_sq_goblet', 'Sentadilla goblet', 3, '10', 60),
        _ex('gm_hiper', 'Hiperextensión', 1, '16-20', 60),
        _ex('gm_hiper_disco', 'Hiperextensión con disco', 2, '14-16', 60),
        _ex('gm_curl_fem', 'Curl de femoral', 3, '12', 60),
        _ex('gm_kb_swing', 'Kettlebell swing', 3, '6', 60),
        _ex('gm_crunch_res', 'Core | Crunch abdominal con resistencia', 3, '14', 30),
      ],
      2: [
        _ex('gm_pm_ap', 'Press militar barra (aproximación)', 2, '6,4', 0),
        _ex('gm_pm', 'Press militar con barra', 3, '8', 60),
        _ex('gm_jalon_uni', 'Jalón unilateral en polea', 3, '12', 60),
        _ex('gm_press_inc', 'Press banca inclinado mancuernas', 4, '10', 60),
        _ex('gm_elev_lat', 'Elevaciones laterales mancuernas', 4, '12', 60),
        _ex('gm_remo_disco', 'Remo con disco', 2, '10', 60),
        _ex('gm_curl_bic', 'Curl bíceps con mancuerna', 3, '14', 60),
        _ex('gm_ext_tri', 'Extensión tríceps polea', 3, '14', 60),
      ],
      4: [
        _ex('gm_hiper_inv', 'Hiperextensión invertida', 1, '16-18', 0),
        _ex('gm_hiper_gomas', 'Hiperextensión invertida con gomas', 2, '14-16', 0),
        _ex('gm_pmr_ap', 'Peso muerto rumano (aproximación)', 2, '8,6', 0),
        _ex('gm_pmr', 'Peso muerto rumano', 3, '8-10', 60),
        _ex('gm_sq_uni', 'Sentadilla unilateral con apoyo', 3, '10-12', 60),
        _ex('gm_patada', 'Patada glúteo polea', 3, '14-16', 60),
        _ex('gm_abd_pol', 'Abducción en polea', 2, '14-16', 60),
        _ex('gm_pull_thru', 'Pull through en polea', 2, '12-14', 60),
        _ex('gm_pike', 'Core | Pike plank en fitball', 3, '8', 30),
        _ex('gm_elev_pier', 'Elevación piernas colgada', 3, '8', 30),
      ],
      5: [
        _ex('gm_press_hom', 'Press hombro con mancuernas', 4, '8-10', 60),
        _ex('gm_jalon', 'Jalón al pecho', 3, '12', 60),
        _ex('gm_elev_uni', 'Elevaciones unilaterales', 3, '10', 60),
        _ex('gm_remo_uni', 'Remo unilateral mancuernas', 3, '8', 60),
        _ex('gm_delt_post', 'Deltoides posterior máquina', 3, '16', 60),
        _ex('gm_curl_conc', 'Curl concentrado', 2, '14', 60),
        _ex('gm_press_fran', 'Press francés', 3, '16', 60),
      ],
      6: [
        _ex('gm_abd_180', 'Abducción cadera resistencia 180º', 3, '18-20', 30),
        _ex('gm_sq_sumo', 'Sentadilla sumo', 3, '10', 60),
        _ex('gm_pmr_uni', 'Peso muerto rumano unilateral mancuernas', 3, '10', 60),
        _ex('gm_thruster', 'Thruster con mancuernas', 2, '8', 60),
        _ex('gm_remo_ment', 'Remo al mentón en polea', 3, '14', 60),
        _ex('gm_gemelo', 'Gemelo en prensa', 3, '20', 60),
        _ex('gm_plancha_fit', 'Core | Plancha en fitball', 3, '5/lado', 30),
      ],
    },
    // S3
    {
      1: [
        _ex('gm_monster', 'Monster walks', 2, '24', 30),
        _ex('gm_abd_maq', 'Abducción cadera máquina', 2, '16', 60),
        _ex('gm_ht_ap', 'Hip Thrust (aproximación)', 2, '8,6', 0),
        _ex('gm_ht', 'Hip Thrust', 2, '8,10', 60),
        _ex('gm_sq_goblet', 'Sentadilla goblet', 3, '10', 60),
        _ex('gm_hiper', 'Hiperextensión', 1, '16-20', 60),
        _ex('gm_hiper_disco', 'Hiperextensión con disco', 2, '14-16', 60),
        _ex('gm_curl_fem', 'Curl de femoral', 3, '12', 60),
        _ex('gm_kb_swing', 'Kettlebell swing', 3, '6', 30),
        _ex('gm_crunch_res', 'Core | Crunch abdominal con resistencia', 3, '14', 30),
      ],
      2: [
        _ex('gm_pm_ap', 'Press militar barra (aproximación)', 2, '6,4', 0),
        _ex('gm_pm', 'Press militar con barra', 3, '8', 60),
        _ex('gm_jalon_uni', 'Jalón unilateral en polea', 3, '12', 60),
        _ex('gm_press_inc', 'Press banca inclinado mancuernas', 4, '10', 60),
        _ex('gm_elev_lat', 'Elevaciones laterales mancuernas', 4, '12', 60),
        _ex('gm_remo_disco', 'Remo con disco', 2, '10', 60),
        _ex('gm_curl_bic', 'Curl bíceps con mancuerna', 3, '14', 60),
        _ex('gm_ext_tri', 'Extensión tríceps polea', 3, '14', 60),
      ],
      4: [
        _ex('gm_hiper_inv', 'Hiperextensión invertida', 1, '16-18', 0),
        _ex('gm_hiper_gomas', 'Hiperextensión invertida con gomas', 2, '14-16', 30),
        _ex('gm_pmr_ap', 'Peso muerto rumano (aproximación)', 2, '8,6', 0),
        _ex('gm_pmr', 'Peso muerto rumano', 3, '8-10', 60),
        _ex('gm_sq_uni', 'Sentadilla unilateral con apoyo', 3, '10-12', 60),
        _ex('gm_patada', 'Patada glúteo polea', 3, '14-16', 60),
        _ex('gm_abd_pol', 'Abducción en polea', 2, '14-16', 60),
        _ex('gm_pull_thru', 'Pull through en polea', 2, '12-14', 60),
        _ex('gm_pike', 'Core | Pike plank en fitball', 3, '8', 30),
        _ex('gm_elev_pier', 'Elevación piernas colgada', 3, '8', 30),
      ],
      5: [
        _ex('gm_press_hom', 'Press hombro con mancuernas', 4, '8-10', 60),
        _ex('gm_jalon', 'Jalón al pecho', 3, '12', 60),
        _ex('gm_elev_uni', 'Elevaciones unilaterales', 3, '10', 60),
        _ex('gm_remo_uni', 'Remo unilateral mancuernas', 3, '8', 60),
        _ex('gm_delt_post', 'Deltoides posterior máquina', 3, '16', 60),
        _ex('gm_curl_conc', 'Curl concentrado', 2, '14', 60),
        _ex('gm_press_fran', 'Press francés', 3, '16', 60),
      ],
      6: [
        _ex('gm_abd_180', 'Abducción cadera resistencia 180º', 3, '18-20', 0),
        _ex('gm_sq_sumo', 'Sentadilla sumo', 3, '10', 60),
        _ex('gm_pmr_uni', 'Peso muerto rumano unilateral mancuernas', 3, '10', 60),
        _ex('gm_thruster', 'Thruster con mancuernas', 2, '8', 60),
        _ex('gm_remo_ment', 'Remo al mentón en polea', 3, '14', 60),
        _ex('gm_gemelo', 'Gemelo en prensa', 3, '20', 60),
        _ex('gm_plancha_fit', 'Core | Plancha en fitball', 3, '5/lado', 30),
      ],
    },
    // S4
    {
      1: [
        _ex('gm_monster', 'Monster walks', 2, '24', 30),
        _ex('gm_abd_maq', 'Abducción cadera máquina', 2, '16', 60),
        _ex('gm_ht_ap', 'Hip Thrust (aproximación)', 2, '8,6', 0),
        _ex('gm_ht', 'Hip Thrust', 2, '8,10', 60),
        _ex('gm_sq_goblet', 'Sentadilla goblet', 3, '10', 60),
        _ex('gm_hiper', 'Hiperextensión', 1, '16-20', 0),
        _ex('gm_hiper_disco', 'Hiperextensión con disco', 2, '14-16', 60),
        _ex('gm_curl_fem', 'Curl de femoral', 4, '12', 60),
        _ex('gm_kb_swing', 'Kettlebell swing', 3, '6', 30),
        _ex('gm_crunch_res', 'Core | Crunch abdominal con resistencia', 3, '14', 30),
      ],
      2: [
        _ex('gm_pm_ap', 'Press militar barra (aproximación)', 2, '6,4', 0),
        _ex('gm_pm', 'Press militar con barra', 3, '8', 60),
        _ex('gm_jalon_uni', 'Jalón unilateral en polea', 3, '12', 60),
        _ex('gm_press_inc', 'Press banca inclinado mancuernas', 4, '10', 60),
        _ex('gm_elev_drop', 'Elevaciones laterales - DROP SET', 4, '12+máx', 60),
        _ex('gm_remo_disco', 'Remo con disco', 2, '10', 60),
        _ex('gm_curl_bic', 'Curl bíceps con mancuerna', 3, '14', 60),
        _ex('gm_ext_tri', 'Extensión tríceps polea', 3, '14', 60),
      ],
      4: [
        _ex('gm_hiper_inv', 'Hiperextensión invertida', 1, '16-18', 0),
        _ex('gm_hiper_gomas', 'Hiperextensión invertida con gomas', 2, '14-16', 30),
        _ex('gm_pmr_ap', 'Peso muerto rumano (aproximación)', 2, '8,6', 0),
        _ex('gm_pmr', 'Peso muerto rumano', 3, '8-10', 60),
        _ex('gm_sq_uni', 'Sentadilla unilateral con apoyo', 3, '10-12', 60),
        _ex('gm_patada', 'Patada glúteo polea', 3, '14-16', 60),
        _ex('gm_abd_pol', 'Abducción en polea', 3, '14-16', 60),
        _ex('gm_pull_thru', 'Pull through en polea', 2, '12-14', 60),
        _ex('gm_pike', 'Core | Pike plank en fitball', 3, '8', 30),
        _ex('gm_elev_pier', 'Elevación piernas colgada', 3, '8', 30),
      ],
      5: [
        _ex('gm_press_hom', 'Press hombro con mancuernas', 4, '8-10', 60),
        _ex('gm_jalon', 'Jalón al pecho', 3, '12', 60),
        _ex('gm_elev_uni', 'Elevaciones unilaterales', 4, '10', 60),
        _ex('gm_remo_uni', 'Remo unilateral mancuernas', 4, '8', 60),
        _ex('gm_delt_post', 'Deltoides posterior máquina', 4, '16', 60),
        _ex('gm_curl_conc', 'Curl concentrado', 2, '14', 60),
        _ex('gm_press_fran', 'Press francés', 4, '16', 60),
      ],
      6: [
        _ex('gm_abd_180', 'Abducción cadera resistencia 180º', 3, '18-20', 30),
        _ex('gm_sq_sumo', 'Sentadilla sumo', 3, '10', 60),
        _ex('gm_pmr_uni', 'Peso muerto rumano unilateral mancuernas', 3, '10', 60),
        _ex('gm_thruster', 'Thruster con mancuernas', 2, '8', 60),
        _ex('gm_remo_ment', 'Remo al mentón en polea', 3, '14', 60),
        _ex('gm_gemelo', 'Gemelo en prensa', 3, '20', 60),
        _ex('gm_plancha_fit', 'Core | Plancha en fitball', 3, '5/lado', 30),
      ],
    },
    // S5
    {
      1: [
        _ex('gm_monster', 'Monster walks', 2, '24', 30),
        _ex('gm_abd_maq', 'Abducción cadera máquina', 2, '16', 60),
        _ex('gm_ht_ap', 'Hip Thrust (aproximación)', 2, '8,6', 0),
        _ex('gm_ht', 'Hip Thrust', 2, '8,10', 60),
        _ex('gm_sq_goblet', 'Sentadilla goblet', 3, '10', 60),
        _ex('gm_hiper', 'Hiperextensión', 1, '16-20', 0),
        _ex('gm_hiper_disco', 'Hiperextensión con disco', 2, '14-16', 60),
        _ex('gm_curl_fem', 'Curl de femoral', 4, '12', 60),
        _ex('gm_kb_swing', 'Kettlebell swing', 3, '6', 30),
        _ex('gm_crunch_res', 'Core | Crunch abdominal con resistencia', 3, '14', 30),
      ],
      2: [
        _ex('gm_pm_ap', 'Press militar barra (aproximación)', 2, '6,4', 0),
        _ex('gm_pm', 'Press militar con barra', 3, '8', 60),
        _ex('gm_jalon_uni', 'Jalón unilateral en polea', 3, '12', 60),
        _ex('gm_press_inc', 'Press banca inclinado mancuernas', 4, '10', 60),
        _ex('gm_elev_drop', 'Elevaciones laterales - DROP SET DOBLE', 4, '12+máx+máx', 60),
        _ex('gm_remo_disco', 'Remo con disco', 2, '10', 60),
        _ex('gm_curl_bic', 'Curl bíceps con mancuerna', 3, '14', 60),
        _ex('gm_ext_tri', 'Extensión tríceps polea', 3, '14', 60),
      ],
      4: [
        _ex('gm_hiper_inv', 'Hiperextensión invertida', 1, '16-18', 0),
        _ex('gm_hiper_gomas', 'Hiperextensión invertida con gomas', 2, '14-16', 30),
        _ex('gm_pmr_ap', 'Peso muerto rumano (aproximación)', 2, '8,6', 0),
        _ex('gm_pmr', 'Peso muerto rumano', 3, '8-10', 60),
        _ex('gm_sq_uni', 'Sentadilla unilateral con apoyo', 3, '10-12', 60),
        _ex('gm_patada', 'Patada glúteo polea', 3, '14-16', 60),
        _ex('gm_abd_pol', 'Abducción en polea', 3, '14-16', 60),
        _ex('gm_pull_thru', 'Pull through en polea', 2, '12-14', 60),
        _ex('gm_pike', 'Core | Pike plank en fitball', 3, '8', 30),
        _ex('gm_elev_pier', 'Elevación piernas colgada', 3, '8', 30),
      ],
      5: [
        _ex('gm_press_hom', 'Press hombro con mancuernas', 4, '8-10', 60),
        _ex('gm_jalon', 'Jalón al pecho', 3, '12', 60),
        _ex('gm_elev_uni', 'Elevaciones unilaterales', 4, '10', 60),
        _ex('gm_remo_uni', 'Remo unilateral mancuernas', 4, '8', 60),
        _ex('gm_delt_post', 'Deltoides posterior máquina', 4, '16', 60),
        _ex('gm_curl_conc', 'Curl concentrado', 2, '14', 60),
        _ex('gm_press_fran', 'Press francés', 4, '16', 60),
      ],
      6: [
        _ex('gm_monster_d6', 'Monster walks', 3, '18-20', 30),
        _ex('gm_sq_sumo', 'Sentadilla sumo', 3, '10', 60),
        _ex('gm_pmr_uni', 'Peso muerto rumano unilateral mancuernas', 3, '10', 60),
        _ex('gm_thruster', 'Thruster con mancuernas', 2, '8', 60),
        _ex('gm_remo_ment', 'Remo al mentón en polea', 3, '14', 60),
        _ex('gm_gemelo', 'Gemelo en prensa', 3, '20', 60),
        _ex('gm_plancha_fit', 'Core | Plancha en fitball', 3, '5/lado', 30),
      ],
    },
    // S6 (Descarga)
    {
      1: [
        _ex('gm_monster', 'Monster walks | DESCARGA', 2, '20', 30),
        _ex('gm_abd_maq', 'Abducción cadera máquina', 2, '14', 60),
        _ex('gm_ht_ap', 'Hip Thrust (aproximación)', 2, '8,6', 0),
        _ex('gm_ht', 'Hip Thrust', 2, '8,10', 60),
        _ex('gm_sq_goblet', 'Sentadilla goblet', 2, '10', 60),
        _ex('gm_hiper', 'Hiperextensión', 1, '16-20', 0),
        _ex('gm_hiper_disco', 'Hiperextensión con disco', 1, '14-16', 60),
        _ex('gm_curl_fem', 'Curl de femoral', 2, '12', 60),
        _ex('gm_kb_swing', 'Kettlebell swing', 2, '6', 30),
        _ex('gm_crunch_res', 'Core | Crunch abdominal con resistencia', 3, '14', 30),
      ],
      2: [
        _ex('gm_pm_ap', 'Press militar barra (aproximación)', 2, '6,4', 0),
        _ex('gm_pm', 'Press militar con barra | DESCARGA', 2, '8', 60),
        _ex('gm_jalon_uni', 'Jalón unilateral en polea', 3, '12', 60),
        _ex('gm_press_inc', 'Press banca inclinado mancuernas', 4, '10', 60),
        _ex('gm_elev_lat', 'Elevaciones laterales mancuernas', 3, '12', 60),
        _ex('gm_remo_disco', 'Remo con disco', 2, '10', 60),
        _ex('gm_curl_bic', 'Curl bíceps con mancuerna', 3, '14', 60),
        _ex('gm_ext_tri', 'Extensión tríceps polea', 3, '14', 60),
      ],
      4: [
        _ex('gm_hiper_inv', 'Hiperextensión invertida', 3, '16-18', 0),
        _ex('gm_hiper_gomas', 'Hiperextensión invertida con gomas', 2, '14-16', 30),
        _ex('gm_pmr_ap', 'Peso muerto rumano (aproximación)', 2, '8,6', 0),
        _ex('gm_pmr', 'Peso muerto rumano | DESCARGA', 3, '8-10', 60),
        _ex('gm_sq_uni', 'Sentadilla unilateral con apoyo', 3, '10-12', 60),
        _ex('gm_patada', 'Patada glúteo polea', 2, '14-16', 60),
        _ex('gm_abd_pol', 'Abducción en polea', 2, '14-16', 60),
        _ex('gm_pull_thru', 'Pull through en polea', 2, '12-14', 60),
        _ex('gm_pike', 'Core | Pike plank en fitball', 2, '8', 30),
        _ex('gm_elev_pier', 'Elevación piernas colgada', 2, '8', 30),
      ],
      5: [
        _ex('gm_press_hom', 'Press hombro con mancuernas | DESCARGA', 3, '8-10', 60),
        _ex('gm_jalon', 'Jalón al pecho', 3, '12', 60),
        _ex('gm_elev_uni', 'Elevaciones unilaterales', 3, '10', 60),
        _ex('gm_remo_uni', 'Remo unilateral mancuernas', 3, '8', 60),
        _ex('gm_delt_post', 'Deltoides posterior máquina', 2, '16', 60),
        _ex('gm_curl_conc', 'Curl concentrado', 2, '14', 60),
        _ex('gm_press_fran', 'Press francés', 3, '16', 60),
      ],
      6: [
        _ex('gm_monster_d6', 'Monster walks | DESCARGA', 2, '18-20', 30),
        _ex('gm_sq_sumo', 'Sentadilla sumo', 2, '10', 60),
        _ex('gm_pmr_uni', 'Peso muerto rumano unilateral mancuernas', 2, '10', 60),
        _ex('gm_thruster', 'Thruster con mancuernas', 2, '8', 60),
        _ex('gm_remo_ment', 'Remo al mentón en polea', 2, '14', 60),
        _ex('gm_gemelo', 'Gemelo en prensa', 3, '20', 60),
        _ex('gm_plancha_fit', 'Core | Plancha en fitball', 3, '5/lado', 30),
      ],
    },
    // S7 (nueva rutina - Glute Bridge)
    {
      1: [
        _ex('gm_clam', 'Clamshell con gomas', 2, '16', 30),
        _ex('gm_gb_ap', 'Glute bridge barra (aproximación)', 2, '8,6', 0),
        _ex('gm_gb', 'Glute bridge con barra', 2, '8-10', 60),
        _ex('gm_sq_bulg', 'Sentadilla búlgara con mancuerna', 3, '10-12', 60),
        _ex('gm_pm_landmine', 'Peso muerto landmine', 2, '12-14', 60),
        _ex('gm_curl_fit', 'Curl femoral con fitball', 2, '8-10', 60),
        _ex('gm_pull_thru2', 'Pull through en polea', 2, '14', 60),
        _ex('gm_crunch_s7', 'Core | Crunch abdominal con resistencia', 2, '14', 60),
      ],
      2: [
        _ex('gm_pm_ap', 'Press militar barra (aproximación)', 2, '6,4', 0),
        _ex('gm_pm_s7', 'Press militar con barra', 4, '8', 60),
        _ex('gm_jalon', 'Jalón al pecho', 3, '12', 60),
        _ex('gm_flex', 'Progresión | Flexiones', 3, '10-12', 60),
        _ex('gm_elev_lat', 'Elevaciones laterales mancuernas', 3, '12', 60),
        _ex('gm_remo_uni_pol', 'Remo unilateral en polea', 3, '10', 60),
        _ex('gm_curl_ara', 'Curl araña', 4, '12', 60),
        _ex('gm_fond_tri', 'Fondos de tríceps en banco', 4, '8-10', 60),
      ],
      4: [
        _ex('gm_hiper_mp', 'Hiperextensión invertida en multipower', 2, '12-14', 60),
        _ex('gm_pm_sumo_ap', 'Peso muerto sumo (aproximación)', 2, '6,4', 0),
        _ex('gm_pm_sumo', 'Peso muerto sumo', 3, '8-10', 60),
        _ex('gm_patada_cuadru', 'Patada glúteo polea cuadrupedia', 3, '14', 60),
        _ex('gm_cossak', 'Sentadilla Cossak con mancuerna', 3, '8-10', 60),
        _ex('gm_buenos_dias', 'Buenos días', 2, '12', 60),
        _ex('gm_step_up', 'Step up con mancuerna', 3, '6-8', 60),
        _ex('gm_crunch_lat', 'Core | Crunch abdominal lateral', 3, '8', 30),
        _ex('gm_v_ups', 'Core | V ups', 2, '10', 30),
      ],
      5: [
        _ex('gm_press_hom_uni', 'Press hombro unilateral', 3, '10', 30),
        _ex('gm_aus_pull', 'Australian pull-ups', 3, '8-10', 60),
        _ex('gm_elev_front', 'Elevaciones frontales con disco', 3, '12', 60),
        _ex('gm_pull_over', 'Pull over en polea', 3, '10', 60),
        _ex('gm_facepull', 'Facepull en polea', 3, '14', 60),
        _ex('gm_curl_pie', 'Curl de bíceps de pie', 4, '14', 60),
        _ex('gm_pat_tri', 'Patada de tríceps', 4, '16', 60),
      ],
      6: [
        _ex('gm_abd_45', 'Abducción cadera resistencia 45º', 2, '14-16', 30),
        _ex('gm_ht_ap_s7', 'Hip Thrust (aproximación)', 2, '6,4', 0),
        _ex('gm_ht_s7', 'Hip Thrust', 2, '8,10', 90),
        _ex('gm_pmr_s7', 'Peso muerto rumano', 3, '10', 60),
        _ex('gm_remo_ment', 'Remo al mentón en polea', 2, '14', 60),
        _ex('gm_elev_pol', 'Elevaciones laterales en polea', 2, '14', 60),
        _ex('gm_pm_sq_kb', 'Peso muerto + sentadilla con kettlebell', 2, '10', 60),
        _ex('gm_gemelo', 'Gemelo en prensa', 3, '20', 60),
        _ex('gm_bicycle', 'Core | Bicycle twist', 3, '15"', 30),
      ],
    },
    // S8
    {
      1: [
        _ex('gm_clam', 'Clamshell con gomas', 2, '16', 0),
        _ex('gm_gb_ap', 'Glute bridge barra (aproximación)', 2, '8,6', 0),
        _ex('gm_gb', 'Glute bridge con barra', 2, '8-10', 60),
        _ex('gm_sq_bulg', 'Sentadilla búlgara con mancuerna', 3, '8-12', 60),
        _ex('gm_pm_landmine', 'Peso muerto landmine', 2, '12-14', 60),
        _ex('gm_curl_fit', 'Curl femoral con fitball', 2, '8-10', 60),
        _ex('gm_pull_thru2', 'Pull through en polea', 2, '14', 60),
        _ex('gm_crunch_s7', 'Core | Crunch abdominal con resistencia', 2, '14', 30),
      ],
      2: [
        _ex('gm_pm_ap', 'Press militar barra (aproximación)', 2, '6,4', 0),
        _ex('gm_pm_s7', 'Press militar con barra', 4, '8', 60),
        _ex('gm_jalon', 'Jalón al pecho', 3, '12', 60),
        _ex('gm_flex', 'Progresión | Flexiones', 3, '12-14', 60),
        _ex('gm_elev_lat', 'Elevaciones laterales mancuernas', 3, '12', 60),
        _ex('gm_remo_uni_pol', 'Remo unilateral en polea', 3, '10', 60),
        _ex('gm_curl_ara', 'Curl araña', 4, '12', 60),
        _ex('gm_fond_tri_sus', 'Fondos tríceps banco en suspensión', 4, '8-10', 60),
      ],
      4: [
        _ex('gm_hiper_mp', 'Hiperextensión invertida en multipower', 2, '12-14', 60),
        _ex('gm_pm_sumo_ap', 'Peso muerto sumo (aproximación)', 2, '6,4', 0),
        _ex('gm_pm_sumo', 'Peso muerto sumo', 3, '8-10', 60),
        _ex('gm_patada_cuadru', 'Patada glúteo polea cuadrupedia', 3, '14', 60),
        _ex('gm_cossak', 'Sentadilla Cossak con mancuerna', 3, '8-10', 60),
        _ex('gm_buenos_dias', 'Buenos días', 3, '12', 60),
        _ex('gm_step_up', 'Step up con mancuerna', 3, '6-8', 60),
        _ex('gm_crunch_lat', 'Core | Crunch abdominal lateral', 3, '8', 30),
        _ex('gm_v_ups', 'Core | V ups', 2, '10', 30),
      ],
      5: [
        _ex('gm_press_hom_uni', 'Press hombro unilateral', 3, '10', 60),
        _ex('gm_aus_pull', 'Australian pull-ups', 3, '8-10', 60),
        _ex('gm_elev_front', 'Elevaciones frontales con disco', 3, '12', 60),
        _ex('gm_pull_over', 'Pull over en polea', 3, '10', 60),
        _ex('gm_facepull', 'Facepull en polea', 3, '14', 60),
        _ex('gm_curl_pie', 'Curl de bíceps de pie', 4, '14', 60),
        _ex('gm_pat_tri', 'Patada de tríceps', 4, '16', 60),
      ],
      6: [
        _ex('gm_abd_45', 'Abducción cadera resistencia 45º', 2, '14-16', 30),
        _ex('gm_ht_ap_s7', 'Hip Thrust (aproximación)', 2, '6,4', 0),
        _ex('gm_ht_s7', 'Hip Thrust', 2, '8,10', 90),
        _ex('gm_pmr_s7', 'Peso muerto rumano', 3, '10', 60),
        _ex('gm_remo_ment', 'Remo al mentón en polea', 3, '14', 60),
        _ex('gm_elev_pol', 'Elevaciones laterales en polea', 2, '14', 60),
        _ex('gm_pm_sq_kb', 'Peso muerto + sentadilla con kettlebell', 2, '10', 60),
        _ex('gm_gemelo', 'Gemelo en prensa', 3, '20', 60),
        _ex('gm_bicycle', 'Core | Bicycle twist', 3, '15"', 30),
      ],
    },
    // S9
    {
      1: [
        _ex('gm_clam', 'Clamshell con gomas', 2, '16', 30),
        _ex('gm_gb_ap', 'Glute bridge barra (aproximación)', 2, '8,6', 0),
        _ex('gm_gb', 'Glute bridge con barra', 3, '8-10', 60),
        _ex('gm_sq_bulg', 'Sentadilla búlgara con mancuerna', 3, '8-12', 60),
        _ex('gm_pm_landmine', 'Peso muerto landmine', 2, '12-14', 60),
        _ex('gm_curl_fit', 'Curl femoral con fitball', 2, '8-10', 60),
        _ex('gm_pull_thru2', 'Pull through en polea', 2, '14', 60),
        _ex('gm_crunch_s7', 'Core | Crunch abdominal con resistencia', 2, '14', 30),
      ],
      2: [
        _ex('gm_pm_ap', 'Press militar barra (aproximación)', 2, '6,4', 0),
        _ex('gm_pm_s7', 'Press militar con barra', 4, '8', 90),
        _ex('gm_jalon', 'Jalón al pecho', 3, '12', 60),
        _ex('gm_flex', 'Progresión | Flexiones', 3, '12-14', 60),
        _ex('gm_elev_lat', 'Elevaciones laterales mancuernas', 3, '12', 60),
        _ex('gm_remo_uni_pol', 'Remo unilateral en polea', 3, '10', 60),
        _ex('gm_curl_ara', 'Curl araña', 4, '12', 60),
        _ex('gm_fond_tri_sus', 'Fondos tríceps banco en suspensión', 4, '8-10', 60),
      ],
      4: [
        _ex('gm_hiper_mp', 'Hiperextensión invertida en multipower', 2, '12-14', 60),
        _ex('gm_pm_sumo_ap', 'Peso muerto sumo (aproximación)', 2, '6,4', 0),
        _ex('gm_pm_sumo', 'Peso muerto sumo', 3, '8-10', 90),
        _ex('gm_patada_cuadru', 'Patada glúteo polea cuadrupedia', 3, '14', 30),
        _ex('gm_cossak', 'Sentadilla Cossak con mancuerna', 3, '8-10', 60),
        _ex('gm_buenos_dias', 'Buenos días', 3, '12', 60),
        _ex('gm_step_up', 'Step up con mancuerna', 3, '6-8', 60),
        _ex('gm_crunch_lat', 'Core | Crunch abdominal lateral', 3, '8', 30),
        _ex('gm_v_ups', 'Core | V ups', 2, '10', 30),
      ],
      5: [
        _ex('gm_press_hom_uni', 'Press hombro unilateral', 3, '10', 60),
        _ex('gm_aus_pull', 'Australian pull-ups', 3, '8-10', 60),
        _ex('gm_elev_front', 'Elevaciones frontales con disco', 3, '12', 60),
        _ex('gm_pull_over', 'Pull over en polea', 3, '10', 60),
        _ex('gm_facepull', 'Facepull en polea', 3, '14', 60),
        _ex('gm_curl_pie', 'Curl de bíceps de pie', 4, '14', 60),
        _ex('gm_pat_tri', 'Patada de tríceps', 4, '16', 60),
      ],
      6: [
        _ex('gm_abd_45', 'Abducción cadera resistencia 45º', 2, '18-20', 30),
        _ex('gm_ht_ap_s7', 'Hip Thrust (aproximación)', 2, '6,4', 0),
        _ex('gm_ht_s7', 'Hip Thrust', 2, '8,10', 90),
        _ex('gm_pmr_s7', 'Peso muerto rumano', 3, '10', 60),
        _ex('gm_remo_ment', 'Remo al mentón en polea', 3, '14', 60),
        _ex('gm_elev_pol', 'Elevaciones laterales en polea', 2, '14', 60),
        _ex('gm_pm_sq_kb', 'Peso muerto + sentadilla con kettlebell', 2, '10', 60),
        _ex('gm_gemelo', 'Gemelo en prensa', 3, '20', 60),
        _ex('gm_bicycle', 'Core | Bicycle twist', 3, '15"', 30),
      ],
    },
    // S10
    {
      1: [
        _ex('gm_clam', 'Clamshell con gomas', 2, '16', 30),
        _ex('gm_gb_ap', 'Glute bridge barra (aproximación)', 2, '8,6', 0),
        _ex('gm_gb', 'Glute bridge con barra', 3, '8-10', 60),
        _ex('gm_sq_bulg', 'Sentadilla búlgara con mancuerna', 3, '8-12', 60),
        _ex('gm_pm_landmine', 'Peso muerto landmine', 2, '12-14', 60),
        _ex('gm_curl_fit', 'Curl femoral con fitball', 2, '8-10', 60),
        _ex('gm_pull_thru2', 'Pull through en polea', 2, '14', 60),
        _ex('gm_crunch_s7', 'Core | Crunch abdominal con resistencia', 2, '14', 60),
      ],
      2: [
        _ex('gm_pm_ap', 'Press militar barra (aproximación)', 2, '6,4', 0),
        _ex('gm_pm_s7', 'Press militar con barra', 4, '8', 60),
        _ex('gm_jalon', 'Jalón al pecho', 3, '12', 60),
        _ex('gm_flex', 'Progresión | Flexiones', 3, '14-16', 60),
        _ex('gm_elev_drop', 'Elevaciones laterales - DROP SET', 4, '12+máx', 60),
        _ex('gm_remo_uni_pol', 'Remo unilateral en polea', 3, '10', 60),
        _ex('gm_curl_ara', 'Curl araña', 4, '12', 60),
        _ex('gm_fond_tri_4', 'Fondos de tríceps', 4, '4-6', 60),
      ],
      4: [
        _ex('gm_hiper_mp', 'Hiperextensión invertida en multipower', 2, '12-14', 60),
        _ex('gm_pm_sumo_ap', 'Peso muerto sumo (aproximación)', 2, '6,4', 0),
        _ex('gm_pm_sumo', 'Peso muerto sumo', 4, '8-10', 60),
        _ex('gm_patada_cuadru', 'Patada glúteo polea cuadrupedia', 3, '14', 60),
        _ex('gm_cossak', 'Sentadilla Cossak con mancuerna', 3, '8-10', 60),
        _ex('gm_buenos_dias', 'Buenos días', 4, '12', 60),
        _ex('gm_step_up', 'Step up con mancuerna', 3, '6-8', 60),
        _ex('gm_crunch_lat', 'Core | Crunch abdominal lateral', 3, '8', 60),
        _ex('gm_v_ups', 'Core | V ups', 2, '10', 60),
      ],
      5: [
        _ex('gm_press_hom_uni', 'Press hombro unilateral', 3, '10', 60),
        _ex('gm_aus_pull', 'Australian pull-ups', 3, '8-10', 60),
        _ex('gm_elev_front', 'Elevaciones frontales con disco', 3, '12', 60),
        _ex('gm_pull_over', 'Pull over en polea', 3, '10', 60),
        _ex('gm_facepull', 'Facepull en polea', 3, '14', 60),
        _ex('gm_curl_pie', 'Curl de bíceps de pie', 4, '14', 60),
        _ex('gm_pat_tri', 'Patada de tríceps', 4, '16', 60),
      ],
      6: [
        _ex('gm_abd_45', 'Abducción cadera resistencia 45º', 2, '18-20', 30),
        _ex('gm_ht_ap_s7', 'Hip Thrust (aproximación)', 2, '6,4', 0),
        _ex('gm_ht_s7', 'Hip Thrust', 2, '8,10', 90),
        _ex('gm_pmr_s7', 'Peso muerto rumano', 3, '10', 60),
        _ex('gm_remo_ment', 'Remo al mentón en polea', 4, '14', 60),
        _ex('gm_elev_pol', 'Elevaciones laterales en polea', 2, '14', 60),
        _ex('gm_pm_sq_kb', 'Peso muerto + sentadilla con kettlebell', 3, '10', 60),
        _ex('gm_gemelo', 'Gemelo en prensa', 3, '20', 60),
        _ex('gm_bicycle', 'Core | Bicycle twist', 3, '15"', 30),
      ],
    },
    // S11
    {
      1: [
        _ex('gm_clam', 'Clamshell con gomas', 2, '16', 30),
        _ex('gm_gb_ap', 'Glute bridge barra (aproximación)', 2, '8,6', 0),
        _ex('gm_gb', 'Glute bridge con barra', 3, '8-10', 60),
        _ex('gm_sq_bulg', 'Sentadilla búlgara con mancuerna', 3, '8-12', 60),
        _ex('gm_pm_landmine', 'Peso muerto landmine', 2, '12-14', 60),
        _ex('gm_curl_fit', 'Curl femoral con fitball', 2, '8-10', 60),
        _ex('gm_pull_thru2', 'Pull through en polea', 2, '14', 60),
        _ex('gm_crunch_s7', 'Core | Crunch abdominal con resistencia', 2, '14', 30),
      ],
      2: [
        _ex('gm_pm_ap', 'Press militar barra (aproximación)', 2, '6,4', 0),
        _ex('gm_pm_s7', 'Press militar con barra', 4, '8', 60),
        _ex('gm_jalon', 'Jalón al pecho', 3, '12', 60),
        _ex('gm_flex', 'Progresión | Flexiones', 3, '16-18', 60),
        _ex('gm_elev_drop_dbl', 'Elevaciones laterales - DROP SET DOBLE', 5, '12+máx+máx', 120),
        _ex('gm_remo_uni_pol', 'Remo unilateral en polea', 3, '10', 60),
        _ex('gm_curl_ara', 'Curl araña', 4, '12', 30),
        _ex('gm_fond_tri_4', 'Fondos de tríceps', 4, '4-6', 60),
      ],
      4: [
        _ex('gm_hiper_mp', 'Hiperextensión invertida en multipower', 2, '12-14', 60),
        _ex('gm_pm_sumo_ap', 'Peso muerto sumo (aproximación)', 2, '6,4', 0),
        _ex('gm_pm_sumo', 'Peso muerto sumo', 4, '8-10', 60),
        _ex('gm_patada_cuadru', 'Patada glúteo polea cuadrupedia', 3, '14', 60),
        _ex('gm_cossak', 'Sentadilla Cossak con mancuerna', 3, '8-10', 60),
        _ex('gm_buenos_dias', 'Buenos días', 4, '12', 60),
        _ex('gm_step_up', 'Step up con mancuerna', 3, '6-8', 60),
        _ex('gm_crunch_lat', 'Core | Crunch abdominal lateral', 3, '8', 30),
        _ex('gm_v_ups', 'Core | V ups', 2, '10', 30),
      ],
      5: [
        _ex('gm_press_hom_uni', 'Press hombro unilateral', 3, '10', 60),
        _ex('gm_aus_pull', 'Australian pull-ups', 3, '8-10', 60),
        _ex('gm_elev_front', 'Elevaciones frontales con disco', 3, '12', 60),
        _ex('gm_pull_over', 'Pull over en polea', 3, '10', 60),
        _ex('gm_facepull', 'Facepull en polea', 3, '14', 60),
        _ex('gm_curl_pie', 'Curl de bíceps de pie', 4, '14', 60),
        _ex('gm_pat_tri', 'Patada de tríceps', 4, '16', 60),
      ],
      6: [
        _ex('gm_abd_45', 'Abducción cadera resistencia 45º', 2, '18-20', 30),
        _ex('gm_ht_ap_s7', 'Hip Thrust (aproximación)', 2, '6,4', 0),
        _ex('gm_ht_s7', 'Hip Thrust', 2, '8,10', 90),
        _ex('gm_pmr_s7', 'Peso muerto rumano', 3, '10', 60),
        _ex('gm_remo_ment', 'Remo al mentón en polea', 4, '14', 60),
        _ex('gm_elev_pol', 'Elevaciones laterales en polea', 2, '14', 60),
        _ex('gm_pm_sq_kb', 'Peso muerto + sentadilla con kettlebell', 3, '10', 60),
        _ex('gm_gemelo', 'Gemelo en prensa', 3, '20', 60),
        _ex('gm_bicycle', 'Core | Bicycle twist', 3, '15"', 30),
      ],
    },
    // S12 (Deload)
    {
      1: [
        _ex('gm_clam', 'Clamshell con gomas', 2, '16', 30),
        _ex('gm_gb_ap', 'Glute bridge barra (aproximación)', 2, '8,6', 0),
        _ex('gm_gb', 'Glute bridge con barra | DELOAD', 2, '8-10', 60),
        _ex('gm_sq_bulg', 'Sentadilla búlgara con mancuerna', 3, '10-12', 60),
        _ex('gm_pm_landmine', 'Peso muerto landmine', 2, '12-14', 60),
        _ex('gm_curl_fit', 'Curl femoral con fitball', 2, '8-10', 60),
        _ex('gm_pull_thru2', 'Pull through en polea', 2, '14', 60),
        _ex('gm_crunch_s7', 'Core | Crunch abdominal con resistencia', 2, '14', 30),
      ],
      2: [
        _ex('gm_pm_ap', 'Press militar barra (aproximación)', 2, '6,4', 0),
        _ex('gm_pm_s7', 'Press militar con barra | DELOAD', 4, '8', 60),
        _ex('gm_jalon', 'Jalón al pecho', 3, '12', 60),
        _ex('gm_flex', 'Progresión | Flexiones', 3, '10-12', 60),
        _ex('gm_elev_lat', 'Elevaciones laterales mancuernas', 3, '12', 60),
        _ex('gm_remo_uni_pol', 'Remo unilateral en polea', 3, '10', 60),
        _ex('gm_curl_ara', 'Curl araña', 3, '12', 60),
        _ex('gm_fond_tri', 'Fondos de tríceps en banco', 3, '8-10', 60),
      ],
      4: [
        _ex('gm_hiper_mp', 'Hiperextensión invertida en multipower', 2, '12-14', 60),
        _ex('gm_pm_sumo_ap', 'Peso muerto sumo (aproximación)', 2, '6,4', 0),
        _ex('gm_pm_sumo', 'Peso muerto sumo | DELOAD', 3, '8-10', 60),
        _ex('gm_patada_cuadru', 'Patada glúteo polea cuadrupedia', 3, '14', 60),
        _ex('gm_cossak', 'Sentadilla Cossak con mancuerna', 3, '8-10', 60),
        _ex('gm_buenos_dias', 'Buenos días', 2, '12', 60),
        _ex('gm_step_up', 'Step up con mancuerna', 3, '6-8', 60),
        _ex('gm_crunch_lat', 'Core | Crunch abdominal lateral', 3, '8', 30),
        _ex('gm_v_ups', 'Core | V ups', 2, '10', 30),
      ],
      5: [
        _ex('gm_press_hom_uni', 'Press hombro unilateral', 3, '10', 60),
        _ex('gm_aus_pull', 'Australian pull-ups', 3, '8-10', 60),
        _ex('gm_elev_front', 'Elevaciones frontales con disco', 3, '12', 60),
        _ex('gm_pull_over', 'Pull over en polea', 3, '10', 60),
        _ex('gm_facepull', 'Facepull en polea', 3, '14', 60),
        _ex('gm_curl_pie', 'Curl de bíceps de pie', 4, '14', 60),
        _ex('gm_pat_tri', 'Patada de tríceps', 4, '16', 60),
      ],
      6: [
        _ex('gm_abd_45', 'Abducción cadera resistencia 45º', 2, '14-16', 30),
        _ex('gm_ht_ap_s7', 'Hip Thrust (aproximación)', 2, '6,4', 0),
        _ex('gm_ht_s7', 'Hip Thrust | DELOAD', 2, '8,10', 90),
        _ex('gm_pmr_s7', 'Peso muerto rumano', 3, '10', 60),
        _ex('gm_remo_ment', 'Remo al mentón en polea', 2, '14', 60),
        _ex('gm_elev_pol_s12', 'Elevaciones laterales en polea', 2, '12', 60),
        _ex('gm_pm_sq_kb', 'Peso muerto + sentadilla con kettlebell', 2, '10', 60),
        _ex('gm_gemelo', 'Gemelo en prensa', 3, '20', 60),
        _ex('gm_bicycle_s12', 'Core | Bicycle twist', 3, '30"', 30),
      ],
    },
  ]
};

/* ══════════════ HIBRIDO - FUERZA Y CARRERA (12 semanas) ══════════════ */
WORKOUT_PLANS.hibrido_fuerza_carrera = {
  id: 'hibrido_fuerza_carrera',
  name: 'Híbrido - Fuerza y Carrera',
  description: '12 semanas | Fuerza + Cardio híbrido | 6 días/semana',
  planType: 'phased',
  weeks: 12,
  trainingDays: [1, 2, 3, 4, 6, 7],
  dayMeta: {
    1: { name: 'Día 1 — Carrera continua', type: 'running', muscleGroups: ['Cardio'] },
    2: { name: 'Día 2 — Fullbody', type: 'strength', muscleGroups: ['Piernas', 'Torso', 'Core'] },
    3: { name: 'Día 3 — Intervalos', type: 'running', muscleGroups: ['Cardio'] },
    4: { name: 'Día 4 — Fullbody', type: 'strength', muscleGroups: ['Piernas', 'Torso', 'Core'] },
    6: { name: 'Día 6 — Fullbody', type: 'strength', muscleGroups: ['Piernas', 'Torso', 'Core'] },
    7: { name: 'Día 7 — Regenerativo', type: 'running', muscleGroups: ['Cardio'] }
  },
  weeklySchedule: [
    // S1
    {
      1: [
        _ex('hfc_m_bal', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_toe', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_h', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_cont', 'Correr continuo', 1, '20 min', 0, 'Zona 3 (moderada)'),
      ],
      2: [
        _ex('hfc_m_add_kb', 'Movilidad | Aductores con kettlebell', 2, '10/lado', 60),
        _ex('hfc_m_kb_lift', 'Movilidad | Kettlebell leg lift over', 2, '6/lado', 60),
        _ex('hfc_m_snow', 'Movilidad | Prone snow angels', 2, '10', 60),
      ],
      3: [
        _ex('hfc_m_bal_s3', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_s3', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s3', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_cal_s3', 'Calentamiento | Correr a trote', 1, '2 km', 0),
        _ex('hfc_sprint_400', 'Sprint 400m', 5, '400m', 60, 'Intervalos'),
        _ex('hfc_vuelta_s3', 'Vuelta a la calma | Correr a trote', 1, '2 km', 0),
      ],
      4: [
        _ex('hfc_m_cat', 'Movilidad | Cat camel', 2, '10', 60),
        _ex('hfc_m_bridge', 'Movilidad | Bridge march', 2, '10/lado', 60),
        _ex('hfc_m_rot_hum', 'Movilidad | Rotación humeral en banco', 2, '10/lado', 60),
        _ex('hfc_ht', 'Hip Thrust', 3, '8-10', 120),
        _ex('hfc_pm', 'Peso muerto convencional', 2, '7', 120),
        _ex('hfc_box_jump', 'Box jump desde rodillas', 3, '5', 120, 'Progresión'),
        _ex('hfc_scissor_press', 'Scissor landmine press', 3, '8/lado', 120),
        _ex('hfc_remo_seal', 'Remo seal con mancuernas', 3, '14', 120),
        _ex('hfc_core_wheel', 'Core | Rueda abdominal adaptada', 3, '8', 120),
      ],
      6: [
        _ex('hfc_m_deep_squat', 'Movilidad | Deep squat prayer opener', 1, '30"', 60),
        _ex('hfc_m_copenh', 'Movilidad | Plancha Copenhague', 2, '20"/lado', 60),
        _ex('hfc_m_cab', 'Movilidad | Shoulder CAB', 2, '10/lado', 60),
        _ex('hfc_sq_libre', 'Sentadilla libre barra alta', 3, '8-10', 120),
        _ex('hfc_zancada', 'Zancadas con mancuernas', 3, '20 pasos', 120),
        _ex('hfc_gorilla_row', 'Gorilla row', 3, '8/lado', 120),
        _ex('hfc_pm_landmine', 'Peso muerto landmine', 2, '10', 120),
        _ex('hfc_elev_lat', 'Elevaciones laterales mancuernas', 3, '10-12', 120),
        _ex('hfc_core_deadbug', 'Core | Deadbugs con fitball', 3, '8/lado', 120),
        _ex('hfc_core_plank', 'Core | Plancha', 3, '30"', 120),
      ],
      7: [
        _ex('hfc_m_bal_s7', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_sed', 'Movilidad | Flexión de tobillo en sedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s7', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_regen', 'Correr regenerativo', 1, '20 min', 0, 'Zona 1-2 (baja)'),
      ],
    },
    // S2-S12 (same structure as S1 - repeated for 12 weeks)
    {
      1: [
        _ex('hfc_m_bal', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_toe', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_h', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_cont', 'Correr continuo', 1, '20 min', 0, 'Zona 3 (moderada)'),
      ],
      2: [
        _ex('hfc_m_add_kb', 'Movilidad | Aductores con kettlebell', 2, '10/lado', 60),
        _ex('hfc_m_kb_lift', 'Movilidad | Kettlebell leg lift over', 2, '6/lado', 60),
        _ex('hfc_m_snow', 'Movilidad | Prone snow angels', 2, '10', 60),
      ],
      3: [
        _ex('hfc_m_bal_s3', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_s3', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s3', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_cal_s3', 'Calentamiento | Correr a trote', 1, '2 km', 0),
        _ex('hfc_sprint_400', 'Sprint 400m', 5, '400m', 60, 'Intervalos'),
        _ex('hfc_vuelta_s3', 'Vuelta a la calma | Correr a trote', 1, '2 km', 0),
      ],
      4: [
        _ex('hfc_ht_s2', 'Hip Thrust', 3, '8-10', 120),
        _ex('hfc_pm_s2', 'Peso muerto convencional', 2, '7', 120),
        _ex('hfc_box_jump_s2', 'Box jump desde rodillas', 3, '5', 120, 'Progresión'),
        _ex('hfc_scissor_press_s2', 'Scissor landmine press', 3, '8/lado', 120),
        _ex('hfc_remo_seal_s2', 'Remo seal con mancuernas', 3, '14', 120),
        _ex('hfc_core_wheel_s2', 'Core | Rueda abdominal adaptada', 3, '8', 120),
      ],
      6: [
        _ex('hfc_sq_libre_s2', 'Sentadilla libre barra alta', 3, '8-10', 120),
        _ex('hfc_zancada_s2', 'Zancadas con mancuernas', 3, '20 pasos', 120),
        _ex('hfc_gorilla_row_s2', 'Gorilla row', 3, '8/lado', 120),
        _ex('hfc_pm_landmine_s2', 'Peso muerto landmine', 2, '10', 120),
        _ex('hfc_elev_lat_s2', 'Elevaciones laterales mancuernas', 3, '10-12', 120),
        _ex('hfc_core_deadbug_s2', 'Core | Deadbugs con fitball', 3, '8/lado', 120),
        _ex('hfc_core_plank_s2', 'Core | Plancha', 3, '30"', 120),
      ],
      7: [
        _ex('hfc_m_bal_s7', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_sed', 'Movilidad | Flexión de tobillo en sedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s7', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_regen', 'Correr regenerativo', 1, '20 min', 0, 'Zona 1-2 (baja)'),
      ],
    },
    {
      1: [
        _ex('hfc_m_bal', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_toe', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_h', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_cont', 'Correr continuo', 1, '22 min', 0, 'Zona 3 (moderada)'),
      ],
      2: [
        _ex('hfc_m_add_kb', 'Movilidad | Aductores con kettlebell', 2, '10/lado', 60),
        _ex('hfc_m_kb_lift', 'Movilidad | Kettlebell leg lift over', 2, '6/lado', 60),
        _ex('hfc_m_snow', 'Movilidad | Prone snow angels', 2, '10', 60),
      ],
      3: [
        _ex('hfc_m_bal_s3', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_s3', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s3', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_cal_s3', 'Calentamiento | Correr a trote', 1, '2 km', 0),
        _ex('hfc_sprint_400_s3', 'Sprint 400m', 6, '400m', 60, 'Intervalos - progresión'),
        _ex('hfc_vuelta_s3', 'Vuelta a la calma | Correr a trote', 1, '2 km', 0),
      ],
      4: [
        _ex('hfc_ht_s3', 'Hip Thrust', 3, '10-12', 120),
        _ex('hfc_pm_s3', 'Peso muerto convencional', 3, '7-8', 120),
        _ex('hfc_box_jump_s3', 'Box jump desde rodillas', 3, '6', 120, 'Progresión'),
        _ex('hfc_scissor_press_s3', 'Scissor landmine press', 3, '10/lado', 120),
        _ex('hfc_remo_seal_s3', 'Remo seal con mancuernas', 3, '12', 120),
        _ex('hfc_core_wheel_s3', 'Core | Rueda abdominal adaptada', 3, '10', 120),
      ],
      6: [
        _ex('hfc_sq_libre_s3', 'Sentadilla libre barra alta', 3, '10-12', 120),
        _ex('hfc_zancada_s3', 'Zancadas con mancuernas', 3, '20 pasos', 120),
        _ex('hfc_gorilla_row_s3', 'Gorilla row', 3, '10/lado', 120),
        _ex('hfc_pm_landmine_s3', 'Peso muerto landmine', 3, '10-12', 120),
        _ex('hfc_elev_lat_s3', 'Elevaciones laterales mancuernas', 3, '12-14', 120),
        _ex('hfc_core_deadbug_s3', 'Core | Deadbugs con fitball', 3, '10/lado', 120),
        _ex('hfc_core_plank_s3', 'Core | Plancha', 3, '40"', 120),
      ],
      7: [
        _ex('hfc_m_bal_s7', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_sed', 'Movilidad | Flexión de tobillo en sedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s7', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_regen', 'Correr regenerativo', 1, '22 min', 0, 'Zona 1-2 (baja)'),
      ],
    },
    {
      1: [
        _ex('hfc_m_bal', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_toe', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_h', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_cont_s4', 'Correr continuo', 1, '22 min', 0, 'Zona 3 (moderada)'),
      ],
      2: [
        _ex('hfc_m_add_kb', 'Movilidad | Aductores con kettlebell', 2, '10/lado', 60),
        _ex('hfc_m_kb_lift', 'Movilidad | Kettlebell leg lift over', 2, '6/lado', 60),
        _ex('hfc_m_snow', 'Movilidad | Prone snow angels', 2, '10', 60),
      ],
      3: [
        _ex('hfc_m_bal_s3', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_s3', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s3', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_cal_s3', 'Calentamiento | Correr a trote', 1, '2 km', 0),
        _ex('hfc_sprint_400_s4', 'Sprint 400m', 6, '400m', 60, 'Intervalos'),
        _ex('hfc_vuelta_s3', 'Vuelta a la calma | Correr a trote', 1, '2 km', 0),
      ],
      4: [
        _ex('hfc_ht_s4', 'Hip Thrust', 3, '10-12', 120),
        _ex('hfc_pm_s4', 'Peso muerto convencional', 3, '8', 120),
        _ex('hfc_box_jump_s4', 'Box jump desde rodillas', 3, '6', 120, 'Progresión'),
        _ex('hfc_scissor_press_s4', 'Scissor landmine press', 3, '10/lado', 120),
        _ex('hfc_remo_seal_s4', 'Remo seal con mancuernas', 4, '12', 120),
        _ex('hfc_core_wheel_s4', 'Core | Rueda abdominal adaptada', 3, '10', 120),
      ],
      6: [
        _ex('hfc_sq_libre_s4', 'Sentadilla libre barra alta', 3, '10-12', 120),
        _ex('hfc_zancada_s4', 'Zancadas con mancuernas', 3, '20 pasos', 120),
        _ex('hfc_gorilla_row_s4', 'Gorilla row', 4, '10/lado', 120),
        _ex('hfc_pm_landmine_s4', 'Peso muerto landmine', 3, '10-12', 120),
        _ex('hfc_elev_lat_s4', 'Elevaciones laterales mancuernas', 3, '12-14', 120),
        _ex('hfc_core_deadbug_s4', 'Core | Deadbugs con fitball', 3, '10/lado', 120),
        _ex('hfc_core_plank_s4', 'Core | Plancha', 3, '40"', 120),
      ],
      7: [
        _ex('hfc_m_bal_s7', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_sed', 'Movilidad | Flexión de tobillo en sedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s7', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_regen_s4', 'Correr regenerativo', 1, '22 min', 0, 'Zona 1-2 (baja)'),
      ],
    },
    {
      1: [
        _ex('hfc_m_bal', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_toe', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_h', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_cont_s5', 'Correr continuo', 1, '24 min', 0, 'Zona 3 (moderada)'),
      ],
      2: [
        _ex('hfc_m_add_kb', 'Movilidad | Aductores con kettlebell', 2, '10/lado', 60),
        _ex('hfc_m_kb_lift', 'Movilidad | Kettlebell leg lift over', 2, '6/lado', 60),
        _ex('hfc_m_snow', 'Movilidad | Prone snow angels', 2, '10', 60),
      ],
      3: [
        _ex('hfc_m_bal_s3', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_s3', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s3', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_cal_s3', 'Calentamiento | Correr a trote', 1, '2 km', 0),
        _ex('hfc_sprint_400_s5', 'Sprint 400m', 7, '400m', 60, 'Intervalos - progresión'),
        _ex('hfc_vuelta_s3', 'Vuelta a la calma | Correr a trote', 1, '2 km', 0),
      ],
      4: [
        _ex('hfc_ht_s5', 'Hip Thrust', 3, '12', 120),
        _ex('hfc_pm_s5', 'Peso muerto convencional', 3, '8-10', 120),
        _ex('hfc_box_jump_s5', 'Box jump desde rodillas', 4, '6', 120, 'Progresión'),
        _ex('hfc_scissor_press_s5', 'Scissor landmine press', 3, '10/lado', 120),
        _ex('hfc_remo_seal_s5', 'Remo seal con mancuernas', 4, '12', 120),
        _ex('hfc_core_wheel_s5', 'Core | Rueda abdominal adaptada', 4, '10', 120),
      ],
      6: [
        _ex('hfc_sq_libre_s5', 'Sentadilla libre barra alta', 3, '12', 120),
        _ex('hfc_zancada_s5', 'Zancadas con mancuernas', 3, '20 pasos', 120),
        _ex('hfc_gorilla_row_s5', 'Gorilla row', 4, '10/lado', 120),
        _ex('hfc_pm_landmine_s5', 'Peso muerto landmine', 3, '12', 120),
        _ex('hfc_elev_lat_s5', 'Elevaciones laterales mancuernas', 3, '14', 120),
        _ex('hfc_core_deadbug_s5', 'Core | Deadbugs con fitball', 3, '12/lado', 120),
        _ex('hfc_core_plank_s5', 'Core | Plancha', 3, '45"', 120),
      ],
      7: [
        _ex('hfc_m_bal_s7', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_sed', 'Movilidad | Flexión de tobillo en sedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s7', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_regen_s5', 'Correr regenerativo', 1, '24 min', 0, 'Zona 1-2 (baja)'),
      ],
    },
    {
      1: [
        _ex('hfc_m_bal', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_toe', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_h', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_cont_s6', 'Correr continuo', 1, '20 min', 0, 'Zona 3 (DELOAD)'),
      ],
      2: [
        _ex('hfc_m_add_kb', 'Movilidad | Aductores con kettlebell', 2, '10/lado', 60),
        _ex('hfc_m_kb_lift', 'Movilidad | Kettlebell leg lift over', 2, '6/lado', 60),
        _ex('hfc_m_snow', 'Movilidad | Prone snow angels', 2, '10', 60),
      ],
      3: [
        _ex('hfc_m_bal_s3', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_s3', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s3', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_cal_s3', 'Calentamiento | Correr a trote', 1, '2 km', 0),
        _ex('hfc_sprint_400_s6', 'Sprint 400m', 4, '400m', 60, 'Intervalos - DELOAD'),
        _ex('hfc_vuelta_s3', 'Vuelta a la calma | Correr a trote', 1, '2 km', 0),
      ],
      4: [
        _ex('hfc_ht_s6', 'Hip Thrust', 2, '10', 90, 'DELOAD'),
        _ex('hfc_pm_s6', 'Peso muerto convencional', 2, '6', 90, 'DELOAD'),
        _ex('hfc_box_jump_s6', 'Box jump desde rodillas', 2, '4', 90, 'DELOAD'),
        _ex('hfc_scissor_press_s6', 'Scissor landmine press', 2, '8/lado', 90, 'DELOAD'),
        _ex('hfc_remo_seal_s6', 'Remo seal con mancuernas', 2, '10', 90, 'DELOAD'),
        _ex('hfc_core_wheel_s6', 'Core | Rueda abdominal adaptada', 2, '8', 90, 'DELOAD'),
      ],
      6: [
        _ex('hfc_sq_libre_s6', 'Sentadilla libre barra alta', 2, '10', 90, 'DELOAD'),
        _ex('hfc_zancada_s6', 'Zancadas con mancuernas', 2, '15 pasos', 90, 'DELOAD'),
        _ex('hfc_gorilla_row_s6', 'Gorilla row', 2, '8/lado', 90, 'DELOAD'),
        _ex('hfc_pm_landmine_s6', 'Peso muerto landmine', 2, '8', 90, 'DELOAD'),
        _ex('hfc_elev_lat_s6', 'Elevaciones laterales mancuernas', 2, '10', 90, 'DELOAD'),
        _ex('hfc_core_deadbug_s6', 'Core | Deadbugs con fitball', 2, '8/lado', 90, 'DELOAD'),
        _ex('hfc_core_plank_s6', 'Core | Plancha', 2, '30"', 90, 'DELOAD'),
      ],
      7: [
        _ex('hfc_m_bal_s7', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_sed', 'Movilidad | Flexión de tobillo en sedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s7', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_regen_s6', 'Correr regenerativo', 1, '20 min', 0, 'Zona 1-2 (baja)'),
      ],
    },
    {
      1: [
        _ex('hfc_m_bal', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_toe', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_h', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_cont_s7', 'Correr continuo', 1, '24 min', 0, 'Zona 3 (moderada)'),
      ],
      2: [
        _ex('hfc_m_add_kb', 'Movilidad | Aductores con kettlebell', 2, '10/lado', 60),
        _ex('hfc_m_kb_lift', 'Movilidad | Kettlebell leg lift over', 2, '6/lado', 60),
        _ex('hfc_m_snow', 'Movilidad | Prone snow angels', 2, '10', 60),
      ],
      3: [
        _ex('hfc_m_bal_s3', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_s3', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s3', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_cal_s3', 'Calentamiento | Correr a trote', 1, '2 km', 0),
        _ex('hfc_sprint_400_s7', 'Sprint 400m', 7, '400m', 60, 'Intervalos'),
        _ex('hfc_vuelta_s3', 'Vuelta a la calma | Correr a trote', 1, '2 km', 0),
      ],
      4: [
        _ex('hfc_ht_s7', 'Hip Thrust', 3, '12', 120),
        _ex('hfc_pm_s7', 'Peso muerto convencional', 3, '10', 120),
        _ex('hfc_box_jump_s7', 'Box jump desde rodillas', 4, '7', 120, 'Progresión'),
        _ex('hfc_scissor_press_s7', 'Scissor landmine press', 4, '10/lado', 120),
        _ex('hfc_remo_seal_s7', 'Remo seal con mancuernas', 4, '14', 120),
        _ex('hfc_core_wheel_s7', 'Core | Rueda abdominal adaptada', 4, '12', 120),
      ],
      6: [
        _ex('hfc_sq_libre_s7', 'Sentadilla libre barra alta', 3, '12-14', 120),
        _ex('hfc_zancada_s7', 'Zancadas con mancuernas', 4, '20 pasos', 120),
        _ex('hfc_gorilla_row_s7', 'Gorilla row', 4, '12/lado', 120),
        _ex('hfc_pm_landmine_s7', 'Peso muerto landmine', 3, '12', 120),
        _ex('hfc_elev_lat_s7', 'Elevaciones laterales mancuernas', 3, '14', 120),
        _ex('hfc_core_deadbug_s7', 'Core | Deadbugs con fitball', 3, '12/lado', 120),
        _ex('hfc_core_plank_s7', 'Core | Plancha', 3, '50"', 120),
      ],
      7: [
        _ex('hfc_m_bal_s7', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_sed', 'Movilidad | Flexión de tobillo en sedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s7', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_regen_s7', 'Correr regenerativo', 1, '24 min', 0, 'Zona 1-2 (baja)'),
      ],
    },
    {
      1: [
        _ex('hfc_m_bal', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_toe', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_h', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_cont_s8', 'Correr continuo', 1, '24 min', 0, 'Zona 3 (moderada)'),
      ],
      2: [
        _ex('hfc_m_add_kb', 'Movilidad | Aductores con kettlebell', 2, '10/lado', 60),
        _ex('hfc_m_kb_lift', 'Movilidad | Kettlebell leg lift over', 2, '6/lado', 60),
        _ex('hfc_m_snow', 'Movilidad | Prone snow angels', 2, '10', 60),
      ],
      3: [
        _ex('hfc_m_bal_s3', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_s3', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s3', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_cal_s3', 'Calentamiento | Correr a trote', 1, '2 km', 0),
        _ex('hfc_sprint_400_s8', 'Sprint 400m', 7, '400m', 60, 'Intervalos'),
        _ex('hfc_vuelta_s3', 'Vuelta a la calma | Correr a trote', 1, '2 km', 0),
      ],
      4: [
        _ex('hfc_ht_s8', 'Hip Thrust', 3, '12-14', 120),
        _ex('hfc_pm_s8', 'Peso muerto convencional', 3, '10-12', 120),
        _ex('hfc_box_jump_s8', 'Box jump desde rodillas', 4, '8', 120, 'Progresión'),
        _ex('hfc_scissor_press_s8', 'Scissor landmine press', 4, '12/lado', 120),
        _ex('hfc_remo_seal_s8', 'Remo seal con mancuernas', 4, '14', 120),
        _ex('hfc_core_wheel_s8', 'Core | Rueda abdominal adaptada', 4, '12', 120),
      ],
      6: [
        _ex('hfc_sq_libre_s8', 'Sentadilla libre barra alta', 3, '12-14', 120),
        _ex('hfc_zancada_s8', 'Zancadas con mancuernas', 4, '20 pasos', 120),
        _ex('hfc_gorilla_row_s8', 'Gorilla row', 4, '12/lado', 120),
        _ex('hfc_pm_landmine_s8', 'Peso muerto landmine', 3, '12-14', 120),
        _ex('hfc_elev_lat_s8', 'Elevaciones laterales mancuernas', 3, '14', 120),
        _ex('hfc_core_deadbug_s8', 'Core | Deadbugs con fitball', 3, '12/lado', 120),
        _ex('hfc_core_plank_s8', 'Core | Plancha', 3, '50"', 120),
      ],
      7: [
        _ex('hfc_m_bal_s7', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_sed', 'Movilidad | Flexión de tobillo en sedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s7', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_regen_s8', 'Correr regenerativo', 1, '24 min', 0, 'Zona 1-2 (baja)'),
      ],
    },
    {
      1: [
        _ex('hfc_m_bal', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_toe', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_h', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_cont_s9', 'Correr continuo', 1, '26 min', 0, 'Zona 3 (moderada)'),
      ],
      2: [
        _ex('hfc_m_add_kb', 'Movilidad | Aductores con kettlebell', 2, '10/lado', 60),
        _ex('hfc_m_kb_lift', 'Movilidad | Kettlebell leg lift over', 2, '6/lado', 60),
        _ex('hfc_m_snow', 'Movilidad | Prone snow angels', 2, '10', 60),
      ],
      3: [
        _ex('hfc_m_bal_s3', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_s3', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s3', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_cal_s3', 'Calentamiento | Correr a trote', 1, '2 km', 0),
        _ex('hfc_sprint_400_s9', 'Sprint 400m', 8, '400m', 60, 'Intervalos - progresión'),
        _ex('hfc_vuelta_s3', 'Vuelta a la calma | Correr a trote', 1, '2 km', 0),
      ],
      4: [
        _ex('hfc_ht_s9', 'Hip Thrust', 3, '12-14', 120),
        _ex('hfc_pm_s9', 'Peso muerto convencional', 3, '10-12', 120),
        _ex('hfc_box_jump_s9', 'Box jump desde rodillas', 4, '8-10', 120, 'Progresión'),
        _ex('hfc_scissor_press_s9', 'Scissor landmine press', 4, '12/lado', 120),
        _ex('hfc_remo_seal_s9', 'Remo seal con mancuernas', 4, '14-16', 120),
        _ex('hfc_core_wheel_s9', 'Core | Rueda abdominal adaptada', 4, '14', 120),
      ],
      6: [
        _ex('hfc_sq_libre_s9', 'Sentadilla libre barra alta', 3, '12-14', 120),
        _ex('hfc_zancada_s9', 'Zancadas con mancuernas', 4, '20 pasos', 120),
        _ex('hfc_gorilla_row_s9', 'Gorilla row', 4, '12/lado', 120),
        _ex('hfc_pm_landmine_s9', 'Peso muerto landmine', 3, '12-14', 120),
        _ex('hfc_elev_lat_s9', 'Elevaciones laterales mancuernas', 4, '14', 120),
        _ex('hfc_core_deadbug_s9', 'Core | Deadbugs con fitball', 3, '14/lado', 120),
        _ex('hfc_core_plank_s9', 'Core | Plancha', 3, '55"', 120),
      ],
      7: [
        _ex('hfc_m_bal_s7', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_sed', 'Movilidad | Flexión de tobillo en sedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s7', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_regen_s9', 'Correr regenerativo', 1, '26 min', 0, 'Zona 1-2 (baja)'),
      ],
    },
    {
      1: [
        _ex('hfc_m_bal', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_toe', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_h', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_cont_s10', 'Correr continuo', 1, '26 min', 0, 'Zona 3 (moderada)'),
      ],
      2: [
        _ex('hfc_m_add_kb', 'Movilidad | Aductores con kettlebell', 2, '10/lado', 60),
        _ex('hfc_m_kb_lift', 'Movilidad | Kettlebell leg lift over', 2, '6/lado', 60),
        _ex('hfc_m_snow', 'Movilidad | Prone snow angels', 2, '10', 60),
      ],
      3: [
        _ex('hfc_m_bal_s3', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_s3', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s3', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_cal_s3', 'Calentamiento | Correr a trote', 1, '2 km', 0),
        _ex('hfc_sprint_400_s10', 'Sprint 400m', 8, '400m', 60, 'Intervalos'),
        _ex('hfc_vuelta_s3', 'Vuelta a la calma | Correr a trote', 1, '2 km', 0),
      ],
      4: [
        _ex('hfc_ht_s10', 'Hip Thrust', 4, '12-14', 120),
        _ex('hfc_pm_s10', 'Peso muerto convencional', 3, '10-12', 120),
        _ex('hfc_box_jump_s10', 'Box jump desde rodillas', 4, '10', 120, 'Progresión'),
        _ex('hfc_scissor_press_s10', 'Scissor landmine press', 4, '12/lado', 120),
        _ex('hfc_remo_seal_s10', 'Remo seal con mancuernas', 4, '14-16', 120),
        _ex('hfc_core_wheel_s10', 'Core | Rueda abdominal adaptada', 4, '14', 120),
      ],
      6: [
        _ex('hfc_sq_libre_s10', 'Sentadilla libre barra alta', 3, '14', 120),
        _ex('hfc_zancada_s10', 'Zancadas con mancuernas', 4, '20 pasos', 120),
        _ex('hfc_gorilla_row_s10', 'Gorilla row', 4, '12/lado', 120),
        _ex('hfc_pm_landmine_s10', 'Peso muerto landmine', 3, '14', 120),
        _ex('hfc_elev_lat_s10', 'Elevaciones laterales mancuernas', 4, '14-16', 120),
        _ex('hfc_core_deadbug_s10', 'Core | Deadbugs con fitball', 3, '14/lado', 120),
        _ex('hfc_core_plank_s10', 'Core | Plancha', 3, '55"', 120),
      ],
      7: [
        _ex('hfc_m_bal_s7', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_sed', 'Movilidad | Flexión de tobillo en sedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s7', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_regen_s10', 'Correr regenerativo', 1, '26 min', 0, 'Zona 1-2 (baja)'),
      ],
    },
    {
      1: [
        _ex('hfc_m_bal', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_toe', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_h', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_cont_s11', 'Correr continuo', 1, '28 min', 0, 'Zona 3 (moderada)'),
      ],
      2: [
        _ex('hfc_m_add_kb', 'Movilidad | Aductores con kettlebell', 2, '10/lado', 60),
        _ex('hfc_m_kb_lift', 'Movilidad | Kettlebell leg lift over', 2, '6/lado', 60),
        _ex('hfc_m_snow', 'Movilidad | Prone snow angels', 2, '10', 60),
      ],
      3: [
        _ex('hfc_m_bal_s3', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_s3', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s3', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_cal_s3', 'Calentamiento | Correr a trote', 1, '2 km', 0),
        _ex('hfc_sprint_400_s11', 'Sprint 400m', 8, '400m', 60, 'Intervalos'),
        _ex('hfc_vuelta_s3', 'Vuelta a la calma | Correr a trote', 1, '2 km', 0),
      ],
      4: [
        _ex('hfc_ht_s11', 'Hip Thrust', 4, '14', 120),
        _ex('hfc_pm_s11', 'Peso muerto convencional', 4, '10-12', 120),
        _ex('hfc_box_jump_s11', 'Box jump desde rodillas', 4, '10', 120, 'Progresión máxima'),
        _ex('hfc_scissor_press_s11', 'Scissor landmine press', 4, '14/lado', 120),
        _ex('hfc_remo_seal_s11', 'Remo seal con mancuernas', 4, '16', 120),
        _ex('hfc_core_wheel_s11', 'Core | Rueda abdominal adaptada', 4, '14-16', 120),
      ],
      6: [
        _ex('hfc_sq_libre_s11', 'Sentadilla libre barra alta', 4, '14', 120),
        _ex('hfc_zancada_s11', 'Zancadas con mancuernas', 4, '20 pasos', 120),
        _ex('hfc_gorilla_row_s11', 'Gorilla row', 4, '14/lado', 120),
        _ex('hfc_pm_landmine_s11', 'Peso muerto landmine', 3, '14', 120),
        _ex('hfc_elev_lat_s11', 'Elevaciones laterales mancuernas', 4, '14-16', 120),
        _ex('hfc_core_deadbug_s11', 'Core | Deadbugs con fitball', 4, '14/lado', 120),
        _ex('hfc_core_plank_s11', 'Core | Plancha', 3, '60"', 120),
      ],
      7: [
        _ex('hfc_m_bal_s7', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_sed', 'Movilidad | Flexión de tobillo en sedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s7', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_regen_s11', 'Correr regenerativo', 1, '28 min', 0, 'Zona 1-2 (baja)'),
      ],
    },
    {
      1: [
        _ex('hfc_m_bal', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_toe', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_h', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_cont_s12', 'Correr continuo', 1, '20 min', 0, 'Zona 2 (DELOAD)'),
      ],
      2: [
        _ex('hfc_m_add_kb', 'Movilidad | Aductores con kettlebell', 2, '10/lado', 60),
        _ex('hfc_m_kb_lift', 'Movilidad | Kettlebell leg lift over', 2, '6/lado', 60),
        _ex('hfc_m_snow', 'Movilidad | Prone snow angels', 2, '10', 60),
      ],
      3: [
        _ex('hfc_m_bal_s3', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_s3', 'Movilidad | Flexión de tobillo en bipedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s3', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_cal_s3', 'Calentamiento | Correr a trote', 1, '2 km', 0),
        _ex('hfc_sprint_400_s12', 'Sprint 400m', 4, '400m', 60, 'Intervalos - DELOAD'),
        _ex('hfc_vuelta_s3', 'Vuelta a la calma | Correr a trote', 1, '2 km', 0),
      ],
      4: [
        _ex('hfc_ht_s12', 'Hip Thrust', 2, '10', 90, 'DELOAD'),
        _ex('hfc_pm_s12', 'Peso muerto convencional', 2, '8', 90, 'DELOAD'),
        _ex('hfc_box_jump_s12', 'Box jump desde rodillas', 2, '5', 90, 'DELOAD'),
        _ex('hfc_scissor_press_s12', 'Scissor landmine press', 2, '10/lado', 90, 'DELOAD'),
        _ex('hfc_remo_seal_s12', 'Remo seal con mancuernas', 2, '12', 90, 'DELOAD'),
        _ex('hfc_core_wheel_s12', 'Core | Rueda abdominal adaptada', 2, '10', 90, 'DELOAD'),
      ],
      6: [
        _ex('hfc_sq_libre_s12', 'Sentadilla libre barra alta', 2, '10', 90, 'DELOAD'),
        _ex('hfc_zancada_s12', 'Zancadas con mancuernas', 2, '15 pasos', 90, 'DELOAD'),
        _ex('hfc_gorilla_row_s12', 'Gorilla row', 2, '10/lado', 90, 'DELOAD'),
        _ex('hfc_pm_landmine_s12', 'Peso muerto landmine', 2, '10', 90, 'DELOAD'),
        _ex('hfc_elev_lat_s12', 'Elevaciones laterales mancuernas', 2, '12', 90, 'DELOAD'),
        _ex('hfc_core_deadbug_s12', 'Core | Deadbugs con fitball', 2, '10/lado', 90, 'DELOAD'),
        _ex('hfc_core_plank_s12', 'Core | Plancha', 2, '40"', 90, 'DELOAD'),
      ],
      7: [
        _ex('hfc_m_bal_s7', 'Movilidad | Balance de piernas', 1, '10/lado', 60),
        _ex('hfc_m_flex_sed', 'Movilidad | Flexión de tobillo en sedestación', 1, '10/lado', 60),
        _ex('hfc_m_hip_s7', 'Movilidad | Bisagra de cadera', 1, '10', 60),
        _ex('hfc_run_regen_s12', 'Correr regenerativo', 1, '20 min', 0, 'Zona 1-2 (baja)'),
      ],
    },
  ]
};

/* ══════════════ EMPEZANDO DE CERO EN CASA (4 semanas) ══════════════ */
WORKOUT_PLANS.empezando_rutina = {
  id: 'empezando_rutina',
  name: 'Empezando de Cero en Casa',
  description: '4 semanas | Principiantes en casa · Movilidad + Fuerza + HIIT | 7 días/semana',
  planType: 'phased',
  weeks: 4,
  trainingDays: [1, 2, 3, 4, 5, 6, 7],
  dayMeta: {
    1: { name: 'Día 1 — Piernas y Glúteo', type: 'strength', muscleGroups: ['Piernas', 'Glúteos', 'Core'] },
    2: { name: 'Día 2 — Torso y Core', type: 'strength', muscleGroups: ['Torso', 'Pecho', 'Espalda', 'Core'] },
    3: { name: 'Día 3 — HIIT', type: 'cardio', muscleGroups: ['Full body', 'Cardio'] },
    4: { name: 'Día 4 — Movilidad', type: 'mobility', muscleGroups: ['Movilidad', 'Flexibilidad'] },
    5: { name: 'Día 5 — Fullbody', type: 'strength', muscleGroups: ['Full body', 'Core'] },
    6: { name: 'Día 6 — HIIT', type: 'cardio', muscleGroups: ['Full body', 'Cardio'] },
    7: { name: 'Día 7 — Movilidad', type: 'mobility', muscleGroups: ['Movilidad', 'Flexibilidad'] }
  },
  weeklySchedule: [
    // S1
    {
      1: [
        _ex('ezc_s1d1_mob_cat', 'Movilidad | Cat camel', 1, '10', 0),
        _ex('ezc_s1d1_mob_snow', 'Movilidad | Prone snow angels', 1, '10', 0),
        _ex('ezc_s1d1_mob_rot_cad', 'Movilidad | Rotación interna de cadera 90-90', 1, '8/lado', 0),
        _ex('ezc_s1d1_mob_flex_esc', 'Movilidad | Flexiones escapulares', 1, '10', 0),
        _ex('ezc_s1d1_sq_res', 'Sentadilla con resistencia', 3, '8-10', 0),
        _ex('ezc_s1d1_sq_iso', 'Sentadilla isométrica', 1, '60"', 0),
        _ex('ezc_s1d1_ht_mc', 'Hip thrust con mancuerna', 3, '14', 0),
        _ex('ezc_s1d1_sq_split_mc', 'Sentadilla Split con mancuernas', 2, '10/lado', 120),
        _ex('ezc_s1d1_pull_thru', 'Pull through con resistencia', 2, '16', 120),
        _ex('ezc_s1d1_patada_glut', 'Patada de glúteo con resistencia', 2, '14/lado', 0),
      ],
      2: [
        _ex('ezc_s1d2_mob_rot_col', 'Movilidad | Rotación de columna en T', 1, '8/lado', 0),
        _ex('ezc_s1d2_mob_run_lunge', 'Movilidad | Runners lunge', 1, '7/lado', 0),
        _ex('ezc_s1d2_mob_car', 'Movilidad | Shoulder CAR', 1, '10', 0),
        _ex('ezc_s1d2_mob_kb_halo', 'Movilidad | Kettlebell halos', 1, '8/lado', 0),
        _ex('ezc_s1d2_flex_elev', 'Flexiones con elevación', 3, '8-10', 0),
        _ex('ezc_s1d2_remo_pie', 'Remo de pie con resistencia', 3, '10', 0),
        _ex('ezc_s1d2_elev_lat', 'Elevaciones laterales con resistencia', 3, '10', 30),
        _ex('ezc_s1d2_facepull', 'Facepull con resistencia', 3, '16', 0),
        _ex('ezc_s1d2_core_zombie', 'Core | Zombie sit ups', 2, '8', 0),
        _ex('ezc_s1d2_core_elev_iso', 'Core | Elevación de piernas isométrica', 2, '30"', 0),
        _ex('ezc_s1d2_core_wheel', 'Core | Rueda abdominal adaptada', 2, '8', 0),
      ],
      3: [
        _ex('ezc_s1d3_burp_r1', 'HIIT | Burpee sin salto', 1, '30" trabajo', 30),
        _ex('ezc_s1d3_sprint_r1', 'HIIT | Sprint estático', 1, '30" trabajo', 30),
        _ex('ezc_s1d3_jj_r1', 'HIIT | Jumping jacks', 1, '30" trabajo', 30),
        _ex('ezc_s1d3_mt_r1', 'Core | Mountain climbers + toques de rodilla', 1, '30" trabajo', 30),
        _ex('ezc_s1d3_prisoner_r1', 'HIIT | Prisoner side to side squats', 1, '30" trabajo', 30),
        _ex('ezc_s1d3_burp_r2', 'HIIT | Burpee sin salto', 1, '30" trabajo', 30),
        _ex('ezc_s1d3_sprint_r2', 'HIIT | Sprint estático', 1, '30" trabajo', 30),
        _ex('ezc_s1d3_jj_r2', 'HIIT | Jumping jacks', 1, '30" trabajo', 30),
        _ex('ezc_s1d3_mt_r2', 'Core | Mountain climbers + toques de rodilla', 1, '30" trabajo', 30),
        _ex('ezc_s1d3_prisoner_r2', 'HIIT | Prisoner side to side squats', 1, '30" trabajo', 30),
        _ex('ezc_s1d3_burp_r3', 'HIIT | Burpee sin salto', 1, '30" trabajo', 30),
        _ex('ezc_s1d3_sprint_r3', 'HIIT | Sprint estático', 1, '30" trabajo', 30),
        _ex('ezc_s1d3_jj_r3', 'HIIT | Jumping jacks', 1, '30" trabajo', 30),
        _ex('ezc_s1d3_mt_r3', 'Core | Mountain climbers + toques de rodilla', 1, '30" trabajo', 30),
        _ex('ezc_s1d3_prisoner_r3', 'HIIT | Prisoner side to side squats', 1, '30" trabajo', 30),
      ],
      4: [
        _ex('ezc_s1d4_core_limb', 'Core | Limb lifts', 2, '8/lado', 0),
        _ex('ezc_s1d4_mob_scorp', 'Movilidad | Scorpions', 2, '8/lado', 0),
        _ex('ezc_s1d4_est_updog', 'Estiramiento | Upward dog', 2, '6', 0),
        _ex('ezc_s1d4_est_frog', 'Estiramiento | Cadera (Frog)', 2, '30"', 0),
        _ex('ezc_s1d4_est_hombros', 'Estiramiento | Hombros', 2, '15"', 0),
        _ex('ezc_s1d4_est_uni_sit', 'Estiramiento | Unilateral sitting reach', 2, '30"/lado', 0),
      ],
      5: [
        _ex('ezc_s1d5_mob_cosak', 'Movilidad | Cossak squat', 1, '8/lado', 0),
        _ex('ezc_s1d5_mob_bisagra', 'Movilidad | Bisagra de cadera', 1, '10', 0),
        _ex('ezc_s1d5_mob_mov_esc', 'Movilidad | Movimientos escapulares', 1, '10', 0),
        _ex('ezc_s1d5_mob_leg_rock', 'Movilidad | Leg Rockback', 1, '8 rebotes/lado', 0),
        _ex('ezc_s1d5_pm_res', 'Peso muerto con resistencia', 3, '8-10', 120),
        _ex('ezc_s1d5_thrusters', 'Thrusters con resistencia', 3, '10', 0),
        _ex('ezc_s1d5_renegade', 'Renegade row', 3, '6/lado', 0),
        _ex('ezc_s1d5_pistol_box', 'Squat box unilateral (pistol)', 2, '10/lado', 0),
        _ex('ezc_s1d5_core_plank', 'Core | Plancha de codos a manos', 2, '10', 0),
        _ex('ezc_s1d5_core_pallof', 'Core | Press Pallof con resistencia', 2, '8/lado', 0),
      ],
      6: [
        _ex('ezc_s1d6_plank_r1', 'HIIT | Plank thrust', 1, '30" trabajo', 30),
        _ex('ezc_s1d6_dolphin_r1', 'Core | Dolphin plank + knee taps', 1, '30" trabajo', 30),
        _ex('ezc_s1d6_kick_r1', 'Core | Kick sits tap', 1, '30" trabajo', 30),
        _ex('ezc_s1d6_rocket_r1', 'HIIT | Rocket jump squat taps', 1, '30" trabajo', 30),
        _ex('ezc_s1d6_drunken_r1', 'Core | Drunken mountain climbers', 1, '30" trabajo', 30),
        _ex('ezc_s1d6_plank_r2', 'HIIT | Plank thrust', 1, '30" trabajo', 30),
        _ex('ezc_s1d6_dolphin_r2', 'Core | Dolphin plank + knee taps', 1, '30" trabajo', 30),
        _ex('ezc_s1d6_kick_r2', 'Core | Kick sits tap', 1, '30" trabajo', 30),
        _ex('ezc_s1d6_rocket_r2', 'HIIT | Rocket jump squat taps', 1, '30" trabajo', 30),
        _ex('ezc_s1d6_drunken_r2', 'Core | Drunken mountain climbers', 1, '30" trabajo', 30),
        _ex('ezc_s1d6_plank_r3', 'HIIT | Plank thrust', 1, '30" trabajo', 30),
        _ex('ezc_s1d6_dolphin_r3', 'Core | Dolphin plank + knee taps', 1, '30" trabajo', 30),
        _ex('ezc_s1d6_kick_r3', 'Core | Kick sits tap', 1, '30" trabajo', 30),
        _ex('ezc_s1d6_rocket_r3', 'HIIT | Rocket jump squat taps', 1, '30" trabajo', 30),
        _ex('ezc_s1d6_drunken_r3', 'Core | Drunken mountain climbers', 1, '30" trabajo', 30),
      ],
      7: [
        _ex('ezc_s1d7_core_deadbug', 'Core | Deadbugs', 2, '8/lado', 0),
        _ex('ezc_s1d7_est_pir', 'Estiramiento | Piramidal', 2, '30"/lado', 0),
        _ex('ezc_s1d7_mob_flex_esc', 'Movilidad | Flexiones escapulares', 2, '10', 0),
        _ex('ezc_s1d7_mob_aduct_kb', 'Movilidad | Aductores con kettlebell', 2, '8/lado', 0),
        _ex('ezc_s1d7_mob_rot_col', 'Movilidad | Rotación de columna en T', 2, '10/lado', 0),
        _ex('ezc_s1d7_mob_deep_sq', 'Movilidad | Deep squat prayer opener', 2, '30"', 0),
      ],
    },
    // S2
    {
      1: [
        _ex('ezc_s2d1_mob_cat', 'Movilidad | Cat camel', 1, '10', 0),
        _ex('ezc_s2d1_mob_snow', 'Movilidad | Prone snow angels', 1, '10', 0),
        _ex('ezc_s2d1_mob_rot_cad', 'Movilidad | Rotación interna de cadera 90-90', 1, '8/lado', 0),
        _ex('ezc_s2d1_mob_flex_esc', 'Movilidad | Flexiones escapulares', 1, '10', 0),
        _ex('ezc_s2d1_sq_goblet', 'Sentadilla goblet con peso y resistencia', 3, '8-10', 0),
        _ex('ezc_s2d1_caldas_nord', 'Caídas nórdicas inversas con resistencia', 2, '6', 0),
        _ex('ezc_s2d1_ht_mc', 'Hip thrust con mancuerna', 3, '14', 0),
        _ex('ezc_s2d1_curtsy', 'Curtsy lunges con mancuerna', 2, '10/lado', 120),
        _ex('ezc_s2d1_pm_kb_cad', 'Peso muerto con kettlebell y resistencia en la cadera', 2, '16', 120),
        _ex('ezc_s2d1_patada_glut', 'Patada de glúteo con resistencia', 2, '14/lado', 0),
      ],
      2: [
        _ex('ezc_s2d2_mob_rot_col', 'Movilidad | Rotación de columna en T', 1, '8/lado', 0),
        _ex('ezc_s2d2_mob_run_lunge', 'Movilidad | Runners lunge', 1, '7/lado', 0),
        _ex('ezc_s2d2_mob_car', 'Movilidad | Shoulder CAR', 1, '10', 0),
        _ex('ezc_s2d2_mob_kb_halo', 'Movilidad | Kettlebell halos', 1, '8/lado', 0),
        _ex('ezc_s2d2_flex_plio', 'Flexiones pliométricas con altura', 3, '6-8', 0),
        _ex('ezc_s2d2_remo_giron', 'Remo gironda con resistencia', 3, '14', 0),
        _ex('ezc_s2d2_press_pecho', 'Press de pecho con resistencia tumbada', 3, '20', 0),
        _ex('ezc_s2d2_facepull', 'Facepull con resistencia', 3, '16', 0),
        _ex('ezc_s2d2_core_mcguill', 'Core | McGuill crunch', 2, '10', 0),
        _ex('ezc_s2d2_core_crunch_inv', 'Core | Crunch inverso con disco', 2, '8', 0),
        _ex('ezc_s2d2_core_worm', 'Core | Worm walks', 2, '6', 0),
      ],
      3: [
        _ex('ezc_s2d3_plank_r1', 'HIIT | Plank thrust variation', 1, '30" trabajo', 30),
        _ex('ezc_s2d3_sqtoq_r1', 'HIIT | Sentadilla + toques de pie', 1, '30" trabajo', 30),
        _ex('ezc_s2d3_spider_r1', 'HIIT | Spider lunges', 1, '30" trabajo', 30),
        _ex('ezc_s2d3_pivot_r1', 'HIIT | Pivot squat jumps 180°', 1, '30" trabajo', 30),
        _ex('ezc_s2d3_sqrot_r1', 'HIIT | Sentadilla con salto + rotación', 1, '30" trabajo', 30),
        _ex('ezc_s2d3_plank_r2', 'HIIT | Plank thrust variation', 1, '30" trabajo', 30),
        _ex('ezc_s2d3_sqtoq_r2', 'HIIT | Sentadilla + toques de pie', 1, '30" trabajo', 30),
        _ex('ezc_s2d3_spider_r2', 'HIIT | Spider lunges', 1, '30" trabajo', 30),
        _ex('ezc_s2d3_pivot_r2', 'HIIT | Pivot squat jumps 180°', 1, '30" trabajo', 30),
        _ex('ezc_s2d3_sqrot_r2', 'HIIT | Sentadilla con salto + rotación', 1, '30" trabajo', 30),
        _ex('ezc_s2d3_plank_r3', 'HIIT | Plank thrust variation', 1, '30" trabajo', 30),
        _ex('ezc_s2d3_sqtoq_r3', 'HIIT | Sentadilla + toques de pie', 1, '30" trabajo', 30),
        _ex('ezc_s2d3_spider_r3', 'HIIT | Spider lunges', 1, '30" trabajo', 30),
        _ex('ezc_s2d3_pivot_r3', 'HIIT | Pivot squat jumps 180°', 1, '30" trabajo', 30),
        _ex('ezc_s2d3_sqrot_r3', 'HIIT | Sentadilla con salto + rotación', 1, '30" trabajo', 30),
      ],
      4: [
        _ex('ezc_s2d4_core_limb', 'Core | Limb lifts', 2, '8/lado', 0),
        _ex('ezc_s2d4_est_pir_sed', 'Estiramiento | Piramidal sentada', 2, '30"/lado', 0),
        _ex('ezc_s2d4_est_espalda', 'Estiramiento | Espalda en cajón', 2, '30"', 0),
        _ex('ezc_s2d4_est_frog', 'Estiramiento | Cadera (Frog)', 2, '30"', 0),
        _ex('ezc_s2d4_est_hombros_rot', 'Estiramiento | Hombros con rotación', 2, '15"', 0),
        _ex('ezc_s2d4_mob_flex_tib', 'Movilidad | Flexión tibial con resistencia', 2, '10/lado', 0),
      ],
      5: [
        _ex('ezc_s2d5_mob_cosak', 'Movilidad | Cossak squat', 1, '8/lado', 0),
        _ex('ezc_s2d5_mob_bisagra', 'Movilidad | Bisagra de cadera', 1, '10', 0),
        _ex('ezc_s2d5_mob_mov_esc', 'Movilidad | Movimientos escapulares', 1, '10', 0),
        _ex('ezc_s2d5_mob_leg_rock', 'Movilidad | Leg Rockback', 1, '8 rebotes/lado', 0),
        _ex('ezc_s2d5_pm_res', 'Peso muerto con resistencia', 3, '8-10', 120),
        _ex('ezc_s2d5_snatch', 'Snatch con mancuerna', 3, '10/lado', 0),
        _ex('ezc_s2d5_gorilla', 'Gorilla row', 3, '8/lado', 0),
        _ex('ezc_s2d5_pistol_res', 'Pistol squat con resistencia', 2, '8/lado', 0),
        _ex('ezc_s2d5_core_russian', 'Core | Russian twist con mancuerna', 2, '8/lado', 0),
        _ex('ezc_s2d5_core_kb_pull', 'Core | Kettlebell pull through', 2, '6/lado', 0),
      ],
      6: [
        _ex('ezc_s2d6_burp_r1', 'HIIT | Burpees', 1, '30" trabajo', 30),
        _ex('ezc_s2d6_sprint_r1', 'HIIT | Sprints con resistencia', 1, '30" trabajo', 30),
        _ex('ezc_s2d6_jp_r1', 'Core | Jumping jacks plank', 1, '30" trabajo', 30),
        _ex('ezc_s2d6_bench_r1', 'HIIT | Bench over jumps', 1, '30" trabajo', 30),
        _ex('ezc_s2d6_bulg_r1', 'Sentadilla búlgara con salto', 1, '30" trabajo', 30),
        _ex('ezc_s2d6_burp_r2', 'HIIT | Burpees', 1, '30" trabajo', 30),
        _ex('ezc_s2d6_sprint_r2', 'HIIT | Sprints con resistencia', 1, '30" trabajo', 30),
        _ex('ezc_s2d6_jp_r2', 'Core | Jumping jacks plank', 1, '30" trabajo', 30),
        _ex('ezc_s2d6_bench_r2', 'HIIT | Bench over jumps', 1, '30" trabajo', 30),
        _ex('ezc_s2d6_bulg_r2', 'Sentadilla búlgara con salto', 1, '30" trabajo', 30),
        _ex('ezc_s2d6_burp_r3', 'HIIT | Burpees', 1, '30" trabajo', 30),
        _ex('ezc_s2d6_sprint_r3', 'HIIT | Sprints con resistencia', 1, '30" trabajo', 30),
        _ex('ezc_s2d6_jp_r3', 'Core | Jumping jacks plank', 1, '30" trabajo', 30),
        _ex('ezc_s2d6_bench_r3', 'HIIT | Bench over jumps', 1, '30" trabajo', 30),
        _ex('ezc_s2d6_bulg_r3', 'Sentadilla búlgara con salto', 1, '30" trabajo', 30),
      ],
      7: [
        _ex('ezc_s2d7_aduct_copenh', 'Aductores | Plancha Copenhague', 2, '30"/lado', 0),
        _ex('ezc_s2d7_est_glut_med', 'Estiramiento | Glúteo medio', 2, '30"/lado', 0),
        _ex('ezc_s2d7_est_cuello', 'Estiramiento | Cuello', 2, '30"', 0),
        _ex('ezc_s2d7_mob_leg_rock', 'Movilidad | Leg Rockback', 2, '8/lado', 0),
        _ex('ezc_s2d7_mob_scorp', 'Movilidad | Scorpions', 2, '10/lado', 0),
        _ex('ezc_s2d7_mob_flex_tobi', 'Movilidad | Flexión de tobillo con peso', 2, '30"/lado', 0),
      ],
    },
    // S3
    {
      1: [
        _ex('ezc_s3d1_mob_cat', 'Movilidad | Cat camel', 1, '10', 0),
        _ex('ezc_s3d1_mob_snow', 'Movilidad | Prone snow angels', 1, '10', 0),
        _ex('ezc_s3d1_mob_rot_cad', 'Movilidad | Rotación interna de cadera 90-90', 1, '8/lado', 0),
        _ex('ezc_s3d1_mob_flex_esc', 'Movilidad | Flexiones escapulares', 1, '10', 0),
        _ex('ezc_s3d1_sq_goblet', 'Sentadilla goblet con peso y resistencia', 4, '8-10', 0),
        _ex('ezc_s3d1_curl_fem', 'Curl de femoral con resistencia', 2, '14', 0),
        _ex('ezc_s3d1_ht_mc_res', 'Hip thrust con mancuerna y resistencia', 4, '14', 0),
        _ex('ezc_s3d1_sq_split', 'Sentadilla Split con mancuernas', 3, '10/lado', 120),
        _ex('ezc_s3d1_kb_swing', 'Kettlebell swing', 3, '16', 120),
        _ex('ezc_s3d1_patada_glut', 'Patada de glúteo con resistencia', 3, '14/lado', 0),
      ],
      2: [
        _ex('ezc_s3d2_mob_rot_col', 'Movilidad | Rotación de columna en T', 1, '8/lado', 0),
        _ex('ezc_s3d2_mob_run_lunge', 'Movilidad | Runners lunge', 1, '7/lado', 0),
        _ex('ezc_s3d2_mob_car', 'Movilidad | Shoulder CAR', 1, '10', 0),
        _ex('ezc_s3d2_mob_kb_halo', 'Movilidad | Kettlebell halos', 1, '8/lado', 0),
        _ex('ezc_s3d2_flex_rodillas', 'Flexiones de rodillas', 4, '8', 0),
        _ex('ezc_s3d2_jalon_uni', 'Jalón unilateral con resistencia', 3, '14/lado', 0),
        _ex('ezc_s3d2_elev_front', 'Elevaciones frontales con resistencia', 3, '14', 0),
        _ex('ezc_s3d2_facepull', 'Facepull con resistencia', 3, '16', 0),
        _ex('ezc_s3d2_core_cocoons', 'Core | Cocoons', 3, '10', 0),
        _ex('ezc_s3d2_core_plank_inv', 'Core | Plancha inversa con toques de rodilla', 3, '30"', 0),
        _ex('ezc_s3d2_core_vups', 'Core | V ups con toques de pie', 3, '8', 0),
      ],
      3: [
        _ex('ezc_s3d3_tuck_r1', 'HIIT | Tuck jumps', 1, '30" trabajo', 30),
        _ex('ezc_s3d3_sprint_r1', 'HIIT | Sprints con resistencia', 1, '30" trabajo', 30),
        _ex('ezc_s3d3_fk_r1', 'Core | Forward kick sits', 1, '30" trabajo', 30),
        _ex('ezc_s3d3_pulse_r1', 'Pulse lunges', 1, '30" trabajo', 30),
        _ex('ezc_s3d3_side_r1', 'HIIT | Side bound launches', 1, '30" trabajo', 30),
        _ex('ezc_s3d3_tuck_r2', 'HIIT | Tuck jumps', 1, '30" trabajo', 30),
        _ex('ezc_s3d3_sprint_r2', 'HIIT | Sprints con resistencia', 1, '30" trabajo', 30),
        _ex('ezc_s3d3_fk_r2', 'Core | Forward kick sits', 1, '30" trabajo', 30),
        _ex('ezc_s3d3_pulse_r2', 'Pulse lunges', 1, '30" trabajo', 30),
        _ex('ezc_s3d3_side_r2', 'HIIT | Side bound launches', 1, '30" trabajo', 30),
        _ex('ezc_s3d3_tuck_r3', 'HIIT | Tuck jumps', 1, '30" trabajo', 30),
        _ex('ezc_s3d3_sprint_r3', 'HIIT | Sprints con resistencia', 1, '30" trabajo', 30),
        _ex('ezc_s3d3_fk_r3', 'Core | Forward kick sits', 1, '30" trabajo', 30),
        _ex('ezc_s3d3_pulse_r3', 'Pulse lunges', 1, '30" trabajo', 30),
        _ex('ezc_s3d3_side_r3', 'HIIT | Side bound launches', 1, '30" trabajo', 30),
      ],
      4: [
        _ex('ezc_s3d4_core_limb', 'Core | Limb lifts', 2, '8/lado', 0),
        _ex('ezc_s3d4_mob_run_reach', 'Movilidad | Runners lunge with reach', 2, '6/lado', 0),
        _ex('ezc_s3d4_est_rodilla', 'Estiramiento | Rodilla al pecho', 2, '30"/lado', 0),
        _ex('ezc_s3d4_mob_bridge', 'Movilidad | Bridge march', 2, '8/lado', 0),
        _ex('ezc_s3d4_mob_super', 'Movilidad | Supermans', 2, '10', 0),
        _ex('ezc_s3d4_est_circ', 'Estiramientos circulares', 2, '8/lado', 0),
      ],
      5: [
        _ex('ezc_s3d5_mob_cosak', 'Movilidad | Cossak squat', 1, '8/lado', 0),
        _ex('ezc_s3d5_mob_bisagra', 'Movilidad | Bisagra de cadera', 1, '10', 0),
        _ex('ezc_s3d5_mob_mov_esc', 'Movilidad | Movimientos escapulares', 1, '10', 0),
        _ex('ezc_s3d5_mob_leg_rock', 'Movilidad | Leg Rockback', 1, '8 rebotes/lado', 0),
        _ex('ezc_s3d5_pm_res', 'Peso muerto con resistencia', 4, '8-10', 0),
        _ex('ezc_s3d5_rack_kb_sq', 'Rack kettlebell squat', 4, '8', 0),
        _ex('ezc_s3d5_remo_seal', 'Remo seal con mancuernas', 3, '8', 0),
        _ex('ezc_s3d5_pistol_walk', 'Pistol squat walks', 2, '6/lado', 0),
        _ex('ezc_s3d5_core_crunch_lat', 'Core | Crunch abdominal lateral', 3, '6/lado', 0),
        _ex('ezc_s3d5_core_scissors', 'Core | Scissors', 3, '20 en total', 0),
      ],
      6: [
        _ex('ezc_s3d6_calf_r1', 'HIIT | Calf jumps', 1, '30" trabajo', 30),
        _ex('ezc_s3d6_kt_r1', 'Core | Knee to toe taps', 1, '30" trabajo', 30),
        _ex('ezc_s3d6_kick_r1', 'Core | Kick sits', 1, '30" trabajo', 30),
        _ex('ezc_s3d6_pulse_r1', 'HIIT | Pulse jump squats', 1, '30" trabajo', 30),
        _ex('ezc_s3d6_pris_r1', 'HIIT | Prisoner side to side squats', 1, '30" trabajo', 30),
        _ex('ezc_s3d6_calf_r2', 'HIIT | Calf jumps', 1, '30" trabajo', 30),
        _ex('ezc_s3d6_kt_r2', 'Core | Knee to toe taps', 1, '30" trabajo', 30),
        _ex('ezc_s3d6_kick_r2', 'Core | Kick sits', 1, '30" trabajo', 30),
        _ex('ezc_s3d6_pulse_r2', 'HIIT | Pulse jump squats', 1, '30" trabajo', 30),
        _ex('ezc_s3d6_pris_r2', 'HIIT | Prisoner side to side squats', 1, '30" trabajo', 30),
        _ex('ezc_s3d6_calf_r3', 'HIIT | Calf jumps', 1, '30" trabajo', 30),
        _ex('ezc_s3d6_kt_r3', 'Core | Knee to toe taps', 1, '30" trabajo', 30),
        _ex('ezc_s3d6_kick_r3', 'Core | Kick sits', 1, '30" trabajo', 30),
        _ex('ezc_s3d6_pulse_r3', 'HIIT | Pulse jump squats', 1, '30" trabajo', 30),
        _ex('ezc_s3d6_pris_r3', 'HIIT | Prisoner side to side squats', 1, '30" trabajo', 30),
      ],
      7: [
        _ex('ezc_s3d7_core_deadbug', 'Core | Deadbugs', 2, '8/lado', 0),
        _ex('ezc_s3d7_est_split', 'Estiramiento | Split unilateral', 2, '30"/lado', 0),
        _ex('ezc_s3d7_est_updog', 'Estiramiento | Upward dog', 2, '6', 0),
        _ex('ezc_s3d7_est_hombros', 'Estiramiento | Hombros', 2, '15"/lado', 0),
        _ex('ezc_s3d7_est_frog', 'Estiramiento | Cadera (Frog)', 2, '30"', 0),
        _ex('ezc_s3d7_mob_flex_tib', 'Movilidad | Flexión tibial con resistencia', 2, '10/lado', 0),
      ],
    },
    // S4
    {
      1: [
        _ex('ezc_s4d1_mob_cat', 'Movilidad | Cat camel', 1, '10', 0),
        _ex('ezc_s4d1_mob_snow', 'Movilidad | Prone snow angels', 1, '10', 0),
        _ex('ezc_s4d1_mob_rot_cad', 'Movilidad | Rotación interna de cadera 90-90', 1, '8/lado', 0),
        _ex('ezc_s4d1_mob_flex_esc', 'Movilidad | Flexiones escapulares', 1, '10', 0),
        _ex('ezc_s4d1_sq_goblet', 'Sentadilla goblet con peso y resistencia', 4, '8-10', 0),
        _ex('ezc_s4d1_caldas_nord', 'Caídas nórdicas con resistencia', 2, '6', 0),
        _ex('ezc_s4d1_ht_mc_res', 'Hip thrust con mancuerna y resistencia', 4, '14', 0),
        _ex('ezc_s4d1_sq_split', 'Sentadilla Split con mancuernas', 3, '10/lado', 0),
        _ex('ezc_s4d1_kb_clean', 'Kettlebell clean and press', 3, '10/lado', 0),
        _ex('ezc_s4d1_patada_glut', 'Patada de glúteo con resistencia', 3, '14/lado', 0),
      ],
      2: [
        _ex('ezc_s4d2_mob_rot_col', 'Movilidad | Rotación de columna en T', 1, '8/lado', 0),
        _ex('ezc_s4d2_mob_run_lunge', 'Movilidad | Runners lunge', 1, '7/lado', 0),
        _ex('ezc_s4d2_mob_car', 'Movilidad | Shoulder CAR', 1, '10', 0),
        _ex('ezc_s4d2_mob_kb_halo', 'Movilidad | Kettlebell halos', 1, '8/lado', 0),
        _ex('ezc_s4d2_flex_max', 'Flexiones', 1, 'Máximas', 0, '¡Récord en Instagram!'),
        _ex('ezc_s4d2_remo_pie', 'Remo de pie con resistencia', 3, '14', 0),
        _ex('ezc_s4d2_press_hombro', 'Press de hombro con mancuernas en sedestación', 3, '14', 0),
        _ex('ezc_s4d2_facepull', 'Facepull con resistencia', 3, '16', 0),
        _ex('ezc_s4d2_core_crunch', 'Core | Crunch', 3, '10', 0),
        _ex('ezc_s4d2_core_plank_toques', 'Plancha con toques de hombro', 3, '10/lado', 0),
        _ex('ezc_s4d2_core_vups', 'Core | V ups', 3, '8', 0),
      ],
      3: [
        _ex('ezc_s4d3_drop_r1', 'HIIT | Drop squats con disco', 1, '30" trabajo', 30),
        _ex('ezc_s4d3_sqr_r1', 'HIIT | Sentadilla + toque de rodilla', 1, '30" trabajo', 30),
        _ex('ezc_s4d3_mt_r1', 'Core | Mountain climbers', 1, '30" trabajo', 30),
        _ex('ezc_s4d3_scis_r1', 'HIIT | Scissor jumps', 1, '30" trabajo', 30),
        _ex('ezc_s4d3_rocket_r1', 'HIIT | Rocket launch taps', 1, '30" trabajo', 30),
        _ex('ezc_s4d3_drop_r2', 'HIIT | Drop squats con disco', 1, '30" trabajo', 30),
        _ex('ezc_s4d3_sqr_r2', 'HIIT | Sentadilla + toque de rodilla', 1, '30" trabajo', 30),
        _ex('ezc_s4d3_mt_r2', 'Core | Mountain climbers', 1, '30" trabajo', 30),
        _ex('ezc_s4d3_scis_r2', 'HIIT | Scissor jumps', 1, '30" trabajo', 30),
        _ex('ezc_s4d3_rocket_r2', 'HIIT | Rocket launch taps', 1, '30" trabajo', 30),
        _ex('ezc_s4d3_drop_r3', 'HIIT | Drop squats con disco', 1, '30" trabajo', 30),
        _ex('ezc_s4d3_sqr_r3', 'HIIT | Sentadilla + toque de rodilla', 1, '30" trabajo', 30),
        _ex('ezc_s4d3_mt_r3', 'Core | Mountain climbers', 1, '30" trabajo', 30),
        _ex('ezc_s4d3_scis_r3', 'HIIT | Scissor jumps', 1, '30" trabajo', 30),
        _ex('ezc_s4d3_rocket_r3', 'HIIT | Rocket launch taps', 1, '30" trabajo', 30),
      ],
      4: [
        _ex('ezc_s4d4_core_limb', 'Core | Limb lifts', 2, '8/lado', 0),
        _ex('ezc_s4d4_est_aduct', 'Estiramiento | Aductores (Mariposa)', 2, '30"', 0),
        _ex('ezc_s4d4_est_standing', 'Estiramiento | Standing reach down', 2, '30"', 0),
        _ex('ezc_s4d4_est_pigeon', 'Estiramiento | Cadera (Pigeon)', 2, '30"/lado', 0),
        _ex('ezc_s4d4_mob_scorp', 'Movilidad | Scorpions', 2, '8/lado', 0),
        _ex('ezc_s4d4_mob_flex_tobi', 'Movilidad | Flexión de tobillo con peso', 2, '30"/lado', 0),
      ],
      5: [
        _ex('ezc_s4d5_mob_cosak', 'Movilidad | Cossak squat', 1, '8/lado', 0),
        _ex('ezc_s4d5_mob_bisagra', 'Movilidad | Bisagra de cadera', 1, '10', 0),
        _ex('ezc_s4d5_mob_mov_esc', 'Movilidad | Movimientos escapulares', 1, '10', 0),
        _ex('ezc_s4d5_mob_leg_rock', 'Movilidad | Leg Rockback', 1, '8 rebotes/lado', 0),
        _ex('ezc_s4d5_pm_res', 'Peso muerto con resistencia', 4, '8-10', 0),
        _ex('ezc_s4d5_sq_kb_remo', 'Sentadilla kettlebell + remo al mentón', 4, '10', 0),
        _ex('ezc_s4d5_remo_90', 'Remo a 90 con mancuernas', 3, '8', 0),
        _ex('ezc_s4d5_pistol_mc', 'Pistol squat con mancuerna', 2, '4/lado', 0),
        _ex('ezc_s4d5_core_pass', 'Core | Pass through con mancuernas', 3, '10/lado', 0),
        _ex('ezc_s4d5_core_vups', 'Core | V ups con toques de pie', 3, '8/lado', 0),
      ],
      6: [
        _ex('ezc_s4d6_ff_r1', 'HIIT | Fast feet', 1, '30" trabajo', 30),
        _ex('ezc_s4d6_remo_r1', 'HIIT | Remo con salto y resistencia', 1, '30" trabajo', 30),
        _ex('ezc_s4d6_lat_r1', 'HIIT | Lateral lunge drop', 1, '30" trabajo', 30),
        _ex('ezc_s4d6_rocket_r1', 'Rocket launch squats', 1, '30" trabajo', 30),
        _ex('ezc_s4d6_skater_r1', 'HIIT | Skater jumps', 1, '30" trabajo', 30),
        _ex('ezc_s4d6_ff_r2', 'HIIT | Fast feet', 1, '30" trabajo', 30),
        _ex('ezc_s4d6_remo_r2', 'HIIT | Remo con salto y resistencia', 1, '30" trabajo', 30),
        _ex('ezc_s4d6_lat_r2', 'HIIT | Lateral lunge drop', 1, '30" trabajo', 30),
        _ex('ezc_s4d6_rocket_r2', 'Rocket launch squats', 1, '30" trabajo', 30),
        _ex('ezc_s4d6_skater_r2', 'HIIT | Skater jumps', 1, '30" trabajo', 30),
        _ex('ezc_s4d6_ff_r3', 'HIIT | Fast feet', 1, '30" trabajo', 30),
        _ex('ezc_s4d6_remo_r3', 'HIIT | Remo con salto y resistencia', 1, '30" trabajo', 30),
        _ex('ezc_s4d6_lat_r3', 'HIIT | Lateral lunge drop', 1, '30" trabajo', 30),
        _ex('ezc_s4d6_rocket_r3', 'Rocket launch squats', 1, '30" trabajo', 30),
        _ex('ezc_s4d6_skater_r3', 'HIIT | Skater jumps', 1, '30" trabajo', 30),
      ],
      7: [
        _ex('ezc_s4d7_aduct_copenh', 'Aductores | Plancha Copenhague', 2, '30"/lado', 0),
        _ex('ezc_s4d7_est_sitting', 'Estiramiento | Sitting reach', 2, '30"', 0),
        _ex('ezc_s4d7_mob_cat', 'Movilidad | Cat camel', 2, '10', 0),
        _ex('ezc_s4d7_est_tricep', 'Estiramiento | Tríceps', 2, '15"/lado', 0),
        _ex('ezc_s4d7_est_muneca', 'Estiramiento | Muñecas', 2, '30"', 0),
        _ex('ezc_s4d7_est_standing_fwd', 'Estiramiento | Standing reach down forward', 2, '30"', 0),
      ],
    },
  ]
};

/* ══════════════ EMPEZANDO DE CERO EN GYM (4 semanas) ══════════════ */
WORKOUT_PLANS.empezando_gym = {
  id: 'empezando_gym',
  name: 'Empezando de Cero en Gym',
  planType: 'phased',
  weeks: 4,
  description: 'Plan de 4 semanas en gym — pierna/glúteos, torso/core, HIIT y movilidad',
  trainingDays: [1, 2, 3, 4, 5, 6, 7],
  dayMeta: {
    1: { name: 'Pierna y Glúteos',  type: 'strength', muscleGroups: ['Piernas', 'Glúteos'] },
    2: { name: 'Torso y Core',      type: 'strength', muscleGroups: ['Pecho', 'Espalda', 'Core'] },
    3: { name: 'HIIT',              type: 'strength', muscleGroups: ['Full body', 'Cardio'] },
    4: { name: 'Movilidad',         type: 'strength', muscleGroups: ['Movilidad', 'Recuperación'] },
    5: { name: 'Fullbody',          type: 'strength', muscleGroups: ['Full body'] },
    6: { name: 'HIIT',              type: 'strength', muscleGroups: ['Full body', 'Cardio'] },
    7: { name: 'Movilidad',         type: 'strength', muscleGroups: ['Movilidad', 'Recuperación'] }
  },
  weeklySchedule: [
    // ════════════════ SEMANA 1 ════════════════
    {
      // S1 D1 — Pierna y glúteos
      1: [
        _ex('eg_s1d1_mob_cat',        'Movilidad - Cat camel', 1, '10', 0),
        _ex('eg_s1d1_mob_snow',       'Movilidad - Prone snow angels', 1, '10', 0),
        _ex('eg_s1d1_mob_rot90',      'Movilidad - Rotación interna de cadera 90-90', 1, '8/lado', 0),
        _ex('eg_s1d1_mob_flex_esc',   'Movilidad - Flexiones escapulares', 1, '10', 0),
        _ex('eg_s1d1_sent_libre_1',   'Sentadilla libre | barra alta', 2, '10', 0),
        _ex('eg_s1d1_sent_libre_2',   'Sentadilla libre | barra alta', 1, '8', 0),
        _ex('eg_s1d1_sent_isom',      'Sentadilla isométrica', 1, '60"', 30),
        _ex('eg_s1d1_hip_thrust',     'Hip Thrust', 3, '14', 0),
        _ex('eg_s1d1_bulgara_1',      'Sentadilla búlgara con mancuerna', 1, '8/lado', 0),
        _ex('eg_s1d1_bulgara_2',      'Sentadilla búlgara con mancuerna', 1, '10/lado', 0),
        _ex('eg_s1d1_pull_through',   'Pull through en polea', 2, '16', 0),
        _ex('eg_s1d1_patada_gluteo',  'Patada de glúteo en polea en cuadrupedia', 2, '14/lado', 0),
      ],
      // S1 D2 — Torso y core
      2: [
        _ex('eg_s1d2_mob_rot_col',    'Movilidad - Rotación de columna en T', 1, '8/lado', 0),
        _ex('eg_s1d2_mob_rlunge',     'Movilidad - Runners lunge', 1, '7/lado', 0),
        _ex('eg_s1d2_mob_shoulder',   'Movilidad - Shoulder CAR', 1, '10', 0),
        _ex('eg_s1d2_mob_kb_halos',   'Movilidad - Kettlebell halos', 1, '8/lado', 0),
        _ex('eg_s1d2_flex_elev',      'Flexiones con elevación', 3, '8-10', 0),
        _ex('eg_s1d2_remo_barra',     'Remo con barra a 90°', 3, '10', 0),
        _ex('eg_s1d2_elev_lat_1',     'Elevaciones laterales con mancuernas', 1, '10', 30),
        _ex('eg_s1d2_elev_lat_2',     'Elevaciones laterales con mancuernas', 1, '10 (mismo peso)', 30),
        _ex('eg_s1d2_elev_lat_3',     'Elevaciones laterales con mancuernas', 1, '10 (mismo peso)', 30),
        _ex('eg_s1d2_facepull',       'Facepull en polea', 3, '16', 0),
        _ex('eg_s1d2_core_zombie',    'Core | Zombie sit ups', 2, '30"', 30),
        _ex('eg_s1d2_core_elev_iso',  'Core | Elevación de piernas isométrica', 2, '30"', 30),
        _ex('eg_s1d2_core_rueda',     'Core | Rueda abdominal adaptada', 2, '8', 30),
      ],
      // S1 D3 — HIIT (5 ejercicios × 3 rondas = 15 cards)
      3: [
        _ex('eg_s1d3_burpee_r1',      'HIIT | Burpee sin salto', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s1d3_sprint_r1',      'HIIT | Sprint estático', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s1d3_jjacks_r1',      'HIIT | Jumping jacks', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s1d3_mc_rod_r1',      'HIIT | Mountain climbers + toques rodilla', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s1d3_pris_r1',        'HIIT | Prisioner side to side squats', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s1d3_burpee_r2',      'HIIT | Burpee sin salto', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s1d3_sprint_r2',      'HIIT | Sprint estático', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s1d3_jjacks_r2',      'HIIT | Jumping jacks', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s1d3_mc_rod_r2',      'HIIT | Mountain climbers + toques rodilla', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s1d3_pris_r2',        'HIIT | Prisioner side to side squats', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s1d3_burpee_r3',      'HIIT | Burpee sin salto', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s1d3_sprint_r3',      'HIIT | Sprint estático', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s1d3_jjacks_r3',      'HIIT | Jumping jacks', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s1d3_mc_rod_r3',      'HIIT | Mountain climbers + toques rodilla', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s1d3_pris_r3',        'HIIT | Prisioner side to side squats', 1, '30"', 30, 'Ronda 3'),
      ],
      // S1 D4 — Movilidad
      4: [
        _ex('eg_s1d4_core_limb',      'Core | Limb lifts', 2, '8/lado', 0),
        _ex('eg_s1d4_mob_scorpion',   'Movilidad - Scorpions', 2, '8/lado', 0),
        _ex('eg_s1d4_est_updog',      'Estiramientos - Upward dog', 2, '6', 0),
        _ex('eg_s1d4_est_frog',       'Estiramiento - Cadera (Frog)', 2, '30"', 0),
        _ex('eg_s1d4_est_hombros',    'Estiramiento - Hombros', 2, '15"/lado', 0),
        _ex('eg_s1d4_est_uni_sit',    'Estiramientos - Unilateral sitting reach', 2, '30"/lado', 0),
      ],
      // S1 D5 — HIIT (5 ejercicios × 3 rondas)
      5: [
        _ex('eg_s1d5_plank_r1',       'HIIT | Plank thrust', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s1d5_dolphin_r1',     'HIIT | Dolphin plank + knee taps', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s1d5_kicksits_r1',    'HIIT | Kick sits tap', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s1d5_rocket_r1',      'HIIT | Rocket jump squat taps', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s1d5_drunken_r1',     'HIIT | Drunken mountain climbers', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s1d5_plank_r2',       'HIIT | Plank thrust', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s1d5_dolphin_r2',     'HIIT | Dolphin plank + knee taps', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s1d5_kicksits_r2',    'HIIT | Kick sits tap', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s1d5_rocket_r2',      'HIIT | Rocket jump squat taps', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s1d5_drunken_r2',     'HIIT | Drunken mountain climbers', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s1d5_plank_r3',       'HIIT | Plank thrust', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s1d5_dolphin_r3',     'HIIT | Dolphin plank + knee taps', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s1d5_kicksits_r3',    'HIIT | Kick sits tap', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s1d5_rocket_r3',      'HIIT | Rocket jump squat taps', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s1d5_drunken_r3',     'HIIT | Drunken mountain climbers', 1, '30"', 30, 'Ronda 3'),
      ],
      // S1 D6 — Fullbody
      6: [
        _ex('eg_s1d6_mob_cossak',     'Movilidad - Cossak squat', 1, '8/lado', 0),
        _ex('eg_s1d6_mob_bisagra',    'Movilidad - Bisagra de cadera', 1, '10', 0),
        _ex('eg_s1d6_mob_esc',        'Movilidad | Movimientos escapulares', 1, '10', 0),
        _ex('eg_s1d6_mob_logback',    'Movilidad - Leg Rockback', 1, '8 rebotes/lado', 0),
        _ex('eg_s1d6_pm_1',           'Peso muerto convencional', 2, '8', 0),
        _ex('eg_s1d6_pm_2',           'Peso muerto convencional', 1, '10', 0),
        _ex('eg_s1d6_thruster',       'Thruster con mancuernas', 3, '10', 0),
        _ex('eg_s1d6_australian',     'Australian pull-ups', 3, '6', 0),
        _ex('eg_s1d6_pistol_box',     'Squat box unilateral (pistol)', 2, '10/lado', 0),
        _ex('eg_s1d6_core_plank',     'Core | Plancha de codos a manos', 2, '10', 0),
        _ex('eg_s1d6_core_pallof',    'Core | Press Pallof con resistencia', 2, '8/lado', 0),
      ],
      // S1 D7 — Movilidad
      7: [
        _ex('eg_s1d7_core_deadbugs',  'Core | Deadbugs', 2, '8/lado', 0),
        _ex('eg_s1d7_est_pir',        'Estiramiento - Piramidal', 2, '30"/lado', 0),
        _ex('eg_s1d7_mob_flex_esc',   'Movilidad - Flexiones escapulares', 1, '10', 0),
        _ex('eg_s1d7_mob_aduct_kb',   'Movilidad - Aductores con kettlebell', 2, '8/lado', 0),
        _ex('eg_s1d7_mob_rot_col',    'Movilidad - Rotación de columna en T', 2, '10/lado', 0),
        _ex('eg_s1d7_mob_deepsuq',    'Movilidad - Deep squat prayer opener', 2, '30"/lado', 0),
      ],
    },
    // ════════════════ SEMANA 2 ════════════════
    {
      // S2 D1 — Pierna y glúteos
      1: [
        _ex('eg_s2d1_mob_cat',        'Movilidad - Cat camel', 1, '10', 0),
        _ex('eg_s2d1_mob_snow',       'Movilidad - Prone snow angels', 1, '10', 0),
        _ex('eg_s2d1_mob_rot90',      'Movilidad - Rotación interna de cadera 90-90', 1, '8/lado', 0),
        _ex('eg_s2d1_mob_flex_esc',   'Movilidad - Flexiones escapulares', 1, '10', 0),
        _ex('eg_s2d1_sent_libre_1',   'Sentadilla libre | barra alta', 2, '10', 0),
        _ex('eg_s2d1_sent_libre_2',   'Sentadilla libre | barra alta', 1, '8', 0),
        _ex('eg_s2d1_caidas',         'Caídas nórdicas inversas con resistencia', 2, '6', 0),
        _ex('eg_s2d1_hip_thrust',     'Hip Thrust 1/2 ROM', 3, '10', 0),
        _ex('eg_s2d1_curtsy',         'Curtsy lunges con mancuerna', 2, '10/lado', 0),
        _ex('eg_s2d1_hiper',          'Hiperextensión con disco', 2, '16', 0),
        _ex('eg_s2d1_patada_gluteo',  'Patada de glúteo en polea en cuadrupedia', 2, '14/lado', 0),
      ],
      // S2 D2 — Torso y core
      2: [
        _ex('eg_s2d2_mob_rot_col',    'Movilidad - Rotación de columna en T', 1, '8/lado', 0),
        _ex('eg_s2d2_mob_rlunge',     'Movilidad - Runners lunge', 1, '7/lado', 0),
        _ex('eg_s2d2_mob_shoulder',   'Movilidad - Shoulder CAR', 1, '10', 0),
        _ex('eg_s2d2_mob_kb_halos',   'Movilidad - Kettlebell halos', 1, '8/lado', 0),
        _ex('eg_s2d2_flex_pliom',     'Flexiones pliométricas con altura', 3, '6-8', 0),
        _ex('eg_s2d2_remo_gironda',   'Remo gironda en polea', 3, '14', 0),
        _ex('eg_s2d2_press_uni',      'Press banca unilateral con mancuernas', 3, '10/lado', 0),
        _ex('eg_s2d2_facepull',       'Facepull en polea', 3, '16', 0),
        _ex('eg_s2d2_core_mcguill',   'Core | McGuill crunch', 2, '30"', 30),
        _ex('eg_s2d2_core_crunch_inv','Core | Crunch inverso con disco', 2, '30"', 30),
        _ex('eg_s2d2_core_pike',      'Core | Pike plank en fitball', 2, '30"', 30),
      ],
      // S2 D3 — HIIT
      3: [
        _ex('eg_s2d3_plank_r1',       'HIIT | Plank thrust variation', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s2d3_sentpie_r1',     'HIIT | Sentadilla + toques de pie', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s2d3_spider_r1',      'HIIT | Spider lunges', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s2d3_pivot_r1',       'HIIT | Pivot squat jumps 180°', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s2d3_sentrot_r1',     'HIIT | Sentadilla con salto + rotación', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s2d3_plank_r2',       'HIIT | Plank thrust variation', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s2d3_sentpie_r2',     'HIIT | Sentadilla + toques de pie', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s2d3_spider_r2',      'HIIT | Spider lunges', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s2d3_pivot_r2',       'HIIT | Pivot squat jumps 180°', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s2d3_sentrot_r2',     'HIIT | Sentadilla con salto + rotación', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s2d3_plank_r3',       'HIIT | Plank thrust variation', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s2d3_sentpie_r3',     'HIIT | Sentadilla + toques de pie', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s2d3_spider_r3',      'HIIT | Spider lunges', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s2d3_pivot_r3',       'HIIT | Pivot squat jumps 180°', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s2d3_sentrot_r3',     'HIIT | Sentadilla con salto + rotación', 1, '30"', 30, 'Ronda 3'),
      ],
      // S2 D4 — Movilidad
      4: [
        _ex('eg_s2d4_core_limb',      'Core | Limb lifts', 2, '8/lado', 0),
        _ex('eg_s2d4_est_pir',        'Estiramiento - Piramidal sentada', 2, '30"', 0),
        _ex('eg_s2d4_est_espalda',    'Estiramiento - Espalda en cajón', 2, '30"', 0),
        _ex('eg_s2d4_est_frog',       'Estiramiento - Cadera (Frog)', 2, '30"', 0),
        _ex('eg_s2d4_est_hombros',    'Estiramiento - Hombros con rotación', 2, '15"/lado', 0),
        _ex('eg_s2d4_mob_flex_tib',   'Movilidad - Flexión tibial con resistencia', 2, '10/lado', 0),
      ],
      // S2 D5 — Fullbody
      5: [
        _ex('eg_s2d5_mob_cossak',     'Movilidad - Cossak squat', 1, '8/lado', 0),
        _ex('eg_s2d5_mob_bisagra',    'Movilidad - Bisagra de cadera', 1, '10', 0),
        _ex('eg_s2d5_mob_esc',        'Movilidad | Movimientos escapulares', 1, '10', 0),
        _ex('eg_s2d5_mob_logback',    'Movilidad - Leg Rockback', 1, '8 rebotes/lado', 0),
        _ex('eg_s2d5_pm_1',           'Peso muerto convencional', 2, '8', 0),
        _ex('eg_s2d5_pm_2',           'Peso muerto convencional', 1, '10', 0),
        _ex('eg_s2d5_thruster',       'Thruster con mancuernas', 3, '10', 0),
        _ex('eg_s2d5_australian',     'Australian pull-ups', 3, '6', 0),
        _ex('eg_s2d5_pistol_res',     'Pistol squat con resistencia', 2, '8/lado', 0),
        _ex('eg_s2d5_core_russian',   'Core | Russian twist con mancuerna', 2, '30"', 30),
        _ex('eg_s2d5_core_kbpull',    'Core | Kettlebell pull through', 2, '6/lado', 0),
      ],
      // S2 D6 — HIIT
      6: [
        _ex('eg_s2d6_burpee_r1',      'HIIT | Burpees', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s2d6_sprint_r1',      'HIIT | Sprints con resistencia', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s2d6_jjp_r1',         'Core | Jumping jacks plank', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s2d6_bench_r1',       'HIIT | Bench over jumps', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s2d6_bulg_r1',        'HIIT | Sentadilla búlgara con salto', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s2d6_burpee_r2',      'HIIT | Burpees', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s2d6_sprint_r2',      'HIIT | Sprints con resistencia', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s2d6_jjp_r2',         'Core | Jumping jacks plank', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s2d6_bench_r2',       'HIIT | Bench over jumps', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s2d6_bulg_r2',        'HIIT | Sentadilla búlgara con salto', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s2d6_burpee_r3',      'HIIT | Burpees', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s2d6_sprint_r3',      'HIIT | Sprints con resistencia', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s2d6_jjp_r3',         'Core | Jumping jacks plank', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s2d6_bench_r3',       'HIIT | Bench over jumps', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s2d6_bulg_r3',        'HIIT | Sentadilla búlgara con salto', 1, '30"', 30, 'Ronda 3'),
      ],
      // S2 D7 — Movilidad
      7: [
        _ex('eg_s2d7_aduct_copenh',   'Aductores - Plancha Copenhague', 2, '30"/lado', 0),
        _ex('eg_s2d7_est_gluteo',     'Estiramiento - Glúteo medio', 2, '30"', 0),
        _ex('eg_s2d7_est_cuello',     'Estiramiento - Cuello', 2, '30"', 0),
        _ex('eg_s2d7_mob_logback',    'Movilidad - Leg Rockback', 2, '8/pierna', 0),
        _ex('eg_s2d7_mob_scorpion',   'Movilidad - Scorpions', 2, '10/lado', 0),
        _ex('eg_s2d7_mob_flex_tob',   'Movilidad - Flexión de tobillo con peso', 2, '30"/lado', 0),
      ],
    },
    // ════════════════ SEMANA 3 ════════════════
    {
      // S3 D1 — Pierna y glúteos
      1: [
        _ex('eg_s3d1_mob_cat',        'Movilidad - Cat camel', 1, '10', 0),
        _ex('eg_s3d1_mob_snow',       'Movilidad - Prone snow angels', 1, '10', 0),
        _ex('eg_s3d1_mob_rot90',      'Movilidad - Rotación interna de cadera 90-90', 1, '8/lado', 0),
        _ex('eg_s3d1_mob_flex_esc',   'Movilidad - Flexiones escapulares', 1, '10', 0),
        _ex('eg_s3d1_sent_libre_1',   'Sentadilla libre | barra alta', 2, '10', 0),
        _ex('eg_s3d1_sent_libre_2',   'Sentadilla libre | barra alta', 2, '8', 0),
        _ex('eg_s3d1_curl_fem',       'Curl de femoral con resistencia', 2, '14', 0),
        _ex('eg_s3d1_hip_thrust',     'Hip Thrust', 4, '14', 0),
        _ex('eg_s3d1_bulgara',        'Sentadilla búlgara con mancuerna', 2, '10/lado', 0),
        _ex('eg_s3d1_kb_swing',       'Kettlebell swing', 3, '16', 0),
        _ex('eg_s3d1_patada_gluteo',  'Patada de glúteo en polea en cuadrupedia', 3, '14/lado', 0),
      ],
      // S3 D2 — Torso y core
      2: [
        _ex('eg_s3d2_mob_rot_col',    'Movilidad - Rotación de columna en T', 1, '8/lado', 0),
        _ex('eg_s3d2_mob_rlunge',     'Movilidad - Runners lunge', 1, '7/lado', 0),
        _ex('eg_s3d2_mob_shoulder',   'Movilidad - Shoulder CAR', 1, '10', 0),
        _ex('eg_s3d2_mob_kb_halos',   'Movilidad - Kettlebell halos', 1, '8/lado', 0),
        _ex('eg_s3d2_flex_res',       'Flexiones con resistencia', 4, '8', 0),
        _ex('eg_s3d2_jalon_uni',      'Jalón unilateral en polea', 3, '14', 0),
        _ex('eg_s3d2_elev_front',     'Elevaciones frontales con mancuernas', 3, '14', 0),
        _ex('eg_s3d2_facepull',       'Facepull en polea', 3, '16', 0),
        _ex('eg_s3d2_core_cocoons',   'Core | Cocoons', 3, '30"', 30),
        _ex('eg_s3d2_core_pl_inv',    'Core | Plancha inversa con toques de rodilla', 3, '30"', 30),
        _ex('eg_s3d2_core_vups',      'Core | V ups con toques de pie', 3, '20"/lado', 20),
      ],
      // S3 D3 — HIIT
      3: [
        _ex('eg_s3d3_tuck_r1',        'HIIT | Tuck jumps', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s3d3_sprint_r1',      'HIIT | Sprints con resistencia', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s3d3_kicksits_r1',    'Core | Forward kick sits', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s3d3_pulse_r1',       'HIIT | Pulse lunges', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s3d3_side_r1',        'HIIT | Side bound launches', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s3d3_tuck_r2',        'HIIT | Tuck jumps', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s3d3_sprint_r2',      'HIIT | Sprints con resistencia', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s3d3_kicksits_r2',    'Core | Forward kick sits', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s3d3_pulse_r2',       'HIIT | Pulse lunges', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s3d3_side_r2',        'HIIT | Side bound launches', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s3d3_tuck_r3',        'HIIT | Tuck jumps', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s3d3_sprint_r3',      'HIIT | Sprints con resistencia', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s3d3_kicksits_r3',    'Core | Forward kick sits', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s3d3_pulse_r3',       'HIIT | Pulse lunges', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s3d3_side_r3',        'HIIT | Side bound launches', 1, '30"', 30, 'Ronda 3'),
      ],
      // S3 D4 — Movilidad
      4: [
        _ex('eg_s3d4_core_limb',      'Core | Limb lifts', 2, '8/lado', 0),
        _ex('eg_s3d4_mob_rlunge_r',   'Movilidad - Runners lunge with reach', 2, '6/lado', 0),
        _ex('eg_s3d4_est_rod_pecho',  'Estiramiento - Rodilla al pecho', 2, '30"/lado', 0),
        _ex('eg_s3d4_mob_bridge',     'Movilidad - Bridge march', 2, '8/lado', 0),
        _ex('eg_s3d4_mob_supermans',  'Movilidad - Supermans', 2, '10', 0),
        _ex('eg_s3d4_est_circular',   'Estiramientos circulares', 2, '8/lado', 0),
      ],
      // S3 D5 — Fullbody
      5: [
        _ex('eg_s3d5_mob_cossak',     'Movilidad - Cossak squat', 1, '8/lado', 0),
        _ex('eg_s3d5_mob_bisagra',    'Movilidad - Bisagra de cadera', 1, '10', 0),
        _ex('eg_s3d5_mob_esc',        'Movilidad | Movimientos escapulares', 1, '10', 0),
        _ex('eg_s3d5_mob_logback',    'Movilidad - Leg Rockback', 1, '8 rebotes/lado', 0),
        _ex('eg_s3d5_pm_1',           'Peso muerto convencional', 2, '8', 0),
        _ex('eg_s3d5_pm_2',           'Peso muerto convencional', 2, '10', 0),
        _ex('eg_s3d5_rack_kb',        'Rack kettlebell squat', 4, '8', 0),
        _ex('eg_s3d5_dom_neg',        'Dominadas negativas', 3, '8', 0),
        _ex('eg_s3d5_pistol_walks',   'Pistol squat walks', 2, '6/lado', 0),
        _ex('eg_s3d5_core_crunch_l',  'Core | Crunch abdominal lateral', 3, '6/lado', 30),
        _ex('eg_s3d5_core_scissors',  'Core | Scissors', 3, '20 (en total)', 30),
      ],
      // S3 D6 — HIIT
      6: [
        _ex('eg_s3d6_calf_r1',        'HIIT | Calf jumps', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s3d6_knee_r1',        'Core | Knee to toe taps', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s3d6_kicksits_r1',    'Core | Kick sits', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s3d6_pulse_r1',       'HIIT | Pulse jump squats', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s3d6_pris_r1',        'HIIT | Prisioner side to side squats', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s3d6_calf_r2',        'HIIT | Calf jumps', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s3d6_knee_r2',        'Core | Knee to toe taps', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s3d6_kicksits_r2',    'Core | Kick sits', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s3d6_pulse_r2',       'HIIT | Pulse jump squats', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s3d6_pris_r2',        'HIIT | Prisioner side to side squats', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s3d6_calf_r3',        'HIIT | Calf jumps', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s3d6_knee_r3',        'Core | Knee to toe taps', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s3d6_kicksits_r3',    'Core | Kick sits', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s3d6_pulse_r3',       'HIIT | Pulse jump squats', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s3d6_pris_r3',        'HIIT | Prisioner side to side squats', 1, '30"', 30, 'Ronda 3'),
      ],
      // S3 D7 — Movilidad
      7: [
        _ex('eg_s3d7_core_deadbugs',  'Core | Deadbugs', 2, '8/lado', 0),
        _ex('eg_s3d7_est_split',      'Estiramiento - Split unilateral', 2, '30"/lado', 0),
        _ex('eg_s3d7_est_updog',      'Estiramientos - Upward dog', 2, '6', 0),
        _ex('eg_s3d7_est_hombros',    'Estiramiento - Hombros', 2, '15"/lado', 0),
        _ex('eg_s3d7_est_frog',       'Estiramiento - Cadera (Frog)', 2, '30"', 0),
        _ex('eg_s3d7_mob_flex_tib',   'Movilidad - Flexión tibial con resistencia', 2, '10/lado', 0),
      ],
    },
    // ════════════════ SEMANA 4 ════════════════
    {
      // S4 D1 — Pierna y glúteos
      1: [
        _ex('eg_s4d1_mob_cat',        'Movilidad - Cat camel', 1, '10', 0),
        _ex('eg_s4d1_mob_snow',       'Movilidad - Prone snow angels', 1, '10', 0),
        _ex('eg_s4d1_mob_rot90',      'Movilidad - Rotación interna de cadera 90-90', 1, '8/lado', 0),
        _ex('eg_s4d1_mob_flex_esc',   'Movilidad - Flexiones escapulares', 1, '10', 0),
        _ex('eg_s4d1_sent_libre_1',   'Sentadilla libre | barra alta', 2, '10', 0),
        _ex('eg_s4d1_sent_libre_2',   'Sentadilla libre | barra alta', 2, '8', 0),
        _ex('eg_s4d1_caidas',         'Caídas nórdicas con resistencia', 2, '6', 0),
        _ex('eg_s4d1_hip_thrust',     'Hip Thrust', 4, '14', 0),
        _ex('eg_s4d1_bulgara',        'Sentadilla búlgara con mancuerna', 3, '10/lado', 0),
        _ex('eg_s4d1_kb_clean',       'Kettlebell clean and press', 3, '10/lado', 0),
        _ex('eg_s4d1_patada',         'Patada de glúteo en polea en cuadrupedia', 3, '14/lado', 0),
      ],
      // S4 D2 — Torso y core
      2: [
        _ex('eg_s4d2_mob_rot_col',    'Movilidad - Rotación de columna en T', 1, '8/lado', 0),
        _ex('eg_s4d2_mob_rlunge',     'Movilidad - Runners lunge', 1, '7/lado', 0),
        _ex('eg_s4d2_mob_shoulder',   'Movilidad - Shoulder CAR', 1, '10', 0),
        _ex('eg_s4d2_mob_kb_halos',   'Movilidad - Kettlebell halos', 1, '8/lado', 0),
        _ex('eg_s4d2_flex_max',       'Flexiones', 1, 'Máximas', 0, '¡Etiquétanos enseñando tu récord en Instagram!'),
        _ex('eg_s4d2_remo_90',        'Remo a 90 con mancuernas', 3, '14', 0),
        _ex('eg_s4d2_press_hombro',   'Press de hombro con mancuernas en sedestación', 3, '14', 0),
        _ex('eg_s4d2_facepull',       'Facepull en polea', 3, '16', 0),
        _ex('eg_s4d2_core_crunch',    'Core | Crunch', 3, '30"', 30),
        _ex('eg_s4d2_plancha_homb',   'Plancha con toques de hombro', 3, '30" alternando', 30),
        _ex('eg_s4d2_core_vups',      'Core | V ups', 3, '30"', 30),
      ],
      // S4 D3 — HIIT
      3: [
        _ex('eg_s4d3_drop_r1',        'HIIT | Drop squats con disco', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s4d3_sentrod_r1',     'HIIT | Sentadilla + toque de rodilla', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s4d3_mc_r1',          'Core | Mountain climbers', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s4d3_scissor_r1',     'HIIT | Scissor jumps', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s4d3_rocket_r1',      'HIIT | Rocket launch taps', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s4d3_drop_r2',        'HIIT | Drop squats con disco', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s4d3_sentrod_r2',     'HIIT | Sentadilla + toque de rodilla', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s4d3_mc_r2',          'Core | Mountain climbers', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s4d3_scissor_r2',     'HIIT | Scissor jumps', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s4d3_rocket_r2',      'HIIT | Rocket launch taps', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s4d3_drop_r3',        'HIIT | Drop squats con disco', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s4d3_sentrod_r3',     'HIIT | Sentadilla + toque de rodilla', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s4d3_mc_r3',          'Core | Mountain climbers', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s4d3_scissor_r3',     'HIIT | Scissor jumps', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s4d3_rocket_r3',      'HIIT | Rocket launch taps', 1, '30"', 30, 'Ronda 3'),
      ],
      // S4 D4 — Movilidad
      4: [
        _ex('eg_s4d4_core_limb',      'Core | Limb lifts', 2, '8/lado', 0),
        _ex('eg_s4d4_est_aduct',      'Estiramiento - Aductores (Mariposa)', 2, '30"', 0),
        _ex('eg_s4d4_est_standing',   'Estiramientos - Standing reach down', 2, '30"', 0),
        _ex('eg_s4d4_est_pigeon',     'Estiramientos - Cadera (Pigeon)', 2, '30"/lado', 0),
        _ex('eg_s4d4_mob_scorpion',   'Movilidad - Scorpions', 2, '8/lado', 0),
        _ex('eg_s4d4_mob_flex_tob',   'Movilidad - Flexión de tobillo con peso', 2, '30"/lado', 0),
      ],
      // S4 D5 — Fullbody
      5: [
        _ex('eg_s4d5_mob_cossak',     'Movilidad - Cossak squat', 1, '8/lado', 0),
        _ex('eg_s4d5_mob_bisagra',    'Movilidad - Bisagra de cadera', 1, '10', 0),
        _ex('eg_s4d5_mob_esc',        'Movilidad | Movimientos escapulares', 1, '10', 0),
        _ex('eg_s4d5_mob_logback',    'Movilidad - Leg Rockback', 1, '8 rebotes/lado', 0),
        _ex('eg_s4d5_pm_1',           'Peso muerto convencional', 2, '8', 0),
        _ex('eg_s4d5_pm_2',           'Peso muerto convencional', 2, '10', 0),
        _ex('eg_s4d5_kb_remo',        'Sentadilla kettlebell + remo al mentón', 4, '10', 0),
        _ex('eg_s4d5_dom_max',        'Dominadas', 1, 'Máximas', 0, '¡Etiquétanos enseñando tu récord en Instagram!'),
        _ex('eg_s4d5_pistol_disco',   'Pistol squat con disco', 2, '4/lado', 0),
        _ex('eg_s4d5_core_pass',      'Core | Pass through con mancuernas', 3, '10/lado', 30),
        _ex('eg_s4d5_core_vups',      'Core | V ups con toques de pie', 3, '20"/lado', 20),
      ],
      // S4 D6 — HIIT
      6: [
        _ex('eg_s4d6_fast_r1',        'HIIT | Fast feet', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s4d6_remo_r1',        'HIIT | Remo con salto y resistencia', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s4d6_lat_r1',         'HIIT | Lateral lunge drop', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s4d6_rocket_r1',      'HIIT | Rocket launch squats', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s4d6_skater_r1',      'HIIT | Skater jumps', 1, '30"', 30, 'Ronda 1'),
        _ex('eg_s4d6_fast_r2',        'HIIT | Fast feet', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s4d6_remo_r2',        'HIIT | Remo con salto y resistencia', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s4d6_lat_r2',         'HIIT | Lateral lunge drop', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s4d6_rocket_r2',      'HIIT | Rocket launch squats', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s4d6_skater_r2',      'HIIT | Skater jumps', 1, '30"', 30, 'Ronda 2'),
        _ex('eg_s4d6_fast_r3',        'HIIT | Fast feet', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s4d6_remo_r3',        'HIIT | Remo con salto y resistencia', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s4d6_lat_r3',         'HIIT | Lateral lunge drop', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s4d6_rocket_r3',      'HIIT | Rocket launch squats', 1, '30"', 30, 'Ronda 3'),
        _ex('eg_s4d6_skater_r3',      'HIIT | Skater jumps', 1, '30"', 30, 'Ronda 3'),
      ],
      // S4 D7 — Movilidad
      7: [
        _ex('eg_s4d7_aduct_copenh',   'Aductores - Plancha Copenhague', 2, '30"/lado', 0),
        _ex('eg_s4d7_est_sitting',    'Estiramientos - Sitting reach', 2, '30"', 0),
        _ex('eg_s4d7_mob_cat',        'Movilidad - Cat camel', 2, '10', 0),
        _ex('eg_s4d7_est_triceps',    'Estiramiento - Triceps', 2, '15"/lado', 0),
        _ex('eg_s4d7_est_munecas',    'Estiramiento - Muñecas', 2, '15"/lado', 0),
        _ex('eg_s4d7_est_standing',   'Estiramientos - Standing reach down forward', 2, '30"/lado', 0),
      ],
    },
  ]
};

/* ══════════════ QUEMANDO GRASA EN EL GYM (8 semanas) ══════════════ */
WORKOUT_PLANS.quemando_gym = {
  id: 'quemando_gym',
  name: 'Quemando Grasa en el Gym',
  planType: 'phased',
  weeks: 8,
  description: 'Plan 8 semanas en gym — fuerza tren superior/inferior, HIIT, Tabata y movilidad',
  trainingDays: [1, 2, 3, 4, 5, 6],
  dayMeta: {
    1: { name: 'Tren Inferior - Fuerza', type: 'strength', muscleGroups: ['Piernas', 'Glúteos'] },
    2: { name: 'Tren Superior - Fuerza', type: 'strength', muscleGroups: ['Pecho', 'Espalda', 'Hombros'] },
    3: { name: 'HIIT + Core',            type: 'strength', muscleGroups: ['Cardio', 'Core'] },
    4: { name: 'Movilidad',              type: 'strength', muscleGroups: ['Movilidad', 'Recuperación'] },
    5: { name: 'Fullbody - Fuerza',      type: 'strength', muscleGroups: ['Full body'] },
    6: { name: 'HIIT',                   type: 'strength', muscleGroups: ['Cardio', 'Full body'] }
  },
  weeklySchedule: [
    // ═══════ SEMANA 1 ═══════
    {
      // S1 D1 — Tren inferior fuerza
      1: [
        _ex('qg_s1d1_mob_cat',        'Movilidad - Cat camel', 1, '10', 0),
        _ex('qg_s1d1_mob_flex_tob',   'Movilidad - Flexión de tobillo en sedestación', 1, '8/lado', 0),
        _ex('qg_s1d1_mob_rot90',      'Movilidad - Rotación interna de cadera 90-90', 1, '12', 0),
        _ex('qg_s1d1_sent_aprox',     'Sentadilla libre | barra alta (aprox.)', 1, '6-8', 60),
        _ex('qg_s1d1_sent',           'Sentadilla libre | barra alta', 2, '8-10', 90),
        _ex('qg_s1d1_ht_aprox',       'Hip Thrust (aprox.)', 1, '6-8', 60),
        _ex('qg_s1d1_ht',             'Hip Thrust', 2, '8-10', 90),
        _ex('qg_s1d1_bulgara_1',      'Sentadilla búlgara con mancuerna', 1, '8-10/lado', 90),
        _ex('qg_s1d1_bulgara_2',      'Sentadilla búlgara con mancuerna (triple rebote)', 1, '8-10/lado', 90),
        _ex('qg_s1d1_abd_cadera',     'Abducción de cadera en máquina', 3, '12-15', 60),
        _ex('qg_s1d1_gemelo',         'Gemelo en prensa', 3, '10-12', 60),
        _ex('qg_s1d1_est_frog',       'Estiramiento - Cadera (Frog)', 1, '16"', 0),
        _ex('qg_s1d1_est_split',      'Estiramiento - Split unilateral', 1, '16"/lado', 0),
      ],
      // S1 D2 — Tren superior fuerza
      2: [
        _ex('qg_s1d2_mob_rot_col',    'Movilidad - Rotación de columna en T', 1, '12', 0),
        _ex('qg_s1d2_mob_flex_esc',   'Movilidad - Flexiones escapulares', 1, '12', 0),
        _ex('qg_s1d2_mob_shoulder',   'Movilidad - Shoulder CAR', 1, '10/lado', 0),
        _ex('qg_s1d2_flex_rod_elev',  'Flexiones de rodillas con elevación', 3, '8-10', 60),
        _ex('qg_s1d2_jalon',          'Jalón al pecho', 3, '8-10', 90),
        _ex('qg_s1d2_press_uni',      'Press de hombro unilateral', 2, '8-10/lado', 60),
        _ex('qg_s1d2_remo_seal',      'Remo seal con mancuernas', 3, '8-10', 90),
        _ex('qg_s1d2_facepull',       'Facepull en polea', 2, '12-15', 60),
        _ex('qg_s1d2_curl_bicep',     'Curl de bíceps de pie', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s1d2_fondos_tri',     'Fondos de tríceps con rodillas flexionadas', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s1d2_est_cow',        'Estiramiento | Cow Face Pose', 1, '16"', 0),
        _ex('qg_s1d2_est_espalda',    'Estiramiento - Espalda en cajón', 1, '16"', 0),
      ],
      // S1 D3 — HIIT + Core (Tabata: 3 rondas, 40" trabajo / 20" descanso)
      3: [
        _ex('qg_s1d3_mob_cat',        'Movilidad - Cat camel', 1, '8', 0),
        _ex('qg_s1d3_mob_scorpion',   'Movilidad - Scorpions', 1, '8/lado', 0),
        // Tabata A — 6 ejercicios × 3 rondas
        _ex('qg_s1d3_zombie_r1',      'Core | Zombie sit ups', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s1d3_lunge_r1',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s1d3_russian_r1',     'Core | Russian twist con mancuerna', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s1d3_burpee_r1',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s1d3_revcrunch_r1',   'Core | Reverse crunch', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s1d3_pivot_r1',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s1d3_zombie_r2',      'Core | Zombie sit ups', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s1d3_lunge_r2',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s1d3_russian_r2',     'Core | Russian twist con mancuerna', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s1d3_burpee_r2',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s1d3_revcrunch_r2',   'Core | Reverse crunch', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s1d3_pivot_r2',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s1d3_zombie_r3',      'Core | Zombie sit ups', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s1d3_lunge_r3',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s1d3_russian_r3',     'Core | Russian twist con mancuerna', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s1d3_burpee_r3',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s1d3_revcrunch_r3',   'Core | Reverse crunch', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s1d3_pivot_r3',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 3'),
        // Tabata B
        _ex('qg_s1d3_plank_r1',       'HIIT | Plank thrust', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s1d3_sentrod_r1',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s1d3_mc_r1',          'Core | Mountain climbers + toques de rodilla', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s1d3_walkout_r1',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s1d3_fastfeet_r1',    'HIIT | Fast feet', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s1d3_pris_r1',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s1d3_plank_r2',       'HIIT | Plank thrust', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s1d3_sentrod_r2',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s1d3_mc_r2',          'Core | Mountain climbers + toques de rodilla', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s1d3_walkout_r2',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s1d3_fastfeet_r2',    'HIIT | Fast feet', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s1d3_pris_r2',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s1d3_plank_r3',       'HIIT | Plank thrust', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s1d3_sentrod_r3',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s1d3_mc_r3',          'Core | Mountain climbers + toques de rodilla', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s1d3_walkout_r3',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s1d3_fastfeet_r3',    'HIIT | Fast feet', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s1d3_pris_r3',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 3'),
      ],
      // S1 D4 — Movilidad
      4: [
        _ex('qg_s1d4_mob_cat',        'Movilidad - Cat camel', 1, '12', 0),
        _ex('qg_s1d4_mob_flex_tob',   'Movilidad - Flexión de tobillo de rodillas', 1, '10/lado', 0),
        _ex('qg_s1d4_mob_esc',        'Movilidad | Movimientos escapulares', 1, '12', 0),
        _ex('qg_s1d4_mob_patada',     'Movilidad - Patada de glúteo de lado a lado', 1, '12/lado', 0),
        _ex('qg_s1d4_mob_standing',   'Movilidad | Standing reach down forward-backward', 1, '12', 0),
        _ex('qg_s1d4_mob_glute_br',   'Movilidad - Glute bridge', 1, '12', 0),
        _ex('qg_s1d4_mob_snow',       'Movilidad - Prone snow angels', 1, '12', 0),
        _ex('qg_s1d4_mob_rot_col',    'Movilidad - Rotación de columna en cuadrupedia', 1, '12', 0),
        _ex('qg_s1d4_mob_supermans',  'Movilidad - Supermans', 1, '12', 0),
        _ex('qg_s1d4_mob_rot_homb',   'Movilidad - Rotación de hombro desde rodillas', 1, '12/lado', 0),
      ],
      // S1 D5 — Fullbody fuerza
      5: [
        _ex('qg_s1d5_mob_wgs',        'Movilidad | WGS (World\'s Greatest Stretch)', 1, '10/lado', 0),
        _ex('qg_s1d5_mob_bisagra',    'Movilidad - Bisagra de cadera', 1, '12', 0),
        _ex('qg_s1d5_mob_esc',        'Movilidad | Movimientos escapulares', 1, '12', 0),
        _ex('qg_s1d5_pmrum_aprox',    'Peso muerto rumano (aprox.)', 1, '6-8', 60),
        _ex('qg_s1d5_pmrum',          'Peso muerto rumano', 2, '8-10', 90),
        _ex('qg_s1d5_press_mc_1',     'Press banca con mancuernas', 1, '6-8', 90),
        _ex('qg_s1d5_press_mc_2',     'Press banca con mancuernas', 1, '8-10', 90),
        _ex('qg_s1d5_sumo',           'Sentadilla sumo con mancuerna', 3, '8-10', 60),
        _ex('qg_s1d5_remo_barra',     'Remo con barra a 90°', 3, '8-10', 90),
        _ex('qg_s1d5_patada_gluteo',  'Patada de glúteo', 3, '12-15/lado', 60),
        _ex('qg_s1d5_apert_pecho',    'Aperturas de pecho en máquina', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s1d5_elev_lat',       'Elevaciones laterales con mancuernas', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s1d5_est_espalda',    'Estiramiento - Espalda', 1, '16"', 0),
        _ex('qg_s1d5_est_rod_pecho',  'Estiramiento - Rodilla al pecho', 1, '16"/lado', 0),
      ],
      // S1 D6 — HIIT (10 ejercicios × 2 series, 30"/30")
      6: [
        _ex('qg_s1d6_burpee',         'HIIT | Burpee sin salto', 2, '30"', 30),
        _ex('qg_s1d6_fastfeet',       'HIIT | Fast feet', 2, '30"', 30),
        _ex('qg_s1d6_pulse',          'HIIT | Pulse jump squats', 2, '30"', 30),
        _ex('qg_s1d6_skater',         'HIIT | Skater jumps', 2, '30"', 30),
        _ex('qg_s1d6_sentpie',        'HIIT | Sentadilla + toques de pie', 2, '30"', 30),
        _ex('qg_s1d6_bicycle',        'Core | Bicycle twist', 2, '30"', 30),
        _ex('qg_s1d6_explosive',      'HIIT | Explosive jumping jacks', 2, '30"', 30),
        _ex('qg_s1d6_vups',           'Core | V ups con toques de pie', 2, '30"', 30),
        _ex('qg_s1d6_sprint',         'HIIT | Sprint estático', 2, '30"', 30),
        _ex('qg_s1d6_lunge',          'HIIT | Lunge jump', 2, '30"', 30),
      ],
    },
    // ═══════ SEMANA 2 (idéntica a S1) ═══════
    {
      1: [
        _ex('qg_s2d1_mob_cat',        'Movilidad - Cat camel', 1, '10', 0),
        _ex('qg_s2d1_mob_flex_tob',   'Movilidad - Flexión de tobillo en sedestación', 1, '8/lado', 0),
        _ex('qg_s2d1_mob_rot90',      'Movilidad - Rotación interna de cadera 90-90', 1, '12', 0),
        _ex('qg_s1d1_sent_aprox',     'Sentadilla libre | barra alta (aprox.)', 1, '6-8', 60),
        _ex('qg_s1d1_sent',           'Sentadilla libre | barra alta', 2, '8-10', 90),
        _ex('qg_s1d1_ht_aprox',       'Hip Thrust (aprox.)', 1, '6-8', 60),
        _ex('qg_s1d1_ht',             'Hip Thrust', 2, '8-10', 90),
        _ex('qg_s1d1_bulgara_1',      'Sentadilla búlgara con mancuerna', 1, '8-10/lado', 90),
        _ex('qg_s1d1_bulgara_2',      'Sentadilla búlgara con mancuerna (triple rebote)', 1, '8-10/lado', 90),
        _ex('qg_s1d1_abd_cadera',     'Abducción de cadera en máquina', 3, '12-15', 60),
        _ex('qg_s1d1_gemelo',         'Gemelo en prensa', 3, '10-12', 60),
        _ex('qg_s2d1_est_frog',       'Estiramiento - Cadera (Frog)', 1, '16"', 0),
        _ex('qg_s2d1_est_split',      'Estiramiento - Split unilateral', 1, '16"/lado', 0),
      ],
      2: [
        _ex('qg_s2d2_mob_rot_col',    'Movilidad - Rotación de columna en T', 1, '12', 0),
        _ex('qg_s2d2_mob_flex_esc',   'Movilidad - Flexiones escapulares', 1, '12', 0),
        _ex('qg_s2d2_mob_shoulder',   'Movilidad - Shoulder CAR', 1, '10/lado', 0),
        _ex('qg_s1d2_flex_rod_elev',  'Flexiones de rodillas con elevación', 3, '8-10', 60),
        _ex('qg_s1d2_jalon',          'Jalón al pecho', 3, '8-10', 90),
        _ex('qg_s1d2_press_uni',      'Press de hombro unilateral', 2, '8-10/lado', 60),
        _ex('qg_s1d2_remo_seal',      'Remo seal con mancuernas', 3, '8-10', 90),
        _ex('qg_s1d2_facepull',       'Facepull en polea', 2, '12-15', 60),
        _ex('qg_s1d2_curl_bicep',     'Curl de bíceps de pie', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s1d2_fondos_tri',     'Fondos de tríceps con rodillas flexionadas', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s2d2_est_cow',        'Estiramiento | Cow Face Pose', 1, '16"', 0),
        _ex('qg_s2d2_est_espalda',    'Estiramiento - Espalda en cajón', 1, '16"', 0),
      ],
      3: [
        _ex('qg_s2d3_mob_cat',        'Movilidad - Cat camel', 1, '8', 0),
        _ex('qg_s2d3_mob_scorpion',   'Movilidad - Scorpions', 1, '8/lado', 0),
        _ex('qg_s2d3_zombie_r1',      'Core | Zombie sit ups', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s2d3_lunge_r1',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s2d3_russian_r1',     'Core | Russian twist con mancuerna', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s2d3_burpee_r1',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s2d3_revcrunch_r1',   'Core | Reverse crunch', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s2d3_pivot_r1',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s2d3_zombie_r2',      'Core | Zombie sit ups', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s2d3_lunge_r2',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s2d3_russian_r2',     'Core | Russian twist con mancuerna', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s2d3_burpee_r2',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s2d3_revcrunch_r2',   'Core | Reverse crunch', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s2d3_pivot_r2',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s2d3_zombie_r3',      'Core | Zombie sit ups', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s2d3_lunge_r3',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s2d3_russian_r3',     'Core | Russian twist con mancuerna', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s2d3_burpee_r3',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s2d3_revcrunch_r3',   'Core | Reverse crunch', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s2d3_pivot_r3',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s2d3_plank_r1',       'HIIT | Plank thrust', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s2d3_sentrod_r1',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s2d3_mc_r1',          'Core | Mountain climbers + toques de rodilla', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s2d3_walkout_r1',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s2d3_fastfeet_r1',    'HIIT | Fast feet', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s2d3_pris_r1',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s2d3_plank_r2',       'HIIT | Plank thrust', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s2d3_sentrod_r2',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s2d3_mc_r2',          'Core | Mountain climbers + toques de rodilla', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s2d3_walkout_r2',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s2d3_fastfeet_r2',    'HIIT | Fast feet', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s2d3_pris_r2',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s2d3_plank_r3',       'HIIT | Plank thrust', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s2d3_sentrod_r3',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s2d3_mc_r3',          'Core | Mountain climbers + toques de rodilla', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s2d3_walkout_r3',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s2d3_fastfeet_r3',    'HIIT | Fast feet', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s2d3_pris_r3',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 3'),
      ],
      4: [
        _ex('qg_s2d4_mob_cat',        'Movilidad - Cat camel', 1, '12', 0),
        _ex('qg_s2d4_mob_flex_tob',   'Movilidad - Flexión de tobillo de rodillas', 1, '10/lado', 0),
        _ex('qg_s2d4_mob_esc',        'Movilidad | Movimientos escapulares', 1, '12', 0),
        _ex('qg_s2d4_mob_patada',     'Movilidad - Patada de glúteo de lado a lado', 1, '12/lado', 0),
        _ex('qg_s2d4_mob_standing',   'Movilidad | Standing reach down forward-backward', 1, '12', 0),
        _ex('qg_s2d4_mob_glute_br',   'Movilidad - Glute bridge', 1, '12', 0),
        _ex('qg_s2d4_mob_snow',       'Movilidad - Prone snow angels', 1, '12', 0),
        _ex('qg_s2d4_mob_rot_col',    'Movilidad - Rotación de columna en cuadrupedia', 1, '12', 0),
        _ex('qg_s2d4_mob_supermans',  'Movilidad - Supermans', 1, '12', 0),
        _ex('qg_s2d4_mob_rot_homb',   'Movilidad - Rotación de hombro desde rodillas', 1, '12/lado', 0),
      ],
      5: [
        _ex('qg_s2d5_mob_wgs',        'Movilidad | WGS (World\'s Greatest Stretch)', 1, '10/lado', 0),
        _ex('qg_s2d5_mob_bisagra',    'Movilidad - Bisagra de cadera', 1, '12', 0),
        _ex('qg_s2d5_mob_esc',        'Movilidad | Movimientos escapulares', 1, '12', 0),
        _ex('qg_s1d5_pmrum_aprox',    'Peso muerto rumano (aprox.)', 1, '6-8', 60),
        _ex('qg_s1d5_pmrum',          'Peso muerto rumano', 2, '8-10', 90),
        _ex('qg_s1d5_press_mc_1',     'Press banca con mancuernas', 1, '6-8', 90),
        _ex('qg_s1d5_press_mc_2',     'Press banca con mancuernas', 1, '8-10', 90),
        _ex('qg_s1d5_sumo',           'Sentadilla sumo con mancuerna', 3, '8-10', 60),
        _ex('qg_s1d5_remo_barra',     'Remo con barra a 90°', 3, '8-10', 90),
        _ex('qg_s1d5_patada_gluteo',  'Patada de glúteo', 3, '12-15/lado', 60),
        _ex('qg_s1d5_apert_pecho',    'Aperturas de pecho en máquina', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s1d5_elev_lat',       'Elevaciones laterales con mancuernas', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s2d5_est_espalda',    'Estiramiento - Espalda', 1, '16"', 0),
        _ex('qg_s2d5_est_rod_pecho',  'Estiramiento - Rodilla al pecho', 1, '16"/lado', 0),
      ],
      6: [
        _ex('qg_s2d6_burpee',         'HIIT | Burpee sin salto', 2, '30"', 30),
        _ex('qg_s2d6_fastfeet',       'HIIT | Fast feet', 2, '30"', 30),
        _ex('qg_s2d6_pulse',          'HIIT | Pulse jump squats', 2, '30"', 30),
        _ex('qg_s2d6_skater',         'HIIT | Skater jumps', 2, '30"', 30),
        _ex('qg_s2d6_sentpie',        'HIIT | Sentadilla + toques de pie', 2, '30"', 30),
        _ex('qg_s2d6_bicycle',        'Core | Bicycle twist', 2, '30"', 30),
        _ex('qg_s2d6_explosive',      'HIIT | Explosive jumping jacks', 2, '30"', 30),
        _ex('qg_s2d6_vups',           'Core | V ups con toques de pie', 2, '30"', 30),
        _ex('qg_s2d6_sprint',         'HIIT | Sprint estático', 2, '30"', 30),
        _ex('qg_s2d6_lunge',          'HIIT | Lunge jump', 2, '30"', 30),
      ],
    },
    // ═══════ SEMANA 3 (= S1, pero D2 cambia a "Flexiones de rodillas" sin elevación) ═══════
    {
      1: [
        _ex('qg_s3d1_mob_cat',        'Movilidad - Cat camel', 1, '10', 0),
        _ex('qg_s3d1_mob_flex_tob',   'Movilidad - Flexión de tobillo en sedestación', 1, '8/lado', 0),
        _ex('qg_s3d1_mob_rot90',      'Movilidad - Rotación interna de cadera 90-90', 1, '12', 0),
        _ex('qg_s1d1_sent_aprox',     'Sentadilla libre | barra alta (aprox.)', 1, '6-8', 60),
        _ex('qg_s1d1_sent',           'Sentadilla libre | barra alta', 2, '8-10', 90),
        _ex('qg_s1d1_ht_aprox',       'Hip Thrust (aprox.)', 1, '6-8', 60),
        _ex('qg_s1d1_ht',             'Hip Thrust', 2, '8-10', 90),
        _ex('qg_s1d1_bulgara_1',      'Sentadilla búlgara con mancuerna', 1, '8-10/lado', 90),
        _ex('qg_s1d1_bulgara_2',      'Sentadilla búlgara con mancuerna (triple rebote)', 1, '8-10/lado', 90),
        _ex('qg_s1d1_abd_cadera',     'Abducción de cadera en máquina', 3, '12-15', 60),
        _ex('qg_s1d1_gemelo',         'Gemelo en prensa', 3, '10-12', 60),
        _ex('qg_s3d1_est_frog',       'Estiramiento - Cadera (Frog)', 1, '16"', 0),
        _ex('qg_s3d1_est_split',      'Estiramiento - Split unilateral', 1, '16"/lado', 0),
      ],
      2: [
        _ex('qg_s3d2_mob_rot_col',    'Movilidad - Rotación de columna en T', 1, '12', 0),
        _ex('qg_s3d2_mob_flex_esc',   'Movilidad - Flexiones escapulares', 1, '12', 0),
        _ex('qg_s3d2_mob_shoulder',   'Movilidad - Shoulder CAR', 1, '10/lado', 0),
        _ex('qg_s3d2_flex_rod',       'Flexiones de rodillas', 3, '8-10', 60),
        _ex('qg_s1d2_jalon',          'Jalón al pecho', 3, '8-10', 90),
        _ex('qg_s1d2_press_uni',      'Press de hombro unilateral', 2, '8-10/lado', 60),
        _ex('qg_s1d2_remo_seal',      'Remo seal con mancuernas', 3, '8-10', 90),
        _ex('qg_s1d2_facepull',       'Facepull en polea', 2, '12-15', 60),
        _ex('qg_s1d2_curl_bicep',     'Curl de bíceps de pie', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s1d2_fondos_tri',     'Fondos de tríceps con rodillas flexionadas', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s3d2_est_cow',        'Estiramiento | Cow Face Pose', 1, '16"', 0),
        _ex('qg_s3d2_est_espalda',    'Estiramiento - Espalda en cajón', 1, '16"', 0),
      ],
      3: [
        _ex('qg_s3d3_mob_cat',        'Movilidad - Cat camel', 1, '8', 0),
        _ex('qg_s3d3_mob_scorpion',   'Movilidad - Scorpions', 1, '8/lado', 0),
        _ex('qg_s3d3_zombie_r1',      'Core | Zombie sit ups', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s3d3_lunge_r1',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s3d3_russian_r1',     'Core | Russian twist con mancuerna', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s3d3_burpee_r1',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s3d3_revcrunch_r1',   'Core | Reverse crunch', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s3d3_pivot_r1',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s3d3_zombie_r2',      'Core | Zombie sit ups', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s3d3_lunge_r2',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s3d3_russian_r2',     'Core | Russian twist con mancuerna', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s3d3_burpee_r2',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s3d3_revcrunch_r2',   'Core | Reverse crunch', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s3d3_pivot_r2',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s3d3_zombie_r3',      'Core | Zombie sit ups', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s3d3_lunge_r3',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s3d3_russian_r3',     'Core | Russian twist con mancuerna', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s3d3_burpee_r3',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s3d3_revcrunch_r3',   'Core | Reverse crunch', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s3d3_pivot_r3',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s3d3_plank_r1',       'HIIT | Plank thrust', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s3d3_sentrod_r1',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s3d3_mc_r1',          'Core | Mountain climbers + toques de rodilla', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s3d3_walkout_r1',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s3d3_fastfeet_r1',    'HIIT | Fast feet', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s3d3_pris_r1',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s3d3_plank_r2',       'HIIT | Plank thrust', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s3d3_sentrod_r2',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s3d3_mc_r2',          'Core | Mountain climbers + toques de rodilla', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s3d3_walkout_r2',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s3d3_fastfeet_r2',    'HIIT | Fast feet', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s3d3_pris_r2',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s3d3_plank_r3',       'HIIT | Plank thrust', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s3d3_sentrod_r3',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s3d3_mc_r3',          'Core | Mountain climbers + toques de rodilla', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s3d3_walkout_r3',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s3d3_fastfeet_r3',    'HIIT | Fast feet', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s3d3_pris_r3',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 3'),
      ],
      4: [
        _ex('qg_s3d4_mob_cat',        'Movilidad - Cat camel', 1, '12', 0),
        _ex('qg_s3d4_mob_flex_tob',   'Movilidad - Flexión de tobillo de rodillas', 1, '10/lado', 0),
        _ex('qg_s3d4_mob_esc',        'Movilidad | Movimientos escapulares', 1, '12', 0),
        _ex('qg_s3d4_mob_patada',     'Movilidad - Patada de glúteo de lado a lado', 1, '12/lado', 0),
        _ex('qg_s3d4_mob_standing',   'Movilidad | Standing reach down forward-backward', 1, '12', 0),
        _ex('qg_s3d4_mob_glute_br',   'Movilidad - Glute bridge', 1, '12', 0),
        _ex('qg_s3d4_mob_snow',       'Movilidad - Prone snow angels', 1, '12', 0),
        _ex('qg_s3d4_mob_rot_col',    'Movilidad - Rotación de columna en cuadrupedia', 1, '12', 0),
        _ex('qg_s3d4_mob_supermans',  'Movilidad - Supermans', 1, '12', 0),
        _ex('qg_s3d4_mob_rot_homb',   'Movilidad - Rotación de hombro desde rodillas', 1, '12/lado', 0),
      ],
      5: [
        _ex('qg_s3d5_mob_wgs',        'Movilidad | WGS (World\'s Greatest Stretch)', 1, '10/lado', 0),
        _ex('qg_s3d5_mob_bisagra',    'Movilidad - Bisagra de cadera', 1, '12', 0),
        _ex('qg_s3d5_mob_esc',        'Movilidad | Movimientos escapulares', 1, '12', 0),
        _ex('qg_s1d5_pmrum_aprox',    'Peso muerto rumano (aprox.)', 1, '6-8', 60),
        _ex('qg_s1d5_pmrum',          'Peso muerto rumano', 2, '8-10', 90),
        _ex('qg_s1d5_press_mc_1',     'Press banca con mancuernas', 1, '6-8', 90),
        _ex('qg_s1d5_press_mc_2',     'Press banca con mancuernas', 1, '8-10', 90),
        _ex('qg_s1d5_sumo',           'Sentadilla sumo con mancuerna', 3, '8-10', 60),
        _ex('qg_s1d5_remo_barra',     'Remo con barra a 90°', 3, '8-10', 90),
        _ex('qg_s1d5_patada_gluteo',  'Patada de glúteo', 3, '12-15/lado', 60),
        _ex('qg_s1d5_apert_pecho',    'Aperturas de pecho en máquina', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s1d5_elev_lat',       'Elevaciones laterales con mancuernas', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s3d5_est_espalda',    'Estiramiento - Espalda', 1, '16"', 0),
        _ex('qg_s3d5_est_rod_pecho',  'Estiramiento - Rodilla al pecho', 1, '16"/lado', 0),
      ],
      6: [
        _ex('qg_s3d6_burpee',         'HIIT | Burpee sin salto', 2, '30"', 30),
        _ex('qg_s3d6_fastfeet',       'HIIT | Fast feet', 2, '30"', 30),
        _ex('qg_s3d6_pulse',          'HIIT | Pulse jump squats', 2, '30"', 30),
        _ex('qg_s3d6_skater',         'HIIT | Skater jumps', 2, '30"', 30),
        _ex('qg_s3d6_sentpie',        'HIIT | Sentadilla + toques de pie', 2, '30"', 30),
        _ex('qg_s3d6_bicycle',        'Core | Bicycle twist', 2, '30"', 30),
        _ex('qg_s3d6_explosive',      'HIIT | Explosive jumping jacks', 2, '30"', 30),
        _ex('qg_s3d6_vups',           'Core | V ups con toques de pie', 2, '30"', 30),
        _ex('qg_s3d6_sprint',         'HIIT | Sprint estático', 2, '30"', 30),
        _ex('qg_s3d6_lunge',          'HIIT | Lunge jump', 2, '30"', 30),
      ],
    },
    // ═══════ SEMANA 4 (= S3) ═══════
    {
      1: [
        _ex('qg_s4d1_mob_cat',        'Movilidad - Cat camel', 1, '10', 0),
        _ex('qg_s4d1_mob_flex_tob',   'Movilidad - Flexión de tobillo en sedestación', 1, '8/lado', 0),
        _ex('qg_s4d1_mob_rot90',      'Movilidad - Rotación interna de cadera 90-90', 1, '12', 0),
        _ex('qg_s1d1_sent_aprox',     'Sentadilla libre | barra alta (aprox.)', 1, '6-8', 60),
        _ex('qg_s1d1_sent',           'Sentadilla libre | barra alta', 2, '8-10', 90),
        _ex('qg_s1d1_ht_aprox',       'Hip Thrust (aprox.)', 1, '6-8', 60),
        _ex('qg_s1d1_ht',             'Hip Thrust', 2, '8-10', 90),
        _ex('qg_s1d1_bulgara_1',      'Sentadilla búlgara con mancuerna', 1, '8-10/lado', 90),
        _ex('qg_s1d1_bulgara_2',      'Sentadilla búlgara con mancuerna (triple rebote)', 1, '8-10/lado', 90),
        _ex('qg_s1d1_abd_cadera',     'Abducción de cadera en máquina', 3, '12-15', 60),
        _ex('qg_s1d1_gemelo',         'Gemelo en prensa', 3, '10-12', 60),
        _ex('qg_s4d1_est_frog',       'Estiramiento - Cadera (Frog)', 1, '16"', 0),
        _ex('qg_s4d1_est_split',      'Estiramiento - Split unilateral', 1, '16"/lado', 0),
      ],
      2: [
        _ex('qg_s4d2_mob_rot_col',    'Movilidad - Rotación de columna en T', 1, '12', 0),
        _ex('qg_s4d2_mob_flex_esc',   'Movilidad - Flexiones escapulares', 1, '12', 0),
        _ex('qg_s4d2_mob_shoulder',   'Movilidad - Shoulder CAR', 1, '10/lado', 0),
        _ex('qg_s3d2_flex_rod',       'Flexiones de rodillas', 3, '8-10', 60),
        _ex('qg_s1d2_jalon',          'Jalón al pecho', 3, '8-10', 90),
        _ex('qg_s1d2_press_uni',      'Press de hombro unilateral', 2, '8-10/lado', 60),
        _ex('qg_s1d2_remo_seal',      'Remo seal con mancuernas', 3, '8-10', 90),
        _ex('qg_s1d2_facepull',       'Facepull en polea', 2, '12-15', 60),
        _ex('qg_s1d2_curl_bicep',     'Curl de bíceps de pie', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s1d2_fondos_tri',     'Fondos de tríceps con rodillas flexionadas', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s4d2_est_cow',        'Estiramiento | Cow Face Pose', 1, '16"', 0),
        _ex('qg_s4d2_est_espalda',    'Estiramiento - Espalda en cajón', 1, '16"', 0),
      ],
      3: [
        _ex('qg_s4d3_mob_cat',        'Movilidad - Cat camel', 1, '8', 0),
        _ex('qg_s4d3_mob_scorpion',   'Movilidad - Scorpions', 1, '8/lado', 0),
        _ex('qg_s4d3_zombie_r1',      'Core | Zombie sit ups', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s4d3_lunge_r1',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s4d3_russian_r1',     'Core | Russian twist con mancuerna', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s4d3_burpee_r1',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s4d3_revcrunch_r1',   'Core | Reverse crunch', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s4d3_pivot_r1',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s4d3_zombie_r2',      'Core | Zombie sit ups', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s4d3_lunge_r2',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s4d3_russian_r2',     'Core | Russian twist con mancuerna', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s4d3_burpee_r2',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s4d3_revcrunch_r2',   'Core | Reverse crunch', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s4d3_pivot_r2',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s4d3_zombie_r3',      'Core | Zombie sit ups', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s4d3_lunge_r3',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s4d3_russian_r3',     'Core | Russian twist con mancuerna', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s4d3_burpee_r3',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s4d3_revcrunch_r3',   'Core | Reverse crunch', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s4d3_pivot_r3',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s4d3_plank_r1',       'HIIT | Plank thrust', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s4d3_sentrod_r1',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s4d3_mc_r1',          'Core | Mountain climbers + toques de rodilla', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s4d3_walkout_r1',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s4d3_fastfeet_r1',    'HIIT | Fast feet', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s4d3_pris_r1',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s4d3_plank_r2',       'HIIT | Plank thrust', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s4d3_sentrod_r2',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s4d3_mc_r2',          'Core | Mountain climbers + toques de rodilla', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s4d3_walkout_r2',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s4d3_fastfeet_r2',    'HIIT | Fast feet', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s4d3_pris_r2',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s4d3_plank_r3',       'HIIT | Plank thrust', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s4d3_sentrod_r3',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s4d3_mc_r3',          'Core | Mountain climbers + toques de rodilla', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s4d3_walkout_r3',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s4d3_fastfeet_r3',    'HIIT | Fast feet', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s4d3_pris_r3',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 3'),
      ],
      4: [
        _ex('qg_s4d4_mob_cat',        'Movilidad - Cat camel', 1, '12', 0),
        _ex('qg_s4d4_mob_flex_tob',   'Movilidad - Flexión de tobillo de rodillas', 1, '10/lado', 0),
        _ex('qg_s4d4_mob_esc',        'Movilidad | Movimientos escapulares', 1, '12', 0),
        _ex('qg_s4d4_mob_patada',     'Movilidad - Patada de glúteo de lado a lado', 1, '12/lado', 0),
        _ex('qg_s4d4_mob_standing',   'Movilidad | Standing reach down forward-backward', 1, '12', 0),
        _ex('qg_s4d4_mob_glute_br',   'Movilidad - Glute bridge', 1, '12', 0),
        _ex('qg_s4d4_mob_snow',       'Movilidad - Prone snow angels', 1, '12', 0),
        _ex('qg_s4d4_mob_rot_col',    'Movilidad - Rotación de columna en cuadrupedia', 1, '12', 0),
        _ex('qg_s4d4_mob_supermans',  'Movilidad - Supermans', 1, '12', 0),
        _ex('qg_s4d4_mob_rot_homb',   'Movilidad - Rotación de hombro desde rodillas', 1, '12/lado', 0),
      ],
      5: [
        _ex('qg_s4d5_mob_wgs',        'Movilidad | WGS (World\'s Greatest Stretch)', 1, '10/lado', 0),
        _ex('qg_s4d5_mob_bisagra',    'Movilidad - Bisagra de cadera', 1, '12', 0),
        _ex('qg_s4d5_mob_esc',        'Movilidad | Movimientos escapulares', 1, '12', 0),
        _ex('qg_s1d5_pmrum_aprox',    'Peso muerto rumano (aprox.)', 1, '6-8', 60),
        _ex('qg_s1d5_pmrum',          'Peso muerto rumano', 2, '8-10', 90),
        _ex('qg_s1d5_press_mc_1',     'Press banca con mancuernas', 1, '6-8', 90),
        _ex('qg_s1d5_press_mc_2',     'Press banca con mancuernas', 1, '8-10', 90),
        _ex('qg_s1d5_sumo',           'Sentadilla sumo con mancuerna', 3, '8-10', 60),
        _ex('qg_s1d5_remo_barra',     'Remo con barra a 90°', 3, '8-10', 90),
        _ex('qg_s1d5_patada_gluteo',  'Patada de glúteo', 3, '12-15/lado', 60),
        _ex('qg_s1d5_apert_pecho',    'Aperturas de pecho en máquina', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s1d5_elev_lat',       'Elevaciones laterales con mancuernas', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s4d5_est_espalda',    'Estiramiento - Espalda', 1, '16"', 0),
        _ex('qg_s4d5_est_rod_pecho',  'Estiramiento - Rodilla al pecho', 1, '16"/lado', 0),
      ],
      6: [
        _ex('qg_s4d6_burpee',         'HIIT | Burpee sin salto', 2, '30"', 30),
        _ex('qg_s4d6_fastfeet',       'HIIT | Fast feet', 2, '30"', 30),
        _ex('qg_s4d6_pulse',          'HIIT | Pulse jump squats', 2, '30"', 30),
        _ex('qg_s4d6_skater',         'HIIT | Skater jumps', 2, '30"', 30),
        _ex('qg_s4d6_sentpie',        'HIIT | Sentadilla + toques de pie', 2, '30"', 30),
        _ex('qg_s4d6_bicycle',        'Core | Bicycle twist', 2, '30"', 30),
        _ex('qg_s4d6_explosive',      'HIIT | Explosive jumping jacks', 2, '30"', 30),
        _ex('qg_s4d6_vups',           'Core | V ups con toques de pie', 2, '30"', 30),
        _ex('qg_s4d6_sprint',         'HIIT | Sprint estático', 2, '30"', 30),
        _ex('qg_s4d6_lunge',          'HIIT | Lunge jump', 2, '30"', 30),
      ],
    },
    // ═══════ SEMANA 5 (Sentadilla 3 series, Hip Thrust al fallo, manguitos rotadores, nuevo Tabata) ═══════
    {
      1: [
        _ex('qg_s5d1_mob_cat',        'Movilidad - Cat camel', 1, '10', 0),
        _ex('qg_s5d1_mob_flex_tob',   'Movilidad - Flexión de tobillo en sedestación', 1, '8/lado', 0),
        _ex('qg_s5d1_mob_rot90',      'Movilidad - Rotación interna de cadera 90-90', 1, '12', 0),
        _ex('qg_s5d1_sent_aprox',     'Sentadilla libre | barra alta (aprox.)', 1, '6-8', 60),
        _ex('qg_s5d1_sent',           'Sentadilla libre | barra alta', 3, '8-10', 90),
        _ex('qg_s5d1_ht_aprox',       'Hip Thrust (aprox.)', 1, '6-8', 60),
        _ex('qg_s5d1_ht',             'Hip Thrust', 2, '8-10', 90),
        _ex('qg_s5d1_ht_fallo',       'Hip Thrust (set extra)', 1, 'Al fallo', 90),
        _ex('qg_s5d1_bulgara_1',      'Sentadilla búlgara con mancuerna', 1, '8-10/lado', 90),
        _ex('qg_s5d1_bulgara_2',      'Sentadilla búlgara con mancuerna (triple rebote)', 1, '8-10/lado', 90),
        _ex('qg_s5d1_abd_cadera',     'Abducción de cadera en máquina', 3, '12-15', 60),
        _ex('qg_s5d1_gemelo',         'Gemelo en prensa', 3, '10-12', 60),
        _ex('qg_s5d1_est_frog',       'Estiramiento - Cadera (Frog)', 1, '16"', 0),
        _ex('qg_s5d1_est_split',      'Estiramiento - Split unilateral', 1, '16"/lado', 0),
      ],
      2: [
        _ex('qg_s5d2_mob_rot_col',    'Movilidad - Rotación de columna en T', 1, '12', 0),
        _ex('qg_s5d2_mob_manguitos',  'Movilidad - Manguitos rotadores con resistencia', 1, '12', 0),
        _ex('qg_s5d2_mob_shoulder',   'Movilidad - Shoulder CAR', 1, '10/lado', 0),
        _ex('qg_s1d2_flex_rod_elev',  'Flexiones de rodillas con elevación', 3, '8-10', 60),
        _ex('qg_s1d2_jalon',          'Jalón al pecho', 3, '8-10', 90),
        _ex('qg_s1d2_press_uni',      'Press de hombro unilateral', 2, '8-10/lado', 60),
        _ex('qg_s1d2_remo_seal',      'Remo seal con mancuernas', 3, '8-10', 90),
        _ex('qg_s1d2_facepull',       'Facepull en polea', 2, '12-15', 60),
        _ex('qg_s1d2_curl_bicep',     'Curl de bíceps de pie', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s1d2_fondos_tri',     'Fondos de tríceps con rodillas flexionadas', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s5d2_est_cow',        'Estiramiento | Cow Face Pose', 1, '16"', 0),
        _ex('qg_s5d2_est_espalda',    'Estiramiento - Espalda en cajón', 1, '16"', 0),
      ],
      3: [
        _ex('qg_s5d3_mob_bisagra',    'Movilidad - Bisagra de cadera', 1, '8', 0),
        _ex('qg_s5d3_mob_pelvis',     'Movilidad | Círculos con la pelvis en cuadrupedia', 1, '8', 0),
        _ex('qg_s5d3_bicycle_r1',     'Core | Bicycle twist', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s5d3_lunge_r1',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s5d3_dbplank_r1',     'Core | DB Plank pass through', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s5d3_burpee_r1',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s5d3_dolphin_r1',     'Core | Dolphin plank + knee taps', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s5d3_pivot_r1',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s5d3_bicycle_r2',     'Core | Bicycle twist', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s5d3_lunge_r2',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s5d3_dbplank_r2',     'Core | DB Plank pass through', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s5d3_burpee_r2',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s5d3_dolphin_r2',     'Core | Dolphin plank + knee taps', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s5d3_pivot_r2',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s5d3_bicycle_r3',     'Core | Bicycle twist', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s5d3_lunge_r3',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s5d3_dbplank_r3',     'Core | DB Plank pass through', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s5d3_burpee_r3',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s5d3_dolphin_r3',     'Core | Dolphin plank + knee taps', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s5d3_pivot_r3',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s5d3_elev_pier_r1',   'Core | Elevación de piernas', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s5d3_sentrod_r1',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s5d3_kicksits_fwd_r1','Core | Forward kick sits', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s5d3_walkout_r1',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s5d3_kicksits_r1',    'Core | Kick sits', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s5d3_pris_r1',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s5d3_elev_pier_r2',   'Core | Elevación de piernas', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s5d3_sentrod_r2',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s5d3_kicksits_fwd_r2','Core | Forward kick sits', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s5d3_walkout_r2',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s5d3_kicksits_r2',    'Core | Kick sits', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s5d3_pris_r2',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s5d3_elev_pier_r3',   'Core | Elevación de piernas', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s5d3_sentrod_r3',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s5d3_kicksits_fwd_r3','Core | Forward kick sits', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s5d3_walkout_r3',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s5d3_kicksits_r3',    'Core | Kick sits', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s5d3_pris_r3',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 3'),
      ],
      4: [
        _ex('qg_s5d4_mob_balanceo',   'Movilidad - Balanceo de piernas', 1, '12', 0),
        _ex('qg_s5d4_mob_snow_uni',   'Movilidad - Prone snow angels', 1, '10/lado', 0),
        _ex('qg_s5d4_mob_reverse',    'Movilidad | Reverse tabletop', 1, '12', 0),
        _ex('qg_s5d4_mob_cervic',     'Movilidad - Cervicales', 1, '12/lado', 0),
        _ex('qg_s5d4_mob_standing',   'Movilidad | Standing reach down forward-backward', 1, '12', 0),
        _ex('qg_s5d4_mob_flex_esc',   'Movilidad - Flexiones escapulares', 1, '12', 0),
        _ex('qg_s5d4_mob_snow',       'Movilidad - Prone snow angels', 1, '12', 0),
        _ex('qg_s5d4_mob_supermans',  'Movilidad - Supermans', 1, '12', 0),
        _ex('qg_s5d4_mob_frog',       'Movilidad - Frog Rolls', 1, '12', 0),
        _ex('qg_s5d4_mob_rot_homb',   'Movilidad - Rotación de hombro desde rodillas', 1, '12/lado', 0),
      ],
      5: [
        _ex('qg_s5d5_mob_wgs',        'Movilidad | WGS (World\'s Greatest Stretch)', 1, '10/lado', 0),
        _ex('qg_s5d5_mob_bisagra',    'Movilidad - Bisagra de cadera', 1, '12', 0),
        _ex('qg_s5d5_mob_esc',        'Movilidad | Movimientos escapulares', 1, '12', 0),
        _ex('qg_s1d5_pmrum_aprox',    'Peso muerto rumano (aprox.)', 1, '6-8', 60),
        _ex('qg_s1d5_pmrum',          'Peso muerto rumano', 2, '8-10', 90),
        _ex('qg_s1d5_press_mc_1',     'Press banca con mancuernas', 1, '6-8', 90),
        _ex('qg_s1d5_press_mc_2',     'Press banca con mancuernas', 1, '8-10', 90),
        _ex('qg_s1d5_sumo',           'Sentadilla sumo con mancuerna', 3, '8-10', 60),
        _ex('qg_s1d5_remo_barra',     'Remo con barra a 90°', 3, '8-10', 90),
        _ex('qg_s1d5_patada_gluteo',  'Patada de glúteo', 3, '12-15/lado', 60),
        _ex('qg_s1d5_apert_pecho',    'Aperturas de pecho en máquina', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s1d5_elev_lat',       'Elevaciones laterales con mancuernas', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s5d5_est_espalda',    'Estiramiento - Espalda', 1, '16"', 0),
        _ex('qg_s5d5_est_rod_pecho',  'Estiramiento - Rodilla al pecho', 1, '16"/lado', 0),
      ],
      6: [
        _ex('qg_s5d6_burpee',         'HIIT | Burpee sin salto', 2, '30"', 30),
        _ex('qg_s5d6_fastfeet',       'HIIT | Fast feet', 2, '30"', 30),
        _ex('qg_s5d6_pulse',          'HIIT | Pulse jump squats', 2, '30"', 30),
        _ex('qg_s5d6_skater',         'HIIT | Skater jumps', 2, '30"', 30),
        _ex('qg_s5d6_sentpie',        'HIIT | Sentadilla + toques de pie', 2, '30"', 30),
        _ex('qg_s5d6_bicycle',        'Core | Bicycle twist', 2, '30"', 30),
        _ex('qg_s5d6_explosive',      'HIIT | Explosive jumping jacks', 2, '30"', 30),
        _ex('qg_s5d6_vups',           'Core | V ups con toques de pie', 2, '30"', 30),
        _ex('qg_s5d6_sprint',         'HIIT | Sprint estático', 2, '30"', 30),
        _ex('qg_s5d6_lunge',          'HIIT | Lunge jump', 2, '30"', 30),
      ],
    },
    // ═══════ SEMANA 6 (= S5) ═══════
    {
      1: [
        _ex('qg_s6d1_mob_cat',        'Movilidad - Cat camel', 1, '10', 0),
        _ex('qg_s6d1_mob_flex_tob',   'Movilidad - Flexión de tobillo en sedestación', 1, '8/lado', 0),
        _ex('qg_s6d1_mob_rot90',      'Movilidad - Rotación interna de cadera 90-90', 1, '12', 0),
        _ex('qg_s5d1_sent_aprox',     'Sentadilla libre | barra alta (aprox.)', 1, '6-8', 60),
        _ex('qg_s5d1_sent',           'Sentadilla libre | barra alta', 3, '8-10', 90),
        _ex('qg_s5d1_ht_aprox',       'Hip Thrust (aprox.)', 1, '6-8', 60),
        _ex('qg_s5d1_ht',             'Hip Thrust', 2, '8-10', 90),
        _ex('qg_s5d1_ht_fallo',       'Hip Thrust (set extra)', 1, 'Al fallo', 90),
        _ex('qg_s5d1_bulgara_1',      'Sentadilla búlgara con mancuerna', 1, '8-10/lado', 90),
        _ex('qg_s5d1_bulgara_2',      'Sentadilla búlgara con mancuerna (triple rebote)', 1, '8-10/lado', 90),
        _ex('qg_s5d1_abd_cadera',     'Abducción de cadera en máquina', 3, '12-15', 60),
        _ex('qg_s5d1_gemelo',         'Gemelo en prensa', 3, '10-12', 60),
        _ex('qg_s6d1_est_frog',       'Estiramiento - Cadera (Frog)', 1, '16"', 0),
        _ex('qg_s6d1_est_split',      'Estiramiento - Split unilateral', 1, '16"/lado', 0),
      ],
      2: [
        _ex('qg_s6d2_mob_rot_col',    'Movilidad - Rotación de columna en T', 1, '12', 0),
        _ex('qg_s6d2_mob_manguitos',  'Movilidad - Manguitos rotadores con resistencia', 1, '12', 0),
        _ex('qg_s6d2_mob_shoulder',   'Movilidad - Shoulder CAR', 1, '10/lado', 0),
        _ex('qg_s1d2_flex_rod_elev',  'Flexiones de rodillas con elevación', 3, '8-10', 60),
        _ex('qg_s1d2_jalon',          'Jalón al pecho', 3, '8-10', 90),
        _ex('qg_s1d2_press_uni',      'Press de hombro unilateral', 2, '8-10/lado', 60),
        _ex('qg_s1d2_remo_seal',      'Remo seal con mancuernas', 3, '8-10', 90),
        _ex('qg_s1d2_facepull',       'Facepull en polea', 2, '12-15', 60),
        _ex('qg_s1d2_curl_bicep',     'Curl de bíceps de pie', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s1d2_fondos_tri',     'Fondos de tríceps con rodillas flexionadas', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s6d2_est_cow',        'Estiramiento | Cow Face Pose', 1, '16"', 0),
        _ex('qg_s6d2_est_espalda',    'Estiramiento - Espalda en cajón', 1, '16"', 0),
      ],
      3: [
        _ex('qg_s6d3_mob_bisagra',    'Movilidad - Bisagra de cadera', 1, '8', 0),
        _ex('qg_s6d3_mob_pelvis',     'Movilidad | Círculos con la pelvis en cuadrupedia', 1, '8', 0),
        _ex('qg_s6d3_bicycle_r1',     'Core | Bicycle twist', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s6d3_lunge_r1',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s6d3_dbplank_r1',     'Core | DB Plank pass through', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s6d3_burpee_r1',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s6d3_dolphin_r1',     'Core | Dolphin plank + knee taps', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s6d3_pivot_r1',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s6d3_bicycle_r2',     'Core | Bicycle twist', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s6d3_lunge_r2',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s6d3_dbplank_r2',     'Core | DB Plank pass through', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s6d3_burpee_r2',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s6d3_dolphin_r2',     'Core | Dolphin plank + knee taps', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s6d3_pivot_r2',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s6d3_bicycle_r3',     'Core | Bicycle twist', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s6d3_lunge_r3',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s6d3_dbplank_r3',     'Core | DB Plank pass through', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s6d3_burpee_r3',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s6d3_dolphin_r3',     'Core | Dolphin plank + knee taps', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s6d3_pivot_r3',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s6d3_elev_pier_r1',   'Core | Elevación de piernas', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s6d3_sentrod_r1',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s6d3_kicksits_fwd_r1','Core | Forward kick sits', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s6d3_walkout_r1',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s6d3_kicksits_r1',    'Core | Kick sits', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s6d3_pris_r1',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s6d3_elev_pier_r2',   'Core | Elevación de piernas', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s6d3_sentrod_r2',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s6d3_kicksits_fwd_r2','Core | Forward kick sits', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s6d3_walkout_r2',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s6d3_kicksits_r2',    'Core | Kick sits', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s6d3_pris_r2',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s6d3_elev_pier_r3',   'Core | Elevación de piernas', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s6d3_sentrod_r3',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s6d3_kicksits_fwd_r3','Core | Forward kick sits', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s6d3_walkout_r3',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s6d3_kicksits_r3',    'Core | Kick sits', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s6d3_pris_r3',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 3'),
      ],
      4: [
        _ex('qg_s6d4_mob_balanceo',   'Movilidad - Balanceo de piernas', 1, '12', 0),
        _ex('qg_s6d4_mob_snow_uni',   'Movilidad - Prone snow angels (unilateral)', 1, '10/lado', 0),
        _ex('qg_s6d4_mob_snow',       'Movilidad - Prone snow angels', 1, '10', 0),
        _ex('qg_s6d4_mob_reverse',    'Movilidad | Reverse tabletop', 1, '12', 0),
        _ex('qg_s6d4_mob_cervic',     'Movilidad - Cervicales', 1, '12/lado', 0),
        _ex('qg_s6d4_mob_standing',   'Movilidad | Standing reach down forward-backward', 1, '12', 0),
        _ex('qg_s6d4_mob_flex_esc',   'Movilidad - Flexiones escapulares', 1, '12', 0),
        _ex('qg_s6d4_mob_supermans',  'Movilidad - Supermans', 1, '12', 0),
        _ex('qg_s6d4_mob_frog',       'Movilidad - Frog Rolls', 1, '12', 0),
        _ex('qg_s6d4_mob_rot_homb',   'Movilidad - Rotación de hombro desde rodillas', 1, '12/lado', 0),
      ],
      5: [
        _ex('qg_s6d5_mob_wgs',        'Movilidad | WGS (World\'s Greatest Stretch)', 1, '10/lado', 0),
        _ex('qg_s6d5_mob_bisagra',    'Movilidad - Bisagra de cadera', 1, '12', 0),
        _ex('qg_s6d5_mob_esc',        'Movilidad | Movimientos escapulares', 1, '12', 0),
        _ex('qg_s1d5_pmrum_aprox',    'Peso muerto rumano (aprox.)', 1, '6-8', 60),
        _ex('qg_s1d5_pmrum',          'Peso muerto rumano', 2, '8-10', 90),
        _ex('qg_s1d5_press_mc_1',     'Press banca con mancuernas', 1, '6-8', 90),
        _ex('qg_s1d5_press_mc_2',     'Press banca con mancuernas', 1, '8-10', 90),
        _ex('qg_s1d5_sumo',           'Sentadilla sumo con mancuerna', 3, '8-10', 60),
        _ex('qg_s1d5_remo_barra',     'Remo con barra a 90°', 3, '8-10', 90),
        _ex('qg_s1d5_patada_gluteo',  'Patada de glúteo', 3, '12-15/lado', 60),
        _ex('qg_s1d5_apert_pecho',    'Aperturas de pecho en máquina', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s1d5_elev_lat',       'Elevaciones laterales con mancuernas', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s6d5_est_espalda',    'Estiramiento - Espalda', 1, '16"', 0),
        _ex('qg_s6d5_est_rod_pecho',  'Estiramiento - Rodilla al pecho', 1, '16"/lado', 0),
      ],
      6: [
        _ex('qg_s6d6_burpee',         'HIIT | Burpee sin salto', 2, '30"', 30),
        _ex('qg_s6d6_fastfeet',       'HIIT | Fast feet', 2, '30"', 30),
        _ex('qg_s6d6_pulse',          'HIIT | Pulse jump squats', 2, '30"', 30),
        _ex('qg_s6d6_skater',         'HIIT | Skater jumps', 2, '30"', 30),
        _ex('qg_s6d6_sentpie',        'HIIT | Sentadilla + toques de pie', 2, '30"', 30),
        _ex('qg_s6d6_bicycle',        'Core | Bicycle twist', 2, '30"', 30),
        _ex('qg_s6d6_explosive',      'HIIT | Explosive jumping jacks', 2, '30"', 30),
        _ex('qg_s6d6_vups',           'Core | V ups con toques de pie', 2, '30"', 30),
        _ex('qg_s6d6_sprint',         'HIIT | Sprint estático', 2, '30"', 30),
        _ex('qg_s6d6_lunge',          'HIIT | Lunge jump', 2, '30"', 30),
      ],
    },
    // ═══════ SEMANA 7 (D2 = "Flexiones" sin elevación, D6 nuevo HIIT) ═══════
    {
      1: [
        _ex('qg_s7d1_mob_cat',        'Movilidad - Cat camel', 1, '10', 0),
        _ex('qg_s7d1_mob_glute_br',   'Movilidad - Glute bridge', 1, '8/lado', 0),
        _ex('qg_s7d1_mob_rot_col',    'Movilidad - Rotación de columna en cuadrupedia', 1, '12', 0),
        _ex('qg_s5d1_sent_aprox',     'Sentadilla libre | barra alta (aprox.)', 1, '6-8', 60),
        _ex('qg_s5d1_sent',           'Sentadilla libre | barra alta', 3, '8-10', 90),
        _ex('qg_s5d1_ht_aprox',       'Hip Thrust (aprox.)', 1, '6-8', 60),
        _ex('qg_s5d1_ht',             'Hip Thrust', 2, '8-10', 90),
        _ex('qg_s5d1_ht_fallo',       'Hip Thrust (set extra)', 1, 'Al fallo', 90),
        _ex('qg_s5d1_bulgara_1',      'Sentadilla búlgara con mancuerna', 1, '8-10/lado', 90),
        _ex('qg_s5d1_bulgara_2',      'Sentadilla búlgara con mancuerna (triple rebote)', 1, '8-10/lado', 90),
        _ex('qg_s5d1_abd_cadera',     'Abducción de cadera en máquina', 3, '12-15', 60),
        _ex('qg_s5d1_gemelo',         'Gemelo en prensa', 3, '10-12', 60),
        _ex('qg_s7d1_est_frog',       'Estiramiento - Cadera (Frog)', 1, '16"', 0),
        _ex('qg_s7d1_est_split',      'Estiramiento - Split unilateral', 1, '16"/lado', 0),
      ],
      2: [
        _ex('qg_s7d2_mob_rot_col',    'Movilidad - Rotación de columna en T', 1, '12', 0),
        _ex('qg_s7d2_mob_manguitos',  'Movilidad - Manguitos rotadores con resistencia', 1, '12', 0),
        _ex('qg_s7d2_mob_shoulder',   'Movilidad - Shoulder CAR', 1, '10/lado', 0),
        _ex('qg_s7d2_flexiones',      'Flexiones', 3, '8-10', 60),
        _ex('qg_s1d2_jalon',          'Jalón al pecho', 3, '8-10', 90),
        _ex('qg_s1d2_press_uni',      'Press de hombro unilateral', 2, '8-10/lado', 60),
        _ex('qg_s1d2_remo_seal',      'Remo seal con mancuernas', 3, '8-10', 90),
        _ex('qg_s1d2_facepull',       'Facepull en polea', 2, '12-15', 60),
        _ex('qg_s1d2_curl_bicep',     'Curl de bíceps de pie', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s1d2_fondos_tri',     'Fondos de tríceps con rodillas flexionadas', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s7d2_est_cow',        'Estiramiento | Cow Face Pose', 1, '16"', 0),
        _ex('qg_s7d2_est_espalda',    'Estiramiento - Espalda en cajón', 1, '16"', 0),
      ],
      3: [
        _ex('qg_s7d3_mob_bisagra',    'Movilidad - Bisagra de cadera', 1, '8', 0),
        _ex('qg_s7d3_mob_pelvis',     'Movilidad | Círculos con la pelvis en cuadrupedia', 1, '8', 0),
        _ex('qg_s7d3_bicycle_r1',     'Core | Bicycle twist', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s7d3_lunge_r1',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s7d3_dbplank_r1',     'Core | DB Plank pass through', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s7d3_burpee_r1',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s7d3_dolphin_r1',     'Core | Dolphin plank + knee taps', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s7d3_pivot_r1',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s7d3_bicycle_r2',     'Core | Bicycle twist', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s7d3_lunge_r2',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s7d3_dbplank_r2',     'Core | DB Plank pass through', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s7d3_burpee_r2',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s7d3_dolphin_r2',     'Core | Dolphin plank + knee taps', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s7d3_pivot_r2',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s7d3_bicycle_r3',     'Core | Bicycle twist', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s7d3_lunge_r3',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s7d3_dbplank_r3',     'Core | DB Plank pass through', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s7d3_burpee_r3',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s7d3_dolphin_r3',     'Core | Dolphin plank + knee taps', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s7d3_pivot_r3',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s7d3_elev_pier_r1',   'Core | Elevación de piernas', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s7d3_sentrod_r1',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s7d3_kicksits_fwd_r1','Core | Forward kick sits', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s7d3_walkout_r1',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s7d3_kicksits_r1',    'Core | Kick sits', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s7d3_pris_r1',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s7d3_elev_pier_r2',   'Core | Elevación de piernas', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s7d3_sentrod_r2',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s7d3_kicksits_fwd_r2','Core | Forward kick sits', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s7d3_walkout_r2',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s7d3_kicksits_r2',    'Core | Kick sits', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s7d3_pris_r2',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s7d3_elev_pier_r3',   'Core | Elevación de piernas', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s7d3_sentrod_r3',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s7d3_kicksits_fwd_r3','Core | Forward kick sits', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s7d3_walkout_r3',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s7d3_kicksits_r3',    'Core | Kick sits', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s7d3_pris_r3',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 3'),
      ],
      4: [
        _ex('qg_s7d4_mob_flex_tob',   'Movilidad - Flexión de tobillo de rodillas', 1, '12', 0),
        _ex('qg_s7d4_mob_rot_col_uni','Movilidad - Rotación de columna en cuadrupedia (unilateral)', 1, '10/lado', 0),
        _ex('qg_s7d4_mob_wgs',        'Movilidad | WGS (World\'s Greatest Stretch)', 1, '12', 0),
        _ex('qg_s7d4_mob_cat',        'Movilidad - Cat camel', 1, '12', 0),
        _ex('qg_s7d4_mob_rot_col',    'Movilidad - Rotación de columna en cuadrupedia', 1, '12', 0),
        _ex('qg_s7d4_mob_supermans',  'Movilidad - Supermans', 1, '12', 0),
        _ex('qg_s7d4_mob_rot90',      'Movilidad - Rotación interna de cadera 90-90', 1, '12/lado', 0),
      ],
      5: [
        _ex('qg_s7d5_mob_bisagra',    'Movilidad - Bisagra de cadera', 1, '10/lado', 0),
        _ex('qg_s7d5_mob_cat',        'Movilidad - Cat camel', 1, '12', 0),
        _ex('qg_s7d5_mob_wgs',        'Movilidad | WGS (World\'s Greatest Stretch)', 1, '12', 0),
        _ex('qg_s1d5_pmrum_aprox',    'Peso muerto rumano (aprox.)', 1, '6-8', 60),
        _ex('qg_s1d5_pmrum',          'Peso muerto rumano', 2, '8-10', 90),
        _ex('qg_s1d5_press_mc_1',     'Press banca con mancuernas', 1, '6-8', 90),
        _ex('qg_s1d5_press_mc_2',     'Press banca con mancuernas', 1, '8-10', 90),
        _ex('qg_s1d5_sumo',           'Sentadilla sumo con mancuerna', 3, '8-10', 60),
        _ex('qg_s1d5_remo_barra',     'Remo con barra a 90°', 3, '8-10', 90),
        _ex('qg_s1d5_patada_gluteo',  'Patada de glúteo', 3, '12-15/lado', 60),
        _ex('qg_s1d5_apert_pecho',    'Aperturas de pecho en máquina', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s1d5_elev_lat',       'Elevaciones laterales con mancuernas', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s7d5_est_espalda',    'Estiramiento - Espalda', 1, '16"', 0),
        _ex('qg_s7d5_est_rod_pecho',  'Estiramiento - Rodilla al pecho', 1, '16"/lado', 0),
      ],
      6: [
        _ex('qg_s7d6_bench',          'HIIT | Bench over jumps', 2, '30"', 30),
        _ex('qg_s7d6_lat_drop',       'HIIT | Lateral lunge drop', 2, '30"', 30),
        _ex('qg_s7d6_curtsy',         'HIIT | Curtsy jumps', 2, '30"', 30),
        _ex('qg_s7d6_scissor',        'HIIT | Scissor jumps', 2, '30"', 30),
        _ex('qg_s7d6_sentatras',      'HIIT | Sentadilla + paso atrás', 2, '30"', 30),
        _ex('qg_s7d6_crunch',         'Core | Crunch', 2, '30"', 30),
        _ex('qg_s7d6_explosive',      'HIIT | Explosive jumping jacks', 2, '30"', 30),
        _ex('qg_s7d6_vups',           'Core | V ups con toques de pie', 2, '30"', 30),
        _ex('qg_s7d6_skater',         'HIIT | Skater jumps', 2, '30"', 30),
        _ex('qg_s7d6_lunge',          'HIIT | Lunge jump', 2, '30"', 30),
      ],
    },
    // ═══════ SEMANA 8 (sin DIA 2 — descanso) ═══════
    {
      1: [
        _ex('qg_s8d1_mob_balanceo',   'Movilidad - Balanceo de piernas', 1, '10', 0),
        _ex('qg_s8d1_mob_flex_tob',   'Movilidad - Flexión de tobillo de rodillas', 1, '8/lado', 0),
        _ex('qg_s8d1_mob_rot90',      'Movilidad - Rotación interna de cadera 90-90', 1, '12', 0),
        _ex('qg_s5d1_sent_aprox',     'Sentadilla libre | barra alta (aprox.)', 1, '6-8', 60),
        _ex('qg_s5d1_sent',           'Sentadilla libre | barra alta', 3, '8-10', 90),
        _ex('qg_s5d1_ht_aprox',       'Hip Thrust (aprox.)', 1, '6-8', 60),
        _ex('qg_s5d1_ht',             'Hip Thrust', 2, '8-10', 90),
        _ex('qg_s5d1_ht_fallo',       'Hip Thrust (set extra)', 1, 'Al fallo', 90),
        _ex('qg_s5d1_bulgara_1',      'Sentadilla búlgara con mancuerna', 1, '8-10/lado', 90),
        _ex('qg_s5d1_bulgara_2',      'Sentadilla búlgara con mancuerna (triple rebote)', 1, '8-10/lado', 90),
        _ex('qg_s5d1_abd_cadera',     'Abducción de cadera en máquina', 3, '12-15', 60),
        _ex('qg_s5d1_gemelo',         'Gemelo en prensa', 3, '10-12', 60),
        _ex('qg_s8d1_est_frog',       'Estiramiento - Cadera (Frog)', 1, '16"', 0),
        _ex('qg_s8d1_est_split',      'Estiramiento - Split unilateral', 1, '16"/lado', 0),
      ],
      // S8 D2 — descanso (no hay imágenes)
      3: [
        _ex('qg_s8d3_mob_bisagra',    'Movilidad - Bisagra de cadera', 1, '8', 0),
        _ex('qg_s8d3_mob_pelvis',     'Movilidad | Círculos con la pelvis en cuadrupedia', 1, '8', 0),
        _ex('qg_s8d3_bicycle_r1',     'Core | Bicycle twist', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s8d3_lunge_r1',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s8d3_dbplank_r1',     'Core | DB Plank pass through', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s8d3_burpee_r1',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s8d3_dolphin_r1',     'Core | Dolphin plank + knee taps', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s8d3_pivot_r1',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 1'),
        _ex('qg_s8d3_bicycle_r2',     'Core | Bicycle twist', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s8d3_lunge_r2',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s8d3_dbplank_r2',     'Core | DB Plank pass through', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s8d3_burpee_r2',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s8d3_dolphin_r2',     'Core | Dolphin plank + knee taps', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s8d3_pivot_r2',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 2'),
        _ex('qg_s8d3_bicycle_r3',     'Core | Bicycle twist', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s8d3_lunge_r3',       'HIIT | Lunge drop', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s8d3_dbplank_r3',     'Core | DB Plank pass through', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s8d3_burpee_r3',      'HIIT | Burpees', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s8d3_dolphin_r3',     'Core | Dolphin plank + knee taps', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s8d3_pivot_r3',       'HIIT | Pivot squat jumps 180°', 1, '40"', 20, 'Tabata A — Ronda 3'),
        _ex('qg_s8d3_elev_pier_r1',   'Core | Elevación de piernas', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s8d3_sentrod_r1',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s8d3_kicksits_fwd_r1','Core | Forward kick sits', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s8d3_walkout_r1',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s8d3_kicksits_r1',    'Core | Kick sits', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s8d3_pris_r1',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 1'),
        _ex('qg_s8d3_elev_pier_r2',   'Core | Elevación de piernas', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s8d3_sentrod_r2',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s8d3_kicksits_fwd_r2','Core | Forward kick sits', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s8d3_walkout_r2',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s8d3_kicksits_r2',    'Core | Kick sits', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s8d3_pris_r2',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 2'),
        _ex('qg_s8d3_elev_pier_r3',   'Core | Elevación de piernas', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s8d3_sentrod_r3',     'HIIT | Sentadilla + toque de rodilla', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s8d3_kicksits_fwd_r3','Core | Forward kick sits', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s8d3_walkout_r3',     'HIIT | Walkout jump', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s8d3_kicksits_r3',    'Core | Kick sits', 1, '40"', 20, 'Tabata B — Ronda 3'),
        _ex('qg_s8d3_pris_r3',        'HIIT | Prisioner side to side squats', 1, '40"', 20, 'Tabata B — Ronda 3'),
      ],
      4: [
        _ex('qg_s8d4_mob_snow_uni',   'Movilidad - Prone snow angels (unilateral)', 1, '12/lado', 0),
        _ex('qg_s8d4_mob_snow',       'Movilidad - Prone snow angels', 1, '12', 0),
        _ex('qg_s8d4_mob_esc',        'Movilidad | Movimientos escapulares', 1, '12', 0),
        _ex('qg_s8d4_mob_cat',        'Movilidad - Cat camel', 1, '12', 0),
        _ex('qg_s8d4_mob_rot_col',    'Movilidad - Rotación de columna en cuadrupedia', 1, '12', 0),
        _ex('qg_s8d4_mob_supermans',  'Movilidad - Supermans', 1, '12', 0),
        _ex('qg_s8d4_mob_flex_tob',   'Movilidad - Flexión de tobillo de rodillas', 1, '12', 0),
        _ex('qg_s8d4_mob_rot_col_uni','Movilidad - Rotación de columna en cuadrupedia (unilateral)', 1, '10/lado', 0),
        _ex('qg_s8d4_mob_wgs',        'Movilidad | WGS (World\'s Greatest Stretch)', 1, '12', 0),
      ],
      5: [
        _ex('qg_s8d5_mob_bisagra',    'Movilidad - Bisagra de cadera', 1, '10/lado', 0),
        _ex('qg_s8d5_mob_cat',        'Movilidad - Cat camel', 1, '12', 0),
        _ex('qg_s8d5_mob_wgs',        'Movilidad | WGS (World\'s Greatest Stretch)', 1, '12', 0),
        _ex('qg_s1d5_pmrum_aprox',    'Peso muerto rumano (aprox.)', 1, '6-8', 60),
        _ex('qg_s1d5_pmrum',          'Peso muerto rumano', 2, '8-10', 90),
        _ex('qg_s1d5_press_mc_1',     'Press banca con mancuernas', 1, '6-8', 90),
        _ex('qg_s1d5_press_mc_2',     'Press banca con mancuernas', 1, '8-10', 90),
        _ex('qg_s1d5_sumo',           'Sentadilla sumo con mancuerna', 3, '8-10', 60),
        _ex('qg_s1d5_remo_barra',     'Remo con barra a 90°', 3, '8-10', 90),
        _ex('qg_s1d5_patada_gluteo',  'Patada de glúteo', 3, '12-15/lado', 60),
        _ex('qg_s1d5_apert_pecho',    'Aperturas de pecho en máquina', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s1d5_elev_lat',       'Elevaciones laterales con mancuernas', 2, '12-15', 60, 'Biserie A'),
        _ex('qg_s8d5_est_espalda',    'Estiramiento - Espalda', 1, '16"', 0),
        _ex('qg_s8d5_est_rod_pecho',  'Estiramiento - Rodilla al pecho', 1, '16"/lado', 0),
      ],
      6: [
        _ex('qg_s8d6_bench',          'HIIT | Bench over jumps', 2, '30"', 30),
        _ex('qg_s8d6_lat_drop',       'HIIT | Lateral lunge drop', 2, '30"', 30),
        _ex('qg_s8d6_curtsy',         'HIIT | Curtsy jumps', 2, '30"', 30),
        _ex('qg_s8d6_scissor',        'HIIT | Scissor jumps', 2, '30"', 30),
        _ex('qg_s8d6_sentatras',      'HIIT | Sentadilla + paso atrás', 2, '30"', 30),
        _ex('qg_s8d6_crunch',         'Core | Crunch', 2, '30"', 30),
        _ex('qg_s8d6_explosive',      'HIIT | Explosive jumping jacks', 2, '30"', 30),
        _ex('qg_s8d6_vups',           'Core | V ups con toques de pie', 2, '30"', 30),
        _ex('qg_s8d6_skater',         'HIIT | Skater jumps', 2, '30"', 30),
        _ex('qg_s8d6_lunge',          'HIIT | Lunge jump', 2, '30"', 30),
      ],
    },
  ]
};

/* ══════════════ QUEMANDO GRASA EN CASA (8 semanas) ══════════════ */
/* Helper para construir un día HIIT con N ejercicios × 3 rondas (cards individuales) */
(function () {
  const _hiitDay = (prefix, label, items) => {
    const out = [];
    for (let r = 1; r <= 3; r++) {
      items.forEach((it, i) => {
        out.push(_ex(`${prefix}_${i + 1}_r${r}`, it.name, 1, '40"', 20, `${label} — Ronda ${r}`));
      });
    }
    return out;
  };

  // Items de Día 3 — Circuito A (HIIT) y Circuito B (Core)
  const D3_A = [
    { name: 'HIIT | Burpees' },
    { name: 'Core | Mountain climbers' },
    { name: 'HIIT | Sentadilla + toque de rodilla' },
    { name: 'HIIT | Jumping jacks' },
    { name: 'HIIT | Walking pivot squats' },
  ];
  const D3_B = [
    { name: 'Core | Bicycle twist' },
    { name: 'Core | Elevación de piernas' },
    { name: 'Core | Deadbugs' },
    { name: 'Core | Plancha lateral' },
  ];
  // Items de Día 6 — Versión A (S1-S4)
  const D6_A = [
    { name: 'HIIT | Sentadilla con salto + rotación' },
    { name: 'Core | Dolphin plank + knee taps' },
    { name: 'HIIT | Skater jumps' },
    { name: 'Core | Forward kick sits' },
    { name: 'HIIT | Sentadilla + toques de pie' },
    { name: 'Core | Jumping jacks plank' },
    { name: 'HIIT | Scissor jumps' },
    { name: 'Core | Knee to toe taps' },
  ];
  // Items de Día 6 — Versión B (S5-S8)
  const D6_B = [
    { name: 'HIIT | Sentadilla + toques de pie' },
    { name: 'Core | Drunken mountain climbers' },
    { name: 'HIIT | Skater jumps' },
    { name: 'Core | V ups con toques de pie' },
    { name: 'HIIT | Sprint estático' },
    { name: 'Core | Scissors' },
    { name: 'HIIT | Rocket jump squat taps' },
    { name: 'HIIT | Explosive jumping jacks' },
  ];

  const buildWeek = (sN, opts) => ({
    // D1 — Tren Inferior (S8 progresa a mancuernas/peso)
    1: opts.d1Mancuernas ? [
      _ex(`qc_s${sN}d1_mob_rotcol`,  'Movilidad - Rotación de columna en cuadrupedia', 1, '12/lado', 0),
      _ex(`qc_s${sN}d1_mob_cat`,     'Movilidad - Cat camel', 1, '12', 0),
      _ex(`qc_s${sN}d1_mob_flextob`, 'Movilidad - Flexión de tobillo de rodillas', 1, '12/lado', 0),
      _ex(`qc_s${sN}d1_sent_peso`,   'Sentadilla con peso', 3, '8-10', 60),
      _ex(`qc_s${sN}d1_zanc_mc`,     'Zancadas con mancuernas', 3, '10-12/lado', 60),
      _ex(`qc_s${sN}d1_pm_rumano`,   'Peso muerto rumano con mancuernas', 3, '10-12', 60),
      _ex(`qc_s${sN}d1_ht_mc`,       'Hip thrust con mancuerna', 3, '10-12', 60),
      _ex(`qc_s${sN}d1_curl_desliz`, 'Curl de femoral con deslizamiento', 3, '12-15', 60),
      _ex(`qc_s${sN}d1_gemelo`,      'Gemelo - elevación de talones', 3, '12-15', 60),
      _ex(`qc_s${sN}d1_est_aduct`,   'Estiramiento - Aductores (Mariposa)', 1, '16"/pierna', 0),
      _ex(`qc_s${sN}d1_est_glut_eq`, 'Estiramiento | Estiramiento de glúteos en equilibrio', 1, '16"/pierna', 0),
    ] : [
      _ex(`qc_s${sN}d1_mob_rotcol`,  'Movilidad - Rotación de columna en cuadrupedia', 1, '12/lado', 0),
      _ex(`qc_s${sN}d1_mob_cat`,     'Movilidad - Cat camel', 1, '12', 0),
      _ex(`qc_s${sN}d1_mob_flextob`, 'Movilidad - Flexión de tobillo de rodillas', 1, '12/lado', 0),
      _ex(`qc_s${sN}d1_sent`,        'Sentadilla con resistencia', 3, '8-10', 60),
      _ex(`qc_s${sN}d1_zancadas`,    'Zancadas sin peso', 3, '10-12/lado', 60),
      _ex(`qc_s${sN}d1_pm`,          'Peso muerto con resistencia', 3, '10-12', 60),
      _ex(`qc_s${sN}d1_ht_uni`,      'Hip thrust unilateral sin peso', 3, '10-12/pierna', 60),
      _ex(`qc_s${sN}d1_curl_fem`,    'Curl de femoral con resistencia', 3, '12-15', 60),
      _ex(`qc_s${sN}d1_gemelo`,      'Gemelo - elevación de talones', 3, '12-15', 60),
      _ex(`qc_s${sN}d1_est_glut`,    'Estiramiento - Glúteo medio', 1, '16"/pierna', 0),
      _ex(`qc_s${sN}d1_est_torsion`, 'Estiramiento | Torsión en sedestación', 1, '16"/pierna', 0),
    ],
    // D2 — Tren Superior (S5-S8 cambian movilidad inicial)
    2: [
      ...(opts.d2MobNueva ? [
        _ex(`qc_s${sN}d2_mob_cat`,     'Movilidad - Cat camel', 1, '12', 0),
        _ex(`qc_s${sN}d2_mob_flexesc`, 'Movilidad - Flexiones escapulares', 1, '12', 0),
      ] : [
        _ex(`qc_s${sN}d2_mob_cervic`,  'Movilidad - Cervicales', 1, '12', 0),
        _ex(`qc_s${sN}d2_mob_super`,   'Movilidad - Supermans', 1, '12', 0),
      ]),
      _ex(`qc_s${sN}d2_mob_rotcol`,  'Movilidad - Rotación de columna en T', 1, '12/lado', 0),
      _ex(`qc_s${sN}d2_press_pecho`, 'Press de pecho con resistencia tumbada', 3, '10-12', 60),
      _ex(`qc_s${sN}d2_remo_pie`,    'Remo de pie con resistencia', 3, '10-12', 60),
      _ex(`qc_s${sN}d2_press_homb`,  'Press de hombro con resistencia', 3, '10-12', 60),
      _ex(`qc_s${sN}d2_facepull`,    'Facepull con resistencia', 3, '12-15', 60),
      _ex(`qc_s${sN}d2_pullover`,    'Pull over con resistencia', 3, '12-15', 60),
      _ex(`qc_s${sN}d2_curl_bicep`,  'Curl de bíceps con resistencia', 3, '12-15', 60),
      _ex(`qc_s${sN}d2_ext_tri`,     'Extensión de tríceps con resistencia', 3, '12-15', 60),
      _ex(`qc_s${sN}d2_est_esp`,     'Estiramiento - Espalda', 1, '16"', 0),
      _ex(`qc_s${sN}d2_est_homb`,    'Estiramiento - Hombros con rotación', 1, '16"/lado', 0),
    ],
    // D3 — HIIT + Core (Circuito A 5×3 + Circuito B 4×3)
    3: [
      _ex(`qc_s${sN}d3_mob_rotcol`,  'Movilidad - Rotación de columna en cuadrupedia', 1, '12/lado', 0),
      _ex(`qc_s${sN}d3_mob_rot90`,   'Movilidad - Rotación interna de cadera 90-90', 1, '12/lado', 0),
      _ex(`qc_s${sN}d3_mob_cobra`,   'Movilidad | Cobra dinámica', 1, '12', 0),
      ..._hiitDay(`qc_s${sN}d3_a`, 'Circuito A', D3_A),
      ..._hiitDay(`qc_s${sN}d3_b`, 'Circuito B', D3_B),
    ],
    // D4 — Movilidad
    4: [
      _ex(`qc_s${sN}d4_mob_cat`,      'Movilidad - Cat camel', 2, '12', 0),
      _ex(`qc_s${sN}d4_mob_pelvis`,   'Movilidad | Círculos con la pelvis en cuadrupedia', 2, '12', 0),
      _ex(`qc_s${sN}d4_mob_flexesc`,  'Movilidad - Flexiones escapulares', 2, '12', 0),
      _ex(`qc_s${sN}d4_mob_cobra`,    'Movilidad | Cobra dinámica', 2, '12', 0),
      _ex(`qc_s${sN}d4_mob_flextob`,  'Movilidad - Flexión de tobillo de rodillas', 2, '12/lado', 0),
      _ex(`qc_s${sN}d4_mob_glute`,    'Movilidad - Glute bridge', 2, '12', 0),
      _ex(`qc_s${sN}d4_mob_esc`,      'Movilidad | Movimientos escapulares', 2, '12', 0),
      _ex(`qc_s${sN}d4_mob_super`,    'Movilidad - Supermans', 2, '12', 0),
      _ex(`qc_s${sN}d4_mob_rotcol`,   'Movilidad - Rotación de columna en T', 2, '12/lado', 0),
      _ex(`qc_s${sN}d4_mob_rot90`,    'Movilidad - Rotación interna de cadera 90-90', 2, '12/lado', 0),
    ],
    // D5 — Full body
    5: [
      _ex(`qc_s${sN}d5_mob_cat`,      'Movilidad - Cat camel', 1, '12', 0),
      _ex(`qc_s${sN}d5_mob_rot90`,    'Movilidad - Rotación interna de cadera 90-90', 1, '12/lado', 0),
      _ex(`qc_s${sN}d5_mob_cobra`,    'Movilidad | Cobra dinámica', 1, '12', 0),
      _ex(`qc_s${sN}d5_thrusters`,    'Thrusters con resistencia', 3, '10-12', 60),
      _ex(`qc_s${sN}d5_flex_rod`,     'Flexiones de rodillas', 3, '10-12', 60),
      _ex(`qc_s${sN}d5_walking_lung`, 'Sandbag | Walking lunges (zancadas caminando)', 3, '10-12/lado', 60),
      _ex(`qc_s${sN}d5_jalon_uni`,    'Jalón unilateral con resistencia', 3, '10-12/lado', 60),
      _ex(`qc_s${sN}d5_elev_lat`,     'Elevaciones laterales con resistencia', 3, '12-15/lado', 60),
      _ex(`qc_s${sN}d5_elev_front`,   'Elevaciones frontales con resistencia', 3, '12-15', 60),
      _ex(`qc_s${sN}d5_est_homb`,     'Estiramiento - Hombros', 1, '16"/lado', 0),
      _ex(`qc_s${sN}d5_est_luna`,     'Estiramiento | Media luna en sedestación', 1, '16"/lado', 0),
      _ex(`qc_s${sN}d5_est_pigeon`,   'Estiramientos - Cadera (Pigeon)', 1, '16"/lado', 0),
    ],
    // D6 — HIIT (Versión A o B según semana)
    6: opts.d6B
      ? _hiitDay(`qc_s${sN}d6`, 'Tabata', D6_B)
      : _hiitDay(`qc_s${sN}d6`, 'Tabata', D6_A),
  });

  WORKOUT_PLANS.quemando_casa = {
    id: 'quemando_casa',
    name: 'Quemando Grasa en Casa',
    planType: 'phased',
    weeks: 8,
    description: 'Plan 8 semanas en casa — fuerza con resistencia, HIIT, Tabata y movilidad. Domingo descanso.',
    trainingDays: [1, 2, 3, 4, 5, 6],
    dayMeta: {
      1: { name: 'Tren Inferior - Fuerza', type: 'strength', muscleGroups: ['Piernas', 'Glúteos'] },
      2: { name: 'Tren Superior - Fuerza', type: 'strength', muscleGroups: ['Pecho', 'Espalda', 'Hombros'] },
      3: { name: 'HIIT + Core',            type: 'strength', muscleGroups: ['Cardio', 'Core'] },
      4: { name: 'Movilidad',              type: 'strength', muscleGroups: ['Movilidad', 'Recuperación'] },
      5: { name: 'Full Body - Fuerza',     type: 'strength', muscleGroups: ['Full body'] },
      6: { name: 'HIIT (Tabata)',          type: 'strength', muscleGroups: ['Cardio', 'Full body'] }
    },
    weeklySchedule: [
      buildWeek(1, { d6B: false, d2MobNueva: false, d1Mancuernas: false }),
      buildWeek(2, { d6B: false, d2MobNueva: false, d1Mancuernas: false }),
      buildWeek(3, { d6B: false, d2MobNueva: false, d1Mancuernas: false }),
      buildWeek(4, { d6B: false, d2MobNueva: false, d1Mancuernas: false }),
      buildWeek(5, { d6B: true,  d2MobNueva: true,  d1Mancuernas: false }),
      buildWeek(6, { d6B: true,  d2MobNueva: true,  d1Mancuernas: false }),
      buildWeek(7, { d6B: true,  d2MobNueva: true,  d1Mancuernas: false }),
      buildWeek(8, { d6B: true,  d2MobNueva: true,  d1Mancuernas: true  }),
    ]
  };
})();

/* ══════════════ EMPEZANDO DE CERO 2.0 (12 semanas) ══════════════ */
(function () {
  const E = (id, name, sets, reps, rest, notes) => _ex(`ec2_${id}`, name, sets, reps, rest, notes);

  // Movilidad reutilizable
  const MOB_D1_A = (s) => [
    E(`s${s}d1_mob_rot90`,    'Movilidad - Rotación interna de cadera 90-90', 1, '10/lado', 0),
    E(`s${s}d1_mob_flexesc`,  'Movilidad - Flexiones escapulares', 1, '10', 0),
    E(`s${s}d1_mob_balanceo`, 'Movilidad - Balanceo de piernas', 1, '10/lado', 0),
    E(`s${s}d1_mob_mangu`,    'Movilidad - Manguitos rotadores con resistencia', 1, '10', 0),
  ];
  const MOB_D1_B = (s) => [
    E(`s${s}d1_mob_aduct`,    'Movilidad - Aductores con kettlebell', 1, '10/lado', 0),
    E(`s${s}d1_mob_cat`,      'Movilidad - Cat camel', 1, '10', 0),
    E(`s${s}d1_mob_balanceo`, 'Movilidad - Balanceo de piernas', 1, '10/lado', 0),
    E(`s${s}d1_mob_mangu`,    'Movilidad - Manguitos rotadores con resistencia', 1, '10', 0),
  ];
  const MOB_D3 = (s, bridge) => [
    E(`s${s}d3_mob_bisagra`,  'Movilidad - Bisagra de cadera', 1, '10', 0),
    E(`s${s}d3_mob_homero`,   'Movilidad - Rotación humeral con peso', 1, '8/lado', 0),
    E(`s${s}d3_mob_cervic`,   'Movilidad - Cervicales', 1, '10', 0),
    E(`s${s}d3_mob_bridge`,   'Movilidad - Bridge march', 1, bridge || '10/lado', 0),
  ];
  const MOB_D5_BLK1 = (s) => [
    E(`s${s}d5_mob_shoulder`, 'Movilidad - Shoulder CAR', 1, '10/lado', 0),
    E(`s${s}d5_mob_rotcol`,   'Movilidad - Rotación de columna en T', 1, '10/lado', 0),
    E(`s${s}d5_mob_pallof`,   'Core | Press Pallof con resistencia', 1, '10/lado', 0),
  ];
  const MOB_D5_BLK2 = (s, halosReps) => [
    E(`s${s}d5_mob_halos`,    'Movilidad - Kettlebell halos', 1, halosReps || '10/lado', 0),
    E(`s${s}d5_mob_fire`,     'Movilidad - Fire Hydrants', 1, '10/lado', 0),
    E(`s${s}d5_mob_flextob`,  'Movilidad - Flexión de tobillo de rodillas', 1, '10', 0),
  ];
  const D7_BLK1 = (s) => [
    E(`s${s}d7_est_updog`,    'Estiramientos - Upward dog', 2, '20"', 0),
    E(`s${s}d7_est_espalda`,  'Estiramiento - Espalda', 2, '20"', 0),
    E(`s${s}d7_mob_rlunge`,   'Movilidad - Runners lunge with reach', 2, '15"/lado', 0),
    E(`s${s}d7_est_glut`,     'Estiramiento - Glúteo medio', 2, '15"/lado', 0),
    E(`s${s}d7_mob_bisagra`,  'Movilidad - Bisagra de cadera', 2, '5', 0),
    E(`s${s}d7_est_standing`, 'Estiramientos - Standing reach down', 3, '10"', 0),
    E(`s${s}d7_est_rod`,      'Estiramiento - Rodilla al pecho', 2, '15"/pierna', 0),
    E(`s${s}d7_est_aduct`,    'Estiramiento - Aductores (Mariposa)', 2, '20"', 0),
    E(`s${s}d7_est_homb`,     'Estiramiento - Hombros', 2, '15"/brazo', 0),
    E(`s${s}d7_est_munec`,    'Estiramiento - Muñecas', 1, '15"', 0),
  ];
  const D7_BLK2 = (s) => [
    E(`s${s}d7_mob_cat`,      'Movilidad - Cat camel', 2, '20"', 0),
    E(`s${s}d7_est_espalda`,  'Estiramiento - Espalda', 2, '20"', 0),
    E(`s${s}d7_mob_rlunge`,   'Movilidad - Runners lunge with reach', 2, '15"/lado', 0),
    E(`s${s}d7_est_pir`,      'Estiramiento - Piramidal', 2, '15"/lado', 0),
    E(`s${s}d7_mob_flextob`,  'Movilidad - Flexión de tobillo con peso', 2, '15"/pierna', 0),
    E(`s${s}d7_mob_standing`, 'Movilidad | Standing reach down forward-backward', 3, '10"', 0),
    E(`s${s}d7_est_split`,    'Estiramiento - Split unilateral', 2, '20"', 0),
    E(`s${s}d7_est_homb`,     'Estiramiento - Hombros', 2, '15"/brazo', 0),
    E(`s${s}d7_est_munec`,    'Estiramiento - Muñecas', 1, '15"', 0),
    E(`s${s}d7_est_cuello`,   'Estiramiento - Cuello', 1, '10"', 0),
  ];

  // ─── BLOQUE 1 (S1-S6): plantillas D1, D3, D5 con overrides ───
  // Series progresan: cap 2→4 según semana
  const D1_BLK1 = (s, o) => [
    ...((s % 2 === 0) ? MOB_D1_B(s) : MOB_D1_A(s)),
    E(`s${s}d1_facepull`,   'Facepull en polea', o.facepull || 2, '10-12', 60),
    E(`s${s}d1_sent_aprox`, 'Sentadilla libre | barra alta', 1, '8', 60, 'Aproximación'),
    E(`s${s}d1_sent`,       'Sentadilla libre | barra alta', 2, '10', 60),
    E(`s${s}d1_remo_uni`,   'Remo unilateral con mancuernas', 3, '10-12', o.remoRest != null ? o.remoRest : 0),
    E(`s${s}d1_zancadas`,   'Zancadas con mancuernas', 2, '20-24 pasos', 60),
    E(`s${s}d1_pullover`,   'Pull over en polea', o.pullover || 2, '10', 60),
    E(`s${s}d1_ext_cuad`,   'Extensión de cuádriceps', 3, '10', 60),
    E(`s${s}d1_plancha`,    'Plancha con toques de hombro', o.plank || 3, o.plankReps || '15"', 30),
    E(`s${s}d1_worm`,       'Core | Worm walks', o.worm || 3, o.wormReps || '15"', 30),
  ];

  const D3_BLK1 = (s, o) => [
    ...MOB_D3(s),
    E(`s${s}d3_flex_prog`,  'Progresión | Flexiones', o.flexSets || 2, 'AMRAP', o.flexRest != null ? o.flexRest : 60),
    E(`s${s}d3_pm_aprox`,   'Peso muerto convencional', 1, '8', 60, 'Aproximación'),
    E(`s${s}d3_pm`,         'Peso muerto convencional', o.pmSets || 2, '10', 60),
    E(`s${s}d3_jalon`,      'Jalón al pecho', o.jalon || 3, '8-10', 60),
    E(`s${s}d3_curl_fem`,   'Curl de femoral', o.curlFem || 3, '14-16', 60),
    E(`s${s}d3_press_banca`,'Press banca con barra', o.press || 3, '12', 60),
    E(`s${s}d3_elev_lat`,   'Elevaciones laterales con mancuernas', 3, '12', 60),
    ...(o.dropSet ? [
      E(`s${s}d3_elev_drop1`, 'Elevaciones laterales | Drop set', 1, 'Drop', o.dropRest != null ? o.dropRest : 0),
      ...(o.dropExtra ? [E(`s${s}d3_elev_drop2`, 'Elevaciones laterales | Drop set', 1, 'Drop', 0)] : []),
    ] : []),
    E(`s${s}d3_pull_through`,'Pull through en polea', 3, '14-16', o.pullThroughRest != null ? o.pullThroughRest : 60),
    E(`s${s}d3_kb_pull`,    'Core | Kettlebell pull through', o.kbPull || 3, o.kbPullReps || '6', 30),
    E(`s${s}d3_vups`,       'Core | V ups', o.vups || 3, o.vupsReps || '8', 30),
  ];

  const D5_BLK1 = (s, o) => [
    ...MOB_D5_BLK1(s),
    E(`s${s}d5_press_aprox`,'Press militar con barra', 1, '6', o.pressRest != null ? o.pressRest : 60, 'Aproximación'),
    E(`s${s}d5_press`,      'Press militar con barra', 1, '8', o.pressRest != null ? o.pressRest : 60),
    E(`s${s}d5_ht`,         'Hip Thrust', o.ht || 2, '10-12', o.htRest != null ? o.htRest : 60),
    E(`s${s}d5_kb_swing`,   'Kettlebell swing', 2, o.kbReps || '8', 30),
    E(`s${s}d5_jalon_uni`,  'Jalón unilateral en polea', o.jalonUni || 2, '12', 0),
    E(`s${s}d5_curl_bicep`, 'Curl de bíceps de pie', o.curlBicep || 3, '12-14', 60),
    E(`s${s}d5_curl_arana`, 'Curl araña', o.curlArana || 2, '10-12', 60),
    E(`s${s}d5_ext_tri`,    'Extensión de tríceps en polea', o.extTri || 2, '15-17', 60),
    E(`s${s}d5_fondos`,     'Fondos de tríceps en banco', 3, '8-10', 60),
  ];

  // ─── BLOQUE 2 (S7-S12): D1, D3, D5 con overrides ───
  const D1_BLK2 = (s, o) => [
    ...((s % 2 === 0) ? MOB_D1_B(s) : MOB_D1_A(s)),
    E(`s${s}d1_facepull`,   'Facepull en polea', 2, '10-12', 60),
    E(`s${s}d1_sent_aprox`, 'Sentadilla libre | barra alta', 1, o.sentAproxReps || '4', 60, 'Aproximación'),
    E(`s${s}d1_sent`,       'Sentadilla libre | barra alta', 2, '8', 60),
    E(`s${s}d1_remo_barra`, 'Remo con barra a 90°', o.remoSets || 3, '8-10', 60),
    E(`s${s}d1_bulgara`,    'Sentadilla búlgara con mancuerna', 2, '12-14', o.bulgRest != null ? o.bulgRest : 60),
    E(`s${s}d1_saltos`,     'Saltos laterales al cajón | Progresión', 2, o.saltosReps || '8', o.saltosRest != null ? o.saltosRest : 30),
    E(`s${s}d1_prensa`,     'Prensa unilateral', 3, '10', 0),
    E(`s${s}d1_mc`,         'Core | Mountain climbers', 3, '30"', o.mcRest != null ? o.mcRest : 30),
    E(`s${s}d1_plancha`,    'Core | Plancha de codos a manos', 3, '30"', o.plankRest != null ? o.plankRest : 30),
  ];

  const D3_BLK2 = (s, o) => [
    ...MOB_D3(s, o.bridgeReps),
    E(`s${s}d3_flex_prog`,  'Progresión | Flexiones', o.flexSets || 3, 'AMRAP', o.flexRest != null ? o.flexRest : 60),
    E(`s${s}d3_pm_uni`,     'Peso muerto rumano unilateral con mancuernas', o.pmUniSets || 3, '10-12', o.pmUniRest != null ? o.pmUniRest : 60),
    ...(o.useDominadas ? [
      E(`s${s}d3_dom`,        'Dominadas', 2, '1-2', 60),
      E(`s${s}d3_dom_gomas`,  'Dominadas con gomas', 2, '8-10', 60),
    ] : [
      E(`s${s}d3_dom_neg`,    'Dominadas negativas', 4, o.domNegReps || '3', 60),
    ]),
    E(`s${s}d3_patada`,     'Patada de glúteo en polea', o.patadaSets || 3, '14-16', o.patadaRest != null ? o.patadaRest : 0),
    E(`s${s}d3_elev_front`, 'Elevaciones frontales con disco', o.elevFront || 3, '10', 60),
    E(`s${s}d3_elev_lat`,   'Elevaciones laterales con mancuernas', o.elevLat || 3, '12', 60),
    ...(o.dropSet ? [
      E(`s${s}d3_elev_drop1`, 'Elevaciones laterales | Drop set', 1, 'Drop', o.dropRest != null ? o.dropRest : 120),
      E(`s${s}d3_elev_drop2`, 'Elevaciones laterales | Drop set', 1, 'Drop', 0),
    ] : []),
    E(`s${s}d3_kb_swing`,   'Kettlebell swing', 3, o.kbSwingReps || '10', o.kbSwingRest != null ? o.kbSwingRest : 30),
    E(`s${s}d3_gemelo`,     'Gemelo en prensa', 3, '20', 60),
    E(`s${s}d3_elev_pier`,  'Elevación de piernas colgada', 3, o.elevPierReps || '10', o.elevPierRest != null ? o.elevPierRest : 60),
  ];

  const D5_BLK2 = (s, o) => [
    ...MOB_D5_BLK2(s, o.halosReps),
    E(`s${s}d5_thruster`,   'Thruster con mancuernas', o.thrusterSets || 2, o.thrusterReps || '8', 60),
    E(`s${s}d5_ht_aprox`,   'Hip Thrust', 1, '8', 60, 'Aproximación'),
    E(`s${s}d5_ht`,         'Hip Thrust', o.htSets || 1, '12', o.htRest != null ? o.htRest : 0),
    E(`s${s}d5_jalon_uni`,  'Jalón unilateral en polea', o.jalonSets || 2, '12', o.jalonRest != null ? o.jalonRest : 0),
    E(`s${s}d5_remo_trx`,   'Remo en TRX', o.remoTrxSets || 3, '12-14', 60),
    E(`s${s}d5_aussie`,     'Australian chin ups', o.aussieSets || 3, o.aussieReps || '3-5', 60),
    ...(o.fondosParalelas ? [
      E(`s${s}d5_fondos_par`, 'Fondos de tríceps en paralelas', o.fondosSets || 3, o.fondosReps || '2-4', 60),
    ] : [
      E(`s${s}d5_fondos`,     'Fondos de tríceps en banco en suspensión', 3, '8-10', 60),
    ]),
  ];

  // ─── Per-week configuration ───
  const W = {};
  // Bloque 1
  W[1] = { d1: D1_BLK1(1, {}), d3: D3_BLK1(1, {}), d5: D5_BLK1(1, {}), d7: D7_BLK1(1) };
  W[2] = { d1: D1_BLK1(2, {}), d3: D3_BLK1(2, {}), d5: D5_BLK1(2, {}), d7: D7_BLK1(2) };
  W[3] = {
    d1: D1_BLK1(3, { facepull: 3 }),
    d3: D3_BLK1(3, { flexSets: 3, jalon: 4, curlFem: 4, press: 4, dropSet: true, kbPull: 4, vups: 4 }),
    d5: D5_BLK1(3, { ht: 3 }),
    d7: D7_BLK1(3),
  };
  W[4] = {
    d1: D1_BLK1(4, { facepull: 4, plank: 4, worm: 4 }),
    d3: D3_BLK1(4, { flexSets: 3, jalon: 4, curlFem: 4, press: 4, dropSet: true, kbPull: 4, vups: 4, pullThroughRest: 0 }),
    d5: D5_BLK1(4, { ht: 3, jalonUni: 3, curlArana: 3, extTri: 3 }),
    d7: D7_BLK1(4),
  };
  W[5] = {
    d1: D1_BLK1(5, { facepull: 4, plank: 4, worm: 4, plankReps: '30"', wormReps: '30"' }),
    d3: D3_BLK1(5, { flexSets: 3, jalon: 4, curlFem: 4, press: 4, dropSet: true, dropExtra: true, dropRest: 90, kbPull: 4, kbPullReps: '8', vups: 4, vupsReps: '10' }),
    d5: D5_BLK1(5, { ht: 3, htRest: 0, pressRest: 0, kbReps: '10', curlBicep: 4, curlArana: 4, extTri: 4 }),
    d7: D7_BLK1(5),
  };
  // S6 = descarga del bloque 1
  W[6] = {
    d1: [
      ...MOB_D1_B(6),
      E('s6d1_facepull',   'Facepull en polea', 2, '10-12', 60),
      E('s6d1_sent',       'Sentadilla libre | barra alta', 3, '8', 60),
      E('s6d1_remo_uni',   'Remo unilateral con mancuernas', 3, '10-12', 60),
      E('s6d1_zancadas',   'Zancadas con mancuernas', 2, '20-24 pasos', 60),
      E('s6d1_pullover',   'Pull over en polea', 2, '10', 60),
      E('s6d1_ext_cuad',   'Extensión de cuádriceps', 3, '10', 60),
      E('s6d1_plancha',    'Plancha con toques de hombro', 3, '30"', 30),
      E('s6d1_worm',       'Core | Worm walks', 3, '30"', 30),
    ],
    d3: [
      ...MOB_D3(6),
      E('s6d3_flex_prog',  'Progresión | Flexiones', 2, 'AMRAP', 0),
      E('s6d3_pm',         'Peso muerto convencional', 3, '8', 60),
      E('s6d3_jalon',      'Jalón al pecho', 3, '8-10', 60),
      E('s6d3_curl_fem',   'Curl de femoral', 3, '14-16', 60),
      E('s6d3_press_banca','Press banca con barra', 3, '12', 60),
      E('s6d3_elev_lat',   'Elevaciones laterales con mancuernas', 3, '12', 60),
      E('s6d3_pull_through','Pull through en polea', 3, '14-16', 60),
      E('s6d3_kb_pull',    'Core | Kettlebell pull through', 3, '8', 30),
      E('s6d3_vups',       'Core | V ups', 3, '10', 30),
    ],
    d5: [
      ...MOB_D5_BLK1(6),
      E('s6d5_press',      'Press militar con barra', 2, '8', 60),
      E('s6d5_ht',         'Hip Thrust', 2, '10-12', 60),
      E('s6d5_kb_swing',   'Kettlebell swing', 2, '8', 60),
      E('s6d5_jalon_uni',  'Jalón unilateral en polea', 2, '12', 60),
      E('s6d5_curl_bicep', 'Curl de bíceps de pie', 3, '12-14', 60),
      E('s6d5_curl_arana', 'Curl araña', 2, '10-12', 60),
      E('s6d5_ext_tri',    'Extensión de tríceps en polea', 2, '15-17', 60),
      E('s6d5_fondos',     'Fondos de tríceps en banco', 3, '8-10', 60),
    ],
    d7: D7_BLK1(6),
  };
  // Bloque 2
  W[7]  = {
    d1: D1_BLK2(7, {}),
    d3: D3_BLK2(7, {}),
    d5: D5_BLK2(7, {}),
    d7: D7_BLK2(7),
  };
  W[8]  = {
    d1: D1_BLK2(8, {}),
    d3: D3_BLK2(8, { domNegReps: '5', patadaRest: 60, elevFront: 4, elevLat: 4, kbSwingReps: '8', kbSwingRest: 60, elevPierReps: '8' }),
    d5: D5_BLK2(8, { htRest: 0, aussieSets: 4 }),
    d7: D7_BLK2(8),
  };
  W[9]  = {
    d1: D1_BLK2(9, { remoSets: 4, saltosReps: '10', mcRest: 15, plankRest: 15 }),
    d3: D3_BLK2(9, { flexRest: 0, domNegReps: '7', patadaSets: 4, elevFront: 4, dropSet: true, dropRest: 120, elevPierReps: '8' }),
    d5: D5_BLK2(9, { thrusterSets: 3, thrusterReps: '10', htSets: 2, htRest: 60, jalonSets: 3, aussieSets: 4, aussieReps: '4-6', fondosParalelas: true, fondosReps: '2-4' }),
    d7: D7_BLK2(9),
  };
  W[10] = {
    d1: D1_BLK2(10, { remoSets: 4, saltosReps: '10', mcRest: 15, plankRest: 15 }),
    d3: D3_BLK2(10, { flexSets: 4, pmUniSets: 4, useDominadas: true, patadaSets: 4, elevFront: 4, dropSet: true, dropRest: 120, elevPierReps: '8', elevPierRest: 30 }),
    d5: D5_BLK2(10, { thrusterSets: 3, thrusterReps: '10', htSets: 2, htRest: 60, jalonSets: 3, aussieSets: 4, aussieReps: '4-6', fondosParalelas: true, fondosReps: '4-6' }),
    d7: D7_BLK2(10),
  };
  W[11] = {
    d1: D1_BLK2(11, { remoSets: 4, saltosReps: '10', mcRest: 15, plankRest: 15 }),
    d3: D3_BLK2(11, { flexSets: 4, flexRest: 60, pmUniSets: 4, pmUniRest: 0, useDominadas: true, patadaSets: 4, patadaRest: 60, elevFront: 4, dropSet: true, dropRest: 120, elevPierReps: '8', elevPierRest: 30, bridgeReps: '10/lado' }),
    d5: D5_BLK2(11, { thrusterSets: 2, thrusterReps: '10', htSets: 2, htRest: 60, jalonSets: 3, jalonRest: 60, aussieSets: 4, aussieReps: '5-7', fondosParalelas: true, fondosReps: '6-8' }),
    d7: D7_BLK2(11), // Imágenes faltan — usamos plantilla bloque 2 (= S7/S8/S9/S10/S12 D7)
  };
  // S12 = descarga del bloque 2
  W[12] = {
    d1: [
      ...MOB_D1_B(12),
      E('s12d1_facepull', 'Facepull en polea', 2, '10-12', 60),
      E('s12d1_sent',     'Sentadilla libre | barra alta', 3, '6', 60),
      E('s12d1_remo_barra','Remo con barra a 90°', 3, '8-10', 60),
      E('s12d1_bulgara',  'Sentadilla búlgara con mancuerna', 2, '12-14', 60),
      E('s12d1_saltos',   'Saltos laterales al cajón | Progresión', 2, '10', 60),
      E('s12d1_prensa',   'Prensa unilateral', 3, '10', 0),
      E('s12d1_mc',       'Core | Mountain climbers', 3, '30"', 15),
      E('s12d1_plancha',  'Core | Plancha de codos a manos', 3, '30"', 15),
    ],
    d3: [
      ...MOB_D3(12, '8/lado'),
      E('s12d3_flex',     'Progresión | Flexiones', 2, 'AMRAP', 0),
      E('s12d3_pm_uni',   'Peso muerto rumano unilateral con mancuernas', 3, '10-12', 0),
      E('s12d3_dom',      'Dominadas', 2, '1-2', 0),
      E('s12d3_patada',   'Patada de glúteo en polea', 2, '14-16', 0),
      E('s12d3_elev_front','Elevaciones frontales con disco', 3, '10', 60),
      E('s12d3_elev_lat', 'Elevaciones laterales con mancuernas', 3, '12', 60),
      E('s12d3_kb_swing', 'Kettlebell swing', 3, '10', 30),
      E('s12d3_gemelo',   'Gemelo en prensa', 3, '20', 60),
      E('s12d3_elev_pier','Elevación de piernas colgada', 3, '8', 30),
    ],
    d5: [
      ...MOB_D5_BLK2(12, '1/lado'),
      E('s12d5_thruster', 'Thruster con mancuernas', 2, '10', 60),
      E('s12d5_ht',       'Hip Thrust', 2, '10', 60),
      E('s12d5_jalon_uni','Jalón unilateral en polea', 3, '12', 60),
      E('s12d5_remo_trx', 'Remo en TRX', 2, '12-14', 60),
      E('s12d5_aussie',   'Australian chin ups', 2, '5-7', 60),
      E('s12d5_fondos',   'Fondos de tríceps en paralelas', 2, '6-8', 60),
    ],
    d7: D7_BLK2(12),
  };

  WORKOUT_PLANS.empezando_cero_20 = {
    id: 'empezando_cero_20',
    name: 'Empezando de Cero 2.0',
    planType: 'phased',
    weeks: 12,
    description: 'Plan 12 semanas — full body 4 días/sem (D1/D3/D5/D7). Bloque 1 (S1-S5) + descarga (S6) + Bloque 2 (S7-S11) + descarga (S12). D7 movilidad.',
    trainingDays: [1, 3, 5, 7],
    dayMeta: {
      1: { name: 'Full Body',  type: 'strength', muscleGroups: ['Full body'] },
      3: { name: 'Full Body',  type: 'strength', muscleGroups: ['Full body'] },
      5: { name: 'Full Body',  type: 'strength', muscleGroups: ['Full body'] },
      7: { name: 'Movilidad',  type: 'strength', muscleGroups: ['Movilidad', 'Recuperación'] }
    },
    weeklySchedule: Array.from({ length: 12 }, (_, i) => {
      const w = W[i + 1];
      return { 1: w.d1, 3: w.d3, 5: w.d5, 7: w.d7 };
    })
  };
})();

/* ══════════════ FUERTES INTERMEDIAS (12 semanas) ══════════════ */
(function () {
  const E = (id, name, sets, reps, rest, notes) => _ex(`fi_${id}`, name, sets, reps, rest, notes);

  // ─────── BLOQUE A: S1-S3 (descansos sin cuantificar) ───────
  const D1_A = (s, hipThrustSets, bulgaraSets, coreEx, coreId) => [
    E(`s${s}d1_clamshells`,'Clamshells', 1, '10/lado', 0),
    E(`s${s}d1_spider`,    'HIIT | Spider lunges', 1, '20 en total', 0),
    E(`s${s}d1_abd_maq`,   'Abducción de cadera en máquina', 3, '16', 0),
    E(`s${s}d1_pm_aprox1`, 'Peso muerto convencional (aproximación)', 1, '8', 0),
    E(`s${s}d1_pm_aprox2`, 'Peso muerto convencional (aproximación)', 1, '8', 0),
    E(`s${s}d1_pm_top`,    'Peso muerto convencional', 1, '6', 0),
    E(`s${s}d1_pm_bajada`, 'Peso muerto convencional', s === 1 ? 2 : 3, '6 con 10% menos del peso de la primera serie', 0),
    E(`s${s}d1_ht_rom`,    'Hip Thrust 1/2 ROM', hipThrustSets, hipThrustSets === 4 ? '10' : '8', 0),
    E(`s${s}d1_bulgara`,   'Sentadilla búlgara con peso', bulgaraSets, '12/pierna', 0),
    E(`s${s}d1_${coreId}`, coreEx, 4, '30"', 30),
  ];
  const D2_A = (s) => [
    E(`s${s}d2_curl_press`,'Curl de bíceps + press con resistencia', 1, '10', 0),
    E(`s${s}d2_elev_lat_r`,'Elevaciones laterales con resistencia', 1, '10', 0),
    E(`s${s}d2_press_mil1`,'Press militar con barra', 1, '8', 0),
    E(`s${s}d2_press_mil2`,'Press militar con barra', 2, '8 con 10% menos del peso', 0),
    E(`s${s}d2_press_inc`, 'Press banca inclinado con mancuernas', 3, '10', 0),
    E(`s${s}d2_remo_90`,   'Remo con barra a 90°', 3, '12', 0),
    E(`s${s}d2_elev_apoyo`,'Elevaciones laterales con apoyo en banco', 4, '12 con 1" de pausa arriba', 0),
    E(`s${s}d2_elev_front`,'Elevaciones frontales con disco', 3, '16', 0),
  ];
  const D4_A = (s) => [
    E(`s${s}d4_mob_bisagra`,'Movilidad - Bisagra de cadera', 1, '10', 0),
    E(`s${s}d4_lunge_drop`, 'HIIT | Lunge drop', 1, '20 en total', 0),
    E(`s${s}d4_curl_fem`,   'Curl de femoral', 3, '12', 0),
    E(`s${s}d4_sent_aprox1`,'Sentadilla libre | barra alta (aproximación)', 1, '8', 0),
    E(`s${s}d4_sent_aprox2`,'Sentadilla libre | barra alta (aproximación)', 1, '8', 0),
    E(`s${s}d4_sent_top`,   'Sentadilla libre | barra alta', 1, '6', 0),
    E(`s${s}d4_sent_bajada`,'Sentadilla libre | barra alta', 1, '6 con 10% menos del peso', 0),
    E(`s${s}d4_pm_rumano`,  'Peso muerto rumano', 3, '10', 0),
    E(`s${s}d4_patada`,     'Patada de glúteo en polea en cuadrupedia', 3, '16 (con 1" de pausa arriba)', 0),
    E(`s${s}d4_prensa_uni`, 'Prensa unilateral', 3, '8', 0),
    E(`s${s}d4_core_crunch`,'Core | Crunch abdominal con resistencia', 3, '20', 0),
  ];
  const D5_A = (s) => [
    E(`s${s}d5_mob_esc`,    'Movilidad | Movimientos escapulares', 2, '10', 0),
    E(`s${s}d5_press_banca`,'Press banca con barra', 3, '10', 0),
    E(`s${s}d5_remo_uni_1`, 'Remo unilateral con mancuernas', 1, '8', 0),
    E(`s${s}d5_remo_uni_2`, 'Remo unilateral con mancuernas', 1, '10', 0),
    E(`s${s}d5_remo_uni_3`, 'Remo unilateral con mancuernas', 1, '12', 0),
    E(`s${s}d5_remo_gironda`,'Remo gironda en polea', 3, '14', 0),
    E(`s${s}d5_elev_polea`, 'Elevaciones laterales en polea', 3, '14', 0),
    E(`s${s}d5_jalon_uni`,  'Jalón unilateral en polea', 3, '16', 0),
    E(`s${s}d5_ext_tri`,    'Extensión de tríceps en polea', 3, '14', 0),
    E(`s${s}d5_curl_bicep`, 'Curl de bíceps con mancuerna', 3, '14', 0),
  ];

  // ─────── BLOQUE B (S4): mismos ejercicios que A pero descansos cuantificados ───────
  const D1_B = (s) => [
    E(`s${s}d1_clamshells`,'Clamshells', 1, '10/lado', 0, 'Calentamiento'),
    E(`s${s}d1_spider`,    'HIIT | Spider lunges', 1, '20 en total', 0, 'Calentamiento'),
    E(`s${s}d1_abd_maq`,   'Abducción de cadera en máquina', 3, '16', 120),
    E(`s${s}d1_pm_aprox1`, 'Peso muerto convencional (aproximación)', 1, '8', 240),
    E(`s${s}d1_pm_aprox2`, 'Peso muerto convencional (aproximación)', 1, '8', 120),
    E(`s${s}d1_pm_top`,    'Peso muerto convencional', 1, '6', 0),
    E(`s${s}d1_pm_bajada`, 'Peso muerto convencional', 3, '6 con 10% menos del peso de la primera serie', 0),
    E(`s${s}d1_ht_rom`,    'Hip Thrust 1/2 ROM', 4, '10', 0),
    E(`s${s}d1_bulgara`,   'Sentadilla búlgara con peso', 4, '12/pierna', 120),
    E(`s${s}d1_pike`,      'Core | Pike plank en fitball', 4, '30"', 30),
  ];
  const D2_B = (s) => [
    E(`s${s}d2_curl_press`,'Curl de bíceps + press con resistencia', 1, '10', 0, 'Calentamiento'),
    E(`s${s}d2_elev_lat_r`,'Elevaciones laterales con resistencia', 1, '10', 0, 'Calentamiento'),
    E(`s${s}d2_press_mil1`,'Press militar con barra', 1, '8', 120),
    E(`s${s}d2_press_mil2`,'Press militar con barra', 3, '8 con 10% menos del peso', 0),
    E(`s${s}d2_press_inc`, 'Press banca inclinado con mancuernas', 3, '10', 120),
    E(`s${s}d2_remo_90`,   'Remo con barra a 90°', 3, '12', 120),
    E(`s${s}d2_elev_apoyo`,'Elevaciones laterales con apoyo en banco', 4, '12 con 1" de pausa arriba', 0),
    E(`s${s}d2_elev_front`,'Elevaciones frontales con disco', 3, '16', 60),
  ];
  const D4_B = (s) => [
    E(`s${s}d4_mob_bisagra`,'Movilidad - Bisagra de cadera', 1, '10', 0, 'Calentamiento'),
    E(`s${s}d4_lunge_drop`, 'HIIT | Lunge drop', 1, '20 en total', 0, 'Calentamiento'),
    E(`s${s}d4_curl_fem`,   'Curl de femoral', 3, '12', 120),
    E(`s${s}d4_sent_aprox1`,'Sentadilla libre | barra alta (aproximación)', 1, '8', 240),
    E(`s${s}d4_sent_aprox2`,'Sentadilla libre | barra alta (aproximación)', 1, '8', 120),
    E(`s${s}d4_sent_top`,   'Sentadilla libre | barra alta', 1, '6', 120),
    E(`s${s}d4_sent_bajada`,'Sentadilla libre | barra alta', 1, '6 con 10% menos del peso', 0),
    E(`s${s}d4_pm_rumano`,  'Peso muerto rumano', 3, '10', 120),
    E(`s${s}d4_patada`,     'Patada de glúteo en polea en cuadrupedia', 3, '16 (con 1" de pausa arriba)', 60),
    E(`s${s}d4_prensa_uni`, 'Prensa unilateral', 3, '8', 120),
    E(`s${s}d4_core_crunch`,'Core | Crunch abdominal con resistencia', 3, '20', 0),
  ];
  const D5_B = (s) => [
    E(`s${s}d5_mob_esc`,    'Movilidad | Movimientos escapulares', 2, '10', 0, 'Calentamiento'),
    E(`s${s}d5_press_banca`,'Press banca con barra', 3, '10', 120),
    E(`s${s}d5_remo_uni_1`, 'Remo unilateral con mancuernas', 1, '8', 60),
    E(`s${s}d5_remo_uni_2`, 'Remo unilateral con mancuernas', 1, '10', 60),
    E(`s${s}d5_remo_uni_3`, 'Remo unilateral con mancuernas', 1, '12', 60),
    E(`s${s}d5_remo_gironda`,'Remo gironda en polea', 3, '14', 120),
    E(`s${s}d5_elev_polea`, 'Elevaciones laterales en polea', 3, '14', 60),
    E(`s${s}d5_jalon_uni`,  'Jalón unilateral en polea', 3, '16', 120),
    E(`s${s}d5_ext_tri`,    'Extensión de tríceps en polea', 3, '14', 0),
    E(`s${s}d5_curl_bicep`, 'Curl de bíceps con mancuerna', 3, '14', 0),
  ];

  // ─────── BLOQUE C (S5-S8) ───────
  const D1_C = (s, zancadasReps) => [
    E(`s${s}d1_monster`,    'Monster walks', 1, '10/lado', 0, 'Calentamiento'),
    E(`s${s}d1_spider`,     'HIIT | Spider lunges', 1, '20 en total', 0, 'Calentamiento'),
    E(`s${s}d1_abd_polea`,  'Abducción en polea', 3, '16', 120),
    E(`s${s}d1_pm_sumo_a1`, 'Peso muerto sumo (aproximación)', 1, '8', 240),
    E(`s${s}d1_pm_sumo_a2`, 'Peso muerto sumo (aproximación)', 1, '8', 120),
    E(`s${s}d1_pm_sumo_top`,'Peso muerto sumo', 1, '6', 120),
    E(`s${s}d1_pm_sumo_bj`, 'Peso muerto sumo', 3, '6 con 10% menos del peso de la primera serie', 0),
    E(`s${s}d1_hiper`,      'Hiperextensión con disco', 3, '10', 0, 'con 2" de pausa arriba'),
    E(`s${s}d1_zancadas`,   'Zancadas con mancuernas', 3, `${zancadasReps} pasos en total`, zancadasReps === '20' ? 60 : 0),
    E(`s${s}d1_plancha_fb`, 'Core | Plancha en fitball', 4, '30"', 30),
  ];
  const D2_C = (s) => [
    E(`s${s}d2_curl_press`,'Curl de bíceps + press con resistencia', 1, '10', 0, 'Calentamiento'),
    E(`s${s}d2_elev_lat_r`,'Elevaciones laterales con resistencia', 1, '10', 0, 'Calentamiento'),
    E(`s${s}d2_press_mc1`, 'Press de hombro con mancuernas', 1, '8', 120),
    E(`s${s}d2_press_mc2`, 'Press de hombro con mancuernas', 3, '8 con 10% menos del peso', 0),
    E(`s${s}d2_press_b`,   'Press banca con barra', 3, '8', 120),
    E(`s${s}d2_jalon`,     'Jalón al pecho', 3, '12', 120),
    E(`s${s}d2_remo_ment`, 'Remo al mentón en polea', 4, '14', 0),
    E(`s${s}d2_flex_elev`, 'Flexiones con elevación', 2, 'Máximas', 60),
  ];
  const D4_C = (s) => [
    E(`s${s}d4_mob_bisagra`,'Movilidad - Bisagra de cadera', 1, '10', 0, 'Calentamiento'),
    E(`s${s}d4_lunge_drop`, 'HIIT | Lunge drop', 1, '20 en total', 0, 'Calentamiento'),
    E(`s${s}d4_curl_fem`,   'Curl de femoral', 3, '12', 120),
    E(`s${s}d4_bulg_mp_1`,  'Sentadilla búlgara en multipower', 2, '8', 120),
    E(`s${s}d4_bulg_mp_2`,  'Sentadilla búlgara en multipower', 2, '10', 60),
    E(`s${s}d4_buenos`,     'Buenos días', 3, '12', 120),
    E(`s${s}d4_ht`,         'Hip Thrust', 3, '10 (con 2" de pausa arriba)', 0),
    E(`s${s}d4_ext_cuad`,   'Extensión de cuádriceps', 3, '16', 0),
    E(`s${s}d4_core_elev`,  'Core | Elevación de piernas en banco', 3, '20', 0),
  ];
  const D5_C = (s) => [
    E(`s${s}d5_mob_esc`,    'Movilidad | Movimientos escapulares', 2, '10', 0, 'Calentamiento'),
    E(`s${s}d5_press_mc`,   'Press banca con mancuernas', 3, '10', 120),
    E(`s${s}d5_remo_seal_1`,'Remo seal', 1, '8', 60),
    E(`s${s}d5_remo_seal_2`,'Remo seal', 1, '10', 60),
    E(`s${s}d5_remo_seal_3`,'Remo seal', 1, '12', 60),
    E(`s${s}d5_remo_uni_p`, 'Remo unilateral en polea', 3, '14', 120),
    E(`s${s}d5_elev_drop`,  'Elevaciones laterales - drop set', 3, '14', 60),
    E(`s${s}d5_remo_trx`,   'Remo en TRX', 3, '8', 0),
    E(`s${s}d5_skull`,      'Skull crusher', 3, '14', 0),
    E(`s${s}d5_curl_conc`,  'Curl concentrado', 3, '14', 0),
  ];

  // ─────── BLOQUE D (S9-S12) ───────
  const D1_D = (s, coreEx, coreId) => [
    E(`s${s}d1_monster`,   'Monster walks', 1, '10/lado', 0, 'Calentamiento'),
    E(`s${s}d1_spider`,    'HIIT | Spider lunges', 1, '20 en total', 0, 'Calentamiento'),
    E(`s${s}d1_abd_maq`,   'Abducción de cadera en máquina', 3, '16', 120),
    E(`s${s}d1_ht_a1`,     'Hip Thrust (aproximación)', 1, '8', 240),
    E(`s${s}d1_ht_a2`,     'Hip Thrust (aproximación)', 1, '8', 120),
    E(`s${s}d1_ht_top`,    'Hip Thrust', 1, '6', 120),
    E(`s${s}d1_ht_bj`,     'Hip Thrust', 3, '6 con 10% menos del peso de la primera serie', 0),
    E(`s${s}d1_pm_uni`,    'Peso muerto rumano unilateral con mancuernas', 3, '10', 120),
    E(`s${s}d1_bulg_mp_1`, 'Sentadilla búlgara en multipower', 2, '8', 60),
    E(`s${s}d1_bulg_mp_2`, 'Sentadilla búlgara en multipower', 1, '12', 0),
    E(`s${s}d1_${coreId}`, coreEx, 3, '8', 0),
  ];
  const D2_D = (s) => [
    E(`s${s}d2_curl_press`,'Curl de bíceps + press con resistencia', 1, '10', 0, 'Calentamiento'),
    E(`s${s}d2_elev_lat_r`,'Elevaciones laterales con resistencia', 1, '10', 0, 'Calentamiento'),
    E(`s${s}d2_press_lm`,  'Press landmine', 1, '8', 120),
    E(`s${s}d2_press_inc`, 'Press banca inclinado con mancuernas', 3, '10', 120),
    E(`s${s}d2_remo_seal`, 'Remo seal', 3, '12', 120),
    E(`s${s}d2_elev_lat_mc`,'Elevaciones laterales con mancuernas', 4, '14', 0),
    E(`s${s}d2_elev_front`,'Elevaciones frontales con disco', 3, '12', 60),
  ];
  const D4_D = (s) => [
    E(`s${s}d4_mob_bisagra`,'Movilidad - Bisagra de cadera', 1, '10', 0, 'Calentamiento'),
    E(`s${s}d4_lunge_drop`, 'HIIT | Lunge drop', 1, '20 en total', 0, 'Calentamiento'),
    E(`s${s}d4_curl_fem`,   'Curl de femoral', 3, '12', 120),
    E(`s${s}d4_sent_front`, 'Sentadilla frontal', 3, '10', 60),
    E(`s${s}d4_pm_rumano`,  'Peso muerto rumano', 3, '12', 120),
    E(`s${s}d4_glute_br`,   'Glute bridge con barra', 3, '10 (con 2" de pausa arriba)', 0),
    E(`s${s}d4_cossak`,     'Sentadilla Cossak con mancuerna', 3, '10/lado', 0),
    E(`s${s}d4_elev_pier`,  'Elevación de piernas colgada', 3, '20', 0),
  ];
  const D5_D = (s) => [
    E(`s${s}d5_mob_esc`,    'Movilidad | Movimientos escapulares', 2, '10', 0, 'Calentamiento'),
    E(`s${s}d5_press_maq`,  'Press militar en máquina', 3, '10', 120),
    E(`s${s}d5_remo_90_1`,  'Remo con barra a 90°', 1, '8', 60),
    E(`s${s}d5_remo_90_2`,  'Remo con barra a 90°', 1, '10', 60),
    E(`s${s}d5_remo_90_3`,  'Remo con barra a 90°', 1, '12', 60),
    E(`s${s}d5_jalon_uni`,  'Jalón unilateral en polea', 3, '16', 120),
    E(`s${s}d5_elev_uni`,   'Elevaciones unilaterales', 3, '10/lado', 60),
    E(`s${s}d5_delt_post`,  'Deltoides posterior en máquina', 3, '18', 0),
    E(`s${s}d5_ext_tri_tn`, 'Extensión de tríceps trasnuca con mancuerna', 3, '14', 0),
    E(`s${s}d5_curl_arana`, 'Curl araña', 3, '14', 0),
  ];

  // ─────── DÍAS 7 — Full body opcional (varía por semana) ───────
  // S1, S4: variante "Burpees + Pistol + Australian + KB swing + Fondos + Elev piernas banco"
  const D7_var1 = (s, coreEx, coreId, coreReps, coreRest) => [
    E(`s${s}d7_burpees`,  'HIIT | Burpee sin salto', 3, '30"', 30),
    E(`s${s}d7_pistol`,   'Pistol squats con ayuda', 2, '8/pierna', 0),
    E(`s${s}d7_aussie`,   'Australian chin ups', 3, '10', 0),
    E(`s${s}d7_kb_swing`, 'Kettlebell swing', 3, '12', 0),
    E(`s${s}d7_fondos`,   'Fondos de tríceps en banco', 3, '10', 0),
    E(`s${s}d7_${coreId}`,coreEx, 4, coreReps || '20', coreRest || 0),
  ];
  // S2, S8, S11: variante "Burpees + Landmine thruster + Ball pushes + ..."
  const D7_var2 = (s, includeAccessory) => [
    E(`s${s}d7_burpees`,    'HIIT | Burpees', 3, '30"', 30),
    E(`s${s}d7_landmine`,   'Landmine thruster', 2, '8', 0),
    E(`s${s}d7_ball`,       'Ball pushes', 3, '10', 0),
    ...(includeAccessory ? [
      E(`s${s}d7_aussie_pu`,'Australian pull-ups', 3, '12', 0),
      E(`s${s}d7_gemelo`,   'Gemelo en prensa', 3, '30', 0),
      E(`s${s}d7_bicycle`,  'Core | Bicycle twist', 3, '30"', 30),
    ] : []),
  ];
  // S3, S6, S9, S12: variante "Rocket launch taps + Thruster + ..."
  const D7_var3 = (s, opts) => [
    E(`s${s}d7_rocket`,   'HIIT | Rocket launch taps', 3, '30"', 30),
    E(`s${s}d7_thruster`, 'Thruster con mancuernas', 2, '8', 0),
    E(`s${s}d7_flex`,     opts.flex || 'Flexiones', 3, '10', 0),
    E(`s${s}d7_dom_gomas`,'Dominadas con gomas', 3, opts.domReps || '10', 0),
    ...(opts.calf ? [E(`s${s}d7_calf`, 'HIIT | Calf jumps', 3, '30"', 30)] : []),
    ...(opts.gemelo ? [E(`s${s}d7_gemelo`, 'Gemelo en prensa', 3, '30', 0)] : []),
    E(`s${s}d7_${opts.coreId}`, opts.coreEx, opts.coreSets || 4, opts.coreReps || '20', opts.coreRest != null ? opts.coreRest : 0),
  ];

  const W = {};
  // BLOQUE A
  W[1]  = { d1: D1_A(1, 3, 3, 'Core | Plancha con manos distanciadas', 'plancha'), d2: D2_A(1), d4: D4_A(1), d5: D5_A(1),
            d7: D7_var1(1, 'Core | Elevación de piernas en banco', 'elev_pier_b') };
  W[2]  = { d1: D1_A(2, 3, 3, 'Core | Pike plank en fitball', 'pike'),
            d2: D2_A(2),  // Imágenes faltan en source — se reusa el patrón del bloque A (= S1 D2)
            d4: D4_A(2), d5: D5_A(2),
            d7: D7_var2(2, false) };
  W[3]  = { d1: D1_A(3, 4, 4, 'Core | Plancha con manos distanciadas', 'plancha'), d2: D2_A(3), d4: D4_A(3), d5: D5_A(3),
            d7: D7_var3(3, { coreEx: 'Core | Bicycle twist', coreId: 'bicycle', coreSets: 4, coreReps: '20', calf: true }) };
  // BLOQUE B
  W[4]  = { d1: D1_B(4), d2: D2_B(4), d4: D4_B(4), d5: D5_B(4),
            d7: D7_var1(4, 'Core | Elevación de piernas en banco', 'elev_pier_b') };
  // BLOQUE C
  W[5]  = { d1: D1_C(5, '20'), d2: D2_C(5), d4: D4_C(5), d5: D5_C(5),
            d7: [
              E('s5d7_burpees',   'HIIT | Burpees', 3, '30"', 30),
              E('s5d7_landmine',  'Landmine thruster', 2, '8', 0),
              E('s5d7_aussie_pu', 'Australian pull-ups', 3, '10', 0),
              E('s5d7_ball',      'Ball pushes', 3, '12', 0),
              E('s5d7_gemelo',    'Gemelo en prensa', 3, '10', 0),
              E('s5d7_mc',        'Core | Mountain climbers + toques de rodilla', 3, '30"', 30),
            ] };
  W[6]  = { d1: D1_C(6, '40'), d2: D2_C(6), d4: D4_C(6), d5: D5_C(6),
            d7: D7_var3(6, { coreEx: 'Core | Plancha inversa con toques de rodilla', coreId: 'plancha_inv', coreSets: 3, coreReps: '30"', coreRest: 30, gemelo: true }) };
  W[7]  = { d1: D1_C(7, '40'), d2: D2_C(7), d4: D4_C(7), d5: D5_C(7),
            d7: D7_var1(7, 'Core | McGuill crunch', 'mcguill', '14', 0) };
  W[8]  = { d1: D1_C(8, '40'), d2: D2_C(8), d4: D4_C(8), d5: D5_C(8),
            d7: D7_var2(8, true) };
  // BLOQUE D
  W[9]  = { d1: D1_D(9,  'Plancha con toques de hombro', 'plank_hombro'), d2: D2_D(9), d4: D4_D(9), d5: D5_D(9),
            d7: D7_var3(9, { flex: 'Flexiones de diamante', coreEx: 'Core | Kick sits tap', coreId: 'kicksits', coreSets: 3, coreReps: '30"', coreRest: 30, domReps: '12', gemelo: true }) };
  W[10] = { d1: D1_D(10, 'Core | Mountain climbers + toques de rodilla', 'mc'), d2: D2_D(10), d4: D4_D(10), d5: D5_D(10),
            d7: [
              E('s10d7_burpees', 'HIIT | Burpee sin salto', 3, '30"', 30),
              E('s10d7_pistol',  'Pistol squat con apoyo a dos manos', 2, '8', 0),
              E('s10d7_aussie',  'Australian chin ups', 3, '10', 0),
              E('s10d7_kb_swing','Kettlebell swing', 3, '12', 0),
              E('s10d7_fondos',  'Fondos de tríceps', 3, '30', 0),
              E('s10d7_russian', 'Core | Russian twist con disco', 3, '30"', 30),
            ] };
  W[11] = { d1: D1_D(11, 'Plancha con toques de hombro', 'plank_hombro'), d2: D2_D(11), d4: D4_D(11), d5: D5_D(11),
            d7: D7_var2(11, true) };
  W[12] = { d1: D1_D(12, 'Core | Mountain climbers + toques de rodilla', 'mc'), d2: D2_D(12), d4: D4_D(12), d5: D5_D(12),
            d7: D7_var3(12, { flex: 'Flexiones de diamante', coreEx: 'Core | Plancha inversa con toques de rodilla', coreId: 'plancha_inv', coreSets: 3, coreReps: '30"', coreRest: 30, domReps: '12', gemelo: true }) };

  WORKOUT_PLANS.fuertes_intermedias = {
    id: 'fuertes_intermedias',
    name: 'Fuertes Intermedias',
    planType: 'phased',
    weeks: 12,
    description: 'Plan 12 semanas — fuerza intermedia 5 días/sem (D1, D2, D4, D5, D7). Bloque A (S1-S3) → Transición B (S4) → Bloque C (S5-S8) → Bloque D avanzado (S9-S12). D3 y D6 descanso. D7 full body opcional.',
    trainingDays: [1, 2, 4, 5, 7],
    dayMeta: {
      1: { name: 'Piernas',   type: 'strength', muscleGroups: ['Piernas', 'Glúteos'] },
      2: { name: 'Torso',     type: 'strength', muscleGroups: ['Pecho', 'Espalda', 'Hombros'] },
      4: { name: 'Piernas',   type: 'strength', muscleGroups: ['Piernas', 'Glúteos'] },
      5: { name: 'Torso',     type: 'strength', muscleGroups: ['Pecho', 'Espalda', 'Hombros'] },
      7: { name: 'Full Body', type: 'strength', muscleGroups: ['Full body', 'Cardio'] }
    },
    weeklySchedule: Array.from({ length: 12 }, (_, i) => {
      const w = W[i + 1];
      return { 1: w.d1, 2: w.d2, 4: w.d4, 5: w.d5, 7: w.d7 };
    })
  };
})();

/* ══════════════ EMPEZANDO EN CALISTENIA (29 semanas — 8 niveles) ══════════════ */
(function () {
  const E = (id, name, sets, reps, rest, notes) => _ex(`ec_${id}`, name, sets, reps, rest, notes);

  // Movilidad inicial reutilizable (todos los niveles 1-8)
  const MOB = (sid) => [
    E(`${sid}_mob_cervic`,  'Movilidad - Cervicales', 2, '15', 0),
    E(`${sid}_mob_flexesc`, 'Movilidad - Flexiones escapulares', 2, '15', 0),
    E(`${sid}_mob_super`,   'Movilidad - Supermans', 2, '15', 0),
  ];

  // ─────── NIVEL 1 (S1-S4) ───────
  // Progresión: Australian/Flex.elev S1=2, S2=3, S3=4, S4=5 (D1/D3) / 6 (D5)
  const NVL1_D1 = (s, aussieReps, flexReps) => [
    ...MOB(`s${s}d1`),
    E(`s${s}d1_hollow`,    'Core | Hollow hold', 2, '30"', 60),
    E(`s${s}d1_aussie`,    'Australian pull-ups', 4, `${aussieReps} diagonales`, 120),
    E(`s${s}d1_flex_elev`, 'Flexiones con elevación', 3, `${flexReps}`, 120),
    E(`s${s}d1_flex_rod`,  'Flexiones de rodillas', 3, '5', 90),
    E(`s${s}d1_fondos`,    'Fondos de tríceps en banco', 2, '8', 120),
    E(`s${s}d1_jalon`,     'Jalón al pecho', 2, '10', 90, 'Biserie A'),
    E(`s${s}d1_press_uni`, 'Press de hombro unilateral', 2, '10', 90, 'Biserie A'),
    E(`s${s}d1_ext_tri`,   'Extensión de tríceps en polea', 2, '10', 90, 'Biserie B'),
    E(`s${s}d1_mangu`,     'Movilidad - Manguitos rotadores con resistencia', 2, '10', 90, 'Biserie B'),
  ];
  const NVL1_D3 = (s, aussieReps, flexReps) => [
    ...MOB(`s${s}d3`),
    E(`s${s}d3_plancha`,   'Core | Plancha', 1, '30"', 60),
    E(`s${s}d3_aussie`,    'Australian pull-ups', 4, `${aussieReps} verticales`, 120),
    E(`s${s}d3_flex_elev`, 'Flexiones con elevación', 3, `${flexReps}`, 120),
    E(`s${s}d3_flex_rod`,  'Flexiones de rodillas', 3, '5', 90),
    E(`s${s}d3_elev_front`,'Elevaciones frontales con mancuernas', 2, '8', 90, 'Biserie A'),
    E(`s${s}d3_ext_tri`,   'Extensión de tríceps en polea', 2, '12', 90, 'Biserie A'),
    E(`s${s}d3_remo_90`,   'Remo a 90 con mancuernas', 2, '10', 90, 'Biserie B'),
    E(`s${s}d3_curl_bicep`,'Curl de bíceps con mancuerna', 2, '8', 90, 'Biserie B'),
  ];
  const NVL1_D5 = (s, aussieReps, flexRodSets) => [
    ...MOB(`s${s}d5`),
    E(`s${s}d5_plancha`,   'Core | Plancha', 2, '15', 60),
    E(`s${s}d5_flex_rod`,  'Flexiones de rodillas', flexRodSets, '5', 120),
    E(`s${s}d5_aussie`,    'Australian pull-ups', 4, `${aussieReps} verticales`, 120),
    E(`s${s}d5_fondos`,    'Fondos de tríceps en banco', 2, '8', 120),
    E(`s${s}d5_jalon`,     'Jalón al pecho', 2, '10', 90, 'Biserie A'),
    E(`s${s}d5_press_uni`, 'Press de hombro unilateral', 2, '10', 90, 'Biserie A'),
    E(`s${s}d5_elev_lat`,  'Elevaciones laterales con mancuernas', 2, '6', 90, 'Biserie B'),
    E(`s${s}d5_curl_bicep`,'Curl de bíceps con mancuerna', 2, '8', 90, 'Biserie B'),
    E(`s${s}d5_ext_tri`,   'Extensión de tríceps en polea', 2, '10', 90),
    E(`s${s}d5_mangu`,     'Movilidad - Manguitos rotadores con resistencia', 2, '8', 90),
  ];

  // ─────── NIVEL 2 (S5-S8) ───────
  // Progresión Dominada escapular: S5=3, S6=4, S7=5, S8=5
  // Australian D1/D3 verticales: S5=3, S6=3, S7=4, S8=4
  const NVL2_D1 = (s, escReps, aussieReps) => [
    ...MOB(`s${s}d1`),
    E(`s${s}d1_hollow`,     'Core | Hollow hold', 2, '30"', 60),
    E(`s${s}d1_dom_esc`,    'Dominada escapular', 4, `${escReps}`, 120),
    E(`s${s}d1_aussie`,     'Australian pull-ups', 4, `${aussieReps} verticales`, 120),
    E(`s${s}d1_flex_elev`,  'Flexiones con elevación', 3, '5', 150),
    E(`s${s}d1_flex_neg`,   'Flexiones de rodillas negativas', 3, '2 (3 segundos)', 150),
    E(`s${s}d1_colgar`,     'Colgarse en la barra', 2, '20"', 60),
    E(`s${s}d1_jalon`,      'Jalón al pecho', 2, '10', 90, 'Biserie A'),
    E(`s${s}d1_press_uni`,  'Press de hombro unilateral', 2, '10', 90, 'Biserie A'),
  ];
  const NVL2_D3 = (s, aussieReps) => [
    ...MOB(`s${s}d3`),
    E(`s${s}d3_plancha`,    'Core | Plancha', 2, '30"', 60),
    E(`s${s}d3_aussie`,     'Australian pull-ups', 4, `${aussieReps} verticales`, 120),
    E(`s${s}d3_flex_elev`,  'Flexiones con elevación', 3, '4', 150),
    E(`s${s}d3_flex_neg`,   'Flexiones negativas', 3, '2 (3 segundos)', 150),
    E(`s${s}d3_colgar`,     'Colgarse en la barra', 2, '20"', 90),
    E(`s${s}d3_ext_tri`,    'Extensión de tríceps en polea', 2, '10', 90, 'Biserie A'),
    E(`s${s}d3_mangu`,      'Movilidad - Manguitos rotadores con resistencia', 2, '8', 90, 'Biserie A'),
  ];
  const NVL2_D5 = (s) => [
    ...MOB(`s${s}d5`),
    E(`s${s}d5_plancha`,    'Core | Plancha', 2, '30"', 60),
    E(`s${s}d5_dom_esc`,    'Dominada escapular', 4, '4', 120),
    E(`s${s}d5_aussie`,     'Australian pull-ups', 4, '4 horizontales', 120),
    E(`s${s}d5_flex_elev`,  'Flexiones con elevación', 3, '4', 150),
    E(`s${s}d5_fondos`,     'Fondos de tríceps en banco', 2, '10', 60),
    E(`s${s}d5_elev_front`, 'Elevaciones frontales con mancuernas', 2, '8', 90, 'Biserie A'),
    E(`s${s}d5_elev_lat`,   'Elevaciones laterales con mancuernas', 2, '12', 90, 'Biserie A'),
    E(`s${s}d5_remo_90`,    'Remo a 90 con mancuernas', 2, '10', 90, 'Biserie B'),
    E(`s${s}d5_curl_bicep`, 'Curl de bíceps con mancuerna', 2, '8', 90, 'Biserie B'),
  ];

  // ─────── NIVEL 3 (S9-S12) ───────
  const NVL3_D1 = (s) => [
    ...MOB(`s${s}d1`),
    E(`s${s}d1_hollow`,     'Core | Hollow hold', 2, '30"', 60),
    E(`s${s}d1_dom_iso`,    'Dominada Isométrica Arriba', 3, '5 segundos', 60),
    E(`s${s}d1_dom_esc`,    'Dominada escapular', 3, '5', 120),
    E(`s${s}d1_dom_gomas`,  'Dominadas con gomas', 3, '3', 120),
    E(`s${s}d1_flex_neg`,   'Flexiones de rodillas negativas', 5, '1 (3 segundos)', 20),
    E(`s${s}d1_flex_elev`,  'Flexiones con elevación', 3, '6', 150),
    E(`s${s}d1_jalon`,      'Jalón al pecho', 2, '10', 90, 'Biserie A'),
    E(`s${s}d1_press_uni`,  'Press de hombro unilateral', 2, '10', 90, 'Biserie A'),
  ];
  const NVL3_D3 = (s) => [
    ...MOB(`s${s}d3`),
    E(`s${s}d3_plancha`,    'Core | Plancha', 2, '15', 0),
    E(`s${s}d3_flex_no_rom`,'Flexiones (sin rango completo)', 3, '3', 150),
    E(`s${s}d3_flex_neg`,   'Flexiones negativas', 3, '2 (3 segundos)', 150),
    E(`s${s}d3_aussie`,     'Australian pull-ups', 3, '5 horizontales', 120),
    E(`s${s}d3_colgar`,     'Colgarse en la barra', 2, '30"', 60),
    E(`s${s}d3_ext_tri`,    'Extensión de tríceps en polea', 2, '10', 90, 'Biserie A'),
    E(`s${s}d3_mangu`,      'Movilidad - Manguitos rotadores con resistencia', 2, '8', 90, 'Biserie A'),
  ];
  const NVL3_D5 = (s) => [
    ...MOB(`s${s}d5`),
    E(`s${s}d5_plancha`,    'Core | Plancha', 2, '15', 0),
    E(`s${s}d5_dom_iso`,    'Dominada Isométrica Arriba', 3, '5 segundos', 60),
    E(`s${s}d5_flex_no_rom`,'Flexiones (sin rango completo)', 3, '3', 150),
    E(`s${s}d5_dom_gomas`,  'Dominadas con gomas', 3, '3', 120),
    E(`s${s}d5_dom_esc`,    'Dominada escapular', 2, '5', 60),
    E(`s${s}d5_aussie`,     'Australian pull-ups', 2, '6 horizontales', 120),
    E(`s${s}d5_fondos`,     'Fondos de tríceps en banco', 2, '10', 60),
    E(`s${s}d5_remo_90`,    'Remo a 90 con mancuernas', 2, '10', 90, 'Biserie A'),
    E(`s${s}d5_curl_bicep`, 'Curl de bíceps con mancuerna', 2, '8', 90, 'Biserie A'),
  ];

  // ─────── NIVEL 4 (S13-S16) ───────
  const NVL4_D1 = (s) => [
    ...MOB(`s${s}d1`),
    E(`s${s}d1_hollow`,     'Core | Hollow hold', 2, '30"', 60),
    E(`s${s}d1_dom_neg`,    'Dominadas negativas', 3, '1 (4 segundos)', 90),
    E(`s${s}d1_dom_iso`,    'Dominada Isométrica Arriba', 2, '7 segundos', 60),
    E(`s${s}d1_dom_gomas`,  'Dominadas con gomas', 2, '5', 90),
    E(`s${s}d1_dom_esc`,    'Dominada escapular', 2, '5', 120),
    E(`s${s}d1_colgar`,     'Colgarse en la barra', 2, '45 segundos', 90),
    E(`s${s}d1_jalon`,      'Jalón al pecho', 2, '12', 90, 'Biserie A'),
    E(`s${s}d1_press_uni`,  'Press de hombro unilateral', 2, '12', 90, 'Biserie A'),
    E(`s${s}d1_remo_90`,    'Remo a 90 con mancuernas', 2, '16', 90, 'Biserie A'),
  ];
  const NVL4_D3 = (s) => [
    ...MOB(`s${s}d3`),
    E(`s${s}d3_plancha`,    'Core | Plancha', 2, '45"', 60),
    E(`s${s}d3_fondo_iso`,  'Fondo Isométrico arriba', 3, '20 segundos', 20),
    E(`s${s}d3_flex_max`,   'Flexiones', 2, 'Las que puedas', 150),
    E(`s${s}d3_flex_neg`,   'Flexiones negativas', 2, '2 (3 segundos)', 150, 'Biserie A'),
    E(`s${s}d3_flex_iso_ab`,'Flexión Isométrica Abajo', 2, '2 (3 segundos)', 150, 'Biserie A'),
    E(`s${s}d3_flex_elev`,  'Flexiones con elevación', 2, '8', 150),
    E(`s${s}d3_aussie`,     'Australian pull-ups', 3, '5 horizontales', 120),
    E(`s${s}d3_ext_tri`,    'Extensión de tríceps en polea', 2, '16', 90, 'Biserie B'),
    E(`s${s}d3_mangu`,      'Movilidad - Manguitos rotadores con resistencia', 2, '10', 90, 'Biserie B'),
  ];
  const NVL4_D5 = (s) => [
    ...MOB(`s${s}d5`),
    E(`s${s}d5_plancha`,    'Core | Plancha', 2, '45"', 60),
    E(`s${s}d5_dom_neg`,    'Dominadas negativas', 3, '1 (4 segundos)', 90),
    E(`s${s}d5_dom_iso`,    'Dominada Isométrica Arriba', 2, '7 segundos', 60),
    E(`s${s}d5_flex_max`,   'Flexiones', 2, 'Las que puedas', 150),
    E(`s${s}d5_flex_neg`,   'Flexiones negativas', 2, '2 (3 segundos)', 150, 'Biserie A'),
    E(`s${s}d5_flex_iso_ab`,'Flexión Isométrica Abajo', 2, '2 (3 segundos)', 150, 'Biserie A'),
    E(`s${s}d5_fondo_iso`,  'Fondo Isométrico arriba', 3, '20 segundos', 60),
    E(`s${s}d5_dom_gomas`,  'Dominadas con gomas', 3, '5', 90),
    E(`s${s}d5_colgar`,     'Colgarse en la barra', 1, '45 segundos', 90),
  ];

  // ─────── NIVEL 5 (S17-S20) ───────
  const NVL5_D1 = (s) => [
    ...MOB(`s${s}d1`),
    E(`s${s}d1_hollow`,     'Core | Hollow hold', 2, '45"', 60),
    E(`s${s}d1_dom_iso90`,  'Dominadas isométricas a 90 grados', 4, '3 segundos', 120),
    E(`s${s}d1_dom_iso`,    'Dominada Isométrica Arriba', 3, '3 segundos', 120, 'Biserie A'),
    E(`s${s}d1_dom_neg`,    'Dominadas negativas', 3, '3 segundos', 120),
    E(`s${s}d1_dom_gomas`,  'Dominadas con gomas', 3, '6', 90),
    E(`s${s}d1_colgar`,     'Colgarse en la barra', 2, '45 segundos (con arrancadas)', 90),
    E(`s${s}d1_jalon`,      'Jalón al pecho', 2, '16', 90, 'Biserie B'),
    E(`s${s}d1_press_uni`,  'Press de hombro unilateral', 2, '12', 90, 'Biserie B'),
    E(`s${s}d1_remo_90`,    'Remo a 90 con mancuernas', 2, '20', 90, 'Biserie B'),
  ];
  const NVL5_D3 = (s) => [
    ...MOB(`s${s}d3`),
    E(`s${s}d3_plancha`,    'Core | Plancha', 2, '50"', 60),
    E(`s${s}d3_dom_iso90`,  'Dominadas isométricas a 90 grados', 3, '3 segundos', 120),
    E(`s${s}d3_neg_fondo`,  'Negativa de Fondo', 5, '2 (4 segundos)', 120),
    E(`s${s}d3_fondos_goma`,'Fondos con goma', 3, '6', 120),
    E(`s${s}d3_flex_max`,   'Flexiones', 3, '6', 150),
    E(`s${s}d3_flex_neg`,   'Flexiones negativas', 2, '3 segundos', 150, 'Biserie A'),
    E(`s${s}d3_flex_iso_ab`,'Flexión Isométrica Abajo', 2, '3 segundos', 150, 'Biserie A'),
    E(`s${s}d3_aussie`,     'Australian pull-ups', 2, '8', 120),
    E(`s${s}d3_ext_tri`,    'Extensión de tríceps en polea', 2, '20', 90, 'Biserie B'),
    E(`s${s}d3_mangu`,      'Movilidad - Manguitos rotadores con resistencia', 2, '12', 90, 'Biserie B'),
  ];
  const NVL5_D5 = (s) => [
    ...MOB(`s${s}d5`),
    E(`s${s}d5_plancha`,    'Core | Plancha', 2, '50"', 60),
    E(`s${s}d5_dom_neg`,    'Dominadas negativas', 2, '2 (5 segundos)', 90),
    E(`s${s}d5_neg_fondo`,  'Negativa de Fondo', 5, '2 (4 segundos)', 20),
    E(`s${s}d5_fondos_goma`,'Fondos con goma', 3, '6', 120),
    E(`s${s}d5_flex_max`,   'Flexiones', 3, '6', 150),
    E(`s${s}d5_flex_neg`,   'Flexiones negativas', 2, '3 segundos', 150, 'Biserie B'),
    E(`s${s}d5_flex_iso_ab`,'Flexión Isométrica Abajo', 2, '3 segundos', 150, 'Biserie B'),
    E(`s${s}d5_dom_gomas`,  'Dominadas con gomas', 2, '6', 90),
    E(`s${s}d5_colgar`,     'Colgarse en la barra', 1, '45 segundos (con arrancadas)', 90),
  ];

  // ─────── NIVEL 6 (S21-S24) ───────
  const NVL6_D1 = (s) => [
    ...MOB(`s${s}d1`),
    E(`s${s}d1_hollow`,      'Core | Hollow hold', 2, '30"', 60),
    E(`s${s}d1_dom_minisalto`, 'Dominadas con mini salto', 4, 'Las que puedas', 120),
    E(`s${s}d1_dom_iso`,      'Dominada Isométrica Arriba', 2, '3 segundos', 150, 'Biserie A'),
    E(`s${s}d1_dom_iso90`,    'Dominadas isométricas a 90 grados', 2, '3 segundos', 150, 'Biserie A'),
    E(`s${s}d1_dom_neg`,      'Dominadas negativas', 2, '3 segundos', 150, 'Biserie A'),
    E(`s${s}d1_dom_gomas`,    'Dominadas con gomas', 3, '6', 90),
    E(`s${s}d1_aussie`,       'Australian pull-ups', 3, '10 horizontales', 120),
    E(`s${s}d1_colgar`,       'Colgarse en la barra', 2, '30 segundos (con arrancadas)', 90),
    E(`s${s}d1_jalon`,        'Jalón al pecho', 2, '16', 90, 'Biserie B'),
    E(`s${s}d1_press_uni`,    'Press de hombro unilateral', 2, '12', 90, 'Biserie B'),
    E(`s${s}d1_remo_90`,      'Remo a 90 con mancuernas', 2, '20', 90, 'Biserie B'),
    E(`s${s}d1_curl_bicep`,   'Curl de bíceps con mancuerna', 2, '12', 90, 'Biserie B'),
  ];
  const NVL6_D3 = (s) => [
    ...MOB(`s${s}d3`),
    E(`s${s}d3_plancha`,      'Core | Plancha', 2, '50"', 60),
    E(`s${s}d3_dom_iso`,      'Dominada Isométrica Arriba', 2, '3 segundos', 150, 'Biserie A'),
    E(`s${s}d3_dom_iso90`,    'Dominadas isométricas a 90 grados', 2, '3 segundos', 150, 'Biserie A'),
    E(`s${s}d3_dom_neg`,      'Dominadas negativas', 2, '3 segundos', 150, 'Biserie A'),
    E(`s${s}d3_neg_fondo`,    'Negativa de Fondo', 2, '2 (4 segundos)', 150, 'Biserie B'),
    E(`s${s}d3_fondo_iso`,    'Fondo Isométrico arriba', 2, '2 (4 segundos)', 150, 'Biserie B'),
    E(`s${s}d3_dom_gomas`,    'Dominadas con gomas', 2, '6', 90),
    E(`s${s}d3_fondos_goma`,  'Fondos con goma', 2, '6', 120),
    E(`s${s}d3_flex_max`,     'Flexiones', 2, '6', 150),
    E(`s${s}d3_flex_neg`,     'Flexiones negativas', 2, '2 (3 segundos)', 150, 'Biserie B'),
  ];
  const NVL6_D5 = (s) => [
    ...MOB(`s${s}d5`),
    E(`s${s}d5_plancha`,      'Core | Plancha', 2, '50"', 60),
    E(`s${s}d5_neg_fondo`,    'Negativa de Fondo', 2, '2 (4 segundos)', 150, 'Biserie A'),
    E(`s${s}d5_fondo_iso`,    'Fondo Isométrico arriba', 2, '2 (4 segundos)', 150, 'Biserie A'),
    E(`s${s}d5_flex_max`,     'Flexiones', 2, '6', 150),
    E(`s${s}d5_flex_neg`,     'Flexiones negativas', 2, '2 (3 segundos)', 150, 'Biserie B'),
    E(`s${s}d5_flex_iso_ab`,  'Flexión Isométrica Abajo', 2, '2 (3 segundos)', 150, 'Biserie B'),
    E(`s${s}d5_dom_gomas`,    'Dominadas con gomas', 2, '6', 90),
    E(`s${s}d5_fondos_goma`,  'Fondos con goma', 2, '6', 120),
    E(`s${s}d5_colgar`,       'Colgarse en la barra', 1, '45 segundos (con arrancadas)', 90),
  ];

  // ─────── NIVEL 7 (S25-S28) ───────
  const NVL7_D1 = (s) => [
    ...MOB(`s${s}d1`),
    E(`s${s}d1_hollow`,       'Core | Hollow hold', 2, '30"', 60),
    E(`s${s}d1_dom_full`,     'Dominadas', 3, '1 (intento)', 150),
    E(`s${s}d1_dom_minisalto`, 'Dominadas con mini salto', 3, '3', 120),
    E(`s${s}d1_dom_no_rom`,   'Dominadas sin rango completo', 3, '3', 120),
    E(`s${s}d1_dom_iso`,      'Dominada Isométrica Arriba', 2, '5 segundos', 150, 'Biserie A'),
    E(`s${s}d1_dom_iso90`,    'Dominadas isométricas a 90 grados', 2, '5 segundos', 150, 'Biserie A'),
    E(`s${s}d1_dom_neg`,      'Dominadas negativas', 2, '3 segundos', 150, 'Biserie A'),
    E(`s${s}d1_dom_gomas`,    'Dominadas con gomas', 3, '6', 90),
    E(`s${s}d1_aussie`,       'Australian pull-ups', 3, '10', 120),
    E(`s${s}d1_colgar`,       'Colgarse en la barra', 2, '30 segundos (con arrancadas)', 90),
    E(`s${s}d1_curl_bicep`,   'Curl de bíceps con mancuerna', 2, '12', 90, 'Biserie B'),
    E(`s${s}d1_mangu`,        'Movilidad - Manguitos rotadores con resistencia', 2, '12', 90, 'Biserie B'),
  ];
  const NVL7_D3 = (s) => [
    ...MOB(`s${s}d3`),
    E(`s${s}d3_plancha`,      'Core | Plancha', 2, '50"', 60),
    E(`s${s}d3_fondos_paral`, 'Fondos de tríceps en paralelas', 3, 'Los que puedas y al rango que puedas', 150),
    E(`s${s}d3_neg_fondo`,    'Negativa de Fondo', 3, '2 (3 segundos)', 150, 'Biserie A'),
    E(`s${s}d3_fondo_iso`,    'Fondo Isométrico arriba', 3, '2 (3 segundos)', 150, 'Biserie A'),
    E(`s${s}d3_fondos_goma`,  'Fondos con goma', 2, '8', 150),
    E(`s${s}d3_flex_max`,     'Flexiones', 3, '10', 150),
    E(`s${s}d3_flex_neg`,     'Flexiones negativas', 2, '5 segundos', 150, 'Biserie B'),
    E(`s${s}d3_flex_iso_ab`,  'Flexión Isométrica Abajo', 2, '5 segundos', 150, 'Biserie B'),
    E(`s${s}d3_colgar`,       'Colgarse en la barra', 2, '45 segundos (con arrancadas)', 90),
  ];
  const NVL7_D5 = (s) => [
    ...MOB(`s${s}d5`),
    E(`s${s}d5_plancha`,      'Core | Plancha', 2, '50"', 60),
    E(`s${s}d5_dom_iso`,      'Dominada Isométrica Arriba', 3, '5 segundos', 150, 'Biserie A'),
    E(`s${s}d5_dom_iso90`,    'Dominadas isométricas a 90 grados', 2, '3 segundos', 150, 'Biserie A'),
    E(`s${s}d5_dom_neg`,      'Dominadas negativas', 2, '3 segundos', 150, 'Biserie A'),
    E(`s${s}d5_neg_fondo`,    'Negativa de Fondo', 2, '3 segundos', 150, 'Biserie B'),
    E(`s${s}d5_fondo_iso`,    'Fondo Isométrico arriba', 2, '5 segundos', 150, 'Biserie B'),
    E(`s${s}d5_dom_gomas`,    'Dominadas con gomas', 2, '6', 90),
    E(`s${s}d5_fondos_goma`,  'Fondos con goma', 2, '6', 120),
    E(`s${s}d5_flex_max`,     'Flexiones', 2, '8', 150),
  ];

  // ─────── NIVEL 8 (S29) ───────
  const NVL8_D1 = (s) => [
    ...MOB(`s${s}d1`),
    E(`s${s}d1_hollow`,       'Core | Hollow hold', 2, '30"', 60),
    E(`s${s}d1_dom_full`,     'Dominadas', 1, 'Acumula las que puedas', 150),
    E(`s${s}d1_dom_minisalto`, 'Dominadas con mini salto', 4, '4', 150),
    E(`s${s}d1_dom_no_rom`,   'Dominadas sin rango completo', 3, '3', 120),
    E(`s${s}d1_dom_iso`,      'Dominada Isométrica Arriba', 2, '5 segundos', 120, 'Biserie A'),
    E(`s${s}d1_dom_iso90`,    'Dominadas isométricas a 90 grados', 2, '5 segundos', 120, 'Biserie A'),
    E(`s${s}d1_dom_neg`,      'Dominadas negativas', 2, '3 segundos', 120, 'Biserie A'),
    E(`s${s}d1_dom_gomas`,    'Dominadas con gomas', 3, '6', 90),
    E(`s${s}d1_aussie`,       'Australian pull-ups', 2, '10', 120),
    E(`s${s}d1_colgar`,       'Colgarse en la barra', 1, '1 minuto', 90),
  ];
  const NVL8_D3 = (s) => [
    ...MOB(`s${s}d3`),
    E(`s${s}d3_plancha`,      'Core | Plancha', 2, '1 minuto', 60),
    E(`s${s}d3_fondos_paral`, 'Fondos de tríceps en paralelas', 1, 'Acumula las que puedas', 150),
    E(`s${s}d3_neg_fondo`,    'Negativa de Fondo', 3, '2 (3 segundos)', 120, 'Biserie A'),
    E(`s${s}d3_fondo_iso`,    'Fondo Isométrico arriba', 3, '2 (5 segundos)', 120, 'Biserie A'),
    E(`s${s}d3_fondos_goma`,  'Fondos con goma', 2, '8', 120),
    E(`s${s}d3_flex_max`,     'Flexiones', 3, '10', 120),
    E(`s${s}d3_flex_neg`,     'Flexiones negativas', 2, '5 segundos', 120, 'Biserie B'),
    E(`s${s}d3_flex_iso_ab`,  'Flexión Isométrica Abajo', 2, '5 segundos', 120, 'Biserie B'),
    E(`s${s}d3_colgar`,       'Colgarse en la barra', 1, '1 minuto', 60),
  ];
  const NVL8_D5 = (s) => [
    ...MOB(`s${s}d5`),
    E(`s${s}d5_plancha`,      'Core | Plancha', 2, '1 minuto', 60),
    E(`s${s}d5_dom_no_rom`,   'Dominadas sin rango completo', 3, '3', 120),
    E(`s${s}d5_dom_iso`,      'Dominada Isométrica Arriba', 2, '5 segundos', 120, 'Biserie A'),
    E(`s${s}d5_dom_iso90`,    'Dominadas isométricas a 90 grados', 2, '5 segundos', 120, 'Biserie A'),
    E(`s${s}d5_dom_neg`,      'Dominadas negativas', 2, '3 segundos', 120, 'Biserie A'),
    E(`s${s}d5_neg_fondo`,    'Negativa de Fondo', 2, '3 segundos', 120, 'Biserie B'),
    E(`s${s}d5_fondo_iso`,    'Fondo Isométrico arriba', 2, '5 segundos', 120, 'Biserie B'),
    E(`s${s}d5_flex_max`,     'Flexiones', 3, '10', 120),
    E(`s${s}d5_curl_bicep`,   'Curl de bíceps con mancuerna', 2, '12', 60, 'Biserie C'),
    E(`s${s}d5_mangu`,        'Movilidad - Manguitos rotadores con resistencia', 2, '12', 60, 'Biserie C'),
  ];

  // ═══ Construir las 29 semanas ═══
  const W = {};
  // Nivel 1 — progresión Australian/FlexElev: S1=2, S2=3, S3=4, S4=5
  // D5 Australian S1=2, S2=3, S3=4, S4=6 y FlexRod S4=4×5
  const N1 = [{a:2,f:2,fr:3},{a:3,f:3,fr:3},{a:4,f:4,fr:3},{a:5,f:6,fr:4}];
  for (let i = 0; i < 4; i++) {
    const s = i + 1;
    W[s] = {
      d1: NVL1_D1(s, N1[i].a, N1[i].f),
      d3: NVL1_D3(s, N1[i].a, N1[i].f),
      d5: NVL1_D5(s, i === 3 ? 6 : N1[i].a, N1[i].fr),
    };
  }
  // Nivel 2 — progresión Dom escapular S5=3, S6=4, S7=5, S8=5; Aussie S5=3, S6=3, S7=4, S8=4
  const N2 = [{esc:3,a:3},{esc:4,a:3},{esc:5,a:4},{esc:5,a:4}];
  for (let i = 0; i < 4; i++) {
    const s = i + 5;
    W[s] = { d1: NVL2_D1(s, N2[i].esc, N2[i].a), d3: NVL2_D3(s, N2[i].a), d5: NVL2_D5(s) };
  }
  // Niveles 3-7 (4 semanas cada uno con plantilla estable)
  for (let s = 9; s <= 12; s++) W[s] = { d1: NVL3_D1(s), d3: NVL3_D3(s), d5: NVL3_D5(s) };
  for (let s = 13; s <= 16; s++) W[s] = { d1: NVL4_D1(s), d3: NVL4_D3(s), d5: NVL4_D5(s) };
  for (let s = 17; s <= 20; s++) W[s] = { d1: NVL5_D1(s), d3: NVL5_D3(s), d5: NVL5_D5(s) };
  for (let s = 21; s <= 24; s++) W[s] = { d1: NVL6_D1(s), d3: NVL6_D3(s), d5: NVL6_D5(s) };
  for (let s = 25; s <= 28; s++) W[s] = { d1: NVL7_D1(s), d3: NVL7_D3(s), d5: NVL7_D5(s) };
  // Nivel 8 — solo S29
  W[29] = { d1: NVL8_D1(29), d3: NVL8_D3(29), d5: NVL8_D5(29) };

  WORKOUT_PLANS.empezando_calistenia = {
    id: 'empezando_calistenia',
    name: 'Empezando en Calistenia',
    planType: 'phased',
    weeks: 29,
    description: 'Plan 29 semanas de calistenia híbrida (con mancuernas/poleas) en 8 niveles progresivos. 3 días/sem (D1, D3, D5).',
    trainingDays: [1, 3, 5],
    dayMeta: {
      1: { name: 'Entreno 1', type: 'strength', muscleGroups: ['Calistenia', 'Pull/Push'] },
      3: { name: 'Entreno 2', type: 'strength', muscleGroups: ['Calistenia', 'Pull/Push'] },
      5: { name: 'Entreno 3', type: 'strength', muscleGroups: ['Calistenia', 'Pull/Push'] }
    },
    weeklySchedule: Array.from({ length: 29 }, (_, i) => {
      const w = W[i + 1];
      return { 1: w.d1, 3: w.d3, 5: w.d5 };
    })
  };
})();

/* ══════════════ TU ENTRENO DE CALISTENIA AVANZADA (7 semanas) ══════════════ */
(function () {
  const E = (id, name, sets, reps, rest, notes) => _ex(`ca_${id}`, name, sets, reps, rest, notes);

  // Fase A (S30-S32) — base
  const FASE_A_D1 = (s) => [
    E(`s${s}d1_hollow`,       'Core | Hollow hold', 2, '30"', 60),
    E(`s${s}d1_dom_full`,     'Dominadas', 1, 'Acumula las que puedas', 150),
    E(`s${s}d1_dom_minisalto`, 'Dominadas con mini salto', 2, '4', 150),
    E(`s${s}d1_dom_no_rom`,   'Dominadas sin rango completo', 3, '3', 120),
    E(`s${s}d1_dom_iso`,      'Dominada Isométrica Arriba', 2, '2 (5 segundos)', 120, 'Biserie A'),
    E(`s${s}d1_dom_iso90`,    'Dominadas isométricas a 90 grados', 2, '2 (5 segundos)', 120, 'Biserie A'),
    E(`s${s}d1_dom_neg`,      'Dominadas negativas', 2, '2 (3 segundos)', 120, 'Biserie A'),
    E(`s${s}d1_dom_gomas`,    'Dominadas con gomas', 3, '6', 90),
    E(`s${s}d1_aussie`,       'Australian pull-ups', 2, '10 horizontales', 120),
    E(`s${s}d1_colgar`,       'Colgarse en la barra', 1, '1 minuto', 90),
  ];
  const FASE_A_D3 = (s) => [
    E(`s${s}d3_plancha`,      'Core | Plancha', 2, '1 minuto', 60),
    E(`s${s}d3_fondos_paral`, 'Fondos de tríceps en paralelas', 1, 'Acumula las que puedas', 150),
    E(`s${s}d3_neg_fondo`,    'Negativa de Fondo', 3, '2 (3 segundos)', 120, 'Biserie A'),
    E(`s${s}d3_fondo_iso`,    'Fondo Isométrico arriba', 3, '2 (5 segundos)', 120, 'Biserie A'),
    E(`s${s}d3_fondos_goma`,  'Fondos con goma', 2, '8', 120),
    E(`s${s}d3_flex_max`,     'Flexiones', 3, '10', 120),
    E(`s${s}d3_flex_neg`,     'Flexiones negativas', 2, '2 (5 segundos)', 120, 'Biserie B'),
    E(`s${s}d3_flex_iso_ab`,  'Flexión Isométrica Abajo', 2, '2 (5 segundos)', 120, 'Biserie B'),
    E(`s${s}d3_colgar`,       'Colgarse en la barra', 1, '1 minuto', 60),
  ];
  // S30 D5 vacío en source — añadimos D5 desde S31 (Entreno 3)
  const FASE_A_D5 = (s) => [
    E(`s${s}d5_plancha`,      'Core | Plancha', 2, '1 minuto', 60),
    E(`s${s}d5_dom_full`,     'Dominadas', 1, 'Acumula las que puedas', 150),
    E(`s${s}d5_fondos_paral`, 'Fondos de tríceps en paralelas', 1, 'Acumula las que puedas', 150),
    E(`s${s}d5_dom_no_rom`,   'Dominadas sin rango completo', 3, '3', 120),
    E(`s${s}d5_dom_iso`,      'Dominada Isométrica Arriba', 2, '2 (5 segundos)', 120, 'Biserie A'),
    E(`s${s}d5_dom_iso90`,    'Dominadas isométricas a 90 grados', 2, '2 (5 segundos)', 120, 'Biserie A'),
    E(`s${s}d5_dom_neg`,      'Dominadas negativas', 2, '2 (3 segundos)', 120, 'Biserie A'),
    E(`s${s}d5_neg_fondo`,    'Negativa de Fondo', 2, '2 (3 segundos)', 120, 'Biserie B'),
    E(`s${s}d5_fondo_iso`,    'Fondo Isométrico arriba', 2, '2 (5 segundos)', 120, 'Biserie B'),
    E(`s${s}d5_flex_max`,     'Flexiones', 3, '10', 120),
    E(`s${s}d5_curl_bicep`,   'Curl de bíceps con mancuerna', 2, '12', 60, 'Biserie C'),
    E(`s${s}d5_mangu`,        'Movilidad - Manguitos rotadores con resistencia', 2, '12', 60, 'Biserie C'),
  ];

  // Fase B — EXTRA (S33-S36) más volumen
  const FASE_B_D1 = (s) => [
    E(`s${s}d1_hollow`,       'Core | Hollow hold', 2, '45"', 60),
    E(`s${s}d1_dom_full`,     'Dominadas', 1, 'Acumula las que puedas', 150),
    E(`s${s}d1_dom_no_rom`,   'Dominadas sin rango completo', 3, '4', 120),
    E(`s${s}d1_dom_iso`,      'Dominada Isométrica Arriba', 3, '2 (5 segundos)', 120, 'Biserie A'),
    E(`s${s}d1_dom_iso90`,    'Dominadas isométricas a 90 grados', 3, '2 (5 segundos)', 120, 'Biserie A'),
    E(`s${s}d1_dom_neg`,      'Dominadas negativas', 3, '2 (3 segundos)', 120, 'Biserie A'),
    E(`s${s}d1_dom_gomas`,    'Dominadas con gomas', 2, '6 (observar técnica)', 90),
    E(`s${s}d1_aussie`,       'Australian pull-ups', 2, '8 horizontales', 120, 'Biserie B'),
    E(`s${s}d1_flex_max`,     'Flexiones', 2, '8', 120, 'Biserie B'),
    E(`s${s}d1_colgar`,       'Colgarse en la barra', 2, '1 minuto', 60),
  ];
  const FASE_B_D3 = (s) => [
    E(`s${s}d3_plancha`,      'Core | Plancha', 2, '1 minuto', 60),
    E(`s${s}d3_fondos_paral`, 'Fondos de tríceps en paralelas', 1, 'Acumula las que puedas', 150),
    E(`s${s}d3_neg_fondo`,    'Negativa de Fondo', 3, '3 (3 segundos)', 120, 'Biserie A'),
    E(`s${s}d3_fondo_iso`,    'Fondo Isométrico arriba', 3, '3 (6 segundos)', 120, 'Biserie A'),
    E(`s${s}d3_fondos_goma`,  'Fondos con goma', 2, '8 (observa la técnica)', 120),
    E(`s${s}d3_flex_pliom`,   'Flexiones pliométricas', 3, '10', 120),
    E(`s${s}d3_colgar`,       'Colgarse en la barra', 1, '1 minuto', 60),
  ];
  const FASE_B_D5 = (s) => [
    E(`s${s}d5_plancha`,      'Core | Plancha', 2, '1\'', 60, 'Biserie A'),
    E(`s${s}d5_crunch`,       'Core | Crunch', 2, '10', 60, 'Biserie A'),
    E(`s${s}d5_dom_full`,     'Dominadas', 1, 'Acumula las que puedas', 150),
    E(`s${s}d5_fondos_paral`, 'Fondos de tríceps en paralelas', 1, 'Acumula las que puedas', 150),
    E(`s${s}d5_dom_iso`,      'Dominada Isométrica Arriba', 2, '2 (5 segundos)', 120, 'Biserie B'),
    E(`s${s}d5_dom_iso90`,    'Dominadas isométricas a 90 grados', 2, '2 (5 segundos)', 120, 'Biserie B'),
    E(`s${s}d5_dom_neg`,      'Dominadas negativas', 2, '2 (3 segundos)', 120, 'Biserie B'),
    E(`s${s}d5_neg_fondo`,    'Negativa de Fondo', 3, '2 (3 segundos)', 120, 'Biserie C'),
    E(`s${s}d5_fondo_iso`,    'Fondo Isométrico arriba', 3, '2 (5 segundos)', 120, 'Biserie C'),
    E(`s${s}d5_fondos_goma`,  'Fondos con goma', 3, '5', 150, 'Biserie D'),
    E(`s${s}d5_dom_gomas`,    'Dominadas con gomas', 3, '5', 150, 'Biserie D'),
    E(`s${s}d5_curl_bicep`,   'Curl de bíceps con mancuerna', 2, '12', 60, 'Biserie E'),
    E(`s${s}d5_mangu`,        'Movilidad - Manguitos rotadores con resistencia', 2, '12', 60, 'Biserie E'),
  ];

  const W = {};
  // S30 — Fase A completa (D5 igual al de S31/S32, confirmado por imágenes)
  W[30] = { d1: FASE_A_D1(30), d3: FASE_A_D3(30), d5: FASE_A_D5(30) };
  W[31] = { d1: FASE_A_D1(31), d3: FASE_A_D3(31), d5: FASE_A_D5(31) };
  W[32] = { d1: FASE_A_D1(32), d3: FASE_A_D3(32), d5: FASE_A_D5(32) };
  // S33-S36 — Fase B EXTRA
  for (let s = 33; s <= 36; s++) W[s] = { d1: FASE_B_D1(s), d3: FASE_B_D3(s), d5: FASE_B_D5(s) };

  WORKOUT_PLANS.calistenia_avanzada = {
    id: 'calistenia_avanzada',
    name: 'Tu Entreno de Calistenia Avanzada',
    planType: 'phased',
    weeks: 7,
    description: 'Continuación del plan de calistenia (semanas 30-36 originales). Fase A base (3 sem) + Fase B EXTRA con más volumen (4 sem). 3 días/sem.',
    trainingDays: [1, 3, 5],
    dayMeta: {
      1: { name: 'Entreno 1', type: 'strength', muscleGroups: ['Calistenia', 'Pull'] },
      3: { name: 'Entreno 2', type: 'strength', muscleGroups: ['Calistenia', 'Push'] },
      5: { name: 'Entreno 3', type: 'strength', muscleGroups: ['Calistenia', 'Pull/Push'] }
    },
    weeklySchedule: Array.from({ length: 7 }, (_, i) => {
      const w = W[i + 30];
      return { 1: w.d1, 3: w.d3, 5: w.d5 };
    })
  };
})();

/* ══════════════ WOODS (12 semanas — S1 cargada para validación) ══════════════ */
(function () {
  const E = (id, name, sets, reps, rest, notes) => _ex(`woods_${id}`, name, sets, reps, rest, notes);

  const W = {};

  // ═══ SEMANA 1 ═══
  W[1] = {
    // S1 D1 - Endurance
    1: [
      E('s1d1_mob_rotcol',   'Movilidad - Rotación de columna en cuadrupedia', 2, '6/lado', 0),
      E('s1d1_mob_rot90',    'Movilidad - Rotación interna de cadera 90-90', 1, '12', 0),
      E('s1d1_mob_esc',      'Movilidad | Movimientos escapulares', 1, '10', 0),
      E('s1d1_curl_press',   'Curl de bíceps + press con resistencia', 1, '10', 0),
      E('s1d1_abd_180',      'Abducción de cadera con resistencia a 180°', 1, '12', 0),
      E('s1d1_skierg',       'ERGÓMETRO | SkiErg', 4, '300-400m', 0, 'WOD - 4 rondas'),
      E('s1d1_thruster',     'Thruster con mancuernas', 4, '20 (>5 kg cada una)', 0, 'WOD - 4 rondas'),
      E('s1d1_burpee_bar',   'FUNCIONAL | Burpee over the bar', 4, '20 saltando mancuerna lateralmente', 0, 'WOD - 4 rondas'),
      E('s1d1_pm_rumano',    'Peso muerto rumano', 4, '20 - 2 KB >8Kg cada una', 0, 'WOD - 4 rondas'),
      E('s1d1_farmer',       'FUNCIONAL | Farmer carry o paseo del granjero', 4, '40m - 2 KB >8Kg cada una', 0, 'WOD - 4 rondas'),
      E('s1d1_wallball',     'Wall ball', 4, '10 (balón máx 7 kg ♀ / 9 kg ♂)', 0, 'WOD - 4 rondas'),
      E('s1d1_est_aduct',    'Estiramiento | Aductores (Mariposa) en flexión', 1, '30"', 0),
      E('s1d1_est_espalda',  'Estiramiento - Espalda', 1, '30"', 0),
      E('s1d1_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
    ],
    // S1 D2 - Endurance
    2: [
      E('s1d2_mob_flexesc',  'Movilidad - Flexiones escapulares', 1, '10', 0),
      E('s1d2_mob_snow',     'Movilidad - Prone snow angels', 1, '10', 0),
      E('s1d2_mob_rlunge',   'Movilidad - Runners lunge', 1, '10/lado', 0),
      E('s1d2_curtsy',       'Curtsy lunges con mancuerna', 1, '10/lado', 0),
      E('s1d2_dolphin',      'Core | Dolphin plank + knee taps', 1, '20 alternando', 0),
      E('s1d2_snatch',       'Snatch con disco', 1, '10-15', 0),
      E('s1d2_sled',         'Sled push o empuje del trineo', 1, '20m', 0, 'AMRAP 30\''),
      E('s1d2_run',          'RUN | Carrera', 1, '150m', 0, 'AMRAP 30\''),
      E('s1d2_wallball',     'Wall ball', 1, '20', 0, 'AMRAP 30\''),
      E('s1d2_step_up',      'FUNCIONAL | Step up over the box', 1, '20 alterno con dos mancuernas', 0, 'AMRAP 30\''),
      E('s1d2_vups',         'Core | V ups', 1, '20 alternando pierna', 0, 'AMRAP 30\''),
      E('s1d2_hollow_rock',  'CORE | Hollow rock', 4, 'Máx reps', 10, 'TABATA: 4 rondas, 20" trabajo / 10" descanso'),
      E('s1d2_plancha',      'Core | Plancha', 4, 'Máx reps', 10, 'TABATA: 4 rondas, 20" trabajo / 10" descanso'),
      E('s1d2_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s1d2_est_espalda',  'Estiramiento - Espalda', 1, '30"', 0),
    ],
    // S1 D4 - Running y ergómetros
    4: [
      E('s1d4_mob_balanceo', 'Movilidad - Balanceo de piernas', 2, '10/pierna', 0),
      E('s1d4_mob_hip_car',  'Movilidad - Hip CAR', 1, '12/lado', 0),
      E('s1d4_mob_rlunge',   'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s1d4_skipping',     'Técnica de carrera | Skipping alto', 1, '30 completas', 0),
      E('s1d4_plancha_lat',  'Estabilidad | Plancha lateral modificada con pierna elevada', 1, '40"/lado', 0),
      E('s1d4_knee_taps',    'Core | Knee to toe taps', 1, '20 alternando', 0),
      E('s1d4_pallof',       'Core | Press Pallof con resistencia', 2, '10/lado', 0),
      E('s1d4_run',          'RUN | Carrera', 4, '500m al 60-70%', 0, 'WOD - 4 rondas'),
      E('s1d4_skierg',       'ERGÓMETRO | SkiErg', 4, '500m', 0, 'WOD - 4 rondas'),
      E('s1d4_rowerg',       'ERGÓMETRO | RowErg', 4, '500m', 0, 'WOD - 4 rondas'),
      E('s1d4_est_glut',     'Estiramiento - Glúteo medio', 1, '20"', 0),
      E('s1d4_est_pigeon',   'Estiramientos - Cadera (Pigeon)', 1, '20"/lado', 0),
      E('s1d4_est_mariposa', 'Estiramiento | Media mariposa en torsión', 1, '20"/lado', 0),
    ],
    // S1 D5 - Performance
    5: [
      E('s1d5_mob_balanceo', 'Movilidad - Balanceo de piernas', 2, '10/pierna', 0),
      E('s1d5_bird_dog',     'Core | Bird dog reach', 1, '20 alternando', 0),
      E('s1d5_mob_flex_tob', 'Movilidad - Flexión de tobillo de rodillas', 2, '10/pierna', 0),
      E('s1d5_buenos_dias',  'Buenos días con resistencia', 1, '15', 0),
      E('s1d5_goblet',       'Sentadilla goblet con elevación de talones', 1, '12', 0),
      E('s1d5_drunken_mc',   'Core | Drunken mountain climbers', 1, '40 completas', 0),
      E('s1d5_run_1',        'RUN | Carrera', 3, '300m', 0, 'WOD: 3 rondas o máx 45\''),
      E('s1d5_sentadilla',   'Sentadilla libre | barra alta', 3, '20', 0, 'WOD: 3 rondas o máx 45\''),
      E('s1d5_run_2',        'RUN | Carrera', 3, '300m', 0, 'WOD: 3 rondas o máx 45\''),
      E('s1d5_burpees',      'HIIT | Burpees', 3, '20', 0, 'WOD: 3 rondas o máx 45\''),
      E('s1d5_run_3',        'RUN | Carrera', 3, '300m', 0, 'WOD: 3 rondas o máx 45\''),
      E('s1d5_pm_rumano',    'Peso muerto rumano', 3, '20', 0, 'WOD: 3 rondas o máx 45\''),
      E('s1d5_run_4',        'RUN | Carrera', 3, '300m', 0, 'WOD: 3 rondas o máx 45\''),
      E('s1d5_wallball_amrap','FUNCIONAL | Wallball', 1, 'Máximas repeticiones', 0, 'AMRAP final 2\''),
    ],
    // S1 D6 — DESCANSO en S1 (Cardio LISS empieza en S2)
    6: null,
  };

  // ═══ SEMANA 2 ═══
  W[2] = {
    // S2 D1 - Fuerza
    1: [
      E('s2d1_mob_cat',      'Movilidad - Cat camel', 1, '10', 0),
      E('s2d1_mob_rot90',    'Movilidad - Rotación interna de cadera 90-90', 1, '20 alterno', 0),
      E('s2d1_mob_bisagra',  'Movilidad - Bisagra de cadera', 1, '10', 0),
      E('s2d1_dolphin',      'Core | Dolphin plank + knee taps', 1, '20 alternos', 0),
      E('s2d1_zancadas',     'Zancadas sin peso', 1, '20 alternando', 0),
      E('s2d1_sent_iso',     'Sentadilla isométrica', 1, '30"', 0),
      E('s2d1_run_warm',     'RUN | Carrera', 1, '200m suave', 0),
      E('s2d1_plancha_lat',  'Core | Plancha lateral', 2, '20 isotónico (elevando y bajando cadera)', 0, 'CORE - 2 rondas'),
      E('s2d1_supermans',    'Movilidad - Supermans', 2, '20', 0, 'CORE - 2 rondas'),
      E('s2d1_cocoons',      'Core | Cocoons', 2, '20', 0, 'CORE - 2 rondas'),
      E('s2d1_walking_lung', 'SANDBAG | Walking lunges', 4, '20m (sensación pesada pero terminar la serie)', 0, 'WOD Lower Body - 4 rondas'),
      E('s2d1_sled',         'Sled push o empuje del trineo', 4, '20m', 0, 'WOD Lower Body - 4 rondas'),
      E('s2d1_squat_clean',  'FUNCIONAL | Squat clean con mancuernas', 4, '20', 0, 'WOD Lower Body - 4 rondas'),
      E('s2d1_rowerg',       'ERGÓMETRO | RowErg', 1, '500m', 0, 'Finisher'),
    ],
    // S2 D2 - Endurance
    2: [
      E('s2d2_mob_rot_col',  'Movilidad - Rotación de columna en T', 1, '10/lado', 0),
      E('s2d2_mob_snow',     'Movilidad - Prone snow angels', 1, '10', 0),
      E('s2d2_mob_mangu',    'Movilidad - Manguitos rotadores con resistencia', 1, '10', 0),
      E('s2d2_thrusters_r',  'Thrusters con resistencia', 1, '10', 0),
      E('s2d2_plank_thrust', 'HIIT | Plank thrust', 1, '10', 0),
      E('s2d2_run_warm',     'RUN | Carrera', 1, '200m suave', 0),
      E('s2d2_skierg',       'ERGÓMETRO | SkiErg', 1, '150m - RPE 7/10', 0, 'AMRAP 10\' ergómetros'),
      E('s2d2_rowerg',       'ERGÓMETRO | RowErg', 1, '150m - RPE 7', 0, 'AMRAP 10\' ergómetros'),
      E('s2d2_airbike',      'ERGÓMETRO | Assault Airbike', 1, '150m - RPE 7', 0, 'AMRAP 10\' ergómetros'),
      E('s2d2_devil',        'FUNCIONAL | Devil press', 1, '8 (2 mancuernas >5kg)', 0, 'WOD 1 - AMRAP 15\''),
      E('s2d2_renegade',     'Renegade row', 1, '8', 0, 'WOD 1 - AMRAP 15\''),
      E('s2d2_thruster_mc',  'Thruster con mancuernas', 1, '8', 0, 'WOD 1 - AMRAP 15\''),
      E('s2d2_remo_90',      'Remo a 90 con mancuernas', 1, '8', 0, 'WOD 1 - AMRAP 15\''),
      E('s2d2_farmer',       'FUNCIONAL | Farmer carry', 1, '20m', 0, 'WOD 1 - AMRAP 15\''),
      E('s2d2_squat_clean',  'FUNCIONAL | Squat clean con mancuernas', 1, '10', 0, 'WOD 2 - AMRAP 10\''),
      E('s2d2_front_lunges', 'Front rack lunges con mancuernas', 1, '15', 0, 'WOD 2 - AMRAP 10\''),
      E('s2d2_snatch_mc',    'Snatch con mancuerna', 1, '10/brazo', 0, 'WOD 2 - AMRAP 10\''),
      E('s2d2_db_plank',     'Core | DB Plank pass through', 1, '25', 0, 'WOD 2 - AMRAP 10\''),
      E('s2d2_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s2d2_est_homb',     'Estiramiento - Hombros con rotación', 1, '30"/lado', 0),
      E('s2d2_est_aduct',    'Estiramiento | Aductores (Mariposa) en flexión', 1, '30"', 0),
    ],
    // S2 D4 - Fuerza
    4: [
      E('s2d4_mob_cat',      'Movilidad - Cat camel', 1, '10', 0),
      E('s2d4_mob_rotcol_c', 'Movilidad - Rotación de columna en cuadrupedia', 1, '10/lado', 0),
      E('s2d4_plancha_lat',  'Core | Plancha lateral', 1, '10 alternando lados cada 5"', 0),
      E('s2d4_press_homb_r', 'Press de hombro con resistencia', 1, '10', 0),
      E('s2d4_remo_ment_r',  'Remo al mentón con resistencia', 1, '10', 0),
      E('s2d4_buenos_dias',  'Buenos días con resistencia', 1, '10', 0),
      E('s2d4_russian',      'Core | Russian twist con disco', 2, '20', 0, 'CORE - 2 rondas'),
      E('s2d4_push_press',   'Push press o press de hombros con impulso', 1, '15 (misma barra/peso todo el AMRAP)', 0, 'WOD Upper Body - AMRAP 20\''),
      E('s2d4_burpee_bar_a', 'FUNCIONAL | Burpee over the bar', 1, '15', 0, 'WOD Upper Body - AMRAP 20\''),
      E('s2d4_remo_barra',   'Remo con barra a 90°', 1, '15', 0, 'WOD Upper Body - AMRAP 20\''),
      E('s2d4_sumo_dl',      'FUNCIONAL | Sumo deadlift high pull con barra', 1, '15', 0, 'WOD Upper Body - AMRAP 20\''),
      E('s2d4_burpee_bar_b', 'FUNCIONAL | Burpee over the bar', 1, '15', 0, 'WOD Upper Body - AMRAP 20\''),
      E('s2d4_run_finisher', 'RUN | Carrera', 1, '400-800m', 0, 'Finisher - 1 ronda'),
      E('s2d4_est_espalda',  'Estiramiento - Espalda en cajón', 1, '30"', 0),
      E('s2d4_est_homb',     'Estiramiento - Hombros con rotación', 1, '20"/lado', 0),
      E('s2d4_est_pigeon',   'Estiramientos - Cadera (Pigeon)', 1, '20"/lado', 0),
    ],
    // S2 D5 - Performance
    5: [
      E('s2d5_mob_rlunge',   'Movilidad - Runners lunge with reach', 1, '8/lado', 0),
      E('s2d5_mob_scorp',    'Movilidad - Scorpions', 1, '8/lado', 0),
      E('s2d5_mob_mangu',    'Movilidad - Manguitos rotadores con resistencia', 1, '10', 0),
      E('s2d5_run_500',      'RUN | Carrera', 1, '500m', 0, 'For Time - 1 ronda o máx 45\''),
      E('s2d5_skierg',       'ERGÓMETRO | SkiErg', 1, '400m', 0, 'For Time - 1 ronda o máx 45\''),
      E('s2d5_sled_push',    'Sled push o empuje del trineo', 1, '20m', 0, 'For Time - 1 ronda o máx 45\''),
      E('s2d5_sled_pull',    'Sled pull o arrastre de trineo', 1, '20m', 0, 'For Time - 1 ronda o máx 45\''),
      E('s2d5_burpee_jump',  'FUNCIONAL | Burpee broad jump', 1, '20m', 0, 'For Time - 1 ronda o máx 45\''),
      E('s2d5_run_400a',     'RUN | Carrera', 1, '400m', 0, 'For Time - 1 ronda o máx 45\''),
      E('s2d5_rowerg',       'ERGÓMETRO | RowErg', 1, '400m', 0, 'For Time - 1 ronda o máx 45\''),
      E('s2d5_farmer',       'FUNCIONAL | Farmer carry', 1, '40m', 0, 'For Time - 1 ronda o máx 45\''),
      E('s2d5_walking_lung', 'SANDBAG | Walking lunges', 1, '20m', 0, 'For Time - 1 ronda o máx 45\''),
      E('s2d5_run_300',      'RUN | Carrera', 1, '300m', 0, 'For Time - 1 ronda o máx 45\''),
      E('s2d5_wallball',     'Wall ball', 1, '20', 0),
    ],
    // S2 D6 - Cardio LISS
    6: [E('s2d6_liss', 'Cardio LISS', 1, '60\'', 0, 'Carrera suave - caminata - bici - nadar, etc')],
  };

  // ═══ SEMANA 3 ═══
  W[3] = {
    // S3 D1 - Fuerza
    1: [
      E('s3d1_mob_rot90',    'Movilidad - Rotación interna de cadera 90-90', 1, '10/lado', 0),
      E('s3d1_mob_frog',     'Movilidad - Frog Rolls', 1, '10 con 3"', 0),
      E('s3d1_mob_flex_tob', 'Movilidad - Flexión de tobillo de rodillas', 1, '8/lado con 5" aguantando', 0),
      E('s3d1_plancha_codos','Core | Plancha de codos a manos', 1, '8/lado', 0),
      E('s3d1_sent_salto',   'HIIT | Sentadilla con salto + rotación', 1, '10', 0),
      E('s3d1_press_homb_uni','Press de hombro unilateral desde rodillas', 1, '8/brazo', 0),
      E('s3d1_skierg_warm',  'ERGÓMETRO | SkiErg', 1, '300m suave', 0),
      E('s3d1_rowerg',       'ERGÓMETRO | RowErg', 4, '200m', 0, 'WOD Fullbody - 4 rondas'),
      E('s3d1_press_banca',  'Press banca con mancuernas', 4, '10-15', 0, 'WOD Fullbody - 4 rondas'),
      E('s3d1_sentadilla',   'Sentadilla libre | barra alta', 4, '10-15', 0, 'WOD Fullbody - 4 rondas'),
      E('s3d1_dominadas',    'Dominadas', 4, '10-15 (adaptar con gomas o kipping si es necesario)', 0, 'WOD Fullbody - 4 rondas'),
      E('s3d1_press_homb_mc','Press de hombro con mancuernas', 4, '10-15', 0, 'WOD Fullbody - 4 rondas'),
      E('s3d1_hollow_rock',  'CORE | Hollow rock', 1, '20', 0, 'AMRAP 4\''),
      E('s3d1_butterfly',    'Core | Butterfly Sit up', 1, '20 con disco', 0, 'AMRAP 4\''),
      E('s3d1_est_espalda',  'Estiramiento - Espalda', 1, '20"', 0),
      E('s3d1_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '20"', 0),
      E('s3d1_est_homb',     'Estiramiento - Hombros con rotación', 1, '20"/lado', 0),
      E('s3d1_est_pir',      'Estiramiento - Piramidal', 1, '20"/lado', 0),
    ],
    // S3 D2 - Running
    2: [
      E('s3d2_mob_balanceo', 'Movilidad - Balanceo de piernas', 1, '10/lado', 0),
      E('s3d2_mob_hip_car',  'Movilidad - Hip CAR', 1, '10', 0),
      E('s3d2_mob_deep',     'Movilidad - Deep squat prayer opener', 1, '20"', 0),
      E('s3d2_mob_cossak',   'Movilidad - Cossak squat', 1, '10 alternando', 0),
      E('s3d2_skipping_alto','Técnica de carrera | Skipping alto', 1, '30"', 0),
      E('s3d2_skipping_glut','Técnica de carrera | Skipping talón glúteo', 1, '30"', 0),
      E('s3d2_run_warm',     'RUN | Carrera', 1, '10\' suave', 0),
      E('s3d2_run_800',      'RUN | Carrera', 4, '800m - RPE 7-8', 60, '4 series + 1\' descanso entre series'),
      E('s3d2_run_cool',     'RUN | Carrera', 1, '800m suave', 0),
      E('s3d2_est_pir',      'Estiramiento - Piramidal', 1, '20"/lado', 0),
      E('s3d2_est_rod',      'Estiramiento - Rodilla al pecho', 1, '20"/lado', 0),
      E('s3d2_est_espalda',  'Estiramiento - Espalda', 1, '20"', 0),
      E('s3d2_est_pigeon',   'Estiramientos - Cadera (Pigeon)', 1, '20"/lado', 0),
    ],
    // S3 D4 - Fuerza
    4: [
      E('s3d4_mob_snow',     'Movilidad - Prone snow angels', 1, '10', 0),
      E('s3d4_mob_rotcol_c', 'Movilidad - Rotación de columna en cuadrupedia', 1, '10/lado', 0),
      E('s3d4_mob_rlunge',   'Movilidad - Runners lunge', 1, '20 alternando', 0),
      E('s3d4_jalon_uni_r',  'Jalón unilateral con resistencia', 1, '10/lado', 0),
      E('s3d4_zancadas',     'Zancadas sin peso', 1, '20 alternando', 0),
      E('s3d4_sent_iso',     'Sentadilla isométrica', 1, '30"', 0),
      E('s3d4_rowerg_warm',  'ERGÓMETRO | RowErg', 1, '300m suave', 0),
      E('s3d4_remo_trx',     'Remo en TRX', 4, '10-15 TRX/anillas/barra baja', 0, 'WOD Fullbody - 4 rondas'),
      E('s3d4_sent_front',   'Sentadilla frontal', 4, '10-15', 0, 'WOD Fullbody - 4 rondas'),
      E('s3d4_dominadas',    'Dominadas', 4, '10-15 (adapta lo necesario)', 0, 'WOD Fullbody - 4 rondas'),
      E('s3d4_zanc_mc',      'Zancadas con mancuernas', 4, '10-15', 0, 'WOD Fullbody - 4 rondas'),
      E('s3d4_press_homb_mc','Press de hombro con mancuernas', 4, '10-15', 0, 'WOD Fullbody - 4 rondas'),
      E('s3d4_wallball_amr', 'Wall ball', 1, 'Máx reps', 0, 'AMRAP 2\''),
      E('s3d4_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '20"', 0),
      E('s3d4_est_pigeon',   'Estiramientos - Cadera (Pigeon)', 1, '20"', 0),
      E('s3d4_est_espalda',  'Estiramiento - Espalda en cajón', 1, '20"', 0),
      E('s3d4_est_homb',     'Estiramiento - Hombros con rotación', 1, '20"', 0),
    ],
    // S3 D5 - Performance
    5: [
      E('s3d5_mob_cat',      'Movilidad - Cat camel', 1, '10', 0),
      E('s3d5_bird_dog',     'Core | Bird dog reach', 1, '10/lado', 0),
      E('s3d5_frog_pumps',   'Frog pumps', 1, '10', 0),
      E('s3d5_worm_walks',   'Core | Worm walks', 1, '10', 0),
      E('s3d5_sent_iso',     'Sentadilla isométrica', 1, '30"', 0),
      E('s3d5_jjacks',       'HIIT | Jumping jacks', 1, '20', 0),
      E('s3d5_run_warm',     'RUN | Carrera', 1, '300m suave', 0),
      E('s3d5_skierg_emom',  'ERGÓMETRO | SkiErg', 5, '50-80m por minuto (si no llegas, parar a los 45" y descansar 15")', 0, 'EMOM 5\''),
      E('s3d5_zanc_mc',      'Zancadas con mancuernas', 4, '20m con mancuernas o KB', 0, 'WOD - 4 rondas'),
      E('s3d5_flex',         'Flexiones', 4, '10 (adaptar con rodilla o altura)', 0, 'WOD - 4 rondas'),
      E('s3d5_sent_salto',   'HIIT | Sentadilla con salto + rotación', 1, '20 (sentadilla profunda)', 0),
      E('s3d5_kb_swing',     'FUNCIONAL | KB Swing americano', 4, '20 con KB >8kg', 0, 'WOD - 4 rondas'),
      E('s3d5_plancha_codos','Core | Plancha de codos a manos', 4, '20 (10+10)', 0, 'WOD - 4 rondas'),
      E('s3d5_sled',         'Sled push o empuje del trineo', 1, '10m rápidos', 0, 'AMRAP final 5\''),
      E('s3d5_shuttle',      'HIIT | Shuttle run', 1, '4×10m + 1 burpee tras cada vuelta', 0, 'AMRAP final 5-7\''),
      E('s3d5_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '20"', 0),
      E('s3d5_est_rod',      'Estiramiento - Rodilla al pecho', 1, '30"', 0),
      E('s3d5_est_pigeon',   'Estiramientos - Cadera (Pigeon)', 1, '20"', 0),
      E('s3d5_est_espalda',  'Estiramiento - Espalda en cajón', 1, '20"', 0),
    ],
    // S3 D6 - Cardio LISS
    6: [E('s3d6_liss', 'Cardio LISS', 1, '60\'', 0, 'Correr - nadar - bici - trekking')],
  };

  // ═══ SEMANA 4 ═══ (D1, D2, D4, D5 muy similares a S1 pero con +distancias / +volumen / sin Tabata D2 mantiene)
  W[4] = {
    // S4 D1 - Endurance (variación de S1 D1: WOD 4 rondas SkiErg, 3 rondas el resto, +Farmer 80m, +KB swing)
    1: [
      E('s4d1_mob_rotcol',   'Movilidad - Rotación de columna en cuadrupedia', 2, '6/lado', 0),
      E('s4d1_mob_rot90',    'Movilidad - Rotación interna de cadera 90-90', 1, '12', 0),
      E('s4d1_mob_esc',      'Movilidad | Movimientos escapulares', 1, '10', 0),
      E('s4d1_curl_press',   'Curl de bíceps + press con resistencia', 1, '10', 0),
      E('s4d1_abd_180',      'Abducción de cadera con resistencia a 180°', 1, '12', 0),
      E('s4d1_run_warm',     'RUN | Carrera', 1, '400m suave', 0),
      E('s4d1_skierg',       'ERGÓMETRO | SkiErg', 4, '300-400m', 0, 'WOD - 4 rondas o 40\''),
      E('s4d1_thruster',     'Thruster con mancuernas', 3, '20 (mancuernas mín 5-7,5 kg)', 0, 'WOD - 3 rondas o 40\''),
      E('s4d1_burpee_bar',   'FUNCIONAL | Burpee over the bar', 3, '20 saltando mancuerna', 0, 'WOD - 3 rondas o 40\''),
      E('s4d1_pm_rumano',    'Peso muerto rumano', 3, '20 con 2 KB mín 8-12 kg', 0, 'WOD - 3 rondas o 40\''),
      E('s4d1_farmer',       'FUNCIONAL | Farmer carry', 3, '80m', 0, 'WOD - 3 rondas o 40\''),
      E('s4d1_kb_swing',     'FUNCIONAL | KB Swing americano', 3, '20', 0, 'WOD - 3 rondas o 40\''),
      E('s4d1_est_aduct',    'Estiramiento | Aductores (Mariposa) en flexión', 1, '30"', 0),
      E('s4d1_est_espalda',  'Estiramiento - Espalda', 1, '30"', 0),
      E('s4d1_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
    ],
    // S4 D2 - Endurance (= S1 D2 con run 400m en lugar de 150m)
    2: [
      E('s4d2_mob_flexesc',  'Movilidad - Flexiones escapulares', 1, '10', 0),
      E('s4d2_mob_snow',     'Movilidad - Prone snow angels', 1, '10', 0),
      E('s4d2_mob_rlunge',   'Movilidad - Runners lunge', 1, '10/lado', 0),
      E('s4d2_curtsy',       'Curtsy lunges con mancuerna', 1, '10/lado', 0),
      E('s4d2_dolphin',      'Core | Dolphin plank + knee taps', 1, '20 alternando', 0),
      E('s4d2_snatch',       'Snatch con disco', 1, '10-15', 0),
      E('s4d2_run_warm',     'RUN | Carrera', 1, '400m suave', 0),
      E('s4d2_sled',         'Sled push o empuje del trineo', 1, '20m', 0, 'AMRAP 30\''),
      E('s4d2_run',          'RUN | Carrera', 1, '400m', 0, 'AMRAP 30\''),
      E('s4d2_wallball',     'Wall ball', 1, '20', 0, 'AMRAP 30\''),
      E('s4d2_step_up',      'FUNCIONAL | Step up over the box', 1, '20', 0, 'AMRAP 30\''),
      E('s4d2_vups',         'Core | V ups', 1, '20', 0, 'AMRAP 30\''),
      E('s4d2_hollow_rock',  'CORE | Hollow rock', 4, 'Máx reps', 10, 'TABATA 4× (20" trabajo / 10" descanso)'),
      E('s4d2_plancha',      'Core | Plancha', 4, 'Máx reps', 10, 'TABATA 4× (20" trabajo / 10" descanso)'),
      E('s4d2_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s4d2_est_espalda',  'Estiramiento - Espalda', 1, '30"', 0),
    ],
    // S4 D4 - Running y ergómetros (= S1 D4 con 800m por ronda en lugar de 500m, 3 o 4 rondas)
    4: [
      E('s4d4_mob_balanceo', 'Movilidad - Balanceo de piernas', 2, '10/pierna', 0),
      E('s4d4_mob_hip_car',  'Movilidad - Hip CAR', 1, '12/lado', 0),
      E('s4d4_mob_rlunge',   'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s4d4_skipping',     'Técnica de carrera | Skipping alto', 1, '30 completas', 0),
      E('s4d4_plancha_lat',  'Estabilidad | Plancha lateral modificada con pierna elevada', 1, '40"/lado', 0),
      E('s4d4_knee_taps',    'Core | Knee to toe taps', 1, '20 alternando', 0),
      E('s4d4_pallof',       'Core | Press Pallof con resistencia', 2, '10/lado', 0),
      E('s4d4_run_warm',     'RUN | Carrera', 1, '400m suave', 0),
      E('s4d4_run',          'RUN | Carrera', 4, '800m', 0, 'WOD - 3 o 4 rondas'),
      E('s4d4_skierg',       'ERGÓMETRO | SkiErg', 4, '800m', 0, 'WOD - 3 o 4 rondas'),
      E('s4d4_rowerg',       'ERGÓMETRO | RowErg', 4, '800m', 0, 'WOD - 3 o 4 rondas'),
      E('s4d4_est_glut',     'Estiramiento - Glúteo medio', 1, '20"', 0),
      E('s4d4_est_pigeon',   'Estiramientos - Cadera (Pigeon)', 1, '20"/lado', 0),
      E('s4d4_est_mariposa', 'Estiramiento | Media mariposa en torsión', 1, '20"/lado', 0),
      E('s4d4_est_standing', 'Estiramientos - Standing reach down', 1, '20"', 0),
    ],
    // S4 D5 - Performance (variante de S1 D5 con 1000m run + sentadilla frontal en vez de libre)
    5: [
      E('s4d5_mob_balanceo', 'Movilidad - Balanceo de piernas', 2, '10/pierna', 0),
      E('s4d5_bird_dog',     'Core | Bird dog reach', 1, '20 alternando', 0),
      E('s4d5_mob_flex_tob', 'Movilidad - Flexión de tobillo de rodillas', 2, '10/pierna', 0),
      E('s4d5_buenos_dias',  'Buenos días con resistencia', 1, '15', 0),
      E('s4d5_goblet',       'Sentadilla goblet con elevación de talones', 1, '12', 0),
      E('s4d5_drunken_mc',   'Core | Drunken mountain climbers', 1, '40 completas', 0),
      E('s4d5_run_warm',     'RUN | Carrera', 1, '400m suave', 0),
      E('s4d5_run_1000',     'RUN | Carrera', 2, '1000m', 0, 'WOD 2 rondas o 50\''),
      E('s4d5_sent_front',   'Sentadilla frontal', 2, '20', 0, 'WOD 2 rondas o 50\''),
      E('s4d5_run_800',      'RUN | Carrera', 2, '800m', 0, 'WOD 2 rondas o 50\''),
      E('s4d5_burpees',      'HIIT | Burpees', 2, '20', 0, 'WOD 2 rondas o 50\''),
      E('s4d5_run_400a',     'RUN | Carrera', 2, '400m', 0, 'WOD 2 rondas o 50\''),
      E('s4d5_run_400b',     'RUN | Carrera', 2, '400m', 0, 'WOD 2 rondas o 50\''),
      E('s4d5_pm_rumano',    'Peso muerto rumano', 2, '20', 0, 'WOD 2 rondas o 50\''),
      E('s4d5_wallball_amr', 'FUNCIONAL | Wallball', 1, 'Máx reps', 0, 'AMRAP 2\''),
    ],
    // S4 D6 - Cardio LISS
    6: [E('s4d6_liss', 'Cardio LISS', 1, '60\'', 0, 'Jogging, trekking, nadar, bici, etc')],
  };

  // ═══ SEMANA 5 — Bodybuilding/Development ═══
  W[5] = {
    // S5 D1 - Bodybuilding
    1: [
      E('s5d1_mob_cat',      'Movilidad - Cat camel', 1, '10', 0),
      E('s5d1_mob_rot90',    'Movilidad - Rotación interna de cadera 90-90', 1, '8/lado', 0),
      E('s5d1_bird_dog',     'Core | Bird dog reach', 1, '10/lado', 0),
      E('s5d1_mob_flexesc',  'Movilidad - Flexiones escapulares', 1, '10', 0),
      E('s5d1_flex',         'Flexiones', 1, '10', 0),
      E('s5d1_buenos_dias',  'Buenos días con resistencia', 1, '10', 0),
      E('s5d1_puente_uni',   'Puente de glúteos unilateral', 1, '10/lado sin peso', 0),
      E('s5d1_run',          'RUN | Carrera', 2, '10\'', 300, '2 series + 5\' descanso'),
      E('s5d1_pm_conv',      'Peso muerto convencional', 4, '12-15 (bajada lenta, subida rápida)', 60),
      E('s5d1_press_banca',  'Press banca con barra', 3, '12-15 (puede ser con mancuernas)', 60),
      E('s5d1_press_milit',  'Press militar con barra', 3, '12-15 (puede ser con mancuernas)', 60),
      E('s5d1_rowerg',       'ERGÓMETRO | RowErg', 1, '1000m', 180, 'Al finalizar descansa 3\''),
      E('s5d1_zanc_mc',      'Zancadas con mancuernas', 1, '60m (tramos de 5 o 10m)', 0),
      E('s5d1_est_espalda',  'Estiramiento - Espalda', 1, '20"', 0),
      E('s5d1_est_homb',     'Estiramiento - Hombros con rotación', 1, '20"', 0),
      E('s5d1_est_rod',      'Estiramiento - Rodilla al pecho', 1, '20"', 0),
    ],
    // S5 D2 - Development
    2: [
      E('s5d2_mob_rot_col',  'Movilidad - Rotación de columna en T', 1, '10/lado', 0),
      E('s5d2_mob_hip_car',  'Movilidad - Hip CAR', 1, '10/lado', 0),
      E('s5d2_bird_dog',     'Core | Bird dog reach', 1, '10/lado', 0),
      E('s5d2_mob_rlunge',   'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s5d2_worm',         'Core | Worm walks', 1, '10 con flexión', 0),
      E('s5d2_run_warm',     'RUN | Carrera', 1, '500m suave', 0),
      E('s5d2_run_800',      'RUN | Carrera', 2, '800m', 0, 'WOD - 2 rondas'),
      E('s5d2_airbike',      'ERGÓMETRO | Assault Airbike', 2, '800m', 0, 'WOD - 2 rondas'),
      E('s5d2_skierg',       'ERGÓMETRO | SkiErg', 2, '800m', 0, 'WOD - 2 rondas'),
      E('s5d2_rowerg',       'ERGÓMETRO | RowErg', 2, '800m', 0, 'WOD - 2 rondas'),
      E('s5d2_sled',         'Sled push o empuje del trineo', 2, '100m (tramos de 10m)', 0, 'WOD - 2 rondas + 3-5\' rest entre rondas'),
      E('s5d2_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s5d2_est_luna',     'Estiramiento | Media luna en sedestación', 1, '20"/lado', 0),
      E('s5d2_est_espalda',  'Estiramiento - Espalda en cajón', 1, '30"', 0),
    ],
    // S5 D4 - Bodybuilding
    4: [
      E('s5d4_mob_flex_tob', 'Movilidad - Flexión de tobillo de rodillas', 1, '10/lado con 3" pausa', 0),
      E('s5d4_mob_deep',     'Movilidad - Deep squat prayer opener', 1, '30"', 0),
      E('s5d4_mob_mangu',    'Movilidad - Manguitos rotadores con resistencia', 1, '10', 0),
      E('s5d4_remo_pie_r',   'Remo de pie con resistencia', 1, '10', 0),
      E('s5d4_goblet_pausa', 'Sentadilla goblet con doble pausa', 1, '10 poco peso', 0),
      E('s5d4_run_warm',     'RUN | Carrera', 1, '10\' suave', 0),
      E('s5d4_sent_front',   'Sentadilla frontal', 4, '12-15', 60),
      E('s5d4_remo_uni_mc',  'Remo unilateral con mancuernas', 3, '12-15', 60),
      E('s5d4_skierg',       'ERGÓMETRO | SkiErg', 1, '1000m ritmo constante', 0, 'WOD 1 ronda'),
      E('s5d4_sled',         'Sled push o empuje del trineo', 1, '50m ritmo constante', 0, 'WOD 1 ronda'),
      E('s5d4_run',          'RUN | Carrera', 1, '500m ritmo constante', 0, 'WOD 1 ronda'),
      E('s5d4_rowerg',       'ERGÓMETRO | RowErg', 1, '1000m ritmo constante', 0, 'WOD 1 ronda'),
      E('s5d4_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s5d4_est_pir',      'Estiramiento - Piramidal', 1, '30"', 0),
      E('s5d4_est_homb',     'Estiramiento - Hombros con rotación', 1, '30"/lado', 0),
      E('s5d4_est_standing', 'Estiramientos - Standing reach down', 1, '20"', 0),
    ],
    // S5 D5 - Development
    5: [
      E('s5d5_mob_cat',      'Movilidad - Cat camel', 1, '10', 0),
      E('s5d5_mob_rlunge',   'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s5d5_pullover_r',   'Pull over con resistencia', 1, '10', 0),
      E('s5d5_thrusters_r',  'Thrusters con resistencia', 1, '10', 0),
      E('s5d5_drunken_mc',   'Core | Drunken mountain climbers', 1, '30"', 0),
      E('s5d5_run_warm',     'RUN | Carrera', 1, '500m suave', 0),
      E('s5d5_skierg',       'ERGÓMETRO | SkiErg', 5, '350m', 180, 'WOD - 5 sets de 6\' (máximas rondas, misma intensidad)'),
      E('s5d5_rowerg',       'ERGÓMETRO | RowErg', 5, '350m', 0, 'WOD - 5 sets de 6\' (máximas rondas)'),
      E('s5d5_run',          'RUN | Carrera', 5, '350m', 0, 'WOD - 5 sets de 6\' (máximas rondas)'),
      E('s5d5_burpees',      'HIIT | Burpees', 5, '20', 0, 'WOD - 5 sets de 6\' (máximas rondas)'),
      E('s5d5_wallball',     'Wall ball', 5, '25', 0, 'WOD - 5 sets de 6\' (máximas rondas)'),
      E('s5d5_zancadas',     'Zancadas sin peso', 5, '30', 0, 'WOD - 5 sets de 6\' (máximas rondas)'),
      E('s5d5_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s5d5_est_espalda',  'Estiramiento - Espalda', 1, '30"', 0),
      E('s5d5_est_rod',      'Estiramiento - Rodilla al pecho', 1, '20"/lado', 0),
      E('s5d5_est_glut',     'Estiramiento - Glúteo medio', 1, '20"/lado', 0),
    ],
    // S5 D6 - Cardio LISS
    6: [E('s5d6_liss', 'Cardio LISS', 1, '60\'', 0, 'Jogging, trekking, nadar, bici, etc')],
  };

  // ═══ SEMANA 6 — Bodybuilding/Development (variación de S5) ═══
  W[6] = {
    // S6 D1 - Bodybuilding (cambio: Hip Thrust 4×12-15 + Run 2×12' + finisher Sled push 1 serie)
    1: [
      E('s6d1_mob_cat',      'Movilidad - Cat camel', 1, '10', 0),
      E('s6d1_mob_rot90',    'Movilidad - Rotación interna de cadera 90-90', 1, '8/lado', 0),
      E('s6d1_bird_dog',     'Core | Bird dog reach', 1, '10/lado', 0),
      E('s6d1_mob_flexesc',  'Movilidad - Flexiones escapulares', 1, '10', 0),
      E('s6d1_flex',         'Flexiones', 1, '10', 0),
      E('s6d1_buenos_dias',  'Buenos días con resistencia', 1, '10', 0),
      E('s6d1_puente_uni',   'Puente de glúteos unilateral', 1, '10/lado', 0),
      E('s6d1_hip_thrust',   'Hip Thrust', 4, '12-15 (bajada lenta, subida rápida)', 60),
      E('s6d1_press_banca',  'Press banca con barra', 3, '12-15 (puede ser con mancuernas)', 60),
      E('s6d1_press_milit',  'Press militar con barra', 3, '12-15 (puede ser con mancuernas)', 60),
      E('s6d1_run',          'RUN | Carrera', 2, '12\'', 300),
      E('s6d1_skierg',       'ERGÓMETRO | SkiErg', 1, '1000m', 180, 'WOD 1 serie'),
      E('s6d1_farmer',       'FUNCIONAL | Farmer carry', 1, '100m (tramos de 10m)', 0, 'WOD 1 serie'),
      E('s6d1_est_espalda',  'Estiramiento - Espalda', 1, '20"', 0),
      E('s6d1_est_homb',     'Estiramiento - Hombros con rotación', 1, '20"', 0),
      E('s6d1_est_rod',      'Estiramiento - Rodilla al pecho', 1, '20"/lado', 0),
    ],
    // S6 D2 - Development (1000m WOD 3 rondas)
    2: [
      E('s6d2_mob_rot_col',  'Movilidad - Rotación de columna en T', 1, '10/lado', 0),
      E('s6d2_mob_hip_car',  'Movilidad - Hip CAR', 1, '10/lado', 0),
      E('s6d2_bird_dog',     'Core | Bird dog reach', 1, '10/lado', 0),
      E('s6d2_mob_rlunge',   'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s6d2_worm',         'Core | Worm walks', 1, '10 con flexión', 0),
      E('s6d2_run_warm',     'RUN | Carrera', 1, '600m suave', 0),
      E('s6d2_run_1000',     'RUN | Carrera', 3, '1000m', 0, 'WOD - máx 45\' o 3 rondas + 3\' rest entre rondas'),
      E('s6d2_skierg',       'ERGÓMETRO | SkiErg', 3, '1000m', 0, 'WOD - máx 45\' o 3 rondas'),
      E('s6d2_rowerg',       'ERGÓMETRO | RowErg', 3, '1000m', 0, 'WOD - máx 45\' o 3 rondas'),
      E('s6d2_zanc_mc',      'Zancadas con mancuernas', 3, '40m (tramos de 10m)', 0, 'WOD - máx 45\' o 3 rondas'),
      E('s6d2_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s6d2_est_luna',     'Estiramiento | Media luna en sedestación', 1, '20"/lado', 0),
      E('s6d2_est_espalda',  'Estiramiento - Espalda en cajón', 1, '30"', 0),
    ],
    // S6 D4 - Bodybuilding (WOD Performance 1 ronda con 6 ejercicios)
    4: [
      E('s6d4_mob_flex_tob', 'Movilidad - Flexión de tobillo de rodillas', 1, '10/lado con 3" pausa', 0),
      E('s6d4_mob_deep',     'Movilidad - Deep squat prayer opener', 1, '30"', 0),
      E('s6d4_mob_mangu',    'Movilidad - Manguitos rotadores con resistencia', 1, '10', 0),
      E('s6d4_remo_pie_r',   'Remo de pie con resistencia', 1, '10', 0),
      E('s6d4_goblet_pausa', 'Sentadilla goblet con doble pausa', 1, '10 poco peso', 0),
      E('s6d4_run_warm',     'RUN | Carrera', 1, '10\' suave', 0),
      E('s6d4_sent_front',   'Sentadilla frontal', 4, '12-15', 60),
      E('s6d4_remo_uni_mc',  'Remo unilateral con mancuernas', 3, '12-15', 60),
      E('s6d4_run_1000',     'RUN | Carrera', 1, '1000m ritmo constante', 0, 'WOD Performance - 1 ronda'),
      E('s6d4_skierg',       'ERGÓMETRO | SkiErg', 1, '1000m ritmo constante', 0, 'WOD Performance - 1 ronda'),
      E('s6d4_run_1000b',    'RUN | Carrera', 1, '1000m ritmo constante', 0, 'WOD Performance - 1 ronda'),
      E('s6d4_sled_push',    'Sled push o empuje del trineo', 1, '50m (tramos de 10m)', 0, 'WOD Performance - 1 ronda'),
      E('s6d4_run_500',      'RUN | Carrera', 1, '500m ritmo constante', 0, 'WOD Performance - 1 ronda'),
      E('s6d4_sled_pull',    'Sled pull o arrastre de trineo', 1, '20m', 0, 'WOD Performance - 1 ronda'),
      E('s6d4_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s6d4_est_pir',      'Estiramiento - Piramidal', 1, '30"', 0),
      E('s6d4_est_homb',     'Estiramiento - Hombros con rotación', 1, '30"/lado', 0),
      E('s6d4_est_standing', 'Estiramientos - Standing reach down', 1, '20"', 0),
    ],
    // S6 D5 - Development (4 sets de 7' con +burpees +wallball)
    5: [
      E('s6d5_mob_cat',      'Movilidad - Cat camel', 1, '10', 0),
      E('s6d5_mob_rlunge',   'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s6d5_pullover_r',   'Pull over con resistencia', 1, '10', 0),
      E('s6d5_thrusters_r',  'Thrusters con resistencia', 1, '10', 0),
      E('s6d5_drunken_mc',   'Core | Drunken mountain climbers', 1, '30"', 0),
      E('s6d5_run_warm',     'RUN | Carrera', 1, '600m suave', 0),
      E('s6d5_skierg',       'ERGÓMETRO | SkiErg', 4, '350m', 180, 'WOD - 4 sets de 7\' (máximas rondas)'),
      E('s6d5_rowerg',       'ERGÓMETRO | RowErg', 4, '350m', 0, 'WOD - 4 sets de 7\' (máximas rondas)'),
      E('s6d5_run',          'RUN | Carrera', 4, '350m', 0, 'WOD - 4 sets de 7\' (máximas rondas)'),
      E('s6d5_burpees',      'HIIT | Burpees', 4, '25', 0, 'WOD - 4 sets de 7\' (máximas rondas)'),
      E('s6d5_wallball',     'Wall ball', 4, '25', 0, 'WOD - 4 sets de 7\' (máximas rondas)'),
      E('s6d5_zancadas',     'Zancadas sin peso', 4, '30', 0, 'WOD - 4 sets de 7\' (máximas rondas)'),
      E('s6d5_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s6d5_est_espalda',  'Estiramiento - Espalda', 1, '30"', 0),
      E('s6d5_est_rod',      'Estiramiento - Rodilla al pecho', 1, '20"/lado', 0),
      E('s6d5_est_glut',     'Estiramiento - Glúteo medio', 1, '20"/lado', 0),
    ],
    // S6 D6 - Cardio LISS
    6: [E('s6d6_liss', 'Cardio LISS', 1, '60\'', 0, 'Jogging, trekking, nadar, bici, etc')],
  };

  // Helper para Cardio LISS (idéntico en todas las semanas)
  const LISS = (s) => [E(`s${s}d6_liss`, 'Cardio LISS', 1, '60\'', 0, 'Jogging, trekking, nadar, bici, etc')];

  // ═══ SEMANA 7 — Bodybuilding/Development (volumen aumentado vs S6) ═══
  W[7] = {
    1: [
      E('s7d1_mob_cat',      'Movilidad - Cat camel', 1, '10', 0),
      E('s7d1_mob_rot90',    'Movilidad - Rotación interna de cadera 90-90', 1, '8/lado', 0),
      E('s7d1_bird_dog',     'Core | Bird dog reach', 1, '10/lado', 0),
      E('s7d1_mob_flexesc',  'Movilidad - Flexiones escapulares', 1, '10', 0),
      E('s7d1_flex',         'Flexiones', 1, '10', 0),
      E('s7d1_buenos_dias',  'Buenos días con resistencia', 1, '10', 0),
      E('s7d1_puente_uni',   'Puente de glúteos unilateral', 1, '10/lado sin peso', 0),
      E('s7d1_pm_conv',      'Peso muerto convencional', 4, '12-15 (bajada lenta, subida rápida)', 60),
      E('s7d1_press_banca',  'Press banca con barra', 3, '12-15', 60),
      E('s7d1_press_milit',  'Press militar con barra', 3, '12-15', 60),
      E('s7d1_run',          'RUN | Carrera', 2, '15\'', 300),
      E('s7d1_sled',         'Sled push o empuje del trineo', 1, '50m', 180, 'WOD 1 serie'),
      E('s7d1_wallball',     'Wall ball', 1, '50 (intervalos según necesites)', 0, 'WOD 1 serie'),
      E('s7d1_est_espalda',  'Estiramiento - Espalda', 1, '20"', 0),
      E('s7d1_est_homb',     'Estiramiento - Hombros con rotación', 1, '20"', 0),
      E('s7d1_est_rod',      'Estiramiento - Rodilla al pecho', 1, '20"', 0),
    ],
    2: [
      E('s7d2_mob_rot_col',  'Movilidad - Rotación de columna en T', 1, '10/lado', 0),
      E('s7d2_mob_cat',      'Movilidad - Cat camel', 1, '10', 0),
      E('s7d2_mob_hip_car',  'Movilidad - Hip CAR', 1, '10/lado', 0),
      E('s7d2_bird_dog',     'Core | Bird dog reach', 1, '10/lado', 0),
      E('s7d2_mob_rlunge',   'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s7d2_thrusters',    'Thrusters con resistencia', 1, '10', 0),
      E('s7d2_worm',         'Core | Worm walks', 1, '10 con flexión', 0),
      E('s7d2_run_1000',     'RUN | Carrera', 2, '1000m', 0, 'WOD - máx 50\' o 2 rondas'),
      E('s7d2_wb_1',         'Wall ball', 2, '25', 0, 'WOD - máx 50\' o 2 rondas'),
      E('s7d2_run_800',      'RUN | Carrera', 2, '800m', 0, 'WOD - máx 50\' o 2 rondas'),
      E('s7d2_wb_2',         'Wall ball', 2, '25', 0, 'WOD - máx 50\' o 2 rondas'),
      E('s7d2_run_600',      'RUN | Carrera', 2, '600m', 0, 'WOD - máx 50\' o 2 rondas'),
      E('s7d2_wb_3',         'Wall ball', 2, '25', 0, 'WOD - máx 50\' o 2 rondas'),
      E('s7d2_run_400',      'RUN | Carrera', 2, '400m', 0, 'WOD - máx 50\' o 2 rondas'),
      E('s7d2_wb_4',         'Wall ball', 2, '25', 180, 'WOD - máx 50\' o 2 rondas'),
      E('s7d2_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s7d2_est_luna',     'Estiramiento | Media luna en sedestación', 1, '20"/lado', 0),
      E('s7d2_est_espalda',  'Estiramiento - Espalda en cajón', 1, '30"', 0),
      E('s7d2_est_pir',      'Estiramiento - Piramidal', 1, '30"', 0),
      E('s7d2_est_standing', 'Estiramientos - Standing reach down', 1, '30"', 0),
    ],
    4: [
      E('s7d4_mob_flex_tob', 'Movilidad - Flexión de tobillo de rodillas', 1, '10/lado con 3" pausa', 0),
      E('s7d4_mob_snow',     'Movilidad - Prone snow angels', 1, '10', 0),
      E('s7d4_mob_rlunge',   'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s7d4_mob_mangu',    'Movilidad - Manguitos rotadores con resistencia', 1, '10', 0),
      E('s7d4_remo_pie_r',   'Remo de pie con resistencia', 1, '10', 0),
      E('s7d4_goblet_pausa', 'Sentadilla goblet con doble pausa', 1, '10 poco peso', 0),
      E('s7d4_run_warm',     'RUN | Carrera', 1, '700m suave', 0),
      E('s7d4_sent_front',   'Sentadilla frontal', 4, '12-15', 60),
      E('s7d4_remo_uni_mc',  'Remo unilateral con mancuernas', 3, '12-15', 60),
      E('s7d4_run_1000a',    'RUN | Carrera', 1, '1000m ritmo constante', 0, 'WOD Performance - 1 ronda'),
      E('s7d4_skierg',       'ERGÓMETRO | SkiErg', 1, '1000m ritmo constante', 0, 'WOD Performance - 1 ronda'),
      E('s7d4_run_1000b',    'RUN | Carrera', 1, '1000m ritmo constante', 0, 'WOD Performance - 1 ronda'),
      E('s7d4_sled_push',    'Sled push o empuje del trineo', 1, '50m (tramos de 10m)', 0, 'WOD Performance - 1 ronda'),
      E('s7d4_run_500a',     'RUN | Carrera', 1, '500m ritmo constante', 0, 'WOD Performance - 1 ronda'),
      E('s7d4_sled_pull',    'Sled pull o arrastre de trineo', 1, '20m', 0, 'WOD Performance - 1 ronda'),
      E('s7d4_run_500b',     'RUN | Carrera', 1, '500m ritmo constante', 0, 'WOD Performance - 1 ronda'),
      E('s7d4_burpee_jump',  'FUNCIONAL | Burpee broad jump', 1, '40m', 0, 'WOD Performance - 1 ronda'),
      E('s7d4_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s7d4_est_pir',      'Estiramiento - Piramidal', 1, '30"', 0),
      E('s7d4_est_rod',      'Estiramiento - Rodilla al pecho', 1, '20"/lado', 0),
      E('s7d4_est_homb',     'Estiramiento - Hombros con rotación', 1, '30"/lado', 0),
      E('s7d4_est_standing', 'Estiramientos - Standing reach down', 1, '20"', 0),
    ],
    5: [
      E('s7d5_mob_cat',      'Movilidad - Cat camel', 1, '10', 0),
      E('s7d5_mob_rot90',    'Movilidad - Rotación interna de cadera 90-90', 1, '10 alternando', 0),
      E('s7d5_mob_rlunge',   'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s7d5_pullover_r',   'Pull over con resistencia', 1, '10', 0),
      E('s7d5_thrusters_r',  'Thrusters con resistencia', 1, '10', 0),
      E('s7d5_drunken_mc',   'Core | Drunken mountain climbers', 1, '30"', 0),
      E('s7d5_run_warm',     'RUN | Carrera', 1, '700m suave', 0),
      E('s7d5_skierg',       'ERGÓMETRO | SkiErg', 4, '350m alta intensidad', 180, 'WOD - 3/4 sets de 8\' (máximas rondas)'),
      E('s7d5_rowerg',       'ERGÓMETRO | RowErg', 4, '350m', 0, 'WOD - 3/4 sets de 8\''),
      E('s7d5_run',          'RUN | Carrera', 4, '350m', 0, 'WOD - 3/4 sets de 8\''),
      E('s7d5_burpees',      'HIIT | Burpees', 4, '25', 0, 'WOD - 3/4 sets de 8\' + 3\' descanso entre rondas'),
      E('s7d5_wallball',     'Wall ball', 4, '25', 0, 'WOD - 3/4 sets de 8\''),
      E('s7d5_zancadas',     'Zancadas sin peso', 4, '30', 0, 'WOD - 3/4 sets de 8\''),
      E('s7d5_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s7d5_est_espalda',  'Estiramiento - Espalda', 1, '30"', 0),
      E('s7d5_est_rod',      'Estiramiento - Rodilla al pecho', 1, '20"/lado', 0),
      E('s7d5_est_glut',     'Estiramiento - Glúteo medio', 1, '20"/lado', 0),
    ],
    6: LISS(7),
  };

  // ═══ SEMANA 8 — Bodybuilding/Development (Hip Thrust en D1, +Sumo deadlift D4 a Remo barra 90°, WOD largos en D2/D5) ═══
  W[8] = {
    1: [
      E('s8d1_mob_cat',      'Movilidad - Cat camel', 1, '10', 0),
      E('s8d1_mob_rot90',    'Movilidad - Rotación interna de cadera 90-90', 1, '8/lado', 0),
      E('s8d1_bird_dog',     'Core | Bird dog reach', 1, '10/lado', 0),
      E('s8d1_mob_flexesc',  'Movilidad - Flexiones escapulares', 1, '10', 0),
      E('s8d1_flex',         'Flexiones', 1, '10', 0),
      E('s8d1_buenos_dias',  'Buenos días con resistencia', 1, '10', 0),
      E('s8d1_puente_uni',   'Puente de glúteos unilateral', 1, '10/lado sin peso', 0),
      E('s8d1_hip_thrust',   'Hip Thrust', 4, '12-15 (bajada lenta, subida rápida)', 60),
      E('s8d1_press_banca',  'Press banca con barra', 3, '12-15', 60),
      E('s8d1_press_milit',  'Press militar con barra', 3, '12-15', 60),
      E('s8d1_sled_pull',    'Sled pull o arrastre de trineo', 1, '50m', 180, 'WOD 1 serie'),
      E('s8d1_burpee_jump',  'FUNCIONAL | Burpee broad jump', 1, '40m', 0, 'WOD 1 serie'),
      E('s8d1_est_espalda',  'Estiramiento - Espalda', 1, '20"', 0),
      E('s8d1_est_homb',     'Estiramiento - Hombros con rotación', 1, '20"', 0),
      E('s8d1_est_rod',      'Estiramiento - Rodilla al pecho', 1, '20"', 0),
    ],
    2: [
      E('s8d2_mob_rot_col',  'Movilidad - Rotación de columna en T', 1, '10/lado', 0),
      E('s8d2_mob_cat',      'Movilidad - Cat camel', 1, '10', 0),
      E('s8d2_mob_hip_car',  'Movilidad - Hip CAR', 1, '10/lado', 0),
      E('s8d2_bird_dog',     'Core | Bird dog reach', 1, '10/lado', 0),
      E('s8d2_mob_rlunge',   'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s8d2_thrusters',    'Thrusters con resistencia', 1, '10', 0),
      E('s8d2_worm',         'Core | Worm walks', 1, '10 con flexión', 0),
      E('s8d2_run_1500',     'RUN | Carrera', 1, '1500m', 0, 'WOD - 1 ronda - máx 50\' (ritmo constante)'),
      E('s8d2_rowerg_1500',  'ERGÓMETRO | RowErg', 1, '1500m', 0, 'WOD - 1 ronda - máx 50\''),
      E('s8d2_skierg_1500',  'ERGÓMETRO | SkiErg', 1, '1500m', 0, 'WOD - 1 ronda - máx 50\''),
      E('s8d2_farmer_100',   'FUNCIONAL | Farmer carry', 1, '100m', 0, 'WOD - 1 ronda - máx 50\''),
      E('s8d2_run_1000',     'RUN | Carrera', 1, '1000m', 0, 'WOD - 1 ronda - máx 50\''),
      E('s8d2_rowerg_1000',  'ERGÓMETRO | RowErg', 1, '1000m', 0, 'WOD - 1 ronda - máx 50\''),
      E('s8d2_skierg_1000',  'ERGÓMETRO | SkiErg', 1, '1000m', 0, 'WOD - 1 ronda - máx 50\''),
      E('s8d2_farmer_80',    'FUNCIONAL | Farmer carry', 1, '80m', 0, 'WOD - 1 ronda - máx 50\''),
      E('s8d2_run_500',      'RUN | Carrera', 1, '500m', 0, 'WOD - 1 ronda - máx 50\''),
      E('s8d2_rowerg_500',   'ERGÓMETRO | RowErg', 1, '500m', 0, 'WOD - 1 ronda - máx 50\''),
      E('s8d2_skierg_500',   'ERGÓMETRO | SkiErg', 1, '500m', 0, 'WOD - 1 ronda - máx 50\''),
      E('s8d2_farmer_60',    'FUNCIONAL | Farmer carry', 1, '60m', 0, 'WOD - 1 ronda - máx 50\''),
      E('s8d2_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s8d2_est_luna',     'Estiramiento | Media luna en sedestación', 1, '20"/lado', 0),
      E('s8d2_est_espalda',  'Estiramiento - Espalda en cajón', 1, '30"', 0),
      E('s8d2_est_pir',      'Estiramiento - Piramidal', 1, '30"', 0),
      E('s8d2_est_standing', 'Estiramientos - Standing reach down', 1, '30"', 0),
    ],
    4: [
      E('s8d4_mob_flex_tob', 'Movilidad - Flexión de tobillo de rodillas', 1, '10/lado con 3" pausa', 0),
      E('s8d4_mob_snow',     'Movilidad - Prone snow angels', 1, '10', 0),
      E('s8d4_mob_rlunge',   'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s8d4_mob_mangu',    'Movilidad - Manguitos rotadores con resistencia', 1, '10', 0),
      E('s8d4_remo_pie_r',   'Remo de pie con resistencia', 1, '10', 0),
      E('s8d4_goblet_pausa', 'Sentadilla goblet con doble pausa', 1, '10', 0),
      E('s8d4_sent_front',   'Sentadilla frontal', 3, '12-15', 60),
      E('s8d4_remo_barra',   'Remo con barra a 90°', 3, '12-15', 60),
      E('s8d4_run_1000a',    'RUN | Carrera', 1, '1000m ritmo constante 7/10', 0, 'WOD Performance - 1 ronda'),
      E('s8d4_skierg',       'ERGÓMETRO | SkiErg', 1, '1000m', 0, 'WOD Performance - 1 ronda'),
      E('s8d4_run_1000b',    'RUN | Carrera', 1, '1000m', 0, 'WOD Performance - 1 ronda'),
      E('s8d4_sled_push',    'Sled push o empuje del trineo', 1, '50m (tramos de 10m)', 0, 'WOD Performance - 1 ronda'),
      E('s8d4_run_1000c',    'RUN | Carrera', 1, '1000m', 0, 'WOD Performance - 1 ronda'),
      E('s8d4_sled_pull',    'Sled pull o arrastre de trineo', 1, '20m', 0, 'WOD Performance - 1 ronda'),
      E('s8d4_run_500',      'RUN | Carrera', 1, '500m', 0, 'WOD Performance - 1 ronda'),
      E('s8d4_burpee_jump',  'FUNCIONAL | Burpee broad jump', 1, '40m', 0, 'WOD Performance - 1 ronda'),
      E('s8d4_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s8d4_est_pir',      'Estiramiento - Piramidal', 1, '30"', 0),
      E('s8d4_est_rod',      'Estiramiento - Rodilla al pecho', 1, '20"/lado', 0),
      E('s8d4_est_homb',     'Estiramiento - Hombros con rotación', 1, '30"/lado', 0),
      E('s8d4_est_standing', 'Estiramientos - Standing reach down', 1, '20"', 0),
    ],
    5: [
      E('s8d5_mob_cat',      'Movilidad - Cat camel', 1, '10', 0),
      E('s8d5_mob_rot90',    'Movilidad - Rotación interna de cadera 90-90', 1, '10 alternando', 0),
      E('s8d5_mob_rlunge',   'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s8d5_pullover_r',   'Pull over con resistencia', 1, '10', 0),
      E('s8d5_thrusters_r',  'Thrusters con resistencia', 1, '10', 0),
      E('s8d5_drunken_mc',   'Core | Drunken mountain climbers', 1, '30"', 0),
      E('s8d5_run_warm',     'RUN | Carrera', 1, '500m suave (elegir entre carrera, RowErg o SkiErg)', 0),
      E('s8d5_skierg',       'ERGÓMETRO | SkiErg', 3, '250m alta intensidad', 270, 'WOD - 3 sets de 8\''),
      E('s8d5_broad_jump',   'FUNCIONAL | Broad jump', 3, '20m', 0, 'WOD - 3 sets de 8\''),
      E('s8d5_rowerg',       'ERGÓMETRO | RowErg', 3, '250m', 0, 'WOD - 3 sets de 8\''),
      E('s8d5_run',          'RUN | Carrera', 3, '300m', 0, 'WOD - 3 sets de 8\''),
      E('s8d5_farmer',       'FUNCIONAL | Farmer carry', 3, '80m', 0, 'WOD - 3 sets de 8\''),
      E('s8d5_burpees',      'HIIT | Burpees', 3, '20', 0, 'WOD - 3 sets de 8\''),
      E('s8d5_wallball',     'Wall ball', 3, '20', 0, 'WOD - 3 sets de 8\''),
      E('s8d5_comp_zanc',    'Zancadas sin peso', 3, '30', 0, 'COMPROMISED RUN - 3 rondas'),
      E('s8d5_comp_sent',    'Sentadilla sin peso', 3, '30', 0, 'COMPROMISED RUN - 3 rondas'),
      E('s8d5_comp_run',     'RUN | Carrera', 3, '200m', 120, 'COMPROMISED RUN - 3 rondas (2\' rest entre rondas)'),
      E('s8d5_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s8d5_est_espalda',  'Estiramiento - Espalda', 1, '30"', 0),
      E('s8d5_est_rod',      'Estiramiento - Rodilla al pecho', 1, '20"/lado', 0),
      E('s8d5_est_glut',     'Estiramiento - Glúteo medio', 1, '20"/lado', 0),
    ],
    6: LISS(8),
  };

  // ═══ SEMANA 9 — Bodybuilding/Development (intensificación: PM 4×8-10, Sentadilla libre 4×8-10) ═══
  W[9] = {
    1: [
      E('s9d1_mob_cat',      'Movilidad - Cat camel', 1, '10', 0),
      E('s9d1_mob_rot90',    'Movilidad - Rotación interna de cadera 90-90', 1, '8/lado', 0),
      E('s9d1_bird_dog',     'Core | Bird dog reach', 1, '10/lado', 0),
      E('s9d1_mob_flexesc',  'Movilidad - Flexiones escapulares', 1, '10', 0),
      E('s9d1_flex',         'Flexiones', 1, '10', 0),
      E('s9d1_buenos_dias',  'Buenos días con resistencia', 1, '10', 0),
      E('s9d1_puente_uni',   'Puente de glúteos unilateral', 1, '10/lado', 0),
      E('s9d1_run_warm',     'RUN | Carrera', 1, '5\' suave', 0),
      E('s9d1_pm_conv',      'Peso muerto convencional', 4, '8-10 (bajada lenta, subida rápida)', 60),
      E('s9d1_press_banca',  'Press banca con barra', 3, '8-10', 60),
      E('s9d1_press_milit',  'Press militar con barra', 3, '8-10', 60),
      E('s9d1_skierg',       'ERGÓMETRO | SkiErg', 1, '1000m', 0, 'WOD - 1 ronda'),
      E('s9d1_sled',         'Sled push o empuje del trineo', 1, '50m', 180, 'WOD 1 serie'),
      E('s9d1_burpee_jump',  'FUNCIONAL | Burpee broad jump', 1, '40m', 0, 'WOD 1 serie'),
      E('s9d1_est_espalda',  'Estiramiento - Espalda', 1, '20"', 0),
      E('s9d1_est_homb',     'Estiramiento - Hombros con rotación', 1, '20"', 0),
      E('s9d1_est_rod',      'Estiramiento - Rodilla al pecho', 1, '20"', 0),
    ],
    2: [
      E('s9d2_mob_rot_col',  'Movilidad - Rotación de columna en T', 1, '10/lado', 0),
      E('s9d2_mob_cat',      'Movilidad - Cat camel', 1, '10', 0),
      E('s9d2_mob_hip_car',  'Movilidad - Hip CAR', 1, '10/lado', 0),
      E('s9d2_bird_dog',     'Core | Bird dog reach', 1, '10/lado', 0),
      E('s9d2_mob_rlunge',   'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s9d2_thrusters',    'Thrusters con resistencia', 1, '10', 0),
      E('s9d2_worm',         'Core | Worm walks', 1, '10 con flexión', 0),
      E('s9d2_run_1km',      'RUN | Carrera', 3, '1km', 0, 'WOD - 3 rondas / máx 50\''),
      E('s9d2_walking_lung', 'SANDBAG | Walking lunges', 3, '40m', 120, 'WOD - 3 rondas / máx 50\''),
      E('s9d2_rowerg',       'ERGÓMETRO | RowErg', 3, '1000m', 0, 'WOD - 3 rondas / máx 50\''),
      E('s9d2_sled',         'Sled push o empuje del trineo', 3, '30m', 120, 'WOD - 3 rondas / máx 50\''),
      E('s9d2_run_1km_b',    'RUN | Carrera', 1, '1000m', 0, 'WOD - 1 ronda / máx 50\''),
      E('s9d2_farmer',       'FUNCIONAL | Farmer carry', 1, '100m', 120, 'WOD - 1 ronda / máx 50\''),
      E('s9d2_skierg',       'ERGÓMETRO | SkiErg', 1, '1000m', 0, 'WOD - 1 ronda / máx 50\''),
      E('s9d2_wallball',     'Wall ball', 1, '30', 120, 'WOD - 1 ronda / máx 50\''),
      E('s9d2_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s9d2_est_luna',     'Estiramiento | Media luna en sedestación', 1, '20"/lado', 0),
      E('s9d2_est_espalda',  'Estiramiento - Espalda en cajón', 1, '30"', 0),
      E('s9d2_est_pir',      'Estiramiento - Piramidal', 1, '30"', 0),
      E('s9d2_est_standing', 'Estiramientos - Standing reach down', 1, '30"', 0),
    ],
    4: [
      E('s9d4_mob_flex_tob', 'Movilidad - Flexión de tobillo de rodillas', 1, '10/lado con 3" pausa', 0),
      E('s9d4_mob_snow',     'Movilidad - Prone snow angels', 1, '10', 0),
      E('s9d4_mob_rlunge',   'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s9d4_mob_mangu',    'Movilidad - Manguitos rotadores con resistencia', 1, '10', 0),
      E('s9d4_remo_pie_r',   'Remo de pie con resistencia', 1, '10', 0),
      E('s9d4_goblet_pausa', 'Sentadilla goblet con doble pausa', 1, '10', 0),
      E('s9d4_sentadilla',   'Sentadilla libre | barra alta', 4, '8-10', 60),
      E('s9d4_run_1000a',    'RUN | Carrera', 1, '1000m', 0, 'WOD Performance - 1 ronda'),
      E('s9d4_skierg',       'ERGÓMETRO | SkiErg', 1, '1000m', 0, 'WOD Performance - 1 ronda'),
      E('s9d4_run_1000b',    'RUN | Carrera', 1, '1000m', 0, 'WOD Performance - 1 ronda'),
      E('s9d4_sled_push',    'Sled push o empuje del trineo', 1, '50m (tramos de 10m)', 0, 'WOD Performance - 1 ronda'),
      E('s9d4_run_1000c',    'RUN | Carrera', 1, '1000m', 0, 'WOD Performance - 1 ronda'),
      E('s9d4_sled_pull',    'Sled pull o arrastre de trineo', 1, '25m', 0, 'WOD Performance - 1 ronda'),
      E('s9d4_run_500a',     'RUN | Carrera', 1, '500m', 0, 'WOD Performance - 1 ronda'),
      E('s9d4_burpee_jump',  'FUNCIONAL | Burpee broad jump', 1, '40m', 0, 'WOD Performance - 1 ronda'),
      E('s9d4_run_500b',     'RUN | Carrera', 1, '500m', 0, 'WOD Performance - 1 ronda'),
      E('s9d4_rowerg',       'ERGÓMETRO | RowErg', 1, '500m', 0, 'WOD Performance - 1 ronda'),
      E('s9d4_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s9d4_est_pir',      'Estiramiento - Piramidal', 1, '30"', 0),
      E('s9d4_est_rod',      'Estiramiento - Rodilla al pecho', 1, '20"/lado', 0),
      E('s9d4_est_homb',     'Estiramiento - Hombros con rotación', 1, '30"/lado', 0),
      E('s9d4_est_standing', 'Estiramientos - Standing reach down', 1, '20"', 0),
    ],
    5: [
      E('s9d5_mob_cat',      'Movilidad - Cat camel', 1, '10', 0),
      E('s9d5_mob_rot90',    'Movilidad - Rotación interna de cadera 90-90', 1, '10 alternando', 0),
      E('s9d5_mob_rlunge',   'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s9d5_pullover_r',   'Pull over con resistencia', 1, '10', 0),
      E('s9d5_thrusters_r',  'Thrusters con resistencia', 1, '10', 0),
      E('s9d5_drunken_mc',   'Core | Drunken mountain climbers', 1, '30"', 0),
      E('s9d5_comp_zanc',    'Zancadas sin peso', 4, '50', 0, 'COMPROMISED RUNS - 4 rondas + 2\' descanso tras ronda'),
      E('s9d5_comp_sent',    'Sentadilla sin peso', 4, '30', 0, 'COMPROMISED RUNS - 4 rondas'),
      E('s9d5_comp_run',     'RUN | Carrera', 4, '300m', 120, 'COMPROMISED RUNS - 4 rondas + 2\' descanso al finalizar'),
      E('s9d5_skierg',       'ERGÓMETRO | SkiErg', 4, '250m alta intensidad', 180, 'WOD - 3/4 series de 8\' + 3\' descanso entre series'),
      E('s9d5_broad_jump',   'FUNCIONAL | Broad jump', 4, '20', 180, 'WOD - 3/4 series de 8\''),
      E('s9d5_run',          'RUN | Carrera', 4, '300m', 0, 'WOD - 3/4 series de 8\''),
      E('s9d5_farmer',       'FUNCIONAL | Farmer carry', 4, '80m', 0, 'WOD - 3/4 series de 8\''),
      E('s9d5_burpees',      'HIIT | Burpees', 4, '20', 0, 'WOD - 3/4 series de 8\''),
      E('s9d5_wallball',     'Wall ball', 4, '20', 0, 'WOD - 3/4 series de 8\''),
      E('s9d5_est_nino',     'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s9d5_est_espalda',  'Estiramiento - Espalda', 1, '30"', 0),
      E('s9d5_est_rod',      'Estiramiento - Rodilla al pecho', 1, '20"/lado', 0),
      E('s9d5_est_glut',     'Estiramiento - Glúteo medio', 1, '20"/lado', 0),
    ],
    6: LISS(9),
  };

  // ═══ SEMANA 10 — Stimulation/Development (peaking) ═══
  W[10] = {
    1: [
      E('s10d1_mob_cat',     'Movilidad - Cat camel', 1, '10', 0),
      E('s10d1_mob_rot90',   'Movilidad - Rotación interna de cadera 90-90', 1, '8/lado', 0),
      E('s10d1_bird_dog',    'Core | Bird dog reach', 1, '10/lado', 0),
      E('s10d1_mob_flexesc', 'Movilidad - Flexiones escapulares', 1, '10', 0),
      E('s10d1_flex',        'Flexiones', 1, '10', 0),
      E('s10d1_buenos_dias', 'Buenos días con resistencia', 1, '10', 0),
      E('s10d1_puente_uni',  'Puente de glúteos unilateral', 1, '10/lado sin peso', 0),
      E('s10d1_run_warm',    'RUN | Carrera', 1, '500m suave', 0),
      E('s10d1_rowerg_warm', 'ERGÓMETRO | RowErg', 1, '500m suave', 0),
      E('s10d1_run_workout', 'RUN | Carrera', 1, '35\' RPE 7/10 (poder mantener conversación)', 0, 'WORKOUT - RUN'),
      E('s10d1_sled_pull',   'Sled pull o arrastre de trineo', 1, '50m', 120, 'WOD - 1 serie'),
      E('s10d1_rowerg_wod',  'ERGÓMETRO | RowErg', 1, '1000m', 120, 'WOD - 1 serie'),
      E('s10d1_farmer',      'FUNCIONAL | Farmer carry', 1, '150m', 0, 'WOD 1 serie'),
      E('s10d1_est_espalda', 'Estiramiento - Espalda', 1, '20"', 0),
      E('s10d1_est_homb',    'Estiramiento - Hombros con rotación', 1, '20"', 0),
      E('s10d1_est_rod',     'Estiramiento - Rodilla al pecho', 1, '20"', 0),
    ],
    2: [
      E('s10d2_mob_rot_col', 'Movilidad - Rotación de columna en T', 1, '10/lado', 0),
      E('s10d2_mob_cat',     'Movilidad - Cat camel', 1, '10', 0),
      E('s10d2_mob_hip_car', 'Movilidad - Hip CAR', 1, '10/lado', 0),
      E('s10d2_bird_dog',    'Core | Bird dog reach', 1, '10/lado', 0),
      E('s10d2_mob_rlunge',  'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s10d2_thrusters',   'Thrusters con resistencia', 1, '10', 0),
      E('s10d2_worm',        'Core | Worm walks', 1, '10 con flexión', 0),
      E('s10d2_run_warm',    'RUN | Carrera', 1, '500m suave', 0),
      E('s10d2_rowerg_warm', 'ERGÓMETRO | RowErg', 1, '500m suave', 0),
      E('s10d2_rowerg_wod',  'ERGÓMETRO | RowErg', 4, '800-1000m', 120, 'WOD - 3/4 sets (10-15\' por set, empezar cada set desde el principio)'),
      E('s10d2_burpees',     'HIIT | Burpees', 4, '20', 0, 'WOD - 3/4 sets'),
      E('s10d2_run',         'RUN | Carrera', 4, '200-400m', 0, 'WOD - 3/4 sets'),
      E('s10d2_farmer',      'FUNCIONAL | Farmer carry', 4, '60-70m', 0, 'WOD - 3/4 sets'),
      E('s10d2_walking_lung','SANDBAG | Walking lunges', 4, '30', 0, 'WOD - 3/4 sets'),
      E('s10d2_wallball',    'Wall ball', 4, '25', 0, 'WOD - 3/4 sets'),
      E('s10d2_est_nino',    'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s10d2_est_luna',    'Estiramiento | Media luna en sedestación', 1, '20"/lado', 0),
      E('s10d2_est_espalda', 'Estiramiento - Espalda en cajón', 1, '30"', 0),
      E('s10d2_est_pir',     'Estiramiento - Piramidal', 1, '30"', 0),
      E('s10d2_est_standing','Estiramientos - Standing reach down', 1, '30"', 0),
    ],
    4: [
      E('s10d4_mob_flex_tob','Movilidad - Flexión de tobillo de rodillas', 1, '10/lado con 3" pausa', 0),
      E('s10d4_mob_snow',    'Movilidad - Prone snow angels', 1, '10', 0),
      E('s10d4_mob_rlunge',  'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s10d4_mob_mangu',   'Movilidad - Manguitos rotadores con resistencia', 1, '10', 0),
      E('s10d4_remo_pie_r',  'Remo de pie con resistencia', 1, '10', 0),
      E('s10d4_goblet_pausa','Sentadilla goblet con doble pausa', 1, '10 poco peso', 0),
      E('s10d4_skierg_warm', 'ERGÓMETRO | SkiErg', 1, '500m suave', 0),
      E('s10d4_run_1a',      'RUN | Carrera', 1, '1000 o 800m ritmo constante 7-8/10', 0, 'WOD Performance - 1 ronda'),
      E('s10d4_skierg',      'ERGÓMETRO | SkiErg', 1, '1000 o 800m', 0, 'WOD Performance - 1 ronda'),
      E('s10d4_run_1b',      'RUN | Carrera', 1, '1000 o 800m', 0, 'WOD Performance - 1 ronda'),
      E('s10d4_sled_push',   'Sled push o empuje del trineo', 1, '50m (tramos de 10m)', 0, 'WOD Performance - 1 ronda'),
      E('s10d4_run_1c',      'RUN | Carrera', 1, '1000m o 800m', 0, 'WOD Performance - 1 ronda'),
      E('s10d4_sled_pull',   'Sled pull o arrastre de trineo', 1, '25m', 0, 'WOD Performance - 1 ronda'),
      E('s10d4_run_1d',      'RUN | Carrera', 1, '1000m o 800m', 0, 'WOD Performance - 1 ronda'),
      E('s10d4_burpee_jump', 'FUNCIONAL | Burpee broad jump', 1, '40m', 0, 'WOD Performance - 1 ronda'),
      E('s10d4_run_500a',    'RUN | Carrera', 1, '500m', 0, 'WOD Performance - 1 ronda'),
      E('s10d4_rowerg',      'ERGÓMETRO | RowErg', 1, '1000m o 800m', 0, 'WOD Performance - 1 ronda'),
      E('s10d4_run_500b',    'RUN | Carrera', 1, '500m', 0, 'WOD Performance - 1 ronda'),
      E('s10d4_est_nino',    'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s10d4_est_pir',     'Estiramiento - Piramidal', 1, '30"', 0),
      E('s10d4_est_rod',     'Estiramiento - Rodilla al pecho', 1, '20"/lado', 0),
      E('s10d4_est_homb',    'Estiramiento - Hombros con rotación', 1, '30"/lado', 0),
      E('s10d4_est_standing','Estiramientos - Standing reach down', 1, '20"', 0),
    ],
    5: [
      E('s10d5_mob_cat',     'Movilidad - Cat camel', 1, '10', 0),
      E('s10d5_mob_rot90',   'Movilidad - Rotación interna de cadera 90-90', 1, '10 alternando', 0),
      E('s10d5_mob_rlunge',  'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s10d5_pullover_r',  'Pull over con resistencia', 1, '10', 0),
      E('s10d5_thrusters_r', 'Thrusters con resistencia', 1, '10', 0),
      E('s10d5_drunken_mc',  'Core | Drunken mountain climbers', 1, '30"', 0),
      E('s10d5_run_warm',    'RUN | Carrera', 1, '500m suave', 0),
      E('s10d5_comp_zanc',   'Zancadas sin peso', 4, '50', 0, 'COMPROMISED RUNS - 4 rondas + 2\' descanso tras ronda'),
      E('s10d5_comp_sent',   'Sentadilla sin peso', 4, '30', 0, 'COMPROMISED RUNS - 4 rondas'),
      E('s10d5_comp_run',    'RUN | Carrera', 4, '300m', 120, 'COMPROMISED RUNS - 4 rondas'),
      E('s10d5_pyr_burpee',  'FUNCIONAL | Burpee broad jump', 1, '25-20-15-10-15-20-25 metros', 0, 'WOD piramidal 25-20-15-10-15-20-25 - intensidad estable'),
      E('s10d5_pyr_walk',    'SANDBAG | Walking lunges', 1, '25-20-15-10-15-20-25 reps', 0, 'WOD piramidal'),
      E('s10d5_pyr_wb',      'Wall ball', 1, '25-20-15-10-15-20-25 reps', 0, 'WOD piramidal'),
      E('s10d5_pyr_skierg',  'ERGÓMETRO | SkiErg', 1, '25-20-15-10-15-20-25 segundos', 0, 'WOD piramidal'),
      E('s10d5_est_nino',    'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s10d5_est_espalda', 'Estiramiento - Espalda', 1, '30"', 0),
      E('s10d5_est_rod',     'Estiramiento - Rodilla al pecho', 1, '20"/lado', 0),
      E('s10d5_est_glut',    'Estiramiento - Glúteo medio', 1, '20"/lado', 0),
    ],
    6: LISS(10),
  };

  // ═══ SEMANA 11 — Stimulation/Development (con variantes nivel AV/INT) ═══
  W[11] = {
    1: [
      E('s11d1_mob_cat',     'Movilidad - Cat camel', 1, '10', 0),
      E('s11d1_mob_rot90',   'Movilidad - Rotación interna de cadera 90-90', 1, '8/lado', 0),
      E('s11d1_bird_dog',    'Core | Bird dog reach', 1, '10/lado', 0),
      E('s11d1_mob_flexesc', 'Movilidad - Flexiones escapulares', 1, '10', 0),
      E('s11d1_flex',        'Flexiones', 1, '10', 0),
      E('s11d1_buenos_dias', 'Buenos días con resistencia', 1, '10', 0),
      E('s11d1_puente_uni',  'Puente de glúteos unilateral', 1, '10/lado sin peso', 0),
      E('s11d1_run_warm',    'RUN | Carrera', 1, '500m suave', 0),
      E('s11d1_rowerg_warm', 'ERGÓMETRO | RowErg', 1, '500m suave', 0),
      E('s11d1_run_workout', 'RUN | Carrera', 1, '40\' RPE 7/10 (poder mantener conversación)', 0, 'WORKOUT - RUN'),
      E('s11d1_walking_lung','SANDBAG | Walking lunges', 1, '100m o 70m', 60, 'WOD - 1 serie'),
      E('s11d1_wallball',    'Wall ball', 1, '50 o 30', 60, 'WOD - 1 serie'),
      E('s11d1_skierg',      'ERGÓMETRO | SkiErg', 1, '500 o 300m', 60, 'WOD - 1 serie'),
      E('s11d1_sled_push',   'Sled push o empuje del trineo', 1, '25m', 0, 'WOD - 1 serie'),
      E('s11d1_est_espalda', 'Estiramiento - Espalda', 1, '20"', 0),
      E('s11d1_est_homb',    'Estiramiento - Hombros con rotación', 1, '20"', 0),
      E('s11d1_est_rod',     'Estiramiento - Rodilla al pecho', 1, '20"', 0),
    ],
    2: [
      E('s11d2_mob_rot_col', 'Movilidad - Rotación de columna en T', 1, '10/lado', 0),
      E('s11d2_mob_cat',     'Movilidad - Cat camel', 1, '10', 0),
      E('s11d2_mob_hip_car', 'Movilidad - Hip CAR', 1, '10/lado', 0),
      E('s11d2_bird_dog',    'Core | Bird dog reach', 1, '10/lado', 0),
      E('s11d2_mob_rlunge',  'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s11d2_thrusters',   'Thrusters con resistencia', 1, '10', 0),
      E('s11d2_worm',        'Core | Worm walks', 1, '10 con flexión', 0),
      E('s11d2_run_1500',    'RUN | Carrera', 1, '1500m / 1000m', 0, 'WOD - máx 50\' RPE 7/10 estable'),
      E('s11d2_walking_a',   'SANDBAG | Walking lunges', 1, '50m / 30m', 0, 'WOD - máx 50\''),
      E('s11d2_sled_a',      'Sled push o empuje del trineo', 1, '50m / 30m', 0, 'WOD - máx 50\''),
      E('s11d2_skierg_a',    'ERGÓMETRO | SkiErg', 1, '1000m / 800m', 0, 'WOD - máx 50\''),
      E('s11d2_run_1000',    'RUN | Carrera', 1, '1000m / 800m', 0, 'WOD - máx 50\''),
      E('s11d2_walking_b',   'SANDBAG | Walking lunges', 1, '25m', 0, 'WOD - máx 50\''),
      E('s11d2_sled_b',      'Sled push o empuje del trineo', 1, '25m', 0, 'WOD - máx 50\''),
      E('s11d2_skierg_b',    'ERGÓMETRO | SkiErg', 1, '500m / 300m', 0, 'WOD - máx 50\''),
      E('s11d2_wallball',    'Wall ball', 1, '50 (las que puedas, sin tiempo)', 0, 'CASH OUT - 1 serie'),
      E('s11d2_est_nino',    'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s11d2_est_luna',    'Estiramiento | Media luna en sedestación', 1, '20"/lado', 0),
      E('s11d2_est_espalda', 'Estiramiento - Espalda en cajón', 1, '30"', 0),
      E('s11d2_est_pir',     'Estiramiento - Piramidal', 1, '30"', 0),
      E('s11d2_est_standing','Estiramientos - Standing reach down', 1, '30"', 0),
    ],
    4: [
      E('s11d4_mob_mangu',   'Movilidad - Manguitos rotadores con resistencia', 1, '10', 0),
      E('s11d4_remo_pie_r',  'Remo de pie con resistencia', 1, '10', 0),
      E('s11d4_goblet_pausa','Sentadilla goblet con doble pausa', 1, '10 poco peso', 0),
      E('s11d4_run_1a',      'RUN | Carrera', 1, '1000m o 800m ritmo constante RPE 7-8/10', 0, 'WOD Performance - 1 ronda'),
      E('s11d4_skierg',      'ERGÓMETRO | SkiErg', 1, '1000m o 800m', 0, 'WOD Performance - 1 ronda'),
      E('s11d4_run_1b',      'RUN | Carrera', 1, '1000 o 800m', 0, 'WOD Performance - 1 ronda'),
      E('s11d4_sled_push',   'Sled push o empuje del trineo', 1, '50m (tramos de 10m)', 0, 'WOD Performance - 1 ronda'),
      E('s11d4_run_1c',      'RUN | Carrera', 1, '1000m o 800m', 0, 'WOD Performance - 1 ronda'),
      E('s11d4_sled_pull',   'Sled pull o arrastre de trineo', 1, '25m', 0, 'WOD Performance - 1 ronda'),
      E('s11d4_run_1d',      'RUN | Carrera', 1, '1000m o 800m', 0, 'WOD Performance - 1 ronda'),
      E('s11d4_burpee_jump', 'FUNCIONAL | Burpee broad jump', 1, '40m o 30m', 0, 'WOD Performance - 1 ronda'),
      E('s11d4_run_500a',    'RUN | Carrera', 1, '500m o 300m', 0, 'WOD Performance - 1 ronda'),
      E('s11d4_rowerg',      'ERGÓMETRO | RowErg', 1, '1000m o 800m', 0, 'WOD Performance - 1 ronda'),
      E('s11d4_run_500b',    'RUN | Carrera', 1, '500m', 0, 'WOD Performance - 1 ronda'),
      E('s11d4_farmer',      'FUNCIONAL | Farmer carry', 1, '100m o 70m', 0, 'WOD Performance - 1 ronda'),
      E('s11d4_est_nino',    'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s11d4_est_pir',     'Estiramiento - Piramidal', 1, '30"', 0),
      E('s11d4_est_rod',     'Estiramiento - Rodilla al pecho', 1, '20"/lado', 0),
      E('s11d4_est_homb',    'Estiramiento - Hombros con rotación', 1, '30"/lado', 0),
      E('s11d4_est_standing','Estiramientos - Standing reach down', 1, '20"', 0),
    ],
    5: [
      E('s11d5_mob_cat',     'Movilidad - Cat camel', 1, '10', 0),
      E('s11d5_mob_rot90',   'Movilidad - Rotación interna de cadera 90-90', 1, '10 alternando', 0),
      E('s11d5_mob_rlunge',  'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s11d5_pullover_r',  'Pull over con resistencia', 1, '10', 0),
      E('s11d5_thrusters_r', 'Thrusters con resistencia', 1, '10', 0),
      E('s11d5_drunken_mc',  'Core | Drunken mountain climbers', 1, '30"', 0),
      E('s11d5_comp_zanc',   'Zancadas sin peso', 3, '50', 0, 'COMPROMISED RUNS - 3 rondas + 2\' descanso tras ronda'),
      E('s11d5_comp_sent',   'Sentadilla sin peso', 3, '30', 0, 'COMPROMISED RUNS - 3 rondas'),
      E('s11d5_comp_run',    'RUN | Carrera', 3, '300m', 120, 'COMPROMISED RUNS - 3 rondas'),
      E('s11d5_pyr_burpee',  'FUNCIONAL | Burpee broad jump', 1, '25-20-15-10-15-20-25 metros', 0, 'WOD piramidal (7 rondas) - intensidad estable'),
      E('s11d5_pyr_walk',    'SANDBAG | Walking lunges', 1, '25-20-15-10-15-20-25 reps', 0, 'WOD piramidal'),
      E('s11d5_pyr_wb',      'Wall ball', 1, '25-20-15-10-15-20-25 reps', 0, 'WOD piramidal'),
      E('s11d5_pyr_skierg',  'ERGÓMETRO | SkiErg', 1, '25-20-15-10-15-20-25 segundos', 0, 'WOD piramidal'),
      E('s11d5_est_nino',    'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s11d5_est_espalda', 'Estiramiento - Espalda', 1, '30"', 0),
      E('s11d5_est_rod',     'Estiramiento - Rodilla al pecho', 1, '20"/lado', 0),
      E('s11d5_est_glut',    'Estiramiento - Glúteo medio', 1, '20"/lado', 0),
    ],
    6: LISS(11),
  };

  // ═══ SEMANA 12 — Final con Test HYROX ═══
  W[12] = {
    1: [
      E('s12d1_mob_cat',     'Movilidad - Cat camel', 1, '10', 0),
      E('s12d1_mob_rot90',   'Movilidad - Rotación interna de cadera 90-90', 1, '8/lado', 0),
      E('s12d1_bird_dog',    'Core | Bird dog reach', 1, '10/lado', 0),
      E('s12d1_mob_flexesc', 'Movilidad - Flexiones escapulares', 1, '10', 0),
      E('s12d1_plancha',     'Core | Plancha de codos a manos', 1, '8/lado', 0),
      E('s12d1_buenos_dias', 'Buenos días con resistencia', 1, '10', 0),
      E('s12d1_puente_uni',  'Puente de glúteos unilateral', 1, '10/lado sin peso', 0),
      E('s12d1_rowerg_warm', 'ERGÓMETRO | RowErg', 1, '500m suave', 0),
      E('s12d1_run_workout', 'RUN | Carrera', 1, '45\' (poder mantener conversación)', 0, 'WORKOUT - RUN'),
      E('s12d1_sled_pull',   'Sled pull o arrastre de trineo', 1, '25m', 120, 'WOD - 1 serie'),
      E('s12d1_burpee_jump', 'FUNCIONAL | Burpee broad jump', 1, '40m', 0, 'WOD - 1 serie'),
      E('s12d1_est_espalda', 'Estiramiento - Espalda', 1, '20"', 0),
      E('s12d1_est_homb',    'Estiramiento - Hombros con rotación', 1, '20"', 0),
      E('s12d1_est_rod',     'Estiramiento - Rodilla al pecho', 1, '20"', 0),
      E('s12d1_est_pir',     'Estiramiento - Piramidal', 1, '20"/lado', 0),
      E('s12d1_est_standing','Estiramientos - Standing reach down', 1, '20"', 0),
    ],
    2: [
      E('s12d2_mob_rot_col', 'Movilidad - Rotación de columna en T', 1, '10/lado', 0),
      E('s12d2_mob_cat',     'Movilidad - Cat camel', 1, '10', 0),
      E('s12d2_mob_hip_car', 'Movilidad - Hip CAR', 1, '10/lado', 0),
      E('s12d2_bird_dog',    'Core | Bird dog reach', 1, '10/lado', 0),
      E('s12d2_mob_rlunge',  'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s12d2_thrusters',   'Thrusters con resistencia', 1, '10', 0),
      E('s12d2_worm',        'Core | Worm walks', 1, '10 con flexión', 0),
      E('s12d2_run_a',       'RUN | Carrera', 1, 'AV 2km / INT+ 1,5km / INT- 1km', 0, 'WOD - máx 50\' RPE 7/10 estable'),
      E('s12d2_farmer_a',    'FUNCIONAL | Farmer carry', 1, 'AV 100m / INT 70m', 0, 'WOD - máx 50\''),
      E('s12d2_run_b',       'RUN | Carrera', 1, 'AV 2km / INT+ 1,5km / INT- 1km', 0, 'WOD - máx 50\''),
      E('s12d2_walking_a',   'SANDBAG | Walking lunges', 1, 'AV 50m / INT 30m', 0, 'WOD - máx 50\''),
      E('s12d2_run_c',       'RUN | Carrera', 1, 'AV 2km / INT+ 1,5km / INT- 1km', 0, 'WOD - máx 50\''),
      E('s12d2_farmer_b',    'FUNCIONAL | Farmer carry', 1, 'AV 100m / INT 70m', 0, 'WOD - máx 50\''),
      E('s12d2_run_d',       'RUN | Carrera', 1, 'AV 2km / INT+ 1,5km / INT- 1km', 0, 'WOD - máx 50\''),
      E('s12d2_walking_b',   'SANDBAG | Walking lunges', 1, 'AV 50m / INT 30m', 0, 'WOD - máx 50\''),
      E('s12d2_wallball',    'Wall ball', 3, '30', 300, 'WOD FINISHER - 3×7\' con 5\' descanso'),
      E('s12d2_walking_fin', 'SANDBAG | Walking lunges', 1, '40m (AV con peso / INT sin o poco peso)', 0),
      E('s12d2_run_fin',     'RUN | Carrera', 1, 'Hasta completar los 7\'', 300),
      E('s12d2_est_nino',    'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s12d2_est_luna',    'Estiramiento | Media luna en sedestación', 1, '20"/lado', 0),
      E('s12d2_est_espalda', 'Estiramiento - Espalda en cajón', 1, '30"', 0),
      E('s12d2_est_pir',     'Estiramiento - Piramidal', 1, '30"', 0),
      E('s12d2_est_standing','Estiramientos - Standing reach down', 1, '30"', 0),
    ],
    4: [
      E('s12d4_mob_flex_tob','Movilidad - Flexión de tobillo de rodillas', 1, '10/lado con 3" pausa', 0),
      E('s12d4_mob_balanceo','Movilidad - Balanceo de piernas', 1, '10/lado', 0),
      E('s12d4_mob_rlunge',  'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s12d4_skipping_a',  'Técnica de carrera | Skipping alto', 1, '30"', 0),
      E('s12d4_skipping_b',  'Técnica de carrera | Skipping talón glúteo', 1, '30"', 0),
      E('s12d4_mob_cossak',  'Movilidad - Cossak squat', 1, '12 alternando', 0),
      E('s12d4_easy_run',    'RUN | Carrera', 1, '20-30\'', 0, 'EASY RUN'),
      E('s12d4_est_nino',    'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s12d4_est_pir',     'Estiramiento - Piramidal', 1, '30"', 0),
      E('s12d4_est_rod',     'Estiramiento - Rodilla al pecho', 1, '20"/lado', 0),
      E('s12d4_est_homb',    'Estiramiento - Hombros con rotación', 1, '30"/lado', 0),
      E('s12d4_est_standing','Estiramientos - Standing reach down', 1, '20"', 0),
      E('s12d4_foam_gem',    'Foam roller | Gemelos', 1, '10/lado', 0),
      E('s12d4_foam_fem',    'Foam roller | Femoral', 1, '10/lado', 0),
      E('s12d4_foam_glut',   'Foam roller | Glúteo medio', 1, '10/lado', 0),
      E('s12d4_foam_cuad',   'Foam roller | Cuádriceps', 1, '10/lado', 0),
    ],
    5: [
      E('s12d5_mob_cat',     'Movilidad - Cat camel', 1, '10', 0),
      E('s12d5_mob_rot90',   'Movilidad - Rotación interna de cadera 90-90', 1, '10 alternando', 0),
      E('s12d5_mob_rlunge',  'Movilidad - Runners lunge with reach', 1, '10/lado', 0),
      E('s12d5_pullover_r',  'Pull over con resistencia', 1, '10', 0),
      E('s12d5_thrusters_r', 'Thrusters con resistencia', 1, '10', 0),
      E('s12d5_drunken_mc',  'Core | Drunken mountain climbers', 1, '30"', 0),
      E('s12d5_zancadas',    'Zancadas sin peso', 1, '20 alternando', 0),
      E('s12d5_plancha',     'Core | Plancha de codos a manos', 1, '6/lado', 0),
      E('s12d5_run_1',       'RUN | Carrera', 1, '1km / 800m', 0, 'FINAL "HYROX" - 1 ronda - intensidad estable'),
      E('s12d5_skierg',      'ERGÓMETRO | SkiErg', 1, '1km / 800m', 0, 'FINAL "HYROX"'),
      E('s12d5_run_2',       'RUN | Carrera', 1, '500m / 300m', 0, 'FINAL "HYROX"'),
      E('s12d5_sled_push',   'Sled push o empuje del trineo', 1, '50m / 30m', 0, 'FINAL "HYROX"'),
      E('s12d5_run_3',       'RUN | Carrera', 1, '500m / 300m', 0, 'FINAL "HYROX"'),
      E('s12d5_sled_pull',   'Sled pull o arrastre de trineo', 1, '25m', 0, 'FINAL "HYROX"'),
      E('s12d5_run_4',       'RUN | Carrera', 1, '500m / 300m', 0, 'FINAL "HYROX"'),
      E('s12d5_burpee_jump', 'FUNCIONAL | Burpee broad jump', 1, '30m', 0, 'FINAL "HYROX"'),
      E('s12d5_run_5',       'RUN | Carrera', 1, '500m / 300m', 0, 'FINAL "HYROX"'),
      E('s12d5_rowerg',      'ERGÓMETRO | RowErg', 1, '1km / 600m', 0, 'FINAL "HYROX"'),
      E('s12d5_run_6',       'RUN | Carrera', 1, '500m / 300m', 0, 'FINAL "HYROX"'),
      E('s12d5_farmer',      'FUNCIONAL | Farmer carry', 1, '100m / 60m', 0, 'FINAL "HYROX"'),
      E('s12d5_run_7',       'RUN | Carrera', 1, '500m / 300m', 0, 'FINAL "HYROX"'),
      E('s12d5_walking',     'SANDBAG | Walking lunges', 1, '50m / 30m', 0, 'FINAL "HYROX"'),
      E('s12d5_run_8',       'RUN | Carrera', 1, '500m / 300m', 0, 'FINAL "HYROX"'),
      E('s12d5_wallball',    'Wall ball', 1, '30 / 15', 0, 'FINAL "HYROX" — ¡¡LO CONSEGUISTE, ENHORABUENA!!'),
      E('s12d5_est_nino',    'Estiramiento | Postura del niño con rodillas separadas', 1, '30"', 0),
      E('s12d5_est_espalda', 'Estiramiento - Espalda', 1, '30"', 0),
      E('s12d5_est_rod',     'Estiramiento - Rodilla al pecho', 1, '20"/lado', 0),
      E('s12d5_est_glut',    'Estiramiento - Glúteo medio', 1, '20"/lado', 0),
    ],
    6: LISS(12),
  };

  WORKOUT_PLANS.woods = {
    id: 'woods',
    name: 'Woods',
    planType: 'phased',
    weeks: 12,
    description: 'Plan 12 semanas estilo CrossFit/Hyrox con WOD, AMRAP, Tabata, ergómetros (SkiErg, RowErg), trineo, wall ball y KB. S1 = 4 días. S2-S12 = 5 días (añade Cardio LISS 60\' los D6). Bloques: S1-S4 Endurance/Fuerza/Performance · S5-S9 Bodybuilding/Development · S10-S12 Stimulation + Test HYROX final.',
    trainingDays: [1, 2, 4, 5, 6],
    dayMeta: {
      1: { name: 'WOD Principal',  type: 'strength', muscleGroups: ['Funcional', 'Full body'] },
      2: { name: 'Endurance',      type: 'strength', muscleGroups: ['Funcional', 'Cardio'] },
      4: { name: 'Fuerza / Run',   type: 'strength', muscleGroups: ['Cardio', 'Full body'] },
      5: { name: 'Performance',    type: 'strength', muscleGroups: ['Funcional', 'Full body'] },
      6: { name: 'Cardio LISS',    type: 'strength', muscleGroups: ['Cardio'] }
    },
    weeklySchedule: Array.from({ length: 12 }, (_, i) => {
      const w = W[i + 1];
      const out = { 1: w[1], 2: w[2], 4: w[4], 5: w[5] };
      if (w[6]) out[6] = w[6];
      return out;
    })
  };
})();

/* ══════════════ ATLETA (12 semanas — 2 bloques × 6 sem) ══════════════ */
(function () {
  const E = (id, name, sets, reps, rest, notes) => _ex(`atl_${id}`, name, sets, reps, rest, notes);

  // ─────── BLOQUE 1 (S1-S6): BASE — acondicionamiento técnico + fuerza ───────
  const B1_D1 = (s) => [
    E(`s${s}d1_caminar`,    'Caminar con inclinación (cinta)', 1, '4-5 minutos', 0),
    E(`s${s}d1_mob_flex_tob`, 'Movilidad - Flexión de tobillo de rodillas', 2, '8/lado', 0),
    E(`s${s}d1_mob_rot90`,  'Movilidad - Rotación interna de cadera 90-90', 1, '6/lado', 0),
    E(`s${s}d1_puente_uni`, 'Puente de glúteos unilateral', 2, '5/lado', 0),
    E(`s${s}d1_goblet_pausa`, 'Sentadilla goblet con doble pausa', 2, '4 (sin peso)', 0),
    E(`s${s}d1_sent_aprox`, 'Sentadilla libre | barra alta (aproximación)', 1, '2-3', 0),
    E(`s${s}d1_sent`,       'Sentadilla libre | barra alta', 3, '8-10', 90),
    E(`s${s}d1_reverse_lung`,'Reverse lunge / Zancadas traseras con mancuernas', 2, '10-12', 90),
    E(`s${s}d1_pm_rumano`,  'Peso muerto rumano con mancuernas', 2, '8-10', 90),
    E(`s${s}d1_curl_fem`,   'Curl de femoral', 3, '10-12', 0, 'Descanso 3 (literal en imagen)'),
    E(`s${s}d1_abd_maq`,    'Abducción de cadera en máquina', 3, '12-15', 60),
    E(`s${s}d1_gemelo`,     'Gemelo en prensa', 2, '10', 60, 'Superserie'),
    E(`s${s}d1_wall_tib`,   'Wall Tibial Raises', 2, '12', 60, 'Superserie'),
  ];
  const B1_D2 = (s) => [
    E(`s${s}d2_rowerg`,     'ERGÓMETRO | RowErg', 1, '4 minutos suave', 0),
    E(`s${s}d2_scap_pu`,    'Flexiones escapulares (Scap push-up)', 2, '8', 0),
    E(`s${s}d2_band_pull`,  'Aperturas con banda (Band pull apart)', 2, '12-15', 0),
    E(`s${s}d2_mangu`,      'Movilidad - Manguitos rotadores con resistencia', 2, '10', 0),
    E(`s${s}d2_press_inc_w`,'Press banca inclinado con mancuernas', 1, '2 (calentamiento)', 0),
    E(`s${s}d2_press_inc`,  'Press banca inclinado con mancuernas', 3, '6-8', 90),
    E(`s${s}d2_jalon`,      'Jalón al pecho', 3, '8-12', 90),
    E(`s${s}d2_flex_rod`,   'Flexiones de rodillas', 3, '9-10 (pausa abajo + subida explosiva)', 90),
    E(`s${s}d2_remo_90`,    'Remo a 90 con mancuernas', 3, '8-10', 90),
    E(`s${s}d2_elev_lat`,   'Elevaciones laterales con mancuernas', 3, '12-15', 60),
    E(`s${s}d2_facepull`,   'Facepull en polea', 3, '12-15', 60),
    E(`s${s}d2_curl_bicep`, 'Curl de bíceps con mancuerna', 2, '12-15', 60, 'Superserie'),
    E(`s${s}d2_ext_tri`,    'Extensión de tríceps en polea', 2, '12-15', 60, 'Superserie'),
  ];
  const B1_D3 = (s) => [
    E(`s${s}d3_run_warm`,   'Calentamiento | Correr a trote suave', 1, '4-5 minutos', 0),
    E(`s${s}d3_ankling`,    'Ankling drill (ejercicio de tobillos)', 2, '15-20m', 0),
    E(`s${s}d3_a_march`,    'A-march - Marcha A', 2, '15-20m', 0),
    E(`s${s}d3_pogo`,       'Pogo jumps en el sitio', 3, '15-20', 50),
    E(`s${s}d3_snap_down`,  'Snap down to stick (desaceleración con aterrizaje)', 3, '4', 60),
    E(`s${s}d3_box_jump`,   'Box jump', 3, '4', 80),
    E(`s${s}d3_skater`,     'HIIT | Skater jumps', 3, '5/lado', 60),
    E(`s${s}d3_line_hops`,  'Line hops adelante-atrás', 2, '15"', 45, '2-3 series'),
    E(`s${s}d3_step_land`,  'Step landing unilateral', 2, '4/lado', 60),
    E(`s${s}d3_plancha_lat`,'Core | Plancha lateral', 2, '20"/lado', 45),
  ];
  const B1_D4 = (s) => [
    E(`s${s}d4_bici`,       'Bicicleta estática', 1, '4 minutos', 0),
    E(`s${s}d4_monster`,    'Monster walks', 2, '10-12', 0),
    E(`s${s}d4_zanc_iso`,   'Zancada isométrica', 1, '20"/lado', 0),
    E(`s${s}d4_pogo`,       'Pogo jumps en el sitio', 2, '12-15', 0),
    E(`s${s}d4_sent_cajon`, 'Sentadilla al cajón', 3, '6-8 subida explosiva', 90),
    E(`s${s}d4_pm_sumo_kb`, 'Peso muerto sumo con kettlebell', 3, '8-12', 90),
    E(`s${s}d4_hip_thrust`, 'Hip Thrust', 3, '8-10', 90),
    E(`s${s}d4_patada`,     'Patada de glúteo', 3, '10-12', 90),
    E(`s${s}d4_curl_fem`,   'Curl de femoral', 2, '10-12 unilateral', 60),
    E(`s${s}d4_gemelo`,     'Gemelo con mancuernas sentada', 2, '12-15', 60),
  ];
  const B1_D6 = (s) => [
    E(`s${s}d6_run_warm`,   'Calentamiento | Correr a trote suave', 1, '5 minutos', 0),
    E(`s${s}d6_a_march`,    'A-march - Marcha A', 2, '20m', 0),
    E(`s${s}d6_skipping`,   'Técnica de carrera | Skipping alto', 2, '20m', 30),
    E(`s${s}d6_dribble`,    'Dribble run', 2, '20m', 0),
    E(`s${s}d6_wall_drill`, 'Wall drill', 2, '4/lado', 0),
    E(`s${s}d6_sprint_acc`, 'Correr | Sprint (aceleraciones progresivas)', 2, '20-30m', 30),
    E(`s${s}d6_cuestas`,    'Correr | Cuestas', 6, '8-10"', 90),
    E(`s${s}d6_sprint_30`,  'Correr | Sprint', 4, '30m subiendo velocidad', 90),
    E(`s${s}d6_marcha`,     'Correr | Marcha', 4, '15-20m', 60),
    E(`s${s}d6_db_rdl`,     'DB Assisted Single Leg RDL', 3, '8/lado', 60),
    E(`s${s}d6_walking_lung`,'SANDBAG | Walking lunges', 3, '8/lado', 60),
    E(`s${s}d6_deadbugs`,   'Core | Deadbugs', 2, '6/lado', 45),
    E(`s${s}d6_farmer`,     'FUNCIONAL | Farmer carry', 2, '20m', 45),
  ];
  const B1_D7 = (s) => [
    E(`s${s}d7_mob_flex_tob`,'Movilidad - Flexión de tobillo en bipedestación', 2, '8/lado', 0),
    E(`s${s}d7_hip_lift`,   '90/90 hip lift con pies en pared', 2, '5 respiraciones', 0),
    E(`s${s}d7_mob_rot90`,  'Movilidad - Rotación interna de cadera 90-90', 2, '6/lado', 0),
    E(`s${s}d7_mob_aduct`,  'Movilidad - Aductores con kettlebell', 2, '8/lado', 0),
    E(`s${s}d7_mob_flex_rod`,'Movilidad - Flexión de tobillo de rodillas', 2, '25" isométrico', 0),
    E(`s${s}d7_isquios`,    'Movilización de isquios (Hamstring Flossing)', 2, '6/lado', 0),
    E(`s${s}d7_mob_rotcol`, 'Movilidad - Rotación de columna en cuadrupedia', 2, '6/lado', 0),
    E(`s${s}d7_deadbugs`,   'Core | Deadbugs', 2, '6/lado', 0),
  ];

  // ─────── BLOQUE 2 (S7-S12): ATLÉTICO — fuerza pesada + sprints + funcional ───────
  const B2_D1 = (s) => [
    E(`s${s}d1_bici`,       'Bicicleta estática', 1, '5 minutos', 0),
    E(`s${s}d1_mob_flex_tob`,'Movilidad - Flexión de tobillo en bipedestación', 2, '8/lado', 0),
    E(`s${s}d1_mob_rot90`,  'Movilidad - Rotación interna de cadera 90-90', 1, '8/lado', 0),
    E(`s${s}d1_ffe_split`,  'Zancada con pie delantero elevado (Front foot elevated split squat)', 2, '6/lado', 0),
    E(`s${s}d1_sent_aprox`, 'Sentadilla libre | barra alta (aproximación)', 1, '2-3', 0),
    E(`s${s}d1_sent`,       'Sentadilla libre | barra alta', 4, '6-8', 120),
    E(`s${s}d1_ffe_split_w`,'Zancada con mancuerna y pie delantero elevado', 3, '8-12/lado', 90),
    E(`s${s}d1_pm_uni`,     'Peso muerto rumano unilateral con mancuernas', 3, '10-12/lado', 120),
    E(`s${s}d1_goblet_elev`,'Sentadilla goblet con elevación de talones', 3, '10-12', 90),
    E(`s${s}d1_curl_fem`,   'Curl de femoral', 3, '10-12', 60),
    E(`s${s}d1_abd_polea`,  'Abducción en polea', 2, '15-20/lado', 60),
    E(`s${s}d1_gemelo`,     'Gemelo en prensa', 2, '15', 60, 'Superserie'),
    E(`s${s}d1_wall_tib`,   'Wall Tibial Raises', 2, '12', 60, 'Superserie'),
  ];
  const B2_D2 = (s) => [
    E(`s${s}d2_rowerg`,     'ERGÓMETRO | RowErg', 1, '4 minutos', 0),
    E(`s${s}d2_scap_pu`,    'Flexiones escapulares (Scap push-up)', 2, '10', 0),
    E(`s${s}d2_band_pull`,  'Aperturas con banda (Band pull apart)', 2, '15', 0),
    E(`s${s}d2_mangu`,      'Movilidad - Manguitos rotadores con resistencia', 2, '12', 0),
    E(`s${s}d2_press_lm`,   'Press landmine de rodillas', 4, '7-10/lado', 120),
    E(`s${s}d2_jalon`,      'Jalón al pecho', 4, '8-10', 120),
    E(`s${s}d2_press_inc`,  'Press banca inclinado con mancuernas', 3, '8-10', 90),
    E(`s${s}d2_remo_seal`,  'Remo seal', 3, '8-10', 90),
    E(`s${s}d2_elev_lat`,   'Elevaciones laterales con apoyo en banco', 3, '12-15', 60),
    E(`s${s}d2_facepull`,   'Facepull en polea', 3, '12-15', 60),
    E(`s${s}d2_curl_bicep`, 'Curl de bíceps unilateral en polea', 2, '12-15/lado', 60),
    E(`s${s}d2_ext_tri`,    'Extensión de tríceps en polea', 2, '12-15/lado', 60),
  ];
  const B2_D3 = (s) => [
    E(`s${s}d3_run_warm`,   'Calentamiento | Correr a trote suave', 1, '5 minutos', 0),
    E(`s${s}d3_ankling`,    'Ankling drill (ejercicio de tobillos)', 2, '20m', 0),
    E(`s${s}d3_a_march`,    'A-march - Marcha A', 2, '20m', 0),
    E(`s${s}d3_pogo`,       'Pogo jumps en el sitio', 3, '15m', 60),
    E(`s${s}d3_snap_down`,  'Snap down to stick (desaceleración con aterrizaje)', 3, '4', 70),
    E(`s${s}d3_low_hurdle`, 'Salto sobre valla pequeña aterrizaje controlado (Low hurdle hop to stick)', 3, '4', 80),
    E(`s${s}d3_skater`,     'HIIT | Skater jumps', 3, '5/lado', 90),
    E(`s${s}d3_alt_bounds`, 'Saltos / zancadas alternas (Alternating bounds)', 3, '20m', 105),
    E(`s${s}d3_drop_lat`,   'Salto lateral con pausa (Drop to lateral bound)', 3, '4/lado', 90),
    E(`s${s}d3_copenh`,     'Aductores - Plancha Copenhague', 3, '20-25 segundos', 60),
  ];
  const B2_D4 = (s) => [
    E(`s${s}d4_bici`,       'Bicicleta estática', 1, '4 minutos', 0),
    E(`s${s}d4_monster`,    'Monster walks', 2, '12', 0),
    E(`s${s}d4_zanc_iso`,   'Zancada isométrica', 1, '20"/lado', 0),
    E(`s${s}d4_pogo`,       'Pogo jumps en el sitio', 2, '15 suaves', 0),
    E(`s${s}d4_step_up`,    'Step up con mancuerna', 3, '6/lado', 90),
    E(`s${s}d4_kb_swing`,   'Kettlebell swing', 4, '8', 90),
    E(`s${s}d4_hip_thrust`, 'Hip Thrust', 3, '10', 90),
    E(`s${s}d4_gemelo`,     'Gemelo con mancuernas sentada', 3, '12-15', 60),
  ];
  const B2_D6 = (s) => [
    E(`s${s}d6_run_warm`,   'Calentamiento | Correr a trote suave', 1, '5 minutos', 0),
    E(`s${s}d6_skipping`,   'Técnica de carrera | Skipping alto', 2, '20 metros', 0),
    E(`s${s}d6_sprint_30`,  'Correr | Sprint', 3, '30-40 metros', 0),
    E(`s${s}d6_cuestas`,    'Correr | Cuestas', 6, '10-12 segundos', 105),
    E(`s${s}d6_sprint_40`,  'Correr | Sprint', 4, '40m de progresión + 20m rápidos', 150),
    E(`s${s}d6_sled`,       'Sled push o empuje del trineo', 4, '15-20 metros', 90),
    E(`s${s}d6_pm_uni`,     'Peso muerto rumano unilateral con mancuernas', 3, '8/lado', 60),
    E(`s${s}d6_walking_lung`,'SANDBAG | Walking lunges', 3, '8/lado', 60),
    E(`s${s}d6_colgar`,     'Colgarse en la barra', 3, 'Subir las piernas 10-12', 60),
  ];
  const B2_D7 = (s) => [
    E(`s${s}d7_mob_flex_tob`,'Movilidad - Flexión de tobillo en bipedestación', 2, '8/lado', 0),
    E(`s${s}d7_hip_lift`,   '90/90 hip lift con pies en pared', 2, '5 respiraciones', 0),
    E(`s${s}d7_wall_tib`,   'Wall Tibial Raises', 2, '15', 0),
    E(`s${s}d7_mob_rot90`,  'Movilidad - Rotación interna de cadera 90-90', 2, '6/lado', 0),
    E(`s${s}d7_mob_aduct`,  'Movilidad - Aductores con kettlebell', 2, '8/lado', 0),
    E(`s${s}d7_mob_flex_rod`,'Movilidad - Flexión de tobillo de rodillas', 2, '25 segundos/lado', 0),
    E(`s${s}d7_mob_rotcol`, 'Movilidad - Rotación de columna en cuadrupedia', 2, '6/lado', 0),
    E(`s${s}d7_deadbugs`,   'Core | Deadbugs', 2, '6/lado', 0),
    E(`s${s}d7_plancha_lat`,'Core | Plancha lateral', 2, '20 segundos/lado', 0),
  ];

  // Construir las 12 semanas (S1-S6 = Bloque 1, S7-S12 = Bloque 2)
  const W = {};
  for (let s = 1; s <= 6; s++) {
    W[s] = { 1: B1_D1(s), 2: B1_D2(s), 3: B1_D3(s), 4: B1_D4(s), 6: B1_D6(s), 7: B1_D7(s) };
  }
  for (let s = 7; s <= 12; s++) {
    W[s] = { 1: B2_D1(s), 2: B2_D2(s), 3: B2_D3(s), 4: B2_D4(s), 6: B2_D6(s), 7: B2_D7(s) };
  }

  WORKOUT_PLANS.atleta = {
    id: 'atleta',
    name: 'Atleta',
    planType: 'phased',
    weeks: 12,
    description: 'Plan 12 semanas de alto rendimiento multidisciplinar (fuerza + pliometría + sprints + funcional). 6 días/sem (D5 descanso). Bloque 1 (S1-S6): BASE — acondicionamiento técnico + fuerza. Bloque 2 (S7-S12): ATLÉTICO — fuerza pesada + drills pliométricos + sprints + sled/sandbag. La progresión se aplica vía peso/intensidad (mismo plan repetido 6 sem por bloque).',
    trainingDays: [1, 2, 3, 4, 6, 7],
    dayMeta: {
      1: { name: 'Tren Inferior - Fuerza',         type: 'strength', muscleGroups: ['Piernas', 'Glúteos'] },
      2: { name: 'Tren Superior',                  type: 'strength', muscleGroups: ['Pecho', 'Espalda', 'Hombros'] },
      3: { name: 'Pliometría y Drills',            type: 'strength', muscleGroups: ['Pliometría', 'Coordinación'] },
      4: { name: 'Tren Inferior Explosivo',        type: 'strength', muscleGroups: ['Piernas', 'Potencia'] },
      6: { name: 'Sprints y Funcional',            type: 'strength', muscleGroups: ['Velocidad', 'Cardio'] },
      7: { name: 'Movilidad (opcional)',           type: 'strength', muscleGroups: ['Movilidad', 'Recuperación'] }
    },
    weeklySchedule: Array.from({ length: 12 }, (_, i) => {
      const w = W[i + 1];
      return { 1: w[1], 2: w[2], 3: w[3], 4: w[4], 6: w[6], 7: w[7] };
    })
  };
})();

/* ══════════════ CARRERA 10KM (12 semanas) ══════════════
   Entreno orientado a correr 10km — combina:
     D1: Intervalos (HIIT Calf jumps + sprints o carrera continua)
     D2: Trabajo preventivo de lesiones A
     D3: Carrera continua corta o series largas (ritmo alto)
     D5: Carrera larga (140-155 ppm, ritmo conversacional)
     D6: Trabajo preventivo de lesiones B
     D4 y D7: descanso
*/
(function () {
  // ---- Bloques movilidad reutilizables ----
  function movD1() {
    return [
      _ex('c10k_m_runlunge',  'Movilidad | Runners lunge', 1, '10/lado', 0),
      _ex('c10k_hiit_calf',   'HIIT | Calf jumps',         1, '10 saltos + 1 min descanso + 10 saltos', 0, 'Bloque pliométrico previo a los intervalos.'),
    ];
  }
  function movD3() {
    return [
      _ex('c10k_m_flex_tob',  'Movilidad | Flexión de tobillo en sedestación', 1, '10/lado', 0),
      _ex('c10k_hiit_side',   'HIIT | Side bound launches',                    1, '5/lado',  0, 'Saltos laterales preparativos.'),
    ];
  }
  function movD5() {
    return [
      _ex('c10k_m_hipcar',     'Movilidad | Hip CAR',           1, '10/lado', 0),
      _ex('c10k_m_balanceo',   'Movilidad | Balanceo de piernas', 1, '10/lado', 0),
    ];
  }
  function warmup() {
    return _ex('c10k_warm', 'Calentamiento | Correr a trote suave', 1, '7 min', 0, 'Intensidad conversacional.');
  }
  function cooldown() {
    return _ex('c10k_cool', 'Vuelta a la calma | Correr a trote suave', 1, '5 min', 0, 'Intensidad conversacional.');
  }
  // Carrera continua: 1 serie, distancia, ppm. ID único por semana/día.
  function runCont(w, d, km, ppm) {
    return _ex('c10k_s' + w + '_d' + d + '_run', 'Correr', 1, km + ' km', 0, ppm);
  }
  // Intervalos: N series de Xm sprint + 1 min trote suave entre.
  function intervals(w, d, reps, distM, intensidad) {
    return [
      _ex('c10k_s' + w + '_d' + d + '_sprint', 'Correr | Sprint', reps, distM + ' m', 0, 'Intensidad ' + intensidad + '.'),
      _ex('c10k_s' + w + '_d' + d + '_trote',  'Trote suave (recuperación)', reps, '1 min', 0, '1 minuto tras cada serie.'),
    ];
  }
  // Series largas: N series × X km a 170 ppm con 1min trote entre.
  function longSeries(w, d, reps, km) {
    return [
      _ex('c10k_s' + w + '_d' + d + '_long', 'Correr | Serie larga', reps, km + ' km', 0, 'Intensidad 170 ppm.'),
      _ex('c10k_s' + w + '_d' + d + '_trote', 'Trote suave (recuperación)', reps, '1 min', 0, '1 minuto tras cada serie.'),
    ];
  }
  // Preventivo A (D2)
  function prevA() {
    return [
      _ex('c10k_p_rockback',  'Movilidad | Leg Rockback',         2, '9/lado', 90),
      _ex('c10k_p_dedo',      'Extensión del dedo gordo del pie', 2, '9/pie',  90),
      _ex('c10k_p_gemelo',    'Gemelo con disco',                 2, '9',      90),
      _ex('c10k_p_fr_cuad',   'Foam roller | Cuádriceps',         2, '9',      90),
      _ex('c10k_p_stepup',    'Step up con mancuerna',            2, '9',      90),
      _ex('c10k_p_pistol',    'Pistol squat con apoyo a dos manos',2, '9/lado',90),
    ];
  }
  // Preventivo B (D6)
  function prevB() {
    return [
      _ex('c10k_p_fr_planta', 'Foam roller | Planta del pie',     2, '9/lado', 90),
      _ex('c10k_p_dedo',      'Extensión del dedo gordo del pie', 2, '9/pie',  90),
      _ex('c10k_p_flex_peso', 'Movilidad | Flexión de tobillo con peso', 2, '9/lado', 90),
      _ex('c10k_p_cmj',       'Saltos CMJ asistidos',             2, '9',      90),
      _ex('c10k_p_squat',     'Sentadilla sin peso',              2, '9',      90),
      _ex('c10k_p_curl',      'Curl de femoral con fitball',      2, '9',      90),
    ];
  }

  WORKOUT_PLANS.carrera_10km = {
    id: 'carrera_10km',
    name: 'Carrera 10KM',
    planType: 'phased',
    weeks: 12,
    description: 'Plan de 12 semanas para correr 10km — combina carrera continua, series cortas (intervalos) y largas + trabajo preventivo de lesiones',
    trainingDays: [1, 2, 3, 5, 6],
    dayMeta: {
      1: { name: 'Carrera + HIIT',         type: 'running',  muscleGroups: ['Cardio', 'Piernas'] },
      2: { name: 'Prevención de lesiones', type: 'strength', muscleGroups: ['Tobillo', 'Cuádriceps'] },
      3: { name: 'Carrera ritmo alto',     type: 'running',  muscleGroups: ['Cardio', 'Resistencia'] },
      5: { name: 'Carrera larga',          type: 'running',  muscleGroups: ['Cardio', 'Resistencia'] },
      6: { name: 'Prevención de lesiones', type: 'strength', muscleGroups: ['Pie', 'Cuádriceps', 'Femoral'] }
    },
    weeklySchedule: [
      // S1
      {
        1: [...movD1(), warmup(), runCont(1, 1, 4, '140-160 ppm'), cooldown()],
        2: prevA(),
        3: [...movD3(), warmup(), runCont(1, 3, 4, 'ritmo libre'), cooldown()],
        5: [...movD5(), warmup(), runCont(1, 5, 4, '140-155 ppm'), cooldown()],
        6: prevB()
      },
      // S2
      {
        1: [...movD1(), warmup(), runCont(2, 1, 4, '140-160 ppm'), cooldown()],
        2: prevA(),
        3: [...movD3(), warmup(), runCont(2, 3, 4, 'ritmo libre'), cooldown()],
        5: [...movD5(), warmup(), runCont(2, 5, 4, '140-155 ppm'), cooldown()],
        6: prevB()
      },
      // S3
      {
        1: [...movD1(), warmup(), runCont(3, 1, 4, '140-160 ppm'), cooldown()],
        2: prevA(),
        3: [...movD3(), warmup(), runCont(3, 3, 4, 'ritmo libre'), cooldown()],
        5: [...movD5(), warmup(), runCont(3, 5, 4, '140-155 ppm'), cooldown()],
        6: prevB()
      },
      // S4 — empiezan intervalos
      {
        1: [...movD1(), warmup(), ...intervals(4, 1, 4, 400, '8/10'), cooldown()],
        2: prevA(),
        3: [...movD3(), warmup(), runCont(4, 3, 4, '170 ppm'), cooldown()],
        5: [...movD5(), warmup(), runCont(4, 5, 6, '140-155 ppm'), cooldown()],
        6: prevB()
      },
      // S5
      {
        1: [...movD1(), warmup(), ...intervals(5, 1, 4, 400, '8/10'), cooldown()],
        2: prevA(),
        3: [...movD3(), warmup(), runCont(5, 3, 5, '170 ppm'), cooldown()],
        5: [...movD5(), warmup(), runCont(5, 5, 6, '140-155 ppm'), cooldown()],
        6: prevB()
      },
      // S6 — series largas en D3
      {
        1: [...movD1(), warmup(), ...intervals(6, 1, 6, 400, '8/10'), cooldown()],
        2: prevA(),
        3: [...movD3(), warmup(), ...longSeries(6, 3, 2, 2), cooldown()],
        5: [...movD5(), warmup(), runCont(6, 5, 7, '140-155 ppm'), cooldown()],
        6: prevB()
      },
      // S7
      {
        1: [...movD1(), warmup(), ...intervals(7, 1, 6, 400, '8/10'), cooldown()],
        2: prevA(),
        3: [...movD3(), warmup(), ...longSeries(7, 3, 2, 2), cooldown()],
        5: [...movD5(), warmup(), runCont(7, 5, 7, '140-155 ppm'), cooldown()],
        6: prevB()
      },
      // S8 — sprints suben a 600m, series largas a 3km
      {
        1: [...movD1(), warmup(), ...intervals(8, 1, 4, 600, '6-7/10'), cooldown()],
        2: prevA(),
        3: [...movD3(), warmup(), ...longSeries(8, 3, 2, 3), cooldown()],
        5: [...movD5(), warmup(), runCont(8, 5, 7, '140-155 ppm'), cooldown()],
        6: prevB()
      },
      // S9
      {
        1: [...movD1(), warmup(), ...intervals(9, 1, 4, 600, '6-7/10'), cooldown()],
        2: prevA(),
        3: [...movD3(), warmup(), ...longSeries(9, 3, 2, 3), cooldown()],
        5: [...movD5(), warmup(), runCont(9, 5, 8, '140-155 ppm'), cooldown()],
        6: prevB()
      },
      // S10
      {
        1: [...movD1(), warmup(), ...intervals(10, 1, 5, 600, '6-7/10'), cooldown()],
        2: prevA(),
        3: [...movD3(), warmup(), ...longSeries(10, 3, 2, 3), cooldown()],
        5: [...movD5(), warmup(), runCont(10, 5, 8, '140-155 ppm'), cooldown()],
        6: prevB()
      },
      // S11 — series largas a 4km, carrera larga 9km
      {
        1: [...movD1(), warmup(), ...intervals(11, 1, 5, 600, '7/10'), cooldown()],
        2: prevA(),
        3: [...movD3(), warmup(), ...longSeries(11, 3, 2, 4), cooldown()],
        5: [...movD5(), warmup(), runCont(11, 5, 9, '140-155 ppm'), cooldown()],
        6: prevB()
      },
      // S12 — tapering + prueba final 10km
      {
        1: [...movD1(), warmup(), runCont(12, 1, 3, '150-160 ppm — Tapering'), cooldown()],
        2: prevA(),
        3: [...movD3(), warmup(), ...longSeries(12, 3, 2, 4), cooldown()],
        5: [
          ...movD5(),
          _ex('c10k_final_warm', 'Calentamiento | Correr a trote suave', 1, '7 min', 0, '¡Llegó EL DÍA! Todo el trabajo tiene su recompensa, y hoy lo vas a ver.'),
          _ex('c10k_final_run',  '🎯 Prueba Final — Correr 10 KM', 1, '10 km', 0, '160-170 ppm. ¡A por los 10KM continuos!'),
          _ex('c10k_final_cool', 'Vuelta a la calma | Correr a trote suave', 1, '5 min', 0, 'Comparte cómo te ha ido.'),
        ],
        6: prevB()
      }
    ]
  };
})();

/* ══════════════ CARRERA 21KM — MEDIA MARATÓN (12 semanas) ══════════════
   D1: Sprints / técnica / cambios de ritmo / tempo
   D2: Trabajo preventivo de lesiones C
   D3: Carrera continua / cuestas / tempo / intervalos
   D4, D5: descanso
   D6: Carrera larga (continua o cambios de ritmo) — ¡tirada larga!
   D7: Trabajo preventivo de lesiones D
*/
(function () {
  // ---- Movilidad: bloques reutilizables ----
  function movRunBal() {
    // S1-S2 D1: Runners lunge + Balanceo
    return [
      _ex('c21k_m_runlunge', 'Movilidad | Runners lunge',      1, '10/lado', 0),
      _ex('c21k_m_balanceo', 'Movilidad | Balanceo de piernas', 1, '10/lado', 0),
    ];
  }
  function movFull() {
    // Cossak + Runners + Balanceo (S3+ D1, D3, D6)
    return [
      _ex('c21k_m_cossak',   'Movilidad | Cossak squat',        1, '8/lado',  0),
      _ex('c21k_m_runlunge', 'Movilidad | Runners lunge',       1, '10/lado', 0),
      _ex('c21k_m_balanceo', 'Movilidad | Balanceo de piernas', 1, '10/lado', 0),
    ];
  }
  function movS1D3() {
    // Runners lunge + Sentadilla sin peso + Balanceo (solo S1 D3)
    return [
      _ex('c21k_m_runlunge', 'Movilidad | Runners lunge',       1, '10/lado', 0),
      _ex('c21k_squat_np',   'Sentadilla sin peso',             1, '10',      0),
      _ex('c21k_m_balanceo', 'Movilidad | Balanceo de piernas', 1, '10/lado', 0),
    ];
  }
  function warmup7() {
    return _ex('c21k_warm7', 'Calentamiento | Correr a trote suave', 1, '7 min', 0, 'Intensidad conversacional.');
  }
  function cooldown5() {
    return _ex('c21k_cool5', 'Vuelta a la calma | Correr a trote suave', 1, '5 min', 0, 'Intensidad conversacional.');
  }
  function cooldown7() {
    return _ex('c21k_cool7', 'Vuelta a la calma | Correr a trote suave', 1, '7 min', 0, 'Intensidad conversacional.');
  }
  // Técnica de zancada 8×30" (D1 común)
  function tecnicaZancada(w) {
    return _ex('c21k_s' + w + '_d1_zancada', 'Correr | Sprint', 8, '30"', 0, 'Máxima amplitud de zancada. 1 minuto descanso en el sitio tras cada serie.');
  }
  // Cuestas/Sprints
  function cuestas(w, reps) {
    return _ex('c21k_s' + w + '_d3_cuesta', 'Correr | Sprint en cuesta', reps, '30"', 0, 'Sprint cuesta arriba. 1\'-1\'30" descanso en el sitio entre series.');
  }
  // Carrera continua con FCmáx (formato "X km a Y% FCmáx")
  function runCont(w, d, km, fcmax) {
    return _ex('c21k_s' + w + '_d' + d + '_run', 'Correr', 1, km + ' km', 0, fcmax + ' FCmáx.');
  }
  // Tempo: X min aumentando ritmo progresivamente
  function tempoRun(w, mins, fcmax) {
    return _ex('c21k_s' + w + '_tempo', 'Correr', 1, mins + ' min aumentando el ritmo progresivamente', 0, fcmax + ' FCmáx.');
  }
  // Cambios de ritmo D1 (3 × 8min + 2min, total 30 min — S5/S6)
  function cambios30S5() {
    return [
      _ex('c21k_s5_d1_a', 'Correr (fuerte)', 3, '8 min', 0, '90-95% FCmáx. Alternando con los 2 min suaves.'),
      _ex('c21k_s5_d1_b', 'Correr (suave)',  3, '2 min', 0, '66-75% FCmáx. Alternando.'),
    ];
  }
  function cambios30S6() {
    // Idéntico que S5 pero IDs únicos
    return [
      _ex('c21k_s6_d1_a', 'Correr (fuerte)', 3, '8 min', 0, '90-95% FCmáx. Alternando con los 2 min suaves.'),
      _ex('c21k_s6_d1_b', 'Correr (suave)',  3, '2 min', 0, '66-75% FCmáx. Alternando.'),
    ];
  }
  // S9 D1: 6×(3min 80-95% + 2min 75-85%) = 30 min
  function cambios30S9() {
    return [
      _ex('c21k_s9_d1_a', 'Correr (fuerte)', 6, '3 min', 0, '80-95% FCmáx. Alternando con los 2 min suaves.'),
      _ex('c21k_s9_d1_b', 'Correr (medio)',  6, '2 min', 0, '75-85% FCmáx. Alternando.'),
    ];
  }
  // D6 Cambios de ritmo "duro" S2 (3km 66-75 + 1km 90%) × 3 = 12km
  function cambios12S2() {
    return [
      _ex('c21k_s2_d6_a', 'Correr (rodaje)', 3, '3 km', 0, '66-75% FCmáx.'),
      _ex('c21k_s2_d6_b', 'Correr (fuerte)', 3, '1 km', 0, '90% FCmáx.'),
    ];
  }
  // S4 D6 — 6×(1km 90% + 1km 75-85%) = 12 km
  function cambios12S4() {
    return [
      _ex('c21k_s4_d6_a', 'Correr (fuerte)', 6, '2 km', 0, '90% FCmáx.'),
      _ex('c21k_s4_d6_b', 'Correr (medio)',  6, '1 km', 0, '75-85% FCmáx.'),
    ];
  }
  // S6 D6 — 4×(2km 90% + 1km 75-85%) = 12 km
  function cambios12S6() {
    return [
      _ex('c21k_s6_d6_a', 'Correr (fuerte)', 4, '2 km', 0, '90% FCmáx.'),
      _ex('c21k_s6_d6_b', 'Correr (medio)',  4, '1 km', 0, '75-85% FCmáx.'),
    ];
  }
  // S8 D6 — 3×(3km 90% + 1km 75-85%) = 12 km
  function cambios12S8() {
    return [
      _ex('c21k_s8_d6_a', 'Correr (fuerte)', 3, '3 km', 0, '90% FCmáx.'),
      _ex('c21k_s8_d6_b', 'Correr (medio)',  3, '1 km', 0, '75-85% FCmáx.'),
    ];
  }
  // S10 D6 — 3×(4km 90% + 1km 75-85%) = 15 km
  function cambios15S10() {
    return [
      _ex('c21k_s10_d6_a', 'Correr (fuerte)', 3, '4 km', 0, '90% FCmáx.'),
      _ex('c21k_s10_d6_b', 'Correr (medio)',  3, '1 km', 0, '75-85% FCmáx.'),
    ];
  }
  // Tempo D3 S6: 8km aumentando ritmo
  function tempo8(w) {
    return _ex('c21k_s' + w + '_d3_tempo', 'Correr', 1, '8 km aumentando el ritmo progresivamente', 0, '66-75% FCmáx inicial.');
  }
  // Preventivo C (D2) — series y reps según semana
  function prevC(sets, reps) {
    return [
      _ex('c21k_pc_gemelo',   'Gemelo | Elevación de talones',                sets, reps,           90),
      _ex('c21k_pc_flexbip',  'Movilidad | Flexión de tobillo en bipedestación', sets, reps,        90),
      _ex('c21k_pc_kbll',     'Movilidad | Kettlebell leg lift over',         sets, reps + '/lado', 90),
      _ex('c21k_pc_fr_cuad',  'Foam roller | Cuádriceps',                     sets, reps,           90),
      _ex('c21k_pc_fr_glute', 'Foam roller | Glúteo medio',                   sets, reps + '/lado', 90),
      _ex('c21k_pc_bulgara',  'Sentadilla búlgara con salto',                 sets, reps + '/lado', 90),
    ];
  }
  // Preventivo D (D7) — series y reps según semana. Solo S1 lleva Core Deadbugs.
  function prevD(sets, reps, withCore) {
    const list = [];
    if (withCore) {
      list.push(_ex('c21k_pd_deadbug', 'Core | Deadbugs', 1, '8/lado', 0));
    }
    list.push(
      _ex('c21k_pd_flexpeso',  'Movilidad | Flexión de tobillo con peso', sets, reps + (sets >= 3 ? '' : '/lado'), 90),
      _ex('c21k_pd_glutebrid', 'Glute bridge unilateral sin peso',         sets, reps + '/lado', 90),
      _ex('c21k_pd_fr_planta', 'Foam roller | Planta del pie',             sets, reps + '/lado', 90),
      _ex('c21k_pd_cmj',       'Saltos CMJ asistidos',                     sets, reps,           90),
      _ex('c21k_pd_squat',     'Sentadilla sin peso',                      sets, reps,           90),
      _ex('c21k_pd_curl',      'Curl de femoral con fitball',              sets, reps,           90)
    );
    return list;
  }

  WORKOUT_PLANS.carrera_21km = {
    id: 'carrera_21km',
    name: 'Media Maratón 21KM',
    planType: 'phased',
    weeks: 12,
    description: 'Plan de 12 semanas para completar una media maratón (21km) — combina técnica, cuestas, intervalos, tempo y tiradas largas progresivas + trabajo preventivo de lesiones',
    trainingDays: [1, 2, 3, 6, 7],
    dayMeta: {
      1: { name: 'Sprints / Técnica / Cambios', type: 'running',  muscleGroups: ['Cardio', 'Técnica'] },
      2: { name: 'Prevención de lesiones',      type: 'strength', muscleGroups: ['Tobillo', 'Glúteo medio'] },
      3: { name: 'Cuestas / Tempo / Intervalos', type: 'running', muscleGroups: ['Cardio', 'Resistencia'] },
      6: { name: 'Tirada larga',                type: 'running',  muscleGroups: ['Cardio', 'Resistencia'] },
      7: { name: 'Prevención de lesiones',      type: 'strength', muscleGroups: ['Pie', 'Cuádriceps', 'Femoral'] }
    },
    weeklySchedule: [
      // S1
      {
        1: [...movRunBal(), warmup7(), tecnicaZancada(1), cooldown5()],
        2: prevC(2, '9'),
        3: [...movS1D3(), warmup7(), cuestas(1, 9), cooldown5()],
        6: [...movFull(), warmup7(), runCont(1, 6, 10, '66-75%'), cooldown5()],
        7: prevD(2, '9', true)  // S1 incluye Core Deadbugs
      },
      // S2
      {
        1: [...movRunBal(), warmup7(), tecnicaZancada(2), cooldown5()],
        2: prevC(2, '9'),
        3: [...movFull(), warmup7(), runCont(2, 3, 5, '66-75%'), cooldown5()],
        6: [...movFull(), warmup7(), ...cambios12S2(), cooldown5()],
        7: prevD(2, '9', false)
      },
      // S3
      {
        1: [...movRunBal(), warmup7(), tecnicaZancada(3), cooldown5()],
        2: prevC(2, '9'),
        3: [...movFull(), warmup7(), cuestas(3, 12), cooldown5()],
        6: [...movFull(), warmup7(), runCont(3, 6, 14, '66-75%'), cooldown5()],
        7: prevD(2, '9', false)
      },
      // S4
      {
        1: [...movFull(), warmup7(), tecnicaZancada(4), cooldown5()],
        2: prevC(2, '9'),
        3: [...movFull(), warmup7(), runCont(4, 3, 7, '66-75%'), cooldown5()],
        6: [...movFull(), warmup7(), ...cambios12S4(), cooldown5()],
        7: prevD(2, '9', false)
      },
      // S5
      {
        1: [...movFull(), warmup7(), ...cambios30S5(), cooldown5()],
        2: prevC(2, '9'),
        3: [...movFull(), warmup7(),
            _ex('c21k_s5_d3_sprint', 'Correr | Sprint', 16, '200 m sprint', 0, '97-100% FCmáx.'),
            _ex('c21k_s5_d3_rec',    'Descanso en el sitio', 16, 'mismo tiempo que tardes en recorrer los 200 m', 0, 'Tras cada serie.'),
            cooldown5()],
        6: [...movFull(), warmup7(), runCont(5, 6, 16, '66-75%'), cooldown5()],
        7: prevD(2, '9', false)
      },
      // S6
      {
        1: [...movFull(), warmup7(), ...cambios30S6(), cooldown5()],
        2: prevC(2, '9'),
        3: [...movFull(), warmup7(), tempo8(6), cooldown5()],
        6: [...movFull(), warmup7(), ...cambios12S6(), cooldown5()],
        7: prevD(2, '9', false)
      },
      // S7 — preventivos suben a 3×10
      {
        1: [...movFull(), warmup7(), tempoRun(7, 25, '90-95%'), cooldown5()],
        2: prevC(3, '10'),
        3: [...movFull(), warmup7(),
            _ex('c21k_s7_d3_sprint', 'Correr | Sprint', 7, '200 m', 0, '97-100% FCmáx.'),
            _ex('c21k_s7_d3_rec',    'Descanso en el sitio', 7, 'mismo tiempo que tardes en recorrer los 200 m', 0, 'Tras cada serie.'),
            cooldown7()],
        6: [...movFull(), warmup7(), runCont(7, 6, 18, '66-75%'), cooldown5()],
        7: prevD(3, '10', false)
      },
      // S8
      {
        1: [...movFull(), warmup7(), tecnicaZancada(8), cooldown5()],
        2: prevC(3, '10'),
        3: [...movFull(), warmup7(), runCont(8, 3, 9, '66-75%'), cooldown5()],
        6: [...movFull(), warmup7(), ...cambios12S8(), cooldown5()],
        7: prevD(3, '10', false)
      },
      // S9
      {
        1: [...movFull(), warmup7(), ...cambios30S9(), cooldown5()],
        2: prevC(3, '10'),
        3: [...movFull(), warmup7(),
            _ex('c21k_s9_d3_sprint', 'Correr | Sprint', 8, '200 m', 0, '97-100% FCmáx.'),
            _ex('c21k_s9_d3_rec',    'Descanso en el sitio', 8, 'doble del tiempo que tardes en recorrer los 200 m', 0, 'Tras cada serie.'),
            cooldown5()],
        6: [...movFull(), warmup7(), runCont(9, 6, 20, '66-75%'), cooldown5()],
        7: prevD(3, '10', false)
      },
      // S10
      {
        1: [...movFull(), warmup7(),
            _ex('c21k_s10_d1_sprint', 'Correr | Sprint', 10, '200 m', 0, '97-100% FCmáx.'),
            _ex('c21k_s10_d1_rec',    'Descanso en el sitio', 10, 'doble del tiempo que tardes en recorrer los 200 m', 0, 'Tras cada serie.'),
            cooldown5()],
        2: prevC(3, '10'),
        3: [...movFull(), warmup7(), runCont(10, 3, 10, '66-75%'), cooldown5()],
        6: [...movFull(), warmup7(), ...cambios15S10(), cooldown5()],
        7: prevD(3, '10', false)
      },
      // S11
      {
        1: [...movFull(), warmup7(), tempoRun(11, 35, '90-95%'), cooldown5()],
        2: prevC(3, '10'),
        3: [...movFull(), warmup7(),
            _ex('c21k_s11_d3_sprint', 'Correr | Sprint', 9, '200 m', 0, '97-100% FCmáx.'),
            _ex('c21k_s11_d3_rec',    'Descanso en el sitio', 9, 'doble del tiempo que tardes en recorrer los 200 m', 0, 'Tras cada serie.'),
            cooldown5()],
        6: [...movFull(), warmup7(), runCont(11, 6, 14, '66-75%'), cooldown5()],
        7: prevD(3, '10', false)
      },
      // S12 — semana final: activación + media maratón
      {
        1: [...movFull(), warmup7(), tecnicaZancada(12), cooldown5()],
        2: prevC(3, '10'),
        3: [...movFull(),
            _ex('c21k_s12_activ_warm',   'Calentamiento | Correr a trote suave', 1, '20-30 minutos', 0, 'Activación previa a la Carrera Final.'),
            _ex('c21k_s12_activ_sprint', 'Correr | Sprint cuesta arriba',         8, '10"',           0, 'Máxima intensidad.'),
            _ex('c21k_s12_activ_rec',    'Descanso',                              8, '2 minutos',     0, 'Tras cada sprint.'),
            cooldown7()],
        6: [
          _ex('c21k_final_warm', 'Calentamiento | Correr a trote suave', 1, '1 km', 0, '¡¡HA LLEGADO EL DÍA!! Todo el trabajo tiene su recompensa.'),
          _ex('c21k_final_run',  '🎯 MEDIA MARATÓN — Correr 21 KM', 1, '21 km', 0, '¡A disfrutar! Comparte cómo te ha ido.'),
        ],
        7: prevD(3, '10', false)
      }
    ]
  };
})();

/* ══════════════ CARRERA 42KM — MARATÓN COMPLETO (12 semanas) ══════════════
   D1: Técnica de zancada / Cuestas / Intervalos / Cambios de ritmo
   D2: Preventivo 1 (8 ejercicios: capitán Morgan, toe yoga, wall tibial, etc.)
   D3: Cuestas / Interválicos / Carrera continua / Tempo Run
   D4: Preventivo 2 (7 ejercicios: gemelos ISO, plyo pogo box, arch lift, etc.)
   D5, D7: descanso
   D6: Tirada larga (21km en S1 hasta 42km en S12)
*/
(function () {
  // Calentamiento y vuelta a la calma — distintos al 21km (50-60% FCmáx, <150ppm)
  function c42Warm() {
    return _ex('c42k_warm', 'Calentamiento | Correr a trote suave', 1, '7 min', 0, '50-60% FCmáx.');
  }
  function c42Cool() {
    return _ex('c42k_cool', 'Vuelta a la calma | Correr a trote suave', 1, '5 min', 0, 'Por debajo de 150 ppm.');
  }
  // Técnica de zancada "Circular" 8×30seg (D1 común S1-S3, S10)
  function tecZancada(w) {
    return _ex('c42k_s' + w + '_tec', 'Técnica de carrera | Circular', 8, '30 seg', 0, 'Máx Intensidad. 1 min descanso en el sitio entre series.');
  }
  // Cuestas 6-8° inclinación, X series de 10seg (2min desc en sitio)
  function cuestas(w, d, reps) {
    return _ex('c42k_s' + w + '_d' + d + '_cuesta', 'Correr | Cuestas (6-8° inclinación)', reps, '10 seg', 0, 'Máx Intensidad. 2 min descanso en el sitio entre series.');
  }
  // Sprint en pista — X series de 30seg, 1min30seg desc andando
  function sprints30(w, d, reps) {
    return _ex('c42k_s' + w + '_d' + d + '_spr30', 'Correr | Sprint', reps, '30 seg', 0, 'Máx Intensidad. 1min 30seg descanso andando entre series.');
  }
  // Intervalos N×Xm (90-100% FCmáx)
  function intervalsM(w, d, reps, distM, recRule) {
    return _ex('c42k_s' + w + '_d' + d + '_int', 'Correr | Sprint', reps, distM + ' m', 0, '90-100% FCmáx. ' + recRule + ' entre series.');
  }
  // Carrera continua fácil — 1 serie X km a 60-70% FCmáx
  function runCont(w, d, km) {
    return _ex('c42k_s' + w + '_d' + d + '_run', 'Correr', 1, km + ' km', 0, '60-70% FCmáx.');
  }
  // Tempo Run — 1 serie X km a 75% FCmáx
  function tempoRun(w, km) {
    return _ex('c42k_s' + w + '_d3_tempo', 'Correr | Tempo Run', 1, km + ' km', 0, '75% FCmáx.');
  }

  // Preventivo 1 (D2) — 8 ejercicios
  function prev1() {
    return [
      _ex('c42k_p1_capmorgan', 'Capitán Morgan con Fitball',  2, '7-10',     60),
      _ex('c42k_p1_toeyoga',   'Toe Yoga',                    2, '7-10',     60),
      _ex('c42k_p1_walltibia', 'Wall Tibial Raises',          2, '7-10',     90),
      _ex('c42k_p1_spanish',   'Spanish Squat ISO HOLD',      2, '15-20 seg',60),
      _ex('c42k_p1_curlrev',   'Curl Nórdico Reverse',        2, '7-10',     90),
      _ex('c42k_p1_seatedjump','Seated Squat Jump',           2, '4-6',      90),
      _ex('c42k_p1_rntsplit',  'RNT Split Squat',             2, '5-6/lado', 60),
      _ex('c42k_p1_firehyd',   'Fire Hydrants',               2, '8-10/lado',45),
    ];
  }
  // Preventivo 2 (D4) — 7 ejercicios
  function prev2() {
    return [
      _ex('c42k_p2_gemiso',    'Gemelos ISO HOLD',                   2, '10-20 seg',60),
      _ex('c42k_p2_pogo',      'Plyo Pogo Jumps Box',                2, '10-15',    60),
      _ex('c42k_p2_archlift',  'Arch Lift',                          2, '8-10',     60),
      _ex('c42k_p2_cmj',       'Saltos CMJ asistidos',               2, '3-6',      90),
      _ex('c42k_p2_hacksquat', 'DB Hack Squat con Fitball',          2, '6-10',     90),
      _ex('c42k_p2_slrdl',     'DB Assisted Single Leg RDL',         2, '8-10/lado',60),
      _ex('c42k_p2_glutebrid', 'BD Single Leg Glute Bridge ISO HOLD',2, '10-15 seg',60),
    ];
  }

  WORKOUT_PLANS.carrera_42km = {
    id: 'carrera_42km',
    name: 'Maratón 42KM',
    planType: 'phased',
    weeks: 12,
    description: 'Plan de 12 semanas para completar una maratón (42km) — combina técnica, cuestas, intervalos, tempo y tiradas larguísimas progresivas + doble trabajo preventivo (D2 y D4)',
    trainingDays: [1, 2, 3, 4, 6],
    dayMeta: {
      1: { name: 'Técnica / Cuestas / Intervalos', type: 'running',  muscleGroups: ['Cardio', 'Técnica'] },
      2: { name: 'Preventivo 1',                   type: 'strength', muscleGroups: ['Pie', 'Tobillo', 'Glúteo'] },
      3: { name: 'Carrera / Cuestas / Tempo',      type: 'running',  muscleGroups: ['Cardio', 'Resistencia'] },
      4: { name: 'Preventivo 2',                   type: 'strength', muscleGroups: ['Gemelo', 'Cuádriceps', 'Femoral'] },
      6: { name: 'Tirada larga',                   type: 'running',  muscleGroups: ['Cardio', 'Resistencia'] }
    },
    weeklySchedule: [
      // S1 — D3 interválicos en lugar de carrera continua
      {
        1: [c42Warm(), tecZancada(1), c42Cool()],
        2: prev1(),
        3: [c42Warm(), sprints30(1, 3, 8), c42Cool()],
        4: prev2(),
        6: [c42Warm(), runCont(1, 6, 21), c42Cool()]
      },
      // S2
      {
        1: [c42Warm(), tecZancada(2), c42Cool()],
        2: prev1(),
        3: [c42Warm(), runCont(2, 3, 10), c42Cool()],
        4: prev2(),
        6: [c42Warm(),
            _ex('c42k_s2_d6_a', 'Correr (suave)',   8, '1 km', 0, '75% FCmáx.'),
            _ex('c42k_s2_d6_b', 'Correr (medio)',   8, '1 km', 0, '60-70% FCmáx tras cada serie.'),
            c42Cool()]
      },
      // S3
      {
        1: [c42Warm(), tecZancada(3), c42Cool()],
        2: prev1(),
        3: [c42Warm(), cuestas(3, 3, 4), c42Cool()],
        4: prev2(),
        6: [c42Warm(), runCont(3, 6, 24), c42Cool()]
      },
      // S4
      {
        1: [c42Warm(), cuestas(4, 1, 8), c42Cool()],
        2: prev1(),
        3: [c42Warm(), runCont(4, 3, 12), c42Cool()],
        4: prev2(),
        6: [c42Warm(),
            _ex('c42k_s4_d6_a', 'Correr (suave)', 6, '2 km', 0, '60-70% FCmáx.'),
            _ex('c42k_s4_d6_b', 'Correr (medio)', 6, '1 km', 0, '75-80% FCmáx tras cada serie.'),
            c42Cool()]
      },
      // S5
      {
        1: [c42Warm(), cuestas(5, 1, 10), c42Cool()],
        2: prev1(),
        3: [c42Warm(), intervalsM(5, 3, 16, 200, '1min 30seg andando'), c42Cool()],
        4: prev2(),
        6: [c42Warm(), runCont(5, 6, 27), c42Cool()]
      },
      // S6
      {
        1: [c42Warm(), cuestas(6, 1, 8), c42Cool()],
        2: prev1(),
        3: [c42Warm(), intervalsM(6, 3, 15, 200, '1min 30seg andando'), c42Cool()],
        4: prev2(),
        6: [c42Warm(), runCont(6, 6, 30), c42Cool()]
      },
      // S7
      {
        1: [c42Warm(), intervalsM(7, 1, 14, 400, '2 min descanso en el sitio'), c42Cool()],
        2: prev1(),
        3: [c42Warm(), runCont(7, 3, 15), c42Cool()],
        4: prev2(),
        6: [c42Warm(),
            _ex('c42k_s7_d6_a', 'Correr (suave)', 4, '4 km', 0, '60-70% FCmáx.'),
            _ex('c42k_s7_d6_b', 'Correr (medio)', 4, '1 km', 0, '75-80% FCmáx tras cada serie.'),
            c42Cool()]
      },
      // S8
      {
        1: [c42Warm(), cuestas(8, 1, 8), c42Cool()],
        2: prev1(),
        3: [c42Warm(), intervalsM(8, 3, 10, 800, '2 min andando'), c42Cool()],
        4: prev2(),
        6: [c42Warm(), runCont(8, 6, 33), c42Cool()]
      },
      // S9
      {
        1: [c42Warm(), cuestas(9, 1, 8), c42Cool()],
        2: prev1(),
        3: [c42Warm(), tempoRun(9, 10), c42Cool()],
        4: prev2(),
        6: [c42Warm(), runCont(9, 6, 36), c42Cool()]
      },
      // S10 — tapering empieza (vuelve a técnica zancada y reduce volumen D3)
      {
        1: [c42Warm(), tecZancada(10), c42Cool()],
        2: prev1(),
        3: [c42Warm(), runCont(10, 3, 8), c42Cool()],
        4: prev2(),
        6: [c42Warm(),
            _ex('c42k_s10_d6_a', 'Correr (suave)', 4, '5 km', 0, '75% FCmáx.'),
            _ex('c42k_s10_d6_b', 'Correr (medio)', 4, '1 km', 0, '75-80% FCmáx tras cada serie.'),
            c42Cool()]
      },
      // S11
      {
        1: [c42Warm(), cuestas(11, 1, 8), c42Cool()],
        2: prev1(),
        3: [c42Warm(), tempoRun(11, 12), c42Cool()],
        4: prev2(),
        6: [c42Warm(),
            _ex('c42k_s11_d6_run', 'Correr', 1, '15-18 km', 0, '60-70% FCmáx.'),
            c42Cool()]
      },
      // S12 — semana final: cambios de ritmo + técnica, cuestas y MARATÓN
      {
        1: [c42Warm(),
            _ex('c42k_s12_d1_a',   'Correr (fuerte)',          5, '2 min', 0, '80-90% FCmáx. Alternando con 1 min suave.'),
            _ex('c42k_s12_d1_b',   'Correr (suave)',           5, '1 min', 0, '60-70% FCmáx tras cada serie.'),
            _ex('c42k_s12_d1_tec', 'Técnica de carrera | Circular', 4, '30 seg', 0, '1 min descanso entre series.'),
            c42Cool()],
        2: prev1(),
        3: [
            _ex('c42k_s12_d3_warm', 'Calentamiento | Correr a trote suave', 1, '20-30 min', 0, 'Activación previa a la maratón. 50-60% FCmáx.'),
            cuestas(12, 3, 4),
            c42Cool()],
        4: prev2(),
        6: [
            _ex('c42k_final_run', '🎯 MARATÓN — Correr 42 KM', 1, '42 km', 0, '70-80% FCmáx. ¡DÍA DE CARRERA! Disfruta cada km — todo el trabajo tiene su recompensa.'),
        ]
      }
    ]
  };
})();

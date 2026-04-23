/* ============================================
   IZA WORKOUT — Workout Data
   ============================================ */

// Helper: create exercise object
function _ex(id, name, sets, reps, rest, notes) {
  return { id, name, sets, reps: String(reps), rest: rest || 0, notes: notes || '' };
}

const WORKOUT_PLANS = {

  /* ============================================
     MÁS FUERTES — AVANZADO (12 semanas)
     Lun/Mar/Mié/Vie/Sáb — Jue y Dom descanso
  ============================================ */
  fuerza_avanzado: {
    id: 'fuerza_avanzado',
    name: 'Fuertes avanzadas',
    planType: 'phased',
    weeks: 12,
    description: 'Programa de fuerza 5 días/semana — 12 semanas periodizadas',
    trainingDays: [1, 2, 3, 5, 6],
    dayMeta: {
      1: { name: 'Pierna — Cuádriceps',              type: 'strength', muscleGroups: ['Cuádriceps', 'Isquios', 'Core'] },
      2: { name: 'Torso — Hombros · Bíceps · Tríceps', type: 'strength', muscleGroups: ['Hombros', 'Bíceps', 'Tríceps'] },
      3: { name: 'Pierna — Glúteo · Femoral',         type: 'strength', muscleGroups: ['Glúteos', 'Isquiotibiales', 'Core'] },
      5: { name: 'Torso — Press · Jalón',             type: 'strength', muscleGroups: ['Pecho', 'Espalda', 'Hombros', 'Bíceps', 'Tríceps'] },
      6: { name: 'Full body — Habilidades',           type: 'strength', muscleGroups: ['Full body', 'Habilidades', 'Core'] }
    },

    weeklySchedule: [
      /* ──────────── SEMANA 1 ──────────── */
      {
        1: [
          _ex('fa_squat_ap', 'Sentadilla libre | barra alta (aproximación)', 2, '10/8', 0, 'Series de calentamiento. Sin registrar peso.'),
          _ex('fa_squat',    'Sentadilla libre | barra alta', 2, '8', 90),
          _ex('fa_rdl_uni',  'Peso muerto rumano unilateral con mancuernas', 3, '10', 90, 'Cada pierna. Énfasis en el estiramiento del isquio.'),
          _ex('fa_cable_sq', 'Sentadilla en polea baja para cuádriceps', 3, '12', 60),
          _ex('fa_leg_ext',  'Extensión de cuádriceps', 3, '12', 60, 'Pausa 1s arriba.'),
          _ex('fa_lcurl_b',  'Curl de femoral con fitball', 2, '14', 60),
          _ex('fa_plank_b',  'Core | Plancha en fitball', 3, '12 rot/lado', 30, 'Rotaciones lentas y controladas.'),
        ],
        2: [
          _ex('fa_ohp_ap',   'Press militar con barra (aproximación)', 2, '8/6', 0, 'Series de calentamiento.'),
          _ex('fa_ohp',      'Press militar con barra', 3, '8', 60),
          _ex('fa_chin_au',  'Australian chin ups', 2, '6', 60),
          _ex('fa_dips_b',   'Fondos de tríceps en banco', 3, '4', 60),
          _ex('fa_row_bar',  'Remo con barra a 90°', 3, '8', 60),
          _ex('fa_lat_r',    'Elevaciones laterales con mancuernas', 3, '12', 60),
          _ex('fa_facepull', 'Facepull en polea', 3, '12', 60),
          _ex('fa_bicep',    'Curl de bíceps de pie', 3, '14', 60),
          _ex('fa_tri_ov',   'Extensión de tríceps trasnuca con mancuerna', 3, '14', 60),
        ],
        3: [
          _ex('fa_abduct',   'Abducción de cadera en máquina', 2, '16', 0, 'Activación. Sin descanso.'),
          _ex('fa_ht_ap',    'Hip Thrust (aproximación)', 2, '10/8', 0, 'Series de calentamiento.'),
          _ex('fa_ht',       'Hip Thrust', 3, '6-10', 60, 'Pausa 2s arriba apretando glúteo.'),
          _ex('fa_lp_uni',   'Prensa unilateral', 2, '10', 60, 'Cada pierna.'),
          _ex('fa_kb_sw',    'Kettlebell swing', 2, '8', 60, 'Impulso desde caderas.'),
          _ex('fa_lcurl',    'Curl de femoral', 2, '8', 60, 'Controla la excéntrica.'),
          _ex('fa_glute_k',  'Patada de glúteo en polea', 2, '14', 60, 'Cada pierna. Aprieta glúteo arriba.'),
          _ex('fa_crunch',   'Core | Crunch abdominal con resistencia', 3, '16', 30),
        ],
        5: [
          _ex('fa_bench',    'Press banca con barra', 3, '8-10', 60),
          _ex('fa_lat_pull', 'Jalón al pecho', 3, '12', 60),
          _ex('fa_shld_db',  'Press de hombro con mancuernas', 2, '8-10', 60),
          _ex('fa_row_uni',  'Remo unilateral con mancuernas', 2, '10', 60, 'Cada brazo.'),
          _ex('fa_uprow',    'Remo al mentón en polea', 2, '14', 60),
          _ex('fa_rear_d',   'Deltoides posterior en máquina', 2, '16', 60),
          _ex('fa_curl_c',   'Curl concentrado', 3, '14', 60),
          _ex('fa_tri_k',    'Patada de tríceps', 3, '14', 60),
        ],
        6: [
          _ex('fa_chin_n',   'Dominadas negativas', 3, '3', 0, 'Excéntrica lenta de 5-8 segundos.'),
          _ex('fa_dl_ap',    'Peso muerto convencional (aproximación)', 2, '6/4', 0, 'Calentamiento.'),
          _ex('fa_dl',       'Peso muerto convencional', 3, '6', 60),
          _ex('fa_pushup',   'Progresión | Flexiones', 2, '8', 60, 'Adapta la variante a tu nivel.'),
          _ex('fa_pull_t',   'Pull through en polea', 2, '14', 60, 'Bisagra de cadera limpia.'),
          _ex('fa_pistol',   'Pistol squats con ayuda', 2, '4', 60, 'Cada pierna. Apóyate en un poste o TRX.'),
          _ex('fa_calf',     'Gemelo en prensa', 3, '20-25', 60, 'Rango completo, pausa abajo.'),
          _ex('fa_leg_r',    'Elevación de piernas colgada', 3, '8', 60, 'Controlada, sin balanceo.'),
          _ex('fa_mtn_c',    'Core | Mountain climbers', 3, '15s', 30, '15 segundos de trabajo.'),
        ],
      },

      /* ──────────── SEMANA 2 ──────────── */
      {
        1: [
          _ex('fa_squat_ap', 'Sentadilla libre | barra alta (aproximación)', 2, '10/8', 0, 'Series de calentamiento.'),
          _ex('fa_squat',    'Sentadilla libre | barra alta', 3, '6-8', 60, '2×6, 1×8. Mismo peso.'),
          _ex('fa_rdl_uni',  'Peso muerto rumano unilateral con mancuernas', 3, '10', 60),
          _ex('fa_cable_sq', 'Sentadilla en polea baja para cuádriceps', 3, '12', 60),
          _ex('fa_leg_ext',  'Extensión de cuádriceps', 3, '12', 60),
          _ex('fa_lcurl_b',  'Curl de femoral con fitball', 3, '14', 60),
          _ex('fa_plank_b',  'Core | Plancha en fitball', 4, '12 rot/lado', 30),
        ],
        2: [
          _ex('fa_ohp_ap',   'Press militar con barra (aproximación)', 2, '8/6', 0),
          _ex('fa_ohp',      'Press militar con barra', 3, '8', 60),
          _ex('fa_chin_au',  'Australian chin ups', 3, '6', 60),
          _ex('fa_dips_b',   'Fondos de tríceps en banco', 3, '6', 60),
          _ex('fa_row_bar',  'Remo con barra a 90°', 4, '8', 60),
          _ex('fa_lat_r',    'Elevaciones laterales con mancuernas', 3, '12', 60),
          _ex('fa_facepull', 'Facepull en polea', 3, '12', 60),
          _ex('fa_bicep',    'Curl de bíceps de pie', 3, '14', 60),
          _ex('fa_tri_ov',   'Extensión de tríceps trasnuca con mancuerna', 3, '14', 60),
        ],
        3: [
          _ex('fa_abduct',   'Abducción de cadera en máquina', 2, '16', 0),
          _ex('fa_ht_ap',    'Hip Thrust (aproximación)', 2, '10/8', 0),
          _ex('fa_ht',       'Hip Thrust', 3, '6-10', 60),
          _ex('fa_lp_uni',   'Prensa unilateral', 3, '10', 60),
          _ex('fa_kb_sw',    'Kettlebell swing', 3, '8', 60),
          _ex('fa_lcurl',    'Curl de femoral', 2, '8', 60),
          _ex('fa_glute_k',  'Patada de glúteo en polea', 2, '14', 60),
          _ex('fa_crunch',   'Core | Crunch abdominal con resistencia', 4, '16', 30),
        ],
        5: [
          _ex('fa_bench',    'Press banca con barra', 3, '8-10', 60),
          _ex('fa_lat_pull', 'Jalón al pecho', 4, '12', 60),
          _ex('fa_shld_db',  'Press de hombro con mancuernas', 3, '8-10', 60),
          _ex('fa_row_uni',  'Remo unilateral con mancuernas', 3, '10', 60),
          _ex('fa_uprow',    'Remo al mentón en polea', 3, '14', 60),
          _ex('fa_rear_d',   'Deltoides posterior en máquina', 3, '16', 60),
          _ex('fa_curl_c',   'Curl concentrado', 3, '14', 60),
          _ex('fa_tri_k',    'Patada de tríceps', 3, '14', 60),
        ],
        6: [
          _ex('fa_chin_n',   'Dominadas negativas', 4, '3', 0),
          _ex('fa_dl_ap',    'Peso muerto convencional (aproximación)', 2, '6/4', 0),
          _ex('fa_dl',       'Peso muerto convencional', 3, '6-8', 120),
          _ex('fa_pushup',   'Progresión | Flexiones', 3, '8', 60),
          _ex('fa_pull_t',   'Pull through en polea', 2, '14', 60),
          _ex('fa_pistol',   'Pistol squats con ayuda', 3, '6', 60),
          _ex('fa_calf',     'Gemelo en prensa', 3, '20-25', 60),
          _ex('fa_leg_r',    'Elevación de piernas colgada', 3, '8', 30),
          _ex('fa_mtn_c',    'Core | Mountain climbers', 3, '15s', 30),
        ],
      },

      /* ──────────── SEMANA 3 ──────────── */
      {
        1: [
          _ex('fa_squat_ap', 'Sentadilla libre | barra alta (aproximación)', 2, '10/8', 0),
          _ex('fa_squat',    'Sentadilla libre | barra alta', 3, '6', 120, 'Última serie: AMRAP con el mismo peso.'),
          _ex('fa_rdl_uni',  'Peso muerto rumano unilateral con mancuernas', 3, '10', 60),
          _ex('fa_cable_sq', 'Sentadilla en polea baja para cuádriceps', 3, '12', 60),
          _ex('fa_leg_ext',  'Extensión de cuádriceps', 3, '12', 60),
          _ex('fa_lcurl_b',  'Curl de femoral con fitball', 3, '14', 60),
          _ex('fa_plank_b',  'Core | Plancha en fitball', 4, '12 círculos/lado', 30),
          _ex('fa_crunch_l', 'Core | Crunch abdominal lateral', 4, '10/lado', 30),
        ],
        2: [
          _ex('fa_ohp_ap',   'Press militar con barra (aproximación)', 2, '8/6', 0),
          _ex('fa_ohp',      'Press militar con barra', 3, '8', 60),
          _ex('fa_chin_au',  'Australian chin ups', 3, '6', 60),
          _ex('fa_dips_b',   'Fondos de tríceps en banco', 3, '6', 60),
          _ex('fa_row_bar',  'Remo con barra a 90°', 4, '8', 60),
          _ex('fa_lat_r',    'Elevaciones laterales con mancuernas', 4, '12', 60),
          _ex('fa_facepull', 'Facepull en polea', 3, '12', 60),
          _ex('fa_bicep',    'Curl de bíceps de pie', 3, '14', 60),
          _ex('fa_tri_ov',   'Extensión de tríceps trasnuca con mancuerna', 3, '14', 60),
        ],
        3: [
          _ex('fa_abduct',   'Abducción de cadera en máquina', 2, '16', 0),
          _ex('fa_ht_ap',    'Hip Thrust (aproximación)', 2, '10/8', 0),
          _ex('fa_ht',       'Hip Thrust', 3, '6-10', 60),
          _ex('fa_lp_uni',   'Prensa unilateral', 3, '10', 60),
          _ex('fa_kb_sw',    'Kettlebell swing', 3, '8', 30),
          _ex('fa_lcurl',    'Curl de femoral', 2, '8', 60),
          _ex('fa_glute_k',  'Patada de glúteo en polea', 2, '14', 60),
          _ex('fa_crunch',   'Core | Crunch abdominal con resistencia', 4, '16', 30),
        ],
        5: [
          _ex('fa_bench',    'Press banca con barra', 3, '8-10', 60),
          _ex('fa_lat_pull', 'Jalón al pecho', 4, '12', 60),
          _ex('fa_shld_db',  'Press de hombro con mancuernas', 3, '8-10', 60),
          _ex('fa_row_uni',  'Remo unilateral con mancuernas', 3, '10', 60),
          _ex('fa_uprow',    'Remo al mentón en polea', 3, '14', 60),
          _ex('fa_rear_d',   'Deltoides posterior en máquina', 3, '16', 60),
          _ex('fa_curl_c',   'Curl concentrado', 3, '14', 60),
          _ex('fa_tri_k',    'Patada de tríceps', 3, '14', 60),
        ],
        6: [
          _ex('fa_chin_n',   'Dominadas negativas', 4, '3', 60),
          _ex('fa_dl_ap',    'Peso muerto convencional (aproximación)', 2, '6/4', 0),
          _ex('fa_dl',       'Peso muerto convencional', 3, '6', 120, 'Última serie: AMRAP con el mismo peso.'),
          _ex('fa_pushup',   'Progresión | Flexiones', 3, '8', 60),
          _ex('fa_pull_t',   'Pull through en polea', 2, '14', 60),
          _ex('fa_pistol',   'Pistol squats con ayuda', 3, '6', 60),
          _ex('fa_calf',     'Gemelo en prensa', 3, '20-25', 60),
          _ex('fa_leg_r',    'Elevación de piernas colgada', 3, '8', 60),
          _ex('fa_mtn_c',    'Core | Mountain climbers', 3, '15s', 15),
        ],
      },

      /* ──────────── SEMANA 4 (Intensidad alta) ──────────── */
      {
        1: [
          _ex('fa_squat_ap', 'Sentadilla libre | barra alta (aproximación)', 2, '10/8', 0),
          _ex('fa_squat',    'Sentadilla libre | barra alta', 4, '4', 120),
          _ex('fa_rdl_uni',  'Peso muerto rumano unilateral con mancuernas', 3, '10', 60),
          _ex('fa_cable_sq', 'Sentadilla en polea baja para cuádriceps', 3, '12', 60),
          _ex('fa_leg_ext',  'Extensión de cuádriceps', 3, '12', 60),
          _ex('fa_lcurl_b',  'Curl de femoral con fitball', 4, '14', 60),
          _ex('fa_plank_b',  'Core | Plancha en fitball', 4, '12 rot/lado', 30),
          _ex('fa_crunch_l', 'Core | Crunch abdominal lateral', 4, '10/lado', 30),
        ],
        2: [
          _ex('fa_ohp_ap',   'Press militar con barra (aproximación)', 2, '8/6', 0),
          _ex('fa_ohp',      'Press militar con barra', 3, '8', 60),
          _ex('fa_chin_au',  'Australian chin ups', 4, '6', 60),
          _ex('fa_dips_b',   'Fondos de tríceps en banco', 3, '6', 60),
          _ex('fa_row_bar',  'Remo con barra a 90°', 4, '8', 60),
          _ex('fa_lat_r_d',  'Elevaciones laterales — Drop Set', 5, '12', 60, 'Últimas series: bajar peso a la mitad al llegar al fallo.'),
          _ex('fa_facepull', 'Facepull en polea', 3, '12', 60),
          _ex('fa_bicep',    'Curl de bíceps de pie', 4, '14', 60),
          _ex('fa_tri_ov',   'Extensión de tríceps trasnuca con mancuerna', 4, '14', 60),
        ],
        3: [
          _ex('fa_abduct',   'Abducción de cadera en máquina', 2, '16', 0),
          _ex('fa_ht_ap',    'Hip Thrust (aproximación)', 2, '10/8', 0),
          _ex('fa_ht',       'Hip Thrust', 4, '6-8', 60),
          _ex('fa_lp_uni',   'Prensa unilateral', 3, '10', 60),
          _ex('fa_kb_sw',    'Kettlebell swing', 3, '8', 30),
          _ex('fa_lcurl',    'Curl de femoral', 2, '8', 60),
          _ex('fa_glute_k',  'Patada de glúteo en polea', 2, '14', 60),
          _ex('fa_crunch',   'Core | Crunch abdominal con resistencia', 4, '16', 30),
        ],
        5: [
          _ex('fa_bench',    'Press banca con barra', 3, '8-10', 60),
          _ex('fa_lat_pull', 'Jalón al pecho', 4, '12', 60),
          _ex('fa_shld_db',  'Press de hombro con mancuernas', 3, '8', 60),
          _ex('fa_row_uni',  'Remo unilateral con mancuernas', 3, '10', 60),
          _ex('fa_uprow',    'Remo al mentón en polea', 3, '14', 60),
          _ex('fa_rear_d',   'Deltoides posterior en máquina', 3, '16', 60),
          _ex('fa_curl_c',   'Curl concentrado', 3, '14', 60),
          _ex('fa_tri_k',    'Patada de tríceps', 3, '14', 60),
        ],
        6: [
          _ex('fa_chin_n',   'Dominadas negativas', 5, '3', 0),
          _ex('fa_dl_ap',    'Peso muerto convencional (aproximación)', 2, '6/4', 0),
          _ex('fa_dl',       'Peso muerto convencional', 3, '4', 120),
          _ex('fa_pushup',   'Progresión | Flexiones', 3, '8', 60),
          _ex('fa_pull_t',   'Pull through en polea', 2, '14', 60),
          _ex('fa_pistol',   'Pistol squats con ayuda', 3, '8', 60),
          _ex('fa_calf',     'Gemelo en prensa', 3, '20-25', 60),
          _ex('fa_leg_r',    'Elevación de piernas colgada', 3, '8', 60),
          _ex('fa_mtn_c',    'Core | Mountain climbers', 3, '15s', 15),
        ],
      },

      /* ──────────── SEMANA 5 (Intensidad alta) ──────────── */
      {
        1: [
          _ex('fa_squat_ap', 'Sentadilla libre | barra alta (aproximación)', 2, '10/8', 0),
          _ex('fa_squat',    'Sentadilla libre | barra alta', 4, '4', 120),
          _ex('fa_rdl_uni',  'Peso muerto rumano unilateral con mancuernas', 3, '10', 60),
          _ex('fa_cable_sq', 'Sentadilla en polea baja para cuádriceps', 3, '12', 60),
          _ex('fa_leg_ext',  'Extensión de cuádriceps', 3, '12', 60),
          _ex('fa_lcurl_b',  'Curl de femoral con fitball', 4, '14', 60),
          _ex('fa_plank_b',  'Core | Plancha en fitball', 4, '12 rot/lado', 30),
          _ex('fa_crunch_l', 'Core | Crunch abdominal lateral', 4, '10/lado', 30),
        ],
        2: [
          _ex('fa_ohp_ap',   'Press militar con barra (aproximación)', 2, '8/6', 0),
          _ex('fa_ohp',      'Press militar con barra', 3, '8', 60),
          _ex('fa_chin_au',  'Australian chin ups', 4, '6', 60),
          _ex('fa_dips_b',   'Fondos de tríceps en banco', 3, '6', 60),
          _ex('fa_row_bar',  'Remo con barra a 90°', 4, '8', 60),
          _ex('fa_lat_r_d',  'Elevaciones laterales — Drop Set', 4, '12', 90),
          _ex('fa_facepull', 'Facepull en polea', 3, '12', 60),
          _ex('fa_bicep',    'Curl de bíceps de pie', 4, '14', 60),
          _ex('fa_tri_ov',   'Extensión de tríceps trasnuca con mancuerna', 4, '14', 60),
        ],
        3: [
          _ex('fa_abduct',   'Abducción de cadera en máquina', 2, '16', 60),
          _ex('fa_ht_ap',    'Hip Thrust (aproximación)', 2, '10/8', 0),
          _ex('fa_ht',       'Hip Thrust', 4, '6-8', 60),
          _ex('fa_lp_uni',   'Prensa unilateral', 3, '10', 60),
          _ex('fa_kb_sw',    'Kettlebell swing', 3, '8', 30),
          _ex('fa_lcurl',    'Curl de femoral', 2, '8', 60),
          _ex('fa_glute_k',  'Patada de glúteo en polea', 2, '14', 60),
          _ex('fa_crunch',   'Core | Crunch abdominal con resistencia', 4, '16', 30),
        ],
        5: [
          _ex('fa_bench',    'Press banca con barra', 3, '8-10', 60),
          _ex('fa_lat_pull', 'Jalón al pecho', 4, '12', 60),
          _ex('fa_shld_db',  'Press de hombro con mancuernas', 3, '8', 60),
          _ex('fa_row_uni',  'Remo unilateral con mancuernas', 3, '10', 60),
          _ex('fa_uprow',    'Remo al mentón en polea', 3, '14', 60),
          _ex('fa_rear_d',   'Deltoides posterior en máquina', 3, '16', 60),
          _ex('fa_curl_c',   'Curl concentrado', 4, '14', 30),
          _ex('fa_tri_k',    'Patada de tríceps', 4, '14', 60),
        ],
        6: [
          _ex('fa_chin_n',   'Dominadas negativas', 5, '3', 0),
          _ex('fa_dl_ap',    'Peso muerto convencional (aproximación)', 2, '6/4', 0),
          _ex('fa_dl',       'Peso muerto convencional', 3, '4', 120),
          _ex('fa_pushup',   'Progresión | Flexiones', 3, '8', 60),
          _ex('fa_pull_t',   'Pull through en polea', 2, '14', 60),
          _ex('fa_pistol',   'Pistol squats con ayuda', 3, '8', 60),
          _ex('fa_calf',     'Gemelo en prensa', 3, '20-25', 60),
          _ex('fa_leg_r',    'Elevación de piernas colgada', 3, '8', 60),
          _ex('fa_mtn_c',    'Core | Mountain climbers', 4, '30s', 30),
        ],
      },

      /* ──────────── SEMANA 6 (Descarga) ──────────── */
      {
        1: [
          _ex('fa_squat_ap', 'Sentadilla libre | barra alta (aproximación)', 2, '10/8', 0),
          _ex('fa_squat',    'Sentadilla libre | barra alta', 2, '8-10', 60),
          _ex('fa_rdl_uni',  'Peso muerto rumano unilateral con mancuernas', 3, '10', 60),
          _ex('fa_cable_sq', 'Sentadilla en polea baja para cuádriceps', 3, '12', 60),
          _ex('fa_leg_ext',  'Extensión de cuádriceps', 3, '12', 60),
          _ex('fa_lcurl_b',  'Curl de femoral con fitball', 2, '14', 60),
          _ex('fa_plank_b',  'Core | Plancha en fitball', 3, '12 rot/lado', 30),
          _ex('fa_crunch_l', 'Core | Crunch abdominal lateral', 3, '10/lado', 30),
        ],
        2: [
          _ex('fa_ohp_ap',   'Press militar con barra (aproximación)', 2, '8/6', 0),
          _ex('fa_ohp',      'Press militar con barra', 3, '8', 60),
          _ex('fa_chin_au',  'Australian chin ups', 2, '6', 60),
          _ex('fa_dips_b',   'Fondos de tríceps en banco', 2, '6', 60),
          _ex('fa_row_bar',  'Remo con barra a 90°', 3, '8', 60),
          _ex('fa_lat_r',    'Elevaciones laterales con mancuernas', 3, '12', 60),
          _ex('fa_facepull', 'Facepull en polea', 3, '12', 60),
          _ex('fa_bicep',    'Curl de bíceps de pie', 3, '14', 60),
          _ex('fa_tri_ov',   'Extensión de tríceps trasnuca con mancuerna', 3, '14', 60),
        ],
        3: [
          _ex('fa_abduct',   'Abducción de cadera en máquina', 2, '16', 60),
          _ex('fa_ht_ap',    'Hip Thrust (aproximación)', 2, '10/8', 0),
          _ex('fa_ht',       'Hip Thrust', 3, '8-10', 60),
          _ex('fa_lp_uni',   'Prensa unilateral', 2, '10', 60),
          _ex('fa_kb_sw',    'Kettlebell swing', 2, '8', 30),
          _ex('fa_lcurl',    'Curl de femoral', 2, '8', 60),
          _ex('fa_glute_k',  'Patada de glúteo en polea', 2, '14', 60),
          _ex('fa_crunch',   'Core | Crunch abdominal con resistencia', 3, '16', 30),
        ],
        5: [
          _ex('fa_bench',    'Press banca con barra', 3, '8-10', 60),
          _ex('fa_lat_pull', 'Jalón al pecho', 3, '12', 60),
          _ex('fa_shld_db',  'Press de hombro con mancuernas', 2, '8-10', 60),
          _ex('fa_row_uni',  'Remo unilateral con mancuernas', 2, '10', 60),
          _ex('fa_uprow',    'Remo al mentón en polea', 2, '14', 60),
          _ex('fa_rear_d',   'Deltoides posterior en máquina', 2, '16', 60),
          _ex('fa_curl_c',   'Curl concentrado', 3, '14', 60),
          _ex('fa_tri_k',    'Patada de tríceps', 3, '14', 60),
        ],
        6: [
          _ex('fa_chin_n',   'Dominadas negativas', 5, '3', 0),
          _ex('fa_dl_ap',    'Peso muerto convencional (aproximación)', 2, '6/4', 0),
          _ex('fa_dl',       'Peso muerto convencional', 3, '6-8', 90),
          _ex('fa_pushup',   'Progresión | Flexiones', 2, '8', 60),
          _ex('fa_pull_t',   'Pull through en polea', 2, '14', 60),
          _ex('fa_pistol',   'Pistol squats con ayuda', 2, '4', 60),
          _ex('fa_calf',     'Gemelo en prensa', 3, '20-25', 60),
          _ex('fa_leg_r',    'Elevación de piernas colgada', 3, '8', 60),
          _ex('fa_mtn_c',    'Core | Mountain climbers', 3, '30s', 30),
        ],
      },

      /* ──────────── SEMANA 7 (Nueva fase) ──────────── */
      {
        1: [
          _ex('fa_rdl_ap',   'Peso muerto rumano (aproximación)', 2, '8/6', 0),
          _ex('fa_rdl',      'Peso muerto rumano', 3, '8', 60),
          _ex('fa_squat_d',  'Sentadilla con disco para cuádriceps', 2, '14', 60),
          _ex('fa_lunges',   'Zancadas con mancuernas', 2, '10', 60, 'Alternando piernas.'),
          _ex('fa_bulg_m',   'Sentadilla búlgara en multipower', 2, '10', 60, 'Cada pierna.'),
          _ex('fa_box_j',    'Saltos laterales al cajón | Progresión', 2, '6', 30),
          _ex('fa_pike',     'Core | Pike plank en fitball', 4, '8-10', 30),
        ],
        2: [
          _ex('fa_facepull', 'Facepull en polea', 3, '12', 60),
          _ex('fa_lat_uni',  'Jalón unilateral en polea', 3, '10', 60, 'Cada brazo.'),
          _ex('fa_landmine', 'Press landmine', 3, '8', 60),
          _ex('fa_dips_p',   'Fondos de tríceps en paralelas', 2, '6-8', 60),
          _ex('fa_row_d',    'Remo con disco', 4, '12', 30),
          _ex('fa_front_r',  'Elevaciones frontales con disco', 3, '10', 60),
          _ex('fa_lat_r',    'Elevaciones laterales con mancuernas', 3, '12', 60),
          _ex('fa_bicep_d',  'Curl de bíceps con mancuerna', 4, '14', 60),
        ],
        3: [
          _ex('fa_clam',     'Clamshell con gomas', 2, '10', 30, 'Activación glúteo medio.'),
          _ex('fa_ht_ap',    'Hip Thrust (aproximación)', 2, '8/6', 0),
          _ex('fa_ht',       'Hip Thrust', 3, '6', 120),
          _ex('fa_bulg_db',  'Sentadilla búlgara con mancuerna', 3, '10', 60, 'Cada pierna.'),
          _ex('fa_snatch',   'Snatch con mancuerna', 3, '10', 30, 'Cada brazo. Potencia desde caderas.'),
          _ex('fa_lcurl',    'Curl de femoral', 3, '10', 60),
          _ex('fa_gm',       'Buenos días', 2, '12', 60, 'Bisagra de cadera, espalda recta.'),
          _ex('fa_crunch',   'Core | Crunch abdominal con resistencia', 3, '16', 30),
        ],
        5: [
          _ex('fa_ohp_ap',   'Press militar con barra (aproximación)', 2, '8/6', 0),
          _ex('fa_ohp',      'Press militar con barra', 3, '8', 60),
          _ex('fa_lat_pull', 'Jalón al pecho', 3, '12', 60),
          _ex('fa_inc_p',    'Press banca inclinado con mancuernas', 3, '8-10', 60),
          _ex('fa_lat_c',    'Elevaciones laterales en polea', 2, '14', 60),
          _ex('fa_uprow',    'Remo al mentón en polea', 2, '14', 60),
          _ex('fa_row_g',    'Remo gironda unilateral en polea', 4, '12', 60),
          _ex('fa_french',   'Press francés', 4, '14', 60),
        ],
        6: [
          _ex('fa_pullup_b', 'Dominadas con gomas', 3, '6-8', 60),
          _ex('fa_front_sq', 'Sentadilla frontal', 3, '8-10', 60),
          _ex('fa_pushup',   'Progresión | Flexiones', 3, '10', 60),
          _ex('fa_stepup',   'Step up lateral con mancuerna', 2, '8', 60, 'Cada pierna.'),
          _ex('fa_pistol_d', 'Pistol squat con disco', 3, '4', 60, 'Cada pierna.'),
          _ex('fa_calf',     'Gemelo en prensa', 3, '20-25', 60),
          _ex('fa_vups',     'Core | V ups', 3, '16', 30),
          _ex('fa_kicks',    'Core | Kick sits', 3, '30s', 30),
        ],
      },

      /* ──────────── SEMANA 8 ──────────── */
      {
        1: [
          _ex('fa_rdl_ap',   'Peso muerto rumano (aproximación)', 2, '8/6', 0),
          _ex('fa_rdl',      'Peso muerto rumano', 3, '8', 60),
          _ex('fa_squat_d',  'Sentadilla con disco para cuádriceps', 2, '14', 60),
          _ex('fa_lunges',   'Zancadas con mancuernas', 2, '12', 60),
          _ex('fa_bulg_m',   'Sentadilla búlgara en multipower', 3, '10', 60),
          _ex('fa_box_j',    'Saltos laterales al cajón | Progresión', 3, '8', 30),
          _ex('fa_pike',     'Core | Pike plank en fitball', 4, '10', 30),
        ],
        2: [
          _ex('fa_facepull', 'Facepull en polea', 3, '12', 60),
          _ex('fa_lat_uni',  'Jalón unilateral en polea', 3, '10', 60),
          _ex('fa_landmine', 'Press landmine', 3, '8', 60),
          _ex('fa_dips_p',   'Fondos de tríceps en paralelas', 3, '6-10', 60),
          _ex('fa_row_d',    'Remo con disco', 4, '12', 30),
          _ex('fa_front_r',  'Elevaciones frontales con disco', 3, '10', 60),
          _ex('fa_lat_r',    'Elevaciones laterales con mancuernas', 3, '12', 60),
          _ex('fa_bicep_d',  'Curl de bíceps con mancuerna', 4, '14', 60),
        ],
        3: [
          _ex('fa_clam',     'Clamshell con gomas', 2, '10', 30),
          _ex('fa_ht_ap',    'Hip Thrust (aproximación)', 2, '8/6', 0),
          _ex('fa_ht',       'Hip Thrust', 3, '6', 90),
          _ex('fa_bulg_db',  'Sentadilla búlgara con mancuerna', 3, '10', 60),
          _ex('fa_snatch',   'Snatch con mancuerna', 3, '10', 30),
          _ex('fa_lcurl',    'Curl de femoral', 3, '10', 60),
          _ex('fa_gm',       'Buenos días', 3, '12', 60),
          _ex('fa_crunch',   'Core | Crunch abdominal con resistencia', 3, '16', 30),
        ],
        5: [
          _ex('fa_ohp_ap',   'Press militar con barra (aproximación)', 2, '8/6', 0),
          _ex('fa_ohp',      'Press militar con barra', 3, '8', 60),
          _ex('fa_lat_pull', 'Jalón al pecho', 3, '12', 60),
          _ex('fa_inc_p',    'Press banca inclinado con mancuernas', 3, '8-10', 60),
          _ex('fa_lat_c',    'Elevaciones laterales en polea', 2, '14', 60),
          _ex('fa_uprow',    'Remo al mentón en polea', 2, '14', 60),
          _ex('fa_row_g',    'Remo gironda unilateral en polea', 4, '12', 60),
          _ex('fa_french',   'Press francés', 4, '14', 60),
        ],
        6: [
          _ex('fa_pullup_b', 'Dominadas con gomas', 3, '6-8', 60),
          _ex('fa_front_sq', 'Sentadilla frontal', 3, '8-10', 180),
          _ex('fa_pushup',   'Progresión | Flexiones', 3, '10', 60),
          _ex('fa_stepup',   'Step up lateral con mancuerna', 2, '10', 60),
          _ex('fa_pistol_d', 'Pistol squat con disco', 3, '6', 60),
          _ex('fa_calf',     'Gemelo en prensa', 3, '20-25', 60),
          _ex('fa_vups',     'Core | V ups', 3, '16', 30),
          _ex('fa_kicks',    'Core | Kick sits', 3, '30s', 30),
        ],
      },

      /* ──────────── SEMANA 9 ──────────── */
      {
        1: [
          _ex('fa_rdl_ap',   'Peso muerto rumano (aproximación)', 2, '8/6', 0),
          _ex('fa_rdl',      'Peso muerto rumano', 3, '8', 60),
          _ex('fa_squat_d',  'Sentadilla con disco para cuádriceps', 2, '14', 60),
          _ex('fa_lunges',   'Zancadas con mancuernas', 3, '10', 60),
          _ex('fa_bulg_m',   'Sentadilla búlgara en multipower', 3, '10', 60),
          _ex('fa_box_j',    'Saltos laterales al cajón | Progresión', 3, '8', 60),
          _ex('fa_pike',     'Core | Pike plank en fitball', 4, '10', 30),
        ],
        2: [
          _ex('fa_facepull', 'Facepull en polea', 3, '12', 60),
          _ex('fa_lat_uni',  'Jalón unilateral en polea', 3, '10', 0),
          _ex('fa_landmine', 'Press landmine', 3, '8', 60),
          _ex('fa_dips_p',   'Fondos de tríceps en paralelas', 4, '6', 60),
          _ex('fa_row_d',    'Remo con disco', 4, '12', 30),
          _ex('fa_front_r',  'Elevaciones frontales con disco', 4, '10', 60),
          _ex('fa_lat_r',    'Elevaciones laterales con mancuernas', 4, '12', 60),
          _ex('fa_bicep_d',  'Curl de bíceps con mancuerna', 4, '14', 60),
        ],
        3: [
          _ex('fa_clam',     'Clamshell con gomas', 2, '10', 30),
          _ex('fa_ht_ap',    'Hip Thrust (aproximación)', 2, '8/6', 0),
          _ex('fa_ht',       'Hip Thrust', 3, '6', 120),
          _ex('fa_bulg_db',  'Sentadilla búlgara con mancuerna', 3, '10', 60),
          _ex('fa_snatch',   'Snatch con mancuerna', 3, '12', 60),
          _ex('fa_lcurl',    'Curl de femoral', 4, '10', 60),
          _ex('fa_gm',       'Buenos días', 4, '12', 60),
          _ex('fa_crunch',   'Core | Crunch abdominal con resistencia', 3, '16', 30),
        ],
        5: [
          _ex('fa_ohp_ap',   'Press militar con barra (aproximación)', 2, '8/6', 0),
          _ex('fa_ohp',      'Press militar con barra', 3, '8', 60),
          _ex('fa_lat_pull', 'Jalón al pecho', 4, '12', 60),
          _ex('fa_inc_p',    'Press banca inclinado con mancuernas', 3, '8-10', 60),
          _ex('fa_lat_c',    'Elevaciones laterales en polea', 3, '14', 60),
          _ex('fa_uprow',    'Remo al mentón en polea', 3, '14', 60),
          _ex('fa_row_g',    'Remo gironda unilateral en polea', 4, '12', 60),
          _ex('fa_french',   'Press francés', 4, '14', 60),
        ],
        6: [
          _ex('fa_pullup_b', 'Dominadas con gomas', 4, '6-8', 60),
          _ex('fa_front_sq', 'Sentadilla frontal', 3, '8-10', 60),
          _ex('fa_pushup',   'Progresión | Flexiones', 3, '12', 60),
          _ex('fa_stepup',   'Step up lateral con mancuerna', 3, '10', 0),
          _ex('fa_pistol_d', 'Pistol squat con disco', 3, '6', 60),
          _ex('fa_calf',     'Gemelo en prensa', 3, '20-25', 60),
          _ex('fa_vups',     'Core | V ups', 3, '16', 30),
          _ex('fa_kicks',    'Core | Kick sits', 3, '30s', 30),
        ],
      },

      /* ──────────── SEMANA 10 ──────────── */
      {
        1: [
          _ex('fa_rdl_ap',   'Peso muerto rumano (aproximación)', 2, '8/6', 0),
          _ex('fa_rdl',      'Peso muerto rumano', 4, '8', 60),
          _ex('fa_squat_d',  'Sentadilla con disco para cuádriceps', 2, '14', 60),
          _ex('fa_lunges',   'Zancadas con mancuernas', 3, '10', 60),
          _ex('fa_bulg_m',   'Sentadilla búlgara en multipower', 3, '10', 60),
          _ex('fa_box_j',    'Saltos laterales al cajón | Progresión', 3, '10', 30),
          _ex('fa_pike',     'Core | Pike plank en fitball', 4, '10-15', 30),
        ],
        2: [
          _ex('fa_facepull', 'Facepull en polea', 3, '12', 60),
          _ex('fa_lat_uni',  'Jalón unilateral en polea', 3, '10', 60),
          _ex('fa_landmine', 'Press landmine', 3, '8', 60),
          _ex('fa_dips_p',   'Fondos de tríceps en paralelas', 4, '8', 60),
          _ex('fa_row_d',    'Remo con disco', 4, '12', 60),
          _ex('fa_front_r',  'Elevaciones frontales con disco', 4, '10', 60),
          _ex('fa_lat_r_d',  'Elevaciones laterales — Drop Set', 3, '12', 90, 'Bajar peso a la mitad al llegar al fallo.'),
          _ex('fa_bicep_d',  'Curl de bíceps con mancuerna', 4, '14', 60),
        ],
        3: [
          _ex('fa_clam',     'Clamshell con gomas', 2, '10', 30),
          _ex('fa_ht_ap',    'Hip Thrust (aproximación)', 2, '8/6', 0),
          _ex('fa_ht',       'Hip Thrust', 4, '6', 120),
          _ex('fa_bulg_db',  'Sentadilla búlgara con mancuerna', 3, '10', 0),
          _ex('fa_snatch',   'Snatch con mancuerna', 3, '12', 60),
          _ex('fa_lcurl',    'Curl de femoral', 4, '10', 60),
          _ex('fa_gm',       'Buenos días', 4, '12', 60),
          _ex('fa_crunch',   'Core | Crunch abdominal con resistencia', 3, '16', 30),
        ],
        5: [
          _ex('fa_ohp_ap',   'Press militar con barra (aproximación)', 2, '8/6', 0),
          _ex('fa_ohp',      'Press militar con barra', 3, '8', 60),
          _ex('fa_lat_pull', 'Jalón al pecho', 4, '12', 120),
          _ex('fa_inc_p',    'Press banca inclinado con mancuernas', 3, '8-10', 60),
          _ex('fa_lat_c',    'Elevaciones laterales en polea', 3, '14', 60),
          _ex('fa_uprow',    'Remo al mentón en polea', 3, '14', 60),
          _ex('fa_row_g',    'Remo gironda unilateral en polea', 4, '12', 60),
          _ex('fa_french',   'Press francés', 4, '14', 60),
        ],
        6: [
          _ex('fa_pullup_b', 'Dominadas con gomas', 4, '6-8', 60),
          _ex('fa_front_sq', 'Sentadilla frontal', 3, '8-10', 60),
          _ex('fa_pushup',   'Progresión | Flexiones', 3, '12', 60),
          _ex('fa_stepup',   'Step up lateral con mancuerna', 3, '8', 60),
          _ex('fa_pistol_d', 'Pistol squat con disco', 3, '10', 60),
          _ex('fa_calf',     'Gemelo en prensa', 3, '20-25', 60),
          _ex('fa_vups',     'Core | V ups', 3, '16', 30),
          _ex('fa_kicks',    'Core | Kick sits', 3, '30s', 15),
        ],
      },

      /* ──────────── SEMANA 11 (Pico) ──────────── */
      {
        1: [
          _ex('fa_rdl_ap',   'Peso muerto rumano (aproximación)', 2, '8/6', 0),
          _ex('fa_rdl',      'Peso muerto rumano', 4, '8', 60),
          _ex('fa_squat_d',  'Sentadilla con disco para cuádriceps', 3, '14', 60),
          _ex('fa_lunges',   'Zancadas con mancuernas', 3, '10', 60),
          _ex('fa_bulg_m',   'Sentadilla búlgara en multipower', 3, '10', 75),
          _ex('fa_box_j',    'Saltos laterales al cajón | Progresión', 3, '10', 60),
          _ex('fa_pike',     'Core | Pike plank en fitball', 4, '10', 30),
        ],
        2: [
          _ex('fa_facepull', 'Facepull en polea', 3, '12', 60),
          _ex('fa_lat_uni',  'Jalón unilateral en polea', 3, '10', 60),
          _ex('fa_landmine', 'Press landmine', 3, '8', 60),
          _ex('fa_dips_p',   'Fondos de tríceps en paralelas', 4, '8', 60),
          _ex('fa_row_d',    'Remo con disco', 4, '12', 30),
          _ex('fa_front_r',  'Elevaciones frontales con disco', 4, '15', 60),
          _ex('fa_lat_r_d',  'Elevaciones laterales — Drop Set', 5, '12', 60, 'Series finales: bajar peso hasta el fallo (Máximas).'),
          _ex('fa_bicep_d',  'Curl de bíceps con mancuerna', 4, '14', 60),
        ],
        3: [
          _ex('fa_clam',     'Clamshell con gomas', 2, '10', 30),
          _ex('fa_ht_ap',    'Hip Thrust (aproximación)', 2, '8/6', 0),
          _ex('fa_ht',       'Hip Thrust', 4, '6', 120),
          _ex('fa_bulg_db',  'Sentadilla búlgara con mancuerna', 3, '10', 60),
          _ex('fa_snatch',   'Snatch con mancuerna', 3, '15', 60),
          _ex('fa_lcurl',    'Curl de femoral', 4, '10', 60),
          _ex('fa_gm',       'Buenos días', 4, '12', 60),
          _ex('fa_crunch',   'Core | Crunch abdominal con resistencia', 3, '16', 30),
        ],
        5: [
          _ex('fa_ohp_ap',   'Press militar con barra (aproximación)', 2, '8/6', 0),
          _ex('fa_ohp',      'Press militar con barra', 3, '8', 60),
          _ex('fa_lat_pull', 'Jalón al pecho', 4, '12', 60),
          _ex('fa_inc_p',    'Press banca inclinado con mancuernas', 3, '8-10', 60),
          _ex('fa_lat_c',    'Elevaciones laterales en polea', 3, '14', 60),
          _ex('fa_uprow',    'Remo al mentón en polea', 3, '14', 60),
          _ex('fa_row_g',    'Remo gironda unilateral en polea', 4, '12', 60),
          _ex('fa_french',   'Press francés', 4, '14', 60),
        ],
        6: [
          _ex('fa_pullup_b', 'Dominadas con gomas', 4, '6-8', 60),
          _ex('fa_front_sq', 'Sentadilla frontal', 3, '8-10', 60),
          _ex('fa_pushup',   'Progresión | Flexiones', 3, '12', 60),
          _ex('fa_stepup',   'Step up lateral con mancuerna', 3, '10', 60),
          _ex('fa_pistol_d', 'Pistol squat con disco', 3, '6-8', 60),
          _ex('fa_calf',     'Gemelo en prensa', 3, '20-25', 60),
          _ex('fa_vups',     'Core | V ups', 3, '15', 30),
          _ex('fa_kicks',    'Core | Kick sits', 3, '30s', 30),
        ],
      },

      /* ──────────── SEMANA 12 (Descarga) ──────────── */
      {
        1: [
          _ex('fa_rdl_ap',   'Peso muerto rumano (aproximación)', 2, '8/6', 0),
          _ex('fa_rdl',      'Peso muerto rumano', 3, '8', 60),
          _ex('fa_squat_d',  'Sentadilla con disco para cuádriceps', 2, '14', 60),
          _ex('fa_lunges',   'Zancadas con mancuernas', 3, '10', 60),
          _ex('fa_bulg_m',   'Sentadilla búlgara en multipower', 2, '10', 60),
          _ex('fa_box_j',    'Saltos laterales al cajón | Progresión', 2, '6', 30),
          _ex('fa_pike',     'Core | Pike plank en fitball', 3, '10', 60),
        ],
        2: [
          _ex('fa_facepull', 'Facepull en polea', 3, '12', 60),
          _ex('fa_lat_uni',  'Jalón unilateral en polea', 3, '10', 60),
          _ex('fa_landmine', 'Press landmine', 3, '8', 60),
          _ex('fa_dips_p',   'Fondos de tríceps en paralelas', 2, '8', 60),
          _ex('fa_row_d',    'Remo con disco', 3, '12', 60),
          _ex('fa_front_r',  'Elevaciones frontales con disco', 3, '10', 60),
          _ex('fa_lat_r',    'Elevaciones laterales con mancuernas', 3, '12', 60),
          _ex('fa_bicep_d',  'Curl de bíceps con mancuerna', 4, '14', 60),
        ],
        3: [
          _ex('fa_clam',     'Clamshell con gomas', 2, '10', 30),
          _ex('fa_ht_ap',    'Hip Thrust (aproximación)', 2, '8/6', 0),
          _ex('fa_ht',       'Hip Thrust', 2, '6-8', 60),
          _ex('fa_bulg_db',  'Sentadilla búlgara con mancuerna', 2, '8-10', 60),
          _ex('fa_snatch',   'Snatch con mancuerna', 3, '12', 60),
          _ex('fa_lcurl',    'Curl de femoral', 3, '10', 60),
          _ex('fa_gm',       'Buenos días', 2, '12', 60),
          _ex('fa_crunch',   'Core | Crunch abdominal con resistencia', 3, '20', 30),
        ],
        5: [
          _ex('fa_ohp_ap',   'Press militar con barra (aproximación)', 2, '8/6', 0),
          _ex('fa_ohp',      'Press militar con barra', 2, '8', 60),
          _ex('fa_lat_pull', 'Jalón al pecho', 2, '12', 60),
          _ex('fa_inc_p',    'Press banca inclinado con mancuernas', 3, '8-10', 60),
          _ex('fa_lat_c',    'Elevaciones laterales en polea', 2, '14', 60),
          _ex('fa_uprow',    'Remo al mentón en polea', 2, '14', 60),
          _ex('fa_row_g',    'Remo gironda unilateral en polea', 2, '12', 60),
          _ex('fa_french',   'Press francés', 3, '14', 60),
        ],
        6: [
          _ex('fa_pullup_b', 'Dominadas con gomas', 2, '6-8', 60),
          _ex('fa_front_sq', 'Sentadilla frontal', 2, '8-10', 60),
          _ex('fa_pushup',   'Progresión | Flexiones', 2, '8-10', 60),
          _ex('fa_stepup',   'Step up lateral con mancuerna', 2, '10', 60),
          _ex('fa_pistol_d', 'Pistol squat con disco', 2, '6-8', 60),
          _ex('fa_calf',     'Gemelo en prensa', 3, '20-25', 60),
          _ex('fa_vups',     'Core | V ups', 3, '16', 30),
          _ex('fa_kicks',    'Core | Kick sits', 3, '30s', 30),
        ],
      },
    ] // end weeklySchedule
  }, // end fuerza_avanzado
};

/* ── Active plan (used for home screen) ── */
const ACTIVE_PLAN = 'fuerza_avanzado';

/* ── Day / Month names ── */
const DAY_NAMES      = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const DAY_NAMES_FULL = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const MONTH_NAMES    = ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
                        'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

/* ── Data access helpers ── */

function getAvailablePlans() {
  return Object.values(WORKOUT_PLANS).map(p => ({ id: p.id, name: p.name }));
}

// Get workout for a repeating plan (day of week only)
function _getRepeatingWorkout(plan, dayOfWeek) {
  const exs = plan.schedule[dayOfWeek];
  if (!exs) return null;
  const meta = plan.dayMeta[dayOfWeek];
  if (!meta) return null;
  return { ...meta, exercises: exs };
}

// Get workout for a phased plan (week number + day of week)
function _getPhasedWorkout(plan, weekNum, dayOfWeek) {
  const idx = Math.min(Math.max((weekNum || 1) - 1, 0), plan.weeklySchedule.length - 1);
  const week = plan.weeklySchedule[idx];
  if (!week) return null;
  const exs = week[dayOfWeek];
  if (!exs) return null;
  const meta = plan.dayMeta[dayOfWeek];
  if (!meta) return null;
  return { ...meta, exercises: exs };
}

function getWorkoutForPlanWeekDay(planId, weekNum, dayOfWeek) {
  const plan = WORKOUT_PLANS[planId];
  if (!plan) return null;
  if (plan.planType === 'phased') return _getPhasedWorkout(plan, weekNum, dayOfWeek);
  return _getRepeatingWorkout(plan, dayOfWeek);
}

// Backward-compat shim used by calendar (planId + dayOfWeek, no week)
function getWorkoutForPlanAndDay(planId, dayOfWeek) {
  return getWorkoutForPlanWeekDay(planId, Storage?.getPlanCurrentWeek?.(planId) || 1, dayOfWeek);
}

function getTodayWorkout() {
  const weekNum = Storage?.getPlanCurrentWeek?.(ACTIVE_PLAN) || 1;
  return getWorkoutForPlanWeekDay(ACTIVE_PLAN, weekNum, new Date().getDay());
}

function getWorkoutForDay(dayOfWeek) {
  return getWorkoutForPlanAndDay(ACTIVE_PLAN, dayOfWeek);
}

function getAllExercises() {
  const plan = WORKOUT_PLANS[ACTIVE_PLAN];
  const seen = new Set();
  const result = [];
  const addExs = (exs, dayName) => {
    exs.forEach(ex => {
      if (!seen.has(ex.id)) { seen.add(ex.id); result.push({ ...ex, dayName }); }
    });
  };
  if (plan.planType === 'phased') {
    plan.weeklySchedule.forEach(week => {
      Object.entries(week).forEach(([dow, exs]) => {
        const meta = plan.dayMeta[dow];
        addExs(exs, meta?.name || `Día ${dow}`);
      });
    });
  } else {
    Object.entries(plan.schedule).forEach(([dow, exs]) => {
      if (!exs) return;
      const meta = plan.dayMeta[dow];
      addExs(exs, meta?.name || `Día ${dow}`);
    });
  }
  return result;
}

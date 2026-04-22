/* ============================================
   IZA WORKOUT — Entrenos Express
   Single-session workouts organized by category
   ============================================ */

const EXPRESS_CATEGORIES = [
  { id: 'HIIT',          name: 'HIIT',            emoji: '🔥' },
  { id: 'FULL BODY',     name: 'Full Body',       emoji: '💪' },
  { id: 'POR PARTES',    name: 'Por Partes',      emoji: '🎯' },
  { id: 'CALISTENIA',    name: 'Calistenia',      emoji: '🤸' },
  { id: 'KETTLEBELL',    name: 'Kettlebell',      emoji: '⚡' },
  { id: 'MOVILIDAD',     name: 'Movilidad',       emoji: '🧘' },
  { id: 'ESTIRAMIENTOS', name: 'Estiramientos',   emoji: '🕊️' }
];

const EXPRESS_WORKOUTS = {

  /* ══════════════ HIIT ══════════════ */

  hiit_1_0: {
    id: 'hiit_1_0', name: 'HIIT 1.0', category: 'HIIT', type: 'strength',
    description: 'Bloques A y B — 40s trabajo / 20s descanso',
    muscleGroups: ['HIIT', 'Full Body'],
    exercises: [
      _ex('hiit_1_0_ex1',  'Movilidad | Cat camel', 1, '12', 0),
      _ex('hiit_1_0_ex2',  'Movilidad | Rotación de columna en T', 2, '12', 0),
      _ex('hiit_1_0_ex3',  'Movilidad | Runners lunge', 2, '12/lado', 0),
      _ex('hiit_1_0_ex4',  'Zancadas sin peso', 2, '12/lado', 0),
      _ex('hiit_1_0_ex5',  'Subidas al cajón', 2, '40s', 20, 'BLOQUE A'),
      _ex('hiit_1_0_ex6',  'Kettlebell swing', 2, '40s', 20, 'BLOQUE A'),
      _ex('hiit_1_0_ex7',  'Plancha con toques de hombro', 2, '40s', 20, 'BLOQUE A'),
      _ex('hiit_1_0_ex8',  'HIIT | Sprint estático', 2, '40s', 60, 'BLOQUE A — 3 min entre bloques'),
      _ex('hiit_1_0_ex9',  'Saltos laterales al cajón', 2, '40s', 20, 'BLOQUE B'),
      _ex('hiit_1_0_ex10', 'Sentadilla kettlebell + remo al mentón', 2, '40s', 20, 'BLOQUE B'),
      _ex('hiit_1_0_ex11', 'Core | Butterfly Sit up', 2, '40s', 20, 'BLOQUE B'),
      _ex('hiit_1_0_ex12', 'HIIT | Sprint estático', 2, '40s', 60, 'BLOQUE B'),
    ]
  },

  hiit_2_0: {
    id: 'hiit_2_0', name: 'HIIT 2.0', category: 'HIIT', type: 'strength',
    description: '3 rondas — 30s / 15s',
    muscleGroups: ['HIIT', 'Full Body'],
    exercises: [
      _ex('hiit_2_0_ex1',  'Movilidad | Flexión de tobillo de rodillas', 2, '10', 0),
      _ex('hiit_2_0_ex2',  'Movilidad | Flexiones escapulares', 2, '10', 0),
      _ex('hiit_2_0_ex3',  'Movilidad | Supermans', 2, '10', 0),
      _ex('hiit_2_0_ex4',  'HIIT | Burpees', 3, '30s', 15),
      _ex('hiit_2_0_ex5',  'HIIT | Sentadilla + paso atrás', 3, '30s', 15),
      _ex('hiit_2_0_ex6',  'HIIT | Plank thrust', 3, '30s', 15),
      _ex('hiit_2_0_ex7',  'HIIT | Explosive jumping jacks', 3, '30s', 15),
      _ex('hiit_2_0_ex8',  'HIIT | Prisioner squat + knee in', 3, '30s', 15),
      _ex('hiit_2_0_ex9',  'Core | Crunch', 3, '30s', 15),
      _ex('hiit_2_0_ex10', 'Vuelta a la calma | Trote suave', 1, '5 min', 0, 'Bajar pulsaciones'),
      _ex('hiit_2_0_ex11', 'Estiramiento | Cadera (Frog)', 1, '12', 0),
      _ex('hiit_2_0_ex12', 'Estiramiento | Hombros', 1, '12', 0),
      _ex('hiit_2_0_ex13', 'Estiramiento | Rodilla al pecho', 1, '12', 0),
    ]
  },

  hiit_3_0: {
    id: 'hiit_3_0', name: 'HIIT 3.0', category: 'HIIT', type: 'strength',
    description: 'HIIT Olímpico — 3 rondas 35s / 10s',
    muscleGroups: ['HIIT', 'Full Body'],
    exercises: [
      _ex('hiit_3_0_ex1',  'Movilidad | Flexiones escapulares', 2, '10', 0),
      _ex('hiit_3_0_ex2',  'Movilidad | Runners lunge with reach', 2, '6/lado', 0),
      _ex('hiit_3_0_ex3',  'Movilidad | Standing reach down fwd-back', 2, '8', 0),
      _ex('hiit_3_0_ex4',  'HIIT | Fast feet', 3, '35s', 10),
      _ex('hiit_3_0_ex5',  'Flexiones de diamante', 3, '35s', 10),
      _ex('hiit_3_0_ex6',  'HIIT | Lateral lunge drop', 3, '35s', 10),
      _ex('hiit_3_0_ex7',  'HIIT | Scissor jumps', 3, '35s', 10),
      _ex('hiit_3_0_ex8',  'Sentadilla isométrica', 3, '35s', 10),
      _ex('hiit_3_0_ex9',  'Vuelta a la calma | Trote suave', 1, '3-5 min', 0),
      _ex('hiit_3_0_ex10', 'Estiramiento | Cuello', 1, '10', 0),
      _ex('hiit_3_0_ex11', 'Estiramiento | Rodilla al pecho', 1, '10', 0),
    ]
  },

  hiit_4_0: {
    id: 'hiit_4_0', name: 'HIIT 4.0', category: 'HIIT', type: 'strength',
    description: 'Piernas a fuego — 3 rondas 30s / 15s',
    muscleGroups: ['HIIT', 'Piernas'],
    exercises: [
      _ex('hiit_4_0_ex1',  'Movilidad | Bisagra de cadera', 2, '10', 0),
      _ex('hiit_4_0_ex2',  'Movilidad | Flexión de tobillo de rodillas', 2, '10', 0),
      _ex('hiit_4_0_ex3',  'Movilidad | Patada de glúteo de lado a lado', 2, '10', 0),
      _ex('hiit_4_0_ex4',  'HIIT | Sprint estático', 3, '30s', 15),
      _ex('hiit_4_0_ex5',  'HIIT | Lateral lunge drop', 3, '30s', 15),
      _ex('hiit_4_0_ex6',  'HIIT | Pulse jump squats', 3, '30s', 15),
      _ex('hiit_4_0_ex7',  'HIIT | Plank thrust', 3, '30s', 15),
      _ex('hiit_4_0_ex8',  'HIIT | Sentadilla + toques de pie', 3, '30s', 15),
      _ex('hiit_4_0_ex9',  'Glute bridge unilateral', 3, '30s', 15),
      _ex('hiit_4_0_ex10', 'Core | Crunch', 3, '30s', 15),
      _ex('hiit_4_0_ex11', 'Estiramiento | Cadera (Frog)', 2, '10', 0),
      _ex('hiit_4_0_ex12', 'Estiramiento | Espalda', 2, '10', 0),
    ]
  },

  hiit_5_0: {
    id: 'hiit_5_0', name: 'HIIT 5.0', category: 'HIIT', type: 'strength',
    description: '4 rondas — 30s / 10s',
    muscleGroups: ['HIIT', 'Full Body'],
    exercises: [
      _ex('hiit_5_0_ex1',  'Movilidad | Bisagra de cadera', 2, '10', 0),
      _ex('hiit_5_0_ex2',  'Movilidad | Rotación de columna en T', 2, '10', 0),
      _ex('hiit_5_0_ex3',  'Movilidad | Supermans', 2, '10', 0),
      _ex('hiit_5_0_ex4',  'HIIT | Prisioner side to side squats', 4, '30s', 10),
      _ex('hiit_5_0_ex5',  'HIIT | Burpees', 4, '30s', 10),
      _ex('hiit_5_0_ex6',  'HIIT | Sentadilla con salto + rotación', 4, '30s', 10),
      _ex('hiit_5_0_ex7',  'Core | Kick sits', 4, '30s', 10),
      _ex('hiit_5_0_ex8',  'HIIT | Lunge drop', 4, '30s', 10),
      _ex('hiit_5_0_ex9',  'HIIT | Sprint estático', 4, '30s', 10),
      _ex('hiit_5_0_ex10', 'Estiramiento | Glúteo medio', 2, '10', 0),
      _ex('hiit_5_0_ex11', 'Estiramiento | Rodilla al pecho', 2, '10', 0),
    ]
  },

  hiit_abs: {
    id: 'hiit_abs', name: 'HIIT Abs', category: 'HIIT', type: 'strength',
    description: 'The sound of the summer is CRUNCH — 2 rondas 35s / 15s',
    muscleGroups: ['Core', 'HIIT'],
    exercises: [
      _ex('hiit_abs_ex1',  'Movilidad | Cat camel', 2, '10', 0),
      _ex('hiit_abs_ex2',  'Movilidad | Hip CAR', 2, '10', 0),
      _ex('hiit_abs_ex3',  'Movilidad | Rotación de hombro de rodillas', 2, '10', 0),
      _ex('hiit_abs_ex4',  'HIIT | Jumping jacks', 2, '35s', 15),
      _ex('hiit_abs_ex5',  'Core | McGuill crunch', 2, '35s', 15),
      _ex('hiit_abs_ex6',  'Core | Scissors', 2, '35s', 15),
      _ex('hiit_abs_ex7',  'Core | Mountain climbers + toques de rodilla', 2, '35s', 15),
      _ex('hiit_abs_ex8',  'Core | Plancha de codos a manos', 2, '35s', 15),
      _ex('hiit_abs_ex9',  'Core | V ups', 2, '35s', 15),
      _ex('hiit_abs_ex10', 'Core | Deadbugs', 2, '35s', 15),
      _ex('hiit_abs_ex11', 'Estiramiento | Espalda', 2, '12', 0),
      _ex('hiit_abs_ex12', 'Estiramiento | Rodilla al pecho', 2, '12', 0),
    ]
  },

  hiit_abs_sm: {
    id: 'hiit_abs_sm', name: 'HIIT Abs sin Material', category: 'HIIT', type: 'strength',
    description: '3 circuitos — Tábata final 20s / 10s',
    muscleGroups: ['Core', 'HIIT'],
    exercises: [
      _ex('hiit_abs_sm_ex1',  'Core | Deadbugs', 2, '40s', 20, 'Circuito 1'),
      _ex('hiit_abs_sm_ex2',  'Hip dips plank', 2, '40s', 20, 'Circuito 1'),
      _ex('hiit_abs_sm_ex3',  'Core | Zombie sit ups', 2, '40s', 20, 'Circuito 1'),
      _ex('hiit_abs_sm_ex4',  'Core | Jumping jacks plank', 2, '40s', 20, 'Circuito 1'),
      _ex('hiit_abs_sm_ex5',  'Plank toe tap', 2, '40s', 20, 'Circuito 2'),
      _ex('hiit_abs_sm_ex6',  'Core | Hollow hold', 2, '40s', 20, 'Circuito 2'),
      _ex('hiit_abs_sm_ex7',  'Core | Mountain climbers', 2, '40s', 20, 'Circuito 2'),
      _ex('hiit_abs_sm_ex8',  'Core | Bear crawl', 2, '40s', 20, 'Circuito 2'),
      _ex('hiit_abs_sm_ex9',  'Core | Knee to toe taps', 4, '20s', 10, 'TÁBATA FINAL'),
      _ex('hiit_abs_sm_ex10', 'HIIT | Jumping jacks', 4, '20s', 10, 'TÁBATA FINAL'),
    ]
  },

  hiit_gluteos_kb: {
    id: 'hiit_gluteos_kb', name: 'HIIT Glúteos con Kettlebell', category: 'HIIT', type: 'strength',
    description: 'Booty Day en casita — 4 rondas 35s / 15s',
    muscleGroups: ['Glúteos', 'HIIT'],
    exercises: [
      _ex('hiit_gkb_ex1',  'Movilidad | Rotación interna cadera 90-90', 2, '8/lado', 0),
      _ex('hiit_gkb_ex2',  'Movilidad | Balanceo de piernas', 2, '8/lado', 0),
      _ex('hiit_gkb_ex3',  'Movilidad | Frog Rolls', 2, '10', 0),
      _ex('hiit_gkb_ex4',  'Movilidad | Movimientos escapulares', 2, '8', 0),
      _ex('hiit_gkb_ex5',  'Sentadilla goblet con doble pausa', 4, '35s', 15),
      _ex('hiit_gkb_ex6',  'Peso muerto con kettlebell y resistencia', 4, '35s', 15),
      _ex('hiit_gkb_ex7',  'Hip thrust con mancuerna', 4, '35s/pierna', 15),
      _ex('hiit_gkb_ex8',  'Sentadilla búlgara goblet', 4, '35s/pierna', 15),
      _ex('hiit_gkb_ex9',  'Kettlebell swing', 4, '35s', 15),
      _ex('hiit_gkb_ex10', 'Vuelta a la calma | Trote suave', 1, '3-5 min', 0),
      _ex('hiit_gkb_ex11', 'Estiramiento | Espalda', 1, '10', 0),
      _ex('hiit_gkb_ex12', 'Estiramiento | Piramidal', 1, '10', 0),
      _ex('hiit_gkb_ex13', 'Estiramientos circulares', 1, '10', 0),
    ]
  },

  hiit_tren_sup: {
    id: 'hiit_tren_sup', name: 'HIIT Tren Superior', category: 'HIIT', type: 'strength',
    description: 'Un kettlebell y magia — 3 rondas 30s / 15s',
    muscleGroups: ['Tren superior', 'HIIT'],
    exercises: [
      _ex('hiit_ts_ex1',  'Movilidad | Shoulder CAR', 2, '8', 0),
      _ex('hiit_ts_ex2',  'Movilidad | Cat camel', 2, '10', 0),
      _ex('hiit_ts_ex3',  "Movilidad | WGS (World's Greatest Stretch)", 2, '8/lado', 0),
      _ex('hiit_ts_ex4',  'Movilidad | Supermans', 2, '10', 0),
      _ex('hiit_ts_ex5',  'Progresión | Flexiones', 3, '30s', 15),
      _ex('hiit_ts_ex6',  'Press de hombro unilateral de rodillas', 3, '30s (15s/lado)', 15),
      _ex('hiit_ts_ex7',  'Remo unilateral con mancuernas', 3, '30s (15s/lado)', 15),
      _ex('hiit_ts_ex8',  'Curl de bíceps con mancuerna', 3, '30s', 15),
      _ex('hiit_ts_ex9',  'Fondos de tríceps en banco', 3, '30s', 15),
      _ex('hiit_ts_ex10', 'Elevaciones unilaterales', 3, '30s (15s/lado)', 15),
      _ex('hiit_ts_ex11', 'Vuelta a la calma | Trote suave', 1, '3-5 min', 0),
      _ex('hiit_ts_ex12', 'Estiramiento | Cuello', 1, '10', 30),
      _ex('hiit_ts_ex13', 'Estiramiento | Hombros con rotación', 1, '10', 30),
      _ex('hiit_ts_ex14', 'Estiramiento | Muñecas', 1, '10', 30),
    ]
  },

  /* ══════════════ FULL BODY ══════════════ */

  fb_casa: {
    id: 'fb_casa', name: 'Full Body Casa', category: 'FULL BODY', type: 'strength',
    description: 'Fullbody con banco/silla — 2 circuitos + Tábata',
    muscleGroups: ['Full Body'],
    exercises: [
      _ex('fb_casa_ex1',  'Reverse lunge con mancuernas', 2, '40s', 20, 'Circuito 1'),
      _ex('fb_casa_ex2',  'Fondos de tríceps en banco', 2, '40s', 20, 'Circuito 1'),
      _ex('fb_casa_ex3',  'Core | Deadbugs', 2, '40s alternando', 20, 'Circuito 1'),
      _ex('fb_casa_ex4',  'Core | Plancha de codos a manos', 2, '40s', 20, 'Circuito 1'),
      _ex('fb_casa_ex5',  'Sentadilla + Curtsy lunge', 2, '40s', 20, 'Circuito 2'),
      _ex('fb_casa_ex6',  'Core | Plancha', 2, '40s', 20, 'Circuito 2'),
      _ex('fb_casa_ex7',  'Puente de glúteos unilateral (izq)', 2, '40s', 20, 'Circuito 2'),
      _ex('fb_casa_ex8',  'Puente de glúteos unilateral (der)', 2, '40s', 20, 'Circuito 2'),
      _ex('fb_casa_ex9',  'HIIT | Burpee sin salto', 4, '20s', 10, 'Tábata final'),
      _ex('fb_casa_ex10', 'Core | Cocoons', 4, '20s', 10, 'Tábata final'),
    ]
  },

  fb_gomas: {
    id: 'fb_gomas', name: 'Full Body con Gomas', category: 'FULL BODY', type: 'strength',
    description: '3 rondas — 35s / 10s',
    muscleGroups: ['Full Body'],
    exercises: [
      _ex('fb_gomas_ex1',  'Movilidad | Rotación interna cadera 90-90', 2, '8/lado', 0),
      _ex('fb_gomas_ex2',  'Movilidad | Cat camel', 2, '10', 0),
      _ex('fb_gomas_ex3',  'Movilidad | Frog Rolls', 2, '10', 0),
      _ex('fb_gomas_ex4',  'Movilidad | Rotación de columna en T', 2, '8/lado', 0),
      _ex('fb_gomas_ex5',  'Peso muerto con resistencia', 3, '35s', 10),
      _ex('fb_gomas_ex6',  'Press pecho unilateral en decúbito', 3, '35s', 10),
      _ex('fb_gomas_ex7',  'Remo gironda con resistencia', 3, '35s', 10),
      _ex('fb_gomas_ex8',  'Sentadilla búlgara con resistencia', 3, '35s', 10),
      _ex('fb_gomas_ex9',  'Extensión de tríceps con resistencia', 3, '35s', 10),
      _ex('fb_gomas_ex10', 'Curl de bíceps + press con resistencia', 3, '35s', 10),
      _ex('fb_gomas_ex11', 'Vuelta a la calma | Trote suave', 1, '3-5 min', 0),
      _ex('fb_gomas_ex12', 'Estiramiento | Cadera (Frog)', 1, '10', 30),
      _ex('fb_gomas_ex13', 'Estiramiento | Hombros', 1, '10', 30),
      _ex('fb_gomas_ex14', 'Estiramiento | Rodilla al pecho', 1, '10', 30),
    ]
  },

  fb_gomas_kb: {
    id: 'fb_gomas_kb', name: 'Full Body con Gomas y Kettlebell', category: 'FULL BODY', type: 'strength',
    description: 'No excuses! — 3 rondas 30s / 15s',
    muscleGroups: ['Full Body'],
    exercises: [
      _ex('fb_gkb_ex1',  'Movilidad | Cat camel', 2, '8', 15),
      _ex('fb_gkb_ex2',  'Movilidad | Leg Rockback', 2, '8', 15),
      _ex('fb_gkb_ex3',  'Movilidad | Kettlebell halos', 2, '10 (5/lado)', 15),
      _ex('fb_gkb_ex4',  'Movilidad | Aductores con kettlebell', 2, '10 (5/lado)', 15),
      _ex('fb_gkb_ex5',  'Core | Deadbugs', 1, '10 (5/lado)', 15),
      _ex('fb_gkb_ex6',  'Peso muerto + sentadilla con kettlebell', 3, '30s', 15),
      _ex('fb_gkb_ex7',  'Press de pecho con resistencia tumbada', 3, '30s', 15),
      _ex('fb_gkb_ex8',  'Thrusters con resistencia', 3, '30s', 15),
      _ex('fb_gkb_ex9',  'Kettlebell swing unilateral', 3, '30s (15s/lado)', 15),
      _ex('fb_gkb_ex10', 'Press francés con resistencia', 3, '30s', 15),
      _ex('fb_gkb_ex11', 'Glute bridge unilateral', 3, '30s (15s/lado)', 15),
      _ex('fb_gkb_ex12', 'Gorilla row', 3, '30s (15s/lado)', 15),
      _ex('fb_gkb_ex13', 'Elevaciones laterales con resistencia', 3, '30s (15s/lado)', 15),
      _ex('fb_gkb_ex14', 'HIIT | Explosive jumping jacks', 3, '30s', 15),
      _ex('fb_gkb_ex15', 'Vuelta a la calma | Trote suave', 1, '3-5 min', 0),
      _ex('fb_gkb_ex16', 'Estiramiento | Espalda en cajón', 1, '10', 15),
      _ex('fb_gkb_ex17', 'Estiramiento | Hombros con rotación', 1, '10', 15),
    ]
  },

  fb_gym: {
    id: 'fb_gym', name: 'Full Body Express Gym', category: 'FULL BODY', type: 'strength',
    description: '30 minutos — poco tiempo, gran resultado',
    muscleGroups: ['Full Body'],
    exercises: [
      _ex('fb_gym_ex1',  'Movilidad | Rotación interna cadera 90-90', 1, '6/lado', 10),
      _ex('fb_gym_ex2',  "Movilidad | WGS (World's Greatest Stretch)", 1, '6/lado', 15),
      _ex('fb_gym_ex3',  'Peso muerto convencional (aproximación)', 2, '4-6', 60, '1 min descanso'),
      _ex('fb_gym_ex4',  'Peso muerto convencional (trabajo 1)', 1, '6-8', 120),
      _ex('fb_gym_ex5',  'Peso muerto convencional (trabajo 2)', 1, '10-12', 90, '1-2 min descanso'),
      _ex('fb_gym_ex6',  'Press banca inclinado con mancuernas', 3, '8-10', 60, 'Superserie'),
      _ex('fb_gym_ex7',  'Remo seal con mancuernas', 3, '8-10', 60, 'Superserie'),
      _ex('fb_gym_ex8',  'Sentadilla búlgara con mancuerna', 1, 'Máx (15-20)/pierna', 0, 'FALLO'),
      _ex('fb_gym_ex9',  'Curl de bíceps de pie', 2, '12-15', 0, 'Superserie'),
      _ex('fb_gym_ex10', 'Press francés', 2, '12-15', 0, 'Superserie'),
      _ex('fb_gym_ex11', 'Curl de femoral', 1, 'Máx (15-20)', 0),
      _ex('fb_gym_ex12', 'Vuelta a la calma | Trote suave', 1, '5 min', 0),
    ]
  },

  fb_mancuernas: {
    id: 'fb_mancuernas', name: 'Full Body Mancuernas', category: 'FULL BODY', type: 'strength',
    description: '2 circuitos + Tábata final',
    muscleGroups: ['Full Body'],
    exercises: [
      _ex('fb_mc_ex1',  'Sentadilla goblet con doble pausa', 2, '40s', 20, 'Circuito 1'),
      _ex('fb_mc_ex2',  'Renegade row', 2, '40s alterno', 20, 'Circuito 1'),
      _ex('fb_mc_ex3',  'Zancadas con mancuernas', 2, '40s alternando', 20, 'Circuito 1'),
      _ex('fb_mc_ex4',  'Plank toe tap', 2, '40s', 20, 'Circuito 1'),
      _ex('fb_mc_ex5',  'Thruster con mancuernas', 2, '40s', 20, 'Circuito 2'),
      _ex('fb_mc_ex6',  'Core | Russian twist con mancuerna', 2, '40s', 20, 'Circuito 2'),
      _ex('fb_mc_ex7',  'HIIT | Lateral lunge drop (izq)', 2, '40s', 20, 'Circuito 2'),
      _ex('fb_mc_ex8',  'HIIT | Lateral lunge drop (der)', 2, '40s', 20, 'Circuito 2'),
      _ex('fb_mc_ex9',  'Core | Zombie sit ups', 4, '20s', 10, 'Tábata final'),
      _ex('fb_mc_ex10', 'HIIT | Pulse jump squats', 4, '20s', 10, 'Tábata final'),
    ]
  },

  /* ══════════════ POR PARTES ══════════════ */

  pp_dominada_1: {
    id: 'pp_dominada_1', name: '1 Dominada', category: 'POR PARTES', type: 'strength',
    description: 'Progresión completa para tu primera dominada',
    muscleGroups: ['Espalda', 'Bíceps'],
    exercises: [
      _ex('pp_dom1_ex1',  'Movilidad | Prone snow angels', 2, '8', 10),
      _ex('pp_dom1_ex2',  'Movilidad | Shoulder CAR', 2, '8/lado', 10),
      _ex('pp_dom1_ex3',  'Movilidad | Supermans', 1, '12', 10),
      _ex('pp_dom1_ex4',  'Remo en TRX', 2, '10-12', 120),
      _ex('pp_dom1_ex5',  'Australian pull-ups', 3, '2-4/5-7/8-10', 90, 'Pirámide ascendente'),
      _ex('pp_dom1_ex6',  'Remo en T', 2, '6-8/10-15', 60),
      _ex('pp_dom1_ex7',  'Gorilla row', 3, '8-12', 60),
      _ex('pp_dom1_ex8',  'Dominadas con gomas', 1, 'Máximas', 0, 'Al fallo'),
      _ex('pp_dom1_ex9',  'Estiramiento | Espalda', 2, '10', 10),
      _ex('pp_dom1_ex10', 'Estiramiento | Hombros', 1, '12', 10),
    ]
  },

  pp_flexion_1: {
    id: 'pp_flexion_1', name: '1 Flexión', category: 'POR PARTES', type: 'strength',
    description: 'Tu primera flexión ya la tienes y no lo sabías',
    muscleGroups: ['Pecho', 'Tríceps', 'Hombros'],
    exercises: [
      _ex('pp_flx1_ex1',  'Movilidad | Shoulder CAR', 2, '10', 30),
      _ex('pp_flx1_ex2',  'Movilidad | Cat camel', 2, '10', 30),
      _ex('pp_flx1_ex3',  'Core | Deadbugs', 2, '12 (6/lado)', 30),
      _ex('pp_flx1_ex4',  'Progresión | Flexiones', 1, '2', 120),
      _ex('pp_flx1_ex5',  'Press de pecho con resistencia tumbada', 2, '10', 60),
      _ex('pp_flx1_ex6',  'Press de hombro con resistencia', 2, '10', 60),
      _ex('pp_flx1_ex7',  'Extensión de tríceps con resistencia', 2, '12', 60),
      _ex('pp_flx1_ex8',  'Elevaciones laterales con resistencia', 1, '8/lado', 60),
      _ex('pp_flx1_ex9',  'Flexiones', 2, 'Máximas', 180),
      _ex('pp_flx1_ex10', 'Estiramiento | Hombros con rotación', 1, '10', 30),
      _ex('pp_flx1_ex11', 'Estiramiento | Espalda', 1, '10', 30),
    ]
  },

  pp_dominada_2: {
    id: 'pp_dominada_2', name: '1 Dominada 2.0', category: 'POR PARTES', type: 'strength',
    description: 'Tu primera dominada ya está aquí',
    muscleGroups: ['Espalda', 'Bíceps'],
    exercises: [
      _ex('pp_dom2_ex1',  'Movilidad | Cat camel', 2, '8', 15),
      _ex('pp_dom2_ex2',  'Movilidad | Prone snow angels', 2, '10', 15),
      _ex('pp_dom2_ex3',  'Movilidad | Rotación de columna en T', 2, '10', 15),
      _ex('pp_dom2_ex4',  'Core | Deadbugs', 2, '6/lado', 15),
      _ex('pp_dom2_ex5',  'Dominadas negativas', 1, '5', 180),
      _ex('pp_dom2_ex6',  'Remo con barra a 90°', 2, '6-8', 90),
      _ex('pp_dom2_ex7',  'Remo en T', 3, '8/10/12', 60, 'Pirámide descendente'),
      _ex('pp_dom2_ex8',  'Remo unilateral con mancuernas', 2, '10-12', 30),
      _ex('pp_dom2_ex9',  'Facepull en polea', 3, '10-15', 0, 'Al fallo'),
      _ex('pp_dom2_ex10', 'Dominadas con gomas', 2, '4-6/MAX', 60),
      _ex('pp_dom2_ex11', 'Estiramiento | Espalda en cajón', 1, '10', 15),
      _ex('pp_dom2_ex12', 'Estiramiento | Rodilla al pecho', 1, '10', 15),
    ]
  },

  pp_abs: {
    id: 'pp_abs', name: 'Abdominales', category: 'POR PARTES', type: 'strength',
    description: 'Solo 30 min — dale fuego a tus abs',
    muscleGroups: ['Core'],
    exercises: [
      _ex('pp_abs_ex1', 'Movilidad | Rotación de columna en cuadrupedia', 1, '10', 0),
      _ex('pp_abs_ex2', "Movilidad | WGS (World's Greatest Stretch)", 1, '10', 0),
      _ex('pp_abs_ex3', 'Movilidad | Shoulder CAR', 1, '10', 0),
      _ex('pp_abs_ex4', 'Core | Crunch', 3, '30s', 15),
      _ex('pp_abs_ex5', 'Core | Deadbugs', 3, '30s', 15),
      _ex('pp_abs_ex6', 'Core | Knee to toe taps', 3, '30s', 15),
      _ex('pp_abs_ex7', 'Core | Jumping jacks plank', 3, '30s', 15),
      _ex('pp_abs_ex8', 'Core | Plancha con manos distanciadas', 3, '30s', 15),
      _ex('pp_abs_ex9', 'Estiramiento | Rodilla al pecho', 1, '12', 0),
    ]
  },

  pp_glute_burner: {
    id: 'pp_glute_burner', name: 'Glute Burner', category: 'POR PARTES', type: 'strength',
    description: 'Pirámide ascendente — sin descanso',
    muscleGroups: ['Glúteos', 'Piernas'],
    exercises: [
      _ex('pp_gb_ex1', 'Clamshells', 3, '10/20/30', 0, 'Pirámide ascendente'),
      _ex('pp_gb_ex2', 'Sentadilla sin peso', 3, '10/20/30', 0, 'Pirámide ascendente'),
      _ex('pp_gb_ex3', 'Hip thrust unilateral con resistencia', 3, '10/20/30 por lado', 0, 'Pirámide ascendente'),
    ]
  },

  pp_gluteo_top: {
    id: 'pp_gluteo_top', name: 'Glúteo Top', category: 'POR PARTES', type: 'strength',
    description: 'Explosive Booty Day',
    muscleGroups: ['Glúteos', 'Piernas'],
    exercises: [
      _ex('pp_gt_ex1',  'Movilidad | Rotación interna cadera 90-90', 2, '8/lado', 15),
      _ex('pp_gt_ex2',  'Movilidad | Hip CAR', 2, '10', 15),
      _ex('pp_gt_ex3',  'Movilidad | Flexión de tobillo en sedestación', 1, '6/lado', 15),
      _ex('pp_gt_ex4',  'Movilidad | Patada de glúteo de lado a lado', 1, '8/lado', 15),
      _ex('pp_gt_ex5',  'Sentadilla barra alta (aproximación)', 3, '8/6/4', 180, 'Pirámide descendente'),
      _ex('pp_gt_ex6',  'Sentadilla barra alta', 2, '4-8/10-12', 90, 'Parada 1s abajo'),
      _ex('pp_gt_ex7',  'Hip Thrust', 3, '8-10/12-15/AMRAP', 0, 'Última al fallo'),
      _ex('pp_gt_ex8',  'Sentadilla búlgara en multipower', 3, '6-8/10-12', 45, 'Parada 2s abajo'),
      _ex('pp_gt_ex9',  'Hiperextensión con disco', 2, '10-15/15-17', 0),
      _ex('pp_gt_ex10', 'Curl de femoral', 2, '10-12/12-15', 0, '2s excéntrica — última al fallo'),
      _ex('pp_gt_ex11', 'Abducción en polea', 3, '8-10/12-15/Máx', 0, '2s isométrica'),
      _ex('pp_gt_ex12', 'Cardio LISS', 1, '15 min', 0),
    ]
  },

  pp_gluteos_casa: {
    id: 'pp_gluteos_casa', name: 'Glúteos en Casa', category: 'POR PARTES', type: 'strength',
    description: 'Always is glutes time',
    muscleGroups: ['Glúteos', 'Piernas'],
    exercises: [
      _ex('pp_gc_ex1',  'Movilidad | Bisagra de cadera', 2, '10', 0),
      _ex('pp_gc_ex2',  'Movilidad | Bridge march', 2, '10', 0),
      _ex('pp_gc_ex3',  'Movilidad | Rotación interna cadera 90-90', 2, '10', 0),
      _ex('pp_gc_ex4',  'Peso muerto + sentadilla con kettlebell', 3, '6-8/10-12', 90),
      _ex('pp_gc_ex5',  'Hip thrust con mancuerna', 3, '10-15', 60),
      _ex('pp_gc_ex6',  'Sentadilla búlgara con peso', 3, '8-10/12-15', 30),
      _ex('pp_gc_ex7',  'Abducción de cadera con resistencia sentada', 3, '15-20', 0),
      _ex('pp_gc_ex8',  'Curtsy lunges con peso', 3, '10-15', 0),
      _ex('pp_gc_ex9',  'Clamshell con gomas', 2, '20/30', 0),
      _ex('pp_gc_ex10', 'Vuelta a la calma | Trote suave', 1, '5 min', 0),
      _ex('pp_gc_ex11', 'Estiramiento | Glúteo medio', 1, '10', 0),
      _ex('pp_gc_ex12', 'Estiramiento | Piramidal', 1, '10', 0),
    ]
  },

  pp_gluteos_power: {
    id: 'pp_gluteos_power', name: 'Glúteos Power', category: 'POR PARTES', type: 'strength',
    description: 'Día de glúteo, día de misa',
    muscleGroups: ['Glúteos', 'Piernas'],
    exercises: [
      _ex('pp_gp_ex1', 'Abducción de cadera en máquina', 2, '10', 90),
      _ex('pp_gp_ex2', 'Peso muerto rumano (aproximación)', 3, '8/6/4', 240, 'Pirámide descendente'),
      _ex('pp_gp_ex3', 'Peso muerto rumano', 2, '4-6/8-10', 60),
      _ex('pp_gp_ex4', 'Sentadilla búlgara con mancuerna', 3, '6-8/10-15', 60),
      _ex('pp_gp_ex5', 'Hip Thrust 1/2 ROM', 2, '8-12', 0),
      _ex('pp_gp_ex6', 'Prensa unilateral', 2, '10-12', 60),
      _ex('pp_gp_ex7', 'Curl de femoral', 2, '12-15', 0, 'Al fallo'),
      _ex('pp_gp_ex8', 'Patada de glúteo en polea', 2, '12-15', 0, 'Al fallo'),
      _ex('pp_gp_ex9', 'Cardio LISS', 1, '15 min', 0, '100-120 ppm'),
    ]
  },

  pp_gluteos_piernas: {
    id: 'pp_gluteos_piernas', name: 'Glúteos y Piernas Express Casa', category: 'POR PARTES', type: 'strength',
    description: 'Solo 30 min de tu día',
    muscleGroups: ['Glúteos', 'Piernas'],
    exercises: [
      _ex('pp_gpi_ex1', 'Movilidad | Bisagra de cadera', 1, '8', 15),
      _ex('pp_gpi_ex2', 'Movilidad | Deep squat prayer opener', 1, '10 (5/lado)', 15),
      _ex('pp_gpi_ex3', 'Abducción de cadera con resistencia sentada', 3, '30s', 10),
      _ex('pp_gpi_ex4', 'Sentadilla isométrica', 3, '30s', 10),
      _ex('pp_gpi_ex5', 'Peso muerto + sentadilla con kettlebell', 3, '30s', 10),
      _ex('pp_gpi_ex6', 'HIIT | Lunge drop', 3, '30s', 10),
      _ex('pp_gpi_ex7', 'Hip thrust con resistencia', 3, '30s', 10),
      _ex('pp_gpi_ex8', 'Vuelta a la calma | Trote suave', 1, '2-3 min', 0),
      _ex('pp_gpi_ex9', 'Estiramiento | Piramidal', 1, '5', 10),
    ]
  },

  pp_hombros_gym: {
    id: 'pp_hombros_gym', name: 'Hombros en Gym', category: 'POR PARTES', type: 'strength',
    description: 'Día de hombros',
    muscleGroups: ['Hombros'],
    exercises: [
      _ex('pp_hg_ex1',  'Movilidad | Cat camel', 2, '10', 15),
      _ex('pp_hg_ex2',  'Movilidad | Prone snow angels', 2, '10', 15),
      _ex('pp_hg_ex3',  'Movilidad | Shoulder CAR', 2, '10', 15),
      _ex('pp_hg_ex4',  'Movilidad | Kettlebell halos', 1, '12', 15),
      _ex('pp_hg_ex5',  'Press militar con barra (aproximación)', 2, '3', 180),
      _ex('pp_hg_ex6',  'Press militar con barra', 2, '4-6/8-10', 120),
      _ex('pp_hg_ex7',  'Elevaciones laterales con apoyo en banco', 3, '8-10/12-15/12-15', 0, 'Dropset'),
      _ex('pp_hg_ex8',  'Facepull en polea', 3, '10-12/12-15/12-15', 60, 'Última al fallo'),
      _ex('pp_hg_ex9',  'Elevaciones frontales con mancuernas', 2, '10', 60),
      _ex('pp_hg_ex10', 'Deltoides posterior en máquina', 2, '10-15', 0, 'Última al fallo'),
      _ex('pp_hg_ex11', 'Elevaciones laterales en polea', 2, '12-15', 0, 'Última al fallo'),
      _ex('pp_hg_ex12', 'Cardio LISS', 1, '5-10 min', 0, '100-120 ppm'),
    ]
  },

  pp_sentadilla: {
    id: 'pp_sentadilla', name: 'Mejora la Sentadilla', category: 'POR PARTES', type: 'strength',
    description: 'Squat day!',
    muscleGroups: ['Cuádriceps', 'Glúteos'],
    exercises: [
      _ex('pp_st_ex1',  'Movilidad | Flexión de tobillo con peso', 2, '8/lado', 15),
      _ex('pp_st_ex2',  'Movilidad | Frog Rolls', 2, '10', 15),
      _ex('pp_st_ex3',  'Movilidad | Kettlebell leg lift over', 2, '6/lado', 15),
      _ex('pp_st_ex4',  'Movilidad | Rotación interna cadera 90-90', 1, '10', 15),
      _ex('pp_st_ex5',  'Movilidad | Bisagra de cadera', 2, '10', 15),
      _ex('pp_st_ex6',  'Extensión del dedo gordo del pie', 1, '8/pie', 15),
      _ex('pp_st_ex7',  'Sentadilla barra alta (aproximación)', 3, '8/6/4', 240),
      _ex('pp_st_ex8',  'Sentadilla barra alta', 3, '4-6/6-8/10-12', 120),
      _ex('pp_st_ex9',  'Extensión de cuádriceps', 2, '10-12/12-15', 60),
      _ex('pp_st_ex10', 'Curtsy lunges con mancuerna', 2, '10/12 por pierna', 60),
      _ex('pp_st_ex11', 'Curl de femoral con fitball', 2, '10-15', 60),
      _ex('pp_st_ex12', 'Estiramiento | Aductores (Mariposa)', 1, '12/lado', 15),
      _ex('pp_st_ex13', 'Estiramiento | Piramidal sentada', 1, '10/lado', 15),
    ]
  },

  pp_piernas_gym: {
    id: 'pp_piernas_gym', name: 'Piernas Gym', category: 'POR PARTES', type: 'strength',
    description: 'Leg day',
    muscleGroups: ['Cuádriceps', 'Glúteos'],
    exercises: [
      _ex('pp_pg_ex1', 'HIIT | Spider lunges', 1, '10', 60),
      _ex('pp_pg_ex2', 'Movilidad | Flexión de tobillo con peso', 1, '30s/pierna', 0),
      _ex('pp_pg_ex3', 'Sentadilla barra alta', 3, '8', 180),
      _ex('pp_pg_ex4', 'Sentadilla sin peso', 2, '20', 30),
      _ex('pp_pg_ex5', 'Hip Thrust', 3, '8', 120),
      _ex('pp_pg_ex6', 'Hip Thrust 1/2 ROM', 2, '20', 0),
      _ex('pp_pg_ex7', 'Extensión de cuádriceps', 3, '10/10/Máx', 30, 'Última al fallo'),
    ]
  },

  pp_push_day: {
    id: 'pp_push_day', name: 'Push Day Gym', category: 'POR PARTES', type: 'strength',
    description: 'Pecho, hombro y tríceps',
    muscleGroups: ['Pecho', 'Hombros', 'Tríceps'],
    exercises: [
      _ex('pp_pd_ex1',  'Movilidad | Shoulder CAR', 2, '8/mano', 15),
      _ex('pp_pd_ex2',  'Movilidad | Rotación de columna en cuadrupedia', 2, '8/lado', 15),
      _ex('pp_pd_ex3',  'Movilidad | Manguitos rotadores con resistencia', 2, '10/lado', 15),
      _ex('pp_pd_ex4',  'Press banca con barra', 4, '8 / 6 / 6-8 / 8-10', 240),
      _ex('pp_pd_ex5',  'Fondos de tríceps en paralelas', 3, '4-6/8-10/11-16', 60),
      _ex('pp_pd_ex6',  'Cruce de poleas ascendente', 3, '12-15', 60, 'Última al fallo'),
      _ex('pp_pd_ex7',  'Extensiones tríceps trasnuca polea baja', 2, '12-15/Máx', 0, '2ª serie: -20% peso'),
      _ex('pp_pd_ex8',  'Extensión de tríceps unilateral en polea', 2, '10-12/12-15', 60, 'Última al fallo'),
      _ex('pp_pd_ex9',  'Cardio LISS', 1, '15 min', 0),
      _ex('pp_pd_ex10', 'Estiramiento | Hombros', 1, '10', 15),
      _ex('pp_pd_ex11', 'Estiramiento | Tríceps', 1, '10', 15),
    ]
  },

  pp_tren_superior: {
    id: 'pp_tren_superior', name: 'Tren Superior', category: 'POR PARTES', type: 'strength',
    description: '¿Lunes? ¡Entrena!',
    muscleGroups: ['Pecho', 'Espalda', 'Hombros', 'Brazos'],
    exercises: [
      _ex('pp_ts_ex1',  'Movilidad | Cat camel', 2, '10', 10),
      _ex('pp_ts_ex2',  'Movilidad | Prone snow angels', 2, '10', 10),
      _ex('pp_ts_ex3',  'Movilidad | Rotación de hombro de rodillas', 1, '6/lado', 10),
      _ex('pp_ts_ex4',  'Movilidad | Cervicales', 1, '12', 10),
      _ex('pp_ts_ex5',  'Press banca inclinado con mancuernas', 3, '8/8/10', 120),
      _ex('pp_ts_ex6',  'Remo con barra a 90°', 2, '4-6/8-10', 120),
      _ex('pp_ts_ex7',  'Press militar en máquina', 3, '10-12/10-12/12-15', 60, 'Última al fallo'),
      _ex('pp_ts_ex8',  'Australian pull-ups', 2, '7-9/Máx', 60, 'Última al fallo'),
      _ex('pp_ts_ex9',  'Remo gironda en polea', 2, '10-12/12-15', 0, 'Última al fallo'),
      _ex('pp_ts_ex10', 'Extensión de tríceps unilateral en polea', 2, '10-15', 0, 'Al fallo'),
      _ex('pp_ts_ex11', 'Curl de bíceps en banco inclinado', 2, '10-15', 0, 'Al fallo'),
      _ex('pp_ts_ex12', 'Elevaciones laterales en polea', 2, '8-10/12-15', 0, 'Última al fallo'),
      _ex('pp_ts_ex13', 'Cardio LISS', 1, '15 min', 0),
    ]
  },

  /* ══════════════ CALISTENIA ══════════════ */

  calistenia_parque: {
    id: 'calistenia_parque', name: 'Calistenia en el Parque', category: 'CALISTENIA', type: 'strength',
    description: 'Día de barras',
    muscleGroups: ['Full Body', 'Calistenia'],
    exercises: [
      _ex('cal_pq_ex1',  'Movilidad | Shoulder CAR', 2, '12/brazo', 30),
      _ex('cal_pq_ex2',  'Movilidad | Cat camel', 2, '10', 30),
      _ex('cal_pq_ex3',  'Movilidad | Movimientos escapulares', 2, '10', 30),
      _ex('cal_pq_ex4',  "Movilidad | WGS (World's Greatest Stretch)", 1, '10', 30),
      _ex('cal_pq_ex5',  'Dominadas negativas', 3, '5s bajada', 90),
      _ex('cal_pq_ex6',  'Remo en TRX', 3, '12', 60),
      _ex('cal_pq_ex7',  'Flexiones con elevación (aproximación)', 2, '8', 90),
      _ex('cal_pq_ex8',  'Flexiones con elevación (trabajo)', 2, '10-15', 90),
      _ex('cal_pq_ex9',  'Sentadilla con rebote (aproximación)', 1, '10', 60),
      _ex('cal_pq_ex10', 'Sentadilla con rebote (trabajo)', 3, '15', 60),
      _ex('cal_pq_ex11', 'Fondos de tríceps en banco (aproximación)', 1, '8', 60),
      _ex('cal_pq_ex12', 'Fondos de tríceps en banco (trabajo)', 2, '10', 60),
      _ex('cal_pq_ex13', 'Dominadas con gomas (aproximación)', 1, 'Máximas', 120),
      _ex('cal_pq_ex14', 'Dominadas con gomas (trabajo)', 3, '4-8 sin fallo', 90),
      _ex('cal_pq_ex15', 'Estiramiento | Espalda', 1, '20s', 0),
      _ex('cal_pq_ex16', 'Estiramiento | Piramidal sentada', 1, '20s', 0),
    ]
  },

  /* ══════════════ KETTLEBELL ══════════════ */

  kettlebell_express: {
    id: 'kettlebell_express', name: 'Entrenamiento con Kettlebell', category: 'KETTLEBELL', type: 'strength',
    description: 'Sábado en casa — 3 rondas 40s / 20s',
    muscleGroups: ['Full Body', 'Kettlebell'],
    exercises: [
      _ex('kb_ex1',  'Movilidad | Kettlebell leg lift over', 2, '8/lado', 0),
      _ex('kb_ex2',  'Movilidad | Cervicales', 2, '8', 0),
      _ex('kb_ex3',  'Movilidad | Aductores con kettlebell', 2, '8/pierna', 0),
      _ex('kb_ex4',  'Movilidad | Kettlebell halos', 2, '6/lado', 0),
      _ex('kb_ex5',  'Rack kettlebell squat', 3, '40s', 20),
      _ex('kb_ex6',  'Gorilla row', 3, '40s (20s/mano)', 20),
      _ex('kb_ex7',  'Kettlebell swing', 1, '40s', 20),
      _ex('kb_ex8',  'Kettlebell clean and press', 3, '40s', 20),
      _ex('kb_ex9',  'Core | Pass through con kettlebell', 3, '40s', 20),
      _ex('kb_ex10', 'Vuelta a la calma | Trote suave', 1, '3-5 min', 0),
      _ex('kb_ex11', 'Estiramiento | Cadera (Frog)', 2, '8', 0),
      _ex('kb_ex12', 'Estiramiento | Piramidal', 2, '8', 0),
      _ex('kb_ex13', 'Estiramientos circulares', 2, '8', 0),
    ]
  },

  /* ══════════════ MOVILIDAD ══════════════ */

  mov_cadera: {
    id: 'mov_cadera', name: 'Dolor de Cadera', category: 'MOVILIDAD', type: 'strength',
    description: 'Reduce tu dolor de cadera',
    muscleGroups: ['Movilidad', 'Cadera'],
    exercises: [
      _ex('mov_cad_ex1', 'Estiramientos | Sitting reach', 2, '10/lado', 30),
      _ex('mov_cad_ex2', 'Movilidad | Rotación interna cadera 90-90', 3, '10/lado', 30),
      _ex('mov_cad_ex3', 'Movilidad | Frog Rolls', 3, '10', 30),
      _ex('mov_cad_ex4', "Movilidad | WGS (World's Greatest Stretch)", 3, '10/lado', 30),
      _ex('mov_cad_ex5', 'Estiramiento | Piramidal sentada', 2, '8/lado', 30),
      _ex('mov_cad_ex6', 'Estiramiento | Media mariposa en torsión', 2, '8/lado', 30),
    ]
  },

  mov_vacaciones: {
    id: 'mov_vacaciones', name: 'Movilidad de Vacaciones', category: 'MOVILIDAD', type: 'strength',
    description: 'No te oxides de vacaciones',
    muscleGroups: ['Movilidad'],
    exercises: [
      _ex('mov_vac_ex1', 'Movilidad | Rotación de columna en T', 2, '8/lado', 15),
      _ex('mov_vac_ex2', 'Estiramiento | Espalda en cajón', 1, '12', 15),
      _ex('mov_vac_ex3', 'Estiramiento | Piramidal sentada', 2, '10/lado', 15),
      _ex('mov_vac_ex4', 'Movilidad | Leg Rockback', 1, '8/lado', 15),
      _ex('mov_vac_ex5', 'Estiramientos | Unilateral sitting reach', 1, '12/lado + 5s', 15),
    ]
  },

  mov_oficinistas: {
    id: 'mov_oficinistas', name: 'Movilidad para Oficinistas', category: 'MOVILIDAD', type: 'strength',
    description: 'Adiós al dolor de espalda y cuello',
    muscleGroups: ['Movilidad', 'Espalda'],
    exercises: [
      _ex('mov_of_ex1', 'Movilidad | Cat camel', 3, '10', 10),
      _ex('mov_of_ex2', 'Estiramiento | Espalda en cajón', 3, '8', 10),
      _ex('mov_of_ex3', 'Movilidad | Cervicales', 3, '12', 10),
      _ex('mov_of_ex4', 'Movilidad | Rotación de columna en T', 3, '8/lado', 10),
      _ex('mov_of_ex5', 'Movilidad | Movimientos escapulares', 3, '12', 10),
    ]
  },

  mov_casa_1: {
    id: 'mov_casa_1', name: 'Movilidad y Estiramientos en Casa 1', category: 'MOVILIDAD', type: 'strength',
    description: 'Día de relax en casa',
    muscleGroups: ['Movilidad', 'Full Body'],
    exercises: [
      _ex('mov_c1_ex1',  'Foam roller | Glúteo medio', 2, '15', 30),
      _ex('mov_c1_ex2',  'Foam roller | Cuádriceps', 2, '15', 30),
      _ex('mov_c1_ex3',  'Foam roller | Femoral', 1, '15', 30),
      _ex('mov_c1_ex4',  "Movilidad | WGS (World's Greatest Stretch)", 3, '10', 30),
      _ex('mov_c1_ex5',  'Movilidad | Cervicales', 3, '10', 30),
      _ex('mov_c1_ex6',  'Movilidad | Cat camel', 3, '10', 30),
      _ex('mov_c1_ex7',  'Movilidad | Flexión de tobillo de rodillas', 3, '10', 30),
      _ex('mov_c1_ex8',  'Movilidad | Rotación de columna en T', 3, '10 (5/lado)', 30),
      _ex('mov_c1_ex9',  'Movilidad | Standing reach down fwd-back', 3, '10', 30),
      _ex('mov_c1_ex10', 'Estiramientos circulares', 2, '15', 30),
      _ex('mov_c1_ex11', 'Estiramiento | Rodilla al pecho', 2, '12 (6/lado)', 30),
      _ex('mov_c1_ex12', 'Estiramientos | Unilateral sitting reach', 2, '6/lado', 30),
    ]
  },

  mov_casa_2: {
    id: 'mov_casa_2', name: 'Movilidad y Estiramientos en Casa 2', category: 'MOVILIDAD', type: 'strength',
    description: 'Día de relax II',
    muscleGroups: ['Movilidad', 'Full Body'],
    exercises: [
      _ex('mov_c2_ex1',  'Foam roller | Aductor', 2, '8/lado', 30),
      _ex('mov_c2_ex2',  'Foam roller | Gemelos', 2, '8/lado', 30),
      _ex('mov_c2_ex3',  'Foam roller | Glúteo medio', 2, '10', 30),
      _ex('mov_c2_ex4',  'Movilidad | Prone snow angels', 2, '10', 30),
      _ex('mov_c2_ex5',  'Movilidad | Hip CAR', 2, '10', 30),
      _ex('mov_c2_ex6',  'Movilidad | Shoulder CAR', 2, '10', 30),
      _ex('mov_c2_ex7',  'Movilidad | Runners lunge with reach', 2, '10', 30),
      _ex('mov_c2_ex8',  'Estiramientos | Cadera (Pigeon)', 1, '12', 15),
      _ex('mov_c2_ex9',  'Estiramiento | Espalda en cajón', 1, '12', 15),
      _ex('mov_c2_ex10', 'Estiramientos circulares', 1, '12', 15),
      _ex('mov_c2_ex11', 'Estiramiento | Split unilateral', 1, '6/lado', 15),
      _ex('mov_c2_ex12', 'Estiramiento | Upward dog', 1, '10', 15),
    ]
  },

  mov_espalda: {
    id: 'mov_espalda', name: 'Reduce tu Dolor de Espalda', category: 'MOVILIDAD', type: 'strength',
    description: 'Movilidad y estiramientos para la espalda',
    muscleGroups: ['Movilidad', 'Espalda'],
    exercises: [
      _ex('mov_esp_ex1', 'Estiramiento | Espalda', 2, '10', 15),
      _ex('mov_esp_ex2', 'Movilidad | Cervicales', 2, '8', 15),
      _ex('mov_esp_ex3', 'Estiramiento | Rodilla al pecho', 2, '10/pierna', 15),
      _ex('mov_esp_ex4', "Movilidad | WGS (World's Greatest Stretch)", 2, '10/lado', 15),
      _ex('mov_esp_ex5', 'Estiramientos circulares', 2, '6/lado', 15),
    ]
  },

  /* ══════════════ ESTIRAMIENTOS ══════════════ */

  estiramientos: {
    id: 'estiramientos', name: 'Estiramientos', category: 'ESTIRAMIENTOS', type: 'strength',
    description: 'Mejora tu salud estando de vacaciones',
    muscleGroups: ['Estiramientos', 'Movilidad'],
    exercises: [
      _ex('est_ex1', 'Movilidad | Bisagra de cadera', 3, '10', 15),
      _ex('est_ex2', 'Movilidad | Flexión de tobillo de rodillas', 3, '10/pierna', 15),
      _ex('est_ex3', 'Estiramiento | Hombros con rotación', 3, '12/mano', 15),
      _ex('est_ex4', 'Movilidad | Fire Hydrants', 3, '10/pierna', 15),
      _ex('est_ex5', 'Movilidad | Bridge march', 3, '12/pierna', 15),
      _ex('est_ex6', 'Movilidad | Scorpions', 3, '7/pierna', 15),
    ]
  },
};

function getExpressByCategory() {
  const grouped = {};
  EXPRESS_CATEGORIES.forEach(cat => { grouped[cat.id] = []; });
  Object.values(EXPRESS_WORKOUTS).forEach(w => {
    if (grouped[w.category]) grouped[w.category].push(w);
  });
  return grouped;
}

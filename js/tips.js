/* ============================================
   IZA WORKOUT — Tips (Guía de entrenamiento)
   Vista #tips: consejos de programación, técnica, femoral,
   adherencia y nutrición. Acordeones por sección.
   Fuente: rutina "Más Fuertes" (Kiwi / Saiyan Workout).
   ============================================ */

const TIPS_SECTIONS = [
  {
    id: 'programacion',
    emoji: '🧠',
    name: 'Programación',
    sub: 'Aproximación, back-off, fallo, descansos, volumen',
    tips: [
      {
        title: 'Series de aproximación',
        body: 'Son el calentamiento específico: el mismo ejercicio que vas a hacer, pero con menos peso. Calientan el músculo, repasan el patrón de movimiento y te dan una estimación del peso que podrás mover.',
        points: [
          'Solo en el primer multiarticular de la sesión (peso muerto, sentadilla, press banca).',
          'Máximo 1 o 2 series de unas 8 repeticiones. Que cueste un poco, pero lejos del fallo.',
          'Si el siguiente ejercicio usa el mismo patrón (ej. hip thrust tras peso muerto), ya estás caliente: pasa directa a las efectivas.'
        ]
      },
      {
        title: 'Back-off sets (bajar un 10%)',
        body: 'Tras la serie efectiva más pesada, baja el peso un 10% y haz 2 series más de 6 repeticiones. Aprovechas la potenciación post-activación: el sistema nervioso ya ha "visto" el peso alto y el siguiente le parece más fácil.',
        points: [
          'Ejemplo: 80 kg en peso muerto → 70-72 kg para las dos siguientes.',
          'No hace falta ser exacta con los kilos. Usa microcargas (1,25 kg) sin vergüenza en press militar.'
        ]
      },
      {
        title: '¿Cuándo llegar al fallo?',
        body: 'Fallo muscular es no poder hacer ni una repetición más. No todos los ejercicios lo admiten.',
        points: [
          'Multiarticulares (peso muerto, sentadilla libre): NO al fallo. Fatigan a nivel global y es peligroso. Objetivo: todas las repeticiones limpias.',
          'Aislamientos (abducción, elevaciones) y máquinas seguras (prensa con topes): sí, al fallo o muy cerca.',
          'Señal de fallo: las últimas 1-2 reps son claramente más lentas que las primeras. Grábate y compara la velocidad.'
        ]
      },
      {
        title: 'Descansos',
        body: 'Descansa lo necesario para afrontar la siguiente serie exprimiendo cada repetición.',
        points: [
          'Entre series: de 2 a 5 minutos. En peso muerto y sentadilla puede llegar a 5.',
          'Ejercicios unilaterales: también 1-2 minutos entre pierna y pierna.',
          'Plancha: 30 s de trabajo, 30 s de descanso.'
        ]
      },
      {
        title: 'Volumen controlado, no basura',
        body: 'El volumen es el número de series semanales por grupo muscular. Cada músculo responde a una cantidad concreta; pasarte solo genera fatiga sin estímulo real.',
        points: [
          'Sesiones de 4-6 ejercicios dando el máximo en cada uno son suficientes.',
          'Si terminas y "aún te sientes fresca", no añadas series. Eso es volumen basura.',
          'Rutina de 4 días (2 pierna + 2 torso) deja 3 días libres para el trabajo o la vida.'
        ]
      },
      {
        title: 'Cómo sustituir un ejercicio',
        body: 'Lo ideal es mantener el mismo ejercicio semana a semana para progresar. Si un día toca cambiar (falta de tiempo, máquina ocupada), cumple dos criterios:',
        points: [
          'Mismo patrón de movimiento (ej. bisagra de cadera → bisagra de cadera).',
          'Mismo músculo protagonista (ej. peso muerto rumano → hiperextensión con mancuerna, ambos glúteo/femoral).'
        ]
      },
      {
        title: 'Series cluster para dominadas',
        body: 'Fija un total de repeticiones (ej. 10) y divídelo en bloques con 20-30 s de descanso entre ellos: 2 reps, descanso, 2 reps... hasta completar.',
        points: [
          'Objetivo: cada semana menos bloques y más reps por bloque, hasta hacer las 10 seguidas.',
          'Si aún no haces dominadas libres: negativas, con goma o máquina asistida.'
        ]
      },
      {
        title: 'Progresión en RIR (remo unilateral)',
        body: 'Ejemplo de 3 series con el mismo peso subiendo el esfuerzo: 8 reps dejando 3 en recámara, 10 reps con menos margen y 12 reps casi al fallo. Si no llegas, baja un poco la mancuerna en la última.'
      }
    ]
  },
  {
    id: 'tecnica',
    emoji: '🎯',
    name: 'Técnica y set-up',
    sub: 'Peso muerto, hip thrust, sentadilla, press, remo, hombro',
    tips: [
      {
        title: 'Memoriza tu set-up',
        body: 'El set-up es tu posición inicial. Repítela igual en cada entreno y mejorarás la técnica poco a poco. Apunta en las notas del ejercicio los ajustes de cada máquina (asiento, pad, altura) para no perder tiempo la próxima vez.'
      },
      {
        title: 'Peso muerto convencional',
        points: [
          'Coloca la barra en los soportes justo por debajo de las rodillas. Sacarla del suelo obliga a curvar más la espalda.',
          'Agarre prono un poco más ancho que las caderas. Pies al ancho de caderas, punteras algo abiertas.',
          'Piensa en "dar con el glúteo a la pared de atrás", no en subir y bajar la barra. Es una bisagra de cadera.',
          'Barra pegada a las piernas, core contraído, hombros atrás, dorsales activos, cuello neutro.',
          'Abajo el glúteo está en máximo estiramiento: sube todo el peso con él.',
          'Straps cuando el agarre te limita. La dirección de la cinta debe coincidir con la del pulgar.',
          'Barra larga = 20 kg, barra corta = 15 kg. Cuéntalos en tu total.'
        ]
      },
      {
        title: 'Hip thrust',
        points: [
          'Colchoneta o esterilla doblada sobre la pelvis.',
          'Apoya la zona media-alta de la espalda en el banco.',
          'Distancia de pies: junta las piernas, dobla una a la altura de la rodilla de la otra, luego la otra, abre a ancho de caderas y punteras algo abiertas.',
          'Arriba haz una ligera retroversión pélvica (gesto de "tocar el ombligo con el glúteo"). Nada exagerado, es el candado del ejercicio.',
          'Última serie "1 + 1/2": una rep completa + media rep desde abajo = 1 repetición. Baja el peso un 20-30% y haz 8.'
        ]
      },
      {
        title: 'Sentadilla búlgara',
        points: [
          'Mancuerna en la mano contralateral (la contraria a la pierna que trabaja). Así el glúteo medio estabiliza y trabaja de regalo.',
          'Strap en la mancuerna para poder cargar bien. Otro strap colgado como punto de apoyo: te deslizas, no te agarras.',
          'Disco o step bajo el pie delantero: más flexión de cadera, más glúteo.',
          'Pie trasero solo apoya el empeine para estabilizar. No empuja.'
        ]
      },
      {
        title: 'Sentadilla libre',
        points: [
          'Barra apoyada en los trapecios, no en el cuello.',
          'Baja con la espalda neutra hasta donde tu movilidad lo permita. Evita el butt wink (redondear el lumbar abajo).',
          'Las rodillas SÍ pueden pasar la punta del pie. Es anatómico y natural.',
          'Si te sientes más segura en multipower o hack, es perfectamente válido.'
        ]
      },
      {
        title: 'Prensa unilateral',
        points: [
          'Pie lo más abajo posible en la plataforma.',
          'Glúteo y lumbar siempre pegados al respaldo. Si se despega, has bajado de más.',
          'Baja lento, para abajo, empuja apretando arriba. Sin rebote. 8 reps controladas valen más que 16 sucias.',
          'Manos quietas. Cerca del fallo porque es segura (topes).'
        ]
      },
      {
        title: 'Press militar y press banca',
        points: [
          'Militar: barra justo bajo la clavícula, manos a la anchura de hombros, muñecas neutras alineadas con el antebrazo. Al extender, mete la cabeza por debajo. Sin impulso de piernas: el cuerpo es un bloque.',
          'Banca: regla de los 4 apoyos (cabeza, espalda alta, glúteos, pies). Empuja desde los talones para transmitir fuerza. Barra a la línea del top deportivo, codos atrás.',
          'Inclinado con mancuernas: escápulas retraídas como sujetando un lápiz, mancuernas ligeramente cerradas para proteger el hombro, pausa abajo y converger arriba.',
          'Peinado alto o moño bien arriba: la cabeza también es un punto de apoyo.'
        ]
      },
      {
        title: 'Remos',
        points: [
          'Remo con barra a 90º: cadera flexionada a 90º, espalda neutra, codos atrás contrayendo el dorsal. Hombro retraído en la bajada para evitar antepulsión.',
          'Remo unilateral: el dorsal no se inserta en el codo. Si solo flexionas el codo trabajas bíceps. Traza un arco hacia el bolsillo.',
          'Gironda: agarre neutro. Codo solo hasta la línea del torso; más allá el dorsal pierde mecánica.',
          'Si un agarre bilateral ancho te incomoda, cámbialo por uno unilateral.'
        ]
      },
      {
        title: 'Elevaciones laterales',
        points: [
          'Hombros atrás. Imagina hilos desde el techo tirando de los codos: el codo dirige.',
          'Hasta que el brazo esté paralelo al suelo. Más arriba entra el trapecio.',
          'Brazo en el plano escapular (un poco por delante) con el codo algo doblado.',
          'Controla la bajada, no dejes caer el peso. Apóyate en el respaldo de un banco.',
          'En polea: soporte a altura de cadera, tobillera en la muñeca. Tensión constante en todo el recorrido. Si pesa demasiado, sube la muñequera hacia el hombro.'
        ]
      },
      {
        title: 'Patada de glúteo en polea',
        points: [
          'Polea abajo del todo. Banco con respaldo inclinado, pegado a la polea, para apoyar el cuerpo.',
          'Así amplías el rango efectivo del glúteo respecto a la patada tradicional de pie.',
          'No es el ejercicio más óptimo, pero es válido si genera adherencia y la técnica es correcta.'
        ]
      },
      {
        title: 'Core',
        points: [
          'Plancha: manos algo separadas para subir la dificultad. Añade retroversión pélvica para notar el core.',
          'Crunch en polea: polea arriba, de espaldas, enróllate como una C metiendo el ombligo y exhala al contraer.',
          'Sentir un músculo no significa trabajarlo objetivamente. Es solo mayor activación.'
        ]
      }
    ]
  },
  {
    id: 'femoral',
    emoji: '🦵',
    name: 'Femoral completo',
    sub: 'La regla de las dos articulaciones',
    tips: [
      {
        title: 'Los isquios son biarticulares',
        body: 'Cruzan dos articulaciones: rodilla y cadera. Actúan como flexores de rodilla y extensores de cadera. Para trabajarlos al completo hay que entrenarlos de dos formas, dejando una articulación fija y moviendo la otra.',
        points: [
          'Rodilla móvil + cadera fija: curl femoral tumbado o sentado.',
          'Cadera móvil + rodilla fija: peso muerto, peso muerto rumano, hiperextensión.',
          'Chequeo rápido: en tu día de pierna con énfasis en femoral, ¿tienes al menos uno de cada? Si no, falta algo.'
        ]
      },
      {
        title: 'Movilidad antes de pierna',
        body: 'Con 5 minutos es suficiente y marca la diferencia en el resto del entreno: mayor rango articular, menos molestias y mejor técnica.',
        points: [
          '90/90 para la cadera.',
          'Clamshells: el objetivo es abrir la cadera.',
          'Spider lunges con pequeños rebotes para el psoas y los flexores de cadera.',
          'Torso: protracción y retracción escapular. O un combo ligero de curl + press militar.'
        ]
      }
    ]
  },
  {
    id: 'adherencia',
    emoji: '🔥',
    name: 'Constancia',
    sub: 'Cómo no fallar cuando no apetece',
    tips: [
      {
        title: 'La rutina se adapta a ti, no al revés',
        body: 'Una rutina de 4 días te deja 3 libres para colocar en los días de más trabajo. Es la principal razón por la que se cumple.'
      },
      {
        title: 'Elige el momento del día',
        points: [
          'A primera hora si eres de mañanas: luego el día siempre se complica.',
          'En el hueco de la comida, adelantando la comida a ese rato.',
          'Al final del día si es tu única opción. Lo importante es que el hueco exista.'
        ]
      },
      {
        title: 'El martes que no apetece',
        body: 'El lunes todas estamos motivadas. El martes duele todo y toca torso. Esto pasa incluso tras años entrenando.',
        points: [
          'Prepara tu outfit favorito la noche anterior. Al levantarte solo te lo pones.',
          'Ponte mona, hazte un peinado chulo. Parece una tontería, pero genera adherencia.',
          'Mantra: "no pensar, solo ejecutar". Vas, haces lo que pone en la app y ya. Siempre te sientes mejor después.'
        ]
      },
      {
        title: 'Sin vergüenza',
        body: 'Nadie te mira en el gimnasio. Es normal hacer las cosas mal al empezar, incluso con años de experiencia en un ejercicio nuevo. Lo importante es que estás ahí. "Con vergüenza ni se come ni se almuerza".'
      },
      {
        title: 'No te vas a ver masculina',
        body: 'Las mujeres tenemos unas 10 veces menos testosterona. Desarrollar masa muscular como una culturista siendo natural es prácticamente imposible. Para unos brazos firmes y hombros redondos hay que meter peso e intensidad, no 30 repeticiones ligeras.'
      },
      {
        title: 'Progreso sin prisa',
        body: 'Empieza con el peso que puedas, aunque sea poco o solo la barra. Semana a semana sube de forma consciente. La técnica siempre importa más que el peso. Ejemplo real: búlgara de 10 kg a 30 kg en unos meses de constancia.'
      }
    ]
  },
  {
    id: 'nutricion',
    emoji: '🍽️',
    name: 'Alimentación',
    sub: 'Sin esto no hay resultados',
    tips: [
      {
        title: 'El fallo más común',
        body: 'Aunque el entreno sea perfecto, la mayoría no ve resultados por una sola cosa: no comen lo suficiente para ganar masa muscular, por miedo a ganar grasa. Ese miedo es normal, pero la ganancia muscular necesita comer acorde.'
      },
      {
        title: 'Lo básico',
        points: [
          'Proteína suficiente en cada comida principal.',
          'Calorías ligeramente por encima de mantenimiento en fase de ganar músculo.',
          'Paciencia: el músculo se construye en meses, no en semanas.'
        ]
      }
    ]
  }
];

const Tips = {
  expanded: null,

  render() {
    const container = document.getElementById('page-tips');
    if (!container) return;

    const sectionsHtml = TIPS_SECTIONS.map(sec => {
      const isOpen = this.expanded === sec.id;
      const tipsHtml = isOpen ? `
        <div class="tips-list">
          ${sec.tips.map(t => this._renderTip(t)).join('')}
        </div>
      ` : '';
      return `
        <div class="express-cat tips-cat ${isOpen ? 'expanded' : ''}">
          <div class="express-cat-header" onclick="Tips.toggle('${sec.id}')">
            <div class="express-cat-icon">${sec.emoji}</div>
            <div class="express-cat-info">
              <div class="express-cat-name">${sec.name}</div>
              <div class="express-cat-meta">${sec.tips.length} tips · ${sec.sub}</div>
            </div>
            <div class="plan-card-chevron ${isOpen ? 'expanded' : ''}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
          ${tipsHtml}
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <button class="workout-back" onclick="App.navigate('home')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        Volver
      </button>

      <div class="workout-page-header">
        <h1 class="workout-day-name">💡 Tips de entrenamiento</h1>
        <div class="workout-day-info">
          <span class="text-sm text-secondary">Programación, técnica y constancia</span>
        </div>
      </div>

      <div class="tips-intro anim-fade-in">
        Apunta cada cosa en tu diario y pruébalo el próximo día. Son detalles pequeños, pero marcan la diferencia en tus resultados.
      </div>

      <div class="express-list anim-fade-in-up anim-delay-1">
        ${sectionsHtml}
      </div>
    `;
  },

  _renderTip(t) {
    const points = t.points ? `<ul class="tip-points">${t.points.map(p => `<li>${p}</li>`).join('')}</ul>` : '';
    const body = t.body ? `<p class="tip-body">${t.body}</p>` : '';
    return `
      <div class="tip-card">
        <div class="tip-title">${t.title}</div>
        ${body}
        ${points}
      </div>
    `;
  },

  toggle(id) {
    this.expanded = this.expanded === id ? null : id;
    vibrate(20);
    this.render();
  }
};

/* ============================================
   IZA WORKOUT — Tips (Guía de entrenamiento)
   Vista #tips: consejos de programación, técnica (incluye femoral),
   adherencia y nutrición. Acordeones por sección.
   Fuente: rutina "Más Fuertes" (Kiwi / Saiyan Workout).
   ============================================ */

const TIPS_SECTIONS = [
  {
    id: 'rutina_diaria',
    emoji: '🌿',
    name: 'RUTINA EQUILIBRADA',
    sub: 'Los 8 pasos para ser productiva, sana y equilibrada',
    tips: [
      {
        title: 'Paso 1 · Desayuno completo',
        body: 'Saltarte la primera comida afecta directamente a la memoria y la motivación. En mujeres se asocia además con más trastornos menstruales y ciclos irregulares. No hace falta que sea elaborado.',
        points: [
          'Combo ideal: fibra + carbohidrato + proteína. Ej. kéfir con granola casera, frutos secos y fruta.',
          'Matcha en vez de café: la teanina modula la cafeína y da energía sostenida sin pico ni bajón.',
          'Sin tiempo por la mañana: déjalo preparado la noche anterior (1 minuto) y llévatelo en la mochila.'
        ]
      },
      {
        title: 'Paso 2 · Vaciado mental',
        body: 'Vuelca en papel todas las tareas, dudas y preocupaciones que te rondan la cabeza. Externalizarlo reduce la carga mental y la fatiga de decidir: activa la corteza prefrontal y calma la amígdala. Es como vaciar la papelera del ordenador.'
      },
      {
        title: 'Paso 2 · Matriz de Eisenhower',
        body: 'Una vez volcado todo, clasifica cada tarea en cuatro cuadrantes. Esa es tu hoja de ruta del día.',
        points: [
          'Importante + urgente → hazlo hoy mismo.',
          'Importante + no urgente → agéndalo, puede esperar.',
          'Urgente + no importante → delégalo.',
          'Ni urgente ni importante → elimínalo.'
        ]
      },
      {
        title: 'Paso 3 · Movimiento por la mañana',
        body: 'El ejercicio libera endorfinas (regulan el cortisol) y BDNF, un "fertilizante" para el cerebro. Entrenas el cuerpo y preparas la mente para enfocarse y decidir mejor. "No tengo tiempo para no entrenar".',
        points: [
          'Tenlo tan automatizado que no te cuestiones si apetece.',
          'Si madrugas para trabajar: 10 minutos de movilidad bastan para despertar el cuerpo. El entreno principal, por la tarde.',
          'Ponlo en el calendario de la app con recordatorios para no fallar.'
        ]
      },
      {
        title: 'Paso 4 · Autocuidado',
        body: 'Cepillado en seco antes de la ducha para activar la circulación, ducha y crema hidratante. Parece superficial, pero las rutinas de autocuidado son lo que evita el burnout y cuida la salud mental. Si no cabe por la mañana, conviértelo en tu ritual de noche.'
      },
      {
        title: 'Paso 5 · Ordena tu espacio y tu semana',
        body: 'El entorno influye en tu concentración: despeja la mesa y deja solo lo que uses. Y en lo digital, frena para ir más rápido: dedica un día a la semana a organizar el calendario.',
        points: [
          'No dividas por categorías (trabajo, estudios...): acabas con el calendario a reventar y no cumples nada.',
          'Usa bloques por duración: tarea (<1 h), trabajo (1-2 h) y proyecto (>2 h, mucha carga mental).',
          'Máximo al día: 2 trabajos y 1 proyecto. Subestimamos siempre el tiempo (ley de Hofstadter).',
          'Cuantos menos colores y más huecos vacíos tenga tu día, mejor: los imprevistos llegan seguro.',
          'Plan de contingencia: adelanta las entregas clave unas 2 semanas para tener colchón.'
        ]
      },
      {
        title: 'Paso 5 · Cómo plantear el día',
        points: [
          'Lo más duro e importante a primera hora, cuando la batería cerebral está al 100%.',
          'Tareas específicas y realistas, nada de "avanzar en el proyecto": "escribir 5.000 palabras antes del mediodía".',
          'Cada meta cumplida da un chute de dopamina que te anima a seguir.',
          'Efecto compuesto: objetivo claro a largo plazo dividido en pequeñas metas diarias. La suma constante es lo que te lleva allí.',
          'Aprovecha los ratos muertos (trayectos, tren) para lo pequeño: puestos en fila suman horas.'
        ]
      },
      {
        title: 'Paso 6 · No dejes de aprender',
        body: 'La formación continua mantiene la flexibilidad cognitiva y la neuroplasticidad: crea redes neuronales, mejora la gestión emocional y frena el deterioro. No vale hacer scroll.',
        points: [
          'Crea tu "jardín digital": lista de temas que te interesan (arte, historia, dermatología...) y elige uno.',
          'Durante unas semanas conviértete en investigadora de ese tema: podcasts, vídeos, libros, papers.',
          'Herramientas como NotebookLM generan podcasts de tus documentos para aprender casi sin darte cuenta.'
        ]
      },
      {
        title: 'Paso 7 · Reset a mitad del día',
        body: 'Exprimir cada segundo está bien hasta que deja de estarlo: llega el burnout. Incluye momentos de reset en el día y en la semana.',
        points: [
          '15 minutos de meditación bastan para resetear un cerebro saturado (estudio 2020).',
          '15 minutos caminando por un parque atendiendo a la naturaleza, o de relajación y mindfulness, reducen el estrés y la fatiga de la tarde.',
          'Cerrar el portátil y mirar el móvil NO es reset. Necesitas distanciamiento psicológico: hablar con compañeros, dar una vuelta o no hacer nada.',
          'Deja para la tarde las tareas que menos foco mental requieren.'
        ]
      },
      {
        title: 'Paso 8 · Desconexión y turno de cierre',
        body: 'Es el paso que hace funcionar a los siete anteriores. No saber cuándo parar trae insomnio, amigas que no ves y la angustia de vivir en tu propia burbuja de disciplina. La desconexión es un proceso activo para bajar revoluciones (estudio 2025).',
        points: [
          'Límites firmes entre trabajo y vida personal.',
          'Tiempo de calidad con pareja, familia y amigas: tan beneficioso para la salud como el deporte o comer sano.',
          '"Turno de cierre": tareas fijas antes de echar la llave. Limpiar y ordenar, cambiar las luces, preparar la cena.',
          'Convierte esto en tu rutina de noche: acaba con el insomnio y te despiertas como nueva.'
        ]
      }
    ]
  },
  {
    id: 'adherencia',
    emoji: '🔥',
    name: 'CONSTANCIA',
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
    name: 'ALIMENTACIÓN',
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
      },
      {
        title: 'Hinchazón vs. distensión',
        body: 'No es lo mismo. La hinchazón es una sensación subjetiva de presión o gases. La distensión es un cambio físico real: tu cintura aumenta de verdad, y no, no es grasa acumulada de golpe.',
        points: [
          'Es normal que la circunferencia abdominal crezca a lo largo del día según comes y bebes, y vuelva al estado inicial por la mañana.',
          'La línea roja está en la inflamación de verdad: cuando la hinchazón viene con dolor, fatiga o se repite día tras día sin motivo aparente.'
        ]
      },
      {
        title: 'El eje intestino-cerebro',
        body: 'Tu intestino y tu cerebro se comunican constantemente por señales nerviosas, hormonales e inflamatorias. El estrés crónico ataca a tu microbiota (las bacterias buenas del intestino) y genera un desequilibrio que se traduce en malas digestiones, dolor y cansancio.',
        points: [
          'Ese desequilibrio también afecta a las hormonas que regulan el hambre y la saciedad: por eso cuesta tanto controlar los antojos cuando el intestino está mal.',
          'Más de la mitad de la población vive así sin saber que el origen está en su intestino.'
        ]
      },
      {
        title: 'Paso 1 · Alimenta tu microbiota con fibra',
        body: 'La fibra es el alimento favorito de tus bacterias intestinales. Crea una capa de moco que protege las paredes del intestino frente a invasores.',
        points: [
          'Fibra soluble (avena, cítricos, legumbres): forma un gel que ralentiza la digestión y da saciedad. Ideal para controlar antojos.',
          'Fibra insoluble (cereales integrales, frutos secos): aporta volumen y acelera el tránsito. Ideal si tu problema es ir al baño.',
          'Si no estás acostumbrada, meter mucha fibra de golpe da gases e hinchazón — no es motivo para dejarla, hay que introducirla bien (siguiente tip).'
        ]
      },
      {
        title: 'Cómo introducir la fibra sin hincharte',
        points: [
          'Empieza por la fibra soluble (avena): se tolera mejor y da menos gases.',
          'Prepárala bien: remoja y cocina bien las legumbres, hidrata las semillas (la chía necesita mínimo 8 horas) y cuece los cereales un poco más de lo normal.',
          'Progresión gradual: empieza con 1-2 cucharadas de legumbres e introduce vegetales de distintos colores poco a poco.',
          'Combina prebióticos (la fibra, el alimento de las bacterias) con probióticos (microorganismos vivos que repueblan tu flora): kéfir, chucrut, kimchi, kombucha.'
        ]
      },
      {
        title: 'Paso 2 · Hidrátate bien',
        body: 'Si no bebes suficiente agua, la capa de moco protectora del colon se debilita, las bacterias tocan el tejido intestinal y se genera inflamación. Además, ralentiza el tránsito y favorece el estreñimiento.',
        points: [
          'Empieza el día con 1-2 vasos de agua y lleva una botella encima todo el día.'
        ]
      },
      {
        title: 'Paso 3 · Deja de autodiagnosticarte',
        body: 'Solo el 3,6% de quienes creen tener una intolerancia alimentaria la tiene realmente demostrada con pruebas médicas. Quitarte alimentos por tu cuenta (gluten, lactosa...) sin diagnóstico daña tu microbiota — justo lo contrario de lo que buscas.',
        points: [
          'Cuidado con las redes: hasta un 60% de los vídeos sobre salud intestinal en plataformas como TikTok contienen desinformación o pseudociencia, y muchos buscan venderte un producto.',
          'Si sospechas una intolerancia real, consúltalo con un profesional antes de eliminar alimentos.'
        ]
      },
      {
        title: 'El estrógeno también pasa por tu intestino',
        body: 'Tu intestino tiene su propio "departamento hormonal" (el estroboloma): un grupo de bacterias que reactivan parte del estrógeno que el hígado iba a eliminar, devolviéndolo a la sangre.',
        points: [
          'El estrógeno regula el ciclo menstrual, pero también huesos, memoria, estado de ánimo y piel — por eso un intestino dañado se nota en todo el cuerpo, no solo en la tripa.'
        ]
      },
      {
        title: 'Paso 4 · Gestiona estrés y sueño',
        body: 'El estrés crónico dispara el cortisol y hace la barrera intestinal más permeable, dejando pasar toxinas e inflamación. Y la falta de sueño desincroniza el reloj interno de tus bacterias, empeorando digestión e inflamación. Es un círculo vicioso en ambos sentidos.',
        points: [
          'Dedica 10-20 min antes de dormir a bajar revoluciones: respiración diafragmática (inhala profundo con el abdomen, no el pecho), relajación muscular progresiva (tensar y soltar grupos musculares) o la técnica de Benson (respiración pausada + una palabra o frase corta).',
          'Si trabajas a turnos: come en un horario fijo dentro de tu turno, hidrátate bien y lleva fruta encima (manzana, plátano) como fuente rápida de fibra y agua.'
        ]
      },
      {
        title: 'Paso 5 · Ten mascota (si puedes)',
        body: 'Convivir con perros o gatos entrena y diversifica tu microbiota: te traen microbios del exterior que aumentan tus bacterias buenas, educan al sistema inmunitario y se asocian a menor riesgo de alergias. Además, pasear al perro te hace moverte más sin pensarlo.'
      },
      {
        title: 'Paso 6 · Entrena (el que nadie tiene en cuenta)',
        body: 'Existe el eje intestino-músculo: cuando alimentas tu microbiota con fibra, tus bacterias fermentan y producen metabolitos que viajan por la sangre hasta el músculo, activando señales de crecimiento clave para la fuerza y reduciendo la inflamación.',
        points: [
          'Cuanto más músculo tienes, mejor circula la sangre y mejor funciona el tránsito intestinal: es bidireccional.',
          'No hace falta vivir en el gimnasio: un estudio con mujeres premenopáusicas mostró que solo cumplir la recomendación de la OMS (30 min de ejercicio moderado, 3 días/semana) ya genera diferencias claras en la diversidad y calidad de las bacterias intestinales frente al sedentarismo.'
        ]
      }
    ]
  },
  {
    id: 'programacion',
    emoji: '🧠',
    name: 'PROGRAMACIÓN',
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
    name: 'TÉCNICA',
    sub: 'Peso muerto, hip thrust, sentadilla, press, remo, hombro, femoral',
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
      },
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

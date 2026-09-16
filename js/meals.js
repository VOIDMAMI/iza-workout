/* ============================================
   IZA WORKOUT — Comidas (Recetas)
   Vista #comidas: recetas organizadas por Desayunos, Comidas, Cenas
   y Acompañamientos (salsas, cocidos y bases). Acordeones por sección,
   igual que Tips.
   ============================================ */

const MEALS_SECTIONS = [
  {
    id: 'desayunos',
    emoji: '🍳',
    name: 'Desayunos',
    sub: 'Rápidos y para dejar preparados',
    recipes: [
      {
        title: 'Banana bread sin azúcar',
        ingredients: [
          '2 plátanos maduros',
          '2 huevos',
          '1 yogur vegetal natural',
          'Un chorrito de bebida vegetal',
          '30 ml de aceite de oliva',
          'Harina de avena (hasta dar textura)',
          '1 sobre de levadura química',
          'Chocolate 85% troceado, al gusto'
        ],
        body: 'Mezcla primero los ingredientes húmedos. Añade la harina de avena poco a poco mientras bates, hasta conseguir la textura deseada, e incorpora la levadura y el chocolate. Hornea en moldes individuales (así es más fácil racionarlo), engrasados y llenos hasta dedo y medio de altura para que no desborden al subir.',
        tip: 'Cuanto más maduro esté el plátano, más dulce queda. Se conserva unos 3 días.'
      },
      {
        title: 'Huevos cocidos + pan de masa madre',
        ingredients: ['Huevos', 'Pan de masa madre'],
        body: 'Cuece los huevos 8 minutos desde que rompe a hervir (no 6) si van a guardarse en la nevera, para que la yema quede bien cuajada. Congela el pan en bolsitas de 2 rebanadas y descongela solo lo que vayas a usar.',
        tip: 'El desayuno de cero elaboración para los días con prisa.'
      }
    ]
  },
  {
    id: 'comidas',
    emoji: '🍽️',
    name: 'Comidas',
    sub: 'Platos completos para el mediodía',
    recipes: [
      {
        title: 'Bol de sushi casero',
        ingredients: ['Arroz cocido', 'Lechuga', 'Pepino', 'Tomate', 'Salmón marinado o tofu marinado', 'Aguacate machacado'],
        body: 'Marina el salmón (o el tofu) con salsa de soja, limón y una cucharada de trufa con antelación — gana sabor con los días. Monta el bol con el arroz de base, añade las verduras en crudo y termina con la proteína marinada y una cucharada de aguacate machacado.',
      },
      {
        title: 'Ensalada campera',
        ingredients: ['Patata cocida en dados', 'Tomate', 'Pimiento asado en tiras', 'Atún'],
        body: 'Cuece la patata hasta que ceda al cuchillo, córtala en dados y deja que se enfríe. Mezcla con el tomate y el pimiento asado en tiras.',
        tip: 'Añade el atún justo al servir, en recipiente aparte — si se mezcla antes, estropea la textura de la patata.'
      },
      {
        title: 'Arroz a la italiana',
        ingredients: ['Arroz cocido', 'Boloñesa vegana (soja texturizada)', 'Verdura asada (berenjena, cebolla, brócoli)'],
        body: 'Saltea la soja texturizada ya hidratada con aceite de oliva, tomate triturado, sal y orégano a fuego bajo hasta que burbujee. Sirve sobre el arroz junto con la verdura asada.',
        tip: 'Lleva el brócoli en un compartimento aparte para que no mezcle sabores con el resto.'
      }
    ]
  },
  {
    id: 'cenas',
    emoji: '🌙',
    name: 'Cenas',
    sub: 'Ligeras y de poca elaboración',
    recipes: [
      {
        title: 'Lechuga y pollo express',
        ingredients: ['Lechuga', 'Pollo desmenuzado', 'Pan de masa madre descongelado', 'Aceite de oliva'],
        body: 'Monta una base de lechuga, añade el pollo ya desmenuzado y el pan (entero o en picatostes). Remata con un chorro de aceite de oliva.',
        tip: 'La opción de cero elaboración para los días de llegar sin ganas de cocinar.'
      },
      {
        title: 'Crema de verduras con tortilla',
        ingredients: ['Crema de calabacín o de calabaza', 'Media tortilla de patata'],
        body: 'Sirve la crema caliente acompañada de media tortilla de patata (100 g de patata cocida por cada 2 huevos).',
        tip: 'Cubre proteína, grasa, carbohidrato y fibra en un único plato.'
      },
      {
        title: 'Ñoquis al pesto',
        ingredients: ['Ñoquis', 'Pesto', 'Levadura nutricional', 'Pollo o huevo cocido'],
        body: 'Hierve los ñoquis 2 minutos. Mézclalos con el pesto y espolvorea levadura nutricional por encima (sustituye al parmesano, con sabor umami y apta para intolerantes a la lactosa). Añade pollo o huevo cocido como proteína.',
        tip: 'Si usas la versión del pesto con guisantes, la proteína ya va incorporada en la salsa.'
      }
    ]
  },
  {
    id: 'acompañamientos',
    emoji: '🥗',
    name: 'Acompañamientos',
    sub: 'Salsas, cocidos y bases para toda la semana',
    recipes: [
      {
        title: 'Aguacate machacado',
        ingredients: ['Aguacate', 'Zumo de limón o lima', 'Pimienta negra', 'Sal'],
        body: 'Machaca el aguacate con un tenedor y mezcla con el resto de ingredientes.',
        tip: 'El limón evita que se oxide. Se conserva 2 días en la nevera; para más tiempo, prénsalo en una bolsa de congelación sacando todo el aire, divide en porciones y congela — se descongela al microondas o en la sartén.'
      },
      {
        title: 'Paté de atún',
        ingredients: ['1 lata de atún (o el pescado/tofu que prefieras)', '1 cucharada de maíz', '1 cucharada de queso crema', 'Limón', 'Pimienta', 'Sal'],
        body: 'Mezcla todos los ingredientes hasta conseguir una pasta homogénea.',
        tip: 'Ideal para sándwiches, tostadas y ensaladas.'
      },
      {
        title: 'Pesto saludable',
        ingredients: ['Aceite de oliva', 'Espinacas', 'Hojas de albahaca (sin tallos)', 'Un puñado de piñones', 'Limón', 'Pimienta', 'Sal'],
        body: 'Tritura todos los ingredientes juntos hasta obtener una salsa homogénea.',
        tip: 'Versión proteica: añade una cucharada de guisantes hervidos a la mezcla — útil cuando acompaña a un plato sin proteína propia (pasta, ñoquis, arroz).'
      },
      {
        title: 'Cremas de verduras',
        ingredients: ['Calabaza + zanahoria, o calabacín + una patata hervida', 'Aceite de oliva', 'Sal', 'Pimienta'],
        body: 'Cuece las verduras y tritúralas con aceite de oliva, sal y pimienta hasta obtener una crema fina.',
        tip: 'Sirve tanto de guarnición como de base de una cena ligera.'
      },
      {
        title: 'Verduras y proteína al horno',
        ingredients: ['Brócoli', 'Pimiento', 'Berenjena', 'Cebolla', 'Boniato', 'Pechuga de pollo', 'Salmón', 'Aceite de oliva', 'Sal', 'Pimienta', 'Limón'],
        body: 'Lava y desinfecta las verduras en un bol con vinagre de vino antes de hornear. Coloca el brócoli boca abajo (tallos hacia arriba) para que no se queme la flor — el tallo pelado también se aprovecha. Hornea el pimiento entero y córtalo en tiras después. Haz unos cortes al boniato para que no se hinche y quede reseco. Adereza todo con aceite de oliva, sal, pimienta y limón.',
        tip: 'Se cocina todo en una sola sesión de horno para aprovechar el tiempo.'
      },
      {
        title: 'Cocciones básicas',
        ingredients: ['Arroz', 'Patata', 'Ñoquis', 'Huevos'],
        body: 'Arroz por absorción (1 medida de agua por 1 de arroz). Patata hervida hasta que ceda al cuchillo. Ñoquis hervidos 2 minutos. Huevos cocidos 8 minutos desde que rompe a hervir.',
        tip: 'Cocina todas las bases juntas en una sola sesión (~1 h) para ahorrar tiempo el resto de la semana.'
      }
    ]
  }
];

const Meals = {
  expanded: null,

  render() {
    const container = document.getElementById('page-comidas');
    if (!container) return;

    const sectionsHtml = MEALS_SECTIONS.map(sec => {
      const isOpen = this.expanded === sec.id;
      const recipesHtml = isOpen ? `
        <div class="tips-list">
          ${sec.recipes.map(r => this._renderRecipe(r)).join('')}
        </div>
      ` : '';
      return `
        <div class="express-cat tips-cat ${isOpen ? 'expanded' : ''}">
          <div class="express-cat-header" onclick="Meals.toggle('${sec.id}')">
            <div class="express-cat-icon">${sec.emoji}</div>
            <div class="express-cat-info">
              <div class="express-cat-name">${sec.name}</div>
              <div class="express-cat-meta">${sec.recipes.length} recetas · ${sec.sub}</div>
            </div>
            <div class="plan-card-chevron ${isOpen ? 'expanded' : ''}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
          ${recipesHtml}
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <button class="workout-back" onclick="App.navigate('home')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        ${I18N.t('common.back')}
      </button>

      <div class="workout-page-header">
        <h1 class="workout-day-name">🍽️ Comidas</h1>
        <div class="workout-day-info">
          <span class="text-sm text-secondary">Desayunos, comidas, cenas y acompañamientos</span>
        </div>
      </div>

      <div class="tips-intro anim-fade-in">
        Batch cooking por bases: cocina los ingredientes por separado y combínalos durante la semana. Las salsas y los marinados van siempre en recipiente aparte, nunca mezclados con el carbohidrato, para que nada se reblandezca ni se avinagre.
      </div>

      <div class="express-list anim-fade-in-up anim-delay-1">
        ${sectionsHtml}
      </div>
    `;
  },

  _renderRecipe(r) {
    const ingredients = r.ingredients ? `<ul class="tip-points">${r.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>` : '';
    const body = r.body ? `<p class="tip-body">${r.body}</p>` : '';
    const tip = r.tip ? `<p class="tip-body" style="opacity:0.85; font-style:italic;">💡 ${r.tip}</p>` : '';
    return `
      <div class="tip-card">
        <div class="tip-title">${r.title}</div>
        ${ingredients}
        ${body}
        ${tip}
      </div>
    `;
  },

  toggle(id) {
    this.expanded = this.expanded === id ? null : id;
    vibrate(20);
    this.render();
  }
};

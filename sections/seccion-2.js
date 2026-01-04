// SECCIÓN 2: ANÁLISIS DE COSTOS
// Claridad absoluta de cuánto dinero necesitas y cuándo

export const seccion2 = {
  id: "seccion-2",
  number: 2,
  title: "Análisis de Costos",
  subtitle: "Claridad absoluta de cuánto dinero necesitas y cuándo",
  
  whyImportant: `
    <p>La mayoría de los emprendimientos no fracasan porque el producto o servicio sea malo, sino porque <strong>se quedan sin dinero antes de ser rentables</strong>. Esta sección es posiblemente la más crítica de toda la guía porque te obliga a confrontar números reales, no proyecciones optimistas.</p>
    
    <p>Existe una diferencia brutal entre "creo que necesito $X" y "calculé exactamente que necesito $Y basándome en cotizaciones reales". La diferencia entre ambas puede ser la diferencia entre sobrevivir los primeros 12 meses o cerrar en el mes 8 por falta de capital.</p>
    
    <p>Lo que vamos a hacer aquí NO es darte cifras específicas (porque varían según mil factores), sino enseñarte <strong>cómo pensar el problema de costos</strong>, qué variables considerar, cómo estimarlas, y cómo crear un modelo financiero que sea realista, no wishful thinking.</p>
  `,
  
  keyConcepts: `
    <h3>Costos de Puesta en Marcha (One-Time)</h3>
    
    <p>Estos son gastos que haces UNA VEZ al inicio. No son recurrentes, pero son obligatorios para poder operar.</p>
    
    <p><strong>1. Curso de administración</strong></p>
    <ul>
      <li>Rango típico: $300,000 - $800,000</li>
      <li>Variables que afectan el precio: modalidad (presencial más caro que online), institución (universidades vs institutos técnicos), duración (60 horas vs 120 horas)</li>
      <li>Qué investigar: pide cotizaciones de al menos 3 instituciones, compara qué incluyen (materiales, software, prácticas)</li>
    </ul>
    
    <p><strong>2. Constitución de empresa</strong></p>
    <ul>
      <li>EIRL: $50,000 - $150,000 (hazlo tú mismo vs con gestor)</li>
      <li>SpA: $100,000 - $300,000 (requiere abogado típicamente)</li>
      <li>Ltda: $150,000 - $400,000 (escritura pública notarial más abogado)</li>
      <li>Qué incluye: redacción de estatutos, inscripción en registro de comercio, publicación diario oficial, tramitación RUT</li>
    </ul>
    
    <p><strong>3. Registro como administrador</strong></p>
    <ul>
      <li>Arancel MINVU: verificar valor actualizado (puede ser $0 o hasta 1 UTM ≈ $70,000)</li>
      <li>Timings: puede demorar 2-4 semanas, planifica tu flujo de caja considerando que no puedes cobrar hasta estar registrado</li>
    </ul>
    
    <p><strong>4. Marketing inicial</strong></p>
    <ul>
      <li>Sitio web profesional: $200,000 - $800,000 (depende si usas plantilla vs diseño custom, si lo haces tú vs contratas)</li>
      <li>Tarjetas de presentación: $15,000 - $30,000 (500-1000 unidades)</li>
      <li>Material de presentación (brochures, carpetas): $50,000 - $150,000</li>
      <li>Logo y branding: $0 (hazlo tú con Canva) vs $300,000 (diseñador profesional)</li>
      <li>Fotografía profesional (para web y presentaciones): $50,000 - $150,000</li>
    </ul>
    
    <p><strong>TRAMPA COMÚN</strong>: Gastar demasiado en marketing antes de tener producto validado. No necesitas un sitio web de $800,000 el día 1. Puedes empezar con uno de $200,000 y mejorarlo cuando tengas ingresos.</p>
    
    <p><strong>5. Capital de trabajo inicial</strong></p>
    <p>Este es el más importante y el más subestimado. Es el dinero que necesitas para vivir TÚ (gastos personales) mientras el negocio no genera ingresos suficientes.</p>
    
    <p>Cómo calcularlo:</p>
    <ul>
      <li>Gasto mensual personal actual: $X (suma TODO: arriendo/dividendo, comida, transporte, seguros, deudas, entretenimiento, imprevistos)</li>
      <li>Meses sin ingresos del negocio esperados: Y meses (realista: 6-9 meses hasta primer cobro significativo)</li>
      <li>Capital de trabajo necesario = X × Y</li>
      <li><strong>Agrega 30% de buffer</strong> porque siempre hay imprevistos</li>
    </ul>
    
    <p><strong>Ejemplo ilustrativo</strong>:</p>
    <ul>
      <li>Gastos personales mensuales: $1,200,000</li>
      <li>Meses sin ingresos: 8 meses (conservador)</li>
      <li>Base: $1,200,000 × 8 = $9,600,000</li>
      <li>Buffer 30%: $9,600,000 × 1.3 = $12,480,000</li>
    </ul>
    <p>Necesitas $12,480,000 SOLO para tus gastos personales mientras arrancas. Y esto es APARTE de los costos del negocio.</p>
    
    <h3>Costos Operacionales Recurrentes (Mensuales)</h3>
    
    <p>Estos son gastos que tendrás CADA MES mientras operes, tengas 1 cliente o 10.</p>
    
    <p><strong>1. Software de gestión</strong></p>
    <ul>
      <li>Modelo típico: fee por unidad administrada (ej: $800-1,500 por unidad/mes)</li>
      <li>Alternativas: plan fijo mensual (menos común) o comisión sobre cobranza (raro)</li>
      <li>Si administras 50 unidades y el software cobra $1,000/unidad = $50,000/mes</li>
      <li>Esto ESCALA con tu crecimiento (más unidades = más costo)</li>
    </ul>
    
    <p><strong>2. Contador/Asesoría contable</strong></p>
    <ul>
      <li>Contador externo: $80,000 - $300,000/mes</li>
      <li>Variables: volumen de facturación, complejidad tributaria, servicios incluidos (declaraciones, finiquitos, asesoría)</li>
      <li>Busca uno especializado en servicios (no retail o industria) y que conozca el rubro de administración</li>
    </ul>
    
    <p><strong>3. Movilización (visitas a comunidades)</strong></p>
    <ul>
      <li>Combustible + desgaste vehículo: $100,000 - $300,000/mes dependiendo de cuántas comunidades y distancia</li>
      <li>Si no tienes vehículo: transporte público + Uber ocasional: $50,000 - $150,000/mes</li>
      <li>A futuro: arriendo/mantención vehículo empresarial cuando escales</li>
    </ul>
    
    <p><strong>4. Comunicaciones</strong></p>
    <ul>
      <li>Plan telefónico empresarial: $15,000 - $30,000/mes</li>
      <li>Internet (si trabajas desde casa): $20,000 - $35,000/mes</li>
      <li>Herramientas de comunicación (Zoom, Slack, etc.): $0 - $20,000/mes</li>
    </ul>
    
    <p><strong>5. Seguros</strong></p>
    <ul>
      <li>Responsabilidad civil profesional: $30,000 - $100,000/mes</li>
      <li>CRÍTICO: te protege de demandas por errores u omisiones en tu gestión</li>
      <li>Compara coberturas, no solo precios (monto asegurado, exclusiones, deducible)</li>
    </ul>
    
    <p><strong>6. Mantención de empresa</strong></p>
    <ul>
      <li>Patente municipal: ~$25,000 anuales (prorratea mensualmente)</li>
      <li>Publicaciones en diario oficial (si hay cambios societarios): variable, $10,000-50,000 cuando ocurre</li>
      <li>Renovación registro MINVU: verificar si es anual y costo (puede ser $0 o hasta $50,000)</li>
    </ul>
    
    <p><strong>7. Otros costos variables</strong></p>
    <ul>
      <li>Capacitación continua: cursos, seminarios, webinars (presupuesta $50,000-100,000/mes)</li>
      <li>Suscripciones profesionales: asociaciones de administradores, newsletters especializados ($10,000-30,000/mes)</li>
      <li>Imprevistos operacionales: SIEMPRE agrega 10-15% de los costos fijos como colchón</li>
    </ul>
    
    <h3>Lógica de Cálculo: Cómo Pensar el Problema</h3>
    
    <p>Lo que necesitas NO es una fórmula mágica, sino un método para estimar costos realistamente.</p>
    
    <p><strong>Paso 1: Categorizar costos</strong></p>
    <ul>
      <li><strong>Costos fijos</strong>: no dependen de cuántos clientes tienes (contador, seguro, patente)</li>
      <li><strong>Costos variables</strong>: crecen con número de clientes (software por unidad, movilización)</li>
      <li><strong>Costos semi-variables</strong>: tienen base fija + variable (teléfono: plan base + excedentes)</li>
    </ul>
    
    <p><strong>Paso 2: Estimar cada costo conservadoramente</strong></p>
    <ul>
      <li>NO uses el precio más barato que encuentres (probablemente es de mala calidad o tiene letra chica)</li>
      <li>Tampoco uses el más caro (a menos que tengas razones específicas)</li>
      <li>Usa el PROMEDIO de 3 cotizaciones reales</li>
      <li>Agrega 20% de margen de error ("por si acaso")</li>
    </ul>
    
    <p><strong>Paso 3: Proyectar crecimiento de costos según escala</strong></p>
    <p>Cómo cambian tus costos con el crecimiento:</p>
    <ul>
      <li>Con 1 cliente (10 unidades): software $10,000, movilización $50,000, total variable $60,000</li>
      <li>Con 5 clientes (50 unidades): software $50,000, movilización $150,000, total variable $200,000</li>
      <li>Con 10 clientes (100 unidades): software $100,000, movilización $250,000, total variable $350,000</li>
      <li>Costos fijos se mantienen (contador, seguro) hasta cierto punto (cuando necesites contratar ayuda)</li>
    </ul>
    
    <p><strong>Paso 4: Identificar insumos críticos para cada cálculo</strong></p>
    <p>Para estimar bien necesitas:</p>
    <ul>
      <li>Cotizaciones REALES (no supuestos ni "he escuchado que cuesta...")</li>
      <li>Datos de mercado (precios de competencia, tarifas típicas de proveedores)</li>
      <li>Tu propia situación (¿tienes auto? ¿trabajas desde casa? ¿tienes ahorros?)</li>
    </ul>
    
    <p><strong>Paso 5: Dónde conseguir información de referencia</strong></p>
    <ul>
      <li>Gremios y asociaciones de administradores (ej: Asociación de Administradores de Edificios y Comunidades)</li>
      <li>Competencia: llama haciéndote pasar por prospecto, pregunta tarifas</li>
      <li>Proveedores: software, contadores, aseguradoras → todos tienen lista de precios</li>
      <li>Foros y grupos de Facebook/LinkedIn de administradores (networking, preguntas directas)</li>
      <li>Ex-compañeros del curso de administración (comparten experiencias reales)</li>
    </ul>
    
    <h3>Construcción del Modelo Financiero</h3>
    
    <p>Cómo armar tu planilla de costos (Excel o Google Sheets):</p>
    
    <p><strong>Hoja 1: Costos de Puesta en Marcha</strong></p>
    <table border="1" cellpadding="5">
      <tr><th>Ítem</th><th>Costo Estimado</th><th>Fuente</th><th>Fecha de Gasto</th></tr>
      <tr><td>Curso administración</td><td>$500,000</td><td>Cotización Instituto ABC</td><td>Mes 1</td></tr>
      <tr><td>Constitución EIRL</td><td>$120,000</td><td>Gestor XYZ</td><td>Mes 3</td></tr>
      <tr><td>Sitio web</td><td>$300,000</td><td>Freelancer recomendado</td><td>Mes 2</td></tr>
      <tr><td>Material marketing</td><td>$80,000</td><td>Imprenta local</td><td>Mes 3</td></tr>
      <tr><td><strong>TOTAL ONE-TIME</strong></td><td><strong>$1,000,000</strong></td><td></td><td></td></tr>
    </table>
    
    <p><strong>Hoja 2: Costos Operacionales Mensuales</strong></p>
    <table border="1" cellpadding="5">
      <tr><th>Ítem</th><th>Mes 1-3 (0 clientes)</th><th>Mes 4-6 (2 clientes)</th><th>Mes 7-12 (5 clientes)</th></tr>
      <tr><td>Software gestión</td><td>$0</td><td>$20,000</td><td>$50,000</td></tr>
      <tr><td>Contador</td><td>$120,000</td><td>$120,000</td><td>$150,000</td></tr>
      <tr><td>Movilización</td><td>$30,000</td><td>$80,000</td><td>$150,000</td></tr>
      <tr><td>Comunicaciones</td><td>$25,000</td><td>$25,000</td><td>$30,000</td></tr>
      <tr><td>Seguros</td><td>$50,000</td><td>$50,000</td><td>$50,000</td></tr>
      <tr><td>Otros + Imprevistos</td><td>$30,000</td><td>$40,000</td><td>$50,000</td></tr>
      <tr><td><strong>TOTAL MENSUAL</strong></td><td><strong>$255,000</strong></td><td><strong>$335,000</strong></td><td><strong>$480,000</strong></td></tr>
    </table>
    
    <p><strong>Hoja 3: Capital de Trabajo Personal</strong></p>
    <table border="1" cellpadding="5">
      <tr><th>Concepto</th><th>Monto Mensual</th><th>Meses</th><th>Total</th></tr>
      <tr><td>Gastos personales</td><td>$1,200,000</td><td>8</td><td>$9,600,000</td></tr>
      <tr><td>Buffer 30%</td><td></td><td></td><td>$2,880,000</td></tr>
      <tr><td><strong>CAPITAL NECESARIO</strong></td><td></td><td></td><td><strong>$12,480,000</strong></td></tr>
    </table>
    
    <p><strong>Resumen Total de Capital Necesario (Primer Año)</strong></p>
    <ul>
      <li>Costos one-time: $1,000,000</li>
      <li>Costos operacionales 12 meses (promedio $350,000/mes): $4,200,000</li>
      <li>Capital de trabajo personal: $12,480,000</li>
      <li><strong>GRAN TOTAL: $17,680,000</strong></li>
    </ul>
    
    <p>Este es el número que necesitas tener ANTES de arrancar si quieres sobrevivir 12 meses sin estrés financiero extremo.</p>
  `,
  
  examples: `
    <h3>Ejemplo ilustrativo: Dos escenarios de capital inicial</h3>
    
    <p><strong>Emprendedor A: Capital abundante ($20,000,000 disponibles)</strong></p>
    <ul>
      <li>Puede arrancar sin estrés financiero</li>
      <li>Puede invertir en marketing agresivo desde el inicio</li>
      <li>Puede aguantar 12+ meses sin clientes si es necesario</li>
      <li>Riesgo: puede volverse ineficiente ("total tengo plata")</li>
      <li>Estrategia recomendada: ser disciplinado igual, no porque tengas el dinero debes gastarlo</li>
    </ul>
    
    <p><strong>Emprendedor B: Capital limitado ($5,000,000 disponibles)</strong></p>
    <ul>
      <li>DEBE ser ultra eficiente desde día 1</li>
      <li>NO puede permitirse errores costosos</li>
      <li>DEBE validar antes de gastar (ej: conseguir primer cliente antes de constituir empresa)</li>
      <li>DEBE recortar gastos personales al mínimo</li>
      <li>Estrategia recomendada:
        <ul>
          <li>Postergar constitución empresa hasta tener 2 clientes comprometidos</li>
          <li>Marketing DIY (sin agencia, sin fotógrafo caro)</li>
          <li>Trabajar desde casa (no arrendar oficina)</li>
          <li>Usar herramientas gratuitas/baratas inicialmente</li>
          <li>Conseguir primeros clientes con descuento (50% primeros 6 meses) para validar rápido</li>
        </ul>
      </li>
    </ul>
    
    <p>Con $5,000,000 puedes arrancar, pero requiere disciplina férrea y aceptar que NO tienes margen de error.</p>
    
    <h3>Ejemplo ilustrativo: Cálculo de punto de equilibrio</h3>
    
    <p>Supongamos tus costos operacionales fijos son $400,000/mes y tus costos variables son $1,200/unidad administrada.</p>
    
    <p>Cobras $12,000/unidad/mes a tus clientes.</p>
    
    <p>Margen de contribución por unidad = $12,000 - $1,200 = $10,800</p>
    
    <p>Punto de equilibrio = Costos Fijos / Margen de Contribución<br>
    = $400,000 / $10,800<br>
    = 37 unidades</p>
    
    <p>Necesitas administrar al menos 37 unidades para cubrir costos (sin ganancia). Si la comunidad promedio en Chicureo tiene 12 unidades, necesitas 3.1 comunidades → redondeando, 4 comunidades para estar seguro.</p>
    
    <p>Ahora pregúntate: ¿Cuánto me toma conseguir 4 comunidades? Si son 3 meses por comunidad (desde contacto hasta firma), son 12 meses hasta llegar a punto de equilibrio. ¿Tienes capital para aguantar 12 meses?</p>
  `,
  
  questions: [
    "¿Cuál es mi capital inicial disponible REAL (en banco, hoy)?",
    "¿Cuántos meses puedo sostener SIN ingresos del negocio usando ese capital?",
    "¿He cotizado cada ítem de costo con al menos 2 proveedores o es estimación?",
    "¿Qué costos son realmente críticos vs deseables en mi etapa inicial?",
    "¿Dónde puedo reducir costos significativamente sin afectar calidad del servicio?",
    "¿Qué costos aumentarán con más clientes y en qué proporción?",
    "¿Cuál es mi punto de equilibrio en # de unidades administradas?",
    "¿Cuánto tiempo realista me toma llegar a ese punto de equilibrio?",
    "¿Qué pasa si mis proyecciones están 30% equivocadas? ¿Sigo siendo viable?",
    "¿Necesito conseguir financiamiento externo o mi capital es suficiente?"
  ],
  
  checklist: [
    {
      id: "checklist-2-1",
      text: "Listar TODOS los costos iniciales one-time identificados"
    },
    {
      id: "checklist-2-2",
      text: "Cotizar cada ítem de costo one-time con al menos 2 proveedores diferentes"
    },
    {
      id: "checklist-2-3",
      text: "Sumar costos one-time total reales (no estimados)"
    },
    {
      id: "checklist-2-4",
      text: "Listar TODOS los costos operacionales mensuales"
    },
    {
      id: "checklist-2-5",
      text: "Categorizar cada costo: fijo, variable, o semi-variable"
    },
    {
      id: "checklist-2-6",
      text: "Cotizar cada costo mensual (contador, seguro, software, etc.)"
    },
    {
      id: "checklist-2-7",
      text: "Crear planilla Excel/Sheets con proyección mes a mes (12 meses)"
    },
    {
      id: "checklist-2-8",
      text: "Calcular mis gastos personales mensuales REALES (no subestimar)"
    },
    {
      id: "checklist-2-9",
      text: "Estimar meses sin ingresos significativos del negocio (conservador)"
    },
    {
      id: "checklist-2-10",
      text: "Calcular capital de trabajo personal necesario (gastos × meses × 1.3)"
    },
    {
      id: "checklist-2-11",
      text: "Calcular punto de equilibrio: # unidades mínimas para cubrir costos"
    },
    {
      id: "checklist-2-12",
      text: "Definir colchón financiero de seguridad adicional (20-30% del total)"
    },
    {
      id: "checklist-2-13",
      text: "Sumar TODO: costos one-time + operacionales proyectados + capital trabajo + colchón"
    },
    {
      id: "checklist-2-14",
      text: "Comparar total necesario vs capital disponible: ¿hay brecha?"
    },
    {
      id: "checklist-2-15",
      text: "Si hay brecha: identificar fuentes de financiamiento (ahorro adicional, préstamo familiar, crédito)"
    },
    {
      id: "checklist-2-16",
      text: "Establecer presupuesto mensual estricto de operación con límites por categoría"
    },
    {
      id: "checklist-2-17",
      text: "Crear sistema de tracking de gastos reales vs presupuestados (revisión semanal)"
    }
  ]
};

// SECCIÓN 4: MODELO DE NEGOCIO Y PRICING
// Definir cómo ganarás dinero de forma sostenible

export const seccion4 = {
  id: "seccion-4",
  number: 4,
  title: "Modelo de Negocio y Pricing",
  subtitle: "Definir cómo ganarás dinero de forma sostenible",
  
  whyImportant: `
    <p>Puedes tener el mejor servicio del mundo, pero si tu modelo de pricing está mal, <strong>trabajarás mucho y ganarás poco</strong>. O peor: perderás dinero con cada cliente adicional (economías de escala negativas).</p>
    
    <p>El pricing no es solo "cuánto cobro", es una decisión estratégica que afecta:</p>
    <ul>
      <li>A quién atraes como cliente (comunidades premium vs económicas)</li>
      <li>Cuánto puedes invertir en calidad de servicio</li>
      <li>Qué tan rápido puedes crecer</li>
      <li>Cuándo podrás dedicarte full-time</li>
      <li>Tu posicionamiento vs competencia</li>
    </ul>
    
    <p>Esta sección te enseñará a pensar el pricing como lo que es: la columna vertebral de tu sostenibilidad financiera.</p>
  `,
  
  keyConcepts: `
    <h3>Estructura de Pricing Típica en Administración de Edificios</h3>
    
    <p><strong>Fee por unidad (casa/departamento)</strong></p>
    <p>Este es el modelo dominante en Chile. Cobras $X por cada unidad (casa o departamento) que administras.</p>
    
    <p>Rango típico en Chile (verificar precios actuales de mercado):</p>
    <ul>
      <li>Comunidades muy pequeñas (<10 unidades): $15,000-25,000/unidad/mes</li>
      <li>Comunidades pequeñas (10-30 unidades): $10,000-18,000/unidad/mes</li>
      <li>Comunidades medianas (30-100 unidades): $8,000-12,000/unidad/mes</li>
      <li>Comunidades grandes (>100 unidades): $5,000-8,000/unidad/mes</li>
    </ul>
    
    <p>Observa el patrón: <strong>a más unidades, menor precio unitario</strong> (economías de escala).</p>
    
    <p><strong>Factores que afectan el precio</strong></p>
    <ul>
      <li><strong>Tamaño comunidad</strong>: Pequeñas = más caro/unidad (mismo trabajo de base pero repartido entre menos unidades)</li>
      <li><strong>Complejidad</strong>: ¿Tiene piscina, quincho, ascensores, calefacción central? Más complejidad = mayor precio</li>
      <li><strong>Ubicación geográfica</strong>: Chicureo vs Santiago centro vs Valparaíso → distancia y costo de desplazamiento</li>
      <li><strong>Servicios incluidos</strong>: Básico (solo admin financiera) vs completo (+ gestión mantenciones, cobranza legal, etc.)</li>
      <li><strong>Frecuencia de reuniones/inspecciones</strong>: Semanal vs mensual vs a demanda</li>
    </ul>
    
    <p><strong>Qué incluir en la tarifa base vs cobros adicionales</strong></p>
    <p><em>Tarifa base incluye típicamente:</em></p>
    <ul>
      <li>Cálculo y emisión de gastos comunes mensuales</li>
      <li>Gestión de cobranza básica (recordatorios automáticos, reporte de morosidad)</li>
      <li>Libro de caja y contabilidad básica de la comunidad</li>
      <li>Coordinación de proveedores de servicios regulares</li>
      <li>Plataforma digital para residentes (app/web)</li>
      <li>Participación en juntas de vecinos ordinarias (1 por mes típicamente)</li>
      <li>Reportes financieros mensuales</li>
      <li>Atención de consultas y emergencias (dentro de horarios razonables)</li>
    </ul>
    
    <p><em>Servicios adicionales (cobro extra):</em></p>
    <ul>
      <li>Cobranza judicial (demandas a morosos): por gestión o % de lo recuperado</li>
      <li>Gestión de proyectos especiales (remodelación áreas comunes, cambio de techumbres): fee por proyecto</li>
      <li>Juntas extraordinarias adicionales (más allá de X por año): fee por junta</li>
      <li>Auditorías profundas o revisión de gestión anterior: tarifa especial</li>
      <li>Servicios fuera de horario (emergencias nocturnas/fines de semana): tarifa diferenciada</li>
    </ul>
    
    <p><strong>IMPORTANTE</strong>: Define claramente qué está incluido y qué no ANTES de firmar contrato. La ambigüedad genera conflictos.</p>
    
    <h3>Estrategia de Costos: Por qué NO traspasar costo del software explícitamente</h3>
    
    <p>Algunos administradores novatos cometen este error:</p>
    <p>"Cobro $10,000/unidad + $1,200/unidad del software = Total $11,200/unidad"</p>
    
    <p><strong>Por qué esto es un error:</strong></p>
    <ul>
      <li>Transparencia excesiva que no aporta valor al cliente (no les importa cómo distribuyes TU costo)</li>
      <li>Debilita tu posición de negociación (el cliente pensará "el software no vale $1,200, consíguelo más barato")</li>
      <li>Competencia puede no desglosar y parecer más barato ($10,500 todo incluido vs tu $11,200 desglosado)</li>
      <li>Rigidez: si cambias de software o negocias mejor precio, ¿reduces tu tarifa? (problema)</li>
    </ul>
    
    <p><strong>Estrategia correcta:</strong></p>
    <ul>
      <li>Calcula tus costos internamente (software + contador + movilización + seguros + margen)</li>
      <li>Ofrece UN PRECIO todo incluido al cliente</li>
      <li>Ese precio cubre tus costos + utilidad</li>
      <li>Si tu costo de software baja, eso mejora TU margen, no necesariamente bajas el precio al cliente</li>
    </ul>
    
    <h3>Cálculo de Unidad Mínima Viable</h3>
    
    <p>Esta es una de las métricas más críticas: <strong>¿cuántas unidades necesito administrar para no perder dinero?</strong></p>
    
    <p><strong>Lógica del cálculo:</strong></p>
    
    <p><em>Variables:</em></p>
    <ul>
      <li><strong>CF</strong> = Costos Fijos mensuales (contador, seguros, patentes, etc.)</li>
      <li><strong>CVu</strong> = Costo Variable por unidad (software, movilización proporcional)</li>
      <li><strong>P</strong> = Precio de venta por unidad</li>
      <li><strong>U</strong> = Número de unidades a administrar</li>
    </ul>
    
    <p><em>Fórmula de punto de equilibrio:</em></p>
    <p><code>U = CF / (P - CVu)</code></p>
    
    <p>Donde <code>(P - CVu)</code> es tu <strong>margen de contribución</strong> por unidad.</p>
    
    <p><strong>Ejemplo numérico:</strong></p>
    <ul>
      <li>CF = $400,000/mes (contador $150,000 + seguros $60,000 + comunicaciones $30,000 + otros $160,000)</li>
      <li>CVu = $1,500/unidad (software $1,200 + movilización $300)</li>
      <li>P = $12,000/unidad (precio que cobras al cliente)</li>
    </ul>
    
    <p>Margen de contribución = $12,000 - $1,500 = $10,500/unidad</p>
    
    <p>Punto de equilibrio = $400,000 / $10,500 = 38.1 unidades → <strong>necesitas 39 unidades para no perder dinero</strong></p>
    
    <p>Si en Chicureo las comunidades promedio tienen 15 unidades, necesitas <strong>3 comunidades</strong> (39/15 = 2.6 → 3) para estar en punto de equilibrio.</p>
    
    <p><strong>Margen de seguridad:</strong></p>
    <p>No operes justo en el punto de equilibrio. Agrega 30-50% de margen:</p>
    <ul>
      <li>Equilibrio: 39 unidades</li>
      <li>Seguro: 39 × 1.3 = 51 unidades (o 4 comunidades de 15 unidades)</li>
    </ul>
    
    <p>Con 51 unidades empiezas a generar utilidad real.</p>
    
    <h3>Proyección de Ingresos: Realismo vs Optimismo</h3>
    
    <p><strong>Cómo estimar ingresos realistas</strong></p>
    
    <p><em>Método de tres escenarios:</em></p>
    <ul>
      <li><strong>Conservador</strong>: Todo sale peor de lo esperado (1 cliente nuevo cada 4 meses)</li>
      <li><strong>Realista</strong>: Escenario base probable (1 cliente nuevo cada 2-3 meses)</li>
      <li><strong>Optimista</strong>: Todo sale mejor de lo esperado (1 cliente nuevo cada mes)</li>
    </ul>
    
    <p>Trabaja con el escenario CONSERVADOR para planificar capital, usa el realista para objetivos, y olvídate del optimista (es wishful thinking).</p>
    
    <p><strong>Ejemplo de proyección conservadora (12 meses):</strong></p>
    <table border="1" cellpadding="5">
      <tr><th>Mes</th><th>Comunidades</th><th>Unidades Total</th><th>Ingresos (x $12,000)</th><th>Costos</th><th>Resultado</th></tr>
      <tr><td>1-3</td><td>0</td><td>0</td><td>$0</td><td>$400,000</td><td>-$400,000</td></tr>
      <tr><td>4</td><td>1</td><td>15</td><td>$180,000</td><td>$422,000</td><td>-$242,000</td></tr>
      <tr><td>5-7</td><td>1</td><td>15</td><td>$180,000</td><td>$422,000</td><td>-$242,000</td></tr>
      <tr><td>8</td><td>2</td><td>30</td><td>$360,000</td><td>$445,000</td><td>-$85,000</td></tr>
      <tr><td>9-11</td><td>2</td><td>30</td><td>$360,000</td><td>$445,000</td><td>-$85,000</td></tr>
      <tr><td>12</td><td>3</td><td>45</td><td>$540,000</td><td>$467,000</td><td>+$73,000</td></tr>
    </table>
    
    <p>Acumulado 12 meses: -$1,830,000 (pérdida)</p>
    <p>Pero en mes 12 ya eres positivo, y de ahí en adelante creces.</p>
    
    <p><strong>Tasa de crecimiento conservadora vs agresiva</strong></p>
    <ul>
      <li>Conservadora: 1 cliente nuevo cada 3-4 meses</li>
      <li>Moderada: 1 cliente nuevo cada 2 meses</li>
      <li>Agresiva: 2 clientes nuevos cada 3 meses</li>
    </ul>
    
    <p>La tasa depende de: tu capacidad de venta, inversión en marketing, referidos, calidad de servicio (que genera boca a boca).</p>
    
    <p><strong>Estacionalidad: ¿hay meses mejores/peores?</strong></p>
    <ul>
      <li>En Chile, juntas de vecinos tienden a ser más frecuentes en marzo-abril (post vacaciones) y septiembre-octubre</li>
      <li>Cambios de administrador ocurren típicamente en enero (inicio año) o julio (mitad de año)</li>
      <li>Diciembre-febrero (verano): más difícil agendar reuniones (vacaciones)</li>
    </ul>
    
    <p>Planifica tus esfuerzos comerciales considerando esta estacionalidad.</p>
    
    <h3>Punto de Transición a Full-Time</h3>
    
    <p><strong>Cuánto necesitas ganar para dejar tu empleo actual</strong></p>
    
    <p>No es solo "ganar lo mismo". Debes considerar:</p>
    <ul>
      <li>Sueldo líquido actual: $X</li>
      <li>Prestaciones que perderás:
        <ul>
          <li>Isapre/Fonasa (empleador paga parte)</li>
          <li>AFP (empleador paga 10% adicional)</li>
          <li>Seguro de cesantía</li>
          <li>Aguinaldos/bonos</li>
          <li>Vacaciones pagadas</li>
        </ul>
      </li>
      <li>Nuevos costos como independiente:
        <ul>
          <li>Isapre completa (tú pagas 100%)</li>
          <li>AFP voluntaria</li>
          <li>Sin seguro de cesantía (debes tener colchón propio)</li>
          <li>Sin vacaciones pagadas (si no trabajas, no cobras)</li>
        </ul>
      </li>
    </ul>
    
    <p><strong>Cálculo de "sueldo equivalente":</strong></p>
    <p>Si ganas $1,800,000 líquido como empleado, tu empleador paga adicionales (~$500,000 en prestaciones).</p>
    <p>Costo total empleador: $2,300,000/mes</p>
    
    <p>Como independiente, para tener equivalencia, necesitas facturar mínimo $2,500,000/mes (considerando impuestos y gastos).</p>
    
    <p><strong>Colchón de seguridad recomendado:</strong></p>
    <p>No dejes tu trabajo apenas alcances el sueldo equivalente. Espera a tener:</p>
    <ul>
      <li>Ingresos estables 3+ meses consecutivos por sobre tu sueldo equivalente</li>
      <li>Colchón de emergencia de 6 meses de gastos personales en el banco</li>
      <li>Pipeline de clientes (prospectos avanzados que aseguren crecimiento)</li>
      <li>Operación probada y eficiente (no estás apagando incendios constantemente)</li>
    </ul>
  `,
  
  examples: `
    <h3>Ejemplo ilustrativo: Pricing según tipo de comunidad</h3>
    
    <p><strong>Comunidad A: 8 casas, sin amenities</strong></p>
    <ul>
      <li>Complejidad: Baja (solo cobro de gastos comunes básicos y jardín)</li>
      <li>Precio recomendado: $18,000/unidad/mes</li>
      <li>Ingreso mensual: 8 × $18,000 = $144,000</li>
      <li>Horas dedicadas/mes: ~6 horas (administración simple)</li>
      <li>Tarifa horaria implícita: $24,000/hora</li>
    </ul>
    
    <p><strong>Comunidad B: 25 departamentos, con piscina y quincho</strong></p>
    <ul>
      <li>Complejidad: Media (mantención piscina, reservas de quincho, más copropietarios)</li>
      <li>Precio recomendado: $12,000/unidad/mes</li>
      <li>Ingreso mensual: 25 × $12,000 = $300,000</li>
      <li>Horas dedicadas/mes: ~15 horas</li>
      <li>Tarifa horaria implícita: $20,000/hora</li>
    </ul>
    
    <p>Observa: cobras menos por unidad en B, pero ganas más en total y tu tarifa horaria es similar (economías de escala).</p>
    
    <h3>Ejemplo ilustrativo: Error de no incluir todos los costos</h3>
    
    <p>Un emprendedor novato calcula así:</p>
    <ul>
      <li>Software: $1,000/unidad</li>
      <li>Margen deseado: $8,000/unidad</li>
      <li>Precio: $9,000/unidad</li>
    </ul>
    
    <p>Luego descubre que olvidó:</p>
    <ul>
      <li>Contador: ~$150,000/mes (si tiene 50 unidades = $3,000/unidad)</li>
      <li>Movilización: $200,000/mes ($4,000/unidad)</li>
      <li>Seguros: $80,000/mes ($1,600/unidad)</li>
      <li>Imprevistos: $70,000/mes ($1,400/unidad)</li>
    </ul>
    
    <p>Costo real por unidad: $1,000 + $3,000 + $4,000 + $1,600 + $1,400 = $11,000</p>
    
    <p>Está vendiendo a $9,000 cuando su costo es $11,000 → <strong>pierde $2,000 por cada unidad que administra</strong>.</p>
    
    <p>Moraleja: calcula TODOS los costos antes de definir precio.</p>
  `,
  
  questions: [
    "¿Cuánto cobra la competencia por unidad en Chicureo específicamente?",
    "¿Puedo/debo cobrar menos al inicio para ganar mercado y luego subir precios?",
    "¿Qué servicios adicionales puedo monetizar más allá de la tarifa base?",
    "¿Cuál es mi costo REAL por unidad administrada (incluyendo TODO)?",
    "¿Cuál es mi margen de utilidad deseado por unidad?",
    "¿Cuántas unidades puedo atender yo solo eficientemente antes de necesitar ayuda?",
    "¿Qué pasa con mi pricing si necesito contratar asistente? ¿Sigue siendo rentable?",
    "¿Cuál es mi punto de equilibrio en # de unidades?",
    "¿Cuánto necesito facturar mensualmente para poder dejar mi trabajo actual?",
    "¿En qué mes proyectado alcanzaría ese umbral en escenario conservador, realista, optimista?"
  ],
  
  checklist: [
    {
      id: "checklist-4-1",
      text: "Investigar precios de 5+ competidores en Chicureo (llamar como prospecto)"
    },
    {
      id: "checklist-4-2",
      text: "Documentar rango de precios: mínimo, promedio, máximo por tipo de comunidad"
    },
    {
      id: "checklist-4-3",
      text: "Calcular mis costos fijos mensuales totales"
    },
    {
      id: "checklist-4-4",
      text: "Calcular mis costos variables por unidad"
    },
    {
      id: "checklist-4-5",
      text: "Definir margen de utilidad deseado (%)"
    },
    {
      id: "checklist-4-6",
      text: "Calcular precio por unidad: (costos + margen)"
    },
    {
      id: "checklist-4-7",
      text: "Comparar mi precio vs competencia: ¿estoy dentro del rango razonable?"
    },
    {
      id: "checklist-4-8",
      text: "Definir qué servicios incluye tarifa base vs servicios extra"
    },
    {
      id: "checklist-4-9",
      text: "Crear lista de servicios adicionales monetizables con tarifas"
    },
    {
      id: "checklist-4-10",
      text: "Calcular punto de equilibrio: # mínimo de unidades para cubrir costos"
    },
    {
      id: "checklist-4-11",
      text: "Traducir # unidades a # comunidades (usando tamaño promedio Chicureo)"
    },
    {
      id: "checklist-4-12",
      text: "Crear proyección de ingresos a 12 meses (escenario conservador)"
    },
    {
      id: "checklist-4-13",
      text: "Crear proyección de ingresos a 12 meses (escenario realista)"
    },
    {
      id: "checklist-4-14",
      text: "Calcular sueldo equivalente: cuánto necesito facturar para igualar empleo actual"
    },
    {
      id: "checklist-4-15",
      text: "Definir umbral de ingreso mensual para considerar transición a full-time"
    },
    {
      id: "checklist-4-16",
      text: "Identificar en qué mes proyectado alcanzaría ese umbral (por escenario)"
    },
    {
      id: "checklist-4-17",
      text: "Crear propuesta de valor escrita: qué incluye mi servicio exactamente"
    },
    {
      id: "checklist-4-18",
      text: "Diseñar estructura de contrato tipo (con abogado) incluyendo pricing y alcance"
    }
  ]
};

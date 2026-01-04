// SECCIÓN 11: INDICADORES Y MÉTRICAS DE PROGRESO
// Medir avance y detectar desvíos temprano

export const seccion11 = {
  id: "seccion-11",
  number: 11,
  title: "Indicadores y Métricas de Progreso",
  subtitle: "Medir avance y detectar desvíos temprano",
  
  whyImportant: `
    <p>"Lo que no se mide, no se puede mejorar" - frase trillada pero cierta. Sin métricas claras, operas <strong>a ciegas</strong>: no sabes si vas bien o mal hasta que es muy tarde (pierdes cliente, te quedas sin dinero, te quemas).</p>
    
    <p>Las métricas correctas te permiten:</p>
    <ul>
      <li><strong>Detectar problemas temprano</strong>: Antes de que se vuelvan crisis (ej: morosidad subiendo → actuar antes de crisis de caja)</li>
      <li><strong>Validar decisiones</strong>: ¿Contratar ayuda funcionó? ¿Campaña de marketing dio ROI? Los números no mienten</li>
      <li><strong>Celebrar avances</strong>: Reconocer cuando vas bien (motivación), no solo enfocarte en lo malo</li>
      <li><strong>Comunicar progreso</strong>: A socio, mentor, o a ti mismo (accountability)</li>
      <li><strong>Tomar decisiones basadas en data</strong>, no intuición o emociones</li>
    </ul>
    
    <p>Esta sección te dará un framework simple pero completo de qué medir, cómo medirlo, y qué hacer con esa información.</p>
  `,
  
  keyConcepts: `
    <h3>KPIs del Negocio (Key Performance Indicators)</h3>
    
    <p><strong>1. # Comunidades gestionadas</strong></p>
    <ul>
      <li><strong>Qué mide</strong>: Tamaño de tu portafolio de clientes</li>
      <li><strong>Meta típica</strong>:
        <ul>
          <li>Mes 6: 1-2 comunidades</li>
          <li>Mes 12: 3-5 comunidades</li>
          <li>Mes 24: 8-12 comunidades</li>
        </ul>
      </li>
      <li><strong>Cómo usarlo</strong>: Tracking mensual, gráfico de crecimiento. Si estancado 3+ meses → revisar estrategia de adquisición</li>
    </ul>
    
    <p><strong>2. # Unidades totales bajo administración</strong></p>
    <ul>
      <li><strong>Qué mide</strong>: Escala real (más preciso que # comunidades, porque una comunidad de 50 unidades ≠ una de 10)</li>
      <li><strong>Meta típica</strong>:
        <ul>
          <li>Mes 6: 15-30 unidades</li>
          <li>Mes 12: 50-80 unidades</li>
          <li>Mes 24: 120-180 unidades</li>
        </ul>
      </li>
      <li><strong>Cómo usarlo</strong>: Relacionar con capacidad operativa (¿estoy cerca de mi límite?)</li>
    </ul>
    
    <p><strong>3. Ingresos mensuales recurrentes (MRR - Monthly Recurring Revenue)</strong></p>
    <ul>
      <li><strong>Qué mide</strong>: Ingresos predecibles mes a mes (# unidades × precio promedio)</li>
      <li><strong>Fórmula</strong>: MRR = Σ (unidades_comunidad_i × precio_unidad_i)</li>
      <li><strong>Meta típica</strong>:
        <ul>
          <li>Mes 6: $200,000-400,000</li>
          <li>Mes 12: $600,000-1,000,000</li>
          <li>Mes 24: $1,500,000-2,500,000</li>
        </ul>
      </li>
      <li><strong>Cómo usarlo</strong>: Este es tu "sueldo" como emprendedor. Compara vs gastos personales + costos negocio = ¿es sostenible?</li>
    </ul>
    
    <p><strong>4. Tasa de retención de clientes (Churn)</strong></p>
    <ul>
      <li><strong>Qué mide</strong>: % de clientes que NO renuevan contrato</li>
      <li><strong>Fórmula</strong>: Churn = (clientes perdidos en período / clientes al inicio del período) × 100</li>
      <li><strong>Ejemplo</strong>: Empiezas mes con 10 comunidades, pierdes 1 → Churn = 10%</li>
      <li><strong>Meta</strong>: Churn < 10% anual (idealmente < 5%)</li>
      <li><strong>Cómo usarlo</strong>: Si churn > 10%, algo anda mal (calidad servicio, pricing, fit con clientes). Investigar causas, mejorar</li>
    </ul>
    
    <p><strong>5. Costo de adquisición de cliente (CAC)</strong></p>
    <ul>
      <li><strong>Qué mide</strong>: Cuánto gastas para conseguir 1 cliente nuevo</li>
      <li><strong>Fórmula</strong>: CAC = (Gastos marketing + ventas en período) / # clientes adquiridos en período</li>
      <li><strong>Ejemplo</strong>: Gastas $300,000 en Google Ads + 20 horas de tu tiempo ($20,000/hr implícito) = $700,000. Consigues 2 clientes → CAC = $350,000</li>
      <li><strong>Meta</strong>: CAC < 30% del LTV (Lifetime Value del cliente)</li>
      <li><strong>Cómo usarlo</strong>: Si CAC es muy alto, marketing ineficiente. Si muy bajo, tal vez estás sub-invirtiendo (podrías crecer más rápido)</li>
    </ul>
    
    <p><strong>6. Lifetime Value (LTV) del cliente</strong></p>
    <ul>
      <li><strong>Qué mide</strong>: Cuánto dinero genera 1 cliente durante toda su relación contigo</li>
      <li><strong>Fórmula</strong>: LTV = (Ingreso mensual promedio por cliente) × (Duración promedio en meses)</li>
      <li><strong>Ejemplo</strong>: Cliente promedio paga $180,000/mes y permanece 24 meses → LTV = $4,320,000</li>
      <li><strong>Cómo usarlo</strong>: Relación CAC/LTV debe ser > 3:1 (ganas 3 veces lo que gastas en adquirir). Si < 3:1, negocio no es sostenible</li>
    </ul>
    
    <p><strong>7. Tiempo promedio de cobranza (DSO - Days Sales Outstanding)</strong></p>
    <ul>
      <li><strong>Qué mide</strong>: Cuántos días tarda en cobrarse un gasto común desde que se emite</li>
      <li><strong>Fórmula</strong>: DSO = (Cuentas por cobrar / Ingresos diarios promedio)</li>
      <li><strong>Meta</strong>: DSO < 30 días (idealmente < 15)</li>
      <li><strong>Cómo usarlo</strong>: Si DSO sube, hay problema de cobranza → mejorar gestión de morosos, automatizar recordatorios</li>
    </ul>
    
    <p><strong>8. Satisfacción de clientes (NPS - Net Promoter Score)</strong></p>
    <ul>
      <li><strong>Qué mide</strong>: Probabilidad de que cliente te recomiende (proxy de satisfacción)</li>
      <li><strong>Cómo se pregunta</strong>: "Del 0-10, ¿qué tan probable es que recomiendes nuestro servicio a otra comunidad?"</li>
      <li><strong>Cálculo</strong>: % Promotores (9-10) - % Detractores (0-6) = NPS</li>
      <li><strong>Meta</strong>: NPS > 50 (excelente), > 30 (bueno), < 10 (problema)</li>
      <li><strong>Cómo usarlo</strong>: Encuesta trimestral. Si baja, investigar por qué, tomar acciones correctivas</li>
    </ul>
    
    <h3>Métricas Operativas (Eficiencia Interna)</h3>
    
    <p><strong>1. Horas trabajadas semanales</strong></p>
    <ul>
      <li><strong>Qué mide</strong>: Tu carga de trabajo real</li>
      <li><strong>Cómo medirlo</strong>: App de time tracking (Toggl, RescueTime) o planilla manual</li>
      <li><strong>Meta</strong>: < 50 hrs/semana sostenible, < 40 ideal</li>
      <li><strong>Cómo usarlo</strong>: Si > 55 hrs por 3+ semanas → estás saturado, necesitas ayuda o automatizar</li>
    </ul>
    
    <p><strong>2. % Tiempo en actividades productivas vs administrativas</strong></p>
    <ul>
      <li><strong>Qué mide</strong>: Eficiencia de tu tiempo</li>
      <li><strong>Productivas</strong>: Atención clientes, ventas, resolver problemas de comunidades</li>
      <li><strong>Administrativas</strong>: Facturación, emails rutinarios, contabilidad propia</li>
      <li><strong>Meta</strong>: 70%+ en productivas</li>
      <li><strong>Cómo usarlo</strong>: Si mucho tiempo en admin → automatizar o delegar esas tareas</li>
    </ul>
    
    <p><strong>3. # Emergencias / mes</strong></p>
    <ul>
      <li><strong>Qué mide</strong>: Frecuencia de situaciones urgentes</li>
      <li><strong>Meta</strong>: < 2 emergencias/mes por comunidad (promedio)</li>
      <li><strong>Cómo usarlo</strong>: Si muy alto → comunidad problemática O falta mantenimiento preventivo. Si muy bajo → excelente gestión</li>
    </ul>
    
    <p><strong>4. Tiempo de respuesta promedio (a consultas/emergencias)</strong></p>
    <ul>
      <li><strong>Qué mide</strong>: Rapidez de tu servicio</li>
      <li><strong>Cómo medirlo</strong>: Desde que cliente contacta (WhatsApp, email) hasta tu respuesta</li>
      <li><strong>Meta</strong>: < 2 horas para consultas rutinarias, < 1 hora para emergencias</li>
      <li><strong>Cómo usarlo</strong>: Si sube → estás saturado o desorganizado. Prioriza mejor o contrata ayuda</li>
    </ul>
    
    <h3>Hitos Temporales (Roadmap)</h3>
    
    <p>Define objetivos por trimestre, no solo anuales. Más fácil ajustar curso si algo no va bien.</p>
    
    <p><strong>Ejemplo de hitos para primer año (conservador)</strong>:</p>
    
    <p><strong>Q1 (Meses 1-3): Validación</strong></p>
    <ul>
      <li>Completar curso de administración ✓</li>
      <li>Constituir empresa ✓</li>
      <li>Conseguir primer cliente (1 comunidad, 10-20 unidades)</li>
      <li>Ingresos: $150,000-250,000/mes</li>
      <li>Validar operación básica sin errores críticos</li>
    </ul>
    
    <p><strong>Q2 (Meses 4-6): Tracción inicial</strong></p>
    <ul>
      <li>Conseguir clientes 2 y 3 (total 3 comunidades, 40-60 unidades)</li>
      <li>Ingresos: $500,000-700,000/mes</li>
      <li>Obtener primer testimonio/caso de éxito</li>
      <li>Sistematizar procesos (documentar en manuales)</li>
    </ul>
    
    <p><strong>Q3 (Meses 7-9): Consolidación</strong></p>
    <ul>
      <li>Conseguir clientes 4 y 5 (total 5 comunidades, 70-100 unidades)</li>
      <li>Ingresos: $900,000-1,200,000/mes</li>
      <li>Evaluar contratar primer ayuda (asistente part-time)</li>
      <li>Churn = 0 (retener todos los clientes actuales)</li>
    </ul>
    
    <p><strong>Q4 (Meses 10-12): Escalamiento</strong></p>
    <ul>
      <li>Conseguir clientes 6 y 7 (total 7 comunidades, 100-130 unidades)</li>
      <li>Ingresos: $1,200,000-1,600,000/mes</li>
      <li>Contratar asistente si no lo hiciste en Q3</li>
      <li>Evaluar transición a full-time si aún trabajas en paralelo</li>
      <li>Preparar plan año 2 (meta: 12-15 comunidades)</li>
    </ul>
    
    <h3>Cómo Usar las Métricas (No Solo Medirlas)</h3>
    
    <p><strong>1. Revisión semanal (30 min)</strong></p>
    <ul>
      <li>Horas trabajadas esta semana</li>
      <li>Emergencias atendidas</li>
      <li>Leads contactados / reuniones agendadas</li>
      <li>Pendientes críticos para próxima semana</li>
    </ul>
    
    <p><strong>2. Revisión mensual (2 hrs)</strong></p>
    <ul>
      <li>MRR vs meta</li>
      <li>Nuevos clientes vs meta</li>
      <li>Churn (perdiste algún cliente?)</li>
      <li>DSO (cobranza está funcionando?)</li>
      <li>Gastos vs presupuesto</li>
      <li>Utilidad real (ingresos - costos)</li>
    </ul>
    
    <p><strong>3. Revisión trimestral (medio día)</strong></p>
    <ul>
      <li>Hitos trimestrales: ¿cumplidos?</li>
      <li>NPS: ¿clientes satisfechos?</li>
      <li>CAC y LTV: ¿negocio es sostenible?</li>
      <li>Capacidad operativa: ¿necesito contratar?</li>
      <li>Ajustar plan del próximo trimestre según aprendizajes</li>
    </ul>
    
    <p><strong>4. Decisiones basadas en data, no intuición</strong></p>
    
    <p>Ejemplos:</p>
    <ul>
      <li><strong>Decisión</strong>: ¿Invierto en Google Ads?
        <ul>
          <li><strong>Data necesaria</strong>: CAC de otros canales, LTV promedio, presupuesto disponible</li>
          <li><strong>Criterio</strong>: Si CAC proyectado < 30% LTV → vale la pena probar</li>
        </ul>
      </li>
      <li><strong>Decisión</strong>: ¿Contrato asistente?
        <ul>
          <li><strong>Data necesaria</strong>: Horas trabajadas/semana, % tiempo en tareas admin, costo asistente</li>
          <li><strong>Criterio</strong>: Si trabajo > 50 hrs/semana Y >30% en admin → contratar libera tiempo valioso</li>
        </ul>
      </li>
      <li><strong>Decisión</strong>: ¿Subo precios?
        <ul>
          <li><strong>Data necesaria</strong>: NPS actual, precios competencia, margen actual</li>
          <li><strong>Criterio</strong>: Si NPS > 70 Y margen < 40% → hay espacio para subir 10-15% sin perder clientes</li>
        </ul>
      </li>
    </ul>
  `,
  
  examples: `
    <h3>Ejemplo ilustrativo: Dashboard mensual simple</h3>
    
    <p>Usa Google Sheets o Excel. Columnas: Mes, Comunidades, Unidades, MRR, Costos, Utilidad, Hrs trabajadas, NPS</p>
    
    <table border="1" cellpadding="5">
      <tr><th>Mes</th><th>Comunidades</th><th>Unidades</th><th>MRR</th><th>Costos</th><th>Utilidad</th><th>Hrs/sem</th><th>NPS</th></tr>
      <tr><td>Ene</td><td>0</td><td>0</td><td>$0</td><td>$400K</td><td>-$400K</td><td>20</td><td>-</td></tr>
      <tr><td>Feb</td><td>0</td><td>0</td><td>$0</td><td>$400K</td><td>-$400K</td><td>25</td><td>-</td></tr>
      <tr><td>Mar</td><td>1</td><td>15</td><td>$180K</td><td>$420K</td><td>-$240K</td><td>30</td><td>-</td></tr>
      <tr><td>Abr</td><td>1</td><td>15</td><td>$180K</td><td>$420K</td><td>-$240K</td><td>28</td><td>80</td></tr>
      <tr><td>May</td><td>2</td><td>30</td><td>$360K</td><td>$445K</td><td>-$85K</td><td>35</td><td>75</td></tr>
      <tr><td>Jun</td><td>2</td><td>30</td><td>$360K</td><td>$445K</td><td>-$85K</td><td>32</td><td>78</td></tr>
      <tr><td>Jul</td><td>3</td><td>48</td><td>$576K</td><td>$470K</td><td>$106K</td><td>40</td><td>82</td></tr>
      <tr><td>Ago</td><td>4</td><td>65</td><td>$780K</td><td>$495K</td><td>$285K</td><td>45</td><td>80</td></tr>
      <tr><td>Sep</td><td>4</td><td>65</td><td>$780K</td><td>$495K</td><td>$285K</td><td>43</td><td>85</td></tr>
      <tr><td>Oct</td><td>5</td><td>82</td><td>$984K</td><td>$520K</td><td>$464K</td><td>48</td><td>83</td></tr>
      <tr><td>Nov</td><td>6</td><td>98</td><td>$1,176K</td><td>$545K</td><td>$631K</td><td>52</td><td>81</td></tr>
      <tr><td>Dic</td><td>6</td><td>98</td><td>$1,176K</td><td>$545K</td><td>$631K</td><td>50</td><td>84</td></tr>
    </table>
    
    <p><strong>Insights de este dashboard</strong>:</p>
    <ul>
      <li><strong>Mes 7 (Jul)</strong>: Primer mes con utilidad positiva → Celebrar, validación del modelo</li>
      <li><strong>Mes 11 (Nov)</strong>: Hrs trabajadas = 52 (muy alto) → Señal: necesitas ayuda urgente</li>
      <li><strong>NPS</strong>: Consistentemente > 80 → Clientes muy satisfechos, puedes pedir referencias activamente</li>
      <li><strong>Tendencia</strong>: Crecimiento constante pero sostenible (no agresivo)</li>
    </ul>
    
    <h3>Ejemplo ilustrativo: Uso de métricas para decisión crítica</h3>
    
    <p><strong>Situación</strong>: Mes 11, trabajando 52 hrs/semana, ingresos $1,176,000, costos $545,000, utilidad $631,000</p>
    
    <p><strong>Pregunta</strong>: ¿Contrato asistente part-time ($300,000/mes)?</p>
    
    <p><strong>Análisis con métricas</strong>:</p>
    <ul>
      <li><strong>Hrs trabajadas</strong>: 52/semana → Insostenible (señal clara)</li>
      <li><strong>% tiempo admin</strong>: 40% (medido) → Alto, mucho tiempo en tareas delegables</li>
      <li><strong>Utilidad actual</strong>: $631,000/mes → Margen 53% (saludable)</li>
      <li><strong>Costo asistente</strong>: $300,000/mes → 25% de ingresos, 48% de utilidad actual</li>
      <li><strong>Hrs liberadas</strong>: ~15-20 hrs/mes → Puedo usar para conseguir 1-2 clientes más</li>
      <li><strong>Proyección</strong>: Con 1 cliente más (15 unidades × $12,000) = +$180,000 MRR</li>
    </ul>
    
    <p><strong>Decisión</strong>: SÍ, contratar</p>
    
    <p><strong>Razón (basada en números)</strong>:</p>
    <ul>
      <li>Asistente cuesta $300,000 pero libera tiempo para conseguir cliente que aporta $180,000/mes</li>
      <li>Neto: -$120,000/mes en utilidad pero -10 hrs/semana de trabajo (de 52 a 42) → mejor calidad vida</li>
      <li>En mes 2-3 con asistente, puedo conseguir segundo cliente → recupero utilidad y sigo creciendo</li>
      <li>Alternativa de no contratar: burnout en 2-3 meses, pérdida de calidad, riesgo de perder clientes</li>
    </ul>
    
    <p><strong>Resultado 3 meses después</strong>:</p>
    <ul>
      <li>Hrs trabajadas: 42/semana (reducción 20%)</li>
      <li>Nuevos clientes: +2 (total 8 comunidades, 128 unidades)</li>
      <li>MRR: $1,536,000 (+$360,000 vs antes)</li>
      <li>Costos: $845,000 (incluye asistente)</li>
      <li>Utilidad: $691,000 (vs $631,000 antes) → Ganó $60,000/mes Y trabaja menos</li>
    </ul>
    
    <p><strong>Lección</strong>: Métricas permitieron tomar decisión informada, no emocional ni intuitiva.</p>
  `,
  
  questions: [
    "¿Qué métricas son críticas para MI etapa actual del negocio?",
    "¿Estoy midiendo o solo 'sintiendo' cómo va el negocio?",
    "¿Cada cuánto reviso mis números? (semanal, mensual, trimestral)",
    "¿Qué acciones tomo cuando una métrica está en rojo?",
    "¿Cómo registro y visualizo mis métricas? (Excel, app, papel)",
    "¿Tengo metas numéricas claras para cada métrica o solo 'espero que mejore'?",
    "¿Comunico mi progreso a alguien (socio, mentor, familia) o solo lo sé yo?",
    "¿Qué haré diferente el próximo mes/trimestre basándome en los números actuales?",
    "¿Estoy celebrando cuando logro hitos o solo enfocándome en lo que falta?",
    "¿Mis decisiones están basadas en data o en intuición/miedo/esperanza?"
  ],
  
  checklist: [
    {
      id: "checklist-11-1",
      text: "Seleccionar 5-7 KPIs críticos para mi etapa actual del negocio"
    },
    {
      id: "checklist-11-2",
      text: "Definir meta numérica específica para cada KPI"
    },
    {
      id: "checklist-11-3",
      text: "Crear dashboard simple (Excel/Sheets) para registro mensual"
    },
    {
      id: "checklist-11-4",
      text: "Establecer frecuencia de revisión: semanal (operativa), mensual (financiera), trimestral (estratégica)"
    },
    {
      id: "checklist-11-5",
      text: "Configurar recordatorios de calendario para cada revisión"
    },
    {
      id: "checklist-11-6",
      text: "Definir acciones correctivas por métrica: si X está en rojo, hago Y"
    },
    {
      id: "checklist-11-7",
      text: "Definir hitos trimestrales concretos para primer año"
    },
    {
      id: "checklist-11-8",
      text: "Configurar forma de medir tiempo trabajado (app tracking o planilla manual)"
    },
    {
      id: "checklist-11-9",
      text: "Implementar encuesta NPS trimestral con clientes actuales"
    },
    {
      id: "checklist-11-10",
      text: "Calcular mi CAC y LTV actuales (o proyectados si aún no tengo clientes)"
    },
    {
      id: "checklist-11-11",
      text: "Crear gráficos de tendencia para MRR, unidades, utilidad (visual ayuda a ver patrones)"
    },
    {
      id: "checklist-11-12",
      text: "Establecer accountability: compartir progreso mensual con mentor/socio/familia"
    },
    {
      id: "checklist-11-13",
      text: "Revisar y ajustar metas cada trimestre según aprendizajes reales"
    },
    {
      id: "checklist-11-14",
      text: "Celebrar hitos alcanzados (no solo enfocarse en lo que falta)"
    }
  ]
};

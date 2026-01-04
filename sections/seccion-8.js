// SECCIÓN 8: CAPACIDADES Y LIMITACIONES OPERATIVAS
// Conocer tus límites para no sobre-comprometerse

export const seccion8 = {
  id: "seccion-8",
  number: 8,
  title: "Capacidades y Limitaciones Operativas",
  subtitle: "Conocer tus límites para no sobre-comprometerse",
  
  whyImportant: `
    <p>Uno de los errores más comunes de emprendedores novatos es <strong>sobre-comprometerse</strong>: aceptar más clientes de los que pueden atender bien, prometer servicios que no pueden cumplir, operar sin margen de error.</p>
    
    <p>Resultado: burnout, clientes insatisfechos, errores operacionales, pérdida de reputación, y paradójicamente, <strong>perder clientes por intentar ganar demasiados</strong>.</p>
    
    <p>Esta sección te ayudará a:</p>
    <ul>
      <li><strong>Calcular realistamente</strong> cuántas comunidades/unidades puedes administrar</li>
      <li><strong>Identificar cuellos de botella</strong> antes de que colapsen tu operación</li>
      <li><strong>Diseñar SLAs sostenibles</strong> (compromisos que SÍ puedes cumplir)</li>
      <li><strong>Saber cuándo decir NO</strong> (tan importante como saber cuándo decir SÍ)</li>
      <li><strong>Planificar escalamiento</strong> (cuándo y cómo contratar ayuda)</li>
    </ul>
    
    <p>Conocer tus límites no es debilidad, es <strong>profesionalismo</strong>.</p>
  `,
  
  keyConcepts: `
    <h3>Recursos Finitos que Debes Considerar</h3>
    
    <p><strong>1. Tiempo disponible</strong></p>
    <ul>
      <li>Si trabajas en paralelo (aún empleado): 15-25 horas semanales realistas</li>
      <li>Si te dedicas full-time: 40-50 horas semanales sostenibles (más es insostenible largo plazo)</li>
      <li>CRÍTICO: No todo tu tiempo es "productivo" (interrupciones, admin, descanso necesario)</li>
      <li>Regla: Solo 70-80% de tu tiempo disponible es tiempo efectivo de trabajo</li>
    </ul>
    
    <p><strong>2. Energía y salud mental</strong></p>
    <ul>
      <li>Administración de edificios tiene picos de estrés (emergencias, juntas, cierres de mes)</li>
      <li>No puedes operar al 100% de capacidad 24/7 sin quebrarte</li>
      <li>Necesitas buffer de energía para imprevistos</li>
      <li>Burnout es real: síntomas incluyen irritabilidad, errores frecuentes, desmotivación</li>
    </ul>
    
    <p><strong>3. Capital de trabajo</strong></p>
    <ul>
      <li>Aunque tengas clientes, necesitas capital para operar (software, movilización, contador)</li>
      <li>Si creces muy rápido, costos crecen antes que ingresos (desfase temporal)</li>
      <li>Ejemplo: Mes 1 ganas cliente → gastas en software → cobras en mes 2 → desfase de 30 días</li>
    </ul>
    
    <p><strong>4. Habilidades técnicas actuales</strong></p>
    <ul>
      <li>¿Dominas software de gestión? Si no, curva de aprendizaje → tiempo extra</li>
      <li>¿Sabes hacer declaraciones tributarias? Si no, dependes de contador</li>
      <li>¿Manejas conflictos bien? Si no, algunas comunidades serán muy demandantes</li>
    </ul>
    
    <h3>Metodología de Cálculo de Capacidad Operativa</h3>
    
    <p><strong>Paso 1: Inventariar tiempo disponible semanal</strong></p>
    
    <p>Ejemplo para emprendedor en paralelo (aún empleado):</p>
    <ul>
      <li>Lunes a viernes post-trabajo: 3 horas/día × 5 = 15 horas</li>
      <li>Sábado: 6 horas</li>
      <li>Domingo: 4 horas (dejar espacio para descanso)</li>
      <li>Total: 25 horas semanales</li>
      <li>Menos 20% para imprevistos/admin: <strong>20 horas efectivas</strong></li>
    </ul>
    
    <p><strong>Paso 2: Estimar tiempo por actividad típica</strong></p>
    
    <table border="1" cellpadding="5">
      <tr><th>Actividad</th><th>Frecuencia</th><th>Tiempo por comunidad</th></tr>
      <tr><td>Cálculo gastos comunes</td><td>Mensual</td><td>2-3 horas (primera vez), 1 hora (siguientes)</td></tr>
      <tr><td>Gestión de cobranza</td><td>Semanal</td><td>30 min/semana</td></tr>
      <tr><td>Coordinación proveedores</td><td>Variable</td><td>1-2 horas/mes</td></tr>
      <tr><td>Atención emergencias</td><td>Variable</td><td>1-3 horas/mes (promedio)</td></tr>
      <tr><td>Inspecciones presenciales</td><td>Mensual</td><td>1-2 horas (incluye viaje)</td></tr>
      <tr><td>Junta de vecinos</td><td>Mensual</td><td>2-3 horas (incluye preparación + asistencia)</td></tr>
      <tr><td>Reportes y comunicaciones</td><td>Semanal</td><td>1 hora/semana</td></tr>
      <tr><td>Gestión administrativa propia</td><td>Semanal</td><td>2 horas/semana (facturación, contabilidad, etc.)</td></tr>
    </table>
    
    <p><strong>Total estimado por comunidad: 12-15 horas/mes</strong></p>
    
    <p><strong>Paso 3: Calcular capacidad máxima</strong></p>
    
    <p>Con 20 horas efectivas semanales = 80 horas/mes:</p>
    <ul>
      <li>Si cada comunidad requiere 15 horas/mes → 80 / 15 = 5.3 comunidades</li>
      <li><strong>Capacidad teórica: 5 comunidades</strong></li>
    </ul>
    
    <p><strong>Paso 4: Aplicar buffer de seguridad (20-30%)</strong></p>
    
    <ul>
      <li>Capacidad teórica: 5 comunidades</li>
      <li>Buffer 30%: 5 × 0.7 = 3.5 comunidades</li>
      <li><strong>Capacidad operativa segura: 3-4 comunidades</strong></li>
    </ul>
    
    <p>Esto significa que si trabajas en paralelo, NO debes aceptar más de 4 comunidades pequeñas sin contratar ayuda o dedicarte full-time.</p>
    
    <h3>Service Level Agreements (SLA) Sostenibles</h3>
    
    <p><strong>Qué es un SLA</strong></p>
    <p>Es el compromiso formal de nivel de servicio que ofreces. Ejemplos:</p>
    <ul>
      <li>"Respondo WhatsApp en <2 horas (lunes a viernes 9-19hrs)"</li>
      <li>"Inspección presencial mensual programada"</li>
      <li>"Reporte financiero el día 5 de cada mes"</li>
    </ul>
    
    <p><strong>SLAs que puedes sostener vs SLAs que te destruirán</strong></p>
    
    <table border="1" cellpadding="5">
      <tr><th>SLA Sostenible</th><th>SLA Insostenible</th><th>Por qué</th></tr>
      <tr>
        <td>Respuesta <2 horas (horario hábil)</td>
        <td>Respuesta <30 min 24/7</td>
        <td>No puedes estar disponible siempre, necesitas dormir</td>
      </tr>
      <tr>
        <td>Emergencias atendidas <4 horas</td>
        <td>Emergencias resueltas en <1 hora</td>
        <td>Coordinar proveedor toma tiempo, tráfico, etc.</td>
      </tr>
      <tr>
        <td>Junta mensual + 2 extraordinarias/año</td>
        <td>Disponible para junta semanal</td>
        <td>Juntas semanales son excesivas y no productivas</td>
      </tr>
      <tr>
        <td>Inspección mensual programada</td>
        <td>Inspección semanal presencial</td>
        <td>No escala, demasiado tiempo en terreno</td>
      </tr>
    </table>
    
    <p><strong>Cómo comunicar limitaciones sin perder valor</strong></p>
    
    <p>❌ Mal: "No puedo estar disponible 24/7"</p>
    <p>✅ Bien: "Tengo horario de atención lunes a viernes 9-19hrs con respuesta <2 horas. Para emergencias fuera de horario, tengo red de proveedores con guardia que resuelven directamente y me informan"</p>
    
    <p>La clave: ofrecer SOLUCIÓN alternativa, no solo decir NO.</p>
    
    <h3>Automatización vs Presencialidad</h3>
    
    <p><strong>Qué DEBE ser presencial (no negociable)</strong></p>
    <ul>
      <li>Inspecciones de áreas comunes (al menos 1 al mes)</li>
      <li>Emergencias críticas (fuga agua, corte luz total, incendio)</li>
      <li>Juntas de vecinos ordinarias (presencial genera confianza)</li>
      <li>Supervisión de trabajos grandes (remodelación, proyecto nuevo)</li>
    </ul>
    
    <p><strong>Qué puede/debe ser remoto/automatizado</strong></p>
    <ul>
      <li>Cálculo de gastos comunes (software)</li>
      <li>Envío de cuentas y recordatorios (automático)</li>
      <li>Comunicación rutinaria (WhatsApp, email, app)</li>
      <li>Reportes financieros (software genera, tú revisas)</li>
      <li>Autorizaciones de gastos menores (votación online)</li>
      <li>Consultas frecuentes (chatbot básico o FAQ en app)</li>
    </ul>
    
    <p><strong>Herramientas para maximizar eficiencia</strong></p>
    <ul>
      <li>Videollamadas para reuniones no-críticas (ahorra viajes)</li>
      <li>WhatsApp Business con respuestas rápidas pre-configuradas</li>
      <li>Calendly o similar para agendar inspecciones (no ping-pong de emails)</li>
      <li>Trello o Asana para gestión de tareas (visibilidad para comité)</li>
      <li>Google Drive compartido para documentos (elimina envíos de emails)</li>
    </ul>
    
    <h3>Señales de Que Estás en Tu Límite</h3>
    
    <p>Presta atención a estas señales de alerta:</p>
    <ul>
      <li><strong>Tiempo de respuesta aumenta</strong>: Antes respondías en 1 hora, ahora tardas 6+ horas</li>
      <li><strong>Errores frecuentes</strong>: Te equivocas en cálculos, olvidas reuniones, confundes comunidades</li>
      <li><strong>Quejas de clientes</strong>: Aunque sean sutiles ("¿está muy ocupado?")</li>
      <li><strong>Trabajas fines de semana completos</strong>: Sin tiempo libre/familia hace 3+ semanas</li>
      <li><strong>Postergas tareas importantes</strong>: "Lo hago mañana" se vuelve constante</li>
      <li><strong>Estrés físico</strong>: Dolores de cabeza, mal dormir, irritabilidad</li>
    </ul>
    
    <p><strong>Qué hacer cuando alcanzas el límite</strong>:</p>
    <ul>
      <li><strong>Opción 1</strong>: NO aceptes más clientes hasta contratar ayuda</li>
      <li><strong>Opción 2</strong>: Automatiza más (invierte en mejores herramientas)</li>
      <li><strong>Opción 3</strong>: Sube precios (menos clientes, más rentabilidad por cliente)</li>
      <li><strong>Opción 4</strong>: Dedícate full-time (si aún trabajas en paralelo)</li>
      <li><strong>Opción 5</strong>: Contrata (ver siguiente sección sobre escalabilidad)</li>
    </ul>
  `,
  
  examples: `
    <h3>Ejemplo ilustrativo: Cálculo de capacidad para emprendedor full-time</h3>
    
    <p><strong>Contexto</strong>: Emprendedor se dedica 100% al negocio (dejó empleo)</p>
    
    <p><strong>Tiempo disponible</strong>:</p>
    <ul>
      <li>40 horas/semana efectivas (8 hrs/día, 5 días) = 160 hrs/mes</li>
      <li>Menos 20% admin general (contabilidad, marketing, prospección) = 128 hrs/mes operativas</li>
    </ul>
    
    <p><strong>Tiempo por comunidad</strong>: 15 hrs/mes (estimación base)</p>
    
    <p><strong>Capacidad teórica</strong>: 128 / 15 = 8.5 comunidades</p>
    
    <p><strong>Con buffer 30%</strong>: 8.5 × 0.7 = 6 comunidades</p>
    
    <p><strong>Conclusión</strong>: Operando solo, full-time, puede administrar confortablemente 6 comunidades pequeñas (10-20 unidades cada una).</p>
    
    <p><strong>Implicancia financiera</strong>:</p>
    <ul>
      <li>6 comunidades × 15 unidades promedio = 90 unidades</li>
      <li>90 unidades × $12,000/unidad = $1,080,000/mes ingresos</li>
      <li>Menos costos ~$400,000/mes = $680,000/mes utilidad</li>
      <li>¿Es suficiente para vivir? → Validar contra sueldo equivalente necesario</li>
    </ul>
    
    <h3>Ejemplo ilustrativo: Cuando sobre-comprometerse sale caro</h3>
    
    <p><strong>Caso real (anonimizado)</strong>:</p>
    
    <p>Administrador nuevo acepta 8 comunidades en 3 meses (crecimiento rápido). Está trabajando aún en paralelo (empleado).</p>
    
    <p><strong>Problemas que aparecen</strong>:</p>
    <ul>
      <li><strong>Mes 4</strong>: Error en cálculo gastos comunes de 2 comunidades (algunas personas cobradas de más)</li>
      <li><strong>Mes 5</strong>: Pierde junta importante por confusión de horarios (estaba en otra junta)</li>
      <li><strong>Mes 6</strong>: Tarda 24 horas en responder emergencia (estaba saturado), comunidad muy molesta</li>
      <li><strong>Mes 7</strong>: 2 comunidades deciden no renovar contrato (insatisfacción)</li>
    </ul>
    
    <p><strong>Consecuencias</strong>:</p>
    <ul>
      <li>Pierde 2 clientes (ingresos -$360,000/mes)</li>
      <li>Reputación dañada (reseñas negativas, boca a boca)</li>
      <li>Burnout severo (considera abandonar el negocio)</li>
    </ul>
    
    <p><strong>Qué debió hacer</strong>:</p>
    <ul>
      <li>Después del cliente 4-5, pausar adquisición</li>
      <li>Dedicarse full-time O contratar asistente part-time</li>
      <li>Solo entonces aceptar clientes 6-8</li>
    </ul>
    
    <p><strong>Moraleja</strong>: Crecer lento y bien > crecer rápido y mal.</p>
  `,
  
  questions: [
    "¿Cuántas horas semanales puedo dedicar REALMENTE al negocio (siendo honesto)?",
    "¿Qué % de ese tiempo es efectivamente productivo vs admin/imprevistos?",
    "¿Cuánto tiempo me toma cada actividad operativa? (medir, no adivinar)",
    "¿Cuál es mi capacidad máxima de comunidades/unidades sin ayuda externa?",
    "¿Qué SLAs puedo ofrecer que sean competitivos pero sostenibles?",
    "¿Dónde puedo automatizar tareas para liberar tiempo?",
    "¿Qué señales me indicarán que estoy llegando a mi límite operativo?",
    "¿Qué haré cuando alcance 80% de mi capacidad? (plan de acción)",
    "¿Tengo plan de contingencia si me enfermo o tengo emergencia personal?",
    "¿Puedo delegar alguna tarea ahora o todo depende de mí?"
  ],
  
  checklist: [
    {
      id: "checklist-8-1",
      text: "Calcular horas disponibles semanales de forma realista (no optimista)"
    },
    {
      id: "checklist-8-2",
      text: "Listar todas las actividades operativas del negocio"
    },
    {
      id: "checklist-8-3",
      text: "Medir (o estimar) tiempo requerido por cada actividad"
    },
    {
      id: "checklist-8-4",
      text: "Calcular tiempo total mensual por comunidad tipo"
    },
    {
      id: "checklist-8-5",
      text: "Determinar capacidad máxima teórica (# comunidades)"
    },
    {
      id: "checklist-8-6",
      text: "Aplicar buffer 20-30% para llegar a capacidad operativa segura"
    },
    {
      id: "checklist-8-7",
      text: "Definir SLAs que puedo sostener sin sobre-exigirme"
    },
    {
      id: "checklist-8-8",
      text: "Documentar SLAs en contrato y comunicarlos claramente a clientes"
    },
    {
      id: "checklist-8-9",
      text: "Identificar qué tareas puedo automatizar vs cuáles deben ser presenciales"
    },
    {
      id: "checklist-8-10",
      text: "Implementar herramientas de automatización (software, templates, apps)"
    },
    {
      id: "checklist-8-11",
      text: "Establecer señales de alerta de capacidad (KPIs: tiempo respuesta, errores, estrés)"
    },
    {
      id: "checklist-8-12",
      text: "Definir umbral de crecimiento: en X comunidades debo contratar ayuda"
    },
    {
      id: "checklist-8-13",
      text: "Crear plan de contingencia si no puedo operar (enfermedad, emergencia personal)"
    },
    {
      id: "checklist-8-14",
      text: "Evaluar cada 3 meses: ¿estoy operando cómodamente o al límite?"
    }
  ]
};

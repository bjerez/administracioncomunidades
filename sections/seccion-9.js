// SECCIÓN 9: CONOCIMIENTOS Y HABILIDADES REQUERIDAS
// Identificar gaps y cerrarlos antes de operar

export const seccion9 = {
  id: "seccion-9",
  number: 9,
  title: "Conocimientos y Habilidades Requeridas",
  subtitle: "Identificar gaps y cerrarlos antes de operar",
  
  whyImportant: `
    <p>Puedes tener motivación, capital y clientes potenciales, pero si <strong>no tienes las habilidades necesarias para ejecutar bien</strong>, tu negocio fracasará. La administración de edificios requiere una combinación de conocimientos técnicos y habilidades blandas.</p>
    
    <p>La buena noticia: <strong>ninguna habilidad es innata</strong>, todas se pueden aprender. La mala noticia: <strong>aprender lleva tiempo</strong>, y operar sin las habilidades críticas es peligroso (legal, financiera y reputacionalmente).</p>
    
    <p>Esta sección te ayudará a:</p>
    <ul>
      <li><strong>Autoevaluar</strong> qué sabes y qué no sabes (honestidad crítica)</li>
      <li><strong>Priorizar</strong> qué aprender primero vs qué puede esperar</li>
      <li><strong>Identificar</strong> qué puedes tercerizar vs qué DEBES dominar</li>
      <li><strong>Crear plan de aprendizaje</strong> realista y accionable</li>
      <li><strong>Evitar</strong> los "aprenderé sobre la marcha" en temas críticos (receta para desastre)</li>
    </ul>
  `,
  
  keyConcepts: `
    <h3>Conocimientos Técnicos Necesarios</h3>
    
    <p><strong>1. Legislación de copropiedad (Ley 19.537 y modificaciones)</strong></p>
    <p><strong>Por qué es crítico</strong>:</p>
    <ul>
      <li>Define derechos y obligaciones de copropietarios y administrador</li>
      <li>Regula juntas, quórums, votaciones, uso de áreas comunes</li>
      <li>Ignorarla = decisiones ilegales, nulidad de acuerdos, demandas</li>
    </ul>
    <p><strong>Qué debes dominar</strong>:</p>
    <ul>
      <li>Tipos de juntas (ordinarias vs extraordinarias)</li>
      <li>Quórums requeridos según tipo de decisión</li>
      <li>Gastos comunes: cómo se calculan, distribuyen, cobran</li>
      <li>Facultades y límites del administrador</li>
      <li>Proceso de morosidad y cobranza legal</li>
    </ul>
    <p><strong>Cómo aprenderlo</strong>:</p>
    <ul>
      <li>Curso de administración (requisito legal, cubre esto)</li>
      <li>Leer la ley completa (disponible en Biblioteca del Congreso)</li>
      <li>Casos prácticos en foros/grupos de administradores</li>
    </ul>
    
    <p><strong>2. Contabilidad básica</strong></p>
    <p><strong>Por qué es crítico</strong>:</p>
    <ul>
      <li>Debes llevar libro de caja de cada comunidad (ingreso, egreso, saldo)</li>
      <li>Generar balances mensuales y anuales</li>
      <li>Preparar presupuestos (proyección de gastos del próximo año)</li>
      <li>Errores contables = pérdida de confianza + potenciales problemas legales</li>
    </ul>
    <p><strong>Qué debes dominar</strong>:</p>
    <ul>
      <li>Principio de partida doble (debe = haber)</li>
      <li>Cuentas de activo, pasivo, patrimonio, ingresos, egresos</li>
      <li>Conciliación bancaria (cuadrar libro de caja con extracto banco)</li>
      <li>Interpretación de balances (cómo comunicar situación financiera a comité)</li>
      <li>Proyección de flujos de caja</li>
    </ul>
    <p><strong>Cómo aprenderlo</strong>:</p>
    <ul>
      <li>Curso online de contabilidad básica (Coursera, Udemy, institutos locales)</li>
      <li>Contratar contador al inicio que te enseñe mientras hace</li>
      <li>Software de gestión ayuda (automatiza mucho), pero DEBES entender qué hace</li>
    </ul>
    
    <p><strong>3. Gestión de cobranza</strong></p>
    <p><strong>Por qué es crítico</strong>:</p>
    <ul>
      <li>Morosidad es problema #1 en comunidades (afecta flujo de caja, genera inequidad)</li>
      <li>Proceso de cobranza tiene pasos legales específicos (carta simple, certificada, demanda)</li>
      <li>Hacerlo mal = comunidad sin recursos, copropietarios pagadores frustrados</li>
    </ul>
    <p><strong>Qué debes dominar</strong>:</p>
    <ul>
      <li>Proceso de cobranza extrajudicial (recordatorios, negociación, convenios de pago)</li>
      <li>Cuándo escalar a cobranza judicial</li>
      <li>Documentos requeridos para demanda</li>
      <li>Relación con abogado de cobranza</li>
      <li>Comunicación empática con morosos (balance entre firmeza y humanidad)</li>
    </ul>
    <p><strong>Cómo aprenderlo</strong>:</p>
    <ul>
      <li>Curso de administración (incluye módulo típicamente)</li>
      <li>Asesoría de abogado especialista en copropiedad</li>
      <li>Casos reales compartidos por otros administradores</li>
    </ul>
    
    <p><strong>4. Normativas de construcción y urbanismo (básico)</strong></p>
    <p><strong>Por qué es útil</strong>:</p>
    <ul>
      <li>Comunidades hacen proyectos (ampliación quincho, cierre de área, etc.)</li>
      <li>Algunos requieren permisos municipales</li>
      <li>Saber qué se puede/no se puede hacer evita problemas con municipalidad</li>
    </ul>
    <p><strong>Qué debes saber</strong>:</p>
    <ul>
      <li>Qué obras requieren permiso de edificación vs obra menor</li>
      <li>Línea de edificación, coeficiente de constructibilidad (conceptos básicos)</li>
      <li>A quién acudir cuando hay duda (arquitecto, DOM municipal)</li>
    </ul>
    <p><strong>Nivel requerido</strong>: Básico. No necesitas ser arquitecto, solo saber cuándo consultar con uno.</p>
    
    <p><strong>5. Seguros (tipos, coberturas obligatorias)</strong></p>
    <p><strong>Por qué es crítico</strong>:</p>
    <ul>
      <li>Edificios deben tener seguro de incendio (obligatorio por ley en algunos casos)</li>
      <li>Seguro de responsabilidad civil cubre daños a terceros</li>
      <li>Elegir mal = comunidad sub-asegurada, problemas en siniestro</li>
    </ul>
    <p><strong>Qué debes dominar</strong>:</p>
    <ul>
      <li>Tipos de seguros: incendio, terremoto, responsabilidad civil, todo riesgo</li>
      <li>Cómo se calcula prima (suma asegurada, deducible, vigencia)</li>
      <li>Qué cubre y qué excluye cada póliza (letra chica)</li>
      <li>Proceso de denuncia de siniestro</li>
    </ul>
    <p><strong>Cómo aprenderlo</strong>:</p>
    <ul>
      <li>Hablar con corredor de seguros especializado en edificios</li>
      <li>Leer pólizas completas (no solo resumen)</li>
      <li>Casos de uso reales (qué pasó cuando hubo incendio, inundación, etc.)</li>
    </ul>
    
    <p><strong>6. Recursos humanos básico (si hay personal común)</strong></p>
    <p><strong>Cuándo aplica</strong>:</p>
    <ul>
      <li>Comunidades con conserje, guardia, jardinero contratado directamente (no tercerizado)</li>
      <li>Como administrador, supervisas ese personal o gestionas su contratación/despido</li>
    </ul>
    <p><strong>Qué debes saber</strong>:</p>
    <ul>
      <li>Código del trabajo: contrato, jornada, remuneración, vacaciones, finiquito</li>
      <li>Cotizaciones previsionales (AFP, Isapre/Fonasa, seguro cesantía)</li>
      <li>Causales de despido (justificado vs no justificado)</li>
      <li>Relación con inspección del trabajo</li>
    </ul>
    <p><strong>Cómo aprenderlo</strong>:</p>
    <ul>
      <li>Curso básico de legislación laboral</li>
      <li>Consulta con abogado laboralista para casos específicos</li>
      <li>Software de remuneraciones (algunos contadores ofrecen este servicio)</li>
    </ul>
    
    <h3>Habilidades Blandas Críticas</h3>
    
    <p><strong>1. Resolución de conflictos</strong></p>
    <p><strong>Por qué es crítica</strong>:</p>
    <ul>
      <li>Comunidades = grupo de personas con intereses diversos → conflictos inevitables</li>
      <li>Vecino vs vecino (ruido, mascotas, estacionamiento)</li>
      <li>Copropietarios vs comité (desacuerdo en gastos, proyectos)</li>
      <li>Tu rol: mediador neutral, no juez</li>
    </ul>
    <p><strong>Qué debes desarrollar</strong>:</p>
    <ul>
      <li>Escucha activa (entender posiciones de todas las partes)</li>
      <li>Neutralidad (no tomar partido, aunque tengas opinión personal)</li>
      <li>Proponer soluciones ganar-ganar</li>
      <li>Saber cuándo escalar (conflicto legal → derivar a abogado)</li>
    </ul>
    <p><strong>Cómo desarrollarla</strong>:</p>
    <ul>
      <li>Taller de mediación/resolución de conflictos</li>
      <li>Libros: "Getting to Yes" (negociación basada en principios)</li>
      <li>Práctica: casos reales, role-playing</li>
    </ul>
    
    <p><strong>2. Comunicación efectiva (escrita y oral)</strong></p>
    <p><strong>Por qué es crítica</strong>:</p>
    <ul>
      <li>80% de tu trabajo es comunicar: reportes, emails, WhatsApp, juntas</li>
      <li>Mala comunicación = malentendidos, quejas, pérdida de credibilidad</li>
      <li>Buena comunicación = confianza, eficiencia, menos conflictos</li>
    </ul>
    <p><strong>Qué debes desarrollar</strong>:</p>
    <ul>
      <li><strong>Escrita</strong>: claridad, concisión, tono profesional pero cercano, ortografía impecable</li>
      <li><strong>Oral</strong>: hablar en juntas con confianza, explicar conceptos complejos de forma simple</li>
      <li><strong>Escucha</strong>: entender qué realmente preguntan/necesitan, no solo lo literal</li>
    </ul>
    <p><strong>Cómo desarrollarla</strong>:</p>
    <ul>
      <li>Practicar escritura de emails/reportes, pedir feedback</li>
      <li>Toastmasters o similar (hablar en público)</li>
      <li>Grabarte en videollamadas, identificar muletillas, mejorar</li>
    </ul>
    
    <p><strong>3. Negociación (proveedores, copropietarios)</strong></p>
    <p><strong>Por qué es crítica</strong>:</p>
    <ul>
      <li>Negocias precios con proveedores (ahorro para comunidad)</li>
      <li>Negocias convenios de pago con morosos (recuperar deuda sin juicio)</li>
      <li>Negocias con comité cuando hay desacuerdo en decisión</li>
    </ul>
    <p><strong>Qué debes desarrollar</strong>:</p>
    <ul>
      <li>Preparación: investigar antes de negociar (precios mercado, alternativas)</li>
      <li>BATNA (Best Alternative To Negotiated Agreement): siempre tener plan B</li>
      <li>Empatía: entender intereses del otro lado, no solo posiciones</li>
      <li>Firmeza con respeto: defender intereses de comunidad sin agresividad</li>
    </ul>
    <p><strong>Cómo desarrollarla</strong>:</p>
    <ul>
      <li>Curso de negociación (ej: basado en método Harvard)</li>
      <li>Práctica: negocia en compras personales, observa técnicas</li>
      <li>Role-playing con amigo/colega</li>
    </ul>
    
    <p><strong>4. Liderazgo sin autoridad formal</strong></p>
    <p><strong>Por qué es crítica</strong>:</p>
    <ul>
      <li>No eres "jefe" de nadie, pero debes coordinar comité, proveedores, copropietarios</li>
      <li>Influencia basada en credibilidad, no en poder jerárquico</li>
      <li>Debes inspirar confianza y lograr que sigan tus recomendaciones</li>
    </ul>
    <p><strong>Qué debes desarrollar</strong>:</p>
    <ul>
      <li>Credibilidad técnica (dominar tu oficio)</li>
      <li>Integridad (cumplir lo que prometes, ser transparente)</li>
      <li>Empatía (conectar con necesidades emocionales, no solo racionales)</li>
      <li>Visión (mostrar hacia dónde puede ir la comunidad con buena gestión)</li>
    </ul>
    <p><strong>Cómo desarrollarla</strong>:</p>
    <ul>
      <li>Libros: "Leaders Eat Last" (Simon Sinek), "Influencer" (Patterson)</li>
      <li>Mentores: administradores experimentados, observar cómo lideran</li>
      <li>Auto-reflexión: después de cada junta, qué funcionó/no funcionó</li>
    </ul>
    
    <p><strong>5. Gestión de crisis y emergencias</strong></p>
    <p><strong>Por qué es crítica</strong>:</p>
    <ul>
      <li>Emergencias ocurren (fuga agua, corte luz, incendio, accidente)</li>
      <li>En crisis, la gente busca liderazgo: alguien que tome control, comunique, resuelva</li>
      <li>Tu reacción en crisis define tu reputación más que meses de gestión rutinaria</li>
    </ul>
    <p><strong>Qué debes desarrollar</strong>:</p>
    <ul>
      <li>Calma bajo presión (no entrar en pánico)</li>
      <li>Toma de decisiones rápida con información incompleta</li>
      <li>Comunicación clara en situaciones caóticas</li>
      <li>Protocolos pre-definidos (checklist para cada tipo de emergencia)</li>
    </ul>
    <p><strong>Cómo desarrollarla</strong>:</p>
    <ul>
      <li>Simulacros mentales: "¿Qué haría si...?"</li>
      <li>Crear manual de emergencias (contactos, pasos, responsables)</li>
      <li>Cursos de primeros auxilios, manejo de emergencias</li>
    </ul>
    
    <p><strong>6. Paciencia y empatía</strong></p>
    <p><strong>Por qué es crítica</strong>:</p>
    <ul>
      <li>Trabajarás con todo tipo de personas: demandantes, pasivas, conflictivas, colaborativas</li>
      <li>Algunos copropietarios serán irrazonables, otros adorables</li>
      <li>Tu trabajo es servir a TODOS con profesionalismo, sin favoritismos</li>
    </ul>
    <p><strong>Qué debes desarrollar</strong>:</p>
    <ul>
      <li>Empatía: entender contexto de cada persona (adulto mayor solo, familia con niños pequeños, etc.)</li>
      <li>Paciencia: responder la misma pregunta 10 veces sin mostrar frustración</li>
      <li>Desapego emocional: no tomarte críticas como ataques personales</li>
    </ul>
    <p><strong>Cómo desarrollarla</strong>:</p>
    <ul>
      <li>Mindfulness, meditación (gestión emocional)</li>
      <li>Recordar: no es personal, es profesional</li>
      <li>Tener válvula de escape (deporte, hobby) para descargar estrés</li>
    </ul>
  `,
  
  examples: `
    <h3>Ejemplo ilustrativo: Gap de conocimiento que costó caro</h3>
    
    <p><strong>Situación</strong>: Administrador nuevo no domina legislación de copropiedad</p>
    
    <p><strong>Error</strong>:</p>
    <ul>
      <li>Convoca junta extraordinaria para aprobar gasto grande (remodelación quincho)</li>
      <li>Logra quórum simple (50% + 1 presentes)</li>
      <li>Aprueba proyecto, inicia obras</li>
    </ul>
    
    <p><strong>Problema</strong>:</p>
    <ul>
      <li>Ley 19.537 requiere quórum calificado (2/3) para gastos que excedan cierto % del presupuesto anual</li>
      <li>Acuerdo es nulo</li>
      <li>Copropietarios que votaron en contra demandan</li>
    </ul>
    
    <p><strong>Consecuencia</strong>:</p>
    <ul>
      <li>Detención de obras</li>
      <li>Conflicto legal</li>
      <li>Pérdida de credibilidad</li>
      <li>Comunidad termina contrato</li>
    </ul>
    
    <p><strong>Lección</strong>: NO operes sin dominar legislación básica. Inversión en curso de administración se paga sola evitando un solo error como este.</p>
    
    <h3>Ejemplo ilustrativo: Habilidad blanda salvó situación crítica</h3>
    
    <p><strong>Situación</strong>: Conflicto entre dos vecinos por ruido nocturno (fiestas vs bebé que no duerme)</p>
    
    <p><strong>Vecino A</strong>: Joven profesional, hace fiestas viernes/sábado hasta 2 AM</p>
    <p><strong>Vecino B</strong>: Familia con bebé recién nacido, necesita silencio</p>
    
    <p><strong>Conflicto escala</strong>: Gritos, amenazas, emails al comité demandando "solución inmediata"</p>
    
    <p><strong>Administrador interviene (habilidad: mediación)</strong>:</p>
    <ul>
      <li>Reúne a ambos por separado primero (escucha empática)</li>
      <li>Entiende: A no sabía del bebé, B está al límite por falta de sueño</li>
      <li>Propone solución ganar-ganar:
        <ul>
          <li>A avisa con 48hrs antes si hay fiesta (máximo 2 al mes)</li>
          <li>A termina fiesta a medianoche (no 2 AM)</li>
          <li>B tolera esas 2 fiestas mensuales con aviso previo</li>
          <li>A ofrece regalar audífonos con cancelación de ruido a B</li>
        </ul>
      </li>
    </ul>
    
    <p><strong>Resultado</strong>:</p>
    <ul>
      <li>Ambos aceptan</li>
      <li>Conflicto resuelto sin escalamiento legal</li>
      <li>Administrador reconocido por ambos como profesional y justo</li>
    </ul>
    
    <p><strong>Lección</strong>: Habilidades blandas (mediación, empatía, creatividad) son tan valiosas como conocimientos técnicos.</p>
  `,
  
  questions: [
    "¿Qué conozco BIEN vs qué desconozco en materia legal/contable/técnica?",
    "¿Qué puedo aprender rápido (semanas) vs qué requiere meses de estudio/práctica?",
    "¿Qué conocimientos son CRÍTICOS (debo dominar) vs ÚTILES (puedo tercerizar)?",
    "¿Dónde están mis mayores debilidades en habilidades blandas?",
    "¿Tengo plan concreto para cerrar cada gap identificado?",
    "¿Puedo operar mientras aprendo o debo aprender ANTES de operar?",
    "¿Dónde consigo mentoría o acompañamiento de administradores experimentados?",
    "¿Qué inversión en capacitación estoy dispuesto a hacer? (tiempo y dinero)",
    "¿Cómo mediré mi progreso en cada habilidad?",
    "¿Cuándo estaré 'listo' para operar de forma independiente?"
  ],
  
  checklist: [
    {
      id: "checklist-9-1",
      text: "Autoevaluar conocimientos técnicos: legislación, contabilidad, seguros, RRHH (escala 1-5)"
    },
    {
      id: "checklist-9-2",
      text: "Autoevaluar habilidades blandas: comunicación, negociación, liderazgo, mediación (escala 1-5)"
    },
    {
      id: "checklist-9-3",
      text: "Identificar gaps críticos (puntaje <3 en conocimientos obligatorios)"
    },
    {
      id: "checklist-9-4",
      text: "Priorizar: qué aprender/mejorar primero (orden de criticidad)"
    },
    {
      id: "checklist-9-5",
      text: "Buscar recursos de aprendizaje para cada gap: cursos, libros, mentores"
    },
    {
      id: "checklist-9-6",
      text: "Inscribirse en curso de administración de edificios (requisito legal)"
    },
    {
      id: "checklist-9-7",
      text: "Completar curso y obtener certificación"
    },
    {
      id: "checklist-9-8",
      text: "Leer Ley 19.537 completa al menos 2 veces"
    },
    {
      id: "checklist-9-9",
      text: "Tomar curso básico de contabilidad (online o presencial)"
    },
    {
      id: "checklist-9-10",
      text: "Practicar con casos ficticios: libro de caja, balance, presupuesto"
    },
    {
      id: "checklist-9-11",
      text: "Buscar mentor: administrador experimentado que pueda aconsejar"
    },
    {
      id: "checklist-9-12",
      text: "Definir si contrato ayuda externa para gaps no-críticos (contador, abogado)"
    },
    {
      id: "checklist-9-13",
      text: "Establecer plan de capacitación continua (qué aprenderé en próximos 6-12 meses)"
    },
    {
      id: "checklist-9-14",
      text: "Evaluar progreso cada 3 meses: reevaluar en escala 1-5"
    }
  ]
};

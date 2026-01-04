// SECCIÓN 6: RED DE PROVEEDORES
// Construir ecosistema de servicios complementarios

export const seccion6 = {
  id: "seccion-6",
  number: 6,
  title: "Red de Proveedores",
  subtitle: "Construir ecosistema de servicios complementarios",
  
  whyImportant: `
    <p>Como administrador, NO ejecutas todos los servicios directamente. Tu rol es <strong>coordinador, intermediario y garante de calidad</strong>. Las comunidades necesitan servicios anexos constantemente: jardinería, gasfitería, electricidad, mantención de cercos, etc.</p>
    
    <p>Tener una red de proveedores confiables es crítico porque:</p>
    <ul>
      <li><strong>Tu reputación depende de ellos</strong>: Si el jardinero que recomendaste hace mal trabajo, TÚ quedas mal con la comunidad</li>
      <li><strong>Velocidad de respuesta</strong>: En emergencias (ej: fuga de agua), necesitas un gasfitero que llegue en <2 horas, no en 3 días</li>
      <li><strong>Pricing competitivo</strong>: Proveedores con los que trabajas regularmente te dan mejores tarifas (beneficio para tus clientes)</li>
      <li><strong>Diferenciador comercial</strong>: "Tengo red de proveedores verificados con tarifas preferenciales" es un argumento de venta</li>
      <li><strong>Generación de ingresos adicional</strong>: Algunos administradores cobran comisión sobre trabajos gestionados (opcional)</li>
    </ul>
    
    <p>Construir esta red ANTES de conseguir tu primer cliente te da ventaja competitiva y te permite operar desde día 1 sin improvisar.</p>
  `,
  
  keyConcepts: `
    <h3>Servicios Típicos Demandados por Comunidades</h3>
    
    <p><strong>Servicios recurrentes (mensuales/semanales)</strong></p>
    <ul>
      <li><strong>Jardinería y paisajismo</strong>: Corte de pasto, poda, mantención de áreas verdes</li>
      <li><strong>Aseo de áreas comunes</strong>: Limpieza de pasillos, escaleras, estacionamientos</li>
      <li><strong>Mantención de piscina</strong>: Limpieza, químicos, equipos</li>
      <li><strong>Vigilancia/seguridad</strong>: Guardias, rondas nocturnas (si aplica)</li>
      <li><strong>Mantención preventiva</strong>: Revisión de cercos eléctricos, portones, ascensores</li>
    </ul>
    
    <p><strong>Servicios esporádicos (a demanda)</strong></p>
    <ul>
      <li><strong>Gasfitería</strong>: Fugas, destapes, reparaciones sanitarias</li>
      <li><strong>Electricidad</strong>: Fallas eléctricas, instalaciones, mantención tableros</li>
      <li><strong>Pintura</strong>: Fachadas, áreas comunes, rejas</li>
      <li><strong>Cerrajería</strong>: Duplicado llaves, cambio chapas, portones</li>
      <li><strong>Fumigación/control de plagas</strong>: Insectos, roedores</li>
      <li><strong>Albañilería</strong>: Reparaciones menores, grietas, humedad</li>
      <li><strong>Vidriería</strong>: Reemplazo de vidrios rotos</li>
      <li><strong>Techado</strong>: Goteras, impermeabilización</li>
    </ul>
    
    <p><strong>Servicios especializados (ocasionales)</strong></p>
    <ul>
      <li><strong>Instalación/mantención de equipos</strong>: Calefacción, termos, extractores</li>
      <li><strong>Proyectos de mejora</strong>: Quincho nuevo, juegos infantiles, remodelaciones</li>
      <li><strong>Asesoría legal</strong>: Cobranza judicial, conflictos entre copropietarios</li>
      <li><strong>Servicios de mudanza/bodegaje</strong>: Si la comunidad tiene bodegas</li>
    </ul>
    
    <h3>Estrategias para Encontrar Proveedores Confiables</h3>
    
    <p><strong>1. Marketplaces y plataformas digitales</strong></p>
    <ul>
      <li>GetNinjas, Habitissimo, Yapo (sección servicios)</li>
      <li>Ventajas: Amplia oferta, reviews de otros clientes, fácil comparar precios</li>
      <li>Desventajas: Calidad variable, no siempre están disponibles, cobran comisión alta (ellos, no tú)</li>
      <li>Cómo usar: Buscar, contactar 3-5 candidatos, pedir cotización y referencias</li>
    </ul>
    
    <p><strong>2. Referencias de otros administradores</strong></p>
    <ul>
      <li>Networkea en grupos de Facebook/LinkedIn de administradores</li>
      <li>Pregunta directamente: "¿Quién recomiendas para jardinería en Chicureo?"</li>
      <li>Ventajas: Pre-validados por pares, probablemente tienen experiencia en condominios</li>
      <li>Desventajas: Puede que estén saturados o no atiendan tu zona</li>
    </ul>
    
    <p><strong>3. Búsqueda directa local</strong></p>
    <ul>
      <li>Google Maps: "gasfitería Chicureo", revisar reviews y calificaciones</li>
      <li>Redes sociales: Grupos de barrio en Facebook, Instagram de servicios locales</li>
      <li>Boca a boca: Pregunta en ferreterías, viveros, tiendas de materiales de la zona</li>
      <li>Ventajas: Conocen la zona, tiempos de desplazamiento cortos</li>
    </ul>
    
    <p><strong>4. Licitaciones pequeñas</strong></p>
    <ul>
      <li>Para servicios recurrentes (jardinería, aseo), puedes hacer mini-licitación</li>
      <li>Defines alcance, compartes con 3-5 proveedores, evalúas propuestas</li>
      <li>Ventajas: Competencia de precios, formalizas expectativas desde el inicio</li>
      <li>Desventajas: Toma tiempo, no apto para emergencias</li>
    </ul>
    
    <p><strong>5. Pruebas piloto con comunidades propias</strong></p>
    <ul>
      <li>Si vives en condominio, prueba proveedores primero en tu propia comunidad</li>
      <li>Evalúa calidad, puntualidad, precio antes de recomendar a clientes</li>
      <li>Ventajas: Validación de primera mano, reduces riesgo</li>
    </ul>
    
    <h3>Criterios de Evaluación de Proveedores</h3>
    
    <p><strong>Criterios técnicos</strong></p>
    <ul>
      <li><strong>Certificaciones y permisos</strong>: SEC para electricistas, registro en superintendencia si aplica</li>
      <li><strong>Experiencia</strong>: Años en el rubro, especialización en condominios (ideal)</li>
      <li><strong>Equipamiento</strong>: Herramientas propias, vehículo (importante para rapidez)</li>
      <li><strong>Capacidad</strong>: ¿Puede atender múltiples comunidades simultáneamente?</li>
      <li><strong>Seguros</strong>: Responsabilidad civil, seguro de accidentes de trabajadores</li>
    </ul>
    
    <p><strong>Criterios de servicio</strong></p>
    <ul>
      <li><strong>Puntualidad</strong>: Llega a la hora acordada (crítico)</li>
      <li><strong>Comunicación</strong>: Responde rápido, informa avances, es claro</li>
      <li><strong>Garantía</strong>: Ofrece garantía en trabajos (30-90 días típico)</li>
      <li><strong>Post-servicio</strong>: Vuelve si hay problema sin cobrar extra</li>
      <li><strong>Trato con residentes</strong>: Amable, profesional, no invasivo</li>
    </ul>
    
    <p><strong>Criterios de pricing</strong></p>
    <ul>
      <li><strong>Competitividad</strong>: Precio dentro del rango de mercado (ni el más caro ni el más barato)</li>
      <li><strong>Transparencia</strong>: Cotiza detallado (mano de obra + materiales separado)</li>
      <li><strong>Flexibilidad</strong>: Dispuesto a dar descuento por volumen o contratos recurrentes</li>
      <li><strong>Sin cobros ocultos</strong>: Lo cotizado es lo cobrado (no sorpresas al final)</li>
    </ul>
    
    <p><strong>Referencias verificables</strong></p>
    <ul>
      <li>Pide al menos 3 referencias de trabajos recientes</li>
      <li><strong>CRÍTICO</strong>: Llama a esas referencias y pregunta:
        <ul>
          <li>¿Quedaron conformes con el trabajo?</li>
          <li>¿Cumplió plazos?</li>
          <li>¿Hubo problemas? ¿Cómo los resolvió?</li>
          <li>¿Lo volverían a contratar?</li>
        </ul>
      </li>
      <li>Si el proveedor no puede dar referencias, red flag</li>
    </ul>
    
    <h3>Modelos de Relación Comercial con Proveedores</h3>
    
    <p><strong>Opción 1: Comisión sobre trabajos gestionados</strong></p>
    <ul>
      <li>Cobras 10-20% de comisión sobre el valor del trabajo</li>
      <li>Ejemplo: Jardín cuesta $200,000, cobras $20,000 de comisión</li>
      <li>Ventajas: Ingresos adicionales, incentivo a buscar buen precio para comunidad</li>
      <li>Desventajas: Puede generar conflicto de interés (¿recomiendas por calidad o por comisión?)</li>
      <li>Transparencia: DEBES informar a la comunidad si cobras comisión (ética)</li>
    </ul>
    
    <p><strong>Opción 2: Tarifa fija mensual por disponibilidad preferente</strong></p>
    <ul>
      <li>Proveedor paga $X/mes por ser "proveedor preferente"</li>
      <li>A cambio, lo recomiendas prioritariamente y le das volumen</li>
      <li>Ventajas: Ingreso predecible, proveedor comprometido</li>
      <li>Desventajas: Puede reducir competencia, debes justificar siempre su elección</li>
    </ul>
    
    <p><strong>Opción 3: Solo referencia sin cobro</strong></p>
    <ul>
      <li>No cobras nada, solo facilitas el contacto</li>
      <li>Ventajas: Cero conflicto de interés, máxima transparencia</li>
      <li>Desventajas: Pierdes ingreso adicional potencial</li>
      <li>Cuándo usarla: Si tu diferenciador es "total transparencia, cero comisiones"</li>
    </ul>
    
    <p><strong>Opción 4: Convenio de descuento para comunidades</strong></p>
    <ul>
      <li>Negocias con proveedor: "Te doy volumen (10 comunidades), dame 15% descuento"</li>
      <li>Proveedor da descuento directo a comunidades, no a ti</li>
      <li>Ventajas: Beneficio real para comunidades, no cobras comisión pero generas valor</li>
      <li>Desventajas: Requiere volumen para tener poder de negociación</li>
    </ul>
    
    <p><strong>Recomendación</strong>: Al inicio, usa Opción 3 (sin comisión) para construir reputación. Cuando tengas 5+ comunidades, negocia Opción 4 (descuentos por volumen). Opción 1 y 2 úsalas solo si eres transparente con clientes.</p>
    
    <h3>Gestión de Riesgos con Proveedores</h3>
    
    <p><strong>Riesgo 1: Proveedor incumple o hace mal trabajo</strong></p>
    <p>Mitigación:</p>
    <ul>
      <li>SIEMPRE ten 2-3 proveedores por rubro (backup)</li>
      <li>Define en contrato/orden de trabajo: alcance, plazo, garantía, penalidades</li>
      <li>Supervisa trabajos (fotos antes/después, visitas presenciales si es crítico)</li>
      <li>No pagues 100% adelantado, máximo 50% (saldo contra entrega conforme)</li>
    </ul>
    
    <p><strong>Riesgo 2: Problemas de calidad post-servicio</strong></p>
    <p>Mitigación:</p>
    <ul>
      <li>Cláusula de garantía mínima 30 días en orden de trabajo</li>
      <li>Si problema es grave, cambia de proveedor y documenta por qué</li>
      <li>Comunica a comunidad transparentemente qué pasó y cómo lo solucionaste</li>
    </ul>
    
    <p><strong>Riesgo 3: Dependencia de un solo proveedor por rubro</strong></p>
    <p>Mitigación:</p>
    <ul>
      <li>Nunca trabajes solo con 1 opción</li>
      <li>Mínimo 2 opciones por rubro crítico (gasfitería, electricidad)</li>
      <li>Testea proveedores nuevos periódicamente (1-2 por trimestre)</li>
    </ul>
    
    <p><strong>Riesgo 4: Proveedor sube precios abruptamente</strong></p>
    <p>Mitigación:</p>
    <ul>
      <li>Para servicios recurrentes, firma contrato 6-12 meses con precio fijo</li>
      <li>Cláusula de reajuste atada a IPC o similar (no discrecional)</li>
      <li>Si sube mucho, activa competencia (cotiza con otros)</li>
    </ul>
  `,
  
  examples: `
    <h3>Ejemplo ilustrativo: Construcción de red de jardinería paso a paso</h3>
    
    <p><strong>Paso 1: Identificación de candidatos (Semana 1)</strong></p>
    <ul>
      <li>Búsqueda en Google Maps "jardinería Chicureo": 8 resultados con buenas reseñas</li>
      <li>Pregunta en grupo Facebook "Vecinos de Chicureo": 5 recomendaciones</li>
      <li>Marketplace GetNinjas: 10 perfiles activos en la zona</li>
      <li>Total: 15 candidatos iniciales</li>
    </ul>
    
    <p><strong>Paso 2: Filtrado inicial (Semana 2)</strong></p>
    <ul>
      <li>Criterios: Reviews 4+ estrellas, mínimo 2 años experiencia, equipamiento propio</li>
      <li>Contactar a 6 que cumplen criterios</li>
      <li>Pedir cotización para comunidad ficticia: 15 casas, 2,000m² áreas verdes, corte quincenal</li>
      <li>5 responden (1 no contestó)</li>
    </ul>
    
    <p><strong>Paso 3: Evaluación de propuestas (Semana 3)</strong></p>
    <table border="1" cellpadding="5">
      <tr><th>Proveedor</th><th>Precio/mes</th><th>Incluye</th><th>Referencias</th><th>Disponibilidad</th></tr>
      <tr><td>A</td><td>$180,000</td><td>Corte, poda, retiro desechos</td><td>3 verificadas</td><td>Inmediata</td></tr>
      <tr><td>B</td><td>$150,000</td><td>Solo corte</td><td>1 verificada</td><td>2 semanas</td></tr>
      <tr><td>C</td><td>$200,000</td><td>Corte, poda, fertilización</td><td>2 verificadas</td><td>Inmediata</td></tr>
      <tr><td>D</td><td>$160,000</td><td>Corte, poda</td><td>3 verificadas</td><td>1 semana</td></tr>
      <tr><td>E</td><td>$220,000</td><td>Full (corte, poda, ferti, control plagas)</td><td>4 verificadas</td><td>Inmediata</td></tr>
    </table>
    
    <p><strong>Paso 4: Selección y negociación (Semana 4)</strong></p>
    <ul>
      <li>Descarto B (muy básico) y E (muy caro para comunidad pequeña)</li>
      <li>Llamo referencias de A, C, D → todas positivas</li>
      <li>Selecciono <strong>A como principal</strong> (buen precio, completo, referencias sólidas)</li>
      <li>Selecciono <strong>D como backup</strong> (similar oferta, precio competitivo)</li>
      <li>Negocio con A: "Si te traigo 3+ comunidades, ¿me das 10% descuento?" → Acepta</li>
    </ul>
    
    <p><strong>Paso 5: Prueba piloto (Mes 2)</strong></p>
    <ul>
      <li>Consigo primera comunidad cliente</li>
      <li>Coordino con proveedor A: visita, cotización real, inicio servicio</li>
      <li>Superviso primer mes: puntualidad, calidad, comunicación</li>
      <li>Resultado: Excelente → Confirmo como proveedor principal</li>
      <li>Ahora busco proveedores para otros rubros (gasfitería, electricidad)</li>
    </ul>
    
    <h3>Ejemplo ilustrativo: Manejo de emergencia con proveedor</h3>
    
    <p><strong>Situación</strong>: Sábado 22:00hrs, fuga de agua en comunidad (cañería rota en estacionamiento subterráneo)</p>
    
    <p><strong>Acción inmediata</strong>:</p>
    <ul>
      <li>Llamo a gasfitero principal → No contesta (está en otra emergencia)</li>
      <li>Llamo a gasfitero backup → Contesta, puede ir en 1 hora</li>
      <li>Mientras, instruyo a conserje: cerrar llave de paso general para contener daño</li>
      <li>Gasfitero llega, repara provisoriamente (fuga detenida)</li>
      <li>Lunes agenda reparación definitiva</li>
    </ul>
    
    <p><strong>Aprendizaje</strong>: Por eso SIEMPRE debes tener backup. Si solo tuvieras 1 gasfitero, la comunidad estaría inundada hasta el lunes.</p>
  `,
  
  questions: [
    "¿Qué servicios son CRÍTICOS vs deseables para mi tipo de comunidades objetivo?",
    "¿Cobro comisión por gestionar proveedores o solo facilito contacto sin cobro?",
    "¿Prefiero contratos exclusivos con 1 proveedor por rubro o trabajo con varios?",
    "¿Cómo valido calidad de un proveedor ANTES de recomendarlo a clientes?",
    "¿Cuántos proveedores por rubro necesito tener para operar con tranquilidad?",
    "¿Qué hago si un proveedor que recomendé hace mal trabajo? (plan de contingencia)",
    "¿Tengo poder de negociación suficiente para conseguir descuentos por volumen?",
    "¿Cómo documento y comunico a comunidades la red de proveedores que tengo?",
    "¿Debo tener contratos formales con proveedores o solo acuerdos verbales?",
    "¿Qué información mínima necesito de cada proveedor para mi base de datos?"
  ],
  
  checklist: [
    {
      id: "checklist-6-1",
      text: "Listar servicios que comunidades en mi zona demandan frecuentemente"
    },
    {
      id: "checklist-6-2",
      text: "Priorizar servicios en: críticos, importantes, deseables"
    },
    {
      id: "checklist-6-3",
      text: "Definir criterios de evaluación de proveedores por cada rubro"
    },
    {
      id: "checklist-6-4",
      text: "Buscar 3+ candidatos proveedores para cada rubro crítico"
    },
    {
      id: "checklist-6-5",
      text: "Solicitar cotizaciones y referencias de cada candidato"
    },
    {
      id: "checklist-6-6",
      text: "Verificar referencias llamando a clientes anteriores"
    },
    {
      id: "checklist-6-7",
      text: "Realizar prueba piloto con al menos 1 proveedor por rubro crítico"
    },
    {
      id: "checklist-6-8",
      text: "Seleccionar proveedor principal por cada rubro"
    },
    {
      id: "checklist-6-9",
      text: "Seleccionar proveedor backup por cada rubro crítico"
    },
    {
      id: "checklist-6-10",
      text: "Definir modelo comercial: ¿cobro comisión, tarifa, o solo referencia?"
    },
    {
      id: "checklist-6-11",
      text: "Negociar condiciones: precios, garantías, tiempos de respuesta"
    },
    {
      id: "checklist-6-12",
      text: "Crear base de datos de proveedores con toda su info de contacto"
    },
    {
      id: "checklist-6-13",
      text: "Definir SLA básico con cada proveedor (tiempos, garantías, comunicación)"
    },
    {
      id: "checklist-6-14",
      text: "Preparar plantillas de órdenes de trabajo por tipo de servicio"
    },
    {
      id: "checklist-6-15",
      text: "Documentar procedimiento de emergencias (a quién llamar primero, backup, etc.)"
    },
    {
      id: "checklist-6-16",
      text: "Crear presentación/catálogo de proveedores para mostrar a comunidades"
    }
  ]
};

# Guía Completa para Emprendimiento en Administración de Edificios

## 📋 Descripción

Webapp interactiva que te acompaña paso a paso en el proceso de lanzar tu negocio de administración de edificios en Chile, específicamente orientado a condominios pequeños en la zona de Chicureo, RM.

## 🚀 Cómo Usar

### Opción 1: Abrir directamente desde el disco (Recomendado)

1. Descarga todo el directorio `guia-admin-edificios`
2. Abre el archivo `index.html` en tu navegador web
3. ¡Listo! La aplicación funciona completamente offline

### Opción 2: Servidor web local

Si experimentas problemas con ES6 modules al abrir directamente:

**Con Python 3:**
```bash
cd guia-admin-edificios
python -m http.server 8000
```
Luego abre: http://localhost:8000

**Con Python 2:**
```bash
cd guia-admin-edificios
python -m SimpleHTTPServer 8000
```

**Con Node.js (npx):**
```bash
cd guia-admin-edificios
npx serve
```

### Opción 3: Hosting gratuito

Puedes subir la carpeta completa a:
- **GitHub Pages**: Gratuito, muy simple
- **Netlify**: Arrastra la carpeta y publica
- **Vercel**: Similar a Netlify

## 📁 Estructura del Proyecto

```
guia-admin-edificios/
├── index.html          # Página principal
├── app.js              # Lógica de la aplicación
├── styles.css          # Estilos profesionales
├── sections/           # Secciones modulares
│   ├── seccion-0.js    # Fundamentos del Emprendimiento
│   ├── seccion-1.js    # Marco Legal y Regulatorio
│   ├── seccion-2.js    # Análisis de Costos
│   ├── seccion-3.js    # Evaluación de Software
│   ├── seccion-4.js    # Modelo de Negocio y Pricing
│   ├── seccion-5.js    # Diferenciación
│   └── seccion-6.js    # (Próximamente...)
└── README.md           # Este archivo
```

## ✨ Características

### Sistema Modular
- **Carga dinámica**: El webapp detecta automáticamente qué secciones están disponibles
- **Agregar secciones**: Solo coloca `seccion-X.js` en `/sections/` y se cargará automáticamente
- **Sin reconfiguración**: No necesitas modificar código para agregar nuevas secciones

### Gestión de Progreso
- **Auto-guardado**: Tu progreso se guarda automáticamente en el navegador
- **Exportar/Importar**: Guarda backup de tu progreso en formato JSON
- **Indicadores visuales**: Progreso por sección y global
- **4 estados**: No atendido, Atendiendo, Atendido, Descartado

### Diseño
- **Responsive**: Funciona en desktop, tablet y móvil
- **Profesional**: Diseño sobrio y elegante
- **Sin distracciones**: Enfocado en contenido educativo

## 🔧 Agregar Nuevas Secciones

Para agregar una nueva sección (ej: sección 6):

1. Crea el archivo `sections/seccion-6.js` con esta estructura:

```javascript
export const seccion6 = {
  id: "seccion-6",
  number: 6,
  title: "Título de la Sección",
  subtitle: "Subtítulo descriptivo",
  
  whyImportant: `<p>Contenido HTML...</p>`,
  keyConcepts: `<p>Contenido HTML...</p>`,
  examples: `<p>Contenido HTML...</p>`,
  
  questions: [
    "Pregunta 1",
    "Pregunta 2"
  ],
  
  checklist: [
    {
      id: "checklist-6-1",
      text: "Descripción del ítem"
    }
  ]
};
```

2. Guarda el archivo
3. Recarga la página
4. ¡La sección aparecerá automáticamente!

## 💾 Backup de Progreso

### Exportar
1. Haz clic en "Exportar Progreso" en el sidebar
2. Se descargará un archivo JSON con tu progreso
3. Guárdalo en un lugar seguro

### Importar
1. Haz clic en "Importar Progreso"
2. Selecciona el archivo JSON previamente exportado
3. Tu progreso se restaurará

## 🌐 Compatibilidad

- ✅ Chrome/Edge (versión 90+)
- ✅ Firefox (versión 88+)
- ✅ Safari (versión 14+)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

**Nota**: Requiere soporte para ES6 modules. Todos los navegadores modernos lo soportan.

## 📱 Uso en Móvil

El webapp es completamente responsive y funciona perfectamente en dispositivos móviles. Puedes:
- Agregarlo a tu pantalla de inicio para acceso rápido
- Usarlo offline una vez cargado
- Sincronizar progreso exportando/importando

## 🔒 Privacidad

- **100% local**: Todo se ejecuta en tu navegador
- **Sin servidor**: No enviamos datos a ningún servidor
- **Tu progreso es tuyo**: Guardado solo en tu dispositivo
- **Sin tracking**: Cero analytics o cookies de terceros

## 📝 Notas Técnicas

### LocalStorage
El progreso se guarda en `localStorage` del navegador con la key `guia-admin-progress`.

### Límites
- **Secciones disponibles**: Actualmente 0-5 (6 secciones)
- **Secciones futuras**: 6-11 se agregarán próximamente
- **Auto-detección**: El sistema cargará automáticamente nuevas secciones

### Tecnologías
- HTML5
- CSS3 (Bootstrap 5 para grid)
- JavaScript ES6+ (Vanilla, sin frameworks)
- ES6 Modules para carga dinámica

## 🆘 Problemas Comunes

**"La página no carga las secciones"**
- Verifica que la carpeta `/sections/` esté en el mismo directorio que `index.html`
- Usa un servidor web local (ver opciones arriba)
- Revisa la consola del navegador (F12) para errores

**"Mi progreso se perdió"**
- El progreso se guarda en localStorage del navegador
- Si limpias el caché del navegador, se borra
- **Solución**: Exporta tu progreso regularmente

**"No veo las secciones 6-11"**
- Estas secciones aún no están creadas
- Están en desarrollo
- Se agregarán próximamente y el webapp las cargará automáticamente

## 📄 Licencia

Esta guía es un proyecto educativo para emprendedores chilenos.

## 🙏 Créditos

Desarrollado con Claude (Anthropic) - 2026

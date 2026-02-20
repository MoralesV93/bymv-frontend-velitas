# Locales Velita

Sitio web elegante y responsive para un negocio familiar de locales para eventos. Diseñado para bodas, comuniones, cumpleaños y eventos corporativos.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## Vista Previa

El sitio incluye las siguientes secciones:

- **Navegacion** - Menu sticky con hamburguesa responsive
- **Hero** - Seccion principal con imagen de fondo y llamadas a la accion
- **Nuestros Locales** - Dos locales con caracteristicas y amenidades
- **Eventos** - Tipos de eventos que se organizan
- **Galeria** - Grid de imagenes con efectos hover
- **Reservas** - Formulario de contacto con validacion
- **Footer** - Informacion de contacto y redes sociales

## Estructura del Proyecto

```
bymv-frontend-velitas/
├── index.html          # Estructura HTML principal
├── css/
│   └── styles.css      # Estilos CSS completos
├── js/
│   ├── config.js       # ⭐ Configuracion editable
│   └── main.js         # Logica de la aplicacion
├── images/             # Carpeta para imagenes locales
└── README.md
```

## Inicio Rapido

1. Clona el repositorio:
```bash
git clone https://github.com/MoralesV93/bymv-frontend-velitas.git
```

2. Abre `index.html` en tu navegador:
```bash
open index.html
```

No requiere servidor ni dependencias adicionales.

## Personalizacion

### Cambiar Contenido

Todo el contenido del sitio se gestiona desde **`js/config.js`**. Edita este archivo para cambiar:

| Seccion | Que puedes cambiar |
|---------|-------------------|
| `business` | Nombre, telefono, email, direccion |
| `navigation` | Enlaces del menu y boton CTA |
| `hero` | Titulo, subtitulo, descripcion, botones |
| `venues` | Nombres, descripciones, caracteristicas de los locales |
| `events` | Tipos de eventos y descripciones |
| `gallery` | Imagenes de la galeria |
| `booking` | Etiquetas del formulario y opciones |
| `footer` | Columnas, redes sociales, copyright |

### Ejemplo: Cambiar Informacion del Negocio

```javascript
business: {
    name: "Tu Negocio",
    phone: "+34 600 000 000",
    email: "info@tunegocio.com",
    address: "Tu Direccion, Ciudad",
    // ...
},
```

### Usar Imagenes Locales

1. Coloca tus imagenes en la carpeta `images/`
2. Actualiza las rutas en `config.js`:

```javascript
// Antes (Unsplash)
backgroundImageFallback: "https://images.unsplash.com/..."

// Despues (Local)
backgroundImage: "images/mi-imagen.jpg",
```

**Imagenes recomendadas:**
- `hero-bg.jpg` - Fondo hero (1920x1080px)
- `venue-grand-hall.jpg` - Local principal (800x600px)
- `venue-garden-terrace.jpg` - Segundo local (800x600px)
- `gallery-1.jpg` a `gallery-5.jpg` - Galeria (800x600px)

## Caracteristicas Tecnicas

### Diseño
- Paleta de colores elegante (Crema, Verde Bosque, Dorado)
- Tipografia: Playfair Display (titulos) + Lato (cuerpo)
- Diseño responsive (mobile-first)
- Animaciones suaves con CSS transitions

### Funcionalidades
- Menu hamburguesa para movil
- Navegacion sticky con efecto de scroll
- Animaciones al hacer scroll (Intersection Observer)
- Formulario con validacion y feedback visual
- Imagenes con fallback a Unsplash

### Breakpoints Responsive
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px
- Small Mobile: < 480px

## Tecnologias

- **HTML5** - Estructura semantica
- **CSS3** - Custom properties, Flexbox, Grid, Animations
- **JavaScript** - Vanilla JS (ES6+)
- **Google Fonts** - Playfair Display, Lato

## Estructura de Ramas (Git Flow)

```
main
├── feature/html-structure
├── feature/css-styles
├── feature/javascript
└── feature/spanish-translation
```

## Licencia

Este proyecto es de uso privado para Locales Velita.

---

Desarrollado con ❤️ por [Byron Morales](https://github.com/MoralesV93)

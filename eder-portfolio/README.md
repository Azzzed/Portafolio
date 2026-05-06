# Eder Roa — Portfolio Profesional

Portfolio moderno construido con **Next.js 14**, **Framer Motion** y **Tailwind CSS**.

---

## 🚀 Inicio Rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
http://localhost:3000
```

---

## ☁️ Deploy en Vercel (5 minutos)

### Opción A — GitHub + Vercel (recomendado)

1. Sube el proyecto a un repositorio en GitHub
2. Ve a [vercel.com](https://vercel.com) → **New Project**
3. Importa tu repositorio
4. Vercel detecta Next.js automáticamente → clic en **Deploy**
5. ¡Listo! Tu sitio estará en `tu-usuario.vercel.app`

### Opción B — Vercel CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy desde la carpeta del proyecto
vercel

# Seguir las instrucciones en pantalla
```

---

## 🖼️ Hacer que los iframes funcionen

Los iframes de tus proyectos embebidos necesitan que esos sitios permitan ser enmarcados.
En cada uno de tus otros proyectos de Vercel, agrega esto al `next.config.mjs`:

```js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'ALLOWALL' },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://*.vercel.app *",
          },
        ],
      },
    ];
  },
};
export default nextConfig;
```

Afecta a:
- `https://sitio-infomativo-comidas-tipicas.vercel.app/`
- `https://joyeria-amber.vercel.app/`

> Si no puedes modificar esos proyectos, los previews mostrarán un botón
> "Abrir sitio" que lleva directamente a la URL. La funcionalidad del portfolio
> no se ve afectada.

---

## 📁 Estructura del Proyecto

```
eder-portfolio/
├── app/
│   ├── layout.js       # Root layout, fuentes, metadata
│   ├── page.js         # Página principal
│   └── globals.css     # Estilos globales, variables CSS
├── components/
│   ├── CustomCursor.jsx  # Cursor personalizado animado
│   ├── Navigation.jsx    # Barra de navegación fija
│   ├── Hero.jsx          # Sección hero con letras animadas
│   ├── About.jsx         # Sobre mí + habilidades
│   ├── Services.jsx      # Servicios para restaurantes
│   ├── Projects.jsx      # Proyectos con modales iframe
│   ├── Contact.jsx       # Formulario de contacto
│   └── Footer.jsx        # Pie de página
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── postcss.config.js
```

---

## 🎨 Personalización

### Cambiar colores
Edita las variables en `app/globals.css`:
```css
:root {
  --bg: #090909;          /* Fondo principal */
  --text: #f0eae0;        /* Texto principal */
  --accent: #c8b89a;      /* Color de acento */
  --border: #1e1e1e;      /* Bordes */
}
```

### Agregar más proyectos
En `components/Projects.jsx`, agrega un objeto al array `projects`:
```js
{
  id: 3,
  number: '03',
  title: 'Nombre del proyecto',
  subtitle: 'Tipo de proyecto',
  description: 'Descripción...',
  url: 'https://tu-proyecto.vercel.app',
  tags: ['Tag1', 'Tag2'],
  category: 'Web Site',
}
```

### Cambiar información de contacto
En `components/Contact.jsx`, edita el array `contactItems`.

---

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|---|---|
| Next.js 14 | Framework React, App Router |
| Framer Motion | Animaciones y transiciones |
| Tailwind CSS | Utilidades de estilos |
| Google Fonts | Cormorant Garamond + Syne |
| Vercel | Deploy y hosting |

---

## 💡 Ideas de Mejoras Futuras

- [ ] Agregar sección de testimonios
- [ ] Blog integrado con MDX
- [ ] Modo claro/oscuro
- [ ] Más proyectos al portafolio
- [ ] Integración con EmailJS para el formulario
- [ ] Animaciones de página con scroll horizontal en proyectos
- [ ] Sección de proceso de trabajo (Process)

---

## 📞 Contacto

**Eder Roa** · papiploxx@gmail.com · +57 302 750 4689

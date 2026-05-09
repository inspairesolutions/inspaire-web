# Inspaire Solutions - Memoria del Proyecto

## Descripcion General
Web de 3 paginas para **Inspaire Solutions**, empresa de consultoria AI ubicada en Sheridan, Wyoming, USA.

## Stack Tecnologico
- **Framework:** React 18 + Vite 5 + TypeScript 5
- **Estilos:** Tailwind CSS 3.4 con darkMode: 'class'
- **Routing:** react-router-dom v6
- **i18n:** i18next + react-i18next (ES/EN)
- **SEO:** react-helmet-async
- **Formularios:** react-hook-form + zod
- **Fuentes:** Playfair Display (headings), DM Sans (body)

## Paleta de Colores
| Elemento | Light Mode | Dark Mode |
|----------|------------|-----------|
| Primary | #4f46e5 (indigo) | #818cf8 (indigo claro) |
| Accent | #06b6d4 (cyan) | #22d3ee (cyan) |
| Background | #ffffff | #0f172a (dark-bg) |
| Card BG | #f9fafb (gray-50) | #1e293b (dark-card) |
| Text | #0f172a (slate-900) | #f1f5f9 (slate-100) |
| Border dark | - | #334155 (dark-border) |

## Rutas
| Ruta | Pagina | Secciones |
|------|--------|-----------|
| `/` | Home | Hero, Services preview, WhyChooseUs, Approach, Clients, CTA |
| `/services` | Services | Hero simple, Services full, Approach, CTA |
| `/contact` | Contact | Hero simple, ContactForm con mapa |

## Estructura de Carpetas
```
src/
├── components/
│   ├── layout/     # Header, Footer, Layout
│   ├── ui/         # Button, Card, ThemeToggle, LanguageSelector, LazyImage
│   ├── sections/   # Hero, Services, WhyChooseUs, Approach, Clients, CTA, ContactForm
│   └── seo/        # SEOHead, SchemaOrg
├── pages/          # Home, Services, Contact
├── context/        # ThemeContext (dark/light mode)
├── hooks/          # useScrollAnimation
├── i18n/           # Configuracion y traducciones ES/EN
└── lib/            # constants, validation (zod schemas)
```

## Datos de la Empresa
- **Nombre:** InspAIre Solutions
- **Email:** hi@inspaire-solutions.com
- **Direccion:** 30 N Gould St, STE R, Sheridan, WY 82801, USA
- **Dominio:** inspaire-solutions.com

## Servicios Ofrecidos
1. **AI Consulting** - Estrategia y adopcion de IA
2. **AI Agent Development** - Agentes inteligentes y automatizacion
3. **Process Optimization** - Optimizacion con analytics predictivo
4. **Custom AI Solutions** - Vision por computadora, NLP, IA generativa

## Caracteristicas Implementadas
- [x] Dark mode por defecto, persistido en localStorage
- [x] Selector de idioma ES/EN con deteccion automatica
- [x] SEO con meta tags dinamicos por pagina
- [x] Schema.org (Organization, LocalBusiness, Service)
- [x] Formulario de contacto con validacion Zod
- [x] Envio via mailto: (no requiere backend)
- [x] Animaciones de scroll (fade-in-up)
- [x] Responsive con menu hamburguesa
- [x] Google Maps embebido en contacto
- [x] Code splitting (vendor, i18n chunks)

## Comandos
```bash
npm run dev      # Desarrollo en http://localhost:5173
npm run build    # Build de produccion
npm run preview  # Preview del build
```

## Archivos de Configuracion Clave
- `tailwind.config.js` - Colores custom, fuentes, animaciones
- `vite.config.ts` - Code splitting con manualChunks
- `src/i18n/index.ts` - Configuracion i18next
- `src/context/ThemeContext.tsx` - Logica dark/light mode
- `src/lib/constants.ts` - Datos de empresa centralizados

## Notas de Desarrollo
- Las imagenes del logo estan en `/public/img/` (logo.png, logo.jpeg)
- El formulario usa mailto: para evitar necesidad de backend
- Schema.org se ajusta segun la pagina (home, services, contact)
- Las traducciones usan claves anidadas (ej: `services.consulting.title`)
- Los errores del formulario usan claves de traduccion para i18n

## Performance
- Fonts preconnect en index.html
- Lazy loading de imagenes con LazyImage component
- Code splitting automatico por rutas
- CSS purgado por Tailwind en produccion

## Proximos Pasos Sugeridos
- [ ] Agregar sitemap.xml
- [ ] Configurar robots.txt
- [ ] Implementar analytics (Google Analytics o Plausible)
- [ ] Agregar pagina 404
- [ ] Considerar blog o casos de estudio
- [ ] Optimizar imagenes (WebP, responsive)

# CrediScore Landing Page

Landing page oficial de CrediScore desarrollada con Astro + Tailwind CSS.

## Stack Tecnico

- Astro 6
- Tailwind CSS 4
- TypeScript
- React (integrado en Astro para componentes puntuales)

## Requisitos

- Node.js `>= 22.12.0`
- pnpm

## Instalacion

```bash
pnpm install
```

## Comandos

Todos los comandos se ejecutan desde la raiz del proyecto.

| Comando | Descripcion |
| --- | --- |
| `pnpm dev` | Levanta el entorno local (`http://localhost:4321`) |
| `pnpm build` | Genera build de produccion en `dist/` |
| `pnpm preview` | Sirve localmente la build de `dist/` |
| `pnpm lint` | Validaciones de Astro (`astro check`) |
| `pnpm typecheck` | Verificacion de tipos (`astro check`) |

## Rutas Principales

- `/` - Landing principal
- `/privacidad` - Politica de Privacidad (modo solo visual)
- `/terminos-y-condiciones` - Terminos y Condiciones (modo solo visual)

## Estructura del Proyecto

```text
.
├── public/
│   ├── icons/
│   ├── images/
│   └── legal/
├── src/
│   ├── assest/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── privacidad.astro
│   │   └── terminos-y-condiciones.astro
│   └── styles/
└── package.json
```

## Git

Repositorio remoto configurado en:

`git@github.com:Score-Organization/score-landing-page.git`

## Notas

- Los documentos legales se muestran como imagenes en `public/legal/` para evitar descarga directa del PDF original desde la interfaz.
- El favicon principal se configura con el logo de CrediScore en `src/pages/index.astro`.

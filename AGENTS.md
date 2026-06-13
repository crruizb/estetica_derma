# Agent Guidelines - Estética Derma

## Project Overview

Static website for **Estética Derma**, an aesthetics, facial, body and SPA center.
Live site: https://esteticaderma.com/

## Tech Stack

- **Astro** v4.11+ (static site generator)
- **React** 18 (interactive components / islands)
- **TailwindCSS** v3.4+ with custom design tokens
- **TypeScript**

## Package Manager

**Use `pnpm`**, not `npm`.

- Install dependencies: `pnpm install`
- Start dev server: `pnpm run dev`
- Build: `pnpm run build`
- Preview production build: `pnpm run preview`

## Project Structure

```
src/
  pages/              # Astro pages (index.astro, legal pages, etc.)
  layout/             # Shared layouts (LayoutLegal.astro)
  components/         # Astro + React components
    ui/               # shadcn/ui style React components
    icons/            # SVG icon components
  styles/
    globals.css       # Tailwind directives, CSS variables, fonts
  i18n/               # Translation utilities
dist/                 # Static build output
public/               # Public assets (images, favicon)
```

## Styling Conventions

- Tailwind utilities are used everywhere.
- Custom design tokens are defined in `tailwind.config.mjs` and mapped to CSS variables in `src/styles/globals.css`:
  - `primary` / `primary-dark` — terracotta brand color
  - `secondary` — warm tan/gold accent
  - `cream` — section background
  - `warm-white` — light background
  - `brand-text` — dark greenish body text
  - `brand-muted` — muted text
  - `brand-border` — light border color
- Fonts:
  - Display/headings: **Cormorant Garamond**
  - Body: **Jost**
- Prefer `font-display` for headings and `font-body` for body text.
- Use CSS variables for colors; avoid hard-coding hex values in components.

## Component Conventions

- Use `.astro` components for static markup and layout.
- Use `.tsx` components for interactive islands.
- Interactive components must include a `client:*` directive when used in Astro pages (e.g. `client:visible`, `client:load`).
- The mobile navigation (`NavMobile.tsx`) renders its menu via a React portal to `document.body` to avoid being clipped by the header's `backdrop-blur-sm` containing block.

## Build & Validation

- Always run `pnpm run build` after making changes and fix any TypeScript errors before finishing.
- The build produces a static site in `dist/`.

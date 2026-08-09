# AGENTS.md – 初阳的技术学习笔记

## Overview

Astro 5 static site deployed to GitHub Pages. Markdown articles live in Astro Content Collections.

## Commands

| Action | Command |
|---|---|
| Dev server | `$env:ASTRO_TELEMETRY_DISABLED='1'; npm run dev` |
| Build | `$env:ASTRO_TELEMETRY_DISABLED='1'; npm run build` |
| Install dependencies | `npm install` |

## Project structure

- `src/content/blog/` – Markdown posts with validated Front Matter
- `src/pages/` – Astro routes
- `src/layouts/` and `src/components/` – shared site UI
- `src/styles/` – terminal-theme design system
- `public/` – static files, including redirects for legacy Jekyll URLs

## Deployment

`.github/workflows/astro-gh-pages.yml` builds `dist/` and deploys it to GitHub Pages when `main` changes.

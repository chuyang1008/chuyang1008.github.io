# AGENTS.md – chuyang1008.github.io

## Overview

Jekyll 4.4.1 static site deployed to GitHub Pages. Ruby + Bundler. No tests, no linter, no formatter.

## Commands

| Action | Command |
|---|---|
| Dev server (live reload) | `bundle exec jekyll serve` |
| Build only | `bundle exec jekyll build` |
| Install gems | `bundle install` |

## Project structure

- `_posts/` – Blog posts as `YYYY-MM-DD-title.MARKUP` markdown files with YAML front matter
- `index.html`, `about.html`, `blog.html` – Hand-crafted HTML pages with inline CSS/JS (no shared stylesheet, no Jekyll layout reuse)
- `blog.html` uses Liquid templating (`site.posts`, `post.url`, `post.excerpt`, etc.) — edit `_posts/` to add new entries
- `404.html` uses the `page` Jekyll layout
- `_config.yml` – Site title, description, theme (`minima`), plugins (`jekyll-feed`)
- `assets/images/` – Background image referenced in pages

## Deployment

- GitHub Actions workflow (`.github/workflows/jekyll-gh-pages.yml`) auto-deploys on push to `main`
- No manual deploy step needed

## Conventions

- Put new posts in `_posts/` following the naming convention above
- `categories` in post front matter power the category filter on `/blog.html`
- `_site/`, `.sass-cache`, `.jekyll-cache`, `.jekyll-metadata`, `vendor/` are gitignored

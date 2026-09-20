# Melek Bouabid — Portfolio

Bilingual (FR/EN) one-page portfolio for **Melek Bouabid**, a Data Science & AI
engineering student at Tek-Up, Tunisia.

Every section is built from the content of his CV — nothing on the site is invented.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router), static export |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 — CSS-first `@theme`, no `tailwind.config.js` |
| Animation | `motion` (Framer Motion), imported from `motion/react` |
| Icons | `lucide-react`, plus two inline brand glyphs |
| Fonts | Syne / Onest / JetBrains Mono, self-hosted by `next/font` |
| Hosting | GitHub Pages via GitHub Actions |

## Getting started

```bash
npm install
npm run dev
```

The site runs at <http://localhost:3000>.

| Script | What it does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Static export to `out/`, served from `/` |
| `npm run build:pages` | Static export with a `/portfolio` base path, to reproduce the deployed layout |
| `npm run preview` | Serve `out/` at <http://localhost:3000> |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

There is deliberately **no `start` script**: `next start` needs a server build and
errors out under `output: 'export'`.

## Layout

```
app/                 layout (server), page, globals.css with the @theme tokens,
                     fonts, not-found, robots, sitemap, icon
components/
  layout/            navbar, footer, backdrop, skip link, language toggle
  providers/         language provider
  sections/          the eight page sections
  ui/                reveal, section, card/button/chip/tag, skill bar, stat tile
content/             ALL copy and data, typed and bilingual — edit here, not in JSX
hooks/               scroll spy
lib/                 base path, motion vocabulary, JSON-LD, language store
scripts/             OG image source (not a live route — see the file header)
```

### Editing content

Everything a person would want to change lives in `content/`. Each user-facing
value is a `Localized<T>` — `{ fr, en }` — so **a missing translation is a
compile error**, not a blank region in production.

- `content/site.ts` — name, email, phone, social handles, CV path
- `content/skills.ts` — skill groups and proficiency levels, with the rubric that
  produced those numbers written at the top
- `content/experience.ts`, `content/projects.ts`, `content/education.ts`,
  `content/journey.ts` — the CV material
- `content/nav.ts` — one array driving the navbar, the section ids and the scroll spy

## Before publishing

See **[DEPLOY.md](./DEPLOY.md)**. In short: fill in the GitHub and LinkedIn handles
in `content/site.ts`, then push and switch the repo's Pages source to GitHub Actions.

```bash
grep -rn PLACEHOLDER content/
```

That must return nothing.

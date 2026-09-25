# Deploying to GitHub Pages

Nothing is connected yet — the project builds and runs entirely locally, and the
deploy pipeline is written but has never run. This file is the checklist for
turning it on.

---

## 1. Fill in what's still a placeholder

Melek's CV links the words "LinkedIn" and "GitHub", but the underlying hrefs are
bare (`https://github.com/`, `https://linkedin.com/`) with no handle, so the real
usernames are unknown.

Edit **`content/site.ts`**:

```ts
export const GITHUB_USERNAME = "PLACEHOLDER_GITHUB_USERNAME";  // ← real handle
export const LINKEDIN_SLUG   = "PLACEHOLDER_LINKEDIN_SLUG";    // ← real slug
```

Until both are filled in, `SOCIALS_READY` is false and the site **hides** the
GitHub/LinkedIn buttons in the footer and contact card, and omits `sameAs` from the
JSON-LD. Dead links are worse than no links, so this is deliberate — but it does
mean the site is missing two things a recruiter looks for.

Verify before pushing:

```bash
grep -rn PLACEHOLDER content/
```

Must return nothing.

### Optional at the same time

- **English CV.** `content/site.ts` maps the French and English downloads to
  `public/CV.pdf` and `public/Resume.pdf` respectively.
- **Skill levels.** `content/skills.ts` carries percentages derived from evidence of
  use in the CV, capped at a junior ceiling (nothing above 85). The rubric is written
  at the top of that file. They're a calibration, not a claim Melek made — worth him
  reviewing once.

---

## 2. Choose the repository name

This decides the URL **and** the base path. Both are already supported; no code
changes either way.

### Option A — `melekbouabid.github.io` (recommended)

A GitHub *user site*. Serves at the domain root.

- URL: `https://melekbouabid.github.io`
- `configure-pages` reports `base_path` as `/`, which `next.config.ts` normalises
  to `""`. Nothing to configure.
- Much nicer to put on a CV. Only one such repo per account.

### Option B — `portfolio`

A *project site*, served under a sub-path.

- URL: `https://<user>.github.io/portfolio`
- `configure-pages` reports `base_path` as `/portfolio`; the workflow feeds it to
  the build as `NEXT_PUBLIC_BASE_PATH`.

The workflow reads both values from `actions/configure-pages` rather than hardcoding
them, so renaming the repo later does not break the build.

---

## 3. Push

```bash
git remote add origin https://github.com/<user>/<repo>.git
git branch -M main
git push -u origin main
```

## 4. Switch the Pages source — the one manual step

**Repository → Settings → Pages → Build and deployment → Source → `GitHub Actions`.**

This cannot be automated. If it's left on "Deploy from a branch", the build goes
green and the *deploy* job fails with `Error: Get Pages site failed`.

The repository must also be **public**, unless the account has GitHub Pro.

## 5. Watch the run

`.github/workflows/deploy.yml` runs on every push to `main`. It builds, forces a
`.nojekyll`, and then runs a step called **"Verify the base path reached the HTML"**.

That step exists because of the single most common GitHub Pages failure: if
`basePath` is missing, the HTML still loads but every `/_next/...` request returns
the site's 404 page as `text/html`. The browser refuses to execute it, and you get a
completely unstyled, non-interactive page that *looks* like a successful deploy. The
step turns that into a red build instead.

---

## Reproducing the deployed layout locally

Worth doing once before the first push, and any time you touch asset paths.

```bash
npm run build:pages
mkdir -p .preview/portfolio && cp -r out/. .preview/portfolio/
npx serve .preview -l 4000
```

Open <http://127.0.0.1:4000/portfolio/>. This has been run and verified: the page is
fully styled, the CV PDF resolves, and `robots.txt`/`sitemap.xml` return 200.

Check the Network tab for 404s — especially `CV.pdf`, `Resume.pdf`, `og.png` and
`icon.svg`.

## After the first deploy

1. View source — every `<script>`/`<link>` href should start with the base path.
2. Paste the URL into the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
   to confirm the preview card renders `og.png`.
3. Visit a nonsense path under the site to confirm the branded 404 appears.

---

## Things that cannot be added without leaving GitHub Pages

`output: 'export'` means there is no server: no API routes, no server actions, no
middleware, no redirects or security headers from `next.config.ts`.

Practical consequence: the contact section is `mailto:` plus copy-to-clipboard, not
a form. A real form would need a third-party endpoint such as Formspree or
Web3Forms, posted to from the client.

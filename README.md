# Aamna Girnari — Portfolio

An editorial, "swipe-coded" personal portfolio for an M.Sc. Big Data Analytics student
seeking a first professional internship. Built with React, TypeScript, Tailwind CSS and
Framer Motion.

> **Update (content expansion):** the site now reflects the full profile — B.Sc.
> Mathematics, the Mathematics → Data → Big Data → AI journey, Power BI as its own
> section, and the Entrepreneurship / Beyond Data / Toolkit sections covering Al Ras'al,
> marketing, content, design, AI-assisted video and business data work. See "Section map"
> below for the current structure. No existing project or design language was removed —
> this was a content and information-architecture update, not a rebuild.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build
```

Deploy `/dist` anywhere that serves static files (Netlify, Vercel, GitHub Pages, etc.).

---

## 1. Section map (current)

```
01 Hero              — name, B.Sc. Mathematics → M.Sc. Big Data Analytics, primary CTAs
02 About              — the "who I am" narrative, technical + entrepreneurial in one story
03 My Journey         — Mathematics → Data → Big Data → AI → Research → Entrepreneurship → Internship
                         (+ a small, optional "Additional Academic Background" note)
04 Selected Projects  — project index + full case studies (was two numbered sections, now one)
05 Data Visualization — Power BI / dashboarding, separated out from the project list
06 Research           — the 2nd place / GitHub component achievement
07 Entrepreneurship   — the full Al Ras'al story: website dev vs. management, social,
                         marketing, sales, design, business/customer data
08 Beyond Data        — scannable capability tiles (content, marketing, website mgmt,
                         branding, AI video) that point back to section 07 for depth
09 Toolkit            — skills regrouped into Technical / Analytical / Creative / Business
10 Currently          — status line (M.Sc. Part 2 / Building / Learning / Seeking) + the
                         internship ask
11 Contact            — LinkedIn / GitHub / Email / Résumé
```

## 2. Visual direction

- **Palette** — warm cream base (`#F5F1E7`), a deeper paper tone for card backgrounds
  (`#EDE7D8`), near-black warm ink for text (`#15140F`), and a single controlled amber
  "signal" accent (`#D98E2B` / deep `#9C6316`) used only for numbers, links and one CTA —
  never as a wash or gradient.
- **Type** — Fraunces (a warm, slightly idiosyncratic serif with real optical sizing) for
  display headings, Archivo for UI/body text, and Space Mono used *only* where the content
  is literally numeric or code-like (project numbers, record counts, stack tags) — because
  the subject matter is data, not as decoration.
- **Layout** — left-aligned, hairline borders instead of shadows, near-zero border radius,
  large project numbers used because the projects genuinely are a numbered sequence.
  No rounded SaaS-card kit, no gradients, no glassmorphism.
- **Motion** — one scroll-reveal treatment (fade + rise, `Reveal.tsx`) used consistently,
  a single subtle pulsing node graphic in the hero, and hover states on interactive
  elements only. All motion is skipped automatically when the OS-level "reduce motion"
  setting is on (see `useReducedMotion`).

## 3. Data-driven content

Everything content-related lives in `src/data/` — edit these, not the components:

| File | What it controls |
|---|---|
| `projects.ts` | Every project card and case study. Each `Project` has a `tier` (`major` / `featured` / `minor` / `placeholder`) that decides which component renders it. |
| `journey.ts` | The Mathematics → AI timeline steps + optional academic-background note. |
| `entrepreneurship.ts` | Al Ras'al responsibility areas, the business-data note, and the website dev vs. management copy. |
| `capabilities.ts` | The capability tiles in Beyond Data (marketing, content, design, AI video, etc.). |
| `skills.ts` | Skill groups, each tagged with a `meta` (`Technical` / `Analytical` / `Creative` / `Business`) that the Toolkit section groups by. |
| `achievements.ts` | The research/achievement card — several fields are intentionally left as `[Add ...]` placeholders. |
| `socials.ts` | LinkedIn, GitHub, email and the resume file path. |

### Adding a new project

Copy an object in `projects.ts`, give it a new `id`/`number`, and set `tier`:

- `major` → gets a row in the Selected Projects index **and** a full case-study block
  (use this once you can write problem/approach/architecture/implemented/planned).
- `featured` → a medium card in "More on GitHub" (results + future work only, no full
  case study — use this for finished, published repos).
- `minor` → a small card in "Other academic work".
- `placeholder` → the locked "coming soon" style card.

### Replacing the unposted project

Once you've presented it, edit the `coming-soon` entry in `projects.ts`: change its
`tier` to `featured` or `major`, fill in `technologies`, `summary`, `github`, and (if it's
a major one) a `caseStudy` object. No component changes needed.

## 4. What's still a placeholder (by design, not by accident)

Per the "never fabricate" rule, these are intentionally left as editable placeholders
rather than invented content:

- Enterprise AI platform — `implemented` / `planned` lists in `projects.ts` (`enterprise-ai-platform`)
- Parkinson's project — no accuracy/metrics until training is actually evaluated
- Genome project — `github` / `docs` links
- Achievement — conference name, college, research title, date, certificate & project links
  (`src/data/achievements.ts`)
- Al Ras'al — screenshots (currently dashed placeholder boxes), GitHub link, live link
- Branding & Design — logo/graphics placeholder tiles
- Business/customer data — `src/data/entrepreneurship.ts` deliberately uses the careful
  "few-thousand-customer scale" wording rather than a formal KPI; add the exact
  data-management tasks in the `[Add exact data-management responsibilities]` field
- Additional Academic Background (Physics/Chemistry) — `src/data/journey.ts`, kept small
  and optional per the brief
- Résumé — `public/resume/Aamna_Girnari_Resume.docx` is a starter draft built from the
  same verified content as the site; it still has `[Add ...]` placeholders for
  institution names, years, email and the research date. Fill those in, then export to
  PDF and save as `Aamna_Girnari_Resume.pdf` to match the download links across the site
  (or point `resumePath` in `socials.ts` at the `.docx` instead)
- Contact email — replace the example address in `socials.ts`

Everything else (the genome dataset statistics, the Cataract Detection AI results, the
Movie Recommendation and AI Game Tester project details) was pulled from your actual
project files and public GitHub repositories, not invented.

## 5. Post-build audit

**Mobile responsiveness** — Hero, About, Skills and Contact reflow to single-column
below `sm`; the featured/minor project rows become horizontal snap-swipe rows on mobile
(`overflow-x-auto snap-x`) and switch to a static grid at `sm:` and above, per the brief's
"swipe on mobile, scroll on desktop" requirement.

**Accessibility** — semantic headings (`h1`–`h4`), a visible amber focus ring on every
interactive element (`:focus-visible` in `index.css`), `aria-label`/`aria-expanded` on the
mobile menu button, decorative SVGs and dividers marked `aria-hidden`, and full
`prefers-reduced-motion` support (motion wrapper falls back to a plain `<div>`).

**Performance** — production build is a single ~92 KB gzipped JS bundle and ~4 KB gzipped
CSS (verified with `npm run build`); no external image assets are bundled yet since real
photos/screenshots haven't been supplied — add optimized (WebP/AVIF, compressed) images
when you drop in screenshots so this stays fast.

**Broken links** — internal anchors (`#about`, `#work`, `#achievements`, `#beyond-data`,
`#skills`, `#looking-for`, `#contact`, and each `#project-{id}`) all resolve to a real
section id; verified against `Nav.tsx` and every section component. External links
(LinkedIn, GitHub profile, and the 3 published repo URLs) were checked against the live
GitHub profile at build time.

**Content accuracy** — no invented internships, employers, certifications, accuracy
figures, or awards. The only performance numbers on the site (Cataract Detection AI's
~96–97% accuracy / ~0.94 ROC-AUC) are copied from that project's own README, not
generated.

**Type safety** — `npm run build` (which runs `tsc -b` then `vite build`) completes with
zero TypeScript errors.

**Recruiter usability** — a recruiter can get "who / what they know / what they've built /
what they're looking for" without scrolling past the fold twice: Hero states the goal in
one line, About confirms it in prose, Selected Projects gives a scannable list before the
deep case studies, and section 08 restates the ask in plain terms right before Contact.

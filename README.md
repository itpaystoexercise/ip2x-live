# IP2X — Website

**This is the only site repo. Every push to `main` deploys to https://ip2x.co.uk via GitHub Pages (1–3 minutes).** There is no staging site any more: `ip2x-site` was the staging copy until 2026-10-14, drifted two months ahead of production, and is archived (see "How changes land" below).

Static marketing site for IP2X, plus the tester guides under `/guides/`. No build step, no dependencies beyond Google Fonts. Everything renders straight from the file system or any static host.

## Structure

```
ip2x-live/
├── index.html              ← Homepage (everyone)
├── partners/
│   └── index.html          ← B2B partners page (insurers, employers, GLP-1 providers)
├── glp1/
│   └── index.html          ← First-cohort landing page for GLP-1 users
├── assets/
│   ├── css/
│   │   └── styles.css      ← All styling. Brand tokens at the top.
│   ├── js/
│   │   └── main.js         ← Nav scroll, FAQ accordions, scroll-reveal
│   ├── img/
│   │   ├── avatars/        ← Pep & Pip stills
│   │   ├── guides/apple/   ← Screens and exercise stills used by the tester guide
│   │   └── video-posters/  ← Click-to-play poster frames for the exercise clips
│   └── video/              ← Exercise demo clips (Pep & Pip)
├── guides/
│   ├── index.html          ← Guides index
│   └── apple/index.html    ← Tester guide for iPhone + Apple Watch (android/, garmin/ later)
├── README.md
└── .gitignore
```

URLs once deployed:

- `/` — homepage
- `/partners/` — partners page
- `/glp1/` — GLP-1 cohort landing page
- `/guides/` and `/guides/apple/` — tester guides (the app links here; keep the paths stable)

## Editing the most common things

**Colours, fonts, spacing** — top of `assets/css/styles.css` under `:root`. Brand tokens lifted directly from Kat's brand kit.

**Copy on the homepage** — `index.html`. Sections are commented (`<!-- HERO -->`, `<!-- HOW IT WORKS -->` etc) so search for the section name.

**Founder details** — search `team-grid` in `index.html`. To swap initial-circles for real photos, replace the `<div class="avatar">XX</div>` with `<img class="avatar" src="assets/img/firstname.jpg" alt="Name">` — the existing CSS will size and shape them correctly.

**FAQs** — search `faq-list` in `index.html`. Each `<div class="faq-item">` is one Q+A.

**Exercise videos** — search `video-grid` in `index.html`. Clips live in `assets/video/`, poster frames in `assets/img/video-posters/`. Videos are click-to-play (`preload="none"`), so adding a clip costs nothing until someone presses play; keep clips transcoded small (the current set is 0.4–3 MB each).

**Partner page copy** — `partners/index.html`. The three audience cards correspond to GLP-1 Providers, Insurers and Employers.

**GLP-1 page copy** — `glp1/index.html`. Worth pressure-testing the muscle-loss statistics with Dr Nic before this goes live.

## How changes land

1. Branch, edit, open a PR. There is no build step, so review is the diff plus a local preview:
   ```bash
   python3 -m http.server 8000   # from the repo root, then open http://localhost:8000/
   ```
   A PR branch can also be checked out and served the same way. Per-PR preview URLs
   (Cloudflare Pages / Netlify) were considered on 2026-10-14 and not set up: the site is
   small and static, and a local preview covers it. Revisit if more than one person edits.
2. The owner's say-so merges it (same rule as the app repo: a PR is never merged on
   the author's own judgement). Push to `main` deploys — the GitHub Actions workflow in
   `.github/workflows/pages.yml` publishes the repo root to https://ip2x.co.uk.
3. Check the live page once it has deployed; Pages caches, so hard-refresh.

**Why one repo (2026-10-14):** the previous split — `ip2x-site` for staging, this repo for
production — had the site under an `ip2x-site/` subfolder on one side and at the root on
the other, so nothing merged across and every promotion was a hand copy. Staging ended up
seven commits (the video showcase) ahead of the live site for two months. The drift was
promoted once and `ip2x-site` archived with a pointer here.

## What's a placeholder

- **Founder avatars** are coloured initial circles. Swap for real headshots when available.
- **CTA buttons** all link to `#cta` or `#`. Wire them to a real sign-up flow when one exists.
- **Hero tag "Now accepting first cohort"** — change to "Join the waitlist" if the app isn't live at launch.
- **Partner email** is `partners@ip2x.com` — confirm the inbox exists before publishing.
- **Cambridge / LSE research footer line** — only landlocks once those collaborations are confirmed contractually.
- **Vitality 61% stat** — confirm source before going live with regulators / partners reading.
- **Domain and company number** in the footer assume registration via the entity in the Innovate UK application. Confirm before publishing.

## What's not built yet

- Actual sign-up flow (form, app store links, or waitlist tool).
- Privacy policy and terms pages (links exist, no content).
- A favicon. Anything in `assets/img/favicon.ico` will be picked up automatically; otherwise add a `<link rel="icon">` to each page's `<head>`.
- Analytics — drop in Plausible, Fathom or GA4 in `<head>` of each page when you're ready.
- Open Graph / Twitter card images for nice link previews.

## Notes for whoever extends this

- Pages share `styles.css` and `main.js`. Keep them sharing — duplicating styles per page will rot fast.
- The `.reveal-on-scroll` and `.stagger` classes drive the entrance animations. Add them to any new section to get the same effect for free.
- The `.accent` class is the italic-blue treatment Kat uses in the brand kit. Use sparingly for emphasis in headlines.
- Fonts are Bricolage Grotesque (display), Manrope (body), Newsreader Italic (the accent treatment). All three load from Google Fonts in one request per page.

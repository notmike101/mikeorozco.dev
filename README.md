# mikeorozco.dev

Personal portfolio for Mike Orozco, built with Nuxt 3 and statically deployed to GitHub Pages.

## Requirements

- Node.js 22.12 or newer
- pnpm 11.9.0

Corepack will use the pinned pnpm version from `package.json`:

```powershell
corepack enable
pnpm install
```

## Development

```powershell
pnpm dev
```

The local site is available at `http://localhost:3000`.

## Production validation

```powershell
pnpm typecheck
pnpm generate
pnpm test
pnpm exec playwright install chromium
pnpm test:browser
```

The generated static site is written to `.output/public`. GitHub Actions runs these checks on pull requests and before deploying `main`. Pull requests cannot deploy. On Linux, install browser system dependencies with `pnpm exec playwright install --with-deps chromium`.

`pnpm preview-generated` serves the output at `http://127.0.0.1:4173` with directory redirects and real 404 responses. It uses Node's HTTP server and is only for local validation.

## Content model

Case-study content and metadata are defined in `data/caseStudies.ts`. The same records drive the project index, case-study routes, structured data, and the XML sitemap. `data/projectLayers.ts` supplies each project's actual components, independently of its narrative flow. `ProjectLayerGraphic.vue` renders screenshots, pinned public source excerpts, and documented architecture. See `docs/portfolio-evidence.md` for provenance and scope.

`pnpm test` checks the generated output after `pnpm generate`, including image-first project entry points, visual coverage independent of code, complete case-study content, research entries, images, metadata, and contact paths.

`pnpm test:browser` checks all case studies with Mozilla Readability, all indexable pages with axe in both themes, and keyboard navigation, client metadata updates, unavailable storage, mobile navigation without JavaScript, reduced motion, text spacing/enlargement, and reflow. Browser failure traces and a JSON report are written to `test-results/`.

## Discovery and reading

`utils/structuredData.ts` produces Schema.org JSON-LD: a Person and WebSite connected to the homepage ProfilePage, and WebPage, Article, CreativeWork, and BreadcrumbList entities for each case study. The Article's author describes authorship of the case study; it does not claim sole ownership of client projects. Case-study headings, bylines, narratives, component descriptions, and evidence links are visible inside an article before JavaScript runs.

`public/robots.txt` allows search and citation discovery while asking GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, and CCBot not to crawl. This is an advisory opt-out for compliant crawlers, not a technical access restriction. Blocking Google-Extended also opts out of Gemini grounding; blocking CCBot excludes Common Crawl collection beyond training alone.

See [validation results and native-browser checklist](docs/portfolio-validation.md). Automated extraction and axe results do not establish universal Reader Mode support or full WCAG conformance.

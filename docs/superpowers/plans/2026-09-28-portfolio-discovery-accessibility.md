# Portfolio Discovery and Accessibility Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Ship crawlable, accessible portfolio pages with accurate Schema.org JSON-LD and verifiable reader extraction.

**Architecture:** Retain Nuxt static generation and the shared project records. Normalize canonical page links, emit connected JSON-LD from the same records, and place all essential case-study content in one article. Browser checks exercise the generated site, not the development server.

**Tech Stack:** Nuxt 3, Vue, TypeScript, Node assertions, Playwright, axe, Mozilla Readability; GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-09-28-portfolio-discovery-accessibility-design.md`

**Authorization:** The user approved the specification and explicitly instructed implementation on a new branch and PR creation. Proceed inline without another approval round; do not merge or deploy.

## Global Constraints

- Keep Nuxt 3 static generation and GitHub Pages hosting.
- Use Node.js >=22.12.0 and the existing pinned pnpm 11.9.0.
- Add no runtime dependencies for SEO, structured data, or Reading Mode.
- Preserve all evidence-backed content, public attribution, prototype qualifications, and contact privacy rules in the spec.
- Search/citation discovery stays allowed; named model-training crawlers are disallowed.
- Native-browser and screen-reader checks require actual evidence. Unavailable environments remain pending in the PR.

## Review Focus

- Directory canonicalization must not corrupt image URLs, fragments, queries, or mailto links (Task 1).
- JSON-LD must safely serialize HTML-like text and retain correct page/project/author relationships after client navigation (Tasks 2 and 4).
- A mobile visitor without JavaScript must still reach every case study (Task 3).
- Browser extraction must retain short paragraphs, lists, evidence links, and project diagrams' textual meaning (Task 3).
- Theme storage failures, client route changes, and sticky navigation must not break controls or leave keyboard focus hidden (Task 4).

## Task 1: Canonical URLs and crawl policy

**Files:** `utils/site.ts`, `server/routes/sitemap.xml.ts`, `public/robots.txt`, `pages/index.vue`, `pages/contact.vue`, `pages/work/[slug].vue`, project link callers, `error.vue`, `scripts/verify-generated.mjs`.

**Interfaces:** retain `absoluteUrl(path: string): string`; add `caseStudyPath(slug: string): string` returning `/work/<slug>/`. Root `siteUrl` is the normalized `https://mikeorozco.dev/`. Later tasks consume these values without independently rebuilding canonical paths.

- [x] Generate the unchanged site and run the existing tests; retain the baseline log.
- [x] Add generated-output assertions for exact canonical hrefs, sitemap URLs, and named crawler groups, plus real no-JavaScript 404 recovery semantics. Run `pnpm test`; expect failure on the current missing directory slash or training policy.
- [x] Normalize the URL sources and callers. Preserve selection query/hash behavior. Use verified publication history or omit unsupported dates; remove decorative sitemap priority/changefreq fields.
- [x] Make the error page's home action a real anchor and add title/noindex metadata.
- [x] Run `pnpm typecheck`, `pnpm generate`, `pnpm test`, and `git diff --check`; expect exit 0. Commit the deliverable.

## Task 2: Connected Schema.org data

**Files:** create `utils/structuredData.ts`; update homepage/case-study metadata and `scripts/verify-generated.mjs`.

**Interfaces:** `serializeJsonLd(value: unknown): string`, `profileSchema(): object`, and `caseStudySchema(project: CaseStudy): object`. The helpers consume existing site constants and project records; JSON-LD stays in one keyed head script per page. The Article embeds an author name/URL alongside the Person ID for simple metadata consumers.

- [x] Assert each generated case has WebSite, Person, WebPage, Article, Project, and BreadcrumbList relationships; homepage mainEntity resolves to Person. Test `JSON.parse(serializeJsonLd({ text: '</script><b>&' })).text` and assert serialized text contains no literal `<`. Run the focused/generated checks; expect the missing Article graph to fail.
- [x] Implement the small shared serializers/graph builders. Use CreativeWork for project identity unless software-source typing is justified; avoid claiming authorship of the project or treating frameworks as programming languages. Article author is Mike Orozco.
- [x] Match schema dates/images/URLs to supported content. Use stable IDs and a single keyed script to avoid duplicate navigation state.
- [x] Run generation, existing/expanded checks, and typecheck; expect exit 0. Commit.

## Task 3: Coherent readable articles and static evidence

**Files:** `components/ProjectWorkbench.vue`, `pages/work/[slug].vue`, `components/ProjectLayerGraphic.vue`, `data/projectLayers.ts` if dimensions are needed; create `tests/portfolio.spec.ts`, `playwright.config.ts`, `scripts/serve-generated.mjs`; update package manifest/lockfile and ignores.

**Interfaces:** named workbench header slot lets the case-study page own its article header/h1 while homepage retains its default header. Each case article exposes the existing data as semantic text. Static preview serves `.output/public` with directory redirects and actual 404 status; only development/test code uses it.

- [x] Add development dependencies and a generated-site Playwright configuration. Add Readability extraction assertions for all case records and public evidence destinations, article title/byline, and excluded navigation. Add mobile JavaScript-disabled project-link checks. Run `pnpm test:browser`; expect missing author/component evidence or mobile navigation failures.
- [x] Move each case title/byline and narrative inside one article; put visible breadcrumbs before it. Include component descriptions, diagram text, and evidence links as visible content; keep code excerpts supplementary.
- [x] Provide mobile native details/anchor navigation without JavaScript; preserve the enhanced select and normal modified clicks. Reserve screenshot geometry from actual assets.
- [x] Run generation, Node checks, typecheck, and reader/no-JavaScript browser checks; expect all cases to retain content. Commit.

## Task 4: Accessibility and navigation

**Files:** `app.vue`, `layouts/default.vue`, shared header/workbench/theme components, `assets/css/main.css`, `tests/portfolio.spec.ts`.

**Interfaces:** NuxtRouteAnnouncer handles page navigation; a concise status region handles selected-project/component changes. Main content can receive skip/navigation focus without joining the ordinary tab order.

- [x] Add real browser tests for skip navigation, keyboard selection, selected-state announcements, route metadata/content replacement, theme storage denial, reduced motion, and 320px overflow. Scan all indexable routes in both themes with axe WCAG 2.2 AA tags. Run the new tests and record baseline failures.
- [x] Apply minimal shared fixes to focus handling, announcements, storage error handling, contrast/target sizing, and reflow. Keep selection scrolling and browser-history behavior intact.
- [x] Run the entire generated-output and browser suite plus typecheck. Record native-reader/screen-reader checks only where tooling actually supports the native application. Commit the deliverable.

## Task 5: Validation, CI, and PR

**Files:** `.github/workflows/cd.yml`, a PR validation workflow if required, `README.md`, `docs/portfolio-validation.md`, plan checkboxes.

**Interfaces:** CI runs the same generated-site checks as local verification. Deployment consumes the verified `.output/public` artifact.

- [x] Add the existing Node checks and browser/extraction checks before deployment; run them on pull requests without deployment privileges. Document commands and manual browser checks.
- [x] Compare controlled browser loading/layout measurements before/after. Run Schema.org validation against generated JSON-LD; record exact results and any tool/service limitations.
- [x] Run final `pnpm typecheck`, `pnpm generate`, `pnpm test`, `pnpm test:browser`, and `git diff --check`; inspect results. Record native browser/platform gaps rather than treating emulated WebKit or extraction as native Safari proof.
- [x] Obtain one independent whole-branch review against the approved spec and Review Focus. Resolve significant findings with focused regressions and rerun affected/full checks as warranted.
- [ ] Commit, push `codex/portfolio-discovery-accessibility`, and open a PR against `main`. Attach the PR to this chat. Report automated results and pending human/native-browser checks. Do not merge.

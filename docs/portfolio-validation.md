# Portfolio discovery and accessibility validation

Recorded 2026-09-28 on `codex/portfolio-discovery-accessibility`, based on `main` at `6b585f6983d8d2caf4890cd58de429a82bbb2fd9`. This is implementation evidence, not a WCAG certification or a claim that every browser will offer Reading Mode.

## Automated checks

Local environment: Windows, Node 26.5.0, pnpm 11.9.0, Nuxt 3.21.8, Playwright 1.63.0, axe 4.13.0, and Mozilla Readability 0.6.0. CI uses Node 22.

Run after installing dependencies:

```sh
pnpm typecheck
pnpm generate
pnpm test
pnpm exec playwright install chromium
pnpm test:browser
git diff --check
```

The generated-output assertions cover all 13 case studies and 14 supporting research entries, canonical directory URLs, sitemap parity, crawler policy, connected JSON-LD identities, safe serialization, usable static 404 content, images, contact privacy, and existing project-selection scrolling behavior.

The browser suite passes all 61 tests, with no skipped or flaky tests, and covers:

- Default Readability extraction on all 13 cases: title, author, summary, challenge, role, decisions, flow/diagram text, component explanations, outcomes, reflection, and public source links. Navigation and related work must stay outside the result.
- Homepage introduction extraction and client-navigation extraction/metadata replacement. `isProbablyReaderable` returned `true` on the homepage and all 13 cases; these diagnostic values are recorded as test annotations, not used as acceptance assertions.
- axe WCAG 2.2 AA-tagged rules on all 14 indexable routes in both themes, plus the legacy contact route and actual static 404 response.
- Keyboard skip navigation, project/component state and focus, concise status updates, route announcements, mobile anchor clearance below the sticky header, reduced motion, and theme controls with browser storage denied.
- All project links on mobile with JavaScript disabled; static directory redirects preserve queries and unknown paths return 404.
- 320 CSS-pixel reflow and WCAG text-spacing overrides on the homepage and four varied case studies. The same pages also pass a 200% computed-text-size stress check at 1280px. This supplements, rather than replaces, native browser zoom checks.
- Screenshot geometry checked against decoded image dimensions.

Regression failures were observed before fixing article boundaries/mobile navigation, screenshot geometry, skip and route focus, selection announcements, unavailable storage, active Work navigation, and sticky-header overlap. A UTF-8 punctuation regression caught and corrected an encoding error in a one-off image-dimension script. Independent review found that clearing the Work anchor during in-place project selection moved focus off the desktop link or mobile select. Both paths were reproduced with failing tests and the route-focus watcher now preserves the active control for that update.

Existing module-type warnings from Node and the existing Nuxt CLI/schema peer-version warning are unchanged. No new SEO, accessibility, or reader dependency ships to the browser; the new packages are development dependencies.

## Schema.org service validation

The [Schema.org Markup Validator](https://validator.schema.org/) was run in Edge 153.0.4234.48 on Windows. Quire's generated JSON-LD alone returned **0 errors, 0 warnings**. A second submission containing the unchanged JSON-LD script contents from all 14 generated pages returned **14 top-level items, 0 errors, 0 warnings**: 13 WebPage items and one ProfilePage. Shared identities are merged by the validator; nested entities remain linked through each page graph.

The service received the public portfolio JSON-LD, not private repository files. Local assertions independently validate each page's graph and its visible-content relationships. Vocabulary validity does not guarantee a search feature or rich result.

## Controlled loading comparison

The baseline was generated from the unchanged main checkout. Post-change samples were taken at `9ab4353`, before the final review's in-place focus guard. Both versions were served by the same Node static server on localhost and measured in the same Chromium environment. Each cell is the median of three cold-cache runs. Desktop: 1280×900, no throttling. Mobile: 390×844, 4× CPU slowdown, 150ms latency, 200,000 bytes/s download and 93,750 bytes/s upload. Observe through network idle plus 1.5 seconds, without input.

| Page and environment | LCP before → after | Layout-shift sum before → after | Resource transfer before → after |
| --- | --- | --- | --- |
| Homepage, desktop | 88 → 84 ms | 0.05644 → 0.00149 | 550,111 → 557,638 bytes |
| Quire, desktop | 72 → 68 ms | 0.00120 → 0.00158 | 504,546 → 512,073 bytes |
| Homepage, mobile | 856 → 852 ms | 0.00155 → 0.00154 | 550,111 → 557,638 bytes |
| Quire, mobile | 2268 → 2268 ms | 0.00281 → 0.00263 | 504,546 → 512,073 bytes |

These are local lab observations, not Lighthouse scores or field Core Web Vitals. The layout-shift value sums shifts without recent input during the observation window; it is not a full-session CLS implementation. Resource transfer includes fetched subresources and excludes the HTML navigation response. The roughly 7.5KB increase includes the route announcer and new metadata/behavior. Differences of a few milliseconds are measurement noise, not claimed speed improvements. Reserving screenshot space materially reduced the desktop homepage's layout shift.

## Native-browser and assistive-technology acceptance

These checks remain **pending before treating native compatibility as accepted**:

| Environment | Evidence and remaining work |
| --- | --- |
| Edge 153.0.4234.48, Windows | Normal page rendering inspected. Sending F9 through the browser-tab tool produced no observable Reader UI; this does not establish whether the native menu offers Reading Mode. Native chrome/Reader UI is not exposed by the available tool. |
| Chrome Reading Mode | No native Chrome surface available in this session. |
| Firefox Reader View | No native Firefox surface available in this session. Mozilla Readability tests are a regression proxy, not native Firefox evidence. |
| Safari Reader, macOS/iOS | No native Safari platform available. Playwright WebKit would not establish Safari Reader behavior. |
| Screen readers | Native screen-reader output is unverified. Automated role/name/state and focus checks do not establish the spoken experience. |
| Native zoom and focus inspection | Confirm 200% text enlargement, 400% browser zoom/equivalent 320px reflow, visible focus/target spacing and sticky-header clearance with the actual browser controls. |

For each native reader, check `/`, `/work/immersive-product-platform/`, `/work/quire/`, `/work/monrovia-web-platform/`, `/work/false-witness/`, and `/work/stateful-workflow-runtime/`. Record browser version/platform, entry method and automatic availability, title/byline, narrative/diagram/list/image/link preservation, and exclusion of menus/theme controls/related work. For the homepage, distinguish automatic reader availability from selection/manual reading. Investigate missing case-study content; do not force browser heuristics with a second hidden article.

With a screen reader, traverse landmarks/headings and links; use skip navigation, keyboard project/component selection, route changes, and theme toggles. Confirm useful focus order, concise announcements, image alternatives, and no keyboard trap. Test modified-click project links and back navigation.

## Delivery and decisions

- The user approved implementation and requested a new branch and PR. The existing isolated worktree was reused on that new branch; main remains untouched. No extra approval round was added. Cost if misunderstood: the user reviews the branch through the requested PR.
- Nuxt's generated 404 fallback is client-only. A small `public/404.html` plus a prerender exclusion provides real static recovery. Cost: the static error document is maintained separately from the client error view.
- Shared project records generate JSON-LD and article content. CreativeWork describes the underlying project without inventing software ownership or licenses. Unsupported publication dates were omitted.
- The existing workbench content slot handles the article boundary; no new header-slot API was needed. Cost if the composition changes: revisit that boundary.
- Browser dependencies were installed earlier than the plan's third task to measure the baseline. All remain development-only. Explicit `.ts` imports let the existing native Node regression script load shared helpers under Nuxt's no-emit TypeScript configuration.
- Native acceptance gaps remain documented, and the PR is kept in draft pending those checks. Opening the PR does not mark native support or full WCAG conformance complete.
- Independent review set aside native readers, spoken screen-reader output/native zoom, production hosting/indexing, and remote CI execution because it could not establish those outcomes. Native and post-deployment checks remain pending; GitHub Actions status is reported on the PR separately from local results. Cost: these acceptance boundaries require their own evidence before a release claim.

PR builds run generated-output and browser checks with read-only repository permissions. Uploading the Pages artifact and deployment are limited to `main`; this branch is not merged or deployed by this task. After an approved merge, verify actual public redirects/status codes, canonicals, sitemap/robots, JSON-LD and rendered content through GitHub Pages, then request indexing through the site owner's normal search-console workflow if desired.

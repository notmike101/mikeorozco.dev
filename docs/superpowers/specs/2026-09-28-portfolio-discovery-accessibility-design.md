# Portfolio discovery, accessibility, and Reading Mode design

Date: 2026-09-28

Status: Written specification for user review. The conversational design was accepted with explicit additions for Schema.org JSON-LD and browser Reading Mode. Product implementation and dependency installation have not started. The written implementation plan follows approval of this specification.

Baseline: `6b585f6983d8d2caf4890cd58de429a82bbb2fd9` (`main`). Planning branch: `codex/portfolio-discovery-plan`.

## 1. Intent and constraints

Make Mike Orozco's existing portfolio discoverable by search engines and AI search systems, understandable through Schema.org structured data, accessible to people using assistive technology, and readable through browser reading modes. Preserve the project workbench, the visual direction, the established project ordering, and evidence-backed professional claims.

The user selected: allow search and citation discovery; block model-training crawlers. The implementation must apply that choice without blocking ordinary search indexing.

- Keep Nuxt 3 static generation and GitHub Pages hosting.
- Use Node.js >=22.12.0 and the existing pinned pnpm 11.9.0.
- Reuse `data/caseStudies.ts`, `data/projectLayers.ts`, `utils/site.ts`, the existing sitemap route, and generated-output checks.
- Add no runtime dependencies for SEO, structured data, or Reading Mode.
- Development-only browser/accessibility/extraction tools are permitted: Playwright, axe, and Mozilla Readability. Use the browser DOM for extraction tests; a separate DOM emulation dependency is unnecessary.
- Keep professional copy direct, preserve collaboration and prototype qualifications, and use `docs/portfolio-evidence.md` as the existing provenance map. Do not introduce unsupported employers, ownership, metrics, dates, licenses, or deployment claims.
- Preserve the established contact behavior: homepage mailto actions, no visible raw email address, no email address in structured metadata, and a usable legacy `/contact` fallback.
- No application code, new product dependency, PR, merge, or deployment is authorized by this specification's existence. The user reviews the written artifacts before implementation.

## 2. Verified baseline and evidence limits

Source inspection and live HTTP checks covered all 14 sitemap URLs: the homepage and 13 case studies. All returned HTTP 200, had one h1, unique titles, descriptions, and parseable JSON-LD. A missing URL returned HTTP 404. Live robots.txt permits all crawlers.

Existing useful behavior includes complete prerendered case-study narratives, project links in HTML, ProfilePage/Person and project/breadcrumb JSON-LD, a skip link, focus outlines, language metadata, and reduced-motion CSS.

Confirmed gaps:

- GitHub Pages serves case-study directory URLs with trailing slashes; canonicals and sitemap entries omit them. The root canonical also omits its normalized trailing slash.
- The mobile workbench hides project anchors and uses a JavaScript-dependent select.
- The workbench renders one selected component at a time; case-study HTML does not include the corresponding full set of component descriptions and evidence links.
- The case-study h1 is emitted by `ProjectWorkbench.vue` outside the `article.case-reader` in the page. The article has no explicit byline.
- Project JSON-LD identifies the project, but does not explicitly describe the case-study article and its relationship to the page, author, website, and project.
- `app.vue` has no NuxtRouteAnnouncer. In-place workbench changes require an explicit announcement and focus review.
- The error page has no title or robots metadata and relies on JavaScript for its home action.
- The deployment workflow runs type checking and generation but omits `pnpm test`.

No browser accessibility audit, native Reading Mode check, performance benchmark, build, or test suite was run for this planning baseline. Successful HTTP and JSON parsing checks do not establish accessibility, schema vocabulary validity, indexing, ranking, or Reading Mode compatibility.

## 3. Selected approach

Improve the existing implementation in place. A larger Nuxt SEO module suite would replace working metadata and sitemap code without solving the page-structure and interaction issues. A separate AI-only site, duplicated Markdown pages, or a custom reader application would add another content surface to maintain.

Use one coherent content pipeline: existing project records feed visible HTML, JSON-LD, sitemap URLs, and assertions. Interactive selection remains progressive enhancement over readable static pages.

## 4. Static content and URL contract

- Canonical page URLs are `https://mikeorozco.dev/` and `https://mikeorozco.dev/work/<slug>/`. Use that form in canonical tags, og:url, sitemap entries, structured data, and page links.
- Do not append slashes to assets, robots.txt, sitemap.xml, external URLs, mailto links, or URL fragments. Reuse or narrowly extend existing URL helpers rather than introducing a routing abstraction.
- Homepage `?project=<slug>` URLs remain UI state and canonicalize to the homepage. Do not add them or fragment URLs to the sitemap.
- Keep `/contact` as a compatibility page with its home canonical and an ordinary link to `/#contact`; preserve its existing client redirect. Do not add a new indexable contact page or mix conflicting noindex and consolidation signals.
- Unknown pages must have a useful title, `noindex` metadata, a main landmark, and a normal home link, while continuing to return HTTP 404 from the host.
- Every case study must be reachable through real anchors on desktop and mobile without JavaScript. Preserve normal modified-click behavior and existing selected-project/back-navigation behavior.
- Render each project's component descriptions and public evidence links in its canonical case study from `projectLayers`. Essential explanations remain visible prose. Native details/summary may contain supplementary code excerpts, but essential content must not depend on expanding a disclosure or selecting a control.
- Important diagram meaning must have text equivalents. Keep screenshots and source excerpts attributed and distinguish them from architectural diagrams.

## 5. Crawler policy

Keep the wildcard group permissive and the sitemap declaration. Add explicit disallow groups for `GPTBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, and `CCBot`.

Expected effective policy:

| Agent or token | Policy |
| --- | --- |
| Googlebot, Bingbot, Applebot | Allow |
| OAI-SearchBot, ChatGPT-User | Allow |
| Claude-SearchBot, Claude-User | Allow |
| PerplexityBot, Perplexity-User | Allow |
| GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot | Disallow all paths |

Document that Google-Extended controls both Gemini training and grounding; blocking it sacrifices those grounding uses while leaving Google Search inclusion/ranking unaffected according to Google's documentation. This follows the user's training opt-out priority. CCBot exclusion also excludes future Common Crawl collection, a broader use than model training alone.

These are documented preferences for cooperating agents, not access control or a guarantee against all training collection. User-initiated fetchers may have different robots semantics. Do not add IP blocking, bot challenges, or bot-specific HTML. A request with a crawler-like user-agent does not prove access from that provider's actual network.

## 6. Schema.org JSON-LD

Use Schema.org vocabulary serialized as JSON-LD in prerendered `application/ld+json` scripts with `@context: https://schema.org`. This requirement concerns structured data, not a JSON Schema validation document.

Use consistent absolute IDs and a small connected graph per page. A common entity must have the same identity and facts wherever emitted.

| Surface/entity | Type and relationships |
| --- | --- |
| Website | WebSite at `https://mikeorozco.dev/#website`; name, URL, language, publisher referencing Mike's Person identity |
| Mike | Person at `https://mikeorozco.dev/#person`; supported name, URL, job title, public profile links, and existing supported facts; no raw email |
| Homepage | ProfilePage at `https://mikeorozco.dev/#profile`; mainEntity is Person; isPartOf is WebSite |
| Case-study page | WebPage at `<canonical>#webpage`; URL, name, description, isPartOf WebSite, breadcrumb, and mainEntity Article |
| Case-study narrative | Article at `<canonical>#article`; headline matching the visible project heading, description, inLanguage, author, mainEntityOfPage WebPage, and about Project |
| Project described | CreativeWork at `<canonical>#project`, or SoftwareSourceCode only when the described entity is supported as software source; name, description, and appropriate verified public links |
| Case-study navigation | BreadcrumbList connected to the page, with Home and the named case study; render the same simple breadcrumb trail visibly |

The Article author must include Mike's name and URL alongside the stable Person @id. Do not require simple metadata consumers to dereference another graph node or fetch the homepage to discover an author name. Article authorship must not imply sole authorship or ownership of the underlying project.

Use vocabulary-appropriate properties. A repository URL alone does not establish an open-source license. Do not put framework, hosting, or database names into programmingLanguage; omit that property unless genuine language values are distinguished from the existing stack. Do not add ratings, offers, FAQ markup, accessibility certification claims, or unsupported copyright ownership.

Use existing verified images, with correct absolute URLs and dimensions. Avoid full articleBody duplication when visible static HTML supplies the narrative. Validate article publication/modification dates against publishing evidence; omit unsupported values. Project start dates are not article publication dates. If dates are displayed, use matching machine-readable time elements. Sitemap lastmod must describe real page changes and must not be reset on every build.

Serialize JSON-LD safely for an HTML script context and prevent stale or duplicate graphs after client navigation. Test special characters and script-closing text as serialization boundaries.

Verification must include both local semantic assertions and Schema.org Validator checks. Google Rich Results Test is supplementary for supported search features: valid Schema.org data and rich-result eligibility are distinct, and neither guarantees search display.

## 7. Browser Reading Mode

### Document structure

Each case study must contain one coherent article inside main. Its single h1, visible author byline, summary, challenge, role, stack, system explanation, decision sections, component evidence, outcomes, reflection, and content sources belong inside that article in a logical DOM order.

Keep the global header, project selector, theme control, related-project navigation, and footer outside the article. Adjust the article/header boundary with the smallest change to the workbench/page composition, preserving the visible layout rather than duplicating titles or adding a second reader-only content tree.

Use paragraphs, headings, lists, figures/captions, and ordinary links. Keep essential content out of CSS pseudo-elements, canvas-only graphics, hidden panels, and dynamically selected state. Supplementary source excerpts may use pre/code and disclosures, but their omission by a reader must not remove the explanation or evidence URL. Reader output must not be dominated by code, navigation, project menus, or repeated controls.

The homepage remains a ProfilePage and project index. Its identity, introduction, experience, capabilities, and contact context must form sensible plain-text reading order. Preserve normal case-study links and make the introductory content extractable. Do not mislabel the entire homepage as an Article or create duplicate hidden prose just to trigger a reader icon. Short utility routes need usable plain HTML; they are not long-form reader targets.

### Verification and acceptance

- Run Mozilla Readability against a clone of each generated case-study document with default extraction settings. Every case must produce nonempty content, the correct title, and author metadata. Do not lower thresholds or tune the parser to conceal document failures.
- Compare normalized extracted text against the actual project records: preserve summary, problem, role, each decision paragraph, system explanation, outcomes, reflection, and component descriptions. Check evidence/source link destinations separately. Headings may be represented as reader metadata rather than duplicated in the body.
- Verify that global navigation, theme controls, project menus, and unrelated case-study promotions do not become the extracted article.
- Test the homepage separately: extraction must preserve the identity/introduction rather than reporting a project menu as the article. Verify the complete homepage's semantic reading order and section reachability without JavaScript independently of an automatic reader heuristic.
- Record `isProbablyReaderable` results as diagnostics; a heuristic boolean alone is not a content-preservation test.
- Cover both direct page loads and client-side navigation so titles, author metadata, and article content do not become stale.
- Check native Chrome Reading Mode, Edge Reading Mode/Immersive Reader, Firefox Reader View, and Safari Reader. For each, record browser/version/platform, entry method, automatic availability, correct title/author, content preservation, readable figures/lists/links, and exclusion of navigation. Native checks cover the homepage plus `immersive-product-platform`, `quire`, `monrovia-web-platform`, `false-witness`, and `stateful-workflow-runtime` to exercise differing content shapes.
- For case studies, native-reader content loss is a defect to investigate. For the homepage, distinguish automatic availability from successful manual/selection-based reading where the browser provides it. No website can force every browser to show its reader control.
- Mozilla extraction is a regression proxy, not proof of Chrome, Edge, or Safari compatibility. Playwright WebKit is not native Safari Reader. An unavailable native browser/platform remains explicitly unverified; do not claim universal compatibility or mark that gate passed without the native evidence.

Mozilla documents that Readability can obtain metadata from Schema.org JSON-LD. This makes accurate Article metadata useful to the reader checks, but JSON-LD cannot replace readable HTML or guarantee reader activation.

## 8. Accessibility and performance

Target WCAG 2.2 AA across all public templates and the workbench's relevant states. Add NuxtRouteAnnouncer and concise in-place selection announcements. Verify focus stays useful when content changes, navigation preserves the user's location where intended, skip navigation works, and sticky elements do not obscure focused controls.

Check keyboard-only use, screen-reader output, accessible names/states, image alternatives, both themes, reduced motion, text contrast, control/focus contrast, target size or permitted spacing exceptions, text spacing, 200% text enlargement, and 320 CSS-pixel reflow including the equivalent 400% zoom scenario. Use 4.5:1 for normal text, 3:1 for large text, and the applicable 3:1 non-text contrast criteria. Do not equate an axe or Lighthouse score with full WCAG conformance.

Performance work begins with a measured baseline. Reserve image geometry where missing, prioritize visible primary content appropriately, and address unnecessary data/assets only when measured. Record mobile/desktop runs under matching conditions before and after changes; investigate regressions instead of hiding them in a score average. Field Core Web Vitals and lab measurements remain separate evidence. No arbitrary Lighthouse score is a substitute for accessible behavior or successful reader extraction.

## 9. Verification and delivery gates

| Gate | Required evidence |
| --- | --- |
| Generated output | All case studies and essential component prose exist before JavaScript; correct anchors, images, titles, descriptions, canonicals, social metadata, and sitemap membership |
| Crawler policy | Effective directives match the agent matrix; robots.txt and sitemap are accessible at their canonical public locations |
| Structured data | Parseable and safely serialized JSON-LD; vocabulary-valid properties; stable linked identities; Article author/title/subject correct; visible-content consistency; validator results and reviewed warnings |
| Reader extraction | Every case passes content and evidence-link preservation assertions; homepage identity/intro extraction; direct-load and client-navigation coverage |
| Browser accessibility | No unresolved automated A/AA violations in tested pages/states; keyboard, focus, zoom/reflow, theme, motion, and screen-reader evidence recorded |
| Native Reading Mode | The browser matrix above has actual results, with unavailable environments left explicitly pending rather than marked successful |
| Performance | Comparable baseline/final measurements and explanations for material changes; actual image dimensions/loading behavior checked |
| Build and delivery | Typecheck, generation, existing/expanded tests, and browser/extraction checks pass before deployment; live HTTP/status/redirect/content checks follow an authorized deployment |

Extend the existing Node/assert generated-output checks rather than replacing them. Keep browser and extraction checks together where they share the DOM and static preview. Use development-only tooling; no reader library ships to visitors.

CI must run `pnpm typecheck`, `pnpm generate`, `pnpm test`, and the new browser/extraction checks before artifact deployment. Preserve the existing navigation and contact regressions. Include useful failures for an invalid slug, missing metadata, broken schema reference, disallowed search agent, missing article section, missing source link, and stale client-navigation metadata.

After a separately authorized deployment, check the actual GitHub Pages responses, not just the local preview. Search Console/Bing ownership, sitemap submission, search indexing, AI citations, and field performance require separate account/provider evidence and are not promised by code completion.

## 10. Expected implementation surface and sequence

This is a responsibility map for the written implementation plan, not permission to execute it.

| Sequence | Existing files or areas | Deliverable |
| --- | --- | --- |
| 1 | `utils/site.ts`, `server/routes/sitemap.xml.ts`, page/link callers, `public/robots.txt`, `error.vue` | Consistent URLs, crawler policy, metadata/error behavior, and focused generated-output checks |
| 2 | `pages/index.vue`, `pages/work/[slug].vue`, existing site/content utilities | Connected Schema.org graphs and content/date consistency checks |
| 3 | `components/ProjectWorkbench.vue`, case-study template, `ProjectFlow.vue`, `ProjectLayerGraphic.vue`, existing project records | Coherent articles, static evidence, and mobile/no-JavaScript navigation |
| 4 | `app.vue`, `layouts/default.vue`, shared header/theme/workbench components, `assets/css/main.css` | Accessible route/selection behavior and measured presentation fixes |
| 5 | `scripts/verify-generated.mjs`, focused browser/extraction tests, `package.json`, lockfile, `.github/workflows/cd.yml`, `README.md` | Repeatable checks, CI gating, native-browser results, and operational notes |

Write regressions before changing nontrivial behavior. The implementation plan will pin exact test files, commands, interfaces, and independently reviewable commits. Reuse this isolated worktree if it remains suitable. Recommended execution is sequential native implementation followed by an independent whole-branch review, subject to the user's execution-method choice at the plan review.

## 11. Exclusions

No SEO platform subscription, new runtime SEO suite, AI-only content, custom Reading Mode toggle/application, reader-specific duplicate pages, fabricated schema, automatic article-body duplication in JSON-LD, mass-generated social images, or unrelated refactoring. Do not introduce llms.txt as a search requirement; reconsider only for a concrete consumer that needs it.

## 12. Primary references

- [Schema.org ProfilePage](https://schema.org/ProfilePage), [Article](https://schema.org/Article), [SoftwareSourceCode](https://schema.org/SoftwareSourceCode), and [Validator](https://validator.schema.org/).
- [Mozilla Readability](https://github.com/mozilla/readability): extraction API, metadata behavior, and readerability heuristic limits; also checked through Context7 `/mozilla/readability`.
- [Chrome Reading Mode](https://support.google.com/chrome/answer/14218344?hl=en), [Edge Reading Mode](https://support.microsoft.com/en-US/edge/use-immersive-reader-in-microsoft-edge), [Firefox Reader View](https://support.mozilla.org/en-US/kb/firefox-reader-view-clutter-free-web-pages), and [Safari Reader](https://support.apple.com/en-euro/guide/safari/sfri32632/mac).
- [Nuxt prerendering](https://nuxt.com/docs/3.x/getting-started/prerendering) and [NuxtRouteAnnouncer](https://nuxt.com/docs/3.x/api/components/nuxt-route-announcer); checked through Context7 `/websites/nuxt_3_x`.
- [Google AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).
- [OpenAI crawlers](https://developers.openai.com/api/docs/bots), [Anthropic crawlers](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), [Google-Extended](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended), [Applebot](https://support.apple.com/en-us/119829), [Perplexity crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers), and [CCBot](https://blog.commoncrawl.org/ccbot).
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/).

# Portfolio visual evidence

Reviewed 2026-09-27. The workbench uses independently sized component lists. A screenshot is a captured application, a source panel is an exact public excerpt, and an architecture diagram summarizes documented responsibilities. Diagrams are not screenshots or claims about an unverified deployment.

## 3D Product Tour Platform

- [Builder](https://builder.immersive.tf/) v2.2.0, inspected live.
- [Published tour](https://www.thermofisher.com/us/en/home/virtual/vanquish-core-hplc-3d-tour.html), inspected live.
- [Published manifest](https://www.thermofisher.com/content/dam/LifeTech/virtual/vanquish-core-hplc/vanquish-core-35.json): one part, seven views, one light, 28 hotspots, two CTA buttons. The displayed excerpt is lines 814–822.
- Both screenshots were captured from these applications. The builder screenshot uses the public manifest and its public Vanquish_Core_v2.glb asset. Host-relative asset paths were resolved to thermofisher.com for the builder preview; the model was imported locally. No published configuration was changed.

## Public personal projects

Every displayed excerpt in data/projectLayers.ts includes its filename, original starting line, and a commit-pinned source link. Excerpts were compared with the downloaded public files.

| Project | Reviewed commit | Components |
| --- | --- | --- |
| Quire | f335236f77198d35f279e52cc21077ee473d5c90 | Adapters, redaction, sealed storage, access gate, browser reader |
| Pack3D | 6d15c8950d4bb325022ea9553e85471468b2b039 | Desktop controls, packing worker, comparison |
| MealMind | d9a0524533b2551af0b680f7a7a7fd83b0e7c846 | Catalog, planning workspace, validation, AI adapter, shopping, MCP |
| ZCode Extensions | 31c20d79ad21f46e9c734a70195c5daecee53500 | Vendor loader, lifecycle host, typed SDK, recovery, native tasks |

Pack3D uses the existing application screenshot. Quire and MealMind now lead with captured interfaces. Every component has a screenshot or a plain-language responsibility diagram; exact public source remains available in a closed-by-default implementation disclosure. Quire's source confirms server-side ingestion and sealing despite contradictory README wording. MealMind's current API reads CookLang documents from PostgreSQL; local recipe files are a legacy import source. Only that stale storage claim was corrected in the case study. ZCode's AI-generation attribution and Scheduler version limits are retained.

### Interface captures

Captured from the actual source revisions above on 2026-09-27, using temporary local checkouts and synthetic data. No UI was reconstructed, no real conversations or recipe libraries were used, and no live provider was called.

- **Quire:** the unchanged production-built Vue viewer renders a synthetic conversation through a temporary loopback fixture server. Its encrypted responses use the real protocol envelope and the public test-vector key from [web/test/v2-helpers.ts](https://github.com/notmike101/quire/blob/f335236f77198d35f279e52cc21077ee473d5c90/web/test/v2-helpers.ts). The second capture is the real password gate with surrounding context cropped. Sample messages and their test-result text are demonstration content, not a claim that those example changes or tests ran.
- **MealMind:** the unchanged frontend uses the repository's [deterministic mock API](https://github.com/notmike101/meal-mind/blob/d9a0524533b2551af0b680f7a7a7fd83b0e7c846/tests/mocks/web-api.ts). Captures show the seven-meal weekly draft, recipe details, and shopping progress. The fixture has no recipe photos, so its normal fallback remains visible. Development tooling was disabled for capture.
- The workbench and case-study captions identify sample data. Screenshots can be opened at full size. These are frontend captures, not fresh full-stack or production validation.

## Resume and local source

- **Monrovia:** resume index.html lines 142–145 and CV cv.html lines 342–358 support the shared API, Nuxt/Docker community application, Azure migration, and separate Cloudflare delivery work. Their exact deployment relationships are not established. The diagrams keep those four responsibilities separate.
- **Engineering Plugin Marketplace:** CV lines 273–286 and the local marketplace snapshot's README lines 14–19 and marketplace manifest establish six packages. Atlassian and reporting plugins are ready for active use; Figma needs desktop prerequisites; offline tours, preproduction, and implementation/review packages remain in development. Component captions retain those distinctions. The separate reporting dashboard/API is a local prototype.
- **Wildly Unqualified:** local source at 711d85457c85de1199416ae4926d0778f240e5df, docs/MAINTAINING.md and docs/SERVER.md. Client, shared world, simulation, persistence, and release responsibilities match the implementation. Gameplay acceptance remains incomplete. Private source code is not reproduced.
- The separate orchestration runtime now has a runnable implementation, so the obsolete “design-stage” reference was removed without folding it into the marketplace case study.

## Capabilities and career history

The homepage expansion uses the supplied `Resumes/Web/cv.html` and `Resumes/Web/index.html`, checked on 2026-09-27. Capability groups summarize the CV's technical expertise section (539–548) and the existing project evidence above. Project links illustrate related work; they do not imply every listed skill was used on every linked project. Java/Spring Boot is described as a recent contribution, while LangGraph/A2A work remains labeled as local prototypes.

Role dates and responsibilities come from the CV: Thermo Fisher Scientific (217–305), independent consulting (312–330), Monrovia (334–360), MKTR (363–376), and the six earlier roles (382–448). Consulting overlaps employment and is presented separately. The expanded history retains the approximately 20% response-time and 30% page-load improvements as separate Monrovia results, 50+ custom consulting solutions, 30+ InTouch websites, and approximately 200 monthly Valiant support tickets.

The two Thermo Fisher awards sit within that role. Shared runtime development remains collaborative; authoring ownership, later platform stewardship, Unity web UI integration, security remediation, mentoring, and API contributions retain the CV's stated scope. No new seniority, proficiency scores, deployment claims, or undisclosed client findings are inferred.

## Between Sessions

The [live journal](https://ai-blog.mikeorozco.dev/) and its Journey page identify the publication as AI-authored and track principles, preferences, revisions, and open questions against published articles. The portfolio links to both the journal and its public source and does not attribute the articles to Mike as their author.

Reviewed the repository at [5fcdf8f2d2dc3c9e5a0aa2b2c1008ae92ae85737](https://github.com/notmike101/ai-blog/tree/5fcdf8f2d2dc3c9e5a0aa2b2c1008ae92ae85737): README.md describes Astro, Markdown collections, and publishing through pull requests; scripts/validate-content.mjs checks article metadata, privacy patterns, and article references in the journey record; .github/workflows/validate.yml runs site validation and browser tests. These checks support the publishing-workflow description, not a guarantee that an article's factual claims are correct. No blog content or deployment was changed.

## Organizations

The CV identifies MKTR INC (365–376), Valiant Technology (384–392), Artris (397–405), TOTAL PC (425–430), and MedeMedia (434–439).

- [MKTR's official site](https://www.mktr.co/) uses the [white header wordmark](https://www.mktr.co/assets/images/image01.png?v=073fdeb2).
- [Valiant's official site](https://thevaliantway.com/about-us/) identifies its [white SVG logo](https://thevaliantway.com/wp-content/uploads/2023/11/logo-white.svg).
- Artris, TOTAL PC, and MedeMedia appear as text because no defensible matching logo was found. No substitute marks were invented.
- Existing organization marks were retained. Katz Law is an existing portfolio client entry, not a resume-backed employment claim.

LinkedIn's public response did not expose employment history; the resume/CV and current source are the evidence for these changes. Source review does not constitute fresh runtime validation of the featured projects; the interface captures above have their own documented validation scope.

## Project expansion

Reviewed 2026-09-27. The expanded portfolio has 13 full case studies and 14 supporting entries. Full projects have a concrete problem, attributable implementation, several meaningful engineering decisions, and inspectable evidence. Supporting entries cover narrower tools, experiments, and contributions to someone else's application. Open-source licensing alone does not determine placement.

Between Sessions and Digital Garden moved from supporting entries into full case studies without duplicate cards. Vibe Translate remains a supporting contribution by explicit user direction. Empty/dependency-only local directories, coursework, and unverified forks were excluded. No dependencies were added to the portfolio.

### New public case studies

| Project | Reviewed commit | Evidence and scope |
| --- | --- | --- |
| [Balatro MCP](https://github.com/notmike101/balatro-mcp) | `9b27ce9fdbc52aa5b462caaa7daa528ec2b5808f` | `src/tools.rs`, `src/backend/{policy,runtime,state,replay,ipc}.rs`, `src/protocol.rs`, and `mod/codex_agent.lua` establish the decision/action contract, hidden-card filtering, file IPC, shared mutation lock, and SQLite records. The runtime enforces seed `2K9H9HN`. No live game, Rust build, or gameplay tests were run for this portfolio update. No gameplay-performance claim is made. |
| [Between Sessions](https://github.com/notmike101/ai-blog) | `5fcdf8f2d2dc3c9e5a0aa2b2c1008ae92ae85737` | Source described above; homepage and Journey were inspected live and captured on 2026-09-27. `between-sessions-home.png` and `between-sessions-journey.png` are unmodified 1265×712 browser captures. The [Pages deploy](https://github.com/notmike101/ai-blog/actions/runs/31522075634) succeeded for this commit. A later Validation run belongs to a different commit and is not presented as validation of this HEAD. |
| [Digital Garden](https://github.com/notmike101/digital-garden-app) | `feb2765bb9a4b465e7b9a0d5832cbe354dd743d4` | `docker-compose.yml`, `livesync-bridge/processor.js`, `watch-build.js`, and `nginx.conf` establish the three-container pipeline. The [LiveSync Bridge](https://github.com/vrtmrz/livesync-bridge) is credited upstream work. The optional password is a client-side display gate, not access control. No claim is made about complete custom-path deletion reconciliation, atomic publishing, or a verified production deployment. |

Balatro and Digital Garden have no verified product screenshots in the inspected source. Their components use labeled responsibility diagrams, not reconstructed UI or illustrative code presented as a screenshot. Blog writing remains attributed to the AI agent; Mike's case study concerns the publishing system.

Balatro and Digital Garden use the status **Public source**: both repositories are publicly inspectable, but neither establishes an open-source license for the owned project. Digital Garden's vendored dependency license is not treated as a license for the whole repository.

### Local prototypes

- **False Witness:** reviewed local source at `cd73a7e8f35e13854d267c43d6519c024ee65dce`, including player/world interaction scripts, session and menu scripts, content loader, and the C3/N5/N6 evidence records. The current implementation is newer than the README's opening status. Existing packaged loopback checks do not establish distinct-PC play, the complete cooperative loop, voice, or internet reachability. The case study retains those limits. `false-witness-prototype.png` is the retained 736×498 C2 native front-view geometry capture, explicitly labeled early prototype art; its “32 checks passed” overlay belongs to that historical inspection, not this portfolio review. Source image SHA-256: `fdac669da4ea0cefeb1b6ab3dbd214734a0d43994157126b5fe6f74b602125de`.
- **Stateful Workflow Runtime:** reviewed local source at `25bdf393ca4d403f9be604540380ceb82b97fe98`. The implemented CLI exposes setup/proof/status. `src/orchestration/verticalProof.js`, `ledger.js`, storage modules, and the app-server adapter establish the bounded generate/pause/review/image-probe/persist prototype. `test/verticalProof.test.js` contains a resume check with real checkpoint files and SQLite and a controlled worker adapter. That test was inspected, not rerun here. Full requirements intake, implementation, and readiness automation remain design-stage work. No real client input, model run, or autonomous project delivery is claimed.

Both local cases use high-level descriptions. Private source excerpts, repository links, credentials, internal inputs, and operational data are not published. The selected False Witness screenshot contains only prototype geometry and inspection status. The workflow has no verified graphical interface, so its visual is a responsibility diagram.

### Supporting additions

| Entry | Reviewed evidence | Presentation boundary |
| --- | --- | --- |
| Vibe Translate contribution | [Upstream PR #1](https://github.com/suicvne/vibe-translate/pull/1), merged 2026-09-23, head `19e8bd5d2d920446e2a42f124c2e6c63c58a2e53`; [macOS CI](https://github.com/notmike101/vibe-translate/actions/runs/35873086508) | Mike's native provider integration in an existing app. Device authorization, Keychain storage, streaming/cancellation, and focused mocked tests; not authorship of the app or verified real-account behavior. |
| ZCode Token Speed | `3b6a6d1250291634931b1c57dc97b6529976a779`, README and controller/metrics/renderer sources | Live estimates and finalized request-duration throughput, not provider decoding-speed benchmarks. Metrics exclude prompt/response content. |
| ZCode Scheduler | `4ef98f247be43d7be4f4a0b3d00896e3426a052c`, README and release history | Explicitly retired on ZCode 3.5.2+, retained for 3.3.6–3.5.1. Also linked as an integration example in the existing host case study. |
| Sunshine Audio Sink Updater | `cbfd0f42d30dd14a9f0e2ae58e2b6017745d0b0d`, README | Updates audio configuration; does not itself restart Sunshine. |
| Daily Star Chart | `9589df61a396675cdb6dd08500a9730a43da8802`, App.vue, dataManager.ts, NavButtons.vue, print styling | Daily editable records in IndexedDB and printable layout; no clinical or effectiveness claim. |
| Google Fonts for BetterDiscord | `a29f5c643389be80cefb70a4a7677188c1b09f5c`, src/main.tsx and settings component | Historical font selection and interface customization; present-day Discord compatibility was not tested. |
| Server Themes for BetterDiscord | `273417c75231fe636aa0ca029a86f38e9306e03a`, src/main.tsx and settings component | Historical per-server theme assignments; present-day compatibility was not tested. |
| Server Survival Agent Toolkit | `b6c5887851eada1394dcfd9df2ce765fcfad90b3`, README, LEDGER.md, ledger.py, and playwright/README.md | Agent tooling for another author's browser game; durable observations/decisions and visible-control drivers, not authorship of the game or a verified high score. |

This research used read-only repository APIs and local files; it required no new temporary clones or project runtime executions.

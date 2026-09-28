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

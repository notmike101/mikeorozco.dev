export interface ProjectFlow {
  title: string;
  steps: { title: string; description: string }[];
  caption: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  problem: string;
  role: string;
  details: { title: string; paragraphs: string[] }[];
  outcomes: string[];
  reflection: string;
  stack: string[];
  repository?: string;
  status: 'Enterprise work' | 'Open source' | 'Internal tooling' | 'Independent application' | 'In development';
  featured: boolean;
  publishedAt: string;
  updatedAt: string;
  seoTitle: string;
  seoDescription: string;
  socialImage: string;
  image?: { src: string; alt: string; width: number; height: number; href?: string; label?: string };
  flow: ProjectFlow;
  links: { label: string; href: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'immersive-product-platform',
    title: '3D Product Tour Platform',
    shortTitle: '3D Product Tour',
    summary: 'Connecting Vue authoring tools, configuration, and a shared browser runtime so content teams can build interactive product experiences.',
    problem: 'Product tours and virtual sales demos needed common rendering and interaction behavior, but served different presentation needs. Building each experience as a separate application would repeat work and leave content changes dependent on engineering. The challenge was to create a reusable foundation while keeping individual products and their authoring tools practical to maintain.',
    role: 'Senior Software Engineer, Immersive Technologies at Thermo Fisher Scientific. I owned authoring, configuration, and integration work, collaborated with a rendering-focused engineer on the shared runtime, and later took on broader stewardship of the core, tours, and sales demos.',
    details: [
      {
        title: 'A platform behind the visible experience',
        paragraphs: [
          'The customer sees an interactive instrument, its features, and the controls for exploring it. Behind that experience is a second product: the tooling that lets a content team assemble and maintain the tour. Both sides have to agree on what can be configured and how that configuration becomes behavior in the browser.',
          'My work spanned that boundary. I built Vue authoring applications alongside the tour and sales-demo implementations, connecting what editors could configure to the capabilities of the shared runtime. This kept authoring decisions grounded in behavior the application could actually support.',
        ],
      },
      {
        title: 'Separate content from application behavior',
        paragraphs: [
          'The builders produce JSON configurations. Each application processes that configuration and invokes the appropriate core APIs. Content, application behavior, and rendering therefore have distinct responsibilities: an editor supplies the experience definition, the application interprets it, and the runtime provides reusable capabilities.',
          'That boundary matters when an experience changes. A content update can stay within the authoring workflow, while a new interaction may require changes to both the builder and the application. Shared functionality belongs in the runtime when it serves multiple experiences; product-specific interface behavior can remain with the application that needs it.',
        ],
      },
      {
        title: 'Evolve the runtime with its applications',
        paragraphs: [
          'I worked with a rendering-focused engineer on the evolution from an earlier Three.js application into a reusable runtime and application ecosystem. This included contributing to the separation of shared functionality into an npm package and to the later Babylon.js and TypeScript architecture.',
          'Reusable components, event-driven services, and explicit interfaces helped organize the relationship between shared capabilities and application-specific behavior. Product tours and virtual sales demonstrations could draw on a common foundation without requiring identical interfaces. Maintaining those connections also meant retaining the historical context behind earlier decisions as the ecosystem evolved.',
        ],
      },
      {
        title: 'Carry the architecture through to a real product',
        paragraphs: [
          'The Vanquish Core HPLC 3D tour is a concrete example of the customer-facing work. I led its implementation with limited assistance on an individual feature, working across interface behavior, product content, rendering integration, and delivery needs. It provides a public view of the kind of experience the platform supports.',
          'The work also involved collaboration with product, design, content, QA, and architecture teams. Clear configuration boundaries were useful only if those collaborators could understand the authoring workflow and the consequences of changing it. Documentation, technical guidance, and maintenance were part of owning the system beyond its initial implementation.',
        ],
      },
    ],
    outcomes: [
      'Enabled content teams to create additional tours without a separate engineering implementation for each one.',
      'Supported product tours and virtual sales demos through shared runtime capabilities.',
      'Received the Immersive Technologies Outstanding Achievement award for leading development of the 3D Product Tour platform.',
    ],
    reflection: 'The lasting result is the connection between the authoring tools and the experiences they produce. A reusable runtime solves part of the problem; its interfaces also need to remain understandable to the applications and people that depend on it. The public tour illustrates the delivered experience, while this account preserves the distinction between my authoring and integration ownership and the collaborative rendering work.',
    stack: ['TypeScript', 'Vue', 'Three.js', 'Babylon.js', 'JSON', 'npm'],
    status: 'Enterprise work',
    featured: true,
    publishedAt: '2022-09-01',
    updatedAt: '2026-09-27',
    seoTitle: '3D Product Tour Platform — Mike Orozco',
    seoDescription: 'How Vue authoring tools, JSON configuration, and a shared 3D runtime support reusable enterprise product tours and sales demos.',
    socialImage: '/images/og-default.png',
    image: {
      src: '/images/vanquish-tour.png',
      alt: 'Vanquish Core HPLC product tour showing the interactive instrument and feature controls',
      width: 1280,
      height: 720,
      href: 'https://www.thermofisher.com/us/en/home/virtual/vanquish-core-hplc-3d-tour.html',
      label: 'Explore the live Vanquish Core tour',
    },
    flow: {
      title: 'From authoring to an interactive experience',
      steps: [
        { title: 'Author', description: 'Content teams configure the experience in Vue builders.' },
        { title: 'Describe', description: 'JSON carries the authored content and configuration.' },
        { title: 'Interpret', description: 'The tour or sales-demo application processes the configuration.' },
        { title: 'Render & interact', description: 'Shared runtime APIs provide reusable browser capabilities.' },
      ],
      caption: 'A conceptual view of the authoring-to-runtime boundary. Product-specific interfaces sit alongside shared capabilities.',
    },
    links: [
      { label: 'Live Vanquish Core HPLC 3D tour', href: 'https://www.thermofisher.com/us/en/home/virtual/vanquish-core-hplc-3d-tour.html' },
      { label: '3D Tour Builder', href: 'https://builder.immersive.tf/' },
      { label: 'Published Vanquish Core manifest', href: 'https://www.thermofisher.com/content/dam/LifeTech/virtual/vanquish-core-hplc/vanquish-core-35.json' },
    ],
  },
  {
    slug: 'quire',
    title: 'Quire',
    shortTitle: 'Quire',
    summary: 'A publishing workflow for AI coding sessions, with server-side redaction, encrypted storage, and controlled access to a readable web view.',
    problem: 'A coding session can contain useful technical reasoning alongside local paths, credentials, tool output, and other material that does not belong in a public link. Different coding tools also record conversations differently. Quire addresses both problems: turn a selected session into a readable artifact and apply explicit controls to how that artifact is stored and shared.',
    role: 'Independent project — product direction and development across session adapters, the publisher CLI, API, browser viewer, security controls, and deployment tooling.',
    details: [
      {
        title: 'Make publishing a deliberate action',
        paragraphs: [
          'The workflow begins with an owner choosing a session to publish. Adapters support ZCode, Claude Code, Codex, and Oh My Pi, shaping their different records into a common conversation format. A CLI and coding-tool integrations make that operation available where the work happens.',
          'The common format keeps the viewer independent of each source tool’s storage layout. Messages, tool calls, and supporting content can be presented consistently, while source-specific parsing stays in the adapter. Publishing is opt-in; keeping a local conversation does not automatically create a share.',
        ],
      },
      {
        title: 'Put redaction at the ingestion boundary',
        paragraphs: [
          'Quire performs authoritative redaction on the server before persisting the shared content. The rules cover credential patterns, private keys, connection strings, local paths, and other sensitive text. The preparation stage also handles structured tool content and normalization so the stored representation is not determined solely by a client-side preview.',
          'This is a boundary with practical tradeoffs. Pattern-based redaction can reduce accidental disclosure, but it cannot decide that every piece of project information is appropriate to publish. The owner still chooses the session and audience. Server-side enforcement makes the rules consistent across publishers while leaving that publishing decision explicit.',
        ],
      },
      {
        title: 'Separate storage protection from viewer access',
        paragraphs: [
          'The publisher generates a content key, and the server uses it while processing the authenticated upload to seal redacted chunks with AES-GCM. The stored representation is ciphertext. The viewer receives its key through the link’s fragment and decrypts the returned envelopes in the browser.',
          'The server processes the original upload and its key during ingestion, so this is not a zero-knowledge system. Password protection, expiration, revocation, and rate limits address a different question: who can retrieve the shared artifact and for how long. Each protection has a defined responsibility within the share lifecycle.',
        ],
      },
      {
        title: 'Keep a long technical conversation readable',
        paragraphs: [
          'A useful viewer needs to preserve the shape of engineering work. Quire combines rendered Markdown, syntax highlighting, expandable tool content, and incremental loading for long sessions. The same artifact can communicate a decision to a reviewer without requiring them to install the coding tool that produced it.',
          'The implementation separates the publisher, Hono/Postgres server, and Vue viewer. Repository tests cover redaction, share encryption, storage, adapters, and browser flows, and an operations guide records migration and recovery considerations. Those artifacts make the behavior inspectable and provide a basis for regression checks as source tools and session formats change.',
        ],
      },
    ],
    outcomes: [
      'Created a common publishing and viewing workflow across multiple AI coding tools.',
      'Combined redaction, encrypted storage, password protection, expiration, and revocation in one share lifecycle.',
      'Published the implementation, tests, and operational documentation for inspection.',
    ],
    reflection: 'The central engineering lesson is to describe each protection in terms of what it actually does. Redaction changes the content, encryption protects the stored representation, and access controls govern retrieval. Each has a separate responsibility and limit. Quire is an implemented independent project, with source and validation artifacts available for review; automated redaction still requires judgment about what should be shared.',
    stack: ['TypeScript', 'Vue', 'Hono', 'PostgreSQL', 'Docker', 'Playwright'],
    repository: 'https://github.com/notmike101/quire',
    status: 'Open source',
    featured: true,
    publishedAt: '2026-09-27',
    updatedAt: '2026-09-27',
    seoTitle: 'Quire — Session Sharing Case Study | Mike Orozco',
    seoDescription: 'Designing a coding-session publishing workflow with adapters, server-side redaction, encrypted storage, and a readable Vue viewer.',
    socialImage: '/images/og-default.png',
    image: {
      src: '/images/quire-conversation.png',
      alt: 'Quire conversation viewer showing a synthetic coding session, collapsible tool results, and message navigation',
      width: 1280,
      height: 720,
      href: '/images/quire-conversation.png',
      label: 'Quire conversation viewer · sample session',
    },
    flow: {
      title: 'From a local session to a shared conversation',
      steps: [
        { title: 'Select & shape', description: 'The owner publishes a session through a source-specific adapter.' },
        { title: 'Redact & seal', description: 'The server processes the upload, redacts content, and encrypts chunks.' },
        { title: 'Store & control', description: 'Ciphertext storage and share-level access controls serve the artifact.' },
        { title: 'Read in the browser', description: 'The viewer uses the link-fragment key to decrypt returned content.' },
      ],
      caption: 'The server sees the upload during ingestion. Encryption at rest and browser decryption do not make this a zero-knowledge service.',
    },
    links: [
      { label: 'Architecture and security model', href: 'https://github.com/notmike101/quire#architecture' },
      { label: 'Sealed-share operations guide', href: 'https://github.com/notmike101/quire/blob/main/docs/operations/sealed-shares.md' },
    ],
  },
  {
    slug: 'monrovia-web-platform',
    title: 'Monrovia Web Infrastructure',
    shortTitle: 'Monrovia',
    summary: 'Azure migration, a unified Node.js API, and Cloudflare delivery improvements for a web platform with multiple upstream data sources.',
    problem: 'Monrovia’s web applications depended on hosting, organizational data, and external services that needed to work together. Improving the public experience meant addressing those underlying dependencies as well as frontend behavior. The work connected infrastructure ownership, data integration, and delivery performance within an existing business environment.',
    role: 'Web Developer at Monrovia Plants, 2019–2021. I worked with marketing and IT across web-service migration, backend integration, public applications, and ongoing infrastructure maintenance.',
    details: [
      {
        title: 'Treat migration as an operational change',
        paragraphs: [
          'I migrated web services to Microsoft Azure, handling the data-migration and service-integration work that accompanied the hosting change. The goal extended beyond relocating a deployment: the organization needed infrastructure its internal IT team could control and maintain.',
          'That made the relationship between services and data part of the migration itself. A working page is only one part of a web platform; the hosting environment must also support the services it calls and the people responsible for keeping those services available. My responsibilities connected application implementation with those operational needs.',
          'The migration reduced hosting costs, improved website response time by approximately 20%, and gave internal IT greater control over the technology stack and infrastructure resources. The cost improvement is qualitative here because this case study does not include a historical cost baseline.',
        ],
      },
      {
        title: 'Give applications a common data access layer',
        paragraphs: [
          'I designed and implemented a Node.js API that consolidated information from SOAP APIs, databases, and external data sources. Consuming applications could use a common access layer instead of carrying the details of each upstream integration themselves.',
          'The implementation used MySQL, caching, load balancing, and a modular service architecture. Organizing the integration logic into modules created a place to update an individual source without treating every connected application as part of the same indivisible change.',
          'This introduced a shared responsibility: the API had to translate between upstream systems and its consumers while remaining maintainable in its own right. The architectural value was a clearer location for integration behavior and fewer source-specific assumptions spread across applications.',
        ],
      },
      {
        title: 'Improve delivery separately from hosting',
        paragraphs: [
          'A separate Cloudflare integration reduced average page load times by approximately 30%. This addressed the delivery side of the public experience alongside the hosting and service work. It is a distinct result from the Azure migration’s response-time improvement.',
          'Keeping those outcomes separate matters because response time and page load time describe different observations. The percentages should not be added together or presented as one aggregate speedup. They are approximate historical results from my work at Monrovia, rather than a benchmark of the current public website.',
        ],
      },
      {
        title: 'Connect the platform to product needs',
        paragraphs: [
          'My work with marketing also included a plant community and product-discovery application using Nuxt.js and Docker. The application supported connections around plant-related interests and product recommendations related to content people shared. I worked across frontend and backend behavior with server-side rendering support.',
          'That product context kept the infrastructure work connected to actual users and collaborators. Data integration, hosting, and delivery choices supported public web applications that marketing and IT needed to operate. Requirements discussions and continuing maintenance were part of the same responsibility as the implementation.',
        ],
      },
    ],
    outcomes: [
      'Improved website response time by approximately 20% through the Azure migration.',
      'Separately reduced average page load times by approximately 30% through Cloudflare integration.',
      'Consolidated multiple data sources behind a Node.js API and increased internal control over infrastructure.',
    ],
    reflection: 'This work strengthened my approach to problems that cross frontend, backend, and hosting boundaries. A visible performance issue can have several causes, and each change needs an outcome that matches the layer it affects. The diagram summarizes the integration responsibilities across these initiatives; it is a conceptual illustration rather than a reproduction of the deployment topology.',
    stack: ['Node.js', 'Azure', 'Cloudflare', 'MySQL', 'Nuxt', 'Docker'],
    status: 'Enterprise work',
    featured: true,
    publishedAt: '2026-09-27',
    updatedAt: '2026-09-27',
    seoTitle: 'Monrovia — Web Infrastructure Case Study | Mike Orozco',
    seoDescription: 'Azure migration, a shared Node.js integration API, and separate Cloudflare delivery improvements at Monrovia Plants.',
    socialImage: '/images/og-default.png',
    flow: {
      title: 'A common boundary for organizational data',
      steps: [
        { title: 'Data sources', description: 'SOAP services, databases, and external information.' },
        { title: 'Integration modules', description: 'Source-specific behavior behind a common Node.js API.' },
        { title: 'Web applications', description: 'Public interfaces consume data through the shared access layer.' },
        { title: 'Operations & delivery', description: 'Azure hosting and separate Cloudflare performance work.' },
      ],
      caption: 'Conceptual responsibilities across related initiatives. The Azure and Cloudflare performance results are separate.',
    },
    links: [],
  },
  {
    slug: 'pack3d',
    title: 'Pack3D',
    shortTitle: 'Pack3D',
    summary: 'A Windows desktop workflow for optimizing GLTF and GLB assets, with geometry and texture controls and an original-to-output comparison.',
    problem: 'Large 3D assets make web experiences expensive to load and deliver. Preparing those assets involves several different operations, each with settings that affect size and visual quality. Pack3D brings those choices into a desktop workflow so users can configure an optimization job and inspect its output without composing the underlying command-line tools themselves.',
    role: 'Creator and maintainer — product definition, desktop architecture, optimization pipeline, interface design, Windows packaging, and releases.',
    details: [
      {
        title: 'Make the preparation work visible',
        paragraphs: [
          'The workflow starts with a GLTF or GLB file. A user drops the model into the application, chooses geometry and texture settings, runs the job, and compares the result with the original. File-size reporting and visual comparison give the settings a concrete consequence.',
          'This project grew from the practical needs of interactive web work: preparing an asset for delivery is a separate engineering problem from rendering it once it has loaded. A useful optimizer needs to expose enough control to suit different models without requiring every user to assemble a toolchain.',
        ],
      },
      {
        title: 'Compose existing optimization tools',
        paragraphs: [
          'Pack3D uses established tools for the underlying transformations. Its pipeline brings together geometry deduplication, welding, vertex reordering, instancing, texture resizing, Basis Universal texture compression, and Draco mesh compression. The desktop application supplies the workflow around those capabilities.',
          'The implementation keeps packing work in a separate worker and uses the Electron main process and Vue renderer for the surrounding desktop experience. Texture processing can invoke the packaged toktx executable where required. This division lets the UI describe a job while the worker performs the asset-processing operations.',
        ],
      },
      {
        title: 'Expose choices that affect the result',
        paragraphs: [
          'Geometry and texture optimization address different parts of an asset. Removing repeated data and reusing geometry can help one model, while texture dimensions or encoding may dominate another. Pack3D exposes those operations independently so the user can select an appropriate combination.',
          'The texture options include ETC1S and UASTC, along with image-compression options. Draco controls expose quantization settings and encoding choices. These settings make the tradeoff visible: the smallest file is not automatically the best result if detail is lost or the target runtime has different loading and decoding needs.',
          'Useful defaults reduce setup work, but comparison remains part of the workflow. The application presents original and optimized output so a user can examine fidelity alongside file-size savings. Results depend on the source asset, selected settings, and target environment; a single percentage would not describe every model.',
        ],
      },
      {
        title: 'Deliver a usable desktop tool',
        paragraphs: [
          'The surrounding product work includes packaging dependencies and producing a Windows application people can download. Repository automation builds and publishes releases, bringing the interface, packing worker, and required tools together as a desktop distribution.',
          'Windows 10 and later are the documented supported platform. That boundary is part of the delivered product: using Electron does not by itself establish that every operating system is supported. The repository makes both the implementation and build process available for inspection.',
        ],
      },
    ],
    outcomes: [
      'Combined geometry and texture optimization in a visual desktop workflow.',
      'Made source-to-output comparison and compression settings available in one application.',
      'Published an open-source implementation with downloadable Windows releases.',
    ],
    reflection: 'Pack3D demonstrates how developer tooling can make a specialized process easier to use without hiding its important choices. The value is in connecting configuration, processing, and inspection. The screenshot shows the application interface; this account documents its workflow rather than a compression benchmark. A useful benchmark would need a named source asset, recorded settings, and a defined target runtime.',
    stack: ['Vue', 'TypeScript', 'Electron', 'GLTF Transform', 'Draco', 'Basis Universal'],
    repository: 'https://github.com/notmike101/pack3d',
    status: 'Open source',
    featured: true,
    publishedAt: '2023-01-01',
    updatedAt: '2026-09-27',
    seoTitle: 'Pack3D — 3D Asset Optimization Case Study | Mike Orozco',
    seoDescription: 'Bringing geometry and texture optimization into a Windows desktop workflow with configurable compression and visual comparison.',
    socialImage: '/images/og-default.png',
    image: {
      src: '/images/pack3d-screenshot.png',
      alt: 'Pack3D desktop interface showing optimization controls and a loaded GLB model',
      width: 1250,
      height: 875,
    },
    flow: {
      title: 'Configure, optimize, and inspect',
      steps: [
        { title: 'Load a model', description: 'Start with a GLTF or GLB asset.' },
        { title: 'Choose settings', description: 'Configure geometry cleanup, textures, and mesh compression.' },
        { title: 'Process the asset', description: 'A packing worker coordinates the optimization tools.' },
        { title: 'Compare the output', description: 'Inspect visual fidelity and file-size changes together.' },
      ],
      caption: 'The workflow preserves a place for human judgment: compression settings need to suit the asset and its intended use.',
    },
    links: [
      { label: 'Features and supported platform', href: 'https://github.com/notmike101/pack3d#features' },
      { label: 'Download Windows releases', href: 'https://github.com/notmike101/pack3d/releases' },
    ],
  },
  {
    slug: 'engineering-workflow-tooling',
    title: 'Engineering Plugin Marketplace',
    shortTitle: 'Engineering Marketplace',
    summary: 'A reusable internal plugin marketplace connecting engineering context, implementation, validation, and human review.',
    problem: 'AI-assisted engineering needs more than a useful instruction in one session. Engineers need project context, a repeatable way to use it, and a clear record of what has been decided or validated. Rebuilding those instructions for every project also makes distribution and maintenance part of the problem. My internal tooling work addressed that shared workflow.',
    role: 'Senior Software Engineer at Thermo Fisher Scientific — created and maintained the Codex plugin marketplace, shared skills, helper tooling, workflow integrations, and installation guidance.',
    details: [
      {
        title: 'Package a common starting point',
        paragraphs: [
          'The toolset evolved from an initial shared-instruction distribution model into a Codex plugin marketplace. Skills, helper scripts, workflow instructions, and integrations could be maintained together and made available to engineers as a reusable starting point.',
          'Distribution required its own engineering attention. Repository access, installation, updates, and plugin lifecycle behavior affect whether a shared workflow can actually be used. I maintained the marketplace configuration and supporting guidance alongside the instructions themselves, working through those constraints as the toolset evolved.',
        ],
      },
      {
        title: 'Connect the work to its source material',
        paragraphs: [
          'The workflows connect Jira and Confluence for issue context, progress updates, and technical-document publication, with Figma integration for retrieving and interpreting design evidence. The purpose is to make requirements and implementation context available during the work, then retain a useful account of what happened.',
          'Technical design document generation draws on requirements, assets, design material, implementation constraints, and unresolved questions. Those inputs do not always agree. Recording a missing decision is useful because it prevents an assumption from quietly becoming a requirement simply by appearing in generated code.',
        ],
      },
      {
        title: 'Keep execution and acceptance distinct',
        paragraphs: [
          'The workflow spans requirements review, technical planning, implementation, browser-based testing, code review, QA feedback, and delivery handoffs. Human plan approval and pull-request review are explicit parts of the instructions. A completed agent action is an input to evaluation; it does not approve its own result.',
          'Validation and structured handoffs connect implementation work to the source ticket and supporting artifacts. This makes it possible to discuss a change in terms of its intended behavior and observed evidence. It also keeps incomplete prerequisites or unresolved questions visible when work moves between people or sessions.',
          'I shared this approach with internal engineering audiences, explaining both the workflow and its integration requirements. Tool availability and agent context have limits, so technical guidance included what still needed to be checked rather than treating an installed integration as proof that a complete workflow was ready.',
        ],
      },
      {
        title: 'Explore reporting and requirements reconciliation',
        paragraphs: [
          'Related work includes a local AI usage-reporting prototype with a database, dashboard, MCP server, and REST API. It organizes usage by project, individual, and session, with submission credentials scoped to a plugin instance and associated with its human operator. Personal use and Docker-based testing exercised the local reporting flow.',
          'Requirements-reconciliation extensions remain in development and testing. They bring requirements, designs, spreadsheets, and technical documents into review workflows with decision packets, registers, and handoffs. These are extensions to the implemented toolset, with their own validation scope.',
        ],
      },
    ],
    outcomes: [
      'Created and maintained a reusable internal marketplace for engineering skills, helper tooling, and integrations.',
      'Connected planning, implementation, validation, and delivery handoffs to project context and human review.',
      'Built a separate local usage-reporting prototype and developed requirements-reconciliation extensions.',
    ],
    reflection: 'The engineering focus is repeatability and inspectability: making context available, recording decisions, and giving reviewers evidence they can assess. The marketplace is implemented internal tooling. Usage reporting is a locally exercised prototype, and reconciliation extensions remain in development and testing. Separate A2A experiments and an orchestration runtime have their own scope. The practical result described here is a maintained toolset and explicit workflow, rather than a measured organization-wide productivity gain.',
    stack: ['Codex plugins', 'MCP', 'Jira', 'Confluence', 'Figma', 'Git'],
    status: 'Internal tooling',
    featured: false,
    publishedAt: '2026-09-27',
    updatedAt: '2026-09-27',
    seoTitle: 'Engineering Plugin Marketplace — Mike Orozco',
    seoDescription: 'An internal plugin marketplace connecting project context, engineering workflows, validation, and human review, with clearly scoped prototypes.',
    socialImage: '/images/og-default.png',
    flow: {
      title: 'A workflow with explicit review points',
      steps: [
        { title: 'Gather context', description: 'Requirements, issue history, designs, and known constraints.' },
        { title: 'Plan & review', description: 'Record decisions and unresolved questions for human approval.' },
        { title: 'Implement & check', description: 'Use shared tooling, browser checks, and reviewable evidence.' },
        { title: 'Review & hand off', description: 'Connect the result to its ticket, QA feedback, and delivery record.' },
      ],
      caption: 'A conceptual summary of the intended engineering workflow. Reporting and reconciliation extensions have their own validation scope.',
    },
    links: [],
  },
  {
    slug: 'mealmind',
    title: 'MealMind',
    shortTitle: 'MealMind',
    summary: 'A full-stack meal-planning application that connects recipes, editable weekly plans, shopping lists, and AI-assisted suggestions.',
    problem: 'A generated meal suggestion is only useful if it fits into the rest of a planning workflow. People need to choose recipes, adjust dates and servings, change their minds, and turn a plan into a shopping list. MealMind connects those steps while keeping application rules and persistent state responsible for what becomes an accepted plan.',
    role: 'Independent project — product direction, full-stack implementation, AI integration, and development of the web and MCP interfaces.',
    details: [
      {
        title: 'Start with recipes and an editable plan',
        paragraphs: [
          'MealMind stores CookLang recipe documents in PostgreSQL and exposes structured ingredients, instructions, timers, and other recipe details. The web interface renders those details alongside the planning and shopping workflows. Recipes remain concrete application data that a plan can reference.',
          'A weekly plan supports any number of dated meals, with an optional slot label and a serving count. Users can create a blank plan, add or remove meals, or ask for a generated draft with a chosen meal count. This allows manual and AI-assisted planning to use the same underlying workflow.',
        ],
      },
      {
        title: 'Validate suggestions against application rules',
        paragraphs: [
          'Generated output passes through structured-response validation and domain checks. Recipe references must exist in the available catalog, and planned meals must fit the requested week and count. The model proposes a result; the application decides whether that result has a shape and meaning it can accept.',
          'The planning service also distinguishes draft, committed, active, and completed states. Editing checks prevent changes to locked plans, and generation applies rules about future planning weeks. These boundaries make time and user decisions part of the product behavior instead of leaving them as informal instructions to a model.',
          'Manual planning remains available. A user can make direct selections and adjust an editable plan without requiring a fresh model response for every decision. That gives the interface a clear purpose even when generation is not the best next step.',
        ],
      },
      {
        title: 'Keep web and agent access on the same API',
        paragraphs: [
          'The Nuxt/Vue interface uses Pinia for feature state and a Fastify API for domain workflows and writes. PostgreSQL holds persistent application state. A separate MCP service calls that same API, rather than maintaining a second path into the database or duplicating planning rules.',
          'The repository separates shared contracts, domain logic, persistence, and AI integration. Those boundaries let the web interface and agent tools expose the same concepts while keeping ownership of state changes in the API. Docker Compose brings the application services and database together for local operation.',
        ],
      },
      {
        title: 'Make the AI dependency configurable',
        paragraphs: [
          'MealMind connects to an OpenAI-compatible provider that may run locally or remotely. The settings interface discovers available models before saving a selection. Provider credentials stay in the server environment rather than being entered into the web UI or persisted in application settings.',
          'The documentation records local validation across builds, tests, Docker startup, browser flows, MCP access, and a local model integration. Those records describe a particular development environment and point in time. They provide a useful account of what was exercised and the integration assumptions behind it.',
        ],
      },
    ],
    outcomes: [
      'Connected recipe browsing, manual and generated meal plans, and shopping lists in one application.',
      'Applied recipe, date, and plan-state validation to AI-assisted workflows.',
      'Exposed application behavior through both a web interface and API-backed MCP tools.',
    ],
    reflection: 'The useful design question is where generation ends and application responsibility begins. MealMind gives suggestions a place in an editable, persistent workflow, with validation and plan states governing what happens next. This is an independent application with documented local validation, rather than evidence of production adoption. The implementation and dated development records make the current architecture and its history available for inspection.',
    stack: ['Vue', 'Nuxt', 'TypeScript', 'Fastify', 'PostgreSQL', 'MCP'],
    repository: 'https://github.com/notmike101/meal-mind',
    status: 'Independent application',
    featured: false,
    publishedAt: '2026-09-27',
    updatedAt: '2026-09-27',
    seoTitle: 'MealMind — Meal Planning Case Study | Mike Orozco',
    seoDescription: 'Connecting AI-assisted suggestions to recipes, validated meal plans, shopping lists, and shared web and MCP application behavior.',
    socialImage: '/images/og-default.png',
    image: {
      src: '/images/mealmind-planning.png',
      alt: 'MealMind weekly planner showing a seven-day meal plan and editing controls with sample recipe data',
      width: 1280,
      height: 720,
      href: '/images/mealmind-planning.png',
      label: 'MealMind weekly planner · sample data',
    },
    flow: {
      title: 'From recipes to a plan you can use',
      steps: [
        { title: 'Recipe catalog', description: 'Structured CookLang recipes supply the available choices.' },
        { title: 'Draft a week', description: 'Choose meals manually or request AI-assisted suggestions.' },
        { title: 'Validate & decide', description: 'Check recipes and dates, edit servings, and commit the plan.' },
        { title: 'Shop & follow through', description: 'Use the shopping list and track meals against persistent plan state.' },
      ],
      caption: 'The web interface and MCP tools use the same application API. Model output is validated before becoming accepted plan data.',
    },
    links: [
      { label: 'Architecture and dated validation records', href: 'https://github.com/notmike101/meal-mind/blob/main/docs/HANDOFF.md' },
      { label: 'Planning rules in the implementation', href: 'https://github.com/notmike101/meal-mind/blob/main/services/api/src/services/planning.ts' },
    ],
  },
  {
    slug: 'zcode-desktop-extensions',
    title: 'ZCode Desktop Extensions',
    shortTitle: 'ZCode Extensions',
    summary: 'An AI-generated, independent extension host for the ZCode desktop app, with a typed SDK, managed updates, and recovery tooling.',
    problem: 'Adding capabilities to a desktop application without a native extension system creates a maintenance problem: the integration must coexist with the original application, survive changes to its installation, and give users a way to recover when something fails. ZCode Desktop Extensions explores that problem through an external host, a defined extension contract, and explicit installation and update workflows.',
    role: 'Independent project owner. The repository credits GPT-5.6 Sol with generating the entire implementation. This case study describes the resulting integration architecture and operational boundaries; the project is not affiliated with or endorsed by ZCode.',
    details: [
      {
        title: 'Preserve the application behind the integration',
        paragraphs: [
          'The installation retains the original vendor application archive and introduces a small loader. The loader starts the extension host before importing the preserved application. Extension code and persistent state live outside the vendor installation, separating the added functionality from the application it extends.',
          'If the host fails to start, the loader records the error and still attempts to launch the original application. A guardian watches for vendor updates and can reapply the loader after the application exits. Backups and repair tooling support recovery when that integration needs attention.',
          'The design is update-resistant, with a clear compatibility limit. Changes to Electron behavior, application navigation, or private APIs can require corresponding changes in the host. The documented Windows integration is an independently maintained compatibility layer, not a promise that every future vendor release will work unchanged.',
        ],
      },
      {
        title: 'Give extensions an explicit lifecycle',
        paragraphs: [
          'Extensions use a manifest, main-process and renderer entry points, and a published TypeScript SDK. The host handles installation, enabling, disabling, reloading, and recoverable removal. Cleanup hooks let an extension release resources when it is deactivated, while namespaced messaging separates its communication from other extensions.',
          'The SDK exposes application capabilities through typed interfaces, including workspace context, sessions, tasks, model discovery, and interface slots. Manifest validation rejects malformed declarations and entry points that escape the extension directory. These checks make the installation contract concrete before an extension is activated.',
          'Capability declarations govern access to SDK features. They do not create a security sandbox: extensions are trusted code with the host process’s file and process access. That distinction is part of the extension model and matters when deciding what to install.',
        ],
      },
      {
        title: 'Treat updates as recoverable operations',
        paragraphs: [
          'Catalog downloads use HTTPS, declared sizes, and SHA-256 checks alongside compatibility and bundle-path validation. Updates are staged for the next launch, preserving extension data and retaining recoverable bundles. Activation failure can trigger rollback instead of leaving a partially activated replacement as the only available version.',
          'The host also provides doctor, repair, safe-launch, and uninstall operations. Installation changes require the application to be closed, and normal removal preserves user data. These operational paths give an installed extension system a way to be maintained after the initial successful launch.',
        ],
      },
      {
        title: 'Exercise the host with a scheduling extension',
        paragraphs: [
          'A separately released ZCode Scheduler extension exercised the host by creating ordinary, persistent tasks through the native task bridge. It used five-field cron expressions and IANA time zones, with explicit choices for overlapping runs and bounded execution history. Scheduled work appeared in the normal task interface.',
          'The extension remains available for ZCode 3.3.6–3.5.1 and is retired on 3.5.2 and newer, where native automation and scheduling replace it. On supported older versions, ZCode must stay open and missed runs are skipped. Both limits define its useful scope: an application-level integration that filled a gap until the vendor supplied the feature.',
        ],
      },
    ],
    outcomes: [
      'Published an independent extension host, TypeScript SDK, and extension development documentation.',
      'Implemented installation, staged updates, rollback, and recovery workflows around the preserved vendor application.',
      'Exercised the extension model with a separately released scheduler that creates native ZCode tasks.',
    ],
    reflection: 'The useful result is a maintained integration contract: what an extension can call, when it starts and stops, what an update changes, and how a user recovers. The repository’s AI-generation attribution is explicit. Evaluating the project therefore means inspecting those contracts and their implementation, including the trust boundary and dependency on upstream application behavior.',
    stack: ['TypeScript', 'Electron', 'Node.js', 'IPC', 'npm'],
    repository: 'https://github.com/notmike101/zcode-extensions',
    status: 'Open source',
    featured: false,
    publishedAt: '2026-09-27',
    updatedAt: '2026-09-27',
    seoTitle: 'ZCode Desktop Extensions — Case Study | Mike Orozco',
    seoDescription: 'An independent, AI-generated extension host with a typed SDK, lifecycle management, recoverable updates, and explicit compatibility boundaries.',
    socialImage: '/images/og-default.png',
    flow: {
      title: 'Extend an installed app with a recovery path',
      steps: [
        { title: 'Preserve the app', description: 'Retain the vendor archive and introduce a small startup loader.' },
        { title: 'Start the host', description: 'Load extension services before importing the original application.' },
        { title: 'Activate extensions', description: 'Use validated manifests, typed APIs, and lifecycle cleanup.' },
        { title: 'Update & recover', description: 'Stage replacements, preserve data, and retain rollback paths.' },
      ],
      caption: 'An independent integration with the vendor application. Extensions are trusted code; SDK capabilities do not provide a security sandbox.',
    },
    links: [
      { label: 'Host architecture and operational guide', href: 'https://github.com/notmike101/zcode-extensions#readme' },
      { label: 'Extension development contract', href: 'https://github.com/notmike101/zcode-extensions/blob/main/docs/extension-development.md' },
      { label: 'ZCode Scheduler extension', href: 'https://github.com/notmike101/zcode-scheduler' },
    ],
  },
  {
    slug: 'wildly-unqualified',
    title: 'Wildly Unqualified',
    shortTitle: 'Wildly Unqualified',
    summary: 'A cooperative wildlife-photography game in development, combining a WebGPU browser client, authoritative multiplayer simulation, and persistent outings.',
    problem: 'A cooperative wildlife-documentary game needs more than a rendered reserve. Players must share the same animals, physical world, and outing state while each client presents a responsive camera and interface. Wildly Unqualified brings those responsibilities together, with an additional requirement: a group should be able to save its outing and run the server without the development toolchain.',
    role: 'Independent game project — work across the browser client, authoritative server, shared world contracts, persistence, and release workflow. The current repository describes a generated-reserve development build with gameplay acceptance still incomplete.',
    details: [
      {
        title: 'Give the shared world one authority',
        paragraphs: [
          'The Node.js server owns multiplayer sessions, simulation, persistence, and gameplay rules. Clients send commands over the network, while shared contracts define the messages and their validation. Physics, scoring, and animal decisions belong with the authoritative state that all players must agree on.',
          'The browser client handles presentation: rendering, scene lifetime, interpolation, photo capture, interface state, and audio. This separation lets each player see a responsive view of the reserve while the server remains responsible for the common outing. It also provides a practical boundary for diagnosing whether a problem belongs to simulation, transport, or presentation.',
        ],
      },
      {
        title: 'Separate world generation from asset delivery',
        paragraphs: [
          'The client uses TypeScript, Three.js, and WebGPU, with shared modules for world generation, collision, and geometry. The current development build centers on a generated forest reserve. Animal navigation and decision-making live on the simulation side, where they can affect the shared world consistently.',
          'Original Blender assets and versioned exports are kept distinct from the files delivered to the browser. That separation preserves the authoring workflow while giving the application a defined set of runtime assets. It also keeps changes to a source asset from being confused with a complete, tested delivery change.',
          'The browser needs WebGPU support. The packaged server has different requirements: it can run without a GPU, Blender, Vite, or the development dependencies. Keeping those requirements separate makes hosting the outing a smaller operational task than building or rendering the game.',
        ],
      },
      {
        title: 'Make an outing safe to stop and resume',
        paragraphs: [
          'Room admission distinguishes host authority from guest invitations, and host credentials remain private. Server configuration separates public web assets from room credentials, world state, photos, and backups. Path-overlap checks help prevent private session data from becoming part of the publicly served directory.',
          'Saving is part of the session lifecycle. Save-and-stop waits for persistence; if the final save fails, the room pauses so the problem can be repaired and the save retried. Restarting restores the outing in a paused state. These behaviors address the moment when a group expects its progress to survive leaving the session.',
          'Save validation and schema versions also constrain upgrades. Older prototype and MVP saves are incompatible with the current development format, so the operational guidance keeps runtime versions and their data together during migration. An available backup is useful only when its matching runtime and restore procedure are understood.',
        ],
      },
      {
        title: 'Package a server and verify the experience separately',
        paragraphs: [
          'The portable release combines the compiled web client with an explicit allowlist of server and shared runtime files, plus package and lock files. It excludes tests, browser source, authoring files, and private save data. Packaging checks reject missing runtime imports and symbolic links in web output, and the builder refuses to overwrite an existing destination.',
          'Those checks establish what can be shipped and started. The development records separately track browser startup, multiplayer scenarios, camera behavior, and the rest of the outing loop. Successful compilation or a two-player connection is useful evidence, but gameplay acceptance remains its own unfinished part of the project.',
        ],
      },
    ],
    outcomes: [
      'Built a multiplayer development foundation with a WebGPU client and authoritative Node.js simulation.',
      'Implemented persistent outings, separate host and guest admission, and documented save recovery behavior.',
      'Created a portable server packaging workflow while retaining explicit, incomplete gameplay acceptance work.',
    ],
    reflection: 'This project connects real-time presentation to state that must remain consistent and recoverable. The engineering story includes how the game runs, what belongs in a release, and what evidence is still needed for the intended cooperative experience. It remains in development; the architecture and operating procedures are inspectable results, while a complete outing is still an acceptance target.',
    stack: ['TypeScript', 'Three.js', 'WebGPU', 'Node.js', 'WebSocket', 'Blender'],
    repository: 'https://github.com/notmike101/wildly-unqualified',
    status: 'In development',
    featured: false,
    publishedAt: '2026-09-27',
    updatedAt: '2026-09-27',
    seoTitle: 'Wildly Unqualified — Multiplayer Game Case Study | Mike Orozco',
    seoDescription: 'A cooperative wildlife-photography game in development: WebGPU presentation, authoritative multiplayer state, persistent outings, and portable server delivery.',
    socialImage: '/images/og-default.png',
    flow: {
      title: 'One outing, shared state, individual views',
      steps: [
        { title: 'Join a room', description: 'Host and guest admission bring players into the same outing.' },
        { title: 'Simulate together', description: 'The server owns animals, physics, scoring, and shared state.' },
        { title: 'Explore & photograph', description: 'Each browser renders the reserve and handles its camera and UI.' },
        { title: 'Save & resume', description: 'Persist the outing and restore it paused for a later session.' },
      ],
      caption: 'A conceptual view of system responsibilities. Clients exchange commands and state with the server throughout play; gameplay acceptance remains incomplete.',
    },
    links: [
      { label: 'Development status and project overview', href: 'https://github.com/notmike101/wildly-unqualified#readme' },
      { label: 'Server operation and save recovery', href: 'https://github.com/notmike101/wildly-unqualified/blob/main/docs/SERVER.md' },
      { label: 'Runtime architecture and maintenance guide', href: 'https://github.com/notmike101/wildly-unqualified/blob/main/docs/MAINTAINING.md' },
    ],
  },
];

export const additionalProjects = [
  {
    title: 'Between Sessions',
    description: 'An AI-authored journal exploring research, writing, and revision across sessions. Articles and an evolving record of ideas are backed by content checks and an auditable publishing workflow.',
    website: 'https://ai-blog.mikeorozco.dev/',
    repository: 'https://github.com/notmike101/ai-blog',
    tags: ['AI publishing', 'Astro', 'Markdown', 'GitHub Actions'],
  },
  {
    title: 'WordPress Persistence Security Research',
    description: 'Educational research demonstrating plugin-based persistence and evasion patterns so developers and defenders can recognize risky behavior.',
    repository: 'https://github.com/notmike101/Wordpress-Admin-Persistence-Plugin',
    tags: ['Security research', 'PHP', 'WordPress'],
  },
  {
    title: 'Wordfence Cloudflare Firewall Sync',
    description: 'Synchronizes Wordfence IP blocks to Cloudflare WAF rules with reconciliation, retry behavior, cleanup, and operational logging.',
    repository: 'https://github.com/notmike101/wordfence-cloudflare-firewall-sync',
    tags: ['Security', 'Cloudflare', 'WordPress'],
  },
  {
    title: 'Digital Garden Pipeline',
    description: 'A Docker-based publishing pipeline that transforms selected Obsidian notes into a live VitePress site.',
    repository: 'https://github.com/notmike101/digital-garden-app',
    tags: ['TypeScript', 'Docker', 'VitePress'],
  },
  {
    title: 'Vite Plugin Cloudflared',
    description: 'A compact Vite integration that starts a Cloudflare tunnel alongside the development server.',
    repository: 'https://github.com/notmike101/vite-plugin-cloudflared',
    tags: ['TypeScript', 'Vite', 'Cloudflare'],
  },
  {
    title: 'Obsidian Azure Blob Sync',
    description: 'An open-source Obsidian plugin that synchronizes your vault to Azure Blob Storage for free cross-device access across Windows and Android.',
    repository: 'https://github.com/notmike101/obsidian-azure-blob-sync',
    tags: ['TypeScript', 'Electron', 'Azure'],
  },
  {
    title: 'iframe-sandbox-runtime',
    description: 'A browser runtime helper for running UI code in named iframes, with explicit lifecycle management and configurable access to the host DOM.',
    repository: 'https://github.com/notmike101/iframe-sandbox-runtime',
    tags: ['JavaScript', 'npm', 'Browser Runtime'],
  },
  {
    title: 'ARC Raiders Discord Bot',
    description: 'A Dockerized TypeScript bot that serves game data from the MetaForge API through slash commands, with Redis caching and autocomplete.',
    repository: 'https://github.com/notmike101/discord-bot-arc-raiders-info',
    tags: ['TypeScript', 'Discord.js', 'Redis', 'Docker'],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((study) => study.slug === slug);

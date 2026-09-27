export type ProjectStatus = 'Production' | 'Open source' | 'Research';

export interface CaseStudy {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  problem: string;
  role: string;
  constraints: string[];
  decisions: string[];
  outcomes: string[];
  stack: string[];
  repository?: string;
  status: ProjectStatus;
  featured: boolean;
  publishedAt: string;
  updatedAt: string;
  seoTitle: string;
  seoDescription: string;
  socialImage: string;
  visual: 'platform' | 'pack3d' | 'sandbox';
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'immersive-product-platform',
    title: '3D Product Tour Platform',
    shortTitle: '3D Product Tour',
    summary: 'Led development of 3D Product Tour, connecting Vue authoring tools and JSON configuration to a shared browser runtime for product tours and sales demos.',
    problem: 'Product tours and virtual sales demos needed shared rendering and interaction behavior while allowing content teams to create new experiences without a separate engineering build for each one.',
    role: 'Senior Software Engineer, Immersive Technologies — owned authoring, configuration, and integration work; collaborated with a rendering-focused engineer on the shared runtime, then took on broader maintenance of the core, tours, and sales demos.',
    constraints: [
      'Product tours and sales demos had different interfaces but shared runtime needs',
      'Content editors needed to configure tours without changing application code',
      'The runtime needed to remain reusable as the application portfolio grew',
    ],
    decisions: [
      'Helped separate shared runtime functionality into an npm package and contributed to the later Babylon.js and TypeScript architecture.',
      'Built Vue 3 authoring interfaces that produce JSON configurations for tours and sales demos.',
      'Connected builder-generated configuration to application implementations and shared runtime APIs.',
      'Used reusable components and event-driven services to separate shared behavior from application-specific interfaces.',
    ],
    outcomes: [
      'Supported product tours and virtual sales demos through a shared runtime.',
      'Enabled content teams to create additional tours without per-tour engineering work.',
      'Received the Immersive Technologies Outstanding Achievement award for leading development of the 3D Product Tour platform.',
    ],
    stack: ['TypeScript', 'Vue', 'Three.js', 'Babylon.js'],
    status: 'Production',
    featured: true,
    publishedAt: '2022-09-01',
    updatedAt: '2026-06-28',
    seoTitle: '3D Product Tour Platform — Mike Orozco',
    seoDescription: 'How Vue authoring tools and JSON configuration connect to a shared runtime for 3D product tours and sales demos.',
    socialImage: '/images/og-default.png',
    visual: 'platform',
  },
  {
    slug: 'pack3d',
    title: 'Pack3D',
    shortTitle: 'Pack3D',
    summary: 'A Windows desktop application for optimizing GLTF and GLB assets.',
    problem: 'Large 3D assets directly affect load time, bandwidth, and rendering performance, but the optimization toolchain often requires specialized command-line knowledge and repeated manual experimentation.',
    role: 'Creator and maintainer — product definition, desktop architecture, optimization pipeline, interface design, packaging, and releases.',
    constraints: [
      'Compression must preserve acceptable visual quality',
      'Optimization settings require useful defaults without hiding important tradeoffs',
      'Desktop packaging needs repeatable builds and straightforward installation',
      'Users need a clear comparison between source and optimized assets',
    ],
    decisions: [
      'Combined geometry deduplication, welding, instancing, texture processing, and configurable Draco compression.',
      'Exposed compression controls in a visual workflow rather than requiring command-line composition.',
      'Presented original and optimized output together so users can assess savings and fidelity.',
      'Automated Windows builds and releases through the repository workflow.',
    ],
    outcomes: [
      'Created a practical optimization workflow for performance-sensitive 3D web projects.',
      'Supports multiple geometry and texture compression strategies in one application.',
      'Published as an open-source desktop tool with downloadable Windows releases.',
    ],
    stack: ['Vue', 'TypeScript', 'Electron', 'GLTF Transform', 'Draco', 'Basis Universal'],
    repository: 'https://github.com/notmike101/pack3d',
    status: 'Open source',
    featured: true,
    publishedAt: '2023-01-01',
    updatedAt: '2025-01-29',
    seoTitle: 'Pack3D — 3D Asset Optimization Case Study',
    seoDescription: 'How Pack3D combines geometry and texture compression in an approachable Windows desktop workflow for GLTF and GLB assets.',
    socialImage: '/images/og-default.png',
    visual: 'pack3d',
  },
];

export const additionalProjects = [
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
    description: 'An npm package that creates named, isolated iframe sandboxes for executing untrusted UI code with controlled DOM access to a host surface.',
    repository: 'https://github.com/notmike101/iframe-sandbox-runtime',
    tags: ['JavaScript', 'npm', 'Browser Security'],
  },
  {
    title: 'ARC Raiders Discord Bot',
    description: 'A Dockerized TypeScript bot that serves game data from the MetaForge API through slash commands, with Redis caching and autocomplete.',
    repository: 'https://github.com/notmike101/discord-bot-arc-raiders-info',
    tags: ['TypeScript', 'Discord.js', 'Redis', 'Docker'],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((study) => study.slug === slug);

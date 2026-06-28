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
    title: 'Immersive 3D Product Platform',
    shortTitle: 'Immersive product platform',
    summary: 'A reusable architecture for enterprise-scale 3D product experiences across a growing application portfolio.',
    problem: 'Independent interactive experiences were becoming difficult to scale, maintain, and evolve consistently. The platform needed a modular foundation that could support multiple products, teams, and rendering use cases without turning every delivery into a one-off build.',
    role: 'Senior Software Engineer, Immersive Technologies — architecture, hands-on implementation, technical standards, security remediation, and developer mentorship.',
    constraints: [
      'High-fidelity 3D rendering across browsers and device classes',
      'Multiple applications with distinct product and design requirements',
      'Long-lived systems that needed safe extension points and clear ownership',
      'Enterprise performance, reliability, and security expectations',
    ],
    decisions: [
      'Separated application concerns into event-driven services and reusable interface fragments.',
      'Created shared libraries and internal tools to make new experiences faster and more consistent to build.',
      'Used sandboxed runtime boundaries where independently developed interface behavior needed isolation.',
      'Established documentation, delivery, and review standards alongside the technical architecture.',
    ],
    outcomes: [
      'Enabled reusable foundations across multiple immersive applications.',
      'Supported enterprise deployments serving thousands of concurrent users.',
      'Reduced duplicated implementation work and improved long-term maintainability.',
      'Strengthened security practices through remediation of critical application vulnerabilities.',
    ],
    stack: ['TypeScript', 'Vue', 'Three.js', 'Babylon.js', 'Azure'],
    status: 'Production',
    featured: true,
    publishedAt: '2022-09-01',
    updatedAt: '2026-06-28',
    seoTitle: 'Immersive 3D Product Platform — Mike Orozco',
    seoDescription: 'Architecture case study for a reusable enterprise 3D product platform built with TypeScript, Vue, React, Three.js, and Babylon.js.',
    socialImage: '/images/og-default.png',
    visual: 'platform',
  },
  {
    slug: 'pack3d',
    title: 'Pack3D',
    shortTitle: 'Pack3D',
    summary: 'A Windows desktop application that makes production-grade GLTF and GLB optimization approachable.',
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
];

export const getCaseStudy = (slug: string) => caseStudies.find((study) => study.slug === slug);

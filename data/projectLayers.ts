// Presentation diagrams of the responsibilities documented in caseStudies.ts.
// Labels describe conceptual boundaries, not private screens or deployment topology.
export interface LayerArtwork {
  kind: 'editor' | 'catalog' | 'code' | 'pipeline' | 'sources' | 'mesh' | 'settings' | 'security' | 'storage' | 'browser' | 'calendar' | 'review' | 'world' | 'archive' | 'image';
  sourceType?: 'documents' | 'services' | 'people';
  label: string;
  items: string[];
  footer: string;
}

export const projectLayers: Record<string, LayerArtwork[]> = {
  'immersive-product-platform': [
    { kind: 'editor', label: 'Vue authoring tools', items: ['Content', 'Features', 'Camera'], footer: 'Configure the experience' },
    { kind: 'code', label: 'JSON configuration', items: ['content: { … }', 'features: [ … ]', 'interactions: [ … ]'], footer: 'Authored content + configuration' },
    { kind: 'pipeline', label: 'Application boundary', items: ['Read JSON', 'Tour / demo', 'Core APIs'], footer: 'Product-specific interface behavior' },
    { kind: 'image', label: 'Shared runtime', items: ['Rendering', 'Interaction', 'Browser'], footer: 'Vanquish Core HPLC tour' },
  ],
  quire: [
    { kind: 'sources', sourceType: 'documents', label: 'Session adapters', items: ['Codex', 'Claude Code', 'ZCode / OMP'], footer: 'One conversation format' },
    { kind: 'security', label: 'Server ingestion', items: ['Upload', 'Redact', 'AES-GCM'], footer: 'Server sees content and key at ingestion' },
    { kind: 'storage', label: 'Sealed shares', items: ['Ciphertext', 'Password', 'Expiry / revoke'], footer: 'PostgreSQL + share access controls' },
    { kind: 'browser', label: 'Conversation viewer', items: ['Markdown', 'Tool output', 'Code'], footer: 'Link-fragment key → browser decryption' },
  ],
  'monrovia-web-platform': [
    { kind: 'sources', label: 'Organizational data', items: ['SOAP', 'MySQL', 'External data'], footer: 'Existing upstream systems' },
    { kind: 'pipeline', label: 'Node.js integration', items: ['Adapters', 'Cache', 'Shared API'], footer: 'Source-specific service modules' },
    { kind: 'catalog', label: 'Public web applications', items: ['Discover', 'Community', 'Products'], footer: 'Nuxt interfaces + shared data access' },
    { kind: 'sources', sourceType: 'services', label: 'Hosting & delivery', items: ['Azure', 'Web services', 'Cloudflare'], footer: 'Separate hosting and delivery initiatives' },
  ],
  pack3d: [
    { kind: 'mesh', label: 'GLTF / GLB input', items: ['Geometry', 'Materials', 'Textures'], footer: 'Source model and its resources' },
    { kind: 'settings', label: 'Optimization controls', items: ['Geometry', 'Textures', 'Draco'], footer: 'Independent settings for each operation' },
    { kind: 'pipeline', label: 'Packing worker', items: ['GLTF Transform', 'Basis / toktx', 'Draco'], footer: 'Geometry cleanup + texture encoding' },
    { kind: 'image', label: 'Inspect the result', items: ['Original', 'Optimized', 'File size'], footer: 'Pack3D desktop application' },
  ],
  'engineering-workflow-tooling': [
    { kind: 'sources', sourceType: 'documents', label: 'Project context', items: ['Jira', 'Confluence', 'Figma'], footer: 'Requirements, decisions and design evidence' },
    { kind: 'review', label: 'Technical plan', items: ['Decisions', 'Open questions', 'Human approval'], footer: 'Review before implementation' },
    { kind: 'pipeline', label: 'Shared engineering tools', items: ['Skills', 'Implementation', 'Browser checks'], footer: 'Changes accompanied by validation evidence' },
    { kind: 'review', label: 'Delivery handoff', items: ['Pull request', 'QA feedback', 'Source ticket'], footer: 'Human review + delivery record' },
  ],
  mealmind: [
    { kind: 'code', label: 'CookLang catalog', items: ['Recipe reference', 'Ingredients + servings', 'Instructions + timers'], footer: 'Structured recipes, stored as files' },
    { kind: 'calendar', label: 'Editable weekly plan', items: ['Choose recipes', 'Adjust servings', 'Manual / AI draft'], footer: 'Dated meals with optional slots' },
    { kind: 'review', label: 'Application validation', items: ['Known recipes', 'Dates + meal count', 'Commit plan'], footer: 'Fastify rules shared by web and MCP' },
    { kind: 'storage', label: 'Shopping & plan state', items: ['Shopping list', 'Active meals', 'Completed plan'], footer: 'Persistent state in PostgreSQL' },
  ],
  'zcode-desktop-extensions': [
    { kind: 'archive', label: 'Preserved vendor app', items: ['Vendor archive', 'Startup loader', 'Backup'], footer: 'Original application remains available' },
    { kind: 'pipeline', label: 'Extension host startup', items: ['Loader', 'Host services', 'Vendor app'], footer: 'Load services, then import the app' },
    { kind: 'code', label: 'Extension contract', items: ['Validated manifest', 'Typed SDK + IPC', 'Lifecycle cleanup'], footer: 'Trusted code, not a security sandbox' },
    { kind: 'archive', label: 'Recoverable updates', items: ['Staged bundle', 'Preserved data', 'Rollback'], footer: 'Validate → activate → recover if needed' },
  ],
  'wildly-unqualified': [
    { kind: 'sources', sourceType: 'people', label: 'Room admission', items: ['Host', 'Invitation', 'Guests'], footer: 'Separate host authority and guest access' },
    { kind: 'world', label: 'Authoritative simulation', items: ['Animals', 'Physics', 'Scoring'], footer: 'Node.js owns the shared outing state' },
    { kind: 'world', label: 'WebGPU browser client', items: ['Rendering', 'Camera', 'Photo capture'], footer: 'Commands out / shared state in' },
    { kind: 'archive', label: 'Persistent outings', items: ['Save', 'Backup', 'Restore paused'], footer: 'Save-and-stop waits for persistence' },
  ],
};

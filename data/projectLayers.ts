// Public excerpts are pinned to reviewed commits; diagrams are grounded in docs/portfolio-evidence.md.
export interface ProjectLayer {
  id: string;
  label: string;
  description: string;
  caption: string;
  image?: string;
  code?: { file: string; line: number; text: string };
  diagram?: { label: string; detail: string }[];
  source?: { label: string; url: string };
}

export const projectLayers: Record<string, ProjectLayer[]> = {
  "immersive-product-platform": [
    {
      "id": "tour",
      "label": "Product tour",
      "description": "The published Vanquish Core HPLC tour connects the instrument model to feature navigation, hotspots, and sales actions.",
      "image": "/images/vanquish-tour.png",
      "caption": "Vanquish Core HPLC",
      "source": {
        "label": "Open product tour",
        "url": "https://www.thermofisher.com/us/en/home/virtual/vanquish-core-hplc-3d-tour.html"
      }
    },
    {
      "id": "builder",
      "label": "Tour builder",
      "description": "The Vue builder configures parts, lighting, camera perspectives, hotspots, translations, and product actions. Shown with the published Vanquish model and manifest.",
      "image": "/images/vanquish-builder.png",
      "caption": "3D Tour Builder",
      "source": {
        "label": "Open builder",
        "url": "https://builder.immersive.tf/"
      }
    },
    {
      "id": "manifest",
      "label": "JSON manifest",
      "description": "The published configuration contains one GLB part, seven views, one light, and 28 hotspots. It also defines translations and two call-to-action buttons.",
      "code": {
        "file": "vanquish-core-35.json",
        "line": 814,
        "text": "  \"parts\": [\n    {\n      \"name\": \"Vanquish_Core_v2.glb\",\n      \"path\": \"Vanquish_Core_v2.glb\",\n      \"mode\": \"BASE\",\n      \"invert\": true,\n      \"visible\": true\n    }\n  ],"
      },
      "caption": "Published configuration",
      "source": {
        "label": "View manifest",
        "url": "https://www.thermofisher.com/content/dam/LifeTech/virtual/vanquish-core-hplc/vanquish-core-35.json"
      },
      "diagram": [
        {
          "label": "Instrument model",
          "detail": "Vanquish_Core_v2.glb"
        },
        {
          "label": "Explore the product",
          "detail": "7 views · 28 hotspots"
        },
        {
          "label": "Product actions",
          "detail": "2 calls to action"
        }
      ]
    }
  ],
  "monrovia-web-platform": [
    {
      "id": "api",
      "label": "Shared integration API",
      "description": "A modular Node.js API consolidated SOAP services, MySQL, and external data, with caching and load balancing for consuming applications.",
      "diagram": [
        {
          "label": "SOAP / MySQL",
          "detail": "Existing business data"
        },
        {
          "label": "Node.js API",
          "detail": "Adapters, caching, load balancing"
        },
        {
          "label": "Applications",
          "detail": "Common data access"
        }
      ],
      "caption": "Integration architecture"
    },
    {
      "id": "community",
      "label": "Community application",
      "description": "A Nuxt and Docker application connected plant interests with related product recommendations. The work covered the frontend, backend, and server rendering.",
      "diagram": [
        {
          "label": "Plant interests",
          "detail": "Community input"
        },
        {
          "label": "Nuxt application",
          "detail": "Frontend, backend, SSR"
        },
        {
          "label": "Product discovery",
          "detail": "Related recommendations"
        }
      ],
      "caption": "Resume-backed responsibilities"
    },
    {
      "id": "azure",
      "label": "Azure hosting",
      "description": "Migrated web services and data into Azure, improving website response time by approximately 20% while lowering hosting costs and returning control to internal IT.",
      "diagram": [
        {
          "label": "Web services / data",
          "detail": "Migration and integration"
        },
        {
          "label": "Azure hosting",
          "detail": "Internal IT operations"
        },
        {
          "label": "Response time",
          "detail": "Approximately 20% improvement"
        }
      ],
      "caption": "Hosting initiative"
    },
    {
      "id": "cloudflare",
      "label": "Cloudflare delivery",
      "description": "A separate content-delivery integration reduced average page load time by approximately 30%. This is distinct from the Azure response-time improvement.",
      "diagram": [
        {
          "label": "Content delivery",
          "detail": "Cloudflare integration"
        },
        {
          "label": "Page loads",
          "detail": "Approximately 30% faster"
        }
      ],
      "caption": "Separate delivery initiative"
    }
  ],
  "engineering-workflow-tooling": [
    {
      "id": "atlassian",
      "label": "Jira & Confluence",
      "description": "Reusable issue-context and documentation workflows, distributed through the internal engineering marketplace.",
      "diagram": [
        {
          "label": "Jira",
          "detail": "Issue context"
        },
        {
          "label": "Workflow skills",
          "detail": "TeamworkGraph integration"
        },
        {
          "label": "Confluence",
          "detail": "Technical documentation"
        }
      ],
      "caption": "Ready for active use"
    },
    {
      "id": "figma",
      "label": "Figma gateway",
      "description": "A packaged local MCP connection makes live Figma Desktop design evidence available during engineering work.",
      "diagram": [
        {
          "label": "Figma Desktop",
          "detail": "Open design file"
        },
        {
          "label": "Local MCP gateway",
          "detail": "Desktop prerequisites"
        },
        {
          "label": "Engineering workflow",
          "detail": "Design evidence"
        }
      ],
      "caption": "Ready with desktop prerequisites"
    },
    {
      "id": "usage",
      "label": "Usage reporting",
      "description": "A reusable plugin supplies setup, reporting instructions, and closeout hooks. The separate dashboard and API remain a locally exercised prototype.",
      "diagram": [
        {
          "label": "Plugin setup",
          "detail": "Operator-scoped credentials"
        },
        {
          "label": "Session reporting",
          "detail": "Project and usage records"
        },
        {
          "label": "Closeout hooks",
          "detail": "Reporting workflow"
        }
      ],
      "caption": "Plugin ready for active use"
    },
    {
      "id": "offline-tours",
      "label": "Offline tour delivery",
      "description": "Discovers a tour, packages the pinned viewer and assets, and verifies the ZIP. Windows validation is documented; full macOS support remains gated on a real smoke test.",
      "diagram": [
        {
          "label": "Tour discovery",
          "detail": "Viewer and asset inputs"
        },
        {
          "label": "Offline package",
          "detail": "Pinned dependencies"
        },
        {
          "label": "ZIP verification",
          "detail": "Portable delivery checks"
        }
      ],
      "caption": "In development"
    },
    {
      "id": "preproduction",
      "label": "Preproduction & decisions",
      "description": "Requirements and design interpretation produce technical plans, acceptance gates, and decision records for review.",
      "diagram": [
        {
          "label": "Requirements / design",
          "detail": "Source material"
        },
        {
          "label": "Decision records",
          "detail": "Open questions and constraints"
        },
        {
          "label": "Technical plan",
          "detail": "Acceptance gates and handoff"
        }
      ],
      "caption": "In development / testing"
    },
    {
      "id": "implementation",
      "label": "Implementation & review",
      "description": "Shared helpers cover web scaffolding, implementation, browser validation, review, and delivery handoffs.",
      "diagram": [
        {
          "label": "Plan",
          "detail": "Reviewed implementation context"
        },
        {
          "label": "Implementation",
          "detail": "Scaffolding and development"
        },
        {
          "label": "Validation / handoff",
          "detail": "Browser evidence and review"
        }
      ],
      "caption": "In development / testing"
    }
  ],
  "wildly-unqualified": [
    {
      "id": "client",
      "label": "WebGPU client",
      "description": "The browser owns rendering, scene lifetime, interpolation, photo capture, interface state, and audio.",
      "diagram": [
        {
          "label": "Session client",
          "detail": "Commands and received state"
        },
        {
          "label": "Presentation",
          "detail": "Interpolation and scene lifetime"
        },
        {
          "label": "WebGPU / UI",
          "detail": "Camera, photos, and audio"
        }
      ],
      "caption": "Project source architecture"
    },
    {
      "id": "world",
      "label": "Shared world",
      "description": "Shared TypeScript modules define deterministic reserve generation, collision geometry, and validated network contracts.",
      "diagram": [
        {
          "label": "World generation",
          "detail": "Deterministic reserve layout"
        },
        {
          "label": "Geometry / collision",
          "detail": "Shared spatial rules"
        },
        {
          "label": "Network contracts",
          "detail": "Commands and state validation"
        }
      ],
      "caption": "Shared module responsibilities"
    },
    {
      "id": "simulation",
      "label": "Authoritative simulation",
      "description": "The Node.js server owns animals, physics, scoring, and the common outing state. Clients send commands and receive authoritative updates.",
      "diagram": [
        {
          "label": "Client commands",
          "detail": "Validated network input"
        },
        {
          "label": "Server simulation",
          "detail": "Physics, wildlife, scoring"
        },
        {
          "label": "State updates",
          "detail": "Shared outing state"
        }
      ],
      "caption": "Server responsibilities"
    },
    {
      "id": "persistence",
      "label": "Outing persistence",
      "description": "Save-and-stop waits for atomic persistence. Failed saves leave the room paused; restored outings also start paused.",
      "diagram": [
        {
          "label": "Outing state",
          "detail": "Simulation snapshot"
        },
        {
          "label": "Atomic save / backup",
          "detail": "Validated, versioned data"
        },
        {
          "label": "Restore paused",
          "detail": "Resume under host control"
        }
      ],
      "caption": "Save lifecycle"
    },
    {
      "id": "release",
      "label": "Portable release",
      "description": "The release contains the compiled web client and an explicit server/shared runtime allowlist. Authoring assets and private save data stay outside the public bundle.",
      "diagram": [
        {
          "label": "Compiled client",
          "detail": "Browser-ready public assets"
        },
        {
          "label": "Server / shared",
          "detail": "Explicit runtime allowlist"
        },
        {
          "label": "Portable package",
          "detail": "Package metadata and lockfile"
        }
      ],
      "caption": "Release contents"
    }
  ],
  "quire": [
    {
      "id": "browser-reader",
      "label": "Conversation reader",
      "description": "Read a shared coding session as a conversation. Jump between prompts, open tool results, and read formatted explanations. The browser decrypts the content using the link key.",
      "caption": "Conversation reader · sample session",
      "code": {
        "file": "web/src/share-v2/crypto.ts",
        "line": 10,
        "text": "export async function openShareBlob(key: Uint8Array, blob: ArrayBuffer, shareId: string, kind: BlobKind, seq: number): Promise<unknown> {\n  const { nonce, ciphertext } = parseBlob(new Uint8Array(blob));\n  const aad = blobAad(shareId, kind, seq);\n  const cryptoKey = await crypto.subtle.importKey('raw', key as View, { name: 'AES-GCM' }, false, ['decrypt']);\n  const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: nonce as View, additionalData: aad as View }, cryptoKey, ciphertext as View);\n  const decompressed = await gunzip(new Uint8Array(plain));\n  if (decompressed.byteLength > MAX_DECOMPRESSED_BLOB_BYTES) throw new Error('decompressed blob too large');\n  return JSON.parse(new TextDecoder().decode(decompressed));\n}"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/quire/blob/f335236f77198d35f279e52cc21077ee473d5c90/web/src/share-v2/crypto.ts#L10-L18"
      },
      "image": "/images/quire-conversation.png"
    },
    {
      "id": "adapters",
      "label": "Session adapters",
      "description": "Adapters read Codex, Claude Code, ZCode, or Oh My Pi records and return one shaped conversation format for the publishing CLI.",
      "caption": "How it works",
      "code": {
        "file": "cli/src/harness/types.ts",
        "line": 50,
        "text": "export interface HarnessAdapter {\n  name: 'zcode' | 'claude-code' | 'codex' | 'omp';\n  // Adapters whose loadSession id is an exact input path (not a discovered\n  // session id) set this so resolveSession rethrows their specific\n  // fail-closed diagnostics instead of masking them as \"session not found\".\n  preserveDirectLoadError?: boolean;\n  listSessions(): Promise<HarnessSessionInfo[]>;\n  resolveCurrent(): Promise<HarnessSessionInfo>;\n  loadSession(id: string): Promise<ShapedSession>;\n}"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/quire/blob/f335236f77198d35f279e52cc21077ee473d5c90/cli/src/harness/types.ts#L50-L59"
      },
      "diagram": [
        {
          "label": "Choose a session",
          "detail": "Codex, Claude Code, ZCode, or Oh My Pi"
        },
        {
          "label": "Prepare the conversation",
          "detail": "One format for messages and tool results"
        },
        {
          "label": "Publish deliberately",
          "detail": "Create a share only when requested"
        }
      ]
    },
    {
      "id": "redaction",
      "label": "Ingestion redaction",
      "description": "The server redacts message parts and conversation metadata before the result can be stored.",
      "caption": "How it works",
      "code": {
        "file": "server/src/redact/prepare.ts",
        "line": 317,
        "text": "  const summary: Record<string, number> = {};\n  const add = (counts: Record<string, number>): void => {\n    for (const [k, v] of Object.entries(counts)) summary[k] = (summary[k] ?? 0) + v;\n  };\n  const redacted = session.messages.map((m) => ({ ...m, parts: m.parts.map((p) => redactPart(p, preset, add)) }));\n  const meta: Record<string, unknown> = { title: session.title };\n  redactMetaField(session.title, preset, add, meta, 'title');\n  redactMetaField(session.model, preset, add, meta, 'model');\n  redactMetaField(session.provider, preset, add, meta, 'provider');"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/quire/blob/f335236f77198d35f279e52cc21077ee473d5c90/server/src/redact/prepare.ts#L317-L325"
      },
      "diagram": [
        {
          "label": "Uploaded conversation",
          "detail": "Messages, tool output, and metadata"
        },
        {
          "label": "Remove sensitive content",
          "detail": "Apply server-side redaction rules"
        },
        {
          "label": "Prepared share",
          "detail": "Store the redacted result"
        }
      ]
    },
    {
      "id": "sealed-storage",
      "label": "Sealed conversation storage",
      "description": "Redacted pages are compressed, sealed with AES-GCM, and stored as ciphertext in Postgres. The server handles the content key during upload.",
      "caption": "How it works",
      "code": {
        "file": "server/src/share-v2/crypto.ts",
        "line": 7,
        "text": "async function importKey(key: Uint8Array) {\n  return subtle.importKey('raw', key as BufferSource, { name: 'AES-GCM' }, false, ['encrypt', 'decrypt']);\n}\nexport async function sealBlob(key: Uint8Array, shareId: string, kind: BlobKind, seq: number, value: unknown): Promise<Uint8Array> {\n  const plain = gzipSync(Buffer.from(JSON.stringify(value), 'utf8'));\n  const nonce = randomBytes(12);\n  const cipher = await subtle.encrypt({ name: 'AES-GCM', iv: nonce as BufferSource, additionalData: blobAad(shareId, kind, seq) as BufferSource }, await importKey(key), plain as BufferSource);\n  return layoutBlob(nonce, new Uint8Array(cipher));\n}"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/quire/blob/f335236f77198d35f279e52cc21077ee473d5c90/server/src/share-v2/crypto.ts#L7-L15"
      },
      "diagram": [
        {
          "label": "Redacted conversation",
          "detail": "Split into compressed pages"
        },
        {
          "label": "Encrypt each page",
          "detail": "AES-GCM with a content key"
        },
        {
          "label": "Stored share",
          "detail": "Encrypted content in PostgreSQL"
        }
      ]
    },
    {
      "id": "access-gate",
      "label": "Share access controls",
      "description": "The public API requires a ready share, checks expiration, and validates the unlock cookie when the owner set a password.",
      "caption": "Password protection · sample share",
      "code": {
        "file": "server/src/api/public-v2.ts",
        "line": 30,
        "text": "async function gate(c: Context, db: Db, config: Config): Promise<V2PublicShareState | Response> {\n  const shareId = c.req.param('shareId') ?? '';\n  const state = await getV2PublicShareState(db, shareId);\n  if (!state || state.state !== 'ready') return notFound(c);\n  if (state.expiresAt && new Date(state.expiresAt).getTime() <= Date.now()) return expired(c);\n  if (state.passwordHash) {\n    const value = parseCookie(c.req.header('cookie'), unlockCookieName(shareId));\n    if (!verifyUnlockCookie(config.unlockSecret, shareId, value)) return needsPassword(c);\n  }\n  return state;\n}"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/quire/blob/f335236f77198d35f279e52cc21077ee473d5c90/server/src/api/public-v2.ts#L30-L40"
      },
      "image": "/images/quire-password.png"
    }
  ],
  "pack3d": [
    {
      "id": "comparison-view",
      "label": "Original and output comparison",
      "description": "Inspect the original and optimized model side by side. Synchronized cameras and file-size displays make it easier to judge the result.",
      "caption": "Application screenshot",
      "image": "/images/pack3d-screenshot.png",
      "source": {
        "label": "View implementation",
        "url": "https://github.com/notmike101/pack3d/blob/6d15c8950d4bb325022ea9553e85471468b2b039/packages/renderer/src/App.vue#L197-L205"
      }
    },
    {
      "id": "desktop-controls",
      "label": "Desktop job controls",
      "description": "The Vue interface loads a GLTF or GLB file and remembers independent geometry, texture, and Draco options in the Electron application.",
      "caption": "How it works",
      "code": {
        "file": "packages/renderer/src/App.vue",
        "line": 27,
        "text": "const packOptions = reactive<IPackOptions>({\n  doDedupe: store.get('doDedupe', true),\n  doReorder: store.get('doReorder', true),\n  doWeld: store.get('doWeld', true),\n  doInstancing: store.get('doInstancing', false),\n  doResize: store.get('doResize', false),\n  doBasis: store.get('doBasis', false),\n  doDraco: store.get('doDraco', false),\n  resamplingFilter: store.get('resamplingFilter', TextureResizeFilter.LANCZOS3),\n  textureResolutionWidth: store.get('textureResolutionWidth', 1024),\n  textureResolutionHeight: store.get('textureResolutionHeight', 1024),\n  vertexCompressionMethod: store.get('vertexCompressionMethod', 'edgebreaker'),"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/pack3d/blob/6d15c8950d4bb325022ea9553e85471468b2b039/packages/renderer/src/App.vue#L27-L38"
      },
      "diagram": [
        {
          "label": "Choose a model",
          "detail": "Open a GLTF or GLB file"
        },
        {
          "label": "Choose optimizations",
          "detail": "Geometry, textures, and Draco controls"
        },
        {
          "label": "Start a job",
          "detail": "Remember settings between runs"
        }
      ]
    },
    {
      "id": "packing-worker",
      "label": "Packing worker",
      "description": "Electron sends each job to a worker thread. GLTF Transform coordinates geometry cleanup, texture resizing, Basis/toktx encoding, and Draco compression.",
      "caption": "How it works",
      "code": {
        "file": "packages/main/index.ts",
        "line": 107,
        "text": "ipcMain.on('request-pack', (event: Electron.IpcMainEvent, data: IPackJobRequest) => {\n  const { sender } = event;\n  const worker = new Worker(join(__dirname, '../workers/pack-worker/index.cjs'), { workerData: data });\n\n  worker.on('message', (result: any) => {\n    if (result.type === 'logging') {\n      sender.send('logging', result);\n    } else if (result.type === 'errorreport') {\n      sender.send('pack-error', result);\n    } else if (result.type === 'sizereport') {\n      sender.send('pack-sizereport', result);\n    } else if (result.type === 'packreport') {"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/pack3d/blob/6d15c8950d4bb325022ea9553e85471468b2b039/packages/main/index.ts#L107-L118"
      },
      "diagram": [
        {
          "label": "Model input",
          "detail": "Geometry, materials, and textures"
        },
        {
          "label": "Background worker",
          "detail": "Cleanup, resize, and compression"
        },
        {
          "label": "Optimized output",
          "detail": "Progress updates and file-size results"
        }
      ]
    }
  ],
  "mealmind": [
    {
      "id": "planning-workspace",
      "label": "Weekly planning workspace",
      "description": "Build a week of meals, change recipes, adjust servings, and skip days in one editable workspace.",
      "caption": "Weekly planner · sample data",
      "code": {
        "file": "apps/web/app/components/plan/SelectionWorkspace.vue",
        "line": 171,
        "text": "    <PlanScheduleStrip\n      :plan=\"plan\"\n      :active-meal-id=\"activeMealId\"\n      :adding-date=\"addingDate\"\n      :busy=\"busy\"\n      @select=\"selectMeal\"\n      @add=\"beginAdd\"\n      @toggle-day=\"toggleDay\"\n    />"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/meal-mind/blob/d9a0524533b2551af0b680f7a7a7fd83b0e7c846/apps/web/app/components/plan/SelectionWorkspace.vue#L171-L179"
      },
      "image": "/images/mealmind-planning.png"
    },
    {
      "id": "recipe-catalog",
      "label": "Recipe library",
      "description": "Browse recipes and open their ingredients, instructions, and serving controls. CookLang documents in PostgreSQL supply the structured recipe data.",
      "caption": "Recipe details · sample data",
      "code": {
        "file": "services/api/src/recipes.ts",
        "line": 31,
        "text": "function parseDocument(document: RecipeDocument, servings?: number) {\n  const base = parseRecipeCooklang(document.cooklang, documentPath(document));\n  if (servings === undefined || servings === base.defaultServings) return base;\n  return parseRecipeCooklang(\n    document.cooklang,\n    documentPath(document),\n    servings / base.defaultServings,\n    base.defaultServings,\n  );\n}"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/meal-mind/blob/d9a0524533b2551af0b680f7a7a7fd83b0e7c846/services/api/src/recipes.ts#L31-L40"
      },
      "image": "/images/mealmind-recipe.png"
    },
    {
      "id": "planning-api",
      "label": "Plan validation and state",
      "description": "Fastify services own plan changes. Generated meals must fit the requested week and meal count and reference recipes that exist in the catalog.",
      "caption": "How it works",
      "code": {
        "file": "services/api/src/services/planning.ts",
        "line": 54,
        "text": "  const errors = validatePlannedMealsForWeek(meals, week, expectedCount);\n  const recipesById = getRecipeLookup(recipes);\n  for (const meal of meals) {\n    if (!recipesById.has(meal.recipeId)) errors.push(`${meal.date} references unknown recipe \"${meal.recipeId}\".`);\n  }\n  return errors;\n}"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/meal-mind/blob/d9a0524533b2551af0b680f7a7a7fd83b0e7c846/services/api/src/services/planning.ts#L54-L60"
      },
      "diagram": [
        {
          "label": "Meal choices",
          "detail": "Recipes, dates, and servings"
        },
        {
          "label": "Check the plan",
          "detail": "Known recipes, valid week, expected count"
        },
        {
          "label": "Save a valid plan",
          "detail": "Draft, committed, active, or completed"
        }
      ]
    },
    {
      "id": "ai-provider",
      "label": "AI provider adapter",
      "description": "A server-side client connects to the configured OpenAI-compatible provider; credentials come from the environment and responses pass schema validation.",
      "caption": "How it works",
      "code": {
        "file": "packages/ai/src/client.ts",
        "line": 19,
        "text": "function getOpenAI(settings: Pick<Settings, \"aiBaseUrl\">) {\n  return new OpenAI({\n    apiKey: process.env.OPENAI_COMPATIBLE_API_KEY?.trim() || \"not-required\",\n    baseURL: settings.aiBaseUrl,\n    fetch: globalThis.fetch,\n  });\n}"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/meal-mind/blob/d9a0524533b2551af0b680f7a7a7fd83b0e7c846/packages/ai/src/client.ts#L19-L25"
      },
      "diagram": [
        {
          "label": "Planning request",
          "detail": "Preferences and available recipes"
        },
        {
          "label": "Configured model",
          "detail": "Local or remote compatible provider"
        },
        {
          "label": "Suggested meals",
          "detail": "Checked before being accepted"
        }
      ]
    },
    {
      "id": "shopping-list",
      "label": "Shopping list",
      "description": "Meal ingredients are scaled to selected servings and pantry staples are removed before the shopping workflow creates and stores the list.",
      "caption": "Shopping list · sample data",
      "code": {
        "file": "packages/domain/src/shopping.ts",
        "line": 20,
        "text": "      return {\n        recipeId: recipe.id,\n        recipeTitle: recipe.title,\n        mealServings: meal.servings,\n        defaultServings: recipe.defaultServings,\n        ingredients: recipe.ingredients\n          .filter((ingredient) => !isPantryStaple(ingredient, input.pantryStaples))\n          .map((ingredient) => scaleServings(ingredient, meal.servings, recipe.defaultServings)),\n      };"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/meal-mind/blob/d9a0524533b2551af0b680f7a7a7fd83b0e7c846/packages/domain/src/shopping.ts#L20-L28"
      },
      "image": "/images/mealmind-shopping.png"
    },
    {
      "id": "mcp-adapter",
      "label": "MCP access",
      "description": "MCP tools and resources call the same REST API used by the web app. They can inspect recipes and plans or request an editable plan.",
      "caption": "How it works",
      "code": {
        "file": "services/mcp/src/app.ts",
        "line": 498,
        "text": "  server.registerTool(\n    \"create_blank_plan\",\n    {\n      title: \"Create Blank Plan\",\n      description: \"Create an empty editable weekly plan without calling AI.\",\n      inputSchema: CreateBlankPlanInputSchema,\n      annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: false },\n    },\n    async (args) => jsonText(await postJson(\"/api/plans\", { weekStart: args.weekStart })),\n  );"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/meal-mind/blob/d9a0524533b2551af0b680f7a7a7fd83b0e7c846/services/mcp/src/app.ts#L498-L507"
      },
      "diagram": [
        {
          "label": "Agent request",
          "detail": "Read recipes or create a plan"
        },
        {
          "label": "Shared application API",
          "detail": "The same rules used by the website"
        },
        {
          "label": "Editable plan",
          "detail": "Continue in the normal interface"
        }
      ]
    }
  ],
  "zcode-desktop-extensions": [
    {
      "id": "vendor-loader",
      "label": "Application startup",
      "description": "The installer backs up the vendor ASAR and moves it beside a small managed loader, allowing the original application to remain available.",
      "caption": "How it works",
      "code": {
        "file": "src/cli/installer.ts",
        "line": 86,
        "text": "  if (await exists(appAsar)) {\n    const incomingPackage = readPackage(appAsar);\n    await backupVendor(appAsar, incomingPackage.version, paths.backups);\n    if (await exists(originalAsar)) {\n      const previousPackage = readPackage(originalAsar);\n      await backupVendor(originalAsar, previousPackage.version, paths.backups);\n      await rm(originalAsar, {force: true});\n    }\n    await rename(appAsar, originalAsar);\n    vendorAsar = originalAsar;\n  } else if (await exists(originalAsar)) {\n    vendorAsar = originalAsar;"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/zcode-extensions/blob/31c20d79ad21f46e9c734a70195c5daecee53500/src/cli/installer.ts#L86-L97"
      },
      "diagram": [
        {
          "label": "Preserve the original",
          "detail": "Back up the vendor application"
        },
        {
          "label": "Load extensions",
          "detail": "Start the extension host"
        },
        {
          "label": "Open ZCode",
          "detail": "Keep the original app available"
        }
      ]
    },
    {
      "id": "extension-host",
      "label": "Extension lifecycle host",
      "description": "The host loads each declared entrypoint, requires an activate function, and tracks disposables for cleanup when extensions stop or reload.",
      "caption": "How it works",
      "code": {
        "file": "src/host/plugin-manager.ts",
        "line": 282,
        "text": "    const entrypoint = containedExtensionPath(record.root, record.manifest.entrypoints.main);\n    try {\n      clearRequireCache(record.root);\n      const required = createRequire(import.meta.url)(entrypoint) as PluginModule | {default?: PluginModule};\n      const module = (\"default\" in required && required.default ? required.default : required) as PluginModule;\n      if (typeof module.activate !== \"function\") throw new Error(\"Main entrypoint must export activate(context)\");\n      record.module = module;\n      const logger = this.#options.logger.child(`plugin:${record.manifest.id}`);\n      const track = <T extends Disposable>(disposable: T): T => {\n        record.disposables.push(disposable);\n        return disposable;\n      };"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/zcode-extensions/blob/31c20d79ad21f46e9c734a70195c5daecee53500/src/host/plugin-manager.ts#L282-L293"
      },
      "diagram": [
        {
          "label": "Install an extension",
          "detail": "Read its manifest and entrypoint"
        },
        {
          "label": "Activate it",
          "detail": "Start the declared functionality"
        },
        {
          "label": "Stop or reload",
          "detail": "Clean up tracked resources"
        }
      ]
    },
    {
      "id": "typed-sdk",
      "label": "Typed SDK and UI slots",
      "description": "The SDK describes declared and granted capabilities plus supported UI contribution slots, connecting extensions to the desktop app through an explicit contract.",
      "caption": "How it works",
      "code": {
        "file": "sdk/index.ts",
        "line": 224,
        "text": "export type ExtensionHostCapabilities = {\n  apiVersion: 1;\n  hostVersion: string;\n  zcodeVersion: string;\n  declared: ExtensionCapability[];\n  granted: ExtensionCapability[];\n  legacyDefaults: boolean;\n  uiSlots: UiContributionSlot[];\n  experimental: boolean;\n};"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/zcode-extensions/blob/31c20d79ad21f46e9c734a70195c5daecee53500/sdk/index.ts#L224-L233"
      },
      "diagram": [
        {
          "label": "Extension",
          "detail": "Declare required capabilities"
        },
        {
          "label": "Typed SDK",
          "detail": "Workspace, sessions, tasks, and UI slots"
        },
        {
          "label": "Desktop interface",
          "detail": "Contribute supported controls"
        }
      ]
    },
    {
      "id": "update-recovery",
      "label": "Recoverable updates",
      "description": "Verified bundles are staged for launch. If activation fails, the host restores the prior bundle and activates it again while preserving extension data.",
      "caption": "How it works",
      "code": {
        "file": "src/host/plugin-manager.ts",
        "line": 350,
        "text": "      return;\n    }\n\n    await this.#options.logger.warn(\"Rolling back extension update after activation failure\", {\n      pluginId: record.manifest.id,\n      version: applied.version,\n      error: record.error,\n    });\n    await this.#deactivate(record);\n    await this.#updater.rollbackApplied(record.manifest.id);\n    const manifest = await readExtensionManifest(record.root);"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/zcode-extensions/blob/31c20d79ad21f46e9c734a70195c5daecee53500/src/host/plugin-manager.ts#L350-L360"
      },
      "diagram": [
        {
          "label": "Stage an update",
          "detail": "Verify the replacement bundle"
        },
        {
          "label": "Activate on launch",
          "detail": "Keep extension data"
        },
        {
          "label": "Recover if needed",
          "detail": "Restore the previous working bundle"
        }
      ]
    },
    {
      "id": "native-tasks",
      "label": "Native task bridge",
      "description": "Extensions can create ordinary persistent ZCode tasks through the desktop service. The separately released Scheduler exercised this bridge on supported older ZCode versions.",
      "caption": "How it works",
      "code": {
        "file": "src/protocol/task-service.ts",
        "line": 153,
        "text": "    const createdTask = asRecord(await task.createTask({\n      ...target,\n      mode: spec.mode,\n      ...(useV4TaskFacade ? {v4Create: true} : {}),\n      ...(spec.model ? {model: spec.model} : {}),\n      ...(spec.thoughtLevel ? {thoughtLevel: spec.thoughtLevel} : {}),\n      ...(spec.toolAllowlist ? {toolAllowlist: spec.toolAllowlist} : {}),\n      ...(spec.toolDenylist ? {toolDenylist: spec.toolDenylist} : {}),\n    }));\n    const sessionId = stringValue(createdTask.taskId);\n    if (!sessionId) throw new Error(\"ZCode did not return a task ID\");"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/zcode-extensions/blob/31c20d79ad21f46e9c734a70195c5daecee53500/src/protocol/task-service.ts#L153-L163"
      },
      "diagram": [
        {
          "label": "Extension request",
          "detail": "Task mode and configuration"
        },
        {
          "label": "Native task service",
          "detail": "Create a persistent ZCode task"
        },
        {
          "label": "Normal task interface",
          "detail": "Work appears with other app tasks"
        }
      ]
    }
  ],
  'balatro-mcp': [
    {
      id: 'decision-loop', label: 'Agent decision loop', caption: 'How it works',
      description: 'The Rust MCP server gives an agent the visible game state and legal choices. Each action carries the decision identifier it belongs to, so a choice based on old state can be rejected.',
      diagram: [{ label: 'Observe the game', detail: 'Visible state and a decision identifier' }, { label: 'Choose a legal action', detail: 'Typed action and selection parameters' }, { label: 'Check the live decision', detail: 'Reject stale choices before execution' }],
      source: { label: 'Inspect the decision interface', url: 'https://github.com/notmike101/balatro-mcp/blob/9b27ce9fdbc52aa5b462caaa7daa528ec2b5808f/src/tools.rs' },
    },
    {
      id: 'game-bridge', label: 'Lua game bridge', caption: 'How it works',
      description: 'A Lua bridge captures observations inside Balatro, receives serialized commands, and returns correlated results. Hidden card identities are withheld before the agent sees the observation.',
      diagram: [{ label: 'Balatro + Lua bridge', detail: 'Capture visible state and execute commands' }, { label: 'File communication', detail: 'Match each response to its command' }, { label: 'Rust interface', detail: 'Sanitize observations returned to the agent' }],
      source: { label: 'Inspect the game bridge', url: 'https://github.com/notmike101/balatro-mcp/blob/9b27ce9fdbc52aa5b462caaa7daa528ec2b5808f/mod/codex_agent.lua' },
    },
    {
      id: 'legal-actions', label: 'Policy and scoring', caption: 'How it works',
      description: 'The policy backend builds the available action set for the current phase, checks selected cards, and provides scoring estimates based on visible hands.',
      diagram: [{ label: 'Current phase', detail: 'Hand, shop, selection, or other game state' }, { label: 'Policy checks', detail: 'Valid selections and available actions' }, { label: 'Decision context', detail: 'Visible-hand classifications and scoring estimates' }],
      source: { label: 'Inspect action policy', url: 'https://github.com/notmike101/balatro-mcp/blob/9b27ce9fdbc52aa5b462caaa7daa528ec2b5808f/src/backend/policy.rs' },
    },
    {
      id: 'runtime-guard', label: 'Runtime coordination', caption: 'How it works',
      description: 'A shared file lock prevents simultaneous mutations from multiple MCP processes. Checks cover observation age, bridge version, the game process, and the experiment’s fixed seed.',
      diagram: [{ label: 'Acquire shared lock', detail: 'One process mutates the game at a time' }, { label: 'Run preflight', detail: 'Process, seed, version, and fresh observation' }, { label: 'Execute and release', detail: 'Keep the action inside the guarded operation' }],
      source: { label: 'Inspect runtime checks', url: 'https://github.com/notmike101/balatro-mcp/blob/9b27ce9fdbc52aa5b462caaa7daa528ec2b5808f/src/backend/runtime.rs' },
    },
    {
      id: 'decision-history', label: 'Decision history', caption: 'How it works',
      description: 'SQLite stores decision rationale, outcomes, lessons, and replay history. Explicit runtime resets archive the state and replay databases, including their sidecar files.',
      diagram: [{ label: 'Decision record', detail: 'Observed state, rationale, and result' }, { label: 'SQLite stores', detail: 'Retain state, lessons, and replay history' }, { label: 'Recall or reset', detail: 'Query the record or archive it explicitly' }],
      source: { label: 'Inspect persistent state', url: 'https://github.com/notmike101/balatro-mcp/blob/9b27ce9fdbc52aa5b462caaa7daa528ec2b5808f/src/backend/state.rs' },
    },
  ],
  'between-sessions': [
    {
      id: 'journal', label: 'Reading interface', caption: 'Live journal capture',
      description: 'The public Astro site presents AI-authored articles with categories, archive navigation, and RSS. This is the actual published homepage.',
      image: '/images/between-sessions-home.png',
      source: { label: 'Read the journal', url: 'https://ai-blog.mikeorozco.dev/' },
    },
    {
      id: 'journey', label: 'Journey record', caption: 'Live Journey capture',
      description: 'Working principles, preferences, revisions, and open questions link back to the articles supporting them. The record makes changes across sessions visible to readers.',
      image: '/images/between-sessions-journey.png',
      source: { label: 'Explore the Journey', url: 'https://ai-blog.mikeorozco.dev/journey/' },
    },
    {
      id: 'content-checks', label: 'Content checks', caption: 'How it works',
      description: 'Validation checks article metadata, dates, category identifiers, restricted embeds, selected privacy patterns, and Journey references. It checks structure, not the truth of an article’s claims.',
      diagram: [{ label: 'Markdown + metadata', detail: 'Articles, dates, categories, and sources' }, { label: 'Content validation', detail: 'Reject malformed content and selected privacy risks' }, { label: 'Journey references', detail: 'Require supporting article slugs to exist' }],
      source: { label: 'Inspect the validator', url: 'https://github.com/notmike101/ai-blog/blob/5fcdf8f2d2dc3c9e5a0aa2b2c1008ae92ae85737/scripts/validate-content.mjs' },
    },
    {
      id: 'publishing', label: 'Publishing workflow', caption: 'How it works',
      description: 'Pull requests run content, site, and browser checks. A separate main-branch workflow builds and publishes the static site to GitHub Pages.',
      diagram: [{ label: 'Pull request', detail: 'Review the proposed article and site changes' }, { label: 'Validation', detail: 'Content, build, and browser behavior checks' }, { label: 'Main branch deployment', detail: 'Generate and publish the static site' }],
      source: { label: 'Inspect the publishing checks', url: 'https://github.com/notmike101/ai-blog/blob/5fcdf8f2d2dc3c9e5a0aa2b2c1008ae92ae85737/.github/workflows/validate.yml' },
    },
  ],
  'digital-garden-pipeline': [
    {
      id: 'publishing-system', label: 'Publishing pipeline', caption: 'System diagram',
      description: 'Three containers connect a synchronized Obsidian vault to a generated website. The integration uses the upstream LiveSync Bridge, a publication processor, VitePress, and Nginx.',
      diagram: [{ label: 'Sync + select', detail: 'Upstream LiveSync and opt-in publication rules' }, { label: 'Build', detail: 'VitePress generates pages from selected Markdown' }, { label: 'Serve', detail: 'Nginx delivers the static build output' }],
      source: { label: 'Inspect the container layout', url: 'https://github.com/notmike101/digital-garden-app/blob/feb2765bb9a4b465e7b9a0d5832cbe354dd743d4/docker-compose.yml' },
    },
    {
      id: 'publication-rules', label: 'Note selection', caption: 'How it works',
      description: 'Notes opt into publication through frontmatter. The processor prepares selected Markdown, applies an optional output path, and strips publishing-control fields.',
      diagram: [{ label: 'Note frontmatter', detail: 'Explicit publish flag and optional path' }, { label: 'Publication processor', detail: 'Select notes and prepare their Markdown' }, { label: 'Published input volume', detail: 'Only selected documents reach the builder' }],
      source: { label: 'Inspect the publication processor', url: 'https://github.com/notmike101/digital-garden-app/blob/feb2765bb9a4b465e7b9a0d5832cbe354dd743d4/livesync-bridge/processor.js' },
    },
    {
      id: 'site-build', label: 'Automatic builds', caption: 'How it works',
      description: 'The build service watches published Markdown and regenerates the VitePress site after changes, including an initial build at startup.',
      diagram: [{ label: 'Published Markdown', detail: 'Read from the shared input volume' }, { label: 'File watcher', detail: 'Trigger the initial and subsequent builds' }, { label: 'Static output', detail: 'Write pages for the web container' }],
      source: { label: 'Inspect the build watcher', url: 'https://github.com/notmike101/digital-garden-app/blob/feb2765bb9a4b465e7b9a0d5832cbe354dd743d4/watch-build.js' },
    },
    {
      id: 'static-delivery', label: 'Static delivery', caption: 'How it works',
      description: 'Nginx reads the generated output through a read-only mount. This is public static content; the optional browser-side password display gate does not protect private notes.',
      diagram: [{ label: 'Generated files', detail: 'HTML and assets in the build-output volume' }, { label: 'Read-only web mount', detail: 'Keep serving separate from generation' }, { label: 'Nginx', detail: 'Deliver public pages to the browser' }],
      source: { label: 'Inspect delivery configuration', url: 'https://github.com/notmike101/digital-garden-app/blob/feb2765bb9a4b465e7b9a0d5832cbe354dd743d4/nginx.conf' },
    },
  ],
  'false-witness': [
    {
      id: 'prototype-scene', label: 'Godot prototype', caption: 'Early geometry inspection · prototype art',
      description: 'An actual native capture from an early room and apparatus inspection. It shows prototype geometry; the current project is developing physical interactions and a player-hosted session foundation.',
      image: '/images/false-witness-prototype.png',
    },
    {
      id: 'physical-interactions', label: 'Physical interactions', caption: 'Implemented prototype',
      description: 'The controller handles movement, stance, carry poses, and input. The interaction world coordinates actors, items, doors, placement, handoffs, and action results.',
      diagram: [{ label: 'Player controller', detail: 'Movement, stance, and interaction input' }, { label: 'Interaction world', detail: 'Ownership, placement, handoffs, and doors' }, { label: 'World response', detail: 'Apply and report the action result' }],
    },
    {
      id: 'session-foundation', label: 'Session networking', caption: 'Implemented prototype',
      description: 'Host and join flows cover invitation trust, admission, roster and snapshot synchronization, chat, and reconnect behavior. Distinct-PC gameplay acceptance remains unfinished.',
      diagram: [{ label: 'Host / join interface', detail: 'Invitation, trust, approval, and roster' }, { label: 'Session protocol', detail: 'Admission, snapshots, chat, and pings' }, { label: 'Connection lifecycle', detail: 'Liveness, loss detection, and reconnect' }],
    },
    {
      id: 'content-validation', label: 'Content validation', caption: 'Implemented prototype',
      description: 'Authored environments and props enter through a content boundary that checks asset manifests, location data, and build identity before loading.',
      diagram: [{ label: 'Authored content', detail: 'Blender environments and props' }, { label: 'Content checks', detail: 'Manifest, location, and build identity' }, { label: 'Godot scene', detail: 'Load the validated content set' }],
    },
  ],
  'stateful-workflow-runtime': [
    {
      id: 'proof-workflow', label: 'Pause and resume', caption: 'Local prototype',
      description: 'A bounded LangGraph workflow generates requirements, pauses for operator review, resumes into review and an image probe, and persists the accepted artifact. Full project delivery is still planned.',
      diagram: [{ label: 'Generate', detail: 'Run a bounded read-only worker task' }, { label: 'Pause for the operator', detail: 'Retain the execution checkpoint' }, { label: 'Resume and review', detail: 'Complete the remaining proof steps' }],
    },
    {
      id: 'durable-records', label: 'Durable records', caption: 'Local prototype',
      description: 'Execution checkpoints, SQLite domain records, and content-addressed artifacts have separate responsibilities. Artifact files are persisted before their database references.',
      diagram: [{ label: 'Graph checkpoint', detail: 'Where execution should continue' }, { label: 'SQLite records', detail: 'Authoritative operational state and receipts' }, { label: 'Immutable artifacts', detail: 'Content-addressed files referenced by the record' }],
    },
    {
      id: 'dispatch-ledger', label: 'Dispatch ledger', caption: 'Local prototype',
      description: 'Stable dispatch keys connect request hashes, worker thread and turn identifiers, results, and promotion receipts. A resumed controller can recover completed model work without routinely submitting it again.',
      diagram: [{ label: 'Dispatch request', detail: 'Stable key and request hash' }, { label: 'Worker adapter', detail: 'Start bounded work or recover its response' }, { label: 'Result receipt', detail: 'Retain the outcome and artifact promotion' }],
    },
  ],
};

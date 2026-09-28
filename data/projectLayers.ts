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
      }
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
      "id": "adapters",
      "label": "Session adapters",
      "description": "Adapters read Codex, Claude Code, ZCode, or Oh My Pi records and return one shaped conversation format for the publishing CLI.",
      "caption": "Public source",
      "code": {
        "file": "cli/src/harness/types.ts",
        "line": 50,
        "text": "export interface HarnessAdapter {\n  name: 'zcode' | 'claude-code' | 'codex' | 'omp';\n  // Adapters whose loadSession id is an exact input path (not a discovered\n  // session id) set this so resolveSession rethrows their specific\n  // fail-closed diagnostics instead of masking them as \"session not found\".\n  preserveDirectLoadError?: boolean;\n  listSessions(): Promise<HarnessSessionInfo[]>;\n  resolveCurrent(): Promise<HarnessSessionInfo>;\n  loadSession(id: string): Promise<ShapedSession>;\n}"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/quire/blob/f335236f77198d35f279e52cc21077ee473d5c90/cli/src/harness/types.ts#L50-L59"
      }
    },
    {
      "id": "redaction",
      "label": "Ingestion redaction",
      "description": "The server redacts message parts and conversation metadata before the result can be stored.",
      "caption": "Public source",
      "code": {
        "file": "server/src/redact/prepare.ts",
        "line": 317,
        "text": "  const summary: Record<string, number> = {};\n  const add = (counts: Record<string, number>): void => {\n    for (const [k, v] of Object.entries(counts)) summary[k] = (summary[k] ?? 0) + v;\n  };\n  const redacted = session.messages.map((m) => ({ ...m, parts: m.parts.map((p) => redactPart(p, preset, add)) }));\n  const meta: Record<string, unknown> = { title: session.title };\n  redactMetaField(session.title, preset, add, meta, 'title');\n  redactMetaField(session.model, preset, add, meta, 'model');\n  redactMetaField(session.provider, preset, add, meta, 'provider');"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/quire/blob/f335236f77198d35f279e52cc21077ee473d5c90/server/src/redact/prepare.ts#L317-L325"
      }
    },
    {
      "id": "sealed-storage",
      "label": "Sealed conversation storage",
      "description": "Redacted pages are compressed, sealed with AES-GCM, and stored as ciphertext in Postgres. The server handles the content key during upload.",
      "caption": "Public source",
      "code": {
        "file": "server/src/share-v2/crypto.ts",
        "line": 7,
        "text": "async function importKey(key: Uint8Array) {\n  return subtle.importKey('raw', key as BufferSource, { name: 'AES-GCM' }, false, ['encrypt', 'decrypt']);\n}\nexport async function sealBlob(key: Uint8Array, shareId: string, kind: BlobKind, seq: number, value: unknown): Promise<Uint8Array> {\n  const plain = gzipSync(Buffer.from(JSON.stringify(value), 'utf8'));\n  const nonce = randomBytes(12);\n  const cipher = await subtle.encrypt({ name: 'AES-GCM', iv: nonce as BufferSource, additionalData: blobAad(shareId, kind, seq) as BufferSource }, await importKey(key), plain as BufferSource);\n  return layoutBlob(nonce, new Uint8Array(cipher));\n}"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/quire/blob/f335236f77198d35f279e52cc21077ee473d5c90/server/src/share-v2/crypto.ts#L7-L15"
      }
    },
    {
      "id": "access-gate",
      "label": "Share access controls",
      "description": "The public API requires a ready share, checks expiration, and validates the unlock cookie when the owner set a password.",
      "caption": "Public source",
      "code": {
        "file": "server/src/api/public-v2.ts",
        "line": 30,
        "text": "async function gate(c: Context, db: Db, config: Config): Promise<V2PublicShareState | Response> {\n  const shareId = c.req.param('shareId') ?? '';\n  const state = await getV2PublicShareState(db, shareId);\n  if (!state || state.state !== 'ready') return notFound(c);\n  if (state.expiresAt && new Date(state.expiresAt).getTime() <= Date.now()) return expired(c);\n  if (state.passwordHash) {\n    const value = parseCookie(c.req.header('cookie'), unlockCookieName(shareId));\n    if (!verifyUnlockCookie(config.unlockSecret, shareId, value)) return needsPassword(c);\n  }\n  return state;\n}"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/quire/blob/f335236f77198d35f279e52cc21077ee473d5c90/server/src/api/public-v2.ts#L30-L40"
      }
    },
    {
      "id": "browser-reader",
      "label": "Browser conversation reader",
      "description": "The Vue viewer uses the link-fragment key to decrypt returned pages, then renders messages, code, and tool output with incremental loading.",
      "caption": "Public source",
      "code": {
        "file": "web/src/share-v2/crypto.ts",
        "line": 10,
        "text": "export async function openShareBlob(key: Uint8Array, blob: ArrayBuffer, shareId: string, kind: BlobKind, seq: number): Promise<unknown> {\n  const { nonce, ciphertext } = parseBlob(new Uint8Array(blob));\n  const aad = blobAad(shareId, kind, seq);\n  const cryptoKey = await crypto.subtle.importKey('raw', key as View, { name: 'AES-GCM' }, false, ['decrypt']);\n  const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: nonce as View, additionalData: aad as View }, cryptoKey, ciphertext as View);\n  const decompressed = await gunzip(new Uint8Array(plain));\n  if (decompressed.byteLength > MAX_DECOMPRESSED_BLOB_BYTES) throw new Error('decompressed blob too large');\n  return JSON.parse(new TextDecoder().decode(decompressed));\n}"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/quire/blob/f335236f77198d35f279e52cc21077ee473d5c90/web/src/share-v2/crypto.ts#L10-L18"
      }
    }
  ],
  "pack3d": [
    {
      "id": "desktop-controls",
      "label": "Desktop job controls",
      "description": "The Vue interface loads a GLTF or GLB file and remembers independent geometry, texture, and Draco options in the Electron application.",
      "caption": "Public source",
      "code": {
        "file": "packages/renderer/src/App.vue",
        "line": 27,
        "text": "const packOptions = reactive<IPackOptions>({\n  doDedupe: store.get('doDedupe', true),\n  doReorder: store.get('doReorder', true),\n  doWeld: store.get('doWeld', true),\n  doInstancing: store.get('doInstancing', false),\n  doResize: store.get('doResize', false),\n  doBasis: store.get('doBasis', false),\n  doDraco: store.get('doDraco', false),\n  resamplingFilter: store.get('resamplingFilter', TextureResizeFilter.LANCZOS3),\n  textureResolutionWidth: store.get('textureResolutionWidth', 1024),\n  textureResolutionHeight: store.get('textureResolutionHeight', 1024),\n  vertexCompressionMethod: store.get('vertexCompressionMethod', 'edgebreaker'),"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/pack3d/blob/6d15c8950d4bb325022ea9553e85471468b2b039/packages/renderer/src/App.vue#L27-L38"
      }
    },
    {
      "id": "packing-worker",
      "label": "Packing worker",
      "description": "Electron sends each job to a worker thread. GLTF Transform coordinates geometry cleanup, texture resizing, Basis/toktx encoding, and Draco compression.",
      "caption": "Public source",
      "code": {
        "file": "packages/main/index.ts",
        "line": 107,
        "text": "ipcMain.on('request-pack', (event: Electron.IpcMainEvent, data: IPackJobRequest) => {\n  const { sender } = event;\n  const worker = new Worker(join(__dirname, '../workers/pack-worker/index.cjs'), { workerData: data });\n\n  worker.on('message', (result: any) => {\n    if (result.type === 'logging') {\n      sender.send('logging', result);\n    } else if (result.type === 'errorreport') {\n      sender.send('pack-error', result);\n    } else if (result.type === 'sizereport') {\n      sender.send('pack-sizereport', result);\n    } else if (result.type === 'packreport') {"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/pack3d/blob/6d15c8950d4bb325022ea9553e85471468b2b039/packages/main/index.ts#L107-L118"
      }
    },
    {
      "id": "comparison-view",
      "label": "Original and output comparison",
      "description": "Two Babylon.js model views share camera movement and show each file size so users can inspect the result with the same viewpoint.",
      "caption": "Application screenshot",
      "image": "/images/pack3d-screenshot.png",
      "source": {
        "label": "View implementation",
        "url": "https://github.com/notmike101/pack3d/blob/6d15c8950d4bb325022ea9553e85471468b2b039/packages/renderer/src/App.vue#L197-L205"
      }
    }
  ],
  "mealmind": [
    {
      "id": "recipe-catalog",
      "label": "CookLang recipe catalog",
      "description": "The API parses CookLang recipe documents from Postgres into ingredients, instructions, timers, and serving information. Local recipe files are a legacy import source.",
      "caption": "Public source",
      "code": {
        "file": "services/api/src/recipes.ts",
        "line": 31,
        "text": "function parseDocument(document: RecipeDocument, servings?: number) {\n  const base = parseRecipeCooklang(document.cooklang, documentPath(document));\n  if (servings === undefined || servings === base.defaultServings) return base;\n  return parseRecipeCooklang(\n    document.cooklang,\n    documentPath(document),\n    servings / base.defaultServings,\n    base.defaultServings,\n  );\n}"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/meal-mind/blob/d9a0524533b2551af0b680f7a7a7fd83b0e7c846/services/api/src/recipes.ts#L31-L40"
      }
    },
    {
      "id": "planning-workspace",
      "label": "Weekly planning workspace",
      "description": "The Nuxt/Vue workspace lets users choose recipes, add meals to dates, adjust servings, skip days, and review the plan.",
      "caption": "Public source",
      "code": {
        "file": "apps/web/app/components/plan/SelectionWorkspace.vue",
        "line": 171,
        "text": "    <PlanScheduleStrip\n      :plan=\"plan\"\n      :active-meal-id=\"activeMealId\"\n      :adding-date=\"addingDate\"\n      :busy=\"busy\"\n      @select=\"selectMeal\"\n      @add=\"beginAdd\"\n      @toggle-day=\"toggleDay\"\n    />"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/meal-mind/blob/d9a0524533b2551af0b680f7a7a7fd83b0e7c846/apps/web/app/components/plan/SelectionWorkspace.vue#L171-L179"
      }
    },
    {
      "id": "planning-api",
      "label": "Plan validation and state",
      "description": "Fastify services own plan changes. Generated meals must fit the requested week and meal count and reference recipes that exist in the catalog.",
      "caption": "Public source",
      "code": {
        "file": "services/api/src/services/planning.ts",
        "line": 54,
        "text": "  const errors = validatePlannedMealsForWeek(meals, week, expectedCount);\n  const recipesById = getRecipeLookup(recipes);\n  for (const meal of meals) {\n    if (!recipesById.has(meal.recipeId)) errors.push(`${meal.date} references unknown recipe \"${meal.recipeId}\".`);\n  }\n  return errors;\n}"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/meal-mind/blob/d9a0524533b2551af0b680f7a7a7fd83b0e7c846/services/api/src/services/planning.ts#L54-L60"
      }
    },
    {
      "id": "ai-provider",
      "label": "AI provider adapter",
      "description": "A server-side client connects to the configured OpenAI-compatible provider; credentials come from the environment and responses pass schema validation.",
      "caption": "Public source",
      "code": {
        "file": "packages/ai/src/client.ts",
        "line": 19,
        "text": "function getOpenAI(settings: Pick<Settings, \"aiBaseUrl\">) {\n  return new OpenAI({\n    apiKey: process.env.OPENAI_COMPATIBLE_API_KEY?.trim() || \"not-required\",\n    baseURL: settings.aiBaseUrl,\n    fetch: globalThis.fetch,\n  });\n}"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/meal-mind/blob/d9a0524533b2551af0b680f7a7a7fd83b0e7c846/packages/ai/src/client.ts#L19-L25"
      }
    },
    {
      "id": "shopping-list",
      "label": "Shopping list preparation",
      "description": "Meal ingredients are scaled to selected servings and pantry staples are removed before the shopping workflow creates and stores the list.",
      "caption": "Public source",
      "code": {
        "file": "packages/domain/src/shopping.ts",
        "line": 20,
        "text": "      return {\n        recipeId: recipe.id,\n        recipeTitle: recipe.title,\n        mealServings: meal.servings,\n        defaultServings: recipe.defaultServings,\n        ingredients: recipe.ingredients\n          .filter((ingredient) => !isPantryStaple(ingredient, input.pantryStaples))\n          .map((ingredient) => scaleServings(ingredient, meal.servings, recipe.defaultServings)),\n      };"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/meal-mind/blob/d9a0524533b2551af0b680f7a7a7fd83b0e7c846/packages/domain/src/shopping.ts#L20-L28"
      }
    },
    {
      "id": "mcp-adapter",
      "label": "MCP access",
      "description": "MCP tools and resources call the same REST API used by the web app. They can inspect recipes and plans or request an editable plan.",
      "caption": "Public source",
      "code": {
        "file": "services/mcp/src/app.ts",
        "line": 498,
        "text": "  server.registerTool(\n    \"create_blank_plan\",\n    {\n      title: \"Create Blank Plan\",\n      description: \"Create an empty editable weekly plan without calling AI.\",\n      inputSchema: CreateBlankPlanInputSchema,\n      annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: false },\n    },\n    async (args) => jsonText(await postJson(\"/api/plans\", { weekStart: args.weekStart })),\n  );"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/meal-mind/blob/d9a0524533b2551af0b680f7a7a7fd83b0e7c846/services/mcp/src/app.ts#L498-L507"
      }
    }
  ],
  "zcode-desktop-extensions": [
    {
      "id": "vendor-loader",
      "label": "Preserved vendor application",
      "description": "The installer backs up the vendor ASAR and moves it beside a small managed loader, allowing the original application to remain available.",
      "caption": "Public source",
      "code": {
        "file": "src/cli/installer.ts",
        "line": 86,
        "text": "  if (await exists(appAsar)) {\n    const incomingPackage = readPackage(appAsar);\n    await backupVendor(appAsar, incomingPackage.version, paths.backups);\n    if (await exists(originalAsar)) {\n      const previousPackage = readPackage(originalAsar);\n      await backupVendor(originalAsar, previousPackage.version, paths.backups);\n      await rm(originalAsar, {force: true});\n    }\n    await rename(appAsar, originalAsar);\n    vendorAsar = originalAsar;\n  } else if (await exists(originalAsar)) {\n    vendorAsar = originalAsar;"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/zcode-extensions/blob/31c20d79ad21f46e9c734a70195c5daecee53500/src/cli/installer.ts#L86-L97"
      }
    },
    {
      "id": "extension-host",
      "label": "Extension lifecycle host",
      "description": "The host loads each declared entrypoint, requires an activate function, and tracks disposables for cleanup when extensions stop or reload.",
      "caption": "Public source",
      "code": {
        "file": "src/host/plugin-manager.ts",
        "line": 282,
        "text": "    const entrypoint = containedExtensionPath(record.root, record.manifest.entrypoints.main);\n    try {\n      clearRequireCache(record.root);\n      const required = createRequire(import.meta.url)(entrypoint) as PluginModule | {default?: PluginModule};\n      const module = (\"default\" in required && required.default ? required.default : required) as PluginModule;\n      if (typeof module.activate !== \"function\") throw new Error(\"Main entrypoint must export activate(context)\");\n      record.module = module;\n      const logger = this.#options.logger.child(`plugin:${record.manifest.id}`);\n      const track = <T extends Disposable>(disposable: T): T => {\n        record.disposables.push(disposable);\n        return disposable;\n      };"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/zcode-extensions/blob/31c20d79ad21f46e9c734a70195c5daecee53500/src/host/plugin-manager.ts#L282-L293"
      }
    },
    {
      "id": "typed-sdk",
      "label": "Typed SDK and UI slots",
      "description": "The SDK describes declared and granted capabilities plus supported UI contribution slots, connecting extensions to the desktop app through an explicit contract.",
      "caption": "Public source",
      "code": {
        "file": "sdk/index.ts",
        "line": 224,
        "text": "export type ExtensionHostCapabilities = {\n  apiVersion: 1;\n  hostVersion: string;\n  zcodeVersion: string;\n  declared: ExtensionCapability[];\n  granted: ExtensionCapability[];\n  legacyDefaults: boolean;\n  uiSlots: UiContributionSlot[];\n  experimental: boolean;\n};"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/zcode-extensions/blob/31c20d79ad21f46e9c734a70195c5daecee53500/sdk/index.ts#L224-L233"
      }
    },
    {
      "id": "update-recovery",
      "label": "Recoverable updates",
      "description": "Verified bundles are staged for launch. If activation fails, the host restores the prior bundle and activates it again while preserving extension data.",
      "caption": "Public source",
      "code": {
        "file": "src/host/plugin-manager.ts",
        "line": 350,
        "text": "      return;\n    }\n\n    await this.#options.logger.warn(\"Rolling back extension update after activation failure\", {\n      pluginId: record.manifest.id,\n      version: applied.version,\n      error: record.error,\n    });\n    await this.#deactivate(record);\n    await this.#updater.rollbackApplied(record.manifest.id);\n    const manifest = await readExtensionManifest(record.root);"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/zcode-extensions/blob/31c20d79ad21f46e9c734a70195c5daecee53500/src/host/plugin-manager.ts#L350-L360"
      }
    },
    {
      "id": "native-tasks",
      "label": "Native task bridge",
      "description": "Extensions can create ordinary persistent ZCode tasks through the desktop service. The separately released Scheduler exercised this bridge on supported older ZCode versions.",
      "caption": "Public source",
      "code": {
        "file": "src/protocol/task-service.ts",
        "line": 153,
        "text": "    const createdTask = asRecord(await task.createTask({\n      ...target,\n      mode: spec.mode,\n      ...(useV4TaskFacade ? {v4Create: true} : {}),\n      ...(spec.model ? {model: spec.model} : {}),\n      ...(spec.thoughtLevel ? {thoughtLevel: spec.thoughtLevel} : {}),\n      ...(spec.toolAllowlist ? {toolAllowlist: spec.toolAllowlist} : {}),\n      ...(spec.toolDenylist ? {toolDenylist: spec.toolDenylist} : {}),\n    }));\n    const sessionId = stringValue(createdTask.taskId);\n    if (!sessionId) throw new Error(\"ZCode did not return a task ID\");"
      },
      "source": {
        "label": "View source",
        "url": "https://github.com/notmike101/zcode-extensions/blob/31c20d79ad21f46e9c734a70195c5daecee53500/src/protocol/task-service.ts#L153-L163"
      }
    }
  ]
};

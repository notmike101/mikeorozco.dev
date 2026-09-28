# mikeorozco.dev

Personal portfolio for Mike Orozco, built with Nuxt 3 and statically deployed to GitHub Pages.

## Requirements

- Node.js 22.12 or newer
- pnpm 11.9.0

Corepack will use the pinned pnpm version from `package.json`:

```powershell
corepack enable
pnpm install
```

## Development

```powershell
pnpm dev
```

The local site is available at `http://localhost:3000`.

## Production validation

```powershell
pnpm typecheck
pnpm generate
pnpm test
```

The generated static site is written to `.output/public`. GitHub Actions runs the same command before deploying to GitHub Pages.

## Content model

Case-study content and metadata are defined in `data/caseStudies.ts`. The same records drive the project index, case-study routes, structured data, and the XML sitemap. `data/projectLayers.ts` supplies each project's actual components, independently of its narrative flow. `ProjectLayerGraphic.vue` renders screenshots, pinned public source excerpts, and documented architecture. See `docs/portfolio-evidence.md` for provenance and scope.

`pnpm test` checks the generated output after `pnpm generate`, including image-first project entry points, visual coverage independent of code, complete case-study content, research entries, images, metadata, and contact paths.

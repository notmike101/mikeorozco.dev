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
```

The generated static site is written to `.output/public`. GitHub Actions runs the same command before deploying to GitHub Pages.

## Content model

Featured work and case-study metadata are defined in `data/caseStudies.ts`. The same records drive homepage project rows, case-study routes, structured data, and the XML sitemap.

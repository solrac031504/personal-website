<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Repository conventions

This repository contains a single Next.js 16 portfolio site. Make changes in the existing application and deployment structure; do not create a second project scaffold unless explicitly requested.

## Layout

- `personal-website/` is the npm application root.
- `personal-website/src/app/` contains App Router pages, the root layout, favicon, and global styles.
- `personal-website/src/components/` contains reusable React components.
- `personal-website/public/` contains static images and icons referenced with `/` paths.
- `personal-website/package.json` and `package-lock.json` define npm dependencies and scripts.
- `deploy/` contains the production systemd unit, Nginx configuration, and server update script.
- `README.md` is the repository-level user and operator documentation.
- `.github/workflows/ci.yaml` is the pull request validation workflow.

Run application commands from `personal-website/`; repository root-relative CI and deployment paths assume the application is in that subdirectory.

## Development setup

Use Node.js 25 and npm, matching CI and the documented development environment. Install exactly from the lockfile:

```bash
cd personal-website
npm ci
npm run dev
```

The development server runs on `http://localhost:3000` unless Next.js reports an alternate port.

The app reads `NEXT_PUBLIC_BIRTHDAY` at build/render time. Use `MM/DD/YYYY` format in an application-local environment file, for example:

```dotenv
NEXT_PUBLIC_BIRTHDAY="MM/DD/YYYY"
```

Do not commit `.env*` files or secrets. `.env.production` is required by `deploy/update.sh`; it is generated or provisioned on the server and is intentionally not in the repository.

## Code conventions

- Use TypeScript with strict mode and avoid weakening types or introducing `any`.
- Follow the existing semicolon style, double-quoted JSX/TS strings, 2-space indentation, and named React exports.
- Use the `@/*` TypeScript path alias for application-root imports when it improves clarity.
- Prefer server components unless a component needs browser APIs or React state. Mark those components with `"use client"` and keep client-only state isolated.
- Use the App Router files in `src/app/`; preserve the root layout and metadata in `layout.tsx`.
- Use `next/image` for local raster images and provide meaningful `alt` text.
- Keep shared UI in `src/components/` and page-specific markup in `src/app/`.
- Put site-wide CSS in `src/app/globals.css`; preserve existing CSS custom properties, class names, responsive breakpoints, and reduced-motion behavior unless the requested change explicitly alters the design.
- Keep navigation and interactive markup accessible: preserve labels, `aria-*` attributes, keyboard focus, and semantic heading/section structure.
- Public assets belong in `public/`; do not inline a local asset that is already or should be a static file.
- Update `package.json` and `package-lock.json` together when dependencies change. Use `npm install` for intentional dependency updates and commit both files.

Next.js and ESLint configuration live in `next.config.ts` and `eslint.config.mjs`. The Tailwind CSS package is available and the current global stylesheet uses its import, but the site primarily uses plain CSS custom properties and component classes.

## Testing and validation

There is currently no unit-test or end-to-end test runner in the package. Do not add a framework solely for this small change; add focused tests only if the task requires testable behavior that cannot be verified adequately by existing checks.

Run the smallest relevant validation, and for user-facing or broad changes run the CI-equivalent checks:

```bash
cd personal-website
npm run lint
npm run type-check
npm run build
```

The pull request workflow currently runs `npm run build` and `npm run lint` on Node.js 25 for pull requests targeting `main`. It does not run `npm run type-check` in CI, so run the type checker locally when TypeScript is changed. Do not replace these commands with proxy scripts or silently skip failures.

Use `npm run lint:fix` only for focused formatting/lint cleanup; inspect the diff afterward because it can touch multiple files.

## Documentation conventions

- Keep `README.md` accurate for setup, validation, repository layout, environment variables, and production operations.
- Document new package scripts and required environment variables when they are introduced.
- Use concise Markdown with fenced bash/dotenv blocks and paths relative to the repository or application root that are clear in context.
- Keep deployment instructions synchronized with `deploy/update.sh`, `deploy/personal-website.service`, and `deploy/personal-website.nginx.conf`.
- Do not expose birthdays, credentials, private infrastructure details, or server-only values in examples or documentation.

## Production deployment

The production host uses Nginx on port 80 as a public reverse proxy to `next start` on `127.0.0.1:3000`. The systemd service runs as the `deploy` user, uses `/srv/personal-website/app/personal-website`, and sets a 256 MB Node heap.

Deployment is performed by `deploy/update.sh` on the server. It fast-forward-pulls the checked-out branch, requires `.env.production` with `NEXT_PUBLIC_BIRTHDAY`, runs `npm ci` and `npm run build`, restarts `personal-website`, and verifies that the service is active.

Treat changes to ports, hostnames, service names, environment files, or update steps as cross-file changes: update the systemd unit, Nginx configuration, deployment script, and README together.

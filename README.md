# Personal Website

The source for [carlosarturogonzalezzavaleta.com](https://carlosarturogonzalezzavaleta.com), Carlos Arturo Gonzalez Zavaleta's personal portfolio website.

The site presents an introduction, contact links, experience, education, projects, and a portrait. It also shows a birthday portrait on the configured birthday.

## Repository layout

- `personal-website/` - Next.js application
- `deploy/` - systemd, Nginx, and server update configuration
- `.github/workflows/ci.yaml` - pull request build and lint checks

## Technology

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9

## Local development

Use Node.js 25 and npm.

```bash
cd personal-website
npm ci
```

Create `.env.local` in `personal-website/`:

```dotenv
NEXT_PUBLIC_BIRTHDAY="MM/DD/YYYY"
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

Run the same checks used by CI:

```bash
cd personal-website
npm run lint
npm run build
```

You can also run the TypeScript checker:

```bash
npm run type-check
```

## Production deployment

The production host uses Nginx as a reverse proxy in front of Next.js on `127.0.0.1:3000`. The Nginx and systemd configuration are in `deploy/`.

On the server, `deploy/update.sh`:

1. Pulls the latest code for the currently checked-out branch.
2. Checks for `personal-website/.env.production`.
3. Installs dependencies with `npm ci`.
4. Builds the application.
5. Restarts the `personal-website` systemd service.
6. Verifies that the service is active.

The application must have `.env.production` with a `NEXT_PUBLIC_BIRTHDAY` value before deployment.

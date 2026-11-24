# VEONIX

VEONIX is an independent fashion and shopping website in development. This initial release displays the wordmark and a project status message.

## Local development

Use Node.js 26.13.1 LTS (pinned in `.nvmrc`) and npm. From the project root, run:

```sh
npm install
npm run dev
```

Open the local URL printed by Next.js. The default port is 3000.

## Commands

| Command                | Purpose                                          |
| ---------------------- | ------------------------------------------------ |
| `npm run build`        | Build the production application                 |
| `npm start`            | Serve the production build                       |
| `npm run typecheck`    | Generate route types and check strict TypeScript |
| `npm run lint`         | Run ESLint with Next.js and TypeScript rules     |
| `npm run format:check` | Check formatting with Prettier                   |
| `npm run format`       | Apply Prettier formatting                        |

## Application

The homepage is a React Server Component in `src/app/page.tsx`. The App Router root layout in `src/app/layout.tsx` supplies the brand palette and imports the Tailwind stylesheet. Shared tokens and control styles live in `src/design/`.

Visit `/design-system` during development to review the provisional palette, type scale, layouts and controls. [Design system guide](docs/DESIGN_SYSTEM.md)

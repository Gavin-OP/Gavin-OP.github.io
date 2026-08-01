# Copilot Instructions for `Gavin-OP.github.io`

## Build, lint, and test commands

Run all commands from the repository root.

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

For focused linting on one file:

```bash
npx eslint src/features/home/pages/HomePage.jsx
```

For focused linting on one folder:

```bash
npx eslint src/features/home
```

There is currently **no automated test runner configured in the root `package.json`** (`npm test` does not exist), so there is no full-suite or single-test command. Playwright is installed and `scripts/capture_playwright.js` is an ad hoc screenshot comparison script, not a test suite.

Treat the scripts in `package.json` as authoritative; the README's `npm start` command is stale.

## High-level architecture

- This is a **React 19 + Vite** single-page app.
- Entry flow is:
  - `src/main.jsx` mounts `App`
  - `src/App.jsx` composes `AppProviders` and the app router
  - `src/app/providers/AppProviders.jsx` installs the Redux provider
  - `src/app/router/AppRouter.jsx` sets up `BrowserRouter` + route rendering
  - `src/app/router/routesConfig.jsx` defines lazy route config
- Routes are lazy-loaded from the centralized route config:
  - `/` → `features/home/pages/HomePage.jsx`
  - `/20240109` → `features/fun/pages/BirthdayPage.jsx`
  - `*` redirects back to `/`
- `HomePage` composes the site through `MainLayout` (`src/component/layout/MainLayout.jsx`) and feature components:
  - `Background` (`id="profile"`)
  - `Internship` (`id="internship"`)
  - `Project` (`id="project"`)
  - `Footer` (`id="contact"`)
- Navigation (`src/component/layout/Navbar.jsx`) is **anchor-based smooth scrolling** to those section IDs, not route navigation.
- Global state is managed by Redux Toolkit in `src/app/store`. The entire `home` slice is loaded from and saved to the `gavin-op-home-state` localStorage key; adding persistent homepage state requires updating the slice and preserving that state shape.
- GitHub Pages SPA deep links use a paired redirect:
  - `public/404.html` rewrites an unknown path to `/?/<path>`.
  - The inline script in `index.html` restores that encoded path before React Router starts.
  Keep both halves in sync when changing routing or deployment paths.
- Notes/content architecture:
  - Notes, documents, images, and historical static pages live under `public/` and are copied unchanged into Vite's `dist/` output.
  - `src/features/notes/components/MarkdownRenderer.js` and the commented notes routes in `src/router/Routes.jsx` are currently disconnected legacy work, not part of the active route tree. Its markdown packages are not declared in the current `package.json`.

## Key codebase conventions

- Keep route declarations centralized in `src/app/router/routesConfig.jsx` using the existing `routesConfig` array + `lazy(...)` import pattern.
- `src/router/Routes.jsx` is a legacy, unused route configuration; do not add active routes there.
- Use **feature-first structure** under `src/features/<feature>`; keep page/component SCSS beside its JSX file and shared layout in `src/component/layout`.
- Use BrowserRouter-friendly links and preserve anchor section navigation (`#profile`, `#internship`, etc.) for in-page navigation.
- Section IDs (`profile`, `internship`, `project`, `contact`) are contract points between `Navbar` and page sections; preserve these IDs when editing layout/sections.
- Use per-component SCSS files and BEM naming (`block__element--modifier`) as the styling convention.
- Reference files in `public/` with root-relative URLs such as `/image/...` and `/file/...`; do not import them through the React source tree or edit generated copies under `dist/`.
- Lint excludes historical and sandbox folders (`.history`, `test`, `design`) in eslint global ignores.
- Deployment workflow lives in `.github/workflows/build-and-deploy.yaml` and triggers on `master` pushes; keep build output directory assumptions consistent with Vite output when touching deployment settings.

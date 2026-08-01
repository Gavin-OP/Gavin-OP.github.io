# Copilot Instructions Design

## Goal

Improve the existing `.github/copilot-instructions.md` without replacing its useful structure. The result should give future Copilot sessions repository-specific commands, architectural context, and cross-file contracts while remaining concise.

## Content Structure

Retain the existing three sections:

1. Build, lint, and test commands
2. High-level architecture
3. Key codebase conventions

The command section will use the root `package.json` as the source of truth. It will document install, development, build, preview, full lint, and focused lint commands. It will explicitly state that the root app has no automated test script or single-test command.

The architecture section will describe the React 19 and Vite entry flow through `main.jsx`, `App`, providers, router, and lazy route configuration. It will include both the homepage route and the `/20240109` gallery route, explain `MainLayout` composition and anchor navigation, summarize Redux persistence, and identify the static notes and markdown-rendering boundary.

The conventions section will preserve the route configuration, feature-first organization, section-ID contracts, per-component SCSS and BEM naming, lint exclusions, and GitHub Pages deployment assumptions. It will remove the unsupported claim that `test/my-app` is an active separate scaffold.

## Accuracy Rules

- Prefer executable scripts in the root `package.json` over stale README commands.
- Describe only routes present in `src/app/router/routesConfig.jsx`.
- Treat `profile`, `internship`, `project`, and `contact` as coupled contracts between navigation and rendered sections.
- Do not infer a test workflow from installed dependencies or ignored directories.
- Keep deployment guidance consistent with `.github/workflows/build-and-deploy.yaml`, including the `master` trigger and `dist` output.

## Validation

Review the final file against the package scripts, route configuration, layout components, Redux store, ESLint config, and deployment workflow. Because this is repository documentation only, no build or lint run is required.

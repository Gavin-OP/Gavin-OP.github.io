# Architecture Notes

## Stack

- React 19 + Vite
- React Router (route config in `src/app/router/routesConfig.jsx`)
- Redux Toolkit store in `src/app/store`
- SCSS with BEM-style naming

## App entry flow

1. `src/main.jsx` mounts `App`
2. `src/App.jsx` composes providers and router
3. `src/app/providers/AppProviders.jsx` installs Redux provider
4. `src/app/router/AppRouter.jsx` renders `BrowserRouter` and route tree

## Route map

- `/` -> `src/features/home/pages/HomePage.jsx`
- `/20240109` -> `src/features/fun/pages/BirthdayPage.jsx`
- `*` -> redirect to `/`

## Content and assets

- Static content lives under `public/` and is copied directly to `dist/`.
- Use root-relative paths when referencing public files (for example: `/image/...`, `/file/...`).

## Deployment note

- GitHub Pages deployment is handled by `.github/workflows/build-and-deploy.yaml`.

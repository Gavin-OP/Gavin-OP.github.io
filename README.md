# Gavin-OP.github.io

Personal website built with **React 19 + Vite** and deployed to **GitHub Pages**.

![Website Homepage](https://gavin-op.github.io/image/sample_homepage.png)

## Quick start

```bash
git clone https://github.com/Gavin-OP/Gavin-OP.github.io.git
cd Gavin-OP.github.io
npm install
npm run dev
```

## Available scripts

- `npm run dev` - Start local development server
- `npm run build` - Build production assets
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Tech stack

- React 19
- Vite 7
- React Router
- Redux Toolkit
- SCSS (BEM-style naming)

## Deployment

Pushes to `master` trigger `.github/workflows/build-and-deploy.yaml`, which builds the site and deploys it to GitHub Pages.

## Documentation

- [Copilot Instructions](.github/copilot-instructions.md)
- [Architecture Notes](docs/architecture.md)
- [Contributing Guide](docs/contributing.md)

## License

[MIT License](./LICENSE)

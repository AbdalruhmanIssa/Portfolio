# Abdulrahman Issa · Portfolio

Terminal-themed developer portfolio built with React, Vite and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Edit content

Everything on the page (profile, projects, skills, experience, links) lives in [`src/data.js`](src/data.js).
Screenshots are in `public/images/`, and the downloadable CV is `public/Abdulrahman_Issa_CV.pdf`.

## Deploy to GitHub Pages

1. Create a public repo named **`AbdalruhmanIssa.github.io`** and push this folder to its `main` branch.
2. In the repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it to https://abdalruhmanissa.github.io.

Using a different repo name? Set `base: '/<repo-name>/'` in [`vite.config.js`](vite.config.js).

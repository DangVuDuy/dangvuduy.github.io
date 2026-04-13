# Deploy to GitHub Pages

This project is configured for static export and GitHub Pages.

Relevant files:
- [next.config.ts](/Users/duydang/Desktop/MyProject_Dev/AI/workspace/cloudlab-apps/next.config.ts)
- [.github/workflows/deploy-pages.yml](/Users/duydang/Desktop/MyProject_Dev/AI/workspace/cloudlab-apps/.github/workflows/deploy-pages.yml)
- [public/CNAME](/Users/duydang/Desktop/MyProject_Dev/AI/workspace/cloudlab-apps/public/CNAME)
- [public/.nojekyll](/Users/duydang/Desktop/MyProject_Dev/AI/workspace/cloudlab-apps/public/.nojekyll)

## Current setup

- Static export is enabled with `output: "export"`.
- Production build outputs to `out/`.
- GitHub Pages deploy is handled by GitHub Actions.
- Custom domain is set to `cloudlab.one`.

## Recommended deploy target

Use the repository:

- `DangVuDuy/dangvuduy.github.io`

That repo is already suitable for serving `https://cloudlab.one/`.

## First-time replacement of the old site

1. Clone the GitHub Pages repository:

```bash
git clone git@github.com:DangVuDuy/dangvuduy.github.io.git
cd dangvuduy.github.io
```

2. Create a backup branch for the old site:

```bash
git checkout -b backup-old-site
git push -u origin backup-old-site
git checkout main
```

3. Replace the old site contents with this project:

- Copy all files from:
  - `/Users/duydang/Desktop/MyProject_Dev/AI/workspace/cloudlab-apps`
- Into the cloned `dangvuduy.github.io` repository

Important:
- Keep `.github/workflows/deploy-pages.yml`
- Keep `public/CNAME`
- Keep `public/.nojekyll`

4. Commit and push:

```bash
git add .
git commit -m "Replace legacy site with CloudLab Next.js site"
git push origin main
```

5. In GitHub repository settings:

- Open `Settings -> Pages`
- Set `Source` to `GitHub Actions`
- Confirm custom domain is `cloudlab.one`

After that, each push to `main` will rebuild and redeploy the site.

## Normal deploy workflow

From the Pages repository:

```bash
npm ci
npm run lint
npm run build
git add .
git commit -m "Update site"
git push origin main
```

GitHub Actions will:
- install dependencies
- run `next build`
- upload `out/`
- deploy to GitHub Pages

## Local verification

Run:

```bash
npm ci
npm run lint
npm run build
```

Expected output:
- static pages generated into `out/`
- `out/CNAME` exists
- `out/.nojekyll` exists

## Notes

- This repository currently has no Git remote configured locally, so do not assume `git push` from this working directory will update GitHub.
- The safest workflow is to clone `dangvuduy.github.io`, replace its contents with this project, then push from that clone.
- If Google Fonts fail during local build because of network restrictions, GitHub Actions should still be able to build in GitHub's environment.

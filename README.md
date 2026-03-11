# Daniel Portfolio

A portfolio site for an entry-level computer science student, built with Next.js and deployed on Netlify.  
The site includes case studies, technical writing, and content-managed sections powered by markdown/json data.

## Tech Stack

- Next.js 15
- React 19
- Tailwind CSS
- Netlify (build + hosting)
- Netlify Visual Editor / Stackbit config
- Optional Algolia search integration

## Project Structure

- `content/`: page content and site data (`.md` + `.json`)
- `src/components/`: reusable UI components (sections, blocks, atoms)
- `src/pages/`: Next.js routes
- `public/`: static assets (images, resume, icons)
- `sources/local/`: content model and presets for Visual Editor
- `netlify.toml`: Netlify build configuration

## Local Development

Prerequisite: Node.js 18+

```bash
npm install
npm run dev
```

The site runs locally on `http://localhost:3000`.

## Build and Production Run

```bash
npm run build
npm run start
```

## Netlify Deployment

This repository is configured for Netlify with:

- Build command: `npm run build`
- Publish directory: `.next`

These values are defined in [`netlify.toml`](./netlify.toml).

## Content Editing

Most content is managed in `content/`:

- Home page: `content/pages/index.md`
- Blog posts: `content/pages/blog/*.md`
- Global site config: `content/data/site.json`
- Header and footer: `content/data/header.json`, `content/data/footer.json`

The project also includes `stackbit.config.ts` and local models under `sources/local/models` to support Visual Editor workflows.

## Optional: Algolia Search Setup

If search is enabled, configure these environment variables:

- `NEXT_PUBLIC_ALGOLIA_APP_ID`
- `NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY`
- `NEXT_PUBLIC_ALGOLIA_INDEX_NAME`

## License

See [`LICENSE`](./LICENSE).

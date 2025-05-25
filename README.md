# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Dev Tools

- [x] Lefthook (https://lefthook.dev/)
- [x] Prettier (https://prettier.io/)
- [x] ESLint (https://eslint.org/)
- [x] Vitest (https://vitest.dev/)
- [x] Vite (https://vitejs.dev/)
- [x] SvelteKit (https://kit.svelte.dev/)
- [x] TailwindCSS (https://tailwindcss.com/)
- [x] Paraglide (https://inlang.com/docs/guides/sveltekit)

## CMS Auth

This project use its own custom OAuth proxy to handle authentication with the CMS.
The project is located [here](https://github.com/nicholaslck/decap-proxy) and hosted on Cloudflare Workers.

## Progress

- [x] Initial setup
- [x] Add CMS auth
- [x] Add CMS content
- [x] Blog list page
- [x] Blog detail page
- [x] Projects list page
- [x] Projects detail page
- [ ] Home page
- [ ] About page
- [ ] Add SEO
- [ ] Add sitemap
- [ ] Add robots.txt
- [ ] Add analytics
- [ ] Add social media links
- [ ] Add favicon
- [ ] Add PWA support
- [x] Add dark mode support
- [ ] Add RSS feed
- [ ] Add comments
- [ ] Add search functionality
- [ ] Add pagination
- [ ] Add tags and categories
- [ ] Add newsletter signup
- [ ] Add social media sharing
- [ ] Add author page
- [ ] Add related posts
- [ ] Add custom 404 page
- [ ] Add custom 500 page
- [ ] Add custom error handling

import { defineConfig } from 'astro/config';

// Static site: `npm run build` writes plain HTML/CSS/images to ./dist,
// which is exactly what Cloudflare Pages serves.
export default defineConfig({
  site: 'https://tonycloses.com',
  output: 'static',
});

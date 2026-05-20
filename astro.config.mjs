// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages preview deploys set GITHUB_PAGES=true so the site builds under
// the project subpath; production (montclairchef.com) builds at the root.
const isPagesPreview = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: isPagesPreview ? 'https://info-ossmc.github.io' : 'https://www.montclairchef.com',
  base: isPagesPreview ? '/new_site' : undefined,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

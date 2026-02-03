import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://delegateml.github.io',
  base: '/proposal-desk',
  integrations: [tailwind()],
  outDir: '../../dist/proposal-desk',
  build: {
    assets: '_assets'
  }
});

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://delegateml.github.io',
  base: '/data-reconciliation',
  integrations: [tailwind()],
  outDir: '../../dist/data-reconciliation',
  build: {
    assets: '_assets'
  }
});

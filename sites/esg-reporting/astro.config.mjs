import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://delegateml.github.io',
  base: '/esg-reporting',
  integrations: [tailwind()],
  outDir: '../../dist/esg-reporting',
  build: {
    assets: '_assets'
  }
});

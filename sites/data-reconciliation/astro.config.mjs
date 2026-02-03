import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/data-reconciliation/',
  output: 'static',
  outDir: '../../dist/data-reconciliation',
  server: {
    port: 4321
  },
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@shared': path.resolve(__dirname, '../../packages/shared/src'),
      },
    },
  },
});

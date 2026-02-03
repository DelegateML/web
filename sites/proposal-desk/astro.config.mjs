import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/proposal-desk/',
  output: 'static',
  outDir: '../../dist/proposal-desk',
  server: {
    port: 4323
  },
  integrations: [
    tailwind({
      configFile: './tailwind.config.mjs'
    })
  ],
  vite: {
    resolve: {
      alias: {
        '@shared': path.resolve(__dirname, '../../packages/shared/src'),
      },
    },
  },
});

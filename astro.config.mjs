// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
	site: 'https://alce65.github.io',
  base: '/demo-astro-indra',
  outDir: './docs',
	integrations: [mdx(), sitemap()],
});

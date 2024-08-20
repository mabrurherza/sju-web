import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sandyjaya.co.id/',
  integrations: [tailwind({
    applyBaseStyles: false
  }), react(), mdx(), sitemap()],
});

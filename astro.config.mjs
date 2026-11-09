import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import emdash from "emdash/astro";
import { d1, r2 } from "@emdash-cms/cloudflare";

// https://astro.build/config
export default defineConfig({
	// site: "https://www.sandyjaya.co.id/",
	output: "server",
	adapter: cloudflare(),
	integrations: [
		react(),
		mdx(),
		sitemap(),
		emdash({
			database: d1({ binding: "DB", session: "auto", coalesce: true }),
			storage: r2({ binding: "MEDIA" }),
		}),
	],
	devToolbar: { enabled: false },
});

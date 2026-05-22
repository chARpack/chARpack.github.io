import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import { getAvailableVersions } from './src/lib/getversions.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex(mdsvexConfig),
  ],

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null,
    }),
    prerender: {
      crawl: true,
      entries: [
        '*', // include everything discoverable via links
        // Prerender all manual versions dynamically
        ...(() => {
          try {
            return getAvailableVersions().map((v) => `/manual/${v}`);
          } catch (e) {
            // During config load, getAvailableVersions might fail if files aren't ready
            // In that case, just return an empty array and let crawl handle it
            return [];
          }
        })(),
      ],
    },
  },
};

export default config;

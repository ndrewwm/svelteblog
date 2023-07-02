import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-auto";
import relativeImages from "mdsvex-relative-images";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".svx", ".md"],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
  },

  preprocess: [
    mdsvex({
      extensions: [".md", ".svx"],
      remarkPlugins: [relativeImages],
    })
  ],
};

export default config;

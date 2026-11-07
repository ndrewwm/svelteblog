import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from "mdsvex";
import relativeImages from "mdsvex-relative-images";
import remarkFootnotes from "remark-footnotes";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex-svelte";
import rehypeTyplet from 'rehype-typlet';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { selectAll } from "hast-util-select";
import { fromString as hastFromString } from "hast-util-from-string";
import { toHtml as hastToHtml } from 'hast-util-to-html';

function rehypeMath() {
	let katex = rehypeKatex();
	let typst = rehypeTyplet();

	// You can inspect `file.data` during the build
	// console.dir() will display what's exposed under file.data
	return (tree, file) => {
		if (file.data.fm?.math === "typst") {
			typst(tree, file);
			// rehypeTyplet() does not appear to return any elements with a .typlet-inline class
			for (let node of selectAll(".typlet-display,.typlet", tree)) {
				// console.dir(node, { depth: null });
				hastFromString(node, `{@html ${JSON.stringify(hastToHtml(node))}}`);
			}
		} else {
			katex(tree, file);
		}
	};
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".svx", ".md"],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
    mdsvex({
      extensions: [".md", ".svx"],
      remarkPlugins: [relativeImages, [remarkFootnotes, {inlineNotes: true}], remarkMath],
      rehypePlugins: [rehypeMath],
    })
  ],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;

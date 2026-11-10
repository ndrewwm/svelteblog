import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
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

export default defineConfig({
	plugins: [
		sveltekit({
			extensions: [".svelte", ".svx", ".md"],
			preprocess: [
				vitePreprocess(),
				mdsvex({
					extensions: [".md", ".svx"],
					remarkPlugins: [relativeImages, [remarkFootnotes, {inlineNotes: true}], remarkMath],
					rehypePlugins: [rehypeMath],
				})
			]
		})
	]
});

import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from "mdsvex";
import { toHtml } from "hast-util-to-html";
import relativeImages from "mdsvex-relative-images";
import remarkFootnotes from "remark-footnotes";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex-svelte";
import rehypeTyplet from "rehype-typlet";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

function wrapTypletNodes(tree) {
  function visit(parent) {
    for (let index = 0; index < parent.children.length; index += 1) {
      const node = parent.children[index];
      const classes = node.type === "element" ? node.properties.className ?? [] : [];

      if (classes.some((className) => className.startsWith("typlet"))) {
        parent.children[index] = {
          type: "text",
          value: `{@html ${JSON.stringify(toHtml(node))}}`,
        };
      } else if (node.children) {
        visit(node);
      }
    }
  }

  visit(tree);
}

function rehypeMath() {
  const renderWithKatex = rehypeKatex();
  const renderWithTyplet = rehypeTyplet();

  return (tree, file) => {
    if (file.data.fm?.math === "typst") {
      renderWithTyplet(tree, file);
      wrapTypletNodes(tree);
    } else {
      renderWithKatex(tree, file);
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
		adapter: adapter({ runtime: "nodejs22.x" })
	}
};

export default config;

import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from "mdsvex";
import { renderToString as renderTypst } from 'typlet';
import { renderToString as renderKatex } from 'katex';
import fs from 'fs';
import matter from 'gray-matter';

function renderMath(markup: string, display: boolean, filename: string) {
	const article = fs.readFileSync(filename, 'utf-8');
	const { data } = matter(article);
	if (data?.math === "typst") {
		return renderTypst(markup, { displayMode: display });
	}
	return renderKatex(markup, { displayMode: display });
}

export default defineConfig({
	plugins: [
		mdsvex({ 
			extensions: [".md", ".svx"],
			math: (latex, { display, meta, filename }) => renderMath(latex, display, filename),
		}),
		sveltekit({ adapter: adapter() })
	]
});

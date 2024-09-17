import { error, redirect } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`$lib/posts/${params.slug}/+page.md`);

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		if (params.slug.includes("primer-for-linear-regression")) {
			let url = "https://ndrewwm.com/projects/linear-regression-primer/"
			if (params.slug.includes("1")) {
				throw redirect(308, url + "1");
			} else if (params.slug.includes("2")) {
				throw redirect(308, url + "2");
			} else {
				throw redirect(308, url + "3");
			}
		}
		error(404, `Could not find ${params.slug}`);
	}
}

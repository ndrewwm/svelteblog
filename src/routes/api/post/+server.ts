import { fetchMarkdownPosts } from '$lib/util/fetchMarkdownPosts';
import { json } from '@sveltejs/kit';

export async function GET() {
  let allPosts = await fetchMarkdownPosts();
  allPosts.sort((a, b) => {
    return Date.parse(a.meta.date) - Date.parse(b.meta.date);
  });

  return json(allPosts);
}

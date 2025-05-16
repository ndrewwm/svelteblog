import { fetchBookReviews } from '$lib/util/fetchBookReviews';
import { json } from '@sveltejs/kit';

export async function GET() {
  let allPosts = await fetchBookReviews();
  allPosts.sort((a, b) => {
    return Date.parse(a.meta.date) - Date.parse(b.meta.date);
  });

  return json(allPosts);
}

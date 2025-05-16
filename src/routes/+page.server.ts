import dayjs from 'dayjs';

export async function load({ fetch }) {
  const response = await fetch(`/api/post`);
  const posts: Object[] = await response.json();
  posts.sort((a, b) => dayjs(b.meta.date) - dayjs(a.meta.date));

  const bookReviewsResp = await fetch(`/api/reading`);
  const bookReviws: Object[] = await bookReviewsResp.json();
  return { 
    posts: posts.filter((post) => !post.meta.draft).slice(0, 5),
    reviews: bookReviws.slice(0, 5),
  };
}

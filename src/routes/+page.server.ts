import dayjs from 'dayjs';

export async function load({ fetch }) {
  const response = await fetch(`/api/post`);
  const posts: Object[] = await response.json();
  posts.sort((a, b) => dayjs(b.meta.date) - dayjs(a.meta.date));

  const bookReviewsResp = await fetch(`/api/books/finished`);
  const bookReviews: Object[] = await bookReviewsResp.json();
  return { 
    posts: posts.filter((book) => !book.meta.draft).slice(0, 5),
    reviews: bookReviews.toReversed().slice(0, 5),
  };
}

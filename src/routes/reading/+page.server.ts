export async function load({ fetch }) {
  const readingResp = await fetch(`/api/books/reading`);
  const reading: Object[] = await readingResp.json();
  reading.reverse();

  const reviewsResp = await fetch(`/api/books/finished`);
  const reviews: Object[] = await reviewsResp.json();
  reviews.reverse();
  return { reading, reviews };
}

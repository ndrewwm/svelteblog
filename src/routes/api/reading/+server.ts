import { fetchBookReviews } from '$lib/util/fetchBookReviews';
import dayjs from 'dayjs';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
  let allReviews = await fetchBookReviews();
  let year = url.searchParams.get("year");
  let finished = url.searchParams.get("finished");

  allReviews = allReviews.map((review) => {
    review.meta.date = review.meta.finished ? review.meta.finished : review.meta.started;
    review.meta.date = dayjs(review.meta.date);
    return review;
  });

  allReviews.sort((a, b) => {
    return Date.parse(a.meta.date) - Date.parse(b.meta.date);
  });

  if (year !== null) {
    allReviews = allReviews.filter((post) => post.meta.date.year() === Number(year));
  }

  // User can send either 0 or 1-- if 1, return finished books, otherwise return unfinished
  if (finished !== null) {
    allReviews = allReviews.filter((post) => {
      finished === "1" ? post.meta.finished !== null : post.meta.finished === null
    });
  }

  return json(allReviews);
}

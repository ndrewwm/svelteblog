import { fetchBookReviews } from '$lib/util/fetchBookReviews';
import dayjs from 'dayjs';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
  let books = await fetchBookReviews();
  let year = url.searchParams.get("year");
  let limit = url.searchParams.get("limit");
  let ascending = url.searchParams.get("ascending");

  books = books
    .filter((book) => book.meta.finished !== null)
    .map((book) => {
      book.meta.date = dayjs(book.meta.finished);
      return book;
    })
    .toSorted((a, b) => Date.parse(a.meta.date) - Date.parse(b.meta.date))
    .reverse();

  if (year !== null) {
    books = books.filter((book) => book.meta.year === Number(year));
  }

  if (ascending !== null && ascending === "true") {
    books = books.reverse();
  }

  if (limit !== null) {
    let lim = Number(limit);

    if (lim < 0 || isNaN(lim)) {
      return json(
        {message: "Limit must be an integer >= 0.", limit},
        {status: 400},
      );
    }
    books = books.slice(0, lim);
  }

  return json(books);
}

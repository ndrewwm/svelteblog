import { fetchBookReviews } from '$lib/util/fetchBookReviews';
import dayjs from 'dayjs';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
  let books = await fetchBookReviews();
  let year = url.searchParams.get("year");

  books = books
    .filter((book) => book.meta.finished === null && book.meta.started !== null)
    .map((book) => {
      book.meta.date = dayjs(book.meta.started);
      return book;
    })
    .toSorted((a, b) => a.meta.pct - b.meta.pct);

  if (year !== null) {
    books = books.filter((book) => book.meta.year() === Number(year));
  }

  return json(books);
}

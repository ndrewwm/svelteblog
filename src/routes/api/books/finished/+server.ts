import { fetchBookReviews } from '$lib/util/fetchBookReviews';
import dayjs from 'dayjs';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
  let books = await fetchBookReviews();
  let year = url.searchParams.get("year");

  books = books
    .filter((book) => book.meta.finished !== null)
    .map((book) => {
      book.meta.date = dayjs(book.meta.finished);
      return book;
    })
    .toSorted((a, b) => Date.parse(a.meta.date) - Date.parse(b.meta.date));

  if (year !== null) {
    books = books.filter((book) => book.meta.year === Number(year));
  }

  return json(books);
}

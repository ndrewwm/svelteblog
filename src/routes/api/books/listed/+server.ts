import { fetchBookReviews } from '$lib/util/fetchBookReviews';
import dayjs from 'dayjs';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
  let books = await fetchBookReviews();

  books = books
    .filter((book) => book.meta.finished === null && book.meta.started === null)
    .map((book) => {
      book.meta.date = dayjs(book.meta.added);
      return book;
    })
    .toSorted((a, b) => Date.parse(a.meta.date) - Date.parse(b.meta.date));

  return json(books);
}

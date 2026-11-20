import dayjs from 'dayjs';

const bookImports = import.meta.glob('#lib/reading/**/*.md', {
	query: '?metadata',
	import: 'metadata',
	eager: true
});

export async function GET({ url }) {
  let year = url.searchParams.get("year");
  let books = Object.entries(bookImports)
    .map(([path, metadata]) => ({
			slug: path.split('/')[1],
			...metadata
		}));

  books = books
    .filter((book) => book.finished === null && book.started !== null)
    .map((book) => {
      book.date = dayjs(book.started);
      return book;
    })
    .toSorted((a, b) => a.pct - b.pct);

  if (year !== null) {
    books = books.filter((book) => book.year === Number(year));
  }

  return Response.json(books);
}

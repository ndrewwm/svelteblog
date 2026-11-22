import dayjs from 'dayjs';

const bookImports = import.meta.glob('#lib/reading/**/*.md', {
	query: '?metadata',
	import: 'metadata',
	eager: true
});

export async function GET({ url }) {
  let year = url.searchParams.get("year");
  let limit = url.searchParams.get("limit");
  let ascending = url.searchParams.get("ascending");

  let books = Object.entries(bookImports)
    .map(([path, metadata]) => ({
			slug: path.split('/')[1],
			...metadata
		}));

  books = books
    .filter((book) => book.finished !== null)
    .map((book) => {
      book.date = dayjs(book.finished);
      return book;
    })
    .toSorted((a, b) => Date.parse(a.date) - Date.parse(b.date))
    .reverse();

  if (year !== null) {
    books = books.filter((book) => book.year === Number(year));
  }

  if (ascending !== null && ascending === "true") {
    books = books.reverse();
  }

  if (limit !== null) {
    let lim = Number(limit);

    if (lim < 0 || isNaN(lim)) {
      return Response.json(
        {message: "Limit must be an integer >= 0.", limit},
        {status: 400},
      );
    }
    books = books.slice(0, lim);
  }

  return Response.json(books);
}

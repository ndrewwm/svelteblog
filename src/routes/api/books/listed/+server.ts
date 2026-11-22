import dayjs from 'dayjs';

const bookImports = import.meta.glob('#lib/reading/**/*.md', {
	query: '?metadata',
	import: 'metadata',
	eager: true
});

export async function GET({ url }) {
  let books = Object.entries(bookImports)
    .map(([path, metadata]) => ({
			slug: path.split('/')[1],
			...metadata
		}));

  books = books
    .filter((book) => book.finished === null && book.started === null)
    .map((book) => {
      book.date = dayjs(book.added);
      return book;
    })
    .toSorted((a, b) => Date.parse(a.date) - Date.parse(b.date));

  return Response.json(books);
}

export async function load({ fetch }) {
  const readResponse = await fetch(`/api/books/finished`);
  const booksJson = await readResponse.json();
  const books = booksJson.map(book => {
    let out = book.meta;
    out.slug = book.path;
    return out;
  });
  return { books: JSON.stringify(books) };
}

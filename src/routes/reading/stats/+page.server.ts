export async function load({ fetch }) {
  const readResponse = await fetch(`/api/books/finished`);
  const booksJson = await readResponse.json();
  return { books: JSON.stringify(booksJson) };
}

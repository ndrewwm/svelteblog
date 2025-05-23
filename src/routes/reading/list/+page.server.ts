export async function load({ fetch }) {
  const readingListResp = await fetch(`/api/books/listed`);
  const readingList: Object[] = await readingListResp.json();
  readingList.reverse();

  return { books: readingList };
}

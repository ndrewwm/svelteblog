import { redirect } from '@sveltejs/kit';

export async function load({ fetch }) {
  const readingListResp = await fetch(`/api/books/listed`);
  const readingList: Object[] = await readingListResp.json();

  // Get a random book from the array
  const index = Math.floor(Math.random() * readingList.length);
  const book = readingList[index];
  const url = book.path.replace("/src/lib/reading/", "").replace("/list", "").replace(".md", "");
  throw redirect(303, `/reading/${url}`);
}

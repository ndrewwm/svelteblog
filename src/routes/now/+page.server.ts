export async function load({ fetch }) {
  const postResponse = await fetch(`/api/post`);
  const postJson = await postResponse.json();

  const readingResponse = await fetch(`/api/books/reading`);
  const readingJson = await readingResponse.json();

  const finishedResponse = await fetch(`/api/books/finished?limit=3`);
  const finishedJson = await finishedResponse.json();

  return {
    post: postJson.at(-1),
    reading: readingJson,
    finished: finishedJson,
  };
}

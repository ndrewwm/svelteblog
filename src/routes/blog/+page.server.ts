export async function load({ fetch }) {
  const response = await fetch(`/api/post`);
  const posts = await response.json();
  return { posts };
}

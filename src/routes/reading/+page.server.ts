export async function load({ fetch }) {
  const response = await fetch(`/api/reading`);
  const posts: Object[] = await response.json();
  posts.reverse();
  return { posts };
}

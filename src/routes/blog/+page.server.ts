import dayjs from 'dayjs';

export async function load({ fetch }) {
  const response = await fetch(`/api/post`);
  const posts: Object[] = await response.json();
  posts.sort((a, b) => dayjs(b.meta.date) - dayjs(a.meta.date));
  return { posts };
}

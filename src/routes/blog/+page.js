export const load = async ({ fetch }) => {
  const response = await fetch(`/api/post`)
  const posts = await response.json()

  return {
    posts
  }
}

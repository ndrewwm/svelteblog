export async function fetchBookReviews() {
  const allReviews = import.meta.glob('$lib/reading/**/*.md');
  const iterableReviews = Object.entries(allReviews);
  
  const reviews = await Promise.all(
    iterableReviews.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.replace("/src/lib/posts/", "/blog/post/").replace("/+page.md", "");

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  return reviews;
}

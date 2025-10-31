export async function fetchMarkdownPosts() {
  const allPostFiles = import.meta.glob('$lib/posts/**/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);
  
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path
        .replace("/src/lib/posts/", "/blog/post/")
        .replace("/+page.md", "")
        .replace(".md", "");

      return { meta: metadata, path: postPath };
    })
  );

  return allPosts;
}

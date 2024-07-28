export async function fetchMarkdownPosts() {
  const allPostFiles = import.meta.glob('/src/routes/blog/post/**/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)
  
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      // const postPath = path.slice(11, -3)
      const postPath = path.slice(11, -9)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  return allPosts
}

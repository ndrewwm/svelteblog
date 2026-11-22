const posts = import.meta.glob('#lib/posts/**/*.md', {
	query: '?metadata',
	import: 'metadata',
	eager: true
});

export async function GET() {
  let results = Object.entries(posts)
    .map(([path, metadata]) => ({
			slug: path.split('/')[1],
			...metadata
		}))
    .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))

  return Response.json(results);
}

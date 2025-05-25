import { ContentDirectory, listContents, readContents } from '$lib/server/data';

export const load = async ({ parent }) => {
	const { frontmatter } = await readContents('blog-list', ContentDirectory.Pages);

	const slugs = await listContents(ContentDirectory.Blogs);
	const items = await Promise.all(slugs.map((slug) => readContents(slug, ContentDirectory.Blogs)));

	items.sort(
		(a, b) =>
			new Date(b.frontmatter.created_at as unknown as string).getTime() -
			new Date(a.frontmatter.created_at as unknown as string).getTime()
	);

	const { config } = await parent();

	return {
		config: { ...config, blogList: frontmatter },
		items
	};
};

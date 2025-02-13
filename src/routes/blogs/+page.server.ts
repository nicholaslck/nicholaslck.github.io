import { ContentDirectory, listContents, readContents } from '$lib/server/data';

export const load = async ({ parent }) => {
	const { frontmatter } = await readContents('blog-list', ContentDirectory.Pages);

	const slugs = await listContents(ContentDirectory.Blogs);
	const items = await Promise.all(slugs.map((slug) => readContents(slug, ContentDirectory.Blogs)));

	const { config } = await parent();

	return {
		config: { ...config, blogList: frontmatter },
		items
	};
};

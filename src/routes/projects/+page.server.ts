import { ContentDirectory, listContents, readContents } from '$lib/server/data';

export const load = async ({ parent }) => {
	const { frontmatter } = await readContents('project-list', ContentDirectory.Pages);

	const slugs = await listContents(ContentDirectory.Projects);
	const items = await Promise.all(
		slugs.map((slug) => readContents(slug, ContentDirectory.Projects))
	);

	const { config } = await parent();
	return {
		config: { ...config, projectList: frontmatter },
		items
	};
};

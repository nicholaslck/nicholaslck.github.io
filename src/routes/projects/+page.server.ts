import { ContentDirectory, listContents, readContents } from '$lib/server/data';

export const load = async () => {
	const slugs = await listContents(ContentDirectory.Projects);
	const list = await Promise.all(
		slugs.map((slug) => readContents(slug, ContentDirectory.Projects))
	);
	return {
		list
	};
};

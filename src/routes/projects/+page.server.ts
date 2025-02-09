import { ContentDirectory, listContents, readContents } from '$lib/server/data';

export const load = () => {
	const slugs = listContents(ContentDirectory.Projects);
	const list = slugs.map((slug) => readContents(slug, ContentDirectory.Projects));
	return {
		list
	};
};

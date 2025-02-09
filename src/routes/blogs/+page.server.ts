import { ContentDirectory, listContents, readContents } from '$lib/server/data';

export const load = () => {
	const slugs = listContents(ContentDirectory.Blogs);
	const list = slugs.map((slug) => readContents(slug, ContentDirectory.Blogs));
	return {
		list
	};
};

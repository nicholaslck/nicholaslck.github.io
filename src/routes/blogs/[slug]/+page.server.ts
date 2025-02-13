import { readContents, ContentDirectory, listContents } from '$lib/server/data.js';

export const load = async ({ params }) => {
	const markdownData = await readContents(params.slug, ContentDirectory.Blogs);
	return markdownData;
};

export const entries = async () => {
	const slugs = await listContents(ContentDirectory.Blogs);
	return slugs.map((slug) => ({ slug }));
};

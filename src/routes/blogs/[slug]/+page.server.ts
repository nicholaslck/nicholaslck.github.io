import { readContents, ContentDirectory, listContents } from '$lib/server/data.js';

export const load = async ({ params }) => {
	const item = await readContents(params.slug, ContentDirectory.Blogs);
	return { item };
};

export const entries = async () => {
	const slugs = await listContents(ContentDirectory.Blogs);
	return slugs.map((slug) => ({ slug }));
};

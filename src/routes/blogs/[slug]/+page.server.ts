import type { PageServerLoad, EntryGenerator } from './$types.js';
import { getBlog, getBlogs } from '$lib/server/data';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const blog = await getBlog(slug);
	return {
		blog: blog
	};
};

export const entries: EntryGenerator = async () => {
	const blogs = await getBlogs();
	return blogs.filter((blog) => blog.frontmatter.published).map((blog) => ({ slug: blog.slug }));
};

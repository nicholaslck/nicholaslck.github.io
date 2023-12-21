import type { PageServerLoad } from './$types.js';
import { getBlogs } from "$lib/server/data";

export const load: PageServerLoad = async ({ params }) => {
	const blogs = await getBlogs();

	return {
		blogs: blogs
	};
};

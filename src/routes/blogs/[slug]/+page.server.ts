import type { PageServerLoad } from './$types.js';
import { getBlog } from '$lib/server/data';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const blog = await getBlog(slug);
	return {
		blog: blog
	};
};

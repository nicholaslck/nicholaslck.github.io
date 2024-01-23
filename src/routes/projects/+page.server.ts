import type { PageServerLoad } from './$types.js';
import { getProjects } from '$lib/server/data';

export const load: PageServerLoad = async ({ params }) => {
	const projects = await getProjects();

	return {
		projects: projects.filter((project) => project.frontmatter.published)
	};
};

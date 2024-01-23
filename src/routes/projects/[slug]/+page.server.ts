import type { PageServerLoad, EntryGenerator } from './$types.js';
import { getProject, getProjects } from '$lib/server/data';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const project = await getProject(slug);
	return {
		project: project
	};
};

export const entries: EntryGenerator = async () => {
	const proj = await getProjects();
	return proj.filter((proj) => proj.frontmatter.published).map((proj) => ({ slug: proj.slug }));
};

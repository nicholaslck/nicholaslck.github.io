import { ContentDirectory, readContents } from '$lib/server/data';
import { projects } from '$velite';

export const load = async ({ parent }) => {
	// TODO: move page markdown to config markdown
	const { frontmatter } = await readContents('project-list', ContentDirectory.Pages);

	const items = projects.toSorted(
		(a, b) => new Date(b.date as string).getTime() - new Date(a.date as string).getTime()
	);

	const { config } = await parent();
	return {
		config: { ...config, projectList: frontmatter },
		items
	};
};

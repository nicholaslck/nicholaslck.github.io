import { blogs, projects } from '$velite';

export const load = async ({ parent }) => {
	const { config } = await parent();

	const latestBlog = blogs
		.toSorted(
			(a, b) =>
				new Date(b.created_at as unknown as string).getTime() -
				new Date(a.created_at as unknown as string).getTime()
		)
		.at(0);

	const latestProject = projects
		.toSorted(
			(a, b) =>
				new Date(b.date as unknown as string).getTime() -
				new Date(a.date as unknown as string).getTime()
		)
		.at(0);

	return {
		config: { ...config },
		latestBlog,
		latestProject
	};
};

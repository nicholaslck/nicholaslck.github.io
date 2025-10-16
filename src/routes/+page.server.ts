import { blogs, projects, workExperiences, resumeFile } from '$velite';

export const load = async ({ parent }) => {
	const { config } = await parent();

	const latestBlog = blogs
		.slice()
		.filter((blog) => blog.published)
		.sort(
			(a, b) =>
				new Date(b.created_at as unknown as string).getTime() -
				new Date(a.created_at as unknown as string).getTime()
		)
		.at(0);

	const latestProject = projects
		.slice()
		.sort(
			(a, b) =>
				new Date(b.date as unknown as string).getTime() -
				new Date(a.date as unknown as string).getTime()
		)
		.at(0);

	const experiences = workExperiences
		.slice()
		.sort(
			(a, b) =>
				new Date(b.start_date as unknown as string).getTime() -
				new Date(a.start_date as unknown as string).getTime()
		);

	const _resumeFile = resumeFile.slice().at(0) || { file: '', last_updated: '' };

	return {
		config: { ...config },
		latestBlog,
		latestProject,
		experiences,
		resumeFile: _resumeFile
	};
};

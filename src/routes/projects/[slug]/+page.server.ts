import { projects } from '$velite';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const project = projects.find((project) => project.slug.split('/').pop() === params.slug);

	if (!project) return error(404, 'Blog not found');

	return { item: project };
};

export const entries = async () => {
	const slugs = projects.map((project) => project.slug.split('/').pop()!);
	return slugs.map((slug) => ({ slug }));
};

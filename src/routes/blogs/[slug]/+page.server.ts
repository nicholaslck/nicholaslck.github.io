import { blogs } from '$velite';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const blog = blogs.find((blog) => blog.slug.split('/').pop() === params.slug);

	if (!blog || !blog.published) return error(404, 'Blog not found');

	return { item: blog };
};

export const entries = async () => {
	const slugs = blogs.filter((blog) => blog.published).map((blog) => blog.slug.split('/').pop()!);
	return slugs.map((slug) => ({ slug }));
};

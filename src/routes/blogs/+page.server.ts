import { dev } from '$app/environment';
import { ContentDirectory, readContents } from '$lib/server/data';

import { type Blog, blogs } from '$velite';

export const load = async ({ parent }) => {
	// TODO: move page markdown to config markdown
	const { frontmatter } = await readContents('blog-list', ContentDirectory.Pages);
	const { config } = await parent();

	const items: Blog[] = blogs
		.filter((blog) => (dev ? blog : blog.slug !== 'blogs/demo')) // hide demo blog in production
		.filter((blog) => blog.published)
		.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

	return {
		config: { ...config, blogList: frontmatter },
		items
	};
};

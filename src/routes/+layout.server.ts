import { ContentDirectory, readContents } from '$lib/server/data';

// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = true;

export const load = async () => {
	const { frontmatter } = await readContents('global', ContentDirectory.Configs);

	return {
		config: { global: frontmatter }
	};
};

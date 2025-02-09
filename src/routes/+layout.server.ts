import { ContentDirectory, readContents } from '$lib/server/data';
import { cloneDeep } from 'lodash-es';

// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = true;

export const load = () => {
	const globalConfigMarkdown = readContents('global', ContentDirectory.Configs);
	const global = cloneDeep(globalConfigMarkdown.frontmatter);

	return {
		config: { global }
	};
};

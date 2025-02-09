import { ContentDirectory, readContents } from '$lib/server/data';

export const load = () => {
	const markdownData = readContents('about-me', ContentDirectory.Pages);
	return markdownData;
};

import { glob } from 'glob';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import { cloneDeep } from 'lodash-es';
import type { MarkdownData } from '$lib/types/markdown';

const md = MarkdownIt();

const CONTENT_DIR = 'content/';

export enum ContentDirectory {
	Blogs = CONTENT_DIR + 'blogs/',
	Projects = CONTENT_DIR + 'projects/',
	Pages = CONTENT_DIR + 'pages/',
	Configs = CONTENT_DIR + 'configs/'
}

export const readMarkdownData = (path: string): MarkdownData => {
	if (!glob.sync(path).length) throw new Error(`File does not exist at ${path}`);

	const slug = getSlug(path);

	const { data, content } = matter.read(path);
	return cloneDeep<MarkdownData>({
		slug,
		frontmatter: data,
		body: {
			raw: content,
			html: md.render(content)
		}
	});
};

const getSlug = (path: string) => {
	const slug = path.split('/').pop()?.split('.')[0];
	if (!slug) throw new Error('Invalid path ' + path);
	return slug;
};

/** @returns an array of slugs */
export const listContents = (directory: ContentDirectory) => {
	const paths = glob.sync(directory + '*.md', { ignore: 'node_modules/**' });
	return paths.map((p) => getSlug(p));
};

/** @returns the MarkdownData for a given slug */
export const readContents = (slug: string, directory: ContentDirectory) => {
	return readMarkdownData(directory + slug + '.md');
};

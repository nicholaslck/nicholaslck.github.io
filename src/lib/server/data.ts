import { glob } from 'glob';
import matter from 'gray-matter';
import markdownit from 'markdown-it';

const CONTENT_DIRECTORY = 'src/contents/';
const BLOGS_DIRECTORY = CONTENT_DIRECTORY + 'blogs/';
const PROJECTS_DIRECTORY = CONTENT_DIRECTORY + 'projects/';
const PAGES_DIRECTORY = CONTENT_DIRECTORY + 'pages/';

const md = markdownit();

declare type MarkdownData = {
	slug: string;
	frontmatter: any | undefined;
	content: string | undefined;
	html: string | undefined;
};

export const toMarkdownData = (path: string, parsed = true): MarkdownData => {
	const data: MarkdownData = {
		slug: path.split('/').pop()!.split('.')[0],
		frontmatter: undefined,
		content: undefined,
		html: undefined
	};

	if (parsed) {
		const raw = matter.read(path);
		data.frontmatter = raw.data;
		data.content = raw.content;
		data.html = md.render(raw.content);
	}
	return data;
};

export const getBlogs = async (parsed = true) => {
	const paths = await glob(BLOGS_DIRECTORY + '*.md', { ignore: 'node_modules/**' });
	const results = paths.map((p) => toMarkdownData(p, parsed));
	return results;
};

export const getBlog = async (slug: string, parsed = true) => {
	const paths = await glob(BLOGS_DIRECTORY + slug + '.md', { ignore: 'node_modules/**' });
	if (paths.length === 0) return undefined;
	return toMarkdownData(paths[0], parsed);
};

export const getProjects = async (parsed = true) => {
	const paths = await glob(PROJECTS_DIRECTORY + '*.md', { ignore: 'node_modules/**' });
	const results = paths.map((p) => toMarkdownData(p, parsed));
	return results;
};

export const getProject = async (slug: string, parsed = true) => {
	const paths = await glob(PROJECTS_DIRECTORY + slug + '.md', { ignore: 'node_modules/**' });
	if (paths.length === 0) return undefined;
	return toMarkdownData(paths[0], parsed);
};

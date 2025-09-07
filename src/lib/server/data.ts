import { glob } from 'glob';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import { cloneDeep } from 'lodash-es';
import type { MarkdownData } from '$lib/types/markdown';

const md = MarkdownIt();

const VAULT_DIR = 'vault/';

export enum ContentDirectory {
	Blogs = VAULT_DIR + 'blogs/',
	Projects = VAULT_DIR + 'projects/',
	Pages = VAULT_DIR + 'pages/',
	Configs = VAULT_DIR + 'configs/'
}

const getSlug = (path: string) => {
	const slug = path.split('/').pop()?.split('.')[0];
	if (!slug) throw new Error('Invalid path ' + path);
	return slug;
};

export const readMarkdownData = async (path: string): Promise<MarkdownData> => {
	if (!(await glob(path)).length) throw new Error(`File does not exist at ${path}`);

	const slug = getSlug(path);
	const { data, content } = matter.read(path);

	return cloneDeep<MarkdownData>({
		slug,
		frontmatter: data ?? {},
		body: {
			raw: content,
			html: md.render(content)
		}
	});
};

/** @returns an array of slugs */
export const listContents = async (directory: ContentDirectory) => {
	const paths = await glob(directory + '*.md', { ignore: 'node_modules/**' });
	return paths.map((p) => getSlug(p));
};

/** @returns the MarkdownData for a given slug */
export const readContents = async (slug: string, directory: ContentDirectory) => {
	return readMarkdownData(directory + slug + '.md');
};

/** @returns the MarkdownData for a given uid */
export const readContentsByUid = async (uid: string, directory: ContentDirectory) => {
	const paths = await glob(directory + '*.md', { ignore: 'node_modules/**' });
	const promises = paths.map(async (path) => {
		const { data } = matter.read(path);
		if (data && data.uid === uid) {
			return readMarkdownData(path);
		}
		throw new Error('UID mismatch'); // Reject if UID doesn't match
	});

	try {
		return await Promise.any(promises);
	} catch {
		throw new Error(`File with uid ${uid} not found in ${directory}`);
	}
};

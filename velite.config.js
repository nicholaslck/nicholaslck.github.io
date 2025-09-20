import { defineConfig, s } from 'velite';

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

export default defineConfig({
	collections: {
		projects: {
			name: 'Project', // collection type name
			pattern: 'projects/**/*.md', // content files glob pattern
			schema: s.object({
				title: s.string(), // Zod primitive type
				// slug: s.slug('projects'), // validate format, unique in projects collection
				description: s.string(),
				url: s.union([s.string().url(), s.literal('')]).optional(),
				type: s.enum(['work_project', 'mphil_project', 'self_project', 'freelance_project']),
				date: s.isodate(), // input Date-like string, output ISO Date string.
				related_work_experience: s.string().optional(),
				slug: s.path(), // auto generate slug from file path
				// cover: s.image(), // input image relative path, output image object with blurImage.
				// video: s.file().optional(), // input file relative path, output file public path.
				// metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
				excerpt: s.excerpt().optional(), // excerpt of markdown content
				content: s.markdown().optional() // transform markdown to html
			})
			// more additional fields (computed fields)
			// .transform((data) => ({ ...data, permalink: `/blog/${data.slug}` }))
		}
	}
});

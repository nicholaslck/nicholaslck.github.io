import { defineCollection, defineConfig, s } from 'velite';

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

const projects = defineCollection({
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
		slug: s.path() // auto generate slug from file path
		// cover: s.image(), // input image relative path, output image object with blurImage.
		// video: s.file().optional(), // input file relative path, output file public path.
		// metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
		// excerpt: s.excerpt(), // excerpt of markdown content
		// content: s.markdown()
	})
	// more additional fields (computed fields)
	// .transform((data) => ({ ...data, permalink: `/blog/${data.slug}` }))
});

const workExperiences = defineCollection({
	name: 'WorkExperience',
	pattern: 'work_experiences/**/*.md',
	schema: s.object({
		company: s.string(),
		position: s.string(),
		start_date: s.isodate(),
		end_date: s.isodate(),
		is_current: s.boolean(),
		description: s.string(),
		slug: s.path()
	})
});

const educations = defineCollection({
	name: 'Education',
	pattern: 'educations/**/*.md',
	schema: s.object({
		title: s.string(),
		institution: s.string(),
		degree: s.string(),
		start_date: s.isodate(),
		end_date: s.isodate(),
		is_current: s.boolean(),
		slug: s.path()
	})
});

const certifications = defineCollection({
	name: 'Certification',
	pattern: 'certifications/**/*.md',
	schema: s.object({
		title: s.string(),
		institution: s.string(),
		start_date: s.isodate(),
		end_date: s.isodate(),
		slug: s.path()
	})
});

const blogs = defineCollection({
	name: 'Blog',
	pattern: 'blogs/**/*.md',
	schema: s.object({
		title: s.string(),
		created_at: s.isodate(),
		abstract: s.string(),
		slug: s.path(),
		excerpt: s.excerpt(),
		content: s.markdown()
	})
});

const configs = defineCollection({
	name: 'Config',
	pattern: 'configs/**/*.md',
	schema: s.object({
		site_title: s.string(),
		site_description: s.string(),
		avatar: s.string(),
		slug: s.path()
	})
});

export default defineConfig({
	collections: {
		projects,
		workExperiences,
		educations,
		certifications,
		blogs,
		configs
	}
});

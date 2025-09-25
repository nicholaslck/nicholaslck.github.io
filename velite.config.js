import { defineCollection, defineConfig, s } from 'velite';

const staticImageOptions = { absoluteRoot: 'static' };

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

const configs = defineCollection({
	name: 'Config',
	pattern: 'configs/**/*.md',
	schema: s.object({
		slug: s.path(),
		site_title: s.string(),
		site_description: s.string(),
		avatar: s.string()
	})
});

const blogs = defineCollection({
	name: 'Blog',
	pattern: 'blogs/**/*.md',
	schema: s.object({
		slug: s.path(),
		published: s.boolean(),
		title: s.string(),
		created_at: s.isodate(),
		abstract: s.string(),
		tags: s.array(s.string()),
		metadata: s.metadata(),
		excerpt: s.excerpt(),
		content: s.markdown()
	})
});

const tags = defineCollection({
	name: 'Tag',
	pattern: 'tags/**/*.md',
	schema: s.object({
		slug: s.path(),
		name: s.string(),
		description: s.string(),
		color: s.string()
	})
});

const projects = defineCollection({
	name: 'Project',
	pattern: 'projects/**/*.md',
	schema: s.object({
		slug: s.path(),
		title: s.string(),
		description: s.string(),
		url: s.union([s.string().url(), s.literal('')]).optional(),
		type: s.enum(['work_project', 'mphil_project', 'self_project', 'freelance_project']),
		date: s.isodate(),
		related_work_experience: s.string().optional(),
		cover_image: s.image(staticImageOptions).optional()
	})
});

const educations = defineCollection({
	name: 'Education',
	pattern: 'educations/**/*.md',
	schema: s.object({
		slug: s.path(),
		title: s.string(),
		institution: s.string(),
		degree: s.string(),
		start_date: s.isodate(),
		end_date: s.isodate(),
		is_current: s.boolean()
	})
});

const certifications = defineCollection({
	name: 'Certification',
	pattern: 'certifications/**/*.md',
	schema: s.object({
		slug: s.path(),
		title: s.string(),
		institution: s.string(),
		start_date: s.isodate(),
		end_date: s.isodate()
	})
});

const workExperiences = defineCollection({
	name: 'WorkExperience',
	pattern: 'work_experiences/**/*.md',
	schema: s.object({
		slug: s.path(),
		icon: s.image(staticImageOptions),
		company: s.string(),
		position: s.string(),
		description: s.string().optional(),
		start_date: s.isodate(),
		end_date: s.isodate().optional(),
		is_current: s.boolean()
	})
});

export default defineConfig({
	collections: {
		configs,
		blogs,
		tags,
		projects,
		educations,
		certifications,
		workExperiences
	}
});

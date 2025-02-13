export interface MarkdownData {
	slug: string;
	frontmatter: Record<string, unknown>;
	body?: {
		raw: string;
		html: string;
	};
}

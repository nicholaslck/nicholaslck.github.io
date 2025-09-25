import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { readContentsByUid, ContentDirectory } from '$lib/server/data';
import fs from 'fs/promises';
import path from 'path';

const TEST_VAULT_DIR = 'vault/blogs/';
const TEST_UID = 'test-blog-uid-123';
const TEST_SLUG = 'test-uid-blog';
const TEST_FILE_PATH = path.join(TEST_VAULT_DIR, `${TEST_SLUG}.md`);

describe('readContentsByUid', () => {
	beforeAll(async () => {
		// Create a dummy markdown file for testing
		const content = `---
title: Test Blog Post with UID
uid: ${TEST_UID}
---
This is a test blog post.`;
		await fs.mkdir(TEST_VAULT_DIR, { recursive: true });
		await fs.writeFile(TEST_FILE_PATH, content);
	});

	it('should correctly read markdown content by UID', async () => {
		const result = await readContentsByUid(TEST_UID, ContentDirectory.Blogs);
		expect(result).toBeDefined();
		expect(result.frontmatter.title).toBe('Test Blog Post with UID');
		expect(result.frontmatter.uid).toBe(TEST_UID);
		expect(result.slug).toBe(TEST_SLUG);
		expect(result.body?.raw).toContain('This is a test blog post.');
	});

	it('should throw an error if UID is not found', async () => {
		const nonExistentUid = 'non-existent-uid';
		await expect(readContentsByUid(nonExistentUid, ContentDirectory.Blogs)).rejects.toThrow(
			`File with uid ${nonExistentUid} not found in ${ContentDirectory.Blogs}`
		);
	});

	afterAll(async () => {
		// Clean up the dummy markdown file
		await fs.unlink(TEST_FILE_PATH);
	});
});

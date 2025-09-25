<script lang="ts">
	import { codeToHtml } from 'shiki/bundle/web';
	import type { Attachment } from 'svelte/attachments';
	interface Props {
		content: string;
	}
	let { content }: Props = $props();

	const highlightCodeBlocks: Attachment = (el) => {
		content;
		(async () => {
			await Promise.all(
				Array.from(el.querySelectorAll('pre code[class*="language-"]')).map(async (block) => {
					block.parentElement!.outerHTML = await codeToHtml(block.textContent, {
						lang: block.className.slice('language-'.length),
						themes: {
							light: 'solarized-light',
							dark: 'dark-plus'
						}
					});
				})
			);

			document.querySelectorAll('pre code').forEach((el) => {
				el.parentElement!.classList.add('code');
			});
		})().then();
		return () => {};
	};
</script>

<article class="content" {@attach highlightCodeBlocks}>
	{#if content}
		{@html content}
	{/if}
</article>

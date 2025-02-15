<script lang="ts">
	import * as Layout from '$lib/components/layout';

	const { data } = $props();
	const item = $derived(data.item);
</script>

<Layout.PageContent
	heading={item.frontmatter.title as string}
	created_at={item.frontmatter.created_at as string}
	goBackUrl="/blogs"
>
	<article>
		{#if item.body?.html}
			{@html item.body?.html}
		{/if}
	</article>
</Layout.PageContent>

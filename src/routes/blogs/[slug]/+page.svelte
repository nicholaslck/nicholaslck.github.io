<script lang="ts">
	import * as Layout from '$lib/components/layout';

	const { data } = $props();
</script>

<Layout.PageContent
	heading={data.item.title as string}
	created_at={data.item.created_at as string}
	goBackUrl="/blogs"
>
	<article>
		{#if data.item.content}
			{@html data.item.content}
		{/if}
	</article>
</Layout.PageContent>

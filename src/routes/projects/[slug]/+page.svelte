<script lang="ts">
	import Article from '$lib/components/Article.svelte';
	import * as Layout from '$lib/components/layout';

	const { data } = $props();
</script>

<Layout.PageContent created_at={data.item.date} navigateBackFallbackUrl="/projects">
	<Article content={data.item.content} />
</Layout.PageContent>

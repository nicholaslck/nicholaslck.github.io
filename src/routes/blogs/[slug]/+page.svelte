<script lang="ts">
	import Article from '$lib/components/Article.svelte';
	import * as Layout from '$lib/components/layout';

	const { data } = $props();
</script>

<Layout.PageContent
	heading={data.item.title}
	created_at={data.item.created_at}
	tags={data.item.tags}
	navigateBackFallbackUrl="/blogs"
>
	<Article content={data.item.content} />
</Layout.PageContent>

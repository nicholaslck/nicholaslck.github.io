<script lang="ts">
	import GridItem from '$lib/components/GridItem.svelte';
	import * as Layout from '$lib/components/layout';

	let { data } = $props();
	const { heading, subheading } = $derived(data.config.projectList);
	const items = $derived(data.items);
</script>

<Layout.Grid heading={heading as string} subheading={subheading as string} {items}>
	{#snippet children(item)}
		<GridItem
			slug={item.slug}
			url={item.url ?? ''}
			title={item.title}
			date={item.date}
			caseStudyEnabled={!!item.content.length}
			image={item.cover_image}
			isComingSoon={item.coming_soon}
		/>
	{/snippet}
</Layout.Grid>

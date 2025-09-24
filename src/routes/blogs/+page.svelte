<script lang="ts">
	import * as Layout from '$lib/components/layout';
	import ListingItem from '$lib/components/ListingItem.svelte';

	const { data } = $props();
	const { heading, subheading } = $derived(data.config.blogList);
	const items = $derived(data.items);
</script>

<Layout.Listing heading={heading as string} subheading={subheading as string} {items}>
	{#snippet children(item)}
		<ListingItem
			href={item.slug}
			date={item.created_at}
			title={item.title}
			abstract={item.abstract}
			tags={item.tags}
		/>
	{/snippet}
</Layout.Listing>

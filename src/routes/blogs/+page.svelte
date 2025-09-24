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
			created_at={item.created_at as string}
			title={item.title as string}
			abstract={item.abstract as string}
		/>
	{/snippet}
</Layout.Listing>

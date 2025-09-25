<script lang="ts">
	import * as Layout from '$lib/components/layout';
	import ListingItem from '$lib/components/ListingItem.svelte';

	let { data } = $props();
	const { heading, subheading } = $derived(data.config.projectList);
	const items = $derived(data.items);
</script>

<Layout.Listing heading={heading as string} subheading={subheading as string} {items}>
	{#snippet children(item)}
		<ListingItem
			href={item.url || item.slug}
			title={item.title}
			abstract={item.description}
			isExternal={!!item.url}
			date={item.date}
			dateIsYearOnly={true}
		/>
	{/snippet}
</Layout.Listing>

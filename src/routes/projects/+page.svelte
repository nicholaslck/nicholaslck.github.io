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
			href={item.frontmatter.url ? (item.frontmatter.url as string) : `/projects/${item.slug}`}
			title={item.frontmatter.title as string}
			abstract={item.frontmatter.description as string}
			isExternal={item.frontmatter.url ? true : false}
		/>
	{/snippet}
</Layout.Listing>

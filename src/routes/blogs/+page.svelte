<script lang="ts">
	import * as Layout from '$lib/components/layout';

	let { data } = $props();
	let { heading, subheading } = $derived(data.config.blogList);
	let items = $derived(data.items);
</script>

<Layout.Listing heading={heading as string} subheading={subheading as string} {items}>
	{#snippet children(item)}
		<Layout.ListingItem
			href={`/blogs/${item.slug}`}
			created_at={item.frontmatter.created_at as string}
			title={item.frontmatter.title as string}
			abstract={item.frontmatter.abstract as string}
			moreButtonText="Read more..."
		/>
	{/snippet}
</Layout.Listing>

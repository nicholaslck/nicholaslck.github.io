<script lang="ts">
	import * as Layout from '$lib/components/layout';

	let { data } = $props();
	let { heading, subheading } = $derived(data.config.blogList);
	let items = $derived(data.items);
</script>

<Layout.Listing heading={heading as string} subheading={subheading as string} {items}>
	{#snippet children(item)}
		<a href="/blogs/{item.slug}"><div class="large">{item.frontmatter.title}</div></a>
	{/snippet}
</Layout.Listing>

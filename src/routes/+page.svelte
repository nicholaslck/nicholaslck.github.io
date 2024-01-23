<script>
	import Card from '$lib/components/Card.svelte';
	export let data;
</script>

<h2 class="h2 mx-auto mb-4 mt-8 text-center">My Blogs</h2>

<div class="mx-auto mt-8 flex flex-wrap items-center justify-start gap-6">
	{#each data.blogs as blog}
		<Card
			href={'/blogs/' + blog.slug}
			thumbnail={blog.frontmatter.thumbnail}
			title={blog.frontmatter.title}
			excerpt={blog.frontmatter.excerpt}
			date={blog.frontmatter.date}
		/>
	{/each}
</div>

<script>
	import Card from '$lib/components/Card.svelte';
	export let data;
</script>

<div class="m-auto mt-8 max-w-[1200px]">
	<h1 class="h1">Nicholas's Personal Site</h1>
	<p>Welcome, visitor!</p>
	<p>
		Well... as you can see, there are nothing here. Previously I have my own personal site, but I
		decided not to continue that domain and wanted to move to github.io. At the same time, I think,
		why not do a revamp of the site and make it more a comfortable space for me to publish contents?
		So here it is, my new site, in progress. I will try to post some of my thoughts here, and maybe
		some of my projects. I hope you enjoy your stay here. Stay tuned.
	</p>

	<h2 class="h2 mb-4 mt-8">My Blogs</h2>

	<div class="mx-auto flex flex-wrap items-center justify-start gap-6">
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
</div>

<style>
	.backdrop {
		background: linear-gradient(
			0deg,
			rgba(2, 0, 36, 0.2847732843137255) 0%,
			rgba(255, 255, 255, 0) 9%
		);
	}
</style>

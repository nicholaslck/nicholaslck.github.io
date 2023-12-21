<script>
	export let data;
</script>

<style>
	.backdrop {
		background: linear-gradient(0deg, rgba(2,0,36,0.2847732843137255) 0%, rgba(255,255,255,0) 9%);
	}
</style>

<div class="max-w-[1200px] m-auto mt-8">
	<h1 class="h1">Nicholas's Personal Site</h1>
	<p>Welcome, visitor!</p>
	<p>
		Well... as you can see, there are nothing here. Previously I have my own personal site, but I
		decided not to continue that domain and wanted to move to github.io. At the same time, I think,
		why not do a revamp of the site and make it more a comfortable space for me to publish contents?
		So here it is, my new site, in progress. I will try to post some of my thoughts here, and maybe
		some of my projects. I hope you enjoy your stay here. Stay tuned.
	</p>

	<h2 class="h2 mt-8 mb-4">My Blogs</h2>

	<div class="mx-auto flex flex-wrap items-center justify-start gap-6">
	{#each data.blogs as blog}
		<div class="max-w-sm card">
			{#if blog.frontmatter.thumbnail}
				<div class="w-full relative">
					<img class="w-full" src={blog.frontmatter.thumbnail} alt="thumbnail-{blog.frontmatter.title}" />
					<div class="backdrop absolute top-0 left-0 w-full h-full" />
				</div>
			{/if}
			<div class="px-4 py-4">
				<div class="font-bold text-xl mb-2">{blog.frontmatter.title}</div>
				<p class="mb-2">{blog.frontmatter.excerpt}</p>
			</div>
			<div class="card-footer">
				<p class="text-right">
				{new Date(blog.frontmatter.date).toLocaleDateString()}
			</p>
			</div>
		</div>
	{/each}
	</div>
</div>

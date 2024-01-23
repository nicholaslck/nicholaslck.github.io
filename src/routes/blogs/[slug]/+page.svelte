<script>
	import MarkdownRenderFloor from '$lib/components/MarkdownRenderFloor.svelte';

	export let data;

	$: blog = data.blog;
</script>

<div class="m-auto mt-8 max-w-[1200px]">
	<h1 class="h1">{blog?.frontmatter.title}</h1>

	<div class='w-full h-[2px] bg-black mt-8 mb-2'></div>

	<p>{new Date(blog?.frontmatter.date).toLocaleDateString()}</p>
	<img src={blog?.frontmatter.thumbnail} alt={blog?.frontmatter.title} />

	<MarkdownRenderFloor html={blog?.html} />
</div>

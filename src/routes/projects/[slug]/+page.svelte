<script>
	import MarkdownRenderFloor from '$lib/components/MarkdownRenderFloor.svelte';

	export let data;

	$: project = data.project;
</script>

<div class="m-auto mt-8 max-w-[1200px]">
	<h1 class="h1">{project?.frontmatter.title}</h1>

	<div class='w-full h-[2px] bg-black mt-8 mb-2'></div>

	<p>{new Date(project?.frontmatter.date).toLocaleDateString()}</p>
	<img src={project?.frontmatter.thumbnail} alt={project?.frontmatter.title} />

	<MarkdownRenderFloor html={project?.html} />
</div>

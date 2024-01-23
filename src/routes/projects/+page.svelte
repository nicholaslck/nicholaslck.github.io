<script>
	import Card from '$lib/components/Card.svelte';
	export let data;
</script>

<h2 class="h2 mx-auto mb-4 mt-8 text-center">My Projects</h2>

<div class="mx-auto mt-8 flex flex-wrap items-center justify-start gap-6">
	{#each data.projects as project}
		<Card
			href={project.frontmatter.url}
			thumbnail={project.frontmatter.thumbnail}
			title={project.frontmatter.title}
			excerpt={project.frontmatter.excerpt}
			date={project.frontmatter.date}
		/>
	{/each}
</div>

<script>
	import Card from '$lib/components/Card.svelte';
	export let data;
</script>

<h2 class="h2 mx-auto mb-4 mt-8 text-center">My Projects</h2>

<div class="mx-auto mt-8 flex flex-wrap items-start justify-start gap-6">
	{#each data.projects as project}
        {@const url = project.frontmatter.url}
		<Card
			href={url ? url : '/projects/' + project.slug}
            target={url ? '_blank' : '_self'}
			thumbnail={project.frontmatter.thumbnail}
			title={project.frontmatter.title}
			excerpt={project.frontmatter.excerpt}
			date={project.frontmatter.date}
		/>
	{/each}
</div>

<script lang="ts">
	let { data } = $props();
</script>

<h1>Project list</h1>

<ol>
	{#each data.list as project}
		<li>
			<a href="projects/{project.slug}">{project.slug}</a>
		</li>
	{/each}
</ol>

<script lang="ts">
	export let data;
</script>

<h1>Project list</h1>

<ol>
	{#each data.list as project}
		<li>
			<a href="projects/{project.slug}">{project.slug}</a>
		</li>
	{/each}
</ol>

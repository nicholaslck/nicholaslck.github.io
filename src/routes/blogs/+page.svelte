<script lang="ts">
	export let data;
</script>

<h1>Blog list</h1>

<ol>
	{#each data.list as blog}
		<li>
			<a href="blogs/{blog.slug}">{blog.slug}</a>
		</li>
	{/each}
</ol>

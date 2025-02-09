<script lang="ts">
	let { data } = $props();
</script>

<h1>{data.slug + data.body?.html}</h1>

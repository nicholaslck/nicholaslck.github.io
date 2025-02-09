<script lang="ts">
	let { config }: { config?: Record<string, unknown> } = $props();
	let site_title = $derived(config?.site_title as string | undefined);
	let site_description = $derived(config?.site_description as string | undefined);
</script>

<svelte:head>
	<title>{site_title}</title>
	<meta name="description" content={site_description} />
</svelte:head>

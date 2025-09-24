<script lang="ts">
	interface Props {
		content: string;
	}
	let { content }: Props = $props();
</script>

<article class="mx-auto max-w-2xl">
	{#if content}
		{@html content}
	{/if}
</article>

<style>
</style>

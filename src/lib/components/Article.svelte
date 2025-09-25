<script lang="ts">
	interface Props {
		content: string;
	}
	let { content }: Props = $props();
</script>

<article class="content">
	{#if content}
		{@html content}
	{/if}
</article>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	interface Props {
		children?: Snippet;
		class?: string;
		href?: string;
	}

	let { children, class: className, href }: Props = $props();
</script>

{#if href}
	<a
		{href}
		class={cn('flex flex-col items-start gap-3 rounded-xl border-1 border-solid p-4', className)}
	>
		{@render children?.()}
	</a>
{:else}
	<div
		class={cn('flex flex-col items-start gap-3 rounded-xl border-1 border-solid p-4', className)}
	>
		{@render children?.()}
	</div>
{/if}

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	interface Props {
		children?: Snippet;
		class?: string;
	}

	let { children, class: className }: Props = $props();
</script>

<div class={cn('flex flex-col items-start gap-3 rounded-xl border-1 border-solid p-4', className)}>
	{@render children?.()}
</div>

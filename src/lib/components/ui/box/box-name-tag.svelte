<script>
	import { Sparkles, Waypoints, Puzzle, MessageSquare } from 'lucide-svelte';
	let { name, iconId } = $props();

	const iconClass = 'h-4 w-4';
</script>

<div
	class="body-primary mb-3 line-clamp-2 inline-flex h-8 min-h-8 items-center gap-1 rounded-2xl border-1 border-solid border-gray-600 p-4 px-4 text-sm leading-5"
>
	{#if iconId === 'waypoints'}
		<Waypoints class={iconClass} />
	{:else if iconId === 'puzzle'}
		<Puzzle class={iconClass} />
	{:else if iconId === 'message-square'}
		<MessageSquare class={iconClass} />
	{:else}
		<Sparkles class={iconClass} />
	{/if}
	<div>{name}</div>
</div>

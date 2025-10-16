<script>
	import { cn } from '$lib/utils';
	import { Sparkles, Waypoints, Puzzle, MessageSquare } from 'lucide-svelte';
	import { getContext } from 'svelte';
	let { name, iconId } = $props();

	const iconClass = 'h-4 w-4';
	let boxState = getContext('boxState');
</script>

<div
	class={cn(
		'body-primary mb-3 line-clamp-2 inline-flex h-8 min-h-8 items-center gap-1 rounded-2xl border-1 border-solid p-4 px-4 text-sm leading-5',
		boxState.active && 'text-primary'
	)}
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

<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	interface Props {
		children?: Snippet;
		class?: string;
		href?: string;
	}

	let { children, class: className, href, ...restProps }: Props = $props();

	let boxState = $state({ active: false });
	setContext('boxState', boxState);

	let _class = $derived(
		cn(
			'flex flex-col items-start gap-3 rounded-xl border-1 border-solid p-4 transition-transform hover:bg-accent',
			className,
			boxState.active && ' scale-[1.01]'
		)
	);
</script>

{#if href}
	<a
		{href}
		class={_class}
		onmouseenter={() => (boxState.active = true)}
		onmouseleave={() => (boxState.active = false)}
		onfocus={() => (boxState.active = true)}
		onblur={() => (boxState.active = false)}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else}
	<div
		role="group"
		onmouseenter={() => (boxState.active = true)}
		onmouseleave={() => (boxState.active = false)}
		onfocus={() => (boxState.active = true)}
		onblur={() => (boxState.active = false)}
		class={_class}
		{...restProps}
	>
		{@render children?.()}
	</div>
{/if}

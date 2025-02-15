<script lang="ts" generics="T extends Partial<{ slug: string }>">
	import type { Snippet } from 'svelte';
	import { Separator } from '../ui/separator';

	interface Props {
		heading: string;
		subheading: string;
		items: T[];
		children: Snippet<[T]>;
	}

	let { heading, subheading, items, children }: Props = $props();
</script>

<h1 class="pb-6">{heading}</h1>

<p class="pb-6">{subheading}</p>

<Separator class="mb-8" />

<ol>
	{#each items as item (item.slug)}
		<li class="pb-16">
			{@render children?.(item)}
		</li>
	{/each}
</ol>

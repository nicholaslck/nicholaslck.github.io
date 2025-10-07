<script lang="ts" generics="T extends Partial<{ slug: string, frontmatter: any }>">
	import type { Snippet } from 'svelte';
	import { Input } from '../ui/input';
	import { Search } from 'lucide-svelte';

	interface Props {
		heading: string;
		subheading: string;
		items: T[];
		children: Snippet<[T]>;
	}

	let { heading, subheading, items, children }: Props = $props();
</script>

<h1 class="max-w-2xl pb-6">{heading}</h1>

<p class="max-w-2xl pb-6">{subheading}</p>

<div class="mt-16">
	<ol class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each items as item (item.slug)}
			{@render children?.(item)}
		{/each}
	</ol>
</div>

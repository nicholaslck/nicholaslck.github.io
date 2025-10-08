<script lang="ts">
	import type { Snippet } from 'svelte';
	import Masonry from 'svelte-bricks';

	interface Props {
		heading: string;
		subheading: string;
		items: any[];
		children: Snippet<[any]>;
	}

	let { heading, subheading, items, children: _children }: Props = $props();
</script>

<main>
	<h1 class="max-w-2xl pb-6">{heading}</h1>

	<p class="max-w-2xl pb-6">{subheading}</p>

	<div class="view-transition-main mt-16" data-aos="fade-in">
		<Masonry {items} idKey={'slug'} gap={16} animate={true}>
			{#snippet children({ item })}
				{@render _children?.(item)}
			{/snippet}
		</Masonry>
	</div>
</main>

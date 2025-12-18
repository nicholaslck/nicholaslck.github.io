<script lang="ts" generics="T extends { slug: string }">
	import type { Snippet } from 'svelte';
	import { Input } from '../ui/input';
	import { Search } from 'lucide-svelte';

	interface Props {
		heading: string;
		subheading: string;
		items: T[];
		searchKeys?: string[];
		children: Snippet<[T]>;
	}

	let { heading, subheading, items, searchKeys, children }: Props = $props();

	let searchInput = $state('');

	const safeSearchInput = (value: string) => value.trim().toLowerCase();

	let _items = $derived.by(() => {
		if (!searchKeys) return items;
		if (!searchInput) return items;

		const _searchInput = safeSearchInput(searchInput);

		return items.filter((item) => {
			// Only select the fields that will be searched.
			const searchableEntries = Object.entries(item).filter((kv) => {
				for (const key of searchKeys) {
					if (key === kv[0]) return true;
				}
				return false;
			});

			// Match search input
			for (const entry of searchableEntries) {
				const value = safeSearchInput(entry[1]);
				if (value.includes(_searchInput)) {
					return true;
				}
			}
			return false;
		});
	});
</script>

<main>
	<h1 class="max-w-2xl pb-6">{heading}</h1>

	<p class="max-w-2xl pb-6">{subheading}</p>

	<div
		class="view-transition-main mt-16 max-w-4xl border-l-2 pl-3 md:pl-4 lg:pl-5"
		data-aos="fade-in"
	>
		<div class="relative mb-12">
			<Input type="text" placeholder="Search articles..." bind:value={searchInput} />
			<button
				class="absolute top-1/2 right-0 -translate-y-1/2 rounded-full px-3 py-1.5 text-sm font-medium hover:cursor-pointer"
			>
				<Search class="h-5 w-5" />
			</button>
		</div>

		<ol>
			{#each _items as item (item.slug)}
				<li class="pb-16 last:pb-0">
					{@render children?.(item)}
				</li>
			{/each}
		</ol>
	</div>
</main>

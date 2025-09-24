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

	let searchInput = $state('');

	const safeSearchInput = (value: string) => value.trim().toLowerCase();

	let filteredItems = $derived.by(() => {
		if (!searchInput) return items;

		const lowerCaseSearch = safeSearchInput(searchInput);

		return items.filter((item) => {
			const title = item.frontmatter?.title as string;
			const abstract = item.frontmatter?.abstract as string;

			const lowerCaseTitle = title ? safeSearchInput(title) : '';
			const lowerCaseAbstract = abstract ? safeSearchInput(abstract) : '';

			return (
				lowerCaseTitle?.includes(lowerCaseSearch) || lowerCaseAbstract?.includes(lowerCaseSearch)
			);
		});
	});
</script>

<h1 class="max-w-2xl pb-6">{heading}</h1>

<p class="max-w-2xl pb-6">{subheading}</p>

<div class="mt-16 max-w-4xl border-l-2 pl-8">
	<div class="relative mb-12">
		<Input type="text" placeholder="Search articles..." bind:value={searchInput} />
		<button
			class="absolute top-1/2 right-0 -translate-y-1/2 rounded-full px-3 py-1.5 text-sm font-medium hover:cursor-pointer"
		>
			<Search class="h-5 w-5" />
		</button>
	</div>

	<ol>
		{#each filteredItems as item (item.slug)}
			<li class="pb-16 last:pb-0">
				{@render children?.(item)}
			</li>
		{/each}
	</ol>
</div>

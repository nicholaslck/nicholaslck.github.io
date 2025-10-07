<script lang="ts">
	import * as Layout from '$lib/components/layout';
	import ListingItem from '$lib/components/ListingItem.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import dayjs from 'dayjs';
	import { each, forEach } from 'lodash-es';

	let { data } = $props();
	const { heading, subheading } = $derived(data.config.projectList);
	const items = $derived(data.items);
</script>

<Layout.Grid heading={heading as string} subheading={subheading as string} {items}>
	{#snippet children(item)}
		<li class="rounded-2xl border-1 p-2">
			<a
				href={item.url || item.slug}
				target={item.url ? '_blank' : undefined}
				class="relative block aspect-video w-full overflow-clip rounded-lg object-cover"
			>
				{#if item.cover_image}
					<img
						class="absolute top-0 left-0 h-full w-full"
						src={item.cover_image.src}
						width={item.cover_image.width}
						height={item.cover_image.height}
						alt={'image of '.concat(item.title)}
					/>
				{:else}
					<Skeleton class="absolute top-0 left-0 h-full w-full" />
				{/if}

				<div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
				<div class="absolute bottom-0 flex w-full flex-nowrap justify-between p-4">
					<div class="small text-white">{item.title}</div>
					<div class="small text-white">{dayjs(item.date).format('MMM YYYY')}</div>
				</div>
			</a>
		</li>
	{/snippet}
</Layout.Grid>

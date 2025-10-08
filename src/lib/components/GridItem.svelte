<script lang="ts">
	import dayjs from 'dayjs';
	import type { Image } from 'velite';
	import { Button } from './ui/button';
	import { BookOpenText, SquareArrowOutUpRight } from 'lucide-svelte';
	import { Skeleton } from './ui/skeleton';

	interface Props {
		url: string;
		title: string;
		date: string;
		caseStudyEnabled: boolean;
		image?: Image;
	}

	let { url, image, title, date, caseStudyEnabled }: Props = $props();
</script>

<div class="rounded-2xl border-1 p-2" data-aos="fade-up" data-aos-offset="-10" data-aos-once="true">
	<svelte:element
		this={caseStudyEnabled ? 'div' : 'a'}
		href={caseStudyEnabled ? undefined : url}
		target={caseStudyEnabled ? undefined : '_blank'}
		class="relative block aspect-video w-full overflow-clip rounded-lg object-cover"
	>
		{#if image}
			<img
				class="absolute top-0 left-0 h-full w-full"
				src={image.src}
				width={image.width}
				height={image.height}
				alt={'image of '.concat(title)}
			/>
		{:else}
			<Skeleton class="absolute top-0 left-0 h-full w-full" />
		{/if}

		<div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
		<div class="absolute bottom-0 flex w-full flex-nowrap justify-between p-4">
			<div class="small text-white">{title}</div>
			<div class="muted text-white">{dayjs(date).format('MMM YYYY')}</div>
		</div>
	</svelte:element>

	{#if caseStudyEnabled}
		<div class="flex w-full flex-nowrap justify-evenly gap-2">
			<Button variant="secondary" class="flex-1">
				<BookOpenText />Case study
			</Button>
			<Button variant="secondary" class="flex-1">
				<SquareArrowOutUpRight />View website
			</Button>
		</div>
	{/if}
</div>

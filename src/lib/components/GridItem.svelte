<script lang="ts">
	import dayjs from 'dayjs';
	import type { Image } from 'velite';
	import { Button } from './ui/button';
	import { BookOpenText, SquareArrowOutUpRight } from 'lucide-svelte';
	import { Skeleton } from './ui/skeleton';

	interface Props {
		slug: string;
		url: string;
		title: string;
		date: string;
		caseStudyEnabled: boolean;
		image?: Image;
		isComingSoon?: boolean;
	}

	let { slug, url, image, title, date, caseStudyEnabled, isComingSoon }: Props = $props();
</script>

<div class="rounded-2xl border-1 p-2" data-aos="fade-up" data-aos-offset="-10" data-aos-once="true">
	<svelte:element
		this={caseStudyEnabled ? 'div' : 'a'}
		href={caseStudyEnabled ? undefined : url}
		target={caseStudyEnabled ? undefined : '_blank'}
		class="relative block aspect-video w-full overflow-clip rounded-lg object-cover"
	>
		{#if image?.src}
			<img
				class="absolute top-0 left-0 h-full w-full"
				src={image.src}
				width={image.width}
				height={image.height}
				alt={'image of '.concat(title)}
			/>
		{:else}
			<Skeleton class="bg-primary/50 absolute top-0 left-0 h-full w-full" />
		{/if}

		<div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
		<div class="absolute bottom-0 flex w-full flex-nowrap justify-between p-4">
			<div class="small text-white">{title}</div>
			<div class="muted text-white">{dayjs(date).format('MMM YYYY')}</div>
		</div>

		{#if isComingSoon}
			<div
				class="bg-secondary text-secondary-foreground absolute top-1/2 left-1/2 -translate-1/2 rounded-full px-6 py-3 text-xs font-semibold"
			>
				Coming Soon
			</div>
		{/if}
	</svelte:element>

	{#if caseStudyEnabled}
		<div class="mt-2 flex w-full flex-nowrap justify-evenly gap-2">
			<Button href={slug} variant="secondary" class="flex-1 rounded-lg">
				<BookOpenText />Case study
			</Button>
			<Button href={url} target="_blank" variant="secondary" class="flex-1 rounded-lg">
				<SquareArrowOutUpRight />View website
			</Button>
		</div>
	{/if}
</div>

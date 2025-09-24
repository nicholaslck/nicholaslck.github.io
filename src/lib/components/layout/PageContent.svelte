<script lang="ts">
	import type { Snippet } from 'svelte';
	import { navigateBack } from '$lib/utils';
	import { ArrowLeft } from 'lucide-svelte';
	import dayjs from 'dayjs';
	import Tags from '../Tags.svelte';

	interface Props {
		heading: string;
		created_at: string;
		tags?: string[];
		navigateBackFallbackUrl: string;
		children?: Snippet;
	}

	let { navigateBackFallbackUrl, heading, created_at, tags, children }: Props = $props();
</script>

<main class="relative mx-auto max-w-2xl">
	<div
		class="text-muted-foreground mx-auto mb-12 max-w-2xl lg:absolute lg:-top-2.5 lg:-left-24 lg:mb-0"
	>
		<button
			class="rounded-full border-1 border-solid p-2 hover:cursor-pointer"
			onclick={() => navigateBack(navigateBackFallbackUrl)}
		>
			<ArrowLeft size={24} strokeWidth={1.5} />
		</button>
	</div>

	<time class="body-secondary relative z-10 flex items-center pl-3.5 text-sm">
		<span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
			<span class="h-4 w-0.5 rounded-full bg-neutral-900 dark:bg-white"></span>
		</span>
		<span class="text-muted-foreground">{dayjs(created_at).format('DD MMM YYYY')}</span>
	</time>

	<h1 class="mt-7 md:mt-10 lg:mt-12">{heading}</h1>

	<div>
		<!-- view counts -->

		<!-- estimated read time -->
	</div>

	{#if tags}
		<Tags class="my-7 md:my-10 lg:my-12" {tags} />
	{/if}

	{#if children}
		{@render children()}
	{/if}
</main>

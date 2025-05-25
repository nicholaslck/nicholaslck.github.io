<script lang="ts" generics="T extends Partial<{ slug: string }>">
	import type { Snippet } from 'svelte';
	import { Separator } from '../ui/separator';
	import { datetimeFormatter, goBack } from '$lib/utils';
	import { SquareArrowLeft } from 'lucide-svelte';

	interface Props {
		heading: string;
		created_at: string;
		goBackUrl?: string;
		children?: Snippet;
	}

	let { goBackUrl, heading, created_at, children }: Props = $props();
</script>

<div class="flex items-start space-x-8">
	{#if goBackUrl}
		<button class="mt-1" onclick={() => goBack(goBackUrl)}>
			<SquareArrowLeft size={32} strokeWidth={1.5} />
		</button>
	{/if}

	<div>
		<h1>{heading}</h1>
		<p class="muted pb-6">{datetimeFormatter(created_at)}</p>
	</div>
</div>

<Separator class="mb-8" />

{@render children?.()}

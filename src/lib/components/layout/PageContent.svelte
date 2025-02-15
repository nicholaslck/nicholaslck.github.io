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

{#if goBackUrl}
	<button onclick={() => goBack(goBackUrl)}>
		<SquareArrowLeft size={32} strokeWidth={1.5} />
	</button>
{/if}

<p class="muted">{datetimeFormatter(created_at)}</p>

<h1 class="mt-2 pb-6">{heading}</h1>

<Separator class="mb-8" />

{@render children?.()}

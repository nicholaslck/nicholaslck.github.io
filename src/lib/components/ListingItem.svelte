<script lang="ts">
	import { datetimeFormatter } from '$lib/utils';
	import { Button } from './ui/button';
	import { ExternalLink } from 'lucide-svelte';

	interface Props {
		href: string;
		created_at?: string;
		title: string;
		abstract: string;
		moreButtonText?: string;
		isExternal?: boolean;
	}

	const { href, created_at, title, abstract, moreButtonText, isExternal }: Props = $props();
</script>

<div class="hover:bg-accent p-4 pb-8 -m-4 rounded-md">
	<a {href} target={isExternal ? '_blank' : '_self'}>
		{#if created_at}
			<p class="muted">{datetimeFormatter(created_at)}</p>
		{/if}

		<div class="large mt-2">
			{title}
			{#if isExternal}
				<ExternalLink class="inline w-5" />
			{/if}
		</div>

		<p class="muted !mt-2 ps-0">{abstract}</p>
	</a>
</div>

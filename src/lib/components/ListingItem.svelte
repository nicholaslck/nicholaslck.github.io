<script lang="ts">
	import { dateFormatter } from '$lib/utils';
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

<div class="hover:bg-accent -m-4 rounded-md p-4 pb-8">
	<a {href} target={isExternal ? '_blank' : '_self'}>
		{#if created_at}
			<p class="muted">{dateFormatter(created_at)}</p>
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

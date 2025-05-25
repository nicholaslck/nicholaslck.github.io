<script lang="ts">
	import { datetimeFormatter } from '$lib/utils';
	import { Button } from './ui/button';

	interface Props {
		href: string;
		created_at?: string;
		title: string;
		abstract: string;
		moreButtonText: string;
	}

	const { href, created_at, title, abstract, moreButtonText }: Props = $props();
</script>

<a {href}>
	{#if created_at}
		<p class="muted">{datetimeFormatter(created_at)}</p>
	{/if}

	<div class="large mt-2">{title}</div>

	<p class="muted !mt-2 ps-0">{abstract}</p>
	<Button class="ps-0" variant="link" {href}>{moreButtonText}</Button>
</a>

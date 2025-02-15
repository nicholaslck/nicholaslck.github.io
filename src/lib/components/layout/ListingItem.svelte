<script lang="ts">
	import { datetimeFormatter } from '$lib/utils';
	import { Button } from '../ui/button';

	interface Props {
		href: string;
		created_at: string;
		title: string;
		abstract: string;
		moreButtonText: string;
	}

	const { href, created_at, title, abstract, moreButtonText }: Props = $props();
</script>

<a {href}>
	<p class="muted">{datetimeFormatter(created_at)}</p>
	<div class="large mt-2">{title}</div>
	<p class="muted !mt-2 ps-4">{abstract}</p>
	<Button variant="link" {href}>{moreButtonText}</Button>
</a>

<script lang="ts">
	import { dateFormatter } from '$lib/utils';
	import BoxDatetime from './ui/box/box-datetime.svelte';
	import Box from './ui/box/box.svelte';
	import { Button } from './ui/button';
	import { ExternalLink } from 'lucide-svelte';

	interface Props {
		href: string;
		created_at?: string;
		title: string;
		abstract: string;
		isExternal?: boolean;
	}

	const { href, created_at, title, abstract, isExternal }: Props = $props();
</script>

<div>
	<a {href} target={isExternal ? '_blank' : '_self'}>
		<Box class="hover:bg-accent md:col-span-3">
			{#if created_at}
				<BoxDatetime datetime={created_at} />
			{/if}

			<div class="body-primary text-lg font-semibold tracking-tight">
				{title}
			</div>

			<!-- <div class="flex w-full flex-wrap gap-2">
			{#each blogItems[0].frontmatter.tags as Array<string> as tag}
				<Badge variant="secondary">{tag}</Badge>
			{/each}
		</div> -->

			<div class="text-muted-foreground line-clamp-6 text-sm">
				{abstract}
			</div>
		</Box>
	</a>
</div>

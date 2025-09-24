<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { cn } from '$lib/utils';
	import { Tag } from 'lucide-svelte';

	interface Props {
		tags: string[];
		class?: string;
	}

	let { tags, class: className }: Props = $props();
</script>

<div class={cn('flex w-full flex-wrap gap-2', className)}>
	{#each tags as tag}
		<Badge variant="secondary">
			<Tag />
			<span>{tag}</span>
		</Badge>
	{/each}
</div>

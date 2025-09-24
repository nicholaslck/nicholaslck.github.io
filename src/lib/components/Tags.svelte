<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Tag } from 'lucide-svelte';

	interface Props {
		tags: string[];
	}

	let { tags }: Props = $props();
</script>

<div class="flex w-full flex-wrap gap-2">
	{#each tags as tag}
		<Badge variant="secondary">
			<Tag />
			<span>{tag}</span>
		</Badge>
	{/each}
</div>

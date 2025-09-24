<script lang="ts">
	import Tags from './Tags.svelte';
	import BoxDatetime from './ui/box/box-datetime.svelte';
	import Box from './ui/box/box.svelte';

	interface Props {
		href: string;
		title: string;
		abstract: string;
		date?: string;
		dateIsYearOnly?: boolean;
		tags?: string[];
		isExternal?: boolean;
	}

	const { href, date, title, abstract, isExternal, dateIsYearOnly, tags }: Props = $props();
</script>

<div>
	<a {href} target={isExternal ? '_blank' : '_self'}>
		<Box class="hover:bg-accent md:col-span-3">
			{#if date}
				<BoxDatetime datetime={date} isYearOnly={dateIsYearOnly} />
			{/if}

			<div class="body-primary text-lg font-semibold tracking-tight">
				{title}
			</div>

			{#if tags}
				<Tags {tags} />
			{/if}

			<div class="text-muted-foreground line-clamp-6 text-sm">
				{abstract}
			</div>
		</Box>
	</a>
</div>

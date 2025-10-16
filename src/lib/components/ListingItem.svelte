<script lang="ts">
	import Tags from './Tags.svelte';
	import Datetime from './Datetime.svelte';
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

<div data-aos="fade-up" data-aos-offset="-10" data-aos-once="true">
	<a {href} target={isExternal ? '_blank' : undefined}>
		<Box class="md:col-span-3">
			{#if date}
				<Datetime datetime={date} isYearOnly={dateIsYearOnly} />
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

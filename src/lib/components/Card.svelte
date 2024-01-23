<script>
	import dateFormat from 'dateformat';

	export let href = '';
	export let thumbnail = '';
	export let title = '';
	export let excerpt = '';
	export let date = '';
	export let target = '_self';

	$: displayDate = dateFormat(new Date(date), "dd mmm, yyyy")
</script>

<a {href} class="card block max-w-sm" target={target}>
	{#if thumbnail}
		<div class="relative w-full h-40">
			<img class="w-full h-40 object-cover" src={thumbnail} alt={'thumbnail-' + title} />
			<div class="backdrop absolute left-0 top-0 h-full w-full" />
		</div>
	{/if}
	<div class="px-4 py-4">
		<div class="mb-2 text-xl font-bold">{title}</div>
		<p class="mb-2">{excerpt}</p>
	</div>
	<div class="card-footer">
		<p class="text-right">
			{displayDate}
		</p>
	</div>
</a>

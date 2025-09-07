<script>
	import { dateFormatter } from '$lib/utils';

	let { datetime } = $props();

	let formattedDatetime = $derived(dateFormatter(datetime));
</script>

<time class="body-secondary relative z-10 flex items-center pl-3.5 text-sm">
	<span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
		<span class="h-4 w-0.5 rounded-full bg-neutral-900 dark:bg-white"></span>
	</span>
	{formattedDatetime}
</time>

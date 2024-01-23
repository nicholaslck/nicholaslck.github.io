<script>
	import  { postprocessHtml } from '$lib/utils/html';

	export let html = '';

	$: postprocessed = postprocessHtml(html);
</script>

<div class="markdown-render-floor py-8">
	{@html postprocessed}
</div>

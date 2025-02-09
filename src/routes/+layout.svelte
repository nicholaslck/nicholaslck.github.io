<script lang="ts">
	import '../app.css';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { ModeWatcher } from 'mode-watcher';
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>

<ModeWatcher />
<ParaglideJS {i18n}>
	<!-- header -->
	<Header />

	<section class="container pt-12">
		{@render children()}
	</section>
</ParaglideJS>

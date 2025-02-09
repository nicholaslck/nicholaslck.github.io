<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<ModeWatcher />
<ParaglideJS {i18n}>
	<Header />

	<section class="container pt-12">
		{@render children()}
	</section>

	<Footer />
</ParaglideJS>

<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SEO from '$lib/components/SEO.svelte';

	let { children, data } = $props();
	let global = $derived(data.config.global);
</script>

<SEO config={global} />

<ModeWatcher />
<ParaglideJS {i18n}>
	<Header />

	<section class="container py-12">
		{@render children()}
	</section>

	<Footer />
</ParaglideJS>

<script lang="ts">
	import 'aos/dist/aos.css';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import AOS from 'aos';
	import { browser } from '$app/environment';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	if (browser) AOS.init();

	let { children, data } = $props();
	let global = $derived(data.config.global);
</script>

<SEO config={global} />

<ModeWatcher />
<ParaglideJS {i18n}>
	<Header />

	<section class="container pt-32 pb-12">
		{@render children()}
	</section>

	<Footer />
</ParaglideJS>

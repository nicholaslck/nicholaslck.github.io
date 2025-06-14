<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SEO from '$lib/components/SEO.svelte';

	let { children, data } = $props();
	let global = $derived(data.config.global);

	let avatarTransformY = $state(0); // from 0% to 330%
	let avatarTransformScale = $state(1); // from 1 to 3.2

	// onMount(() => {
	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => window.removeEventListener('scroll', handleScroll);
	// });
</script>

<SEO config={global} />

<ModeWatcher />
<ParaglideJS {i18n}>
	<Header {avatarTransformY} {avatarTransformScale} />

	<section class="container py-12">
		{@render children()}
	</section>

	<Footer />
</ParaglideJS>

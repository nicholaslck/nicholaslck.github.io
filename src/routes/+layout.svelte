<script>
	import '../app.postcss';
	import { fade, slide } from 'svelte/transition';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	export let data;
</script>

<div class="m-auto mt-8 max-w-[1200px]">
	{#if !$page.url.pathname.includes('/blogs/')}
		<div transition:slide>
			<h1 class="h1">Nicholas's Personal Site</h1>
			<p>Welcome, hunter!</p>
			<p>
				Well... as you can see, there are nothing here. Previously I have my own personal site, but
				I decided not to continue that domain and wanted to move to github.io. At the same time, I
				think, why not do a revamp of the site and make it more a comfortable space for me to
				publish contents? So here it is, my new site, in progress. I will try to post some of my
				thoughts here, and maybe some of my projects. I hope you enjoy your stay here. Stay tuned.
			</p>
		</div>
	{/if}

	<TabGroup justify="justify-center">
		<TabAnchor href="/" selected={$page.url.pathname === '/'}>Blogs</TabAnchor>
		<TabAnchor href="/projects" selected={$page.url.pathname === '/projects'}>Projects</TabAnchor>
	</TabGroup>

	{#key data.pathname}
		<div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
			<slot />
		</div>
	{/key}
</div>

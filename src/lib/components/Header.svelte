<script lang="ts">
	import { page } from '$app/state';
	import * as Tabs from '$lib/components/ui/tabs';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Avatar from '$lib/components/ui/avatar';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { resetMode, setMode } from 'mode-watcher';

	const { avatarTransformY, avatarTransformScale } = $props<{
		avatarTransformY: number;
		avatarTransformScale: number;
	}>();

	const current = $derived.by(() => {
		const segments = page.url.pathname.split('/');
		if (segments.length < 2) return '';
		return segments[1];
	});

	const avatar = $derived(page.data?.config.global.avatar as string | undefined);
	const avatarTransformVar = $derived(
		`translate(0, ${avatarTransformY}%) scale(${avatarTransformScale})`
	);

	let scrollY = $state(0);
	let lastScrollY = $state(0);
	let lastPinnedScrollY = $state(0);
	let isHeaderSticky = $state(false);
	let isHeaderStickyShown = $state(true);
	const throttleOffset = 160;

	$effect(() => {
		if (scrollY <= 0) {
			// Reset the header state when at the top of the page
			isHeaderSticky = false;
			isHeaderStickyShown = true;
		} else if (scrollY !== lastScrollY) {
			const scrollingDown = scrollY > lastScrollY;
			const scrollingDistance = Math.abs(scrollY - lastPinnedScrollY);

			if (scrollingDown) {
				// scrolling down
				isHeaderStickyShown = false;
				lastPinnedScrollY = scrollY;
			} else {
				// scrolling up
				if (scrollingDistance > throttleOffset) {
					isHeaderSticky = true;
					isHeaderStickyShown = true;
					lastPinnedScrollY = scrollY;
				}
			}
		}
		lastScrollY = scrollY;
	});
</script>

<svelte:window bind:scrollY />
<header
	class={[
		'container flex items-center justify-between pt-6 pb-4',
		'bg-gradient-to-b from-gray-200 dark:from-gray-800 to-transparent',
		isHeaderSticky ? 'sticky' : 'static',
		isHeaderStickyShown ? 'top-0' : '-top-[100px]'
	]}
>
	<a href="/">
		<Avatar.Root
			class="header-avatar origin-left border-1 "
			style={'--avatar-transform: ' + avatarTransformVar}
		>
			<Avatar.Image src={avatar} alt="Nicholas" />
			<Avatar.Fallback class="animate-pulse" />
		</Avatar.Root>
	</a>

	<Tabs.Root value={current}>
		<Tabs.List>
			<!-- <a href="/about-me"><Tabs.Trigger value="about-me">About me</Tabs.Trigger></a> -->
			<a class="cursor-pointer" href="/blogs">
				<Tabs.Trigger value="blogs">Blogs</Tabs.Trigger>
			</a>
			<a class="cursor-pointer" href="/projects">
				<Tabs.Trigger value="projects">Projects</Tabs.Trigger>
			</a>
		</Tabs.List>
	</Tabs.Root>

	<DropdownMenu.Root>
		<DropdownMenu.Trigger class={buttonVariants({ variant: 'outline', size: 'icon' })}>
			<Sun
				class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
			/>
			<span class="sr-only">Toggle theme</span>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content align="end">
			<DropdownMenu.Item onclick={() => setMode('light')}>Light</DropdownMenu.Item>
			<DropdownMenu.Item onclick={() => setMode('dark')}>Dark</DropdownMenu.Item>
			<DropdownMenu.Item onclick={() => resetMode()}>System</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</header>

<style>
	header {
		transition: top 0.3s ease-in-out;
	}
	:global(.header-avatar) {
		transform: var(--avatar-transform, scale(1));
	}
</style>

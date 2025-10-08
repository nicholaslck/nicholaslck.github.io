<script lang="ts">
	import { page } from '$app/state';
	import * as Tabs from '$lib/components/ui/tabs';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Avatar from '$lib/components/ui/avatar';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { resetMode, setMode } from 'mode-watcher';
	import { onMount } from 'svelte';

	let scrollY = $state(0);
	let headerHeight = $state(80);
	let headerInnerOffsetTop = $state(0);
	let lastScrollY = $state(0);
	const headerContainerHeight = 80;

	const current = $derived.by(() => {
		const segments = page.url.pathname.split('/');
		if (segments.length < 2) return '';
		return segments[1];
	});

	const avatar = $derived(page.data?.config.global.avatar as string | undefined);
	let avatarTransform = $derived.by(() => {
		if (page.url.pathname !== '/') {
			return { yPercent: 0, scale: 1 };
		} else {
			const ratio = Math.max(160 - scrollY, 0) / 160; // from 0 to 1)
			const yPercent = 330 * ratio; // from 0% to 330%
			const scale = 2.2 * ratio + 1; // from 1 to 3.2

			return {
				yPercent,
				scale
			};
		}
	});
	const avatarTransformVar = $derived(
		`translate(0, ${avatarTransform.yPercent}%) scale(${avatarTransform.scale})`
	);

	// redo scrolling with requestAnimationFrame
	onMount(() => {
		let ticking = false;
		function onScroll() {
			scrollY = window.scrollY;

			if (scrollY <= 0) {
				// Reset the header state when at the top of the page
				headerInnerOffsetTop = 0;
			} else if (page.url.pathname === '/' && scrollY < 160) {
				// If on the homepage, adjust the header height based on scroll position
				headerInnerOffsetTop = Math.max(0, scrollY);
			} else if (scrollY > lastScrollY) {
				// scrolling down
				if (scrollY > headerInnerOffsetTop + headerContainerHeight) {
					headerInnerOffsetTop = Math.max(0, scrollY - headerContainerHeight);
				}
			} else {
				// scrolling up
				if (scrollY < headerInnerOffsetTop) {
					headerInnerOffsetTop = Math.max(0, scrollY);
				}
			}

			headerHeight = headerContainerHeight + headerInnerOffsetTop; // must
			lastScrollY = scrollY;
			ticking = false;
		}
		function scrollEventListener() {
			if (ticking) return;
			window.requestAnimationFrame(onScroll);
			ticking = true;
		}
		window.addEventListener('scroll', scrollEventListener);
		window.requestAnimationFrame(onScroll);
		return () => {
			window.removeEventListener('scroll', scrollEventListener);
		};
	});
</script>

<header class="absolute top-0 left-0 w-full" style="height: {headerHeight}px;">
	<div style="height: {headerInnerOffsetTop}px;" aria-hidden="true"></div>
	<div
		class={['from-primary/30 z-10 bg-gradient-to-b to-transparent', 'relative bottom-0 pt-6 pb-4']}
	>
		<div class="container flex w-full items-center justify-between">
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

					<a class="rounded-xl" href="/blogs"><Tabs.Trigger value="blogs">Blogs</Tabs.Trigger> </a>

					<a class="cursor-pointer" href="/projects">
						<Tabs.Trigger value="projects">Projects</Tabs.Trigger>
					</a>
				</Tabs.List>
			</Tabs.Root>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger
					class={buttonVariants({ variant: 'outline', size: 'icon' }) + ' rounded-full!'}
				>
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
		</div>
	</div>
</header>

<style>
	header {
		transition: top 0.3s ease-in-out;
	}
	:global(.header-avatar) {
		transform: var(--avatar-transform, scale(1));
	}
</style>

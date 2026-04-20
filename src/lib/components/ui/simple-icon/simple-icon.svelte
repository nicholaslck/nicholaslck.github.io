<script module lang="ts">
	const cdnUrl = 'https://cdn.simpleicons.org';
	const defaultSize = 24;
</script>

<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { mode } from 'mode-watcher';
	import Skeleton from '../skeleton/skeleton.svelte';

	interface Props extends HTMLImgAttributes {
		iconId: string;
		size?: number;
		width?: number;
		height?: number;
		color?: string;
		darkModeColor?: string;
	}

	let { iconId, size, width, height, color, darkModeColor, ...reset }: Props = $props();

	let srcBase = $derived(cdnUrl.concat('/', iconId));
</script>

{#if mode.current}

{#if mode.current === 'dark'}
	<img
		width={size || width || defaultSize}
		height={size || height || defaultSize}
		src={srcBase.concat('/', darkModeColor || 'bac2de')}
		{...reset}
	/>
{:else}
	<img
		width={size || width || defaultSize}
		height={size || height || defaultSize}
		src={srcBase.concat('/', color || 'black')}
		{...reset}
	/>
{/if}
{:else}
  <Skeleton class="rounded w-8 h-8" />
{/if}

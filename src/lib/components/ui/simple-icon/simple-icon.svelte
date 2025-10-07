<script module lang="ts">
	const cdnUrl = 'https://cdn.simpleicons.org';
</script>

<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { mode } from 'mode-watcher';

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

{#if mode.current === 'dark'}
	<img
		width={size || width || 32}
		height={size || height || 32}
		src={srcBase.concat('/', darkModeColor || 'white')}
		{...reset}
	/>
{:else}
	<img
		width={size || width || 32}
		height={size || height || 32}
		src={srcBase.concat('/', color || 'black')}
		{...reset}
	/>
{/if}

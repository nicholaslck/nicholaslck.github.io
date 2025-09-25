<script module lang="ts">
	const cdnUrl = 'https://cdn.simpleicons.org';
</script>

<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	interface Props extends HTMLImgAttributes {
		iconId: string;
		size?: number;
		width?: number;
		height?: number;
		color?: string;
		darkModeColor?: string;
	}

	let { iconId, size, width, height, color, darkModeColor, ...reset }: Props = $props();

	let src = $derived.by(() => {
		let segments = [cdnUrl, iconId];
		if (color) {
			segments.push(color);
		}
		if (color && darkModeColor) {
			segments.push(darkModeColor);
		}
		return segments.join('/');
	});
</script>

<img width={size || width || 32} height={size || height || 32} {src} {...reset} />

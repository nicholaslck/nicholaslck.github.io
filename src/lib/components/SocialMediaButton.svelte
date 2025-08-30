<script lang="ts">
	import { SimpleIcon } from '$lib/components/ui/simple-icon';

	interface Props {
		iconId: string;
		href: string;
		size?: number;
		color?: string;
		darkModeColor?: string;
	}

	let { href, iconId, size, color, darkModeColor }: Props = $props();
</script>

<a {href} target="_blank" rel="noopener noreferrer">
	<SimpleIcon {size} {iconId} color={color || 'black'} darkModeColor={darkModeColor || 'white'} />
</a>

<script lang="ts">
	import SocialMediaButton from '$lib/components/SocialMediaButton.svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import BoxDatetime from '$lib/components/ui/box/box-datetime.svelte';
	import BoxNameTag from '$lib/components/ui/box/box-name-tag.svelte';
	import Box from '$lib/components/ui/box/box.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Mail, Linkedin } from 'lucide-svelte/icons';

	let { data } = $props();
	let blogItems = data.items;
</script>

<!-- Dynamic downscale from 8rem to 2.5rem -->

<!-- Headline -->
<h1 class="mt-36">Software Engineer, adventurer,<br />and a great day dreamer</h1>

<p class="text-muted-foreground">
	Hi, I’m Nicholas 👋 — a software engineer passionate about building full-stack applications and
	integrating AI agents into real-world workflows. Currently on a working holiday in New Zealand, I
	split my time between coding 👨‍💻, exploring the outdoors 🏞️, and contributing to open-source
	projects 🌐. I love challenges 🧩, learning by doing 🛠️, and finding creative solutions to
	problems big and small ✨.
</p>

<div class="mb-20">
	<div class="mt-8 flex space-x-4">
		<SocialMediaButton iconId="github" size={24} href="https://github.com/nicholaslck" />
		<a href="https://www.linkedin.com/in/nicholaslck">
			<Linkedin size={24} />
		</a>
		<SocialMediaButton iconId="threads" size={24} href="https://www.threads.com/@nicholaslck" />
		<a href="mailto:nicholaslck@gmail.com">
			<Mail size={24} />
		</a>
	</div>
</div>

<!-- Latest blog post -->
<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6">
	<Box class="md:col-span-3">
		<BoxNameTag name="Latest blog" iconId="sparkles" />
		<BoxDatetime datetime={blogItems[0].frontmatter.created_at} />

		<div class="body-primary text-lg font-semibold tracking-tight">
			{blogItems[0].frontmatter.title as string}
		</div>

		<div class="flex w-full flex-wrap gap-2">
			{#each blogItems[0].frontmatter.tags as Array<string> as tag}
				<Badge variant="secondary">{tag}</Badge>
			{/each}
		</div>

		<div class="text-muted-foreground line-clamp-6 text-sm">
			{blogItems[0].frontmatter.abstract}
		</div>
	</Box>

	<!-- Work experience highlight -->
	<Box class="md:col-span-3">
		<BoxNameTag name="Experiences" iconId="waypoints" />
		Experiences
	</Box>
	<!-- Project list entry -->
	<Box class="md:col-span-2">
		<BoxNameTag name="Projects" iconId="puzzle" />
	</Box>

	<!-- Embedded music -->
	<!-- <Box>Music</Box> -->

	<!-- Contact me -->
	<Box class="md:col-span-2">
		<BoxNameTag name="Find me" iconId="message-square" />
		<div class="text-sm text-gray-600 dark:text-gray-400">
			Have an idea in your mind?<br />Let's chat about your next project!
		</div>

		<div class="flex w-full gap-2">
			<Button href="mailto:nicholaslck@gmail.com" variant="outline" class="w-full">Email me</Button>

			<Button
				href="https://www.threads.com/@nicholaslck?igshid=NTc4MTIwNjQ2YQ=="
				variant="outline"
				class="w-full">DM on Threads</Button
			>
		</div>
	</Box>

	<!-- Random Project Highlight -->
	<Box class="md:col-span-2">Random Project Highlight</Box>
</div>

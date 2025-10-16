<script lang="ts">
	import SocialMediaButton from '$lib/components/SocialMediaButton.svelte';
	import Tags from '$lib/components/Tags.svelte';
	import Datetime from '$lib/components/Datetime.svelte';
	import BoxNameTag from '$lib/components/ui/box/box-name-tag.svelte';
	import Box from '$lib/components/ui/box/box.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Mail, Linkedin } from 'lucide-svelte/icons';
	import dayjs from 'dayjs';
	import Skeleton from '$lib/components/ui/skeleton/skeleton.svelte';

	let { data } = $props();

	let showProjectMore = $state(false);
</script>

<!-- Dynamic downscale from 8rem to 2.5rem -->

<!-- Headline -->
<h1 class="mt-36 max-w-2xl">Software Engineer, <span class="text-primary">adventurer,</span><br />and a great day dreamer</h1>

<p class="text-muted-foreground max-w-2xl">
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
	{#if data.latestBlog}
		<Box href={data.latestBlog.slug} class="md:col-span-3">
			<BoxNameTag name="Latest blog" iconId="sparkles" />
			<Datetime datetime={data.latestBlog.created_at} />

			<div class="body-primary text-lg font-semibold tracking-tight">
				{data.latestBlog.title as string}
			</div>

			<Tags tags={data.latestBlog.tags} />

			<div class="text-muted-foreground line-clamp-6 text-sm">
				{data.latestBlog.abstract}
			</div>
		</Box>
	{/if}

	<!-- Work experience highlight -->
	<Box class="md:col-span-3">
		<BoxNameTag name="Experiences" iconId="waypoints" />
		<div class="h-60 w-full overflow-y-auto">
			{#each data.experiences as experience (experience.slug)}
				{@const startDate = new Date(experience.start_date)}
				{@const endDate = experience.end_date ? new Date(experience.end_date) : new Date()}
				{@const isCurrent = experience.is_current}
				<div class="flex flex-nowrap items-center justify-start gap-4 py-4">
					<div>
						<img
							src={experience.icon.src}
							alt={`${experience.company} logo`}
							class="h-12 w-12 rounded-md object-cover"
						/>
					</div>
					<div class="font-medium">{experience.company}</div>
					<div class="text-muted-foreground flex-1 text-xs">{experience.position}</div>
					<div class="text-muted-foreground text-xs">
						<time datetime={dayjs(startDate).format('YYYY-MM')}
							>{dayjs(startDate).format('MMM YYYY')}</time
						>
						-
						<time datetime={dayjs(endDate).format('YYYY-MM')}>
							{isCurrent ? 'Present' : dayjs(endDate).format('MMM YYYY')}
						</time>
					</div>
				</div>
			{/each}
		</div>
		<Button class="w-full" variant="outline" onclick={() => alert('Not yet implemented')}>Download my CV</Button>
	</Box>

	<!-- Project list entry -->
	<div
		class="relative md:col-span-2 "
		role="button"
		tabindex="0"
		onmouseover={() => (showProjectMore = true)}
		onmouseleave={() => (showProjectMore = false)}
		onfocus={() => (showProjectMore = true)}
		onblur={() => (showProjectMore = false)}
		onkeydown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				window.location.href = '/projects';
			}
		}}
	>
		<Box>
			<BoxNameTag name="Projects" iconId="puzzle" />
			<a href="/projects" tabindex="-1" class="relative block overflow-clip rounded-2xl">
				<img src={data.latestProject?.cover_image?.src} alt={data.latestProject?.title} />
				{#if showProjectMore}
					<div
						class="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-gray-700/50"
					>
						<Button variant="secondary" class="hover:bg-secondary">View more</Button>
					</div>
				{/if}
			</a>
		</Box>
	</div>

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

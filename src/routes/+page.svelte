<script lang="ts">
	import ListingItem from '$lib/components/ListingItem.svelte';
	import SocialMediaButton from '$lib/components/SocialMediaButton.svelte';
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

<div>
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
<ol class="mt-20">
	{#each blogItems as item (item.slug)}
		<li class="pb-8">
			<ListingItem
				href={`/blogs/${item.slug}`}
				created_at={item.frontmatter.created_at as string}
				title={item.frontmatter.title as string}
				abstract={item.frontmatter.abstract as string}
			/>
		</li>
	{/each}
</ol>

<!-- Work experience highlight -->
<div>Work experience</div>

<!-- Project list entry -->
<div>Projects</div>

<!-- Pinned music -->
<div>Music</div>

<!-- Contact me -->
<div>Contact me</div>

<!-- Random Project Highlight -->
<div>Random Project Highlight</div>

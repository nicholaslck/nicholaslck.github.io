<script lang="ts">
	import { page } from '$app/state';
	import SocialMediaButton from '$lib/components/SocialMediaButton.svelte';
	import { Mail, Linkedin } from 'lucide-svelte/icons';
	import { mode } from 'mode-watcher';

	let _mode = $state<string | undefined>('');
	mode.subscribe((value) => {
		_mode = value;
	});
</script>

<!-- Dynamic downscale from 8rem to 2.5rem -->

<h1 class="mt-36">Software Engineer, adventurer,<br />and a great day dreamer</h1>

<p class="text-primary/65 dark:text-primary/70">
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

<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius, eaque, aperiam quasi
	perferendis asperiores ea assumenda debitis sequi doloremque saepe nobis voluptates ad, voluptas
	iste quod est fugiat molestias!
</p>

<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius, eaque, aperiam quasi
	perferendis asperiores ea assumenda debitis sequi doloremque saepe nobis voluptates ad, voluptas
	iste quod est fugiat molestias!
</p>

<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius, eaque, aperiam quasi
	perferendis asperiores ea assumenda debitis sequi doloremque saepe nobis voluptates ad, voluptas
	iste quod est fugiat molestias!
</p>

<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius, eaque, aperiam quasi
	perferendis asperiores ea assumenda debitis sequi doloremque saepe nobis voluptates ad, voluptas
	iste quod est fugiat molestias!
</p>

<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius, eaque, aperiam quasi
	perferendis asperiores ea assumenda debitis sequi doloremque saepe nobis voluptates ad, voluptas
	iste quod est fugiat molestias!
</p>

<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius, eaque, aperiam quasi
	perferendis asperiores ea assumenda debitis sequi doloremque saepe nobis voluptates ad, voluptas
	iste quod est fugiat molestias!
</p>

<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius, eaque, aperiam quasi
	perferendis asperiores ea assumenda debitis sequi doloremque saepe nobis voluptates ad, voluptas
	iste quod est fugiat molestias!
</p>

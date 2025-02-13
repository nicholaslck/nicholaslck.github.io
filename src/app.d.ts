// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			config: {
				global: Record<string, unknown>;
				[key: string]: unknown;
			};
		}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module '*.md' {
	import type { SvelteComponent } from 'svelte';
	export default class Comp extends SvelteComponent {}
	export const metadata: Record<string, unknown>;
}

export {};

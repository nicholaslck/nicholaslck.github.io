import { goto } from '$app/navigation';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & {
	ref?: U | null;
};

export function dateFormatter(
	datetime: string | Date,
	ignore?: {
		day?: boolean;
		month?: boolean;
		year?: boolean;
	}
) {
	if (typeof datetime === 'string') {
		datetime = new Date(datetime);
	}

	return datetime.toLocaleDateString('en-UK', {
		year: ignore?.year ? undefined : 'numeric',
		month: ignore?.month ? undefined : 'short',
		day: ignore?.day ? undefined : 'numeric'
	});
}

export function goBack(fallbackUrl: string | URL) {
	if (!fallbackUrl) throw new Error('fallbackUrl must be provided');

	if (window.history.length <= 1) goto(fallbackUrl);

	const referrerOrigin = document.referrer ? new URL(document.referrer).origin : '';
	if (referrerOrigin && referrerOrigin !== window.origin) goto(fallbackUrl);

	window.history.back();
}

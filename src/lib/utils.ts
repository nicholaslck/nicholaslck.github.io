import { goto } from '$app/navigation';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function datetimeFormatter(datetime: string | Date) {
	if (typeof datetime === 'string') {
		datetime = new Date(datetime);
	}

	return datetime.toLocaleDateString('en-UK', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

export function goBack(fallbackUrl: string | URL) {
	if (!fallbackUrl) throw new Error('fallbackUrl must be provided');

	if (window.history.length <= 1) goto(fallbackUrl);

	const referrerOrigin = document.referrer ? new URL(document.referrer).origin : '';
	if (referrerOrigin && referrerOrigin !== window.origin) goto(fallbackUrl);

	window.history.back();
}

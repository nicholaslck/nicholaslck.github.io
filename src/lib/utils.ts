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

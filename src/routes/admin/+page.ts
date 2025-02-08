import { redirect } from '@sveltejs/kit';

export const load = () => {
	// 301 Moved permanently to /admin/index.html
	redirect(301, '/admin/index.html');
};

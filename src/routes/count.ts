import { derived } from 'svelte/store';
import { page } from '$app/stores';

export const count = derived(page, ({ url }) => {
	const param = url.searchParams.get('count');
	return param ? parseInt(param) : 100;
});

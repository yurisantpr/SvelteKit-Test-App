import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url, fetch }) => {
	const name = url.searchParams.get('name');

	if (!name) return { name: null, age: null };

	const res = await fetch(`/api/age?name=${name}`);
	const data: { name: string; age: number } = await res.json();

	return {
		name: data.name,
		age: data.age
	};
};

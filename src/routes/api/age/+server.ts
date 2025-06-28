import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const name = url.searchParams.get('name');

	if (!name) {
		return new Response(JSON.stringify({ error: 'Missing name' }), { status: 400 });
	}

	const res = await fetch(`https://api.agify.io?name=${name}`);
	const data: { name: string; age: number } = await res.json();

	return new Response(JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};

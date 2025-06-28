export async function load({ url, fetch }) {
	const name = url.searchParams.get('name');

	if (!name) return { name: null, age: null };

	const res = await fetch(`/api/age?name=${name}`);
	const data = await res.json();

	return {
		name: data.name,
		age: data.age
	};
}

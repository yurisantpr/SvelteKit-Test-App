<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onDestroy } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let name = $page.url.searchParams.get('name') || '';
	let timeout: ReturnType<typeof setTimeout>;

	function handleInput(event: Event) {
		clearTimeout(timeout);
		name = (event.target as HTMLInputElement).value;

		if (name.trim() === '') return;

		timeout = setTimeout(() => {
			const searchParams = new URLSearchParams({ name });
			goto(`/?${searchParams}`, { replaceState: true });
		}, 600);
	}

	onDestroy(() => clearTimeout(timeout));
</script>

<main>
	<h1>SvelteKit Test App</h1>
	<p>Bem vindo! Esta é uma entediante aplicação de teste.</p>

	<input
		type="text"
		placeholder="Digite um nome"
		bind:value={name}
		on:input={handleInput}
	/>

	{#if data.name}
    <div>
		<p><strong>Nome:</strong> {data.name}</p>
		<p><strong>Idade estimada:</strong> {data.age}</p>
    </div>
	{/if}
</main>

<style>
	main {
		padding: 2rem;
		max-width: 500px;
		margin: auto;
		font-family: system-ui, sans-serif;
	}

    :global(body) {
        background: linear-gradient(90deg,rgba(4, 33, 10, 1) 0%, rgba(6, 43, 13, 1) 50%, rgba(18, 102, 31, 1) 100%);
    }

	input {
		width: 100%;
		padding: 0.6rem 1rem;
		font-size: 1rem;
		border-radius: 8px;
		border: 2px solid #ccc;
		margin-top: 1rem;
	}

    input:focus {
		outline: none;
		box-shadow: 0 0 0 1px #A8FF60;
	}

    h1 {
        color: #ccc;
        font-family: 'Manrope', sans-serif;
    }

	p {
		margin-top: 1rem;
        color: #ccc;
        font-family: 'Manrope', sans-serif;
	}

    div {
        margin-top: 1rem;
        border-radius: 10px;
        padding: 1rem;
        border-color: #ccc;
        border-style: solid;
        border-width: 1px;
        width: 100%;
    }
</style>

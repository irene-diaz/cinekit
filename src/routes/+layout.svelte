<!--<Buscador />-->
<script>
	//importamos para saber si esta en proceso de navegacion o no
	import { navigating } from '$app/stores';
	import { page } from '$app/stores';
	import { darkmode } from '../stores/store';

	import Header from '../components/Header.svelte';
	import Header2 from '../components/Header2.svelte';
	import Buscador from '../components/Buscador.svelte';

	export let data;
	const title = data.title;
	let peliculas = data.peliculas;
	let user = data.user;
</script>

<footer class={$darkmode ? 'darkmode' : ''}>
	{#if $navigating}
		<div>Loading...</div>
	{:else}
		<Header2 />
		<Header />
		{#if $page.data.user}
			<h3 style="color:green">Welcome {user}</h3>
		{:else}
			<h3 style="color:rgb(246, 102, 126)">No se ha iniciado sesion</h3>
		{/if}

		<!--Mostramos el titulo y imagen de todas las peliculas-->
		<!--  <link rel="stylesheet" href="../css/cards.css" />  -->
		<Buscador {peliculas} />
		<slot />
	{/if}
</footer>

<style>
	:global(#darkmode) {
		background-color: black;
		color: white;
	}
	h3 {
		margin-left: 2rem;
	}
</style>

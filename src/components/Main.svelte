<script>
	//import Movies from '../lib/Movies.svelte';
	import Categorias from '../components/Categorias.svelte';
	import Estrenos from '../components/Estrenos.svelte';
	import * as samples from '../components/samples';
	import Resultado from '../components/Resultado.svelte';
	export let movies = samples.peliculas || [];
	let copyMovies = [...movies];
	import { darkmode } from '../stores/store';
	import { categoria } from '../stores/store';
</script>

<div class="main" id={$darkmode ? 'darkmode' : ''}>
	<div class="aside">
		<Categorias />
	</div>
	<div class="section">
		{#if $categoria != ''}
			<Resultado currentCategory={$categoria} />
		{:else}
			<Estrenos />
		{/if}
	</div>
</div>

<style>
	/*Creamos un estilo global, el cual contendra los estilos de nuestro modo oscuro de la pagina*/
	:global(.main#darkmode) {
		background-color: black;
		color: white;
	}
	.main {
		display: grid;
		grid-template-columns: 250px 1fr;
		min-height: 50vh;
		margin: 0;
		padding: 2rem;
	}

	@media (max-width: 900px) {
		.main {
			grid-template-columns: 1fr;
			gap: 0.5rem;
			padding-top: 0;
		}
		.aside {
			width: 100%;
		}
		.section {
			width: 100%;
		}
	}
</style>

<script>
	//recogemos los datos de +page.server.js
	export let data;
	import { darkmode } from '../../stores/store';
	import * as samples from '../../components/samples';
	import { vermas } from '../../stores/store';
	//export let genreColorAssociations = samples.genreColorAssociations || [];

	const title = data.title;
	let peliculas = data.peliculas;

	peliculas.sort(() => Math.random() - 0.5);

	let count = peliculas.length;
	let orden = '';

	/*function saberColor2(genero) {
		let color;
		genreColorAssociations.forEach(function (array) {
			if (array.genre == genero) {
				color = array.color;
			}
		});
		return color;
	}*/

	function onChange(event) {
		orden = event.currentTarget.value;
		console.log('ordenados:' + orden);
		if (orden === 'Alfabetico') {
			peliculas = peliculas.sort((a, b) => {
				const titleA = a.title.toUpperCase(); // Convertir a mayúsculas para ignorar mayúsculas y minúsculas
				const titleB = b.title.toUpperCase();

				if (titleA < titleB) {
					return -1;
				}
				if (titleA > titleB) {
					return 1;
				}
				// Los títulos son iguales
				return 0;
			});
		} else if (orden === 'Anualmoderno') {
			peliculas = peliculas.sort((a, b) => b.year - a.year);
		} else if (orden === 'Anualantiguo') {
			peliculas = peliculas.sort((a, b) => a.year - b.year);
		} else if (orden === 'ValoracionMejor') {
			peliculas = peliculas.sort((a, b) => b.stars - a.stars);
		} else if (orden === 'ValoracionPeor') {
			peliculas = peliculas.sort((a, b) => a.stars - b.stars);
		} else if (orden === 'Duracionmayor') {
			peliculas = peliculas.sort((a, b) => b.duration - a.duration);
		} else if (orden === 'Duracionmenor') {
			peliculas = peliculas.sort((a, b) => a.duration - b.duration);
		}
	}
</script>

<!--<script>
	import TodasPelis from '../../components/TodasPelis.svelte';
	/*import Vermas from '../../components/Vermas.svelte';
	import { vermas } from '../../stores/store';*/
</script>

<slot />
<TodasPelis />-->

<!--ESto es lo que vera el cliente en esta ruta-->
<slot />

<!--Mostramos el titulo y imagen de todas las peliculas-->
<link rel="stylesheet" href="../css/cards.css" />
<footer class={$darkmode ? 'darkmode' : ''}>
	<input type="radio" checked={orden === 'Alfabetico'} on:change={onChange} value="Alfabetico" />
	Alfabético

	<input
		type="radio"
		checked={orden === 'Anualmoderno'}
		on:change={onChange}
		value="Anualmoderno"
	/>
	Año de mas moderno a más antiguo

	<input
		type="radio"
		checked={orden === 'Anualantiguo'}
		on:change={onChange}
		value="Anualantiguo"
	/>
	Año de mas antiguo a más moderno

	<input
		type="radio"
		checked={orden === 'ValoracionMejor'}
		on:change={onChange}
		value="ValoracionMejor"
	/>
	Mejor valoradas

	<input
		type="radio"
		checked={orden === 'ValoracionPeor'}
		on:change={onChange}
		value="ValoracionPeor"
	/>
	Peor valoradas

	<input
		type="radio"
		checked={orden === 'Duracionmayor'}
		on:change={onChange}
		value="Duracionmayor"
	/>
	Duración mayor

	<input
		type="radio"
		checked={orden === 'Duracionmenor'}
		on:change={onChange}
		value="Duracionmenor"
	/>
	Duración menor
	<h1 style="color: var(--blue);">Peliculas (número total de peliculas {count})</h1>
	<div class="movie-cards">
		{#each peliculas as pelicula}
			<!--<h1>{title}</h1>-->
			<div class="card">
				<img src={pelicula.thumbnail} alt="" />
				<div class="titlecage">
					<h1 class="title">{pelicula.title}</h1>
				</div>
				<div class="content">
					<button class="vermas" on:click={() => vermas.update((value) => pelicula.title)}
						>VER MÁS</button
					>
					<div class="contentelements">
						<h1 class="name">{pelicula.title}</h1>
						<h3 class="info">
							{pelicula.stars} <i class="fa-solid fa-star"></i>
							| {pelicula.year} | {pelicula.duration} min
						</h3>
						<!--
						<div class="allgenders">
							{#each pelicula.genres as genre}
								<div class="gender" style="background-color: {saberColor2(genre)};">
									<p style="color:black">{genre}</p>
								</div>
							{/each}
						</div>
						-->
					</div>
				</div>
			</div>
		{/each}
	</div>
</footer>

<style>
	:global(footer.darkmode) {
		background-color: black;
		color: white;
	}
	footer {
		padding-left: 5rem;
		padding-right: 5rem;
	}
	.btn-category {
		height: 5rem;
		background-image: none;
	}

	.btn {
		margin: 1rem;
		border: none;
		font-family: 'Coiny', sans-serif;
		line-height: 1;
		text-transform: uppercase;
		font-size: 2rem;
		padding: 16px 30px 13px;
		color: #fafaf9;
		border-radius: 100px;
		cursor: pointer;
		transition: 0.3s;
		background-image: linear-gradient(135deg, grey, var(--blue));
	}
	.btn:hover {
		transform: scale(110%);
	}
</style>

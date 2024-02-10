<!--ESto es lo que vera el cliente en esta ruta-->
<script>
	//recogemos los datos de +page.server.js
	export let data;
	import { darkmode } from '../../../stores/store';
	//import * as samples from '../../components/samples';
	import { vermas } from '../../../stores/store';
	//export let genreColorAssociations = samples.genreColorAssociations || [];

	const title = data.title;
	let peliculas = data.peliculas;

	/*function saberColor2(genero) {
		let color;
		genreColorAssociations.forEach(function (array) {
			if (array.genre == genero) {
				color = array.color;
			}
		});
		return color;
	}*/
</script>

<!--Metemos el css que llevaran todas las cartas-->
<link rel="stylesheet" href="../css/cards.css" />
<footer class={$darkmode ? 'darkmode' : ''}>
	<h2 class="tituloI">{title}</h2>
	<div class="movie-cards">
		<div class="card">
			<img src={peliculas.thumbnail} alt="" />
			<div class="titlecage">
				<h1 class="title">{peliculas.title}</h1>
			</div>
			<div class="content">
				<button class="vermas" on:click={() => vermas.update((value) => peliculas.title)}
					>VER MÁS</button
				>
				<div class="contentelements">
					<h1 class="name">{peliculas.title}</h1>
					<h3 class="info">
						{peliculas.stars} <i class="fa-solid fa-star"></i>
						| {peliculas.year} | {peliculas.duration} min
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

	.tituloI {
		text-align: center;
	}
</style>

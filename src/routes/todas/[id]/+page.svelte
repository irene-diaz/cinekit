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

<!--Mostramos el titulo y imagen de todas las peliculas-->
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
	/**
  ESTILOS NUEVAS CARTAS AZULES****************************************************************************************************
  */

	.movie-cards {
		width: 100%;
		/*min-height: 10vh;*/
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		overflow: hidden;
		justify-content: space-around;
	}

	.card {
		width: 14.38rem;
		height: 21.9rem;
		position: relative;
		color: #fff;
		border-radius: 0.3rem;
		cursor: pointer;
		overflow: hidden;
		margin: 2rem;
	}

	.titlecage {
		background-color: var(--blue);
		position: absolute;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		min-height: 2rem;
		padding: 4%;
	}

	.card:hover .titlecage {
		opacity: 0;
	}

	.title {
		font-size: 1.1rem;
		font-weight: 700;
		color: #fff;
	}

	.card img {
		width: 100%;
		height: 100%;
		transition: all 0.5s;
	}

	.card:hover img {
		transform: scale(1.05);
	}

	.content {
		width: 100%;
		height: 100%;
		position: absolute;
		bottom: 0;
		background: linear-gradient(rgba(0, 0, 0, 0.2), var(--blue));

		padding-left: 4%;
		padding-right: 4%;
		padding-bottom: 4%;
		opacity: 0;
		transition: all 0.2s;
		overflow: hidden;
	}

	.contentelements {
		padding: 0;
		margin: 0;
		position: absolute;
		bottom: 0;
	}

	.card:hover .content {
		opacity: 1;
	}

	.name {
		font-size: 1.5rem;
		font-weight: 700;
	}

	.info {
		font-size: 0.75rem;
		font-weight: 600;
	}

	.allgenders {
		width: 100%;
		min-height: 1.6rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		overflow: hidden;
		flex-wrap: wrap;
	}
	.gender {
		font-size: 0.7rem;
		color: white;
		height: 1.5rem;
		min-width: 4rem;
		border-radius: 0.3rem;
		border: none;
		background-color: #404c4d;
		cursor: pointer;
		margin: 0.5rem;
		text-align: center;
		padding: 0.3rem;
	}

	.gender p {
		font-size: 1rem;
		font-weight: 600;
		transform: translateY(-0.2rem);
	}

	.drama {
		background-color: palevioletred;
	}

	.comedia {
		background-color: orange;
	}

	.vermas {
		position: absolute;
		right: 4%;
		top: 4%;
		font-size: 0.9rem;
		color: white;
		font-weight: 900;
		height: 1.9rem;
		width: 5rem;
		border-radius: 0.3rem;
		border: none;
		background-color: var(--blue);
		cursor: pointer;
	}

	.tituloI {
		text-align: center;
	}
</style>

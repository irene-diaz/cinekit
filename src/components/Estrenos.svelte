<script>
	import * as samples from '../components/samples';
	export let movies = samples.peliculas || [];

	/*La función Math.random() nos devuelve un número aleatorio entre 0 y 0.9999..., lo que conseguimos al restarle 0.5 es que nos genere números negativos y positivos
   para que la función sort() nos re-ordene el array de forma aleatoria colocando un elemento delante otro detrás.*/
	let peliculasAleatorias = movies.sort(function () {
		return Math.random() - 0.5;
	});
	/*Con slice seleccionamos los 6 primeros valores del array movies desordenado*/
	let estrenos = peliculasAleatorias.slice(0, 20);
</script>

<div class="estrenos">
	<h1 style="color: var(--blue);">Estrenos</h1>
	<div class="categorias" id="categorias">
		{#each estrenos as pelicula}
			<div class="card">
				<div class="card-bg">
					<img class="imagen-pelicula" src={pelicula.thumbnail} alt="" />
				</div>

				<div class="card-context">
					<div class="dark-bg" />
					<h2>{pelicula.title}</h2>
					<p>
						{pelicula.extract}
					</p>
					<button>Ver más</button>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.estrenos {
		padding: 1rem;
		padding-top: 0;
		width: 100%;
	}
	.categorias {
		min-height: 70vh;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.card {
		position: relative;
		min-width: 300px;
		width: 300px;
		height: 400px;
		border-radius: 36px;
		overflow: hidden;
		margin: 20px;
	}

	.card .card-bg {
		width: 100%;
		height: 100%;
	}

	.card .card-bg img {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: fill;

		transition: 0.1s ease-out;
	}

	.card:hover .card-bg img {
		transform: scale(1.05);
	}

	.card .card-context {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 100%;
		transform: translateY(68%);
		transition: 0.2s ease-out;
	}

	@media screen and (max-width: 600px) {
		.card {
			min-width: 400px;
			width: 400px;
			height: 300px;
		}
		.card .card-context {
			height: 50%;
		}
	}

	.card:hover .card-context {
		transform: translateY(0);
	}

	.card .card-context .dark-bg {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 100%;
		transform: scale(1.2);
		background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9));
		filter: blur(20px);
		transition: 0.2s ease-out;
	}

	.card .card-context h2 {
		position: absolute;
		left: 32px;
		color: #fff;
	}

	.card .card-context h2::after {
		content: '';
		position: relative;
		display: block;
		background-color: #fff;
		width: 100%;
		margin-top: 3px;
		height: 3px;
		transform: scaleX(0); /*para que el subrayyado no salga*/
		transform-origin: left; /*para que la animacion salga de la izquierda*/
		transition: transform 1s ease;
	}

	.card:hover h2::after {
		transform: scaleX(1); /*para que el subrayado Aparezca*/
	}

	.card .card-context p {
		position: absolute;
		left: 32px;
		top: 36px;
		width: 82%;
		line-height: 20px;
		word-spacing: -2px;
		color: #f9f9f9;
		text-align: justify;
		opacity: 0;
		transition: 0.2s ease-out;
	}

	.card .card-context .atributes p {
		position: relative;
		left: 32px;
		top: 36px;
		width: 50%;
		height: 50%;
		justify-items: center;
		row-gap: 2rem;
	}

	.card:hover .card-context p {
		opacity: 1;
	}

	.card .card-context button {
		cursor: pointer;
		position: absolute;
		bottom: 32px;
		right: 32px;
		color: sandybrown;
		background-color: transparent;
		font-size: 18px;
		padding: 5px 10px;
		border-radius: 3px;
		border-bottom-right-radius: 12px;
		border-top-left-radius: 12px;
		transition: 0.5s;
		border: 1px solid sandybrown;
		font-weight: 600;
	}

	.card .card-context button:hover {
		background: sandybrown;
		color: black;
	}
</style>

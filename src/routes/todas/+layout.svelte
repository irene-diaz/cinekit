<script>

	//recogemos los datos de +page.server.js
	export let data;
	import { darkmode } from '../../stores/store';
	import * as samples from '../../components/samples';
	import { vermas } from '../../stores/store';
	import CardsJson from '../../components/CardsJson.svelte';
   // import genreColorAssociations from '../../../db.json';

	const title = data.title;
	let peliculas = data.peliculas;
	let genreColorAssociations=data.genreColorAssociations;
	console.log(data); // Imprime todos los datos recibidos del servidor
	console.log("genreColorAssociations:", genreColorAssociations);


	//peliculas.sort(() => Math.random() - 0.5);

	let count = peliculas.length;
	let orden = '';

	function saberColorJson(genero) {
    console.log("Genero:", genero);
    // Verifica si genreColorAssociations está definido y es un array
    if (Array.isArray(genreColorAssociations)) {
        // Itera sobre cada entrada en genreColorAssociations
        for (const entry of genreColorAssociations) {
            console.log("Entry.genre:", entry.genre);
            // Verifica si la propiedad 'genre' coincide con el género proporcionado
            if (entry.genre === genero) {
                // Devuelve el color correspondiente si hay una coincidencia
                return entry.color;
            }
        }
    }

    // Si no se encuentra el género, se devuelve un color predeterminado
    return 'red';
}









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



<!--
	<CardsJson movies={peliculas}/>

-->
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
						
						<div class="allgenders">
							{#each pelicula.genres as genre}
								<div class="gender" style="background-color: {saberColorJson(genre)};">
									<p style="color:black">{genre}</p>
								</div>
							{/each}
						</div>
						
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


	.movie-cards{
    width: 100%;
    /*min-height: 10vh;*/
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
    justify-content: space-around;
}

.card{
    width: 14.38rem;
    height: 21.9rem;
    position: relative;
    color: #fff;
    border-radius: 0.3rem;
    cursor: pointer;
    overflow: hidden;
    margin: 2rem;
}

.titlecage{
    background-color: #7BA9CD;
    position: absolute;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    min-height: 2rem;
    padding: 4%;
}

.card:hover .titlecage{
    opacity: 0;
}

.title{
    font-size: 1.1rem;
    font-weight: 700;
    color: #fff;
}

.card img{
    width: 100%;
    height: 100%;
    transition: all 0.5s;
}

.card:hover img{
    transform: scale(1.05);
}

.content{
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(rgba(0,0,0,0.2), #7BA9CD);
    
    padding-left: 4%;
    padding-right: 4%;
    padding-bottom: 4%;
    opacity: 0;
    transition: all 0.2s;
    overflow: hidden;
}

.contentelements{
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: 0;
}

.card:hover .content{
    opacity: 1;
}

.name{
    font-size: 1.5rem;
    font-weight: 700;
}

.info{
    font-size: 0.75rem;
    font-weight: 600;
}

.allgenders{
    width: 100%;
    min-height: 1.6rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow: hidden;
    flex-wrap: wrap;
}
.gender{
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

.gender p{
    font-size: 1rem;
    font-weight: 600;
    transform: translateY(-0.9rem);
}

.drama{
    background-color: palevioletred;
}

.comedia{
    background-color: orange;
}

.vermas{
    position: absolute;
    right: 10%;
    top: 4%;
    font-size: 0.7rem;
    color: white;
    font-weight: 900;
    height: 1.9rem;
    width: 5rem;
    border-radius: 0.3rem;
    border: none;
    background-color: #7BA9CD;
    cursor: pointer;

}
</style>

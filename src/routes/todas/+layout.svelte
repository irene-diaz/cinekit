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
	//console.log(data); // Imprime todos los datos recibidos del servidor
	//console.log("genreColorAssociations:", genreColorAssociations);


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

<slot />

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




	<CardsJson {peliculas} {genreColorAssociations}/>




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
	
</style>

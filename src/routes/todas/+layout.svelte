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









const comparators = {
        'Alfabetico': (a, b) => a.title.localeCompare(b.title),
        'Anualmoderno': (a, b) => b.year - a.year,
        'Anualantiguo': (a, b) => a.year - b.year,
        'ValoracionMejor': (a, b) => b.stars - a.stars,
        'ValoracionPeor': (a, b) => a.stars - b.stars,
        'Duracionmayor': (a, b) => b.duration - a.duration,
        'Duracionmenor': (a, b) => a.duration - b.duration
    };

    // Define la función onChange
    function onChange(event) {
        const orden = event.currentTarget.value; // Obtiene la opción seleccionada

        // Obtén la función de comparación correspondiente a la opción seleccionada
        const comparator = comparators[orden];

        // Ordena las películas utilizando la función de comparación obtenida
        if (comparator) {
            peliculas = peliculas.sort(comparator);
        }

        console.log('ordenados:' + orden);
    }
</script>

<footer class={$darkmode ? 'darkmode' : ''}>
<slot />

<input type="radio" name="orden" id="alfabetico" checked={orden === 'Alfabetico'} on:change={onChange} value="Alfabetico" />
<label for="alfabetico">Alfabético</label>

<input type="radio" name="orden" id="anualmoderno" checked={orden === 'Anualmoderno'} on:change={onChange} value="Anualmoderno" />
<label for="anualmoderno">Año de más moderno a más antiguo</label>

<input type="radio" name="orden" id="anualantiguo" checked={orden === 'Anualantiguo'} on:change={onChange} value="Anualantiguo" />
<label for="anualantiguo">Año de más antiguo a más moderno</label>

<input type="radio" name="orden" id="valoracionmejor" checked={orden === 'ValoracionMejor'} on:change={onChange} value="ValoracionMejor" />
<label for="valoracionmejor">Mejor valoradas</label>

<input type="radio" name="orden" id="valoracionpeor" checked={orden === 'ValoracionPeor'} on:change={onChange} value="ValoracionPeor" />
<label for="valoracionpeor">Peor valoradas</label>

<input type="radio" name="orden" id="duracionmayor" checked={orden === 'Duracionmayor'} on:change={onChange} value="Duracionmayor" />
<label for="duracionmayor">Duración mayor</label>

<input type="radio" name="orden" id="duracionmenor" checked={orden === 'Duracionmenor'} on:change={onChange} value="Duracionmenor" />
<label for="duracionmenor">Duración menor</label>	


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


     /* Estilos para los botones de radio */
	 input[type="radio"] {
        display: none; /* Oculta los botones de radio predeterminados */
    }

    label {
    display: inline-block;
    padding: 1rem 2rem; /* Medidas en rem */
    margin: 0.5rem; /* Medida en rem */
    cursor: pointer;
    border: 0.2rem solid #7BA9CD; /* Medida en rem */
    border-radius: 2.5rem; /* Medida en rem */
    transition: background-color 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s; /* Agrega una transición suave para el cambio de color */
    box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.1); /* Medidas en rem */
    font-family: 'Roboto', sans-serif; /* Usa la fuente Roboto */
}



    input[type="radio"]:checked + label {
        background-color: #7BA9CD;
        color: white;
        border-color: #7BA9CD;
    }
</style>

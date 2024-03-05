<script>
	import { directoresDeCine } from './samples.js';
	import * as samples from '../components/samples';
	import Cartas from '../components/Cards.svelte';
	import { darkmode } from '../stores/store';
	import Vermas from '../components/Vermas.svelte';
	import { vermas } from '../stores/store';
	//creamos una variable en la que iran las peliculas que coincidan con la busqueda
	let copyMovies = [];
	export let peliculas;

	var countMovies = 0;
	function handleSearchTitle(e) {
		//creamos una variable para guardar el evento de la busqueda
		const p = e.target.value;
		if (p === '') {
			copyMovies = [];
		} else {
			//Hacemos un filter por cada pelicula
			const results = peliculas.filter((movie) => {
				const title = movie.title;
				return title.search(new RegExp(p, 'i')) >= 0; 
			});
			copyMovies = [...results];
			countMovies = copyMovies.length;
		}
	}

</script>

<div class="container" class:dark={$darkmode}>
    <div class="search-input-container">
        <input type="text" class="search-input" placeholder="Buscar..." on:input={handleSearchTitle} />
        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="24" class="search-icon" class:dark={$darkmode}>
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
        </svg>
    </div>


    {#if $vermas != ''}
        <Vermas />
    {:else}
        <Cartas cartas={copyMovies} />
    {/if}
</div>

<style>
	:global(.prin#darkmode) {
		background-color: black;
		color: white;
	}
	.container {
        display: flex;
        flex-direction: column;
        padding: 20px;
        background-color: #fff;
    }

    .container.dark {
        background-color: black;
        color: #fff;
    }




/* Estilos para el input de búsqueda */
.search-input-container {
        position: relative;
        margin-bottom: 20px;
    }

    .search-input {
        padding: 12px 20px;
        padding-left: 40px; /* Espacio para el ícono */
        border: none;
        border-radius: 30px;
        font-size: 16px;
        outline: none;
        width: 250px;
        background-color: #a6d4f7;
        color: black;
        transition: width 0.3s ease-in-out, background-color 0.3s;
    }

    .search-input.dark {
        background-color: #a6d4f7;
        color: #fff;
    }

    .search-input:focus {
        width: 300px;
        background-color: #a6d4f7;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .search-input.dark:focus {
        background-color: #a6d4f7;
        color: #333;
    }

    .search-icon {
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        fill: #7BA9CD;
        transition: fill 0.3s;
        cursor: pointer;
    }

    .search-input-container:hover .search-icon {
        fill: #4a90e2;
    }

    .search-icon.dark {
        fill: #4a90e2;
    }





	


    h3 {
        font-size: 18px;
        color: #333;
        margin-top: 10px;
    }

    h3.dark {
        color: #fff;
    }
</style>

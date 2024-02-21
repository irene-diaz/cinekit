<!--<Buscador />-->
<script>
	//importamos para saber si esta en proceso de navegacion o no
	import { navigating } from '$app/stores';
	import Header from '../components/Header.svelte';
	import Header2 from '../components/Header2.svelte';
	//import * as samples from '../components/samples';
	//import Cartas from '../components/Cards.svelte';
	import { darkmode } from '../stores/store';
	//export let movies = samples.peliculas || [];
	//export let cast = samples.cast || {};
	import Vermas from '../components/Vermas.svelte';
	import { vermas } from '../stores/store';
	export let data;
	const title = data.title;
	let peliculas = data.peliculas;
	let users = data.users;

	//creamos una variable en la que iran las peliculas que coincidan con la busqueda
	let copyMovies = [];
	//let copyCast = [];

	//esto lo que hace es crear un array con las propiedades del objeto
	//const reparto = Object.values(cast);
	var countMovies = 0;
	//var countCast = 0;
	function handleSearchTitle(e) {
		//creamos una variable para guardar el evento de la busqueda
		const p = e.target.value;
		if (p === '') {
			copyMovies = [];
		} else {
			//Hacemos un filter por cada pelicula
			const results = peliculas.filter((pelicula) => {
				const title = pelicula.title;
				//console.log(cast.filter(c=>c.search(p)>=0))
				return title.search(new RegExp(p, 'i')) >= 0; //|| cast.filter(c=>c.search(p)!=1);
			});
			copyMovies = [...results];
			countMovies = copyMovies.length;
		}
	}
	/*function handleSearchCast(e){
    //creamos una variable para guardar el evento de la busqueda
    const p=e.target.value;
    if(p===''){
        copyCast=[];
    }
    else{
    //Hacemos un filter por cada pelicula
        const results=reparto.filter(c =>{
            const nombre=c.name;
            //console.log(cast.filter(c=>c.search(p)>=0))
            return nombre.search(new RegExp(p,'i'))>=0;
        })
        copyCast=[...results]
        countCast=copyCast.length;
    }      
}*/
</script>

{#if $navigating}
	<div>Loading...</div>
{:else}
	<Header2 />
	<Header />
	{#each users as user}
		<h3>Welcome {user.username}</h3>
	{/each}

	<!--Mostramos el titulo y imagen de todas las peliculas-->
	<link rel="stylesheet" href="../css/cards.css" />
	<div class="prin" id={$darkmode ? 'darkmode' : ''}>
		<div class="search">
			<!--El evento onInput nos permite, que mientras escribamos se active el evento, mientras que el evento onChange solo se activa cuando terminamos de escribir-->
			Titulos:<input type="text" placeholder="Buscar..." on:input={handleSearchTitle} />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="20"
				viewBox="0 -960 960 960"
				width="24"
				class={$darkmode ? 'svg-darkmode' : ''}
				><path
					d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
				/></svg
			>

			<!--
Reparto:<input type="text" placeholder="Buscar..." on:input={handleSearchCast}>
<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="24" class={$darkmode?'svg-darkmode':''}><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>

-->
			<div>
				{#if copyMovies.length > 0}
					<h3>{countMovies} resultados por titulo</h3>
				{/if}
			</div>

			{#if $vermas != ''}
				<Vermas />
			{:else}
				<div class="movie-cards">
					{#each copyMovies as movie}
						<!--<h1>{title}</h1>-->
						<div class="card">
							<img src={movie.thumbnail} alt="" />
							<div class="titlecage">
								<h1 class="title">{movie.title}</h1>
							</div>
							<div class="content">
								<button class="vermas" on:click={() => vermas.update((value) => movie.title)}
									>VER MÁS</button
								>
								<div class="contentelements">
									<h1 class="name">{movie.title}</h1>
									<h3 class="info">
										{movie.stars} <i class="fa-solid fa-star"></i>
										| {movie.year} | {movie.duration} min
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
			{/if}

			<!--BUSCAR REPARTO
 <div>
   {#if copyCast.length> 0}
    <h3>{countCast} resultados por reparto</h3>
    {/if}
  </div>

    <div class="movie-cards">
      {#each copyCast as reparto}
        <div class="card">
            <img src={reparto.photo} alt="" />
            <div class="titlecage">
                <h1 class="title">{reparto.name}</h1>
            </div>
            <div class="content">
              <button class="vermas">VER MÁS</button>
              <div class="contentelements">
                <h1 class="name">{reparto.name}</h1>
                <div class="allfilms">
                  nombre de pelis en las que aparece
                </div>
              </div>
            </div>
        </div>  
        {/each}
    </div>
-->
		</div>
		<!--END: <div class="search">-->
	</div>

	<slot />
{/if}

<style>
	:global(.prin#darkmode) {
		background-color: black;
		color: white;
	}
	.svg-darkmode {
		fill: white;
	}
	.prin {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 2rem;
		padding-right: 2rem;
		padding-bottom: 1rem;
	}

	/*************************************************************/
	input {
		width: 25rem;
	}
	.cartas {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		flex-direction: row;
		flex-wrap: wrap;
		overflow: hidden;
	}
	.carta {
		position: relative;
		width: 220px;
		height: 340px;
		box-shadow:
			inset 0.4rem 0.4rem 5px rgb(143, 103, 3),
			inset -0.4rem -0.4rem 5px rgb(242, 181, 27),
			0 0 0 4px darkgoldenrod,
			0 0 0 4px darkgoldenrod,
			0.4rem 0.4rem 5px rgb(113, 82, 4),
			-0.4rem -0.4rem 5px rgb(242, 181, 27);

		background-color: aliceblue;
		border-radius: 15px;
		margin: 2rem;
	}
	.caja {
		position: absolute;
		top: 20px;
		left: 20px;
		right: 20px;
		bottom: 20px;
		border-radius: 15px;
		background-color: aliceblue;
		box-shadow: 0 10px 20px rgb(143, 103, 3);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		transition: 0.5s;
	}
	.imagen {
		overflow: hidden;
		height: 80%;
		width: 100%;
	}

	img {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.contenido {
		border-top: white 2px solid;
		background-color: white;
		height: 20%;
		width: 100%;
		color: black;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	a {
		color: darkgoldenrod;
		--clippy: polygon(0 0, 0 0, 0 100%, 0% 100%);
	}
	a::after {
		content: '';
		display: block;
		background-color: darkgoldenrod;
		width: 100%;
		margin-top: 3px;
		height: 3px;
		clip-path: var(--clippy);
		transition: clip-path 0.5s;
	}
	a:hover {
		--clippy: polygon(0 0, 100% 0, 100% 100%, 0 100%);
	}

	.carta:hover .caja {
		transform: translateY(-30px);
		box-shadow: 0 10px 40px rgb(93, 67, 2);
	}
</style>

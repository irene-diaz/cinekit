<!--<Buscador />-->
<script>
	//importamos para saber si esta en proceso de navegacion o no
	import { navigating } from '$app/stores';
	import { page } from '$app/stores';
	import CardsJson from '../components/CardsJson.svelte';


	import Header from '../components/Header.svelte';
	import Header2 from '../components/Header2.svelte';
	import { darkmode } from '../stores/store';
	import Vermas from '../components/Vermas.svelte';
	import { vermas } from '../stores/store';


	export let data;
	const title = data.title;
	let peliculas = data.peliculas;
	let user = data.user;
let genreColorAssociations=data.genreColorAssociations;
	//console.log("genreColorAssociations:", genreColorAssociations);


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
	{#if $page.data.user}
		<h3 style="color:green">Welcome {user}</h3>
	{:else}	
		<h3 style="color:rgb(246, 102, 126)">No se ha iniciado sesion</h3>
	{/if}
		
		
	<!--Mostramos el titulo y imagen de todas las peliculas-->
	<!--  <link rel="stylesheet" href="../css/cards.css" />  -->
	
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
			<CardsJson peliculas= {copyMovies} {genreColorAssociations}/>

			{/if}

			
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

	input {
		width: 25rem;
	}
	

</style>

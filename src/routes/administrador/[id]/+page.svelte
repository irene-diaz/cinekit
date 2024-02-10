<!--ESto es lo que vera el cliente en esta ruta-->

<script>
	//recogemos los datos de +page.server.js
	export let data;
	const title = data.title;
	const peliculas = data.peliculas;
</script>

<!--Mostramos el titulo y imagen de cada pelicula-->
<h1>{title}</h1>
<h2>{peliculas.title}</h2>
<img src={peliculas.thumbnail} alt="" />

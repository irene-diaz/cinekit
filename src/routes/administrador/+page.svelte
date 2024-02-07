<!--ESto es lo que vera el cliente en esta ruta-->

<!--<div class="creacion-pelicula">
	<h1>Crea tu pelicula</h1>
	<form method="post">
		<input type="text" name="title" />
		<input type="number" name="year" id="" />
		<textarea name="cast" id="" cols="30" rows="10"></textarea>
		<select name="genres" id="">
			<option value=""></option>
			<option value=""></option>
			<option value=""></option>
		</select>
        <input type="text" name="href">
        <input type="url" name="thumbnail" id="">
		<input type="file" name="foto" id="" />
	</form>
</div>-->

<script>
	let appPeliculas;

	async function ver() {
		const response = await fetch('/administrador/api');
		appPeliculas = await response.json();
	}
</script>

<button on:click={ver}>{appPeliculas}</button>

<!--ESto es lo que vera el cliente en esta ruta-->
<!--FICHERO QUE VERA EL CLIENTE-->
<script>
	import { darkmode } from '../../stores/store';
	export let form;
	export let data;
	//const title = data.title;
	const peliculas = data.peliculas;
	const genres = data.genreColorAssociations;
	let showForm = false;
	let showFormU = false;
	function handleCreate() {
		if (showForm) {
			showForm = null;
		} else {
			showForm = true;
		}
	}
	function handleUpdate(id) {
		// Si el formulario ya está abierto para esta fila, ciérralo
		if (showFormU === id) {
			showFormU = null;
		} else {
			// Si no, establece el estado para mostrar el formulario solo para esta fila
			showFormU = id;
		}
	}
</script>

<div id="centered" class={$darkmode ? 'darkmode' : ''}>
	<!--Lo hacemos para capturar si el formulario es correcto, y sino lo es mostrar el error definido por el servidor-->
	<!-- {#if form?.error}
		<p class="error">{form.error}</p>
	{/if} -->
	<h1>Area de Administrador</h1>
	{#if form?.error}
		<h1 class="error">{form.message}</h1>
	{/if}
	{#if form?.succes}
		<h1 class="succes">{form.message}</h1>
	{/if}

	<button on:click={handleCreate}><h3>Haz click aqui para añadir una pelicula</h3></button>
	<p></p>
	{#if showForm === true}
		<form action="?/crear" method="POST">
			Title:<input type="text" name="title" required />
			<p>
				Year: <input type="text" name="year" id="" />
			</p>
			Thumbnail:<input type="url" name="imagen" id="" />
			<p>
				Duration: <input type="number" name="duration" id="" />
			</p>
			Genres:<select name="genres" id="">
				{#each genres as genre}
					<option value={genre.genre}>{genre.genre}</option>
				{/each}
			</select>
			<p></p>
			<input type="submit" value="Crear" />
		</form>
		<p></p>
	{/if}

	<!--Mostramos el titulo y imagen de cada pelicula-->

	<table border="1">
		<!--	<tr>
			<th>
				{title}
			</th>
		</tr>-->
		{#each peliculas as pelicula (pelicula.id)}
			<tr>
				<td>{pelicula.title}</td>
				<td>
					<form method="POST" action="?/delete">
						<input type="text" name="id" value={pelicula.id} />
						<input type="submit" value="" class="papelera" />
					</form>
				</td>
				<td>
					<button on:click={() => handleUpdate(pelicula.id)}>
						<h4>Editar pelicula</h4>
					</button>
				</td>
				<div>
					{#if showFormU === pelicula.id}
						<form action="?/update" method="POST">
							<input type="hidden" name="id" value={pelicula.id} />
							Title:<input type="text" name="title" value={pelicula.title} required />
							<p>
								Year: <input type="text" name="year" value={pelicula.year} />
							</p>
							Thumbnail:<input type="url" name="imagen" value={pelicula.thumbnail} />
							<p>
								Duration: <input type="number" name="duration" value={pelicula.duration} />
							</p>
							Genres:
							{#each pelicula.genres as genre}
								{genre}<input type="checkbox" name="genres" value={genre} checked />
							{/each}
							<p />
							<input type="submit" value="Actualizar" />
						</form>
					{/if}
				</div>
			</tr>
		{/each}
	</table>
</div>

<style>
	:global(div.darkmode) {
		background-color: black;
		color: white;
	}
	#centered {
		/*max-width: 40%;*/
		/*margin: 0 auto;
		max-height: 50%;*/
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	label {
		width: 100%;
	}

	input {
		flex: 1;
	}

	span {
		flex: 1;
	}

	.papelera {
		border: none;
		background: url(./remove.svg) no-repeat 50% 50%;
		background-size: 1rem 1rem;
		cursor: pointer;
		height: 100%;
		aspect-ratio: 1;
		opacity: 0.5;
		transition: opacity 0.2s;
	}

	button:hover {
		opacity: 1;
	}

	.saving {
		opacity: 0.5;
	}

	/*estilos de error y exito*/
	.error {
		color: red;
	}

	.succes {
		color: green;
	}
</style>

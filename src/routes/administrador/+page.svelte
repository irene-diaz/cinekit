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
	<h1 style="color: #7BA9CD;">Area de Administrador</h1>
	{#if form?.error}
		<h1 class="error">{form.message}</h1>
	{/if}
	{#if form?.succes}
		<h1 class="succes">{form.message}</h1>
	{/if}

	<button on:click={handleCreate} style="background-color: yellow;"><h3>Haz click aqui para añadir una pelicula</h3></button>
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

	<table class="tabla" border="1">
		{#each peliculas as pelicula (pelicula.id)}
			<tr>
				<td ><p style="font-size: 1.5rem;">{pelicula.title}</p></td>
				<td style="background-color: red;">
					<form class="formEliminar" method="POST" action="?/delete">
						<input type="text" name="id" value={pelicula.id} />
						<input type="submit" value="" class="papelera" />
					</form>
				</td>
				<td style="background-color: #4caf50;">
					<button class="botonEditar"  on:click={() => handleUpdate(pelicula.id)}>
						<h4>Editar pelicula</h4>
					</button>
				</td>
				<div>
					{#if showFormU === pelicula.id}
						<form class="formUpdate" action="?/update" method="POST">
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
	.botonEditar{
		width: 100%;
		height: 100%;
		background-color: #4caf50;
		padding: 0;
		margin: 0;
		border: none;
	}
	#centered {
		/*max-width: 40%;*/
		/*margin: 0 auto;
		max-height: 50%;*/
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	table{
		background-color: #7BA9CD; /* Color de fondo */
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
		background-size: 2rem 2rem;
		cursor: pointer;
		height: 100%;
		aspect-ratio: 1;
		opacity: .8;
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

 /* Estilos para el formulario */
 	.formEliminar {
        display: flex;
        flex-direction: row;
		border-radius: 0;
		background-color: red;
		width: 2rem; /* Ancho del botón en rem */
        height: 2rem; /* Altura del botón en rem */
    }

    /* Estilos para el campo de entrada de texto */
    .formEliminar input[type="text"] {
        visibility: hidden;
		width: 0;
		height: 0;
		padding: 0;
		margin: 0;
    }

    /* Estilos para el botón de submit */
    .formEliminar input[type="submit"] {
        width: 3rem; /* Ancho del botón en rem */
        height: 3rem; /* Altura del botón en rem */
        padding: 0; /* Sin relleno */
        border: none; /* Sin borde */
		margin: 0;
        cursor: pointer; /* Cursor apuntador */
        transition: transform 0.3s; /* Transición de transformación */
		background-color: white;
		transform: translateX(-.4rem);
    }
	.formEliminar input[type="submit"]:hover {
        background-color: black; /* Cambio de color de fondo al pasar el cursor */
    }

	

	/* Estilos para el formulario */
    form {
        max-width: 40rem; /* Ancho máximo en rem */
        margin: 0 auto;
        padding: 2rem; /* Espaciado interior en rem */
        background-color: #7BA9CD; /* Color de fondo */
        border-radius: .5rem; /* Radio de borde en rem */
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1); /* Sombra en rem */
    }

    /* Estilos para etiquetas */
    label {
        display: block;
        margin-bottom: .5rem; /* Espaciado inferior en rem */
        font-weight: bold;
        color: #fff; /* Color de texto */
    }

    /* Estilos para campos de entrada */
    input[type="text"],
    input[type="url"],
    input[type="number"],
    select {
        width: calc(100% - 4rem); /* Ancho del campo de entrada en rem */
        padding: .3rem; /* Espaciado interior en rem */
        margin-bottom: .3rem; /* Espaciado inferior en rem */
        border: 0.2rem solid #fff; /* Grosor y color del borde */
        border-radius: 0.5rem; /* Radio de borde en rem */
        font-size: .8rem; /* Tamaño de fuente en rem */
        background-color: #7BA9CD; /* Color de fondo transparente */
        color: #fff; /* Color de texto */
        outline: none; /* Borde de enfoque */
    }

    /* Estilos para el botón */
    input[type="submit"] {
        width: 100%;
        padding: .3rem; /* Espaciado interior en rem */
        border: none; /* Sin borde */
        border-radius: 0.5rem; /* Radio de borde en rem */
        background-color: #005fa8; /* Color de fondo */
        color: #fff; /* Color de texto */
        font-size: 1rem; /* Tamaño de fuente en rem */
        cursor: pointer; /* Cursor apuntador */
        transition: background-color 0.3s; /* Transición de color de fondo */
    }

    input[type="submit"]:hover {
        background-color: #00477d; /* Cambio de color de fondo al pasar el cursor */
    }
</style>

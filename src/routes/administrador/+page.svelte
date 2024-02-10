<!--ESto es lo que vera el cliente en esta ruta-->
<!--FICHERO QUE VERA EL CLIENTE-->
<script>
	/*//exportaremos todos los usuarios(los sacamos del servidor, en concreto, de +page.server.js)
	export let data;
	//propiedad para saber cosas de los forms(en este caso no interesa el error)
	export let form;
	<script>*/
	//recogemos los datos de +page.server.js
	export let data;
	const title = data.title;
	const peliculas = data.peliculas;
	let showForm = false;
	let showFormU = false;
	function handleCreate() {
		showForm = true;
	}
	function handleUpdate() {
		showFormU = true;
	}
</script>

<div class="centered">
	<!--Lo hacemos para capturar si el formulario es correcto, y sino lo es mostrar el error definido por el servidor-->
	<!-- {#if form?.error}
		<p class="error">{form.error}</p>
	{/if} -->
	<h1>Area de Administrador</h1>
	<button on:click={handleCreate}><h3>Haz click aqui para añadir una pelicula</h3></button>
	<p></p>
	{#if showForm === true}
		<form action="?/crear" method="POST">
			Title:<input type="text" name="title" required />
			<p>
				Year: <input type="text" name="year" id="" />
			</p>
			Thumbnail:<input type="url" name="imagen" id="" />
			<p />
			<input type="submit" value="Crear" />
		</form>
	{/if}

	<!--Mostramos el titulo y imagen de cada pelicula-->

	<table border="1">
		<!--	<tr>
			<th>
				{title}
			</th>
		</tr>-->
		{#each peliculas as pelicula}
			<tr>
				<td>{pelicula.title}</td>

				<td>
					<form method="POST" action="?/delete">
						<input type="text" name="id" value={pelicula.id} />
						<input type="submit" value="" class="papelera" />
					</form>
				</td>
				<td><button on:click={handleUpdate}><h4>Editar pelicula</h4></button></td>
				<div>
					{#if showFormU === true}
						<form action="?/update" method="POST">
							<input type="hidden" name="id" value={pelicula.id} />
							Title:<input type="text" name="title" value={pelicula.title} required />
							<p />
							<input type="submit" value="Actualizar" />
						</form>
					{/if}
				</div>
			</tr>
		{/each}
	</table>

	<!--hacemos un formulario, en la que introducimos cada usuario
         Al ponerle el atributo accion al formulario, le podemos indicar que accion definida por el servidor quieres que haga al hacer el POST, en este caso
          haremos la de create(crear un usuario)
	<form method="POST" action="?/crear">
		<label>-->
	<!--add a todo:
			Gracias al required, indicamos que es obligatorio este campo para enviar el formulario. Tenemos que tener claro que una validacion en el cliente no
            es suficiente, ya que un cliente si sabe acceder a las herramientas de desarrollador, podria entrar y modificar e cmapo, la manera de asegurarnos de 
            que no pueda modificarlo, es hacer una validacion en el servidor(en este caso como es logico la hariamos en la base de datos y lo capturariamos y 
            procesariamos en el page.server.js)-->
	<!--El value captura si tiene o no descipcion, sino la tiene tiene en cuenta el error-->
	<!--<input name="description" value={form?.description ?? ''} autocomplete="off" required />
		</label>
	</form>-->

	<!-- <ul class="todos">
		{#each peliculas as pelicula (pelicula.id)}
			<li>
				Hacemos un formulario el cual tiene el boton de eliminar(eliminar un usuario)-->
	<!-- <form method="POST" action="?/delete">
					Recibe el id del usuario que queremos borrar y la descripcion, y lo borra(no lo
					introducimos nosotros es un cmapo hidden que recibimos por el servidor)
					mostramos todos los usuarios-->
	<!-- <span>{pelicula.title}</span>
					Botoncito del cubo de basura, le das y se elimina el usuario
				</form>
			</li>
		{/each} 
	</ul> -->
</div>

<style>
	.centered {
		max-width: 40%;
		margin: 0 auto;
		max-height: 50%;
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
</style>

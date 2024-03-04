<h1>Favoritos:</h1>
<!--ESto es lo que vera el cliente en esta ruta-->
<!--FICHERO QUE VERA EL CLIENTE-->
<script>
	/*//exportaremos todos los usuarios(los sacamos del servidor, en concreto, de +page.server.js)
	export let data;
	//propiedad para saber cosas de los forms(en este caso no interesa el error)
	export let form;
	<script>*/
	//recogemos los datos de +page.server.js
	import { darkmode } from '../../stores/store';
	export let form;
	export let data;
	const title = data.title;
	const peliculas = data.peliculas;
	let showForm = false;
	let showFormU = false;
	function handleCreate() {
		showForm = true;
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
    {#each peliculas as pelicula}
    {pelicula.favs} <br>
    {/each}
</div>
	

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

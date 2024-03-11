
/*FUNCION LOAD SOLO PARA EL SERVIDOR*/
//exportamos una funcion la cual se encargara de cargar la informacion que queramos, toda los objetos o constantes que se devuelvan en la funcion load estaran dentro de data

/**Esta función Load se ejecuta en el servidor antes de que se renderice la página y se utiliza para cargar los datos necesarios para la página. 
 * En resumen, la función load carga la lista de películas desde el servidor y las hace disponibles para la página.
*/
//importamos el error de svelteKit
import { redirect } from '@sveltejs/kit';

//exportamos una funcion la cual se encargara de cargar la informacion que queramos, toda los objetos o constantes que se devuelvan en la funcion load estaran dentro de data
/**Utiliza el parámetro serverLoadEvent para acceder al objeto fetch, que se utiliza para realizar solicitudes HTTP al servidor. */
export const load = async (serverLoadEvent) => {
	console.log('Load function called in page.server.js de /administrador');
	//sacamos el objeto fetch del evento junto con los parametros recibidos
	const { fetch} = serverLoadEvent;
	//Creamos una variable la cual espera hasta que la ruta del producto elegido haya llegado al servidor, y la guarda
	/**Hace una solicitud GET a http://localhost:4000/peliculas/ para obtener la lista de películas. */
	const response = await fetch(`http://localhost:4000/peliculas/`);
	//si codigo de estado es 404 lanzamos este error personalizado con su mensaje y su pista(hint) o tambien podemos redirigir a la pagina de products
	if (response.status === 404) {
		//throw error(404, { message: 'Product not found', hint: 'Try a different product' });
		throw redirect(307, '/todas'); //mirar como recoger query params en sveltekit(?), para asu ponerle un mensaje antes de redirigir
	}
	console.log('response', response.status);
	//esperamos a que llegue esa respuesta y la transformamos a json
	const peliculas = await response.json();
	//const title = 'CRUD(create,read,update,delete)';
	return {
		//title,
		peliculas
	};
};


/**
Las acciones son funciones que se pueden llamar desde la página Svelte para realizar operaciones en el backend, como crear, eliminar o actualizar películas.
Se definen tres acciones: crear, delete y update, cada una realizando una operación específica en el servidor:
La acción crear realiza una solicitud POST para agregar una nueva película al servidor.
La acción delete realiza una solicitud DELETE para eliminar una película del servidor.
La acción update realiza una solicitud PATCH para actualizar la información de una película en el servidor.

Cada acción recibe datos del formulario (o de la solicitud) y los utiliza para realizar la operación correspondiente en el servidor.
Dependiendo del resultado de la operación en el servidor, las acciones devuelven un objeto con un mensaje de éxito o error, que luego se puede 
utilizar en la página Svelte para mostrar retroalimentación al usuario.
 */

//creamos acciones
export const actions = {
    //Si solo tenemos una accion simplemente llamamos a esa accion default
	//CREAR USUARIO,esta accion nos permite acceder a las cookies(sitio donde tenemos guardado los id de usuarios)
	/**
	 * async crear ({ cookies, request }): Esta es una función asíncrona llamada crear que espera dos parámetros: 
	 * cookies y request. Estos parámetros contienen información sobre las cookies y la solicitud HTTP entrante.
	 */
	 async crear ({ cookies, request }){
		//guardamos tambien las respuestas del formulario(), no indicamos el metodo ya que por defecto, los parametros recibidos en un formulario se recogen con POST
		/**
		 * const data = await request.formData(); Aquí estamos obteniendo los datos del formulario enviado por el cliente. 
		 * Estamos esperando a que la solicitud se complete y los datos del formulario se extraigan usando request.formData(). 
		 */
		const data = await request.formData();

		//const movieId = data.get('id');
		/**
		 * Después de obtener los datos del formulario, estamos extrayendo diferentes campos del formulario, 
		 * como el título de la película, el año, la imagen, la duración y los géneros seleccionados.
		 */
		const title=data.get('title');
		const year=data.get('year');
		const image=data.get('imagen');
		const duration=data.get('duration');
		const genre=data.get('genres');

		/**
		 * Luego, hacemos una solicitud a dos puntos finales de la API: uno para obtener las asociaciones de colores de género 
		 * y otro para obtener todas las películas existentes.
		 */
		//console.log(title);
		const response2 = await fetch('http://localhost:4000/genreColorAssociations/');
		if (response2.status === 404) {
		throw redirect(307, '/'); 
		}
		const  genreColorAssociations  = await response2.json();
		const response = await fetch(`http://localhost:4000/peliculas/`);

		const peliculas = await response.json();

		const movieFound=false;
		/**
		 * Calculamos un nuevo ID para la nueva película que vamos a crear. Buscamos el ID más alto de todas 
		 * las películas existentes y le sumamos uno para obtener un nuevo ID único.
		 */
		// Obtener el ID más alto y sumarle uno
            const highestId = Math.max(...peliculas.map(pelicula => pelicula.id), 0);// (map)Convierto la lista de usuarios en un array que solo tenga id, luego con Math.max cojo el valor de los id mas alto     
            const newId = highestId + 1;//Y luego le sumo uno.
			const newIdCad= newId.toString();
			

		console.log(newId);
		const mensajeError='';
		/**
		 * Verificamos si la película ya existe o no. Si no existe, procedemos a crearla.
		 */
		if(!movieFound){
			/**
			 * Para crear la película, hacemos una solicitud POST a la API con los datos de la nueva película en formato JSON. 
			 * Si la solicitud es exitosa (insert.ok es verdadero), establecemos una cookie para indicar que la película ha 
			 * sido creada y devolvemos un objeto con un mensaje de éxito. Si la solicitud falla, devolvemos un objeto con un mensaje de error.
			 */
			const insert = await fetch('http://localhost:4000/peliculas',{
                method:'POST',
                body:JSON.stringify({
                    "id":newIdCad,
					"title":title,
					"year":year,
					"thumbnail":image,
					"thumbnail_width": 258,
      				"thumbnail_height": 386,
					"stars": 5.0,
					"duration": duration,
					"genres": [genre]
                    /*"username":formUser,
                    "password":formPassword,
                    "email":formEmail,
                    "games":[],*/
                    
                }), 
                headers:{
                    'Content-Type':'application/json' //Esto es para decirle que todo lo que he metido en json
                }
            });
			if(insert.ok){
				cookies.set('peliculaCreada', newIdCad, {path: '/administrador'});
				//mensajeError="La pelicula ha sido añadida correctamente"
				//throw redirect(302,'/administrador');
				return {"succes":true, "message":'La pelicula ha sido creada'};
			}else{
				return {"error":true, "message":'La pelicula no ha sido creada'};
			}

		}else{
			mensajeError="Ha habido un problema al crear la pelicula";
		}
		
		
	},

	/**
	 * async delete({request}): Esta es una función asíncrona llamada delete que recibe un 
	 * parámetro request, que contiene información sobre la solicitud HTTP entrante.
	 */
	async delete({request}){
		/**
		 * Dentro de un bloque try-catch, estamos esperando a que la solicitud se complete y 
		 * luego obtenemos los datos del formulario enviado por el cliente utilizando request.formData().
		 */
		try {
			const data = await request.formData();

			/**
			 * Luego, extraemos el ID de la película que se va a eliminar del cuerpo de la solicitud.
			 */
			const id=data.get('id');
			console.log(id);
			//const id = data.get('id');
			//id=params;
			/**
			 * Realizamos una solicitud DELETE a la API para eliminar la película correspondiente al ID proporcionado.
			 */
			const eliminar = await fetch(`http://localhost:4000/peliculas/${id}`, {
				method: 'DELETE',
			});

			/**
			 * Verificamos si la solicitud de eliminación fue exitosa (eliminar.ok). Si es así, devolvemos un objeto con un 
			 * mensaje de éxito indicando que la película ha sido eliminada. Si la solicitud falla, devolvemos un objeto con 
			 * un mensaje de error indicando que la película no pudo ser eliminada
			 */
			if (eliminar.ok) {
				console.log('Dato eliminado');
				return {"succes":true,
					"message":'La pelicula ha sido eliminada'};
			
			}else{
					return {"error":true,
					"message":'La pelicula no ha sido eliminada'};
					// Manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario
				//return null; // Otra opción podría ser lanzar un error
			}
				
			
		} catch (error) {
			/**
			 * En caso de que ocurra un error durante el proceso de eliminación, lo manejamos dentro del bloque catch. 
			 * En este caso, simplemente imprimimos el error en la consola y devolvemos null. 
			 */
			console.error("Error al procesar la solicitud DELETE:", error);
			// Manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario
			return null; // Otra opción podría ser lanzar un error
		}
	},
	/**
	 * async update({request, cookies}): Esta es una función asíncrona llamada update que recibe dos parámetros: request y cookies. 
	 * request contiene información sobre la solicitud HTTP entrante y cookies proporciona acceso a las cookies del cliente.
	 */
	async update({request,cookies}){
		try{
			/**
			 * Dentro de un bloque try-catch, estamos esperando a que la solicitud se complete y luego obtenemos los datos 
			 * del formulario enviado por el cliente utilizando request.formData().
			 */
			//guardamos tambien las respuestas del formulario(), no indicamos el metodo ya que por defecto, los parametros recibidos en un formulario se recogen con POST
			const data = await request.formData();

			/**
			 * Extraemos el ID de la película que se va a actualizar del cuerpo de la solicitud.
			 */
			const id=data.get('id');
			//const movieId = data.get('id');
			console.log(id);

			/**
			 * Luego, obtenemos otros datos relevantes de la película que se van a actualizar, 
			 * como el título, el año, la imagen (thumbnail), la duración y los géneros.
			 */
			const title=data.get('title');
			const year=data.get('year');
			const thumbnail=data.get('thumbnail');
			const duration=data.get('duration');
			const genres=data.get('genres');


			console.log(title);

			/**
			 * Realizamos una solicitud PATCH a la API para actualizar la película correspondiente al ID 
			 * proporcionado. La solicitud incluye un cuerpo JSON que contiene los nuevos datos de la película.
			 */
			const update = await fetch(`http://localhost:4000/peliculas/${id}`,{
                method:'PATCH',
                body:JSON.stringify({
                    "id":id,
					"title":title,
					"year":year,
					"thubnail":thumbnail,
					"duration":duration,
					"genres":[genres]
                    
                }), 
                headers:{
                    'Content-Type':'application/json' //Esto es para decirle que todo lo que he metido en json
                }
            });
			/**
			 * Verificamos si la solicitud de actualización fue exitosa (update.ok). Si es así, establecemos una cookie 
			 * peliculaActualizada con el ID de la película actualizada y devolvemos un objeto con un mensaje de éxito 
			 * indicando que la película ha sido actualizada. Si la solicitud falla, devolvemos un objeto con un mensaje 
			 * de error indicando que la película no pudo ser actualizada.
			 */
			if(update.ok){
				cookies.set('peliculaActualizada', id, {path: '/administrador'});
				//throw redirect(302,'/administrador');
				return {"succes":true,
					"message":'La pelicula ha sido actualizada'};
			}else{
				console.log("Error al actualizar");
				return {"error":true,
				"message":'La pelicula no ha sido actualizada'};
			}

  		} catch (error) {
			/**
			 * En caso de que ocurra un error durante el proceso de actualización, lo manejamos dentro del bloque catch. 
			 * En este caso, simplemente imprimimos el error en la consola y devolvemos null. 
			 */
			console.error("Error al procesar la solicitud PUT:", error);
			// Manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario
			return null; // Otra opción podría ser lanzar un error
    	}  

	}
}





//es para renderizar la ruta previamente(si hay acciones no hay que hacerlo)
//export const prerender = true;

/**
 * Exportación prerender:

La línea export const prerender = true; indica que la página debe ser prerenderizada en el servidor antes de ser enviada al cliente.
El prerenderizado es una técnica utilizada para mejorar el rendimiento y la experiencia del usuario al cargar páginas web, donde la 
página se genera en el servidor y se envía al cliente como HTML estático.
En resumen, este archivo page.server.js proporciona funciones para cargar datos desde el servidor y realizar operaciones CRUD 
(crear, leer, actualizar, eliminar) en películas a través de acciones que se pueden llamar desde la página Svelte correspondiente.
 */
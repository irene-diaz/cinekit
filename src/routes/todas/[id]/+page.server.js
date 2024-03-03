
/*FUNCION LOAD SOLO PARA EL SERVIDOR*/
//exportamos una funcion la cual se encargara de cargar la informacion que queramos, toda los objetos o constantes que se devuelvan en la funcion load estaran dentro de data

/*FUNCION LOAD SOLO PARA EL SERVIDOR*/

//importamos el error de svelteKit
import { redirect } from '@sveltejs/kit';

//exportamos una funcion la cual se encargara de cargar la informacion que queramos, toda los objetos o constantes que se devuelvan en la funcion load estaran dentro de data
export const load = async (serverLoadEvent) => {
	console.log('Load function called in page.server.js');
	//sacamos el objeto fetch del evento junto con los parametros recibidos
	const { fetch, params } = serverLoadEvent;
	//metemos dentro delos parametro el id
	const {id } = params;
	//Creamos una variable la cual espera hasta que la ruta del producto elegido haya llegado al servidor, y la guarda
	const response = await fetch(`http://localhost:4000/peliculas/${id}`);
	//si codigo de estado es 404 lanzamos este error personalizado con su mensaje y su pista(hint) o tambien podemos redirigir a la pagina de products
	if (response.status === 404) {
		//throw error(404, { message: 'Product not found', hint: 'Try a different product' });
		throw redirect(307, '/todas'); //mirar como recoger query params en sveltekit(?), para asu ponerle un mensaje antes de redirigir
	}

	const response2 = await fetch('http://localhost:4000/genreColorAssociations/');
	if (response2.status === 404) {
		throw redirect(307, '/'); 
	}
	console.log('response', response.status);
	console.log('response2', response2.status);

	//esperamos a que llegue esa respuesta y la transformamos a json
	const peliculas = await response.json();
	const genreColorAssociations = await response.json();

	const title = `La pelicula numero ${id} es ${peliculas.title}`;
	return {
		title,
		peliculas,
		genreColorAssociations
	};
};

//es para renderizar la ruta previamente
//export const prerender = true;
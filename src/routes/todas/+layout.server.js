/*FUNCION LOAD SOLO PARA EL SERVIDOR*/
//exportamos una funcion la cual se encargara de cargar la informacion que queramos, toda los objetos o constantes que se devuelvan en la funcion load estaran dentro de data

/*FUNCION LOAD SOLO PARA EL SERVIDOR*/

//importamos el error de svelteKit
import { redirect } from '@sveltejs/kit';

//exportamos una funcion la cual se encargara de cargar la informacion que queramos, toda los objetos o constantes que se devuelvan en la funcion load estaran dentro de data
export const load = async (serverLoadEvent) => {
	console.log('Load function called in layout.server.js de /todas');
	//sacamos el objeto fetch del evento junto con los parametros recibidos
	const { fetch } = serverLoadEvent;
	const response = await fetch('http://localhost:4000/peliculas/');
	if (response.status === 404) {
		throw redirect(307, '/'); 
	}
	const peliculas = await response.json();

	const response2 = await fetch('http://localhost:4000/genreColorAssociations/');
	if (response2.status === 404) {
		throw redirect(307, '/'); 
	}
	const  genreColorAssociations  = await response2.json();


	const title = 'Pelicula por id';
	return {
		title,
		peliculas,
		genreColorAssociations
	};
};

//es para renderizar la ruta previamente
//export const prerender = true;


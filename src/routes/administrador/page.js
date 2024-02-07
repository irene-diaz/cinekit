//EN VEZ DE LLAMAR A GET DIRECTAMENTE, LO HACEMOS CON LA FUNCION LOAD
//exportamos una funcion la cual se encargara de cargar la informacion que queramos, toda los objetos o constantes que se devuelvan en la funcion load estaran dentro de data
export const load = async (loadEvent) => {
	//sacamos el objeto fetch del evento
	const { fetch } = loadEvent;
	// sveltekit fetch does not need the full url(pero el fetch del cliente si lo necesita)
	//Creamos una variable la cual espera hasta que la ruta de la base datos haya llegado al servidor, y la guarda
	const response = await fetch('/api/administrador');
	//esperamos a que llegue esa respuesta y la transformamos a json
	const peliculas = await response.json();
	//creamos una variable en la cual meteremos solo la iformacion que queramos de las direcciones
	const moviesList = postcodes.map((postcode) => {
		return `${postcode.buildingName}, ${postcode.line1} ,${postcode.line2}, ${postcode.line3}, ${postcode.town}, ${postcode.country}, ${postcode.postcode}`;
	});
	//retornamos esa informacion acortada de las direcciones
	return { addressList };
};
import { json } from "@sveltejs/kit";

//funcion para recuperar los numeros aleatorios generados
/*export function GET(){
    //genera un numero aleatorio y te lo devuelve
    const number=Math.floor(Math.random() *6)+1;
    /*
    return new Response(number,{
        headers:{
            'Content-Type' : 'appication/json'
        }
    })*/
    //FORMA MAS RAPIDA
    //return json(number);
//}

//Creamos una funcion get la cual, lo que nos hara es recuperar la informacion que nosotros le digamos
export async function GET() {
	//Hacemos lo que hacemos siempre para recuperar informacion de una api externa
	const response = await fetch('http://localhost:4000/peliculas');
	const peliculas = await response.json();
	//extraemos unicamente la informacion que nos interesa, esto lo hacemos con un map, asi tranformamos la variable, recorriendo cada direccion una a una
	const appPeliculas = peliculas.map((pelicula) => {
		return {
			title: pelicula.title,
			year: pelicula.year,
			thumbnail: pelicula.thumbnail
		};
	});
	return json(appPeliculas)
}
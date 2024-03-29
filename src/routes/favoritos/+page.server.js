
/*FUNCION LOAD SOLO PARA EL SERVIDOR*/
//exportamos una funcion la cual se encargara de cargar la informacion que queramos, toda los objetos o constantes que se devuelvan en la funcion load estaran dentro de data

/*FUNCION LOAD SOLO PARA EL SERVIDOR*/

//importamos el error de svelteKit
import { redirect } from '@sveltejs/kit';

//exportamos una funcion la cual se encargara de cargar la informacion que queramos, toda los objetos o constantes que se devuelvan en la funcion load estaran dentro de data
export const load = async (serverLoadEvent) => {
	console.log('Load function called in page.server.js');
	//sacamos el objeto fetch del evento junto con los parametros recibidos
	const { fetch} = serverLoadEvent;
	//Creamos una variable la cual espera hasta que la ruta del producto elegido haya llegado al servidor, y la guarda
	const response = await fetch(`http://localhost:4000/users/favs`);
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

//FICHERO QUE LEE EL SERVIDOR
//importamos fail, esto no ayuda a proceder y capturar un error
/*import fail from '@sveltejs/kit';
import path from 'path';
//funcion que lee los datos(le pasamos las cookies, que es donde ira guardado el id de cada usuario)
export function load({ cookies }) {
	let id = cookies.get('userid');

	//en el caso de que no haya usuarios, creamos uno con id aleatorio, y le asigamos ese id a una cookie
	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}

	//devolvemos todos los usuarios
	return {
		todos: db.getTodos(id)
	};
}*/

//creamos acciones
export const actions = {
    //Si solo tenemos una accion simplemente llamamos a esa accion default
	//CREAR USUARIO,esta accion nos permite acceder a las cookies(sitio donde tenemos guardado los id de usuarios)
	 async favoritos ({ cookies, request }){
		
		if(!movieFound){
			const insert = await fetch('http://localhost:4000/peliculas',{
                method:'POST',
                body:JSON.stringify({
                    "id":newIdCad,
					"title":title,
					"year":year,
					"thumbnail":image,
					"thumbnail_width": 258,
      				"thumbnail_height": 386
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
			return {"succes":true,
				"message":'La pelicula ha sido creada'};
			}
			else{
				return {"error":true,
				"message":'La pelicula no ha sido creada'};
			}
		}
		else{
			mensajeError="Ha habido un problema al crear la pelicula";
		}

        //si todo sale bien crea el usuario
       /* try{
        //con esto cremaos el formulario, ocn el id recibido por las cookies y la descripcion recibida por el data(FUNCION CREATE)
		db.createTodo(cookies.get('userid'), data.get('description'));
        }
        //sino crea el usuario, capturamos y procesamos el error
        catch(error){
            return fail(422,{
                decription:data.get('description'),
                error:error.message
            })
        }*/
		
		
	},
	async delete({request}){
	try {
        const data = await request.formData();

		const id=data.get('id');
		console.log(id);
        //const id = data.get('id');
		//id=params;
        const eliminar = await fetch(`http://localhost:4000/peliculas/${id}`, {
            method: 'DELETE',
        });

        if (eliminar.ok) {
			console.log('Dato eliminado');
			return {"succes":true,
				"message":'La pelicula ha sido eliminada'};
			}
			
        else{
				return {"error":true,
				"message":'La pelicula no ha sido eliminada'};
				// Manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario
            //return null; // Otra opción podría ser lanzar un error
			}
            
		
    } catch (error) {
        console.error("Error al procesar la solicitud DELETE:", error);
        // Manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario
        return null; // Otra opción podría ser lanzar un error
    }
	},
	async update({request,cookies}){
		try{
		//guardamos tambien las respuestas del formulario(), no indicamos el metodo ya que por defecto, los parametros recibidos en un formulario se recogen con POST
		const data = await request.formData();
		const id=data.get('id');
		//const movieId = data.get('id');
		console.log(id);

		const title=data.get('title');

		console.log(title);

			const update = await fetch(`http://localhost:4000/peliculas/${id}`,{
                method:'PATCH',
                body:JSON.stringify({
                    "id":id,
					"title":title
                    /*"username":formUser,
                    "password":formPassword,
                    "email":formEmail,
                    "games":[],*/
                    
                }), 
                headers:{
                    'Content-Type':'application/json' //Esto es para decirle que todo lo que he metido en json
                }
            });
			if(update.ok){
			cookies.set('peliculaActualizada', id, {path: '/administrador'});
			//throw redirect(302,'/administrador');
			return {"succes":true,
				"message":'La pelicula ha sido actualizada'};
			}
			else{
				console.log("Error al actualizar");
				return {"error":true,
				"message":'La pelicula no ha sido actualizada'};
			}

  } catch (error) {
        console.error("Error al procesar la solicitud PUT:", error);
        // Manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario
        return null; // Otra opción podría ser lanzar un error
    }  

}
}





//es para renderizar la ruta previamente(si hay acciones no hay que hacerlo)
//export const prerender = true;
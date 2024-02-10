// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
//SIMULACION DE LA BASE DE DATOS
//La metemeos en un map para lo haga con todos los datos, uno a uno
const db = new Map();

//FUNCION GET(recupera todos los usuarios, y sino hay mete uno por defecto)
export function getTodos(userid) {
	if (!db.get(userid)) {
		db.set(userid, [{
			id: crypto.randomUUID(),
			description: 'Learn SvelteKit',
			done: false
		}]);
	}

	return db.get(userid);
}

//FUNCION CREATE(crea los usaurios a partir de dos parametros el id y la descripcion)
export function createTodo(userid, description) {
    //si la descripcion esta vacia, lanzar un error y lo muestra
    if(description===''){
        throw new Error('todo must have a description');
    }
	const todos = db.get(userid);

    //si la descripcion esta repetida, lanzar un error(el nombre de usuario debe ser unico(descripcion)) y lo muestra
    if(todos.find((todo)=>todo.description===description)){
        throw new Error('todos must be unique');
    }

	todos.push({
		id: crypto.randomUUID(),
		description,
		done: false
	});

}

//FUNCION DELETE
export function deleteTodo(userid, todoid) {
	const todos = db.get(userid);
	const index = todos.findIndex((todo) => todo.id === todoid);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}
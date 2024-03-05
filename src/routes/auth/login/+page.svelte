<script>
	let username = '';
	let password = '';

    const handleSubmit = async () => {
        const response = await fetch('http://localhost:4000/users');
        const data = await response.json();
        
        //verifica si el usuario ya existe 
        const existeUser = data.find(user => user.username === username);

        if (existeUser) {
            console.log("Usuario existente, iniciando sesión...");
            document.cookie = `userActual=${username}; path=/`;
            setTimeout(() => {
                window.location.href = '/';
            }, 100);
            return;
        }

        //si el usuario no existe lo agrega
        console.log("Agregando nuevo usuario...");
        const newUserResponse = await fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                favs:[]
            })
        });
        const newUser = await newUserResponse.json();

        if (newUserResponse.ok) {
            document.cookie = `userActual=${username}; path=/`;
            setTimeout(() => {
                window.location.href = '/';
            }, 100);
        } else {
            alert(newUser.message);
        }
    }


</script>


<form on:submit|preventDefault={handleSubmit}>
	<label for="username">Username</label>
	<input bind:value={username} type="email" name="username" id="username" placeholder="Username" required/>
	<br /><br />

	<label for="password">Password</label>
	<input bind:value={password} type="password" name="password" id="password" placeholder="Password" required/>
	<br /><br />
	<button type="submit">Login</button>
</form>
<div class="espacio"></div>

<style>
    .espacio {
    height: 2rem; /* Medida en rem */
}

/* Estilos para el formulario de inicio de sesión */
form {
    max-width: 25rem; /* Medida en rem */
    margin: 0 auto;
    padding: 2rem; /* Medida en rem */
    background-color: #7BA9CD;
    border-radius: 1rem; /* Medida en rem */
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1); /* Medidas en rem */
}

label {
    display: block;
    margin-bottom: 2.6rem; /* Medida en rem */
    font-weight: bold;
    color: #fff;
}

input[type="email"],
input[type="password"] {
    width: 90%;
    padding: .5rem; /* Medida en rem */
    margin-bottom: 1rem; /* Medida en rem */
    border: 0.2rem solid #fff; /* Medida en rem */
    border-radius: 0.5rem; /* Medida en rem */
    font-size: 1.1rem; /* Medida en rem */
    background-color: transparent;
    color: #fff;
    outline: none;
}

input[type="email"]:focus,
input[type="password"]:focus {
    border-color: #005fa8;
}

button[type="submit"] {
    width: 100%;
    padding: 1rem; /* Medida en rem */
    border: none;
    border-radius: 0.5rem; /* Medida en rem */
    background-color: #005fa8;
    color: #fff;
    font-size: 1.2rem; /* Medida en rem */
    cursor: pointer;
    transition: background-color 0.3s;
}

button[type="submit"]:hover {
    background-color: #00477d;
}

</style>
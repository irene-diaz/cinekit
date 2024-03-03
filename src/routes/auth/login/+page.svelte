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
                password
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


<h1>Login</h1>

<form on:submit|preventDefault={handleSubmit}>
	<label for="username">Username</label><br />
	<input bind:value={username} type="email" name="username" id="username" placeholder="Username" required/>
	<br /><br />

	<label for="password">Password</label><br />
	<input bind:value={password} type="password" name="password" id="password" placeholder="Password" required/>
	<br /><br />
	<button type="submit">Login</button>
</form>

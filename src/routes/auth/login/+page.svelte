<script>
	let username = '';
	let password = '';
    let isLoggedIn = false;

	const handleSubmit = async () => {
        const response = await fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            // Seteamos la cookie si la solicitud fue exitosa
            document.cookie = `userActual=${username}; path=/`;
            // Redireccionamos a otra página después de un breve retraso para asegurarnos de que la cookie se haya establecido correctamente
            setTimeout(() => {
                window.location.href = '/';
            }, 100);
        } else {
            alert(data.message);
        }
        isLoggedIn = true;
    };
</script>


<h1>Login</h1>

<form on:submit|preventDefault={handleSubmit}>
	<label for="username">Username</label><br />
	<input bind:value={username} type="text" name="username" id="username" placeholder="Username" required/>
	<br /><br />

	<label for="password">Password</label><br />
	<input bind:value={password} type="text" name="password" id="password" placeholder="Password" required/>
	<br /><br />
	<button type="submit">Login</button>
</form>

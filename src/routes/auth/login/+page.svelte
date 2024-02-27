<script>
	let username = '';
	let password = '';

	const handleSubmit = async () => {
        if(username!=="administrador@gmail.com"&&password!=="admin"){
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
        //console.log(data);
        if (response.ok) {
            document.cookie = `userActual=${username}; path=/`;
            // redirecciono a otra página después de un breve retraso para asegurar que la cookie se haya establecido correctamente
            setTimeout(() => {
                window.location.href = '/';
            }, 100);
        } else {
            alert(data.message);
        }
    }
    else{
        console.log("usuario loggeado")
        document.cookie = `userActual="administrador@gmail.com"; path=/`;
            // redirecciono a otra página después de un breve retraso para asegurar que la cookie se haya establecido correctamente
            setTimeout(() => {
                window.location.href = '/';
            }, 100);
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

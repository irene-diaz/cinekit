<script>
	import { page } from '$app/stores';
	import { goto, preloadData } from '$app/navigation';
	const handleLogout = () => {
		document.cookie = 'userActual=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        goto('/');
		window.location.reload();
    };
	/*
	export const handleLogout = async ({ cookies }) => {
        await cookies.delete('userActual');
        return {
            status: 303,
            headers: {
                location: '/' // Redirige a la página de inicio
            }
        };
    };
	*/
</script>

<!--Si el load de una ruta ha devuelto el atributo title, ponemos como titulo ese atributo, sino ponemos el texto por defecto. Esto es el head(titulo de la url)-->
<svelte:head>
	<title>{$page.data.title || 'Sveltekit demo'}</title>
</svelte:head>

<header class="layout-header">
	<!--Creamos dos rutas relativas, mediante enalces que te llevan a la ruta casa y a la ruta products-->
	<a href="/">Home</a>
	

	<a href="/todas">Todas</a>

	{#if $page.data.user=="administrador@gmail.com"}
		<a href="/administrador">Administrador</a>
	{/if}

	{#if $page.data.user}
		{#if $page.data.user!=="administrador@gmail.com"}
			<a href="/favoritos">Favoritas</a>
		{/if}
	{/if}
	
	

	{#if $page.data.user}
		<button on:click={handleLogout} class="logout">Logout</button>
	{:else}
		<a href="/auth/login" class="login">Login</a>
	{/if}
</header>

<style>




 /* Estilos para el encabezado */
 .layout-header {
        background-color: #7BA9CD;
        padding: 1.5rem 0;
        text-align: center;
    }

    .layout-header a {
        color: #fff;
        text-decoration: none;
        margin: 0 1.5rem;
        font-size: 1.7rem; /* Tamaño de fuente en rem */
        transition: color 0.3s; /* Transición para el cambio de color */
    }

    .layout-header a:hover {
        color: #276aa1; /* Cambio de color al pasar el cursor */
    }

    .layout-header .logout {
        background-color: #ff5c5c;
        color: #fff;
        border: none;
        border-radius: 0.5rem; /* Bordes redondeados en rem */
        padding: 0.8rem 1.5rem; /* Relleno en rem */
        cursor: pointer;
        font-size: 1.2rem; /* Tamaño de fuente en rem */
        transition: background-color 0.3s;
    }

    .layout-header .logout:hover {
        background-color: #ff3a3a;
    }

    .layout-header .login {
        color: #fff;
        text-decoration: none;
        padding: 0.8rem 1.5rem; /* Relleno en rem */
        border-radius: 0.5rem; /* Bordes redondeados en rem */
        background-color: #4caf50;
        font-size: 1.2rem; /* Tamaño de fuente en rem */
        transition: background-color 0.3s, color 0.3s; /* Transiciones para color y fondo */
    }

    .layout-header .login:hover {
        background-color: #43a047;
        color: #fff; /* Cambio de color al pasar el cursor */
    }








</style>
<script>
	import { page } from '$app/stores';
	import { goto, preloadData } from '$app/navigation';
</script>

<!--Si el load de una ruta ha devuelto el atributo title, ponemos como titulo ese atributo, sino ponemos el texto por defecto. Esto es el head(titulo de la url)-->
<svelte:head>
	<title>{$page.data.title || 'Sveltekit demo'}</title>
</svelte:head>

<header class="layout-header">
	<!--Creamos dos rutas relativas, mediante enalces que te llevan a la ruta casa y a la ruta products-->
	<a href="/">Home</a>
	<!--Desactivamos la precarga de hover para el enlace de productos-->
	<!--<a href="/products" data-sveltekit-preload-data="off">Products</a>-->
	<!--los datos no se recargan, solo el codigo-->
	<!--<a href="/products" data-sveltekit-preload-code="hover">Products</a>-->
	<!--<a href="/products" data-sveltekit-reload>Products</a>-->
	<a href="/administrador">Administrador</a>
	<a href="/todas">Todas</a>
	<a href="/favoritos">Favoritas</a>

	<!--Creacion de un boton que navega a productos, con onclick navegamos a la ruta products, cuando el raton este encima o posado se precarga el fetch de productos-->
	<!--<button
		on:mouseover={async () => {
			await preloadData('/products');
		}}
		on:focus={async () => {
			await preloadData('/products');
		}}
		on:click={() => goto('/products')}
		>Goto prodcuts
	</button>-->
</header>

<style>
	a {
		color: #e9c46a;
		text-decoration: none;
	}
	.layout-header {
		background-color: #264653;
		color: #f4a261;
		font-size: 30px;
		text-align: center;
		padding: 10px;
	}
</style>

<script>
	import Main from '../components/Main.svelte';
	import Vermas from '../components/Vermas.svelte';
	import { vermas } from '../stores/store';
	import { darkmode } from '../stores/store';

	
</script>
<footer class={$darkmode ? 'darkmode' : ''}>

	{#if $vermas != ''}
	<Vermas />
{:else}
	<Main />
{/if}
</footer>

<style>
	:global(.prin#darkmode) {
		background-color: black;
		color: white;
	}
</style>

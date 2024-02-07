<script>
	import Main from '../components/Main.svelte';
	import Vermas from '../components/Vermas.svelte';
	import { vermas } from '../stores/store';
</script>

{#if $vermas != ''}
	<Vermas />
{:else}
	<Main />
{/if}

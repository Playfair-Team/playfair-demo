<script lang="ts">
	import '../app.css';
	import LandingHeader from "$lib/LandingHeader/LandingHeader.svelte";
</script>

<LandingHeader />

<main>
	<slot />
</main>

<style>
	main{
		height: 100%;
		padding: 25px;
		padding-top: 10px;
	}
</style>
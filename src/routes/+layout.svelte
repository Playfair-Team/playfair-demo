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
		padding-left: 25px;
		padding-right: 25px;
	}
</style>
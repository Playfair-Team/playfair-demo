<script lang="ts">
  import Header from '$lib/Header/Header.svelte';
</script>

<Header />
<main>
	<slot />
</main>

<style>
	main{
    display: flex;
		height: 100%;
		padding: 25px;
		padding-top: 10px;
	}
</style>
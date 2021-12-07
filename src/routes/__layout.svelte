<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.scss';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
	main {
		max-width: 600px;
		margin-inline: auto;
		padding: 3vw;
	}
</style>
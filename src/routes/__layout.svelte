<script>
	import { setupI18n } from '$lib/i18n';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.scss';

	setupI18n();
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

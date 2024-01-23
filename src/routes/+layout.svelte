<script>
	import { setupI18n } from '$lib/i18n';
	import Aside from '$lib/header/Aside.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.scss';

	setupI18n();
</script>

<div>
	<div class="layout">
		<Aside/>
		<main>
			<slot />
		</main>
	</div>
</div>

<Footer />



<style lang="scss">
	main {
		max-width: 600px;
		width: 100%;
		margin-inline: auto;
		padding-left: calc(48px + 5%);
		padding-right: 5%;
		padding-top: 7.5%;

		@media  screen and (min-width: 568px) {
			padding-left: calc(64px + 10%);
			padding-right: 10%;
		}
	}

	.layout {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}
</style>

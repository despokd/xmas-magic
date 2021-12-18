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
		padding-inline: 72px;
	}

	.layout {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}
</style>

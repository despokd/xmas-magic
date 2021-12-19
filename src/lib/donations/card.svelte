<script>
	import { _ } from '$lib/i18n';

	export let donationId = '#';
	export let name = 'Donation';
	export let img;
</script>

<section class="card donation">
	<h2>{name}</h2>
	<div class="container">
		<div class="col-excerpt">
			<slot />
		</div>
		{#if img}
			<figure>
				<img src="/donations/{img}" alt="" />
				<figcaption>&copy;</figcaption>
			</figure>
		{/if}
	</div>
	>&nbsp;<a sveltekit:prefetch href="/donations/{donationId}" title={name}
		>{$_('donations.details')}</a
	>
</section>

<style lang="scss">
	.card {
		background: #e6e6e6;
		padding: 0.5rem;
		margin-bottom: 1rem;

		@media (prefers-color-scheme: dark) {
			background: #131614;
		}

		h2 {
			margin-top: 0;
		}
	}
	.container {
		padding-bottom: 1rem;
		display: flex;
		flex-direction: column;
		flex-direction: column-reverse;

		@media screen and (min-width: 568px) {
			flex-direction: row;
		}
	}

	figure {
		margin: 0;
		img {
			object-fit: cover;
			aspect-ratio: 5/4;
			width: 100%;

			@media screen and (min-width: 568px) {
				margin-left: 0.5rem;
				width: 10em;
			}
		}
	}
</style>

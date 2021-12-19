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
			<div class="col-img">
				<img src="/donations/{img}" alt="" />
			</div>
		{/if}
	</div>
	>&nbsp;<a sveltekit:prefetch href="/donations/{donationId}" title={name}>{$_('donations.details')}</a>
</section>

<style lang="scss">
	.container {
		padding-bottom: 1rem;
		display: flex;
	}

	.col-img {
		img {
			object-fit: cover;
			aspect-ratio: 3/2;
			width: 9em;
		}
	}
</style>

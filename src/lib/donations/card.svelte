<script>
	import { _ } from '$lib/i18n';

	export let donationId = '#';
	export let name = 'Donation';
</script>

<div class="card donation">
	<h2>{name}</h2>
	<p class="excerpt">
		<slot />
	</p>
	<a sveltekit:prefetch href="/donations/{donationId}" class="link-arrow-right">{$_('donations.details')}</a>
</div>

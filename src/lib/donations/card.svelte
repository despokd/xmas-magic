<script>
	export let donationId = '#';
	export let name = 'Donation';
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<div class="card donation">
	<h2>{name}</h2>
	<p class="excerpt">
		<slot />
	</p>
	<a sveltekit:prefetch href="/donations/{donationId}" class="link-arrow-right">Details</a>
</div>

<script>
	import DonationCard from '$lib/donations/card.svelte';
</script>

<svelte:head>
	<title>Donations</title>
</svelte:head>

<section>
	<h1>Donations</h1>

	<ul class="list-grid">
		<li>
			<DonationCard donationId="example" name="Example">
				<span slot="excerpt">
					Exercitationem sunt dolor ab. Quod voluptate voluptatem eos quibusdam quidem repellat. Ea possimus quaerat perspiciatis id vero minus consequatur. Dolorem quia quo odio. Aperiam eligendi enim eveniet sint eveniet. Quos esse dolorum delectus
				</span>
			</DonationCard>
		</li>
	</ul>
</section>
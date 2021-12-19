<script>
	import { _ } from '$lib/i18n';
	import DonationCard from '$lib/donations/card.svelte';
	import Title from '$lib/header/Title.svelte'
</script>

<Title title="{$_('donations.title')}"></Title>

<div class="content">
	<h1>{$_('donations.title')}</h1>

	<ul class="list-grid">
		<li>
			<DonationCard donationId="example" name={
				($_('id') == 'de') ? 'Beispiel' : 'Example'
			}>
			{#if $_('id') == 'de'}
				DE Exercitationem sunt dolor ab. Quod voluptate voluptatem eos quibusdam quidem repellat. Ea
				possimus quaerat perspiciatis id vero minus consequatur. Dolorem quia quo odio. Aperiam
				eligendi enim eveniet sint eveniet. Quos esse dolorum delectus
			{:else}
				EN Exercitationem sunt dolor ab. Quod voluptate voluptatem eos quibusdam quidem repellat. Ea
				possimus quaerat perspiciatis id vero minus consequatur. Dolorem quia quo odio. Aperiam
				eligendi enim eveniet sint eveniet. Quos esse dolorum delectus
			{/if}
			</DonationCard>
		</li>
	</ul>
</div>

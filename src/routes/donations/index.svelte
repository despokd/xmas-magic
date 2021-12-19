<script>
	import { _ } from '$lib/i18n';
	import DonationCard from '$lib/donations/card.svelte';
	import Title from '$lib/header/Title.svelte';
</script>

<Title title={$_('donations.title')} />

<div class="content">
	<h1>{$_('donations.title')}</h1>

	<ul class="list-grid">
		<li>
			<!-- 
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
			-->

			<DonationCard
				donationId="ortrand"
				name={$_('id') == 'de' ? 'Ortrander Freibad' : 'Ortrand outdoor pool'}
				img="ortrand-img.jpg"
			>
				{#if $_('id') == 'de'}
					Das Freibad in Ortrand sucht Unterstützende. Sie wollen den Menschen, ob Kinder oder
					Senioren, wieder Bade- und Schwimmfreuden bereiten.
				{:else}
					The outdoor pool in Ortrand is looking for supporters. They want to give people, whether
					children or seniors, to enjoy bathing and swimming again.
				{/if}
			</DonationCard>
		</li>
	</ul>
</div>

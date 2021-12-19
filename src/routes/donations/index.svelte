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
		<li>
			<DonationCard
				donationId="berlin"
				name={$_('id') == 'de'
					? 'MUSIK macht uns gemeinsam STARK'
					: 'MUSIC makes us STRONG together'}
				img="berlin-img.jpg"
			>
				{#if $_('id') == 'de'}
					Durch das Musikprojekt können Kinder der Kreuzberger Hunsrück-Grundschule unabhängig von
					der finanziellen Situation ihrer Eltern während der Schulzeit ein Instrument spielen
					lernen.
				{:else}
					Through the music project, children at the Kreuzberg Hunsrück Elementary School can,
					regardless of financial situation of their parents can learn to play an instrument during
					their school learn.
				{/if}
			</DonationCard>
		</li>
		<li>
			<DonationCard
				donationId="dresden-garden"
				name={$_('id') == 'de'
					? 'Gärten & Gemeinschaft in Dresden - Wir wollen mehr!'
					: 'Gardens & Community in Dresden - We want more!'}
				img="dresden-garden-img.jpg"
			>
				{#if $_('id') == 'de'}
					Mehr Gemeinschaft, mehr Gärten und Nachhaltigkeit in und für Dresden! Wir machen
					Gemeinschaftsgärten, teilen Wissen in Workshops, verleihen Werkzeuge und pflanzen
					gemeinsam für eine essbare Stadt der Zukunft.
				{:else}
					More community, more gardens and sustainability in and for Dresden! We make community
					gardens, share knowledge in workshops, lend tools and plant together for an edible city of
					the future.
				{/if}
			</DonationCard>
		</li>
		<li>
			<DonationCard
				donationId="dresden-culture"
				name={$_('id') == 'de' ? 'Kuku braucht deine Unterstützung!' : 'Kuku needs your support!'}
				img="dresden-culture-img.jpg"
			>
				{#if $_('id') == 'de'}
					Kukulida, ein Treffpunkt für Kunst, Politik, soziales Miteinander, usw. Wann immer es die
					Auflagen zulassen, kommen nach wie vor Menschen & nutzen den Veranstaltungsraum. Sie
					brauchen deine Kohle, damit es weiter gehen kann!
				{:else}
					Kukulida, a meeting place for art, politics, social interaction, etc. Whenever the
					conditions allow it, people still come & use the event space. They need your cash to keep
					it going!
				{/if}
			</DonationCard>
		</li>
		<li>
			<DonationCard
				donationId="animals"
				name={$_('id') == 'de'
					? 'Hilfe für die Tiere des Tierschutzvereins Delmenhorst'
					: 'Help for the animals of the Tierschutzverein Delmenhorst'}
				img="animals-img.jpg"
			>
				{#if $_('id') == 'de'}
					Helfen Sie unseren Tieren. Seit 2003 existiert nun unser wunderschöner Tierschutzhof am
					Schillbrok in Delmenhorst. Helfen Sie uns dabei, weiterhin als Zuflucht für
					schutzbedürftige Tiere zu dienen.
				{:else}
					Help our animals. Since 2003 exists our beautiful animal protection farm at the Schillbrok
					in Delmenhorst. Please help us to continue to serve as a sanctuary for animals in need of
					protection.
				{/if}
			</DonationCard>
		</li>
	</ul>
</div>

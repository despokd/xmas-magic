<script>
	import { _ } from '$lib/i18n';
	import DonationPost from '$lib/donations/post.svelte';
</script>

<DonationPost
	amount="20"
	name={$_('id') == 'de'
		? 'Hilfe für die Tiere des Tierschutzvereins Delmenhorst'
		: 'Help for the animals of the Tierschutzverein Delmenhorst'}
	img="animals-img.jpg"
	urlDonate="https://www.betterplace.org/projects/36723-hilfe-fuer-die-tiere-des-tierschutzvereins-delmenhorst-u-u-e-v"
	urlHome="https://www.tierschutzverein-delmenhorst.de/"
	organization="Tierschutzverein Delmenhorst und Umgebung e.V."
>
	{#if $_('id') == 'de'}
		<p>
			Wir geben Tieren ein vorübergehendes, liebevolles Zuhause. 7 Tage die Woche, 365 Tage im Jahr.
			Im Jahr 2017 haben wir ca. 130 vermittelt.
		</p>
		<p>
			Aber leider müssen wir, genau wie fast die Hälfte aller Tierheime, jedes Jahr erneut um unsere
			Existenz kämpfen. Tierarzt, Heizöl, Renovierungen, Katzenfutter etc. Die Liste der Kosten und
			der benötigten Dinge lässt sich endlos fortsetzen.
		</p>
		<p>
			Nur dank Euch lieben Spendern schaffen wir es uns Jahr für Jahr über Wasser zu halten. Denn
			wir bekommen keine finanzielle Hilfe von der Stadt.
		</p>
		<p>
			Momentan können wir durch interne Umstrukturierungen den Betrieb einigermaßen am Laufen
			halten. Doch lange wird es so nicht mehr funktionieren. Dringende Renovierungsmaßnahmen stehen
			an die die Existenz des Hofes bedrohen.
		</p>
		<p>
			Der Tierschutzverein Delmenhorst u.U. e.V. ist ein gemeinnütziger Verein, der bereits seit
			1953 besteht. Seit 2003 betreiben wir, dank einer großzügigen Erbschaft von Frau Johanne
			Köstler, einen Tierschutzhof am Rande von Delmenhorst.
		</p>
		<p>
			Helft uns dabei, dass wir damit weiter machen können und dass unseren Tieren weiterhin
			geholfen werden kann. Vielen Dank!
		</p>
	{:else}
		<p>
			We give animals a temporary, loving home. 7 days a week, 365 days a year. In 2017 we have
			placed about 130.
		</p>
		<p>
			But unfortunately, just like almost half of all animal shelters, we have to fight again every
			year for our fight for our existence. Vet, heating oil, renovations, cat food, etc. The list
			of costs and of things needed can be continued endlessly.
		</p>
		<p>
			It is only thanks to you dear donors that we manage to keep our heads above water year after
			year. Because we do not get any financial help from the city.
		</p>
		<p>
			At the moment, we are able to keep operations running to some extent through internal
			restructuring. operations. But it won't work like this for much longer. Urgent renovation
			measures are pending which threaten the existence of the farm.
		</p>
		<p>
			The animal protection association Delmenhorst u.U. registered association is a non-profit
			association, which already since 1953 exists. Since 2003 we operate, owing to a generous
			inheritance of Mrs. Johanne Köstler, an animal protection yard at the edge of Delmenhorst.
		</p>
		<p>
			Help us so that we can continue with this and that our animals can continue to be helped. can
			continue to be helped. Thank you very much!
		</p>
	{/if}
</DonationPost>

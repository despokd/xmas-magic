<script>
	import { _ } from '$lib/i18n';
	import DonationPost from '$lib/donations/post.svelte';
</script>

<DonationPost
	amount="20"
	name={$_('id') == 'de'
		? 'Ostseefahrten für Mukoviszidose Betroffene & Familien aus Berlin/Brandenburg'
		: 'Baltic sea trips for cystic fibrosis sufferers & families from Berlin/Brandenburg'}
	img="baltic-sea-img.jpg"
	urlDonate="https://www.betterplace.org/projects/80592-klimafahrten-fuer-mukoviszidose-betroffene-familien-aus-berlin-brandenburg"
	urlHome="https://muko-berlin-brandenburg.de/"
	organization="Mukoviszidose LV Berlin-Brandenburg e.V."
>
	{#if $_('id') == 'de'}
		<p>
			Mit Hilfe von Spenden und Förderungen bieten wir für Mukoviszidosebetroffene und ihren
			Familien Klimafahrten an die Ostsee an.
		</p>
		<p>
			Betroffene Familien können mit diesem Angebot eine erholsame Zeit an der Ostsee verbringen, um
			Kraft zu tanken für den oft schwierigen Alltag mit der Erkrankung.
		</p>
		<p>
			Die Ferienwohnungen stellen wir zur Verfügung und auch für die vor Ort anfallende Kurtaxe
			kommen wir auf. Alles, was von den Reisenden selbst organisiert und übernommen werden muss,
			ist die An- und Abreise sowie die Verpflegung vor Ort.
		</p>
		<p>
			Jedes Jahr mieten wir vers. Ferienwohnungen auf Rügen an. Für eine Woche können die
			Betroffenen / Angehörigen eine erholsame Zeit verbringen.
		</p>
	{:else}
		<p>
			With the help of donations and grants, we offer cystic fibrosis sufferers and their families
			climate trips to the Baltic Sea.
		</p>
		<p>
			With this offer, affected families can spend a relaxing time at the Baltic Sea, in order to to
			recharge their batteries for the often difficult everyday life with the disease.
		</p>
		<p>
			We provide the apartments and we also pay the local tourist tax. we pay. Everything that must
			be organized and taken over by the travelers themselves, is the arrival and departure as well
			as the catering on site.
		</p>
		<p>
			Every year we rent vers. Vacation apartments on the island of Rügen. For one week the affected
			/ relatives can spend a relaxing time.
		</p>
	{/if}
</DonationPost>

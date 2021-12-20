<script>
	import { _ } from '$lib/i18n';
	import DonationPost from '$lib/donations/post.svelte';
</script>

<DonationPost
	amount="10"
	name={$_('id') == 'de'
		? 'Festivals im KulturQuartier Schauspielhaus'
		: 'Festivals in the KulturQuartier Schauspielhaus'}
	img="erfurt-culture-img.png"
	urlDonate="https://www.betterplace.org/projects/96744-unterstuetze-zwei-festivals-im-kulturquartier-schauspielhaus"
	urlHome="https://www.kulturquartier-erfurt.de/"
	organization="KulturQuartier Erfurt e.V."
>
	{#if $_('id') == 'de'}
		<blockquote>
			<p>
				"Zwei Festivals im wiedererweckten Schauspielhaus in Erfurt - großartig, ein Schub für die
				Neuentwicklung eines Kulturortes! Ich freue mich besonders über den Schwerpunkt Schauspiel
				und habe gerne die Schirmherrschaft übernommen."
			</p>
			<cite>Schirmherr Andreas Bausewein, Oberbürgermeister der Stadt Erfurt</cite>
		</blockquote>
		<p>
			Helft uns, möglichst vielen Künstler*innen eine Möglichkeit zu bieten, nach langer und
			unfreiwilliger coronabedingter Schaffenspause ihre Arbeiten zu zeigen und ihre Existenz zu
			sichern! Mit Eurer Unterstützung können sie sich endlich wieder auf der Bühne präsentieren,
			beim KulturQuartierFestival und beim Theaterfestival Phoenix, vom 5. bis 26. September im
			KulturQuartier Erfurt.
		</p>
		<p>
			Durch das bundesweit einmalige Projekt „KulturQuartier Schauspielhaus Erfurt“ ist eine
			Kulturimmobilie gerettet worden: Mehr als 800 Genossenschaftler*innen haben das ehemalige
			Schauspielhaus Erfurt aus eigener Kraft gekauft. Bürgerschaftliches Engagement,
			Hartnäckigkeit, Kreativität und ein kluger Umgang mit den begrenzten Ressourcen haben dieses
			innovative Projekt entstehen lassen und machen es zu einem Vorbild für die gesamte
			deutschsprachige Kulturlandschaft. Hier wird ein Kulturort nicht geschlossen, sondern
			wiedereröffnet - und das in Zeiten der Pandemie!
		</p>
		<p>
			Im Rahmen des KulturQuartier Festivals finden zahlreiche Kultur-Akteur*innen zusammen: Das
			Tanztheater Erfurt, das Radio F.R.E.I., der KinoKlub Erfurt sowie zahlreiche weitere
			Künstler*innen aus der Erfurter und Thüringer Kulturszene. In diesem Jahr kommt das
			Theaterfestival PHOENIX mit Künstler*innen aus ganz Deutschland hinzu und erweitert das
			vielfältige Programm um die Sparte Schauspiel.
		</p>
		<p>
			Um beide Festivals zu ermöglichen, freischaffende Künstler*innen fair zu bezahlen und den
			Bürger*innen der Stadt Erfurt ein vielfältiges Programm - drinnen und draußen - anbieten zu
			können, benötigen wir Eure Unterstützung.
		</p>
	{:else}
		<blockquote>
			<p>
				"Two festivals in the reawakened Schauspielhaus in Erfurt - great, a boost for the
				redevelopment of a cultural venue! I am particularly pleased about the focus on drama and
				have gladly taken on the patronage."
			</p>
			<cite>Patron Andreas Bausewein, Lord Mayor of the City of Erfurt</cite>
		</blockquote>
		<p>
			Help us to offer as many artists as possible the possibility to show their work after a long
			and involuntary and involuntary corona-induced creative break to show their work and secure
			their existence. secure their existence! With your support they can finally present themselves
			on stage again, at the KulturQuartierFestival and at the Phoenix Theater Festival, from
			September 5 to 26 in the KulturQuartier Erfurt.
		</p>
		<p>
			Through the nationwide unique project "KulturQuartier Schauspielhaus Erfurt" a cultural
			cultural property has been saved: More than 800 members of the cooperative have bought the
			former Erfurt playhouse under their own steam. Civic commitment, perseverance, creativity and
			a clever use of limited resources have made this innovative project innovative project and
			make it a model for the entire German-speaking cultural landscape. German-speaking cultural
			landscape. Here, a cultural venue is not closed, but reopened - and that in times of a
			pandemic!
		</p>
		<p>
			The KulturQuartier Festival brings together numerous cultural actors: The Tanztheater Erfurt,
			the Radio F.R.E.I., the KinoKlub Erfurt and numerous other artists artists from the Erfurt and
			Thuringia cultural scene. This year the PHOENIX theater festival with artists from all over
			Germany and expands the diverse the diverse program with a drama section.
		</p>
		<p>
			In order to make both festivals possible, to pay freelance artists fairly and to offer the
			offer the citizens of Erfurt a diverse program - indoors and outdoors - we need your support.
			we need your support.
		</p>
	{/if}
</DonationPost>

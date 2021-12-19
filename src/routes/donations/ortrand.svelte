<script>
	import { _ } from '$lib/i18n';
	import DonationPost from '$lib/donations/post.svelte';
</script>

<DonationPost
	amount="10"
	name={$_('id') == 'de' ? 'Ortrander Freibad' : 'Ortrand outdoor pool'}
	img="ortrand-img.jpg"
	urlDonate="https://www.betterplace.org/de/projects/70201-unterstuetzung-ortrander-freibad"
	urlHome="https://www.wsg-niederlausitz.de/"
	organization ="Wassersportgemeinschaft Niederlausitz e.V."
>
	{#if $_('id') == 'de'}
		<p>
			Das Ortrander Freibad wurde schon 1926 eröffnet und nach der Wende in den 90iger Jahren
			grundhaft saniert.
		</p>
		<p>
			Leider war es in den letzten Jahren geschlossen, sodass die Anlagen teilweise verwahrlosten.
			Einige Bürger der südlichsten Stadt Brandenburgs mit ihren knapp 2.500 Einwohner wollten dies
			nicht mehr länger hinnehmen und gründeten einen
			<a href="https://www.wsg-niederlausitz.de" target="_blank" rel="noreferer">Förderverein</a>.
			Dieser hat sich auf die Fahnen geschrieben, das Bad für die Ortrander und ihre Gäste wieder
			flott zu machen und wieder zu eröffnen.
		</p>
		<p>
			Nach vielen Arbeitseinsätzen in den letzten Monaten ist tatsächlich das gelungen, was viele
			nicht mehr für möglich gehalten haben: das Freibad hat seit Mai 2019 wieder geöffnet!
		</p>
		<p>
			Viele Kinder und ihre Eltern, aber auch viele Senioren freuen sich schon riesig: sie alle
			wollen wieder das Bad genießen, Sport treiben oder Schwimmen lernen. Der Betrieb des Bades
			wird durch die Mitglieder des Fördervereins sichergestellt. Das heißt, sie kümmern sich um die
			Rettungsschwimmer, um die Sauberkeit der Becken, um die Außenanlagen und um Vieles mehr. Dafür
			benötigen wir Ihre Unterstützung! Werden Sie ein Teil der Förderfamilie.
		</p>
	{:else}
		<p>
			The Ortrand open-air swimming pool was opened in 1926 and after the reunification in the 90s
			it was fundamentally renovated.
		</p>
		<p>
			Unfortunately, it was closed in the last years, so that the facilities partly neglected. Some
			citizens of the southernmost city of Brandenburg with its nearly 2,500 inhabitants did not
			want to accept this any longer and founded a
			<a href="https://www.wsg-niederlausitz.de" target="_blank" rel="noreferer"
				>promotion association</a
			>. This has itself the flags written, the bath for the Ortrander and their guests again to
			make afloat and to reopen.
		</p>
		<p>
			After many work assignments in the last months actually that succeeded, which many succeeded
			what many no longer thought possible: the outdoor pool has been open again since May 2019!
			open again!
		</p>
		<p>
			Many children and their parents, but also many seniors are already very excited: they all want
			to enjoy the pool again, do sports or learn to swim. The operation of the pool is ensured by
			the members of the sponsoring association. That means they take care of the lifeguards
			lifeguards, the cleanliness of the pools, the outdoor facilities and much more. For this we
			need your support! Become a part of the sponsoring family.
		</p>
	{/if}
</DonationPost>

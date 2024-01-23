<script>
	import { _ } from '$lib/i18n';
	import DonationPost from '$lib/donations/post.svelte';
</script>

<DonationPost
	amount="40"
	name={$_('id') == 'de' ? 'ASB Wünschewagen Thüringen' : 'ASB Wish Wagon Thuringia'}
	img="thuringia-wishes-img.jpg"
	urlDonate="https://www.betterplace.org/projects/66019-asb-wuenschewagen-thueringen"
	urlHome="https://www.asb-jena.de/wuenschewagen"
	organization="Arbeiter-Samariter-Bund Kreisverband Jena e. V."
>
	{#if $_('id') == 'de'}
		<p>
			Alle Menschen haben große und kleine Wünsche oder Träume, die im Laufe ihres Lebens in
			Erfüllung gehen sollen. Doch was ist, wenn die Lebenszeit unerwartet früh zu Ende geht und
			noch ein besonderer Wunsch offen ist?
		</p>
		<p>
			Für die Angehörigen oder Freunde ist es oft nicht einfach, dem schwerkranken Menschen diesen
			Wunsch zu verwirklichen.
		</p>
		<p>Hier hilft der „Wünschewagen in Thüringen“ des Arbeiter-Samariter-Bundes Jena.</p>
		<p>
			Der „Wünschewagen in Thüringen“ erfüllt Wünsche von schwerstkranken Menschen jeden Alters, die
			am Ende ihrer Lebenszeit angekommen sind.
		</p>
		<p>
			Unbürokratisch und kostenlos bringt er die Fahrgäste und deren Begleiter an das gewünschte
			Ziel - sei es ein letzter Urlaub am Meer, die Teilnahme am Familienfest oder der Besuch eines
			Ortes der eigenen Lebensgeschichte. Vieles ist möglich...
		</p>
	{:else}
		<p>
			All people have big and small wishes or dreams that should come true in the course of their
			lives. come true. But what happens when life comes to an unexpectedly early end and there is
			still a special wish is still open?
		</p>
		<p>
			It is often not easy for relatives or friends to make this wish come true for the seriously
			ill person. wish come true.
		</p>
		<p>This is where the "Wünschewagen in Thüringen" of the Arbeiter-Samariter-Bund Jena helps.</p>
		<p>
			The "Wünschewagen in Thüringen" fulfills the wishes of seriously ill people of all ages who
			have reached the end of their lives. have reached the end of their lives.
		</p>
		<p>
			Unbureaucratically and free of charge, it takes passengers and their companions to the desired
			destination - be it a last vacation at the seaside, the participation in a family celebration
			or the visit of a place of one's own life story. Many things are possible...
		</p>
	{/if}
</DonationPost>

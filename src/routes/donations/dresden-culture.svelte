<script>
	import { _ } from '$lib/i18n';
	import DonationPost from '$lib/donations/post.svelte';
</script>

<DonationPost
	amount="20"
	name={$_('id') == 'de' ? 'Kuku braucht deine Unterstützung!' : 'Kuku needs your support!'}
	img="dresden-culture-img.jpg"
	urlDonate="https://www.betterplace.org/projects/86170-kuku-braucht-deine-unterstuetzung"
	urlHome="https://kukulida.de/?page_id=1300"
	organization="Kukulida e.V."
>
	{#if $_('id') == 'de'}
		<p>
			Hey, we need you.<br />Wir sind das Kukulida, ein Treffpunkt für Kunst, Musik, Theater,
			Politik, soziales Miteinander sowie allem, was wir temporär als wichtig empfinden und womit
			Menschen sich in unseren Räumen ausdrücken können und wollen.
		</p>
		<p>
			Wie Ihr alle sind auch wir betroffen von den Entwicklungen, die die globale und lokale
			Verbreitung von COVID-19 in so ziemlich allen Lebensbereichen inzwischen mit sich bringt.
			Sowohl als Kulturverein, der nun alle anstehenden Veranstaltungen vor Ort auf vorerst
			unbestimmte Zeit ausgesetzt hat, sowie als Hausgemeinschaft sind wir mit vielen Veränderungen
			konfrontiert, an die wir uns jetzt noch zu gewöhnen versuchen. Besonders bedrückt sind wir
			wegen des unbelebten Veranstaltungsraumes. - ohne euch als Gäst:innen oder Veranstalterinnen
			ist es ziemlich still bei uns geworden.
		</p>
		<p>
			Wir wollen trotzdem nicht tatenlos bleiben und die Zwangspause nutzen, um den
			Veranstaltungsraum aufzumotzen: ein bisschen renovieren, ein bisschen Instandsetzung und ein
			bisschen neues Equipment besorgen.
		</p>
		<p>
			Wann immer es die Auflagen zulassen, kommen nach wie vor Menschen zu uns um zu proben:
			Sänger:innen, Theaterleute, Bands, politische Gruppen, Musiker:innen… sie alle sollen nicht
			frieren und brauchen Strom.
		</p>
		<p>
			Für alle diese Absichten und Aktionen brauchen wir natürlich Kohle.- die ist momentan ziemlich
			schwer zu beschaffen, weil wir keine Einnahmen durch Veranstaltungen haben. Genau deshalb sind
			wir auf dieser Plattform gelandet und bitten um deine Hilfe.
		</p>
		<p>
			Wenn du ein Paar Euronen übrig hast, freuen wir uns über jeden Cent auf unserem Konto, damit
			der Veranstaltungsraum weiter so gut es geht mit euch belebt werden kann und perspektivisch
			auch im neuen Glanze erstrahlt.
		</p>
		<p>
			Ohne dich geht es nicht. Das war schon vor der Pandemie so und jetzt brauchen wir dich umso
			dringender, damit unser Kulturverein mit seinen Räumen nicht aufgeben muss. Gemeinsam sind wir
			stark!
		</p>
		<p>Deine Kukus.</p>
	{:else}
		<p>
			Hey, we need you.<br />We are the Kukulida, a meeting place for art, music, theater, politics,
			social togetherness and everything that we feel is temporarily important and with which People
			can express themselves in our rooms and want.
		</p>
		<p>
			Like all of you, we are also affected by the developments that the global and local spread of
			spread of COVID-19 in pretty much all areas of life. Both as a cultural association, which has
			now suspended all upcoming events on site for an undetermined indefinite period of time, as
			well as as a house community, we are confronted with many changes which we are still trying to
			get used to. We are particularly depressed because of the uninhabited event space. - without
			you as guests or organizers it has become quite quiet in our house.
		</p>
		<p>
			Nevertheless, we do not want to remain idle and use the compulsory break to pimp the a little
			bit of renovation, a little bit of repair and a little bit of new equipment. a bit of new
			equipment.
		</p>
		<p>
			Whenever the conditions allow, people still come to rehearse with us: Singers, theater people,
			bands, political groups, musicians... all of them should not be freeze and need electricity.
		</p>
		<p>
			For all these intentions and actions, we need money, of course - which is currently quite
			difficult to get at the moment, because we have no income from events. That's exactly why we
			landed on this platform and ask for your help.
		</p>
		<p>
			If you have a few euros to spare, we would be happy about every cent on our account, so that
			so that the event room can continue to be animated with you as well as possible and in
			perspective also shines in new splendor.
		</p>
		<p>
			We can't do it without you. That was already the case before the pandemic and now we need you
			all the more urgently even more urgently, so that our cultural association with its rooms does
			not have to give up. Together we are strong!
		</p>
		<p>Your Kukus.</p>
	{/if}
</DonationPost>

<script>
	import { _ } from '$lib/i18n';
	import DonationPost from '$lib/donations/post.svelte';
</script>

<DonationPost
	amount="50"
	name={$_('id') == 'de'
		? 'Das Familienhörbuch für sterbenskranke junge Eltern'
		: 'The family audio book for terminally ill young parents'}
	img="young-family-img.jpg"
	urlDonate="https://www.betterplace.org/projects/91423-das-familienhoerbuch-fuer-sterbenskranke-junge-eltern"
	urlHome="https://familienhoerbuch.de/"
	organization="Familienhörbuch gGmbH"
>
	{#if $_('id') == 'de'}
		<p>
			Das Familienhörbuch ist eine gemeinnützige Organisation, die sterbenskranken Müttern und
			Vätern mit minderjährigen Kindern, in Deutschland und Anrainerstaaten, die Erstellung einer
			professionellen Audiobiografie ermöglicht.
		</p>
		<p>
			Im Familienhörbuch kommen Menschen zu Wort, die ihre eigene Geschichte und ihre
			Lebenserfahrungen für die eigenen Kinder und Angehörigen, für Freunde, kurzum: für die
			Nachwelt, erzählen und dokumentieren möchten. Erzählt mit ihren eigenen Worten, ihrer eigenen
			Stimme. Authentisch. Persönlich. Liebevoll.
		</p>
		<p>
			Ihre Erzählungen gestalten wir dramaturgisch mit modernsten Techniken des Audiojournalismus
			aus. So schenken wir diesen Eltern ein kostbares Zukunftsgeschenk und zeigen ihnen damit die
			Wertschätzung für ihr eigenes Leben, als auch für das Leben der Hinterbleibenden. Nach dem Tod
			des Elternteils helfen die Hörbücher der hinterbliebenen Familie, insbesondere den Kindern,
			bei der Trauerbewältigung, begleiten sie inpiduell und bedarfsgerecht auf ihrem Weg des
			Trauerns und unterstützen so deren langfristige psychische Gesundheit.
		</p>
		<p>
			Jedes einzelne Familienhörbuch finanziert sich ausschliesslich über Spenden und ist ein
			Herzensprojekt von Judith Grümmer, erfahrene Hörfunkjournalistin und Audiobiografin aus Köln.
		</p>
		<p>
			Jährlich erhalten mehr als 30.000 Eltern mit minderjährigen Kindern eine Krankheitsdiagnose ,
			ca. 7400 davon sind unheilbar und ca. 10% davon haben Interesse an einem professionellen
			Hörbuch. Um das als gemeinnützig anerkannte Projekt weiterhin kostenlos für Eltern zur
			Verfügung stellen zu können, sind Judith Grümmer und ihr Team auf Spendengelder und Sponsoren
			angewiesen.
		</p>
		<p>Helfen auch Sie frühverwaisten Kindern, sich an ihre Eltern zu erinnern.</p>
		<p>
			Etwa 5.000 Euro kostet die Produktion eines Familienhörbuchs. Für die Teilnehmer ist das
			Hörbuch kostenlos. Um diese Audiobiografie aufzunehmen, zu bearbeiten und mit der eigenen
			Musik zu untermalen braucht es etwa 100 Arbeitsstunden eines professionell ausgebildeten
			Audiobiografen*In sowie eines Sounddesigners/Tontechnikers. Das eigene Leben ist dann in sechs
			bis 15 Stunden Laufzeit nachzuhören. Die Teilnehmer*Innen sind zwischen 30 und 40 Jahre alt.
			Es geht nicht ausschließlich um das Sterben und die Krankheit sondern um die schönen Tage im
			bisherigen Leben. Über die eigene Kindheit, die erste Jugendliebe, das Kennenlernen von Mama
			und Papa, die Familiengründung. Auch die Krankheit und die Gedanken zum eigenen Tod können ein
			Kapitel in diesem Hörbuch sein.
		</p>
	{:else}
		<p>
			The Family Hearing Book is a non-profit organization that helps terminally ill mothers and
			fathers with minor children, in Germany and neighboring countries, the creation of a
			professional professional audio biography.
		</p>
		<p>
			The family audio book features people who have shared their own stories and life experiences
			with their experiences for their own children and relatives, for friends, in short: for
			posterity. in short, for posterity. Told in their own words, in their own voice. Authentic.
			Personal. Lovingly.
		</p>
		<p>
			We dramaturgically design your stories using the latest audio journalism techniques. audio
			journalism. In this way, we give these parents a precious gift for the future and show them
			our appreciation for their own lives, as well as for the lives of those left behind. After the
			death of the parent, the audio books help the bereaved family, especially the children,
			children, in coping with their grief, accompany them individually and in line with their needs
			on their path of and thus support their long-term mental health.
		</p>
		<p>
			Jedes einzelne Familienhörbuch finanziert sich ausschliesslich über Spenden und ist ein
			Herzensprojekt von Judith Grümmer, erfahrene Hörfunkjournalistin und Audiobiografin aus Köln.
		</p>
		<p>
			Each individual family audio book is financed exclusively by donations and is a project of
			heart project of Judith Grümmer, experienced radio journalist and audio biographer from
			Cologne.
		</p>
		<p>Help early orphaned children remember their parents, too.</p>
		<p>
			It costs about 5,000 euros to produce a family audio book. For the participants, the audio
			book is free of charge. To record and edit this audiobiography and to accompany it with your
			own music music, it takes about 100 hours of work by a professionally trained audiobiographer
			audiobiographer*In as well as a sound designer / sound technician. One's own life can then be
			heard in six to 15 hours of running time. The participants are between 30 and 40 years old. It
			is not exclusively about dying and illness, but about the beautiful days of their life so far.
			About their own childhood, the first love of their youth, getting to know mom and dad,
			starting a family. and dad, starting a family. Illness and thoughts about one's own death can
			also be a chapter in this audio book. chapter in this audio book.
		</p>
	{/if}
</DonationPost>

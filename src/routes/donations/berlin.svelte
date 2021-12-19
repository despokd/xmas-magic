<script>
	import { _ } from '$lib/i18n';
	import DonationPost from '$lib/donations/post.svelte';
</script>

<DonationPost
	amount=""
	name={$_('id') == 'de' ? 'MUSIK macht uns gemeinsam STARK' : 'MUSIC makes us STRONG together'}
	img="berlin-img.jpg"
	urlDonate="https://www.betterplace.org/de/projects/8301-musik-macht-uns-gemeinsam-stark"
	urlHome="https://hgs-musikprojekte.de/"
	organization="Förderverein HGS e.V. Musikprojekt"
>
	{#if $_('id') == 'de'}
		<p>
			Das Musikprojekt gründet auf einer Elterninitiative an der öffentlichen Hunsrück-Grundschule
			in Berlin Kreuzberg und existiert seit 2007. Alle interessierten Kinder können im Rahmen der
			gebundenen Ganztagsschule einzeln oder in Gruppen ein Musikinstrument erlernen.
		</p>
		<p>
			Da ein sehr großer Anteil der Kinder an unserer Schule aus sozial schwachen Familien und/oder
			Familien mit Migrationshintergrund stammt, ist es eine zentrale Aufgabe unseres Projekts,
			Kindern, deren Eltern sich den Musikunterricht nicht leisten können, eine Teilnahme zu
			ermöglichen. Von derzeit rund 130 Musikschülern und -schülerinnen nehmen jährlich über 30
			Kinder dieses kostenlose Angebot wahr.
		</p>
		<h2>Hier ein Überblick über die aktuellen Inhalte des Musikprojekts</h2>
		<ul>
			<li>
				Instrumentalunterricht: Klavier, Geige, Gitarre, Schlagzeug, Saxophon, Flöte und seit 2016
				auch <em>Bağlama, die türkische Langhalslaute.</em>
			</li>
			<li>
				Benefizkonzert: dieses findet zweimal jährlich statt und die Kinder können vor einem
				Publikum allein oder gemeinsam musizieren.
			</li>
			<li>
				Improvisationsworkshop: einmal jährlich findet dieser Workshop für alle interessierten
				Kinder statt.
			</li>
			<li>CD-Aufnahme: ungefähr jedes zweite Jahr gibt es eine CD-Aufnahme.</li>
			<li>Ballettunterricht: Tanz für alle Kinder</li>
		</ul>
		<p>
			Das Musikprojekt wird ausschließlich durch Spenden, Fördergelder sowie Erlösen aus den
			Benefizkonzerten und dem Verkauf der eigenen Musik-CDs finanziert. Ferner unterstützen das
			Projekt einige kleinere Stiftungen, Privatpersonen und nicht zuletzt die Patinnen und Paten.
			Damit das Musikprojekt fortbestehen kann, sind wir dringend auf finanzielle Unterstützung
			angewiesen. Wir freuen uns über einmalige oder regelmäßige Spenden.<br /><br />
		</p>
		<p>
			Wir hoffen, wir konnten Ihr Interesse wecken und freuen uns, wenn Sie dazu beitragen würden,
			dass Kinder aus sozial schwachen Familien und/oder mit Migrationshintergrund ein Instrument
			lernen und damit Zugang zu mehr Bildung und gesellschaftlicher Teilhabe erhalten.
		</p>
	{:else}
		<p>
			The music project is based on a parents' initiative at the public Hunsrück elementary school
			in Berlin Kreuzberg. in Berlin Kreuzberg and has been in existence since 2007. all-day school,
			either individually or in groups, to learn a musical instrument.
		</p>
		<p>
			Since a very large percentage of the children at our school come from socially disadvantaged
			families and/or families with a migration background, one of the central tasks of our project
			is to offer children project is to enable children whose parents cannot afford music lessons
			to participate. to participate. Of the current 130 music students, more than 30 take advantage
			of this free 30 children take advantage of this free offer every year.
		</p>
		<h2>Here is an overview of the current contents of the music project</h2>
		<ul>
			<li>
				Instrumental lessons: piano, violin, guitar, drums, saxophone, flute and since 2016 also <em
					>Bağlama, the Turkish long-necked lute.</em
				>
			</li>
			<li>
				Benefit concert: this takes place twice a year and the children can play in front of a play
				music alone or together in front of an audience.
			</li>
			<li>
				Improvisation workshop: once a year this workshop takes place for all interested children
				takes place.
			</li>
			<li>CD recording: about every other year there is a CD recording.</li>
			<li>Ballet classes: dance for all children</li>
		</ul>
		<p>
			The music project is financed exclusively through donations, grants and proceeds from the
			benefit concerts and the sale of its own music CDs. The project is also supported project is
			supported by a number of smaller foundations, private individuals and, last but not least, the
			godmothers and godfathers. In order for the music project to continue, we urgently need
			financial support. financial support. We welcome one-time or regular donations.
		</p>
		<p>
			We hope we have been able to arouse your interest and would be pleased if you would contribute
			to this, that children from socially disadvantaged families and/or with a migrant background
			learn an instrument and thus gain access to more education and social participation.
		</p>
	{/if}
</DonationPost>

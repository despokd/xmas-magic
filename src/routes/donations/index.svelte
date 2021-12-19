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
		<li>
			<DonationCard
				donationId="erfurt-culture"
				name={$_('id') == 'de'
					? 'Festivals im KulturQuartier Schauspielhaus'
					: 'Festivals in the KulturQuartier Schauspielhaus'}
				img="erfurt-culture-img.png"
			>
				{#if $_('id') == 'de'}
					Helft uns, möglichst vielen Künstler*innen eine Möglichkeit zu bieten, nach langer,
					unfreiwilliger Schaffenspause ihre Arbeiten zu zeigen und ihre Existenz zu sichern! Mit
					Eurer Unterstützung können sie sich endlich wieder auf der Bühne präsentieren.
				{:else}
					Help us to offer as many artists as possible the opportunity to show their work after a
					long, to show their work after a long, involuntary break and to secure their existence!
					With With your support they can finally present themselves on stage again.
				{/if}
			</DonationCard>
		</li>
		<li>
			<DonationCard
				donationId="youth"
				name={$_('id') == 'de'
					? 'Werden Sie Pate des Jugendrats!'
					: 'Become a sponsor of the Youth Council!'}
				img="youth-img.jpg"
			>
				{#if $_('id') == 'de'}
					Die Generationen Stiftung stärkt die jungen Generationen, um ihnen wieder eine Stimme zu
					geben, und sorgt dafür, dass die Politik nachhaltig und langfristig im Interesse der
					jungen und zukünftigen Generationen handelt.
				{:else}
					The Generations Foundation empowers the younger generations to give them a voice again and
					ensures that politics acts sustainably and in the long term in the interest of the young
					young and future generations.
				{/if}
			</DonationCard>
		</li>
		<li>
			<DonationCard
				donationId="young-family"
				name={$_('id') == 'de'
					? 'Das Familienhörbuch für sterbenskranke junge Eltern'
					: 'The family audio book for terminally ill young parents'}
				img="young-family-img.jpg"
			>
				{#if $_('id') == 'de'}
					Das erste was Kinder hören ist die Stimme der Mutter und des Vaters. Mit dem
					Familienhörbuch überlebt die Stimme der verstorbenen Eltern über den Tod hinaus. Helfen
					auch Sie frühverwaisten Kindern die Stimme ihrer Eltern nicht zu vergessen.
				{:else}
					The first thing children hear is the voice of their mother and father. With the family
					audio book, the voice of the deceased parents survives beyond death. Help children
					orphaned at an early age not to forget the voice of their parents.
				{/if}
			</DonationCard>
		</li>
		<li>
			<DonationCard
				donationId="thuringia-wishes"
				name={$_('id') == 'de' ? 'ASB Wünschewagen Thüringen' : 'ASB Wish Wagon Thuringia'}
				img="thuringia-wishes-img.jpg"
			>
				{#if $_('id') == 'de'}
					Nach wie vor ist oberstes Ziel unseres Projektes todkranken Menschen einen letzten Wunsch
					zu erfüllen. Dazu fahren wir unsere Fahrgäste mit dem Wünschewagen, innerhalb Deutschland,
					an ein Ziel ihrer Träume.
				{:else}
					The primary goal of our project is still to fulfill the last wish of terminally ill
					people. To this end, we drive our passengers to the destination of their dreams with the
					"Wünschewagen" within Germany.
				{/if}
			</DonationCard>
		</li>
		<li>
			<DonationCard
				donationId="cancer-run"
				name={$_('id') == 'de'
					? 'Krebs kennt keine Kilometer - Adventstour'
					: 'Cancer knows no kilometers - Advent Tour'}
				img="cancer-run-img.jpg"
			>
				{#if $_('id') == 'de'}
					Unter diesem Motto bin ich, Marcel Wilhelm, in voller Rettungsdienstmontur über 700
					Kilometer für krebskranke und benachteiligte Kinder gelaufen. Dieses Jahr zur Adventszeit,
					fast 1 Jahr nach meinem ersten Spendenlauf, starte ich meinen dritten, um damit die 1000
					Kilometer marke zu knacken!
				{:else}
					Under this motto, I, Marcel Wilhelm, ran over 700 kilometers in full rescue gear
					kilometers for children with cancer and disadvantaged children. This year during Advent,
					almost 1 year after my first fundraising run, I am starting my third, in order to break
					the 1000 kilometer mark!
				{/if}
			</DonationCard>
		</li>
	</ul>
</div>

<script>
	import { _ } from '$lib/i18n';
	import DonationPost from '$lib/donations/post.svelte';
</script>

<DonationPost
	amount="10"
	name={$_('id') == 'de'
		? 'Fest & Flauschig Live -Himmlisches Boosterfest'
		: 'Fest & Fluffy Live -Himmelic Boosterfest'}
	img="patrik-img.png"
	urlDonate="https://www.betterplace.org/fundraising-events/39907-fest-flauschig-live-himmlisches-boosterfest"
	urlHome="https://www.tierschutzverein-delmenhorst.de/"
	organization="Jan Böhmermann / Olli Schulz"
>
	{#if $_('id') == 'de'}
		<p>
			Auch 2021 glauben wir noch an Feiertags-Traditionen und diese darf auf keinen Fall fehlen: die
			wohltätige „Fest & Flauschig“-Gala von Jan Böhmermann und Olli Schulz, diesmal auch unter dem
			Titel bekannt: "Fest & Flauschig Live -Himmlisches Boosterfest".
		</p>
		<p>
			Und auch in diesem Jahr gab es die Show der beiden gratis als Livestream - das ultimative
			Show-Highlight für Euch zum Jahresende.
		</p>
		<p>
			Jan und Olli haben wieder ihre große Spendenaktion gestartet, um für einige von ihnen
			ausgewählte Charity-Organisationen zu sammeln. Im vergangenen Jahr kamen mit Eurer Hilfe
			sagenhafte 296.365 € zusammen! Vielleicht lässt sich das sogar noch toppen.
		</p>
		<h2>Jan spendet an</h2>
		<ul>
			<li>
				<a href="https://stiftung-hochschulmedizin.de/ihre-spende" target="_blank" rel="noreferer"
					>Die Stiftung Hochschulmedizin der Uniklinik Dresden</a
				>
			</li>
			<li>
				<a href="https://wir-packens-an.info/spenden" target="_blank" rel="noreferer"
					>Wir packen's an e.V. - Nothilfe für Geflüchtete</a
				>
			</li>
		</ul>
		<h2>Olli spendet an</h2>
		<ul>
			<li>
				<a href="https://sternenbruecke.de" target="_blank" rel="noreferer"
					>Kinder-Hospiz Sternenbrücke
				</a>
			</li>
			<li>
				<a href="https://wuenschewagen.de				" target="_blank" rel="noreferer">Der Wünschewagen </a>
			</li>
		</ul>
		<p>Über jede Spende von euch freuen die beiden sich sehr.</p>
		<p>
			Helft uns dabei, dass wir damit weiter machen können und dass unseren Tieren weiterhin
			geholfen werden kann. Vielen Dank!
		</p>
		<a
			href="https://www.betterplace.org/fundraising-events/39907-fest-flauschig-live-himmlisches-boosterfest/news/251926"
			target="_blank"
			rel="noreferer">Eine Nachricht von Jan & Olli</a
		>
	{:else}
		<p>
			In 2021, we still believe in holiday traditions and this one should definitely not be missed:
			the charitable "Fest & Flauschig" gala by Jan Böhmermann and Olli Schulz, this time also known
			under the title: "Fest & Flauschig Live -Himmlisches Boosterfest".
		</p>
		<p>
			And also this year, the show of the two was available for free as a livestream - the ultimate
			show highlight for you at the end of the year.
		</p>
		<p>
			Jan and Olli have started again their big fundraising campaign to collect money for some of
			their selected charity organizations. Last year, with your help we collected an incredible
			296,365 €! Maybe this can even be topped.
		</p>
		<h2>Jan donates to</h2>
		<ul>
			<li>
				<a href="https://stiftung-hochschulmedizin.de/ihre-spende" target="_blank" rel="noreferer"
					>The Foundation for University Medicine at Dresden University Hospital</a
				>
			</li>
			<li>
				<a href="https://wir-packens-an.info/spenden" target="_blank" rel="noreferer"
					>Wir packen's an e.V. - Emergency aid for refugees</a
				>
			</li>
		</ul>
		<h2>Olli donates to</h2>
		<ul>
			<li>
				<a href="https://sternenbruecke.de" target="_blank" rel="noreferer"
					>Sternenbrücke Children's Hospice
				</a>
			</li>
			<li>
				<a href="https://wuenschewagen.de				" target="_blank" rel="noreferer">Der Wünschewagen </a>
			</li>
		</ul>
		<p>They are very happy about every donation from you.</p>
		<p>
			Help us so that we can continue with this and that our animals can continue to be helped. can
			continue to be helped. Thank you very much!
		</p>
		<a
			href="https://www.betterplace.org/fundraising-events/39907-fest-flauschig-live-himmlisches-boosterfest/news/251926"
			target="_blank"
			rel="noreferer">A message from Jan & Olli</a
		>
	{/if}
</DonationPost>

<script>
	import { _ } from '$lib/i18n';
	import DonationPost from '$lib/donations/post.svelte';
</script>

<DonationPost
	amount="40"
	name={$_('id') == 'de'
		? 'Gärten & Gemeinschaft in Dresden - Wir wollen mehr!'
		: 'Gardens & Community in Dresden - We want more!'}
	img="dresden-garden-img.jpg"
	urlDonate="https://www.betterplace.org/projects/102767-gaerten-gemeinschaft-in-dresden-wir-wollen-mehr"
	urlHome="https://ufer-projekte.de/"
	organization="UFER Projekte Dresden e.V."
>
	{#if $_('id') == 'de'}
		<p>
			Dresden braucht mehr Gemeinschaft, mehr ökologische Gärten und mehr Nachhaltigkeit im Alltag.
		</p>
		<p>
			Dafür bringen wir dich und deine Nachbar*innen in Gemeinschaftsgärten zusammen und pflanzen
			gemeinsam eine essbare Stadt. Wir organisieren für dich niederschwellige Bildungsangebote, in
			denen du Nachhaltigkeit praktisch erleben und erlernen kannst. Unsere Werkzeuge und Geräte
			stellen wir dir für gemeinschaftliche Projekte zur Verfügung. In der Alten Gärtnerei Pieschen
			kannst du Himbeeren naschen, Süßkartoffeln ranken sehen und so erleben, wie urbane
			Landwirtschaft in Dresden eine Zukunft hat.
		</p>
		<p>
			In 2022 wollen wir mit Hilfe der Spenden größere Ziele ins Auge fassen und einige
			Lieblingsideen in die Tat umsetzen. Dank der Weihnachtspendenaktion der Biocompany werden
			deine Spenden bis zum 31.12.2021 verdoppelt - du bringst uns also doppelt voran! In unseren 4
			Spendenbedarfen haben wir die Lieblingsideen aufgelistet. Mit deiner Spende kannst du dafür
			sorgen, dass möglichst viele Dresdner*innen in 2022
		</p>
		<ul>
			<li>Saatgut in Gemeinschaftsgärten tauschen</li>
			<li>Gute Werkzeuge teilen statt kaufen</li>
			<li>Fermentation kennen und lieben lernen</li>
			<li>eine ökologische Toilette benutzen</li>
		</ul>
	{:else}
	<p>
		Dresden needs more community, more ecological gardens and more sustainability in everyday life.
	</p>
	<p>
		To do this, we bring you and your neighbors together in community gardens and plant
		an edible city together. We organize low-threshold educational programs for you, in which you can
		where you can learn and experience sustainability in practice. Our tools and equipment
		tools and equipment for community projects. In the Old Market Garden Pieschen
		you can snack on raspberries, see sweet potatoes growing and experience how urban
		agriculture has a future in Dresden.
	</p>
	<p>
		In 2022, with the help of the donations, we want to set our sights on bigger goals and put some of our
		favorite ideas into reality. Thanks to the Biocompany Christmas fundraiser, your donations will be
		your donations will be doubled until Dec. 31, 2021 - so you'll be helping us move forward twice! In our 4
		donation needs, we have listed our favorite ideas. With your donation you can
		make sure that as many Dresdeners as possible in 2022
	</p>
	<ul>
		<li>Swap seeds in community gardens</li>
		<li>Share good tools instead of buying them</li>
		<li>Get to know and love fermentation</li>
		<li>use an ecological toilet</li>
	</ul>
	{/if}
</DonationPost>

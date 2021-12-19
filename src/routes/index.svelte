<script context="module">
	import { _ } from '$lib/i18n';
	import Title from '$lib/header/Title.svelte';
	import DonationCard from '$lib/donations/card.svelte';

	export const prerender = true;
</script>

<Title title={$_('home.title')} />

<div class="content">
	<h1>{$_('home.title')}</h1>
	{#if $_('id') == 'de'}
		<p>Fröhliche Weihnachten von Verena & Kilian</p>
		<p>
			Dieses Jahr wird zu Weihnachten wieder alles anders. Das haben wir zum Anlass genommen dieses
			Jahr nicht nur euch Beschenkten eine Freude zu machen, sondern darüber hinaus Gutes zu tun.
		</p>
		<p>
			Also haben wir uns hingesetzt und für jeden Teil der Familie lange überlegt, was wir machen
			könnten. Unser Ziel war es Projekte, Organisationen und Vereine zu finden, die auch zu euch
			passen oder ihr selbst unterstützen möchtet.
		</p>
		<p>
			Daraus ist diese Seite entstanden. Hier könnt ihr sehen für welchen guten Zweck wir uns für
			die einzelnen Teile in der Familie entschieden haben.
		</p>
		>&nbsp;<a href="/donations">Alle Spenden anzeigen</a>
	{:else}
		<p>Merry Christmas from Verena & Kilian</p>
		<p>
			This year everything will be different again at Christmas. We have taken this as an
			opportunity this year not only to bring joy to those who receive gifts, but also to do more
			good.
		</p>
		<p>
			Therefore, we sat down and spent a long time thinking about what we could do for each part of
			the family. Our goal was to find projects, organizations and associations that would also suit
			you or that you would like to support yourselves.
		</p>
		<p>
			The result is this page. Now you can see for which charity we have decided for the for the
			various parts in the family.
		</p>
		>&nbsp;<a href="/donations">See all donations</a>
	{/if}
</div>
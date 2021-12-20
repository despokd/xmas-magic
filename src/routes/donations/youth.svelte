<script>
	import { _ } from '$lib/i18n';
	import DonationPost from '$lib/donations/post.svelte';
</script>

<DonationPost
	amount="10"
	name={$_('id') == 'de'
		? 'Werden Sie Pate des Jugendrats!'
		: 'Become a sponsor of the Youth Council!'}
	img="youth-img.jpg"
	urlDonate="https://www.betterplace.org/projects/56574-werden-sie-pate-des-jugendrats"
	urlHome="https://www.generationenstiftung.com/"
	organization="Generationen Stiftung gGmbH"
>
	{#if $_('id') == 'de'}
		<p>
			Selten hatten so viele Menschen Sorge um ihrer Kinder und Enkel. Klimawandel, Kriege und die
			Spaltung der Gesellschaft bedrohen ihre Zukunft.
		</p>
		<p>
			Wir haben deshalb den Jugendrat der Generationen Stiftung ins Lebens gerufen. Unser Ziel ist
			es, der jungen Generationen wieder eine Stimme zu verleihen und dafür zu sorgen, dass die
			Politik nachhaltig und langfristig im Interesse der jungen und zukünftigen Generationen
			handelt.
		</p>
		<p>
			Im Jugendrat setzen sich junge Erwachsene konstruktiv und überparteilich für die Interessen
			nachfolgender Generationen ein. Unser Ziel ist die Beeinflussung politischer Entscheidungen
			zugunsten der Interessen nachfolgender Generationen, also unserer Kinder und Enkel.
		</p>
		<p>
			Unsere Vision ist ein neuer Generationenvertrag, der das Überleben kommender Generationen
			sichert und die Demokratie schützt.
		</p>
	{:else}
		<p>
			Rarely have so many people been concerned about their children and grandchildren.
			grandchildren. Climate change, wars and the division of society threaten their future.
		</p>
		<p>
			We have therefore created the Generations Foundation Youth Council. Our goal is to give the
			young generations a voice again and to ensure that the and ensure that politics acts
			sustainably and in the long term in the interests of the young and future generations. act.
		</p>
		<p>
			In the Youth Council, young adults work constructively and in a non-partisan way for the
			interests of the next interests of future generations. Our goal is to influence political
			decisions in favor of the in favor of the interests of future generations, i.e. our children
			and grandchildren.
		</p>
		<p>
			Our vision is a new intergenerational contract that ensures the survival of future generations
			and protects democracy. and protects democracy.
		</p>
	{/if}
</DonationPost>

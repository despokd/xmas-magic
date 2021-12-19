<script>
	import { _ } from '$lib/i18n';
	import DonationPost from '$lib/donations/post.svelte';
</script>

<DonationPost
	amount="10"
	name={$_('id') == 'de'
		? 'Krebs kennt keine Kilometer - Adventstour'
		: 'Cancer knows no kilometers - Advent Tour'}
	img="cancer-run-img.jpg"
	urlDonate="https://www.betterplace.org/de/fundraising-events/39888-krebs-kennt-keine-kilometer-adventstour"
	urlHome="https://www.youtube.com/watch?v=zXl_duQCrtw"
	organization="Marcel Wilhelm / Kinderhospiz Mitteldeutschland in Tambach-Dietharz"
>
	{#if $_('id') == 'de'}
		<h2>Krebs kennt keine Kilometer!</h2>
		<p>
			Unter diesem Motto bin ich, Marcel Wilhelm, in voller Rettungsdienstmontur über 700 Kilometer
			für krebskranke und benachteiligte Kinder gelaufen. In fast einem Jahr konnte ich dadurch über
			52.000€ an Spendengelder sammeln, die bereits vielen Kindern helfen konnten. :)
		</p>
		<p>
			Dieses Jahr zur Adventszeit, fast 1 Jahr nach meinem ersten Spendenlauf, starte ich meinen
			dritten, um damit die 1000 Kilometer marke zu knacken! 🥾
		</p>
		<h2>Krebs Kennt keine Kilometer - Adventsaktion 🎅</h2>
		<p>
			Ich werde vom 09.12 bis zum 15.12.2021 von Frankfurt nach Augsburg laufen. Wieder in meiner
			Rettungsdienstmontur und um Spendengelder für kranke und benachteiligte Kinder zu sammeln.
		</p>
		<h2>Für welches Projekt werden die Spenden benötigt?</h2>
		<p>
			Ich möchte mit den Spenden 3. Vereine unterstützen, die sich für krebskranke und
			benachteiligte Kinder einsetzten. Mein Ziel ist es, dass jeder Verein im besten Fall 2000€
			bekommt und damit ins neue Jahr starten kann, um wieder tolle Arbeit leisten zu können. 🧡
		</p>
		<p>
			Mit jedem Euro der mehr gespendet wird, möchte ich versuchen, ein großes Projekt umzusetzen!
		</p>
		<h2>Wir bauen nächstes Jahr einen Inklusionsspielplatz! 🥰</h2>
		<p>
			Als ich dieses Jahr meine Spendengelder verteilt habe, war ich bei einem Kinderhospiz zu Gast
			und ich war nicht nur von der Leidenschaft des Personals begeistert, sondern auch von ihrem
			Inklusionsspielplatz auf ihrem Gelände.
		</p>
		<p>
			Es hat so gewirkt, dass die Familien, die momentan in einer so schweren Zeit stecken, für
			einen kleinen Augenblick ihre Sorgen vergessen konnten und dass die Kinder wieder Kind sein
			durften und einfach Spaß hatten.
		</p>
		<p>
			Dieses Gefühl möchte ich mehren Familien mit kranken und behinderten Kindern schenken. Ich
			möchte auch einen Platz erschaffen, an dem es egal ist, dass ein Kind mit oder ohne
			Behinderung/Krankheit mit einem anderen Kind spielt und hoffentlich dadurch neue
			Freundschaften entstehen. Denn: Kind ist Kind!
		</p>
		<p>
			Ich habe schon einen Ort in Aussicht und führe Gespräche mit Gemeinden und Bauherrn, die mir
			bei diesem Projekt nächstes Jahr helfen möchten. Jetzt benötige ich nur noch die nötigen
			finanziellen Mittel dafür.
		</p>
		<p>
			Ich würde mich sehr freuen, wenn Sie wenn ihr nicht nur über eine Spende freuen (Denkt daran
			Kleinvieh macht auch Mist, sprich ich freue mich auch über jede 5€, 10€ oder 1€ Spende)
			sondern auch wenn ihr meinen Spendenaufruf teilt (:
		</p>
		<p>
			Mit freundlichen Grüßen,<br />
			Marcel Wilhelm
		</p>
	{:else}
		<h2>Cancer knows no kilometers!</h2>
		<p>
			Under this motto, I, Marcel Wilhelm, ran over 700 kilometers in full rescue service gear. for
			children with cancer and disadvantaged children. In almost a year, I was able to collect over
			52,000€ in donations, which could already help many children. :)
		</p>
		<p>
			This year at Advent, almost 1 year after my first fundraising run, I start my third third, in
			order to crack the 1000 kilometer mark! 🥾
		</p>
		<h2>Cancer Knows No Kilometers - Advent Action 🎅</h2>
		<p>
			I will run from 09.12 to 15.12.2021 from Frankfurt to Augsburg. Again in my rescue outfit and
			to collect donations for sick and disadvantaged children.
		</p>
		<h2>For which project are the donations needed?</h2>
		<p>
			I would like to use the donations to support associations that help 3. children with cancer
			and disadvantaged children. disadvantaged children. My goal is that each association in the
			best case 2000€ gets and can start with it into the new year to be able to do great work
			again. 🧡
		</p>
		<p>With every euro that is donated more, I would like to try to implement a great project!</p>
		<h2>We are building an inclusion playground next year! 🥰</h2>
		<p>
			When I distributed my donations this year, I visited a children's hospice and I was blown away
			not only by the passion of the staff, but also by their Inclusion Playground on their grounds.
		</p>
		<p>
			The effect was that the families, who are currently in such a difficult time, were able to
			forget their worries for a short their worries for a little while and that the children could
			be children again and just and simply had fun.
		</p>
		<p>
			I would like to give this feeling to more families with sick and disabled children. I would
			also like to create a place where it doesn't matter that a child with or without a with or
			without a handicap/illness plays with another child and hopefully new friendships will
			develop. Because: child is child!
		</p>
		<p>
			I already have a location in mind and am in talks with communities and builders who would like
			to who would like to help me with this project next year. Now I just need the necessary
			financial means for it.
		</p>
		<p>
			I would be very happy if you are not only happy about a donation (Remember little things also
			make crap, i.e. I am also happy about every 5€, 10€ or 1€ donation) but also if you share my
			call for donations (:
		</p>
		<p>
			With kind regards<br />
			Marcel Wilhelm
		</p>
	{/if}
</DonationPost>

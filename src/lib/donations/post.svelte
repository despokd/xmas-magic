<script>
	import { _ } from '$lib/i18n';
	import Title from '$lib/header/Title.svelte';

	export let id;
	export let img;
	export let name = $_('donations.donation');
	export let organization;
	export let amount = 0;
	export let urlHome;
	export let urlDonate;
</script>

<Title title="{$_('donations.title')} - {name}" />

<article>
	<header>
		{#if img}
			<img src="/donations/{img}" alt="" />
		{/if}
		<h1>{name}<br /><small>{$_('donations.title')}</small></h1>
	</header>
	<section>
		<dl>
			{#if organization}
				<dt>{$_('donations.organization')}</dt>
				<dd>
					{#if urlHome}
						<a href={urlHome} target="_blank" rel="norefer">{organization}</a>
					{:else}
						{organization}
					{/if}
				</dd>
			{/if}
			{#if amount}
				<dt>{$_('donations.amount')}</dt>
				<dd>{amount} EUR</dd>
			{/if}
			{#if urlDonate}
				<dt>{$_('donations.donateAction')}</dt>
				<dd><a href={urlDonate} target="_blank" rel="norefer">{urlDonate}</a></dd>
			{/if}
		</dl>
	</section>
	<section>
		<p>
			<slot />
		</p>
	</section>
	<footer>
		<ul>
			{#if urlDonate}
				<li><a href={urlDonate} target="_blank">{$_('donations.donateAction')}</a></li>
			{/if}
			<li>
				<a href="/donations">{$_('donations.backToOverview')}</a>
			</li>
		</ul>
	</footer>
</article>

<style lang="scss">
	header {
		img {
			width: 100%;
			display: block;
		}
		h1 {
			display: block;
			text-align: center;
			z-index: 1;
			transform: translateY(-5rem);
			margin-bottom: -4rem;

			small {
				font-size: 0.5em;
			}
		}
	}

	footer ul {
		list-style: '> ';
	}

	a {
		display: inline;
	}
</style>

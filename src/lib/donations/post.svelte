<script>
	import { _ } from '$lib/i18n';
	import Title from '$lib/header/Title.svelte'

	export let name = $_('donations.donation');
	export let organization;
	export let amount = 0;
	export let urlHome;
	export let urlDonate;
</script>

<Title title="{$_('donations.title')} - {name}"></Title>

<article>
	<header>
		<h1>{name}<br><small>{$_('donations.title')}</small></h1>

		<dl>
			{#if organization}
				<dt>{$_('donations.organization')}</dt>
				<dd>{organization}</dd>
			{/if}
			<dt>{$_('donations.amount')}</dt>
			<dd>{amount} EUR</dd>
			{#if urlHome}
				<dt>{$_('donations.homepage')}</dt>
				<dd>{urlHome}</dd>
			{/if}
			{#if urlDonate}
				<dt>{$_('donations.donateUrl')}</dt>
				<dd><a href={urlDonate} target="_blank">{$_('donations.donateAction')}</a></dd>
			{/if}
		</dl>
	</header>
	<main>
		<p>
			<slot />
		</p>
	</main>
	<footer>
		{#if urlDonate}
			<a href={urlDonate} target="_blank">{$_('donations.donateAction')}</a>
		{/if}
	</footer>
</article>

<style lang="scss">
	h1 {
		text-align: center;

		small {
			font-size: .5em;
		}
	}
</style>

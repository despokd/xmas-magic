<script>
	import { _ } from '$lib/i18n';

	export let name = $_('donations.donation');
	export let organization;
	export let amount = 0;
	export let urlHome;
	export let urlDonate;
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<article>
	<header>
		<h1>{name}</h1>
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

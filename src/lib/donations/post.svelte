<script>
    export let organization = 'Unknown';
    export let name = 'Donation';
	export let amount = 0;
	export let urlHome;
    export let urlDonate;
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<article>
	<header>
		<h1>{ name }</h1>
		<dl>
            <dt>Organization</dt>
            <dd>{organization}</dd>
			<dt>Amount</dt>
			<dd>{amount} EUR</dd>
			{#if urlHome}
				<dt>Homepage</dt>
				<dd>{urlHome} EUR</dd>
			{/if}
            {#if urlDonate}
				<dt>Donate here</dt>
				<dd>{urlDonate} EUR</dd>
			{/if}
		</dl>
	</header>
	<main>
		<slot name="description" />
	</main>
    <footer>
        {#if urlDonate}
        <a href="{ urlDonate }" target="_blank">Donate here</a>
            <dt>Donate here</dt>
            <dd>{urlDonate} EUR</dd>
        {/if}
    </footer>
</article>

<style lang="scss">
</style>
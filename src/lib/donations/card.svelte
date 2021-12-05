<script>
    export let donationId = '#';
    export let name = 'Donation';
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>


<div class="card donation">
    <h2>{ name }</h2>
    <div class="excerpt">
        <slot name="excerpt"></slot>
    </div>
    <a sveltekit:prefetch href="/donations/{donationId}" class="link-arrow-right">Details</a>
</div>
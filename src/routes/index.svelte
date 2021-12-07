<script context="module">
	import { _ } from '$lib/i18n'

	export const prerender = true;
</script>

<svelte:head>
	<title>{$_('home.title')}</title>
</svelte:head>

<div class="content">
	<h1>{$_('home.title')}</h1>
</div>

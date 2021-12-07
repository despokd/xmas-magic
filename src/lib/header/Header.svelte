<script>
	import { _ } from '$lib/i18n';
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.path === '/'}>
				<a sveltekit:prefetch href="/">{$_('header.home')}</a>
			</li>
			<li class:active={$page.path === '/donations'}>
				<a sveltekit:prefetch href="/donations">{$_('header.donations')}</a>
			</li>
			<li class:active={$page.path === '/about'}>
				<a sveltekit:prefetch href="/about">{$_('header.about')}</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	nav {
		margin-inline: auto;
		width: max-content;
	}

	ul {
		list-style: none;
		display: flex;
		gap: 1rem;
		padding: 0;
	}
</style>

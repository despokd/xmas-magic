<script>
	import { _ } from '$lib/i18n';
	import { page } from '$app/stores';
	import IoIosHome from 'svelte-icons/io/IoIosHome.svelte';
</script>

<aside role="banner">
	<nav>
		<ul>
			<li class:active={$page.path === '/'}>
				<a sveltekit:prefetch href="/" aria-label={$_('header.home')} title={$_('header.home')}
					><div class="icon"><IoIosHome /></div></a
				>
			</li>
			<li class:active={$page.path == '/donations' || $page.path.includes('/donations/')}>
				<a sveltekit:prefetch href="/donations" title={$_('header.donations')}
					>{$_('header.donations')}</a
				>
			</li>
			<li class:active={$page.path === '/imprint'}>
				<a sveltekit:prefetch href="/imprint" title={$_('header.imprint')}>{$_('header.imprint')}</a
				>
			</li>
		</ul>
	</nav>
</aside>

<style lang="scss">
	aside {
		min-height: 100vh;
		color: red;

		@media (prefers-color-scheme: dark) {
			color: white;
		}

		position: fixed;
		top: 0;
	}

	nav {
		margin-inline: auto;
		width: max-content;
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		padding: 0;
		margin: 0;
		writing-mode: vertical-lr;
	}

	li {
		font-weight: bold;
		font-size: 1.25rem;
		padding: 1rem 0.5rem;
		transition: 0.3s ease-in-out;
		width: 100%;
		line-height: 2rem;

		@media screen and (min-width: 568px) {
			padding: 1rem;
		}

		&.active,
		&:hover {
			background-color: red;
			color: white;

			.icon {
				color: white;
			}
		}

		a:focus-visible {
			outline: 2px solid black;
			color: black;
			@media (prefers-color-scheme: dark) {
				outline: 2px solid white;
				color: white;
			}
		}
	}

	a {
		background-image: none;
	}

	.icon {
		width: 2rem;
		height: 2rem;
		color: red;

		@media (prefers-color-scheme: dark) {
			color: white;
		}
	}
</style>

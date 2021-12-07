<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.path === '/donations'}>
				<a sveltekit:prefetch href="/donations">Donations</a>
			</li>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
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

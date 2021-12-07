<script>
	import { _ } from '$lib/i18n';
</script>

<footer>
    <nav>
        <ul>
            <li><a href="https://kdomaratius.de" target="_blank">{$_('footer.author')}</a></li>
            <li><a href="https://github.com/despokd/xmas-magic" target="_blank">{$_('footer.project')}</a></li>
        </ul>
    </nav>
</footer>

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
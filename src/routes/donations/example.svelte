<script>
	import { _ } from '$lib/i18n';
	import DonationPost from '$lib/donations/post.svelte';
</script>

<DonationPost amount="0" name={$_('id') == 'de' ? 'Beispiel' : 'Example'}>
	{#if $_('id') == 'de'}
		DE Exercitationem sunt dolor ab. Quod voluptate voluptatem eos quibusdam quidem repellat. Ea
		possimus quaerat perspiciatis id vero minus consequatur. Dolorem quia quo odio. Aperiam eligendi
		enim eveniet sint eveniet. Quos esse dolorum delectus. Sed hic nulla in voluptas assumenda
		veniam at id. Placeat et autem repellendus. Consequatur quo molestiae neque temporibus omnis
		consequuntur est. Est quas eos aut et et ipsum minima. Velit qui dignissimos aspernatur amet.
		Repudiandae mollitia nihil in tenetur ut. Inventore id unde sed. Sint repellendus modi deleniti
		incidunt rerum deserunt earum. Similique fugiat ducimus eveniet aut a voluptas cupiditate
		debitis. Quam atque ipsa ut qui qui natus. Asperiores et qui est explicabo. Magni temporibus sed
		sint est ut voluptatem quia. Praesentium et at debitis repellendus sint aliquid vitae
		consequuntur. Et non numquam sit est sit.
	{:else}
		EN Exercitationem sunt dolor ab. Quod voluptate voluptatem eos quibusdam quidem repellat. Ea
		possimus quaerat perspiciatis id vero minus consequatur. Dolorem quia quo odio. Aperiam eligendi
		enim eveniet sint eveniet. Quos esse dolorum delectus. Sed hic nulla in voluptas assumenda
		veniam at id. Placeat et autem repellendus. Consequatur quo molestiae neque temporibus omnis
		consequuntur est. Est quas eos aut et et ipsum minima. Velit qui dignissimos aspernatur amet.
		Repudiandae mollitia nihil in tenetur ut. Inventore id unde sed. Sint repellendus modi deleniti
		incidunt rerum deserunt earum. Similique fugiat ducimus eveniet aut a voluptas cupiditate
		debitis. Quam atque ipsa ut qui qui natus. Asperiores et qui est explicabo. Magni temporibus sed
		sint est ut voluptatem quia. Praesentium et at debitis repellendus sint aliquid vitae
		consequuntur. Et non numquam sit est sit.
	{/if}
</DonationPost>

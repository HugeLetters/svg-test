<script>
	import SpriteGroup from '$lib/icon/sprite/group.svelte';
	import Sprite from '$lib/icon/sprite/sprite.svelte';
	import { count } from '../count';
</script>

<Sprite />
{#each { length: $count } as _}
	<SpriteGroup />
{/each}

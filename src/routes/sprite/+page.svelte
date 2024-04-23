<script>
	import SpriteGroup from '$lib/icon/sprite/group.svelte';
	import Sprite from '$lib/icon/sprite/sprite.svelte';
	import { count } from '../count';
</script>

<svelte:head>
	<title>Sprite Benchmark for {$count}</title>
</svelte:head>
<Sprite />
{#each { length: $count } as _}
	<SpriteGroup />
{/each}

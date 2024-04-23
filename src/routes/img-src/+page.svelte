<script lang="ts">
	import ImageGroup from '$lib/icon/img-src/group.svelte';
	import Sprite from '$lib/icon/sprite/sprite.svelte';
	import { count } from '../count';
</script>

<svelte:head>
	<title>Image with src Benchmark for {$count}</title>
</svelte:head>
<Sprite />
{#each { length: $count } as _}
	<ImageGroup />
{/each}

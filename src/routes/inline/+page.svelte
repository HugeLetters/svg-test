<script lang="ts">
	import InlineGroup from '$lib/icon/inline/group.svelte';
	import { count } from '../count';
</script>

<svelte:head>
	<title>Inline Benchmark for {$count}</title>
</svelte:head>
{#each { length: $count } as _}
	<InlineGroup />
{/each}

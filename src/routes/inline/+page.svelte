<script lang="ts">
	import InlineGroup from '$lib/icon/inline/group.svelte';
	import { count } from '../count';
</script>

{#each { length: $count } as _}
	<InlineGroup />
{/each}

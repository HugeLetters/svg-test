<script>
	import Arrow from '../asset/arrow.svelte';
	import Bell from '../asset/bell.svelte';
	import Envelope from '../asset/envelope.svelte';
	import Glass from '../asset/glass.svelte';
	import Heart from '../asset/heart.svelte';
</script>

<svg class="root">
	<symbol id="arrow">
		<Arrow />
	</symbol>
	<symbol id="bell">
		<Bell />
	</symbol>
	<symbol id="envelope">
		<Envelope />
	</symbol>
	<symbol id="glass">
		<Glass />
	</symbol>
	<symbol id="heart">
		<Heart />
	</symbol>
</svg>

<style>
	.root {
		display: none;
	}
</style>

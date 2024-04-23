<script lang="ts">
	import { count } from './count';
</script>

<nav>
	<a href="/inline?count={$count}">inline</a>
	<a href="/sprite?count={$count}">sprite</a>
	<a href="/img-src?count={$count}">img with src</a>
</nav>
<form action="">
	<label>
		chunk count:
		<input min="1" max="10000" name="count" type="number" value={$count} />
	</label>
</form>
<div class="root">
	<slot></slot>
</div>

<style>
	:global(svg, img) {
		width: 24px;
		height: 24px;
	}
</style>

<script>
	import { goto } from '$app/navigation';
  function onMenuClick(route) {
		goto(route);
	}
</script>
<p>Notice the route changes to 'wc-ui' and then the loaded Web components internal routes gets picked up by sveltekit.</p>
<button on:click={() => onMenuClick('wc-ui')}>Load my Test Angular Web component</button>
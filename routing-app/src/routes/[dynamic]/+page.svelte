<script>
	import { page } from '$app/stores';
	import WebComponent from '$lib/components/dynamic/WebComponent.svelte';
	const { dynamic } = $page.params;
	const wc = {
		"name": "A Test Angular WC app",
		"route": "wc-ui",
		"url": "/assets/app-wc-ui.js",
		"element": "app-wc-ui"
	};
	const component = wc.route === dynamic? wc : undefined;
  </script>
  <div id="dynamic-wc">
	{#if component}
	  <WebComponent {component}/>
	{/if}
  </div>
  
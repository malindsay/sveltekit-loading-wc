<script>
	import { page } from '$app/stores';
	import WebComponentHead from '$lib/components/dynamic/WebComponentHead.svelte';
  
	const { dynamic } = $page.params;
	const routes = [
		{
			"name": "A Test Angular WC app",
			"route": "wc-ui",
			"url": "/assets/app-wc-ui.js",
			"element": "app-wc-ui"
		},
		{
			"name": "A news Angular App",
			"route": "news-wc",
			"url": "/assets/news-widget.js",
			"element": "news-widget"
		}
	];
	const route = routes.find(route => route.route === dynamic);
	console.log('Dynamic Route: ', dynamic, route);
  </script>
  <div>
	{#if route.element}
	  <WebComponentHead component={route}/>
	{/if}
  </div>
  
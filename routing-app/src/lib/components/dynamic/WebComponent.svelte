<script>
  export let component;
</script>
<svelte:head>
  <script defer src={`${component.url}`}/>
</svelte:head>
<div data-sveltekit-keepfocus>
<svelte:element this={component.element}></svelte:element>
</div>
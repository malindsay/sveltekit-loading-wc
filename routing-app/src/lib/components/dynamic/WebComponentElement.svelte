<script>
  export let component;
</script>

{#if component.element}
  <svelte:element this={component.element}></svelte:element>
{/if}
<script>
  import WebComponentElement from './WebComponentElement.svelte';
  export let component;
</script>
<svelte:head>
  <script defer src={`${component.url}`}/>
</svelte:head>
<WebComponentElement {component} />
<script>
  export let section = false;
  export let heading = "##";
  export let color = "#EFCB68";
  let title = "website";
</script>

{#if section}
  <br>
  <div style="color: {color}">
    <strong>{heading} {title}</strong>
  </div>
  <br>
{/if}

<div>
  I built this website from scratch using <a href="https://kit.svelte.dev/">SvelteKit</a>. Hosting is provided via Vercel.
  The inspiration for the CLI-style interface was heavily influenced by 
  <a href="https://craigfeldman.com">Craig Feldman's website.</a> The source code for
  this website can be <a href="">found here.</a>
</div>

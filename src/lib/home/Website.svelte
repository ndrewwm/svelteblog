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

<div class="block">
  I built this website from scratch using <a href="https://kit.svelte.dev/">SvelteKit</a>. 
  Hosting is provided via Vercel.
  I'm using <a href="https://bulma.io">Bulma</a> as my CSS framework.
  The inspiration for the CLI-style interface was heavily influenced by 
  <a href="https://craigfeldman.com">Craig Feldman's website.</a> The source code for
  this website can be <a href="https://github.com/ndrewwm/svelteblog">found here.</a>
</div>

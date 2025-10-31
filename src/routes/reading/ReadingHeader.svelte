<script>
  import { page } from "$app/state";
  let links = [
    { href: "/reading", text: "reading" },
    { href: "/reading/list", text: "list" },
    { href: "/reading/stats", text: "stats" },
  ];
</script>

<header>
  <h1>
    <a href="/">andrew w. moore</a>
    {#each links as link}
      {#if page.url.pathname !== link.href}
        | <a class="mr-3" href="{link.href}">{link.text}</a>
      {:else}
        | <span class="mr-3">{link.text}</span>
      {/if}
    {/each}
  </h1>
</header>

<style>
  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
  
  header {
    font-family: "Micro 5";
  }

  h1 {
    font-size: 40px;
  }
</style>

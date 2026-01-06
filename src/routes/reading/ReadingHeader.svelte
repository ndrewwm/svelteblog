<script>
  import { page } from "$app/state";
  import { MediaQuery } from "svelte/reactivity";

  let small = new MediaQuery("width < 1000px");
  let links = [
    { href: "/reading", text: "reading" },
    { href: "/reading/list", text: "list" },
    { href: "/reading/stats", text: "stats" },
  ];
</script>

<header>
  <h1>
    <a href="/">{small.current ? "ndrewwm" : "andrew w. moore"}</a>
    {#each links as link}
      {#if page.url.pathname !== link.href}
        | <a class="mr-3" href={link.href}>{link.text}</a>
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
    font-size: 2.5rem;
  }

  @media(width < 1000px) {
    h1 {
      font-size: 2.1rem;
    }
  }
</style>

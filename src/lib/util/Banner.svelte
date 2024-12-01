<script lang="ts">
  export let title: string = "";
  let page_title = 'ndrewwm' + (title !== "" ? ` | ${title}` : "");
</script>

<svelte:head>
  <title>{page_title}</title>
</svelte:head>

<nav class="block mb-1" aria-label="main navigation">
  <span id="brand">
    <a href="/">
      andrew w. moore
    </a>
    {#if title !== ""}
      | {title}
    {/if}
  </span>
</nav>

<style>
  #brand {
    font-family: "Micro 5", monospace;
    font-size: 40px;
  }
</style>

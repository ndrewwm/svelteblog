<script lang="ts">
  export let title: string = "";
  export let link: string = "";
  let page_title = 'ndrewwm' + (title !== "" ? ` | ${title}` : "");
</script>

<svelte:head>
  <title>{page_title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<h1>
  <a href="/">andrew w. moore</a>
  <span style="font-size: smaller;">
  {#if title !== ""}
    {#if link !== ""}
      | <a href={link}>{title}</a>
    {:else}
      |  {title}
    {/if}
  {/if}</span>
</h1>

<style>
  @media (width <= 1000px) {
    h1 {
      font-size: medium;
    }
  }
</style>

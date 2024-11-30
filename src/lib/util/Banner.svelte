<script lang="ts">
  export let title: string = "";
  export let link: string = "";
  let page_title = 'ndrewwm' + (title !== "" ? ` | ${title}` : "");
</script>

<svelte:head>
  <title>{page_title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<div class="is-size-2 mb-3">
  <a href="/">andrew w. moore</a>
  <span class="is-size-4">
    {#if title !== ""}
      {#if link !== ""}
        | <a href={link}>{title}</a>
      {:else}
        |  {title}
      {/if}
    {/if}
  </span>
</div>

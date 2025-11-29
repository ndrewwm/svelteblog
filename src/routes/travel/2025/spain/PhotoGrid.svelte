<script lang="ts">
  let { array }: { array: PhotoObj[] } = $props();

  interface PhotoObj {
    src: string;
    alt: string;
    col?: string;
  }

  let directed = array.map(d => d.col).some(d => d !== undefined);
</script>

<div class="rrow block mb-4">
  <div class="ccolumn">
    {#if !directed}
      {#each array.slice(0, Math.round(array.length / 2)) as img}
        <img src={img.src} alt={img.alt} title={img.alt}>
      {/each}
    {:else}
      {#each array as img}
        {#if img.col === "left"}
          <img src={img.src} alt={img.alt} title={img.alt}>
        {/if}
      {/each}
    {/if}
  </div>
  <div class="ccolumn">
    {#if !directed}
      {#each array.slice(Math.round(array.length / 2), array.length) as img}
        <img src={img.src} alt={img.alt} title={img.alt}>
      {/each}
    {:else}
      {#each array as img}
        {#if img.col === "right"}
          <img src={img.src} alt={img.alt} title={img.alt}>
        {/if}
      {/each}
    {/if}
  </div>
</div>

<style>
  .rrow {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
  }

  .ccolumn {
    flex: 50%;
    padding: 0 4px;
  }

  .ccolumn > img {
    margin-top: 8px;
    vertical-align: middle;
  }
</style>

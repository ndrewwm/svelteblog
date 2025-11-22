<script lang="ts">
  let { array }: { array: PhotoObj[] } = $props();

  interface PhotoObj {
    src: string;
    alt: string;
  }
</script>

<div class="rrow block mb-4">
  <div class="ccolumn">
    {#each array.slice(0, Math.round(array.length / 2)) as img}
      <img src={img.src} alt={img.alt} title={img.alt}>
    {/each}
  </div>
  <div class="ccolumn">
    {#each array.slice(Math.round(array.length / 2), array.length) as img}
      <img src={img.src} alt={img.alt} title={img.alt}>
    {/each}
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

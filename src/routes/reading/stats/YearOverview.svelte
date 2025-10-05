<script lang="ts">
  let { currentYear, selectedYear, currentBooks, lastBooks, primaryColor } = $props();
</script>

<div class="title">
  During
  {#if currentYear === selectedYear}
    <span style="color: {primaryColor}">
      this year, 
    </span> I've
  {:else}
    <span style="color: {primaryColor}">
      {selectedYear},
    </span> I
  {/if}
  finished reading {currentBooks.length} books.
</div>
{#if currentBooks.length !== 0}
  <p class="subtitle">
    {#if currentBooks.length < lastBooks.length}
      This is less than the number I recorded finishing last year ({lastBooks.length}).
    {:else if currentBooks.length === lastBooks.length}
      This is the same as the number I recorded finishing last year.
    {:else}
      This is more than the number I recorded finishing last year ({lastBooks.length}).
    {/if}
  </p>
{/if}

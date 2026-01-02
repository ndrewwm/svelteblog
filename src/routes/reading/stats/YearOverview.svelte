<script lang="ts">
  let { actualYear, selectedYear, currentBooks, lastBooks, primaryColor } = $props();

  let phrase = $state("last year");
  if (selectedYear !== actualYear) {
    phrase = `in ${selectedYear - 1}`;
  }
</script>

<div class="title">
  During
  {#if actualYear === selectedYear}
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
      This is less than the number I recorded {phrase} ({lastBooks.length}).
    {:else if currentBooks.length === lastBooks.length}
      This is the same as the number I recorded {phrase}.
    {:else}
      This is more than the number I recorded {phrase} ({lastBooks.length}).
    {/if}
  </p>
{/if}
